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
    "2EcnE2ZmePpWgfxUWbsSUxWnGZAXQMKJt4WqP7bA3BxghajtaH5QAiDg4TwGFJx3TJU3SXKjyM4DW2tbSHuSDESB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkSPTszRJqF94ELiHukiWGYWx4ZAZV8PkUtD421ZQcvfBjBvEiZxqnwCAgo8ndFBhiNVPY8dQbuUnXsCDvxW8uF",
  "key1": "5Z8ZYoh2EfuBXjH8FnuQXrsfj4wj613bbSJaAZ3UTiDbbjT3GJwm6HjdzxzNEQC15j5JixceumjqAoRBpXAb3ErH",
  "key2": "4C3z2HdF31pAhqu3PfqrGSEzGFZf69Q4G7DNnW49i2Cy36CZdJXuQ1v4V6PB6zkpBbDJYpbQHv2gVyoqjnkP52N1",
  "key3": "3UnVgj5ZFwXB3ZzAzKpVfckYtsjSUPBHNZJLvi43fZ3fp4HuB6jqKtqsmCXzDstvFbn8SVZhxmddFpTgjacmMWM8",
  "key4": "43DYceuB2NQzz5nwVGYk4q8o9NRSCnYJAodSH74bSjvHY9yP8y1E4fTBRf2zPqUVVLsdSKXm1rTgXX2b7KxvBrL4",
  "key5": "2aY9K1uCzLXPU6YHRgRG4tFQf7xfiH82JD9pD1h9G7ifHnChKoYgW18c3aPXQFBs9w3NGoZ6zsub59rkGd3pNzUK",
  "key6": "39SQR4zguoVyKKBVGaSQPv98Nvnzv1FyrYBvvEfNYix8qCdgZSD4L1ochoHdhjbjjYo6iKyq1nHiumTeZyDgaVVM",
  "key7": "53Pi6X8QNQXUEMkW6Bsk2c4SDLKN7k8WMmnSSzjyEtTLZuutjmYEGoz4CVQcTPYdmcphLW4HAcbXkQ1hiYwrFrjb",
  "key8": "4qet21mmGA676v4LE32b8uhRzYiKhphnqLuxSSH2mSjiSn6JRbeUhPBtkGsfeUqAFQ8JQwkmJFqe2yzqNcnwGgBy",
  "key9": "For4h5tG2mEExzBJtyemdpmssJP93qzUexJvFEFQYvc2f8zDfcDZ7yZ6DXzGtDfTDqCpfq8b5P3t4PbMuUE6HNq",
  "key10": "5GoHcGpjTESbsJGfvnfAXnyb96c4UDokuqQWxADrNh4AuJGtSjePLXF9zZqYKM88pxuCigFBp657WxZnuGrKcccq",
  "key11": "2wv4hYsvh3YTBRA8afUdA9rdxbuSKu86tWjysD6Gwa995RPVp1G7x3o8EXfwJ7hzBQDcWQwzZ49jJRNHS296uv8f",
  "key12": "2fUExfSzsDuubZyaYY9GLZW964wg2oP49X9Jc4aioCBCde7PKN9xzitf2ruSVmwBBzd8cPAFGhLNz7roA8rUQ9TH",
  "key13": "ayKfZNXCgAyG5ySRoQzCorborEE8JzXPgDvJx2yoy7oTimt6UhwrGKxgq9zVPodcqgPRM5VFjn1qhEGZKvdeCUq",
  "key14": "MJBBzH4QHHc6tF7y3fbrUUeSp5G8f1zreAV9c3PEHtse6QxRbfSyhm5Vch1s2TEsnvSReH8PwVyJkJJbyaSLLvZ",
  "key15": "Go8eifZv7MDGXMPwxC8bhsgF5jL8nZXhSxycM87v5hq6enkiz2krGZdhgj6eHQAv4mQd72j3ugBDdu3uBAQK3Zp",
  "key16": "NciiLtcRuDsTcyh22XGyUGLbhp3oJfrC4N818x2GKiuWxCcGVW7Fkm2nenAEKaK4YSLCYSpFHPSuLgM7nJMbvHd",
  "key17": "3unHp57hDVgA3AobYHoPzmmcdHBTt4N4uK9iAqKeEpNkyeLRTxBEQZytx9rcHLCfM38HQf9HvPAGLms3tmnHwVn",
  "key18": "JwmFLqr6BvdavG4vuwFxQMKmx55fCmrjgTeL1vr3hofTqAZiW1ehBY4Lhf6A3yE6dVQvB9jX3u8JCafxuL38amc",
  "key19": "5Jg8zP1xJpdcZ52k8GY1CLYJfJtKoWMirbYAuDHhzTA7LRsoEb9x2DGpA2KEwskC5XsMYArbwRUj11k5rRM9ArFN",
  "key20": "45En2g6wvX4FSgXSsCHUS4iQ3oyKP1bE2A6Q54V8yNBMQESZuLYrLpZ99r3ukKgkFesZGzbSkyshYcazitdKHYSF",
  "key21": "2Sd6TLUs2aGdTCHfLN6L161VX5pYgw7EXMABGjHbLrmS3oxFuxDTqvpeieZrzawF3voZgYzZTuMwHHpMJ9GSA21Z",
  "key22": "5GGZHNiG6G5hgPAS5nQA5e6Vxf5VBUoNXi7CRDf1XmDRVpjBYVBCHLpWvDjUxHA6zS9Z4YbiPSxNpd9LKi8NE9Mv",
  "key23": "5yWVC1fBALn8dktFrQHENAFcoeRih9ep4yZtbqFag6y6To6qqxTAoVk4mkW75f4LenRgumN4U4JLxkAPppYHCZPN",
  "key24": "2PtaL2WenY1xDVYutR4nPPLE79hauxfRqF8a63bLL7964YV8BfDMw5VFRNct6r85yvjxJYyrtEUUVhFuVeY9SPyF",
  "key25": "4pfEcE1aXDgjm538s5tWydQjHt3fe29i7BoneLDq2XBK9SWv6VwxmPeJh91FcCSfwX8CRRPvvk4TFMemrX8AjX8",
  "key26": "2YvMvD2vxatkKEkoqAGkCvajhTdo6BgazjNhvdFJtC9N63agccDZGnMbgB5GzqsFuh2fqChX4Jq3imLJyzPcdYJA",
  "key27": "55jv77SWuMtavUpYhnHoB2EyuUJTYevXsUxDh2q4wNdWHBsnjoCD5X5SzENdEyVhyD3rSRkm381aSeWqLPmZh7XW",
  "key28": "F3u6PnFHj5Ws9S9pBPF2jEDdQhedqDACk7ikc4E5rHWEKunT51K71V64SEXHBfe6Yf31iy5tMbb1QMt95gkf8Lq",
  "key29": "2TqWBQxMGSNPr2cF7mhAsXwtsXrfix4viMHs2f542HSVU1hazLW1B24FFNnL6hy75uzG7RzP63SQXffMNDhtA4zW",
  "key30": "5YY7dt1XLXCUykRHNZKkcJKhbqR5uPsFuQCneyyaushMfDuBDZR6LxSdjkYsZzGyyQF81io3btdRk2hKq8Y3r5up",
  "key31": "2nr94Lo5DSbX5neRHBbe6cDNiVPGFsqf6Vo4S6VuCRFuQvfhV694bZ8P3j1Xk4CztABnS4RjazmPfd8mbP3YiXYo",
  "key32": "RwoB7mE7G48iCuXX5XuWPr9p4RYo32cCEu4QB6ypWin4ipYwsbBBTD8dd9zEw8kFZpTLRAJsB9vPyZXu75uqJXw",
  "key33": "49oPKVxDUcf1BbwqYiZfPPEYjzyWstiBH95Y7371LRpFLgJfCL1kkJTCBSJftcaT3Dz1mYiS21fS2LZyGqkq5hG6",
  "key34": "3bxyAKNYBX4KiXjpWE9CFQuY9Af5zaE4qtATPvRtVp6of1nCsEymHypAMTXC79vLp5YVfU6eVfvHpZTxXv1A6fNj",
  "key35": "4hxnp6JNT6LnFHpvLxMVNPJMDMZ1Ryv56aEzraPDQuQ9ZPPWgS29fEB4JvqL2Uf2pXq5CKVxPPZ18nCDjQyQNXVz",
  "key36": "2xJpX1QgqEXJCDRCEck8vF3CnJUxdcpmGXxhiyCUWKFZsoBNVdtwgK1LF8G5owjWJiT9TZNmrhyhth5ibBPNtrQ5",
  "key37": "66GinWrP1wbNjdcTSWAUZm1kSryqqgLzsYGWmNLwprxSnqPVZ8YPUQd9Ugr74zEFH2S6iCuVPiv3C2ogrni1QudS"
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
