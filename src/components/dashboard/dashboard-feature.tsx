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
    "4uJGYnB5WJMYu5feg82JaoZphxDBiuGTYp9zkn4DtrjdYr99NrwwxrU1vtgUeeXHqpja3DTuvTSLMdYwshXmBFGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25egL1V1RAAfd4B1MjuE4msnQSPCXmrstSygZposirpJbBe3HEby4gDXuZxpu3cNXwwqs85KsTsbMscnTPFTM8ym",
  "key1": "BKtYq6eYS2msuS6k7NPmdFKZYUbu17sfrYRpMoCvyPoE19WShMzLNkedB7HnUMAFZVv9VpiUDFSipayp7fmL5q4",
  "key2": "L4Su6WU4YoYELRhxwLsJ3hZKQbnAJVB47EpPNZqVAXNx8h6MU64V41fe7ohCZpGsQXZJHPJAcHKu6oAXYqps4HL",
  "key3": "22c8btPkhNkzjX4nXtaKuTtiD1bcmfhZzVnowhBnGDq5Bb5otsWG3Qpjc9S8e4txyEdWnf7cnGzktKWFTbnDQMrk",
  "key4": "2sPuXYC5KWUmdzYeDriq1gkmashEjHbLXCuBdFp5VuBCU25jU8fLjzQouTzWfiewNK36rBE4gWGGCKEYnQsN6bFE",
  "key5": "3gGz2pZZcDDvePSqSENsYr37eR5vrwc55sTxhyBnopTKG1eA9pPdxfuyRN7ivLHcpnKdoRVHYoseDEr5yFfq8GUm",
  "key6": "2WRGUeR5QEv1mgUx4Z1fyHKUoQy5XioeEXa95rsFcvrj39gtVh4gFjX6bfWieQdBX4341eYp2Wk8kbPNysfcw6oY",
  "key7": "3HSb8QeCQVzW7Hr7tbVQLQnfeg5eCdhJVSrnVTqDpSNjywaSzDBfPoaUEoRn5DNdSgdBLbcCpGzjJRgUcGSdtNo3",
  "key8": "3zSgEa9j9PJMNX6iwPpHBUPzyefh1i6eLFdqD7XxJPXVKUjoi1KCFxxmu8Cgb2Zrq1ga32VjVKUvKozzh5niSMKK",
  "key9": "4wxhfk6g2bT4nC5nBRQvvtLT5YhjtpuovCBxwhs72QdzFvFCoH61erCFUwydA1LJKmrbqNz2GUCsqgn3HBBocxVq",
  "key10": "3Hygv4HbkXmqnwoohmKXdSbWXDHQEHt5UaRZ9gcwJSAT7TBSMNDA5EXrVZGaQ7jLRDG5ePNwvkPhM2xYoXQ5Rq7k",
  "key11": "5p6NsXFpjj6zY9FzacgnmK79eF1eekUZrBffenMcqAVQy7vv6FSt1fV4oNnRtE8ogKUvPHiyauzRerTTUyuT2Aup",
  "key12": "3zPDzuEaDnnitrRQpxaRR6DzLJuGfeBmgvrn8SyXuShzNFmVKBgJdJuQ44cZotbfBfqQqdueY1uhk5uSp4wf514L",
  "key13": "211s1gNogtpEbp9iPSomY7AwFFQYKR3DWFGTZiWLDvT9mvLx3WwhNk4VTrJNJ9pVpJJwi3mu7xwmBkUhy8JBA8bj",
  "key14": "3EKHioKVmSfdDeDLU4BXd45rFVKXT9R5MtmyWVxSzfBNrVH5NWanFxRowJLv6CfkjkmpV3awfdpJArSTYMLRDJ7b",
  "key15": "2myRSWeVZFMNFTmWz4MfVBJwNHBZvwqxdbMvKDAWhc4sJ6N96owLxhzjDAG1Q8DgEhSNdGb3rgQEJo48eVS7QqhH",
  "key16": "3vG9esV8u83YtQwodFgpBHpyNiGCsZjwJqDat5Leh5RQ6F6LeTi9swh41qJVkbt6wgWC3XwAvBjB5CFSz5sh8Dtk",
  "key17": "4LCzz3PvkcQgFDSVY9tz6kppfb4enUh3yr9TT75JWhcyZsdh7kSqaFt6qYB3FZ7AeNmFVSNXdCAaE5wMQbwW9hZ7",
  "key18": "xKe83BnkSmTZQPbXewNJCsy9mtjEB2FTSvxuquCxbFAFJuASQNCSTKirXwh9WjJyyT5HPxL75fpFUyjQMXYUenG",
  "key19": "4kqqHYkBLuTwYyLtxXHNyvbhqY15zj8VqMMzKXFysRBZHdXpvJveaZVYSvxqTKCgtzSLmP4nDszTRorVmhtrqREH",
  "key20": "TX5Qu3CVabnkAmq4ZbXafDkGMvMhnPcT4N7HdXzUH7gAx55JDZoqbUxoigsYj21VZ34kn1itw6utqiXwzz4s8NM",
  "key21": "4Drcy8XQWdaT4mSjYB3kDG4rFPD5gq41K6ixyDnXh3iLL6G8XdNZrF3XsHuyAtxjGdRLhy7JG3iKPMZspcdvUaVL",
  "key22": "5nUAzNLCtZcMiY8sGuuhbhgtQMV7BniuaqPdiPpzmGyySwoBG5TUaBDtkcjkJyyRx5NL679bGN4dREbuFNvtqePe",
  "key23": "5AJjTP7W2xhMhShyKyegHbZxVN1UuB5WxvK1BrcSF8Wc9MZ8J59vo69FnmLups8PaCLyH3ofrnC1t4KwQ8wH2g8B",
  "key24": "M6gf7gFecNGAtxVik4Ws9ucAoSJxBrxDfWnn31j62N7Rzc4UoxiuiVEssbQUdewCMJzhKX9aBM83JjUDnDd7QEb",
  "key25": "21gRNjju1Diz6hadoJ9CQLEQL6QKtBgWhZgakZTcFWREWq6kXoLsZccQNGY1onU42xRmkb5HC2yJ3MeLjp6nwYVt",
  "key26": "8iSpbPwmvKLamJZmkSVZHxE3Tzmtu5pL3kQJLpe3L6YM3QR6un9Cgew3PfmzZJYq83EZKZxXVQnTq1gVv3orrWn",
  "key27": "3itzBMa2DYRMYq8rMpzWwKwNzRcnK2PmPwmwhBcmhCKHu4NoySNW2LcLqm53R7bUDcUibb2hmjXSt5xvgvEw8uRp",
  "key28": "4mMerfEbqqaVKn8HekhahD8AM2N2wqdoTDhEBzURt98G5aJrgPvZLecbxgNfLEgdDtuaPfm8q56LB89349j9F1C3",
  "key29": "WYTatQxy71DP8tFjm8TNdqAQYWiXGXjEQT2kWGHFfudYtCtfFnEMaTDNBWfT2D7vv1yfFvZhbAv8mz9ZME1edjg",
  "key30": "3tURuAHtUVf1JKpjbevGQU7cJG4oQqYgvX5qx5Ee666qdx7qigcrVRbgBGk99Q8e162Gx6XP4KRBFmejUox6QJ4s",
  "key31": "GRpe3wNWpzrnezwMBA5PmqjLJVxyRezDF4uhqcjiMD2YqDbsmB2GzTR2uqhfxuakFZuhLaHGufqn5Kep86PQ24C",
  "key32": "4gmhUL4Ma7JKc4cBLs3p5ou3ZSQ7Ezv6rhs8FacrRTdQ2LxYoY7aBLzL5qRQ3vr6xHZRStdMKHQ1Q3LkLxVQHA1s"
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
