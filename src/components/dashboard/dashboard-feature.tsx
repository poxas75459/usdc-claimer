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
    "3YyL5bpt7nUA5qmtiNyoUjXgRTszAykNDUsyTevwzfYTA7ZmW237nCQkexGpsqA6SjxVKTnvDUwbFe7YsRqig1QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HtPGT5sqKWF2qBYPSNuexcCfdqGAPxFQiVqrTLv1SQNqqGyaZWJ46yiYP392PT8ZJspJRaPY85kLG3nd5P1RLtr",
  "key1": "5QRHMwxLgFFLqhL4fBiZEYC7HVKurdUinamkHr2YaPmXqr87UcsHftpjtihmFyhBrTw5FUR2wEQK2pc2AfoNDx1c",
  "key2": "5kjJg3kcktaPV1dnApAYLjeAWrUPD9dZCasdHxwXyDduCqp8qbEmoopdzeP3DZKctJURqr72FCTQNMuLUYPKvUoJ",
  "key3": "3CCSzMFiyc4jZb75p4BUQBXR1okdrCKqaowWR6ikjZmYVhWq69XcWpk9iwadKASmyn4wvqRPFFXdzAzTaQnsmL3X",
  "key4": "424Cw8EDZo5rhsKMCpDn5V2G4ihgR2Xhs25thhHkhZp1JbibtLATF9ngu3qGAai3thazw1XfqQLuLuDkEQA1sxP7",
  "key5": "2wbXY9vRvbwPvZCPbPye3Mm4CbQjxbATfyoJjWiPtrSDqPPV5U91nidMyzoVh5Ycv2epHBn9z43294RZeNvaBTWM",
  "key6": "5y6tqQxhs43Ds5GcdBA1rLKzVuV5Vpcc6p6H1X74XYUoKcUuBYHTqvpyUzuo5oky8oDJrz2Cvq8L3SPoCmC4Copf",
  "key7": "2JgQWErks9MwioDMDmg1ozMmsX6qHt8oEU2epNyPgBrkPQv1w82XX2613zoKg3y46kSAE8MKpyvMLvQKb3tzggSQ",
  "key8": "2ob5cZZWabenk79DVxHFdJ4mpUy51R6JY2cLWva99UTUxpSYN64LU5jnVw3cJjZ33M8YPqcj8CREkJPhZYLCHC2X",
  "key9": "5f5ThZYHnoDNGNp977QEkiva2UjqjfpSqGiTuc2XxAB2mU2ve9HgVXvAp1PdWb9WhgZ9jwJSMyG5MJS9WRr4rkP1",
  "key10": "2stu1cZfUu4ospBUGxzPiW8nbXSr8irHPZZJRx9XENFiYj9yPCtNjq9yRhwkNGtzChGjkwbeWZ969ojYYgJLAj9B",
  "key11": "2HX53B5F8Vj7ij5Qyd7iu71W5K8mXwLgXiV2tfwP4uJGdYguHPPvQUfY7mPxtVrv3So6XaJ2dLM5Nhw52dZn3NPx",
  "key12": "4mmxGjSsz89cxAjtZt5N2jzr4UcPrGnZSKV5aFjefj3AVtqVeKRKAhUf4xtoLwZEDPmt3hgWdWkiDyA951KPyEJG",
  "key13": "2qZc1jLZjp83ctpaSCv6HuLYVotbsaNzxFkCBCZb11xqcszLWiAc5nn1UtAcWDis8jzikBNxaFSfVmMWXPF7pYof",
  "key14": "2Dtru5zwqbsQZkEVnXJPsRrR9izvS1kU9H9FV2HGqpUzSqpgRTomrgzRKtQwSaLf15rVJX8mM4Qk5KLRHvRW7RuK",
  "key15": "5iwqGwZuFfrUCxBSjZC5EGoQKcXW2zB8w4JxtLURJCzHoxkicCF754qHifHz3hT9H9js1a6ut2poCuc92pFSUqwL",
  "key16": "521NdYtvPEcdnfK2oYdWXEvvhxNYes4LbXN6X6YBSK3QkRBaNYPCwELcmNby9iCWzWBKatg6G6AgZU27FLAxzqU5",
  "key17": "4WJ33DZov8TbdkBry4kBU2dfKwF33PA5BTiSjzzhmXMQHTN3beThQ21E3H8XA5cAyZs42BW5BVk2pynwMG8C46mS",
  "key18": "4XitgJrYMAFx3Sad8rKPtsGZ9kKe7TdkT7QANHtpXiFncvG8HxNuBuoHnWu5NLn5Dd7CpXRpMtZesxKPKdp8iU13",
  "key19": "5Xi4KRZdPMwUNQXj4EBgVBQsL94kpbG9AurMUqdwBnJuiK1uF3AYyyEKnrwTvuSL1YF2LUbfLwYHYuUFg7qbD8eo",
  "key20": "gfThnjT1wdceBfQZy1fNqRYTtgJdzVJhryQb6YZBFpvZouSx41VHGQo7uVLde22K3FXhmN3vm6KoDM5APLNjS9j",
  "key21": "24ejQX1DHz53jqJZqadYSH8AWpMBfX2D1Mx5vNQXPR93KxDqamkxEGZa2zo17dcxZN9str5gxViLhGnyR3rmbYaU",
  "key22": "2CQmiMTBVsYGoDh1c6ZU15WaCJBAF9dMkV4ZCQmbPeukUPD7ryBntXTKBmJSQesxRXY1Mo84EUotNSjAHduJjV2V",
  "key23": "3oEHDcfMY4n9gaSPRs1NAEGwQXgbcAMAPNzafy36o4YmeVMusWgZ3vsbFtdi17UYtDLNMAqA9m9pk8CzYzdGBm9N",
  "key24": "CVKpZ1ps4zCq1zr1mPnjfFkfAbXeLY9oeVwQzUfAzbZjg6LRj1CcaQ3k3yZjrRfrFYn1UrzRhnsc3De3rhKf9xm",
  "key25": "3WBRiYvgRskpVDXFcv68dXtSeYKApjyhNUmLfKmquGESBBTiB1HXggD6A5GubhpBS2QNm8GrqXjnwtaLWatLnCfu",
  "key26": "3ErxeKAB9zpZaCyKgrhRsc9CLrvG2ExFTtFaCN2txP3C55eVZGKK4MN9ZVQdg7uR2A5vxKn63BC7CPdAxHXiDkYB",
  "key27": "5FhKdEgu7Fm3WK1D43wx34PyXqPfYVVrZi2tFT4tfapsURtCxqPE8piK1Q6nFu4w2LD45ugnQ2EAqN8VDp9KyEKJ",
  "key28": "3xQxay9PtaqGxWEuzs2Rma4KbUdPVBTVDTxjY9FbYxU9gMGwPLSHSg24m7kY6W4E9izbZwAPnsPkk3bivgbi18rB",
  "key29": "3f4gWW5MchrfuKYAasnNpSaF3ZAfNZfG2NjATziKjnSxR4nmQCtnv6un33XKU8ySjhmENbfKgr98N6uUrcBid5Ab",
  "key30": "4G2dviZhWvYMfrYVEjTzJhk6NM4w6hYcxHQp2JspjWrDTAHaBxfRQQr19pNPgG9V8sfBc4b9dMqAhxsmyv4Z2Q6C",
  "key31": "2QRA9pJaxEftmcFpsXiFgNHw7cSAoub6t5bduAoPsznfpejxcNNgFtpUfKx4RdsaS274AzPvYWNhkaMTZMpsnWUp",
  "key32": "4SLS3AYyCsiBgHCEBKL5CyRojCrPChUEC5hBpHeaWzR16rXfY6vEszKTrTnic98RNzh77rx4fdtDkChu5JphGpov",
  "key33": "vwqpms8RuMFnmbpsBHsCgbveTbq4ZiK8ro6XgY3vRNTMwNBYsE7VXNo6udwJCQ2yxmkXNi5WWXvDgu1KFAw5fy7",
  "key34": "129MV6vhr73xAYjTgCtFXGLqJK2ZhemsneuJEjaStJ2Jpdghc93isyJEsPF9MrJEY3G7uWCaJJ682uNtu4cyXyqd",
  "key35": "2pTHi6dqtcdv2KzAgdR7ZBmML142v6a1A2nP3T8Hq8PB78NsirnietMHXoXupwnN7p6c5HxTwhxUvRRBKZCe5DJj",
  "key36": "r6BeFngqMvjxH3qWXE2GyfsY5NGV42NVWHZhtBwLzPfuPM1AtsJ9axo6ifnE5CSffAWdgxX3EkAx6RgvF8fhX5i",
  "key37": "4SpgSekTMf9WDA3RfJ7wAWW7F4RM2MfSLFnXPJPwn9TgxzYo6H97ZZYjkSxT8axKDJoV1GXWsrH5Y4xhLJRtHkP"
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
