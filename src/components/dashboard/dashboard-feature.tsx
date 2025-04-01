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
    "3oFCbxAiQqU6QiA8oR9Kbyiufx8iUfjtGNfZRcuxPqtgaDAiNStQ3YG6MkMAJXvR4PFi2m9wPCRT6jk8d9QHHgrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hoD34oyWD383xExKQP3kXHAGGtDSd7xL25FeirYBfnzzSEVdmKTgzaBnWFgCpsv8YtgWwJfAZcGZSDr7MQhBhRE",
  "key1": "8vRHqD1mTs1SfghGytkkp2qtst4jvFRz8E8yGLr1xHCgna7kznPVXHiAkKJ1kHJoeGKEbNEba7wtmqB6kiG8t9A",
  "key2": "5zCHqBtJ1w429ryL7ZUNKDd7J4mABcNwtM221eo4fNATrfugKHistCTVXkKBAcTMox9Tv2pac3JX9ekiogiPrKLL",
  "key3": "2Wdod9SVh1ETjNog1dc8t4LLee7LNMLv6f5CSEMuGvVKw3YWumwmsrfvVYB3h6QVBUQuVXFJb7dybFGALGnYXWvp",
  "key4": "2jJQM8Z1g7stgQnyRBEfAmW7BByFmJJRVGFZbduDXVryMA6cAcAkLdaAnJ5YHEeds3W1v2SxRyzTZYT9o2TssNBp",
  "key5": "3bb7DaiVr7C1q8CieiwzX9HRQ7a8e676EX844KkNjC8G6ZRnCydzrkQYcfYAmGAGqscqUEhpH6BJDcK5nXHaEMLU",
  "key6": "5fRwczFcAdeU39q29sphkiUw7jkrYGZnYikHsLt4gLMAakoCTr6Y2ZuoXr4cPWeELtp8tneAgwD2jQjorTvi3XW7",
  "key7": "2o8sHLNmxwubk3Lj5TH2AgH3ZQ9oCBF6Bv3i6MjF6dSQS3vF3H7StYgMcTSnUQgdb1j8nCKirnrFsvvi4hcyEJ3E",
  "key8": "4TxUr8pazZT5a5BtC2mRBFqUdH8gEG6qao6Wvc5MMZpHHLbNWHmaKXfHK9uG74kkekpEKfhwEzXgUouFSo7QyesB",
  "key9": "5puQraxpqBtU973WKy24CTxH2PGkiCxwpY5eLXGnfvqUE2rVy8b7ZvZqZZnndqsBu3h2oM4d6yN9usRMSPWP7YWY",
  "key10": "4yhtwbEV4v1fGb1moH9eZXNeGKNzXLVDZVE8ggfQSERcAxDkSaD4x1htTnRqH8cLBoAWRuehZoDsfBYZu94djSzk",
  "key11": "3Lxmthc4zbr78gAMDrXpx1fiSsK5K8cvbJB3rJJ1JepSCVLaHG5v7kTpTPi7Q8sr868gjZ7vKHv969wHr1Ssqbm",
  "key12": "3tj3SixewzdFhjQvZGa4NtoMD6MDxQdCc5qTZR9b4WoBXxkwYdRZsZ5F9Q27e6SnGFQS2Kcw1ovDyb6mBArjQy5s",
  "key13": "2kcRKARRCT8XwYCM5RpSr9oz6HWhWDtvDrjAF6KWnGAkPrNDP583nXg9PZy8v4FuVrZXHBovXoo2orC71ALrBERC",
  "key14": "3cm8UaAL7daDoNhGp67rGCzD186qCsqq9HkWo8npfhQKqCZv9XYeprBv1omkFgDtcRedxkgfxqnqeZ4y4f81b346",
  "key15": "2VYP2zNKWaRuXvmkuvM92NBRfQoJb3i1i7ZAowkUkDFfVFgsMxiSEgSKo1svhymGwnMFMmDiiWDP2fpxGGZRsNmv",
  "key16": "3gybuhjuStLGUEUnzFSS7mr2gd9jhsTQkP6Bd6ky9nEA1Q2XCDCS976CsVFQesF3chUrTsb8knMYkwyJgWDP4xg2",
  "key17": "2KzctocncnWmDZQmGuqWYXsg9mzm5ryWRMSFrT4w4auJyaM6VuGGmjzsUA63mVNK4U9wrjhGPaiRjUVVaF98Vtqb",
  "key18": "5kSshAgqQEpXvqrLg2zPDAn3wvHmFCvtw1meVMKQsa942R8Guh9ABqyYs8ZCcSofXzaQ1FpzvcT9RdyMjko549tU",
  "key19": "26sCdGvjHHxq12Gr46u964aZ9JWTc3BmVg4tsPgocijqog6gwnSijWsEYJzCfN5hWS8yzbLaU6vqJtwcZtK5RvCv",
  "key20": "4haa75yE6Co2AbvQFKhiMeu5fQytYG3YTJrWLcK4TcPLsFN3NF8EG54vYXh7KcAnyCcUv2hYogE3uE57eJvzr3Md",
  "key21": "5BwXCC4wzmomJdCPJ7oe9yVTffpsvqJRVC3Pj5aGH1s4E5s8mtVz65bBxEXZxrehmxmaiUfbi9zzBUgnvESEf3k2",
  "key22": "2QMX4YrAgBqy5EeEyU8EoqyykZh2hHZXiY2brnE8ZFUxoRYEKAZpms4FvjJoqmDkjFDvDby71qto2dt2K84GuKNi",
  "key23": "4eyEKGUEgmqX6PEGm9nuR6CcThMeVCVASvLpdMNHh4GU79bH89znqCghbdkcXfnFjuBSjVz1dJQabTaJdj4yqXH2",
  "key24": "7HF6VHqXWAX1hkPnsGXnM3EELnG4c9Yne3CchaA5X8CzA62er3ySCiVxWEDt3dmg82VHLJCaYDfgN1LpwcRUfMb",
  "key25": "4k8gs4yxrdcrQeGGpXNjRBcNzAX5TMK8iJgdKZVzMg9ZjUmQK1X9iKWBbu63fbPS2Gi3TvSjYFHdQ2eDNC53VLgz",
  "key26": "GCGBxnbcuzzW9ySBkYmDxA5NxBdudQVcxPgciRSAxJRF4gAX7m884fDBAWXnx1vhPYno4YDCBs8DFLrdro1AkZu"
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
