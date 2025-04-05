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
    "66B24dKA3utwmj7ApSGHh3X1ivnhyxJ5REJ9vSGXanuKnbgLWU9fXiezbVdL5XKpBZiAX1Mexa9oS33s623ftsMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moiRMW3V1vugUt32jM6w8x9xPMAS6EktjKN5yEYze6vUCsxnk4YRP8zzjDS58x8VKZC3vp2WooDCJSCr2D2u8CA",
  "key1": "EKMU2k1xXzvnjF4yiSvNx9vVdisBP5pmx4d21n1fiEh8C7FonKs5pDrYz7URqS3NsfUQFPCQNtS2qi1DMZCz9vg",
  "key2": "3gSyESwqWxzTF6RyGYYMwuvLhUfoRwYaXcUGXVN32rhEPSkdxbqyUjWkRUNFigbaSJastP1MVBNGyDLDmP3CZgxz",
  "key3": "pyV2EAzDcSuBqoEhFQTq55k9Dvbkr9NFqWTGVfz1JyK8uDm6EwvrARuVcaTzZZa5XxVEb9fvjYbUg59Wh6eSP8R",
  "key4": "2YUbsBvqs8vNECM4ExstAPgSem1KFmUitfM9ibUXfmzvwaYiwKZ7zXbUPrJfU4RBYihqQYFnbHnFFNNmV3YFkEJK",
  "key5": "3JZjSJc3CzoGaZL5HTZLLLgPg4gfkAmEt9MzYDovYWhteTSXBvA5wXg71Wrb1QDyiE5hHV2jfcmwzx1d7rcdDHVq",
  "key6": "3Tdx7NfbnWxFjkdrrePrU7yDp9tjh8QXLkGZw6hzXFFN4yeKNaDX61fWPU7pNAFJSah4BJwS7fjUYbSmuDctyCtS",
  "key7": "2xy2EWinXa4Gv2bpFDcjncTfpBEENhLRs5B24oJrXyVsYHqRRnbQddA5STnnXgGd9CYj91KnDDFhjorJ2BZLZYyk",
  "key8": "4CGBUBe7THo3oThJ7bipq9LXYaAZS5TVv71aVwJeowURUV6cqMtq6ZFH1PXeoYP7kCnsA8TffcYEPcFcmuYDSwVP",
  "key9": "5Kzrzp2TyV5wuFQzZHZ7rGG4QCx4czM8TJV51zC8dnomTKqWMzWzK8G8AGP7oseLWSpapaiuyzSkZwpJdftDb7T2",
  "key10": "5sLaPVrMyS5ejfZWPAW5PfQaKam77QC3ttmuzQJ5wBCnbn8mwf2BC2rfXbi1xghpDmsxgcfkyf3WdugTfWx9subB",
  "key11": "5w2gdKHstCMumtMj9KzyapLpqDfHXWN1iYGHtAweQuR19PtYztGekWJhfej1vgVZSNVPZUX6u4w8XxsoJW1XAMju",
  "key12": "N5RvVkNW4AaWf8nEFhCyq9ziqUCZ2RVrgQYfbLRsnZiaMDfvfWY2TsuscuUfdhhmM4ZNCoAc4pc32C8LXL2YWQs",
  "key13": "4KVnYbbciuJ1HUMwVwzxncTH3KPgnSNZ9vMhLedzRwd1s3WaG7LvR1C4QW7E5E9CTERF9sNF7NUKFVocoRvxiyaj",
  "key14": "4ePCmPBMtLqTg4ydL8oRwLN2ED6W5Hspn2aPWwhixQdX9cffszmhPRMZr4KBcJx6b4M42gCGkoNpLjURmVvk1E6v",
  "key15": "3xtHd5LqdfohKno2r71gP8XaVrtXwFqWM1pSp5ojPcTNhwqWtoz5MAEbEk9gRZY6LA1jGjPYJLZhBaQvYwpnGRTV",
  "key16": "4CpkrzsVtsZabj7VQjZrZbxLbiZAdzrKMc9wtY57NJnt2HLpvu8To7bjU8oiYEkJYK4RnpP83gTKybq5ASMNi113",
  "key17": "qzhqBr8JsFRM7eGJDsnjDc7LAduckqB1RsiUyonu2F4yBrvZ4WXiifgNdp27M3JSjdC4cfzS6GKVFVejM6cKgY7",
  "key18": "1HfxpjBTAETJQidKnr4aoBiZZyy5KSN8WEo4vWK8koTYXuC1qA1uhQuWv96vg38DhK1XUXnqocTJNmvWrL2dfeE",
  "key19": "2dBSu6p5cXVRvX9hv6oDM1nCx42V7gS8NZQ4ogbcq1eVPoT7rqGf8LX3NX3gaxAgGjZNKN4HKesVY6hJCZLRw53G",
  "key20": "2UK9cJiv63VT73T4TBb3M9nGfuhErTiqHAtkyM87XQKUcYfhb1kExuUS5ya9bqG7GdfEfiQNZBWakGus7G71tnRU",
  "key21": "4bnZoo6iU9HbaSpGMno3ZvJiJX5Wp4dQHwnV7sk8CFyQDwto3sbknQM5tVjWQp65XuhYx7r8L8pPqgAJj7T9dELy",
  "key22": "3CvJe4Px5gxym4AAqJy99UqUA7SmSd717bK3cy5s96aEnFWNezcLGTEvgsiUgQGdYb8s9rjqoud1PXVdAVTS2Apu",
  "key23": "4aXXaGVHGpFwXBMR8bZ61J5TfejYGXd8jcPZfChNEBVR9pWGtWoam5WQzt6aRcw3UvhLT3nf8DypVTPYxV7fQL4M",
  "key24": "4zEps4dkETiMxNz89rDLpDpXE5d8y7Rz8sZvHfcpN672QwHPpdgBgQ7FhVAqtJuqPogQDfsBhWHJ2C8rRk8bXUaK",
  "key25": "5ux8bibWWpNfWhGrun6D5zuQ5bpuFJQ1s6NByzzGaSprVq7271pET5GFgaZua8Bw1k4gNsS8RH8oFyBYeq6s97c1",
  "key26": "5ZbYZN6d5EcAFL3zGG4qVhLMjT1DTM1rqTfjscb4Ke4rE2ZWpquAGhBu3AoZckMhLb1xuiRheP3knRja7YCLVQSB",
  "key27": "52SJV6xpCguQP94xZh83e1rXLaUwhLRaCrCvavYa7kbuhy6W86PdHa14ReCCKVSSyKH2VHsLW8fx3iDWM7gysvJH",
  "key28": "2tfMDTFtmFpAKFHBc3cJ9GFe1BRSz1tHBR94jgmqSYjdDTLpj4rngCYssDbE2DaQ6vr8h4KzSp7LAqhmrnb2eB4e",
  "key29": "376857wXgB6nGqeMJVf6CM8HbjFwXqc7UCjKwsR7U6DhGWXBJTBnfP9yJLYFD335ghPnS2m8hM1iBUugfrqGmcxh",
  "key30": "uoGShZMDWyFVwMksJz1Xd3xzKXwSCVmH6WHu6hCuiLcA38BqwzbUCGj8nMDAu3y816dFautxLsxfFkrUC8uobAE",
  "key31": "4XfXG69vrW9dbvSedgMaqFR8B5UyM1x3rYDuWZrN5jksBNMtDZCPS2x3Twd6AR1pEwQhasiVFqu2XF17dpMjuuAi",
  "key32": "2mEqWr6FiDk9KhcpAWWd2LfGw27SLJMgH5CCW5HAiVXtG8JFwHB6e5caK336kxYuM6jthEBvzsBQStqXp9ieq9kh",
  "key33": "478kDWCFbEo1vw39feYtEbyDbXrtC1fWMVk7QFAPHa6KVftPRYD6hHdimPVgSRnfrvMukMV7biM3DE3LwR3fqETp",
  "key34": "YayLom3tjfLjfwK8wFRt3dNPuRth6jBL85fC7h3y34Lm3gPwH9hgyRWsJLcdBbRd8eYrWKyWeWKg5AynEC1Xndj",
  "key35": "2aMTgneAMBiKL4WzZSp2wKEwAcwAjT8L1myacVi8EavQg6sWeBH3omXmWmvY6nNre52NauQejPVQAe3G3rExueyU",
  "key36": "5WV8jyVgYqQJcyn9TjwsEayvecR3Cq9R5gF9QrQEtkTbVMAZxxGXMNx72PvTsgMF5oKHvWY3sBnmse6iPAHb8siY",
  "key37": "27aSJmEBWCNk6quZD2aYjwrLgcZ3yUeTLH9kpNm7KAs26GzJLr9zitog8PYfmZLosRnxjbveVZTdnU9FXWseSP4t",
  "key38": "2ZSgd5QkwVpTMLhv44zzmGEGQMqyGFmnntgjiUdC3GkRL4fn9BzHjKNrQCyrf1yLXQL8oVmoEs5aazu6p7LyM9h8",
  "key39": "2Z5HYzAYVh5WV9fsEYV9n7nLpjN726k1T8iZxAPD1xx5mKB2n668wmYwzLBGqgQRzriMpGT6Xxvm85snjo8wRd6G",
  "key40": "4BRvXVb4nATRxj5y2Dmer5na3BtDTCWpcT81mRTMkkJJtAETLC3hEnSr1CW5h47Sfj7u6idrR2YXyRFGrrWy6hTc",
  "key41": "4SeXAU2U9BcsaebYtnxi2R5AM5qzio3uRjtkUkUjF3L6wSiBEaqw784e1B8sUY4HcpEuzULri2aJhiNoZDaQpYRB"
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
