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
    "5DmG9TDjD163ckLbyPa7JKW4SvcawB3qkaABZykHk6UV6XC1XiySJAFpY3h7QnUq5XHYbCzNoJ7KteVY3rETDrP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcK5Je5UoFMCam5dnv1x5b7vshHmnRXfHQcDYbMVfDQHhbMqxTMcZT5JKxYBHkUnaYBifyNadi4BMAcBy3umK4p",
  "key1": "2Czrb9mLEXxUbhFHM3pNDDLbqkAWurrCgUHrHZVRfumZoaopMViYV79cBEG8G7LMYMhc2UkuYGYnTnTxF9VzB2X",
  "key2": "XyMUGmhbkyRDJAQGSwZ5yHWmbqAbZuaGb9nvihoHZeizPoeJ7j9mpEyaCEeq3awR39uc87Z6QfAjWQohMFSqo97",
  "key3": "WmEQHSb4XXgodDLJXXHvAvXa5hdF7KFW8ZfjzEPdujDzs2LDTDxZnyGgGbbJuvJ9LzgeidKCtR6dRkfiMLvAe3Y",
  "key4": "34tpdZJRwPjoKXFwFn3kRemzV4gV82L3jMorpu1pJFjNw9XggagiJHkgKvRRi7XxHV8XVai3WREkowuA9X3zPhXe",
  "key5": "4TZLapdTN6f4Ypmk4Pcz75axEX9H5W5SenGaiHt4vCieWN8XwjUqEs4AXJZsAfw6XrRD648P1jy3AR7Yircbcwvi",
  "key6": "37d1JzhJVGNLwkGEVbDehM1Vxn5sQcLHGsogZsHoPDGdpz7NksdpuHq2JYWWmWtwiQq4ASWfca7TcUZs52jUTKFA",
  "key7": "RHxtVyJsFGDESyz5oG8fG6jmKq6zFnAsAjsHxn3WPdfpkg74aK8nwuubCFJwhVn4C6ftYkxpNJ8rJNaDmU9N27C",
  "key8": "5FumRzHayJX82uyTejcha5hHf9zbxR5XUAaEjHNNNV6bkMF1FkytTcDKLNQLqfxAZHYUgEpMEmNVYPvRxDvswN5k",
  "key9": "2BWyvVGijV9dQCg1FMh8v2ZnMLwD21jeYJDQH3Lew8LLn7bwrY1zmGhbCZsc9QvsfQN62piBhyNkdCVVaf4oqbWo",
  "key10": "4xmmrEV6RFwGewCucp2KezLkx7mwYF2onZ5TDD2BQWivUUPTqPdGXijBayXqD8gLvbVr7p6oMcPZasU914Rd6Mkb",
  "key11": "q82dW8fQoiMUQ9vyi3c4Rhpwa9AA76ni7HrwrBzktbAbyFruNCjTe6TRj4hTwNuJoFJBFchJqVNY6L9Pe7wmnyG",
  "key12": "3TXonrrRGvs5xehcRp5SYMbEVp3oBwJzUuAXjS8AuJb5nsevaCq8HjB5TBQHHUG4pwtYtfA9C9NuF9swo44qhmUU",
  "key13": "28JconVtRHDSMXRhHxPaw5SQB4tGpkUHyv5r3VEuXjMTqsTwzfQH78BsbfESNmLvELmg7cPbsnfpnQcMMrkorrKP",
  "key14": "4T8AN3yxn12XWHDh8CZnY1PmeZan78K7vyQpVma8MmWY7j93sxvoPruFfyMi3QY1NgyakqybrFRBGp8VucyU64RT",
  "key15": "LExAejjopGk9HnULE6hfhRfEFeaUUo9bR6CnBAmtwWyg7AxknNQLQRKU7RGKq8NkBj3wi3YR7nZwW2ijGz72RsJ",
  "key16": "4CQY7xYMnR7ApQ7sRRcRNt6pGLgnwakJEU1vGzQXRMDSSWwABNwiPDnzZHGH4xcA3Z2S9Bmf6Y5ngXtMVr61Td8A",
  "key17": "5FDHNJMVfu5dGAT3ushbPaormoSNoh8gAYQZBhmVRQqCVbsvaqDVqyrZeSPq7rPdGTaJDL5csFWSYsLJxeppooGe",
  "key18": "54WDncZA4vCSTmg5gCBDSRLZZegKjHrcPJ5v4dSJZY6Lhi2krraRyYUjz2wgzeN25LEHiuPez2UjH3GJ9GX2mT3Y",
  "key19": "34wVT8QQnvTNBhTmpBBa62vx539PioRZ9dfu3ikVwZg3nR4P8sFAd1wFRrcaJceTVVXqsfEgL7u66iQCpXZFDstf",
  "key20": "5FQ647w2mae8T5AQFWVUxRFuxaBz5WvJQKf93MJxkXSzCcrU5fhMoe13EeZLEUccJuwLz1KxQT5Ub6cPipMh1xU1",
  "key21": "4YtgndrpKs2WRsR4ggapU43PFCooAxN5cDkaDrH82VrDKvhd9BG6ewP7yfv8hkzaEABLhabudBDCamYXh7QmrLME",
  "key22": "sX1iXTDede3PuFRhn2qsUJw38srKSYFGUPrv6WpxfHikXsog2swLoUFMUjdpgb41S3xVfXkt4ScJfJ3RWhiLD3N",
  "key23": "2Eih62MA3TKVT6wt5qAgcs8PYJKgf7vNfbef5jNhbjia2TdeocG8kPZ95giY81aTUndzntKEb5gaZte4mKQ4QYJ5",
  "key24": "5jm8MTUntC5S8rTvMYpZZ9zeLu8RvER8WuFnuKdF5nqHYNnbLas2ZwspRQ2vxiXWwLWyD5VYN2RNxA9pY26pTHeU",
  "key25": "525NWbEaoUDL6WxgU3zLY9hA8N6VfhqLuPs7voLWWuGrymJBG2Axg7Ve549ureZ9LLqa3VfF3HaYhA5jcZMXS25s",
  "key26": "4n9xU8kJ7mbmLJr2eTSgpUytWK2bfkCw7gf2EC389uMh2vqb2gmRZgXNpCAi7VkAveU2FjkhsXFKm4rTzj3F8nvo",
  "key27": "4FJLjdtFpA8jtJYK6oYkjF4Ac96SKRaPNBxDj2hsYAfforThyyktkQ6aoYijA1kVsdnsV6zZbqiEGj2afMWV1jk5",
  "key28": "uEDEM5VvvQFriZbFh5Gbd1VZRwQ5jgfhS9znFUrbFWBN883zrE7nWUU4KH9dM3DnYu2RqAMjmoukootLccHuBGc",
  "key29": "66a7NGU3kpxpJD5WbjspXCJMg8GzkcJunZjUwyYtrUB8yinhKMCT47QfRKc3bXkn2YNtXtZGYK28J9V8Zuk4qH5W"
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
