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
    "ktZYJDdsEeVqTNLgTDo5vSFfBQmAzw8XW8umWdq7PRJS2Vyj37oCVueHSMsM2TyjAj1726frcgzL8nNAb6ikmLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n36spTZGm9XoCtjhiskhrKg82s12TbWrV7KPKzTskXPCjEHKH9MMybnzEVdYthnVjdwV1RsJvZBqNtoj4SrS28G",
  "key1": "4QqPkd32ENtaTjAKPtmK25VJdixMtrfrG5K7H5Q2auiGXybcSeVhQKZRTeWaedvrh7QFpnXJUotzfzHXmvfMzWuX",
  "key2": "5GJEUjP7tEusLAzfnRV6rrH3efp7NfeNi18QMcx6pCnhwMyNChyn9NcKeypUqj7hb2S1MwEdRxJTxEDb63rTyNux",
  "key3": "DZbX2sRKuCriyX8X2ftSvHnGdH3EVMW899zua3iD7dYWvAjRTXtUZrHoqnbMP92Kekiyn41h1a3shbeJvmkRjqi",
  "key4": "hKTdAKUYNDSwXyocndfiECZyEHC1ZmYBb5VghFhYrRkVvjXuQuQ1zmcrFy1Wp6Pa9TcQSnJqqfPDmnrBgYYfU4v",
  "key5": "3oqsK4iKQDTrhVBkLXRjLb6YeL83G5oM4V8iKhTaLzyXV7tFMh69kzC36Yn2E9JDRjRkyrPsWX81XYt94DLhhGmf",
  "key6": "5bbFLN4r4ZXgzykcAcucyLZfDyFRTawjSgaB4yzn3V4Jg7hh3cXxeVFz6waVQLYPHyyMMn5gL11Lv1q8PUwmGT2x",
  "key7": "4DkbyyzHAoRxUU6zQU9ASKXgYkgEaBFnidDjZLJG7xdq1fm1W7pqunmoqVXNFxQ9FnsNASMF8YrgM9h1zw5GJnuj",
  "key8": "5UNE78VxjFDx1QX7a2qk7qxcwfGhf62cVkgsG5g3iLAcdXUBWcEviMijqJoCdPZGWWEK9xsq7xvYdJdKjLNX9yCN",
  "key9": "57yYarfek3XmKgH55G872jck5Y6ZVtiXjbocVkvks4FzekFqDqh8Fafaa3fGdSBPcmzEvb4q3WUaGSxogXqJhgfQ",
  "key10": "3PxncE2WcjEaHDky8LSu8wgZfFJhXzTYCRRX8rK9PcaZpCaXLNMvDsX8RoDdKJMpQoSS5JdQ9s8Q3oUegoBfBjZE",
  "key11": "36ZyFhQEJwhSeagQU7pnBjcnCwSJALDux5DRP4UoXk7BpjFhm6B34giFKWt9UaEqKhMDvVW5R5nvNQE9VXwYvVdx",
  "key12": "4PxTQkfftLVABGBu7Eoi3464MwDiLZPwMxV4swyKFPjxpAMhyKjs3bgcpukyFU2xSgNQUjkdSMuexypzDfAYqLKy",
  "key13": "4muNkovpwT4fqCGkv6rsBxGNMjZSs6tLJ9WPhXvJ4o1tfyDxZzHaN7giXVXQz4mmufQqhRSYN5BuukVTpXd3GEuR",
  "key14": "5owPv416Dwk4GK3HQhkf1jiRepv3LyHcnrGmbYp3E66LxPMRPz6zBHcGn6aiDcSEkSzo95CQ89fWDm6m5dGWpoQR",
  "key15": "3BM6AbkuVaPhWKKXJJas5gzLPzjKvrXSQk7dhiCxRB3dEfpcQJEiCC5jpdyWogWrjpS2MLRJa2EuqEroyfBsNAx6",
  "key16": "3AdJLDk9s4fLEgxgx8jY3Yc6JqPpRkte43TTWnVtZKvMSptFJprYyFMrm3EbGc7rjPyXcpJ73G23BNQaWvR1qUJg",
  "key17": "61S7Ue9YGzDCH8jqfdo4mkmQEYF7HuW1AvXoRQPms82TUtm8fffVU4QAwbLFeNzckkzpvLWeScReWWHDbCADqQ9X",
  "key18": "23cLkVhKSad4p1aMMowbqEQPdHBJgU8nYsmKz9UDtMh2xxocrgYap8RQdj1gabYRHQRP1Wbduih8vjwPBBSQ67CS",
  "key19": "3B8gte3kg4GM9LpYJJAStRGCdBoKgLp2YrPoZYoos35gfWwX7JPFEcezeMfmUBkihnHD5RkWGRdPYRzkXEU4mrwk",
  "key20": "3qZfYVzsJCqvavedipwx1mjuwiSa1CwcBvhVtRqT8giUXZPtRAZB9JdRsUod6fUSTJXFmTBuSigpAXFHGzMhUNaB",
  "key21": "3hzc4Y4vAwb9YUrU1kss3ADojxbFoFx5mBW5wMmZcaUDtFRpEviygydsfLqDrD5oRVXhVxPTuUga9p9B6ufVryK2",
  "key22": "4aSHahCKCjCi6abwVDvyGheR1hLmm6XjHDNeg6uea7DBf4nwcuBpeopcfy3aKJ8cRuS1Dbb2A24xD7eQLBHgDCNG",
  "key23": "23ifsdLZsbpwPvNxAp1ikwpvC3DeLfkRJ5pezShreUQm3Zb3SqwSvuKfZx5p8MnGSE2Qtau9YH9LGtgPWQDMXNdT",
  "key24": "3m1NKLYi4qCqrNW2ehvxTRM4bFAa8vsKAnW25fLog4iufo4c1y9bFHg9pK8VTkA9aDshTrfoKuJo9DcLMA2Z79mY",
  "key25": "5q2nZ7DDNGFt6VkWUmWA6MF4wjwGGaD9W34iN52KzrYod4ZWtuFK2Va1uQnt34iYyecuH5jVzkgiXMvJgE6ULAwD",
  "key26": "5g3Bm8K5VngEcMp855PRzRrMm7ouZC7FbVKrwsegvuiTQapJYbcSduVbKmkcvc5c1r5cPrcXPejgq9zKgcy11yNH",
  "key27": "5gmaXSMkpvZS5AG52Bmvv92mF7RxKQgYqrmRgnr8QbmbeU3582pEfxMwxt9x9dJFDWNMNsXrWqmGAKYuW7ZZEP2y",
  "key28": "5yxXHVrcDffLpBqagB64AXgUYPvaX8gaCFQGz9XSJQdm41YZ1VNr8a8qtLxjUzvoGyRAPcYF4d8dowEGwSvhYpwK",
  "key29": "4QgPMUkKwxwfHrUssUGvjFVzPaDVGJjCU6M7fesdPfw69Wenpa7Kw2GuC8upxJDsJN7ajyouM76WtNJwgbo9jzCm",
  "key30": "33XbGBK1H3UAHajULG6PcaJ6pcwi3dehQLqeyGDRxfphyFwmTaDBibiJJsPMNB3goL8zZHW2hTUH7wzkfLvfGsFr",
  "key31": "4f9KrKgVPNn67b3tYD4DkUc1iz87XtyUfm1PmkFbaqScxPdBw2RT1kfCbNPp3cF3k1r3GLoJdPybpN7E611xajtc",
  "key32": "3nT2nJzLe66Kbyj65Po9FsDnm42GAGVmTEebLFsKv4otfryHbF3hgocyTohLPocKKJXCs7ziS8eVqE9XiZHotCcQ",
  "key33": "VQKis76RJkdr28A92Pt9SoaCEkmXHQZs2d2UpBDGZYniUQHwUbU4tYeDFFiHHH4Q8TV2H5zJzwdVrAbGuTJVk2E",
  "key34": "uWpA5rvuKTKURowXHyAr7sJAQe68P5jnD1VRazNzdiUef7JWH6xJ4Mnz2CpMeARcMago8dVDrC3nmxfvh7dBUnf",
  "key35": "3pxFb6HTDhRKaGsUKq5pzUmwSE1kyKYJRtHzmpCAh5nYsDNEkuFW5wY6M8kk31wgMWgEZP65wgF2DCZR97NdDt3d",
  "key36": "4oQhq3Ryrjw5tnuLREyMhhLKnbteU7JFQdy8Ncfu3LacWYgTjhGy7oLgoQh5mAs6mGfibmxjnPGKUiY6wB71AxZJ",
  "key37": "3QPPY1FJinskZ1GRjBfmu4S3Q3VhGYoDNnagUCAtSwBRmYqy5SH2xbZmsnXVA6K1TcfLyHuRhsc6AG1S3P2PBURT",
  "key38": "5GsdR2ubKD2mMAXoieS4fjBojZnkza9err7PnjKnu6Nv3Wi55KqCfxX2YhXo2zVdQKLayN5XPkGL2LFq3boN1f9x",
  "key39": "2ume6PZ6obr9QDPeHHhWAJTjmxDYr9F64zbpLYRqQZDZzDw3hXKeQ93XxcmJfLXKU4GSw9s4utJ2s7REMBw1Uzr6",
  "key40": "2EXc8zNqNVzJthQEmpadonbgQcHLgC8hGL1uhzcSAR9R4dqLwrPpYKpiRBgk2ddFS8f22VWMTe9DdpsVmnmEqDun",
  "key41": "5Y3rCsHmsdEpW6kXKYhDkGhqj8TQaYV95EU7dXkdAahsDQmHHeA25AEC1FA3gcdW8UfyzuNUyCpHh8SK11T3RUVm",
  "key42": "cm3t9MG5ped176TeyJGRMbCs6W1TxtyEQtSoVBagNJAvrs9rHpBDp4pwxPaUeP9U8m2T2bFS5xBeAwVWX3kCMJT"
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
