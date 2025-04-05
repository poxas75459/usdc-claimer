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
    "3XNsELdGDrRJ5jga5tb7MmvbRkYpDs45Zj1RVN6jkKm3ZrSk6PP6eHXz6d8SFEp4ycgykmmqtgQn5irqmzvFAgJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34DajEkGgMymGeDXjoKqAuTvKsAj5duu5d3YHyW9Vivw7mrP5XDhkJqgfcdRzWH5hbwnVrCJCrfxLnGg3rMdhCbw",
  "key1": "3SXBhF5sN5Nfq8U6bQzRpRPZXPNMyzRVantnmD6HtzU93Bnj3DVqDirJNKGQbjNbrnpZrR296qA4N44RA97nkemb",
  "key2": "5J7ji9qwdBSW5JpZiXXFhSrjoeebLAKCwg9GeeW89w5w6s2AaLAGMZRC9bsdh9KBNzTMmghgqUo2zHhLoREQWdZB",
  "key3": "4z9JzQnXr8KJbby2ksmy75Fm3L25AUte3Us15unGWBpi16sJh1ysMHafhLibjbW5wuVgohNbQWU1k5sZKy2S49d3",
  "key4": "32zvNJ9dtu3YpdDThP5peCKLKyz2itTUA1wtWX5dXUpRnpknjEcTxRSrtRGnoNuy8xFDHGHTsqGcCR33UtVDf4G8",
  "key5": "5RiopPiBbWFdDDJYRe3PcT4AresE5JJbuE5wPR3dsj17wRphCwK2BhvJfjJAWg9HF6tfEm3oJMLGzDNxEnXv1LFu",
  "key6": "4QdxoW3Dctzf4imXtrMjm6oaaxcV2duBWcbaQ7QUq7UmgERL3MTPqdZWrqYUdgKGbHfMMVFWWnyGnHxwWVP4y3dj",
  "key7": "3qK41QZaWG3RCyGJ67gFfcYvjSCkS5TxRaXxYPefKdtn7Mdbi42an8xwfBTA7Cbj7nonTEdRtZk4Rqk1caqWV1Wv",
  "key8": "nCkUKz4vGiLpqtq5yEPseXGU4bBxwFx1TPenMnHfNjgLxzYvn976KYwSHK1GzseqZRarLGu37D4HAJGtwL88pZe",
  "key9": "2m7uQgFQ4STnewajfhsqyqTzGwv2Swvq3tEHUFXzfFnuhFWVadjiku8weNbEq1Cg3kiFLn89xVsHsdvNjxLQjY9z",
  "key10": "5NASWBozHoz2qXbSsyARaUp5bRribTysvaumf2GR9nWyc5cZbHvDWNCbNs3PudAhB7gGvhjhmnTc4m6Nu359xNEs",
  "key11": "3UqtT2ZYv9G33ZZAhRvfsxJJrQ3mcaHiQaKz25ZWDjw7xbEfVWQUiDfTSzci2MH8x4QvNm1iB3CFpSaemDzbwywS",
  "key12": "2ejDmJ5WQvcth3DrUAQETKE48aBJEc6qxmyBbmyLNoLGN5EKXh7PXi1GBCusbsnseEX9fwwBLFkZ7Qp9nx4PUvo1",
  "key13": "joxwsfNLrLtEsi9XB5d9KZg92ur6MdQgfEmbDJCQnnZGdFsPWhzNihEbQa8LeaAppDoFFNH1FhH4jjaMh1H4Rcg",
  "key14": "3BunytpMwHmHq7Cd7buU4XDwSEuScz6ZSXkZMtC3jSx2eBkkuG2B6NkDLHp3Ln6Ax7f9VZxYa6QoaqyFkMSB4NK4",
  "key15": "24pijCQcydt89jH9Mc9Ai1VuTp26VFBERAsXjmXujgnNnB9H1cbVjhMx6C7xpCKKd4fFmnHUYCAsBsj8eh8MP998",
  "key16": "2bLhokawkcGvrqsQDUUoo66k2conpDCSuaqfuSfV7NtM5dwYo8R4aCyTyMW1JTE6gHSAC4Z4q4Duj3fjThrhWJvz",
  "key17": "5mjTvhZkcwUWSjA3D5ncX3D1tza7v1hEo7a7kyA1sRnrfJrE2UUm9gSGWd924ezwjm8V3AdPqrVxm486LZBJYRGr",
  "key18": "3ricmsy22D1caybBSEATQLYUwUxZQdXYXKNU29mumwYXa723ULXo6JrrQa8fsTS8Zsd3fvqvaHhTK3dt674sTPSS",
  "key19": "3Ta7BU4BbT9ESA5bYxNTqg4BigpCajnm4YWmXLRR8N2J9tJSZhVSe6ih2qZJgdNB5UfqREJ4gNWrz4n1B5CGXZBo",
  "key20": "5WKF1kSxQZEGksYdmE7FpLEh19kxC6pSc35DsX2fP2dUVbrsXn56cNYAgHmJ1XGjUj4QY7jNJwwKL61ox4VVDHcD",
  "key21": "5GhvUzMhFWKFy9ZxoQjFaoiEE81Qy7PWSctev5D2zofy1Qw66QAEKPdmrAbKGS4Yyz8XrTqc1zugUhBP8JHASbRT",
  "key22": "4y3FXFhqN5dHouih5WTRaJYJueFTAvn6gJhYDY6NHKMAp9BccNh48zLZDBMCrjoE5qvMxfiiSHvvgFgqn34LvzB1",
  "key23": "442jc6doEQRfjg5MCRwCiD6nJu7c9T6KmFZLRgYdzeNfGrLEwRffvuHSBz4aFVgSJUoxQVVMnxzNDJ6gtkEbbvgN",
  "key24": "2Zjq73LDDn8oVThinvx723BxSvuDwTpktao1iYGgxLsWVYJwa83ETRTGbai9LBDrpiNPucQxX5iSuTHnw9hKeqYk",
  "key25": "DHxSs5gxPfRuicqrB9r15HDqw4GuXE6P3rrUVGPGSgcLDC6sZYyP9EttV7bTyvDWZNEpXQDnZGVx5WzgJjnSw6i",
  "key26": "4QizJwaydMtLrebVMQ839m9wbhXKqNK5SSKhT1f8HBzDDS8bJg38WG2y2Vfc1TXp3VGNUfhxapbxdcxYzZhj1EpL",
  "key27": "qbWN1uqZXN1iwAzaXWGh7gW67J9Adow3kvbpmViSr13ij8ewYyHQDzLSf1MoDEz4Qdeo9G3sg1xT3fCLQMg9UKh",
  "key28": "5nPvgMhiMUFiMp4uT8mLjPKzVhZvHPd97NnDv4pwCpwzUNVXLb7nyi9A5YmRMYRswG69xQgJUir8B4zHePy6eqmT",
  "key29": "4nNx99qCaLm7mc8yZMLUyfi9ZQLfkVt19X7jxz7JDHyVawSLsZ2xEHVVFAvGzgep9aWUu3BrFX1gWsDtgdHpeXoD",
  "key30": "2NRrw7C9huYz68vzBsYPc5LXhEPxvepxHzENzh1penNxgNBfKCKUDGHURGxPmpAJ1frXmg3KzZEYdF2iPoR5qY9p",
  "key31": "2qR16JqYHNgxFggqtEic1wgHq9gaf1SXjrZQjBURgiHpsgtoLEngnTHscd3XVBn8Bw3E8hDseK9ZbU5F7Mh2QvUw",
  "key32": "4iipZZYLCdaE5S38pfoNCKMELZsSzymeWNRVkoewUrRjAwJtehwkCfK7LKraB2VND393H7sSUGYPergvb2oWYyYZ",
  "key33": "GmLitjyhhP3QgKLmM4WTGX714CT3CgSo7p89USmU9KGNiETzXr5uaTRQag2HVgBHkhtUVbpUUZae5XRKLxfSCSs"
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
