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
    "3TsPJNHiCuog2gSKGHxtUjsDUctCvtFHA5Lzr6q4BWz1Lfba7YjFs3y2i2qgKcYk2vdr9hfp6BpZzHjudnbuV6Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAAmwzaNUkZsXBAXfsq77sa7c48yiQkbcHJDQEFND3aBAXv4FQvov1DiG6R8AhJNbxrJnskVZDawgddVCL4pmuS",
  "key1": "3hN4itPQjppyCnYMZRdNMNAEiu6SFnt1ed8yA7EnGnX1nq12eErt4Y6uJY5pAoxk1umgasb5kJw9KWnmTvMBXWpp",
  "key2": "3NS3YeVkefUYuhk9U1ALPfiCb7yaJqxxKcaC1KARHf19ohXRXC153LXHdEWhLMWb1NuMpa8j8kHZJqKx2BuR9NH4",
  "key3": "5KqMiTb8esaX91ecAzUcv4HmDwsdQ7XbiPHz6xRp8PeewhphP2XyGkb3dWNNMwAQK9yTiVhmGEA8BczE3Es3Lz1Z",
  "key4": "28vBVhxCF94dhwehg1ovMnBtptxiFxhFf2pXeQauxQyEuT2yF43Su8VfbMykhdzAQ38FXWoeyayYj8gs4NondQGQ",
  "key5": "K2YTxdRitrNvKjQDJ6EpYHcz64SvNVpbXqofNsHy6k3n2hu1APs2G7FisRvvTdZYQPqEiSnY1P2r5egy8ibVQom",
  "key6": "4LXWFX1zQmq8EmaiyXPoJZvpP5BFEZimaC4BX51gmPxG6G9ipJmM796jndhmygUqPRDJ8iqwMeP9tKChnTiPnxQZ",
  "key7": "4nYdg3Z924h6DKCefpNrGXKTz9mMbtSQC7rJonCurd7moZVVyxoiq4JPqYpX3Nt5Kfmhmr5Axn1SjJYcBcFP1DoS",
  "key8": "4MKK2Tqp1ZWz2FfHBqL5cUkzAiHJPUw1mkMGbq8uB1uMWbNZyyjJPJ6ktokSEQ1SJjMqJJcrWB2M7X6T5kSeupaG",
  "key9": "3ZWNT5ciDHpEEMgfVjUfrHvq1oB8B5Nr2QxeLErWd9Dz9GfoN254Ri5ndRttreertRVQg4tXK1iUCKhyuULhRarN",
  "key10": "ZmQbSEZHJ4hpx6SGYxFZwYXZ2RzV22qwnE1MNVuk1nyqbeP3A9aVpbeqxcBAiTVxAWwvn3oxi5Yk8EP3noZfmPS",
  "key11": "5egWGfWLQV3B3HM5RrYV1K2So64JBphPE9qJ4oQ2qgp9hwRMXS4Dg38oJkJE5JcnyhATWhYvroqjcRfN2MNzCj4r",
  "key12": "bH5PDyHA67ahabLU7qJoU1BxU8mkVWyUeLvDbAkVT1Vxa7PrBkvyn8GTRh2LeXB8uAi4AzENbjXxakifdCDSLLg",
  "key13": "yFnc4CbssftbidXauaRvrzGFv1ckdP6fnRCZ4LEkbm1EM4kNPT5Zn6NnxrDUnwsF7wZrwMGNFZbSrCRHbfYSAQs",
  "key14": "32tNXUBCgVCERJ5oC37yc76Cgt8xmuBUHEP8hgBnpZGZ2tV4MdbwPKXNrJVg3K5WhdSU9ws72WyrccgLatRuNLVq",
  "key15": "2Fbi7FUw9RWPTcf9MS5hCbXBeWgeUitXsRJks1jieQDY9S1gxtwbcyShg4LQf2Q7ngZVDM89yEq4XhQ84EWWdqTt",
  "key16": "5BQ2JJfAdEVhfeZKUA8XCX2F39u22jsj8usVZJvH4k8vvcdxnNYbej2NEwXf9ss74W4m6yxYVroT48B4AJ233LSn",
  "key17": "4Qx6dyNBvboXjrog9VirKrRicY6RHiFKAAzmX7JFKVN1xNh3eQDC9VoXAzd4uZwHGATEBNn1F6eFkjcmBp5J3QhV",
  "key18": "4ZL2bt8nA6k4u93XnWXhGga82BaH6vJkY7zkTYAWzFD7WUs9Pq5Rjs64QSb8f3MyRQFfzXpm5jDwbTmkCPjyGWyr",
  "key19": "4zc2FZmSvsxRQuZ2QruJVG6Ur931CUPffpyCfvdoCf7kBEMDzCNDCiaBoFf3UCkBwwHrgSWBtveiSWnc69zeBUAr",
  "key20": "2eD8k53K8qGv4LycFzw56Zotnfk9dsgEfWRJVK5ouCfmZDdNJZ18WhfcU7mz3Ay9oJ58NVx7hMWSivHbVgAhD8Ui",
  "key21": "5T4czB46tYHzoY6tFeEoFoQfJ1oYS1SQAYmfz1xASgTuiv8bfeJ1WQrzWpNCK4QGeTYDTXwR1nvTqipw1D6vdTBs",
  "key22": "5vMynf2QpGnBmpa9pwy93rDmk493ChUHHSNb3s4S7kf9BKTjTfRixg6N8fpSWk94ARx3FbDQsAk6kkVjd35wGVdV",
  "key23": "5pvGJECJTYzipXkmpYwjzAX9Lj2reFCeYuC9A6dKMYxBe5n27eqWEwQxBxYRUESeaBLD6kujwCpS9V5wGCjUPZC",
  "key24": "2MShEJLGQ4B5F7d4b6ZLE25zwKF1FkJpJcedLTGycjZAQ48RTUz5bFUeYJrHpt1soxGukRQjmBQ86xQLVPBtS7k9",
  "key25": "2njAzw4sHjceBgZ9ZhgBhFxpWLXAemAwcq44ofokUjtvUnRyu8GT5K5QJWd9n3tBQqfe4mfvfT19H5HetYcoZG46",
  "key26": "4bVDBUh47gzybdnuaGkjZ8hDEFhthyaRJosqMdVHP6awTwTcFRw8mTifA6BpWbiipdcSh2eK6fan355TVYAwmLjf",
  "key27": "2up2vwuia76HdJBEuYFxhfj1qe2sKJ4j2H7bvaDL362zR4eGQPsiKmeBEwBpN1MYP2vqoh9KgQ6XXCqsgBbzVjuz",
  "key28": "56U2DoJ247eQZ4Aurc3X1pKRnSrdqHfor5ApggCrRxYH1oS1ygWQVZhRPnGQ23FaRmH4WtzsEe2ydYNAFXbHoeX6",
  "key29": "4uU6A3ato8zqdugfLMBvaJYuUsj3VagXmBhZpbzkguPNtd6vF8nKP2FaSb6vLmZfHNg93nUaJMpq8k7Aj7hdvg68",
  "key30": "4BkFqJKctjqK24K8h7ejFSue6BZ9ub3pd5hoewxCFXj2Wi9iP3HoGxA4Jf42wsJiaX7ceCcz4SXXePTmz88CPzbX"
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
