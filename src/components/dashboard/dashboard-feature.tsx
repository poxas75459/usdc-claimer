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
    "3uhmHwHXoWXrCMRt99eSK1jv3Ae2fLSsRvs1uPsHMXk6aWPQMTMAEw5AsaUZawkLrVxN2KydfwXzmZML4p4Rn262"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21cdXdU7qHYJTsW7NNz2j7hDMxmvf7gPC4Hz2atuRcf2mU2ZY4dWvynhEd4kAfZXKAybkDxnCnFJKN8juMjnQKLS",
  "key1": "5iWree72thatPedW4vYY3tGWuGC1fYvny4E4V7DiGKz3RyfzbuTD6cegaqN6RHhTWhRzJQg9cKwmyh9mvfLCcbZY",
  "key2": "5Xbkh39ZbrKf7TVRa9uB6WE8RbPGCBc2D1TEvodM7XLALSYCD5joskdDrR517seXb2C31Ew7UNXPqP1kj7rPAAw",
  "key3": "pfej6D7QKMmSSFVmR522i3aGtVTKkiXnDium3MP4AfESCNdtJ6XNmWhhrAAWsKvsZcHg3FuBvTrmUBsmj8iWnxG",
  "key4": "4Kov8iFpLRguuQwXnnqyiPx1EHLjcABRQJW53aykZs7XsXH2NUiu7MH7f8X7aXHcqnMwoWuL7TKRLmmxR22FpgxK",
  "key5": "48b4BAs9CsiZy8BmP7t1x2hZa5E75YK3f8xDxiSGc1j16824z3StALKDR7wuPNXPFu65p9vCM7dBcqfxB8BgP3Cr",
  "key6": "4HVVKmwMMPbbCbhoGnfhomCknGQh5P7fq8mW2wrdJbtmaEa6Km67cDSHzPJuXLFwSksd7Voa1fzXaDPgxHoQwu3n",
  "key7": "5PJGGD7AkyBiTJYXHXcHFQ4C9qAJYCiPPy54nNQwk6c8X6yKYmwCicR5EVuqGGGGLxRiKD4UP4TYSy7526Mu1aBp",
  "key8": "3PXNfv63rpSJCK42VaR3FZPdNykCE5rbA14jxAPvwcxHHfawG5BoMdGLtco2WAqouhU1tZ4stGyPEePPniXy1bk9",
  "key9": "4tib8888d6Wxj68U6MfwrTNdbrzRCcMxAyQVMUPv4Z7ZJCcH2CNkbDoXbb2ZrZ8Q1KmdenHBr4rbmiyMv1CvGiAG",
  "key10": "3TekxeWZKHjVg4kQQEWAAHQTiqh7Hse4ge9QrednDhft3CexwqALbE5cmBRERVd3V2o3NYCNR3DRx6qocNey6UxW",
  "key11": "4M6b1g4EPd8h5xMLH6cDyaCvMDSJv5wDvu8iaf48HDzFriHpZigm4dHMzNV34ePi4D3nzN67ZhXJe6QF4W1Pbqpf",
  "key12": "4SedJpNyjTtc8dtkATxRzF978ZCKd6bcGdUZK7VsgiqEqhzKXM6bBkCA2C3reB44XP5FzdL4JKt7Aj3m1V1ywc9A",
  "key13": "3HMTnyEDVfHJHZkXd3L8Pc4786wu2QMuAeaAgZbTE3Bccuee9fnf2MquKGcCkjDuVSk2F9smbH7YhWEDbscEqPvk",
  "key14": "3DGSoiudkyqpNk2AuDyYScjLmaN7aHxvGD8RuorgAWB9XB2SJKyFzzgbqcdytD6ysUAofLRLjd7LXga5Sa1o7W8m",
  "key15": "3Q8FtpG64ALYzvfHd37o745epDw2bop7LhxvtHgCGAiRfp4bzAbu1bVibKBcZTL7jYdNnMmhxbWgPNoEA6oyD5ya",
  "key16": "4vSN8ZmseLBU9ZyMyoxyjXJgvb8wLEGLZPfeamvAqHxdoEsxEB2LLburLd81KC6K1LAHmoHa2XjCUhmHbjVUxQS1",
  "key17": "5SCbV8VkKaYNnhcuqHE5EN6ug67qu8KqhKtNeCoqTdpwMdQB6z9pgwNPfJRADhUayFTtNmZPjz82HAGJNfL1JWcM",
  "key18": "1Rmm7njybyn3onuR53pmNtE24EST9xuuboXzVRw573VDtFfXfptAeCDTAkEqu7SWk3AUKKdZMr6ijpdMVA69DyH",
  "key19": "5CBXrxnjCFkDrjmX8h4naEhZw3DWL3ngatc491hmurLXH7YESqted5wGWdCz39gjmVWaCRcF9Dsko44r8MdgQ5Q",
  "key20": "555Gh2VGJAUw8H6G7phuUvYNjP1ZeVUTrTRgZKuHMrbksdGoLRSk9Cthzwye1M6Z9AxqVxcBPB1Aj5XQxNKxreEq",
  "key21": "3LZn4TfmeytABDij4o9Fnpopg3uaUmDFjDXQYZzTwZMqNxEsc4VLUp4QDBzfWjAfap2t2AbnMsavgQ6xZxbkQjyN",
  "key22": "2EQn7WtbGoaPzb3LScbenUbXQNb2ARM22zKXQ9114nDnYcsnoASR9spKsLDm7zMoaPRgXRuc8QBHgBdLjFHLaHJy",
  "key23": "3zg2BieBsVCjtzxJ3LJmyjDw2fDDywKKe1mT49noNebCLj566Jcvddgqz15SQxnfJ2U2sGu8MUDnD7PyZ3EfVTzG",
  "key24": "tz8PaRjCX9563EdTtBhBSq7S742749sDswTSK4sswQ8JvRgz4pxtCP8dEqNbU7iSBZtawkyigZxwmfvgsXfavvN",
  "key25": "3Wqr9H5acRLHTk9jgg6JCbsr3QSJGUGSeXDbTmdUB5mZJ6g3en7Pmkyt2zqjSE7ayFs4fas8hfNsJF2SbGvLJ5Ws",
  "key26": "2Jra2E2VtmBZxvGrCiCBEFiKGEnfHzh5xGWjSZH2FcxDoccMvGDHY4jjcRB3suR7Hd35qTjjvHLNi5TLVgrBUajb",
  "key27": "4uiNBdURPGjAkpK8fKd9suZKAtQ6nxHYJfJ5uXVpdoxWGCQTvNRiGupoq9WvVyRVHdJNwtFi5qiUjcnbnFxo9Zag",
  "key28": "67oHCY2ibRoKUQm9kxamNppZu1QnT5F9Jyspz7F3uhJKU6ikhXkYU7xDoZqvFC6NyV9sCqpPN1E7mWvvGKFGnGy2",
  "key29": "BEmnKLpj1vypoNHcp6vSRNpswsRTLvp9XprmTYvMcJD8rN6zH2BpzWeqBGi479jCL8EZB5oUbHPJm3fE3pNMWe6",
  "key30": "3LcM3LNfXsfH7WAEZNy4L18nnVk1RtcoYdJZFvSBaLM4Li7GtH6yNVWwQvPKdyL9qViQbSpqRm64ThqDVcRoZQoK",
  "key31": "4gHVFXhjGiQkfubk3fpeqnQC9jtQk4krxc2RkVaYswqbXU8kEctwEjjrBdhMDMyfmpXFz9ZSSXfJkwtitDKbS4CA",
  "key32": "5mPdrPHnRTPt5Coq1KfYEdK7q6N6rhBhaySvQ933vqRDytaLhb6vkywsGe2dkaUJAgcSuZihStLGaNnSspZvh73i",
  "key33": "5ahAMgE1JhcdvQtjjA5WWnLQAk8Y3dTG4QxkWtXmCHGDgsownEKbf3mzQLeqsrjRgvYHtVxLSLYa3oqmPezC2iZy",
  "key34": "3WSaRWfeWR3eN6u5AfRKUNQ99C4cXLViBpLprEmCNcqtWVnsrDoPpxqWUjdwbXJn4JdTZ2irujd7kmPcJKYxbsvH",
  "key35": "5LQMyfChdkiM3gYkwWNYkDp1xtNGcQG2iwD6kZqHpFAV1rHvQdL73p8T87SJJLutUWAGeST3AcbwBqWqCzaiZ61F",
  "key36": "19v6NCdS4j8UbPTNqEojwYddVTw2VJUe83GV71nUcxwfJHYG3x4958AnWGaRjxmodVDTJTaNvz8q3Na7RaZBeaW"
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
