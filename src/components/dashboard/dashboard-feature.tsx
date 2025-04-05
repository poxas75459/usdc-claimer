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
    "4oAWcP5qi43RBcrytMQHceqGHhgFVaVU3XMaM5i3erMC9AMeQtxBJQwYeDPnqHJphWSCBcUgWYa9rneohwEU6Sad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QCGJVSh8nxYyKpNfh9SPfTyLs5FD1S89W6kfn6Z2S6nQRcAiaY6Y1STjNMmFHaeiCPLPz9PkRpA6mZcgZKmRTXZ",
  "key1": "4r6LUvfdXcn7MiSvxafqLWXohxMdiJRCus6SuAfHfAJQafVbZS3WK4iDXpVE1rEAHBpNtHC4yymfxu5gsubU8nvP",
  "key2": "2UiQYsEUup4E9d95capNc33Vko56pXkoCup8K2vZnxH14KWN21zGkHWy14VxhJ98o8YnRMQicwuf5VAaYVBX5zwn",
  "key3": "4SCZCqUDr4f4UDs4qbcQCCpUSx2qqbZ3Km4SProqT4Z75EQVEePyRGDpZpmPUKxFB9xnm2Nyha5qSLSYNEdQbLHA",
  "key4": "5XuWQnSnsqidUDuSHNRJc92Sz97u6JooJgeNihXeBL397RDJGqTEcM7CWbNdBLC7c277CC5ewKBx5WCL9nkw3xkD",
  "key5": "226qp9YG5xpJySPm75N2LgjKke6JKPi76LzMoKpuzWQPsiEYQ5j9R2QiRLY7vfcMut1CCFcGjwZeFwL9vtbeMauR",
  "key6": "3YFQNLx844973EZqC7eF6rDo8nQfrE1mBXnsBryDjoUvYdMq3c6B1Lhg3uwVgsGt6bBpQkz97GhYM7d9EzsqsUYK",
  "key7": "j1yshm91X8N7JaC8GVkoocvgUEhWoWHmnpLef8VdnE8SzewA9fnqoLAysME8XeStNyet9osrUC1Y5RnBtiFbGRT",
  "key8": "25UJ2bc7VUTQF1yJ3cXhsogjnBEsaZ7bnDzYis5b719SXTHdoHxBDXQHRJpmz2d9kqh7NDyp8TpimpeDpkQvh1b4",
  "key9": "2cRWFGgHYdSomNYUr5bkPRmykTeoZgLKxNPCocPGqAc9gunHNRWySgJtxxVm6bwAtqWGAbT1UJFGieb6uLFvLGwU",
  "key10": "3aD3xAuvN43EbURFyJ5QP9L6c1gtVij9kuHGXj9nzW3Qgkt1Pxesrq2VzJUqaWz2ExUqZfF4BYDwG95p7HtoTubw",
  "key11": "b8QAaHmSRMgHkVoqPYwDtyAutTmR9WsbuDeoPmzbkcdmDMmAyxhME6ro9HYe23PUAPNujLPJFw7cbvotTEupEsN",
  "key12": "3yTGRAg5JFYU8mnqYhnnXRFRkLx35R5vcZrdJe2ssCJ9UQDKgQgoHaWWuWgLEMBZtPh5FiMRuNYH8aQFNvzuhiyZ",
  "key13": "2YFHMuNFyvZDW8YRhHiiS6hxe2rZAsqw7S9uS8EgeHxsKccbWmtjNe5gPGSmXej5R8NQ4spE79RUfho6ProNpNLX",
  "key14": "31qTuvBrzCSEhQuFk2ydzGimsicWRKtgHeuKYjty6mQhRwUorQ6aojPUgyBNmkvUMunuqa45MMRbS5rDJx9Aoyg6",
  "key15": "5TiXqoefE1UNxuoBYVbcem173FiFzc1QVKARsGkVUZKf9JqBD3SgtHy56vC8x2uXgcgq8LD27ZfoBFFvKBZesTrG",
  "key16": "HDF4AqLBb9WmKxSXi7LT6aAYgbCw3JWYLXC86SL194vQUvFjwR9krKUY7SibLpx5AbKBBiMJPjYDf3KYBqnALVF",
  "key17": "4QNhKaHUBGi4PrmafNmrbr2MCUP1gTjCXsbho6B6q3cXq3ftoBydz77wKNPMpG19qeUg2ge7fyAWEXkd4P3NXuDd",
  "key18": "4pVw9CLCykSfVxXQUwEsHLgucQp23TZhW8WP4ZYzwhux8TnYaCJKLNK7TrFgJFsvNGktAC6ZuQw5C9vP7LR9m4Zk",
  "key19": "2guS58x7McgXkVj5u7qDZi4BiR8DQnuZyndTGaf9uGqg5gHa7hup6AxcaRWWELPzNfkVKcVXGTs6ZNS2HVbm8QkT",
  "key20": "4UPTeAvfX2ucJ7dVo9FWrd1PWsmnz4gKk8yGPjfbheex7e1W6Q7MAgc5EC1rrZXk9ae29w2m1m6HdKJDecxUtAM",
  "key21": "4HJLJAJmXVuzge2oGwd37tRBg7ecg3HusoJseNuBzjp9kbTT1hry6mgz9dxMB3LRP3P6FFJMrYzuFKHqVJ6jxcCo",
  "key22": "239hhQeP6CXRahtzGrf6G4HCaSUxQTPVL85py8fSnWWDSwGpkVnA26rfp77HeA9KTkFkyCjHryhd9ddwfQKi9UD5",
  "key23": "2rbgzRUj5csVkQEpfECxwSNMuk2v58EQFH4sFKBSk3rQugyd6fURmRsj5NTMKvfoBvJnicsLp4AqJmoXJaRsKurd",
  "key24": "3whbhywDzodWYPAmd26tAiu9iWqgN3o6PDuVXud5JkvfFzbyrWfcKycXTEmLo7bM4YuzTaiVFS8BQxtek9kbScKs",
  "key25": "5iPbwuScWZRimds1FZCsPuvX5eWGhagSKS3dGRb3jZGHnHTqSjidLJjXK7ZzDrgCQ1Q2bjZga2Cq2Tp9YKoSwkjK",
  "key26": "5CGjcsqcrZryrpTcKFwBZv76pmuTqq2YRszqr3my5v4uVdxgeyHbJfkUqsa6REbkja7ryWMBfbKdQpYQNx3943XJ",
  "key27": "5W5gJBCoreo4Ke7xKmSkwvUXaQcT5Nn3MQrrgRLpVDA9u7cCX9YhYUyFeUiKiw33tdjwSqzN7ifqQa8BRhB8WujZ",
  "key28": "2KyagMTSpBFbXVqKtMqRrCbo9JVXjpPJtB5d7FYpC5bEr79mByPhjJCoyS62wBD1kRxp5VEeLQbHa1T3bHJ2ym7N",
  "key29": "3CtdyXx9Dt4ZsxVvsYcw7PA4bUW15cBJhgxKTiTmCR9eQkYY7Jc45mSmrpzgCZsvq7N4tMa2nL5tTp5zQMABd8vy",
  "key30": "eD7KRT8xgo1CFHMoj6JbCfhsdrjcJ5KopdLMvVLDNifk3XhW79aSmfohSVTKAdmUSoeA74zpD8rqmtU9HJoATgx"
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
