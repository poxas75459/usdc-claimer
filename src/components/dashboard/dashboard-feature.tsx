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
    "3eeNEUaSyH8BqC1A5Qd6KZ4sQXvgKTXJRdLpdxzTEMjStK5ambaz12Nkg9Uh3RgkYDdsZChEAhAh2MKNNPKGY7vF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48y56Lxytkg8DaairBzdfnXvBkDWkh8FFWtSwpH5eUsPHtDytGVAgGjs6Drx866ShYNuoykhJZhaAREJJi3jrCNp",
  "key1": "6gH3fDFvc3WjL5Q65X8yYdDZKLJZxgHZGVbPitHSASmZZwuxPpJJT4iiSBnzqCKUCyjWpp7wznG4v3QStZ7spUC",
  "key2": "2pTUdoN7G2bZxpsU74vZZwHNQYvE7HNeGY3xxjBapw7vLCdN9m7iaVEuiJMw6xMZhZQBnFd7KGFtvNaxCxj6pcbk",
  "key3": "3PWCLfP7wHNY43fLWMvdRcdhd29mJTDNRJq53KniJc3wbRQjdTME2oFvXNz8UkCBJ14jyeXHTJBPVGKUVD2t6mRd",
  "key4": "3UbuFJgvKhvujLKWJD1yTgrrYZwghVvxkqWVFh6Wv5cqkDNgHCynBcvrt3275jFKD4MqSumUdYdAQjgstZwjyP6",
  "key5": "4KmKsgQfd9x4K3bc5S36FAddtQzyFLofXyQrzURiMngmQFbQMnqAfCnYvJnug4Xw3SNoj1Hax54vkXTNKbNw4SvJ",
  "key6": "5LEwBtMMy5rrXYCAvJ3qQXxw1MDayh8BSCFZhg4V7sq1ut7TAAikMa1vLV3RfwitSF1vE4bffJvKHkqTPsT16dya",
  "key7": "3omfADggh1ZvDAj4L1pEEh1wPrMQSXcEU1RLdACRcnLhZMyscvn2KnfTu1uDxRwSZ1L8V1y4GNfR1tx4amJdCSEJ",
  "key8": "xbkjyQ6st6bSnxp5LaqJErTzZVt64JG7dDd87dW6DSTzT75GoKZruWcE5D9237KwvUBtVAXqYDGT8kxKLtFULc1",
  "key9": "3RYsTxyEZxdXRH6MKQEGqN9YbHsRKwmoDWSisQvGmVAgPRV1aebY7ZNJSR84gXeYotahEtcjdKmr4viDgQxLrhkp",
  "key10": "64HnRJoRUt9zn91vXfirtU8oPTQ8HVJozkifNovyqgTQ1whx3xxrfXW48LN2tYbczk3Kh6pjiu7RVp6ghkWBGPvu",
  "key11": "5CmNbeLLWfx1VDff4k3L51tBXtQkTGiYMPfHHN16Conyf1kfgCufph1Q16tnb9e6rTPCJUhJc63V9oxQGhK6Vx5b",
  "key12": "2wYu91qg3d6Yauw1sLgeuUEaGmTcZYYS4F6cTxPK2YFEYQaWFe2LNnEHnyR3gbLpGWpEyM6sdjU3YtHnxUWeKAze",
  "key13": "4CtWtcYqn1djkZz129oAoKtydzdjPKP4K2NuGa45645hg33VgbtaBanMcCmCPZ5mZFCrTcJHzsVy5EoJxXAnVtHB",
  "key14": "5gP5uc5NTvTQQa4TMtyFePMHDoX78TdfVteTnh6VmtUVS5XkDieGjBbTFgbWWQ9YRUHoyqnw78D1Lyz6amve88Ng",
  "key15": "2f1TobRXTqpYdK6uVbPXZokEoCTTwSpHPbcAw5S1mUFFiXSidQ7YeztWXFj4fH3P97NZsWGGmNtM7TkSD8kgJVa",
  "key16": "3U6wE1uCEQUDEWS5nFhcPHUqmtATH88ELHNvzfxFzJ6xPNMdJiDHwL8RpooGcsYHeNXUePyhH4XPEobXhUZC6EVU",
  "key17": "4ekQoE5rkkycsU7JnoZtJnHNNzoWAeDC63EtBPXqPbYsNmWtfkj3jHuHJMgCh3RiqvGGF7bVZ9HRgFrBgPNu9ZgM",
  "key18": "3gvDeH6JbmC9tTgGFzaC8vfWyQBDTwNCtyk9SZVwgUZtiVs3YuHsrggFeB75764XcmRZwrDw4iwgD3j3kadJ6wcj",
  "key19": "5Fkqqo5GGpNQdBmupdPkfdC6KVLLwa5ZVHQGLzQd6MRqvEaQLRuYGJ2WMUZW27FJdgw3LBdPifoGdYnM6r1RakB2",
  "key20": "36uR2ypqUot2jYiLkVf28ZhCA383YW74GCwTcbB5m8mdrmV98iktXGJggHPusLtmxvJa6X3da7Y6fTV7RRLshBwS",
  "key21": "rjTeZiCo4bkRVYJjmDQBdohXpvSqKx3DkdNgYyd7jYSKor6S73n3MKHbCZ4G53FdQk1cNXVj7hYFnTbws58RiN1",
  "key22": "5DStcN6rYLiBw7iEqEUy5fkZPbDejFtdQyVR8Gi1knzoPuxFLaESGTiwHXDpxUgAokJiMg4ezTp1msxPynQYomnE",
  "key23": "oUL1i9VwBxQrbznTJHG1rBbq4jWLLkgpHnBcnbgLjoZcfJc6s4dGRSsxP4iB6GHGXkxF9j3313kEw36p8GsjUAt",
  "key24": "jMyW3vJWxZURwiDexANZfR4VEUJUZfnwJ6TiwemXDDwQQVECadX8n4hoKgpnzsQJDd5ofWnyb7ka6YA1qmZJadx",
  "key25": "3Cp1FYnpK7Kzfk1bZqrGrKTyBY3a3qU1KorNnYbEGoSFVmQap658y2vWowscEqEvtHpmLQCioqP4GTCzRvFZAvRj",
  "key26": "3Z9k67QDaKJ7SLCvtQf8keewR1VGQHZozP38tirNjXChHtAjjnWV324NkNxR2jbJgz4BP7ZwqTdcE2HYvLa6fwRN",
  "key27": "5WaSRe9Tyb3gLcQVe76jwUanB9bBtQpSBwV4uJckE2hVoSMCoPh9ZNMDCpoG315FXFUC53dUkyZQySW5pdLx2m3o",
  "key28": "2Bd5WsG4WKPaZpvquLEWT8YcoCUyyBGe4Pm1Rz9tzaiThyw1RKFwfEhdi2758nEDGGnUVDJrTngusgXQEFfbxxAo",
  "key29": "D3xNetwJbxNeBVfz77WBzu9ghVnDtksDrzm3XxRhusaNwE7uG7pQgiCmjvDVPFQXBxLmHRQSMrmL2Jvaud9HaEJ",
  "key30": "3E3M5suwPyCBTkE11ykmmzATvcTbGfp1LebFA2no2fM5i3TKxYe67jM8JUnpCWDBkYR8XEXqtmECS4SXuAs3uAgn",
  "key31": "663V1rv3Cibe1eig83EsW6LvLH1SyQ63KcuuwYRM2JDnzhVnyXABDcu1bd6CEwU7y99oSEkPLt4KtQkzz5Y4YB4s",
  "key32": "4onu9DKBcXVjoMZBqvnxsa8RT22NXDtaoFBJjUBe43jGgkFcz1g1xtJP93MMBjLstn1DBmYbgBp9rRaEGEZva89j",
  "key33": "5NjUb8jM7i1zUWpSimMpn2BZs6aPMnfzvUhNJ1QfRwoQG2Azv9qGQKF97zpJUnwrTHYBBbeT1AYBQEsrURfTiby5",
  "key34": "2JAG5xfUv35Apuy53nFNeXVb94HKJvVF93yRX8zPYCdGzdmTYLXYUsyHK3dxyn6xRYMA8AgXhutrTXSFXXdvJtAo",
  "key35": "3kE7qVuBqw37fMsTT7ZyBrgL1AinXzsGPq4iTFVHt2zThsGTUyFpMNY8Uz7k9PW11fZpaezTuZ1n8jYta3JktHxE",
  "key36": "4G3LsKV8jrHZoSKum6SzjrAGGq5RHz5mUGSwdaUk7Mn1HGbtoCypF4hjCbQoASPymcAwmaQSeQ6U4CH3skPDwdPa",
  "key37": "RieRhsauAPgd4uUprRFAb7Svv6H65mHJ76Rjo4Faa3LEu2nVVqp1Hnn8ff8aDYkRV7TNKECAsweeUozsp5EFbiG",
  "key38": "3219ByRzkq8EZZxT1yZAR2Nmu7h2NaUfiVrLhRRNMVs2xmCT24HhVn2ALnHsNHJaLecSvLUYM1pztMFxnYLFB4NM",
  "key39": "3jHT8HJbE8PHvgUahTzWthY46Sc5vjHVENWAepBJJF86Lx91mjdtfyCbnDkMhWhue4zxBZEMZLEXrVGGvYZKXcwh",
  "key40": "2F4bAzvfzBkAs89UcF2K5dZLc9uM5ZNK37xS6T9aydQC5JqsUmaQbUMbZrYb8PGjG9y8RfZgboRc6upKw4JrkF6m",
  "key41": "62uTYUS9yWyQhpmiTvHmHnxNBVsofUVFdBhMiRzM28XUfohrZBbDtCy5saiKcXtDWUJBcgsWFcyTfEfbJmmJPA48"
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
