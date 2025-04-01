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
    "3F1yY1tvqEJvXA3vxKenopSjDcJQdGTLX6Vyuq4BpEmocLgJzAADZbD5oV1bX56PVTeKXHqgVRqQSKCwzYUpfo7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsF1EQynCkot9rEtf6542CnZ6uP4XBog2jspA6FQ8xriAHsU1nKtPKVjmyUNxqhL5zSuohWpmhzT7YpyxDctXbs",
  "key1": "46WaLq21P595kvy2QuuUtHch2ruArhTBw9LHAgWmk3mcYhwCF4vyARVFPXVBP7SMecfyx4Ymw2BwWHeT3Sy1grmi",
  "key2": "4UbFRvp12p3UyGjiwBZzJNS3sDU6vULnaLfVASKqKJmCNk3K4z2gJ5fZ2zrJTLKiMf6w6wjzexhoteepYmL8hstE",
  "key3": "5uC9uQZVdkxvVUuGCqX8AzQXAYDnaGnQq4f7KWUEmrZFLz6oqjzrMFJCNZRDjjdQfNtibZfDR2hDbySnLwdK1ijk",
  "key4": "4aDMHQL4n6EvEpcRHgFKwAubBswJvnj1agZFaAP6WgxKqgrA3qBqEBuvLJ19sHgVLdXttzBteL8N1c1pfCZ1urwL",
  "key5": "2fnS6XnfB6M7qCx7xyS4HkaU3pCDHknJXfFEjGzQQkH9BmNu4KZSWzbSmay5MUekRCtbkHiwSUWuMEDBF4miUA7p",
  "key6": "khpp3BwpDSNjRVaGD3zYmrVty8gzKAdiDsci4hTtEDZMncYQgn8HYdighMxW2PR2mW1V7m8iqn8nrQP4FCMW3Zt",
  "key7": "298ctTBjc1R3cpje52mxqmhXwZwxZSL3LuftG9nGUh3NZUqoGhrSw5EcXPpCukrKJCq2yh5wWchXwvbkeksswzz2",
  "key8": "3Mb31vnj2HYBsJRG5UhzVmGs7YkR2iiTvStfyBwg26dCWyZL67YAQmiNYhjNG36AzuZgv2dTuMP5QMiu1t2c3UkL",
  "key9": "5GPFeV115HCyAhwdrRwrn8CuPQB7qPRinBDiu5bSpHnChf8tBJmSMQ1uMY94sFAVxJtPXowJEMUeJFkxpDhianFd",
  "key10": "3Jfe5tdYcT6Apsb6vq3hZJ2iGJyxuPN6XQSUPG1gRYNUi44aVGdJZXUhmX6PhZsmEvxk6cTSyCG7FMGJKPAF9gN9",
  "key11": "21JhKycy4HHHLBX2THUwjfYzZnXLcdKJfqv1xRwevxnGZMZKK6h9aFiLwKb9ygQU58YwmgjXp7FRFCvmA8MgNTAG",
  "key12": "erfY7TQfMqBRjHxNHrRPETP7a6Gt8HctZGShLrKdS5JmteXtCso2gb2W7LVxE6WkpALP3yZ4Lq9rkXwzZe7XNNy",
  "key13": "3Zd2LMMnc95wNNz6LVQ6uDXXRjoEX4f4cckvQVUT7GuYLD9qHSvui9PM5EZ8YgnEVGHm8UT7XAA6pmEt5bC1SBa4",
  "key14": "2niwvLcSxJNsCQVKqwJgRcQiPePb5Xs94t9c3Upfd7U3tmo4V8GnTCScD1dLayXdcnrpyfuyP2b9Zc8wy5s6P423",
  "key15": "2tuLEECTbpcHN8hX7oXaUUnLegxFT1y1ULfSiBvzBgGB24fLQ1TRYBtEAk5XnwMDvTTWpnSRwkz4SDWrKnnMBTxu",
  "key16": "wYqNafTmj9zPRBvo87bdbKC7C5Sc9kRERvvjNuWJcifYC9jSDVfk6uTMAWowcmpT2b494pfXorqcVctuqnMBbrC",
  "key17": "5J2nKkbdo9J2LXgUJV7wckLY7wak9YyxyMoDQ9YrMFLj47NyUEnDFPh8VCuQn2BqT3PiVxaFw3KN4LPBYRetwt1c",
  "key18": "4jTbeq6styT6vebknENvA2BtynWhjv42KBGbBmvWNAyp2yA6qxh9M42zG3hSmJJZuif7KE79iCZeUuv9uLWu9J2d",
  "key19": "ttam4KyJe2uTsbRyFMfrhYz3z15wt4Nd9gDQE9LqC2w8hLi89tXNkX5rYJmP54Uwx7C9fvzWqzccxUEZ6gtnn2g",
  "key20": "2ruNLEJKCDHdKf6fhcHy6wLDN384mTrjS9sjuYsfnwkCbMjRvExQR792cGNa8dJU5JX53iKCBC66XF2M4X4XWXpE",
  "key21": "4P3DkEDruPYiC2PjRWMhGKnvYkY53Z3jhe7N2KxZCcKTSu8Yuxm1S4eVPiwfBZXzQeHCuKXMZstX1sgWs82Q1ZLa",
  "key22": "391qCCs378p81R5WvddywUVR975VHmCCK6GpPyuZbJG1TPS4zG9KsqrkdZ9gS6WADLrdDTUGMobeRZhXL2oxLemR",
  "key23": "3em1T6WFpdcnX6SJSNA8hd8mwr6DaUSeWiddLgrH12vTrd1xVxb76iUmuLzHtpTafQo6vCmk5TrkH4VWDG1vrq1n",
  "key24": "GrXSXN3CubVGRnQdBGDcvLQ9wGUsWqHDAwuX66jxrLz7ec6uHbJQorHWyyF3JuQubqFcdNF2fv3DK8qo4cf6Gez",
  "key25": "65sQT72zmDSyN1dCQGApkb8bE8NGv2CB4dvPJg7szkMZyGBMKmPC1NrY4zarekhhuUS73V4DFjGxBXobpje8hy4j",
  "key26": "3TpMzGz2Cyq3FNSspE6sLfqKts94gsGWZTEZR6SfQgdp5fahqNxPTmzEUd1ZS4JX5YUQQmdHaXMVWp5Z5Xfxbrey",
  "key27": "3mr53c5vkQbLAZaQqiDhEU1qA6p78pUBD6socqWcrKcxqRuXnACGRChoe8UUpoWwhXMsm8cEbRGnRSrs53JWPZnH",
  "key28": "3EgCRE7DBJQ45pb5pHpviWFguvVNRX9GUTyGuBSiW26DD73PBMjDY3QFjCw3wadvH3nqw4fMSvkzQYdhhUqYWhuB"
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
