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
    "4D3E2Ys9HPK6HYCCMFWJZd5H5Q67QiEAUQ3Fmj5dEXYEFxo1snZs5ksGtNAn5PeURn4o8aGJJyyKy7BEBPr9APak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRVLyQ5mrZgQS9xK91amrJp6EwxgtntHH7HwXipfDgstSF94PCQwBN6kq1b3ubYhkpUFGqkEWGyDRNJH4CScxSy",
  "key1": "4fbccqecj5FmNSbuTXh9MxKdH5ChHA7fkxYNchuSbW9RGreMWKvox4jM53tbS8CrrRn5L9iX53zy3NzGv5qFTQYu",
  "key2": "3zNtU8FLmZ3nWNZsrb6YSM3CV41M4yWXaGuL5EiYrUYBSL9n6mYthUi8EQASFeQmsQg11ziEi6WrPfUYAGoLo45P",
  "key3": "4WhYbro5Kh467gj2bji1xUMwGkJtrkkxMLijg7aDLGozHbHVxkNi9pK3LuQ89U6Y8tydRfE6zYERnRuB3wSrmXUN",
  "key4": "5aB9SopJVfyrApLXiYfU8jvgjhsYunLhoDMkNbREKTRZdJUT7emt76boqcRCETx6sgzJJc92eimEcDdgkT6uwUyB",
  "key5": "2FhxuUG95RkyzQYDAYDatkxhh5eALYFooJNkS7AJfFMJxmLLe1J2LnmNizxWamvGvaFYX4wTULLBnpEMLwxoGjXt",
  "key6": "33iEZxHxuEBwTKrabq5M4EhVkkofTz35MjEJxw2BG3Fa5szqfemiK6MgvwbGDF2HYsnGSouKtSQBwBcaTVRwxn9n",
  "key7": "2PovdwQEGQCGYdwRGpHXB5eyq2LbAtcKaXucWiFGavE96N3fNdnFEztJwDq91MatvsT8CouRhevd3WQ8ZDgdqc4d",
  "key8": "5DVzdtFchVGiivJVq3r8ppdVbKFn7mBSHF1x7ULNhB82uXFTEe2xw7tMeubfZv7Noy2gwxQc9nh8RdJpX69owveS",
  "key9": "51GpeWBv486p7Pvy6khQTwDe7A1mcrkPVXuZgfVpeEJaoJq4VqghRLQCs3fXQJUN7ywkzuEVkQGS73Y4Z4m341h9",
  "key10": "5PLpJ3CaypTEuJdX7KY22kqWBAYtYH2S4dQNTBDYKi6bkNbkQGUgxarLhqxsRTGkMd2KzmxPhKtgMPZ73EkShABV",
  "key11": "3eD9FyW7MBCQeZxPR2RT79M9qEiYCbycJH151zCLCAseLC5k25FnHw3on4U3ZaXLkpb7e2s63Wki9nLMVPqKXwwg",
  "key12": "3uQbLHJX1CcMJptDzZhEPoLiVYyufmv3MGwJLjFLgm9RnEW53mNZZTWJCJWNnvQV7gxNfgnFW98R3th7hyFi9DVN",
  "key13": "47vWNp3PKiZe6ksJj8fcB95XDdV5fx4o8sRaiLQVz5FSHHAxNWQUkhLT6RLRLvGTvK8hAEKyi6hBMRHKnJxL4RNL",
  "key14": "Fa1gESkxYBBJcDH1teP7Hft8tiosTqUSpa6J4AiXhAF7vs7fiLZ3nZu5n5T9iFknMPT1xxcLSQNHragvrssnU27",
  "key15": "53KV7bnbKvR361hmUG1tQpcGKSSnxEiv5Rh4rRPKwoxNxUFLtFPVLAQJ6HUB5Fyx2SF4A4Nr79FnmrLcijKf7fUR",
  "key16": "54NsHNoTaLCchZKnwDdE3XpcqCEadWhMrzXgY6wa7es9hGNQeTLNjxvgM6iJPeHRdS1qffEz3XJyQgRjApJsjach",
  "key17": "yA3EV6wwTDcMgU9hQEAxmP25bHvYcJD9EPVr4Z2FCX6zamznxCQs9NefnarcGemPak8Upm3EF1UDXLZQQvAXHDs",
  "key18": "7LFwbPmNcJQ6hgn8YStot1xnFTLRSHpsS7wkmJYSC75bBfxFv632xLafHn6wsHwoqfseKXQpo1hVMqQ3NSGfE6u",
  "key19": "64k761z1GjbNc5X4v8tWzceMyG7gGwUZNsB5CcRfoDrtfUAhV3foY3ZHMZFzfBpTKiTEWoQ4hGjqrPeTJtkr3D2R",
  "key20": "4ok19oER1Hd88yaFMrpbSXphgb2bzNi9kkzHQhUBJqnhcuZY69ofd5u6uvk5KPULsvUe8iYDDZWivWtYqacj1F7o",
  "key21": "wpqS8RhgFy21iWohJ35KFDk4HtVwCEBQvs8GgpTNT524xsk8dGNhgt9VGHPTaP7pTkwvj7vtgpVRkSncbprdmCE",
  "key22": "51fgh9ajuHXpky57noNrNzFRvKALxuaBW6Yb9P4uP7dBoRyNTYnejPjPgRWbUWBYwAj26GE4eFoVaM8Ecua1Ed4Y",
  "key23": "4q5JxJFtRRZWwKhkfmWNFRxSv755R74PRS9dByWrbXGeGViaKrWFz2mhLYyV967iow93vHVLKNcdMNnFxLhpRd89",
  "key24": "4Vgo8WNfSmtobRrrws3zVr2Jpsx8g9KFS3Mjq3QaWhdDB7NevKcBZVWRDUnsQVKxvZ2uKuBTcKYXwNHyv6qfsqVe",
  "key25": "4PmrgDvpt2L5nS5YvM6qH76aQuLzsR63RAkNFC6hpgaWcKdWbbk66mnfeqCUow5rDqismHA3z1ACFYjpzjsMyGCm",
  "key26": "4zJpMDLcF77ZtaATjj7Zvzgedzc2oEJqJem8jFNZVH7b2HnDcPmgx7WkKKx3eQtaVAUssirj9raaUQJDn7rqVY3m",
  "key27": "4u16h91zKMJUF5ezzPph95yBx5p3MnSjNZP2EggQ4WL72Qf2cRePj1TE6hbmhw7AkyyYhfbtfbPsPrVZ3AQopSs5",
  "key28": "5cb3qcd67ib98bwHrtuzmgcC28kEGM4Vkp6kq3HqxstKsbxdrrh97jkbnmoqiX7BB5Hqh7ugesPJMoos6uQsv4gA",
  "key29": "cZZE8AckGH5ooY9Vj7KV6HDJ1Q3bhr1UKqjxDSAjCkNgpYN4vuGBYbwBTBTmxnVro19WSqLXmUYQMtaUVKcLqWR",
  "key30": "2hZLkEJCoo8FNXe9gzhq9SXhvpCSEabPHLCS8Wp18VvNXxDEY53qFhkuLroutSestsFvzE58qsrBaJ9JmKfkpi5J",
  "key31": "4wHJ3Ac2d8HdsimrRgBTy2Nz3EKHwsLxuiY18x4wb16794D1HhDk8LHDu4fyrhs5k1eD7NRtUEknLL67bTMhYWZT",
  "key32": "4ThLsjeS93SvrRhd19KXJZ9ZzmFraDsJSgTkb9zbssSpyqF3yE6xpSaniFcWvCcELmKkUFwNrC2bjmx5ifdzKD6T",
  "key33": "55NtAUsUhUKrECAHMUYkFEmTCGhq6DgfHzjmQGhkQNd5qSA4PQd8XAkvma4SeNJH1vZrTTdKs55VaLPPjYrMT7c4",
  "key34": "4k6pfmr4A8obDSGuvqwYUKqRdA1WTUiqzQnbXFrPVvsT6TbtZs6un6Ddf2NMgDcuRhbAo9G1yCAkUtoaiTrQj7Gk",
  "key35": "nL4wwDfSo61Vb6Js9FRPECWKgkHzvN4NtAzr2ZbXVnerq3budzavJakZCc2R8SzSswNAjjWTzrfxdusDU2TPTFX",
  "key36": "29PKj74qEMyuqtv7jtzToGrfjJVSvavMyKe6P1us18uN7eFePe7LDeM1DsJADAfdmho4B6ZJrXBLRVsdFBELY5Gy",
  "key37": "5bmP44RBsi5iJWoVezST6gkdDP91MYpDY9hGn3XrBUBDwG1BSJgDtUapX9k64GMjZZqXqKDaGNrQxaGdE2GCLu3x",
  "key38": "4ZUZKY6YuGfKkpiMiDcCA4gnhjW1Y4QP6HDcjZTjBRnaYeBGVcXxp6meVUNuHE9aJi9wHUkxA8s1rjCvPVEk23bw",
  "key39": "57woKqd9M2uckhqFNvmHUSWB75h8BoBDT83Uzi7r3sZjX2VWBzyzWVDo2XyiPUDwGiownqFVevwF8ufPFzDveoJ1",
  "key40": "5DJWS4EoHbuzVkU2xHURqHhVCnb66E9zmbiSYxSkP1F3YJCALLQPWs2jCDuXxn78uKKhoyxa37P9YZPkJc6epB7q",
  "key41": "YUfe6HZViZdyQWLzc9Pk39GNStJBUepUes4cLFsV7AeFU3a179uCE74mfMMNbVJp4twHcezQR8o5DCQRs8LMFEz",
  "key42": "5oqX48A4Bc67DFPQZcRzjem7qKATD3NV1eDKPeZUeuzPCipmYwuFGcxG9VbtKCpuEyZFhPk73cUCeo58tUc4ANYF",
  "key43": "2bRHGGDLAjg7vvjg5hXJmadNi63PDVvUmfDAeej2kKrJzpVDsGesPUF3SdALssFKihihtncw6fe8GVNy4f9zKrvE",
  "key44": "2NvhYpBvfE5uSMrQMDBmCNtvkMD4MbExafVbLDx13kLCs6uhFn7H6PisEzot6aMvmrMNeHp2XMecj3Tbc4iPHaBo",
  "key45": "2RZZSEC8TEwvsbxb5sMUKWfAKSKnd8sjv3Ewj2XWvRiHjrGCeo96qDzwyLbZ3d6L3h4aA9cu612Sa2TuvvrAqhBb",
  "key46": "4tEM27PQUPgtey7LxKztYErhoz1worKbirR4WEz6GwPbuBD5dAsG9E8LmAiyraUbojk6GCXYJZJLtW5thQ7wkJJc"
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
