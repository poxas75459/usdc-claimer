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
    "4hCGezmjEVcCmmjmjbzCCdXez2PDHH1t7YEzyqexuxvKY3R5xN2aV6ibCmHjCNV86wyGFvYqCpLcasZtrC55Wnjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ns4shEWCRJh2imondYdKpG5xKb7hjg2nyo9uDemE2g7nW57BDhKij4n3kqQYhBpRjiZZn5Hxjq9fckVsEaJuPiD",
  "key1": "3LDDYRPzxWgLdvfLrEkq4AsoSH1sDHzHugXcPBwwmMbctRo9CArCZeZA9WCHn7wcC8UtXtpASdTUEoVJif1gYJZh",
  "key2": "64DdYdQuT9RCHGi1t2A8qAuxepdSqHzmcoBH49Ujcwr5fBNrPtDfT9zsKcaCJrmcji8aunQzb4jJ9eUJfmWYQpa8",
  "key3": "3k7bEKYcCg4Gv1F6t1BXin2GGb2XZExWVLUEjoHWhxmRP6jHP9E4vKXRSKR8PfE6WocnEsPgUmG8K9gDxLpN5TdY",
  "key4": "4irhAgbkahiwj4LKa7Ci7RqSKdTAYfHbdC7kp3xShociQ7vU2GfuCGCwH75kfAodwt6koUbM3m4yyLSdMvkP3xNC",
  "key5": "2ZZcGS5Hn9zknRU87rMHwrpLCfWzXyXdfsEQeTFYuYDkcxYzjbSr2YCokns1jBjo4UuiR9sMXk8inTuvcpj98G53",
  "key6": "5zUU888zpFws43ZWhiRFTsgn5HHdEb6q6wNjCnJkd1eQF7xzojP4yqhdcDnfPj7RVLtZ5CBspjoSrydLgequXw5q",
  "key7": "2z7DfhDhiHmDeEWxAhuUJCmSAQmX8URCZ8LRYrrrXrXoHP2d3fF2b8s2ULGWyrwVAxFd4qtQNv7aYUkV3dMykkvA",
  "key8": "5xySdJ1j6EZARSt6K8u41pVgAyve79hJqdELirMqdxJmmsjoGmHYHYqSiHQ3NZ2hnsXcFrqX85EQWbwU9nXwZqdR",
  "key9": "4LuLM2TwUtn1uKZLuW48y2G6PmLpDKSDbQFfjA4mihnWEsLVjbkzeyAMEDFR6qDDMQQVLJJD4ZgzHNpJLvJrzkgx",
  "key10": "2gRS79m32gkYN5L1m5RuuRZE2CaRAvStkB2UKBpsjyP9Q7ci8tVTCQqrpsyV8LdqyzvoUh6TVe5uJgq29G6nn5vq",
  "key11": "26fQ9Enjm1j6tirCNZ3JDsC8u8LNQ6hNNmLmYuMUxhHaEGhpZGw6KisToax9q1PS5DhfX1FifWtKoV6bFLEDCQyu",
  "key12": "QqbqmEA6G4JmY4mYtjNXAvNy5EaX6Hqhp5SfXnJa88nyZff1F6FSdNqKyDK61oETER1virBBaCFg5uXekte6RfC",
  "key13": "64CvJRAm46SULH1ejYR8EKatALVkPP5mSWerV4iw221BynxLL719tVfLjW2wZidcHAxBeBYn9btk7CUbueTiK41U",
  "key14": "4ScMZ7ZyM6ftxXjvbnGRTFNpTiiajxC1EsrrJAb3FDVQ4X9b3znnDP4rifso1xD1VS2t9ezM2jut2VV8KVUG8qjn",
  "key15": "5ee31y2HFfrhBCn4HhDmrMgNvLdc5Ns2142zoFBMkjVdWpDsKS92iTcAWASsPYppN1v17Y9Su5rmAyNMXaepSvZA",
  "key16": "YqmL2q2usUPnnsgENePmGJgYfMzWRL6NJKUsQzQ1bS6kxx7eMVqa4JqSNUYse13ZBEGsewD1hn47FVXKjS99co5",
  "key17": "2HP8Xe2ixWz3eCHCKEgeWTvnrGkJHBUgwLs82M75eSF6qqpHLq8wre6H4j8aWQFAgBUZ8rNvgZgqJGHxxvtZeem3",
  "key18": "2ED7Efq3jn4KBCZoQBPepQMrfThz7MxSuLFu6FNpsA8eWwVikRcNnyiEQJ5vbgwDuv6g2VDbHgxudYH7zsue6imC",
  "key19": "3JPsZcaBGSUTKcDirkahkt7EPmjSQwXsBzbqWwGfqTEtR1F8aB7AweQp6xMxNirW5qtFqRDjCwFxLEnAnCa2KUk5",
  "key20": "3q7dkDapYhvG2WhTsrzM3edod6N6a6jqb6W5xE8rAcoq2VpD8XzCazCrXVpqAb8aYR6rBUqha9u5hSGK7C14y6yE",
  "key21": "2AHxu2eVtj6fR7pJTLNGK24bA4BZr9W8bxDCYGRCTcMhmJ9GUCrBufznP4RLpCFE9nGUTxPpQK3g7QrAqL358Dy",
  "key22": "5ZkGvXszNppdgNXLxMS2UzptNMY6aGxuQMV4ahL4zNdUCwXbTsgoqhtjsmQZcbsNTbhxHTig5GPmw1TGfLcXxCpQ",
  "key23": "WpYe3K8A6pHxgZ8FwaEVi8Rx4mSEmHRF1NpJybLszHiT99b1JnVmh7pfPz9c5213aY8AwR4c9Sd2BvohJs9PRbF",
  "key24": "5zBWxbywB3NuKmYML7avRtvio4ZvoXs4fuPZaX2BxovioRH8DC7kZxKfRwXzThipvNPbiTRhtXuv3zsn1i3k41EE",
  "key25": "2wC8bUDbgtBtq7uEGtPwhjfk3L3ytLgAUnoQAW1f9z3NM9DEc5QhyNegZCMKsjCAkaVtW5SDmRwPRNo7q5T8LKXa",
  "key26": "4dyjWJBdvJDyffvwgx5vUrLFmtBS8SQ6oRxV1XxbFsQEZtU65aJsQjwXzVWutU3otxNsDLZ4W7RPr6fZva3C3pY4",
  "key27": "2JrvJVaNz6M6j398AyfsFod3mBGEbk98Kgxsw55EKFpHrnCGCYr6UnP2jZdurUg6pEK1Qxk6sqRWa8TU1UpTqeeQ",
  "key28": "o3mbN7EEmPTcTZ1hVLWnwmYAqV9J5cSG2BzvW21aQvnQ4UiGHLUmHpwoUBbQEqaARBEqRKSvKfkCdMH8uvCQKM7",
  "key29": "4KAx7Zjq7ovxAKu6xgj9mZ73ypJyQyqUgBuCZZcZB77FCLEZvePwPohfwDSnrRcUeheToc6eL3tmyRgHMg9pXrD",
  "key30": "cpxJp7PS4bYCo4ZTSMaVDScXqRUNgcvRtsALikESvrpoYDrRUMvicoKbaFX4XEus7Mt22468PJtxVFkuZeGUTF9",
  "key31": "3aGL3kLh7ogK5ttxPYz6m4HYM8Q2jPgSFN467fwckNv87uMT9GekUhwH2MCbSz5vjsjLmjDy96cE5jEMGiWhy5yA",
  "key32": "3GBxhsM3uFB91k3ziv1JGaJQABVP1KoGbMoCikVFUZhFBsbzN9CqCFzg5oe7qxGvGqiARwR8e8BzyHEDmJ84y963",
  "key33": "4r3hyA1UdDv8VVgsVkhdsdXTBQdqQAbXs4FGzkHwaQfWVHDND9XzRaZz62krLcziw31iLfr9F6yJorrC8uucc2j6",
  "key34": "4ePrCgSScXj1PcvtMjPMmSU4f7rdXVGvnfR8SrAhJiLMJjGBND2amdKPuC5rferp9dwCvootzPo6E7a7Phnx289E",
  "key35": "2JBP8zGtYtpT6M2TeMiyg3Eax6n3NRQd76hn5JYLd9ZB4ZwyJ3z4g37GUxzXQS2vd9Gsgeo8J9N44FaYvNoBLpqy",
  "key36": "4jkMGGPUkPRMyb5zXkLdmn3B2A5BbbeHD6Z265ThFhbVDqNqhMU9amjbh6Qoe93dPYL8hgkbNhE1r4fgsn4optEp",
  "key37": "5Vixg2azJiggsyuj1ye7RSDBPhGgqpiR7cn1SMMudwoC3p2vcrrdpGBa1JyG2FSPsqRwMegskxotjEx7S5jtrycp",
  "key38": "5vSoD6vYpfu9GWTfFRdWzwfGuonvn8WZXNfeBGAp432QBAaUXPoPcQteBhzZFz3N9iwr8FYujzeNybRkfJstkvQU",
  "key39": "3ccjxB1ZRd11BcKPGHZa61xCmFUye2YNryfWcCKPb1qrK6rUS56ya6Gt52QGjkV4Ae9B23HpHcHg2AggNa9xaYS4"
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
