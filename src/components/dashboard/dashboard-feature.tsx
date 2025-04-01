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
    "5QBCd5kikEev99HcX3BBwMxkZ2NuE3MuDZgWMuQ7i8nP3QcbGDJRiAD87p2jRxpu2TdyBZ2hR3oCQ1n6FAi15CUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8xZVGzQdmSwwYBnhCzTetTg8jFd2HSS6ff1dsdMHd3wxss3uCehvydwVbkRMqhnx53FfuiCYxR11iRUvmucmS9",
  "key1": "62Z5foVp8Azjf2eR7BAU9xgQr5D41SKZo5K7i2Vj2ep5UDioZPpVGaMyEwEjzgKeN6EvBp4SxAXFNUJwDjd68Pew",
  "key2": "4w1ZUnQjnRTm2HCNiLEFmK6kscLzULMbb9Xfy2rM5Awi1JDyCLjwW2zwrwhaKwDqv9hJJjiUg1JsUiEbzL553DeG",
  "key3": "NkRjfiHngUJ5oKcrVFprWVSM1E7tNPgP2iYi1jqsE3gGLq1oFMsWnpgM4BSEsmBzJub8sSMJ2LiHWkQLQbG7RXw",
  "key4": "4TVE1LzY7H5AM6CnSUH68AjcfwV86uJr1kTHavvrSe2dyJpmHiSLCnXnij9ZiNC52jDAtM9qNs6zkYuN2PpPRtef",
  "key5": "5uZRu66GB8g5RFTwgch6LJtBx4C6pRU9uJj5LeMrdzZrVs2HsDNhX69SMxmKffZE5trA5DrAt8xA58xFGZWinzye",
  "key6": "3LN2JCCpATW2Rp6HZcQwkkLvef3nZKF3tUkFVeG6g57y5o9egqvHuw8SZEJ94FV4jWqJ9oayjrWkJuEULxn2E4U5",
  "key7": "W1PtjVbbNWNpneyLzGRiDqcJDwmrEqse6N5gudo7uCXJYq9x1PndAoZHq6ME9rr5sW9JsrkHayiAPX9R5tHA9re",
  "key8": "SnNxaE9t68vtrtezJc3cVhfBdg3YdvhkdtkXkeaFkXhZdCovNiywea32tLSuZkiCrQPDnTDLoPqResE8H2ePVP3",
  "key9": "46CSoB6m9i2TriEyq1DVAJHUm3oYL87Zr7GGyKipW9Gao6wkyL6Mpe2GwQTgnj6tNpZNm5cKpqSFaSL59Z9R89vW",
  "key10": "3UyyVx9Ykh8HFPU3z1jXVo9FNihwEXvyeZjnxVSVCsrqA7Dg52xi34QzJKHFbsBR6gG7tLavrRGCDtQCNEX3UR5a",
  "key11": "Ch16agQWcVJCdDFCapoySAzzqWGVYjzrKYjjhzxNbj4oQvFbNxS3Mryvg8fMLTjFh6VNTsRNQvdfpFPWZZemvu4",
  "key12": "jWzXswDnAcizWsSnSkEGuGTyjEis3C2d61DQHAacstddgAmZUNpcSQwHRnaAjRNkMW5T47fj5YaKtEs4faTogFN",
  "key13": "64FftMqfdosk6i6w7avQ2TD686MCh9BYQRuvtPFiJ6KNU85t3CauFu2NJBVWP2kjxindsVJUdqrxF1uYaiPzdv9N",
  "key14": "4z6uPDxx9AJv2rUJ11kBbpioQ18LHnJJYHhHoiJ6a7TmW1gHQZGqY3K7B5FWZvSCfJWiQWfVF7jBY1zMrJ2yf7Md",
  "key15": "621cqZGVTJeyJgTinKqVy9VuiDSunex27nhoHnHSB2oqXz6LXPKbnjPiLxQMBZFzMgSFbGhwowRZ9CNbHrVjZStq",
  "key16": "4N5yhQ9np7r9w4YTQGEwUgUVjxatM6RTEeEngSSvV9rYQxmvkHDSxCXoeDUB5Eno6mBbtyJ2j3tCPqXDsbkQUvXp",
  "key17": "26uCuWnkGtTDvJq3EnyB2KA7aF6vyycNMyEo71Cr5WA7wSb9MowMZXJcUg3fxy2waGnLpE1qeutUhDrdbQW6trTY",
  "key18": "5CivC98n1Cv4YNijy63RjmJuY64pfBoFHECZh3n7GPSXVgmQHJ42hxzCsji24asWLJhHkt6WYgeE7AYcLTYuBnXa",
  "key19": "5z3XYyNiAxgwNCmFkpEqvtNpUfCZtFS6Eoyf2wFP1xuccuxKRKFQ1hoYW7MDP7kc6c83NzjvVfkvQevHiKEESEXZ",
  "key20": "3rjuzuQUDykCrdVb39jrQPVMiT23izLy835QS2XPN7Z3PxdETnFivsaqcktcy9FUq9rDzwj8L2pZmzXa6Mpx9nQc",
  "key21": "2QqMQkfyB6zz6AmyumnrcdvRojAuactowYFU8jPS2mPqnbPQYd6chpaWrsWCVPXXNGY5Vbw9u3XfqBwPbvo6yhx1",
  "key22": "5ZwBa2qsqDvRWyCzXuEk5rEktpTqfRY2PXra7xTghQGHuA76YeW1APNQjYofnMZ2fDLAmNkhxjEzcw9kXGxJ5U1u",
  "key23": "5wWSJkkwDoeQgCDCC3UoWH5y3NSEsCzv2gCJ7qB9wATnkvX1UnfcSkiwx8rdL3adfegM6cgK9RnormfDFzdfe1qn",
  "key24": "2qknAMZkGmitJymNMGJjvEzLcveEHmHz5sW9nS6E2RdozE57XGX2g575aeVCPZbnEBR9SHrvEj8XYpjoWj4zX6ZF",
  "key25": "9FnEJ6gLKf4C7uhPFs1HALfde9o2MczFTEuZrz68oAFC17pY8vHKXEmNc2PkgMEUR7Ly11gQHLTX3itbaJZtNUM",
  "key26": "3E9kf2F96abMApdN5BuJ8J29Te2g3YPzQ7vsvhGCe9EvLmJdkin5yMeW8UduwpUCkvww5VGu5RGKCx7xsqxhKABT",
  "key27": "3xnNo7yt2Vo2n25m5WdKxwPwKHsqZ8qdNM2ckBky4PNDBeNvtfYbqxwJYBMFcehpuUXSHnU418FrmKNfML66PYLV",
  "key28": "MzCH1GBk1h8E7BBUQfuXoqzLLwHKFefht3zBEHsEkwFaVfAPRUXSRL1L5JPBX6gdy99Kvbpd49Bgo81ohD3WDBn",
  "key29": "44qtmCH2sjPKKzathWtN1D8Wbvn9TgFYuUstbFaz4Uc2hB4Uz9zB1VnJxL9ZLDiqwG9GZ34X2RqkjeJ7SdDhitoW",
  "key30": "5r8F8yvHuh3ZMqZvFGSCifKNUDQqRsdBXaFtwV7Sr8bbxQViM7v4g165JyadqUVwFkkAJu5ZMLGwymQt94bPVqF3",
  "key31": "tkXuiyke99ptb8iKWTnX1B5YKCSxFuorvvqJEdzodH5ajBmaPRSp6WFdNCSzx522gd3Yok8xJEkSp6C28HLf8dw",
  "key32": "46XQD3SitxxTwZxqpJo4wHoEJRKm2aExZwRWfq1tapds1VqGFdSMG1URh2pgADLDKJdLuTv5RiHRXdVugnJQbENK",
  "key33": "2TrnJkv1mxbZCQjTcuhkWBFcjRzAj6q6zX3rfTH17aSokUEgayUy1VpPRnyRSA8deAqYoGTKJSYdpVC3ovfcFmDS",
  "key34": "4UkbzARh5gYpJjj9HP2VorwtybYCtXqWwa4mkcM5HV5x7SnHJ5uDYsG7F5NcYf77xUkMLP947vp1K4NNugtACTNR",
  "key35": "mobVXpKXZwbiMfR64b8kLY42pmc4sXmn9ttYxvoC3S3Vrpr6DQVRVTgymW2peCubiWGRa9FmTniHiyR1tQxN43D",
  "key36": "GVufrFTw9EgfDRzHNNRUuuW4nfYdYbp5Sckd9iJTYVedDdk6VvFwnsubbgEKdwCuR5wzdg8Vyuqy4Jm2kkCv4ZM",
  "key37": "4HMNxvdYFTf9YmBye8AjCjDW8nX3Sh1Kcn6tcn6zfUrJ5YK9GT1RfY5JEuC2A7ZkAaGWYsjSCmZrHKcvxPzAye9b",
  "key38": "5Yg8jy9q8KBt4YkiJ1GSQU9XKyBcrzTidMXTMqAZ7JzJKaj1WNcGuo4R3Qn3AUAbPzUGkrAmbf2feLV5p3Q9Rv8",
  "key39": "2ePryqggSkusxgBMKgs3ByAE5H5fVLy8mM6eJQAXc23RFNFKyGb4e4tcAw53nYzZJG8Bhnb1tLW2qYPhJ4wBnyd3",
  "key40": "4RYYyuriSmagNFRhwHbi3Z9y7jsAZMHdhWGEaw3fMgU7HS6dhEtaHKUAEdhHGVqpQYioU1qS64P5ahBbrYVsj2VH",
  "key41": "47NdB9vw3MGy85iL3uH2LqVVfks2t8oELjVAkzpSUsC8EMa9yFpJXMRHazJuoRka6HLkdZfJHnn5WLekZTHgQ8Tw",
  "key42": "2ub9Hfj8rz4ixVXMf6PpBUreud149Gov5kQxgzYVaZzHGrYnShC3pjxvEQLoCtdaE31pMVmdaEJbA8MF2pV3zTQX",
  "key43": "2jwR19Hif3BfAWvmY15a31YiTJo7TVz43VE3NSSTh6GJkvUkWQBTwtFHGPiiQqQhQFP8spAYeZjyi9X9pm4ecoD1",
  "key44": "55H8ByCWguLxWy3eumRXGwd7aox28WNdbvkiR6HAX2mC3uqANWec2d7px3T21FNVCK7hMkUXyTwvWqedL9Jmuysu",
  "key45": "3VZ7AWqmsAVQocsuUpyxfkkbfG8wvs2jwpEMWcqfEL2MSfnvk4DC2Q7VcEeQTenjZdJzCaVGx3UkCfk4Sp59c7Li",
  "key46": "5RV58U6TcDUMRGFPCAJLi2cVCqo99DJE4mEkD3eMZuMuw6Ju6NAhS7YMyvbPNGRVZeZhH1fKmjuRGPADjp16oy3c",
  "key47": "4pDffzAsYnGhpyFSqKGmVmQhDzvv2GLstYSQMe8GttDzTfzetK7Czmu86nFoijjT8f5pCdsxQs15cJoatwHjL5Na",
  "key48": "5N1BAPWS1pqGd8wSaWws5meBQMXH38MzLkcpKqcg3rQ8gDZ854dvssGMwFBanMaA3qnrgHWYQhribzZSxXSKE3Ah",
  "key49": "4CUftpVCAnFnub2rXET7RH56Bc27CXHb5NErXW8BbRaMixT8QTfjiuaj1rz8MTxS2RVVeQarnjByPD52XdaDXXtH"
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
