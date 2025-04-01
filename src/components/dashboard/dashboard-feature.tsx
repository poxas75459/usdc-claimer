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
    "4rBRmfNV4RbTPGoC2GmqQty1Yz8w3w5sTuoRf9a8RvBbZxYkQKKwse7ahqBU31ztSekK1Z34NPYVXqhJwn1bRpgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNviXhicMx4n2RfC9Kdw98pNYyvDYu81oi3b1vouUFijiXtVSeCR7EohzR9GMuQKpVfWBxh3GjxwX5L6XW2dzcV",
  "key1": "4Nr4HMvzMeJrdZX653KM3nhN6qKeB6Rbms4tHFCvSxKhVNMDJDHHktVCFAAjGrDkPjgS85EDF6k2BvbFKY93UcyL",
  "key2": "4BWEM8CDWPmgK1Lf1d38yzEXFRxMmPkjphqsmvYXi3bf6vGuWkMBS1jUkaM9Ad54GVrpyUYTYqCmCRXKYb28F1AK",
  "key3": "5MQQrp9faPxpbuFYRfwCzZBvGRr481WyMs5LBoXTvAcHbBJPzdm5ZTxdMo89Lqx1rEG7kA837tuvyj2AoabP5UuR",
  "key4": "5Sz6tfLnesWNDpwegr7bX4hGzADtUEJmD6tYTdck91DHQnRGSsYQfVLXxcQrsWaoDYGStcuuN6zNdLQhBjfH6Q8o",
  "key5": "3LeSZAkoBRWWiZY8pQvQM6gGrEKUGfus7J3SBNHqWgJKeumb2UFCkxoKnDr536YZBhbek4YYzh4THLaPQ1JH2zbJ",
  "key6": "amCjsSDF6q6sYFDGoh19XmR4Ce15MP2d6j1mAJWHffgSjkH6c6x73ueFpSCk2tGGFZ3JLsfFUFkZkX85PHCngtX",
  "key7": "5q7UaWrkJCKAtZJ51et2oZSw9zcbzYmDxUepD8wUPAJ9wTLe1aQtHMbkYjsoLoTp6MZFM7vxrgoKwwCD7YfKMTjb",
  "key8": "2pC5vUfVcnvWN5duqWtfVuS3pdHjLUfdfP4MnRqyEhSwdLJar3Jj7y48fLiJWn9zctXJ8fcpJaUhW7ojo3tEFjE2",
  "key9": "4dWtLYngMXcvv5nFmcPBMq5ESgbBK75BHxBEp5TfkozRqs95R76Q1qvgjUxeZkZSL6P3Lt3cgpjBkFv47JwiWwvC",
  "key10": "5Fx9ZUj3vxq9RNFqVmCC3dtZ4B48Qn3YMGKynx6CRQsunw4NbRouV9U394NWHs48Ut6iWkVQVST3nyyxMMoNPke8",
  "key11": "4Jg6GdVEKLrq8mT3VrLEVnHF8WXaaQ7D312Y8NadQhiA6ffVB3Z9gwm5YhvpMvuY9qX34omGQN3NPyGc8k92XKP",
  "key12": "34Fva4bNC4SjJXjKzubLwYcuDcHMsdeYrSQ8GqFEuuTzQFgszsmcQjfyyp8TzxfSfvYRQrW5me39xARh83QGMjVg",
  "key13": "3J32zhCoeBcF8xNpCzDnxt1gqUHvhCXBqE5VCdcSQ2oue5BNWCEgx4h6Y4kLFegDqqABWwHbk7oV519BVXq9RPaj",
  "key14": "2HdaTkMD1kXziUzD5Eniqfeee6kGGs6L4bzCnhZSfpT7nKwLg74o1FsbSBiFV8ajWUCzM8U6tFZfEa8AemK4QL1V",
  "key15": "4jV4MVTMGc3bP4Dx69Zcs9w1upoXP5vEuz9EcWXh5maLVotsXvcdfFPY9DamWbfjfXpXSbE9Ki3MVBoDyYQ6xs6F",
  "key16": "4EZj3hk4gyG2kK7miU5nkWSTzSjzuBDSDMYKdXwn4tGHTvzZ1xAPCP15bEgobopzg6ciqvQdrJktPefsj228npP8",
  "key17": "2wbtAvRophiQkHH32YYRigWgrZJ6bYk3mW5vPDjzur5UxEnSGDiDb5QqF9c41QL26foB1JY9YbW7SUMF3ZbEjVy6",
  "key18": "2UKexuxhATv4yBfMh9Q25idvyBpih3gupdDa643ZTxuLunpYbtoJqqc3ojH87uVx3mnqyUfwLkpcj3hmxKTcGJp6",
  "key19": "3zeaj79A4gKsT5snWQZo1cffJSAhuTcNyxivYtt3ZJyMkXwdug9SxSFRmqikdu7JiVtQVVqqJpe3rN9bXr3ji7Qq",
  "key20": "EXDhYoz8ak6jcJtSPSVXBaB2Q9AkyLXbR8jfDETyMeaFLBqrqBZbgwJhrZo1f7LMQq9arqfmcQEzEKY8ALCKB8C",
  "key21": "5uifuqLewR4T1hvQovxWp2wxrzxYd2RZxiH9YgKEcVvQGDRZVCjYEEwzBjm5xbnj8iSSTqykJRdDTiUFGtfQU8Yo",
  "key22": "yCdhxvujuqRcCjJi951E2LatsF2yCP9nTnJJQSuDTU9QdBzYpZGub1FG7BthqQYQHkenKPFTYsVSjpriW5W6MPx",
  "key23": "2uGeXmxHAhydGQvj3v1TjWRxv2nKT6CL5q9jGnkKM5vbo7U71RuC2Pah6YDgr6KSnm7ZqixJyP2h5thLPf2xN4ym",
  "key24": "4NiBc7EVrMSwmEJ5gCVwKCgMqPk9tZs9M7oULTSc5m3DdG8kJyCWZU63qkz8deWnXPprXp81K1itb4ubQoFkUxbh",
  "key25": "34YLBFTY2YUFrhgkifbekshdVgjugPab8SE2KCUWwjVAnCdZ45rKdxiyLYYsSzzGiQHZcnGaHj6vqXPzivvyeimx",
  "key26": "48jnH1opHkif86wALWMpC1hLAeq8UHk3iqwtA3cFxdT3hVZGSoGZQyKpgcnVpmu1uuNwBsuwuCueaqQDjitgwzUP",
  "key27": "WZCYNzQ4tgi4DZqvuedEN3v7RD7Gi2r6Tn5SVTpJUiFNVCoDudW5NKeCZ9dHDy1QBXkcVWz7MY3279w59ueZUyF",
  "key28": "dJqpMhT3Rro41BbWxXKzgfuJs7LMxJWyYK5mv9FfR33zmoQ6tDXv9YJpQgkG6pXL2rQPVLXF6wo2HbK6VPxSRkv",
  "key29": "3f9YWhfG1HKxtHgwGJWXgrP6LJAB2EXN1Y3PbS785fch7HJFrQndGaBwh9aReCMdGtq6NDGKiNKTUoN3gdc4xmzY",
  "key30": "VYoxP5ot4g9YRHjEQ6Ymy5MCR6YGwTBHcjj4nN9nLuxHL7vn4yx6i3UB785Hss3vx1Bits8Q9NLrwRcf4H6x249",
  "key31": "37MauocXDMBHG8MMJGXesKJpZdFTWWGPyCPTRzgg28f52QYHUnUVW61ngKedrpoWcupWf9b67EmDRJb5wXitW9Da",
  "key32": "cNnEdTP3LwBnAzqDFN8cem9VftFT35jZTHjdCE5LPqUV35tdbwvHtHgiPRzWeQ7E9Lw6kueMtEnK96r8vALrc1e",
  "key33": "66UFUxX1wtPRMuyWV1NXtsdVYWBBcbqAqFY9Fuh99d46MnVvPRNRHTthMx3Yuhah3W2McrjiRcm2xuroDg1ma5vD",
  "key34": "3wcSuyxRXxstDMUMirrVJS5qZnmwZAmhMs1NTDSnaeuj6iuJ6ch11iDdkTX51bvwjXtXpnMoYzdDcF9AEseCKtLm",
  "key35": "2KQcZmfCpJxr9hJiju7adZ7aDMutwzTx8RRyzhu6unGVskXiQUVrjiZLno8eFvb8erhmjq6BJ7fvJGy5uUUZcicC",
  "key36": "4gugHR4dwDQs2UND75tYDprrk4kSHoyLQj1u3kuP3S1jrHuV4X1Gwvm7VmE8RtkyNRjZ4fsho3dtZXtkquH8dhja"
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
