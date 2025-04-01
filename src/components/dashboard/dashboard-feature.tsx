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
    "tXgvjkeVL3EurwtZb4coYNBwiJTK9fDRNod2EBdH7fTJ4im93BDzYnP99KFm8TDEy1hwjtZxw1UdjGqsSMieCj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489rbu32rDVvHxpH4jHfvYCb1zpzudyQwo9ZThaYyCK3tsTk8cpZAWZasAu1snpNYJTTn1tXdNUVKJgaMJ4QNKk9",
  "key1": "4qykZDBEYgK7kk1u4uDZxgy7MpeE3uBmYUbM8hbwHHoDsCnhsbfT8WyqCMjdbKdgjg92Peg1JfjrDzZ32t21oRGN",
  "key2": "pYVQUCnkaEEoSbsEr332dqPiC4Fwr4kCeMJGF5gU13ALxYXWvZmYtKhPXVcEyx4wHm9x2gcARJeiNaeRQZdXGHW",
  "key3": "25MoES8Xq17rC4BkD7uhTjF14sWQrWqmxNYPFWVTCTQWVP4jqDCGXNpL2iy99a2cJKUyKqHghRzRSrJYcTZ62Eb8",
  "key4": "uEKCCDJKy5aM9aXedHyZhc9XSQGCVn5hCeFZWcyMJjkidroTvepKQzWPfW72Chzmd8xi8144uTg7p1nDFxQNipw",
  "key5": "82PvkKhTKR2UG36JTAtyVr6pDVq4GnBR76dugsPc1sxGU9E1L6vaLNsQLhnbs2QyFapsw1DHVk3QMxAhSfDNcgw",
  "key6": "4EbRiinD3QANA8J5jbHHwW6HPTYuiyzBbuuuhsJRTpbtNLkRRrq4bDmfX1m1HN7UAfSR2UiiS9uwJWSNgG8KzQf6",
  "key7": "2avGcESwQdzWue6wKA94LSuaG6eUhq2M57ZD4ZttCth8NdDbWXcrkW3AKvS12vW4E2goT24t11m6qec3SxqF7CSm",
  "key8": "2q5gqPd84Ae4U5VU4gVbyLq6GsJDMr9kk64SG8JQG4Mf4dwfRnz7ah4X1PNDU9soUfK5Qfg5QrHgVG9kTWuA1suD",
  "key9": "2hDdb1927KomNvwuKiU6MnWknruJeJ6B2pcPDc9QDkbMADkn2nVWg5Gsd2bUQtxMKFJvCYhFmucf3oLsL49WNbTD",
  "key10": "3B95yT2jK5JTdxQ5PJZjSFuP9BHKQZYn9dhUbWTERNuCyR6jJVigBc8L975tX2wNJk1euoyXmMD6RWu4kGDpv6uH",
  "key11": "d5pRA2sQqwiH5VCdWcB9hi2KcnbLNWxv9mMMqoWuNWdBp7yn9YWws7feqT5RJogLvzZstwTDsFtd7JTJeiFJ7dh",
  "key12": "2hdvJcf6qTU4PQVQry9ZgczfBdrATnn3rp6FZqvcNgPye4ki5Es9NjommC3MGUdxbsdoVhrc7XLEWvoB96RP8i4S",
  "key13": "3sUXRVBuBvDhsmsZtxBie9VmqSmpdvhqFwC3u3wZNAwTj3MeNEvqBaPF4MkPRfpontFGwsNrtXRqqQYg7rN7B6rD",
  "key14": "4ktDEnh8XpRTFJKaCPo2xhcHsYEVuiyQh1hzcDpckdePAT1KwkPJ2RcedZAcA5cYUyZ1msFqUCzxYAgH33Mj6Tz9",
  "key15": "PYbLCRcTF4j6Up9bwHBNjnt7hDmFFznMzqirS8U3m7vERaWMYZTwYgAV9Woc5jgBa5HeBhvPa3p8ZNC3yg7Eo4W",
  "key16": "3gYkzkKZwiU1Vquwb2JsPEFTYyh1kSCa4JhDoYXTEKaji4CibS5n8aMAXTKZixS26vhXd4v1KmH9pnnYEXPu9j6V",
  "key17": "3crojcysCC8Uo8SYmeikyMDNkTJfMzRg1gDbBJmhnaHbZcEaSZwvSJpDCCB5GNUMpmK2249JouQ1AQiBHk4KJA1Y",
  "key18": "3ADFf1yMjaehj2BdYaWh2EvN8qdLTHeW8dMwyoHa8PtcTrDwHuAHY4GeEMp95MmjBFpg5B1s5S8BUtA9s7DqJw8C",
  "key19": "2NSdcEA3LjeutBTTSDekzCuffgsUWn62J5nt7KQnWzaVfqfDJVVMSPNWwfm7mCHotPQfkEbFGoLYBsTYiQXumEa9",
  "key20": "bTT5zb1MR4BApryRdsQs6Xc3dRTFAkgpJhrt1yV6H8ArSon83rWFW4VbnyFsSpsKyBoXVcvftMX9yrE8kTEsDFh",
  "key21": "2gD5zzgWU6vQjUCaR5W913TKpgzNW3Z2L2tzi9ahxL74d7a4XKnphKMbL2PwGwancax5nAdqv3M5hokiCN8mhcvy",
  "key22": "65rmDeBFLd97iZUCtjwraSQqx56ZuNsQVJZSshFCRs6KCgSjkA8sYnw4qUn2iBsWhsfV2j6PgZDpqGMEZzY7h5Xu",
  "key23": "5Tnm4VEzBvWqpPDZhWWgXCMSE1m5GUWphc7ZTzRWdH2PiVaBAJuYBWb7mTCBRCR1tXMWbzj49iJkAgXXBMKwdo2v",
  "key24": "3PH3jhpsSSjmGPCZCPEhptGrdxtJoK1dkLsVvhgyC4c6djL5tPqBCjMdZ7akSSG1TeXoqeBZp3hc28Y4B9vdFnex",
  "key25": "2sYCjMSjXHhCVFmnAXzptkXyoLUiLeGf2cyuU3TumsRbQz9S8wDuxDLfJpEEeXzXoRSr8txWRFCPnZQ4rFviW698",
  "key26": "662iXVWXpJMzMg4P45R3UMRZxi6X7KdyFQYtirZ4FQ9dYyafF9r1nWeQanb4hs31HHhtvm7XbNkWCTfPrxcn2NH2",
  "key27": "d2b9SGxQEJTUAyiA4ck21zg1JVYyw2wj2yHZDXU6Vxf4SMGavq6S7pbKjrGMuaBnBx8f1Ekff7FV9RCQnt6HYiJ",
  "key28": "3uK2SMJ2aTmTGCxeAv5YfcQ1fm3cuVqnEZA28kkL6v6Cwc5qYmWpLue2ihopruda24KNifPsa5pMhpUHbTyZHE6M",
  "key29": "5HVDHqifAwKimPpgXK9wbD8GZ2uKh5Kye3kQyDAwiunEKK6bdsQFEzYJ5uDr3VgcCGDFBeBtxS6s5CDEAsfyoLR1",
  "key30": "53zenusSoD9DcuDaRymFuXukJfxaCRzxxa4Kyv8xjwjpT8QwwdoxDdPJqpJbmBhW92PtMW4sGGQByQWrpFUrTjJF",
  "key31": "3zsqAK9uwGGDeWVe6DPhMu9uU4Fti3AciA4qQFwytctGJZGDsR9B8qLCDk6ZbwhHnR8t5ZGNsNEPuE1K5hRZ33Pp",
  "key32": "4MLDqs48yWvgYfaSkstb287GTPhefWR3Npvhb3CdyDLSaRXnMhbXLgPJdiAUrbdCAPtUL3xcpR4pgLSLYK1vSf9Q",
  "key33": "3TBWhxPWp7P7RbU9QpwyKHyhNBywA2KrdPTND1m8a2uAEVH9EdR7hXHb1N6T8cPnuhhveKQKrBLF4BryG6aQXy8m",
  "key34": "5Dn2ZiqijGdDfCEdvqYfjeUqmf8WNGuKGzcjhczWzrM7XR3UkyYNHWavN1azgoEGQvFWsmxJxJj3WhsxiUbxxsRu",
  "key35": "42eQikBfa9xNoCTATvM94oAZSWGFsM8JhJ3WVWKfNo8ayzmuYTbL5aagFeNqXyVMcb3j1Q7sAha1TSNY5X4soims",
  "key36": "5JszJ5LLhHmLbCtHsCKt3BcViL24HfvbVRvgkV84Ppk8eMxEpoqCr6w9mpvVY5amXtJoCXDVqRPjehU4qaZUnhDy",
  "key37": "3JRvV8YPMogi82PRBEXLptsh2PA1eiqQmrXJBchLMdZSsmhLKSpB2Q6nzzRs4urRhftnUdupNmJCmnUh1eZPDEzp",
  "key38": "5UffLh1JS6nqnm8CKoXGGPi9EFbkRc387ZD7X5e5CAFVHUaTnpTtH9SNE9tK4Zu6UaBZpHywrvo2tcBymdmgzUTf",
  "key39": "22yGVsQbHicQJTGfaF8tC1VsyJR3BkBParrUeJs2w3nQq5NFjipSt9fdRwTFGtamwpH7yHe56hypXroicWpaSb4Z"
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
