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
    "4jVPc3zydK26ZMCXJwB9wMNyyMe4RXkou4KtqCmg9VF3ygQfigh3ERqnnBJmSAFPfrAc4XQGkW6XPTe5PMf3ZWGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXehpFLwfUQnFxLB75cpW6Y9XBgi5KWT21AUJM91osWneMs86qJ7SDcyJMhzTKH5vvn8VhCZQikRmMWfWawWksE",
  "key1": "2WJQoUoisamLZmzuG2dhGoNwSef35q69bhmeHiRzGXbhxE3wJZbwrKxakfppfbvy6k8KF6tGyGDioKAGAZuWbKZh",
  "key2": "5KMzk8XSJu3NhS2cPbp1yTZwFaiSip48p8zjspTC8DWM7uVxmKQvh2wbCPDgszgJLgm4D4Fp481oZr3fAHTaQvdV",
  "key3": "5jrr1eKeDu6bNctFQmycc5td57s5FByn8PfuhnTwMmofmBgwC6FDjwo46oemZjK2DgBPesE3H6jrw3X8eaDxeqbq",
  "key4": "7JzVimxkxL1LjBqAtMxs6hQiyLvaWfigutKGCyBGrj9CuY4d86svuiNgGmVCbEzvsxuHGcFP1V3THBbnNs9AnTC",
  "key5": "2BHaMe9mBKxvKKsExp71suMYaQeasDHKHkgEL8LnayFvRb1RbghDgRW841gV3eWCzPLArXqmZmVHPMixcuDCNxSz",
  "key6": "2JiXrCM4SULg1HrTqus3kBYycZTKyfP9LfoiYNsnEosmqTMeQMuTGEKtrfUEo4hW1m8QgK1b6xyWvCYS2cNTAVFD",
  "key7": "hJziewtk5JYYwpVHm8d4RJGJCUuMTotrEt9VNwVK6yXARsPMBXWFmzb2osvUVRDfFFDNtJp1Fnsov756kyJEi1o",
  "key8": "36PkNX6QBuZwY643SpPRHfnRgbhjkWaDsFxQmzSc5BCicNXMNhxzu5oUdDxZXsqxYHpsP5WQrnaNMDAWkPAAVhpy",
  "key9": "3w4CtzXSbjqvq4gH3aS45ZXi5ruXkjBE2RkfGN4mWcRvrEyK41PLLhQRFaWcA45haNmPgj4M2pAxFWYxpP3tuAaD",
  "key10": "4HaEFe1qdUbTYq7yj9uSX8GnH33B52bqrQXBMWDhyUJtDYg6YFb5nNm9ZZT5cSfwzis17tEQdFhZi8yAW6mFYkMY",
  "key11": "3wMdQuKRQ1RL9JgduANKBWUXRf5m7bGog8G94PwgfFSBmxyg6g2zTJtREmPnErmeeerfZX5zhRxRJqHBU4aGnDnC",
  "key12": "3X9uyouMrXcW8Hw3EveoNrireEDRRJLqAeZbZDx1yjnmtC13uk73rfGb8hVz6o5enQtfWtc8NER882z4TasAZ6AY",
  "key13": "3asujRvGB4HzoUnaG8J7kH57ciyVd67aXg9Qu4Yr9uVAxdcawjvtrzdCo3wu5tcJRndcGsRp7StXg2Xua4FVxVf8",
  "key14": "2E3vBfdGzMqr8iJ6qB9d247aQqEQqNBpfv7JhMtYa1XseS6fDdkvxTZeQ3JKU28yN3S15tsm549xRYVBwewPjdCT",
  "key15": "2KCQPnzWcemDbx8KVsoZynZ3rySX9KYGQ3Z5XiSmvnEpj9ckmS9YaTkCuZLGVy3oy9gLp8fgrHceLQJADYDC1MnM",
  "key16": "TVYGLAeQYpRo3RV99BENqVQooAhyJr83ev2iuUz1HNEx7amWy441Dj3xGQvFJ5CvKBVCK1XQRtX3RZFhaUiJ8sA",
  "key17": "5FauALxD3YuifFe5aUwoTfacDFeU9TcrE1NqYShGE6eTAjzwq4rNnCP1w1CViC4Mw8dunctMvH2MpA2nk5XxJ5ov",
  "key18": "3xcBQXZGzEsP3AGWDuWC2n2vAbt1ybu4Ehe25DpDPQXXm3tcogtVuyieMc4y931L85Sa5wkF9LD5RiEqzYZNwgkf",
  "key19": "4PVtX3XzZBHsc36CRVqcEU2nQphe6CgfeRJUJRU5qDd8JsRTVrXPp6dPj5mSbUw63gTrAjt2EhouHb5zvjtXs5yW",
  "key20": "2KubYvvLbgyoNqnj4tqch9DwmKCThrxuLeYD7Zr6tmU9mGgcRa2ubGrzfiaSBKWCQVLKcjCQ1YBqrmC8fm72rvd3",
  "key21": "3AXd8KW3XxJ2kbUuizJG7wDuym3RN83PvDM6rYW7ktveWxNpJFMuQ8mLWR1JRUq6Fmd4FSiHR7XbZCHYWipPDcSZ",
  "key22": "4TGSYJMuU8br7Q8FyVbnc7pBSoskZzPBn2kwWFNPVoHeQ7zJTMnPJnyZ8uvUY6BaS2z8yNKMxiZAcpxAGU4EZ2xS",
  "key23": "6oSgdyC5wYpT6LUMVNPdqVc6cpyUPf4kECRUvm88xkaM4uJFiYk8wLSmeNpMgHDygJSgkmazPbeW848e8tCAyjH",
  "key24": "s35K9viHh5X2aYNjXKvsvLA3ptf6yjPZmaesPimLAVxNcPZJHaBYQAbc3m2rgZMVo2ozKK5o4wWmzaxDeHN59AM",
  "key25": "2RnuJ2cyQ8Qsd6kb9syVie1o5kPXwrqFBETSwhD2yA869BMDWfTK69LNxQWbRydGKywVir2c6oPyh884bvDqXdY1",
  "key26": "4YsAhoYw2h3TxrBjbp5kkumr9rD9Z9MccbUxso1bBz3vfaFZvbgTrQVuKubajiGsb4Doe9SSaEezWNnS8TXhYGkn"
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
