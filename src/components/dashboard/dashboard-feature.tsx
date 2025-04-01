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
    "Qb8d8EjYcQxmtmeGbzh1DjYhQS8VKSejwc3GWn9KLCyBVNHZmD4HfCy8RQT2UsnUmiTm5sUS3W32dquuvocCFKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KESfoFhuJTmhcBZLYwudCPzo4FfiZKkacnmriEGzepr8n3SJafac6BiXbupAo1vLySzcWEwTCdvRb1KLGKQ12HQ",
  "key1": "ZJHsEJJMRksHcnvLujCf2aeFZP69FxwKcKgKo6JmMimbXwLxGW96eyFNaHVg1Zp7TLhSMJrp7mWEQ6rxoNKdCXn",
  "key2": "DozTK8H8dZszFcxdcACwiendzL2fkykStQ2MDkSkM7VgGJNchqnEcADjqWeVkV82omW45x581yvJ6bAh1cTVcHd",
  "key3": "4RpHfoQVGeGr6kf6sj2bmjrMCGwdASDdTQSm8mPGhfnLNXfoxBhCyxJUX4UsGvu3oMb9zw19SfDgHjF7LD1u2Nwt",
  "key4": "4HCAxrM7CtWAts2Mgeg5eayjEwJqqa2u7r9jwEBeB7wyHrA6qN2enJVN9uHQQcMYSaUSeHHo6EWK3so34LV1nw41",
  "key5": "4M3kppEx7ogUYJxTfohRu6Kgk8JYb4u8vckJhYwADkuRYsBw2agZPBVs66gNDhFRLpkHPp4nzK5WLYA9Cusw9YXQ",
  "key6": "3Cs89yMzpkWxH2VB1A3aS7yagG5kZ6Mym3wkbPDcoa7HPLvQyKE3LgRNaKH2JHn7BhoRT6UtZhJBAb8CXyYy2STr",
  "key7": "EXmTtsteXZXFw2SwcsGa1Wz4nzv4TkZHpqGkpYAWhDjjPfptGcksqzxkt9af9scREbaDwgdit29nQgqEzehp1FY",
  "key8": "28LhTs9J46K1uM4nxuFwqp7vbJgRyXV1LYjriuHWtDxqak69vtZNHagWwjDPbsfv63HHUDba3S4MLeAhJEZBp93o",
  "key9": "3D5M7VFHm6AGyTJ5AfemB9fWxjuM3fj3uu7DKtYjDqKGVLZ4d9oJnmfyAHmQsm5AUc4BYp9LYnyWeQMVyk92xvww",
  "key10": "5g5fwrCw2oUPVUmLxFDDKyM4jAcLUVCrkhCBPv7jGPpeqmHNRfTeCgj9S6FkZaQD9rkpzYddjtwb7hk3vLe1UJge",
  "key11": "3qTYMcKemUgaSgpSyLHDnXxz2UhX7rK6VmH21FNwhEAadicr4pC7E5L2sxzp9tmuHmRoDfxRQ8x1ruSTuGqknyMs",
  "key12": "4kUSNajjhbB9ZrCSnUKBa2Z4CyvEvJCJhGzrHMUZ4ZvHqxo57icMACdTYDkv4Q4v9gvsJpF3NcgnXDpzgSsdeR84",
  "key13": "617pSMHuGQ1okPzniuER6PdqFr6bNGbFtrXz2jHweJFcc953tXQ6GgVg3ztFhyxAV1fnwm55rWKqSy2atKvoGFho",
  "key14": "25t6RB6D2ieSwqBiy5JCGkdQZ2BDMYYU3U8upUGEJgyZz183xz6V67CSBFWWLbPKrtRTYB8va87Bq96UVxkQVx1Q",
  "key15": "47KZ4CWhtdZiKm8fE9jv2rWV7XNbNRKxkebMDrCWUfv8Ke17x5Dev2YAZNaf5zPyycswxLWaoCGu7xndTMkddCvx",
  "key16": "2L7N5N7wzMMEx1SaLwrhgCB4h2MRQemUiPcEHxr17zLfbYFaifs2kZC6gfePjntVZ2SRVPTxWy6znzfTm48edabT",
  "key17": "4qrKWuANR855ciJSrKXbv4ih2N2mVrWPahM9Mm3yD2gsWQ18bJ2hEmyLdRVRsnL6m96CMLfLUd14DkEVEypXzBQ1",
  "key18": "3qTZbnfDEoZYViU2mySSypHA2vMtVG4zrp6pxgvwGoi3Bw8FNNrvcGqakX41F8kKE5uEN2NUUBMmJNmVSymViCng",
  "key19": "8ZkSAE7BZxvrLTYA6ei3uaKh4jGzEn1ajL4vHfwbc9n1JsTaJJWGLGQf4kun1PNuVfSGuLPXT1y6hhoF1mCNKiG",
  "key20": "4gDyNrGG9h4hXRSDknHN9P7vReuVGM9uyfjesfZWsm7rYhhoPfkJ66uiWAbL46whnprCnJQhMHFnghfdQMEuQGwc",
  "key21": "5MuTFs1TLtvdLB6fD6U8uYRmc46MK3KhBXBRP9EJmz7wcJUbwsxNLbkCTJtVdSxmFoVnywXqrMvS6cNbjV8FYDPS",
  "key22": "4wEWGTAKjyV7C7YgJJ5hptgKAGaMLC69wZezris4WcjJqao9RCkezSQBVkmdRrkge7HwTcqpY447Gzf42KHu3Rdz",
  "key23": "2ZkdjXiKrGfMss7k3GDZHiWtry8NJq82uAo98gzGT9SyeghFoHEu7BbYRKmfjWWpeqwwuwzotubyJ1ykEXr1VEwq",
  "key24": "srGQmXbTA5q7zwkqx6MPQjWGgTKH9bveYhJv2V2jXtfCoBRdRZgVeSF6JgZsRMktx9dg86LcdqwQ8krLgYmL8Cn",
  "key25": "2vYqhcaEsc8xaA1ctujsczrLydh5E31wYENvPTjWuLRYytqz4Artp79NHDekGu8Lr4GVs8JJbebNrVzF7NvgkCNS",
  "key26": "3rMrbsy3GZ4ccmXoJk6vdnxLR3bUprEWoy5SP2mPFYnh6tYRn1yT7FBJ78p4kxuM6kuF4k4PVcySBXqasXwEqu9t",
  "key27": "526Se6cLCpqtQMB8GQ8y3tD2KGqHcv6YqGqWCsEQ1s7o2VX3xWa9yY6Zi2WsuA6GYFPPByhr1hsgrx45aeF9aewd",
  "key28": "2SnF2nGdyrvXyGfSsLAJPd4k4H9MJS8i77Re4fibnpC8mX5hePUbYfDGVVevSARZsXaPrq3YXbNT1kGnRCvHSdeb",
  "key29": "2EzcGPCAFcDjCXEGqyv6EEdcZsEF24mHyfT9tRkwePE3sEXaWRKMqLNEtGRJaDfLoqcaURoRybJbfNZgZhLd8Cyh",
  "key30": "5qqLDzC6M26aKc31YgCK4vvLPuDB2GRSnUbrVH7qeZkoVwLadUZ1hPLeVz2v5n4nd6CCHoX4Wskh2Tgo9MM8eqzq",
  "key31": "5kFDjZBuKPdrV7H8Ccme2ZK6VUkAYoGpXb8hYvrhCux2iRgCCk3hxjCxyYTbvzXQMFksfav43PXoEgGo9THFyMaV",
  "key32": "26V4qbHZZMea8dHm9z2PD6mkGaWyTqyRV1X1hz9QeJiboRxLfPKrBUfz6XdNqBEUqZTZTMABicUzLptMRU7gZLVW",
  "key33": "4BtPCAWTfNFw4nGeUgg4YfLmWMAobus1VXnrj1bmWmhqwbcJHNsvffpHHFeWXF96nBQBWWzMAsCWmSuT2SZvz3b1",
  "key34": "4tnBP4aNhxdf7SDntKLZ3gY8cpaG5zWJeNA8vDPEkDuuRbSHuTHQTHFniey7byaWiKfMghWSMarxk4a5Uuf1ggZ1",
  "key35": "5v3XJQuPpJfxnMswEF2xLQyUafrEzVywRMpFzVKtMAZ14JtRcNhiLa7pDhWSdxpwpiHh3fjSxXnpdfYJVqvXiGnS",
  "key36": "uUGCcog2MNg1XxXzLeZPdcQAN9REBS12riyU2aVQ6BLuzoEDkTgYPBBCGgviHQPBs3f4dgKzBhb4fzz9YBGdeCo",
  "key37": "5c6vngK9peHi5RGoB14sFH5ufV6tcumNRr8DeJHSc9xX4zUqD6dhQyNT73nNz2jFiW5ci5fgboTTWMgzQ6cbh2Lh",
  "key38": "32beGV3YN7J1iVCy7zAozsyshQXpUzuJBT32E2DSuH4SkGpAGq3tyTpG7XxDVSUdQHeMRXY4kqbn6Qi2UdHnJg1k",
  "key39": "5hVm5FXYQHtMhNtAnofdkWppZXegP26rEAUvmnyPQmf7FKfShvs6UymhZhsM7e3KXm334iVmM8JwxEcUUz7nouYz",
  "key40": "4vzGczfFbWy1LdHhN8r9DyvRkY8589uZ1m7Eg7k6Kean84shq2KKj2b3vdSvLKEa9R8gJg3nkKDyNhyNGDs4JZK",
  "key41": "WNYpLgGTJaWzzk3gdzZWfKEZbY7gtYcpa8eBWYx2h5KwzXuPHrMWqvN51Pv7pVwfHvgW3LtNZA3wit3igzJXq6H",
  "key42": "5CVQT64qNGfdZRD5swzsjxFX8An8QyRU7hVJ6X6jJm87uz5TB3W43uQnv4F3amb79sA2LUT1JT4YTvSYU6yQyhor",
  "key43": "2CYs8rBCbBbJP3LTCi7PRUny3AorJbypXVZtfFHUJiDpYBd4E46vENvN6hxhmNgir1ocMrGf1n7hc4ZKxABHf51N",
  "key44": "2bX99mynMgWEfisYKmk5oUBXx8AetuncC8m74E2FMcH935VpBwv4TAoe4ijkEZdsmoeCcZjYLdufwitpUQVgTXpn",
  "key45": "3xBQgoK9HAm7AVKX11zvmjyKJtrxKayi8tagfvST5QHikmGA9Ku2bDchu2D2sEePhqKbb1Q4bKwzMYvoGFKeXYNJ",
  "key46": "5Kv43HLwNN5UQo1K3ETnZVYYK4gBhwT1EAgo2cAEmTWVcnhXZLGvT6Zfsv3ybUwtcErzSkLaFCJjBKEMhAoq3tX9",
  "key47": "5TJELDTgz8D3ou39papfLkcmxR4KUTzcHs29u6DjqNS8sr9agWkZChCZKpRjFfFPrcgSZXzdeK5TkgDNKGj7Y4Mf",
  "key48": "dWQbe5ymSuHxe1JUZz3jAmrAcCKBEtokASmw6bJyqLTJGhkrBaoRF8r9XXGyBwRMtDQ3VyERWc1rztKKCRz4kqM"
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
