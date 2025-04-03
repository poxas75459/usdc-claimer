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
    "26qvGBKwEQ529E9CTBwcD96LSgUc6jJ1TudwkyqeBC17zA6rKxixsqezf8XjcwW1sTUbJkq5UG9zqPnsTMD1jQsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gm2oLhiRzTfJtnkryUbNVEARcHNfhaXAXVd7CAkAt5J3Wr2gWSebiPqPbAAwnsCfyY2Z2cDcRhFD7ZPgCEWndVy",
  "key1": "4QJxxSdQ2NnSTyaPcUAvJ86MMySuJwmiZQcdgFqtBGPeJMZ5qnnbfLimp2f7PBK6vaNekpotgDL8JEfub7Rbwhcm",
  "key2": "41K9uMAqYaHxvD2uouKaY5gHRyaegk3TLR1xEcWXMB6QWxxVJWwCtPKsQwcaCxNSJF659dyVyWdb9MjPR5xxE5dD",
  "key3": "gBatfMVE1h6NND6o5nyGAURjBgHpZeQteDDkBHkzTY7zdTVNKbYTxKyFE8egEQneo5iExz7ykqSVeqH6v6otQGz",
  "key4": "23qPKu3znzGV1iZNt3BNZsizZu4U5bhJfRvaURAduLwy9qNrrj4hzrpd8QQtgHm7UBrH4vhk2hdzoWXjcvrSgHbg",
  "key5": "2qVByBkbqLtPKMyzYePvpJF1bikFuP9GoGW46YcfwHCvGhuayPuPaJ5imsUKUW9ewSosTrYZoACoHi5hwsyATiVa",
  "key6": "3Fa861AYvoupQZr2H6UT2c5R5riTQRGStJ24MdrCk5Hf37g9V95UMUyLmsRxYELUeen6srgKoQm4ZHt5UZ7jNmJT",
  "key7": "5on37H5ALDivbWRrmVHqqybMJKtyN5gZjeqdC9M8eDXztVuj7qyecLzhktW5ZUNRWg9KUkfyJAnGwJtJ4UkHHCSo",
  "key8": "23v1PvswnHhVGYeWH4gphuQpwWFT5po9L9tsDNkZaqJJDGVjeeDedRb4r3G5XL1mykvpNzs8uAtMGrVBs7TamCLT",
  "key9": "3kCiKuRBvdXmsczFwKUGpyHkkGjPxbzxedu1n8iNqzRAGoDumiExLy6dPxSTmtXnbanPbmMiCPDPuNdKro7tCiXc",
  "key10": "Z58LSBHde3Vydc6AeTKbx3cR8Tfgbu9d6ad9wXDrScteqckuMWCmuHwVWjTUNWd5qrVFy1ZpQhnUMYoT31N2ort",
  "key11": "3ZsQezPrBQQjmUrLkP8TP5Hp2VjJSyMAsWvLWJ3BGN49FKwZz8N2R6HXCanzfB3eJg4ewLj3iPP4xLF8MhAwJPYa",
  "key12": "15MeUQ1fxA3G6gUG9fYS1eFoeHDycAeTTpusGZ8FtK4rQgcDdXreGuy5kGBwC8Y2NVr3fjg2m8SGDt4HtVMb8qC",
  "key13": "3BKKsXSki5fxqBYSmDjPSTpSLLAroizP1M6BchNgnUo9nQGCQEg2qJcccdpYbbjtiFr2nXsYou4JFrp1LvZpPQ4T",
  "key14": "4vnypoUrfaaaRJVP7XddXV62nyecu6kkUWsrg9ExbT92jo2MmXXCMdPB2oHRPNiu8YtzzB1HLbvkDHCtW4s8TNuF",
  "key15": "YjFsbQYCjzMEDVAgCTkMEXJaMRJht6cc2dPLfCv28UJZjCNRsXbj12NFaUktYbAznJizGKGroMQTYYDayLhSK3i",
  "key16": "255gezGXsq57AwVinQZuQ9a4n3K834QT3BVFqxbfA4kTeMgkpNEeZzLfSyLKP7DAaUCZNPWdL7jpsh4UPt25mpng",
  "key17": "2b2SaKoimiwASMYSDVBhwQxv2LBqCiugZZhKwH5Tam4HCedwKwwttuyFdyKdtGoGPb3atcMAev6GAtonWm5k9jyU",
  "key18": "42vfZex5psnvsbCaCKz8Jn6xFxNyiEoMFATooqhY5Pob2Ga2kxqJfFHrpSv2WdaA4r2xpBF3f8pf54ihhrx5zayC",
  "key19": "5ShANKD4Xt4qMa6CCi2vcvbqDoTBQunShWvMafLgkkynFjDkePb1TxFHy5vunWGkNuSGWPQGRTuFwWDW5kNdzXU6",
  "key20": "65HouG9wqrU1pyCKyqghSPw664pjS6dqWSeTZc95jDyKqoeHUgRgECLPZKNj5kt85YxskP6nQBoLmVuG2fnEnHeh",
  "key21": "YcddcxDbwRyRmeBPEAjNqgEnWRuW7D11JLQMh5cGwHFixriLYuiLrKdKW2BhBA2PLdQz8VDR4Sw3MpEAtka6nFc",
  "key22": "3KtSy1k976GSXAdsQCqUnJDUgiiqd9eJz2ZVEDHHSXrZmj99Uy1YtrY3bmvCdYAwDVpSm2WgxxjbeDECF2m7XHfa",
  "key23": "2NqWweoqADg9MyjaFscFJdKMabbyBupCbK4AR4hfPjz5xZthYtZAdYSGpY1gn7rxzhkTgSFfTRKmUrRkiiooCBUz",
  "key24": "3inUwzWjYZs6CvEk7tv5fWkhgMkqZoKe5VyDbDfdUiByKQSWDy5QEt9Qup5vhWznkcNmssqZ98sxSzVnSLhFWDQA",
  "key25": "3KerjXxe65wvqhTbqeRpKTFz7AMXHZkjrruVSyXKyxbwdrF8hrKdnrABS8bGGXoXzbyDmvgixPYZQHAqiMSdGaAs",
  "key26": "3msUrDh5AgBNj6LanyLVtPQDN8AdYD2ueZ92bYwDKANvjmW6iWW9NgTjf1mNX3U8tKMzVWJFDBgeSpF8rPKypJyL"
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
