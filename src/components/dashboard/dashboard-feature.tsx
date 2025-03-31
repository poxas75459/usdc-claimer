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
    "5u1BR3PHY1ufY8sgm4BhQwUwU9ohS72JuQNC4nP1H3gyKgHrQx7tvTGfNQ9vGuCefZ7bvisi1Xo2Dsr7Ud1TbfLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oekxowe9645gWx5P39fnSkWueUszyGyrguoQ5sw4ZEzUdDUzru6cWqy5J7ZB5r1bQKDj95x6jT2531E3RY1Crg",
  "key1": "FFJ5prj6eHZuLQxxoxVsXAuL873b1tFxSW5iwinoaDk7ma2XdvUA684rbtCu8ZMQiMuJjrAC2ydJFnxFB2Ji4Yf",
  "key2": "5V2DxrCwXYHwFF69E4k9oMBqgSnvRjVnzfTwf3wjWT62dWZfy9HR8aEued4aNxe9dWaqHbXaibpDnEccmyfsaLLx",
  "key3": "2ktozfmH8QowvbQh57V32ERnrMT1NMyJAmAyeVSnEcRmxhhdpNErEHA5wv9tbtVurtsbkEyxTP9EDH6fEa3RmR9o",
  "key4": "vfSLvjB4UcDhzAFTJXMU6ssRH6q3GLCfJGfgY4kZdPCMeE4NPpSz8bFv4r7KE4wMgc8Z3bFXAv1ewpve5Dvs8uX",
  "key5": "LQhEDHreC6MTyce2KEXv1gdMW4LHGCJJ4txiGdhVR6U9C7LixrdkeQDCasBbVyx726MGqtVUpcmHvyHfieftdCo",
  "key6": "2pqznMMwCr5HKLjg92CDU4vz3mCWqKzczeRtF4rKRvFdypTAqWKRGgUZdUj66KogRmeM6bpE7AiLaMx9z1EE72Ks",
  "key7": "4tkvFdX5NmhergDVfBFQ8SopvzU8E6ALat93dDCqsi4XbLrAAz9g6tLBeip6EhdHt2hsgfgcBruBbaeDtaoi2Wge",
  "key8": "X9jjFNz3vHnw7wVPk3JP1P2Tvp1X7SSSYa4CVeEau2B9WeGFaEUkGPFPsBkS2xb8tzCfxHUtVNtvxqXVpd8muA4",
  "key9": "csvJ8XGeBkfozP3Jmkcaw7JgBXtB6WCYPqr2eWz4LfshEm8wc9Q8BtXHvCUKtVPEvxA8yW6QqxnkcdsyJzth3mR",
  "key10": "2v3yHQNcNwJ3SPSXSq8kLqTZt6RL5x2vAUwrjmDxpnubCJjvphh9RSikpdfNDu1QGDNjxnaxDCQ5qqRrWCievh8D",
  "key11": "5tPjjPqekehtCDF16sR18dJ1szA2ynT16HzfnK36wji7KS6GXk1ZbmBHHf6N57cijiSLTZyoBvMaGnFL9RVBxzn",
  "key12": "3AkRgnhCbDqQVJ5pChU8Lyvb72EuEw9WpUBFW7QpL9L6wDB6YHhdN3UDyD4qu6Rg1e5ihARK4kVVUWWz2tybGdgw",
  "key13": "2U9kr7EqXjvnF6FXXyDrzJJp5dZmLLiMxb7x5Vrkdc1pydxwS4CrXS8xbQHVuAd4LdQkqt5VTUoUaQYCbMUKYkM1",
  "key14": "4GaR6HmoNK2axwdMNKVmLZvQ3jSt2NXmXNXSig8WrFMhojwT6eqZgVnsYQ7MoBeUmntAGoFYuAe5wF9a32oyvrdk",
  "key15": "3pGLJLHY27v2bmPVS9fMsh72nY3CpE5SiS42BtGnvvJuSwe4m4MTig5kcRreXar8sLFniMHLRJhuwZqmPPkEbuxW",
  "key16": "5iMC3bAECB5SBxsSLj7ezxtsEcoJonJGdrxZyPco4Kue5Vyib3aVZVdSiUxAXdwtANRhdu5LKZGF9bJNdj7HxBY6",
  "key17": "2wKP6pXby2rQpNmki6SMHjcT8ubYv21QdKuYrk8rvejE74ucBbc6CKRQtNLSpRtGRP5oq7XAVbEKYe9WxHmKYcZf",
  "key18": "3dNeftaofmbnxS3kQQKfUJh3mzjBUjZQzHcscnyEWK5uMKTtPW8fie8a4DrgdCUg1vy9Frp25DemCoSDFXtAeCsR",
  "key19": "2rZYv6QfdZSXFvxWgeJf5bXR3Fstz26YoVnkRSGRTJdeT55V8FVu2wzM5DCmx8d2UdpRiYpSQhV4Ygkaz55ejnLQ",
  "key20": "4uZLNzW4X1MaoKyaxNLVDvxiMjZDBGaWPBcrVQ5deeEvSShQa3U8jV6ATYJgWw8gKUf6dyjckzaBCRJ98Pf2CuVL",
  "key21": "46D6Qausd8KqTD3AY3ko1UQaZV1Yj9eteWqRTW6b4XoEnffH5kLRox5D1USAitj3ntgMGwG59BQtz9jx5GsbJ6gR",
  "key22": "QzXcuwhpbVqjV5uFLHH2Zmq3Nj9YUyTPNbBJQhraEYq2LX4i2LB25DUaRbLJueoAuYAcCMd6SNAtwj2qWt55UFV",
  "key23": "4jJZoTzB8nmYppHuRma3QQDcwjeSWKee6T8sLYSyzLbzBCH97EcPt7ZbEs8we3WZSzw7wDGg2UKWHKqipUSdow17",
  "key24": "5RwVgR14dJskKy6viuobBHhxRFA6QfSSKMzzDsQaDqSKQtpJTQCt3EgdPSHnneZkBYwefTLsjytqCMPhX2w5fhhs",
  "key25": "Lat63vUYL1Q2XVUCbfcDX2JGnxyShrrMGJ4ccLN67gwhLco2dEiwAuyTasAnfbSQoo8aUSkKgqm7X2qA1f4y1cM",
  "key26": "3KUmHPPy4UrpbXZNj7dpJSkUbx2HdYyvUkdgwZLXbNba3LaM8TtjmUJa34aWdoB3bcBGF92MqxJvUKGsZvpfwBEr",
  "key27": "2CiMFysn6fNiEPC6d6e783i68AV5ii5Pdf3h42ZMtFf6TZErL72R4mxkQpSQ2CHyQSXTw7zVzCciJxGDSjHGvweo",
  "key28": "5gAD8nCJb8iXYpZ484sUpHrBGbDK7yt1CnrX5S6Vo4pWF3cUNd4eZGps2Wks8oH2WAc9MVeHiLX6sFqiA98Ri5QA",
  "key29": "4AagJZaXoasXE5rAU6KHWd9jPbAhgEnexyRBUx3f4oaNAeB9xio29waQkWJcQXSCcPkpDAyj4dBsr5tH3D99gbMr",
  "key30": "2iH8awUeHdouBWDGB72r8chP5J6LDeSpJPKzQQ64L8ma6qrtaNkEXH3kiPS49wEKVztjFLMVptCA4dcHML4htHk5",
  "key31": "4vMfG6FvVD9WYiZBUkjkx8SR9i6td9jBPvUziFwSC9WbLE7cQ8vmhaMKjdjqCbytKmbsHLF4xhehJjo6VUCscEuj",
  "key32": "55dZY1cD9jk37vrQno3o7DZtPMyi9CWES9RNETKajbooGux5B6g511tF73krdKEnFkm99PN6sZzgGFh5hGRgPuMA",
  "key33": "4EawRZKvfbKkUN89jwCRuAK8KYRa5ULXtLxeTWBWNUKwU88ubx8sJ1mcTc2XNtX4sfskgRdkcFaa7f8jDhdZtVxm",
  "key34": "4SjKT2vSpYMseenwdhyRUvtEqyGRYKMgQS1x6Ky5fHxzNStb31oKA56aFsiRj6qj4MvQfEmfTQNicn2Jwm1dgnxS",
  "key35": "5AWtZTDKij2Tx8kAPRSy2ZspFN2cafMPU5yqBndxXLrSa5N6kPUNHDnU8PFx8Bei18McbYy2ttwRhfYBfjJjCBvf",
  "key36": "azZvmq9PD7dxFS6Zw4WwvtjQCAJkwbpgqx7aREk2BStSpZ77j1r6NhrMDZRHRt6DsC5xcPWEcDvN4TZrY6nCVaJ",
  "key37": "34tYEZephYYBZyNAgQR1u1HZ3HET27y6iuURpFRNZ4XB3uoFMMVP9UbFzNBxoyxrdPMnm6CCnAPWjoYZFbzH3ZP8",
  "key38": "4h6JMrdXFjrmXYNPmMoWJ1m4se6CyqWT9X3sfahTExhnvPB6vfkjdT3no6eygKXAx5bvQvQKdKtvfrtm3xBYp6CZ"
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
