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
    "ozez5UKPH8TUKBahWzKNon8dN42uWaFQBJko77GQMnaBvFnTQwJYHrqPz6aBiCMAkHETnRfeG9gT1HBwVwZN6Co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6s1u6aGTqp4yi5sMKP8uCeb8E1b2J9p3RR1DFCMiVLD7BNSxFvNzffhyik1WQDXfgUErPqykzjN16ShHGAbB8L",
  "key1": "4TgFqbefHqNCA9D9MTTC92wJx6tDbHuxRWmJc1g7fYFKc1SkGn1Nmr4HFADpFTB1PocE6tpRMe39Ajmfg6S4e9qk",
  "key2": "whNJkiRRG8tnDjkF4xQWkodsCpkjZnmCjoDtZYqhz9FwVvjKQvoNoic5fg9JhTYvfRfKc9qAD3steSQ2te9CspD",
  "key3": "34F53oc3wrtLrEWiKcdi5ZxgkUpREDS91KW7kegPScCd3mk2NxHZJenpYUXdytnJjRUCe7735eyFK8sQDEpsVBRH",
  "key4": "ogEEoWMDkJxjpUPmbG9wxYdKxM8SscBXJae6wPLv5wSSsxLwYC3Dpu5v4irfP5nWkq6iKWod7ZR3bDyRSQ5GYbh",
  "key5": "3xoBVuRHF7mtELUsuQv3ikbb1mhXbJNiHm4WErERwrok9PEUUBLR1LAoKV64S8kjKqPxY2Z7ySGycvCeGqrbzyCZ",
  "key6": "EdG9pzWnsFPbCi9Q5eDmW3fcSEzSq2KU44ioSdaYRTeGWQZR8ehVzpdaDAUDyFsjo4wbxHBQJoRv4JyRfS26iBW",
  "key7": "5P5tzBFnnN9F3Eb2JRaE7mrafPAWfzjmbRKw8GWfAq3zAPzZEQuwrp6pYkpSzAuKxDvQ17MDPxhouND7m1f8SyDA",
  "key8": "26Mvnibty68tX1LHPds7pCVHp7y1gAtL5U2W6oN4YNgkaeQSoVSBpPXFYwPH413EQuZaSbCsPZoY95D1Vrim2cRb",
  "key9": "335HdHQgc3WqhXQGS7beN9PA7w7VfWWBtiQgYoYFThDGQ212Vr8hGccr59roKH4fUVwjXf7VrzCD6GXiQLhxNL4Y",
  "key10": "wF8Hv2ymG4XRUXDtuk4StBWtnGd6Dy3HSVGkUH68kET61y8DhnKK9cKCVGosz72aCytExFf2f4RMfocWk63kBnj",
  "key11": "J8Qafh56e64YRhs8UNxgLJuVfjueFMokbpV5GMno8vmKvNsp4kkE6k59YL8ds9FdR25pCdq2fJAgLe1eNd8nVbq",
  "key12": "21xLChe3nrHQqV6co8a2J3aJsFwx4w9oG65ax4gSSJof7YZYJRztwUeVXMQbp6v7Qu9zgFU4yQNu7wwZvHaTpVcQ",
  "key13": "651ecuqkxy9d5NEseqbyXcWvgFAuPm4cmTmErrQqeARRqbAnL335s1EPa1TNvgve29HkyT7MwR7UpEUdtFMVyFz7",
  "key14": "Xc9db63zCUjMmPjwaynceBid4WhFXoR4qpqgqv4KuCYNzJzQKsQToWur4BNMiC16dsJz4yn6HJ3mvhVJwUu8kmb",
  "key15": "5CXhQC58D8TRhujFLHe4CsrhvqgHDW2yRcngbjVaBfq4L1Pd72SXYWeHRo9GqfNZuiwHPwndJ7hHErVR3H38BPvF",
  "key16": "3SuDp311t8L5uF5S2LEemdx6YzW3sRe9wG2K9dBwU9eHLeQiz1pF9gyRky5V5yjJKr5jshJC4HfPcJG1fVqhJuK5",
  "key17": "nKLLb8thvUxtqJxhZpDHc4viTUKN5du2w8xy47JAK7MBtWxAzuxAq26NEunCNweBfFuPfkfWLx51WeAQz2is1ic",
  "key18": "292T3PsdeSV4e4BqPFs6BkcMAPvWL2XNxPcbYq91MnSq72dBV26YGVnBng49Tf1WvhuREnCbQhGzh2sXaAYBsfoz",
  "key19": "5w5B7LERxvxhJjM9SnvWcNdJC1YZTVH5v97vxKEEsqa55D9NYqWnkGHyRHmq1Ztx3RsTjebu8HJcAxAdgPLWFpn4",
  "key20": "WLCGnGJ1AxtihRzv1LHxsuhDVj5supHCFwYQgBjBj3Di9EjyxYBLZwtXjYkra7zkuFYM7nPw8S4MQBUve7VZXhK",
  "key21": "5W7pwbUgXCrAfXL4RJ6jFEsiwEHBavVJSypVjfGQPUnMMBcHLU7A3jyikF9gBn4TzFBX1msotXxFyFizqrr75BCR",
  "key22": "3jncr3BLyLn7JFi92wq3h7jgACC6zLrxosJhk1xti8o9tzvfN4YEQhHbGRKBJ2j1GwNNj4QPvc9K3FZ44P8HaPT",
  "key23": "2C4SurU2gbgBgzuRtxegHTWW3NkcmX5DQFS4WxzwNVzQhhsYPPENCmSCQWF9oa6P4z5gzRdEkUs77A3JJkS5mQrz",
  "key24": "4VzvGPTpdP3GSpgRnhEpWF4Fr6hRo4aQjxGQSACCpsTZmnLu62yyT8aHFR14LRHUuJGfpDyDsH6fay8gNSNZWdmy",
  "key25": "2z8QFKwEqTZdW1EAK6TNFPzA1Qta68YMuttYL6Kvp3MmtmjKbFGWFujpCTb2bm6XGoj1hJ3XD7hE3nT4HY2bZx6M",
  "key26": "5fDQLz6CRLD5JgykDt6FqmE4YFA6haw2Kan9KpM88i1QvQSxE6itWEEvu2XbpbrG7ggKv6G8e76biUaXgSANj2VE",
  "key27": "2bqXGmNgiNpgXT42Pqh1dk6MQZzLyoR5JPuAmLSgE4hoMSMX2R3iWMS9HDaf9Q1ECk7JGcn7E8GGqFA9ywpfYHBU",
  "key28": "2XAiu6VfbVuFn4BuSkHysNVkQ7D4W9Fou5vLGCR47MWQJjXYapaBgHJNFfQhxRkoNqch8n7FSMwP9Mq3xcGg7PfS",
  "key29": "mXhU7u9ZLgToxS38k229irt8sn1xbHnjMymDKz5uT94rUQwWdyYZFepRPC4beXkGxuYyTu5NnPeKq5KfTtbmvh9",
  "key30": "58TFJnjNmgxRfPDbqtGzwPERUfsZUseQENZDd4FtRBgtUteNyjgC8sfF1wYVb4H5W9Vd7nojMzF9PiemuvzqmqZ5",
  "key31": "Xwss36XqNiGMLqHRbKqxc3SrRgQ3rGCT6ZbCC3caFY38oxRgeqvXjdvnsYy5pFgpC9SN2K4ermWqJ6gYxXCW3Cg",
  "key32": "3dvo43dtwXwZn4qKNftTM7kjYtm36ENWzrb5WAxxy84kfgX4jNjA41JBTvVF6XT9vtgG9NhYoqjYrbrQ6WtF9Ku2",
  "key33": "2UDjdQ6nYDXtt3BVgxr3Yq8GTKZmTY9Hoz7dPZGPMi6jvm8T5Ff6HP8FKAbhVDnctxxkFj415bNrFA1Z9dm3KZ3W"
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
