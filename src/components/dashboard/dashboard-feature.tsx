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
    "5mjCXRDJUij5DLGdj4erFeUPXqn1Qajt9mPxhmvQh8zBnwdhy3gQniV9AFGxcYcoYYHskqBLNuoqwYbuQXRfiXoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vv6LhgoqvpNH5zDyhfdVLcaEySRV4aBtGnkBbVuaUeV6tYtHTCdReqTt7vssVbpwnoqssc7Yis2gpHXLmLfKXvf",
  "key1": "33AGK2wqv3RChauZxJQZfEarLH6qme35LozGWRr5hQtC4xVvxoGm4MuhMbyjsp2cENAQW9rqqpTN7kk6GPcoLPwC",
  "key2": "xmmUiuyc118a24HqTjYbBy69N3H2DJ7d7n6qGUEQxVAfJ97HVqKtXAgkjbNgEMN4c7bDLLxuey4j9gCLAPpYWDf",
  "key3": "3yYbA37qVEE3sFdH78manNrhSz4rbncdPhJrxyyngcH3T5xchcXiQHB9xdA7mk9Aw32qizT7Zdr414jsQk1JDVFU",
  "key4": "4oZSzp8rxcWCCEGjLTqdp96RdZCYfvB9LaqgQXEdegxhR8Qwjh2vXWRvRQHUD7cDJYkXPhPBwLQDJvcdj1dTLWJM",
  "key5": "652cyAxkxfKhx9RZGM4PYdRhCYpGzPkkW8XTLaCwqBXQbNvarMnPuTHwqCGU6RWsn1BV8dSd8Lsc8aZhtrmfQQWt",
  "key6": "5tPeaiU4Sqe3apy8R1qaDC6D14DPzTyDJgsPzNsVMNZsRhmkTLRy1VCbWRuD8BnPktj7NHq78FLBGDVWMxKDbPPt",
  "key7": "eA1FztCNuCTEyVMGa4xaX26UhBYpTcAdUxcwdrXd8HVhhZotMf32dQLRxhuZR8k1BzNbK1ghKvC1vEuvpC2km8H",
  "key8": "5agzydVdTyx3QBGP5xMVAGJCtSSbRE2Gbzoadw86su1LmHuTHyuxPe7gCYCMQYxY13zmHKnoGvnjF4aYBrHoGcym",
  "key9": "45Rnnt5b2mAVVEBNRmTtc2nKhjtCrPXp5e5zEGbLziCjo1uNMKswPmbZnPUQFHKoS8mFAmcJfqRCDx2otjnXmXFN",
  "key10": "47nv47PHBLdyBKLpz2T8TrDei8U69KctQcuwkM6R6fBm9u64dgtEuhBL3nxoJsEn8HuzfLTaAhsLtFXdXjoyytRb",
  "key11": "62U7CjoVbCbUU51hTRCKTHt85N5BorEUwwy8WL1R8vhKEcWTYRkPNFug1211aSpK8CHrPHQ6yt4AL6pAp4wxgwi1",
  "key12": "5mcdHyixZQmK2j9fYbWDtRuXFrd2rVRq1RS5HnjpUEqR7F16yfco4Rovq6LJjymY7VfLmjznwjU9fVLMU7DjDoeK",
  "key13": "5n2QsoQh1we916bNUta1Jvs6UeZWCNXLPaxnEQe75p4P5e89kqsYMdfKwXqvFZqinL6jrVQ78nDDb8hnmdCBXQpA",
  "key14": "3NzRTXRAFzdwyLGm369T3DfheNfYAUQwHh9ohTCJVLrNVqDFPhpqKoVVEV8Ssc5qJXQhKjMjRvkWMKFePuvFF6Y5",
  "key15": "5MqNgGSsqiCHmJ2tUbXZKNVGUHyzCSYcdeYEgg8JEm1dEKFprUPzAaXnZZwZDw6dUeFbnRgHtyWbNh7gTzWyt82J",
  "key16": "3K5AjH4TTC2MU28dvs1c8Zj1o1Mv3PQg259RS7x638Lf1kqLwfwjHLHf34SLV8JivrTGNx39G49pw3Zwj8HfQpGG",
  "key17": "3v4Jyvge3AkLj7Tqfn8RaiRgSt1sRZopjBCKX8erpHEheW3YsjErjANZsR6T7tubqM4oEeHhE61tF3NjUbqfqvrN",
  "key18": "3Ay4zL4qkPxGYdCPc42JmQQqSo3hoPgWf3AX18kVRQ7GYt7v3J3ea2vbTJop5P5EdUWx1P7swWnenZYnB4gNajKW",
  "key19": "voCjWmoGMcPffkdqPwkAEq6oJMKv52UWzZAKaCxc16gQeWswxpdrP5FXscmEM3Ky4eZGL5s1YrHV6QPkVUXcpRv",
  "key20": "gR8nLiwx1MXaXuzyqLLXmtUJ9LMVUdM7t5dLBG3C9oiLLr5RVnyDmYUMRxXSXv1mcBFX7YHnUvv6F7vwUH6G225",
  "key21": "4Q3ry26ngVb2GjQKqRrgENy7fuDJUR6DjxBxcJgyyC2PyKcrZmpeVcuKEG7CfSBas9RfVgzUkkoAsLbW8uSesKZb",
  "key22": "5phvpKEvMu8x6viRXSJdHWpsmrGnxQGtfKerAnNG8WqrbEsgUd5b3fb2w2rJmbMCmG8Zran8KZeM2DUjNhHuAstr",
  "key23": "38GSy49WNKoU8yKWLm3g62Chae99YgwBe3hkyhgVWTygC6cqxQG7HDL2uJw23vey9ua7agrmnvtQy9rZdjUrPFXF",
  "key24": "5apqxwKG6WiTYs9ZHdwCkTiRWk7ZF9ajGSNpLi7s6vo5J8f1ZUrDaJrAW7UCKDBuDVWn6eH1MkXqCs74CQ61YAgk",
  "key25": "4Fh2pEtyJUnGLEePzuCuT1u32saGe25ydJay2yXMX57FtfhgWZxT9xx5mnZ8ymqcBE2e1GjsKCi3fX8DveARSXSV",
  "key26": "5RTrwppFcSsfUHoyNGcjDhm9Wq3HDnP9bcSGXAwyhLxsAeAMrSBp2yuyATr2DMHy65sW1LBfELuYwiKuJVVnsT1H",
  "key27": "2JQq4rFuBLe46DS43sEwww3Ch73Q3ZRRYn3p9q65q7nftQGTo4GLp7WdmK7MvZLhUCbw62AM59x4EQyG66mj5EFR",
  "key28": "39cyuEEA3JvyT8qmwdgLTinJw5eDgsjVUYhz87rHayyHdSYz91XoWYNKBwNsKEmRrxVEs41pPJQB2vLZwNtLp2i4",
  "key29": "2VQHBHgueyocyMpeF8m2QFJWw6G43Vp2F2qtbCmey8BiqsLREujUYjYLi5vo8xQyjxN9QDLUM1imPpMbCvGzDrvU",
  "key30": "h8W7BLCT9j6N1dRqTat4Ef1EUDHtZCmaNsXDxjzGByZ8ghvhAFpZVAkiivzs6HYV3JzxvURQ7t7GJU1dZysErDE",
  "key31": "5wDZhBxMsYwVtYBXnQk4n58xiQEssrqxG9ZCbPdfx2kN6ns2YnxvkEybfMqZZEDfCwCMwG9ZZoF1icrnZdGYguWh"
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
