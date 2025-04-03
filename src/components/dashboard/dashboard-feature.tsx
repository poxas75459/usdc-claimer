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
    "2BuokRyuZHia7TP7NhJbQQSeZszubWXTio6YGzrdESWek1LHj8k36SpmoYEfAR1kUYXhHbe1mrBhfFsUVEMqKJyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6rx5GF4mXGKkc9xowgqLKn2ppFT6juCRM1zh6PfDHeswxzPG78uAHxSnfweDMeq4MWoTe8QMA2vkWjw2fMyDAc",
  "key1": "3qNNRCGSbo3NvtwdkL6aC4hbPkCdVHJ5TyzPCCMaoDeqyr1Lp5aGL2Vmt8uBEe87GPkdvA3NBxVePE3dYRy3VC74",
  "key2": "5W7GR8RVdQbp7VL4Wi4rkXPjud143WVi3pgnNriPBYhZjRLneDi2U3ctVmUDWVmuhPUtqW9k5Y6ZV1iCpR8Q83mf",
  "key3": "4u1QGiKdF9xn7y8BMhAt1XcCjbprLxSnxSYpy4JAMjmDUzebFzeC3GhUsh5kemJBErQSDTboHP62yUKpnTh1kwj1",
  "key4": "24c9xNLRw8kUkQzgJt1VtVdx7WxXRLHs4R6HDTTxcUo6H2AxMsrYRTF3Dei95rHEEoFrRMy54JLQDeFc8bez3W6g",
  "key5": "QYZaFcgMCpX2Ap1npGbpoQg81Z6vQbTvavVTFrYWbPiVyCzYJXgyjaegMkyVTMs7qG7kRQ3UZZgatz4CL3snsEJ",
  "key6": "5KKNBeFYdwGLGWKqGrWqN4us6DJ9NaQ8TvG5JXeAZHCY8pgb3bAtqEAAKMGATEjeArQjULyar3GudQT6PPb6hgfv",
  "key7": "2ueNmqoNugeqHcXFmvN28xYYkT26XEXqdMHsYi7MPvygYbNstXcSWvVT37cb3erkwuyhJtvoznN2Ypae68x4KG17",
  "key8": "54tVeZB5h9UW1vwSw1Hnj7k65Q93kKYAmu2yVAVgPrqaYLH8UrsfrzniniNuBxiTUAYamBA3jbr2Vh7Z8DktRcZN",
  "key9": "4Npq8JAX6AP3SmxAjYzuaBvy5Vw5UB3aBtpuVBDcKmcBwJ4qscEP44tCDcXc7D3Mdz5XT6Lg5XLLs37PJRQVm5mE",
  "key10": "23YMcMtnBoudBGeDjQUut12s8A633rnZg2iDeASPe8kAY487LFPAbEa8GuNZxeoyT6wqZAetPFmsEdrxvXe5r6Zu",
  "key11": "57178WQuWaAxJah75k5xm5vV4r3pjh6VzvQdLb1HL17TxUfcSHXHr3pGZst1mS9jUyUwdcNfr5zVAk7z87aiS5Sm",
  "key12": "2hBavLKXVKo69MUX65GEHUQPmMTFCK5ppPk5hzVQ67iDTBFb1so2zvXTnofAQ4Hzv7HCMatXQUvzgtqtDLwAqPgp",
  "key13": "vTotjXqV9GFNxW7trDGj7adE1miTwCSZtkUfbY5iE2qjud55Znnt5mgrHyCDm8jRH5FZj7zQbMmkQYBBskCfDdU",
  "key14": "3MZRHtWk3di2dgjYybve97JQrf148U5wHNm5gNfBCGvzhXPqMSUdYQ55GmYoKcd8jzLTvZ9GBD27LYZ4CYCUoFaM",
  "key15": "3B7VcCQfnB9dabCbDBWrrMvb6tXHbENbGvaBvYt9U1zgPFEJWbakwBAmFKwFqAgdvYdtMarpNhViV2Me8rJhatvZ",
  "key16": "4FknZ9ptMbRjC4rUbFjRwgopQF12uZM1ex1yNuRSN1aac4Ge7DYKg7Dg477oscB85QHDfaXhMD4sz3eTYNcWGhNq",
  "key17": "2n4iHx3UTQ9fsEeTKcL4HNvLtyLEv4DYneCWdwkjENCiAyPc74Dmh1j4DVL4AwppimqMLah1B8dXeSQRaM2kZMum",
  "key18": "5xp7ZV8Z47bJUscnfmo513JEoiLxjg5cDkhWhWwTgBkXomuPHPYHkPPrcbWH8jn7VQCW6dPAAKShKdBwncT7yNds",
  "key19": "5R3iqLcEMH5a2Sc37CajsRFw4RseYRU9NSdeYyKU9GnyYdvF6JXDycjtd18whvhwAtF9f9voV5Eh3CuVpmQqn7y2",
  "key20": "4VNYuCSyZTdiDwRmVj1RpfqX1odwqzYDVwbiFi3boiLQkzDysC1cQufJsYGbDL1m8t47UzevCjCM86aj2guaA6C3",
  "key21": "62tKFMk85ubNpxbFts5EDLAgDeG3mLQenDk4dijtrrfg9s1HRKGubqgsuNXWaKmpR3jH3cbTaZusMisxVPGRnQWT",
  "key22": "5CgHWKe6PABjVX2HFHYMUsFFu5fACz8VAGgb7o9qYp3eN2DgZnLTbR7ZWvDGT8kSERp5dyhpXXBBKNG93rhWh86",
  "key23": "pqJDgvAmsSqmMa7CYAeCJxar3cBU9Mi87geDT5DYwTnfdqFVfVCDaKZSPmGbHgbEVvNKk2JB7n7wKoaemLKCkfY",
  "key24": "2TPzaaBzPaLyqSTsQXwKofu7s8CHjGhJQNRfssyp2eFca2uTchhiVCg65fxtp2jyJMFzD3DRJ2HKQv6hYNCHLBcb",
  "key25": "4MnwhxFYAdNwCs4c6HCFgi1wcheo1M11hiGbVtm1DysUbQMrBtzYfVUfTavZZgHXL4yt3UkGsigBxTUS4XeCMxYu",
  "key26": "gMaskSpCowWaRWe9VAEGun1rxUrdxytX3zPph6yBJ95de9aWpNW1aPy5Y8uZEuUgKjGNJssdppcjjrxuLJ5JmBW",
  "key27": "2M4GYA3fa4pUXnm39boZq5KK445ABTW6VNg8qwCQtRENFFDWsL1Pa9sxQ2fWvH9mVMbBcFnpefXUHuAF1uzE1wdm",
  "key28": "2msNcgbU9aLUo3JD5EQv9zWg5CGCepJHEStsNrqUJ3qbat9p4QToAUzaeAZcjahRZW65xTt7KmWYZ6xApbKsRW1g",
  "key29": "TX1n38x9Nw2zf6th3ASgQiEx4FhmbP7NroS46Zyxoz3GiqkDX8HNLnXy6vPMPvkffWvJcb9oQ3fUcQG7jdHU5ye",
  "key30": "42zPJwojY4kp5ZvHdXEL7TJFxxneL7D4hEfgn8mczZQEgqC963HojiuHHmwE8AsQaZGBUYLj6EHWopPjRycDMJPv",
  "key31": "4pE7WNJru3Mvh8KJQQqMNEB1W7kfQyVstH5u8zcUdzJcDJ8qo66jbbx76GW9gMsVyvgVdg8nwr4NAwsJY1LqAzpG",
  "key32": "kKmxMGEXkfFAMWcwa8rAZV35sHrahPgW5ooduLcNRSaxd2JhU6ME5Xb7gL4kEqvaJBwBnoAsFcLxNBN31MUs2Q2",
  "key33": "4goDokQSB9ySoVhK8DxnmHVV8LomGohkdpW34eHsk5ugeJdfD8S88HGjs95rVnJGeee9DQkuwffehrm9NdMfGHpz",
  "key34": "dr7tXrrckH8DdZYcnuBdduoid6cw4EPQDVfo3pazxjnMzk3h2MHxSWJm3r2iKs9n8fyjsX4fyRjwazRE8rrHcjy",
  "key35": "59QQbPCnAQ7CPJT7ZXfXoKDehoTXmwMKZakXtPhdmrJvBkNaTMjBJBH8yJjHXZAgthYqt1HeCPjnbqCeP5P5KtTf",
  "key36": "2AonCcmuT2mtA5nFf5aChKLD5qn9gv4fTG4pd2o4x91aEzJjsghGWoccTaX7KRa9BecWZsHVB18p8gk8rRfymy9Y",
  "key37": "51rsw2FF4RwzJDtgMtR2r8XyewUXzcgjDh4vyckuaBfTtX54V93QtgwmiC3FcnUSprLqcKgJZa8y7n75m1mpsQDA",
  "key38": "3ufPFdZGEJtMDqLFXerdcxK1mY4DVY2PXXdHePhFtu5xTHfpHJx7NsTVQ4YpPsdaxxmhEF65qWRncg4dzdmheFtG",
  "key39": "2ocRicDW4EjZX37znT3yKYiDQ4vwdKuCfadfKZaHWC9GHekvtTc826ebcvxj2zugTrboi5N2rzgENcF3xd8HBx9m",
  "key40": "ahpJEU9Xje2pW1gKZyWnseUJCsQpNbVhHrEbAdWBBNSiBCEPP7hsUSfSSpDecbpjELg8xER1tK6rZVSH1p9eebo",
  "key41": "2Qy2Q8EZN8L938nRdv9x7716HpbpppuciNxgXwV7Q7wfnusia4245Huhzs5vRkZKJTZegV9mdjz6cikWeogLxDpu",
  "key42": "2q4EEaGggpGR7RkELQiM2cT1ucYCRytR5eAv1AwsTPykj4wfzMf59ZwY4Z3oMQ4ia7QAqrUimzYQNwuB5mygrVge",
  "key43": "4D9TU3vpQTbbZFfG7xcDPLEFk7Dd6QgYn5FJhEGuzV1nUPZgg9CrKPNQM1J51JaCYqYqyZzm9JxhBVZijrjFQCJg",
  "key44": "3jBWE6d9YeAFJzn7mpxdJjhbL4wsfG1gfgX6Uu8DUs7iBLtuGPaaw9f62Lps3RKEmQbrfz8xE9D7ShjqeR3WkGE9",
  "key45": "2s2LMkwr99obFueUgPG6GrEVXTNNzyoHuoCMRoFKUxw6fqBBjZZvT3f41BgnCkkSQ9qiUbCHHVR7JCSjCQY4BuzS",
  "key46": "4M9oYj3RAnk252mxVoBkEgyp7hD2np1Rm29uPeUUPzMNcENsBiZWPTVR2cY2LCi66s6bVkVPEBe5tKXF8dHi9U7r",
  "key47": "FWYNSViN9z5soyZDEt36bzhNoy1w4rJYetdzUrMSPGcjZqgetp96BdXSo88fUGiNLcCBNFKv27nz954C4RywM3R",
  "key48": "Lb2Hz5ux3KgfNAVJo2TiS78dA7HvvqHZXa5ykxwFzWknUgWib9hncgQcze5ztyAqYpqXC7uLjhrkotWN4FemLZM"
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
