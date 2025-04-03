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
    "3Up3JocsvS19dZcTjNPUisuXwMs6BEJLCvU6VnKXHp2PG7tqunrrZv1S2hx8Pfg57ZXc7j5NpmMXFJfEbgZCpJaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gBqd1nGkDDbBXZ8VGwRbsxfLsdZLLp63yrqmQ2aSRYjy8QrroSRmcvEZFunVSTn2WuRt664ySBr6X3skM5xztt",
  "key1": "3tmkH1VCNnirjtbpJhSJrHjYj4ku4xZUPtwNchggmLB158bYjd2V2pubsgAawrSD9p7RfzfATGzWyUxcc5Ak1moH",
  "key2": "3HzJQ1EMuXeq9A7b71VAbjeDe6TwTD3cWnt7FnP9LxirntmRZQCkCE26mXPHD7MmAm1YTzbtBB8yqgRQTD4PWt9k",
  "key3": "2aiQjgVPbiMLcSHmsLKnDcdH5CJgo5V9mTXjB7q4VATroxyyLnKuxmevN2tkMwuAuJ8TwceTuuvf9JaBhDTAYREK",
  "key4": "4ZG7UHnxkUm77nBFdM4ogv312dDhjvSHDcp6pmZcvQjcMvYxpoCupGtYn4R9Auo9RYeLFztRCoxpC45kPFfTk7US",
  "key5": "3DKAVPtmH2gBNBTeq6LS2JMaT2379ooArJ8hCmj6pteYufkCq5f6Q3ZkEePk2P2dsytPTTkw4W4tdgy4qBLJe12",
  "key6": "44a8BJqRZANA3Pm32QvLFb9xbCpjTbA4puHvGYHSQwYFtF6aQjZ9x3drdJ27qXwUKntw3YHefEiodED9T5J1iYW2",
  "key7": "4wFKvJWZMWDvNTNR4BNZkW1QFTrgvHdUGz5zTwz3UBFwramviMUynNHmB4VBFtRsQKAH9UJutxH8fgfqNQT81TQz",
  "key8": "3BVZbuZdr1pZRdqYDx6GD1joy9bPfd5yAi1x4dibgt7moy7cibxp29MxgYkjpr2EPJSDU3CfsqidKUMBfRXpCJh6",
  "key9": "4bxsEVmMArs9z3UZ1b7VbpaBoNaNPxyn4Zkq7u2CYkgBaEZFMZ6L1aE1Sv7QtU4BNTmQonRMuPNxk5WSFpsPWzPC",
  "key10": "cgdfDyCSq1teB7JmLcZj1JdZdm3EHu3bjD1FVEht2AF53dtGdE15Vmj3xnUKY3ifDdrpuRcooYbNdqABf5LCUYx",
  "key11": "2cyhDPDUoT69D6ax2DxaCKPS7EAp1uKb1eRvhV6jmmYf7w1iWmBnqHUk7DUHEBeycriecefvHCopEJ3dJT1mAFba",
  "key12": "2rhMzr9Tcb8WrNK1Mg3GZcvQ9pUtAzt2gYVW6hFpDWRA8BBphzgN9jtdPyE4wazLLEoeyJ1d7YQhQAUXPv1RrKwD",
  "key13": "4xW3BYpDvgr5qzmNZgS6GLn8Df7tJgCLofPqv2UzBjJnpmjVGdTyaQ51jJAm7pmUmYkFV2Va44BesqvYVQJL5oiv",
  "key14": "3xDDX3MpufTuHCDSUhWjXh7wt4qdNsWBcokDwaU3iTRRv7v92Nc6Y1BWBeXTFUcbT7sJXnwtC4aKRoyFwxg5mFH7",
  "key15": "61cNqJPvEeacwm9ewxw6PJK5m5ytxkeJHdJr9okdfuuXyjFdzqDfYTkvRhHKV7X7kQPp769XZJJj4aNeBNqjowCK",
  "key16": "2MUkTRjMvoaTdvXhUXubLdALMdJVD31GPnXGzL8kzkVr73BUqoMvHJVXXXSm9wJtZm7iU7tNBtQPBt5poSTve9SV",
  "key17": "BjkSzUCLjGJTWgm6K8u2xdVFysvAdr17JudPQMRvZNn4Ue8zfHrpJgKmwPYNbvYhYQgGuH3sRhrmH7tCrXse4S3",
  "key18": "5CcfETQhGFvHRXdj6wmr3HQKSP1AErusgy9f2ksEK9M8C5dWxhCbWWesNLraZBZPRhoQB1VwrzJwX459EMhDEQwX",
  "key19": "p1kXwPByPHQv4cbXAp9ciqZu2qhCBMg74CQRmaqe8ePfbrLLDepHfg3KTtHreTC5QtLDnW9CEYJHPCPsRTRW1U3",
  "key20": "4a44eW927AFd2q2AiKarYCTx9MpjndyNbXng2hd5evPbSvK1CApEW3HeqSNagmQ8oLPgoM57NgWj7ynLT3XAgBU9",
  "key21": "5ZABYXgZKXR7riXpxsatKJw2cNQjjKTN518YMhbjRRDeEGuNEb7yq3Es3MoE7uW5bNnXsaqE4nCQqySXWDRUbx6s",
  "key22": "bscVfcPCnGKUAxU3D6pgTFs2Y1wyDsnnGcKYC3FDwqDnPgqZSrr9dzvgx7V5Q7k5xp9Q2mT7MX3TpUeszGKhEeT",
  "key23": "2dXPQWsCJSuGSZJgF6eaG5Jbtmeu6bm853fJE1Vuq6geeAzjRJZkVGFEM3f4ahhLS2ug2ittupieQoZJwfkaUQS2",
  "key24": "A9gEX4xmEukTSeEEKg77mVtSfWhTqR1gj79Ywdq2pt87TLNGm4qKSPwGY15Dv3c49cKfgQoV7FPbP2h7QezE915",
  "key25": "3kEwEm2iWjzR92Vzw9iakR6JJcXzwDopYoCUZpDAEEejBuhybYgda2FvH4nUMk7xUfgp4Qt3bX2ZLJttxjJtasYA",
  "key26": "5kGbyqE8JiihySpPH713uG4zz6GJMemZux4HY69WmVGwZARgnkYiyoXxMiTB7CLA22FZ7BMdwtsur5niQgvLfprB",
  "key27": "4AFQuVpuNYJN7jMj5NKoFWqSgqQey8vyhPukA3V8CD7NAxxesL6g4vaGfheGFwYL6TPKbsowz2jLqQfLmTZdGFGU",
  "key28": "toco2XiKvP3f2cgWiGTFvMQdWSLSJGV3Kak3Ww7bgrEQfq5pRFg53THtQPn2YNzwCJ8chHyjYh7QKKVkM774NhZ",
  "key29": "58cdGtmJNiAKq9qe3Mk65dzTRkTsG3vmUsfgLKb6bQNUdVFE2tZaRDNPfVSU4Gf53u43wtkZm4Hddk8hnbGuPTzX",
  "key30": "3kraG2ggtTqcE3mHG3GGRrL16GgzLsz2kc9Mhh5JAesuWFVqT4uHWeJXHtZaqfcjRRcvt9dbwRqNjEZ1NRHxYb5f",
  "key31": "2wGRTL9RFjTRvQwfi9uwb5mBA8KrevAwh8bX2YWVADvkzEuwT4stkfLsPZ2vBaELMg9ZNouYQg63VaU9onAPuGqp",
  "key32": "4uxZTBuUMUHM8vXajCZGnmZQSW2VSTZRv7eqPe734jVSNfyx9VGGfQM5S5RKkBXtY5KKoAEXrZN9fb55U8wQJuKY",
  "key33": "vCMNDggMtZS4UgU1zpWbBsCVeBQiBiTGKBWWGDAkBFHaeFUAxuLVTf52EQQ5SWbrVvyN5yxVsKBLxFWCVgUxa9Y",
  "key34": "22W7rsrhC1WYP52yseX6d383rjSdqHPS3aV4nzG3fACB5dB8yCqJMo45hT7ntkJ89vBibkDojaS8XoLMJaPVX2pn",
  "key35": "58sDNLhrYgNj93YxPdTr79Q1Pr7VRMYsf3YNVSH6GtfpeNFWSPB62T1RNUtqfErNKku79cJPRJhj8B3ArekHLPXE",
  "key36": "39ommwhTJhRZsLm13DBJ1Py17LVVYrwikX96Y97JbgdGdWvRx5vqZEX1CZs95KjsjeGrhRxDz7MDDiSjq5jn48wf",
  "key37": "3T31kbUDj16U9injUWKSQ7CQMKAfCDAX2qVsZC3Pf92eKrHrCyh81guusYyw3whkfTE9rFvUy5wC5tHLuVhHANBw",
  "key38": "3b2szYckPf5imc9fpt1foYn52GGhgGpn95qs4oeq5FEWUXJggr3ddBr16GjJ6LsCmzGYj4C1GPffhsTaB7m9KT1v",
  "key39": "57e9hShTtH2WdThtxgxnepbYacZi75cPX1NovgohhKntFYtwW6uKLwpHDCZc6Feu4iJSf4hSYnT3VtC2wg9Fok5J",
  "key40": "5EurFark1rgwC77TqWqRkV41u4v1DtSsJqPLBbLLmsemsHCDJdvirsMjM3Wc9T1aus9TatvBC4ksBKnnrsUsioxf",
  "key41": "2Txr5m6d8Lh9ki4ZvzAZVGXctfQQaXtQvNfprsRnBt1usqaawQ92hScdZXAxVH4Jz2JRoN9gpoQza8rYHkNpCbFn"
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
