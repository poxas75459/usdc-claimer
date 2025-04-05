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
    "nrKMmBezQaCtjsXVUidMtoyHnXU3uuMPCLGRD7dPxxUYjtucgpu1wrQ5ccdEbN7JTcAQQy6hVqBFsTW6eJ6EenV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egQNbkc4iaptsE1qgvRckwKe5KLbMJCLo1xiYPqYuCcgvgYbbzu8bWCVatoLqwjRwtu7zWGACz8qroKyQTnmfog",
  "key1": "nCQyVHUSSVbRQ6yFjPmQP5BacrZJFKWGXR8yRtdCprnDi3yiLK2os8UTmGFbZTGU42nPgMTyuEJ6FQTwFeeUk26",
  "key2": "2g2whpGUkpis2hZkysidfmqye4D8oULkHCZvZ1Sxf96MNjWoub2SqBhKwL456BJNQGWLQSQuuPAFK3C5T4akRnxw",
  "key3": "444fADyLMFcDLbE6Fkt3myDtgs4YPzaLLZN1CSvsVxFAz8pdWQ64YvAPgEXpkeLqLRt4e9pQ3XWr1ez1eSK4ZJXA",
  "key4": "yv2R1k8Pn7qieZ86vksGtcbxWMqRHarcoqNfRMHLm5WSCDV5jgcNyTi3pweiqW1dVoRTvYmPwwa2fKs3Y9uspZ7",
  "key5": "32Q15aCCnUgEM4qzD8zx13R2Bt9zF5adZADQZKXqhdUhmfQNa9U5YuGjmFqNA9EuZvVyNcmjimgq9JCkRJZacTbq",
  "key6": "3ru9YLieQaqHtmxyeMNTX5STNKCS2Cd8rNFCnSn7q7seLDQcWnCWwCDPumAgJLhm82KoLh2b2q2Toxtp8QNrLUba",
  "key7": "5NNEy13H5X6oz1Bbfd2cugifmCwgMsLcwRH39W12MaVMdRNHTkS1bgvVR4CnoTzZmooSFV5jxzEHQ5hkUkBhD9Ed",
  "key8": "56FCxhiLXK5RVWZG7WKYPfeZkoWZZvDKvD4mnR92w3HL4DrxmUxY1vDXYpq2r4sERaLFrSJJwrNureENScw83woj",
  "key9": "423iQXfnLEsznP8yn3nHZqMu3Nr1H7iKK8zUw9BfVobvquHvLJ8CugbQDx4RjukMkhNRLCo5Ysr68ybTMkMhNnBF",
  "key10": "2m7BJRACrPG11UnVZgPk4BbXhCFcV85xToKPgtrCPDogjNjYXA4d2QKXD8KUpZLXgZE8aCCnhU7gvaFY2GGTQE21",
  "key11": "34WHePHGxuNFrtsJ7SMs8E825zTUFXf2aQA88f6na6wPzLoDKSWWcqP8xD78T4ai8TsYqRVbshLsxVKLeAZ3wfiD",
  "key12": "3mVvHyp41ZQhML328gPtLYeLfo2CYHLRjzoEsru2PgGcENUNc48juNb3R6oBEfQkKsSWRM9WUi16o5kt6afkgmUv",
  "key13": "35fN3NLeh1BBMypjgzXsPo7v5bhTAXJvSMmZ5ay5aaZk7EdPYq2CeCVKpTrAP3mFJQ7Z5pafbdcDeKJrR8WAm2y",
  "key14": "4HQKDo1rSNMHTBCg3bzzEwWzaM5vLL4qwsjGXxRNkdku4LEHzQ39rrbMktjDuoqh2EPxsZZrTmwsVMNvJTvJP8oR",
  "key15": "2Fhfi6UPpGiR9Lt9hyiKcGwQKG7NQmbC4FVEknHJ8iAmS2H9WM1icckKSw7QEdHbyWcNiA17uEmmbFK5Jv9xLeaW",
  "key16": "2oueSGwN3nzfC8sTJsVqLS5L6dnYZ8yLfqr75raXmRfdxRQ8ZynGpKELb2fYrbrbRyXfz8cqbBMsZQ7sUkL1gZJv",
  "key17": "4BKfiNQ7jU7HAi7mHDbtFUJHuhnFEWujmpE6THpeVRtWXphLp3gjqJxbKm6wDHmAiTDXdqsg3LzyDN6tPvMQhkdJ",
  "key18": "Yz2dq7YuZ8JZcrM2zMhXu5E14yPUAqXyNe3CZ79ApnWvfLqR6ARKU7YpcnbBP1dNx2HK5nitByCoYHDg9BkFmJb",
  "key19": "5Ea7LiNfzPikcpPwcmLnkWwy2NYew5A3pWbbDjxpwK6H4QpDqkFgA5Wobx8qc74RcA8MWcW6y7WjRW9k35g7Cn5L",
  "key20": "5QH5AybXBi95Eebug2zAF6BAb8fhzeNKEqXLE38CmdSKLCaAf1KyS8xVqERYFB2DmsE3TYhcnVVNu9s1nhGtTb1z",
  "key21": "4xqvgbjH8HPy52D6wMnT9mcuEtiwGPtbvQWiXuTRrxpPQy8WxX4ft91WAVBaHZkNR6pbtUzdimhvepkvvnVKEfUQ",
  "key22": "4VLBs7YDzPL5SjySVk6EBdEQdsYoMYTYcbTgkvgV688BrUrUfSXaH929DbP3qqXuFoLffqyarPo2MJXEZCxMfELd",
  "key23": "43APPFKxKaxrcLiHLpKHPzieDKmu7eZqXz8qek4uKNFZLByapzCLqHGfjzS1G9vj3DStUwResskHNxtGm4YrJmba",
  "key24": "4rrkvzQjrvMDcoyLcePbPmXvuNSdoDuFTZsadLHvZWFHRPyxNW3mTM8c15UN7RRzScuNxKHGS6sk4vQTXYzmy4VY",
  "key25": "piHXC4WNf627UwYghf5K1izr9vUqvCTUXXLnNXwHytaMwRwy2A1YWadFLycjKPJKhKvRDSX3C7zvx9MF3PjoU57",
  "key26": "4XTivZwRoz7JaPfgiTUkDcwnDYuaWmZY6BSqvir1PvrjpbzrwmMiHdXixtDW77EaBFUed91HdbKZgn92KN1TMLWn",
  "key27": "4NhTcx8E1ZvaYk26yayRxvAgeQsvzHpMgaBMJFevwqmZHPRaoD5W8JPs7WT7aHfohqMoxERE54nVJzzoHugqUC46",
  "key28": "3GwG42kWG9JMoiAzm9QZnzCdsmtHe9K65Ziwf6StZSp5PVN14BkKXrvoxFuD8d5bAaDYCG2yWncrGaUapfx99CDh",
  "key29": "yxHEPYZmfbUoNyRXmt2VHT8vQKaoQi2CHxmbGFcn3YycWLXXk2RkjRKvrNxeWUFRdmHZqPhYjEqdQVAX62zo77R",
  "key30": "4DJH3u273tYMkPWc4XRAViqUCxGJQQT8yP3FAuhaabZhswYzvva7zDCB8cHwFdWXoMhy3aKNro12V8aYfDR7QkM5",
  "key31": "5KkFKAfyQoxt41xggqMfWJnAK7E7M7EVWZBJ4ZqRy1WdWP83hRLaHFU93349wv642Ah1qHveydxiUaZrh9R7khhG",
  "key32": "cGEhSgadeVjX7bx5HZPat4jMKX3YLf4QGcbw9QE9VPMAdNGWqRgyZ7HpapAhoL9SHi7KdwSZQKiZAnXU1JLTkDN",
  "key33": "4HDDtXWcJN7CMnUoa9VtNMY65JSgyBoN5eqjku3pud4jEn672sAgZC5r9GvcadSsbeCKxrGFYA3wvJWQAFmWvCeu",
  "key34": "3D7tHu5GR6HoUXtpirxKmp5V8tjzuT4iD67FvYpYdNU2D8JNUezQurmabHmC4xrTxmevPexDGr2tNB2XpRuaAMVt",
  "key35": "4zeVtEo3759gvYn6ZHjCsqvDsesXj3WgZBq5p37AefGwqdNkvQjzvTcmtsssrkyreWZcssXuw49juRsWu3rvxUV1"
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
