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
    "2X5NuqTeEXH5mqvg3aqDAgwep7rn3Sa2ybtQSL3J6dD118jaXXpLT7Ls5H1bvWrJQjovFs9PHfzybWJd4GgQuyJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vqnXQRHJwuwPM8ykA3PwJ2YWMnKRrnnYxdffgidxzei2gRybVotWGq7kdh2cz99JYpD4tTJqhTjfNhbnwKJhdw",
  "key1": "55LfmG6JRDGnsFN7npLZyWLq4DQNcsC2wZPByVgsFmFqYu9C3DchZU7KgXDM4xHHoik6HzqqMF5hqJMCjRGQ5cqt",
  "key2": "2xiuNmQGxDkvyUevepEGumHgq6fW1oywKjsu6zerPJ9Cg9Np4g7Lee5PmafHsxnE5M9CQUvmNfDVPdaFuKe8qmvk",
  "key3": "22w8KZw8zSRUrPMMKgXEwiVH2wbNjXNcsXVbBpkW2xBMZ4PnT7G2DwHNbt6Y1Qhdu29KS7seFt4DdZ2bqvCYM2TB",
  "key4": "wJHJZuougUufkHrbmDX5n2Y9Ej9sehVFvF9voBUtPNoLhfEPetuDGqSNr9K3QqpaFJdERr1Ti6EEzLZfPdvHRx1",
  "key5": "5HsiLmg6fBA6d3oK1ogwx2oYrdRSKZNLSSgwTRa26XojwYBAXL554J8BvPcLFsxJV4J1ki2HGCRZBqsWkiZy49mv",
  "key6": "4egw2DBeHxADU268JFUqMTnEK1TudArtYvvE5G7jUXS4ixxPbWqnuhgezpwq2etgQgTVhfvBzEDKMrD9BBCsbwDH",
  "key7": "4jvSxjdXnCm7uQxqf54NY26kw8wszNxuFvxrYnFHY1aVqb6k7kcLiEFY1VCpS5Pz4hN31GaP8VMEjSJQEoC5xdwo",
  "key8": "tNJRvPmDhyFh7gPq89A8Td7KTYVykTn5iXa7oXmWmuFDjN1BB83QkozL5tVAmow18Ecv147XM8gP9KkYjc1prJN",
  "key9": "Ao65FfhonUyAHb67hKTUEfkF95riJXsLh4Kgfoh7LcCF52ML55aH6WdFHrwBsz7G548aiEycHb5hHSRgDYfRsFU",
  "key10": "5rNBN8GK8GHEVxcS4N7Kj28o1rzCGVnQ4ML2Gj7C8bzNJ5UydBLqTUzTNsGZ9FpSQx1Xq4CiuRr6CD53x92LV3ZT",
  "key11": "A5e66M1HQGQKmYpbAf2v9RYWNBCEQ5EuroSQwgxVYoH1DSR2gqXoKuJrE5EDAi9qCUkx9xdamAHh77WvUTQFNjC",
  "key12": "vfmuh93DDiRY8qH7vw15gKHV5j4MAidxtAyAMxQcoYSX928djwZsUmGA9RViAjEPcZ6kBgTabfRYY3zq1S7GBpx",
  "key13": "3Pg1KCHWpLAAGYso9UzGNHwhs7MpFY14eZSc8TjobkxS6eGegqMytR9szLQGyX1QoC7f4HpKeCAJtD8BoZKQ3jGG",
  "key14": "3ASQ67UGeESG7ZqNrkaZ47QamVFpZN7oKFAkLyeg2mbxUK88aqSxXjNiWoN5sq9X6JAkF7aviDtb7GA29cdJLB54",
  "key15": "4smEtY3phdcQePQNTRsCfYr3s6sXjGHRVU78ng6ziCQ2y3yrpLNNdnEAAHgr24sjuUCvuRZ9GNwkJmKxyZjN3XMB",
  "key16": "2TT77ZQHnZynodNiz2UJgqz4yz4RB3noQVWAiLnp28SMxMt4kgGF92p9UXrkE83cBPqWC1sDfPN1XQAp2PQi3LrN",
  "key17": "DUNjsFPMN4y9fbY2MoDRu4rsTVToKdjjBm3ruwRqd5aM9HCicDwZPnQDBmymiAkzLU62uw3BhAip4Dy25hwWw6Y",
  "key18": "2uDVouf7DPrFCnVuj8KzSykhWuAudJj5aFiyZWsYnMsFJy2McP7e9pMHB2i2wisv1LB6X8KVtHmUbuefvVTGEEQP",
  "key19": "75ds4iKot4qJWAej5TspYAVNzYwp4sbYuyM4wiWdXwudXpvyYuoxQJPauhBAX5UV3Dc99FsCVUXRARv99CkFHra",
  "key20": "3ftzAZb3DfU2mAwNXA8DekaqNYh7PrYuESwUoddGRgC6PPQK6QH35do61on6XrQFjRHnk9VxCVdgceoSEnSwyp4P",
  "key21": "3bfX1RL3YTCLURVgtPAokXWEf7ezzgEm5iFurTHvt4uC7yqbnzWeFJpfPhVwuGhUYFG2Vo21eqg76iANHSQmcjba",
  "key22": "3tq31PifNRKH5mLDANzPWCx6Jv1jGXReaHNLWj5Jp5kS8CWtZ6ZotTvfWgrheuifkh9FV66yzLBmSrcFo2tbkbAw",
  "key23": "2Lg2JkVne13DZbUDd1cgB59G2jL3k1ASf9WVRGqrmavuHgzz311hbVCEEf1T4vxpSug3gQbzFffbaSQhMo3Aftwx",
  "key24": "4wfxMQQXpA2mUDCYe7D1b8gw5iCPUeaFCDTa2GaPp9uzpsGvXveeQGgmGsoxwG3vdD79mEkAaa4NsTP11kokndAH",
  "key25": "4NNs7GndiM2BQFLGVrZ9ZqGY7yYeqB6Er3sD34NyxnGh6BEhnicMdZpwhjK4kVRhd31cESNU5Xt4jpniTtxnDdv3",
  "key26": "WdHPdr9nKMC45NhrMHEP3dVLLSpZgyhJDV64FvWLScnzbcHPsKP3BrUVyw8XNJVLvAcqi6NzrDdDnJSVXodgFc4",
  "key27": "5RzfYcDjPYiSgfPUh1TroVbERNUpA67eXjGM8TJmQqy1xFeCo1hzNM8prPwF7E2t9QVTEW1hn9G6zbQvYvKpENrE",
  "key28": "QmQFv536a3TbFtpbye56xtkYEkXptwEeHKGas8rVzQ1CKNxf31bRDeJZA8cobTroirTVViYkinqb5B54zSqhyFb",
  "key29": "4ciGWt4TNLKcvQVv12o8D6gdF3SeVw7KSaPFLXqVQsbvxVjZ4H7XMGYUxoc14kQ2ERXAYzxi1AyTak56VjToDYGr",
  "key30": "2Te21aUf1w4uXXwRUerdBbxxd4bAwhFNoq3PZfxBv5ipKhF41NBt9a6XqpcvoCCuVeaQ3aQJaoDRBgZDu3ZCnM6H",
  "key31": "4q2bVsBZHUf7mtjk1TfESZpLnoT2AmpD7RgoGCRLxect2kxkK4hVGHnGnAHjEHd2EEfmnAT586qkb4HTLWWz2es8",
  "key32": "5MSvyUFa3kEQKKb8Vq7dhT56LC48QARoqpaKVNpXUM5gKSPJNb6ubM7WgCNWBKNz7bbzwqKLcxv5ga6WjtNEAYiT",
  "key33": "3Qy27PgWxzsij7xCL6bwZQ1b6pz6WNqZFNMaoXR83NnbJMVPjyjL7GowVakk7BuMDg9vfNd58FLfaonBNy45JBXP",
  "key34": "4xypUtnGZXDxvckgsncJfTRZFgqjhhwp4ZtLyjqP4FUuKTkpqezQDhQABmRbGmqXBT4qhQ1ffFFzCFiadvBjto9s",
  "key35": "5JSNbKTVdqWybuojLADFHfGXiBWhJCuadDknLLUsWqP7yvZkx6qWzdoyEZwwsqN46R92nMUzoMjFd99WMofyuBKT",
  "key36": "2bZmHf8n6vhn4ajpGYx8kmhCYmzZRHVMGrnJM3du7TtXVeHzqZ2TnbErUteNJdbZCAArquauTYaxuqsmHZGjQxMh",
  "key37": "hPYNjqGNd5j1S3wcQNAMFyk1UbjtDuqXJDmEW7fimG1Qy5neSaDQYn4bdUDfmAQ8HAkX6ywYapphLtmYsE5VGAc",
  "key38": "63yXrGXn59SZwUKXmcZHH8Zrvczimth6YfdmMuPweguEGieHeuYG1PZT7Lg3wLC22CLbW5qYBWYAet3XBqr86UUS",
  "key39": "2MUFVY7Wmgp7Q9Usn8x3CcSxUKZNimqb4vTaD8YmtViEC5P3CHQUTJTYMFyBTM2wi5duRJPQPYHRUSwYUfHDB6SV",
  "key40": "5CuR4Ti91TEQVQwZKmZyzYXACRoEz2QvJJdfWAsc1jZRbKfLA8bk3MhfRkroHHyxj9JgWvbsqqpstxY5o4bGu8CA",
  "key41": "5e8dockUHjJy71NcQ5SHmGLLtZJX44uwT5gmznSUmygmUPyMDRpXuuYCENrdEuVkqoPhvP6NLwsen4kpm19Y5Hf9",
  "key42": "4CAKWqX7b5rwwTg9Zhoe3Sw3xEsYue9fw8Wh3A6a1b5KmjLAsqb8TP8YdniYUVmhvpcGviozgeSqSdvtFDMKKMDv",
  "key43": "RDScrS615adD7zuDA9xNZaZ1Yvhgz9r6RWSwZwfSAudLW4Si5LK2kVdwmMBTyXLDg3b1DyhAK2YNvcWixqEq7WQ",
  "key44": "3Lv2DLxBVdTU2mCeYsAmqK3zsTTf1hxAPWttM9x7mAgcPkMsYCk5TX4t1GBaTWSRsgSkyu2iDJ6jLjuAq5N7qv18",
  "key45": "P4pAYMLVjSV9XRTfhFChaGVx2GfJhdE3jvmCf4bK4ZLY5uwzJkUfP7pJFSputjx8pomr4JbXt3QsF1vQyY87N7d",
  "key46": "2Wo7Tq9ETwCih13FmuGABAhECC2hN3iFXD7t5F3yWh7uUDWeEAnRe8RdUKPCF3JJdodQNpVN7xDQJJiGsefhtuxs",
  "key47": "5wHMXa9UfCwndN215jeRutNkyeASN4uMtRaEFuQercHg6uYTdwghgnsx4k5CMQnFaPMUy88zTs9tuyEeaPv9Nhj8"
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
