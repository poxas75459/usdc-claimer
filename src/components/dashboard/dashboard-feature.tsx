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
    "3xb9oB6H4AgVGExSFsDE3T9tatncAS8CSTxDuYJxQk6f569U2r7y1frcMDG3VmbcMPv7kroZd15NRPD9zw2YPy5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3cjJibMXSnMJ1wPRSq9UhY98hRfSFUTpbkw83Lb4hGPmZq7e1zCe2hJaVncUXdSpdC4HBbHeiiEeDWSbEbrJEL",
  "key1": "5STXJwL2w1hh7Sq9LvLiiFJn6hVXriFQ3DHGd9jzTDnuMQgmEhz8L1m3RZ3x4LtbU1oNAHA7qhSh9x4vdiKAm7rm",
  "key2": "3DMtjvKZn4phNFv5PKrMQgs5XvMiF8z5qqCzFw5Rb6WKQAq186mZdLWQFChNkUX4TVgubYDN7A9WpJFYbpNmiDwn",
  "key3": "2r3JcQXbamZ93CDHTXGPXKcqRu6cqg6QSzRnCnCyz9RqSt4Vanr6ufz4CF6fQV24UtbQQFsoGxwEccrFSfVxyAGq",
  "key4": "5En5o3kghu3VZZpmcrUsnHWncDxpY227UWJBi58ZEccn5h8RWavUykNYzUM3PwSEV9suBaLyDaHcUKo15jKC3Ctr",
  "key5": "r2JpeaaBGzHoeZ8azwUa7HAi36B7AuGPvPazjqonz7kojzNqjhtoevMT5iTkePECexHaf2JH7hWc9nfqGbaEsoC",
  "key6": "5jmypt981Q5LK1Dt5BBLEaWCB9LNttktxpuqK7uLXU8Lg7HVovotJNq7NEPWh7FY8vnfc8S5UBAddift8BC1yZYK",
  "key7": "643d6HymhuTd8cV6ZX6Q3K7qYXDog9j6fj5VbN1NYRtwvV1X7fAgLFACEKYay7PdJg9NtzyQvzkiCWjNmuwxDFbi",
  "key8": "3V1KeQadZwgG5z1adx9BAGHKbQQwvYtEcBkXYicsSPmMEkcTpHfFpeB8pXtd8j9qxijGNhHdKn5iSY6Nz6YmZ5CX",
  "key9": "51xcKyZh34s9RArthjw7D61fLFACaecJYe1jcBsituwxyVQ4gsS7v3XWsC3tFPbgaE2pt6ZwhrhLtT3Y1VeW7nux",
  "key10": "ipRqJi8h4PWio3XAaJBtF8Ly5XNCBbNo9Urh6n9Rm4dxDAdVem6J1dyQcDp3kvvBJg81Htv4XLqJfEDxEHoGwcH",
  "key11": "Fw4d8uUWAoeucJdK4DSdNU9v89jwd647nzCZwzYUJVGKTFU4msmN7acBqGBNaTLVwRa7uUdqDDf9421dRVTF2VA",
  "key12": "3BS3oqevyjeMrdZoA7Gs9e3ti7QvMMKMwsoGi5rYHiYpwab1SF6vG3nxXmKXyPdrrqguUPwRBzUQGLRFwBBhPNPa",
  "key13": "aCRRTmsGhvFpcZYWvvTXV5S4BdZgzZFpLMuK63nLbHnoNiUYLz1W7L8NM99MSrzRYcE2WZJCFkio8LnvSiCnEQZ",
  "key14": "3C3CTzgKZgSV1Ua4vgq6FAPY2z9tEWRNLwoGaL2uC1phYG4etAKKWJ2Jx1D1x1nzpKzVcFBGN1QNybueit3tGFxz",
  "key15": "4oc2CgKLcoBhfHEiRAAR1tERQcksXRvhCnrcpr4qLHpvW9E6XbRm1mGCVoaLjhTC8P9PkYK57HsKofzMutKtyEno",
  "key16": "4nDzfDuZA6pnJjE2PgcLYSiMB4ZUF5jhmdocjhQty9nf6MMVt8QrBENRm2nRosLsRv8UszoA8NZv3WRcxpWAGp5D",
  "key17": "21aaSo5kJwot7BCUoy4nfZ9bQSkygvoK1hZLQ2pUP1PdbLBe12GPH74vza2kVAPYwVp5jE4ZK3EtKNn7QyHhdEnM",
  "key18": "2RJgENrJ9gZahJpj9GxraZD9CDxKMbTkRxqpuSYSBGkpySc1uvUmsCgJqR1bdCMQZrP2DHbmehoWmbBWEgSpDspa",
  "key19": "4oJviwcbBgTHUDc4Z6msU8pXxN9ty6YZfSTmzquUTyPStTQ9WYkcPVeD5wmRe4TrDmSCtcZCc8iydvLSDDG4xJxg",
  "key20": "CVw5Br6GfapWofL5gsTHMunUti25kTStuigskCmG8yCbtP2hATVFPbWc7DZUs5jtWEURR2rJZPMsyiB5XRgMHd4",
  "key21": "5wjkrNUZhw6MKUXNZB4KzQ4nh5WncWHL8sU5VtpRoDMa1GK7EFJmYimjKtuh7qhyt2tVPiaLwfnmDHnQxbdGyVbE",
  "key22": "4L5HUXgo6rBrE7bNB832GBTfmQvJoA1f91C1E7Ta1qdpiJ3EBMNLk8nFQvAjEPztUCkpbYEVBadaQB1voX9Y271n",
  "key23": "2QY5hwmhUUuS4pizv34vkj5LCrCiGWNTG8SM2HYMmGD7G9KWz8jcQczrRHFgg8cGc7FGp4TxQPNid7nS6VGvNNNk",
  "key24": "2S8Bi1qknZDZaAw63FhqJiLch8LJYPeuJwxNCmqwdJddTx5HktFxqxZZGG4Y12yUsKPDZzhEucfHpG3Cno7bPVbE",
  "key25": "VmuQuer39s1kdq9yb3k5Bwg8u1iknHMmLhLzHt1nDUF28QnkXAs3eFkZkGj7HHdESeMnDX4QrcVZ33mgYSqaegk",
  "key26": "3Q3cq4DgwFGAnDpvnYp63HYnN62ZQMycJmtftSUxFnYh1cmL7gkiMZwDfP2u9fiYZFy1qnuAQTs32hWCuVAyGfZF",
  "key27": "5fQNP9ouWHSAtHYS4h3vkjPaZeiJY3zSMT2ScDYaRgfey96qdkGoBp6V75VrrQCLPSWwUx4ZuXtKbmLqM79Cpnci",
  "key28": "2wWCgNPsjgTSCqTxJynq35aSjo4GgAQri8w6otvaJgCn9Ddf155aKVuCMEvjvXX7T78FajsLn34JAYxiZGggAPi5",
  "key29": "62RdPngbWZ8MTbHjW5wdjve45E7843741ukkSsJHtpmzqJ26Yjmy7CscgpfM8wUTZQsuujFqZ2u8JVGk1Jn3U5Q1",
  "key30": "3pTWhxXzh3CnaBq1sXUNAVmrmuVabcw8rM5JBkfRkc3G6TNorFYQcD2aM9LpTjJ9ppZyUfBcY4u2wwnE7Dvu3txA",
  "key31": "2RHAxRbJqsdNFRTBPXB68FkGJv9KxdAYjgtPZ76reVkAsRXEo8WyhisioMSFybbys73hLy1iBE3SC4udZE7nuvjj",
  "key32": "24DkLodSKXtpzotzL7n664rNAh77g89Dsvc9z8QDQfYCKpzpLqQyiVBCTyQu2jFNGprAkW74ccBstVLSW6bjCnzT",
  "key33": "g7mYSHWjcidRT2LA6Z61EkJj4JDA7jm46MpU7AS3CJHak9i5baoHpFzYH7ENJu6yEF1hUPyiQzLH3C2s4gYPFXg",
  "key34": "4zrEajZBN4JpUmQFkgHurbSRzMQuzYhVg1SjqR2CV6A66vJKn48CoGkD6mK1uecfvmAWjBWXh96FmgmG5VD3nFJL",
  "key35": "F276stTcmNQkNVgMPHFYmwcvnM7VQ1Zaak8SKpHvfaVHf6M8ZunMZUUWdXSiE4jBFwUKBfLNxL5TjhZ7od1v9BY",
  "key36": "3UJ1kE5i976hHeAUPeSYGiqThoZArxTo1qSjdorE47aDX6mtKrGvufeg8aFDpgfMJebHv3KFWB1mg8BWpsovrZYM",
  "key37": "Y1uj6YfQRqzfBStoXbX3AgU78BCvomfUzkoKjgjNZD1kHtvV4vEEypfhjc2Eig4SA98HGnKuUbi67uMPBFZXvn4",
  "key38": "4XR9is7dJiMpf4UQjYk35in2woaHXotbutBUnhCoTNRvq99a3oMkPNQAe9tJKMehScxAj1q28ANQrsHD5iWH4kHY",
  "key39": "1WUXa9Sx7yVWu1y8gHnHZpcc5ecRGXYxBmuSdiqH85ojKvfVJWzhFZVDLmpJ1bwicbwvGwLS2TwFSdD64KHNt7H",
  "key40": "3UZFJqcmq9LgedddYfvigBE1yrXuo79kNropKm2cGD4eQAj3ZqKxmb69viBZimZ5pDutFHY5MDacZPSCrkUMT3PD",
  "key41": "kUzkmmx9n117skvjzYzooMSZe6h3G4Ts1MFuT6PoDtYpyind4j8avWttbyqTuLYAmLcDTVTV8BzDN6dgxaZhUsK"
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
