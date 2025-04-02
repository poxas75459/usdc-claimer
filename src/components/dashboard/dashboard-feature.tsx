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
    "rBemefjRUig4cQeNuHtyKJ4Gjfu7qzyFAtXkuJTQYJV51NuAoe4dLzdBwaAvcxVrkyJHwJqSEezQQ2japiGXUj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoK75f7fjGYr641oLEacLqycPA69iyq4SzfUKMKzRDsJJwDMBhGf8LgQBvZ8nqELm3yBNJrbnsp4u4EfH6Hi9Hq",
  "key1": "4mNGxcSUMenhK4B4FKPsEsHa9tC2Vkh8jnQAthA7nwzUiDPsz4mqrLzp73feS86QJPmM7gbZWw5HMTEJHUncZWxM",
  "key2": "37th1WfgxLzXby3WMhLjT6piX5Ya4yfCrMmQcK8zkfdLDrRY4qLr56eCJS7rTzUrpQtQFGYrV8VXGbEHhAKW6cyt",
  "key3": "r62UcHRjrtYszU6G7N9sW729hYrfJUNuAqRxEzSM5zQfUgFPsP19ChVfgXgUYcaU3HL7SgTeCqN9yVKSghxntD7",
  "key4": "38GsuLLV6qx72JTqmoNa5CCpfNTjAvDhpnEU3Ee7MiyVLxAuCCViPFSwfm1jqkGkTcmsHjSxY7GQvVw62KD8gHD8",
  "key5": "5ebKJPPvD1hutaQhGMy29tE3P9BhZnNxTzaJ4uZGPMkWgQA2mdwBEyTHKrTe4G8rWigJPwcR4iBygkpNZ5yicSW7",
  "key6": "2yFPL4aqYCVKzu9YnSVTDW4DDYGXhR8TtxTk3R7P1CtFUyrdNL8ChoFQWqCNwz3xsfVimRYDU2CmrjnxuYpKXMLS",
  "key7": "3NgoPbpUmDeXhL6QPHmVrbZ5WHtKRZtMm6FzV4A1nqAV9ZesAtArV1TgVy9ENwmtZArmGTuWGsDgESBc3AiuiXLK",
  "key8": "2agUGDuT5mxPNhKhk9Tskg2hZmHj9BJ43Rb3h1VqpSTicCFSgyeLYY8nfsPJy1NcayeQnnNCS5MHY7DLMh3N65Lx",
  "key9": "4EehLQHzPhACvdBZ5w1nQYEQE1kHnJxVkxve6jZqr8J5Eu4dRqWZqTHB7fC8x9mtJfeZoxSYVqf41STFsR3RZ1Ku",
  "key10": "9GtFVmvZGHKDUzVVPA4wT1FJJYRqK2bcTx6WoCR6W2XARnSdEVFrT7LK5ND4aop7JCqN8SZPa6Q3raFLTVENYJX",
  "key11": "4iWDq97DyFioQ931qkYJovsT96UJy8nQ5QnnrKMeP4PsjFDY9cqXfps9eZ6pUXVtotGFddn2XcmGJ8YcQz1EQXfn",
  "key12": "5755p4qFhjnvfKtL4xU6bAJBdPoEXqrQKc5xf2DezDecBtCpNG83QLudMEQgu7hB7kw21mr4YomaVzAvDZySgUF7",
  "key13": "2R3ge8u8JLzMP7go9PbfteAFgieHwaGsqA8Hs66frQHcPVrGFsTzEq49wUCVwdGhBqHktJqEWXRa8guCU26bPcZa",
  "key14": "4ZDbkQJcChDbhM4GSwEW7Zg9m4f3BYssGSxv3eixk6m4Sge4s1gancTK2crRBjmFWh8VoNaeREjThHFz4Bw2B6Du",
  "key15": "5kcoGaybWAuWxCfCza5yuVzrNGTtoVKXYyj5fAeCzZsGWXkiTGFoRuK11ttfPaCNsAgVuqdtviV4dhvVJiCbRwzZ",
  "key16": "4BDtusgrvZ97fM2bwpUUZ5R35oJRjbYbzD5ewcH1U7ayifKKeQ5vJxD6Dtkpyghafka6JdDBbdiYzPgkZUPcw5aA",
  "key17": "2fGTV7v9MhZNdCUtt3u3fpbaey2X2AoKmyjb4V7XFCQPwBbzFSFrvNXHd7L9rdgT5Acc4orHQjX7oPgVGaUTgn7R",
  "key18": "A97JbrQ15YKooPsazugyNmVXSXpc66FQGoW3UgQnDw6KAo2G8eHHaD665s7JNYYvmLVHdAJd1LJXLRGr8RpZTVt",
  "key19": "4QxjDkst1FNatd1qNBfg4E5TjvC9g7HdiLhFW4HfcBn52YkrNwTyB9LyMXqvGVx4Tc21ouHxhzVcNDJDUuuCfq5q",
  "key20": "4uHAmXydUyRGfRRXbCD65tyLvu15Mepr4QTaad3ky1ziPRkWcDSmXdSPPykT228qbQpLchrLZSoesFi9WhpdpFCc",
  "key21": "2NyFMhaeSRT8K5kUTCbarDqUz6Rh5dsBwJX4axBchyaGz1nH6ej94GrhUAE3jNLoDdh1AoiQjYj2VqTJPPbdaUSW",
  "key22": "2pY1gkE3bBdKi4ALEXzU5sxsRMBUQhz155KsGENyqbPFmiNFkjdt8WCdq3R6zuH7GftUQz2XSyNkCrBfMRrCGxE4",
  "key23": "4a5qaaY5iB7YbKeSj54LrzL1A4UnKrVFbWcxKLagsB82QdDCCV1YSkKKMnGB8xWb8bcGx5AZuN6Zz3UgnY5NVHs7",
  "key24": "5eZ3ugM1bC3FniZ7fZcVbUNioKodfWcMyhYRgUUTMnLTUA1MgnrnJk2mUy3KxWy1ZJVv8birG3WV6ZtT6HZnFg6r",
  "key25": "ULaCGXGZJBTdjX3ExKr3p5FcmztpqAwnQDW6PoUvRnthyY4J38RKqosTLpBLdh9KV4c4BebfB8HtUFnyb73dopx",
  "key26": "43TxRRUikTwAoNPSLUiFuqGARY89mskgA49s9NNfGm4SyEGsbyTr86gZwsQs8UefZigxcpUHkuaznxgewu5ELvE7",
  "key27": "3otUY8HhzgGKR8aHyiqaE6YZ8DDcGmR7gGFfR2iqAc4fuEnoR2tsSB7Rra3GHY1NmgJqqRb6QnpkJG64Hu6s1nBA",
  "key28": "36AqXpkQfQTp1b6LdmaJG5tCUBKiLKbCi3xZTwFhH1tW5CdVkPD5JpKrY2tsdUvCTzvDh35xgAkdTL2shiSW2r4h",
  "key29": "62H6WEzhu3BN4SN7JwDRV4bN4tw7TWFQefJ9s3yCgpFTXD4WKmpTzJ83xpj2TsRAhWWmDQxNC5qoaJdCNJos6djk",
  "key30": "2S1EXyLXvvTDebkF6QaTQNMd1b2iWGGn1HybH5nkD5NG3wEEKT83mTQKxk65XYyFxa2RBegZzdhFLFHcyXBBi9zK",
  "key31": "2oLjGLZ33JBtNsWLGzeqx7faXCGX32nLGda5x1U9L9ZzTsk8cDHqsw82rrhZPHRtV4X4FjDDBEmwwG9iBhEcEdJ8",
  "key32": "4cbXAvMfjaUbYomHu2cjHmGn6EeXKDA1Y9gixuSDAdZW2PjdStwy5bWjVKN5GkwyYGGxfhXkLxeoM9zcDGuuRwch",
  "key33": "4uY6zr9F4Fdnvm1S6jTC5Ee9BMrRodf74VvSdVwCLiN9tAYFjepfm3V4S8LAvmWtZAr8ntpiAoEawUzQ2NsbJTsV",
  "key34": "5Pci5DwY12peEmQp3kqeiYgJHtGSAZVN2Q9LS1WoNf8o9x43TpdjXfzHdYL13bcyvGteRyqQPcFVDdekei7FsKx",
  "key35": "59EsWvuDnemybRfhbSLx5bRhXpVaY18BAx8Ek2C9bEcBJqx7UvpjVotmS1hCbqC6VHjQTM1zzjZPAsSMaUuZmDwK",
  "key36": "G9VtPxSDpTtop2PENqy6PCZHx8dugnZc7DUJ8EXKveWH6mp7YnrDtkhmbm23eK6ze4t4UrUPpn8D6rLkWpvdJ5f",
  "key37": "3gBdLHC2FtnzUYpR6Du3rhEmFURpcg62Rwyz8oDoXMQauTNaZcBGevisHXWwtWXQC1fQrrk4BP7ZXtLNmnZyZnvQ",
  "key38": "3vkMbkPYV4KVY3mvcwEhjHAJH8jT2HSLaEb5tfNmR3GbqcCBnP5YQbknwYYvqqSfnXPWJAQKMGYdMSbKXJyr8y4i"
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
