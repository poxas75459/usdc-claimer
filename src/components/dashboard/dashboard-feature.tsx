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
    "2Rjkc3CTD1V6oN1X4m53F9tU7vuaZPcm6ence4RqPeaTbL9ak2Ryj2Cs4k8vKfqm615gXJHkR9CUn7QyTYkAw8Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzPhMwRLeWLdBURfrKocDBcCtfsxxLMiDBN3YEnN8PQn37ayWKgVNvungPQtuE9y6bd4LomrxeJd3db6zY7cwwb",
  "key1": "547HmERKgathKxdqcEoob79P8B4TWN4kZrNdFoRcczKZdQzfaGSMU6PRmKbvnAx8bWQtSmR87aG9xLv7weRSYZju",
  "key2": "3oU8EtUwSyFYXy8ZbbHvmGKF9gPDohwpD6eVeJBLZQdFM5v3xST6pmaijKiWNWvXYSaCwtJkcw2pUTomSu145Qsb",
  "key3": "2Mh44o93n2C9BC8AaKz2FQLNLyyEMqDpcBkgpTBkiDQkXJU7yersuY2yGS2a8fJiRg6nPM9UWwAJkLahWqUieNx8",
  "key4": "GyytqHHLX1jVAL1Wt2LNa8LHQinvzVepBmoAFxgAyDA2p9DgpBuoJHYmGmPea5kkkqHvH8ugHQtCEYza4kkdyyN",
  "key5": "44aXfdvc37HiNE2TyM7QCdf97QuwenCMR6bemhttD3PSrThDCY1SxioUocvKEAcWRNAuzHMWXVT8U4XWR9KVi645",
  "key6": "3ZR2wKFwubpdmQAgw7BP73e2VPgAKmu41S2v8d2cuQgR1DwVhuFw3ApCCARxkXcoXGEmKnBWFZmNqscABxJd2pL6",
  "key7": "4nYWrtCBBF2q5jdy7E5ek7HWKSmofnEQJmnYCZBKUezCKzFEzMyBG8aKVxxYrzbVdqbF6sVZnbBLHFbrPcjZ6WQo",
  "key8": "2PqhQiKQdfK5wCFhtSHEdFzeMNCqNDXfiRqHHjpUeztt5zBVLcN1KLdbYge66noAkN7YXrqxySjtccChFd5tbn35",
  "key9": "4ApRzK2tkpXFRV2rTuBke8th9vhEU2tKfYNsavpuVeHPEocG3KpVq9CWSu1GnYPfKLmfgaspnEbqh4DnojTLWoQv",
  "key10": "4BJa62gDtXn768ohuyWH1xZGbKhSvj61DKQ9SkuZBrkA3SwLcTsBGJcqhSwFcbGJQRcBbgh3ZDfKwiquHBDAbdVV",
  "key11": "K2XRsWP3mgAPPu1i5tmWuRsuHu9btBfBwTnD24m4aBGYQY9ggXp5FjJQFqWv1GufEWwgo9xQzX5Wdn48GeyFTQ1",
  "key12": "3GLbLM2XP2HxoaAASQTEiKP9LpAdY5Ymnz2JUMHgJDynfg97FpYPQZfumUN5Zu7ie2ydJiHHFaRzgHEoNmpGkyvi",
  "key13": "5zoyM7M7ThXrzuKivRvQn5TdDLvprkaXyxh5hDAvYbrjSxWBFcaxMbMgZW6HZLon9tnZUuQE8xwkjnLBckyo4LHA",
  "key14": "2L2KzjmuzBkq3ZHtZpFydhuAzB7u6TnE1D1sAQBQMmFxTXKxnHQSjueN2dHPhicwrrW7Nn7C64K1qArFEHDfY5ao",
  "key15": "2hrKnu4DUsZgCSfJFYoiBXAbETdrLdoRyEathQEQ3j1Dnnr2CbCy4KrcpsA4FTi6BVQEUTkxHav7QaHYpsJBazgu",
  "key16": "5Fh4xqmKvPK1Pbd29mv2sxoXRVsyX42tHQYxYm6A4MDDJEL3H1m6MtrAtw9qVDuVAqPFjn7FTCkjJqTBYzUEKA8x",
  "key17": "66xYpLYeKvYgeJ3gCJopcFwMMYDJrxw13tkcBnQTiVTqV9WJkuZa1vgzJn4MWSops3ESitSy76STVrhzTdETNmVR",
  "key18": "2iqdfz5ugKzaCoy8jCep7nzRybFwwfHK1XxqUvSRYheYmaDv1JD5jdpbz1FKdvAoMUm6CQXsMknkuHaYspw5Nnph",
  "key19": "ejMwYMi7568PxtRYAhUVEhY3aybkeuFV3ncgcxzCR1UdjqWeNPCoZwV5oN2Gn5JybLeHyjVfGFQ56efGzKoJZNu",
  "key20": "ZeiB5m6jrQx79x9Prq3ctWDUVB6BdmmiqsXMYL7UhoG7qj48bcQLFeafpW2xKWK5srMySczig7aRXbsa9KnNkiP",
  "key21": "44DEUb1BfRnG5QRYtimpeLf2heYBSP7PmgE9sU79N3S48R1mvEMvXzH6x1yjabphz8rufcYE2YbQuemK4oxRgkAG",
  "key22": "sxH2iRQJNQ6hZQafpNAkRCttJRVMg9p1pHyge2LjD83JGXWo6nQ8MfWrjaNEcnz5Kaw84WNnB5qB2gK1DmhqvfY",
  "key23": "4QbvsiMWF2wMYJRnxBiYvA89LW6HRTJuYTBpJi6DbG27U78B7LikEs8tkKrB3MBsRXKzpkdGdd8DNTKERaKxHVTn",
  "key24": "4sNhyaMvvgNWewZjKPDbqKJgAiuUnU7ktshwpDBDujAEjWwYKL97RKQGd67qxYniaeuJ6TU8NPhumwjDrrFJY3bk",
  "key25": "57cYJVWoVRczz8sTtPKb2kECo98dtkSQWJqrMhEJ6cuZBChKduWA6vUWQad4cM8jSVSBM1Hx6Sr3qcuqHDkYKPgN",
  "key26": "5UorD6iGLekJTT62Xtijbr5EEcWYVNozhxhisF3kzLh25UWBSVH2M7aQfs2TDr56DMNAUnHwXanhbUr1PcJpQwy8",
  "key27": "3ViBSn8YAcaPs3vmBZ1ZNJe4zXZ7d4yivTcjk1PKwBx1yoSqVXVz8JPtUMDXSidQ7kNqnSn2FFxg3XDU2NJV7RZ6",
  "key28": "4NuKPZfrH1ArsqDMcszftHHFA3EizupWg97qLt2r47KK3QV8wmzShtVASayKYDYzsr33zgRmHT7FjbfprUz8VMC1"
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
