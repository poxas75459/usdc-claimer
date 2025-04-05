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
    "5WVyJwSwxesKwcSFvw6C2RXgzuqFyaXWut4xGTCkmu8e3v1dtJRm1bQWjEHsUhWFKWaiVXhicRDYoh9ZxGfHTp2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5YorfRi5gcB4ZrsQZZGWjUetBHWtpjcsWHJ8vQQeqr2z6gAnvhxwnLnrbD4kbcY61DoNZEPEHY85KrWmPANM1W",
  "key1": "23974n6yhc2Smh2kzraZucXwEqQvwoRJmawk5m9EesHkeWFBnj28kHvv3Y7LqGmv9S8ADEapA9kjtqEvSSBLhPjA",
  "key2": "3Y1MNhzraWywJgAa4rEcazJE5WLw9mDMvUJaUD1NJDLPAgiRMX5KbbazoBWXp4GjDmuiXygiRe421VCfk6ovGwPj",
  "key3": "mj5dTiR27EMELmYYRuoDrY7mS3Y7R6mMkiWdaHMxFmBGTL41SyoRZgfhpAk48k9kgkVu2hok8T2hed2SM7vMzSQ",
  "key4": "5jgV6rb7ySywAag8wCaftH9YgJGJwhNP9xBWgTAyn4MrG2gZyWJDo2p7BdZpkuZpSpyhLWSvhACGHgZrrt3SWYqc",
  "key5": "2uVHKvAyLnfbHHc4YdevmkAgfqnLik9JzgJTyXHwjTEGcwcNfRzXTFtiGH9racZkYPuQyMKszNNTEzAHdN4339Fx",
  "key6": "64Rwi7bqa9RqRQ4KUDBNxfoggvvdxqgLm1kBHR2cXrPNLsRZWtjziYH3nNyHHJ9Mfmg21vU1U9NDkvTdw6oJE6Gh",
  "key7": "3XzLZHEHWLmSbnLaSYxWSRia1v7Y1YcaysBFmPFUpvdQJqEwVwGF3692XxdUWxfgFukvfsoDdtAqKJwrdaiEjPAR",
  "key8": "5sAoR3sTHoy6Cj59UKYJUuFzvkqChBVewXZqFUSDKGDmyd3L3zoA4T4238bm5Bit5XaiwZeFZtoaWE35ohHwuVY8",
  "key9": "yYgdRiaxhSQNoFzePV6ibe7QgaExerKfSxDyX7wh99iLKBXGRZqL7GLzujxG1GdYGHbTKjjUMtbHk6r7g8rAZoz",
  "key10": "mRnu1u6EZoJbc8QkKwNsw18wxXVmkRGHZo9z2YfhQcxqzTPocBC2gxAMLhidAbnjwmeqSipeuMLtFjZ6zXRv7RL",
  "key11": "4d1gt2F5P2rMtHdZkoL8gWCvUWuvwqEFMN7EbkdMKpAZmUjUJ1wrmNJzBo3isesKhAVSAeMyrJX5YUqx3KGHDbZH",
  "key12": "3g78V21qYirSvm2jMz3rbKifA3JXFXfaQqLpzxmPCRz4JzAgQGcKhDjWFzD3cmsechKUVi5hCq9WHR1yaNtjUb8H",
  "key13": "5o36H4a6DoExh6Fn67D8oFctBAWdqqAG4uhQ8jNzu7d4FLotiP3t9bTe9XKL3UzQ4YhZbRRcD1JnyvozbdBrYHKY",
  "key14": "4B97LJtPh6qbbiFVay8RerJxoA2rnMuSz3PiYnVU2XUMSF2NsQzV6n97qpqzwREEKLchmAjDpKsqDGrrCcHJwzjn",
  "key15": "bjTeav22ZCfbvYRBi6fBXGksWMMgCRDdXZd2f6bE28eaMYrfTEe18dk2igx16njEFeLPaddCPnKkxSDD6Mvtfct",
  "key16": "4hLKEmKktux3rLJRTZtzajpgWRaRsirTS5ghhR2Ycm6dx8N88edRvgGPcX2xmYb6zwATz7vCBF67K7USdtr8YPnp",
  "key17": "5wfpsyEcPnJnZpHMygLCEXPj1D8q1QkanpXo6pmBUFDdrTugpF6au4ZoDtE7TizjaneUdFzAke6emvX2C9TeQ7Nj",
  "key18": "2kB4iyTE3GUYSRSmaG7AiFyU9vrczqbNU84ByS3gpmzJMqfN9xnWhL1vVVQgcPoa8JKDA6a6gds67kTVtTHeAGVg",
  "key19": "5ugsNVGpWFWjMx59kYhqE89ejidqj2FxewkiLpN3oNkFv7CAq1gNbjPnwjGsACHCvM8AjRBRcMU22BUwcvq7wkCR",
  "key20": "PTsq5rSt5rry66i5djHHTksmdMszUSEuHtyukrJL9M7MG5N7FeADYEyw7FuUEwbx8sk9YxvFJLoihjUg7fPX4cE",
  "key21": "3CsbvqE1oL7uZ4y14Yz7wKdD775Qo6NvYLhpr9AeFwwPcrarNVvCwHEKUkf14ZKMKBuC9XTfY8we55ST4Fk1wtPG",
  "key22": "2qWsohKK6iLuYWJi1Pxarn9x9CHxCQrPC6EVyFvcGeiUZ2wdp2Qyt1UNu3PYrjBAcvdWJU61SskQpWAZWDDQRce4",
  "key23": "2KJ44uRhpsHm3nCvqQfvcUXnMt2cAtj9dosRiNjmzxvE7ahuTg7Vwnz6c5a1efkRGWCo81yFtF8z7NRhzogcmYPU",
  "key24": "2kwHmRXhRDKwrfdWUsQqHds1RiBZqskN8N1uLCxBUAiaqGyKoUx1CC4KTukp5RAyV3uDtU7Eb3UexcqAsSdmbiJ",
  "key25": "FDxbCKnrVrFxzXzLzdeyNcUvo5TaAF2vF7KLu7diJc8RYi8EBnQtgmqrfYxZLfj8TrxeCPWYTEMmg5VBtQMKbWn",
  "key26": "4skP63hegbkirrdApzZhWuUxWSkZKHyhBSL8yTGyQifLrzhTHW4VWvbBstwUjjMCauEWzhdDUHnu7o2EWNxkkV3w",
  "key27": "64Ed1HQ261McRPvzjVe7Gpt1nYUfrwGuuiUgDP2QPtyztaHtJ7Y28HqGmghMiHbC3hRymnMSQnLUZQPcbyGc1FXW",
  "key28": "2y4yKcTrsNJuy2f92PZYgmWSYc1by2MamzSUb3qU3n6Qr4QYfAS4cUCzmXDmzU1aA6uipNYn7TrYBYGbNFg2bzFy",
  "key29": "5Mm7brAMPexMEBuLBTnZG9T93cZVz4jGiY6PEmN6Gvq5PmuQXkSEUPeuBPK5QLi9AgRHG2eMsGLrE1HuzcmxTa7u",
  "key30": "1uwnSoqTnMb2tXSw7uVsXDUHAdWioSTT8geRmBJDY3nnMuaJQ4GfxUJJpzD9Tzaj6KYFn7LhT7Urd853mweEXvj",
  "key31": "3u91cQwwxNAtGs2adCK9MYU9rm8LZ3jwrjTATrmoZNXuTt3NjM7eioZU99ayJPv5NqpDptdp84ZXqPcYAwRba326",
  "key32": "2U8RPQ8TsAj6Wa3gAiVmpjikaxZ7WuHzmdNMrTRFcMFonsMbemhdqrLjs8o5biA52kk1sHyso9FxQNojPzPKfNBC",
  "key33": "2tFodtxodj3rqvKT8Jz9pwCkj3H9pSNdCvBJBmnTpkroAX5NcHP3psLowpm9i8yZmiLdCoLrso9x68nvAvj9X9W",
  "key34": "NaLSyX8g4CS8DmWhFhrEiTWqpg3TACRviUo2APXH6vG5inexD5W1JPjdxTFDU277tgyzHLKqVztnBcTq2Nse2XZ",
  "key35": "4uxBYYZMCayHSnNQ2VS4pTSyGnirwrGTCL84TKLdzVgdPWg4ftmdBXpk2U3P52r9FQRkgLjxQMddaqCBLcm1WZtN",
  "key36": "2d5f4JFrn8kCn2PSXcKvn4KXVxJm7GEtjKXgCGRsGv4ienuVZKh8f62K4gMMWVbaxdwZLPVbtooBEzkYs1Rpev4P",
  "key37": "87nSE89GpyV7fV43N3RrvajnGUMRLvw3ZJpKj9qrDoXeCTymUWDxTDBwap6HMViA5Mno9CPvYPUsX4pwkx45kMy",
  "key38": "61tYDQYr8FwGfH8PUNWyMp5PTdcBNC6dYDuwB6uMB4pXXu7fnCtMhmTZXnZYigzBNhQfofZnMKm3zHXPArVsHVsi",
  "key39": "q84ZvYscB38YKKxXZKExr4UGDSVjYdp4nHfdcefPoJtL4VRZHFddqcJ16jozMrMVxxaA9U1wrQVKTSuptqrrus7",
  "key40": "4nu79ffwNNjsnjtkpsVRTaki6TwMhxtNLkMQg6fPqZQff5J2AY89ga1bTNV9FpaUxRDw8ZxS224LPfY5yKbL7xvx"
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
