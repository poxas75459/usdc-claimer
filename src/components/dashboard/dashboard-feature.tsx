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
    "2eTrwGLQbMUHLHEEJtZJ24ttdQ6ZeXmFNwZ3WCbvsKgMzfoUHjxazAt6FWRQC4nkh9fuBvyPeEv5bWRbxfkEzi8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9TQtgYFUZeqnjgtJ6HEN7kK2jSDrxE14YbrGU665H2weuAXWnXEqBJACsdwtxMaxvq17qGzuMwLUokSjARaAjT",
  "key1": "2f3esXWudsQmX11WSocwn9mQdcvXoxEAPpcF1CKNkbPvWPFcXLBuYZucdSGrX5MuSWsVi3n5c9TefGJssN3CJJZp",
  "key2": "5yzjewcc9B6eBwDF8Z9GeRDQUqQakFhCmiErmcz3ZAQfd4LvBBmWiXVNHTDxKBkHFfy3UGDtRaJvs4Mq8Do7GsMw",
  "key3": "5UmPMCwt7N2h3XoBSHvTDVVdZ9nozXPew9cVZkrh1ZVfyQsJrbXGqKoPZud3FMwiA1WmL2s7zuqiYD7ad1v2dizf",
  "key4": "5zUXkZ7avebvWFiMLdXW6J49iFjjTN3E6M25uEGXpb2RmX8R2SFwqgfedbHLV3EsHK8CXpkobV6fFx6dXd4zvW8b",
  "key5": "2V3t7T7eGqfsmXx3YDp66rcoUAA8a6gACFC4oU8czCEhR5wpewd2jekHXbt95iMGzvbzPtmcjoAaUnKwxqXRYgCc",
  "key6": "5B58S2YafYC1JMQkHTjU8hPqSM62u6CRs6i9w5XpjtryFUJHdXWHicBaGjYfQjCeNTpmbSh2MUAdgUzukBX3xzxt",
  "key7": "5zV2QQZ5MJZa8sVe3wuLDcACU3j6YTpKK1wikFHch3TEqigM4mEv26eZJwM85tnXVW5xv2z23SBdQYu4uFa4mmyK",
  "key8": "3bZX2rTYRXRiTwHb4sbVovtFpkiPdLvPdzPEZKqpzn7MSuDyyRbfFpDu89bS33wigjLhJh2UdtTYovGJGTqa3fxX",
  "key9": "2rqBfAew9ca3J1ab1JUMHmjkcUJq4uc8isfG7LnG44irXj9rgYHNYtjsEDAXfaB1pkNqC1Vxtrfj1ERySDWV8KZd",
  "key10": "2kv541GAjMQcW5jXcixzopZKznpo2drwkBZVHQfhrstBqDnHzMyHKj6DQ59Ufx8WhWxu5Wd66W8vpjwpCcWnb6vq",
  "key11": "2JPUvz6hdt279k1ntidm18kggap4QM185BmFfHeR9ZiBy3X9PZe7mdR8k6ehxxjAbQQmzAL8BkodUpPZ2u9FdNP2",
  "key12": "5uSLDDHTstKGhV8z2v1NqAbNjQvhazwMvbkd5CxBSaZJSxVP6KotJAK2ABDua5c1kqk9nJP4Miefc7s2V1BHEZdw",
  "key13": "3vjjyu71EUYiu1Lk9GEHdfmrKt27eszMmwfgfadXHkmNBTc6FT1aZLzAZm7Z2SE3pc4YhePu7jKhiQXjqaJ4DRA3",
  "key14": "3hUwoTKEzzdB95YUZArWaJg3rPrBd3D97WbExECLVsvAu756jh4ErpD9hDiC7jNJ3PPLEiNo35L1tXhFavRgGxWf",
  "key15": "4yKovnR6xfpR4YfRiee1fg4xChETgyERDDZhDHvraXhGLkmbRNqTeoMUxz4Rwb7Bk84a93KnFtfmJbvVHiE4XVbt",
  "key16": "4e2iUj76bKe26xDM5he1CtjHpa7dQ1Ed67N1djnJGrkKJJ82PoZpamiqy2JrLkbSPnYVrBFVoHZuvUfhNziPP6ie",
  "key17": "2PFYaXQeoSWpoYfzDaNdXEgZdcJ2MmXJbVXa9bfTHp2Gu4HFmXPQxXQgr1dKMyiSaeqZRqvuSrWxXNhpE91HeFf",
  "key18": "3J6FWFxRqFpB93yb7m83eKAnPE4Na78Scbxy2q1RpiUoQxSdwLpnSpSsmEVDion5fzKTZa13UKGaHH2WDP889dWJ",
  "key19": "xUhJa4zKf6G7DXQZWawp7AxK61ncwpKBk7AXCSxCkRmwwY8dsisbzEyLsEhGwwX8LhwEt2hxsCAjRsa5LhRXceA",
  "key20": "3BNa891HeQ9wPjFt9HbETqHqVHCkk8Yt7C5R99goJyXosPcB2Lp75wc2kshHLPJaZvXtPsy3bQiAHAXYPCxTaAS5",
  "key21": "5beMknoMQseykZ8RzRL2eLUHhrWVksb8YHejkwvJP4JaT7i4YRApkt4MRL7Bs5d1opxxqt5kDoGSPfzGKJPhSKUu",
  "key22": "33ebF3XNcaHmCaSR3cDBwSKMpry1B39tRBx8utpwLPko97bdCai6GVZ1iyRaEkmKMxVMg5NU2HnnCGApqKJHLCM1",
  "key23": "3DW3j1VAiDy744Cp99ZRQ8aLDQQ6oQSmHveT846QNqFf3b3tEqEyRVsSm8GyBRydSqN15Ejr6AqTq16e8otPXdki",
  "key24": "4hwA2jyxppoBL3xhxftmSpjzvBTtoe7tgdiVtcdsJgSUf1Qw8N2DbQDD6oQgYrjWeiSuvAgJie1TFgA6m6QTT8sH",
  "key25": "2E47Q4pX7ZY1BaAomvyMpLvZQh5YSP9A5XJ1rRbMGSTzps3CGx43wdveG9CxKCjatk1x3JStEuBVnY8fRNDhMheD",
  "key26": "2qiUXkWqBHw6C2jRPZeYJmutARXQcyvMqECRHXa4MTwKqww5hvV297qCreKoBXaBs857uTouy9hev35XQak4mWFg",
  "key27": "gCQ4Vgtj5X9jCdm2UPhegsP14dCfZ7H2ReACUdNdnqS4XbekysVTF4Wd1kMfMfQnPiwxabvW15QVVyqJD1K533H"
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
