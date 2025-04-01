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
    "4q5HrQAkKMppsTXyk2WzK5hpVvpaEs9CUfgmRznyaqxh3Xn4wGkMCYWtsGkGn11SGSH3GVTTH8cA7g3Lmzho7352"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7JUbFvP9qYj8Fxq7f9Z8gyH9RWbNU22YX2vdG4ecWy4LgaA8jEjDi1GBhaRrJQtbnjkLhpvnHPU2zeSYUWC2hk",
  "key1": "UJ4sR14pYt4MqEBhW4qT4yobqrnNjh67P86b97knLJADLqqwzg1w712qDwnELPoBNPLM16QZJfUTDJuCNyLBuC9",
  "key2": "RMqttK12EVq37uviQAnqrp4JxduVFgnZWRDC3g9wnFNbeyc9uHKX5Tw8bK83N8ECTniBMzZEhLUv8WQEK2bcEUh",
  "key3": "5thv6FqmUS62P6cqyTmX9npWYSFKmGMJK8qEzzfhuNPn3gbGHhF3BYL6siqSdb446J1Me5mi7XcEq3pFRkKD7QqV",
  "key4": "3fhb8F3Rp7dHur7ta13tKjagChp3iheR2Ntx16GcHiqwAP95QsjHXb1hXdTcUAo3W1jLd3AANsHYvmQanTYcmLvn",
  "key5": "2KGz4DEtRJ5Bwc5mDN41wEYvsLB2asFZiEbSkdjofByWx1Go6kedEvBmLEyHkQaRWJUMh4cZyRMjqj1B3CFtTa3G",
  "key6": "4wfuuYdzQWU2FZ1ZrjbKWBysEwcs61e1c9yTyxN4goa1PDZa7wP9Wds9hkm3ZJaKA8eLfuToBFrtQosM2FYjhYcw",
  "key7": "HuU6qNibmo1kmtZEdFKdDQtsf5v2FcF1zUpJCxFS7y7BkM1tUceYE7hCfXR5uDeRYxE8iLynCde5qGNjQz8SVui",
  "key8": "dcETAxkGWPBjVXeu9ATWCEU981M5QKuAwGr73AEbN6TWLVgvXYuGmphiiES66TFMKSV6edrcoHxkMzuYkoCopV9",
  "key9": "7rrr5NcSbJ5neoRMieBNhZX96dM3qGRKYMaSUvqLMVPo8qU3PsKKKBiAUP4GR3ZAeo3HryDDWrizGLrxqfgZpxE",
  "key10": "4aD2FLnBwXfiYGA8XmTFPgL77DNGE7PYY7cm86Tkq3WNDfZia1C3FYcnXrYY4crCbMpeLfUYQox1DuT3Lcd1sGZb",
  "key11": "2MkRfK5r3L3AQK2urVVhSa2Upaz3dPon62tqGJVKpL21mKGzzNZfxYBNnyTuWP8415nv9gQu6SnW4YfTNxjnAUvs",
  "key12": "59hpYfsWwCU8ccB5ce46ipE2GqNejmsaaqdgWxZf98nraJgp6PBYuinCV8PDkVY9bDkCHBxwaLH9RicJyFcL6U63",
  "key13": "52sEN13Zu41fjwJyJ2QCAHzffTe43WoKLyLxBeVKauZNr9nHpemEvA3w8R4jbQ4pi1WqsmJMtBQtbuSMXFUbzZ2x",
  "key14": "5JCxhfWxu92Mpa7swDEoHx6zVTuU74EDqTEmo8qv7nwLLSteLHxoJNcJFqaZn93uMb9tYP8wn4zE86aA9nBS3kiD",
  "key15": "imwBZEuGi61yg4bQU9xnrb2gMGLuyskkY8ETCeQjymww3qLmVsEVo2HvUj64djVaY5wEAFY2d2MsjcvJpFnvajF",
  "key16": "3NPjiu7muDiCiJbnieS1ssSicoXrSyGjwqn2LQwKqKhwJEWe7U4mYk43JdhFGqj7dcgR4ykuSGPhLvYWBkauBQMz",
  "key17": "42dpvXZJCWka5aTjzuwVZA2nSicYhZH24HSLX6Ho1SJxbfeH7ARwfq3JDKnoRA2Ghuk6p5FDyA9xoUjnsaDvKBA3",
  "key18": "2ww2equqzZRzV8ks7wBoMEVhAZuJWm2ssiY4EC4PHfaywP3iSsNVbo4iyCBFUXiW8nCL1eMNxhG7o2LsYXJm3SjL",
  "key19": "qRHLD1x9zCdtYkx4CPfk9VL3urXNmh6toUYXjS6PXfNJZ3AqftyKM2a6LcZchKJt2V77c1c33tXWBWH8d9pW68y",
  "key20": "5Kg5643d4bsQLTt8fCUgh7oC5sV6fTVAxbF9JRFi6TvMkqUqYUcPWRUSFXZewtvRX4zQS2rx5JUYnKZbn1ZsyDEH",
  "key21": "3cM6gpk2KdW2ZG2yMFuRnXEUnRJVto1f1EG4kJtWq3FA5dRyEjnEHZdwSqADPQevtPEvVaTKvHVTJBk76bP2zAEb",
  "key22": "jyxtqTccYV8J9x195Muf56jHpVJfybFp8V8NSmuTUKGwZZck2iwDXBQio4ckwenzMnTF2zARULu8M3RNtHskAG2",
  "key23": "5vMeA7prbGRo4HM6DFbib5hnSmdzn2fRYNSa3xKzu2XWer8HxiEHBWbJ5Tbnf2DnRqA2YED1e3c4qbVTmJ6Gq2T2",
  "key24": "4rhemhiRZTswgndXTRrumiMDML9XdGsQ74hbV4LCF1xbzxQktXuZgHrgi8S7UeeUE6gPdLi4yY4moJQdB2eWJJiz",
  "key25": "nFvzCriPjFfX7MF5PEBuBzLEbHd7MYNVo7us6pd8u93eadNnWbrH8mVg1fV2NzZgoGtEQL5uWQ4r419phPJnxQw",
  "key26": "VS3S6vbP1WJRtHovUg6xwP9TTxHrtXktPJxDdev291tRkj8NXzoE49ScbEpTwWEUmbzFoTMh2PH1DiYs2ezSSbu",
  "key27": "HuPUPNMQ6id3URtW4FnTsvk4xotJ1q9JdzX3fyE6jtJ4LJbwHf9ZkULZP3fjaXvnkgn1QveHRJS2Eh2VNhEEegz",
  "key28": "5gsHcUQZgstHYMY78qekqTbng6x2uQNaFjkKF8MH7dN94bnxaYEHxDvMQh5NuZUo9Mw91hZfsZ4RoXnbG1iqZz68",
  "key29": "3Xoch8AtpdeJR9uLEwqoBoJNx8VwcwHsjfAGJW5AdAsM6MJKdAsncm9UgC2bouryyzpa2Q1PeqbHU6ZmPSP3sju2",
  "key30": "5GqYmVWFwoPHwvK4PCvykStadb1XQxUtZQhoCJUSGSNXQ8NdeyMmcooHYaXvPWZq7pqhYt2GUhgnifmDowENuThT",
  "key31": "51mEbumcKd5izziibXFkSMTrs9h5Fpq6g5y6wdwZ2JE9RD1BUocMS2JMkSdBN54iKQ5g3ZGnPLc7a9x776ZYqAP5",
  "key32": "56DtsBoNmSC2RFXh5mMTEckXU5vLXQPW1Wjc3vvjRrVrhimHGbt7MuTXYERjbWPpjkYExLFsqJv5W7c5hj15dXrL",
  "key33": "5vNDhU3UaU2M8iehpEaJYjPBwH2L3HeUtqwZV1YgGwbMhdGVDxCL4M8GS7A4ErL5GN7Foy8n31SLZ71mdi4ZttYU",
  "key34": "2pZ2Dh96bZmACMaF6qfhUAjsjW2AhonLTY7WGXBvdwtoQFZcQBexoqnwxpaFzQGwZFW9uBct9uNxsiGtaS841fd3",
  "key35": "VoPHYqiJew2n2cfqWGZVwJWpkv2nqmVP62WdwfrZZBG9LqzpkX3TaHWgLPEfxke5GuYcXC3QkbgzHcPU8NitzW6",
  "key36": "2NnNPLeLGJtukZayAxgbp1JXH1eA5bASpWeuX3GxeRfqWJjjBf3NqfrW8AyvaKpJkpvpjmaWZerEU2W2X4hQ3yVY",
  "key37": "5Hr4WTwSbRrTuChNKEtX5xsmTyd7g9fug5173Moq8gzFdSRux2FxVfUJUrC4Gi457STeJhiMMUAWpdMddZxH8sGJ",
  "key38": "3devLQrnZ8gMhAR4CHRobEVH6C6xh9qNHqeapvzRtRmvHxgQWXy8i4gp8uAcq8QoYWznswssSTKo2WaaqaMg91TS",
  "key39": "5hx4Kh5uwMwd3cG4TYdrNi9wGaCtbm3BnwLGnqaQj1aWMmWTFiUmAXALj63GswgfE4Lzg9Mb3tTCv7E482grmAoT",
  "key40": "3mujru41UaE4jqBvxWdG3GXgFkNR44pFeqSufTQgz6dnkFtYAPDVv3FgcgcyGt7gPGLG7naMhGBW82rKsvqEaGz",
  "key41": "5GLn3DJMKQNycJyvua1uLXHNDBhrhbAw5tvLhPJiwcXMJwbnLXyQLhgfgQa5dk7qGZzxcVSWTL8SzphbNAJT6Cqg",
  "key42": "32UTbyYN25q5p7voZDAYWNxife1TMcLFTC6CSVQ2X4MLAyV45WJdk9ph4CZznqGFw5PFrrL2Hc2W5eXMkpyYLnMJ",
  "key43": "678daANP7uc2nNZbzsudZPFr3mUYBKEsJUHskhf56U3V5WQ9VSpjCk3tfaSvGRrtRseEkYJL4KAFon5JuWXiRXXC",
  "key44": "2mdU7R8xhgdcqc3qpyY6H3wwiYC3SZ6VpbWUGgcKjNiaQLyPtviF3pLsgTNYfhSTeJzLtHQaxyMphFJcz5ZEwoYe",
  "key45": "4jGL9d7nzYuCXBtWzZ6ouQvRhuyzdRG5whvboqdA398Tp3UDoQpeDSMvcvBiQHhMaUsHNz92d2MmhJGcrwHuVN2M",
  "key46": "4D9NDXYvD6wWhtRxbfErpyhyGScyXPRKZWBHbFm7Nd9jEsPmiSMC6PjP88hif4aGzirdEVB77M87YCCXg3CMU3YZ"
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
