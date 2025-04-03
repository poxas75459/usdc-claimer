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
    "5gc2385cLJcD1S4MFBKtnm1yi2UCDW3zF8THGhDSDvXzxYwJManmutF8nhY64wbJ3pxQ7HTWGzjBpCqKqfN8kXNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "beVX8XKtrAgEqq4me3FqMaJcgZm78QT7bCtJWehygKLpvpdm1tbGPx8kiYrvE8EkMiBoMX3TgoGgCDyp7zzAjGK",
  "key1": "ym8xQfwLdjR8xNx5Bcv3X4yPgYCmcXuVWeszixZPB6Tn2XiadLWi1MQZXAc3QCrvaoCEHbUR52vy6zBg8ktE6gu",
  "key2": "2pcPVVAf9tveb4B37NRm6gntr71QzBHjWCHSgswN48cTpA4g6FaazoubvHbYng7ftF15fKYfRe3CUbeuim243BPZ",
  "key3": "4cKzcF6DnWGnnmZT5wg2DPqvhfJfnqhyP79serBCCrQxvTYPs4w3Xv2QUAsmWJf83g3rFoaTjSHtUFP3YPorWMsk",
  "key4": "5RXnrjVWYsk8dLZkUUFP8h8D6xZiAGZHU9maZsNeBJTgzqjRKfZVWKqhRn8Bz23MSKSPJ3573Vbg8UsjMCLADDEe",
  "key5": "2dVZQoTzEeh2uLuuD8AghfLFzYNTb7doKr1HmuBSbWCnu8DFcLbv6TYYUMV9sJTbFiv2XqXEWg59nRG2xJd5TMh2",
  "key6": "5GBM32e3uxxtQNHGuMpUUxFFTvrpGB2i5MvtyPeGkESMAk88cKtHhbfUN4mPkKo836yKipFK8htwdmx7sogojvxv",
  "key7": "2MgMDZghLTJwZ2nht3Nzsct6GwfcR84sfkb9bHZCeREJmGY6wXU95MZusgHaQXmj4qhBLP52pNPTr9iPBQpUwjgB",
  "key8": "43V7Sn85XuLDooJuQkKWceHh44DEQsaGtnWSXAop8X3ujZt37oLvVWvxDMbb1u1K3R2cTqN3jxJY2YTU4C9Jes8E",
  "key9": "4siJTH93vqJZ71mCQneYoAj97XsD1vcaZZR6xZfMGrgQVvTequsQ8piFvqZ5wAzcQ1vrfDqArbJrQ6ZvUmn1MJie",
  "key10": "45RG4moYRNepw35GpP5FpZUXphZ2CU3ujqowgdNmzeh1hG6TULgmcwKR68TW7WD7Dk3J9Jzhs3uDwjLKXqakKHUU",
  "key11": "4Eu4rP6H8MQLdcDfxNXQXbWtAdYQD7NfM7EK1rTvbR7jGchABwSPn5JzyVw5vhiy2WTcbxpg4r2YKkjV6XrMYYni",
  "key12": "kXmCqoNyNeA6rwDuT49Bi8nVNcxp9UMuwn94Jys7WiLYMRz9hTHfzzBcJcYDeokAmDNTJjMJ7X6qodM4uiyhvBX",
  "key13": "4UcMrzdVLK6ykDaVkVvoau6V6ytjM3SoR89KpRZRQE4vZSgTuizM16NHacoTCiT545WNkMS4jZ3dBYC2XYprCLq9",
  "key14": "iVbHxYrN81dUwzV35m3dttzAgGXAELN4mTzsBwr44wa43sX6D4rAfgr5rdgVo7rjV7JbwzEBTciTmdXT59PP3TF",
  "key15": "472wZn5xEUBJXGzofY4KF3rsBRJRqPGhBbe2ksLESeenkts5SvZkHUasRQpDS6DNNKP8eAn6qNddU1kZ8FS1tzB3",
  "key16": "39WkN7woDEuyhVLzvWtvDFDEgTnnJTbrchQ2F32Ch6QCLCURXrwNKuNx2e7Jk4AenbijqfP3SRKHGc1cANewsAvJ",
  "key17": "hJJnerdiyMyrbUEK2AUkCrZJ2kV4QRXHnXoWk7KHWHcY2T88nwGUXyCbLUaf4zVynLuvHgM2sVRJsyNMwy5YGs4",
  "key18": "4AEG47Qk4bsx3RoJsS15vMRUNP96wfQ3ZvELgtGAfJ2cN6dL3xQn5TzwnZiD6TYDQdmfyTZX9vCSsP1SaxQERLY8",
  "key19": "5EppXPdjY7dECEWVZQz1uUz7kyK6BqdYvwzGFWHASowAyWeRVwe4GUuEkiYeYH17b6gDJBQYqj9Ur7bL6XWNchGG",
  "key20": "G9tYYEB4p3LTgd1sEXrUQm99boYPfBiktPQAgPTQ9Vd61qsDm6HiikuFg7j3mC1DQPgHTTUxQDGzw73hywvZYyy",
  "key21": "4TgH51nNdZPWZH5qtvMiUK1FHtaZse4wvqNm3QPCN9xV5XvmUsKKYodoUKadnVxQGLA4kjVc62SZ8e87cLZLJnVz",
  "key22": "2KJW5fhwJXQPWv8GsjUKBQaNd6vRLjbhs6XB12Q55TbZdE1UB8wqBwJCLardprRpLSvuxDKpPLf7La8ecWtUvGmY",
  "key23": "zUNAG1G6GGzYSgMBeBLumLMZY2vHMyFeVgM4uPKaC3RvMmwEGbZ3j6Ph3HUG7jQS7pi2pHurtj1hVnShbTuX4vN",
  "key24": "37QPtj9r9xZr5Ym9mYgnNwpPPgJufyBdBcdQ8xwEwy4B9XnmYmUg9JGT4xo5JVb4fsRVc57ZJSKExexaXZnwFfvV",
  "key25": "4L6YzXtfNH2L9CS4pnDBmW1mzWkyRMaZfJfkxhTSwGvpm8hQzCZFqzFsRLhiGPz7HCSVJi4LxBx5gWW42p7XYryt",
  "key26": "54BQmUV1pxog2sX5hNmi33d4ZSxodYh85FgLyhnp4zADdXCArk8QeMUDcmLfuD84siiD3prVvrbgyVFb2i7DDUTT",
  "key27": "4Gr3t3m1GkJCz1MR6MHHtUwUbiUmZ4V2WcaeX2UbVaHR95wLoYcp7zikua6fr326rfpJJtAvZMmMA6iSF4iVbL7e",
  "key28": "krvCgHVrAiRLL9vU6QwPJkpGqcVqs44ybUsycnNsraghPGdj8x4sV4YBRtVyN3D87xja1rRCtnqfjh8BxFsWeS9",
  "key29": "2osTHKe31vhPLZxArA8MZ3Poe8oy29mrnPCziucyGtJAG9bZDUr3mpeRA9LPULVopmsACT3QPE58SKxyt4BkThYj",
  "key30": "517nSuiR4zsVh1rzjdNaZ3RQk9aMetgb38Ydkiqg4VEV16mVkTHanrtwCzgrGDmUEHfjdLzYkGbpyXbUtnnrh6Hs",
  "key31": "4tVyqVRvkk5WkbqP8EdewW84nm47WKGJnv8uMef8L1Xt1cjq6nNWhgATg4NHEqdam8KHN2CnPR2tL2uZmNPWntPK",
  "key32": "oZ6dYGRzQmtSmWTwkvWy5UoaLrZEEyvh4DrfLCSKFSYBf25DB9sU3CXq2eErkzRaUcRFXNAnWRrtaWa2Yw3j9rn",
  "key33": "3cEKTFAfoWBHwBCzX69Tq3JZJEneqZFYduerf7XxkLRJ2LiSLCmpyDGvPEJihL1dAUJPhtFvnXm8Ph7PfTKoJyJ2",
  "key34": "4tiqVjYNH4yY6pX4kLyUNQpavZj7oM8yMBNoUk4ApMCYbZuq7gfWmfzyqLtXX7ewrDHXLNQKzRKshoRwjtFhqm5j",
  "key35": "38Tuoa3CP9A32osKjGJ6RYHNc3wukmPemtAHt9XwM21DpJtMLLHVA632PL8NTq6uAvWhSjtj4FxXS6cH1AWCX9zy",
  "key36": "3LYiwioHyNjvg26hjPbEtQNnvvisWZdhxsigmdAg63oogLKSAtaTR2gdo4xCUAhj3wa8BzBSDyxLW3UjgfnxqMZv",
  "key37": "39nhJYvGAXXoQQccHbxevTdeikZA96T4JfkZAQv2ty3AkZ1ENktyFshtCfZWUap9no26LY7pwzBmSuVM2Dyt46xR",
  "key38": "5QoJvPuoKFtprK1q5Tazg1GVSoo75Eei8cHtn6gxULN4s9d3zwERVFZ7EgVSh4Xgqdz3WTdGtDJ7vKw5fTqU8HCM",
  "key39": "31XvVF3Vzm8dvTsemiZsV9FMUFpoHTLQH6gkjZpSPksV1LCCSusS3V7rzFTgQKdKsYDR69p5eJvWe7sqKzuZ4Me1",
  "key40": "2V8TsJ3BUshuScb9tee69ApRv9KWbFLstGQWd6fnLQbmaj5RsNP8fRs7kNv3jKyCR7tJ7QM3BXvDWGzPMZ3WE61b",
  "key41": "5VA7TBnmJSh7pGncGUo5q9R1k9W1BNBNoZGhT7rZFAvLCxcXDUwsoP2r5t3awRPvjr8Qj7NoV2ZgEeGRvn2yK125",
  "key42": "3nXe1f9ZJa8DMYHCd6zuUUFwRWXQnpDwX52xVKXibcDipxTZ8ydB5Qsj5qNxspFzn81vtSPsjBi4ku25sgzenRhS"
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
