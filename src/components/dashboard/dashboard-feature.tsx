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
    "4FUevSE5ezvsiFGyvxTRJjptGjCiSL5ba853N8MBvcs5DEC5fH3nJg7hTMA6SBaFBDXbbdnLHD7hk5mu3TdG4RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gQHeWWom2z1MNKiz2FAEbfY5iK4Ubz8zg1LSXeHe1TumgBqNL5mKxompud1dyn63jXfryhch5eKnwYsjipsSjnb",
  "key1": "2wZh3pnvJsfK9ZEcWvn8wxp13AWjW5w6sKA375RiGLVEdA2gWzwwWcQfjESSdb8XckBmU4MRTjgPcW52LoAk1Dcp",
  "key2": "3tPezHVoK37q1wCre2nxbkuouF6QN6DNNq6NbdazjQT6pbxGsvJUbnDJdVozWfKVJBoqFYFVkEEJD2W3fE6TLRJj",
  "key3": "4ZEfHFbeoVhFzvCPi9Rps5diRE7QDrcoaSKekTfdJeuatb9k39VLhA41ZPfiVNxj5y2z8GvU7m6znEPSfUjBU797",
  "key4": "3Pix89Y74JdKqVc4fYbzmvNrW7MgBuHjsqwhFGHBnU29meVAsmxgQ1Sxd6wgFwpx7Xuc7c9ty8HtakDnEPjwqcT4",
  "key5": "5n7T5fhSSgQrU5eo16VntvwqLepPAhtqkjGxQdYpJG3SFJ1u7n8c7hA2LWRgjYB9L7Bj5TFwCWvV7f65eHpezY5V",
  "key6": "63KrYGJKnQwsvePyDVzcXNtzv8yZM5D1FwKvJc6ogqeEJCPS8BpBesYVDorveqRTHWYdE6BWqGuRyzs5FowpShau",
  "key7": "2VR1Pyi8HaQw4kpaB9p4QnLJEcaM6bva6oC6MByjHq49eZqNkq6Z7xFnZ6i9gfKxax6WPb6bK6tVxQteFkWGpLrk",
  "key8": "4w4PiLJ9tnPfDstLqUUrvnQUF8UuX7kzbMunvBMLJnh9gpHKuTMMdEdZqLbLgvCTVedCJaaV2fZxrHq4bhHW3Yk",
  "key9": "43zRWAgWsa3QyXfwW3ctcqoUrmaAmfZvPunMgLxfArWHufcYirxQqzdEBM3Zh74uEqk9QWoj2sGujPC9vsRP2bCu",
  "key10": "2tBEjUmnZ3wtPSMwAg3cLA34wmA4aKNYugToXuwW9GFnBWdLBJ6f1KB48GBpYMEqcXyssaSPbRHWT77S8peHXttN",
  "key11": "2jRMLH3gmSQmbiVQE2GZY6qvoSSXRqC1bALuhewh8gXJRFU6RHr8mWczDC6QCmrVizD3WRHgDm8Akx8pHEz2zncN",
  "key12": "V7pihkCmnjPdruwyNZSatHt2VtudDD2w6EJxEEn3XZz926HhykTWpf1WhWYQmtL6cECwEKMgLJ9FhdBYiUuiaDj",
  "key13": "J3ezk1vz4YnvZTgcHoz9ThBRf5KXaUbRRveoW5E14qstXkQ49pCeGBuonxdhD8HpBHZ2sgnnMRPYm8sQuDJWiFP",
  "key14": "5PXHEbmkiVEW73GUL9XrNxEQ7qVyZvcCckzb2zGPBpmCA5KHWX3uBFbbYMxAeUhFvsVDYV2Fiquzi7rrqscDcwzb",
  "key15": "5EsUoXDHN5Q7DMCHnNpp6iqUMUFi52zDJHaY3p6UY85WDLtoY5RV6QKeBAtzd2WBHRHUN5DwCuqpYqAdLis1YUGx",
  "key16": "QgMffJLNyREe4HbhCf3eVoMVgBFMxninNPBd7kb5wrpddjtTLQYe92M7TFLG4zRFriimYfpvfpRQi8V8mV269Pn",
  "key17": "5Jy8pzh14KuSN4rn5DagPudiUHsYSxgbACheHNgujpbHWSk5j1mWm2MkDo6exJsZ7wmdPRidT7qWt6ty4Jsnp28b",
  "key18": "53zCCAdkgrNqeb3Q4Z9xo3XVXquZVmrVoiVrk6k7AXTKYjnQ5odu7UFivfYqMXADHmjatik31rY6iAJLZEoJJ9QM",
  "key19": "3MLJ6wAEneEzRVRQSWH51MnAtoCSG9cadvxE9UgVz2TbcSCMmAysP3XnrGWGq8A1EF7rvCQxRs9EgQnTceREhCSX",
  "key20": "iAX45Ac3aAGHMtZAr281fK1j2QsUHpDA8y9g6JDTJtzwG5kb8RUgt9wtWxnTVLzWLxvGxexgKNPioyPeyxyx5Ew",
  "key21": "661U4kgdAUgw21vkXbhZGxTiiXwmcaFrKFWCt34Q2wW4kR3qLrtV3ZGwahLLPeXJmSuuwpUDcQ4wvF9u8PP5NBnk",
  "key22": "4umvfLdF47LhBRjkA7RomUs6nfmBEFgWbFtjThEC2m9oiHtcBhhSisd1RCU16vc94JLdTCFDKMPzVDbKecQY7Mh1",
  "key23": "3RymPkkDr4PfwAwa219zyU4oQfrhAkGtkdz1acAQcHwhS6DTgJNAivvefAqcNmXkkQohCRhNKSAZbyeoNHsiVCJa",
  "key24": "2LLJxywezVcCHYBPEQLbf8RwjRAzntQ3jV31keA9Wd4PUz6tu4HCSs7EbeoxamKFq7gbwN4d6d4AmrqnLkzGXgEg",
  "key25": "33ZPFMZCStgm6zBFwzPinMxAqz71mdLoAfHrHsuzuNFbo5Lb2NYwbStJYf8Qa87bd58yudarbruDAAq6UNjEikqu",
  "key26": "KaaPTihEqofJRrTFuxMUqrPARpVtQ1g9DmNY3QgZfK8gT2fyvxkyRc9KmcWt778aXd5UmkNzxr3Ki2uUmoaZdk1",
  "key27": "3WaMT3isZKUFN4w81cvqJ8ntBmViTJAMVm9j5MLMk2AgsixgqscEZbfCYERJDoU6yvVCAey4FywqFTFqu9g5oMQa",
  "key28": "u8vZuMDaTGsjZtpkMC1g4i2o2qhJCmUT63sqsZDg4Xgg84KcEvWXFF11kDVhkiHEFPxoJqiZtkPjtao1b6njGT3",
  "key29": "5zSeq94Hpsrxs72Ui8JhsHsZzzrG5Uf8ySbCk8JX9U8dXi8cgSfxWZ3gSSKeCo5488TftGD5Pjy7mGWAe8S6diWj",
  "key30": "4Sq28eRfAkJVqzwPNysmphDodkkSZ6fVmtaLZyKKvV94MrGCjpRwAWZAa6hL1Pj5VKpk8k7SrNPyFJR9d4UpxZC1",
  "key31": "GskNCLmQBMGWEd8FDBRKhe9rnTQBRjgJ756L7xYWH81VQCtGc9zzd9ywLdKGyUouh1isZt1i1NsM8SzBh1Jjui4",
  "key32": "4F7cVkPWt8GJ2bHxYimVXK64qxnK81PQjZcWP6AEp6v9QCMKiWEBGYLMPZddqrfvHx4Neg8hzYHkPHVJ8gaYf9AE",
  "key33": "3xSZCazTBDjfiGUEq492pqPpwxcmSneSTXX5hp9s79N3WZa19ZCw8mj9eXQnMgK7HzX49LajGjqhSDvvPQWE4F4e",
  "key34": "LAf4TuwW8qpw2DPgnNa1CCLk7ijkMDz3f399ia2CBiPUmw32RKT4GJs7UTFt3346HdAgn5p6PjV5Pym7diErTgP",
  "key35": "5SSGTXNoe2YM4YiuS7xDGyRfJaS6qg9qtZ6DwZ2ySe8kpDeGr9Un2UYozji9TwDaQumj4L2qa6Be8FgP5tYWV1b9",
  "key36": "SMgQRHkpyShGhh5EVCE5RUTDktDjHz5rMZndtnbP9BkeoGJ91zur5dEoAHCCpyGP1RAaLPpKMGncWaBfRm2FtAL",
  "key37": "3e8F4JGjPtWN74NtbL9EfbCzwosvL18B9jQc3hYgs8ZMXn4dghfRnvbapnEDURNisCM6iEDkBbFD2f7J3TgiSCt4",
  "key38": "DYoq8ACMZdbXLNMeump4uVKbpt5fCFfu232TCnQ5TAUJukzD7fcsKjLmhhPNmdLr5TGUihHMiAwEEKXn9XnGusB",
  "key39": "n93sb2NX5j94KYSoL27wMNVVLGNFsL82Nbq5G67jWTFsoBuLNubwYsWmUX7q9Y5yiqE89LNVhUM8YbJNDNpYkow",
  "key40": "3TaCdrmJSDCSt57NdbeuDkwbgKzihcKQL2FtLT17rpm1KrFD3ak95YJUNEepeGyJRPpTsKDCvEsXcjnYSmPkSMLh",
  "key41": "5F7ZCXNjAm8tkY5HqWfeYvDVpNe7bwzibTQRffk9ExkEzK8EGSsLMjicxd1k6GB1y95KUKb3XQYx3mUwLU4c4yX8",
  "key42": "2AunpzUD5mdH2adaVZhHfBuJBYukY58mXNAG28gDYsRJWyJLd2xZCjyr6e2tqrQUDhymMdpfZ7RURdPS7d2irGqk",
  "key43": "4yFqvTtt8NSecpaD8q1GRoy9LW23HNDVuW23QP2u57vfUfEssj3Mh6EGPU5Tn2KMdcuvrGjVKRS3tWC5YVXDactA",
  "key44": "4Xogqj5cftMzmTefXNAZPBSYzkgeLod82JVvJehY8gnSrQuKM1j7bxXxGemuhKirvuLjXA6o26Z6fNa5GoDuWWwu"
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
