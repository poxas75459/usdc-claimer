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
    "5YAXHuVPMkJEqmErSS6NGxMqmx6WKLrjRLKPLmU32d4GudmYimG4RBhxVqh5eEhPHdbCnaMNqh9qRQwvbDr5JNsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iEn2AD1VBEmgmFPwV2ttN7u86pk7me4LZHcWkXjS6XvtD6P1oEyxTzBgm4ZjktZWKYQaaUcqtk2KhiMdP9e3NY",
  "key1": "62DNqDhPfQiJd4Ed1kVJTEJwj9Upodvm3TUpo5Ry9bmv5zqnRTatZghEriGgajipL4mg5SuakceXHNGqSM4SipM3",
  "key2": "2fr5qPZ1kvdP5ydr4TghSbTcn8h1CeQ1dRVBXFxDSW5e12cciteQaFmWh6AAZYpojyKtwfZ9M69ySN1B1ExvyZN9",
  "key3": "32RrYNJuXxZUo82nX7rUW94CKMcVCcazpBHJtydqBrLtZ6H23AuZwjcQZ43M4TruPsNhTLaWreQjhTyHstNLM92m",
  "key4": "4xATALKzZP8XrLGRcSYmcGwibyo2vLNJcfYRt9XosR2MmgRhNNhQK8ykYjZjXxRrg3q3TuXBJW3N3CMbo7SKSu5A",
  "key5": "3p1uHEvpqpDUVQmUh6hm2qHNaywNoR3TuYCqLhQfgTGYidvzp75mgkztiyTsWsEMxm5wQrTNs8M1eVknq8VzTkMa",
  "key6": "dWbKeFucvF5F1513DiyPGMrar6pEtHC6P4Q6bbjwijnGuTcdyA7b5pY5V5v2jtYeh6JYiPyKSuqTtMcWQn1pBZ6",
  "key7": "3NAdfVvBSuhmrwEVjv4mgwm21emV9sk6QbcKZMFPVFH6g3Cp5hGq7L6nmPL1w6EEpdeyeSMmnbHYnppznRbWrqGS",
  "key8": "3B6ygzfobLsoeEG3NhhTxcTSvxB42ufKC1KW56GuJU18B9JEpgrkW1xUKfYodfWFqUnZoWkn7Aa4NbeZDq6uXfFR",
  "key9": "4FS88P44ZdvXLWqtXghxk1mAEpEVasrnoASTL6oSk4Twrk4ot83669bRyCEys3oxVD9XJ3sBeaK7L9EfeMuXgeEv",
  "key10": "ek6VdaEmFLPYCexVHFeMAHm8LoiC8xw4L7GXqcbgVq2zY9touhAxrsfLZNgMiagPmKQT4zoFDQjdymjtvxrXszL",
  "key11": "4aGJP6pAaJt6sCSYYGoyjmabYs7A9JPjBLAHVVqsrxhxb4P6g5KaqPPViWKfcwcGnsAAdUQjbW2gSg6g6JemowQi",
  "key12": "xNrnzRrLxojr9zRq9rHaFMwBAiYz1Ti7inu5ogQtSRBFpoB65s7uY6fqjF6Ro9BUZqUaKNpC6DkPQHzpXfhbUNT",
  "key13": "2NrRtXb7EsWWLkEGqbQtRgpH5DS1EcwQCnHnmshzv76VBVeKr4xaaXhVE1uRK5xyvtdwZs38bPzT9DbbDjULGnL6",
  "key14": "39YgNPCQizaeiKM8dvBNy4pQFzGNZXQK5Kkrzi4351rj9ao6dZTDr2WDqEcA5PBNma8gADcHrwqNZx7aGx1wUNQj",
  "key15": "4Uq9mnMfvcjbYEjqcQ2nKpAMGwNDgvCU76QYik3E4CgvwpCCrJ1kRLpRKZhLpNZhqN5Fg7jtuGc5RxXTNmzrMwEV",
  "key16": "Ho3Eo6csjdEAszRBwG1cCAXnTSbLxQ35PhD8B1yL1SmEk8qG1gihxcs1qHNrXGHY5AVXxF6CH3tU8rmopo91B8Q",
  "key17": "48gShKZMjXMS5GisEZM8uaHvmofSUPnAoBCaiaNfNbMRJfwZU9Yz2HeYLWVVDRtgu85ZEwXkpPvVjkFm9WvvbZpd",
  "key18": "2V2fnFhTiYZNsUqB9vzmpkwaYfEdNTpaKz8SzGG1iKpL9KKaQhAtYNTN3QL69JfZaJDXtUczjYTA7tZvkxwmabt5",
  "key19": "4sQibgKYXEL6KeGemxy7fSbegU7durfLtKghBEssYBQiTtZx1ijwQfAQrp7DU1zgZz6YdTVMEUcRMmzEkW29efyf",
  "key20": "4TnZ51ioQJ8An6VS1oozGHmjFsKmkeomG6cXXBtCSjQRPS2eCDrwc6omS9rRE2LAEUErzvVH7PkUB5o1ExUf3wP7",
  "key21": "44XT3Hzjqkc16bbF8xM8vpRa6gowPJCXrmE7Cy3LwMocwSovNBjWdYxGHsYZdszuW3Ga4b6GoeLSw6ZyWuuPU32Q",
  "key22": "ogX88rVZrB7ByzKzMx7yA7uebE1XnfXj84WakGssRfEYrQy4eAqQmbgkaEMum59xHh78s28RKNrQjF5XkX3eFnT",
  "key23": "5QzLxQXbtP9TGXJA7Tbrw5i1WrLF7BEtJ9gtuNbbZj7KwH9AMJoY6uBpT2BcGCitTta1Kjx4rBGfB9TyJjsSjLPm",
  "key24": "26PRCGHEXfTndamnJBSvLZma4UoW9nB3n7nNX9uh5vUgVQBoZc8WYinMmua6gSjRSg5Tiq5BWErJJK5E6o5yMpuU",
  "key25": "4MSKTe8nez5zdYjNqRjzKdtRP1DeohJAceyhvSffS13hUfx15eDjbnD5hqpMN4HhRATYaAvSi6Jarf3iSitjkaYV",
  "key26": "5QDQHRi6Z9wBijgA5E3b3P5vdqdEiMt1VbY8uRuNfmG7z8TX6pNKdTf41k1yP1NrZA6nLN1X8vNyHp9TAz8BPnpy",
  "key27": "33AqwrBsFjqGFKoS6dAwNjdzWUEd7PSACRLmdYLQY99CQhW8pBguDwxSsycr6bSJyvf4NAXSaScs21FDCPFWN9y9",
  "key28": "4J7EnvGjKuDYQJJ1LcN81GXAwYcF42uMW41mUp9dmwHtVbYKV2eAE3vB5LsfciYFZsYGq9jPeH3VtCeaXivfhwbc",
  "key29": "52YqfxJAkNsPspZA4iZSTWAFiC5LTrhgH8VYEJKmNwEwmM2qPcUs22j6ZV6mPpBwBfPAYbKfEPZGMuRrzQhZwmKA",
  "key30": "63YKDCM3QdMBHun7kHmP9epkUcvKSjd76vsio9wDXUPVfWkfoQ4EVKuEUA1PBqMSps7sC1157VMd5usjUNYXpXQy",
  "key31": "EWWVt3ZRVpfa2iW57PSVJWiWn3aqY1YK7Z9aVkMXj1FWkzwFBzs3GLwbMgajuRLan8XUWNqrcqfEyRJqy3tMNsk",
  "key32": "3T1qjo4Zuy57y2U2sa7C85Q8vVJjkfUCbWb1FKmgexmXVZuwkog5WxHMrc9ahvMYK8XtY9EmQvEwS3UnbjoPgQJp",
  "key33": "3ed5gyQ3nWgqq82k7FPDCtLGXHcMbytSQnakwP9upjsghSuhEtuGDP9SLgi8wt7yaguyvRHnhmXkmg4qSPpp3EX7",
  "key34": "3XkZNUdQWfHSDa7M4J6JVLHuwsDYm2QSP4mQ6HDt14pjG9ZKVrPazGmTGdKsuuEzP1DJyLqSszmy8rXpATyXAaoY",
  "key35": "2Cy2hN5xkXgjeriNcvvkgXjvLcyzQTzTM4hpWe9KvQsEKZEGh1bWBxmAXhmLzFUWX4uW5vF92FX4vko4CeYoUHz9",
  "key36": "312PPCM2QUwevBQYGcwQUsA9dnNXkBHafrGTzgsiyyqRTEJyjJjQSiyk9LiRbDGyahjNybWbdSkGEZZiJKhMp1Mx",
  "key37": "JKkLg69X9RA7Z3HvS77WXC3Pf85m8fW3AQUuTVr6znVSJVmqAbzfvRPwhLYY6aMRCkJwKCWtdRQ7R9UvPPXeB13",
  "key38": "37AxkArqjsQNvw4nZv7Hm1oDTcCYtDU2HbeFkci3LFBiaFXPfBPfqqxvpKzohPpYdg3RCi935m5fHKhUU3pfBKa1",
  "key39": "3xewmYqmhsLrwCBKqaRRB4AwiWvMBZChSeDNUDQ2fvqW8xhLmtk7V5UWGJQYup7G2SffNTNJGNxnEBjAYcTJWBmV",
  "key40": "3i4Ajh4hwn4894q3JUM9SZQ48iYTepG9wZUFdGutKCUonvKPVC4Yq6wvnWmRwDySQuxJN8qF3B7vJ7XgQr7o519c",
  "key41": "JyXS7AKZf8yDg3qMyRuz1XupXV8LfZZTnySieijRmGYK2upgeq7g1wSfuJSjE4Sc7yVgZydR9qiJPNSSVzT1sGp",
  "key42": "49ZE5hJg7mVyAVWyq8YCco7cKJWbPrD4UeWULjYKRxLYPNt3Zy4uSs4ehbEmi5yT5MDLRvDvHFpMca7qFDSaA2F1",
  "key43": "3qYaBodBU7sPP7MZdRxhQbLikBvWx8pPXQMJYYzsePZitJ9KB3x6o8CUpodMumJH2gt6KJarKGhbg6Tp4oZNTyYv",
  "key44": "5UhTVwpG9vPedReZtF1ueuiAiXWGW8ify61WiYniN63JMjWYnpAif8cFwqF8NiWfT4JhvgGqsZGn9Js8CwihZa7F",
  "key45": "2Xfy88ZHZPGWwqR7pqyqoUxNNDQNrsbo9nnh9XJJbVCFXn8Y3L3k2tHvXYyVuvbu6opu6eiLKzTCyiTBfgE9kDNv",
  "key46": "4XTaDubvxdHc5dxvSKUKN6LUU8S7ur2qzBNjV6wto2VHsfrp74CVVG1feBw2Zquj8TzXmhzxdxFuknPbsSnADGXt",
  "key47": "4Kap8Y6TvbAbxpFdXA9bbKhPC6hF6TFzz7EURHCrAiwiahctTJtv8LnHrJFbpYgmycXQgSRLQJ19SPv4NvGJaYgj",
  "key48": "xsSRP4yFQEdomChX9mDCJbD7gh3bkyiQ47WgfuGxuNQAfBdSfKjBQdvqFPQ2XxjUnMFxeh3hxFvBcnb69Bb3PKZ"
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
