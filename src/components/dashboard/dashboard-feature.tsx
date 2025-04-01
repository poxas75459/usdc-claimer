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
    "4LpxwoFn9PKyA9uNXAuGHQggAx862TcqBN2PBJLXGgHFX7bHmZxLWZP9BhaSuTn9aWsFT9PbnK7pYPhZUa6ScrUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cLDbqNcitbSrR6iGTtHG5T9pyr333hHbn634M72BHPL1TwgJeoEohShg2GwmSwrDRaBxChde7B29F5EgoyN3T",
  "key1": "4JQ6mSpb7sAZdoBJKMRDbJXvXJAU3houpHrrhXigdkNJLBv17Hcx5cUEpQazBcTFhuyyrFLt17U6qSeGVVYND5U9",
  "key2": "2VHzEBG6hU9bTtBzad1GM2tyyS4eXe1kunCurC6Leoz1p7DDvNPPeCBntsbzygxtEJjrjgCz3PYWS7PS7Paivrnx",
  "key3": "2zHEf8BfTFECoosgYPUbyUBJPK4oSMiXy5bSJwM5q3Mg6DCEMYgfVre5o2mUsirQiqp25xCT66FrQW1f5oKFLzFr",
  "key4": "3JHFH7peL2kmQuvgzZX4SMijVpF1nv1udioEgnj7zpMcpLpdQaf23d8dM9JPeNtwkhA48B6UnTTzUGCfDVS4F3Ry",
  "key5": "3XuTZX7vCtSpiLoqfZoDVPdJtRg41ntidCr7mc7mvr5dn26DPQ8P3TEyqYuiDzH7yqHXmsnV93PvjEbDAPjWutN7",
  "key6": "2CRqQ5ATX4ZJxMYpFq53CKHVZP1mCeNzSVST9obYBg3FLmmAGgWBHBWanhkkCA89weNvt1KqEinv6ajaFbtphC2",
  "key7": "3Ka2RSwYcqMp33hSe6eBYLawRjZxkiRQmqyZuUqjt9eaetczHhy3CkARHUL9tDWsppqwtTTkUUtwRN8mF7E83pPc",
  "key8": "271L1V1qEgntDhFXjXDzScmNb76guSPUijVhxzNn5ZgxYcbPgNyaT2DB3bP33GfH3WpiQjH6r9AcDQW5Qe7X3L46",
  "key9": "2qXk1Q5TKJ7Qy1i3Ar2UJ6Ng2Z6BtzgCNnDAgaj1oLxJ4HEKf8gpVckgXnsSpt7Mzs9o2uyuSmG6eVEj93nnA2NX",
  "key10": "4kq5YAFvih5h7AspxPYMYDo7np7cBVyZBovJFfATFQmnKkJvnxRwSBVZj7N9czbYeSheEdTmhqHKiyG6aasmsKWE",
  "key11": "5CWyWVRvuMQ4fB3HERc49Rf1GGfqYNGe8B4XxYU3jegWUg5h9WwQqRMfZU3SaQumBbZPjvAQqaBhi61n25hT9T4f",
  "key12": "2iE7eM52FaRZocs6e29K13ggYZNKaZFte5FietDFjQ7zwmG3TgThYtfNPjqrySpYLHaVuSzYhm4mFswu2qmo33Ge",
  "key13": "3FTT3mFZ4aiqtEkxRqYmMqPFFpHPjJrvtLRys42t11viWecpbVTUykS6XZjD8rRw812K9yiwWbYD9jrjZq3wscyv",
  "key14": "fzMKRdEGn1kGHcWQiB6cZmkuoY5oyASYuz8oJry9QPw9shn9VSGhgryhPyzwPn9gW1d6cippJtKnehtwRetziXj",
  "key15": "e6efw6Jvkw6LtVXE2UeSTz4QKFzMQF6xxC7cfF2fbThQmo9jo66eFxeyGcQu8z1sHLChTrYPhZBLpPeGih4kj2E",
  "key16": "vK8RXephACmSvGJPoQqtteKxtQxTaWNPgSdisuSSPV2Y91sCkeHkKU1s63md12dwzkb1ZY9i1A9X441USRFkDH6",
  "key17": "4XfPRRaTS1VQ1A9BRssDgQdtdqh6eTmrfDSarjD5UseJ8D7hyyDi2YHL56NVMVVdBL1bicKFZUGjXEFLauzjDwq5",
  "key18": "59UVi9xiGq6KNGita4vUERoBgYK9S5ngWQJFhcbkHF4YTeLUYbFnVRqC574mgGScdUEEmyg2atuEsVSsP9hWGbzy",
  "key19": "EKj5XwSG6aBuhzMFDYAZuCu2riutDvCGAAuPe5jrL2QdSapxT311f6yvdED5jBaNk93HJ5SBTeDmC7ijjBNHCNc",
  "key20": "2jxn1eaXCwf6q2b71bkDScBVRTsdTfKJYVLPEco36cUpGwWdRLehjst3ff1KuWYviCJDkVLC4qWmz7LfBhfTiWe8",
  "key21": "4UQjUc1cbTh3WQXsWeqxFi8fCZxZJX8noMdnDdTrSYhYRJ1eSjQNBnGBfQcsTgWxcCFKnPR7G5gjF7iMLog4Bs4J",
  "key22": "3RHvLjxJkScZ3vboEuDpuxfbPsmW1s36gmqen1hhHcmosRhdq6YZ3wndCNT8othTTc96JYdGMPZErcPnrpMa9uaT",
  "key23": "o4cp7Gqm1BSSWDPU4aUCnUu4RDGbYGH7MZ7B6avFnNKKvC7z1kNUtV753ZaAm8EsdJ56NY9x7ZZk6Wkr9Yv2vj8",
  "key24": "4Sa7LnXeKnEuMtAQMCWCYBz8opkqPCekGzpqEMfjp4iZ7Ubb5D6wXQrdgmgwq7ZzfyEb2m8p55op3ST3z5TVM5dR",
  "key25": "y1X4sxoKoRgpVFVb9EL1G3UWML7QnM6E8sMe5P2Z6T7x6LrhbNoqGGQyqEkEswrEAs3wD2cS33WQ9D4uqkHqGmo",
  "key26": "2PfRZq4BYnBEkpUpbwQ9K3JqUpb1jiJEL9NS4xg2HzpPaRpkKrK7wLYG578bhSTtEkVTH68sSBeFbdQZX6zvbsuK",
  "key27": "3BxrcJWHA61YnfJcRUnzbAx4KfLL8nEnmrBr9bxNAQY3to4NNL9JC3a4EUuxKdshcq6BEn2ViMMX6Bi1BFiKeyvs",
  "key28": "agdBDYrRTDuX6Y1WbyAsENF3Ww9ESXa1n4TXJ1PHNudWtuQtmGnVe5MuskcSeWvNmpMBApA4bLuzvNDxGUmfkpF",
  "key29": "3ovKa65oiqr7ecSw6Max5eVjLf3yDVGmYbjUgonymXBPZWyDGosKQD6J4AZEdctegRHVoT9RY7YfCaHWNtG57woa"
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
