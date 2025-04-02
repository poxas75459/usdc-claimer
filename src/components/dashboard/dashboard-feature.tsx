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
    "qEUQNa99dBBTomNF4SmCQD82sfzPYndTvZryJ8pdphqY18eDtfBRutttnGcmjs1VZKP5L3kMekBEAXDw2WPG6RA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MQ2d7wSajxNTQmg7xotUQpLLaDGiAaBPkjN3W7MxmsKffcj2G4sNAwo2VMkbjdbMpm2Qr18s7K6aWk5aNQbtJoV",
  "key1": "YYToBVqp97ooP3Tg36yktmpf32SnturHYwZL93bUyER39VDhWoYz3xPvr2gqC8DSNyt1ufRny2F8RnUoNBaLHvd",
  "key2": "2DFgddc8HHnqkZUh5HDpmBWLw7fzZKRpHfhvgEU1rSxw8RqQ5W8QfbovmhKLrL5Bq1FDvJnYe7obmXgHjN2X8QEN",
  "key3": "45kSFymVpbbYS7Ef11ykFioTpGHiy3v8Py5fXSvY552fpHFAEWbaz6q5ytYvPBoNoC4jYpp5ugwvZ4fUU4BsudG9",
  "key4": "24ohxaZpw5kLukKCXRmTNXxmuyejrTddYFThPKiTAST3ai7ZyvzZkGqWDt1f6VyYDUHwYHXxBFkYDu5aTGYudDmJ",
  "key5": "5kacfkzqKNDv7MjbM6Uq4ZneEwBV9Eq8FuCe6Xqvc74CKUAisabSrGJzMhkUo7dTPFMvh9TiWVh8GvyJnGGo3bmA",
  "key6": "4Zr7w4yd2V9ERtFg4pxrwJBJV4Xx6jnSUuY9Z9mLKWvyF9mVjhjMkQXYFRersTyLVs33XJf9NsboRG6QHj1hV6t",
  "key7": "2etk4gGHAutijfcPQxSoXB1s4ths2K2FUtWM3usVQMQSN8xRLWFhVSqnzQmvvJ5Z337nTeG3k2zegM6ZRcW28naQ",
  "key8": "3ZLCtCdaQh1stAmsZBXAEqZtLRijX8C1ULp4sKLrrUTb24vqtVU9YVZsrensU6j3BeJWKqfVKTwNr6RhT1ZooyYF",
  "key9": "34Y2KheD8GYqu4NEJ1yALVjWCoG923o8g8uU8ktRPmgPHNj6FnEcXWUTmDDwNDYD8rumzhQADNc8rMwoLWLF319R",
  "key10": "4Sh6tALyfp3B3facF1K7wjrra9Es1z9CEXpZrs9S9NdsTh1e2P21uJjxaPsv7jWebig3R2n3G33sbXQwHyT8Cs7c",
  "key11": "oYuKmpFev9uGHjVw7AbjhUueUjGGFnkLNUSbPc7m11ru9ifJJTMKbMoDDCAxBBPEshuUujqtp3eSRTd2UH4C6SD",
  "key12": "2jG8C1VjbKXftbMuS1RG8jnkgeX2UjoNQJJ8EVQKARGnzP7Y3ZV2ZN193Mg3zibA1rYfjTto7PBzspZCrwprQoAe",
  "key13": "4nGubamFKZmvbc7oKofEqsfrwUrRn3gRK8BVdLM4AeVYuUCvAnmCvdTdYKDJs1C7evd9drqV4wUSq9jjoGwvaZ2a",
  "key14": "2yq4iFBNuKrD9nqm6wCR4KQSoyzxWaaxVY8XX9M8fTDQ1WLydKSnLqpScpaDmoX7AQvspCkwqwxPXq1og4pRYNyc",
  "key15": "29kZqo63r4bmnP99L6uB3jZC2mZ1ARf9J9zAfHEKrZuG1gaiPGz5Vc5FTGRuk14EZ1gieit8qndHZwen9AdWNMcV",
  "key16": "2HBFJHCetLR515kNaN2RZAgR9iCFCKrN5gEQLHeJ7osCR1VtBGWfmBu6FmMGALfWTesjSUk2DpZvA6usAWvJpQrm",
  "key17": "4LPK8pxSt15oHhW1ifF4n5Nc6jCPy5fMtucJGYLVNw7bPE5N69qJhDLakwVZy6qskQGhjqn57AyEddSNLqiig7WK",
  "key18": "3vhotr2t5yFf3nygGssCimU7uaWSSrpZFFQuqmUtjfqJ5FodaSRFLEgBoHa7rrCcjxYUvHqBDy9Tb4aKK4wKXPQb",
  "key19": "3ThdFyBFYdYL7QiJQqiAcdVXc1mEFgjk8Eo5iKaPP68Yc42fDj7b42hy9ptfzce76Uxp4Tb9UkMM58SxAR4Hq264",
  "key20": "2np4vLmYJwbdU2tyhz79H7KqhjcSWo7w7QFmWMzMh2MwARDMVTW49jAYTAZkzg8GC3zVn4AXSuGW5XwrquUJ4myd",
  "key21": "2gzxnqyMmpQfMAtgWAEZixyRSnJTLhacWXniWqyL4fAbsdbgh4UpFx3nzFU5e4K3VDn9S18fsvwhnnRbJd6vpkzx",
  "key22": "2r7Rd6pSbHuD3bXzb2pDaEiMXbN7fjAxcvAtJKqmXee7jmvJFkZJoYnp5TkmEqopHaRj1dUjHr77DRReBZQhQ52E",
  "key23": "4McbNJXh8RcPqHs7kBRS1djgaVnKS6fF1HwoZkndCa9scXwD9vbjJUtf6DaMEEqNrRdgy9JHYDTwjceKsiPo7ZR8",
  "key24": "41Gsze8W5h7xVYBNWonfhUUg7WYkSpdoL6JVri18bT3fUGqvhqERS1QpjfoF3KZpe6qMmCQTBfrWnxwAC33pBNjw",
  "key25": "44DU24nzA14oZ278ingF3ezkDvnHYSV2AqUdQoRvc23t7pHeadsL2iBfprT311LJ3AbtYsbPpy9p83JYE8Tu4zsV",
  "key26": "3G96twmtbiRhCCSdXn9b4nzzCMZmtB2Q1hgwsZnze3RzEfWK4toohdK5DqSDcy2jHntVs7FSFUR6LAYsHu28fe2S",
  "key27": "5tiXUU79scFb6Sfw99jPHQ45F3ic7zScmv78QtEF9DJUkVnZWYwz7qVHvUPDpWSdwVdRoeQhcbHBMKHZ5vmef4Kf",
  "key28": "58MNZGBJp7K1Q4ANCqHXkd3ZW9s946tYNPFNmypvyxVPefwoadNVmRXgANcYuTqwn4NxWLjQQ9oHtjNudTZxkWpK",
  "key29": "5sbADFXqUQetatQdMAQcey9ZJuXbEinjVznC7oFqux7aCJY4eskwRA5SC5KN9ZS4xrYnZvoWHEnfy3iavtG5cHhu",
  "key30": "4FNstDVDMtzgUTBCf7wxsicAaq8KhC1Md4RKDmuch8BzqvREVwsQzPRGpMQzxvTmAbHWUtMuGtYaRjktAjyj49qy",
  "key31": "udDBLVoUrgQcyxYKc3PWwFMM1XsdWtnJPJ2zwk3ntgm1HcfzwgKJqkQoBHsQoHsF4y8p9G7amhWp9dGJjQ8AnqW",
  "key32": "PCrE7dTcthd6oMJayD4oh9LGFJnNWjVAtsweo5Fiiw6xaK7KSQpqSbB5cXrvSr2MZzdCrb5iViMQXqYjyUvgEbS",
  "key33": "5hwDXoR96QHDGULVLAhLcvrPvCvLoYsW2qUavGP6sfnBHTDbLZjqnVwz66stcR5kS4Sfb5wNKHW1CEmrt1ie37o6",
  "key34": "prfi5Hittc84snsMn4WaL9S5afyMhsxruQqPyJPdvbdHR32R3SueXKcYUHoi92j87kGzY2Asy6vXr2s93pHnmam",
  "key35": "3CjMGhnwbpUE4r63dq4SpappNTnMrsZWKPMN2togimwV4tYdiFcQaafN5hPkdMasnGjw4vpLZUthB7eEpmAGvmAb",
  "key36": "4pZR59qESXcR9uJuWy91aFjWfJLMmTSg1mC19ZBzWCGTwUCH2iYxjTQP2rcUZ6GQ4WHXPHoFbWinckAJMtAZ45Bw",
  "key37": "4PaCbTUanDWvnQE5aTTZb6DrJAPCTuMxHFzYArEadDeBorVYieQQQK1LfiREkNmtXS3ACRTped1Ms8Ggq6mGbPhz",
  "key38": "32Ehu8U7Z2E7C4sxmh1XhYrdQuHsn9fTQ9ZqHWJ1y4NTHCQTAGrnXm66wwYSSQZMgP5kMQuMiWWSy2XDZuNokrtB",
  "key39": "4xd974Kyp144q4PuFvvq5jdoJ4W6To3Cn9sVWL71cK1K4LfhznYrRmqvQL4y2UkyJ4C2v8CSGC9jNMMC88xcn6MH"
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
