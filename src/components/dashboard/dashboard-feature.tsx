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
    "62GZJMuGLuJFdhiNE1wamovAeDr9ZU4pEJLiGNKdSP6AGyieHQ8qzVYjefix6bZLjsGr94HkWteLUCrxzWGb6pxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7bzefDXgdtXPjzxHYqdkdC5PLqS8u1zBczaHuY93ciczoi5nGXpgN2chzHbZvce99oL2vJcQyHkBavdJsxjfcv",
  "key1": "vSfUt9A7D6axqw8C41PabW4qThMBffeFQDSWSjt7QdNLP3dsK5jvqmgMiPttUiTXaJkmTsmGMQuhfkTYu4cxT6F",
  "key2": "3bkGjeMVZGbNz9Ypo4tkavepbsdG15gdg2iRabNSyDrQaDVJj1Tjyo82dzQ1VCq5VH5GWy1qbYN2x6oD7278w9oQ",
  "key3": "5CzUWatCocYAHbJi9SByurva2bwC3VRnoY113oqL1M768vJAU4sA13jGnQa9KENYanRuufUMvJr6oyqGkfkKX97Z",
  "key4": "tqYy7ZdV9JTQPZhLU3o9GGMxup5DZ26S2kkouoWNba4KhGL5rpiwfELYbRTbkMwWB49JTyTQigSq7cdwDwcRwoZ",
  "key5": "65waabggb1uHogfuu6epdjjYr8X4gbWhtEYvwi2rMdUnEQ6XJMa7i7qnSyRrP1h2tHkSdiSjakZxHoEZgde53mWx",
  "key6": "z8bqFxBvUxWbjct26TBLWvUdsL2juKtqps3rKQf1oJ8mMgR5KfrMVAvM73gBpVqpg2BVQdoKzV1tdzsdPrTCVT3",
  "key7": "3nWi43m1sne4tpPsedscgFeDPszbzsXqmFCLZxkvL43uciAaRgwmTMUk3GfdbMBWECRc8yrGW3YhFos7MDeVE5pe",
  "key8": "33G6QidQcKNSrW9EMEGE23DeuxZX17qDtQzwCRhJUKMBUVrqNsqV1uq8YRXGCbsXDo82kPeiJLCUXa7HyKKLcYUc",
  "key9": "3skXPsJRGrnjB1qbtuUfiYurAez4stnsexG5Mne9kgWENotiiQQgWZkD3cNAyVWXemZkoXgz7EeRJbW4x37bkpQj",
  "key10": "SVCkRFn3jgLTufpm2ZV99ytwjfgtob5L5SJPMsAkuhq7uJXi8mxdo7JSL5gUkvbKp6me1jQVkmaWZdrqQBZqqp4",
  "key11": "3ncZcUSS4s8g6Jzi8HZwzzqbyccwGSMZtVwxn2xeJ5N2zb5DAwvmZKAe6UFAVyKrYQMS7dryWR5jbidVunvLtyfW",
  "key12": "2upk1b75tLYHzo6TnqCSiTpzFqrQ6R5mZYtwKmu6kj9HaQmMuqWhgs4JZdSHJ5qxQVkffaHNw7ubwuHjiPa5Z1fv",
  "key13": "53HtZsPc1HGAyXwNSnX2xNCrnbbpcCD6CEyBrDbxB7UxMZrDBXurkjTfLxEbebgEHLx7j3asD9Gdc5Bf1D7vBazZ",
  "key14": "415J9CwNZnQqSQ94WfymGijpF95ELR3dsEjeoy5NLxG21d533BXZe3fbRkZ2uT3ZkFnyTvFdkQgTx1QabCdhbz6f",
  "key15": "N29xKBsxnj5WFfn48jER6jHU4SqZGWk7pCDDE5EFCRGyN5TBmEMcBrGhpSE1FTZUB7FLB8KbEfByr8zdMvmcvn3",
  "key16": "2iRvudFb89VabX54Aj7GzE3zcFrBo8xTkoxZimUK7r4mbop91TaVaBVLyLji8fBrQL1SjbzhvoyWrGsXQBCZjjfN",
  "key17": "4euCUfvFpx1cqsfhXLKjhxBHQKesWyH1GnZomycYxN3LxUJiGXMphyLiQqW17WyLuhHw9wK4G4DYUXVTqWBau6jQ",
  "key18": "G2FibvmyNzoVDPFMVAgLWstPqz8eZAiukAN979WHArFZVVDBjLJohHZqjyfgnKbJm2H9g3m5dgNHrNBd6EAeNP8",
  "key19": "2Z1HeVEB64QFGQnSVjZGopfBx1aEcGwzwejzn7jB9eTjUZqmqsx9mmdLa13eUHrcV5Xx2AVs72SU1nL9GJHE26VV",
  "key20": "5V8z6DF5ysxDg7exteh55aqHbhaTnJKmhKtdns3TQefaSUQ3Pa1AhCHNjtrLbsoJ2mnrEzLm2KZVeZyBPS8aAUMG",
  "key21": "4aGuqUwdMJa8XJRsbp4U6wPcASMDHFzcdhLaAPD8c3VjPHy1pc4aw3hBboSJznNv2cmf1Hh43ivUwPgh8skBS98e",
  "key22": "4gKD8rCDzT3JDqYhs7xb4CyuAfT7BdFxfUdPt1fEKcRLUDRhtPPwXEfKDbVdWnsKahPQnBsVkkV4zABnXtwwo6YS",
  "key23": "4HwXArH9t6qLZSJ36S8RQa8eCxz95WjfRfmHgaqM5ZR7n8qZpkgFSTu22YG8NJAW44ty4aDfmBdsBHcy2o5FV94V",
  "key24": "cvyvQe8LdYhCb7ShG38m2pAsPD3ZhqGJeoFQQK4LaKajsD71dS7m7KHwagJNcNzXAe3VdHjqD5iazCW85tMWY4B",
  "key25": "w9HbQPfEojVygV7tYkaVeJQxN9pvGBoQnFrkajBGgqZrF2Bx86KjsyNDcg5FXRtLbRPdBwufXiYLhJg9tUh1F9v",
  "key26": "5sA5wg3yFN9ZzVRkaNtKwJt1xwpzeGwnUJfebEnivPGymYH8nTHtMP45SA2j7kZPieBmDTH2gGz4rBsLMf7xfcZs",
  "key27": "5pwqPE7ijJyErZE7iVHLuyNWei9f3ewoHsCL115i1GWApsubW78cxiVKkRNfMXxrtLncXNnPrMHqWdDZ6ZNqMag2",
  "key28": "3b4WUq2ehovTZqfaujJ3CHbPxq7soZaaMV2B4CBb9CUsTe4GrmoMVLPpMENvqFM84g9E61VehoEbNPMSgsQLGopY",
  "key29": "2Doz1gFhjKoFrPuzC3ejMmAovftYjbAu7QfVtWKMPE3CGzGhS1Sq1G37cQjAyqf3rUa1XJpzEzYkuHk4MXuPjqrG",
  "key30": "45pP4KA29CXCaPnFhuu5J435wCTxzFSQ2N2LY1ML3aRKyD7zuUtQkm8yUbbzGh7MyuPJRK2uaqpLKAq6gHeuFPot",
  "key31": "SSwrkcd7eFwW95rGmG4e1cHEi8yXfVt3LbQm1XSvfie3ZWmxJ3e7UXT3W5ApSWjEkqZuyDR7iof22wZigJGvzL5",
  "key32": "5fiLGBDg1JtAozMqheoJdH5svV6coYA4HVN1CLfyu9dGnG5ifj8kUcQrBQFyGLenETv1nFQ1SmGuiBG2VkHip7qC",
  "key33": "3CbkX6jVpzEVuDHBu81Y7s9hHCRfdtFP343EgvFPArUi7Ert3kZXAVgyDKSNFM7bAEZja57aRQ9jtXjFVehdKLkj",
  "key34": "xkkZNzFeYRyMJWM5cFuUgguWm54HpqmLEpjiJcxXFhsYFQ6yoTcZewZNkdAF7tFhL4VZZ7NsQqEKNqskVM5cvUx",
  "key35": "5ogr1Ui5m1oe3dY59stYtDAcrasAsaUsUqnMX99hWqK9ovN7C2Y9Fg8X5rHBVZa642i82XJgNa1jt6bRViX1F6Xg",
  "key36": "BRUNJVErn82hqX4gWDr6uGRnHwk7qdvqAi4Rb59zh6kdYcaa1SVQyqAadeM29rj1Cce2P5uKkTBqGybzWc51gY3",
  "key37": "2mckitQGQbLE8BQDGmY2smKibDjqzwoLCmgeFKRRBmXcSD3nG8A7nbvkdgjbXyer6L2fsySBuP8r2L6pZPB11WB2",
  "key38": "5HrVv8tXq3WLuH6NMDwA2HXNRWtaLFsY9uUdXJyN9rpLv5kH8MFfGqed1edWdJsLCe6PVjFQw4unx5KzpBf5Gv8w",
  "key39": "4UGgLt53TjznZVfSZYNnaoh6Si6oFxiHMTWkpYQeuZdQQpQhfXB2smKLdee22t7AaKrhon2XbYANnDzKgT3ESBow"
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
