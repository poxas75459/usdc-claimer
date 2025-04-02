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
    "5nWdraGRjTAvu3odURD1Npk98HRKqvDsembGQYbbkfeaasw8Z9ESZ32NE5BGLSriwpNsQqgU53Nx7reK4uEnjF7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2kL88rWo9y3z4EpaYu2k1FPSromWQVRS8C3gZAkZ6aUCA4CPreETREkC4c3FyR2h2eqHS2BFPN6o6rUGeD5fz9",
  "key1": "57BmbRZJaj76B3CdYgQ9YXUrxFnz1ACXEg5RGk4bEbkqtkQTRVpXFVCa5VqKmgTxHWtAsMDEvpMKUeS9gPuB1y8P",
  "key2": "4PC6oGWYR91w6i2TQnqnQk1PKFJaSEnozeZHkP6f1dmCnaCaVbnpaQU6dYQfnRznSpCW2rdHnKDcGR5jSWQd6n4A",
  "key3": "5b3UpWfQ49SYiET2pPnHJYgeE2CZ7URCw3hmmk2eeF3fbcuiaPjFgqdY9yzHJboVBJNBfLSJDv1seZJREy59BtyH",
  "key4": "g6XXfnJ6sdt1UzxjUFsMg6JhdpGSBtz6D65hbsJsn1K3h3C8gwzavDd3CCmvuUCUb3erZV4T5oFbwcr6JukEAY2",
  "key5": "45uTJ9GgNBLQgZyxoqvTTLKVuCxUJvHvzbZ3UmSNaGN8z5R4qUDTeuPrx7VicksBTpZvfCWnvTMdRv1cofrxTkw3",
  "key6": "3kGJK2r4Hea2WQfuyjyphHYAsV6vLNG899JYoRrAnGpsUsmoKAUfiymf1kx7YuP1WzCyqng9iFweY71gXc7SekKG",
  "key7": "3FmPRwY9zXPq22RksKae2VhymwFsZRBupc3bk2d6CVLCyYZ4u68pMSNFtedJmrG3i1x8V2AxnQZScboE8zhLeKor",
  "key8": "5qoaysgfteyRiWEjZhuSfyN8NCzmRQ9JPof5gqqujy31PwqSGbFFAX2YTnWe17kQCg5GLdN7fmUJFLt2whzBT7C2",
  "key9": "4HkD79rHXz2h8yBPRpg1wrJL8AEsTLmHXdDwJd59mF5poCwqQ7YQ8rGv787Jh2D9XiZCvw9aRZDoTPwQgsuAmtrs",
  "key10": "5C13zqcsqDkvDR37XK1KivCg7CP6nWHbDcbhSt8SWK6Cehq2pxkcQWk1BKaJr2hNc2LNF31eAZzHk4hsTZThERD1",
  "key11": "4fUJu8NLQdiFj67gD6jmjKz5tRRt4e879SQqVLzU5g7AHLZYvkUqCQPLhVpipP9Yf9MangxCbYrkViMiPDwgyXMc",
  "key12": "BPTNr73fQFHTpTt3S4UvPpogULSv2wecR8iSfsJhG43TXe3jdxjrm8jk9XAtDcVdvK4p8Pv843fjqsLnBb6e3eP",
  "key13": "3Xd1uhuXruRJcXu3NfWUmJWtr9w4xkQ9iXRkcvk85hRkdFkAKsoy3nDByuXKrFxnLbPh6WFsr69oXGEKK1NrKf7W",
  "key14": "3vy8zMz5qUAZdRUfSqU179hxUEdTYYHxT7HfhF9GAvG3kFXX2ztcNU5DZt7t9Ksdi5X2bLJEyaxg2zobtAdfqWFV",
  "key15": "2E8HtX8vUy6kBhGiBBrm7RQ3yD8ZRtZQsTRzFmuJNY5Fw4oaZaXUz4TMyTByNCDgNeo4oM7BKtLcsibJHeLpVRZP",
  "key16": "2cjLJbgMEPC5fWBMWep9Vh5aUY9p2QUiU1WnB8zTt7ijD3EcKi9fJsYLosNBh4nTKHoiHjgDW4E8oiGxmGa75NtQ",
  "key17": "rs6RnxnPzT696HZH95PEsWSXdwBpkd35SYw9CLEPED2738Wup242x6quCqMPDwCRZWVS7TR6vysAr9NNSGzgt9C",
  "key18": "61msGCCt4FQWbka2Gb1DJWH3FFUQedMNFLYc4bgVt5QXr8tXynJh766jRcfyLEV4XPbPCSh9jGsYYpMzVywEAFLN",
  "key19": "53ZwMTXEvPECTTHZKZQVsbYnHz4X6fjrdkgPzYbER5JPLhjhJPoiFoPFZCvz2SC9V5FEgJVVC6MNGd32aFbCkein",
  "key20": "u2iNbdtcabBSZHvQ1DpTjKRfckyicnUrMcLzWRLbLp8ETJPUoYG69rPExKaAwWmzzVxFvDphPr7FWiNgY6kad8H",
  "key21": "5x5aFZ6TBVDTn6m29o2SYvvS4wAmCm2LRyU9nE4hbbUUhfVL7eCBhQKcMLK25Q86e53nEFrgTzBKKUZvMfT62SU",
  "key22": "5Qc94aEYLdsTMwySMtURr9okEPHTgsmyGDBzbhKSLk94M1tEmi4tdu6QUFVpyNvES4F2bot7yzhhdGznNbxBSYw8",
  "key23": "3AN8RgEkouBXgMgq4NdmpDFs6Y9joU6tc4rEiFfjcFHkzJGELqTiKbFwBT7savvZmCC3ureUFzXW2S9a27sP6vqf",
  "key24": "3ARanoq4fn65gKys9bibC4vjX5Ku76DugN4Sa9a8ugNuu3DQX32MzmimYgfNZHgpBTzSzbtweBqCUY5swV18R8nE",
  "key25": "6hC3txyXzJAED1BUXBFzFdziEPELRcVvr6pCDzw8gMgNJHEH3k4tpzMbsxkp7YSmTZKPzUVqgMN74ozTwcyomAL",
  "key26": "3XZeSw6naBm8t1gTd6rS2hKjoGHwewfzJsevqUusqRV3tnRF7cWTKfX9C88dnYnTc1rZy7vRMuJYoqiYZBRKoZMP",
  "key27": "ZXL8r28z3kicunWkLffgq3aM8zqpE7mYko1yHFNdEMnxrSRRzVfAwZA8vFnr9MAELgUKxyBhHjkTnTEZwjTKbF2",
  "key28": "2ivs5rTsZkCbBMfLzJPHdyZaYuNbm8vRGDZuZv8crgF9b6h9SaLeBvW9pCXjHtt2ofo3MM5rXrYdcUMWMCHXBVx8",
  "key29": "4zSb6feX6BE9HaVR7mTqhkZJAcbfFa2vWAvmQPbdQn2Luo2vKSz2q4T2gydZbNnFAX3P84d6fZEavYqdepUnEjqj",
  "key30": "5u3TYTfRC2SKUc31KLnmnj6RW1QWu9zBnFAwGJrnzevokmtQTkgo15DVjm66W31QFoJzL7FFxFsWkS8WD1e7EgkM"
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
