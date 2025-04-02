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
    "5diPuwP5XLeZGPAMWc5PJJnEWHcfNq5Z7GMvdvMVXNE4rXfbT17WXig8zk96PxnYwER7j44EH24TwwJ4TjRPkmxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLm6CP57tt2TRRM1UKWyrdMY9gQaEjjRgNPKdriniCRzeQF59BEM91NgjUJFYLcfvTHWfh8nmrHwLbabvUJnkDE",
  "key1": "4vMpQPtGzQzGhwfEnTNnF3bCmGJu3yFA8zVxTqTqGsypwfTY8NLLUDnW8rPD7v5NUzmGGuaeuH9sDoRyZWzeW972",
  "key2": "2Ewb67Ne8uuqSwBWahFHt21nmtBGKQYwoRVHZB9LVyLaunNaEPbhaFCt7XGzrR4ihkztL9CMukxqiDoBrwermkm5",
  "key3": "4bhnbDGaPaTyhZuuNytar7duvwhUQPnLgnN4pRrRDXLHN5eiWk4Nh296yvYiirXmxMN6k9si3RdK9X5fD7WfdK7S",
  "key4": "3A1PSHx8DvtrJeUwrC6Zm4WJZqMV1YwP2uLGRqeiiTcUC9okmiLL9oASa4mDYeG8ahnKPGVjdhuPxqwjaJeH4Czg",
  "key5": "2dKKZv3LYDfXmoaV4kFLeYWFnjj8whMBdJMLpfWWGrooBLwFASyVqG4ExxtWY9tHYC2zNSwfAPtWpfQcpSgdtFU9",
  "key6": "4WfvyG5AgVonHUibZHtbaEsz9U9K1vgLLEUSccjjnktQcQeDkt2A1qo9hsDaeMUesSGMKEzuoQ1sfr8CQuAPTav4",
  "key7": "5hvxoHp6a7qitWiU8THrKq1k67pm1e8eCuae6kcNdvHjU3FN8xRzLUHZnkwWdJtxortiyv9HJXkgH9LihKveFY8B",
  "key8": "cUm1X3ofRNQ28Ma6DF8QxUfaVZ3p8FtfZErLhz4WrPVhSgW4S7JKPjF8czBFyBNh7cyxLALE7KRvTz5GWGAVzKH",
  "key9": "3e5uj4L7tyhmFxJX3Z5CzHm8gQn7Dx21ZBjG4j8EgUCosqGixk64WLwawc4rtuKvEztG11MQgDUjjQBcPacvVxp9",
  "key10": "4JxCdKCfoRaRF2etTZ4RPqxcvb8vfoTSj4JwBAXHz1FwtqWX4hjC9JqGZibfuDTmmUu5svtSrHK5QCCDcwSpJtGf",
  "key11": "4D4GvAtnxRLchaKMCjqLx8dZegDp6AAhXyLAXwZwZFYKPwPmMEWyyahtDExGJYe6BegjX8cYKb3XRcjtcK4ySUXo",
  "key12": "2vELr3rHZg39pzqsHRoVmCk31w4LgPSnQL5VqiiLe2Azq6jmrirx5MHqBdUgNJQLgCNKwjAZTR27FDJcwBZsyyZ8",
  "key13": "uemBe43Ygmz3XkJEqhn5bX2uiTyKT29BUi45J1F9sYCdWK1six3nNKhYLd2uSXG3avyewW5ZahKp2FUX2HFeckz",
  "key14": "4Mq625LmHDivncRTSTbmP3qFPgPb72WcFnSHLLBXzPHkX2kf1ePTCFjz5oM8sWFUuRLvSJGgajJ5bFzfgU1M37kF",
  "key15": "3DJR8QDi4rmvR3a7gec2PTvPPKrUc4HBX6ibznsP3fEpp1DmiNhfmW2E32ApoTUtv7ctEXJyJL5TjjDxnfXjDNJw",
  "key16": "4kNpnK6LcQ7EBAVfGrEtVfpk9jrEh69g2S86WPEmjZNSPGtxVnhc9A2E8t7K1vqXasR6YFBZnJJhwDNbGNvscSGH",
  "key17": "MqiMtF8woComhczyYhwraB9efjkoCYF2Rsb9EMuyompQisRNqTrSQJxYjp6WSQ8iVyYaaCDedpSig1xKdtKgPwG",
  "key18": "5qmwAiHghek4vt7Bfvm8EHjkaL3FuZ44JnVDaxjbmbwtJboVSTc76JnRroKMmCXBw36QWGPVYD5esMrMJb7TBBjZ",
  "key19": "4JwmpPq3VbYp5ZsNBqj8ivyJuRfPehHk6HZfzPdgBNEcyMFzo9zTNJysPcfMNBaVk1SquzZaBUwpq1sLBSqYmuDb",
  "key20": "4tGELXr7sWQ2D9NDWzW3qptw1vXb8tdYt9df4cnCrNS5RG8vbVtEyEQ5waxjDr7Q4tuT73xhKJZJg1qsAVEPRrqT",
  "key21": "8HtTBGqFnyfPqF8m23RyeZnyTnBHFh4mWsHQQKgFwDK2AJ2ji4VuABV3ExkHSLi1GaPpBj6AZk5Y1k6iNrKVtH5",
  "key22": "3PKxxfFfFHZDSc4wi1Yo2UAUxUz8GkBwZCH1HcQB32xVy7KCsJphH1WeSL3Z3EXXCpQoigaybdcXvddvwD4raBV3",
  "key23": "2sy7yN9XDje6dYT9JLhQjTTHGR7JgBFozarAUuFLnt48N59fjvUH9BERyEzx4RUJ8YNVrQ3TFPPrRGom27Mhm1hn",
  "key24": "4BtvJ8F6zrtiuT8j959SBxaKqDKXGoNPLp8NJn7UH6TTwditmKnAK5nwJttNb5iGmXERepSKBcyrobr85uUgq1uq",
  "key25": "fhtohQWv9RMfdb12UFS9cMjwRJQCABkwtLuKWc6WRPEJZ8aTNxGC2L8RFAX4LkAuaDmUV9UuMM2AjcFSpPzSGX3",
  "key26": "4duB1Snfw9SsCQzaigzHqbCSGEFhbUtxhfQC5Yp52oA1RVLJiKnLcoxHBCQi4zzbf8rZDZisPsWtHX1b2K2eyDGD",
  "key27": "W2cfwzyqeJKDEVGvvMHRSTs5JNG8YrjmgftJH732q2NJ2Df9o7ah9VqxtD6G6EhyZE3w6zJdDM3sfQaxN71myG6",
  "key28": "22ixvQnjNQsxZpghjmG8U8bcFyYU4d7HS3HKTMNRA5brey9NzeJEPuyVRTs86RhMmDZuHzwkqrsZQiB5CzhdrShx",
  "key29": "4gEuhVw2SAxt4hMBUrtNMnnbRS16mxitbdQkHJN3z4eUjtN7kZLpBMvCAzeh1YpXTvC3KhKYMXkX6A6RaznRoZMf",
  "key30": "4HfbgK6d5i791WjfmRQZgxpJZLFhtb83RWvSqwLz9tjAj4JeMiNspT1KNgoJtN5cEhA8szFrkJdhSaMqBnSmTbGn",
  "key31": "2BRwqegropjaLVzL3vRGsM8HqGqWcrSGayXoa6o9R2x9KNXAUxQeNVwCXWmxfghi6gD9X5uychZBnyHhdvEmN3wP",
  "key32": "33CG5D3KFVkkc48tLGf1e17XDFDdUCCsWW9KYhdkrCn39B9fNLZPqgjNqzYG4QpuC3aw3fUY5cKPD1NpBan6SG5e",
  "key33": "4oj6dSf36Wieasn6MrqesHDQTu9N6ZVUgDjPSxTdzCRsbpgeFsMX2pejUsQyULydedn7J9mjvDWbyeYMUrcQCz4D"
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
