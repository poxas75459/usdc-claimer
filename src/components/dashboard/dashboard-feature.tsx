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
    "NrhBQJxwiCbn9tVGX5PwMHrRNtRwxzhwxh15HYnHpkNX5tfz3bFahAmfTfYXKd1PyfYjKZ6LKuQbFwxt54ZkZRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VMFaAJdtB8FVewDivTiwaPR9TcEV2CjxTDF4sRYzwEhaLZcWrURVN9jncGWWkPGf6argTC3RzjGhfz7wFq5Vrgq",
  "key1": "49g9hRHmeLB2m81UiET9uvApKR6BFD7QxWtDph32HuJxXVEiU2quqXLhrawa8MEXF9eNSRpWDvDAMB7qtSt6hpW5",
  "key2": "3yPNiiUg2xUFjxLucwDEov3ReDUEp8YddZpwruYgMHaeJ2j897hw9zk5iomazBYzcKLgSs2Swq8y4eVHKW63gDiz",
  "key3": "5Qn8qvWjek8BYQeP3hZAuJmmBhwz3QVfaPfVx7nXEfBH3iKyFY9tHYn8pxSUHPQFhhGZBav56Ecq5XQVeRbyqkXW",
  "key4": "4K7M9rAjYvchrE7CxuQNt5rERULisXFmPMEb4DhLHwJUTbEAP1s19ahKiAv1hgyMNoz7XYrZEf3FQg1aY3oBPrCX",
  "key5": "MBRu6YoPSkH1MfAfvwZ2K2qKijUEyjNwfnQ2EEGfPzpuc7NNQBRXvyruJh2z81VpePVHS8xjvfGbQ7QyB9B6sYa",
  "key6": "2mtTi7wLa61X7zYMy1o1ao7tj5VuthskwiyfgirmAei5s1n6DUr2rSrjDc91K5XeyYVHq27CAVaHzZj95k6eXmwT",
  "key7": "2VtdkFVq6P69BPaSxR6m6yef73U5EnAZYtGnzdGYFVyhA4YkC1g6ebCKpLXQtQMQtHGaSP66jQkz565cFNmpSTv9",
  "key8": "214jtQcR5cP6Wsta8WZXHVzmv3oYkgsm8DHcoSkUgDi43wp5LyDUyjah7rpv4XsDRPezTjGp2CN6BQSdFzEABjeg",
  "key9": "4mwENa1waxxzpXNvNubXux84CRsLACEuUfe4dp5fXi4pLmFkseG2tQ5y63K23RXkbPjWdMVdY8UE4JRtdrTpu1xi",
  "key10": "3E33zC725NtXSCENHVWLbiE9y1jjm8d3f3DJuQGU1gCxR9ipJoLLxx78JKsqgVCf3uwLkdX4ZptB4RppFpzyHTan",
  "key11": "22cxxa4Ur4Bbt9T13PQSMH4KvYtskk2PpAk2C3ArLc7VbykkoLPTztgTz2Vu1c5CqbFCS1c6Vdm8bo1b3Wr5CiEH",
  "key12": "G1rnBdAUaEtCCUMJR2h6kTWfTBSfyuWqyvxkcxjyHoTMzsxdezUBbFoU2Ry5X8uJ59mHiQ11UeKLnmWRbr3BaWk",
  "key13": "8TirNnTsuPR3eAHYWTmtjxvpsgBmtNrTsiVJMvtEY7hHtUyqDeYMk5kWCzQzFMa9ZnfMCdpxvSvvMitDQ9p2L31",
  "key14": "4efPkNdB6vvMRC9USYLzT5gCn8Wx2FcsAiMVaRsvZ2J77naPiKzY5SqTNCXeeRzk4uiEqB8Lu4Lkym4a3J1GEycP",
  "key15": "4GhdVikGAWXq134n9gTSni1ckGt44Jytaw7rwC8wqsUGUjx6fsgXWi5tWjFdfR6z4yfYZqdYXPCmumissMXv3Sqz",
  "key16": "2Y16gGv12vzn3jRuNj7apzsbTxfr3HPzpgPfHBoKwZoDZGiRtYNEucX6BpeH6tK8mPNiPjBVmBddSp4vDc2TXktt",
  "key17": "5Y5iT6N3BFWn2MYANdg3dE7qFpLrrqTFSHHGctsrcNDQY9tZc5HFvvgnJiBAnJEeWrEBiGskFbQ5hAbkWAFYXX9h",
  "key18": "4zqxqEXcRpH5u5Ddmfmdmhce87XMDG3UQs3kNvALTYvBfWiEqt2rCoXnbXngQMaRXhXtm5gUb66z3G2dYT3hPx6M",
  "key19": "36D6yGVqYM74mcfbp3Bh6vZyaYpVh1TJNbkLKazrFpdtTCtYKjqa58rPv1TTp41jSkKNRq4KsVKPJkTBdQodjeJL",
  "key20": "5meqFr5wgsoegQey4eVY9aHf9gowwC9xdkdY4TqoWfEoSyXLX8gUtd6vm8qjwrZMnLhooN83j4MhNFKq3n8khuAe",
  "key21": "2Pri8hHkWCfaiocSJE4AxsBoWQjveZG7pZgd3Dg5C4amoxaGL3Qmu5DwAKa3uexV3durX1Q46QLaGaSUWGetb5xm",
  "key22": "qw2a2CA6VvENLxJAhpzQjEm4jZJwdF7qSspRE4ijt1CVyE7xZWWqHx7zMtRAc1bHxoAxkbkM56uuBnLbxwdrSQW",
  "key23": "38QeNjov932e4oowYAxqJbGy1pW7rvjWkjPii19pnfUphLkMtLvTNDy3g7U9YYWUbCcyv69g3tFqn6ssd3SZKDAC",
  "key24": "56WtRC8aJAWxyM9TQphaYeqbMkJUw8tkG8hGA5prJg3biGrn7TYYUAbZ37o5MuiBKchGzYTPstsGW7Vx4tEJCYTu",
  "key25": "2Fk7mqYuA3NrPaREyYMYkDjv2JrJoEyp1kD5fULvLmmJ8GfWCF3pSM2UbwdeKj9swDvvRguZDz2eA7aySLwmskaH",
  "key26": "5oovWCKmTQNgAH9PpSw1ixxd7CZKTmPY6iUFFQpLS4w4F5SXyG1qmVc7jP6whDYqT9MrDFb9V3yL81QjsAroeLEM",
  "key27": "UNiYEuhfcypfEGPUXFAjLH4uuuyzfFXDP53hSPGcrGcP7AtQnCYNBMSYyptgobew2VnGefMmfTT2f6H6sZyX1SM",
  "key28": "J57LpCz6RsDtaYSkS4r79FXjwp5rmE9Yw3EgGQsSSQWTNHWFNkerQTn5AErbEqoi14JCqH9qeiuB5iqvFoQDZSU",
  "key29": "4iGzZHp7MfmzdNDT2eiqN8tCDgBaw7scmtDouFtB7YHmF1ErtdGGoA4EEnVXxMa6QeJoz4hrBYEpH3riBn3Tnt65",
  "key30": "3WXRnRXXvNX82Nqd7mpxA5euYBzqgqRdRFyrPCJ4d1XT3p4gEsBmLfVaNzMpHd2vgU2JdNUx1minhrZAQ1RQmb2h",
  "key31": "2mogF1fNChS23C3ys2Y6zPkvTGDFUE7P9Rva1oC8FzbZ4454wd9GUf9hfenGJxiSfpVukcC3BFamWPGEafJfprNa",
  "key32": "5zmTR6z1aCxi4FQ3bkW5X4Xy1Zgci2pqGpKdWbE1F9BLHRZ88ZNpxXJ3gXd5Cb63yR1BCiMxBr5RdgSUgS9YmFY5",
  "key33": "vLmhG9sQJNDVjJc3XdyqDCX8RytBdkghhQDKT4kw9RrmJhttgF24JH2MCumuSADiXt8gqFxee9n6fHu5bamWU5y",
  "key34": "r3yMmJf3WAxrPZwbUhSDw6BTiF1XT5QqrHaGeJiAnmJz6YrLZqRt9ttFUSjfwksfa3thcS7tgdvyQddmmraCW9j",
  "key35": "4ex5ovsUUCLrnWpHLDSFEAyJmQRJF58fnXSkmLYE1J5ahP1eQSZ587vsyicnWbY19XnLPumBYWq54wzkcCJnWyUS",
  "key36": "4PoK4TBCYAzR78JCe4G26NwhgRqqkzabzQswTd4W5bUfH3Epv6Xigk8mtUGmGcjFU1divXqCDdhgWntYir7YabUj",
  "key37": "4LFYX77T17kTZPXDQkpZisyMFnqgGFZYjbtsBrp1gvTdp7LLXX4KA4AnohLkBYUL7gh7AvB6s9KXLjg91T8oqS27",
  "key38": "4Aqcu4Q8BteSEUEJSKRuLCCHtmyyFWWGHDFW4CAi9t2mqFHLeFn2sS1gShdrXcEyp8iEsCXneTVo8qbFBzKhYQ6e",
  "key39": "6QX5Dwp5mu1282oouQtHFq1LC3JCyyGC5CVAar9sAhxRKmDmhX4MU7giAs2zKA7LoAoAYu41bsj6dMwSAGBD5Ls",
  "key40": "2jDd4yLGR5UzpJBh4amvsMM8yV81Zu7DmjcwwpW4NaxvXjaePsgd6kqKT3kjG9nNkZaxaYtRQZonnHiQckyCZmQB"
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
