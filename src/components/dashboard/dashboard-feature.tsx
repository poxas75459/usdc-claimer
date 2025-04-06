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
    "39P5YVJyQ4wpa6bpHjXPrfM6YfSqTPJArRpTEptnAPudtwJWcbak3u2kyEb7M56TigrxG6S68syH6T5XuGzvocGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geSBmgu7wTYWxZc3ZkUKcqawfJFZrjBAiUcD8VuQkp4S8bVpXpjGKfqrp3uX5q18dKp1nDRqyhEKFP8Yk68fKkA",
  "key1": "2LvhqisMSGiZtWJPj7JseyVC15hCVgJY4P4g1MxSkxbfsdDjPVRPyCU2YNxChdAFpqBj1USUuUyUeTE5mDNU9sJo",
  "key2": "2M6Mq6DxvnDiQbhvSLFmjsTgFc9RMAe8bdnedzxonZgisKZ92P1QnMHWrTPrrVGr7gSriVCZemkjcNmrqREVAhpN",
  "key3": "35vUUBYaGmuvBCidXyJtSWzrrUpjk5yLNgdQCvsvLWtsS6tZEckZ1Jasg5tE7PxEsajgyhrnaj4hwDkFb53rj6U2",
  "key4": "23T52wD2AKnshwhVwyeXVC4BFpjp3DLyYcFXjUotB2TVxrzc3jwr68rTypX8Rc7x4KgpSUYWUfgnQhj3EGVcypbg",
  "key5": "3xYRdYkdeSNEKNymRHxpk4JeCNChygQ9B2zzgYNQSVocFKTPV6SAGc1ofJJzSdzvAPitNkej36Sg6sYT6uZqrrEC",
  "key6": "aVyMak2k4SVV99Mxf9NCjkHXiGvSMNqZgmWF9pYQNDUy9VHn9ydUxbAsiNJtrZStYsYvYUacGYDp63JHL2tNptX",
  "key7": "5fFmLGjzjxVzWvtukzRiiYm1Xy61thpuALWukgfhYHsCW9wppqstBZhbommPP7h8ogkbDQ2S7rcRaEB2XQToeSFZ",
  "key8": "3t5tYf31eTXdbPqL4QU5pCzy3j6AW3WyxiVi82GwbFr8v52Mu8Dsecs5BgpgN9LfVECeLyRmhenfwuteG47F8fPp",
  "key9": "2k63ucYDfbMm4cyiqp8qcezJY93ShAJrTVXVovT1dMqBhfufGpJMMpaM4wMrSxB1Mi4bw7tiLrdZLpL4JeRw5FiZ",
  "key10": "2ypNCRDX8mQX7Wao4AAhJtyEptGdX1Fikyeff8EFyvAr1ibrWKYMEC28Vp2n3S7vU8sNzhXvwdSaEFApj8hevQqn",
  "key11": "3HBy9FPTASvBQDYVkqhBhh2BZ6aNEmt51FdY3WfZGhq5iQM94hjBhbPgLN5qrzAqBQqQzn1sSWKZsj9RJUR7G4wS",
  "key12": "3nCTAVSkeyMMVLJtCiEeADG5o9K95Cm1uke8j9SHJqAdUybbeHDehJre4cM1ntHF4JwGyYkReEgQAkbTfTU6k7X8",
  "key13": "21a76ih1WYrb1u5WB3cxRPnZqrZwf89Hj2F6txEtxfNLdpzyRu5QUQfcDNz4Ch9medV7HZJuD9fNEhZj2b6k4A96",
  "key14": "5enMngun3a3vyc1333LKeBPKq7zNPc6KWQxTE75Tkstt8HUfUqry2CsdJtB7rYev8XisMqQmCgsgsgoV3LFcLu3f",
  "key15": "2YbJQcSro8TEaYKGrFjwvURzJ9PDUe6QEq3MPHVgLawcehT4h5PwSsWpKMsLQQA5XJe3ZfEBYtKxvBxuHX4HJNte",
  "key16": "2RrirVLW96AuQc1aguMDMiLeRTNg8XG1zCXiM9i6CRVHWqrKw5zcjQVDF44rJ55HKv4idLNmUfuFAxpXYb32MLgc",
  "key17": "3VNG5NMxHbq85ymWaV5q5phbY3LTi6DrQRtyJLZwJtHT8Peth4gmYRgJmyWxM4zSwWjbURV5vuKoRk2bUGxEuFnW",
  "key18": "3psjcePCgv7dtVQbPYZpggpw3LUuWULq21gW9oUWS6J3aPHNoUiJJWoMdqNMV8nExfBEdqmNQ1STaD5HsEw9zzee",
  "key19": "9RwC2N6vo3oS1owtE4RNzkhRq7ah2yTXSw5kgWerzQFcE8mUaG7NVCZM93ATmrGzRURccyYeMcbiuxJUKrDRHbY",
  "key20": "4PpxDNm4BsXKhL1HZPK3HC4BTVnuQ7tsEuEJrhBznCkrmAmbBAhtfad9CnhizbSkGn3CF5RP9BjvtP2rVDZcYaem",
  "key21": "4Vk7DPAaGTxmQ2N3sozRrewAX5NREtakSsgS4ufQkdLW9vNoxxejpq9qS1mtiGQyFChfEJfLCH1wp1sMBrUZZwog",
  "key22": "4Fg5auDsG3a6S5bcxpupUXUuUG3HkKpTCwE2aJkD55G1ibkzW2Ryk57x4HMps8jmavS7rRthmEMSQPHSy8KgWjmd",
  "key23": "oeQA3SyotcWAQTbK5ggtjCk6yeq2G7K3MbVUHS4k52DZob8oaeetoeRCifqLQnfzd1baZh6U8e4d79MUxv5KawK",
  "key24": "2Xe4NyveXKgRR5pTKk842n8wJQAnvxLeaoMcrkcVu9ePLm3iUuofwJS4Lna1qNYepS83LzVFSmZasqqPqjhEyC1T",
  "key25": "t2Fuc9QpFoHJrGpX6TCf9QfR2JDnwjvZX4hkWCJ1Y472KWwR4HCJSUdCZbkSkBKVndCA3DxNRZvhpbmAzjiCrvi",
  "key26": "2VRj2xsntHgM5vX67PAYjoQoCYBDrVqrSy6whdnhDFBFYmBUryVsjzbCvcLLhyAU34K88dAwodzBr89u9zgehXqt",
  "key27": "3GvcMq58RBmLFNF4suUPCFckAyNWiMzivZf8SxriHeks8DwtVqhXwSpPn8xpAwj9NWKh1jjnMv6ApiahYnK7zw2W",
  "key28": "34A8A5JVuwD9HaHKvebFrEJNm5FTDp98RnWfQAC19XvKRxaLggjotjTryL7w9EhudMhJcB2kUoy2Aig5JQkAoJtS",
  "key29": "2dWJ3k56xkiwwTd5bbSMFU6KjLt7pQ6vyVSVLVKrVATkeSXDCQpfeipmPC1WpdvAJf776aYBbhWfkM2juV9JV9XA",
  "key30": "3Tn7YJrKsbjG3qnA5sGiHMwdJdm8NQbMEckQaMVF2GyHe3Q68t5r3py1BwWZaxf1LgPjWceHR6fmzwVjTfWgZmyv",
  "key31": "2QjNHz42jZVK3Qp7gApuh7R2BZZhwzjvbfLQuV2myWLE5A25hdXjs8nFR4W9skKnDsXQnnnn5a8HxeAixxDUmcVx",
  "key32": "5hzpMATEbF2sr2Ws5tj87WikfjdNZ7K5JeDjGjzYjQCDWA7DMx6LWE55TJVNixhkYyKMsFXeE61NheFSFbMvBSKG",
  "key33": "5A5voBJ4hXMs3T2ZZqRJjV8hbM5xGhT9gt2GL3pMuNFiUc2JxxR6EZmEcvbmkxx5m6Qn11GNfwZkANcBkfTwixoY",
  "key34": "3vosLHDB1YCjoy6xvTVpvZvMn5ZeoGTENzPrLFkLQXYc9gNBkyKQ5VBZc3pYWi1EhGmjwP4wGp4PeF9uwo6vHmj2",
  "key35": "2QKAqCG6xeptqJy5SCrUjxT24vxZrqqN6sWnR6uSy7LE3SmYAkzyHQFKzmqA3AXL8z2nuVbM111KgTNXLQZc1rgs",
  "key36": "35e6Pz9HWmFYC253vqiwuogniYXXBvWLH6vGhDcaKoGED58WAc8pNVvmU6iKbELmpte3N2QAYoMUK496teYQcnQd",
  "key37": "5UUHfAyW4s6N3bVMqyBebQ6i7qdDdgeL4NCPQEqC8PtLozETkqvQPqEKUSngaPfXhvVd99MM3yhCUCRgwgGGDggk",
  "key38": "3Y5gcThjX2wpvkSxtFQiWrHhdGHNw1w632RYjEbuJ77kzjGQRAjcjzbce1GAM8ix9XUVV2URChAK1aQwgM1mUMGi",
  "key39": "43DnkwhSvXK93XeftFysdPhnLK26ks2HNN5fPb7ftfmQ3rxfEJPj9erFxFjjTMBsfj4WE2YXisBpEeu4VsdRyN44",
  "key40": "3XjWSDukCZx6kSRKPghcK8aDj1dhDMxFvrqSX485dwNXSy5cmeV2a8sV1TkAMbfbQzve6YR2PDMXrPT9S6Dy9gx7",
  "key41": "3goSm2WUwZiFdAGv4P4fuH78fRvhiEje3xnSaFmahTJaMkwEifAzGfn8W1rf1sJJJp7DrZ15ShCBM77MxVsGHvQ8",
  "key42": "42PuPQ6xkBWyLhWuTsa4YkvfKjXXwaS22kPa6ymSvqa3i5Gquo359CpGUcKXtW4GLt7c7fEJHrcUEG5ws7Cu5tvG",
  "key43": "sNymumTZeMqzzJaW8xzQcDSMGc6o5i1yZYVsxs8LehTEFfTE9JkFnfhEh4jTgN7C9zB39ra23G3GdNZQdHnnw12",
  "key44": "5Z7LNjVH9sym5CGeKwJmUhn3LgUB9fV5ShCAAgX71kLZ3wGjAYKuX92V2ErByaYDyCo3bAM5a1A4Hwez2R99BavB",
  "key45": "3tamHEyWLWZrFCReMdd685tpsSiQSE7x4892hY5TKhYB2th1MsMEifHR1XjDLT1m7a5bXbvdcdAT7uG8c6Yg4dpj",
  "key46": "2GYB4a7xPav1u4LY85npJmoc5XQ4fYmbxEUHT2nWx7iMcWMjXv3v8Y9m58rHZBv1B4mXPjC2E7esBisejjKXVr3e",
  "key47": "3rCiWfdEhCMzZRgdVHM6FsxSzyV8RuTFoRXwnHk3Q6eufScfCzCkrT7XWhpX6AethKrwSwL9jeSEw5L6ChWUm8Nr",
  "key48": "2QQ6VeXuXkH31L8SG2caYrfCKWkUGu8QdgqSA2iUXs1hqz23DWP9rxErQ3G4a3YYpQFpUSqREotESraCeYgW1M1M",
  "key49": "2vDiQA1zKq3FbxST8nosw56QuvjFuaqUVwRnW9nLibxfwqphSyZFT3yPsGQFYkCcfUr5zYLdHiA6DJszFKUWMVFj"
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
