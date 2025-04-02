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
    "3ejUaWJcGpTrTtwGeSCbkbwXArfMMuehKttN9AswXAmcPMZzNwbFfYB5hyJQy483ckCgwZxK3cBGZYVV35tE7ran"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsbwrkYvFmvrZHQ8zbTigepCVmdhY49Lk43ueLdc41Gt5XgWAmbMSxdk16Hd6frHrLx3M2auX8PZopR3BuZhfVR",
  "key1": "32VDuYCgNiVxcb3icWaDLDyBdDezC5KLuHPLUoTXTNGjhkkTr711DnszbWPr8tvCqHtTQqZrNuBjp1PNPJp6c5p9",
  "key2": "gNRJZGpn57S9rdRUMyjubEVTFeW2Zygsbs5p3rsQ7h2HZrwRGyfeQTHN2hQHhwQgRN1BcLwh7SQR8K8xBREGouX",
  "key3": "49txSS5eAY2ni4bVrE6eJt9JvuPeqWEonNG3knCr9fUScJpqKtJHwruFZgvKXBaTq9ohSB5fZcew3YNsWMYmdgwn",
  "key4": "3tuSnMj6azsVhEQHZKBUuvqvPuQtwHiJVziKuSPLL5gx2fxHhEPSJ5sPSghFRMeugsKbihZ2SCVfVGkLMePtTPNY",
  "key5": "2sz4Pgt7xoH4CmRwEHfwPy5SmtGH45CJAmC2HTNEe2MgSdaG17ZYrtSdS5gHZMrF7KQEgaLJADxy4PfpX5zza9Zw",
  "key6": "zpLox7nHuNvw8vWHiNH98Ly9Cir5to73N4v2f7rBD875wZZ8nSHQC83WBWFp1DiW7BVGduhd36nJEQCBNPfiUVW",
  "key7": "3XP4QfBA5pk7tR29RVTxR6ycbDop6Wdifcega8RbtZmgHoEoDjEh4CAf2dm7fTXkpYHsZ6fee4iZZtCXFgqrxH8C",
  "key8": "tfYZuGrHnzH8c5EiukUDvGqEUVyDJ2oG3PmebkPmJ1tnnuMedL6wbhymz4H9gcWygJKdZLtLkexD2FVAqFh6U4e",
  "key9": "Ch2aKCS2XRFzEBAvM3T46EbJzTy2txw4PHoZd4uhxosHFgd1C3HFZuooiJEobEHWN7uz9YmxWrsmnyBU6Nb3Qwd",
  "key10": "67c3n64cFC6VmgjK5JFBbb6GnnNw4VBAtV8eDBtK9jvAytfqbQ5ism18FgzHnof5KxHFqyvzHfxCjGyaGb47ULdi",
  "key11": "46oZafKSgn6DErbRuixYinSBupYKBm5mVFtRkTKgJj4H5F4Ufm2Wm4owr9Fiw7vHQbiBh85cVTptBJbqcmt4PCWQ",
  "key12": "3MG4H9BwvAqGc3hBnuJzhe6N73VhAJ5jxrdPxpnWqHcxn971o8bqzWsY4hK4HUD2t3TgutBNk6NruUW4XLsQsxkg",
  "key13": "A86y4EJzM2BbiwzoTbJvBRwjhq7hqdVQsrSUTx3BPj17gzvZEPVdALgiuKUCctzTFrCbgYVrAXpzQaA28VmvnD9",
  "key14": "5TxgtNQqmAwshNz3CdAHUhfu1CAcqQGzUm3fShnfE5AYeUPFDKuNBdVtm1nGEFcQxa27sktw2Vx6hgm1Dr9RRP9j",
  "key15": "3q7h2RVGvgXN3sYNmTuPcihodLXQphAjZfXA1XQWgB3tFET7GhPnnwhR2sW4muy7jGYMZVEnCwoq64GyreXWfYsr",
  "key16": "2TWGTQKpBZPNNVipfN5UgFSZBoVHRUc87rdmfuraRBCxEVfW99KVj5q1vqstwyfan3r1EC4ydEiEKAgwkwY9SQHA",
  "key17": "3zjseaTvmhv73zoYXi8rLMDTikCexvn2ZtWm4iLeHdKnAo4Eb6ngf7pHa5S2H5KFMQn3rCcqBCiQz9iAgNXLfye3",
  "key18": "2EWZmYhXUbjgyohZmLpqpZxCgVcuXaUGu458hnV5oTiGNTYf5z6rijmG2ZP5FEiCTDm5Mb7tXRy4hLE77zo2TkbF",
  "key19": "4ksH6kZN5fULqKDgkb4Jv1fCnxfKBQMPdrp45pKXi2znmZkUs4Fu4d778FrcVTLkMHSRPWgXeXB6aaEoRwWVzBuS",
  "key20": "54QCxnmAd3iMUNo7WEhKXUpczrNN4hjRcEqWrhkQ7rXshbiRBofPAG8BYbu1mGsrwsshP4hfSTM89YYLfYjNTU5v",
  "key21": "4paDk8U2QbKXoAXv1ACqCodFg3ba4knZVy1B5AgMiu4ve2T3q1ToHJL5JzAsEfQJAVDQUXyExrj1RqQpTBC9uKf1",
  "key22": "5HkgCnZjxAydAR532HiEm9xunMRCcwnHPAjueaXdzUG94R2jqo2amwsnE2odWr4aabupYys2cw33MeKTQcuLmqoq",
  "key23": "2CNpRzR3fkMi2jhTpXzzVq9C5L33mCLNQW81LGxU5evusK5zABKQegjRz9AdNprNJvwe8tRAF9oC9cpkQcMggZo8",
  "key24": "LBknXCBY5HRoDreT31r92KjSRme4LyuCnqKHwgw9xtFKyo1vP42HYQjUWrtWEUPWtk86WhUDbx333cnzWoXnW2b",
  "key25": "5V8Me7FrhUR3iq8BqdWDpgR4WYGqboePs2n5PyzD6qThT3f4zKqqGAoBM6v1YSPQuHAQv8g8yeb16G5m7e8FDRmK",
  "key26": "ycqVU8BSLWqjuJT6UNK6jvwaC4bC2iAb1AEq42NU3RMTNZvd7PbUxVSPq6JEe44DhtJPAbnbsTrA5NDUz4bUQYo",
  "key27": "5tWyTqLRQs2MvTojhKaaUX3hWzGbdfjYKX2orvSGmuJmWT5Y9xAfsLAWv7hJjKckDahPM9uEoFu6aT7XEEB1iV7s",
  "key28": "GLeoGBVtRKLAy3RG8yr4E2rBTkHXxCUwX5UejASwjDn7JYwXBCjeVhiUvZsLzmT4z5LHwxPRYY9YJnnWgVyRTvv",
  "key29": "21DTtTxuGu9QsdVDhquNU4kamugR6nPfw1XtSDy8F1QxQintaE7WhHXcudhfQc5ZzDwbUu1CrTWwe3Xv9Xeg5BSZ",
  "key30": "32mL6EFqGa9wsY1CkxnZb3vXuzyPr7hqKYW6eJFWmrvBoKeCBS9aHm8xE2dnQRmC1R1jy9paRAkPPmE5H6HLLoZ",
  "key31": "2M7hjGiFBcGnbwPPtBNhKJzF2hWnsyfjC4gyLZ6i8hiHNoDTWijxE6xhiin1jXoDJxWPyUPQMkKJ8a27VehsL8ut",
  "key32": "aeKNhKREEwMuKErJRPWBKHjmoM4Kz4Cs4mEz2trVY8gHKXgt5P72CKDT9vyPZEi2RFPbSxeMdZGJTqAizoNd1fC",
  "key33": "4Ux6asDj2FYD3XN3T63NeYKfDMBDuXf8upCdGxzbpfBcrjsoRts7zs416CJ6vb1ucAV8B34kjW6rGyynCi5bg8hf",
  "key34": "3T3dMrGyb26c3dLLhZNTUeFWEWmYPj2VhhR21D8cjpJ2yub7Wvi5pL4WCwoVWvFAb8NVah29NakVX7KF7CNGitKE",
  "key35": "2UdE2AtzD7pVX7qYj5xTx7cGyBoaN6fySZDvyHEev4BQJXZHc5esvxTi1zgQZqQVLtsBZzdiiEdjeKHcypcjifhg",
  "key36": "5QTHuhmT9xXc219riTujmafKJZJswn6CXh6gDUctqRN9HwTNXGtuVjNbGqrDgJshdFKssR82YViDqPMHM68cihdH",
  "key37": "3Cx2vuym2gEtXX6qJEYThwGFMzutPvZsmRGTfQAyB6yGx9qe1uJXqHjyZqwQgYQ3wv3MFjDBsuANqxZX6EBBnFPv",
  "key38": "2Zmid7HiLso1erxFn5PEYAQrP5mxutSHMuf2nn1fkt65wbgAb31657eJ2c9cVjkuungg6kN21qrXs8PZyxRmWsXK",
  "key39": "2phY8JhrEUdKgMaCrMt2GaHSVm6MNgd8iayCsTYoQriVJPGHvCjGmTpFd5mdFsVw8P4J8hpr3Gq4VkkF6k7mKu9V",
  "key40": "V7GzaEaPtqsPhUa4ia6k7tRCBZAg2LxQGfK21EHSZxx7wYBz6U31vVHYiTNJpqgJUZHbwth8kuQL3kveFXisUh3",
  "key41": "5whqCDH3mRSP1drgtaBZM937z1GzXNXz9EohLWxwpiXADqEnzZaEfcxYcULBPKm27PF6u4aAbVdykbfBjjkcJF7S",
  "key42": "2fjdq1vR8BLKW4qmt9DDXyRuogbcPEinuwCgVvLdoqLGAGaGbHChgQmCvY82PoVDnkhmR1eoxsZtbgm4HNw4Kzz2",
  "key43": "4evH2zqTu3B9VFeGSznqmhWRYSdm621fmnmdmAAPgEAPq2coBADAbQ6isXFdBDggTVWjSfhCRdBDBfj1JUJhHavu"
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
