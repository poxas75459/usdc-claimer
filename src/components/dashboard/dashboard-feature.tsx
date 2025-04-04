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
    "9E1L4qRttExGEHXdwbNeKHKNP692zpMbEoHRCFm5piNpYQHJRZXN889Z8tAZb61pJ6p2S1tY7FVcC3VnZ8aehge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Q8xSuYFQ6eByDbduPWHMzh6jk4SuzzPFL7cYq1X6hqt4znH8mapdCqX8SmMMxgRHrd7tNuVHD4qNGeLmYbGUtV",
  "key1": "H34TbZiTiAmEVWXBStVaxhZQgGcpu6MJEKWSj8qJx87MeB633EBiqZGVPUhv5dVMkS1VGThjWu3CRLCzh3r7Q3z",
  "key2": "3tGU2jhfJsXgCxUJ3biJnyZAJH5NvRintpWuxdzooyqmpcmjt9SoewRF4wsJAKmimesFXVEPjnX8mf3HLBxp5JF8",
  "key3": "23VKV9QEwYfgv1UvkLXVZp1Eij6EftiqUJSZKdHpXtGb2sV3xLSNb9hT8eif1zA2eaPZNobRuqv7Pv5F7HEgZH5n",
  "key4": "2zDUdujq4oC61SXVPZYj8e3gWNwp9VcCTJPMWtKupno7WecHFT6GQckfmmPJXkGrmj8pVT7dBPkcBFtPJ8Hefu6g",
  "key5": "BHLdxgi265gQEvYHXDeAiGhf5N5NQud6fPn1Tp9hnjdd2rSij2nd54fSyTyihUGYWydppytEJoaJbu2o4q3Bick",
  "key6": "3HW61woLCf2r6KRFjDPnt2Cey6hEJkSN4qxrSCrZsRcfZvgoJSY5rbYTuFo93eXX6cUQRDucTYkevboSKWXUwLiB",
  "key7": "2syNjjD5hR2AqyKmHMJ3HVufPWPpJ277WZknL5fz3mMKaNYQuprLs8qyWsbqfo1LtddtoCoojQuF5qu3jWoUAKWV",
  "key8": "4jQeTH3CqSGA6pqHvpqDTupiunR9WSgs5CJ2TF5Z5xM9vMckkHBi2UU3LBEc21SNGdqe1nxNwQ4EsK2HFxbkYrqt",
  "key9": "eSYBZfe7CpzqMzqrSFh65oDzTFL6wfbyVz9K5ppy2Uii9AEsJBgf838zEkAnrDMoFXfRBJYFAoYC7AbjPpX7HAe",
  "key10": "3ivFDEWFC7a5buh38pfTZnND1cUemxfFC3CJR6XSqXiyGT5gs9tw8RkFMYbu8PmF13zdMVBFe1KRHeAgr6F1Fy8n",
  "key11": "4cndxcs9YQ29mTB2PssxoMHvttnHdegMUWj7NUzmJiWqGVHEyu6hVr6PycpZXdhzbFm6k45Ub6K9sduVxR4Fyuz",
  "key12": "3S6Ygfd8DYGspXqSR3W6mm2pNyt3Za7SUcfS8GraffQB593iCthSKcnfxhe3aURk52DdQwyxf4eWuoBuT18Dfs7s",
  "key13": "5wtUi96oU5nQj895aQxAFSCMGqPStaRfEUnPuPucMboa7P2VKFUhmGeYyN69t3By9Dk5bX3PHTo414apbvGihoMA",
  "key14": "22XsCkmmnySGCxkb85YjEHxPHAxuogAHMAjPWcrFyv9MunAKrdXuPwP6f9mvErweqnrBxRuTR4vRjwyRSs39Py6g",
  "key15": "FV2g2DJUtWoX7EMe9b9tNy7fStKMJcpZPhfcuweG4SyXFam1yL6LMU1NNotZbgwi5jJoTe85sCSjqCfMewroW8B",
  "key16": "3SdEfdJvAvyGKqcUu5Kn6kt3r8oe9j5Z7YK86iUTHKNZxwsHR7KCyJC3ogzck89txJtS5nu8CSo4YsH6gtdRjCH9",
  "key17": "5R2mnhfVb4xoKazHpnspJjzKwjw3D6QdUSbGtnHAdkXX6wY2dYGjSy6NTt25WMjzQVoRavmzoc2B2Bh2YQZxhAvx",
  "key18": "5BP4AwDfNQD5WX2hzmyHF3bgUnEd6yDBUJMFhniwQX3m5A4aUW9Py9GAqeUJyWbqNNWq7hx6Zu4Q5bLxkj2aKFt6",
  "key19": "4CdMC3AdPGJudq4qMRS6VYGRuX6ew6TA8RiSPUEvWji39HwZY1RzbZfQ8dHng5qDMcsiX7VEqngncHYJmjdrKN7x",
  "key20": "5Q8hy1V9y7nY6Si6WmrWBh1Dc9JpLvd7ALSQbDwHepp5SkHhCgn6CDjLp71a6W2yT2wppFvXeJ6pB838nhvQLsTe",
  "key21": "4qAPCjphD5139hndtE53xCMgaHYFPAyRboeiEJrozTTQu6c2zhxAN4RQBXJj456YAEUwrsYo4vE3oLmU4YWanG13",
  "key22": "3AQxPbxe7eKg5ii3FR8gMwrdiXdJkU3vX5zho49fPejPPM28BTXdnJHgGsEqTAebky8DqWntY7K72sUUYppyT8mm",
  "key23": "2prLpKZ4sFNq3FEnnwqiMkBbZpuSBo1F93sJzHyPgvFpbpKH6WEqtyGi2zDJYvk7oYyahqSEFyBZxWkzxqixvb5L",
  "key24": "3u5Q6HRHWYfmTXPQTQvhFHrEf7sCzVJBu7bHSq1oVcLjPBCN9iuQ5q7Xg9MtjqnpyMVpVJRPXbaxXEmroFbs6eh4",
  "key25": "47NWJ8HDuBDXWVb1vQDMjdJu4Bhw4nt6YwegC7AUrtxWm3bqzX11ShCQcE1mXvE94ExtPqd3TQZV8uByn86bEpDT",
  "key26": "5VoX6XqtJCcfinGhmiaZcedcgYZjY2TpKQCTuZBvhS2Wxfdoj95qNCBtaLL76GJG8cozJno5oGW346FG9ANKu1Y5",
  "key27": "kyhxrdd7mskGVHoPzUyQsT2BX2RJ736JCFi93HUW5cu7Y8vKGnTid4UT8uvcqDzoavcbPY6s5BCCwpJcFGyu7u5",
  "key28": "3G8b7Eh3qF7n5J5zMdhfudRQmKwiggDwppvXasRhx1TPqikxdh2PDJRZj6SeqSWN7PT1HhDhjEayZHTBYK7jqW53",
  "key29": "2LzWbYxNN8FwB4Yt6pfDSydNp23SoMxjmSCRkmutL4iP16JsvG2ZbHg5YDZGg1xWFFEoNh37xUAaF9186DAuLLtD",
  "key30": "rCDBFVvi4hC4skA7v8cbw58m4vpEFnmune9pBeZbE9wQs6pSQPUpYjqR2STiX82o7hczAKe8PYnCPrMdtuABzXw",
  "key31": "2Zrct2Sg4LSaD5SyX2LaVWkuk5umiFbnQM6bnm5i3AijSoCiHcfS5Bh5by3gcUYDPwi3ebmFzWhY64JFXjs2wnZF",
  "key32": "4adzQnX1gA7ichsDRGQ6pEsmj6NNKEehVex9KK5s5uAiQhsPrUo8r6ksXEpfpKBmMphmbmhtPTGo284AaLjm4gX4",
  "key33": "45ig7Koam6grZFtyazWFbsCRezAookUQTkGtP3YS8dpciTbvX2zuwMZ1WHsFfwSShZLsjavMkbdRvYqK6bxU4aPE",
  "key34": "3ZYnLKqh7wUYmVesrjJBDfnQa9AH78MEXWeqb2QDrA9ZF6Y2EjMPS5LSuCbS6Dc5pVFtFd8d9q6RQsWUrA1XTG8D",
  "key35": "2UU7wR9rHJDRLTTK5UexsfwznpmxvmALDtaD61Wos2Fk74s1oEgLGzL7FCEJZQhx2KQ33tzrzxMG4LzQYgHBSZoE",
  "key36": "1y8UV5fgnn4byLToQQtfzsBP2KwcNVchQiDCmGtBo5F6hTzpG1tpEew8pvV4pips5iubSNV2Ur54xyYLMzvuCzt",
  "key37": "2QqN1bFo4CTkioo9SpCgAEbLsnauoLuesXXtbVXmaS7LKDDn4SBYfGBt1F7QUdseYwKJiAH3U95robseBbxW9rdZ",
  "key38": "4F7xpgenmCqHdZSju3hT5PBCAZx7pGDG6XZ2pTocLUcMZR3Eo4iy9VNsepaMzT8m5EY7hEhf6ff8UH7uocNKPcwb",
  "key39": "5wLnuDpg1rgf5RXjiMWkZU7t8c3wAk5UHRUDeq4CQH4fmWe5KQwapdRcdEMLek4BXiLvMA6223issNtKZwoMNxm2",
  "key40": "49HP1J4w1HSnhgLrpRJjCdjw5cHPZHutCDqGBnHcvhWb47zifyTzW4LEzBCsyWedZ8sortLpHxYQwL9SHDjdfgNJ",
  "key41": "36nEE5RfRhEjyk8B25tY943WSbh61mVriCUZQZs5k5QMvJWP4hhrZxmVfL4iCXKrZT2HNzmZ1M3h9cckpGjfHeGc",
  "key42": "5TQwimzDuoRVySL1m51hnvq3KqutJK2gAaeki2vGoTSFhCbq74h4j55Hat7SdJTkqwDYNsKTWaXmjjbi6o8CJ9Ru"
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
