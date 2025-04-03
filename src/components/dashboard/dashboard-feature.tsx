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
    "FyBYcv8F15ZUbjLomPUyg7z41mus6Rt1HWdsqYGPz7HuSSoArZiJZaUHEbZZbcKchSBNqhngQi1ihgy2P8pHCJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gECd2vhhb73TYt3bkncLwqtMevdP6XEH6reudydVx4Z1guv2rJ2YFhWi1JrgKEXNQy6hWQLwANr2Y2Copb4Nb2",
  "key1": "25Pp5kQ6Q1vHEGxPDJdT2yudmvTfrgtK6iRmP4AAzHstf5vv6sq6ijpK3v2uvMVA7nQFhgEdBhnbNSdRpNKWYo16",
  "key2": "AimSLM8P7MAeRrw9kpGBFPS69NgH7DZubSNn2uhaPQdBer6SekNxjKsBo2nz5SrSD7CCQHKV9kwa9axSjoZBSHR",
  "key3": "3fVdPQnGm2fZNAEL7amXeYkE6fPR3xie6MJ8Pu8f3WkiApc7x8BXgaFLH6jg53FzxstE2CmDM74L6MaUBM2imLvU",
  "key4": "3ogLpS3ULtLPpEofUgi4KfuhNKqYs8tzPof3D7pD9oJVtVxpv8JRxusaKuLiQ48z8tbVCeXcMVmAK78yz1UGAMrW",
  "key5": "5fJp1Pinyxno6VC96JZaXWVf8Vb73qfGqKuGBT3oMwE4ZmG7dHtGJiY976XuXmSCeavfTPktwuuc9ZK32tFnDANi",
  "key6": "2fiqzs2dLjAUGFoEQYPS3d3C9Wjztx9kCbLHeotDaZBKukE6u86Pq7poiGZQNzRWoFPDduwEQwnFEKznvecPxajL",
  "key7": "5YVhkFUQJ26Vf7hbLrvuJutNyePynAEBrszANFcbFPrXafP4DYpZRx2UirkvWBSp2h5HkcinYEGiocbvmh6t3ohQ",
  "key8": "mc3mHokRxyypv1HgZiGi9ofzxWKThRgB7ZaDHWjVfzndzdd2s4QZhWkNuQC8HM9CLv8eYeTzSa3cB2HR8ZGY3Wu",
  "key9": "5ty8G45UN9HTDMHLa8Cx5Lkq9tLoKuwEjA14KtRykH7KkYqZSvoMr3g4L1L91t2MBgYx8DpYUjFE8Qo4AJFRsUqa",
  "key10": "3cQptYT5ejLWwfiXptC9xKU4jECjMrvE37TKumrtwPwXuGyeqAPuNGb2pVtNxEPX2QkqRgJiPXBo76skae1P7WJV",
  "key11": "34knzGqrLEZoXcANUMtqtFAXKsDrYhGTKV9MjjGXEgR5hnSedYHCXxf7ucXEbtPFDADnachjRS7TeXVTjV5qGkTu",
  "key12": "4H6xnry49rPb3zNyRz6TxbZWAmjtP1nnwHMQger6e6Axou9Y5rU1S39jyieXzGemXa2nWqefdUpesobLtwHMv41r",
  "key13": "nmdSdZk8uHMsWWxfsQuFoD85YZgENcLCgXQfqqL99CYXH2uiDJfpT7Nk5zxtz1Bd1sxFanozu3iMYTAGk7Wda4t",
  "key14": "c8qDK1ui31tMTjyQ182vRobVuHZEBMFpaBwiUXb41UqgYhaKUDNppfy29XBCYPugJw4ycyDJXM7UEzrwHAhrTaa",
  "key15": "2Vnsps6r4gnpGZwiqyWnAHBCoRQ9KtJPXG2L5YA3HmKe9qoGBergsfy3eArEkvxsR8EFcZnT3fdEGA34iihDqtCt",
  "key16": "NWYU38ChtAwfHv82Nh6tzpyae6KCp4EZWwS3bbeJA2uR76JKaJaniNoyKjWjU1RV5mkqDxfiCKWTatSbgKSjRKy",
  "key17": "5aRW6EeaMirpKgjJgMQcUMJWz3uUA7zN8PHkvC254hggrRuyFTM8JgEgLbTQGn4MGU4Y21Q97vPtXeKB5QEnZw1U",
  "key18": "4D8zkpHQhUgwvmggpaKtGBEEzpHQ52niPQUjiQJrWyM79hFQ8cgrBPdA7bEVmLcV8bHWcHFcL9B7qm6rr3EaCxVT",
  "key19": "3iscfZ2f88rcEYbU14wueyRQTHpM6u3ruGTospCvqQ5gBRaW5VzYaJuQtFAxZ6ev6Fzjye7VAGDqx23QQsuXvXXY",
  "key20": "3VC7MAZQZZuWMjrBqrYbj32YHRgZaZHdwp2QVD1N46xoxn8tXqQ4AzpbbXAWr5DtdpivEwhXbADCvRSEi6N12AoU",
  "key21": "dnPkGjJgM9my8Tky8FmDyTgTWyFhxN2xo1id5T7H9j5FT8U2Rb8fx1r5fj7CkFZXu6xFdaVezJr4w3sdtho2Y78",
  "key22": "4Q3SfcWBckHawgBJL8TzGNeYsENTCq9axzwELaiUKyNPoFLw4CHEf4q534mZGAqeLjKGf7fz5UNUgfj7xEjfh1UX",
  "key23": "HDdx5Sq28GbfLH8msvtSEHLkCCT7dTfQhrJTxuqk3adAMZ64ouDVCadwN7YxdH7LvWFQ4rRGbAAXeDztp84Z1dy",
  "key24": "3LtW1JUiyhvEuVPjdGdRky6rydnwvUSiowDH9SNEh1yhuFDkHb9NBUq3pJEYKEgthvkpHEBrzXwMmSQCa55EionP",
  "key25": "4c3zeSSghxpURAMKvo7TqG6eJiVqTZzSxCicgCFTBRAcmsrChFxQEnZRj5xym6czDyVYBGNJhUZ8hPd2VEAmZjEh",
  "key26": "FL69EFPbKCuTt4buvn8sHJ3mKKqgfH5dYiagen3gv4wWT8forTmiLNMsu44Hus1nifxKhcpK1dc66M1s4h7YQeG",
  "key27": "4HAvJ2Le4KgaXw2BT99xbGbZF8wK2Efu98VTfAjvPLaQydRLcm8XQwPFDonKyjLbxpDdyhkFrzKc1XRh9b3N5GNK",
  "key28": "3HMstUazLj94er2XWe4PDtzZruVz4z9XDjf62W7BJmJXVLHDWrN8R6AGqVSuY5qEazbUNhsguxEgN1gGhKEuvJcw",
  "key29": "2PpMTzWHy6swpBQAZvkfaVU47RbNSh5MRzoGNk6PxiSigdhxjNRZ51f7qssxmXSb7hT97nKuxxy4apXESF9iJh75",
  "key30": "4uLysaTX2w3h5LbrWyiAoXgcmiGZBjKKRAJjnauFGDc7DA2ohM9257M9D6zvVxnNNeZsSZ2bEgAmzcuFKZkEkSNT",
  "key31": "3yrHKM9C4jJQA1VzK45GPYRC94PtuvzXDPP6BGtsg74m4PbsbQw4M9xPDXgzDWz26za7oM4DKSEEszziiCEzMLUK",
  "key32": "3KQrb9hA4zmx3UqLQH3hvwipB24zcxir5NX8h4em2VxrjXHp5LP8NWba7Hnjm7KLpj1XQbjzhsU64PutPxbnhjUA",
  "key33": "5tY5st1EYfkPBdy8ZJRcpP7cnRGxg5jgf5xVVsgqZGyGnQdJivcgAQAKvisFcuirN9kbGzgaWTLnmwABLyD9sbrt",
  "key34": "48NPaSu4cuVDgRDFzmCodU2cG4xbohac9SJNp1QYWLy5CUQD26168ibP75oYDigdoZua9W3GYeCgnUfRsjLd8fkh",
  "key35": "2CQvRYKwY5oVkWkyNG9HW1CquYRVwYuwjCg2K85c7y2BtsgcRNyTtwVn2RoP45G4rWh7btSgp7wwY3HRSVzcLfrp",
  "key36": "qTChyQ3E8eJHzkkCPs3XRxaB8FYraKduSc5vXDteUXMwDGveEgemjKzxCMy32rdx7yB4AZWuxnbVwByUsVWNBu3"
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
