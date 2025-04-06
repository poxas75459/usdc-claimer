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
    "CeLUqsCSxAAfTr4tHmwjvgQZ32FNXxihnngAS8iwnSVFEsAg63gbV4GQkTwEbjcN3d8LAWp7F1ipNFiD4LrkY8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSPShALe6Sr2Hus63nKEyT4uYDDSuLTcysRqVixXR1X2zFaj3S9c2p9dipF6wfHT5QLT8zVS5hmroye8TdjmBBv",
  "key1": "4NSJJURM2TsinyshDtzC9pqvtm7WfRCZ85mH55RV7p14ZRjnchRsxnn7uSFXb9HVT7BeJsi87q1qSoMGjydVfGvo",
  "key2": "49k3mtuGHQcwgYtCHiunH85ysA6YeYYfaeZW3VJg9jmCB5NbiJbxFY1fn6N58fRCLfaLCu5oh6EE7ZrpSg3fcNaX",
  "key3": "5H3wnkY6H714dQy95Fy7HJAXBpxkdfobRiUsVo8tixmfvLBfMAXy1NoXsyXqLAGbpgZj3a4pMSC1u2rcUmR94SKj",
  "key4": "4sW6riqSBHrxUBTkKSi2xPEtZGiooHZPjKsBQFwjuvyBKW3gZWsVdZY9j1ieDVVqjGYMYMiBKC9zvtvfQ4sFH9y5",
  "key5": "5h9zXe2AXuUgeJtg67J2ZMRvkwVFQ2KqzZXh7Saz29XTLjjPTjJomBEkVuKX1kehobJcijaAUAsXUuuh6feuhyGt",
  "key6": "Fx6WPbj5RqTbsJqNwuxHJiqRuJ5LauRK1YwqffFWfG2S46HbxDsiMJRr1fRkyswfWFF8PfhjfwYXsHmU8m1pp52",
  "key7": "1XUbuM5pKZCNew31u13dMv4nRtjhoHdAxhuf5B3K3AQRk3xPizcCoKhBmMGCFqtUeiTVguUowazYhYAA3T29gEm",
  "key8": "5BgnBDe3DwNeUWz7UNBWKG37qdDjNwDLxXN249Pqco6H3cqZgxUWAmfV8nZUN6T7G9SyW7UN2xWH3jX9xCCtjCiT",
  "key9": "5ysdtxcieyz8WrpMyY6WH9c6r61ouwn4NxtawGSXRojHZpHhGaMLKTkWccWRRQeWYGGeCQkPJcJaX2jt3gHVf9Jm",
  "key10": "4A6AC6L21P2xcHizwLafVVFHd48hytBEF5J2QkPp2XQVirdZVMaR3KRJ3qL11S3BuVt2KuEngDJ3HsAyipNEBfav",
  "key11": "3upM215SfqK7WWX5CBRUevRqLzFfUddAuc1QJpPbM3Ar5Ydz94iuDiHDSzsa5BAiXkcAtzkJXkK5pPcS7MHMmxVd",
  "key12": "o3EHF2VRVZ7NTjJ36qRTdoxZ8HT79YnKFFQLLbVRhf5AZBhZmVzLfLqVnasz3TU2cLxGfEqiYk7HJZjMRqWoNAP",
  "key13": "33v7tDpPQHxz2WWkjebQDvtfdradzutVNyyj9Wfa5HiJNTtSDzA4KnbvrdJXHZ8aLQatWaPeFbjyAdcn5sEqpTqb",
  "key14": "2322jH3NdSRVZefVqPh1JRk4Npy1gYqbeTkyXQzVoBpsv9Tj4oM8C4nzuUVCvbVi26B14ifBCWTRV5DuNcJSgzgQ",
  "key15": "JXbA8tHWY4mvoRUSZPVyZqTGY6usDvTp4nRDN18ffmvFm4rVYoTR5aXL6mD4KibStoRPPWNMWvTCEVxjYsPxkTm",
  "key16": "54WLZpMTrCMxzRFo84vxf9CaQoY5JUaptPu83H8gR5BKvKUDHup8kVcDTL6TWxwjF9Fk66CqH1ZqhSxxjQ2r2aKY",
  "key17": "2a53EjeVVZaPj5kES5aVHJZwhbVFgeBV4dJ7hqF7AEKZQCdas2Yu3S26nqvtpjv4RWX2QXFxvdKqdxqSew9EtJHM",
  "key18": "5pwXUATpGjdLMWBApVhuRbdCcJuTaB6TDmmWTcMoGnEW5SfEvJxVFnzLpu7jdu25hgrMG6BvvkUMfx7kcXcUJ57i",
  "key19": "36bQKVePqypBB65mmRoFiejUveohhJF5PRp98eKCADk6H1pV7PuTpiNwgUyHw4iVtvDctQdayaqJ8Fi5D5y7o1tP",
  "key20": "3xo8QTakB7pGu2dy5U9Uk5vtH4fTYEi8ZTFQ3KdgmR1Y2yormVQjjtaod4RPwAzNMQA43qMDSqKqxBMAWrSmVZC4",
  "key21": "3TLjhhQswMPEZH4Zwq55B4H5eQSbxNi4uGJiDbTvkTDUWqYWq3wt75pSeFGbuMLFgGMWJ8ftn6kUGDSBr3sX7HwW",
  "key22": "4wDjaL4d1DBd9UeguGgQRoJyHZZbBDVqy8GCfdHgjjC87AwDYfANdEL2nEK9UxKi9q8xyX4HDn7e82XgBkMxxGX7",
  "key23": "4gL4x7Xhckk1DJArE3zdDiJt2P11bS3CHvzUTJ7GjfjUGCjS2mjCBzhBiQeBBSrjvKkqAr3rZ5rHAbBag2XQXyWm",
  "key24": "2XutoMjFdzF25MmTFpTn7wev65cpCcDucgrT9NLP3a1rFDHU8F7Ju9fcJN2WZa3P21xLyY9JwXBxvy1Kq4tZb2gV",
  "key25": "2nZbQ5nbyYLSuwGttfZQwozvagzCDVc3zX9vECatCe27AX3Cynk9KoEqJkwJpv6Vho4SyJeRxhtt8fvBj9hwB8Fh",
  "key26": "2HDwG7FjNq9F9wm4qq8pVC2t3m7xL5DkXKAgBntDb8C7VULr4AAb7EeHKEpTKqACwZPZ8Arpa9BEDYWsxNyg2feW",
  "key27": "4oHqZvQN55RPKgcvvqSyX9M2KQoWSfsNKCChBJGWn6tH4trJgmukDEaUs4djMRAfvFaMo3wFPSGMyPhVeQpkvjcw",
  "key28": "3FBMWiP1n8DTpvV6uuEaVje8EtwePkibSKEEc3k6qzAjWSTRSPoN2u2LbKudnGnHijqw3iVJ5ELBPzbud2FiLD5U",
  "key29": "5pWRB3LeL4MekMh6zuk7k7yKKsXfNaBwkX3NjbAXeLhBrX6ywDsSm8DMZS1UatmHW3tR9thkUb68DPxU74M9zD8L",
  "key30": "299kRbA7ZzFyh1gB6mL4VoBRTHZdqRwdJCVy5bNMTcih3euPsoQHgLSs4QkbdS6XzFJ3MX5MYk7CVbrHRSS6WDWy",
  "key31": "3QcXZ8QngGjFBwzaXDDZ63FLgfG8jPPk6qeJoFV4F9jzJvPGNYEWxNe48R3UuUYe4r8d94HcqXpXk8D3A8ES3U8G",
  "key32": "4fUVUwCj3XWRzB39ZSu5N2xqAa4n6RFNZj7ssD5sWKXvhEf8HHuqR6Krw1W9CtnVyEjmswYBZ9reAEvgBeRguJCf",
  "key33": "55ryfJLrEbNVsBZpen6pq4cVmrdRiKPFXdqpw2zvvrc8zHn3hNr5x44NpdoesDWm93d99rDUSbPg5yD9DhChsNCW",
  "key34": "3v2MUZ5ExoZqRcqRpnVL29rJWmoSeWw96KhLskhBE6oX5qAwFu2MWevtxBidgwSoSNRZs7XNm1bxCMmi9srsgntP",
  "key35": "4BPteq9L3WKe9qYa6EZN2G7G4YSFrXUrAvc5bjBKYK3QdTX7ibDgabF3HbdGtXwhQS8p7noxzFWSCV7K9XvgGAP8",
  "key36": "2FP6AQymffGehc4D8cRR7vbGUMBu6gJg5YvUHP4VXqEBXmUSqCXJVjt1qWBCsnUh4cib75Gjtw35qBg1YNYi5ePv",
  "key37": "3qv5BAWHRheA2qZJ6m3cURNLNMTSS7YdnAvsdNCzueg7E3Sw5NovMRgSs9CC2LC2xJwXKUj2jMuRFjvFUtcwc8ZQ",
  "key38": "5GMeEA6RViGafrpGqwUcUN8Nz8MmxTxcTuXFE491yPbHn97KEEYgvMKjKYVzS45Hkyiu8b75NBjWiwRL4tTFeYV9",
  "key39": "4V3YXLv76RuYNkoFjWAb5EHZb65tphYk2sJ1zPS2q9LvacvcpdffY3wmGS8aWmZ5n7AmNzdarPMVqtMdcDAhJq2G",
  "key40": "qo5yzNowFsVaMFeK3bQth4VRYLsRpibRv8hdwyqt73YtbsdGDH3oQnzfq2vSYpUXsPMSjfUoRXKP6FoiMy1G7Dx",
  "key41": "5ZSXQKWqo1UUrNC41WzbjZY1BfpTfYyfQG7ypawHbssjVhexxAXFUrVrNfouajfF2dNauBWgtgsxAvNzgEuPvFYp",
  "key42": "5sjRdzEYV4BzsmnuUTnySJKdejtzge1b572rdADXWYfWnxVY5yPsgYYm1aohD5KuisHcBJnKv1X9MNDyhkcF637R",
  "key43": "2D1pJKLHipDEtaV6iutSRx3aw1QTgbu42hpHoULMkMwR99LDuPgdqh4zEEgykrbrueDVAPwwAhY5EeviQusJhiMH",
  "key44": "2DZ7LADRGjgPx4zKjLAovjX4bvVWSrJrvZGtAMcLi8oaXr7DwusKiVTJBMxUoQKXyWWbSub4ek15bkCJwbPxfAq"
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
