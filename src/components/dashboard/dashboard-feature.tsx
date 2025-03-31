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
    "2CzuF1YDpCScur9m8BnstTqY3gcjzAwNA3bgUSPfNT1uPScXtZct7bUq9bkoiCstXSCtrWsJSubhJ74KzsMo7Qxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tno3MuVyEaz46J4sJt7QahZK4yniKU3zVUsVcT3Jif8S1fJbmPj6PbeUdScbefoLwNhXvJVRhfWEjWJXJhMTdS",
  "key1": "5hDk9LiVGa6YsGqcEhqmQT51ikMKUpLrQxe7hS1xBMGMvtR6hUevfNmj1hfTcEZJhb9NyC3auwsVb283CURijmf4",
  "key2": "2Dw5zU7huJ6ytTxkAXm4rMgeU4Lo1dE54urY67WFPSbLXS8opRTZBsK1Qwj27NrzcCx4dLeFz9nHWPbyyjivrrKj",
  "key3": "y1fGhdTVonBkRMhdgzM2CrX9UVSExf925Qbqm8ZTBTsvEL6ooTCtJ8DeixhN7ReMuoVubJoLH5y1WmndNsqFK4d",
  "key4": "iNqiWo5LMpT1E7BFwTM2QnPQzvFBRSgUC299UWZb7KcTTabL4mkRdNFjuRtVuvqV2qLpVX5K9Vf9fiPUzgxxp4J",
  "key5": "9XAMBoz52nLJ1j5oQZftVypDcH592oSCeQfubMyB9kGaH7EwFNTUzy92omuSzkZNFtKevD3kqHFvPqkViqKRXXP",
  "key6": "qymMEroYuK3TUzMkfa7HKVpzJw4p6PNwHd4MBS9UStcJyPaPfnLM4GqgmZ4HUsvT9DRjYA76ZyGRQmF1YWi4Wvg",
  "key7": "GnPpKetha929YSre8cxWyvZ18N5y9wufeh5NEqq9HD4w7PVqtymRn5o9fk92ckbhbvDLb7nJTe7xPP2WTEmmH7T",
  "key8": "5e2ohBsg3XdNqFdE21yg1QqkQKazoVDypjUTNCSkgUtN1DWFp3UKLrR4n8rWheTxxA1xAKhTXTbUd2AMo9eopm8E",
  "key9": "GDpYqQxbggy64u5Ckhs6F9kEjcfMBmG7tyx91pJdhpNGjKW253eSghBW5GEaDV1Nz3M3VuZjdkckWBL1g7GkP9i",
  "key10": "Uk1WQxs943rwpvzqq6hmVMkQgzC19vTPA5YsXifczfmEBMbGorg7Aaxsb5cEfCdxVaDori625bN2fTz9BUGMuEe",
  "key11": "4MPgHeWB8PqVFA3bCgyMCnanGY4XLsErRtYu2x2xNmVNfuhQSMh71H8iRAaruqsvHCWgGujmD3Z6SctPKRQfS1YR",
  "key12": "2SEDXBVRwWeqhTEGahc68qY2yCroSgaRSaDoEEoK5fMfKKCdBTAzLGuBsbGrMcLcnRe4heHBKJFGpMpo9pfg6vwC",
  "key13": "5a86ukfFGduCXNxUpdPJ1bpAHmaAWia6YBj1Ms6r6NYtjyAZJML3qKV28hBCNZ25Hr2Uk7HyPJRrmiTkH2SDd2NN",
  "key14": "5tcMe45JqVUBUpnDWgGziRG7S7JbWp355fmbCwuCVoqCvnBpbdjZ8bFjxV4siWTrjUSQ1FbdPR4fQPqo2ryDimpi",
  "key15": "4X5UsfBPxdQA7TxTs3pES4BGgGB1ntbjBvhwWhcmRBV4yGmWPLRpQ6Rvh6u1qQWgRVkjQiCmqmm73UNqUYqnBk2p",
  "key16": "2Lt1x1aPyPvk799YYqauLSSWrrhzQ5kwgqoeroqGiiLBVuNFwM8njL5D6A8PEHAUDeE63rMFMasse6Nqg7mLBxjD",
  "key17": "4Dqf7LiibgEWgSC6Etfk7CARNzkinSEFcVcAAdNfLRvCVuG59ezJJmTX6V7CWSkFu3UWaUnKGAGEA35uHE2dwyp7",
  "key18": "5RUfUz38U1uGV3vbm4xmcVUVnNHxn9y5VnFeMCSLhDkPwv8Xp3qQtdxMHy9auWJ6NZeEPNbXWY8zXxbG1xntkWU2",
  "key19": "3RPtReG6FpH8FCG2oxGQwfo8ij2W66sRFWjLmaBGvprcobZqZ8SfTnkLAHhv5KZpyH1eHibR4uoVaz1BUMEx3hNP",
  "key20": "3mYyRnBNACaNhHK8TAnt3UFbxX7pvocY7Dnw3EArbpqLoLKpvF9h9qr2U5W3t6oKgth7V1sPfTz58SCDv87jkAwE",
  "key21": "4rghjGn2P1TbH2dSpDafpjNUEwXncXzCbNrstJ3RPCHyQn5jG7i6YyefGEWyXgsCeySySMGBS99XSwZx5KMzZS3X",
  "key22": "3pmXcynbYbjrMFH319EHqxef9onuC9fhd9LntkthGLVDB9vHwmwty5VSeCs6E26rTLtNQped41XuMouu27HipExb",
  "key23": "4rJqibBTJ1xPE1tGeoPQgtvjaFQNo2RFjQCS4RM5VYCUvdj1iBSoWfUD3CW2BZ9mNtSxyUMqxq91zAqVwqfefCBS",
  "key24": "5K2JAXRiNGp8Qp5iwmhZ9EeNSMiin6BCYdfSqnfrZCY6gKV6bZAT8w6YdXuuaVn1UxfoxSWThpCEJfe4AyRyxhiU",
  "key25": "2xrzYZaAqbfmzQmLgaMtjM7Q8DGN5nKf1YxkoqVnFnsjMqUzhGTdxUinCBPMR7wHNs46cmxnv6vzmuRztC9HFRPz",
  "key26": "46yMKV7sSVZv9eC695oMiBEPDk4ZNhVuskJdep5M3PnxNzhiiLZ8eLXdN72NVf9SjdMssghTVammEtpMqGDYd26i",
  "key27": "2Zr2c1K5DThV8hFCKiuHk5hiJSXn3ZMRydbp8HrqkJLBfJfFNvdWR66Xo231caRyJTXDFd8VeMTCE1D783quzmSE",
  "key28": "61TPHb8d7f8vvooWZQgLprsLDogue8rcau4xg3wD6qwW5k2oDxSmZDDcvdZoHkDmh7V1Dz21MhpTYJKUaPbjCfEU",
  "key29": "3URHXLSAKEzGYF5E9YXdF5KfNXXjQFLYYRZbKBGkYNUVepCLYiXLC3pBsGoiB7yp4FNuuNd4eFptSs3T9mpXYfVg",
  "key30": "2WCXsMhnLqNqzAzAyMgQxy9eh7pxgUs1NBw6EUtvu6J8rXRiNEC9Gft4LUNvSGnPqpGzvyK3mzry7shGvcxJNGet",
  "key31": "3w2N6Jdi2sX6fXJarMvmtdMmt2TZ4BMziwkcaFHXfBPdHiR7rB6WDDaU1XeLXQ4TP7Y6HnxHZD4D5UXTkCadmkXT",
  "key32": "4xkCZpdPAqnXBoNcUbTVJwGBjEjPoegv7o165893csMDPYiqbocPLoXDMafFLwuURLxgkLHmWyaqqpfnhjdTXWRN",
  "key33": "4MzR2Va7b7bBNUxmdbeJb1r6CBFMJ8K27266SUrVGj4rADt8bBeQEeEE92drxVXSfeHaJfvh77ZH5GYLHiC2eAFP",
  "key34": "2bwuW1zYE1rY789Bes2qB5SQL6BGzacg3STrKcxjWXJ4cNz8p1TLhfXRnVdXFreEq2sao9gLXNLxCnHmr36RLpcU",
  "key35": "22ktuguTvRM1rTnhv3eyDZtrsu8xFV4tg449G6wYan5ysZjLreoMDeJ7cx1TzPnfVjm4eQ3JRxaBaVWGsX3NUH7g",
  "key36": "kjDjCc8rVeh6GQJys3AyvhZCYEZBVmm2V12hDSbRCphok1NBFiy1QHDxqnRogCWC8abBrGXHx7bM6sKrCcfY8Wk",
  "key37": "58mBHixsVZ3tVFdVMfmgZzD74Uyckf6w1cyPfqWzk2YBnkdadpW2cQYUpHkQqD9ebRdAyyieDjG7xFEWRZ2spkcd",
  "key38": "39pDcxmZUqn7GJ2jMBPkAYavbRrPjzo3wYDgKU1sMGyt9XKMRJELNBmdaLF2nqEaihk6Vpmfzy62eoTfBLt9Q6Qq"
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
