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
    "5GMUj7LEL4jtYFZmmAgaLxP5Fv8CmT1gFCXRbt3XEoghJ8qPs5tV8Tx9zCSgqkxQ2yPQtVdFDRok5SYW4smZviT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bnyNvfid1Y7xhJdzBBFeP4gFZdPWR79ZnUyw8AQskg1MCai5nrtxN5zSmrSDVt6Gr58sekbPmiDqANJXeUdjxzA",
  "key1": "3cdzn4Q1asUCJyuXQiKxCDHbQkBixW99h9QFeK6AF8uyhd7K34rVb29qdWoziwxCREBJJKsz4UJ3Wd5LUWM5tPb6",
  "key2": "277C77tTHXd6Y6abscUQaFi868puoueDri1uRYEJyijWgJthuRsYvejVuvYXZcaTDovEdA6Rxe5XQuY1hmdsVVjG",
  "key3": "2srJvcTJa7VH43HjTvBMTPagFUtBE2NLxUSwA8LrRdGbVrQVbdqsFiMGargmNunJ4zxfKKNSRrvMtepDERBLpfpk",
  "key4": "4g7zL1pjy2Gr7MR3Ux6NV3yTZswF3KuwmBrzGbh45rKjT814xQmTUPip3GhTGXbHkn7k7Tpxyw4RBEnduunpKGGK",
  "key5": "gzsiqw6mk3WXK7PN5CXYoCzdMS6QLxeHfHngDnRua51o1oD1L5WWPeaVkhRQ8EQ6RYn8X5dDwKsFhUMo11NiRaz",
  "key6": "66yCJaRmgGHuyM8M3h6Q21Kskk4k7Kqx5wPYAqHvK2d6QyTJRKXjvB4cGrq16uBz4ABi9UJxXBvv7Q4o2kSgus7W",
  "key7": "2cFUcmTz27YwQFrrFkufoCorzudhEJJ6CBCDeig9c5DrETAs4V4wqgzAuJna7dTQS57bEoKueMzb1U9M7WfJCKE1",
  "key8": "2KnZotP44kvK69cJ6B5CQH4Q4WduF5iWXVHk9UKxjDoX5giWFjNL5SDvrnioeBxzzezLoYFBLyYq38XAiQKTjFUh",
  "key9": "65uCz9FNtimsgQ3x9kLSgkcZeXzEjVshskj5LHtZ5C2KyDoiUj2N4bSktM8xYg7d369f9wcPjNqAMbFGcNPmvaTw",
  "key10": "9WTPfdyrEjddusufGgHxnmpaQJ8TXHaH1zdXc4795t7mg9K15p2fL8QHTzKDgKzLSZyDB9PLE17eDWbQBtdbooc",
  "key11": "W4fJi4Q3imWfVv3zUB2NeppYw7EK9ERq3NoVyaXCs7BgfxkHUbM3dW8CYKor9qL1y61P6Sy1wGCQax7xWHPbANe",
  "key12": "5Bsf1nU5wPz7LpX3ZfrbMWF7iT35URbgTVcK3StQUdV4vFBPV85wpHftxTCNoLC1FXQwnFPuPMW52SM5q4WKTcFe",
  "key13": "4rj683w7C4AFipWkKynHRqTLEWEsuvwYS47ogp8hAmJQuw3arhe6bjZjSyEw9DFFxUN3khN4tucmuyVWGoyJr31R",
  "key14": "388X7px3EmodANwh9EQGirJwpUYVjt8FG4v3rsk6oqLBC6miQ77Qo4TNrKG2UDGUGgfovC9UbJPzZKdcMXzMUEWS",
  "key15": "3NTxM6vFffNtpxA4RbdD8hx4mrt6GycLLRifb4rAqSSmpMzZrAStcXhgp6g2SBEBkV84UA71y3jyVchd6quT7mmT",
  "key16": "2aGxdHUo7zkNV2mdvBJ2WAa7DSLQLwNGJv7CbxRn4vgjstDaCsXiMHBxp3KdnVwpReSwbJ8uJt6XFPEnyBzJZSZL",
  "key17": "9RokJ6CWqMwYtCKwxFF3XvR2f9ZbQnoGfa7PfjiTGPxbfMkMbp7B6uvhjHRhYYvSNUyuWqpmT7drrMqiFux6Gha",
  "key18": "5sCeRz4fu47i8KSnWJCJiUmSFv9ZrNWTTjirJRR23KNsZWsbgmmBBiXMJBumWF3Z8fsHeDj6sWhKc6hakJ3mD3iz",
  "key19": "3nRuokAKghBiMsLEjggPUUdQHgPUjspZVH8PABo1KbyRgaVA4q9kW7cNx2ugaSEZ15z3EJTbwwQwgdSx5aKJoZ83",
  "key20": "4vCqYNLYGij67L5kwp7h5hZKTZXw1X2czonjEhGoGT6NTTDUuYxmwrfqfmxT7tSEocWV83mM3KGmJekwNxQdQUwh",
  "key21": "25Wc6xaTPvbhXFocj8AT1aEkyjVmk85Fsj7zsRx9n8ZgdSHcLxfp7t6dbsSLXeosf4CCsjrjpmGr1xHFaQ8w7Kxo",
  "key22": "2CnJkA1fEHN2AkUkvV1qoxUkoFytub9zgri652QE9b2TDGMjEuvznnD9XRmLPjRBJNRidbAU86UFeaVRb7WvnCwC",
  "key23": "3U3LzSPp7yMJmbZhrgBNvw8QmgZFHNkgnmkXFcbc6qQ3gKmz6uGBb5e9uWMLMMgwCiPA6bDy78XGX2uWSyGL3P9L",
  "key24": "5T8YgVFmQfAfYDXT7ududnpaRDgiwXpEKmkCEPHokKH4xDE5p1wdkETYddyfUwCfKnb5nzoGzBFbHBcW2ZoEzea",
  "key25": "4MgZTuAeuwKKiM6n1Rfc2PUAmzE3CewM75SYAMCN3jtRAPTyVnx2AAkkqPfPTXigjoddnEABEhcnyVaiESPWMesa",
  "key26": "4xAXtTAKm3H1wudLY1vYTyetBMDd9bx4dSzovRuSiozcHCwcf58zgDvmY7ezX36SXkoYoE83Sk944CiivmigAPVg",
  "key27": "2X79xEyeDhAeterAgNLpPhL3G25sAeZez2DvxKhbqe6jQJFDMqsGNpoWsx2P9dCiuGmprsRZXQbTxLucr4FCNpGN",
  "key28": "8ALmnVZncsgsEN2FcaSkrJXnTcqGjBTkG9D8k28JGot7TmoXWHYmeikMdhw4tGpA4e2EiMg5S8HDifcvzfANKso",
  "key29": "3VsbZT833K4B2yr9WUHjeBUpbi3LsofcXxnNomxMMhG8KaL4Y1aGFL8Ho2Dgf13edeqMzJWNjbW5ZkrFWxPDhz5p",
  "key30": "39z5Wuo2jA61bQwVzsTzYuZVzW5oQg6DezuQHpkqDfgbi9jPhjG4iomoSHJ5evWpcUHKCe3GuXLUakV84GuBtihj",
  "key31": "63ncBeXLApz8cHhEgYEr4foaU1mL22mr9ZNvczWJD3WpvHmTu6zShKdc2PV3bGZpSySTCwa8XJCAFnnXjHNayMTe"
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
