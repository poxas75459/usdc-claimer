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
    "5XX86hG82Kg9zdn6aiQnua4bg3CvhHMgkfQ32fMtXR6VTd46aXkw8kihwwY65iaZjefpSgpkEY9PsrYA2wXrEwTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFk69duZXwYg1qxqXoax6C4BwX5D16K6FPYwrgLEStRs3H9JQfPuxfziu8CANVnAU8MXCDbW8AmfsdztRWgQEFy",
  "key1": "fCzFbSmyvZJFFKfhkMuvpsVXognLj3AZoUVbuZDZwLQ4gCShuifUTKgZRGSyYZUit5YVhtSxu29UoDTEcisCi4P",
  "key2": "2csyS5TE4S4JuT4DZVJTVk1nNvYJXVYSfenASfV5F4EzZf6t8grVRHeu2VKQThRt4vwSjBpf6MgiiZFQurxyZQsQ",
  "key3": "3nJWpQ6YhfC1Zn2KptHsPq9f4yFJBHsJszbLbzHqot1z2mwjNGiVXJdsVNUvt54Hyy6obR5zGaApt63BEeBVdV5C",
  "key4": "5Pqyu48RdPjDP7kXhLxNDW6QU4XC69iMzGySzZVfWxq7bnniFqCz8d4nmQAaA364cAqNx5BAeqfUTFxWC7mFmBoB",
  "key5": "2pEjYR8pzWEa4vZkxhbDSfbommHVXpuYenHSF51m8JBbeKbFXPEdzSvbvskTeAZ1cMnY7bUtz2V6bffVhyaPtiw3",
  "key6": "3ygGzjYBSRLzuvY4ZfmcurVYFdTZPH1ZFExEeuEcC1MgjfRjwSKHZzHRw1PD7Uw6zzLrAiXYYuhAmUppzv3HyaRT",
  "key7": "5MP9DtE1zDYBJ9kK22Vq1D9dHcUMr8TQU5jFAbWATtZUmxRT7NVT4LArDgiHffwr42RNMw4QFbR91H66BJB3xfXK",
  "key8": "5S1ju4xM43fe1AXsKQJWTZR79jrpzXNvnFBGWWpxcsfHM2DZAnyDQXTfdMyYizgAwErHSjotBnCGpVomgc66ekjs",
  "key9": "6GxG5cLnFvY2DXZ3TTcMqreubNZ21uNgNS1xHrtZiW4KzwvReRKbTfg9yjPTm9PJXRw3L668TqVd6Dr2nf2oTFV",
  "key10": "2qXa1yDwnWk2eNCusNRbAonKD73smEYy36bop6X9EgRvZPDY9ScCYC58DuTH2Yw5ScB7YsrN9NQtjRjw4c52p2aW",
  "key11": "mGbKreUkshwQ2V4T28Bod48X4ewf9U42GZPgE6WqK3avinjfWYddBXCD4uZf7GmH7qARdaBwaSYCfQuPtGNR6yf",
  "key12": "5kseCSePdHaC6rFax2kpxr34reNtnmh1r862TvgBQB7vaciZDiuC1epQtaURQBHrDEacf8NRae7rBMSHbKCZ3n2t",
  "key13": "3n9YPTVoMNdSK4V3XeNm6AX7psPmxWJAXFnDtdrmUaNDJUW7dCfgM1vXCxgmdT27rAhdcAS9SZU7PEGpnj8WH9vt",
  "key14": "2rsV6tTZPZcsEEAvasvgmjhgCxKr2NjLT6c6bvRqBfKqBHLUAnnKN2CRDanYxKpRm6fk7Bb7gnjKiMUXWRiHcPJY",
  "key15": "3x2g96YEdpWkpKPVbUVLCAGW9wL4G5YWaevPiyanAjsaRXogAaN5dUAfyQfZxpWwC3WMfXXkMCuT43PGGTbnXjyu",
  "key16": "2vtmFGHN173JSWAFffAtg6SuvRidQvmRpouQVqEn9HeHX92zrntGz2diMtcFx6cEGYDp7C5BtrhnFFd8rJqNXqq3",
  "key17": "4Lgoqznkqisr4jCgLYXEDG8oJjZb2BETV3mwjDJBCG23rmKhHssWZYHq5atHitFGScix9tJfVLExGeX4VEwKqXDo",
  "key18": "5qnUdt4Dpc7nuaT4QHjAzRmTxH4LhkSNuzupSFGMpQT7JFMoELER7u2dexcy3KGuTMmQgA1VDvanxbhDY8kzCaWz",
  "key19": "4pPcGJ9VqSAnXKFY5aJsYr5ypu6KHw4zCD1qNt8Nn2Wk4oQQDjSTeAbfkH3XSydRaUqKYQnvhJHhV2rDiqRa1eNx",
  "key20": "2wBY9MuGJmoRGqseWgGuohivs2VA1dAZ6xQXk83ztJPapnmJtuMLoNjTMf7LyyQczjArmW4uDyxc5rcAGytpxn2U",
  "key21": "6bhYZkixs7RXqB1PMvCPfvtUsvGwe9asKb1jh3VcC4mzMqV2iem4nyWqooxWzFy4Yjy93etYVGcZvyJUXVsDkXZ",
  "key22": "4kDY66nVmYE6d2Quiuacgdjno4rKeGeSXt3PgaoqhDcHtojyBCFR5dBYTgv72SgTmLK2DhVoPsTm12EmwamDrSy3",
  "key23": "zhM5m3oxXCpfYnv84haTTfSm25meg8gH3GJtyxevvWVEFU2JZzoJwWnZNvzzANY8QAdd2vDqQHwr97xcLbRpBw9",
  "key24": "2TuZmMVuyJkA5QADu8xzEjXortTjgFkM9pKCeiGj7f63Tdq6Lb5zduC9ksMvEc2ErAYfcuhSHp9rCasX6raiKGsy",
  "key25": "4qpPAEiMkDiSdmnaFpeBvWMCkkGM5TiGuEJpb3ZkFSbTNrgEeqgutregob9xvzEFAkEEnbvDtXCzc9nDAxvnrT3V",
  "key26": "2ThYfLBiRCmKaXhyZciRmVRTGvLuKvdrWjp8bWTUZeQivxhvb7SW6Ur7bjmWx5Jgi86zxuet9yhJky3d847ZKUAW",
  "key27": "4g2rJZPB9YfFUL456fmgFzAyqeSuEmveMWaCXcn3wffDJKGbjoMCB2T2z1MUVCSepsbSkGgdPaeZkEN6CKmcQEbb",
  "key28": "HLC79qC2eZyfUYwYFjFExuFzKfb9M9bgx2EXS52Ci7GQGNYQa1a5d2FxCd6XJwcgm6jGN317rGBN3HWQx1YtfgZ",
  "key29": "4srgetnA3LCwAVXPNyAyK5e7HDK1pXDcqcLo55jYfn2cMVbJDxezt9viYuoorfQ3Tsp5xwVZQpV7LdVLRTq36qr8",
  "key30": "4nvJ5F9p3z7W6hrWTBJopqr3ShjwUtNg8EH92nDcLvx53F9i5Zs6bi5KPZjxiaaEURc7U4RqXKQEhi7Kfom5xzrr",
  "key31": "4THfswkbrsFHM9nCR8tu92R85p4vfQjB553zArBbm7DfqWiJtKD4Kq6hWKE8nQDeihrLXF4gAvZQmxfYez4d9wyM",
  "key32": "4aP2t7jtT6ZrHgxUP2CrFcERtXRMn3T4SqeJgbDyogkTKqGBAQGCauJbeexxf4xCqYKE3beL6mCQVaLXQKS7EDGX",
  "key33": "2P2jkoGSgGfNbdonGYBt9BPft1jDunHR8rXKqV3m9mTm6LRc8ixGWNRToEjfVccKRfoKXfbZmaNo1phjpSaPVXcw",
  "key34": "4X2SnLVmYDpTtKCAL1LEZpZFHcYdbJG6PJXeEcovXn3YDjFQAgJmSo3o45mkLvnuCJhsRNLtLTPBPaMhintwQB9g",
  "key35": "5CzKahR48SBRUpivtLzyiUiJWLWThggkLps2rAw8Q48vbYvL1YyVxEL4z34JP481WMQM39BH4Q7pe7XVFgePAHvm",
  "key36": "NU87LQrwgjZPZKVPa1mbVGVYw6Skn4d7NwzpTQNReLR1tVNXqhzqApYwSR2XwL1qWbT5HfNTCZ3ieQbGKBfqaTR",
  "key37": "BAxLWtxDsN9bvpxCDqHFmRNnEGUDWqinXugSnzmYq92u2at3Nr9pDLNiVuNk5TVAPY8tzzCnkT3VJBgZfv5Sa3B",
  "key38": "5zbbR9YEByNxUkh1k7n8SrA4TRcWCFUmyjzFVumY5Nt9c2eP8nQPLMPCvKTZCknxiqkfK7tKq691eHVUhcu14GaN"
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
