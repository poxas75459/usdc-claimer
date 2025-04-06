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
    "2ctD1VXzDTDh8TXzkgkXTDsbziWLLvns9iSwcLuLEsDM42e4GdUDwrwiCJvduxWSCHUtPsZmeZyDuirGUq77J7SF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKTEeSpBBcA1fFYrLfXeJdiUDN7tGqsdTXQSUsWwmkNRDKxdkVbp7SWaajd9X539C188yBUJAUhondNf9CyLoWQ",
  "key1": "28fL3AdqFiLibLso6ZN42Zx7LPCNWqGgcWzdhkpgpRFDn5G3DpjsTR1x7NSVaKkPFRTC9YsABArAr1MWNQoxPfUs",
  "key2": "3V3Hzwt1R8AkaSxkrthQrVKhnq889b4CJnvEywYRumaJGTGF145CsJ8ptCHw7LYYgj8Xc9NE1gHDQS4iYfa6ertj",
  "key3": "3FV2v1DxftWNTz1pxmnEjQtuxqTMbtWmydXK8bcULN4cqDTh8wvZNfWKP89tLSmtJkNYkLaBX3SuxtoVytoJ23Kz",
  "key4": "3QAwPrbdYFCe31XnAQ2ymCx2DxNQT7RyvWhi7Ryh6NVECj3Z64HjoHmoT5F3bu617pwBcP5gTFyCrpFVwprXz7w7",
  "key5": "5ns444XMHeQxHySr3RnxHNWMZXNbNeqPT74ehJM2wsUbuzo9deFqxdo9bFX1RanmzWb18S6dych3JXMib31Y9RzB",
  "key6": "4je5udJYv1DxbBPnBS4VcGR5yRSjKMrUASWqr7aseEJLg1UgvdwLxTavqCRNzBuQPUTig6Aan95PaL3gv3mWEvfL",
  "key7": "3jXbTPpByBEppYCLvYZF6BqT2PkUAoLQHzEVoXHH6tqzFkXdprBKVYYU8Fu7aM5QDbRapQc1wAWe8bbyzJKLociq",
  "key8": "oq363GxcmuBACBaCe5QH16YCu1SmDjcy93pg9XMxhQXAZ9p4aSHYnaiuVw5qmdR9iVs5GQ66if1GbvEKQhte1JH",
  "key9": "HRJDj3DLAdLz8AsadGZ3fS4FVByi6bwVT85DPLY5pyJ9eEyykE9m9WG1eUwMiL4Z38rK3kQdox1DBZQxBsBqzgz",
  "key10": "Hq8TtnyyjBPta5tLfjVBh1uMzU9sA52PVB5Jqxq3pYyqXVsMgiwMie1EoX5d3fmq7dYKcZdoCQ6WPvLQb4E6QoL",
  "key11": "5L1u2f18dVirhw2vxcXVoxvaeBzjqRFWNmYhWLYgUpPLnS1eFdzx5m4eLF6siT78UE8nBbTFYjuyuSgtpaZvCgnh",
  "key12": "23s9CeD13WFrsozJ3NEbqDPjWjg91Xx3rX1zCunGTKdJQHWZdDTB7NrzYiH4tdyBa8NwhRoRwofNSA343bYWHgXu",
  "key13": "4mwFoxHViPDMeC34q3tkbHgqRNQxVg5bNhpVFbrw73h7dVijCgNXH84poUdUGFi5Kaj1ENYZCxAhLbFfXB1yXfnf",
  "key14": "HeUP8THrqKD5vwQPFdjL36zLPxxXmJeqieseEUR4Npa7AxV71ZMzZGmgZEjTb9yc9ww1VJ8Yn2Sbh34MYXAP6Uo",
  "key15": "4AfhXmTQw3peaaCHMM4EGcNnNbvav1JMj3xRvkdMCTbi3nctTs95rq999rfkrCoMcwSWZf8J686PGLgbcbdDb6oA",
  "key16": "5mZ2ZkRZy9w75aR3FAZbbH6TkzkXPKFL9uCsv4m1ftsN39F748jnJZr24PDYX3AwLhSUbiUuG6aiKLWrq1Agj7C3",
  "key17": "3iuRpLgRVgqPEhLD7vEEVVjMCoxgnb9utedAWEn5XfHzxoaNCcJtAhzHLjk9YTfKMqUNk4MNeDzhtavNaL2TFrU5",
  "key18": "2JjZeFLwD6zs9Fvn64xcb8ExRU1XhZCmdnvH54hZvjnUBYgtmpkm3pXZymrksNhb1pynGgkdQbWU24p3Vx97kSmn",
  "key19": "4uxN7yJH8Dt9dkKaMqb76AR52fgwVWKDZonzy7Us4HY592CNXDvvkzBKKhUQtvEKB9uAYhMNF7nJevi7H9jq56pW",
  "key20": "4k9aDKQb6CxGuGvC8n3B63XQGyFvKi1UoEQzAKWwX54aLFhKXMNoQFWBV5T3zQmchbT83h4HZr2pCCVZpQBca5Rr",
  "key21": "24YbSVi91JrMX5ZncEAKc7Bcs31HRitPfXnxP4J1ngi4ygu58HSym3gScjXmpQTPD4T7jqJDJ28pEwqhrvkt2bvN",
  "key22": "3XXLyKCKznGTrHazDy3ciRcJF1bw3NdGTz8hkqBU7Ec9d3ksrndaU173GHPaRSE9fvJ8nRzBDr8BJg3aMRx7en6",
  "key23": "2qZUnYmzpBmsVE3gWQTeEABG7oV2ECiWLJVjAT7wXzXi6fZNZfyD2z5KQc96cmgj7bX9nCtydNLfFAfSgYR49BTJ",
  "key24": "3xgGxc5f8r8YuNT1cSZjkFnZQKj647dBuoyfbd2kSTvMWJAHAXn2V2phUvVWEb4Bn7UMKaZZBjwgGYRuUDsG5xAa",
  "key25": "ttVbt3fHUFeEeDjPjEtDfUm1b52B7TZx8gWxQgjft7QMaZmZc3Ee51ZputYJCaRbu6MxjEzFecTGwwJDFyQHCKY",
  "key26": "28qBrq3bhMDFUHdSQdXQyW5Zwaemrr8vZZkmJGCnkxsRXeYX29Hv8aAMBQQ9Me2XddktSxZaLzUqzaattvsprUsY",
  "key27": "4EXExRuKrAg6So9xjcwf7juUQCm5DL2d92j1QhcxGhLiA5YkNPkN93fdSaEi9oH664LUWf4xM2SbDQEBNbfqiA84",
  "key28": "2xXo9FJxnjKjAKMydwW6qas35Nye8kx8Gjz59Gu2ZWp9SUpaGUvtHihvDEGbJ18D7fNTPQB3VjCtb3HC2bKPRtio",
  "key29": "3JXrFBUb7ZUJfNCRPpEfLjZ5tXjmpwz5U5PUJYh1Q5UoTuGNBZBrhpMQqQqEP3FVB4iZ5KL2Hqu9F7z5WmG2qfRA",
  "key30": "3j4sMeQBPazmtH4Zq7FR65sRgv7xzibRRWPPqnnuFbmeLxNXMDrzqMg5vQrGxr9kWxfEu9Av7wqMdmJugea3LYbq",
  "key31": "3JSPHb2CoVDbLfq3dhVFQ9yZZh4TahydKkzG9AYZDC9NvA1JaP6iKdvYYeREg34V5v9UxpNcsQG9b68neUR72uCL",
  "key32": "2bgQoKKwAynN6VEs1wsWeRP3NcFDb1RB6ydEHGHmfVNYcfqToddvvnNzAtMZJfZgaWmPeLNU6xbaYACaY46cT7c2",
  "key33": "waevja8VR6KDaeysSEwiMXAJTvozRxSx8EdLDRHNS9ZayKFcG8CPPu4basFf9CxVRs2jrBNdfT9WENDQ8HzNVWX",
  "key34": "5PeHp1JcCE2STY1QWAqbvqUDb3xutpv8jmzPmAgAYWGPsUzPDVaCBiDwRMexLN57a76zQsXaMete9VyLSWu3LGH5",
  "key35": "oW4pBEmdqWapTSFKYvtXncYXbdKnJLPQJxWxHiEEJJ4gN932vujvh3M9wp2MRjrxGfZFQ7Q2CyvqwMs8tEVykHj",
  "key36": "G2xwY3jWd5A6tJXW1bAbxJV4h3coxH5Ji5GZXPh6a5VHGPhfajProtNnMfCpJrdLJgpU4iZFuqEDdBCTmPk5QZw",
  "key37": "4QSgtmKptAkr2HGA7ZKqHq9KLQN1qqsam8g9U73eRGFxTWJmysq9AjW8124ANGYhnzhzgz18BAVGUZ8QggxH5BVh",
  "key38": "47p24nz7o8mw3MyVBCqhFMUJvuE2oRJfSJe4aiD4V2xRASkZVyyVpiHp4pAFEAjkoxEX248UFCssVzqBrC9YPL5Q",
  "key39": "25VawN1evrHntTcaiLSo2zMxKmNcfCMGkdzWkvUQVjtm3uCuxXUeawyunBnNvpPfnNyq2XBAdpWzqA8H1kNsMPRi",
  "key40": "2TueGBCxtFzKie1oyw3Y3JQLjEMmoiUgfytWGaN4w7GpoJrSBN2kfe7MXG9aTFVS1fJhqdvwAFtL9PRzARmTsfyb",
  "key41": "Re4UxmgRdcomQLJ7PVj3sX5mrAR95UvdagQD76kAk1LXNpw73XaarttFGMBib56Eekkc5G7xKpfaLkZJT4a68w9"
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
