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
    "383RFkBw4be3qWfWciKAvarCFVSVa85apz9QmMrkx8sX6j5tVsdNQFhkqKw9BoynDr3AiTFCQiPzm6fA7w7SQorC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CGNbkZKUf3SBbuAtjPXW68swotrU8PikBkS9vC6XtFj8rWLet1xzKgB7DCj6YpSBWjJmzZVP1rYiGA4GDn8Xk8a",
  "key1": "2xpyHP7344TyZ4jijRRnCvEzqDVtgr556qawuN6oFkvdFTuhMU4MmvjCzrk9GuWmv4vRZJCvMySG4PEzFUnVhmRe",
  "key2": "suuzb1h3kLSbc1zPs8NCYcCPZTd2KYuECWJ33JkhG96BsSwdYSZBU8Gz1a36moeYkVfazknNu6DKY8MJwibTG1i",
  "key3": "5wKP4p6ouTMr9BjfzdeZKeimgU6eou44T4pyuyU7TxpQeU4x3UotWvDGZfjG2cJ9WoHZytpk42rphoKKho42hcBq",
  "key4": "49ctwhunXKDv5rGLbW5AymaNJ1eeoxKwnxZe1rurzbVF2mQuEPRZwNaVysyXXUaVr1sGEynw3nRuyc5dC8JrvcNp",
  "key5": "hDhzQ7Vib51ESREL8tTWV29xFZw3uGiJhynEqE2JB12XV6qmDPD8F4PjJXxApF4MT41fHfVc1d2G4MGMTbMAiiy",
  "key6": "5VxxuCBobodifD44hhar7kwzntJ5CX9JGZdxW7SJKKAxpikJFr5YrffczaxsFABkWVdm1uUjMr5w7vZ2ucPmZdPN",
  "key7": "LrLW1Kj9PQCtJq59QsNYLrR6hdho89S9T6BFxZrcuMgEyFi6k1tQ8BCT9sByqGoBUCigggGecLqJ6f6rPQLpboo",
  "key8": "5jxU8NrkA9CUaUpMCLz7ikyicyh8nk2UwsD6SV2yPJwd9r1MYKYgzDu4K9GKatDgeWW4MXqNqwAwuTGoqQWp8SZX",
  "key9": "5tx9RtmR5D4opJWrrSa7hvgrjUhYoFT2s2R4RxadvtFXSNMqoh78F9TFhifTvfDA3KRMU83Ebv3s8GymdLfcGgzC",
  "key10": "yJjKks5R5k1XJbHq1dUK457U2VpgWdnaySxiMTVWXofUdEGJHJvCAwYrGkLGdheq9mqGJMjKYMsdV8n8fL9pFsQ",
  "key11": "2rzoLutW4P9HPSVyEZVdkrrK1irXDp4Gz6mCgmdTdp2QZmx1gWKmhPjMnGogJHaGB4aHzcmjETaBjdu3hrBXr1Dy",
  "key12": "3ntSjxn7sXRW9k87ERY6ZKjXeQeoX5Fh2cA1risUpeuNgMet5sys6yEHYKbQkhHAcNCm58PbYAxoBFVu6U3eMEwz",
  "key13": "4XsBjgPB2xdYTYYBKpa7sXBs8BFyzaHGwCQmbACcauNVBEEeMVD5AD6zsEUbgX4Revr33RqWVYi9Pio5r9Vghquu",
  "key14": "5kUiCYpMffEdwYDZt6qSUTwnRARvW8g4jmMt24fWPmSfW1iQnsLzWxmLZobJSj3mcJV2wS38HY2F7RUBWgL7iAUS",
  "key15": "3KSy6p48odAqi5msZ4GjgZnNKBcCM4kKyz7m3DstgoEwBbJCw9tHpgrWn1UK8Edpu9werea4CYFvEabap9S5zijj",
  "key16": "5554MRzpaDckQ4Be45c38aosUne7zpjG7vT5yAkNSRitKL9iMLy25cZuYAdM1XkUj4Ra6MCEyFFXQqJsYu4T8one",
  "key17": "5eUy9rCZdVyNDdWPnjkBgh5YZp7f9j9zX3byWbZwGVSYFDPc7p1tH2pwJMWJa48nLJtzLDVrxCC1zNUfcWkNoywh",
  "key18": "5jsXn8sreCRKHVDDWtCivTRnRdTFZj3XJv3LeZcJSxvBD2TccqXbWt31bDmux3fxbSNrWdf1pgjMX21fmxf2LHeW",
  "key19": "2bCsX5YSYZ4t3XpRnQApsiDXCPruAorVM43j4CVJ1YBY3Eby2nD5DmC3PT72TvLhSCpYX88QSFuAP4tbS5hjtBSK",
  "key20": "4bn9QSnFkLSdkCDie8TF7mntPPF7HVqzbdowgvBJWa3H9Bctrx2TzUEZZuZZrR2sYtHHy6FzoKj2s2G6qk3VuHeU",
  "key21": "4PX5S9tpuGDQLpidU1XhQ2gm354HVL8t1pPAwWmVhGENWw6MxbxSHqJuhwd69XDGKLd6X52BNZxUZnkhwFMkfvf4",
  "key22": "2eH7FHhG6vCYUsvawHvuiN9VwJj7YDcDRCA66mBjL8ygYid2SV2YJ5knAfKjBKHcu5qnrvaEv5bdsVS8dLhimnRT",
  "key23": "52LJPkHzDoVbSbPHywiah1PUX8Lwpspoxfi6zqFyedgXt4nx2LbTXWcgSh88msrqS1y8Uoerur9sfDbiu4v21aru",
  "key24": "5YX83pxogF6JT9DzsxgBDNMYkkwN9bejJkvTNm7KBALNjTwGBiGSeepYYdqXNbvU3eMx5u5VzygsqUP81AxaA4FC",
  "key25": "yLnmar16mDzrApGBn7bJc3GzvoRZB9DCdS7D4PHoYPM5g2R2oGtWxpadhPFXxRrGHTFxWZtNGeAyYBmm1gBxUrP",
  "key26": "4b1GgTzTngqujGrAXthQQR4kJevtE7XyTyqBjQCgUhKdZ3uL9weXeQwjESwBmotc89M2G1h18VgPXCuhCRB1mN93",
  "key27": "4rLkQiddApqnnLh6TThDe9StLnZztjW3wFYjKeqyFqQBJmGfEA6GhxWpAZiXzRBST1phd9waEfUzZVkXjXGnsJet",
  "key28": "4ZVBp1pcSXLgdS8D1e4d6vcYpzKbitGM2xyXXc3Fj6R4jfdobYeyf1SawLzvgZrqGipNqRnZMazJuAW8b7w8Q2ca",
  "key29": "2WQX1ZXmycqWc2Xr4WSPfdHXtTPRBwK5m1RTo4a58arhQbPY6jRRk8EoKUqQLMLb6KDXyV7LdZYMBS7fcwsXs8gG",
  "key30": "2HsHab1Z65Bny76fxsLBZEzQ5ghwJJcZZoJq5kASCJQKMkorjvbvR5KEXREShoREMJvaX46ch1PojFvxwTmR21JV",
  "key31": "5DvvHLk2bg6Uvb6WwVmt6UzpgVhuiESRx9ePaanWtndwaentLxSMNsWZUMqLkwWdoDgX3z5P3bAyjWWgyXqffixC",
  "key32": "3nmU5JoWuwvGQW3ekqn64pZHY3AHvVWCATA4PReMwSqkfiWWw2GuUykTJkuuHM3oqBBNynBx8smJSEz2FZe5r8jY",
  "key33": "3fwxb47NSHyQcqpDHqgVwMoXDnkHjodmTTG38RZnTY2wsnDQKEq4C3H7UzbbKjEVQcnc2XpEFFMtKBfdhA87mNtP",
  "key34": "TP5FTKBgwaGrZqDc1Ywd5tpXAHNbvPgFqRBkTv8sC8udbFSCasmZoPjGXuZWYPrJBqosPUcEuxQAJvUh8uKDF3u",
  "key35": "4A7L4tN2fQwHGQXLSzLY4KJ3orqSNjDR7Jkq7Xi5cSPf2jdW1gsU6apxv9N3tMVnf2R274Mp1FEJ5KimBHUoSASw",
  "key36": "4VCsG2YA93fDYpXfXpYyUXe2YFQrdxEwb17w8bQNHiRKxvhAEqoRkiHMX9CfNxnkM1UiZEPhUoCQaWbjvc5CEi5G",
  "key37": "3SmSR5iMb8foDdV5dXzXJft4ssxx3Njwpwi41Azkc3761pkF1udCMV5unNXWjjKr1p8GE2syQxkvFo2xfJavUxwJ",
  "key38": "3ZBh5PoafVcrJm8wpGuASEU2D2Txtit2mgumEo3SsNQiuVYWdkiFJLpVfjQfPsJiaATa1jyNVS9aE1k8DePUab2",
  "key39": "55tA71wTsat238sr7bXtmyyCsG1p23HS8FnDCGKTgLqyza5CTPqhu3UHWiJvzv4qzm8Nr1rvdNUcnxGNawzc5oDt"
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
