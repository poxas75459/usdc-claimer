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
    "5KUHTtkzAKzq6JrpwqXe7rEVc6RXwqSWGQ9ZiKS3SPKghCeAk1rJptPCtnFGoPTJFx2KDruSN3J1gR4ohmwF2R3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Tn9ksckG16Ba7qs6W5Hjg6YGwvK8Nz57ZF4irS5GMykRkJwrycmreD4YqW9rfc2c9q9tH9VYLVLhpaLzaz1fCt",
  "key1": "5dSD1UYmr64XX8cwKwg13UaZUNrDxyefPR7ffMvYykXmVwQnWDZ9qrqrqPkzjgQZFT3pfL425N4g3V91a2fwNy46",
  "key2": "3F2jo6N2BsxwWdDnDcsnPYAhYLXUZYo2rE8MNdvrq6Uzck9EJsxNeDkehAvPywtGqfibjEen5KUaYhxKhsZoCeGr",
  "key3": "35kYuqxsdB4hbBwmrXGcjfuBsWftwC1PwZmyt3x7T6W3ws1ADWNos4gc7eRgGZ8Ga9nqrBtdUsKwAnfbJrhDXr9N",
  "key4": "5GRMqggF7ZNZANSGb5YHNpbzWCCyiZxDGZxy7MmZgPxsaLgBGKWvnWxJnBYrDQdgKydCRJgYL1hAozuoVcnQQSnb",
  "key5": "2akDrdUGuTGgobDqkhCeSzwhgGuoAbHZabkrJEZFEeLMSrip47rqbpPKcsNtLi3DmvwNov2hKnaCbCqGx6h5Zq5J",
  "key6": "2LMMkQUYfM16JWQuuazQfzWFfDtqi7RB1eNwo6T8gP3dPZ6b4VqhpyZvn4v1Cv6KsnVacsmgAAUvSGPmbRE8jb2d",
  "key7": "4pzPxVWaaT2gnufqWgLUKxyLyxiqSD79NZkuhyVAENNH1VbQreUdWhMgsDDqM6VdMHNFwWX7Ui2XcVxCMjDhHzLz",
  "key8": "4duPcQ7FwckGQMSKLB8jibzFZWJ9bRo4hxhyBdwnsigMJp6BKgxirk29ZQFsZZe5Ts9w6XZUR3yLKdeB91simvn5",
  "key9": "4jaCEvdMamhWMLu5y1HvM9tWMDEysGzWqNidoNeEgBfyA46JnM7L8rxtx9YCg55UdRaezi5p4ywTGHmcAQ6ESm6S",
  "key10": "4bhYFvfvXWqZCAYB7sLqoMHpqFULY6QexB2GpsghHQQEZCGaduYCfiq8UtNzmJy4nCQgqJbAWNPTg6qkHfowLJDW",
  "key11": "2Ztoc2YQomDogtpFuQy3dSsELYvr2otG5UXR9HXxCAXuo14RxThSWHuHx5p7hjHTLFiwd6baNLWa2zhUs5rbASiU",
  "key12": "46Tp8Kowwcm3Vw3Ls6zg1FGAxqhc4wMiEYk2KLZX89iCFyqYC39CjyNoM9ge6qBs42346ejDbV4Ae4QuGKgT6FaC",
  "key13": "5PVeWLTFVCwpcyVdbY5V7fLiMdxGi3VLBkxZRGh1nKnQCGRKdcM1abALopNv6ZqENVwTDVf4jrTM8xomZBqwZwdd",
  "key14": "3va9UxUhJvFVhgQHtrxhJCNZA5zWazSoExuFxGUaL9s8SwDDedpjsS7yNfWYeuLBLYTHdFd3Nqibh8LcX4QUVLvo",
  "key15": "3h7wXmEbaHaAGvRrZFpsyMYLGCyvFqB6NkHBJ3eo9efYNg5bGj44ghkjTgZLizktzxidBnR344pNVjNpnihkGSPK",
  "key16": "24JGyVdnEShyPwfxRdA8mpPv9bXchc5nrcdEbrTqfhM159W61JzKLbswwHPXgLjX2wUGdxpaFLRX12Yhfy7CKk8D",
  "key17": "366vKneiFbNVi4t8yjPVodjaJHLYvpVseLSFFqL9ja4AjjuZD1dtxv5UXeuqRTiWzu94oEWXHohcymuHM8ngjzAv",
  "key18": "3BqZmU7iEsAk9gVEHhwxrGERMceNs1Ljv9DRAseBrhebahKu9ytoZFcpaRdDFC9yw1iwfKgUZBtx8iFvdsBCzZrk",
  "key19": "4hXF4ArFzFjTaKh59rYbrC3mCEUBZgwG1FhaSW5N9pmfY59mD9o9dJV71YZRFgPd8yjyjpJKnJUFgosqRpJ1RTa6",
  "key20": "3pC4CgaQWV4Su2vHK67biC1KZjgFtuqbhJGTdSCewSYCsx5cMCsUQAVhs7czEmDQSn7qQNTmSd9HdNUFQyXfPPe3",
  "key21": "2mPLvnXht14xAA81xqxv7Yj3cvsE3CR4r9omuK8QfgnAQN8Py89a7YwZxAJQjWhbTdce2aPwPZFbsTiur3FJf3oJ",
  "key22": "2KNGPZGj2Qf5rnZXGZpgAjqxg4DT2NgcKmGwfSu37Pb7f15ZGezPdZ9SgBtCPk3q445bjqEyHJ9EqFhbZU4wSkSX",
  "key23": "3rW5MD8URSdb1k54H2Au3PvdqUyUDuNHQezMhR8fekjRepi4mCtMRZPyLgiarfiovEhu4uDf2XuJeW8zW2P8Zzve",
  "key24": "2LWF68iX5LftfJbrAcyZtTBgk8Yqt4ftQe3b8HM654fHVKeCU5K8EvU8t6v5SYkBjBiPzVQV1Eki7Ud85fJSG3vW",
  "key25": "FTpp9p3CsAYvWqBZMUpK9Mykp8qUnA9FyRW1oSzxLJGjqqNwYxvzkbUarA27Hw1QQdckCfpWLsU6y2wwxWkmdLC",
  "key26": "4vHyeVDxTQiYReE8Zi9jgR4yEwiHkCawJZQUCD5mjP9YvzZLPCPRcwvafb552J2YZxJpaCT8hgHjv2VpCsCiTFh4",
  "key27": "3cguJxGQeCgFwvN52DLQoLkHcaVRdQowE1P743DGCK2Ghj86BFujKh3jVv1S8MHr9BQEM8MhoB7v8dsgAPh37YRL",
  "key28": "3n4ZKcKihxYK8YQ6KwBZMXAhy2PmhGm7wJVX6Nrvc8H17yg6K9q2trAngfSg2UfTeamzxqQR117we3JefYv12oYc",
  "key29": "5RBDCR3Aasai3zNzNuJuWNLCGFHaFrcqamxk6nj4Sgo6ZKoXTDAGh9vg6nbbFF3LjswvHSZFKJmyMc8K8o3eN8LQ",
  "key30": "3ctyj8kRbFccagG5dazDtb1GCf1YxJrLbYd9hN7HqrqxBouVnHHNznC7MzVW5JfCazmx6SCUrgyXqdGsuqxoL7HF",
  "key31": "599mt5onaT2aWtE4qpBxtz2vjyrQHtbiwN1dSwvuqxQeW74tqZp68zLVdmQQ8zqc6KARgvjKDJTo3Y9wpCJGy3cz",
  "key32": "tGLDJr5r6fhvCSvHEbXJsJpT5WwCqw4y9uB2dskJKY2DNMwa7LUD1tbK5gwPVLnVpDU11XKc6cWfG5GvNzYp5FC",
  "key33": "bnFJUWbR4K8cLhs2Wu1qsZ9Vuz4R6GG7ZMgT7LJb78CDhgxs8ujv86RasUbHniaM3R5HqACvwS7F1L157n4sRg2"
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
