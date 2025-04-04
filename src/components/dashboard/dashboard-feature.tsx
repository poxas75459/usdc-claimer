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
    "5rEWxKEPazSggfZh6xgycCBZxQSwXyXtR8uH6BEpyGEHdBvjB1E3wDnBR5rDbftmNesmbghZsm9Q87TTWLG7EFbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tsj8BeQHMijiFhVpVU6tVDdh26yRDKJPmthXDvxRrhPdc2YPqAyMEy2Znp6uxCHQku6jvf5kqsLHXQYBdQBVcRS",
  "key1": "2pMUKuXsZC8FBt9qfD7yRKdWjYg9D9h1KDEebp9FyKiuntEdS8a3VcGy25BsQU6FtKj4oeF3ofKAjpyXmVP8Y2gs",
  "key2": "5ioHyq6BA21dBi4D6TcMHBD5AaV6cEWo8VfMteaiiKQ6ag3CxSHd2o4GVKUBXXt1VMyxsEQhEPGP1jSq2Riw9yHL",
  "key3": "9Wy3QUpmHez1FDUyusnKpSJN6uENTf74GixBs4LQxuFRFvwqJu4BcmQryRchC59ZgjvZdZ1LLazoiurusE4ht4A",
  "key4": "2v5Khnrvg6bQAyHeLaVDyJuYaigR7h3tLXJXuQbneTVedb9vQQg94T8bVWvXpxPSG7RP82kqNtmx7k1tCZnqr8tU",
  "key5": "TkuuL67mvUpUTntDuiE6WM71bUfTgpkcSLu5AZJgFbEVnq4dSyxDwzghCrb4PxBGbC1XcjiushuDTWks6gwkj2X",
  "key6": "DW2KLMeWBiJ5NRfx83TFx5mPuBVZ3SnDPsYtEFtnv82rKN7PdWpp7CmMBsNFiF1qXb4pa9doipcRJrHYmTppyEb",
  "key7": "29Wu9s5ygAXiLKgrBcKJehGNDxrae9j2kFU4Cqo4Ly1aFdoq9VgX9GzjD361AW5fzV9pXj4RkyQHPQ1Bo9c9G1W7",
  "key8": "2nR3eCTz9Kwq2Ugu7vbqhcrZe2UvEgDEHM7QBheAzb5aQXxTTB4z7kBCKG3Wpg1dGrCSqekmnmykbXhi8zYuuowZ",
  "key9": "3kucnNbP5pnBerRjAjr56RNPY8axZyjpbAdxad28FTVyq4D6dCxWNxPEq22XAKzuTMGvF8ginfYM4MKm7vtWHeam",
  "key10": "4VohxFeywEswwVsLnu5ZKpzWyeEkjq8NPNAMfrMnRnYgn8k6i4okzdfzi2RgRBQt9Xujw2nJDkaFJPaN8Y8rDHDk",
  "key11": "SyCH6Vnr3DewCEjKJZKYGx5f7ZFk9A3weik5ZyttccbgkCutRjooJqHQqmdiqfke4epKckYDfr7hgM5qrtYRpHG",
  "key12": "2qr6MHJsEtJhTyGCEqqWpDZroSHyrLKEZJqfDyTuPzrZDmKagucMoWJWAzqJZpMLZZwzbuCgPf5cM5jjLNGiYiwP",
  "key13": "32Az85zTGYyRSr1paegDtC3DPycrsuhAFUMVQx3Cz8DFyaEJ1f4QXKe8KVdekjYojW3HPk8UGVZfRQPuuNMDrAfS",
  "key14": "3ad9t2wAD8upJMV9uYMfr5tMAAcZJ8mUB4kwFCQ6xmfH8Qozmhzme5rc4rY2ZagQFULYHJgHRvTvwMkH6uPJT5n6",
  "key15": "5WC1xXejbpWixYbQiCnSyyht3pVPJb6EWJy4AcuS1oQeCajLBTacawAsPmrukX5VHqkSazWiiz5yazCunJdd9SGH",
  "key16": "43snzetHWD6mVMaXem1zZfWvDZucFL79HzH8JQygnjUuQ7mzwJN4RNb5aiJT37XC4aSeHRHSgJ1QGu6GYysosw6L",
  "key17": "3n5ETb51cZULVDAiksEoj7rNd2FqaTBBH3jfzd6ssnFSQtreyt2Tq9u6sPhrTSKeTnXZuyRt8frCgA6QewvLtbAK",
  "key18": "5kAjXq9apk3KbLdamPsaDiZW7x6ikTMYQfyUC9ACdENhqVj3hiPa7bjHT74G8p21Lzs3RSZcdkgk4JTDz3NNSw6",
  "key19": "3i4qy5W7pQZ83AD5EhEzosPUeYH9GvHcb2ZaKFFvbcEEBU6cdqhPjSVLrE18VXEBM9NywYVuzcA6WfHBUq2cESZt",
  "key20": "3HMMU85GgXb2X6qZou1MpfzDB1HEsy8GpiCnMjr9N9s7PvxMFWBanTmJndVCYmpK5w7owK7M4zjtr46GGuqSqhfD",
  "key21": "9mshmSwELSWTTJ7ZWzHeZ4nFW8ZCLWBhsi8mf7Q1Qn4nSy92aQwu6r8Wo2NQisXXQGksYYmDz5YbGSx738fYZmU",
  "key22": "5ugdPmb54fN91V4CfUnd4bzfUVox77Jv5iQBKUR9q7JGtEn9veyCotgV4aDVhz8KKkGCsegiWYykAdyYbrx6EWdm",
  "key23": "4QaM8XFaCr11zaokPrx4qwZTWThmyp8UfeoBJZh6c9LrAC1TcyuHfDUb2u9eLyssmH38rbH8Jo5FPsyLkQKTrJRD",
  "key24": "qtMmjijKfnpnuFSaDTj2m7etbPhxhZk6dUNSN7QEFaUNkEWAdqexMYeyRptQYTF3QkzMg2JormyjTUcf9DpEq1W",
  "key25": "4re5mJoCigTRG7Vuk427BJwEotAV5ut5UnT2aktfhKEsaY9JhovpmLdh8Eh4cuoaXBM1ZsUW4gPPUVtzfszqygfh",
  "key26": "4deGzjyRQRKwWtskLmSwuU81uYst32VQvYMdZ1HeG7kp9aUntAQhhunyq1RMXbKMkAq2hwzidxDX1deYaYmeDZeh",
  "key27": "5VFY4X7XRxpiapA5g2Ktp3Egckx6pbFeiCY1G5ktKv9frgnUWT1tU2h6gTXTVvgJXr3j3cwySHSgSyLhbR4Hur5v",
  "key28": "2eczfvEVocJNP1iKBL6XzfKnNxX8TKyhf7ybyzYSJZKeczqW4ocZG6Gkq5cXPQ9MBPwmCzhkWndJUPkmb9kBY9vW",
  "key29": "3tgM1Utee3rigrfbkZcVn9KKdPQrr7hVQ31DcsVo8QBofgyt7wCzwXGLxisE432Rv22Rb6qhGKarRN9jP5Gzt7aB",
  "key30": "5UJrBo91ews6Ef2ktHFRw6gzw2pcfe9TKDxgSetQGkcsPnEepSEZjq6MhK8mRrGzMjVUU3t34S1mVzdf6ZAKnLmN"
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
