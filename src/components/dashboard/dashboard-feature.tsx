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
    "231B3yZ7nUfRodeGHq1W4VLPH82jBW1aDKJ3D7dZVch9KmXva3CuwaiTfmCUV7iQutC66UU6UtWjNGrUCHS4k2qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26QBBEmjtvBhucUkrkAbdL3FJbZpGG8qk7ZxmmN1JrmXpfgNj2njwJDJiatz5quManfaUXfvBwrtj1y9JBcYR5m4",
  "key1": "2URFhWT67QrpsTpL3tdXmY2xa9tSpQMBuYA2oh9hUFoiSFAsQvuriqfB6NLxREv1xW6EbuVVKpezJxmDexUuLii9",
  "key2": "2xGrYcVj2PMcf6n4npDYseS21d4FShKgUDP8Cyg8Mb17EnMF1zfHB26DZmV3amsuqRMwHnXZmA4sE3mQfj8Hdvhw",
  "key3": "3JuHCy58q833W6fnjpumvZ2KHALyByisqCTeLZYNbJd3aD7jfAVRCry3ZerwF29VjHFQ5Cy1otrmtPYScQpKUjae",
  "key4": "4EhpbSk8f18rJB73DBiEWCw78oXGe8wNH436M26VyyZgQWiJDN4ZTt7RV7Zgupdw6fafBUhj7Vnj49yTpAxDkuA5",
  "key5": "5bjuLdXHbC1ar4kiFm4Z6MSiZBBWWLL1jqKEjk2kuioDy6P4s7QvJL8o1SJftpp9uj8438S8Ui7KBuF6793SCxAY",
  "key6": "5KFyr62kVkMNXhWmXkqfY1ZmtnVa6sASfXayuQkLCnghxP7VBkYDanRTtXRgnydR65XMgacWjhZy32Xvs8vSvCcY",
  "key7": "5hx2DBfswceFyzKYvn7TYey8GCGj8sJyfxfCigiDFy7Mm3EjZ9ZGrpRfReNzxLmXjVP2HMgZivJPcuxNebg7bRGN",
  "key8": "3kSFbAdaYyxxQRjPBPe3op9xYmy7f34bZuRc2RCWiKNWtRAL3hjBgYRBJovsqc2NXKUXYN4PrPLVKhU35uW959VZ",
  "key9": "4YfiPohiW3eJVh47WAZp7XAtcz22E9f5bdkCFERgmbLTkMaSy9vncjn2V1R48Tw82LKq1mEANTzBiPArdQYAppUY",
  "key10": "4HLw4fLJ8e6dFsFnUyxocYpCsuY3mux56P4KacvhmtTiJJgBnFbD1wLD6ySgcpdb3e733PTrxCgtPoPrE2qnUbpA",
  "key11": "4arAvuzkfnD13wEHhHsbMAn4eWgorcw9mcwbvK9XuRNDjDfnYXSYJwYjZnyCGYVB6iegjytMHto64FWasNRyC4bL",
  "key12": "3ru67xrJXtHYhqxjjMU6u5r5inR6sRzWApbPpLW86Wee9AZL3nR3ynzuFtbimjh595yTZXJDqXUHjF3QxcuXvhjG",
  "key13": "8DGmKv8JNKg4MZe6SbLTRzR7P3kgw7TY8Pg1X9foJr384EvVqN2tLjrzweUU7PA73o6U77jy3bduE652SeF8eZf",
  "key14": "5yWde3JAMCpJGZ1m74ws1j7RjYvsWX8jhLstYYjSrUyWGhaWoMDakHmHAntGUEUv9EuVXrGcxhRy5PpDBPYoptbU",
  "key15": "3FaWKt5Kb8BjbscuM2tyLec2auCb5mPeCcoX7cLQH7u4sMqUPpct8efhmjqpS3NVrJ4TVqZ8Rq2YsdqQvVcxTFQY",
  "key16": "4pt9TS3t15YvkntzpjyYqJsdsjXHep8TG7wC9gLhpev4hZJhVAXeW2Bt3wunNJ2JnCY1XqYWLEDS5sA554KdRTkm",
  "key17": "2HEGSMmdctruLB3Uv5WRa1m77rrB9Gr91oi4G3KKN7Wk9ZbzggkW1fmTLkhaiBS5tK9fcSKkcMmt14CNmmcThScg",
  "key18": "477oxhn5NUBfP7nh2pNcDh4hk8b6CoFMNSNuac4EMs1qZJjA3pJLAZrgi3r9tTq7KumFrJFLcas9tjRywvy8XsUo",
  "key19": "YuQ2Uf4eYc6T7mqhZHtbimeMbwGdN1yoPixrBzVHRGMZPyV8H69Gxia6gqckMgcn2uSkciFWxwp9tgn7Afo4xcf",
  "key20": "3QbYggqCKeBxQbGYVTx6r2k5nK9HRJopdSCjPbjtU7f6FGFvoqcNFQYakTKV4DynwZV6in3KaBHyG5h6LfYWzHeg",
  "key21": "4fYd68VToFtH7xt6RTVu6ZxNBGsFrM2s5HiuGr7hYMvWtm2jCf3MQngXZZtRToDBbsoYxQuiqzk3o181btpC6Mbr",
  "key22": "vCTLz9J523NLRvWaA7J5FhLgcW6p6xY4MPwwj2cVL8TdRezoPiLbkHC2UsW4a1iJu3y7U7CavuRsUqx1UXsBHbG",
  "key23": "Y3fQ56SCG9aGqpkkLbPoGKNeE1uLhV2FjTDRURGEwEDCHNuDzsFKPSpmv3VR9zRAoxucNMATWL3nsDPSU6AFswV",
  "key24": "7bMekyWJ83x55q9uTQNpMDS8m2ycjUS1XiGjgvXGFgZKtGPtq1metrxjizq9aPz3gZHJPU6GKJr5FaqEiA4Ejru",
  "key25": "4ERJjMYZt52MyUkvy3Xmb3MLsh3QrfJYrHmcGitRPyiXYgqGquY5Sm5XDQx7qKshTijaRuhYYehWadTdnw6vko5y",
  "key26": "SsCNVbBoaCLPtTdww6ihc6hKjwdTRE3atvM8XKCpCCYNoWFjJDRTCFTZnsXUDvTyCnTZk68oWLnttnmztbSicbP",
  "key27": "4kwpTmuYxYdH9QFvYZe8cXjvxvfZfZD8w4NMu8EXWeZK63DPNmghqTR5auzxiBtuEfP4a8ttJUyhJ2QcfxtHBnbf",
  "key28": "4zCUFzpWBMrsJUXoyMkhnq8sqtFgG7wpDnBL1K9SNUKditgVZh1wirnpXYHniH3pJS4PJxG9vdtaJeup4Yjy1646"
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
