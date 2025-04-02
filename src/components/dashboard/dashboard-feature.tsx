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
    "5B2reGZ43gkjZ3wo9mV2u7jpTURkDJprDg72SdMGJcnBH9TmrtznGUxCwt3eLjXTeJnCbfTjzkK9L6RciCJnx8L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ok3vxoJFaJ22ooiWcYrkHJY7TCbFqJQFvXy69td5YMzqfdBShr2ZA7qHEnYrA2SVJ59ycVhx6MY6RcD6iAW488B",
  "key1": "5M6koQYdr2GpVUbZBqrEeTcVUyJyZ9Es2TddpTF9jiNnLzj8VJbEWe7SXxYN75q5iHkSzxA3Kd4rUie8EN2jViXh",
  "key2": "374QVP2Jf4mQ7UNPjokaanQoRFojxruErLGTS7wWuDkA94EPeLaRuVchaDRJ4dFXrHXdfsVvYQ5Dc2qMa4kBjvkJ",
  "key3": "3ookmpsKm9rAbKfshr9UkGzE3Xr7ZvVKfufy4JgGmoB3aeD9yU4VhTLU4LD69ZxwXbqNSgHoSNhehVWkEUPQFPoh",
  "key4": "5KSBJtVNAkx568CX7Ku1uBvq4dhKhjtuYpXm1ZSLEhR8bt9o1SEaFZ6dMsLUXjh7TRf6QbxfNTCr6PnX1oYafESq",
  "key5": "3gRwYr7bbD6vDWgVVaUTRGWBwGdHmBRYmUk7AZK4EZHWzg9d8JsEJcQMhvsnD7NiCLL1stYKFcomdSjbotMM24q",
  "key6": "cD4gTpEaqQ2BTNkXjeEo9CSicYbadHc8os6ShHieeLvw4w2WKoo8TYedWTW8xC77BbAuAGkNWd5ws99akbjmu7p",
  "key7": "3CAnfJMfurNG7t16TLnfJoxyDQ95KW4k6paXqdQnBRkKSSqNS9WjEfSuHLqfzRttXj8xzfQ1Egc14Wx5kY1YcD8q",
  "key8": "2oUD3M7FZQ6FrKBcuPvPmPRG8p3Z29kn7rLkv2AUEgsa1XD5vxyBeyGQ8Jx9dF57MbGWGNLbmVginm7mVeaTuK5M",
  "key9": "3MWFo6C6rv9C1dcjXmWB5e9u79ZbyJUoCPvaHATShY19W1RkPpGXbA5eck9scH1t4EsnvD2ov4PZAwEDNw37HPY1",
  "key10": "54uNC7mkB1Sr1xwAMT6imChMJT5PQWARM8fvYJ89SHCemchZWpVSLV9ioD2Vq4CgkvyDsGTQPGmHsppw7a9B4k2c",
  "key11": "5PMbSDVPV5s61wWYam82rwiNt5oKFRagK3xh6JaXaTWZwDRefPpNmaSsaUs5182WWwYT3cDD3iJ8dVJD8BUdC9Qs",
  "key12": "2atAzCY9PSYNx6DDDgNJQMacSY2Gb3gfbH1pmfKYDH7XDUccuM1qJ8mVZBfZvNDjxSRXAuvXkHvJnN9Wnv8G7mKz",
  "key13": "3dMDj3dKjRFxieamEx3Hs58PUPZh1Dpak4xDAb6XRJeFCMDRjFSbDcmvhXXbzV27XdKCDWVeyQofAypgNeqEgDcR",
  "key14": "5Mwz5MPzdrjPkHNmfPP3hTaikRCozHhJ6S3TseNwdT1Nm8fiyw7Gj75QfWixjodDxmmrUYwHHcr8LLxHACFhNiv3",
  "key15": "4yjzUqacLNftH1poSaK9s1ssBwZ1Z54f8tFuqpkuHrYyb9B8jZ5D2QMqhYp9noiiuyuSfq5xmor3b1izuHMPZLof",
  "key16": "3CTruXFMnrNQx6HPdgWcYWKvkXpYgAMUEnNi2sVzLmeTHwTg4BVEXM6bWrwygMhk5cvggSypzgMNMFa9U81YhZbP",
  "key17": "3waZhcBinZ4SWczP2xhYs1jMNwBR8by2RCqh38cuGQ97uPnTuzPJyaFDwEbsc4g96E8PvaWx9e8F52uPUmgd2V7Y",
  "key18": "41hpRsxyj7uZphCqUJXU6js9S5kGL15tteAEqbEyAspMhxAgpB24Ur1h4fWq8jzzZYEDhrppQqAjMtx4DeE9Ggoe",
  "key19": "6JemV9Z545n21hWFnomNrVPGJoSy4eBdHtmr52yS1PFQ7ymh7QJA6LExDWEtxmGuLynmkwzRcUgR9E28KEqQBik",
  "key20": "eL4RpziwbkRFg1J2HokDMjk1AZTbkdsgHW98onGJapBBxUHwES3dKuVipFSoocSHbtiNdsqSZaURLtnfX9K9Lyh",
  "key21": "jgcMbs7acMvXhsB96XeUugNdrWAZUdgTknQiFk5PatMxniaGq8TQ2A1zXiU6nF9bdbY21qySzAdwJhgH9ttnh8n",
  "key22": "55sWina8qj546nU1ySXddaSL85dLRdmn6mjTjmRggU4CST1qNiiq1GPwrbon2F1CRsmoeHZcAJPsAgmC8kJVrkmP",
  "key23": "4D7Lmpb6gEHHZVUu7PHJ8sXXR7EzbyHi3egwLp2Y3gCk59c55bbS434ujNF2XqikroauQTeVRALhGB5zJGKW3Xtk",
  "key24": "4x2AoqZ6CrUorRZy4UjTf2TpAvxtbKk3iahbkkdyNeV9zyUgc1HSXJGqy678MMXen8p6GiCLZxKcLj7RWgCErz7Q",
  "key25": "3NJJqi2smuYoaTRuh4mYCadsFK1A6yeuuDj8un6o3LFdmvbS7erGwSXFTMLd7YmkzFED3fgG5p9hh65WBpDzkPUH",
  "key26": "5soHkqVUszsr13PsZKcX3iwSCamvzdEoP2kaKNTW7qGxxKF3fvxzq3L51ab5kunx9Af1GCcwG2saXSyk3ijhNoqL",
  "key27": "2MxCa2Bo2MYkpkh9weYDs2Jm4ymbUywBSMEqXfM3dHFXGvSm9acMMPWM9s9At61i76fywrNBLv6FHppsULwnn7qw",
  "key28": "25K16rAukAyWL2y4DZcKEsqALTM1UVHtgKAVLVVnWg6Vj1MSWs2BcUxeWKehvxoniXRhXpA6ybLVAfxMe64tLRwA",
  "key29": "5abWe78hh5nbyuGdyuXdThcdbnaan8D3vK1ajFqhGFfdJMrbND4FWfHKrnd78KaAgCM9KgEwATj4v6BURUyeNhZf",
  "key30": "3BYoUZhEYVnqxv4Q1eaS9rqjzDeHCyRjqZNJgeKEDDQi92eeNz57HN8jUtq5yXn4pZEccvaM5YcH937Asjv5PHBs",
  "key31": "PS6etpSvX4WU9S9oxRmTExo7f35RvdFgUp9EaacVUdj8mbfgKDNKnfQ9TWtdd6y4xHYcZUKi6SPShGMmSnwT1X2",
  "key32": "QAknYQpV9ZBcteiveAKUtcRhpZa9oYWYgQT31YWxXRCsvTGPKWuezhCZ24GZQgL5yrqsWJrHfKPpGU56mGUysTX",
  "key33": "2Bw8sm7CG8i6bQqkovCkri3GUXxCEj4VLvM63KS9Cu5brPf4KMi76vyuRfrtdbo3HQ9fygwse25DfnLpU381tTfo",
  "key34": "2u2tNRYrvBYP7SNSqfQMHCrvLMFFrzQAn8h1WCzF77yvjWoy7cQEh8mLEZSHSH5Y16jNYJmS9o7WPRiujZtznKLL",
  "key35": "5rDwE2Nhn7PdGNUEXxN3BXvmzWh7t44zZJP9Fq7pRMAYfwSTEjNqTXERPeaXUUhBWNfbfrR9jbhea9G5GkkRqpXp",
  "key36": "3QhgkcN6XktovUV4YA3E6W1zHDQFPYa5gRSstx16jk82EFqyfPz8ZS48La7isKgSQLoaswgf57D24uYfWfjFQx8W",
  "key37": "3YLvfD1wWe82xZQnjCRzHDtgbuDAzcmAq7egQUJ15zoeJo277eNvLwYhv6CUS49ik31kK57dWkpyfyj1j8D4y5v1",
  "key38": "3P9KoLDrCwiHm27xJ8VDGZH979yZ2enSjukdFZpHxGSfG3qrzG5LBZLqBrWfapBisE1GdAacFYURkpowrKxzmUcR",
  "key39": "4wVZPYxHFCz5J8eau3wKXGm6jxnLaxudFMF8ptUadDqERecrrkV3Kn6UK8KXkpN4QS1c2f1r2tMp5pSAogKoAU6B",
  "key40": "xkSUDAsDdB4hxBm7PvXq4VmB7bLGVb2xRwPoUk96ktic9SYFcRHAomzVmSw8dzxCYoExhQmnh4kFsSkbdfwG77F",
  "key41": "5jMBrC8aiG288a5bE9mU5cey96z1jTLAhTqaozrGUYbxjZSYmqE4awNJB8eayxCgtGJ61intmSgMNrN15JcHiFv1",
  "key42": "FcmNM5sepq7AU4u4i8udzvPExvqMERrXDPdW3z5oqq2XdnjdjtXgKteLjMimL732EdCKpwzrYyFNmkb8GRQEupc"
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
