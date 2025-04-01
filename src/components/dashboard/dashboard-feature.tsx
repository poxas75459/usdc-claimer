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
    "4aWQHG26Pu35U5W9XDawtmkCujNpK5ZHxyQtwicigrdP5dRAoZnYgwCRHK65XnHnmG3W5X8XdenUkVwon8B9kx4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTQYk9FjEM8gwBgwZshH55KaY4xPvsxeVamMwAYLcWZs4Uv1WgbjVS45VAZDsK3u7gzE54VaruR5ZMpTMQZ9Vkk",
  "key1": "5Mny1jn61XtemjFRdywxyS67HJeGR9Spu23GWiWmPRFVLu1jvPVA54myQD9TvnHTYC3ZpxG97GrtXJyciLxAvBnY",
  "key2": "3JmHBnSvYjhwvDekVCvfZuA2WD2cXsagiFcpq3qJLJiMkHraybaneiAcH6AnBc2DPth9BD64x26xCP9z7QLFQUkQ",
  "key3": "28o3Q5xbNNT84LtzVqTAAAZsoZAheA91yda4gUiUvSnbnRaJ4Txm2dj5MN2feAfiz97xDiFXxVitPqWcJeabZiW9",
  "key4": "4jXCYJChYM9MWYo7QN4qn3tHaATHFo2S5ZgerkGPfLD4k7LYbeHTHYNZFjkF2jQzdVdEf5VbxdgLhTB2DTenHujN",
  "key5": "9fsi7CeqABbBoGs2w3YNx7EfaxpFsUuGeeJ17JzqHutdJ5hZLTrBKLF6i3HNiBVr5kzmemxqDfEuJZ4V31f5jAS",
  "key6": "29T5aMe2sMTD6NorKAJuqadkj34DJSsQ9yQjdYXRNqTNHVWSwWSDfwAUDdcDX1p1h1ryjhJYQkst98t4C4eBpXNa",
  "key7": "28ei2EmYx3XLnmX8HZwrLcpoWVBj2rvugNzbs9fBkMNJNymn1vc6c8po5FdpQbp4e9XpQukXw2khVDWxXnVT6Cv9",
  "key8": "23dR8bKgxL6BApLcmHajUHbVUaZGdrJhmgCbGbH57QDZiSdGAsh6er4dpe2gWBp4LBDChuZ8LGvN6o8SsDecrFbS",
  "key9": "5R7WgyKPgZeLWyHtkiryzckJ46H5YgPdGPLsBVhw5nTfMHLE19N2EANvpHFP4QdEVpCAYajtiHyhW2HVfEhWp2aD",
  "key10": "5q4z2rxxNCmismNPe5JD6M6dthBzbjDCKmySw2ePXTSDDH5ZYTmQcnxCnRQ7gvi3itpXSECpCzTLyvNo7wAC3ehp",
  "key11": "3rja5HMpmzjUwjcPGmquyQ1dAnqxJMqahYj9dzzdJwgFTTzkZVW6Df1AbppU5ziGnYqRK9MwSSA1xDLh1JXFRFg",
  "key12": "3hNfuDC52Fvn5NUY6M6tQB6Pqq29XQFgXxvfX5fz5DcNAJtTPuZATWdfLUp6X9TaG1gQZnRoz92BegtdXvi7TyM3",
  "key13": "2nWk5EpTBYKDeDD7BYc5UE9TD9mEE96iXV4c7kW9tpXujDqeUu5degMJeasbmtUX5eNGEdxq2hvzGh9zWesjk572",
  "key14": "w2DRwaW3qp5cmV7QYKTw2hEZ4BQaN94T7qwAdqGG4rtBsGURCzsr8BSaN4JbN4ZiRHuPzLrbXuzCWLqjycy7yRi",
  "key15": "2dk2tin4iqE9zaQ2C43Z9SvHmZkHkgR6W8wJekinw6AQjkpi35tPwPaswoVLQsV4ZARvVAq6XudMuFtg3DKa5CQZ",
  "key16": "2aPxouPVrJf9sZRKDcgb15UELGnY22xsE857EVVTEYWJkJxsgEWGrp8uwqWBnLZYqkgsS6f9bJe2AKWKo61UYVcb",
  "key17": "3xc5wqmK2oCBYEudnST1JefpqywmyxXcQBx16JJzy3XJAJthsp1Lwxnsq3LKs8ebCLLnViBhuq4WQm81bzCgkxoi",
  "key18": "5CoTy1phvTRUwpbDpdUynRQ1GqhqwrRbdaqyRXpQbZMoosP127QuGiKKyfExVUJww6dGSdtyMGcckmpSX2VgeHbe",
  "key19": "2qdLuRXq1o9YwYv9FnpErpVK2BHYsYsk6aXxWGh5DSco6yBJJHcoqjLCgmYZKvc2wTYCVA9rcHaAXVzkBQGF8aog",
  "key20": "RCrhW2S5ZasVmPVo9gG3PJEx5fmrW6LDuhCoXKCY9j7pzfVraV7HDVFDsAWZaaHeskwXn8QNtr9YZ9qP2cniQUL",
  "key21": "3GxDWi2VKVbHuBo4JqYa7xP42D3edGNEHzZmVoByjkdwGBxdZibWvoTNSpmrWx85NTc8bTFvYQicME6UL2EnpBE5",
  "key22": "4dZoThiyCfSSrXZDeTJWdoVMcNptrq247gQX2hHA2w8VtbZZErUNj2zP2Bzj55L7zxjoP9T29TYVmrBb2wHv4ETQ",
  "key23": "2Jxyra2WCbHQTjVrf7XrDkigcdPRDsgGvkgmcAsMCyp7qrqz7DqRiwhPR24GayBDESkZWFBTKncabSYoz3QUpZng",
  "key24": "4cfcbyaxxNA1MFaHE6mDxdCU1CViSHGdqexP1TH1BzqFdgLriFWdFZTB8rLp5SEKd454MWafX7T356LR48NwSm9h",
  "key25": "4CajJ42J4uA8dti7ApmFVFQ7MJYiUXUkWVgmc9BVpYyrTFfYUaJPFCmmHsFxEcueKaBfXHXMsgcrWeknPr3qLbB5",
  "key26": "5QVZ4GUPnQZHH6swXSVV4TDHEHgdMR5tx3vi1CYD5HkT3AgHnVSBSqje5dtzMoL5g6mgdGVGaRX2jUiU2TvMhWKP",
  "key27": "4PrRR8ic7QtUsLojodqmYUD3j7Q3L7RUcAiQYZa5ivgXH5BbwVd52bn6y4aHfafbXXXBuj2fcKLKSZ9S5PanEzgf",
  "key28": "rry4v7bmrr2zi9MJG8zFtghdce8uu7WLzSQjRbQyj7etqstNh4MDTajpb28w6z1pcH6N9GYmDw3sHsQUeQeCxtZ",
  "key29": "63NdHNBHonnvzcVy9gzbSiYD8JHkhgiZ6rvYk6VXoPtwpWigwGJdzqWjUD1y75gCXjSPXRrd86LEUuJfA1HKC6Em",
  "key30": "34fmCAK5vc8q5G7fBCrYGJgNfm2XWuEzqcJZbqnTDGvoJn2JVx2KWKhPV71hjfAjqRkTiPyUMwokhFjTVf4KVK94",
  "key31": "2vjdjAPwtDTxqGnE3Nc4C79g6NMUnSFrKUXHyRnYW8NeKCbVVoXD22Qzbc1Zgz4Jbrs2qfa3g46PNoEHwAdEXzuk",
  "key32": "3QPauZhFH8kmc4bKwmStsFe7fA2NHSGXutkQDv7sDrgp6pWtKHtA5cYAkWT97u5GmZvtsX5Ar7NdwKJmstRSnQp3",
  "key33": "eFgCHU6x9bR965B3t96Xuka3wpSzZBEdNSbqWR1Lxv6ggrFiEVjH9811yiWob2hCpgfVQoDh1TUg6b3RPArDbVE",
  "key34": "3XuU8jrARPHy4nC5Hj4CE1EiYx2hTKAxum6DekvX1CAVUmFFnW4igKHAC32yit2Kn4ouGFvZG1Ps9wQjPyC4ny17",
  "key35": "BsXtFkST2tYEteFgGHKeZUesv9rjXxyQNWtfz8h3FeMKxXJ1fTu1rwSfiZDXhAeTryVaRsy2k7QnSGYJen2uJze",
  "key36": "4sqixUmaYz3H9jm9i3QDV5VeucAk9YfLzBgvdqebwewRZe5UMySFBhZsmMovnb3UD3XC68b6tMpgWkQ22X6AVeFW",
  "key37": "3pKfoNz5TR9oVRRvuBodsQF2rNkQbUhxj9X6sXz83mcvfYMJ1rj5JLhUtUuTnukWXKvCtYvyiDXAw7RDQesPoGo3",
  "key38": "29aVE6RTBS8DyVii49JRbgsfnqhoc4MxDA4BNLhTr93kt2EiikoUZcTr2Eohvt3e1wzVoE788NJc1PMzk5JvUjUe",
  "key39": "3zkTGMRxWk4vCuXNTkVv2zAKUBV5tycpo9L94mtiLVGrYtLEYiEsSC6Gh77vbVh2oBtHuhkah1FjfEnmeNjnyXyE"
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
