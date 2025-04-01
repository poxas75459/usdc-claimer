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
    "26Rh3ecKr231bn67QLwWTs5hL1YDPYL1jtm1CxC2nWxWSWbicJAGo46RYGx1rboZLBdrdq6SYXBshN82FUuKGxCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbK6xFkTEuMZogWoxTbTywPTPS8HS8xKGo5AbCtr5rULk2NZwGu79Cu2zrgNComti1g8mcp2fjkDG3PBdr9qc5x",
  "key1": "bR8fPZqzghXapv9s1CaFGMpKA2JNP7CXzQy8xgbfvEhoN98dYAt2on7Kn45QNgHyNG34oX1vGdP1nRcBBtbRGJX",
  "key2": "5PRdkfA7qXwHB4w7KySjQqfP427w3FHqtdReboNtBg3nh8qmEvAzRQGMMPAFnb3mSY4cGabL28CSt9R1XcUzTkUQ",
  "key3": "3v5h1yoWGsVdAZVDmTppgQMM9dRgYdKMMeU8KcJ42WjUJH6uG6HYTXtwxWS6d3FgexxGaiC4DmesmfNugmrqPKxS",
  "key4": "2NQkMvrDdbJZmdANW7mHVBdxjhfrx8uHnDvSVwBWTP2KtmRmQ9enrpALRt7evvc1UcugSHauei3PUshgih27BXSZ",
  "key5": "5iQ9diXR4Uhbjk66fbzV2o5oWQUqxmBtrzKXGvPr2edWUBVrMkojxjbpQiRb4SLwEeDgPDrnvnDFFTmHa36YCRny",
  "key6": "3i5rVwTUU1myttte3x1gyE4TEV5cHusNehetMSp4jYYQKDvCL8o8ZR1M35Ndx32QxStVxSqLvk1nBStT3mKtW8bf",
  "key7": "qg859UxMnx6f6dHEVCWnZVtnHvWu4v6GGVbSarUG5LPYLdeJTZchZ8N5a3nr3EtBv5EMZMawkSATRr11StbHGmc",
  "key8": "WG8ev4j91LPvw54pZokZqS6VeD4NUTtjEBZcuhowvvZ8DG7A5zy4VhA9ptVfcD3gVcfXX9ZgpenBigVKfF6QtLt",
  "key9": "3zUu9nyrPBYj45nE8yTMgf4jSZYvYgQWDpVsMRJWnV368zkdVVvojkJeWENqE5BTcaiZHbPTTUiYro1Hhkz1Jksf",
  "key10": "5pUUyK5qtHHxhRJQaFojCv4Bdg3oco7ME42GxLG5fHpyQu1iTsNtzvsr64teFATKCr4yotYiXq2AfLEX2quDJNoe",
  "key11": "3442tqZYwTPxyN3mpb2gTdsy2wvw78yw44ThamZ6mbj72pPbAgT8TtDws9g3scjzvQfYx331cYiRV4R45m4YWsEw",
  "key12": "36fiBLWQUPaoyoSM7Y4NgR8rhopL5szoqdJPSWx4ZZrAYDNFtU3nvoGUJYJ9PDCuDYbBjaTjHF8Esi4z3vkPWC9i",
  "key13": "4CdhjoL2LVDqffbTcHTXjrrtZsENk7ahWUgnmDY6WNhQms5bkTTpT4r11cgTF2fsm73tQMUE8y32r3WNBQ24emaE",
  "key14": "4erVCPDLzxBjubeCGEejKcKsQsByrWyYyayrZZcfpNa3RktsgxDsgw9fENcx3xD4hPCtctdKoyPRy6ssb8YauBRp",
  "key15": "67WTgSTP2Y1WX7GeECo1z5jqy45JQb1mYqRuj63JGibqXcgF5ZoFv6vrH4WQchcCWzHk6KhD2KaMG7eXUmNcVWRZ",
  "key16": "4g9cjziNjoLZcBJcPnM7PjMqe5vbGvMRr3nXBh7pcwiHmxHcpNJpSQhUbcUjQdWuooWFdLX3izaEYNzqQWQgFvVz",
  "key17": "5rNGZfKUokkbiLJYxDDbXYT2hZZ7fW1FGwYozTxwri3fHt1eWECYxwDE57vv5n1yayREYB2oU9TNBGo8cx2sP6V6",
  "key18": "3oQYQqHNNjGyuW7fMsLHBBKJGjWbEAuHDJ4ihBFFwBGreVEUqrvVGk3YX4huCMfHmGVJhPxhmGwLKuWDabxzoAR2",
  "key19": "45jiz9kwsrDMXKsdeC4y9V3Q1u8WDLjb5oQRLMDJppd4iBKghhsPxJwg3kuUeTPFbEUq8Eb2BkN9rENPdT5DWZrG",
  "key20": "GWQZG7aEKFpJQqggRZHA9d9xMQxP5kayeogYVGWCVQpBwqfUVpdCJ4tUrVpPWpJEnwKjJfEJSwbCpZnWRzEo8Yt",
  "key21": "45K6edvPZEpg9mngaBVfaeb4P4NRs9GgfCv7DfrcRyPLEDyhWxBFZPqXvCynWVKQ7euKeo4mjDPVjNBGRYsiPWqL",
  "key22": "2HqdqT2dfd2M6S9iQTQHgoTuQD86UnR8hhRnd2kX4Wf9Tkj6vf9TDucVUN6DuBHB8V6xrBMUbcetWWgkJZtgqQiq",
  "key23": "5CNsefwk5KpDKM9szsomKFY5dLjrGCjFZDPJ5P7tWi2azyCeHLH7DkwSMLTR3SXnXdmqBo9Cay63gvknELbo7M4p",
  "key24": "584QMQYMSFG2zN5eCNN7ea7BrWoUWkaVnkVoFXZGSMp5H1KRVYxTwW1dLCi1VkX1B4GsDPtqE9EQTYF3yK6vFdxb",
  "key25": "4Z6X3XmzKS7XWfatSy4BQu8eNDQLCM1FAsA54BYBGpduQ84b7H9UmVtMuKJR6Tz6asNVv23gTAf4enkwuAykrRKb",
  "key26": "2hjb5xW28rNNsDxqiHp5EWjRDBAaYv1HXYZXPMwWTEqSUzGhqEj5SJXUbTsW916rHat21fTRqB8xUQj5jsu2BpEo",
  "key27": "624uA4jQMaBTebRaAtAtSkWgAboAk8MQYKE96zd1PuSf3kAmG4f9sm8K5QBdm1AaLVeAEqMiurCGCRyyturk3X4m",
  "key28": "2dH3Y21DrH4hPejVYbVYGXF9HeekFjGbYzt4T8rbeFQHtqkMvJ9Mt6HUoACnziJLaB6cPakDeb8XBm8ZywNB53W7",
  "key29": "3TwXoxPAV99u3KE1s6R1r1BaJSFNdTXBGMX8JKA9BGUAAjmHKPEp2ZDVBbyJMhVmUGv4VVzmHnA9brKyyADMuTHe",
  "key30": "fndbotfLkjjJbySsDgGmnWeEy8dpn68UDrKfPHA7jghnfJZvHTBZpFCNe6nL97vCeBpHUxN8nLXK7Qy4woTjCxt",
  "key31": "yMrvZgp7QMnyHWYjmVfQGvc3TS8Ccjz1ssdbhRgyYXqyw9iHKi8CmMh2vwsUdTffim9QurqVR1e1yoqowvCDuvA",
  "key32": "5F3YRnpQ6bkwgT8cPx8uKjYHk7RWdXa2awJuTGNyRxVe5AWroyXLAg5sZFkxcm3drvurRKgt7kfBTqFVL4dKaN8E",
  "key33": "2Gbwd25ZeRDHSfbG7Wp5p57ZuMbiND8P3HWfDdXJ4X8e2GjwjVyjKYBAoHwM2R5pJCf9fXyiQAAnryd1kG9s1Acr",
  "key34": "2ED5BieySShzQrQjK2T7RVvEcg58LwqrscKgeFfdqP2H7LaMZthqdPM36qLZ19Re14teyiwTAzDj3gzTLhsCfLfd",
  "key35": "5GbkPSjKM6iqHFH9ByBohscZ7anygc2BeFfBJZuS3H7wfXMNSoWNfZGZB5k3Uq8VDH7pUGJ2WSW9G9JB78UvQvVZ",
  "key36": "5Re295qsrTD4Zb6RUCnPvAkty3QdvJGfTGRfPpf3Vg3eWgCAspQ1qRnPGhNJicm1TsHoFs68TJGg5NLve2yGkE19",
  "key37": "5SGxpyHmYvX8BPgkxY3GMFsKa4bazWKgZJqFquX2ePps8aEs67HKgTKT6pDVumWeumVDJoSTNV2jCbNUF5zhzreh",
  "key38": "9NGn6XqBiWHqrgNg6PkddrbXGucUD6vpeRXm8YGBDDaP5Vb7V65QijbPUS3JgsuX9MjMEVaLo5wxWLa5TCZoaRE",
  "key39": "2xVoRusiBWSY5tD5FPmqFSuwhJWrkZ1pNBdeXQzyZSe3MEjuut933dvv3v62ExNsbt5eEAgcHqkrqKQJSbodM9Bn"
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
