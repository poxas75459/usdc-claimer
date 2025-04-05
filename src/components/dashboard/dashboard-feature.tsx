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
    "4ofDMHTFsTM8C2xoiQgmArWGpj5a28Xd1wx3VdK5N3BktYjFZ4aix2ZRbFhcurUcC99Mm66wgxsXBVUSPFKqP94h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtesMSXFtqk5NY1VYM2Lk5puSM7LY38e5hvSd9SVrBfTEotENt82PDQyCvuBsGa9PtLAAwDcxE2HcAxk3awp5Ux",
  "key1": "2DvbRALcpQqSPwU2PUJvH3efJSMMCGJC9d7VQJkteKvKgfXXE8W4LaXUqDooHBFb82THqXkTh9FVrNuZsRKvzCfP",
  "key2": "3Np5hL5AAQgqvVryA69XENvsQgoKqoFB3EXNDB4138Eitent2tH7TsvttMk4J6ob7ShnGijzVtiSZHxYJux4A329",
  "key3": "NRCouHs3Lo98mNHDdrgeJCyMHbRLdsemUftGHaGnQwGLu5WwRqRNmYtrknNbkgPgmo28ACyDEqWbzfJ4eAYY4Zy",
  "key4": "57Lvzf35xPNaUnBKDhGCucpr1TC4chhDi2dPd1JfgMCnCgTCfyqyHCQ9d2nX78s4vDQJF8oiABkJzEdHx3QL3tJS",
  "key5": "UPufg1J8xwXEV5LpnKecXtDMZy1XMfRhtnC4WAqt9QDmSMB33ywdXWwMjxXRLqqAKB58E2Cx2k8kYoj8VQEW4EQ",
  "key6": "3Jv2BMr5FFAN9rh7GH6t8LsusxvJYuHExx1rP1jtpFmX8rFLccvVqDwoDZbYh5dsAsY64ySCZLEBGFXLYxGxNAGu",
  "key7": "21eG5AygjSwHtdwkcArdyrmcx5PP8Ff6eB42nf2Rb6DECKQc9AS4x9MjGteSaNajPPtR4BwbgRHW6eK4YsC8XpYs",
  "key8": "2VpCfKmoKi4zDpuLzkCz5cC97YxxohNNn4XHP9V51afff6athxLv83k5JTaXcs7e1af1hGyUhrF7qxnhbQBaTz3Q",
  "key9": "63riXd9pG1DtHdoTWEyp23s3ZUUz55Dhs4cK6e5PUGXpYcKkHnaNU57U3m84vLFBwagyWwKMRQXtFqs9WakvBDKr",
  "key10": "4bAbb8nkJpGiYBFKkWJjpkdcqDLBtvq6VudJxsKV2baqpuuvPJo7aqNWgYVCKvkeoXR9mr2ycMuvgGTnLk7WqEmw",
  "key11": "3eKEtZPSwoegXVeNtsNusw2SEZn4wT5MyVfvEcDtREXi7vuLAdGTye1ufAXiMGzbUnRWALkVNzTCyXWNgjzMVrYY",
  "key12": "2BsKDh2hWgW1kbn1tEtLapG64mYFc1TgVmXT4ETJB8GBvJqwH9ydKoXWqp8nviAAPrRBCWfBm6tbYygWjpMaYYt4",
  "key13": "8Ba2b4qQeXkZXc2BUiFvcpM4pbC4uTtfU87vGBsamQdTKqQ7GQmnUFg6kTTRGvnicvXFiFejJk3NDzzMFH9MuuW",
  "key14": "W3L92tH6DSiDwgyQ8GiXqBuLEnvMYvn4Ku1nFLGHAp6M1DdaUqfu7RE3kWHqDGx1jV1TCpTPEkTVG5cdjgFEDe1",
  "key15": "2j2y46vJFX3s7ixnXpU67B3SSPsCowLYvg2JoLRbJbrg1bPf5DXAtiqbUyUJN7G3kCNa6ty64RWbVDDQQGchXp8P",
  "key16": "3JLfJ46NvFUVSAKrQ4zqdb4PKVe4LV2TD1GRwwWeqCFmFnejRxj1hfqrjDAURhezwDaPU7ERkHXbQUzeb8fJHk49",
  "key17": "s3eSuGxqCr7t59HjWRUDMM4TyU9Rm8BFi2efiAPDFykciyrZ2skSmALex1oZo183siVdrB2GE2SPyNJPZtMzvKj",
  "key18": "4BckqCDQsQBunvFJPiTmaN5H8n9FDa7vVHq8ZSXPu4JX4gNpxVCbZ8iVQTrMvKW9eZVrw299XihYjkSwgPRFcphD",
  "key19": "2N3T6XwbuJ1pFUmXWQu8Cq4u1FpyjzQ5x5jqHgW2RVsvXu7vSTqUwyESfZksD6b93NZoMh9iZHJ1m82MpKUuegGp",
  "key20": "2bfeGQRg7NQ1wP5i6zaNW3WR6owmUT3vRMi9xX5fxbtbxJEE9hu1xczEZ5pootFe1rtPWGSg1m6g6ztBW77MjUBC",
  "key21": "5ZdxvUKwM8RzogYXHTtfSZiNuHtwgL4Wph33iVbGW97x2uxdBs6XrFbbFPX3zXNUVbi93H3yBbCide5L2XAK9ByQ",
  "key22": "Lw9e4JLzdPT5o5egcFZ1PqRq5vR9iht8LqBkn4gEFs9LwAVY7HH481BQZFc5WDe7WPeJ7XBAwWZudem1Ui1UdZU",
  "key23": "5c5WKwdor6CJ7R3oBeUYwjJDwG3VvKrqsMpRiXij8ATaj2wtpo6sATj1puVX8ofcmrGMxTnzqQp42TNwyWBaV5kX",
  "key24": "2ay4gUzwEnT54JxMRCm8ESQj71ps386zyNHkamGNVPASddYhWdTeitHNd9msixnm4AvCf5aMXZXQsrwtUEKgrgg5",
  "key25": "2vMK5mwK7iaMrtQCzUgRDuwerhhHhCqSUfKA6L2iCfbDvg853C18qbXV7hcv7QdsyhzKwsoczyK6nTXfH4BxbPAU",
  "key26": "4RMfRhJmbbAj7QyZZnsqMAQMVA8xVCtbVHtxQg2uQX8nUBrKuMoRhZT1quDHheCfcwcqVKR1isxMX8G5cZk7inxP",
  "key27": "4BbmKTDXXsRKcojjLjasnAHBAQk8TA2ddtRWi65buvQhq1ewYJMaMzEZYPfsyPmjmBwUZ4KjEmVoLiXXSQvhEZDG",
  "key28": "5gaFsB3cPg8qVqrEbRjVuKiruo1dwsCZxwdFmB3Xe6tkEWuRNvhZkSs4jfz3mn3r2dXRcswyhZk97SUx94dVTySo",
  "key29": "3p3qm8cJ1AA6hEfUYrQpqnkAiLXgQJwZpaf7YDrUxKhjE5SMewJLXuF66pcdqQn4xDvCNn4fwpGHYqVycdkUPenb",
  "key30": "5L2rungKwjHHxFonFtzxpeQjneDfi7JnDA8f1PNw5C7P1UANq1syFsmdJ5QaLzTLVEC99RnXrg3Z5fCz6hVhucMd",
  "key31": "e42Jz2zWXrYv8KVyiDbG3WfUT6VsvKHw5vb16NcMGYfatsyF2fWMmuBfnSb2WAu9JyFJ2h21i9QwkpcPajAKoGU",
  "key32": "5JJpmTJ6gu8oyKseohsxS9LzqFsUNfTjpUeGJqdwBteptsKtVfJxNU6qayDzo6SgMMMEZzygnMRkeMvRwuCxozFW"
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
