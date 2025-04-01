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
    "2dhNnwMfNkFNN4UgUSn8DdSojboZy7VvYbbeasXdxA8KqqMfQb2xMEyaQdaRWjNbLcmufbjkEneqdGRgQiUCjySQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLaL35jS5MsS5jWkV7DhRWnNuJ5wUmc8eWUqLJ4mamMVboJJXeeWH9FJqgZ3XWQ6cWyXcyD1XuPE3psYiaN1fcP",
  "key1": "2acUSJvGfcE7Dv5Kqkbv3svVrDiT1F2gwmy6oTU9xQ6QNuMv4AqeBonirTwPFJYoud9t3yCJRqawCyQ9WGfGS1jx",
  "key2": "4G6Q4Tbtdd37gn3HwEF8Je1xkjjUNqpH9at2FrTjzrczMmJQ33wiwp9popneqhHmvMYDj3ZvANVq28uYJtHuCEkf",
  "key3": "2CZ7yuqyQpLaPCdjvWZbt5fssB3pf4c5dFGnNWBwgCXPNM76m3MxabxnpvcQeApv1jBk8cYWt7U2dTZ2kABY4G47",
  "key4": "4GMqdadmdyuuuv6juNUjKaoywR5fEc9pkzqzHTkige8gQBtANkNSGurqhzmrVQoxit7qxy3aN7MsqY2qcTgKzC3t",
  "key5": "4bBMoEvyowLR5MRcxprWfmwSgkD3Vq394EGWR7ZkQM9UsLiF76LMYjv5T2Ty73mt2CcfBkDWcnEaBY7xf2mYPkbj",
  "key6": "2esAqxqdSPmuG7JVSQSdctcssLngQVC4BY1MHi1TaLVXtRgXkkpUXY3dHbBJ6HWixWPNz89sTiLvJSQSuHqT43B4",
  "key7": "55GWzF7JUi4DGemPVnuCH7a2A6ye1D99bL6kjjZfvpJxNWKKkYPbirs7s99354p295Km2yQkC3EiAkZPq9Fpj8Am",
  "key8": "5Am83m7wGaCYttC5ZadStqb7ychxRBfgXEhbevzzQUPDw5QPfcFR1wnn8nMunyvNhXFkDDfFVpavQGZzfy1s5Xok",
  "key9": "2a7NSBHLi7WdaNECnb9dHRfiE9zDqoPhN5X5NS2w546BcBxPRHUbiPv5ohURQE6H6doyiD1o8DYZ99YemTE6KXyH",
  "key10": "3tGT8XmoyAge3aHYEBzcmtLKiWAMnNhnS8kw4bfK9SUvXzoDShJk95H756Gp9m8VnLx3FH28oQ5Y1HPABtxfBzAM",
  "key11": "gkZRyZ4QYL5ANNSbuZBu9NqqCpTp29Q8Lms8cEbXdiK6PtxeDfuYRGZkBhTS7pJmNAbAGespKpHk7BoXxtz9t6k",
  "key12": "3JMt1mWt5n8hpGfPAkfWkEbNAqAhtUfpF12k8n3Ymsdb5UUXrXUqNJeF3XVzLuuomhCbCJ6vDGNdKjujP91VW96s",
  "key13": "bxR3Cr8Bmqvs1Wjh6u77QWaefa8guTGJoc8hx9ojobPQN9vNCBhrTpgj7aScTEa2R15tKKpjihYDw1zNQ6fQ68c",
  "key14": "4AFyhmXXgKyWFUoXGjGbBQR5aVG1v1Zpbucsvib3MTAHPjQmySFhMjBnqauAdP25JNtKNjyvM6tfhLJoyLx6YQZ1",
  "key15": "5PCNQHdxqjp7Yz56pyzdypYSsaUw9J5pGEbAPs9wV7xxPU3suugTXrvpQgJDEwRS6tf4xXSYrNBHsgQDxSMaSd8R",
  "key16": "5AyXBL8a9aZMtDkkcPRA8aJhUo92YA8B1SVcEWUi24VyaAZ7A63i49JfYKLQmNJHe2jfRjjc7BwjMVATmZmM2YHU",
  "key17": "4hoJHnQ6VY3d65sLs1m62ogiRv8J8Ut6ydnChEMfkdS3MeQ6trBu5gesvi9JqPcNLYUU3887EC3XRSSD98RADc1j",
  "key18": "2bEUou1ndk3QwVVmkEjaeuEV2L4bvx5FDqKXzfFQG79JsFodTMGw9dyDyo1w2BWqi9hGVmerzSfnRz5C5Y7cdV8H",
  "key19": "3TLCaVZnvKRPpcqSSJUFaPgKmcfRJ5WL5mdJZbuYs8skPYfjrcLjJxHkSRtrXaFhrDuW4EMkr5U7Y1G7wUujuNMF",
  "key20": "3DVbJYw2pDARfkeitcMruFDPkz79srg7jXqg8EZ3rwUEu4xa6ywspjjRBhcBtm8QodXfDsxVetmUcRBE38CGxhx4",
  "key21": "5XoNjjSYm4hNkbafXmCWpBzEfSRiRgMqDwHJk3zgxmd48bfcw9GzZxCqHeE3YShw29HCrjGiLYreHBPTdyd8FjR9",
  "key22": "29Mm78WUuaTsp4ZWoEcavZaZnScrJqmW7Mz7Mhh6c7yYuAuXVD9jvWctf6vkzsvAeVux5NWGMEXWdoBxiKamiWjm",
  "key23": "389xkvt4fVDH5XCyPsPvnuXDsxn3W8ANppJEFFNkWrJseDYrEvRFYD94xoXNAv1BEtWUVhNQCugfb8MfvRjjnq2d",
  "key24": "2UoPRoAx9SuwfLGpMdfgZjCRREWunx78nxdWqfwyJrStQsWKbuTm37RVYJnqCrrnALCrfmv7XoY74J92DFXSSXqb",
  "key25": "4QRafJocJJjdaMEQ1xTLcWSuMU9XQP7ygnr3gueHhvH4Jqvc1e8ZAHgAD5QDy65aYKwHwPrtkiCdUseDsAxTgADC",
  "key26": "5VymLqPSbGaxWREcwWesr4AiiCk16Voba3HRu6FwrFaqPTsNBjysWns9eXLGULCJ6ho41kwmbKi6nr23ocKiFwLn",
  "key27": "4ZLgqzNvSJfUuXKUjnT7MywmGvernHcuNVZr2nwBmEpbpw4PvjVode8cerzqwxp4MdSGPiMi5h6Egx78dYAMQLvW",
  "key28": "66WPAgxPjiAEb1sdi6GMH9Qd3SxmNLXsLvLzBo3w3K7zoc8S9WKGNDqQ8MmgL4RNknusUBDDCwAJzbJ7oRh9xEdW",
  "key29": "2GCrk1KELuLoV72fS1G4HnYgVxyF6JyJXgu8qbG6aF1zGMBd4tKHtpK4qBPppVorYbN1Vu5ZAoHXPeYxAALpeF1i",
  "key30": "5Cc37dtYrHwCsWbfFe7SymM9AJ2UE7BLXeciKM1F6F9pJyHUzVXW5CmArNusH5zLEPjzchUk779G8JQXFGzCC1in",
  "key31": "25otphprmih1GcqrEQpPhN9f23o4KHEpiW7vFir1x3PBSA7y58HM7aytZMaoQbVxVD4SH7qBeut84h8Bg8UWfQQC",
  "key32": "4jPTL3uzNZguEvcTZkV1B6dodwwJ6pCrk2FgycanbWAUpyFRQ5gN3GzwZxiMumVJHEZEYPz9HuUR7gycvhk2uBpd",
  "key33": "2G7QuXK1F344X5i54M9Jo5ve7McXziteWTj1zaCikQ8gabEKoCxSNYAVk9HXe5NQZnKudzEpY19ZioZ8ogC8c5Cn",
  "key34": "4b5BBmjjNpXCmj1U7tmHojnZAZBahEGkdAZ1y3y3YwfCY1HqyS8nRXGsV2ABD4dRfkVntDtf3kDCWaSdBCSGVBZK",
  "key35": "2mdXotzCFk8hjsh6w8XyEfrYv47Xov58xdPjyW561s4sqS8G6n8M65ow2C3qh5sgqTwFbTvWmfqxx3NNpwfBcReP",
  "key36": "2Vb4Ni2KR9wwuE9RT7XuF4h7gWvgWX3AzCFioKqhLwhaEXa1QWKy8Tgziyk18EQwBRfSZ9YaUJZyM2qDK9zyT8pV",
  "key37": "3fZ4Gd9zyvtSNdECb7pbDh38JEkojDoTHhDrrJtf8SBR9q5eqU6YyoDd5RVaUKDF3mdfVozYBhCtKcHoPPZyAuGc",
  "key38": "2oeE5fuSbjnDq9Ss8eDzuBGaVzEf48UkL54FUQLSbEMcSbRxyUDhQ6jnJK1VxuiwTKMR29nk4WNZQM6iAwDRXQWi",
  "key39": "yMFbcLjDuy1Z3GV1pg658bSCECi3WAm4hU3hRfbVkc9Teany8gcBhdNwN9b3wq45dJWNVn6yPVhKUrDGiCSG6fR",
  "key40": "3CDgLkt35wByVER1TUmQYoCfF8XSnpD2tUy7yZ4KPGaxJjvtTSfnFvm1oJ3Vo4A9vrgGEmqMTbkmD5hPSfhofgWe",
  "key41": "4C9hc5vNiFTSBYfsxBHPkz5uBbePGvqRgXBMMtNpWgBjU4ja9x4PGNtRp5TJPKh5mJsSPqiK9DFo6oWzrrmU731W",
  "key42": "3qubDK2YDuRyfeWs7y8jw2vahsKnrjELv1p622K4axXBuNVwVM7tHpimZD7FgbtG2XwduNk4mJdMt9X8kPDaQxUd",
  "key43": "5bfEVB8SRPnSuDbjc7xwNF6DWtBAhgaUSY97a3tTjbVQDRvN19Cji5Wirh73XDr9JQMhsKk2mZWpBxDEXvhq4TVA",
  "key44": "4XEHqANY66Yup39dgZEu8kdVBrsXQYBvg49FALwb9GEj4wmGdKAN9zUb3BJ1ow5FKzWsu1TP4LCoXfKCXjpKfVvX",
  "key45": "38R6bhU83Ky6JwaVjGrZt1Qypji9RuLBuEd6RdffQXFZux1sawknAtvAotUrqof4BDg4JDKR41X2bKuKJLejZdGH",
  "key46": "2vGdaahiiZcVQVs2fuwwbrYFjyCgquaPwbvANZedFreacfsZcGLEnjbuZMXUMeJekibkLLZji4HZ5W95t54njidp",
  "key47": "3D2X1HxjmCbLpUwZ5AXFicvJ67iRK9dV3fR9M3xCYBuMz3xiMgAWH9tjNSnmjiMdcJBaHhbsueszPKNSSRD1n85R"
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
