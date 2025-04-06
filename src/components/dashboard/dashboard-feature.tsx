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
    "TzCizgPd3Pvng3te88SG1fRT96bXN7QjWsw4ShSiwGAmk9syX7qCCzbCFBFLgitxnCSFnUn3GSwPYBq9G1rP8Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBJJT8JWyxqZ8ANCCVjiXkHsC6qkWqxXZ2L9E5CX61zcUCYRtkmH6ukkwH4ST8fMD8vC7bVNGNUZUqZ2FvK2Nh2",
  "key1": "3d9YPPyd6LsEYsvipzHwcHGrW2XuZV72tZyjYceZUq3xXxMHJaijFoDkpw52gJFjLNyTgEcAFm9qEAMLG3gUDSRi",
  "key2": "2Hs8LDUJyiuKW2Qa5c9s6L63RWPj1btuyFJM59iQqtcddYfmqSucJRBnJej3DwLU5MKsM8sroqftrFxdR9sdqU53",
  "key3": "3LNeCfQmN4y4ydhyLnAA1xn4cKpsanEZaM3rBTmmDm54dygjBBYwNCUm1fui29o8oZ1NC5pRxqLiEyR74HXqKkAd",
  "key4": "3KUfwqjc3uYxg45d3t8YxiuEbmQGo8nvDAZTR8rNkqsCA89wcQ9oSt8yTeYtLtZdH5WQgqfkCC6BUsQ3p35Rf3rz",
  "key5": "22V7HEL2ScdUxqcKeKQKoExsqfCT5ioKGvjLNbd34VtJebW5PaX7zzorX8JAwdYNTAm8wdwvDjbv83ytMfgDos9R",
  "key6": "5xk9Gh5gJDTLsmhyqWadt8MueuW6ZN5LpyR66ag8668myPTqABCG8EUYXnHhswk7HzpPZ9ynEzZzWLLCEd6iD2Lo",
  "key7": "3AtGRkRjpZcmberVSc8RgkmEhy5kbW5jx3BcqLeKYSzoE4MsSsk1f6Z6Vm8hegYVJThRSLT8Pcyf8TCdUBAHb98D",
  "key8": "4LQuhh8TsDQg9MMUpG4yn6iuSRdTcNt8iMykCqadLgCxerT6jX6R9cXiNDxcgaBfDqqHb7Qm3sRAZZd1hhUUpXeW",
  "key9": "5d1Dv7X9ryFpVMkbjSokSuXVKJgbyx727FkdqsMXVhBqTG3vruZnR9r46Ep35fuU1BMPsxc4P7qmuSHxKn76dZdH",
  "key10": "4TjbcoVrk85TxtscwBJhEMWd53xu3AkZvsKaZ633bUbZ45YNhmmZUHrip7wjo6zSjJxXVCk8TdVCaPNcQHiRXZdH",
  "key11": "2zKEWRjhxF9gGvQwuY8h4q8nuUeiLnDNRaPacTDYpv92gEtqPPr3gdbp1uLP1vNuWBghGVfE8aprDoZtVx1ZgHh9",
  "key12": "5LryYgEyPiENdJ5REc3u3kLpaqL7NwiTMFuutJktb6hxxowoF8BNAnqfwF9qF2W1Q7Uz9R4C2SzF8aZfeSM2HRYW",
  "key13": "3psrXXQ5ijJtuA1rSSLNFpyB16aVCy2yXj9KYQCEdjem86go9r26Pf1zorNGQEAvJeAz7GbYjULMEKkXyGSuEm1f",
  "key14": "NUsTjiUCvgfudf3xHqvYWUCYoP8MsWd1FCw4vmoypDbxKzcirvNdsF68wMKorTwyucC3LmSUpkowzWqt9pVNWqi",
  "key15": "2KUMpP4K7DBx3KJou9nhBeTqZVwMMgVLDUN1AEhXtL4ZNHsAuN8Ynr65d15S7stjjYvx1urtiULrGmmD3r6TNaTR",
  "key16": "4NbuFr1WjBbPW4Jcy9gRSCHhndHHz2nUP57brxQcg9y3iYZpABDmayz5LrXC45KsKaLeQn2em5t1xy6Qo8FTVzYk",
  "key17": "5icsZQk4PSDvvHMq4fQRKEwgNM518KNsvkCScZ2EQZnjtCcMFD6gou5zdRRQLvtNYZpcgAPiTVBDhcjPmuZQFjT1",
  "key18": "4X51BogJ82hdcCZHBGfrDapsGF816Bhaq4Wswhrz6qiiEMnXoYBdRG1QQpSvngRtYERpYb7VL67FXJF9amHCH5Ni",
  "key19": "rzKUh3GhKemyN1jojEGwf5ugMucTDrosRPm1J3oBWJqGJTo4JeztX7sNGHSTRWQT9shSfjxBU9uLJxkv4bHixqk",
  "key20": "2HRZaE6FoPR7drp9rrAkbYJQLbi5of3QvSUcDm8m5NZPZU2fpSLDH62FTrWAWd1cXLioGeyTUyLkYbMMe5iBabnH",
  "key21": "3HRR2m6qn5dTq5b9bUpzDPhEjLSk234CAgk7f9WfZKrk2nt9savtpNcqsGVWhxnPkeH9cDF3jaBoou9rdtppxhqL",
  "key22": "34VzrjBtqYwEs5s5wwiCowm5XM5TNejNHhsBn8NT4PDMik1YbjAxHYQef4HUBnnv3szWwEG9wGXr4fy2GsepcRju",
  "key23": "nbPPg2d689ijMw7h9tYmBQAXsCtz1mhFQ9KcrLtAjH5w3jDutQF8Cmi6jpMyzXJhLi8JZNjqPt3iYRuCvwBVVtB",
  "key24": "3nopiYgwm4R8NqjdMCWuqPVP65sxhjHgzviy5HiqyHKaxQao6PdTxYu98JUEyRjB1byhriSs1wGk64TQPGxM4noC",
  "key25": "2nQ6SkAQXi2AeGnVa64jNDkvgxbBHDPbxQAcZ4YkitppzSTVrohdVHLDc4nqpZkLnYbH6yGuDM2dR2REC6nUe9st",
  "key26": "gCWTzkdZqSJZ4KESdwKbM7fZ5NbNTEYci54oeDNdwzFeA2nZfwv3Yjvi835soXcyWnta7NgRnXejPyUkNbKD5pg",
  "key27": "5GyWQ8MTzvFweUSxEaAPcMJskCgyktYAn2qizSupM6GhJUSLDDgDAmGq7REe8jMsBUsX8xK98sWHmGXwYHg2N71T",
  "key28": "5opAqxLF4ocAU5q8bEnavEK38NnrmziaeSyfjvSyU6MwSXDmarLyjMAsuzGHeDDAurQBdHPf8QqLYxBXKsUWfc1s",
  "key29": "5bDChvQPHK9uNB48eJPWmtYogALZJr5YvbCeSiTdCk6KTp6NDewK5zVFkeUBP9ZM8YUyFXQ7U4ovjM5RZmCcEU9h",
  "key30": "2Zp89toYjwyH6MJsQCT194Akg4Pt6jV84LXWW7NLxr5Jy5vBJ3sYg5ghJahLSsK5EucsPrfp7X7b3Ew9R5JsYt6X",
  "key31": "vyD9RqVNTdR5SWWNB2pPQdcVFarvtbEXgQUzauz7YpmDLQP5MCAz6AX6WWz53b7Jm2usVs6fhbKF7Eqq4vPVNxU",
  "key32": "3dj6GVC1ii3FZzitB7ifSbgPhu3qQ63JCJg3Bs5ZmdGN3hJNQoDAtacTvp4h4vkUSH5pm72essPJB1bYUcJqumNx",
  "key33": "5Vx7bWpaNmxMsBQrFzywViRrQVAFAeUf88FP739kZopZxGnkaTKSioz53edK8DJXs2oCcexyGt2Qp75UMYYy5tPi",
  "key34": "3vdkJup6oWKH39iRap69DS9jw6QiL1uzbeZUntTqoRUJ2PDottv5jAEMWTMaLn4C6VZWuCfnuksegaobNYGR4ygQ",
  "key35": "Gzi9YGMC67Fw87qR9xT1f6gynrUKoHELDNbHXjiiJsKsqg4ruXxgzjvNuvzuLpUyCwDwABYQcVXzxUKZKUSjhZb",
  "key36": "3rcDigWf8GGQVTq2vLBLkLk7bZaXP5Ee1h9krMz9VtLLfMFtrrFtUya5NBKLcAXLxrRZSnFSLKMnk1xhFBksfLJn",
  "key37": "4N9zi7e6dpGHARbDiq4JGT9sbxBZRY6xN5a4LocsQXvdJ4ZqGtRM1cMaNZxr85KuBGmkezGNvawrDt53xjbYJ98m",
  "key38": "5kPcTVuswzPKgJTPDSPwLdbXrfc7UHDg3eLw6gQVYJd736dK6xZy7K97LUfAznEKs97iNgVX6CGSxzDaNtdQ39r7"
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
