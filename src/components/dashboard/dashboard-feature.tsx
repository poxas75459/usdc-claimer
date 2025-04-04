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
    "tfudUD3aAFU9SyPgVSFBw1R8ZYHEx6uRpVjWNxwiU8hV1VtXMcbfthNpaAWngXqruoH7wk13ohRccoWSqLXGecW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bUc2aEJfQZko1nKSmynju7u58djxXuPVZaveS8aiywsfwK68a4V97u2jehNoC6BXbYs5gkAhhz4Kzmdag1f5Hd",
  "key1": "5Poip6xkimzqFUBNbx1ut83GNzBbaQ4dA82U25G2pMvJCR9KsQ2nNtqQdxnucs1PV6c8D6ZcPXEfdfKNjZmFxiZk",
  "key2": "5mMnsemAMEzfCTkoTMaKnLtkDkiHp5Ny5N3ucBQ2985eQZYvbDHmYo5wkQn5Huvu4AXU3DvEMXf19LPk6vPDKcTg",
  "key3": "5udt3D1d88qNDbqnscMQ5YZyBih5adqvE2qkyBAZL33J6eqidcHobzXdMfQ7JvwDKAarbPpfEC2YXNz1oi5Bpks4",
  "key4": "3sYnbcZKEp5hrkbcFZLSopUJeQagiMEaPtRFQ4AFzb1ydfo68bypv5h6e5YuWKytxY4GdniMA4ji6cNc6uu8MNT",
  "key5": "5FTqF4dHMPB2oR2jGvdjJUCqXv2LGSrdZY2GFpc5NyMk1DgpKXNaC5U3ZwHnKhWCix1o1USrwMGPzBBFVxTv6ABV",
  "key6": "o8kcfGxfgpZkSH2B2xZsLu2RKLGNNMeVbjeUKTd8RKPPsw1oD7VRUWd5vmqb3R83MsD2Yoh7NzqK5yYZmwvCEWb",
  "key7": "3tm8jiw1zheZqF8pDDVZ1LjGYDHbMWbxfyrwsTNKPPprDxSRAQGKTbov9VDTWZqoJfwPBzeZtm1VmW1rQLifF4q",
  "key8": "1BhehNgS3Y5k5k3pwas5E8ZnXv2Pg8XV9fDuFJWai5ozbxFpNeVJ7bY95d18oxMCs3nYu3aG4YEeydzUwQJoLME",
  "key9": "9NnFBgtbVEktYJpqCLstSq6f6ngWJCxzCrHqEXo6guT7vQNTLg2AyvbiKeB5Y8NzyBN1Xf3ddBZWUakq5qfNcU1",
  "key10": "5FXser4UbswEFgQ3bNd3mWPKeKCbKAXHoGZDHamN9YSUGCrdSca1gbAkHBQ9RqJV2pBfCwmZWn1c6DoYKZY2vvn5",
  "key11": "3XxwDAfRggtfy4UhWizjwPcDEfY7WfNk7rAjGEGumS4MzJVmXkCSRS2UZRt7a56Ytj6igY7u6xaD2YTVbsunE9Ni",
  "key12": "44C935rQ5XY4rV6pwiVGycAuRyCy42anJgLS7hfwASFmk2a27zYow5JgKgRvcFWR7Lyv6b7bztKJtemdHFcZsDbn",
  "key13": "5TgB3B8a3K9kSjePXGoRuxeHSpyj5rwcCvHcFpLjnHikVBQv2F2ordMLBtvidxX6LH7PsCGb1m4ANxjUS86qLG6Y",
  "key14": "r3LpDGKLDjHgCkb3wAYbeZbJGuKgisX7miMYBNsLEh69YyJmioHtYqdS4pGVkfC5C1HBA68Uvzs3sRZVprrbyxb",
  "key15": "2A8i1WX6AHXuj3DT8yVerBhwmWfQxSmobMjJqBVPmHhYWcHDKBetnDBtYeCNMmKn7skvhCQH4wNbJNu6De2Xs4Tv",
  "key16": "2pTeSoyBMuTC5gueF2w2sZgfFysfnay7cjmiukY7Z6xFKWY3RhJGWvDcn8Tx9fBYntcMJfMFB3RdG8dwGL78pRk2",
  "key17": "5gt4Hk9KX21KCe8iuuBj8cm3VPx7EQKSx1LwJ86YXYq6FNHTuBp4GCt7iDN32u1x1nDjwwgrjJvJpZ1i6q8bAq9L",
  "key18": "5g5nMos5R7ojQhvHEu4Jjnbp2joP1AbDJqoJpTgdbCVN3QMoqAjz5UghVcLXMrvLvHuieesVRtW6N8PHDSyXw4aS",
  "key19": "3L6RBFxhXyQR3NLhc2MNdmeVPdywoG8EACdQrFp56fjCxTUEpPdD27Yb8hBPgaK63bdX2w4WTKpvC5t6YW7GCT54",
  "key20": "66XeMpZ3QVEHTCezLJh2qUQkm2JF8TENKviCmMZoUuBmasB4uQL56GiUtp9GhTgiKhPVr1yyDcar1C8iA1xLTtJJ",
  "key21": "5irhBCkqY8iXVQPWEzRYM7icdzKR8E9N1uYBCkkVnXhWPGyEytSWZMTLrVJE7otJiYwPeBALpD4uNUaY5kqyEtbY",
  "key22": "29WY5rsVbUFnMXyj6gWCMEmr6riVuG3YDqFXEuHLen99JDM6Y63Xhn36Q4LXtTnziLobVGZiihvhePgpVDufNUb8",
  "key23": "Lhmi1nsTUS5X5btQRGYPQg3JoWSKBTsf9jP8VAbAwCnX1FrhGSpqFamdbcDMphwmD9znrPatXqXMPe1MUZ6CDwj",
  "key24": "rkEuBXg84ap8WPhVgNLbcqZ77CZxxD1k7J8cxAuT7WqupWZ71MF8N3ekvL9Uor6qMGBMerGAr6kCUQrAtHJxWG9",
  "key25": "36dcoRvxDcfE69seMErRnQtxEiNT3mPCjGMN3621otLebBdm1ZVF16TgovZQK28q29zzgEuSqj6J6kSk2j4hRfxQ",
  "key26": "5XtczzPBhbXE5erMLi53KXZgPj44JjMAHxM2kjtXSVacfRTC5c9A9EmFm6bwDrCGPtaZV3c9GGEynkfAH9ugCeyN",
  "key27": "2topjEpCfz2C71vZWt623kN3TMVortQcU86AoQhwmM7fCJpnj6kKRyFFbzizWEnDfbCrz4ENaCeHpMmxQmHJsaeN",
  "key28": "5PWwTPYPY8uFoxN3BA67ztxuZYuTrQ9JF1YwU6t9y8i4pmbr4ymXbRkXx29jmLgriCFQTgDd2wGXUPwrxYqAfQ3o",
  "key29": "mgwxjNXrXDf7nioF7Jye3crGqaJaCBGumc1NRQhQLdVJEeeXV6fsYW5WEiA7sdMzemFMXLR6KeAjKLuo6nNVppD",
  "key30": "5jZ2rirzJXmApeHfh4LS1tW2t57WWzuhBxdqoo8LWmHMHWMR9P9k9yF5hGTy3Z6RctQ4JnCKvGGndMnWiYCXo6ax",
  "key31": "28NRdukhchMZQhQiyd3JRfDi4Mn4p73md98hYT6VJozLRujRf41pVtEtceB8cJXMLiEuwUW2RthFT9Sh7V2aVumF",
  "key32": "3bwxLxyGrwoCPBuGqQdCZJXvd7L4u8uB89tsVYMiVRtB21StfhAyro16uuyHuPXc6BhvF3PBjBJHxnyFCQ2M61zM",
  "key33": "4RJyAZAtUdnVD1xmFn3NweRpybmZvD9xqt2JXfnMpZXzJwSnkRQRrRLNPfJMrRecNda3Cp49LzZiVwfKUK3B5pme",
  "key34": "EdjiGHZDHH5fTwgGy6sPJ4vgBneUQ3P3tQjkHTArdDR2VdUdU97VzLmjiuNe1wXc6nt6TnuJhCDpJDtdwjnC4Bf",
  "key35": "Ghy1FoNw3a8UyqnAg1kWjsKENPPR19Xt7pnW96Pcd5BYcGkeF7TRegJZRTvNxZmrBGj4Q74n6o9kVkN71i6MPbm",
  "key36": "zaNF9P2PrkYEgVN2hDRfqtZbhRJ2qgWGyWuSodNw9PzZVCFCzGcnF6X1kvPBM1wCBkeJw1HCoyGfjcimzoq66EG",
  "key37": "2L4kNmv16WkFPx5L7DVxLVPtCjRisMLh5Kx4g7KPnodJWTnRvRyD5xgvUWC2VrRD1Xhysh7cWAwmLj5sEstpwbaH",
  "key38": "4gq3FrX3xuy4XBn9FkmbzcmFFZ5ChdGxxEf76QQCRAgfcjyvy2eYJKopkZZJw8SCup893KXVomdNPcfFZV3UV7hw",
  "key39": "5GUbhLjmfPpraMWv5k4gt3QseEKq7z2SrKGNcPRGcKCfMt82vqzvm75Xm6wdTbSVSdbemEjjgrrLetipmjHnfiv",
  "key40": "23HQxxzBGqhqACZqHqNiJEbb1BahWgR1JQe517fBKRqF7A32vcQgVDLNwJdZgq4JqR7veNHZGwCSNuUWfmeXkqBs",
  "key41": "AtmtSHfZ3HQvFADPYjHkfsyCgN93c4oaJHt6ho4LqM4L4WLCKTmNWwhYRY1ihkJhKHjDFfvCrv3xhsmw7kJgsTA"
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
