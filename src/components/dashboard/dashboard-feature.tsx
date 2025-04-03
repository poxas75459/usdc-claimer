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
    "5CnXnTnB1AMLnoF5yta6VFykUBziEspMA64rHwzXHfMCiMQCF89KzFbJ7c1oCA5eRSc5P9FFmQ4HxrZ3Tu2jp6XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KuyNwzYjjB9uVRuxb8qoBjbWh988V8foNuUKdLUU6sZ6dRSX7K2ABtsHvwrE5fMGoYx1jwvp4eYX6joENsgweSA",
  "key1": "dA5Z92LSXxN9iq3k35qcXyZjqRA5rVx61emZJmC7sDMHz5wuagf3sZKRoNiG5wiqzxwbZje7Jhxe2VzbP6hfyLS",
  "key2": "22AeTow8vHu1b613mifHJ71crDSuyDkuJR74YHHg9PvdeDGHoGinPZcKdLMbmAmUiUy5ZuoESVcRyxP9XjNha9HH",
  "key3": "385mzqZbCzg7B1sh2CRvdrQWvxe2tLj3g2wU9jMUbi29DpzsAaPYYM5rVvSt373G8veEVyYrqmDtuLAtvprBWFip",
  "key4": "3gsT26Q9cXavU3k2VmjjSwfbA8sf2hcevKQ9NZvy9Z19a3uVev6pXMuxYJrspkAuwqBh2ZGUcBDXPuuvLU4Ao4Q6",
  "key5": "4dx2W2rE8qVoQHMCo5HXcwc4ytktcDA3kNBQz5h7kx78URiCWc7Z4ogeMHmBbvQ5xyTDoVFLC95WvJqn6CoKFWFd",
  "key6": "GjFrSPNTYJSngGxszDPQTM9Caqp4xnwcDAp4fb29BzH1VZP3KvGak5ReWRUNJ9kNoHUreCNbXQZXPYE2VCYHigh",
  "key7": "2XbZKJDCJSzWhV8N4v559PUmW8ND6w5gzFjT1V1hDpR8Rk1vrkiZqBiVWWvXjuiEcUANC82o9QmcBSRanfhRu91G",
  "key8": "59iytNuVnY7yBBwuPS39d75KCoxPbg6dPVoudvhpMwmcCLLUHWaai4uoUF43TyYM81T1LbJxJRWkCKrg2h5Luve9",
  "key9": "Vz3UWHwxoGUepmpzqgbiXa8Aqs9TL2wQXNsPAhAkS7dfdRLGvLCM8UDq9RtqitBENDPPEDPaKoUfJ1dTknEqt6x",
  "key10": "31wVfANDh31KLZ6L7GuEE7K4BaDXJhNWYhzgAvs7KQ7NsqNiThX7pps6Vf6prnhv2KqJSAcP6r56m8q61FDA14v4",
  "key11": "2QYzK2FZaa9g8KfDRQZGghVANFNK3XydpqaJnNTZs9Hy6CaZYbiZTEvKeYeQJ6Nicjj6DFRRYCTiUdEdx1MdD2fq",
  "key12": "3vJaEBpVGLWf6iYTjtCzS5g7bjdg1uxczD2Q9gyuvQUoADgmbSSjJ5AvMKuM8R9vssTEp4x4QAHnetcntG1wmFJP",
  "key13": "2QYWBqQck4u6kpy8BoE6vJytSNyrq5BXdc4spj2EAVPswKmHtSoBYWZ6nT7zwC89F4mLbw3Uyf5vmrhjUwLhUxVZ",
  "key14": "3Kk1vqao7dMdEER8gAbcaLD5VVCgjAev6meAaC9SEstoKYdYqzRRKUbPJV3wvvPG1vMTeZWQHhks5m8SbfLYdNwe",
  "key15": "3MiHprkGd5B6fhnPjjYt4EWWU9YwEZDr7eED7Yxho5GFUYhAWrYD2pMsUXJQ86NXrQLraLiFR9BFoGzcCNQwsBVE",
  "key16": "3V3dzVPfpwmYxmN7mRECHYinfAEqHXbqfU9voEYecpDUishc4xXEPvNWxGrKr7GXC8SQW9Y6TCvsahdpCCiW5fe2",
  "key17": "2Vm9VGsQrkx8dSuTbn6BSmw3pRYQggtwsSznEXFi62FZ2EC4qqBaekv7293dvCRJVX3mjXdgjXeEjpiEvFa6DhHz",
  "key18": "5WaGwQ8Lt1C4wAUp956FVDP7ZUGrNuuUUvKw4w6nKJAQPuWGAMxzvdFaBu4R3gEruAPVi87FxFJKw3KUZnpyLWaV",
  "key19": "6zesztpvenAGx7KJhVAfGpmJNDPXqBFFSKX5cj33SRSchGgyAANGwM41r8LvCyda8c1JFCQTiYFtYqXa7hfTL3L",
  "key20": "kUN86AvaHZBRxS6K8xtp3QF6uHUy53DQWxaE9J59xfAQd7TYiGWXTX6NENVUWsS7fWTdBaqx3yNVKTXxz3KoxyE",
  "key21": "4kEmUQvunMrZvRLhwemNUe5ZHZDJ8PKBTXarSEt6QkbrfMFAcgFWczDkEEHV3VcTJg5YxgGoSUQga22HdBhvGQtk",
  "key22": "5ZFNgeA3aSJJrBhZA99ZBWaY24pgd4P21vivKKboBbWWKEKKf6fcWa7Tta6uYLa1nELZ14CrLY37eBQscGwris8n",
  "key23": "ur61Vig1k5hzfZaWNrnk7Hm26qFnh6oCKCoRuqZLLGixfEvUz5BpFQ8im8TT7qoQHT69c7wH7jF3Wt2eXGsXk3q",
  "key24": "NPrQ8vfE3R5k6ftd2eWDr8MK4wb3aipef1ps45SQrDfjGnRmLFwd2tBDgb81szBL92AFN3tCXqycJw3ejtvxqMZ",
  "key25": "3Mp4VSYt6M1HQ2foAMXRbQYAF484DtZVmxqJNkMwAgKFerC4gvFDPpZmSL7ShHyXoeYZ42EVgCc8hL9VwQiRgEW2",
  "key26": "2ajDBY5RyimixchN1YnXoeSLvywYBtCdCk8FG6VkCR8pHtSqq6SnMxY8rFtCjoAdaaH6jqYdNd2LswMvaAE4YG5g",
  "key27": "46DbyT8C1HnMmw44Sq9X568wBwhcthNjHxdkevi2E7XsdeJjPQozeB2bzqCfoQpxw6ZNm79m6SZtCes4AovjfADZ",
  "key28": "2Mt3gS5u86d3s9MZUFhPm2MH5QwzLvBcJWdXxbrWo6sUBgWveP228qhm2VGokffYzLqvv2X4fqAdEvM6yU7xobus",
  "key29": "5GDoQRmpo6p7HmguqfJgH9ZahYkBWq5juarRibMegtasj19okLxtZ65uiY77kWAF5SpEkb6NMdhTYy6kTSjoDMTZ",
  "key30": "4YZtmvxzykU1Xz2jQG1P6bKm6wi5mLfLa6o9QNuUpY5WAroXrJvXou6zqAFYHxz2PuuDZjw4acTZGFV5ofSbavtp",
  "key31": "4aNzoVCMHMSeX6omQ2ZWN8yZ3FZNbDzy3AKETmnK7KQBPsW4SbQqdAbEV52K9BKLzeXkXo87Dmb3mnAifMJcEsaT",
  "key32": "4Vu42QoBcX7ENUJFMm9s8SoCpC8Cw37nhqr9cUTy1NxuiriGJ6EZ155wHkCPtj7yTNm7P64LwLH3WrVjfdassKMV",
  "key33": "37b7dWknvF5bXoHxSjsSzHJ6REaLmT8R5WPevhCSoVYPKT8WmoLNoJyvSWvBEM8QXMd8Z2RpeEUdFzQb5FJyyHTf",
  "key34": "2PPoFeyh2TkHsCMTfjKNCVikWMf7uhx6GGENHDoo48bQvLKWkeLEMaEguMjvpd1PWgmLN6jzbNrBb6g5aj5bDqNJ",
  "key35": "4EkWzbcddPNSWwMFhoL9GpgSBkzCQk9zxzeEmLu1o9NUBeQD7p91hYksjfvFUGmnupTu3WwkhHXohhU8jnYqW9MK"
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
