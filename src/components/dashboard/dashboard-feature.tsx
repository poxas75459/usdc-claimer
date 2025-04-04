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
    "VDt8ps5NDRMnLPahy6eysboJjoXfmBQDguB2qkV256Q8aa3728yCe4xmVFysoGkKyei9nUrRsipgnX7j3RKZ43q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vtdm4GxrYiUT5gvNLM3X8oWNWnmRATqyVEgHBn7TAc2pF6NzeKoXoSffUWgVQwpjepD2RJbzEk7EuzGg9G7jLzJ",
  "key1": "41ckwZXyc8Jy8JQwPE3aLXWqZ4qw4uitDJo6djpLHwQ3UeevydAPsJMvHNJj1LtmoKpJbTZPTZsUjiyQDYTuySj2",
  "key2": "PMVQ4mGbRcF2rZrWyKS44UGK1YgUtfHJvxUSnEkRJnRJyHxY5e8Qt5RZwriFSP4xrHHfvC2Q2XG998EjKEVMPCF",
  "key3": "4xcqifPqpezqR9hH3j9FBLGxgTDRVXALwXKiq5y9YusybjrCT2dH53nRDQbWWrHKPRiUQC8CcsLmUZ5Cc51MMbVr",
  "key4": "57Bk1CjN8r7gZzAiRS3xSxaUgVMJzZsN7hkYoAfJpByKL6dLUfMVi6AGvjz6FK8e3ihmRc1uB12C4UDTrDaQag4b",
  "key5": "4fBVkwWJZXivJqDaPV5oUSfqKLUo28JT51Pm4WYrVbRc41hwMxzcKxL7KGVVmrs4CnYbtm72ahZ5WFZQVmXq8HDm",
  "key6": "2qVo7DnruBBRZ43YiwVCREEfs5xNvfvcGt4tCPiUXCARLkZroXTB3SP57XLDLpqAHE2MXeHE3UUPYbH6VmMxZycJ",
  "key7": "56qegs4srR4BcagGbtAmhtpcAjLemeavtFQ8qTnXYJUa2ziUhF8oFFRe43kHyhMuXFRp9V52XjSdHRkjrgaxZbgj",
  "key8": "5eGM61H7iY3RUyRKCFui6EXi1i6zfePuXNfuvBnirg78cyNCzCKoxv5Da5npSZdsrALct6dbEQkvpS5mXw3K283q",
  "key9": "2geL5Rb7y87yeu3tYZjvojYTKunR1u8jZc6KYqbKNCYWAWn3QBWSReCCbwP3s9LvG3p9KHmZafBXPTJ5zbSxjw15",
  "key10": "3a5Ry7khtiMXYALPM42oaDoHcfjk5z4DrQN3Mhf8PNqUkUUZ126dFueNNFjSGJCq8yeXhbdAEmp4ViRqn9FJSVd1",
  "key11": "5578gZQSqbMngExKGGgyYqJfU9mWggzF6B6E15dJjgowfxx8axU8tN7vQx8gCPZHRfHDFDcufcq4Wg6NGVmgBAPp",
  "key12": "3w1PdQRYvEtJoMrJfqWYv89bzdvUpsxEbmyL19q5t9syCdri16w5YfKMGoFV5XHsgB7MCTxa58qqGxbcP9jMfDeG",
  "key13": "39sPRX3Yosko1h2upC7ZvXdgQ9TBf1ruD7rhDP6u5ZiPGi5NwgyNCi6Hao1f1TK8vsx9JSdQEJUS6s5JZiMxA8uN",
  "key14": "63uxWpWuqwwenR3KavUtm756bNkDspskT3oPExLZtqKr8VHRranCPFvZjJ42qAR82pweD8bzW6emHc4iak6VEABR",
  "key15": "PF2BHmYAJMvuMFDHyDJ5pSmtDoMvegd5TWcruURB5Kf3RT9BjpE4bz6yvmGPofGBkH3ezXUn33LJdE2EWGA5hQa",
  "key16": "g8i7Pe5rg2epQsWhHMCJjWoeGrvejJDqATgpAaZVKPBnMSnPBMYx17vjXjferAYDf4VGo6Fcrxn4z48cDvjWxyB",
  "key17": "3Wa9Rj7WNYWu9XCF1RymhpmDgnXqaYzwwjUPWn2ZyA6xMxmscZBwvVpAwk7VCAtbD8GCczJ9kUJ2VP4jvTsdA2hJ",
  "key18": "2ZdC1gK3veD6Rm6voP4Qkt2CrR9HDsJyt4TQbJJxrGSWEgYa2LA16rZWACWeL9YYcqK6rk2XKfqQt1FqhfH9JwYf",
  "key19": "4u2gyBHgVgFbhqEjYZfcCEEbYT9HquDeJSfTuGYaGmPCrrNqDmxycjTqV9tR8LutJJNQZKAyvLPa1A9fqk5dhYac",
  "key20": "5TPXZ52ZzfJN5HxxKn4YjYjtDgaMudfMqUPYaJyDCadhpLC5D6cAbT7xNAFpVikFd9728HzHaFN3RCdVxUTshBAt",
  "key21": "4YGEfnFKGoXLqaDeWsAHWPuqpHhjTmhthfvSYfdiyoAxSU5czJsMWCUcxeUG1UETr1tfy9fGDjyXAu82GMaYJZTs",
  "key22": "35wWciVmhnYcbu3xKr6YFey357uQ91mbRMrpsNGpyyFG5W7xBk3ym5ifz35FHp4z9jmf63rWddNtBGYeukCerK2a",
  "key23": "2Cdx762QnvgP5LJv8zLoLT22EB2kyX8UatAc7dNDuwQPK5mdPHaQ5SQMXcZZbqHtF598JhwiyesnPr5LGwjjQdAt",
  "key24": "stVGVejTQgajM7K38gWaDXbmBCjtbBbjDRS6KGwaSVrf5pTaG3MqDvHUxV6TLt7PdHoNpiALEmFqdUbKdb78t2Z",
  "key25": "3K51GhpeeFLBcgDoKZmbE6u7B5DoVrCmJxebbgRdKVkZ8qScsJSHz28obFFkRTgBt2ZwQBgmzNhjds2YmWkVMY82",
  "key26": "5cZYVPC9oN8h7jexU2JVaUAgTYVLHPf7inwbX6k6bMhNgHUPevWhpcwMDgibV3KxetmUn6Q3W2Aruufxk4gMdC8A",
  "key27": "c4D13RnQdJA5dA8jckpNUbyFHeDiAVj89qoAoHJT1HxXx3nBybu93Yhype2vPP8Jf3nYZLC8Bv2bHfhcvFce53a",
  "key28": "4UMf25vDxkwXugDUwG9LR1DtQ8ABb34WGppxND4GktkfoU1hsZnYBL1W998bVqESrNn29mdPHsKYCCcMpMxj1fEQ",
  "key29": "2WbTojt1bxuAGiy3LEPyWn86GGXc8jfmbzjjSK7PY8RbCdHTmmLgVzb1gkww4EXgfu7MKWULVyqFzir4Sb5sfSxH",
  "key30": "5zLUvPgYsbedbFBDz88ChudbP6yexoxup5qquc8gCJVWUEDk7Z2rx7vaXVQLxgi6VZrcY9RC47uHD2NfaXV8KVHt",
  "key31": "5gqDa6Xcef4BM2SShqjzbA4q9456ZV8FRX3XReZmiS4E9HPFa6GxbYAcFmsXCC9d4cqir6mKzKMXMNCcK2DteYSM",
  "key32": "4dSctmjYukkxvH16DvSE87ynpzu9BxFpVSyGTF9nFnyn6wxQFCBC1bsweWPwiAyGEVGiNrNtfTEjqZVRPkqdi6ie",
  "key33": "VPVUiW57Q8MX9vdEHUACRKVfo6mbK5Q33VHTxnLBvdaA4j3R5oZdXmqALPtAfCAL4P4dmbwTvsN7vi5ztWphBgV",
  "key34": "2HysTdqLTaEUDjBhALQTnm99JERCtCHLZDpN2tiwXdjSrvvyXbwEDiDwYaaJ4NbwPTRyjiRLgAxjVR3viPU2vXmg",
  "key35": "5vZSC3gxwTyJLdn9GuZGU26vwjyAdvGdU2tyWfF1CnKy7tKX8eNf14M9sp63zbAQi6KHU43om8Hjd4rZm4ydXn7i",
  "key36": "3HHtUBaeVbQsoaTkBZKc51XP8k5CTA3Sdd5b8n3BU6KuUkKw6BVkZmZh59goD3qmyZ3KZX8RdwufBrFrtscJETCb",
  "key37": "5VD9bVgf9ZRWLgJkBmoP8RGtxFWP9k8JgyYpayQUk6yob3zZGNK5usQVeoS9kiiZzVFjL5yiT6tcwfbTc14h2eaF",
  "key38": "2Rdo5EtEuw1wbERfDLonhMVAxCk2dhXnSTjjekSTJtoPpqWsdPjsFHxSHjRFq3k2webP6rnyowJSRPuBXmGYEZja",
  "key39": "4gMjpSPTzwQq973oUGaV3qvS8PdAe6WHC2d9ou9NhpwSGestQaWTq9tgKy1M9hy6ZLsVqks858wMsnCyY5EsjkM8",
  "key40": "5gaSyaSdL88TsbvxafJ2oFwwkXvdWWb7piYo3cp8LcktuCGHxrmZQLx1jAmpMwAoLVYrcXbtMFBsksyGZ1PhQV6M",
  "key41": "3JZeGyaGxCakCrkFvAC22fGipHYsvyJLsYpbNNh8YZSnv1AYXexdW5j1BPLMf5ufCofEFwaWFpcPo9idDig8WM9s",
  "key42": "3HLwamtvivnCH2JB3U3E4kqyhdE4uYyJaHwDtN1du9m7z8wFgMJBjXe5jS4YeXPSsSNb6iX9B9J5PS2cwfpgFwbf",
  "key43": "3bVBL1V6x9gBf4q8jXxJMU8UhqDHps6ps37q4zTgu9QqtSVP3xoXr7KNhBpSArBwj7ysqhRQ7Ritnc5uhUxan91y",
  "key44": "UCyW9KBuuUdtjj6opoR3sLoj1GncFAG3UZWp6iiB6At3cuZcWyD1Rvi4NgYd6zP66htu8ikpxJUHxdAZRnTrQkc"
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
