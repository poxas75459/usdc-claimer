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
    "29SGJV948ydRuPnQ5CMYLQk5qWtncwz4wunJBHa1cKTaVptMrHtEgnbvrEcrTPqw3cJshg6XcJY7pPp5jWG6SZoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YAKrzB3cLw9ekKnb3UHDNxYREQ3xnsX2JnJYi2tfVmqWBPhgQrtqQ5smRQic8ajF99TTmehnP7S6g4UVTetNW2K",
  "key1": "5ztdD81EXGavkZ5kStxJCJAByJnkqckLGzgPWUr8C3Z9ToLaiVQs1iMTUFbWQHh8uhaisBFQxaoQh9GegvkQzNpg",
  "key2": "5FzxCkq5B2t2BWpqth7L2ZkcMMS1Bj4Gfdyv4LpCqqGbXXfVziFHnFp7dSeYyhEZNm9dGtQsUup7c6kmWdPKX32t",
  "key3": "5xJxWGNw8kP3mfM8Kht8UMYRBrmLz8mpQvsv87qSTykY29YD1EqgmS3DTC4PmokmiWhyqhzAnmpfiPU1YCAMhyqT",
  "key4": "2UKVXEZcxHKQDycCq51gewS1sLxPBT5hCwsbPtTaGzKXg82x4cue8TGUJjyPECmRLgftuBiMj2bc4ncWcf7MRw9y",
  "key5": "2C69JZ3Ay2tiKKHrd33rGN74QVdrdMBfBYBfDjfxtL94VAMQDvCuvJeBRVqJy243F5ZxhWpEPvnJxGtXbhvh9Yh",
  "key6": "4NJZwi9RWcq1zVpvNrryvU6w87V297kG8DXJDQVSj69btqbxt2NPAsTGPN8hckDEJrYUhpdLhdwkWtXdDxgidbyb",
  "key7": "5pfhYrnUktzkXSikb6ovAaRkYHPfuCMVQjSN7eAiszjG5gT7NKvQfPkqEVgWHpKNTTwyLHWqVFsFViSLZpoVHCm",
  "key8": "2CFnzWTiWiyzbpMnUBSmAxUGpsLv2vdsMwu8pfXQh7c6P65qEreUXttyd4UwkabMU7zte47Vw9hYhx6V8Z4Huwbw",
  "key9": "2VgEMuHwLhK1j7kQ1xPkh1dcYp7g5k7du9j5yxFvpkNXxYJeWCruf35nDuag6SNkDZBkYxNPBKqpDcLr4Lpvij2",
  "key10": "5zEGkBGAYd4P6emCpDqtJQqLpiLPJ9Yghupqun3t9eCWd6YuUTn5WqQpTSPDrrxTx7Ygmn6svx73hUQToPajL63d",
  "key11": "3wU6emWDTt91oiUCap5jmtgxLpRnCA5pN53Jn6uaXe9AQ1M5sWBUYBo355PP6yad1zJDRxGhzCptk5Ar5fyUp14Z",
  "key12": "4Jsagon7JoTXcBvDUXmcRgKM9KGkcEJFEDSAdEuBB8ERgXA2ZHNmYnT1qTGDvFev6J1Y1DUa4SMRKij2HTBSUeha",
  "key13": "3NrDaWALLy46pVMwc1CfvsASoR4yiPxiZfp3SdfLABHai4TAW1TAvgkrvrHv5ryaESQHzckUBygGpaZcHEwhXHU1",
  "key14": "5ZYaiP566KPzUvqiEkR4dffVBNtnsSxiejfQL8GdvFvLLTmzdnUEymvyZFjkWL5kwMH5wGXkVMfz2bUsgPwsnZdu",
  "key15": "4b3ZNn34JD1AEvjm7JgeUbsHPgwuMrAxFEg6di5bkEV26E7Ry6g8Afv2DCags1K54QsHcK5xxwYHT1kgJrsn8Hit",
  "key16": "ofnBbJJAA7CT4kWAiuahefeBsizVEGb1HxEZcJwEdQ6aXykHjR56LTuF8Cno27YWyUqDphQJKhL2jEk7BNdife5",
  "key17": "4XJ1Yjw8XfMBdswrZvYSfnzCBw4FycSmiBcrDN27H2L26P7zd3DT8CBpA7MUpDrqAx6ofyqMi7rJfhPSPojZiUBL",
  "key18": "4CzLwdoPFoDJv2nj7gqTobW1GbE4w3CdJC5UwNV6P6AntR7ynBG88RKFYyxcKsQw2dMf9iMFsX7B78esxXQRVUaR",
  "key19": "5U1HvNdhAEWkKJFMRLuxbSeNAZXkS4yzpBiYcxmCBDFUMWr6pow6Zfxke1B9ohN9fYwmQrLYhEABzCK4woujZ6M3",
  "key20": "4UgwDVNfEWFSaPu7D6v2gxHBbLEcYkBqYCJFaMsH2F4QDwFF2etQHamAG4Pey1g6MzrrqYvoBd9yUoj5kq76TaPn",
  "key21": "381XsKkH12X5scgHq8j2YUb6Hx45eABayvARX3YzTCPhAuMggQydoZinz8LNAoGubTEUUR3hkUWyqDoVYq6m9Ndc",
  "key22": "5rTy1dwksg5HpB8xbQdNLdtBKMn8JGQx5zko9vS8XeLRUZ8HDgDSpF5awmQ7zPrSw7qKnrKYo8L9xYKrXuDF3mqJ",
  "key23": "5gwNDhTMLEaM8tMBSUM1sEE4s7YXzwe5en7GkDbX9vUpr1uotr2h7Pgg5fNkBoGypV7nzWHfbpPTaEsRaGG5hZAL",
  "key24": "2zBSbaxdiDfzVUTE1ZCcKqp1nYr8wDr2u5Ro7rKEv56iq9CGwiGqN6dUC4KPsGMj8uvJt9ZtmtJjT1PPSGDHiw6R",
  "key25": "5FTr8huGqtwXphNo3WoNkRnZHRptvqmskVShWRxrDUv4Kuk4ytFP3xUFa6N2ipxMt7VtmVhugPGbQpwXCVFB7CWc",
  "key26": "4pGt3d41uZdgPQ9Nwuhpm8wTd3d3WaF578qAKzngKLDiVnfFotmBe1Y5r5LCp2LJYBw9zTVDu66RnbdFaRuU2N5f",
  "key27": "4j6J8HWehvf1c75urvPyFipSgnYFZziaD7br7DjwWyHf3hL69nT9saDaXmS3KEP33HtZkenXzieQpJNk5fpjF34x",
  "key28": "2ikx75WcYbnxcSnJacKKywg3UmJcsRDxsFfgYvSepgDbJhQcEoNtF6AbvXuK7DLNStpB99i9dnLjG4fqobDEYPAq",
  "key29": "2kz64NCPundcUZk24Zs3hAivBpmSwetnv2iQ7FK6SJJ5bBcoMWNdbf2YRV3ZdDf16Htf1YBusZcr6ASEgE3r3ykC",
  "key30": "3eXfz5crESuW1T6tLmEq957igCC3iBNKzLQj1A6Ex3J3Q8Hg3XxJfcX4mAkgsQAo5YVvdMYe9zN3NCJy8WAuyZoV",
  "key31": "SHvtVZYrRKXrUT3czBR1vUqr114LPJxFQb2rHFrv6krZDc99Bmi3sJn2gsXQYjydq91BUAQJpEMFf41bs2YAdfP",
  "key32": "32pXosy4ccRKdzgXa2C5tGuAHjLbvDVj2KeadXuBotVxbBE9yqWuq7AnjNshMufr4aHZCLJhxdJ5PVscnyPFucVs",
  "key33": "4aEsT2fv594e8b8Q9akPWuaqHvHgtZ96LsdYornJJJr1Av5aH1CpEwKCGieQMBLCT9JLHAEtWV2cDxxBqBCNhFCf",
  "key34": "5RUe2a6kpi4YvCgcZ1uGMuhxSfefGYhnEcazC9kJSmfRHzRxPFKz3xR5AH5TXr9mb8mTr4XGZRuG87wycgQwLoKb",
  "key35": "4azSs2X19988LfRqCqbFo9n2U31CLbbBPF1G1NBhg9RB8fs8ba4mmJhRb1p9RdyY25MEoUw5XXEBcdYhcPT244iN",
  "key36": "2jssVsNL7UhsoppzWKtrkhoiptWYhepYzPi3KCpWcdLuZ435BPCHZgSZSZqVovybx6t2yLkoTFbughQxvQw8odX1",
  "key37": "5CsnK8aSz9MTTW1Dzp9cogBjSZPwEsuW1T2ZjrzqQoAuFJ3a54FqrLkgCzu9cCbBUV6ZtcPzXY1gFxxMEFhREMQh",
  "key38": "53Qp1hZEBTqA1jjGHy6hffVQQgQ74D69eGt4F8NhgQYmaC5RV4UhJ5nsRDb47qqDHax1dUUahBymWi7EJyGYbwXh",
  "key39": "2zDehh8e5oifjpsswoTdDyZLCHyL8gF8ve4Jik6JAFYzcTt498ocLMcX2hNSYk1mfAi4JrfGq7shptjCunYxWoKE",
  "key40": "4LrXMmBjxoM1s6qWFoST78zWnokvwZYJAB3brUE2Arreh3NfQph9VRt5qNrPShMMMeRjDLfUp6emxinLsvsZNV5d"
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
