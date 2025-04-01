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
    "5hNW7fUhAVyVqfhymQ976K7jmWc1M7SFafS8bybvjzx1ZMHiGqZsfUiCU6yNDVtcTGKSGSSCr9csWNJn6R3DvDB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tE5mpb2KX9wmuy4sJtniwQgnjDvwtpAG1bbnJWsjfxz2S9FTaK68iTbZed3V3ayZ8TiSirDzjnDJaVj2M59yFAi",
  "key1": "3rp3sUmAFyy2bXjEj1kLTfMZRzYcjVWchu1JKMDHivEZjQicrkd8goZLJ19VNuUx11LHSfynnxsL5tYm8rZ9NRft",
  "key2": "5nUhPBDxKQ7XsDacVFZZPnBbVNCpJWf8nR7ogNJzH3Z61ip6sDpobuYgD6KPQwLuYPBm5BTWhPJXwdEJFF122CBn",
  "key3": "3YJzgDmVh2vjPbrdDBUEt3DrHiU2LoPpV512RyPv8wamwv35RsnX5tpy68HCGwrxApVwjPcNPLdxTLSKGc9xh6ro",
  "key4": "4gJ93mjLPwwyRUTbHFJ9M6s1FxDb8QXYMHyji8vkwDNFgCJNze533T6LioqdDibhftWz193RtMZhH7cz6hV9peZ7",
  "key5": "Bu9irx4Lu2885CLppcb6XvbzX1YYSCJGFTmitBrogjjpUT41mjAmma9T9eBKET1hCdq9ZcNK9KqQJwP4zcGvL6p",
  "key6": "5PQ6q5YJRPkZGxT95MgC6AbK5feHV1RHxQKCJu5EmN1k85vhcaQDeTV4zSxX2kCYVsi7awVrquDT6waW2MA3ikTH",
  "key7": "3L13qZGeRsrFmGJ1gx87yogLpqJHhnLmp6RdCyHGYgE5oJ7ojGByMjmHgwrEAN4ihZQfEpjAN6bN2xaU9F93iGUe",
  "key8": "AGkqGpB2d1u9aFxHj4LvjLH6CHUGH8PV9juEo5729KngxLZaqcaJsq3fuHDvpwx3KbcyUgmdVQoQmWk9JCLCE5s",
  "key9": "3Wbi8dp2ru1VgSLkTG6g5J4zJpA9Cqb1QtLycKe59jhGShqxJ7qZFoCUi8NdLXESrdLR7PrKvwe58LTcGDP99ndx",
  "key10": "5vL3yydaGBT9BknwCvdyx7YbZjqqjiFDDJ5vcn1HKA9y3K4rcBA7qD2Kc9tF8qB7oafnTAvTd1iSuB9Sphn5Txe8",
  "key11": "Pcm8uWi2u9QVrGzuGLkjSdmnYMJwXsqZkvApyeJfbocBy6M96HptBXdP74k2MMS87aWWGz8CTY3V845yfT3DA8t",
  "key12": "3CGhmwuQ3C9WLbed6DnnXjscxDiPMH21cXMYx5VyPuLgrGeAXxma7kFVamBXip7xcMXKejCDRaSMsdjAH2eUbbNy",
  "key13": "48PootRkpwvqcBpSGinmtjwFwzTWg7W8WUdAyzE2CuC6KWFKNLYTV1763qKN3vezGvb5eaP7zyqjwRWotUeQPULh",
  "key14": "2i85VUFWbLu8KE81syEpiU2wtrxFMYYJY4jhwX6HxCS9Rs8ixWnYDxrcBUJLVRcSXehEZPprxpGRxRo9W9syDihJ",
  "key15": "5CY5bJKhbjCVy9ZzswCfcCaZfyzdTMLVL3D4ESrgUJZNsPRvNv7Y4Q31hn5WzxwNvDv3EJYTBenzgypMoreFRPpZ",
  "key16": "3rNURzMyzywBVbDeVbMMe51utDwdKYAUJJYZMrwrKDFHtgH7Vykqac7PTSWWzw2fHr6ihiuKAHiovp7xN3TnaBRC",
  "key17": "3JTgmWmwi9Aabi3U3EF6h2mmwjG3gHtdab3GdJzkf4E6vT4y9yNQSM35tLFWrYzesrMe6tXd694qw68UjPUmvn1T",
  "key18": "2BZtRBfudgXyo5rNXWEtnQXw399kMuQG9u1w2r9bxuvSF9bdjVmQGzucCK3BXLVKWutSD1DzR4VkicvUAvcbKLb4",
  "key19": "3RYnaZCqCqb885AtURx7UQLPZR5ZmNEKqxpKn4Kpzty9bdoCPAucn6bjc328p3JfnhNU9wJNVcDTKefviaGv5YeD",
  "key20": "3CMQThTzrFNZXPb8zQ2Nk8kcN1naWWKySmEY6W67WnuBWG5m6PXumq9MM7WdGcMg4agW9CfT9WF9Nicyt1cZ3A7X",
  "key21": "3u3X1GbLq3K6griXxCZjtFu8EXkW3t9f7Z9vfZtfc8R5QehR8z2DXBB13EwGmuYW1iPaEVkjSwjDrLCuisuawLTn",
  "key22": "2M6vPQzwovCSD9VAcszywyGDuyhebHbmDwDSECoNiwWWL37u5F7wBrYPiepuPGne7sWCwfiGjddh56yhGnBHgSNv",
  "key23": "62yEHxrh6NmE9ceqYxiufdGpNXbwNm66pmtAqz52Atsx5r7PYtCEQh2YsgPu44JNXoGNKHL4zAVPLcDnhZXWLdi4",
  "key24": "4rxVMqGjxk3B9nNS2vXpHK5s92BcT7uUtFgpVVF2tK7RMo1E6qK4YV2KmHvPFRbchPGn8zVXof6kA1gmYehTS67v",
  "key25": "653RPxpPn4L8SEhR4agbYmqkbsXQXvsfxsVtnC8Uqt1Zke8bs6wgQM5W5yMWFqp5q6vW9Np6yAaCQtXyKc8tiFFS",
  "key26": "5T99GoHBUVk2QPkuP38bCoqE8X4rNJEjUD92xx6D9cSbXYwW69Gnem4dUhFLyWo1bpEPXtYftm3KkcxoQMeDtvdf",
  "key27": "2mSonv8RFPqaeyGXs7361ZVfxAFntGarfvf82ShvVFSCqjZP38oqUX77WzPxjsM5TwbpWReuPT9G2yVxqKq7yE5m",
  "key28": "49LtnWwqaT2FLPLW7JHoCSqYnzgxXSN8dYRvLdteW86NBTnPodTWHqJVMw3kGxkLyyohGLEXJZjctHvCZ8TsdB6o",
  "key29": "56AyDrQWjhYB6oK5j2RmAqvGDa1gzk1J66Qu9jnPgd9oigBRKtK2bmGsczJR4kiHYx5dKdR47MKQ3xHxjZShvNzg",
  "key30": "2P5gcKhTXxhmuf3DtfWjsSx1gd98t7NsWry81tgKy35vs2AEQD1fk4BBKqNHkzoNLKTRxxSFWojqj4tsxp4efDUR",
  "key31": "4gLwNcZCqqx1iqP21823pF6cKp8edbSVuGpvoq4dnkrkWM1vVEcg5jSfEUWBwL4qhhAE1wtfX4kRyFSmehp81Lve",
  "key32": "2KMCKrr6BYwpquG3M5RSJCMn5mxq81LRTMgMhQieZabrpKymxnfVdYq62W3KcX6MCbwLQnnZYQ6Aa9Jz3PzbrXRJ",
  "key33": "3mzRwV8JcgMj9couQUkoKxkH14rncA2A9Mw2CnLZzwXNjMeUhK2E6KhdgJ2FfpVNV1AHUzMkgGBrLrgitNLAUkMa",
  "key34": "21qbhZrNtDdfEb5spPxGucXkTzpWCaL82pPNxsRX7zbWZA34AnGAV2GDBJqNCjYkQ4tzPv3mKJv6gPEQkXR4UaT3"
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
