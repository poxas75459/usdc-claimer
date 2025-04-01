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
    "5XHJnhzjDtzM631cJaFoqToSBjQjnKgt693SZDi7Z16rF8w3c4sKVVZ1rwoY6qhHLRjwJcHJvbpqGgADwA2tBrmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrPUyCvRPfkyJ5f3CexizSRwDhTBhA4PynvmyRkC3WcjRkuVLno8JjUEcGt4ZxxKsvtAMuzMhU2KXYgKvvh4eyE",
  "key1": "25EaMnV5LU9QWTtJmrVwioxZFW464ahD9kAMwWyJQaVivtLkt3tu5k6oyfceFtMvs5ekcorDw4Mq6m9yWN2mGRDU",
  "key2": "VMBqiYjCtHLe7Nn7Aqc16s4RpPmmfqffAvSXEnpqg7wjSeUscyTdkbMPm7y8t9Whk1koeSjj6fZuRge42VXfVof",
  "key3": "41Ha2zC4L9NzCJbSRPHndPBSEBs1WfADzR3kktVCu2p52Q7VBz7A6jngCK5t5KwMF7ZXU8Wb4m41Fs8788p9ZRG",
  "key4": "3C19sQtzTg9pXqLPkgryyA3fZzR8HMuZzYpJF8FWLXqur5PjDDc4EGEQjw1Ei9c7bcqQX3tjVHfEotNS2q1HQGTy",
  "key5": "4u2a7Xp6gw8EKdagEocASBY7LbkdmQaUvQHJn4e1w5tuiagAPHiHPNkX5pQrSK8YQHW7F1WeUnh7fviWRHmyXbTV",
  "key6": "eBDUBNvQtsYCs1LLtF8y7AK5DhkDHy8yarmkFgS5RNH34nbwfzDym2uPoh3bxuAnerCtad5EWMUK3zkrULz64LY",
  "key7": "4MMRzQQ6ZvrUa9QSJnqkfnHcibRy1VQAEDrTD1NSpKgWcfWXrrStjbT2e2TZy35aifUzzWSU92KZNA6JGoUBsgBf",
  "key8": "AsXGba7RTZNp1iYNPF6musQvkGuvpcjibCn4AFKfzQXQPB6dRxHiW2XqCF8RPUDMJiWE2QfCQiE886LAJrGDZkY",
  "key9": "d8xpEWnRMALdT1rwq6o8mjRzKQXhHDsTqL1w7bafo64w7WmwSZGyG1Pfu9tQp18THeuw4MaxwrKhPVRqAwzezmD",
  "key10": "578gSAPo9uxFLQBfAkqc9TcRXKF6wUhbPgSxuZxdwwAFW7pKaPKn2xDvBhNm9BUniDZQfbY4uHgK8gAV3FCSMCKc",
  "key11": "4rzx8LaLLyK3hd7f4ek9ypnPE4MPfP1y3qHcVuWKp8WdoL611NbQbCaxWVq391FpXSrXT1z33HttuTDUgS9rboh2",
  "key12": "4gQtK4zML59zbjVVMEfAwQPd4e6hUBaf9FwiREUhGvQAHAPjjryCmDrbfzPHtfqzKc6HZnY7A6NDXW8FDTvTk2QD",
  "key13": "5d1ruzZLgio7vBZwTHKnZW8EAGfUbD6YXEfrPm3MQBME5EsgvUHuFNjKiSa1rCRQSSzGbYTJ5PTY9hvBGpmX1fEA",
  "key14": "9kmTSdUrWVStECiXRfB1iyemNEwLBEtUkd1r3q4LUZVs1HngkF1htWjdFUVNrbKc1EvESAd1JZsrgFeypZfZEjw",
  "key15": "3T4L3xkuVxiMs69T4e5dq7LszNaY28dBd6KFwNchsMSNF1GhuhhipJcfR7XC7HZi3EA3UJ3dKY1XfTxZ7zsWoQS7",
  "key16": "9Hvax9mZqciawLpXFmJUdVeRfkU98zvPro82asqFTA2o6bCV3EUyikDfKMpU4s5vSRtTUMRwdbHCtzLZmR2Gq6X",
  "key17": "3Hjrgds86GXAppCoB13fgFth2qMXmUkiuF6Hyt5N8pCH6XiStvL3m6L2kBVfyvsZUwjrFNSpCEJmQtnP8CThaQ1V",
  "key18": "4o2UJhPBJBJnmLCe9HgSU2Lz4ZUNPGFgZMBHZD6AzhGMXf5qrsB5Y72aRLXci5BNd81UQBUsLxSsxxoC9oq8DdBc",
  "key19": "5Jciop6JHemHoY69j5bCDQ3GPDbL7WwY54eq1QPsJYoewRp8bmSe3BcmgUYPBwqSoHkX1rE2Ch45mAjkigxQraAM",
  "key20": "3Vu2KuBsqhViuk48avgbkLk7b8pr3XKaTaFmZVLm554v9oSB53u9JyBbQB4v2q71nej2mn37PpXPqkDFNV4mFBKA",
  "key21": "5Ji5x7EMW7A1Z7y8BaccMpDtHcyLbkdKjRHWRyBBNv66QQRv1dTR16yPE8jFLGaTPJuNFcCyNsDycqH2FAYuRrNr",
  "key22": "3gh6ivRsnYN6b1D96jU4F1HkGBfX9FPRLRMMETHiQjqW1koSdQYqzFHJPXjJgJYnt7wJ56GQY6TD7tAb47yov53C",
  "key23": "3V6CzMkvhJ1KBBALUb2GP76bXgkAo65936yb4bU9NkP7oRH3nYj4Y1xuA7thXPQMgoZcKXCJUdLchiwUjc8SSTEx",
  "key24": "2UfLQhEeyEoKP4SiS4XdqfuXmaRdqfvFgFn1hwV2gUd1Bg8nmhCnYA29BVXeMPYMH9pGxpbQF1mehE4o1TP8JsGa",
  "key25": "3YRboYQpHQds7V2k5JMf83YVq9E9xcJnRwGkbXwNUDa8SU7fx8FqGMJAvsBgsg7xtJsWPbkBh7LzzgEHQRtoz86e",
  "key26": "4jVPgveedPZpZJHAqG68iLjw1yZs9i9btTq58hRfbove8pYCMXJXQuu5pH1AYBnGXtE8PUzDNunjZyPnkQSyuvit",
  "key27": "3DAinR7Vy8jp6DBCTLkAtZaipBz2zvAHZpGL96aKWFsqBAuDjZzAm4G8m9g4aPJyFwT3CfvVrMfiY1VJacuNFYag",
  "key28": "29qvxKEcsmn582Zj4xuT974teNq4FZJiKkZkmwR62dm6PPBYRbQSVgyMq4Dx8vgaD4YkPqXrrXX8AgHJYCqWrzvx",
  "key29": "3RkF3n6K8rmb8aCJpgtcpZq6Hwd84V682PkNTNd4FS5ABVQMpiAkLJWEzKeQYdfkrXcBj45RX42PATqrPqA1nq6G",
  "key30": "2rgYiYpsE3u9wd6m6ukFtPpzrQ9jbun7rFfWY29iswnBiM3GQEyqpXP9JBnTd6CN8RuJBpf29CUXTfugD1JSP38e",
  "key31": "3XeBwuTJUzsK6wNLDiN6hp48tWNbKhE34rNucWHdcAng76AUnbFJSDXikqesa4bEKSJZwp7pvnvLhU9TzjX6eNKe",
  "key32": "KW4CTWkr6nENYA3fegJ37jDLBocVFRXVtSCaniQfvxXYB5TsesCucxrxpwhoYJwPWT6Nf1WhYZz82Ww9GmmMXdA",
  "key33": "4n43jHuRjrg9ZVTaXkh9h2FpNb6bAPpL4doDnhXwshmc5rVKMshjS4ESV9NLza187GKSvhikBassrsFFm6UPwezf",
  "key34": "4heZ2drXYDop6991fu8mjR3dM6PLg6rspqbwTEEwc3t4TGNwsPAJqGBUJdSsyL9mL3xeG3nEC3HeBBdovza4o9tj",
  "key35": "24oXYBVxYTVXzM1XtBobticxFVM23o9CG7zNytocbLH6rtb5WqS4ewSqeWq7PaQ7nP8jTmPiBhg5GADyZnz9MnX3",
  "key36": "39BA5wB7QRRT54W3W45Pe7XRQF7PrrygHupQxi6ALeDTvizBs4yDeyfckwNgEbMSJ4YhEerWL3oLwheNhc4W74zv",
  "key37": "2dFFaZ7zJbee54DuUibmdFHeWBjLFJt8VYHGqRoFEoZGMgFZrbiud6KH2saAHc5XJuX2fVMfubxwohoa7rT87cQN",
  "key38": "2XPViHq9kEVbC3Xo5FTYmZxodjZV2SBPX578D4jfqRC7htiJfSBFsf6GA6vYgTYrEtdTPB9PJsHVD4Yu6qAkAmuQ",
  "key39": "3MVxo4NWeGYN92a649wghRrkZZmp6gpToa5KF5cqQv2TcLST2jthQXwykxjzJyedrYNtBcjZbXvui6m62RNJKwBD",
  "key40": "59dBXgYpHaLjYJoLnTQTPPzE1qmZGsAo67Gn1a2rYNRQypvYzBEzUoESroKw5pu8z4uyFampe3TXs6GdbxEF1UdU",
  "key41": "5tNxuysLdp6NXCfsqQ5Zx7wf3CfHaSep9cjcvzCRCqvKoPtLnM81sY73PUGgbZy55Ab85kF1aFKtzksw34cNSJ6V",
  "key42": "3oXGwMXdiqFTiCgT8VjyKTzmdzBEZdKP1orZy2K7mBo63nJ7hCRuaubFLnJbfvBFkuTE9cAk9HeUBxEjbhSGvfiP",
  "key43": "5HfKbwjVvR3LDuXWSSVpxUFMCi4VahK7NdMUP3XMJZ4nRvKhPL1JkroJkYQeZ26MsqELyHzEbeQUQeUM8ncExL7g"
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
