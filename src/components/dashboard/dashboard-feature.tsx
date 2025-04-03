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
    "mMvqUKVbHf9ukd9TscgabUBMhTWW6HrQkP5StFCdfagRr2EhkJQvmyGDmiQCvRqUSYpeTARSVD3f8osDwpjdjYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPHKrCMiMKyevP4NV4Z8FRjDincR8yG8A1p1w8GCutPnQEHYdwt8ZXd1TGHizddWHKx9mTwSKSG5LTNLJNidSgz",
  "key1": "z8HYpoaEkfsKzAiCsKXwtez2SUzvptQYYntVTKihVeMHgcCuJEtLS42Mu5mWg9ZHkb5tavWj5GbKKVUVmMpDhnX",
  "key2": "2RqBZyhufVpH3S2kJ3VfD4VXv9e4mbQwxjj67f3eSXvvVk9bKUiZAGSJM1UR3FqXGk4GrwDoPcQNRQ8cFBW6w6s6",
  "key3": "3sq3E5C5CzNB6gQvZi5DVpSfK9KrobCrybFFtKzPVGToy7G1aaZM5zBFBeKbDYiTQks1SjJiYKdj4ZQATPHQwVSy",
  "key4": "2XqAjQyXLm98WH5p5vfp9Z6Zi4S4koaK3ZTccNpGi5MskSWvUPbGYnQk8Q7hd7eYR7J7Lg81mxR6A88oKmsVm5sH",
  "key5": "4BAVMe8fiToqsAR7DSJ4oanDoid1fKPwzzSBHPG9KkYrWyUwKRws5XpuDburmX73h7v3MRmyBmw2BLiLod8FkPbp",
  "key6": "2H1YVrYEw8CoUe6s4VHxRjqqriijxdV8PTAP2AdRJPMeycKAarE3d5JcGLH3TE5seKgwZ5e4UTzjsx6y5GY9NW6N",
  "key7": "5opX1fUj8kMFjc7iVPoNJnJiJGbVciE7ZpH5mpVtXU5WwpVJXMxo6vHSEz31i5XEdBpf4sT82GZCzAdsMN3Q65uG",
  "key8": "2JKX2rmcHdZUnK5iMHBXtMVNQ7U6pawRqSeXbePHU8yANXMzQVqJTv3jPriktmziMHTX3V9YNDVqN9KTq3vh6kyZ",
  "key9": "4MQb7W3fXngzJUiFDSNurBoGgGiiLQWUEABXzki4PMqGENAnYXWA9wRQj7BujhKbfQLUvwY6BMQYcsbhs13kns7X",
  "key10": "CvzkHXdTgVeUM2XxeccNpM1kt9z744T3RHzPywPaML4M2rfFG2GWSVPetmXJawnZ32ExmeMa159UC7jGAiwhto1",
  "key11": "vptLPbtESKEPz58PsaqvNx9nk1qRH7nyi13wYbYEEm4oieuyUTpFsJ8Atqs1f9g2HBSNaiLmC8BsQgKWqwB6bUG",
  "key12": "2fv4YXr5Pmcy3AxWWYH55hpWY95DTPD1oTSoh4s59yqLbwGCWbkcsbqFGX9vnAUXNKo7xARWYkXhfzHjD7Pd2sKp",
  "key13": "2V6sUctEQSPjVXDDU8Go9Hk6C7Ppj6sfpP8eD28vPiB12tNxNSs1NhGZXAhUfN2EMdMAWxERc2H5vRJNMJJiLYf4",
  "key14": "2xD5Q1z6Bxz3Mnt7s164dbR49PrZjKXdYqoKs8eVpvC7Lvc4K5xHWovfePaPMGk7E3imqpgFEB5LMKyjZSvSpBBi",
  "key15": "qF14eLRWQGKrWoXoJAW6i1Axrua1u8qVDbd92osG6DugA4uYn8hc5xJmu3Uk9CJK9U67JEEmry2SPwevCpHySuT",
  "key16": "6PEKxmeYzWPQAU7PK51FtZJ2JWSzjZJvBbXoUg1jeSKQt88sJhUN2jQ6neFBaLTYB4Sdhp3V4RRz6kHdpZ1mMx2",
  "key17": "4BqFrKn9btxLVpcFjhux3pdB2toSXhdja2NtBRBYs8Q33FZU27zD5xBhcyK7CxTHLLSZQhLU131H3vGHNTvR1hv",
  "key18": "CxQVZJd2ZpcHUQynecAFZrYLjPCCUoNSntc98zg9zRRkREytp1R8ue4uSTwxrLrjheMmj9F1ykKbHuxhfJZu3sm",
  "key19": "4T4UrDc9FojPFSwjSSRdpYqn7xzkrCrEui4Z9GxQQc2AVqBdAjiqYQzUwaaY6Xbd5FUmjUPtU9YYRVAuX8q2WUVb",
  "key20": "2hFRJWMmv33kFSP6urUywN3aN9XvUifKH2dWK6hGfxFgss2jU24ESSkRoPrrTQidKJUSR2EXjqaVtuZzfaRMMZh4",
  "key21": "4toqWX7sPszqQvVYMxPcaaoietSj8tNBj7ojvdweBCePZAqAFh4LbihYbDpE9PqH3yXbPCJdUc65J7rfq2QjGsMU",
  "key22": "3gFxowvyL8sB8maBorpipaDGWoo9ufdqHf5ojpgtvRTPdk9mLKjJ2LwDwXZKjGGi99LodQXMVDfiHYhQRK1mwW2o",
  "key23": "LpjqD1Riednm8uzw1dETqs7GVDjTDUUCyK3MzNwtrAwt957GvnbqURZczk655JyZWCQFuzamULwKuUVmPhEuFhW",
  "key24": "3iPM2vyceG2ey1QZNuYVUnr3zfTp2TXAC5eUs6stkJMQ7nzodkZv8iUk4MWEw8kSMBCx8VMDHP6hsGdujRmrbqjs",
  "key25": "52hFgBbTx9mqoYD3evrCA6sAZsCHStqLXGTkADswVUbAN6DQHSe2r4Vao2U6wdBAMAGLWc6zaDRu8GhX3iAs9WZm",
  "key26": "4oPp6DXuwmFyz9AxGvHsh5H9x1h1Ut1HkpHZTsZ2Rc1971WPsnax2TDsughaVDRvgEvxKGkNbsJHXkDZAW7kYj8K",
  "key27": "KCwQefvQhmhcUnhWA73UE5feZQeHm6j1TAuHPrqQYqFv7HJM4UXmE5dnQVFfojEFCucwWhmnnB1J9RmdodX47He",
  "key28": "3JzkLFRhHwC3H6BuiuJBHL35dc737Eed47XH1q3BCGdZZZWYKSmRamueUJhtq7FbVfCwYq6wHjQUtJxz7NxDHSJb",
  "key29": "5yHhk44iiC67QUTf2rKsCGprvRod8KM6mq73E8TYq7x6YkxFFSqVBsv8YKm2Sq8tEWMC7xqNDuXnDiEfSProkhnc",
  "key30": "9wPsw2ub2SN7kK2zgbZhH9y6RwH4hCCAL2JFvCxrkM3RbZWunMgJDJJehyR59J8c4hJbUCNjMdB8TmPwReCs3kx",
  "key31": "36vZReaBWn8EFF6AVDtgoiqxYmuJyQgfFhJRQ1Fy9bn2N6xZ2YZfHKT2sikuDMBzc1sVT4MVdMVWFf7ffgwToR5P",
  "key32": "51Xx9yPd7Xqj8fu8pthSBUJCwUaVktZc12fSx42QpjZMTRr1Y3VUH44xZFsp9hyfq6Ky4pGkifvzTNTrDqp7D24z",
  "key33": "2xLGde46mt3sR3UVLmYFz3KWTtErURmdrKBuzUyZV8cexWvuybiheYSRsa6u4y7YeGo8nj4HsJKL9DoTmsoHLjmY",
  "key34": "4yJ64V9iQGWjrbCGrRPaWYr35H4QdqaKdTmhX41XT1SjYk1AXkdFGEoDehVrADGzxMd2igPMCEJ3ybV4GAXnsjtg",
  "key35": "4bBUmg3DsJbtfWRfC8SBj1SbZuCpkp1wSwFaFoApM36a38uMtQsJ6zBN5567vwUa2pVPWZ7yrk8eenEsTx6JhzRg",
  "key36": "2MT5pFYTNer7KbMiDUgaZMeHFi8LQdDteoj8jipUkF9NKR8YseY3LjL7Wa5itcKWEZnwPsY15L9C23WzL8quZKHe",
  "key37": "4EvjvfA7fkZNR7zSuvsoY53kXpLapXf351jvVLrir9fzkR9dvXVeSzrhAPMWmPCZkQTsntdRzhZGweoW3SDHtPC7",
  "key38": "2Jv2VSEiu5qoX8Gd9t6sapTYvbzcYe3zSP7s2mrkYvVZCY2a1AP6dnK3M3bCAM9vXJFtoDwAKXa25HAhHQ4ZbEzy"
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
