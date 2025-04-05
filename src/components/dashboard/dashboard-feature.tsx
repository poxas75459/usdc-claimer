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
    "51T3ypnjLYnLpGZNoxPe1AFKTfwsri8fmDQXzNd83tmEqeftUpUAfJdypezYm16w4VVTBFEKNdNQ2nhdwLuHwyL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNy5sKRHDc6EAhJT6spwrU9Rp89B4sUrDkSLw3vo3MvYZwtWxH8akRcs6yZv2RT6ufWvYKhwpFqan6FSPUQBQTQ",
  "key1": "5LM8HNAsTYVLTrxbBrPDYPj58ghQTqMnCuvA4DcDjFW2KfBSpkJTfH4HrNE8Ltooa2b8q3pAHj94UnYpfgW62H1Z",
  "key2": "gD99d7Li4WdzuM32N4jhxBtH15ySsRarcW12ffxaeTj4MHSgrXapcQJDv6Z8RmnbYgbZVXjhgMzjcJP64dshY46",
  "key3": "NFG22ghEn7cfucshd3Bna7JfhKzpqh2wbVyZ3823RMo2UZ3XWYT5MWgaE5jgHjMR65ixAbHMZyiuu4v1hBnbwBZ",
  "key4": "5QbCAcEweS1P2KvSCGXYmbnMRtQqM3WgGSjwDtjFZ5eteoSjcKfxcPuHSRxoKiBmXNhFnfUbZVXf8VAoNZt9T2pi",
  "key5": "24UZAvzW111SfGbqcYRMeed8arZLu1Ns5roGa9tC51zwGx14NAJDmYXgUhERZhxgYpYtoYFSRLipvQybvuRUVB5w",
  "key6": "nQiNEfLPSAwVePWCbz5MDKKpa9opPnKE2N6jEzsna5u8nt9nj2vZDvcQwHUiAq4Mx2i4nom3B6XoT1wURYxtUfA",
  "key7": "5Utqefzytk5KUD9C7SGG6cXvP5dMQbLAnWCitpQjwL4u28cnYoPfUy1LRqKxPyw9mKRiSmUKueAjEFJFQ7AovapS",
  "key8": "3XspuMVyuxgk99jPE1NZVD1oSWb9tHwGyBo4j3WNKfnPv32e7ZkKjsnCkPPHCfWJndpFTdjExrEetZxzeveqCukT",
  "key9": "2JMCytHYTpSkQdvquXhjgE9nGyW4NLYW5eU1b5DoLLFU9Fv2aekdJvzQCT7pGGCZNMmNf7qu6NM39CQ5G9bUWKq1",
  "key10": "4cxKv2cx9q6ytTXcEcvqNQboDbJMM6Ei9sjePP3aRtytcB79QtJTJxGW8nUC4WFFnxUatS38jQxRYbi6pUtgo491",
  "key11": "2ytbLtJsDCa68egMDMin5UwtNzntBQGCfFMJ5PGAWeDwxkYTgDxr8TePBaPC7hN47QeAvsXc6FGA1yR8P7aE2T9k",
  "key12": "2DdPqB4gby1w88F1nASb8zXQhLT5gYwTFzZ6kqAeNcPbURU5PPiidfJ1Vo6xzsbyF36m35b54fwg2dWUBS3px74k",
  "key13": "2jtEPSZmP18PN9p7C5j7QoSNYk7FDcpfeLQJpF9Jpbn9E56nQBmLQts6bTuM9eU6CQeZ9VvdLuRFjpEsuaRoUK9u",
  "key14": "FS62zyEdyDbRoNyAe2B2qEwywvew2LChoTqE7wuGDcxcnNXXQASDxn41Te2F9QtFyHApqELX8MrcE75ZewjzeSQ",
  "key15": "2puX3aQwm7zdfdNCSjqwKavKCmBqyNxCRNdkoJYEkNY5CNSRWfCQjXTgBDPeZQQHuYJvmvdViPgfe3hq28kuLDa2",
  "key16": "4guzvaA1x3Tv37ye3waip4WWnM3Z1fLF7nsZx4AbyRPKLCfvfTA1NXjRRVaqKJLLL7wqGztnUjvHJpwhXmqcKSyL",
  "key17": "2Y1RYWKpGHsTajTyhhJnGA7GpTeViRZuTA1MpMFZZ1TaEj4xttkQQbN3UBULZoA76YJeWc5XxkygSCp2mu5CAEfs",
  "key18": "2bLtNxjV5KFhKqcuafZzZd9twYEa6MU75SMmnJjCAZDvCpMaYzs6zPiV3SMXGLV6JSET6tg6pis9JLk7attqwm2f",
  "key19": "4L1TTjVWNoBj3f4LUQhZnMJzSUaTHkjnPDbNVmoXZAfpMgKCYbhPy4gu58MP87chXrjHB3vKARD76QyDKRweX9pq",
  "key20": "SJyQL35ZvzwUxcrofknNxvKeVUPgPKN2FPjJMrPKV5a64UBXDDq5DRxi3MuhbxLA2DFMVYMjaRigTYv7ZHq6JLC",
  "key21": "5gMX6QA6pT18FNJexMAda9tsaE5BY95RJTaDwzAii9pigeMkM5o7vAmwaSQf918mVAwJ1tykY3vodBuCJ679hVYk",
  "key22": "5MdkkUJiexKRNBveFaNWfzawrqRPtR4saS8WbxcJSS2X1wML3xV1iH9VJihgrNazT2sh3uR2g5qwegpuxyfH2gEZ",
  "key23": "4y9Z4Dm5EZ4Fxcyh9oVLiDQ6CAMagZgWAQYAMmuBwohFBNSiYXYZozQ2d9Pqhxny4NanDzRAmSmR6zBw6Q9WybNq",
  "key24": "3k7hAKcAAPjbtUXEwPaafT56gXMDeQTGYS3kgLFjeThpxDu4A9uGYjZ2uDzzo7RMUJz1oGWSicR9zKsosxksL2pU",
  "key25": "5TfMAreaCMYshLAuTdpexcX7WFPFW1RwZ2YXu3x2xW9MQyHbvurdpgdNHaNZdSnmuHAi2FBEoAixpwn7jTdW3d63",
  "key26": "2DvfkRchN6zRTAAqQSPNh2xs6PJrZc1GimGYQFcqbnHt6zBKCkSLHN1PVQDroqAaWpN6Vi1QZ7P6MDhFZdBPfnfV",
  "key27": "5piu7vufVQFNUhPJSuWYBCkn9VLGhd38w1YxYricknjry56PK373hEAnPPyMztF6PZvHswDu25AXSLSsm5z8trS7",
  "key28": "3FhcU3vPv12eaWxTKT3Yoa2zBN8UV59svDxQnbcN3oqLfHaaAWh3CedSXTZssaWjTDuQzx5fDizVV62rqLvnG8v6",
  "key29": "5KcUYF3xDQjnjtHQNbE56xZToptAtJPcm4CtTaH1AcENBsmXWBRG16XrsFSxUSwxZuMfAMFm9dwz8J7EQGXJeGUd",
  "key30": "4BzvNbcPxKHJwuvztHPZdhBtLaxLDjM1Xvy1sZGBQnPqo9doNWUZbjmznmK6py32mcBUsm1ZTfTvgrb2BYZj9PV2",
  "key31": "39sXiwSGGEdinjtgYB5oPqUctq9Ui8XXVeW9y2UfeCbNtfYova76bZgy5r6wh5zj8fUaBL6q3x4xiRjvT1W9KuHf",
  "key32": "4YXF1ww3eHwuEGLysieuWQjx9deonVMHf2h5D7AcCi539sxjuxaX57iswcCqN4FADjfFSZajB6BGSf8n6TzYUyxv",
  "key33": "xYF8rzpeSQ66z8R9RPuMNNeW74Ld5AJ3EJmbRkdJnHLj4fFBVEZQyWwHHY5tqU2orqZtEvYiM8xpJHpTEzuqFTG",
  "key34": "66sHSkHP1ybTssqBneafoYymfjYCw4jP8pPPXt3wTCX479dfuei5obfQTMbZzCfp1vNYQQtx7wEUMKvYkLr1GXb",
  "key35": "42urFbTQBbNDgCgCawdca7V21o235BL4JtHJPQTvs4SGfW7nBzibc9FB1V2px58w45UtnGmhxw8dYNFwbMvM2W3h",
  "key36": "23js2ZfU7BQUeeNx71DxAhfjNAQCbCWKiiZU4DHb6nq12hX2K4iQjorhNyNcTmRPfuyzdeWPg3QDHSWMCX2wiDgs",
  "key37": "2b83xvBL1NYY5qk3kVi5Yaj2YwKNis71Qhf21cxsBeQ3PxEATroGVt3Mbf3nxQd2vdAT4zY1K47Yw73Tb6BsjtQK",
  "key38": "5YjM2GnrbKC4AsxPBHu9E8ZR6fdWWEJvJKDbMh3hM8RBD5JVKUs6ekmRmPTHjm6YSuiTULJ9KZFPQTtC62kx1dfm"
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
