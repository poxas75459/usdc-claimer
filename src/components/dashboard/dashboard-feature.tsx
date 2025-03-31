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
    "63TsGcLLoe4eJuRxGnuKzYKsQwyjmWHzbcFPvCxvjV8poJc7f8J5uVK4pq41kopRsuqsFYNcnTGTGBWdYLfg8diV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6cgH4J8nxjEoy8nNdqKXFcjd8SJVLtqXcYM7qrhnJ1Lj4yoquMDacNkAXBprkmak5GP821WSz4sHEBCoanHchn",
  "key1": "3ZWABb8KM4SpAwKcNeigMe3qhZHCyeFDAYxVmfmJF84wR6kyQ68uDEErjD8o6adUCUmcikBVs2Yz2QA47frUvhsX",
  "key2": "2uvk1bebMsSsc3zeVmZ6AWBL4iF2jGgb9e84RCvwGR6a6iid2kS1TfVQdNgpmfuujN9VYFgSg4Ezaiu9d3L6DhEX",
  "key3": "668mPGBJGQhy4DEvYDFvK9Ca6RT3NM3nRbg9Y4SkBn43koYPJMSPzgum7SvRMoKXaMM9Wb6b5Xj69ihdoVdgZGjM",
  "key4": "PVgwAfZpST6BLKefWCvYtvyvcPENnhq9hpcHw47mfpSPDMrCWgk3WaEm4q9o4APRAX3q7gKqZX15tBAT76Qex4Q",
  "key5": "5Jz18Rbkp8a3uhfwpawhajhQD8vEMucft92SgkZriRTT4UEUuQs6eRbWeBdTCusvxDKmsDhfUGzZvrbZQEJHWmRj",
  "key6": "2hKW59xFSXXwhvsgXjmwpEGfBvzvUzFTEHtQ71sDCYuY3sbETy4yv1jjcw68YxSTRzWphaRG4cbQ1JH32RLimaa4",
  "key7": "2aQEHRtfZn3UspsM1tNayLDwemvHRWCYm8PV3X3aeqVEchPvDFiNTh9iJ3FtqMfPDKnyYZCGapCZSkf79omnJt3p",
  "key8": "5SvjSeuWDq2hD88ZKA1FGLHHW2mcEsTFKcPPvQAUkeuMPJXSisxz7DqySmTGtoor2o1hR9aQFG3CwMEhMEdXHJbd",
  "key9": "57c6UVPyqqNJzKD6abt8hgX6FNALJJHY3auinx7HRN18T1cuLabEmVcjDj8JcdKXkkN5UVGuN3A1zCagHEHratar",
  "key10": "3VoCDTUizEYpeRpmXNnu9cC2TCuRLx9AF27GxoKAqKvGgzhaAFRrSma36VKGUg4RqygSNmYgowXddEGMxfEjhHrx",
  "key11": "212ApA6xE4A3Z2anX6M53ojhBBTYkCNYDsgAHvJxBDbXNupbCJzEhqrhB6CqFjJHhu8EXHqHrup3M56Ee6iUYG7Y",
  "key12": "4LPzF6wiGzpm2JBzybWjv7BTLxo4ghEveRQNS4HxKDWVUswWdPfrb83dYoZX2zLAt3Cp7iX6k614i3dDjzKHgjEn",
  "key13": "4iZLuMGHD7sqKeDL9i2z5UiKgk5gUcFLMRMRwfiVtaCwUoaT68fL5UkUzTwXPpWkDhEkgb2CPQTYu7B9Au8bosnE",
  "key14": "4UKiPvpaGQFeSiSWNEcxvj9KLognGYatXPEaDraQmA5Mh3zaHHHz6dct55oeuY1BJdCGAnB5SAF73c5FRePAXwUU",
  "key15": "uq1x7VnuxvBxGgGkp6ejd2zZLJvToA9cgaWhWBD4S9CozMtEypWaKUrK7ZFHpaKG1brJBEtiLPvVbau9Rj4VdAc",
  "key16": "5QT2aYzZFFPUWa2BPY8Hu2W7g4tgff15SN4hkhQzWLYorVYB836vHRcPLatNm9VCt84cSchoRDnDZ9vytBVNbBWi",
  "key17": "3S9WPxX6Vxm5vD5vudMB2BoMwV7mt6rxMK12DDdc459gq5rHfzAQW2LpMPYVukW1JbZKpn1EjZjr58uorqLYtk1v",
  "key18": "62NB396k32m3DPxy4BM4g8s6NKv4o7LLwHQBSDt9KLJ5WR2iYSgvCx92eEPrWaFDr24tm9oFicoxsT1jERKzuFAN",
  "key19": "5w4Ftg1d48na8CySkphSKVH775s2x6RNJsUX8jDSf82PP16LHQpFS2b6mdpGX3FTcp573tpguWnC36Emw1LrLff5",
  "key20": "38ijmXZbUte6vn2h6Shf3AB5fCDEQfxLQmsVKyEnoyYAY1ZHxKU8GE7HgaagdABn15KCkrdnMMcFbtUkcfojc4Np",
  "key21": "3ovDFsV3odAKkEFpFMcXgBezK7mk1tkLtpDv8GtNonBLYp87qkWQVPXFYnTs5d4PFh7fYq2ESQRXfP9KT6MLRv72",
  "key22": "3MPoEAZxkkJvmegviwPnFENfwLRaLu4azeWUNfRGnuf4LbVrbduW9wELqorCtmXtZinzpVBhdeqT68L62xhxKK4K",
  "key23": "5VxFqHojU8E9nvqKPZs56PtABST4fX7iZ87iJ82bFwNYuHcsbjT7G5rjNX7ZbqGY6VeAbn6ryNonsStqxJqkTbfH",
  "key24": "5W52Hy31UwbhKcnm1nJHmWBCQ7nNVaaEhtsEz8LPKnqYDgbQwcyjkznTbz75cgY5Dhqs6afHoUe3LvTiuovPUfd",
  "key25": "2fBuovJAuGXkxdrcim1tdA9fpwuwvUTfb5sASTaHLNFZtqhCgJxop5F9m1koXxvTwRBtjkYRiNsYzWKJfn6WJWG7",
  "key26": "pqdbtPvygstNscrVMFQm1DQiwGEtWAanVSuVX5p4L8rf9Bt7RFS7rfvegbw9jGBYZ7kSVj3gvPYF4VvuseXGPZo",
  "key27": "4md2iy8gD6bFkQUzH6LH3JYgqPhcb5QBt5EKGEPjf3ybyXCBdNk35dya3LckoBk9j4HX82yb5zMtEwkvGhatiPiM",
  "key28": "2kLJRXA21738fqH9BSXGmGjo7TrQkUFmYL4FSKBd6CJRNz8qKJZtj8HyixREqJT67U7qB4P4iJpDxnWJQvyzAkXe",
  "key29": "5RnqoTfc1mWT8gfh9EVrxtYPY3Jz1y7MqdHf4gXc7g4sw3uNSWHWub8Zvs84BHLscRNLZrVrBsVeWcvN31A1b1o8",
  "key30": "2GtHLacoLX5FdehnYo81GHe6xHYWC5CAbD4SGZ4VmC7iLvUtrB2QMtLRoQHnBxaDrAgLSPc4KPGbzVGuhRf1Yepx",
  "key31": "29GstWnaiZEpNXp2giZBQg6V871WszSgVDYRMnjCkooFas63j3Hyfg2Q4bxbRCs76xMRSpGvE2ER35dsMyzCercu"
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
