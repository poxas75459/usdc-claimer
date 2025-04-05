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
    "5jsZhdeG9V3ffW7vVdm59e7N91Q4tBusWUSyhT9su47i4ifPHAdhwWZ6s6u1UdC4N23LdYaYLuoW2E1cnRqQoQHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31LWVcaMB266tM7Cie922vNJwXz7HDBdGFtM7UiimKenrPtcbZFYL1Zh4EgUEEjAQyq8WsqgHrTcuoyHVaP33L22",
  "key1": "3LCBVX2dTF6UsJ5XpJ9dXmsLhDFiRjiJZWoMeQDMKdQitRi9ifHuHJpZhWSsRJ69uybUc34Romf1JYVA6r3Tokx7",
  "key2": "4Z865yXrvD18SQLzhHpeymLsnSyHbz5WdBywFYBnTrMuSqeiejKRXhCCcbb2FesZwctXbNZLBkPZeA3dka3e94W1",
  "key3": "3vYNYGXc3cD1BBWASM4QfYki2ndp8LhTLLo63rx96ha3RwaJd8ayPbeGtsU7Bq59nGcwDGxin2A8Y6Ph1Ph5G5kN",
  "key4": "v8c8gh1W2ybRSV4BuRpystgSEajzhuxQd1SrkZPkxdJghAwBHt3ZuLEsHghNBTHCVQ8kgdj3EnPzc3jsXqz6eHU",
  "key5": "129T1LQaAPd8KVCu59CMsvoXtdzgBcKmzrsej1vPHSQJcugzQ4oNxj4HYAQtxHMnweXPSYE8TXdTQdDBFpm9qtuy",
  "key6": "zs4v4k8r7LcvFYn4NJe8DgSVxd3x9WR8uDtae2hZU1u69Tn8t21WhFnUu9WLqgTaZkMapyJyswh2DLMWKiNb18y",
  "key7": "3ojZA8YSqvwTr5bhNwX1yuAyMEYttZaazm2HzDvboBX1p6GS6qDjM7164xkBGENXC3YEbo4RHHVi5NkD8W5DkYmN",
  "key8": "6pdoD8SRkvZVH4UaGBnwS517x47G7LUQqtcEqZoqBNQ2eJdrpiggg25LsGVEEH7rVPLNqhZFfcqRns1sp7c6jAt",
  "key9": "3spnKBkbecyZBmu1bkMqKmK5b3JobpJKWLTjFccBkUuEVB8egWxGZQ6rFQk5PQteXFVLJcc3qGN1i83qJzAA17b4",
  "key10": "2KFfz447bLsG6WDu3eyHmC8qWjKfzLbhti4EgDNpdYP6qkodiyMf1aTDaGYhbBVyH5SG437u1ydb7ovKdvdSDhFY",
  "key11": "5dLFq6MpnzxGg3zfEhyPJ9J84gphmFcDWSJq1PSXpANNTQHjZzgjWunLA3uRqjiH1a4GQfXo8RQ6aCBhGdemFZi5",
  "key12": "52PqWGnWosoGgqDMX2UcPiukxfUX745y6nYSvXThqSBf4SJHuK2mHEb6u4qSr4AzTM1539oY3BD57wfFosCu1XVK",
  "key13": "3BtF6V5g76NYZzxtfVzkmEJv6xNLr43sSaWc9uFr1rL9yf34H8LDKxAkAfQPPj3VGKeQjTCDoSGeLvrE1SaQtjfx",
  "key14": "5AnPCKLesxXt3C5ngG2uuW2nU3uFUk6igkb4nXgJBXYyVrreAG4aH8Dv3BtRVfzBZZiMLb9xHvzmBayNdiiJ3Apz",
  "key15": "46b22fC7EStNtY6WW2o1XNnMy7iwz3JLUZ13p2qrqvjAiDMHcHkWkhSiczLGVX5M6CSM4xz6rtsNVRMB23QJ1ffs",
  "key16": "9koBtBTwWyZ1DKTJEB28ho2EMC6sfTULXsMG3zqrQB4wnuE5BX4aLGVgiP4S7bFCEpPFi8vnMkkJHwJ1HRnF8ex",
  "key17": "Svxs7z2HJAJnbqztmD2tw9umhzPw367dscqUvH7b8rwGJ6VXv2Uu6XrsU1Vwy6cM5BGXKF9Z5S8jAMFtPcMiinc",
  "key18": "2Sa5kqD4W4hA5DQqn2N5P23de8LsKxHN9Z2CL29KzypRpzLu6CgnyySaejVqcPWdH2z9HYsqrzGtw61fsndpoS96",
  "key19": "2USjzM8XVA29NbRw5BoyLBi4MbKxYfAvWZUvTdtrfHrBaURCPyYLhNVdTRnbtmModLR2n9wqXvJvtSi27s9BvzAr",
  "key20": "4EX2jvmnUHcee41Y9iKw8PuaQpHa29BdBQjrJiPBPHH3CLasRo81bohDwTqPU82Tst3ciaPPBitGRPMs7G4juRRF",
  "key21": "4e39GpJA53Y5YdxVF8bxnx753BGymWTkEtmgxK6W2VHFMShVCuV3ZEvi4cxU3HHfoRKzHDZ6gVdgSVJc1eAfgLFs",
  "key22": "258e5JYd9KpWX1mnMimtCtxm3TKXPtCXDH3uxA7zVfaoqwhKBkVo9MtuVL6PFPQJBvs2bK482QHYkGNQEokPLDV9",
  "key23": "4WUxEHM3V18ibX3FW3Fzu54hU2goYNfSWAKfeJsdjAB64GNWK4SMDyZp1hWyxmc6QNcZDFQq6BF6rpDuhq9VvuNC",
  "key24": "3qShFjBAfkMKwH7y5h9kx5afCY5UQkJ2KJ6A5dz2mizgKvfTCrJQ48h7oU4aKTFHyPfXeR3TWt24mqaJMNfdxPav",
  "key25": "398GWRpXit68KQWywPquMFeZMMmBsLPUR3LCUELGx3JeZVZDTZVUeQiwsmZYRQJH3YGarEiJKGsP5G7YSXy3AmyL",
  "key26": "618ZvwFSwLF7u6cB16KA1boedvkiJKt8EpMUkPV3v7Y91c1D8JuUxLT5shN5V1sZzEmThLGobLJz1CkaqRJNq3Yp",
  "key27": "2mqi2LBUsdo3WsiU2wicsP5SgfU1e32nwV3vHE4XiVPzQmVbkVhgiwfBf9hAkWcQnT7HFMvuRwgVd7n2Ano69bQm",
  "key28": "3b4JEYv61yiGn9XUqqRX9ZQHrJYMgKKxHPuZTs9GxFXEon6j9xvuyPW6xgushaNpcWk6PiPT3iT7gGmCdELYSKCh",
  "key29": "51VyLwdkkQUsg8dmj7oE7Vj7MAHwreyWoDUjXj5NBk5QsCLEPi6trGqkoh3MNLqDPNqagLsrSaKdJUC2ndfbcpzn",
  "key30": "5kGwjN8zw1JjvanAjzHPZZsYBfdtSzy3Vtj51w9dDon7HA4rySGtBH6UAzmg5J1PSzXq33cz4GNG1PJh8LShXhUE",
  "key31": "5s5RJpn6br9nTc3fR82ceuZZjmBaL9UpfBDmCA3xgVnDQGMPSfEybpNfAjWbQxdTSMWokzCWEWBrUz1MChSGm64c",
  "key32": "3SJzaHjfkfw5RHYq7mStLHpZ274yYzUYGUBbcByBDsFh72UyzEQYqdnZ36E422LhUy1bmYChsPQhsAsdxN3Bbu5F",
  "key33": "4ENT8odQe5CRDqV1JQY7cpdoj1Pvi3LFCbgezGUJcNZjB1QNXnLB7nfgzc1Yr2d2xqg5xsn2XxccvsYqtf9R4Lwi",
  "key34": "2rxPXe7TxF81ctkdKSBYYn6E4iprLaH8w4udvVhmDMS9dwEUTDTJhCLkvpv6vfN6QYBSEvQ7PdsbX7bqPa8nXLEF",
  "key35": "4ExtFWdk4cZhdk9AMq4JvVziXrQKDwurn1mAMKXJzo2FheHviALuoQz8DhxscAKTtLxSQ2vvp2YuFsjR6pXPpZEo"
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
