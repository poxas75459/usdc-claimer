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
    "5xG1ZbU5mAfqWLLEF1gMoPGXnxfyhcVr3EDmfyMvY1qKzk6FJWeQDTeGoHqCoKTMesHaD2m6Vdh9t1NRDBAN7LXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3du9SV3JhnU6WjX31i9NXwTSSpxrDfPZcZbZKSDcu1NPkXK8RzYoD68dN71usyxfLJ2xEbokTTr17BSz8ATmifmh",
  "key1": "4oPhJY6nD3dVHdUWv2nNj7tczwSwHaNtXwroM4F8BDNXbWCWn36WQzwEzUjyFSdJQsY6wce5i3D7rbRMNF7FPSPU",
  "key2": "4RyZ6GjBofzBHwc7g5wX3pHxWvH1D6kiQsRSZx9YSDrbjMesTCwWvEZ6Dsw8ERe5rX3VqibA7zKdQtEBa3VuLGUp",
  "key3": "37hCUyuxTTCAq4VgaVzC2u38RZF2doeoJkXVmA7ExYAzJkXyidKdg2iP4TzxUaNhApicHGioHjmEjSBuMCwB5odu",
  "key4": "MZbRZ1i69pLM1wqyNwyfTcP7GNqNcAoggyP2oeqLnqhse8qQY8915NjzFSPcvuNAG8LCmsqY5PcZJPULQ9ggZJf",
  "key5": "3zVUA5PESTS6mZZqXKQQmRTBfyjE6BsJtN5HQZg1vBV3BfYRQcQGKzMjpWeJyEgeQwnKJpc4PjHBscbx8jcKzNEh",
  "key6": "6U8bvtgVr52QRGxWxmQpTtoB5Cz9b6RgKo6GY6CcyHhbXmhpHNA4PifMpzbpU7Luuekoq382He5Dr7BtgLFoFVw",
  "key7": "W2YURcvJTVaSytCUxowHdg9H2mMNyDPghm1tekAChfzrC4Cg4RgGscUW7epmvykr6yvCguHnHA38YSv1ozFNHDZ",
  "key8": "3BmbcXyWWwgRqsLpSZ6wiwQ7iE6zJ8siLxtn7PLQ4mKnxxap5KLpJjSfuG2fxnRQ69trkkJDw8yZTK7au7N6kCiv",
  "key9": "AS6cNkrMvMQK1rHLxxxqPMyvfBkjgLD6hZC1erSQcj47JkbHRqo7gpd7XeWQjbTuLwYApbo11nXkUrxkMWMAX5Z",
  "key10": "2B8FttsU3jxFGJnKS2AP3UYZALKYpT1T54YU2rNUccLgEbZQ3eThzKxv13UFyG1wiqL4T4HSSs4Lf7xoMRYaiSMj",
  "key11": "2Q2mHghJBb1CQ1Sa9cAxs5nevC4KJyrg1M7PAgFw5b4UN5FrYN4ifmSms4YtX682iB1Meb12Tc5L3Caiirtvjyu",
  "key12": "2r4R2HhHdmCcqyadawQrMZj6RmEzQoFU2BCrCoX5DnUZYEHW8FBYQQhURmudrkYjnTtgBDGLBMidAM7SEZPN836",
  "key13": "5cDK6Tb8Nukduij2Y44YkMNthsrQJVtFYEo1jPAjj1YLJmzaKCUX7zr8fzZQhx7iEmwnbSm3aqtfgPvWAssUHtmq",
  "key14": "5bP4McFK1PiKRVDpHaeGjtLvw4roErWSBu3j5Vbco6nEecw67rfmD2s1AiEZzJahstZ2STqgezwxVPfzLFP4vWCz",
  "key15": "43aXxWRJ6E31zrHD4uNKVcLg6m6kXqMW1Cpt7MA2V6hoJUk5H67pDaZ8qfq47ap4nkCpHukUzG7R3b5zQGcEnHRh",
  "key16": "2mqXgubaDYtNH5uBPwzV14Mhqqg6PqDzMZCjijCChDkrUuHuDxFZJVUQTQfsMiF5tjMJRDJgHaQcyjnXUfjA9hQv",
  "key17": "3xgZ8YvfFqtYsDEByfrxYifaMNiB8WKRiKSYW2P8montCCLLmZBkEhbsBzu1rcJTPaC6qcQtmzvy3kVkz6VuqCA2",
  "key18": "3eGyX1PJXMohoFkdFrzPavmW5MwzuUjBVSZo2cJpytNRU4ohcDAM86n55xsuWjanykPNQTPSodoBgEShmVxNruH5",
  "key19": "AevBTLWHQoGroPzjZZA3E9ZN3DB8S1rFzoV2YbryUoaXBYViFCFmec7jpAuyJFUTr9wixMD3rtg6i4HEC6bdYxd",
  "key20": "54KHxctc1DVeUpxi9U1bd83Y2dqmcTUGmbxrYZ3d99xsJ5BUuqxRHDCSEWU8jDyw6wxi3jftbv5QUqiXp2t9Jtd6",
  "key21": "393U8DqQkZZ5Gs7cACPKoQL7HaxHF5ozhS976fg8CgrGvDFxSjJ3UCJKGyKgiMrLUGw1NkmQmNZXEEqHJk8GHfe2",
  "key22": "4e95Axf9MbgTnFNvDifcYkWGicWFj1m2cL2U9hQALRxTAyAnXgQqsVshwj2BhYDpyyB5oZxpwtRG1iVLT5NHDsu9",
  "key23": "4sPPj2UhgEzBXfepJNp9XkyMKyrvRN5wZFMXkJTeDvc3x1GdTRg1TBWrefjKkpHET7WocUUdT3CYCkCfEgDViB7K",
  "key24": "4gsYWeCSowpy6YcGb9WrKoAw5qqHw4GS8xD1Y4CELBW1JFFapDHuic7A2AyZc3FYnWs9VV389ce6xCgFxembcxJ6",
  "key25": "2oN5Nae931Q7NnyUfRkByjYA13fuePsn5ByJjQ4D3DgND8TBuV615vYPtRfA9fvjJraUMjX4W6b9zeEdE7qgktYQ",
  "key26": "5QeE3HG1uzp79Cs9NxZxfzQgGdRyduEcbAV9qKZBKvVETQp8mLJW6f4KFQXkvCpmtqHzCgfwGwPNjP66iodrPmDk",
  "key27": "3JEAiUAbsYmHfwCqdmJdb8gBHH2hVqyqjRcrDT3i3vm4tU45RcTqUaUccQVcw335gVQW7wRP7Ru34fWG2ZzJJm6",
  "key28": "4oQcfJ4XMJypFWqJULJxP8hF9ETdbnwQt9wcwcwDANud8euyYFomcbgnQ5YjzsL462ER3jbwGguqTj66jaczo5UA",
  "key29": "2QANJEe5GP9mkbkHgjjBtUTC1NRrTEJb8ZndNrQEzAGaMApwTjzso3ahYXusH2abYk91QMjCCVfTnpoMSPNeBGUS",
  "key30": "KPDqnaqkfHBradoaRNX956uRpKowe5t71b36i8yxC41NrCvy6eQoEBvjpasTsheg9YjkxAZbiyLAqBkrHeC25yk"
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
