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
    "ndgtJswQUWxQ35oa4sjP7vDCLktwULf1cQnKsxRs2H2dartszntxMhY8qqF9d6J7tLnR25JcqpUoxZjZ1osfwiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkpvHTchUNVqMctkHjq5oRA1dHzWZiesQbca4APQWNt43DGV8j8q7Sm9LYhsmddPNxEqnNZWBXUmfqqKGrRTqM4",
  "key1": "5XhuwdBEUZUdUKoiz96Te6CVnYCAEK6LA369cew4Pt1TZaUpXMLG4Y96wcVWpFU8QwBWWKDHWTcyzNhAE1jQMyyZ",
  "key2": "2KsUSe2qNJHk8wjoJ6bfJjRUV22k3vB1rSHePb2SUREys1b9CWCNaZ78A5aMxFh4m5UKuSQNfHy1nKR7ps5WFfKY",
  "key3": "5VMXu3f8ikFb5AwTezAR7xan96ckDAfuxm63Khkg36hsHa1Cxbv3PdPPffybwEt9UHNwSv5LsaaFKVUVUMXfKP7f",
  "key4": "JeM922M3Y5QCZmmV6zKS5ct2R5jejG6Au61x1VHLY6keZJU8yCUYE5nXruTZsMZoJGBETfbpe8xvZtasa95jveM",
  "key5": "5eqA9w9JZrZ2y4ZtCTAqWvkNwUg5hWNhU522CGudMQFgxdo8Mj366v92FEd4SNP5eNTXKv7LfcQKCqju3R4vXkhw",
  "key6": "24hXNQjBkgy4npTxWvEq469qn3HCEgiVXa7CGundshfaox3n4ZWaQKYzqNjSAZZNVPDxHC3uTmepeZkJCLchjUQf",
  "key7": "3S4GkJxQQVSUgsV9t8YQvMA4rZLTNg5mgVMvXSB6X1dGCvYQKa4JQAWgNUMsVsTgQw6Du5AN3G7KZEz92EvjTbTT",
  "key8": "44nwLbobycponwqbN6cKYzVLwWH2Agg2pFr4DyAjH9HEssLhspxF6b3ZHWqcZ5rmTDMEtQfBXY47nK2afKMvXnLE",
  "key9": "4woegGhrQPBwewiLa4FxTKE1DpwaWucTYUKnDB87W4Cf1JwZbeKsdSpeti1aASrCwcnB8MfvjZQEiFGaFaNLMmEp",
  "key10": "3kAarhp15fzFUNHiUSEBHTZA8TZRvBs8bisvWxctMf48t8UkeGb14D5QkvTjEK7SogKSDh8pCGicop9yzqe7DZDR",
  "key11": "5GmJSpRpA86EbF5jCsM6HNTG7aTp32kvAiMW4MU1zrmGdbRv7dUw3niQS9pmLZRHSG9J2NnuNMkxdYpebmsRuH9d",
  "key12": "5STvdGTc1sZZpwkoiVwuYtvP8ozWXxTVUiX7QL3hjF6Z533DaqNtr9cVQhcQKGZpmKqciFqWfbx6aSz8DS1Wxots",
  "key13": "xtKoxup8icYpf16jmeYAJmevMGQTh6N5bdG65tJVQg3CpU5USJJMUcKTGFLA8NhQgradPUU5YcinSDNhAH2jbsR",
  "key14": "2BQmLZm4eB7bFoeJds7BP4Maiiw9U9Vh1idMiyNm6vx75x5tbsDe4PyTzgJAzoFoCnRHvojEyq9rqrzcMGvjTNeK",
  "key15": "5Ax1qYPvtmYQQ4euK9E8buWnd89qvJjqPUe97myQdsvGHufKUwuEzupTUZTnySpVNZASVGd8kMyaSiZNDoMBFDQn",
  "key16": "4GmfUWV72uNFaWZRZYrHcCQiz2gPqHFwRaMwwZrxCR3CtWi45H8NAVupW8CcSktkCfVcfboZAMogo2CUdTVVb5P3",
  "key17": "65tb3uTdbdyABT5yShYq87xsHph68fBVkHxJd8LZtDPEzzSG3hUqG6GsdSNaG1f1AM5pN5DNQxwm7xrbttp3WSQk",
  "key18": "3U5jBX9jcxN9pQ7r2Pa9azqjkfDPmdTKGJSY2LfbtGf72J1px6QorD6XbKDJNDnFhrbqC7kRf4AY84gQMFgPpVvp",
  "key19": "3L7GQhFGBm2N5yRLdpHpU1Efz898FKDKFfsodz9TJ42k26NRwUGVLaW8HRri9zNe1q6T2Xzs9H5i8bUubS4We1mQ",
  "key20": "2RQMUApeA25L4frY1X8eWBmsmRZEBPPCexC464DafJzy9PR11WHmzN9vUe5vgAAYbG3KQtrv65Epcx25Sgv3ZTk7",
  "key21": "3YZaNf7WDzXNcfHEim1Be5Jvf9VwiF6EU6tRrfV6itprBRZD3VfTkh2AVQn8xJko5gnBGtivnX3gHtd86ZFBzBCf",
  "key22": "L9vsgEdSHkGRK6jy1w67g3EZCdTGUAjBiP5xGqqnh3Da8AkYLrZv9rmDQG33rLcDGsAk3TVoWtGwd5TmRNoS8EY",
  "key23": "4y5MhH83TvBnCqwy28stcQKvyx742u7iSR9ZA5LTsvRsB9EV49SmEcy9Ma7DDhcnZf7XupkuoQwEYbrXw5DnqHLC",
  "key24": "32u5Y9AERcepNsdhLsfdnbJSa2TETzLfHcdG7Wc1JUhQj1GHikQ37nvMta5o5qvDfPbgXHSrpWfsmnizdabqSNKs",
  "key25": "5a7qDiM37rT8hZs2Y4XkR4fpasYdSqJFgY6f5jq8DZF9GhdEaN53TGFdDzx4aufuQX37DZP2FqS6FmG7Lj5QZymd",
  "key26": "47evs3Gqd4wwNmU8n6k83fC5yx86htUi7aquSpPPQxksAMMNab2V5hrX2D7hWpBzDsJyhLAjGRZsD1iDvarfkdtP",
  "key27": "5DvvkpMYxNRVCyogHe42JWP5ADGfZ4UfSpQjUJfgeZRPvhS6XLHhZxSADEZ5JfM8gXyRhi1GUfcxkTzD8Zbxz8vb",
  "key28": "2MF59uMY1Lo7tKL1n8QVMj7g5Mfm2j7Wgp8f7JgKBm6D7cyehi4uZP1ZVfzaeGbamtfoNDENiS9zeWP2SVxLAnNj",
  "key29": "4FC1GmSDsAotYsCgNRKGpRtZzugSoVMvqg3MtsGczPLKr1PUGEhrJNPvmfpdPgCLZcRvCU6ptoka4nMTVBLESYot",
  "key30": "gRwKd4T82Sn16iqC2MEtzCPwKgZZCmAsoYsm4ccPAMYo4oZ1HCxiJVbnQWyGQWujeThVirn7hvWxr6NvPgcs1Jh",
  "key31": "UgMhoW5dWQNVEYk9NqBt4jkk61P6ecb2cNuWt7fncsGJ2giQAELiQKsRjpf5CNpJ2oKLxqMaL5QYvCGzHfBrcT6",
  "key32": "8u6PhXyyqi259EFLwPmLyD7o61JuznUxkabxxfFg6QZD5TSaqDmrYSDg5hYpYUehpxvd8CBKHDmfTXbH2LtmhUF",
  "key33": "4f4Ww5URQdTGTFswJRtwkKyrmnVuHVHRTc7mG5LpP7h8fdGrRKD25gKym8qHKVRCb4aYejWfixaecErpNjw1ZqgG",
  "key34": "3QVhxaappipHED4XTG8DuoVPcepTWgzKBaZW2ezrMSt88u7TkByPwyRJSFWqL4Nim9n1CiprB398ptbLWkQ3NaG1",
  "key35": "4HCiozZhRx34KazTzt5BT2ZcT7MgBuCdvNSf7tBuxbR718Z9dJefqHXBqngUHf24khZrvg5nS17erygAvwi9b3db",
  "key36": "4j88YXZWqw1WLuXY24UWggoSwrrgqH84s7Zqg6MSfzHGCqSMYMSopbbUxz5Pg3t1RcCHLGV49oztzcrTnzLceYPs",
  "key37": "4jTyEracT8eeFhC6XXJhwQN14yeRkmu8KS8UyvvecWw1nUyG62c8VfNYoQaoV97WoRnJdAzRjHXMZG1vi9qGRzbv",
  "key38": "5Re9gaDsiFUhVhFKtRQ82TU8iAsywdN9QKgtQrB5cdkApAauh2z5sYbY864zV6MXHeiwbzevWaRpAwdAE4C3To73",
  "key39": "5Q62hnzpbUpHi8pPsXUVgRnQX4Wdw5yX3MVPvQi9yPGjBJy4ZN783MrJUFjtaxv1tUanVjesL73mLvXrNcacpYJG",
  "key40": "2hooYqbHdj8NhtKKqauQBrCZoraGNNczPZ9VeNQnW7jtPKnus7xQhNKBRoNR5SV9ncaW63KpqGWKJjVvrdoe2TzZ"
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
