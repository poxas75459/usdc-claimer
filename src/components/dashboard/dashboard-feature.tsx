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
    "3rSVpMNDr6cu7mBgz9FUXXx7SzWJg2jV2cBQQ1yjXbJSVARSdDZzLBPnTA2rvCghgFRLJoAwk2cjeP7wsqkvDyud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhiBoFDjvTMbi2XjUKjx19Z54NAs91is5VJzi8ne15KCHijxcm3YXq3XcPShEBXYpX7Jb1Auhgacx4CLqCu34oD",
  "key1": "y99trLbnN5Q8NVRArAAaiYhXsiyuRHdopu1NroE5sS5GykrRfKmyR3n7H2azG8yQzTheD6hZu7jhkgRrWcdEdCk",
  "key2": "2BMqgzrBTHWRgR45wE7heTi42EWZStZs6MuCsUst3hmyziMQbsERE1bVzx5LwEuEk5xDvcxWE7aN9HD3NFUeP6kR",
  "key3": "2W8UiPjCpukHNkkbWUBtRQgRG62T8UKmePxsTzvRKLa1Mng2EhJVRr6vXQUyCnA8bhwbA7gH1GYTcjTkjHXQAqz4",
  "key4": "41dHZ5ytikyHqLnN4tsvPHbzmmfSmxCEZZ9Lvjpf4yvhgDgHkCJ2G8MtGycrCcZQNR8mT2UobqA9zwSwUVs6Jp56",
  "key5": "4NRfn9TaxZ5eAQE6phWZnhBzXmAkc9w1NhRJvPCKodHuENSbZ6SDoNq637ofdCtEd8QCJ22B4z6BcKc6zqueX8mP",
  "key6": "2LQtmBCozWKiHyfz2gMAc6FuwQr9WM8Ep3vBUGiTBr2pCimrntaokCBzoQ6n8ZA5ht6e3eS3PsfXBcxnsSBcAqCA",
  "key7": "4mJHBVdhn4Agrbiw3GWHfwMwU6MMrDxdt4F2ZyqXuSMhwm92vnc6vmW9roxySW9wP8pT5ir1RKWkm28qtdAt1NDa",
  "key8": "4JWcRo3iN9dxYfHGyiLUCbcQhFMKEwQa8QJNBBqyajjpoe3K4DKHGT5e3uuBmzPqFid3dmyPjzJSDck7a3CFZK3A",
  "key9": "Tp8HQkw9oyZW73J9zrKhveSrmLFsvWyWHseGT8LaxPcXsqeYrFmkgRBFkB5R5QZ1xJzaMP5ZCJ7sVH6MLXF1avg",
  "key10": "4EUABACEjGNdyC8DMQ1hEtz7Z9Xm11eNuB7SyfR4NDMTmnzA4mevMJ8Hkhsyh4epvJ9vCyYeNV7dm25sjNDCQzQK",
  "key11": "5kuxMDujsMqJDCLtqm5aNP6Xq3grWRqCYWTg3i35Qe5FDU7UkwzqcbYXbU3DKEADbWnC5nFPu7Eh9izaWDYfX73b",
  "key12": "67SuARQxxHuL9pQv4WKZ9X2pG31DP6kL5S4Kz9AbVF4Awe45ybzbuYH9wFRHaBievZ4sF5rJ7kCA1mJGT2diMAAY",
  "key13": "66A2XaaPhUqANVcWgEvWqfpLoF58btQVB1U7YNJgzWETD9ZY13VR9EYwWTQGKCx4erwczpnJ4oTe78tbXEbkKWjQ",
  "key14": "5VQh7yW23nvvVFXjH99AEWSLuCBxov4A9SHhBPdPx9koGEYjY3zjibHD2ao37S1N3dvFDsBNYL7YscJGYThP7gek",
  "key15": "2XEKW58jgifXUg9SRw5VvKaGtVKtzG9vTQLBUjVzzvncU8WM1vEUuwCVdw7XJEpWafankWXXNfNVRzzwG2j1L758",
  "key16": "KP4zLmHCQnGra9PkUvwbKqAN5FfZMMvCq2C998wHk9k74Foppsn4RZb8nrnDajkQrBYuEnCRjzK4eKY8obTjttW",
  "key17": "5and2f2937XJZNa4tjcJYW87AYJ95nR1nsfFRNK1qAmZSQRdDejsJg7bqpKvTqhsd9i9CcRq4aqZR4iovHzHTm3A",
  "key18": "2Hd9FJzhXqU8BFve2fYCJdJUZwkCRE2vkcL9aaRx86NBg6pWmZ8vgApGh7j7ixiXu3eSdvu3c3trKiLrFvMkhj5s",
  "key19": "EJmgGgkUsRRpLocUvPJFrftvMauUX63GRzjA7GmHyLtarUiVZi54qrBWwfnchEQZCc12bssUtTCZ8Bj4iTBrSr5",
  "key20": "3Ns6DEWf4dQiityeQbH18QGAXTVuXCHsvmibN9LpbGJSWinvB9gk5WabYTi4GKj4RV4FhMECPKQigxm8UwZBcYES",
  "key21": "uxECy95nC8562C5VdcmaE7BvP87yeQ4nPyJcnD6KTGQTr7qGhuB6FDEpLUpxqCfbPinAvPusgaokENNZ4YwyjXk",
  "key22": "486mfmrtdLLLiD4zpju9W5G1jFa71NZTxs1cxXTjhXQJgmYqSdW8knP2FksJToNR1VwbfXKiNLswTZasDDtTtPRD",
  "key23": "5PJ5PehCnrv4ibjLLjm961a9GbAikVgRwaaVaYPsXxcqCzbDVp6u2Q9KemfzQMC5BbjQEbYCPybKbgSi34GsgRf1",
  "key24": "2fctQs52sdJJxvaoy4pPjP9iignoV4AKMfj8WjsDT1RFBaxbLbRSryn2yZXoTy9xJr6z7PagMPGnRmwWjbpSme3Y",
  "key25": "beSa7N2VJZdYSocUPQHCLpPu1vxrWum7Jzga6DE5rDPeZ3rJQzC1FGngmaNiriMjezc6AFFNAexyUiPMGT22414",
  "key26": "359Qxtkd9TLpApmBfsbMmb5r2yQXFWnWuiEfCHtUpyUQQmDQ45NrMCtgYFHXutUC7KKv3p8cobHHtmBYV8qo3pQh",
  "key27": "sCP8tQ4ua8DpkSEVP8DkXDNTPbmP6guqBCchg3nUqsms4BLhDj5i8rSKp8zYUEqD4zZAK5TRAFyuGjvqyQYm4E7",
  "key28": "42FcibYDHNoepoxDr6tK1jUcGxk6Zi8qykpQLo14FHyep9kbZz9oBiY7eFzc4iJG3S379pftKZeCu1G1UmHFuRPw",
  "key29": "P7L2ebqpRVLMUsu53YJNC4oKEAnqaioZd3CfyBdjzPcjtevDZq5FV4DR9rVx3B2RRVpFy3bEPsMQL1iuMuxzkeg",
  "key30": "74FHcmKVSFsxHYwPhah6uX3oUvSPi1VSzJFmPcNNYVK7x2aipqqqpf3dnWrozhUbVvHtiPuAYWpJ3brMMHXnwYr",
  "key31": "3ckSGh9mpFB5hBBe7ohpyUxLxUuyqn5jPoYPxa1XdCvVmodd6Gf8Jj3zKb3GmiBR7nQTeiMUK7tVDncbdmTngR7J",
  "key32": "nwwZhb2WrE9vwYu6Y4G4LJ3HrbyJzqSZjDXJswRQraHNFsboixk88WnU31KYSwcZ4ws3pYMupFNyEMxPMSttrSo",
  "key33": "3sef4XBKYtSS9dtnJzJJhPVfHJ4BUumRNSGiEnxaPyYURaxii2KWX8kV2emNyidSZqSBPSgYiVpAUvxquTMmLvYW",
  "key34": "3UqUTyXxHMajdPfmNSEJTBpkBSLdzAHupi6tz76ZwhmJm3tSZBdo9egxXmZwYQu9kUXLaWhQiuQ4HkwFtgJ4GZDo",
  "key35": "4sTrPiHYXyQynqk5vHWir5BsN1EHwaLzdD4T5zhS9d82S53FgZhSNysUEfJsgXC4yT3r1Lqgnx7pFguQAdFqw14f",
  "key36": "3Dwhq5jq9CdzYzk2XVG8SQ2Etv71Ag2ivR2oMYsJP9QTpc7sPoXFp8FSHzK6oFpFLKxsdTfHKpimHuDQZHEPFmCc",
  "key37": "2DZD2PutLkwZXh11NQX6MvbGDv6m2FSWaNKQTKDmjYYTBVd463DxPsm2YHGDfNMS7Xt1BKTWtVg3gfarR1uGE9Vm"
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
