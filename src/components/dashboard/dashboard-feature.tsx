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
    "4FYo5NoEBFYXfdEAw8gENdKEC94jR7D96sQrJD6kFP59eChZWRYy2MK9U5VXqrYfrFcKprQyhs32he2q6itUSRbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMpF2XVbsGopoTfb8DVKcpSQRW9xG8zXS8LW7hzzZzgpmx73JCBeHMMrgPNN1XiZ5UP1BMuK81h1Vj5Mw4amGRT",
  "key1": "JUka9hMcPGt8JVQrLhGxLQFzv6EUzzxMeLTVgAJuRs6Eu1HxJJ7u1hzXhTd5EHqqqYws14yiUNqRnrz6xAycKCk",
  "key2": "3mbBhxqhx3XLwPg4mW7cJrnB778mK8gsAvzJDt8opxYXDHvQunefQHiBcPiF3ky36XxBwNA815yzG9YpJvbxAZxT",
  "key3": "4ti6ZBoDySrb3Z4Asj3XZoVr1bRtXq7mcySh3QyKPxL5YijzwavvcbJeZsP2qw2p4ofiLCGowkRWWoXQaE7ZPTCq",
  "key4": "65RjPb94mv8T2rGar36U6yPAhscMbY43sy2z7Bd4AvCTYn2BnymYb7s8Vi9fWyAhaToxnmx9kWq2D5b5oSkqZC5L",
  "key5": "2w2CVAuZ5vwxLyRoJ7gxUU4fWBbcQoRs5rgLE3R5t99T145sdp5ZssEmts8Ed52ywWcsACn6sFFXUqk1J62ENM3c",
  "key6": "nNiKgW6cjt5HJznqkaQSXMtHsdG3t1gLGRNzPk5xUS2mdVHj84Xjyiu8M35Jp2aVwevGyfbyYCAqrQLrKnd6SMp",
  "key7": "2WaBzoXfPDmyZHcQzmvD2PLkMr8EaYHaXR2bodNZ4VAxivWacnAQmVpE3ArEQC2oKjvYQ28QCH7g2QYFtShkdN7s",
  "key8": "4jC1tytnT8Mz3gD5Ncou4fHsW79y9yfaLqAed8HUmpSUd3Q87PbyvjzFzpLsU1u7dGAJAGLtYkkddbzNBwrDeKmf",
  "key9": "3e5tZnJbfPrAuaQ5JpRQdBp99MKm2ga6ajgxCK7Yr9uyqMYrXuMA4eFmD2DFUPRQf7i5kV6MLd6QDDPHMB45fhqd",
  "key10": "53no7knE3KzcLsfqxZkEa2vu34nEJh6jfgrDEkefUUgUwKcG3GwLYJeFHgdjPChV4PWnzE7A9skA6wfDj5p46Dfr",
  "key11": "4TsrMJhtFWBcNSbYRQV2RZCcBAAj7binm9vA18qNTBqw2jnZj2Cgmsit96HPLZYwBsDP2yzmYS6Ud7TMF55DrKoY",
  "key12": "3Zksvya4ux6BVEyFKknaPpJeMuHcWg3LMGqrJ2suHrZpYLkKb7ZAi2Ff96dUxGwUSr5ERadN1B7jq2FmN93iguNS",
  "key13": "5da5TUMZgjimsm6cFFWZhKVCzNgbGSSUWwwXkeAbqceyzSmhzTNHRyQQr1BvtWf6dr9PTqiYbC1Xtx34DDznKhXt",
  "key14": "3b6YMcpCZ4codKoYs7ZAsyC4AVpemMV8iUkwDfQQwSM7Pas4swb7YFxZS3MVVv3uLMYVSUasjivHB3em1uA7VXsS",
  "key15": "42Ptj9HzxbkLmF5GqVaJQP6Fr6yUMbcCwRZXPfbrvXT1KFgu4scX7qfMpEW5a7ZRWLwS25ya9qQkMYnUbJc9KcdH",
  "key16": "2GYwRVgJXJJbjn9TB6H4xVmmWns8fc1T63n7yFPsqMt4XeEvV8PSRxt4UsCm41a6D61SbdkEXtECmksod6uZCFvW",
  "key17": "4KDBZYMfueq8MkWwz4UC2RK3irfDUuzACXUqKHVdtb13KyDjDNphvArYdMvC6fLvnKnJJQJrSHgGSos4ELzxcPUJ",
  "key18": "4egRubQFmLC7yA4zXRDhUzQetCacPErxPw1nd8XHo6jzdi84NiR8c1QPSvEUcrpLPAbbiL8PktK9N1kNePNciEKd",
  "key19": "49VacmKKrgaKm6bda3HmNm7oBZtiLKRqcYHKjjxgj63vaDzrUE6HA2UqkF5qYEY2JeWfYNKhVVExKcpP7Xjywbwa",
  "key20": "2RFvD3dyfno6TGsbt535fQXAkbCfp9ZkeY8tqbCogGzhRAWqbxacBv81NETawSatWZd4pt85ZU3cUc1TWnaZELh3",
  "key21": "3bnuagUJKKEZnhW31sVRWBiu2xxRSbA2agxu2ujTnzhEw7bGAiatuPE11qdia1VkfQTQMRs9S8tYzMDBwKYt74iS",
  "key22": "4dhcjGXwMBtXFDuXmtawLQu4YJBYfBGn15NKBBNbAKx8sVej56wFV4UAiGsGb19egeyDgCqJpbBhK9hGnPQaNbsa",
  "key23": "43tn8Exeyyh7DBmffGZ25cyfaxovx8pv2WkfTDzWeMyj6kTnDNzeeQpLWuQGyvPReUJ889qsuJc9GWphtAjMqB7B",
  "key24": "4DwSNwzesokifYWg6J13EssCBUaK2CnteNLsrtKQyZqSzhUYpZkjaP9x6YudQNN4pcJsH2iEj5TU1bXw49CYM3oX",
  "key25": "5Dgwns6Np9hzDUDdYgYzXEQ3udgNM3J9KMFHEuz7mbUx8gV8mkbi93Zv5Ruh8714wbNGMEFyKb8tLG7FAAeHYCHK",
  "key26": "r3zhodqnCwGi3LJS6FchtVuHZihNyTG3VkVMtfLmrRbg4gRw4heYwNr1pwZRXF7tZiKVRoqYqEeXrc9oEKqfW2Y",
  "key27": "2VCK3vrDMW33uTNF91RtebHne1bp8xh7qDEzk2qWXYDA2BzNMSNSPtttE1htANy53yJRLPJopX6ujj5Ub9QiZQZq",
  "key28": "4mUjpTVZFo7uAgbo1oavTc5qnguUFQ2tbjSbFa6PSowtjcvdpF6DgrViZMoVcSwNFzr88dpmSGZjbDF4AKhiWhem",
  "key29": "zxNPp9Ebh8X1u1BvD46NiHCnfvFwi3gZPWFwyb9mZgV7oeuni5xzcpH3xFCEA67vboCfUmCxiAWFm6CDmCK9yps",
  "key30": "xnZuZHwNWRPUqKZr5CaqQaJ12Mbbs8RmuR8t3F5b2oRE5s5hWr8Frrt6xwHdbKiwPYngToJ133K1UDqa8odBPq6",
  "key31": "42Tioz6jRvc7nk5BkdE1895eRXFZuRUWEPuvm8H282yW2KTNerWiYR3TUR8jrEhXcPoZ7eAT7RiLjz6YwR2SiCCP",
  "key32": "3bKMhsWCEF1PCU5EjTjsAsrFS4vKcPDnqZG3edPYG9YvbTax5CePXJXw65S44miAQGoUTftoFBQhxh7sBoy8N7to",
  "key33": "V82hWTTVGdxw83X3syFk3tZmwMvSc8F4H2ZVoYzaPGkrZdemz7VYJrGr89NBv53e98MprTdiDkpLDy64PAc2arT",
  "key34": "3TeWYdah1AtgiDjBuVqM9LLCsYkcSPDe1zvbdY2xPfs4dzPsRmeEwsFDDPQmdmBmwak8byy7gXgH1dGwyAXzhFyi",
  "key35": "5MD5Kovbr88NUkJuzWTQNGPzx15AUNphRrKWXiWiGCoKaiuHpZo2d6BZx7jiYqrhGmhQGbWERtNJ6MohZGgBYb9c",
  "key36": "3Kcd6KU6djcfMbbE1GqVSzD3fxk2fhuuYggvW9UFSKm8ZgRgx88P9ybGoXxBB54o1q6J75xPm9F1jMCJYo3ZFcjo",
  "key37": "37Zp8pBqNwWFaTdqTCgWR7p1WNMxsaj7uFJ37jizwr3dA2LVnf4xUEf77g1FHVuwd5rW3LAm9sE8CG81x2PKty3V",
  "key38": "4MiJrYwjrF5Gzg6NQFQp6j59zX68pQi6xwEmJkbiuSJtmw9M6335zTHgqdAxRVP4EG1vbZLb99vSQ9pkTybiuAdE",
  "key39": "3trsh97ojrWZgn5UDmqQF4HwKZDtMgUmmJA8QiVy9yGVWS2X7Pofz6ds5JEEbHRtuiUCbQbkfKPoFWEVhjxQxBV9",
  "key40": "EejGoYZkJNTP7XVDooVXj5NPReNJ7BBYCX6ZkQbWmEZS1PwH39zg6jXnh1y96P66CB9Y6HAvujTbeqLvrcdBKfB",
  "key41": "3WdDnyFSPFcSRKQH1BtPHkCnhrwV397QJ5cSp3puMo1PhNhN34L9TJ9xzEo1AbRLr52uxuSRBKs819nLG5UwvxV2",
  "key42": "3pqSQPMBbQ5vsPEv31j8vtgQd5FDpJkRpQ3VxKMefk4mjCUA8LhdJvHfKpG4L9FoS5rPyeJfKd3HQLNzjL6NheVB",
  "key43": "5JVMXA956w9DHwkh92ZYN7ebSrq5jt6j6vVADiSnpQSaehc7CAhkM5XYGehe2ogFUFHGcEdHZTQcHax2TZQg71QC",
  "key44": "4SjPqFA85MRGs49eYPymKSKi6PJJemSLWAJqGyZooyaggYB543EMP1UnBskLcc73vNX7DLwkmmRqRp1B4Hhzj2Di",
  "key45": "2JjnNVTGHDsFTcKGprfiSpMXQxsS1hh8eWd3jvgzEfokuBeNC3fRWExx3ji5Lcmh8bmBAjia3AgLua45aWJyPjGB",
  "key46": "GJVefduAzA15BxjoBpW1cgTbbzpRR5CSbuSEd7zU8tZTQ41qnF6ugwnrXzh4U3z1d7idpU1WwtdVk3NhJJk72tn",
  "key47": "7dAdiW6b4vCjJxJCxhKdNTEdVofhVzhoNwusw2NPM4GtaTeewGuu2Y2y6eqLBmzSQQuFrprXLQyb4hbQyc5ARBi",
  "key48": "5eYJfyFqx7BJhUamEHV5isfwWcH7veiiSJDipr3csoByxjDZwakJYENWH47qwsdHXknNoavr3Y2MFEKU1xdftcFz",
  "key49": "2ApqtbpMCqFmsmBVhxQRoiSvyzLFhCXA99fzmnJkuY5odKaFv8QCNHEcWSDPQshbxgYxEzT2ExZ78DFdSjJ27skm"
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
