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
    "4TiSKbdmJvi2hUgMN2zCXsN6xEADH2hHJdMfG9awUJN6cqJTgdePQQ3hTAQX32xRZVeLQbygPnZn4KwneJTWL3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKaKUHkMB2ft5uPH9XFUPXiPdS3K8bi3nMFwBFhUp9RTvdKz5P38FDZP3Ek1wDH5qtH9GncfD4tpWsHD3G8JpEy",
  "key1": "uzjfLMX9nwfWfJQuThc1njHAizPHo6DWczW8yUbWh6sX2ZNnJGGvaHHCWXrhGCvdknroTHQWh693XZQjHeHGGon",
  "key2": "NgKtfaDhV9P5RpwekYXhgSb9VAKpBiMo4cEjwwEf2evHrzzjKW2eAPQUJQg8RoPGCgcVMAP22QF68KZAnJ76Q81",
  "key3": "3nsGa9GKVR4H7YCFaJpbKJfGAqipYmcbsnKZRTyzbNLwfimxV1U3e4KycznD53z5Y3aE8gefmJRbhEwYdVjNJw5T",
  "key4": "5XQKpqQPQDykJ5tWHA4CNrXjR72jAG4XUM5n84dzkk6KMf9MAYtWWD1poyFEDfDzN9jb8CPzrYiNNXYNiX1hsLrM",
  "key5": "2HrTWPXjjQKtkqQ4sYuGAq77Qr3a5DbTeamdtKmGQuHFn2QRmEhzDCQGcrRk1RsLoF3NHFwBRUh61dT1LaMozJvr",
  "key6": "Jk3Tn1R1wtVq2T1ryfjaWxegcbmGix6zH3N6A1zWmSpswHGtUfMkE1b8ZHX69PwE4tUZrZGnASAPtY4BKU7Pkik",
  "key7": "41NJ6PxQpadCKs49A9LHb9crGTipAr9h1kRjTDnBRTkXAvKsm7qFv5GsWPC8TC6kGNdyMdEd5WJ4RF7718etYu6v",
  "key8": "Z6A6VcsUgZ79ipDC7noyjvUndbzoBHevveCRJW9b1L7EqtQb2xMRJUxr7d1W6fSWo6t1KVBMPyNQfQaidDGm225",
  "key9": "4y8hGxMJT6hiaJHETRqqxpMrcgEeo9hUv5UnfEe8yEdPKnTRW3kZYnWdB9BdivW9vghWNmypfgJy8swHWEQ5Bqw3",
  "key10": "5pnCRWASibL84s5wKdRFw384H7vBp7KawL4sjhStFQjmMjQxuWiVTqEgL7ABiqZWafoM5tevPwSReP8zjYybHdNE",
  "key11": "4bGzNprUugXJFbJn2Xt7X2aQJucYMey4mRujJikvm3X4MFQPruLT5j73BbixGazRrN8eMALjWsUo6iqtJ71VvhGH",
  "key12": "2a5HFTKQFrTnf5uBGpVpTXox1dPSFoXc2QZtZ3uxNU4cqnpYmfRFPwXUugc8FW18zJZz8hbsPvRXLabkfykKf5Qt",
  "key13": "2pKf46VpbAzhE9xX7CKHK2QCCa8dy5miSEqQmmipMCmCwYdxtVLAoRRUhkv4dk4h5zWd74xTHH2Gep9v3rM4Wn24",
  "key14": "4rqhW4GsygDxmUXZ6tJ3zB8sGGfVEmwgX5gR5CbY5TPUoNAdxPUxGziCTy6Y6eTDqYBCEYDGypiHeK8xhxQGPXjs",
  "key15": "3w1mndW1qCr3SisroSpTM1bjWE2uQogHEiC2PNVjwJSQDavcX6sosmBWU2RY8nEjLHhm6gPYZ8JBwyMAHcj6jYbc",
  "key16": "3SqHZjFf78Qa2udV9pusEJReWSjSdFnAjhkRcbeEuWr9vbwtRE18EHvREVonBDJqF37DrvP2d7rQespKKVqqKCxz",
  "key17": "5QNQdeVvogQfmzpa5t96dYMSYhdrXvjvaMAoyJvT5edWgE8VKRmLbYck7AHUXi57PYmENgPRYKduxq4i3Jfi3FUp",
  "key18": "2ehWkV9rcAtxVKwArmiTUa25VPGAUG7zfejLMDACHMkNdF1mdtK5XHixZkPrS6CgshhcswMriEY43jc7twN9FrLr",
  "key19": "hA2uid4tAsGN5SCyhviCjmNkzztFKFHeoFaycTLz4VB1LSyQqcT4KGNvG4pE2ud8jhMHun7kL5an3RaTqT7aD4W",
  "key20": "4w6smTqEPFA6xdUVgfscy1jSL97RZPiNsWua2VwTMgr35b3AY5Ue6GteqGpyLhCwszZe4rNBXbPi1deGKiCL6QJ3",
  "key21": "WYW39h2Hc2ocgnBffynA6rCqwTd91mvzPh4Ya8bswmr1hfSMEYJmmjj6NJH6QqHupm9MD35LXfWem2vAuAKTE6R",
  "key22": "R6w38kHaBgMuayPdm7aQExsBf1DipCfEU2Mya5EpG5PmLAmcUPWboiPQs5oryZyndikRiFn5UhZ17M5uu6ddf77",
  "key23": "3v5W9yxRXFVNK1LoumrByww9K4kap9QBbsKtttKtnkUhDMXPiRfTWP4Ev2NAoEfQNAY9kLXrtEgjmNKHnFJFpjXb",
  "key24": "3WKoSYna3GcNXoTTrRGKd86SfgSZS6AVM6fXxdinY1JGGyd16MryJSVbSFRFSLbDbheu2kxi7R2sbt7pm7kJ1ntz",
  "key25": "4U64PxTrrd47oJEyGebBqDs1j4a6ow8xf9E34v6ena8qXYXt3q5XJsTSsjCyrD3ncmnJKZkEJP7KChcdBG36nc7i",
  "key26": "AMCC84Lzc8ArDQ6qDtYjCzNbARd9J7miAV3WpUNJoLycxUnDQ72qhMoQJH2Cvmy3n6uAU7Q9SbHeqV9XwYNi41b",
  "key27": "5yySfRDELFGq5zk5aXNAdBDZQBgXp7xZNkgcW2VF1UqNxefmrMtPYPn2th88hfMsigYa6fqWiuLH3mELCpDMdQcW",
  "key28": "4D6KgDN7s74Ch7xNvGXwsA5E2wg6m9NHPwocADhYB2A6Q1sqwHT18Sctw6kQKUofxym3znDcU4HSDfLf6rafBXh2"
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
