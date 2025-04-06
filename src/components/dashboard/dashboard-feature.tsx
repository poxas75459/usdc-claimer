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
    "2mQpnhZjevpzpdhodzuDu9nR5cjbDGi2mgjDpRrW8ineehHg5f77mLVbbAgQKt4USyPqY8VKY3i5a1wnLapPvWrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwLWmXedC183jziryXNRy8yGyB7ydtsa7CuSV745fbmzsCmMWP8wSxvaXkoFjJQA29eJpeg5JK5yEJC3bd9Btb7",
  "key1": "4UDcH579XJQ6VVyeJ86XcWRu8BcAYPisevqbFy2LVoCHhGSS91rpKzVuS5k3z67jYEXcoFtFFghwf7ep2LPDXiAw",
  "key2": "w4fXTPJ2qivRGVDCK3xunYFNzvK2advKpWEkEmHEGqtWLNjXN5gjXhNbBLhG9CMdTRDNMiukGeoLZ6wZdiVS6h1",
  "key3": "5cR7p25YTXYQY9NTnHL6QomuF5Dr7FoP9LJzjo1wMkEs3pZ4ZK9etidEH7VeMK347h4TBxqA7ahRMXBCqqi4sQTe",
  "key4": "2yqdN1N8J99zFqWuV6ULYgTZn1fGM895JkvD5RVTkT1vad9iuY2f2WtfFedtWwe6xCv2aU3y3ytuc66YYmboYxGj",
  "key5": "3zxz6pTr1wBSFjtfneXDnuYY1Ph9Na6uiBiDtVh9QW11EgtQY9GexSSnkoQLzLV1pqK8vcrthGQtD47C8B3Vb8ek",
  "key6": "3C1YWnLXM1jCE76Y6wGgCEDhHyXuJmNzZVnwTvLcRiQ5WttVCu3ugEteUJ7eJyj2Fkquduvmvn6WeLqYdeTBUFQN",
  "key7": "5M6Mwb3CRtMrNq3SWEQqZ9ESs5WSJWo3pEU5oEhRegXLHC4Vu1MESckV1tmfQXMdc78NZuwEgtzckFGPtRWs1pVB",
  "key8": "25LrmXWxZLdpnB49yxN97MWioaNhW4WGe1dLz1ZS4JjSZVEBJPrcb5yo2Gp6zfj9Lcx8Xd3jQwZkij72oDyfDfJM",
  "key9": "2WysmZCaArRGP2jduuY8rtp9b5vgcDf2miN68MPmcXQuR8v1YqGZ61nhr9u5JHbCfbswmDU3UXmMFT1ov3m564TY",
  "key10": "2GzWAR2CzDotGG2fSopQzQaVqH6Cw2CKE7VfuD1EGuZ1nZoxzMgK3cy8efdVGMMgzk7HeQBjXX8atXZpUc6KRaXX",
  "key11": "NJEvdm4HPVXuNF6uSTtKf1DPVr6Lbbupa9yJRnWeZdbtf3nntxyFewmN1hGH4NWKh35KRVAbG9TZFcustZRvuxM",
  "key12": "B4nvjXrcyJm6VpPdnD7x7YwqFeyhxL591QnCn8RzU3mWgRtnuUWZDuv9mejmKR8NTfh9sesEDWyFtfWbSt8vBXw",
  "key13": "4Gv5mcmQFiovbfmTNXfUqshmfZoXSuuMKKeJHMUuEBkZeEca7kErYVB4bUkFZpr4C8yVaPTceDiRfPZb8yBgMS6J",
  "key14": "39TCHXKmNYiXZPm9QHYUxpV9B6U9thYbAbmP3pde19uzxxWmDGcXUusov4HQtFbsy6QFWhe1Eufx3TS4i93sjt9z",
  "key15": "3G9HKCLSrNGsTs34xanCZN213s7r5fNEtNCgMKxGoAS2ekW8NJPuJMM4j1srHCo9BGMfzfjy4HAnnu7EkMP2oUzn",
  "key16": "23ZxXbCXsixrKZetyiuwnjUxTLPrcYSuC4YXVUrsM6Wbokuifu8f3igSXH81fdPn1UrREm5PfLnsj1TRirs1qdWM",
  "key17": "3ZdY7go69exYmDaPPo81AkZo74iRMMh1foTtf1e96kpKLnX2cv9PxuSteg28ACmcsk4uEpcasWXYkw42oDYf9zfH",
  "key18": "2MvcWgaJQBnAKDTPZH8n9CibBn5581VBP9LBF7u7FVfoSzjbY31PjZPvTVAiEyKWSZLTJF6MXxS7L1VxQHGWh14z",
  "key19": "3SNiXSEXWq7RivCoT6AdVFSZBRip2RsjxbtCAZdSrQoWdMnuY8HLTSsNAfAC2bxUA9JBb1LANK9RGmeiV75QB7WN",
  "key20": "3ZK8koCTmQBteYeAi9oRnf5cwweQz7PuD5JaHstZWxPJpGFyPdVBo4BGjAUcrJZFqsN6ioNBt6sxWU3xF9FNAEoT",
  "key21": "3gDhVrvLTLmXsk153vr5xjNoUo9W6A3qrGwCbkDvjmKcCwAtBKpfYnnmXBj6HEP8EyFzFbjW2D1TtvmJsxBhQvYA",
  "key22": "5EPShe1TxaG2yHckfmhLSuc5m8r1iEdcUpQrowLcHzruMZndZz7UqB5EbEUPmczhdmqVrHbabXDA59Tywd1p6CaS",
  "key23": "58Y7GxRaDe7jAZkhTVFwMMELLoxJ9K5PhYzBvA1bMZYkBFDnmF6tSSq1g42KRc3m76ou7yeoLjRc1DqpFtCP3i8z",
  "key24": "LVRcWRWJsHP9xJZfgZZdE4GgEYxBadnozX6EnWoqP7ArT2BXnhjyMRh2VGbBhkqKx9dTXuyCJNvsGyjWq35KKFu",
  "key25": "2rAqGjBSL9RPMS67eQ4ADmAwLnsqJU6GRBxx3hCr5KSZ9NNRreoKEaT1grAHU7EsEsQvHUN9vogaZeuHLrTMyNX4",
  "key26": "5oR3kLpExbxeMaBsQxTYjQW6DXyLvop8W1hJQP5QdzVZby1toiKjMDXrWUgw8sGbWPA4iyZic6oidxesCD7FxfdX",
  "key27": "2MWhz4MTJdct1mTZqowpHZHgq8z7rhxr5GGaTro2Hw7yoBWztM1sdZnZfgmQW5JFsQjh7uk5cPSSJpQ7xqvyqPZF",
  "key28": "5i9ZZKdSZkCs5i6w92eFKYKsVnKSCeJDMCZxsENgDdVSYBKjZ1U6MnD3Nh7GieYfyWEdQF311ojDtHSsoPJRktRp",
  "key29": "4ZZ3mc8z8FTwrU8xz6owEckybNuqhc3tnjtMWsBD6MQe3f3rbq5TULYVndDzjVqNkSGoiGqFsyTx45WCQimnAAew",
  "key30": "3cV8FYpGcTfKivxByh3r6S8zP8JeqedWmj7uVM7ZyMayb4cLXhNsVoegJ6RQtZGnkK9h1PACRFasW1zX9JK8TxEw",
  "key31": "32Ge42R9cpfJC2sHbbfacjHW3GsiGx7RJiJex4Wn6RihNBxC1YcNyzs8eQodxVA4NXTfvKjhgeis2aUzP7TNERit",
  "key32": "4RCy46T3Y56ZKS3rbn1ccdrHQhVds4LQSrpP43js6YVEyKzddjzcSpu7pxECGSDBPDn3mZtXhbZ13PBeBkWbQG9R",
  "key33": "2inHUZzwgQ5ANbn8Z1aGjkgk9Gi9Aj5p9Udz5bxJXK23W77pmdDoVd41tB7YnutbiQbSiejTSbVDVfgL3SUvRF5E",
  "key34": "2zFQpuGL28yb3tZCr2ysrzwQXahfWC5dYQDoqngXmVtpk2kFMd2do8b1D3vZwDsYGp2VgiG1HYBuaeHVQhM1JEXS",
  "key35": "uRPTydxS7MfeQbHdwTSgapjRnp3QPpvDzqwXPuxidVRo7tFuiT8W8XHDfbBBaZ5h9xvnuUG6rP6NMNSN7rSroJy",
  "key36": "2Yq85HxGppNTs2dJTAjQfQTcL8z4kCtPTzVhtUbSfDWadjsvess9fZnek2JBSesCZpnYmza8Vm6Prfau3N8k93LP",
  "key37": "3GEH5gxtvmm2LEgGJ7hpcZ4FcZEAW3Nh4UJJZTLXKDXFaNB6ryeftkMgqQCW86gSA3WPjHPRibjMavdoUTTGYmJ5",
  "key38": "3suwPWzc7Hiccjy71XRPnmmW3y3EhZCxvQBG6NzvDEYfR2ksoLk3gvSmBxYd1Ac5zAng57MEstzYtQn3sD3DcNK8",
  "key39": "qhuByrTA2cz5J2QmxBGeWzRd5cHychUi4DcSeHuMEaA1ue9fH7r76p4vySZYCSVWcLgpJQ3Fp81jAXjjMGQisBf",
  "key40": "3zgVLGiRKCDTUU5u1XPCyFyBmDFfVogDVKkUJK9BV3AytYov6PG5WwHd1WwSva2ajmsDTQYN8RKuRK2aCxWCKz1M",
  "key41": "2bKKF3eds48e3yFdg41PMiDW7xdp3CosAqZkp9z8GCZYotnQdG91oabAbCZTDw5SAWoR9Lsqbd3yjLyncdaQemeD",
  "key42": "5sZ93Er8FSEiqJeZ3TAWe8hEE3MGyuXQpt4M4oczKAQZdoHEHur17J9Dfg9QyX1iPyp7oocsfEb6pHyBJgca11fK",
  "key43": "3W4h3NgvwRRqvU1QPc3Zudspqd5NN1qRMEuWVKSvBSN1sb1L2DksAmCYgxXWkNGwYuyTf5DDSZFjvoxEJYA5Vpq1",
  "key44": "48edRRpTkdE17d1Q5bP8A4c1RAD2j34s3vMQhzSoMzAGsrfYFRPHQNxzuQJJGxXKKvBVqqygwCqLK8NVVB9e5si9",
  "key45": "5N3Jvin4rGuZASrvti3oDXANgCLLm37A5kk7pA469YbcaKK7k8a4TkgsD4tWvC2SQNdcWa4DkT1VJwCaimYVJaEr",
  "key46": "6D7w3xcLWWB5G4MSjeUVh7ovaETA2GAPjVDVuRzfh6gLncQVP7xCWb2JmsqhjzayVjcMMkCQNKdmNNMzf7VnLVU"
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
