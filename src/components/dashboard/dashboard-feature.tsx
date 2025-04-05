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
    "5ZrjGmbVrxmDZUdfxpL7w7BJVMitpN2ES7xwQyEHhiMyyAtfyCi8Lt7DtejLgXWg3VEUa3dd8VhK65QQog81YWum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QgMBvd1BoZsP2uxs7ULTWEDkg9s3LEJhitkrJqa8j6GKkyh6uVerE2LBU2eGSRCX7ejGTq76Njm1s45xPrUxB9q",
  "key1": "5ZxePntg8AZaye7hkQpm5R5s5PPctAGLaJXRfZ3P2VT6kDgMDkMEA3QGCyZzDNikNwPQKSMRLbdhy81gnQpXGNDd",
  "key2": "43oWAGqFzf6gWpvPZmQLoAJHpCV9tFvbLAbQX4WM352ohktyPoha869wiF5KM7fpo9wJfXbi9526uZ6PD1zyuc9u",
  "key3": "56crWMkbF1tWtNMXnY2YdB6CdLqdrQHVJoxRw273z79ameSbnDWFuAihfjA4NyH7VTCkYApkfrcxDdWhAygGu8ai",
  "key4": "4XhRjWihxAyVF5dV2meAuqhKwyTT1SrUUeftqhG3BtSC2BQx4knMHRKV7RuPj7kdPQqVipU7w7p9L1hnnQw1recW",
  "key5": "3gJqeEJyZDXwhddTBSoaNrPQS6RY8UNUsi4EN5Z9qvBo3VuNXLF5J6urGQhHKmiqWkfqZtGTGaFN4FximeS3m1Us",
  "key6": "3oT4LYys4meeD2zLuURVHNdwro6CFNPjDTPk15kHMMchCL3LH3XLY9Ch1ovZyojTepSFQtUYk6xuz7zJgxLZ85WV",
  "key7": "4BHDGKWnVidXmMud9GFSDKaXegccLv5Z7ErGKxj9WLpdXFVkJfFJnMSPpxYtkRP1EepycPkVYfUdD84p1UhVwvbd",
  "key8": "3yXVGws6efBGpmHR72uMnZbKUPpTzedhL9TPrpWwKvBpPqWnsAR5GDKEq1kj7foM4amTGyfcTPRwEuFBgszQbznv",
  "key9": "3Zin6WJWs7wYwJyNzmHygeiokdVqZCzyXqZ717SgLLa7RpnAF3zFY8k7HKo8yYR5MB94u6JYdHjhKFBXo9vDcwyN",
  "key10": "4k6zmzwD9YoDtXtN7xB9jCp1H9Pyynaj6k1R3Kb46NcCts8bitNXJrkBSz7HRmhKMMhX9v4hF79h3kzqXr2B46eE",
  "key11": "2K6sEx7H2xCZqstv6EZTLuN5qYUeE28kjmmvs9gVeDZXg7E9QrohQF6v8gypmyzMJNaqmteBHqVy7gZszaLWDW2p",
  "key12": "3BDufoFx6i3XYQjuKiii2AUZbqDp7cNFCsJdvjxebwfG64jFJq6HG3ujt5qgqc4jL3LeuFkv8h4AoE36FiPZM4EH",
  "key13": "5zuJcDDJ3nWAtYjZUYSXZkTkJ6FUgbvfRNeh2o93RmEunyEra2rXhxSGzLQuRacBJxA4haG1tUZnjYZ2WTqhTtE7",
  "key14": "5XHSLf6fS2UGVC72XRfzY6SWNobWvcwA6Wa8Bk8Cny1BoZqASugx9hFC11cQwzbqcHBgz6qtw6Uv2o1kJMZDfA1p",
  "key15": "55RA7m9HqX8ASf7QcT88fcWNyJXh55tCFbdpu95HU3NbVNGCBkJnvD3hnFAAR93aXRkVBGiAKEhDjFnvJd4BsQQ5",
  "key16": "5wjbpVVEqMMfSTxgsN234LWjG6NKipP5235mWoemoou2p1U5zZCWjMFiw9ws5HEJTry8TwS33qyAK9JqdQffhuFL",
  "key17": "2fipE47GWXCkGyFWLijJ6RLaHNBj3EGRQStiNThrc1SbDb9JppwqvCn6ZmjMz5CjuXJsETL3i3HtNkf4YwG1X8Tp",
  "key18": "3saViCKYLybQf6311mXEaGxR6wTcNX6eDwutKFXXDMZtdJFptjqXBasu7h63pU1aAaoazyqCWismUy95anJX6kwj",
  "key19": "pRzLohRALR7vh8mauZVGPXVPkf4zVpwgJ2EZxjTa6boqh6Cc6TsDgiW18QnxdqJtk8UeGwbVXuQTvuaZRhnoeBn",
  "key20": "4idRG7rtoLc28bMvJgVfWrAdobvJ2TTm7zwEz4CaEXPoUgAs616CSWquJgN8utPrkECHKs7FHi1tYUqCkyKcANxb",
  "key21": "4RzJj5Da2fYGweN2n9FFMKw8Z7geK1YL6TzXiA2tzaYYigp3KAnfRQK8AFefUpQSN9ciY37BHp79wupH5wge7GmH",
  "key22": "4qYM24VvCn9sXdfSeEYkU11djmrR7LnXE2sAJNuTkHSM3mBiZhiFjpd8gQhQr4d9Uepnkg72NEekZ89JFCaF5ESd",
  "key23": "3e3LmmFWJwv3EnoSrNywkkz7GmYrjvJwh8SPSp8V9eJdzEofA7tpZxvSAyRJrXZKsG4ryMRSG5CgmyXxKzs8QBZM",
  "key24": "4wWqvdhp5K8dP3RzHFwDMmH6SiotTYegPqYa1TBFGu1gkiw3GrU6RLcMEf1NnL8tZCauU5KNNHKcfWoaRTN2cJrJ",
  "key25": "4rMFcQgAMowdyfrCMYBsT2oq23fWosnuBNrtJ33KXFqEDK7KDsTix8n9sFvC4s6CbTzYxBq1ZN2QXjdPt2k2rid",
  "key26": "5RnnjXdpeg5mP23fpyZHLXJEMsMUdNK1Tj2zcxGx3XbqhUpzF6DpXVw32W8LgWmSMxtHdmVy3uP4f9bErFpBkcDc",
  "key27": "FNF6Q2xVj9DwDv4SgQ7SBgq1Jo26BEGaxLDUU1P6Ga2bW9MhRUC8QoYLejJdNjyc8CUUeieMnX568nHm11ZqYEi",
  "key28": "4WLu3tgEyNNbKese4DvNtTZdNjdCgyRaa88wQf2TfzDqESr3uAMu1zLpoiwknrP1MNQ61yxdV9nsPf4R8e9FJ3Q3",
  "key29": "2GDZefwrvzhfTSrtbhu9E6ebgbxStRLDmxfxe7wiGC2RMumG1tsqYbZ2jL6cuYoQjgRHgzgxMT3p9o6HXouL6Jf7",
  "key30": "4uu6YgtUAbsyZiHLK4BwVDeheudnGTjQ1vmsX6FZ2f48LUHDNqQ1eHs4V3swFW9uXaF7NFps9XDxVLTyT1HivaZx",
  "key31": "4VUpNtaihU5zDGfhkhALK5wYMkBScuW4JjigX9sdE59w6Q2ka69LL2VWZN2mjH5HCc896giFuoMpjeoCgZrCHBw3",
  "key32": "4ARtHrdWZ3fd4VpphHmo6sNVwUd9afyWWVo724GhMfNiA6Z1KdLvSZcXtBfryzoooEbXthJpZ8jfAmHJhRw7gmMX",
  "key33": "4mBjZB8smaubszGwqc1dofXJn6ZKccneTMj4scCzuMfFs4peh7qCYUeccpKA6fLTd68Mn6YXL7YFqwhkgPkCV5PH",
  "key34": "2tgrU92nw5BLpwj63Mr3Jgh6cL3bnResxe3CERbKJ2v6LAHqgQbcaspuuQjctJQBkVFfEmGMWfvyujwrPbNyEJdw",
  "key35": "3PDuAnw3b2WGXJz5WfbLoYzAU3MBma4iGgJ9G9XYzkFNXYbHiBiijErK8BqiP1wwHA7unmyGm6qVoNkbPKg7fteP",
  "key36": "63FcecaeQnJjobupkdB2wktEX523qN567E29umWYQKDPszuMVjaAb88H6G8Gr9G72N7mnELFhsUwxqfTur4p7tRz",
  "key37": "28bk9phykeZn7nS6RinitpvnwSDVQ1okizcmdipyGYtFp8eYpjn4RB8o4ykSEEEpfEiyHEwqmbFgrrP1LjkVCY1q",
  "key38": "4Xge224NGq1eSXzPHZFAGN6R7qeNr1wknjvdfdXGReVfDhmLBdUVnvQbfEQ2a4hvTgBz6QD8UwfAAygfgHqwCf79",
  "key39": "2EZ3C5fNat9CfV6Gpmff2aF27yoypnghJK5whg4kNC6NN4vYXjNJnhErrugkBaryQWUyeGikW2yoeoRdRGcQvvfH",
  "key40": "253iq125gCRjsDa6Hexj2mcVThzF96728Fy5QEkXHGzNTt8bDc1bX9eZaeEnbyqDsx48hQ4dgsFbvtQaBaDYaNis",
  "key41": "63EndQaYvnXghfJmA1ThM4kuve9pYT3zNPeDutec5gnPhiN6TiRwgLFTMueKtcLqicrH8LqJgqdqREt1Z8YVQAms",
  "key42": "3aYWEDTjiLwv8n1kvSf6NVULqbY3mNNiitcUA8QThS6GxkcSycMyRDTeoJFQGjFycvHZG5AZeEfcAcaaBob5zrRR",
  "key43": "4EDAfofyWWQbS1aJoepNfW3KPw4QkzXaKGai3CpvWuDESZKSb4sTyijVZWyWQZKybaoFSHE5Hej6ce8xrN9nxVyX",
  "key44": "37cKFzWQksXgUBFu6E79hj6SoyFhPYxTTJjgDHs6QwVb3FQGjMxZTGpzKoAcR7PeTJ3c6Dz1eMAJKVWdhxw62J5x"
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
