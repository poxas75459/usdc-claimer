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
    "iH9F15NTvZg9ryz5pCo5NgdCQmvKVv8zU2ddDCZ98smv3k5eWURehS7PL7hPx4jdwbRSbeF8uUhVxeJAPzNSvDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34yRvvJCP6yY7GGJgfASPpTfrRCTmpTREFeAm99Fg9KJDSxzCDow6CPaffW28nhorYtf7LyuKnNgErAjXqnYMQHc",
  "key1": "2gsw6ZQMd61BiUEJGHhvXJ2wnkMUh9xHRzfpAML73ck1sMKBNMCgZSW6DR2LFcyqPHgKvz6niw3eV4uMbRu2m99p",
  "key2": "5Py7EaSjiezVFpky174Y3nGtbiSSVpB33jKRbabhivwWirAvcqgEgA8rzHrWv6CJAZGsZ6KScysLPVBTPNqUFtcy",
  "key3": "biwFvsosNJm1keJydMbm3qfcC624Pw5a4wqbDaqkC94S4dhppqGpHLfXfeupNmsGJtCd6cYbxpW9d1RnqPR65sP",
  "key4": "4xge8UBLXGKV4ZthUgmR2FAe6A54WqWNjs2LWKZYV8hPJYHiRi2vn6gDcPBwFpLfA1BVZ8qKmNasv35jXf45SZNn",
  "key5": "WC23SeUMvQWHqxEo8g133rDh5YXY96SC6SEU9gvUck8aHCQd3Y9ghp3c8e2nCBPeUdj7mfUCpMZ9c4QvtU8XQkR",
  "key6": "2b5J21QHdEwuN35vaus7xSKokLWSySFRqEXg4phM6YS7M4dTVYjq7cQguzB4oSZZQktoWENiLuu144LPjetq1Wyc",
  "key7": "Z2bTQjzEUenVEMoSBegckdc8JYZ8u3doHA4eqiVJ8sUqwSeMEuqoZjxLLxtBKiVgN4uKmQoYAYUqQvR1K7QKaTU",
  "key8": "36e8azPheAnxq13ZKTwDMDVWVryxvyX9HrcSDN72mN52Jf7ZxrbWbgpdmxC6Wa3xzyRx26zZnSYsfRKqoBicGh2P",
  "key9": "3TgJMmzu28xvsEPqAkQ3ahgZV7WLn3VgHJiND5YYXsF494gWy3G4MZ3cd2shyh485fxYG9nZDRMpYFKMpL2V85SG",
  "key10": "VZq2BGZFKpmPQvHNLt1GzjHQ98P1GT8EC8DB7bNF3HbfM97v7wLgZzNCPLCGBb972ndmDg96K9e1y9Pjvnr45Zp",
  "key11": "2dHUVXk1PVmNd6BSUtMc24mNVqHNp8vJNHKgope2jceNQrDBYWPdprNzeUDxsXGx3Hgt5kn7ePdTSofPMB2mJaZo",
  "key12": "2ksmNQ6TaBTrnoRSSTir6Hiz27qu6rFAYPn3tV22Y9ZvxUajAwXdUHsPPtX4K38ixeozvvu75ciycmm4iV2mtCGG",
  "key13": "5heX2kxsj443QTFfaJSTef3jzAaUyJTRBa3gYRA6ZVx853A2zUDfyWmMR3GpTK8QHNb8Bo7JB99WxD4omL6sgVjV",
  "key14": "cr1LvdxP6tVcjAu4qh4o1XW2JoNFaWH2vt6q4wqAXR1r9tjVy8gzf7zpGjc1batAdFFV2ixqPfiwSyJ5bu7Smxn",
  "key15": "4Scw2Fvq8xMH4xHSsC1j8kU8TFhPSTmA1eipvPwNJiFPqujLCM6DdNVznbUnGXUq3p7WWHfq82P5D9ncdx26ZWEV",
  "key16": "24vegchkfxHffTxCxQ3K1TVK1pTCfuS9hdWELEVvfP9isT5CwaP7u6kEvai6NemLwpWk6MZNF6PAoKt2YDSEJaGf",
  "key17": "2AngAW9BwamQ1Se43MWBxNS4RzreiEooKSuJswXnxAgSNHqyFYRLRFRVAStDRRhvz338WqE2MKYtAcj9h3zAChMD",
  "key18": "43ECoQK7k9u9yosswvBXNTcW13oS8GLje22b1S3B2udhYFK5XuNvxfN7HBkbrSi3HeHwnkT8x9B8KXnsAKxaSZwy",
  "key19": "2LAuq3kHRLo8BWXS7W1edPsPQcjrTyApZg8QDMqns8uRLnQRWRbVJDXguWS1CgG2EnTD28ZJAq7SBcAVaSK8Qpww",
  "key20": "sad2dr51bSWQcAHzYsbjidj1izyRySXGkyoASAUAUUDHejPkjvS9CdXoMucEKPCDDatznceLMSdjth3pKeaSBfX",
  "key21": "4t4hKrmFauYc6e1eNKVBP7PsaM3JYo2aoq8so7bqTa1rNaWunCgrSeDsPXfxhnLWsetcjoSTDj5MkWeSzK7sRbXU",
  "key22": "5UELnzgKfuPQjvRE6Brk2TEdknuRfs6FgQrRCpEeRx1y84g4Yh2MZCN1DyvRE4Sk8piJgqVakLMHQQbzMMCmgJrn",
  "key23": "3Hu3ujjUYvEXn54QGUTs3BuYiurpkUeujrFxA8CEq4mB6h2DUrrqWCMpjVruSN9NKnTcoT5zywq5zZytHrNPSs2v",
  "key24": "4F2zPAgFxeJDEvUDxg6e5AozBbiyjufmcqSHgaVRDuCYPFtbz8pHQbLqp2RPLusGpxgMpUkiTbTSnX2hzesghisQ",
  "key25": "2GUi5bznqfhQK8NSLMiNywQeYsGWJ1NUrspbxAZvQCNCVd6TKUMXCsZQ5KriCXBTNWqrbDrhSUMuSaafZoohKS1p",
  "key26": "2M6pXmWA98mjW2jfgJRYoXmAFji3g9HQRajN6w5nQGEzPYXe4PbuJap75hPAEYBRKfUfh1XeUAZKGWxc3XSujjAB"
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
