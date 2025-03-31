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
    "2JrdU6u8E3QALfeevc9dGx312GYgovYaCYFq5uAkGTwyBxuKJ8TtzjdTa74DQt65xCfYEVZCtTSzjvyTq2FahhES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pr2WsrERSab33wxVigyivH5MrfNBMmG5ftFT62yjLmCo2s5s5f5fvLvgNaTLKgQPjeArQocMQr1SHhifvVAULb",
  "key1": "3uqJ2zz99Wz6y93EWZ92sH4qLA4iUzXPiqtQcaAmSf9Urdrs2eyLHsiaA1KAXjn1vBTPBAj37mz2v1r1KcGKq2W4",
  "key2": "WLfEpe6Hsk1KoZ7urdfovsGhcTXf2DBc3dzurBGXtat1xS3wVs8DsRZqYoU8LLLfMvpcAgtoCXgYrvJcqvLQRpw",
  "key3": "4NGMtRf9GSm6UNxACZ3ykg4BBcTDRxF7UWF2d4WQfkV2XHT2bXx9SWzWov8iAcFCXSU4yXJ3Himb25SyfXLoG1pn",
  "key4": "iqQjmpvReWx6sLUYrDMdr4hyavimKQfHwHa9s4okkudLuxnj3TMt1UnkRPjdnYS8v3XMqekXgNkuqiZiat3T55X",
  "key5": "5JRJzSfKWkEnmuiJwAovdLyqnuRZ8UyBuvgZwsbeCQnwH1xzND8TnK8vTAbW3dEJJ3hh7Xd93ahcG6G7NP391ayH",
  "key6": "7YMVqB3Fu3K46ZEpPgJ3soQvAW7t3tVfKyxmxXTPvGPkT4VVvTNXpJ2hHsG2RKytQJCWKAhbHSirUk9ApxTDcFi",
  "key7": "31pE6dj91ePjJB2FBSktYkU9DzqG18dt1iHV6UPhHkuEwwg74RHNbXuT6UhRjj9PZieB6So3MG2t7ukv22x95LRm",
  "key8": "3ofQkULzA2fx1aqRYMc7FmmT2K1FpB8yuwQFR3sbXP5GYmNikP3ro6RrauY4V1ptxJZEzjx3CJyGbmBBAEX8Pgjq",
  "key9": "23nWNpPZE6JdMUmuj7QM6hMuchsgajGjz9PvSEsDF2RbZVKkcBJMURNqvJM7sQoo1qFFA6VJhLyYpqmYYrjcWDd8",
  "key10": "3ksnKvN8SKJSVPfEyktqkMnASAPFoyJYCUq1aYXRde36c2xrBpm7wr6hmepojVY2HhyXcL3deR6Y99886wbh8LRJ",
  "key11": "2nhK3QAyzTD1zdedeueQ5xCpGGa5j8rEePrwfqZoCzzaQyjzioCE9Ewg78Z5rDVnuoaamj56mjVq8NSuPqRG7uiw",
  "key12": "TWCH79rFryZsNfMbxW27Kdgy7hC7Snc3qdTB5aFmpRd3HxjkDE3NjG8MrfDy18SoTeFYZxsyM24RasHHF9tyxvA",
  "key13": "2x872AWqyCB7PCV96Rnqs6eRLPqCEvXoAtGZF2uxB5BPcXhbgYdinYVQrkKaM6NUjE6ko49S9qZaYmVxiLWkuc2T",
  "key14": "3qncUKghP4g3zm4EZFUD5YQSg4T8Qh9hzMR3q7gobTEdeC87CUsLvnqmuTrbQMmytSPv8CNhDTvVeMse4BbrSwSd",
  "key15": "jTmUrutwGREoVVGf4kAUczM5o4NmN2ms8NH1wHovxSaPwydWDxurPM4jZWy3sNWzkHze8ejFxzVS1XY2hNybcye",
  "key16": "3wYyLBG9zJ6NZS19RbVdJgG2bVaon8GwPm4cXwgLJKP198giAQYAecsKqefLEmN8XFZdPCibAxLSfR581Gmne1fr",
  "key17": "2ZpQqunL5oKeStLDm6TQPndAkgnU7Pe8Y3BtQMLaEoA5mmHrDCktPqC7xhfXxgnqiL5TKdnRrijkt46gixtVBoa",
  "key18": "MF9m4Da1gRFZhBJpZYzQqwQ3Wu3sNbtrUMqy1eHLbFFguS6Yt2SjqusJVwbkNdhsK81Vo4JVJqQSj3ZGTen8KuU",
  "key19": "zd31jenso3cC4gjk1UL4XZjEsC6tGk5QpUwvhL4t1QEuVBbtrKdbfr2tzDzc2m86Pas4ix7qdcrTZstcBoskT1D",
  "key20": "4g5QFJ7Vf2r2HD7bCmW74K1dSPwwmRJcKHtHnyekMG6evVgpturehBC6zDzaV2rejbyeH4Ea5QyxyyejaC7b76tX",
  "key21": "48qPUtd4U5krfh9QLgMTApLs5dWrnQkR2Cw8xLwdeUgajX4qy9dfRKkUs8nkTpUytQ5VPmFpq4i9ND3FT6LqVfGZ",
  "key22": "2bYJQkNTNGi24yheSELhHDvD9hvSfxUWUGqrKGKcprhK2LZn34cjizZ9ABvoXZnvtHRkzfrNNcXqR3SFzGWZDEJL",
  "key23": "3rXponqLcUjhi3kkJAvcpHYssP6j11G2ErR1jpP4gyMxFEwCjgEvvQPRuTXjVPWRdaj6hxpNsEvg8Nj4D6zARPYT",
  "key24": "4XoSiuVRsh7ZPtqDunStwArwM9oC4ymH1WGLfAwrm4BYf2Rg6A9W1vaRrvbNJYKJtRr6rSh1znSicRu9RBqhGzDb",
  "key25": "aAMkQ59BGbCdRL8TKxVPzqPVVG9LidXKNtMcYPm38SnSm9TfDDLjX4darEsLEVi7Seqejftod23yQM11Qw1KHrv",
  "key26": "3LKmuUYzZQVg4eiVCnxYzoNUm2xVWf2mXspzLC8QRwUbcCtXxtZxJTo448j6WBnKrjMPfqdRGoR4MSpPAmiR1PTn"
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
