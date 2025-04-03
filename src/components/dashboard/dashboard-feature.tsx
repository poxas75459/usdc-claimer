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
    "42qKGyxc2GH8eyLqHjN3RkiJtbsqfETjXQYGr5ttBkuWPwwpNQEHWoaFngEiPErAYdSS7m2Mdx8AJaBDpD8NktGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vmq8t2n67vrgjzQHRo9nSjULEvNTfcjV7t4tAZUBQgrR6FbbFSkSfFoP6kLUiuYuusbn6FTqHqHcU4g8r8yojmV",
  "key1": "2VvbGRktiVCTUMRXmH9ByP1WMBc7GK83fmEo5nQZqKtpnTajwGnKBkPkcCCzW6doznMziXk1HyEoZ1VVFez9s1gr",
  "key2": "2CU8qsjtGP8E7FTE2f5xTZGk2ffXjpx6MZGAxvpAXSK9b6Af8fER2TVyJrruLZK6RNKaFzJp3wM3N27zQkFBbSXP",
  "key3": "23RyRb4zkDuFkZECqbbjBCkDZzo23iyxsi8ARtzZPuygixxe1A2Eocbcx7q5wgdM4NjRmHru2HbvxtZ9wypGLRDk",
  "key4": "2GEni2KgibAnY6XifAtFvBxxnchuyebiazSDC9FUu6TiVjoDP1ojsB7eWFCCrc3jVLL3tT11XYZ2f3nNZv53H4fn",
  "key5": "211myXctBHw2F35CLmZ1GtmWv732wzHKwjQcQrFm9UTCwxyTuVrDRMv7k6LppMVqxkFm1bu1a6Gg6ahJkyg5N7t2",
  "key6": "k78A8JnGtyVBpKH5xkQDxRMt8H7fDh8emymwz98HZjCs4NHHRY1dwxXgUNo1DsdHccMj75gZWUg8FQDYLoBQGyp",
  "key7": "5whRLbh32bfFVMUoNhvMqFTWthr5dUa3JaS3s4sY6gYShgK771inCXHgY2yBcAgU7Xk5uqXudSdVHFnLJKC3vkg3",
  "key8": "4MoqqBberWzRqK6NgDuQ9sQdUvRM4kYLjDQRonvdYeYTsYLsdnbDeNHs4Po5oDmj49oiNaXFWfMu3d4RFybuAL5y",
  "key9": "41CMBymdtNB5vJMaNzpVokV6PXkTo3auduLXGNNkTA2MQ3Uv6dxhAKW5vjc1B97jE83AkMsAt6KVUuXpYkuDTvTy",
  "key10": "2VJ4KLwADtocboS66wzrNDbJwr8BV4pzgHNe7gQHi7Ujgnz97ZJqWkk9CoXShVyuSBBTQNZr3ZGDAeRum9nDeKz3",
  "key11": "5GvXzjF5abBnniR1snkfgUGsH4ZrWdGNPgLaBnPAkCWvc5V1isRxY67rWTs9eFap6NVoPN1aPNeU3ZuymNAj5bMv",
  "key12": "9VqVzhjFYBX22eBsonfUtFRd9QF7YTtRh1gvef4fTEyZ2YFAcqpSR3Ug4o3VaXGqQ73jnGUBPXfbjqbbFJeC79d",
  "key13": "4Z3NgXZL4LVDJg7hM5W5bwbMGVkDHqyQfmN8ALZck5rK9zPkymAQbDjiHCtcRkLkYMF7wknDWzcLV61xvJp4ReMp",
  "key14": "4EoGfQJQ5oZJ2ySkP1eqBd4KR9Xx2VThfXeYtXei4dbnS7tcY5i2yWLBPTL6MwDYKStNdVahbeti6zPGY49zNeZS",
  "key15": "tewP7hFg4xhS25fLBnzjSdXX39Use45TGDbTWqZNGd2rpokcAtwdKtmD6qSnAQs6m3wzryihqTyHvTnxK4f8aKf",
  "key16": "4mgXHG4xYZf9MWGBFbcDHdE1RkYG4AJdTZc51k4YnDogaGpAPgsixwavcCQH8yYhPed8pFr8AEPnSt7bBBdREt3p",
  "key17": "9eD5E3CGnBs1kNo6QMryLNuq6StU9jBzVJRddKBqfP2bzpNPR6VTGdvq42zet8RCkY4irBUnGXwyJBi58G6DuPS",
  "key18": "i31xCSepLe8FmrJeMdNKfJysLTvWY94JroV8z5kkeqtZzCKfP4EzWAAeW3FhkDWKB3xsPXXGbsGVvF5buzuRc7B",
  "key19": "2jP7jh1d5GepJtcLAshpQ3fs48MHjFjDxxe2Ed4yidGdumMvkU6ox7FESMLjEGn6fcE7edSAyUT8NxLpS4czNzzY",
  "key20": "2vwdD2fvWMiL1nDHcrXM7jr5U1XJme35Y1VHT1MKPiq2uV5RmKQUVU2YAmycStt5x23GAugyPPj8Ps2V3i125r6L",
  "key21": "JR3PW9T8onjTRQKaUfziZQykmuSeXh1R8nWpBAgbxHDzRqxp6ZC8WWou7Bb8Lct4Zn2Uf1Yr7A9ENjE1ZvZmGrY",
  "key22": "3GgeQpjHeUj7wzrF1HF2yCrE5BMKBeYZMr5BcKiEwH5KuyMcgVhLWbUgDHkQqTFdZBXBm2bVYuPz4vckceCHA3ez",
  "key23": "2gL9NsgmqxfuY2y95gPZhLBnXWnjYZEs9inMW7UDHXZi4DEW7Vc4DsuWgSwGqQGLsfahnFeVL7GTKqqva9F3ZqmJ",
  "key24": "3BMyYJVAAXQQWmE9fxZV1MZZajPAa8nodYazbXrvTxoAPyQx2Lodf9jfUSQZCrp7unxHFvJTqg9K1pJ2z1pJGTvE",
  "key25": "4oobPejb2SgqSPGbGDUvRhqU8nmpQZRbDtzQbtg7RYtUPbCVCprPc3aNkjaj7StJzGPgG8ce9CCa8tBDfEd5Zjrq",
  "key26": "3HDYWABJXddy46sbzVYGsSF6h5crxi8aCN9UdnSYeJ5jURroQVr7mCv8dkTGtBQrPAgq7SvraQFSYFA6QQ8TDkx1",
  "key27": "96Joyz6hjaLdz2jXa8FtjAy8siHk9Crvxi9xU1Rcfgwdda7h6sVC2t2NTtC3KJvbJfE3Ji6kw2uce3PUziZPF3M",
  "key28": "LHzsHUxLcbKNnbX9cSby5fT5NUjRBdPrCb2jjTHaqddFw1ncQ2SggKGMMgTk9zEH5tqbgjAbSgWwZUrQTgSzorV",
  "key29": "4S43kY3SHxpFnZJyad9uvkbLU53RdWGUmNVh5RfzAyS74kSCYd7AUhXkXzsFSsApuSQWGNWkFLAT5N14mvobefuB",
  "key30": "5VtkBTfdVfMyiTBwzAqoqEdusVgDdbEyd4cGPMg1W9z94NCf5dv8XmiGnZJz9XujE6Lgxdq5YuGgj9rm273EP1L8",
  "key31": "3gQ98FF6GHrJrcaDXbr99j3aaDpRZDSiKGpmMNanBsKmLCLyKh9GeoWjzg5D4NjhnrjszjXdj5UeVfWFahb3ASCy",
  "key32": "2Y3Np8C26bgXaK8BQ9B6taZZb6agynzwgmJH7JgTfxBZd4DGpufqZ8QBUWXr3JyuhHVxjTtUWyRH9V4Jc3dGrDe3",
  "key33": "4EWJxQ7MEy4HNWRx7XqhoCp9nr9VPkSheteVrnjhehx21SkEGp4DbcdVd2YQ8e84ZVzshLpTYJMLGVXZMEPPfzsg",
  "key34": "64QzbLsVznXpBASkCo1SEafDvtMbyFMdJ2qm3jxWoRFT4LWR37sZBgDpcjSZGkyPVUsEAoNE1Zq43yaKfw52672b",
  "key35": "438J3kYhT6NfpaX5BDM2jV9uUuJ89A1iBQLWFydTPskJbjN2ki9JGyzVECh2jDaJ1rqJDuf3zzgbWoincVYwGCTU",
  "key36": "imQogugsrqqWBmAGuvyyjk6TbtHGkhhLzQ87He32fVP51itX7gB1KdpvM7ZfRSmS3eTe7RQJsdpL6SPjYKFKPXA",
  "key37": "3ynNu2Pfv1Wdx984Zwex8yDnqezdYZsE44rQkQ8BpRigxZ3UatEeNYLsvYwKvBaNKsibg1MDparTZWhUXAQJoH1c",
  "key38": "4LjVpMUHsx84KC7mPu3rLPpaNcTVUWz6DoxfqTuYC5y7JyB8th3PvCRPVFdgFYzF2jkz1BfTuGrWMPGnituXqyR6",
  "key39": "E4KyVFwTon5kjdDC3PAgW5vZP27Kyore3xYjQBg45UYcMkh86vW4WbH2Th6LFdSt1X1crLtN6kRZ9dMAFmiP6Ju"
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
