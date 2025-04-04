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
    "yzGBnmRfyKpUH8fA5aBULxZXDuzJaXDu7KkEsGbier8hYS88FDehv45Qq2tj6JJYmXawYcP1C2ZvgAm2xs11yxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfL5S8uttAPYfiWp831KMaKrXQSDFHL7AZv4VY5ofurDtLRmB9gN1pL2TtiHoqkNEumXgCpgG5fTvJWXponQemK",
  "key1": "4s6XS9wWgjB43hLAX3AhVUpNo32DvsVVAR9WxP1Z7fesWEMCZc7naHDzUzjUFQWVPKTV8cn97p8pfAw6WRfm6ADe",
  "key2": "58boVgdcV3U3Cvtd3FDUrAScrDjSN1wT2gXeBJNczUu1k6RHVDJrbrHFpjnYXtV9PsNopKsLue49n6HBuZsg86PS",
  "key3": "SmSt1VooPYGsAzXwrQUcM5fasr4gjfky18fpA9wtqPBrnbGarwXoe8V8Gr2myxFXiLxyAM9mY5ykKhDTjYS95VX",
  "key4": "4cCKwBimjWuvkuhLZrZkLpo1CkgA9uk1FYuHxMbCX7V3tmsX1LyBxZkcBJEYWH899zc2Mhjr7rZvti3EHHqsjv5L",
  "key5": "48tiqpSTi77WkrnxGPQxVAeiyW5s4bcvxek9d5Us4nGybmdMWtHWQQGL3rrr3BAs6y7arkSZg1rhmyFwYgxtwz82",
  "key6": "nKXMyEJ89pMAkfenGdcpsL4hHKWXT76fJA61rw9PK7cJEzdeXgr4QXDZyvZuvs1aAmfbiAymWeZbHzDtCq3ktYN",
  "key7": "5UE7nY3GJ42z6wCPQpwgVVp3DeUwigfLkEJSrJqBNfJbMXKDsTxKrtShXx4cVPJT52ikBfDpxhimutwMkw8bFTQk",
  "key8": "2PM4kTC9LCaaCXYLHpCj3tHYnUsgS7cSVsXi7pB83CJipcBodQwo61gGCeSdBPJTZtBfaqDjz1H7ywHCxdCsBUUX",
  "key9": "53GTadkuLksTRw37MJdPCHPth3EvfWeHS3qwE9Aaa64XN67EmuBk7xhi9yoRhMQT6jJwbufAdugzub6x8ZcUyHnL",
  "key10": "4WFNydp6hFRCpYhwNpwLjat6k9ktycAVTFoJ8a6Lr95TtBqmxJR5rkgq9yy79aqFBHVkYyG7zwxUKAbiLA4xEpNg",
  "key11": "N4vPt1ov8APby97QRKnfR1UQC1vWWcWawib5pftQTZ3rLH7oZuq5SCuzBEszLFZU1Lx6xkA1suTqc2t3UzPSgSt",
  "key12": "2pVwzU6LHcdX3VwRp2vsUchg4puRLDY6ku2kDhB8qUFZuZpHJUicqpgcMnbvTpjW9tb3teqPvwiXVaFUnVjd7tD",
  "key13": "4TC1CfuxLsTHb7Zd6FbuVtxLovs4MYSgDrBLV67qzdAdyPWRVs3piH7yVRcBz8pTCdsDWQYU2JMpyk96BBELZNdJ",
  "key14": "ZeqoJA157MtwFGEjDDkhHAjGWRmqNbdVY9Tz4qRcY5fiaDe4uDzjzzgfwPtvEh5R1Z8KFiozYZQ4zvtK3Fu8jLD",
  "key15": "eLy7gBZARLcENZRtWWXrvn47XKhKt1hwYpFnuyFx5csTQ8ZYywbkXKCFUFa2StqCpUucqBekQHXWfMmY4Avgwdx",
  "key16": "5ZF5g7ob79vHCApacit9k5yB27NJiRu3eQ7B4atiVwW46eFGyBPg5H2bxXbv3ggG23VunqzqXaerX1bWWvVhifEY",
  "key17": "3Ves7TjTiQDVmKUTGtzjA8HJcVDkV71HRpjozrnub4hbvgdd4ZFo7jFZvhNMg1hV1QRpFf8yiFDx3bV3g7peT23n",
  "key18": "5V3Tbp2iXs3CjvMfARZtm7CexMeEMpwdwvBg9HiSLTUNuRpctsAPoeUaGVN4qpgiEQVfoiYewYJsSSuVZ6j8pNx",
  "key19": "A5hK3cK1y2qppnuYBphKwZAw7qMUb1BbanCfQSP3cmnNvVKLmDQVLpPujGzj2p3i7pHEtPDLmhERFBkQAgmCcjx",
  "key20": "455BjEaqeu1d9d1Yqcyz4xYEouD7PqXi5c6LekkJguF9jNfPqTqLeDFdn4JRK93zFA438hAEoETXAZSpJp3hre4S",
  "key21": "5e8v9wRjQn6UcUzMWgvHnGvT2b9F1nct6nuz8JqxNnFNBfMT3vgvPrcZ3NDMfPjRrwTaf4wMX6ViWXKm6adt1ht5",
  "key22": "2kY1ZZSi2WQZ7Uzf3oH5GNrwVqw64hqhr6rZsnypCypoDk11w5Pu2xzyDC6Beyscqm6zFBiDmy3Tg9jLHkaG4RVh",
  "key23": "5AhXdusa8LCSowVigp9YW6WxqLvDQFtpvtSrwWMy9L8twhLRiRwJkg8WBPHrfT5kRtFH2ZaiLXYwjUwZb31ypo5y",
  "key24": "3yUh4r32drxkjrEWqkZWNDVzFqTV6ocVG2ozHxxLQ6oW5bZ1zEW9J2NwThECgz89kNMd5m1b6PkgEGaQmka3UjFK",
  "key25": "3M4qhzdTRfu8epZrMqcMzWHj5Zahk54aqBeuN3ZvpqX2sR5mzXLr99ZtcNN6c8bHb297vhXBdvNpYfJbMm4wcE8C",
  "key26": "2phiJhqsZdhmNXSkqXiKViXzUG7GBPLKDHyzuCAz2N7pt8tbkx5ENWd2Uy31u2FFAY3a9K8dcc7oMm4m39Zm9pdj",
  "key27": "4NGWjFkugyAAMH6jUb9wg6qjME7TPntVECqqMWy7tpSfe13Zn1A8onVNtZkB5AkJr39Mrbeie62hJSbMZJYJ9kyB",
  "key28": "4G5kpd1gikuiWcRQNHZHAQ7WXZVDdVvJN9KABsr3qnJ6LVSxwMcLYMAhCJVqYAnWggy5f8nM9C1Zm9rj3DAXQrgb",
  "key29": "3SToBoW6dN3hY5ZkdJkjy2JXGSQfa56nEg2wN4oRuoPMCQ8LWK2aAs9zcM5F5ACirEAsprb4WBiwctXpTNt75DRQ",
  "key30": "5YDA7PGgyhao4EAr3LsQzmNq8RUiuXAh99akaszCPfBzeqcKXJa1b1axVen96spZper1JkZLLbx3gBr7JYY3U4j",
  "key31": "5J2BRMjJZZ8ECBsnCQSZ4gpwp86smWr6PXC2ZFUf5XrFDBgZcadfXz6opiE5h5oihkDgYyhwTttReZVyHeJeZW19",
  "key32": "5eGdng7Z9hcTeRoG22Y9kzi9qHa9ebxUwLUcod3FLBW2VWMad3y6TneL4bEmhu6QyiSXC5VkBouF5Egqv7prv2CZ"
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
