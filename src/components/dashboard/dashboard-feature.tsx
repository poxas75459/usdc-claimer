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
    "CzDyqamc6Hs5MAtem9s2DytH8jB343EGefQMbfwUAHX6q4RjKrBUsVivY6Lh6dTRodt8N6fu9zMPJzo7abEWQqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YMgN4d9AbA8EDLU2mTfvSwjiaWHNsMpq86BKgLVs7ZHiJaWp8TnhgvBk6jwK55ARqZjMvYULfgVu2VqRfncBuP",
  "key1": "2Q81mg4htRKUW8F6xKXbTTphcjwNr1bV8vS8dLVgNcWbYiRVGMv8rV1fMPGop6XrNR2CUBKR9Z8XtFU8yBxxq8D",
  "key2": "4ExYMnnx71Q8ZvHrz4GduBe5SScP2tiwS1cUnReBc6dF7G2KYGoYTcRVTtqQMhFzcdsHRRGCKG2zyp4EbcLSQNof",
  "key3": "2Gh3BNjzb7gCVJbkjjzeGtK9LF57AwFPLiGnxStz63GzThqvz5M3pGYLBqHTpZnVtyNaB7PaeDhbvi4tRwXHk8Aw",
  "key4": "4nPSaU7u1rt5n1BZgFPk3gpXAKAFZxYGJAKoBL76yg2cxFXPFmMnZJm1fDZQ3hj1uUsv78F9hYdyE3JYugXLLTKo",
  "key5": "2Wmb6iteBQswYz8ge8ZmUmFCQe1f51Xm7kMH4LBUfvDVYZoTdJkMd7mNf4GqJPuceMUiyBJCQKiEhWdSMLSjSP2g",
  "key6": "KTfxuz3Lk3peJuiw4aFyghR1wc7xz6rQ1HASyu3QchRAg4H6Mt5YhHzD19ZVPS464b3EJCmyUCeDZGoUhVk2SzY",
  "key7": "eeCZv38xKzLudRK5tMHt8Vo8o13KKXC6Kry779GXWGBshaYLMA9hPnajExQRpy6mvgAUWMWoJzmz3SwRQDPWzJb",
  "key8": "2URK2xBntRS4kbqe1XSRtJiiDPRTDrGmbArRnEBAZM3zUEck1g8Xiw6rPPap7ftWjiYVRkhzNHtWJ4q18x7s6sZZ",
  "key9": "jL1fcdPczMwV6Z3U4ousPjRqdmT1mBBZeTmwGKFtC5sz6g7mmKBan5xVDjJ1fgPGzzjXosCpWjz4ydWnnxmMtsm",
  "key10": "37rSZRMTF4vV4UbTRVis2Mz8cQ3CREvKKmxHsZnQem4SmwCvTKF8v13NbsnGUNdMZcR1Wy2REe2BQhTmsYeAbYLV",
  "key11": "2rdnTMmAP6Jem3QYFkrLZiB8cesSwwLwRdLG7rNJHmWYUGAr43UT2cqnG3dYz5XvyNrResAgCaE9fpsDtPgDifJo",
  "key12": "5BryfMFjKsYCwMKCfjntffVbVysFgTusm8kX3H2mCT74wM8f4YNANetxAoSBwF71aaXc3C3DZ1bEXGJRJrsisnmi",
  "key13": "LHW2YaistrQZDnfnnbjreYqnLVM1Dw3WTBgUa4avgDS6NiU7koxSeHfuYGj5bM9RGF3Xpv9qnx6qnYihE8tpVfk",
  "key14": "4KnS1SYvK7oeskSgMEXjx18UsjStB9xHxh9nfAnP15UyLfjybxodum2WAH5ZqUs9XwGT9GDFxhfQTCfZ4mhV3gwd",
  "key15": "pma1w99h4stxoY8nADTzVLP71aCBWDtKWTdAySBTsAYENNMxnywfEa9nZoX3K7prTdTE2Yre7Dhrd9UDAd7cfPg",
  "key16": "2riSFkykTkLwYfhFmvwRY1TZVKxDV1Zb9MMqaEe2BHxibcGsEWUAu6VL8XmSPjGFnx3TZLTfDucgkumnRCsHtpmV",
  "key17": "4ShAWyoLrotQ24SR5ce1a2g1gFmELzu5gvxTc2rBUVyeeUZ3hhRN8CPzZrrewmXH98LFV82fyUebuUU29bnC4WmJ",
  "key18": "5BoS2LLapaGhjyK7edH5849DUGmV2w111gnif538DZVMXfqW85qbdEQ8Yqo9Rn4PS6791FFFF1njG4BspTT4PGUy",
  "key19": "ZPUgxQzYjLa6z2SRomBoUqUPeKHVF5WxN6ZQQ8tCHG68MgqiXLrBxzULefGbGQQD5g6xgPatqHQa91UbzAk4M6c",
  "key20": "3zK59TgMX9QP7xEvhhmNJ7LoVCPSag4evzQs1pyRuRtozFTVYvgJgYN5ZQADyVvaMWqs1yb3tvPpFjs25Uyd6j2L",
  "key21": "58ygM27QAXo739izicF9E5KrNv1sq2Ti26Cz5rnKConDx7fQUokhAGzKcN28reyfxSHGqpLsJmhkPJFqkPJfMnz3",
  "key22": "4yQTxVCAnk9BQFyhcj7KuY8YYFM4BanzYR4SxZ2CefTf9H1oQF3VGY52ZP1jdSjt7borfjVScKgLYAgE36tqPTeY",
  "key23": "5TrEQPxLvXHS482ZHc3kZtFKAC2X6PindLcH8ZUfnWe8r961QZfbpX3XfkCLaGQJWRXLuKsxeeKgx1bgTe9nzfu7",
  "key24": "58c35MY3UiUDPczW2PV1MfuBWorMHgDrVBnnHdxomxtENczKWhgrZHp7k8rgK4v9Y1LvKr5rKEngH4wF4Fbj6EPi",
  "key25": "S753BEFLUaPgbcbieDWZahS5e5a35bEd1niNR78U7mHV3vRdiX1MsC9TrQ8SHMGCtuniGn5w1c9RtH78RrfFwDg",
  "key26": "243uXQUnUh2Kf2GxMosGRNmtF3tYN6KPoBrmvHBgPp6NNLd221dfYAF8tu6s8NNiejAmLNs1ZMYchjsSWM29M4yG",
  "key27": "3KxdkHG7B4UC32mGTFkFXx4uWjeuQUcvVjbWH9nFDPhFHuhj9mgVcBNCTs3zbuZKa5FbNsPCWYiXuLWHqsAPdhw",
  "key28": "4UU5LCDdjq8XmTvvgj26GwHK168rbpWgpWTxqEnkxfgyYMFvQYzAxKafurpWfQ46TGZuHRwBKoaHRKLeiMKxfc4u",
  "key29": "6544eu3SFHgt6J2X6PxwYpG7EgoQHjqYqnPbFxRkaRg7ch8omQTkYezqRoaUJR7WDnajnPuWXXmCuXDnzg3HUpSP",
  "key30": "2FgqvWuY65wJ5raGKPKvyvx4eKfUEXYdqc1zCBWaCja8E4hePKNcVX7zQAUYnmmsAwMupJWBX18Zj5XSYWY8PGUh",
  "key31": "3A2oschL6nL2V2RnnZVDJFXSYmvBUMUuJ8beWXUn9H5Nx6Ys56uuvDbLCJCN1oMX9DUWToEC9Ra1iA9mtSSz8U3f",
  "key32": "4NAQi7tUfB4oK8bNQbbX25FBmV7s25GMW4y2CYgzTF5EqYMSTFpMcMP6WMr5Kgn9VUK73f2V1yJcPRaPs5tPxFiC",
  "key33": "4185xX6iW1Q8wJLT1LcmtDn39zF7g2X1VuxK5qXq9E5WbYcPkJ9w3Rgf4AEJaBz8J8My93pCeKwVXsLjdzLSGK1f",
  "key34": "2n1QFjfDihRDzeN66YFw9N192U69hJRywT8pi6NnxYkNRJafjmjnkRQkSTwnXnBDAPXibaFwn1FH3YMEu6NBFswY",
  "key35": "3UMGaLQ3TpQH4RjiCExCerGYChuqhRVqJABAaeYkSAJazT4XXbECjBgegVyVJy8DrKT55fjQHJbYo4NFYSonsBzx",
  "key36": "4EHG4SfbfDopzNyBt3B1avDEJLF6YVwjU4gfBq3d8FnJAoe69Ua7WM2faS4Poh8VbntT2aAMZBAZ2iLVYrVFp2iV",
  "key37": "4yDz6SskhFJeHqAw2gSdfCsVk45nyJbMFR1wJwFM2SeJ5SFuSizhCBRHcj2TcGZwL19xLZqXbXEJHGGVRHQr6r8Q",
  "key38": "2st8fUZ1WCCwVCTb67r3RvgRvPHNJzVG24HzbeZKYvyJT9LJgFP31NoP5SGMMY1xK6bw3eo3J5owSavWfKPqPocz",
  "key39": "5RbySTiZ8xaBnpxPgE3Vx8j1s28LWiBZUwBJgGD9KzRiGhtGi4w47rZt91ia4pwa7fKWcH2ihQ6dgfuneNXMtkyJ",
  "key40": "4st5bRAqXYbwhLexa567PXD4vNtE8LHn8VdouRYEz1N3mRdo2DuBCvmdYgNSVeXx9Q3WRZF6Ja8J69EEoHTEbkjd",
  "key41": "58CXhU4i2va3muPSVt3orNJ8jRaGgepf9VfJbRR2JneGQ9xSzAPz4x3wxrDUoWF2sdVeCjjWJyUWk6nvn4LCvKxC",
  "key42": "5XfxnUfLoLqgKo8KEdz9RcQe5mH7FGAYtdMK5dTGFCSqsLnDa9NSBX1MqcaW4onPBtzsRcdoAKAygWFRbjjdfNzY",
  "key43": "24RUuzaD2uFnUBBw6FPGDpzTvhHSDfo68oJLJJWe8HWmuzmaEoqZ2seyvisj8jkicF785WdKpH8r9RUjyvwACsP1"
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
