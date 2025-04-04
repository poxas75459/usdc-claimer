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
    "9QmToQmrPbRyzzskHVhiaRR9BFRJu9LYEe4WmfMBFtqHQGoXkbeSVNpTcLrbhwKBkqyrg2934MQ4fZshk4ii4hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKRB7231gf7rsBr9DPRhRjjnES222WFEtF6Z4fbSMhkhJjKSWRGmcDChh8pswEDFQyw7MMTg95A7vD1TprXjYTF",
  "key1": "51D3fBvNXnUuEZGnaq23QU6KxfDJNtKj7ReKDenBWPbJRNMR3pMfkEf5jAkmpfiic5q9uXiZVjCSkLQQKauFpuYb",
  "key2": "2nPBgLfP81LvgqKT5oma1pbVCQC9z2raC1mQRWPbWjytK5gPSmaqUT4cSW852GtfcfhSZT9uJGFRe9RGZbkiFsx",
  "key3": "2czRPA4kvzE8H2JNnRuyhWdaFVAzq5aGmNUthkZjnYkjVaZpUZDAAqepcdgcK9JhTYLQ3TkdcEZqedRZUzuHEAxW",
  "key4": "3vC8Kuua1eBDarN69UzhV45gCuvXfZacTfzvk72vtpVuDUirDYj3CUJeYX2qVFctAvaDVuZbe8EuoCXa28Q6YMKY",
  "key5": "aympkZ3aR2tRcwxQKb2gWZVvkFLtbzbofzfmC3yu5fWKhTUPrBao6wpKYFSG5HG8zDw33MhL3GNwbGgh9L5Xox9",
  "key6": "64LGEULjZcVPb1p34ikmuJpbx1rjfUhXWgPtat2QXEpwZgpb5CVUbFMg1CzG7htQqAEiTL1u4vsrQdpy5mML628C",
  "key7": "DDnyfg4M4E2wRFoMtzENAazkVbvHPtGUuiwcYHPQrLMwQUL4jfCL1XNNpAo9rRKeFQj17EZvduSZPkFLB39ALTu",
  "key8": "5giZTYY6rLNNuWgNWXhJ4ina6xdoqdt5YoUfCBpuFuDPmKRcebgVMwKo4vYs2icGkY32ATJAZFYDdvFDr27jkqtU",
  "key9": "5d9MDBmNA1KGBZnx1QZL3iNGi5QNaKpqbMx3Z7Pto8i7JkjiFKxTfLbCVm7GV6wD1KY4bhZo7GoKd6pUCCVEVeEg",
  "key10": "5eCPTqxYXnCe8zq8dbjkrpqHsfaDg74wwUpJKuCUY6PgtxmxwLYmYBufRi9U1y3WHmxdpfnN42AbogLFfMhcdwZr",
  "key11": "F8yHP2DzouL2aat21BddeNaqQWDvFgqRzdE18febqTjWsf5iHkuTenj7DYaHig4cJgHnSdLPLa1sCEz9nxvx4EA",
  "key12": "4Ui1W2ajABk6oYWLxnvdGgUYUmKM2UzqM4UJcsCBxj1Vrg45QjyBi8YnsDUi6QD5YxFQZuvz7zxncZpzDqxydFd6",
  "key13": "ivM7YzzBYcgVLtJvXGQBhGhD9Dm7LcWcA5pwUzdoyEhUTXsyfTyQ4Kf9Nqau5editQaw4KewgZgGY2FeAPybTp5",
  "key14": "3rk12cnEPV2jQtAArWvXNzzwY5Bv95ZdxuSAshzwDndK1QCicjGKARvwLyqhJho9TyDDt7iSks2i6HZC1WL18QGK",
  "key15": "25GCwy8EQb82mbmXDsYSupfT3RmJCvekNhv3E4ZAh9pFXU59riN7XBeunkQMXtTfE9dokRDQQ7Qd5W1EdepKyzKx",
  "key16": "2zkBMquciLihnkmYvvPT1dGgxntEFaKG6wzigcdBw2gpx9Nu5WJQcS2DuKC8bgaL95fP8WpEvtS4uBRoyKRhMX5H",
  "key17": "uVFL9jkcLUmU48NDcfnw4LD3xsPieA28cKzvRrtY3YFDYkeoy99FRuCRr74o4fwyBpMEpLWrDPdEFjBWXWfyV16",
  "key18": "skBKs2SiprVTrTAP5ubBATzKQcosAhtiEqtFdBXQPiRRLUn3vCaaR4YqGzyxtiG6z9HDgyAf2Zikcx2xivbpzpg",
  "key19": "3N2DyQ2NHmRMvg19iVzaqVwq9VWemRNkzmUj9QT6aneaSQd2kV9vthSm466Roqpg9oxL4m8QdjR2dffLLquLA5AZ",
  "key20": "38ViE7adbdMaSnQPE7MqDHxFfgnUFdHtCem27bigHc7TGbQDBBLuaK9LnZXntX3pGHbSvT1UVfRzuWcttkwk6iik",
  "key21": "4uzfRvYVMcempLSd8UxWhajj8FDofsBpnQQ6L8BJL4G5xEvAidZzFy33t1ZEUJwbTTe76j1VypV6MHeUqXTSLdMn",
  "key22": "5X8dd8gGQW8SQyZ6S13AQHzjtZDHyM45aNgFhi5g9xFoQULwg7oWUqARgdgoiUoGLoxLXvk8rCgbdLdzjvgWk3th",
  "key23": "ZgxKd59kQX1PM3neYUfa1mVDqc2UHbLa8wARvkNjk9p9aEkrFPrVxfz4oVzxvuav2whAZL7VFKXRkxuDUTrJiag",
  "key24": "5sBBFAmthErt28AnPoL6cm54g5ZmjzTMoJy1dQ5kYq4grZpb1oDEZdRNGyK1hZoyzvYs9RzDT3wUgzQtUJTAof4p",
  "key25": "m7VhGBSTUnuwbCmfbivjZ2vjDiD2roFwjUsUztTmrS3uQdTHQUHVK9trsxHGgWvX1WNr7r46DNXAw8gW3CjJBV7",
  "key26": "5P8T6x4h3wK2s6JUTuz1DudDukeeXZrbJCmMnpqWaBWhYE6ey9bYGpDT2ZQ2yb1inyu3cu7wNRezjURfjs7A2BoZ",
  "key27": "4KLGT49R4wRQCK8H1hmoQ1dd8bFecxTFQYHaAmCXTtRatP85uF1hs2XsqqF5GMhhBonwpy4vFAv6hqHrD66AqwEb",
  "key28": "48XX5revi9YLh7sBnwyJjjqvCT2VDpV11n6jh9tW3EiPFXWgwkMNe4BG6DpMRLvbxm8eVmA3Tr2tQWAgaZxJALbX",
  "key29": "sCegYZ2tXotWY6KBNULPdx6QvJ9i3KGSgwCie5xDx1B9QXQNLgnc7Q2198BBcsNFwRsFW9G1dp7xCMQC5bGwMw8"
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
