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
    "4WnJTzTUX9rHhyeLzc5u1hTrEh5XJUuwUQ6TFMvTLCUzWpFkNzFPbHC7BfhGsN7RpymMVaFyWp7VcRN2ahDXWFhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcpWox5FoumdFKmpC4LF8AWd6gGBRonsUQzoRMuCoBEVwrqeSbm3nY2Uo32hBX3FELReihbpv8dEDa4M8REXFRw",
  "key1": "syUwAcbrem6ZH1wEpF9iuQ5t6rgFX8gxWhdh1oHS5GsrZiw9JugNKi2RUg3L8n1qDnUqovwMCJYcdWYU7pM4HT3",
  "key2": "5SEt36TiftD5RT8PfN6ryZ3DrC6EZ4wivaz1Qga1JTJJPZQM3B5sZkFTbaiMAGwyd4oBwnbZ4F2GicWHjFJieWm8",
  "key3": "2gtoqaDmU8Fqk2Fe3iXMBXVJ26rcatJx1FhHuiqXSBRadRcqhmj42t6SFc6arVS8NcPfXeQDuyJ74QkH8VJcBrQE",
  "key4": "49xEY9RTTaJvu96Pmijmwa41REWBfP1NKcrXNynFK3DgWfdp3DchRv3UcS6t9Pm3Pygdp53UpfccqHBjmknp6vuu",
  "key5": "3ByZnug3C5LL8xew4sqAN1Pc9BMvz2QSS9j1tNMQ6dPjLaXt1Hab6iCPrR8Tk5C7tZWV2UhtVWYPh741MrvynrQc",
  "key6": "CqfZXx7W1JBfW8LwxvYxzSAymXJM7UeK4nZC5fuEoyN5Xw8zPN6QHWQpqkmLXYw9uMuWyTDTNmozRhZRckLugwm",
  "key7": "3KkXtH6owq21nFK52QAnDfjiWRpd7hSCB5c5ssfwhJ72CMgKexFpGXbebeYiZJqfK61C1Pf1TE8ZwePKfLc8RRvH",
  "key8": "57jdEcoigP84xgsHrPs42LEjX6sbGBK7bifQ33ZSvBW2peC1ix3bbyaiWq2rcEnPC43wTK2LtczmPCJSwQGV8pHX",
  "key9": "G44Awht6PiEfoA86VxvJZQD8Wvr6TwXCGyFLyqUWyoTijZNxXQFxBoFgdVLXPpzyLwKv35V2dEgKrp823XKLrXJ",
  "key10": "4uojPGBdMQFAoJNS524Y7nmB8wzuSepGr9AF4dP6VioV49qTgGRu1pnwX35dmTeKFDAwtdFsiUJpwHXP93EbGzJX",
  "key11": "7ruZHFSxjQiiyQA5HGa4gCTL4gia12BF1m8SpejwPmYEcvQ6ULUj3287WkGeXnE94vdp6xjecUZYW5sxUwZxPng",
  "key12": "45xbPgj2Jf2rEkezSCJZcbEFdHKaGbqNMzeaBvzVwRCo7dezAZYS1fd2xW6ueULfmeBVRYBSiLnLyprFsyB3PPox",
  "key13": "2oiXAQZMKSGStxns43bbrBLnStwuEBYcjkGGCMPPqRNini9JUD98aoZuxwqsJNLp8USQqQMJg9dhYSceGpmwYWbC",
  "key14": "2dYPAEoTZFXn7h5TEKWkc7UenXGEYeFoGE2Jko3oDo2QqtxithrVaBsCeAqm1MTuPfU3PHyjQUd8feZq2zGGpnNQ",
  "key15": "4ZQTjVZzz8bFiNSmwcY3tD11CFURYHAnFQPkHY4XUi3AgEBr3pCdicJKat1tL22TkbNM1Mx6KzvoESpujutVbUHU",
  "key16": "2ozocYyXjZjvcPcDzRQF8ejVh429L4gSayGXhx2w16TUxqX184rQop97nmx7NuvXFtfXpaF2tRQKwX4NzB41Q8oP",
  "key17": "DChy7Eid1Pkw3aSisoFoN9vAeU3XFKd7ydkwvSQFjNPUKxYYNWirMbtPNWsvaZNCx4SFb39WgKBnW9ZJ3FoBSeA",
  "key18": "3tHSwj34eftQUk9rqE9EbF9cfakgZQQdSTJG6BX1KyJ3XxB43BR6Fvz5AukUyaSMaqYD3c9NvHmhL5YQdpcuadt9",
  "key19": "5MX2h8V1GPRR9Zq5WaqZF5LN3tTSCAZKb4Qb2e6nNLCCaruJ6Ji2bM4f3A5ma1qSftSbSmBS41gtt6o7sGUnWxm4",
  "key20": "4mWXEMxtqwSdaUpzKr2JP1PBkrULjU8PcWt6Fd3MWZQMpKcKY476gGJMo4pas5PAycQtNvmKXfuQFwDFYkf2jcgv",
  "key21": "4pc4HuNBvWZa1mqTj86d36EU7DrEhyKnA7vTC34nZ8pq3XTjeq1yftj5XimneVp7VVwZemEzfLkos3H3Rvuh6uT1",
  "key22": "4mSmTdVr3Kdn7tLXoCLBxhtTUYCEgwPYqAJv1s4jBw7ryk8e4fRpZ1SwE8QvRwwM24DLzQVNs3RCLDoikPT5Byqo",
  "key23": "54RtcH4dctH7EE89DUPtDiULqtxxpJQ6YtANVzo1S3LNLs2kXoq1c1xrg2yfCzWF5JtavFokSrabCMwgxCKHEDYi",
  "key24": "3GPmSWMy3MwjfFZMngqVh1caDYqWnB8oHXmKtaYcEtCiYcbE7jRe5qeeULmCeULD8HQcmLXY7Q1p8Ko21EMuWFft",
  "key25": "3W9oThiZS7PSUhmWd3t759LoVE3dMCsDfKADkrbmdZ95WszMVDeJDsP6KigWitnpTygtZWkHEDmQ5dHzBsKyYKom",
  "key26": "4DMWXY63S49pYu8UYSHEeFeWu4FzvA7P2mtQ3cdSHziTDkmUTEWTMF35LfCoaAGFNMg4Q19rKr9dALbY66Drbp4Y"
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
