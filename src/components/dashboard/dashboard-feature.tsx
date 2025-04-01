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
    "2Hfrp4TA2yVPmNFzEzr5THBeqcCmq6uAAsnAv3tbWbwHWwogdYzPS5jqih1QQWy1Y1jHitt6M26r3cyNJd24Rmnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EiPaeBY1wxfJoHjhvWY2oWAV7tMzV726gx2ZLjaXDjjrC3UfaSiGY7nd6nRd5bAXuBxSDjH5GztUFx4wRvNW1de",
  "key1": "4KzqeuyQLgpJQyGTPKVpQne4wgiht6PTr9392N7tcC3KGSVt58qABgZCN8fmM9osEraNEtjQXyidij5yFBUt2CnC",
  "key2": "3PNSw7ZhM13mtUAxVa25RzJsv4U7Lr88nfJ8vsAsCYuQrsegQPDPpyx9BXXFbngGiXD1FAQdesFmUGD6YyhymzbW",
  "key3": "3Yhza4BBLs3hXdfb45tXsMMXeVs1H5aSU9sZmoXpbvh9KqR7DVQFzeHX5XqY1etW6bR7Qq395y6DLTw31cfBGxhJ",
  "key4": "RRK8pLPQrRfDvEJf3TTcHLJidw9P1B4i7W335tFJ7sYXEWoCioaK31uTj7TVAQb5G1Te9UCHu3SDRtf5uXhKpjc",
  "key5": "ad8Zbb7MyWEvb5H5e6RHGMzED4TJYNco1596dxdHHonHke3FRNeYwYBaJYhdQXeUdVHBit4NVzARkcJi4zdfYKm",
  "key6": "2ncvnftYLxCAsag6xgkR1ZMSY37XmQAQiFRNAcWo7YPu1M5BFFBKS4fHNa4nSghe8ADVxzeCjLVYusM8e9BYgXKE",
  "key7": "586FghqMrimkBmdGBjfkTYbwjbP8UM4UiVQWxvhCU8r9RnuyVw79k2FjtdZMmpDYNa5otQsCYZoosa5URPEW8FK6",
  "key8": "28edcZ1y9xmCk6vmMTH4GpfN5YkLeB7zzbGwEpS5v5eZceaBwTqaJga7Z29sBbHnZZNg7VLT3mAoBRo84yojHQ5d",
  "key9": "2oFiG6J3yqpipVt6JvWkPh9jynY7EUSW6ZX7HRfouuV9MWUp7xmjGiCKEifxfyLNSBmJt5pnbAJN1mB1YVbFu9hT",
  "key10": "577irujwPDJRbsiTF5JexdGk5yNLC1apgJW7sVxsidkQqjbWFwH82tsZWCcQknuHA9pBFCUtk6Li6i23VRv4Uens",
  "key11": "4XrHRkszmRifVR3VJuKZDoCWZv7xoLJ847tYZ3bMGo1THe1JhXdKToyk8hw5nURXnDXcj2DcYxnfkTFKGX11Aq5m",
  "key12": "2CCvHmuDBeGot9bAvtCjyTvDXkzKB5tfXmumBKBESd9dp6mRGQcpoXrsuZSGcVu5n1reqmGyCKQwnHoJbt92UxKc",
  "key13": "4mZqSViz1VixomYrYnDhjrqJBSwkkuYqZaCRHbTnHE9J9cVSiD47uVuATeKZ11onQXaxWs6A93r4MQvtRcDNkYod",
  "key14": "5jGvfokWoxiMRMEFHY1fdSsvnPue9xutQe1ChFLXbHGzpb72RcDUPZv7DeNEzEhk7Stm3XAgUF6Sj4yidks3jSuU",
  "key15": "4hQvf5J6DArSFYJjzfvGkoxweyxmLZadJLfPBmygWE4cCrB8v5ikUzrevFfdcJk9hERZYXh5gMn2Jg1q1XgR3xGz",
  "key16": "fNpxurAchpaUD7NXQfVYx957mYEJQurZ8nKEWSsU2x8QPZab63o3FtuHLdRqfqyF3tKJR5iw4HHx29NpCiDJTFf",
  "key17": "63xtuTMP3jyje3stZp4vuSfv2LQmev8eHihbHXfdsTCr5UePCkUU2SqHgYbUVqrz432aJySZ9bnHTcaJkQEKH4zD",
  "key18": "KKkpXxUkWEL9r5mJgUWMTHpwbopCfCPp6GWMq9rwCz3jvSyiJT57fB6xvQsvStwcsYZTkZb2i7MsgEkxZtMF7yb",
  "key19": "5mA686eWngWsi2PY8y8CqP2B8Eeti8w2NheqxcHrihjTb3XdUG2uePzEvQZSKUiE1w7eA6z89fWeeXs7u23DJmxy",
  "key20": "3GY2sMzPje4SircvXFujZr8x58ombvfBpKtvNHbdTQh4Y5VLzQFBd6s2KQQeqtrfScrVuXwkcSELAjHo1rJXQmg1",
  "key21": "UkHN7NDdwdaouwcXn3B3379uJH1KjpErHoug4FCL2FV1qRL4xTsPgN1RFZPeXVPNEDo1yURqXy6MUjHQzbv5nPV",
  "key22": "37LwDKiNuX8m7UJfbYumi2KZw3CzbAzKjSEcEfHV5AL1myyHWENDvxjJAcXx4qjy1onn6dwocAP8w6iy7G4J4b5i",
  "key23": "JCpR6BbtpgpfLqaobrHu6QKMzSg4stttNJje58YgNp6jAq8RLqk3qBafJzyqhvemEpmroofaQeVDbJgiJx1L5DR",
  "key24": "2EgNEEwdoshqK81JAP1CGbqAcEAxupewbFCAJXHMdW3uZKKDjjeMZwgorNazCeggaiReKAb4fQnoKATyV8VUTx8W",
  "key25": "3bEHRLesckQAaKdf9MBZ8SUCXmxw2SsCvAwRtrifqnJQSDYCfzyYCZ7XmBDfwYG7bwhtncmdjSSY9ZCLzWcx5deN",
  "key26": "5FwPD8Z3UaSCUVXzGbcjPqUCVd9uyXQA9Z3tnq1VREoRx9k5iG43yY7zTAvkFdkqqZ9qTcKLzhAuXbd89RaTn1Sg",
  "key27": "4Uz7ySwWWBdkpyuA6QJ7oBhheJRn8VkqjxrnvWdonowe4Ah4rgCtmMDyQeS3Aw5M6GHosL5CoSiHACo4G7MoBYHV",
  "key28": "3irSFzpJST4BmPtfkw8iHhEU33F986vKitvHQPBRQPFBAiZksZXLEgnnwZ6iBPbsugsXCfJNqmDtf2yoHnX8ZVs5",
  "key29": "5VQWbRZjsqU5tdwgfJsZEBd33aVGRV4PByzMYhvGKM8TJhuTo5bL8emdXezJJtpqvT2NKFxEVfQ1jwKZsZarUX7v",
  "key30": "2hzYZrz62ZEVL84ubJ9Vx6PTWhkcGMTsR2kP79fKfPi7taVv1G2NfVDF5Y2dvRNp9NJTbxNfCJ7ZUrqLBwGfyHaG",
  "key31": "5W7KRqm9ijV5Y82Z7pkeeaNQBx5AiJi87iy1BfRoqt4kQ1pifFQ2wwzxrkzUJfNwz1gAXGZhtQUfYagpig5Nzcnz",
  "key32": "2HCdUY7pbPdZMha28WPxXF7yCFCanLSesYxqw2h1vbcg64b1QAnckLbB8HnoJYXAnXY4rhNzijXX6XMTAnXEw14R",
  "key33": "4BfeWuTu8mYRrpo4UEAawHHS3poqsCXUCiiuD8j6KQPgeHUDsNqu4BS851d6ZR4AD9LUNyqnEJYiJvrkCThwVGoW",
  "key34": "5Q3pui8r2wTcefkoX3zAcFB1A7C2BprCu5d47UzLvwFxh7QyCKSmdingXZDeiTB9rGfVFJgaoFjLghrgqmF3i7cR",
  "key35": "Wt66E6cMf7vKuziUj23vhbGNFxUmES4pbVVyTjLikpJ6HKHqMNvXLH5uxdp3eWYYcwmMgUqVNum4QcJbJ17H7qq",
  "key36": "5UHBqeQHTfsCkNoBfMTUoVzqMxZ1qKwxot1Ta6FXofkmdyfQXy4cRYfzKBmeLY4xrUqftM3CyC3PKq8cR5wo9m4f",
  "key37": "4MmSg8ELrdU9fsXoUBpeBqsSM4tvG5cDd7aSPVXSRpr7J3XzgFPqrmScmtuc5SaXsb9Mn1GmZBri8UV9SuSktHdz",
  "key38": "5WCjrTvAQEuu4V9B8CZiZhBAjXmAXaRSFqSfbaqU94wsN5j3dTSqjFwAQiRdHw3GMtMW67GYsRYejY6JWizqVt4o",
  "key39": "5N3SPovS7PT2QnysKLXMTWbghkFZdRGczL4eC372qJ2TL5o9YGPboweDZdPQTNr6ffjhgDXvgGXq7CdBN2WeW1ks",
  "key40": "xDVZL5npQ3KDv4MvPFfGdLmZ45aSByMHe5gdWDykws9FkjfxAY97gq9BEL3PdLYCeEnqkr7f4sSUJqt2Tu2LsVw",
  "key41": "2Gg4waKRQH5SEjwdhrJevC2stt2MQrigFZYufQjhn2zhBS18ea7i9XW4iSEo44B2UNVeKfqKNiwp882JTwj6mkTF",
  "key42": "49x5Ud47iR12EysREbPpsxMcgkZB3GytaWxpm4kYz14tMP46U3r22kzBynigzFb1eaRJeDdyD4sLwj8pjdkhFyT9",
  "key43": "5zaYmyuMjsEojR7YtTQm4QzXtvn7Z2VDBKYyXCKnQyanxUeUfkBbQLAKyvu3SooLgy6yoxLfCxCRMYDhpboeUpqW"
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
