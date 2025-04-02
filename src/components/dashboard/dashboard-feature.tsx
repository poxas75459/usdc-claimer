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
    "kqCyK5j7mcJr9RRHUsqpdnMzER9gYCH5XNAQ5ozZgBxUnzRTbtN84VhgiQ4ZJo6wN18ZUworXvReRGKcRGQcs8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ryCNMGAcGKz81y6jCScxDZmWnj5atBeXqwoxdLA4Cr3yiJLDZw8JCbbxcviM15oMAT1s8Z8gQVXZPy6zq6rtfd",
  "key1": "4vmfZD1nepTnaNs5Cx56xgZREewTgFujTyGGEKPwT13m9jUoLC9EXaxHMYRFpd4dD5SjWJwzxrAncbbnYN4w9Szc",
  "key2": "2WVUKuG25187w7wKwxKqjenLVVe9TBUnoENV37GzGSp17wBWrDHi4oNUtMPfiJUKnFZwH54vMvWgrjnchQN5Cm5N",
  "key3": "5h1UrycR9xv4kApZMt8u55qad2QDN9KdYGbD8pbmueRv6U64LaJRHB5bvpsnizuAxPSLDZUwo1k1SCF17EBsd2tf",
  "key4": "48CQasMkrBReCKWDaEanzvuzVQWSfM5xcvUoNd6Yee9JPXCCVyXJzHAjRvqkpmNimmXjGMMzyP8wCPCZKm9qBURr",
  "key5": "27vX6t7qYrEwgJpCDX41AGcAeqHkaVbghQbQRSizLL8Hs6d6qKE3jmg69VQhmqtT3QvpPWzashC81WBbaibcnVyd",
  "key6": "3dHQgbsK1yggQGQAwv3Ryg1AkyWCQUuQpRQ3XAqmFh7sU7NeMsSCzKohNZX1i4uk9jjkNPp4NMzYNtiUjQpQVAez",
  "key7": "628snt4Qi1LfdjPks6kJtLabidH1zs7vKgJQUB5g21oAFVvhkavuq1AkwddaQdL5qu5vtyfLdJ2tBUzXUPd752NG",
  "key8": "zwrqU9nzxdJcycmhEU1c7xLt4KFbUPqJupTD2ArYp8qdLnuC3wmkxcKtZgnEnjrUR7uN8K6kaBQSHFLAZjH7Yaw",
  "key9": "2EqXhsrX543XveoWu3sMHPhm75FYduvCPb6DwMzcNx1kX65R9qaUnqeUuu7mVUX7uL21V9QZayxFCa3RbcdVGAZm",
  "key10": "BeYJEfoaCTJ2euRHPKCsgw7B2334cxbgdffhaEJcWguZvrZZRRJF7RAzC8aavHAjjXQGXt8DqwqQm9KLbAcHyZE",
  "key11": "ZypcVNoNCXZLm4RDzDmQ1geaoQUymzgg3L1rrisDxuXahkJ4bdWqtnNMmkKTup73qYopVVkHH1nrzXryxHCWZD1",
  "key12": "4y5sZHjubfsZ6YgKQ9jTrEjndqaz6AtT6ULeYYEnMWNYHbJKQm1RxG1Hp6HQ7hSDN8kSvyLmcG59XQzY5Fuzm4sm",
  "key13": "AHUHULTiie5YQAAFPicc6gjMq8hmLZghfnVVoxUW49KTk6vqFQXGsqJzvwBfGdqLPN8EoF9zcoStUyy54nFzPzy",
  "key14": "5kdg3K6FHSJmMHdYgzyqYLhQEMwUhPwGaBKrX9gtTsWEKoM9K1Nom4nKihfgcZWakwZsu3XW5R8z7AFXSzpF7Kdy",
  "key15": "4wVjzK9icxuJLpwpeotvATjHVpWkpWCuiREEszAjDBuqXkMGFfJLR2VGHrF5bQsTaHSSpSwrdAXEWj817uKEPq9G",
  "key16": "3cSVhbyE7w3SUQaD4nEgQ6Tz4f4yjKuLrghTJWsECs4ZQ731mfz1cfhM2xSdxtCnmCnq9YohrW1VKDrhaY3USs4M",
  "key17": "4d8B8brvb3SvaqCGwxvy7Z9VhtD42BdSZ4cZjvwVz6y8D4pzoH9czbEDFKauKt9FPw95Zm37xbQQWoFnCcBvcv1q",
  "key18": "2rvRML98jgGDJk7LJJVDw4KXnVh7Xczxmzu4ZXuiLcF1TyXVBcpkQcCXjZX31tDYgUX8sP3KMgA8ySriNJrgcRWc",
  "key19": "2vbccMYyfbzxeyahQzCynxCwE7qUPDrpbdoY3XaExBjDmc1ZPtvyDMEGRQSMEvSFTDq354BBCFT6dzA7EVs6inkF",
  "key20": "2g8w8mAofo1FiGqaQJQZkjpKAYyXsMg28JXkvBSVWnxZbVYKF6LK3iMnic1GZXiXLBHEQyZDKF9f1BtW8xBbL6eR",
  "key21": "2CDGSUZKUx6uDNrJw2zrfHBw12i75zxivxdF7UN4xgmBP3fMW9GGHdGmxeRKhiUQWabfieFC5pYtB7WH1vNHTM3n",
  "key22": "22xvC5o1WNYtH8i58XB5QzaC8MeVg81L21DHCFfbVfADPj2MFxnT98iv6DihKfWirRGyTRHqoUcSxpNvT9w6x3Yw",
  "key23": "5NQhDzxo8q69BMNHLkTzYhWEzJWTVv4pFUGLqRpeqQQvDh2yyAZhWzzcqnTkgoUYcS4Wmgdqsny5x7iWYzqHGrde",
  "key24": "5rmfJD8SH1hysGT9yJtEehj1tiqfWZddcBSS4mVpWcJyoeCiJHFa2bqjaUfrDGHmkQNA38yUC3oGphgJd2EU6uAy",
  "key25": "b9Y4aR5tw9eyqb1N3VQQKP4UDto1dmgQSJj7pjM2LEMZ3fzrWz65gHDQzxGziw1ZgKmQtBjdyochScNRHCGeELG",
  "key26": "2JcDsmko4xUh2scr5GRycjq9u3dBxgx1UmLkuUQpkxJx2CrBLsyfW59nfSf5NxBKu3hsLcSfSyMVhTtZ3juYjaLF",
  "key27": "3gYi8SDqbhooqgtURqUbtN3jcodHnGQBy37xfXKwRZNht8m1sBf1ojx6zfC6VsN9WDiJKYrynpBtNzKauKBwboib",
  "key28": "3eEZ615AqHsMZ5Xbsho2sEP3wF7eC2kYc85HUWp95SsjAWQrJFyvXCjb1LuGZZqQcuo8QnRpUsKNx35tkGSbvPn5",
  "key29": "3D6FXFYAxkYm2jBijjhgvRe9v6mMW8XVeebGnDUycwxrQXSp7gqUcG4vV192mccz63EaFn1uau16J4zaDKA7ZbgN",
  "key30": "k1Uhbx9cEBaPNGtRpz54Qf9aAzZBoWtc4fJ2YNp4JhgbJGtvo8tHsekky5FQvMBFaMSFwca1yAXfD6wksr6xWfa",
  "key31": "forXvsFQp7y1CnXoJ7MiwraN8M6qSP2X6p4satjRydVW3Nj2B7k8t596DVeJKcjemb2npYN1oAG8B7NUgvh1dVX",
  "key32": "3wagDUMrNvriNapBcwEMUjRzrHDkGPbTJK8QyPNH9kwVUp7zXJhde9Ve9kSHje9XyXr6QdmSThVKuyD5ncKUYwea",
  "key33": "2fjNdfU4Ln8MrEMzLbM7X8GZ1fVPVS9fRmZsaLARNEEn6m3Pqu1wCn7PWRYLe5rLescrTTsvqgSEYS8BuVwaTTou",
  "key34": "4w3zdRvTcn77ZxMTtwUJL6WW1yiUcz3vfgiaABZxaBq21N64X7iyfmCGHidmTxPUpRdr2gYRqemXxLtmpcTxbwCK",
  "key35": "2mhKSzvoAyTi8VYxKNFTyRtUT4DZupve5QNN99NRKvWG6a81AhQDSq3AXZbEzFxTPNnNzaihQBZTC5vwkaYXHEe3",
  "key36": "2zL2R4Gv82jf94Rt9X1Lm2e8fJDRF5TXreubqzq5RiZshEXsm7CYJ3vWATmq3ukWZaW6CVbovc615EBxHoU2yUV8",
  "key37": "4UJUZRa1495Tftk7NBVSwuKD5eMSs7ZSPgTfPUrYJm3EjW7htjA2Ktey3PUxoB4Q1cRdRvzkecY6UW7ZZwAZXehd",
  "key38": "55bChbXwq4sZ9XzzvdBRdw1NeTmW4aeCLLNzcfRRc8G9R8GJrXuWUw5cQe5oc4o1VJPfdRDGMMoxdrh4npbwSbYN",
  "key39": "4APiFFBWRs7RiibNxrWDu9GXbYVKJk82VamRvaB2Vpuij4LNr2NiQU1fGA6M5CjAqfQ2YwfhBhcjtbGCB2S7NAMC",
  "key40": "6214vof6XLoCp1BKm7rB9xpftQTDTenXv9nyGbRpBVBAsLptQRaw8ETmRbLrdWhtFwBBnMgReLQe6B2toQwfTQjV",
  "key41": "4FCQbe42ZvtW4MNzrLWr3iB6fBJmZYp4Ss1E2DqBGi4VdZcoAvgQsQwE57i3L7zyrQXdmKrmxw3k4PNghG9sKMXv",
  "key42": "48dMfkY3JwASFarJEJbWk8FigStJkZX1JtM7R7vB4gRHJCanJUPrWVZnEcohcaFYqradegzW4QadGNWkWV5Vndvu",
  "key43": "2QqQBMBur6wkxDSY5vjWT2mZ52KZZ1wT4HjwdrYMd1k9tjtGJSN9gfnqssYZVWwAufhijA3CA8DA6ZDCETwk15uC",
  "key44": "4ro8SPBa43iEQvmD3bxvunYXJAKjwasgGP53f6uM5i6LfhvB9FK73BeZPnqmhB2xs3Ji6PZEi14mU7uS7XPfofAE",
  "key45": "3xw9JdG53eHe6CSUXYV66i26V3j6g64MpJABe15usfoAdJjrgw7wHcPKY6ZjE21q3kYfT4yk54v6isfY16FHRakM",
  "key46": "4Ga3bwtACJCdr267FJDzHnjTHN14FymHbx7aqsYYDcR975Yi1BbeVLG2pdffVPN9KZTn3MZxHG7rVeWJB6Goaryp",
  "key47": "iV8QP9mHMhBHbyk4VJLFuQEqxuGonTrNhZ6gjKCb7ZRfdSidXKS9s5dHvDRE75aKC1mY8Af9TqWywXh4Ptm8rSz"
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
