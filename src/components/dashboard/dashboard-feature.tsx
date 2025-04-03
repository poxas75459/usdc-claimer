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
    "3TnRHLgEPZPTL3Gj5XtRvs7651JUbHjPd1PKDSkHpzGWsGMk3jEAkmdVnjDoUdqC3wnk56Yt9gJPBUKqkCKeGAk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpHBpz24PSVHHZvU285uKhHMhBKZTCvxtYJcosb34yfoHXFLBrRFwdQK1j7mazodn4oTThNrwjJxq63SEPZo71V",
  "key1": "4tE3mMz69CipLdsUTN9pYd7tfQhQhfobAgBZ1c2rxZfAxKtzLSiZs4mibSVrhGcDp2ySbs4gE2kvKjMJXHkwYzZm",
  "key2": "5HcxMkKHqoVNDyJxcLF2CnhnVLHTagRvNU2Ci8CABpuZqRwsKew82QJFu85EqdBVAW594p8zLKwQwZAQXBK26DZY",
  "key3": "45CWUCDJVJtpgbKDDF4brAJSDi6pqjCjqQhXh3eUhoSRHpJjx2ZPYVdoSNPsKsAoHJDWFxZNFkojgfdfGGCK69tv",
  "key4": "2eCsdj6NHeavphcarSYDMhLf6twWw7tuQP93QwVYb3VSq4pnVyh4WquoRkF4zkE6SaEghCFcxzaF17FUJvMQXjwV",
  "key5": "ZqYwj21jhkzp8MjU31HymRJ41rQSHBW4wbunGAZt1GneKfZHtPif4L7m9GB1kUh7dphPNvwXiPGBe8Kj6F44tUW",
  "key6": "2rApj2wdsocDLtC9yM17YPf37yETUeSp5GfkXMm6uJUa7NBUdBzD2ejacXeDFX1tQfSakvDDHcaYz8GU3NaP7YU2",
  "key7": "2zvCZKY5br88HtEE3D7HVudRQpWwmAe6Fww3RpQzBNuM1giVn4BBdSdKycvXz4meeT9drmn6Bp6rLQaTYZFXLEUv",
  "key8": "32ZeqUVQEwCUevkJULzj2UdiZz6zo8au21FpM1XDnspkzEsYNDmE9YGTzG9Saqn85PSUJhYv2qv8eVEoZPKgiUFP",
  "key9": "5dEtoAv1VcMFWxXsP45tfpfSYrZH9w9N6xhERCy15kKDiPJAY3iP2kCcG9gZKVGcsCHYx9LmUgmMsha4jjNNHKeZ",
  "key10": "4EkPUi8SNemJSfMsR3GzNWeUxGPyPxi3TYQWhDQ3pBhWPUc9CHGdPDy5vyXxbuHEUohB8zvG3wYnnmhv4gg9aj4F",
  "key11": "2Ku9LSQEJuNqpp2Snj58fVx32CLbNqMYQJ8tA7p8wM3GE78MSrE7qADsvYCeUJRkmFGPpgLVMFV9Ysv33RnmR6BC",
  "key12": "i4GbFWfhNC6iUfuZCxdZJgjpJZrR4m2uJGeELVVgnYZXp1AWrVV9G6ptabi6dAdGdC6hPK3qPuozHkupHApAJFk",
  "key13": "2PycJtLkVcwXtaNRzwYxHkwbws7Pr6AT9jWBZaZGSoDX6DzVykQf38ipajNyCrBJrdL6phxWM49dQ5A55vx1oXRU",
  "key14": "BUsvzB4zcYS1zDsFezEwsFiW273PcUDB147QPvaiKbp8znHokEpvnrEy5qfvgVfByk6b8tr63cyGL1AMjPHa56i",
  "key15": "3xpMUujKWnQWX36YGVj8rfpMSUnD9mptPfwAXjJZRAnZEb3ECcDnEENU99y5C15QgM4eLFLjdGk2CmM2YZc55wAi",
  "key16": "3axcCCDwAuoeSNQg6NrnynCh4v27U3X5ctPV7AAkHXDXkahuQacmyJ3sJADnVvS53en28HWnFQcmzGzcZRXBkgy",
  "key17": "3xk4bPUpLYWs3L9asuqzHHehP1zn7JS7XRxBVTrjgGbwiVuxKBgdwuXDPyQnfwRS3rTc1GQW9RUctoSqwr8qXuuj",
  "key18": "zfRJPSd9T9KnFpBhRQgUtKAcbGpKneVeoPPx4GZjt2xaFDjQjqXd5KcoGn3rzpcDhz2grYSBAVimfgnDkZjWmTF",
  "key19": "2v1mdCe17AGG7uwygERrcDmMR8QVCUA95XQh7zdDdrPvgqZMdjyAicdYWfLAV6W2shBf8A8P8V5baXTBqymvNJ4B",
  "key20": "4M3S75iXasseBn4LYr7sJZvUN1mJaDp5VLGyMuWpKU2Sa8v2jav5Zxt7wV6L1eQPPdAh27WwhigstMvjcbiStfuq",
  "key21": "2Pv6owMbqfEaFN7Bp4S6cVX9rhWU6ZHgEnxZFHCJ55yKteYNxp2GtVw1yFwZXSsuGXConiUJgc9NV9ZBkrsRJ4R7",
  "key22": "2LrfdvDs8FY9DnxBLw8X9FDe7KaoUyUwSixccpcNFFyizGwrhBThk99135yXFuBX4EvwtW8sb8mpNNKvhiqpPX58",
  "key23": "2k2qt7r96mWRwbsMhf96NCrFTpSELm66ACaCD68cxrTjGHFt1kNXextBuHFLptZzpPHTy5fevyY7pt8bENSB18rC",
  "key24": "58y36QA7vqvyrcfw1AHu1thuqnt12orWijMgKC1X8cxdTcXaXDiV847dXRYiUArYNmteFHbooafg4tKPAPdNNJkk",
  "key25": "3MYjV9WnUeLYaUUc4qX2E8cX1gHXbQaag3nxSyQbuqmCVaqXXpsHnhTKq5oVkkc3mZawYjMqgmRVsW3CqnmGGf4n",
  "key26": "5BgVcf3A5NNYkSb5Wbvnqm2sWzpv4oQhHussjbF5nne15Lui9HU8a4RYUcJQZniRpeVhRx78diWaajN4BEEzkWtF",
  "key27": "3jVHhA3kASPJFaASoy6pRMq4eu8kaGjBTs7KPz2YMNzHf4QTxZbiEY8sBCUqy4Xr8E9RzB2RJZBgvxh3g12G8BDC",
  "key28": "2RFabXbJjh3sD8xm1fR9M9CvLWG3mnfy1oRyHrfNjWMADA67FtveLoChKHguzQDYmp4v2AditLMzhfNstmBxZQRz",
  "key29": "3vHCdGiopkrRwT6xHi3nz1wQWxgvSyyAQTN2VUY9TBmQFRhRTL38YBB6hNESWxb4ps6ezLMs2Zb6cqmTLvGXhSz5",
  "key30": "454zKT63smEjQt98EP1rpnGtZWTKd2XmRm86ChCG8dwmXhFG2juPg5GPrnuXGKAXPE7HKpdFKWt3DRNMBVZPUwyj",
  "key31": "LHeaE2VfvEdtc6tZdFt1yykRZdChRui4v12Q4JYaD5Aoi1Y2UMUYJWJ6xsvr41N3ko4d15AgRmskhHVUd57PmZp",
  "key32": "XKBsc1UrsQtSyU4eVCVKep5JfMNvYWLdQisRaA4BUXs7gHYiF8ZT75Z12pTPtB2MfwcmevkFjgxgoPhJCFBe4SF",
  "key33": "2FJeUaSqoqhwsEGwHjGcc1pQ25EGkbbQ11VyP9wuqZxfVnUWCsbWLFFxwwREuyaJJqfZ8zdzz7TuNkrx69m4YhWR",
  "key34": "8K3eM3hdwEApqF6y22tCur1J5ABFbGMBYD4x8TepHbsosGABWyJnAovnbn88mQdmSSi4VzfmDQXfpuVoxLkgHFM",
  "key35": "4cshzhNuQwCxRbWLgYByRU3W5dy7TJGNx7EvPLF3UJLp4UC9N9XNX2irU7YaYFwV7N3VTmm6GaJk1jwvZjMZYFLU",
  "key36": "3y7kL9JgdSnyfEy9QqMWYhpyQyQzZyvMxCp1XKJZoANEyWkA6Lmtx2qUUUAqqK7v36DTnS79zzTEoWgTiKq9HH4E",
  "key37": "4YAsGNMDPie8ynN5UhQy1QUKhr1eUkR7xZnpPD4VJd46VtuvvcXfd8fLXQddfnD7S2Ti9yc6o4qAaypmfNeUjzkz"
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
