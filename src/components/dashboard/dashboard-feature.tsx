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
    "Zif32dHhMSZREu7pvYj9XBjQ9dy28BZoB1gXzmwKgmQtsSSYU4GNPGpEkwyDpG9diU2Yz7FZqAEXpU76SeGxEGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55UWmTJBN42QKCH66uM1ArmhaW3s7gemnYBjoFP8r4mFHE6tzqwKgUaWjdkV4JPDJxao9xGXMSaFauA82urjPcsv",
  "key1": "2gUScbvzgo5PmFt9PyCzuLY2SgKBQ7rHypoB2ctKdphe7NkSqYTeVW2ADm7fukT9QGfzTSh9bQ8J5LrYtxi8dQ9f",
  "key2": "pgAscG35vDafTKKVv4kWTtE2dcH4z4yQdmeTfze4h4L3zE954CexHejgWkrz8XYpEzM2J7iSeoc9nvYwXost12s",
  "key3": "3m8ZuSDLdpqfNKnWXgfhB8g4WLpxjEyGdyu9znbotiU4xKBesmBXX2nsfyaGcXNFDT1smWTzDAt1BpUNa8yawmSB",
  "key4": "Kq7Cm3FNPjD2PrJ6VirxcKzLQwntiDRP9yMmNSy5LDL5Sk4aRbN6Tzutq5U3peyAfy1ko7xfq6d1KMcjzE3iHx6",
  "key5": "49yNBmDPoqSi2mMh9sQcFpJLwZ4pe39ULWMvgJH1hDWbqnMMwTMvTEkp6nAR6HuPpnAaSBuZn7aBkQJkUAoUjVht",
  "key6": "5A15EEKYYqbf61uNJvNtZWCUodnZ3aeiVva3TBcW8sn7ViDS3R3D8WACaUJVUryzfgEYZYKU5MdnczR8P6iPXdxs",
  "key7": "Uik6Tv1XEQLfRqVHUbzoewPa3YVZ9RKUPP6MfaMCoc3gq18DEkczUy72QTpuSsD7E19ZyRaeqw37mdt2Tks9cBk",
  "key8": "53F1GT6Y17ChctQxfoG5ZKACGa69wacNiBYK2G1B7pX7SdF1UqPLeePu7rftUEfAgC7xHKu4LCPQYidhSa7F7wqL",
  "key9": "52nM1UeYncgqh9GFiRrkNBqRkzSWLT3zsTrV3gPJ7XJewtmFp7wmmkSfYKkzMVK5ujkxATYKWFAxVG5rqH3T3ZCf",
  "key10": "5e6AG9KoA1QHWXjjtbypBrsxTuQbAXVngSqkC5sEJQvX7vU8isaPbiEzcLg5RvrA7UYNUJV2bDV5cDyr7JDsrTAG",
  "key11": "zyZfBZ7N3bjLgzRKyRScAGot466878J6fZUW8jj3JBvt3HfVDWTVQeHAYYZ4KBP22wxJzV2LmoVH9LeyDPePRfR",
  "key12": "Pfmt9BFsF1yghqSEyecqHQDuaEaPvn66VrpwxK6aftqhsUCZXmAhQo3JE2RoQ685vi8Ps7Y2qbcyJabtbZHQJqW",
  "key13": "5pqdMRdj7XHfWsK7CzHtLgeX56FeP2WnFqobniAFuoWjp2SGAkD5tVtfMnds5BgsGLceHH62pn6oqJtsD7n5E5VA",
  "key14": "5cocLw5Zx1PbMPEMFjo3FgSQG5m7Akr2qVpNtYVVqwWycEeEJxXMBWY3SCFoXNEbxk1XHBsFT3qb8CefrczVtVz4",
  "key15": "5YLRmZNzdFgoKRttKgD12empCyEZXCcJTkbNdQVLrZaR1nJiWiGvbaxE3WxsDwAm47CopjHtZXbDofD64EjTqdwp",
  "key16": "eFTa5Q7ziAxxNERkwHYZerZj3jjpCWupXL2LGPxG5P52C1RttdLX3cJwKBdsbozu7JpBqXaFSkJkj8sAGP2L8ct",
  "key17": "4sH6GqGs6SBSM1jFALkiKrz3DRuyH9X9rz4Ned8qzMYMHZx64vH5nS1tCKiuVnHZbBPvFtNNvtPVfQesMg4GA5z1",
  "key18": "3QvPs4Q4NGLVzrBUswvsZuXQ5LkwLrkBXScXMZ4Y4ifdApB65Lu6gbZboVD5D1RMUCCBRgFox8WGR9dph8okpWyU",
  "key19": "5mUfvoseZXwYtBLjqqMwkHB5AEXCJ2pBkfX1anYXRqHLUeRRoFHAAb46MYzxgKcNuu8hEYhQYquui8PmueqhyAFi",
  "key20": "4wPNPnPnDwzCF8YMnjyZRHVHognMtM4BGMmfK2FL4X34HEehNJ7LQbPdfDAEUd9T5x93YjvzCFbdw8rWMC6NA5bA",
  "key21": "ak3jrWV3MyRTDZ5nnz82Kzae1NTYZKf7ku2Wb4sn4CoCD1uJ3A2uAWReuGXzHw1Erejqp4DNpsF4akY1yoGc4VU",
  "key22": "cC9h5EvMaFq1ac9KZASQgY1qJ9vH8jvzHdrPM1XmMxi3At7U76oXwJ4fVigx9xT2hjN1S2zow4X2YGUhf4D4VVV",
  "key23": "24PLow9pdF1JiFRzfocT17XvRSkBPUxCMRj3jkCJeDTn4xWMNwDGCh7Trh8sLX882vMxixk8s6fnzZTvQATPoRaW",
  "key24": "3zh239tTQnB9pWRinqVncFjDDyzbLvej6jh9BcbHonaaom9VeYoGeLCRR8PmPNzre9NJd4KMgBDNGjGRawHxoPiB",
  "key25": "MQzP6bQvHfAM2zXSFfHv75rQ6SJgnED2JVZeFTLVtddhpfLDAQQwkRnt2PnPqUTUuZHwmFKjrfGkTPhwANnFRy5",
  "key26": "48YSc6VHFNyFaSLMGkhzUKuLvGbUzaiCTF5EQ1F1HQ9hrjXA138EE6w7x5S73oU2sWMkudtdZmXBa9iR2eRwDH16",
  "key27": "2Lk2xPb1SevMehRAZWiFY2Gzhvp3cku2XeFnE7rFDukjaBt4WfGFVFrwMNyaqP3THyNnaDCpEcF5Urjwa1np3UoF",
  "key28": "bEzhGhFvL3YgkGDS5Q91q4CF8iy8wqFgBRAUk9mvo8X5hWN2mrVCcmtmdGvBd7pQYPftnwCHqNDuEbUaAndC2Pz",
  "key29": "46vAGU7Uctm6q9tBkXPRXg7A9uayiGbztLRXWrbY49CBZpKwYkReZtckvEEEa9sajX5GoHHxBTZC1iYHPehDwr8Z",
  "key30": "5gBgMNnnQUF2G1Uuh16JeDRAuRfo5S2gy1n9tJuRcxWq8RvLogNGAY8gdqXg57F3QrGi9QpzUTr7rFSQpyT344qc",
  "key31": "3fpEfEAxRcrnw4Z7CQbdUVvbn3LTy2Yrug4Dp3Y8dXXmzBhVoF2n3DZg4d7BLysgFkAuhKD4Y7r8Fcwa14uNh5WM",
  "key32": "Pp366FoepyihRrNGawK3tAmdH4iHPHvscetsJU8xp1wfL3wRGhihqp1W9gZUL6jMHMAW2L92pAPXXsATkLAPA6T",
  "key33": "Kb3hEg3BHZhpohFvydz7cyzahfcZaZCywPeKmRUySr1126Tz933yE6yzD8DQjdbpb47J2236K1zAXsGd7BHrwFE",
  "key34": "5Z4AJEdzhd7RxGxX5PXSxPh23CwJobCXBYRVV6k7NSsRTW8GSZA8KRfX5oLyD5rXfpK4fQCoBNSv4ahF3UsvmGJb",
  "key35": "3dA9ZdrvUTZnY3Q42GbP1WjM6LA1j1DNB1Qw6QHFzVxfQUrSNjDRZLKMnuPby7QfDhNgYx1RyuV28b25uD6XyHwF",
  "key36": "2pUjyVcGc2gc2Es3CWLBqsS47y5NPnCoQcgKfjzyBovLz6KurxWXAzjQ2SR7PGrM3K4oonpZ7AePfsMpWNhaX2PS",
  "key37": "5FCy276hL7P2zAWNMFY6NfFA9VVddu5iAEdDtCsAL4Te6CpcQ6JUKWuNbUxMhqKtHHjXnJHRXtwhXwNY27jYqAqj",
  "key38": "5cSeYbxXKcKPapyw5hjuvVxdoTjopZSNbvywifqKnmitWgvkjHoaCpDQDDfJ3GAYo7wRbUDzWfjRtdr6ZZw9zsuW",
  "key39": "5mPr6B1QJGiXD1jm9pqpM9J4ae5gU7Y7w8TRrsfpr5zYGP6n1eGV1KASRfTgdtumWf3drWUza4PYLMShavvPk31m",
  "key40": "EJ6uKTX3CmLSDoud3XiTfGE82hKZFnFyveFK3czCE46B8YNgVZcyFjQmcDsThyXrtymzvueTuqNoX6mSNuSngxk",
  "key41": "UMJbzQ1wkkxTyMdkGrs7mbLNFVN3bjMDzZnfUcu2Qzdz2izW62y6ezwcho9byALXGSZWoVj4vKdqGhaMJH2GPRs",
  "key42": "2gh5aJydK2d7MnymhP4T2FkHJfJS2rkMuDN8yQDhJi6vDtWYhFpDfbe97sqbx5eYf5193R2nKZWJkmYBrguFgibf",
  "key43": "3Bfeuk42M5q1yPsLmkDrVNnBKDEg5Tvahjjn13vRLdQo6WAULXRtx54vFSzEytAFEE6jn9fRoBkpJkPcscGzV8kF",
  "key44": "3akDqWrEWwDZBa7K5TVTUBXUqMyCoDD9ogs7DwjxCexATMKqdruRakqMZ2ZxsXMayJpkWbeNSDv1kk6w41QVjbK4",
  "key45": "3VpSXQBeCeBJZaRFkVMoUr9yBCxDAvntVqi5eqnQEJnyoMbg9V1iXnXK7gzBSC2CpnX3WheecY3b3Yxt4YvMPi2u",
  "key46": "3j3p6mXXYTmr1U3w9zcMt7yw1yK8d4bfy4f1PfT6NCyFS7joHWkQrMx2Rm8tog7Gk2uPy4EEKvrqSSauhWfLkFYr",
  "key47": "2FGmjHGJZgQoxoQGvz52D6gHcHxNPmiSpJ3n5zP41xFZDJBN7QLz6pARkRgqjMd1oveFVK3koGAkxfF3SNHaBxmM"
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
