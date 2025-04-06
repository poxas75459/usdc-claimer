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
    "2v8azyPi4CWU3D61JGDm918Pi75535HYXTueBAnA7J1jvDM1nzT9SqMrZ9X9kKSnYYUBD3TkXBf5Bvh4161Fpg1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctJs7uyYQ3pf1JwPEpge5KaXGU9BxdMFLmHRzhUf2ckFf89gcvX7rknA4D1cggz2DrAT2u4PKZBPpEfyAJUnsPJ",
  "key1": "31rR9rnEH98Rw4bMJvtFypcro5SYgsRsiM9rY3HDHBUKxoFmqZhyLvJGtrPbEBChqHBSNq9FX3jHehhd9Bf5jums",
  "key2": "3NbxmkAkpijYbaeSL5TeBZoja82btVyz4jHjh7f2Tm9ieTzSjD6GxsFWq235s8L7EPYKicfg4cZT6tVykyXLYNQv",
  "key3": "2M1mK1pZGjrPcKXDwJnBNHu8c9Bbgy1vQGeztmXpzDZHdnVYkZKDFiiDDmkTcEZmHFiiYinDdxkrLJ8hGpM9LSGv",
  "key4": "37AxxSBuM9QufYCMeboFUXkYy1qFnUZgq4ZBTatd1RA3JgGdo3oTMCAD32wgJTdgQfHJZWVd5ePuxgn2uBtsS4PD",
  "key5": "5DtxpnxTWk1hpCeGQyonZr15ysSyzipdvtDfuSuecdLjboT2fMFD8vefCnDUmbUidPTtLFLvd9pFavEEkVad3zm1",
  "key6": "2tiRggVKifw4zqxS5fwxnvypWuZAYycSAWiraQY61gChKzNqqwouHotEgMse8ou1yw6bQ8e2t5SjXrybnmCxcYdK",
  "key7": "5eTnXnVRgMiAJpcjPN5mMgjGqr2aAC1zN52c1B3KR95zSRAx5jrJdKpbVEssQDpRWUK7meVMq1jVRxYzCdiJR7cd",
  "key8": "XDwqUokvLgpvWHnfvnmQshShURUfhDLEdFucG1K7N22dwrtAPYEGVuWhfCBMj8VhrZGibubnoZsc9ZaSCzyM2t8",
  "key9": "2HSsZPa2Rd9yzYkZNF2AaoLumRDEJtWH9Mumk8zQrTmjymscrWhhPvbRoM8fH5pH734uLCHYZ8DX95nKEEa8AicU",
  "key10": "5Vbvm1M7j8DQW6YXYjJqs4u6RER98QW5YYvKKkjVJkwtQY9UaDveeH4UWfUg7UchE2juKVfuozgDLrycMnChhkD1",
  "key11": "3JodL4dWJ6LknyzpgW3oCYo2SpwFanqwpspNXYRgJmSTAcYRRdbcEFtbkjMAe1XBC2Mbjs1f9zU8N6vZiAwppZPT",
  "key12": "5RmAdd7iKux7vEJ6ZkitjtaLbasDVPpAHcHWfzdrcdAfbExTyY8a8oc8sjjaKYb2gKM5pgMzxizPusF4vssA4CrB",
  "key13": "3YsTsvDZVLe3RqcfGzxZpdRjxfhwErNynST595iGSCSZT6Mbk1P1PZjJnEqp7GcF2JGA4wp5PQh97VMoSFp4VwA8",
  "key14": "5z4zCiJkAYrgu5yhzYr2L6oh4sE3aBxqrCxJn9zPbB8em23E4nv4nSmw6h6xZGJ7qePmJaigpdU1eQcKJC3MwUCj",
  "key15": "4vA3UPu5iLXw22HVUL8xdDvNHqL2rW99XJxuWvtn6Lse2rH2DQSwB3Ci2SVDMkmNPhEN19GGU9bEG39AP4GHjXxV",
  "key16": "3D7UXQHG6KxUuRyZwjB33aCxDanHVQKdZdDxQtwFBQ5dBVX8wNXsCHedHhMt5xyJoB7jYwEULYDMtm1qNarVLXCx",
  "key17": "SAqgfCfRTftgUHsY3s9fbd6t5xQZuh7DEfdWXn2YgQSztmspaZ8y9TYes7Y8Lj36xwpp4QWzokP25fsXdYqu2DT",
  "key18": "2FmfJg9ZKK1gGurHcp8PR2tKn1NxMi21EPSmQqC91ZHbRHPp2sJeFLJLyPtRBpknCAvLyoayHUx7iqCMyqipmEkz",
  "key19": "5AwidpZGJWz7XGS8jW1LEBcWPtt53Wf7v1DZNFQzBffdcvQXh7iL6kzomDj9HeiGogVj8SfXGyPWjfCDioz9HGks",
  "key20": "2HH1UreTZpahTux9LoKNF3W23eYns8Wmo71AuNYqRs2cYt7iYHkRMWYt2Cs4EiW3TbdDZ3An4jRHo4iLo7x6R4ne",
  "key21": "oFMTSsEQ5nFLbQ9g35MjzVpYLX3Kf7GkGG1AoC2cqgt14LRyGFum5KQHpFP91sbSvveBD8eUp86KRyJVQ5FgjvP",
  "key22": "htPP8uwaXiVfaHowEPoMYKCrGNJiEmsDDY4QiFPRdRRSHiZ8tPcD3znkBZ6N23gMa8Mip7P6sfEneLb4YSXkqPq",
  "key23": "kDEdMotKV3jKq86WSj5EoXxXTNGVgoHEoCJwnyUqUzF2UvXFcgTap72FXTrqM7gNYUQDoNJf1ZiHhXN2b7eqDMF",
  "key24": "25ChPrQ4qS1vCBsopVFCbLtQVsXiAAhNn4ygrvrwWoMimALzUz9igeGvf6EZ6axKasrDQe2Gaty5JKWDqg6KUU28",
  "key25": "4fQ2Epm4DeMjKc3BoTqVerhieMJ9Q1QZM3SAXkMHphecFvtk48pSNS95sxGD7jH6iXGnnsfnKzrDQ5UY5ikoHkKE",
  "key26": "4osXTh6HTrCQQSxdq7xQzWd7XF5iBGfxEXD7y28kHEJxAFRrgW7b59wtcdNpJMayuTEAaj1HqrBM4gdZFBPEFce6",
  "key27": "66xWMCzz6MQv5ExPKWY6MRUo1RGvV7wnZ3Cba8FyxEzU1bqfrJKsZpXvsz2zKzzcGiGJcx9DMrtDqVGE2Dd3AEu9",
  "key28": "2dDh3pj1UoJ1P8vkieqY13gTzG9Kb3GPQ39g4aawqU2EsYD8VZdW8DBbevazFfHW9S8rVPUX1mVsTdhRuLMkUvKC",
  "key29": "58NPQWREeWJJUi79bh4bTwarHV9SmHnQa9zpQXhyzWAbAguKspdWC9wjZhuVE9K6nyo4ZnSrk3iKnchcw63Luuiq",
  "key30": "2j4PRCVHmcrNczwUk6KAbz8o456t1JKcFavdbF1B1QvMBFnU99CNadTFfJeDGcraX3syPzRn9pK4Ntv2NiWfnky3",
  "key31": "5yZ5DKeLa1HM1agwguVULTmz6bRt57UyzewgnFRtECvQCTigDTMuhJmoUEdUfpkKwvVTfdPfmgh88rTDFekGGZwU",
  "key32": "4VDYQWGwMDYvHfuMqMmNcNzTVk8sJBrL4pVo6UBKbf4c3cGgHEeHzwEGbhk8QFZaq7PsXEM5bdb3RNDXmurtDcsU",
  "key33": "4hWnBLxQTNvdqxDdJAJAud1tK33Z5jExMuHF3mXzVxuQBt7cGnYMsJzQYzrNFuAezMXQwfKt5KiL2ybrjvZUaMDB",
  "key34": "YZe3iuUPUKiEfg3R7fwQgLzLi6zn6n9RoQQsV8erv5GR8LFLcmN9JYRJYCELcwCwnEnsB9RDsWTbf1HwYhzPhwg",
  "key35": "2YzPbNjysAHz6hooQcsV8HaMbJgLgU3n6WqunC1PkAKBrbTeXbacq86HT2a3WtN1NqiG8RM6c6idoCafkCZedJCN",
  "key36": "4UrfcFYBYvza7frvoJxSDu9XzP6Wu7FUycvuxPTkZSZRXhKnm1KcJy5vsuxqfKukEFio1CdF2CfJm6n2TF2RtnaV",
  "key37": "5RmWosSYECgswnwZBZnpB6Zm8V7rQno1idJ5Ys4Y9tEFgmUK76b6TMoJnwk27XHnUDXmy2FhRpPj2PhnRAPP9DsK",
  "key38": "z1usdokUV5e1jZoARLaCUwwyK6QqcxaTbC78s7vo54JRa9YXgbqvjzbb7FTcq9tXUD1u9jFacf4AExXm1oXmx6c",
  "key39": "3w6SgcFEWo4YzvFTx5DViAj6XArMVCGNjBYtgS3ga9r1AJ1EVcyw3WdYTGoejtKuMX39H148BFwnchaFZsf37QXd",
  "key40": "5dFsVSPvd7irNgDpfQ78cjxhRwtAeEPwLMMfwSmiBT6DC4bgqPzTARNQLGm2B4cXB1mT8VvLJiyXAkmJMen2Ndtm",
  "key41": "4TJKGtcyZEGe5CKwMJQdQzL9XeyYH3HnehMdazoBTn92Qg3fACx1Fa4NTH9bj4maRfPJXpTi3Ayg4icfTBnss6AY"
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
