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
    "4CkUApg6MRwCEeHdokvDTAMFZcAi1QfexrtmF97dCTgFtKNjTv99hzNBc9DcPZTesTGUk7xmLALPYxEZk8pjxZ58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXrSvD5uvmnprNqvJibCBcxv3GAxz5AQPSpm6pb3pQTw34XL4NiHdGCxuJta6ztH6icy9QSkVspbznDXZRECS4h",
  "key1": "iSxTTXG4Qj1763gD5BsvefjxJUFJXMH5rMkog2jxuVkGWNkYDTVADUeKfuc6DhRTkC3GyVGjTXHHtSd9fGJ9ecx",
  "key2": "5TKdxuzcgf7EFftdWiQJ1n7r1iWZPuwKDqJYWVTwj9YqFDtaHt8KBG41KMNnt9jorJER2AUxH1wHDQDSLJ9Uyvf9",
  "key3": "2W4M6yMkjs9HgbQDjS2ZmcEe5qtC2mhY1yPEjJMwKPW2VJQjs2SqWi2kdSmd1LcGbxGvhgdNGq3cSFGbrbaTbCqG",
  "key4": "eBmShkkkxGvXM2yxMa2AKLp5fdpCSLpNnabPDScNsLMz3JMzajekUQMpQreAoxTXA3yyPSwKtawTAuh5FJPDULd",
  "key5": "3qQnJogGT1wRYw8JTGg6Z62fLe61x9QAp7YFueL8bq9H7GvUuBYqDeCUhii2uHMBDRkffYMCkBcDHpxxzhEiZcni",
  "key6": "4V9bUnALYbebPfjqapmDnwan6saMWzetQKzEFTjf2ScduYH3LFt6JwwfjnSf1U2p8KeABg4fewp3fUDxY1Gd5JJN",
  "key7": "dqra1Gd37uAiN7ewpxRiHJVMxp1yWe2DV2xwxjiotp6i9oa3HVYyMjkQPPKX477k4iLxd2QjR7v7WGQHmZ2CqNk",
  "key8": "2fzb9ASaYGDE9F2RHeTGdp1BAe82d8q1FCBscceY65NDwtuKwZN3RYQpakXfkTxhvLm8VLMDZQEHn1d87RfLpVH1",
  "key9": "2dACAUUZTKW2vFS9yq35Q71jgpcxvTwDgrV1BFagE7kfVhSPwkAADaG2fyTVbH2eiJafdfFLxkiU28GJKeB9if8g",
  "key10": "41e5T3P74cwxy1usCaGYGNVvKDNkZioqTYtZnLRAxoazvfGwwzay89Wtdf6iEiq6dxqRaaNPeKvMdVtFRnPnZ58x",
  "key11": "25LkuadfSMRDJ2htEXbunqvgTf6TwE3ckTnRzXSDzM6dKeNkH9m8Rtk3yUBGHwahe1TLwziQT1vzETivUR1R2YAE",
  "key12": "64NW2rcpjMkcAFpY8HS9CiwCjCWvxkjzufofAisDysQFHhFsoxtvapH7AZVVRoP41a2K4HNQvYb9ZMWHyAikkUXq",
  "key13": "4GMAU8xgSheunbzEyaWBbBQFUbmwrmUNqhmKtpxJi5kjSykvBswt2xcyw4MpqmDnv3UiBEJLEQjny5d2TQjCS2tU",
  "key14": "5zwZryQhrodp4oRtCqnx45eCmAEP4Vy95y1KEfF5r1SfE68BZ35ybzGMHwzvzJbxm3VQguJWvx183akCsUiVop7X",
  "key15": "2C6KsXifSXKDjZPV3nWsdqWC2g2B1w9GzvZDEEhQZ9LV592wD8hCmfyMRzBd6URBP6cMEuEvWFdwL3WDYgKszYQ2",
  "key16": "sntSJeb2HGYUXv7xaSYvAiwQbStoanevGVwxcvzdigAv1Y6j2ypWaBuV55bDMxMVnZFkEpsPp9Xp9T5H77ow64w",
  "key17": "3BNJVdSgWsULNsAW6BhCxzVxaEyqc6aU8Ba8Anoi9FWV4H3pyFdHHUubaRjUYqWgAvnDD7bKwqWR4r72uASs4gbm",
  "key18": "2nVVsZqaimsCuXzyZLLNWvy3n78BR1qfHLGhDweiMmVNJSHbUqiue2GpS9niSN9ti4eyKabtYNCk3ka7aVz3bisi",
  "key19": "422617YRyADAsVVDu2zYjoXeCmpyWzajMJNR3buf5ybrAoM5fyxmsqvsgSPf2sdhrLEc86LnG8gUDpS21H7v4zZX",
  "key20": "3Jb2SBn9dskThtFUgQRuBM7UpX5JdNwLe7kTh2ZNggUMnKAr1BmUm9prR8rATKSmoxANCPW9D7JQKgVTq6n7mjG7",
  "key21": "2t5wm914VSZ92mxQwNv68XKAgt8s3wVGEYjLmX2tCTetsXqAotWCgNf2Aacy3Y2HYi2eZqBfiMEiFZr4p7WVM7Jn",
  "key22": "2GTiZ8UtQP56ptjHhFmbeVx89qtXAM4Z3BQ1tt4iF8bs52E1QTVSkBprugMWG1yRwqG53DqVTnwjK6hhoTxVUHs5",
  "key23": "5UxigzrMgDDS2Cqg26cyYLaGVDc5gQZGekTXUWuRtaHAkinmH7FBqgzAyGjaub8TsSGdQvzRJ1McDVZVdEfhsnbM",
  "key24": "34jiUxUoPDvs6Sfkityafu8EZSzodTvchABgY9iyj7k2Z1Yhi7t23t6V828ckeo2JBBZYWroActED5UQXa2kg1Mh",
  "key25": "BYsc4R8GoB7LSLoSUrZUjeAXrfgLfr7rkUGHqqpwYwcR4uVLy7uYoFdEUFEZRmQA3CGFZehsRWtWY8JJ2ithjtT",
  "key26": "3qD3DW9FC3nPyDutAsuiYZauvWcikCSDoAqCY4M86jfAu3tiAHKm9CxV4P2cBtLH6RTAfwakUsi1SMEm96HzTN21",
  "key27": "31miNEeGmSu63hhKq2bQtDkhYPNJ7jwRK2M4HQ2KErsYwnWzaBvG8ir8Xk7iiYRDH7GV7W53tjfEBocfonPxcUrz",
  "key28": "2kVESWjWCis3rr8mZtR6ZiTCw6JtsboPMsR8n9ekYaKXnKDSKQt37msFVMdMaZFQGLUmdv3wSbNKE9UrQDLTXYBd",
  "key29": "4i3Hi5iAYS4VTMuGaBH8iLc3jtf2K92YRoNMCeWTfZG5ovYeiTiZWAh52mRLsYTwWL2iktrKg9j1gv9AY7fuy1T7",
  "key30": "rQVUThLdP91Fk8QzFjbwBSRne2oRD3XnF8QeTqG6doDNbXFPPcDJrQG6ioiarakjNA2v9pUM5NdWYM9gnsrLyJ9",
  "key31": "4tgJur3TTWrTPxMSDgMJLYoPnZPCR1MZmxfaUuQaQGgoacYZAb5y7EMFwuj78MWH5FdQG5rkFX6x4bGZuDLNDHPK",
  "key32": "4wdo81Wd5VFRW7JA3YsVAyaAdnaC3BphEjqpM8n2STGr2BWhPgMKVBAGUpHuc8z4QdoPe5RBQcS7X7749zr1LrVA",
  "key33": "ByE1AK9wnvP2cuLPNKkrRXmfnoMCtp5xf2jYaZVVt7Ft4m9EgEX5L72qDkcqhCxBH22DcWa2V9byueaCKTtHPL7",
  "key34": "4ncMRc6s78CmKRgAHoxt7RjFjozUYxEVPqpBRYctP6od2NqZbkMk8hWh9wtgdoMn8ubL4UwRN3qJZRBPA48wvm3s",
  "key35": "3Q7T6icAnchoa8FNDTJ6qgf4f3RHaMpjJPibkdhKTExJVZHvj9AUrnAqVTKooZYRxLNchGRF53js64Q8Z7A4z8zP",
  "key36": "24DvXaaTfNsqwzrxAwkYrLgi1FnnDdNe6rrXUwBzDP6uypf4gTiZW4byNB2BfTT9QqerWf1PNaRvFAJNbu3x3QS4",
  "key37": "3wmwy5Laq6VduuWyf3XcAfoEpLQzskkZDbtsVfPLRf7hFbun8S6BB7rMf9hT9xByW9ekYWQ3hvPNFxjNot8a5Dw6",
  "key38": "kF6pKqT2nMvHxJr1Gi9VadxEdb4DFD1119V3NMZfrG8p5LDj1ZMYqutGy8ZRZyqpp5aSHFPjTpATbqYSoBtctmB"
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
