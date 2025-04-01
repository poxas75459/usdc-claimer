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
    "5DsL7fTDyvCF1fQ8UuMVn6JR2TBJGCRchW9imBTQEPnNT217v4kqQDbPaAJ34xjkqz7ThBhirzVWCcRkhsRGxDi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ffC1JTDavPDvsP7sAc3gWXLzczs4pyJXrmAMpdggK8o3tEoemdJMXTDVTrCUdKHTqVtYcu6fBX1SR6jnCZKt8kK",
  "key1": "2djn3UCvhHPpK5ByduUNm9hL1wRGr56gLp6qnGULf5KfoY6e589pWBtUsmuszuyiLzuuBXf9zt5SoYLpBkdLhCEp",
  "key2": "2kCZR8hgCBcuxdcw8rdsBRrUce3df7R1X7TgrGh8njGotjFhUToqYMNhcGwbX4zLRmpAxDdT7UpPfyDK8pGdcZDF",
  "key3": "3Kf95DEhNgBDotDjGeYBLFS4fcGqPABUkM6VWaCBgHW4YtRy4puwMF24tVE5LoysVFM6YPYaKTPtvJYV5Me5eVqh",
  "key4": "3FCMDx7ggu9mmAM1QXhmXATQqk7xvDqsbWBz5SDgEvG1wzBtxo6d4frQKRxbktTEFY9rzmb8ktdEv1r6XByGPZsr",
  "key5": "5a7EtnzW754vWDAzDiGsWJa42gsecttvBYRMYSd9kxLg5tPDffZDeuwBSDGrXZ2nMnYezFRD3s1EuPvno72k1Fdj",
  "key6": "37jsJP16CVm84wxJkoqQvKciaKxJZb9acnHdWnHhTZCGHXfP7P2EwVjkRx55hVgEtK51jrHNJyDW6cBVxyoTA7ct",
  "key7": "5CopKgC9yqVWhkkgcP8cSVLno3VGcUNGmGF9sSh8jyCWFnbMbV1oarvLKeGC3REVNE531fr5bznpDngAwVTkEPYg",
  "key8": "5iahFeFs5eiSFWLyK4uEmrjixEXoCRrK5dR4h7ZvuMvkPzLWP8CUTYcSMLwamSeJnMoa644Hvni98ZNNkhvoGV6V",
  "key9": "3uXj3LwLsgGXGhvqRt94JwsqzMc4t53eFLzbLL1QBvZzdiNEPa7EfF6ZRjs2Ka3wr3bHeXA1DVtCHQT5kwvPSniE",
  "key10": "EjS3ACnEfbm2urYgzCwj5aTkUh1qkzkbE63NXB2Sfr9WJWiYYNCemNrGQtN92F3yArfFMjToqt7ZMjXiuaLo5mc",
  "key11": "3ggQkQiehGV7cp4HdBKuKkNm45wqzB3Sv4bJtTTcXUDX7VnAWy3UYCUgL4Uq69utREt57KLxASXWsN2oDwXsePp",
  "key12": "2C17FXWm4vdWrfTkyyN3oDFyjga25K9jsfEVqKt56qfWJm3576FasEUCKRkTUt2AfnW1yhRHxdHTriVGh6kHduzW",
  "key13": "FRKfHKbpVdeBzenidtphA6dNQvQUZVLASJ8CLeevHTf7LpKeq6swgFsBT75HSuZaPoYMK6ZbpGwDm1HDyn2HXP7",
  "key14": "5mPGZz64T9WiuC7Fr5gf2oLyx4Ri95rLC4KQaGmhW1dibjME5voDgnHsgVUggVf4sqvXAXX2xt3hmF9a3v5voeBb",
  "key15": "6w1gu7VNNx8B4AZGLBYaAF1yFPWBpWpbzdsShkzy7dWqxP4X9gupZjTdVgND6z6fkCgt4FtAiwMxAPU3S1yEMg1",
  "key16": "5ZB4bqbv7YguszZHgJsLsTNWPd5Vz6EoqCDUZDYMFvCAuiVPd7H4tUifvdJxgnv7XPEHhLbwqUaBd9znYhkaQkkM",
  "key17": "ASc8FE9wCGpUfA1MRLHkMjxqpFELNEykiyYLcMDD38Smpa2eKMdisfGKa7q5DT6qoizXyJkYVrjxcfERt46UF8J",
  "key18": "3b28xk4CxcajgqUCvz8R5PfVR3sYRsHANU3ip6CocMVyVQXNRLRucJsaT7Ye8FLosH6NF2XQBhyV9ha1q2YdDGLp",
  "key19": "5pHToZq1gJxdiBvwnCruTrpCBDEZ51b5Wt4xpEwXiFo9WGQ6aiLRJvQfoA9XK6hS3T3aKHLfCAZpPkJPfNvz1dhi",
  "key20": "61Vt8oPFXJur7M49uetJLMP4BbccjZYjfy9jGCxTukRzcaSDFMnwfheewii9giUrXXnEaKrnLxiecG254vq3a364",
  "key21": "2y3BXzaE8MbHWv1WzKaWoGeyyvKowpde13i7Jdo6j2eZyDjMLJLTMyed68SX89AhxeYrijqVetLDfRKam11EJRGn",
  "key22": "4Ztswx73uHnaCFyzUvv1ht6oggAwx5VgL1p8novUHXV2cdcr9U79HAnQsZD4puHZHzaVnaf19tALbEWNU2MFhhgF",
  "key23": "2J2YnXoXCgJJL3Ybc4hQk7EWA32ZLARLxzZvVvbQttLyLTgqea5bqmQB472vJ1qkaWz7adpnVLGipYipGL129eJD",
  "key24": "4oeucLcmJW1gqRBCkneQB2p2t16YdDqTQ6duXmZQRxDxwrZuo7CT9xRtjEY1kQC7vbyd3bPeVEwTDXvRrZtgg4Ln",
  "key25": "5vAJ5rY6UEY4UqKPA7nF6aYuyPgJnhedAan9mEmVWkxiAhxFX55kf3kYdmt3HnR4o6EaFkgixZAXYp51eEHWSi17",
  "key26": "dmwgG5sM6FGDhWFxpCvnKgqJs8Xd9zu8szAVEfo2m3idWVCcmVJHxrScgER11hT8HgZGBVZuZ83vXizoajEHx3m",
  "key27": "3VJsAj82we1VLbiVUQ4AJY4rfCPf4JGGKiYGk8CcrNE2iLRYtH1TwGJ9XhYFMDvVE3GXsYuZeNR1tbJcoHAPpKcE",
  "key28": "GXnXymnRSWVhPv2bQgMiPtXsmryMJSRc8V4DNc5riUQ2hsrvyBf2BruULRRghj9LLsLhbWurVv9RgBSau5jo1Wi",
  "key29": "2tuzgRGAdoXCoeeKbrfC417EphpZ4ZFa9jCdXFR1QMPjkf5VvHvrDBowy86mxEaEHANwwo9T8BpwnJiJChRDYCb1",
  "key30": "5yX9PxpWrvJekiS5agEqmr8HNZum2C8KR6cgfHXRw1qETgVoXHcvFvwnrBrjbRhyQWPdxZ92N9X9brMnsiVc7aT6",
  "key31": "3xmkw8qPt4GzE9Dh9ZUTfQjUmiqr1rHJ5cRQASHXVd1Q5MALheJTtMV96zQW7WX91VCf6Ki3afn37AsqLGeUeVJx",
  "key32": "3K8ztGT1rXJMCdPTAAUUmVUq4PysDqmdRKuSstXcZJ1HTXE1cFgaPAE8ipFKpT4QeF78FZ7jjoJp4tanxcu9yntU",
  "key33": "5EfP9YZt9yFVCsoGH8iBxmK6mnEH6awKnVeCcQ8LLGpu4sd7q3c5pMTeccDuA65RRHE95Gaq2U3W1dQKR9U6AX6h",
  "key34": "2BLJHrDqKqDSZKxncLAcGq9kgURhdcPs6aty35otryPeRdbgnqXSiMN8UWmxUWGfkuT1t8MViPtB1E3rz5CTnC7c",
  "key35": "2EWeFyjSGboYzS7rgJtT8QBL71h2q7dfz83aF65m7pezBWAMnSe9LiYyqM8aqXuoqftCsJ8MgokNR8vsMUHg5Vzo",
  "key36": "2Mbi13KFuqprA8wXPiGTyvykrbQdmbXWZkEhRWebT5N8PxnKFpXbbBWFw5vJeMqd4FwemVvsmLKiy5QGi5vbkCAR"
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
