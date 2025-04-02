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
    "X5MViFMY7kCH8LsJs7u1q77U93zkXBqHAE7uWHjb6n7wWGp4ieXWk2vWBW3TJtJus3VWHCZ9RAJxkUT2dWpxEZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EkVPHjYCA6rwk7DbuvRHLJgu4CuAdMY9Zhj57UYz5LNjU7yoWZ1P8bUAMKXtWRhNUiJkhKjbG4TLZgDvcGFk4Xo",
  "key1": "3hyiCPUNSGkLmDrU2a8RV8s7HpRSRczf4yWE8MrYDGoTTtX7m9jHswM5iXzcNiEsx2NzjRqyF2t8tmGijW7c4tbH",
  "key2": "3v6X1CTFA7ykhxTPVft4g9fbeL4YoLb8UdXYrazED9HAFq2VhZ3ffMjnc6ovATtUBNThDTgB7SaYdvn72g4h4EYs",
  "key3": "4FKjMVYBqZ1i3KsW6m2TfPRa4v4e14yM1m1185Aq4qSt4KgwCep1i6jJWqeWnAZDafabtQW9viuhjzgjdmhuD4mB",
  "key4": "QQTxZL8wqWsYHEX3PB2qVTfPhCgAuB11KTW5b1cKvapTAQRRCJRuLbxwqUGs9cTQa76BUb23bqzU3w49Ep2kPDT",
  "key5": "3E2fFhvJtWP1psUxZnEwN5bEsufBjEfvSSuY6F2nfqiYdvtt96GzZ4TYCxrrCZKDb26JZRTEeFs3vZU6xf7Z7K38",
  "key6": "xy9m2LYZ12V7cQBX366gi6MzNBd9jSVsk7wTdypZ2wQEwutwf1t19X48qXp7mwrJRJXQUm1CfWXKkWqTR1vmdpV",
  "key7": "3nVi4aCMEEvfZgGBYQAwatnMrQEUXVwDuiZA5q4bbfD1C5Tm2attaDXXreXzW9f7ckiiyPmhtDf2ffwVB3A6kw38",
  "key8": "5WTorxan5oV4vXAPnXXAeZzhVrQcT1DDHPj5qkW1P2EZjctruF9heQp1g3XFxCGP9PySrMMkjfAnP2vJXyAZ7P76",
  "key9": "5ZW9bo43vU6UCkJVx4YfCY2a6cntxmxFCt3QG4z8xJ3s2YM51s1zkJDdbtSs1xXmz89x34sqMvjVSFmKMJodfJaM",
  "key10": "Zn2Uy5wB8gjERVWGdAfUBUWvEi549Sf55kbTKnkwDEAcvU4AMPHBY2TcrKzqmVqbb6hDTp9qRhxmwrajTNXXqVE",
  "key11": "5v8BCaGx3Yvj82ZvJmDGnWzG2FqZE4Q2jepm16vPvzp3S1TmMwheXL7zLrXV57nwYcbrYe4r72v9qPZ9WSG5WG6x",
  "key12": "VpvtH2swnRL758zvs9FP7ZTRJ8sTjdTUqopSGmWhSGgotba2nE3dCNeuKNRRECb59ZMGPw64ffig49zh6D6aTWT",
  "key13": "21aQWjjHtgieWjCvrVGGhu3kFYSSYRLe8TSf5zKPmyCVSX2duJDtjNR65mspABsKrjGaiEQJyUTmEerhDxUdtahG",
  "key14": "4Zu8QuXDPLbiBjZhJeoy1yc74CBDyAQPqgJafJipY2m6gr37ihrHkQAe2pQncxmQtSKfkS5uKetHGbpDDHkse83t",
  "key15": "39JnYfskyxmgY8XeW6szi95nuiehDpKkcai7VdPtmzXJ73meeGXDdLygBU6Lw5YDEdzXAwKrwBQPua2m5TQJzVwg",
  "key16": "62AVBwPKN15PLj28VCykwbF8KZHXJR12mTuxZ6mhZc2CYMf5rKikfJYR5bmiRA8J1dnSFkv5XNFZuo6HHKFTL9i5",
  "key17": "4SJrWcbC748gyegSRxQarPRPt8Tt5UVDVL22hGv2W59JJDSc2Hg7C2A1x8TXU5QdKxjDgDqTMYvWJ4qEaCMxQUUa",
  "key18": "5ofQhwv3f4DRNXqT1hJcNmWGHTuMBubixUjsGhHiJkWq32WNAwChVyD2PnKrSQSqBkbxAobEmJJv3UgQEgF2conc",
  "key19": "8T7S75r5qa6Md8EbQEd1uMtqZuYpKQswCFD2Ee6WtFDr6EVLoL3idf5Xq9jLB5MTUKEjGLpNrTpHjpeyY34teGW",
  "key20": "j3ZXNpacYto6BaS7UkSNYpkbfdgAdDg2T56XfkoB4B319EqrDNPdWGGchaWbyF5Wm55wAiGgKLP1T3fq7nXNqde",
  "key21": "37ZQVuNmWKF11kxjrPVPvkXjNWoSPx3VsbHaN6uAwLpKM5aeUDog1zEvFgTUbFfXTUHj3Y9CZERUfmdNPQGgrtr9",
  "key22": "5qBGucjD7rijayGw4navsLfwKPxGWPUBXvktMxN78AntycGgdcaRFGjpts2WZgJoxtMEEMpsYCgpQHH2nWdQWwN9",
  "key23": "37g8eVGtNToGeAbBSbT1vSYuibV6ABUh5VCP9q5ufdgGmfTEaWe8qJ7kdEHGXhzqfsLkXRgQtEJyB3M4oHvQvMWz",
  "key24": "4Nswo35ib5LeXdeqgWqv1P9LYPo11z24U5fT3Wpf6w3C2Sawtemxkj1dAgxsPmG1vC6t7GPdx24rDqdsRE3kc7tB",
  "key25": "66d6kHSUrnne3MuArTSAjTuignu4yFZvXrqsbjzy3SbDG1YUfbDaXjLP52kpnkdCjgs1E3A69FvAafLRVS3jctQa",
  "key26": "383A1rd7gKiHAS4GmbM7L4TdXFMGxoFDHoVvitG5pAkMuNiE9JJfnxhvHrSzqtfXGeoCZSDuHZSo3NyEc5sEsyBS",
  "key27": "3L27uvaPtTLuH8yMAA4gBCjTw5HxKQQfdWNAa4EzH3vkU7wPBmxe2sy7dnuEVKKCh6RqD23MxZzwhWKLiXqyUKc4",
  "key28": "5jH4zoY6XuyDnscXy4GF72axrk8hUvcu6J67RBzfzYrRa435ABuS1pCcDnPz22ebWzsgsUC8WPBR12Y1d9dpMvyj",
  "key29": "2w3A6dGJjMTJp5izqdK9vsan37jnynqCfE1pvNMgW6KbCeVFbTQ8gpTaG46wsGyDedPP1Md6W1zzQ4vazu6yEir6",
  "key30": "2JeD5WFT4twf49Sq2iVtpHK8RTxn5u4CBvRe2YGpMs1G3j17aPwa1uEbEMGyiggDNRSAWqFPc28zHwAqwdKYd5st",
  "key31": "5Qa1EHK4QN9pFCVt9umAb2JN6NDo19sP7Bchx8o7GFkJeboukQZpXG2e5JpaynxwCvgBYb8FFWQzRUM6PAz9kwG9"
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
