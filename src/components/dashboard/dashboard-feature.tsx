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
    "5CXgsdyLp7U4fkBC4eKxnmH4PS8k1SgBy2tNakVdU3ob4m9E3nNzdFdcDR96oAwrzvSRfeKokzByWr4rv4WTc2J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8L8oWUfdvGY6t9EzV6pABC6cZngffuWwBhNyLzFpuSEmkm5eTeR4NLDckvqxUG3ibp4spx4XMmvoTn6PyTJK64",
  "key1": "PcKkEEj8cfXBDtuFYrjoYiSLsaoqePVmhhdazbohRRPMQKvPisDXrvEyxqTeuzFLKpwv79VFcYrFNtFFGdvebM7",
  "key2": "yi7WrutGk1w6x2YvYEtF2kHzcZnZ3WU6BTPNAqHAZqoxVu9RxeyEGpQMNbpj8MXrjjH9WtxYVarsWf4HMVbj3XN",
  "key3": "4qvb7XCMnE3af3ryGJeMmYKTgcjXaUqia8WBhKyqaxNwwuLe1knCaM8a1dTpHJcRKpbyMhVNoTaewrRxm9Rrsx4D",
  "key4": "P6FrGgdurfqtr6XLBDBW1iayep3Min3HH18J5XjpMtL2FBHDP7FHLG2QaXua7VMi9scE81oh6hJuMLXmaFMgdyT",
  "key5": "2yzXv4JRPkaEpY2GXBVaYVDPWo8mKiMK8QAXuA9SR8yumzwiRkY9zM7SZQqVTn5QxWk1cM6EN4ENE4KVAzHPqk7G",
  "key6": "G5YxExxuaAB7Nhowsa9Z783gPJBHJP5wW11P7KvdN42ksbT47Uy6JourXp5Z18UQBVk18LDEAjRo5rgaZkwc7mC",
  "key7": "4u6zHueQ1F1srxRxFt9GRFvbrknkKzRBysdr9jEZ18E6vYawC4r2ehKv4rtLrvusEf44MNH31hL9MUXYscuLAbPs",
  "key8": "5Aqb3ksGaD4J3kqhDfoqZb3zHeDx4t1qVjXUSepyA6GSp7j3kHctLBqEWfqrUihURi7HHcWENZ6TNm4rn87126A",
  "key9": "5dtxMKnK81vMbeYmf8CQFbQBN9hmNKfZGL4ZLhx7NSpzr78YjRyjayv26MVQcG5J9iLsYG3G2gvAR7X72bSLxe4L",
  "key10": "i14i7PfAo2kGk7gNSM5tJrwq858PAZa7LVBhnDugU6gYTwvXpFE7yrbJovWYYHYe2WfVSu6cjTiSZcCuj7hUwbb",
  "key11": "3MXU2SYdG913hNsPjGAyCku1gSsvq8ZE75pXu1uFA5v5S4jAryncy6yivgFDL6L2mS5hGPE6zV25cbSrK3PB9sAi",
  "key12": "82XkrFboRzzi9r72n9k38VmgEqzR3dHgkXoL86y2u9F4TGmu8HcFWj3niJ1jM4e5thts54WmrV3E1iP8LYXJrWz",
  "key13": "2fMBThbzpWde2tuZShXtF66Wu6EY7u1pZUCRmtjpmJGmKVjkS9d8v89zTnbGxKdPKhFzfNPtQE3VWzuQXWnAwGAV",
  "key14": "58H3UaiKx9davboPeKrM2Y6mDKsxtRAEnJoAoK2Fe7VVMGL9qyxRwfzi51pQwiQkFiEJVzbBmJp4PeGnSAnUdqF5",
  "key15": "61dtbqYEQutLrvqQc1L3jesURdLAk4VNgVr9LB5n5gvRvYeyKgn8HUwKi63mN5YdSJnh3PYucQVufksA1H7nQKxs",
  "key16": "4fWFYsaEg21Pq4vN3h5j3Cz9BtxFTZyEc2fvM2B2tVFcYcTnbj3BUTh67b9VCdbirUxbEMh7sscb5RwZ5VmAGTPm",
  "key17": "diNMEmUJSZCvXPSs6ZaMRAXrj7bCaV1XtXTdrqCQZ3PS4nhgB9DgSewyJWWzy9xB2NeeB2qGLEs5hJvs5TqHFTE",
  "key18": "38Njc7tyxn97vd3n94RS3nw5XuDzEBj9BKeeov83gS9EBmhYKfS9k8yMZEejTGpBUsDLXf4qSDJjrdy51PxBHiCU",
  "key19": "26WX24ZsFJS1P3ZRbgUX7p6fgKqo3Ra9TxP6Fi1oXAppztWz6vHuNAy7UGmKzrwmzakgTzgW1YR4jUQp9pP8tSrG",
  "key20": "4ZvdX1VPFBPCCZMNrhdKURZBXesdhDrqF4VXsPr5mrWaVkdGJsHp4P9hMGHhSxqBiMWqd9kZjpFdThZqwynXohiK",
  "key21": "5Aa9GZ3AQ4bpU3TY5mWQaJW17rF7RJr74SY9nC8hfLbyhxVQUz9fCkTi3RXad1xovUgyPFuGpKx3kyc4Hb6jbV5j",
  "key22": "4PN1AgAK33D1mF7nTuFEr7Zd6QEhghfEgBFuNEsZ6tH1QFeym4EuS6S3A8FdHdnG6BAysCKu8FQZJHm2amd9tuA6",
  "key23": "5oBssjQ6y4X13d8iSK3FH7A5wVgiPyVATmpobxe8CkfjbiHCubVMkhULEASDnNik8mPe6NR7FDHHTUX3Pz8GwHHq",
  "key24": "5piTdrQe8bHmYAqxjLx8fqzAbE8uRBDNWphJd4QjiFgXAKYX5qMHh1omh6cWwgJdyGx9iSTqiczir27JUuTwkDgN",
  "key25": "3P6ooDwBxtsYSzXrHvt8bKek2SDtFNFZXZX6amezhqc6V4mdTfEcE7wv3HNNTGSSEFKUC6SS7pyeHmM8ThkHqBPR",
  "key26": "3NSDFjtNeha9sZn4WzbnRbAJyYAJKBRnmzTSrG6MTDFDKrbhwVCBSn3P8bDsZjqNZ5Q1ou83mM6yC6dRmeUHLVvZ"
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
