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
    "6L8MFnu4QGj3kMTpH1M4mfGPQXKmKAAFb3Y4EH9CsA9c1mYhi2gZUwZPXfBw1wLSKEUu6rMbjPDqibHDaN5uBZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7pVYwokkg7ufcstZbdrcnpXTsShKgHkhRRxmz7qPRJNd5mP5DC2716ivPYGvcvb4B3Jw8SptYiu3VrqJTPxKns",
  "key1": "61UxpLRpgQCCU14VnPCzT2nLKcsUFnKp7xiLcZmSTZkESTyLJwqjVrSaDWsLtx4wCn997naAgA4mvGuAxVLywpN5",
  "key2": "4CU1ibvQZMZdm8eGmh2dTXTBaeEKWwCnwHBSJmBydPiL5AiPDdsizRw8nUetpfnrEuubAe3x6JPzMQUcfCocjyMF",
  "key3": "wdewA55WFdRTQFBdJtMiveiiFkt9HBYfLRFZ9wGLce7ZJNavWkJg58gHMpEYNu2AvmPAzy1rRpyat19BCgHRakS",
  "key4": "4z1vxSQiBi9kDz8rXuUeMBnzLQyZFkpX9yQG8ac3oej4gc5VovUMEsHuWxd2ucQRtHbfejxoEM5ocXkbKkFLRbVb",
  "key5": "3Ry5A6uX55mf3MNcUpXh8THzXn1dZvcbpEQTMV7TCrSxER8mb2kFaRjwxS1a8WxzHVVnqRFB99uApHqnoEP5aRKH",
  "key6": "va9o4x1eY2rVmBVeCixaSscv6nZbruQPPsXQtPXTyXP5pHCaGyGbiNtRhPvWAd2KgfFdeie8jztoxpD1Smbo1Aw",
  "key7": "uqjcj4t5j2EBH25xARyZsaCodREzmnh26sTGh94DLHPBh73kW4UUKXpt35T25F22j32BTFJX6piGeKQ2LqCCHCF",
  "key8": "99nn3MP9iLwMjPp4oUNHnSyYKhFMT91Z6NcioYCG5CU7QJyk1fDsJFmebGq87LjVXbA13ccAM6NVxjEKFMJqa8h",
  "key9": "4ZABgredspuj3QxdSzH4SbMhLaiVbUpSo4woYvuVmSrYL9fw89MAbFMpnc5bx7ewDN7xcpFR9oen95bBssv7BJgf",
  "key10": "4DELYTnNDobeDsM223nrom3tuGBqAsGaHEAZn6VPGrhnjZaEEtAnPNLiAbru1ynu5ugK53u4Ytw3LL7F57tU5CQB",
  "key11": "3ztivxXwgkuEAnpMVpF1JVdEciJ9aG95u27WAubXAxdeQnY4ubWw8bmcHzA84v5bxEVtKwzRfR9rE5dBoRnZNbFR",
  "key12": "Kti19qfGV4cdgviMXUEFrcw2jJE3Pc2xDZfff6kgcL9fga3rVCSuuUv5dCM8hwGWbM1wfVcfYtES8q5sSPf8rad",
  "key13": "5Ho3eR4sGJFDHbwi8rvwhBHyYUDcSLkSZ2kVaCN4nGscaSBDKzYt5yRSnV5jPhX9rs9THHdAeYcmghTsX4ybAuDn",
  "key14": "2gaqv5ewco3tUwRXvhxUZYEhx8NpX5yNBs1YcDUWzGqS8aBhikTJfVKEda9PduqwE6qK5jYmsL8zsLFHoo3tLiiW",
  "key15": "sU9VdzFZtYN1ZbgR5BE8zUwYLwNiB9SpjiutSXwS6F6mYzhfftFud5k78BZ6aHbV6nUSUuw35syRU5Zoiysy2q3",
  "key16": "tsgFzKaCcQTksDLtbBhK1A48mUpEoGRB36JV5Sjnq9uqsJWjLyQSgvoZq175fBvRRragvaaZ391NnvVxpiipWVz",
  "key17": "4BA79vWmYKec5A8fTfyFoFXoecizgDuPLzGXbnUR1XEHseBH8SyDg8AMbjrkQSCUruuUoAuUSrzXs9Nsijxfoopp",
  "key18": "3Ldek1dAhLdxdpGrC36uGMmEWRzWjogLgvaMA2ddjnhwEdy2Hyj8Wx5rguqZqWpSUztKFNMoacgdNuwosR3nJ6iK",
  "key19": "5Rom5Y3hJcdH3YZc9foKg2nKA3FcLmr4SUjZkjVLRCkKsEGynm2yhy3EUw9Ztjw6Tu9NahhsEnTEHHSTKwAKb9MZ",
  "key20": "2SMa4uWCLRFpCasKfGhX4AkM6Nu68fiP2AWAbPiTaxF15dyZXNaz6yj9Pz7czEUJGxDr7p193VzpQ9L41Wnt2FU4",
  "key21": "2e9BgwxkepxJWxyqAhBiSj5w477gtervB4Ys6agfdjrXJy2jpaGirksiP6QdGwLVBVFwAt9iTKuinq3ehYvVRZbv",
  "key22": "49dSPKe2vso9K5uoH1WtKGH5w8Woio1XE2GygLTfvFYdLFVhY4VG5edjXjptdPxJHSGr6Kvd5tAMMmmK5TkTtJwo",
  "key23": "46azrC7t6pLKCRjC1YcgTXMvWC3aQppevPaWxScuSipnGcNi1eRWRNjhHgxknU85zD8VN5T9chVUemq863Fov7w7",
  "key24": "5MDQh87tnaHexwXZFFFCJbmZSn1sWNh2b3G6VswEnTUsYDp7m3evb1fVW8BzLwVuzFXzR8LQM3xVNgeAcapxqVeJ",
  "key25": "5mRNAQQRT6VyCXXRvt8RLgbNGsX9esMmENB4PoE8x2Dc4XR9caJe9ajKYNzT9mAcy7GdEbrbaGq48vqvZfSdqVMm",
  "key26": "5Rf6xh5MbvpXN4hPLR2Byc4UMTthkEzxnSUyptwmkCLquEzyzXpEm63hLNbCFB9FTCMiDtB2yxvtb6FmUXuzfK14",
  "key27": "2kaVfACMrHLEL1dq3euXZjv441xMcfkGZmSmaQCaGJHhdAgfVyn982qt3p9i4XR2WMEXcBuXmb2L4Jgvb9NG1fQb",
  "key28": "46XpqgTXRLvCTL8eRD93fpG8Up8vnMT6s4k6ywYTCgNML662gz8BiMcdQhEMuf9vLD4ZrxezEqicz4G6fUzysFwi",
  "key29": "2iqs3A2UnmTerhDjUayzTYcwmbTLYNtWWTnqoWNcHYSmkphKG6m5hP1vKCw8D2r8iGHWWZsSiWAdYnD4Sogr3Vnk",
  "key30": "MikhdzTM55H6fLdwaxkA1a8AUW7tj9LRZqDuKpj7Ch9UgBWvow1mvf71b69knSbgxZxPkcTFEvaQVsghtxFLx7J",
  "key31": "TeNsAxWQz5VBKZvs3rhrsYVwSVyu14kXzzj4ycSfwLmQBSjUD1qQW6RhcnoF3MFYvygwdBnJbqxYLFk4nv219R2",
  "key32": "4pQuv8vYZBDoR9bTu9KgKmx7M6bC7kpv7tAsjvP8URbS7g1WuAakbTjUgQbgK65D1AGbMbz5kQ1WNVW9o916iA8o",
  "key33": "5m7LcQHBz3iWtybtfGwQFhA8aN5C1k3N6mN8hyNe6w1myQARjTZaTtZxqZNyh6HLEVARKdTYavG9PrVvj4RaZKBs",
  "key34": "3hT57fjvfRnzVLh4hve8YmEABJiU6HYFgkbxtsNPJ3KZrbtKRtXYRSV6AzaQv2BCoLzrzAzFEZNukPkdbmmPZZji",
  "key35": "2pF6o4mZ61QiZuDpxes3xj8bMNfpjwMecauuizr3HgYLrCiMt5sAqGhHq3zU1cikdTW75GHfMBj7QFLoHYTN1rgz",
  "key36": "4VVHgWRMAKM2C8cxPzuE3AQe1q8CUoZdyrLh3VgpnHQqa8bvfXUFnb2bJwhfgDEMsApwAWhHnknPxZLXtEJDRQab",
  "key37": "4HzEzARoJtUjUGnWD3PbCt9UufL6CQwiSyfdRZRPJTkSZRA5soZ7s7NZ9KyZEm5g3UzcTf8JLQ7iE9svE2iK5Mcn"
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
