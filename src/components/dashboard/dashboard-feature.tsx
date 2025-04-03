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
    "613QhdZexk7YJ5GWdqsDHRgyiypLjQqUHQsQBNrZASu87s9Unkx3cBwjfNXkPkJEkZcyKDMjgFEBfp6gwHrqVvcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSvL3kwi65yYHevf3xbiHGWbrBmhE4Aj7AcyF1LXT45EgecFqo69UTAmwm8rfiTAVe6edZaxyLEckMnEKZPhzAW",
  "key1": "4NmpZZD8343hVSk7uYc9AHts3gsj47UkXLmajXC5uvb8CNMixqtihFSZ4DfUP4PFBWbgEVXRfU7N5N4ZhpzMqJyW",
  "key2": "2FSNscdTfMywyGjjLM8TLzWkBpZUHWQrPMtuZtuRh9gV5zoejGucKrvCGvrJfUUWqUSuXEXebWo6Ub4Y7ZjBM3AT",
  "key3": "vbG58gPypQMbKSBLL6veVYyb1A24b6fVjGSDaVzTJ7JSV5YptrWX88grdNvRXZdWXmUdvWHEZLcgvASm3cfWHND",
  "key4": "4ZqtTm8r24kSMB1nECovQLcGA8Vk3wC23pCNyi8pzhykfPDLUcHUTkDUndfXtcac85MY8Kba1Jq6FtTjeLgksbkr",
  "key5": "2wwsLcH1VLUvLf9cCZRPjzLESTmxmG3LijKbVLDJxBEraxnoAcah7Pyi6smJRb2zUs1i5rtL626QjjsupyFi35FL",
  "key6": "2A8iz7r7R1FQuoiqmx22ni5RiKZykF5jszzXczbVBisvs1CZ6suSscDfUQ29MYg3n3KCtvjkGPucZmKC5x9Ry5Ww",
  "key7": "4v8knirdwUTHwXc2jvUwQnMXtzJmGLivQcPfNRGWkwcgKVhih6QGTccEcSMzErvMXn6WCoQVYBLihoEd4qu2vX8P",
  "key8": "5Fpba9yrLGWF48b3hdm82Sr4RpFd7bSokWCxPqSzQ1tAVFeTGzhvfbHniNHZswkU3F2RUdHtrybWtUrt8UcX3Epr",
  "key9": "5bcgwgmK5V3AWJbxrKv5EWf9VRvgNXLHD5tvueXakgS3a6Jkr6spvCJ1RuKu8f8K6yYDuSi8rDVBbrXNkXL6bhHy",
  "key10": "3kt94r2cfEvzjRoZgVji3hp8JQ3zzZGtaGdjqTfKSSYwVufUKP3Q8zam5SQfewQG4vVnMt7mdeFJi6peHzyy2rcJ",
  "key11": "4spdAKAo2uWZqA2jX7pvUtfEa5coJkZu36ooKSf7b5qGPvBvMivVSUoY2ensBn1KUAtm3wZpM8fXNkqwoyprh8M",
  "key12": "2YSbKpfzegZACUe6hrF5i5UTaXNdE9c3AspokPuuyV4pUdaKNFzrtUY4g2qgedMfW5XCzyuZSE52y6yTKdCa9odV",
  "key13": "5jKcH6deqJMpjU2AJbd9QFVaBD5jBvnwrxVW2Q5Dqxf5TBF7LksvNBfVvuZUnQgb3z1A9Ms9AtX2Kf1qitBPT9jP",
  "key14": "4iHPECZtfxtvi77woJuAkUSFWbDM5vDhXc9PzrNM1Jw4sHuZHSPcYBH94FUY2YTSB3N9iDtt7QG4wdtJnBTJeABW",
  "key15": "2eTMge6xHPrYHsMg9zXf28RLxriuMGS8qixDMAs9bemm8N8TboWZg6HPcvSTywAbac8QkCiVHHeYfgqCrReq47Ex",
  "key16": "2HhXeibteiG5yjDwJAExcRAnPRYtrpcTXeNgzPVPw3wgnerQ6iwQStNGxpHvCAuqqBNURL36Z2Jj1NsfxBSqN2KC",
  "key17": "59NnqsP45HHNp2g5dxDXaknjj7bbA3439z8PCaik3ghAhS3S8jFiuFkEcAeHKJYpYs6qfADrtyjxHzQkJncM87ZC",
  "key18": "5Uayqt2XXGYdKFdf5MSYRzsSRvFAHpKdy9LQ7451vB5ruASiJcGA38Ejxmvk2mMPzNPqD8YqxPjEopq3yEPtDsJQ",
  "key19": "mQmC5AUSauD8p2n7wAzKGdn5TWXobQzPP4Rzz5KHj7T1z2DhkmjstPTEMwtYt8ieJ5sKiMNLnYPPaW3Cx3dUtMU",
  "key20": "qaDTFEeTGeJ9z9CbNcDiXBoAfptGpwZ2vBP934u6A4XSBbp1T2fnDHhhYhVHS3fVmpCVyQTBvFhWmfhzBJsmYs3",
  "key21": "eZSmtpf2p83KZ5nHnf5SNPTYc9daK3eBgpzudkZNvdRSTu5CAkYyLrqi5zQ1sjnTP6pVkWfcHyPAcCg9bG5ZPTm",
  "key22": "4USMmkd6wMoMG95SVC4uD5Nu2ghR99gceX7y4JwJ5sZcX7MY7E2SyEJUK596t4pruYDSYCHpovkoheosCQ9cn7vX",
  "key23": "4vx1mspordbLKrRWixMCoCSVogDSKBYwWCdShtqku4dVL5wnEu1abjv5N4jwEvyCVDad7dU5iLgGRTUo5HkhS2jY",
  "key24": "VQkqTnL8JUJn3BP8a6gQQSj8u6TSujPojWmgdQJULiK6SdbF3EtZ6nFosmJv8bfvCYrosGHcE8kXwdfWH98HJc4",
  "key25": "2zVYv5jRMaVfUiPPvdCR8iTGoKoCRESiN6AaiJ4USy2wqzg6ujpaP69cZ8a1RtpwN5VGnbELj7FZNSB5MspVQHjF",
  "key26": "2ieax63wQ8XGf7yxWpAB7jiDhvU5DDozdzyE7xVutXDdChWdyuHWniqhynbQPMdrGszuP341mpjrdUxhp5wRciTr",
  "key27": "2XhvueTYrLU6Ck8ZZckpt5HBpbLTdeRx2TgHec4NMt3hFTAQYbT1SaKNmDXHwZ2VnTxVmarLEnHzd92HfGeY4Mof",
  "key28": "4jEYhgNCbxr68PqJuTPJMxDa2U71xg2xM9MM6RtrANurzoZpdEzRLNE2WA1UD4omSQjFM48ciPJzZTZmVWazdvhn",
  "key29": "2o4V6hXUo7BbRWjLNqxpw542C7e6p1aa6kadoosy4bggKZ38wq2GrtExd34BmokuUL3QF82de7Hojsq1SJLws2z",
  "key30": "3LAbNgJrN92pTwNsG95x1mKuSuWShGNpB3LcZvwfUsjb68SBAFCvifWCBRyRZiTcazZWpLMxbWLj8amczfSaCUY4",
  "key31": "4RKxbrQ7D5amVS2MkzkE27kbbsTbHkjRrzYAQbksKCVewzBQfWpfgHxWniNptRNwffZcBkc5aixjM8Y5dCgWWVok",
  "key32": "8bFZatmJ6keyEQRS3S84vaddeXKXeWM793xP1KyHeU7CJ1i8zzPxA2hsyKXQhBdvAinzFPLVcnHwgNoF491Njrg",
  "key33": "2U5ooMEQUXzqrqYEWmy7UXggBJLgqMH6k75BLqdhHcLX2d9B1PjtoVt1yYoYS6J8omaThP6myyC7p2zB13nvcD5t",
  "key34": "2G2FsqB4RszpUHek8zLwYLihvHNYmwhaBeJjuaUwSUDLe1aHKXxELbPckE5PPqfL8VcYGmqVpJ2rubKQUFwSpz19",
  "key35": "XsBuxJR95RVBeRPaVVHAs2Ck5nQej7ZyT3sgeJNp421FBueQnWEdPraxBCsM22yEBnopmqxZkvtkCceWpbYbP2h",
  "key36": "3b9yhSqX5Rkf5cpApGhBw8U5MZz9QsjfEjy7BoPqgRf7EwPt2eT1wpfc3Q3PamGQ4oJVRb8MMVHwSrM6HZdBdLXe",
  "key37": "ospPhWfVDkYJF8aBDbbfp3ot1EWWbZBNamUiBkevhuuEX1NeizGpWa8tiDmKdNzX2RsQM18oANjCiYd16FgYCgG",
  "key38": "5rcccYibnpGKVazDqLpYase5uVo6hakbyxjGCJYwJM79obiYZtucu8sGfrLVHp6oT6Krb5hVUNzQXAeMzbpx85uE",
  "key39": "518GknzRm2C9RUbi6kdCJeeSouEQYRuDJ3BVYAa4CCDTurPaEQtPCV3P6G7ji9bTwNTgZvDZgPCtb6NU654trK9r",
  "key40": "29EnT21EKnmV1ayfse8igf52UbFgZEg486RPQu5CvQ49A5M5DYoQNjdty2PDiBi9DXsKSdGRKPoEiwxTkJ65ZAQS",
  "key41": "4kqrWoQpKWrDuzExSk42VbarEuCSmqmD4Nvfe25DfNHQQLoykWEM3f5hp3QF1sChRZFboK1EVVd52Xw9mdFEggjR",
  "key42": "5R1LakMuVHhU8yTUQc4QKLXUarbdaLaGeZFepjybmD4X7cuEaNJizjMeeLG5Vs8Mqi49mz3Te55BQzRQyhKg2W67",
  "key43": "3v8i9nzzBF3E8CEYLYAERXp4hkcUWKLCodBVVdmPdz4kJSuzpqiSVv3cG7TCMdzV9YaWEiNUu8tomikYm9WhKqGr",
  "key44": "48BW3gYaFwW5eu8Pc3C1NyTeV3NHAf2JtViLJXzoM37fK7s1StUZS1r3MZjbLzpAZuYWpx9X9CZsQbTRsaDJRGYv",
  "key45": "56RGUQxheD55yE6SkyWi5zE9zdpta2xrkJCHKFdaiyAdX4kKRZhpGvZKQ5MKtQ3SY2CQZR8oHxvmKWj99HBS8Jes"
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
