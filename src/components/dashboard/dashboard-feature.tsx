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
    "34EhtgGvATcSAqpJz9hDaupsVgdpfv57Ngbus89wzFwBbNKqx1FBBeSKaiKiwidjnMCDspXYPxg4sZ2iKf7vy3yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1PZNWEKzHa1a6Gw184xZzqCBw63Ck6qur463ytZtKehHqpLbeB9RKusK3FwNTSS31tFvU57HY32SwuD3LRvxXW",
  "key1": "5fhiadbFxE29mrqenB2mQkSTmZ18ptEAU7GyXq4jDpqS2XjJHGKQ2SSK4ftRcSRwYzFiXXeDCicKQP1bvhkhutJS",
  "key2": "4eW5372bsdZDGn9b3NNXSgW1NeN1Vu3PWgumpod9pip3Ggfpp9kpEpCwwWNecygT4wMvPn3NsomZikFN5v6HvMri",
  "key3": "4iKaqzZ7Va7KiUqfyfMpAeVVLebaBCLyN89MN14WWosYjKwqNVZbQLHixn7RNP1raZrs6c1zRhf99W8awquDEM3F",
  "key4": "5sRzFZqXEVjETfqkARBxoqbpJeRmvyvMm6M9a3NxxRrYf4sgj57oJgjb6FKMLQcmdpjFYicqygv24WBQRiDjVeSC",
  "key5": "5bMJfx3hGjyfmVXzi42uPRWBEcZBrnNPhHTWjAWNXiUYekSXjkheoJeEa97tFqjL2swnnmAGc3Z3BbpsXb9KyMKJ",
  "key6": "5PoJv7o74C5w1LHTBVtjrrwg2M7Hrsm3Njsw638UR7DmstKUgXLNcENxFy4jEtwn4pu4sDzcSgE416j7RJ1VzguL",
  "key7": "2kcjit3UZgqw7YY9Ks27vXMT3oqjbWzriQwJXUqJJaQUPyovQPBt3HBKNuXUewP5yZ97iXzdLTWNzzv3wLdzUTFX",
  "key8": "4nKTV2hEKq9XAuKsJ7Hu7XymetFG2gxwozaSvbAfE8uP3uR6FDmkSo6vhYufCcPQpn54fuUedCXpjH5jQeLdFDwW",
  "key9": "42KfJZ5hSUwjjbS9955oDufiZnkY8Hscx4FJT9CmXE2fBdFUyCtamHcGp8aNixhNAP6hfHdefEAXNHiFH85ueyvd",
  "key10": "3ZzRTiCPMoNWyjPmcz6XBgWw5LLQbPRvUNq1wPVGiQB7SfQ6gqnjeimJjsijYw6BWWtuzTwBE33P7ZquejXtfFLs",
  "key11": "3i6hLDufu2MPFMPRn2BGBAxmcCCKahah53gDg8LopkHsVB3VGMeFZm6ffSPWHQqXVdPe8kbYFTrX2jdZjqi75Cqf",
  "key12": "4BVAdWJQ6ajzT65ohL7F2iAFAgaje7znCuQrmrvw97i5T65hENujfWEBmk4zAGXotaKM5any7FXq2F54N5NgBwxX",
  "key13": "52AAFDv3pK7SjGBpdxhaDh8vQ6L3d2sKMWtEvnoHVQ6mqs7sqs4kN1iMegSjoMTM7c9dwx4y1KztpYY82iX8kvQT",
  "key14": "4C9ZBFTzYmkjGtGnaApBWEeTkHFiBGuPjvAG4q7y93smhR3cCTaTU2uA9tnUDosTrx47ZpM7sgxacmriMsEwPCa2",
  "key15": "2kDva6AXQkXXqyKPRRazLsW5t1Jvbx6oMibwQiGS5oo972bc9gCLmr648s2T2omMfNtdyCnanh5RNFp2hqZuGBUX",
  "key16": "5tdr8cXHLVG5ZZp6e8BwwFW5a5NHVascj3wxd7STmY7bXvA11J7bunrX3wKy38uHpS7wepFKcVTPM3PSfNPwDuon",
  "key17": "5bfi95PhgUB6bJMWHUfQwmJkYHqe9iaKsDrp2S2vUaHSGsnWVKZ6TsVkiauuK82Lg7z9Htfqmt3vyKuQ35BeH1wr",
  "key18": "5uQjSnQgKa1T1asC73HA9A5vcyDcXAo5A8A6Qp7UuY1SsKVvE3D8xeSQvu4XR2dTN1HcCrbjxGRme85zkKD7f9D4",
  "key19": "5vcbQuP6L7uJFaRfS3voVHxkAPtfbBzTzg69k9xAKdp15wAz6dDERzTHbZaQmReDCWaBNCvLnvntUHJwr7NNFGqC",
  "key20": "2hnSZrTppEUQkqKV5Jnf17K4bPPiFm2FXPStF4X82SA1KFib9TjAWd9njtP2xpVzBK99hsY3uN19ZzDaNoMrUCWk",
  "key21": "2VCGZjdAwiGJLpVKtdycFQ8k9QC6beqyAnx4oom9Sv2ADmufxKEyrLSbQJqUr9ExYMFQXnh5B9FUPkkZ2jv4NR7K",
  "key22": "3jVe75VNaibNsHhyeWPkzPxfkGkSp1CjYHB7Ye7rWYHkAKDhzDbn2RYxmgQaMFAhkKMVdTpYM6VSiTGFQc5T2fJF",
  "key23": "3xFdjNnGxJgUmm3wZDwUbab55xeb6tmUsSHdtfoePR7HzkUagJqPCPynjF826bmocsExPfXX5P94dBrjnwHDTBaC",
  "key24": "3yjrnw3ncECYet16Xi6ykVVGYLzuEv6ryDDPSEHgjyDgZCFmuDrnru9yqbQjcg2GTAghPt19RmSyVP2A1b1XbsXX",
  "key25": "hzmDbw7gLLM6TuBp1DYtQUQX1T39KRM4GJZRHhzyMcVBdW8H4JfdbqhTGZgT6Ct7EnLWwVVxsd9TVBVjXHaXPc2",
  "key26": "4NCdWQVDUmrKB9GHDtzodt5SCApTS3iSJhUMJzjfzMUPHcH1aDcwrn6khuz7BKq2d8Bc9rPtkHbqJFfRGYyWwMMD",
  "key27": "4a4CSXfkSnYFgUeFaGgqwmDUJfmUfV7UoNRLpwzecqSFHAdJqTpEaQ55CnUWsSfWrUEzD77xjijhUj6RHFDriXYf",
  "key28": "u5pPtiiSANkuTRPrMcFrYNCbVwQxjQ6vpCep16P92XWJCsGb5kcuf6ZEE8nb7uLR7Ve8gHzepbpL5aG9eL6bcHJ",
  "key29": "4XzdqyLpWHm4QKyya9ZjGZnFQDbX2hHtY67WUNmpJfFJobfVS2cksJLVjAwdAxSG9bTsy3HSTgjvg98tbzuofm27",
  "key30": "2XgncLV7pnZi7LPzyaLE9o2XMX8HeRim1Fg7GpB1X9JRUYi6bcgYQCgVQr9RZqKtviefHrymQ9rYs5dJEDrMQUDV",
  "key31": "5XeWDMQYY3C7pniL9L3YFYNqYZ34gtbuSAf7v81qEmuxFScFf6dATXWqHiBzFTZDpxFffaV7mi6g3VW1LG2vhry8",
  "key32": "3GP3QXqRofYR2wyCAk4HNctTZafLuV19j6M7KTx6bAkarnV9ukC6iUPNd4ULn3h2gBZQquRRUyTRMmuKSNXskTis",
  "key33": "c9uW2JHzkSFDjfMKix68VHHhmQTqvXb3FFRiT6osxv1k33ZAjrxDn6P4Pk88jYCicvZV9fsPcNamKqG37pUH4wk",
  "key34": "3WD4jPyPPDHDJYkhUNV7ucWKCc92sn1P4suh9KuN6VzFsAivMRDpHcRbX6YJGm86TvwYcr4w4JeEnBC6gkRUSPdb",
  "key35": "4MjXfbKGN3UaHNGKKrPVAcGKQfhVvXGookxjFWgunCM2kyxn5YptqGpXgMsBBQ1LYxPAvGmRNehvHM2qGCW5fkXM",
  "key36": "5jWdk8Wh4mQ5Sc1Ne6juygk4EgSqSARt26XZ345Qg7yjBfzuCAJNfwgg6RUwfoACk9RRtamgLi3jGtCChWaZXj3R",
  "key37": "3YwfCXsDpSz6ohBLCg4rNKaUCKVz3bVcTCxTyzDXJ47265coGBoVFYB774ZvoNCUr4V42JQsUJYgkhfS5aEuPsbw",
  "key38": "jzvvr3odFwTuXgkCmRBxiVHxnaDZ3SzsYHM2kPYkUVmE1BEz1Wz575MMYaQmVWVGRYofe56YackND8xiswC7eUe",
  "key39": "4pJrN87fnaRML46jTC8S3Yp2wUAE2KE4xhwVmgi5QbqMTVoxxcDQazptfxDSX5MP2ur476eohUDutNN63mcZbpa9",
  "key40": "4kT4r3TcAs1dDWAuTrBMRBWjQXDSQPAKobcoq2yqvo6QghksaTWrbM3WnDXJVTFAS5wVwoDsYGmBU5QL5vKRZanU",
  "key41": "4SHSaTHm2FWKngDKcaXHNVUUobkYAwjrkqpburhyQX4vx6DTTqkPUx2oAwvxYjXWEnfn3E77CcWnY2W4D3pqsMnS",
  "key42": "3pameorFJHJXNbhn961hcH3NFhJubeBUfiEVaYAZWYnbTPzDpdSJf71R8Qt9HmcnF6DJLUqS8ytXwLeRWKr7VzSD",
  "key43": "5zK1JNjD8HTyjSoZpVJmSGuJiHT63AptEbFH1cKq5gWXmhygJNFXYXz3iRyo5u7AoVUPJSzzoocGSrpziwXXo9nW",
  "key44": "JqVi8ERRbhEHt4JgR6agk8KoqdYQNEJpTjgVVaxPUvqGom2pfRxKikfRy5eNjiQ5prSJ4fkAUwPVHimuc81TG8v",
  "key45": "64pwC271Kp31fRUa7eQr5YVttbAmRPrLj8fTd8BL4BMQP2Tfk8um7i9cqVBqnwgaR728qAfpWYeFi4s2FjUCQ3R"
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
