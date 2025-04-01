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
    "49kWY39M5BH18RCzLZYpVJUG6tVGe44onp37zqqycmwJRAN2LVmnw9qhPWAj7eEJNdD1566y2HHB9VrkQx2zc9Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uY4kYmuZpHhaMaoZwQ31uG3iy9pkDrCK6r1fUBX4RixxzSdgtNEWzYcWyfNCMCq1XrRdeLwv3BWvuiq2YFjthfB",
  "key1": "5QV7Woa7YE5ZR7G7WdaPZGsnCsmVv5eBmxHnGViwh93E6FhpJ1Y98Cjj4o9YZ4EAWth2CodEp6qu8TekejMN4Kt9",
  "key2": "3JmnSTGP2v9FWyDRRmnPWuqZzD9HXcGssAYrBWc8uaZmhGh1jL7E3uM3Nx43hNpFhL7VwhYsZqxMBsiYeWZhyr82",
  "key3": "E8vhUGxLZiiTi3sRxw1N7EdPjyjd7KbjkbJxcRpuqyHY5krxBdpJMm4o63754UmwaEcJRVNqH2yWLZzxhHmD8Qn",
  "key4": "5fBr8ivAUMTbuTtj2wDtSjyPHyBZDFdN3MbkLZUAgHKqjyZbjf7e4nJNSRmDbLSQJe8rrx3o4fSHtcQQCRdJczjJ",
  "key5": "4kx1Avc8jhZnVfSjeqwGNqa6XBBa2kRCWNYmd6hRkBdwQPcGXxmVJzaRYaZgKypFF83zJL8TgzCpseamJCt6m8uv",
  "key6": "4Jm6jWNhFTD6oYZsZ2JLZbuLH4SPFXDdzZzTwSTiYKCbKsAsNNCdyZ3BGpwgENwcJq74kMrNnwddMTQg2Fkq9nv8",
  "key7": "5YoiZWVjchxQtAVMh344ozytFWJkfCQExwCvSPtLzpMkPaf44bDQ8y4hytjUX6QSKXpgtXJm1H4PuheVfQHpCKHU",
  "key8": "35sBEUj1aPRPkxJgF46ZTFHjdszu9yJbNDZSL3xZfkA4RX8qXHGwVg32GaR4ebj6QPMZwbHCRHdsa6ZTsbW38BGE",
  "key9": "4ygLSnoKS5gV4dKGygjY8EnHVZMYg53bZJyhdLdciJovBSJyc3r16VjadCwbiSxpRnpMsFPWQUDk4En9CXSQAP7j",
  "key10": "3Pdac3iEAgKCx6AbkTXD5MJJbrnHDq3HT7UgBA6EmugwvH2oWwD8d6SviCXGaZ9uJkC24gKNVwofSW7vuWY9MULs",
  "key11": "4eUXG8YwAF1BdPWHx9urj5KFhkr6ttCfrraCGo4dbhPB17nkNehUd3WETLtrtQEATUpSY5QD2UmpCFxPnEjHxrG8",
  "key12": "4EZGj7LiRGfjpXLsqx6Dd3qqXhazXxAufUh2ETmBk1QZDbeebzR7gMhpgnMfKPUR5q6Awvv3AKW3RTEehN6qCz9Z",
  "key13": "4c6YuTtiu7NDxkAKhscymsJ3jWSXe6bwXFhJo3Fk1UUmkYNxb1B1Ueqn8WPiq2AtgGbUyvrbkqGqwUZK6s7Cu3Vy",
  "key14": "3ggsJNAbqzQhRCsMmCepxuaWoJypM6UoPfDkwr7akoDTNhDLcJSkH96YpHEBktYQHkN2Lbc2T7Z2UBtqUthhJq2M",
  "key15": "3Jz5zoE3FvT12V7XgQidJLcAeehhXGdRe7VGYLAuQUmY4Rw7rS6eC5nyd9XZLFdLCDdqnmEcFdfHZzcChQztLbgr",
  "key16": "636cyBCpHKydeugBbVwmHCcLE8PXQEAWuZ2qUiiPKVK77WunMNvorqsTdiCKJ2LCqqfJ4Z3yB79yhzFR28GxYmjd",
  "key17": "3QJDqsihNQ9EXrZmaDVzBUgFiJqZMmsH3U4HC9PjxnNypSw1n8itmQSUHverWqnjfiwHBeUbVPnkDKSJ79ygQsig",
  "key18": "2LBz9PMj73ZNgZrCjMZTKAsy7ZuPtMwPPybMCe2fsjLyshnhFvK2tPY8x5tQgjNm5A2GJxSqv6t5uRKxbyFDSHd1",
  "key19": "2sc6bJ7HEuYYWz4uqAfvmdYRVe58X1Q8XCLVbmEcEKssizrgyo3TgPHNCGRpHpMS3N9y35oKGyYBAjxsrtHYdEvV",
  "key20": "5vsRNHrwbSk9PqqLgf1kwxx7n8GMxoUbdC13ChFYc777Q19JB8zcVbLAsUUNa2mQkTCoMHxnQHe1mPTeAc34CbPT",
  "key21": "4Z6hpVdLQK9cTzg7h6X1r8zYxa4myw3c4Ld58wpTxqMWZFCEmN4niSQtyw9ppc1PxvdHJQ2uTC98oJ7Q8gr9RXEj",
  "key22": "27fJHvRRmz7w7NXbghsd7WYbntAk9dTzzHRDdYwU8DmSWRHq21RdNceFzFgu3WF1dTQViBcnfjmgAodH59BUUviG",
  "key23": "3RqjFXUtqVGGKyEczydQmw7EmNZN1FwtPYXWEJieagEA8wFZUKAWigzKxYec9yyZdL88qnaXnM4RtDbqNS3MCrrM",
  "key24": "4jKj5wadChchJZ4aZQB5yZuLzyB7RoCqe4Rpit89HYfXmAHmswPQz24MQZM6VcNJX4zozozRZVaa2mKqFCr7KHZc",
  "key25": "4NmhFtgd1ndm26rWjnFQpAezGFwNidhBEWSeCtQV1JknTngufjDcqSFUVYa9LM8TEF64DuDsyjrXMZC5kMEbCwa8",
  "key26": "3tMRHXBwowYDsGSEn8CYMSWx8bf4qwZ7g8GVGGGxGDX83R7ktYgkKvpfiGCLZTa6RT7dRzcugsbkDg1UkfgDL5fp",
  "key27": "3R1K2WDNpEVXhamN5AQTK47gh3adFHEreMLhm9429JHCazQkDhZM11TiwiJLijjX3aAUM24DGNH14JrcjANo1sJJ",
  "key28": "4M5xLvS7nES9KdUHVnRdyffTBv4WFNP9Bo3oRKYp8wUmEemJhCpcfn76nJSDY3ZqL6vmUWyTHj3bTpgdVe6N6TJu",
  "key29": "4hQ2SuAghMaqGCgDECrxQBip4e51kAQzh1nxT7wpQDGdS4B3xTKqBrFke91mG9RC6Z81vRKLHpcjsQhbkpMbrT4c",
  "key30": "3Hdw58jLEpviDzvEiAvMJzXCdpwZzx1BsB1fXZFwNG47kbt5SKUW9tYTsNnoHnsSKyXNySdv4FsKZEp7f37hTj6E",
  "key31": "5xUsbbs3Bjkt1g4M6XYC5BDGKmUaf4aUBK7j1haRByYHi6VBSzpLX1xrFX3619VyN9UbKKWahNFCHq2ucBP4PPGM",
  "key32": "5iv6nFCsDGYCABaZdDeDoRDtRQmqEAtPE7GTpriiCpczuoG4LQ4JhmE8f46NKNDXTTF9vyTSUpkCn96S5Pe5rXnA",
  "key33": "4dmrtYjwJwftfuAF8dyuDpDvVxK5uDBTz7yT5G1XMYcVdgfwU5JqabXxGqnU9BwVgr7b4RtFTM5ApkkQSzdyWyFe",
  "key34": "4hGka4HYmQG98yMoYTeRNT5EZZ27KVfTPSFabcLSKqmenAfT3BMsEEvv3C7U7SV9ydTQjBetnKBB1gMyKZhYQ9g9",
  "key35": "zxFPDHpcHcFqrCLtre8P6q1r6wFBcJRBPspgVmHyigerVzZieupqPrjG3eaxa7fhNeybLYJKLQFt1CQvj6kVbam",
  "key36": "2gH73W4jmo7Y9UMCCP7YSDDvfgN5Jd5cpSdLwsT2Rhm97kX6A84UphtLf19xA2QUiL5QHaPreM8cjAaTRLtBmv7v",
  "key37": "3RVA7ucLUxmwXqQXXUQ8rREiYJTBdg1LUByDdHNJ6sd1UjhBEenrc8HSyEDuxQ2jibGDDceF7jyZTNot8J7UPMwP",
  "key38": "3bqqgwCLWsYBqje3gKDHAEjp1emKhfBxiTGZDuA4jkhXovhhNUy7rHkiSKGwwv7Jzc355t9Y2XwRJx9HbHG3h6Pt",
  "key39": "5PGnE1w2yjZbCmWc6ZKeQrRCSKqF4ou355EwCL5QpobMdvqZ1LJznASeDXkSarZr8JJ7sfJFKACsh2jYpM5wpWRo",
  "key40": "54whWuEoh1P9fFZnZoJycQY5nFyNqLK414qp3ySmevtcWgx9xWyUJ1ZaBThyuRACGfU2PFoD4NAEuZ7kKUxJN3Wq",
  "key41": "77DqGqZCTsUkhoNW5rDXrQb3mwXRx68jqdNaJvD4sDMKVXWNZGiWG1EBeAC8RELLEjShRf4fnDDp9saAu12ZYZm",
  "key42": "4JcSmZnRaXzq2FpaQGeysPxoXbdm9bRuDiNGCfvUtiVhCm5Ja7pEYyQ44jkvF9aeueXWCBqd3fhNLjYUGkvCNSd6",
  "key43": "64E3pTKc9wgurMw7LpFVExS77Yq7JMAGK2RX7RpcqqZeAVbMfzHW1FR8BJsJepMHS9fxgTVzu8pFbxW1fF6YnW4U",
  "key44": "5N2JGo75FaZ1Q4tx5UgRKFdwUBh1cGWt3SEL9iPku256Xn3AosRToX9Xav66So9o8GMEEEpxPdm9DdvB6kQxW1TH",
  "key45": "2fP829EdANNibcfcnEhXipfESBoKgg19ag2dr7aEXAPf1ZLcycmmcAWyEHXHdFeFcjKsxGSfViznKb4DuoKP5NNW",
  "key46": "3cMWFjsszFYrQNu8kstAZb3Gnb5ZUZERdXkLMK717yWZqiuvcRN47Gim9w7deuQjRApseSiLBnDh9hDeAhWhDiwf"
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
