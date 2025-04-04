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
    "1zXC5MLfjUVgmCDLKJ4GdA8vuGRPkcC7GEADHpYhwpPCQ26PomJ52q3ZxCFcyWB8gAP2UaPTFp6mUnBAAV4nRrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217vdiyvvgcZeuUmw27TgS6UdnDRVZbGXBqL5LNdEqcLz9xq9rnHcaJjy5K1gSL9KyjQN9RZVZo8eDKQzFs1tvKM",
  "key1": "18DTAzhKgCYb9enJAuQTE4v7h5w3Z473eS3X4zpdNef5bJBUhLC4oYcMG449bCgnYBCZfaS8aekyGHHnchf7w8X",
  "key2": "4WBvC1qHHfCrPcHztbGPNz3Kt4gAaBruDLohPKoZYpUYLedik9trMikp4ZgPu3D1L4ZjjzJjAuxQF3xq5LeK7zWU",
  "key3": "28QLpCpCozGdepmjHzJiiRQhXZr3gBDUiibTSrWb2TTMBhN8snrnCGsWdJK1LoJR7xWbwbU7bE4JjGb8hT73NeMF",
  "key4": "2Y58eUsGsUrZmQTN1QFKaztnwh9V7An7P14EPEAQaZN8Y4M42VY1UcpaUbGK1oLz7XSC75rdqr7G3pNkRK1r8HXT",
  "key5": "oWaks4CXJrm9KdKsso1Lg2V7zgQPWgUebwG3panP4dccgf6wHdLcEmx4sXqxxGNqkWVWr3nD573tw2udUMq31X8",
  "key6": "2mFEERLRBdtyZFgtrT6pzAa8yadzETJ8XKEqhzHdUWXRr5DVkVczRFSJfR2i3MSxRTvaSYdNNSB6PVWtAoKLMBWN",
  "key7": "5q44yvSWog3D1fxQnowGYucHFrsEVgjvBq3uNVMi6zXNGfLitXi5h2h9tMTVdQ8vZ1pBPJZ2vq7VhDce2YzmSqig",
  "key8": "2iDJEANVozjfbUZp2P44F62RtjxmzXxbKYM6YXqc21rs8C3LbZq9tySb1WWvfdmiCkJ21FXLAXvJ2AFQU8JSoXoQ",
  "key9": "5eJuAjAX8CxQt3ZNHkSse3tCYC8wJ2FR1RrfimqydbwzFMVGAKAMxFxPQHLT9HqrDcCZfTTuWjVHnUv96AE5tssn",
  "key10": "3xKjdQbZQbSQuwPfwrQdEsSF7rgJSqG5maZSVMA9KaKUTAW6JYbUwkQ73mAEddZAXz7u5JNn1ZdX99uCefD6vKDY",
  "key11": "4XJdXktZaa8bvWKS8QzLYhGmfaockhvyDNM1snY4S4ymWL1GJMgrLQS1jT5VDwXWMbeUQ7HDZBoxmFUCqeTzfpDB",
  "key12": "2TFLBKt64m8oCJo83Y1EHmKxtCZYxSLhxdZDF4rc8ArLGmVqwoBbWHisKbKXV7fMBskSyh9rsjXEk94rkA3H5EJv",
  "key13": "5xLJqWqNVmKjtgEAgrMeZju6qMVdRCTLXZRS7qLLFUAZpbkw6KFzWW2hKCewvajR6G99x7GUbTmkAyv4SyU4vF3x",
  "key14": "aWLWh7Z64iN81gmHZdeoBMj8Syj8wSe9zYTa7nCk69ggBfVJqmitdZase7Mh855AUzcgNYgCRNS3rd1FEWr32Zi",
  "key15": "oV1MGo9HK4uRnARKDDQ3k19MLqDpAqBPtq2qyVvN7sTtz3Y7iWN2cLpRYiTFnKmFv3CiTidna5ucZLy5psSarQz",
  "key16": "33b421AXEKktUmC1pbWSx9y2fNqhmPzL6UzBbDrWNqd3sq5apStCdQz8GBNCsBF8ifhT3hFQfvWBweYDQ7pGEa4M",
  "key17": "45QCg16VM7L4TNV1GLLdK1Bkdk3TSTC2USKPcqCKcCdEoJrtEuV2jDDGNYoK5ffxwyJx8UnMz9STf8WiXopoAben",
  "key18": "4WTBwmSV1obGG9JRGWv2EKR5UCsCmcMVomQLPXPxS1HTMaFuN4SiuRW2hGXJK9LXJbQLZdnFcfcnMmaJA7HJ2E5q",
  "key19": "364WebMPZRvvbCJ5uuxV4Smky7egD4MQDPf1FdorgaWYnRu6petM8wg6fhceGgagfyffxpvN1yibP9J5S8Ydgp8C",
  "key20": "FAcuUSQyXFNiiPpwqtg7ojLZvvFwta1FK3HbGnnP5S5gFyvxCmPL7cktR9VyEWuUnG6q1ypQREZvgny5RDPqa6x",
  "key21": "3DpT743AGRPTX3ttBJZ5QWQKJkEP6MMXZdq2w951PtdeznfavjPbhC2FbK6hrDXdExX2vgedSQuFmsHuY7Sk1G5U",
  "key22": "2v53XbnMJcMgBJmMLzCcmdARsmtfqWnsG8UXtRURSp3H1iiKvW5mT5TiQAHsakamAuy8woJpQ6vper6Yqmqk3NGv",
  "key23": "5He6sHYN6urjctTpbPjXocnPmgyeXbhCLKoWpPPTiCR5s2zTSkYKdNQfo8jaU5DcB6Desf9gfg5gBVwpLBs8GBhg",
  "key24": "3ggsnUfZT7AhNVTpjF4Vp44FEe6mtwEpkhJd3EXbi82PtRWLYmtxJgc9CgqZQm8cQrzkAtH92xt9oSQviXjr3q3y",
  "key25": "2gpFthf2JiPKMGAY6MLtApY6VewccVfnKSBNzsSKtRobD1jUHUtHM8xF2nqtR6cUxkQuTfxAQMDXVZvT3PeTGfns",
  "key26": "4p99bJUzFZRd1hgZ2CmgVLeBfh9J4fm2gtXs6hdq5gTekp3sijTXLHzf58pZvFG4L4zyym4GnL8gcUsSFj4NwT6g",
  "key27": "4XNu7mHDYg7UeFAwookcZUMFGjPTsEX4wTuXY7mNP3nKg9ZpyCVjtdkUK6riQSJ5pfuCGmfuz4uC9fNNo1NwD4m6",
  "key28": "2mnJJBkVTcd6WBJwUsdN9QBjhgXMGPm1zmF2bvvshiPnjiZhwPzrGH6BbvBY1AQQgKqS2wefatYoAoFvg5HpBC9e",
  "key29": "4gthiHrE4wxP7rqRzUtbXWo5rpjTZ8GemvoVSxcx45FpogHa42jZp7yVJfegXcMLEFBAoNYz6mnRzGqBTVkSYmGp",
  "key30": "LENHD3dFEK1g5JRxeFhvGuqm29PzF4k1gTJ22cWNEYWjrAjLDXezTgMSt1FHtzLemHgXGjqr165UBPdCBEDWwxn",
  "key31": "Cog2gkmckfoEuK6S36nS7ArWh31F3343fm8bbqb77fR2PyrLb45bSQAcdJAEeM6FnqPckGbYKqJPyrt47E8DX11",
  "key32": "5ABiBswwJSmhs3Uu7vJwghRZoRjXr59YULrz9L4GkH3LWLBHkv1EyCcz8HV7hu7JymewbinjBEBC8HvJ6R9a6SpZ",
  "key33": "5V8TamcNeKzW2Tt67pQFGUyBLVd53hiVByLpeJpwtAYjpx7X5dXAuo7CwYDyLFr5QypwwSKHScvAJP8afAGmXmNZ",
  "key34": "5MUNoPpATH6eZEBtM2uMQb7VZrQdkie6nckaDmnYjMdA9xECDnzfi1bBivH8Rkn9WS4FMatdbY6QTxTrCQKNeUBC",
  "key35": "2J51gxqt3pnndcozMayZy7vb7VbRTTDJ5v5fB1YafB3MTcNCkuLoAhtCefsuL2V9qsDSybBHvmPeppjqcJexkHaQ",
  "key36": "14bjwxrKjFAyjfaVb1HynybVkedYayEgHQKv11zagzX4coBjzpNx6GnGJb3uHzEu45UHKFcJ1mbtbWXdhp7A2xM",
  "key37": "4FsDrcD6qWsyPKib7XFViCbasTvfc34xqeZgUB2wd42FChGzEJ8iCP1xVmz6wxR7J8WTHoEzVU1RFT17ocfjEvKz",
  "key38": "yR9LYjnLGQBRjkjTGKGHoULiTtTABLFXm9ffyomcvutxGVpcq2cTrj8T4WzBrpPeYagvwwjmNG3cj1twFuuDuh9"
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
