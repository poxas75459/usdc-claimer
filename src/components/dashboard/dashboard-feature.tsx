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
    "5oSK9i7LV7Cx1VYqy5yeuLRvM8VCzQdd7YBG3KdSrX52YY5JpAvQMkEk2zniHN2fTPVbWjzA73PkGHyAcMQtxSBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKDRuUiFF2gwNJiojHDxMjWpGWuHx4ipwBXixUrjiDmg1WTD7Yg1MD86iJR7QxtTFDWKZzySQ51ktVx3zoKzBVR",
  "key1": "3oX7R5AYnxukJKBoAz11aVvrNYBzMC3UXJ3f3hF1KNig2QTPcsLxATcHS2bvaXJCVAdqvN6yywBjK5rAxDCgivMW",
  "key2": "jrzJ8yyEo1b1FT3tGs5mFtKMtfQM98pXViaNv5xey4FzyxBZH5bmhDZAHhFCsfoMBhKpfXyz2fvmS3dG19kNRx2",
  "key3": "3YAmV1ohqW4Yhqjurk5nHfoPiidQepjCqJKBvYufoMvzr1FzBoKfUEmCW6DGPM7M5FuZPv7DCSQns32qVdz8AyTm",
  "key4": "25JbozVHpLe3AiRJgRX1KKsprJDUCsPF9TpqAhxWvPJR76ncE2oiXL9a8C5ufic5MVah1vmtAmS6uhJFjnxT1cDN",
  "key5": "3PqHYea3fG3RiXqQZmCcFJu9VD4PscxKmE3d62VhJ88oBbBS9YCRRUGWC1QKWqza1zrFobNCgP7UPB2eViPnGwQU",
  "key6": "5DDez7tqVwZ5f5nMu9WkxUL1gWSa22tGyrNwgULNg7AtNCt5WGbNTExQTX64ZE6EsM6bupTT8ZXRBm69fmzV7kp",
  "key7": "bq7VtKsF2uJXDaXiMuz4fQ8M9yNvenvxY5s7CKXVwPM2axAjkq8qKc1BkweZEzpcyH3zwRgZXqucxxhpKkt3ZrU",
  "key8": "29sRJYB51Lsr5xSGyYb2CyMVnMAgdbbCqRTTdNrNvPfVc3b5vGASzMgdYdn3aSwXDnPritEomabP7hPaxnpp5EWn",
  "key9": "59yjxytVSWi6fb8bt2sQCsrRhErC5CHmB8d47sJvB7rQa9yc5FF1akd6rgSMTnwYJA83Fb4XLDVGneH2hLbt3uxp",
  "key10": "3ivdLjEnyEJGQ5TxFXSwgF9FvvbSTQHgdFTfPr1EjhddJGEZ7wQXtGvVBqYkdiAexg31KPq8aCuBDDndkKucna5S",
  "key11": "LcaJbJvqH98sqnZ5Xuzw39fmLm5YSPkdaaQr5PfEXp3zwTpcSRA6ESfHiMwjDYFpHPptnxNBoeGFi9yEHrDVgnf",
  "key12": "4HV47Cj2HYZD6fbmDbRbmTddL8XCya9FzjaMVq8M7MqenSpr79CfjSG9fTDsRsVxdSjS9skEXxaqAsP3mcW5uVCf",
  "key13": "rvFWLDNn989a6rjmLVPwL71d8kcpiQ2XSv34CfcEtKH3HP8fAJqEYRunvEFNQWSVZ4NQwUNYxPVc7chApzqqcb1",
  "key14": "5j7aeHdaRneVnKsukNUXa2ab2dMUMH6xfdf2bp5V7VEo4BcF9AsKAQ43KGdzEXvEKsJRf5Xwhhbd3MW3CbwTuCiH",
  "key15": "23ptKDfnHfybBHHAbpMkeUQSjwRhuS72BsWnjJHNTUDo4fLtWWC5F6q58MkhrAZgUAEz8BtfqHZHzQqGYa6gYeoP",
  "key16": "5AgH5v32Pjbew24w1N3iAHr8CH4S8PhTodiWwpymQuLYEQZWQTFsLX43e93ASB9JfZZ9Avow3C7poRzzGNwYiZD6",
  "key17": "3pwpPW3mfGxWmCwd3ux5Ep4j2fD9Bt9MNiTdMREyCemXS5LLWXxJFpvxvyroqDNMZp5MoNgPWCE8joUSdrX5KyBk",
  "key18": "kJHPpSDyuzw18hdhgK8eFTsVqdfCAy1mEzCmFA85eLLoFdryoMcbv4GBb4W8mC2tphjjAhLo7fYU2svffBVeevJ",
  "key19": "SYcxpZ9Qx85iyq4sW6Qq9KMhLzWy2v1YExbKrh5hFMxjeVFeTTZmmEfEd58i7G6s7vkN15qKtb86QxXaXGi699p",
  "key20": "oUWMGvt2yciX21jQCYpbLc7UCZntR7isAj6ZrFDQZukkNxWqW3FS37qgZLcVvTJXHNm2g19v3UUpeuw5oYVt8un",
  "key21": "3zcvLzuBLPbdVrCPkMPKxxhxBKBmsH4Wkn5v2d7tVbTYDxaBKTpQEQhjQ3jAB4H1R7j4aa9DXuQVcqLMKoE6UVf6",
  "key22": "rPU8kXE4EvbvufnxeH8k8tKJWgH18CLh9E8wD9yDgGjeURM9RazP89WY5LqdauheEhMUHu4L8EruNywWiQVXMbM",
  "key23": "5zmteXRTXZUhzYiRnQ7XGfuDgJtJprigko5W6XmCkeUA9CWjbqSpLPkaw4QqL22CnAFB73vstTw3w2jqxfQ1deWP",
  "key24": "Mz5sxpdNWJhDGcSxaSUCeUyBLUj5M7Se2xEmJiZewSE4R9UWgPBUB5rEFK1ysBPxTa7au7Uz9MDzJLvBhW2vBtw",
  "key25": "4hf57nhy6ytbr6uTNPxRk4fbpg1tGTFzr5wN5hNfcQbyzANrnoaFRQQNVtaB8vRRZvNqGkzNMZoT66dKKg13zv3d",
  "key26": "46zamtPwm87aMQSUvRMnmjUCdicPzrVpBrHe5NDn9bWPLxR43F4QGfn2JGNSDRuH3BA5Xt1VzBNBhhfEgHFzKPXL",
  "key27": "5tCgJAvtUE441MKNQ3yiEKU6vPvoEirhC7tDbVdcy7xxFm38sfQLZz24BVKFdFuLpUyJMVW9wW6Gs7ku4dowsMFh",
  "key28": "4mxJZnw2yRfZn8NPvRoT7eygF92AgqWPeRSERTqxjvq57FBYKjqHMEfnULDydEfob8Ja9JgxhcigQvveo7hEe8ya",
  "key29": "e11pRaETw17oP7dMGSciXuyMveXiUSTgHuCKHjpzZSLQvACkvcsi572sHFd63Kw9vKRhZ4Zy84oU8Ej7JyNkEAX",
  "key30": "3sn8qjjLPKEkULj7WmEdPEgoqFRHPrPRnnaPXvGhgxm8WCifFH9R1hHmmLbghsXt3zMBsPvq2M7nwZXYKjn5re6f",
  "key31": "4xtGwumTykPkona39eX28vfZoKDfJ9Wt9jn5cRt1JoSyxVt1Txe83QN4z3Tzr4iDvz96k38jJQf5Xs3xm8SkQSZp",
  "key32": "KZR9r62YCh1Ro1AYxDesdjoN1ziJ4kh8srnzVLZWD7QrAf5c3LLYAFe4K6yzRkrQPBpAhs9WxZxBcgmbRRcL5rj",
  "key33": "232ZmaPn5Z9a4TKa4MQva7byeVwKQphfXWKsr7qMif3JcbMwhK2sPXkyLr2P9wwgqb9Yiam7hG3Nb58rCjXAQmer"
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
