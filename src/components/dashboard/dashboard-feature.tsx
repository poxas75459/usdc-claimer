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
    "5wL3kbR4u99gRST1dDPDWSXTLeuHSUwo3Sa3aQ71zj2ShJmwgtN7zaKzWS7T5mso7XUu98rCotZtaB8Mvc3AySD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nN4hggSCmGphtN8rsiQ7rRWukjuEy36UsoMBHfS93t2FntYVkgKTBgrQsoE44ENejHim1HeVntgPDrgXu8jJvVS",
  "key1": "5GjrSzhgjexH3gSRUXAHySwFhMSrrVyQC8NdnqHmpKsDAnsUzzityYeRxovne4s1E1XqXopm676iTYKqgh1kD37K",
  "key2": "2DZPrwrLWGUHH7jTseFoXfyj3poaHG5jWid5kL5Ka4H2VmEWz1EBc3epG1ZpANP44Key1Nz3iueEYVEXbv3LKpVT",
  "key3": "63D9ctrgrrjPECypYrobXvKXVkqeH7GBgfkBaUXWye4fSiKe5UiVZMgjef9YzgYi3oBPGT3uKAmnuRpQzh3WCQrV",
  "key4": "3NVrN9mTHQjb3hj1EYv6jpkE4ya4eDeiPBLTBAPwosHacGmCkrphrcuKyRigzuHFG1miyhtLAbwaNKCfYs63s3L6",
  "key5": "29Pprorr44VpygxYe5WEjvmDZDjKQPEu5yRHT9EsPwfZVg12UyUpEhZFCbkZry2HsGFozh9GLgq4PB9KZpF2qFiK",
  "key6": "pkcBQmYeVrxsmZokcVyxjLnd39umXYBh5ESAETtvn338oZi5bZQsK2c2j3QYoDWSQxqmQm1sAeAnPZQGEfZ4mN2",
  "key7": "4ieUQfLWjwAD1qtZf5Ekrs9TvoJumWxYUrgMi5SGjxEbpiADYz3mkW23FFSmzgL3TzGtV9k57U5orXzD3cKRaLor",
  "key8": "4HCZSdNCj6kzoLv6i2aL1S76AN7eDBCkgVMEEvkqzGtyKC7pqh74jCpbJKCFjiPUD3U8kW8A2SvJ1A7RCvnKhc9U",
  "key9": "32edXvMp9vFNP2bDyAT8Yn1nHMuoR1Jh97a6WwqSGoHbEgwJQuK6cPuadPjtikZ1u6FAUwQj5C7RqJ3KCH5tbjPC",
  "key10": "4Hu4Jk49gg1bnw7cX8BcJdqkvZRXFiXKaRoiRxbbsiyKp4UCvBEPPq6VGTNDqeEiZc8Gy5W5YoNUbHDmJE2X5sE6",
  "key11": "5PVN5of19W9vh6jRBHEfBb9PWXPiMXHYQEEX1HrN5VJnfqk5i5vnPsAx5auza6hZCYX2c1ddeC2efYz532Mh2tHe",
  "key12": "8FiJE9RitX8LY2JbS62DH7Bh81FEAXGa5PaD2guLWZYQccpyeaX4BVrV3oJXdtaFtTaGG83e1yu9HGHrjGBafjQ",
  "key13": "4HjyymNFGCNrgiT1FUoKwvxsRHtGRA5ughYJiJyv7rVX6kXDGPUwnNhqWLDtc5wzrRVWC1YpK1XrWomKTtWo4oEo",
  "key14": "swaG8aDuExX312L5VAaN6FsuDAnDjSrDEXEjMvqqfNgCxau5muKC3GxnQ1NPjHrwM6ou1QLCsGVQGmsfTTzRo6E",
  "key15": "3JY4s4QNzqav39kRCASfjmkfJKxDWc1HUmBxA7LPsb5zgZ198QR32bXefHc28pVPfLPqDpnAnMKz7ztW7Kzuspdd",
  "key16": "3jzJCpidT3XmbJ7V3Lc8h4DaoEFhhcXMmm2xtHPDuY6W4UsGcoURKiA1LHVGDbbGEGdUzMnFDZxDK6Ho1FRcPmKS",
  "key17": "2VAEwHFt79XhdFRWyMotD22w2V2PQe8ESR69bYXPzQriZAceBDZu3yZbgExPe31parKrnRfYQ1FKR2MPForNrPq3",
  "key18": "4UN9LwAqmtoU9MQC8LtQy8X78cLoPJnhRuLe8okDWj4oTkRDJUF1MKzY4kL2i6CHqqK1z5VXNYHcZ6sRBMxtRTf3",
  "key19": "54YGebSEZTSiSiKGbzgrUrdV66HwjTGKzcHQKFrma4zmGya7qs6YWSWdqXCWMoRktDAR7pRg3yDmFV45Z34R3qW9",
  "key20": "6K6FmXua2pc6cbbeK6cjDj1rR4i7oF77GbYt7gEiEESaR9KkyUhh8WHs73VunXKj5iHMDtHXjBwksT3duWs7KGG",
  "key21": "24NVcHxJQxB71gujqhZe5E6GckfnnJawEsr57zUkoTCeg4XzUCju778Xd6mBGDsUa65BdkKJZ4FqAzmXi3C7zdLw",
  "key22": "2aZWYCbbMKmk9ze69zEXGnL7mzKiTedRpLenChixKnTnojCGShjp2Uwxe58qsdmEKpYZVfwguA7NJpLhFBAD9bLD",
  "key23": "5h5uUGCnBXtvHBC8b2z2sg77ThJ8WEfHY89A4BYWTRJFX1wfEwEygQuR9E2XwpNju5xp3U5nbqQtYsKsAH5UZWet",
  "key24": "9gCfnjmm9AdG4k5jsk2pAiujoG4woAUWwt342kTki3o831RZ8YsoBPeSWvR92NmrbucfUQgnjN1Fvctk2SiopTZ",
  "key25": "5Cd4SyzcJ3g9FxpsSadQAZesYkFPqswZaYB3jPC8wyCZk83G3Kyo4BCCuAf2kKCqRT85Qnfz5GKsKabxm4gAjBxX",
  "key26": "45hmujUizkro18sCXfD4sU4q16rP5tkwasNcNeoWPvbFj2ChDjENCLfM5oQBk9XAnX7Mf9WJg2rVF3EDFR9BH2dE",
  "key27": "LYTzb3h4ozEKvjTCjbtTdtYZAQb7FC2WqSYDewWDRicXR3P5dNEdk5isF92FpgPDER5Suh4A1BL8n6hUhn558qa",
  "key28": "2b8X9txTG2XezFH384yFwdC93ZfeXi5CM7PN1ZrSHbh9mXEJM6LjQEGDKULcvwrKDVeBpqf4NTS6cxBVfKak6nVd",
  "key29": "56FUZD5mnsHYznWrH1s5pMetPPvqafsvwq2CbJsGbWwMe3jukVcnxDUUAJwuk6UxBdWsFoz8iPnKUBH4FP13ghkM",
  "key30": "jkQSMNzfwcRHTLqvW4q3xB6BriNVEJ1UsycLwHnrAs5PZMrZczDDu1yFtBUZAZ4NtqAmru1cnPEZb1Wp2UNtv4R",
  "key31": "5nYD42s7iBT2meUk5pKY2Lm8EpiTFpx9ydZksDA4VMZki2MoeFKB3SERiDUEVoS41AXb5L56R9sWKUKymK6sX5zE",
  "key32": "xqQC6AsdHhBySGHwmFmSZEUFG1gaHriWFerZZNibgDTE58us7ZZwa3sgaDy7XpjNxMFPcXA2tzZrL4XQCHLrKUg",
  "key33": "GXKriDVg5oJoqUBf3zFwfSvKv2xBwwYCMxmQQqETSRoHs7Ymmxa9uTMQbpmENit3dw3tUhSenZADbERR1zkkhPg",
  "key34": "3HmENEiLCtREBDk7WL36B3PpfsrgnY3aaqQeajFNyMwtr71XxZyW6f9ZEjE3MWmGFrr9MuFLDpe7KhStcF3vLaAt",
  "key35": "4cKHp4eUFYWbCJ9sLYipGLBTVeopRQzQ7bCdLPSJiBdTg5vKa4LAkHprSpGASZz77aAbZi9rvzb759WKNEwaKVyz",
  "key36": "4tw1gvp4JiDAqZh5Xt7q547oJqBbjx34xBSKaUPRnofZywN1jgTADvTGqNdtvRbAEdYDjNd9bBtZNrUpVqxkeMGt",
  "key37": "4YFEvMdZuX7uAESa5WA5NHvpew3x68iUisy6xkb8mkdyUmNCnfHKULCsipkgeoTQMi4GNVW75bwF65xbu4RLPWvQ",
  "key38": "3TJTa4H18mWtYmdttyyVba2PAGUVyTisCEjRXACPTufqs7qT7BYf4atSfSX7tCfjUN3jQUkEhyz823w1hBQHd2Xn",
  "key39": "YiUM3rw58vEgMM2JatC8hKnT1uVBkspgJHbfXqfPZ1ESj1LV1UYK3jDw4a8w4bEd4stQZVpq9AzdrFeSfz4aPu2",
  "key40": "RrppRxEUkgZMgAYUQLua691ovvL95cjoPL58yGijMtuxpqz9GUYq81AsYx8d6CfwmQtiNqNfP9bVkLJ9kyheQJS",
  "key41": "Jfs7ddH4c4zuXZjG9GDu5vcxcyz7DmaHAgQEi7d28PgD4qnNDcJroq7x1sWhytpeD9fubmUSibk2Aug1FHccJFC",
  "key42": "eKA1CBje9cGJAgzLJpRqhGsM1T2SmhqPz8MoVvma3kHqbDUP1qXBk5yYC4hGFfjxnDR6vuyV1vEBVzsGCh17KfG"
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
