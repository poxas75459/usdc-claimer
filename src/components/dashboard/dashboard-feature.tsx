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
    "3Nx5FPEH74Ys6jdDSr52vCdnXXDcrsyd5kdhsgsAx92xWki5zaW5wCZfhcoPRYjdR6UCmzHJtsu98nPdGRMJKmpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ntiacK3XS9iKMwuEeAbmu7AAcPwwvxqBeoWy6h81PSKmYyxUYe2oFxgGKwQfZahaaiBTfZMkWGvoVQGCrYK6TBQ",
  "key1": "2sBCxPiPNe8gMCGXDNzq1ghYDt6UpimQCW9vg5D7dyo9AdLKLnZdDx8Vu6jCYBdXTFhQkEGTD9uW9wtfijreSXjH",
  "key2": "5KWMHrZ9eTyPWJWWXNgiZ9dJxgoXiFv4cwbXyJCUomwzmZimzYUgBBKzbEg55hPKcyBiK4Eodch4Q6qUY4RgK3vd",
  "key3": "5UgqGkh2ai9e4cQXj256vQeaWg7esRrgcmx4qUARoWYQHbsRK36F3dmpyBR1SJNVGjBmUnTZo9f6cbUABr3vW9q2",
  "key4": "23LzzMSmkZNHC3taPhw2H61QQ33nVAdWfHMb8Rf5MMj589u2KCVKPo54krEN2xJPjuTv6cewtqnaoLGf8kQdLRsJ",
  "key5": "59AJryznKifvQhBdktYeac5uC78pPeSWfGTDBuRtofZ7M6U6mpQLzE389X1JWJ5vPxqgf8ddhCJQN5r9dSHsVraq",
  "key6": "b87T7PrFKx3JcPJb1Kj5ivnJRkvU7xZEUJuCY7YvHEuS2928s8gfdkRHNFVbsktxPtJsr93wK2usvH8HmU9UmJP",
  "key7": "2ZTUMGtgAsMRWgfNireeDsn1RSvdePo3iERYATFHgS9BhsrSEeGbGshpWYRTrQXZ66DnVnyc1qtbtMY6zbdXzDJx",
  "key8": "664vhsdg7tB8PeUS6fVMT3XR9YcvPTtHGSpRhmKRQzTfBwPkdnRAwLoLPxGPFS75jQbAHe4RJDCYMS3Eqi3Aw8KB",
  "key9": "2SNcdzT3DQ8dvDv9WhcHmEvqeTSGWrZogg9BroeBpuWFCHpjmhx4g4CUHSiNURwTUs3tymJdV1oYNMmki4Eg1i57",
  "key10": "2VHVMUTSbmXAzLZgywSikzbzyzsR3kJixEa83g7SrDKnhdHP83LDHdWTX6DRxsSZWFafshvzkHTfKR88FcsitFdr",
  "key11": "4UVVa4D3uRrQ6CZ5c9Mrr2whfmM7cxqzbEHfmPr2Rzy38HJpkgDBFxu8kP8jN3WZUjbphQsJMtYLUWDABkRZ5V24",
  "key12": "4Kh7L8HnN7uoooDxuHPgh3iz9unDd3qyYFK9gSpE4CSG7pMWy7djjRPecXL6eezvBbwNDYPVjdkC18rfohdzpkJv",
  "key13": "2bkbnCCPFairuZ752dciyEXJtDS3DMbBnW1TGioKWJQ86o12ggkPqugGNifSz4rTWsK4RYK8fQsBq8m5dheV5tFg",
  "key14": "2AprXyQceuQt3bQK9iHVbi7tQp11uAnXL8Rj2QbSznnKvuunWt4yvNGYYqFSuSnCz4j26BXPJ5kR8vKJPdaJxUZH",
  "key15": "9psHFhcbuEw3FrVGCyzmd9WSXr3iZJrmMbxjDzcN3kTWh1EGhMDnUoVQXP9vrPRdeJhBjYWDkBxDfUu8sGDP1zJ",
  "key16": "cab7S3DmXwJnM1mxtf4w5sxMFfUZjbBeMke64MLay4mS1hYu8aGB3N7cEPdKtNStKfaFDEMx5jXiJhjE3Q95E1m",
  "key17": "4y8YpJvXsV9uZSw5a4a5GQUJ38f5nqdiZkoiy71fTwGzBJgxe7PTXDKWoQGLjLYWzpXuGh6EncPKNRtv1oxWhX7K",
  "key18": "4Yqr5xyE7Ub7pYEPgxFEc4yYG6ZKkp7LY5ybuRRF88Qh1kqDZgjcL9CXNsSg62RpyKYCLWihVrW2hu68aCU4kaUC",
  "key19": "iJjHCyw84qRqqCtz6gSymZQwnnfHvurCbmL2YVD4E6sxgJuptr2fKCSVoFgGR5nHei9D9iqEjdJKU3M4eyGw9G1",
  "key20": "HKYBcQsTtxBcXJEhZX8WBqEeZSAgqYRUaTvnkqqzpxaB1759Mkm9CPyNqhJdqX2iCu9oEaS8e2z5uQmtt3PPSYr",
  "key21": "cCL9LCwNH2Y23ZyLpWDEotS9kXrZNBhdyFbAPXibkLqRtCK5H2WnJ3Ki9wSpe3LL4ew1csoEXoWHeo87a3hTc1D",
  "key22": "5dUvi7gSNov9bYVqwgUCck7XXQLeantSCwbGMGo6m9wE5bkqK1PpLo5x1U4uEpHaAeboh5W4gcKiAcTGQT4k92eQ",
  "key23": "25NDDh3ezeCBX1CnVbhvUdLDD7DFKVTgFQxN92LsPpuJBxFd46eL1mneegSPdtY5f2cHND49YG6BvcV2tddHtUke",
  "key24": "4hUK8sAkAX64izGwXHnm6UNadRq15opWCmt85kGPy8oo7vMx5PvZjcsr3LuyjGz6MCg1sXCE3iBTRgtqRQe65vby",
  "key25": "5CscXCV2KktCU5qRajCtUMfJaVHWDHWuSGLzN9UJNcRFPLPCD2iyBCfLXzBAEX6j4SsppQazGkjhQevmPi4LtzoH",
  "key26": "35fzFfmnuLuTpXFpwhBE6TxXAz8BQmCCDiteic2d6AUjUdxz5VzSL1rkuU2FLxxHf8RYeamYUMLwwVCbyEQ9N4AN",
  "key27": "57vGYtQMAQ549Z1sh2qhM8iSsCSxzhoU1hMt4bfvGwmL4ZaR6Db11FBgMHNMpC7bxVY5k3Rp7rQhXN85Kv2YfeQT",
  "key28": "WFtq2qJEALrq1LvnBXqp7S5V7mZa2qcvgxBxHRBsurh8EiwqWsEQi21iRhP2tu6smyayGuFTL6sx7YUaygZHqvD"
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
