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
    "5WQTkt7dShqLK6mDYYq9HETv9kedPGgq72gt6RjDAJzus61mz9wuUSZ1Qy6Ajhf4TGfF2za1uEXhjyi3dCCzEsyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5fDACHGnH8ntyrW5URPwd3exaW8dK8Kx8rrR957fB9qY4eAYBDheyFSGLnjD14kQ6ozD6YP2QyJjKRorwYMtkP",
  "key1": "616WosM7LUJYoJxoNgDNZY3ApjSpbf8C81VXEkmaBoUcjncS6ErJQ256FhPDkmfaTUHhCtehGKcdthWVnzscapvr",
  "key2": "3Du1BcRcF74oVu3ixCmoEUju2XbR4UVxKjfeYVnUi7VT1ExP63sSziypiUa2NWDX917nmpQWyT5cC1TtFDgWWCop",
  "key3": "4dVC1BEeNE8NeKYBK9UQxVMGfMWsa8bSDTEdxxYyiFCwBS1snZUi9snMQ6sr2bfy9Ac7wuHw1sf3Fd32p4VrKAFe",
  "key4": "3WPRhPz4Zyo3vHZXKpbmhD88BFcXqoBFAu1hoW5HiEZaeW34r9kkQbae1xJavhT2wMWVTrfEBUjyMXEdpyButzcz",
  "key5": "5M12eCuti5fZSsMFsPRTQEUhjo8zExBEHezQSWy4mcCSnhYNBtR6rhJeTK5334SoJLT9VqhqcCVFCRfXjacjpitu",
  "key6": "Cn7ZxPdFtseqURyuwre4ofnS1uLuSz8enBdT2Ea5rrdNQoeb2eqZpXqmkfxkVDGZv74qhVkpqvE72CUFEzBw1PM",
  "key7": "4KVcG1idC5iY2dDV4R8hM9mWwdFDubmK8YhenMXmrVKXpxxjWgQeSQjtoQL8KoQ58T1uz9YgFvReEUCCkEvMqsvo",
  "key8": "nT8YJGMQcFqnFiXiuR2MA89pSqwzemChx8D5iGYRZPWXan6hD3v4GiBqs36HacBG66R55bDMruRUCxpdbPxEjyj",
  "key9": "2b8rFHPRX2aE6TE6jnoSk4htisWNDoM5j6nsCDwDCHJmUygXTf7XfpZVcy3YUSwg4HUqNwRknUpzy9AS2yxXiSJS",
  "key10": "2Qh9wdQZrKMpPVvw3ThH4ruc8jqjGSKQa2TPq3G3nTPS8guowaGSCoDHKDzHHfHycv1MpJopNf3q4fjvEUdHSqaX",
  "key11": "tNNTqXz3z2NNBFJGzaZqUaRAzUa4A6S1dMWjP4PNDQGS3DWcAAfxLaLNz18Mejm1rgQtoSfuNciVQ3RDipkc8eP",
  "key12": "4rsmj5U8sBxT18qVJaRF84vkLarNmhacYUT9H9njLF1BXJ3r419hmH3ZCW8RZdcg8oW4akcpbdmHUgoRmASVgMR8",
  "key13": "52gV6o6rvh9i7zNwc1BSfPsUGmGwXnjwXV9ZVgZXWKHtTs2Wei76m6Fqq4n44DMLuBRM2eukKVWcy5UUzbPEBDUk",
  "key14": "5V5attJWkCqSuMzVniZt4jcHJsUakxnJpqBULgo6qV8A2nA95mZkXgJaXNanpvE2vMMYV3z3LmQodTkX2URqB5hd",
  "key15": "2SpqmBuM5tkLVCtm3Kd1N9CxjKomDHYE8PCLh2pFhGr7f6hm6Nc5ZfnnDbWK2a5EmxfqtQg6uSEyoBNQWvmvo2dW",
  "key16": "9d9oAu7PN5qG5Y9Cfsqbv4JiDqSY34Xdd4kugbP6wjDn744Bpqt6fBL4ap9yJUU7KfSVxPCthFBHyy4ubNKFdsa",
  "key17": "55tHFm6PLnk6Wqkpq818CfACa2pJCQFQuZR8Tt36ZkPvXfpG377UBbcWnzpLpR2NiMRTUCDRPGKQZRU6sJmRjJuD",
  "key18": "J6oAc1e4UAozQAy2WN4bFff4V9tzg9LUNEYn8Vs7fREzGgG1WpGvSWCRLiEuqpQy6nqebV6gGdJhVM5AtM7SRkq",
  "key19": "NHhF3oAm3ZjZU2N9mUMAUUDamyTiLryLJTNrkgnTCjKPXihBWaQFAQ6wcT4aXaw2yukMvP4T5xVc3Ujg6nxYydf",
  "key20": "5vcJkPSL6via9TZhtL6Bm1KPfesVRmXhb48fnu5VR7dpuTc2mvkwcjcPMjPBnHMZ1EujtZxE4W2hxvYbffZ1ohN7",
  "key21": "a1KfopUfuEDwqLpCD8xzwVBuZDhaFJKyfDnd4xZrY1vVhXZY6yWictQUp3CcbJZxyECXtt91GtYQHVBMx9HV8Pv",
  "key22": "4ipzB8B8szvo562Yrz9NXmQREe9CvBw1ozwbC491msBGuAuUTULq8aFQZufWM5Ci9ypTHXn8Bn3Rk8RXyBQaCQEp",
  "key23": "7pNnSHWYsbbSG3X4KJvZafqEkQSm2nzW3PDw2U9h8ATs7soaEwSFbA5T2y8dgNXZrwXgoFFNp9dVnqmVAB6vKYZ",
  "key24": "49s3D9KR6o5qAyqFs3bKEdqQvyRBBpfnTM2rJ76s14WipF3DiUsxVizpNjcfZHckD8DWQmDwfGqR3th4ynKW5ex2",
  "key25": "2ZbHXW2DZC8ut91nK7WcqcHCnwxKTxo6W7uSHZHVMZQAW1V6Eq5eX6Lg4yCA5JbNjFVDsNfjPuPgNfm131c3wVA2",
  "key26": "4GfkTdmBaxZFHZaYngbM9MfzYfqRmJvQUvTZWCy9pTD7MnJkjvoYvpgb6p3oi2bqpWTAZNK1nNS2WN1MzQNkdvpf",
  "key27": "2SqdBswtM2ZHXuKhWVCRNRfx2AfCyGdVNTDZt39uoroi8BykrULX7mp18hdmfZi28irjYUhHGSqghD6RAB33focg"
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
