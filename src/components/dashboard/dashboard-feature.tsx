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
    "4cAkUuweFZY9Xp7791ZQVjR72DBi4GndZMDFNPUexMRh6ouJfzmQHnZHuTD7bEMVhSkT5VL7M6rPxr1zTduNEj5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRuKLZZzEGJnLi5vziUGWKyKpvVmZ9pCNpnsBqDJnohd786rJoPM1UYGArxUP72VhxA42pnKRunBYxiMCDgwMLp",
  "key1": "2VYW6fWxL4cK4SF94yQQTMmQzzWEwnFafLbEmZz3U7DWMogUWTrZAvezXKJvFBjCDSGQo2fbBCjmDHMYJmgLFgwF",
  "key2": "smy5QEmzAbcHbHg4Fhk7N8rSoeh3VZqqhvWHg33trgkkC6DFT4XeioxdjuCUXTkYt7xCkUM7jHAkPPHYhuZt42K",
  "key3": "5QbN4NQWp1WVqq6R7cR27yx2MGhhcDFZ37SD77vdqkm3yKqPEgvNN1D1uSrNwMQFP7Z2eNQSnzxw12HHbPnKyoXt",
  "key4": "4ga9n9QATmipvGboKxE7zeen9aKUjXQXtfgzKPNVrHVwuB7nBYYgD3AnoZnhRZ8v6aQEBPyKACfNhyi8wddmkw4R",
  "key5": "5AxhDhxRLjjVGtPKCpaqtPp6ReP2NvYcSraTGFBfrVFRra6Vx1fpPXbaKzepi6zH6t4V3vtDvY4ocBTbtgKdpkHS",
  "key6": "4YaoBj7wvgM7Bmv9ugTDMzXsrcttRH6oREFK5tPHekRP7rpw3YMqCD16bbqAFg9Hk43yRZFbujHNZVZXFeXV9S24",
  "key7": "2r6rP7FwxzfG74qMvG5KvMysbU1c3NZtSHL1bQ13JoC51LGY1VvuAarxuqbsgqTHd9v9vA7s9naj2xtN72Eu3DUd",
  "key8": "2GeXnz24UKjvhkty8wyaXt49vkuXXyaWShLttYgmm6TePSQp17u1ZrP5KzCHmTsLQsZsKuanxTX1J3NbDg73RvJo",
  "key9": "4mR1Tys5yQhw9Hs77NsD25DQGoEMuFLoLbsdpZygUzyGUkYoWWUe1NR2jQD4Y9jJkWYhLRizW8sHtw64v5tyT8XW",
  "key10": "5xeyS9GdtjogmaXe84AyggQu4fW1LmbxRaUBrynKAR22gSubGWwznUFZka2qWeCEefBPxUrXnbpTeW4t4vm2R12u",
  "key11": "3pTcnLqceAuNRAxRNHFDbDFornkmwBxHryXu7r3RVzYx8x7RUpYUhu11eDb4eA5ok8t7GvG8NVWnJc7eKLcjfVLa",
  "key12": "2e9P2Dd3Uu8tnQxABATLZzrGkXTKHW2W7Z86khCvotBoifcmhNnBt5NMRMNX2UetQP3NWkDxVpv2EsAi7uUFh8ad",
  "key13": "4bX2TYiRhSSo7oYD1qeFN9zG1sTdE6eMToFZMkfRRfGvKZVcAARPRoRNk13tykUWfYkQ4EaorWDA5uCjHPoNqxqs",
  "key14": "2KRgeQSLxjW9LiKJ5TNKr97bg2dPWDMqTS7yQ1LMx9siN8Yy3DoxTU14hg3ci6Sa6hqC5oV9WN1n2KTX7b1b2SpZ",
  "key15": "4SQfX9LQAKNj5Be2MeEjX8NWRsmsz3MWXAFnDjkz9UFKyMwSKCjYgazx7ezGYWJegeWgKc9bXeJ7Nj7TWvf9qcGP",
  "key16": "3AKHgu7whGafBpZojL54Z1x1ZRXGpe5Qhkv5zxx1RvHAMrbsaAzTHFSTi2gHvaYWCqjAvV4QYuMPCamJwx2jSJK8",
  "key17": "5HdmKwSF8sM6ogWAb2g6zgPTDhCTkQ9sqD6LrStxqjpkhrYv22NaAnnEBJ2JJtLs377BoCB3PKhQroGqqz5RrLiY",
  "key18": "wSMREpRGvgeawErejc2Z2eme5s8uZ58wuYMhNgnZ5n3sNRfcwLukEKHYAENuR9GGpMYDdNJBL6ZbKuiZciq4GiR",
  "key19": "3dbP1259eYpSNkJ8xoAyuciEWEJ6XDM7JSicKwVL5yaUPj8GsDXhYJxzudg6m1hU4GXpZ3iQXrLb5dwxAKa8Fyn6",
  "key20": "3BsXGLJKd89KxeyXkHHrKcFm7rMaFfJARozv1EinqRQqg8dzuxPbugtEzWMwgkdjJ742mu29sXRqKbnMs6vNdYFF",
  "key21": "5UsjPmwUMindRPsAcq6jxpZf8PubJG9ACQupKV4AniMVwzmBmdgt6H5rTd85cwLVGxuuSKmxeEqMcHYJFTNeeeZj",
  "key22": "4jhYC8DYQeq5SFn2oaxrZ8vMZh1LAH2H4YauVF5GSMz9guk7s2brVWEW2QXjPbA23boHd2Wt3PGCuvdyPKRLRorF",
  "key23": "5e6Xz1c5NqifJ1czXmD1Ea1QDFyuSJBUbnf7XAypWjRmzAHBM37eoSzAX4P2Fwb42eX689wCVtFt387i3Uq8rDi4",
  "key24": "Mf8GK7FenuujTuCwsDNR6dLXoEpzpFttgMt9g5i2WBKPGQjcX9fAJxgMmyNbk9HypW5GgtjBaDj1p8Jr2zsX9qu",
  "key25": "49chrVnitsexz6W3BT5R1hiGvjaz8zoECYLW4o82raW9tkgxjaM91pqPKwCfJ9J3sCkKp7vy1s3HTWVC2x3bb3Vn",
  "key26": "454cyJnA6PRKf3YGZZXWxu9h9tkQ9VNGGjnMMrrFicJJ3ciRsYFFmJfBUTusjUMMSXDZuNh6QisWjas246GJzwnz",
  "key27": "3AvrthWCTG6612EF8uuPArYh97a3QpAHr2kJyvJX51Q3ZvGy8TFd1K4Fm6KjL8Y21gLwihywGktMuoTM1sfzYm4w",
  "key28": "5X8kyG17LEXaRk3oQ9EFQxSLCV8KSfuniVPzXGmochNQBombz8a39cvsjvV3fmf3t6QYXuqKCo9KgHqz9eH3Mtpb",
  "key29": "3T1PTiMXp1gY9tDGstBachtQxroxdZLHh9XXcHNLEVxk77MHrJx8ATKtruPPyU7i15hSiXDQW4jXr4UptoiyCPvt",
  "key30": "8cByp4XBuJ7up7c7TW7RptQYhRF96r8ZrzqRNvWqqFgbBu7sTriDBC9qihziHhF35ayYdHhCKN5nH4VnWaKL5YE",
  "key31": "4MJPMt9rxUStmn5YVbVpEMEcsHkjf7Yx94iUfxBBq7RQEjqPonaPEwZDkzrNnBoNRUUnkoSsdWdPiPPg2qa8REFw",
  "key32": "4bK4o3xE9pyWLjY5ZdmqtuCWtheKewKjxzgzum7mtAM2AhVyo2LXhY8ZAjUqMtDp3J3yZ7VGqA8fmYCQU7gc2wY6",
  "key33": "5CzGjYnARLKfWmga3wx5YYAgjNVAgLhem5SwqmaSQAFuk5SkvewU74wurbjNmyjEazQzfgv2rwjdUFgD2rK6qGjM",
  "key34": "KoN2fts7AP5noDxTZY2nDkdR5KhmXSH4doEbfhVcHDVz7w9gKPqgGrLAAnM9wWa7GsLLivqmMQth94jTwZoThSQ",
  "key35": "43tbuDJ8tDtrVzFCJZ5HaPDe88DqR6aDk1JsWTzPTsZuh2qktJjs9eAUVyHvzB4ddNLQM13JEBCM2PGym29CeUU2",
  "key36": "44qyK1mDT41qd3ajD6DtwAsrgYzBf4W1cZ9QPkuQ7umqNGRLDqrTU9AGoPVmB1ZGiCgKN22EuYTrxW8bXPbdF2Et",
  "key37": "2L3egVeF1eYYT1AXEGnTLs6gYYNeEYQ1XQJbNnQALq2vBaPkeb4jJquqjVgbTdXPazvPU39i6bgU38Agv18M16K7",
  "key38": "3KMWBr57rDbV1dzeoK3mqbDjqS4zKdJkAjiXQ6tcCtfiMA4BPEepq82quD42BLsrL7398RvXe1r4CViQeeQ2A3T1",
  "key39": "3y2Uo7Zz6HmvZH4sR912reYnYNazVU2SR9orix7kWppzspXKPhWoGTQEupzHGbhYyRGgSxanmM2sjXDKrTT8xxDp",
  "key40": "5CTwkcr6HrRw4pze9BeMhXDfQtX6m6vBoCgNcUNQXz6SdBqwrhrKJJ4hEagkzdiQXaNQbqTBnLK2PN5CJ2ZtM2Wm",
  "key41": "2y7fUVezzL7sWRrQYGmnihzLP58AKKXNLEM6bkSXncsKc8VEGXTcoTYU5Ph54LJZhb3pXah88N3nwNH9jwtkVyrg",
  "key42": "5wZRcQWccvKqDdj4AAzzhpswCyxdkjc2WogRyJsWPnyGbe8hwc7keve2J4Wqfh79GeMSKU1YzWpcTcjBubncSWCh",
  "key43": "39h6soLHGn7bjTkCxJ5piTYa56hgCUDZ4xGRgxxmKzCvUssAwdKCDcKA1x7Pxp5zQEBe9PZkobmxdVw2sPC5HRSm",
  "key44": "3bvLGyDUjyMKKyw3n2YL3qvTwcL7k23vUvBXRhrDQ6jT8F332QAnQVC5T7jvseCLkaxiAZ8xgMsjdiHy5YsCKL86",
  "key45": "gtjsmc53VHFCoLGL2s3UHYga2BcTWqFPpkaW5UQZE7Y1EkG7mwRK4WGKbD9dAhUttDW8kpcSQa2xDeEuSB6gvqw"
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
