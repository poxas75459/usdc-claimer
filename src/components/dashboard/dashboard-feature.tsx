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
    "3sPNNGxnj1zb6qJWY4MVJP9aEybpYyj6rbsBdQ8pRRVb6oEJrbkc9GwMd2yabrhiSgqiD6x2D7pUaxbAuVfWgBuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqWXbe1LsJreM4DHpSNt5gYeHevBc7Pps4tPqtPJ2HcRi65YN5Mtimx8E5ZzU5p6jjB3Kd4KrU4XxqprmJM5Z8k",
  "key1": "2uPPiTNx8BFsez8ms2cAMdRj4xHQgTHmNH5dKm9ZB8MTUb6rYyfpQ2eCDtvCGTYPFFvtgFzbTnsoNkUXn7W7LCgC",
  "key2": "yBEGR7t9BW9v2hY8A25t2ow3QdmzcuYroMyHTw6si85nMcUPRFZnENDiQaeBx8Qb1nUSPLaCj18m45vgkNNXzGr",
  "key3": "2ktsGyfeCZv1bGVm5JJfKC2abVaS7XjVe8ksGgGDbBs3N5cTUnoVMjZHQfNy29F93t6XSfsHj9rqfb3XxRLdoUY7",
  "key4": "4K1QEfd9VS5JnGgKdMWQPq6f9VcvzW25uKZNnyWvDxz8unNFHCw4iPT1m27rEwKwg5NAQA1mQeMXb7qaWH4UY3km",
  "key5": "2f7c5fwFpxm5Yu4JeKqkgaffpdnMD1EisNuQW1TQwTebnwv3HCU5wp1DbYu9R4FtJTDxhWrUQ4kJmnAuQZs3BbsT",
  "key6": "42Pkt1snxZVghCbEcZckJHFdiTZLPd3QQJ1TGTDVNtUygpzLUB5DMvgDyG85FMoxH7uNTgGeS5rdGSswTbWe2h7Z",
  "key7": "2tnJXYhpFdXr8omjymk5aP8zM2RxxgZLxWYKgaNpUihddRHChgd3GWABPAP1hyapDw3j8f79GUrzGt8HJLrvSFZN",
  "key8": "2pYQKVr6RPXQdaG9dXd6tzMNvxFjs6rpAArgM1GrVuczkoEpws45Cj1ZZi7HcmFPUGyp5CSnMJRWkb2oRZnQQKAL",
  "key9": "2mChk2AbUJuDoAqi4V5WZHtqzTV2PS6drxBmA5cM3i6EYH1HgtuYF4nMUmo7XKfaX7yAAdYxr91YVFxvw9PxqkF2",
  "key10": "5CZGCiQpr7hz51cvLvSAFQrqXLcXNTMEZzHGAquhu53AtGGdd8SAWXxryzwGXsmC6VGhmJPwXq144fGnLrzpHEY4",
  "key11": "2zQWE2jaZn7dCdFhaqcfZm1hytKrMYAAZxsm7UryT5fBqerTtipAeSJAvQHJAKEkgFJ4gAE6FaEHU1vwzUkinSf6",
  "key12": "3DM69S7uCQ36E9dy8pkg3u1hC7B3GUEkYjKC6NB3hTbWFwsBdfwAi7SNxi85RsqCXvCv8M6JLHS4v6UGYizsYF7M",
  "key13": "4whTHKBnRgkYCi5nkAhmdUkp4KGfuhFPqgEMDDH1hTVzh9JfJUMYAS8ruEpako7StJy4qTJGvCLqEHjjn5ijbzxa",
  "key14": "4oZWHTM4WE5q8fSUpkjQAToZ4EtxswSSR1WVyB6LZG4HfyR9zbwe4hBiiyKAHBS8hMEcaHJadqBsoPg9nLHJThWA",
  "key15": "4C2aSkL3sCRmNxb3jUyeex8zJ4f9m3UHs9JHGeW8tbK2xvGSMYq7Rq1Zv6oFqkjUy32GfFR7bePLNbGExZsjAHFp",
  "key16": "65dkkR1qytzq7hmxxgzpgjb1U7i6fhDTdVgdLHnngWnoS8HxTtMu4Tbftbb51ccXiZjg1x4UuN9YBpNZp2yWRVym",
  "key17": "5BSrvD354iPJicweeEU9ubFJthNqFWYAtnKkmbab6QQPTcZKcznVntfLGcy8TYTdmzpewNac5SwTp51R4pULHEoF",
  "key18": "3eQJwMLFBdAcFc66ZuKuGRQVZXoMURfhiXNAHFncndH2LiwwqAR35cFc24qCwNPLEQ86iAYMZt9bRh2MmgWucq7m",
  "key19": "42ndSfBmpy84uUbpdPyJii2UfG1SmKow54KSBj18a6YdrvBS8ZgBsneowYgD41inwpinFh2ZhEDitVxNuFjxS8un",
  "key20": "3Sc29WxunVDaxjb8WTXEmnuVJuDZGqQTNGvQdL9BWAhhoHrGj21fqevW3Spm65tVhGxNhREBL4Rvcg3JF9H9miRf",
  "key21": "3As4BPksmByUtnFFrBwgZad2M4xYmdZgAeHYu9hUmvQcdSCqpNMaRxsfCczfiZBqzC2mb3x5d7rgCbCPagRszeKZ",
  "key22": "3wwAZfAkUygVewRjCXUWfZ4bvTK5beRQn1nzGMo7GbKTbcoUdTfEKdMcp88tK7YXMNC9PmbqDvomNznNcjRufvWH",
  "key23": "3eand9NRMJQjYvBVY5ZZ8TsnoDjTL7CcHDEhMSEMMP3AsTHuKQTJJW2pMLjPfCBuLt2gEWAb8bRNdPhXDrKr7AUp",
  "key24": "3GawapnMearYedk7C5kgtb6EK24itH4BSUs3cvHo3Rfmqy3ayRy9ea4T2pSTdYVg6Bor93mXCQiCtANUpnKKmvzW",
  "key25": "37qN9GPELxFYtqzas15UKgVCYzumkUcwM8T33TGXYotphe7zttkrRr9kJoAu1a8nXStHgWpwm94VYYNEMkYEufJa",
  "key26": "9hBMEyDoLJfYkx9CjVxnWNYHm9hJSub5cn33GikKCrK3KnugtFLd2X72t6zFXBjKJC7hLRiVmAc5aPZ4D96D3D5",
  "key27": "4WjJKSHJBmfRipubcvBQPgg5h5ehyiBbazUczknN7LsN3eFtK3ZZ7P8NW3KAzmtX62NJBJrfhGom5xFDZx4EkkTf",
  "key28": "5DTCkLPAyRDtqkUnNQjpFm9FnPj14YoD8ucVwShHG5wuo8QcFpcfcrgudxYLyMQBR5i7tBPkHqbA75xZgpBKnaxs",
  "key29": "3HF6CkRxQtSzpE7rrB6vWEXWkm8gLNVBW2fARjWAwkmSqfqxobCTz3hnQcPgpYRGXVF7suyVWMAvAiGYso4YhFhr",
  "key30": "5EVmxFRSdGiH6sreotcUG3Gu8E9SYhnHwqAkE1JCuJq1NbsnD9xmadYLPCDrN484V9RkqQUahxaAmgcYHWKThHLy",
  "key31": "67XQQqVsSKFPfHMaX8MfEdGKTttBWFkBUpqpMggUR6KqKDYnuHjiMZKBT8HuxpKW5dWpNMFqWP4uUPNypaGbFQBe",
  "key32": "5FvQY1hh1zBMShPSTbDPiXUZFoBhubqMnxwM9QqGKS6VaxCdUWiaD9hwRrz4kZrbTJdiz7XyaKtdNsGnDkne8ZZb",
  "key33": "4w68HZnvEGxCs17iYc86KTu4gaMqXXXRELygMt2WoRzb6Ev1wzqdiUezpVNqLzGAdFWpZ1TBxudhqRCeSHqYKe8w",
  "key34": "4qU7H29tFfkBiaFih9zEjgRyhWNWzGDkMMcaqpAKGVTZ1k6iWPe129HGQ8ndFJc2Noo9TFVvGL53ikPV1rJKrx1u"
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
