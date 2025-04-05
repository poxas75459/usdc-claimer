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
    "4GywXJ4MRcckYd2qz43ZXDkysX5QB8gKdHCMWCaihXUxSDEuhas2HyEJeKDGXf9dtv3obJbRMtraG1erbtuxX7kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGvNJ9kFH7438XVa7Sbuc75hTYwMwuZosey9f4G2WEbF5LjSGnMtURr3KDt73EQnJgRjKZKAieCezybFFuQN23a",
  "key1": "4LjAw6a4URjgajtkivQiQZ6RZH3NNRcampFH2172bvcNkTkCpmfYEAkemmuXZUoGzYvtyHohWguCoc6NLCw9KWoy",
  "key2": "23acq3ueheSniwne2w1DvQpm3vN93Bp926Q5W8GyUJDDGYdksdmbmSP45H36NXUCQdJBJbsGPB3gQvw5dscRJjt5",
  "key3": "25NHrKQyNYP2JbyqZJk1QXpXBweNzSqg4Fk3vGAwfQw1PkUmoTwN2spwd7vUAPES38bn4824mTzAMJLFiKjyTtfi",
  "key4": "3GCCuB6ukRjQKqyM1msiQfop8wgXj5XniFJ5tZLFExqzJSGzXT8j2BL2U8nrQhNmVfyt3xunb6Vv9Q17tEd1ME9N",
  "key5": "3LWy7BTfuVv4koPgRodF2sHx51nkQDP9sZ7Ke3iAWgms7srCY45rYt8HHgHvqV2whiT9hKYFp2zqZs44x2sdKRjQ",
  "key6": "2qhu5TtfJeD1PGko5NBFJqWtABtx331sBd6QkYbcw7o2GKLfw6eMbve1s2o4tYHZHZwZb4PHNzj3TxJYb7T9X9dA",
  "key7": "4DfRXjm4KCG8CSJPd44HGcadtHYhXyD2jm4QanKML6qdJ2gYWNH5p7mv5hu1W794E8H1sG6BwBbNbM7p9mtSdXYs",
  "key8": "KwLd84cvDWvLLmLfERxQPDXcyDhxMp7kmAfiakVNvTGifnqFHGTpJn7rEFHCW95Rde1UCmhBmCKbpmuNkeU9kr5",
  "key9": "4NzGTd7CphFSeQuk6ChVW9Rbs5NkGS1Uhhf36HZ1GjkgEZ6wU8GQfvbHdaTYBPmHuq4tZcUGfid68gfu9gwvLDjc",
  "key10": "4YpM49W894gDYtKEnqhZzxN5RKcatyrw7zFLCMpCsQQQnfwqHUpJoC3jTah2jri7xzGFSBAWxcJLRKkar9Tf5Kft",
  "key11": "39zuS8fsmQTSh3siqMqKmZMM8VZ2Q7mHjyBJoddGBwVAjZJ2GqyEqidxs8VrKJXgGZuGbX6drYqi8KPqFPW2gQZb",
  "key12": "3MSmjQNtvvv6JsBHX555CaLXKNuZy6WiLEGQNciz8dAcF29vi3Qv8GxYsQf8PuN4TQMKuHyB47bH6SQfjmB9yPEZ",
  "key13": "5ikiWLfQAPty8oHZN3DTWteZnRvKWV8Bjvud6nauQ3gcyg8diwoLtcd3upaPDejZ3qcp98hBY3uvJUXmVGv56KK9",
  "key14": "672JXJhsASohW4Zm5DifFNtP8zA5XHgG5sUPtPBqZ7b1pS1AiUxnYVAiXfk4vRcABN34VngiEbGsHm8hBeXERR9b",
  "key15": "4C8KPP5vQqQjHbdLkJFDJaJ8UZC4GFV8kmKT8nH6NjPK2moiBSPCf6pFcycmRT1Z1FyMC5VdMHSUDn7FjbbTXNbi",
  "key16": "2Z342JadzcR6249iQHNSMAoAGyRiHrCbYoKcqvi7yFUAENEWxj1JTqk5xctYGEzR2qjcYe1NfDYmDAtLJok6rLFv",
  "key17": "2C6eR3k36ZRhboe44LSyioMaFyTXXBLQDuxkkKjZqLJjmY3yXD8CNuZk84XkbsGC7CgLkqB1ih3Wp62rRTVDN1Dj",
  "key18": "nhzoXW8fKjVApSjtcnywA1KGFBs8iKTakgpjyMcBF5CCy4NnWh7gGGyBqhvBry6yCGPEKXyQHUcURFnYzbdZy9V",
  "key19": "2ya6SvMnmHBydu9HPdgNqgDo1MjPgXhtAX3gLzcBA1UpeJai4vwBbqRwwKJkqBpPfVHLjzyndxDQ16kx4jRKkAkx",
  "key20": "4LjY1QbUR3fe2ZgyNA9bcV9AW5Gfs1Kh5ZjARK7jNTTyCDCia4fk1gh8LH2YFji4WPNKzw45c9GkU6uxBCFZsdcP",
  "key21": "3K18cE7mK8nU5QQmxp1mLEdoyRqurSdr3XCBi7q1vGEipxKpiZk7sgyRVHeGrQPLudv1NG2ECKJ3hwfp2zTPrDn5",
  "key22": "4EpJzpZp3HfsKiQ1cEeGPkuNBFadzDkxmfG3XHrjtPgX9L3ywcSHPuBY956SnkLztP8LUuAFT4gwjCqcZ27bGJY3",
  "key23": "4frWUWWAbwzTq2XPX9SgfrbJaKyFB2TfWNitKEynAs3iaEyMXVFJimZSsCndEzsJH3yTHcnNVBaAtDFPSgnbUMiW",
  "key24": "4zDX41rmjdFMZVeTGczfh1ttm9tbNPoRpRaC5fzfv7fn3LVr7a9VBuTS5YA4b2L133schaBpSMREmwdJtL5EoweD",
  "key25": "PwP4xaopo7GkyWWjKkDA9EmWiXxVmaDcpXpQ7RerSyCnoKtb8FvkQW5CvpvGJiaehTr1bQQoNLTDoiYE9GWqvVc",
  "key26": "2JMG8tvFZ9tR9ZMua46QiedpHjr5gBuYY2pg2MP58nKrXoiuVTZLVvvXQaUrLxPc9a1aTwu2ZA46it7s5i62x8Wy",
  "key27": "5kkAAaxMoh22f4cLxJgCEUoRnvqGmzEkwtS3wB7nvYezGeDfTrM26ExM8cX9ayRtH5LyTrLwkuhkW5TTCyqLyxhh",
  "key28": "oaJxERogGTjA41VtNcGSdRYRqaSPpknb5VXvyaj6LTv7xfHYXguHXaMyujaAHtxzJJ6fANPzz9vGrdUUsPssd3m",
  "key29": "3hsLq8kJqWXsXihnXU2W2Pz93NGs8ZJWtmQHSthtvpeC2FzkjQcJRLrkt8RypQbbEPnGoDNb4K17xoYVTmmWGFeg",
  "key30": "4Dp2LJSzSXkkjTWgzhaBTij9rEXmMEA7FQD9YxFFWv6Qn8ksDXEGDpAHmgTYWvVPU75aYupLfMed4YYmNzmSWAcB",
  "key31": "NgG7B1cQ9tYU1rPBDjgG6sen5rjCfzQmnJLv7ehosoe99uVmZXfEEYxfc7yzaDLmSzvykqRzk5AMSK6qunj5udV",
  "key32": "3FMt4jW7bniqTrW57rrCjC2Z71k9HRYZbqwmFve9gZqtykaK6wLXDZt7VGE3QisWdvmwJh4LCifWrB43v3k2y4w4",
  "key33": "4ZdZvQnZsbesPfTjPThjznUAMYGaaALq1w8ryKaPc29FkVfqYAFpdiCRN2RAnnndV5e1KLStuUEA799MirKjcKL5",
  "key34": "5W5J7oiuUpSPrHM18xbZuyQ3PgAAai5X3XALUBaRkp7wGRDKQ5huGFSdgsyvDcr2LgWU5jt3CKrW2hT3XZxnKPw2",
  "key35": "31jAihWTTFykQ5rhHCM6AZiYdyyZ38kx4FMTzF1nYMbBH3dVeSGLhFUHAEcmGXZFBiZHcMqndDNt3zfCEiM6qxCg",
  "key36": "3nySmpmQRrqvtRS4jPxCikdzCVRrYFRgFpiNiK5CRVNtE8vjgff898qyssU1CRV93wgVLNGwfS1sscqiC7rgpzXK",
  "key37": "2oKcfsMR8VAubQYVtWmRjepPYBNhMVEC3mbcY55SpqRssMVnswiP2MFV2kge4PzrzUeZtEoFe8pqGWsL8fJik97d",
  "key38": "2chgxk1QkbLuE8f3Bp3AdkDDJXfUYhm4B1RhEUaN3bHN1DCsMzSMHUj8T7EtZX9DAe9kdeCHiGjWEiJpbMUfnG5",
  "key39": "2jkxzrFUZcZpUdQpKt5B5w9C8dpFpQJGCSxEADDw67sYPUZEZGBN6ngj2avoSEPoSHKTH28PKmobJkwkZGM75xwy",
  "key40": "31tQXGynEb8w6FsaTYcFLPyzoaW2tQjpT5fChoRKAW2TWsXCr4zxiq5UXBv36PuKqj4NrofZunHSYEPSMmiBRAFu",
  "key41": "2V2reDkX9YqwwzNpJ8YzjuXNe2gxEmPLTe6S3CJwnLfurNcCQvUuQNoBx2BJ5ooZ8irNhpgV8D6LCf5tfJJTZ27r",
  "key42": "5YWqdtAY1B12NvFqfeRV6n6vpUtZaEe7FCqPDUv9T2NxGaSfSExZczEMbUWFWvQV2oBmxTGQzeSfHSDKCs5amyd6",
  "key43": "uLyo83DJ6GHnvzeVLTFNJniVqivTmwxPWu5KjfJS4A9WMkJqdMSw2Ljohigqt2RqrZtm4vyfSk3cF82CWK2JMfg",
  "key44": "2DcHmX4kyvTs9fnPG9HAvmKJQp7eYf7khb36MVGfvYTaR4M8Y3DW8534GyzEeoRnhHUU4e2C6bqxJ2UUsLtZrtYc",
  "key45": "55hi5tDawmnb6CRiKRrvtxV8npAcYzKdYshAjGiZz2VKqxW8vSaPuE6m4wV2zyphvwFVyaQ2GhA4pGz22xbYnY51"
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
