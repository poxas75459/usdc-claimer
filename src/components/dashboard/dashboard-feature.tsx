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
    "K2TsJvTgEKyznV4dd4uJiGXk5284CfevhtKfrDmtbv3M5LaKr9BuBuhpsBQ1DeupkpKFfLoQwxCDzoWfQu7UfYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJmRaGYfmVDCSNJCnMcBD7rKXMqQPwuLspm93aqAPi6fcgHD6ZiPxdY6AcA1cbE2sT5aVhaj1Ug9CjwJb1yoK19",
  "key1": "4Ckx1Si3H17pbxmyQH362PQsXF75TJfrccUT7ZbZVdeZQ1fnsxfUHJ3MnE77fa8yrG7fVVuP96nHTKyt1ng3zw58",
  "key2": "4c2PseFyr2rryNWDp4kDce88sRxuvdc9z6eWKsRsB87ABN1KceEiANXR15HVgVxrDHjQW41C7Syq5bjyrKjmHMgG",
  "key3": "4vUFmepPtjsFqaY1DRQCrGwrRzheBzT4wCs5HsAw9WWARnk4UhXqYEyuy1fvEPKCfTGY1a6PXN3HyUDkhNirkpD9",
  "key4": "2j5veG2oGPJcnX5BHnoBSzJcsq3wC2y1nhSq5FhvSfqcNcbBtqxbnkBeAavGrorpbkoDi7iyD41V8ZhRAaMC1bxq",
  "key5": "vdcuw1FgA9kWafP6FoHJaUARNwbxYrFtNvfwJYtXx6xynYGdujyE3ZzJiuCUvCkZ8BdPjZ7WGTNc3FA3sFsQHE7",
  "key6": "4Bv1UgdncuXBSHe9JavznnC9phupKd2rA8P5Ez1u7BFE8KEtNx94inzFdYzTF1mSZYUnEtAhJ3EAt2cYCauXqJG3",
  "key7": "3EnvyiG8uuyP3X6wHRfEXKWmqrLXANRMyJaEzyvze74bHtwHWya4AipsnwVoqqZ13WQHodeMcTwQVn5jMYhipUR7",
  "key8": "USHh6VdJ9hm8uUi3XuJyXE7M1iHfLHanfGfvUw5Ct2DhK8W3yBSG7fQLbyQr45RyWvN8eFg8RqAnW6HNi5AXoKc",
  "key9": "4Ernm2c5rYpZCMD8fDrUxUe9V6HfJKk94NaGFiaYGG5FZzZ9qQEFv4uzFfEucK185BShj3aqr5X2s1LYz6sfuiFR",
  "key10": "65gNrihnoUAwvMz8X9dUBk6P4NYb2jYgoBq3PsmhyCx9KURCMjzsvDv8CXEJrefcFgkFyBGX94izSjkaJhjvTyLd",
  "key11": "3MiWM2tAghby5XGs8foZ1Z45bQsfrxSTjj6PDPznBhiJsdQMXyAJnbLZYbT81TcRbWkEmXLiV1dTv2MLEb6N9T6a",
  "key12": "5gGYMkeH8HobnYUfgya4e2PjL7WJuxwYYnZFoPSTdJn9WxRY1dYokd6s8x6VoGQDeFaNCyPuxsai1SoUbcYEG7i3",
  "key13": "8DCy2pN73zLDvH25tcaiyrRZbqLQKKB9irQi3oqABZVbjAuMVsf8UcspMSti9wBHkxqFL1vcqoyK1fKMGJRp4r7",
  "key14": "5X6qpCNfCLzUNuEkhWVSK3RMbicExf9Bnq2TMCBTLkAFu2yz8xhoyezesiGbA5X3hMLDE5BtNbKxLh5vo2kW5Tt2",
  "key15": "2heurN2ZoFziU3tbdT6JS1NSH9Pf9S8zRVU4qCeQ6wjuhcmtscH6j7wubMsZCeoV9s9o8gLWxcoV3pUn2DvebUT4",
  "key16": "4wgNXYGsnGvN6BRpEepvEVdC7cfbVLFAoDNYjqjLcYZr3VzqwyKMQjxHQ2kyvqZo6sHvCFsSAfLVXxpypcMkkkna",
  "key17": "yWTfGWqkPidHBFKHiAkJA7ybW1keeWxU5EndHyi2tGAcgHRNQfj68oCHykaEnParndHq1YMnx59Ev8Ln2aroHwW",
  "key18": "3WUe4G1AuF3D3WjDUysiEnRyu9Hcu486ks59RaDHad1WrRuqQZyM11TVqbgwN3A7UQGBW1b1VwABKm96n6GrVa28",
  "key19": "Kvy4v4Rep6XqBhPJuWEuBXaqiAgQSM55jxjH7mvWgQnJ5sMJWZcWQvYvrs9u93hx33yZ6jjbWEesjgp38CDUV5o",
  "key20": "5jhkr8e1rNvkunEvrnsYZchx4FuaGuXEZ3J5Tmt2J3x6fFJD25jEL3fE7dKckLT6J5NoaqQfpuNPBwRcprGMDiSK",
  "key21": "3sa8eroKcT343wvQURH8PEC2QaVgXum9bhSe5pmhj1Vxmj328LgNzAQ8vZ4Mi9ucSB6x4BD2H97G9xyVQB1WpeCS",
  "key22": "47arjtH2tLSZbWCkFmtGfmd7EkVGWbgBnrNCtWJPFNRNXHVR4wnDyEP4zCXNePbTqNTyCvMr1kkKLyeGY5rSKBq1",
  "key23": "4hnmWJoDake2eXLbZuHNyYh9GPNTKUaK3v9tW7TbqPKR8Br76qXDyr8XKZShm59DnbHT13A7RgaEzmm2bR8aiFPA",
  "key24": "5FjKZfS7aSzVGJUpA75sYMFLEy3C5RJgoUSjFqj45zkYuuWgMKNBgnozbXiNvW3Rk5o2fRfjAfkxc5KSxUA4LLVn",
  "key25": "C9WVxojZQbGsGcnHiefcXV2REQA8jXjX6etzTRhHuFkhvdJjoTPrug7VUztxBTVqPx32w1kBHiYP4p6hAD62pA5",
  "key26": "2YojdWeLyujGCjTYzuohD4TVvPJ66FHRMq8Z87bjoBwsfHCPBjqJTz8dBDi4u3JWx7h4kaAtX2dXnR4Ko7f25S7R",
  "key27": "1YRPcgwm4Zp1zPFmggHhZAVUNiWfiTmhqHPqkWRLfK2QkVFXPd9rjFmgGJBTuki4PRpfnz1cLRjZzUSuWuqeUc7",
  "key28": "65eiSy2b7edsRxtmh1C9NUZAs781vCqum12LnGJEbsCiD9FtE9R9d8x1W7CV9qKzvjdMRQdPbyfy4d9x8ee2qSy7",
  "key29": "bQKEJthpeGfVXHNRQQo4cLtyca3hAAV3r9rxrpbtSqcwrq3HUibhrkXNb7tVs8bbeEBP2GS8T6NCsCqDzXzuddj",
  "key30": "221k2G4HVdJ6TgSgrWPSiZqkwzbUPJRdW7PhDR2rKrQ2ckKkpYqD53dDAUWRdkMgerx3PRQTTuQzFdfZTKB6ddtd",
  "key31": "5RqK52eCgTwpFvECgGbMr9DLtJSaa8VKvFvtRCLnvqR9V1uWYFpdBmq8NbVLY9AjtRLycJ6zJJxhZLAA27pMk4Bf",
  "key32": "JL5tafcZF4NdjMyBU5SwgnJWaSpGeHZKb9khox5ZBLo6Hco8r4GQP3c9jCeCKxttKupjqninfTUJWHMb7sNdpge",
  "key33": "37bigAAzNEAjxTozDTvpRAM8UTa6ViNQ9Zw45wAcKWkoZdDutixyBjGY75PddxRS3cAEiwtLrFmia5gibsW6YqMC",
  "key34": "akLHod1ogvWYEFksPnH3CShUjUrfNwoGq7fyRJ9DhEXCVQvCULLWfg9gDLBdZYgtKUCQW1gaJwpU3yfh1LA5K8Y",
  "key35": "2CnqVKKATgKufxStwsFJdtLQsgYTcPwBQpHsfnSEPcGBoqV3oGhjR1pxSeQwmRbP4FFfwKbGpRgS89Zg2CA5ZKHR",
  "key36": "3no49hN26icegrz1eZGdFbF8NVhQHJp7BA8piefjqjC7tCsnC6RTFcHrT99FeVwJTpsUMrJyZHyxTREahHdQUovP",
  "key37": "2cAvub1LLecw46uhgG5t4Wg1aCBS8t3U7aQxzk8HDCEiXFiByngbmdmKCG7BrxWsybyggmRFz4LtWAHaZWNJfbMw",
  "key38": "5Vdqz1AxELpjShjaayMoGCPRZS6DYMxjFEAnH8uvDT3ZWHSF4fsnTk8VKg8W9nwJXfYSU8WuGGT9miZDBs7DhmST",
  "key39": "4DE2w79pdfevw5yZVjogpcavGwwzSXL537J9Cs1iwM4e6uZNqKmMXtmaWx2MbZJYQ2VRWAoTv6AyiSfZxFoTB9N1",
  "key40": "5Z6ZRHDmBEqtQWCbporWfRPfT55QuuXzsg9v3j3Y3MkhEyyA5HZKZiG2X4YZqLkgKugWCGrAbBK2AcJJgZRA2erS",
  "key41": "28QW3mKNsNxMTpKbHUVEdrLb7q1TZ6WCQRQ6uBnrifv9J9YDGLZ8jcnPHVxefDuWk15whaHDkiKsJUuP6xjzF9J9",
  "key42": "RBbswhDt9d6btWekh1FaxEP5UdUqtQcCjqFBi4AXmGJFHvG4eBMdsCBd2dXZLxzCXJVkPdyiY3oAUkU5AC8PYeB",
  "key43": "5N3Nf5dfqhPXSutW322jzxLnLx8AwT8XrGZoViHBUssdhuNBjTFGskk3Eq9rBVt8KFTjbefdk3g1rDwu7VJsNBkc",
  "key44": "3r7KRkQp8XHYAP1TVQJ4rt7wWibTXgnzGgNiEapfV52qM7XGd9n6np33EN4tSBBdKf9g5uk5kGudtgGVMqS8Xm52",
  "key45": "2dXwoHgzbByKqVuHVZHy9iZGtAWEqAWyVHnyqZEJ6PPPy6c34LsHD5pf65oTcstNbQmiBsudK9UD3o7EWPnc635P"
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
