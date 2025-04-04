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
    "4CXMVwBiwED5NnN2PDPHrDzSbn6YP1gma8r76PgQRk9mcBwDfra5cWCLggkgJdsK8W1DMLQDHMTVKjCgntRG14nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iv8niHMYGe4b8rjBzjWmorNbRRVHp9oN6GzPsePANGTcxbzqCuQVa3YNQrutrTc4LH6fcSGcNx3rUpW4N3dusc",
  "key1": "Ufx2HZ8FsTg551ZVVpKXjPiqMDwHjo1nHiRYtYajVrRsWXKFV9s3XV1s6KnHvqywqSHRvwePV7inGuHLn3kVR6a",
  "key2": "2vEgEn86Gv7kiuxLicsL8A1Yhb8b9H76KpTUcnpbpFDDA39ecTK1kytdpPPZzGEuK3xqc3iHZVGGuVN9HipnMqcG",
  "key3": "Bpji3i1qXhAT6KpHs4v1nymngZYWAMVRsGkfZfL7hM14UQ3bcPRsQxySJLfVqvshxjTqeWzEynFvX9s22KcuVKJ",
  "key4": "62iSnbNy5956B8LK9ASokyDWriyKf2Z3FxZJbLmjubmfkE7Mat8wT23eLyZk46PiKJ9ueHMMRt1RBoRzEZm5yB9H",
  "key5": "37GMNXhSiaRRrWFwEpiVdy1ZKvhtju9uhuNoZNCDBigM3uTn8NGfkwwebWueKUw6gTuLBoUM1QD1rnyyM3m1gZJU",
  "key6": "4HvSUfbemeZBtnxvGQW8vshkBGcnGe74hAP6c9LH1i5LKY4Y5cYqrGxyubMvSszjKhp8PQa9gTA7ysZEc58ZjVEo",
  "key7": "65QEsBiovyD4ThxzB26VrkSagDir3mHp1PbLrdWkSts1JcRHiebYjTAmLTZfjvdpqBq3CagxgUhZJqPmL7rNsB8f",
  "key8": "XWh7S6CHkKJkWavUQMhz3thVLMj9J97AbcP592HTyCXnCwAdrG5LHaiYJswdYUs3Yn2rqSDwj8xVaugjG1eh8ni",
  "key9": "2nDK2v7vkbdLKjLBnojS5xqrmPKznkCMnrff3i4U8NcEpsYyHMW2x5pX5J2oF6wuZ4x5eMmbff4ELzMcsQJ7EASd",
  "key10": "5NZkYJBayomNVrN62wroGhCpb7gnMx15MZSmNRvXCpZABmEL7T3tVAR8Y9QvxRwoAEeqBKajpbKHG5B5dYb8fZiA",
  "key11": "2VCNNEet1Gvvs5UDowbMz5L8b6obcSbh5nrpB6ob2F956aEhVEBHrhtg8TPt27u5g88KVj1bLFBMdjMS15nYi83H",
  "key12": "4p2Efk9rUF7Xvj1vU9rWfwU6bmCtt2Y1A2GG7GdGn9qgB9cjnLpHnYpX4wfyYConafZMurhNqZ5Brxja2fgREH9r",
  "key13": "5LkCgT1DbHhnjGdyyiri7n2ZFNrQRvsoy5xAgHyevc1FhTGeeVjfj7CanF4QoR9K1iU3irXbFZ3faq3ZNTYf9dXv",
  "key14": "25rMzu4HH9TZV6ahXiZSHLrSptYdpExDBdEDgiC7MxLAcExe7TG4bnff1DQc6Q5SytkthYuAqrxewgRUZAraVRf6",
  "key15": "5cZMEbsWjiNTxAGN7razVEMhd4yeGqjk1uxDDswuVsxmUJTKrr5kkQxm6wvLKGJeXePhbfXg6pZqtfFuBGPM6hDb",
  "key16": "G7f73GzKuUz5y1Y99tztcGykwvDQhf7mcf7iEmNXEhUYqrYmVno2mKM5VLPS9QtaYFNxyfm7HBQwwLG3YBmmeeU",
  "key17": "XFU5REojYzxwL6Z7hgqVFJmycTdtJAW9JxG9Xhc4PR75smPLE26ZbmM9RHue2qvrnCw8XtyYyicp4Eh47cusaA8",
  "key18": "3vM8367kwDCf6jGgWxgZ6oJ9bGAYCLGrd63tVbNe5pVQyU2e9Jft6VcTEbYuPaJMBPjg1gaWAoKBnpUiYWa9tGQD",
  "key19": "KcR7RpxSvbM7L7i8efYHTve5ztG6pKa9K5CXU2EjZkDtRTKJBp7oyBzwE51kdqfgBL2mwpKBzeUzsjvyqLVizR2",
  "key20": "5qQFu3TbTrzn2FogFXZgDfdRPgvusHG55VTS8dEN9wcgFZ9EczVrkzx92yF1ThxS38cnVSYtfkvx5uUd5jBRdM6N",
  "key21": "5BnApcc6Kt8wzHka9zcmo6cddET29bhE72fZMTrHxmNrvzgc8BT7jYTzmnNWr7McJAHEW4QcVqXhaQQfB7jae767",
  "key22": "4r5ZbNb2atjtpcFkcYuUeD8LFZYmSRZVEnKdA7ndkXSDwdAw4fvwH2iv41zJCHGhovGdXhV8UkvXiBQQFyYamUee",
  "key23": "23Jt9g976NVDcpAreM7r7qYRNBeU2xCRUQaMBvPJBepK9W97sp3VTk4uq7pMSbe62X94t3RXmcL3PwJo92gf9DYW",
  "key24": "2M2dNtyCCNbWZ3SKUf9r132akptCbnWzbg3xmkuPpU6LPdxpi53yLfFJNQ3uRfG68oTYPU9j2a1jibbuiEPER9x7",
  "key25": "3y4KDVXca7gCS6fLSqTbFUoeHp7dCVnuRyfrjMHnvNwG6oWnCSUENBTWbMMo2XWUbaggh3kgTzJHaDVx253TnGTD",
  "key26": "qzWRaQE3TUKgA376UMp6VzHvvbpfD6Fm7coD9tPpmF3swpEs6RCXYLUCokQqsbkGsffAUkjPyq4w2mf2HMAPKET",
  "key27": "4MTRcudr4A1ebZGyARykc1JXLUfS2aqbDDhoqRGJh6fjggwRyp3syFupnayNHHbJkMSgyA7wqJRSy9Yk5ZoSVah3",
  "key28": "2ZzPUc5NhSgPpRnHg9meRgr9Hb8ga32U92dJiEXodergERC6j5zxbPrkAREPkvEjpnsv3ncSwekbRnZZ6AdEjdnw",
  "key29": "4xdNjKjjnVcUfnDwNztzkXKexsZKAnhzNBYMMnBHcdo4sPRKqtkSjZ4pyt58zcv4mWaMc5xFgAAueTn1yhBoZAGx",
  "key30": "5V73GYcyiNLBkQtqnJ9UCyrv2673R9jRFGgeXgcSJEvrDpA6jmtF7ycZft2fyaqZYwPN9WvBtjQ4gjDF2FCVdrbd",
  "key31": "3pWUPKcw2CWj3G6Q6cnu27DQ7LXcQPvg7wc5FS9uwSRveieZijrbSsS3mv73wjx6GpziEJD6CZYcwceDjQvSCfzC",
  "key32": "NjKQuRsLwTFphedyRhSmfuKnCEP6no7CZiAFrpuAENwgMker8vtaztKb8v85naYwpifP3jEJSKFymbjFzZJPRK4",
  "key33": "3NpgggNiTGAaRCDtWACLS3MqMhAESqcTzv4eFtHoRQcuLHVLtUY33JtM75egsDbzfjjCtoAw4y1ySTYfSdvNzs2M",
  "key34": "2SL2bebd2HYDWB7pDnt7UZX3JZKGwjW5EZUhBEt9cQ6wb9z3Pboxeh8SqFXCwftV9Hq242YnnKfbk1rY3x2H8YVo",
  "key35": "ZnphBfDvKodCwPCTaEMXYYB7sSP4HdL8qw9LNkD6DxdSaFfwNcZJ3XTGSnWXkShhMFpD6arpVyn9cZbnPkUvBfj"
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
