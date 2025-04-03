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
    "5MmQ3NrLri2YcUt34jCuTwWW59U4hBc2PoPmkJszNanPbDrcHt9taPNqA5CwoB6mjDasDufqWuhJfP2YPJfaGVcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ZxMdwsbEkqqoAiN5x4br4kxK2QaAgniHnQaSF8Ua4axzoG8n4ffMW3Tpw2stnAuxDd2FQMMNpn6uRjfE2G97ZJ",
  "key1": "5QD1NEtTuft5Dvee5pGQui4Z3HhQhAvjmWNWxKfCHmnx7Z38y3qmGiY9dE2W3tvNeAyUsN19ug1rCiguN9Qq5fAp",
  "key2": "3rLVsWTcFuhzw54NEb3GZm2nN93TCXuCYAiK2LhwMy1z74k2Ke3m2c4W5kXGaPugsaurAvT7uzUAuYCWoccqL9bG",
  "key3": "F6snoESUsacraxDT4iE9VFBPGLja1PWHWhHUyfBBZKXS8gJDQWBJSFtnv3MVELhbWbDfrKyegymho5Whk19iQpL",
  "key4": "YXprG3pLQMC9FmKKNefuT2Bkq22agREj87tiXfNU3fymSyq6XSDovJw3V6rFumbm2JKE9pEz7MFbQzA1J84f2fu",
  "key5": "4hXsW99tbPAe2EHVU6ytBLjfNoGciasWxLSHeU3VGbpUWg67EKso1ZW43qN3HHKv8e8PZjXJxNgGJ3XUSC7RZd5W",
  "key6": "35pPqxCWsT781JNCkn8mdUS6cifKpAHjyXaR3Aqdgn53UpZ9CTnjzUSGDybds96ptbKcMmr2mBhxr1RaNPJ9oW2A",
  "key7": "S7rXiYKwYjWMV8aYmueKnZR2aj62RgHBqi6YdahaafoRQS4ULayZjguKpj8zwgYGEBH2mou5xin7ADL5nsTqR9H",
  "key8": "5T5iKuNU6gK4wsmaFQPmQgJpVG7f9iKPxn292SnnLmGQY1B3JD6qMTxaTxgxurWG94bAJobHtKw8t7srGWSCHUqB",
  "key9": "3oJdmky2RwcVzCZtn1tcYTexnBbMkPsgqQtTZzC48PoP8m1g3fFAjqCYQNvXregdyMY3w2MG9PavioUMLiqpxw5E",
  "key10": "2uiwb6eY4n9oFdZh9cFksLemVSAhdYwC63i5vBkuWENk9YpAr7Swwo9mcZLLPz95hoEiDnmifMagfYzV4dZxEA2d",
  "key11": "4ZB9HaGwDmr4Nu4Nq8vK9nvBjzDJzpeZFDKi3QLLfaczJHD14UU1VFu1FWiGpZyBcy9wDJsQsNBzWGTQANnwjVVU",
  "key12": "2NdnEjh1XbUrRv3StEPPFTHzvFpJ2uAF4Pann4FdrqXWEC3HD6SKrRxMUCQRSyhYzP6QKkwceWVNKgqnDQV2bxhd",
  "key13": "Y3cceva6YMXpW8rPvEY2Uejuoz39TE6gzUbksKAHTb2VjfeDoCcXP2VxBMhYxcB1QLejGkrGAJrpi95r5uv7YDi",
  "key14": "3c6NMXq13EPgrBtMQG9UmLJA6cmN4dUHehDN7N6yzTAMgmK7REkQhVceW1UwLcg4GvmrfLizt2APkxTLU2T7tmEY",
  "key15": "s1pVyWFsKCdonP2P2xk4D8JUcgvyX4nDw3iA9Bz8tZMVZ44JZcvPavMB5gxsWWffcCpfhsHqeUysyMJMFi4JHY3",
  "key16": "65FKQX5a6YbvMFFcyzdePVRVG7AUh553dWszsdtpgyVdbwxMMqyAcvwYj3pZ4dFTBAdcFJJbafW3JUjADszW1xwG",
  "key17": "5CUyG9eAAnXkafMGqPWayzmHUkZMdEuKngj4eW8DkGQLyxiyfnQmzifbUEXArMbFfvLKnf5vc8FSpMqHCXSjDsuN",
  "key18": "2YBoZeAfDLkerFck39RuQaC6rM6AZxKdhyg8DiBp8eAHX9Ny9bawUo1gULcbRcv6MzuKV5FEPSqGG1pDarZuPC98",
  "key19": "3SRkrh6DBw1dJvGNsqBEzVXZEHBpgAEKFsHPRq2agT3WWB1E5QbswL4yL2gMeT4Qkh7p8oi7eTUum449jTRSXN64",
  "key20": "41T1u73Hahe6KRKgttj13gc3y9AazFa87JoXWJs6EqHXREy9fCQqiadAf9h1SVfSn1qTiMV8khYBHTF8ZVWf9PT5",
  "key21": "KGqWxhxUzLZAn2PG9TEJxQCiRchgMgrqpW37Vx8b4Ys9ZtrQLRmST2yfAMK4qRRU85ZPH4UuNAn7FRXJhoXoem7",
  "key22": "42gwLbVUzHaWLmRNrM8ZkvXhXvU3QTsyuJHmkdpwEeZ5KqKWX75qv4yTVbMQj3sTGRx2b9KL1a8p3J3hr9zFgTQe",
  "key23": "5bLg1kVv41exkYXe4LMBmuVeme6PmxX11K9qGockbF7P83ZV3VTxuYMpdbQWkxVSCTNpoKmKmKe3vBtxMJ96YaMy",
  "key24": "cfPEfi2nj4eR74ZW8mS7fnBNffrbDA22ds3g9BZWNzPUzepyVafVdBYY3ZGpb6GzpXcisGqaF1twNFWXwrhjffm",
  "key25": "exmHBMG1iGqtKBFpyVUatq72C5jgF1Fh3ietpyuKZAwBvaj5qT9mgS6S8Tx8NFhyKfBxtBpSxEaQo63TPcL1DN3",
  "key26": "38QBZihgieFmd8bm1nLbsG8eZUqnjGpoJqoLXf9dKsyZPAt8EgwM9hTkLwPaRfvSkYBGsPy2wp1PeKJMzBSaf5Xw",
  "key27": "5tHEZxhKwFih8sxmwMV4V8ernUgkXEDgsMQqGSxzHarn6csTWEM935fMN4bSZJxdyRjfe2sBtPYzKbFtn9dV3cbH",
  "key28": "3msGqg3P7yBJLmjLfcUiZ272zXp7Ecv3uNhKN78SrjdKp3WGVNgqZCQUeFVobRpb8QRjnEJMtD3uE5Phakq5uTZk",
  "key29": "5GBLmo5SJFxfNZJyLj4GqnNRvCU7jXLHRye4gMDDy91hhLARVSc1goHr9ekqqZn5r6nrdGXogPsp2R6xNshQohRv",
  "key30": "4xuxEZ3vCkjetjENw8Wu8XppupxNBwYyJj7JuTaTp424VfbzvNnHv6pRowSfATLBS1S1hWCVEZXfrU9nKMDAD26e",
  "key31": "4YLnrAf9iEwo1CRwLRr41HSUEgumTUXZ128A9HKttQ6gUjUgGVaHS82eeM57LpZPXmV8oeFz2o6m1qvgw1oEopTm",
  "key32": "4dmH1gcWkcoGCrkR222XuGmHw7pMoh7jeraLvBo1FpnppoNo9DRhQNevAUj4gbNAfJ6sWp5hztVdomzUh49AWRGC"
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
