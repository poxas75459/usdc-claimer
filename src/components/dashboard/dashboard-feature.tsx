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
    "4Uoqz4k1bJBfyeEHY6dATbDJE4aBH3jPeaS67xHMU479Xe7wcxZVUDptPLzevJAXu6gRSGMTnr6XtHPFhM9DAhui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBhE1rpLBCjjY7hJ6BwEGhfSv7dByuXS5wXPZbuocoSJeTpA92aZhSQiyFGC7tE93q7S46Paw2du2BD6kSAwgeW",
  "key1": "5BV2Z84TyrgRPzywbfF5D4n1mLk44ndCLQvFBcqaYXDW3a9dRXVW9dLSJ5eiUeKkEnLVtjuPgqoEiyuPxF23RYk5",
  "key2": "5LGWCBdFhAuZQMJhTJswVAKCpkJ3XkeNdfA9zi9PL4jCVDzfmzXhWH5waEjrbkDJySdktbCFyE4v8J9FhQnytwoa",
  "key3": "QDim5FyjhsgoBBPBe3NC2Ts7a31KQTVkp1AaXUvQNvZHTcY4TvrT3jUVXqHAs7W67wgMDsSFTgcoj6x44uMS3zq",
  "key4": "wj9vBCpA3vG8zvbPLZZpkj4VFcco9q6MKHPmQ61gCi8zA8UUfiYixXfr2Zc6D7BiHJ461nP5QnPMfEt5mNqq29L",
  "key5": "5xMn92iG3Lrk4LykjGZBJt75WRJdNfUb56SqYSZmx861xmTgdeiCXgQNSeZ3mfDoEyGDCeuKcEzdtcf42J9wNwtC",
  "key6": "2AcNbSVmL2uQd88TyK2CsEYsS4zxxHF7VmYazZoTr2UEqrikJapCHFGjr62BKYhYhaYmz2aHGtsxsCm3pXirkh2e",
  "key7": "4U5BUWyeKB57tiqdfiNpaWNugE9pDNGLiMHRqMepRB2T1g4RH6ma8m6VpJWXfgr8FRdWtoU9KfRqESQqf9M7PsDG",
  "key8": "65KzN4itCBpYga6w5XWHdHHXPSPkU7Ttm9PgvXXC1LjbzEUXJ1kJXoNtAy75tgamxGazvRgJaAthooVm3p84uiWe",
  "key9": "5NpicS71g67iTB4JSsWwxzMSVbB9Wvwx4LXSbZxgDmYtmTGCnSJJqXyn7qWLnVsgxcnBU8L2ReUZcqU9zD7z2Dg4",
  "key10": "Zmuq2RYZVz8R5M4WK8t377Wpk2yTyVjuqs8gqxvJTMnDmtNprNAmbiyHvMUaTqwYxcTEptSU8c5RwBdCUz54Syo",
  "key11": "SA1GnbjsVNvserHvQfXpTvBAH6rYEo8HpyGaRJkBP45AoEKHgCFgsAQBioXmFWD9E5ZFV8xngXrdSpn9EarKNoE",
  "key12": "661Wdtzu3Q6CsQFx61nSwmHUgnGe5fqwDUSj7TTvt7ijWnZ5eE9CYajKkhYSq6TGZZ1xcCPC8BxQt38J5WhtKswo",
  "key13": "5psuYqQVVCQQyPt7ZrQpTsKCAQGMJP1kRsfhEirB9WrZ2ETavmVQoVw4igCWnPMyfkUJPbL81gX2NSrNTrQwyCCX",
  "key14": "3xrtLgFTWkb7twTpW1WyeTuqD7XN17bHLwBVjVMvtFU81j3RAmESGu2LQgVjsYdqmxGwm12H8sBD7XQChKRSDWYi",
  "key15": "DoAvF6wy4TxLpHzUoZ9yBpjx9L7CRAdaV2jsc4PD6xY24fDkk4dFtfRFPPtC6YE4n5vVPkEPmmsfXQ71iiJ5QFf",
  "key16": "3ph9kZgaxdu53JGA6bUurdQL8je5DbyPYPmRyf8jJUhenHduNhbgrwtRZ7wWh6Vy3Bof6utohQJs6xmeh2MNV9NU",
  "key17": "4Nev6yy1nH4Y1cq7FBs61XZVr7E4v3oRQ6vKxfKYJVwXFjV2rtcSgb22TrfEHmYd2U4v43A3SCLQGTmMJ6Dy9eoJ",
  "key18": "4eBeXVeiyMCaQU5xnABQwqZXBpqRkF1iEVqvmFXxcDyDszBxR5p3nhFCTNZhejdzhvVbiNuFHtr2ubBY1uWZ3bJm",
  "key19": "5cySFyUiZ7bjMKq5mHCC3AdetbKyhYLAVaT41auziub6xZvs4cGJSSsyQWCEBc5gBpUW6g5qU9iNNY6dGiG4CqUs",
  "key20": "663yXrz6xL88rJMPmGYZ642rGWJDirgLyGFWNeJgZeZ4XAaXeRL8hqAV81enSg28KF4Rxjgk7YNDugbgSUMpAxpC",
  "key21": "4DaEUiqYczaw8wTuHAfx6MBLijuU18xhJGsT5tYdxp4xefLBXfSubwzSV9pC8Th8gPsmM5G6nrM7FTNAqtcevXno",
  "key22": "5y5atWFrGdRJhLe6yLRaSetR4HNCTBUBUnkvb8io9yFo2QbJciNvGErc7HdJypeekVT2aCAmAQ6Ew7e2VxFAdPNz",
  "key23": "2GRigqZrPB5fjneLA9DrR3pv8YNRQxnvposBxZArskQ3vZjXQ5skbbzYdmwXqmieEXZ1bjah8LoAfoK4PdZVY2u5",
  "key24": "3zU69BnuhC4gUwFhRGFnPZ2KqoJWzvKhuHYjnFyUYT6gdYBkLaoiGscbp9JBt25uNXiGqakELtwvN5t1iu5aStZC",
  "key25": "59UMHxWbng1Aois2c76mqSdCzqeY69RagiZGeTMB2ivrERcY4Mc2L263umg35r8oEwgc71oqfdTU2vfUcHmP8Gjn",
  "key26": "3SXhvuzq8kfLvk1BLeM46xPuMvaBeNJYuPQZJth6PXFvHi7WdLT4ukY1pCwEqac75HWFDJt61K6s3Sr35vT1Nu1s",
  "key27": "5C1zQfyLJuD5BFUoNZAq1C7TBYbw142uqVWapXAVh6Q6NSnQnV9DHPDSW5zWWoHPtys7zccGaJ5XwPNGzWgyqpQ2",
  "key28": "3eHBBwpAQwMnQfSCh2e9JGTmZnLNGVerJPiCw1NeK6wj7anzepy6g6g4pj6BWsrKvLDfo5ZDCXAwAq5fethrUk8a",
  "key29": "2wjfnrPqZdfifqdLKvtEqhUupMRTKJHLR1nGoEuJGiYxtRGFBvHuuYLJmWpUPebL5jfTL3u1JdMPGBdj7ZynZJRC",
  "key30": "5An2BaE51pwJpfxpwoNZiBny1SghB4JUSo7TQWLUT112eZoKGSbEFmopAjK9AcRUajnhTxrSJkZPSnkDtRTvUiKA",
  "key31": "46xCa3bJJjFWjKmcUHE15SsXSxaJJiRqda86ZMCELoYdAy7QSWfkVo1jJGVXUtxWhfLA5tZwLwC4Da2GoPFkEq1i",
  "key32": "5Tum9tXaqC14KEh8PeqkA8rw58tqMCWf86Eo7ANdYMakVumzaLykMD1WAkPUm9FFMgXysDfUUoDBhWBpyEWTjPfz",
  "key33": "4MzfdzQfV7mTNSiDWznh8fEznxtPJZ9pefYLY8siVZe5GgLF672xGjLCvSG1rixv9Y3hoXvX24dyLNyQqddakdyL",
  "key34": "2nKMcZCAVACSBwqNMciLvhahbHLocLuY3e5GjwUrgc2oWj6C6ZZJqtQbBUztzmXJhckeSvzmAwhWzSBhr6oGmpqw",
  "key35": "3bEZk3jbRAagxqu73sfdsgpLanTeoJXsi8DGHjYvM74niLzePWuinSpS7fWQj9ReWEmrwRcUPHwTWuEHLNT8nFCM"
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
