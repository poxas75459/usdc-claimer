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
    "4aToFEfsFxvWbDxEB5RviaZRHgSjiw97bUaBZMZCsyjMeemD4kwsWhQpjc4QobHP1Pdd9X5hBtkqMZTVC5scUhg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmiAscPmHeA7RsuSSNumk3bXcRDi28ixhSeV9ctoiqxanjDWGDsGkAcnkkS238Y8ujijRx6E9YYQumMjeW7vWhY",
  "key1": "4XuadNELzcyuxAiVe9z72xMrqi6UBW5MVmUn3hU3Rjxz8Y52xd48J1sAA44QkoyUvbkv5d8H81vd1M6MmbwTuA15",
  "key2": "2xua83CoAiw7XEQGr775QjFV332AMBCpDMEL47SnUUfupe8CWFyfEPj4g2TUxHiWYtzvn8QtJLbz2PQbRPJuAuwz",
  "key3": "5XBpFKmBcUni6gfSQFBZZEGzbFBX29K3jFT1n6xHFAHma3juDhvduF9Bzqwn5U54rWMydFybMkmY2WZwfcYHHJUU",
  "key4": "2xxK4SUeGkXSz4CWL3H9SDG6htxJwuf9Fk8NoVN21gJHfMnzd5zZFpG1E4fUdgervQjAMyJJTkuQm7AQdNsqE7vX",
  "key5": "62pmf2rvZuDKtbeFFue2wWyYorGfVadDRmbVF4eAVrCjGLBFny49rp3MgBo92q3hm7Zp7QXJEhyr4HcuSA4Fv7K7",
  "key6": "qVzfg4nvekkW48X1erzGhmvCfDL2AeJLta87zRdsSKmtd8DTjLQEcoT61NvLkH5pum6URcCYSNLK36tWZpnzVj3",
  "key7": "2cpCmmyKoZMxSDgzJDD3dJMc9n7b6uy7D6sgQF5Y9UKbg6bFbQMbUZXpRY413Fc8DQTCFMx7FQJ2vc7kpfLyLTKW",
  "key8": "5SsbG8aynbzgChqyPWXxtUWunoafiUAaePfGkKq6bn1TpeaBxf3HzjtAz7ioSakbo2GJqkhiA9ZjeeMB9A45FTGg",
  "key9": "rKmSPVJzLnTeTRWcQjPJycvsokBHgLsYVsJJS8uZt6Hhg8UR8NVoLtwYib4cgN6K69nnbBUgj9MYnEEfdwauJpG",
  "key10": "43TUG2VGzfYdyvrGLoELedF6hDYSS7TmDwH6HdgY7tbtGGAKgrTNeiMAwbXJdcuzfPi1SGr5o3wCLTHpd6e7sNQQ",
  "key11": "58FtWQh6P53UsXcEsQBJb7b192XBZyMqZJcLvHX5vH8duMUr1B7hzFBLWKET9iV6tz5NBYNXvUjNuQykmj7nUGwb",
  "key12": "5KZgoVnohbVc2szeafrd2awRHccwb7gK24qAXg7rvJtgDRiQ7N12y6UWtXQEXqm8DNskwAvjyY2A9tyypNBTCtKu",
  "key13": "5qFDgEyKnEpFDb7n7XhLUbvV1ef4HF7WK9M88Z4g7UPieTYxgktnxEQrzQiVo19kxUsSpyCrrwmAP4XupFoRcT83",
  "key14": "2JQRVQwp3J1rMkvAUxDDApP35cqEorJ8nJiLcqNgZqdv4MmpZRxvmnJBFhgB7EPY4Z3gKxMugb7fZVFgvfGEB82x",
  "key15": "2XuPhCBkDtBd8rGaZVdXPZmLLtE7tPgreK7dYMqFRLHy82cwqVkcMJacLNM6DGzAhSRYvxQnzUAE47YW1cxWkJgQ",
  "key16": "2DQFoTwAYrQoVd51w9PYUuWonjFGCCML5avRweYj118L1DYMbiCTuvHtBywwMZpz1UY4qDv7KeGy6oavZuY5ZymP",
  "key17": "U49zRiNZWDxjamQGNihUkNiXs8NfvVKoaKXkLcv34gFLgwCQhZwvaAiGtUkQWwPGCevLvpNx5TY5bacbb9idVxP",
  "key18": "2Khsb4UrNreZSEknKp896X3YpYnC5PCKkhQhtXesheJ2BAzdpBDyu6RrZZRbipGdubeqLBfPDfwiPzayxMBM8tRq",
  "key19": "hGS9Pmh2AwgYnUwFgHR6GYjUow2PVnjZjEfLGiBRScMmHi4kQcCZHtXYYbMCizuRczb5YAnRyfc6AJvch8cKCgH",
  "key20": "ofgZcxXyrK2TQgKBUYdNEtf8RrTc6zDBHZsjHQ8sEC7WYcJftv3S2rMQyBf7j6AD2sjrzWbU29TsmbEPapQQrjz",
  "key21": "geFXkURPNtquEEodGYb6Y4TPAfpUBny3FTYV6BUxg8289nwXVWSRFXzDBfcVaCrudeKEJ4wf3uiPthiijUXrzLY",
  "key22": "neXtiZnszMLtoLfaR3g8Ah78uMJRyHrHmGBxhtMKxbqMMaf2QEprWRbSsoDtsXHzzkTTseWAC6GcagcA5YbBrec",
  "key23": "4BESgqMCndvCYuubXW1oAFFBVoL6vrorNECdvVNudXaqnTwLwWqestSievJgGMsAdz1XcskSffisABNvBQAe1ANj",
  "key24": "3GzVq2ZHMXMZ4J6RmsCAuHgWtRTxtZStT9tbcxDcGFq6d4cZoEqk42AQnshH3b895DTYcTEHoo1e4deKkxnhs2cW"
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
