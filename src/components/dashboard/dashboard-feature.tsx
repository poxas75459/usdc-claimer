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
    "HPXs7Djaron6sGcdNwP61qbsGyEUSKoVojSCFy6bKqWBwJiWMWmcE6KptaFN7FYvnuDsRRCEWZMu7c3zi53x7rS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QHG6yR4ZMG75aEKrLMM2Vaz73YYxocNGu2nKnFpL3vv43TgcuWJqFyvxFkDPj5S2reZcnHmvcAdrikWrak7y1F",
  "key1": "2JeqZKP5YDu9QUp9mrh5EBHZhc6VuWhf9Hbfo9aQ8ZPhTrw1K4TXv57V4Q3bDEJwxoLfnT3MBPprhzdjB5YfA5Mp",
  "key2": "5bsuBo58wMzBT7QDYF8dQ9N3efdfZbqzDPiQNwvDDMqvNVdRsqRkeWgxNBAR36eAiWq17gLnW2yW7A47Vd4LAQU4",
  "key3": "5e8dbGsNev9L6XMZjP8f7wkkrd7Y9GmmWFmPi962g3QekuhWNuUb6eVk6gDErbe8yfwenMbh3j4PuDDYYohTEhEy",
  "key4": "L2vgBNfPuNh9V25nyADY8nu2bhxs1Sm551UesjN97EibKacVCQLPHRZ6XCRcjHkvyte8YMXjEpf37aD86rHuvqS",
  "key5": "37NTm3JNjfLdk9Eo3VK339aK6qKuhpURZPBAG83pkV5m9uzVfhjjUVbsdostR66fbJ6xJt3Gze7xhxde3jmrP4kv",
  "key6": "3WfpFXpfKcQXxrJQCKyqZbnrz1rvvFcWwpgi9mymoCDnmTDXdANo2duhfMF2gVQCNhcwiDQdzbYZgCyEFeqDJyHC",
  "key7": "47QRRRkvdsExRXLqsYwXZQkcRLPJGXTCzgb2Pi6pHxP9UD53fX9Cb8z7drbqgHYSZCPyKKrgSDcsUY66mtoN6TXd",
  "key8": "T3fUQNyzwiJfeUWZH38Q2LTYsdbPwbVGSc9j8SzZXyPDJRCfCiNVXhjc9kEXBVYjiXKYHm4MA7WaYmxVnBTdu6u",
  "key9": "4PzsbDo2HKNyACX3Qcc7CweQtHWq2Dd4qc3xNvSCNgBqJ7HYFYBQDDTbRNp7eWxgee1w3abib9MtnRiNC9iFM81A",
  "key10": "3qj4YYLtdzS3xczYGBPH3k4t4KxRnzAhM3g9RMQCHsRNaFnBXHgrq15aVEJhtGJ6jgaTR4ENQB6Bf1SvoXBJQVzu",
  "key11": "4s8mTteeeeHnusti6WbAJwEKvhTbZrMpaBQmJQXiKXNJMuha9j6K9q4PwHJ2p3bPY16FbHkmiuYwvN7zxg2rAemV",
  "key12": "63SruiwVai51xcP8rHM5eFw71tsAtA2ebEKyFZKqtxVxwpGznAQiKRhtUQwAfJJHikqYPCVq1Y8N42s8zh7j5H5V",
  "key13": "5rPNNNyL9MqzyTUj7mjXXfwPrM2vaKz7M8JUbfeSuDqrwAja3dS1rnv6cuHGNGyamho64LuJRwpLzWHGPZpNrz8D",
  "key14": "4YPcnRVSRXruUNfZ2nKVQRon3q6JyfTuhW4MNRB9PuDMvfjKko9qsTHduo9QW7jgDe7un7x3gNiPSWbSkRvDr6EC",
  "key15": "4XWce3pKTj5SDoDDCsp2ifDoUrLYSjSCSYaRsffkY1bQQD8BSAELi8kX67KbHQbqy3QgguCj5GxGQgtMxBxTkP5L",
  "key16": "2HQPQNPUmnzkVuLgprcW4hCW5Fwx8MEiTwwo7vbVbMrr5UygkrE2MXhm78tJUt1SAjV9Rm3vkDEP9gCY2cBmdesf",
  "key17": "4Ndrhk9xvbWT1GPbHdD7GsaHb4BsNMUp57d1zAGLJvAmCejzPGEoUFyipNNLQWfMjACt4DXddMgFwpfpA1Ukxdda",
  "key18": "35KRULKau9xdg9gNCtxDzziayb61fD38uWiZvpTeFMkiPB2KcSojUXbHraZiuWQxp4us2aMoKarVJCxoZd2da8zT",
  "key19": "3pUf7KbxCnxsYS9vB3YdszA3mfdispu7af4MSFTwcccrtq6Ho3FjbFC8zvndpFhqfeA9gQTFGKXsQ9UyydtDCAwZ",
  "key20": "Gu8CtuBM2P3EsbLMHRwBz7he8JgureZxXgVHqcfevXGzLUDAHHWcdB2EF9XDQjUizk1YhwbfnNPwNMdorT8esmn",
  "key21": "5S6JATkuMaE4G9ywntinwRC4feZqa2dDcSCxKxLQBDtd2YUjCPzHma53b5Ek1HeuTeMP87d1GDc6Whd9kzDxTmzf",
  "key22": "4fJWMLxXJsGyuqybHhFPe8sddayEHTY8XMqmiocEXz1QiUASj9X4T4mCiMuWQAwXdpd7C5RbpJbrriAhj1F8sAh3",
  "key23": "5UXGXJNEPqHrxZo1i3aUJVAbBJUfnKku6R5TqZc6GFxDkeoL892kuvsWFSsH38VfBsJAC1VQUveMkk13NEcyiciH",
  "key24": "3UTn1eJeqbVK5jyazyNjqgUKuV4J4c8MbWLdRGPAnD3vpqc1vovxGn2KigetAc25AEBe48YNQ4x58uogA7oGebsU",
  "key25": "28P7ypWrGNjeUZpV2b8mKnVywrqsxtDs3CY5dKhtvypcQXDJkhfzx9UYN2PPEoLx484MvCLaEd8Z8v1zuis3CkQe",
  "key26": "4sJQsH3GME7aZJ9mdPJW7Ti4yT77WpCcPw8gTqcdtVPnyhxnDhybxvt8NZnfTFjdxhbwhDUKEBBUU1NDh2g7eNVC",
  "key27": "5YR6MDvkxi9NTqVBEGA4sqmcprL5Lb8c2hJRirvdMVyySmnNFgFkrTRMPtNN1bxCtqRmsLrWTe3pjZyK2Y9vVVAy",
  "key28": "2J7F2zrPwHgwPUuz315LZu6NAxkbJCkFi4kePSK1chC9tygwQAEZmZJHKnpnALSMM11a3GCdit85c74sKpUiAr1E",
  "key29": "37nCZjA1oC7Y68J6s2rDK4akNQmCc1wh4fCS9EoQUMKGDu7r84bFppxsrHVFjaCJcqoXatqDu8EfWZbWxkgD3WZV",
  "key30": "2a4QqXw1thFfvzDbZHkL5DAmey9SCWViLsveekcb3kr5mo86VXsPz66reEvJtopTbnD2rgqEUcAiCRhHxhUa1vX8",
  "key31": "3G3iXYZFsJUwsBdnaGUnu44AJEBzES9jMqW5FhMops6c7XBdkKxJPaa8Hp5fhGAnq8uou6gtByNbSwecNvDCSFfC",
  "key32": "2nBoX9idmdUtJ82PC5oQv42iJGn75Pr6TmnJtMEMwrrvZTnA3vpq87n2RddkU6E82DttoveaZAFWvyqo4syhmDDw",
  "key33": "4EJUWEL92TS7DsejJ4ZWCSYc9XHbcazvM9MxYyF9NB9cqZVnqomFGkpWToRFsaSMnRYFzKExjBcKFruwEyq8Pyuz",
  "key34": "5dohA8WLWNykHku5Q8MvwUcWnKv9EpfDgNvUKD8o47ihVZzZtps6SfMVZKvMawVbEJdxr9fPXqn8j4LPYKXxTC1M",
  "key35": "3MeFuhhrvD37kjTk4R4cWor4hN9MQFLnRMEUp3fu9Nex8LaNVGMQBaEPxKbfx4JMJnGomRRJUbQShbCTnzz8zpm9",
  "key36": "4b9pVbjkVTmyrEpW2BFFcfb51epiUAzP7o2un5JXSTY5TDfMdJAH8B5h1hM1goBmqKpSQK9SFVFpAj6BqBgf6mB4",
  "key37": "2U58GPhjABpagFfKBFA6SwdgSFPWY9Ufwad7qjQFE1gu5DBNSGH9aAVPXyYGkL5y8gKcensbJcdqb6fJLzVJxK4J",
  "key38": "26SLiz4bbVcPRP7iXsVzrg9ioTj76eyeT9mC94FC4PxDruXSexVzRtPUTbkURuWhvQfgQGCn7ywLn4qSSq62wdZW",
  "key39": "52VrmScY5QwJEAjZJSgEgMW1p3tqDmYLQgpin6PAcNMTMtYdCtbbT2V3JgeG5TixUzU6imJm8Cie9bKZ22wsb3XU",
  "key40": "3ALaizwRKJurRchP6KFXmJBcrkDYCyqanRVtC5yTLB4Eb3jjHhrQdFW68RE7Ac7ZFKs1gKre4Fj59FM3ED8BcQbM",
  "key41": "uGo2TbetkJCXv9nCKMS1vBNq3fESmj36bopX5NriYaSRR8j5M9ZkE9DB3CqiLZMWmf9t37akVR6dUpJbL8RhdiW",
  "key42": "arnftaBE4jBTvMqzgNCTWEUqSdUM5Q5ubJkQdK4uan4eRThCX12jFSYfyqovote22UCCAnMbBVwDB4BrKKhajhY",
  "key43": "3i6WvXc3cr7XP4xXPiSqzyry4iwsmAhBUircbvNtgPeaPtMD7WEZCPtu4RzNkbH4XxaEPjXHVRHxMGcR8kUPwYV9"
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
