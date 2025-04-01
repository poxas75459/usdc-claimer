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
    "5jz7DNtZT9S2k5rpM55RF5AFjn2F5N1bS13owZA9HuGUxMom36Jqn1FCfL5AzvbSKyad5yhqSjt3mxdsK8ftybJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRFM95BcWE2XFimDc4MV7LKnCBbEbjBFzR2sqmRXEQtwSqcHPKBMEz91qwS4z2tf21WjJEUpWGdaqrGqfnVrfba",
  "key1": "3N2HzLKD2aqzu4yx9ScDKNbnxXAXCDJMiUHc7peBRo83KvLL4HHkBcdHegbTbHs5N8jftjJi9c3xLFrmM5FMHkgW",
  "key2": "3LGhE99Ucjsx6qfzMWqTDNno69vhojjfokKFMrUAnaZFaVxLwhR91r5tQvPuwwjUv3k8NNEytmzRgzgB6XLewUZ1",
  "key3": "3HusgVFWdeBnZRyTcJRR9pXN4b1q63F5XAgQDj5GBvm1RZE5L6kn4WPR6J7vQRAD3wNTFDcS2snBUAxwJrcso5z5",
  "key4": "357FXrojJ3TTG5EP3HfwWHrQmefJ9JcALoZZYPySbnaGg5CbPH1cxUctP9hGJSztmaSskJE5tRsWysfNSTa2c49Z",
  "key5": "CYi7yifymDFKfuMpy8hU5b6cL6S3k97nfAjEt623PekQz8cM2i9HCmaigVtwXVUUpsfhdUyfQN7vj6mWo6cxxpk",
  "key6": "5EY7r67AJyjYd9TyswhGWvyP5kowQKeA83TfwSY757vb8PJ2bVGi9Kdz7B6whtrkuoajzfVth6n76oYtaEuiVyy7",
  "key7": "3hwK8rMWjTDJF7PHtADBoNrcmiL5MMnQ35WfTxa32RQpFdXTw6ofeSZdkZqxwPFNqtvexvwxMJUexJCARexBFYHp",
  "key8": "4Jg9sVYJtwC5NciwQwzXwrK7oDyUdqnonWYeYUjSnjNct4tSUNVeoY7aLLxitx5cS8AYWvNucngZAoc9mQLWcnb5",
  "key9": "47y9Uws2ecD99ZA8QHnwjGmnb6V7vJjzWX5ysuhifGmWWGSpUsLn6wjSGmCD4kCBfNFzrQ8EQpd2KSSafsXiWsG9",
  "key10": "3YeZuhtJyvR8s8xsBbdt8ubBqs25QM4JHvQsT6XCuRpvmZs8nU3VM471yhwnXYDCzESErjmDV4jN3JUewBynij2C",
  "key11": "2ieX8vrBYs9y6VbyHnSf76VwyENLLqSMwXqySGfEfu74ZQ7KwhYx9BHCY1RowpZtW3x2Gh7DGkGjgftutZwi7QgC",
  "key12": "zff8zmrbtrZDATfhKH8rnUEi4Jos4mMkzSxyp1qPnt1Bz1t69LS7PSu1gd5P9SQGiwqcQLUwvkqhupYFPcQNb1X",
  "key13": "4Ke4SQueFedtr4gx9xBhpeSYgGDAwRRkmhmSA9dCLGhvJmxTREMqV3HLBHaKa2vfHZroum4DUvhtxhry5uucq2B1",
  "key14": "4cXQftBWweAmNzp34pB2TGY2n2CXS8nnzThGjQnYvEPwfqcBXBMbfzbFG22pxHijGmdocb1C4t17bmLgGLFBWBuD",
  "key15": "7cdqWhxDxH675pULp5CVcGGNhTdfzThrLDA9GNQNLVQnKcsxaBZ4VEqF5CCGGJypwKL7U7nVCU1D8ewpn3NrETY",
  "key16": "5jx22daQBe8ZoV7vm2bF3htSZvZLqEZ8kNVfDs2y9efJY2fTVaz6VzWBRbfFtj6TdiexkdmVXwmif6k2yXTZdrzk",
  "key17": "3yRzpuv3URR6ZMKL4duYM8GaFHSPEvMjM3jLhGmpZAcNFvwKSigaX2EPB7fbKn1niHCdR7rW66RUQ9VwFa1dhJfv",
  "key18": "jb9Xc2mh6nVMcCFQ9SNc9wcXD184xSNCAZ78jwYLVjdTTFUWrqv7ySyGfsNeMw2SN1wYmAVh4uQjyLxZECnbC5z",
  "key19": "VEezUKe3kV14UxwVUqG7hF8EXPyx7fvv8MLFEVs82ekUdCAeZTA5ddC8aukMxXXDs5BhdVT1Vpw5DZZSwZxFvCD",
  "key20": "4yL5Pk98LvbwyHvKr4TUtZShsN6KErWoC5SDoJSE9LbqxZRdN6QANA9ye6sprHKxvU3ANmmSSKxNyupVnfxTGnAz",
  "key21": "rz3ms1Np3rxg4WTrWybCZAZ6ioU9ZEvoUyEZ4UfkrzJtb4A67xdPQ6UQ5FANrHXX1fyriiueV4mkDoVLXa2U29z",
  "key22": "4sjnFDhn65VAwhYtEt2KCc7g58mpouroCMWmjzovustYYGn4G4yEFaNbvu5XKBDLKwETu4zPfzPG67bHhCAR5ncp",
  "key23": "gXZnzqvE7fnVetVrCxLkSmuvhztQsXtDEY5mNM7om5BDp22JeJLLH49XSp7MkzpiB6ZRdzuuA64gXLCXKhTgbnJ",
  "key24": "5cdTXoKGjGd924TU2MHiEAubW7v1aXKZGSgHQYnVLj5iRBC4fFEug9iKZoG2tgK8SMTDZ9j4V1Emn6i1PrmaTWvE"
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
