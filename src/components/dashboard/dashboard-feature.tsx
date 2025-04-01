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
    "9bU8XGkbdhh7HwpKkqEtiQzYKMPdi9ovJ2XLTJv1pqP3bdtQzQUHNJYYNDf9ujp3ZVepRvAxnZHzYj5JQz2mjNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3YFf26kzp3Feey5NW39KWcNdF4SfsFPtiZ5UvAimAwLJ5LWC1jBY7QdAWPf7YWZTDzwBA8g8c4AjtX7v3U8xCc",
  "key1": "3KiVM3zw4CoEsqhh1FrzuP4pVgApDuZHMmjzmqCYZuVgCsxHZZdMzNBGSsaajpGoU7x9ccGC1PqRC7UcxARw9Uth",
  "key2": "3fyT7GViZQ4bCyDyGejJtektYy3Lg7HpezSVkcRw33Ufs5pokYuMvLsvzeFaKR4DZf3YFNPJncYbrfM7XimGxVkM",
  "key3": "5LHNKmccW9kvADUBKfjQ3YEstKbsZ2jAZzQkJoafZDnE2kUzQ85CXX95nZV85dpBnkuKv2coYPYps5eYRNVPdX1r",
  "key4": "hfS4gs3a7sQaBKJgNtszKezTqK4kQQJh6aZ2FAiNbmzKbrE8maJis7a3eTeU5ijJ5fCVyE869tr7ZENXueTo4V5",
  "key5": "43w6zoGqu9NBq9xXn4VdbLNaZCWg2JKbnL4x9THjUtqiepAfg9JH12yu14oF3pFGr797TByVF5Pem4DUZ9Zfy8Uy",
  "key6": "4cMcGqnNDz2YhJ8ghZnkLccNzx5LLThU2UUyDcXauQZPerAeu54dvX3NE3NJHmihbkDqg892tZKwCCNUVcaYFdhw",
  "key7": "3mWN5jpuid5xGjAT7ALTWYGCABi2ry2zrbNPk6QXZ1PU95f81kAwvsuZnN9hMQZaxbTL99MQFdbLAqKK4xWZF6t5",
  "key8": "T6ztorjBQL9mM5d7pQFaQo1X8AVNoskeo2LUoEhYdBrvMFb5fNJtWbcGset42gpxpdNPt7PmoKbivfwQTPdfh6n",
  "key9": "2dyhuYt8ckuGqUaz3bzicDoXMK6KjFeFYouuKmLUo9UYbc4RZ2dmJxH2zTWyzx5zskw7gYxa9QjaeAxhr8ZUzks1",
  "key10": "5rkNprvYbPT4MmHj6pip1memNGGpeKugGP7yyfJafxUwrWAWsz8HoiJFZYcuDXXJa5ppkw4JAAjqrEoaNS1LPgH6",
  "key11": "2n48KLBBAZsKTfoYjNbww7Yhtepm2DwSzqjtsY5bXQPXP7o5CjPFe4r9ZyWQk2zHMfpRoSS3t1DCXAhiW9iHQMzG",
  "key12": "4FQVcevJoL3QpRhirSSES63jexCjR2yWRC1HoY3qWuA2JRER9YghjivyLbr7kB6kCn5FXDRtSJXKc8JCD8arq4Fd",
  "key13": "4QxtiTxCsAhvMgwLR52fGsioaXfy2viponfArcAsBcbqbDLqrcEoAgA2WqgjSAS5Up8rua3y4BDibwERGCuE6Aqk",
  "key14": "2LMWFNW3RrG6PZv3wUUCECjqcLA4a7TqRNj6mMiDFshSVxgDxFerzo7J7LR2H8TjRvdFGfyVGAAucdpant9wxx7s",
  "key15": "5CNReH7mLrL85Sr3nJRY6vqzZzpFhoZCPBC2QxSt9nBjB35u5vWneeyRs9iHFhJzneZmZ1a1i3kNSDb1EGVkHte2",
  "key16": "4WtEyaUgTBzGTTyj2GsA8uh977Fyp2A4DHs47wMXBEQ6K6jvZkM3yEYiNckvhyWYFDzdQJ4cJEqwcKy4CPDbb5vL",
  "key17": "4rzFXDwaessFaxdpdnUXraBtjWYRSh7kahFEhzMReH8vcmUeG1keWaDZUi2wqLmAEBk2W8MdNmwEgEZrkutMDBau",
  "key18": "3FELLGqgKgpANXShqs9zogakWfhtVLfJLEdDC26DduxWxCcdDo2PHGtsV5Gk9MkJP96n5pTBKLeeZ3XXcETZZsfX",
  "key19": "2XmdNkEtZNYbqokHBUJRnzm8E2THxKPzdAji8B12bUFzJasQ1ba4ZXfQJESeFMzfpgb2eTscR4tP1mjZuyx44wwG",
  "key20": "s7d7Ue6rn74x1gDVfMjsXGMPErFA122wWc7GHg9kcgoM7vDVE69e6GRv9QbG1ye6eWTdyGH4LcKWFHxu5XMyxh5",
  "key21": "5C26MwFcLkArAKYLWARwanX7rFFAeo9Cs5stAaPnE3XQwxmubnsckeEnhz58o4uxZg4uUmLkpLg56sMaV2qHizqa",
  "key22": "4o2ThfXi7X2jMDWEsXKNbsoaqjKcJqmyN6zAWG7wzFR6pYE51pkEmtRPdUA5ZXFv6kxVKFuE3JCh9Fducn7fN3Ec",
  "key23": "5i78wj4KJEBWSE9Zk9gZEMEEaWpznCJnCG8apzgi4En1XfTBWtzrPucmfyyEo83sg3iAb5Nwq5S8cDfGBeAH8m1X",
  "key24": "Xe4BQienbi72qNZ5JresP6NtoadZBZPPfoqxP1iojQX8SySTYDwUrkkLreCExQfbSzvZ6JbUJ1q3QwY9HdP6CAt",
  "key25": "XmJa43kwdSqeYLKWtypd9L8J2MaddsaWgc5v4eX223ScMdx2CMiqTnCr9UJkjEKPzzX7eakfnJfAiVi3rVgS8GE",
  "key26": "2Bk37qkq284MFvkHkzWHpqvddVMeQBbx26urnDiMbkwEVwLr29UqQSoB3of9P9fHa5Qf8j35jnm5Q2SYapjvdWJV",
  "key27": "3CPRf8SVBsTK5wHTFjmD4DzUN16LFevuuQuSrnCtyZ22pHmHUdmiY8io4KwFTpfEUhSnT5dJfBph9APCNBwjthXW",
  "key28": "31wY1fKqGEkuGKCCK7KMfQzvSp8yBS2utVjmBhYbGRZNoyWWrUafJ29RJi1JycuE6eWusp7avjXGVqrRtzpBqbTi",
  "key29": "55Q6KKywT9S7j4LtEYyLpp2Dy3Zx2WYwDkUysquqrydH42P6vXuHJ83sRnMvCRc5GxpGtLJ8m6aiLsMwJaYkt3Jo",
  "key30": "2N9Kj2tV9MBBMdYM5o5kRc8iA5aVAYcdKPwSLp6Q5JsJETVacti7FC1eE6Zq6wkDLd7xgSXj2ejPvTB3HNd8tKYD",
  "key31": "28bJMCppiKXwUZQBszpujRNHWq86mwtq5UNBa8egUQjiCVdZaxV72gnhiq8ZvQUDcd7VZQ5GCV9VMkan4pWNa4Gs",
  "key32": "3cMpKjvJxnrJA8MPRYQ3F6Ec1iMbctn8JUcZQs6Kk2n5eAAtQVmPWbjY3UyoDGfnjAk6tCmMExqQo6XzMuR26yiG",
  "key33": "2dWCwSdQt7BrXr8voavg3SaPAPxY5Uv9zWFCHDuUcNUkvYS2JEqYyH1hsJRBNuwSPYoeGi5YvUUJJioMbNkNJ8UD",
  "key34": "521c9jHX6Z4JyFWpJ9p5GaFFmYTGFkQDe6ZBe7mkreLhS1G4bUdyCtVf8vzMmfQHMNn9azrjQc3QUhsE3ZtoWYnF"
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
