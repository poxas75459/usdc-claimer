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
    "2tSXUNiUcYebWfdLMaxEW2hhALgtz3FTRvUigugBowDdqPyJnq4rGBqSAeGQq2r7nEeEm9iBPkCiaSTdapLWphUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QriUwHfbf8Pvmy2Dqi2Km44gKZaojeajq1cQ2XEqngw3JfgA4WHg8xm8x4ufbHZb4fcy8VXToG81zfnhA3RTMyQ",
  "key1": "2KtBrKdBHeeAUM9i5EhGh9MUzrm8B9h5dxGqx794XNUCeetAvWngeBF7csaXHucXPQgRqWjuioVAYiht5FnWkaPZ",
  "key2": "3asBvzrrehgraSVojZ5x73u5Z7zrcRJjEeQgTLBqWpeYrLD7X14NeX3CdHKZNkmpCpZL6SpNwjM35B35aHcdQeBj",
  "key3": "3YSJxEVnMVmqcJXsT1NmwoaTYV2FHWcHXKx6yWP3NXyN2AY9W77fuMByCtp6Kn7qzfiyPKRfuSE6s2jPi4UUo21A",
  "key4": "cf1DjyPoPKtWekeXdAB2dh5g2ywqquGqWAKxHzndBTagBseqSmwYTrEGC1YRFs4C9wYGGySRrucmFGSfAB9bcnX",
  "key5": "4QM8FnM57d9J332GVjAHvjcW5wdShHYvSrg82QM11ok8miXjFq5o1JP2CeohFBgPGALwrh6LKYP3RMdi4fp2pZiG",
  "key6": "5s4VhX4QbLhP8Q3gYeLmMHcFnVSKDVvEhSAtLd8hwTN7WH1CuSwSqsyTfGRNn6BjTxaLvLfGuBV4Xsmr4M2mQtF9",
  "key7": "23sXBhrn3L9yZxJjzqykL4ZduVTFSssrceVJekVyzznLopTxbZy7PsxEXxX97hhxwpCtdFao2wWYKSvZbkLZCC7s",
  "key8": "5zwxcUKcCgXf34jz1fkG8M3d1tmiiGtDjo7jX3uSM6KTT3qStN5YahUhVxx5uBprDxobnsb8RearCHb7cYKqyF4C",
  "key9": "2DFebLXagjfxXdxys8nna5VfvAHBab6gdVpet853XLvnkbYdKBXUyqGyJgMNwPhAgWQy3tTPmkhK6G3BCNvp24T1",
  "key10": "31WAtFapozU1iSdAFNFygYQp4Kzq3HvBtG1oPR6uZaTJpYmbvkBpmwBmyPUn38KpYd58yLxio7mMYENeWBGRbgMz",
  "key11": "3iMeGmUPTn8s3JWss9ixe6Zzwh1jbbiyYwuGm6c3Ecg3t3R2udnYPEg2b5ed9eFh1TZiybe2gK8cSnWdnTNq541Q",
  "key12": "5EgbC5Zy1WNUQmePhYRo1hJZjA9NhJSdvpngHwRqQpvvaSCJUkRU347wv8wRH2xCyukDwLgHKDRe9dsHaDbMsiAQ",
  "key13": "659rGCwRSsjpzJi2vRHgwN9C4nAWZqzR8irruVZ5niNBvFgNzvkXrYK3Z9KNGACmNf7RZEXgFYSZeuKRZh9vZfsL",
  "key14": "5URicZA54W6pqWo9DvdujdKsMwpvdneUPBAQpSWu1Y1bm4BDrXaT6HGrBrB2a7jXRkG4tBWkece6ZhZ7AejfRrss",
  "key15": "3cCsyUcwWP6q7juyM3mp2pmeAZ4ED4z61BK1SPE3YpuJtvNrS8pmX9ci3fuDV8YEv36CgJ1hAVvbxoXRC1bMBz5J",
  "key16": "5jBh6oDyeyg2X9a6qASDm6uk5wFVHk9MqWGEiFJHBxMbzGM7pwfRUqbDUsNZKLndswqsVZby86bFuAvf5hFQHJen",
  "key17": "uk9wf3hqe7X5SiWPbJ7Pm3Lnz7PvQQgJjLziQjo24Qtw8YPBbsYxiTh1YqGfzfn4UbPnxapjD473wtjmaKLrgkU",
  "key18": "vTu3LrZVzMkBq7VhBoxmzdqwqtXWTz48DoGw843MXNb5WeH4XRrjBFNtxMVboxBVzbAbditTLGhDrGdDq1THWCj",
  "key19": "5b9aRiBg2ymi1b65SdBRAFPc9RNDi1HPw9Lah4NTEBgPFXcoFQxoc2b7fSp74tViQX8jaoXsZJnNhhRZjrJsUyAH",
  "key20": "wibCU3XJ6GyWyWWvHyAVV86JMXno9zDDW2WVLNgXJAsNNtKjrMNAFQMgrDF168Gx6V32wxNPS9o53Wyxi9Dw6wV",
  "key21": "5Qinq6MnC1iPxKtjr2oQSubnbfmCBC4Y7ddSMp6Y441oiVr9zNvJs9XH1XufwZwfsiGFh6hsGK91LauVxhavMTV2",
  "key22": "3PALPCXBU7AFMSz4UyCTxfuaFs8dzoCXMvhLvASHL7BaJqyYW7gPEy2ZbDNVk8AK18tEtxukpaqbYkF2qVYubcsa",
  "key23": "2jiDQ5K1saJcQ4L19cYLMgMwHehenw52DFuwSUe1bbbbBhEoyGDJhjc1scfDZRnUq7XRzVWYXGTBwJXpvPjbFmZM",
  "key24": "2PLAX5RAMtWfpoKSmFjMC1hEmu7fEPBNQxjSjtNsuzWQvdGC2YZUDcEBKrpACMMzF3U8buCxahy7vmVpG1R71EmH",
  "key25": "5k7iDaj1W9fV13n3skVqXQnFmCv1rBBHAQGdjyDqviqF2Go3A48Kafxo4DiADRSNPym6XYfWdxBUmGgrF7Ud6TMj",
  "key26": "3ksB34Btz2K1JdRSiK7BCM7xR2raqzZwrB64M8ARTF8H67LBAB1ASqrKveYTbdZGKu8HmMxfhJDU8n3XD1jg13g3",
  "key27": "4MtQ5hoVxGZSJWpvVgYNkMHSgNhA6Cf3KdnGPMbtiQ7fixqHBZeTjKfF8AgKw1Y4j6exJxit8HH5uouFZWsg1Cp9",
  "key28": "W4ToGtnDwQ45gAK8b9yTGWA7EywsVqHcUvRH8QGcVhdHAN85pzic1JKHvG3B5DoSxFj17epHTgHLUp9jBLK8b1B",
  "key29": "5dTm3GzDsVE6rCSsua9RFbmwyNVfrUtfNRa1UfPW6VpskqsdRiRfvjUEPP1ZXvdYH9YiVgkR35yMgk5wNo2zmXoa",
  "key30": "yUYsHJ5nqeEM14f6pUtQjDZsWv4auDmJTmpRFzE27ftYheS5PVdMrj2ZXUYZTzcwcgaP2gQ8zJjQXVWCyqi4uX8",
  "key31": "5adEmhrnDzX9tWGHYv3etxvSFZFyczRpgauDoLGLPfViCKrXpzFYgTQwTzj9DFxffcHmVjRsgyKwiFichGGdMSVx",
  "key32": "5VVin4qnumB3UBuaWxs9UikQcvkSeVbMg33YiNppZJ9poYuhEaJKyUXLvxrPC4qWjKvkjFrVkN8YJR3jTBmudGPu",
  "key33": "4AeCUuMFh2BEq8bXrBwPUFdspv1NmNjXwQxo4U3HHh9WZApFwFUhWmbH4EpbDefaWDqXQWFdVEQbFXUF6mmZZZux",
  "key34": "k3FPtxoDVyyUsjcMP69KzatixBAP8Qn7sFewXiRdGbaLQqhx8mfVkeSjHUjf6ueMnFVcdSqE2xzRUvAoVrPDjKc",
  "key35": "2JmKVoJ8aNd7ywDs9hkqp4WYkGwmNEwz1SQ8xkBigcM3BV52NefYMsmvdBvHWTRLwfgQCvLWm212YqsnGiL4cLoR",
  "key36": "22N9TWb5qxELBsnBEej17CnHSJFC32eN1nmXnut2X1Z1YW55K8TY45ehzef2oUfn2uoDX242LnvADAb3TVXH8VYz",
  "key37": "2FghctUc6amaDdiKRTRMmycUZ36AZsCAPU2iLXiLtopBVbyR73SuDbBhRGuXquJ5bumGUfcPKZ9hq6azt8N2LDig",
  "key38": "4T5cXzPw7EvMViFrLdnA1tWHAqYN9QpfCGfx5MZtBvs1AXRB1ni5Ue2uxPoKpYnB3QREEiKpfS4GfF6DLZNGPPpc",
  "key39": "3x8LMYqr2a9JxXALkT1wg6LdM7HLGQntzTqW5fwaKBjohRYE87HPfMk8Z88WAPedwvdRjEZ3mD9ukR689hK9PMT3",
  "key40": "mNCuM6wwnSFudh6VM8oRUHeeFJ3d7JJCARjYpE9c7poYLWVRJjPnc55EyZNjeEgdTzR18GbpCiz79FAdioJiFjz",
  "key41": "3X6euqDiHwy5q9abKCn82xGsCapMrrJhG4mTXCWpSwGMQbnGCpnGH9tDbF8kRLAfvuaJAKFmVHegjoEwjcd4LATQ",
  "key42": "5BPmzJDXRqZ7TJBtjPSmpPrdSjn4hKNuZJWqGCddyXhXFw4hyUNjYQT6jqcKgztHB1NwLAnrj5rChVeyBxuVAnWn",
  "key43": "38cLVyvuaRLW4BV1pSQfEFTbHhJzMHx1QfmLwnc88FXNXUBXRPTeURcH7UoVqjpGsXXeN3DzBWS7mSU9GW5rW6pg",
  "key44": "3MsASJW3KkAftqej5zFbduNUj4ZyjEHDSZn1e25yJkrKKe4YzFZz943xvh2x9NkmEZUyuRJyS22tpVdziSYytRuA",
  "key45": "37YFv58pyAcJpnrtZG8A34sm9VLuquttNzwX5hGhyJbJGZTTWaJxspTPqvyHz8DfFkBq7bWaJdY9fZ4ud89KKeUu",
  "key46": "48QNYLwYkb9mehoy6iXyJAHoLFXFApR7vSu2GRyoWZrGKcZmPV1GbxKjbXhJ6iAG5bTsBHzBm5Jk58rV1Hnirkyy",
  "key47": "pvD98Hj22zMP8TVBvToDnuE3pFjvvV7YQHyPawn8sJwNFAskp31qnWbcTonwdgQsomzCEFqcBnsGyPSwPpbmgPr"
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
