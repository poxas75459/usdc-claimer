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
    "XrkpsCar3w9NPT8ZE3kfQNik1yXYiXuFqNjK9FtYmfdXwqUJpUa2D99h2a2KgMKArSt8sqeS43tMhxgYpRg5rmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTUaa1vDwcb6fLAyhxYc8sJi1yMhm8z3Hc6AKXSrxjKgB2VfxQkCUGtt8uqQ1NaFF4zJep6XnpnqMh2R9hKT5x1",
  "key1": "2sfJAmDP1pLw2asPce2igtivyWk1P9X7rUrBBNdYFu8EWsPsihy9Ccy2h1DxywzaND1o9XtrYwLUiMGbqFV2jEZL",
  "key2": "2VBfHhbQ8KWjHx1jXJk5xpfuu7db6oVgzJLTJ7ZixW2HnArrAugHwuPWtstf51N1fQhsZqw8TmCsLMxNerAPpdKn",
  "key3": "48TjpjfnQmsn3VHN7EsjRLLjakhVcGT8LNRieTSK874h62sSRNiCcBWUjBbGc26JPcKENoEJQ9uk3r6ULTpPpjWr",
  "key4": "5VcqwqZ5U4iYHPikosC8JouzHpPcuENs3YhyiczH7ovLcpZsfrRPanwqSGRe9ymK2TN8yNp8zcU8EKbNKQMSfuQ2",
  "key5": "4tE237NH7Z3em4E6b1Txd6KUxMrTwyymGeb3VydnfBdSo9QzRBi23VNknBq8dW6m7vYP3SZxxLSzSC8TDKD491fE",
  "key6": "2UqnfZMfr43S94XmHo6pbgLunEfDxPS67EtyzsNgUZ9dz6xjCu5TutVevtSYUbm9fipjdpM18nxuVLxpcLWiecyf",
  "key7": "31SGWvAicHCRrCgrz5ccUcvbKG5sgpVaZR7q2B8G78W8bBRW4BRCqsEM6KgmaHQU2fw3KcX2xcVdvkMK3QomgUVt",
  "key8": "3B1PxDqmL7mqmB9M8CEJ88V3Y5nmxL295qDk4AwYRZPJiW2WhNHsMRviRtkjs3LySNuxKKP29YLMTQx6rCC8MWSV",
  "key9": "42mTRodYN5iBybhvxkDdrFcXt8CQtqjjaEoskDoNARUGq5vc9d2visyCb8dmj8hFcN9wymhQPYfCipW3GR54uC3e",
  "key10": "fCJbixZqhcyifi351vhvnxwScEZwQBoCRxS73Pt8miDVv5f9seN9AaQ2AB2xaVqsqZd8E2TgDqj4Qf6hFHWfgvx",
  "key11": "5ZAucbaMJusEcEBQgurvBmfBW7i6EheMCM2e4PNaseCg92BXXKbpFjDN7ehiJYjMw1iUty9mbC2Nf2CjYPZsthBB",
  "key12": "8xbjYo6A1smLiKyAnPB4jdeDXgftJBZ8rEB21httpGaU1jXDg2RXKyZbr6Po1xLA2TotGKk6vvmkgZXFMud7Q7A",
  "key13": "5yJ6uVRzUUvAbQGS2BuX1QQMZdLLT5RTwdUucRMiztAGkZ4PmtSbNzvtnW4KADouQFz9KvFmZ35VWL6WEMRudDf3",
  "key14": "5L313N3KvP9XVCKMxB6YEbqYZH2JP1bnAyDu4VMnMduufvx3nSTBeGtFxgFjL7JHbN9DDNfaPbwbGZHNvqPzM99E",
  "key15": "3VvA8hDsimFj7ahL5q7mV5vMQa9TUx5LfoeMSrem4LwiwZeR6UFiY4ihR92TjsKg5bJpP2MNFWX9tWEvwWrWxm8H",
  "key16": "torfEzpUVp487mgZZ66HLiHJBcvYYNx92XeiTqxJg7LgtiF3vbuSvthrqbJP32k3Q1a2f48sasQxYSbzGDFf3wZ",
  "key17": "hPJixtsXWUEBqBsBD5KMPe4NgGUGqSu8DFHGrQDjbkAC8gk2ue9afV2XEfAZaepFcEyRcUtapQSyP8qVshVtajE",
  "key18": "GFrUnvw5nX4LTdKb4VxZB5C8sC8Y3b79DWPCEhVE4MY5tQvaXwMf8tsrP2ujjgkPokJLuBX9o9JYH3SRDVVrhXA",
  "key19": "3yDMDWhxKPMDP4jZGuMzi5FaGmsj3T455PQXngA5YipTbn2hAytLsUjEbtVPkboaRr9f3qqVucdBTVMmriCMKBAq",
  "key20": "266EeqGwuW9rRzkg1uRFt9JkosTT3SWfpipdpP8TLUBXiXKmndSMaRRVRSg4F4bXw8s6wegdFJZSqTUrLms2Snsb",
  "key21": "TUXAutVCxY7pEA5AEW3J29C3aQoH54s8m7MXSxV5DLURUF6Hd1yXeHfsBvER1SR4PxfPrhtTheESN6Nm3ooDHt9",
  "key22": "2SEzUgmJFYqUuQiFpyoqhjVGLGK1NcaH7oeLUYjPm5324CRdBpT6waqYV4fhfMVwhfYqwnCvPs8bhQT7XovGCTTf",
  "key23": "4inBvP8nyBaCxJT8t12q3EtGN3dRHJf26MdjGpn1UBLz7Tdr6b78TG8dTNZq1KuxTHWbi2EdfvxyX7TPzryqB5yv",
  "key24": "Fdafe56Fs67PML1JCJakTUs8kzqXzxGeiEokLQwdgCqRD6SjQY7nTMbKKmtu8kCyCiZHvxruWVofmAMAQCHXzUa",
  "key25": "4RsDwi5TMJ6VZ52cLNXCM2PebKTkmpPqWEJf5roR27VGaUMGZTq7Mbj7qbaok5d1GDKhzQkKF8MH1BaNWR6fSyWF",
  "key26": "3HMVs4LvoJvVWeaYFNME79mWQFgAzUHnwGCkmUZ6KBzxp3186Y4cVBq3Ys4ezmSfbZAcYQTofP4yay9p9Jiw5gHU",
  "key27": "5SXr6bFEeidRTbVGByeX7nBN9gYQGDvjvGTgCD3MXhzVUgFwSwxJawkaJ8FWn93cr9x3Saio3qzmBcG6T13C7PhD",
  "key28": "2Bn8zLSPK7mU1bHiRiKeqH7TDQyx7pe4ZmHxRevotutm3Qssg6ef135kdPyRvzmxwSnFYSRhXUEAtZsvqMfuJNrQ",
  "key29": "3N35W8R7t5eAB3S5HoZswE1t7HmmfP4qmz7cn6JmiT5bFR5ioiWGemHW2WD2UHiNwMVqkzLD8orrs9Qx81Fo9ffh",
  "key30": "3VaD15UgsZ2G2NfNZ8dv552chgDCQ6A1nYc2pnkrJHn7cBiA52CJpxvGoJrjSW72XULCdExYgZvUhcfGi6QXRh69",
  "key31": "51duVagj2FgD9ZxJmNkMP4qzXYiTSMJepnFbkWvFeThTasgCZhhxDnkUj7WF9wdiGJ4JZAviX7r7Dv1jfMMN1b6f",
  "key32": "3vsxN7RwuR4V8Ue7sfb4SrFAHKaaEdY4vqvUsMWQXKXPCL2p7rmiDbLtLGkPin5L85A95z1VmZun7ihZtqmoCm2q",
  "key33": "4u9j7eGd5rjyGRyD927MzvKxivXZUFdaW21QXjoXHwfcG1kRLM4Ycwg9KNGCxhFifFCAhpT9KUsezTDngySsTjoH",
  "key34": "2H9y4oanXddKDEnDNpt2erachd5Vd81oCPXcoqNHaFMWtQPsGkRWZWZvcar6Aiq8JQKkgM2jNiNLXyjDnbKDTWZ7",
  "key35": "5YmtveYrbq2zm6rKoncgGvwPA9dThXfb8Fbdowr7jAwjtKDYKu4Tpe29TR78FCoWazDELk267zs8Z3eAwgvRukx4",
  "key36": "3pksob2yECqp35s94fw9vTpMUQAg1GLDZBEBktZ6cHDV8ooD28jvHrykad2TefV4TdDkaF18rM4wxBELmNg27yuP",
  "key37": "5UE8DEDkpcUAWtBDpNpNsRNKQv22osTfB8rLijj1n7YcbGkK4875ihkK4vDMuy32HiS8us1xvPGfDWaMfwQ9qqUA",
  "key38": "zrvRvXLRAgXmHb7Yta5kzv2QjykF3AjQkE1zDFkR1gEdBud83Ha9zNzTdk5dhuiJYxApQ1fPZ6E14KUTPgyjy1x",
  "key39": "3JU1GhCojZd7KjPeWmToUHqVr4FUtY1mLrJ2Sfu87Ne3KWsZsViBXPTyPrmGcoa795muMeTW5nGU6jKNJeFi5uwm",
  "key40": "3nBGScaoF9K8kKhJh3frL29hWcEMXMYcnZCX4BQCdL4tkkTFNXGD9wEvud8qWUU1Hc9H6GiSoihGNWRZBHpNr2GY",
  "key41": "4qbvLkAVn82Dqo16sHGYq5iSMyW1gDacMExVMeaVPyuRRugzu3sNZsjv3iwcEdwQ3dT7APEso1kkTZrhg7fDhyzg",
  "key42": "3rBNioac18sKZUx2SQxXvZNsF3NQccuZrrm5XgK7JzKt8mvhRLxVTnfS8MYTdZoBmNUxgESRPpUuYfMk9K5aKu9D",
  "key43": "MKqvKEh9CE2yoy5ZHW5LVGJioGnR4TvFwiuBGLG6Nv9LScqJhVSzZ6CJEoYsHRQ3keshxfsf5FR8BXq36JPTzur"
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
