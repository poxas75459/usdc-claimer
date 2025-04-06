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
    "2LhMvW3pCdwVXS8B1tMABsWBhqTXZYj9KKqcyyirsVJZF5D6ftQH7hMpsCP29khvd2uatneH6Lo7GtJ2qhPkkpqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39suQT2SWVtNnRTHTCxJ9m4TjizqJbRDZiWH9qKgL42QejHEPqoCnwYWdZtzGWTJfXc6gjNkUzRZQ962HE4obaNB",
  "key1": "5du5e1ZbnPajU9NFW8SBRHRmZedwodwQaeJwz14e558Y4AQswB9sWPPPximV6LBbsRmCyUn6GjDScTTqaCdioR9C",
  "key2": "m3RhmkvAdE2toq46bxKYeCyfJfBZHgXBtETXcFddtNk6w3kfGeBxPLw1Lg78LiXPSpoZFqgYjWEqFcr1sY6Ke2o",
  "key3": "123qKJJcJ2LfSWTFrZ4JewfYZoSuJjXDmXq1wUz3MN6v8wtsg8c4q4di5egQ2eZuq2tpb5YNoUKS6bB6x4BQHtVn",
  "key4": "4PBVY2RYRNJHLvLrpc3CvsdbckBbMWgmZPGygeApscf63cc2EmffNA8otjMNgEJF7WoxXau94H4hZSiLo6o8C5P3",
  "key5": "bhrHBPztL3p65KWiSshfHyfbAX5FsLyDuWVqaJtcLL3kWzEqy4oLqSMPoW4wtyAtSah5str6B4xaACXRF2Ej9yb",
  "key6": "uk1yvNJoV9R76BVnLGmiEtRfoPj9M14HX4UgewdBVnxjPweLk2BF2HMPUBNtbHhxgDFhabvUF6Lty8TwWPWYc27",
  "key7": "638Q4zqRN9dKcxuLrpM61JDx1vXg4qxMWU8ak1t5D5AqTUw38p179HJnMSbCmioXg5S7HWpNXz56huPERsVzyy2R",
  "key8": "2Rku669WrBdb9jqQGPgmtv4rEdZakkkqqx5kJmSJ5LT8bz9JPmg8by2118TahHMevHjEEmZcPQtrCTAZNRFUJAJQ",
  "key9": "3HraBDRfCHVQG3AAsWHTckwFUSsez6Awj9Dmi4aK3tDb9ojwh9PcAw15BsEYXK4yUFX5jkRAB41VRXp5k8BzjPMn",
  "key10": "Cr9BjfpCVaCzHxssPK74B7mkvPdPRC4voNPCNBX5v6G6bFYRCpdnXVJ4G5qNJ2Aecs4JyCbBSsaNjj6q96RGcL5",
  "key11": "5PzCr5AwSNLZ3vrc4Bvv1GJD7iU7HhUsU3jvPomxc43yZEf8ZZxXbkeqKd532XC39BcAxuhmVAFwsyd4eaayzzpi",
  "key12": "sB8A1SG4jrqXns1SzLqXfMjwxZL2RD61uQa67VxxmcizrsHTWS9itLx9MX1uSMY26DQXvGoMscvX1tVf84XTKFr",
  "key13": "4dYuN7sw489tSgmKHzXqGvT2Pg5ZrbuELqGyRfKLVMzmas1GYinEcunwLvSH4Hhz4Rk4fgoMbcinxjRS7ozPzS1w",
  "key14": "5rQYukvXiiL7NbCWtd3C4EYHLxsP4JjZ3Q3upgPde9Ud7CiFwof4fRMjdVbp6S37bGNntsnNeRWE5e4SFWJbM3Xb",
  "key15": "22us8aTcb1wKJBoBTHRww9pRT4NhV8JbedBaaDM5vFhoTU9UB3zLx2HvNVqeEpw7WbGUtXHRWv1NqMDFWgqnioPz",
  "key16": "2H9aFxNJf4S8JqkstFGJarf9CW8c8JX7ocGsRu2iFJuf5suV9nWFQyx1WisXACK2hcaLdhDBYxne5mfmpStELsZ1",
  "key17": "35UtKqAbbo2d4CqB9mm8YjrDaYCZDy25jQ8c3FC4rJPRSAa8nUEDdxWV7MhtpB3L3FZ8gEjxACgfmK3wnKbyjdCP",
  "key18": "3a2ty7fUbov5TjVHwbG5NKo4ErirLwLeZTJEAVwSM4sGJoQ3xpT5q1X5xDo7hbaJkrxstgRAVkUj4gnqRP1sRSZ6",
  "key19": "2tj89uVkPb3aNiGUzJ4eFzS93BEoUY32pdwk7hCrCDsGMeareYFY5sucgbStmwpBiPahdrd4Ru8jbTgP925WVCDw",
  "key20": "2F5Wcceoha8Kuj9gbGAaj8WkTEAHH8fnL9NnLghS1pjfP7fjRy4Awzf1Qpeo7V6CcLtZyrHuXFNJpMXtRpba8SQU",
  "key21": "5wQeFwyhF8d9Xp6boKGsaGUqkpLLvviGHACiQj6egbinUUkF1MgrDJQdMLoEikQABWxPu1kdWadVg45bNRx5r87L",
  "key22": "5GSgxLPPhPN72QuuYBsArvhySuedqtx7xYqsYnSAjX9mXTpEzpugzkeRsHCvW2WgfbrZ4BGz9PjSU2SVn6fSpSX",
  "key23": "3qJAxST5i6PtJgKZd9fNXYYNX2rHbyJGgPNouj9yZAbgdru6H5WJ1aZa2SfrMKxT8osQPPJeasdfJQRazK9ZYSsv",
  "key24": "3dtyJX4YD3T5X1zbDjDQyWbErEKuPkG3Rrx9HyGLVo7WQYHrB7ayhpQLKMfgUQGugV72Cc8HgScLcgxDh8JyLjbG",
  "key25": "5MBxWWibDL9yS1oPkbroDQkVWZehPrRHyGuVLHnd14UbAEPcbk9qm4veDi5Y9Swmy9YQyMCD3LYZvCuejeLT29pq",
  "key26": "4dy1uvYpH9sjnrW5iA3r8jQdrkzhcoRGarGkPGGveLmZNqgs3b15CjC8LokkfEfMgZ341s7nFoGnCo3EkWVHvZcG",
  "key27": "2hwR5RJJWtww1CCXLNZ7SrHNkzPSX884cVRtuys8pqFwkmy3hEgrqzBpwCbFq2Re8QEpNEn8jvEd68WiY1N8hpqK",
  "key28": "2h16ZUPfqra84nNQ8GtAt1pULxwMq9ZNAJU1sW88Cp93WCdww9gi5WYhsZpb8gRvn212m9Y3Y2Erd4trd1EknHuU",
  "key29": "5XDErHQeQQJBLLY4mVHUkip33s1ukPLyqptdjNuJJ9T9QegS2fYNvgi93vj1SREwxvPW8TuCE4BQ2TFdpmbHuND9",
  "key30": "ZsuhtAHrdS5RMtauEH8qAhgWPRJ6ZBBeGxYsTfhiXDb3ujuNScGTp8NXtvZC4NWDAGuZvzKKPvumErgx5Y9QV16",
  "key31": "2WMB6ZdpqLGiuggRhd22MRtthCTLF1Z9jihSvnds7pK3YeFQkwSN13B3CcwgVZyX23ZLLx9pp17BLJ25PM1EtaAq",
  "key32": "2Pq61ddEMP7GsMGfsCq6hfeHXpbitpUs3f8LBdY4nuPBDJTvPCBBaS6dyuedv9f1HoXkqXsYywCL3R5VLLmYD7L4",
  "key33": "2vz6TdpVJwF4s49vGopqwEVvJrQDNYYoUvaM1HbdGLhJm3T4oPGD6omUvF7KPo8ohFdoGXFX7FbLvPVUMb9aHudM",
  "key34": "4gmcaHp4aexGCAbNQzKBAoLq8pTFZCxqGbGXcNEgeUtZtWYsfZK2xSg3voD2PEgijEGaePb5CJiUpk1mYrZMZxB9",
  "key35": "5TBjfTN9N9wUhbpNtKBakgZmg5t1LbkfRPC696uB2f2jvHvfPvM6PsQ4q6jK1nm6NzSUZJpMwnyQT4RjoRe3EyZF"
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
