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
    "3ZZdPP7JMjkCqgbbGvHW9VP2o4kCPMyxA2TbeDia6v7VyKWqaXNksCLVCBEqEwhCEAoct17URQvsFsvNNu5YgqH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvsVyG3qqcRyzDzEjyZxHQU9GJJ9moGE3VBfMhtuygnf4ExoN8x14gXbBU6XcGd5WByGyFDJaUzsCWr9fNfehr1",
  "key1": "BgiwFjMi8S6S1F6fmqm9i8ti8YzVLXhgs2tcqenng2jAAWFDeeKCGPoEZ1195zdCo3XQ4UbzCAm7pywEt4m4wfU",
  "key2": "4fjFJNfpbqXGMFU18Qj54EMfYBEjoHZkCWkSd1jScoYpkC1Ck9b8YYnsnPoxEQSNVpwLHjWuSKdc7v7iv91MRwaw",
  "key3": "5WdkwjR8TKM7Y3fWGsmEhzQybw2zwA1YYhFysBpHAXNZqFeJV5w4xNnF5GDzsaf9Z8jdgN71ojZCEPf7QMeyobnB",
  "key4": "3MCbd47pTu6UVzusit7aPg3qPRuLTXwfJ8mpc16g6YTdamN9323muzjbotq59ZWouQdttqgrz4hX7cLgKLMtoWRQ",
  "key5": "4rGCvmEjHE218swSHkf5FhC4RDLDEEdASn5tXuB2A3Ladci5TvD6wYRFzHt6gnBHCDc6P7csfoJeJTg6TbJKbg7S",
  "key6": "rgfRmRNhToSy3Yu1tEuia61Tkctwea42YL4P9Q6P4z52ZvNiv97cWPFcJrfpL9Buhvz8sPrHBy1QvihWLrJwZhN",
  "key7": "5cLLn2RD8wefobE59Ewi96KCvTskxd9zoYfEwvUzAXENmbg1TqpaMcL8aHZZRRKyEv9YcRixson65tWmLud5Cqvo",
  "key8": "2MWMuFRbw8u53X7EoJEVjrDyd9J6F36x6e7zwsytJNuCMjGRp97DgLnrx3k2pn4P6heo1xj99w1p9vNcVXp3uifs",
  "key9": "2DTR5d7gJXxgRmswvnGFQ8ZUu9oworR3vhJgzg5LhrJhr6bC2bUuQJz2wYPTNCbkP6xBNC8XaF9AmyiRiTPtfyze",
  "key10": "5otjf2ptfntZErffEZKjGuExRsQFW7aJSkjzFv4rKW2YcTuHT5iiyegRreFufva55D9aga6HPsnMyD8PmgcQ2sXF",
  "key11": "5AJkJDKBFRe1vETojSyC33nYNsPKkMYXiSXuHTxkFRtjdPN38ADfT9SPW5AkwWg49DYGa6HX2dKtEFMdhRtLYxxU",
  "key12": "56uqaGoyUW3ACQ1j8Gubz9CwCdC3YktwsXXuVWr8G4yt18EV27iDNg7r9i4x8uGetWo3q9u3NMz7W1TrUzYnUoGc",
  "key13": "4NALp5xcDU2WSTxahssPwpomuvosq5ogers3cshHYBMadEooXNyDL83MwEdYrpD1yEei1ajExqmdqXUgRj3SoS8b",
  "key14": "2msvMyzjxarwqSPr3b7rWEjU5VzKtPao2VS3g5ZARkdqPjqcX35f1KpNDYRNgyE3xhDBoGBJHuYWy8NcTENRanGo",
  "key15": "24k2PrarQCmiYsLZDdxMoJyPUuCJ2t2teVtSbSMnZLtC3zLtUSDxv6W8i97VQgF2SYBr1jf2aZnUE4ZiDBC5h4Jp",
  "key16": "561t2fsKGJ62AxANCbXaNJXbAXXrPahXu4kju4KDqBu1rzM7GiuMLyPeDTz34TrxoGpVgNp9wZEKgWwBwTWqVDm5",
  "key17": "4Fj4wpmNbo7QoesJSSyshq2JLMFo5qcnGY1jMvnDv55wphkUdPtoVsygrBAtn1ut2xojkY4XxarnBnxDJoQNuHyx",
  "key18": "55tucwFgzNABzdsaCit4ctqC4ZNzwwSjsTGbgisxs2SsrZBzEGwaCjmULbe5GyVfGaMKYt7rnCyYaUy3hJyRijH1",
  "key19": "2S5paXgqzmqrLyV8J8XkfntEXS7zpFD441gcTfvPtSrXjavnmkZVL74FAbgbAPw7V4BD8zKhvFpWBofww94w7Uc4",
  "key20": "49A2wknxZpnm5VTGHcATQnm5yumd6YjewjviNjfCTLkYizEuGoXD69iNY67JLBJsVoKKfrYtXLpZqSNhQ9wigZGy",
  "key21": "2DAmebctMsCVvuozuy9Anzg2mU5qDw8fsNgxZmnt3YMo6uxFX5zcqMLg2UmwjoB2t2T6fPqwsMmPZD4bXb5dXs8g",
  "key22": "2TYXj6AZY9Votf34mT1N3a3wf6AY2Vt3vYkptpQrhQeD62RkePmuE1ZHdYgNyo1k2aBBXuP48bhv6uLuDojhvAdg",
  "key23": "4FxaS8iJxZgQgyqXTzhG97wDfYr7MAhZ7MhVPwAoWFHBunS2zeDLM5AXuFMMGicdjneDvNg5jAmSSo5qgZG5t19x",
  "key24": "2bTw9QTgRhFynnBkFVmV3MBpkDTDhEMZjSgSP9s5yzsqo9FxmuGWJzFzmYn1xGKNfrP8W8qgwr31XjFoGYrDWLZY",
  "key25": "4U14Zid2uR49EhDZS5RqzwJpKbx5HR1CUbMmNaWHkGxXyg4pob8ynstfH6ctXD3tUy7tqY88sxReSkCqWj25hZCi",
  "key26": "4WDfFWsPt6WsagCvVXqGCzveqdsdJ7168nhnmnr347S1qD7M8C3VerZ1nHr3VFQErYYSQpqECFxYyvLdVt7PE42P",
  "key27": "3Y4JF5SD58q6HYQPgTDrYbbrmb66jRLef9zQpmKEY9jdEiVcAX4CLH1NnwiMv3iavYnhLRcRzKjYcGNNBNkc5GAN",
  "key28": "3r7Z5VnReZpz7wFPg5UqDKTxomhy2KKmzhYNyGdRFHqe5PRrPnqQcxWBLjtfApofv8LGEDJU2AsaeV1jUs2RHCtH",
  "key29": "22dtEcWBYSfzaZeAwcYa1i4dfgoYBQCkKyYajTBh97E7t4ewuw7XyG45DKC22HZf2Qu4VM4HVVx4Koh23VBQm5ik",
  "key30": "52hZ5yq42yKW9pf8BjjsLEDv1Q156HKdU3ANdaJN3Kv8YjyZAtXXDuSJZDjZdk39BpTXf5vkQfwhcSyDbA3DNJdH",
  "key31": "4vwXBmKpZsHDj44tmd71fafovCmuc4ZZa6JTbRbndCJ4A4EdJabqZTnkvc5drqQUmHLGnaz4sU1zRdQeuZ7YF3hj",
  "key32": "LcbMqgnfQ7PfZ6yk9HMmnPJWAg5XFzAzgHrAKe56ysBwCd474XJMWC3W4Kdxj4Pmb8JEddyiSEEUAwjhujX9ePy",
  "key33": "3fg4tfp5dztyz1YKUDePMvLXisrsfALvRPBSquh2YrbXKzibLi3sk7e3HeX7dD4xAADkCKkVNhnioA3MSqeERY6",
  "key34": "5CbSGjQw4oTLP1qyEZAigTbQxeCTgQSCuunwQ9ENSjmYtcA2fSskGCb5pPx2UU4UKx1pKgVU1LAFqfctx51qtbsM",
  "key35": "2AyZmomZCwYea4JWUi5EPKWyoCgufMydrE2eMEELM4i3i5AGZggwt2b7ZR96mY5rGCDRHGwLNcx1kPwWumjHKciX",
  "key36": "C3YhfZEGYCHtTJukHRNXg7BUTmyVYp34LiKBqzn9ySETNr7crTk2iEREhJqSYnegxF836Mb8xKcvaKSNiuhgKCM",
  "key37": "24VFwqkTNBQMRUng7t6sr3YmL1uZw5rqY79HNytWpbBvmnkBu4QmLDJGN9H6njS7rPVw6HXEyJzp4mA1B4fHyEop",
  "key38": "2NT6xwdtcFNpR8omLTP9xVpbecR3SywQUEP2r7Hmc1pa5VrFe9jeaFQEm6HmaoraWJ3TjpjSg6NLvEqJyMycxhBk",
  "key39": "3x9fUsXTLEy3R5a1mA3h1VL7T5ttF7BPyovhYxzca5mJvznHBhSqVhqoeqqmTepuuVt7hwiMjcyiaBXZAhbqFCE1",
  "key40": "3mtWKf9CvW4pW6T2tc3Czxb9kEvbNFWFi1pDJovYmaz3CvprasFd1DpPmPPR8i527yh8Rfp4oqn5QqtxzDTFQSRH",
  "key41": "2pcw6cnA2PcwTck5Qiv7uzrBd97jRLZaHak2ojfm5D5R2g2B8gd7QmYzcx1MDANBR7Sw8tMzQp8GYQHBH38rB6Zz",
  "key42": "4Hyuh6sTXGNEeMLyuAYGeQLzk37j25QhgeCgkfm3DLhxkbwf8TzHEgV6PTJYX6PKYRUyFZuXLeMHpk46BzvxQnpi",
  "key43": "4YWLiWhRaf1xSbzMpo77si4tUa7pYANWhGur1BcY86S72qJRcnD8Lpvoxumwbw9R9qEjJQc1GrZMQ4ghuXzNjnug"
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
