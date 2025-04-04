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
    "2et61FqkprjNtAp6ppA46U3HA9kDDApNExVDtCRbZxSreMn8DtGt7skUNgkchFsuWpziJqKWJVTVCn7AUbfZyYfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5KvjxZDDqECngRTD3mvcR7UmoDfHnDEQeu3PSfrdqNC3Bgm1jbbodrZKvrHe8dumbR76qLkcYqAnRijYmMdE7P",
  "key1": "41S8wy7yr7KGj5QqeKYgBywd7rtYpAPHLCB5fuZVNs8r4JbiFTfoxjFt63rnvZYhNYGurChv7PfnPC5oSbWLBLW4",
  "key2": "mqkew47scT4BHxz8J5VpH17RRHQcta4THKJPse4dNX2Gn5hpWPEas7TLuvwuwWaUbQCbqh2uZbUaLryMBpT4hHE",
  "key3": "5vHtcEd2xcW3d1q7qGsj6zYgqJdzK3s1HpbTToLffALDyxX18fuYdRAhEByXWPUdQ7coPrWBdBK8pX5hVVyXs7Am",
  "key4": "2dZrrE4q39vGcxSyQRgbhvMwptPTNJLh62zS8pgUVJfnxQ8qA5LpthPhtt3kHwDJpfb4hTyHKkR7ZDTcpAjjidTL",
  "key5": "4mZA1hBYFsfuhhriSbqmexLEPBP8fk37DPktUA9pgSnGiPUZzNrn1nMctyexAs1QhcinWQeBjRJQh5d8rT1gxBQg",
  "key6": "5e83ErBT3sQLcWRBZXehahHvr8nfS3HNCuAueZ3NgnqnAReAPVPb7oCxahKsAc5fCLmRTHLaoRXmK57MtkyHdkie",
  "key7": "2o5RHnev9NHqRFUdKzBMgbsyh675q568gcEbGgNNFRCridDTtMeH7Q9b1mqeUfCuL9bsVLXbJ8Nd744EGompEi33",
  "key8": "NUGsrtsySkAgKpQNDEkTFDBKGGfhttALruHeYrWaT2CLjYsDc49ZV23bQefSHjfC4eKZo524oC33J7oJWZ9khnu",
  "key9": "P6zPcmVWw6pMCPqCCAKXSsf4qhzodor6iJUZNCx5s86GPa3D6CyjkL4tu7WoKRtRAiFzr666grBANpWnXXvsi5S",
  "key10": "4jDFH61AZU3f4wzzBikfDZuEUBKi9oHn8hFfPWhJ4BNuJrm6Y1HbqcG1dapREeZyuZ66M4965KwZdVk8EGSiSGR2",
  "key11": "kw7bG8vVuKzX4psHGa2YcPRpYnMeVeGgavFg38htStgZYAYtZpCgXn31sHLN9FXVDkDRpLy8ryM7XkfPeDCCC4k",
  "key12": "5EW5NQW6PcoDE2YqDCJhpjHHej12ofQteXNKxfGJPkELgSSRk1XsU9rhYHUUtf37w3HT1YkZMsJNcirCCnZKoPfn",
  "key13": "9Akt7tHHWYVZdeeVnymbE4WxrNF2dTP3iCffkkrc45rXdJZ8a6M7M7fFVMvBWr55DFXQMskSWbZ1GayyJJtkwLt",
  "key14": "uZ99f7XuVNFagxwfezFPPnFzoV6dAixxvMYkHR8suF6sbP2Up8YGh8BjDiTYfjF5GKx1nCnVdg32JY13Z4y5vpP",
  "key15": "56gKBYwhqWjjo1nRcApBgJymNkyb35ickZqNCaw6E3KoyPF132TN2j3vZ8abm5a78HfLwRs8BQ1j3aWqwSHBarqR",
  "key16": "5Sd36pFE6pv3ig4v8Lc5pJQvWst7XqEnf6jEY5xLmSDML4WNJHEDC4QnmGhNhNrTMQ1zVxktRJnVd8tosmVApWvQ",
  "key17": "3G5JTfVwK6RcRD8pVxDR6SpkHd6cQWVtWfnBqS2wEz7duRjY3axTHMEpGD4b7dYUCXrV2WpxhiwaHvH1RMeb7XWB",
  "key18": "2XvHgKNnus94Mobe2gEjYtntE2SvhwVAB9QFaW51jWJVULdLg4T2yJFpstFCesNfePszi9gaZrvnyT9e8pHJuB13",
  "key19": "3jQ6ys8RxJKBRpHmtD5FJBWxoz5AoFw9X6xDsQiFFKdjQxfnanPke8qZMS3T9ryCsXFEaEWiumTNiDwc73xPgZKW",
  "key20": "3LLdPHZ7azVGQTLmT24MiKZSapW7Rex4YbraNKQCrTUyz6LWfMsk9voJ8DV5q9f4GSk8QqCn1o5tSxzBHxccFoV2",
  "key21": "2xb1sBuMqQGaX3XuD5TBBijky89FGmZSAVdmtrCwJYazn59LBwc5YhuffMtB18GsHQyJtojSCPNzRx9Xw8K3RiGF",
  "key22": "3uzeBmgpUqYCcAwU51qwwHtNZCcW3NrVehDAEnuGXgkKSEjNgKgYfvYo3pjkconLQA4uURQtZtJTXzWmKSYJxW4c",
  "key23": "4yMUHB1esnrZ1cuVxx7BS7TeEMwNwDFYUq4v9CD9e5ZSTVNsceFsru1iWLXwXyECQPwjGyortoU1dwxFxXFL3X7C",
  "key24": "1vhY6Q6sDCxujeGvXFSbWxHkUczEWC8Do4mU2MyTskGpcwNqAbcukUYDCfefFP8VaJw1NkMr7RpusDd2NkDABrr",
  "key25": "5jhnbwUAEuNbtwamjZ2cA3TZDNAtSR2Phn3kyMBCgXDnfEds533VncxAbWAubXo8aeSRDuX9spSdFRXbmHZmbj7j",
  "key26": "22eiH6TmoyxudmEn9cJAJZqubHEAARUzxy8LatnTBsd4RkLB7MGp5x4UJTBJP2hfJiTFcR6Edu3dotqUFwhkvKod",
  "key27": "2Ri3gxkhTLgUKpziKqddVcK4iotXjnhcGL5ABMrrFFsr7jiYTrDZybVKiXWr3XyJVohJN2HZcAe8RnRk4rDTKCrC",
  "key28": "4TqnMg6cpNFf4RLbKH9JS8Bwrcdy2RaM5EY6MGCuqq7vuvj3DWNofBdXqvv7txQUUSNoq293XXZXb2ALkod95TP7",
  "key29": "61Ra9tidypULH6Vu7uBgzKsXem9S9PuhLvavmi1G365bdxVXBoiduzFFTmLNNLMb4r3TwDBEMNACwtE5orF3DUeG",
  "key30": "52QwZkCuhnHYk69a9kW7q485eFmYwXKJrjMLCgwuD3ZyF9t1WBbVgSdPuVQ6pJH7UdH5eiNwW4XTdZzTPJL7ykeb",
  "key31": "4wCJJbt6NnJeMeutBgDimfUeeVoBBCM1MLnUpmhRdut6sQYx1486EXDUDQHR6cudhS683eBjihuzmRBMi8hYiTaR",
  "key32": "5uiyrRvAQ6TR4Tji1dhDzWfPza27ZyBjyz2qF5qVcDVHWQVVaJqBCx4GTKgU27a1r14g4vVUqt7KYo9xQ9Ut1MYN",
  "key33": "4JqazDdKjw7K7LsHLGpY6c4LP9iBzvisbc2VRFxAB8RkGdbMqn5EKvshwRLSPCSLJxnFDoAoy5pjQYEEqTFdNqPL",
  "key34": "TtJH9fHLRQppJAER2DDJJXXdHUJ3RSiW47P2YwDV63xstND2n8aaPw41EFVyQdpUfB6tCapfU6zsHzSPcdha2br",
  "key35": "2CtNnBJtEx7VoDo9AxU1rB1ULJwDJmSpAMmqtvoFGuG8Bp32rsF2gWvoGMmyDVri6qV5GLsX7MSs6hsq61KxxKJK",
  "key36": "4QJ3n6vExf281QDtMEhGahjgMQZHCaH7FMJAJ6hFRgPCAv84VpeVSLiEnMUT2mEoCufzGiZn4aK3WG5RHLMDZL13",
  "key37": "jM9aA6o7jRaWphSL3f8fGYCrNXoCG1rFPa3kkoUepFF2yvp7Hzz68TodDXVSJSkjwYQcBRenWTNnQ6FZJpk9nZn"
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
