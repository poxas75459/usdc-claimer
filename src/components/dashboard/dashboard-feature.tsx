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
    "5Nzd52YHfRsWJF2oB6eK1vteqSxGmuinag37a2buhAiKTWoHQun4AwzHg11CBy5HQgLXiJFmjZY1yc2kETGTUsC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o39CwxnA7Kury9nAeKEo4vC8iwvMwM7gkaaW7B4BngB3CGa7DCKLFJWA1QkXetFY5dSE8HhsSwfBCQxy1ZfmdYD",
  "key1": "3oi78drQrvdNGuv1SjbbeNUaMUTpiZy9r77iEKja2DB5w6xjSKaeviqn3kLFX64Nsohae7Jmc6yCU4n1EySPdYm8",
  "key2": "PTHjv3gnYT6jrfxZh3M2CNXENoFUknT4ARRQDKeGeEFwwusRmqfqbpwB2iYAF86md8Q87AgtdaZE2L3G9FNV4h8",
  "key3": "4x9aUYzY7PFPYssE3rY1LAxkgK6gPioCXFfrqr21XHFSFLXar4iZyDJeRfWdqN9WpiXgBCKdmUktyN7dexdKik82",
  "key4": "27CW9h845AUGEvyN74sHg7u9xCpW1UGc6iQyj8VK1FHGeYxUyo4RodW2ErPKRZpVqGZ4jLJCEZRj6NAGDiMangKo",
  "key5": "5tFbhatwSxUYTWiWsy11AyjDYeoTtQfSAhfrWcxoLEgPLuzVsHZ29cesmzSuF6TM4WAPUsrhDYixG5hj97Bh9eP9",
  "key6": "3KQbYkbf1MrwfkVFqPA8F8yLVu9GszKSK42Sd1KDqFgMwQ1ckKqkpUPNbKZd3AumczoR9HZgcNGdmKuxfHScBHws",
  "key7": "2JvosAM7y1dwjbV4MFLSiojUWJMzPWMbEjCaRQmj5koHvxh1jNVfQXFF3YRASPcP8xn517gCYZYWYYe9xPwYaC3N",
  "key8": "DwhthBSay3JCPmZqaq4MWPH9QzHKUhMJf6ReCBg5tf9fzSvMNDT1ReWBEAtpshzxYeW53o4TNPsPzrgpksFixFo",
  "key9": "4kdodwS9ECfiFAzrjwURvASsuCiDDZdZ9VHSGZLQBeXp6nJrsXkLaqXrr4GhG73hWr7kGsfjY9MtpKxPkKTaH4zc",
  "key10": "5vFVxVxTAUo4fojAygFVtbrV41W5tDB3n4fKkNXdTtZJYQ1vsQ5Wsqyx3t6WV6VLWj2cKDmRkTgj6nh2ikwjFDgu",
  "key11": "2dyiC8fJoZCDnVwTTcvraJDqMS63Y1rFEqD6YyjfMgRGw5jQMFmnMD7rBKDfFV369yZtb49Ds4RVMzMA5CenGWPQ",
  "key12": "5vng6CExTR4itdsQAAGSjnZk1XZ1PD3Q3z8MTSBrPjMn6MeUiDk2ipvB7PABC3xAFPigPdL1JfRXnmZ6djcPfXZQ",
  "key13": "2L2hTQFWrKH44qVPbAbcRKkT31tiZ5kUb31GRZUFnsdWVY5kXuqrg6UYepjMPevdLrg1b8VSQh1EBfn8ULsqcn1m",
  "key14": "5tzL2ZmtBi9jCV1cR3Cf1JhKSxyMrdBRi2T45tCXNAXuiBx5RyFKaht32x83RKoF4LBH24fGTmXxkq9eVEmYkkQJ",
  "key15": "5tRZqPwccDuNGuBJkbZWveehKw9mR6V59GWLEGBcpkf3ivQ83t7PLBbKqdHW9ZUturuE4vpkJshtn6jndPi2Bdny",
  "key16": "Snp96dL39DgmANUbieGw5KEnJzxszhbdxzJyfNKHHa52GBLEQMG1kRnytK25mpzPTgQTpSgCZWfC1QnPknZC9pf",
  "key17": "NFbbyvBM7cBL9TnA2uggBA5dARAAugzsnwwK6XpvX6AMuJRxNTt1Q97ofj1Q2ckoUrhJVjo3KV3rKGvKLoGfbKP",
  "key18": "NA9S1eRJHaoiJAn1VSvX8ELEgaEhQg3mqzsVhViNB1wXjoXYrLuPunT4mdAfN2qVL6ikPNfJBFh31yUGgn1bxV5",
  "key19": "54CkaWxc4nGQYWdKtPW9AwLLXFQvnqKntNQdpkJn4RAGrkth8Tfmnzp6tEBfpLDYPV1ePotL16xjJGPkaJRqQTxd",
  "key20": "2UNW6Mkiq13P91DZDMYnGt7AfR8tB8Q3dhvyJbJeavSEFrgdpkPvzYGpgqpbPv1rRFVQcL74hfdp4iETjUVWYWeh",
  "key21": "4EYgDXa67sZBVZJHNK6wtfAGsqSyk21p2juw18erocFzaoTbhWP9WdSP4fMjxQfK2cfT5BhzNLSUtXpiW35u87BZ",
  "key22": "2Fihm8LAqeZv3RNDinU2oHZxoqhue37bphirrpyJgN2b2HDSAN4J1QBxgajX3z78ZRtF5XuibRM16VD51hHWg1Vu",
  "key23": "4h1tsZCD9sJRNsFzsNbhU2HLeHFi4tAwngJb9w6z64DsxR9TZzTWsEiV9S6i1fg68qHey2aoKBTGoStCmX9Yre47",
  "key24": "2V8hsmFYGTdxCQrTJjj7eyayx2ircdwmSKkLc8cQeYb3YqoX3wZxw13nMfuak2bh7RmGaEpPMsZqCkqgZdn2YQtR",
  "key25": "4gEL4WcagCTwx7SVB6s68awTwB8ENnrhU1jQaJWZwS77adovvdGNn9RW4qbwxf1jhoYSiib1B6fhXwZ6W4LjANWm",
  "key26": "3K54ts2HPHF7DTMVKGQZ94EmCGXr8Zcf5KkQRhb4MTRpin7qC4FM1vNiqfwXgSL1gxcwc7dN7GZW4SSGzSC6ANKu",
  "key27": "4ZwxK79t1RgRavNDLi92drY5hMunEhj7ifm4aWDFN8XpMYCuKwdrkWRNujnKsKNcmU6WckDdcUwDQCyhUDPmJEXv",
  "key28": "2nwwgLeRtK9GNHRGd9R79vpxHgCTGjsRLhR9gnGS5ibL4HrYPjvCXMz21eNZ8uy2bweukcQfPQjmyy2bKdLoGjuw",
  "key29": "3Sf22XLXKe2Fd8vnUQmuA2o7TzAhJDkLrsZUdVP7V2UKmnfDEew6kHRDeGpcArXemo9uFjDxJvz9M1w3bPq1rjUd",
  "key30": "5Bj7GaYduSpBD4vsLc9HaYv1CRbvbujhEoo6VthonN6kQ3HuFLLJAQAdUCe2QJvxjJcUaQBLni9Lf8hc7NVnFuQV",
  "key31": "665vt2twTY4K8WftTqkMTXWhUU965FT5TiTTgcFh4uXuifbdwDyGzesxTfSjan4VFTVtUXviZisYbx5BaFAaQ3Zr",
  "key32": "2QT95MMZ6ECdk8WWoxqSEa9H1zwhvbCSS9VyyeR56Y8APSdH67ABfrTWkwrVMJy9PUoUQZSoLQFXPLnXKuav64k1",
  "key33": "326zBjtDeCe9Bnw9wvhFVus11638RJ9NeuWxnBAfgedNKazoVguZ1zaBacxcjXq8eJSEc55WNbRzfBHKYnWfbjpA",
  "key34": "32V6ZJxuVeYGVo3L4g2Db2rrNPHxizz7igYrceSUVe6QuKigP5P9BaxGDYSjUMmK2nBtZbRAwgxo5849yQP11Agr",
  "key35": "3dUZf8yaiDQtgUy61Q4h14CdDGgYFe8BrUvs8AUmvKGQBe8XiNJKYsgYLCANjeeCtfbiNs9h8JG1QCCikgeNpFBz",
  "key36": "2BqR4KHBNgteeB34ZtJCGLWyN2GTSnPrjhLTuo28LTM2i37RfZzDUctwgduBCHaC2GGYVB4KVyCoNsVTqQKXngDJ",
  "key37": "5Xk8npX4PaqHPr7579Et6NwXaLQfy2XT8JxxVcPQXFB4354jjdekgQjj5NPpxcGBXnqRZ2khG4arKMzkPLssKL2e",
  "key38": "3J4GHd4H9wdbGYZV31ehrk8Smfcm4p3WiQaMJZoAkXcjpqU9FVV9b41YTKvWeXxV2S3EU866SdbufH77tPT2dS3L",
  "key39": "4EXcFWqUR5GAqWqesgeiFFXEtTFQ2zZiuiPkxTDt375qKDLYXB3xpQuv9mn5rCZdMYGqGy7igE7QsmPMj3hJZBDD",
  "key40": "3JSjhaMQNJgb24LwaJCdnDZBTt1hdH3Q9X8k4JMLGLQt2AURziDK492SXv4BFgriYxkNhtFEBntHsTzAcCA61jqv",
  "key41": "2E9xApgZ5WunQpqKyWQoVZnL3FpgjfypkaZ3JGXggzoGdpwfgWtsMAKSivC1hd3brzmyBoDMr6AYUVUVrBde6RuE",
  "key42": "WEQowZNw8rdj49KPmLLcrXJxHekrAE59jfhKn5y8XGHg9TddqhuiuMrMkCm55rBWGRfG9PQBSnNWa3LECCn7yMD",
  "key43": "3KM8jm2vJ5dhzLWhRomeig9P6ZWJgSdqwzz3fgGXcjYknFG9HiRztsiJaB5MYFefcinyr8XjtA3WjwGdowWzPv1A",
  "key44": "5zByvVztXo8UYc1hKyjankyYhgbp1t2eX5JNL6Q1ZRCuk79aqRAUnNrC6XYz4jvSne6mAgxdZuMN1h4voQaV3S5B",
  "key45": "5aXZ9bwJBFwRzfJiFcQzogPB4AQLoKNwZcqyQKLTmiHFGtguCDMUm8jZ8n6yzqqN5TkDFLRbJBo1XsMdFzKErxHL"
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
