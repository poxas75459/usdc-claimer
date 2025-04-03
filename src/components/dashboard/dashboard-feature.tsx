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
    "5FWdkbvE8aYM8XxXDV18Lfj7RQukUEq8woUr6qi5K3MZev9oP8TyctrXmLTPZZ7SNuZWqzR2Zib7rzYbgeXYDzzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orG9H1dimWJJYFoBz31XD7B7zzoDRqFRfA27BNnSE5RrFLhZSyWyzufNAXTRWoFaYuvZ87GHywYd4VrPQZ7Xnr",
  "key1": "avWPqKsNr4hqa3AhjYbFEDoqt527MfSjzRb4hcYzAdGcLmxaDh7dCAE4kDBt4zsmL4CyCGdzj4GmcgV8rsFi2JP",
  "key2": "5BVbFe6GAZa9iMQS31DzEGnPJ5aB94JxoKu69DDouwCqbn6aWGrF8TWckQRSERNia1G4XhfAaUwvU7Jhvaa8QhbV",
  "key3": "1KVSpZu4ux1Bzkw2smSHRdmKySKrUWYT38E7HKLMDJN2T4CjzXF7NZiwe97p8ywnNmwVUZig7VkAN8AT1woCiYU",
  "key4": "5QvZMUNUzkx47UBFDyDRZmmuP8tCQYFZeQRk183BV7VtVHRkyPF7zczXh28AZLUy1z7A3692UCRvMS6Z98sAzrkq",
  "key5": "3WaBGhXXfa7KMnMqbvjK9MAUrbKATm9p5uUedzweyNumffTkxpTtbwnRigqqq8pboSCNdBzQ5KnjvheqcQCRkhAx",
  "key6": "4wDX3d2D6K8Cm8BDhnYj4nVpEiKttfHpxmqmhDnnQcFTMtXJudeg6JUKF97w2FWLe58jzgA32LSkSK3AznvTXLex",
  "key7": "3Eby7BvRNd7TYa8xKuDbZb3LMo3MqRw34CuWm9YdtYUX54vzAXYdE7AvbJPUc9ZmZojavcUbyhKChFzKqyYBAEhD",
  "key8": "2MJ33nvbNKzyPH7bp2v5EPkRhqrrwNxZiBho33yiuV1t4Y5qCBmYz5J8Bf3ifgCmHxsLNvo5zNKDDYYxv5gHA4Pc",
  "key9": "3puAfV2m6MvroRf4GtnN8tNeLbxUWvAdXiDCetYuHfXLcYLx5UWdAuQTcYTNQkCHovjSvgD4wzBhpcHNNAJdmajK",
  "key10": "2R32YP48XtNsU5fWKm8hSmDu5U9VS6JpQQAWqheyx7xy9aS7DpwE8LuLwFJsm8mXWRmk7pAwdPzL2JLeAc6SJa1S",
  "key11": "5jNQcUTNYs3BtKPQQph3zJa1iZQYbjuLsWKTjvYY4Njc71DzBUmTBmkWqWVwST8Wr9reodZUVJFUxewUq41Bd6t",
  "key12": "nefvV3z1bYD9rPTLst3Xa1pzp7A9P5sdK8jmmyMXQsKXuM8ikfaC8BNKcqjjSmwFbkHzFfe9twqXQwKrspAZBNY",
  "key13": "2PC9rUR4eiBjZs3nYa4zT3sYBqdbMpLumdGwhYtQF1m7HF6vBXwfqjugVjXnNL5NkDxUhdcxuei1fZ37X2jsFK4c",
  "key14": "3drnKapozJ6KDtcbr1mTN2Ketcsovkf522vkwubdDKutbznXvCAms6c6uQXLedKX7N8VPbvaFfXogrQCEQ9KFCLb",
  "key15": "5z1CAD7mqPAEzBPR7yyvMCbZPVSbbFrvFy59QCLRRBTFkCcDSrqWK5bE8zjfUDCqZyGvRg5M8jZZh1HokKrU2NUQ",
  "key16": "3we65tNd2a3xnkEkvxufAqYeatiFsKFojA2nFuv4V7XrAo6vPdY51HEM1QjyQrFWaLJTipn7bejQrtkiWNojXSbg",
  "key17": "W1jxMfbpBbJQRmUoUuzZ1MqXgEfSTZDJfaYu5pxn2XH9Y7XmxMRcinKwX9dZpKebdNv5cvreysft7TgQS4mgciz",
  "key18": "NxS8r2JxStqfexcLMZzPSBwZuYv4bpKeq1g44PV2VnvjdoBPVQQApfgqEYQqkCrq9zyPUYHV1MRtNMP9sstspJr",
  "key19": "2mWqQvtXxrSJWwio4bZi8282RyqhWqMU1cYkNAGzaoqLt558JMigvxkUgMgs5Y17Lkxn2bATs91rsjAygYeV82Vq",
  "key20": "56CMKhUYktiTLecwUJzUoaNxz7FW2HbKpkWV2AuwZJhdZBzzuen9xUmBLAnfrqoxyYcYYatKvNgrmKP2at1ZoHBj",
  "key21": "2RPcpCD35Be7xqGCdh7aiCVSBegdthNQhz8JGkuS7nVCZH2Wvj9XJVVp8GJpUx1fLhZgvsJJSRcRKkUwFXbnLSNh",
  "key22": "296Vfii7MzfDiPx4T7ynJdMV9ZehfSVcmUcvTHLNihByRkerww9pJTnQmfCo9mVd1ifdoCY7z5TBkU2rBwzu1XEf",
  "key23": "4mXMqTmXhKnW6KN8K6P9mRmvXuDAyWF4k82mNqMdQVaHYAsHZhURamR9Rp2XWGZsJRaLXTJ3FPAJuQ34nphzNo98",
  "key24": "5Jw7XaVLi9Y9BBcJA9aLH6BDFNvUamNJ987BmLX1onxhPjdYSA5MNmF4bAXxZRYkbycm3higK8XcXnmEKFAcp3kw",
  "key25": "4csyx5D6HiWvJwEBNNGLaw6zHpr91HLeQ8G6KLoV2fHNbQWSERoG3SUJkUaZtEqVT5tmoP3WgXjSLkBYyqRXHWDb",
  "key26": "4BnediE11ije4Xjh3Wjex1t1ZNRGjCifSw25nQDkJLLzbz8rdpGNE1RGkvET9hw9pg8FFvh9MPTK4HRgZvyYi5Se",
  "key27": "2JE6AZiPMGeQpnoXaRwCN2py9gUKpZvmHfL8emnzsE5AkVXG67VRziLg8NiP5BgdntQ5XzzwxobjFPNVmggHtnGH",
  "key28": "2rVGLhpUdbfkGKS4j6Baj59DJWv5aDAio66zg1dLjSDg1YG8g91gLX2ocHWP8vRybfKgSi78RARd3k4KR5AVf57X",
  "key29": "4YFPtnGNgWvpGMmJqqKp7xQjCfVug6NhAMssy3ePpy5JsNFnU7LMHCySRDtBDRsHXAMHFqNQgQ3WtcxtaXNGMu4i",
  "key30": "5xS3dzfL5N1a4fsbRnen4Tw1NH1TiQyPypRAtLuPifVn7m7H7MYzov46JKxYr9GPuPcQ6ihifkf9f3Zy9WAYMygp",
  "key31": "4QyANmMP3VqLVzb7XJdEp7xUQsUJvSYMpm43ecGu4ShwN8JmU19TjdPHE7hEkwXhzyVyktJ5UnnCNfbVgL8uTX8Y",
  "key32": "3DEUVqUKFwEkFJDPSzfhae73Y1yAyHuFXSTyFtBGL71aKdfx6cpiGGp2Pwn3QQLPJZaT6WfjSdjk7SJNxTWEyqZD",
  "key33": "YYaF2TsyeJ9KqSnVNB8RrtGqsAKrjwAADLxXJMou1DJ4NavYJmuorcNg96egTujwCgmQQfhw7uZ7rHVbyxKwPTU",
  "key34": "tDehMQLDnf42N9KJ6u2gd6whCVG6QUSfSBgRiYkgRq94ni3drdNWyDLLMW3GtCLtiLjEePiDkV9aLxuHSk7K1it",
  "key35": "5rouTJReda6nMjrPfJWBZEAsEsV5oG1ev1zb5af58ccKFMd4V1KeUKRaD1MxmW5AubM6RG9wWhMtKn6f6yz4HPy5",
  "key36": "4tH3JhVKRahhWoXdYHMQKfoLunZtsj6Xgc3CvEh1X87p1kB57syKpeRAiAPaukWpjQzfUqWwafVVFBAGfmHbVRcH",
  "key37": "2JNfLB6nJBA8FwLvUAqAsVLQXDsdEnezotVPdHQ2M86WAEpVfJmgXpFvE3gvwdJfvBUaoWiAvJ9sb9g4Rmc3o5YG",
  "key38": "2cWihzpUR8FSSJGZvprpqGqfErQs35UCWEMxncFjzDQVxYFjZ2ruG6Svn9hQ8pTYt4U5PzFSf8jpxavRcuQEJu2T",
  "key39": "nPpuqBBthjFF5SwQBq6MLmuhwMgurnHt9qZdgzXxyLxrMHSgzLdRx6zXPpNUdYzudXV19fZL7eJ8byAEcKnBns3",
  "key40": "47ESm7FhHa8uTfktcmaKJVKyYGfme1jRX9VSA9hmeckBwUthQ9m4TAKJ5vQXuem6pFFsQbWENzjKM7wYtgxg7vyi",
  "key41": "3TJPCDW1hF5zfkH5tEeEjhhk4z1SWGMiFAVoEWpQr4jDrjJcHzccbMqoE9dkXZHKuU97QTRoiczX2bwdkb8RR1Cg",
  "key42": "4JWQeGHD3XosujFnFKF2CTwcjeqZfnCB7SJ63RM2y8AgqNT3E1yxMewRi6R1qpxFRqoC2PgPJdQZBqLxK5vD6iM4",
  "key43": "3wBdqxqD91ZwqE9TbWVJrcjTfyZom9UZBDxARD7iSf2xTj5tZCoZi7ahKJPpJfn4bdbkzb4LEgLdpXSzGQnMWwpQ",
  "key44": "4efXC9oF5ojdKWWJHmADHVLQPv5Gq8DSwE466coknpqbxSCkREyqoaLowgAgvXRWFezaDme7qAJcwEC23rUqtRht",
  "key45": "5P2n3qLXmq7jMC71zAdgb7L2KgKhKLmtT1SX8mYzWPLed2tmYZREzo6WeoRFDAVMbKQA972FXio3vH7KBqLQ4PZz",
  "key46": "3SUv8XDPJ38uFHKEq8cLqCeT7iQJQoqqdu7Tq7cu6Q1fF2buWYEyrjPrLeFcxNNEok4GoeBca9CnjpuhCw7jPYZ8",
  "key47": "2vneEWKqR36sczbfbCv4VzLbeEsYKvBafKsjeJGVxY774ZoGMMsE45xGDKAy84RgUp2bmx6NJ4bPmoHhcj1LmTPd",
  "key48": "XdsnqdSLLttTCJud8qtEEWS4U9iJume8PHdmsmvszMrdyCNWz6df5yAsUahbYJ59bbRZkN88syTBoNPrwbgPRqq"
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
