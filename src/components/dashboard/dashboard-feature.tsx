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
    "49f5BkuT4X4FV77KQrCU7N4vTaR4czF5WTvWtf6n1SPCUsfvEZmhd8bxmHncaxcAJw7CuuRkzWqLjZkeoXwA5ASD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcibhmNSoTYMj1G89VerooeXSxjUAwEUUkpSiV3DnAy4MNGnmHN6GtUKKBedgQDiKTYEovHYjGkfAsBeHTkxSFS",
  "key1": "5JVp4FsQSWrqdRRSPYk96KNotVXKNrdpnVfA1VRPq8P1f7grqXRLa3G4WoB2kquBmPeJTjJayLR3dYDfCN5Qp8ii",
  "key2": "2nV6Q9GuAHFQRJGvp9rYEKXuSNmx9q5ytXgq8Sh7Zr6j61Sv3hGcMfJvBPwvgGZ3qMCLQFCUQYst5ehddhszNrHV",
  "key3": "3ptywp5ZmNAucZtvykp9QyNMrKGLncRByuX9F2AzLseiso4KhAL4zYi9i77Y1fwkSUeg4A4m7rDHNRWAAQRHeWGw",
  "key4": "2mNuooAQKBdgLHo4Uh9fYCZWhb8JFiXE9PMdaiVzAR7FrSH4WS4RrkaudNgNzWLKtVcwuN2K3i4r2ZGnWwyEF7Uq",
  "key5": "3VZzB55fcRAEW8SqaFUfeoMDTMXowTnrB229xoTBhK36cLxgnxHavKR8gCL7ZddiGtwqoFxs55d4buSbSjgU1BdJ",
  "key6": "24Yo3iBeLPS4YCjvGmybJQpRNK6iFHBFNhB7xWPegt6JrAyG9eN84s89na4Mu7gaBqYGwaNdXDJWHYK1TXzUxjRY",
  "key7": "3w44CgebbHpmjuZ612kSZiMc4Tecu8rVkcUy7ZZE1t3fMcXJxN7YnsBZWAHG74NvLbiB8HjzHmcKPDoZ71h2ivrU",
  "key8": "5fo5ueHEERoz85oVL9AEVVd3UrmaKuFaLKGftyp8wfaCEMkEbCTCRec3PKz1XoLz67SuyXM6DQ9pXmrnLvzkT6Dg",
  "key9": "2miJx3mVhtGGkwhPv34yrCjRvdHTq7VcqYPA9M5CSeu5AwmGcCrF2CvC24iYDYcyP4uWDAEMijKU3ModNW4vr9Wx",
  "key10": "4KGcJMvjiouBXuC53H6dz5H6ZAe57JpqcN48yAhPwAamBvbq11XEzgLjxPkfjWM5wbABQFdy4c3XUq8XWLJ86YMZ",
  "key11": "3aem7SZJH9eAUwetfuvKv14F8sfLTpocJAS9D4eT1T1yQG2MByWJ3Kp1FpwahmMcTwUfeSyGSuVXjoHnzkmfn5nB",
  "key12": "5e8YChvM4AdyV9NDhLWoH2pcxajquZpkKr8YgEFQ6Qb72GTqZGbzL9mCQ6HysPr6PghPg4o34ArYipZtWe7g9bTj",
  "key13": "3h6SCtSzzrRMTRAnEq5SuxqqwyCvCGZioXbnjvrbVBw9NozUfNkED2U2KXoSmRkN1NiqTXaKw7AvuL7t3VAZqjd2",
  "key14": "52T7Z5dzNeH5TzDghHRKC82v7LNPpSBKPSfESR6dxBnFS3gHKt5MVfLVNc7uXDjwJPtYKk2VHTuTsPbTTVoYE5dm",
  "key15": "1DXXZq37QB93NpEkwAs3oZH78nTf8tMwGW6pJJCtMT8X1vXVWh83Z31ZFRMvG53mnK4Qn5EHfPRfi4cPSCb9FYd",
  "key16": "2FPbFoXXj9i4DjVexKvThbBVCttcCVCoaAi1DNjPpjjQPvAWeUfzbZzxtsEGEDaTj1WBJSKcrJQkPjqWsf6cnZNu",
  "key17": "FYXYawTvZAVzKJDEeZAJayLEwXyWt1fhUvQxP9y8sC6aV5RbPt2axhZChAxCSmssWceaCm2Qaz1XZC6W4kdq9S9",
  "key18": "2BhMYH7vXBYwmJhiFyaGNZVqYrNwxs1FcqQWDdhUufz5uoUdaGq1iVCwA5YN6FAYf4uXB7ezJaJ7bHPH671PhBbV",
  "key19": "5ucMFQGZZKqfNKfV1dGPmianT8aMrnoPkPey2K2157XuynbG7qVj9Shg3v4oF5i7sceP2VnXzsKCqXWAXJvHu7Hx",
  "key20": "5RkkjVLXxviKzohZbDHK6Cs66e1YaFKHKLP6oFKkfUwLN3xKt64GmreJwNWTwzr4afdNwsHELRpNoHvue4DR8S2D",
  "key21": "318hxN42p4UQr7Z1sCqH7LFw4dUFHKV7YsHAbwQT6PfNekLjYsnkmusbn5hU7vPk2d9eWjuGmvvrhB3r9ZhwcWmo",
  "key22": "3VPbdd4p9DKUfnfJLBsQPcubEykPnEjqo6s3LBakZJgaWRpi7w7NPeo3VEfr774r1vrFxsgLRzUfbCv1cGP69GVG",
  "key23": "UqYuRKx28CqLXK9wkVRE4YSQ7B7WCzrHX7xNariej8UWMf6PBAwnKhKC2YHCjya1fLAYtn9F5UuSbhAzLPuSpjx",
  "key24": "4biKHEJbE2cmxQeG6V13yCifnJX3qT3E1NVS7PncesD7CrCiA9LPmYcZV71zy22xthCavnTf2UtJBFNLCRJUPQUa",
  "key25": "4ogXCZQmgXykNSsPqVpKVbDxN7d7DMr37AQCj14deg9u5QJAAAzJGYEg3B7PjSrfNwnVqz1tk7tc6gNYLF6ed95p",
  "key26": "5YxWZ8mLD26SF1h3G3gMEt9Ba4PzFstJMpPkPyB1z9xoxV5Z2QqBt73gVGC47Q5PWArGPHrRnZRvWxBroCj1bwtp",
  "key27": "3FZ7K5TRixiJtfC3kMbC6vCNM9cSFyPaTEscaHNYAZ13LNPN3MgA6Cof85upamWRMUvNUTB4x1BTfi5xEHf7MvzD",
  "key28": "2Kh8Lfik8h4fTjDZZok6pjU6gvv5HkMv7AxeXEWPKBrL3xbyLN6Yr87x3BPZCh5jtZKqyGPyBDUcebH2pTNCwY9C",
  "key29": "pvTaZEcTTFYJGv93i2v4Kfwoim1nJRRtppEEbkyU9NxacZfp1r87eoFr5xjTbkrZmWkCuEnsZYt6CC2PYdXV5Ao",
  "key30": "3eMLVTNNLWd6RYDsPgk3yYiv1zNfAp1wES2eq9ZNSsEsUmdPg5xkz6BQ1z4v16d3WZrx2aWrWGLu7JYrnTvMwg9K",
  "key31": "iiqKjzcJv1ND3TjWpSsCECmTFjAGmUCQtZz6ZWdcme4YDd6F7uYLGcoac19GGxdoevUuxACSowt4ga7MR2D3DZE",
  "key32": "2tXQXpoepRgPXy8YUytk8b6XAMfMXsYBeXG2sK5CgvyzGZvQJm3RmrEDGU9GGUvkX5ZwnfcrpkPQsjhqcoXU1zr9",
  "key33": "oKZMuw3AMtaR6vEyga6aRz5re9oSh1cQ1DBQyguy4MGFx74w6ZNHNJqpyrwChY13bitUjKERB7upy9LJaEvyuri"
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
