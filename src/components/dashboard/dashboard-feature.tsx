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
    "5QoykFLrxmGd1AFgKWuQ5qfVVgJQbiWtwQ22xPRqfEyqEzEA98dcpk7muD81uGt4JMt4aezffmRaqduz4rL7EvAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j3rqKeXgPFJsV5a9yJ7xGUhJjbr2ngB47zEk6MgRqMgU2JT4d6HCXDdwDKfhAMi4BkU6FJY7QokEBbhgP5tviRT",
  "key1": "37yzBofoyBeyYmRr2PWFrvzUr1sTj8vRxpvnYkTnd8LnYGfbDm9JbDerfrf11opc4RL8vmpRXterPEr4Le56G1em",
  "key2": "2upaqhpB18RtzUeHwSkBX2Eykr7XS9fRUZNj5QNXo9yVPuoBk1TJYEfTYNhomY5LaQjnihh2GNVTFW5XQhrzWSb8",
  "key3": "5GLtyHC8t1E8RMFVQyZwiDnKW6ffW8FBWZt6S59EB12Hy7zSrFju2aXspthcyNk4QK9APdSHU6xs4KPPQwLHYQaX",
  "key4": "3XfJtMLfqvL78eb1T3hHXu9TgqESKawJarNgUaLnJRBba7XHBEVRcUg6eSG5GPVocPfNDFQJNMfhgWRxBjRGP1pU",
  "key5": "5wcPqnP52FjNQ78muMuUXx5KTDJJMuFfg65bDuQFSaXEwSE29hBundpmCZPt1Gsx75VhHDVMKtoGQ6T5rhRpjx1",
  "key6": "3jACstYLsnrCf6haLZmfkrKEhGNnPSNmt5nWxEznkZ8ec4rhmbEtUKGocWy3HEJd9KoBpNdn3fygyLtVxLupDQAg",
  "key7": "3K2wHj5nFjJcesW27sPGdYUxAuJGzuZQDommR27tyt2aNuQ2JcF9tHF4dQ6jVADi68BQTXMUe3keLYRYB28DRoFa",
  "key8": "wy9oG9nuUvowEbsRA1paX7E7ytTSXS6f7ohWB7rVrEqBEUcr1aeuQ9RGGA4J338XegpfRTxj4eno1UPersddA7x",
  "key9": "2j3ANDSDAuhUxWhTQ7JDgDAU2LkvJb9s6TeAZ3qpkedX21kX8iJJkq5VFRXZthHgBti4ysqF2E38eMYAxy5PsPhc",
  "key10": "3TVYuaLU5hRYbjc2niqkzDCyhbRUMVESqa37NA9ZcR8cfj2M1v7cAoQSYDVqHk46XuRkxHJePcsirKknz9bd3pDv",
  "key11": "4MTgNPMHcBct69B1YbYDa7vD7QsWWKGSD86Wt6LHm5frMwwsob4QeMPQkyHhTJ6dqLywbHabDYA8uDP6q4WifhFv",
  "key12": "32Euavs3LkdsHAgVoqCRKiY5HwdTT4JjQXeMvXCvK2Hr5x9tbau9eh3qNbk7wMCVQ6TwsbD4xySUUhCFU9E9H8pQ",
  "key13": "4pk19iZf1CrbQcbZ77TQhWaXNMo5z8thpS6LnfTDpwT6mFNcXKhkH3dXFWkEPdvEwmuxYT3uXjkW8b9oiC7UnEVr",
  "key14": "2fDRRwVXm9PiFYwwJyKGHmo6qJ9hZPSztp5gUsbFbZwbfuP4qErHxJsZ3QNZvi3WXA1kKyryBtnB5zRjj2YnHBix",
  "key15": "mEqUTkTGw8yJ5xyYeCbeptaEF7dydzii7r7mh5XMQLiahQ2VHTmaDhLg932e6B9Jg7BchLa77JwhmDSr5vJrqzu",
  "key16": "jtg7ZzszsQjRHGtPCDzcSEBVFeLQYZCxNguFu24HKeEGgxjjCMJTcY6iAz6aByvkPB6Kw5DKA9oXbo6bRHEdpzG",
  "key17": "2W6vbaWNJH3uZNpATjBNdjVT4dr5s63T7c89jM9BqoMEGLGYg7mJHuPoHQvdWdJGm3ztCPcWPDc5t8qT4wARWbz6",
  "key18": "sKCjSafRdZ2PV8beRHBnCXraKz3hxwuxM4i4fFxVkHuzgFFY5ZBLxUFkiKLAHmKtBzKLEBZxkzLjzxxX7ybrCv3",
  "key19": "4hLgx7fKAvfSAYriex7jbqNYVuDSWzmejo3dcdbbjyHxXJ3Y2tiHyDQassTPhydikUcQh6T3XkgrtFrxYMSfjXhP",
  "key20": "3KRrYpUND7DU2RUqxMpr4T7Esd4P38Jz71KYp3ctVrHkAzBmCVpRhaTX6EAGotj6PGitMiZQYYYVFtemu7vfRGu",
  "key21": "7mhszSyPwGmgZoh6eGSxUP3m1gZ9kxPuZNj62ABiXAuhjoum5W3qjsY9vf2CMVQT4zabRxaNbFXTqh2wCN2RZiZ",
  "key22": "4YAiCHTEr7jtKB57napkwVjSfrWLknn7mSYxmswiDLzN8XGH2HfPtouBVaRX93sgfWTyJvNqMRGqY6bWDdbMW7FY",
  "key23": "2TXZBcMGNk7qgtKPLqU7AiXDLvbh6k8ND3WxRi4BPGXtdyAMjEh5GrGowm7Lk37hwPmXLFrSnmynj3NKU8YyHVUf",
  "key24": "2Xrb7iBcDL9gZiG4RcV9NdgF2mzXygKuKoappjDWshGCe2TDFcS91oUCjcZkcDf2J4HLfsx9pkAcbw7yZ4QjiXas",
  "key25": "3vva9i9u9iPeZfv2MQVFuuYkukzTc73chrenZqHHNEXTGsrjT9wVGtCETbvY1Bqeh6bBWsqSea3JzdrFkQutnw7D",
  "key26": "2sYfZDkmg51ySXMLVkyVkWtspdcBSroqoFJZwJPmrLQH7k3SEKdbuWNAKeBdZQFos7ad9J8kcojjMbctXX8m2FhG",
  "key27": "39jtATNn5kHFAq5RdxvNaKd9cBKckLhFUdFePBhYqgF9PzsY8B4BqnN3gZ36EyMybG2CLEoS7yKfvWoHGbgfkMCp",
  "key28": "3NHJGaPygYGk4HXARuLT3s6cJaEvovppTadiYBVYhJeSW1UU9Z9i1NeSYGkXXwDzDJrgdsEBekGAHSwhKYCzCk35",
  "key29": "34tjok8oRuZ9CA4fsrwKbGtpWjN4tkpMAuxg7La7d9r7sKS2aZTHEyUaXqQpL5f69buC3xnHTZLyvxj12LSNMxnb"
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
