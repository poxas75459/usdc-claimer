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
    "MnLG2ztZjZigRXRNAUS34cn8irVGa8DXffjge7tVzxSFmrgC3tsYnWF3oijvM1EAgeQhUZhpRQq38nfqKYGuZWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Suo42c9wERAVvQEPkPurEboAf41xGnTrdqXKQuRBiRRpfy3rMp8Jv7gn9aSLHk1ifAXjREAgGUkVEPQkLD1pQh",
  "key1": "3pPTPmpEWtLB8VAcnx9Yb3L1B9NANcWu7zfWAJGsaVQguzF7sS9sjHtWmkCHvFmQzmDTXkiK1163g3uoAY6sfsKH",
  "key2": "4nQbsf2XyrZ81bJzZFXiYzoWJFGcXqCVQNXJdefckePVj83ujpm9UmpGiAwFrSjAjL1EEH1jMtMus2cp13DPb5FR",
  "key3": "2Gt3vcMpKzkJgTYGSsRhzzQeyjRtCGhxFcMBzBaJC3sZQqbf2qHUm1w6XaD6StiuXuqz8VUyXHfhHVcMR9ixP4zL",
  "key4": "EkC36atNtnCxnQ5PBycgdr5pP8rZhkpTaBGzWjcJwf9DbPutsZP6s3wTqmVUg9NVGzr5yFWXNqJfjz8w8XL8tZA",
  "key5": "3vKj5UdoSw5VFCZuZuTUCyU7VhzVEEL7P1fj1hxfQ6DMc5ZyAvaTcQGT39F6CQFGKn9Cnf6o8nJWXuhZsjuM6zpJ",
  "key6": "5swJZADqcPHaRNbtz4Jyi8YTVRn1wskMbq1EcypVzZuj8swuaZAbiSz2SAYEq5nJbCJM1zDfnZGUcHViEtpJdgGc",
  "key7": "2npYLbpcoHWcLgpDU14BAAnbxaHs1XNwcmbKFbZE6CjL7HswXrz8bZKn7pjJjmFHUMsTeuVEweSY95QS79aGciRw",
  "key8": "2Un6rjZr7vUwVRAjBJzdcZxDhE3UF8Eif6VsUdVdKmiugb1NL8pqF1qfHEzHBDcSDrSapPb6uUwSYFu5Xfv8r6da",
  "key9": "tszZLmFaZCmgQ2s2WTQiVowCfogEtxGeJjvVzTSv8msm5hYhMFj6DTaLZmn4ym7xPJ9auJRFYTarZeLeqy89qkH",
  "key10": "59QZ7cJ7X9dveqFDWYpDhJ1jH27RubzDc1oZeBVvT9kbGUuU9pUNCY6LRsiZVf4mEXHhReqhbQpNn4BiQ5veHhgq",
  "key11": "GTiJyiRVXmji2LQU5m6rHXU1tJpLfzCg9GGDiFrkvjJB42UbUdFKnRnoxzCVpH29jc9m8jYPTJDzAghu8winoVB",
  "key12": "5an4VzwdZCFnpfMCTd2hbXk3vSMmQXHhU7JdU2a8n4StUgrkb7SYPLc6jdTQQm4nif8ruqsNjqtVgg3yuzF28HoL",
  "key13": "51bZquRM6wTEStty3FV5tYsKJZzu2RYjY2kM5ptyBrXgKVvt3cyuPopuJKVM4aTscfRxxdM44aJDJ8e9Am2G3yTL",
  "key14": "4rdGc4XJKzCn5EgC17GLc2TmgB1bnExZbYiDX2JvFoyCHtfgQ59xSWSq2JYrkr5fZhiXUKX97cCny9LYxMtivH6H",
  "key15": "5hKCFZvvZ7LC4MuvusmCzHJvzqDkKYzPBH5ScUtbt6c5cr7Si5xAFFB28uMNxeEK3fnmYRzAkKMsXUHeRmnuLsRW",
  "key16": "22Gko2uRbegbS8isPGLMitNbU7BmtMQSmzy4xL5qAPFFmjqKx2oompzf7juJBCeagtFDyWXVSs7RWLPzTLhGdMvi",
  "key17": "UHDEstaTYUcjXHUt55dbRzL4SEKQ1dYPKai7PSR33QxxWt7kLPykd5sC4seinCP3Zh1gmXBWaxspuWFK7Ke6bjG",
  "key18": "AXdijwvEUF2MyFBziQLE8UPv3wXXURgKFgsHw1HZPoLJks6hTa4wips6VR468228YdNzZBZUMsfT1dCH5mPLEP6",
  "key19": "25xroBACQH67XVih6AivtQWYhShjjm4Ss8K2ReUww4ZCCUgnpUhinQUg9izQrM7rYSVTJ6qYhPVLx7vZC8Xphfcn",
  "key20": "4YQLER9czLW7MwgJoiFHwXGgwMvKywuaSRANexr1tTExJEauEgEbQuSkjPrjEDzHnPgMyBar2JyqYkF68PNTLcPq",
  "key21": "2GaG7TonsubD1aimDyty8awJfsgYRrU8BgZmdtk9dqw8LiUJJ9WKr3Vj2vcX56aX6whUAE1zEg42CDcuc3izbqbj",
  "key22": "44QZWvFWfzD89gisRmMRR23Y7ake99TUViYp7hoyW7X4vNhmKRQYuKyH86jnoGEK1r5eYpdassrHxAcJ6FZAp8j6",
  "key23": "4wZ7iCKMtBWKCQYnSFRcucvtBs7ZDQuAHy1KUXxJBofQxfQqTPjXjcoC5MN96hkviWQAPyC8WxnViKvHtHehxKHa",
  "key24": "3mjtwDctw9MovMV3QBc153kAMTAaF3xxP5PePfb3hd5qRrg38QagXKg9ZV5gZk8XTPFDcWVzNTw1zmSPw5qeVxHc",
  "key25": "3ZBDQWx31U7w3wpCJdjZ5xAGzSnYUtHUsxkniMmXm2P1CfwzE5oHyDzKTzB11PoDa3hXTzth2WoQqDdUkMEqNHGy",
  "key26": "mvAcBim1pGKLcMCy51VoatTUvZCYTGnSvVDQSP3dHdpofHpF4D6b3CsLQmE4oB4XVosB7cEH8nQ3rZ9iUmg7GuW",
  "key27": "26iHVeTTrkWgLJ5aZSkz2GjjwLwNxCYDsct32wgb3Y5LpwbGFYzMjXzthoQtgJqyX3ohzbYa78sXQkiPFP2zG2kM",
  "key28": "4uxT4kcNLCJWT9rKhrzCTv3Njy1V39pR2vPjKWBre46WhVqe2VK6AUjzMGCHUcSUncki4JCCs9mWB8E4WVCJq8jy"
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
