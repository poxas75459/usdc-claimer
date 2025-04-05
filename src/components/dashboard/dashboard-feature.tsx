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
    "5im9991Nmh4jpPsfC776KyFx2gckxnEASqANNkask51QG1a7o4mXM6KwLuv3AA4pza3kjDMLCD7Gm2QB8QfTiC67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBqGpwTZQzEhPA1gJ5SfsTnBM1b3GbwXDDJ3Dd5qESRQJTsj7wwWjxHQkZv6QKY4LdJZ6QSL1zVcRMSU8hCWu19",
  "key1": "3uHWPUvG7J1C8xfoB7j2sn8s9Jzh5QyN9SgbHYPy8JTWyB8GJXv684T4EWBbxRuqxMV7U5qtmzWCWmssvNGf5Wpf",
  "key2": "5sd9vVoYAQnxTJjSjzgVu2yZwpgvk3Bc3GNPcjAVQV1gt56S2UGMHy2fiLhtAj9SNrBPmcTjnXopRY7YuBFprVK2",
  "key3": "2rPQHWvwZfQBgNJpSTkGo6LiF2ASeX3ckE182VS5u4UcEjmK5V1D6Z83twL7WEQLTYsrrux2JbrxSM3oH1H27mWw",
  "key4": "66xR1aHZn9zQsMeJkgAhX6xU1RzQypCkxtqSmuw2R6AsRubgu2yicR7HtqxvUVYMZ8AMvz4qPJYpxGaVYppM1PET",
  "key5": "3Uu7nLqfbGGMAoCfC1nCzYyyn49oXT8BHhq5T2SePGFGdCoAZm8md3MGc16Sgfbh42z8QCMraHi72p7KeoThcLZ5",
  "key6": "2g2tVCbXDzTVTUfCiF8NPiBTPJo8RLMwLVApDTjwmyR836frMCGfBFxx2WwpBodATMNH9aGNCAkguPyG1Dkx7Lae",
  "key7": "5PqfkF81q61BwetSYim7aQMLLbfKM4EsB6oYqjf8Ze6gtwQ8NGmT3xVyfsJ5KDX4p81tEf2zcReneyUBpudFciLc",
  "key8": "2ouxbaMUujND6JVndWw9ANF3JVvdqs2CHadTcYETtxiVu7kcHvw4CrT6h3PERUk4xkmMKT9yVpjCH1iWKK85H43K",
  "key9": "2PRzAAvdDwbYrQewHGqYXQW1pUFDdN3yzANnLhFhoifAanJqFrBC6f3A9NVLKH1CCZXzWjCyziPjA9dJACdbjsjP",
  "key10": "YLYz72j9WfaSzoA1PmV3FVtm5LryCfgMQgYQv88CQ61vF6ZkeTSNTxxWULKd4h6cXksm8c9QybM6Tw6bthF4JzE",
  "key11": "2ewm4Jzgg3xyACUguuPaURjz8UirgCnQhPot5tMXNmutpxBgoHrNALTX9ZvYKZpvTJXrGAibDV26yX2gRezgc9hz",
  "key12": "4g8kUUZo1JF5d57LBe2KrRhthyJyewNsow8HwkUCURWeAjvjBDr6P4LcXBuf44Px1AAHWBjtypFwutuXUihZdfnk",
  "key13": "s2doebedteWynBpiardAyd7vVR2DrJdziJASg6HEBsBVRAZ2i8c5NaHkQcRyK2GE8guAecZvAbUpBna2bdqoGiX",
  "key14": "3619jkUhmYH6iTK1QrHwwPj5PrH2dZD15VY5QMUqJM6GHBUCEgfiGdpA86pWP5SVrPMFAnro8MxK6aQ56zvX4WTB",
  "key15": "3PXyaXrJxH1mu8BcQjLoZkJkTADSkSP3cokvgT55qWsZ2iv8hiMmQWg1zHpCtxjmCUQwpASLV7QaN63y63QRBDx3",
  "key16": "5WjALXfX2EdwNFmVgen6ijhyvs6L5hxfdSrFLdqLrHtxnqD4yzBvT5irvPcURQSsuHirGA5xD3NR4b9F8gzuvMgr",
  "key17": "8HV1q7sbJ9FqFweGnk6gc7yKasmZjVT2TqCzRfTwfB1TWuxm4irG5L5GFrpn6yGfmPnbfN1KczJxzRVqZe65s1m",
  "key18": "49bTEWqzzRbX4x47Kans7qJdDubZWVZqWKxModXPfkojULwHjV6uStPvACygajtzUyJW79agMJJ65YmDFWpE99tf",
  "key19": "5dSiVeKFjYUKAtudXS2GxGYg5BvcHjXrNjHzhs5Y6P6vYoCgohwPYsNYWDBuXKjmun1fUjjRXH2WrLdbZNYagaGj",
  "key20": "2Hp4wvaBejjowiZrbDj2UsSn7yb5Pf5tZ81w2XakjzgFzairnUvT5WX1EqdHqDAmjy6NYzaHUqQLayt49Xfz9Ce9",
  "key21": "3APtygHw2gX1kxUiB6NacfHjMWzYkio7pSugZu3h3au3h7CyS7oCMab1DpXHR12u3Yp95B7pVqoKsSSZeFDcofs7",
  "key22": "3xNZSSZvd4CeFRNWcCFKoxmetAwBmoi48SddBqBCvLL1KDkt9VFxoANLJLHySxbQnKFmpkkaazJW1w34JisrQjkZ",
  "key23": "3PrYG7GXcd4JpaqfU6rxhnrVUBp2jkgXLZSjpPnxUsFGBsjaV2EbLbQqgK64GuFqacEEdVHvCFh8Esg3ahjvAB8u",
  "key24": "7xduFmyzukbChyYHD3aX4vtBU3YP3FxJAhT4wMjCLGB5G642ihzAjjDStiL26xboMwCvJJq9Ju429Zv2WH5ehfr",
  "key25": "22wwvvdghuYSJ8k8GqZ6hJSS8pbghMzz1uYqmxaahgzFZJnq1eemA2xGhzY9ur3dcqgUHiMLu4vErieeFv6eWBA3",
  "key26": "62eYwonCpV36NCkNEykWe4A4dLgptEQogbppCYSv9JaEnrRjkGfL1WjhyyBsXvV7BFY2RmoUDsVT2eJ99sXHiF3n",
  "key27": "2cUTnhk43TuUAkpiFQFrUE8nMKfxPn1trnbr7WVz37K1FJmfgL7yz5DqAfp8z7Zu398G8W7M2GrnAc3e89B1fJ6",
  "key28": "4yFjtarPrTCA38RXFyuw4o6S6x37Edx4UEzNrKqYniwm3qAFhG7jvPNSJXoujtWyTdvZ6hCBW1Lo3NQz92V4Pfpg",
  "key29": "o2aPyCav6M58kxzuYviA6PM8dChoRrcrSFAVAbEAmUvVFco8E7Zgrg4jJTfQdqyF4CcMcTaPe7dNo2XxhMLKiqT",
  "key30": "23jWxgE4guoQTDjGLu68BkqYdVrDentUTuEojp3wqnkhds5AS6ypi82wQHwA1eteAgCjPxNMxvrCuUfWygpeQhrh",
  "key31": "3eYLJF2E7hGJTXENmMn2wyMU5PhTPLxCFbuiQ1mk92BEF7wJjhPGH9yyZsanUD9qphcYx8iqdZXvymco5dAteRPo",
  "key32": "61fhs6rKcn8BLKcb3TNZyDruBCmAd8nhqdHKWJDstbEwSpLfXH4cSXtutinnMMKzHctUDAmHztigXq3jQCbm26vw",
  "key33": "2yF2yj6tM6bfzrFkKuz6hRwrSTYJVfL5W3yYR11x26p8EwqW9tmWQsQjx8MdcqcKWwq3fXTgaPMLh8GwKj44wpVo",
  "key34": "2bk4ojkSm7Tq6b3X5CTckDebyc8kwxxu54X9q4PtJxBGU7xjJn5tdrEuVEHVDAJ7mSKXxxu6mxwtTfWHh8Fme2Zg",
  "key35": "54sLndP5PQZEHqRTAVGSiwKxybGuiThFX6FKqX5437nRLHTG6MDYqUWuU546W3E77LRgTrxWqTNo9TG89q9dSCyt",
  "key36": "N9SbFXzVKkHbW4s1DoBEWf7XrcxHwYY9Z81LLoxqZmM2BD72dT94YBPLuaKzq9v7YaeEGYLWyGjiYiVE8R7SnXR",
  "key37": "5ogG7xzxua4BJdoFFkJ1V2bBBMKPcqqsBq1Pbm4yShmmVNU5RW3Kg2M2TUveSYFQJQ4Zq9JNskcyttxo3k5Sdbk9",
  "key38": "3mUCgXbufp9BQHudXHznArsBDRy4HtaFVugrgjbJx96sm9oJFZm8Prubh12r2Qky5wExfiByxWDt8HL5RRnt5YoC",
  "key39": "3vCBRCxt9CE86QdxeT2Jx4Y2Zu6my84y8d2HBP9hEAgkSB6HM8g3s4DL8zs68aHfhoR7Az6eW6w2XRjuszUMSDEe",
  "key40": "2EprhPdSoK3LN8DHEJvuCZM7H9FQuv7Y1XgukmKBwAnrAFGhXws5xGTymCqbsGZaVd2rkpYQzyT5iKaJQCjmFHSH",
  "key41": "43K9bCVUqZhmRDzXFp8wC8XQ6wQKXSV4idpg8SR4G6wHbXSXWbL4dzWy41kAdXzJ1ZgQ9GcYvaHCreNkTRq5acr",
  "key42": "2EXM4qaG9RDQ9NFKjiuEE1cZRVz7rNcXDD2W9WjP7TdDpYR1DHCkc4TeEeNjB5HA85Av6RT4HY2cED4ALpXJB8Hb",
  "key43": "4F6njGcSypHrCXtLV9YANJoUpZHsYeCQ8YiK2RojTGN6Bs755FqaHDiWoskwfHGpQcidaMac2cEMga811VkqKH6i",
  "key44": "4rzgKxt5G5iECjxcxzGLAkiqv7s8UHnuvRbXtFcrZaqMyoFVmuZcUkyWBYsuJ46SinKDazfdV9pgDCtEQFwXsTwT",
  "key45": "3RVEaEL3b2vn84AMqVzmFtPa3kEeLd5mHLUC885t6LQuP3fMJuNePMzx9kx8Mtkk5opZ8mE7NCvftis941pmVXzz",
  "key46": "5NGmxKJr1HhZyJDfWtzjMwAC9KzpNTgDVcADjAtuqDChqnNpCBXrowUYZ3n9ybmhTts1n7PTMvV9L8x2Xb3ymwuT"
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
