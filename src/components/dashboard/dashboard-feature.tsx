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
    "4RZsVLfNEfeWZMPb836B7ChY62GgiujxbZiahFAWerLYjQxRUwYWDmCGrFPccpSF15GZsx7hEJwrrD9CA5FW6XVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cW6TDq283V5S2GmbwW4vzm9qvNU4gXWxXNAvmiZGF5T5ykmxW4QVNjKrFja8qaYf1NVEyG7L2WjDQH9jTiWXxbb",
  "key1": "5Vr4rj2VBWBrjB8rKRQGnoqZGhgo7XbeFDVQMua6c5vaDsVMBqjM4YN8D8LdV4YgEXKuMo8F4A6rBBbGPjh8xcxK",
  "key2": "4WdxVyNW8xhknXRubbrJ3AQzh2cHBXrcUFR73cx5PTEpr89eLVv2hutebHcGj8HEQ78KRQh1T2NKpUAbYRtAqC6h",
  "key3": "2QJfQE8AhhG3APU7DJuFM5yW8bckd96tQpR1KDpy3UzQ5zohBuNQ6W4LjPGYZtBeJ2HED9DMtCbdFJhFgJpDHLoP",
  "key4": "3wSd5UwzjsXfT1SBxwPz7ijLT5N6HBz8ZCG2tcEDMX77P5etSjEpFCNbyiYXpFCwFqgXFoCYD7nWfabdGuMptZH3",
  "key5": "5SZSvfh5HAetP3LqMUhyoDFxPhunS5zfM4ATECUF7rQWy5CPuok37dEzXdJzBTKYLjJeNb7B3KDpkS2NBJrwACFg",
  "key6": "3bCwsT5WrHijyPHVL3NWryvorUbp1sCYNi6tWBL37ph8Eu7f5iX6P9KvtXvb5Bs9MmQHh5cWG7Unn4d6wvxms7er",
  "key7": "KyTBvCCtbENMirgnvzXzUT1vbp53qkVnS72BZoKY95oTUzxZTFbB6eop5QB68Zcm5pXziVYScEJwBBd9pz4Pj4Y",
  "key8": "kFG1Wc1c41sT4oTdTJjLurCnsWCakZ8qRMGJe9GGif7pwvGTAE9j5b9x94UELyP6sEq6jQyRUghdvavgxy5gGLo",
  "key9": "oJ5ftWsLuyB7qVaGhmpk3WTBTbg7yQieJvYhronkzKYfy1tVSjNikpbrXm4wYGGrE9uy82NtiZ9X67wivdDr8nk",
  "key10": "49JVJpkC11PdrnSqE9o5jTZRoPNBxDtu32Z13Nfy1QYfPieadRLDexSaYBEhWzQ41xij5ZWNwYDGKTx67Pe5UXqV",
  "key11": "HdHmwBM888iBcib8jiKoLU43NiiCbZGQxKWPaVfpQBSrFVGnNHF3GsiMEu7gwZQe8aRfk1AZ6V2iX9KCRDT4jmc",
  "key12": "2QmCQAN2zpeGdJsdY5LTGihcyQNjZmTvuix7Fx4qYQPSsRwGCzyfAcmJ2a7Ze5LuP8eSNUBfB3qjrcjKHjY24fJy",
  "key13": "yN5G4uuHJiZQJduMAGbrRxtLEB92CokfTsGBWxbWgM3NwYXGkMZGTwAoMppvyZBUAgzEiZLnc6hbRfx92fCpQaW",
  "key14": "5NV4rZHz2WhaoToavY4zp8R5zUEfC1xAq339Z5Q2vmk6ZU7WM11YuuCtca2XfjUraXxcdJsAu8E4EiGFdXp1SMh",
  "key15": "2zw9MswNYjn2b97URnpiMXAbiigmx74cjHr73yxGwJqkdHWNvJsSq9sa4yNicRyrY7m8dwB2zrX7F9dSxDGqDPuq",
  "key16": "5m7GMg2dJRtVsyvKRP3mpCXyZ7TSLdTLLJiD9CTS1CTjYmuBHnXBpPJLVU7HCnj5sTRtNsapSth7dCDLabjzGLPp",
  "key17": "2Mhso5Pp6XC4bY2LaHZqKJY9MMoagQCdLdvtBgt1v48FmeimiY6ykyYksxduEHoX8TyQPwT648HuVhLufWxCyPcg",
  "key18": "4vmR8ub8sMN8jnnfRyxwLqt3cBaVKCV8v7uDGVo2yuWs6aBZJsn1FTU3VdxCt94zDFbmyS6GfMR9L61QRKi4MTBY",
  "key19": "2hf1QvoDkMi6NDNnsiSTi9vE6jgZCvWgjPSo7DTfx2UKVA5jp6fgXXnjC31N2toi9a15qfsAWXi2RMcc455dfRaJ",
  "key20": "2m4sTNYdCX7JkBaFWDpQVT1CT42nJ8aHJRvBdArKBRWzmkY5tQAfy222LjPUMPViV4PBcFaK2SpD6MxjU3FRZEhW",
  "key21": "DDXn1H79zb7pnKTLsVJZghtNwYGLb8pufqnKu91RebVaTqxPuKmq26prwpWjG2XWpRbGuaUugjzmrLrVmQGA6uo",
  "key22": "4ZNHMrzEiLj4qzUGtapGK4Ex56E5UZQvPoVYHFq87GTYTbzuVEZz4pPzYyDbK89qDzcEta7VemLxV4o7fzV4ZKaF",
  "key23": "22zkcN6ukJcUHYpxc9AwxoEno1CfAhj7KJtVfMabKommMmQZy1RsQGH63vDh2Wyt98oHZRyyKVRPpBfVJ3XX2ghU",
  "key24": "2cKAa8iqR3t4VxXQxXuHdDd6tDbrZXphF2t617PevYKw6DfZQni2WPJC6SPxAV2Zx6SnjQVSpgPVdEX2SNprnMvv",
  "key25": "2zrsGKMgSHzywWZAejGErF51YeG7sEZaTvj2PxEDrhqRs85RBMokC9Rib61xi2Rsn2vD8YXeXkNA61k4mtwAapSB",
  "key26": "5kYUbBeyrKDyuzyvEDg24aHodtbSBtrQYyGYAcSCEBNhRYS1GawzE6DuKQQMoExsb2pARL49WmspGB9t6ivT5eAe",
  "key27": "4mXdGaWqoTNi9wdu25vpyUaWixkDjv66F1RBtEPhsxATuJjj7DrshBvMFkPPTSHbuoyrrSgp9jouGnhLLyZroVcY",
  "key28": "KGgxt6AxRNm82TkbrDoBCggQ7kgMxVnjvwyiCn5NCpgpBGmiux94pP3J7yHa4dkokdfWctbWYnRjZL9CXuX1FUp",
  "key29": "9pVCFe4LrP1HnmeBi1MRaSJ5zup7RxvT4ChgaDaCJwJdijzkGLK8tqBQJyZdsWw9GYdGS2k78anXNPzXVBxuGjh",
  "key30": "4QQH9UoQr5vbsCuUKdTb4Q8oKaq58zjKXN8fFn1JRYVqq2rUYuJKV1Bf44CkJuKgBq4khfpuGc5XkZbYMEKUh9Lr",
  "key31": "2CTauzg4YxuKMMwY9HENqXN7osxbwZaTyG53MYKzjvq2kgrEPF8BUfZnY9a8nqCF9kJJFHEeGbkZRWkRrZWRgqhY",
  "key32": "5s2m48bLWDs5me37qxk8FDGMSc5wMFohFhZpX1qUDA4tFFwDinr11K6TRTBtk1cHPgSxYzn4QsanTrFidnX232Uk",
  "key33": "5a7xjxTm7ZJ4N6uKFf4PRQEaFPGHvrQZVcEhLP8MHt7CLp8MTscBf716uatYRWaw4fwkLf5pm1ZfTkK7p9kt4yDg",
  "key34": "5htkrwnXnZrrJvUyGB6gyoDjKR9ekrkjfcDKrkyry2hQ72YZRj7ptVVbvRbDjH7zhyL7U6hm3xiVhtTdqYgJCYKR",
  "key35": "2MRVZmj3v6ytGgWrumHkNQyZL1p2kgJ4AzxLgJzqDPkcBqWhKxJGi3MrG83uoZjtxZrcYQGmMBVB3aeoDdh6Bm3k",
  "key36": "5npiB4ngraUvWsVMxVE1Tx2jsGExjwuyESVP1se5ZHKv3Ha6c6MKdzxv1FzsfhQCri5Z5EdXzP8DDjzGVp8os2bs",
  "key37": "NDhpvWFs5Cug3gaEKmRYvG7V1LW258x9R6CemvsXCVcD675GYia8Pw7Bs1kATLskEAXw17xbLexhfvEWkUfuuyY",
  "key38": "5sp11w5hzD1vnLBJCQYnVP37u7RxQA9wD27nudXs2aatScZsWNxoAzH5ghw9ktwBSctCej7gfkw3nfacKXGjqTes",
  "key39": "jnFnFhqphu4xvtmfZiGE8c8K8Ds3mUAEP1kyhKJMaPkTSiLKLmrRPZXNz79KHJbmdXzqSyj5VgojoirQc19BRnT",
  "key40": "2Zkco9Ledw8JysqwN2sYNSxybYZATru17QvyyoULCJDALwuH5rVPNd3wYX58hzG7K46KDVdRvr86h91LBHqWJt4N",
  "key41": "hBcX8snottzpoMx5JNYpXszR5BYU61girQQhbs9tCUSzDbFBUvz2kpRAeD8Q63JQ85neb9sfrnUkEcq9x9tqY3E",
  "key42": "4RZTxA1GhAoVpDCXSCE2gLw8SkqouQAUPg9SpjB5Kc3Xk6nVTiRrM3TkrK4uxTWJymgJP7iM6ERfHJTKz9rPFkpe",
  "key43": "5AewTJ5W79qUsKQsGELnmRMFqBWvegPby8xcn6ttRCQQLR2tE1M3wTHoAdZKqAzoLcKtDaXpTXL4cPjHG829daS2",
  "key44": "3o4z6qDV97Mc9ZDNDzwfoQeBLwV4w238vQGVbrYYe97inJjm1ZTEt42iRdQ7QYkDmVSYPseRuAKC7mEKuTFWQkXB",
  "key45": "58CV1P9ajhGMHutFVuvYVdB3WMtSkskSLrP9peCwpJh3rQczAuvZQ16sDM7W7t1cQwPyfyTdriK4kja99XUebRzp"
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
