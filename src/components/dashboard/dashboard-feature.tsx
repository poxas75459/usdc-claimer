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
    "3xSJEDkXRfq6KRWKfsPXRBSiZeXzKzmNWsZZcQDbyxTU9yzZ1kMscKMcRqTpg5miiRoqzdgZ17fdzD7z2qjSTkzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vrd2KLrARTFGGGooMAZ9o83Jws9czTn499R81xqLyfDY6EvShQwgxJ6UQPTM7SQmPynBYLMFeVjqqBKb5LH9vGo",
  "key1": "5HLBGEpk7rBK5pAHECunoo5UPTp9PyNm1D83RXqt73RY7MPjR6LL5TNSSWyJhz6ghksC2YWfJrhWyA9d2qrJ6CDn",
  "key2": "32errTCqnCVnercXYbmaWott2egeSo24s8xew5iLWFFRGefcyf3gN1Zo43SqoPQfmm69iXgRbQi6h7WUtDZpD27",
  "key3": "UVJEGwUfgHHQJmHJFzzDHuey5yum5acZvrpPWnTSPmxc8bo26erVw2TdNAK71xjgFveoARphL9Er2PXrNk2dfW2",
  "key4": "SJUHTjYLHGJL6L7R1E3twjdXmyY7SV31FB3oQEsBvdWba6Y5NqbVwxZHMYuuXfgPJxDRKPCpJmHdEJCDwipAdTL",
  "key5": "5TXJCBD8QEdxJgfoHJjYRs6ZJqPFrjZNDtnoWDCXe1aCDsBFn7RoQm7atptA4e5ucEWjeco63HVN79Q2eT1GPQ51",
  "key6": "4x6KPTQt8pLm1Ry2EsJDWiGiwdpATrUJaiQkcUf9JXZjrZSPo9k1CQ6AGceGf2BHaahAzE5SjMieL4HBkf5PpBtr",
  "key7": "3Jqg5ZmxaJyYo9L2uzA9ZaPrqqX73CxxLnzq5xKrbyXg1ToGt2cy9C7ECjsg7r7tAmwiJ5C9qEDpZaW4RJzRPHNb",
  "key8": "2Z8f6F25gnYAozb98C8Gk8BbtSEjhQwUpnP3GemrcnxCUHjarY5fz5Dd3SdXA2akz7ug3h8R2tEHtU91UdFjbt79",
  "key9": "3JtLDXfMQ6iYDJz81gSSns37howt6ddLqbJvArp3HfKwVRBfAWsdZ5nHdnky7FUZYFggoYsHgwCqsZtMQnyL5o7J",
  "key10": "4awVpK7ddnNRr4Gj3mdfcGqK2uNNda58qWZufxBkt6oxGWa7qGNcKVg3LHBoapPZ3QebFhUs1ZiLiQTsYpbK725f",
  "key11": "ZB6uXDCX8tEgawnK71DmbD3TrgsVEbhXFLMWvPQUZPBqaNMj2AXmBbh3AM24J4mvkqHEPMz6EpYqmfos2UmRe9T",
  "key12": "5td8yJ7H5u28FxfWiXGe56Sn9EfAJCzWY2CP7LJfadWbdrci6qFhEEuSq544ADJwFP2DpLtAWoZhGqnDjYw7qv1U",
  "key13": "2JJLRrCs231N1MK9YmdCMC7GCpz1Pij5poJ2QJpm6c3mR7JknczpHSpWWbkq2gP578pbKts9KCxZRvpeH54xyEnk",
  "key14": "3RsUqBkiMtJKPGsL5szLZkNwhJMEs9USgZAJ9t8ogCQkxpWifxFpoXpui34SJMz4ZWfR1948kNbjqrcisB87iRio",
  "key15": "3Fn8Ca3MibHD9yRvStBJ8EgCwXQadjZpikKftTmN49p3rMMUN5toTiCJ3LeobwN8kFu7RzDkHNkvHYAwFgaiJDcj",
  "key16": "2v9VZXq4AyF3GzwXG9vGd2v7yWhFkSe4HHu1itWmG1VaFWQXhRxELS6xD4NnjCgtpzspRTSSX8i9PThttJCjXYAK",
  "key17": "3BxLxgATfvyFkeQwM1UUK1JH6koSbz5XV6Zd5oZ2Gq4zQxaaymvVhSYQmjfeWKfrKzKdin6R7Zpya3fs7d61wi8n",
  "key18": "3FcgbZN7otL169G7SWur9wY9GDFiMCd8qhAAUs4KyW17SKpdHLTMJFQtAFQPZGywkJZyD1JrvBSuwjDZneykSZQu",
  "key19": "nS2QcbPUAW4WFzL12QCVTBDo4jaCqKecx7JgGsHyGj77E3Qa95ZNDuwg3kKaxG1sZhBW1hc8D6VYZ79GC5GisMc",
  "key20": "3gH8on2UUskYxA2d9EkhtZBZJEMuKRHHMMRVAuHQ2vTGyazxKFVo4qBdB71wjEsqtH2q5uBK15rR7NBTxpTGYELj",
  "key21": "5kKBy1eRiMS2S12cpgA4gybdZsYvSi7FTGF5MeKsNW8oDP8kG2KH3WkbRHRnHt331yp6YDcMMhid5yd2sbJ3Xfac",
  "key22": "4vvk5Jor89XxviL2eajiA1gNjaNwFsimESZjWv7ZsMviwXYedQGXqLCmjNXA4Sq3Z19VRBv7icLZw3FWGyhtGjwh",
  "key23": "5zEpH9BDPMDGqUyQ3qhohVbAhcyL9jDVoCzMNh9SWA8EaCdbTozHamYKAYdusKQuV9z5nWmfKFZxmXPfgtuvQ9wy",
  "key24": "2FvkguoEwEgiosS5hYykwoPo1KSsqoxWGZYSDCfHpKZd372bxN33ppGqPYJuauQwDSnfXRVMZa4fpSZnM8f4qRFH",
  "key25": "3nF8n74gZqpG2sZjmEZFUkXTtXcMBBFy8cJD752oe1rnw5gzQUtkbGxQM325HVq2PcC9Geatc5VF86CtFBmZt4Qt",
  "key26": "2L7qkmxZUmuRevgWUL5bLUatsdMaaNjkPs96oWL977jysVKU5CbWMKSnnGGhHpgpWiEG6kxUNDx24HdZFRWja3FR",
  "key27": "53vjLbR3zV3pGdHNtGoaM1Q3P6MoaWZMFaTfF548V1QjeSY7NzpYfvBt76hRSkrMm2spdqma6XYAcu5sgnryeNeF",
  "key28": "3BF4DcjANqWE7Jp6mre82kS45Qe2niu31yCrqDMEKHbsNCAsP3AaDYGmzC7xZr2Vg3zBMGuUrKArZu72dbgjPW6V",
  "key29": "ehKQmy2WijyuB6fHzN3YkMF7Kst3vB2dMBcw9XTkr18siU4cLieNaGxzgkTqzDyPUvdrMJP6D3Ra67hVn3kwxJg",
  "key30": "3aWJZvqrCK62RP1xjVer8JRL3vKqQALwjwAbmmUg8k79Tkvv5pwLz5H49C5yH9V5sgUucMCejy3WLvGaa9SpAvQi",
  "key31": "5EUk5TmPXXHzNSjq1eiHj5UbedhaeZusWiHR5RPpFGoJDDjfSyeEUd6cCHSycMRKPcWC2VfGvCS9jwAkG2j2jvyK",
  "key32": "jAFMaCB6JpD9JMsbQ4KUGoZDYudTcnTNCqX8sWjn887TWtAQU7JhSUVBemSg1wAMGGZzJzcZpUZ5ecTaNLuhdRT",
  "key33": "46fTHkwZW6Zrk3qzL9oDGFpe1EW3UD4F3PYaqVYSUzyVBnP9Xvo9JkuJ9YN8vaUDpvQdv6MmViCv9DTFh6nvsRDy",
  "key34": "iQ9cTZWdYy8BwEzP41LrMRSCD1CHK6diGHdRWR68cETBCozvxcJzvJA7iDzaY3KF6JwyHsnEUjmTNwJ2ebRbB7R",
  "key35": "31nX3UeNU6Lus5jfgEnLQkZLfpGyEzuUd42uwtCXFqV2HCEPxcesSn2cbiVksnhn8rmX4aJXBsepy3oHRUGoG9Sw",
  "key36": "4Ho9chS48GNG3LNZkeQrzwCLoqwXRFXMBLtvpi26TNvHut4XYEyzC2TCLigzjf7WgUnpsvYGsouDMhUvEgH3WkBx",
  "key37": "3jWiP5QufwLMyrKYEgkFggsGBrxkiqz3UuExvmksuNRRa95XvFRYnLtBvznkYXZ87pUCcQGFNbcDR1Uzw7dxKxtf",
  "key38": "5xQewPphAaLHUqxm4RJbxYXT4iUbmu2DSKHzQGv4D87CEYbq1Kb6rPFyT6p6xjcWEvNiBhAn21E7N7wRD5Lh9AxQ",
  "key39": "5NuWV8fghL8n7QLoSzvp3JTUSMB4pbYjtzoKxPBEVaEbZD8nMw33BdMbfkA9gep61bhpv2isGiixss6uYA84hkBq",
  "key40": "5UnYmhdzNWVHNxwrZe4MTPYyXjcRSvzMFvY7ZF9oMYpj78ve7MGWS2Zmo7UUHzexTkBoevicJXh2Mrj9yk6YQvjM"
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
