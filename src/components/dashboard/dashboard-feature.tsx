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
    "3zXJq3iwwkjvq7ATnDxdKm9tg9FRaNbpmXX3fok9tGnSrcWkXJJwYGCUyr14NdZihJJ3dwTu6Fk4EKTgPSnwBaTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xmKxiV9n2XXyKgT6MkwufQHQ6cuQpeuhsa36fyABuW2vtxCafxqdv8TDFqhsX8f61Kd8UTRBekdg3yf46VKa5kk",
  "key1": "2KSnhinfkdcEYmpzQbs3Xs5XMWHEbA8nQ3wyvw7w5YjnWek1UJPtZVguvNNZEPuRmY266WBG7t3Tqkrf1fH8izem",
  "key2": "6XDD3W4jPidQe44akBZXQhvKEUbRPHkaKBJ29bQdfBbAwVEpR8C2dTCR7UCGbNfpyLFQtLCnHrRrRnahJaCgL6f",
  "key3": "2XKU3dmYo9fxCt2A26htHXXGjxfoEZtBJhKVsrkDMXTFyTMWUcBn6fynJ7jHmueHdEzD24sUcoMawhoebHJmUwV3",
  "key4": "33AhYzsX6pXfRPMCxqMoRE1Xik6BhwBqRxZCTNT9gk8F9Akq1J1t8WnBogtWdHAqt2yL6XcbXmsyLt8Tj8yuLFFP",
  "key5": "3D5V2HwHGrjn54Tye4dALtsZngt9S4FrANAb71bhWj4M3VP5pJcWwjxuLCD4uNn4tctiWBjiC9GiLWg7LQ4H9MEV",
  "key6": "31vccnJpRb5NbRr6njUoXmM5hRSBoHjfJsK9JaNawyj2ta7qVChEAz8b8T3a66aj2fZCQo9vsqwdxY7iMdHvbgDb",
  "key7": "2uqcQThH9gGf8zTPPgWfeXy2bVHQXGXwiafouik7rCakjGDLjX2B8A76p3KBdAmRf2N88Czzfm3AcfQ21VAMPdbg",
  "key8": "mtEjAQJZ1LmfXYRagQABYt93UQW9fLHJjvNrDzE3S2sesNhck4w8fyUfZHW52cMRGG7viLh1cgaHD5Lj9rJ7qQZ",
  "key9": "5mPgBzRBygP4BN6vAZmDsKvfXBM3kNBJ1pyEkok61iYqMti47nASrzjAiRsGGej4WGsqihBWKgyhWvqHoVsnzRH1",
  "key10": "4KF4S6tHxgKkNoyyUUXPgSLwhE7dtjB3AHuL1HKVJ48WK9936nUBQHuhPKDtwHggvW9GykX9wdTPWcot3ThD31cc",
  "key11": "2uyvn21gyc8WyVKuvi4dRZ3kYBYinm2fvErF8F5Gycreifuwe2dVP1fSdZxhMBEVQPadJ1XEvENMvaum78eGYudw",
  "key12": "21oa5QvceKFsEMvq8H8ssA8T46RJGGabYmVs9becbweANT1ytJhuu3ysWWpt9s5ERhVpT4i2FJHDusTXfeXPy3MB",
  "key13": "5pJjw7ecVCqKPtqBYSvmJcZ6nSxffFRjP6wb7aTvbuDCdAg6h4ZBbdYb5RPKBbeHbyYCZ5rXv7o2pTAemJWeHGuD",
  "key14": "4uy1MU3kY76oNQfJ2HNnSnDNVxX5HvNS8HDEF8DHTYF5JhUZsV9nntXSFGCkZ49hk7LMuvgYrd8Fz9bCHiicJrDA",
  "key15": "398oyTYxym9AqRwLcGb2NfrBELZ2ZViwZEtAXjYi7jjRNQrB5iEWgadNqYcCw7gUCrDDEHHieJYod8ixomME1Vt6",
  "key16": "61AmzeUEshP1G9cTqCe9Lnu9XubNB2vW7R6DPYMSvWvtBhWrVRaHoAQ97ibcXNgf7n7XFEaJP5x3iP56hXbCpGUT",
  "key17": "5cdgGF3UZ73vtWUYSMCi18zCJRyXScPRFVSUNwKgf9Hb6zzCvWrBt5ntNFr4p4s2c6tVGipXayLHFPqU26ZfGhSY",
  "key18": "5o13gf7uPPXF61wQPtTVF7Tz8BLFuHc8y7KEDG47fL6oDtb8CEfauWtdPgrWW4BvsZ2duTfTDHQ8vf2WcHLbe9Uh",
  "key19": "5AhdArt8Ksf18cviWXnpTxESkqMq2mYyZszo9GNKKWLDSgLXKZLX6DTjTK4zuTD7cQYycoUardAGnPtNySPdgqWf",
  "key20": "66UK4yuCoxu6dpNWKsNt4xsXMs2uZfu2dEep64sGKjtt7okQvsR7diRFT748AVQcppmRR7HbFVkRrqfd9V8g8SMp",
  "key21": "3unS2SwCd3mrVyxL2YFEs3Jjc1gH3xvXwdNMS1buoC8BucZp6DCHMJHb6ujNw83Jd7bvjf8eJcGQkHbcLabNPhQZ",
  "key22": "52LM9Z9fshkkEfAW2tTCtVcXa7T3ytqWwLW96YZAPxBNwJDQ3j3N66GcrtQfCK3HUfVitWWTi3NhWeB1X2YUJ3Xz",
  "key23": "F6BffP6Nc8kKsrJwTy1zvRf6GvcfTRoFnuLMoTJhJcUe3KewLqDKoBv3Kjz7EFaBa2yQEBJkjMCNA4xejCzgVGC",
  "key24": "BLLsLzfM9DcLFKpH7vpzTZqyWu9VCmRCeAR8C16VjGPfDhxNXhKUQWWo9t677WjhiUvqWXUHid8HDPCTkhS44Yq",
  "key25": "2C5MK2g82CY1bqMXJdz8XkEmf8UbNeJLhiyXd2yA1Ly9UUBhogDndJKRG4qEaNzfweEzCX4mk9ijxSDH2TB8q3Qy",
  "key26": "4t34C79ndiTqM7E9o9L61QWYey71BrfJtAKmWMMKec7KkFzDbk3kscPvzXsURJQnq2KqrVmrnQNyoKu14HKjHz8H",
  "key27": "3Rcsp7ZbkdyYLJRCQ9zsvyojJqFcJ2DuP5t9hkcb1Q4WChFMhTJudPCqqLP2ogC4EYH2dYaHvx8354LBivStsFrU",
  "key28": "332bT7miyeojyzDikJv1kHy28AiPEcMVGX95SHTRT2WHwnwigwb37Aq7t1T2jwLKJQPeA6B1D6Qm5x3p31CEXHCw",
  "key29": "5nHG8SyJqBBPBE8TJJrxBJ57GQNi44FDjSByjiKKjSq6SRNfiFpdXBTEG7Ydav67DAyZ4xJ4oP7rSLBzgNeSeD3A",
  "key30": "4ztQxz3fBNY7vmmUWWCSL2BMGzUjQUPV34AHH1PZCk1E3RGAn2T15xVRC3SyqFmiHXrJTEbpoGym6Rd5ivZUGgF5",
  "key31": "2y519uF6dJoYJLmyGFsePZSZkrzDn1oK84wPZCvh7Hj8EPvBfsDxr4JtzZTu4sEQZVnZxCCPLpcukRNnc9dKHQFR",
  "key32": "5UPHWzyWkkZyjHMmj1uQnVG1zYXkCQL2qJFpG2DpwzPQtUHN74RRcY9XGQogwuJKEMXW8mHvpSSp4HZnKJGpKxnN",
  "key33": "5oz7rhJ4qHvWksVzqpbKjGntouWdxt75BVMXGKZrbmvpVM65MmUkRGdzAZz8HEc3iQe6tgQoZ3A3AUZMD9hCNpzW",
  "key34": "25PqMA4NHmUzLGqyu3oQz97SEeeJNSgEn2syFMgCtpHxNABKA9K9qZ6ZfdWS2KnoyDPeowryKjDxtN1XGjP6JxjR",
  "key35": "2qahWz1MbArvGF7ydixQGg6CN2tW2QaRamgfZzPmV5do2giaUAZTSXBfJEGYod9Pvuz8v3dyxNGXzpiPzTw9obCk",
  "key36": "bdT3DNQy3yaYbxs24ZphYWe13AeYGpp3qinbcsXMN1AQ3N21ATHrTipYjzQ5reSFj1L55uvmkVegBdn6BHn2tmz",
  "key37": "2Tj4gPpMNoaH9pXunMS8viRVgPau9wAEuiwvKVsjZWTCg9hBNo2yLifbUEcpjrcgkTDpGbYgvVf8otNSqWRLiJLX",
  "key38": "22TDYo459dm3iXU1vcnejaJJAojMzvCTCkvN6cRYw74WTu1z7h2SDAeFnnaux4RqbBokeb2KtbyTJSzCTXCH1TXa"
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
