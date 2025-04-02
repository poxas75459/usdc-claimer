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
    "61LJATQfH6fuZJyyqZZqKz2Su6uACBcULq1ekK1Ui3TXNFZY6M1KNPr7wAeZanjFe2G3NedX4fpw2CZf7qhUjPW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5maysi3fph1XpRgFwsXq1jLmeTMBazApCpbfEDhjCYAd2iLuB9L72Axn85CJFFYDFWkb6WjvYmBNzdnwRkidDw1H",
  "key1": "4hbdC8dfNA27fqxT3gauNGJuTkrcbFTFaDFW3yhXggUxmwG9EUh2Jomu5FjCzqXP4e9cf9ieGeSigULiczFq5L7e",
  "key2": "2w79Eh1YWTfiN9S6ntsnpU56FpJdcCfMcuzzpGAYPJbdP99FjHqSvY9ymQAAy48nTaoZSSzZmcsLuJVHqwRGjVai",
  "key3": "4UgKWoPV5vJXumYiHX5HznNDbnqD6TLJeCPineHzqsmVAV5zVZ1T8PsE4bmXH4dgdx5Y2xnu8FKa5pCsfyrTMo76",
  "key4": "bBGTi9xyaFCCDxnXRkkdHkE9R3PwiQejYGyj2oXzL7HafEWnVSAuwgFvziSrqrwEjasbPb1HF7EHhi2Ew2BPwqU",
  "key5": "45N2ucD3krNzSXNBvdi9aMXQRYDP9VtLatW9nfDJBgmJEaUjAVUu59ZBwJUfqkmXcJ9s5TjWBmWz4mmRBFDBHi1z",
  "key6": "jChH6LDEd5nYPiFrSq2dLBW6keVz1DV42E2mKgV7wb7tbCSfZPveRnMHaJgKBCTM2Q3GfciXWeUyKS8N9YCTJLt",
  "key7": "5kuswscgagmdEShMuww7G9XwLSmZAGCE9RnZPh8TsRgnG6W629do2wBr8APLoWCSrAnxMNiwjzTax4Z2LpHMwTaK",
  "key8": "2Sdy2rUvvpz4ehcmFzSy8DBiNzjC2ZBZpDSGQuoe3ucisa7YdkUfJgYmgwGLWx5JcinckfzfnSDpjHwM34GSyJnR",
  "key9": "3v7SDHVJsdLf8VK24SWpmWhdJhVHD6GpxT9sgwJFHqNfTACiU3uZkjHnvX648hJD1MRMSbSj51qXetPQey2BeN56",
  "key10": "5249VpMHVB351yf68q8asJkbY5AL2Tm1LFiFnzhtL8epsCUjh3YCADp2om5tv865tK2LxPKTCE6dZRDFFkYBk1Qp",
  "key11": "PbF84mezwNpo9B4AJVLkKQ1QRhDhdVqL87cHqU1ss62UjoFqR2QHqDL9tFSm8NhQrQGYMRKtQY7ePFbnEaob6NT",
  "key12": "4QAkW2uRZ9CNgGBVNqh5QbSC92TVJ1YwLstHrG8hxdEzv9r5cuo65P1Dgq5r9TfciDEJGpNmmffAgBFM4gpM3Uq4",
  "key13": "3sA5JhBRdhUjDhAworAt2JLQEGwUPi9kNjiKPZsnk3iLU3NkwMTwtmeLiBMsCtxFq3qBPkUpjbHFnv6c7S6QEvhy",
  "key14": "2V8dCbUmR7c5P1zeStvx6CVxbQbf6R2skK8PrUwWxvh7Zr23DUw1SzECVLmxMacSb8GdaACQaXi3W5asL4hocMHK",
  "key15": "3jKeycUntX2Fa7jJW1E7CDa3uVTprH8zGw1R4XMqbdM9Ux9GYpBP9m58UsZeKbEyjMW7kZTBxnnQotdjFgucovsn",
  "key16": "3fwXyfvteQUaBsT9RSPsRS5QEHnEjH9qtpo1EGxRCU83kvdqteHepdrEMD5ViHhVj3ZtUf6Ef441QEZHrsdnDVUr",
  "key17": "tyA9jwE7dfWf4AxKAviUx5ssBvdCxdWkFYXFCEKcwyTjLiXb2Paup8u8x5g3tcMCstDoRShPvVRqVtUtnQJSPj7",
  "key18": "2E2BK7hnidSxAiYVkoFkVSRa8LhNckScjB6SsfTCefv1aX69xHwTy7dCqPkgGPqJJtLodzswamejzSQus8Gu516z",
  "key19": "WA2Df3Miay53c2ojgukKVBfyvBgUsH54LjEYoBSVx1SK58txf7UJ1wp6qau79BL54zHG3ZusnxH4rk28VszWUiK",
  "key20": "K7S8CrJ5MUdA5jx535nzpb8DstrDyJ7EvxQcimMcPvNQdpajXuBSxJ36W9L1h48wYfiit5Sby8optUzmMhLL9ra",
  "key21": "433RFkB6HtszBt16Mq1Ha5gysZcasmP5foi4r6BxFxYRuLS1YKHRqZX4AbmiqewjvtTXgt8cc5exRnDN7WvxZFwW",
  "key22": "5gPcznFcYyrV5APPK1HDuqRRrKaQbMyhaeR4YX78dPtiacfzmYhEFavTpPaLPLVtrnC79tcvWaKLbSJPBGCx3xR9",
  "key23": "5r8J9A5fBj6TFne5LJYjB7zhdF35sVTnR6YnBVydxBa9hNXVCKQb8qnC3PFicKhjoccd5E9wCLB1j2pSJph5hUAK",
  "key24": "2VkLib4xnS62VRncjEb2tQ8EcfmG2zqCRpn7mJNtkbyR9aUzyHBMXizhyH7kz49HRZjhJsXJ8N4RXSLFiMgLqSxQ",
  "key25": "3T9X9QHeMbvQFqAWJ7J4ePe4Qpg3ha1RmpAd1gCttoyRZEdkhg7ZRMZaCsg9oRniZTcAiJUHQwVHSXegNYVknhPE",
  "key26": "62W1NSa3zJvmK4KsMpUfR8XjxqqCy15ifGLiC4pUxit99kXBgHQdUuCufJmvEfAVqVzCykveWaTDvCwQUvMBtTvh",
  "key27": "4xTXwG9GfcDdJBUWXrCh3yT9yhGcZpfHp85DKTbfBPqmbdzER4mEYDNRgTZJkqm8yy1DVkxyPZpkLW2S3rySpxx8",
  "key28": "2UA6Jrib3PTg1NgP2Utn4NAv7LCxcDz6HQaLzvMCzC8X7fs4W4ifHmg6UBNjUSFrHbqh5hsX4ZrYU8UzMLKb22VU",
  "key29": "5y976mNWQzjHxiPKCzGcReqSdMZA3PAjnyaJsKfZuEYjYro6qyoBMN9f6Z7Kn27jCABYKsvUyMh4GWQtyMQ2Fdqi",
  "key30": "4xabKXoXZEEkdcfo54JXJpB9DqRU1Py3CKRzf7gJzg6kCnm3RzaTZk4Pi44mfc26wJ9ou2Q6KQ15s5sqFLfyefbE",
  "key31": "3p88L4LF7WBmBxMgUvQivD4sR9B3wkk3qs5fjFYZFaLKnCxZdNGcKK2gssEoyDUFGMYTGrxnw19VdZadQ62qELxr"
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
