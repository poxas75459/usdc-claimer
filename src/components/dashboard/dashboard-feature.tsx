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
    "34hfKcpUBVNQi124vryw6rYrNnzaRbe9STqT8jMNsqko1799U1QBrNHC4qjL1YqxwxLZKCgAsj7QPtmiYEtugvkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLq5pnx43U4BbZ5jee3SrCbhiNZCq2Q7nwTxo2pq4bv4LD7n6R24isQ2MVdcf2Tm7TmTLiVTmu9zGK9Ko1J8iBZ",
  "key1": "21YC5vBkkvG7dWjseVZYYhnNq2ko8X7XZjSXZZDhsqp5aMYAroBcZLHhxqigcabB3kB5kYbQgqSR5Yj96oASpCnr",
  "key2": "5xjw34Xg9kgKw8g8N9J2KDPgGYUMabvWzdksLx1Wy3oGnwhAQqN6efvRTQXzCNGg3ELsgLdzf1uDVx1yyxr2KkKK",
  "key3": "2UkyaKtYAKgbJywCMnFb7G6KZsBpgAxvw8qFyKkR8WwrDuRB2DmziwxmZCy3H5eyne5QLu5sjtC35dPznnFgMTs7",
  "key4": "27xZ2EPJZ6vCGQPNCaTKf5mnYKaKi6v2RbxcoezL8udxVhAkUWQNbjA4to2yKVYs95WPnkikbb2gmpiDUF1c7iWk",
  "key5": "2pS5TXDyPz47Pzqu6Uog42NRszjWL3Mk3BxmRuryhectTTFoZWXKtx5DXpHQvrkyi6VHp44EAKopbyHuu8jXHs7U",
  "key6": "4XDz2MqHKhGGT1ecEmzHXkH2pi7jon7D7MfNsWzpY7eA2rGVWgD2M7sJxu8ygwc4BPsgoDLtR2Ep59YL6PPkxStt",
  "key7": "3PXL4deDEMrxtoaJuqUuMt4qq8nHEbSVXkoSfMus3zPq4K7wpSMB42tKhby7WhRdoG7fnMzUnNsrpJ54BWqeA1rH",
  "key8": "PYREvY93udihjYUnVTi5Kh4ExxfQvZ4CJrGMNsxZ2isU4jBMV4gPWszkfaG5p8AXFBVQxVvKoChCQ6DzzWE1wkK",
  "key9": "3QZmkf7YKpGGjyxLDABnh75n7ZwpuVQWAnwpyEmRf9MitgWPjAZnchNML1BoHpUMfKW74GR7xRFmsQ1ZUsMzSy8a",
  "key10": "55wgCB1meMBskvprcZFej41gVhW6ofx2nKSypk227oAiHYhuvQg4qkyxdorb7pzonWMKHsFUmQRZYUJMydy8QPiq",
  "key11": "6cfyVs58QLPzouozrFjoChCRSi6SQ3s4L4NEkujng2UUnfz6WMV8k9iSGnVnXbGd1QYJAW4TpsjEEM1RoXNor6J",
  "key12": "2L6j692p25JnY723QNwWeDx2tj4ZriBp5rNzTY3ECQiEf2pp2UfTCGh1GC9wWcK19Biz68zr8Vrb8sxX27Ru7ruT",
  "key13": "AzZrfNUWeUE8GQePijvwEyNS5nS3s6MFwNxDQUeNryopBz8vUsndQXCFsB2Gdpxayd2128mEZiQvwUQ91U8cQgN",
  "key14": "26mZg4G718mUJFYQSSRDWL7EDFsq3SnAzagcuDKfes9kA4wtNGmTbrAFi2i3UZskJ4wmwCaBpTyfsy8xrZ8BoMPQ",
  "key15": "2hAPdzScqgNQcEnn3za1dxpws13d3D4xACNSGtpiGVbWz41z2728APDWR7MTDZoZtGGcKkkGHrtUAy9xzyyfd4fM",
  "key16": "2NYVn1M2NuiqL9otQvVq5Q6cY7dp6tYYsiBFm1gFut1fTQnHAJ87aLUsWSN6CA2iiWXjY9oAwugv3e9S7a9gfWAi",
  "key17": "bCriN8CqRT63T2g1fozsTLqTtMdGSHBMTU2Xfutgo9UjAUKLMuH6LTj4v9DWu9T3p6gaFbXi9Mm6GzLDt1UHPgq",
  "key18": "M8WpKWx2GCqpFHicC1T6VmnrukmM3nuZLTdUfJfTdC91msL3NpmAWthoVz1dSWFvMdKWzyWcnCsttvm3Jrgjygn",
  "key19": "5jyHsKj3hnJh25MxKzHJh8k165FPFMxdTkQtJ3x49C9wMg9jSXZN5BEknWFtbLsQt1gFTubJNzMyTTo4P1C13UBK",
  "key20": "3kRQtTR9H5vPV235K8HJ4tevedL2oNLaXEmejUGpeeWys3ARh92Zf6X3b5gJcRL6JFwpsGhRsxH6fu8HbcoFStJd",
  "key21": "5aAvvK28NDTzn2mq35qTcD6QSFud53VxJULp375fm3YQKvuia8vETBbKjxGLLfw5RfLojKT2kmLUAdTfKcQnZJHg",
  "key22": "4D7mALdK83rX8tqNPWfhkwo7AdeRCPKVmghK5suNAjtx1Z6fh6acg42TZ2FKDkjH8ntBDFMvneQstDass1gCPzCw",
  "key23": "4gdShcXoFvzHTKBxBnksHdGACz6uEGDqTCJyzVegxoWKsGaVrj1taJgXJ56d84ApHn1vK1aWGYFjK11ZyE2ADjqa",
  "key24": "22G1wvBykeZDE1mYcrQwYUocBwAdkWnddST4r4dmU2a5puw4cWedmXHch8mR9QEX21zpJJKD9CaobmL4ouAsjpdi",
  "key25": "4JzkQMuXiv8yWKLe9tyDrLnQcFzh1AqAG8NF7SWZbickMSGeMsawjYW5H3FzQpfahoPzv2gwWPyGiBpWvLRpyJKJ",
  "key26": "VuoFdHWCnqReUuFJDfYCKXkQqZnzFDBvPZGFGdK6jZCoq51gWfMqBitnXgHLVDVqcdomG2idmuprRSJzRf8ahfa",
  "key27": "3tmcuMbyFRCqwa67AfzJdmv3VswkjV8k8zYUvXXfuzaUf4bLys2cnosKg6Nj34mFbX6y1wfVd9cdznWZRVn1p2rp",
  "key28": "GwTqNKYKueEtB7K5PxsfNjJe9KrgrothoNZv9gugV5Yi8DMPS2RSxA4ZBCnWBdcEhKnweSiG38jYmdJVra1n3FU",
  "key29": "4mk1dK7LtVQybsqQD8hSsSHFLdsQMAqXiCJWCxKfpjZJWiGY9kxJwoYypVmMhWVBBLWdfHsuRScb2XJXx7ky8bFY",
  "key30": "4Zt4aai6JNdniWneUu87wE1HD7Pg8MytTZHwSvXeXdocHbsURjnUQtSuVdCGXqTiWQLT9YM7pdpVh3KEibrctWSw",
  "key31": "3TSPKHsBBXjBgu31tS12EKQJApQjT9G8YXv4tfpU7VvuXbsfUrRFX5iRpt4xrHYMesbAu4A6hapsvxt7mtWMfX5L"
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
