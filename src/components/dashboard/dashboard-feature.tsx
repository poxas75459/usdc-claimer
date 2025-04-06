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
    "3bZFLo63fbqW6jVWEefkHMXYjeYapSK9821jKUh2Cov8SMKM78nXoUhapxCBZxERUbQCCa8CaaCGNHgUuKj711Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZX5tbepJwScKf9iVGdcrLYTnrfz46Vasbn4to1jGQGF23j91sN6Y1Kq4bfXmCmqfYfCAXztDrPwnv9pZ1kaLYW7",
  "key1": "4EcP767e7F6yJmkNWHnCL6PC6W4U2AeNBnvnbEVypoWm667qxQDZtKPUhMVK81HNSX1UdC9n5axGyPg7W2GiPtjL",
  "key2": "4ywhC1ZrrPYSGABPSwt7izwaCM6wZQeayLCykQWqZHvLGTckdw7SLpAHa5sTBCJLieHbhaEzUhRruNLH6oJJrAA2",
  "key3": "4rTDJa3KGvXzc7kyD9W8cTfpQBpmys4mziULsrTCtk1ay6FjB3PafswgvbViocdRKv8NWCbaRxXjhJxiHPMc9LNR",
  "key4": "4qwk8M4HzyuYE5pZGfqMaeJ66mx3X44xYxQV5Krpwckc9sUs6HYhB1AGUViss2ZF4y1WNSWj8nkE4Jz3Ee5RaYzt",
  "key5": "4Wxq8KnSR6Lwq5TvLDAa7e8mkTDzBwj7X7LxUpYQwGSEJumhq6FiNNRsBiuJvpp17dmn54fERkb9mXZvL8a9oBVB",
  "key6": "4FcDzcJMgY4Zp3E1knCrUAoaCjQ26B5DS78RRGomhvUnndoCDppr91DH1NptqFt7Bau3ApcHaRk8C4cEACabNvvQ",
  "key7": "5KWpNSmVCitLWUbL2SWKHAKQrB2pYShDdEXGKaP6TrGr44DHhDET7rFhji8PJarXMjYQc7Mt4kuHHCwbp4Mh3Xjk",
  "key8": "2XGXvyNkhsCGpuzTPLNQnrbCCnTvafggEnke6sofmDhMJWq68Q2aJ8z5CWacWRjwpyfTdNULpY5rUcYtjRTCnjrd",
  "key9": "316NEQQGeXf2DgC2d1y5tLuV5zMCrqf8jGknDVx6e2NNdjyqtxrsbZn4XrmyYqqcTzFAWixfJY5UbLiETEMSsdpF",
  "key10": "2Vwju9Smc9UXrCmatkBqi2WwLRfArAAy7BAq4gQFB5w4TiThi5mP7EBhyvzsXHdL3CnnS8WA324Cp5Dduk5Q8FjS",
  "key11": "62quKv3Y2fQcCk8bTx1uP8zP2yPb2eS58vAbXeUAq95okC3o8nP9gtXqDpHYUy3FT92yRP5J1rX4pPogt3jWydUj",
  "key12": "V5DhTwvRAWf9xNG3S3T7ZPioPUWeYjDNxpY8EhW9aGpjxCvGp8fkDFdPJX9Ac7NCfXWArQzKkDA3SinaTwVoNWT",
  "key13": "3puTKwyW5i6PWYJtWg6wLTS39eEfvN6miQ1vVc4FRxhM5c6XjCUGsZpyPLH2BBrRGqwmbXMRMaU3b6nFLY7iereq",
  "key14": "wYUdYTDjMQ9m6kpaEaB3qoQNznVP9sZKJB7rtoeiRMs3wZH4qEwsVgd17AQTpsscNYu6ZyAv3XnyXkvTqTjZmp6",
  "key15": "4MKPwTFFaCDm6D1wvd2kZ3uLGspXyz397DXF5AQ9aVkY2FwQES2ywzqBoooWpbsQHQ3qqDxQci2EajW6tPr7bNoL",
  "key16": "3xDeBE23jdpGtTMF1xYZbeiP4h8TEZGvg3GbMmYBGa5Q6vVHiC1X7crJAqfGHZCnmSocke1WHKvoTTRRAcWgxLMP",
  "key17": "4ueA5gWvFWjVvNTH5ns9GpqZPsqLFaRHwP2jgkHZ6DWwzUf1mv8h97CfDEx5ZAni5kp4EiQfjHK5HyBASuMJrLCQ",
  "key18": "5UhRpSUWaGybMiTurUkdTQBSA9S8vkHsH85zmwffbLc2LVJejk9ZE8PKavjwmAiDdxG29dS2DsXaruyWyBrycAkT",
  "key19": "56J5H9cGRRHNJbFvmBScTVoVs2Du4AozA9sKdDUauz3rNDAVt6vLSgUmqVNTrKHDhG39AcsQEQEFoqSq2Kq1W77a",
  "key20": "5zK6RXvgXDsTEEavhoHk4DHpA42dt2TZoqKdkBhZg78UpKPnuKzQSFFZ1uQRna46nx41e7km8u6nc7A64PHaby9G",
  "key21": "5LfPetBMg6kSWnCJm5XS8tY9W1ztJZRpztPLxxaMj15dSdqGjnZhm4my2XfrDSacNRfMZnbgjgu3Ti8GJuxKiMdT",
  "key22": "4k4K1s71yZjLvmrm5cjCyjAhUULtwcTRjCoCfCnWbQ1xGdnrKurTUF1SXWLVoDmzG3ofut3CzrwtXKCKVcfjuWDb",
  "key23": "2Z8grUCZP4NqnNQUaiwTKkVzSaTsnBT4ftdrYCZZtNiK93hNWvuQfYYh4hdQAkbKCNWJLHSuP8FYfqba2VMaA9KL",
  "key24": "2Et4K9S3f8NnBaLBNL2gmkkdBx2Q6NrWFQpkUUpCZmAa8iyF3FB5yiEfjGexo1VukgCsDuKZ9xbDLd3ckmLVwB3",
  "key25": "3Udsr7DJmMecgazbTsZdmXzVq4M8Xwd35dfNaWsSexgVGJhXisZjGVrrU84yiShxtoKUxVbdBL5aZvHCTmdJnb4o",
  "key26": "3oowrAvStErP6npbf66KCkR64F9kEmWK4Wos3pVEN8SVFZ5gcgR466tXRHaJ34Hak51a4EYcV29XfFqcs37qqBU6",
  "key27": "5b3W197ExJ5ARGR8ZoY3JmV3dDgztrXKGjqNFKmcTYGFWqGhyNvVw1z6ququyKck1z6rL3XPh4nSiUuVvNY8Rr9H",
  "key28": "5SG84g8bniSg3MA4xeCw9LCoT59LLRFHCfmjc1Btj7zeQQq57vrAEXmECERfnpzRqQWVZ4cFkxGxVLMCfpLzvGkG",
  "key29": "4BQE8FNcESnJvniTmHKJtXY15ZeefsMxsMEv5vawLuvDoLwxkykFh1qYbjcbMaCBjxb6eqJmvF5ksqeYr1RHpEd2",
  "key30": "5miEQGvk5jDJNjfVNXXvYYPNHb2ZnM1PSRxWMrCwaMTQpphY6Dovqz3MzLh64s6ydM6K1YUM1vwgtPLyBkiLymGK",
  "key31": "266xT6DWE4tqFLiJrMBNQFVtJuV7jWD81eu2ok9oqW8vo6jKTznHdcoARmTLnpEAtG7xpAErtSmE1ezF4CYf99pb",
  "key32": "2Yn6zohS5TeDFD9o3ZKCdJK6Y88Ay7CxPB5DvpSY5cvPRVgQMngvEeodK1Qi1QBnWoqvy4ehnWNVcJ7qxWKPrAsm",
  "key33": "5Dt4qFXDbQddeKFz7X7kZjyxGPsaCVDj96t4ykr3z7DYBURRXrjSJUbE11Q4EnhW4GsY5v9j4TVcbM77QMytiRnj"
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
