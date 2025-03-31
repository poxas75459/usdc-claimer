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
    "4LCtwa5kqwbFK8WRts5ZRmC5Zo3TScg5pHw4wGNE7AV3nf3pePKd4neWHfPWVh4RQBarKV3rnNyxEPCqDazQwXLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyPGojW1HeB6YmALACDTmDSfBNfWpyEVfP1u663cwfrBNLASndW4hcixVekFFMzFcVgc7yiBBsnYUv4Qv4c4QyB",
  "key1": "21GcWxXW8p2ENBN6grnxiM8zgBnrXa1SXHZt5aEfZRcbBnPJ45YW28SKXwTq1xykpYYmQBoVwXkRAb76o8ZuVcNr",
  "key2": "C5JC8ceFWdfh6nbvfDPXL39bmY8iVFUcwCuiRevbi97NfMT6d2rRk2KwQTprQpR27e4SMxmiwynN8sfjom3tfbr",
  "key3": "ccJkQxG777C36QEkRFQfUkyAcd8S1cG8TdbwVXxyCbNXpNemxRSGEhskyNCgGTWsbYSWjKeBpZSkqyHJPccXR1R",
  "key4": "3bx1rGKY2rw5ZQmhyNS8DzAiZmagPS3MoGwXepokCw9SdFpwaYo5eERVQPwNREAsduYvKHS2g6rT49M3FUzWXsMm",
  "key5": "2jzqs2giFu7YZ6212gTxoPhpt8xGZBQfdhRQdsrSQQB3AeBgX37qNbAPmm1siKGa5dEiQS2KbyKG9yeDjEjtG6nX",
  "key6": "2u8C1oDV1fPcAucB3pd2Zd3D3ufAPSYT4x4Guq4M3qHKhk4te4AccDZSkHpuVVojE8tDV3HoogB4c35ikNY6K5Ax",
  "key7": "3SZEy87WZQKeQ9RHwGti3B6E3qqCqj4PR4CAVhUr6deHefkZs6GBkB7hKmArXCUSCHfnwSu9xEiQ7c4DyZnDep7D",
  "key8": "5JFVkefsD3ppLEsDESrMKA8G5EV9mKc9YyMTvcnKEEkECp1FCHwPsBQ4QnHURDZHHXJTzLEacF5jm1N39Tmb6ZRg",
  "key9": "4z9NVgWK1TXGT28JYWSVkr1fPKdXzpMLV55HwdxweHG8VtxHRJ2v2zUdsdRnmvRMeAtEfVcBkUZNMCmMDLcUWu7H",
  "key10": "28y57irZAP7382RHQmZptM5Fv2xDHmW3fBM41jqaEkg6J1DGi6MLX3Ud7jZQEz6TatK3q4Phc1vJkg2RiY1Dx7TZ",
  "key11": "4YEPdV1Exej6fRXMN5Cqk2H5RYoUeQ9kmmxQpnxMojno41i95fvWrPYYxaXhzhcWdHREGnYDomf5u8iKGRTdKrzK",
  "key12": "3FhtJGAoL6ty1N7AXGWYowx316onLZpF1zh6c7gfMWGyme8qyjA5YqbTS7gxQCqrsvFD4ivC8CsDQgJMaCLT1kuQ",
  "key13": "2z1gLX9SoDViYrRtzRoKGQGbwx2TF6d4fcpRSXgbF7MCKwsGxZQkbUwgvGkFkvHbbJ94R1mERZ4LBp9qxCzcUCHH",
  "key14": "4KUJNpkRuKGqtrF3Uk5iuqXvJUznuTfKMjLbCUKGLeJuQuHrWhB5tFSJf5hmATAkWHu7JjnnZkQqxb2MtSvPhqrV",
  "key15": "2qNTgJZhVYWJJGqVGGgBMUJ18svvqdGC67sFdBY3EhsaNwY37Cyve2LkdWS6NEoRzrz1EJnr7e8fNTXwvzM783Q4",
  "key16": "JtLWje2Ao4Tq6bujWJvr5iLkWbKMcjsawXmGf1LzktciR4p6KufthZKc8DddfPq65QKiMjXudCNwNJiabwNWtrQ",
  "key17": "44nimBfPHEdWmUep7Jk9kGqNHhvXkkQuFzyospP16XV5F3vmEHA3gcj6GGdU3t56Wi5jZLr8LE879vcpErSYAE4V",
  "key18": "5qHPHjPDi3qMV5D5vSgkY2Rf61jPq5uMKKynz6vZfuagE29QadcCMcGYrCxUK3MFuZE4sHKyXnZkM935EyLBent2",
  "key19": "rS3WCb9gGAQWGqn2jDf9rKxuXcYnhYANdcFiDB9fE3rhH2ivDYwvBKzEx11Djym5Xxy66jBmYFCzVeExPyErJWB",
  "key20": "CLb7ZAhjt36oYzaqEfmxHDzR5mT1DTqzv8biYjkEunRoRyestmoSJtDhGad2dMyeq4Z4dU9v4PWonkS9WeP16iA",
  "key21": "2rGW7aiQypzthMtQmr7PviQfgSAatYTqGa28fuszxy8ybvUKZ1nvUSaTbrfVm8JfGBTG7Em287tYVrt1qG2VLBZ9",
  "key22": "4sJaj2wxWsieSA2Wg2UtMXJnuYEBWNXsfRHVdkRgmgZQHGyUhEpmEq9pHfsFr2w8wyw6VtGxmffqXXSb7pqaWzG3",
  "key23": "TGBthmEASEUr5iUthinucKxYGwZ2yf2mjD9bqZNF7oXwjXir4EjVrW6vQ9kTREWg7CL3k1GQ9Y2nnwF4UXRyEhX",
  "key24": "4nyLiGY2SqqKZsgHn7k9zMcidHh6kjnrrFt5Kc2sojZkA9z2EAvQjtiEAdyXjh4xpKDt8wyTmB9ibTYzNb1WdNyV",
  "key25": "5UeYXPKg7wYaHSTZWj6pkrvxeRMJ4uW51jBw1BYbhkkyjbgfFiLaK4dP12rcqEZhKxmca5e5h2pKWssoYFT7GMsb",
  "key26": "3Mat1BbZ1GC17NcDwXcjfzCgjm5zRQtMr8ugD6RAkb3GRzWnCV9Ap7M7gFNHhWqeBN931sAgCEMcL28JCAcBK8ew",
  "key27": "275NXTWtnCD5s9fg5sbj7WmbmLnaZjDzQxGSc5G7NC5ZUsiLeQzQqZFZA7VsEZFvPiFNwn9RXMVW2nyHLXZvBK5L",
  "key28": "4XtJ5ZZSPuvHasoPsdVSJb5qE9DRxAnYJZiEqcX3UNCyMyD4fTfnHURbLeos61bczn4D6sybKUuzqDi6Z9UgVtRu",
  "key29": "3sSv2Kkar5j2MaWk76zH2QvDiMpGQpxPsP7ckqPye8hzNHdf5rh5wwjmQzeBBWyLYZ49iMrV7U5D4v6cucfEpmXs",
  "key30": "4xCNLTQmriQF3oo38UyeT6cyC6h26UTsRkuH3MPe1duq2xKTjrsvRH94emJW2MbsmBD24KhHsFQdfRJfTBPTfxin",
  "key31": "f9hJnucmigaRCakWNUCc5bdCMDEc4MGV77jXSAzhbK7m7TNzAMGHfB2oEGqLmEMZy55rp98kD568k1WWK9A29ap",
  "key32": "61Nuyvps9sYWhfExf8BUXGwP8ahQQkZkM7eJNKYjTRKVMXbG7e9otvHgruY4xHaYWDXPySc4v4YTnhaqLzuQqgBE",
  "key33": "2HLxetzHCZixChb6oWgPoRM2nNQdBQa7PTqYuBX2yzE79pK9pxvXEmVoGiA6ZpKvfpUVYhbG5Z54yTQHSnucGJWT",
  "key34": "5hNuo44uimj3zhqLPeD4anSpW6WTTJA5Pi5wMcY369RjrKZShh9jAsA1UDgrHJ8Aw8ZigSsjGuBtMsPHEFTmDKtH",
  "key35": "33Wpg4ke6UHrT1iJTitSLazSY88e9NcdU7G8xyveFKV6Gmvup7ci7GnzVpdryTuJtLrFdk2jGEATJHHREN6swro8",
  "key36": "4ke16hcGsVjpJbahjYeZvTiJU3W9ks45iyBBPS5oBi6v4SrdrPvJCn2y3HxVo22NeAUJMAgW89fsHysURoB7DK5C",
  "key37": "5E3HbFX7WEKEsr62SGDb91NGhwgJJCrCVninsgSTJpGXwgc4Y1b9443aie6FW1MMoT3LUXcq1jxye5YYZ6hADvDf",
  "key38": "3iQH7qxGmd4hdmytKpt21YMD5LkW33UXsZbUrQUPQujaZvqZhKB2uWWah8ytbyiu9fDYRLpQcD12skfGmHQQ5C9f",
  "key39": "2orPnhGZmw6Wu7Cza1aYWNhAC11sDTL14tooUvoa3h7aHib4qZ2vpY663jpQo5HRi2w9fhRiYbYFAYLjJSbzbRhX",
  "key40": "Qxzh844aWCgMiJvSwmXzxZ5Xvd21QZhndeuUh5KfY8T7TLrejUA2zt28x5xyp5fA3M4ewHCdKavqbruCwXZthvt",
  "key41": "gpJkFkU7p1J8Bi3KqyjYgTrFcjoYsFsEbnT2gmeeUMRxYZX8xTHNLGeMUz1HQ5a35HRD93wgqi2UtNPWSCqcWTv",
  "key42": "4pm3Tfkf2KmE1pMpE8c84GFHaFZoBAMPvzTiQSJyfd7zGpwqyo9cZNWmLRWdnBMF7U2foj5xHooAterJ5emjyYmw"
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
