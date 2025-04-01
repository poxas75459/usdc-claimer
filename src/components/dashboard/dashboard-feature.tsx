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
    "4ipxQnA5Hr7EEkPDPFZkghckYBnjXgHa1xAU11qyH1TRJAgsVotqpYRn2VS4XczMyw6QrdHVcrLh1n98diQhUXsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2id7bWchKrhim6AKn9upWCPU91QDDurca773raWWHBN8ufJWsZAk3HFs91zyY9XDDc1DGzaF9KuxxUf8iJdGP7Pr",
  "key1": "2PXgxL9SBRXiWJCRXBGHyfwsZZKNaGraupvv7PqmoNRoECTLp7wyBNHh1fTL8hoUrzUrD9m2FdedKXaguxUZMgiM",
  "key2": "4XvtnqEj8E4yn9DEjMJgD2GAn94tgg8h4AFeatSoUSLcqfcKEsnnhUMVtnEqzGoopikD5fhnhGp5L4nCk2pxkf7B",
  "key3": "2AyA21jqj7zLXpnzZVpnNoUnQt51CSgcupHwN7HQVafiPGjhAA71tMyZxSAjWKo1e7j19AFqPY9MraFLZksCpuH7",
  "key4": "4QpQ5giu6R94hH1eSdDox61hnXNgPgxPWxxjFsFPCVgGxo5aQUGbXqepVhXD5tQRzEm3EQRZotsT5JTRrL1bqK5F",
  "key5": "5pZusdJm8ff4mQqFsjLSaFqrKfGJ8EfJKSrEidJgnxRQPNnyrEfbj9dLjQJ9SUs2LQo2zq8wGTtHTW85rZKTaSs4",
  "key6": "2X6MCTCSPgQWNV56fUPPsnaqg4RqX7L8NEdyt2fWXUXu8nYMHVbqQVP5pSgPvR1MPvX8DHhhqioe5Aid2wiAiJLX",
  "key7": "65EBbvGR1aTb7cGtWciqQyQrgCyp1HZdLc3TsaJeZTuFdUsK9kA5WDxR8svZvcUPfjgnt8rb2g8pe2SQeEEJ7wEE",
  "key8": "ouhUjiCv7a6En1i46jo9V9MAhMZT5MPcgK6whTvXFxN4LBjLF6vfQn23MoLQf7KkKbTQ7T5FJceKxEfwjRN1gWN",
  "key9": "3MJ5uKj2ZLYyRuMwwYWcy4Ps6KVpVKEcwC3j1AfAPrEMzKgJftLULMrYF8CRqPFfjtZPBaHr77AQ3mAjD7xZ6rUJ",
  "key10": "4Wkpfzkbnz17BFo8W9xg19vNRUTiZqmeLhQyECnJa8SSJaWy9JUfRiCVBZ4TAf33gqyvRh2gGpiLyWSdeVTxhyqh",
  "key11": "2v4wj9xb5B5mYMaGnDtWC9BRxpTivKCzmXW18BW2Y3MMefogg9E4hiYP1c4LKCRP35cXQvdq2qZX5PEghZxxnMUd",
  "key12": "59PTsGqJzeD8F87D1aMXZ9F33RPpXoWBTCLKEY2BLQouS6DBgwc9bUAtxHhv3x6wx7PFQ34W9GfCNMSKf6p7fitr",
  "key13": "okjhn65yXEfzupJyhjdmZTpeA9kso1yeVFXtTqrq1N6Qa2xC6VUQHQh3Yvt6pvQ6miUHvtuqNLwYQrNdPyEGyLP",
  "key14": "qpVAigfJbmAoRygTzw9gQHjfVGTRAdUzUdvG5mgDKJzwvT35BksPLcRQNFeL2ftyv7qWBo6fRGAMbjKcLFb3n3R",
  "key15": "2W6hLNBr5aNuu53CswfS4rDSiDbVca4hntuoLfyjiGcRNsZPyW67LZMivJ975Ph4q78fbjviYRS68vwfLjeP3zvH",
  "key16": "2aaWzq5LCJKPuRPY4RCL5K5QhqCjQcBuw96jVhchokjz3pqPdkWh65sMjy41FP3S5irDEdMiorpQxMkGcyAwXDN3",
  "key17": "uPdCboEavZDLnmNW3863b1iY4PD9kUYkCF8SWmdUuRRoy1w9mHgGGrvRgidsSzWx2hSJmkbKS3pwXzc4ZkQaSPJ",
  "key18": "61LAyLemmYph763bLYNvXLaVRH2WqHenEifvaFbeAi9v5Z6kLVJQt5WC6J2WMSL8z8z6ub2HRSHfQy1gT6D42UZR",
  "key19": "3yCgDAXubtBmM7tLiwj1XdqVwZhdSZCwd4s5YCgA4MWGNL9SYZVJimm8vY4ZfqcsTdXXumwhZSzkC3pfYh2vVUYj",
  "key20": "5wQ6VyMFss52VNZPA69YpFwKrsAFg8ZbT3pWoBLpntgDiR1NqBqN74VoP6DQxVJjowGvo9BxV2qkopeMxviMKG24",
  "key21": "5W3Cy8qauw8gDLKAGaimadKoRSa1WdcmjW7Z383kuVoh4yJX1NXyPUDaV4stHWCW9GHnS8d44ZvKsxXD9yN6diey",
  "key22": "2V3r44RGhsBuvyXNYuev2UF7kWj5cNNBZceKVBBRBm4xEXnZqDqAqVb5LfTzqhRDgeHCxZyZpcW4dvjgJYuddo9h",
  "key23": "2maTmbGhAimEJbGwQsCE37o1t5ekhv71YhVrNZum2SyC1w3fjxk2xRanSyNq7CT9rfyjHETFjrk9sk6YHpJJKTei",
  "key24": "5L6iiq5ouACxdkDznB3ZCbDC3Dktq9u5q92mrgbsZddratvdcdycSGopFTVXnjQj4kywP7GjiBKodD7SLhGbHQGS",
  "key25": "5kTh2SqFgYf3UWoShZ3VhyQvaN7k5vs1uMepsn6P1mutRuQVgqobxt4Q12W7jbFZSZuqDqooHTH48UuX2Q1LxeHs",
  "key26": "vWzDVmncxqUMMQWjEoG4fu3kSCphb2vVHZNBmqaZKdKgqdQ9Nep7XGF8t8FRGMNzoNXhMa47v9tpekoS6TfaxU5",
  "key27": "XJsM6Ny6pASyv48ZtegQswH7q7ZgdKfTGJhk4EirPSBWXgG7FpZQmDTGgwhHAagkhwZESKykhzw5c3QGrqAfe7v",
  "key28": "2WG93kjD9asx4kfxcyM7yBzgYqVz41MyRsVteUN4RmiS71hqRnTsDT4bEkfyymVEJ4JvS37ejLFUr99ZWE1BusDH",
  "key29": "4GTCTsmPMVHJpLEkCPEfGrFeiR8Yv1VqyiZr5HfGPMkxwCChMBevjZfBqH5FiaQZ1HcjJwJeDC5r4KiuFKcim4Eo",
  "key30": "5ZaUiANACzAzpyKxBLztmUu6qSsnrBf4EVgUvy9bNYys3HGkBS5YtZZxbkeJjDHMt68zYBBUsmRqeCbrD1X9zb51",
  "key31": "4KfLiiB26kDYmj4o3UWnB28tJFEZdzfEaes77vxK7FNezcNJvhWL2KdsLxfbv2LpAFmduaFCj6vMCUH4twdRa5QM",
  "key32": "4m5PsadUuBpzRUfaDnMaKdRBhT8B9HLJK7DCGdNTHbZvBSLN7MXdupBGd9fPKgqaiMT6dYtniHenZM74U3S6Qw9n",
  "key33": "4SgCEs4Rw56b44jcQUGhtmronayNR2CyZP82BE66Kmpseo9diEKcb2oywWTHu6Ke3KER45KnRFmFNtrsTMe4kPqB",
  "key34": "5ngdffF48Cbw3QMZViP4zp5yL4PnJeBru5jGGAYWA84bWYgbharxs7SPLG39ovKqZAKsEQ2G2uu656GEDPC11bjm",
  "key35": "241JC1N6Mdpqbrw71M7gqCJDqzqYJMEnQF9pdDRocPChnYo8MQ3AyxXqUqMxdgZb6xzKKM1hRYRJVj4SKHS7Xwc9",
  "key36": "5LXp8wamSuaB8evDSw9yDnhWuYQT73uCrptWVtAaizBan5TTFFRDWJxvQ3Kp6pQ8eP6N6bfgZ34sTkEghb1hCQTT",
  "key37": "5nf1fegJrTSwEqDy5B3F4bKqcKMp3GwfFUAkWMQf5dgyWjcovz4hT63NLCq35gL4uEiNyrCfozRUawgY1xjm6KW3",
  "key38": "QBjgHxvqG8UgyCmk63V9vgTQvsMHpoyXBxPqYyRigFFrkw4wqeyG3V1PATHhGt5JFBrf2xrHZHsxEaT7QmF4kXu",
  "key39": "2nr23BSHULHEnMkMWzhNKiXgVmTPxuaLwNSj9dPvEPVP3QzHvWB9rFsWTWxYHpyY3H4ppbjV9aGLFP5pghj7bWEA",
  "key40": "2D3KTtkJzPd4FppzVTD6BgAd1i7taRBdS265YZj8g7x4qLaDLQ3Whpogb34XrzBC5nzibr4H6EGjbJcyg9G1ZKAN"
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
