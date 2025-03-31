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
    "41iVD4wyVrbRDWftnkgibYnsJHQUGqVcd3T6vnUzSPjDZwNhco13SWK5H6WvR6Q8XMqtoJTvMeJr2cWPrzURgqgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SFPNPAS6AMzyHwnD7KoRTVWrC3Ewwx1b9gMSodEVp4SNPvfA5FHd3m6E3ikgqQr92XdgmMfrsdfAwHEfjTqk5B4",
  "key1": "2q6JYkcXbQ9ZuUJnRZVmSYL86H6Gzi3cdPuNZpdZvdLKZPTj6yqpdKdN3Z1mobzCmtUen6ayXdDJUQGPgiLQwUfX",
  "key2": "25iN92dhhMYcNNxAhemukA4ytiDa3vGVMdmUB2zDWdPNaBnPkKFrYBWw5F8c7FAGHYfSCHF6GS3PUEUYGTG48ovk",
  "key3": "NFtTq2FErPkUnUTdTAv7HDHkbFecz7GGfNsjL1P5r9fyGjFQ89CwYvfzd5TTu8ZhTVtV5NdcuWjqZoWNjqtcQQa",
  "key4": "5Pj6Wep85c9ECKy9GjNLTDzd3UcCzCNcFgnyZmVVQpbV8nXH1mtc9eLFRXhAsHv2k8C37h3qihKKUgLjHRxchtJS",
  "key5": "3jberfSF7cu3AUHcEmEqSbbffcLGcA99xQLr3BSwwgG5LkHSWsoxo8EQQaE7Yv1GfooPnGvAwQzMZEVXc6PTcLrN",
  "key6": "3QbYV32LGrQaut8tG52AKMuAa2viLijiT1qaQzFhqsWvWfT6usYg5yZKReMugUyHzthwnxPr8PL7naEJS7KjqiTu",
  "key7": "65kEingRqVLvPp5sF2uCmKpC7jtNZn6TBn3BAbK7Uqyi4Vk35c8pZWwLYt3NC3jgnjyGZHPEhY8xrJ5NRGtrfea4",
  "key8": "2PEknGKLaC3fE25TwM2SRFVj2EgNgnyJR9bGfXMQDeEfKf25uGJdmW4BF3raYnW5C3TVefneYCjY5o4h94ffY2rT",
  "key9": "y3PsKHqGgi8VbDSkvseYy5DuCVDbtKwdp3xUoNfW6roqXaErcAZ951RBaArVCSahUcK1v2STZSd4ub1j3eq3Eo7",
  "key10": "h6mbEBr7eDxYSGUbBhUfnUvBgt4K29Ffijpmn3Y1YsAqUKDcW25Te6bEij6onNNPgjM8ox4P72TEtQnzyKdZQbx",
  "key11": "4ZuLdyhaddoRE6pZYugxwkjXGK7kMjEEHpX6FRz9rfvtmXHwzU4pzKB2UBQJfeaRzvUaTR5JMCMYbt2jZKVEz2vr",
  "key12": "47F3ekzNhhC6JDjnVNp21CwHcbomt1bi77i3DPzJojmvZckejgLMjtMv6Ew35LpKjimWczbfMgJbax61vuUri3HT",
  "key13": "FQ9uARDvKUyjL1T334e3W7gBkhPUGZAvFbZmdk9v4YbG9Vks9x832k1JcC3843bmd9EssFuNTm3M9nSCgDKiGgY",
  "key14": "3bkXznJyimW5oEKxjnWq9dqBFFC2vSNQ5mNQiAy9sJhXmakdDhNh1ieaHwg4azNcQWiTCMjb9B9sABserEUmfy4E",
  "key15": "3NcHDxQoazyuetvUqKaupcFTbXp1fZnfdaYMUM9idXgToD3h4pug1t7K6JyQ5e9BbSsEYY1qA6xnjHTzxL5FtDNW",
  "key16": "5NyP2ab5KCA9n5cEf1M9nr3PSRn9NRpgkpJ1Kj8ya5vxZv7uBPxJuJR5siagW6AvkVemg6yiXddCYb1w2rx2KpcD",
  "key17": "62CF94nq2y7w3wA5VDRWk9vEYBAtdTG6Uyz7DsrT1zMexUqqf2XacKFpXx9UjDWfwpx6ZH8w1YUh1N8FdsPnqGtp",
  "key18": "2bXP1S22CkJpfsvPqEJpiJsBYtFxKPY5qFCxbnQGxApbZtQBEhDRymLASSZzNKtjvh22yvW4htVAvbL9oUo6fEfq",
  "key19": "3h1nXWSqmBTvWwSvwzfHpYk5fvq8t7Z1z2ukAAPMGzMD1nF6z5LMi1CcaqiY7CeZNNzrvpFS5Ygp1JxxCiVhAHFj",
  "key20": "9oPoqUReHU2mmgeA4xoMNQTRaZAYbtZY58zKLeptRru99giJn36QT4PcWzPjbBH8rAPEAmuP66LwPKGMzVis2eT",
  "key21": "NX3tazG534N9DUjLgruJ1Phetodb9pQm6SEzLrwFy1Si3qVsXqV1g9TVqa2k4uWCubUqjBwTNenfuSnUHAVthWe",
  "key22": "2VV7gZELiH84LupSZw2y5ogDnjd3KXzDYjwoo9G1bKsemSHt1g4XnUxSKXWeECM69bYsBxJwqrjn84L2WsCFmQZU",
  "key23": "4ncmywkuVfsv5GhQgNYAGyxAhSTWS1Ggmr93h3wSFhRskcHh7ojsC7dVDCd4JL5gVasvzV7JTCnNDmiAiCjKhNuz",
  "key24": "2BdvHvmPpBP1ZoYoF8xFhxPU3k4w9yijfT9NZK8nf48n3VDz1jpz8AZqjQMQ6moadxELtorUE3t6g2MtUHudcTdd",
  "key25": "2W62K1rvNFFvdCTQCVuZrywatue5jBdgBLxdHnuV81GwLm747s9tYGQw18SJL267wf7dyfxi8a1qnMpnGrD6X9rb",
  "key26": "2rjMJdKLJtGDocGRMPKZJyjzj2Dj5Ag9ptKsF3vWrPamgcN3DNsJPXfSgKpRuk16wLHAMxDo78Wrpqbit2Ptxyr5",
  "key27": "2a3BCLsGgF8HSxiF2E1pCGPsuLZ5GboURzoaueieFvHwQxCxPZVVhuu7BeyPT84p7c5xzd1cRczagn1ULSmh6Ecv",
  "key28": "2pg6q6MSJ8AN24z9YbwaqLNSr5AHHEYmhdiU4QuwqgfsVKSwqyJKNy29b2gGZ2cQdiGzuTNW5Z17tijACfwfqHGV",
  "key29": "2yfQmjs8CnvWF5tzKrzeiupVQFgVJoSYLayAH3vbovRkAxbgYMWrfaoV5VGaiwmuQb7yFMbmbVpUfpwME8xB9cwG",
  "key30": "4UuB8sR7KWJ1YXyieHipQNAxJuW2NjzA7n21uiQSzW7FyxXmU8FRqmLtzRrx5LTKJJwqM6s1fx8NBkFwXTyeLU5T",
  "key31": "2JsSkXFYL4cBFthD7tPHwjduJcbYdUnKt82obhjxkjfX7wvZhFMAVKxdY6PJL6aWSQBNXUTzySfK2gD1tVwrxZFw",
  "key32": "5uvEG858UWh5aspn6cBy1nqk5EFQwANw4izBtVDjAts5L1wMFcjMQjTo1vZU66ygCMAEicfAxgsGUJexqKxeKnRA",
  "key33": "2X7Vhbd2bBqukH1UYPymKCYxfgBjeAAJFrbW2fLb2EcKS6KQJGFmt5knqrJ4hgsTH4Ear2N1Mx3tTipZzBR8gNnK",
  "key34": "2ZxDWUUNpsp1XxpUaD9uuSQokRBhh1Xs1stQMHhQeaJV9TJvKYiifvntiXcLVWdojjz4H83JVwuoxNdfWWdaopFs",
  "key35": "2CUvFauzdmRhx3pNw9fvzxPwfxQuGpnVkumsRxxELKrZccMJQ8JH8M3x3dhLZB1kUV3xra9em2NrsKMELRmtFSSo",
  "key36": "vRZ4S3mukjVwkSeCY9pQhWrtwRRG5uqo5JQxrRkzJ4bCBxy6tHRkdzXq2qvehUGahEo2RQ9Qs7sVvRDCSQ7utE3",
  "key37": "2yJWjcnchLzsEZxF5HYLifn5w1ZbuoajyL97UgR3H1UPMP61iPL9nLRAt5M4o9rSizCopY6xdrrmMGveDW7sM5jU"
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
