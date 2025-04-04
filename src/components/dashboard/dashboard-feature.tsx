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
    "3XH2E22sgeqiXZT3eoJHKAj5kzqMSNcc4ri64GenAt3PAT67W197yJcVsxJy5rXSRE2gzy113RC1231ZKEFc3sK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTdSV5QgrF4TTEgkFdLgov7LcRucUAGDAa7i1SX9gr956EcNJi2kvchyCi8w4BZaL6W3jm3WwuxzBANtXdSVN5z",
  "key1": "5M4dWFwVa6RnpYS6F3Gp3vVA5xDbcLu87maCCQFWVPjWjteegmfu5NGRsdLtWsU1cgyKemsGyy9uQEiGD6XbaJoF",
  "key2": "2bihjTPUAjdf157dRYhDJcRTDorssv653bbq4yfWPXWon2B6UmSzC1EwMvB6UfiWNoFyfeCGXLHWGSWEEakuTMru",
  "key3": "UK8cJSaSnnb7A6GaZ4GCVGDiELMtUZoGM4YcQuTu6dWHxAnKPm84h3KgAMFZv1g2vGwBjgXNeS3uWu1rsGwyoT5",
  "key4": "3Ehbkz7D4UK7yS3zA5jjDTNDXfiib8VxfW9sS8iUb87KAxxPhPgHZs3QpKfgYsj3XRLdwiGCwDSZzuam9eCC1hZb",
  "key5": "66ChixifxHj7iY8sx5PxbTG8gf4rPr2J4RPZE8Vsbz6rQpdh9V9DmP7pYdHGcNNo6k5CfmEdwrgd5Q9XhBGGb7xr",
  "key6": "4TbgrR9DttZyZgeb6EJuFWUVTrmtvMnC6PbUyNNjpf1L1DvQPX3VuPbVcrcDEn64pgvb1hqXXJWecAt6FTiKazJt",
  "key7": "4N1UccDTKivTiXc5LwJys5ToX1mAhBz8ZLD3w1pi1x6XdPacjs7dAxDq9NT4PV7mkdKzHoTXoazy1QG8swYhBVv4",
  "key8": "2A6wvREaGpt5UtHkuFYYMd5LgNuascU9oy7HmCWoFL26JPPMQi3haohkHsx7M4v3uegnNMWymNDAtRuTC98tPmQN",
  "key9": "2nmWjfwiP6Q97yFFf6TzYw8gDCrYQB3FtHbVVoF1BrqUJgQnmHvRKaVz568zYxpmw2FV1C9K1ycpFLcnLaHHZwvD",
  "key10": "5aRWFQ5UVjdvvpLqVMs1BbXJJymSBjH8Snr7kNWS4czynA9UfGkxg4LMFHK7PSLHrkytc4nf8B4zvVphxuD28rL7",
  "key11": "5ui6WfE9MjMncQeCiKoiNuS5eETMnoH38XGFpzMhSnaRWLx27CpCbvWBWxtnNdU23oF8Q5vFAhbzotAGL4sWKzAF",
  "key12": "3BXzYPVtjcrV5HxhHR13W3GUMUa9sGSDFnpXgM2X9KcTaJgZMQcjn4PLRhUBA4SWxv4xYd24uju6BGiJJbnQRNGs",
  "key13": "23uceY7oroiXpj6AP6o5BxjG2CggSSqbCHuSjfsMbyjuZ49dSjUmNqPJVFJc2d6t9GideyQ6E5TgL1mMn966Wa2z",
  "key14": "2FTSqqQ6ikJo2px92xL72HfP2jdXtko9AByRZBrS3YaWtudtKXdqZ3yYtLLtX2vydBLAmtSEvStza7G9WKXhToWH",
  "key15": "54xV1thHMfTY61S4hrXG9567rLqszrRsjihuXdxNQEtMVqXoJJ7z5zY2u51thinKqDNGGLx6JTDHfU2q7Vb2B2nd",
  "key16": "4nT6EidW9RzNkP6GxB7EjjQkvgutZUxZNm6VuFFKxEUh2soNiCbWQz7rWrXgy6s95prc16KYtggFeafiRzkoA1Xq",
  "key17": "GsZCef6qpCQZioGVMaa3sUtXxz1joddm8i1oXMeXKv1FoscXs4fZwpCNRgZWUY7iQbvZ2UgZr3zM1pAD9x1kBqX",
  "key18": "5frdLMjMyYBMyjBZxTyoRbzbKnyjxJ6JQuaZijRfsSUzsySicBjH9zNfPsUmRWJPyv3mhwxCgmdK6TEFvVNLutJA",
  "key19": "4snhpGmfpiMxfap6Msg5y5igYKJ4CYELhaXe9yfev6V5dcm1YMvvCJtcnnXdRY5GDpjixrgFrXxVS6REEyRApQms",
  "key20": "eGfFWLhoHTwLYuoCKCMsd4XLgUubgkU1AsiKbziSMKSSz1sepGiZSMaZN8mjVW7y9qjahpuKjodGyE9G6d1d5Rd",
  "key21": "5zYnBnM3nAXmzsQr4eoiaworEseGkiqpLPFmisXU7XgbfU33EbtCKNHokE3TPpgenheSmUJTTToEBD4cfgy3t3H",
  "key22": "eHpUM1Nex1XsMmqsAam3AwceMdn97B1yngKEsq225RLgHpFicopnaS8hkxgMhF9gGC6Mw7VArUWVYTcaw16PGJM",
  "key23": "3J1MZkwiKyjsMFS2sJJfVDrg7p8iHCZHu7kYy9mxBMbE6UfRpwhyS5j4sy5mZ9DVei5ZfPc7M3fYTLt3NSVGu4hh",
  "key24": "5ShKXwevpTDhKzP5PKPagSky1z1gyNEbyFbCLcD4pnovgxUQ2WED9yRUtEu4hEcDCzL6PiUDYTgDHN8qgHrtRXTR",
  "key25": "ehfDTU6Xm3eiM5fi4bcSw7NnNPgwykSqmLVAk63q3TAXh6sxLeachc8tdr5ksoJu39HjZnWnv35p2Geyz5ViA9P",
  "key26": "4MJsy8ux7fwmNon6gaxcWBbg3mqH6v6ffMJLmZkTs9U6zYsdAbSNb4kVecGw8QhaB5vMSkdhSwKMoAL3tmxLHokJ"
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
