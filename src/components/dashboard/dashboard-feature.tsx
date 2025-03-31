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
    "5QRWah66dMzA4UTWtBPZdhr61aHDmVYUbVmwGtwbJ49gLAabHCyM4KhYp4n1Ta38osuKjkP78n9eXebt5UTEA12Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEXPE7fzsRqkE82fzRcoRKwfGV4W2UkSoQ3fV48abveixcgNwcRAKsPaiyDVL95PCLZzH1rp5kssScLiZd17hDc",
  "key1": "3JKttvNACvUKPRVP1siwzE51BaPXKfuAtHM65qXWLYdgrCqQLQNUksW9LRiyodyxooY9XK1jqTtsvzwCw4wmXNjH",
  "key2": "59f5BEKQgEjPjetr6ofXJN2ZCnFPKoCWCcrhWrqWJZqH4z14aUiJk9kVtU4zEvzBcjsYZTKUEU4QGuKNzfUWmwug",
  "key3": "3JdnzPQZeoMjLaeApCSzfrircRP5LbctZbQjFPmw2DDwKgKCU9MZi8WC5ydPkQEhTbvoUKZkSWSTvYJot1atMdJu",
  "key4": "5B2Vxd3N4UJcdFSv9Rzet6WN6dBPYV8Mm4aqkxG26V5r1bLAD9XSkZtJJJYj4tucVszr94B2ApL5hVm4AFDYM4XV",
  "key5": "5iTkpG6ujRn5zEz6hvvczFKaJUQotj6fzEcyWqYDHDKbog3Jj8AWW7zk1181D7AjsHsVC1THsbxQPePt3KfSNMzE",
  "key6": "4man8WVm7fos24rt9fx7mLCUmoU3FSbTJHQ2X2xJxmoK5gJR8kh8pDELr5XgKkrSA65d7YqAJRWNWRR1c4hqcKdn",
  "key7": "28HvGZsLZi6t7bdYhsQ1rB7mLKg5dWBpFYF6fyFfMPxsyFLJBpp3UWbjsMkTAht9wkf8ZHbGJydWZ2hJSq3ADoYj",
  "key8": "qy3hDGP4ozpyZTkDo8DHVBVx3m7zGx6AjYYB8ypCoWi1zdY9rDytT26KC2M5j2zrpzS9W5M7VtsgehUH2RQF8RS",
  "key9": "2zMJLFwhiBoQuf1ZxQeYGZnMrwdbYH7TaXiikwsSzrH3hFYJPVousKy6BC7Z7DLTfgX7FBxNnvTGvb5Kos762xng",
  "key10": "3UWyCeUNbLHj2xgDLnX8crhJ4G7vvh9iotzLRGsJW9t25z4FzPJpaeQYT2an9TniNhJZUE7ogXxbmun5Bs81CNFM",
  "key11": "2hccnLEx3y3yrfQtRcpLjXxrvAAhU1APDeviVgPtMHQhNKYh2AAmbMyXDJXA5gGLUAsVxETDCzU4hGQhLiYrduDM",
  "key12": "629SzvKVT7sFh95LyGfYUgKh5TjFHM5JEXWGyxqzVyXQXdBiNUmGNshAH2vVTJYgkU6q53MiFCemN2ApStMTgaAR",
  "key13": "BpyMoTvTGeVvYU41mBbpFHjCwidCazrSTpsRBDuwRGDhj3gv2AajtsFCTFgF34WQ2XVBTUYDukiJrTmt11ijPr8",
  "key14": "49mkQCgAv88FBmaR9dwnMPSFFsd2aWbeZQ522oCTSjLxiBp7X93pUsVMdyH7jgyuxTovf3jUEfe5NeGb3e6HcZ1U",
  "key15": "CkSfKf9jmfcQfVUt5ox4PuJHLB1k3i3TGSt5yeeJZicQSneG8EzTvoWSm16DfcoG9wuRRbmSsQertTEWjs1DA9W",
  "key16": "E8zqEdYaN38jnEkhgqDAYEDzYXHrfTKJQqvq4v4etSmjYvggrMrHzcGjc4tDRRfK16sampM93z1dEiJLPG3EZbm",
  "key17": "4Z4kRGtCN4AnePPjBDooH3HEjjc8QMzHjF3jSWbFLNTcuTRU9nA1p6e6KivX2xG4renuAuztKRx9a97jfkLLCJTQ",
  "key18": "5vWferdAc2a8GSRcobtGjQAXXMtTtc2vSJXVkmEsZZS5y3PrvPEyoGwYWpUvbPREAPTKrTV5m1oCHiHorKDawth6",
  "key19": "5PEmT2tGsBVLpimAhyb9BtUBkyxd1zs1eLaRitWuTgFTepF99gP7VEWsdSVUjnjvHuCsVh6DVvrJQcb8G4SV9ruG",
  "key20": "3qPLvYgk5R95Upyz5oJrKfYsA3Abg4CznTpYGYNFa7iXLiHE2anJrhPCbEJApPSLvmGzNm25M1VTjRUoMyMnKjXk",
  "key21": "5Y1Z7VhadKkJSYHcatMtkt9Fk7TyxnaPG4ztjXn5vzqXxK3yQo7V2cz44m1RmXCWTWmvVf1RR4dPvWRSkFsKNogu",
  "key22": "5h7e1ri9jnVb7pD4Afvx1YP4H1QG2x2GGL1EfrzTbcuem94Q8Rx2LudxRjfSE6DTcxMHT9iKRDXDEKYrMVD9vZhV",
  "key23": "4beetDLri84esY3UqyKm5ziqo5GoXVm1etECzJxzwMxm6Qm6zHT66w2Tfe2kxtw4Mo6qzKR76wo7jAUNT2AJ1v2c",
  "key24": "Lmmh3JPUZMe95ybjY38oBtd3Wc2zPvfa9QsCWbirEz53NQSg6zqXGJmuBm5xoyJM5d587xB791D2L7pSKNNKnaG",
  "key25": "5bLoTFjrLzXdE89sgq3mzt2kGoVbWiFwJv24iNaR6Nz8f52Y2iS7oMrRrFMsF5iL151BRQFzskTwYPzwBJ5puQix",
  "key26": "3NR7UKY1CfMzFxhAMydg1G8fDtuQ17jGgV6zQXHAQPWA8rdUXYZ4QbtzeZebpRCZnedHxXMt6AWYbqs9K4ifbT1S",
  "key27": "29aeYixsQPXr9YrthUN3ALSH2ATqwFyW3gvUWnksUhobY9N81GDavwyKMHiNThrNi1GGhXcuYGnaXCUkfBPH48Ko",
  "key28": "2pWGdJA2K3wcLfK9DVv3HPyRF95MWbWe7htJARWzqe5wkj8LWrcKgAgwzLbVpWDxeLnX5ZJTxSvji45zJAsVsgAB",
  "key29": "28YHGQhKSR7WNEo6ReSbiFTC5oGg5LC45njFNcFDcYMKzdRq5B1DdW17WvUA2wEbwEQNzKJbsMcyNQL9Y71t8QnB",
  "key30": "4WSCrmC9xgQo1VSaJWNREQQsg6QZHAWLzJhrcZaHwdSP6ut9Ts1xS8aTmH3pDZCMbzAehNa3svJk5WQmAyVk1Rrx",
  "key31": "zGTonrrTCt54bDtgT3SS6ACEY4E8QxcrFiUUwnAnYo1T1T7ag5t5iJQLKdvWfSaHDeUMSvviFrxJU73RCZoRoTV",
  "key32": "37EX5soPfunLZCpfqjDi8WTimBAH8X9Kwd4f6rZhoSwGU3fSFRBchGAroX93xLeHSzXrGXvLJrqFQRXF2Xn5ZCwA",
  "key33": "2TLz6z3KqU8NoQC9N4nXR415n3ZSrJ3BhfUdvpToYcpBy7EyDpdYEqg52PRphpcNL6naPT2joioDEFhp1eesRdWD",
  "key34": "5ro1P4HVkqj5nwZhe4t3uQ2pKTySmpjyCjmKeSGLHXuAZgj5npdp594vdszpg7gwtHZa6HmHYsWGZ35YpRWUsS3S",
  "key35": "5VZCfa82igncVLfC6hwYjJy7H5fU7RZ22owtFrTcGYdrdfvoSmkgVBr55misp5Y1hYNbfvPVVobqrbo4jhnxAXCX",
  "key36": "55hHZ8TX8d44zsQBKSXoBayzUPgkuVVZv7CXDZ5tYWbnVE41eHy7Rp3pHMAmTAwvTK9eBqPpZ8BygxisKrziNzw4",
  "key37": "3m4zhbdVSmTaNEmqc6hdBxsuvtqU6JRVEJrafRRLE7pVGEYNhbDrSy4g29uNrzaGcb8zrCX2Rb8mtmxBvGiuwRFF",
  "key38": "ojZDGNbkwEAfaVq1UhgUmg8yN89N3JoizivuRrwzjLt5CNaTsQJ3zSM7ip9YZzon2PTNJKiU74d72DqqNPtkCYs",
  "key39": "26VAFYL81yjpPZnWUn8qBYm1Lhs73Qp466KXQfYUfYqfDDavz4UbZjntipTiDn5qbyHeR65SJ4CY2UVEDbFWLDyG",
  "key40": "5UF97djtFus64zY5v1itPBqxa86TUHgxZrs2S6r6B7WPRqZtHVScVXfuB62fngfgrK3dwvoSRsnhrHEjdea7ayk6",
  "key41": "4VW6RTA3ytvTHMsGPLP7ZsWNtHPVArtKQdPSak94vw4mYogk7KpaKRyg5YESxKgVPMmFGBsHiZkzbScYrxdhEmDC",
  "key42": "4QdM6BnfRpVSicYKkWNHXcRTCMqwMDc2e8wZisLFEmMws1e58vnbjv1Kri6VREcdjXHQLbnV18e18yHsMrru2V58",
  "key43": "2LQg7qMKiosvFjwcaXyPLJmTTndmpogJE2CHyyMVUQnFkiiP1vmGQYQPF2d48hLkTWniAXRHhURudqFcVEagY9xr",
  "key44": "4vpmU4oxkjMYUZnL8dwGmuGNPTTVWSPXpzc2z7BSt98Fg8ihfVgx6RnS2MEtqsLvnsERX8o5GL4QDVfTvJiiBSrY"
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
