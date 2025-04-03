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
    "2uUjRQQpXyjFNW9h98SksYnHqoP4wk3UcR93YNmUgoa8VyjzSLEbSFdr6QoLZ4j6Egsn72wxHLKm8tpMTzNvRV6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxokLsVgN92rr5VvadLShhAoimXcHkteRVdefGBJKk7cfLigTPDNuj3cfpgJBVtkkeDYZFH4kFd8RyTNQqcErhC",
  "key1": "2J8FjStjn85egomoJvDm7BDQnjEf2GnELofT3bvDKx7EkkCX7ByGS3PdtEJ92pn1NhE96aG7CjHwUG5pH1QL9f1P",
  "key2": "64z79aCoRFsNGvLw4TvHVVxRzxEUmhpYXTY3KqLAZ2fmPFCteKJvZkrk7X6vPbeaUj9yYiqMoEHz2Bh2r1U5Q2Uf",
  "key3": "449rcpbaFRrz91WqqZSADkpmFuZVa9XXC5Pey4SDRsQYLLvzPhhx4EVfaQLRvEeckM1M4ZqceZqqxbNJiVYH7Bj1",
  "key4": "5JXtQ1D3bHMMt9ZrbxHyWX2N63CLiWNG1yGZsv4HnQaxuFowi7XXCCUWutwjBxdhUAiiJQNpRYQrEkxpWMV3LHNT",
  "key5": "4UXSjNiLE63fBgkiXySieEygz8mQ5JmMhuvbZCoxqN7nxKmgtkheBgN7GHsN2aR6NVokhGj6azddtpUue9Cj8c1c",
  "key6": "5b9V4cKDFecQuj2xgtrqEy9oqttCy1wGP2UDxymsWMN7DcLtR6eJpeunLGAzJaNavRHJbY1WiEizsqpEWMohcr7E",
  "key7": "5JscWqEKKkX5oaJnQzqFyDvHZWr4r3bHasU3Dztkmz5XDLPMopn2vLSJYxJ1cWVempAGBu8PGnqbynyKAGwyBgPK",
  "key8": "2DJMRwaNqu9m9HLDzH259wM6MvyD4onKmvEwwHNsS7HENJC6RiR2YAx63PGSgJfQvj8spF58VVf3VbdKBjp9b3Ss",
  "key9": "3D8xXMedf5YQa38JWYaKHgtZ7J3YH5LifVztcgndvQVwcWzAtv4gAHxpqmyC9zHq3h9WTJqg4NjwQgcg48bKKJMW",
  "key10": "32zxLdCC6FriH2viF23XpbgfFgHgJezt2sG5k2LhCw6FP6CLFTSAiHTn1n7n56jYt8sQyZJQCfFVT1XZ9sctY3Yq",
  "key11": "4uMtk1TCFPmbLd2rgSNGNEGZBA4KbyFyH2JCVJxrkfg6Z2h7CshZ8NhKabQPC3wiUggMhyGvdDSGe4uFn5TYz5PD",
  "key12": "63r3fvo839xcfsQwNyVxmLfKnoZ6f6c2gNMRaihwUrhfNmgmvBJ4MX6doxjrUbCrSSGXL9mdkuQqG6dT15eMQ2wW",
  "key13": "2DcTsV7dNDh1NEUkkaruPN1ViPekkDg28hNsWvQHB34E2zhSzkAS43yT6XBZrxSmqdy3sSu6AkiARLFFDHc8RyiV",
  "key14": "5W847HR4FA3X1d7YjCAm5LYA95Maq7GxrddyhtRDjYTZFbuLd5eeU698wCe6rPmifet4SmBSmJaAJ6wzyxZS6rQK",
  "key15": "jw7s79GXVqPmTLMaY4cvyKv3qq6tNHKpggLL8UuY32CEBUZAP9t19v9KMjNVxbpbFzjuAbdx4b1J9oFfvVK3Nvt",
  "key16": "3mRLGitX1piTADDHmh8m1CDugxUYEuVruzaM6Wdzz1zbzboFMm2mTpasXvKvkCPedY2tjuwR52CPnnHPyVnXSgjm",
  "key17": "3hmue4rEtoEDRRwVozTCwaS33Hk5arEK8M5G6RZpwwrAeEBVcR4n7zms3qEf2yCqithf3Ri6zAhafSKxXWhHg3bp",
  "key18": "oDBUsobRwh9dYPNH3QjW1g3DqYGeKDKPpHKz3JceT7hHvZ44TGq5mzXwcE5jiXHons4KDKqrauMqWT6ADMgTjTN",
  "key19": "4Cd1TWEozDE95D5tfEtPZesCHpdU4vTwK6W7ehuX52JP39LbW9gguEFNBPeYutZD2yLYNjce7RBvPVZyDANo17JY",
  "key20": "4jSH86KvbScbmsdMWnXuD8JYxPWAGKDfpkEhv5Jr9xsn7Aqc1aDSfhqPyiuZTrAu2zyNXYxru4YKVZCgf8wmLARs",
  "key21": "5YfAgeRjiUgo3Y9vRsGGPBnHRe32JzgJ8JoLpXz7FDtuxsuJHMSKFubxvQdKcDfP8pwPoPxTKPdQYsAWCVcyiQwp",
  "key22": "4okUXKiPWVgiiG78K6ZU3ukp19EntF1DRchdrBJ9Qp8m72Rrr6y2CCJWjQV5e4Lg28w9GWv83kVbTzyXKbgqUztu",
  "key23": "5D1PBF4YQSUvFbSxkaktU35n5r7gAAEYvA2jeiX2v6pSGpnwW8fG95EEzUerauonh2jQCWZNwhegXSGnuH4L8wm",
  "key24": "LfYDYeoWUyqmYU39TFnndRZu1VY64FFuXYK1MwzR48fpS31dD48g2rkiR1zCfpV2xHUSZ4vhCvjBLUQGKJfEATp",
  "key25": "41vj7ib5fuGaCjBioXKSmJafwMs8MHNUSayjJ6TZcreJkfAuMKKTncFCw9QMFsAmBErw8A1TFB4HqBwLyVsDTmE9",
  "key26": "4yPu8t2xCGx1AJmkNaweaQJ3tnqXbwbmCLCXeKBA6pn1zPRSagTLsjrNikzcFtZ9QSkNmbApUrfDqJwQbbUcFyR2",
  "key27": "U6EQNzyBnxZhYfxUPKNLEhFvsBmgFXraWDZAzrQHSTt17HReLsveyoJWgCaT3WTqVBTuwuQi5MmTgX32evMTbyV",
  "key28": "49TN6CgKDtN7pYi7cmMJUoSdhUqcv8GhXKhWHK8mMFrD1qEvCedbiAsZdBwPPjXqegE2qcouxVGXCa62o7g5cdWn",
  "key29": "2EGbPWCHtYLwpC3FVHHP8azBY5cY7GQRtvY7tK5ndLUwoKkfYvw25eeVVmdetHjcPToWAPVZEaCQMHejLPRTTDi6",
  "key30": "3eHzamC3RNhKuxRWgw9DnrD73JjihouZ4D5xnWKR9Uw4TB7bgofRXX4cNtzfx63S79vcirE2jqaXyUVuj7GUis2J",
  "key31": "eQCoXjJ11XerY7VU7ChK9FWZphGJoqxTauKi5VeyHgA9iHZ65hWG5zwg3poV8kBrzfz1xWUMwQG8eQA4SCYxc5k",
  "key32": "2D3xqSVEnw2QD9pGG1gUbzSYLas3urUx8Dev2f8L5ENnhZ91S4JUbfzh7ALHF61cBh3Hy9Xs5ZNa8F9i41djj8rt",
  "key33": "5dHsfeq3A3Dd8WfTPKTeAFxHrTLAkSwJdusiS99HQpYkw8AVyLDXy76sedYsHm4m78X5Ai4E2jnG6be7dBEkS3TV",
  "key34": "5wWTcduuQ5TwgHbYynoo3EXsDEF3S7Y2nuXDQpDH9p4TuZ8LVczXWRyU1xgY3yzCJ7Xr2kxQNX5itksvYxxjwBms",
  "key35": "fEzB6zTCujVm3p6E7d4T4CEYH8K43z9xsuoVDt3SMk6SM2d6kyRvhebDzwkj38VKRLKFPNnfFRZmqvCS5wvrKqw",
  "key36": "3yhh8i7QKVpnH7RevsuKSWAiJcv9GJVxkURx8DgojqWAKvK47e9p3igSt2ti3ZEg7GbUhQqc6bF86yt3zAVRerJQ",
  "key37": "2GdGVjcrJ6RcXBzGH4mjQdbGp4ksyQZKqQE3qzt4KmmWMstDjf1bqdGbm26Aj2zkYJpNespPdW4PE4iKTSES8UXR",
  "key38": "2kkqexEAR1vK47RGPd1Bn24xq8isTgcPdg44CmEq7ncc8DwEkT9F9oScXaaso693GFTTEwd1qcefat2Q2ZsjwjA"
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
