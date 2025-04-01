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
    "5iSt4hS5m8pF3VzsK9JKbS5ksnevbKpMHKxP12cziLgbz1PCrJMMuypmTekS4RFkdbEyg71op3RmJyQCfpyUBhj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpSRuKcj9abSeu3rM9HHAzvKYZoCyQoKuGkEmdvftVQmvxWmEa6NbKYBUrM4zEwQzx2mCrduPmv21e7gx96DmHa",
  "key1": "52rwhZX7nMktBSRmpHXr7AhepKHtTJJmXgcQsgv9mDWpbC5Re1mBBufPtxW2a239XREoxEmVRrJV5f1mHfJNwfDN",
  "key2": "3FJAVE6jF8C6kGZneLncVmPPY5F6KeF2fBxxVgzKmL8BM4zFYm2SpiGjnPNTvFjNGoBqkF8hAKHGNT4KdS45JZ4T",
  "key3": "acJTN6aYwUV2VC9F6mpHmqjaLanVkMyo64EKuKew46o4dS1zYRah1K1pDqKzoZDGrZRWvxEnVfy1NXVqvubP9Qa",
  "key4": "64GfJwSwdNQ1HZmEGuREofKu1RDbAp5SDuf2WskZGX6h8e4pWT6z3FfPyB6QYmCjequKwus1w8FgjAYGwXZpSFTD",
  "key5": "5tyB4XU84pepav2kcXTe1xGte59JVvEWpe8nYJehfLT4616fwKsqofymEJQWnj5pXqj11y1hM9aLHPhwNXjFx3MX",
  "key6": "6QVp9DWWnNqW2UhW7bhnrY9PyLmrwnEPwL8mqtLxXedGjaAfSAJ8ZyJyiXH7v2CLJfHT3AiUHZvkxw85uh1kfRv",
  "key7": "64UXF7YUuEsBBaWTra2TYVyXKdkGxyEBSPNpDEhfc92t93RcSX9uv3pSrUgwSyqpGYvFt15bCbzBR5fG5KQ1ZEH5",
  "key8": "5vxt39Rvb5axHLsciXKo8thbpUQtMUWNvjRzP6epmusixmjo23jor4VThRxCDURoJF3GYcPPmMtavrB5AdyQgu9i",
  "key9": "PZA3T5N1AWjYDSksTv8fbVdxnu3qXRxoRHKMteESrKcW1s8aeKDQeTCgQb4sJ1ae8Gx6Uw2jwv82bq86YmrnGQA",
  "key10": "3twj1ther5LENZoJQmUCYigzEn5gcQvm7mcWuVH3V9AciaHwYvi5kVXjWaNdrxVhyeVvtrzsL2qFoCBF6UChzse5",
  "key11": "ayqqgkPrcZpWDcsezButtpcj9gW7yHgiJXB3JTRUxBGEHKhoAsEQ9wTLyMouzMzYaApAb3YByeiKp9QuK8C9tot",
  "key12": "4vu7KvfGtZ362EmTQpJjfFtNfmA9wDwbSnrAiLGAgkZ9nwD3vQ722z2MjbyRw8F9YjhqUWirf8fyKzJFXuGtstvE",
  "key13": "hV6mfakFW29zy12CFrgK3Ybtx8DhsK91a9SFkUwu2d8AbXi33D2vt8JG7k7JyJS9HeWWeaz3nsGRjSoRx1tbwU9",
  "key14": "4ShdqE7xMc157Xe1qcfwMUQPnpMszcYeo577RCKZSqKFHDSLwnAkToCF625QJuNNPLafcka2SCrwfEAseAZh5b4f",
  "key15": "g8VDM7EXX4owHjeWkNqaFazDmJXa7bp7e1MzYjUVpA6yZ27BTctj7yU8Vk7CjkqQbE6aoSd8TD61jDYBhx5ZP27",
  "key16": "4LTYQmXBcMwbbPGPVLZtjSxynusjbKfaeG9NfoArMDEYt4RyLdZd7zcpCSfkuGZcz74CPT3hoFaCCw6LMm7iXQjT",
  "key17": "3CucNmh2gMJ7SLZCvCWTbek11EQMZGhmrmhs6KsTsJV8Bunn7o7MU5jUvv7FTqKUyG6JAXfTyv8KQ3AQfiBsKHpL",
  "key18": "2xr2aaVfFYiS2fAtESJ1ibtML4CPj2zyZ53B68iT8kfptK2p68jUNUFo4pHQhCyuQT2VpTodCPQzdrDpFpjzBVtJ",
  "key19": "2dk556us88BxekSFMGkT8tBAqTvXLJtvxv75T8t8qEYCNA44kvUxQqCE91nDwj6PeZ12Spacf3pUdsGRzP1E7j56",
  "key20": "2i4ZDC6c7uVacrYVapKvLzyW4YCPuqnDE5GVHqcugZQffVkv6jSy6HS8Y3CuA96tfvuqVR4QPpT3bKXbHqFLbuPL",
  "key21": "57uZac7E7Q7XXP383nAjkqWa56Vu7gTqn3Uq8AW7eGD2vbhHSpYjAwseHbowwsSg5wDrdvVtRTakmsd4bSXRDrpo",
  "key22": "5SnHX3cEii8hhvNCAB36G69XB2kAYdm8G5a7a4nFagucy1shzNCkdamfZ4ffMCsVGu28gKWWavrP9eVGV9JFYXXC",
  "key23": "4SLw23eNjXMQaNSALPdnjAqG8hLQMasZ1WTCwuwFrpTp7GP6JSL3F92ab9hVZvtDHoUV4gpKqHTLVUBH2nef3itC",
  "key24": "4KWhp5ZdE5wCaGMEh1zuQ17HrDbsffM8B9VMogRMvmWrhxbmQ7YfKwnh5mvBYSaiHLbCWsR88p32TqdtP18dZtCg",
  "key25": "5WgBiaNsuGaacrUCojuwGmozLnAbhvKgcRWXnQXiLM9Xe25efgVgPQmKng8uZVVjt1nqtFCKP1yjMPYZWsyfQj6T",
  "key26": "4K1d6EkcDEqvaNosGyMA29JAEPqvRNFRerNSGbKRMSfFG3e2P1EsHjk5cedK2wX4aJsW5Zvq18VFwuJ1LGPGJWn9",
  "key27": "3HxX1LmsCN7x6mCHDDRBQtU7iECvQuyV4keKdeDrPmrkEAQz5E2kYDaUBMCT2e9D3DYrZRoVp2HpViJQ5WtzZjmH",
  "key28": "4eYtTT67HHe65Yrgx1mBoHgvfs18HNCrSGq9CdTqobThJvAprwJT6Ugmp4tPiPu5J9UsZLyWiZrXn9u2XWs7eUHH",
  "key29": "3XE4QExHCdF1pFVsTnE1xnTXe5L9kSvoRX9XBJF6pwM7LLysiZnhXgD8meJnDDW8nhoePuFQV6jQne9e3QPbXpuc",
  "key30": "Jdw4N61QpW8cRBJb1hhJqod25Styu7RwWMfVftLHYxu6baanasLnr4fXoE2Y7Rm33YcQUDnp5x3PTNPk3LTixAC",
  "key31": "38gj1dLo9Wdoy8YG3MGfhvLExmwxEEWPbLCE3uVUuZvDg93yUUSCQoyuRra21vsXZkePMEy2GQT4i7UDRfJYi5Fi",
  "key32": "3XTSdAtk8gRQPLT11ui75hLAF1L2GADJVgzeBmYYhEMiDALjHPExjKG7qcYM8sC23UeLFuDj3ArLx6YVpk21UfUL",
  "key33": "2gdhz1fBuP5CnNTEHqpEmWvevd6M8mD2hExf67MPvqra4snnpPCHwMzZ7JUxmhTb582CXs7TnrVFeyNk9dKdopXr",
  "key34": "3wptM6iNUAptnNjFnwtSc7rQn5nYsZcFhZGsHRTV8jnu3y1PGya2Q8cfTpbGN3JufZq3ttWQ4xB3RvA2Ey5oadKX",
  "key35": "5ECnEJMjdnwVWAo24FXa7avCUwx98JVuCKYykZcUB37V4tmoUrkvGbxuSnsK9aDy5rmyUzvK5Qd1iUo5CJLwHso8"
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
