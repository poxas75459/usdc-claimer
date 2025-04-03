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
    "2jpsKy69wKSUY7rhqMksFVnP8DE6SQywjTtSVe4m19MQgai6ktW6NEeQca2NkwuH8RY6zvHR45kGAfKb3rMP48i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dqwLFxKRvmR7Juo54ySWhLMUAjQDeDf3cSDSPmUxTaVYYxtd6HY8G2ESuDkUPFm1EMxkv7qonTU8DiBkvYKjipe",
  "key1": "466sb7yEFFc6w3RV22aGyG94B2sPNo8RMQUqnHeYEDf8abXhbMaMSnE3BjbqzAjm2Avu7JpsUfpZyKG2fZ3htXuW",
  "key2": "3RPVM4tm3FVaBXeDjk5RJKWRdbMCBtotGQu2fsA6W1wWyTFeBRShFHZQjbH4Uq6KC2p1zgBbWGeeyuceuxVW2RcG",
  "key3": "4uqrgdc73rEsJ3RyD1SqaKpxY1HUr88CqFk19aKhooWLiQh1a8G6X7HJzPkMnxQNwRdZXbzTnoobXmrPczsQTtgR",
  "key4": "4P2W2G8dnJgQt83VhA1u6YrAVgEDaxAi2SS5c1bRtF6YnamYdVdT8DZwWLJ63fWGu2PQA5T3tBdkG4SJfrp348DM",
  "key5": "5q2epeupuX1AevycmHFJekusBNcDCtmxbuHMyKTqqeumf8tji1LLuLqh6TKVWqr1Y2dVm7U4DW3AgDbATX7yxruj",
  "key6": "5hVCmedcy13aMx9Yy2nxwqUEeGHhiPqir2wLJaQJihVGP2c3kC8Ramp4cv1WjgBunLFPpChJVoaUDtPgD72uKhnL",
  "key7": "3dyxunHiuLFvvDKcMj2j8pkqrGWAF8Cbz43zarNBJyaZoL3Qa7g8E51DVmLvLEaSHUPTdc6GeY4AcFGkEz42Th45",
  "key8": "5xMHkVgB46vu7wqncBJD1zgP8ffUVP2a48sCqHgDusiddMjF3sem5qEQEgXWYa9REUZh8Ba3YfRM4GzVgrw9X6Up",
  "key9": "iw39UAk4tC6r4PeggikAG8RdpayVPoLgvxC2yJPPyRvq3eSeP4guCjaJX2soV5fzuZiXTC5x3mKTWtrip8spCmR",
  "key10": "5CK7CCE2DzEkBwmE7LuLYWSwrrQFPCg4WerGRkQskEzCW3BAcaDXL82SgQFoTPAsTLuLjVeFtRLZLvuPncaKyuoC",
  "key11": "2bhwiNE6av9qJXQzVdDDZSp5CLfynf9CfkqScdLq6CrgN4gsscCrGAB4DUZp8UcSGxAEe3AT2oHBrT8Y3xzsRc3M",
  "key12": "3k78rxQJPD7nioE1oDkA3DfnaqJF6WntrJmKxK8dHvr4eoqSUfreK3VSB2y2y1Y6Snya9rbqu5H7zk7beEaKnxSh",
  "key13": "5vTdrTg2hDJ4MmuRCnccnNMvYejGJYPAQL4q6NGJMccNyaB2oLHfu6d2V7ncmj4CtYnQMf9tVTYj8vCujDQQD1ER",
  "key14": "23cGzX3HESHPA4m1xzu3vEmajBHXpqHZnNZZ4TLRM9o6iD9VTLji3C4PiqRejediEijH1U1p5c3n64MuLfVDP7gj",
  "key15": "2snNBr3KmgRCAGrPTPNfDxzJLBF4T657tRCDSXa1WhBXKebRZxsG8susevzGSSErpZzwt4L9Wo7q8o9ErfwhEsUB",
  "key16": "BM8GbTVUqGYRuAxFGAmd2Gw98RFyXrkRGZtPAEXdyh287bUBKFgUZaQQsAn674qnrrkwrSUzpwxWLSYbnEs7uuV",
  "key17": "2jLFrmvEd4Ad9w1Q5QR86w85oig6fkJ3uBeshgEruoLEEC2WtFFrXbs95ZLzoEjeZdFekPfBA39cpo3FKD6wLssG",
  "key18": "5FrA97gKDRymcaiUd3qfVEd98h32vJuouk6ax8SoRM64vzwHL6NmG6WfvJ4hFaedrsdRdQBoRfaouehhPtPzRjuu",
  "key19": "3QnXZsXLnRJRFdDUBY8TzG5nUn97kuCXVParRoCyGwpFLSi6i9gVSW84yB9PFfphZKeAg4sDKTCAY9Y4949TjgS",
  "key20": "29LWevs4VVRDdK9CL48s9LYo18CYiKwCE8m9wCewYLzJBSRNzRudtLqg4jZipJ2eUgBUPK5zQbsct4yugjpkPDyR",
  "key21": "2N6krHSRtme5rDFvNEgnfLYt1Kaxaz4AePdHxpPDXGEZq64dPApJu3TYBANydguqcpofeC2zdx9eK98vd2Uyw9DA",
  "key22": "2FyWoJwphnnS4q1BTybPcvR65MKYhRP1bQtSzpMGKxLM9DJ6TWCZUu7Wqy4w1EQv5KYxPPCR4bq6BhPxZD1stZYd",
  "key23": "SHgvC3Jwpp2A6Njt6ZyqCxbAVZBxq2YukpZidQwNyF2PrRHt2UFHbjL3pyYLMuJFy6jcHyi1nrN9f1YbWFQ4sUq",
  "key24": "36X8CxzjEHNzRKddpKYzv5XSPAWJcSA3wxe5mqMJSA9hL11FdAn3YZhsSrssguZmb8o2vyLqN7ZmzRv6PNRHL1TH",
  "key25": "59k147ujV1Yoji6eH4jHfjeNzgDwZyDZVaY4PpFaG2bCPZ5UvhubkjGrEd5evUxdYQjNxPgfDDqjgyUATzt8MLaJ",
  "key26": "5bfCqErsdDt21Z7f2aTs7XFTE3mxhXjFqvWDfF4JdbG464v3ets3GeHKCXjDHCNHUv9hZxHNnGaU3mu2eFDnCT1x",
  "key27": "4AoQMTzqqGKU3sYjjaHybZbiME1vqXBYTEHhaM1dWkqxQxCvJbnBBy7sArc3uHRxTfGnxA9h5Ydf1KtvHskmmmgg",
  "key28": "38fyfATdvCYe11VCJmmgjKxcPrf6R9Zzsd199kbTVAaa8SH6Cidpjs2WejAqDEja4bgjVVGHNnwVXTV6i6hyU6EY",
  "key29": "QejQBC1NBLUHryySY4HP9R8Lsekwm1xsxwHNikdhuFRkYX5JDZ7aGb6AmsFAj1khHidN7Q1JVe9ddjNC56qaRDi",
  "key30": "5ob3uBqZQy2F9B2P4v9ngn82AvbiamYZ5dBEPNyxTZSruJSdhrRaQknn4X4dZCM5UD4y6MTJQBG6muMeC915k767",
  "key31": "34k3htGCLQGNHPRuGAWYSPTFoMWFnDyoTjSAeCuDB1deBdxLPX1YfC7EXcQk473yx6v1Fkz7ADaJUXdQDtBDwAuJ",
  "key32": "3xLQ9n93LQ8rgQaf9J3gF5r1ukH27WGtHTxzH6ouuV9jJgmLpRWVcywhC3P2KTSJJCagXTaoXEMayaiAjdiP6qfW",
  "key33": "5YpjV8SUGqe56xXo9GrZydXbbRY2hXkru4jJrWD1evagnxaqQctDWv1PhUyeEm9wLfWTEwpm6fM4qyDstLJ4B3He",
  "key34": "azEStdg9c56hG67nVi7bNft6K88cmoP3Z2mzGmumts2iVZ53WmnuyNzkMPT8HRXrqpgLcuEU3TttegQeRrXxQLw",
  "key35": "2y6rrcSXEf8s7sweYf6hdSNzZLKHRroZEk92VsgsY7aEv5SBu61dM7t7tv16uXKvCxrNYJs9Ztt2YSdBTyirEgFh",
  "key36": "WThEUiz4Bsg9x6KsAaunemTukAxFCYMU4fvPa3NTSz4T5rK1MvudbnfVcoAaCjnodapho1z4bSmMxid5UvTtxDT",
  "key37": "3zqEV7njq8cbfCwsnWMUhNqScpsDQpAoPDfFbyMa19n3bKVWWW8rKEF7PixHLPrXSawi5wCvKHZrJWqDiG5W6Hm5"
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
