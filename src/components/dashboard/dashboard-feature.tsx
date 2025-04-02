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
    "67PK1U2bNwbbGVv11ZZjF3NrrJ46j2okZJ2mkQpbTAsGJ9Z5m4Dfk3AX6FVXtFrNrKn9MoFsBoCBNHNQdyYxymqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMu4yp4KM7XmxzCDYcHnEwwAo9qCPpoQoN5fVvwmFfToD3cUZSPrmxPzUFCFS3VFFUiSKKZfZiBF33BMrp7rAje",
  "key1": "2k3M9LtLAznRjfJhCyGtLDtbZSK6k3cG97NNfD2h3vfLPrMWMTSPFVcSiogsRTGKZccGCDwKTYrgmPEmiN1JppWM",
  "key2": "Q4xwFp2gJbYnK4muptiyfSbK2qzH6KXuudbZemvLnEaLknYwc8VKDRU7fSA4DGe9rXy7reo1cMZcAgCxcjNUMBt",
  "key3": "3giw4VucUQnTLFLRrK3WBXu4kWyuryAs8rVyLKmptjJmDGjCC3Zx1EzY7AP9YCHsSN7D6Lc9YRSQXPZsoxwKndgM",
  "key4": "45VPAM9UZG1yN4QA22UZNHfMHT29KeHRHqhKszsXLSrnZKhnGNYCGw7RwBXwTSu2eDpbfgozQDEnW2cB1cbkqyYc",
  "key5": "pWW6xvJo6FJdrNRvcC8QMwUdgoQQ5D19b3TG8e725NkPULKtFzEaAsEoNaH9uyQrMcnezfHM8iGR7oLkDanK4a2",
  "key6": "3e7pVCKfCM3qR8MAkJRcbhxHnENXbByvdN6N2fam6yFheQp8U7KY8966GQYZXNisyVBGG4Hsfutg4X1FXH3brcMB",
  "key7": "5DYqbAD5sCv17Kt1q5rFgTiawN7ctEgysTYkmnvaBCWN9otKCkDC66ozhjRQugZWQBSjJHzv9D5dA7bmq4MiqVQB",
  "key8": "2uFjJ3cqRAi96yCLVSaKSht69iFKWRN6VRhn4gtbURhUovydGkWV5coe1jCXYCAr9uMxp9Xhtvpu91XoZBmUUcn2",
  "key9": "513FyGfwFR126mxSKiZDAcPWqzwM4bpmG9N7feMQ5J8wtpLPZBKK9mJHqFtBYTjV3qjR5A13Af4gLQR1etMcBzFJ",
  "key10": "yrybafMBUVP85wHtBc5NgdmvVqLJikCvutYjSCA54qrjhWzUUi2PTvH9e3q9LBFu9gJ7hF3HkTfkT7p75qSmaWV",
  "key11": "4tLcPshewMiTgY3FiXxNuMeTDkhPqc2tSicCWuUcyCtybW7JTuPwPtpk1XbEmJHx71eo8cg3Kcgu8sWyGwM8P5rY",
  "key12": "4V3WF1Br7D1xX2Us5egUHZi7TfYSK7ULM4KYHFDMn4u3whBpUfq7PfVSAEcJ4GFd2mFWWPWKZRwseeHa9HYKCJhB",
  "key13": "2zyEqM3FwWGTRXnuUi2y2Kgjmk9sTaPAj81TRRBQfS7VhCzrJVdZMnE4Jpx7kVVJLV9zbcG8sqBFzoFKh98zMKyX",
  "key14": "ySQfQbkXthrGzijcaK6MttVkJQRPYJGhHFniKo3x9fps51PnSziusD2GBHJXGVpoTEyG8VJWQz1prYiD31Tarjj",
  "key15": "72T8v347nYhmRvfzcnCu9phvrABah5NNwAXJ6LvvEyFJUdhoH7ZGqHSozrsbdUJMvuY3MGoijPKuDTvCsKjWUtC",
  "key16": "48emuLudXyCJeKi9SxhQyf28TomSeLYgwMPwDdrdr8wNgz1vtvx3XPSSsqWvAj8KtYDbSy6hFvEwMWPAMfSE84y4",
  "key17": "5tAkTRPwJzfeBSGEFeBbbQpf3AUGQ6yXqKqV6sBZ46qhHFe9mHCGbmdUkHx7ymMCj1dcCcqWNgSCJryqHa8YVXz5",
  "key18": "564nJpFg4vg15ZqDfj2eWCuJGqFmjdmRyGopH2Vw6pEPF8pbUvFf2HNxZUPieQkbpPkmEGNTKa41nfoHN9oPtAKe",
  "key19": "2xLNMZdq5eFehYGyXbwYVNKgNuVGm8KxVHcTBwgT8gUN2BAXGgqw2KPdcS7wg4zivXbNGKRxVgstos5L2jAebpQ7",
  "key20": "4MKmgM6D5ACnUjDM21ToR5qc6HeRcxKZLGu7ghRmhvbrhn92jpAjfKfCNWtNkarvmewZSCSW7k7g5MAutGzijgML",
  "key21": "5agyuWLjzF8zZg4fGa9LW97K9YuBeqD6Gqz2pprYAsvEpKrWF8AC8D4ioX5YAVUKWw5XnbpVySYDtKNFMBBaPsLX",
  "key22": "4ty2BzzSPoiFtM5i2cWkw1nscRqt2vfmuVU8ajk9VFjJcVX2MGvh5vub33ombP7ZizwXEdNZomEfFgwRc228mrLo",
  "key23": "rryUK4wF4MputQw9zCyXeKG5HvMaozPXHxrM2QKrJRvP5qn6darhsrjqpHx5t1JmeRHtnrZ1zJkFoBsifjBVtED",
  "key24": "hV44aumKrtD1VXxheDF48aU3jPQTcv92Wjg3bnHLQhxxZbNgFDauDwp3o6j4AS7qZw1GtZW1uzNnnmvwbrom6H8",
  "key25": "42LYx3dQENWNv2TEHxEeBn6tJpEQyzhxfX9PnM3BNgZYuaKHGfwFfjgVV8mRjrdqrEqs1mcwcSv3RLtk2ngwvY11",
  "key26": "2we4tozYFWLyqMaW9Gv7d3nzcR8ZYjo5exWyrzQcyLsExoa3Mb7Yxg7cmKGjDjKCYN3hLPhNrgABNuNL91xYNWSi",
  "key27": "Q8SHkYiLcq7Z2kWF7scg83HY78dPj8VrL6WSvf6rv57gBYYZUB5sZfdVR62H3nEiJr43xGqw6HEqAKySdVYPQKf",
  "key28": "4y5WQ9VBBy8kdnfhxKQjWe4R9nYp2Hg5diRH3azc4hbzqRAQRriA4VcwAoaEsyYnemAeHpw6mkxQe9c32k4Qnij1",
  "key29": "3k5digbMbpAaxyUiV5o8Q8WqDA5KwFmQ9aDcmMJB5QrKWSB8BVAmG7bo87hBddySmt9eiU2ot4swbcWhUb483Mqu",
  "key30": "3yfLt4rTwTMQ7uwGW79Nd7txcwsBDLhbrr6KhdHhfxVAERnCHAcs6pC859WUQLkxJMr1CbYUVQRbNbRFEYXkmg96",
  "key31": "3uuV7Wsm1qnKeLHVqXrHFMAvagL2L35LmUQrHbBv1rVAFQwQ7EVLZATsunyzp7Hc7P4dxykoRaTkmvTQPQpqi2m"
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
