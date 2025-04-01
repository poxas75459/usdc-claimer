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
    "4f63cB1BiPtM3rouoTcSh9rX9ahdGhPvy6uZjgH4dndpA34YutboA5HeHCiTdedqsVEcqJzRj1dspiSqB68auhot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hsxafno5gdpJ4BZyJL3ooUxBhtuDhBJsTYaZ4WwreDPRhaUptvsBUvnby25t59wb3pRZCsNScNXGFxscQNVW7GC",
  "key1": "3BwZ9YXRz5HSGPoWMMqu5B3Rpn33q3bDUu6DKEoWb2SwFybqSGceRkLtF336FHUsqJNoMBtH9RwkqjCdqbWqVAUU",
  "key2": "4HukY1Kfgu6vLuK2eVBtWLztr7SXN8irnuvLGqiSSW87PLtQtqWvpCwEEChg15fbXeyZgMmdEAXya7AMiQ5u4Nyc",
  "key3": "fvMS29CkKCV7pHftzYwZCg33iBW9h3v9MjddLnqakVcL1sbDXkcsY8z4p3f6mrswR5ZhyrbgbHRk8AiF9ywpyVc",
  "key4": "2n4z7k5bsSWijrxRHoS1xXEERV3xgZgFCvLJhZjYKSv7CGDGcp2ZWDmNDqzcXygBoGcCdZPmiMaHAEd83zUg4rLC",
  "key5": "JFhfPUfXLDo1eT3jpE7jgqL2QBq8WEj2RRCgsMNkDc3amBcK3qpmK16o8nnwf4fYQ3dHsZ8dDutynEpUZxxcn55",
  "key6": "p2PhtRa2cwDbv1Ntmb5XMbtEn4NxrQY5frqgvaWsjg3KttGeLi584AfrJt5uf7jeFA76jZDGN3KFt4TmwoXyd3b",
  "key7": "5MEx5TsAwYnM5LYJLyZQWfawWd3npEPkESN8HBkX4QoYDhdFnY74489dSGAWHNY4rqWE9mUgkvdog3kqG5YbU5Kh",
  "key8": "2WsbyrPefZq6cXw4NCYTdQGVdJBpq9VKQbbuy4rbytwfQGzWMjQv5kKJp6JfQht51yaECSQDKqQD5EtyW6hWzKnn",
  "key9": "2JrQb8sHnUYSuHKTLSh4DietNXCfEMGtWBsNhrduusg2e2mhx9hwy2B5adpd2KLhPuaJtYyEQfzQBv8bAk3es566",
  "key10": "2bgLnDD2JwXARMoDtdZ5UJXa1wxLxMMhS6UVAz79KeGsXMjEV87rFeNu7vS18E3uVsgsJh5DSkp3rTrPym8ot5wk",
  "key11": "2678ky7wgC2XpWoPf8CEggwH1cqT9qvwAYk9z18dq8qkNAKtyExowWUt1nWubbxE7b4Y5YiSraBb4MAc2Sq1rfkW",
  "key12": "47o4KbwK1SqrYXDdmioaQQvjiqXTBaqaJdPv8grJAtQzuEMKRjRQsqL5HYjsAp6Nvn158zGcsYvpmT3y5iXftNUG",
  "key13": "4FWsvDd15oeSSbx5hpR8L9GnE5YV867LWiGrj9QQgL53tpjqDXWGwKuvuRac8fTHChfPfZkUuFLV9UbPZh6N2S5u",
  "key14": "4i3GHJ9MHjPvszDfHYkpoTLHAagpQ9eWrBSqERHcJh97KvuUVGBjwcfDPQBQFFLawGoRWAbGK4esEe5zTA4Wu5zB",
  "key15": "3v31QT9aXb7o9DCoacxyTfVxJCzMe8TQk4xQenMZ6Uywc7aWR1Loe7tBG77RDYcRgGYUPorEa3geZm4UQgF2n5i2",
  "key16": "3m7tTjjpkyYat3pRZtUpNCgtjaeXgUhZAGtQxFT1LTvYLMTvPXA1Vd3wwAQKMsnBwJKwwYCz1EfFHqajziRiAMYU",
  "key17": "2UM5Huq7uhcTD9fvqpYA7SNDcam12MA7wc6Kz6emZCEHLgnRNU7A6x8JbLEuJu2JPSn9zADM7wA1f3E9hQ7MrGUh",
  "key18": "2wRvmgSY8ae7naFBnb9nyPf7MRYDWfqMp3X8iVSJeqVaEH9iyA5NUnzr4gqNgb68ZQAEJ2GgNLz7HbeZsZwaxbhV",
  "key19": "23yvCfnVyV44ZHZXfnjkr8dTrr7V9XULSxLbgTeTYnmTXqFEqgsCkQ1EbJSPtnb2FVy3rzA6Ta34egMaXdoe7gzw",
  "key20": "5WcFzzjn8ttzwfUHEuEZKwDEG9hgXpzPkqdeGtHcQCdZt2unHTQ4twY5ZZBSzdujmt7JMcQzGh3yGmqgFQprVzA1",
  "key21": "3i2K5ez4DwCCsC9VnZYAM8ySmQVYjJ4TR1qkEmsXeEVvzmry6FuYDYvcpoEqzyModd4QFdM8xtgh7BMDdL7mpG5m",
  "key22": "2eHTPZHjbJV7KdvFKQCdn2C8ytiLnpPT2TzPLcngMXvDoXywCZJaUHgNGNeAPdXjJBN5kranGx3TjSvKGKvyWa4w",
  "key23": "g742c69JdcPQFAjnu1djJixPrDHickSHT8zLnSuMvrVwGPCEbsED5gB3doC6dSraxMyjfQLWsTFNguPrHeSPgui",
  "key24": "4148UPKfRfGQgiccbdnGoyqNi6YeLAbe3YTSGFBFxdKkhG9wZFng3LS9eYgZbpwmPyTVvMJZn3ZP5jZpmAWjY5X1",
  "key25": "4Ni5Eqg6PWuEBNc1Gf35RDvuSVwpr5modPTaKxpnXj3FVkmcvssGkbpfrGQgogpffWi9y8qscHiEMsyxTEiFG4KX",
  "key26": "B6QZ4HGmH36bRv46gyjL8AVGy1Z73EPiSWiHU8ph67bEHtQ2skcBBWHvezC55P57Wp21zBQCcWH6GyS12cKxRpX",
  "key27": "2g2BRQiwgaeqBonYbUSpYcMv4mQszNUB9ojC4rH7u9FseR6jtCuMDR9Wz7hbSsor84E1VpRxpTcPMPkzGJdWZ3Dt",
  "key28": "61wActXvENhXi3xgBAAcbejSuimUwEXVaVxZkyb5PYpnDZ8W8dBKZoDGvQAbCjAEX4qT1kniGr1m46pDXbePPYS5",
  "key29": "3hFfHTFFLx3n4qzYZvWyrf4QDHNcw1WNt1qttx1TxgVsqr57zP2dKjxGHKqLthYdCjySTPgipwN9Fg2gnFBx1Ld2",
  "key30": "3ZTCQ7Qto7537eZXNE3qYVzNpKNFS2vSPm9hyLWezzEgRBJcC3DrrWySmV5pgXxP4yaGTCMCiP8gin3ZavuMfS4S"
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
