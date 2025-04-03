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
    "3HHpsZBgL174F5HcRcLS3P6zuqE3s4MYZSwXZm6PZzQMe2Z3diVcKzvJqbuuVQZehE2PyaTpX8tnvTxZwfJwRRd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kLaKrztAuHiTrWE1hkGGX1Uy799ZJYnwNR4JPuDUkaRsveTufYfFBjReHzsd95BNJxi3tSGAys5v7sfYSaRNhZ",
  "key1": "67gPdzGPF2h6UHvWiJUSc3ac2iLuennKeEZw2boHUwkD6wyH8Fvb9E7pMnbKEukjhYzNKMuZDdGKRxmiWXhbMNuJ",
  "key2": "4mHvY8pUGEymQJ61PiPqgAQ9r3QJDD6zpSWvBVPmwMF5ieeAkYoDfdSmS3m4tdi5BCXHT9R5pGV9oMe2zU4hxppN",
  "key3": "269LBkNtiWsjudnuqmjak5jH8M3Ke4RAtX9HotKHsPsosLgzMm9JtSCanNLLZPg6rZiijRSHW9dC4fiiJmqfcWis",
  "key4": "fWy2MvgjJtkyi8sfGJsNXX6Sabg1eZFSh2yZXFNWHxZZYMWBV8KovFda4JWS27BFT3gH1jc3QCibqVcDAuVJexU",
  "key5": "3Y9PJSF81naipCRYNSKGcCeWnm8KvLePkAsqmGMYMWnQ3iW8a7PWT9coYJRXDe7eFKpyv2AUve7uMNs2uwkttod5",
  "key6": "4uWhMmQrsQzyGosuJTJXn8TNgvLC8uqzEks1hcJzVbhwi89m1ZTe9aehxBVTdRXwK7Gh2pspSYHyFcAbvdatT5xv",
  "key7": "53QDSTfGCfzeLLGnTRNAgQzYvtGSNpmvpoVpDXK8JMnykP9Xjqi85pGaf7GtYgeP2v1vkSdZnUyQbDfS194tCJ5M",
  "key8": "5kmiSjhqRAYBZGy7Sk2QBVv5GoqCxzZ3C3beCghyZL8UVctCTfVREx4a89XwwdUnXHfgJ1CwSYh9e219RL7493bz",
  "key9": "4gMjMS4pSdFzy5gTYvRXtWf94xAZWp1DdQfDTzGrPB223zdkF3Q1h9THoaWf6vDZDhT7qrZB2HEjQdaj1UumBZnf",
  "key10": "3yHLX1iHQ5qLosY1Pgoqv7B9HSXz1oTocHoWWZVo2KcxAKmRo48GM2BR4k1TEh8hHp4WGjkmNmz3EoQEdfoNMyvk",
  "key11": "3m5SKniw4ymddSwEoJUo8TPGjqdnBgTGTfjzGiai84j8UjM9CeaAUJqjQP3UMJscvonZM8MDm83maH2Cvv3oJN79",
  "key12": "tQbp62hZUiRCA4Z6YytZaynXyUeLxQ1hQ9Jnssf8RArvdb1cjJwSwoteUHzuSP6NPygJobjB5DSNCf4jvbW4HqQ",
  "key13": "2WGbyNCw37hAp1NgsepR6kzUF1CSvTmq9xPBLaZeJQqdHKFoXnNyNMFsZMakhG7YkwC9wvLwgVYQs8rCjwhpGQem",
  "key14": "5N21Vh5wU9aYuqugbQFuUDgW6yqGFXooYMKQQnxbdKb4v85NEJNgFonA2rHMBi1vgVN1y7YHzeVNgtz9nMyadPMP",
  "key15": "41STgWDEaYKHfcatAuDDQmPYpFJvYRiZ7ng2CEUiU1hvEaz4TvRA8NwBjUbxCfKU1sTKgRyfmbJE3ywjh8aJRZtj",
  "key16": "eY4SdLiDgHCbf3fZcPdjPBLoAB5hGNnXRabize715ASNLLrvbznSEPkh17GKeCNLdbCJXdDHfY4ozVq1NubbKUB",
  "key17": "5gPfcyv55wWBx9Rv5XktdDobHdms22kBFtnf4uDup9m6jD7AaNWcWU6MxmDUfVM6wwjL1amNrtx5QaCH5q453kKD",
  "key18": "2gYUVCv5PmLxP2DjjHjxXA7RE7hE2aA9ZEMkBttzJp2aSf87REYLYvz6qnJSW1d6mDVAZ4EisE9Mn8mLg6cnXo1G",
  "key19": "5Km1XDR9tbStTXH4RNicLSfYvqC71YW3p5RU2myomKXKCAmMiRLx1axp7wVva5ncekjoUk3taxWijSG5VgjpA5Vm",
  "key20": "4KaCAJrSafQrt7eK5dTEJWdo4r8ZK5U8HtWA7Mkz7TQi2gZyG7dssaJxs5UF3Z51xJVu4eoDn7gi8KPxai2kXnS7",
  "key21": "3nPFByZFPtfAkXLrQoAXngapvamyGAPn4vxPs2GSGgxrgRohfU6oVjF53LMCofaSH98ae233sTu2HBy36wf4sYkW",
  "key22": "w9rqNyHhmKeEJxcL29KSMb4SEgApY8NGdfpBxNXCWgnGR6ELfvedoEA9GZzcEnWT5dbw7bK4JXY88o2dcbPHLM1",
  "key23": "4HwGpFhVQdQtgXZdfjepMvoX7opt59uH5FSmFFr222koxiwmUsfT4YkDxgQgRtpukgDYEsGxZ3R8xkZEsWvNRUiN",
  "key24": "4xtxKNundqabk2KJBre9cdtTdppoivv7p5oTsaZFPwNZrjzPPkgLLTRX1HPbvsgT47BxhcrqCxUnTXyB7eFxfce4",
  "key25": "3XuQaprwmeMBgZHREQzREmMqidbb78zvSscHu54bFQCSpf4eA8ZNF2QbQxxeNdAVuDZ7bZqT92emd9SsZmK19tNH",
  "key26": "2Yn39PJJkA1qcTNicX6UBfhJVH4My87v58zVnxQwsXQhBDDkVi9KvMgSqiNAzHw3pjDSLXDBS1MEGsTBitojdoEf",
  "key27": "2XkNsNco89jpoFrEEAo6ceJVSiSjF5kK5ZN6qXcQYqcMTYhZzGR4GpZwTdBN92qTDWJRPFAULV2jQAb8tbFPYTFW",
  "key28": "3C4JTYf7eNSGreQsdjR4Qovj89tbebJRDmttBzNtSYPtKLRj6HBPz2eGDQdtYEPzHakvxoNmVCHFSRQMw5UsaoZp"
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
