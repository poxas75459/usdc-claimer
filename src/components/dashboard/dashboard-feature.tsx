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
    "3VdwNP8fpHWAwNy6QMrMXa5hncNkejovUy24fdBa326umfi1nEhXJz15eVg3ThogWVymPiQrfbmTJ6bu5WpM8ZqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAoysFpr48auNSBuksjMyuGKVzNpJHEvqj1YxNf6PuZHAFP16cL6Spg4Z61SS3bZWNCoARS5fDir2MfHekZqjNC",
  "key1": "5kZSYEcG1NmrJT5PAKy9VvAyTP5sZoUWv9tk2UaqmccnyDsaFihLvGTErNywCPLoFM4S7Bz3WmbQoRywa1Yu67Mo",
  "key2": "4YYdxH1VjMHt3tQnjYNmwRn5rdyKhFUrzDpucg5mFj7ceXMZmKPKHAdtsFfgT155SjsC1kNDiUqE7RZJiRbMKFEX",
  "key3": "5YJqQ1qzxyZWByBJjNcTLT1o8SqqbRCVNG8K1W2TGTjqUGLbsjMKPCEgptGjEkoYNmuWM7bPwHvvaV27p5DcfHKF",
  "key4": "61VWKZtR1oCHv1y7XHfobwtZ5PS17xzve7rjG3BN1jyNkpK9PTTzxQDjyK1td5omoZGT4p4C1Xq9ufo9qwoWiZct",
  "key5": "34KaX5FRCGawfyz89fzonFbY7x3UDuW3MHgt3LVZdxynnUmEPkpZP2os4Rv4b28uQhMdNoGiAV8VzpGdQDHQtQxm",
  "key6": "5iFTHU44AQotPk529fcMYMBTzE8D9gNYwCHkw8iiPwgqeZmjwx8u9HgL9Y1RX6XfYHxmCfJhCgLCtLGkpui4TmTZ",
  "key7": "66BCnMnEdMC8sgrvq8a4rs4vVEVRqXECcnN7ic6UcSdrhLLTgMjkPo7srkMVG7uGZtUgSNE6Hr8kMyf1GvDmz6k7",
  "key8": "BQCLkJUW9yqs86p3nMjHyf6mdCvfd4SG9G6X4qQ4WuJM39RLPYotDsggdq5HnfajuLi8i1mm8iFJvnkSsCvqQRF",
  "key9": "3A2TkrRoQxQA9MaxTasCgH3VydDE5CVgdLEq8r47TWVXvgZwvpbFUry3UsbNPF8jGtzoMcgtwk56FavWZsdcqUoY",
  "key10": "5BWnA7ity25bLtEeMakfF6Be1nS2mao8PUvHgupo5CDo93EkVpFavenAHeqg3oUDU3y5h6qMP54ZJn2MUPxJwzrN",
  "key11": "4r7GK4WyXiKG6VqYYnSPnee3CzSFMYVcihBTuwALtQUBnYrdshwMBrZm713cuFPFfyNMBDmTzkY7Bq3oAd13iLR2",
  "key12": "39b3gDk5zARfqR5k9h5s9LoaxuJKf69UkkEvHYC4E4q4Yb2EbrnyfKfPXFe2ze5YNnqAaB5om2oCvPttNsHQKTqG",
  "key13": "5voNetv2DXiuCrTgriEQ1BntZNMmMMWAR9m12chYLinhpM8K4kForkgTRnhH1AKF55BJUeJwcsn5QEiNPLkMwVgV",
  "key14": "fynEiecTinJzZmSeBXvXSnSMkTgY3LRgXdxF8jPyLbTaXRba2ZikuP6HmNE5jjeQxjj4j2dSCuNjhrNi1be3F3N",
  "key15": "4RuEtUBzuXJ9uErMKGZtUTVCKKAP9czcE33kWko9MEmGd9dQ498VcSzcXXwWLE3JYaFGMrXMrLuYG5RVUo3S2DRC",
  "key16": "4kFr9hmYgpEXevejFEnAqVdc8hGWDbrrikPYME8UUem1Mf8WvogXUjypyjgY7knoYCTojjd4CYR6QokePrmdJ2Xv",
  "key17": "63SfpUVD5h8wpQqHqBsBPFGNr3cpYuygqkNz1gg8Lj9erayTY7b4S8KczfiKdmR31c9JqALHR47XuKoWnw1LiSv1",
  "key18": "dkQNFBabXABw1CBQpJxC1TVNyfVerXcWYSvePrPsTsMVxesc1x1HGNZo3Ra5sDnsswi3tUyDzM8WgGcMRqQftNh",
  "key19": "2776pvznup7CdMQTyZWWRpTFW1MhnGr2ioGNVSgDaapciy1uAALgAZ1KyBSkwd9zUh5joeJmLmJBEuVwXquYz128",
  "key20": "5ax2Hrd5L8tF9dcxgkxw3mm3AU736s8vdLeEZqfNEt77NerJULEuouQmaXBG19W9WyyForxmeyVEL4TrawR9cCbX",
  "key21": "5Wht4j4iV4pFc989uyo9U2mraBupxHBSqHi23VaZqKGBRpwGJUiT9BBn9Q8MGfoCyvBBt2L2MeHEJuoTCuEWEpm2",
  "key22": "R779ASdVJ8CcCCu6JQDAc1TBNgM3UAYiGnU2GeDoiLJVhvg55h6RXVgZkKPhNsgdLmHyWUM8Wwtagpg7iuW1n52",
  "key23": "2jBbnzBxjupVhBp6RNVVry6GL19e8SGXM5QkAxxQiv26sqTJV9HdNzyK3WXbzCxf79YqnvmkDK838h2GkivNKYt7",
  "key24": "5V73gPzWq4YTxrJJP7C71MFFg3Nt47oUkNV1dHqXJaUtYpk3jUzjidvtpXcnP6gVxxafHkFiJJZm8gVPuuBGMPcd",
  "key25": "2SrJPmfX4R8cqsXJdAudenMQmztnKLpNxB5zhLjuNyvLWBntwd1nJLchixDaZnbssCyaCsSL1bVABBLZTX6rx4MS",
  "key26": "4KVZMvph7fFMDSVRRWixwVsUXgV8qJvqy1F6SSx3b3wXh6GsWqwbUnjL4AiBCKS71MA2EXMNHNyMu6rmUkPRqEfA",
  "key27": "Vxoi5pyn9UgjNzaA6rLxKVoWKbjWsWxHDa8NAnZPGpVXvMW9YFDTDpJfoXqoHpWSCijKo8YBs9ks5anM4gVv3Pk",
  "key28": "5w4W1yiR9A1pgnvV8cSpHunDi24fRXBtr5i7H7yJ4JR67vRd58arG1gDXespDTiqZnE98dkLmTcvLmuGxMK4DrRG",
  "key29": "56H3C4YksZqzgE7ik5frnv7Mkk4smNTZqtkzAc7UcRJtkctiHhjYEUtjtvNp7RQGyUfVHYzHBgHaVFsk8EK9DQAQ",
  "key30": "Koo9QigMdaH9fL9M2LhPnyp8wcCnByFJBXi4k6HD2zMiKmGoEFTqXJGhvvaP5tnEXpNDvVyeLVtGd1DGGefhbxt"
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
