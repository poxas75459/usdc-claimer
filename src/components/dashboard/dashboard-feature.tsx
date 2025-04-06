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
    "4R6tn332TmEZ7Jh7EdKvAQd7npLzchKxiJaAfptg6Q78hCQ721ESBVyLhiAfETkfUX9SDXpwAbeSoWx6DiH8TZtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjHk8P44JYx4i6jXrFX9ym5k64R9nwgZD7XHsGYtiZkkVxtxGzyhavikPdSvmLtuSfE97MF1CoGM6z1NHZscbzA",
  "key1": "2Li51a5X5HPiDeZZDnUZxy1PrhHPa8gToQfVAHfcYCwM5bzDd5qAqq8E7SEut4WZbVVmweGu5qd4tuyv7kvaXqBb",
  "key2": "2vhJDDGMtCjSnznpdGN54LPKS9Ks46rAjLp457AuHxRErK6nrxdpphP8eUUBMYUS8aL8y6pSVyfubNvzxRhZdNa7",
  "key3": "5iLwU6HqDK1xj7hpus7XYSdsZFBJtFnLZEUF48goYSDE7gpGNwWnHx8oK36Fop3GG7JaCvHTt7A9eRYsTzagftfV",
  "key4": "2K5Fvx4LRcLsQr5oULN47A1puyPxXJpnkoCLZd1xB1p4tpc6WifoXwKrn94cS8kXMcPeWRnE9wJpWhPE36AaqzZH",
  "key5": "5cQAX7UJQwDcoMUo6Sn2W2foxUcQKWWUYLYRZGDuYPpMMuW1zpCzKR7FnTw2vrZt6ciKNvqutcRaSRdtXGB5HyM5",
  "key6": "ArtNYtNNFU7dTHzyQN7Jx9nvSn5mE2N15P2P1CUEEiMouFSQawgXzzpRTZ863RyPZYyEmRw8W4WFFvKhGA9Z39s",
  "key7": "2zPPAMS4uJzPhMQSE8G7P8sVFpABdWCYcM1V7Tz4Bq9A9CEW4jLTfKFFzAPA5LFEPHp96sEFyLuFP3sqrZj6vvtG",
  "key8": "4oc2v5kBRuNjeanyYTKL5eB3FaPLY2peQ2UxWvdvnBCF2sb7chpzEgFhYSihUVibe9mfZ4KafxVzDz5m4cctufZN",
  "key9": "3dS7ujxkXkXbSf1h1yZVe3jtZGAMY4ZLt1SUAqq5VMFntt4BzLaWMe7Cx2wdw5mCxAxzTnXby7TeZWRbKuxvqTev",
  "key10": "HCGREsjJzCdSXhg6EgUSSoyhFTiM4T9k6ifb26JjD5zZduzx4k37DMRr32bf9M42yTzM7nosjoEHoSjewqTts3R",
  "key11": "3VkyavXNRkhdKu4txuMndSpz9jijyatPJJYHvvpZumriURGS5yTGjXKULscZ2SoKos7LQYcRYsAAH2DHJoJGCYUX",
  "key12": "48Huk5qZ7TXWr5XMiVtZoE3oKeH23ytSK3vY2ACse24BCRJ3Lj5t5PHFnEKCiBpoRbfQwbZs98a8LwSPVtj78Sqd",
  "key13": "5dpXtK5cDVqd5c6HcnWopbhRtUmLdwwy8YgBxKS1jYNrc9LW6RwTZjmSh2AqWiMixBQvcLpd1dNNBDG9e8QFGqPM",
  "key14": "589HijvpwhzSuGsGNy67hHZeNZ5GjBwiMEcimD25WUZysqYu144Dfx4QNPxTvq7a6VUurjkdggdJv7LmLSwfg1Ne",
  "key15": "3CYAHrAAAcDMNadruo3pKJhFkqf1yuMUiDDFtJbZzfBjw68qcZWe7uGVmR6EqaBh8T7Jshf56dTFBybZZrMPAgAw",
  "key16": "hgkUS3Dg12hCap6jYZL1aybvU4b8cT6aCdxtKKsQx7VGiZ6nX5L4tFsae43o1ZNtTsrqEDFfETgTxnfYZBKkrPY",
  "key17": "5pGjxemf8zawRtyNRyzogQPbiRBQS4DP6VjiPRaVxUXUhzwukjzpWRdMrATPMM8FWcsymHsXCpPXLXf83CTZKTo7",
  "key18": "5tRANfLM2AyA15ZkMW2dYd1S2oKRqRJvqCSyKBoFKX4uvFeoNFDxiPx74JUBNcig8MesYBLrqVPHxp1i5zy57j6J",
  "key19": "61hD5NtzXFWkhTZoxyARx6aTW9rd3w6qap5ipDVKL5N7jWqdJXKpjFVov85rEAUkEp33BV9VbNcPu3cSRe517oZ7",
  "key20": "42tBiUuRi2TagxukwZPwjR1N5bQ9Ww7fB2ReFddo6GJRyCXyMNxqTVZeoopPJkLNfJ3cEqYT8StsdfSZ2G1cf7N7",
  "key21": "49chZLjWF1SLmibH6uin1e8DZ1wBWpe52zQ32iw6MjnG7nko9M7gChatVfQFhqmqhiUYDPgmiKBD3gc2uw6nH7Zk",
  "key22": "65TKUqRV47i5kV22i48mUNFWPPjUcZVYGNitauawUwpmXLEZ7e8AR2WWAQZR2F2gngBjaeaWWZJ9xUez3iJypVJP",
  "key23": "4zpJvpvUuWHq93uUXMiywRmLaqPR1WVmhXJfwuu55u6NRcBBAhwz9PWbdsLxtFXhDr5hovWcbbmsJgG8SV7Kosq8",
  "key24": "3EUfrCtG27Nr4cnFpg6gVWYNoFn3PC361g3cweRWa6LVE6smPw5dtrnBz4vQtk86tSnJRGLVS5DoEiNwmCLYsy7f",
  "key25": "Sposn7HZTbiRb8z6Bbx93iMWrqxvbD5qLKXomuPQGdECWKNFtDb1QaSvyGvCoh2sFptH8iMCKbyJqtmNsQgW2B9",
  "key26": "33EBzxZ3JQYNdkH5EyKGBCTkNjvoPHGFQ6vC7rGZ3YsBict8sMu6eZFASFTiQufqaUKYXgqDhirfPKqucPnM9ksr",
  "key27": "2r5GzzFihs1ZkRSBHC1JBaKEGk1guA8ADTXtE1J3TMuLih4QofkDYYfgPPKVetC3s61ddxk2UJwe1PQMcCoM4y8a",
  "key28": "5j5NDcScuV4GJ5epSyDtqUAwUZFmjZvnZxPfPcJPWESaqkcnA86QQWoa2Dg1dK48oJZHUz2hA259AnYhgGybJoHh",
  "key29": "H7SnnXKop8uiHNq1heeECMT8H1kd8Cn5sSRLm7Reac5M7p8ApmEQBVGDSbkS1PRt5RjTwMz6upaV8u8RyWEichs",
  "key30": "3ZRTki1eZRm22RPwtuYstjFBjgF1X69ooqPAWiWi5DrYhVd64PC7eGQFQizTqXBjrJHNK4WnMuBp3dRJEKNWYhnV",
  "key31": "3BwgodNKPdwVF836gc7a94MEaxbzbhDFnpWkda1i48Wp3WZAL6ds8Dc2CmJnnob33NwWNuU5rMr7Tmfk7cNqmeiz",
  "key32": "5GcYT8Rph3VqRLJsDVKNq9EnovTAVtCaAp3P41R6hxpjPRrhUDPXWs1YXeKjSzi4h1nnzAfh8jMXx77ttRmVg7Xv",
  "key33": "4eYKbzGb4zugakXsdwAxzrRkK9mP9xiyPPsPrq4Ejte2e9ms9nua9HDfM7zmVfpkGXipDNFKwiCpeWs43ByvxPbk",
  "key34": "4SwEoftULZGovpcKdXgwVj1NSpcSfbnfMTPiNy1d2ctFHzkeE3BvmMA6EJ96cyaT7krAHhKdta11cQFEtMmo3DnH",
  "key35": "2nXTnGgLXsQCJTpiNccxcqaijTnYeD3qWx1zkjvXQbYMU6bKYLHte1bi3mFBdyGTJVBGojg7VSSQ5FpTSjqC2WZ7",
  "key36": "24HeTHLFgdB2ZqnThKNr3cBAPKNJQpt3Y5nuW4x9QCsUAEFPtDtG8E9AjCZ7UK5DJ9QM2pRigjYDTuHWYxD8gHAD",
  "key37": "4aw1cxSpoLtrzVNmHFkyryXsxc4iTEFKRFCU5GTtGs4TiQdRe9WJNS76NmVUHdSvtWM8RXHCVY2ydPhqH7pP2G8B",
  "key38": "UWoc8GfFxZGJTmFLdkeFPMTnydb6Sar5hzPemi7amK4K18BHyuy3AgdYtoopQTMyNDMV8pAUXdPypsyhuPAqspC",
  "key39": "2d1prKXkDARg5GbSu3W6aSXcEjKoAFp5fnLsWKeYnWZVN6Hnka3AF2zrRvKrV2Uj7a2koyhNzAFzpnxV65yyzezG"
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
