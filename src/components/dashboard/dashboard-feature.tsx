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
    "5eDHDFgxZ8aR94KtwCjKfKufh1NkeqLfT6WW1TrCX7KB4gkZe6pSEpi9yPfZyXBy92nhzbkQhWDsQTtC6Ptf798y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXUMVym6RbGoWVxABTKrdcxC5A3mxNo1Dgg2PyBuCT6kSfST5zc2TwGSL1hJrNBpreaXEJvXzenBaHZkDAkc13c",
  "key1": "2dZBvxAHavTVRWKfEYJBTxfDsjKGLoCDeRo1jNFzcwNHUWwEk8MZ2XKbDQWczQdG8B4WCAHDZedTWaJLpZatQuXw",
  "key2": "5N1BZJeEfJM5jKgKHUE2ApNqQKEtqZADJDjYHncmMUDYE5rW4MLehU5EHyxgrAq9LY7j2EGiYG9Ydu2tdxHN3LJj",
  "key3": "35PD6BqrkUPUZPV63igAJggvb5t7E9dRDDMHaRoPyhAhRkg16983EHTD6jTKVDwXfL91g4GrajwvSR6QUzTNayJS",
  "key4": "2C2h5pE493GXAWYuQNRqXy8cYcpbRMWyuTXca8KKCBb7YaJDfiJDN9BeEdtYpKL1s3QPL47Vve6iXfiZ1i5t759T",
  "key5": "5mmBCX7hAxyS66aPEi3tKcBYWMSSi8iHymWf11NG5PnSsoKje8TEdy8Bw2dFip14xUTbUXHc2Nz2mMq3NUuBxKHD",
  "key6": "tW7xKiMR5miHBFiB4QDNL4HtzmFbJi4kvHsThJ4TBRrTJcPGpJtZC5s8agM4mxgRN1kDyS9x4XkDvNx9bwfYvS5",
  "key7": "3WQZ1VWTmmH1aSV1NYwXD3SLYLs3uN1HipapSMnLEo8DWtys6RNSNt4bD7kvKaJG6LPyccBvNfVEhnf8CWD1EQFZ",
  "key8": "3cCmNnJXuu6NiQ2fUo5sbaiNCuNussMdKBscuaSFy29NNSugvgBQ1NvEDTt7M2ikxF2rJK4hqyNuRyXYZRr73zMB",
  "key9": "7rmuSbjZV5ANnETzagFFuH3zfXamYCmLnZxbQ5ftXKHrs7aeEGUxPm7Aotx9iYv3oHQS5EpBEbpX1PL27T6iXBj",
  "key10": "2uhDZDoVxfwRsyGkCoropZ5PvbtYvQ7VupDWTsAC9J283SSVKrqg1hGuyGnbxQYyMqYiMdmC6xkZy3dR2uQCx2PG",
  "key11": "3spMnp6v5wExgEgUPVq9U9LokRka3RAYjmxQnUkHQTDWLbVRAHWZRL6Wakx881FwRfDY3bsJV94KnUNKp5KnLyX9",
  "key12": "5hhUckpTcmgzeY6VDW3HwhZjyafxZHmWsaiT3yBJgUFAJkWeWUaRJBdd5He4fxC1UFGWn4jmmSZJ4ceVRMLorMcD",
  "key13": "5UKppT3XtmnB81VuyrZokrMRaMh7ExcAkR29fbpyWTqb6DeNNreVWEePGWwcaVdxRSg8kqY94C4TyRjjCQDHTKH2",
  "key14": "3QxDqYLoUfpwuxxQDKSpixohqDjJVNQWnvcYUA5bujM73dDMV34hD3uZXpicro2XXsp2yaE8kGfr6ZqYj7685YKR",
  "key15": "4bRsAhRp7tKjYb45YP1HkJ9e2YWX2bd5xSpTrwk1wX6ATz3x2bW8YFzYmcLGh2nqvxo7AerAUSfMg7NYtpXAu5tx",
  "key16": "2WrKPDQEaV3u1U28r9QG2mx1W2SL6DGkdiLoRCWYsCcAy7n4fWfXrzkry7xECacvWrf5KEMeCAvVf1WgYUumBMdb",
  "key17": "2b47hZJojP79ofBh4z7C6qVxYUCruFwyZxjifD1td4qFvTDAX6X6Ek5NEZG9iQvuZBS8Ah5336GojwtBgyXjwHn9",
  "key18": "3WJRXEiM8QjxBPnZZDy9qKm91SngeKg8Syrx1AbHxyU4FLP1HUZ6KAzuqXuMZ29iPVxm4KCiyqFCfzxj3V3ZmYov",
  "key19": "4T1JmkTTEkiPtzxGhBVECkm1DbcQkvrEUj7XBLUYXKLQ52kJHaoKTNdhLVHosAXxmJLVJcrSXJMxGC2bHFH4jU3U",
  "key20": "5dStY7vyrhrUE6wsrsUwGraxTVdJbMRMirR1wgv1cTTXWjN2YWKGbhptNyck121yufabVixmrTL1r3uCqfwAk7MU",
  "key21": "4ZCuZtngxEYnZZxxG32Ho1ehcAfoUUf1rJuRqJJt5gn9afx4b55Bon2vCGhxmXmBhoiDL6XKDioXofKMBpQP4uXK",
  "key22": "rwsoXbnRjbTbx7fW1UmGzTrJGa6JN4g9P2ZgcaK2DCACA1VCSGu7TetecEpXvss43odmwgqT2C6fDHbTY9b6vzb",
  "key23": "2FVUEWR53pcvEjyqDKHTeqocGiejLc1QtW5ec2hx8ept9DXVtymVy6ym4rDHCTKd4WWY85NxcisgmeGCgpHDqpvv",
  "key24": "5KWjLD3LqguGEihtbcQNZPeB5EsDXVKanwyvpVJkWEy9unjDSMfdxupZAaV7KzxtGzF4eWiDVMmcJvVkmssyYM6j",
  "key25": "BAfsFRNJKSBUodq4aVA3gLVh8q1JFfrDE1QYRmPyatFS9fvPhK5y7unQbdnAyRbVMqVZGE2dYCSrxEdtjANG3aq",
  "key26": "3FAPwCLcckj5kQo4nP9haSPpqnguRupUaEoxtGpP4sFqumS2qhqEoromyhPbsMQ3LDPVwsbKVuC6gyrGRfYrS9x8",
  "key27": "5v6trF3Dq6haRQJbcYxbowLZSSWYbXpuMBnkFcnaM2j8kMR8PcznbpNDouQncXSfKNWDmNg4uHJ9hTrNmTsC6Wqz",
  "key28": "4wXmp2U68hUyCZoDqbYJdenvAnKpvQFcEnik3APjrMBEx5abzahShPvg5QDW1saDk8k2Dbi6wurepivbeaY7xqSv",
  "key29": "36HAvwPmWrBTaktPBC5pqKJ1JcXcuQ7ePVJkSdYXPB6xzF2UuPxpsxDqBrNk4Q3Joeqnn317CNMp9UmsEbtucyYg",
  "key30": "22FiQhKmU98fqn8H9x4W73DfqUrBZCugqVmTchnevJ2nqvWfvgfc48vJd7zC1V3wc7oC1qEeJVNDGEzUDU5LwUHV",
  "key31": "2FEUZBmd1i3ubqt5WAw4NFkvVDG6UpbXi4dk311NfZZ74ehg4YMe5iKfYzNA1pNwQZjPY3Vw42jTdRUSyT3T7ReW",
  "key32": "613GuRC2Kd4CWgwZhfkcSN5oxWaSKJxd2ACig4aXHoCG5TXYTF7FXvm9jFwwHvudaPNVvQabJ9r41n1Dci88nRA9",
  "key33": "USwwRv1g3uSNkd4R9khuFPunw5vEH9ei5xayYd4XTwqdYQQHGwHGDrkhWiSM5bwRTM3iPVChmoRNxaK54JgqKhb",
  "key34": "eAXAxqvEbyTUqHNyJEbW2kioFU2zkAxcvMbpGG573Fu8QNhza3KBdHpuPsumUNSNvuJt6XfmGLjtucBUu4dS5NU",
  "key35": "2P7qtBRWRmJBApzLtBP9ZidA3AtYiJCvKvgwPJuYKYaszBh6m4HM7Rwbq73ERFNZo7FbSQPcAfhxn5P42figR4EW",
  "key36": "2xrATUMUtBtJCjjSHXjKBLeDXLEKFe3jKmrzUfFyvCxngxv9DTwTdoskvbGChLiwHWpdoZpTNPvG7hz6T29YEmHh",
  "key37": "3nnAZqWmfusZENTYPSFzo9NXnqUNBcjmofLcXJWeeyGMnt9dcJwX19x8tYchA4ZSByFSCdgPo9Z5NEEcmEnL5VRr",
  "key38": "QYH94sLLdN52VMo73f16rYAiaD5Nrbo6iLpqkQFgGy4QXswo3rvGwXBhYwES17MrBybNhsAqdM9iW8M5pTytBuM",
  "key39": "5GcHxqDJQnSS3fPAnC9Utqo1ssGdBWav1fKrNKSS7R7z3Lf1dsvcjvKpDbNWCxgoWdV4WBo2ohQNBuiDpf18uG2W"
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
