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
    "4W2oBkbHDTqZ7vFsBDqoGBxcQU9g3bzC6rng2pDtfEUhqbps8sbJ1JgatZvHEZTBfYk25xc8331V7ZvqdHSy8QGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MyNNvBRqdh5mxd8RNqjt4HDCTwbrDMxK3EZjpzsxmRKkuv1WNw9Mxj3gCB8KJPRDR74f9XpdCUdSBKSM6f11P4p",
  "key1": "3ffPaUQGKh3Xnt7RdCEjv7pmntkbtXbggCLkHXYx87tZiTVUFnkitTYsnCN545tsxUcvzQnVL6w253drSREHa1Rx",
  "key2": "23S5x1xAZWuFcKUg5fs6GyTXUwKoCGhGrsDpZjtiwkLxdvL8JkUyftyuCUqwN4CV8BJ1E5cis3boBiZ3hSoWeepa",
  "key3": "3GwG5x9MmnHERTFKGFeUmAwWksr8RhJpf7i3HWgxGPs3Z7S96CGYXhZu6JF15hGppPLxLNYuicqEs2GcC14f27G8",
  "key4": "5Pp8Y3UKKUgTWDqYodsRpGBAA6P9oe7BhwH288oMaBNZhEcR8jzgUro8TCXXLzV7r6jq6GWzcYmL7ayEo1RuF91J",
  "key5": "5g32m61NaofCkf8HQtBMLwmrTAZCpapcGuhHDPkFhDR64ZrN2WbMoDcDCMGbtyATkxdv3boDyjHSouHQ4CyEwLB3",
  "key6": "5BvtYYZn43AvAiyXgLSUFdYkRAQdyLRFtCBmb4PvE2CCXwQBeUh9zdKVKcf5bjcAxsn7W9stJXnVijZ3rp5sfLdv",
  "key7": "4rSLRMcc6Lb1c3RBjHEwqyyrviQdZ4FCqU7cu51VEhA8jhoppRajMPaNeLwgBqfn9G9e3ZU8P5eFxSTtPU6JscBe",
  "key8": "9NdhFxKXjeBgketw5Cyhzu8XKWDhoB6BXZzPGB6BC1N1RAN6iBYRTE5DRBDrHJZeMMp9413SCg12JasxfvRKXns",
  "key9": "fhpHm3isv4eSVFBMyag9nYLv89PEfYDf9vB4mBzftWgGG5ZFS75zJfMsTwtHt9WWXQRrKHhKeU5VbpcVJvg46iz",
  "key10": "2z4eL5oZuDL6yU273WohDjaceMBJRWcYxfPHL7pXMcBGDSJ4ZYhrLPSGyBr7qDGTz3RVY8RUBoXcD6rQiUF2vnYs",
  "key11": "4HYbEtH6rc6E7C2qGY3c3iMAiSQnuRyqhdnr8ibsiiPPGGKSXqu9ZErqfjPJ1X6VEvL3pjDGBior5j4AGmQGX5Ry",
  "key12": "51yHPdnnm9ZZYXjL28y1yDMWvxbe9ERiZ7psiZ4peZ9kg1QjJpvHyA5tc96EyLSCFPWNzXdDpc5kjsiYsdQrsF1F",
  "key13": "2q4Pacyk6TP7dmJeMDv9r9HDbMfHx8eJj7nEjnBbuneLYZtXq5PDLvv2e4u2AUnfAxK3jRPstbsSvr4EXG9J9WT4",
  "key14": "NXRo9QfKCbk7P6aUvxSWaiPbTZ4X88qhFQMtRf1MP2jyBh1nRmFtNH29pe9Ur1oNuLqcbM2D7nf1GDadtBk3Rnn",
  "key15": "usbD6KgmL3ULcvzAkXu3qhzPNbXQ4u4sKR1uT2sCQs7Pv7BxodZyLm5yRkEeENbGouaEyWWGabNY8Se6EfriwSB",
  "key16": "vt5NcpcQd5uqksxWLENcXQ2xdQ5AgsvbyMLMN6gC9kdTkjGS4YYo3deftVcfJnPfAXHp8KCd1NkXJ5K3tvZvLBG",
  "key17": "3NPkV7NdQhC5ubj4URf2hFk7jPseexU2JMh245C3ZP7J7TkvMMiC5uKkvs4XfU8T8FmhoznLZm6rFh2fLsFwGXzg",
  "key18": "3199yuRiokYxXiotVhLqy3vEnQ4Qn3VG89AAJf87YiquneyvR4yaSKyBsboEUsY4z1S9CtnEe3nD7WL2xG8fcN5U",
  "key19": "3r9qG1cucLD7p4R9ZvUQ2pNNvEj75ayTEBCH5M5GrEmcMLCEYnE26JpsbS69vdVtpLDASSdZRMxuVEg7vqdzvJQz",
  "key20": "ETw2tKWqmGsVnxf7AZgb9J8kW1EvnuwUcsAAEHTVw3Hpc4gcCm8cap3X7G4PWuk2ATm9nw8XLMs6WQHWfA4cgxN",
  "key21": "5r3QWJouc8R5WMoTjVWoFgSnq3WNkhG18nbjWTqVSnEvdiqbiZtMrDPuQrR3TAhr58bX9ccjXBiDTuAM8yvKjQoT",
  "key22": "4i3UWWz2vs5ZCckZ8bEuJf4auBFZSR8vYLi8LkRFba812Zo9CXepmw3BypBp1UC2Q2XkS1RpGctUFSUvye7em2tz",
  "key23": "5iUC2dJ17yr9kyKJNscez4WCmJHjqZxSmZiX7ts5PWfiPNRedZPbfiQpxDj3tZh2T3zMxj3e3NtWyRQ7hvUdyuNW",
  "key24": "4mnJ7VtsCp91Whs9MmfMoQ2U4kGgV1K3t8TMF7hVrUYi3Leqp3VdF8RxYTGRWwgGUN4QVSHo92wB2jFxunUGVP2z",
  "key25": "3gQ7NZXXvPewin56QSFL43i5YaxoRecxrhE6EkTZBkwwg8XiXjeva3hGuE4spSvsvRvTmqmZW3hNE6TazeGET9c7",
  "key26": "3fFoxD2dASTuX1ysZ7vbxqcvBh8L5pjG9Q9BZQThChmgNrpZahAnXu1vTmwFhRq8WcJTBwo3JMNuc1Azw2bXRgkm",
  "key27": "3SHSCs5oEUPQpEhcLc3EQXAbcMBFmxJvxfhH573LG7nTXsshb5UvsLoDx8m2jUh97mXZYhVx3kPqDaYUKAZhipza",
  "key28": "5N7bpbjFJJjRfdrxe7CrAAsnCJyjJpaHQroyug7o32mQHFv7DNxH2kCCr51TrAsJ5KHBZajsR7y9eYPTcm7UePa8",
  "key29": "3ss3f7riAViNpdrJV88DiMjUCuUYD1znsK2kvvLoF67t1WpyqCQBjEv8CH5Bg3ruAAQFDf5wMQQSv4gWMke1aWLs",
  "key30": "4QYfnJPUnv9QGN2LuU1RDnSzzKafp4svpPoufnzNb1Fdu9MZNBYcw4HRRqL1qe8D6b6xodmyTSrwrmeYmLcxCy3W",
  "key31": "2oFiECMKxzunQxb9VqNeLLkucoaBR7hCrW8yqrQV3Ak5cGzpZVxgYZM6VcdwDXyryCMJe5NaptCWbWdEPNBgPieK",
  "key32": "2QZXJtiCCdFxbAwRgEg6ikSNnbYEBGUXmHfQvdD9vmm5wQbPWfHqXFgeEDeLSYjEGiNZ5GpCqDvdbHtWtMWwZteD",
  "key33": "62zgmA6EtXMttWDAeJKb56HkPiGPwyAiXjgNqsce9Wf5b94MVruku4UV24ABb6btvAWxs9VnPC9xPLQqEADSF1oi",
  "key34": "4BRECre5gsErjtFJ9xM8dCKJ6SjpbxMwwNU7NmbFB2UpX7CR5mbfQ2VSnJsyenwnm91tFZq1fpv4521Yre3ycm6D",
  "key35": "4fpzKjkQYC9uJo89m57VMD5MzK7yerbLpakRPSRSZPp3iqS9S8i5SVPDXd5yBvbmVbmcD6ezr8MZEALSXGW6j3Y2",
  "key36": "qf4rWCZycvFB7ESh4DbS7iyJixzsyrUwYLqsoocZvfuNK2QgrWV6yWQ45v2UJTjSD7Xuv8HN1axhA99gy6VwBiz",
  "key37": "TjCh8WDdzsApKLpEdprQtEsqSuKwNhk14HC1FPsE8u1Eo8bES51s37mmhcfJzNzEgL1i8zgsByUdcCNVvJg2xch",
  "key38": "5CKgsDCJGvbbhXPCnTdYuN6Ea1P7HSoH11inQLJxHVG1FGPf9zNjg1H9NBu2GZquYnsz9KhwaSRLDy7ZywAFfAhB",
  "key39": "5iYSdfcuWSEutBLty5RjA3LkqRV8HDmGePMoEqyQfh54c9UgrVav4A56Aw22VJQGS4gRjecEY23hYEcHVSJ3eETL",
  "key40": "pgLX97T5KnC3Xewz6TtTqu9WgneLD7fdw6GSVqMvojcVb4gZYYssLGaob66o4EbyWbU1n4ffNTT3A3uibrzzvSG",
  "key41": "4PaBG5SgQeUBmkpF9FBPFnb32Lor94J46n735pBPAbnjBkuFLKfX4VBVPUwtuRJwkhyeryr8L8fALkjxdcz3JNTL",
  "key42": "3GYczbegRLmrqL5Vpr3ZpQfhDTcLuw47a9aT6VbpdhxDtBRktrCG7dVbZDVmg9GYgNc9pdphmLR9uwWMtADxNbF1"
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
