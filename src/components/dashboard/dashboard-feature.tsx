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
    "y4GQfMFRnKfphwdzRnHXA4paRRw56EvDXW1GWgxMd5QSeHzqsMPAjKpxYKKjWNZgfGqQ6UVdVoLp62DWUxfAHWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HFwh5JGWaQjuVCFWhttvaHm1FxQgBTFz2SM2y1Ufmvf8aTVsaKmY39w78CdobemfsGvQA5agyqtUz15gHia8p3s",
  "key1": "vE1eVPHCbNcZ7koiHGK7xffuEfjhfuJ5ZHP2erStwfT39YeGtdChFcNEgni7B1u6HRU7HyjxpHfUCrbnXeo9NuE",
  "key2": "4YHx5A3rkbwXZET8NMHtrdopPuk9ncs4W65Moxs5NRtX3jWQyLtNuwMETLCwmtQofs8J2og2K3qmKqd3Q8WJQT1U",
  "key3": "5JrYY2idZZPDRVJ48G81qpRTvCxhfj8rpt7Dd6heNfgVnpPaAgPkZEbmt9x9iTudmLxRjQimdmc98UCMAxYqjGxd",
  "key4": "4oAUQvAPgfyQfvCPR47jtkBJws7m2tTh4AM7Usu8CW8GvvZ3nFuZ9ge7LJDBTZiLDQREs9Q39ePHaMXSpK4kk5qg",
  "key5": "2FxzAGw3HMRTaiJHKtspdWxNkHR47KE9gskYAr1mkWXHDgxTeuiFLmfqcyV8qGgmEa9MCJvPdg8jKB59qFrNYEDJ",
  "key6": "363n6ewSfD3zCp1kmPaSmsdG7V6fEcLmsUJBKDaGeMvh2VCJ7TQm3H86ZAXshL4hc363ok9VcNiysEJrUZ8D8u9K",
  "key7": "3DcUV2T5FikyTiWTNHB4eps2P4QoR1TusgjE8rMWgUww4e8ESP7yQosFbcPUcyFz2Fcj4ru1WTze87jiZJxa8bQh",
  "key8": "5D1n2NP42aNZbG1BDu1H7fYdMDqmzUoZh8djJpUhj1ptX9TBC33NJjvmqWJjtMyWyrraTe68hyBFYY7oL9X9vPDt",
  "key9": "3JkdnhCZhutzKmB4HdRE8NhvGLKMkmUiDQv5EMgU9Pfpr4givSxSKFbWcCrMhmns3UdPx1tJsY7MgLcLnHGiuYoA",
  "key10": "3ai1wUXwZY5iqvUjkdvspRfXoop5sTaUoETHDDjoXKWhT3J4trdp2wHQrki9BGB4emYMBXbu6zrTTWoFyNnBWNnb",
  "key11": "285PCfMbrES5GLMtqQg9pWC32yKxYvxhdM2N2QeMxTCQ5mm7CnKsNLoa9YWSLT3txvzK4MJtZxAxDLLodE5GC2Aa",
  "key12": "3JGsz8oJmd49tc5ak3DA8t5zpb38r5rTGAaNUwNjcjFAUuWHthAPjgabRL3qo23jy5Qyjzk1nJdauDCYuvrKd3MF",
  "key13": "5usxio3Pe69pPaj4AnvyTgFMPc2CtqkXdFGxqSs5nHoTrcjXkZToykA7Yp722KwkncbPSh8zrmk4kyYmqwBXPBkM",
  "key14": "4hqicd5zR3tS6EuPz5yNTvkk8isE2ZW91ZHbqKWYjmnvAVuDTXAB6y8ipLWPhqP1SKi66JR5FHtYaqYwBn6ub8Gq",
  "key15": "3dHC43DNcMA2M6bx8tSUWrrDgbPusx8Fz9tjp3L72iZQgZmmCkS7ZvwaKubx8SFavWuZn1dsqgePdYsbaMYnXFqy",
  "key16": "4StuRW4wT6gJ18YuAuW7PfqhKcXyUqcjfQmH2CN6sGi7vUYUbwFojZavNeCZ7ZA99nFwzdf8W54bLfYY8YF7M3BT",
  "key17": "3YYH4izmZM8o1B5BGL8dmMu1fFXyw7tkimGxFaKQ7T4CatFhNxHBZScFfKdnSWT1oK9eFRfga6XiiveG1hm9jgg1",
  "key18": "3s7ocMz4Fqbb8aqUi2Lhj8Z1NsAPEhh6fyD1jTEp4mHPNAFySH2FYiykb5zwHqYv6nzsPa42kPAhcgxspNaSXh2Y",
  "key19": "55W89MT8zkb99Zb8TJTzqnuLpem7X484QRKzaZo4EpQbd22tLyWftuHLz6duU2Fv4VfGNtasiGHsm9rKG9aN13j8",
  "key20": "2JpKwPexswqCjSTARYaLu7adVjzeHGxEUZto4c748ao7NkQhR28aevo3mgo6A1MTCg3CVhuhaP34gYLYxdvH5u1b",
  "key21": "5Mt8Ra9uFjVDYPwGcD9EgS8jnZwfKX6SX3HS1Xj6AGHpsuCoJtibjvJ2TSCaqr6JsCLXXi3Rc6VFLo2JiKXj9vnR",
  "key22": "5fvNxWz2VCZfZxEEVuoZEXFvNbZ7GEUoYDAojwnDsW6QTPYHXbm46fKF89M8Yj3XqnsyVG9ktZYraYTrvFn2Lqbz",
  "key23": "5yYJWvG6k6nc4pZnBCFAuGb5gmoHa4zroWZfoebWfZSkBTqnRdtt1dqZGXE7PJn8MM9oUm1oawnDWvUeFPZ8kqck",
  "key24": "Koco5DU6qqxr7SMes6YzhCx4g1xYArZxpW7TFnxMojB6GZbMdZTaxnSktxRT332irjtN4ykEu4G9r9TnXvgD9vw",
  "key25": "SDx43TypS51EEh9fbifKtbLuTZnvFJmWS7Kb1yMtre7qRqHMhSs66CryjkjuNPPytBc1ggJw1GkxAGeo4Xt1bmb",
  "key26": "UCMpsS1YDLhetggSzyDFyhL6DZZLsuJmKmKrvb2c9fbTjaPr2WoapbnXQ6DRrwkzrFHg9xt6HR1Xa46iSjhipVy",
  "key27": "2VZ7mA5A8wHyDpjTcrXiJsaTacnSpZcneGfzL5xaFdiJrXdMaNUjQkp2TPMuRFMoqCqDxhKe6ukwrRwry6jJC9zL",
  "key28": "2KjYP3XBC1hwsWL1NAQMEva4wxWaNnnFdmERebtL4NGny6Hdh9tUg7ztamstBdJFQWnbUdMnZq1fJYVnFF3MTPvB",
  "key29": "5eE7AH7NFSaAePnnZLQ3jq7qEJS6t4G3WY4iye6NnABphddhZMsKPxxMkUSrBAtbUZh578oGBDQEek1g3HYsQjAU",
  "key30": "35FqGASAM5RJXBhpG2ajW3FJwcnorvaWfP8UvD7Q5fawRkxf4Qq4XkdU3dAdKFpBRigWfwiLGaSwcGeAEpB4zq7h",
  "key31": "4Ren8SAB5odEZL6vaipRJSF9Er48CwN6d1Y8zZadbNQfnZEjqW73kdd8JV92dkSQ8EUy6CgtCYuqP9guHj14evY3",
  "key32": "2rDcDSuA6cFva4Dw7dLq7cZMwD18pd8QYYuQw1CnUxyj7B392y1oAUKULQngnVWhUWqCKcQergikkG2rfvnBRV4K",
  "key33": "2iAQaGuuCkhzmeWi4VX1iT5piMumqytvVfQDab3ZXrpzeXDyCcPnsDtXTKkp6gM3SvC72VuqxT8eQtEm11agXS4v",
  "key34": "4gsfzqFDiUBr3JqaXyemruXM2yyZDDHgwF6k5HmM3THGhAfjCnQNMgAcir7UTyBVnHLvCBLf3rBqw9FvJTd3hYgd",
  "key35": "58NuhyM7rW7GUMuiUHsZBAqLfuwLmL3wgRySfr3McU6kq2QpDx1RMG7sEVFXcmVQxnFJY9abMkoGMAEnyaUwnGbx",
  "key36": "5AaCdZkm6cW6Yy6v1RQc1tAgPFxJdyxhEsjeX7BJpJNJetLKxp7TPvpjqbSt3fmJp2ngvRyaQ7Fo9assR6A7rPif",
  "key37": "2aeJTp5Lh1hgrLxp9RE3ejV4f99jdMiHXGDEzaNZrFYoUtXg7nSAAuUc2fhC2isR5eB3yqDqkJTF23Qt6ckSJxCS",
  "key38": "53aXhJapngnho4W3Qfjt8VUaUE7P1Z5wzgHxbH9zRzcLZmkSWo2SLC2PcyHnkrBzC9RUVUvFc17oQ17V5gi3ZAzk",
  "key39": "2UP2YxEgYUyijw14D1xzCKv1UoLNokQQKHjTQd8C1tnZ279NXQtCvG3taK9tyjTitcpvm8X4XimTWu3sa92seq1t",
  "key40": "4i3SoKySkvUrmdy4HL6uoi7JG1qK9mDEM4jvteR6r7i4ma7wQcPWyo18CLKavERpvkUf8aJ3Q8nJ5s4nqhkmWJPd",
  "key41": "3CiKKNHWme1MAPiLb7ADrMFayjLH1Ut3w1sHJbNwQ5LDBjRxhH2hn7ECnSxCooqgNZ8uTa7psPBYbq8dpZLv7hob"
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
