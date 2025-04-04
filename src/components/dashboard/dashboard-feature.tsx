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
    "8iNqedF97sLjTxSWfY4gkmyR5VGxB3f4QFSurKsyn2dCS1g8hAbvx1CSBGnyyJsxm4wfPKjMer3HM15t9BJEwNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2h2k9riy9K6eSPtV7rKc62aQjZifUf4URmUaaD5AcPTMj2PLU3bPecTXBJFVedCxYLEYZGpWZG6SpyKuX6c23T",
  "key1": "4s1DFs89YC8JsRcQv7Qj4xQPydAVLiNjvCKh6uNNM8bwi6TJXp6CGevUb9i8QuXiQvm7SotSKa9N5Qx6yz77GxHK",
  "key2": "AonytM66WyMcv67YWrZgKU6VxYLtPJA8goWoLVsYBaDtZytHdLbsSXzc6Nb5UL9nWjws8v5Z6VnSFpRr9aE7w8u",
  "key3": "2wMHXhf6YzJwPuhzDwzAcx7fPxFcwqP5xaVfwSMLFm2mrT2VMHbnyDMsD3eKkUf8oVNunkTGZAWAZxC7EnieW3h7",
  "key4": "4hxGWtZTprVtFk9SJ6AT6Dg27Fkv7GEVgf5dPpdVHUmztksFHYhnAMvgHonaSDTnfpEGo6uBdMij2HzjidXM9XAG",
  "key5": "3x1A5WFqp1pKVQERdYg4LDRLkiApmRctKTzETCqquePxvMyg7BMg7HAjd9ZCAAfkYq7ho8GptKEGmWynbKQvQnRz",
  "key6": "4TLv8RcDVm6ArKLVNXYzpLDD1KCoeFF3bgqywb7eaaqgia9xSyZdtY4QGRDzrDdm797t6h3X87n4pJZCSbVe7o7T",
  "key7": "5n7egzMTf4obFrG7Qa2dQ5q1smRaQpJKrQ1xyppdrDbWCMgBgj1vQi2NYKwTeaux871s38ybb9LupFMLvmTSsJef",
  "key8": "121QxAfPcC8Ft84zvdwYUMcWnzDpmfehQp6rcLZe7dvSnLBG2JapDF22mPTsJiBuvQ6b739TVWhARw52P4mi9Fgq",
  "key9": "5xjFnU7horEfpWatJd9i1Gp44Lhnu2ygDgirz2pvkkFoKh2iuJEhGaS15nDN43HEQEFfziT5Pk3fzCWeaBXxn6YW",
  "key10": "2Wv6L19aNVSKsBRPHsDiyZxnyPzfEenLt8jtxQQiXTC2bEYxkdV9J8S2T5tmy3YjSRLZTqF8gMqFv487tqapkJqf",
  "key11": "3uP3YMmh7xqcpTy21TdV2ht6ULJPwTzAboMTYMNMEeCuB1CUB8k9emRuL2aUiTSwTfaW6TToSSr5BpdiEgNNvFkj",
  "key12": "4c1KZRU7CqdMUeh3QYZG2M9fBQ3WZvfBqGojUKJfxeCgPzNh8mzQwFP5wHZ7LSNZBEdj6L2XCYvabSTNM5Ymofj9",
  "key13": "vuZWbLJNqmY7RGVgW2b9BR3aBqBoGpfn5nuv7oQNYSd7bx43DqbpV2wVnkDhctw6LE9PWQZZWWAQjUd5HhT4FUW",
  "key14": "5daSNaxPE1P1TVP1oi1XCdScAygCpJZfeA78t2nHPhWnWbFh1dfDGoFeogANXPB6umWYWBw6yrrj9t5HZR1EUSvD",
  "key15": "2n1WXfscno3uD5XqEcauUS3eVmADsUUkGZX1T7py7BGt151z6AeW1fgzSnxnbMYMji2mCJEWiq3z55m4FY5vAfyN",
  "key16": "3ToEMVh5nkfECgUuoBXK5THGscyGjixA1f1dU7mwYnWhexVjvfqyVeJskm9mjAEyLxMzi2xhSzXcDgBLppFmj79F",
  "key17": "3QvBNSMa1kZsE8CaS73brGYMnyJGZXP8fP4JsoG5cMJnh9F9nfAf3qhcAYBySEWc4BK75uuNt7UBF26vnaNtUJm3",
  "key18": "3Ac8SZt5vGhoF2fbENSyvgHePeu1cochNSRQoRHEsZRbhEKYvxrgJQsrf6Jpg2rEsPeeskkVoDjEFk9JCmFjsGNN",
  "key19": "2jsa31SK4z8LBESbc6LtuAoSrqRZmk2mPYSM47mGgB8VYofNroe2r9VBymTBKH6cpkEDW5p4rV5sFT2xrJAQfoS7",
  "key20": "aG8TsKMZVm49fNHHrMedF7TXoU6P2z5n1wxtpNvT9Vum9xWqa5qYGBbnzisBRHBsgeqi4yNCsA5Cs59A7ACbf6i",
  "key21": "FfQucAaeqwTpeVP7FVznQnrxMkPkTM1WRVH7mqN2Vor1m5c2gsJKDHodpCfA6SgTZ4B49iNuxTMJyiyunyQQnHA",
  "key22": "5xvgw7G43WgtUrGXiEG5BUmQruEwFa2JwpvQfvSW5QvXNRZZTz7xDNx6HCeFdRWMYnS2Xce6v37HQWUDbJF9Dope",
  "key23": "23Na9BN4gBQEyETGipgiJfy497c7gVDoHqx6BqTc8TWhajrwWMgQHyxWSWM2Cx1AgsvkhV6wEwXBo8py9aog6S8u",
  "key24": "33FVtfiJSxip3w93A35m2MLTJi2r6CW6eFSC128gi5ACLP1SsZq8G3XK43CGAXT2fifVAB7j5BsnXp1k82vzwisx",
  "key25": "4Z2ZVUvoLgxrWcn4aDaDrJAP2J5VAcsuZKsmmRi6wAmcB19bRUJyUZGeszicb2iTP3RgyQz3fvsRyzfrkfLPwnrv",
  "key26": "3U5cgzxzhsLw3q9eBZNWJWakSCosn8J4idJMBi5Ast5TSNnU1erj8Df2i2M6itmVHzVrrzDqa7bh4bSGfpT7N7Cs",
  "key27": "2HVWtFP3855gW9tBYfXbs1Wr5dP8eY72rrN7DYqxvuaFbhdThxpAhofCc5uTF2grdyd8aFwtb5rmAo69sgbPBDEK",
  "key28": "yZkpLE5XkFryR68pePeMH6AhxmagHEnnLj2Gi7D5fDSZWjJZwSGr8spkCpjPEArYc9AYbC1kEDGPjv5goofVWAY",
  "key29": "2WYRQmQpFsx2TixSDthRaF1XjCMVyNCBZ2mEQg64XvSKyZRmMLBPVNtri6zavEuqQDUB9RMjVS3s4uLLotaufb89",
  "key30": "ZLsEec5TpBQDjfRYtaTfrXRvSc3UYsgtnc4GbUZbLg2n5PJMc1VafpL65jkoz4qevF1FMbW71dnjz4HJA1pRyup",
  "key31": "3MECcD4yQsgKSJ8JNM8njy1aELjqQNXBAZauP1NyXAxR1iYBc5nC9y44LiAqPh54oxVgKtAwv29aeH94uZ7R9CAR",
  "key32": "sP3bRsgyJresX9b8Len4D7tCThXTSD5u72v8N4rgiWKrAhUord4AAjJ4yegytQwFwbVH4Au4J3phQ9GmH51MfQ9",
  "key33": "582Ec6mzvFP8wpc8N2qgqVV46JAmapC7KmtuBKXBUCafMatYjm7ioS5MGYDeNJQFVVPpSUCBYfztLkwU5dXyDwrW",
  "key34": "3yJEFdDZ2MMnmhysbBd1PLQTsec8fTvxJz8RyUMmZQNmSfGfK7YMvbAuTLVT9MAf87ah7urzoZCZPsioZaU4Sriu",
  "key35": "2PQkW56jTQu1C3ad3tvQgZBxLpTxmY23qDvUj7n3ZrB6umA3iqQgZndqzTt92zJR3omvLzHcLuGiBn1bEVbTSN9U",
  "key36": "Tpm8KKG3B657hMq8TdoJaxyMYLCQhmm6L76RHGpG8Bzf1Yek6DLtBUZg5f1tjhgT7WHXo7fixAqYScbRxDWEHX6",
  "key37": "3y3JqQQXhR23w1Q2qdwcDKZBATg6mYYbhxTiiTDf9Gm5UJrKEqGR7eqa7aCVw8CXhwemCrUfs165riEPGoiqALAV",
  "key38": "5a6VX9UncUt2skCdZqXyMaXzEYCj482ABdSiS4w3VnXd7kE3SVf6AqH76Hskk2oWEWvBz5vBCBKWfEiyLhgm3zjT",
  "key39": "65yCjKfYNMS9vvtdSycFXf73ko6NNyBWKw5EkyLQBCpYUsK7UveTAJwPhq3Fsx2acNLbixbuKqH2oYo7MsvehfjK",
  "key40": "4aaKEb9YEb4CGNcxd3zq8TQ8PADsEMXfz1Di5tWjcFuayDKzarXHs9ihVoXKE2KQvE2L3SyEvKCD32npzG5KcLT2",
  "key41": "JcvRtuQzcDrSvjdSGcNv6dV3cjzop6iguYZapaBZ2Ebg6Xnnhe1LZZTriTyfHmKSjeqSjcviNbjw8NKxhpNGchz",
  "key42": "5WsqvvRaMmAQogALfzPRFb6Y7dmDr1fFJqEkcqScJHn75rah4YpdPtMgaWJq9toKQivD9XcvCN71AQA3uk3mXkVq",
  "key43": "RiUVhgSFLFwx7EuCU2i8w5m4hk3NsNhdVbxsegzeeXhKpzkc2ddGjCitH1Ygx9VJM3EoYCFdnTxyESYYFdN4ogD",
  "key44": "ERPQekxCvoT5uGh8FXobLeZTEhcWuA4JMvQu63YhoG39pqxRBDe8WA2dH1T5Hw5akckzc5NNpV8fwvJh3SsELEx",
  "key45": "5Ek8rYPja2TjKjKxfqc4X3sCaephd4NDfKt4fvrZwBQqdxTra2HzmHFwHvKBcUgabcnW4LtokjYWt4K9TG4w6MBK",
  "key46": "48e1wQ4MRuZptHaH8zo3BqfZW96FrQnENDbotFjE68iRfnvniTToVr1snd9CFMPQE2A8d4jFqp6esPvc1LQBvvTu",
  "key47": "3kjypRdtV9inGKdiLjefszaUzwQ6p8vwWWxuR7KLXGHtX4Td48gd4VZbu5oXvgfTQno5WXUBnuzD6sMo5mDSNdyr",
  "key48": "2RFhJFqAVJNCzLok6fZHpZkr8TkNtHJ3dAkFXbbrHDH9fzHfyCvZAiSns2woeWUzDnwPLqmFAdKK8zQ1TyqTzt66",
  "key49": "2dgExqgFZrykCSSycnrtxjUwXjmtmFgDkDBi7NnvADuJewhUtGk5xzFT5HM6GBW54WvG89k6s6CRbYiZMQM3BNMd"
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
