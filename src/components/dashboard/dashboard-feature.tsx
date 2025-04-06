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
    "YTJGQwfJm4gVGwgKc2xfLpL6Vmg5YeyuoR8pr1ARtXroCJzRBN49qA56NVEDrVU8fxNukRjwU7WzDQU9DQwRsn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dWr7wbVfSMqhr4VcpD6YC11WzVqh7MQ8PFzMsbRgj4f9z2ct19HJMZ9z7dk4sDq7zWqv4VvE7p3KoezvuSTLtUa",
  "key1": "7y1FeasYUMAxV9DT6keMVhf19bvtkDQ33B82bhT1Jk5TA3LXXbdNoE7Sdiv5g3rPuszVrSxSZiNRtuc9bDBV2ws",
  "key2": "5M75hxWb3u1xusK64pgM7GqKk7DpMeLBDptkmkUDiWgzJwugRQP8wpVXcPHp2pwzYrL5eeLLkd1GJtDKrNHD8g3k",
  "key3": "35TmvSdij37UYs67w7LSSRwFFCpsFb4DBWraeKRBWX5WqdGu3JGoat9FUKrBZmokLiEwraSrWzxcSoxxtQs7oybY",
  "key4": "42CCR4zwYfHa9GaRjgDyrEFx3rDrjbMeXBFcxtVCCKoRMqU4whRbebyK3AakZG1pJG8NNxk2M1VuFqN1p8fnsjD",
  "key5": "rHrsiuqji2VtcsvgG5oh2eVMso8Zgid5nCLaPxKkroV6GCKMDf5Vg6FceLhBxfRx5owk8rnB9KdpY2wAAgqxg2u",
  "key6": "tTd5mJNqvMgH3W2LC3xDD6rSfj8dzhmWs8pdiEHuyr2RXtKwWod2KcdbYrKGCd2y9Hw9YS2CSqNsnwPgfTunCaK",
  "key7": "2KGkREnBwckzEcbVyXZB7VN3UPM6A8rvfY1RzHQjM2LWEneaBJzsxzYi8dGGaUzEooXfpG1FtKaPtnEw5rcJepbG",
  "key8": "3VjcbSDjzTtRwHVn7F8AQpAtFYbCaN4fxMGTXsXRXbEymGJSf23BqQ8GZGLhF8h7cXqxS3b2t7xqCLvrAnrEjRsA",
  "key9": "4szBu6qAyroa4wAMyspCou1R8NFpe3eV7Rvu4wxsse2HmEmo4E5Rd5PfvrQSXA7bpGZ7DfX8DLCQnHfCtWSEVPzv",
  "key10": "RVXUNJST5F1umMmUwoKr3E1tX5JoyeVaEnmmLM6r61eej2QPm3Gju5tcMua6VitJWErL6UE5BrSytnt8xPJj7rh",
  "key11": "ZGznMent6skBpM5T4Nb9t6Ap14qe4otPZdKuJTwi5QGCARXU8FkJx13R9L4pewzAqfJM8jiNKGFQiJsTyz13yKS",
  "key12": "44kxrEhNURB7s1xURZWdYhNEnRasHnXWvf1gRRjnKspT7akyE1ToWL1hHKv59eLvoCjkNFf7tiCeMvEchyGQfmc6",
  "key13": "2emKNKm46hiwQGASwUUkavdRnYP78GRsex3ytiqs1hDJWSUG9fedU5qEv4Qg9dc1mnwQHiW1FkAEPYLhWsKaQWme",
  "key14": "3iJ5mTH1jLNhCpfsArNfJuoVstopSnxCnsRD6UbCaxx7cCNW7E2E1NtjyKxcEN4CL6sp1ktgutTgrhGF4G5temz4",
  "key15": "1DYYP7NyPweChe8BGRhmY5hcvtPBRGGA19uY9re3MrSXEq5di5cjLtM4nF7qngXhvTsK4aKRfK7ZDabfwFvRob4",
  "key16": "GFWDcJfX6p7aZRGBpdNFJRAwuYkQfaZwryfdwkqLWCrD7uYiykmfihSZdVRuCVxE9nWreKCGybT9DGhq236xXfK",
  "key17": "5au75cAzJLNru5BbVnHgE7gZYpNiPCUSHVZCt5hNE549QZ8muxEH9BNXkiS74wPNMJEaYytYnPeRJCxm8GsHqFUp",
  "key18": "5No84wc82zt8WgZYdhJbGeCzEXLSfegcgyBL3NCV3oqUYsNRRr4PwSuvtNDDqKZ3K9XnbCSXKybb7wUEFg6Cr9BN",
  "key19": "PArXdZGvkQBg7fApwV637DJAWgsCzf21cmqiMww1SXfmCPbU2u66uQYhApQXVYHNFtagv3HB4XoR38qBBhEnLwY",
  "key20": "4wXJjnym1KTCxRYZ3jddFy9tCwxJnLF3VeURLW1NA9LhLa26ssnLKwtbQNnvE9CGFM7jE8SprNYSy3itm3SCPrQS",
  "key21": "2FYhx1gnS9hACqYfK5D1xDr4mZHz2qvWBYL7mcVN5rc32QXbB8Lmc81nSLAy5SrtrCR9nic9b7tu4S9YhUeDJEhE",
  "key22": "9QUDtWk16T6oUXZCacSMvm8hX6Nid2sy3ZzN1hCEqNMMER7zx3Whh5hnn13dVc7WKzEA2c61iPLayvGZ3ceRKPS",
  "key23": "3gLdGte8Pa1pCpFw47XFVQStozw5vaAWeTGTz6XbYbJD1nQcynJ1mXrFsa6PBvvnFu2q3ERRcdey3fcv6n3jviPq",
  "key24": "2UXKk8cszNkgaQHJjokXL9jACU2jv6UQg36JPzVzx6fyqHMb8eqJA7fSfE1ng4j5XZtGon5HFdgUTy3GeV762xrL",
  "key25": "67mQsxWRmvuwJqiibtiZ4Q35K4EQj8vE62CUoW8auxStaPkGr5asXwZFzKEy26542mMeDm6GswguxpJWh5Gz3Sz9",
  "key26": "2t4oLFRE23gNdtUDcdjy1k8NJzVMxeYnuoFQZ1qtLR9vXyiQSN9uFbgLuRMJhAgy1F9LZztHq4i8Wjhdei24NtAg",
  "key27": "4Bxg9dvRVzaD7ZFXiMQPRuRdh9QAX7ww6mrom88xHM96mU7KkPxrpziqXP7Z1GVhXk7GYLCSFYh8L3SVHMXb5q7W",
  "key28": "4WtmHRs6kSDHv36RNGyzUdu3zaFfvBw5i26Pwvx7tUSfa8BW3p66kQvVxpoLrWoYuhBVzP4vy4ireFU9eB8pr1qr",
  "key29": "4ygH984AJ3hR24uTDGfzBCeM1ys2JyQQQVcdw3y4fvKjNRu3r4QWBPcSys8pAQGBJuS7wqVzaNmc2kUTeXj2hw2w",
  "key30": "5rZscTiQNRk63F4K3zzrRAyDNVVwJsymp9yxMxa3HvH11U9CbHub15ELyNWZJCosKk6tZ1f3CVjBXeAd3aPZKF5x",
  "key31": "5qhKZGRhNyVbuPwBRw1cajK8SBnrkuekTEVH6hw42ht6xricWeRnmVdT4VNinJofuu2NFChdMrx9Liwfao1KySMG",
  "key32": "kgQk89nKaG2ioVvDaBE3hi9dT1qw52DkQMUftUGPu7P2XLzS5uCnNyTp4iBj8qFYGgQt9Rs1XPJFcrGEfKvPCBx",
  "key33": "2efYhtp8KWfZrdNm9N8g5pCQ6eGswwRw7F79EkiV3f58YZ1PcGjzp3s4i8nHhfPEfZWgXhPWX2iJynHgNd8rXXxJ",
  "key34": "4KS9a8kD4sRAnxdSM2qGWBaRuCHM4KPXWNyXL1EC8bXMxYFMU3nfJvtnEUcSro3zPs4tEMP8WvvWZeVEBMo4ADSn",
  "key35": "5xxQoiZfPgoPy77nA98gsbgCy7hWB9ry1m1eLcTyHCRNRUuuXfB3DZ9XT8r5ThFk6pRHfssFvFcRYeFm4ti2q372",
  "key36": "53tanFZE7WiqGpzkoFNa1VuYhobN71AbPCPmPink6K1SvKHjrWC7y6WTC4WmkjSNkbdqoUU581bFne2DTUsSWJRS",
  "key37": "4PgfHxHK7eafPRep64iztxMb4P8NHU7H1biYx8b1DSAAtjCGkdtfNmzpfYgaQneQViwJGhPpu5Df8CUGahvNqWQf",
  "key38": "5B4P3CURwM3SjfUDSZ5fMaUwj5z8eZMSadvRE5knSwVpnVSXViNEMaYHbhMckSkw2ZS9qtbbTmSU3SVr14dc3SWJ",
  "key39": "3QgKWRivxczwXyzmZyrJNtsbf4sRpN9u4Afmqi6vVV6BZ2trt8HaRsaezmh3vVMX3AQzbi9JUM6rNRPysBvhPEP7",
  "key40": "2eahfv8rdddbHksw6ZAibTBUjoUig2Bqrw7XuML3vVFaeWs7sMazY9CS8HsgcULBJfvu37LDgs8B9BCbGWc73mwu",
  "key41": "5WsgHa96pN9KHwF9u4TarDBEFiqMwhA3neWL9MxhxVgyE3hfgNmjSTZzZ8nqkRzABa1Uj29wfBiCgDsfNC9m1FPm",
  "key42": "3afsr8aafsdTuTALLLu6XXBDUptP7yUmMpioK9t7qJhttsX59GXcGeRqTAn94s96BGCZTxvRZ4ftj594pryaevF",
  "key43": "4quWTrWMPuAeobMNNAcVfqiyfVu5MMqKqxeoQaAcRnC2kJvt9fxivjxvmwYEDeANhu7kQ9LMgcdWL4jR4KyfyXyo",
  "key44": "3MmkWmhAcswhJNgT86jdcvtuzfRMB6VXoMRQPMa8BNXRZhoDwjcgxBnSPjfC9DHXJJ7kiXf2Sr9cSZMRFW3ArB64",
  "key45": "29QpsjGrk1GT2mTXHEvP6TqaXosuBxHDjCkU1THMo3ZR4nSrGBrmGW1HK3ae1uY4vTML2svCUitXmyRviNxgbE6z",
  "key46": "4EZfRoCrznKXAyrxYzpC4U1UZqp3M7vcAenhTBXowLuhntbi2vHCaj5fjLzxEZ3ucMbYu4wGevzaPef9YR5VRYkJ",
  "key47": "3J1p4sfPLoBcByomUtanmqwy4rtwrjSNUzCUn4EmnzEqxcVnuQ9fPupwyH14LxuVyPVCUMoczfRto5o8FeMQq9fT"
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
