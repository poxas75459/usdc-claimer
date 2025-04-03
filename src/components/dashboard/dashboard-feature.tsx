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
    "56dKyaw9AwZ8y8y5nPWmasaCS8KfxEEAncSXK5qk1kK9spFoS6ADSdPBgUtAkyq1j83HbhF6stors3hZnjWJ7cuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTsrbP729K2dLbYJyTvYXjmM6t4ViWoDJjKxy6UDktmNFTyywoGZA8Y9ic6fYCfTGUaGiBMnGhctfb3WqvMqAbD",
  "key1": "j1cu3xVijKWY9UiQJ6z29tp1LvuJdw5YcuxiaAfEeaKZjTd6SPBKoXn7GWovVFNn7X6DnyZQaC2BWA5s23hepdP",
  "key2": "55S6A5DVkxT2YGWTmZ6nf6SaecJnEz2Jn4hG8zPBkQtsp2SdRcdt9eeVeKX72hgkw2JAqatBzBWEs9YKrfjxSPPq",
  "key3": "3m9z8vKRzSfkqdmL4Y4Zx3k9XsPCY28fcdEQtxRqVdWcqEgwRdgumwkStfHAgLF6uMJ5WBtnCM9bvtogf6r9U48t",
  "key4": "2YXmwepjC2pcBxh2nN8dBTgzWiPfQKiXTCwt4fAWAwDAxAr3Rtx67kLTkrAUhnA2qLQoipUcbarH3on6Xraj9a15",
  "key5": "4DVWtD9nG4U8kXXoFXZLXPyRKKYE16uiVJBXB8F7czaPPLsZ7f4f4vYH9Qf67YBdmvYXBiLAYaYgYVwnDjWa6zPb",
  "key6": "61rn7Xg5u7kVXkmpRUPGmGNo6NmqFEZmh89VFfHizEoxdo4UcukDPzuMj9muH2U79QhyGKcpg34SyBQ8AtYEzG3N",
  "key7": "bzXeCtLkKXS5cc6PrBNSoYBFk8mr169nHZDdWAVbd8x71geHKKN5C3XC8AAvAUtHgGBs2QjzPziDgju7SfmQRpb",
  "key8": "4SNesEC2FEDUQsmJJ9BWHG4K44w4kVFEdKXAfq23NUaF3vSmWh8YGP3TvA8MJ5AN5xry2qmZD4UiztNe36VdkH1z",
  "key9": "2GG1CMe9y5F1wJSZkPdjury42vQfQqcUVwXcxbRJeXts2YT9DQ68qGhxoN62DKVRVWGQjkSihasgjpmFg7cU6JL5",
  "key10": "2vwhgiboAkJp5KNE5CWcHYdGZ486xNhuF8vQLq6dKbNFUQmkmnGyx9v1ArBRNyEej5pq5nH15LL5LheLGZZE6jT5",
  "key11": "31SC43Jio7REN4KZZrj9tbrdQykH5uEsn6Z6SGSiSRqfusC1Xd8y6UfwmHWDHNrkmkKSv1S6hk6mbJphAFaUwfgo",
  "key12": "3ryXwcoucfREPAuBvAEkcAc2a3DN9F4zqGoSpbuzqwnkzny6pnUgkw2NuxDZwPxQWK8DCyvpsQctEAEiLmNvmT4S",
  "key13": "565iQHsW8mR6nMzwXt9trUnCMFmaPJLfVA8M1oe3BVyFcUs3JC2imbMmpTqZ7dszW6sKNxpbQ4onwPMbJRvSeEMW",
  "key14": "MMT3YVXBYC4GC1bHL12RrAJXZdhLKzBjaLKAhPSsXy25DPV8Sw3LvzmCirh71S3u6QB9id17Rx1K5Jexxwe3HC1",
  "key15": "cH6f3U7HUSeyioer2dQN1hZg9M7tbgfQoMYBcAnirXcNt8KoQBKcQdWJhNBFpVjTE5Lv3tbr4dZ144fDE1QPu9v",
  "key16": "3vNQUX314vEpnzGEKG8KTdeRyZibLZjF5fpkkTKxJhBVRU2RfzS8M93jXeHGsZKKN7f45KFfFWQnZ6r8A1VxcdoX",
  "key17": "4e1qbGtGaTvvaxhZu8rQgEyCFJ3eFc4gZdWHj5hDssmGSE3oJCuZFLQqLM5mqDVrCBtkHWzSqLAGvDrDUVKMk7xL",
  "key18": "2iUcjXFycB89fMBL8FBy4mXYXL4J61Re8jK3tF5Ujv3GcrLDhTsPMJBuNXFm6MHT8RxnzU6UiXom1jFnL3VQJaap",
  "key19": "5U6tZ8Krfzze66TK2GKSCXJnoD361oiqaL7bgwuNUxcCSqbwnkNmNrceZsSB1BkAbE7Rq3vyRANg7BiWp9Gjfzrr",
  "key20": "2S5248Aqy17asonyATFo5xPUcPD1tqchNVu4iDWMCJxjDRJMT7tZkAHBGYpEsFcCiTe4mXBvYjQEzQzWBZoHqpwJ",
  "key21": "5Rc5DrKYZE3KU4LN6j4jvx4fUToYHuqGnymLAdY58ms4HSDksxTT6VGNjFUTQNdC6HbjHpqKfpHwh54BLXfqYE9d",
  "key22": "SrW37Nd3NBqJ79qEsgSGEKfdc4MU2rxS69N3ifSGUH7RLQ9ymQFX3oQgCRSw799FiLK8kQKSvpEH7uAQE8Eik81",
  "key23": "skdqx29boTsfKAjFZmHWEUowGuuUi1eBH5jF3hW7gQEEx5dXuYaeSTix3wrTRLzWU7UdzuD3nNiantWnfbLMXos",
  "key24": "4P2iUyH8oMfjgf9bSdrCiDLnMWawCCxWaC3yKMYMxBgqBXZjFgMjQmredWufGEf3b5SzvobyUp2Zx3KTu3ripLVX",
  "key25": "3bvK3BKbvutwZg1LZRfojjWjz9ghAPe6TtVQzFizVNzwq8KFfnh7B8B58waXiRy2n2LbRUQE66SQD15wuaz7XKSR",
  "key26": "4ynZ9MRDJLhRbR4QakU6q6oF79td7LDW8SNASVNgaZ6Pa5dB8S2sYC4sMnAEG3ykb6CAGr6aLSNy6NMzcCYUmLJ4",
  "key27": "4JsHFUNc6ayPaLUkkBsGssehPG2WE96WiNxhgc2CgfWfjWp4id7cVzXS1eyW284tL7wwyeN5MQzXMvb1uWNGKFKU",
  "key28": "25urA1DrqfVEbZhSdBeRwXeX2bueBsXwUUB7G2qDtbtNz13q6nkTFGqkVUsary5U9iTaHtwv2RLbhcgcp68ZoSbZ",
  "key29": "2dF8vkP2pmjdvbaPUPSqivxuv9S3D52ALL1Q1cBR3rhsVdBLhWH9V6LhTyK1c42fNSJQNonTTfyh7tbaddFkLtWE",
  "key30": "qqBZiiEiFve2jEAy9evmmRJpPbrL6pMB5f5stR3U9WiF9zKBF4pgLsCC6uvAahLsZeB2AMFh1E2unNM3BqtgEfs",
  "key31": "42SX6QVMsKECK1jw6DM6nfbiSzSru6TJqSSMtvSNC7pG5ocW2rkjTpqAiGpjNVypkAoexiuWx14qbkmfqZ7stqe1",
  "key32": "z14z2cR3deiBcvhcEyvidXrSW5Y6LARWFB2j4GUwY4ZaN7p4WMnuKgSSWGNn26dbnwxu7RH47Bzf14X3RgEqjvE",
  "key33": "2LTNYYmzxHg6y9bzWi2csXo78tRWD5wgaearsKNtBh4oJEVsLd9wEjx4sU4eGFLVgQJA1sj234vqeh6ca3XHe5B8",
  "key34": "5MNq9neWSmQaWfphqLGa2wL1o25DrahVbWPaBPLDkvifAqJn1wL4rz1yJT9iqizbQzJ9sggfazWnV5KkYFzSVxRJ",
  "key35": "2goEtoarYmJLfeb1ZUyHumEtPChTzpkaTtrYFPf9Q4GARpFF1DKuKvwnH4ERhu9JWLh54NhLsWmxwS7p4ipnR1xq",
  "key36": "fEGueU8LVgPf5uF1Fo51PaJnAMxNg4Q5h3tDrDYrJHF7knEKqyhosASiv7rmMWssxKHptmiyqxmFmWf5UuRNDRd",
  "key37": "3KQsv9WBkQRD58quegrJvomXmLw4nvAWoNmSaGiParfhBgWJ6KRnkwEwwzgPaxBXt7dyshebEgANbjdkKGx44Zwq",
  "key38": "y7izL9syia8kssfQ5YKhzv4WMmAPgnanfdZH3Mhajdt4LjyQo4CcvZtfZvzaaSbHibp95bi3abF7ZLuwtchhr7u",
  "key39": "5K25zkWHmB7G4rg4Xk4L28LBLg8qegeSqSPVZkDpbvAuUCYvAWqoMz6PpcCG2qL8DW8BkcdwuQNwhjqG5ixYgXNN",
  "key40": "5zxosHPRL6rVJMnfi1kp2Hj44UmZBr8TMn4TPqCiMcffd1Qq7Qg1DkWihYWT5oT1ocFfMgjfFn5coGSZTYXQbsmh",
  "key41": "9yVjFwKVLEYRM8ahtRkC5Vb69mEGh1J75jXMSpUdxhjE7tEgEQN1hivWfiC8bH3j1gBcNzRdxqKmd9SRM6MnhZ6",
  "key42": "3tMTTL8xUdVFvAcJD46BJVNYW1mPN7cQf9i9varQcWwwmb7KprAomtCBUDQjjSf1KgLWyvvzZTv6xUCT92NbEsbY",
  "key43": "5gHPQkK1FHTQetiRmg3oGMZgVtv9FSjUodcohXtQWjxdXkpUYxko7qwY1mBf3N71Bq8E5MMoRa7hvrLEd5gvuZV8",
  "key44": "2Nqc4PuvZqfcqJJ4BxRMtCoHtZdAuRaygHbxh5ip4CVcUXDtWt3kwpDcScWaNVUkfsbPgGsNP1NepvEpHaqVu7hw",
  "key45": "642AD8ZDMHzFVyNy6jpwGiCiRHxwPTbMLhx3FJSUCAK7bG89LkyCpHdot1K5hX6r3jc2wNrwj87MZ7QucN1NCZ6o"
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
