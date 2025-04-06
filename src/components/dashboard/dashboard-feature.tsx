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
    "5UVp928AZjpS9hXEiJFoLvvCWwVwTFH2FvSJKUL7n2y6ZQdW1oU6mwYFoJPpKvohHfW9VybBffPj1tnGzyQhbJtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43nm41LXN7Ym75dVbH6oiXo4tTTV89LAF1ZFuWsDPfD1ZeFbCwTJZwtpz2nRzhb4zGa4uJFyeRnrze9u4V2Pu5R4",
  "key1": "2rRqMd2gWy6U5YdwyczeFBRfRMGuP3jMS39VETBBhzEa98EP48TxpmSp9ZwmmoRsw9bX78WewhhmocN8DdQ5ds9C",
  "key2": "4pGCoGDtn8o2VuRHhWgtocjRFMkhdQn33UbdvokrcdSh7EPrjiJLYzCSaxq39j6avXito6cgojzWLpXNxzWSnoKc",
  "key3": "5aPv3F3L4khggLfAve2Lm3dYxqPn1DWpgoaWqxSeCDZZrAi12Jak3xVADJdSaYJ77yasiXnxW2GUFPE7bBeuft3J",
  "key4": "fhAj3PYP1arbZ22NBGksmegr7hbFGBHPkabrVhgq3zZ2WjozSwgdLQRhfQ1GrSK5GAFBL8FAADsi4MNty9wp1Xr",
  "key5": "4AKDZa5KkYxpPgxCzk6YuXYZDJsN9c9GBvUfEZXep5tfFCpJPGUHbtGo3GiHssn3ZvuVZtPaJzit4KPE9mQCXH4m",
  "key6": "55M8yXDS5Nhv324Z7P5wMAUKUxo7ed2DTLVayLbad2168gwvtLUHvFU1PuvKVg5KF7jFAjr79KmJBmRS85yhnBVs",
  "key7": "2EykvxfnMwiqxNcgJUVdw2a4wtt9Hxkt3Wk71RdrgYjFBYuEN2UViqXv3fexbXE6ZGYDsqRVHjgwHJGwJcpMtuHQ",
  "key8": "2GGoJwncvPjotnvzd9TpBuy82NLM2U9tQz6xDj6cgYgYHF7KDvuG8yhMxmjF3GRHvFfJWympPoamEMegwXnE2Ux1",
  "key9": "5NxWeVpGeWkB2ZrtuegXFxeWNMacbpUCZaGkCHrAnQvveAEnagoHEqj8rRDCa1B3jWD9r7hzmZWoNgFBNdNQFcVB",
  "key10": "2ZWCyxKhuox2YqmcEFbboCaDUEZa1f1ukh1q8fRazw1oikMPTnYSk2pAxX7GrLxp3W5DdBipmh7jUji3NUPWMWJQ",
  "key11": "qWhJuaXbLxV4VFqMnFZrFuqQbhAmmFVv65yepQHeDARvxTtLJ4NaNwNYd1ExjesRsTGZM9wtZXP5jQdm1mqHgJQ",
  "key12": "4BsVGb4NwUyTRPcKFyxY4B6GkjZgpenNYd9KY3Lgvbo2fBBZvqd22hnSkqNKvBcKEp8vxYjWxRLiZpdtTQoSGxM1",
  "key13": "2Hz1NoYJfPGBXLeW4dnGHrBBGPT1pzJhvginQT5yZtfvbmVCeKe3P1N1p3CNmSWpnfCWBLwpgtYN9v4AoZVgZAUi",
  "key14": "3bSdMw7LUF98EUjZex4MU8e28JNtam65wCNdVjWdkYaNdUXP3MCcY6nv1sAFcq4g3mZUjB1bUeZYQ8sX8vTgn4oP",
  "key15": "DfRKxRLwLLywN8MEom2NHE7MWLJUXcT2LWz8S6SH56BdagtuKUDxoZKJ3HRmf84F3jeWgivrkcmZaoSkJ1gTf7v",
  "key16": "5g4NEyY954xFwGrTJKQBUmXv91vRxgbYDJ9Q2KucgpMP4QXAvnC3pbCuwxJ6yR9EANPwRbJ19EZ8d5VuwQUEo3qN",
  "key17": "4EY1TeyecQVJvhqmQ8dfdq3hZDEuuQw4mwZMT1mU6Gkn1JCeAywqEacLcifQnpALyoJUd66u7JGjhTAp9xtKQjM4",
  "key18": "5WT14WuQHowC1UiztDnTodk1DeQg7tgJTdF6q5Mjni4upignQ4CxeqWNM6UdXNYjZgVA9nw99Tfev1fgcxCc4WpN",
  "key19": "3tZbhGMJaYk54QE5K3hSaZWrT6Y4Sc8SXeGcsFE3Qh7EWFzvfAAafP8PiGz5JYcaX86baXAFrBpSazNX9fsvZiBo",
  "key20": "4g45bSQYPczRd8ETcd4SPJc15ZnKhGs4zK8gJZKq8spycA4en9YPvX7oDAyJ8FNAcuPaodnwaD9yTALbCcMdLoqz",
  "key21": "65XFiXGn2uVurLEA7y7hkpj7Tprtn8sf6MoimQMBQ5ZjCzCipHhXzyuDL2NaGiBJP6qmu6NUkPi1PYrLjCDffq3k",
  "key22": "5XnzgGmS3pRw6AsirBXiQ2h7kS2iRGd1QXnMUMw3Cvffvi4Kkp3oretyrKUQBVUB7A2ex8HrPHTcTN9Ai7xi3FGL",
  "key23": "4cqfE8thipRtpmEbNepnTjaNEu68x81EJ9jTzLJqgyt2AtDW9HcenGWxo5W4xWzQEWuAiEq6FfVAfaXLrfDfeHk2",
  "key24": "5wkVZtvjxBHDmziYcoPFiZgHRSZ1TY1d3AZMCMkZr4CJvc45wf7WVKpTJYRQ5vJLfGb5PAnPHR9iykGKZxAjMXpT",
  "key25": "5EnGKnXuPz5ySJJuZcG8wnFkAC1hMtFoydajj5PVmtCk3spnU8ujiQcegyhZLHrg7zDbrt5MvRyCJSEQgPC6evuq",
  "key26": "4kctjcQVg1eEmpzMQvXw11B8ogvEbwziHfHWyHruPZbX7Xt9dwb1qtqkztidHLRSeXo6btPSECNESMUVCRdaWm1S",
  "key27": "66FJm22oP5mPDHrsdJh9t6sVqnDemCf48QDgnCzdYFfCcf99DJ8e1jz3yv3yspnTfbDpw5YrpfPBtuD1fSvcLyqo",
  "key28": "2pfWTTUfSfMd7XxPbK7rVKsgoHF1DZ3Jw2xfT8ejKKi4oniHuNxNotcK6qXXwpmQw4324XdLw6Se9zMKx4rg83cv",
  "key29": "3JJp7nCf5C8cMBaNzA5rReCyuhto3CerprwBeo66KacsLMPaXxNhpwfF3F7AEErMNw1zphRs79RipUwzc94CyF3M",
  "key30": "3YbTrY8pRQk8VNg8GLfaa2JyZX5GVkWFWqPXQR5pLgU5v8doH1jsq8CB3cYjS3kVQiE1c2siK3bejgmrRTMRJE2t",
  "key31": "3XKfzVdqowEHPPVhDaidyVExJXNWjHasbFBFPtJzo37GdgUvfRNMLCbssiKhV995KBifXr6QbuVCzVA57jV1UdZ1",
  "key32": "4ZrhLh3Kkav98vDxjXffoX2rJSqjEwFE1q3P6XU6F4vTkBbjHo5nT5CAKBvNRXPh1tnbsJvx3PGVMKhwaTDXWEYU",
  "key33": "4yxXygPPTikbiiuu9WSs12vG4ie1AWtN9pzfZe9PWJWhqxf6Ubwa4pKx1H74jsHkaMKRwUWmTxu3xQWTfC2h2yoJ",
  "key34": "4dos25NdqhrDx79f1WWAM2smDTNp2ped43xDBHucpEDb5Up3LTnskqT42MRptTPxKXQxLjJGehmSMURppzsDy1jt",
  "key35": "KGitzZ7nmxmLSaDzC8UHPmrnNTE65W8PhgcsESLBhERDkA3FnEQ1SkpAdtEEYF1HjdEnn1tEn37MbRjku3drRGc",
  "key36": "mCSN29k4doaPdTfcgfEBYYvgekQ1546zLrUgRczhVyUuGVUTeJ1sHH2FU2BQVRobrs7XNAWjexe6VsMxhHGGWY9",
  "key37": "2LXRVxFTuMp31uqCT7X6G3uf8sy387LNgTW7vGspV3pZmZxUZezA4jXZZvssm6fVSLyriNgSqJs7R2yc5AZvMcrv",
  "key38": "21DhK4FrUG24vWzLBBQxP7pgPbo8VYaYLey4Y8o4W6QBYJYWDADCQFCSQ5CJEC2jFJQNEv3EYiBSe1rifRDgYeWw",
  "key39": "4LScXHgAVTyARr69JDTgX3JC74LsnXfdTj9kNMZLxQSCQBWaLz6snN7bjXMZ1xZMeS54RzFkFA7zZn2jQHT4RJpF",
  "key40": "NNM1vPnv2hHHPhksRdqF9qHf2v6sGd3SoTn3sXtatNxNLDjC1TR2so53UkCHWPMb3aX95Dq6cfJ4MC81pCXksfY",
  "key41": "2JpknWczew9xaEwnsMWyueocxNjkm3dB21jvz9uVgcHE5fbnQ9m3GNwMVRA7UmvEjPHsYTPJJZpZqTYfXEfj9hEU",
  "key42": "26KoRijfuJwvoaz9e5S8NQgF6b6vHn39q5qq66cRT1HXmXhKzKoTGAsc3QNF8wdAESQkXjpyMnpfBBT2auJfWUVD",
  "key43": "2M3z4B14aPfo1t93pjasRdaPUMyfzGyc8nMwuYKfikUmY8gmt8HUMDyoPBH6DSEBq2MZYc29CqdeHhQoVnn7cPAa",
  "key44": "4mDBhMn6U43HUH7uGcfSzXDNweKFePJCJC18s2NByimQ7Pax3UVBfg1sk9APH1ijN3RDpygVqLB3VRTdb7pzSHfL"
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
