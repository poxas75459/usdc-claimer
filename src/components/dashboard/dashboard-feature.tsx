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
    "33tW1ZtTLv1vdgPcjEqpfmPZNU8wKgJehf7jSoGh3NKKkjEC8V34DhVNm3Zf3dhYhyQvgD9h2FsyqrGFSpmS7tX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RaWZU3JG36S76Vvb9EtK1hbXxCK9ZEqf67ENf8NEnK1MdvwKwgbTQxqPC4x713RF9hvMRaiYPTLQEqwAuTJ7X1",
  "key1": "2LroUBeKcGwAZ3andBpKb7ATNvvnrPuRS3fj9tTDhUgVLLrjdfN7ykb64CY4BLbk3bNFjY6mnPfYjpjVkjgf88Q6",
  "key2": "3rMFw3cBR6qJRqL9NpwPX65rVTzkphtGMZjwK56AfW9q7Z3rdjnPNW1xNNCt4p9hCewaVn5U3SdzETxF361FxpZt",
  "key3": "3T4K69LGdQzGSgemHkNM5nocVJzxC4WsEo1UUZ6JdsDtktYske7aN3vctic1s4yoiZp13HUf7rJw7PfJtceDRUs4",
  "key4": "3bXoNLrWCWpLb4m18ZjUCddKYcrDZE4RuHC5zh5GyKbgybv71RNdEqJQXXFaA2UxF5NDqbwsPV3WLmVXNcAGwocQ",
  "key5": "KC8VGBKxqLuNbCK4MjDFNufxtBAbh2sdLTwihnr6UuAfCTXQ1niEKjWcBWSrqeMPMNyEYwjDSvK8FnjwcVoV1xW",
  "key6": "vgjcFidYF1uG1LyemoSRP2YXy4r7wGtVbVZshydhEcrPHRxVzorf4HLc4RLKrrgpDM5QhFji3uciS2dgNvU4xLy",
  "key7": "NbbKUT1UkrjwVqegbiF6DtHXaqCYfs9tGFyKcY6qSNLfX9d4tPtf5GWo6MHoBN67Us1mARcgeauPENU4z41bogR",
  "key8": "3rdVKm6vTvzZAb4qW59TmdLAyeuym2s1Z133UCuy8BKmWfddHg7rxpWZniwkWaJoXHpoAjR3gQBjLHbrr4gXGLFv",
  "key9": "5CnihMKfVkoYPuYDQUtk37eoLwgupyEQoP6DA3Zt45TbXQt5MwTVGkENEwhMCxMqHbrAZH9KJsxNcPWTcapiVgze",
  "key10": "5ZR8TM2fQkevDg5rsMBYCgYVEvzt8r77XnVaGcKLmJVq2UjEn18bRDyKcviaaBWbUtzmt2zXDozZQurw8rsZPXgq",
  "key11": "SkpTjkhXimSg21nKuD2LEar6BfZ6sEDAfyCitobSGN9HpJb8mjRkAvXootTiv28qXi7a1vnb29BVcdwB1AgNTEi",
  "key12": "599swQizQ4u9GGToyUKqbsHtVHjxf51FvdD2MFVTYRwubPvNHPZbi4jvVXse9Z7cM2jDpAmsZuaFGUoSZUr71HMW",
  "key13": "2SEvdAamrbea8MdwppNuumdMNtsSsnJLZyvr3cAdc18e3geaxNXKjh8zcuTx8i2pdWNt87UsRZRBxCUvqZL9aEB8",
  "key14": "49d5ajB3w4ukTa7qeT9ZkVEiGX5BaczQW59p9dsn8uqRv6zTiMcbEEfAG3iVWYRVsVhdcw9FQAXdNEHkEKM7VpdF",
  "key15": "2uPTRBTmzxuwJXP33vL2xEgD9hKtvGecDuoFfG7FrwJ8183M4Ac8i9SopjPPoB2w3vh65SEWm9PN3V6EYLWRPgPj",
  "key16": "3sYfDhAY4m9bN8P59S2YXKW4wDxFU844wSaJMMnrrXtAQBsoJnCbeGyRqx6GjT9zwKqR5BzgDHPozgs1hEi2uue1",
  "key17": "53Nc1kLmxtWKz8kD7zGn4RyxZRTX4sEaa3wUpz7nrNZi5WVdZGK1SMZZtiTtnqvsFTe8EFtss9HWGbwTwPZKQoHi",
  "key18": "3FTU2J9azU76btCTM7sXWanLMdSgbL8Qo2PwxKmaGfYEVpK826KrYa952T99wqFAv1eKoU8zdFxQP6ZXCzNXeVLS",
  "key19": "29jtDhBJqLedMS6WES8VVcHMqX9evEmXzUBdfanangzhXr3ikZPDBXm85r1nYdPdtHZTxVksQWt8hGc48tXxe1m3",
  "key20": "4rMg3K51kLKLSjsKwidbQ4d8QztffbfMDA9xnBtUDN5o5LrwiRQe4X8soK2ptxmLmQN23sjKpujWFKHsxHVhca2q",
  "key21": "4vPcQmsn7BwYk5xPSwie5MbDrDorG3X2Eoniq8qonZYsKTcqFM9burdexjrQUy8VZVaDx27Rgh6CBERc4SF6NR9A",
  "key22": "4TrQCuvkfhHrCbtUjwUKT41zy29GNXom8EBPft7LhFHnPZt6YurK2xBHFB8uban3Pth36sQUfpLjRfRn6hz4PouD",
  "key23": "26Sa9PPJ45QTyDvgundveE43AVzLYjXoJac7ctt1JHW97vJ9iK7FwTcm2TLXNPupXwaCjcsiBNnJWJReZy3jrw3w",
  "key24": "2aurrrhsoNUsgq5fmaJuDXmChCX8nwsD2kBzu669qa2GiRuf5JK2igdTSj4bLRKBfNooYM5ypvWKbgCaAovjnqv",
  "key25": "4kyUkusbFq9PBqvSi73Js9RHqH3yMEmDn7oYWP2Dv5ZdtDBC3FCvSRpFW84NUd2fUNkHxzahKKdkL9LexxRdfgbB",
  "key26": "3J9at3KEFPgtD1A5a9D4EKzMD5URY85JHtRMYjiXnqiQMsHJF87bpvpi5LVukYoFwYdt8Wzm9Xu94DShT8woKPZD",
  "key27": "5E3tc4ZNVFmaR7TRQdfgoAUgKpmpKm81LwVmf1oFAnquox8TCovJavx2rRirMwLBQSQ7WqgjQEVZKevshqhnFyaW",
  "key28": "4Za5VZx6Kv9V9EqMRn2FXpGpDkL8gQoDEAkP9KZbkLAJpyu4w6SyiZaMB6c7Z4jzABui1mm8US79GbadCWGDXqfD",
  "key29": "4JMfDHiQTPFkSv2sDFKv2uCtFdv851kZmDA5NQuJfkMQJt6J1pjsB5krLN9QV1XCMnTrsGCMzYkZi4UCvr6BU2eS",
  "key30": "x57xe3EenZwVrVdjxEk8EHqe3t3xUmiJLNYcCXkabtb68pRucrWGkJDupM2Wc3XUpj8TerTUzrazGf1bTkDBCV2",
  "key31": "rYhxeTAGLNR8bRgXg3sYWpxwrtJhCE5HCz4NCvk1JActGUm7xpwuK1Z3a8c9DFrNq7gX3y2YTyL3dbkeMT72J6t",
  "key32": "3oGRpiLYu2tzpuak9aD46U1mhH1DnTGyCA5W1D1xVFJXrFP3wMPsvvWUvY1Sp36wLffoDUzNyNH6DSTySvSe9i2G",
  "key33": "5NDHainVJo1aJhYqko7h9dFLjmuoUoXiYGQNXvL98rS5dUbYudxNjpWAqDK9NVfkfVZaHiyXNvDeeVHkzmzwDXqX",
  "key34": "e6zPQXy2qviKbE3Q4AkkzY7W1yvagBTQo35baCettLkNhiYwuPFgGX2r7bYqMdCMcBhrgJY1rZ7qp2gXKkVEhW7",
  "key35": "4NyShu3ir7wkeygHpQvcCnwZKt2neMeDpvY8f929BYukePakogreywoSQYVXmbdimcarsLMiTsjXY9rjmt8i8yjs",
  "key36": "3RoquhdL3sma7M3uGxYUXXs6kMzMJ8QSsobykRx1L1HX9jGnaZpfsUezkQoKp52oAZSaR8aWsSGkivrpVxW2cMre",
  "key37": "5Ezh2w6qX2wkVBUcqDWRv3B8tsds158EAfJUSy2r1ox1m1njBpKxccBWNUhp1ih4UWFWPQGnEgfoYKyWnUBbEQ7i",
  "key38": "2XpQBDbVBub49n4yD7myht46CovXW4Z3gwsKksZyL9XBS8m7MAGk8bL4LrfYzDuMUqK6jeKjzVeP2r5vpxd9MCLm",
  "key39": "5ts1TntyMn1Rgvbg5Q5C1G9dyvf72NeFih5MC5w9o2im5EcWxuQv9q4UqgsytvfRPhCAogfVx8LodbpcYxQXnDZ",
  "key40": "459NorFb5PgeXg61oBYgojB1qE593b1uL13Gdu867ATvyNNw29TzoATgpwGCmUrcnsvK77Q4ZGDpDvJBKVCa7fZV",
  "key41": "5oSQu4o3QgtZuvYdLWuBE3BrWikx8sAVfY7mTGmBmSwuoTicJyYUWPRXjCvspidjoihdgvPkQkBQBLRAgsAhSL8V",
  "key42": "YQ9fjARYtDnZ2TYMYnhFBxxXDFK8dBzDr3UjN2uPqCaCzcvqBrDHBxWW6HK5KxppiF7wGJrvHB4Z19v1E9BiRij",
  "key43": "2fh9LVs9fdxbNxy9FpqDypdxKLaKercQay2hUskMWVPFuzv5EyV3caFbfZsMgtGT8vPrJKQKWxSngLdsG1Nq8MH8",
  "key44": "2EyeL9edyaL2jnaDszh7L6UE2622kd59NHPBnSR7dKwawGownC8spfzRe9jpL1fZTtaSkeqPMmr1NjLGR69RU1Us"
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
