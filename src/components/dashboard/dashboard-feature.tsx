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
    "sww9ZZe18iP2VQhNahnLX22n2g9Ry5aLGt36E1QUtvaMW38qXP3hPC12Z7J7qMtUajsHDw4DBJS7ciHSa6y1At4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FfwU1Q1RRUVnbURyLYjw9vs9EdfiZLDNBBqU7GSfzHdnBYR9p8XFTdca5beGWNAi6sPnWcHa87Jj5Rm7hcG9zaM",
  "key1": "4wBLCqeP6iJwrpySZccrHgaLNi8QxHr7mCt2GJNRwph3YEvpp5wKLxCr73G3J7vgxqg2M8WSWea3BgCWCqFn4W18",
  "key2": "jiU2ohrbkEnytGtbyBTkp23XbpqTJdpcFmE4vnbMN1fRHDJWPTnwFhWgj16t7c8c4fE2xfy3gWPhWi6Tg5kr36X",
  "key3": "2wGcvGCXsqtEEiFxU7C5QGhbQMtMgwVdDJyDue11iB3uyskTherLcdP7ZCfHBoAFAoiWes8iX7DbGRzvztBSoABg",
  "key4": "5b2LmVj6Mv7R8xiSqm5sisRevfuQMwReS88goHfJGKduQC9puJQssTbNmvdFaQN1vhwv8etkBeihC1Ve3dDKJsUE",
  "key5": "2MBZSxys3neq7N82RgqJwk7dQxVUpBv3N2ijiCxww5M3K5QGrYfaVoSfjyzHsn7pnqC1nFE2TytWkR8BpbryVVd1",
  "key6": "3Yh48aiLbkGnMWmSaNy4sWAdtxYDVGgMjNNFfRKZpVCrHpNNFK9vhrCtoJJcmiMd4gwRoZTShYwMwiPdLp8wSsBx",
  "key7": "2EFKFfgkJBQhWef8RmwrsTujcvssfozEansxwsVVpFwFY5c9YfLGZa7q1anQPmfHVRYPbyr3NVcLkdprzJwLEEfy",
  "key8": "eg3aXnzWXj3Rz8LSyViFQKTFvPzSkXc7YySvULoNRCtZuDxPryh6VCCffXK4LVSoU76ncSJ5YQjdZjYFNgEwwGe",
  "key9": "YL26pABBsgVNHvTE9zaXgLVi8GahukpTs3rDroSeCSEccSvse5Xg412GFbHCNC9wGtTsw7GAruBwbDHTVwJkXPV",
  "key10": "PqXxNM2sBSPd2M6XFv5ien4LSKQrwgh2aZ7zviVdLqEigxydLujnW2UFvKd31gtCyiiLLCuCuqKEZMzuJWAASc7",
  "key11": "2gSw31aYmhUs7hnkCMi4cuaPzpaaB1ByVqpQKJDtQHnYU4KzAFi3ngQYxUXGRxuZcnVuwRqht7LEBeFS1CH6AJJ",
  "key12": "4dVZ8AsEQDAxWNogo4341ysyZXBvPsBwGBS5z9M1gRtfhQ5aswYd2FMDLbmbMQdernFrAgw1odQvtKfEQhYsjF1E",
  "key13": "55cQRDL1u2FWDcdhmC76dv1DLgTcrFjWZHgiTVC5KN5zuFWfuspfkQgKye5n1GtG4hcF8Jfmm1g7v9wswoJ2wsw4",
  "key14": "5qxV7tn7BoCAvpCbkEyeEVrvsWgRF8cY9ypNsnNYEkEKnvQesmFFmaF9xy5jiPSJLqZtdPxW8mwun3dKPHLAUatj",
  "key15": "nAQrLjNxrYxmu5W43tCv8xFDYLpiRBULRzDxhGjVxTYU5xrRsUW3uNPk2dZGLyR29VWVgU3S9dyjQXQ9EGpk5dt",
  "key16": "4ZWmHb9ewPDsVdAXpiKfyeVK6G8WA5DHZVp2k4UVLxQcRxWsV6q675Pwq4bsHm6CWu3SEocahStUFMHv287LTN1g",
  "key17": "311wiouEM6wHKhcXDN7NsUdhXLsjid24QXhfzRWfgj5ckrjxE8vZ6pqh1tTC75CdwCAt7SfGeijxbxxaWc4H7dKX",
  "key18": "XJU1ngXPEQtk4beMAaNMMfgs7Y1SmPDQYxibf9czpC5mQAnBUeKeo7LtmCUqhCcMQg2gdFAUvJhnaze8AUxwyHN",
  "key19": "4bmJRJvh6AJAtVhc3TMZkVfWJJNV9Dy4hFokhYELZEfVTz5uwpPtQC9Vqew3XiqkirXH5Smh3B9v78r8BGWUHxuP",
  "key20": "2j1K7133RbzspxL3mWPDHgsk6azmSF51a5ymEe8kGyzEnvDwp1byr9f2btCSXFAEfJpr2KNQrXqqGJCYbZcYV3xR",
  "key21": "3Ga3nPCNLTBVxZD1SkKScGnyUuccf7Z19dzotq52e8bF78c1hxCzcui9qHsLsn4uJspYxMvzFENWicGw1yvPvC2i",
  "key22": "2q9WWTVhgpoRQJuxZXiQ5xCCHtr4HDvEUbskCtmepW7pJhkFJeQxPtESHiLhvBzo7xYogZdFq3Ga7pvxNZXc5hpw",
  "key23": "5TY4hdZXvP5gjr27R3BmrMvQ4FmgUURzqrM1FtGxW2sq5YCYTeSFpyY9unTMbAEB3UxbrkmyKv1cnuzC5VWUnuDJ",
  "key24": "31zCeYXbJer3hx1jtw4Y83LvYTCuhSLHGXKwYucDiM9zGBY7EghrD7epVSJQcfBPkwQh7QJfoVGL9wbEBkgpd8Ms",
  "key25": "nmYCk4KLmniirQ2s6ARACS4butvPzgzYiDrkNY8qph45fjyQpS3DHkHiiMmkvPTHSKv7RwBWyjwc4fXGgHyMcGU",
  "key26": "3n9pr9NCnavoH1hMPi3v7kEKB2WjZ2U1dSdQ9hkaijRd1USKhqWy2iqLwFcREa89X13ZLw8TsbqWvUTFDijfCsQK",
  "key27": "2bTduZFuiPy6vM6oRQN3uBHio5Qm5AjC7rLB542NL5H1Ght8vbucBapDFY49fdGd2BNiagJxbaEzPQUpygNiiiS7",
  "key28": "j7coLNSTTrpS1R2XkxXsngx7umND5717XR9Uu3XRGoSuySdScvakibEniz6k2Z8aSnZr83J8JX5b3GJt8akFrTk",
  "key29": "3ijLeLzE9bnB61ihMVsg2CWZ5VPyncqGzVhKdYBMuoTPec4i3Cv1UiaqZC9K7PmHsXCicuxjrdcm3QinkcPQ39nR",
  "key30": "kP3yJUt2P8Q1xdaFQJze3bA7GJe5zeuKS3BnDFuafbzKs5BxoEYxjsTaeBxnBpWgXK2rtZKDAruDpkmuwJpmUtS",
  "key31": "5bJCHLHgqm2wRafQrCUrMnwMCr5i8MhmEjYhnZ3deWXrLRe7PdUK6U3R2tEC3PWkHqKGrYXTT8KimpCQHgNM8RHs",
  "key32": "4vokxHmHVpWyYrVEbmC1vV2ijdM2PNWQ1jTUwhwZF2qJ9TRSYe4XP43jJkjpm8tTecrG19kH4vQJ6YFgX1aiuLVv",
  "key33": "2RA3XTuqdBKYt6ZEvDsw4RytCex7uEaeTwaaL3qxmenwPCKFbiRvZ17yJmHqgwYZPDmUX9HVXm2CjrgnYamyN6kX"
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
