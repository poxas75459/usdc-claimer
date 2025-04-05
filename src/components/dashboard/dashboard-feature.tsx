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
    "3hecU9iTEKZqT4Z3ViLfofuAj6EDbGdPWmRdeMppLoYdZP4y9RSFfhe2JeJre5GLkkcfFueyBKNuMz3LriJptt1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6CTgpMY7YJeovp52Bjo9r8CuVRjrXKV4P5Y2wKXpSiqv64ZrwV1nvzteWxmM62j4qvQ4kPEyTjW4JRG8Pagc4u",
  "key1": "3KQ4LEZ466UpjwH1DQVmj58SXAyMUKryVMG78RHgRqiEqAkfyFZuQJN7vGh4DSvSnMkHZSXwH4CyJjb27N6gW7gq",
  "key2": "54dWZ1vbx6KBxUwMyZTZWYd83B5RGUknsvTqpHBypukRuH9Qs4F3VqU2kbjo434MaTkye2cJRHMexBXMAnLEL463",
  "key3": "4fjv5XnDkEpb7duKGB4aqgMCrr7kXY9QVz6WzkS5NeTXdds3LWiF9c1Td4SByi89pGGkEbrJjADiCPe9RvvBNCX3",
  "key4": "D5zxx7H6fGCMNwgrh4idnAsgi6kE8JznHjvSTttbjpKKuqkXXWy3iY9GRcWEhxkhCfWbVxhBpG3424kDYkjUTTb",
  "key5": "28tBaRMhiNN84zNHsP2QMS5q3Jig8rLjpsXj5Nxgdhtpx2gHnTQtSWDC53YRRWx4dnhsQMGaJuy4ZWa8eUivLD7R",
  "key6": "2MKBeWkArBDMBUMXJxfnDkwuXNKP6LSQ2MCzWZuCut4UnXEzZuBDycbnxf6nFimHsSKcmVitnRajbZjeXDNzqPNU",
  "key7": "58JR9vj3afACVyUaAcZiu3pktAXs8NaciShUsVSsgmnQqVqWtRrtKp33reb3iRsgHyVKPP19MX3wZ2HHqN18EpMb",
  "key8": "4RsrC31z5cTqsyJwXroiz3mUXM98frd6NFHMuf2dQ4LDa9SY4wSRs7mvWeecuCDjGkSabfXQELVRf9yvcnGBHz2k",
  "key9": "5VsHFFW7DkGH6ZgnWuhv2eBG1CdZp7dZbJERDmNpkudAV5LVHGnTvsRmqaRXZqBYMwbfHr8aauEcxUn4jr6D2Fgj",
  "key10": "4y9zDPWjXgL8j5nYpFd8UZrKXB7f1JfFvEKjjZLF3sNmoqJtyGkWFG82fKT19Py3voi8HT9fcFs17p6kBhfQbn1J",
  "key11": "5KLLpj3W4oKEZXg7aMuLAfu2zWnqn1ozkrFwGikWc3a7uCSZXZEjWYCmjCQ27f4rpvHt8y3wykgL5s6efpD7nGkF",
  "key12": "42QHMUbBG7wbbM1omeMdHEEZyJFQWyPqK3hK7usPuvtsvBeczw5fUq2Y5gcyvCn41EXUyJYZpiKVNXGCE3xX4Ua4",
  "key13": "3KgBHzLapm6EkmbQ8ndYBS9ckzFUsW4wZrTDQNbsQyTzWubpwXwA668rTXthVrkLaeYxi6XyUgTPFxjQGZexHB7x",
  "key14": "25qJZXooyWUxYnCYo1dkcQ3hbFV4Tp7JAgf4xHrfUa2Y6EuT7pR9T3weHpUo84eem4WP3zxTa9Frs7Gq8Zr2imSM",
  "key15": "3WB7PmR1HpVPvVnN1gCHvoz91uJ82k9g5SzySLhreWXDoDJHkDQ6NrZ3GpbfvHF5vD3ippxtRxQhrYrFSF3hvtBZ",
  "key16": "TSGrDhVd9V4kzPZN9arQk55trNJgKP12iDXWnTcGE5G69JYqo7cncZcd7Wn5tRAcScXS8a4q68rRCdCLEGCohqg",
  "key17": "2qt28rvYBpxS6G8ohopPdSfC8PRvo3sof6nP2UZREzbdw3Gq5VXZcE2cG5CHk1aBQUPuyvkj744KWTNrKP3ZGtb5",
  "key18": "61n7acGLTnKiXjWHG5aPPv2xZFnsgkNfFxCjzfZ5euaxr2fd7NAyMc3UAwJvzzaTsEczAyLN7upEoiqNcZxNufrj",
  "key19": "3vJxy7X1Em18SEznNbkTA3eNBJB3KyBcnzxTmmCMDQnz5iMW5Qs9tnroMgvKtsQackXX7gJUV8sZxEYP3u7hjjmG",
  "key20": "3aLqs37a6QFQzhQ42Vj3dC3JLBVsHTXKFRDPDfemWk5V5qpjVPq6L3tEoCEtDU55pJbcXgtGPw1pk6CrfQ2BVKNY",
  "key21": "47xCkQhUpJWwcCGgzEf5WPM2aWhHiXZeyKxemMua8agdR4EQdJpkUNUVobXChWXXtMy3wJpvFAYyVuCp1oc3pxDG",
  "key22": "rQWxFcfT2KQrFsp74Xg1kvKovmdsrmFjKQ8cGLqcB3HzRfpeXh1jFGM3wT97jjAq3DS6HMxa1s1b689CqxfV5oC",
  "key23": "3THHPBPcVQdTYhv6TEwEEuFovmruCH9Jk2jTcjDcqFF3aDnExBRS5hKqKwqEY1ZV1MidKW6dvV1eQJBrk2GHmHb6",
  "key24": "3Cd2UVqpqRFVih9ggsX9CwBk5YPMPEKLjU72CW9X1vdmfXBSpuFECuUbLqysVrYDbyTZqpaeKd2vBEjYroVvEeJS",
  "key25": "3wkvb8VpCtJXptPsco42gRAKyoBFrcyXkDMeQTsHo7dSJEY85Dbr4qm43pc3hC8nkEyfwc3JZ3NN5sdHoLfJNeMs",
  "key26": "bXnHsZ1WAt1GG41BM3SKo1DmPTDM7QiCeoKgt17uWKSMhCZnD83bbNnZCUffdNkzqmFi2taNeAAZfAFsFD2GQ2n",
  "key27": "3YadEThZJ22WfBKK4Q5kVMcsj58ibp85WUJEtXRtSkVkgo4r9H5nL75CgRM3avaGpbzvxXYuJnJMYtHt7kC6SqcU",
  "key28": "3XPSDWoype5EPuJogbXwJpR9qCVpvC8uVENRro5u1fQwbPYh8Xh2Zo6HTFDcowPUtEpCQjy1EcRUEsTCkNqd8iZL",
  "key29": "4Kr5bQHUMM1bjCYLgkq3BfyqNYpU2HsNcQAx6gpR2uBZeXoFwXxJLJVTWq4jH6gCbTVbj795bSsbGj2KdHZZRJhe",
  "key30": "4xRXYtCoCKP8ZJ4KYmbNU7mGSgj3GM6DkRNGv1MaL4Vp27ZCUpsvvmnoHQpg3sLp1c1Wut2Yft3TvjTC7EDFnFJo",
  "key31": "39R8KkbPscH2dAsoomibw7EDCyHE9PxFbqaxErQX5vKU6kLZqW25AzDuKcQMPuFeGxTWECNvspwdqryHNHvrj4nP",
  "key32": "4KQyUzNtiPh31JbthUjUA8LRffiV89RnYmdsjTmi5XDxmgiGJnrSC3DQHYgmaKXtCse4QP8GKz8J7n1BDZpHQLyo",
  "key33": "LdJHfHjjmXZfmh7KobU7HhpCVJDRvyqMw7w6bjbaYaUtwFa7anpT9ekeHbsN8nXcpfLmgDd2jgWVmqkzNUkZdSA",
  "key34": "5HcsLmr8av8shuY8REgFdgkknGqkepGwrHGsd5FsUstwokXUEhBEdzdJCBSnm2tAu4TffR51RyRngwTnTX65YWfy",
  "key35": "5Kwa2KQ7fjsfwWiir3Uu3cbdT4X3hurK1CU9fcnnUC55brGcQYzdMmyKC95rHXsx3GhhdTT9L9UpamYvrz29EaZv",
  "key36": "YQ17XYZfwUGu2Kjr1xVzpqPKhRwaVaiha2GDHWXg97dEw78VhEQgCUFeNisTi3JoGDCW937ZmKsCK6huAXvjUaR",
  "key37": "48LeMSR8Mas8WP7MXn1bs897sVWEaF6J8Ct1HcNfUuMSFKxT7AbUX6aZgGTcRoXi1jsNdq74MW1qXjL6px3JuNDw",
  "key38": "2rwksdfjPq4jBSqnXfbuzeJ7MfXWmMMpvej7HR1nfsABoin6DtVwzYjz249B9zscGeomaNkCKEXy5NfSWtGiLtyZ",
  "key39": "3ckQkNx1kCSZZAb3azo66nmYF5pz2n3umnde79CurdcdnNu8PNAdrgBGkQBqthSNHF9YMxWjE4r9Jzy3xWbt4mgj",
  "key40": "4EQ3dekdneQ97SpSEC6yMecpVZJxRHaMk1EnkusrUEsnr1K9y2QTfiLEk9ZWRUSXXaEvEKsA9KEQWVHLJKPJjb66",
  "key41": "3yJM3mYdTo2Ge3FZwvG51Y6mbs2YdBwDUnfw6E5LKDgPiSWFtxJAfBYoPQMjZEficT8YM694WN7tPjbituevoTZH",
  "key42": "5nqMyJLchxP4jcnMd7BCPEYgL767tpcTaU9cxfj99YAC1pvuN7kCAwXG3FTE89q6PTr2Sdf7S8AuL3aQaF7ZTjKV"
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
