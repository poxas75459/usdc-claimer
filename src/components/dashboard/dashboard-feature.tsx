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
    "5ofpJ3LHE1h19ofiRPBWWVCpygnsoFQWyy7wTxh7e3nN3LvfH7yWAmdAQ5gmLkRaMEt73rmxbnuBBrZaXi6MsFWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKduHsQ28y4LdKVSPoDg4LSqxHaaStxJzRivAYwRXBsrL1NFnZjuoqr3SRmkG7XdMJ3eJPFyeUwCrFKqyj1AnBL",
  "key1": "2K7Y7AoLLkgQtQRqC1grZSwJSMxzkYh4CHBuNRLDWYmsh2tRZ8ShkBnBU7cDaxMr4UVnNfenr3hEv1LoQRhgXWbn",
  "key2": "4MzWSDjZTijT5gSfGmsiPxWg2YfbM4CtTCmSvnVZTHtKM6REBdbQmL77Yv5PfZcohCtZSxFtPh35MjCM31DPgGp2",
  "key3": "485s6Gt7ZbPF4Wk36ELMjmSMqYst7ZumMnhFUfXNZtBVYRKU7kAENoGWfRcVPa8ZXiNbALg75Cw6YmipC3AM6LB5",
  "key4": "X8vHnGnfLDYvaMwwbgsXJcUpVDjmSoqv1e4kZLBWcZWC1XWYG7uyfgLt1DTGZj2wzcyeUuynXZQXJ5MSwEhGMia",
  "key5": "5L5pe3LUhpLfURPgsaQu2jnbQDGgZrZxNKgBiNAWJ6nBQAX5HcHFBmQ4sgCiYvyjSCyXGWAyPrQF7RNTN9EYfCAF",
  "key6": "kGs6CqFHpcQcT6maUxDLgrC92dBZ8f67KYDDWT2VAmNoSCmzXerDsveaojUVc5sn9VjdhHHRhhmXAx3oiXDQey8",
  "key7": "5YzbhPKP1Jo1MYSmeYhf5DJa4CXngeV3KNd1hCMpBcjFhFwbg44KGhcpCUw5mRjy9bLhZXQyeBxH86hxjLsDgs6w",
  "key8": "2M8BSHGazVtJFoWPQvNchLr82FJ6hsNFEzeTNzk4XQeju7fK3e8LCvUUSyp67JF6Tk7UbdDRwookWAAYpygrFL8Q",
  "key9": "2kf2D1whztgrjoGQHsB1mMud78JSAt77BFfKDpaKhxVNANGNg2eEh8jReqq314jJoh67Dzk1gzNjMHawwyWvm9hW",
  "key10": "4B9aFfDEKN8TrYfWvCL51iHFKMRWDh5LpzHnAJvCKY2kfq6S6VscHecM5kks1oooLKfHULTTnSxLwz2HsJLJR2KM",
  "key11": "4JMycDf2nYsdxSjZMPgvpxE8VYeTxvGYXhYEWsKzo3aaJpXEvaMgNZSax9LZT6iBfnkkexcuAZpbBVvHQWkJVJiL",
  "key12": "4wwFuXEw5g5bP7w9bxkcEGsRLPATr3t6p466NZPBWBzQrGJiQqvb59FQ9kjvcM9PhhSvGGpNtVH7nPe4X5izZtUj",
  "key13": "2NQ2dTaJKGoq3MW48hcLmoGDnS5krx9X6bbxwERBdXFeKSY96SiRDH9FND9CZKP1iW3CLB72JqQ11Ssy5xw45cqv",
  "key14": "mJyXrbVvdcsBZFSP8sVjCdZxKPpLvqJ8awWwV9nBsTvPiaaHY1xwL3Ehxj2vG7cekRrZmV3umzgX5Z5Wi17ny7U",
  "key15": "3UVXHB1BEsjLiDdp6L6eCHSUHbWhtFjGe8Ab7LxCdZovNaXYmnfhzzzkd956cvt1XVhat2UGNmWaBh3o8X1cDsvg",
  "key16": "4QJdA8aKQSkUELu5mgprHmkgUwMzKmm6ry3ngRxXudkpX6haLnA8pELbsGTyPkUa37bRFmD35t2KJtAcao9n3GVS",
  "key17": "5hJhzyDpZLZQCeZ89BtAgArgMtCEwV5YKkrqjC3HLYjuxPdnxMAxPaAo9YqhTzoKCao4fH2u9DiUA8oDe1hxtjkr",
  "key18": "4vTrfAaueTdttzBYooNs5ToT7Lrf4rtrYJBzjMMBwfGwf9jNhKtGxhrz5CCteQ8jDkJEoKmw4XopqVtfw62J47Mn",
  "key19": "54sqdfphpa2BY6JvUQJiKFj9qJxzYSWBY8xMpsbLu4PmtyRC21wtaA8YZ9Y2LrzcTLgEefdHkd1pzWJz2pKydZyp",
  "key20": "E8Vrb7SauDaTW2Sa5tQSs2CvActzST95TREC6ZxbqGkRKABu7iFKRqTMbSmVRRHYCHatdUDDX6VJdHmgM4UFJvk",
  "key21": "cdnVnxLbQk9GF8Ti6B89uJL8fggopockzxmSDZ5b3gQx1MoBQjTDXJUp54GSTBX56BWxunwj8VEQdzsVGGdmK8F",
  "key22": "4ws8RkHgTCCQ3q6emya7zdoz9tWmAhpjSPGKvooTPN1CFFfyYm3tpSC2BRnbwzz4XzsepyuakxmWz8v6sNYVHuDn",
  "key23": "2pvSfvYbuzpV2Z2UUBser98U1Dt6mEheoi7rpZytusFiupqRzhTo6MkzfnfWLFVdNbQKeM1f9iCA4sqTKn7Wor83",
  "key24": "5weWSyfycJagaARGEhYTtDTDw629TNEuLgz2XQrcfg9NsrHNtRxUnTGFpoYnJtGZWK3b5FDcZAENRehXpxEDNtTa",
  "key25": "4oPSRDsAXJ5dhyqHXifxJyZqHgYPBZ61KWbC8FnexJvsSYhWLdeMybkMQJFoxFHFyxhqNaYAj3Zgz5r6wmbcfV1d",
  "key26": "8ULMSnPLJdkKSd8drk28MuKYnmhMaoeYyYxkiH9MPMZLUtBy4qjzNxR49vwzpXyprVQtksRyMtvv1VGii6DHH3H",
  "key27": "3cietS9nETmAaLZh2dmAhzgQkvzRHYQKa27MXq17GzG4LwdD6tQabdBiAt1KwBsFKzM71p6EbF3qwMfKhaPEXEeA",
  "key28": "UWfbBXokYW9H66M3TMne4ugQR2rAu31jo7Tr7A161tpb4YucA92EQir1jcbx9qEf98FcEeBYf2GUPkiGxtme1Qk",
  "key29": "25T9A5gQXwNakseMo7dBQHqDWWsjyGntJka4gvMKhVPi7H7rnj2ziN5bRR4nwzhAmogBue2fwSRiynDYMAdhDfUA",
  "key30": "5QgrrSwvNnaogjAmjS62fRjR8MuKsUM2uaKuSiXDwgauTuWzRyH6Ekq3rUQFXtmrjrN4ipYmxBZTaWUBHDysi1Ye"
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
