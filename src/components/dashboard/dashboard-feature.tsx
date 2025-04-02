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
    "2KzEM68FTDxj4BjxqkhP33dBEmw2DN6pRvBSTCDHBboBT4Q1HYkEf3zrLy3GcbKwGKh3qqJFqffzMquLfU4GTbRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3U7Bu8DCGPDCRNtCDc2fXainrGsZGvXKN4vZcSJuq3i1A7nTjEmo4Nhdj5oizT98y4S3qEHgoYMGtwHCa3ygqL",
  "key1": "5mVrgDW7cEb1fCZatqkKNGqoDzyrcL2F61fP25cuNof3F4CWjHiPCn1NCR2tMnVVWnVtw1FCdCmjVK6MD8o5PDdu",
  "key2": "4LCeqRMFeKuTVNHeGGxj9TWLivFbZ97BCt6Ww38Zc598JbE8kQgXZt4VQqGNbiYZ5RNQ87Zr5danXaw9VEc6LENS",
  "key3": "5q9dWnnkdjjdohmpD37mhpBvGKkYE8bLXzG7d29GMBsjtLQmvZxhmP9hRqm5ypko71DEyBmkgcrM3feVQBYSKzN3",
  "key4": "4yiqJX4oC7uqH92Nd6gfZ2MWfwoB7Ej31eXsjcKdAnY69R9KRwsg3KiQBV1m5nYY14jq9NnYD9Ffmsescn4i7oJV",
  "key5": "2ZNm14GWXJhKG4A3zbyQT6KDsFEDmSrM6tmvvk93nDRqvutuRkk9wV9G85w1Y6y8e3aeeewb6idz9QfusvcKWUKd",
  "key6": "27uToJWjEodangYSgJPhzpUAm9bzsC1GAaHHHvfjmwHzJf1cF1e2VZwpc5wuKDEr8jgfzVpt1Y8Wq9EwPGii6yKw",
  "key7": "26mUnSADiKJfT7eaDW1YqR4Hbk2PBq7vmJmM6KUbzWYMR7SGtvJg9gg87L5aDkob9tNBnWbAF7a4RhGDwT4rLQvp",
  "key8": "49nkTb9mERfvxyy6G27E6qbd1SSYbMo9acbA6WEmF5965711jx3bS8xAxFMY2qSHTUE9iY4KrhrVKJarw2QG1vgn",
  "key9": "5ntpbufu5s1FQsurxyBTo7JE87zN6uDMmrM6GHhpdga94ZNaZmebChBimSdAPBgFGkw4yV7dhMf7NQ4ZrT9Yd83H",
  "key10": "4nQe7vSQSdmQHeJWjWcExji9LAHKDMKRS8QLS4KB9hpwr3TsjRd19eE2sDcxoZTuaw6qEGcavdDMXUgXcD3mHGGA",
  "key11": "4xjZ2TUzRJ4LYYipWXfkgYxVLSLgWthLCFNpSARWsZoygbTv1E1snMJePZR9Fken3C7yiPU727mC15odbEXC4zDQ",
  "key12": "5CfaQoYxMbYf5QQvn9eQXM7UcQR8c42VZMKZs8W5JwRjMGi9fbMXUbc5XBZAfqDdPfXU3Wc6g5V5A5nWrDZP8LBV",
  "key13": "4Hbmjq9W5AQi6XJu7pzApHHapKET2oSURbirp2w8DjtVnqe5TCz61ufRtt867MSyQpVsHKY8saDXMVG3hChyEfQA",
  "key14": "5VceFLs4J9Ss3HDcEVidH6rfcX4UBcMZ4TWeC6BebGv29CTMRruyhfdWGGDwbD4GtbhWzWx4QjtaPdRMRDZFnUR9",
  "key15": "yUFr8DHiqLXCgD3vd1pL2EiS69szywKubgxJqGNLRvCUrBJuhrET4ybRwqEwp9Wk13E4sRU5qUfko8Z5hJYRAgE",
  "key16": "2WCUnZq7LKySeZKrCTwLeKYGYPAiHgk3GAP7oitzwjN8giMGadrofeQRuoRktfnoHX8mffcRghTNm44CMoHR3b81",
  "key17": "2rweTpejfCubCnoAnonmMEGimnEeGAy2HEKVPM5kyb6ZDTVxxJZU78i8rE5VfB39N9EaTvMjjTsgQdKJBBDtZ7Ab",
  "key18": "4xSxQ7JogUjpT6TGQfLWxzz4ahfinuPKiCKm32JpBboEDZvWsrsCuXJvBSmSNGgDVzBwfEoghQngX35JjdC92x9j",
  "key19": "3P4Ac7FLMAEKt67csStWsfGPVerLQ9Am2bE8g3NP34eJmTv4DfM1BcK8xJAP13isAQy1iezTtREZQ2sf3xAmQjiz",
  "key20": "3NeWCJ1B62u3BPVQ6SrNbtPUEir8zF23eMaa7AZ87PLGfkZYaQ8kvxwg4TdXf74gW2Nt4YDfFfrdPxsgXAkdZQhs",
  "key21": "5Nj22XBBZ7KELE7oHVWkPSi4Yje7q9Y6QVjyRxkiiErRYEd3CLJ2Q4m7hFHKNi59AvHM7QvWrBJbJJqVw3wxbpSp",
  "key22": "21GF6hPe1zVnPwNmAD1hDAjgEaUGoPQQeve2QsiPW24DLM49aYcr1RB3fkJaXtyK1ec1HUmyWq8d6czEfgUC42nw",
  "key23": "17tGMevRZ5pZc9rgjTLkTvwxkvyyuWB3eeezn6unsd22HnbCixtgDsfYGjZm5RZHQJMH2CTaU8zAykkJ3QNxNEn",
  "key24": "5oDvPuud7fH5gUdCUnDSziXvWswnJ8zyfpwTWVSqcXhHhWTswuJwJ2f1L5ZzVLtEHkR1vjBgMjffHYzcacmyLSCS",
  "key25": "2hFKGsHztPagL6JZeNevcgChD8wuBzuarWZ6hdso4rcSc318eMuTbfefMS3AohGUFSP9cDyTp8aZh7qMQUdRDA2",
  "key26": "2qyhiXtnQVHbEKKde7zGMLmTfKGmyaGnbsehiCbUaVTA9gKPXGCLstgNfvrwUgcV9zUbG8RqXY3spEzMqXCjwwoT",
  "key27": "3DKC33Li7tJifofnZyaLPRvwWuFTEre97PABoVeRhmGrnys4eLAwQZAWWWZ4qk9S4WTzgZACS143asBe4Yjz2y9",
  "key28": "2cXFSCPFUGASQVSgsz3CxnFTVUEyS77Qp8NLPSTYs3t3MHPTKMYTtkGiD5XXXMsJ8RspGxwif5HTHF7TshNQNmgG",
  "key29": "2R6FMqRWvav4jP6BYjsRyHKy562BZ9GLfzMxaS1U3zg8xchE8GQQbEFEfGwynNwDgSA7VMMVDRA4h3v5aje9f6jH",
  "key30": "45k6jdXJfGkVmoQ314tcaBryYoVE3HZiAQK27mRoEZVv8t6sDHBEBvTqCze368dq8FkweNgrQ33XdNZgUQ2nrsG2",
  "key31": "57yqTmXitjeM8jyGKvtrcATZwiPGVnXEjtEYaiEgt4GJ8wZLH11z89qmGreUoKetnh4tk6TFq5ww2UMgQHrTykme",
  "key32": "3tBik7iDXpgL7epsPzELX1rRTZhrkhvvbMnxcnMz15yu7DwX2bsGLMW29f8fnZfca6DULckqBc8SH1yW6ty5dFUZ",
  "key33": "YbeETqv13ELfwjZZf9RNR3pJk8DuP6HwMVbJFLDedY79kpdHZyTpYnWBJSJyoHkL35bs9wBPxKWLDUjQ5xMF7ss",
  "key34": "65NfZAxWHsMqkJRyzGC3P2K6Azi8KDMEge8jHr8B6WYdq7M4RFKG75oXLbT5zeG536vFZvfiN391YL1Wndzgx4jU",
  "key35": "bZA3AiVBS7FbsuCHDmGMEoKW4nQNxpuSXT6v3TuXgyjNvjoFMcnCYuCwCkzVX9zZSffbg2V32LTNQr3Beebr5UV",
  "key36": "3V8S1uoQmuyZujLJGJdYgDcR4TPcUzMtxshSjJveHQcayjZfekwrAZrQWLTsY9P7J3pZomw3oTfo7BW7qSWdjm61",
  "key37": "2svyFB8LcsREDJBS2Gkd5eCxVzVeE5rKUDd8GvHjtxy2j6CcsARRMVu3S2kEkiFgaydpcy6EscVFBBp7tKL7NaTU",
  "key38": "3E8DvhDkZa5QigTvtPP2yVmrLN9zjPTn6ZNHfpTKKYHZQhUxfLX6qHomDp3aNDPKhjmpdknKZSZS2oUrqA7Kk3to",
  "key39": "XNEBvaUqLUVALwVxfY5tWzbkzeeWzYnhjVhVpWMEu35aqoGKC9yu8G6ztzJfiDvt5cJKm7Y7aNNMLEGsfdYj1VG",
  "key40": "2kEP6jvFqA87wDsxSs51uT2HgHzuA9VmKFLGki7vRXM7utiarn8Ej7pP6njxUNMkSmWvnK2uUFZ5GGSTz55iEXfU",
  "key41": "VAsFFfXKUXVoAAD4pbBoiAmE8MGBXnnZZtyWHxi29uCiNN6i55FUna8VukPWtSnm7af7ievEvTTbTxrocni3kVB"
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
