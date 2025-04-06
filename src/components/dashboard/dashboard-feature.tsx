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
    "3kD18YCMDk6zGG7cPqmiwseAA8T5vJMbSMxD6Z5BnNjZmofWkfJMs4wRVBEnGmoguREshb7mXszepoghsRVvs8JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEj4WQk2bTkhqEtsjVVH2KudAZkR45WMt7sDh85HngmYLMc9STkpkeEe9AWyMsZ6MdA5VocsVRAQqgGsPeT46EJ",
  "key1": "3x7UjpBC4Rvp28Go9HboUBLNk83L6NtZAch6ziqMGy71j1emxapEc7FvGDQDPg5ud71xrLa1F21cjjmbyfrg3MYu",
  "key2": "NX1xU3xg8VRVnb73UHKrZLFvYZnFbjshfziUCrpQN2QvN1RCDNv2UwQgKdJbfByycN4ecSHFK4c84Xnw18P7FvR",
  "key3": "4za3epjpBE57nUurRex2S1x8BPs55kX81mZqP44GStqPRVHSjSAc2KPur1Mu7CyuBmVReLdmrroUHPfuso1Urh6C",
  "key4": "5o9mYfqfaLuicyyED856w1Ac9BYkVFTeuE5xrWLRq7zTQRcDBRfvLhjVC15sz8HA3DMQ4Cnjah4pdjaaFz4QH2hK",
  "key5": "2H7Rbmg4og7U9Xjdu9Zjz1n4jecSgv44t9oVNQgk7dTDekfatYMLU4CnUmJCrjwWVusNbxUVmbryPGAu8TpLYVqM",
  "key6": "4qN6pWm1Fsztntvwpkq6FAC23pT4QRNCDUTgv7uY1LoZAb2XQ4Hvw1DZTSVQPaBJkFuGnMroYfLZjrETCF8HWSzo",
  "key7": "4QkmKXUYywMTxnzEY5UM6TFSrgyQ7bDzJAnWZA1yNLV9fQQ3u7pWpaxLDjob7UocpqXCcmSgbztE6iZmE37TJG52",
  "key8": "5baQWrsNMDuS8dGoKK98PK4vwUU5JouFM5aodcsZmnrS945twbUdS1fEoHER6mqbSbXjZKbN49BmeUpP6h1ggRNw",
  "key9": "2Di5qFSggdPmfqiXLyK1TgtLdH2WX2V9oQJnLuFXVPo1NGeSTpfbUnXkxxHNfbw8Lb1GvRorFq7cmzi9yJzQ9Mnt",
  "key10": "5unJ9PMph38okMXTCNmSxAR3TbUMiEtFw5aq7TryiHVyZCSCcsWKqqie22dWpQSSDRSQbRabPyHJk3rpSCVXriPZ",
  "key11": "26ocax7WA1rvobebq5Nv1XyvNL6NKvFPA7YFJNYFLSZCf3kA8oFzBAiy4BxYDaHHPEQywZdBwMheDNgwTRLqto9a",
  "key12": "4ZqEqJkzDt1H6PUVJrWnLEW72hxM4fHnZ4EuAmDLH1JiL1zwLv7cZopNXfVDNapkQNpGpQasBu8U8U825e8Ty4Z3",
  "key13": "4EeMpBVfX3WCGZznNBJQopwPjq3UcR4De1FYSfgJJJTRh3Y6ffZUrsoCtDc2FMgVzhawjA7dCjiPujAcRkaHgxRN",
  "key14": "q2Tpf7sNTvuUEciwMHJQKsKf1vEtYmusfjW14GtHNVvgNbSeAFKeycWnpsXwByjStXTUHth3x7JR4C2ptP4qcr2",
  "key15": "fUvaGru4ywKkCXZZDk4HdYXFA5YBjXnWsCQSwPwPJBQy8zBf35MjNdFhpnmXGeL12NwphuowFD9KofZKgqnG9mB",
  "key16": "FkoRBR21f6YjTReGihEDmbPxD3eVkn99bF8FzewtBvyAoLTtDLrNvKi1iTonEuwnvJMiT8jE3auCxXuDDQhXjQW",
  "key17": "4nkjfsSkgPfm6U7SJvgdZSh2Gi26yW7R8mKx8ZWfZWw2RxKgVb3aanHTqhnGxNBVF8LbhVnDZpk9wNBXCrDmzn3t",
  "key18": "3dJgiDCReM5S6kmYWEEbXjicPFQKJKpKgLSQB6m61roXAcoeZPcyYWPVTmuzH1mCGV1Z4Thwj22x6LyHDfS2Gxk5",
  "key19": "V4tvvDSKT6dLRrPgrFfzmjh4U9fhTKFnKMXMbhCpLLkFsDN5LkgcDACcocRdbwiQvHzbDEZn1aC6aBRMBhLC1uo",
  "key20": "39rWJ1bPg9QDEatg7NBvJhYrdzebpxCTk8RCt3hosQfXFCs54Zu8wGqQ69yWrCihz1QCxPhxaKNCuTP7hepXTF33",
  "key21": "hPjwGaVemcaWorMEhSQm8TfjBM28xjAce6hh5bnZiYP2MvKegVmqMmqd5YwanNSM3mThmcUWXw5ArabTohteCLX",
  "key22": "gmshHHRWNEKffEFyZwLRwr1qvJBTCYrS2ZE68X2hXWXjRvpuM3WksW6uiUEz7rvnYczHmcCJhNkJMjkYCcMSgLt",
  "key23": "5qGMtnCKQMZ9PUeVsMa5V6GGPtoiK7FNj1TzX6xgwUw5oDvzJV8tLwfcgUfwPqubeYUdkeDfHZfwwbMC1DHKbCu9",
  "key24": "3hsJDDHaDGWbvcyQ8xWskEjweHj9yVToBVuTknRCsTnXGJPsVeCseVDvz66mNCNZNSgTjAwtLahpMMNjdP7kmq5F",
  "key25": "XzHU3Hp236J87WB8BcHBf3vaKebDMWXmMdtsgJaRPQHpb6jykFyMvD5qagkC7oJNzn4zKvgrzTbapqif2NvuaEh",
  "key26": "2TkMokYBKmAPXzTQXxzpcuautAKRRjVSH5AUewoBoEBbqHoXs2Z8J4pxu72gdp8oc32wgWXPgZAiaQDZDn8DVojk",
  "key27": "MijbDGvoH3Y5eneCdiDwGdUvuUFx42tH9M9w6gfgN1YQFq2KVMPRzZSU7Jx8nMDhQtkxkbBDf4vo7zKMMWvkXg4",
  "key28": "2D2ghyeQPt4bQdE1ZtHFqxtouE7sfSmtQY9HYpRPNdHoDRwuCWu1vLqRS8Sarbd7ubL5NuyDyYCtFTmrMdCKDhJS",
  "key29": "54YvV2My5JBoxYocEFkpmsZaXW96BHR4fCFQuNByB3w9KT7d19c6R6hH1EN4Gu797j5Jn52QkkYf5aJJozUcEMY9",
  "key30": "63pcYMbcVrqDQJ2xXdfnHJcD1LKgfXNrE3Y569t9TuW1dUK9dC5mVFzEY1cWTPcP75hTMvN5qyW7L5nW25TJNtR7",
  "key31": "29mEiW7H72ZrHG1cLrHRw6eNuZL4dJ15ATPA7aauFHPX28MeBD43gfp2V4upyDEhJ2RBmgZ7RvzeT3xkFufzAXS1",
  "key32": "2eGJ2zWVBG3fXLchmybLTSy2w5YgFng89eXzgYnjNKSQsc8rjixuiwrS7EQPyLzdRQw3iuWwb1zeyi5j9kLyt1zh",
  "key33": "42p94xuDRaMLvNoJBasgYzda5iZWURYv2JBi8V315fFEcJzzyeiYmWe7e5PMLgYTtubkzgDmm7T1KKkyLGsaLGHc",
  "key34": "3yQrntVp2ENJVJfmrCqcVZTsfJGbeVUm1CynMSdBCVitGFp1YCoo86pfwN6kTYgdouXMKmKAJ2GhhP7swSYzk69v",
  "key35": "PQorbvXmT4CzYCg3TohkQVLGZMG12DqsFdrH74CijtjkVXYq21fmRnUJYudfnwt8g8KKNatsDmqGR9oiqMwEEpW",
  "key36": "UZsXGZDX2FofbAvWwubnbVtQfstAhttRSMX6smmv5txSR7EbEar6ytTxz9ZhhH8j8DqtNodKJHYmymyPcUsr5fz",
  "key37": "4KKFEd8Mczpmgd2uNp6V7v7vCmQDSQm5vu29uDBaKc4NESV1hqnKAfF8Vehs9Tz2rBpVUTC4XoB5njg364cpRpfb",
  "key38": "3haMeu5WgLjAuZ1aigH59mGFjeASaQeATpZSCD3j8exPhHvpG7wfn3JwrdSVfhyrGgWRzhAbA2d2P1Go3cMpXVh1",
  "key39": "3NRKRRcSQMepyUm22gpGSB53BcY3YRERt12yg3GvvySD7EscULYGB3x2xdZ1pfhTm2TPt6b48ULoVMnT3RC4mJrP",
  "key40": "3MJPEUCu7yC6brgHnnEBufuASPDaXa6LCL252t6sQi21rdkeTaFcatamtw8zpQYftJ7xoupJ7Lv4kxPH1oQMrp7M",
  "key41": "3nvSR1AisjDEXT8ySCi2aT7Tg6bZ6pmPmNbpD3hnUaYF64ypy2hyHZgXWQkafNk4e7nPW7VZ6HiuTBZNLX8X5eik"
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
