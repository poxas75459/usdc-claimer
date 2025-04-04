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
    "4HCiyibHWkWayXGcj9YaXnVGB9PJDcVWZPYTQFM2WFcQ6cTQiHNBDNzfbU43uYPw1f5rThsJJaGYxrR9PHw2xDeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rY8dpDSBuxKLbmKdq97omNJjWfmyfwvZugFGq2nnoPTs9dQJzNNvx6EJE1SSMmnyt9u3XxrwPCuBfbbncA7i8Fn",
  "key1": "52r1gzBmSLvHJcipAJuABzz3WatKveCL5qzvpV2KoA93N2CaXtTmxsUwVTEFb5mhAEvyDmGD5SFpL7gtuKoNMn9t",
  "key2": "67Phghp8oJENYxAY4482B6Y9PpbAjEEzp49jUkvd3ztfBHrRWJdDCuPDZTEDHR9RZP3XGYggzbVviGsFeMAy6kDb",
  "key3": "2CWjxxM6JaghBqC5u4nLrxh8ZvfNi7oDm6en9BFcQrw9aZnoaCrE5XkvbwiUFivovBSLvLLHm8BZ713SKuLNYund",
  "key4": "261doK5k7ko3fyJCHGsMXt6DtLhBz5xRTnTfZQAxQZ6nt5gZ5H3nKe5AYtsWLiyWQpKTRLgH8ZGE8PQ1a2kENz2d",
  "key5": "5WQ2ZzJ6UddYvasRpYLhgzzpZfXwzqDgrxdwpihtpCkd3dA9uK5vFnmuhzWzcmpzf3DZcRWK8Bq8wxQcUtR8s6AY",
  "key6": "22jh8Br6QCkhUtMhauHbxVaEkVFbZxnWhgdnpzx6UqUDCRZVXm7tvoQrMG9msG5xGMZCnnUEj4CkxKh9995yQvRG",
  "key7": "24M1fpXgGyZLksRA2D9uVToxUUH6T1SdXAZWBSDZAZiSS5zF5kd6hXxkbEQgcb7xkoKyagAaGMQC7DEAaUT459Ax",
  "key8": "3UVeG1LMtQ8g3iK9yoF5GdKA6vUHWYWGmrCDGCB2mHSHuNbHkK9d1YCzfo5yVZyxzbECXs1tNHcNgPwmGP6eFsSu",
  "key9": "5Jh8nMANj834WnkyUhs1y6H99nupqxTwQoDrW3RsJzCaY6mNsyBkPi9aMU9trc2ganoGVrVneCZfue3mj5Kfj9yJ",
  "key10": "5XFhhqUWYBzR9TqmXUL9PVoi6qhE6FvCNVGyjcXd5yiYhu8VnxMBEHwSyKvn3U3mUWjC9xmSy8FPX6av6xvkcxB9",
  "key11": "3zmNXViLLd8bqzXpxvC1yBq5d3BYbNB7RNtnd9iAcLddoA8A5WU28BLjFUuubpWSR5w6cbcM4ZzUBQ9TEE5eitHX",
  "key12": "64fmJWF8w9WrqbwwqtuBf4Cb2mVg8uKEEJm44Gct4BBDivhKSU7xFPHTwq7usAtUdCSUcuAh4KRviia7xQ4oQWaU",
  "key13": "qppbY3RSK9j1Bni1zs9NtR1hfEYwawcrQfBChzZw8Ws8a7KwGe8x9Z6DufiwkpeJTL1M1zAVH6ij38kHCg63r12",
  "key14": "4dkXdBRZZXn4C3B3RtjBiCnZYakkXtD9AapZMJoAd5JsbQ1Zwp6UrqeAY5oPT25YtEwX8R6UibJSqCaYC8yautPx",
  "key15": "Y3UZT5ioLTcgMh5iJD8YeiSMpHbwVWao2PVRQdXMuYqNDpjWXmaCwgSRyn8XV6Hxs8gwhFLZuQTfUU2S2ETPfxH",
  "key16": "5aBkkXXMLAFvjGLgjoPSSXNXWT77udsMJQTZPnvPPQ5QYhHaSAy7QWfFJedkwG4s2cUchsA6LaekJEU5mYq5QSEe",
  "key17": "2x955EwTJjxaoZFtJ9yyFUtf7kMfmp2gsruDk3cs7ELimZ79t773zWh4rM2yFmcxXkg2dJFmzA8xfMMmTa5LTx1K",
  "key18": "o4dM1LhCpJ5YzsFXgvTtZ282vizb1H6nczAtJKbw6baCYwR7Gp1PZfzsqPsG7WUMrmHraeM5D6aQW6futc2dUQi",
  "key19": "64PHQRvRkbk9TfgqT2CAKgwwRjYZCpug7Eo7Gw7y5XTnXkw1zeu4jEZdaQBxNMbxfNvjwgXRBTXynEqv5d9dwQej",
  "key20": "54pa5QMSyzt7VLWJETPqf2RnZVFjKvv2A7an4u42bCGY5jVeaoSusyeJEgmDkaDSbms6VkjFgCwekmrkfjVhkYnu",
  "key21": "52imT5vhUn6DKe5ted4Z9W3YtcNLmF5jDNL1KoNZxBpqEFbXEazfC9qvz69hj6odTz5brxw8mmpQv8susYSB6g3G",
  "key22": "xaHPByGaaq8cECoaNvtoPNq4d3bCt3dU3WxEfUkb7XH5oxG6ZrgMWKtUVh59sQqGLkbS9vLkCAGdwbtq51sWykF",
  "key23": "43NEMdw91QBt1iSFvYnJUSXkCgMsRcCMKiYDRXoxYaWD3nEgJbYifxoZW2VGyc3HBv8EXSYMd8PE9TM3i7Y82USJ",
  "key24": "5Cz3GbqE4zQ3MG8zNZJaBMwyTVyJvBnVHR2eDYrfEPT7F2tgRoGTd6kjMwk9QQAyLDBJuaWbWo868j55V3nPZ1TH",
  "key25": "hNjoA8wJ1uXDVTAy7xNvz58su495z7WHUGDC8uZ1rgtmnbtqP2NCr6sMF47fPwNXDQtoazotPg7PdMUFtct56CM",
  "key26": "35QQsKiDpzHPdVaKavKLqrnuiwjq8VAUmScmRF4u8Yg2pRboJ18rXhqLXfUTD76bGhhsb7iXKfUtMSoWTVmFtcUa",
  "key27": "4TCPtQezZKdd5pU7rVVbKFdkPvPHaP8y6mhJaMvRiZS8BRVvcwXZwUfcAhGtSyTMU6Mm3z8DSLrGFgfagvbSrTHp",
  "key28": "5hAHjhT3bPY6tV8MgfMgANsV1nyPBdzbRCW7cEYuLkbPtLaBTCnBtnUxZ5GD6VRynwNjWB3ZRajH6ZG9MmyjFTSf",
  "key29": "4kP3C6HmzgJNvffo8csjZoyHvrKoGi7Ry64Z5WajL69nstC9mNG2tvwCabdAYiWPCeBDcztRUYgRcqGQb6KMRd8J",
  "key30": "5KKtZYGxjmz4JFiXsEBQAF8PpqE9iAEUvbYfgPzbgR3Fs3DFoNzMgCHuE2oAuFCm5GtKc5avktUALyuS6h61Zs7z",
  "key31": "2DzXScgxvywM7WFVf8Qyq3FKbipoFNGeRWsHfgrznh29BUUpYUqDdEoHSX5U9gYnpktxv5FVkFfvTSxqmCoBKaiB",
  "key32": "557eFAwzvNxjzwNDbiGQWBxPnmDxQe2KV5uap3BbkA8mjDsMoBWNjjpom3PDsTwx8zmWSBu4QuLtCHjkRpSfavKY",
  "key33": "37HkvwpaNFBe7sEwvaBaZvtsHYahVamN9UBGQVDvmDqAELFykc5TLZ2DvkKPi8nqbD5DE7x47iYwePYTrYN291P3",
  "key34": "45iJGcteTC8UdriCxBkYr3R482fZ8awE5TnQHBw64LsAKC4WDgv79VPYXNc1FBWXj98xs45733REphjuEFaJLxvw",
  "key35": "62htQhd8Cy79FihmzYbfhT9vb1jZVdtjS75FpYFZS478JhoDcnCCRWfiS1JxSekjqGDANJFMiAREqgef6qe1CY7f",
  "key36": "5PAEWUNsjZjeZNMLVbBn5ebSiaVESbMF1Fu1JomRbg7mzp5p5UWCUBD87QxiH4s3XXy7RYKFqTqhtBCoYCfzJAE7",
  "key37": "JicDmTwtqtHM6jjZmr2PmYFZddQzS1hg9d4sh5YsqcMKEtqLSHEuaBoj6B9MG9cLRamGKi5ewYsNxdLaQZvhkbo",
  "key38": "2iiMc3qRqLzzUNF5RZds98S52JyobAQ5TAon1yRckUCcacgVz9ktExnYn9LaQN4t3tLcrnoHeQEX8ZUWyKvfKTgk",
  "key39": "3JuZTApAj69FqMGyrdZwN6La9XJuSCFFPTkemirjuQk6DPauqDUjM9Btoa9tYDa44SvySBMrvJCa3MxLpqjRNDhT",
  "key40": "5qURRGnG9rpkJ34BYQi8BZJM3buQLMGJ4u8uDAQL5TYCvSJG7ABLtcvTtasFzCcLKcDQ7uY57kYQvRMdvduEQBTR",
  "key41": "3c4PbF71c3ZhPxbpdvtCKNygwkh6tTs3byBBWs4BUFiwxb67MT5aZ5gxj3ZYK4cLQot1PDbRq61DuxSceK2hPJjh",
  "key42": "5erhnCjWLnTkfBTox2TotFroCnvmugCXkVvt99xeENYsNBuGiLBbBhb5oqY1JJvMGt8bRX4JFjEdEbmzuH356cas",
  "key43": "2eS2WFbZgiSsNkWfeYWJtu9T3sNG9514gny3WBb7VwC3w5xLMTvZh5ZoAZQ9UREpEtVYD27KtNMd25qKqCB5eG2j",
  "key44": "4obHAboY9iUyfYnF17aoAcVUwednmp17RfXwoURK99yJYezGn8ntce6CmiTvL7hY1s44RiSEq9BKJYM1ExTgFw54",
  "key45": "41kAaTSTckjih4mcZi2BhBHXLYobLm9daBRb9pPHzSXoZR9kdaCwpM35KZam49HphpuoXEEHf7Q193vyXdRb9w88",
  "key46": "3YEzgx9sX8YwVcwQ1xK5xSJCwaTnmwwYm8DfKAX7zyWoPGrKKWeaYyFE9VbXUrXJkUGFzgo7RSGR97h9YAvA5PGE",
  "key47": "3PudZoJGqdBiKuxkACmnB9itTj2DAjChT2F9gt2VWKt8keobQAZ3DTraR8fVPt1sqrPZAL7g3MqREDQcs5KbspEH",
  "key48": "4dyeN9Gqyf8pZ6UqruXKCd9D6T3DEwjzL97w58iyrW3cuAH1iTAxT84AUGXgvTzRMeTGFYhLQGbagYzv3AbhpTg3"
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
