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
    "3fmoGXqqaW1mseVfKasoj7N9Qbxp8UuB5KZjq7vnrGgDukfSynPu4vtgw5AMJLLn8wajR4SobqvghoDMZmRpndXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGDqtYUcGasT2U12bYB1oAVWhhSbQxqGoZYmZLmiyGASD9Y36WR69fotExhAQSbY2deWGsdKuA1LSYTMP7DmVWd",
  "key1": "2jhHCbd57K8hyrid9JfxmRDar2QAUc5yZdBNE9pgGj2JgtSjZxC51pEbCD8PrPPGfGFT1jLi19WaGAGp7i5pT4TR",
  "key2": "3xAssm2Jr4DGy2VJed9XH7LGHLKDfcQoUmG66tuKZ2jYpmfSQ68ySqFAcMzKohvMqXAv9CDj2eQoTuZZvehbhWzv",
  "key3": "3eVNcWm3NPbcSJgP7SW5qUgQrNwR5ANWRpAd9iVjahx5KCfU6y6M6apud267yq6yKiDJiKQ316GLruELxhtkenz6",
  "key4": "tVnvaxzS6iUpW9YEu3TMJtdPYSeWaKg2u5wJaBXL9z4ZA1FQBSYHMqyAi6RUHypEiyW55YYSyw8hfiQyHcMH1PQ",
  "key5": "4cvwgbZEUQs7ADmm9naaN4afRtczj8ASEyU7ZqifWW99gdVsdpTu816KAcGZbYNbA9zf8uaXsLGRb3EHYiARUZKU",
  "key6": "4d7xFaVLhAB8eWSQHmJvAtqCWSLtcD5PDmY88KSjHC3goyCfosziYRpK9BVmLJWZuV6PgZpn4u9YoHci8NfNRpvd",
  "key7": "2MK96vXXUz5G12x7eNzNn8pYhtCrQkjuynADJY2werRnXWQXr4seaatPsbjRaM2LkBxqLSBeJGceHZc6ohT5GxTc",
  "key8": "2hXs8Abd85EQV9AtERTE9dLNK92uoXTzkizWRrHW19v6Z2Mf78FsowrPb8FkiJFdSugDig28uzuDQUjMPBGtbhvx",
  "key9": "2iAKxYKrMqcHucEaL3W7e54vBnff5j27QdrTCgem7YfjE6qW8U95xRDqua4TCJXaMsTgvZtnr5sZdRGuKtXe2Mnz",
  "key10": "FfG7HpwrAcdWe3ebWwcDtDdZbeuP9vnjRSF5zZ2ALNH13Y2eZkiG1Q32TctgC7oD3941LYZhs7jveSHrzjgFJrA",
  "key11": "4716xo13VR6vTSMeKh6gGFeWzndBi47jA8rzweQACPzzbCrKbp4a3W2QBQmjsoyLQkkbmJ3TKLNo5mtdF8KPYBdv",
  "key12": "4nUSu2iJuHBkRr3dgawWS76MsXu1CbtmGQcNxeXH5WL2S2E89eiESZBuAkUhKSrMTFsTkK72hpq17vZQBuCdDy6W",
  "key13": "4W2KMHRtweuykyRLqRTq14DUadvfTzvFSd8AAtcScGDjKQ9QAtUDEpEVVZm65qsKGPisADv9GJMcx7FmxxPYZ4La",
  "key14": "5PMFWgv73d6YjRT6hPSv7mPcAHpJzGrer1UMp6rhJozoCEfi6SkVWEBFAWpFkdxERr7f8gXaz14dqdNZmjccKP2A",
  "key15": "61jAK6eUMVtZogwV89uA8UN1e3YZiEFeuzZf593DhnFJmEzB59nx1TF37WJbsDBLjWqmVsc1V97sxbTkngJ2itKx",
  "key16": "5w5HikYnsanLNdw5oTjha8HBkxKLfug849qaRhTMKi8bL8r9y8pShWrJp5iDPsCut5qwoLk5p2s95PVKs5aAUfPq",
  "key17": "3rPVpaKapw7Xd2xw9JQZWkgmoK8NcuAxCGdp31saevZ8tXJWXry54zb7w4cd6rwzf9DjJgbUWkikTND9HLamVK6T",
  "key18": "PF9uNKD9RvP7SeSHh9WF2YBL58U54hnznS9YLRVM79KUSpBjS2F5f3dhU1MngWagVa1Ts4PrKpfCQCgHv7QDmct",
  "key19": "4xzj95mQnz3EMbvytKQBnmePCWLVGJUABp3nMYBxUjDPoFHwnAKvxofkpj8iRb8MA2afCX1gAec31AMvGCjNWzPA",
  "key20": "2ohBEdqb8SstvuTpw1Cr93DysadCo4obPD7yFYsGZfM7si23jcYYpUPhS8jXqoXMzm6A8fCstxf1AdnfDKEYSWLz",
  "key21": "36csDP3JRJraZmG5a69ttQRYKpDNX7RbE2GnPo7LgDCUBJ9waqj6JVhD7qqrHaijRhxfVQryMHvc2DXXyWi62nJd",
  "key22": "3erKUW9BdJTwcBWhhtYVJGLqsTqpHCqc1CKmB5bwbrdb6urQ6Xez4b6sGZuw6UmY331UudXbDNQfJ7P1GU9xbD2g",
  "key23": "5JZz8WKzAgwJ69s7BEshDQRTHi2ZbE6siurjBuFXqS5pSCUiBjLYs313ivWaRYypbbG9j3KLftVUQn58MH83LLZr",
  "key24": "5Qev3iwcT3mY1CUKmPogXaXoeiWVgpQVoYQZUWQUL6TdEwPehW1MJPCc6ERy4e2f6213jHkGpEvfntQk4nRMJkah",
  "key25": "57YTtXSdhro9wGAJnukEw4nego8S4v1zGVfToGUsQABrS6KmR4Th1bPxN3GNjj41pPQJsnjsi7ZuBcjPXm4mDHwV",
  "key26": "cDDpeEtpcVWrUK1gKxxvdUMk1wphK713Cd4NnTkMaDeQL5zQAhfnnKg73kD6PxresCYTDZsWGRdpjz2KmxLQVWA",
  "key27": "2AoQTKMsV88qGsf6zzFzTYmrUheieEKm5LejAywTkpLQKWcKqcHFtZpVcWD5rAF3C5ahcyi8ReGo5HctUbKRuzRf",
  "key28": "2ksjfYB4iLNaWKVmfLN6s27UCVuLqV5smHy1UgyyHLkthEj7nfiiA5a7JfAcmrfGrXfGjTnyaNbyTXJu6LjwkRuC",
  "key29": "3RCtvSF95gpdo4frVKqCeEQCqHGHaC7RwY77qe2zp8rXxWegp14YxAoKwiugrS6BFbkvtYRWRejRSmNQNQrXggoc",
  "key30": "3WRXmUoAC5GEe5SeYjVULXdcCRwLqbd6sTLWC2FQVKfzDzTmfhixkT4pJMnEG4G446vHabuDcSuB4wVNa7ZZ8bPY",
  "key31": "2boBju5Nyrx2QjRYr5MS5xUQCVh9XzchcbJQZ76t26DV8KeWWKtzHv5gnEwWEM8E4xt69N4FxWMwPoawqP4ZfwxA"
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
