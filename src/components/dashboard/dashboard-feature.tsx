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
    "5NgsMayPQ4P7WpBgqCM9tjb3KLe4kAt9ymJBkbWuQ7Xx7bvCkAoDB3rpN1GJDhM1TiLazUCHkTgAhDvPxtQNfbsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtQtDiacAAXU9bEUMGAsvPEhqxiGZQ7mRwSpn2sB8AJk7QNctJZVnVow5YfMdPrBkUphLJNWtGY4xKbpaQfRMeu",
  "key1": "5xXvaDR7X9AHmsaAJfAwmmQrPRLrcTgv5PSLqTvbR3qSTHNNmf7ikMXJ2qEq389u311WJqy3gPJXzhXX2oAK36pw",
  "key2": "R9A5HgCgG8DhrUq43j1ogzXT9zBtrRzjgaa684LEE6fCizHXjqPqTBUN55M4reBGY2hKqWemFSirJjJDmHojmdu",
  "key3": "ZN4k2xkDRBQdHEb3SVc6Yb9tPpKEskJygrRemBq6T1YqciJpFDDBukpySBDL3jXjKAp7bokS4vBzYD5hnr3V5qW",
  "key4": "4ngxsnZJJGsZzxwRYcZ9Wv9QpVTbnK6JK3ZuUNi6T5umyZianhTwxE2X8Zf45V2PQfUUttmTj3QoNnGE61i4arFM",
  "key5": "5qWmMLLzE3GifkjBg84hooUzqGg5Vz2ixb3eqU2AJH9w5nWWCYtkbMd9r267NUUpricV29bX9BMpuRp4nsDnF5tk",
  "key6": "iNPn3R2t6wa2cCqcU2qJSYRceUa5K1mE5oaj8mWp6gEVdhqRaAFm1UNuURym9ZoaY27sDGrDBnVSiVCL9XFCKqz",
  "key7": "35aMHaDXiK4bVVwpFVKsabJypr9RE255LZ7uwiyzwp5x96eSQWHxZhQ5p5LV1fhr4Xb76VHJx6otTXdJskMvCm6j",
  "key8": "DMsgQBDuziczSs5D6wAKWkGDeys5hVKnDACDapM1P8tJ345PzBTsScr3vFYP8CbujVXes3SQnyjwykX2Gp8uHLL",
  "key9": "3PVfBZjiL6B44MxVKRUxFiYT1AAPqYcy3bBXzT89Ty3dFdiX9f2KS7Dy1rFv9UpNVCgRCXRqucRz42gjEuGjXNta",
  "key10": "3KM56XdvWmj871htnwKieM7DdCJ7vYTNUG5f3umDESA6AKboHD9iudoSSrHbx6RiL6YWWT21xcYWtLycob2Ex23s",
  "key11": "5BgiPVQ4vQPxMNjDfoVa8mo5xQfTmoJfiKUTb9sjzngfyJQQjGnotUiDqd1rdcuJA6NX16ip5em2LQprwnNQ5wGS",
  "key12": "KTndJyQqBnwhBMf7bPS2w3vQWWz3gBLwNHMq5aMDk8XdNwkk2XXLASCgvUi2VhjjGcST6x563TpjTYxxdEBHX86",
  "key13": "4hkNVTucWNeLhqhc52CWT4TaUhzKc9Ms5nfNYp8Kh3YutQHdh5HFMfhzv96NAaHU3wGyrYuAi2a4hSnZSZn9cHac",
  "key14": "2Nw8Q8AkpDzXBxhzR48L9Z6XJMQtURAoWpVemPVJiWBusfk5Mho6W5rKbFm4yvHiyJFsTfo6j9LbbMLyT9ZN4re4",
  "key15": "cMiDp5kkyidswHiws67vAjR2ovqV9VXVLqmg4yKnVV4rVYMZUBGyxYGq37rFf3ckSPECxFVB3knVELcoF8QUNm3",
  "key16": "5mabFgXfLSGPiSCZjeAQmuk1tG9riB7U4WJqXg8XUgFX2avSz6w2BrqZSEvU9dtsCXkbQ4wzCBVeebahZQVJu5XP",
  "key17": "4EGCa8tjNc4g1ykwTNh5Rk1sQH7Nt9xLs1h4Wu5fXu6QY4PDwzzeVPmDRhBGgE5ZUV6huCHunHQRxQc3fzEozxDL",
  "key18": "PvxpLJe8UQhigT18Dnu4SUQwSniu7VdnR5xJ8L39Ng4BqJmgJ9LhUyCFWh5UdpUysEMzB7kbtVWnwJyjxfzAUYp",
  "key19": "5SPinhtUAzeQjReMhQNwkcs1qMEemWTbbJ3s1AqHryv8RotM5wKPAp4ExV3X1VZWJoxQ8bLSrGpf1FvxSfYmR7BV",
  "key20": "2HYLeQKtJmX75XvgLvNkFNVSJ5doFb734r9BaPjthC75L2G5PeQ2HrsP4KRER2nVymnRew2n7GgaezgWS1H9rQuF",
  "key21": "2p3mHXKtCyffrv9MZcx1McaKUvp3df1X2vVD5bNjZCBiAh7xJmAmmbQ1hm8iA6Gaz31MoBoQP4QCB1d1Mko5YGhB",
  "key22": "2c2sbbDQMue854jv9ivQdPKc9z28vwumUmXXmKJCUjQFLBGqHnU54yLwKMiMLbGr3CEx7enQ93YzJrr6iDdHvRPw",
  "key23": "638WwUpJh3mjratZYLiMU5VJSKYYWxpuD952GDzYPcqQMSrPpU1pedickiVKMyuwUpZe2ozpWp2466W6uvP7f6py",
  "key24": "41jF71BVnMCXkGqrn38eBAbzsk6GYvXwozMPA2MaTC5yo5XBSSarLEvXtWZtApczqTEoN4jqc9W4CbRYNXvYupfK",
  "key25": "4nMvjm5toQThk9trwSF2Jog6CoxQ7kkkjhcHqSRVgCw5FHEGWLECa3rkfF4fg8wQ91JQ6YwBbWfVJcY9QjfrHckK",
  "key26": "4gMvVrPuRov1jr4tKQQQCQqwGHh2ifNvviZUsmygitCEBmmbrwwAwG1jScC7UqioiF9PFiSWuojwpnLEWgSFSCfp",
  "key27": "3YmjcWJvXzNb8mL5Pz8WGgmeg4ieR22kx4DKofYbCma3vRGWHyftgYT9jFkrvEdGD7bi5aJWot7uREhF91ajCi7J",
  "key28": "5SVbrbbHnPVHAgyPqrKJwzJubcD23DQmZBfk7UjUiCCh2H4stm1pVSVn3PPfcnXQY9qY7jQaiCJU6vYxRVj6zDbm",
  "key29": "2wQ4f7KZGkhurwYn8zA3HmUFN4vrWh6CG9q7yPburYUSXjvsWUu57YSRw6SrexfcwKKQWxKzHDmiTB2UjsD3TqSG",
  "key30": "24hChNTQ1XWhqDJu3KXZJb2K8CYgNsZ4cZ1wwcn1sm5bpGMABgQHX3dVbwMYB74VjjUtG74hyYks3gJXCyiPDVxm",
  "key31": "4i1Jm7aupcCjnToLcBuRiQJMGDCqKoxMHxDnYTii6MY5wzUbH9fa62jS7iMn8D93miqas8kyKuoRkiWX8P7tDfwS",
  "key32": "KaWzKgQgBPu2DvoBj7XRWMNNa6JBy75nvgZcKTYs9btQFpGMG9FZghk2Rs597tDNTJEmcwktXoBW7NQtwuF3Knj",
  "key33": "3yfHnQGURbqP6WaooW578CTH3TdyZ9JQ1QrvmXZym3jqwaVaW5gFB8ozcDGXgx2XvMnSXpsWgaYeWiVC5suWufgB",
  "key34": "k2LSj1g9nDBEpC2o32wNMp5Bj4mjzSGVrNSr1aVRAmcqAacUUanxKyo2v5gHtyY9jc5rhZfu4dJ9qGb1BNPWV9C",
  "key35": "3DiBoJbg1qT1b6XsvJ7CiD24dYUriRH6RqV82x6X8Yie5BSdiexrPSCwfLFvkBdXDgeVeuyhbK19AVUSF2TYmcaK",
  "key36": "56Z4N1324Tuq28o8JmAKh64b4q6wjzRGZLvkfxjc94tubGKqD6atrywhddXCKHj5UGsR3sigSG1urSHhTRLM6EGK",
  "key37": "Yt9WktoodnhjKgw7TP54ij7KZCbuL3e1tFZvDQay6PAZyNGMftSJTWvAtdDJsuyh2A3LRSLbbrwUcxwvX5QZdo8",
  "key38": "2hkKCqdv6AZVhxBYm2BELWzXH95PkoyhZkYtJYEw7p4dFUBpJwyCGW39Y8p99T2GMJmNxxi4G9hzJi18z4SZV8uY",
  "key39": "63XwxpRq5dEpfxm2hNAvuWwCsPDe9ajCsx5YhdDSv2dtHfKa6z4xC3RZVpUV5o2wQtNE7LXMc6Vvr6jjbxPhEKfm",
  "key40": "47bVn63h2PCWCu6ysNdzYPrw6zn9tQWzrcbjH4UtvCGNASuzDZT6psHJ2aVR8ejgnjcDS81P2QvPrUgVNvNDZBCj",
  "key41": "7jv2NbM8GnnPAjKrHRkt8XLBJQbdfZ1MXzFw4U33fjpkEohin2MWzzUwiARD9rq8LX7JnY1hTEKwPPcEUMUQK7z",
  "key42": "5pYZ6zx5XPBYcCk3x7S8aPLzLWRQfJJnkfw1nNhw9usy6ED2tnDsbCZbpFYp6vUC1LQt8FQ3UheMNdgeyA8s9btK",
  "key43": "32bP6tREmTPzvEA44GCR8STJMRekWp8wCUX76mferQJrSMx6rFi3SaPnVD8JNkv44KiE5vCqDGjAZBmvEykd5hcn",
  "key44": "xfCefhq7CZn6X8dHaRAPdjKxtSJ3pn6zCid79v6wjjNrjpRhTSWeKzAbnUSVsiECtbq8G6mb5sbspQvPXbCWB4J",
  "key45": "2SStHUj8M2wiDpDB2dn7kspuPXqC6JGTrLLYsj32pxo4Dha7DVZXw3jxqokD1zhJiup6mekju3Mq4ApUWDfoEDdM",
  "key46": "2cwn1TLuogLXtor5umNaTQVkTYMq8uTvc6tfroGAnXppeS39R3F3nKr2FYMibSFNHhrqkn1CcUVm13K79Q2UZgKQ",
  "key47": "3e96EL9i45XMmc7Az9ivHcT7kJ1AiutyuQGJCoq76goax1vW5dcAiqXtWmqLkM1pWerwWhvpZXy7AAkw41YMtXoL",
  "key48": "3vPX51MRWJGE7bnmUde6neksKAKNC8RrbaiqugnGcLqWBAb3UNsXwxNju7yAXF8uJSf8PRyYoVSQNx65P9xjaCEz"
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
