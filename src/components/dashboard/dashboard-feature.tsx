/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2YubZhp4xRMVnwMVTFREyTdF5gmEimxJWPCXDg5mKCxc1CW85JmJ6a5mAWVXPZD9RDmNKCfpeCfnfnSGndpVbpVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528KMQPVV2WMSQ75K5YAvX35iikf7ysittckog6UVuucdXwGC9YeqRXNxKgc6oSpgu1ysJ7EjWu8MU6YbP8yaFtS",
  "key1": "4ggWBeoQ7Cpt1SNZKXVsM3eyjzcs7FwnBrujdSbSkgQPLomRQYR9vXRSKgKK3zh9N4FYRtbiqLh3SNtV5HsBFpoj",
  "key2": "4qLYopaPQ7V8HfQpX3YoDDFAjh3huP3aeEhr41ZvHCa9DFW4YGHxsyrDetaU7sojeF1Zz6xYPdDXF3qnkdehDsKr",
  "key3": "2v6nJ3Auh8J66dDff9hyxGrkPUhdLPLz3VMTPT94Pc4ZmqWJPaag4YpUTbPRfYqvXn5d1GSJ5CG7sregDgY2EdJc",
  "key4": "3anyNj4DRHVqM9GApjPKYmba6cET5ZHVteYqEDF7EKykH29w6ZB8friPLBsJ485xsuSR3bYSmhNvTedQKndPa5Um",
  "key5": "47syK3CeiTbaapdQjeewGHqHnD4ZdrhMgetn5CEDabWEEPpv4eoHQTGZJNL56cHu2FLaYdqhhMiC3FyCSoya8FS6",
  "key6": "2q37R7ispZghprEr2SjYstD9t7ka2AzMiccRodCh7grjQ2rBWErEdTnxsAG4cQuPLtpZ55RPvee6mATTHRv6pnhP",
  "key7": "3pPDbyZ1PaBbumPCXyp8PaBnNGriUxqpy1qZ2o72QEmPakvEFGErEswbxcib8HTuoqNb7PPX2UeFFpvXYsC8aEtR",
  "key8": "5zUtmepiHFiw9uy8CYEKaPnFzhSPJ4scL71Roa8tczEA2ZcXgacRiZNVJR1KZKvtxi1FQpLeYZHyRDKuE35ChZdk",
  "key9": "2pcsemhchtCpDChY8xkW9tnRoRBqatd4aMUc9RoWxDYP6aQ9i9DLRXiCf1yjE4GzcQ9gXYzgXtmj4GmZ7bWXRqf7",
  "key10": "4kNuocPnc2ZzUzzhrCw8P9ABX18jbw4KL5DyhDqD3eGDgWZAKy5HdUzj7771ifAZFRDvVwASGp865CVmQSC4oo97",
  "key11": "uJyLFBeVvYmEW1DN84oEXg2T4RMrX3FwtiWnYNYLDtp6Ld1x2V7L7JvASUBgQTqufDkrVBFCuzCFx2aLtrd2oKh",
  "key12": "3WkGQYKeB7Adh2HyQw14svgBkFpYuFSaSnBm5hhFcFZL2GyWPZy9fve7EdHS9P36voLjTmnusuxu1y5Jy8QX6RKf",
  "key13": "5ufGJFiyBHvSPzEsV1TdmhnmyvXqFTXZxuuRKafmksYiRLqjYLbJk9aVSAmwbR3n2ufan1kngZF5Qaib9qqHzJV",
  "key14": "4acP3GtyGW9KYrQbGcE3kGPKrEmMaMCNZxuLSEQaBKprSj3EM3tu8WfACZBnZz873AFwJvsXfrg2QYibJsShZCFP",
  "key15": "m6jRCo12xSTHKPvTGYEpfinSgR8vD2XEqfNuXiM8XRduZSwsJLYVzswDdrYCrxstoPRU2hgxvxYqPx847gk1VVN",
  "key16": "avL1DjyTVkZGSdSxffVCBBmvw1RYT3MXuR2FWHGg1hcCPxVMDb8cSAgXGxCK5Ht3SkssxmWRz3Cop7TZm2FwfUb",
  "key17": "42p7KJPEHcShauo9XjP3kMVogZVm4h1XNVnjcRv7WxG4qvKLpTTbWvS5So2ztybGxi2yNYx6bTJxS9JQf6UdaY8z",
  "key18": "3woJFtuyLYpGihudGArsQ2Yy34YjZ6ZUBMaqxYqTm3ufNKxp5PRHZMy97NkTzgTxDotphUuPXM7UDMnzgQjUFaq9",
  "key19": "5oUAzkqpiT5JrSCtdqjTkMBxJ9VMiB3dVGsQ9nNqHtNeCMrohuiVo5yDwqg3EKcS72CWnopEPGvBGz9QxxmXk7DA",
  "key20": "28JhdqTfLKgHuzCMpT7Nev2fidYEbw7Vfppm6z2zUraeTr28wMeH6xAsyRyPni37Kcf6iysneyArSEcS6V41LDkT",
  "key21": "3CBeAxNERuiBnKU815xV4fXzDZZGoF2BPoJCsHKhG3hnqhfqZaCM1rGZZeC1kmALE7BowFFr4awt3wUaU1FysqC9",
  "key22": "3UbvFTakEj2zbyDRNAJGxxiQuZDFnDcPhfwFXR2gSQNmPzpL5WELzr5ZR57VAbCGiJ8CL17Gci9i9s84EHcEcnFD",
  "key23": "3Xbr2T6qqsG1novq3XP8uYo5HnBDwdouuQFoA9Qipf4SAkK51ydLXMNXWN3mLtqiU5Ex9duwGaV87zAoTHrypMRi",
  "key24": "65WLYr7pjP9qMhVQSVPgpkgJQxgFJwyocLvSqTTJR4TGMqpbUkKPyGf7hKJvSRqcZs2kcF1h6dF8TLetx7dHWphH",
  "key25": "4iWJfoEw57RoEjtrkMEHoky9vzUm3fqpwR7yYpWCr6D79UW2f9MjsnAiqrdETVBvFL2B4CFYiAsMQV8Yv9XMMexc",
  "key26": "5HasPpoAMDJyMzWecq3JtdG7MnQZsLwoZXX3LWee85mtm7MTr2XoCMGF2LAw2RGSkMYciaZ8qWcSJoU22cXSpZTG",
  "key27": "3fh37Zqpj3cHwpkKVWMk98ZZ2zy9UqrQXcujic58DCsFYvWoq9u15kk214rf3sorzcU2ZCpczwAcTZ3cR4dECKjY",
  "key28": "3NNNBNqeZEfFpi6NmHvMs2HV69FXMTEbHctytj9UG1XQJZUPvu7R8pmKRwyMYLbbBJXNybkjvEb8Y3j35QvQKMSn",
  "key29": "2HV2bLDHYLANQMuXmx5ak9PWabrJtVc1wgTB5QbNU2r2nh59ZH1cLYVwu2eVdvcZowiZRvgS29TqCT63mbYr9GyT",
  "key30": "5s6UnvktZnvGQ96jDvtJ3RzhPbX6CfFBD2oDQz1KCF46syJtMcYhsqHgrv5MosoE5FTJoxVSBf8PcvL5GUFLYA9m",
  "key31": "ZtdFmLPu68HQLkrqHxKycZs52R2PunoGYGUxLV3hkuknWoE2rLMfCqfhEo5GYJqBuwGVCpce7mGsARivpNXXpTd",
  "key32": "5VXDzPFQ2J4noPWc8QVZb99FrtjkH1b4N7bj2V1R6mMuLgAijAHX25GhoBPUc6Aua85jgpGHsjnQj6DJ82jRhTyN",
  "key33": "2YX5aTwDwLYZSVt5TPvLh8cLrqNWNQPAg4UpdthU45wDLz2DiiNVDqE2ScWjs43XVLHNN47azWbLZgsxs8jA8wR4",
  "key34": "4kssPkAwDg7wUhEM1YWquCXD8M9QP8ao3egExjt8M1EG7FRtmRb6dnR9wFkzUjDYUQhogDDjpQKiCJh6wHkXheZQ",
  "key35": "4zs1oKtnrwgT2mKnN3i7BFsKdRDkP8o7hArLKENoqsLCzTGxQoW38rjDHMJyyJpaABoeeTvZEt28DB2guKa3jBGa",
  "key36": "a4WfyTnc92UL1qrzAF7y5puhzBTi9cXCNtAk7qJympeVMhANdHfGVAcbJDjQnhB5dqqPXcYxtiWo87UNRKPVw5M",
  "key37": "Qhi9CHu5QimGDKpbJ2meGUKVnos2bcrLaEgoYP6yUZuj638nWgZ1vCMDcTApPyty9TqCsBHH7g4uRWbmkhFxmrL",
  "key38": "2ue6YApeuYwfvLX83btMpW5ebHouHxyCburEcKVKzNiYxW3L4xnkGxUNV9wqb8AEnZRLXWxyh4rZDTxdp2yEXdGA",
  "key39": "cNfGXErMWdJVcfPPGYjvLEuaFagiudcBKy2WwnYr724ByLnMJHjUr8koVDNwKj83Kwbmrd2sbBQjDT4Vn6JvL1z",
  "key40": "4P7eAgbWu5R26D8CAzjurLqorbjgvYg6pLbo52sAhFVVBbUKCWVrmj1Mk9gsYgnBtgBAXs71Zhk8yaNQ5EaUKUd2",
  "key41": "4cgKUPxqh8y2oSEdcXTXdgD1HzZkahfNrfDCUyPQmPmKSoZRKqrMA7bPetZz32phT1j7qB6h8DPGySV4MNshY2Xa",
  "key42": "6q1i57oyD2APtpfSd97ajkqHJUCW1mVpHwJizX3BTgzXQgc3eYeDTfqZGKYe9dJid2JdCjUQ15Po4ekrDX4J6oA",
  "key43": "21G6pvWTQhecRYpPDUbJzEtirAPyjTDw6uPL1Xn7cNTxW5Sem68AQfN8Lj8C6VU3LZKP9S63AGtnDA3fcX7cKVdh",
  "key44": "2DWgK6R4H621UgRbtxcqHjAoAtFRq6T4YbcravgeUv4ee43Z41Rs42m23XC6hxP5aMuinJDzwsWEeMbLcqnL4a4J"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
