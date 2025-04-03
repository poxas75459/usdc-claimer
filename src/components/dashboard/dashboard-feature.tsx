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
    "4jN5QTvdYVsiEnvEjVuaZhvE3u2Y6SeRUo2C3ahuTF6KCv2R523hHmypZb6vE7URbEdgmr2uUU4AroNR5qQzpKWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nHcM8wajzwRugutRgiufwyNyk2xNBqcSDAz66qCCmgKtrNoSomR2WuyoSzjNok6JAjhy7TF47oDFhUa4TDjVcBz",
  "key1": "4hXgq77xhnJb5qtN6hi6P7iakEPbqR4cryxuUgxwEA7njJYUtxYf8gREaiUsdk3SJfxQPv44cYihkobNyosd9gpZ",
  "key2": "4C8hZRYLnnc3dSdKqLnAKWFA34DAYWHrwNskVBErKL7x2r2NCBaZt6bdvAq9NUxtEdddZhevysCpPdTU1CsewWCx",
  "key3": "2Z9YsyrMaKd9RGKRBDaUqXst1zWBWotp6DeMWGocK84BfMX2gye8iZSvTfTYvS7UCPuMZfXbw5uMM34eyQEn9tEN",
  "key4": "5b2w9Ubt2KfShscE5Xf8dmn81YzotEr3CfkSKwFSnGqx93JWzvASwmnMSQmuRRDqUusKhtcWhWT3Qpczj27AuKqe",
  "key5": "2s37xFG2erxAY1MCm6PW9tDc1YdgguM8izeyWahj9jZrjgM7q4Wf5AvEKgB3zWvcD87EZ8MW2MWhxBZXfyYQEVst",
  "key6": "ZxgKGfNpTEhdd912oGQyGCdWYGwXZy9WrJKHmQDxdqKkBGqB1woWRK6MHZDuemqid9bPHzhcZeWE8gykjKjNT7L",
  "key7": "4ArrJAcizJCA96MWooyHNugL4PaHXqZN7itKPPzUWuqnU2W5Ef5s9bkKtgvQnpZZ6zR4jgsss8syKJE9YWgjZfPT",
  "key8": "5skWV9GtswqPvN4P31YEXucoHguB74WKLmV97eMz5gDzcYK46gSjQXSyF5FMJsN6xf9kgobeYaBYjcntZ3dBcsF9",
  "key9": "5TzuBVvEuCaiuorLzX6SaQtgSzThuuFVuCwLtPLvk8PV2G8gSe9hoCsfPsi1qzBpK4oAWSSJ17LVPpvK4imUaLus",
  "key10": "52pnsAsfATjFyukB4suo2b9ifwX8N6LUDyjepmFsCXk2PdAtjSVHHLTJVsurYggricYAKKZynQaBkcDQTGZdBQo2",
  "key11": "3r9jrur4vmptBn88PeGnFPA8QUCV4DAnECJuuzbnvXS7bMboF8W5zpMZ9M3V6VgkCtQUPSEiU4vkQ6qDrKvDh15m",
  "key12": "3ApwzWZFr2QkyT84KNR6D1rBeRS9NUVJec46vdfQy148sEqdPG44xsnK2GpnJp8j7PBzHxNDCfuCvFk7BJMkaNaz",
  "key13": "3pdBKj5uQY9oZis7WR5JXjvEKCRV1MKnbvRQDRbxuWiBqDSFuve5rKnrrAjYJLxtN5kbaRNwkteArJUNXxdhqU2h",
  "key14": "2kBjMMvzPz4UDyJm5jRciEHEv85rGxJtaSmwo8PDz6KCH1U3fDvKcQ9k3XEjwdmDGF7bNNhqcKedfYB7tvCGgo9K",
  "key15": "4B528kvZtKLADdPEcAAx4Vf5ynSf5dEXjFibpyipMf7ug57iiYq9x2XS9N6zmbnGYEZfFyRr8H6WWvXdWWTV3JL6",
  "key16": "2UGo94Fm8Vc75jfRTWUfZyV4PqKM4TkL7V8FNeZvfTrH7QnNk6a5KDFkLFtnnXF859SvTvVX3ZYCZEjHUQjENCys",
  "key17": "39GbohJaVsVLQeHGGjCv8oRzRKD6225BxxXcPXf6XSdEUXEffJebevoSuKvnLWJAHBfizNJDoQBkYP3GCSmF1FEQ",
  "key18": "5LRCAxvLGucoSSoLqginPYma1PJRk8dwi2NcbyG1o9uBKQFNe1ZCVtGFSuYNprRMJovvTAJUJtR35oG8AyWhG6Aa",
  "key19": "3ow8iFtmWejXa6ZMm4MiyQYyJLPjApYZfGunSTjzvFiuBA379wNNvTphAfZT32QWKaPtVUTQA57fkhcm1cWu5uxM",
  "key20": "4M8DvLJfC3b6cNNJk6Z7PFyzmNkvYaWqEXGNJ2LMxD3c6NZup6WhR3PatJd6VeEfSawurDAxoPNVAiHhjWcLMFFd",
  "key21": "4Mxq3wxJXHgybcwprVbkTwH7bTnMo8HEQ4zws4hgLQARCAGbxr86VA5WDJydq1i6uisJUH7fQLgDJqPd5B4dip4x",
  "key22": "4QQx64PnTnqCi1A7a9xiPACj3ZYtSFPFB334zMzRgHWxQbcPHVHmCRzJGwYMDpUmSYkBSskHZ4Mhep728t3GMyY8",
  "key23": "3BCw5Nk9tgmpA94X6eKpT3zgdsLhqFPHt7ixsVhAbkCZRxwjgJj5SKmfnQ8ESrL3gnNgQQL1HC4w6hpdFMH1VTGj",
  "key24": "56je5C5714u4H9CwPsSErZ6HS1rNgV7d7GV12cx2zYqW9g53d4Fi9pVkx4pPTMYcAqhkcKpY4efBpNbLratptVQX",
  "key25": "34JYwDe674xHdz5isUzanDr8yfee2epreKF7CqvK2n2YXE74uBAAXqGRArTbwYHkf4wr1gWiTawzYBa91gQLJjnH",
  "key26": "629UoqzNpvVD2oemMDgvNtBrYVheK5c12nLKNfTiyHPVq3x8oDbvwU3XbhDrPeYax9QCYWWuMNE5igLUQhG7jsPT",
  "key27": "678gxHXDoccxRnvH7E6DZaAPJVZZozTWeSc3jq1YG6vWd7Ly3TP3Wv22gEHtreNvUFKgKgBsEBumXkiq2UZA5T1e",
  "key28": "4LhuxRzeWUPkBVFwiWqSmrkfUYfSNM3hS5g8qU4tns288pkbjtq6C5WfNH8pohjqpNwz6W7fTg9MMfcYGi7QniXC",
  "key29": "3mX3EMgdXKAZBn86TCRcvnf4QTUiXzWy8HXjSZJffwyDrpeKbjWtmMKTzRpT6mngYdd5dwfii47BiCCjawJQdHUP",
  "key30": "2vUv7XAvcdrS1KWYjrpQhSBqX9o5xEabuPUDXU36fPQzJTJcTj6akg4vyfCCWpw5sfmPiq1g7WjBZmWeGNkwzyYn",
  "key31": "3u5wDfU6fmZzZhW1Pj6vbTPovjMYDAivRF6LsjQ2B8y2mCchQAXbQhR9QwjKxcaSQXRVNKPfyCsuvNGkSZwJwXCX"
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
