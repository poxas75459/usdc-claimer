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
    "63wvR2vDoQHPvQ4pVAqfmd922uyTcDPHGjWR8dEh48dRgVH2AxtvWue3CPtS7GV37bkRnxi72pYh3vEWUYvB4Ujz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ieVnrb7AyCq1kzF6gkys8iTh8RLnvwN2CAub8oSpnk3GquZiehd31vSpmAi3F33nMDuJoPFRmhjGPB8TRzMTbu",
  "key1": "3UDaN4npNoTVVSYp3BMF5htkhqbyLSUfwEEqcHtJtJxb5q7dWY3aeZkr8quFEUAZWCfLbXeEhUqgWNLLekDcp5vU",
  "key2": "2gmmNNu2upaJsUvCi4yB3D1HDHrfigZom6xYNRBFRJ3YpMSsbuqy2WW5LFiEC6JcMBL5wRzqggHhNQTzcyz1huER",
  "key3": "Xn96SVX3bGLT6i8ePCVNx6pKEBaAJhW2Nixbvv4pUVm74bhFDZgT51uGgNSxBuJbpMKaReR7M8jNnraCKQoW4jB",
  "key4": "5eEGmVGWUR7NnecXbcqhD4u1Gj7RnJwgbgBZPr56uWtbuSmqwhSjyWJJ1mnG4Fikcfg6Y7nMQGEMsXsVzt4m3Jtd",
  "key5": "26oykzvoJpvpBuq9Yxds7bHsNTSVznR1y6PQSSKCz4ATJGwrMLK7woLnpreLyrGkqtx8JEQB2WvyAZm2UEzQAhB7",
  "key6": "45diKU18Btv6VchLvZi5ZoRrmd7aCuq1SB38wCY4Dj2JQApufH9vLQPqq7MLMojLtpN9bqqC8En9dPByjxNiNtVZ",
  "key7": "3whY2X9G3PG73gLVAy2HcMcPa49dmemv1p8TYR9vSEzrL3sW8h5934jwUhGkijP66ryBD4ydyJ2a7FAtThW8eykf",
  "key8": "4k8w3Tzia9TtEkrKMdHAyAT87yzMtsaFBGjYouvSbJDqWgHiRFsKZ2BZkJmqHKcGp5N1w4M5nE6JF84xrj4N26fr",
  "key9": "4ZBaGA1vcLadYzeXyEDYsHXNRXxdUj9pq9AGovkQJWYXjAjLBSDwGmMF7eqKbymnCYJYvkJSHvGkvcwg69K7geeB",
  "key10": "GAeQAjekSZVbEoRWDdeMbPyPviqmJFNXmS5D8zBfwAfSxQxsD18SY9dLaUQRCuaKcFYMW4cTDH9qmyxbW9HkM6h",
  "key11": "5AtZ4tpppXZ12zbftwGkfD8KiudMw457oruYZTnQ9XuoY7RfcJuHFKuQj5oVz5V4JP2iteQdxZimGAgHhzooxgc2",
  "key12": "2uVrnT3eodvE7WuACcqXnLimE94CphwgpBnDkvpgruQgFHQnEipM9T861grxMr4QxxTKFpofSsUaUwsc4xuVrrCo",
  "key13": "42E1nJ5e1yz8yq1FDXSB5wsQLfZm5AZ6rL46FinVgXtBSmtkiB5kHDCtBBcUn6SPVKPDNMVe5yaD86VBSy1urEsU",
  "key14": "oKe8rvNQzqwEYJbeN2nTWeEdKRLRsP1WsYELqwFwsFFBE9eHrqWYgLtahRM1RTgs7jMFjZ2WgChsMPrjNPxSxXC",
  "key15": "4nrWRcJz4D9zAi1AzfPtqDkM5ZWLoCWda3wFEUdAgcS3NsBRjp1xxRrWUamkdTKASzqeJ8FtogghrdzaY2ueFz9Y",
  "key16": "2n9kHeXF4xbWjPVXGMp7mbDeJ6eZ4EwdLesArVPEfB18SpmbXYvgG8b6rEUGM8VnZxd89UqfV9tvSH85heYvzWnT",
  "key17": "46M473yrnWtsDAoHy1wpRNTpfQxoMZ5arF2XwPSzqenFZBqBzHPY8yoNM1vENzQ1yWgtdtfCuMCDxkSKQgzs9nix",
  "key18": "1kf46N2JjhYK3P3L2wTPU58qn7A9E5T62VcD7JeSvRMfQMhqrkpmrH6QfGrp5LWvcMJWeHgHK5p7iJVJx135wA8",
  "key19": "2KDC79XXvg5ESERZ4syVvnHZSg9HzNQJkn7qaHvGvYkXryjdgm2C2FSedTvdMqthF7wGjHiCVWTewz7FPwtCaq2s",
  "key20": "4Vx2X7zyjZtsVS7XDJW1fK9C61CYhu1KUf58kKNfnGkgrdERBHUY7uWvmTsjGiREKZfDHVmCxrGX1UDmeVZEhbnH",
  "key21": "3QQBqPnLPnpZ6pLxbKumAJYaLKP8zGRuD6v7wrK9mMfcJc3EKqKfRaadQYqquPEUP7NqWafZG8mZe3bZdSHNsgo2",
  "key22": "5oYkLwQtBHypyP3BAHWyhbWLdSSz9zNmLHUK7xardhoXKc8kf1A6hvAhwyUoVXW3AqMGrhJAJ8q4YbRDyjDgM5De",
  "key23": "3KPJg9yP1vqMYV6nRC7Do9oLn4RGbgY1pYf3ELjyR7FGTrLkQWiVPCfrB8Y8krup4f7DCPbwH66cHsQBfnrCdVHE",
  "key24": "5J5nU4Q899yxy5gDx64uE9MypTAJ8EXFLYrpoFWAcztT9L6wWMYMycSBn2mCVDVoJ63W8rFLe59NuTCUCmFjwZLz",
  "key25": "2Z69b2GkdJPrcSGSF3eNTKtpPLjJw89kTxPWhPxtd9LHAdJXEcbPkagefXGx23YLo1XdzF6uraeEZJiWBbgYJq5A",
  "key26": "2wVJmDXAEjZAzu7itZV36wnuef8shdCDFioR3uGMSJdKREVh8BYFaGyzeJsPhXHWW41DJzeFcPCzbmf62sbGMzHj",
  "key27": "hsrWKvoHf7Q7WiWP7Q4UHf2Kz3g1PZw9cMNFGdrdZeRCfhX6SR3yr7uyMziDf8kMdc4S9B859HQYRHYTj6f42VF",
  "key28": "35NkUmwXwi5tU7fjJJ62ouH6YHijgDVnYjbXGZrs8CdZDghmK6DuvReCHG4kmQW56aYKYj9wdasXTJAXoe7iUdqt",
  "key29": "5CcYxerQDCmimMS9zHegVLrWe8CiQLP1qfgyd76yH8mTfTh3NxvZSMtCRLqqsHGqyh9Z8PziAGj3rwEheCJYb5nS",
  "key30": "2vGkuTH9or2c9fKgWP55gEi3DY1tLDGDhkcTU9y9jqFzMytXqa4jum535ekAahWWzBQKvENZxLVYdwGXNU19UogF",
  "key31": "2hK7UKYc9DrXSij7Wa7Lgu1UAtsd67vz6jYmmHVy1wqARfqdTn6fii63UURFq1xSqjDSGy3MyTUAMK8smTcYnKWm",
  "key32": "4E99J8ZepX6LPJCjBg25o7HFV8PZiqKLxMh4f8VoH6RPW2jXKb7j5XMUijD4Dv5Lhz2uTxe7ZxWAgWaJ6zT6HpA9",
  "key33": "u79cZ3YZM44T4kBb3Bo1D4LDQWE1HycrYqC9jTXYK59NToi976LszUvc88jy6KAcRJiCVFn4eLVJfBuZsxxakpK",
  "key34": "592BUEYDgKDrZxm32kZTPQykCS75gJJtgd5egobLxpAED2Z1FSTGBJUzSVQWemLY15GuD8RWNkvcuTehsLgmtics",
  "key35": "36D2LpCvRTKsGs6do7bgXa6VhpfsqJr9Y7qMfNP4m273x9pA3Bem9UvQCTben4x9Xumh1pcMaV1cxf6LufndyEhH"
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
