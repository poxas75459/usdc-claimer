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
    "4ovorNhjCnJakdWkR2nYQp86RjjCtNCQgepM6o6awgN17A1somnH8UXewjYhfuWEqELxeUi5gMZPYZueEk6X1zum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6BKHbffUHaYe7eXz9763rYnafZruxuFk2nq7Nx3dthWqnTVC67ca5vNmbo1eHopRJxndXEXqjZWre5Qugef5CA",
  "key1": "4ntGs3R6qdocEpE1teDnCQ4HztXxRb6JP26qJBPScR47HJAdUcgQprGCwFgqoV1ag9NCh4d4TbNrDebDWNjhgCiD",
  "key2": "gaDnJ35GXGRFi4Z3Uh6RmkwcGTjd4tgpm9vLavYLKAZeoEDfCyhifsmduREhnimwaSq9ZdvZL5oB72ZAo5719Vr",
  "key3": "2Fp9czv4JPXNYmvjagv1sawdHhbXtS76p2kAwbMyDEUWLQ9GJ4ct7ByAzkzLxTLtvC78GeLzkS9nQqndsjUs7pRz",
  "key4": "2A4Tf7VbCADxiCuMa3XFYzuTXVV61fXmP1oXiLmm7yEzuxcyUxYyzgdy7HBPTEcVEjrVQTVWynbehjPc9Hht6WUG",
  "key5": "5JvBGuPy2v81smycrPSTr5MW5qzUM4x9crCdMCYAF4kXDg6pq6KjLRMRxZ1XABeMSbhePXQRy3dgzg5NAk229V1b",
  "key6": "5B1ZaE2rN671khyQ4fHNWRtCimg4gwYry5hFHb5t6b45CCFrNik4iaaz5qse3GmEt2BbYRZsit8htenia37HGs9E",
  "key7": "2hvuzM7EPY5nPzZ4XNtVgpmPbu38dAd576T7ULRnsfngWQ9fe2CmwPwAQ9USEjiuPSqP7oyigMvFk6wSUm1Jk3Vi",
  "key8": "4zeQq2vvbXNUVPxhEe7PS5RBPou5dhMwKda3bu1AEeU1Wga8zq1wFgCyvJtYo7GpYXZBNkghFj5e1uF3EXPJTwDo",
  "key9": "3rZNzFoQ7H1VuBitZKqvfejowoVrAXyvgggTUWRbxcbg84M5zRqKdSYhhpwZ3MvtW5PK462W3Ey7UNwk67pHCm8S",
  "key10": "33MUYmGXeZBRPV64ipGM68wewXoGBNfgRtzBcgd7n7GcxfnpiQytXW8rvhVpWTQRhuf3yeTw1DEmuai9sPYr717",
  "key11": "2BHjN6AipyodcymKiEs6b34Nu5rKAgRVQhUaLg4FAv7soMmSKa7mVRY93JRifZjERXP58x7K1CNJCVsggvWjSUH6",
  "key12": "nGtEA14ZbEW7dMiUgTbaP3RoqEuCtQMz1sPPgE9FwjMDZJ7jG1sBx9CtLnxpYUHn24tHUk3msp5FXFXZYAaBQVg",
  "key13": "5uBiYsqGRDdDf4HKQWKdN9hCNuA6FSoZwoMPUYMPkFyLEvR9LPVvnEDevyjPsvESrVjtAwb95yvbMCB3VXfmzMRJ",
  "key14": "LkRybfeeHUmwHB8A7QYBFts6o88E7uGXg8z9ccTAquXbV3pWq44UsUhTs1rJtCD9uE872YpTGKvJYXr4xp5L7ZM",
  "key15": "5AQnUKy7wXPdfrpa1841ATtiJxALjutmRqTib6b2XDAuPtQ2jmCLEFf14n88extjrSWzsqzLqtu3hxceSAXHzdqb",
  "key16": "3LdzRzbvp3KvrZ7d4s7a1Gc3Z1B86aSDoe1vCxJcmNUyhBLWwuW9BFVUuvciN7oq6SiaGeCKSMX3Nd36a7sKf1z8",
  "key17": "3jSAWbS4wxASAPw5BXe3sfez5AAuEXUdP3FEoheZowCuFsf28muqpkrdtqH9AyCGabpHEeQtErTBkHBrphLnHZvt",
  "key18": "56RgfSoPmYVPux7cBUPbo9vsmab1H8cTgnSKa7fB73T9h6MNDTdYB25fzkFt33iaiZ1y55mgcMS8ZxLYPF9hTuC3",
  "key19": "4c84zUEQgYYRoMccKJwWSPkF3qfLb1JGkBAbyZn3F7GKjc9y3LJBX9C7NNra3aHRKJfhwYz8sqUWnfga7mFLfBPA",
  "key20": "5gFsyvSdWJk4AGa15tpounvt1CHaWBWPwdg47hMPdaHL9vBrgk9FZ5SKkddUGh2acUq7Y3CaDsenr9ksg6uki7ZA",
  "key21": "2em3EX1bWkTxDCkbsotERKhJ5tM7s5K2YpkqTczSVzfwLZiCFrQs19ASDq91GEQHBLgCsz9gL4ezKAMHUAupx8Af",
  "key22": "5UEyYBbAy82scx8Gc9Wa2FmotbVQWGyEXvTTJZzGDrZDASaATMmnJrrdKGc65aWd9nLoh8u87PKeBXegbEnf2KdP",
  "key23": "R7iokAdz1eNjd5Lp8HX1YcRKFjzK4sg1M5vggbZi3cjL6B6Q3gTLX2QCMjbwFypd66xt1jm4hRrkKxLEU2zzNT1",
  "key24": "5jrZVKzwFcfEQNbwjhUAV74UFV15Uua9W3u6aVzWKv7k1DUE2kDtNjY4hMSNjNLm7BHfiN6RpHg8Fxuse9GVdoui",
  "key25": "5wZfBNKz2TpU5ScwkkuXbTL3tbxxnwoPmzShekgMd9qgvC4Anvihrf2aespEoB7uyz2eTRxYGG5UAv5bNMYNcYds",
  "key26": "NypZQthBcgtmUGfV53TWTUbQSb8Lys1buseU6itSrX7ENt7kf7tRC9GH1rApb7nvX2n8o5ejhfnWh6uxmoo4ZFi",
  "key27": "57YB3gj5mV6BqPwDezEnv2NUShYzQFTt13dKRms9EWJA3so1QQ2hrYtuycjFWYQAbjExfucnzjm6dkkJuw1VAje5"
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
