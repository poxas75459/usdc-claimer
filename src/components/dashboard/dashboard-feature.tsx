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
    "4xtegvfv1AfX9ZBgTyi5DTcdsmfYWFZys7p2oeqrdxtxGQDegzaGs32kGd9sXvvPJaKvrxHjvjCP7nnSjU8cU7qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ov9dSmfNV8N47zSJ3hkcMiqDrS5WUMBpX28Njte9eCc4rPPRbLXNRiygRkUdh5qiQzeQ9fiwrhCn8JTpSKmpxrt",
  "key1": "5ruvndy7GaixLWARBbCkFuEi8P7x7Q1Uyi7PMhUPzZT3NJNUGeXjPZxvMvyvBeBT4gWV8XtuGjq6tPTGttTzTeFz",
  "key2": "23SVxone7Jxcb4LMboGbi1pG3k2pPBPgXMgoTQoidmbFebB43H9ypWCz8awbta3savyA3RMGQbcjJWf76Qzx4ARv",
  "key3": "5RJANmcGH9mWxu3j1ytJGL7rssEZYs9eNEzYPunuT33ue9kJ7iRmVFAF8aWpt1peG8yVgKfLVjpEecrLAviGTDaL",
  "key4": "EPzZZftcFq8GGB8JQHJK6LRmUnP8CXUkMzcYfRJxmiJB1MTFEQ7MHc9QmroUjzUG1Y8Gr6xHuGDT4uKA92thjvE",
  "key5": "5h36dSkP5mdNAkPptFAYYP9mEGUDXj4YcYadxd5Q34pS3kJorecKUF5o1DWdVzYxpLBFnbjt89rxy3VGFiTjjCCu",
  "key6": "2AHrd6cjWRRnzvtSVnavpoW3QviSnKMmEuFmAS3MZvsxTDYHgXHo7iFeavLuUcCabghDLAmGwu3WaeeqLQCgJ1bX",
  "key7": "3UTexDdaQVWvJqiTbM5iLTJSkCWC5c8nNKMojbidrfPneBxnWr1dCEMoTFPV8oJXPkqTG8xywNbReM6tQxdifp41",
  "key8": "2pPPBCW1mqY7XZV9ECw8nUsfoJEpXLLS9uz6w9ReHrAPmpaiW5qcESK78Bb6LTE1DcPkQn7XU6tzKzL27qRwtDNm",
  "key9": "xkquKshxLPW81zwxwaWtv7qMYPs4V87hygphtSJoJ29GMo92PYAgRSTYJyxwg7X2YmTBvBvTzHBf3Tae3vpTomR",
  "key10": "2F5Ck1r6Kad47x2eoCSdaZ27EKFPYg7Z1oXBpssHArkUxYBT8bUcWsHf2pMPy7Bg3F5pDqMujZCGQBLTZpJJYx6L",
  "key11": "3YbMoTUZAzTV27AZTZYFpGQP8S8pvY4K9xwVRHWP7Cz2qedYFqPbQ4wT6Fj6DQUCJRLGruErx9xz4bdpZ2LbixDN",
  "key12": "48rgU3DL7fy2a1Rb73TQaBcK34ovFrKAXYZWwPfyUv3abnsctj2KKCKbyN6Z2CfpgaBH7rNSSMp6UZQ3ZZjahbBk",
  "key13": "5RRH6kdkp2q3vB5oepzks3AofPQmZuh5Cx9PAgNodEQq7SmP1e591EZZGr32aXnScJ1HabNLoQFrhEezt79jhRDg",
  "key14": "ibYVwUsc7KHE8Pb1qKYbocHh5xKU7P3m9nBBrUvmUGkZJ5hj8Q9tBAqpqgCcsUUfy4Q5ynfRN6s1Qu4SjuNDoF8",
  "key15": "2ia2wUad2BfmzVbirWsPKnsiJMnemPmp3eibHUq4cYnxWB6xLtuxwhrpQ6VXWf6no42DtKLcRqHBWJHAw4b9TjtH",
  "key16": "5cac5uAXExfeRRcR1fmyMnnEaiQiP5oDzY1ZGymjQAVT8tNQjLC7VwsRe1GRBR1cqKLqysWMbwVLqcUoQ6KF3nju",
  "key17": "4aNaiofN5aGHNFBBZn6k61JeSt2qb67Yh4K7C9Ama9D3P6p6uKZBeqN4jRh3jQWWn9rhjTH1snh7qz2YUcA7p5RM",
  "key18": "4aAf6NwP2iBHXmqkJEu3NuFxJvxqrRFEEYZVZzpmZUEqTz6AKf5YM5hSREzrA5tF5MwLJAAUyt3CKKyWf8CqvCUh",
  "key19": "3oi2B5zGXhmsaLX8RhBs91HLGGiZptxxSNtv5CDuL97TgKZ2HuHDjyABaK71KZsiKYWiTAGZSCbGU95VEYhM4aeD",
  "key20": "2aeaT7eHWDqgkaKKRHnKsumxovPrdgDXGAfYyp9YijjYMuLD884tVa7EDkPKeNngZiLN954npFfpcYv4XMuUqVus",
  "key21": "3ZQWXB4pBqkCf3kqovK2ESFwb3bhgK1dWPid6fpSX7nEogqY7nhMxGLQLvotzRoezFYX3MKGokzcQ2TpBFJ3gcAJ",
  "key22": "4XxUiNenXhR55mwWa1D84tzFjAVFnC2wNyVmLUyeB9hdS491ThBmJoTtpLifscJk9EYufeqQvSa7kBHcdwaacbxZ",
  "key23": "NbXtKAqnznhXBq5fpoGQfDxNnqZuqp5CTqVr55257fKg251LKCDHDgKkMZJgEbPtGuji6DPjXGHi7fZoc75dvTc",
  "key24": "3Yj8U2xLqLgv6GAxZzNKzf62B2Emgj8XbN4upFyXSBGLBDbc18jx2TFf7CVQW4rVepQ6BLMRnhNZqBLw1q39KbJi",
  "key25": "2w4qXBd1q5vsbh4wKX2stWNfh6TFSwoLp3iiF7wzcXn9WPttLCcRtuz2woecAn7SXV8KNnwBQc3yG9ymD2NtiGZq",
  "key26": "4bofuTTaM4XiPCmcggNakRXCYKzxFrUdiHjNuAPrDxfJ33LPHqnQbRWSpfyMKJ54tbtg5NoHX9nRybWyeYxqF4kM",
  "key27": "4hFfb5jQueksnEFyW4qeJWRDeCseKc85XzWGx7hH67rdqM3XCCu5KY3MnsfWxu8Z8A2cuscQDLcbt34ub3JxX2V8",
  "key28": "3DDZcumvvdsjYCr1orUtsxg1AYAXTdZEoTTQSBfUdtJGVHsXKnvpyEgGk3HtZ2Vv5mvMBNwa6TGPQVpJo2qf7WLf",
  "key29": "34qYvFvjUp44ErznkH2DiVoMaN4ozDuNdsu6tcFjiajZ63nBQun4RvuQJQscfj5CVnHqoeZxYWNEThVXhYuZHnMc",
  "key30": "2Xbt6V9zNr729S4tTXU7oKaPFcdHZ3JR28x67QaYfCJe8LdN5CfH56o6ajpwtyEZsdc5wZE8CuNZAQydPokZfuP2",
  "key31": "2uAaVVKV3vpyMxhxxz1FEes4zbBkQ9WsJ1W9bygDWV19RTy7E5zc6PUuv65KUqSdiaGq3DsdFHvmJgTuNZVGWe7A",
  "key32": "F5APhYT3rmx7o6eUC6LSBtgsTrye4uags4FqgJyEAR4FHVdA7ZE8mJNGMqR47NEHy8kZEr2dSwEmxGXyPjKTm7H",
  "key33": "2p5Ht1CcQ1oMTeeb6ceDr6H45gfTxcRFdmywRX1pxKXfW15XCQeyVQAgKzkQ7CGmHeMWiFRDonn76mVTRt4sshYz"
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
