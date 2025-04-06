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
    "2mqHBiMKmW5M184X6cyfv24PWvkEtxAS1wS2YCLak5dRoeHWVz6jye5TNhSUv1cyu1k3iFTFPXWGF6Qb4EZFCiyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36g3HNUEFA2Up7it8FPqjWu2XZVzHwj8i6vwo91ozKz5yy65Xeu33JSjKKRyArii5aZ6DfX3GfUGt1YBgKc4t9KT",
  "key1": "B1dgVp1CrrrhP8eFoChp7zATF46CW8eZd4bZAYbVppqXYDxGLSGCbqTGcY2et2pUdjfnrCRBwFYRS3RQ7RtDaZW",
  "key2": "4NoawTN445zPu3SGSEMeSwY7PyQbTJudpeMQnrg8TLa9VEPU3UxmKARioQR45BBCQmqu52URHyPCoeNn9iw4jQDp",
  "key3": "2sqrKmifQbwGKzvDvfSY2M3287eJYe2PtoaNUxFeUMojed3HvP4qZXzv8NWQz4SJYW9VjNBzkB3dMA7fuUuHiGbU",
  "key4": "3ZpFuePPmTcqiFWipjEPa2sy3KkfFF4VdTtVp3aFsKt5r3pAbTZgoDuvoSkcKcwu6hiUw43mWZct8witPtSAHoLE",
  "key5": "61wcW1gwJzmXQhkGkP1dPnYsRMhxFnNRXLS7uetmA5aWJiRV8twG2vJzNEHEqHpy6fj7n7ML9NrxXJu4GUHgdeCJ",
  "key6": "5SyJ5wfvCqc4AL7E55gccaxaqnXxCkpu7trP5cPuVBSYhSjGYpBCxtYoh6neacFq8BUb8mQ53XKrwExFp2hC65u7",
  "key7": "2qydx5Cz1b18bGxBzReWqMGvN6QgdbpBc3DteQMn9oLpTnqnfAmep9Y8MD9v23nS3cWV3ckjvBsiHbGrHPDHiE7o",
  "key8": "MYcDv2ToByMj8wvXjoiXChEPHPVHLumTs4JqXCf6W3ELwqcu5Mmp9QvGNkoAAVvG62GhdcAV6VSrp3PZcS3fZrE",
  "key9": "3CcowDF7RYHWWMF2kFgbMmpEGDggvKHdsYdxSw9MZ5n49oWyWCXF4ZWymMEtqTwH6F9qTMu94ciBRJn5PoBBPE7C",
  "key10": "3odchoAzdu9yi5Rs1YeKrULHoB2TQJHSS1b3LzMbVtZC9EAEwA6TCWDtqz4KSboxuLYKjMyjxkdwDhwFNwQUBuJo",
  "key11": "2Gs24xjD47fEq8t1bCsc6uGuPAMUHMYnAZTedEKrfLzZXuMZ4pboSXQp7cKcq6B9tPkb9UpcAMYFNMXEhmHb5pan",
  "key12": "AV1wf1a1P2Q29d4Gp9C6AidPJTHfDod5qMPGAhUE7n24BWtny7fLPpSdzGx68tvyqVXAtvZj9M1dRbRZcPrSJ9T",
  "key13": "3GCdbjA1iTsUyZdyQJYBTnR6Kb9RBRGw7x9u6TfrQUBzmsjWiZ5qy6u8VRfDHr91twaWT4oSA4dTUPM59z5BZGgv",
  "key14": "2REviim3yJQAeSRE4Fp7e1E5XNLmgGk5YhdCni5b54W9CgEKGpcYev2pg298jrT4AMgRaifqiPvmdpBdEqpc8szb",
  "key15": "37KTSSM8VZhpBn16qjgjbDo5PDx7pqgDQrofNGDQbE3eqf76rkdmYi8i8voC1v6C9k6MmYAzThmowJvTzu79QbF9",
  "key16": "4vheGqSZaR4guSY3y6FMsjBwTKYjaSSKrxogHVBR2i1tTvttcpB3dsdE6cdEhwhmEysEfdLzaTA9n7bBMfNf3WHY",
  "key17": "WccmMq4SuKmu7tzyCJQzjqrDYGQ3WTTjGkXSh4xm4RJpJHKJttkygYMQwSVcEqFkCxMVoPPhkceEuFZE98A442j",
  "key18": "4m4xe6s9vNxXG32M6HzaaxGMeGKWSyzeVMa3GvArTuxm8iiZsJb44FPmwzQMSSsH1HxSHR2zqrZmsXabj6KDGVWy",
  "key19": "3fajAsycPaevn32JvS2HmWASvD6KT1DNMmFf7NFHv8zX2vEMjsJp8qu9okue2Nb5RtFAi7QjiUKmTktHo19hMGyX",
  "key20": "35tSAySm9GRZwUiTmqLfEm39gTPqdbJTLRJSwUUS9TbJVMAffMWuyjMddWiAeCEXpVfUHz4r6nQJ8oWxUSHjwYJj",
  "key21": "geXD45ypukNF8s9cwsBLPT5hTohG9Yif2VX85kBDBvDZw4zBAat2TEv76RGCxrgz1kGPWFQDXzeANABbhjiMR74",
  "key22": "3JoE2YudRXWjvs8MX4TYmRFnL2xQs2Wt2CnWSB5joezee5wcY51opktzuhdiBzQehqVXw8vhjPpptSeqS1Kw7pgW",
  "key23": "27zj1uUUaVzdMS24YyFqLA4oAY8ezgcZFyNo6GvjWhJvb3VU3Wsu7T7bf2AadTK1G9qUY3osQdoi1XUsiPWpXv7y",
  "key24": "5vzMsRcn9VVnp4DywBj5tXD7ghhDcWEJWpw3XxwnJ3QWpwbwfarsqc7eGwJzYnWCVX6Rfu33NFYwq8NymXoBRgJb",
  "key25": "2sx85TkwYLyvp4FceiHXKsWpZ9umgq5KSbKvtE2YsmhAdaRL2LzTdpfuDMZeVVRLZDb3nnhLQXP3r4pouuiJ1jRP",
  "key26": "UZF3N1Hh2QvG44XM1SV5tFNA8xaGxFYygT91QjkN5fQnoeioeM1Nd1GeQpEKuG47dtnqBkkA5YpwMm2W1nspwEM",
  "key27": "3npht7X98NSpPo22yYHGEKy6NRiobpkCrPdL3dUHcqMQU5Cv5YZ23V2FvHhCvfsG2HEYsACLTskizfbUB79aGGfv",
  "key28": "4kbr3ta11SkrMebSq1MwZyEb8pVJBoxao2jKxKvD12usUTthDLvWiVdJmuuuvamzBeja4q8aEfP1PGvNcATpm8Jg",
  "key29": "5ZwPGMNaBoUYQqpGKMmwsaDLGjMaoxnsweUKjdoTX3PsWdcqvf2KcpS99emF4n7BQZZv9QTTtkUqQVUbyrjj7r6b",
  "key30": "TBoYy9UDchDHFEvXstGHQrgQyC8uSRKJV1tHs9KZDVMRBTJiJHfR3XnFvFHaNTXXMDpSfoJEYnJTcD9v4KVsTKx",
  "key31": "2TSvsg3eETVJE6ouH3vdMm9oabmrUSrBwcFk8y27U38xFgTVbfHDAvGGkV1s4uXp8tsD1qBaJDbL9J5zPAn8P2mW",
  "key32": "53PLtvFXSZkxyUB2wLourTonNRRm1VNSh4DMhuA1AaeNNAVd2C3MF6KpDrYKRbanMCADeEspFjiKo7SnJ2FxBVjB",
  "key33": "DLkGpedcsVv1MPg3m2knCdbiRZ5yK7aATKStgHSmfo7nus4xSSczjwwENWxXGyJ4wVKMabuGp45AivvZ8MYj6pG",
  "key34": "4hfQVhVnRjF8cFZCXCqJyNv6xSyXFv7WYZhKHqbkkkN5QARAK5zmqrgfuApxCgmVQCNnrnJjYgdHNLdBUWYvkiE8",
  "key35": "5Xn4pFqXzUG3UaGYNL48rqtaMeAhEZJLgoqTDzE1sfgyQSv7YeUzUB5Dvf4CXt9ciruBDnG1dc5MEMNKKWpj8nrH",
  "key36": "2eW3aS3MnRA9jmH8gL3YdcxYoaKALgh467AavW5aew6zGEvpKEFaPA7Czo7SJ4J8G3NUTs4QQvBKcRq2Q4jg2V4i",
  "key37": "2kfy2dzRasiFVdYFcqfN8y5NJUbds63tC9teya6vCPHLzsGCgmu3YYwB6CgQ8redXAXbiAdEQjeTqcesBf76BHo1",
  "key38": "2jx3HDtTNrLSdcsbzFuSrk8u9zqF5picMsuUWmCVh7nZ46tNWTDHTsBi1TFartebY1eY4CaCsCwVMeZs2bzmQwUb",
  "key39": "5jXHm3Yt8aieWvpJBHvotu3GE3grDwr973xhYPhXWdMuFJkcU9r5zf2TDEjqDEgj7bgByrfYwG7CJUN9Kg5BW89w",
  "key40": "65Y5RR9dF9w91DC1dSo9b74zW8F9SiEvHPWJhy6YhjbLfPqL8iik62F8BNe49Z6BWtJky8B2Ryo9bskUTkPX73iA",
  "key41": "4a4KRhLMVRCEapE2KDxEWL3e1oFXzzHHsijCEBEmLVPU5t57DLs1mjj7snBYYe2QZDCcwsSUbyAaFPMJXKv9a5EC",
  "key42": "5jgJ5VAgD4o5T9ugNQ33Eadj8MnHeftcw1Rzqv6gXjCecTsHXrRMNJa18AbaiTua26wwKAFTdLxGwSse27Vt4Uve",
  "key43": "3Y89FqSGxho3RHGQHLHuHCJQjuYKScHgDCaAL1Js1tn947tF7Ss9sTMb7cpoJ5zKscFDz4N8z3XEt7dDvmTeuuWw",
  "key44": "3gV64uwJedu54oJP73iTzbcmw42RJZKypXi325kLvL1cqZZTFoUDsdSDvsAqztkCnS7FqkDxnuj4kqFpschpYydf",
  "key45": "2iAWN9msYSPsPBtF9Dh1sbbKDH8dZy5DkAvj1NZvQnkDAcT7LhCzSsYVBnnRgNMM96FTkzoTVsytw3PVXmXipgpA",
  "key46": "2Vmg4xxVduCNdct2c22v5J8zxq2YBmTWX5zpUsG8G6qtSuAEf1Rt3vD1wMiVzC3dSJEwz3HMT34XRuwGAffcj84k",
  "key47": "bRAP4jh3Dfvh5Srn1mJa1WEbkvCgB9rnc7VBdut8YkhxUCrDX9wXwg2wNqpZ2w77BRMaDYiYYzB4u9VN8iNwpod",
  "key48": "46LdCmdsKwQk7BVScdQvGPjwSpZi6V7nSb8NrxgdL4NL1Y8KWw9uttGAwFYQepsfsbtrh8xqRmAC4mCT4mZE4r5F",
  "key49": "q8MHZ4WSP7zEMB8qy4GFfg8jdfKsjAQNboEaCr85GxUW5uUbeqS9G4ooHJ2erA3pSJwGwoMsxMEvZiGQd2ysV4W"
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
