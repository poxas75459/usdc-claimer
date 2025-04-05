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
    "2hvg8fVdBjT1R42Y5im4B8LpZNuLshL5R4YYARqyJBfcqysvCdcKLGvZ7QDpWiug2Zc8tKk8aGazCCASqR359kXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnqQmJRZU7BcmJNMTBLjfhcjKRF4mTQ8YhW5rwq7v2qcxkSkHWrjRagLsuuzowWpXRdje1frHSQT4LdFSnuyyzW",
  "key1": "AxR1sLxMQhDkmyugLjCozgTf35gCYq2g4ekADGYub2KNVQbqmmVnFzadT5Wk1UsWE5trQfxZdf3pGfxneo1EV4c",
  "key2": "5m78xXL2dNK3DiU2vpLY5YjBUNrVcVmFjpV7fxFJK7ZAXKeBQKiigPUH4JGXAH97HB3TdovmqksjwvcELZBSAHvU",
  "key3": "54kQRveAPdYSNAY7aWSpdFwHKktBvAW4QLBtaeWN9mRxogYbaAihYbnfbV9Cixz1RQEBfXMGohfobVvpLtk2qBBb",
  "key4": "5DpinLFiyiZZEdHgpMTttRBQfBBXDGQi8BSjxxWHMWobnoBkD6HeT11bqtpm9rv74NsSuFgZM3BSXSzJgsr1RKgf",
  "key5": "uVNnjEcCHk6sC9ZG6asatQRZycfg2j7twzxqRazziQBZkFWXjXr1bqAvMyaAM7ySQcGSzQMtVkwdQhxcysmebGW",
  "key6": "2ZjFMgAauWyiQPytkVrh3UyyacG3uzVyZmjyLZZQFXwSFYU6kvqG1HjU5hFogBZyHiSPnM1wx3Yowdfuavt7LByR",
  "key7": "3ZABNdtLMkW1XW6Z744k3TynzYf27A5pkDcEJ3ixUxKoy6ZnL7ytQBNC8WKxX38aMqjHtCSUJQfiXVVR3HdXRSpi",
  "key8": "24cj6J2H8gk824yRk3La1pV2dsQHNnZ51mCMApufR5RdRBsMtEHAuyGqhoR7xtqTqUCTci8REZZ14478roFptRKh",
  "key9": "3Xjfz5F4YuMWRG7M9acpzXUqEdjxUFGJpqzk2MvoA5iDNqhGKBAqEAn9MRvEUwqsTUvgMYtFLZYUctB6vQcWshBW",
  "key10": "47KPT26ThAPtpRDisuvFzBoKn5RJGwHzKMaMnCrXQMeUc7HdRCg1XaJP9p3z1sBeLPnhER1aifJykbn8nuHH9CR7",
  "key11": "X4fCWd9GLdhK9zK8oqHHXXvtwNoXJeYAAkU1XSqt57TY77TgJXNoe6LxZHLXeN4bjixGXdtCkz2wzhrA7TftkR3",
  "key12": "5EArnaA2epwF8qTiaDUXh5KcouiMjQGu1fW8J2y6kDHbXkiY7MJCsTit1stHnWM7KfMoiffNBkmud4AH3raNpt7E",
  "key13": "2cXM1Gb7jgcnUBx65yoLDEFVgsJhLMJe9bzg9fmzbJHEZA5DnrWdN1DoAjMRqsB7rApwjVABsKoydZMKamgtAJWs",
  "key14": "JrRmS7bjSRFmEWoiHsZqcfp1wmUfoxhqpgkUgAHihPWmeypX5gzaXfrbqdZA2Jm3w1fA1yvpApWxC8zYMQgUjce",
  "key15": "5k99HGEbu8hxYrmT8xU4oaYueAhvtd3NVZqbY7KDAR9MSEvu2nm8yzSsafTBTHavhyh64AoDSjyEzJPw4nJRKjyW",
  "key16": "2iD2xeNDKCWVh2Xm132q4XEcjJHXJkmv6EzwrRvRRZ3az9ViBs4ne5wFHubW3t8oi7V4Hu2bee5wuGEme6F8LpxB",
  "key17": "4fBo5LcFuqotZQh89GQtJSRksKphimBMFpKy3sY7dmk84BLyMoVaUZzXNorrgwzsTbtyyXNiQxTkNe8c4mLZXiUg",
  "key18": "5ije5e5K6exi2Jt7T4kxrELApYSoikpTqNtUhJ3njF4KDrDoiSN4addzqrsyM1n6x68xyCuLSZ9SyMdqAir2BwUK",
  "key19": "2dqZgJGyfhmmZsQGVBQDmEGsgf9yMLz9R4LBUEfmp7vuMf65LFaV8TC9jPMLw6hA15Z36d8R5tDwwqyaNVtD9Ax7",
  "key20": "3d8dUpcy1moREjaHaNksnBGuDftZsW1BFePLjRaQFH2nnRrqa3u4YwS5tn1fwbPHKrSoAMj1FtB6t9tMd423cKkL",
  "key21": "5thjurZk25Xq35SfAaqnH1UYadK5QSmBabbs6D5CZLXTtcr8UNmo6qjRVhuRVdhgB74QCtE4uCWFm2juymGvZ2ir",
  "key22": "2M8KuxUzh99Bv34wPDUGhxbcGBQZByFUTEAF72ChkQNQr9FboxVo2TdczghPqJhLiKQAmnFHmgbXsR67zBR5qL6U",
  "key23": "37TXybrkMfdqFoD7Gkug5GibHFxbgJTLRD7TBi8cZ859Gs6qHbjc32nXyUz9DHrfBHwaY51opQtcKJPjS75eAEn7",
  "key24": "5Ba123mVkpMhzdVfr8Niva9SFfRQQHT4Jun1eXsvairDvkgpPTYTdBnhD7tQPqoHcg2PWEmHFrXXcfjkZNJLftBd"
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
