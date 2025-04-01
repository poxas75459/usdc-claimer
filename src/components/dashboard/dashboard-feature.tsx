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
    "yDivH7zfQ8AkdFbeo5eiSwrwjUFHEPr59DVmf4DfB44dmyet6qcbt8Kyo7WyBd632uueavzfkctsqNXkVpJnb1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEFShHJc7DMWtkWqLBwWgYUpZ18unYbezYwdo9mkkgAMpLCyneVSuyxYQ1dZrwfMLfXhxnycP9si9tFHGMCm4QZ",
  "key1": "ed9htCRiJ9EedZLR6MQBK4xynaT4WFcCPyTLyQG2dxjX9MvnfLX47wFpoDTM393WQWUJkcRzQPp5kTjt4eWZg67",
  "key2": "2gKHQoCg1R8Cp4E97Hm4KW8ipLusmbyswaHt3GjuNe8o3RvJcoBvTzJYGX6Nu5eyURnkABPfDNsjHyE5ChkqsZmy",
  "key3": "4RriX7BH3oncDJBto44dqNe96ZaZ6mUyoeSKkV9i1nLwNF8khkLWCcdXbFc2ZX5WWhSF5NbpjtBc4r6BEUBFmdrz",
  "key4": "32jfYNP1PjQMxNzB46eyV6yghXWo2iU4AWewx31xskgVM6gjecV2gzRaJyfwQkVvoaThyH5a16qf4eRhceFH564H",
  "key5": "2THJd53KkJAj4Pqwjv5sGXAczMsfA9Yo3yrDtVaEVx7fn5u5sqCqDzBSvZcvDeR4ecjTavUVpGUrTGig79y4G3Co",
  "key6": "2nuAxDHxA7PVbP4xuvx6vYkwmajmuD1J8zVfRMo2FJTW5DWsBNYGjQYQ56t3uXyqfxU9bRKoaifiVGxJuUiq3TqX",
  "key7": "5KgdRsawWMK97tsqxSnMxtJcxXiyRxojyk4wnWJLdE7kAmWZMABFKdRnPfFzTfeGKJUC2CfkfFstpowCpfnbZ8q",
  "key8": "5Tp9DV2BZgKbWpBeFfuyJTTSV7GRRjbNqMy7SCe773bJQeNVSmhDDrWDc4xujxoLyKc4CPqPuc3irQXEA57N8928",
  "key9": "4ED2JhhZfJ2B7vjY4qmXpsXuarC8utxQU8j3wN1aGKqiQ22xVgerCf5CYZamWVKbGYpy7JYQQd37MMeMVjV3DW2W",
  "key10": "5vy54x95XRdsshvfXunvV1fbGGBewJ5eVdB9PqLhrA35Ao4o2AP5JcWRcrnHJwJ8L9AdqVwb89U2NcUo3tqkbfNj",
  "key11": "XWNP2STfTvFaJJM859qhGNQgBWsUgBHnuvFd2zkaHRbSj3ok5Stm3BjX6ofdxggyZctvL93jjepdZKWp3V1TvdF",
  "key12": "2qCuSKjUDTFLoYPMhrRkHXweXEpZUSErn45rJaubdnnWMP1jJPr3bPdMeAX33pMdtTmDZ67nuETpip7RfPnDTCJi",
  "key13": "5oep6D2y1PZ1Y6eVuLHxQeJc6o6u3ntRjAoFRK5NLEPeUMLreZu5vGbnHNVMqz91h2bxac4SAEj6McJCTk7ZtTC7",
  "key14": "2JMEDALqxN3Dd3G4FeHrjSqewmGenjueg32uu86s8PCRYxPwm72skWuX9qcvCa2GF2U4mbE4K8xkuzAitLDX9faP",
  "key15": "5WxdErtm7cNoS3GrcRPWh2dsVv3ouRq7BHF9UJ3FhKHzt41pb8UBvMGtyZK6io69NLfR1uKAaeBez8oVuapZx6A4",
  "key16": "5HPYCDrdV8Tt7W6G2ievwDq1VpHeMpoZ6XYTsRzAjkggmKtjg86LpcQw5MNMpHTXs28cU4KGL1Ha2xJ4RxQR4pXW",
  "key17": "61Mtc8Pxw1W3bWhe1eu3gSuq2Pa4dqkwnCeqdJwgxPZfxm3xJ1azqDY5ji36LvQ69gdYSWP6SS9ECWs9SHnkegFc",
  "key18": "3CqrvM7SaQhowrVCLp9FjEifnw2oRRqnqhynVdvQsKBoRKFLvPA6bU76g45sYLPjxahKWbkSJoVNEXRsRfU9WiYG",
  "key19": "2xr6nNZcHbAZFL3GGQsJNTtGGDT64DeVV6cZLjWhzHLsoNkuNPzfENMxDzxXhkNrZdxgHvvUxv1vnzvXgMHMR3mY",
  "key20": "yfNryqKHGxah3H3QPvU9SXbCuGqBRTh9Q54f2j8CsaRFf5fW9sovWbZcrzH9F8FZm58Eof1if5XneAGnZfoK6sw",
  "key21": "sm7RP8kDbLzhEoJKu2rFdEmUPQAyAoEmCcAkNJcQgCMLxzJxybDgfbBS3h5q5nm2vucx63cJ4LT9QXiAn5qNbce",
  "key22": "35mbn1SFijp4rLvcgxjh2U1Ep2aif6UFrLxD91WsFMChvak3LcoLpAoqdZd6JLAUBbmg5hyDWXFCWtcbNKmfTcjC",
  "key23": "2fYTRLVCw1FAMyX5pcBDbTi4vdha2SNUJttiTCMHUxL7GNHGye25gD7wUW16h78nq5uKiBmFTovNoU4rN6et2kPQ",
  "key24": "3A1ZZ8eutVK62PLpfnGo6n97ZzGqrnH9UZx3thjAfen8uuzaDE3jmYr6ZQYEE5aCQ65odL7JdTCuDuZ9vjWrFJoW",
  "key25": "5HMDu2qvUFG96nQgNyYoziH7Cc525ki7sYpUHqmTF4SzoT4bm8k9PD15MxYTTXLywAkppPpGBTgj74WBjZrVmMJJ",
  "key26": "h1hjCeFZU9ELvgcriEo8Dw6kCaWpAayMftdtMzVSzUsANaGYWmv9UPQAzPvTHZrVuuGSkxt3mzFPUgkqGuM4KEZ",
  "key27": "SqU18q21GsFATiVAPPUDdCY5y6rSe2F6qEEjSQw8dLivVD3ME6Ze6aaXYqgqzcZPebcSVVMH23En9E1K1y8VKwA",
  "key28": "3fA1ZcYazxX768i3MyARbXKC8WL7VvU7Fjg6Z5vE7W6uT9SzeYvQn6ogu6vj2tcfnbrJqzvSYmcuLa2i9oKCv8gP",
  "key29": "2bvyBiTXaTxEBFXsdmRndZ6rvEwXboAVrHBuFxDtPLvNTy7JWJfioHecsxwfhv3SsMXYedBSfnGCCpStmERweLwK",
  "key30": "4iLnh3941tDDSwpX5KmnCprcCp55NcFdj8mq2qj6kk7DJyJDLJ91BrGSh9KC6ho375rkCbK5vd2sehrucghoTjV3",
  "key31": "4JB6HT2BN7ED4mS678fV8gXo8Kd11KMSr77dWGMKdUYVsrLsbWnwX2qaYsSnxrQCS9M8beibY4JMeEzN8Tk4fK3K",
  "key32": "3xAVDRdWtcxLXd36zDzKbZRiswwY5jAWWPkDJjwMx9FoyVrGtyn1q2XgnAasx9PWABdyJgVoEFq28xZnuBTEH2kh",
  "key33": "4yfmVktemvUgQsZi68t12nzr39onxrt2wPFMckmfCvGGyb29CkovknSHkA9DBNFmV8SvLjZgM57va1mePsrE1431",
  "key34": "2iaosKvtfkmYT2V9kgkBuE2GsPGGCtiAeDriSzjs6XjgHGpfrFoUJaBumnSohiYbZjHBDGDEzmcnyFAfGo3NVXtS",
  "key35": "3suAZfFAvLM6F2mKh65kcRsZEqnp85EB9eXL3E9hJZxa2TTvD12fxcrgpFwT92gbmKDuUwV5QYfYFDgECxAWxtK2",
  "key36": "3D43octWQMrG177fkakSYQQVHGejjkv6NhQu39zVXUKpmpj1rLngMFVSUWPzkCUW2Gg9Vem5AomrLcsqwX3Tcmdy",
  "key37": "G7cgYdzyo3uRyoyZhwX6tSp7bLtQdck1ei5PAcnqZKrRGWC8fY2a4vgdh1oqynSAUiXMQHAsekjdFnFRyjPZ1Ax",
  "key38": "5zBFdnKFjHfyDFuBeM5Sof38Q4p9UhxUDdMoe2en1taKs12Y44D8CyuCMW8vnk7YbradzSyGv96fnTR2TMMqM1VZ",
  "key39": "2oiLVAnVhjNqsoZzQSoSdf5DNWMdhdbAt51FPMkHtm9CWZznFd4NCGph94ekcKm9wHuTVVQPLDJPh6HhaUZePLZG",
  "key40": "48txmTUe1umDryVUQx9FQo7SMPBeaZHdcVc7V9cXV7NHKF3xogX3cD9EmCjaVC4ydXd4SUEUPUdDaRMevuEnumB1",
  "key41": "3FAmGT2HXGjHNVGDoYeKv1qzRq5nhtRxwEV62ryMDfoJWBzu1PuXLBC5qNif741wpjFsoH5u6iFxLRyGAf1d45oc",
  "key42": "94G7b3C6WGrFNRxeNxmE428E87QMyi3EYsUPzTRVsHnQRVEVPyr996G7kiN4dJGU9HdXfiSszmD7TCajGetd9k3"
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
