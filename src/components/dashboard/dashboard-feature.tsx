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
    "nMyCF6zk5GVM1hzYCqHx3mHUJmuEAGW74aB7vrTaJJfZgjfx9Js4km8xoENV5ETQ7hvHrYS5oNw9K4oJazc6WjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1ngDV2UxtH2R9tx7amV1TLkKVuTPatPpFTPieiJ7NMPJBmYxJjgn9nauTZJX9oNHMMu2bNPQzn8JEof2ao6cEx",
  "key1": "5R79gpkcAkmtFzhCC8eq6wLpiqRzdFq9yvfFQKTtZUP9zwU8BLHCApxLrmb66ocdtn8YgvguwwDxLNV2QeDLDNaY",
  "key2": "3xzvYT3wvURXnhNoY5KUREt1Z12H2fmQMwfhPbmBU8AoHR2RTUoEXqX9Bdtu5bSKEFqqxdZywkNZfbMzkensqY9e",
  "key3": "4XTXqeDVxpF494acKEf3V4y1xxXsux4J38NKJ5YZETVbqnsfhhySacqWrqWoRDGcjMPzABfq5QaGXhAGHAnjW4qo",
  "key4": "bDDLJYyfJh1JsibqTfzWTzXmphqiArEpNeKWffg9U8dH9sT4T1zDf47Usz4B3PprixEM6ywG4a5MySR9pLJwHn7",
  "key5": "5KveG4kPib5Ltj2CEw5L6chacCqaUhqehXBuvEN5M3wBx1NnD98oe9g8htM22N6BtRxjh79Htc4VWtNLtx1iRq5j",
  "key6": "5rXCCyH2i4dt8nSfGujDaEjySwkJR8MqGBDSZGySspBu4ajhUCdjnDfXMDBBre7rjYPtNQW7qGDUXnFNMChxH3j5",
  "key7": "3V1hAmCwaTt4C1U81VcEizdJ3vwdLWLhtukgUnEhEbpGYunBdNr15SbNDsK8NDCdHjoWuPk5saf9EEhcr7g8kheQ",
  "key8": "4iTnsXZ6DX9q6V8QyEdn6BiukiRUst1i1wJZ7FWb1Z2sHRewKr4LUEzVUFs8iz6rz7LiyYMWU8By6ujMfyshAs8P",
  "key9": "gV14Nk6jSdPDL5RTDNJ3y2b65519SSCm4Q6rxyijmaJhJJgdLUzi9Chcnhm2PT4k2fCLxae2AT6Y1iLQCi4VshF",
  "key10": "e7KWNxJv8atPc8nahuMz7H9EtPQmJa7XYShmKy5EeSfGMGN6YWbPdYgzrEfnkgAHhzCkaSPsHVXwXNhEQzUV4Zv",
  "key11": "3drgpAiWtUGkMkXRtYSptLKKGFBixbg7Kyg8RBcVskv7rCLxQuK9RBE7GKB1tAg2NL4ELYPRaAtUau3v5V2cusbW",
  "key12": "3fqZiv2zC2S81aQABe5Zu2V722HEy6fB3Dn2BF83CrzbLiNqim7FfmERjVHJDVR9XNm9bsYdcYBC3x85N22aZJds",
  "key13": "2ZmxpJ3XNrgsVVPhXTP27DfAeneib8cZMHSmS4pLNiZwWjwdTbfA8Hirk4yeW6k9koWKXCBVetCBw4wkszuxdnjv",
  "key14": "28VfwhYgKeF883tHAADPrnPjAaeUGzBJhPz1Fcz49EoUvoAzEwDYfqxp9GVBibekLTMmPeiBxxWtdPMg4dpt3oxk",
  "key15": "5kJqhF7HMmKjYwX8j6dTVo6kcJ4QA1FGo2h897yUuxRWbLYjDmv5TENV92wSjLV5QhtxNuN4omzM4WwSfVrTdwp",
  "key16": "4hXEsRhUpKXFW62MrnFynfsM9iAJUHXWAfLUTFPNtNrXVwZqX1jsjFkg52GgE75d4tS1eJKaHAJDP4rhxg4fnhiE",
  "key17": "2oSPnJ5c22gAg6mpBDYCZqW1GLrJ2SvTf4w8USUMZbw86BzcTz46bGuYNtgwVrqKk5ZW9oG9QrsTV1YRaqEf2vrM",
  "key18": "49SjhniWfgD53ypsHUjrdBsXYqknMWjRvkkcxQR6UXvbRysd9JYhu4zri9dMGKXUr7TwibwDm9ko2bJpxAP22bvw",
  "key19": "478qRC4dcYzEw7WnKG6MCkZQ5Zj5NBtaxoHMejtHJwxunZ7TAK783AXfY4DGiLrx1GMZJh3P35faUWBVrpTo3Wu1",
  "key20": "2nTH7We6MN2cHTjHJqVJaETqrJ2Tn1wCMWducZX4vtDPAAZuqf5h4zHxefAmGg8CJWo4qpVFXo3t5uSRAbgzqxny",
  "key21": "3xP6Hf2oyTLfAd16S6cihwvFru8xxnkNuuKDbwffZxGd6Uo2Vm3Lw8aZYs2mEguwJWfuHNAwn8XKpQRm6XfvF87w",
  "key22": "5L1NwQePhnfoP2Uj55q1Xvw1f13XyFVLtGsPoDfGonn7TY1AkqCCcUX3o69oXsx5Rfjk6BpTfvLQ9knA4v1LCHsS",
  "key23": "47p1Y21voDMzv1P3oY73J3hub8iQsi1XTUkpJEy1HdpfJkaZ8gMq4cYzv3RwmLSkUKtCj2nuxGwJVvHwNhW5cvwJ",
  "key24": "WLdgstaz4rzDbfFcGp8CcvB5yYgBESJFGvbESYvWA9eJDgDDpDMeQPb4gD2EWwBMEixWY2mDFHq9oVhRDRUNpP4",
  "key25": "259FgCUcAahzVZ5rQcKSDdXZPRoZdtwWbpA3wunz7e4mz9e2Ta7H9d11uJwjejKnEpsoEkEy5Tx9pu9AsnxaWMej",
  "key26": "3LZgmRvr9A5eRUeNignoBVbeUwzWgFHYGDmZU1mDXs4AJBTe7JQBDGV65xa7tLiDCytWEVPD33attPurZQWdP7EV",
  "key27": "34Rn7gTUwJCXiGuWd2EgpZPf11U7CJCxA2UCx52QNXnfgnvA4HbxCRnctr1tcPgqEiS5YjSFVzBVBArbFKgAmKP8",
  "key28": "5DxDgTugYXdKzz2XwbnBGZgvkmDeZoMELFoKBVG7XQYYv9zU4BaiDb3Ta2RdiBa49YKsHarNi6o1cP7d1cgybzwL",
  "key29": "3Hjf4tMYNATGF1YiMCD9EQnf5ykZCzgAFF3CUbsMyhFtkvJaVQX3bNaqp1tcKKfuP2kTzgp4w9txXs1JgN3SQzn7",
  "key30": "647a8J65xVkahc64vAyHJspUbmmaTZQQSVC23XG1qg7UZwjJb77yiTWDLXcrikRVaK64V4NPSMHF7pEt4qUiYAg1",
  "key31": "VAqUk4VHCHY72zSuvGpmrcpLv3kMnt6vVADmG2C1aRf1VKYCxhfx3NCJJ86EFuwmYmUrqaLZyEYhhXyZp1BrsjB",
  "key32": "n4ma6GrMPEQWconSWTgaUU5GSt3fXyvHk8XRNHaLcq8pVM37ifVx7QKQr6s7FVUFE2MHKHj3iTbFQ7oFWn5wktH",
  "key33": "256zeooADZGpBCDEMnvBwggbkZxKS7bvJ3TnxYSYzE4fte7Qu7V1tLNvC78nHy5ywFiwFXP8d9E74kft9F5UH3gm",
  "key34": "UEmSDixR8wgdVaedbkGGykweYc5viz7ef2Acy26Lf7HNVYchcJNcEugsjAw54b5esvfNW9gcAospEsU99d9D6Z2",
  "key35": "29kywxt4Z82CJPBUU8ucFZTftTGyuxnAvwh9D16CdBJRxCv7bibJNQqobkDGsuabaXGQPVLPQMxoLBA2Mo9zgsMh",
  "key36": "61AQdwKNBHtiYYEACXqh9GqBYX7xMK2YWDuyAwxZ59DTFuqnRyCUg9zfPkApPT5japEH9uVTusS9LVp95wU673wn",
  "key37": "47rBahmvF1ccUPUMVgSnw552UminRLzVdArveBt6Jtie5gUMQQbSoLdSNyjqxtTndYbQWZM3SSe776bTibdTbWhn",
  "key38": "2rsGQM1quqeicQWz2Y75kcAESSy7cENBtGzArYMK3pLxihkc6kfLDRXPh11Y1xM4uLomxggpQjicupntwYW5iEoR",
  "key39": "2o76B3FWic4WztLaL4B3kWBKwXLfhTqpmua8nFYmyiqboQDZk8tZs5P3fkANk1PHtpmkd14YjqSpbtpuzEkEWR26",
  "key40": "4eudjraS37A6MiRvkjvy8E2q2B4deaziAxBfszhqu2Disexzv3dcSLMdxB66Fc9omNaHxYUQ4h3NX7ugSB2oMTpf",
  "key41": "uXfUbr7UqN7ydiSiv2vQ3cdcuR3cKi6Ro1UcbmS5k5UsBouiNNZFhGNkNuRiM3YXY67oEreryXKmYgD8Gk76nQD",
  "key42": "pe7v2AKsAWMre6v2fKkd2Mr3MGXKzZaxa218xaKQpcEQCQjyUnx33AFJgHuw1LWZeJmsmoshGfg7nKVuCgfKejZ",
  "key43": "FjfvWgdKfPcLLTJDaoUNsSfoS83xQKqycniqtHkhxAwMzapoMb4t8PxFef6rGFkutKV5abNgF9T1QiPFQBgfecM",
  "key44": "4ELfVCtfHSsnawJV5dm3Q24QHBYdTm6Lr38ZYFKBvovhZ6wxQFGGoPoAvCp9BV4jb3B9ve38XkE9B8RnrmY96gsd",
  "key45": "5qyzVxvFGzu878B5VkRfejH4PebCXQ42hoPWt9e28wVpLrRfFdJNtHSnKyqsjH67Wz2zEPoTviuH3BrG7k4yZQy7",
  "key46": "4yM2NiQzQq8qWVdGZsyJ5S7Caw2i5eGkXvmAvEGfKCG5qxRU37PB2NfbNndmEHsZ2eSNpCQNAZGpnfL6JdxmykFH",
  "key47": "eFVLtU8NvzopMVyy3Z9bUS3iv4fUfa6AZrCYu1aZkZ95beeJKdGz8ffhcBvtwbULJz4JpsNYFrHyw3bMGyWe4LM",
  "key48": "4U5fZRY6fwbryNVBkFBXqAaGtTZn5KNX5aCnVmGWfhoMM84wuqDDJi2Md2ncCGA91zdLnuXYxQLsXHCUsK2JR3hx"
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
