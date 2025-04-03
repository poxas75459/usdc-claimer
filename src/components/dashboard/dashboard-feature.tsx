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
    "mBR9sknqYaty1xN2T43kJ9wxs62hfHJZGNHD5rNwmByavgvR6dgQ7ZKykXLcATeqNkVzUDc4SnWctKrVLYM35Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vANp7YBBKgqKjEdDLToMjfyxHX94yFb8PVXetPT8iwhQn8ys2VY7ZX3Wv2vtoLKbZ1Fay2fHSpczX6qxeFdXGNk",
  "key1": "3ZiQe5rMSCKSwoff5D1d6ZR4H49w3PVtBJtSskD7skVMKSFaKtY7N7o3tyeChwi2Ak1GVxFdvru1h29enC7ooVDi",
  "key2": "43UWi4rVzM5w3PCVrcV6G9N8EKWUiPpW2ybLV6fKNFr7uU4MESRbajXoG1WrdvEWQMtJyTzYtpCan5nZ8PrYUZZh",
  "key3": "wA6NYypeNDZ9hnDtJVkHPA25juhZVXQjo2j6vmyjtAespJzFB4gDZpK1ieRmTMYodL2TWAS7VqCLFUvveNfRDj6",
  "key4": "3kSdn9cBpzVHeMhetQfm1h6yLQ2y59kwGvf5bjdLuaCuUdiZ4UDJPK9ZyX7cYG45UP3UuD2FZrRvStPYouHCqRnS",
  "key5": "5boLp73CsEWZXNGELSjmdR6g8PSHWX9J6zpnjmhyqaFnfaWHjU44jyitV1Uw8B6Xa54m128GNkPmZsk3ajtTmjJg",
  "key6": "4uJvnmzqhpJbgtXeRQBq8MWS84JdQuEjfpy8uZRdWxcRMW7dBa9CDAsB3YpJFeWAQUcFUf1WwEZuaCS8vqnWCmBy",
  "key7": "5Ce1PxwXUJxBmRodB8nUun3k4tZMHYtwkCgUbAeEAByoXFUvKm7nK9cetDegManiQQvmS6nkXRvzagAcrQpWHCLK",
  "key8": "2cGC6nBfxv9o1HpapfsKCjRuifdjWcUaaQgGbSAtMrnhhQdQMu4FqR6m1qcV6me7TLKuzeUErNv1HHWWdKnRL8Tc",
  "key9": "unzm6LFmXQRXrTmd8mrsDGecrnxAaMbbXMx8gFaTgaw8xXVXw46yJ2f4pW1aQkHyqUJeGdDwUBZRNZWWH29sScu",
  "key10": "2KwA9jEN7X6rVNuyzampy8eTU96Cg2fWATpuy3q68HwB6gm5FrVryRAJHw3Y3vNND9yYXw1TDere731zJxDo2wMq",
  "key11": "28feXuTo81JSRkKrTmhbcVxGXJeGj2rUrx3JZEUANJzNStJEsvvNWjww7YmJwx3LsUNT87FeN2rvh9HwVcge6Lgk",
  "key12": "2vmUKabo17NwN6MMGpKyfgbzbYqk5H7t8srDneTrorm4xkm6H4MMNoiqaY2jLAYiUfd7UooEkGvG6vHHFk9rtWZE",
  "key13": "Bewg5SCXmtzvxP511rYr3hB4TmSfFJqDqDNm9mg63AwNxWUnyyx9FbDhTdH2vPFdjh4HZm6HwW7naf2KwokQaNV",
  "key14": "4LvRg5ttK1FJfxvmhBGD2htoTAjjtF7XbyqJDSniuDcZEVKSGPVBEQwajjkuyKHoRLTvVBBXYozCdyJbzXUXBPmW",
  "key15": "jat1gWkQ6U5JYZsPsNDuuwQmHiXkwsWhbJKxxo7Z1VPhG2xdJpCPNMjDyn8XeRFUMG76qq5dNR4zprRQV7QVPUk",
  "key16": "31N95JNkURHwsYqtovhw2ev9AHHQkHXAarPjjnz2VMhwvbTRKJTMjygL6UxB1g7sFKFh5WzrCVPvF34eBKcrexMW",
  "key17": "bhT1yWsvQKNCmyrKeTmr957dHm8REEDhLnsyQpMiwu7dQQybYKn9FySNrEZU86cwBF3S8TwBuPNkw77xQ7yg3Qr",
  "key18": "4dYKbA5G8n57siC6997xo3DgPrXgSZxMRN8K63axRMCC2Xy1KJfPk7NCAwCt4vTxKFF9syHz8DFYhziRFiRwXG31",
  "key19": "5pbAjsyJ9Ey619JsT3sYRopMoUiCa6i9VXgYEJMAataN4wy3G89ykVHRkS7MXrKeuRHhvuD5X3grqQzecCZpf52x",
  "key20": "vadhHZU2o8PGZsBcsMYJqRRYh2pmKcsq1BKUWcR8bhHrHTi5cK6iFJjxpv8jqyu3Vdeb3oL36hKbhR9PXbDCMmG",
  "key21": "5BEhhBhDGdXQj8C2B1sA9t8rVgmNsgSy3X6Bi2k9cxuxpEzzemrjSnQbrouqB43mjfPEPBL3Swv3RAZbNy4bgz5V",
  "key22": "2Tw1rUjJaNQA4qqJ4Vi4Y3T7tDaArW2fM7Y6PrGH6m1f2MxLEPsk7DDqBb4UUTHBj6kKwJYaycHEFKvPiEhEm5gU",
  "key23": "2JQzYLMPTr7X1ZPiiTwsbZ9hq6UogBDWCQgXns1BYe4dtXsiNugqcjX5m7NFQYxn8inCfyTyUgyPnn6REvDBK5cA",
  "key24": "4rDENidcwW4BYj1cQcoqEKZkqyt2e7TF6vV8DrafTaVtNDqcBWaHmNzu4f7AjGLqbeFydSBg47Px96UGKbqd5fic",
  "key25": "5q9YesWMtYnV5YwmZHhWFeQiGowX5GQcS795jF9wXq6Tey3HMxYGcAuw2mx7SURM7joH2yAS9fn6nDqKPQ62rLzk",
  "key26": "3rPothh4suiRRL137g1772aLyHw4vja8CXVQZMsmbdoGdokinS5r7J1Lc4xeKo1ZsRoR8c2CpqjJDi7gdYmRrg8N",
  "key27": "2p8qjVPv4EJTzNYYkFeQJcUvCh8pn4ynNYnoAEwnUhJR5C9okSn7cFAp7j5fbvY3LwwM8xTGzFgNEvkNXyci67aK",
  "key28": "5RXuU1apWY1FWSqYZSZYufMCUnXEgEoubKQjeuur6pvbWF1L5eka46iQNbQu9xnJcGvvf8utFABDbxiWCcJe8oMB",
  "key29": "5KqTPaiUMh9YaMnYqdF3af7dLUZ2qj14iVtdDQXKM7o46WaaCeZfyFf7eRrMKgHozCPfXW22Z944m3cqYzQN5wUK",
  "key30": "2nd6XdS6VqjVeTEaLLsKn9yX1F78TVXEWTpbXXumm59TTLTaXuWDct3VeMzx2oPsA1AqByriEuzZ5q9koJgkAFWg",
  "key31": "5d9CZBfW2LhcSKN1PtPPbo97FiYpszyzuMyeKJTKKFHccUKBSJL23NF9tucZHJpmXC3m6q1okX6QVpUnhB9YTTLX",
  "key32": "59GrDNiTJZPgy5GGU3s6fxyP2PjycGSLn5UAMaC33LHia3a5sd9EJDEqrtDpdTU1C6nJ8PxRWb9LNyym7YYDSZXE",
  "key33": "48jegdmVaTi5kK18gfUib4ufthxMP1am3c3zkwQBibMVWM7VLbqAj6yVmNVxg3RUqSEtMpei81qdaCvgregKfufm",
  "key34": "5rhW3EfC8LFGxwk1VUeHKR2dp9SfeEHjBHKp2Vshp6fwptMmq36kjJVVabJuK5QGg6EnD6K7SfQn7dYTwj7egdq8",
  "key35": "9Kdt5tsBYcJUuXPnJxSTrJXfrkps4w4DQTFyVcjGXZs2jpCH6tV6yaTEXDTZ9PUvnGduBkwCDwsRJ3VUHSLLPRg",
  "key36": "5UsWATP53qz51YtjtuWGB3eytR8R3snGYYeBH6666t7MzCBVmLAvsTxnQhxaYLyzWfjLJe7j1ZNr2AzEJUGwGyYG",
  "key37": "5JLkQy1i6uj8WiyKZk9bWeL71yaZRAZ6d32BX5hLX1Q8scd41HG81uCHCkeuaBisg6QQdeDiWoCyETca1zoHiYni",
  "key38": "fytak6dPEzrkocCVt3TuMs4M68TG7H8gfmZAi2yyo3HLrctGUi5UViFxeAHfTbBQazZSnQpgJHCahf2ZTXvUv3P",
  "key39": "24yZ8DRVVtCv61rWcDmBGbS7ZJqTFWT1xUycWMbGWY4Niur4wDgVjVV8YmrAzn9csWGNWDsHWtvaKLbiJyEiu8J4",
  "key40": "5E3JGMqA2JApCEUwfdy7kbVCZcike2dKuQyeefMoGJy6XpefiG15wpTEDsu1jzpFDc2kttm1uxzkJetd52M5VgzV",
  "key41": "5pg9ekyKcZvHJbxq7zwadF3RuceGZ44pL96wKqdZbePcfXfmCCV4qUSbGAJ5YfrbwKRPxdjVc5t7kRNxUyFEFsso",
  "key42": "3k1aRG2eJrcUy9TH45e8hHkY8N5AnRkkBxjdmc6RsZRSswZsJnSsSCBqZqCacG6Y6hYHrG5EMXVTCvEZzFVoXVJq",
  "key43": "3FAQGG89hdk5HdD5HY3JLTxxy6G5iex8eW7yjd8UhQk5oUreFzNLc7pvvvXiy2TkdRdcjXpQeSq8anaDwX1rfn1V",
  "key44": "4Mop2swHWUA1QUjbRRNdKfHUoemrmLiMrmP7TJA7nHSMEBFEnALy1zNM8j7CVDnDuPxY9mB49NjihwM4Re3eX3a9",
  "key45": "5jEHGaQ9XfxZZLBmE72WKc343dNC7AGGzDRaGS9nrc6gLvHLjEBJ1oSx68U7PjXoZDCQgNTybVieMGcudP6Ti337",
  "key46": "5UG6Z95aar9r4MoQFhbLgYpf5DH4t3bvypL3JQmBBEanyunsKSQr6QG891gV8cvt4zDQmW2cAL5D1FoEJAjaqn3r"
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
