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
    "2DS81dMU7jmuCC26db4hCMFRtKx5DDP85CXn8hbXqMb3L7VxFDUmzbadgkskjkiugtQk5anJAJmTiQhHf8VmWZGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhVJqTobju2iVdosBDjufLYiUx8bweV8H4z6VUPsPnWAPn1rAVw7iK8ax32jXkTRB8JqSuEw67QFnsQhU9tYG2r",
  "key1": "4c2mjDmRDUwRij4nTh9Hdfj8jhXasY3pHcVyrVkUPnUPTQrZYbj1k8rsR2KVtZVsPDtqbHpc6qZHkkkQw2a7rjs5",
  "key2": "5F8sbUCp4eRqqrRMeEEaWkBgBokSQfnQBH31cFobhi5eK9KppqUXg9JthrxB3ZHnWMAZVv7nuaZkh5BMemQqp2yG",
  "key3": "44Db9qTCFoZ6vwWs5RP7R7UzJrJPu485Fgg6kRMVyKcwfmtZskcDpTUNHbzMYzCPL9mVXQdhf7Kfza6mL2ccXkPP",
  "key4": "2ficH2FWULF9gX9TEbLVmryMPfEUX18T1CmfudRTezLpcZduwUpUXJyMA4iBNVG8ccSZ7aGgrh4UnuYjGufda57F",
  "key5": "5Z7M4KFpZCqBnrKZxWc3m9cYEGaLmbTVDYffGzvHqx2DChoCarxahSxBioCjCC6t5S49mq4Xh1MifwdsxrqoLTW2",
  "key6": "2khDuhRXZ7p2YKmr5aNWvMX4AHEDtEpuqSkbhJiUu2PawaXYvyab9B4ZbnhwSTbYxBPwABZKufDL5LYynifDXBFr",
  "key7": "4Snp3TTcPtVTERCewgzwBCD4xZH6rSArsa3khY1V1cGSW1niNVrDe56rGxyBdyYZx511bNjVQFoGMoMWjx3ayaPg",
  "key8": "3g8rqsLBEG5saHE1XS69KqAvX9o6sTtPWh5GVXQnUfs3kmrhCLmxoQ4KdqCuo8YyD7K8hUuJpBCQA7sBtccQgZC5",
  "key9": "4iNamF8sy7npFafCH56AbE2RCNtN8Rx5vqmv3S86D9qviSguwLdrizxkxDyC95T79tqUJXbx8vfTkVVkK9WDVcB9",
  "key10": "4Yx1PEP1bTbrAeiYVXiK6qTQQHsJZ5sws7K99wGgh85QTAUcrUKjbA74mVYDFDn7Uan6LPTBM7V5Y5EeHvTTyJYC",
  "key11": "2c471zJThq7R6DFwsq65wRoEjbQE9pgXpEjAnoCCK5xQFUXGBTyMs4LNXHwCiHsquCAroefZf69BDx6Xoggqc1jj",
  "key12": "5QC5QvQpDNM1Gr9DwcixNMynpotXib47dijVhbXqB8FyPBH3YgTaMtzQKF2Nrj3rMicsM4YwVyAx2EG1gCPn2Kyd",
  "key13": "4YPfMZ4GtzFUr7y8EkUCcqZgxB4VruY19uo9H3rSALiYFcnLmZ78frCrsP9mP54p3pHmQjhzp4jKcPvaAuxXji7R",
  "key14": "wWCz2Prs41D8tTHVpZK8nFsx8sFttanLru7HacoVVC3pe8qSG7ELzbMeF8xZjVRrb7PhBtArTQ8QnHLD6fTrUrw",
  "key15": "3ycmpWX5B4xHx4UWMzKLMRB387MMcdc1FyjxVHbeNRhwumP4L9URRSs5NZSAEmWU7ZJYYDEaaGgP7mC2NZp7d3fg",
  "key16": "1at4nGazMnp4MUXaFtqx2zJPwpjQYiMjwrEh6zs6gJCE6GTRDWSpZ6djt98wS2NTtfjRRnAU3UTB3aLiKCrou6G",
  "key17": "62EWfc3kJJqXp4hQ9MXSahNHK7q5DMkCPz2CioBCmkFtCuBV2Yv5Ljf3Zvu29nKQqSwpVqvPE49udT7bXUmUbUbf",
  "key18": "qKnkSaM5GYNBvEC9y9qJBEev9t8D5pdSCuMxszcHn94YfvAGYAvB9ARQMRp3kqemiwpEJz1BegqAG39btJi66Qi",
  "key19": "3VAPaJT6oDgdwgpiwbrvkNrjXvJK4rDmU96R6L8kijV5xx7P7F99QamvoGXCTWvyb8FrC6SRuFJcS5gwi2pPHi8G",
  "key20": "272D24ac4dNXFLQtSNjz9UgCMc1qAkQUGTumz1DW2KpCSvTWZsxHapVaPiLtadDv5gk5HT2KyNi86yPTg5d5jZaj",
  "key21": "5gbLzuLK3nsFRLU9Hpf8wYVo3eaW4HHEyAkFaXXNufiy7w6aYjtmjB6pXek8uLaiEVrpZ6hscik1NGxVmj5KvKYj",
  "key22": "2yopbz9WTZnRZ6su2TH5s7hhr33bgGhfFgp9HsAMRNUp8g6nmS4Zr3hTJTisxP7KMeUZv12iM9wddE1L1yorg4Mh",
  "key23": "8XXw6Nt66XZc2okwfMH9gPsZAYcX4Rr8dc9HEkihJ7bQKWMdUFAva7V6Sa2wt5z4xihevPN8HHCkvgbVkJ1EVvJ",
  "key24": "2F297royrbQwHTWDMo1hmwMJ5LTNjy9sj8YiJMkU2RFokK36VZt4FtYDsZ1es62r7Xrg2mUms7eXQjjDqoR46PJk",
  "key25": "2C4t4hcJHZV97BukQMt6XT54mtHr5bmuMMddPtZy4cxyE6rHdbfxgLBBRSVAnfB5JKpgQGgrGkpt5dugPa13XV8C",
  "key26": "4vk61zbU6HNUcrCgjgqofW9tGamf31NgWwbkufqvFtd3VquuZn5kah5MWVNgvLTn6fU4NQ9W84Rvni8a3WgftNZQ",
  "key27": "3VCY8vFZDwWr8PnGd7d7uQ8JxNPT3fBRKT2ZV4nER9YYkhTxQFwrmrZKfbwQqaq1aaXxrhHecsxUBSeoaNgbymCg",
  "key28": "42JzgLzrn8GkpHuAoQ6pnGV3sPhjVPLGCr1sMdkUyMryrrLT9nNq5sV9fWVGnnEhHED2kJX3aUXnE655gEbQjSvi",
  "key29": "3h7jKF31c1RoHhyf63cbPQtjRqyhWsvL6Ai2ov3JCcLSjoKDXpDESZ3kwN4MdLqm8suAr2jTHBVgF4idbhsEQcm",
  "key30": "2ajA8JcGqJpfkMWnHivxwtreqVJ7gjx1D7hMZJtNKuCAb1s5qj4rpSWvw2pozLZnUWyLnyNDEJrVMdo85Zu8k4qi",
  "key31": "3xdTpbMzppwVEh6Ho65ZaYYFnKaeF49hVqJGqyQj6bRiKnuC96Ln1cc56CVgSZ1N5pSWSCFxuGYFqHMd1dY7LTx8",
  "key32": "2rC5by1n8HZFEZevKSow8gx9EVHdK2BS1kw9HgFdxEbjneLaxxWCojTCgsP41ydsPrkGQT9iJVyXo97nFc9D7tpN",
  "key33": "5jb4y9phFCLVEKp9X55HuatU9nUFMrsmVrjPdiwDeuWxgMDM9r7ABnCi38oi5GFNSP32wgLGFBjX8X5JDGrKF1jX",
  "key34": "4WMvBbbSb7hgDGcDW44heiLqnsE8nf5P8sceLAa9rtoo6ms1FMD9HDTJWC2ym6ifdQv6dw55u5UdBRBcARf7zqid",
  "key35": "2sUv4RW8AYD6UJ6UmzHZEJradNmsfBg1wjDWFXEnfV9mkUq2biUy3Dy2gN8UtWUjvgtZ9JPpesXAQ3nrHDtCfuYn"
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
