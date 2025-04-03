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
    "4PzmjicKuoByKenqZMxzE31AwSs3YdM2r2iW5R2AcQFdK9Xr8HWffZvZjBnqemZhqGKmHQAh3aCgY5PtDF2Vn7cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Z2QwccGDdiYAyJUQrcNu9UcGzWgdj1asowp3eB2eArMijaTeUDr4pDDG9aLCpSBYmz93ECy9V8yAouTKXZn3aa",
  "key1": "5Nw3KG13ws9heRXSgnzzzFLkFNy1VTkDsyRB9BMtEUhJkmKrC4VYSNjMBzs7h7RqGjjLGdftumL8LZJ6tuygzFeS",
  "key2": "24XE9a663oJqL614iUKKLoLmf3LVwBJGXf1m8XUqC6Vt1HxNpHodk4Csx6w5KP68Hpe3yPPzJiUbyYdyT6DBbr33",
  "key3": "5atX9KLzzTi9LEt8t1BbjmWM99QQJMyfSZdzGZR85Eptr2q2c6n35w2UK6P27yfuF7rE3pqnJ58V6rLEwHy2Z7pm",
  "key4": "2HoCYeqQyEaM5RPDQrpnqPq5BYjwZYTnkA4iGS1gwabA5H7cmGyCxnCVBNokf5i19LDyxS2RJoaMvvn54bSytddd",
  "key5": "2CUVeb5wSWkXB2Vg9ZEC1dLTz75EPgNZFEoQsLSJ71XisgMDeBNMs95oKQsUhdPrY7ZQftWsyF4g8AiBdiXLPtAZ",
  "key6": "3An5ciftu8c9E44n1StxPpKswdVmPLibZYzRbehZUh363djQbEgEkF5fGhfPZSdEP5uynzDxHaBRDkYdbFJNHVC3",
  "key7": "3bZosyHR2zwxKK3mqKSU71he16wdrrnhuT2EwUsohScQGiBDBrgHdHJN4hXPfUqCVGV85AjryZYRJzqauqB2potV",
  "key8": "4Gs84eACoUkHoPQB9cAgrZdqGBG5cyGw3APeDxDmNp4j5osgJaDPS6tuWcikDT2Qj2jPLA3BdSC1K1Ddsh6FY44n",
  "key9": "4pqeLGDoppiYEu44D5MMwjxEKECJBXcpiXn8ghf3Lsaf4EuVDw48rEqruLraac7h5G2WQdpt7hr3VtPMSYcmpTXE",
  "key10": "5gqTxqpBA8XuPFtT5jdSAknM1xyFEaoPB4FyoY6SFPFSgqsL9MofvLfEi9WgcRYJYFLzJBYJnwJy7AgZp7xvcZDm",
  "key11": "5vUdemqcmMD7RcgJozSdKyyJHCuS9t7rD1GMeUM11z83Hvnc3ZzRijvjAjNVG5KNquT47c7gsYzuJU5g2ffhMX8u",
  "key12": "3uNP5Jnk1oD3vxGJ3y4474uaBEgqiaXYYCTMFfoefSMZUAEH1GKYMfZyuyDi1o8o3ViD9SDqmoEXDL8M2ug2Qre4",
  "key13": "4Xn7HUBLojMgDfDjXkbBGp4ZF98pibUWdFopmHsBB2imibLmfXLTswshisjiRJuGbA4M25ALEjKbqsyUdXfWyqoX",
  "key14": "2RjT6RadndHA2H1sYnZfTpZ7BShdkVPfRJXGtzvbMHDNi4RutkGNt6bTukqwATUxnrudmRQYXVnXscqbWdNkqsiv",
  "key15": "3mZ1AoqTtJgadTQsFumU5GdFuZq8RbjoHR7AYURoG2TothjG4i4pQ5FGG7WMLUg1Lqm98QWBftmoZ2HDW8of1DZ5",
  "key16": "45t1diRbVKgnJeVkCkpGC4chif7czNNqKKBfJ6ymx1WW36hZPKYTap5uQzjzVLypKDY8u4oKEoeDCYMHWk6JNb3Y",
  "key17": "aLxxJJ3i2WVg5wwhtJCGVoLjUP9mxZmMvuDcpLspNA9Qm22vtAyxePb7Q4qsKkrTTqgqvY1DKot3sbGzZKJwciQ",
  "key18": "2Rt3VRLwizoNGBcC645FvqeXLDerm4tZyhWSm8vRBbhyZRyWUsmHnkaLkYbBeTXVyfcyZA6mswiNgP8fCkLb8fS3",
  "key19": "5ujArSjubg3Bj8o1fec1hoMcQnmaBHiVrVqiNB6LnLtxkYdkCMnocUzv1QzoFM7hr83tgBRxTdejoaMCcFwZq1LG",
  "key20": "2uedwakZMi2RgLX9J4eTk1GzNFse1oL8AVfd9CvxuGJDAmWLSQSS8iJFWDFy1ww3pojL6EbWp8GwgUnjS7prMEZ8",
  "key21": "4P7NEWy2kRvKVsVifzQguWvU5uNkKGz5MmLvUSD3JW5EGtSebQdbHb3eYNkbxRywGP5a34vS16Qd5SwrpEVDWez8",
  "key22": "365utpZE2WVmtXkuvKsCTgf3yxRyQ1eL7HHAqiT9VuWcaoe9wipgMRx4Ku4LfPPm5cRE4huHSJa6op1d9uSfaAyj",
  "key23": "4Z3jMPsspKB5Q2BkYiAncmrxxhae2GPE55u9cSC3thzbSQNwUmbJ59oA7YZenc9TPsYa3FaXaAHpfZKiqoGkGK8u",
  "key24": "2YRBeVH3WHti7y3eM1SjfmtFzDMg1JiofUjPufR5ujnm4FRF9R8LCaf6A9CpKtx7guNwkD9nCVQQhCCXUq5yba1B",
  "key25": "HQkXFpcLsQyKyvkA6BcanfnaTTn8rDrvoZR3mDwGBvZk7sF3w7CD9LxHEKqwixAaG4ZUwMwWAJkUQ1MCLfznVBT",
  "key26": "4VgxWi1XUVRzJUvsTUi1Rqbe9UqaeUeZ6XeETa9pMY2Txyzmd5zN5FpAdHWH894Vi8YiLkDzRHCXNhyt18BCPLGQ",
  "key27": "64u5QwCakWBUcLmAkrRjM88pbSND3jd5xUNLrWwRZA6ELAr5wwdfDoZYDcJPtezzHPyv6jBkHswJ3fTW81M2VrJm",
  "key28": "5AyvEAFKsqSuWWzttBJsXyS2ryBCwQ4y98gwTcWg8yY62oVNBWbbjCg8qMm1oNcSzaeaj8ALgixq3ThzJGr3suzH",
  "key29": "5hS5RoRvroLYeJJEcFhPzRBMa8yh34X4UvY7w3WTGpUPDGayNAiyabwfdzNKQeinXzvqbUPeSeeiRf7JBpRDxhc7",
  "key30": "3Lf4SStLxjsdLW9GwtZYAgdcYSJ3wkvTPk77vNqBTVppAQA11USxXMC47zeTPwkRy97bAwMUExQ6dzgKWNpbsAC",
  "key31": "oFGF8hgBZDJqCbiwLu3vywWgk3k7y3NFSnMqDRirHkKsP3WeeP9w1zj1MVH2KnHMBuF2TFuXNC9DFnXspiV4kwq",
  "key32": "3F1VyFWgsbnqpywPwqHA4e38bntwirXmBVZ6FpXpRJkbxEvSiZ39vsF89CYLB1gi5d8ah1zQVc8mw7cwEjb69owP",
  "key33": "NvbFBLXbQ35oqecPy6gJE2vkxZAZhVQxtJLWw4G6C9VmNNgZnGXZprumMw6QjXE1xPAJ3H1HTsSG5f6HXC4cyw5",
  "key34": "2BsZLSLVRZHduDYLx7DkKAxbRkZG58Kxi6HEYyeqxC5SM7fzWeJQWKReWPnhXtXVCZwhLqNtbctFRf9iAK11PAGD",
  "key35": "48QW5yJ8NsJRvx8BHRUQNMRMdrH6Eafqrm6LiYxzgJDqpftNir3ADy1gcq73pcueWYuKKFzDrWxwBY6miyZa4eyh",
  "key36": "3ThCzjxK7uSXAQrSYo3dJFVUajXHSmvsVE2R6JoFUwyqEA9uLF1HwaTci6Jk4hnmQ3Vv1BtcAS6yzwrwE2DBEzKq",
  "key37": "2PWY7gr6NSGzx1AeQTSvQripVZdA6CL6Fcq4Dvbr9hcmbyw5vizt76hwzEq9vbnUYnZxNThpDWjaJDk35zLtVRau",
  "key38": "2NjY5REUYwDAQPhX4BKXxfsuecnFmnS6MKcfqMG8jqiLfP4M59KGV1HRzc69q2gT4AKYNfafdELjgHGxkoSa2A4S",
  "key39": "5ZajkDfiCy9n3kxwbDqBzc72RZLTLYKG3BBKHMzUfrzmKMjT9VhDhR3fZJEPyFjoAvUdrwCyxM15xXWobaqqmUiG"
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
