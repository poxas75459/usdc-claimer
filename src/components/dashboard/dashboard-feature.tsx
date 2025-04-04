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
    "2Nqk7qVSbozcPkjj7CGw4PFH7JdTgoF8TAV1WQAbx2hifCZChFLspFTjPUDwtgVASNceoPNbSecscunw31UtkRrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oL4QgrBUou7Ezdz5Xqpj7JibHbp47niVGQ2obAyki649RMg5HxGTAojpoNUWzNobkWNsojHC4vMGk9oVAeoByRe",
  "key1": "2YNRF29SuuVY9jcuQVCZoD6aoSQjXLsR1Fp4PgwK7bMP81Vui96tjVZACy6mqioNg1Qj5xW4WkGcqb3tQ6QT8mYY",
  "key2": "5R7N97buAZraBswHSVoVJcRXpxLj5ti6UTTojJ27kFuNuTAHdH4jo5ATPVP5XtCNKBxatRpmUzkFSTuG5eonTSEA",
  "key3": "2uz7rkV32kFWEgsPtnt94FBZJbHGdvi8h6RVqfYz9nHkJqpWe8PKfXKiTpERdm3kjwaYSe2XBvBzjAiJxESZ328a",
  "key4": "4Z5E1U8okcsbnRGtCjp6ukTSJCtmrHUiajEVdiSn4WJ4BGGxFMsgQ8UJbKizGVykYw42Butoyffe4VwLnp3FAfrv",
  "key5": "2smRvaMby4drrCGY78qiU2m4S4mhQHQe52RbyMeoscLkfhWN5XNn44kiA3XfAw6wiqiUscDoQkUQJKFEJNqzq758",
  "key6": "FAKNn2nj4dtFt3Y74EkqzoQ1bzJ3HxxLwB38J9MEpJ83Z8MmtZrvi8tyb88GKEEBVf9p7jPLpfgAbBeNeuihDxv",
  "key7": "CWBHCbCyWKkdykL6mjEqEfUkPC8DH8pQc8vrmNFaPqYbPsDw1hwM2veNe3CQPYeKfLSwjYyqScdB8KqQfttiLXZ",
  "key8": "3R272kQYh4B6u96KHy7B4TxK4BiWzfa1FzeK2aNuAxBJ8EoRd8j3oY8XXj8PenPFXFneX4tQeCd3qgRvoMyxJmjW",
  "key9": "4yNZAy1PJxaWWuTgyY5L7dFaxNQ7hJMjpRHc3JqoZmXMn2By8LiX6axWoe9tTC4w1BA4qAGnDVvCxq8sES9qTtGi",
  "key10": "4jwXq4NbMihpwpsvPY5Rd7WfcVcXLw4xVH7WnsEVeEZdWH2myicq9mnuSyDFy6rczio78SWB5aSQUDVQWB7cArLC",
  "key11": "2hPKTLNF5i1tEe6JNckCnRA8igXQS3fRJcUrFuK64uZseV4LBsURvLjn7wwC7ttcSJxFYsbjn8CwurazpJmGb7qu",
  "key12": "4aPkeufVD16kj1HhsB4ZnbqsNLp3ec23WMZx9YzGfBQEZ3uFK83T25z5NmKKfVWK3upvbT3d4h1aGxPVUVngefkC",
  "key13": "Qj2EUjbCSmZwiLECNCn4L2LXPEXQnGgb4ppE6p6HAhXvKRxWZdky3AiCWNZoNt3Z2nxDcuFsPgQPbmtTbcZEzzD",
  "key14": "4vWWuzFMZ75wdtkjvfCBKxAqJRPaeaJS4CpeyUk7F8S1oWKsnRenQDbyYJupFoGv8fPi99Y3riTCnde2PLzXJ3oV",
  "key15": "4wLNoofVFXbj9XGxNzFGYfkcCs3CrP9iLMwwFKDUUiSSkF2uVQFsoCq7DhpsUqLBPwF9uJ6SJHNuDJ9Zm6ctjm1k",
  "key16": "5P4dCqv9vP7mhT8uMn1iBcHUPziVZ9pebfoFsvag3eyhpThXeGntBw3zTGmgnCZRys8nJmcXUrZEd1PmCvrb6pEh",
  "key17": "2Ns4pNWAphcMCVu5vgLiPwyKCqq9WPH294pcUXKGnKun9ZX2bV5xvxm1FuBBnVpNEPDwmJxW78WLHYq24UdKjiWZ",
  "key18": "533LFV6CeEa1t13GkGWoa7sdqDG5AYGhMQMVKKSgdKX2qhhHAq8ioSbcBuVUCToov3nMXX84wcPvBvKvePbs4hnU",
  "key19": "4FjK87Da3D3cFcYkhXkfhZr9qf42FSWdQT6EpM5rMm3Y6NueTd5nzKVHtFaqKDUcAS1Cd3XyMpuJQYRSEMpPMiC3",
  "key20": "3ipLxEs4cobrusHPXx8KZMSn59iFuBAX1n63ng3XKV4iWGddYtUAF6zaA6abKPUpDmibEVnnEf2JN7zmjz8Gg1kC",
  "key21": "5jSaPZ4exMv2JPxMzm5ufAmTeqn5ivCRqVVuNCKLthGNaFyLLefs55Kbm4EKZ9EVifX2KKUrKF6cJ7EqRupYoP2X",
  "key22": "677DkTurrFy8J4XXEEednpYXWPMVR1cYnCrzTR6sTHktSAUmcyXZDriyDCsFztqzksetLMoYw9mEjfFMwkgNdBga",
  "key23": "5HV8CjR7e5JECwdctHGNMCPSd8RLZ5gaDXwzcpqHUCKnDUqXTbNREnZzJCCoN98FE3MpXs7TM7LRtG23PoaqbqPE",
  "key24": "45Tf68Nfzkay7K8EuZHZGzpxzk1Ly5A3iLXftPwfVjiwPv3t9HvUdt6wTMcRTLYeCEEBeZyzD7kPxrnT2TSZcE3",
  "key25": "zU8SiuD5cFYCnQhenJqSFrFv6hRTZcZvPagoHHgMeho58JbhJ5GXEZFmFHGChXreqpGpzKToUQhPD7ELiANDjw5",
  "key26": "wQc7fuJ2YGfbvYPgQcwebLP4NqN7pLYXRz18zpARHTbZvjw5etVF3okjVRoSVyegZjz5XDAJzyQYsnN6CaiTr5D"
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
