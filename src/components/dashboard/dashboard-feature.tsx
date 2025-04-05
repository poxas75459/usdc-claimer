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
    "5SPwJ3vdbEzDXGwuQuYT3Lv81iJktmYrHU4WktjxZ1y9QKnZ6nDaWkFF4faK7SfZNWQLc4GTcqpvRPUoFRyKDgnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CHCxdUrVoFaZ5X192GdNV3bUWedPGpRuQVqaE8gJJjWTmK1tHcuuuRsqLPHLgwLniMHMRhaauEsDkXLVhRnNsih",
  "key1": "5L3wLVKmUvJwENhdbAS3DoG7eQMLcS4qYbcNUYbSgy9ATzLE6aDe4RrC3SQsP3v5yvS1GmmanwCdyAPoT2KK7AqS",
  "key2": "67LLzTb3BMf5NNMY2SzP3aYyS1egui2DsxEWVhFx8bA1zoQN2kuCzLctKKMZraMigD3SHkZ4gjHimX1gUmrdcL1V",
  "key3": "53Ggdooi5Lci5eD357uLehRUtddnw7XMezj5nDwpe7YPSGBrphG681ukUetfzTrXBsF4nEjNY4DiTTrbA7eEJdKU",
  "key4": "2FUSgwFGUYQW7jUVodyaThxGmxNFLkjqR48CrnYan2HqKCfw68u3REeMzw3r398x7CtrVuQeNLJh6WqjurvAgjEB",
  "key5": "3smUfjT9J3as5dhLWs6WFMrJFPo7ogVWPv8DEgwBTmX2zCkbJ5xqkVA9xyZhoT8hGk6kGVJ3KBP3xewW6G5e3ULx",
  "key6": "2scJpB1CDykf6zKiqKyBEBQ5iyasRb7Fbf5GKypbqM6buw1LAzGQAJgRuAF8Q8N8Qe1fxf4XEYDQQyvop1mjyBwS",
  "key7": "343Qhji5njjJXXrYczBo8EoXbJLU2EaG7HsL6mJx32Nt1zqaT7iUATYdGCqYTEgGDAy9fP53Mzdb5hrcCj88Wi3T",
  "key8": "5jDVhrZ8eNrYhV68dZJwF4ovEDAD529XoJrwaDxdj7X4wSfp2TRdq2MLwGqbLZMW3SMVyarX9gBqobn1ZLoAu4kQ",
  "key9": "MeDh5TWuRkPeRe6PdXKyXSjRsETge3aaV893CYYgBt7bYp71M6AEwCJAumJBAYGHfcdZ4tv3PN3m91Lj1JXn356",
  "key10": "5cc6NDiCtyv6Ps2Boc7iSY4aFEsuT9NSacgGohSVWJsaswjySgMPLV2QYFDmXrnDgooyd1bs3a4eJtjk4fvN9wTM",
  "key11": "5yirfczm7vKkPi7EhgbBaXyr7v2728WL7uPcoPRDnF788dVt5amWqQC9bR7tQ1q1hBmYrdJbvtVn27Vc3KK3yXAf",
  "key12": "3FoFXo7pQhnL2KnxmkBRM3jyVYYz2UJyZcDWSajc8JJe1pHYRruuwQ8M2MxYE938Z8qdBeCQTakdKYvxm8Doym1D",
  "key13": "5N6QUZY2APfpr2nn3AyqQm2sdFz4rdXfATPcZE76MhjmmbDXS3fJ7SG9GXoUahAGaWL52dbKvZ81tdJFj8ckuaA2",
  "key14": "4yeGETgGqhRLpoMZ8toVaGSZQkSmFndXAMJu2f3aEV6YxiAQu558daRkXs2iaeDyuSVfibGXFMxxA4ghVUFebwVp",
  "key15": "anX9Rvw9fvEti7aB3ZrzpGgGMmR2dH3NEdUDPwviPpzskEpWHGhy1VKrHRYZn9H96bdKGA6wAMZnv7GaX6VjE2J",
  "key16": "5YLwKsrwwt5LX2Pjh7rFbyMJENSuHQ6fEuLGabjjC9MGRHM8wrniVcHtGoF32LyLVuMDgXbVawcYbCHSYGFNgNNH",
  "key17": "3MjppHU9KJSQPC9MkKd59RvSasrWYwzj4PPAEeLzL23f5UoHXCozprktM4jeD4yCfAyPtgv4VSxQDq1PQ8Hdf9TM",
  "key18": "3iNEV91CwmYH2hW28j1ZNLVy5mkNwh26M27hdFyjtnGn7vRCfDJx7BnHtVEnKpF4UBktda5WypaxApTdLkvJzwYP",
  "key19": "49e4kfYB9ikuzq5z3TnCK2EssxQRh9YbZv7KM5dKzfuiHv4cPEekKcS4hqoB7LMZXUPTN1VGkqFjixUHyd24cEse",
  "key20": "o4D5r63uK2MEvrxnyp42V2hi2t9x7JQcDb5EzSqVoasspXdXL2gC9qkKuB5LHj3UFku6VLb52AkY3RMGeXNTjBi",
  "key21": "2KmqHFK51pnbTgXpZXteeg2BNLUCxv83sqNStgVFcRWjSMMm7qg9gKdhkkeKW8aUcj575XsUmo2hfQ5hBXXevKyN",
  "key22": "57FcZdSXMAZ1Mj76M5txLP4Ke4iHzWjf2fkvQBoorUdkqCjvr4jxwukCjYgWPtQyWkNpnR9TCa6CvxdF24aGYKa7",
  "key23": "2cJz1PFKkkutVQ4RnDMp3mnqzf7PcWoW4XZpMSfSdkWfgF87rVbg79Gk1saqWS5wEz8xjH4hQ2rbFwkXfuUc5fcw",
  "key24": "4UjkCFiiJZByxxWbNuR5vx5QC9KkkwzZ6NJboMrJ76jbMSuWJsTyX2YsKQfyX3bounFryD63Hrzw3BYL3st9SRZ2",
  "key25": "3tQEbqWiqrLZwUapzKdqDxWusSHgH4fhsEo8z82NxFfKMK8XWRfXsxTVojHwnhRbqVyWvJspY9yoCAc3cfx8otCk",
  "key26": "4xFjZs73FochHbrhB5MKhjZNodpHP7aRpftLKbpee89QSVukhf32Rfae5rCXbXu8vaB9xKm9i9XZtJw7WVCA2jR1",
  "key27": "3k9TaqDb2JZ9H7d2JNynGEgRiTCR1VRvFjQumMSq1HXFczjqS2EfxNVK1CKP9WzsC1ceougMCcQ5hA7eLiinNnvt",
  "key28": "4By5K9xC5TUgv5gsmS4ZCbvixqvgMM48vGMbS9zezHtRo8Fr8JB5WVrGuMuGdogH9QNocmKuHbj5wfKa4oyCcMPr",
  "key29": "4gTWenfwcmaZHpVeeRg6qMqo5jXokNThoMkjqz9TFL5KsXkW14q1WQWui17MNeUTdS7zmKxZDyapZxEmo8Wki6bA",
  "key30": "KMmGh3pNrrCV1nJ9muDb2oPHVLRA7tMeapok4FPvQYTFRQQqorJfottezXgcp6NuZTQSttTMibJ6gawwcUJUvG9",
  "key31": "3MKLmk18n9PGEu18ragRBLunTZUCYpSnEjaga7fQvNviVswFFrbV9jDfneBVJ6Rm8XXhuKiq1VuxR5w3jW9p7kYR",
  "key32": "3j22bkjRsCqhN3SZdpoFGQMTjJVoafNbjgnWRWCJWcfGbT3YqoTBP24xPmwJdbogiduPxjmaHxt3awGSxVwvBM3u",
  "key33": "4FW74hTdSMCcq8mjRwTiHS3pdL5Wrcct2oJtM6mE9VeZd986DfBmMoCaKzmLP6pmsCiaRqEqg9txM6dvHANxKfW7",
  "key34": "AvUpkYrY1FnBuXd6hZZUWAvDETVXojNxpBCeCrWbymwYsRX1egCtMpYky9cyvmtRZQWsPdfxS31Qka3AkD13Xae",
  "key35": "2j2dnaqSDBwFHdsR11ztphZyYkNSRRbVXYqwt4eTzeA5yVnh8toStmGqjx7NLsdpK2K7aHjypXJEow6S96YDuxri",
  "key36": "5hK8rPpy4ke1LSNdGyu7sm8ntooMxGLBEvn8FCbhkzupo7KyZrk7hGjwmvaJ5AVMf7pqR5BEfcV9gT7WPvsPPJKH",
  "key37": "4MiBbUWfZzfyvXbie4zRfhotCeUQvNozmExiT5tTZ5yQkPgkH19vddz9kyDSBfwF7TKCgSzZuBKtLKW5kT31DFSu",
  "key38": "2KNTZ3xBPueNF9JTSVTrxYWJ1oc47zLXczgQGaCFjHueYPJuk5kLYw6wpFQjXTZfizUBY4yReSQdpmQyqy5WcUNn",
  "key39": "4NDTksRbrbis13GMCG1qumqSHZkZQVTfmDyVggsjCmFLzquwuSs1Yp36cC7AacVw5DLvXpCWHKJciYxsXKVMviGM",
  "key40": "5PgE9hmF2i2A2doi2vSL2NGqRVLBgfjUmwFYbfNMKoPsYLB8jGZ97PPkbkyh8hMtsVFQ8gqR3F6D3dcHxw9GpVqR",
  "key41": "59qoGBg7Rat8HWvTruV44EYpfTdgw91pyhaB1csXKkAYrwzdRSWZaS8dYUsYLWQosZ6y37a4xDHNcthsdQ43jPa8",
  "key42": "3pSjxETBEuXqgKA1y4My9J9gn7JyJpq4g586mg7jmqGYDigST5yWV5LQxd5GEtez8Cdutz4iqp7w5F9AN4MHX8Jm",
  "key43": "66v9Fpad39fVcG1iLD9SdYcTmhmxFno8ZAD58o7fHoPPFBiGUPox6WBNfuyEB8jDVUjXXFBXpgmXk8qudRhqdgXJ",
  "key44": "RQki8j9qgKPtiE55byqCsnvnCE26uYazpPNGxo9ePi9Pie1s8ZXoPQ5ccLcFAXHt2DDgvSN1Y51ApeViE4kTHfY",
  "key45": "3gL5eL59s8iC2VnWS2xDvsGHwRdjXLv2hVD2Y9gUyhtn7i1dhGgqxR8y7ggR8PtLr6gtDpXuAmXvws7kUNzTc5mk",
  "key46": "BvMzKRPr9TsAVkZCS4mW3TzAtQ8SptjvXLTmyU4HLnVrQiLQdk8W83FYySzfpsXYGZrGpEauGPEXQVw34uDGErA",
  "key47": "3GyikS1psK7BEGqsXr9zpYazY35XXWF1XPW3X3bZBw5tv5F2e4H5CfLSFMBnk6U99mHcrPMAGVDhU48mabVSeLHp",
  "key48": "3wzqmT423GURwDZ6gsffk5e8LAzWPJJJygDWGGVaP5PTsTdHhzUsZxrz4igZE2QinEKF3AFKzACPsNRwTP7RAKSf"
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
