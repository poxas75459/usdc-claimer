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
    "2wRHSgEvg5WSQt7GxjUD88NE2upXUzyuVvdfHienpGTnZQngXAfLmxoZHmUzVXgbsoo2obWXUBXaaZSU6bd5SJrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cw9Q2iYQPbPBmFNLxe3Sa5dSDQKQHK7K2wKfew1odnan6J7Ff4MWLNHMpjt2Wb43tLhJSLDrFvKjpk3gZZSbMYJ",
  "key1": "5Ri23jv62hmWDnxPnQvEAWAPBziXGKcPVhh251v5TXYipePEs3vGYSjPtugqQAMotC43nSLiCh4ZJMizSBmnbX8y",
  "key2": "2xzez8QKG8gk4fx6iaC2gvvUaHje8J62fEPaM9f3G2yvhkveKWezcwZyS86WQ6BgPc37Xw9AzUvFArs3FZU5TUbT",
  "key3": "5ZhuXGPbtYxi3Rq8zjPSfJ4eUnMR7c6rXJHLvqHjDdatfxWBataCCgf5bLMpcQXxssX9Q1rw8aEQfQg1tfxF7xv1",
  "key4": "3RMaJVPuXutVsTpxQCM8xj4KFojW7QJpN2ZFfYyPxc9Ut84667hMCigTwPhLMZNyLRfMue2ttWjwYmEAnikV3XHz",
  "key5": "3NAeKnYo3U5wdE33m294kf7f7uXTAwAW6pVtWMcLQVwNKGTVj9kvgRD9VT9TELwxsqfkegbxytweFEBHKoXnya9u",
  "key6": "rx1gQcoDPKHeZZYvacYJwAAvvnDZKCbd574mMRfYaK6g6K8JnhjtzCSAEc9uMoUQX99nWygCSKJeEh4d39SJGEf",
  "key7": "2mpvcsJWf1pjzidrJBGkxwYe1LBqUSiGVEWztW78n5cgFQa9fyHnTMB34m6EKuVMRz92nAokqSjx2QjPSP6j2935",
  "key8": "3qRVRc6mMwHsZ3Dh2hu5rpenHQjHTXd4AzWT9frvezMUsLBpJmKw4PPAK3HMnQsRhQm5RC4Sww9ThsZF6McfzcPL",
  "key9": "62XaTdkWqFvjKwEgMiZbUU1NTgW6BJ8UHyjsUjF875B2BH4WuhiUR3nt2oBgaQLrxVkXPXygdoPoCJQwZcWh9Nva",
  "key10": "2zuvcPaGWBqM3TK1udRLBPheQds9PwznN3wKb2t5qftXU9a5fQPeKPFnouPDkFhkLBfCJm4RPAvWRdugzPqJtNmj",
  "key11": "4sNDFmXdfbytxJUdjJLRcxp6uRcyy2eTRDy7WfUa3nuV9TDBbpscmmRKgV4CXuoMCVbPEFWdxqRUD1org6rwj9Wu",
  "key12": "dWr2XWkk1BAuqGoJPUScSnjDi4j778PJiriwyyZ5Mr2e6FyVADkbGxz8WnmL4EPdqz6EWCdXGz5FGrma6wHLN4C",
  "key13": "5E1PCrKrYUBhcCQ6umCF2HhPQqaLhmv63TBe14hEVGhMEGt4A2R6Br5o3JDYEeCVNvLkYfMgH5FFpNxF1X4h3zPG",
  "key14": "3Z71qgR3nJSwPEzQ2kmnqFZDcaTWt5GC3KRQRdqSmWGuKqCD78ji8jhsSUWPAGHppTjzsaURYWqKSiVF4VJSZKf5",
  "key15": "4yCvGsVPbbLhyGttBcvRtLUbMh7tzm1mHS9nDgDHZQ9V83m93CqYhpQMbG4zUn9M381cECNN6eXcWwkja5QoTRDE",
  "key16": "3ue3SL5r9qKmeZVq7U5N7GG5JKTybU8pHSnxQekKViAYeXGEY7gfEdztFWVvAq34Y2jHhdMYtFxakao5Ty4ForVZ",
  "key17": "5sLvpZFnmKshkPo1W6i6PM1mk9peHPGzXm7inJfU23rywgYz463u4D3U5844dPqyGBXbyGH6MDpVsGHafumZnD8i",
  "key18": "3MNsnHqHAa4TN76SEuWaGrNtaMRY3GpBRXExB6yGLPKMx53jfmXbziqzGcezeokysLF6TE4nbUbX1iEMx8asjztv",
  "key19": "4se8hgS64R8weczVgXgcnL29wQWaEKf4ic76VhrE6768ZCMuqHfF41BtfveyypMVfyaddKdvCUEQzxXJ3HktkWos",
  "key20": "3CsF6CUXKYAj5CdryDZTvocRh6GeFuWiQjA7oDnemJ56QvuEGnyrtR7cVSpqej7KeS4KPMY1LKNbBbaWerPQLooj",
  "key21": "4on6xW29p89tP3Q9WwzNEgZFi3mTFPXe7zgPBCqCDXuBXfwBRDDaMEih2wovUknseDPBMxHnpa9cX1gdYxqrxsWC",
  "key22": "4YKC2JWQKjSEaApg8g6gSaqWM639ZeNaddPKHZANMT2PbP9ziwfRtro3GfoHcDx1MLa2jT5MvGw2KiBreLj6dGnP",
  "key23": "5xC9wrsqJvsXfk5eET2W4m6JSaJa9YyYx6nhABXKyATu3i3zEuEmtJDY8kD27YxFrexP3CNQHdFvJTWY2EvhLNUC",
  "key24": "6w4uFhvG9RowG6hW5S25oF7nHYfw9HW2qVYji9iy7qME7kLN595fgLHcLi5FGYhNzmgGRhdMcD4UYe5isCRaPmd",
  "key25": "57qCZKPC8YLRXyA6yp1qPHt16rF25TcR6Y2X1dWQQ7hVqZCoZogNM6uP7hwZEeRW7oztHSuU3KfUuHinTMd3ViKw",
  "key26": "3Rk1ueWcyd2BtRaGExdbF3ELrcTtxYVrL7LoduEkx1gdKkfm8SpYGQztNErkp74Uh1bRfSnJqMhhdkBhj5FgJdMP",
  "key27": "MHdTxpWWizrXuZJRULDFV6yhpeMap6D9Am3sm8YT3KejMWPybtWZZL92cM7oZMzba5XTMKUcmydBDVjbBYVhcdF",
  "key28": "2uf3Mo3tdR1LE61StCNfuCPpRNeFE8bpntNn6Muo4tocvib41juTo2yhAgTRzTAv5AvBXxJWrcnmKYbDo4Nx2N5F",
  "key29": "3jpeXwkop7rhsp67ieouX3SUTRfYLk5GzVQGuEQduZg26M31keaEjNdqs4Rc6VNuCppsSKkNc4oByAQqZhFa8TsV",
  "key30": "u6o2LV289SXMH4zncHScgWP6TaetPegzwmkjBP8qa6hPvbiaM6WYr2TQfbnPQhbn8PdF29eVEx3zAQG7PSfdtgf",
  "key31": "4hhSuYMmsG2jFHRVTfMRU9uVg24v6fjGoQ6e6RepXQCAha6V9To5xnLtpNjABaZmsRCiHZtin8uXApTduQtBTKCy",
  "key32": "JEcYw8mxDh4hwGNH46WAmEvWiddxv4HoWJsbT8umDSru69dkRTaEfxkcEPviCYzguiQrrbCrM8NBhCFVSsqWpvS",
  "key33": "riGSE6casJJdRwwLKpqSbPkAW6BVbD1GEGpXZpwMSNfUrCGZTkHwnWUSMJjnpgo93TcQX5q1yCQBUtBHYGnFbYB",
  "key34": "45A7sPyqFh3Vk7RtyoKWa3N4AVFJad3upFKFwKh99xYweodJNTk7QhsZ5PPF8r4ghciGhgPzc5sh3CDU2t8HFNAW",
  "key35": "29kHfQiZxRVqMza5KZPJ72SVfvHVqRuJafbFvimXLxyNybi8ipcAEmJdG8mFi53PHM6wBAWh9Ky7yCsshDqUwUV2",
  "key36": "2mpVfn7Mi5Mun59vgStVayfT9UnS7ETFsgp44hhfisKTmbhncWaDyWQ3mf4ZtvpGDMe4PCPwTcb3caPDWDihLoSe",
  "key37": "3xWt3VknKQ3AQsRqhToW9AYig3Gu4t3Atqhv4quogevVfVzXJTiDMN4fetUcVSNunenccMX4v5rBbcqou3wjGaDz",
  "key38": "5AD3PzET6X5eQxvhG5EpMCTu1LbuJFuVRD5S6QnQWm2pWw6Ex9ThJzZPZbUy3JwKafbNrk1r2wSq4tYHeDDTjzvw",
  "key39": "3niYi4BpwwtJSdcd9ommz4KwVvCWpBfxAZMbQsuyseAbDSGapQXrSGqF4GSsjwH5BJJaBcLwvfpKVdXbM12sfDcS",
  "key40": "5V4mo7ovo294BXd7PaS3G1S8zhQKfjVSqcwBcBCzCWyDrkq4S2H29bmavS69HKoKfLeL89AFXHsYxiZ1zexjc5Zi",
  "key41": "VoKz2q8gw2dzLDjqpEEe4X6SEw6WUGCCXchZuKPtf4RXieMQ7S1Ynj1cTnGEgk1WhzBBAVsQkX1xLsYrodguvpy",
  "key42": "319nrkw9V9jy35auzQKLEfLYj54NnWDUR7AZqQNYRWFMDJcECdMvVN2mFASxd9eb7bJUUmaE8oyRyq68mr8kjWJo"
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
