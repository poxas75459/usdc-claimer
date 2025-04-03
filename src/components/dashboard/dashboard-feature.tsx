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
    "2idJ5mUPoGmaffrV1BSiiXMNNGV7gNG5p2MVEaD7mx5QCMNjZ3XkmqJ4tczfdGiCBgTSsjvSWpgxWpUj2XX3wbFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1aAAaZa2JMK15ro8KMoNREae2VkKSJjqCjSEb7jFKK2BMYSyCXpBwLuLg9bSjhATNUsJeEv1HZsvVF6mFvc75Z",
  "key1": "2VNssEtJgNpmD18fC9RL6JFpcgVv6DNC61UPKi7gCnteGkHcqv4AidkStR5hK3Ku1xoVRhzEZcWW7aux52uEoRDt",
  "key2": "V7Kox36BDnRxFiyvhGvXycfwUhZn64HAXbfYsycb61hhiY75kXLXbyFkhxuvwESsc3wWxWJAyjeGAo6nK2QBqv8",
  "key3": "2f8T22dgHtUSzBVZcs11YKgwTwi4y7eTWfN7AhNJkUVMDFSCp6UUgJoenU1GtEtXmBpQ72bmExqkzzAMUnk1SvSw",
  "key4": "3NXtFWz1Bf8B8NSUyrRM9x2YjocScmdKEsew23wYgkwEcGPmqbfg3ijEBT2zoCDAnryDs6saq7dujycvbcGKBw81",
  "key5": "jDyKQXg1f3owEZGDuNAJcXnUHEerm9nSaHC9z9w8kmuJXc4kELNDmofRY3FYDqQ69DNU3UfppJcUHSMXMen2sxw",
  "key6": "3DZhjfqcS1Wk23FEY2U6XdbZfpwL2aAsd6VCjTw8HWCDKFtQHcyh8gipJSekT298ctPrM5r25r9JXxvKToGwWrC6",
  "key7": "ACYf7xrWVDoT26DocsEYavtvsHRF9DhmYWxAVr6Ya3fc3UJkBESTatNhtbRFrUDEZgjtZskqj7e8BVviPiwbHms",
  "key8": "5Z7mfPc1sy4MAu8LU6DXh7fzjqWMjJuvFCCMqUcNvT2pei52BhBaPWyexFhZBsay77ALfEPjZT1EZAZUWFE3U8SL",
  "key9": "3J4JHKPB3aRfw3zeuGjDoiEqLx2HNJy6od6GgNjVpvR3RaKuezqCyfdySpc5Vk3NCnamz5dzPQ2tcz8Xv9zzzd6i",
  "key10": "2hHT9jaLgRCrU7rBw5XxgGpu5ZUtiVt54uUSRn7ehuMxRAsQddYGJJLVw5p2Fv65V3cKhqE2JM3kQwch2SvKgZ8e",
  "key11": "2Bu5xPYdT1XM2WdZ7rgoYyMZq1cPx6Hxdx85vEhd5zexb8NxirCW98ggaySbCyM7xvbbzxNfdnu6Chx6SxhgQV7H",
  "key12": "h8GQeCb4fXgFoYccTZqnjRoR3pDqgQmcGNjJk1GZnqnsoxU6dkSxHiJNJPEsqqwqDs6u8AFEuh9tX5vRM5JUswH",
  "key13": "5fvKT4AZfEVVgN5SFQTDybKWkKNiTotTmSFfvP3sZ5ixwNa8stYr85KCVm3MRDSWZMDqmdsYgLdjh2GgiUDwc6Qz",
  "key14": "31SpfTpiB4poJoiRwBtWjgnf48P88Ayn9cnQQYVb4zYVhbvp64gF2iYJkQ6A3BF1LyBhq2J8zBAMy3qrnwAGHj9w",
  "key15": "3Y9BYCKmGUYay4T6TAHA9MeaYe5yXRaWFQeHSjJ7PHc7DUsENjdpad3RvqR2KXgvs9SG1REmv65daW6kVnu2VpRj",
  "key16": "3RrYcuKfh3dH5YAZFeaVMk9P7LdhuixJYKUbTx3dFfxHEdnNEsQfzuGeK8HH2xvNb32TekttuSDMcPqgx9te4kUX",
  "key17": "5mdjoQoC689ekZWsrMKvvR5zsS8FWebf1eku4qPYzAYU1hdg6gT1fp3mdYATBQd95VdC8cue7Yf5MbSjtN5ApPy",
  "key18": "3rdN8xy3LxFQPufPYh63N7jA8kXTHhxNAjnuJDcPo761yWDJsBGWewrgSAFBPkGPiQ6SJheKDKx32FaQtdaRSDAs",
  "key19": "5ggB2Ehmq7XgATNDL2RFGuY8m7yxT3fn73xrUUMyWj1rWtHrW4oBQ2dRgr4u1AnG16CyHmppP6EskBSmBrozhiX3",
  "key20": "4bXJZr6CMnnFikDGaVNb5BL3MyGSxwQD5EPZYAuZzoZ1su5xqLTyQTJfVu1GRfiDZP3DL1QfojNv8AWsZRG3hHfs",
  "key21": "2pGc7yxgcTgCB6UtG4pD1PWV8CsaLUwnBKUT41RECaDSpPdGMBJKHuXuvKovWr2g42gpVzsDBkY6jPZULDT3hBVa",
  "key22": "4kzeEEb5YERxUt75HbV6kzgx7DWVXRUMisqpda3yqZy8qqpfVQEQj78Uzaofod9sY2SZZLVhPEyfHWT7wWfMJ4qW",
  "key23": "4zNNcMGAJGQWW1GdEJ2E9MS3YyTQaha8tNCS9cN2KeWa6L3MWFsTWLyayKjqr4gSdgHcuZEHqwfnnKuvTcUrDw5o",
  "key24": "37y7vo5tXoh4jqXfVyQuvscCuTmt4aMC1pvqMrSJRt5MLmx3Lg21vA4Eb7WPbRBFy7SHmHP1tanKWrTeGsPRGCTC",
  "key25": "5YM9Dga2Wbu5ZicGVNXuzz7hHXtjwdUdL2GC5W9Kjr4JEKp1LUrmJMeaRx57oNnGNVoya3b97uQRNq6D5YThwb4",
  "key26": "Nzf24B4X2o1RATXfLw6ihpA16LoaQVNRtcLhjCpv7r65w1n8Lw4ZRCeYHR7KtPzKTNmfXtNvFU3tbsTLpef9C1H",
  "key27": "29iccBiXsMvM3A9mQ8zrGNAnRndfYpzHdS3PedHujzwnihdg2vRM7tsVR9WgphMQTPV1eu3SsbQxrBR4UYHxU4se",
  "key28": "4e7H9bFSCwXBDPaUZBAqecadFkfd6iqafNfcApyspMabxap5GmJo4qH9iwi5WXxavnnMgBhnyff7mCCKojvQP3AW",
  "key29": "5GLaMgc3vrCgysUYTB3gHMCEQxmbDmA5co4AUeUBS8g46XJEVBTSMWz7HEbGFgGkjuKPUTAPSB7vSqazmz6yC62s",
  "key30": "4uMakhc5M7K8FUWr1Q1W2GnRVRB4QXKDw1ioUS6iRsDBYirsctm4UMgLJajLzZ1H48upUwHeRNmGpHQECJes21ns",
  "key31": "4ZPJqhSZ1DDBAX7w7ACWaRbWmFVv1JQpZX9TQY2UQ6MCRhsfxg5JgD8fgEsVNxTunTuxj1rN4wKnihyHv8wDJTrZ",
  "key32": "HNJ8UGiBkw6CY4wgfVwtvMnghYh2haiewZMptVpUZ7T3rz2TEvEwUqtivVUkG1d7HC2fwruTJ6nu7v8rxmXMBHc",
  "key33": "53KmpvDpYb1293X6sUgFn8B6EWxqrAkz9W5Lqk991sL95GNRcdTCbGW6sbxsnmbJc5ZhM2Put1LypiRJHgF1t24g",
  "key34": "e3EKBSzKRNjL9nUfvA1FG9BztEmBabj6F9XFnjK2bn3mwN1RV3dkRVP9otiunA4DdhsLxcX2JDTibd5CgLs89FS"
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
