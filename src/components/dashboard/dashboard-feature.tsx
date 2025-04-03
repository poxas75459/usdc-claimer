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
    "HHtBYoyb9o3wzkRjnSE9BRyAydPvJQEVDHxfspY8GRZF1obDrvjwxC9BKoSgvpYHcAFJ62L457i49XAQaxrVS8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ty1xwApgJzJ43XHhHzcPD8EzaZiFswaR75SRZe3PHjPNuVWxnAiakubGtKMCnWsKKBSnvecCzaP5UTZh69RDSuV",
  "key1": "4xJQxYbqcXZuv5xeXmh9Fz3ynYqB5nxUuDM6YCoDbwWWq1b7tm3AodkiWDdPQQpbSBrP2xqdqMk87PYULVN2AMXz",
  "key2": "3zNoE3ZFNKsMVttrSjoqudB49ArrMrjmPnX6dFhG7xoL751roRkqxKpAVrKSmurxk6DvHcsFLtShBGRd1aNmDAS2",
  "key3": "5YuMvDkTXswh3LtJ4D29mXoFXwKoRLScaRcZoeY2BDA7MdVgs78dQFFy4QjTmYvpZxTuZ2rZVrio4TFLV7mepk4h",
  "key4": "4MYxhMVBCEm5hvTeBLr7bw2i2avrzipnxtLSGZwHKBZB885jY5ywTFR8d4UVw4ruk2vzX6nqGWycjua3JsunfVis",
  "key5": "48WEE8dNCdNqVwiypFFDBAsYuz4nNYA6upBAUeAkhbkVvUbgGbK7zm5RmKpKj78MaMeTtCxKUC8KMkxUYA1YtH7q",
  "key6": "2UGPotUUqknXQXmtmgY5CqVbJZoHUZmFW5mhi6RV7Up19HHyB3cB7CU8RCmrQMhfitQCrYpw3Gxq438bfCDKuimt",
  "key7": "5E8EJkrfz8PyiBnokUhUEcJAd6z3aWryFrE97kfgg4hUYbGs8ZT8Mo24E6gncS9iZ3HMx22paz7QKrtKT86uVhWT",
  "key8": "5Bn9dgi7He2Ec2oTetCQ1MNKKNW4Yxd1VgPzvkKiaboqkHba3TpeDN8KUekZtTfKxEKYG1TunmdFL4T2eTgNmVqx",
  "key9": "2A79KcQKkpUedETw8cmE4iSDyoC4zCaumK83ENnDC5T32XQKW6gBLQgT8sK9pkjzNcHAQK6ktof9fwPLmD2yMzZv",
  "key10": "5ujvo46vfL9wzNigZDZaeNUwTeNux7SfFMBD6rYZ8xPVHDAFKkNfj8bhdXxrycZihb64Y6H2KN1Y16JssxHpcCZq",
  "key11": "333hfcvX6sswW9mhsFXM2hfM1FbpY4wFBGfoG1LEWZjtTE1sDv25pzphTV9KTZpP6U3fHwPKRcmay4GnY2c8RqX1",
  "key12": "ekrf4MabC2nknedHwTdzkE333ow9jaetjUP1dA81rLg6hEpsqEgabSv7hMUphw9qyxSL6oydkDEQN322Xg8SP6q",
  "key13": "2L9ZtA5GAQdsUVRuR52Gz5ynbyhLvMmaB4fV3Rd3C9sNvhgjGZsSSdxHCiQUDnZpve5GtP7TFBkNzQMZPKnUoURC",
  "key14": "2RJFhZKwzJkCXUcyq1x7gLX7hTREEYszFxptN5bHnMAefHNQZaiQo6nQgfVVJZdStNfRzyhU6GPKbEy27NkdKu5i",
  "key15": "4pKiXK532sqHTEqK8RwLFnysVncJYG2KxrRT1BoSUTz7WxMaUjpAbMaC1dYz79ZE6oja1ytnQerXw9DphGF82ySL",
  "key16": "5qc6HcBkvutmEpK1DkApE8RK5wpjZ1xzG9RpTShMWLEJzttGLT5xnDgTBC8YvfMfq5UzoVV7ZVi1iRm161YdBd35",
  "key17": "coRMcSdRyMXeSng2CRvvMn1mKrmimDtijmLfjMa8uXZVVViG8BKbh4Mm8iTio5WgzuBc2qmFQpxvPiFJdjjJwQp",
  "key18": "2EmhkLyHR9wgoscZATxDQLNMMoyWWoo2JWsXo4jkMey3KjeyLTfnd7P9SZo5WGh76Z44FTJ9TiCEZx1zR4qjy5xP",
  "key19": "4NpULwMkcHrzMvh4oFrAVXD2ewH2nRA1ucgTpznUQWz3vk8GtpaNNW7FPp7BxNSEo4DjXmYeum4V65o8weJoRNvK",
  "key20": "5dEtn6XQ9QEkjciNcwhdtAcpTfbY3otEwKtX6PuUrVaQNzAkHP7hsXPswYaYnFRtW537SkZEVbSL9C1V1F4pz1SM",
  "key21": "5Wd5RXCzJCRnuRjVSf4ouWz1pHjYFMSJnTN2EwMcM3xA587rCcN6KBM1R5wGQvjW6AnVvpXa9tzX1Wmq4XfCi8gF",
  "key22": "517vkPbqM37JajXcwvitwLDX7C6xVhn6aSiwztenjqseEsxzaqVA9Xr5ziquFbCXXGFKTPEUMaHEEumfkshdBZ1o",
  "key23": "2ge896eRKC2kkduLqD8x8umRXeGeEwo9jQExG1RjmtzsSsRmdKyAD9okZ18yMWZNfmHyHTQYE5xyZftUpJH6Xbab",
  "key24": "4AVE8bNXzw8o9Vj2uhA5wZPJME5e7gJvNhME3WTxG7Rhb7PV4vQeSHhC8pRwWyjjXWCTmB6BYGsPqPy2bHXCfbaD",
  "key25": "2vtXRu18hD7YUe7yYCoHKotGDi4i7SpaDdZ3qE8MoAn6TMWu1f4eBWWQ6n1LfGhwqEgob9SJGFRFTQQgAhUP2JFw"
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
