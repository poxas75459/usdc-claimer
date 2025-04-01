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
    "253xiSBEDsTpRv35L4ChXsoohMT8GfFJjGM85zKQMipMJvNUNdNqAHSVamF9ZkXtPbEVyv9VWBBpipABAE5Qij8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bx7fH3excUkfnBdegG6e6PHzyNgW8b2yNrYmbDiy3j1YPLPoE1Cou2ZL37WRNkYbNz1FSUD9kx9f9Ng6C3Zp2hB",
  "key1": "4s7bT3P3b2Qd4XzNim91hmjdFUbdMvTpQXwn81zGK8rynNMPAvYT7nn38DM1jxNSBExjmECPhsgnyaQNoh3oNTTP",
  "key2": "4fNKhPck77Ydbw6jo18WWu9BwrWGqv8BsTgtooB2gSaRgHtkQS5y9XEEFdg9qiCVJZnvL2677gKeVYDZbhJXDtu5",
  "key3": "4hg7wLTUormURVuDxcxKykHoqi5kc9iTQuvb5kvCc8KzRLM2G8r4KwvmvWVKx5pCNu2tz3vvWAVc6cyYL2NbBwzV",
  "key4": "4NtEPZcmKVyx75LhCg7pSbnDk4d34BZotsUpvcE841xBMSqKCmT9nK1sYLg4faQXindGcpv9xfc3S47Thapg46x",
  "key5": "2LDXtgJaapFcj3EqeY4XPJHJPGPabQyvjaexddufqF6qPHTeGmjedi7P99QVoES336ogqDXv8ea9USghH1WiXJwm",
  "key6": "5XLhAYrawCZZDWSQiNCX8Gs2Vn5HBUhiZycDFbi4amsSVEBUjNsvvGCBhUErkeHwUctHRyz26mCfwBnSRAUUacA3",
  "key7": "2DJcMLD89XpWEh386aBrYesShjhJqDALJgJdMmyGFaipHnEmztomzBbWkEy5jFiKCtQGcai7hPaxxqSBiXKJPGSK",
  "key8": "AqXJrgq6XAJ1os652oaAK9CNvTHWAQk5HguCY2KyzAYyPRRbWadbjoeFRdBC22EsV8AC9DUuzWxngZP4XYU2kht",
  "key9": "2T8WjBuRsBvHJLBEwU3o47rz7HUbzNLshRqcKKp28YBvnSza5Ssx4L8EdXRwoRn5LyQwLKQKimDZJv2va6mYRSUv",
  "key10": "wUWwCDwrU75HsVajfjK4cgBa3oSGaCxq5LufCy1skVkniKPYyJ8JaCdGtYGPF4wkoGDL3xaEG6eGxUJU5rJbiTf",
  "key11": "4TAhhQdQ6dSFPCQNT7JRDPCfCTxUyof6xAPYy7cXXwUgwcdzihUg78DJc28TyfaeHFwnupTvYxno3fS1ge8rTLLf",
  "key12": "4ahocWys75BaUwSy63s1ryWoJDjYJk7pUbFT3JUsNuscXFNsgQgHKTwUg24hhqRETNDJ41aHPTDCUNd8w187Ez9u",
  "key13": "4AhvHBvmZKPLFYJq42rSJPcANLS8RbasCi5v9A7v97VK3DpG9DTFwPZJBzQbiP8B3pagAacAQ3WFC7c5w6naKg5a",
  "key14": "SQ28uuoNf1w94vfiL9oML7cMCtKXA4QRpKhUKEnA6vS1E4Cs17Dcw3TXyvpPn11PhsmZReeW918878byurrg69Q",
  "key15": "5KyZQBwxtiw2NXnkqGBQCzp6rrkkcbYRFJYWRSxygXwneFytQHmmMXGUbapzv3YstRyowHthjebbtsizVzz9m9nP",
  "key16": "2HdEwc9TWhJuXeUpm1QjQLo62KNWWmNQReBF2CDJH64CKx8F2TLNWYWthqLXVUWBSty58cP95qNYQ51ZNimMFVQ8",
  "key17": "2TnEZPub74XQufnrrtY42t89G71zARTfnyPC6HumhoJNuFnxSWbehF2VHDStdAYWAj589q6wq4in8T344FALCprV",
  "key18": "28zZA4fBwnHU6HVmWPbewWsGQy4i5ftFDeNqB9g94zNYMxiiZgBvWMS6bg86uA28mKHavKFABCXcuc2GjXfPaJHi",
  "key19": "SDxtFzMWcEVYEALgNLw3zm2oG942uMBuRcf8mzMf345vBPM61S5U8WWgSru92uRUGf4aeKToDXEj1rCgEpdbryf",
  "key20": "VDHBESeLPvqNW9XjrSFbsuvKf8mZZCA9sqvVdkBNgLWWR8NCDD4PFfBRiwyZiUErFPzQYUTUTSXAa5ybFZ1k9vR",
  "key21": "4i4dYjBycXubE5UQidaaLq1S2wXjZWYjRwd6TAdfaNobdp6BupkdDX2aD2mgqzg8hCjQZ9vjCHPjBpUYWvcvzdsx",
  "key22": "4bWKqj6hCjHLihgy9UKLvjUhcTdRXUVLpED9MZMRUzZXaa8FPnRHz6zV8xY4hgUFX2DQQU7dixwrYCfF82hBqRJ6",
  "key23": "4ntUeNExuo1ihKF29kg8R5kBPNddmQUH4jRPcfEcS1Cdk4UzzHW5CKuoz8zP7UKvsLzRv4WvXCLBDJt4VnRqGbcd",
  "key24": "2tv6XEfPHfeMgXYGbVbBYXDQVhBWGLchW8vg6z9X3uewN6e2wXXNVR2d7TSNdAbcHZWucbzQpFmQkih1QMvGCAjw",
  "key25": "39AxFmouZd9fQ5XjwDgVvdiES6iezDGwLkXyBgWbERPFoc3ZGQWA2KzH9WsKxrWSwdMoBMSHcNieNQEgyj6Kb7YL",
  "key26": "5gRynW8TWbTLC75BVfzyaLDXuuMx96UPfkk5N8P5DbUsBhNBRhWvbgzLfBxM83dV3thTPPN4Lpdq8t8cX9fx7e9K",
  "key27": "2a2FJmAenrZ6CcYGowgrFhy8ARagrZrM7hMXnQM9xD8E8JFNNz8zFL4ouDMWJ9zxyJYUMfX4WVsNmSDGLfbZhHgC",
  "key28": "m68poLnqrTp3TR2Egx7pVN4XLCQv1Maenw23LmUudWFRXvyd7rqRPaARg2QBRW7Zzmk369J2VoEtxtiLWUSzZ6r",
  "key29": "5G9uHZaJAjLnbj4E8uReeVEAR5oMTDjJpNsLfEd8BGXdAx5jxacoV3J2yHibWEkTatqfRhpArq8ZXkyZLq5JKrNG",
  "key30": "5mS7a2NNX67zhLukqDsmpfCoNmoPWHDAyddEgnWzWy35rVJCD1wQXwY5wi8Fc4FjfXo4GRqfc8WUWZC9zCSadRnU",
  "key31": "2xfQ2K99QQEZRpi48nruzEQ3jdvXr1WTcAxMUZnWKnYFi6df3BWVagEqNbq7Qpr8puJHx92UEQ4C6JfXxzaGqZ59",
  "key32": "67VjNF6d1A9GFf6TZidSMQXsciDXwGBQLpB4uHCCdFPrnQxQzAgynePMXf7YfcEqyF2jH85WwvqrrM4guGjkyGTn",
  "key33": "2JhEGC8CxABr2HEH8es4qoSqofUU5i9CmavsAjcNcUX5fcYGQxvn1noxp1uComxQbAq7nrf2ThvXsHCyp9ejGnEB",
  "key34": "CnwsTVnFkPzjN8eDS9PTGT8jd2SroCdfW7SCe81xriHcJTfd3GjFphrQ4niYBZjzu6sMHxQK6pr3eCtMa6eLx1v",
  "key35": "5yGFeXq7exJbZtZCsnqtEDVqvnNAwVfKrcjhEjkB736NQmtjsfiKgcSM8B2UJv4ijh6tqXPM3NUCMtpJryac32so",
  "key36": "wyZgQtrgu7wLY6yCxJd4CvdrFtPW5RYUGGkS9kGqM7awfLwxuiqmbvae7PifbanKDdNTVW41EbHmj3DmqgXJXHy",
  "key37": "u9c7AU9iZsVqdbpcuPrS1DyWnmRzir9adNCtmBA2ETViqL53oyFWdppNSuBeJKVgmBkGGzGLfKfdbrCBRr3qgdC",
  "key38": "3xCCpo4CdvgWjmc1BfG8QBWQh2mYq4e4Qhkz3THDGv2BuRwCJWtueG2gtQg1oDGPVvsUuutaFNvUJpQb8ozyaA2J",
  "key39": "bLkBXmUi1gcwXAYmxHYewWWTzqgXmzbbTsjefBW4w5h4bZbjyYmEhLa7wDsUNjZrYm4nL5uprwR6XZ8EVffLqFi",
  "key40": "rJYm5diqbMBK4xAG3NZpEZac3HRFoNwin4JXxy6h3Fjgso5yao4jW9dsmH78wHHJypWVa6y1WCNDrLf5abNwua5",
  "key41": "3HVvqM2nt1kiggDHD5Gpjymn6AbkL1xfbMbE14Kp8TuG8gpmjpJx3eaF2QPYSmZVLdoosCxAYEYbm59HDvwxwxdw",
  "key42": "NKNTuvrFstap4w8Em4UYDzizq89eCvcihtE6D3nKgatLvuXSSrso2HUjydHG7y2VnupLLZkWyV4y5hes5gW2pMC",
  "key43": "2y7xnTEKS5ud85FZcZ1eVQNsVwe9bXwPLLgRrscjXpRuZGfMBsPck4iznLXPZCaWEjMNLgwAH1Q5ZnoR3t51CNbW",
  "key44": "5PPhYwB31aZiYShcA33Mays4HgedMiUKzHNRPbhcu1Gqr9ytLGdVLa4tNmmQFAj4tKzDnf44V5jJHysFBjg9ivnz",
  "key45": "4HwetvySn1ZA84SToPrsF86zJHokBiYsiNS8AhubE7CJws3EhryM8EYoQ7ykTM61FyKqDU1w9zuZ4vPCZVkGNo2P",
  "key46": "3kdStFZph7HXv6LL8grtRqUE3gx3VK3rWBe75umy1N6foPmFfxS46Nn6UE85r8KEsW4DWCK63Jny3pzUwT2L4goF",
  "key47": "2mKqLWokaWQgyX8ctAe9aAqEzaikcpRR7wPw7oQFYRC2Un894FMtBqX7sKy5iymHfZ7HicEpWck5Xk6jxwhsBwjN",
  "key48": "2SNULVjbHWy6scsUiTNZ4U1ZUCMPHV4dW24u1f1xjBbpACxpgM7P8C1YfYCaWppkkwjoirA42a1ULn2Hgzb8bAfX"
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
