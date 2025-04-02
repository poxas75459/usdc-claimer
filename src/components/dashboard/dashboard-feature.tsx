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
    "2uyxR1qZePu74VphiWmeU82ejx7f8Q99PB4iZ36n5FpxrHMdbt9nQoBF1aJKB54zqkQKXhqtnc5HSZpVMzq1soiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qu26ZattieGxo6DDAbF7KKYfGmArxtPjMZPGprDoyY1TJCFsxVWNLvgZPKXNGVYM9znE6TjUnYszdNkqxy2xT3U",
  "key1": "4p4wG9ACtz6FCnyB7hZ6c5cx1t9vW73KV5DvvqT45MuUwwSDM9c5P85FmRwHkBTn9rzTvj8g3BpxXQfvFVoFkmDJ",
  "key2": "2y89eRXfabe52PsA6BBV4McghWaF3SSrV5W2UiLgvTDRy8PEvPnszvoZ663EAyoP3jz9PPK6owH4wz397487oCVG",
  "key3": "SvKUVtkMxvsjUD6w9iFj4hDXrWkv5QRrJ3SQ8Xp7mSh3F2j8mk5H7DE5N7tFDL9NNhrMLZmnc17Sw4UTuJHViF6",
  "key4": "3BhjjFSgT62RHfDDSQFmav6kRUdjADiaRiP2Um8jXpNinHki2hGjubSGvrMUdktPQeUXUz54LPVkhTm2EvgyPRyT",
  "key5": "mzg5QtcT39q1dJPpqWGNv2Cf1oeuQCgDMqgbnw4KipcCiGurkVxjijhd6gDm3pHipkSRiTddqJERJg9A6Zq7U9c",
  "key6": "3V6Md21CfYqBn98dNa1uGDg2SYsP8QmpK51T58fjUGfod5PHX4rStoK5rdpDdo8bbVZXhbALXCP7mW77smvshvaQ",
  "key7": "5BEqW13xSrZzmYCW3DJuzwJwJZkc1w2rCC2vz8vZcbdMnt1PwPsL6bFqLgNihsohcD1E2hMUybWNjoMSukcLGv74",
  "key8": "5363db6TvrvD8XuzdEBweoJ3mqqhXediBQAZkxiQQyGHta7rJ5ekJRhLVqqLmjz81FbhvsiD2T4KvRrayrDKsV1h",
  "key9": "5URGYvSXEK9ySZepqS2FafEJUFK8hRhNhjTRRjEGYfvpGtTu1brvPqFmdctB3sgQXDHSV4ndtcXjonr4Pc1Mg3rN",
  "key10": "4qrtuFQhnor9t5sWQ7f7mMQ1453XUFNfBHZLPZoJ72sCnc8d3C1swUS8ibAaxzGVnTkVbcaiGG4fCFcmUPuXmV9U",
  "key11": "3t7TDrXXRRk4JHACFavMhvcAhsPgFwjkC2tKwMmhS6SNHwVdEndTRJZY6dhmZ3vuU7vsFMFNyBprsZt4q6tEZGtz",
  "key12": "5sgejnYn12v4UgyhKHuFUCiBdjcuw1nYgGAR6xDXhTUnWJ51TkePcg8yECmwbXfKPwGzzqMxh5U2jRVfvWhtmRo2",
  "key13": "5vJjkwJGA1XPUEZbQ1ybQJ9FLh4w9nxQzNBAp4AyFPUaJvE5TuaGjyQDNKHtmc45zZH68mRKufLqvBWqMvFMgvq7",
  "key14": "66zgPDG7gZwD7DC796vTB9hU1WxcCiFWQmpqc3nSqcfP3XSGmUAsDh62ujFMGn571X5XoQgrQzJ1DFdkTAF13f4f",
  "key15": "5wkesHVtTiJLacg9rGMbmu6RYiBXw8ppB4gdqq1ftdzEhKYM8KPMtc97Ww5bjisy9Cv5iSSY4SLRj13DjK8cC9xN",
  "key16": "j3FqhX2e3mTaJLpAQMz6h1LSAJXHqHQwopeLs9yghtBhWJkfhmBKV1wT7eX6k31oB9cZfS9mTaG21RAPeYQvB2L",
  "key17": "4Ru2ZAseZNshtjE4nTXSq55oqbiqTsFULudjbkZPpmuqxFcACMuwau8aQrFCyPiKZpDUanYvH5po2VZo1KWVd2ws",
  "key18": "2jbrEDErGcbAhMkdaJgMw46WkEjLYVmQTVaRd198czoLsAJxqqmYJSGzqvhvT8z8k4NUNGtiq9DmQDWprAJAfopR",
  "key19": "4v2BPGiZ8kpDuVvr9rwUm8Xs7TuEbqoAnsaaXuMYCNSSwWhqQ1UYfHfWKnm5p7zMWESyatt5Pt9wxtUSNKDiVxXz",
  "key20": "HBQm9jGjRqPHbA64dstQVwKb9sYfuSyS7fiGh12wuXTt9eiLcLdzbJ52ysiTW43peycjj3Sq79exGvhgS3VKyvP",
  "key21": "38gV7bmCJ7b3ASrkZJvwFpjDsm1hueg7VVag7QEpC6j8nMhTxyR6hKsfiQ4UkX1wxeYcYuDXzyL6b4mTD5vUrDN8",
  "key22": "5Lj3xBM83zRbNh2nfo21Nga1VqsaWLZ6pSspEn7raBpsambVAwc77Qed22dL2NSvFDKYQ5BbRfH9hdSFc8frKbkP",
  "key23": "47V366sipmwCsouj5yhLwHmoUE5d3PpGPDB6KP8QL4YrQ8nebA5wd51uuDwAdBCBWtrjjyc5P38uR5uyRQPw5D8z",
  "key24": "3oQdacsCf45B8HKTD2woyaVSMtFgE6Pot6ER626ktVHePSZaYv9Q73adJXMFHFVM5B3gMo6AF3Wxk2qhNHbm81XL",
  "key25": "5N6aHaJTXPSfLL4eyPGeYNRbxpSnBDcvCa1bCGdYpBraQCYTXaxrytiC5H3Ehvoh13sQKtpuW72s3fYtkb4KZp9A",
  "key26": "55XyTPe2pv5eEA6gf3acXbMzVdYC2SsUas9aoCuWjJP5jiqfwcHwG6Ev1cZyxPHeuruLMWE2k6aGz28RV5RqLXLY",
  "key27": "2PYeuYm3PE57Em5nGFwHyzZM7SkvkfGDa69gpx7iTt12UVwUNZcwLfRT9Vx5VLbD3uw44RrE5aNcWxhEfb3jUmnr",
  "key28": "2MEHs66mvkQw9A8Nhso7YhwaLUEnyBPwVDA8q5YrZQMhb3pHZuX7HPabFV6xxbejypmf29b9w8zd1Pzg6nsgGiSv",
  "key29": "4c8Z9MShUaMcM72fZm6oMdSUfaA3riC8fBMN4CujrQLPwKz7Nk7ces5AHuVhQ1koFGkkLAcfDYwKfLryTonX87WX",
  "key30": "4DrdvSBi5m3eSGayMops2ZaFXiCUqvo9t2aurtt5h5rzHbf87aomqMvLwYCzX9ZSVnVFoBdCejwn51bk1asSdNSC"
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
