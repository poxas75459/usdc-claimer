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
    "qXCqXTB4h2MagbTwGT2G6rqGMuoqn7tRq431QYAL3ySi6ynmZutDCbUY5RTdTwnD7JjufrfAMLv7igfPuqmETn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxHLkDDtCKzFtDUw361w1VfA4v3MRiF6ndMsp463cNfbTDSaH1otemYqU8x3WwsWkEQMDY4sAmbuEmQ4ZgmTKBt",
  "key1": "4z5iLpmFJKnRY1jnsbextSZ41V3wdtdwoDVeGsPF8UFohK6Y4Ncon8CA6zGDcVsxyKnnzy8yGoHTFiNFYMVZeork",
  "key2": "27pRedyYkm1vQT4CR7T8yhX36ChY6qMUpb3VgJScfsYy6aVWTjggHRW6MaeWt7pwjJLZgL2JnKqR5WGnUpZvvWi4",
  "key3": "5vCn5evPJP8b3HccuvTpnzbwXoCNu77p9rLGAo7QoM5wBabu9wTMGyvzymAjM6uHEii8uHYKfyrCL2rqvqKUo6gJ",
  "key4": "3HMWvjQ9PCyhCrVJDc6wHqxt3Z3dHCa4NeDSL7ZqdANW5rzro3e9VgTPmBHLadjz8fi3Ln4xJzVkDCXyfzigUo5W",
  "key5": "5q1g2u9Tk9HoNMCYEy9nPHR1K3ycJc2q8Ue1iUSE9Enqwe86hhpM1A9yBiXSZauSdJnzX3MhecpSjBYWeqncCAbg",
  "key6": "3aTA5DoHmjGqdYWTnLNvr3V3k9CFhxjiZHsZVcfFksMxb7WqHWdT6CeNMwFzf6sfgrwxagoCDe7ESsFd8UWPcd2",
  "key7": "3EC2FJC5iY2maaY1nLJEXMZTCd3Q85X1zdhUHBBUwRPp9X8TXxnALDQwnfntddLP4iJJ1zFQfAFupx6fBfc75XnQ",
  "key8": "389wgG8WHsP4rgwczkmzS7Q7iSvQUya6gnd9B1SipVWxN9oJpjTZdBjH2BJMk4obKj5G8ZRf2hWVuBmvsLKaa235",
  "key9": "2wrpGoxfmpTuFdRuhmEd243QGEivzx2ZrYd6jQqjQpaL2fvP8NUqaPq2C3LeWFcr2BYrcCwwP3HgyrDnhPiavH2i",
  "key10": "dLugomR1SQaXuuiqxbMEJSMVmPK5wFs6rLp7QRH9SQy3hTVjBh2EcjFTgCHugLr4TgFiZx7v8MkVrQBRxxM57qH",
  "key11": "4s6RhWGSRCXkFzP73FyJU5GACeahbFXDm5w7xymHgtYNhGCDGPWSfH6veAQtWBc7jbx58f1J3aWPnf2dkuD3MzXM",
  "key12": "2MgeDyCBcRcZ6GQVYRWF3HrmD14HxNxE5MD8GSYAiC5Kbw8wrkTzizxqtDB8xqXkSxY57XFGoxtjgWZBwXq5dt1K",
  "key13": "3QT9x4xLWXSJoJHUaGS67qSgaKimkPjUUcj2VfkQtxD4KD8etmSVTDKexrbEs7Ae7VoHVxisChYk8ZZxPisTZJEG",
  "key14": "3yCjaBBokATbupZdjttP3AT4ULVDxFMUGRrMjm4YAyQJyYfhqgzdkwake5fYtNFUXvVmvRMb8WaEVY4THCpmqMQ",
  "key15": "BqYR7Hh31CHRbNMzQKRMoMknYVjmqfuRQV37gmTkbr7gW5QbGgN2aFgEWqEBz9PqU8ksoYdFe1sqFstEb3ZPxFV",
  "key16": "2dbWNbX4k4zq5YNTGj82kBne7tgR2eRzqrmdQPaHpcJJPaf7kE6kbizx7y3HeeYmHnF67ffAySuqQTi9aSYPPGWd",
  "key17": "31wFd43sW2A46XhYvPoPL16ym5gyfpmJrJP5tgs9rSoRAqWN2g4AkaD5iiKpdioQsDWaxzCMMZp81imxGU2VkYfZ",
  "key18": "5DLHeoSkr1TcDvgvcFFx9x893aJozrbvUuecfuZyWUXWdjUeDJBVB1Nc3NSExC8S54frBy27UppRJztTNJooTT3S",
  "key19": "5SZ2HSVX279gfrLawZ4fqppggdyWhyWTv6BooWWP1qXGi9KUrbb7SQ1djP7zS4c4AKbeNzTwSMjtvfTzZPoQhexY",
  "key20": "EJxCPBbKzBw6ZqtigySuLRGBMHpfC7W3Zaek7X1SC8dGVBjE6LFMr5dj1nPwdFB9e1D8L3jUcVPuqC5tzCvpQ1z",
  "key21": "2PUfzPC7NXafD5YYQ3u3t3B8VAYTvLdhCLsk5RzCmaZxkFCU97oz5wT7Gmhb7pc6TZDiB7C18DEcpQ6ki3p3v8MV",
  "key22": "3TC8eTEiThW3ViHUF8WU73DbMaHbwrbL2f9LVe2Xe5TUXXno2d5BEd8cVCfNBGB6MmryW35XkWqVXD3BvLx5jvkB",
  "key23": "3xTx8ZwsDWUaW2tK5cr7EoB1aFTsJSYmXj6D2Yn1eRWnNNkisV4sGjgEpQz393m8kXQ7WZ8S4iN1EQXhpL8Gzur",
  "key24": "4VvLAMAw5J5rawpSyuYdGZQsQiz13n3iHent52SrP5nrVZofJyEXDcs4tznXMQmFqTqXpTDDwbjDGp6jEQjQ41Sd",
  "key25": "3eXMZ5v3BXEUv9qWkUp65Rf9dE8bzanVhuLw9kghreG8WpT99qHLLknuum3VyJ43HUWADYXQoQdXtXFZVbG9cRp2",
  "key26": "5GmP6XgMod32G1abep8wg8ZQAzHVQBYgHvKiXPqjkqNNzJPTk3r4iXiHcvdJV8ukFeParxRYHbrrGP3pw2jdvKU5",
  "key27": "3eWeWukR6JMJNoDQfX6pA9g9ki5KwVzoRXTGpxNtUNkrexnVp9EAuHJTN7PYPXKXMVUBDdqYz4czxR6zAHx7mKwM",
  "key28": "5hQVYcTTCtpLgExB9c2z379ykk9K7xjVqxaUbSyGbMQpbgkWjvNDKiuipSMBG7WXZ5Baj1L4D63xadyRCra9ijqk",
  "key29": "4mCyVhLTcvLWc6nuHJpFsNjSnDkcxV82kwFGNBDmUXuACzuvqs8niVu8kVWyVJmYnz3k7bm5hs4pXToFnPgwpCDS",
  "key30": "t5iBUjCbeEZbNysEwebUbzG4vgiLHrppfJDbUNc4W6J1TWXPqiWqULbqYvMEdvkxJ9Sspdvo2QQiiGLbR9EZK1z",
  "key31": "4wXtbPL3Hbioht4PRqp9iZoV3GZygyuaMmgX6P4Wj9LCnVTfAMfGRHaQFKUG7uyVSbFTSxADXuSRCcxdJH3trwgD",
  "key32": "5UnSXRgrGZ4CYYW7E42Mfnt82ZvHPM1YtDaVxyepZJy3fworFhi8UURFNw8Vvm5HvEoumwc33o2k1oHMPKQ1H3Sz",
  "key33": "2sb4xznCgVaPLdjCUaYs5GDu4CgfgDA126niFdV6p2S38FDDGUXDArAzo1HAgBp2HFChkps5b8bRChH2k5vmMWfL",
  "key34": "4mU8QiqVENqncjkA7Us4cBt2wmKTss5iej8DhdhjFtyREWp4g44NH8gYe4hKPmdSMJWQSSt6b9RtUSgQNDfyQ8rC",
  "key35": "222XoDCFFBHvXohdL64EYeXrR8Zc6n6uHCmgGBbzpSHoZz4YcFkSxqCZS9kNkTFDsFWHwpHfMGfE5iXA7QBXw2Bs",
  "key36": "2db9HKsJ8VUoLcwCctjCAnArPTZpvcEGbhJWMNZcshztBALE9ZkS3Gbrp8dGMjoPAP5r9zTZciDdu4YNhxGRSqD9",
  "key37": "vsvUoApvqQ3Rv7F3fLRej99FNfbH3KbfY9RzvTKNTSDERhMed457gtXe9sUtT8q3yhTBCEEEMJ9PA9zx2tYJ9eA",
  "key38": "5htvhTdYNLGaN3P2GfiUEYahizYukLsucniCGtuTnDBqEeJQKgJMcyPmsxrzNq8hg2oKD4K2Vo7SVTprdnekggQu"
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
