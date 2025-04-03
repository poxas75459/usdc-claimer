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
    "249a7baijYUW72dQL3EQMXh7nVJE5RN8cQfcgFGpBTdkda78HEdjMF48R3qiGtBoM26y4FEDAWP6MCuyRLPPnLBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDJUDQvDbePJGemr2botK9dPTysbCpB8AYAQFfycokpnYJP4s548iqLatAqULRAB6uQx4Kbskkn2GmfcNdxV1pR",
  "key1": "4CsufGDRSxwtAz2beXBfgmGapkESPQsqSdPbzacEYWRwSYoFnNSKWPUVe6J7YKdK9Kd5vwkVUqXPwxzCJNVccEyV",
  "key2": "3DTXLZM1HK2p2idAhf7msJ1vNVa5WW2GnXtqRK3rAxCFi18Tx75MWwHSkK1DdJ6mk5hjzQVB6AtdJgcpUi2Cgp9L",
  "key3": "2tkwEFPckftrfdZEognrQTHc5yMfFzeaZEVCe7AYF78DnLMGNxENDrQMkrPhZooBnXDA7zmXmbNDVCavUosajcAn",
  "key4": "25hLrduobFeJ7SMRFhn5L5FRrhS9XCL9zvVtMS8LeRRNypa4yRVGm1P8VcDXUdakTEnjNATAMTLsNhTy52EqFqgh",
  "key5": "CwNDWPYkadoCuNPYG1ZxEAmpy1F7a1o63uNSyKLAf8mG7hoob7QCj6o5eGXmuwKhomaUeiti7LaoH3KGiFsaEy8",
  "key6": "4E6pRusBZNYVCS6PGJPWRh9nKrFBnf1u1ioj8sxeftvYWrkymurWtkmd42ZVajvVkKaNqtLdVWr4Wqs136DbZnsA",
  "key7": "5o5f5B8tp8KrzHpdY9DXEaSgMftyke7SSPZoginMKCqsT3vkuAYubqfVJcVQMAovuZa6avX7BxoKStTxCVshstyy",
  "key8": "4Jz2MeHoK6Zc1EvNXjE7oKeK2KANDHZyTq9xvurFbq5atfPnkN2Xbo5zs5USvN99cb5coidA7Et53fU75PKJjJbg",
  "key9": "NQuT1p1FqorLsg551HmB2CSYjVxL2AvWZh6Qni4R2X5xQ6Gubpa2ZAzatxfthJAxbVdY7yt1TNUngCvqE9JTnMz",
  "key10": "65get1osBX6WpKJTnpxGBv4jZZUz8m2cPu6vyq9ov6a7WTj9byBekFWMRpp6gotCY7sAAUZW8KoBjiskiKSR8RiA",
  "key11": "5swXoapscDLHwrghatrpk1NNPbGRByekRaYvPXiziwV7j6wHd9o3AtxSaSrTAwGM1hTVjs54zbf2esUqZGvy9YEH",
  "key12": "3dKkfcd27DQpHbTPQ9aoyN7CE7DFmZ5j81RovcFNwVCXngH7X7zG5dfsZkY6rPpSDqW78jXACoRMf7VAxELf1MwA",
  "key13": "2GURVWJbH6sxGKtPWRLJ2y7NAJRqcJsQRyBuqfCB58EmWi9yMuDGEifvAYKdEjjAkbNyDJsqCthD1yyBkpfZK5Ch",
  "key14": "4C1H7YCwjAiB6mU6emene1CK5VDudHg6P6ESFCFZsPRMrpEYcmMdNYfUB9EFJTEueeuFATm8YABsTeeFQgdvHf1r",
  "key15": "5eHwGoibzWEZW7N13RHHQn5kebuDCxvi9KMQyMerWcshaEkustoXfkJpkzYxBn3xHQVv32uSWSpVAcTKPWhX9NyA",
  "key16": "2hcBuPdUG8BjfHxsompYyzvDTAMRMBtnG4kejzKUvzZPLWc8AQfgG9XsB4A6XQTg2Cm6gQEAZHt8ar2gex2rspJQ",
  "key17": "64yytHE1FPj9S3XYR2D681rLEooHH3ejBzxWn4JGF7gxFkPo4RQhPSzr9JPSLreaZnWg8psDwRAUmhzaDV9GBWy2",
  "key18": "46qwz8Qxq1MVo8h4PoDFZCHmLzpo4VDbE9LXfBWc2tBYnSsx9XCdWDXi1MHcz1PpuChZW5R1SQYaknheBLiByyzb",
  "key19": "5QqET2qshyWN7i6iULZ6WHTRmUaGUWVZ2U4gofNbVeYhXPWn6TWcTNCCDaBKh4TMdutSpctTKGjeEJWGk8PiM9tC",
  "key20": "4mpgbqtiihkRG7of2d6TggXKCiGgGBzZdU5jA4579f6h91GJyV2f2kpiRX8fbsqsLhs8azkU9PDmVv1sYEmfVhE7",
  "key21": "4J6cMzzZLnGmfVeZv8FmBYdcm1UefuPFnarSj5E68Vve3tc4K5biVYkRs9JLRqv7EbbmLqnQ9g2RciP7uMYDXAa",
  "key22": "hJsMLvmDRQxLmbeLWKeervcEHiz1PpeXhtc5F5QuBrbXKq7yzQUfdzNftbY9bJHKemc7nCwtvGE7jF7cMznCcKC",
  "key23": "Z3eKAiP42z8912X7HmZaZfTa8jDuBnNsRGhB4A2Ab7XQfmG4grajPhhUesr8RY3g14iHeQDJmpfeo3KN9oM1f69",
  "key24": "2BkKWLzEDWZr8iLRx6zDSgJuhVebF7HNRpe6X79HG9S5bnbeiCkeJVcwgFnHJV2APC6BkzkdZvxkyCQY4kRPcGLL",
  "key25": "2KQpvVxFFcNZf2BjvTzgXFKsE8h92eKVuwVPrgGwXLkV1Fd6eqByvbHyWTJbMEPdU3zV1Fu84sr1hADxKdoojohh",
  "key26": "5y9bv133tHki6uSRxX6qCtr8GMiRxy93PEdjEfmpkbaVY3dBEHXWwmRTUqAoqEEQ3LBfiKdvWjUwHMRivPeLpg2Y",
  "key27": "52ERzCdqoGD4psmwyzVCwu3aeZv9ekD2owyuvY3tssZLuFR9VpmPjR4FqoudjL4QgQC26dnXNrHtMGiQ1cLVAtwr",
  "key28": "2SzRdaNcUMsnZvAE848S94Cpx5wwUSUz8kJkgCGHTAaw36AVQoVDxULgZ9fe4iUEsbhJbU3LBJqcgHEtNm9b6GS5",
  "key29": "ur2PuTQmCVhQsjrrrU8MAmMsJjeWhSig5r3eWpYu6DCcKXvvYnZrPEfNAtvRhJDMFLMUS15pZh4MjcCpRsC4iBM",
  "key30": "2NuXJw5xpoeg8fXxUK3PNRoUetM6XJc4qgZEwVRoLPBvT2WePZJZ5fHDtByV6HCeu5xQKcYd6KQZgKNiGFS4uk4K",
  "key31": "3hnnAQbJnzrjgsHGhP6iGB16wenwvxMMNF3HSvhhYsYfKXAvd13LDRhGJtHh1ctHi35YQ9HaaZq3EomnQ3saa25g",
  "key32": "55vzuEdUe9Q7jZDRB2ini1ooMvYME8DKxck4t5BqVLaxp5z4SKpVruDv18eGfzB9RwYak5vXxyWVTpibp6RXQqTK",
  "key33": "gVADCbdpfEnvEEQxDWreixoM1aDjr5iLdGwWFJZGW47RKdWymcTpN7iVrZstJ7bzKyHEKWhGV1YLWBB714e2Df8",
  "key34": "4vw7GK5HQQgAoMiSMkWAe9wYb6EdVRHXC6kgGHtVfC2PEnwL1soQpzMCLcAnDtbs2ChAWBM1Gr4MyUtzJyVREYsz",
  "key35": "5XtVrHnKUatbvtahGHagvLLrYCU233dmgp98MHocMnGbJPQNpYL5F1S3YjvywawJNZxaEYnhrPFggXEpXvuzbETr",
  "key36": "26Rg8QhRT2YQfyjJwebqTVN2KnJA4Y3xTvhUVahTVV1iCL624mARcNjM8LjFqCPFjqBLJ4kRqqc9wkxw8uJKy4Eo",
  "key37": "3QpscZ9vuXANodoxkfGwQCsb4Y1Zj4DUWDoPCjho8c9riu1mZSYPvk82fWxmpUFiVLEy2voFU4xgajYRTggq4Bo5",
  "key38": "5MB8aromcCLoHdyae676JPxFsf8kv9YhCAUGY281ffNQz3CSzCuACxrtAijJfAGnL5pd8eU4EmhakDPe44ziu6KT",
  "key39": "5U2asjDBruTG1H9oAL5Le66y4F3YuH86emmSXmqJoXVXVYpSSeGTqvy7avBmHbJh6qCeW2xDpSRu8YSPmjBxcRGa",
  "key40": "2DPrdeaF7rugGteJdDj2QXh6cQDciRbRvYA6mDqXao6Kxmsu2sz323MWsTQD8qsz6CRsCjAgs74r9HD7QeJ37FRr",
  "key41": "3gH8TAGKqsgP8dKd1xUzUNeKBWhKHsRgyRYz5pz5b7vA29VJrE9bEh4T9rUiYE4u4fVgjKjnmkAKGbMo5ZCYh8mv",
  "key42": "2ivsV88DqFJpBL2FcWLh1Q75ZEHaxNRTtRBGWMCPTaBx7nht8oMjCegn565VzSWi5cmtoQrgCVN13C1dNS1E1NK7",
  "key43": "2ihsMnwXp8mdz7pXUtwgh5TwR2PiuKPwEUXNS4WAwPNCms3tjcmB9dpWrggR7rnoHCDt3zYoWmaSxT8SMMGe57kF",
  "key44": "5CnMT7LDeZJzMZM4r9szNR2bUetbuoixckqeX7Ux6HmyXMXRDmJXZnU1R1ssHNxVQ58HxQ42Tk11znJ7KFZfk2tZ",
  "key45": "4wTeG2b2JmYDrkZmNqh2ESWkm6KVvsvpkoTsGrSJKos1rJmwq65ymXMZLfomWmh5i1Jx9bpimv56wCDDwir6Zw7U",
  "key46": "41c8ULvXgsWFq845k3e1iDN9C3Ww2E5E949MYybBSAkmgZ8tFCo8hpU6Z6n5Sfq4poqmdMDfqQHLx3XvzXYAkGmr",
  "key47": "64zGeuwqzbbkFHLb5GUSvL8WWxB9EdeYZbNh6nJWv29sN9MA6qytLUww5gEPSPHFDGQiACLMRXDhGqctB744aFzN"
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
