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
    "4Q7MrH3N5KiTye9hYBWCZyXCa874WotcSSZGHeYWowmkTRE2TunmTsPXvKF2pGn3LLSYrytGwnMCEEnaP2493aK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tK4e4NniowMv2smPSDVh36zVexBTUMKvSEpTQ5buh8S6FnbsfUduWop3TSXkZo5K4NLdt8xxDYFUTd2TX4JRdp5",
  "key1": "D3Bi8h3CrkhJrJ5dZQFMZ4QEjiBm1ZZ6uecQQ3ZxqRegCb3cEBX94Yz9tkBDJeC7RHqGdzhy11YYmfNgThGf9GM",
  "key2": "5xtwSJXng3WDySm37UmNcg1FmMhcCixTyS5vE2yz9Awq8ZdomVkUHQdtLeKD6eGLMREe1Na6upeNSvQbQgeC6NCx",
  "key3": "B9JBjP3eeYcXBTsLBzZhunFjsUixCq8R4aDNm5jTSSbXBS9CzFxMiAkbW2PQ2FSJ9jZNyz6HxGKK4yfgWQWxzF2",
  "key4": "4GPXRSqKjh2Cm7mDk8FwF9JWHKRhNBqWtTN6wwLTarQw38CELHS5XSrnVsAKawAmCtZHponYZTvktH2PW8CNLyaE",
  "key5": "3ompufEZKfuonvpmAxAsf76rcar8qjNmwaqwkiQZkgZApaUu3TqKAomLhSe6EquSj6xfMWxaLkV5rbFSjEqQBP2C",
  "key6": "38pVwTTcBFdHHZ7n4qGWrsdyuWQwaghcy4GDfLgKy1wn6YXrjfL1NjC6TQoCNFb93C12cstCdn9Cqxi8Vv8geNBh",
  "key7": "5dC1zijcp7Ugmd9XYPfMMHgAUJ2NZ6UX9aXcjG4pKq8PoJNmStXsudrkB39RaNacWMs6hKaJtWtsVsjB9BwAjBTT",
  "key8": "3KSHRjHuZkVkfeZSRz6i6hf554qHE1fk28CngHR1HDL23mFAs3WUSUsF9ZLyjNRcX9mu37SfDD1hwXex9mjjGKAg",
  "key9": "55MBpPnnswCvyYptvH3uWcxKA7Mizv4bfuhx2czcsPLXDEpazEGHiz37tx48gRhLaAQMUEUH9rDW2hcfaLHxCutc",
  "key10": "hBAqCEBAxN2L8Xxo3At8AirmsJLf2zd4uaGXvoJV7RVDFLij9MPVG93WNV92VJEMSqdkLWxu5FWhfeFPMXzYCg8",
  "key11": "2bTjwGM5pTDqcchyZQbnVX4ruDBumnTzzdhHaw4VbxnaTNCFUGh5vwSZ5zXvRJeu6Dpj94dSjrNgkZbNY6GgFRfd",
  "key12": "3YfA2yNYsN7uXJ4QiTsv8p25KScEnjaLfqTLXEUutHY4RVRja8DPzJZw1UoapXfGqj65oM542xvE2U7fsVpwZ71W",
  "key13": "2JyfMv5neeJL5XyqyvQyrXVahZ9augDU7JCm1xd1HhWTPZq74mdzR7YV1HgdtAUBRSr2JNLWNGANm9oZNhgBuaCc",
  "key14": "2MCb6rrpHRcK5aYmNXTC7VpPtNUrx1RUrrdgneUL6zZNm2ZeRCwCtqTDyqbdkyiot7nwQrR9Q1Rv33PGEHU2pKiG",
  "key15": "2uZcmtMnYMrEFDrWKTNxa9Ra4zGWPPSHxqvLNfUVAWVQ9XvqCXa19SHvkQ6WnGPM8yprjQMM3gGysD6AhJSTMT5t",
  "key16": "28neNngSaYJ5Zaqtp9CqSxdDz3vXo98UqnJoYCgy5NeGZJ3sQmYLvj44VVfWb89fvPu55CFVpWiyB2njVcDt93wH",
  "key17": "47hcMkDThVzsiAbyLm9UUYCDnj4ma8yHn3W3D1e6UPG99XhwoTUTLBmwHnUF5yf5upSSQsstNF1n6JLHzfi5So5n",
  "key18": "nq3brqAnk7b8UC2fhxyyHt1iJWq5mTLtRiFnjWvL7BvaC3fpA3TeVJyy661hELsoqF4qW3HdthbD9Rr4odXJEbY",
  "key19": "3Yf8s6DRnBEifridyJ55r2ewMiZM5Vf32V5SkP8jYFEpts6FxXyhDReEaxnyTuRkzNq9Qp5mE5kF77dQKNKp3PGw",
  "key20": "5Sy99Ccdy7ZwcxwfkryDCLrxFyiFnXDYkTbR7MrpLPn5K8UPcUchCU1UKC5B5TMsjq1BkejJmvWUA4DC5onzZds",
  "key21": "xVPNG5crDto4fGc1nY5gu9AwnRZGJHFPpVS431AAiz1squFrsufrmiUnGJfkPJWx8fpRNNnwzy2avp6pfT8Apyf",
  "key22": "4fMeDmmNazLYbeHSSSwapLJbK7tjbEdzmwKLM7zCr8bKv69onHHtgN73sXHCpVa4nAJfXLEwsLzDV5phUVnhFq7u",
  "key23": "4P9Jn3EA6wymuubD9K622MMGXp2tgVqDWUthRYHfeESQRxgGLrhJr5sDktWNpAC1N4B5pttWMAjmjxjDpBWpAVtd",
  "key24": "VdgiwU3ziNvt1oUw2oQhZGb6DN8b3GDh9pgwPDNZHsSgxwDjcia7oh7edrWrGmSq1uWVTiAeuYZHrYfo2a3QpY5",
  "key25": "2HPj7uJAvmzo6H9avrzYYfVbjLG8RFGqTf2KsHm2QghUym1kCUqm455b7hBt5efC6Kj552cwiQx9o1LietquvHNh",
  "key26": "4PtaQE6niZH3LNBY7c3V6ajcB6CpV3HiYpxKQQFqvhCSEudnKft488AMWqcLCRoEhLKHhhtBoge5NPfqQeoxS35Z",
  "key27": "2MsdgYThkvpEsZHL9JoXAzJuhJ2TMDjZurSf7QkaddCWTQa45m6GkRFFHbARjkkdAPZ8sMrMtyBKvPWq9Yh7b8nA",
  "key28": "3ws2SrHnqFBtki31n2vHT3iNB4k1U9GrEYC6AXxCt9vZ7nd4T1aPPTy7J5gL3tXPKjXD9jVq2yMQ4NWGC7h99LiH",
  "key29": "5MWEkHeoSUeff324ZBorzCe9Khf2guKo9XADJcU3FsA9w7oB9mXEUbgDy9E21MAbwVnEPfZveSu4J2smpdTkRPVD",
  "key30": "5zHGviJK8Vm11efwSfbDg5vkLMMsFHzCQ3k4MezpbqWdAw9RAad1DeNd8cqyiXjQWtXMzZZMyxLpiuSNRBnNhwNr",
  "key31": "5PYvAu6Gg2XtuBT5hiXcQiN2EecfqtqD2SicWCbX8YRF5GbawyKGKW1W5WTqXytUqH1TKMHMguvTW9be9RKCzgPX",
  "key32": "5ySEvrTHMFSMpt5V9rMFrzYPphRgzFVyiMk5H4uhpDas21xzzh3NDexPeyRuMCRJd3k24TFiG3H2b36ZaAmpMURy",
  "key33": "4nZkMrkVCkC5Ds3y7ZUkVTh2cQNJENtTDt1B5HZnUCmJoM8Br7PjMaSd1WHauVofzczUHe71sWaGqhBZ7f6kFKLB",
  "key34": "5u2NkKMTpB6yZmod8TVMvU1mo9GhFBA3JuRm7isLfbsr9yFGghYc74dWg8gVyrYnE666Xf7WbE4ywv4kxfKcUq82",
  "key35": "34KauZS52ztRShbmhfJzqz61NLx9pxzB3K4EMUgdpAkvfm19rziuWCuKTfzT9q8VVYMg8hua8Tro9NeEwfiKUSda",
  "key36": "53jrHPh6sYcTPzwWr4GwsawWzzVEZ5ZemJLBy6j8yZSor7ZaPDJNjnXPgBPVVzafXX8Zv22vtPK73byDRFndmhVE",
  "key37": "3BXk626M3qMqDz72Kbkh9HKRKaYeqksUZwD36Pp1j11KEKDk9xesBu3r53qWbKrjTMfH9q4rZMdKkVaBr35g7uoD",
  "key38": "mPuoC8Dg73CavZ7cuoqGpp9mqWCPLW5knaDgrZsBxWNXXtSRvq893HpDfPSsJD5ENzEyzveT5VHSPfquTNCcwf7",
  "key39": "3yAH82hdPRHPqiVnQRypXhss5wUhn1gewz9Tep8voUJgur8CknebNJXW89ugGwFH24dJyW38Vsb8m3obeKKVFMFS"
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
