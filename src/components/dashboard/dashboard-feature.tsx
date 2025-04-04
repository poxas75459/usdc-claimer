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
    "39auQHVAs3PujwBgMrcFbVekxXKUKqf6NvgURMYgNkdEXuWteRsHiGUMNMzhk2onSAYERtmxa3gLP349L4XPZqgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnDNws5qWHUHimE7STHDUUrmXPsbezS6jaAkSi645ap4dw8JhYKShMYP2wHe74nBimP2svCvMhdX5Un18gCA2A4",
  "key1": "PN5mxKU6D8M3NtJbkgxf1Yru9aAK4cSKheE3FERyxj3S9zdsrwqY5Tb9esxHMS3QwfcbgUgUF3iZfL8X9uZgzRb",
  "key2": "42raDxkUB2vzHZE6wPGFH5BrnGYLND4cvH1HVTNFiF7bejbJ23MRBLZB9Z3QdY17rm7kYWLKUq1Fn8jfNbCvLJHh",
  "key3": "4KzPQsp6A664uyPNstAa4Rp7VHSkiLmrNj4jczuYCEWeYwy2MbNsmJs8pmeDNsFjn9nMn1nXK6U7m8wEaQTdpok",
  "key4": "48NGgVeBAd2SJaf4fJzibWSAhYmTBADonZVZPfxqVqzxy4CxiTdC7XqrCkSwc8fQa6UKHR37Q6iUjyKfbV1ocaR4",
  "key5": "5LUDtyN2hPCxH1TpXoxHqgMvi4FiwBosi1iRX7B5voWtgmvLUpMkeFu4f4EjcU6hJRxEdsGsctkMayT5doo5ERX9",
  "key6": "33oUSYUFXPQfgAaM94kqC9eSdA4rT47Sfb5XvuArF4yrLdBh7W4S2KjcAnr3GBzPwXxktWBjSKuDTK2KNw6VEmCB",
  "key7": "3eAJhqfPiRYExprLvvABkEUJoYzUoLQz8EgjbSHF78rVGiQvq2Tpf1qGZUVPFj28aEM9jqAFeVVHiGoNUVzmHBbP",
  "key8": "8BZrLpUcSTDBhSs1VGWWqQhmKkoJbCvJWwJYpSH8vPGkVz1mRBAzrrXieYr23pTsr8BTmAYDDuAT24vmHMnvWrA",
  "key9": "5joi6qZXBaYnVVzghTMcyPhQsj3MhYaB4Wc1smGYmjRPhqr4i2T5AkFViF7MHpjci3JmKw6bNzTreZQb5v21C588",
  "key10": "3hmYAXjwrFDRJTHEUtXWDdm51oAa6Q3VVKsywWXk1jDn2CNA676GXLUGa6e1vdMUdQQVtyHUosSUMbXDD6sf6AD3",
  "key11": "55gxkTXUGrR7Q9qQhxTjU9L5qYj6qtyzWWF4sXAFtwZ3FnbkbVMr3nGMLKkg7yZbr9mYt42PLqkF217AQ5k5qGYA",
  "key12": "uyX7x9oiM2YMm5UpPWfH5fJTcZMy1etaEXr5mqLRZcNjyDW8TL7sRZaaeZD69e3vQy5nypbbcVdocfV3My3WYcm",
  "key13": "gtLhvGU1VAizAocgC9orSQU4Ku5qJf7P94PCKxD1ZSsd52uoC22vVvnqU4BMbCyG5PQEYG9VGeZ1mVC4tnuLNjj",
  "key14": "6294WTEUpyGvDX7gYRt6zF7hT5DTGEMKMEn9dsA6eXwARCYEaowbbPp94Fd4v8fBcTB34pHsT9BXqNH4nteo5NVt",
  "key15": "5tnqpJkjFhQnvVKvHLHWG9DaUF3JxeqipFJSvd1nKuFw5zzgRKkdbSbdneMtjuHyY4kYKyPRVdvT11anfGWEWz39",
  "key16": "3X5bqBb4WzTeTbUzXMPAZ8PM9hZr8sBk3ucG6ySh48bh6ctz6nd6QJtvdDvCR3WXEnRe4yiH8j8nzbe8aMYEzaVx",
  "key17": "Us5JWH9brQrquBNBEFFBrM7UpiQSJ8z4somGyVH5vC98XHXR9NbJgqh8pA5viY7XabZHfBq2hBNLPyx4mMJmkx7",
  "key18": "2iQn5KRRxExT1AgfBnGQSNmv9ysJ55HLmJMZ6ddKen1AZEWPwYK8Na4Axkc1tUanLUN1jdMaPTi7nxy5BaHKwbb3",
  "key19": "okHBSstEG4DRsS2w31NEJ5qmymAJqzswyGvSJSUo5TDGUNEYdjBWT2WNBFP36NJNBquQtQH8d3Gn9hz8F6t3Npp",
  "key20": "4x57dESsxdx6nurxKPnWYdZmibF9msrfcUGQiRcmRsTKm8cvF8dHr5Nu3ELunTqVduarVuKr5p4bePa2oRwBd4Pr",
  "key21": "4SQVXLkgFRU4EtqUWxyE7fpA4byK2EP91WgbLWEgxNDiXGVsbYJVYEMgeg9W2yBJGN9pSGeGGptTxC7ExrDKjk2R",
  "key22": "4yS7E6n7A95Grax1NriLKmKbLC631YFpEXGj5toxCe3mzgmCgx9hzLVNsW1x2tVCHkaXtbV6DJuEVuoktAnoy4nR",
  "key23": "G6WCpaG5ptMCnyawwJH42xTcLxJ6h6XT9ujkK1uy5fVhoTfEedQ1oDCQBroWzZxEnxzdE2KkuEL66Z8rgwWmAU1",
  "key24": "2h84Fr7suYyN4kjVMsbVmyztBRhos6CrbDdG2NmcJjFy6CmjhtFYFJTcHgQ6rTjXPp4K1fzzZBbnKWqP8Dz3fi86",
  "key25": "enjAyhVEGqHzoMg5qR2B1iSVQHtU2oB6Lirij61zdWoUH3GKFmVTX9we6Y5oUUibVoZXD4kpq2w8rWntRXWXT3f",
  "key26": "wTDHFFdofHPCuQKb4q16Kf6vRNJJm2bRVysj9JmVF3Rw95QS4cxeF3V8yLqe4sNWS9abNemo8X7TxFmCw7Pn4eB",
  "key27": "59MUN93iRwASVy4oTQjnTY5tf5mL193J3NxeA8itck9CoCJCkfnSLZgbyKnNNGSFWCm7hRHdupj37HfSDxoW31XJ",
  "key28": "5SYF6pEA6Px7wmzWnkNhvzZGaWPFKLFTNGot4z96zCcpL6nBiXUktE9nGcwd6fknHLdbC8DPXzjEhY5akbR8ZrkZ",
  "key29": "2fGDGeTsKxbaNsNXdDy3daraXjV2FrC8qvZqoJjQzTPkYpVaUpLA1tBWDSUYv32aFLqZB6E8q5SjgRNquDevwB76",
  "key30": "581ehC3H6oKauJUcqu82gk5CBqGYuWeGdXMFSyeQfE1jTS9rS3jst3A9eWJbNiUvxNsqCAdyrLVVysT4phQ3uT42",
  "key31": "PP2Lwht7zjFwiFsvL6K5ZseuvKsaHX6uund1U7VNySwy1gJFvdVdrs1ngf5UXG4x3H1eDytj9983p7PdU1wyUHL",
  "key32": "5sJX8SpftJ3WMcd781g4RLw7PSVu2588aC7U63fDmX6kzJr3jFrbcuH674DBsFYavHCqjARVCZTZt9XbbrUe759X",
  "key33": "4RPGqtd1J97DpCpVzFt7Gqeetn2roefXUnYow1BFTRQw2AUnLQdQbRXvD7xHJwtSEPrmUKN1n4nAYrzM7yPTUAsp",
  "key34": "3AMWkXtSFXrZCbcXTZ1FQp5FXgsrcDT2QRRUXANteYhAGERrdMgnhUsS1BooUJctP2N5Q1xeV9AGaddbog2aNMp9"
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
