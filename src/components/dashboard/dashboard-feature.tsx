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
    "3NkWGdUoUbzn4tuziLxtc4eZbKBEppMX8EgtbMb6PPS9ngXHERWKCxBt9jCehdByviLLMPqL2zdqthki6VfHVFZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJZXY8qLvVCMCd2UVFqkpEZX2hFJpng1tgZJCh12ru8c5Dqc7KE5MbEXzHcJQQ3RMxA8oHHFP1kxr5rQVMWeUfQ",
  "key1": "5fRQBdV4yCio6u19VR5cSwHV7jebLvf4g9EWgXaQHM4opoFmnBVdf5fp35KMrbTxEXb3dvDCdSfw6YibW8BFed3F",
  "key2": "4vr8NT5Bx3S4fvi22H7axqLhZfDjM32np7bEacFt9ky6M56z4VFYFV17UTbjMW7cBbLN5m9zXZZwaaGEtWcExWLQ",
  "key3": "98VK1khEtAuMZzzoRZfz8m1irHbSrEBuqdSyUG9AAtiXXiyexQJNoex4mwj6EqgXdWbumZVggqEgWSxkprSm9e6",
  "key4": "U1F3Xwmy86tQCtY3VqkyDtDkW8aHW4CQYwSm2vGLU6urPeKTnosNpy5Mr9far1Z8YFRMihikNv8f5mR9buW9X43",
  "key5": "5EBipMF4142cL9Ay6KWfTGYpGwp7adW3xUTc4RWHfTVUFQy79ikhxCtsw8rqzEozxfQa9Mpve2wLrJaWt3WKA9V7",
  "key6": "un7fhf1iYywy5fj2MfHjoiqbbZztiViLrbbRiqduqjHezzWViJR64jaccCiTxq3SpJ167hUXXaMrVAPBQSodw4s",
  "key7": "5F2yssrDAcYDzD9acSgz3Gx5htEfwzkasuV6mNHYNL1Qirhaaf7ejhXQcPF4sNw3hb4Dbh5p1XYwtN4M5gRbBzUR",
  "key8": "2Q966t7DRsDwoURT9pC3U3uQr1TukofNxJejdR8K712KawaK28M7tswaYmAQoWhhepGzWMVKLg27Uozjs31BNxW8",
  "key9": "33HNPDFNfQX9SuRH49eQebriQXPxNDjJK2QYNSseW32sCbsS3iR3WXVVqneHxrroWt6Xh6wyW2eCceXnP6qUbPNf",
  "key10": "3MgZdqKnoZz9nBm7skNHdNzfFM4FgUtrWGEaepayVYic7NA2BP3Cov5YDCFqZxX2NLELDCU57N2W1XMPRPm4RgNR",
  "key11": "2C7cWXsMFZrjXxgzs95bi6hSAFS1nsdC6h4uAp2ut2S8HzX42Bc9ySfEWbnTzrnNi1ows2jLQ9K22qwoHSYjX5YT",
  "key12": "2ovKei9sAmNJZ5J8CEnbUcLUoA7ktoEV7ZCvqYFgR8AeMkR6uV2545oFMsxN8x5Q2gx99cj27vybjdnYom5moYQS",
  "key13": "5eynPTYNH8jEvqxLWj1fAvn7HyErCdGEJHyaDSBCNti7BGSQCApAsGSVZt1jq2tGBW8JU7BwWecuLtGmx9DToLTG",
  "key14": "3K7a4UJfPme6DMp7G83M8DDGoHVDPkwQZ4BT4XEFFyCRpqsCWjXbkweUnh6cppEiwtt1r3Ux6VBj6YS5WG6zz3cA",
  "key15": "3ytpvatFhX4xTP5atdYYYnCBB6bKnKaG57LWCRDzRWYErRzoAr5F1mAf8zwMrVRLvkro2rBRthyQ9tHEhjEZNLbc",
  "key16": "3rRpfvG9h5P7rWfng3dcubeTCRoF9FuHF5qdncv2HtjQSVkmrRSVHs4JcvpnHkcZUQQiQ7KrszxHPBFUzZNhNYjM",
  "key17": "5w2o6AdHfU9wVqAquHvbxVvazkEiJsA6fy1yGrBfRM3fkWTiXhzfeKqaCA9udsTvrB3ri1nasH7C6TfvAPdzNMbD",
  "key18": "wy4qVWEDrZaS4cP3hFpvirQ6uewd7c8NLD9S2zTjg82AbHGfbku3uPmHSN9YxeuKCcETQhzYv5kXFaQ6X6FSsyh",
  "key19": "HJt7ddvcD44uoCWnxNv9QsKPLmHxMcmhSxQcKaVfKtYi47pg3PSJqnQLCzCuZ8LLV9q7bEPJWNCG5AtEVvdA54j",
  "key20": "4LtfY8xYUqERvcZ1za71LxLVn8TUpjW3m2jxDSXLsW2Da5xtD8PXMKy8sjg1ysNH5kF99QkgKoDFQT3AVWY7Vo7F",
  "key21": "3iNs8zu66k1G1vjuiVTGdyumxAduX5PSd5bJ8tiWJVb7hxDcdkR7DERhUqPqSbUjyejngLMsYxVcQ2VLmPapjnV8",
  "key22": "66MERgJGhWSKM7DWyksrKKyDpW3mR6n9vgHWF1Bd4sMe3fQ6dLWHYKGVWaTUbdsZCatRshpTSrvLUXC42Fh7sPkk",
  "key23": "61xN8hHpTWS7unZhJeou3g9SQxjwhkpcN3x9ya7A5NK5uknkVqxSrZDs5oXPQzD3d9cB2b29Kjp94msKF4FHbyCj",
  "key24": "gxN2dQQkGUGsq2X42TLEpXYUUyti9woKGcgjmamjRmaDutpoYxWRLvjedUB7gSWqSYXVXmk6FuTSHmjQ7EBaGLq",
  "key25": "3oqgh6WntusTDqucPVeDGdDrXk1vhc6MYagi4KA8fMg1jMVc6bSEi2tnqCs9LhPGyUkh13gQXeD3Don3DAYEh7KW",
  "key26": "2gAerH3rpXMshHfo2BMkZLLs371GkmMXD6pCzquA8G4PhSSPaBKLsLbVsh16QDif9w8fhUB95sQHGC5eHixTisUQ",
  "key27": "3gK9exBpb26tqjHbQGpFQFWj6BD4qrNvE8wF3yNDCC9GUQv8Ki2Kn2UyshAiCpkeWJfTASVn3vQ4X4MKiez1zoJE",
  "key28": "536TbKaxfcBcYJ2nxQ8kW9Rz5PWyvcnn6V4MCyCW6nfPC6sT6FGNm3jwenpFjmgNmn4ckrrpYXajmaDDkhj7Hir8",
  "key29": "26pKv9P2kSaX5PwdPvvJHh5qyLyL4t4wV4NdAJxeZusAkFdZJX1TGFD3nLzjAfPLbYynqK9beSQpDStyf8xZQfTk",
  "key30": "3fkNa7Nb8VTVhM6GiFuCko9sbsqLxysrm8BWmPwJPub6xVwokX4BhXXr2YUfe9PFYbCAbFKa79CxJhvKvtwF3AaR",
  "key31": "BSxztP3DcdbMtvC57y3rkST5MudPNLP3DMTSVCbwNE3kF86jNpTeA9mMnMK7ewjWwoohG9Q49UHQnCY6HrsnC9L",
  "key32": "Z6XC5Ghb7kMCxGFazkJS9H3odXK9czNt7hBLn31Q2cdK8sh6SeVEpQgJYreMK8v79qma5CBbNqBJQVa6qeyfi9F",
  "key33": "4JMub8dGM9Vk2Ym5iNoKiXhUiLQPri4inF8wFAXQJ5aQ2ntNjj5CK41gkqWoHewtuaASEQp4tbdiWJgb2w9PKUww",
  "key34": "4z5rLQ8SBadeMWWGKqp9uvV7tBBSu6XMUAYxRJtHtz9RXZRFZ77L8M8ZYvFwQoKNcVdPGixz3mygwu3BbBrtZFAb",
  "key35": "62VNvh4JjuPDPC42ogZJzznv73AH6uzLWHoVeC6E6RBt4KVFEFwBwv86x1iLcshnmJZHLH36hmquaymmHmCkRXh9",
  "key36": "4VrYeZMvNHKFkteXuj6HkR99QAMoa9RrU9GQ5xkyCk9n2BtFE6dSRywSK4pKo3B37BLtCyZSMvzmecHkA6dBNVzN",
  "key37": "31SdrVdo1pqgtdh1ydPCLfKzHUca4RgGfeNJjcgAa8XFnMoYV9hGHtTW2xqGbSXkPeuKdmexoHwPrBNT9pvMRLGQ"
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
