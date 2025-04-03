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
    "4y5iLbbXKUWVNM3rAczmiyhpzo3DyR33spGuKrdLxRgeUEfghQ3PaDYWMk5LB9aPtMybbqMKQMmpkHWKbpWtaLj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBr9HXg8FcZUVt6yhJzjcZWJzYYfZ6Bvh9UuEZDBY8tvV7JbdgSYrP49ywfw9HWbECwy43hywFATREQurNjR2ZE",
  "key1": "CYn9fvLZwyAKTRPQVYrFhXd24J7vXWTN8te7v2iphCiURuRGfbjiGdDN9ff4hVQSekJgfaNpp21XZV9CfDiK9hH",
  "key2": "3iTzdS7HmoroNFziJ8gXvV3hBs8BZxyTVsU6XnFZ15E9iV5YPfeshPp7gxDUVCiyqLYLYDABVSDJEY29UiEQBCby",
  "key3": "5hjcFNUTh1eYqddqJJccMXwunnaBHwNctprV3rBBCNkyrZTLLebNVHofQQCYbpVHptiuSNQ9iqW1AWYP6xie6iPu",
  "key4": "4N5PUEwsc32dZcvUGWehdgX7PxTRSnJymxVDFrYPsrS51tPavQtnvQKDs5XqMxxHfooMZztDMNz5kCESWq7GPhFR",
  "key5": "5Uq5ki9sBBH5SSTFtvd8j97xPod5NDn55Qq4gswZkgf4iLefa4KwV5jJjUfwycb7iS4aS5c4QByS3CNgb5qoryXb",
  "key6": "47DZ9dBYspPAS6S1YSAQQiZ14BtzHWgmjZT4pqWEJrjH2LjUe6u8GgZr9kTEDMRoD8dqYwgPK8wYkFsrYuCUemrY",
  "key7": "2CD1H68VVerm46vqB5cwdpqD2w4Wytgd9LbeMZyHXQ1ceDKQJmg2M5j2HDKq1hci1jmYmYuFbFbgHFiYabhtHBHC",
  "key8": "uMR1emds5MC6LLCtBMtyjybCPVcjgPca18dooNQsuUUNqBtvbrFYa5g4u9Q1K354ZQm3NhKkzzTXN1jfRD8DpHd",
  "key9": "5VMDoU6zq29LzkFH8TuzV6znc4ctUNcVovLYVx4JsdGHp8SpUoTVU31BcAuC5AuXyQCd2imDVrxx6iaUuWckmLXA",
  "key10": "4uyN8iMgNKTYHhZxYd66ihDM181BpPatYXX4bRCJmr6sBjXJEKYCkxJcDRyWQFLoLgB5KAKeBt8zTet8LNNQBwQ9",
  "key11": "2kMtDHaZeUBCtTuWmzxcS5cFkXLJ3QXX1dNcGmvWAjNk1kygWREtqNDeGoMcT8Vz5MHAEhaWYWXjvqnj14v2UogF",
  "key12": "3S9qJjYTtWBTNVMWXYCW6PEe8PsFeBLbS7xPff1oSdWJ25e7QfsanFxhKcdXjhTgmY67pmptaNSb8CaVZr1py8Z",
  "key13": "MzJqZ2x4uKuWX3Ay9AqXZk77kmLcWykyUUNX9vKVysNX3zJWdCdMVagk8Cf4SKypGhGeoQFf84AxdrrPrpRqwuT",
  "key14": "Sx6pWY8xXUoiQg2caSFYpSxiRx8cmM3KEoDUfG8AZFyMNwgxE688NqM3V1mkJThLeY84bjLG6JsBRGyvSi1eSGN",
  "key15": "6WB2i6VsiHKms8YJqEs7ukzQ6W99KATmPekSr3e3iG3pi9K8MjYBRTM7Gch385qRDB6fcgnfuohmRymrtghY1qF",
  "key16": "ZcUhznyEAcPmxeENtDSxFeSWQPgLvQeshNLUqDDhoX88RaBg6Us3F1G3y6C5CzJnb7gq4x7pT2ZHqdXUpiRTka7",
  "key17": "4RLU2YqfmSvwdmkihTeXb6eJ5p1FoRMW73uYEc6msXJ2nE1mzvCSA6GiuBRhTNjQFSUj6qSKScMvYB2u379DrQcf",
  "key18": "5CsTCKW84LsvNoLTcz1AsPK7ASaC6eL5cCWQeuBA9FHPwLEB5TJaH4wkrgCjPgdsAaEfVp1jmhfuubgRaZSZeap1",
  "key19": "3cifw3adbfdz1ojxWP1dTi2p4JHsSZyRFeUdDPL59vh7Ki9vt2k5KcSJeuhqoxnFdDo6jPL74fNJHEYpqz2weQeq",
  "key20": "4CVzYwEtCbfCxfc6BNXm9JefJ3EgvmAh4vkMKNaUdGn99SU5w4rM15Uyz4BxpLp9sNVkQ28VQmtLwdnageF7eowh",
  "key21": "5Cb7TE4HGEj38Pz5MAY8v8M8iiBG9iMTnJ3quhk4QKw4wLZc9ng23GCKYBiD55eEbaekW9wudnCBRWHemDQ8K4nH",
  "key22": "3Ks6g6dXeeqLegFyRvWmXnEFWw9RXw95hv3dazncKRCiXhoySzoLsmjiiT3PTXWTdLdJKnWiNzxf7F1WC1A7hSe2",
  "key23": "2dTcRAEYSXXxsW452fFCTcSKgRRc3umPcp7YktYJJAGy4xemoKntftYPihk4UumgafhaYDdCnJh1e8jZj2M6kAKY",
  "key24": "XVLJdg1nSSS4D9ctRDoib4s3pGLSErVtxHoUeBurNDeoUECJDiFJUke962eQyz6GMuWPCUvYwGQQRrgFBw4ArMP",
  "key25": "2KjJZaXGkDCBH3HUFbTz8hRmMyJKxYjZ72hkTuRLRivQFuP2Npm6nkcWm3d4MVXLdMu5E7dzjiUgCfLE85MKFkAx",
  "key26": "4kXBKu4s6u7vhuMbRsMZ94K37Q6k2VCtFkLc6YweHEpPeJQmDps2Du56PA4jVQciWQ3XoQ7NqJoVazCqBTDoAm2N",
  "key27": "4ETFV244A8eoxWetNP2QvP9JEBPX1H7vHvFTnudVTACH7YzFoFiehinT6PSyfm2Dz4eatvzJaSSs91wfDMd9vUYX",
  "key28": "5xdYpmfyJ7MP4nkj9D6ZEF71JB3q5tGJNBciHjgXPmTv58zQWqcNGxFXJthL3EsJi1EfXoyHHTsxJFaUwDSqe2xr",
  "key29": "2bsmwxX9uw2ui7jycZMjCTwAT3cnh5KPiLXnRgPiJCaGKxVUPNzpTZMrC2tJQwVFHgDNcoYY8tJwMi4z2my9zsBm",
  "key30": "4spu6PBcwA8YuVy5AktpvQZhuUt3gwtXGmWhfWYrfCvkQ5ujdkb7ibXpQpyU2A79uG1SEQAiE6XgnfbqxyFFknY1",
  "key31": "2JHwcBAZo119xQAa6KCzCGC6C35x2AiVqu3XPAGX46xjKRnmqSEH1TbZTatXrWgycvZ1J9NLPNqCxrdpfqwwv2x5",
  "key32": "S9tTwFVXasEY6N36v1xCaTq7AR16sPf5FcZ6UMrQc6GYggtYR3chp8ypNKDH1FRNW35EYLBj6iAkZKvSFpy5nXC",
  "key33": "4GsdCNugjyMdSKTJrmPu72XjkqnSqCELyMcxdsXjiUAJnTCLaKJf2AJdJKaBNeJSmcemiyuAzhoqCsefYdVNwGgw",
  "key34": "4vfPs8QLzuyoeB8Jf1q19P4tX1rbk3nTWi325yx7o1A74Eefti2HfM2kwrSNdTaXhxw4iZxjA7BWJ14f14ha5hJF",
  "key35": "ZVbnyRfdJpdM6xtun8Dg4KmPkRrRXDskLoRr85j1xqGXBtUdnDqznLGDtCcAsnfRvSXjvS9KpDP4xheRmGugzLa",
  "key36": "4JoiPUCchuwhCdCanDBDhqtAHEHaqkUnW2yxAEtYevDCzieh2E4Md5MsE7e1ekxeU95Rx146RW4QFG2AoRZoekGj",
  "key37": "4koXy8mYDa1gGCftynKCg5wjmEif5j6UN5c91fG8ymbVghCJUPvUzPkuQmAu4x2RPbQRVf1gQRQaJwMn9eqLymA3",
  "key38": "54imxM6xMSbxWLWMGarb8VKBJUWc32YdBZ1woBKqETP1y7Nb7vCShbEHWoVZDaM1CF8L7GG952xwoS5MuVstByUw",
  "key39": "5JhNULpSpKNYgUPSZsmWFMPRLvo41KbsvZtYSp16RGTCqQ28yEBF4sGnv5XkXMiBhqkm43McSxk7DoA1QFsA3xMb",
  "key40": "37ncR3B4ePNz1cV7b4Eqjo1eZxo8DqCKRyLffngYoe288q3QSFvXEghGQN1iuwqyeV7R2kV4nk2otRHByFSShq27",
  "key41": "2HpDwCzWMKyArSeurBuhkQGq5VhcVZLbpynb7cTxbxxeppdKvzBnpDSNUMzVgtriRFJQfa4BbRd6X6WXBLcvizU1",
  "key42": "21ufiKbx489s6auMshGRLuggMogaWzK2KmP8iWKozTB1KiHXAYP8wTY1As5djhvzHuwK67RufxTa4xSZby3v7PHe",
  "key43": "5f2jNMzDdDNTyMRGLBcv7B1oRWBVygRWw27MPPjinJuYYGzHrqpRsD4VSSHbxBkrjfugNqKa7sidDCmgy2iM1f1A",
  "key44": "3Tgi21EZprLB3rr6A3VdZvA5PTBw6EVUpG1TBcc8TRwBhjYAqZzU2dBPV3Y9QVMcky1vV8Uwc5Jr5t8pG15kJt4m",
  "key45": "Tvdp1WDzPmJzmx6a37eEb37qKPH2PwKuvbh7D1m2EXGoUBHVSYx5Lk8FEBDWXH6uHjnLPmUpRgZu1iC9f7XEw6b"
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
