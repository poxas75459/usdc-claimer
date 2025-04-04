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
    "3uzeJ6ADmkqfMMpkJneLL6MbwQLn3g4qgsVFPib9VvKxjKimFk2LKsgNUDWvN47qnoPUeJ2nVNMKA8vgJd5xSYiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeqtMfeoeG3d583Qvv8NZYtWqpz2z2d9LwoXiGB6v7TRkr3yUwRxRX1JV1rhFWvvA73LrH25WJs1ZPSiiE5Cb3k",
  "key1": "4UfcRFBorRAjve4qdK1Tn2MuRkHiDnyd5NHDo7cCP8xhreidVJUhy2ejSf8ZwJojLTrsuomwKDdB1qLo5ckvKzLf",
  "key2": "RmKnq88JGn31z4chWwmBjW2C1RffrqEucNvsiWf69f2EYLcLvTXcP4nxAiTpK7nXpY3csoEiaUqvg6xddh7zGqY",
  "key3": "4QLAG12qu2KnWUtcbH5EGWrFLZhngkmXo1MjUkKwaPuFqaGLi9tSHbZB8rVdAMiNeGX1Yet4FiC2Vs8ZS2PuLkKp",
  "key4": "2cwmLRoHyDArA58rix5P1deAT2QwQm2V195CykuAbV57ZkX8zHJGm9L48qqrXE9JWxdEjeDhmn29Pb1Mq7rmi848",
  "key5": "31t14fM1qGXFCugvG1F6TA4WtDj3KGM2ewcMs1xZPRedXoWXiUzUfMoro7kTgoefXTFjxtHTs1q3NEkv4RzANafD",
  "key6": "4JaGBrMNpqHZ7afX8w7aTBnYY7vzBMGks4WiHKa7qENGV4TFxWy2qAB1VE8botdbq9vpYjEoCnnybEmttPKv4w9Z",
  "key7": "4BdbDN2RmC9sxWQwhKYJH2p2GMP7fTYH4EqCApXPK7vpfLWXxXa5CoDJFt9tnHquJeUwHhMMUoiq4BZuHB5E6nhV",
  "key8": "5uA3oRGZ5q5TRFrBzxGFzpfx3PSySQ7VZQffpqiFXzL2c9TCQvSWqF2fBmmVY3EQGJ3c4jMLUA56QgLyNaDk45AW",
  "key9": "j4z65JoxJFMFxyRBkqGJAFqWynapoGePKL7hf6VQ9HqHMzvAGYSYwqYeaNK1zKfnE63BqQZnPX8JXfBwv5Qv7N8",
  "key10": "5TyJDSjaoyr1HgkAW3xTFKan8mhAsEfoqp1tdr92VUdoVwZcVkKFKG3T1VBgKKfDWP1wachvjRCMa3B2igg5GMgc",
  "key11": "5YMWBc8JBcjJdfwsSG7Dk8NnPTgAFHsAk9c4hZYPuNz9VQ7eiBY57AQVPgPZQYSNVAbAgumSHp32oNFramvkSoTw",
  "key12": "4SsjrmQ9c9Y2Yqn1kntCCXw3vQ1g5qsQzaq6ax2y6LSUj9f7uRgZomQjHHLRtFbPi22QsuMp1SFgW6yxn4dq3cjz",
  "key13": "NTcPCuXBWBAwoH2ihfoet9QU9gjPPredayNJsFbfCNBjBr34RACjhPp4aiSNwefJe2kzK5HjNLFxJfqjtL8cNDM",
  "key14": "2C6knD2U48ABjnHscwyZXu7KBZBgb9Xed8kk3Dcu7Sqy1QQhC656c3xoxbaDFmTiXjfL8W18JQq7qURVahsTgzY3",
  "key15": "5Fs1TqLDq67bRLEwY8a84quZ8fkykJTBzLFoxZDpfuqTYHsSVVWTk3amUdmiUgiomuSyVpMpdyioN6tNS5R9xtXc",
  "key16": "241MxhBW7C8fZheePzNzGTsAqZcRpy5bbnbsibHEgPhNcKEn9wRd33UP3VS2YA395gZQih6b6ZiRouE21yARPGWy",
  "key17": "2WJyLydYYGAKYNtSKo1bkaEqec5JDFcsd8yg7e491fuRHbpkRMzFJjChCRsxQWiWJBg85Q55KmPbd2PsXUq3Uaho",
  "key18": "5WYehN6sbq195Pf3B13h85oS7Rx8tPdskGJm3iUREhjrecqHKft4nqrVuJC3QgLqeb9HjYJ56KLPnUwZgTMHtmEj",
  "key19": "38WJkg9S6PnCnhFDdWnYicE5VpubsK2me2KjFqsBWNkBskm5Q7ajWn6nHURvq77bn4T2wYfvReyb8iG5r3UjfgfA",
  "key20": "4jrKc68YCPbLvC4WZCYLFLwQT72aUxkinXLhnM2KS489JRdMvLxp54yPRfAUhi9hwo1UyztQ6dosLJ8VUFLmzDse",
  "key21": "4XYh4NwM1EqCqdknTUkSBWEA4YDeeCrCw3cdmrsLMgWXaP5QKVnFGyuE3EHt6NEHMoWPaQPS4vTEEb4VnMXr2HEX",
  "key22": "HW3gRTvhfudSqps6fYfuV7U38HfcadN6purhu3PPXv86k99B7DyKXy2EGRjqWYTjt3DMn9x36MpsQsmecK4HnV7",
  "key23": "4e4Ziir6EWP6KgjMCPqnbPoJnAseaeugprWJcvteXwiYXNX69AnZ5Zb5hv9MQVDTNt3xLLq2M6Qy86w1i7oMNBbw",
  "key24": "3CRMKNdGBFBHZVdsAH4s5uqdR4S6zTTdaunDcr67ryubcL64nogE7pKCC7Yza7hEULTBZq4cEwS1onLrQvqXaCBW",
  "key25": "2WzR6AU4KYaTG7DkWceYDtZRyNa5RWDeECHRah6VN21qvkZwiDAWQKPm42qQjGEs1WHdnzGNFd9ABRNRsf8enbSp",
  "key26": "39YVCh975st8daSrFaQTYusa4ktDwun1Gxxkj27CxArbpceGf8hUGU7jHxQ46b3FvAvSKDCrX9k2AChGYyvxyfdE",
  "key27": "m1cXh4V5YT16Bg8FLDzksuMKjsKM8rmuiF1GUWxjXQXYiGLH3XB13ko8H4ooamAdVL61LV2SCDYjW29xyanEviD",
  "key28": "4Qj7hWamRmQeEFqtub1E4XScvXbvdRoiYjhFRLc5poBpFmAyKoJyuFodyTgBrVQAotvHC1dHou57n7JNgdfCGGmc",
  "key29": "5cKYCV8yBkYUYZ34jvFgoW75NsJJRHVjCfo8pcdjCDVTejC5Ax6g8vzgibsfVtYyhXLaVhkNvkMnMfvncFs5ufgm",
  "key30": "nuyecevDPntxrE9N7AWJy2Hxkf6erjNpDZVnTcb67jpkZ8ys8dW9Qjp6EmSZkaFC1DdbckH4xzjt263fQpkuUT1",
  "key31": "2GpUFdRsFWxrJ2QoLpMFNHrLia9FyQeJ3b8s7LV8ZBjEevNAbaiFYU5dKXDNWAkTsdogJQVVeYC4DkgVaXrVjXHF",
  "key32": "2zhNDHM73kggRRjGyUbDSAkERLK6xbbkmwKibMUcFuwi2thgKeTjMNyUZUf2SQ8FCJTgoLhbVjpZQB37FkdiyBfU",
  "key33": "QCwi7DmK1kS6HPZwKUAXDuAjjdkRtfrJWjunmcEs9UMUNFzxv7ocggBjkoHjhPzsVjkyYe41cXjRJbvd1SwMAjx",
  "key34": "4AE3inxuC9Q6dnnj7jgJzJbz4EY5xz8x3KPuxhzRnLrCycrikVNoahtAuzdk4eqkpZsmCFVGwpdacoqcXSevn17b",
  "key35": "2giBsuGbZNwb8kx1pd2sJqw49c131kSUbCCoVX1sd9cXdooSQgEce2jM2p9W51C5DQorcbdyqZpe81sztPuhwUpC",
  "key36": "2G3Az1jAfaufMwGGngZUyZoL3Jo7LFWkn3g7sBZeTW67TgLzZjseXKjc19gHDB4iXs9Bjf7kEhx27Mz5xynoxHwk",
  "key37": "5mDCCed3yunBJhpiVof9qN2hGr7eDkiiYXuxxANbrQG3bzVsTpKw2rx18fAmQkdUzxQfXhgna6LSVSaTo9Q4hSar",
  "key38": "2dxrSMJDpVsa6K8FPbRXttjtwPsNHXUKNBChLpP5F8kzzb3xuhfJb93HwrMUe2MeF8Cxh2stMMEgq4uAFa9ow5kh",
  "key39": "4XeXYaVFD2Bhyg1DbCCmfPt7fdGvjC7r8n9qYpuQudz2ThbqM7ftkGCifcZ6mxcee2FsREnmkmMCtn56PHKMfqkZ",
  "key40": "3cHNcN73GvyFRhCfe5mvJ2ZHnAYDQwJ4Azj5KYgaKcNe8mqehmq8TbZv1jimjRcHkMBuLMT8BwAs2Q234QHxZe5Y",
  "key41": "2ZxTk9sGnzpBbnG2vj9VxcdKvdqw231D7qA8aQKpifYodYpx46gvmHLpqPix2sQVF3TL6A3EvkqwHVdiJ44tmLTz",
  "key42": "24E291uhJ2rWTjJhb4yWVzvzTbVPrKb1ezNUT4wk2dmUnBDV17KnGDF2aSw7cBUGBBJUVr7CYUAVjXi3uKLC74sR",
  "key43": "3vv5UNvAvV5ANkofHHSwmBD9qQ2TT69ECmg6zHAKh6BaEj8cNfefNVgCDd3MbotdV9N6dZJyGvWpGAGQxLXiA9Jj",
  "key44": "2kKRy5tT1yAcyLZzJipDXsDTZxdro7H8A25ec31rNqPeyoXfor1Te5ThApcGZMKyPD7hERWAVdCggk7cABneubXp",
  "key45": "3Ti1WPhFWfos3yrRrEUFECxcTCjpKNMG8sPkGBhG9vfcdNhr887saysWgkazgtwU1E4ybDfoCbytLBWoPApSrsuo",
  "key46": "WEDPuSTwoQQZ44E3XUsT4rphRtWaNTfoCuD9EEz17gBbBquLhS23ZFo29VY2uZNAAmhM81WhdbwzpMevBpCkod6",
  "key47": "38mJT2CmozCKcEPbCj8EkYcDEK7Nsq4o7NUES8gH8WePFfwtj4SYr3kkzy9CVhCZVNa4sUMjpLyyad1wMSUtrS3F",
  "key48": "22aUVr7zrmQZwe4HMDSzXjU4ijiJgeAzBihf1KQ1A5TQbPbC7Jm6DuNHyE9Yce7RyeRVGa43gz2qbDPZKhLJuvrX"
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
