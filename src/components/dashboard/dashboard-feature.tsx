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
    "HMNAT3ZUhZwmntNEqEQVSGLVSpDRuE7Nxbgxo7YLTAxtTUucXEppb4ww4tbdf1jMw2DUXKgTT8eF7zzUztvov17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfXJNddUHtAVqPfeogDnAn6v6DHThGrGrUNB7m5E6mpr9ZbjrHVX9QbNAvhj9XprueTUpHSgjjjvWWiFLgE49Mg",
  "key1": "Br3kRQvb5WqhcxupV63Qr9A1VdE2xGRUtXbL2AYN7hukFnfduNbehtUzzAtEWDhLgKnvETLd5yVfkJ8B9i2LKxi",
  "key2": "bcDTYPBgSJdy6mw3yXni4GVPzmickmP3JHBpZpJUKXmSwNEnkjBSmNZHRscg8aKtPEGDUeczdyy76Z4dcvtd31s",
  "key3": "3mRzKVAvhYZH4mt2A72bWUh6sBsXWrsfQ3kmbA6PBxFUwNM5fj5VMMwQJUCWxWEFEkH2Gp7vXAUoqdV3dXUqb2LP",
  "key4": "nymoaHoZZpqfU2ZuG7wjPKma2A2zqJr2vRnJpHuN8gN7i1LJ86gooKwQgJW5GgeEnsdy4vzNKGrpoXCtrthW5z2",
  "key5": "3LjmM876XdwcvqoDKDhBLYTc88dWJKaLW95dfEVQNjDzqfqBN1pMiSGpLw53VHGj2UAhmFiFG14unpXYemyACjn4",
  "key6": "2Ssa2jZPR5SmzYQXBEVKJyT26BxrJsaLj55MxFJKrGzadSTVMoK8bn6v29UGbZ27Wozo99oQF46p2nBTYK61fXSX",
  "key7": "3VSAL1UFWM1sV31M7HTPKf1913VMxErGGDdtXqPx5imqeUnqrL4fJj8gR819jwXu7jqby4p33eVPNZWf9hfLsFMe",
  "key8": "5H8SqX5hK6uwQstsgyeEDT8XXF9gmq3zgqSr7zE2t979rBGB7Ve2Xezho4Mt6kG4R67JiYPQZCahmfFChsWKP7Ga",
  "key9": "58WzS8ZeewjWEAh11CVs4gJxr6xgttUgWYSAQmU1Z8sZhmb2sioTppLRC2zn51zWZD9tCPwoheWd3dX94kvRBkQr",
  "key10": "4YV7V1KonMA8XBLGmpCGHZ7sJmZ9XuFUPSgASQzuc1LzuRPKnfwGKHgdWyBeaXwrqTX6HdvCVkbP4XEDH69TruNG",
  "key11": "29wdriLT6hFEnLQcefhnw9oUWC3BTcQ9eyjYpyh3xFM1rq1pNyj6pHcm4sDi9W3n9HeVZCt4jVdcpCyjKuwjyK5c",
  "key12": "2bEr37okysReH884fG33SXY18ow2L9KvJbnkXEjzSP7cWfd6FerNSorQAuPhpgdhehTdRmWkcswxjMuURjWGn1EY",
  "key13": "23xnuoV7HA31oDqyyyxXvUysYQ257D7GQfqh6SVYYtf4qSY9ndnD7t8cRw88iQ2VWu2tDjmhY8mZeog6CkHKCHUi",
  "key14": "25MwyhyF9ANiRfDagqTqXeJNrsvmJ9x4QkdBG1mRUW7VEEeY38nvkZEEXnWpKFFUPPDuBpVE3j7egB5wVPDYGrZ1",
  "key15": "5Nbqpy3HcjrD6hVMaCx9EmZ3rt7gc23XsE4zfu1r5mMnYwL5CNyMnLyBSpqPvbGqPC7XedGLB4Pk9wSgjJ825ygU",
  "key16": "2wFEb3q9Wkhp3C6RnrD8YPXdMMRzJPdon1DbiZ83zfKiNqMmZt2LLWZHFVAxKMMtDSWRb99nsTMrfVewH7wLnnph",
  "key17": "25u5pfGPSgShhBEZ5poQsq2n2cctDsfCC1a5ZByfGT8ecTj1gxm4XjDvc4nq2mJ8uFFF2AcoAL1ESkwJruzxGEZh",
  "key18": "3pkypkz6Af6rkeadtKYUDd1FcHLZKb5WMxaGiuLEWc6qFwv3yQw85cBLdbuWpPt1KesFSBvSepqAKeVQ6Eeg7qEc",
  "key19": "UmgYFJZhfyqMWqpwtpcLxSweWQSm8MwhcJE9dZ6byvWCU8QDp7TpEE9Gh88BFawiPAxRYpqbNwmuwkJSj6z64do",
  "key20": "33kh81QLCXo5mFtziRwqLaRusbR1BRFt6KjEFp1gexxVBcf62gd1A1zcFFCJCn4teSkSiocoEAoG1qQBPde1Huof",
  "key21": "6226B4zNXAvKs8eCvBU4cDxAnp7uCByKsdjTzEi7ireUKQm6kfqkjd9KzCND2ZbeKQrwLpPG8LS2ufr2CGU7hv3z",
  "key22": "2RnUbTkSyQ2b8NiTjoF4uD7VRm7w6itJZ1tTwM4skhNTRTs7p8MM3JNCZt7CScVp9qYjUhBJdxxrbj5aYCXTmo75",
  "key23": "5jDbPymRCQXCJZjUAuWkicaAZDSHZjE7tUAEA1h9Pp6dzgkLv2geMLY6ypEqnggzL9koyaSo5D9oBiyf5vPxJxTT",
  "key24": "4c8qE1cVEmdfosRsjBestdDmY4EnJNPBUzi56oX5LmwiLSuPEUvY2A68wScWrN8Ev1EKwLkWwbEkLbyHY53Zmmie",
  "key25": "3jcj7iRYYnvoZsKeG8G5pCGJBq3r3SG4Q3qjEbvxy8jcbUdGdGH2B5X5jzW6tyuosMfhcMnAVVYyEUyb3QnujqtD",
  "key26": "3LF3pqGdLRna5EhPEtUqLesEvDF5MV1DsX236MSEAzSMjEu9UBwcKH2hJM46JX6JtoLwhzQeTuEB7aztbtFpKKi1",
  "key27": "4trPkJcDhziTzS2qc1WDoUoSWreomknV7QBsQveu4sMmZRfatioVUrpVNktGYxXYx7B4uzLbbowASv16KtzDQgi",
  "key28": "2xaPrYbm2tefG8BFTHHsVTyHe7Egnk66RNELBiwoQqn7DddtbtC2dDuHcSFnYHZB86U65XEoqV2h7U5Tv1nYwQrV",
  "key29": "2AN9nBeiFqnQyRt1hNVoLUENpzdbkUcs1x5X1LUhWBioj5MW6Sd9aVHcyKfNVg1y2BgnH4DVN5bfEtpVSk8nejAT",
  "key30": "WN3puW4SPynrYJL95Pd46wDMYhEtYhATxRTHafTerSvh2cTMrpKcRrHd1GTPFHSn8tKbYafWV9aB1NB8HqoRhZz",
  "key31": "2d3FeMJ41g4cad2iiKk2je5iaC2d63FWihDNjLhkFUc1u8Ps1mAc2BpehiAEhi85TmYWbFJxjSnsVoaGY7aDRdfd",
  "key32": "sryekGngeqdMr8Qc1odiJBRfRXSVfQVzVaQhM9xx1BGsC1H5wnW4T9TkyddCPhrJwaw1Zj5p1LugRktvV4NPixL",
  "key33": "59Fu3DPXUFtaPZicaR3285rzy5RohGYF7Eof43E1MCypCtKTnYbWg79JjugTZY7wnpQT4asDhnAZKgxT4a2Cw9iH",
  "key34": "3f52xMFXhzjMAeVAvTDR2LJ18E1fJkZhaNBaawYBYeAxPa68TQbgiqKkytxJ1NKKkbtjH831xCqipFLNk4dZUFqu",
  "key35": "7BeSiTCZZA9UzhgP7jL4oRNy2FeYLiBNSur4SdZNoMgzcxy8otXGbH5PyXifpMNd45ufgfaLkyfYBqP8vJDW5VM",
  "key36": "5ySZqeiAX9TcX4xwSwjxXHEeB3jB9ELQo1Qrvv5k531bw8DYC8smwa7TkzpfAHz4WzeJZkjqFc8b9SKtG5YUqGRk",
  "key37": "4vKCAGipM1yanafFGPsHvM11QA8ATH9mdfXEpYckkGECyTkEu8ZGBiKAXF6cGTMMeSww94N1pX5Dn5kjGRso4fSg",
  "key38": "2WWrFXyZmBeD83vyW9P2rra2z4qrTFjng3vHq9sx64bLqxtDHNRio2LVD62xWJHTnYemWnArDvZjqcttn6GC3GXs",
  "key39": "4whFAq2F5MiTQx7jSLTC85NDEUwZAEHtqpPDDfamEz9Ac9LeYHa8owxh6BBsYzDaFJ1k2Nr9jfXbQCD62dkXWN33"
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
