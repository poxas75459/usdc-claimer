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
    "5vFaMjrx2NwqtoNJXYXeUbNbUGieDaf3GymJKJ6hMtsUdqDiRdE2hBYpUr8FPBcgJBrxENxkRxG7XimwhZFoepe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRg9Rn3Pg32XtDwSuuyEE575XAxgppeWMrPWGFCsFdZs9As1GEK84F7xqduza4opZi8HMAHkjPwF1GAbWJ8rNQL",
  "key1": "48R1jPmhLh8bMZQXjqWDNK6d2yVBaB71DFHv5gxD8vctiJpxRbRfPDKwPJuyPiUN6qUhFGpq1VsJq19rf8ouQUaq",
  "key2": "fWEAs5oUdHLXtRNnswfoK91cTcbiTmi9tK2KE1EQrXEtnBQ7wtEc8G3E6giW1GzUsMkZUSnXF5HhTW6JAfcRvQf",
  "key3": "3QqM88U86NftqQ5wN4y4doUAFaDEUz5iBrZM1XpzMqUZmdhExqHRuidUdgfxJD6HrKDzqgfVquaRFaxYsapxr9G5",
  "key4": "5X8BqQNASWrT1G38aNhTUKcMk6poNF3Uabz4sxTVwvG8NkmWCJbZzfrkhWxVKJ62DTNZXsK3uJtPJoAdEcx9uWrS",
  "key5": "3oJsicSeLrYJyCoz7nosATup2h2JdBCebTR7yr3HsHczkneF3YCqwHMAjmpM27ZCcXn35UNQa3a8ykxnq3DnqQpe",
  "key6": "4EZUycZ2V3STSEs5QwYGPAnY2XTWHG8UiN8xAFjQNCFM947Zghipx3jLxMYebf4oRdYaHRheqzC7XeZDjrVC2hZW",
  "key7": "2rxqQity1zhrh2si6EP7EGyYQVVk8U2ksKTpeCHb7tAaQKNiaPnyqwYqTa6hTW5ju75cN583xL2FJovyCvxuxNTk",
  "key8": "4ycMWeoCN2kGbstwES7EVsxvLDAt7qid2eQKJexTevCkEbq2HFV6EiPXQau7g68BBvkufMtFAk821A1rPadSAYrq",
  "key9": "4cFTAFiYXWxGqYE4X9sYQLAQXYKecqdKTZonJu9E5m2TdVikW28CrnfNXJKezRwFoE1qdpNUwEqqysmNGQfpm3k7",
  "key10": "4ECgm2WxpGiDKxUU5edkMH2jeg8avMX2vYbGQ6fxzXBW7RFpaeD3YoB5Ea73yvVAmAHA1xrVXrkgmCt5UAEX1wUA",
  "key11": "5CCnbUS8423t5SQQ9XbsCL9KznsQVwLaNnxBwDqw9FipmoMJmZns9Fh6ZcqVYcur4hLPs9kjMmQb3FffuvRsLaxH",
  "key12": "qArKyGkZnYwvRCRCeJ9r7FoLKTjp9rFwPE4NT92zWrH3WetnK5g9YGVRLrdvQPGY91BBzFR5R2T3TsbnN8osSKH",
  "key13": "2TpruUp2Qi5sCYLxmxHgvgZpMY4kKuahRquYd5kazARaN25FumKLnXunHFBSr7gzFrDkY2NivbUcPjiyuu8R6dgY",
  "key14": "4MpRJZR1haoYQvDretm1f1KuqtBipDBh565Z8KG74BggzjwEf6wPJbtyjRArFmWHL75uGYX3V9gaPkpbjmEggehK",
  "key15": "5QPQEcwFtoLpM9mpbcDLsS7oWEckmX3RanTHdfpUT1Na8uQuJhMNi4cJGbRNux8vQef1qiCqbUnXVq19Xkoyeaax",
  "key16": "vHpr8ww6taWkNVRfSFoVBVfBQmLFAd45Zqd47SGxBjpBHC8ttKrEfgBnfBmRHFnb1dNqvAymDQuu3RNo44VdY7Q",
  "key17": "5tvq2ycTX9t7qxmkj2uJ4hMrREvCKZtkcp793ZvwNhFeruG7hFumSDUM67C3bMkhweQsundkoQcG9F8fnTpWCXJu",
  "key18": "4tN9dyvTDM454C2JjPDk4uQPkJhufZ2hUb2bMHHKHw1sFYGbYmRgLicQtQvtqm59Y9eXRh1xQuvNVDQNEgPohecB",
  "key19": "2uhoNoAXs9VpoGRNTfUzw8SGWvHEJes3wiCFLteF9Dk7r5uoSenwBEzQj99CVCBPP79YcF9T2PZjnyjKcH6A84yE",
  "key20": "3C2EHzPKRvn3k6jjL51ou7zbZmvUgRqEB27VvkGB6ZHh8Wma8W9HgwfnGKMsXKNd8y9k3R84xCnxB2LC4K8oKmEM",
  "key21": "2G9EUBDjcwJvJ6Ujud9n3JYsczyvHLnmAL6h9mo8oe7qc6x66SUCvunGhnRzFEVLWTnfmcNg1wEh5sANCithptFe",
  "key22": "3o9pBLnkpRvoK3EizGYUirVrM5tC3wRAncHp3V4eqfTXNkNWeAuHMqThjLGfm6nW8VCKCk23Udy2Y5HhZUA4Qq3w",
  "key23": "3tiMfBeCiVYm95jc94PBycqaYyr6LibTD8Dmb8MnLkStqUGEq8EEhH7RfTSRZwziP65Ru9DbyrA5MmiJhqgYtjww",
  "key24": "3kPqev2CL6Mtv1BCP3qeAo38SK6NFNJVEbkq56GFKcUQJ4a9b1DkTiLEX1ALU82RKcrU2UFTbNiyh7uuDGCUC5Pc",
  "key25": "5pjGT9ESceupEzpkud4uL4sLwMEdooTKphtp18GXBScYPQViPit9VxYsdHZjm9C9NLpcALp9bjRx7fn1264DAfGz",
  "key26": "4FapE9zG3J5k8jBgU3h9QEcQg71JV8ZjyzB4smRBMxYU7dCC7kyvuLYmhv456aEVzhx6dPbA6PhE1PSFAs2NASpc",
  "key27": "555Z6PDpuj58AfmdWRbssJb5gPwZiLsvm5ykqfTYRWUs3kzFm5hLEudQidhzKUE4a1x6fq9ZJPHHaabU8j6v895R",
  "key28": "5YdAQFiJ9kg9uhea21hcEQD9VA5t22LBD4jLs15mzGsqtZcaGySGU4ZSApEz5egrs1JdjVhse4wnd4xA2eGSu4BZ",
  "key29": "3o26g2JfqdGT79XUQSwttEJLbxhrXV96h7CNWVLAJ53J8CmQqBXpfrJqnHZE8eURJD3j7e5NnyfFSMfsKRy5zSMu",
  "key30": "3g4HZZhfdjr6ijeSMAfAecQFLLLntTzSffHRbAfnTq4S7mo1i4ePWmzLzjyCGuR1of3cRGYD7jXgaUGfRLS1QwoS",
  "key31": "55HLhaBQXHfpbsm3H1Kd8LNdDdmPe13bq8D6AwM7SEybDu4sePPRYWB1fqnWEyrWCSiwPPbsfsHmDk4hdUEKJgGt",
  "key32": "5TJbSWcGmFovZxn1iDsmYYG649Crw6KAMWATwJg7EmNdz8cYrmRT4U16s8HzPumCGqJc7kK3HEZWRGq3Zp4zCQXL",
  "key33": "jcJVQZSa9S2ESeWNfE5yGkTUoK83XLuiNcv4CdfKVbER6tXyGsJHTTLkZxgPaBrtDiE3oS5vNcx8qB8jMdFTaGp",
  "key34": "5QBVCQuCREPqYAQmgfVF7cVgN9sC3VNgj4RxKRi7oTZxUnGBq7vYYNq9DBYoR3pR8Ydeswq6wa8c1UsJ8uhmk8pz",
  "key35": "38hvsgDs7AWHNEJJyWqbUMGuSo6C34ZuptMQZbwcw9PknLkQN883YMP187YoBPkd5YUkrJTEjT7a7ytG1hYEeYgS",
  "key36": "2R7inHwzfHTENAM1rtxzRfMPiWMUnsz8VmLwFbosUziwW8oQT1VF69E2ioc6jqEavHnhA3GUKJ8TEduTfPahdkAo",
  "key37": "3bv9BRMqPdLwVEYi2Lt7kZZe37F8TGdcYS1VKcxufzfWHgnbZuXYqDYBgBUMELwjXBRkSbyJHkJfALKy8cbSU1gn",
  "key38": "hrMEGzCJKknYzQj5QKCZA9cRhc8KBZ6RRyaNK7NL7BupAPRNd4mxuFhDutvb2Fhvka367XG1fMGiEiywatC8Qk2",
  "key39": "4VDFU3CY1SuxUW6rnazjaoK642i1MaSJDAaq22HLz6SHAbqxZD25sUqJ8MY4bm1Yof57vL8gZKVfkBFUHXqtvayj"
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
