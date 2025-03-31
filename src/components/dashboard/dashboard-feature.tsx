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
    "3dBgqhKPJshgRSSmKKpQqfZujjjoMJQWB5cS8WxiFMnSURAZttQ5BbuBovUJSiFKZ8gH8GpbvREpV28oLGZ6EEd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKMp8dRhPxDPEAgsPdbPfHk34Vp7w8P2VxZRC1WFEKnTMXTzYf1Gtke6YEAkUBzdTwXGX2qrfD9o4bHuvxfJkNn",
  "key1": "2c7vU8bxDDdnKaEKj3mBdx1oKCN7ceB12ihAAMATkRRVA5sKnhKhe3i4C8hUMwH4XE4SJR6HjEB1YNbygGgpmW4g",
  "key2": "5Soyr3gS6kVCttfoYhNuMHZcSVENS2HoqsYyP2MJhPmeoqcFfgYdhx35w8pA46DS4aA9NYzRCXow1mKsxo2PQTmX",
  "key3": "C24ScqTahpHPxCwiJ6X9MbnTnNGpY6hBuPAeMhXfTZc4JbV1VbyJ1qEeSoHRSa8VaoDVHAYyvjTrWkNF9uXzLr4",
  "key4": "4XetyMY8MN7yjHifgPs97fpMMT7tMLvGCRGJLLfq3nKrPckguU5BYcJtGMy8i14xE1iBCQmgtM8QzFyexVdqTdPG",
  "key5": "5aABkLt1TebHt3D5LkfuLsfa21s7ENYDVigoUwARS2yo2NzUS9UTJ8XjtHsQQdEVJyxfkZfW4jMkDBMfQZtUzArh",
  "key6": "4JensnqBZiusq981VN1GdT9475DhFcZGSfoVRv9MmT24JtSPdohnSjkNk2XqGk6ZHAwE465cznz2C2doiUoFDSo5",
  "key7": "4YwEvYrsqhUZ1V8YrAR8FjBWCjM52bNZgEUmHDQEVbvq4WYKmkTzgLMkY1FnbFn4TKdf5qZdvu37pW6jNDrXyJxi",
  "key8": "gbpK1AgndKdjzPvGG4yhPzu14DEqSWbfv72JgXSjAPgna2XHb8MYhtvu5pTQKtRKd7TsscG3CLDjk4BsB5uBHUE",
  "key9": "5PhD1QoDbXJZGDKnvX95GCYXWFAxWCXaXuj9KUfC4VF5WRqNWtx6nRW9mXurJWrZQ9Pb5zGKEcdFww8LVw5ii5QW",
  "key10": "36tRBc1atyB2eiGC5c6Yk32mrGKxjwkYxRzFeKQX5psPjn2qRVek9kYdE7e5F7i2wC35M2VgwobosHQbDd2N4FcX",
  "key11": "5hz2qY2itrye8J58ybtYwkveDyYWSbKz7WU4xYd6guWYKD9Sb7AB7eDwWvevLUR5FpqCpKCSMpUQxsvkK7beeaZA",
  "key12": "2os8CvA3ddXDJpjhUfYuCuS2wbU1LhEBq5nyNn4KHJfLuggUCn2HAZCnYDFsVwQand5Xgn2wK8rXF6AiSVNjoVnk",
  "key13": "3ea14u9HB6ShKjCiHDLQPdZwmE2vpB5fHose1kwg5TCDSXoojAonsbV45eQGMo753FBe8zHvEvW3jBF2LDmaJb1i",
  "key14": "5ozoKYiV7zShPuGDQqbwxSBxhRgNJaVU3XSBGpQWTLCVprfq4FCfYq6kKpxd6NTA1Cwk53fzZDQHz4Rdrkufziio",
  "key15": "4GTM7rs4MkAq1nb7TWfxLEeCvUQsUXNbXcMJ1EbEpzZ3R5N1F72krnjRiaZEWXBX9jPMpEAtjWQ9Y2uK573dTkvo",
  "key16": "27XmrpdTHEejWsEi2jSXMEzafpRuLnZuqsWd36YmPnmxo7mNKRjEyhL5XtXv1pmESGWgnmKjTDGAycfXCgsGN9Jc",
  "key17": "4xThVbDwb3Bu638F414JKKwTPAFe2H6TMjeGR8S9mrvkEjbEfZ6RrWv2KszWGpAMyjoPEY9oP1Zh6j25n3ib18m3",
  "key18": "3t1ZKMujsaUtD6H7oUUZ8ord86dGM95WkmkYKWKvUoS48gmvSfwx9UwmdC5RwfKDW5XjBXJ6THxB8kB8BgrYReBK",
  "key19": "pn8RcmAKbPCct1SC7HmPqmuDqLn1eb6yVgXZoJAdS9sW2va4zbXyW5yVgJrcaKbta8hQUaBd7xcoqUquvrJfroa",
  "key20": "2ExjqmBR7wgf371ggCT98E1Mr26ha5DTfEFQV9fWSN7Jx4RDTdSARiTo9LesWtMAbstki3ZXCU35hTaMYaU4Gj6C",
  "key21": "3Y4Qvo66NTWXFLTEcDbuQxaDqv5mKQKBofBPaBqTxcitBxzFRWvoKQWz4TjQHt79s2S7aSCwVGoeuG2aP3qWEfeG",
  "key22": "3pbkoiq4RiA1v38bpTuRJtUpzFdwKC6qbUVPMyes2f4AXG5XscQDuvoqQzoKyYGgeCaxiYpgCkU3MyqENhvw8idF",
  "key23": "3E1Q6qTPVha6HHTHfQzAQFyDr58Gzfuht9QiHhwdysg6osZXq8U9bC2gjFy4LqLUCm8y5x8rdr3cMbK1wDJYbcj3",
  "key24": "5w6Z7wY9Aho6qZ4nczEAYw6EXDLgWNiywSz4C5dD8w8HjCJnuYyEb5D4oG24YrcPPorwooVJ2XRHESfkJJn8mgtx",
  "key25": "5U84N9ozteAZJu37aWvwCg9TcFh83TUzWYZPPP4GL5m82ZLA4H5kLe247M3fQ5ugNrmb1BMZnxkzaXjXVxzKw3CG",
  "key26": "2GmLDR2poDLDtEm7WDTZvVhguHWHu7BqZbhrXf32VHq1SURKpkt7W4bw9QM87hqo4uDdpfWwtCRD25EAUqLQo7CR",
  "key27": "4JjmJWuGZxWD1GE6ep4HBgD8xZXtKZRQgaE2bhcoTxLivduEaDNGbHuexszAfZQnxhYx8GLH9RXw8LBsGhNjW9pX",
  "key28": "5mXjzzs7WcaGbEiGu2idwD8BrRrK7UcrwMyxT9tnbKC1iFyucB3Rjo6UzVVMef1ANrpVGRv9irUbvZnq4nykkZ4b",
  "key29": "48fUjWrebChVgjPWpKFpvistA4b6Y9Zz7DQeJFXHkLX8fMF63urvASmEfswFqYmKi5ZcjoDW9BTeZLUL23Fogc29",
  "key30": "2wqf9DphXoe8MXyikzgpM3QECosGnuqubxPgpftfJGhf2PpGu2yrtYoSQidva3kZCgXAGiZ2vDxJty72dmBc4RBw",
  "key31": "4RGQMbGMHJLDNTEmRqLPTEfJ7drziuUmtVQ9nZ8xgabheUFexVWjx6oBEujkwi2obXzyc3kj2LVcTzzQU2LiHyXc",
  "key32": "4EaD6ek8dpfHyvo9U7YdHYB47UmU3Z2WXNjrn8xnYZU5U6qmZ6wH1P58PWwyEFN2jonBr6grMLjfGkHW3nvGz443",
  "key33": "395nT8yy1coe3w37bs5FHizzCfnvNZ4KV9T4pJ8BYK11Ppiy58H5X58XKDfZVTFCtxrQp3WM6sojC6s8JN6pwXq3",
  "key34": "4mPG5GvoyG1BonD3CH41jeBztwC2TppK2U3m8bqifEYLZmzdkEADkoDs557kz9riUqkDBJwotqxEW4oxYo69Lzg4",
  "key35": "Z5FHZDx6u8CoQK89eGueP1pwd7RXfJxGwvzsKRmcz5xnwaibBjSoYWcmfBhC8xMu9NwLoGfjTNKm2SfiJL4TmdJ",
  "key36": "5h3CJGmFpmwrhHNMxMAddiCjCda8rwSv8oxsZ2yacUMeE8qZdRDkAeCTA5YjL2xqPZyaijWWPjixvz1TLqUqcNVx",
  "key37": "4yUUUQk7rW18AFvNHMyStaNYRHZvTcJqdp1vah9bWviD6oTxh3GuwSzqkvTeYokKt6qezGyjqSm4NV1MKSFQZj1U",
  "key38": "4xMKxd1PMKskUTtne6f3YX8saoU7JHnFEnUNucaTZWqZGSC7vjsU3L9EFb3E6JSie97SE26ZmjQSHzKRTqFBvXwU",
  "key39": "4ha4yfJxZix2N19m8bD4yNcR2gPefD4AnW3WFVioxz6mp16p639ubKEeJDRS4gXyiqs85H7hec4hepXBQU9CLhUC",
  "key40": "5upCZUDJNKfFybjcJ8NYTft8p9HVbXHa8TTWL3c52wDLYTxMQqDZanYfEgq7SfeLWmGJ2777C8iUVxBHbWSGf5h9",
  "key41": "4P8AQpxKrhb2VL2jmmdwZWgNUs4SeTTtPbUQgo7uu3dZX6owwesZhcmctQgXr3HAeSDRtnfvX25mBPbgQeptnxp6",
  "key42": "5yBzWbds79begscsq61EzhGV5Q883KvrddiWJgytZvBcPdft5Mw7NaDzTqJz1RYwE8nq9Dw6fn49afhLigAmrLei",
  "key43": "2JcLEfuB1sq1T84K9qeCMYhCNf9P6yecaNqih2VdxqW3KhDBXyEWsXxZ9iJVEBmN1MqB8fDnQ2rt4NEYAahJcXKL",
  "key44": "2RtAsX63Jq69iUzYdwuZQDbHVDfmVJHyPYL8jtsq9FiCoFMaZUcT5785fmL2UVqGDuWKyvrfFSaBjBeXnt649KU1",
  "key45": "2iKPRu95BhUd8ffaXunnkhK7CADTngT2EMnJejQYgYSx6raEVxFMATKc1UzeLN1srwtRfMgG52uLTMEdHHxckzbw",
  "key46": "4BKbaHCEkrnUtobup1xSvfbg6VP3bJ8qJuVQT4nRWc8Wk1u1SQVELeWh7u96FSqLjUBwsv7VK5p1k4YfFknGQSmX",
  "key47": "3jvk66JxJbUKUAf51hUq1U9o8XZY9EzvLyjXEeSES41UJPYHhALNeZgzEqdhperh5AE4TPTk2zLaWnGe9FAgDiqK"
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
