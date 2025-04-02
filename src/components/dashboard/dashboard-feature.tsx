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
    "58mPMK6qf5pjyL3Lpmoc6mseTpevE5Zcf2gwcj6w35oyki99ZuC1squEjoPPDB8XAhKh2Z4PCRTbe8Ug5dZo1yPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYUsMFvXgcGj4pT2jkCvJ2rrSMtG9ax3zzRYvRwjs3eYrAeWtQJPYx5bqvRr9ignxnrHrH1YBRuomaEKJfu7ca3",
  "key1": "4yqjNpxmJcY7tMs9SoAQHFwVSp35w3z8e9bmWDPC8oq1i6FVHEyg2kBJGMis1ZVhKruNyTeHaxVkkqcGEiK24Q5M",
  "key2": "2WcaZtqLRPpAQCsu92Rvyx57kRnQL9hHTvoTAH5XvouefQbtCGeWPbKDBeNMs9s5NWDRgHfHTwC5gc66EtBmLZaF",
  "key3": "4LdKeUdBrTq5DL2eegjAMn9WEmfFF6SdtJUQvobma3bcxEZvQe6Ahx29FyXnCNbg8fCw69Jy9QXDAF6pVZHP25Q7",
  "key4": "4nxfFR6MA6TKTGWNHhTsferGZE4nP76vB8yo2NAneLbdWN98Y7EqrC69sq881j4HjecLHojBy1YPFuDxWyX6zvtR",
  "key5": "2RufejSJ4xqjh5s34RFHMo3ZyFt9S9XzZ6DwA2bQdD6TLExhTHfYMXwoajywzPGRNvgtUzTLbKYMouxQrearg2LC",
  "key6": "34FN3XWEb6CHPKGbVDbbm2eFDprt7urTYzTcxdcBPgVBWjDTjeHF2wwBAYGiDNYvfQzE1RixCEGbBMBdaSKAeouB",
  "key7": "3wJKm7BiXBe1i5MxqHF2PN44wevuM258hC8jeDqJAaoMrgiNw923sTwFTtSHdWTWzHp91kVCx9ZdbNFAmc1NJfUm",
  "key8": "49dohLxvXbPo3BBKFdzf6u9X9kAuKeHhN3GpyJmbbk4Q2GcWePZ2BXPUKmmtJ5FrKMc8ixhSkEFTv72ebFsueoBQ",
  "key9": "JE8DmY99n7ZNHQf7FbvVooG4xSuc3VSBpxKTguEytkZRH1HCMgFGxM6LEcDRdGb9Yj5N2r71SRN3kcVTKQrrQW7",
  "key10": "ZaDmi3j73rXXTMCAB49xcXsrEtFyqCsp1rJLokRou5YQWCg4MQbDp32SGFY6rBWSEU9cTkq7VYNvCphHQ3eEyWx",
  "key11": "21UHPUQsbmV2CX5L49Vp8e4RjBrEWj573g6yYuQrYParqw3QXanEoKzKLrQq2PprgYFAJRvAqo2DVnHrgC1jk56h",
  "key12": "2oD77TG4j55UoG6uNgU3LRmgd5o3AjUuyvqmhTy4LYQi24RXKBLYunhLFqHBhQxrKAp1PmLgJVo43x1fqUivJBvg",
  "key13": "rJfo1BSn7dgx5xdbBxCr4fJJtje4Cm5Vnu2Jw3JrMDzGJmmbwTMRtaghqPhQEUQVtt15A4oCbk24tcYnuxmS1Wr",
  "key14": "6BYgNYiJ6xWjmPvBhWQK6pdtsPie21KCcC57SBAX4Rzu6rW3Ymw4haPVbzz8XfdyHS4YqoZwFn8EFpsSXJHcg6i",
  "key15": "2yNzixMj4BabaFga5om9DbhwVZZMHD6xURNPAzWTciTCvRsFXSQfjqwfDuZ93oYJzB2vR8ApQ7a8oVCeiR2dJTh4",
  "key16": "54MAdNZyyqjgkyjcFiUJrcq3SAsMZAL3zbtmNYdxfZvoWwruLMxRDL4HiYVwMqZj6VueQnKS1V7HNuDYQrPv8geN",
  "key17": "5PzHp4eAp7sYctvYCP4qRa6cYSHF7BpANYh6jbCfvX4EngLZiHkG9TNJNR2m5sZD8o5HS1pAwe1QHJNrJRwqfhob",
  "key18": "4ptTC4ngTkWnbU5tvBU8dSCH4bWkUYuZfLG5CwmtBApReeeVrrRBYXXpJY4MpdZvPeMEj1oCGag2UTw2XGcfGV8D",
  "key19": "SVKHD1bkGSafSeKoGuzngLL4LrbHB5vPvRbKhsyDQBDuiw6AiqdgZTyCZoP1ELS6doF4EkZ8Jk24fkpuoCKUwCj",
  "key20": "5YsGgtFjbrJDXUtTEqJo5cFfHn69CcVp2MbrGxYrs8bZ9vkmHfMucZ9qmb96iiVQS3X1abL7uPtu6fUa9aXDxbQs",
  "key21": "2VYD5y9wFCYSdKwxNuXQnYr3QT73XNmfKFW3wWgRir6tEi2T7UV89hy2vLUmywTzLuuNrzoWwo9q7A2gAZnw7jqV",
  "key22": "28gegKK37K5wv71ZNF3JFpSF7vUV87CHWmXq52STR1LYQmZSAmL8KmJLb9Cst6oHT1nZfu7XmLUdDNozbTCebdHR",
  "key23": "Q1MMWF7RRsLjvdBXeL4t4Y4qKJaedNDMndCfqXUR65VXPG8UJteG63Kxsz1swC19LPdj44BP8YBVdJndbDs76o9",
  "key24": "33AzvydxQeF5HBsafW5PEavgKzWUogqAmiRTTRGJhkP7fzdbJ4H9mrscjX6wdbs3oSHJ3iKfFVMPWuex2uhcT65w",
  "key25": "2paXDvwdtWysrarqyvfbVWnJ4gci5faRWXaMi2kYjCM9WJLNqDAS14PnWpqNdBWKpEWKYSu6WUBsGQdLMvB9LYR3",
  "key26": "4JkxAK2gtL2bNeVMAjZKH6VEP95dmQvrZasDHioRvGirAyFaF3659i3AM5CSQ63yhczDwEHLW75CTr1x3SsAZdoG",
  "key27": "4i7E4nTVqPTUnnHtMr5U2mmaDBeEpM9USfeFbsUrP6Fc6fi4wzSJkJT9q2eJBjXFiYiVsXQMU7NKswf2G9k1mQHs",
  "key28": "3gq7rWcHggz9FZT5UBffnnb9c7R1FpJJKED5qaAc2XisXDG4KWBuW4YV1ZmC52DMzZTcMo7jPg6u2b4sVDRPbfUY",
  "key29": "3w8KXv5sjdMHqoV2y6xLbgnDhH1RyAwbsq3Bu36xSHJGSWhAkGwnNyjcHxofQkmUg4CYzMmriQVuLUwS5zw6UU14",
  "key30": "5WZC7iSUABjjHtYdTudwKc6mMueyQ9Mgz4jS69Wq5o4kPZGruGmCdD9MV295UgJxN69wcHHaibFj2mLvXFn24XRz",
  "key31": "34MWnTV5Tc1TdNt5fJgZt3m1FmkRASzsMHDDiiXHvBviz5Kb1m6gxgke9bYmkacWNJexsAw9nb8v9puJF6DrSRf7",
  "key32": "44Re5kpHgiWJbc6bBeXptvSoyYiQuxDzesbSCsGxkPXYoQLQo8CXEwV1LMXBbEXnBEoCGfobYUzkJ2GboUV9xqA2",
  "key33": "3LeCncUi5aHkYGaKt43jQAkMPZRWPBRVapUuxAkKed1pU2UE3PvyVrL9keRz2Vr8H1jVJXsYDMm4VVVjFNpd6GY",
  "key34": "3a4Vg5uA7E9hhKfMPwh5B7US26if5MvaR1wbALSukEw2Pw25EfbGFJwqbEMXdGm75oUJxv9fqKh6Rymh668YH9H9",
  "key35": "5jDxEygSkEXSJzR8VmW3Pu3tmGhQdEvXECnr9XwgQZYPiHMq1fDJ2othk9r5To5ndEqV3Cp9j1ZrAjiLAs7ktgtj",
  "key36": "2vKWk2EKPte9QTkr9czW5gReAkqYHV5snLZMPLaWh1tQR76TpXrjJ1wmguyrQbx54YwC9Ctxm6R1Vebg4Y9WkyK7",
  "key37": "4CCtz9s3nF9xof5aEyZWWAicbCQrvyeSEREN24u2NMpBiRGKDHdew7L3bmbaZeW9ZTHeJgZpM2Te72UoM6mfwik1",
  "key38": "58DWhpABQbQmfa8imbLceFkhjRgT81iBatveSFahy1es9g7Pn4YbNHHQopeFphgH1Rq78z8fL5jJ2qCRA1aYNf6J",
  "key39": "3hBjLnVqR3w9Dvn3axskTLP9HZf9G8SSMxSghxK4kJRkM36sHNzdycZ99FPCnFDUhyEVAK9V22dgAeSM8qrvn9rF",
  "key40": "3abaYkTeoTyEvFUrz95azy59HMZJv93Czyw4Mx8hy5P7BUBDX2inmYa9LBvoaq1VmXwoKzPpBK5yiLgifZewfZye",
  "key41": "5BwhKKbhPdw9svnFeHoR29s84ep5VBwBwyfmaEiHHhj2s4EqGqx3cQcK62fp9pUpCnhdVTTqGwp2jqxNM3t1P948",
  "key42": "4pCxzunuhKbAWJBpyUY4Yrafi9rEgpG6xaW1kTrnTG8cmCEw75yG5vsKrno7mw1mX5bLWuLn6Nr8HYR3LxMwpDeZ",
  "key43": "aE8dBmv3bjWDAL1arWpLJyZruFFCaKibRofiwFUjBNrQG4MS49ro21weHvWQYp9xHthycvYEiQ37ZRokYG8XTUM"
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
