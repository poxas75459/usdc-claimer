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
    "59MdahcQkhPRT3oAmYcVTJjx9QtHSR3xBEvpfJHcWfsnNTNWYimyWsALuQVVjmCii4yNveSJ3syrPkxT5tL9wKav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cF1nvhip6F1M873ZUWADau7HMqew1xYgfKDQPejJRHtyz6oXETBet6xpT69C7gT9TLLnkp5HGSZqCHh2HV48ztY",
  "key1": "444ZgbLQasazukgHHscwD5UrT6GDrV69hcyj6itN95KWuxDrX56irxf1HCncKSUx8iNKJ2Y413TBUjEYGK27oiR5",
  "key2": "4ZZ6tSnMuRwGxGGXbi9g2uXwYDqw4a1B47WYXjHAMmMyofcTVR1c32hJKKkJkAoaaCAv1wHLhHhXmmzoFxdZWrkw",
  "key3": "5tzH3tQNcJ9f5eZKzyw9UjSQTXEwbzAuFyCG6Bm9EmEYddqcUmqtyuSN4XodRMRjhxaJUGKWKNDbzS9HQTZaKAdY",
  "key4": "4AwPvLwucbErCrqSDCy8GPxNk4Hxr7EDBg2XMyJBSQjUFey6bcfBSBYxGPZZzNVo8z9y86wYV8j1wYeu1LMpeTwX",
  "key5": "3VvZV3XpAevVNGE7sPZwMD59hfyxKUd1x4isb4N7RyhiS5F5rR4gAgVMyTKXz1XTbR7gj2rnE5Hhwqx8i7fXjm5N",
  "key6": "4HA5Jw9txGWzsFLyCH2sUL3cAetyvK2hWTaR7hvBBqnGCnVWPvXFMzJ21Z2mnBUh7q7fMrahoJCmgkgV8KJLjEbf",
  "key7": "o4DwPqBGLGtTBMzBRh4cBZCYDX8r9esX7QL5Paddb7wEE2KjUNR6dpaSdzStsJwTKHfY25XwDprUCa2jGp8Wra1",
  "key8": "4WwjCbiwgZVVgozoZ33UGTcJqxiBnbNRHrFTbeCyHkf6dPzVS9iq56ga7PaHrPBQbNDyJ9HjjFXqvABLwMnjRpvh",
  "key9": "3fNzxiqMd3DJVExnyNkFwHb5aSBPBe26NzvhXKYyzRaMUQYvan6z7YipKSwfwNBKYcQeFVefxcHxM6rA54JgT9qT",
  "key10": "4iUiQemHuJtxUHDuhNRTuYF6vn2dXueMeoXVmLTGN8SCHhVyLVD3WtQNShkDTLiweyDbB4g6q3Z6HCURCFc3Q5Ge",
  "key11": "2vHfFsxYUPWzQLjvz1i9UtYw1ePPU4dTrp2MnvzHDzuXfrZKGf6LsZJ43F315FST7ZEps6ijA4y4CCvjueVifjei",
  "key12": "4fNMV7PQbiaJtvbwM2y3Wq52UM3kmuxpJdHNxBnQJLxMpg1gp2FBqmFjdwmG1CivPS5Hd5YyRAH1MY1BC6mDunwd",
  "key13": "2cQ925yHczjhPBZQeMroqKwkfQzMJBFsn1VZQbj5FGKAqQd2ZBTUpb7qoNYCe7hZAhskfZnERVqb4VHoHZ726Mvj",
  "key14": "2Uqk5ouBNY8vwfJiecV1drzNsF22QjEDh5R3sTw2uxrV4Wbye5ptfoRRp5mryALGjm3bvjTggTPkpoHaoczcwZ8W",
  "key15": "5BaUgZBH3ZKeTk65mdbqHv68kvskooY7uhp3QvAybjCnb1vTCVGpMWxZv18HXmj3dLibGyDkx5AT9XHcR2ireUCY",
  "key16": "2o15GPe4AsKtCbs2R51NrkrGWTFd1zJyt45zhn2aaSYREKMU48gJ9XEfzDNeSQvnvjbZagNrCp3GZnCwf8mDPoyQ",
  "key17": "3BhDb7oXvgKyVBFgRgzhWLAedxjx6nasCEga4pyputW91cJxnF53TuYhHTgzFuVBxKXmpazuZ5NBXf8qqrYcDDQi",
  "key18": "2DuJFSiEMogvvsT1k5XidXPxGSv1THw216qKzMUBuKksjkSrey3s7ASVKZvecSWybjMPpiKgDbvPtndjwruWmG6Z",
  "key19": "4cqh4956c2oS6TKd2XRE8zHpVTbtoxJmBahso2VFpv3LrNPRWeZk7h7ZTt6McNNRR7eaEgQpcXLW8KeEB8tAtFLP",
  "key20": "AmzHY4QQCwBusX4PbvTLRqn63m7Ri8TtgWBSi7T3kwXSKJcc1vUy77W4ABD1zZ8cDT3YF2Ghe27wCXbcPRWNHJc",
  "key21": "5nsjrzNEKG4VXjwmpUuAuXrcNKvRwrQFHRdjNsHY3XYfHNDiMdCSmndny7As4irx9chMX9fA5NAVi2oLcosPzxY",
  "key22": "4sqf8J9ymfcrgKhaaYy6NpZn3Lsx6NgHKjzUPdZ6DyhwaWuudNFmmcSxErcPLJNGVHGhHDwCZdMK92L43tBZCD51",
  "key23": "47khWMgEdTXFxpyH8Z3Z1EztsvXXw3v35Xz11HtUwHwRrsDpJmPhujb3cAPn128YQV63Jm17NEMMvn81YNgYaeZH",
  "key24": "26Y7oj9si67moJx2sKHGuRVVZgzpVK6WR2d1mm2F1JECU3etomMCx4BUh5t8hB1nrnbMEGhFA4kCCyKHY8NYpQ9p",
  "key25": "2A7JnkAPGWFHpZYNPBwRLtS8uMGRLcUkfEyjGDkEQLBnqSyCAPKHdv7WVF1sR3BaS3W2fwtZUynCnRfJ597jAEN3",
  "key26": "pvNpXSBdC6jUrnHvM35ovWDZdDyXDhGwa66jKvjc4D5uAYgpmFyRxti5J53p8FRF5gwiWZb88j5ATDSw6EN2EaY",
  "key27": "4ntVgioXCCDFvbQREHPzgunrCf4Je4tNkByisaFAPT1PdzfA8Ys8efxRXgCagq2gzKpjbt1VEmDkaBDmuHS1vA6r",
  "key28": "3hFLWDX5bAAGKuNs86wzCbp9be5TKvMvxGFYW58DqY8vJnwD6JTV1bp735yBRxYt24qZYMaTVm92axwZoKQtga8M",
  "key29": "5ZykTwRB8SKiTtX9gq7bEY93XLHyJpfZxb6v25L3ydn45CjbddMnox87htmDsZRFMfvyAKPUhGp6i8BaCbYiMQeW",
  "key30": "5Ko4s42wQfWvhbYmZ39iq8sjgTZeTsemQCvi8AuUEV42YaPCpdQBwKH48dXgE9FrKsXTZxmkMqaZYBfDoaHEZUfm",
  "key31": "22Je7maAWTtDBknFaWEgAJdTGfoejA2B4zzXpfUftFwiUtxZxTJ2EmMfKqs8mWMVrGbrJg7xfLhjQ2xnUYMNM31e",
  "key32": "56geJ8yY1ELfUeeF9eJzs2mUYtK8e45TjYqAt6igFKguSjt1SxPxALtfsMTtH8gShxR6qrXLDpUutT7s6NFSxTnY",
  "key33": "5Y6seP7wJhPHKQew4426LM39MzeSGqHaomGs6gW9v3bkB84VfKneFG3eKHuBSMJKEj254WK75JJ6cK8gYqbBnGVA",
  "key34": "2tjc333xcr8VSUqs1RavPfd9MkiFkne1ueNb2s2gWnWoEUHyZF5f8wbGGqYLF2bNwK9RdGaPcqUHUueVhSkXXHk3",
  "key35": "575MSoBEUbfJbhy7G5ciDPWcVArvdEgEFNf9NNS5itHZv8ssfbgmi7TNAmWcBESnpBA3o4MyumZohwgxBCY9BSp1",
  "key36": "W7rWJqA7YRvcxaahJnSnUGrwJfS9oP1qUPnaUNWrZr7yMw6nD29dpRJXzgofg6w1KDZEjbcDpTe6R7ZwjPX3Xn3",
  "key37": "3DQQq7BF5xtrCpuRarxswKafTAW9tDwa5RHTNjcbpSxNv5x64j464Ux8sJ5HNKP9peytigF2uKyrxaVhD2Xa4F5U",
  "key38": "561ZvNWTkptDM6sTcaaQ6AaUGmnqxfTKGQDuVUrP6sxSiXTDqf8iRAH4VZ2vLZqpxScZ13DbCYqe53bPdJHu828",
  "key39": "24s8inzhzc4a6VmikfV1ucd85hecM8S9K6Jsg4WHzLkbFbJbXFZU47vMTGioD1kX5dPSy2WduwjS8KwdGADFek6r",
  "key40": "3fnukoRB7MwB2zvvL9taiDc992rRQ4oAVm7NfnnScxi9NEwhYRxhy5vGfYPeA1tUGYGVm7JghLGmKdf1BKeBJz3E",
  "key41": "5BBZHxwggCzPwGoNPC9v7K64Hyu9vfqVyhRSwuH6pSRPxzFkpCn6C2bBKzytzopDmPuMmxmWU2AwCkNGvcTLRhCz",
  "key42": "2bnnPAhpr5L2ZHg9CLPXR9CJnFWMqp4np1FFpgmQ9aoCDDas5RPmGay7NLb7qVnAW5A8s6wwQzqNCSKqubpPNgWg",
  "key43": "3WrDUUJbVevryUrvGDjtvT7PqD8XJC6Je68HNGPUJxf97UDBLkK3sEh8E69RxgKhL4usK6MA31BuuhzEQL35Qgmk",
  "key44": "64AhGZuQyJ5vegGphdrxaGSeSFa1WcF7Mk2dCUTgjHUT5YNeD3mBSbJyzrABFs1u8hhUht4b3ChfGL1NYYoPWcoK",
  "key45": "5eD8VXvMh1GRQf4Gtsv1jJmggS5neS2G2sbhnW8AkaWKZWV72P2rfun5b4JYaLVhdqWJsGnUBjCyC454YnPpaWvn"
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
