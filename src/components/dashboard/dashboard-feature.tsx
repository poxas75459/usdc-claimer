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
    "Z94QvUHPBAMJYCWKUTf9vYtFT8i5jHw79DL9qhVB2UPWz59bT22FQyPArWbwkXSLJFqSiny4XimCBGv5Mkc89sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrcsCTFbydMLtszN3y6x9y1pQpwjVo3q3dyYoJXdAL62uSRZdwZr4wzparjhpvinp5gNSyBzjpDjwawXzhrp6ho",
  "key1": "5NseYv6Ft7kry5FG7kUmTq94aTZxNhAFU6fjnxNQmWEG1WGK9a6TkXE7FshJgHYHwUomWmEiRCTP2D1QmpdeaiBD",
  "key2": "3DReuA3pv4E5ZgDaAizmaXkUbVeKDdkcDGZ3byGCawSuzu55W6J9MKSjUJLM87F7XpvyZqbzCSAH3KNYEEUo1dm1",
  "key3": "63n54Gwmc8DbxCJH4AYq8nHbZzKWjz4SjfGbqUyMzgY4MhGjKyxkm8DsNY1K7h7TQtDC3jfJA9s2jLfCMhQSwwUY",
  "key4": "5mkPGHtsnzqexAEUwkVVKTjqfHykeXk7uMLnmSyTChMFs83Phi5td3ZxQ7NTcnfskSMkodLjbQ6gPNS568nuLC9Z",
  "key5": "5rac2tbKd4DYaYHCbSSk3CskvrPqLQKcGX3pdv34TCXyrDc3wphu9HNKemWtyxMVCgiMVSD9m122iGXxd2VbrdKW",
  "key6": "31yrTjLT1Ph2mohsSBGdDUy1Nk3JvL7MvrZNaGQ6dgphEdZXcGPdN7U5Zf7MP6hcpA6zbytTYrkmhoqBthMSzNSC",
  "key7": "3iyq7yiRmcLX7Li1WP1K8nbFEAboGiMJhNUkXutzuF5cDEXVGnGVqhySnhAP1puMTTZrQ479MAUt5tag7K2D4uxk",
  "key8": "2VKCi8nLSfRxnrCwg1pPyhJ8wRC6omMhNdWJSAPjFgTowWM9xVzTcxvWWP7VeujDst3Qzwf5yQnw5aYb3PWBewe8",
  "key9": "576eBNveVF7fRnfF1ExGmRjiggDfWcdKBxSb81wLw5ck9ZpHZDhiFPgDG8uLRtUgC891U8YAoETNRieoqHrKnkbL",
  "key10": "4KCxyy7ERTZ649DXdiNfaftvY26UTf5KS8FM41Rked9G8Ah2NXhy78Bb4FbrDRVUoZa7jeib7RMFqPkrFo9scR3Y",
  "key11": "2Vncc2j13ECHdxXBjmy5TKqoxGft2GHPWrpfp4DP7eRSxa147KvbcRQ883cUvDgTvQhLvY6h4BVECZHFxRito6qa",
  "key12": "5Lq1xj9mpTMCEtrYngvTVsYvzMBwY7PZtcWZ3K7kRzsHxL49wszgtM6BCmAB2qnNqafmPxwNX45HjsoR2986gSsR",
  "key13": "4yunyP5NWevHZtcSgEzFsbvDVGVTgS1kBBbamj918RPSwHFvnNsNmtgEUQvoJ69MmburHRUDCGTTNtQWBhZBycPZ",
  "key14": "4KLs4DiPGHpj8YtxyzB1332ZNgbSwVbY2ra22RxwLHPQqsv1NGFDSZ78bjbbG9tJdpYzKzTa37kMTb3Rcp86wWVV",
  "key15": "64JoJPJ5j9Xhk1fGgmJD9KZkMkPMvEq1Pr2hWL1Rw7AKdztDf2NZfGSZh148i5NUtohMX2oXR24ndg68uumTWrGx",
  "key16": "2BeezK6J6BxGubV9syeswSd4ig8czTdCnEWEfXUmRVJw8p5KSdzi5AhGmyKqV7nseT5o8UqCWFkL2M6Q1hMvGCB4",
  "key17": "3wGQBLpVwsHQTqLhwnVuLQbrmoEMMA9d2vbTxbeM5VBCwJ8AEi4A1hzS413ZtoQqVmowvtndqyCrrWFa8wUmoEpD",
  "key18": "5uiacpscwr6Q6LirbTQ6iE3A7apMgCDp9z69P1E2sETAJyvnM3Y4QSeZmhiPPAfPnoro4GqH1yPBk3RDJHUZENK2",
  "key19": "3AQVfMpMaKmNRvNtJtYBURjyAQQvG3b4PtHk6AUciLz4XPRBjtMt3WHWPY2AK2Pr6kUVKFxDGrWAUCo9paAwun7C",
  "key20": "oupVakqZaQDS6wpzUPvBbJkYarRP5DtEXohTH65vuxsJ6BLXwp8y1ZPJsWNezqnLuSc7WrduuznBb2WHC2D1oFV",
  "key21": "2WYry5P3qCXxW6RXWnd7kSNBsY6B6PMCm4bBHk6aPqxUwbPiof77gBpeLtrzHtDK7tyriGHssS2uzyxsntAWiafj",
  "key22": "2vJRiXLye7poHtPnFX8KXnSH9UYMPhKS9nakpY79C1ZJo6nC83RR3J2boELVENVdYT8R8o7y5HE58xgzDNC77xeK",
  "key23": "5CJN4jdoH3XMM2JvDB66UKsogJdq7pWRR1sfkeECtx6oHoa4zReMukAntiH1R5Gfi2V7cdSVMejJ6HGm9BDT31jy",
  "key24": "3kPCqtnadJnJcQb8EdvUbrZ7gPKYy6APhstD18RwEkWSowH2fZKi3yPW5ngBLLLEfi9vR1sWQvGRXygCyohtDbE8",
  "key25": "4BVqAkvNsdekFBo3LNjEUXJxWgnnQifQTZjNaP9dzSyM84F9Bq8a6S6YSuHtSq7JbNvbAnLWAWUMXTAdv5JZw55b",
  "key26": "SwPDE5m9bMKn5VS7LsMBHFmgQ7APALs9pDiVQSeQ6KYK15i5MKDQuWzLiE45u5178ovBtFpu4GTcDjJ2bBJJgzN",
  "key27": "5Btn35fBx2Ccqvg3chQ4AzzCsYVYt4TwzYrBiVrSZsmHSr16Ef6sxhm7o314ynEY1nN4WVnn4g4tysdVGYtjCh7S",
  "key28": "JGwK1RUDURsyyaD8hufYuxo3wgvF34jvAVfqpE3ivVY6fRGTuSSy6gSN3Vv3Wo3SgUAQCHcFkkN2fUy1SYNGRDv"
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
