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
    "5FXuZM1DZKQ8p9RXguyfdu8DRGEiv69ovgDtsggdKYmm6UeWhkyuvUnjC4WaQxo9eHSiPKXE1aShp4DADY8JPoM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253ufiKdmTYgAJDisZtqS3E4rZF2kKXSPWe6sPpW5AJsjESxRcp8cBAYTyZRnvFgRQZyRBsR9KTAk1bAtqYKX7fq",
  "key1": "2jmCQhGfAyU213kCmupi6smAy3o6wcZYe9KKBqHruoNiWjiQQsCCSw73Jrazj1SHQFhTgRsNECjnEwDTitR7Yd15",
  "key2": "2FvbtsZgwDhmeRdCKDBAcKjHHy2tSWv9zF3nLBbEbVgFXGy5b9TxJTq8yb2kh2VLv3CbgkHp8mjS9WHVW6K5g4ay",
  "key3": "5MUWLiEgoevWqYaURhQhrKrcEisXhCoXaUUAdAdAfNygq44xQHK2CvXKzQomKTWnCU1matPYF2CzWBD8HFtJ6Q3c",
  "key4": "WA2MdHzMY2ebmbqKFctWCjT9dvmJiVUmPwb6p8XjptoMmPYv4T47FPbBh2kRXdGQ2MDhcstqkhTDMNq8GXFkDes",
  "key5": "2utyBhau3r7o8Wwv6owbSftiFWU6QCEXPAuxnM3aw1k5k4iyjYXeynSvRpsS9fzSGJVHGuuCjrQFcVRrgae55drU",
  "key6": "38of8dRrK6JqVxkwJsLxaVnSgCVqwy9iF3oCFrttTfpwQDjtiuskZJeugRwtdFUrNcXfZJeDXyPxJ3NGk4ybxpQ9",
  "key7": "29DK6BBJnRouSeaN75Hc2CUrEPwKjjokhzJUX14Yi2N4uCs9hxxchEy5cBgsS2xFCJhwEozKTDz9PCXiYqY6TCfh",
  "key8": "271CmiUFWPutjqJyyqaML75iQPs6RNgpaQxBJvAodcMG96XiTNncN2tz4JYik3VuWcvxjWPM4CeM2Ng4K3FVShx9",
  "key9": "oh199KTKcPQx6zJKjy64MGaB8Yd9SuRRHjodEKGMDbHY6CT5HTHdNEZgk6oiUCm5UoeA2W3wPK4SKsUknQEb657",
  "key10": "4w9o3ex6mc4qLMoAv9DCatS7uVCfFhwNsGFgpqZeKkssXN4ihQxxi5NnwYoHAyFwYjKNUqyYKdWUqSb8v2MiP3YF",
  "key11": "26CHcdYKJiBaoYu5qmez9BcuWroG2a4sqCMQS46iBqDkYLVb7EpX4QspJdpN6hGsTzrBMKbzosCbNQEAecY9i5Ts",
  "key12": "4UQmvVP9szxifgZigWkWfgc1Vppfq9jgMEtui9P5NsrRmZcsJX3nC6tkwGMz41zNzZPaRTbeRyhybgmYHrTuH6n5",
  "key13": "5LYYCBa2AfdnbrumXXujjFVEPu2AdKBVbGyDSDT8ZbHPk2NwNJ8f86FFu3i23LXfShXjC7BtKkSYVsZVQodKKGXK",
  "key14": "5EZ15gtKFKK1deGxqW3ATujvVErDokrHMBHkQi5mQ65uQxjuNWL5ZssBYCTag9VdQMi2N1Z6UoJvSJKtTr2yDbJh",
  "key15": "56BrVrdY26gEX5tMRVBriES1go2jCErmo5ZnFAmJz7sgvgcDuc6z17M6TWDwN48dZjsYCRCQK4pDUU5QiUspFGmv",
  "key16": "2MjshJN1vTxRNxmnYEeK43mFwiTKPHX4FDiURnDNap12SDWt9drrdTjC946thxmSkjyyq2Cep4aqSMaiLFbV19dL",
  "key17": "2439HWwbE8iCJQEPof5JwXWcvq6LggUPrzxkKZJrnugYsXZtHa2CWw2NSPC3rKGJEhJ36msXK5a6f7ejN5eGCQEt",
  "key18": "hTBJrfrUzqmzNr2xdocdY4j2xiVD18yy8oSameCXoTug75PxiPJf3fRStagePtGR7i2EMXC187dtmbzCxAnxeKW",
  "key19": "xmAZPTEJxEvgsQhj6FGpQrjrN8VKMibw2JduHbuxaNYVDQga9WmBSLmYbmWxFtmcyNHT7hPfSKDJW6fMqg7Npnx",
  "key20": "5R9f2wJncJzgF61sqkFjyR8GLnay1mxUjuG5qhXVumwsT29CMj7s9sB3W7rSq24p83HmRxr6sQ3KwS9pVDTKYzku",
  "key21": "2f6DqfNKVqpRmsdAMQNfX8pwJt4juExKEpKV5APVj5EQgtZc4BERpxWHTZcURCykHCo7hC1qxd3VgjE3p3rJVjBL",
  "key22": "3zG6eDVHU1cBVATh12RhtunFTKYH4UJ1gSdQ9rLzuSGPBhuzgespjYbwG8WJhgAeFqDT3E3Zkn4jp2Kz7uXu7CoF",
  "key23": "3cgR1q6H9KUqTjtC7p2SLjczu2PhtN7wmeXPPn7VsbgrBEbxiGPqw6Bd4ufdX55GTdw7x4jNFqNeStLkhViwwbP3",
  "key24": "huAngYukq8ZCRFfLsik8RJQPFETCBDQsrRZcGVjrv5xTj8DCK7tAejmHMpP1aLLN5yu3waziR7w6of8ehTrgvY2",
  "key25": "59tXf2aHrGdKomv5fA2jApNA2XLmS3JdayRTbS6frXkNa7ZU3webNjNTh5LMxZKZkiFvEjgvwMbNofKgNu3NkaMT",
  "key26": "3SUZ7kH1YFsTFdpVJDsDn97gGtdfWJCUKKxVuz3MdLewo3B6X8J5vnAY3QXiaJ2HtdXtAvYACBb3XuG2EAzUG3w7",
  "key27": "2HA6oUQe7k1jsQonjVSLzyUd49qZRjfGEabRLSbY4HE8M3ZPqDS1X8z98aGFTu5ernz7DVeJJhkPKu7nsLjcNQK5",
  "key28": "3J564v8frPCxtTVNEqiwZWL7miCMc3JjPhFmsUroDCgnn2Uo8ZA1ouZ2yyFHpYfryBdje7RNGF7pTeKMfJJRDmei",
  "key29": "43biJ2tqSWspdkSRrpprk5LJVPKXnSyaa9uKFyXsKebHBwFT4qxhMM59y8jRtMi4daEMdftfBRQUm1YYBgRxh5E4",
  "key30": "3yeLCW8eUsx1ggy7RfXxAVgtML1K1FniWGpRoBnNeiuLya9LHAWaVpS1zFMLm4ymExEHibeqLb5Lxroj35Y2h8i",
  "key31": "5CuXTGBpW7NfquHikGdKk6mtqTpgZLjk7CEg4MEejLjszX8oUKj4saGQsUxf6ivM7YvHijUUXNKC3mhhbR95Hf73",
  "key32": "C3vn4Jj8QoJivj3nmG4Zhm8SK9oX2ehT11Ud4UCRk4TTwx6Xx585mDDcAM9nnQjiKGzeSrfXbSsrEsrgid8n4CD",
  "key33": "3XgfCbpjSDwDpy13xnpY9MkB9F1qUXgQ9h33N5NVAsybDebwiHmPdRh1DDHqREyvYuKKpxZuYAKLsR77z7m6VAwQ",
  "key34": "27uPfJiGuVWiXaZ66yeZymHHa3FVHQc8nXXYvj1MAmVqevuhr1QpRRTB2o6XaJxRGtJZGx4KST9xKNdAwjtZ7ks8",
  "key35": "4BKnv69QhgYJUyPYfJmNv7YGhFhn5tXjaLaL9G2B81vXEu8KoT7ba966uJ8wPfdVrpE4nyu72aePYAVER94i2waN",
  "key36": "4MQBp9CZFr6Qpac4Xy2c3LPsVYDnQhfBbjy6S3Hrc9HxPZAze75f4nGBJXTU7FzY76MA34JS8ZoUHr1QgifTSjbV",
  "key37": "3KwjsW8JLuaKuxcyhHDaBDrWkdepPoTaVjErnfisuwZv2t3qQbUimPuTvYRgckmi32g6kVGGLBG2VXd8yPoZjtZh",
  "key38": "vjaz394yJgLfnDcz7ZJaDuZCxrXPn5DZRWcX4V9upq9bGga586MD6JBJ7ZyQLWWu5fCXjoNeRi3rx7zt56XuoH7",
  "key39": "4edQmW2ukP47WwYsnRpLDpbeF4MtAM6PnPmPZQVqHKrtq898UKkoCBb1qEhQaKVisut4KYL3jDnomNYokdvM68ca",
  "key40": "24bhEPb1D8oYQT9U1Je65Qy6yHSkDricJQzLix42pqPj6HrBYebdTiVKmMBTJ5AjcE7iy3gLVu5GQSELv91SAFLu",
  "key41": "48AUp7Bj4A1zjTtajt9wgi8GTCJVjhi2Y5f5rmzN8GsSEgMp7VusuPFXY4jZpxypeGbesSkuNmF3VRWnPXsxYLH9",
  "key42": "63F3bt5V9p8zmpMbtERoHC8iYAh4uTDfx8cz2rpgbM8FaHA58htobKA2EjsdpJ3gtjZcfdBeh5cXofMfSi5rvFYW",
  "key43": "2AN5kLSDCHAypHcmJPQkiiQ65kTeXFgt88CTdEZdYSzwdVUa14mtUkzgPcx56MUCbKqMFievScTrX5gsPU6gN5v2",
  "key44": "2i8UKNZabrpkTp24BRQDfYZY3jSgp9PHo498kYzzD8XJfZcQe7FcdajwPWBBu5neBaCEhNnzV8ScGH7VDYFv2gnS",
  "key45": "52JSuJ2CrzMwQeHaJUD8LK717eWP5EjNSYUXyiswuG6G7u9GwMRfJMhPEL4T5678MV58bJCpR4GMjDuiAjZqm2Nd",
  "key46": "4QYK7YBnbRMzU45e4M739xQf1AMFEcm45cjy1owioQen4WtdrVbKRd2ANYUnxt2hYGqrqNCobfdLtWjvSgBtNQZh",
  "key47": "3X1erqssFFakJeTb8kc3NxdM7fK2T7ymzDwzKWLVNhNYfBogmxmzBpF4e4ug1aXLjqiujUgniY21FDxptPRJhCKw"
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
