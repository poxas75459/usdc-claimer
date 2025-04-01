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
    "hb5yPDdLMyJrwoWSZPZhZvyFUneLP9xqf5ueZ4Ejg9FFsc688wbmW54Bx7hZhVLnDmxEhUjBm77diiF8vpPkhRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQGYEBb8LjVgaUxe2Cz9rRPP8Yyi2Tjx1MEtGQhFe4bHdSF6rhZsSpzvJ6P8QV7QMXZWvtcK2p9EGZ8o8zdsfWc",
  "key1": "2LhAHNZMBP4zEfkSCC1PvdoxcmEZTExBSgwUukgVpT5pVKMwyt32MMowQLQhMhBYfTRARPGYUfZhHCrEeBEXL1Zc",
  "key2": "4ztCH2XEFC5g6eGgusyPetu8CVbpHc7kjrpsTVzRUEMhq3wfs7kHc4qtXXMtuWhfQZ1N3ZKqJmCHopzMe6JhHzK",
  "key3": "b5rqw6pxUitg6R9k48uwcePUD5bGY3aKfC4namRPXBu7twrjhhNkMAhVsGXQ8Cy6Bi1ny5XWyGzcq7o9xTQ92Ww",
  "key4": "5ZrvpvAFmgJtNaDesLxs9LJKPihoCHBsgHK9emKTdGJwypSArH6scNYactKWcioWr2oyvtfufbvH5et4nwYt3ifW",
  "key5": "5E2tCEJ9iTYhUPs8sTHCPVe1t3YeoYCxRnHMxRcoB3hNQSATjGHRJF37XcXemLWRY7Z4aYaQrGnPC33PkNCQdY4x",
  "key6": "35gV9Stu48kFozj5nKNQnyijJj4Hy1P5PfxfoWxR3xC2Urq3NPa4xrFHJJKCEEcsmSRV7BgPgnnw7wPt6mQEBUh8",
  "key7": "dVtVHBzwR5uzSzU2btLeqJ224XA1Vp3UTuXPLbwjC4SMwoi9AweVjhxFeiz5h2sVk7iiejb54FiFWxAkPDa5PEQ",
  "key8": "nEqBHVRLmpf1jKqTWGpiX6KJYh3wY1kq1MyyFcxsvjcKD3TrJox4FaZDDwkywUpZkWWZiqmFUZstizengPVkjHW",
  "key9": "taofVYG8hiEyi6FCFAL4bjtScr2wmuHbKxU9ZkLMVSHg16BStXFsMoo5TxkrkPqgqdWuofWRjBafKHA2pU4wRwN",
  "key10": "3X2G94CYqZ9GG4xJHdHGj3hnpGmrPT9werA8n8YNQSHWhqcxbw7vXeXMDiyngQ3Uh523HpFwJcYVHYWZrwM9T4i5",
  "key11": "3XuUA6AEDjfjY9zxnqdFMR9Kj1gJeke8p9chREHThTRsrP97FHnUDLwQMnbbDtPxVLJrchjjW3Kxb7Je7YxU5YNf",
  "key12": "9YqwtCtmneFRJToov5wM8qKJgErjayeqYLx2sgjiobCkwkgALtaTJzbYu5Y7nQfzumtg5SJ2jWKR1BToRBUEX5w",
  "key13": "997HjfcFUtS2VgcF4FsCmoL7VJBs3EZfWKTo1FwY8Ys41eZrVXwz8k7L9vCPQHShmU4r5RCzdux6LByVBt1f8D4",
  "key14": "2BBvDdbEHUfi8wrT8xXfTKVF3FYJCew4vGiZtVkPw2hhfsCPVKZ9n8UZfyxCw1yzwGQ5hQxLM6ShHkoEVYZFmVNF",
  "key15": "3bWMwR2zEutiLCyhPCn3ZuV4ax5ydXUWfjYcxaff3JoFh2yUQM8CSRkYiWk82wyY9VJ4cg1quZELSJQqzmS8mrSD",
  "key16": "5Hsj1gYFj3APGhSfd1RHuwyX8VrLUZeoEbmCkCtH2aLHqnaVcvU49pH1kAgDCw6Hn6E5fouR4HPxEy7dD7MMXCiL",
  "key17": "2TD1Uj7XSAcyVPbKeaSVytdnCafNFRXE5ny2urE4HJvXtQU1qqj1Qe5yW9q9vowWpYqSsdVSfYkGwUAXgsaTXNkQ",
  "key18": "hGgcSLNCvgJnvkG8ywTb7RV7DkBGeyZ2nB6J4Ky2d26qPXcfxtGHMFbKdAKj8QWErx2GoAabEfuAnJQac4cCLwe",
  "key19": "2h8y1bAsknFVn5iJ9SRwtCVRMfSdCc3PxLcXPuNEecpKxxtMxDwH5jCSb4HFrNQk2PUXydYzNRn1ufkCqtvGFkyT",
  "key20": "3w8pFgQ7x1X2DNFaQTxmx653D72E9eMDufv6a4RNnD6iskaG6eKvQxAtsb2u7DRivPYynLZno8NUAWWxNUvMHaTi",
  "key21": "3etosgCA5focgrxmQYXBKaeGAMuMLFY97wWUDuaj27BAwVPnwjXVYTkD8jfJSySdTZYUEbo1s4KXw7Eo6t3qdkEL",
  "key22": "J2CNFWFLVxZmZhSC8VA7oyX5QvU6q5GLgoiWZkS6Q2fCmpHpxsRHW7p3hdBXpa4zyMXifAFsT1mPgzxLWy9tp1v",
  "key23": "2ZLiUEBQmksUqtGKkHwseeEKtrmRKFZS29dsUtPGrTFLqe22DhfpogVL7FEjUmMzDhU3pEjcmM2r1B9zdrv1vLMu",
  "key24": "38dHQ4NrGhitjBYG8pK1dKxXDkSLHGXy25J2GFfWxVqtgnvJrZrsC7ZdMUZR5KopaSMfhQLATm9yvGnZN5pFmv8L",
  "key25": "38AxJL8CWNiRpr1NKzHDuFpD6vTvjtznQHqgpPeHwjbGigFG9irsUUcEnjgNzDUtn17tapaz6QTf2z4NyuBodzkg",
  "key26": "3YGSjVaLE2Ey8C9MsJDpHStoKLwJmhXnzg7HU7JsYk8L2asczybABy39ZqeddDSVxH2JUwq6kBBjNLmKn8qtqSmj",
  "key27": "2g2Rtpo9gZbmVqZpKBAszYQpvHVmdLyfvGxjGFFSoGWz5XeYBD4zS1q99oKmF4CAUGuZQvoxycmxDAYhNn4BUdwQ",
  "key28": "2XrFfM7w7rgPrj1Z8GNLxsoMUuUMqFzoFiSDqpW9Sh7URubfmw6MZJJPryLtee2UZRekVqUsbvfFEdiTh8u1fJGT",
  "key29": "5evkXNeZANeRu9gDT5XSpqFjW1H9cDVvyvaj7cJiDHU6g2kkLjognUBp5WMZiWvqpAu33xN4YmmH6bGureqfckNe",
  "key30": "yWfupoHPUEwmNid6EM8DGaTehcBdwH1XSQaigLZzQ1r156kX5v2c1E9jENrjsFoKUVRr2Yv2jMYMBqFRZF3M5V6",
  "key31": "3n1T1wY7eKHPgjUK9X9wPnLi59xYdeeAL6qw9w8ijgwKfhAvgThdhNEz6fHhKKmk47Hn8HcbHoxnujb2vfW8irJK",
  "key32": "4CiYBonfiDyoWjU7ZDXwz7xvxUSoKPkNELgtUnWCioRaH41ERoBAzyjyqFgLBsRNid6JLDZ1ehVNAsEy9hEC6xCi",
  "key33": "4nhPHaDX5YaRmmKMfngj1K1GpXRZQzuwvvATxUtNGhArJNTS9hZ3GCo5M8m9r6A9DjyULd5ievLyZyWd6FaqFtLg",
  "key34": "8hhHrGbkKb5xyLBRNc9wST16GYFBrgWfXUpk5FiDL4kED5CncLVsy1JP4WqJt8JgVR1sfbTD7wpsEwHn7oCqAfC",
  "key35": "4nTSGYjvRMTHpzd1s2jLtpBwyvBAXC3Cx3Mvdid7zHc6MKPoXqD8YHALxqDLKp6t5PdFjB8ZGLSdk1m1kVSXH1Ad",
  "key36": "5fTca465Du5jBJoKxvbFyFJP68XMQhuxFWAaSd9piYXnrJ2ge7j3dzm3CjJAD12g2GqPrWgTTadducS2BNPbpQE9",
  "key37": "4tgatgWSd1cDwJoXdonFWuHDWGXmrQsgchDm81PZdt1CNg2LWEb549uXkdnUWXyN6Qak2eHkBGrMrVDjDvNMZKNE",
  "key38": "ea7kh5DDULAJ9z6nW4tZAXnmMgVTwRx9bsGZ5oYye6fevCCemjtczRikRmoFVchNFMiNnC5MiReZqk8DhHeNz3B",
  "key39": "61FjqdokV7jwmYC2BxnWLNvhJ8kZvMf5GaSVhomCzJVi1bTwA7nWomcVkUcn8Y7NYS9m6x6ng6M7HFj7eR9TkemT",
  "key40": "4vqN6p24iut1jiovPuE1rnsoyMQWKeb9cCN4g8fAwdzHm3vf2rDyrS57riLis2BWVeKZakxxzWxCpcX1wmHvt9mR",
  "key41": "UR3Ec9SxuAUGnQ1coFL8fqUETkhrQcXZUnRP9osiH1mvyRqYWcjK1Lz9rvFqxnT8p4qQXTA2CmDa1kBbhn9bSFG"
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
