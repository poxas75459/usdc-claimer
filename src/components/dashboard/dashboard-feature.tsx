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
    "46zKWxBQJtaJePeDtCysq5mFHwEv7tQRfaGh7xByYSNtfWbnpeC21wBn25rdNj4xzvbHwX7pm3gRS37GGHYTNyow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFKrVkiXjNuLHKankDKqHw1K84oPYqZXh1zrguA8KJa7u3WaMFcjixhmXmpSvGY9aYHK1ACxhx5B4uJ62StRfVi",
  "key1": "2x8AbPkVQ9jSgLebnpWStBM9pt5LfR36VMwunrY2RwWfiCayF6cLZUG3yxukML58C5tKABCZ7QSzRyww5ho8saQ6",
  "key2": "5UTygadPC46ZxqHnxoQkHzbyXyXCKspndBEbK22ACh9D1npD5X79g66FNyH9iYYxgyKajXEB9y8S5HbsCSwFYryz",
  "key3": "5nFQuXxoY2C7p8bJxm7eoisCadhoBTRJMst1cwLHLwxiZHrrAuvRUu5a3VsjRL5omaxAQ3pcrae2T3fcbBj8b16Q",
  "key4": "5dnoPNgD45BLruQu8hvUouF3AtS39pJjyy6KPMbshvWyE59Aj49WHp7q6v2c88YTvtfDXee1ARb9avuX3HFALZPs",
  "key5": "4kAvb8976DYvCMrXJSjyPXLC5yv8Ga2DM3CHYTiV5pFEgh9KxcWDJ52qmErfLDZeGJKNswt72Q7JAMMRzeobFcyF",
  "key6": "4HpcgvuHhtBtNGZdLNo1uW7ascAbYh9eq6HMGFnGhedi7a4UAbkXaAVzrBUeugh3mNDMqt7MJXXZfR6p5ttQabVz",
  "key7": "4duFwyWuYMSiLRum4iYKfJ7eENTYeHurbgEgZ4LqfdXyrasaruYj2rGWKjhSrnJxzfGiAYHmhgRchhUuFFUQqLwN",
  "key8": "3YUBo3U4Bx4pWQTaTuC6GZ7BgiqxMbU7NCn4omMzTchgq2MbRgF9Vi5MVipd8wLkNYU1Swig459Fjq2fsqs4ffVK",
  "key9": "5VJK86oE6GMEmJhLvZvaxegzHgAcFfURXwvGucZC1kDESrBuBpqT5tG4NKnMZ4ncowPT3Zxj63GJ5AdaXZh8wfaG",
  "key10": "3N2cT3wTEZYvygE5H7iGWFogw4nWWfSeDnFa7WVQFoL9gC5CR7wy1UMYHBsWt6j1ZSTzg3gAjELFEmYwZa37Xd6E",
  "key11": "HEXY32g5L3BAtwpK2cW37gehCC9bXKUtTHFqvunamHbx1zhrYwu7hntyZZowCcm6mfLrJQy64guCbdHZAHRFZXM",
  "key12": "4wYiky6eXp3cj4eMJ3U5sJccjq8nsKNHpyM8sQfSKi677MSHv2LGh9L6YC66zwycECb4UkbeCx1zGHHyipMT3p8e",
  "key13": "5U5QRMjbcCKDRAstaJ34srNZ7bEkpci1yxKRrzXC3HmQwsAfmvPvJKMVqtbAoSvbSprTAgpMWhps7DuA1yafrS26",
  "key14": "64ey2unUfKnYmy5EvptZdwbYvWgEjHWyL5Qomn3zrkgL18tRe1xsCrCAbRwFAiH6jQLrJ3RKDfXKgb2yQFjra75H",
  "key15": "2GgTdZs3Fm8VLRceD8bH3Yv9FSm4Lc5FnfBAHnBV5Tk3j2mJto64zkfZEP6KwvzNXLymDSGMyp4pwkQSaUbXiSiY",
  "key16": "4FnKFVN3nJsw8yjcTw2e5tE3xJxgz1uCZsAPKTN7CUqvqV7Y2GdHyB76r4HTZvu59f3cj4TF4R8rA5X2TExScX14",
  "key17": "56GDvEprMtCoPW8rM1VuRSxpkhsXtavJan7bvcB1W95TXzG7NhPSXmLpcbZeTS7y5XQRdvfSuEatiftAQF26vHG3",
  "key18": "2x41SfPqaoV9nD4zq5GPbPz7T1ZzB7ongPwaGxMivNofBTWDjTbkymd3kFyMxx7x4tyBohixjTizvBqWyR7V48C3",
  "key19": "q11YPTaGv654urgCEbY8WeM8iUMCv71d4mqUHXEP14U2rutY3JrAzHJQZyecKaSz8cAKpNLkyxTttWFing7wY5i",
  "key20": "5o4n6TA7xrUmtv6h9ABCvCCxyFj8eNwZnNzXgaPs5ZRyDKJ4HTAJ47GvqAzqLZsH9nucWtA2Wz7Tfz4KCAFkMFEg",
  "key21": "vfo6TdEwQY1cHfwercL9Ysmq5ynJHNDXEYzR2VPcWQ1BapimCqaDPyXg9C3LAKJU1FZnD1TkTqCRDGVdALhWiKe",
  "key22": "5jzGHbTvHuqxjDbSA6Si3A3qcYfBqb3uSmXcof7BD8jzg4KUcAmb8EgSxv63XjBHzcSuPMiE6hYTnXPYgvzUKT3Z",
  "key23": "3tLLN6EWQfgsBr9N92VhpFGoTneC775VeQMCLtLA8gpr4W576WFTe1sP7HzM5TSHAzbRq3bf9T9VL4X7GJmejHLT",
  "key24": "YRMqGejvR5feKfQhkidJrfT1Vt7QTbSKNNYvwNY4irZDPeV66tqkEdQEXJD2ineVsQeyETs1udp23vKAgjrc37V",
  "key25": "4SWBR7SmAe7EVZ43GXns6GRGS1jC7wjJrv93D2bq5BUF25cgazXYFJxobEPbCBTxwCtCC5b1Rxo3q38xWriZRZPG",
  "key26": "2LaaJRH1LGwZjEcpgL5fBwVnVzsrQ4UGk7gbC6DMiCpTMTmvh65WiuxVG7jqU5DtSByvxNe4yn7qudY7SqW6vHkz",
  "key27": "2h4ENacXjhGXLVCJdh1UXmN7jQRQWEqMqv5ayTzHCYeEHtcFZL2cvnF5cDtEdB2DiTqF7KcK35Q3KSCcirdzG1M4",
  "key28": "Qo3gN7ywPuY6dGrC9g8ZeCzJ3WrVzm8kr2rZnNy8CMXUAvRtKSFJSrdu1oFFVnVsd7KDnwvr6ZYaAeUgishrWk7",
  "key29": "2UKQZsb6fx6d7otav7biH19TAwx1A3pBc4SQPy28SM23mprZWKfRTSR5YD32rGEay9WeWGfxSfcwF3iEoT6PBss4",
  "key30": "23zKhzgvoBW7ZJ4dRw37q1yvc83EnxDHup4TZbadkKUQcxLvJSdQHrrLT2zsTjUs1mpPRgpzUvB6GTzPb8EVj5P5",
  "key31": "5os1RU2mEe1tVp8LEFJ4BtunR9eR5ayCGCyquYSj9Wf1Hn4gjxz1y1QEbPdymijzEodVXHfe8CLemY1mZmm1yxjA",
  "key32": "4DVvqHZnRPw6jn3DiwjzL1xFND8ofV6KUL3MRCBd57GmbJUtmNMNApxHbVtvenUFgxRtPGZbVHzg6kT7qTWQJmbF",
  "key33": "2zr6XHBVjFrBQQYSow6GMnsHcA11iUhDNTyPhBTy1akG5bJvuFvdwDm1LAZY16EYRwYyXZNqksLaACFaWq9tsnQ5",
  "key34": "tYGBvWkLiSEBLngYSrTBgyejSukJX93P1667T1eKBee9jzqdrWowS78MCAmbHHpbVmPUAmvoCWJdDntKrDCG1M7",
  "key35": "32RFTvPtHnKCidty7mMJuLSeeYLQLaCpnaa1QLTQ5nVDoR56mcmV8KrTmBTZRqNJQ8WXjPzGianFB5AH3gQo29DT",
  "key36": "3matSzT7KEenWEZcytCuh5BdFrYgEKPs1LriWxEKhs91Jcshv2bEhQJsQYXC6Z3L3g27b5ixo2H94kVBQRYPdDtW",
  "key37": "5fy69FN3eDDv53yYcgaosFJShFwhhvm5GNmunXqmnDXsAs8sBD36kFVxQVCe32ymXUYotiwL7AGwMfGVt8SeapjZ",
  "key38": "3NaCGvTCdZQD3UEfk8rdhsq65zPTBb7Hm9iwChGYqGs1EFr4tkcJWcbzc5ZYGKbJodmyXqUb8HicaMkycWbL9n6g",
  "key39": "4DKepG15BYrQVNjeqj2dMdPwh265gEqpftirhinv56CSbYjaWhf6zaNjpQAqpswLsEL5DtGK3KbV2WQaLAbMQr9Q",
  "key40": "3o9AgmBxrxHecHPWmzcZSticYYW4qKXMBPwqyaqg11V7R9QxiqBrSbJb3bpveW3cuPai6CNwyvEmpqF6PX4i13xt",
  "key41": "eHqvuH2bvxh2VkbyFhxt5Fd5HcshcE6LX48eCnNedxWxMX2BBgxc19hgJFxot41CJ9z1jJuhgHLAP18GcaZTf7q"
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
