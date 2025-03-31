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
    "3bHpGkecX6G3GJL6o71qQZa5AxYobnNFnBoxe4LXFEd6jrSPcym5p9ihesoL3y6rqczgik2aDc8ieghQobjLybhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rwUGNYfBUrt3ymXbFwhoM6Q5xYVs4DYhEUCtLg52n7HLP2KdbPy6vkbcmA1c3YVvG7pp13EX3yXZ8WhyvcJAxw",
  "key1": "2oS7FWpUT32oFa54fwXCSLQeFppKAAjZpF6kPGZbt7LQpc5RmYruHFgxyw9MqEg3fXFhwNW7yUhBRhnxDTfbcCeW",
  "key2": "37scx3XmDDGX8i3E4c6rEbQN89DSFwQaggrGfuQZM2qNSMAbhNiUX1LsFzkVGxa8DGGFxoyVY77rrJz7fVF6mLKM",
  "key3": "57239bmTZ7SUwJYPHD6aFR2TAr6nZUDtEoVh4aNKWTHVzYxnsRt9128XmQfccgN89bVMNJbLY8Vtifv3VApi1RLZ",
  "key4": "29MKuc8dGnpJ2KgNEWXDdxYumZ9vrebuJLz4aK4AULicjSKhJcZyxG31et9pGog1mnn53HRBZG74p2nwmvrTjHDa",
  "key5": "4skW2mvc6xQdjYRfyrhVKXEtTNN8vjAPBbAXBf1Dauf9WJ89vjyMxuEJRrKPXZuQS4z8Xchf2KZzEsGSQpCy2eRr",
  "key6": "4BW4DZpqxveqvxYZRAXLFRb63Sz5Uji48n5XBFTiRh12QEsGNcjJ9TMJQ66vZadwixwYDxkfoEW1BTwXHrxN2SVx",
  "key7": "28B8hWyaisfaAgfG2LKQcLRpNj2foAKU1Q8uC4pb95UgUvcXSN9SvmTYxkX4GAL4sfNR6qeDgh23vWJatHY85iE6",
  "key8": "62KhRsriSAmn6ELVJKtaTYkLqbWuCUynYLJbXj6qbQ3r57TTReMKngyw8XjRtQDojLC2uDNBMC2xXdnGpXtHQLnh",
  "key9": "3PWPRy7nD2E6Nyfjdr46rEz9Hjexf4EURa55opNXCdQVjvRNUaK26tzpXihi44MG6HUWyFs4WhZrfK9C3MyBupK4",
  "key10": "5gH6U8J1dW3sqpAdKKExEUDdz3SiQ7UtcikTptpnjWDNAnY6oJo3hMtER6Xp23R2njSkJQo7Mpo8J2h8uvPe9nJf",
  "key11": "5T1Km4y8o6xuJHqH3xM92thX3Gpd3ccX89bYVnQ315LDzVW33uYJ5mrT4eJmnuG482nWxFNR52bTRaRn4iXSWrk2",
  "key12": "5wDNPziJsmz2wAAAiJZdUkGo9SC8u28FjpdFxCjGxsQjckAUYh6mAizG3BSZjeeHPfg8cHGM3WiMd5uogtCpF46u",
  "key13": "5WimC1qs284dAJimiZoBsrAg6ZrJUW6cYEW7refKYbJxJdJtMUMMNymvGR465CdKm3f5kyk8J4VvUDKpzTZUE68T",
  "key14": "57ZztTA8VC1DaRUpBqkddDGuDcSVAuycjWnJp7a6mCeE4DAG1GxmmWDMN3CUb2ee2iC3YpR4KaEXnn2vphC4rZY5",
  "key15": "3jdsXMo9YyRYj6kXKUZx5i5BU6Ci74mah2SUYYo3Ce1HqkWfyHdLJPcKtH2GU2VCz8157chfG8sF6mepHuuWwpfZ",
  "key16": "5mzJ7nuJaWYtuBqZXNjf6XvzwEj8D5uVsKRj24LakeLrxHxMrRa2RKZTAAgh8WRrp51qqVwSTnkLVWE4PAEXVWUD",
  "key17": "Vzd9ZUFVWErsHWbp28MYq6FrrSvzmqTF3MvEzU8X1Rw5yv9EQoZj1fUWrfz5NbjLPiw6oxRk3eCD9RDAQgVYKwe",
  "key18": "45G9S1wNZCgV4MuPwiq2daQZqgbMsYRyVYQHQ5hRpGEbGbfoF6r7oyu2qjkQgffVLuxYKDF7pXtztzJBLyesrff5",
  "key19": "5GQZGcGw1K1doVJw3hsE1CuHVXW3Dc4fUfUcxKFw3A8dneswWkZRJ9m8bzRyKmP6VqFB8J3YEs62njAiiUvkVvzJ",
  "key20": "3Y65cqkZ59deFP8WMtPqhFLZmAbvojk5dzTv9zEcRWPmpy5AeLpE7hgy2RCtpd43UDYhpDCrmFrfoDfPvYkRU4p8",
  "key21": "3Meze9br7Ra3PyrU9QbPRPKDFWgXp2WEKcju2TAJDiAsV8JQ4uzq9Mgi1voSEVPTVAcViAncQG5LjwsmrNigBagC",
  "key22": "5sK79D4VSv4Hz11R66PPBEqDJ3jo486FGM7xw65dPRXaufKgNyMEbczMknk5Dptcd8R6eKo35zSjsVuR22aLRXB",
  "key23": "2Vi67nmyr31aoBd86vAqgmfVDyqxVYNnsWucfY85ohgHRkQJmciLMiXPAykhQNJhxGJiem7xxeYQsb3VLE8ckcAe",
  "key24": "64BTLFa8d9mSwRJP5XoEb4mVDVQVNchs6tvntWJcK7tijyPxxd5kYu46Ytb6Mo1bae7KZKrYH75fVhcLLTxK16Er",
  "key25": "3GN4qYdL2nC7uFwxzfhxnWK5fsFbgMCwg692ARD7rb4QJeHSLC6syNyzh6Ka934acPcARWo4tZeLGFYS4gXdw8vC",
  "key26": "3fSRvoKYE5WW8JFiPAeznPRkgdBrAm6q1ijVMHhif9WgQBsqS2bskF6S2YmCnxy8KqPiPbDaDx8KSidgvLtRdtXX",
  "key27": "421UHc4gSniP2y88TzbU57r1rUtFfabvbgh1uYHy46pZ7qUHDk6DkDQ6ey1QdtVs99PpdjgnPhcRkd5Gfd8ayC7N",
  "key28": "2o7JK8aUhksgbwLNooL2pc1WptUiJtyBb8v4EJNRTeUh7kSfwH3PCkw5xyxUxNeLDcEF6pu1emX3kbbrwWJP1CJX",
  "key29": "4mBZ8zNKjG4zKgwyAEVNffkxXSgEzd7Eq4cuUHM718aWU71VRVERNsdaDRUpQ2kZi3kpDZcNYyqrSP4rkZ1APABd",
  "key30": "22Yis5zBswqidJkhvWBrs7ETkRx5zWBLbgWw8ZMkquTJ1DWbDo8CMQ2WJwhmMu74FwTQ94dAiHooHDZNaAZr3QKT",
  "key31": "DJfVtNvnm37MWBc7dzi2eNYctwfr7BMmAFA2y26yp8Tbd1tDUCooVQKudLzZKBVu5TXb5CD47x73ZCdtSWVHn3Z",
  "key32": "3ub3DV6fQ58LtV9Sp2aL59iUeG75LFNCTxm1ZNYQYyBb8FRkHb8GzoWp4czKyDo6NPmEwAQHFap7Sr3mu5659ZdN",
  "key33": "2zb99N2PCS1aqKR9cHYbcoj2ejWirBz8pYc8CFTLn6CUswKFkqJgTQ74t1KJvpFVme7fAD4WUsgfMaZTq2nF9yN3",
  "key34": "5MVG7e72vHne3QwrhNdtVpuaBn3r4BF5LTfMJgFdeotztX7PsdBEX7acMnq1tbNRzLTHafupD7JkQbWvnskJ23mM",
  "key35": "2f8HSWj9T7ZNbWa8TBqFki7Xd6CuAD8vpwbhoAHyFyCKQgSmyoc8nT4U8boq2W4XQd3viqMSjXnX6Kpd8VLAfp3H",
  "key36": "3APX9M42tdVezgwjG3LpxKrpiJbCN1PM62WRVHrj9V91Xy8Ff2sfRdm4jFMHvsmoPhF4uSpCjCTooBB8HL7gDNyL",
  "key37": "5kM2GgZcsCqDezyQDGhQYua7WLS8rY7dcrxvLUjD2bcph1CeKyn3nWzcEV2mS8j5uXvjt6fdkZjX9MXe8SognAMt",
  "key38": "3UmYsoV4A8hJtjqkdK9qoAK3DAx4gtniEC5A2B9PHnExNNsmPymqin5VCQsRXXzQRCsg9qs6UFmHm9pJ2Sq2Us5r",
  "key39": "3rptxDFDcZs9D4KnywzB1ZadFdmDZjwt7JbgEDFaHiCYEdQuWHC61zDc8w4nzfJjtYM9Rp1s6ffW2mi9evtTzmJB",
  "key40": "3JRigQCqtJ9kqohNMjwGGFcNUe1hhGV5EQti2vw7bxPQNPjP6J2XxeW8zYGJHj8D11NbwbRRbn3vYcw2GB34sPju",
  "key41": "2512WsxX4SCckm66jAmE5p9cnr8TjFyn5a8Yrpa7ryyFMK2Yh96Ue2rGPmpoNSyMgZBm2D6ViLMAkKsptZMd678r",
  "key42": "48MXSYipcKX77ynu495W3gv8wWfMAqXVRNdxehaPzhBRZLYNUqzRvzQj7RRLfp6ZsXGHZrciyVn1SBXwgnJQiEUD"
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
