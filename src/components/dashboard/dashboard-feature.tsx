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
    "3jjXTW5GzrfTPTwKXAaF5y5sT9fYWCYUTNs3L4jXXcPHKcFRaV7mJmwFgnKAF4rhi1iCkTqD9jRwGXUGJuKEZC1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFsxuijYYfWNQ47Yho4ERNSnYTshjNUr87dPiuDUAPYANH7CvGF7pnqzWLoyUW8YuvLLFiXZi2iGVDdz45nVsEz",
  "key1": "3uzJLEnNQ8tQahJu8pW4QuWkF7vkHkeABe78U6yz2LKY95WKoBNEvc51XWgveoAJfhMNZCsSmtjKNeSjoE9dJ2ya",
  "key2": "21CrQsXyZDRuMtuTdLWbnrQhYwD2YB2HUbXs5Uqx3wXKXTrYbD5vCJSF3sqrpE7hB2gVRCyXNsk6XE1gonS7NURA",
  "key3": "31Y5pZivveLnSn25a8TiuNR3iqB7WzMft1GrQUiT31ZsZZDpYdiinvDJ3hprABYA6XYn4ADuP5rhyuauGyTL2Wbd",
  "key4": "3onCvXy31iCiUjH81WAqVJovyrLLsZGTRXYuAH2LwhyPgZCwitW2g2CpyHMPigaGT9Der8qi1k7o72kSFLgGQR49",
  "key5": "3y3qRUWnhABNutXSfcKbodqij6BP879GvxnPeFEm6aFLZdCgsjqm1ST9SB7ezp8NhG4ibyXeeLQjMyvRouBxcKp7",
  "key6": "46dBG6Hkna81Vu47qtGqXbYBkaeRuwMuvQTHmbi4mSqSHEfmBj2UNnmMpLwYSPyyer8CQRWYzrkCx7PBpfTBNAKE",
  "key7": "5kP22cgLVJGGHVmQkcz65HtAwT3WLr1GuwN5kwHzsc9rdQqbf2NfYiQfyjt7MDmURBs9qK5PKePoSmzsKhmzPiew",
  "key8": "5wbYoTSLw8k9iWXFMJKtCXpaSymg81RkiBrQGs1ftSmTkdxyCFnK66S5qWFd9aZVPkyVPNwo9DQRoZXNCPimQq23",
  "key9": "3U2B2rk7qjeE6wmZsPA5cr3Q3gF7au8mNRe4vF2AD84f2f4HTLWAUksiPoo5hL8fyP6Er4MM24y8E8Ngts8axVWU",
  "key10": "3oemF8EsdyjTP88KH8GCtkV5jRwHhrjXHoCaecbYgdqTkB2vhK8UU4Nx6PMpTMFHXM7tRnFQEFatenUhDypaAeGB",
  "key11": "4TFYGth4ALeCMRd8f8aUjwcPrE7GsoYCvyF2AfnHSKWGv2ujf8pYaWgiVqQ9r3QRYwLm4o5MSR7LeUy6q3hfC9FA",
  "key12": "5V9wbwnHoPyG75tArAiyFzKYfLdQ13mTWrUKwTEKVznnMLXVJ2Q8QJnHkaD8KwBdRJyuFeusXA2om7TyPDDekYkH",
  "key13": "5nMntoEqvfmTfEMSxyPrDyitxhMYKE7XP6W6R6mU6Pkt3gqPk1ev9ZJ8R8QppwYUizkymVBMZuQZTsMebN7BM61y",
  "key14": "3JrELxBvHGHEKjoPRgcQhSDGcsrPpWSrxXCcfzPceCC3gXSWpPt39yp4Svgm18MUc3SSkQBnKPoRjx1GVgV7jTqm",
  "key15": "33iV3t1HR7hmLJLPw2a5Mm1cELx4QTQjSTsJP75QLstdrX8vguqbbMTEwjnds5z2FnumGuox8aUhKjzjgTX7y57Z",
  "key16": "w4kvfffQD1Dg1zqE76iddjSn4wt3epdLwrcCFgAUQg6Ru3xQuDXBFkKbVU7e2uBAjcrHX6ZCRbsfcdcdCZifJyy",
  "key17": "4x8WZjzAVDpshhDdRABxiExY8HPC9eyHpENHmwwqJ8sHzXUAKbtBZ9LzySxyhpegDvQAz7aSBqEpTDoA7xzaymDp",
  "key18": "5Nh5ZE9qfZxGAKWb7swXsDDP6aKC8mNFryovY9XiC4VPi1rCAj3rjugJjc5q7nJgcTQdWqXXKRmeZAWpDcxuo79y",
  "key19": "5F43hmiFVdnBEUmYt2Zv4a27eqi521CRBvzkB9gCwsU3LZnS128A4kW7ftCbs1oCQ5MDyd4U2PwL6GYrEpyJQdP6",
  "key20": "5RvQruWwMEZoUaiRWf9pJeDDzdKZQ89FTsNbmBw4G7iz83a1wDmnBYvvxREsAxwmRuLUBVBS7LoSeH6F7thDU3as",
  "key21": "4ZvtMypuT2gJXeyGpsVhKeEXKUgimbEeZdCNNY2PpfJTAY74UgjUbFcixk1Wg7FZgVJE2ETREK5CnuaamSbYkyXF",
  "key22": "3zTqHi13xEHRp7VJrTFT58sXFmTo9U35pVtMi7iCRw5VS31uFAvCNVAbutevKPHGJChiH4tbdc5fo5MtF3C5eA1j",
  "key23": "o9HfKcYNSJJgGPdCiCzFoBGnLWAP7UsQ3hfD58JGWjG2Dff3nPTbuD3hkEXryV5CX6sBHxsM4VtBT9jyZeRG4gt",
  "key24": "5YDnJoF7z4d1yamcGYecf1ciFbfj8uqbgPLyrY4qoK16swhTSGKAFHR9ACSf9Nd68WPMpZbJLxEKTMK6uBp4GqWU",
  "key25": "2kzDDfhE2UyMAREVkxmhri4vXV3yDWcaJ8VjjdpPJ1UUjy4HJRcg7ynMgMWxPfZMo3xqzS3qN6xnehftjcTjJs2b",
  "key26": "5Z6hqRB7LHduoAbJSVL5LEi8Efua4oEjBiEMBuxQNNHJvWAucdgUDuptRMCbmR8teAArT5bM9Ab9YaFAXyYeBkiK",
  "key27": "fXReDN3WbmEUHpUfY3drEyw3Nxw2kgPHZTMZkCQRvDqVJ5PEV1fn4AQL7VKPncS3gtv3Yr1KxhrsEqNVjoP7maY",
  "key28": "5oCoig3ibSqFZhW2T84nWATM1TXWhzdjoqnaRmr5FUS4Q1GiBaCZyf2U2AGMiUAo8NEYyULrJne2iYFfEUEFLBmo",
  "key29": "AU2TcnbUeJxj2BVxCcxmqURfRMEc2LyBbCykqosj1dumWxD9fhj7e2AEmSDnnfNjnfjpEkjhakfPGoyvr2t8GVf",
  "key30": "kBboDw2ngM2PK2f5HsE7qcWUGJCRAAFNCcPegCXvVuoK1PpcyR9PKjHjg5EibB22SHb7sF1UGBA6jJdYp6emyFX",
  "key31": "UWXtDhkKJ2Pwe32JqohyDPA1BnwYCU4kqcbogjYaiouSQoi2DNVCBLvSvCjUMXy4BqchGqxKF7uNn23XB5YvSvx",
  "key32": "2xr5yvpr5gHVruCdByL7Kk2iXuSEMVVeCBWqKaNxV4CmdsFNGMeFhyTkoZtmCufANvkFVH5Eho8N6vJmZsGevVVj",
  "key33": "4sG4aoWt1JmSv9n5ExMBVWRZzd4k1ntde8QACMtXbCLTt4zu7rZ3J4LJ8WU1v1WqotSfP3ro7pxVPJ4rqYp9k5j7",
  "key34": "3wJyw9zCK5NmQnUvCiQXvsogDeGiWCwxqZpjKvEQxn37Rs491MBHBXqGs5ZMUL1pQuT86P84yXvuMgeYnYDY1WaR",
  "key35": "22x2UXMduTBpsRNNgsZUZ9YkvRi4bXb26g4RLqfp2WUTEuDFG7hqhBmzXg1CMMzNFwuxtKqxpnLL3df5qtn2Htjb",
  "key36": "3zVkoJFi8onhca5V6uApnL14RfAGx9ngvWpjgFoJ9vkAjseqPyNo85f1KwmH3GN8J1dmcB8jHZNjRjxdVWtUmUN5",
  "key37": "4A1cGBj9wsavTaDGSmNcaxo4gUBSpMWC5PGasgfbURHwYdLfWCpmQueHP8YdjZ4LrVJFUeNcsGAvELd72zHm4vmG",
  "key38": "3ybPPCDfN3pLnpdYQzuZgXWL6Hxkr5M6yq5QtFkWQKrZuXhPAdoSAg4NSk32A1NaGRXz5ftp7yKjK1E8Y3nZusTB",
  "key39": "4QAMkT1QqXA9Bd7EhFzXhCqtEmAC1uLfp6ZyiBS8NE4ESmyhfzLpp8aihPZbQnEcTukp5tGvAjacZCZVnLihr3P5",
  "key40": "jaoirbftRWCgwvSg9RzfVPc6dip9tJUpAMicaHppSmBy4AQscaUvBiKambWYgZn8kAqvcbJwkDqLAZUkdf5W2jt",
  "key41": "qVaKRPcGhj7wZjUmJetGpvvDEWzS7PeVnszruSCsLnXSj71F6WgtLF3ThokTr4z4NNbJxv2b12Zf3XGTfEcJ5fc",
  "key42": "4jRxyWrduNhk3oL8ezoXmjk9oev71RSa2rLkBAJ8xxyQofhx4NzV1Rpr7TCPejNSGUvhVnYPBZ896H2zK5UnHJhZ",
  "key43": "4dBxhzgMPUo4QGsaoBSeUqm9sqmAsMwdoxDox6fJ9Xu54zhEETGsVieEXqwZfUNNQr2pVKUqgb1iLk45JLLy8Rg9",
  "key44": "4AKkWdaMGAssj67vYDSacRK8uwnjGZsDBpoXSW3TLHkNu5J78qW6jEW3gJAk3BoH7yoyPZeW3EmQaT4evxRNjw9s",
  "key45": "5vHEYHJesFeKcLeBBHAkbXJa1b9WgjHGc6jjK7DEg6bdJu3G3k3owqEwb2GUeV1SWdEFqAA17fovajEhmpP5KsVg"
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
