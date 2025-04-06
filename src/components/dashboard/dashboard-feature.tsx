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
    "5VVGcbidYMXDKEkSjha5BnEbCcvvETWZQ27YqWnYRNZyNfujv8WhToHVNLpjfwvM353fhbY2R75YfA9szVbUWLPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NYDrk62YoZT8cmULnbaVfiycEVsf4SDgERRcffPENjnLvgus2reZxFvEiWMXvqdofA9bspJwrfP9gUym3xsXB5J",
  "key1": "4PMsU8LguEp2TMw8DFu83pH6UujZxJ2GSLTFVSztYPNuFDKmVJppwup6uYZdF2D6egmiQyZTXrJPUw9n3LcoNLHp",
  "key2": "Zi1S9HszJDPvCayEjskbr2KMo7kgQieEb8kybPEkRJ6WLDyTqjUFEP7YZWfU8LEgVKD5NExsandPeP7zXK1MCSG",
  "key3": "3F9xXdAmBWVTEY13oTKq74ZTEAg238mhxQrasF43NYYtCsDjcK3RvB5t3wS8csq4wCATkbd44UojL9zH9chDCymD",
  "key4": "3PY8CCMT6ApqKpXtPea1rJ3ewsYciGCMzoiSwDPSEAxVc8yPd46ejBwUh3ZRsqtGLQ9EmrGn9Y72akmVgVzLzLjG",
  "key5": "52mAs3Tmj4Dvg7niBshPLyz9Np1L5rxbbD29p36JYGqgzCkP4e2m39VHW7jKB9LP8hjt3LhiygEW9QieTNEWBbD9",
  "key6": "HriSiigWo97BMEboFP4X17mqPxdDRpe5FTk2mfDGbQpGipjB7kAQa5FuoS87ZLUcBTN8YmZ7AfP4qFRFA6KDE1j",
  "key7": "28jBtD8DDLGUexFfDN2ipoDQakKXDREGijZ4jNRw27EWL2kLrdybjAw4LwRVr5iLo3mJYYVkRLsrvhj9z13vMnVS",
  "key8": "5QAXpXDDcMX59m2NttJ5Ja3UQjdsJrHygsfo7S4WkrCpYW7MkHAxauv91NputxAhhW3FPgEZ5kNs4WGEAKo7U8DZ",
  "key9": "4GajA3HS475Sx9YvmcZGxLynMyRpj8b7eVv5ZHzPcuwANNgMC63Wtv8cHv5iHrraagRhvgD2qm6crMz3XsQdHk3R",
  "key10": "4BHcKgGN6LLEpHys93AZ19PZBGdXMU2nG9pkqndeFQh4ZUL1sRBYUaCA3iednR4YtoSDvkXvPkmvESw6DUU5conQ",
  "key11": "3SRTXKgTEkPWTMTvLpCr9tUhhy17YS8RAkNHuW3maAYEJNKGSymzpFSfTbeFqFWUML6aDqz3LePFdqPDTddjKwcK",
  "key12": "2pJYHE5puxSHx9XDaVefP3JGUbp1qtcDQrQb2iy7yF1YQgPG6h8k1Y9EeKfCbsL8adkTC8TWVMkBVd89tvevFo23",
  "key13": "vY7YjprzdwxMGJecUKThx7py9ZteZoh6RccugJQXcrQNe2MUwXx3Csv9uYm1LpDpabw1BfApf5a349ydLCtj8YK",
  "key14": "2gE4WZKRY19wUDB6ksbFLUfHm86vr3rjkpcravnUffjngLMk8cjEsZcEwncqGrYk3cetPnKbDTQKHiv7Kx7pLZpz",
  "key15": "5DvSPBmAQNjKvhZ5pes6hyRrvuDezyELcPSwoBjJ2M45sWjevNoprZ5TVDb7XCAcUTjhQAzWJKav55sEBT9BCvyk",
  "key16": "3cw7GTbC1GBtRgpZsxpby5uGL5jajua1MXUHjsba3Vso1pS5xw1q16YExhYNScxWvNT8dXQr1ZYCRx927qQn15c7",
  "key17": "af4tXVJsJWHso9NTkgCTyyQZW4ZUgfrPPivYhkiP7EV8ZAEDs2KwRFxToeBgqtQkhedExqFmkjuEM5d4X7ZmMnT",
  "key18": "3UYpEjWANqodGk5b45tJRW8c3RvZaTZbWhXgu5djBg6WNebrYuuWz13g4bm7zpTpHwuXWNDuZzBhZWHpyUMBL7L7",
  "key19": "gqgc8ysSfaoDvs53xLVbNKXdsGeqyNUhinHL9DFCrVxCg2gEYB6yq6kmTk6BLcfFYDtTg6qeXXpfF14a4PPA6hg",
  "key20": "4h7fS4pp9YMxqM15moDjhkpyC18USD3RFrFzQ45jzyNBgZTFyNbKqZyGpDsyjeqV1UDwxzsfkRY8b2b571TE6s7J",
  "key21": "5i4qVoQRnjC7xjCF65ca2fE5TTATijUyShocve7teSLcEe7uZY1fqxtp598LijKn52a91hr61v15CLdXf57eBbvw",
  "key22": "2qEyrUowGLwkHQGpXYakbTnodzG7yrZFLEq5MGkiGXS9Tw1MApNXeKeZRuY1Eya8MUSVUQbbkf9xXMWNiaRrbDkf",
  "key23": "2d8eJ6prhnQXJovDrM468B8kVdgyRheoKRLESqCJ5XkcEQ4RjRH2tmx7yStaJSJT17CmV5sEKXqZJTRTcSgen8wk",
  "key24": "sLseT3VTjwYB3wpE8DN8R5ge5Rs9d1BqvxoyLkZwnTeo3qiwCUHeZbENKdnL5ji8Rzkko8hXPPv5Kfa4KPsW6ZX",
  "key25": "EBVJQEQ8woAQtpR7EcSiBW6grSpay5mRwGuLvEwLtLrYSZU35zuT48hR6wiNkiitLdghDPGn4wjr9qAfN3Z1iWN",
  "key26": "22jF2iNmWSXXKfWEPQac4N6UdGhsqtNJauW1mbtwmjbyJT27h2AJ6bxpx27BMYhqsEBQnRu7kmmD41AjiGHKPy8s",
  "key27": "3TF6Fsuovjv6V6gBh26455g48RwLD1kKMZ8e6XHaZ9PbkouyzA371wZ1yBnHA66hANYWqJ5nXyLqo4yzdm8542y6",
  "key28": "55jaqZ4YNXytFBdQ45deU4oDvovdjHyhTkkebUmHcZmih3UAGrFezrvEJQEZqBE2z6uhbo6NbAa9LrQGkqC694QV",
  "key29": "5iQLmJTYAyK53UKTrdAszyeaEhChV4NR1mHdt6gX9RL7JQkaAkPU8pVGF9QayjQjfqaqQmXgpzX25ANcmayg7UM1",
  "key30": "TBuqyNXva15ML35e1r5uZwA5xrzDK6WUcxKjH6ryXxVd8WSkVE2LsysWZMvzJ8Bu43R9Qaoz2EEGXCqoi9vje5E",
  "key31": "3HocuZDSx6vW1Mcb47aBDyDF65wwEbdJt6RxwtpJFt9zeWLW6z3bYqCmiwukfM5yKY3iYBaLcquEhTNWqTTFWmpe",
  "key32": "3U9m9h31wUAK6r6mgYa6TU9cPgy5SrKjPf34B6dWzhWGU1eYmFKoJnYHEc6QiC8fzHc31GHtWZ4gy79i96iYmzVL",
  "key33": "JigN7vLpAyEJD9YMAhw8s8xM6ip6TornWsH2F44z5UCLFNR96cfR2XhBSmJ2JuV2pUmswDqFNjJtEH2r1uJPr5S",
  "key34": "5GUVvGYBcyTEiwQSKScNWhuBRd415wxCaoSVSe1DzEnn824vEvU3nWPZEf77g9HZX3Q5isdkfrkPymNhjoPfoiY2",
  "key35": "4ffv6Kye49YBngvRyfAi1YgCgV6N66wCLFrvgcKrRYoTbQ9FuWkTWANWYSi5dccsdrMM5zvhr8kyGL35BJfa7cjw",
  "key36": "5d1aGFbTFcF379QQearhLS1Fu1BUpVfs9oVAg9Rc4kfYkcBva3CRt4zpPNqFG9NvKa3JnVZ7QWxLkAg1KwacABKL",
  "key37": "5p2vQ3NEDBrNq5PVeNB3yoR8wEfBz3su5pU3uWMW8nbcFjqmN7GX4cFKRGLUMQrWcEwZCb3GzNSYqbPeAWHeWQbe",
  "key38": "4yJRtmzUdN3FyG4L6PZSbaRMVmt216WpPUFWnn8ZiMmRqShmjVaj3FMcUSXAUtBE6VjoYWvBzXoiLRtw9uN8x1Xw",
  "key39": "3vh3Ush8LJLqmJph2xe2BCdHxV2dLUXDnXbN4ngdKngfNkkg3y1GJVP8noA7zjX2Y266CChRnWoL7msyuHxmW5eU",
  "key40": "2BDg7aDs4ojMJVEYA1jR78BLuvjRacKkCYiQBCstjdjTd8cJuzFfppAj5cQSj5nACTd9PVS3mi2Qu6pHmjc8dr8K",
  "key41": "2g78kwcbvNNScuAukbsotfB6Qkmo9By88L4f2zgJaesMsWCVxnfjv2cFCZF4yysxiGMVvEujdYLq6vpq4HSamhWL",
  "key42": "5gaiggQyoqFivmwr1L8SL1GSQ6M3xVaQrW6CCpTe6aDqpZUktJxWK3j4yXGgzC3vXZjRJ2WNWmxNNBrtXGw2rK84",
  "key43": "29gfjDNav9NDacbg2dg3pFS9yskDneGipEsBDGGgnq3n85kkRNfuyMWkVvHuu8dnd4gCjGsUVLrTq8Sk6z8iRBWZ",
  "key44": "5MzmrDHtQPJGuP1YhVv4svbRaUFpsYVdJy7fUw3BfLZhFrkKdyrcnPwanBP7ueLaAvsMFP7pwQ6yFr8tEXTPjwWF"
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
