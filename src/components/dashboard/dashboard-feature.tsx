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
    "5KcJSdcQCa7DeRUgEUkScY9yuSGqNDKiJKmee357PgBFxFr5hFQPXgVN8tyKeT3ypxgd6g3BS2ap47sbnMY2EjHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CckFV98Xmhh6yqY69Q1kVzTYwSSvympKAora5W8BD1cAaLMjbrSno5SMS51EsPPFLZ9yPjAvUQXtxmt1oj8YH3r",
  "key1": "4BKD7t6pEG5iKVPeVMDseB4shD4otXVcCXLLyW1hd8m9KNdppyYcHXvfxW34CVbunhrUP842GP1PQTuS3rsgCccL",
  "key2": "4ZMtMXrzk39KJ9GtkkNiqxYKdJ7vsZQhCHHgMwGEWxDmJEcEmYgwbYRm9KobNweqMRy83uJv67SbAa5GUoiXmgxL",
  "key3": "5pS57WdSQJCh9Y1wnWNRt86bbWdULHWvZzr18fBWVL3ToM6WsqPFVP7FEH1om1V3E7krapn2GeN6B3dhcEqqi3SL",
  "key4": "wWLXQF8MBKUFWmoRz34xZg5UX9uzxoxSJmvK4qSPjnHDb1vreZnnoryTPpPeuXBm2mi5VVodgjvPgWVrbCW2Qao",
  "key5": "5vUYWD7Trkkm3jGGxH4Wed3JZ57F8gRV3qGWZwv54cPDWSYEt1fiRWSeAKH7q2wEGQjUaLoiNcJxenHmuBUDk6z2",
  "key6": "2uTdmYNw1iFdTAi9VSccQ4PeMVeqAtbUCDuusmdmYsy8dVmQnBGHR6SV5CsGY7urgyXdfpnnaURJAwu4twHUEw8b",
  "key7": "64TCw7gDZ92LV7axeWjGAyynDUeDnE6gUgWZvKzuejmkh5hqRmjjEK2T6vFUcUMRPyeawcBwcRQ9uCzZ7NM9Y3tM",
  "key8": "gXSAs7fXoXkHoUPGNfUidEqCLZfQJgitM77y5xTzCeESbi7A75SXTpGmeHgPNhaw2eLBXRAMXYoqWxR5cYYALzv",
  "key9": "2EQBb9iUsyjTTRZsgJBEV76QgQhJ1YV2yxhhVYNc3WMShnhiM7Ztb4WkYyca6vyozBQRbwakGb4m13QqjsNFpLdD",
  "key10": "WQpHcn8CxPrhrzAyeSTCbkpWrQJKZX2GgGbFmnPu55HL3vRMrGxAAdSAHew5WKqkH9VnmJKnLS2tqTTAdapA7mM",
  "key11": "5YQJPjd6zb7qZM6KTHj3xeuAtQjs9wVA9w3EZqm6eetk2NHCKefV5TvqEqzrX1k8qDF6djHvsmCrUXKtZEDwjNpq",
  "key12": "3oJAfbgn8t2AsGTdJRiTMstom27b1otRhDzecfeAbSjjRvxzw1cKBSvGBHQ6yjisP8hSf8NnTR83Cf6UBvwxdQLg",
  "key13": "ztJFbq3FBWt1vV6GWCNxRQ4qPr5zaK6Hs5soe37eM62j1QLfTom6td3HWh84QTZAYWyTcAfU1ib29n2Mk3s46iY",
  "key14": "667uXtHQ5TFzNbZWhcsGdDLDrKNgJzBEfvScxyA78LB8W5tTDNn758qvaunCksaSFjY7mT5DKis9TYRTZTrxtDYM",
  "key15": "5gFSYZVAL2Nt74hWEACxne1g4aRK7tM3GV5EyhzBgV3VvAf81eoCETk3ANZx5qaLw7NhQGfhypXmLNBevNSFUgTW",
  "key16": "2gTUQtvELwuoWiPgATJX1fqzxQtH9rKD6VzjYzcYjitgvAaEuzxceae9PWTV21rJpco28MWh6dhx4UVZkhQX4Gnm",
  "key17": "3oW3W3wW5N2gCTeTQb2nnfQhBfu3MDGEzT2sBN5nuX93uSzZ1bBPBRwApxBKZuDew8oPj2dxAhgbHxo9Rtv5UnSU",
  "key18": "55KNMYiH74F8e8TSFDtM59n83sDCogJKrZfTRqxHrFypkS2i2a6wDCPraeoTRRzrKbwDD34HSDdrcrnLLt2UVzUp",
  "key19": "4F1PckaepQ5XkxsYBkDRPM8FWAofpaWCKm7ePUviKhXpHHdA8jMpaPSgyAftB8u4MuSENk17KU7nvdS2z6r1Bj5r",
  "key20": "3Rsp9Jmqe1NYRiiinY9oN4h7BkFS7sqqjJ4F9NNZyyMK9PQf4mBuVtD5RmTLRLxF3HpCAnqYEEFJqMdoCaxMyUqu",
  "key21": "4S7zQZQijVWTtYkKF4z2opVKE4wAahdGVNYfoLbMXkFaxUQ4m8EbkHHK7aaLTLXsoKk5niHUqrBdR88xs83SFqTp",
  "key22": "3GRSeQjBxrapwRziTBv2aEpGwDoZrjMyhUpJDG8zi8pVssMJa6cnbEQgn93VyCJe9LgTdbvc2UogrdGDAvK5P3tP",
  "key23": "3zPDTvKX93pQYgfQyd5YZhyY8KV1NWMyp6qK3iqgZ32moHBFD3zWzcTR1KYAbi5qi14Gn7tH1weWECbdYxUtpJk9",
  "key24": "2kHckxgwy2rRWG2S62GYpbDVT7UZhWcoxDQJDkz6JgZiS6x826HzkZePngqnxnCmxWBqcrSRKQkekGWjR3oqBTjE",
  "key25": "65KexffDZ3C432iUHtFFeJXppPHE1qLAKfGtFYLcEP4yf1Rzxbk19nskKoADqY5e9JDzVq61ScyQtjNDt2ohPA1c",
  "key26": "VToyUXeLo46VayWd9tgrNSRvmjpem1PDR47cEz7F4eJpSowmvyWkCRHtmd4JkuubW6Cd3sbL5GwmSVsrzLNNDFn",
  "key27": "5jEKJ2bF8ns6h55PFD87mg7HuXJeCSChJW9snQNMTTfUqQMQdo1cQHWSHKVaW6Dzt1MfW2EiSMruLa5dys78chvs",
  "key28": "2fye7LW2SjCcz7bSv6S8Hcp9raSpmc2vxLvkxtaEh3vsnGDgjyyJSGpNFT7jHWdqrLB9hjsVH6Lo6fvnCJurwV3L",
  "key29": "4fnwmDJvodoRPKbPQTKmALSEeKK7GvCZSUjreswZXVDbeRCyEv69VBPG5Mu9GbgYbh5QQYwKSRbEhGeTjdvSRnkR",
  "key30": "3kL8hBLVtxDvtmzDQUQiBhmS9SAQ5BpnzAwyGMZr28WUuY96deorVdo8R73CkX26aT8EQGTZZfja2BuuASP2YFgY",
  "key31": "26X6sSrYnTofWG5eXqFvKLB7Mz8zRfBH8i1R4S5MT6fihCMmcP2f54VABebMwkPk4aqjfCyZzxra1jxVbqWfSnLr",
  "key32": "qEqboFjZQY2AD2j1rb1uH57Cw55DPfpmcY9xYH9QSYT2TqofVgrqR3RgQMYtGF7NntesA3xQQisVFp4KY1eRG2G",
  "key33": "2paUuhZ4eZezxxm6zFzVbw2oW2xBQ4bp7exgi2hHZjeDrHjuSoB3xwD1ZDPcEdJXWXC4hTiSZP7SWvLfuCjPmPZV",
  "key34": "2bhHohPzZbMWiczCLRPzKqX1r894KvsWMcPfhNqVDHxbegE1CRJeWE6j4uTWTXjZ1ncfqy1wcakt9UrbmAVysZs8",
  "key35": "5vvJA6iirVE34R1iyjzi7cccUKTGcPxBafr51uGa6ZonAT9V5vZLDzTFkq6b7pBZxxtp8p9q6675qhCw3Q9cCYQw",
  "key36": "3S6rgpmaByQ2nb7YhySNHQM7tyGqHNSxXTrZ7CSEbDFgR51ULetfg4ugPqUKYTYyzX3YWw2nSW3qa1EmHDRu6ecp",
  "key37": "42Br7QX3PV2zArmtCVC9SVN7yRQnpj9Ww4WzCNZZpUmJiy3THUhcLrihgzUUtYU7vJSFqedYxheVxzRZSe41SbfH",
  "key38": "2MTqK77WkSf87VM5zSSi5hmuY6X3Nnyb4Zax5Fiqi7roUMmPtdd3n6iiiJkWLYpFUqAiuqkXBzNJeHB39pUsyWrv",
  "key39": "x9oVxnEXgoisNYQVzPZNccRcbhDeT72iYVZd3etCh27A91D6kUZgWTzEMj7omD938ZkGUc3WvNBNeJucR8nn7oo",
  "key40": "4Kvpg6gxjTw6KMsrjJB97cU2t7FWMnmFSF8RrcgnnZGE2GpHbs6izh5Haq5LNYsBKKrhqi87upHgnWnGQ4jsg7ry",
  "key41": "5T6b9ruyEoUeSGd6afJtj3Y9ySGv3uJd6qRfSBMFQhHq3siL6B2CBrn21PRFYRFziedbvxqbtSpEwsxARPUpGVSW",
  "key42": "56st1QVxtsJWMcxAsZPUtzNaRcFJBwURfdXPSGS7APip9MVivvWe9bBHfhrbfMfvYGEvCYMPLiuY4nKskis7XkXt"
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
