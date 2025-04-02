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
    "5VU1bKDaUur6rj24bMSgmKDzPPhZAH5iehM5MQrWgBouTTgrzQnHw9NJgGNb1gphtbpc67hez3JMQhtidZWXg1KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ez9GdjTfzu5uzFyDEBeHMuaSmnBZNhFXGQFqcokFfzphdQNEEFNGB3Zo38oEmbhqFpCAuGNM5uCoirzQUMEyStr",
  "key1": "5h35Do7HcwhkMmUct4UAArDY6NKHe87B27yksnVLmGgisAf46ZmR8BffosdDjzUqDHtCXayqNitNKNCriXLsebyS",
  "key2": "3hKVa3bhVU6ByLagKCheHW1uXyQEeiKGyiV2fsKwbknGoyaBxmN8wwC7MRKTRttDYPrkRGg56KockBPfEG8Ec9xz",
  "key3": "4sK6hqm7j2sMkrbHnGQN4guDCwWiHoKLDhkmQiMXYzGc92SJtHAtwtzmLh8YfNXvo9breEYqT8WhiWHFAR9LjEtp",
  "key4": "2zhqK5WwcwRKnTuLPh91bKEiPz9fi7hXy3D6gnyhNzFAqHCFQNJXL3x7RqUoGFjZk1YFnZL8H7twNgabacYdHXam",
  "key5": "5qGKRwPPTguSzLBoj1jNzFJnNRSSPVMUxoEfF8i1pkd4pWpE3i83qCSkEkNisJAKiGdE2Xz3AiTVU1VgmDz8Ceu8",
  "key6": "3FfLcHTmbyhXsVZt7P2hqCqaMZ7AXci7X5Qb5aMwLKrWcfwWfrQXNhpnXUGuBx2ouaNp7o5bvDpK7QWxQasUjVUb",
  "key7": "53vC1fKLexiR1cHvGGULUqYBkedFmZ7zRXVxBF7Fzxfxwj9MnRvL1uAivMzp62hAQKf6rQTxJnTDGAeUFTnraYJH",
  "key8": "2tF7dLzYpCXKjygEJ5uwVpg2rXiM2VxsR4XA7nbLbHhsy5DBVJbHK1nDvt7ZCqEkZktviMy3mqXCDmv3tRXXT1cL",
  "key9": "2V7cEgHmxdk7jvEuX7dWonvJpyoufcsYdEAaXYcAQwNwBDHYWtZ9kK722Eji8tSemqjWsAsQ6CTNajdB96nCMsS4",
  "key10": "3YWcg2Via291ciLpMrTmu79HrEme6HSepgkRoTXdj2nfuMfYVdB7Zcbcrhzy519MaoiZMFTnFBPc6oPqGNse6Jgr",
  "key11": "5ii5GuFvhC2131KL3ka4xzUBnNBnNPwJYWvC23WEvcFCXUQnKGWn3R3Dk4VX5QYRx4qpR4hK7CmNLhsZpog1zHpF",
  "key12": "5MFV9VCbXRUimMUH7kzkRAhZgQokiQgJToSorBQjw7QJva4FgrLkhg9QbkPJj6hCuzXubdxgjQyVrCY8sggbVhFF",
  "key13": "4ATyBCBNyUa65eRfJXSyKEwp15bdoHAZLkV5EoLo4nKM48D8Yw8bD8vbs8LB216uDEMZcjzapW2o7eVe5gEmGUa",
  "key14": "2FBwKEkUju4cCZ6LovxGjepVU1gtKqsktdZ2MAnD2kJx8rCUCc4aZMGpaJchvjTT8uMSbVgQQPcxcTZ3GZZhuMZL",
  "key15": "3qFsDGb2SFpdF5aq7h8NkKPfxejhJPmhcZKGF9B9TNSsHARda3akspvJtNVm4AFXgbVrJa28ujbEV1bJFSGYY8KP",
  "key16": "4mQCQRCNMpiMe5G7oog15KsuX84f9W4MdsYeCvcsHaJ2jxShFcLTuza7S3NJtFpmphcoGbCuNCDWtFiUjkyLVJ8H",
  "key17": "4S3GbnpDJccL1iMCu3zDVajCXDYnHFSD8eqFgD35tdFr7bBdSXXivpSPmepTp3ut1zDdQe4T46z5CMrQEnFtaya2",
  "key18": "3NswLsXTv8Zc5XrBEwgz7wNgYt5BHp69yynPjF1rEKXNh9TznCihVfKFiHhHkUrCs8DeVDFAMyUMZqBh8V1vqiSb",
  "key19": "2b6xoF9rYYm55NN4htV5WhEVd5ucpraafcyMkL7EVu3X6EcDf2PKhVXan7J4YjhedDw1kSnbXPYqzp99j4QQYEg4",
  "key20": "3juR9YRUhr426XeqYHSX4YFRHf3L4Xhz7FmJGWPZyPtwDELzs9z3Z77A5w9ekYiMQFptggag1iX795yHFAnCEXQ9",
  "key21": "5rff3RhiEv1CgSJCGE4nmwPnm2oKf1i5RivSDcLAtEowF48YhYHPqpfc1YDbhGXC6yvcavoGf4vSn6y6BP84iSg5",
  "key22": "2dQ48Vgzf3DcpSpm9WCKe368MugSSB6fmM8LM5rN3DQZQPmB1mqcxstDjePHkfrUwV9TAGGTmjNXajWW897RUzGR",
  "key23": "mDQMaqoxEyLXvHJvu2gHiPESNeBRTzba2RqPg6DtBD2xeYiWaUKFxTwcRDbZS5v2iSrSXuBzJq6wAWBYeLvrE9h",
  "key24": "gosbWyayYD7ykUPrPrBsh9s1i9vPwooGjmkvbAVqjxZzkzQmmb3eLQRopMZR8Z75hkT6ZjUHa5h6QZ8HvZH1Mq7",
  "key25": "25beGNmo9yBGPaj8uPvjrgom3eEkM2uW2Tgsp3TNBxLd6oWWjMpQimhy5ZYKVxQ1voCWXRHsdeqSttCRXPCxeTTC",
  "key26": "2PSHVoDku7Doe49KkFoE9KsUTfpYAP67vNW3r3vribHqjhNNTzgAWyJDiCz4gppckqzsVZEhjfkKUoQEXeyE8yrP",
  "key27": "3uAoqS2H1pGKo59oZxZaffFGFCKwnJadzvK9GKnNoWY5rJPNhK2xkHVKTWgkz1R4BFYroqGMVJwYsEfjLDLsD4Dm",
  "key28": "2cEb8gixMi3wSt3BPgWp5SnbsLo89U6qYSgEWpvfUbVCW4GPddURCbvbUptA1jhgrHoTrwp9gd2eRXyNPAEJYhsL",
  "key29": "4QBHWfuWr4T3zUDuWPQUhunmz5pc6CsEDyRVDPShgmNJnsP9FJLzu6aKtEDs8Px5QJh11eDFPmzGs9kiicmP1a17",
  "key30": "4qUhYKiWzHp5PxAy5o1YbF4YGoB11iULJLySkW4YoujxCQBmNj2qHsnvjn5mjec6AF4cPHiaeoQRq2N4KUsU39z4",
  "key31": "3pVNKHddvypzyn8NWcJ9igUwZd31sbQS1TReP6ZQLXHN2LNbE5DKBFfwXfXbbCRgdgB4xEssdbdcJNwK1grXihUX",
  "key32": "BjvczBgAaLE19WkBCHsPALBNEx49jMKizqy8KWAPAB9yKb73sENp5ugJWDCVexkfrQ7kVKK25yHPrEUTZDGZpXs",
  "key33": "Xu1FiiUQhFtSFvjAnN51mo53thvCXGaKy4NwEpxstL6Ra6VHdSBAdxN1nDQW7eSfwTzmfHujxvS1Mvf8NSou3eM",
  "key34": "55VHrP8nH2TNbFFxGpGBqEvBzDTZnX9YLECRaKcLjixyyZyXJUz8f8YpAf2s8zjPmaE1rvaPApbTopQHNSWffHui",
  "key35": "3tcTcS8awLwUJ6kpYdrZEzZLb2LXdpRtzvCupueSJ5e6cx8WcYBm6qkh8XFjtB9VJjEaHErqvSEFryLgknf1sdnR",
  "key36": "4iB3HZQTpwVgBXuZPWPMZgEiGhjxv8oAaqNcae2Qup6f3i9RYRW7BBhz3SXwiovTc8EWjdRQR5iweJY1rrN9KNQ",
  "key37": "RZmSiBM3QzXkBcJtq9iDkbNAXBHnDr8Sbgkvaj3vu5LcRQ9gRFs3cvm9Bp7vaYRMivEPeKdfZFUjbk4NSXheM9o"
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
