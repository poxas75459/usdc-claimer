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
    "3eT37kQD58wko7FBwmujW7xeg8VsaSBcRbm46GRVsVv74yMnGomDH4rHT4U8hDKXdqHsRwduvm5rNGu1Xu6Hgr7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x29rat7VpsX94vRZYiHRgvJnjFGRJszmJ9TZ67ZkFGorNeg68cUKZQ1gnuKwjNKLyc1f2EDeDZjq57XmbdwgEXf",
  "key1": "CC4peRA8xPuenxWLqsq5UYXaQvtGFtnf8Jqu8DQZE8QGxbpTx4jDvuwQaHiS1z1LR6jTpVBePpMcWY5ZV7NBLAG",
  "key2": "3UHMNnrgnes1DabAbk6tCLytoPV9Cowcqm8NUFk23kj7A77dkgwes7vQAsNyDhGAaRn5t97UxfNdv7RdNWHKvkST",
  "key3": "5KqzAAeogh4tjfQ9RVXmipLoxaeUGa6cSoUzADBTB5yfZHV89nrtaH41Khiz2o1VCUcFJnvpfeyPCCqkh7mHKMVh",
  "key4": "2LYA4gAj4VU8DvHoAEGZUUvD6N5eoxHtuQjTpvCqptLoZTgpjhZojpeCwCNJweX5UYJvcGXfDby8ZLryPMqANLtX",
  "key5": "NYUsVFQaBYGfjJHDH4WPT4fpH3Z2JGBEfmB3U8otG4KQmy2qjujAnwjVRqygq61jsWKQZ6CYqbhuwo98XYmnY7y",
  "key6": "cicGpeXnhJVmPaBTAwohaJJQdHFLTkGq3zKQJ9tUtqCFUzsqbjnn1UfTjyrHazLixWiip7bBrc7TT3iHoaaf141",
  "key7": "4jbMSKkw7aVg1bCqwPEvAfLD8mYwapX254egtfXs2UCXc9zmrqjSKqRAgmYNEv7LK4ZaHMq7esooceA26TzVFtM9",
  "key8": "vn8LpC28c5NdetWb83otPfjtiYugd3AnqYKXAARNE1LmKbFmohNUfxddNjLKUq8snw7g5RCEC5wxWMgpUkXGZrq",
  "key9": "4xxDgBrRYVCnwYAKjNhqirTN1x9bSJHx9VoErLp488Smx3U7xUXd6mpjkeLwsWDYkooynHv3beKvEyGj324eZGb",
  "key10": "3a7giyUPvRbFRsXPuasKNCFKZigs8gYQvnBP3XzaGsdJLbkibU29vbwmADonwT8Gou17Cw1MMYF9PG6fM99GqePP",
  "key11": "2EGd4UJAUs6oyXReoTsmtTXrtX4X1wsPwX6wJRio8NmxcRwdHzv6hrfhQsKkdT4avnjHPYrxYXP8Ke62CfBsC3m5",
  "key12": "5qP3FRRwJiixF3R1RE4XKeGaFhYi1zxar72L1Z6MX4LQf6yhzkzH8fY3QeT7nEirT55zdySUwvrqfUcgfcBDxr6e",
  "key13": "3HTsYidLUtBupbPUBFvuirdyEqtYR1fhFgrVjvvbTprMuAe7c7hya37G1i9SWkdvkxj6mBippmc8Q1M2HgftXvDp",
  "key14": "5PTJCJRfs5KmmH9voJVNNMVE4TkDjnpb415tzyE7DAHkFfwnNq85YUKtuqFSf3djAcLfPbyeA1QL7VxZ6pvoMC3L",
  "key15": "62gPahBBV8KFkF1FPzVwhqvagQcmf2A4dTFCFMdP1KWQgv8HUDqqco6SXAvCwg6FSCYccGEgMxHZTPZ7jAHQmsBL",
  "key16": "s2uJMZiaB1jy1eQax2v3UcH8TDpvFnfCoE7mzAhDUmWKiV2ehThZiJv8tPfemx9oPPg4GccRfc5mG7aJu6YQeCQ",
  "key17": "4j8qTf8dnARR6CEtUjtJbnpf3denH8RsjnYkUcfBPfV3GnmXL6JDzx9vHajFUfpoogXgq3qgyXRdYhkGYxRVn1xb",
  "key18": "2tixUk97BJcBMDRuVCQnBkVW3oUtKg1pcpyCfxwf13G9GsKV5Zd5qA64MKt4C76Vvid9SAxUKyNAHeNLAfvQfXcp",
  "key19": "4Rb3oESXK9R2XHExBENnhhXqTYBtce6DfveGG3d2PTaAdn16XQstftJGo2DnyRBuoMpPbhKjehAjBQmUtKrKErnb",
  "key20": "5Rw91LfC7hLsms4cFUBGnQ9XyhreMZNnWH9cBKBUp4awuQSqgnrVJxZhjnQrnfEecRniT821iQqr8B5SYQhxbguh",
  "key21": "5kSNZznXADMTteMdNaLZSBvGR8diZvBnouZgfghqj4LSnKuw57wVJb2ghxF4JcUijt58VvbrDNttKS8DncPMUNSd",
  "key22": "4Tbs3uFEkE7MMjQVyTp2zSHJjvMFb9PLATiwrkAm3R7EcTHvy1UVMZ6ZJJjRZSvDJSHWVbcVW32pTChH3ByS6wYu",
  "key23": "5MKYmeptJm6oE6Cno9KoVNz6zNftBprVsta2UKdRZ9gVoZ9EvTSUcEEfsMbJZL1JpmBpU9FC8Ez3TRRyTCs59rwz",
  "key24": "3PHKt6o6KNoHY1sBdCFUBuioFyTXiB33c1zfRUKYZvaShrDMQEveLrm8LfgB5ov3sZY9NTAvhPaKNp4pZeW2kPKp",
  "key25": "4HWBgC1gUVvuBPzzgYYHRPc6LMK8PEfCa2iQMZi1Aehab3f6VyFCRLvrkmy86hKZmbuFRB6AgaDLwuCbW7Kd13PQ",
  "key26": "5QBY29dXhE5A4NQoQcCPQYcsSepnwtSTLzqKaUHwk7YMzDrntkSGXYkAYzAVpJC1rrrDFH3j5EQQuTWQGT4iUGP3",
  "key27": "2hwXRb2rnGxtDr2KixVw6jPpSEHoHoCG6SZUg5dMSgC2kQKvtq3VgNdaVS7dTASqqNeutVTV2CjADL5XfJyB4xoZ",
  "key28": "3mfh1Nmp2trqqt2fndt2Tcc9P15rc9HDgdGwAoXjJuke4xuiGfDxgRq15YBbZEDUeDED77cbkM41FdnJeW3KCfM",
  "key29": "2eM9X1r7QuVQouUG4h1ibLk7FwEhJFg4oS4F2NTmfx6uDW4vPkx1NuvWuSaZFxJVy68JwgexKwNMNViS44RQ6SXb",
  "key30": "4koEh9G8vmB2phJwUT6dg7YKwEGncQuB5NPonXmf3fNSbGKNDU52GV5Yj2D8rw5iKHfmUug2bYPUtADoxZZkUK5E"
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
