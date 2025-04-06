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
    "4HiBLWBDQ9eTaSJMdfmH8rtrBeM7NMv7PgURHhKaVH1eoyFGAAqE8zAiWmryRJWbSUzKJABBpXdhkLWWowgYrD8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMgjvum9FNPxB8SbdssjF43ZbEFubsMMK9dALExjU72c7aDngQ7uAvENCMvdbSvnPCFjLJgTsPT3P3w41iN9T5m",
  "key1": "5wJLxGMdK2RvfZ9C168hra3N8p6TJWCzY3jHu1sLoivMeryyaFBS8UZU9HSXXWEcGgdoR81zEAYXbgU2ZzP7qPCP",
  "key2": "298fiMCFLPFkdHYJhiPAcToXthifvivxjQJmYs952a9JqwBkB7B7QWoaGicaVZSRZtYXn4DBxAF4qGDwh8cWgUKt",
  "key3": "3SSp3zzcZaMeMzGnwkFcPBsqxXEYHULUZ7vX85JfeqnD1QiR4K2dezTWZx9a9thXc9n5AjZorjcabo1VTMtKUmbX",
  "key4": "5sW4peT27uEn5HtYtidfV8BTTZaK6oTMbT9QUVhaaSmDdkZ98hP8DadtYVchQXgZ47isKYioe1PCah2vXKuRoHGo",
  "key5": "3dzBp4k8kBC3JnQiAGfeBM5d2gp92CwzzCGLtu5MyWx3Pub3pDhRkEBZHS6qLBYdKWgLswfD9tKrQevRW9NNxFek",
  "key6": "2KuuXm4cisvC4Eo1rRgimyNZrScFCSKhvHDKmS8GhaUHnV9Fb7xfwfrFqDiReeJWwswxdHpJcG2r3jiFmGAxoUPE",
  "key7": "5jh3DiQjwoqWyVLqh6ketMM1piF4EWPA7Eiq7jJGdfWWQHpm4MvgTeZw8s7AkGf3PeFm5WXfx7K9K7YAujqDjp2D",
  "key8": "4mLSRPxq2GhGFcGGCcTs4HCLtassRxK4ZoFMCXnSdBC9hZ5ETjC7qwX16YP9wBPgPu2kZhkUscbhpojntNYFa1Wc",
  "key9": "p4PxgY6QwBBwoqesL4q9y2w1mYFVRgRwPEAyHCbLyRhxDdDhnFfsQVTX9u2187Ez77Aum31unD4sZnCBXFyh3JL",
  "key10": "1hFiYik8aLbH8z7CEAkWaX48drZd32vRfkwR4bdNHkPQ5pWvn9EELkX7i9LWUr4in1VCqk717Hcxsf42Cu8gqTF",
  "key11": "3vbqZMTzdJ3p9NHWCEmM5Ev5NzPvxukzZSRNtwbfCnvY6FLXKJhquUdoDgor75SLdSVYKY8BCsFGqc6gVE7m4wQQ",
  "key12": "25F4mSkufAgnoUZNjHV7uNqMwiwuMMSc5u3z6n7PGF5BCJirEZwRkfv5sjyB6vESD3f4TZH3YnF27PcPc3eQqvDd",
  "key13": "2UKviY15hsU8MMPK2qoVN6FJWsCR1yg1VNBA84MyNJ2WhMzjUvJBNjKP2BtwgCR7EtVfpu721AMoBBuv45jLn38h",
  "key14": "wQyicGxg8E6bkimqf6LuDXMm18bRnRz72vWYxa1CYrJVTUte1xXuLpQpV6fbQUaV2X8kacaNy2CiiSw3ZmpAmiJ",
  "key15": "3uB4B4ej2nh6WituedyYji5bdfWFDFjndr2P8SfDCeDV8nMaphfMpZ4XETbqoYAkh2r1jtz6tEMWkDWesdgjE9E1",
  "key16": "z239LAtpQCpFMqpUHTUDb6YppvHgzymaBx3Pszvnd4WUwjZSZA65YMKR7o4icFHYavLBeL4xXwRjTCj1N6REoBW",
  "key17": "4BVyrPjsqjf8xKmqMKn9MUm5g6BsHQfQQJ7W86B4zFhm7Ee4PZP61eYfnJmqMuqyjDcVTn5PjbuDjynLXvRGGe8B",
  "key18": "5QMCyz6jjxPDo5tMDTkQ6dyZyQGGeNwoQqdNbdeaQ8EnanrPuZAxg7tuYEHqBrjAoq4XdTkaLhqmkFAoLam4KpWL",
  "key19": "25r5y1bpCCogpyx2vTPs5Wm1pw4Yx5V8MbZgbPvhkz9LEDkNZzdvh8AmSFPdoiR1EBm2h5e3PY62vzNBKeMNscwn",
  "key20": "42WkvYsaddPASFry6q2uaU8HPuvpG8uA4Y3mUjWn23Q14ESyRYtSLSTDEFDMupDpzN8SovoNpbeKhfFTYqXVRR4k",
  "key21": "3Z6eNkQGoYKNAQMgVRwrZJrNVjHV18PGFZ2HpS9n7MQkjPUkg4j3nHE2XPcQg8Ld2aQLnwtx1mzWr8seniMVW9UX",
  "key22": "3QiugKMhdFq1sUv22Z5icuSY4tzd3fMu6ZjBfE5x552nJLH6acQGiT16yep8zXFWD5wuG8BsVW51LTVMFczdtJFo",
  "key23": "c1fXHwkqjjJjwhLLvZeJCHw3yyFEmx714jgpreJArw2cr75nF9K5uRqiKnKsxFk6dRbJUwUJFcrGCxxziUX42bA",
  "key24": "4FjFVtQFU5GCJ7FkDgbWKQTwY79zFtYB3M7mtWggrkatBYVehtur2b9Urq8THYshw2VwV3Jp8D3ehMYaYNLKSoYo",
  "key25": "4ye47ZuKnd445aLxSd4Mk8X7P8ddx1A3gmeDeycj9pQJUnEwz2TT9Fjzu9Dqfm6zawe9qYNvqiuBztTYGmZejSyX",
  "key26": "vaYEf8gw7j9SG4NokEpJ5B4A6By4RRPogmdiCoPPmHi4sFQqzNVYrPfJirGh93rvcj1v5dJnYqYhCpDHqaVPUQh",
  "key27": "33iNtCWtLp8Pgm2q4FjpVVks3dHE4MuHv6AoRfhDtExAxpLakgx7irSn2Rr5bZzZ2iMU9rjjPdHiv9R9FPHQfA8K",
  "key28": "3VqkWe2GtHVPJL5Sv61YGf1UHVEVJMy9dzJuad14gTWF6ve8ZKaHKMt58E9LqwgCeZ5zjpL9VZqiuXCPEwbcqUfb",
  "key29": "dwrpni5GknT1JrjGTtSgcrZ3ijhcGYqSBtS4XjPHFmvZq94wGZwLhFU71P8FAmStCW6m1hNL37rHgSQBJcTi7Ao",
  "key30": "3wdYCWuFyLUycQCxgXVfmkgQn4P57fcaXUX453AXDYTC3shramaUhEx19H4AGR1LMNFBSWbX3AipyKSMqyYT7ykC",
  "key31": "65BDHDeeaFSdVkzTW5DacQ34i7Fq1dwNDWsQEFuwvUhfntZ6YYr5bCiQCf17cK6YD1UoLM2xz4FEUxufSKpWFEwh",
  "key32": "9HusyE73sXBVeGdLwFPwAVWacxwNVBFG3wGiEyfNWLD1y73kXq5KLCBjZ52n6RVyYUnuMFj8z1o7itcnVSctMfJ",
  "key33": "4ppjZ2HATzsiEAaWnvdAgYzTAQnh9TWXUExnvBkFyMnqQcceSPBXb7N4qzSntbf4TgoA5TyzKjqw5faKuYi4mZ64",
  "key34": "5nycHPXa3PgCHrxx5fGdrxqMq9xS2YN9cje3PavJM4hRVjXEiKhxnnnwMxSfGgUFFmkLeAj3HmXn6pcTM5aAgWEE",
  "key35": "5FoVnU6Ps9nNEnAXt4UcDY8Y3JWp9YFNTcftBUTr6EeajkDM9KnfztUQompPFoCLG8ZHVzfpmcxSA7mKoXdaqBe9",
  "key36": "3GyEtSQyqrc6dhi1dzfGTzvmn5kfPCQBDy78i52iTb8cY9dBSRfk8wuwohUhC6FgezokXtgGMX7eBPVZtGLKXa7D",
  "key37": "63yS9KR7MxnA1WGFZZFkCttvPKwmHW13fw7U1AHkUbkCTLKMaYXLmnaDPYC89LKAHa3wHuaxnKb96g9rdkEEpXQr",
  "key38": "2qBYqDXsjZwgVbhrfMsEsQpcYS567v5TaWGWHz4pU16VRc8A3824rnTLk5aoTiK6RiZ6dwb3xiFBPBdwNGYkPBGw"
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
