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
    "2jLvGDrMHUtskbwGc482fQiDQ2VD4wzKLx7NQSC1jwJMqTnH5NkKUeQZio1BbzK7BUmK6VcKrUsQGvUsF6eJ5B3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3qSJqUnwh5FbwiyrFjEz7TcNkswyCm48hFPWM1BLeChZhwdCggqKwnBfNXrGX5nQte8kgrUieJH76gDkd8Xhp",
  "key1": "3uue7jCCyXkeYc6LFAQK3FEQZ5xQmCP5DfvXq9shLeXsbFcVo8XK9TLYGg7To3hR5T5S3KAKxSjgzZsr8KY49su2",
  "key2": "2qh89J3VsAGA8Vdg2pdS3UNbtZTVEVHEQPNpkY3iJKN2gJ2sUdaLgjVYxa57DuYUCLqccHJk9DQ2D7vnUzGVpSx2",
  "key3": "4LKqZveNU4PMjnvsbReVBWDLpzs8xxTxJTXLFTmn2Fb5eNNUEUF7gS32C2v983h7rB8LkuNksM4vqr8FKAmGxyGk",
  "key4": "2yewDbaiXLUkExhpo6XoZXA4vCGVS1s4LBLrb5kKfJm4iDuh9Wt2kaBS68KgFnMg2TWCCiVunGAmCKUYmybgXYs5",
  "key5": "47GsbXYsB5wsJKh5whQaWYf4jmTEk7GU9oEZxvviGw8rRDPdFMqXsfVwWy34ZZjqQnJ54SbS4xPV4V88i2ahySoK",
  "key6": "5uf91murAoAJ8Ppv4RtU3amxYZpzY1NhJfCL487tJTknAAo48ZfHDKsYkZPsBTxF96y1kv7iLhyzsBDcfvD6RmMg",
  "key7": "61oWrBQwyUAPDD1jAQA9e6WN5tXzSDHuoQwKaJv3Ak88sRZJ6TByZ2UMkGcnoMgr7LTDwudptSJeN8RqSxWVhhvf",
  "key8": "46qHVi6qGVAUvkzLwb77cAKsBYFySKn5seLgMKfTeic98qsDE3gXzvmp4c1CfQtMGqvb48jmeRKk7xyTuA4gx4Rq",
  "key9": "3eLXjMT9ApRZH4WrZBhNQmzSaPGcf8GXui1fbjSBL6FP8fsU7ADuFiVcyMaBHYnn3Ybf7Fsyw4UotXGB6ZfFiVG3",
  "key10": "5Kq8dUrgR1moCVhNcf3sgoMGD3KCaisvUa6ogH5JUuvnDvvPYbA1EaTDwU9XcUesDMe4pmYbSPARdKRYVfhcT4Cr",
  "key11": "5LXgRxfQHp1d8i9bpxVRE6hYhkxMsgUTwNgB5yethu5xMrqRJHzuhxDx5M42ZpcDvqonsv9VFaQJPnVB3kyDR8Z7",
  "key12": "3V23oWJJcmwS7eLCzVHw8Db7RFVnvKTUx9MFZvi4nbhN2K9EAXbyPBEy2HcoPwqEanvcdBHQuK7x51VM1fgMXmUo",
  "key13": "35pz5UsF3jVBiqkvSS7JVL429E515MrqSBqnmA2o18Kk58FEmPDQpLTUXyJxsoFgyxBdQMLGmkAnKy9tDYFqnV75",
  "key14": "73Fyjik4hDsSfk4cPtPMqJafMNEenZJKZLVK69a8jpif2m8YGXzr8MMNKzXHyf6vzUU4y9iqHsRS8XBo5uZQjsS",
  "key15": "5CkfD78iiGu8A2sje8xqgPoyowjY4vijJH5feZ6BPoK49qHyNuuhPQnUza8yYZGPkLDxJpchuiDhzn6y5cYV78LL",
  "key16": "3MFYBYVQCqLpWT8cSkPjAsyhpM245HkWy8RTFidpUYoACEKSnVkzRpmipJjQS5V1s5HQtzBLNc9dwpTqS2Pn8bbk",
  "key17": "TUksK8zYfwp7hXTW52VsHttZkcHrpDr6QpybqzRXCh144KF3fBRFQtjAvTx4ZK8itJdMLASdR4YxiMhwyMaqsJa",
  "key18": "3aNB44eLNSisEese3NL8Wnap2mdaTTqcb42Q8Rk7uXN1zCxBSpHh6QtQBbWq9eDauqZ6aKdQVkYCXb61vEGNztii",
  "key19": "4iEdKWEDqchvqWZo4nW2TxPt2iokqictLmzZCAjL1PmPT4hMvyvFPpd9MWUGvUdu1RBHeVJeQcb8ib7D59cNyCpv",
  "key20": "4666qBmZdbPEpY1vir41XHNFhQRXCRhfHHByJVBBUsASuaKhdbZtniQmzZ9dEN8F1YA411rc4gKZxRLuJBMSegb3",
  "key21": "5VbeA19KaMFyXEQssba9GqxwnzPQMuLawepmrtYHe97JG1dohLsCGxzJMgwDUmTGcpF7kQ87ziSCba328BFMdYGw",
  "key22": "VgBPz8wy9cZgBx8XCQBVg6huzi1YiP7w5KKxFZoxZpLQS1tK4hC733cTJ5bgaRim7eE4XVnaWmaByxo16N8tuTw",
  "key23": "2xGthwEfitBSx9wmnTnveTdk49MjQvUs8xcA8vxEbL9cZHiZirbCYpsA8TGdCgcnuZ28P3DA2WPPdf3qXxY6YGef",
  "key24": "4Y8MKXZAA8kWzAfwv3UUDC6i2R83HJ6V9RW2RrynrGJSkqX9E1hvBbw7F6LN8DU9trkHp2npRKdLVJjPKGseESkg",
  "key25": "4tQLcEUSMTXWv6sAapg5Yj1AprRpSBayMUyfTL8HA9DSkuJHAoxumHZoryRQLvTbPyhbTg2UdcvxS8bvi4TbJbW7",
  "key26": "2RFNciL37cxwEEjLYWjbQkSmT3S8K7cVWD1FVncyUvqNoYVJ4dwjKVhguhA4KDmZMCsYv1Vd7t2iB7H8wfcSvnSA",
  "key27": "2w2pKKfbKZRQ5CvRNhRHSXqnp5kSpcGCDMAv6X8LBppn4RXKARb8zj3vxmbKedB4668qKTdwkU8RHcAJwhV8114A",
  "key28": "5zv6iEQEQvhJdaoLJHqvoCUuktYt9kvNHZsswMAEsnuXGEcBLFPJNPCLAeXjb5PxhSnD7RUDxdqztb4tXrdBPUZv",
  "key29": "3SWowQmkNxjSwPx6kz8Yo82LMhTY7bqHqYtWHXjtnTaMghzCS8j93ezCRVRA1nVMVf8bkiUqu6ZngpzEUGrBY1Z2",
  "key30": "4tA9FPUrbVGQpwGhGFkMY61ey4kfKFWacnBwoz2NgNJfrJvT7GTtz4UN6yLNbaev3E8EbUT2jUUcdGYHNAtcqA3x",
  "key31": "3C3de6QzWDwphtkJbEohYhGNcMqoV8QbN4Gwd5UEjA8S7mF1TfBEGyCXhTbRb3yYJH34ixmDAusFHeUnsYg6Uns3",
  "key32": "4p4rtM3SSn6p3ZvxhKANuP5PWqkJGpheJ2LzEaqRzXtffWeBHExhb1Zd5pGM4TQ9kmSqku9y3u195Jz1iH1JMrqB",
  "key33": "5mN4PEgnaxw2fXJaQUdq5yMDuVhcyem7X5ZbdbWNkSxQPnTYQAd5TRsA1SRdUWcV8arovyzUjiKRh1VNsdLJTPg5",
  "key34": "24GjZ27fCGcM5P1iHfrk56gkt5yuddL4NtoQEnHVSk6K2xK8tSSZ21E4EcniRk51iDr9qUiktk1cFKMi5YmcMefx",
  "key35": "22amZ5C4NsXnmnnoCFdcyxLLjsBpQfZDpGE38YCRUdQhe1c6bvReJwvpfAbSqCRFUSSuU2nMFci7ccnTw2ZUKDKj",
  "key36": "2FbGcLSJ3Jqm7ZGy3ihrLLHfmsDCWSQzg3Vdy2EU7NVtrAGFMRUweRZbUpv52qseo88oFTbRDAqeHpPK7iv4kX18",
  "key37": "21VabVu7VDEYj5J23NYPdnZPmhnYEmVMJxY48fZ5Cv8DrhGYTg1VonhLDU6D7XCnM772nB6AtGQvVbu9Rn3N975R",
  "key38": "2uCJyn3aD39p3kj469sjurSj1hQ8ybDR4qV4sqzxA4cLLekQbrLbLZJWKLURwD3Go1GNNw9kjwJacQ7iu1NPbmJg",
  "key39": "5J8x4kC4g1TrEzHhNmn6RYnNJZ4gwmEKiaiwHNpnk9C1PqxzbubciNdoPPcosRcAbuq5MBXBEGmgwmYJw6h3uEDH",
  "key40": "2WfM3diToHR73grSsrbUzU8WJLUgC9bqe3T5JmmdxPeECAgG4rdDEzH1ykb7C7YKEjnVgUCywP8jTAo5DYyZjFUo",
  "key41": "4D4V5s6bHej75nmWVExYKFwhcKj9ywtsYkrExmUU84Ry8av3ed4p7JTTd7UjyMWdTzi1Da1vizvPmPuZNHNKhmUW",
  "key42": "4caEd8MZKfL8JEn6zmTH2BvEwvsZmEJpARc9ry8ZKaXn2Ea9kAddQhpCfpw9azZybd6ZkstBevFxTCyLSGdtkdg7"
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
