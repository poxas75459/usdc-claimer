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
    "q8RRpVaw5NdRYDofKRF4592SgrmzNsHPEQEZ1AJiVYcdXcfXaQYsfvW4XjoangFFZRgfAUv9p43o7fJBkVQXF2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PqAdDmoR1yt6s4FPMKkg7XSM2ajPajY1D4dpgS3fcUSX6KUQcHpBCdmGUvMwf5uXuLMqH1RM9dkhb5LpxiBW5pJ",
  "key1": "4LRyJVRYXQowEV5tAd6TgN5ZNrQASfUiHhkaxFktgM9du5k6qR7bbSehmFcz2Gr2M6rCqjWjAtX8xQx2TsGZKphx",
  "key2": "4AH9bD5EJi5nENiKeZcJTAQgQnkrw8Pr1X3xGNvnJ5d8ohPSX2HqCW7D88GKDu4o9T3CMfkiaRV5weLu5c3HeeMZ",
  "key3": "3WLLY44C2eKiqiqVta7BHoWkWJSxABheTeVbbaWoAv2QMY9sUMBGbyV8hnm7bV15QEs19t6337SZViEsRjwuCSaX",
  "key4": "3hPesrUUYmj3Zj25zRLDxc68qPbeZgCVqK4UrB94JhihXN7d2BGrosryuzzSJta1uuDPPfn55TW6mEEEdtAvwBTj",
  "key5": "4FmcopjoJegZDhznH9gxv5eyLTKU8gF8EtomHYgpoegVahmNLJHoCXKRenEjQXM8cC75MRcQeGjjWK1gN7ZKApkg",
  "key6": "3ghpDHrPNxzRa98KaQ4xwiWgS4a4BCQmp6DwXytjss1wb8xjp1B9ob8dyc1hycrVWofAi9bjoft19MfuSZMwn3xG",
  "key7": "45PYoLHkZxUtLs4zzTzbNTtP6CvTpoqsmLfgQoy6LNdHrUq9fbTCXSLQygnCvpQeaHcybhR5X8JRTPRuhn8d4ZXn",
  "key8": "j16J3fqUQxACRRPK4skaGbHLE6mNVLVur1YHBpVWsfgp5U9XhXHq3cr2bTREMPTPq6qaHwcorL8C3MD74BDax5o",
  "key9": "3sC5uPZ3XXW8pP5BoKHvffVBvCR7kYXZpTS2TA18815RdistWioZPg3j1w8JgciEYbY6f3pQXXwzsJsVjuKxAE7h",
  "key10": "4CZHSXMwb51Vzz3M6rZsJxEu66XQmsJ24Bmf7JrNpErNGrJUqdwDBWUpegLpNvZxKRj15yqbhVWo3KyBs7d3QcqT",
  "key11": "3FGhxW8AVVTxeKiaYaNfqEuciP9GTX5VruwyfDEYeBc9q672XphQCv1aoCWXamvYUHdJn36GH45KqY7QmkjZq1zb",
  "key12": "3cotWSGYAME6QSQD68cbc3Fre9mheBcRzLk1yBaGgJ9MQSmXTzZCVzWAA7q1Q2SCrsPeKw9QYs8WugCmyrviHZ26",
  "key13": "59YsKwGXBnGaLsV3KMewFeWAb9KYNSAFwP49jkr4vA21HuanPGWJuq4EJChf6fjsZSTDy7bMqmC8HwNDm6QU7mLd",
  "key14": "2C9TYEqsLQ7Ljs63YRywZtXx3omB4ZSJDHvgj1ba8MqoALbbQamioF9KpgDjeTz5byhcmf1HNPvgznynwNS3XNSy",
  "key15": "33TsyXhgSNZfiU1kL84cu7c2889U5AS7r2351v2vvoqjGET7UESLV1BxXxJ3AhETfjmJ4nSUHLtp9UbwPt34anpx",
  "key16": "2vVmhU5WXNttep1cTVjgrmAzfgTcLHGxmoHyHTy8mJ7gbVhR34vJ5deHptKHnugXeuDd4mvZ6zYxsdPf4bysUHxm",
  "key17": "3TBwKYbqWC8zV2gUv39JkRq49nPZs8yLNoxibAUPuMbujxkknU6fKjFuRVpSoLt8kKVLhWbjLv8tm4svjrtWfnuJ",
  "key18": "6dD7TFZVGchYHkkzPcBJ7S5bpAnNpXPaZxBkkLQJSSD1epa9c7RjVseSVMk9hP23HwHjyza5szjWuSt4fqXwcPQ",
  "key19": "4s8si9QiK3gdxkgnxWWNi4sSUxhZMkZBubeGnB2RBVtU6Py9e72sgnTBKVp7RU4Mw74A7eB4y8X6fhonak9aVh6H",
  "key20": "5uvL9gieM33HenZrKLPn5N1K1Tax4gzSogxyeWgdTjFh1R1QpcUxDTn1MJgWYnNiQZFvVK6NyQugH4UbuTQqMNYs",
  "key21": "W9nGtmF5b1xVFF8fU2x5Rs2UewBqka1pSYstPaq2kHeJMaN1r2JVPZmFHFQjMPvo2J29kTBGdPrdamVtdU4azLC",
  "key22": "J6fxAYjGCK1NLpBiPjFbCMq3UaDyyivZC6sEu6czmSbE9kLbdkdTXjdb3Pou1yZWBX5vjy9uHwDe8de6UWQhSpj",
  "key23": "27Yv8yhtqX84UCiEz3DdbnfRdZ9cu1GqFnVLzVEYfRqzV635mZATYkp6NXsb2zvUVPGAYp1cRbp5T1AmXdJ97F2o",
  "key24": "2e7y43jNsXcWXKbC5efybCCUoDNZR8cqVzduujjEiY5ySZQ4je3YM51yhSZrSSBqnGx5hPfHUmPNFJ4gzGmJjjBm",
  "key25": "3rK83xQNXeTYw7CBGeG97fc2yeaeJYi68ek7jgi9so8uExN5hxbnm3ztbkUTQ17GCpfgyGRZ1wKejuBjqy7bMUKv",
  "key26": "4DNvxCt36hmjPoybdcUEKvaeCMkihqY7WngzB6L4fNV3Y571zdk5dgDYAWKKUJJ6hg1RyV4NX559H4sA2X3ZBnsv",
  "key27": "qSuRR4ce5mwoY6Wtpw42a67UeiBXBFJ1a5AHYLbcfQiWhstkDCQYnbaxFsjC6SmWqXtF4xL88YKcqCwmzRDXeH8",
  "key28": "5TyvM8Qdnj2YiTFaeQG747STzD5SMEqTmRNM4Lb2xenK15q3pFKW9mmY6xPG4eFp7Ab21cySijku1NiL1P3Df5DP",
  "key29": "2RjnNKwwY9cGhBaNWeehPmN9wt89wYuWYiwiCGLmBzGozkeqtVNmAa1f3qf5cYL2qK7vpVgv1krXYzKjtYQGtEwZ"
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
