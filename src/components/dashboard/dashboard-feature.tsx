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
    "5RaJ9AHVWnXDbsXzafgnyzgXGfd3ktA1oAYoA2Ta5y9J6GtmeZTHjLU7zEHbSkihhhfQbbVQRcwfXQqorYF8tgZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rLMxzneRDgrBp6TgYchQFTmKpvWfh8HfRDX3HAjPQFTv9KNbqBRzxi9GfF1KGSKoHedT9Dm2gT3cQ4Nm12YocBr",
  "key1": "3p3FG6GU5fP6e7cnhuMNtK9FJBKHzjUFqTB7ZNje9SaxkB4L9hkf3ZiHJoVgDhEthagCMXFSYx1cCLJyokjbisn9",
  "key2": "3G3ucTnbXqWKsHnjkiJmgB5y4kLZY9gPspYvSLVjh9rXf8An4G8hbyVxdefFLZXhzgsDYnhF3b9dALA4LcHWSTPp",
  "key3": "8vKTCWS7nMZmBX266jaUQX1dVeGLJ5finvRmJYCnFFccyvRddjdiUC2Pka5YbGVW3pWcpsb8D1WfZ7mtaie2E1D",
  "key4": "3ta7x2Y9FMjyFJF9geBVeQHmzFHWSpGg1oB64pNSUt5eEYboAC4RdHKNuPva82vHrrNx2zxywyFaXcdcExJgUKnA",
  "key5": "dMwMSRxcWSWS5QVFsUbYvWJbiNqEG5sDjyDWDudFU5JGcUfTotNrf2zBmaTiPuC9LEVrtpNHKYNTvbycsxXBvW8",
  "key6": "5rZdp5zUNyeJKMpddfvX9ZE6jJVqHJ8UkQTJCNycr6iuAnkhSHuCiDn1evG6z3hrTLTGDsdvCnfJMgSQi5e4X1C7",
  "key7": "5gbJrV1NJntzDNKJpMCWe2wqFDSDJy4r4dNckyJ68Hz5nwWmmmzYMPs8rLCcRVRPtrxf2gHUE2bdKfD4U3VSBKyx",
  "key8": "5M9PuRzNX7N8ZPYWBSk4QNMrDdXzTb1hTRKPw8tgqQW792M8q8c9n58bBzRuxcZAnhG5RYZ6LwKZKCZ9dQxBPz6k",
  "key9": "3WNMAyHQyn8H2oYJbYnMgbnJKcC965TkBv3fRu5UQN8kayLSBhe119CoTTKKBAzXdLwaitoDT25KaZ3QyTdeXdnn",
  "key10": "4Zz87xWHr6LrCbdFwGWhz4LYQSfa31AdNmwigiXvJmGbBw1teyV6DiiKecpKdCMycsAoSHPtZU28rK9DFB58hQy6",
  "key11": "cUWue1RHzhokQYCgYLT8CpTUHfoqWM8o9NBZ3bJTpfmcYjHbYp3BjHkfSYq9HzqPdM5d5w1e6Hk2tP3VZhwnuqD",
  "key12": "3L9eKzarwpvdKJQdfXENeHuiPt3Zq6rQLCUbHNXqfLGQWqt9jZjfnyW9BhtAcURtGULHq6L9AcZVxRU3MKJAPDfy",
  "key13": "puBf8WTchpp8gyaAQbRkVwAkhQMK8U8pVTFiXUB3mmdbC5HMRV7X2889LuFb1x3JQg98PTXUtEfks66HBwESxDK",
  "key14": "5qmrzJ76f8RW3GdcsVvE7H4ZLqPLCLxLtLSt56HLZcCwo9uF9RwEniGKoTBhXC4me4DaExDrF373QWLuhxr3zXPN",
  "key15": "5FNaGGHvQXhj611LHbbT2Fttxh1UAQsP21q7pqy7AL4EhxiypNqBAG33K4K5oKk3GuzHrSAdEz5d2bri7mAfnDWN",
  "key16": "8y2bqs9hNzvb3a6dtg18HvUVmHRWnKeck5WFwL8tkapn7iK6uwhEJR4S54ku5v5nkBk6u94Cw5p2PQt8JUJu6Hf",
  "key17": "2yo59THrsY3KtipiRjE9opocuTjD5arNun38pFpD1RQwKjL7E2Qde7xXdVpt8L7XyfVkeaaP4LRMxKMbXVzxQ9kZ",
  "key18": "56brxecaRsH9jKymMm2Ypma611otKXUm8kpxp4RLdLGwRWcSeenVegxT1nFwV76VEmgk8uPikH8b63ygsNuzWCPZ",
  "key19": "5yYdRRCZrYVTmMfUDkbhDGVqpR5FGfbWa2L7XkvTGEWjjqdTr3ZT9MxvRPHNEEAogaXhxHqTsKz82S9kmvRWdQWH",
  "key20": "2K5hxb4UJ4jFb9k8mxbGpHNcrznP5eic9HSVnCXVQpw4ARKTeq4zqks6mau9JDtdsVw5bKqZFtUCQp6fbaGKHCxA",
  "key21": "3fTteTJfYktvkxzxmJHeCjZjpYbXeRiR9S8EgUhCSc2D4w6hEnRqQ89aVuowoE6GwQFWuuH7aQeYMMFvvFts1xEA",
  "key22": "TkymkgPuUPNuS1TN6TnRugJdp3PQ3eDH7YQggbRXuFZWVGiLE2AJFd1yCevX7PyEc8Pbq71FQKNPmps8SodAzQA",
  "key23": "saKgZ1rQfnH45YkXEEkVeTW6jPprgErRed3r4PweyMh7zDLYV64uSKQGRHVG2HVmAemHWgUssHGWLvy2w9xgSep",
  "key24": "37oQKqKY288VTA9BcHKdpJCWo3kHfnqBEHnntn6aooZjutgva7gvZWE6NjSZyxzTfx4EAkAuPgyaJpSZweL8TRND",
  "key25": "37C3UTJoHhrs2QVCvGiyCkd97LSnVUAZ8TGWcYLaUi7f6KjJfViWqj3Xa6H6UcHkApGGnXdYXVatr3KiPLyyQc98",
  "key26": "a69VxrfQvbvVhk2pZEwpjQgfzJj8kp3U4TM5B6T4Mibhya8JayhEwCcGj4bcWwPsphveAZT3kFYtJkC2sb4jHiz",
  "key27": "Tqo4PZbzRUaGT6R8NUU3oxKJ2GYGfnuRs13TXVedEJ5aogpzseuV4cnVvP84m68Nrr7uTMDJuapBn9qZcmpasQe",
  "key28": "4aytgKPuGcPAnVtEnCkNep1vkhBZ5bMUJEKMYBSSdyCPMqH7bfpvbvKjBfHzEhKA7aTntL78hpq87XaYcXSnhWkk",
  "key29": "3B4j6zWB3ve1v11fR7ZNdtYpeuKHwkQbs6aLHaNEuG76WwgkyCsRjw3USKotwtg4DM3hr4q6wMGVwpUbQ5XJNzQB",
  "key30": "4Njmxu2oyfq9EcBXaBp9w7GbQkQWKGL6MJvrQAydLAHLkf2225r47AfgjPstLwabPkzzpdm3vaX7fX5eVhyzUSFD",
  "key31": "oJSKDAgawaVW5emaG8cTwsV9R5vsVVoPK2LqJYP1YnnQCfcVokMKrt79EZ3NvWU5zdTRMUhNKE5ebg8aSNsbw53",
  "key32": "nW5zme8bTraRRAThyoe2Bhgn5yHeBwhjaWrQ4QjRbvGq79Uc2f2kEGoKp834SDttUZU2g778gHqNMZsPb3PQffJ",
  "key33": "64y2qSYZJeCVpFKmmmVNQwj518tqtZkvHH8LNEhgBznVLY4YNDutP1wRoTykjm2gEWdJ8hUKVc25N2JL3Au4UjDJ",
  "key34": "31jdPcbzzgm2vKvDyXsfJhXYkUweNwK73nXCZiBtdgu9WrsTS755zaqQSkMNdUYdumvwFZcnVtSXcjLRqL2qqGRk",
  "key35": "2RSWMGAZE9ycb33eJFyFv1hw1utVEjRxaw74fuYT1pcWATm3oLpugzV6TF7n3SyFLKRwBPTpcZCrF7WyVZ2r4uLX",
  "key36": "5k73V3q1hc9crmpUQnH2PSQaekDFrBE8pJHmJqSnm82wmrEdJ6zyguLoPVPe6bjXL3QopyjoAwfwnmisvary5P3Q",
  "key37": "5XePsGcCGzWduKkLupFaa3GNLpaSB9NwhpSQdP8yNvCQwShweCvoyLvub2piG91tDJbM7dJz5bDVYLPH2EXfsstJ",
  "key38": "5xYN8hsiqmZt1GKGuJi6FCtx6V9SJubYeWpgZNrLBDsc5Zm56Hrpge1DMWfJyCTMuoGDNcXcnUCEYvXSc1y1pvsp",
  "key39": "5EPk6ZNaZjugL8V91EtVgDHhumvtXYbLZCp3dZZ44Sa8EpVS5MhFn1yYMRS2FJzsG42JztWFjpHr7w1ygQx3xKqe",
  "key40": "32qX8LadpxJRdsaWYotMUoA2YVSh24Zp8YisrPXkCMUHPPqqogVWgCzWvHpyQUCDij12Gbpp5kbJoASpxjFSg3fz",
  "key41": "31RXhSBXXwknz21omiZTDXLs99gzivSUp1gN5gq8QTLun8dWKsBM68N2LMtTAJwjHpKPZ8Z8536UY8VVPtWECj9o",
  "key42": "48tSmdRsT1VBEiEU3pb9E3cYA16B5q3W4DqDD8KS5VrRs2YMPp5XMj6WoPgnaiCvFe2w4H9sMEDxv8fnJNeKNMBS",
  "key43": "3QjkhDZnNSCMFK3HrwgXL51SdkmWWoxLfDmztuDZ7QXznH5vTMWURNDzWa6RU2oew2HYwmr78sxPvhTx5ycJ7iUj",
  "key44": "22txaM6c5Bg6tZPrndje5YhDxwg9K7muvsgDRFdwM78gZsAjYAiDCtSoCRaSLgZ6Wo36nByXXMVATavvG1Fv1GrE",
  "key45": "4ZXXJ6TmfWa743ajk35K1St5qTE54SiJXsmbzyyCWexkzq8jfomfo7B9nbeLX5BthF33LGkb1PfJjYJozDqvT2iw",
  "key46": "4Km9a37wFGuDqvg38gXDHpBFSAQefKuPV5SQAXvUxPnbmXVGYxeFecP5bMFtdTvbfNAMMPkJPnpWPX1Jno2XbFXP"
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
