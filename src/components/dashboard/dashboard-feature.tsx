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
    "3BeGXwJ53Bg5ucd4hPZUDR9UB8fYkVvfbJxU6Bt3fRedqZzdmyLrFva221NQESxd98hrd2XYghXQme5tLx5vnQDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dCLTYdPVuGiTxupYHG84uStSBL5qZwA5zCHDfP6qPbwMw9TEtmY4Q7cveKZozW4SQZ3oAbiFWoqJCkg7nLmUgg",
  "key1": "461ZdxptC1fdqhYFnqT36tSMMxxP3grKmFJGyvss4f6hZyZTkMtcL7ZFaKowzsMjc5ZeRdtHx9rpaMYTXhiUdaPQ",
  "key2": "4treiBB1jCZ6mWFZTz1apRpyR31JSwBxyyXSKB9ga9j4qXFGomjHf8Fy4pFoQpzHZds65JzthZjvtCV3rcZ2Cwor",
  "key3": "63G5J9tN8SNDBdGC6miDAnnUuMn6iswHzMph9Dhg48yhgmMkhYjcJNybPsZgQ98bNPEQwg9pueUEVNnxMMG9ayyT",
  "key4": "4Bg4JCdnrCsaRdN6zF1VY8Ue2apDiHZVjuzab3HdhKzxtot9SHSaRJbfMYfjgvFjmta3jejr7sdUX5Yz1i2722At",
  "key5": "4Z8f6hZ15zeFf5WxSRDjNPthcd9xXn5nsZfWx7XXVwTdfTiAKNidsnfpAzSjbvbcM3V7XNJTXPtNvkMNVWFX3u39",
  "key6": "3Xc1GE7iCPuFNaf3p3eVHD1q5MD9hqjG18y2VWTMumriq5NSyuTWezeXEZbS3DnFGmGQebpoe5zYayg7kTT26m9S",
  "key7": "3NJKsK6niGVcbZshddDuUeriqLhXqEU2aAmYEbF59rqCoaPPkzPZPSKonBu1buwydbJZuYVXYG3aumKPUqwmPU4W",
  "key8": "W8TPkkLv7KABNPqNfAuSrzFi2GwEu6nzqQcWA8yobKviyULwRPCEmfEXjQcbnmRQe7NvSH2VgfeKBCPDoYBdT4V",
  "key9": "3kGKWibkfhQrncMPrraUjywpFCcYkJY3h64nCTQqrDtKbPB4cAL9BdnWUZwfBeNf4fWfrEs4P6ZoK85yxZYqmo6o",
  "key10": "2XcriNjJ4zbMJrxnQnkxjnYeEVEv6UxDZRpEo961n6Rzn1EViA2LYaXyD1Q4h4vQNL8FstbQVFnkH9bz3f8FqD43",
  "key11": "4LCf7jhQ7j5dhW6MEvTgHcFf1V1NJ7LkqPXNRbNFvvZ7FV3kf4ydWgzph19SAPLw6VK1vkeCtFWWs6u9eLCQFdyp",
  "key12": "syqQbrLEr3PVhvQVNx6ikdZs6Bf8d7ncKjXLejZDjQtMXLfcAsHSASQZkYDv4JGoEAcENMF5D65bpTNUp418f1s",
  "key13": "2cyTxzAEPzq5yapYCXS3DeLMunnj3qvYL2zqjYP5eLUFBLJYhSK7nz9jRuTjfuLXBrkC1g7kgrZsDGLWKgV8bmUF",
  "key14": "jKh9dNC41X6EKewMFEr82TfoRucPpPtBhNxRonBNHmpHqJMsZBEXTq62FniQHXRGg7LhYVAsbckKWCcJbenzDfR",
  "key15": "PuPoj8dDy5RucZKEeLi2xoVXDHFUVXRS6LwK6hk63gRQtxeSHoPV33Meq89TCgwCmZtBbUTZRp4Sdeimymy89uq",
  "key16": "2Q6foqe4K6LNzumMeRwubqutG4qDRiZPPZdG7Hear25H2bGUBATzQWGL7fRr6Swevy344Qr9iqvdq9D2ShrHfi53",
  "key17": "5GRwJZyzDSfYA6ZsqA7HBfDSRK3k9MDGgC9kiSTzfRBVcfL1qyjJMYdW4QzyAqoL5iEJpEAsDovFJUaufCKCdhUG",
  "key18": "4gXAiP2Pay4nPiRr3wKZ1HAVvnc1Gtswj5BsE3VJBXv1bE5dgqdgdnn36wMwHEe8H3DNLtFdje9Co8rXxAkTApQa",
  "key19": "gmH1i8amCa3KqNDtyTKVrYVvxHMeAowYmWPezXYNHtHRYAADY3h6Ma9hspWiDfR54sCMPxVwE1ZhbLa48DaabiZ",
  "key20": "4zC2tSYNTKBzxF1v4XdWfgvZzeHGHWGvYC8KQdfCLTs4sBGfjtwBUokvAkWorXcCKRA6nVMMQ5KQFiJmnKz6yZTq",
  "key21": "PB2sbsK9G8aQBSf8ZLxiHvzd7Y6Ls613W8JYXXY1RBknLDtecDjQokP9Ki6bj6B5ULJ1aCGiAa7TD5b3agaKm3C",
  "key22": "dTZPfd6e9FdEVFHDwWqdAw7hYpqXf5Fr9LxBucBgKNF6GFkeswFXA8c1AWeruq2GEykXV7VbNN7ddY82egwBFMo",
  "key23": "4qtv8TZnUv7YAbe9ANNSfcxtQG2tZ4yyYt8GWbWWVccAs9kKv7u4g1skXsFEojQKt1E4GYmt4Gd5Ggc7FNAM8d3Y",
  "key24": "5ESjyMjpQizmgDoxDNAtjZGmqRcekaxh1iammfkeDdppGrKeYnyUTkF9WU5AGmJsZ5iRVZ78faq1cir3bY2gpfoW",
  "key25": "5RdXrUfvfQ78kFkJvhwSU4mbs8FiR2UGRxSZkhazDwg28wSPovsrCwPozpFZmAWxN8B4nrAUozpYsARwspETf44c",
  "key26": "2F8RdEK92j1SF3ZZKrLRptd3Q2N4JwqSYZiMZwEg5LYJBrp487uvHJwGagDE7axs5MHVmtdTAaohf8my99JzNqVQ",
  "key27": "4V2EYUYuEjn8Tad3tkLyd6QpxyGAvGSKovNHoMZD76M1yWpe7iXFLVKHQ5LKSBXfwRQVkkyL88Sasx3dA955eURt",
  "key28": "ws2J43V41EMaz5RJ4MThjpsbd5Rk69qhUUjMq5abHo2KcoE2pbCe7pNekACmYUzUZjWoN2eWV7RKajU22oeGFJx",
  "key29": "4UYhfoXc8q7W8HLYY4ZPxvrWYbsdJ4VDZDEmW5DVGrQ5YzPuMsmtmyv49soise2pFhLUWaGkU9WpMchzPJgnfrXh",
  "key30": "2pj9LMkkF3zbCvmcxttSyf6B5BMPD3qgt8XLCoFk9zZ4RsdfPrJjXdt8ng5VHBh7vRJpx3DWTtYvyugztqs1LdSU",
  "key31": "4Jd5hYzCs9Enb51eSttrec2zGgwoTicYSVfM3KPboo1fWML33Ue8ohWCn8HQFhqdENdqw7EKbT9X329Tjk2N75We",
  "key32": "2PVJDDQPB16HXssoHGg1zuxvTJ4Z6FNcdWLAPUwRW4YxBtj2rGP2KhhKqgnH9agzsUyaJF8N74YdGtTR46gZK8ur"
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
