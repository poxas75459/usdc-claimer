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
    "BiZBg56RGsdHd4SjAGJ44fvfL46KbmnJozs7RppF7JtEVqa9QbjCb7kp9ysEzBXAfn2eXG9syBTq7fe7zEDn1jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5smRemg2Ci8rqqUaRHUaDGAifsG72hzdBqtSaBT1W5SMqdFet1q8cgyS9XhMuQLRvtsq4yMyXM5uKSpuJgRjn3vm",
  "key1": "38JW5xJBWVMQ6YpiF2s6uV33jpZQYYPar1KJMEd342VEzPy7td6dsbCW8xrFpo8TNJZJs8xCWACjgsfriNzWth26",
  "key2": "5oBqCaSAsN466baL31mZ5jTiKZYGLmogUCBt91HgeWY54uzfqwMPRRJeyqc3JgD6zdAb4yZz5JxMSjZg8Xbhskca",
  "key3": "5LbZLGzqxoKBwkt4FSSYv2uq44y3s75J24bRuhtefNHggZEvU7qun7oaxZ6cKSa9wNVAThtwMZFSuLybPdVK6beL",
  "key4": "5tWUt6NGMm9eVH9rNxnm3cvG5MeGNETsuhxzvVVHWdSvxr4BhubGR1x9wm1VNsweG7jtUwsdwpGLr974rPTgrhbY",
  "key5": "2AVzLvPYm2Y2XowVdCcVWmsbEDX64wcDzRn8VpaRyS2LjC3ajJsaWCMaBLysdwQ5NRqU6PTWaDx6cEP32odyjZg3",
  "key6": "2JrzahHpoPREWAwXUE5MtowRjaERq8XzthnHCLtbAadFMeW9zKe7qzPZUGtGzCrkVcPEYsKVq2NjnYpYWpBoxYaL",
  "key7": "2USJU4yoLgcKpNM5Q4Wyt6GodTVFE9v3uYFgckQARcbFrUpK9b9kELHzpdAHRt75a64BJCcLGkbprQZhTxcnnvRX",
  "key8": "38yGXe9pXMYaJ8K8sPcduG7XJq563epo6G9WVhFRPGtfyHUSS6BzsxLZhUH9gTg4MR9PHLRkAmwmwqLTSSHDzpy8",
  "key9": "nu1rMhBHD6DG9mSf2JdnBbYtMdYcWD4uKFMmWZYrYHrfc3dg7vWXDkLTz4Ew5v1tqQqh5dQXqGkJPgHj8KvKdBs",
  "key10": "Ftc1pZCrzK8fisSBSReJGBLfgNfZY2UdERMBjdRmXJWWeCT6QTM1jVfapqEsH2MmAYueE2J6mwZfEGgUKtzBudD",
  "key11": "2TZ6UejeTAykn6MuMcG2pkK6Mqy3FvmwRCPdxXLCHX3VSqZcaUyEoq9AXVw2zoHwhqtiVLG3PXpDVB9vFQVqZFJ3",
  "key12": "4Nc6tW9gxgXkkSzje76bjW8fvmdWsjhrqTznw1ptCR3ddRRBZazoEbhTZFQxKVDwsJi2Tg5TXyf2jK7avEuEuwBR",
  "key13": "5f79JkJXTqwvm88r3UeTFRwaEct6Sr1CK3JcsViuxAFb3uiAscV8pV6S1XabXLMsmqcfZ1ULgbb9sk4RtT1vCSxr",
  "key14": "Xd4r3wQ9yyj4drG17gFU7g4zu2PfAqzPDyXbSEAGgXxnfoX3PpJXtqNVK3FMCxR2UscTvFV4Rc7gYtCQBhcF1j4",
  "key15": "3ieDGH8Cf7ZuZ5nFRGvrfZ3dpacKxAeLmnDo2oPKaqwFZraLZ2ELcVZ9nxT48mzuERwChPzUZ8RjmVjMurnMCjJM",
  "key16": "45yJpXQRPQqayCL2dByjb5jmnAgpy1qXQDyAKajQfUZMvVxnapN2hSfvkHipQRJZyurgsTCdEp4vHk8Z1zT3TRGV",
  "key17": "SLTRBxLWT2DSoGvEAw25oxrqWPGL6ArxgqtRJfw9RWNT9PtqNwMqAMTySY7xgVzCXBGvrWH37mhj6NBNhCmtnJa",
  "key18": "43ot8dUrH7ZCLB82511yebZxWLhDAXEuXdWjp93yw8PitwTVqAM82rnu7fRcmVRNE39EQ5jNPYQpDi2YeL5X6tmo",
  "key19": "3pL84KwPgsPD1QYwxZmn4TH3nbbHrCefHMP1wxjz1JtySD8MrsWLjBibEXE42Q1gwbXqDuwTv7DSNKZx5zDWSgvy",
  "key20": "sFP9GsmdD4aua8QpvbihwjkwtNSyDbNfrSPkHxobzmvPC5PrLATh6oQFRrcrVrMPXhYnxiewKYeeGnUYNut4C6G",
  "key21": "2sbw1o4J7vpz4RcqJsKvbKMGSTmnYnQM5h3AvqGzqUm1PxAzCLz4vAz3GY8X59cjk7EC9sAg44TU8PhVfumbom6U",
  "key22": "5B4HHVcFcy8JpFjw3L1pNBwVuGNHSQtAYUauS5Mm8ZF7zeAVqo9DLAF6iZPJtN6dMuHJrg1UWX9DysBs5dvWvQaX",
  "key23": "2tGaFnSXZrjdZpc5ekyHfYqtorc894X1YC3FmsdSAXRG4vVLuNLrj2RJDFCTdH3pGu8eGb291uPb8wQ7UGLV3sY2",
  "key24": "4rZkbVM5rc5LkRDEY9qa1vjTWa2gPxkU3bqPsQ4p4zMh6n1KKrvU8Wrsf6qLVsJ3qcTSWa8UuVZVy6PA217oB6rN",
  "key25": "3JcDfKU3NMEX8e7NvzbPR5q8wR57KEFoSfdV7GPqx867tUoP1S8RLEMdpEyzJifdMPZkVb2PaA7Dm3ZSkcpYrvi2",
  "key26": "5NjrH19nbQ2Dfx7XpE5c81oFF2ydhYZmtMtM2Dgj7VHqZs4BDHbABTmYRL6hdnhrm9QL9dJPvG64XozvVamHYKL7",
  "key27": "3RrwDqbXH1xKdnyomf6s6tjLU8vAAiv1wjncCeg3AnpCJZeyJxMCC1ktKmPinWfGGmrDtYN6rVUVgNmgofK3snCs",
  "key28": "56ZcU51dHH2RS7wzjE1mh5YjRMSRXh8JjHPY3WCSksWQwWmfr9tre4bPUJsNYQiCA2Ccs8nFBnhAeWvvnZn9YbQf",
  "key29": "2HUzhyY7aocgJwGN4PknPetus3XguNYmVmDwe5cHVxPPenBvPyQPxWxKZ68w1t866yrvJKQVf9YFzqnw5TVX4K4L",
  "key30": "5m4o1F2d64K4WGaeBJCHo88sMAY6edGP8s51d6vW4hMcnRu8nUMDANUrYHhmhTNWEorfKtDsxqAsgzKTq3dboLrM",
  "key31": "2U2GzQMPpSm7a5HseU15redJz2iGznVzCR469igFED8QGRrYqTV4UtyX1RSHfboMwPh7yPgyhr59go7t4bLHdfX5",
  "key32": "4aTNhoRroPmvBGEyPKnRMzHKYxZ2JEbJ7VsZy3DssC5YhznLQt5JkLVpwNY7PijqdsEw6jTHpdkPCxZDAgXoi5Ew"
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
