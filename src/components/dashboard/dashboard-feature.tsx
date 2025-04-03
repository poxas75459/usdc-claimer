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
    "4RtoMZqoeBqNbaJoDaynF7BoxrCqDAvf9AwKCnE68VDbRRYo8ZFRsueUEjEXjCM666m2vdC9BNzRWTEL6NWYu7hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYaQ4t6vPErxXrkGp7trWJmkCkR8yz9jeRoKX4UPhBZZ7BG8GLaGBd6gemqM3yeeJ87fjQ21uabk29GP3idYRaw",
  "key1": "SXYVjvdokfL2mT1NqN5XuEEMxFWgDS8dwUhVgZcpgX6HJf8EkM9WqCsJvfH5AEnGsFzndJFjuqbKycn3ESwhPnh",
  "key2": "4LyUBeBBu1eGZvTduBiJCHscvZRKm7RVf99Pgbqz7orwZSvMpQaL5bK5b3ZD2hE9P6hCkaxL8dj6YJWkBaNv6nQ7",
  "key3": "4Axz7ygo9jPrBwX5wx3E923TNiLXrPbMwZRBLHqxhc73jaKMJvHrgnxQFuiawjNUDhY85FcbBih5R4BpYR4aS5CB",
  "key4": "5g5jgVpoEiMAxwD6eSCE8eNzgzQaMYfsfZ5VZQKwGHYMCPS3UKRLxD3tJ2rwLyxxruebw9SR2j3SudgWPQ836bwT",
  "key5": "66Np43dCVeuHwoWVrsct5euoozKmfrD4dkmx8Uxk28ky6A8q255HW278wxP7KsnJvBKw2oQZgwdyrFaDPYE4vypk",
  "key6": "3m95HMzEa3rZKDYJLSS7WHcA5WVbY5JnphKDMfosy2vr8zf6QMTH7k2DGpGJ5pk5dxcxbr2qbRCapRSFYnfAQyuf",
  "key7": "65Q565Mj4B29ZQN1RF1kmRGx3QULbPN5dQiQUs5xvUnz5kmJc2A86NEetcKWyHHJLKDD3hLXvUn7dWw25MjbwsgZ",
  "key8": "Xc2LWm1MAEUaucAuv1VhP9brrsJDRHWbMhuBNS65pNS67Q9GENKZreJCgmAbhQLaySCQkyHJ38hBgVM1xtypJox",
  "key9": "5EUDKXz58pdiFZft1Ty7Pchg9KMLnfbviFejndGJfrbv9TfzA3JMhToRUCesRyaLysGJ3aA9td961cuhbvDCXytJ",
  "key10": "54gcLoVqz4QZ41RbxQfoCx1QQoVvYasRhQX9JBtdKzJEHPfNQ3kghCv4qttDtRHrpzGPSBmbxdkQUTR4nGH4hbnm",
  "key11": "2L33EGCgYoh8eSfixUMJYtbWRfaciJ8k8MqpXgWjBQtgKU1b62RcAWZo5uQHseEVkpUsTyzYNUSpaKQVYroe1Yss",
  "key12": "4PMgJDMv8YBWLaQBRqTzbkQKhKo9iu7trJ7Q4CAjYVuAWQi3n961eaoLoTPe1iZ93EwBpa2A1tEq4eHaHHpRu7Y9",
  "key13": "2GgNfKExQxnv5zmf6rnSAy8vJ1USCAAFKAXB3qqiTMwDKLMAgjdv7a6ygE1fLKXhFuMR8LoGgSfTN7ub86WFmPra",
  "key14": "4vzBaUGV9yykgk9TRvpHsQ6cFsGqysyiDPa4MjvwKFX5f3gjHm2W6CiTL7cLeiz7mnQNSAPhmmmbHHKSi5iNhcq6",
  "key15": "5ToaHi4Gi11cquTLJUkKL4k11MVVKpC6kkJHu1pMPR46kriY2DaKPKacxZXZ4GMoAbsP1DyLirminn7iBQEa8MeJ",
  "key16": "5a1qdLHTkiWdmSDkg3XPxUn8FWRE4tUupPt7Ve1FcFr5SYDkZLM4ixs5LMHHrXFAKkokT4nyboubL4QRVwoHLKXY",
  "key17": "syFMzanMBywvdipF55yYyjd6UMeUHFu9psRNxak7HVktz4WzepzobCWmMZQ7BJeMFFtDHKAyvYmf11bzuzkj95R",
  "key18": "2DRJKjEushvvp76APbCW499ciKVfrXfnWbQ6TKKwtiNVHivdTfJYaLYgLwbsVQYhwFXduP5juPQ4ENpEk1c3vne7",
  "key19": "42xg5NnbPei7oNSGQNWcrnn22YeicxX9v3b3ytVPiCiGwp972VWap2kt5GE5JhKVWxxc3wbsUNa3UPjPBNfoTW79",
  "key20": "2czUdZ6s941rTgNqBc1datnBrSimAyZapg5KUDkZx5LQyiTsLYM8K5aNckhHqvxDCyAhhbo1f8FbFV8XfDVdz53q",
  "key21": "3Mvfu9RJ1HHnT2CxRzvpWawxYUM22cCkwRKTV7ZfrGJV8Rz6xau4Jhy52mtCyyU4u68i6BtG4FDEgsUTuGuwpHnM",
  "key22": "4aWRC4LJt2Lg7nnaWZQgjqi32pJ4iHzyzRYjUQVejFRHyr4eo1Ft5qXn3NruXhLo9mpo4FMM6YCXtWi4RGGWvnN5",
  "key23": "4gWfXngaENgaa7i8WVEFaf2KSUccnYdP3cgPHu2WW2PxBU6QYryGBKLqDiFaVHyqddYqCXYz9zxgGs7EZhobdLot",
  "key24": "F3yDDYwUPgdTBMuwYHpSrxVdaLUS1egkNhGnSdfuhdzU4fa5ztconL5jyuf8saF4kxnGeZdg2sVwN8RAPb1QeiM",
  "key25": "3WZ2fyqoaGLb8VrFdG6rXQsCzWNPfvbiSUGoVyaFrLChHvFm7tPrhAmMifZKq6AtHHhCGXmeU6kECeH6W7joRBvE",
  "key26": "4BSzN7Wmpa7WMPMq9sEH2oF7sdp8NgqnogeUVdDnbqASNxQMGe7W2wdXy2ProgSjCTiPAwKUv2abt5u9NPNRk718",
  "key27": "3zNnQnjUZj15fuyCmdUMwYWG96oze6xpfBNryafjqc8bAMEeJRzwd2QsscG3FKQM8vBiykrdx865hkTGwJuFCKas",
  "key28": "4ttu7D1EVMB2bcKNuYH2nx4wHfBtXtz9Kh4iZHnW6AV6u5TTMCUe1JTAhZ4uUXuvX61MnP14R1duZ3kGqJTpjcwZ",
  "key29": "2pj2XJFDvcqHSfmtPmwAzbT3F5AQpNzjW74U5y3qMcTLHoYv9W8ijofiyxQhYdxXkxHiYj2nAhSEtaca6yTDk2Bg",
  "key30": "357gQJnghecueE9ppjqywHzxKV6SYp8FmoKPd5Dj7EPn43YeW5pAwtiPQbYcuSBGdF7ZCqkNRpSieSqp3KXUDhXC",
  "key31": "2Z65u8ig7aNhXkzXPcCQxrHZ4NTPb3H2t2hXYDvmFQEKw2HhPCXbtyznmKYCK2btuqZ5pMSuAqscE44voFd282t4",
  "key32": "3P7kxP844RnUmw4HSoyfaCdNdV1wsujtj7nu6N3iZEjz1kqzD8qYaQsQSjgRq9AznaYRpz1Yi8LwrZMKnd51mXxr",
  "key33": "4u4f2Ex3CBcFBpWjm7LuPj9gbCjGUKYGZNRd5Wa6WT6JuQyvV1SEvgNd2wfPfM58gdpfwyHkYvGBc5sehrfGkUKb",
  "key34": "xBwBqGzat5LyU65r4h2WSQojRbUP86cWsFh7mXXXbpDGVhKoxUJNL7N5ncxNALxBTaxeLfFuQrnQz8YbysnCLCv",
  "key35": "fYkaZoUD54QTU3HJnWvLs8eRbEPhoU4tRRt8wBEjA4v4faKm6jb8obhCzNUZnff3QpCWkrbR6EJAwsNYo7QvbJA",
  "key36": "3kCaPf4z38uFxwjSX4wxXbSw5P9iudgDfrU2U9BZiysotsEXzBiquyJnGwETR3aP3wQACkizqjwxnqjKwdhSaa9e",
  "key37": "5W6j8Rp943tPAvu5uLVH5iB4KVdkrC7rTrGf3EKKz4tTjXdWJsS1hCreNT22HgCo57ukQVKVBL1L8JoGaLubRGQS",
  "key38": "5UAmsPnVv5Rnpxv1QywsAhub7aDLNFo5HvCYMcS4FBAHwJV3nUYnfEzcmsaoXUT9KxJHCuHwaqNhC2rkzu6nUfa8",
  "key39": "2xrm7YuzmVRuX6eqQLefDMgtmUjgDdtNK3E7vRdnT779SGYuFQJusuCuJg6dnJGzEjX9RSbhsAjLxWppoeCXzx6Y",
  "key40": "e1BeiLoyoL5uHft85qnhPdhvk4uZpMhdhePb8GfprUfP9UnFgz9dJUaDySvsrc17TBMUY28jooBuqpbh37tttPu",
  "key41": "2XiLdM8Jb4HyyjseLxNhNqa3ux2dsLeVjUcnEd7eFGEARUdV2jkVgsfBF1Eyh1MDdQZNdqeuBaZ49bWDTBDRdG3U",
  "key42": "2nEfvHFs9dnybmqNFaQdNi4nWDiep8Z2774hXuXxfZBCeXfPx7yed6ZUjxWU2k8Po8BHASXKALfmb5u29MUKWMiJ",
  "key43": "3qcZ22o5rzvKRCocGW4CMK9cNzWXcb1fcEckHkryEB55zcLMEExRt9qT4He48VhwueztinVETLWTPZCX1FN7vG6R",
  "key44": "2X3NhQUoan6VXWMUkYCexg5xYtRQC29UsMHQkhouraWmvsMTJi9j9Y6BDKTYcjpzPfW59VZi3HNF6TM2RZTASoS9",
  "key45": "3vj63PJ2oz76xmdJxYiWRSoYjYB6Pne4qwBXnwMrMoPxDu2JRs9yWJUCmrfZKjyddS3nGsZpr6JgFrWuzms5s2C9",
  "key46": "5LnqsXpmdMM7cMr3Lk4D4dngMvfqeCUb1fuEoqcYiib2M1gRjWzYyEAFj2US3BbVXpfE8wj5uTeCyC42mkhC17kF",
  "key47": "2A7jUKErT157M995An4Uqrafjg7qHy9rFNBPCGyMhk24J4vsLp8tteDbUvUEwoYGju4Vm2DCQuhy8Rn4kFRykWSX",
  "key48": "38gQX2Zjxs5x4ZqRU2yuJ2wQj3voWJTRqQh2nJeLYexhsAN8E3m2Kkhdp4ZGYSDjtWgr22n2vzcW3CXRQxLxVY9j"
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
