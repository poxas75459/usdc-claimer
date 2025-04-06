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
    "3TpS8BFGKtjHWCpSe46zRDQyCmNiUWMfya4wbBSXL2C8RkhTL7sfE78MEdewzW7fM8TeNX4XLdLsKjmtegK9vSPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uk8dLtJb4EvLRsTp4eUddSZywD58CYBpaAnynZo3fAHZ5SdGbCdsjT7YbyTb38mLV7FQ69UYunT1E4WteUWhGSi",
  "key1": "24Cum8LBoeDz69Cy4xouuyfBQ8o4LQ9Eni5aGqPmJBGxdG573pNyKsYjsBr4gBW67TE131fnx62yb1nqKntH7dG6",
  "key2": "37M7bCJmrbrzkmasCA4Kr9r4VdP9L4bj6TzSDRXiWVmeFJFkDzmZdoFp7xNL4aHUFg3nnycCYxU2uqjCGBEDjWjT",
  "key3": "4ZCinTPmWqUcPGXG1b9JLtcidCRH6uNM3MmwMBDPsphtK1HotJinNBgEy9GppKZ8H99gB13s2dvaXAGjjdeAmYVV",
  "key4": "3e6Ba4m1ciZPWcC2vyZoR92QvJ9MnL9hTXzmHkJTTcmmnvpuNEyLbuyHvuRqkwNz6oCoE3V1rmzw9nhqUiLoMeuZ",
  "key5": "61W1DjwmybxXzp6JC8hEyExkctvwg8JzSh6Dauq6vRAAKciy7ikrT9t29gA1mgLEawLLjvyw2Sc1Q75xTUco527V",
  "key6": "3W9EAoiVRA2fHHFJiDb2FFBnxwxKkvxrQecvqbMSR8cK5NcjiG9sDJGf97TgVCTvQ5RAWC5o91KPdFnMAqYaW9sA",
  "key7": "28CsYZC1odDZo8XJsJz1CUjCwuoTCgtJ4BriXRq4WqVyvjfjzkNAQDtvZoxzkbXdFYndS2JvkaKk8rmiz5SR5ZBW",
  "key8": "VEqjDRq14kZKiHyqtzsVGJf8TSkJoDRDrQtrcvrbXXjcqdpHyyHy7uwmUnrjXcg3jJ2m4tsffsXqW3f64tb8AHf",
  "key9": "xgBk8mbVAiUsSPE42zfczbXNDr1gjb3HFWcs5akfvGyoSuCb5F4ShtZBSjZkXk4k6nFm4BwVM5YZvXZRbTepivv",
  "key10": "2pFBTQHv3gV7B9M6wtmTnz7MzzD4NqWBfH3TYBnXbeS4Gq6mFpBSosfmAiG2tuRNGMEPqefpYkD5a8fpi3FbS4hd",
  "key11": "UdMtNhv3nRxLMKX3gEXTDGvUWpEiZjDoaCqstkbzJ3w14UoAh8zCmefmnHuQKGfQK44T2VRjbTcmPitsLUBMAgW",
  "key12": "3fzhmMvB7zw5s8bmiAEoTvaD5sMzsXxvQJC5y6ApB1UTXsMvbHmrRwvrxRL2Bp7nbtWty13n1HjhvspT6dAZF7K7",
  "key13": "pj2ixd4eMbErF23zpJ7VzeTUhDt1DuixUYxF3UybUathtHs3W1fuGVR6jUimeeitWginRP3EY7QX7acrj68Pswm",
  "key14": "64V8Bnzz5D5YSmujXrkEHzZpZQAQhLNbTq8a2djxh7NKnsNdDGZyC61dc8U4Qd6Qp6My4EdA7gBVgNVZoug3zxG6",
  "key15": "2M9wRoJfkNcfmYPwd19yLvGoHGuQRVkRiz3dbE5iMSSdvF5C4EbaEUMEKbAcYGb4vABV8jQtGvrnptTVez4bpJh9",
  "key16": "3QJNkeN5vP7UPhXaZqc5ToNPFJR65t4JPeeFZVeqzXMAi3URAJQCJoAZDptJrTZafPqFuiKgHK5yJmiwnfriy93p",
  "key17": "44LYHxAa7Lhx459Urm8JqMTaA1h7cFzmmrNNcTTEyQuRj5YVRCnKZz6UZEqScKvoLTRCb19m7tPGx91Q67AeRmUH",
  "key18": "53gDM9ZFiCneTHviQ7wRaj7rygivmriZYwNKbV35DTCJHCeUnmiUToDecLGYc4oWcqmw1kiUQYiJmXXipXNQSaQ9",
  "key19": "kkucoKUCwrmkPUcfeE14C35UnM4BqhKLyP48v1vFcvBVH3Lq2oM7ZDHvUEgr83hnKip2zAce6eFDEdZdMyCerhC",
  "key20": "4nKmrroPWZKY1dT73Aj7P1y433DnVvjgnF8KdCEzNz7WQfvL9ySMjPrx4uhDNJ4V24wRbsvsoCkips1bCgcbaGgo",
  "key21": "4XnZSkRCsKac7SFNEP3EcmKrfb3iVqAZQxdsPgqurrXVoFWedzHk2mGHS8LTg8E7r3q8d1WUPVVa97zQisoLco3Q",
  "key22": "3QDRnN7jrciVksy2RD1ZA39qJYqNERUvafKcyKYyGm5HE8uNxRwME57PQAjt3xF2c37HEj4DthXWXrJpqDm5ba3H",
  "key23": "364ECsa6f6a5tjSTmrUZRnZDcZWKYEDzgRjCQWnLJTfLmYMQDkfXVuGahToEZDdAzN4zRv9V7ZtQvUvZdmhqUrHA",
  "key24": "5dzumDbrfydxyHbQmZZSbiMRSDVyuvvvBYDNW8yoUrvCKFscg5ffeCZzdiwPCnt7hStkwMqcGn1HD46UsYvj6p3w",
  "key25": "26moRnVDDpWJzGdXqm2EX9iPdnwGGn7ECs78GfxW5PNhmRsKKHJsRdHrncLWbQvyiEtArsGLbcVVjr5VtGDaWcvb",
  "key26": "33z88c7pKfozJ32KToHZKMtNd5nzZAwPnXXLrAgDH7FVXB51QbNapFedxknPxBKCLn61c7MHFCZLjUB4R75hCqgQ",
  "key27": "2UgW9kHtQQo7dTCSZyGFzmxPzumoA8NDmcwXcnPE8mCRYcRFuD5Mys6ESS4fLSHQQqGHJKY9NLqmmNjSM4D5moJj",
  "key28": "3ZKVxjmbG1Pp3heMihydjQ87rNVngZsyXHqTo8EJqKaEga2UofH5Spmpt2LVNq2cvAmgQTvyqGRKHLCGLNpY3QBq",
  "key29": "GcBPYNeXx6Fg9PxP3ZguQgws1hwKpzLABRCW8gR25L6owECv1TFTsFiNNL2dfc8n7BmzKfZnyPRvq9JQBxZs8j2",
  "key30": "2DYLCwUgnjp967bLPiT7WZbFPEMLX6Mk6NUy2PNKqPcaxC71ym6c2rqazRCAB1H77vRhbk46kT12A2d7zGuXB4jP",
  "key31": "4FihUs2fadhwYupdZ7xHPxBLAJXMggZnJg6aTdw12ytKu1L7ZExVNo5kP8wndaj3BhUPNuZ3iJ86CUJSpwScp7Tj",
  "key32": "huFRYU37E9z7p6CoMSVz2HFJDnXTRvyBmmcNGNRJLW2mZHWeSfPeu6z6piqeBJ8L7u7BywnhCC4yXdgDpUZk9AB",
  "key33": "4DSanJoRm8RbMJEPGhUyRaRWhcmTMV8iX1VkgiSPxQx43GBzXGvGFbLiqfhDMY5UTxvsnP3R3Y2qHwyZnsmZaEFV",
  "key34": "4qVBK4Hb2HnuuUsyozezSPaw7kJBDioK3kVGPHzxKPduPXQTM5oALHQJR3AhoduF74kZM8pVNMraENk5qCNJZP69",
  "key35": "217yTNNfcJNbakrx8aAMpDbFFthjr4axMuC6AhbKyCco3aE1yfWiF4x8UWRXyxqdUY3WZy1F7CjX6eJtDFYj19Pw",
  "key36": "21fLtAHCvoK9VwbTsYSKJoE1fJpwuq1yo3vtr383uoF1uh3YvqaaZpVPtRgtKn4jbZjViRJH1Goe8wEgfSRvrQzb",
  "key37": "4YMzdRy52M1EfABepMP3pysxezsvmu53mRMcQgHD63VSA5QZoaFjegnapb77xTP2jCLnvVnpypZtJHxMTu5sVJV"
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
