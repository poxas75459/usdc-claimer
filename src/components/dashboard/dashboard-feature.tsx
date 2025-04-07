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
    "61AoGCpDt4KJ1wTaJZ4x1vmsQxst6LSMCjx1if4zPUJ6vTZYWKntV7heRmCJzWpFetvja7QXWdBRkJ93QPxfcR3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tqCZTLmiDTre764Q4P9LrtdaUo3GgLj1mzsEkEpJVZmzjhuZbntx9XgmW8Tv8vAKWsQq4rMo62JQu33E2YMWsc",
  "key1": "2gpgcPFVwzwr3wzQxYn6Hk7kMgL9WBqgMswrwvSyNmNNNATmxmYU2GLiFxzV3T6pbZk9ijbHC4pbWBHuCgAiYYKf",
  "key2": "2BizS4BpgK3joVz1pvVmCVG5ZsAqwNeowDkeGHDdgVNAgHUxcfp5UCqJJrynu2DDQchcT9Kiavdy3E4aWDRMKWJE",
  "key3": "3hWaqPktPj5BThKESkMPbG3MyJ2cgZMZbfA5QayF7NC9D7GEJryqSepR1J9nmHXDgX6fopRn3REUHL5jVwr75fFi",
  "key4": "qYs7DUCXj2rwtCW4UExZXxpHyYPMyUjMqFLbJZcyN24z4TcWyivVB6WthDGEs7q54AGVf6q4YjX9feHeHEDAsnw",
  "key5": "32PbYkkLfyidTK78M5sK3s99scfHtU2KPuKYXqNSnsPYHG9NpB38YWYBTozmNqdsNQ4iNZPkaRsVyooAyCktKdhN",
  "key6": "5eEgycpcxrdhaHFRy7MVabDrLmSpYm8NgFUzvJ3hyXEVNWH1JMQhPusdJ1KfDx1tE3LWKanHwkyHfBT7Xvf21uef",
  "key7": "ryTMddB3bZxFoWLebGnY1FBdyUeGuPjPgmgDQKTujKenfK1SMqAbrB6atTGmtgmPpSBez33B1ELHJ3FjCyjK4na",
  "key8": "2rjegF4P9q4Ea93RZN7pb8dzZdgt9T5Vn3ws7iETos3FVe9u4xrDNAaYAxPQHKgESkuG7dUwcjiYc9yxviEondFh",
  "key9": "N6PAKykTUsiXDT2oiBefT92a7B1bzyFhY5XYhApoqNqTYJLSkRsycYmbPxoBy3CgPR6H5PF7Wfrk5NdcC3KHQba",
  "key10": "wVhV1eSNfE1XMaERn9nkyCEr9rLGTxvC88Jfs8GFX4DxAkVciJ7rTVLwtt1Lpahn1Sg6V8Uqzf4mMdv8C1VJVbZ",
  "key11": "3f79SZjxvTcja2tbXmvP2pasJK742A8QHmiMEWGTQfChcmrfjNjrw64UCrUfDsJjE1oGbX3ppjJby4xrPamhxhKS",
  "key12": "3DYHQT4UA5gYcuzFf6geooqHkhPwqVNReHRqFN7KRoXNp59YtV5SHUbx7TjzgdBFsrNfpejpMqQydKBSALLjeFFq",
  "key13": "4bpquRR1F2PATHvawjiQhPVduRDdwKSQtRjQq8mdivxsuPCPYiFGDfa4dUGgUoqSRZUCh94UGCWmgQHTkyjfUDsj",
  "key14": "2RAi5w5HH1nGoCefZL8WuytPM3QReSkAq4HtHDWJskZeMMpRi8pzGAUjtefKF8grdGCMa66AzMEL2Ts7ekFKUP2k",
  "key15": "5pg8TG6CZpg2KC9PPHcymzcZb8JPcSdPbN8opX5CNDqde9oWZfbSEPjnPuunjj1RLxwK8UHu9KcTQPTRpwpeQVWx",
  "key16": "2TFmyuKK76wMvN2VbSEQWFt41Ws3ZkXJCmFfRxbTMLQP4wnoA8RGoB2EsVsAPhBenLjcGPuc8CU57XvFphNoa4Qs",
  "key17": "3ojUZPDSXDHp1uhBEYYrRVL5pf2kzTVWdoRvNRJisKSvXyTFSyVXt4hyRQovbEe59gTqiRuLov65eShqXPCdQym9",
  "key18": "2AgdfeTTEzbEYYurx7PjivPdVVeUKU6Z3pzBe7zZKXPstyafUXjhUDQZuDrue1JkujFYFAkYKmbyy5jU1NE6sB7k",
  "key19": "2roSijxub7isKzBJUxQ7kY7TU3RAWGh6QGK4SC7daUeChoTGMmsRpRiqCxJaHvgbmqqJASo2pCHmhHCTFJLiGqQF",
  "key20": "4236bahhkX23QsxWsXGbiUGykcv1tGJU2U5coX48ER7QcyPfoQWdLBX3WmACW6wYChWxD6FD5E2i6TsFrPd52rgc",
  "key21": "ukGXPWfG4tcMrjRLyDv3HfFuowrp2BHi8eo2yC7WMFd3qn3HtFvfun2yZZqcPUm46c9i3EWNdegTvTdJkkc2PvQ",
  "key22": "2bVcqPaeRaQusgNpw7JGTKmFqkqMnsQnJqQviUtReszjvndGkwSfVJ2V6b9xNZdi8xZu4Cx9hCVx2yHX3wPyvNZ6",
  "key23": "7RtV3u8fF9BmzwCJUGX1qRU2DZiuDxf5wxqyAbdygjHiz49QpHDqnFEaVeV4CD6aR5tb6qUNX8au3ALTChaJr8V",
  "key24": "LWDQhCuDcza7aa6dCznFgDsnXpjZwMs7KEniGXHqa2soX8hBvDVo9cQJUv9NMT5R4YbFZPM34X52DoiHeuRGiBr",
  "key25": "25xVdTHpHnE9pYkyBgYNjgVvNyb2AxKMvzxdAJGbARsY6eBZ54rwHaYZ6MWMqy9dVtKN1xpvoazK4Yxw3aCy6BUV",
  "key26": "41Ct4Yjmz4ytCJWJbYWxe4dJ4Ah6c2sQeGjS1AmLyHZfkzNfvU5wZ9Wz7RtYWjw6FX2sBdMm8idfzR6GbfaFoYef",
  "key27": "2jgsdKN71zgtKubiHMffjbfhzwWTSqNJuLA5HAhcsq6EhnHjLNNQNHXgZGJj1tnAn2iGCNT5FjksajomAqUGzWVW",
  "key28": "29Be8v67NAMWfNLePSdS4Cb8cnSdBbNiY9R7MRi8d2oUUzyiyp6EEY1Vxo3gs5JxBST9PdsHWdbL2923ZohGx9zA",
  "key29": "5WEfDFLPzyxGgmWi8tfqoAeLpMU9DLHfq6wZ98XQ8Zc5AksrADzBmiALMLEA7BVCwY6ZVPb9WRvEzKtBTnkstLKq",
  "key30": "4EwEZajRuWDda32sVDvnfcE9kTrGx11bMiGbFUVEAKP5fRP7uiBwstmoZDRjvfLo8SCWrd3c1Dp7phLYtBGgs1Xu",
  "key31": "3yyu5TBGyaAv5guhgg77WW6FUobj2AVN3V57y4yms28sp7WmobePSZqAtMyJqoBQ9drg2SSYMBdo3QUV1c3Jsbfn",
  "key32": "3ziSTk5UT93dpajJKhxAm4cUUGAcRSxXqnwwkja72GpMMEvRy2ejbB9X6NWXD8RRoKatj5o2AuBvw329dCnyM3XW",
  "key33": "3boDbkk9YxtNRSmSPhKKCtQii9V2puNtuz1n48q2vddfKqnpR7gsL7UenBjSq5AwkT7rWJMDL2aUuvQFEU1t9A6W",
  "key34": "24hHPC84hiQ7v6GZTMj5EXhNjuhA4NcSbFGwW56MzUaT5rqvb7rzdc58UTvGJZFZNRN5SgmGeRvSXrPNZzKogr53",
  "key35": "2TpoDKD48JdHZfCD2J6ebiEJSE9NbDXjxUx2vMsaSpRDZcny958D328kCqYkXVUStenPWVWUBqJUhdkf4jTE2EXq",
  "key36": "c3dDpT3rPNXf9BSqSZ8fk9urz9sRz8fsDtpGLXSyBs3CnsWgxLx9wM7MrR34yVpPTBNgzQyuk6TyaPqYvBgde19",
  "key37": "QA8drvhmvowdHDMHenrbsRGUyTfXoZ7vJt5Srk8sb5rAp6BgQEdbm9ENpcBHRfNS6q9RFrPWNCrYdhjXzgnEard",
  "key38": "3UV9EUMZYLapusB51Y1W92o2cmzA4WXLKWcFHdftvhwUcTEwTBy45gJt1TsgkD9ZJiAMaYZVzZ9MDaRhYsR34MA6",
  "key39": "ka87kpBDbyd73Jrb8VBVNx1oze1cyVnaCuZo2RCgU7AAgL9j5zDCA4ud774ZWHbcUwjeKrRA85U9Mdy48fSMNai",
  "key40": "26aDUkmth4JR1iVXpYHWNcyp1N2UunreVZCZgFbMzDh8RYJBuG1aCjHfU4m1UQQQTFgREMdhGLFmRXofWuct6qPY",
  "key41": "49MNPn4e5nodRhsLdjFiEpR1TnrrucjRkYPALZoj1b2Gj2PwjsKa81852z6EbfpqmivWMiHpj68XPzuP9D2teeFL",
  "key42": "2CxG6LyTMghEwLyadjraPhHZv6Pgi9FX9HXpBLD76eD9xMyUFDrBZN8PSCnPKfHzKCMSFbeyXqPqHXZkfBfPG5dC",
  "key43": "5e8yxrYr96ePg6bRPbows2E4ZyjrqJbFiSE1ZSsBeL5swiZChFjWP3ENhZvpFCxWBJG9XBcQAhozZVQqwRbX8fzK",
  "key44": "3dM9vcXyiAHjWYe7U4oWdP4Eoq86DkQ4YDwUQGUesD15wmLtB39aALcW42DCMrrXMDdntCi65ro4eRBFwHiXD122"
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
