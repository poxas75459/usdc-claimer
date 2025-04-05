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
    "31DFnmCo8BjdvLFy7267nVJnaqRy4mpDX81iQhnotnJihvRRAH3omE92g1We1f9zQCnVLqw2jFPY7WaZQwYcupv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xvy5nBSoE45F7zHnq4D45mpww5VkhqEjGzWznA4mufY1vuRBBhwwQ6xeLmxb99tmPp42wTsjKrASKqimtomEK6T",
  "key1": "2dJaHQhzUt2A3WMU4xEPnpXCmLDJhfTLjz7rpY7CReGN7nSEGhhkgP1uHch972dV7WPTq4HaXyVvF2mqF6zKScAa",
  "key2": "5LQKdKMqUJYrgi5tKLQxjTDBcBdVeJfhM5wMGqjhVB8kDLUiLa2d9UsqXEAm8uibpnLGn2ctJLcjzxWFjpt2rCyD",
  "key3": "3Ai6y93h2jk9jgdZnmjttTn7oweAq4oUwif6ZDyGp4r9mxFw22Pu7oXjY4GdVm6t22JCA9CVqMqwLqetcppUtJEV",
  "key4": "4NRM8AdMNPLgrbJSDxeZjvSeN48o5ye6Ei7qndcqeJZh4U2eT7sZdKGbwMx3GpVce5Ej4c6ofuX2azaLGjddZoiz",
  "key5": "61GK8AX4a38n1R5MZgFCrrRa2E8Rbju93wmgJzDoLZdhCVTihVpRVCBAiB36tvsE24VLLje2r4Z65SPEU561scxJ",
  "key6": "zPQr2DTxCpn9TwpHJn7j1B6EhC8e8bWTuzr9iLohKgEBkxtzrrbRJANMYHuDgb8TLAyBeN8VH93hkhPiLwfDCsB",
  "key7": "28ZN2ZrXwSXCx3iVYQSdvLqyMxSxo1GQeDEXZwWQDUdaZL9FfYYW6KeZScy2oUDY4tX86259ZdQvUBjE5gHuz5iU",
  "key8": "3NVnyQfa6ocbsLs2Uoi8wQQWv56yqFgiRpBGS5MQdndYqgu7FfiQm1EyAg3QN9tdvFWcnsszVDcWmhuRRbfYqtqC",
  "key9": "tdoPK9fe5bBzH4x61QaqtFiqxXWjxW4e7AbctXsRsctkxtVL22v9onbQvqF5bu8kjWpKPvUF1vNaqiwZaoijReS",
  "key10": "2rdJ9oTNPqeJUkHqxiXyYR8T5nHLg32LoGvaeKkRmT5GFECS9acxPqAgowowL678oUk4sBPaJj9dUvf1sK2SiKNv",
  "key11": "5qa7pgYYjZsRtmGmZzPowyNibxMkkzMzBCp7VPQnidvePhSLvd12RMLF2KLZzHUQ27s9z1B88tMHiUwbukdp6AbY",
  "key12": "bKbJVPwQA73TSwrYqbKNyipWvgck62pqykbWcwRYvf1HBAsCcFDGrgA9gDPxAYP6pGFn1yQPVvpoExXZWsEE4wP",
  "key13": "4iomVmBU3BaM1ScTefYvywgSEtaUvqE3U9Ae9wT6QPcGLcm3HF8CF7QxaHjzRYtwfCuGshwhfRhzs8GfaBFzePiR",
  "key14": "5DFULrbMayeX7muyPC2KbreTfUnHvKE1cRJCnWz8waQXj4EUCbD6q84ZR3urextxHSng52A4ebcSbGmfh6HyG4he",
  "key15": "2bpNmi3MUCxLGmMBnpSACu3dUJzMXUeMgPFfM23LhRyW3cv1rqFF8PiQee2umxkvrXg2zkvU2Fa4dhn1kMRxthoo",
  "key16": "3nfiusMmdrMaDEBUBZLCHjW1b7Lwd6pYz8bKptHMNJUXNK4NsHqBmFPk5C7puU7NxBRhnDT1A7j3Yixr27AxtWkL",
  "key17": "47JznLyugCZU7Z4Bn7zcuVaxrR3Ha9dxfCBu6M4K2b8fReNzyYhJ6bfCqmrQtdZn98iCgehbrY5zWRrGKFuFxjcN",
  "key18": "4p6savGtr57dg58H1M82uFgQy1VB5ZdLjjntnPcqk6a1BDaPrfsvdHCe63jLo5XEwgrc3arHeR8QroZ5ppyzyN2L",
  "key19": "39ykqz6uq5XSYQ3M6bebHAwcN4J3UtHQx2mkEYZANAUgJXAXvj7T3uthxjmU6TPSaU8JMwBQjDGcZ3NHudwWfDTj",
  "key20": "21zZyzfSKnPCyBhUjhyyn7bVyehs57ztweoNLr7jh8jGELnxrX2wGAWPdEKjAkrUaDY51ZJT4vbyWgRcRSq2E623",
  "key21": "2Ks58jxZ4hC5yryBYFy9xkminzvXpzx5yUt4whUGwY3Wfhm3RjPrjnsavcex1HwoqTMCAwttXnSLZa7th8tUbbX2",
  "key22": "57McfLWwLgvcFf4rDQ3L2KWTmifDpJY56sXPzRbqgehRfNbnwjLySPnTjyvoUXN1M4sYuxjSrEtazBJbMAVDN4La",
  "key23": "2k32QGtd1yvNBrFC88Ea4ZGbedUPyLcHvwRiPCbFQjQCy1oGhPt5TFPX2QS2HkLmMigrfHoGyeUfLuzcvZZ8jUwy",
  "key24": "35kvhcFR92JK6c3nY6DuN9DnhR81VnHrVxa8SF6u4e6zmHTEEv6MsHaMwTkZmfw4U49Fhbzf7QGGcSdC6pGpXFwt",
  "key25": "fAtRi58qADnFaKrByE6k6j9StWG11hrdHcUGdEEkVbcJY3Kwvd2qNg7DNHLmK5vBoRsVobMRFDBxniKwndQzTWt",
  "key26": "5hbTn4sEHoxsxhkarGsbXh9k7b4A8TYagrMW2U5eCaTzMduNBs64BZ7exnh8PqDoB95TkoKD9k5bMHNRNBkac7Cv",
  "key27": "21C5F2Y8TVpnBi8JXmS7PW8kaWZXcGSrLqzTWEUHmXBTPF6B6ZonXVXBWuZ5xm9Xt9j4CbjibF1v4msTBEdrACTc",
  "key28": "2drSfSDZ345CHBAGb7nk9PE4ZpZMoq1YftQ5B3CnToTMEajja16MKKA365VdUTMEKgvtbZFiwwT99CBA742WbREe",
  "key29": "gaY2HZ4ie9PwSbaP4YAzp9YFpREhS52UfZMSjYjPPk5XScgvmyZCjWvHo1dMv6burKTnXEjhMZzAKjMTB3BKTLh",
  "key30": "5vpPHP47vM9mUjX4xk78YZidfof78PLD1MPhDgghMNSgKbhs5PAkWL5XoPmZ1zrCRL11juoy1TGwfeNBHyzQ3PZa",
  "key31": "2jLTAXSRUCaiRpDp7moh233TChTt1zVgTcTaDEExupfcWKbEiCQgNNfGjhhZ9vZeZGwSc1PMeNsuYjTKge22VWtX",
  "key32": "4yToPrSk4kTNWSgHVwicb9TfkhVivjUxexqoMcdhR7RRubVLSf6GdKpdUBH3VhUi9B6Ux2YMKwDcNmbxv892PgGY",
  "key33": "AbsUWcDNVFmJZA2bdKzw4LjnbVkaChd1EkQ2nrsnXtrt7zNW4ygxdcZCXTiaY9ESJ6GT8iByWb8g33bhrmPyzz4",
  "key34": "u9D1WiHPfjCbqoFac5L8oGEAp2wr4qHh72xmH9LYoBzzck3PKkDRFH2MyqVdffVRykr91gYvgMrzkmVyFN9M4eX",
  "key35": "rQh35RxLZ5WnyUPLHT91Z6nh62WkaAHas1drCBSC2J6aZzWXbaw1zGjZFp15Pkga1TSJpBPAdmfBHcwgUs5fZtW",
  "key36": "2aWRy8LPosVvsuVMDoeavRbxNariKnRKxkuJwxw6MMP4ShvWorRoNk8MdbpfwwWB9QvgtqbME76CiYB6zRkRrC5e",
  "key37": "2G37uaHBJJKZVWwfQfCNTxkWPj5g2YkR9iwR1NRGkgMP1oTWdzHhp6exgXwiF6NeqzGMGnz8EjZQz99aJbZVjxtf"
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
