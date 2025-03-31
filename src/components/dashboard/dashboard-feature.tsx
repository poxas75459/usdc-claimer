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
    "5awqBqJwy82Em1JEZvwCKF1Kq8FZyBk2p1txHpLMXG1LdcyFDfTjGsaoePPzVmpWpxE3wCFaNEkgjPYKBFnr9Q9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdmQEoH91w7wmgZK377HgqNj4qngCsNk3vfJBfExDAJvGraK2MGqVRycS6KzBGhvFqqWqa4SAWHVW1Zon4UTDtt",
  "key1": "61xmCjVfkRC6f2wKfiYW5mRX6EwyN1KMq8RBJfTeUNxZp995NP1GdrGeeRT2rRfHj5bgvHGFRd4L5qpmVR5bZ4b6",
  "key2": "2AgM3ZFq7mRHFTJBuRFuTkGWzkuAeNZTAjRpLHLEXBZQDghntkGXav8wrmAayWeikxZZAwGPKGs3dHVHR5GjPvLd",
  "key3": "4LLoif8h8JknWiM7pNoKyc3CeCzHWhaTm2nW44nBCnF7S9Krk6xxsko5Kb5YLqvXQuDF3xBRWmfcCujYWM6ewwnG",
  "key4": "2b12pVT5RM8LwJaBjB2na4LjJkdgPqBcruuSEUzQ6jUCx998z85eCLHjk3jHwWuf3LT2ES8MxyGXm6tLNWqpcAdw",
  "key5": "943tvYTaCcW3bTRqV832sHCnSRU9myamZvEzqB5Sy8h9VrofucFBUpGFcuEE7q5bwFqdPKfWMCn4iVBKT4iwzr2",
  "key6": "348XWXkUXdbtZBJCAzBAyP3AinfVctSvuQFuw8kemQQdZvE8aHNAC9DpAMM9HojqffYJaybSrjWC3A4gERJPRTk1",
  "key7": "4Q2KNsZ2FSTzUz2oQ9sikHj3QA3UU2jUP3sfmUZ2AtC9fGr9zxYT8cxk5vMKuR13nmz2uFhNV2oX7Q5ozXrJXhe3",
  "key8": "42dPTqJCr9kXGzeq4Td5r35JqGk77e2WaJY1HurQkxfBf7LftFsZUcrk2bKppjb8RfzinsW9m5T6ZPTBQsmioowG",
  "key9": "kxQfq8xP36KUQ1ozrUJk7MQBHde6RsZ7h44K8VB2STr1cjL7Zpan37QiEZDNWnyH8sQEzPYtRnfWy6N7pPpNBWj",
  "key10": "2H83zqiouPJxZbVRVZMDrKcGsqo7zN8b6H5mh9xStDPCugMQoTpof2oj6smxBW6zeED73uuWQtUGFdXbxsvATTai",
  "key11": "5PnbcA25qJBDZdoHdiqRAp9u3VuTKGCReuJnX7YgCgZXZA6cGp2zEP7AXtqK9rjFthuGp7D5P5ubom6EWK5EMoyn",
  "key12": "5YK3Xp1g5dK3tJ85dCYxNyHH7wcpJ2U5bfAyCoLZxxLoWZnP3L6P97zRJAQwuAEUvqwXXmw5dKm1gNTLu2HQBXjf",
  "key13": "XrUqWfWBANMCQQzXNgayNfb6s7cXPxg9L5ssBjaK5PyUwFFJKxb5ySw3yo48DMgyj3CLdwA9GMki7Kv3xBNWEXM",
  "key14": "5536La2yv3KFrZpByUmiccxyBr7Vh5wP9E9SvpQ2f8saQ9L2oswL57RXag3pDbURJ8SeZczBd32Ay7gVsfYo9i2Y",
  "key15": "2tCUhZDubwpNPpRkC7UDUyEDSPjri29g481oSyaStxZCuALfRsEwuF7aq4fQQExs48pMxdokzuT2vuAdspdMWoqV",
  "key16": "5ME68bEawnm8eaEVEQtvJUWuvLUNiUEfL1BBAATKee8PhEfbTrTut5kiqASfJ8XwnHGb2ni64iHncdyJHqQauuym",
  "key17": "5FydyzXpYL1s28DkZ4EMSgVoTPNsDuU96zmv1cSxwkqRchqfK5vP7R3JzYuSc49rFD6keTYjWKme1xCrneo7dp8K",
  "key18": "5iFw73C4wUmXWXPjPdBQje97dw2kK51mg4E6RpwUt5VfjtKdjJ49eDLo7fGzGSCx7mGK7YJ3daLEKEbLmYorneuH",
  "key19": "3bTY8qh7ttGSEtohy5zRWeQkHpy8iRjBDRmTRVDzsc5faYygfjuYHPWwdZx8Fq9dwyehbAchAhHTy7jUaLfkbosX",
  "key20": "3h4nEsCYV7QGnmEouSiWyCg2J1GGxduXWrTTErMsMHK1sWJppJNcJaxZCMAhbZXxGiYZ7xriqEBMUJYyPwJ5SYRL",
  "key21": "5dNv4SCHtuqkcYSj6M6wsbp9Dk5Q7t2u77y661SUWmbU4VC9mxc53zLK8NR2E29zcf9QxiQmZk5yLjjQgtr4p7kH",
  "key22": "5iaSxUHaxjJXrc1MFuW4FzH25c5nxENmc6rARtHbcNZ21zEXcZsHTCDKSz1yyzZhrD67uaZQjsiZhSF35qxrPd1i",
  "key23": "2KNBkL2zUocFjMBksks5FPgrKKB6CqvwB9GZJfZFMcrbPmxsqi6ExeKfkc6SMVn6XiaJoySgyr25jKqEJ76zFsfE",
  "key24": "4SNJCCvznJFob2cfrYtaAsH2ZnXCY4iRo8wcyGv993A6Yx9Ew37mUbBgkvra21rmPw3wSJ57TFZY9kWMsZK3WhRr",
  "key25": "3SaJeJUVbELEBJzT1hgKSYHVUvr5Sz5MzLN2zX8jMoTKKTbCu6RQUFook7yaYQiSQJkcff6RAgpPfAdxBSxaCy2K",
  "key26": "3vKotokjQKbajGY5Z7e7AgNNGKQo9yn7LWunL1Y6umjjedy2xHfgF6NvqKBXudHLVwmDhSzygo7jr5xHeTkaJEM8",
  "key27": "4KXxsxydi9kTGZEkcdHnyFubQjczirLSF4Lda9MgDQfkAQGBG2cukxL3VmmJFnxby9kZxzeVevGpd6JzwwCr6iWg",
  "key28": "38CUEZfhY9Kn1gReR1XWkuBT461xqqfcp6UWU2c9rt3yCsiB8p6SQn48exCU45xuScmENWdUhaTht7mbtQunAQFQ",
  "key29": "3x1MYrsQr1jHZEtiistvUkZ8s8jBDcdiyT24ToaTfsNP7svCbFvyUuiC4y2W5Y8SmWqw4EoL1szPBSW43U9m5LXU",
  "key30": "4kBYknrd2kgpye9bcWtHFvWpkWMvQGRJbgU4D6wvNcJqLqhJZ8PT4Zs21Hbf9qZutiuhbyy4AfMqzzMUW5WeQVZ2",
  "key31": "3AUbbJu9Z6CSpCqBykQuZjCME8f57t1t57ZirsJAPVyWBijYeopsBFdeCQ1BvDJjnz1q7Z4qBLgvy7FKy9WUB9wB",
  "key32": "2DfNs5ziAfvdtVAVVQ9tw1t5zt9ynHYUbKh7DE6mJxhdcMvYVUH37Xq69GmvsrvZH3HWFRa6DEBbLRDxSXyjtpPM",
  "key33": "5XFrUtop4axt9Ue8bURKBbgc1fmU2QtHFtPS5RdLrJGDxJmbpdDu2crBRayTuzCzwTRX9rSy5WKYfyuYSeUBehWG",
  "key34": "3CoN5xMVbbFCz8mwCo3241BCJYfeupFMZ8p6v4mZVuGwxvoFxmNv3tinoRUhWt1k5mpt6X88pPrzKEDtAjPq2Dfj",
  "key35": "JydhsRKFMnE71duCAhPXqEnMYt79swzwAM2y5HGC77oKmbxEfuN8kWyrvtxt1mtQHcbPQQgDWyA5bh1LzAsb2S7",
  "key36": "5A9Uc1fezsxnFTdG8iXvG4CbX1kyq82C9iM5FdjWTN9Tiwxv6eBPgFP3mHZpdYiaU4dqoa7duASwCXpe82joCkYP",
  "key37": "xy9gwD1VyFvFwipcQgankzJsgoV73kDkkUraqSg71Nhvg34eR5G9V8dP4dZLPYZDVcjuFimncFV6S8pHc1J5CVi",
  "key38": "xCFxR5LUthhk8SLJkSUXFwJZ4JUw48QhcNb5RQBbc2nJqUYCpLKjYxtLWf1tbhnmhDZs6HP7hxoCwy5XbroNUFE",
  "key39": "2VkzKwxLTaqUD4Fmk2oV1AV3fWcJWKb3dkCs4k22eUePnjGpz4BWPYG7H5iUyvV7wy2bdgswyhQ7gcZy81u2WE9f",
  "key40": "2Qd6KK4d65K3Qy1NAXj6aKs6Rw3XczCvAfgXKNu2emBv41c7i2Vd5hdaPtjwMQdo395pqwrSARZw7Z96UtMSWk6b",
  "key41": "5eF18seBtWyt8Lgh87DBoyErxynkPnbFVSfoRfmqoHoFf58p9Am7zQmaKZPcFCg3TqWjjZNbmeRdpERqNeCsjHT5",
  "key42": "646bX9hSF28jjqc2HsEz5XzueFWzkYAMX1zL5MDXihvydmnirxcRp6WoB6kDCCzT8wkCkz8Z4bj7BDUbqGxAGLfw",
  "key43": "24R6NBuH4MagvV3KSYReh5mxCRLP42yDEqVc6mUrmp2AjG4HFwCqwD53btuDpZ4xcPruWuoTBR5F2bfVXoR4YxQS"
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
