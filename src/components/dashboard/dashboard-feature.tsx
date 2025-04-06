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
    "22CiBQFr3cnh3rV9xKncdg2KyoXa9XRdH6DPtyaE9qEr8o4yfkum86vn7jFJWoNunSw5oWcgU9e3eXjLeM8upXLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vsVuowcKrmB1ag8GeXrGDsTf3BX6z2So8jpt1R8hYfK3XGpX2V4mcLcNkBuy9WhtxQFTbVsfVvBYnHULzWt1W4E",
  "key1": "438Rx3pGdACfHyjXfvFYKrLFDEFLsMHnpFY2WNA8zu4nGuT5Rz1RtySCaSsmdWDih3jDMLvpPVM4NhjSFQuWR3D6",
  "key2": "7WWCFig3ahkeNoerp9sb371HN41LKCMGFo3Yz9EHCLzgmnwYUEaJXeANkJnVR1FsEbajeJdrPX6DPocdWTwwQxd",
  "key3": "3D6mtWB9ecKAeQYc9sokQWh148UUZsBdDmdnmdivDgWUWcS9RSGg2C4rdkwsrCkKvfCnVbvDBJew74Wyj8tF2vSP",
  "key4": "3pjd1oZqpDtpd9ndaHsXkuhaoykFaJ2yZL9EYzwJDyzHedwHEM6ZLGJY4o2eLoSDSfYyjgykLbVsZM9kt8M7ZH4",
  "key5": "NQsxzLMiYTrBb9xAY5tEkVeFcw2Emiiq9w1Mr1sfp3dGuskcgTFjAaEdNWuU2MbLaZxeGLPypZjDZkntZSSqnvJ",
  "key6": "S9dGAi45G9HvmoxQGqabZJMZhJ5ibDU19tZR1t9ZDvnu5pJ8sLqoQSMqbb7wJuDDNFPmDNKaDWXWRXYD75oM5iF",
  "key7": "3qGkfrzFcMLdVErnfpsPq5obtHWYTJorAg1oy1Cy9ahqDp1zkWUTwGr7bQsnNkjgeYhEFYfSwBzFRndL77P744iu",
  "key8": "3qmgkKPYbNrQnUXdK4WTThQFF6bbsJ9xPVuiCrsDgpuJFx62t2KZgiyYriDMSjw7N8eu1LPNoy2B92LLHaNbqT1c",
  "key9": "4vuAkrQChmDidw2fovZY2EXukCQF7XwpwUm9qRYW3TZZXeCsYKfgFQKpLSkn3c3X8m1gNud2ijzzkWTbk1t1ng9J",
  "key10": "4pZbH1CvToe5rMugo9QFvpAouvZJ37Td7Vrp9BmnfKEuAC1K5N7uqqKs5LUn5FRGFaeTFUhhaVdSy7aTG4s9mDmS",
  "key11": "5vvYDQVZXF8V6fKvYpf67xYq4hF7j8sEjJUKdzvZwNFW6LamvREHAuiwAWifcwnp4aPe285JtSZEeAtmdYkUsBPZ",
  "key12": "5rfpyxoe2yR46pXRc7nW9aGtmaQYoQZ9qLxtGBbNzsJtLybArjYyAPfzTzM4Uuqxs7AyyFFBgTT5rvRzi1ubMAG4",
  "key13": "5Je5Wqbpx9k9UBxhTXkgZVRWq5uy3W6E5KGQSNzY4ZnxbHVioFakEjdvRyqGFj7sbKzuW9bB3TZAUrvVLhhC7Ncb",
  "key14": "2NoU4Y7SMsoKgCqy6WM4ALzwW4qW6fPqenqjMrud2GeQUiLcfnz8qwy9bdRkC7DfxNN9FRDoQZnXr1GyWYk98crP",
  "key15": "2ndDcKekJFjxnJLjyJMLe4guVjvcYmMkJEJWMQdYBFWphY2Tnb7EExLAWrCThweH57boP4kTgdKhTvwi4ARbe1XX",
  "key16": "3Y7AiUMAhJoqqUwuxzSjZUAuAT86Bv2YKrPMRitXtFBai9ZPcwxEJSAwqYFVa5rovJdthv3zsnR9R9jG8T1dQXnj",
  "key17": "62tq5cj5JWHHMPMvWQZQTeAqArpC2771yorBiJPiKrF5PwX8qGpQWHuR6jNMi9eq1XX8vszWNMuRy16VnEkjyZw7",
  "key18": "2NVy6QKi6hUSXcLvr3dFh7Be4abHzKMvyb7WacKLrzjJX8kSvo6tk4h4AY1o9QvWZbtYEZmDbCCujigx5HFtfrSv",
  "key19": "3CPSnfYV2ZA815ojoBY4pnhmSSS1e2oa7WzvW2BGLPJU2jx5GF89Tgkdi9uB5yDdmUxFMqtPvpJMzMCBLpsv9LAz",
  "key20": "1nXsNZ3LiNB37cuTH8hHfWqhucXkRR4bw1D9ojU7hV1kczTQ4zJBxR5f3JXWTuU4WSMMgw7tnt6HS3aBC8vy7Ay",
  "key21": "3dWLxq98XAabWYKjurBTxMzqzbc423Ng4rKgzitAQ8F4aFf6TKPZRW95dQeDuJGHme3davLCw4QCyRFazVUXpNDa",
  "key22": "4RXxkLzJrcGNNhjqmtwKuQDHpn5Hp6inTUg6QebY7TRZBcmWezMTpzq2DTC35HqdVQMZKwxf1eTmYVMFZ9gKjTGs",
  "key23": "3jLj3nx4zbKvnhkvvT2dT3Rxsk6qcFYYp5JnWzmuCWzYw9rpRkiRTQCGZLiQVhu6KHJCRmsZXPASmGNCVqm9TzSX",
  "key24": "2p1HCr2SMPJhG4tBkpzgebNesWef9W9pErCAJgKiuSLEHWjrjLPyDkQjpzjtsgqhev1NqqTTgjf93kWKZhtfJvYm",
  "key25": "4wweY37CGU5CFNzFmybtrk8B5s6Nf78Y8K1enxfbBAd8wmWzdHvQEdJYNwyVHchhTWKUn2QwMFhQxALZM4qa8fW8",
  "key26": "3xFBiHfHjQ7kPoRzU6Fb8CVBeevoPjKgDUJz3XDucL2vXrd1LrdzfkBWRq6V7gcS79A4jjD3QUxeFLFxLW16TgZv",
  "key27": "2kwLMJgyXbwKhBZrWCmXEyQmoQA7b23Z8Jhc8YMcgBvcLfxfq1tcvWQEnJgdjXe8fwctkVQjcYw32cTiDJBmn9YC",
  "key28": "4H6zhkVD1UYr46r8uYE3a46Kd7bXHV1KHXgGXgU2dBs3mMXDYdEpLpdDc6ZKA1S5bPDJ5gHfBDtTzbUMZMdpUpYd",
  "key29": "4HhMtUzZttTwjTuoRAMZt2MZJXLQkdEgU7exHk2VtMk7u6bZ3d4XgaQ4HTw4PXih5hLYY8AUEEHLGc3SbAwGP2eU",
  "key30": "3nJy7zssSqPXGU8bNQrg723E3VTaVbpvvf6PrPu4qoPJPE8W7yxdzKUJTaZFgFVgvnEy7Y2eDBSjUVsEpQex9rAH",
  "key31": "4yGW65KRb2CVMSDXPPtQmdNTxmKjFjvSgdEEherC5D1Xm7q667WUzRzQ8DX87tcaqwpjoGNSKR6mk2hKTfWQzsDN",
  "key32": "2kgT9Fpk7myKpnhFLn5kNx1eP6MRj6dM43rffCwyvHRU8ZY2VJzHfqaD1dz2RqkP2LTKAgQcS87CjJE1J8n3hKNP",
  "key33": "39fWPWMqjiGBQVNQobgqF7S95tDRbXP8B6ikF3e1GNCHiCERZtDuFzGxxLRjHvEG4T7g4t87LbbCHFLN9XU7xkHu",
  "key34": "5GZL3JkP7Wam6BrdYw6cqxrE3BrZZtVHuEB6BBEpLk8M5we8aNVERpRv7XqyNht1QqjA9h1YVE5rXzBUsJ6iePFY",
  "key35": "zGZ8tNiFa2TeH8kHgu8PQ8LHvxijp9sUovAmCKMRRoFLrXRm44wdR25DEYowUj4tyksyNdXiMdbT3Aoh94Yj9C1",
  "key36": "5wpFws2wrvao2Xpnw3vrJPwPoWKAHdoY4jW45Bd46K13nXK1gUaddjFcdtDGu4aGqSuTbQoTnwKZdWcBXcuqHVcp",
  "key37": "4ogV7Nq4fgG9gKB4XRwbdreN6qBCfZsuG9WrgzZYGAbhQ5VwE2SYKEpgCokzCHjgFHTsuyVVmkFDURbA8kLWbM2m",
  "key38": "3pVexMFH8fcSnUbkCJHMts6au5n9XHSQHP5YR159UMJgAopSWjfnKqExHnHMJ6dTzJKXmnW632zvtDeraRMajpkg",
  "key39": "384mn9sfftoGbZocLWEZ1XTeNTW3CzaSk1Qhd3oTjEPk37FJMUtCKJrrk5goXkLDLWrdnM53H5hpKET4yDZ3iLef",
  "key40": "63b5HXhRN3tZv33qFkx1maDnxy6F2PF1XToL6qzCz8LUB9Vfb3kN5CUzpa3cPTTPxuhVtghCCHQhs53FmiApWHDU",
  "key41": "bawFiF12ncPok6yhNjwLkJiitPrMb3Yo6rqHS2eaT9igrwTyy8aGbx3F7eE8yhSFag6gmotiZhMkaP1yKXrKC2j",
  "key42": "3JGS8quCuvZBh1zKaQDc9dDcZum8VExqQpjSp1wc4PeB5YzbnJufdUNB98Ay9jFCkpY2zGrN1XsbBLLzmS4H8jBq",
  "key43": "49akfue2a8xJ2NUzR93SR1CWQyECRh8ifRaTmwCC8zxPsx6R7xqfgXsEJQJZAgmwZcznQwhi4DWDN8nxFDAhCxUN",
  "key44": "rEsSHREeysLQ4iCob94d3pXDNKrQD89X4HfUsyfcXzobtU8cjfaE2DAWZtF9YtQ4WNWph4J4UAzQ3nb2LbzBLrJ",
  "key45": "9v2xBqyZ6u7DCWmECmXYviCNUFYnEDfcqVfGLazDLuGV8zd4HA5yGYtj8FzbARufunSRLqaruorCKEqVxrbP7yn",
  "key46": "S2NMHJaYyobmudaZKuhpjjgdGoeVciDVED1b12kvWxz2DjrhoXsRzinYiVZ1YL3HVnkKFYfrGv8sFRwVuBCntsR"
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
