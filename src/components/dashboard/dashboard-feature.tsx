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
    "3Rw9FDno9ihPdQ8Qk7x5YevJtuNRTZeW77xurJruVR4e47HxUCBoar25jWjL8UCRAgizEmpSgrd2w2j8Q1z2nCip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nH6tr4KXQDXzneN2jaMKq5fUsPaQE3gHTdDnpkFwA17Qo7NWxQc75oxMvBek5fgNxJduVYwE5i8GTWxbAFWCB7v",
  "key1": "Pva7Jhp68MrFmSaw2ARU1ptsLHfsZUqU8NqdmeduhFJ8FtsjkR9QWPQwfCPU2gpe1e8jsvhvBZptrN7vaekAVUM",
  "key2": "7uKARkC3MC82Gd2x86NJQ2EhMDDdkrnGsdyPweQTuvWabUmsQSU3ypBCx2aSnjLJKiw2xBcz8RD82WV3ewTAtKR",
  "key3": "2Z4f5NSxQvmtZjyhZNC2ieMFwEMAtSC7ZXUgrDmH6yTWqyNhyvyDoanSZhujqr7SHRqMoqetC21LH2NX9Ae9M8Y7",
  "key4": "mjbJXKvEyRgNLSpXkaqvqddGzLxLAHLLyV7XG97n6W3y66Yo5MG6NjpDwis1DBnhgbod2Snbc1dvRqDfKLgv6X2",
  "key5": "3yZK2XmVsaNFx6mSimZDDdvmksJbAgB5Ry7iSakqRazUG2TXdgso4VbsME4kcuKytqJExn18BescH51mG2shyHCM",
  "key6": "65A7eN38e1E47k8dWHDyGTMDMCwXaahkSu9TFBV1nvb1Rx1vTXdJSqqXp3PHkGYU8FKcG3D4rTsf7mB1xQotnnV",
  "key7": "5KRcmrW7DV4Q2febErMpPLLpRf56ZiHX5r3v32htxXXMy1EzhjpqSNd95GmndFkWC1AneTVr9HssLJEZst1YPXui",
  "key8": "49wNVEzy4aFPydvKEF2JRp6z6DP1mmecbwkWkgVB3QNtmKWpLLfuCsgCKG1y2nwJZqU2D8Le9pT7HNhn8amvDhXD",
  "key9": "2AqifXhHmatNDkAH8ffu1ricX1BJPxHNxwRkbWureNRy8sGLC4H5UhBhakxhcJGJ3h7sutE9FnZqNLomFU7kYHHy",
  "key10": "2Gtzuy7tuvJMD2Hb23vAhrhFNr4Hbqyx5wsZcT2zpfxxGxB7BKkQd7uxTveDNSJa8ozGSYCuDghK5VVPBJUWkpnB",
  "key11": "3TqwVHzsv1PXiMK8RhB13UyodqrnD3wVEtummVA5AMM3n982pcPj6kjEWb6KsD1s1FtoeqWHJhyKuNhodsdTXzVE",
  "key12": "58ThBToeZiZCL16YrB6wDq9DEmk8RMAYpihJUEtEe9TDF3y9Zy9CTNwDTVQ2V3KuYampnnHaG5Zm94bG4qr8UzLo",
  "key13": "47MWLnKeYLu6b2TBuHrVL4JpGiVt6gqpjigL65WiWJSRQ7V7FTzjpDtXAqvhT7Xq8UpvQD3umLdasJdRMR1irp9t",
  "key14": "2CGxrrPjZZLQMHE2QKTKAkgHTYFAubeEJ8vFXZarBEQ3zK3YW8b9ETresJX6UabHnysjEsM9szwe8FPDqUuHJ4QH",
  "key15": "3J9Zm3A5uy9Hao92CwCLeMQvfgpTsX431BYdDUKz7ESqQB9QoEgSXj414A5suoKyZF6bue1HXjwuY82Ayv6QdHeR",
  "key16": "2DhG3iiVxN3CWpx3uqX8RoyezHrq91nDeqHNEHALALt4E3tjKvFihW6cWGUxZxUbajejdsSMmBdSAc7JM3Nweedh",
  "key17": "jA4DK9PcMr31c3S2swgirxHn49PBzJeLYzZk4SmLe4uEK3qZjt6LXoJ7ZYdGi3Je4hEpMK3E5XJw5jUH9T1sPBV",
  "key18": "3gunEBBnvh8AJ8d3Ft9E7EWt7YxPDLsjJVnXwBoJxZy4qJpjHq4ibgPs6jcKqFhsS4Up6E46KWXDVoKwcFnNeUwL",
  "key19": "3m8wmu57KExn7mR3p9NrhAJi3jJJ5RTktBmKZMa9stdWmr3jrSpGy1GHFUinWRZ3Q5htyPThaGvFhC9VnUQuGxgv",
  "key20": "5mZfvr8rTf4cr2ed1LncX5cy3FtUeufVaUkhAs6QGiNxPwn225GsDtPyjZHJR7SvrifCmijQS2oMVCs5rRjyhvKg",
  "key21": "3j6WRr7t77sULDpWoLr5TwScFp6WGUeAH6WNDw6roU5BWyBi5UprVWuzYKK3nVsVwFfZmXEdDBHvSbacRskEgkq9",
  "key22": "StEagAks2H4drJXN4iEyVPGQc4GsBg2UiFkjyokrLH7tYLLYwQNP7sDwrxGf1teS2pNsRTK8vDqW8u5dBH7KMsV",
  "key23": "2jSDf4iKo1jFJD8pVpfro8vKnF3Skkp6EkkXg7os38nZUhPzYS6CQzKqfteirsSpPrdvDTwsHQLz6hqVoBJGTKwa",
  "key24": "5WnMkEUBjTZaBixhQnphyjKFryfNpJjTLXYUSBMDp17eRts9MQ5cLSN5hTVrVeqNZtx1JRTD8kZihsYvPoBg7sJB",
  "key25": "TSuWT1xTjCA9UnQADiJ3gds4A2CafsEU36BegRZXC99AAa87QKEP8SQCiMiNjFH2TTVbBpF5feuQVUpMSE2JU3H",
  "key26": "3DwbGYdJixXBjh97PzfJetPD5urqVkKysZS1LygbguwwP5JWbM8PxMDKoqVyi8Y18dSBpKJHRQVgKLt7RiuCnvje",
  "key27": "48M6Gwh5BfwNbiuHTFzZVxcagP8vTRWeohpJsGnQCrWTFbRd7LtDVgtWywh1DZdc9XBfUZ4Vj2TNMQyGwjLD3GW7",
  "key28": "3ThHmqV2rCs7cASwz2avdpnzmrXW8tmubFS2NVhr4pk1Lva1sjvP9NWfRrDzfZa4EW4dudMyD9R77SAvgPSxT86E",
  "key29": "35wzSxU6HDpLsXqQ5Uw4mSmyHJEpg6zUKi4yep1dFWPLHJ4atUjXKGcRiDNNaQhM1T9SR2LjchKWjHHEJHcMRGQw",
  "key30": "2mzay6xTx36xJvMMB4xu8KTxjZT1QpSpxKgfJbdWzefEHpdEDopLzuAFT6trUkSkYbJML79ai3wMDUKxutKDC1Bx",
  "key31": "4enmBadCnd9aygFFs1fvbm6FynKYzwJzFvU9BBcsTAy6dR2AWwzw1ds1AAHVzVYgWoC4rNBxB5yPdZJGyPGXtMFz",
  "key32": "kEpfokQ4p7qKrTKgxP8A2HdErV14XYUYMrZMvvzHFzFhX6bDuAJpw8zW1ofmSo1ykZSF25587ShYhQ2A4kMCAXR",
  "key33": "4QpLar5gjhR885uBMarN6xhcA68JUZeDg6qdwNKDd24xiyR6DsMmvxviomBZPsYdSCd1WdSfjGZrprpymFjaWnfR",
  "key34": "XihhGDdqNFKWp2viaBBnoL9sDWST3pfVEefg2hRMWiGfwp59yHmpFq2JPP2LYQUSTeo1FKe4qqeMag4zbFAvQ8T",
  "key35": "EBka5PzzoiEPR5d9YGkPSu7NnzzTEW6mpbCms2f1yJoa7kafyyWFerUBH46vpCMETs5a4kaPRExRKYwHZiP1o5U",
  "key36": "4C91QhB6ueJGPppfsPDDRk3vWwR3Rcb4bepoFX9BFcaM9tN4afEsPFhergGwF13xn9CKyXs7AK5y2egCDLQeEK1z",
  "key37": "4NV5U6YkKTce1xJ9o6VndHx4MTqnupj1yGWPZjW3rMZbBirqjAiDD3fxAvGxo2wNuABdPKGsk27ZkaUaed4JHTik",
  "key38": "484ZH9g8E9zvsWcopQVPLNyHzgDjAfLYDdzoSQUz2ME6aKB5eNFyWruEtkjGYUJhfxtWUxU1K95MwmHcBBEb6DQF",
  "key39": "5V4pDEBvMgJ5yNaDuFAQDivnVVq6TRzXGBYrxxQJuNsvRr2LuChBCzcPrrANZHtigRiKTJievpHLFZ8NUjKtrEhw"
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
