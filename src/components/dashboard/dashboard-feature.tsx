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
    "2sgdvqshP9bTY7hN9tathZWhUzqcgYJDr2iQwydEA5w8ubmy46eEMjdypvtL76Jo8xPBcmJ2ZxKf4Sz91WqzVTMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdTmMCiheDzRDjVTQ5mZKLQvmFQ8LyuZxNqnHc6RECvNmsnGXXKxpmRXJ21CAhVbiBvh3adx5PdQcHoAwYeqTHr",
  "key1": "28Du3juwWiJ2mm6EYP1o6viTFy5URvoD6vbFNTfC5qLDgpVUizjXgfXEQQSmVFA2voUCJrtvZoxPQ8feERBHmkHW",
  "key2": "4H4ErfnHFq1oeE6YLi95TBHbY2BzmvTSKVcHdJRkD9UL5jyB869FEMcFfjsiZdNmfRTfMu4gcRmT8BgWjZTa9hhn",
  "key3": "3Ba5zFendZ62RYUrdmC7WFMBLgZ1fFLopqxiMEzh16mzCyfjpnVPZJ8qn1FcmqdCkY7cjEvbkxy6HyB7xXFQ36Nc",
  "key4": "RgzASruAaiGRNUVaaZov6MUuc1hVhqtNVjQNoKfcM5ZniZ76SSsBRBaj9AoDtw6FbQAduNpAvZphQWie2HKqMD9",
  "key5": "5E7th42AN2Q7edEfnGUK3tzvMx2yYYLkgdHmjpN4ekphew8tag71sju2RQc5qXRBfqsg3yh3gnR8qz1Na4XEA7fS",
  "key6": "2cF79cSMaBXT1xcZ687fZYxRnb1xjB9C1uKS5gRLUVRrQB2c7qDZuJ9YR4fk66gwTSUUtTEa2NizqXPuB3Q24fcs",
  "key7": "5YcHbktGstvDNRps2WXZKnHUHxoibFA6NgSe7CEJpTKD21zbEs9D1zFZWHKiMo4iKuasoNeqHBzv3X5Qc4qcYzDv",
  "key8": "5uViu7VLC4pbMLq7QcQnazKw9KJugQEKTenN4wXMKdYoR1ygmrDaP8C6RpxcMFyX8ad1rrXpUeBJgHUTPKocQZUd",
  "key9": "41VfKFPYKQu7amKATCETYX4u55iKFS9ApdRsPZn1eMkASumbfsJqTKPpqTLk9HdW7qvCW73gBVCkG3Zmpft7A7DG",
  "key10": "5Rt4C9LhgFQTtTaPkBvJDDNnviZrP95Tz2fyCY9pa52F7n65534C7EeMCN4drWQ5PoMMarMB9RJdqyaJPksuVTRr",
  "key11": "44P3B5zaqgSf4Tcm9n8V1b4EuxSTDQMpLwe2ziXJQYWDKwEoUbracBvhmpPucYTfJAkGrD5cQm2TAVdRdPiDXugd",
  "key12": "2aTnhwSzqPjBcXcDdzVsTDseXXKZBdyrHqh7siH4kVznRyag3VHCTwTNQSgJvLLKrAhYieriWmowGBEihtQySJxp",
  "key13": "3ND5UZQQnqFqx1i62Suo8ynEZVerDERrKTH7U6oZ13TzkQepdoHevGUcD4c1mPLntcEb5beHmq4gRNAqEecizc51",
  "key14": "2eA3iXqqWe4SnnY3q21stUAEXh57KXSCaQR2p9bPBVNGork56eyvV3FkrBcP8h1pwY1NsVjX1Q86KZ2DwwwfWqu6",
  "key15": "vqhVVar5d9PB6nHJrKmjZT7hn7VUnHgYQPZF9bmWDrGXzL3cWwq7xdSAM2CH9pRT5ueUZhAaJXxFqHdN5tN7p1x",
  "key16": "yBAUNvY8SN6ikzpbxLtVk2WujyE2RDa6dRnpZ2fFz2GNjPBxjNtmd12vpawP5d8nW8br1MYAj1WTZBe3cRadNLa",
  "key17": "yVf1xA75sSyQp59uBidzBtLKJ3Btt6bJiFS9Jnn9cY4QBSg6159JfB6o8ak2cPQecjcx9rCWqNgCmf7ns152ies",
  "key18": "3zT4RhLUBbRrd67ukHgQJ4JL1JxxQ1o5z8JSMAz7c4uuNqXr8mdJmsq7urJcKKtMLYWvi8FfkobM75UPaD5Mxihf",
  "key19": "5zJiUaCg6c7PVmW66LcbsReiLznaQbfdQs3auhbme8wkoL6fMq6CBDK7m83f4Hg5Ev11QkWZ29cN4nBvzgg5aA2V",
  "key20": "3KPcmyN7w7N6YiZmrGbT1EXGHcLaYH7LJBxsuHWobwaooDFRX8x2KmCiE8njDc5N7mGarmAavAYxe6E98uwrBUFW",
  "key21": "zddejRhK6wo96ndwargdXYsHHL4gZTjiZyjEJuhPL36HNb3iiKQRkujSQ8eQeFRWTyNtUHcTBjBcoSs5aLgKtge",
  "key22": "5i8C3HWpifEpc9SgCKRwhRP3hU4U6DrNVpgt2r8ko3zthpr6HXBdsaCfSwbpkpyLZ2KS422Jz129XSyKFKk7A4Jh",
  "key23": "5cwznMaryG52gmrEkAVtsCybgbjxTLMjfvrtaaFVcWVSVTAcqrKLzY5iTw8DzNTBbd3bLFsGr6J36wGxM3rcZigR",
  "key24": "2s7psnrwcuaNPVGpwjZ4nGJzX1DgHXCfKSQJCnZLZEcpqJ3PhoCNbLwGhzecR4iL9hCMaShekSyVFJBQBiMrufnG"
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
