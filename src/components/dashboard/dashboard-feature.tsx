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
    "5RpmepAc9J5Y589K8FeoJyuLztX5hPjSb7A3MTRHWo1rBenzwgnW7Q1wyhqz71juzGASMq6zeaghfcThiCbogamT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6m7ZisJh34HqQaJ9fSgT7BoisEN5Q6ynzQ3PrQGg5b9ao4JiRCbYQSm7n1M2fPuJi2yc9VBWtxK4T8F5N9y4C8",
  "key1": "5ZpxNe2wzCwR4iGeXNsb2mcDzcx1Bxu1R4eFgXBGAezeun1cS5SGSEbMjceZ4u68a9RvytvrwUYxxDVJ8PdhMTc1",
  "key2": "aykcC8Jthb8fWD4unRcjgNivEntU6dTTooowBGNjGF9nC8fQyKYNFR37ioXtZ84kewcjHxnZbkPmHsjpT7wWwjz",
  "key3": "AhCzXmDYay4YjQDsDgG6nZUqovZXDVmUhZSHHffqmoeobC9LMQQPJwMpzNHr651KB9gSxXq7G9RAeRasNJhSwbh",
  "key4": "5BWFnAgZY1G3m7RgmjhPHYKNwCxDvx8DqUtampYKq2yS8VKExHrYMejmJD9fwvCc8ET7pzvPWEPcSXZTbvbSgCsV",
  "key5": "3hQ8xPjfLaiscgz4G1uzMY48xBMcei7b2S19JQFce9scun2SWLzAKmA1FmwXFEiDjAKcJuNy91ug6NV6Hcn7Qtkf",
  "key6": "4TJwRiSLjmws7Py6CtvA9NdwrgbYCLGwiPkNQApDsKeeHQgndMycchqBiigMhMuVmEysR2YBVuDzX6surX4k3J95",
  "key7": "d26Wbar85eytvDiGDCnUTezf2tkQLD4G6kpT6yyE6CS3gnBZcbaiQ7RtiSapNK8uHoGWq9KcfxLJxiMDw5gUJxX",
  "key8": "55MLi1mLhUv6YRikjhSar1xDCweqdSJGN7yHtvpA5Z7un5EJkNjynvt1uZrzqcU9h2HzYH2bec2oM8r4zyq8CNp2",
  "key9": "2DAG48R9FqD9VXpvxc5boDw38pJ7TvooG4Voy8PeGQoSNgNrqA2u2pA3ofKqYKWNtFuBHZY1RrVfh6UcnBsyNtZk",
  "key10": "67izkgoHt6Jbp3XjKn3cQnHmgBbMPCmi4vQnSKgcd6jbSP8XLbdU86Cjs846TpecjyciAXejkAw3trxWkqTasZSx",
  "key11": "4FPAQkLQh3jAsXWB9GG89Ww19RyUtGr1iHdbq921asXYjrAeiVu4kcfBJN4wjQ8ge4KTw2pBbFmN1R5arEEwC8VQ",
  "key12": "5FjRK2iZmtbfPuyzYZRRWJrb8eLc3oq2kUv6yfTgtBFb7qAViMWMVLsbtUMfrFBSBiB7FKMB51dnnYFb6KE14Vsu",
  "key13": "4AdsukBfVH2CjHN4Ny2XPzKurvPfdBdja5M5hQArKmLPdFFVQmbrXirxtYdudtzKw1SiSZo8XWNkvbEABwv85UTr",
  "key14": "2JEik56VyMomqvXhfyQ5ZRnZo7ZjfYZXcewzXGjrWDU8jLdZSgRpiX5BbupuhB9g8PAADBfsQvLmgdmbVTkTPDE6",
  "key15": "37KnUB91JDsQ7hso58tXAkdsaD3QwiqaxMRHLhT8Sv2fgdxRS6u4gVtYkEk1U6RbMUQUAv7Z9Z8HPKFP1QuFofKK",
  "key16": "qhfoAaQi9zVUpDitumLeWd4nBXRsqj7aXAH1iocf7JdzR9y1PuNfTxHmbqT5TRkTQT3Evm1sf254AQQ4rRmaqX3",
  "key17": "4brBdAv2jJEVyvTbmt2fFaCsh9LkkEeKs2wmURCNMtkZky5oFq3uRuE2rVaNAJ6EMfqvkVY45ovmkEEVp1zTQ3CJ",
  "key18": "5SJgLTbP2gKaSHVyjNxWkxMMU774wwWqpgZZimQFv4HjF2gkdmgVH6dF41Ec7qS7aorP2uP1ukMJyyUXdWnFq6oq",
  "key19": "UE95UMKZWenUoVPTJVZNuR5bVNMY1KsVawayJFfc8BHYkXYS5nsjewvDnPYK3ifqK4XUm7RZhvx2W1pZSA8wrnS",
  "key20": "42MJtdYBAF3aaVUUaQX5uFtczsbyM6YvMjfoxTQ69DLamyqLHuSqx7JvGHkQvmU3gbWF7GHRXxmaiHmFMD4GcDhh",
  "key21": "57MYR6cL6kyThWp8Us589V45gifLYD8st5a9KxqhAyQhbytyMNj8kDZD6t1GxuiigeowQJm6wR1BQZHkgz5Psg2N",
  "key22": "6NizZmXc2RoCPrgnapsxG2ubicCZcBKrEz5f37rqJzuvHN1FEzhjSCiq1WHN5B8D2oAQ9t476xraGUj5ty2ghSU",
  "key23": "5uiycnwGqbSziZGQoDL1pCXT1vHrF82ZoGkLWdymWzWX9azN92RWtqEw9jH5BRq34DWMee9DYUXLsWzgHyz7St1j",
  "key24": "2mVoqfhKcLveAfs1nvSavTLrWC7frhZvBrfEi7tf1RuTxUdMQQLipLxkaPmXmRXimq1TYoXMCjNrQva2sBmU943e",
  "key25": "52RKMow4fKNRZukScBGh1XCSUyGQCdZEkMs4Ddr38v9K8j9eNejRf2qJpSVgVEMr4ranfrFt4efxEz8UNjw69TaW",
  "key26": "Q29sgW3hPgiS1t3Hpok8TjbGBz9nbSjgvygbo2pBDNujqdZYcqm442Ys89oGpAbVvXbqDKtz4Xv6Xe6U358ane5",
  "key27": "4jDUuVvfBQszGYC7spXnHtph5to9FvBmjWXuV6JDMvoKS6W3feQKGapGqsEbQFXW467emDwo6X21RekEQoo1CRV5",
  "key28": "5eRceS2dY5CewNY7FwS9eGWJUyWJMNRxEHNjyrNs967fG3d93d16X6ZPU4zu2ZdTBAhRQXTzp8vsJAoFmp2wBmgL",
  "key29": "5uCmue9D337qnrs6RdtejnsV4NiJNT1riT8UQg56Ms4FABZxES4usEs4Dq2h2r61L328XMeo2y8cYEaL9oCTChKU",
  "key30": "4vuNJUQVG3JJeP8immuUSkkko7FsFzcg1YkGUy1ydH7QZwhXFqQKoViLu3GRXzk7MFkV2YLJS479qjBZknY9Ybw3",
  "key31": "CaHQ2edCuW9ACKLWTFELUYPN1GPziHqofF8Hk77bKK3g13ojD6Yp6GYBrMZReB8HvSkhnivckWqEbUGn94u6fDf",
  "key32": "55FfJ6ERAQ6t3gnLWxCfdfgjY9M1Vj1TV7JmXiiPGJiDE2d6Ki663oWdUUoP5qnEzmmA3uLjWJ5VBTnz6YoACBFj",
  "key33": "2yBZijdaAvVUSLp4ihpNKowmW8Pk7RHuVKQNZqLTSKBkXfHKYDcj3sucXD3Yp3ig4PkQpF1y1TUoxDQUYz2nYkH3",
  "key34": "2kTaegSEqGe4c12i6jrd2m1PmacuiQUosXCqVs6A4WvT3KeVvKg2QTBjMLfMjKAgrmF6nxiPn3BD6C7zdPpXqzVU",
  "key35": "52Nn6fFZHZiRGRuEataDmWeBEdh2CHS12A9Wan9QfG6AWsSoeQ2s2CqQCUbkRxPNmjgUm7NstyGhP3P5FJAkHJsw",
  "key36": "4fSLLJyZZzXKHSJNrvpaAKFicbFjYUhV7y8f5QHZVyb72kZbxK5QrSPkebQCgyGrzVscUxCNWNbYqCgjHM91FwNR",
  "key37": "4ZuN4KoKP99rR7BuAkz1cuQTby2WkNNCBa1ero534nbsYqcrz2a3LuM9WZftXkyHCmmNnRDrW61D54ShCyxMehy7",
  "key38": "vm1sKuMcDdcePvtaw8CHyhgvwtGdiRFCxNys6rFksDQ82N4xJwuesT6Frnm2cTKmqZgqvCgydGrwBpz64n67rXE",
  "key39": "25dh4i7N12S1yhpmSbruvTCcyFK6ZNvo9f3i6SQZ2M6iX7TDwVtHNbTsui96nvmvwi9AV9mVAVurjebbyr1hAoUZ",
  "key40": "4gjykFtZG5xtkB8honKPJBxNgdNTMHSDNY81x7c8icxL2nXkCrtDy8X6gnWCZdenABeesA72wtdzaczDQxZjQf3t",
  "key41": "56d2XGnCpHV6Ti9Xcei1S1mZJfUXd6SJ5STLFuLfNG61Je1QsLJQkFhV2vD1JiSuu2dbskSHjxBsFGHqUPCFcZSv",
  "key42": "4LgEGE99Dc4iLcdhTQ1zjJzpnCexEt2xzhb4wVNd3YmcaoHo9eLiBvZFTzpzVFGUQhG3Zhqrm2kMF1KYwSm4cRdN",
  "key43": "2oxEmHz1k7evLxMe5UymaP6bTDVfwwnsmAyGwnUL6GJ3Q45vSZAF3AEZbbgsKD4qELrccWGUM1pPY7VYHbXakx9",
  "key44": "2CpT8CkM67x21QNu8fnvJyLqCgiCS45r587bbER9W4o4seMng7cEgaQ88fZFsoWLwPaEVdwZ2GAd3w2YTVfi94dr",
  "key45": "Zgh8WskcgheUojq6StDkxYPjLcJdXmE6Ue9gP9kakVzieTdn3YLFMxX6aZqgnGj9e8KfuUaDtjPDKQ1aC4EUN3V",
  "key46": "Rk3XR23Zizgrcx6fUA4ewc5NZdjRG3Fx8e3sj1XuYe1yQz818tjJsDWttatZmjEkMi1XWVjNSBFRwmzJwPHBQQB",
  "key47": "bvQzJ5DbmyWqUdHhbQ6z1oQqDnpPspkTdq3Jafz2QLtNC7NMrf7pCXjM8RL8GqtVHfkR2FvMaG7LMTQkzFsj4mC",
  "key48": "5yoC4rfzbVFPnjYHcuPD7FEZkgyYwLaeVr2y347UV9w4ouiSLAAQaatKf4jtkW2uL5ETAsnk9bXNyx2GhPa12Ksn"
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
