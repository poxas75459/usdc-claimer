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
    "2f31ssutNY1TxhJYoXR5uc83BscH7WKxVtycjQYCvpvjgMKTn6J57cCAoQ1TK4QPrXmJDder5NTeHyfMYPRQxUot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPNRvc7AZxdU86gpUfJ4wJcYrBjzBDbPS8zxxay7YwmFV3a5BC6cdQhAEEGwtdfJPC9boyfkJuWvS96RyoGTZ68",
  "key1": "2JCJAazmfwxLTHRitDZs7zddya3maZFHW11pxngSyeqtdbkkFZ5iXT65NndgTe9afafNXHRWGvgNSBwhTxj79z6N",
  "key2": "22VXh5hXrPSV2U3sD1n4bMimBHKMr6SR3UzJ5wsqALaWnpfescwnKCmzXUwbYCvPae2qGUWyfQC9LhKHxL5LBayV",
  "key3": "R8va7Dqg7QYbd8h58BSXoWGHg2fsK2vJNcrD5kTR6yGQMVw9T4W6rNgmWGyHBgHD3GZMMApqBWYgLJUx8ntvVRE",
  "key4": "3pMFYpEdVYGaQBn9rvW9JoSL4w7gKzdqxQbFKbYDAingSc2fkDoXA1nXBPQdND7mEYiPxkbKfesJ3AULKJwuJmP1",
  "key5": "5TYp4H5gQxtJFRoBJ1n5X6bCgunrELcFCgqp8Wp3E3gUDoFSHWVquN7Pp7wiUEJQAVn8wPMjHZ5wELukeyYEbzZG",
  "key6": "2sq62JqKedHzvi9sJD554r6pihQq8LBhTxN8b9YiG87DcdLxn9KvQJF7cDjnAK6gEdTivYV2EThWHps2jLAeK17g",
  "key7": "4F3AsAgH5Dv6PZfZUgFECvjB7oBEokSQVkyMbv1gXQjzX3Uyv9HDrCDjQxSXvAM1nA6325Q3SnFkqRJN7umyooHU",
  "key8": "5kewKJDLsTMHRbGbgyA9WqEtCAeXXST95151upd3mdoC5jVz85yLRMnjaro2KesRqRQRwiRsz5PQ75ritrSrJTwH",
  "key9": "2KXuskq1Q2iR887p9DejaQSRUJbddAf4FhqHF4MJEAfv3nLzmHcmKHVQQpCWU5V1d8gbx8wY2QwVeRg4wgRYt5ks",
  "key10": "3NcbsuaS8vi4k1u8GCzCgfi4ndaa79XMN8CEJJajb6LJjxuhSivfaQQd9Dh4nKtzD5YTNvbrMQazDB5qDNqJxjY1",
  "key11": "4rX9ZwWSw7vGQXRaw6ze9XyhZz9ubwy13WDYohn1cDmZzmmUgqr4dq3rMSczh8oAtG4ztx59gDuLKQJdSwJwARdg",
  "key12": "5t8y8caWv69xwVwvcuGDJ4eVsjXxYPcjwdwHnzXw5n3zA2fsTE6vpDDKvhGRUkJgP2TUba7QMp7E1LrBtu2B1PSR",
  "key13": "5WLogbmKoyY1L65WF3KaitppxKDoEQjJdD2q1Sb6koAJMPo7ebx4wwMqCTiFGuU46J33Kx5oBkjfyvzhHoiRkAF9",
  "key14": "5ByrW7QP534e9VF4CmGNKbPiLf9nFW7AHopXtpZhsWyreRc7mKrgW1FpiydD9PgsybQbXo9jTu7Vk7UH5iNrg5ZS",
  "key15": "UdJyErYP6gqAfJwRNocCz3ZFhZAABiTuqCDwD9kQxYqXmJQBNLfPxAL7y6n38HbKTCkH5ptmha32BDVa5SU7Afz",
  "key16": "2B7Z6GrXwzmZUpei1A9i16wVJYcJXEV7ahaB7RnhLvs1JvBz6oGa1f2eA85Wvp46fUdCDjEzutYmLacH8oGJbbco",
  "key17": "sQp1ktrxBGBjytLScVkdatVxKQSVAwXf5hSZoE6rnre3itK8wF2fewBCgYKwZEk3H927iVGiVpsAKLtDW6eipm9",
  "key18": "4mfNFobhArsxox8oBqrkUj5bAmRjLow2jS3C3iuzS8HtEjbwnrbfDt42ZsfrrF78PUVhd2QG9WCBf1raLybURkEB",
  "key19": "2d2NgR4rTEU2hv7YyFoiSGbzjb5JDsAxWuGM1VLfznWgtwrcc1YKHMVBHvBHvFa91MAkVH9wRLP6V5XDdhzfsQW2",
  "key20": "4B7QQANBKo2z5HdUrqgYVHnar2m6ADxp7b6RCNFJEKVkMj12HRVqo3CTKnryR2LrDSYHRpF9MHvCbMj66nTNkp5",
  "key21": "RcGmAPAt6smawqK5ptG3Km4MTXi4N4xUSQdnitJmnHPrDXEHPhb1ay5TfLaTB4BDYEk1YweWGWJoUxEjq4CkNkQ",
  "key22": "65gkne6ctPinyX3aS8s4Qm99XnMtuXBw7QA8dvDcC2EL3pMuQMnsssapzrm2LUvArQGyantfX4Rv1qKAArnNHmLa",
  "key23": "5JhATUQ2tcC89GPo4N5vGVA3ALhsi6uM1UQnPTbUVBLinmHKq8HYVqLzDjH42fbLQZmpEvSMEHeLCG5jMuc4yxsL",
  "key24": "5X6rR4HfSQ7zGLSpNb4DStcshNupk12yjuAUEFrTRpQtZt1yiHBhdENmmBbcXKP7Zx4RRRtJaXoGsc8w9s9kR1rB",
  "key25": "5cADTL7GWftDRxJF52Ycfyj7hQGMYdrtLFqVQ1YVnXdVNZtSTbH9Zb6uME82zfPmYhR33QvmCwBQL1eXgJoWEVkS",
  "key26": "2ZW47G6ekHWLdwktjSZX95aFEhB6ujf4TAANUFvKvBrcBUpN1dp2ak8btMNzHzAbv9364QCKSbVLh3zAH5jmvoCf",
  "key27": "ZZK1Mt1HDfyoPVqnW8BCiZwMdkB6AansZspqDcCebXXj4PJBWGEH6S2WHcMfZsdPDBsuRUzwBgycNxfaayGW9SE",
  "key28": "5L4FKb4f14xaUJM9Vc3mcRkRMFXu7TNSoXcUNuvvsxvvGrskUNBoe3P92zzHKErs6T3mADnsxjPFYBCCWedb9B7T",
  "key29": "3Aat6iXQ5ZzR56KhKAGZj7ii6PdheDYa8C7syQWHaHkUSLEiuzcewAKYg2wQjo2djGRouBBxwHkaZpjgCXx1PvmZ",
  "key30": "4HZpATgttvnsMMD7gPCixdcFjKUUYhrogBavGJLmzDXZepGvhxVdU1mTGXD5Dp2YxaXQU3vENmg3akHKj8B9ytba",
  "key31": "4daBd2E4N2eyc5DudRQSwvY6FdusLhrhEnN1EBSz8U6wega625Gi35R7XcMQa7gKXVQFqmimSyyrgK2gcT9wKar6",
  "key32": "FakBvJa1yBs4e9o1NWReHUi6JNHoNzNZRXpJdg7o8dZbrddi5j9J7szwrjv13E1AeHE4iiXL1F6KemxY2P3XUf3",
  "key33": "33t3RpnFdniLW9TMVs5rKjWLFnJAJ8zWnBRx9jJcqPLzk8Ff2AxyX7JPEPqUS6ahbLnweRQjdPLkhFdYBEudk1Lr",
  "key34": "2qyPBNpHsb5Jkwwuuh6aNixS3yCHE5HLA3UdtDmtrHXXU1EtNsxVinXf3V9wq1x2n5JVkS5aYsf9PqK6gyacFWB4",
  "key35": "3bcVP7RFrfDdQhdydnorsSorwpGXq65TZoVHh2rQTaT8wzkn76XH7PVhfwSZv3ErCqNvWAkr3gHoviD1otiy6a5R",
  "key36": "fNez6zZRz9Z6ZwHWQxCnj5sk6EPXrXjFWLXpqbFT5TQYwMRpqRNoE9WeqLCZu3h5keMA351vA7Dz4W9nujkqSzr",
  "key37": "3SMAWkaDXEhU1MzePSZjx6KvjGmMY63mHXtGPeTPAAzJo2wccwE4KdcyNgQ1GkPb3Qf4VVo7WxGSTRek9Zz5mGXy",
  "key38": "2eS3jksfKMnswdN8rx2kJhNVQNW1wWCUNE5DrvLv6NG3Bt2YtWDPqL4FYnwUD3TbFgVUCCnmA325u33KmJu8BumV"
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
