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
    "dfb2uhDiwJ73uE6dHNf1AjbkJRsL99CioaTddzhoUgAsjvmrAonW7YxwdFZsjLw5E8TN6U1pZAqv4UqTfNSK8N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXUzBVuxZr2hSBkRDdvDjvgzTn3DTe3rZMwXMrqpSV2Dk1ka1d4U5gFprnzYztdung8xsQiF3a82batQx8cS2Tj",
  "key1": "2c8WjT65e2qL4ShcTZDxtYy89inHpHBMZshYYRQj3eD6t1GE4U1WjRmxgPwMfwzZzaQLa4wma1ZQeKjMZMvzV92d",
  "key2": "4DWQ7JeBL59FtYMbZMH9gWSTLnkHP7s773gbqnhW8oc27UnExPbh1TpgNH47QDhwnKsBbgfS6PRShd8nP8SzH4cp",
  "key3": "jeYpSgAwwpzcbcwDw4r6juicmWBezVZTLy7NJMftXWwjVkgVcbDt7jsnBmRs6f3pEo5xXyJePxiYk24GCkHGUdu",
  "key4": "3GFZiMhXP5McuqXcwnEdX8da7DUptkpwvvLbJ3iQ747MztTn4hEjZebQtmbfjYJasBNRePySc2QrfMnKwQj6wi4A",
  "key5": "6qVzWx5C6S3auQnys3ARHSEdUzAaUTmffGg26oS5VNxkcPWgycKtvjMXzgvXY5Hk7xeAC1nu54mQ3MsZZM1ETFY",
  "key6": "5LSwpsWhi1p81xtHeRwqF5b8i2JnFqtFrHebp6sztL5EvSJhbf5k28fymbttmBH5XfihA236kdhjPeZESGt2pJAP",
  "key7": "3pFqh72bFNBQUHPt8FUNzie89YDoB8gPMoAiTJCfaqZZU8Ap2irs5fqGixdwAt2XNJpB7aubfzgMmnxyBr9NQbjb",
  "key8": "ZNZKZ7QDqvfx4z42NnSEV46jSeZTZ9xpFmpnUg6AuEM2bt2fcrr5RVTcEsKmN8nmVU9mjc8Pua9vcW3SBFcESKH",
  "key9": "bGKKe38v3qPLauzTp9FkP29xvULzo9n1L3dk7CDYCJA2SnRH3zyuE4kRTe1DznLThMoQxQ4Dq1uy9vNWpGVMvKq",
  "key10": "4gmq5Nz9xvxnJnbBdsNTKpcXWQDrjfUJZ8oWK3us23mamL7ykdoSMHC26TY55xT3yZvq6rXZxag5tWGWkD1zpXcE",
  "key11": "2g9seoRGhu1qmd1nubQRzDJAT8rm7hnS93hadVFxonaA6dCmum9GUCCZK7esZz3KPs9t7fZLcivskkQjoF7R2Wct",
  "key12": "3KzfZUxzK2cLZGu41gCvaWh1CUZ8vPMKf4GisigXYPYbJWdtT7pWXdGhJkT6hKiv4LvxQLAma17aJwgepVPWkp62",
  "key13": "5RgfecZiKiaY6eaqHDAKKfL6WtZKUwbFSRSGZ2nUtQ6UBBGHHYTREZK5dnRCqA9a75FpXPuEVBm7VzEZojxcbLuZ",
  "key14": "5bPt2HLnhfbxTnfp5sN6R9cYtcERvUBRPWrTCopRKdkVbw6euhuXdWmHP56Egs6uQRT3JPYbV2gm3Se8B9oGH7gx",
  "key15": "UroeW1ZNiNHmbfwQPYuo88DU9Tj3BnePAyAm4Bjg9C7ERk8oVGra581FdVySUhEDc5RRqwtDTLkRqdw5cJHcSiZ",
  "key16": "2LGYq8sYRmW5DJyG2PkW9mNeqprpgfmDoQMHgog1iFMABgVrYes9no5Sv1RhvB9k2G7C9v4GKSevivJtDCvjCjHa",
  "key17": "388FwZyNZDaCjHHktcBDvW5FbjjzgFNcmSSUCrnmzHceXg7QVS1pmSJzR9kYtp9eJawM2zFaQYQePdbTHLFFsQ8C",
  "key18": "4mbXJUdM75Cyjs72HKmQzizSNMcxVb2GDk6BHdMH3J1QB3tQNye3oWx3MUhTvK34YiPrakb8H59bbvJhzwTyDaMt",
  "key19": "5UD9veHmSVxGYDbdqR2gpghBPCKXfRzP7WLFZMM17xoWTPmvHLsnVNRBoN278n6BZ63en2WZNzM7i4d3xUi629uK",
  "key20": "htGK7tfqL5z5MTwW82C4eyzZLgzcRuvHuru7TcjCoXQoHdR3DCWYU9wu35XVWsronESWQdSSXy7VMjRa1b415aA",
  "key21": "3xRk5BAwKeAACR7oqXgwman1weiU5XJtnbtwqDWBn66Z83pgiV2M2Ffqi7R2D9nKSSWyh5fH5L2mGZ4QXAroqHeq",
  "key22": "3YoSbrsYcbdKJWoVwJQ5ECaFNMdWs9DcG9uqcUmPLXF6Jw4YQAVZ8pW3MgP6NcWR1HiGzaTvNf6SQzcuSis8NY2y",
  "key23": "4aFas1kzNMdBJ7MmGMvBg8TEwY3i7BpkQNw8rF5rhet3c6SfeFJiDgweQaWLL78yYp3BDMeTzVxvzDMcXJee8eWA",
  "key24": "2kuu1nTpFk5Q8tNTNE9ayWNgY91v7ZMbma3TwnAHCNXKM6xcVkMPfnK7WBXXZxtyjWcbno4uKMWsbK9S1g3jspsS"
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
