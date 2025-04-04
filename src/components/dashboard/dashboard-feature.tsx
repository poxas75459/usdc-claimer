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
    "2UQe9umZXK411i87R4PEsz1V8fq6un8kVGmstKmgJW5JNDac9YCuFnbnf3thGxNeQUNU2j88sZ31FtJxacmf47Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYkrgSqiDPvTHS817UdCpqJqQM2wNpqMcxvm8jSGxKYniJeyvFi7SvfkdeC5UTdhpoHGui9pBysJ8zF4k9h1gyS",
  "key1": "49rJXw9w52NVeziH25do7ZZoE3wFB72U9zjoY25QjCfbwZ17qo5XPMXugLEQEWvvAKb7xwYKmcbZwtLcMhHcjKAy",
  "key2": "4SQyBWgfKV3qrZLvGDxkGejXGY6XDnm9acknbgYwiza5AkRx48yBfCbREp2bRLEsTBNfLrdsoGDaB4BjchWMiViN",
  "key3": "uF2e6hKkGKxRzTRmWb4BSa9WoZH95M8JohJCCFV8nxW8i4jaBFXHorS3xoGrunZvJj8TdjdGGnUmjxbwC2TXaMM",
  "key4": "3S6f4hxnFPTQ1kZaSR2QnZHv7Xrc2AgrB6ejRj1eQrdxU1Fqd5v2WVF8pefovQibKPcp8uN1aNGMitrGEnvDoRSF",
  "key5": "2kVAnyhzVNy4fweP7EWjNX4QQiAZXhi2Eo1iVzCtkMsXRwawfnfL19xjDTBvAbRHBo2Z9mvBxa6MpbQLjPw5Uwpe",
  "key6": "48gLjh3KPCLGFpSepNkqyVmvZQKrC2CaBtXzDb16ep34F8eMh5Sa4JtdBe58U4cS7BaCj9PSPTHjM5HPDS67PwNw",
  "key7": "5cPdJvRVP9ahndsv1xBczHEPMmgBX6CnvvbCTwzHnNdZxUuSbdHh3i1pjSeQXUkgMMrq7ZoCCh4s1zMpZmKCJCkr",
  "key8": "52JjHnor6S3BcmyX6WFCtouA9TNAnBDqKBr7bVEaUK3jVpU1UkbYddwhb5eoNzf1aXV85s6o1bfwPNSvFr5vUcjA",
  "key9": "3M7LdUBjXYvZMXci2kKwSBate8Z1gRNN3HF84GPcmyzePBbRBR3h894DJsNwuwGmxgEsc6VuZFC12KMjcvVK4wDf",
  "key10": "2zH4pRFtNEPvX885KWE4DksRywc3ieUXW1P556irFV8BrTVX1PvVuMK69PuSt9YUWMDgAQZqMZNTo6GQ2p5se6kf",
  "key11": "4s69oQDBTwCgmexvbAbhk11UKqMiLcBFfiwqP3fvy6WovpzQD2YcEfmRC9rKMh6pAahUSnVmfMHrfME8T6a76a4h",
  "key12": "63tSoiKV7FodtS87psEPBZHWWAjGg79jhbX3ijzDMN6JXHDhmYst5Yfi2vukqdT9jX8Z7BdXeSHJabfqnjGWD44g",
  "key13": "z8tFEx6W3bJFbU78q7AZgH32xbEhgxayXfhkNqYZ5DdwAXCs2tHCxgVR9GJRKiLqAVgE9cGZQAos2YuFCvwRo9o",
  "key14": "4mAXTY3b82kDgaWRVQYyRmML3Fn2oCpCswMutnu1hWsBBNSdRhNtG3H24ajsbyBK2BGYfXY3VqEYAgSxBnPK5cqE",
  "key15": "KVqjCyUmDe1cbJjgxWqArS2seHwtNU63MvYgYDtKyFNY13TK4NGdAwELEGg7ie5bwd95BCom6WdwP7ni1EB9ZhQ",
  "key16": "2HpdsyWK19vPZ3vkacjmKcKbzBmwcbAYrE8ryCbtwyfrfy1gBbCxm58wwC2UeYekkVuHdTtn6ahg1BUCo7R6BUYp",
  "key17": "2SJsQnHZBQn5i9ZM574rSo6d1sa4wEkR231AjoD1xc9WMrQBoBVPQasMtRoXb7zod7se8WruYQ8TrUsPm4BGBtYF",
  "key18": "4hnXD6ST9fQ8PuxtsYBz1Z56zS7meG4gRr1EqZyxEHu4A7CMJLrE7YkrXmABASPDEzQwWwi2eMURTfbwtYqAuA4Z",
  "key19": "3nYbgHAmdp1iCQ2Vuox5mHCBPg8ThnzNfm79TGmVYGfHvfpAVyrfnnrDKyTX23vxv3hZXXuVHdxkHVUe7C8f2Ei1",
  "key20": "4AZ2xu6ao8tR1WLHYbbzB45a3q3u21QUrsYWj4vByfqatKPaSM9x5XGbDj4xkW2VafaHRURVW75DdLPEUnMtbxpy",
  "key21": "3seqbRkyjB2QmUeX1faSP8Jp8JfWr6Z35aePEihLcuudvNC18ThzijUZxFvWMhJRSowktbRwxBp54PUhj9MnPQD6",
  "key22": "27LufRrVvkyF9UzCuagPtGDyrh5TbURX85Dd4XiXFh95K878oumTFPoa2BHs8Za3TaSxBvz1SuWJFvEvCpdCUVhX",
  "key23": "2J5qdFHrkVVFXWTiiJyJhnYyHYE3TUnyzcVWdKb67UUxa2fxokVjVFm8seWKfX7PQDCDxbGimZf9GcHcbKZRRYCh",
  "key24": "5xQ5kBVRR7hBLTYQhE3jLHGVMaYtcm4AVsnvo3HEkT2WnevTi4hYAswRfNgQ36XVqb9TQXptkLUTvfEdPnR1UKc3",
  "key25": "2EMQDwv8ZEbjCJAjPXhz6NYQsga4zdyfL61iQUQzRMWND2WZrje8CEkVd9CWeGW3XjGHMb2qsiFH3iTF6BT4ZTYH",
  "key26": "3QudvA1y8HPha2yiAFNnnWintPDmwBQuuA5LueDfGWgZ35wJFHn73VCFn6cqbnQV1NAMRR6YB6bV7qw8Py3wmHyF",
  "key27": "4r8k9qv7UF9APsAjv1T5h7WKk9pBJVfAA65VZgBV5dZqk8E3dVRSq8X3uHWkYjjdb1ZudgFAaHMz4nFvFNFUnRv"
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
