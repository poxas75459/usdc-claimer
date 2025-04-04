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
    "4YqnPAzYjzLwBZ3L71pVB9P2WeMEZzoVTYGayFm21ZZMXeB5qFesnsMVXGFUu1VcWfd4QYLfbj2oGJx2c6hxmfJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xs8si9D68TfmKmXajtNUYUH63sH1YNdS6DoMhQmiRt8nwFiYysQ7mURCfYcixk5amY7NNFpG7neLde9UYAVnpwx",
  "key1": "5EHwoopFh49BiVhwkq5rThAubr6w3Sq8iAFf7CDSAFcEXHTT45zKZgLvpQYnhP5ZY1QoyjTrHrpvfhhje5N7Qcb5",
  "key2": "4cwRMtX5p2gpoJUeBt1oDZGJkZYTzUM9uip4ykNw3bf5AgXNJbRrpX7N6pymbcDnhwt8UGE9sBtuTj5xeoWmYGX4",
  "key3": "3c2n25v2P35Q1YyGWZzwPPZCdERRwDE5BnjTmJBH2o9sgstmDWfPdFALdbKARm1L7GMkp36kGhmdbxhDWESKgFeM",
  "key4": "4JGbbn9KeRzNpm8JtnS45XCAua3ZDSv8W4NXi3TdUkcPfC2jnwNQnPy4NQqWvniXVHZbxkh6T32T13BHLmufB447",
  "key5": "2D5X8z5LeBNm95b1vYXiyp14S9Gx2taNuVPyU4yuxVLTxZh9H7CdahFM2SBtXJiN4pW8kkgUNTzZG1dUfcQoJvbj",
  "key6": "3seQzSU347MosjQsX8z1u6FDakEAX1WLTBRiq7ZdVh8aqLMKaxKntBzLfAorx3c7ric6ijF37KVqxRrJcxBAMoQz",
  "key7": "2WroenjP8BVxxriVrXdbqLvuHYRSLBVprRUDCzE5rjNRWS71t2kax3TVM9cWPUHMZFJjDBxqZtbeoYGrkwwidyTK",
  "key8": "5Bn5GW3Za4ibaQZgbGEwpxPUgZPwLpqNPgjfP4a8giEw98qpyoBM2wVL2HKYeS3b7aThwddN3Jr43dDpDxV7CuLq",
  "key9": "58qZTehUVTn2VX5HR5b2D6a2GMNxxZNPcSHfKEJiMpMsdaJs5ht3XjYjysmywCB7H1du5dt6JJR7ciuJzMMeLKCT",
  "key10": "2N8ajZVNKkVxNrgRmgFEQbigVzo1VbiMsBS335CZSxmDzvdAWGknRuM69E5GszUL6Uw4BVDmKGutZ4Nr18JoAgKD",
  "key11": "5oboXFS7FcqaMfi81cRQQLc1beASAFhWESgTzBwqovv8i7E5QK5cPiyRjP8RiJ5zfZ3ySUjMLKDWWHuu9g8yiwvz",
  "key12": "5iXMVfYMcGs265m6NiphdP5cswK7dDc2Mk92CFdbCmE1GvBWRP8yEUhsonSrLEeSY9ovFiF8xWWboqocCZ3BhbFc",
  "key13": "3SNvQZbtH2MuwqSeTKStgNSUus4rez2qepg5owWfsFYiUdAjwvcjDnxsfAksmLW6QCnjMwaWqYAZ2DCakM4NiGji",
  "key14": "4had9N4m6zujYQkMTiVtukAjoYFE7qAjkWrY864y9Bf7kjPPk6MHFtmwcVGELMudRTHUcWbwXkVooi4Q7wT38RVN",
  "key15": "61UJHB3gMDz4yL1G8LVvhFQLvpPeiYPw7sv5qj2X79QejYGrVSK9qybEbH986yRJ6oDNekqNKia9m9bXmAnrns2w",
  "key16": "4YUZv8SD9aZqQ93h7foq2apt6wmeRwDqUSVMAEQsheeEmtnTZxuKoXa3ZxS6UyxbDNURYea8HuKUKkYMVcMbYD8",
  "key17": "5rHAbdUZM48M8VP5ErqDRCVXwrS6Sx8t9ajF5D4hPrPDcstFvDGxjYa8svN1FBeySF4Je9HrhQTsq4QVeFesHFbR",
  "key18": "4u3EWxqBeSUuYCeRSCYwW1aiEzLzD4MnQSyp9VWAWTwnAF9yvNKurDj2AMoQAFiWAbbFsCHEdKi5jybLuyotNRcM",
  "key19": "gR2b4mt1Duv6uWpvu6om7md1Ej5AMuKGYc3gX7i7wE9WpWPxFtBwUXaYwpZoV6NsTyXgXZ6gVmj1BX1RrdEVrfs",
  "key20": "4sqkfYoLbC9hJ6b2KpDAp85nVX4q3fp3wZ6FyGWFKLndXQnJdoNRQCrHnh5HBmVQ7nmXSGY3xx4CyymZQTccrnXF",
  "key21": "35NNMPTsv1uaUdjXcahebCzErsuCaNmcFjYTNkWWzPLpaBzuYHSr78nLVtVsrY3J1ZEJoSbfA4e6Cp1N7zznm7aK",
  "key22": "5LDWrc58UHGZJQxPDbUg61UZjQeo7uZGKvuuk4iCQMQVhpn9EsWQgLBur7Xkw61eUZLiyKwAFRYkS1cudreSVCLA",
  "key23": "5J2GQcS81bz8NSGU4zEjFB8S5jbZEtog3ctSeKg8EYCntdW2AafzohPTBh4wzXWdMh2mL4oQ5kVmbLj9KfCjWemz",
  "key24": "2jGRXuqfZQaUu8ekGrvRNEGjcERXpLUg8oxAKPw8NDqv6BGv1qqWti4dUZkBPRoEh5Gpbfeu9hPpn6TGTMmC44R3",
  "key25": "43ootq2qEqNuQKo3doVYBmPjJsxczcCZwZoWS5UbHY6Met61NRrCJtBnMyCNWiqGA4UAyi2QYSNMZ7s5jANGn68A",
  "key26": "48u6VTEN6eqCc6pM4mqqPCa9RxA3zfrrKYDMLGWNzt3GNJYSKVLcyRGu3xgENzqB5LFXocudw2xZmjid7oTbinMX",
  "key27": "2KEJLCxvn9GBykxotT2thbs8be4TR1sRYSriMJaXDYAKYpQixwGmhUNYMQZpsSkEpFG4nX1Y3WCN6LKqUnaWA3Nt",
  "key28": "f5y2GtaDxsLnL1hLfkycCmixREyddndYCWUAXxH6aCr5R5QXGjDqEnFRz9meNa7Ryp3jMkR7xJHTLr9cJjGzFwN",
  "key29": "4P8HEp8UBc9uLKXafrjqcwMa6GAnftKmnNqBMJ5QmJbmMT19NMekZcmRX7a7B2oNupi6hUidCGTDxHiXs4cFz2aQ",
  "key30": "54ubJC8Hgt9hmz5bffoP3DNzDViQ1UUvDDuVut8DvSUbbRQnjYbAC3Bb9mHvZMEVht4ZApCnLUECqy24U6XumiY7",
  "key31": "5QcbSJkZ2n4a3qGjozQLqh1HLefJeg5PeShfd4FYqaYGy1ZovDHrMgvnCG3jL7qJBMry1UrWpxKSnrjVieqmDZaT",
  "key32": "2HEWYEq2DWRS3eKB2fQ5uqq58M5WKaf4RfjpNyB7ffQmwRErL7adJzsEok8fWQ1gsdVyHmEVYsMGRrp9SqDsdUxx",
  "key33": "5pXP3ESTsjZP38xoePBZH5JPkWc7xgpPrZgqeNbRChx81mmXzLreExUdA73feRqnUSABfSkzCeJnmszkmvMytdoA",
  "key34": "4Yn1DWWog1YgFKCMGmfU63dAPoK1tJL1avKSvCHzP5qjNAFH3TotbUiABjFPu2pmhk93bKdfnzsQSCdy6hFzvq2i",
  "key35": "W4Rd3fLs9a4As8EjWNrbAD54T8kaDLaCzrvTPiLHe4B2i89eHyK6fya545dUNX2Jvy86X2Gr85AyRQQmpK6a2N9",
  "key36": "67bm2E7YmTB3KSehKhKGrVLTkrgwuFvaDU3HX23PXx4Ux19TDEDBnZ5AHxpTXAajpwxJq2oBdiXSUxorScXPXBXP",
  "key37": "49M6aoTeJPo1XrutijuHAzCAaMpn7bfPysk6p1ju3dq2VNKeX6WCkM6YivoBnGa7rb9Ed8mEu4gXwVbydpFBPQ1a",
  "key38": "2cMucsWkEEXejegfoCjszgb2kAX2QXLQhHiupA3G7nWiWGGxjekQwdo2MMW3thKgcPHQKH2GiE8iUanpnb7YU7Ja",
  "key39": "kFVcXSjPtMhDrWLmgSvkTmkwXkBfMDhbKVCKq7FGpzBSiwacG2dHUYH6MBoeJbLdFTTFcDpHiaskFfQm6tgcwtc",
  "key40": "5mne74ShiDAifWZ5kbCqFHW79JgrymFxSmUAHTS9ojS2aV65kw7CzkvmXb5acU2qXyf9sEqUTerqXhXQfkCmuijH",
  "key41": "441XJPegLhVxWCSxHuAn2zhtjk7ghyL3cTpMTEbvPWbitGXbpZDteLuRdLBPAFoYACnhS7JmZgrsAdb9mTwKdo1H",
  "key42": "FSn8ZZPhNrm4Q4VEXciXG5RUAzAWEUXCizsnYum4Fenxk6aQt3hFmGzQwdRa1j9gm115m7R76P4iEqeuKgfYEDS",
  "key43": "d74cr29qfsA6TzFMGoE3H9bFKqDs6cU3V7hDoefai15DZMEvYm37aZLY5AQJpgTvPFEmiwgTPbtqswxWA97ua32",
  "key44": "3gRqogdV8QiRWqSTYDHJtgGhtc5nhimZp79ngfrvHqQ3goa7ziUw8k4E7gr9U1K7iWu1GhfG3YeN4ijyXiUzPwg3",
  "key45": "54PXvMteiE2seQ59Gx9UnhDrGvG5uiswVtmQgoQaeyuzTh3J1vkbqEzSy36acQ64pufRZk5U6ssc2bGfymWwYEHb",
  "key46": "4CdooP6wsBf79jzzDtQxvQYPopCu6G1t5LxHqKDKZ64FGVi8QEaqCEsVdtdqh46bqpcgV6b6f9cgoXrFx1WsjYnH",
  "key47": "2smyjM6kMWexDDTwWxP51euvug8p2M4CY8DHgm1EeHmEzHscqN1UtGftvueyYKPD8LehnHdGk7p6KXyobPhMhpp5",
  "key48": "2PgC49NQxu9wE4T6Q1Zyh8uLYdwyQBpM55AYQCe5c4N3b62QGgo3Pf3F7FpqLXi5W8CfykBKv8wmTtPjxM2ThLPd",
  "key49": "4JbhK4SFr6KzNV43qoSmmo6dQGvKe7WqGMeTr9KHKC6a2FyqXGXzZvK8beb7BkpS81GZ2VTGxJdqSbY2CnzrHTtR"
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
