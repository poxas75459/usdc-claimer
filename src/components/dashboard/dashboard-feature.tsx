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
    "4f6ZHdzHg9Ay9b2X1DkQfBkgxqDGx8CCLHej1fLJCuQetXABoSv7CAUtb1vhmRMEVWk2vXnrKKmA4a15Wt2gP64N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kQohpDRQ9A3reNDTicjY9w9tPWYUWBBw69v2Srdfp7kCFWm8pXRXWzqyFn6Cqkm9DGbA1c6xzdb1Rv1XRAcZXB",
  "key1": "2B9x1c3BVVFeK61gPVZvXWvjmMf5YuW1uEGAuvETtviGFeJbjEMxZK13CkWtKk3uVzbcYniEzp4xct1aPxnbqExF",
  "key2": "hGCtuMcZKWVu9WRmc2NRFMyJmVp8GEzCz5fgrJYKFsffv6XnbAESGsoacrWmcP14MvrPFsY6aX5rmHJx8oBRsL2",
  "key3": "xkz4xnRgCRXB5HkjhbNkQwJAaajP7cr551ekF9gCohgBykK2npHmzgfEKHeVjzV9JzvyNnUhnwfssiQZy1rAaa3",
  "key4": "Js5J16rSZ219e9c2sTeHoqfdwvRnvNTLgDLbfqATGR9j2jXMzxnzKZBgbRUVjTtw4RxGGzBezd7Edo7V6gWpoN5",
  "key5": "5vGc8JT9TRZmFzxbhW51SR22QjtXzkb3rECKxk9G1ZZappQtxEfKWRUdGvSG6gHgGFpiuEm7bHy7H3AfGsRYjWP1",
  "key6": "3hC6CYE4XZ1tcompZusfxRJJj9CEE7CeF2uBwiP73ebksBddNwq4Viiyio3gCreDFmkDFeaXBKz2hUa9MEzdHhms",
  "key7": "4RrRMjxwnApRiEQyDMtn1TzcF5f7AQtjzgnHBkyfKEBMYHRo1jTwFiT7RWy5wXyDF9kjQUJBarWs6tcDpMRMXepz",
  "key8": "368GfR2Xs7L47cKajHwAq5bvr287mZP2Zqv2Pb81Pa7wEvGsYVVRRLio3BCCcvyxAMWMN1yauhjsvXy643RRY2Jz",
  "key9": "2avH1BgofHqar2RRj5AYUD9MaZ7vhqBxTJsePc9fRziJzU3Upez8uVLdacLChVHxixQ9SDMt34BfJHr7J2gNEwom",
  "key10": "KmckyGFZW6mjiv7MUyAdpu3ChawSr8nrm4CMowqfrMbwDPFjdVKRBuaRarrYRrAdbv5SpM8cTGqSrr4WsSTjsLP",
  "key11": "3mZ9uyRJLC9sXyA27p7pVrwFvBA6tNEZ2Yuyu6gR2YduYDJAuFCbqciZmLqmw6MbEED9HA3cAyHJigsoEJknPisw",
  "key12": "ep25bpY9bH3KaFfgdEcze63ZQnkXJWqKn4wh2cRte9Yxhtm9PAUMQzDwbEEk2fqVSXYGpS4zHG3j2WtUv7Zf7u4",
  "key13": "348FsgKzdWDBQzmVqDuT3P3YfJTia1ZGRnSG8verLdMXYrmFsrfVKrcSGBcFfi6u3winQtWeoeQn8e9KRQF2TArZ",
  "key14": "EminCcKhf2468hPQLLcFjktVDPdPK6sPinAHTunnVj6HT7QxcdK1K4QPSSHuY8rn7JAoYd36QF3qrv5sxoj6G7u",
  "key15": "3Jkw8SN1JCu3xEv5smn4aep2Dp7p9nc8FYkBLgX262ac4k6rZjNoQE3Pp3RC4exsS7TUrgnWcQ3pDdPR5akoj7Vm",
  "key16": "4MKnb3BmR4LKx3a1Ux6QnibvHc5tzh5phE9TQtiAfTGiyWHhsxAtd4bfYDHts9fNPFhy7wqV4HbVZgecKYNfToDg",
  "key17": "2MWBMHfqDyh8hjuHBCyUdkUJNFYrCHJuVgasXhZYrHiRn2NRxpSismnPXJEQQWSJwHvaw8PNXmK8NojButHWoEvU",
  "key18": "5gQec3HhY5mb3vMQLbwQoBGLU7GRfDRiLAhkMwxrQ7bvwAZbF9p15vvujBj62sSJdQdo35uMo3M3e6wR3ZVeFihj",
  "key19": "3JPvReiUnL9B8kefn62MZMen3reXgxtBzqKSVYjmF2DxPddX5Ur1z6usixcnfVHpr8d4edWtPy8sxy6AYVrmqGqT",
  "key20": "4xM8wc5bgf7TRv9FaS9chkCpELPkUorNjkRaJVxrF9gujVcCycNdP6DDjDZwqCoPMUqc8kJCPt5GRuqw8LUrg6qE",
  "key21": "4YLXMn1a5Zx5eeu9myzbyuU16tPozujYLkAYg88HtPpAbuE995kRYnPBQJYXz8ZuJT6K7hqA9HuVvJFmj4dJC2eE",
  "key22": "54eDoETYGFoHJXFusQS533hXMsHfSYpDn6BtHaMBT3M7tk4qVRhsutVrMoGwRoP9sUzfHA1G53Sx2kewsmb8mVpK",
  "key23": "5d1LXEri3bBign5gYSgNJPRKYNpEBfMXR6vvKLyerHEbfACU1dy1PeLFBBWiHWNbZSrB9fFjzJ58u9ZBJCimhWFN",
  "key24": "QXx9neSk2u7CBf4JR76VqsJnH4D7fnWrMb8fRLFkKiinKj9VrY8NnoPyyZ98K84CpN4Gvn6mtji9yjunz2m8Rqx",
  "key25": "eReXjso1PuEV8W8NnRYXHDT2jzUV9rQWGrb4q4sUu3iVVtrKd2Ki9Q8JvRZvN7waf2D7rHa21VyFsRgwfiBchpg",
  "key26": "2UU4A1hJaZUkYsmrUATZZNZX4VXQR3fBnFyBveDACk6KJssY6e4EjcMsSMfJyd8WBpnQehcbqotZyqsx3EmAyyjG",
  "key27": "5mpi71EgPdcGtZ7SWbbNAtB1P1aANs89WsDkeH9eKW6fZn7h9jrgQQd4YwaQGFEFPUAGhqLyzmHrAGJiHkJeNaGB",
  "key28": "2rqnHqk98VcVxhqwjsTo28jQU9U6niEuBRmZgpfCGB8DcHdtLh6Ji7dMcLEroUY2q5kKGpQZPTpKfMmvp4sW8E7B",
  "key29": "5MXo3uXpXE3cF74H2WTzW8727ijfAJ9PAdrTykLPzS8yT8ryAZQZasM8cHCe3rncaB1JbmnXjLzcixSXEktuxM7N",
  "key30": "3vd3ixAkmWqBTH7TFzpuP9fHavm6mznvzjCjZxpDohqySC5WwGJXNEa1r45sYawPXsJtrgFgXcNh25CmjbEZrfFy",
  "key31": "2qSKzXeaTev9W1mHgfS6m2Rxy3JgdXrVVse4yDeHru5MLXGbD94DPtLbgd7qabmfhQR3MuyMKpcvZSdzracjvpF9",
  "key32": "4zYUrne6Z5zBdDGb87JDqECf7b83HCYKxuFGHtfQgbSoDiucyATn8spqVMfPbHWCnKXgWfo1dw2kK7WGC5qvvafE",
  "key33": "4rcExYHNxCnxRLepsfh4BqgpmZGMAmSBDVAZ2U7nuJmvCHknp9f6VimoXkohumDnBGEjZ8LXUY286wQBDQLzPEMe",
  "key34": "3VaNJQHF4yYTLst9BQwTHHbhVz9AwFkRR7WpiDUerstYLgwFptivfgcHa9wek37YAHnqDhDTXGPkBmJ2rEQ42fjx",
  "key35": "2L2eeyxvPs4jVb3LDD8wmvJMEKxvyMHJttmfMdcTK43yCJdpoKoXP7N9DzF4b8hjCEvZuvxNpY64GxE2SwNhdt5c",
  "key36": "4Y18cKMoY6PGuDgPaNLVTXvFrZk5JVe51Qh6mcWrATMsaqTYf9v5KZgXzWu8yvr4f6bPCidYuLTmxi4Qqg8vJk1b",
  "key37": "VKmTuTsp87pYdoqUjq7xkz991hHfviTEnvJKGdPx71kpnXboTi8C79Di7uPEYTHmvh2JZpL2WPiz15bb1cAua6S",
  "key38": "4ThwcqYKKk3gaSZM4MdNMyCWNAAcXRJ4syxjcd8vzm1hpwtvPWFqvzBJmKbxCeUC4uVPVM6xytLASrJVnEX5Hrvd",
  "key39": "2VpS576WwuEepB56PzrrR3mHELnczkYdcoJzS5gWhowRFNTD44bB4w58V4VUv6igwhdWiFJjN2QG8SezmMN1BgNi",
  "key40": "5BRa46nhubdYQpSCmWU2mV8DDQkDdDGhKbqkkpRDL82MoosPCbJXyn8KW1kNYQTSKYHa2SytSfTSWL2Ak1AheoGz",
  "key41": "37YcLx4pqp4hSidCbc2wrHWZTTxN9NQ2Jedfhj2Bm66NZekSxdzuQsq465mouhLWkN9LsnoPn55PbBcbEZehzHQK",
  "key42": "5zYYwCjrtHY9UF7w2dp7y27dfgVAcZNgvNLCvQwuorX2csLt2NRZjwZGxH674WQh4QjUQVGod7zZpcKYHi5NXBfn",
  "key43": "2JDoVmbjfsSPwGGfqkH9SPCa8nQZ44qXZ2gZjWMAMGFgNHSMex6tBh5UQVLiFTkf38AUCmYr3CbCmmpc2g6g1saw",
  "key44": "3uhzXJ2k768CqqoDwZe2MKDYuX3VeSHMHnDx1kBmHKZVJLwprLt7Y87whjuHgxchpdcd6ddLBbJ9JSBDq65Cd7it",
  "key45": "3HfZQomKeoPtDAeNXBYGuC8RdvUoMmAwU7t5gkaq3rWY5bvyUGDyScFEabFSfPtCdx89vG23eW83eqzhh617uG5y",
  "key46": "2bgWpZBayLe3ZW3yZ4ZREAVfjTkKKMnxNWgC6joVhtYy8UMabPM89CaCiefikv8VoS7pc8QurTwxirgRobuHrm6S",
  "key47": "hnnxBX6w5pekUPcoVY9MTHKrBwDN5LRQNQJiPqo8muGRVQgpFoFyUcnYCn8WSaNFiyvM76czDQ9ncEQLErYr2zy"
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
