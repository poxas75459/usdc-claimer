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
    "5sS5hG8SMS94MCK97BoE2sHBtTfTEm6Cfga45ztP8Qu3J6YioEcCrN22W5hMKvs99nWqUrERzaHtbD7EvnwGAYXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzoWjLeWfhvc67fJAcgKoEwhdhxpyhFjgYL2egvv5Z3asjkHKVJrtR6ABaiFk3bcHCXuknr5rUEisCBSUaf3DDi",
  "key1": "4tRJ4ymXLCJTv5b3fgqorf3o7V7xg7vCv9xd1VUJvGSiVQ5n1VLBkGWqCc1dP7h53xht85WNCshCS83uw92Ug8no",
  "key2": "we1ZxfxKJc6Q91NbWo3zFKBjoWw7T5oBB1SFqybJHnJZ8f6Th4ynbHaeMu5vQeCgSpDrE5M2CkPRjdn5gFpwxMn",
  "key3": "3ZdkAEuiGKvizLkTG5zoLHcJjQXagwPDxLqbHXrStsV2khXM7NXmQkx1cohku6mNoHBoi47hTqpQTv6pmAZxsC4z",
  "key4": "5gwrEtaZzRDvhZEgjum5sUiAJ6E9vKSxa6YpZL611dkueCB1EvAmwVamU23XVuadzoDFUJzxkeMPdsiBPb2F1Br",
  "key5": "5xBNYToUdZA64r2odaAayL7UHMSX6FahbNQYgS2EiSeacTqhfHtrBPr2L91jJmyJSAABRtNtb7Gxo1hpKHRUrHMr",
  "key6": "65tTGEEVzQVGqdQxsGgWPpJ1Qk3hzWXhF3QXaj38XErSaA8k5WRoeMh93cHB3KSh2L4EDUDfDeYhbFnPCPnFrrTQ",
  "key7": "5SDYdNteLrMHBGZdpprUj5hbvjNSB2QnUfmaSTxbt2ep63rkfFF2J863E5hG3pohPM4tvoHrqyVbBM7XHkQVd8sJ",
  "key8": "WGLaEGCKjFT28Mv4PH7evrTdxHQkKveLNt9f2ipTNKrgQMNHyFZx3JotmrHf3qh7uptNs3mJEyZPCxRPiv7SzWs",
  "key9": "5JpDBTTSrSq7AKrfN5myYMBBrsCDRQSPBH8WcpRRQ7RoNST5GjgBtXjjhgn1mn1DWBMFJjFESSqZGNzUbgjXTbS8",
  "key10": "3N8zsf5BpGB9gdAxyCphGJtMsLUgYYX2vXDwGHRsrdxfP7qsAhtq2w6vEqagZsFA2tyEiE98Y9ErYLycjUGmn5iM",
  "key11": "5Hr8typr5B4wZ8sP3DA77gVKuvCx1DRFSbPJwEs7c6gz7KwUdkeAgsUivE5yxdRuyS4NSTMkTqzz3zNPJ9XV5Urw",
  "key12": "5RS2pLbk67HttvCbD86o9WzratEWTtZSUyUPYaLGNYsRDbNa5HukPFQ5icNdnDXaGFg3MUz43akH4yseoZ8NBjHB",
  "key13": "bBnDpDQrA62vqQR1SNSuHfhbKfUurEvqyHPWxQUEQFZsP6sM8crJU9YWqqEZrb6EhTnYe6iaDV47NX14bWbVKkC",
  "key14": "5wZsrNhgjyLCSU7CUttf6HR2kAFCdM9cGDPDtjVrCdgE5tHEdKuxZ8fqG4E4hMtJwLAv7USjv2BnxFfyZY1u57TN",
  "key15": "5fbdR4ywLxUxTDdxPGJFDAa3HwAZ7q44q4EPnm3eWv8s4wnVvwZL7PVWtThCAWn6dcqmQGnmv1ZYEmeAeQbVaihH",
  "key16": "5UN3PTLYfyCqzfZx1yr6VPvmZSLkojfJWcf9kKigDpM6WGf4UUJdKtDtAEjxLdqcHiwWA38XbSMqyqiTonuETrq9",
  "key17": "3MsEQ71NJP2AQmhVJDDVXZmEuvtrR4tatPGFQWnUSTsVkGjxARwRE5tDVp5xFojEYdsq4opLitWWg6i3cDfcstYe",
  "key18": "4cGfHP5dFMbNaQbMiY34vuv5CwvSojv233CNQ7UY5yqUkWQrSksX4D7LKU9RNaUNXfy2CkVSpCXFSSkL2nP2C3Uc",
  "key19": "3YVC5nLpAUMMK4STMT5iX3SFQVkz7xTsYAJ8wTkfEvv7tbMnvBza5ttTs7YHoG9zAFvgnnN75N8NRUDQUaiGkGh3",
  "key20": "3rEbLudXx2cuZ35UM9FwGZWpUx7CDqVSDbjhpAhuXWke95Zgzb6ApftuhQDkAvQ5jUWxMS1hD1XiBeMahNfTHHqx",
  "key21": "44ur85kDQ9Tjww6rmVVFYkq9EZkhVxNWTd58TWqT11CLkVjDWBtmeFjx3bZjtTPoeLvLu223GKjBvzfFis4NLq8B",
  "key22": "54oyXddKK5bFpUHKXqbV9RZks5DRbMy45DCDj9xgziL2zkhZ7ejcfQCpQS66FiN6pmXXdSX1WXJwXW7worD2uavH",
  "key23": "2FdLZ5rS9LzHznZPiJZ2dRiUMAR3pYFZELYjzwddH6Q7usoFYoCUcPo8uU8S1ej4J76KyM65YPdopfptHqHMjaKW",
  "key24": "4GZxRuMDw5jZMwvm8LMh5nA6s9T23RXmnN4v5SgMfbnR3JytY9ZgszeY6DaHBoXiPNbyiVoNAPBiMMuED6pVdYRJ",
  "key25": "5wV1cvpFB8EEvUWMC2zcmSP11pWJ44xbNndcwMnZAmP1uiaYCWifWv7Py6EpSRrm1NFGQMWCCddzK8Sd6zbGF1pw",
  "key26": "3TmL77EuD1oNswhg6pZa3FRmJ53HDxEeV3qT5fmrQt2pFsQzuynbkJvJLxoy6a4gvkY3i741MjTNi26CZD3jmrBS",
  "key27": "3XqqZH5pDhMjYXjpxXRbjEJwsExiQiyPHumd4pTEjqX2ZpiYzgrsgKGVpoU4qmDobmBDr83udhGiFNY2YAeCdFZZ",
  "key28": "1mPAThWU6WZfgJ58CQ3xKs59wsZu434xPUFBG2LJREZSLgpnU8WKQFvXTyGqZypPB9bq6JHYJKFcPHBorYkMLU5",
  "key29": "2DQNfV7qX3Bdv2G9cj7uJcpmaL52ajnBx8qkGwPzsu5GLqVH4kpKsVAFL47vQ6vPGTVvjZfzAUCDNdkv21NPCxwW",
  "key30": "26gnHaB7NfXieEMHZkyq4UNCof1E5z2ZqxH96EaTQ7swgxBGL9ohxpkNZStUPXwEXPBonBv5d6Xr7zn1VLLBdw6U",
  "key31": "3TzkktjKYpGv2krpN2YXqT2dccjHvDG7fYMfkxB8GCXZESN8u98LL5moh3ZLjcJJcXMkgFYXUVhuEbwANAaS9D1",
  "key32": "5MNLyPZJWaoLWaKJdMD8rXYnJvYSvhboVJeAYnYorexosaNNfycX2SdP1M4UH8c8Hte1sFbejuH32ENKEMT86Mz1",
  "key33": "4vY41tE6CNiiELzJQ28SYMUjjmu3FsiF9AvaAfn4QWTmJqUCJHndG4pEAxfUSXeSYdGqawKvNHUKnN1TAJJePyVp",
  "key34": "4iFuh4icDwUuF1vTr7rZZDKo7VsqNyrYq4KnCPKHTFu68iUrP31q3hXJ9SLDmocsMXjb5Ps5iNqeJbpzUATD21sn",
  "key35": "3Y8Ga4aXwz5sZDVkdGnSiQM8r34CT6iscVvXyPPAtQJjkeZUZcYutoJ8TWdvJBVyUtwArhFYao8YziV3abJzUg1G",
  "key36": "4gy6RS2ZVQ1gcUAVircYQNLHXUGW1SPwRkD8vL6RqHDgUurtWNqoRaSfgNjhyRqY3JgqdpgS428g9AnqYXimZhwm",
  "key37": "3nfKNAnbxWgczig9VEj3b4Q8ostSPTvyJcu81NdFgT3HuFvLiciUWWPvF7XAVuMUbJ7hX6ZFWdwyQgjZp67YEYWu",
  "key38": "EnBP2zThhVXA6xq6WukjqrZpvV41vdFUCMCsSKJYjdzmPwKTQZFU6Ve8up5H2vpFTn3SY78FNnPuEL7o71r3q7G",
  "key39": "2UoNqv2GueqCZdqCDDie5CyeM49x3ajiQfRrvh7AF1xiDHZY8UTxeMqbGfNmtKcnvwCETWhABWVQXRzkQfDSb3oC",
  "key40": "5xqYKYbyMwHFhR3pZS3Es6JbncEJjLGV2xXAMVfQmwtkyUZvVGRDk1qMeaTDoVjwNJCSYNFtt4wFoYKLAFSvg2j6",
  "key41": "3TQfW1VMWK9dBuZTmtxKMKKMV1tbmmZe3bzx6SikEWytuXowfGQ2zh62W8caxJmiWNyVc4H1h4RdKuwZSfeydQkT",
  "key42": "2duBFW4KBbD4xDdJ6LWuzpxUcSTCyMep3oZ4NGRHZ8CsXkSmcTYreL4TopaicSLLmVMsW3fv6p7gwYmYhjwVkxMU",
  "key43": "FyzjydmtMHXGAwFVfsVkZrW7utx1fzriJxpfmUJJzKeu2KGymzC72P2LpJH8mzxamWp9uwNMwkn7f2sVEa3Z4zQ",
  "key44": "4F8suYYhEdosG9ztS467usgmES3muYBfXp97wxBpeQNko5iGbnhUCgYZ1xwvzkxWmdCR5kitGnC6PrWMJoMkjoGe",
  "key45": "22u5ihrtBDRMss92tv6ynvyoVDQP2EdYMaXxmwtArHTQidRJ8mZiVG6NptwB7WFWi4R6G7qMDg99VSfvAFfbRrf4",
  "key46": "4cM9GVyGoTdiz59k56aCFSifRnQaVemWXd1T4NtHcuan9YtyKR3uVw659oLGWV6SqZ3XcPoFyGAzSZHw2b2mvxwn",
  "key47": "mCKbCD5q6rKuC6gXD9QPXvG7gjPT6EpsEhgRnSHzAke9S76WnqwVd9CDseTU6P4J7KTX1hw17zhFMsgqCsu85UG"
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
