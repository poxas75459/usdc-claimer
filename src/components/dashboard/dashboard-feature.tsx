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
    "ZDjt5Ks73VT1QhWpD3t4pAvqDj3bgeN7Sq97jUugS69EDZpizuQbaDqSQoMn8CBqqq5Q65tJ5vsErgyiXFNpHiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pm7NnVAVBFbzT7yybpF8vdj3nbVMfJYCanaU32Py8dQJhKvWyuFBxeaGQgfgxQyGACrAodNYspCAAZ3Ub9Y6Q6r",
  "key1": "3jqTd33wemn6ZY7u5G1ee26K45HQDiv6z5nYy9J3VSgvFYtiZM2rqymuBqzT6DCXU8fy6J6ipXCTXoU4yzznfDtj",
  "key2": "52WdZafY3BJyoXF2swFe9JoJF3AeqzqzsihH5WBQ7YvnFQKGdKtEFCCbbcoebomihReWeoPwvxkFjUxb52fje2At",
  "key3": "3PAhinJR9bhUYeqL8sNsemT3jW8FFV52DLNW2vvhWX9aCbZh9ujXtYPPpfX99a8YKd3DGoEbMEgcWeG24Kr23sZc",
  "key4": "5aCcZ7yBKzbQ7h1CbXvTrj1e5ngqxqN3xofwFp1Es19jYzAnciSPj2zdeFhmH3nXPHNvHYpbqVoybjJxhGSmxzN1",
  "key5": "3TmEmPVDdB83tVSXKLeWjgRZEhpciVt5kMFYaQBiPFv42o7E9N8AQvgdGRw6Jrayu95QpyR5rdMoLNwGRBu64NWJ",
  "key6": "2SEvqZywpa8KsDJpkvagf9iXDAZbDDMG8Tg4pv6v1EJofNGFVD8gATq32sdgKi5V7aVC2V1KVJxSSeoUMGAyPmW5",
  "key7": "4AFAhFEBPUY77QYWQNrjSH5AUQVJg5zRdiWTuxnvSZBs6ZKTpwdwYXETwaAdZZLbKpd7z3R9iVaVeG31gSGmWJBh",
  "key8": "8oNqvd1tgk2zZUhhNrcjDKPTJVTkQo36sRke2K5metA6n48kdb6c6oJmTho9meMV6So7eHvFz1fQumqXcWZtjum",
  "key9": "5CNYnZcHRmU1H6euaKWLceiRqbGDVr6J9jWFy66CyHA3t441N5z3Wsmsi1B5PoqFZi3qVnEcVhhGGYGjbTkRURTc",
  "key10": "5EmCvNdsX1weANCt31kLmu7sygvVYQCcYYZkNaDyjEbz3GwjeJ2s2mj27yw8AANtxwnGj112ZCHvAwv2288grQf2",
  "key11": "44JDhXKGQTHraWe9Vc7CJANL81hFdvcFq4bwT9Q5X6ak6VHaXYwr6hnkWdpCBtsxR1JFGeG57uGU6qi7tZQvtqRh",
  "key12": "4MPewE8if8N8dMVmG3P488E28UhFtvzYNNiiKPeNbCrq7KhwC2eK1o61mKk4zvDPsFEZ8Sy1yazsM6twqNpgKCKw",
  "key13": "4zzCwhuJJEmNvUnCLNqPYzGZBE43A4SLLMyiK7oygcssNEa1Hp5ZmYanXr6bQhHY94jrabAkbZjejYdkkCmnogqF",
  "key14": "5RBW127hzbX2bn3STW68BzcVESTrHvr3jucuMtK3Zg5cNT7q344GLNu4vBFTwXxSrQuYggC5j6gMCDmpr5sAcqgr",
  "key15": "5Bj48LaUXQ3mcHNdm9nd14VKHzfdJfr5XxVY73LGV2QYyfcEhz8BdbFfJR2LB45B4D3TGEuzfVMZxenQmEkdF66Q",
  "key16": "121V3bM361JYw9mwusPxRX9gyRbRwDVooDYzfdcdfFTvxEyEjJWmPHzvFKcgMaTvbJfLMzYfV8ceQmUtRJofV3i8",
  "key17": "2o2xunvc8mdt9ixc7rDHDZkiQbABLU4UfqhTMGSwMGEaRUMwfnvWRSHfwG5L6vGHvxuP4sJGjTn7mqVzJkNX1A3D",
  "key18": "25Qs1sJFj21zdfzzeU6x7oUDvjv7jCZ6oCqY8ZycutG8iynmk5njohtyXSpCCPYbWpbCshaFGpNYAp4PkkajzPRq",
  "key19": "2Z5fE41aLxT7QPSJjgT3r66kXZVQRF7rGdWtVQQFheJKMv9Hm9UZjfVBsrm3oqTH8cqgPWo9uQW67C4v8keN8rDw",
  "key20": "34M67gHZnZ1Bwk91qJeu9MKVuM35MDnJaW9CLZtnmmwSc28pYuZFypGbcJPKL6tZsifaUFp87QGkocK7HabuFQYz",
  "key21": "TudyQJc5hsPRz7t8gpx3zYR1EDtghy1P2LJyze8dKrKF8fvRHKnc6QhiMiTLf2FsRSXKJvmSRr7d5k2hxy4zZ8m",
  "key22": "nEjFyTj4UtTe1Lfmnh6aV5MrvckaSh2ZqUG5i5LH7nyuRpxyRACKbD23vN9d51EMcC7pPY8SQV1wBD2q4PBgYD7",
  "key23": "3VLWxvsiTWnbLSUdQLEjJbVwM4in26UD3dAhr3VqVNk6Ext22Kvv3YuiNseQQfLSCvCKMVhwJ9Knd38wsccTkaXF",
  "key24": "2R8je6MbjmHJFzWiXuEi4p8guUHT9dhtiSoGH18GSWX6YeNtoBNQKH2ujCjHuLcHXAWqWi9C7P15CkYF5DTXAJCR",
  "key25": "Hxz3dxwF8bcSNkeiczmVQTsjMAKnPtySvaFB7Udz3cuhaMBEkh2S6UawFDFZgRdpaY225asj5iqYH2T6ugSmKje",
  "key26": "351nWd8mmE3ahbNsxzubTpZLFNGUn8VRZjj6yycdhaUBYbZRGSZpQioH5EnqfrhDfibFPMXfU9JKxfx7u5NPLCVp",
  "key27": "4nhRDBrDV8sBuvN8uaMQmSr3KQvRoC7hu1ArR4gzPGhnyfUuRxBbLBhLLUSKRUUT1fBodYkRj6deL8jyTyBDkwyY",
  "key28": "2jMru1R9dgAVXSfVrKcuoxsgqM7Ca9Q8ote66tgG5hbgJMkt53Wzz7kk1EWLPEzdMTGYqswvWVZjnnQzZxuja7wP",
  "key29": "46A3gEQ9bq59PSvBbRZ3RRZ4YhcHbCWSvH8Pz8Vi8xEVnguBCv5HLxeRgHgKLeLXQ8cpv6VsWjMBkgMmJXA4QDse",
  "key30": "6p4RupQjJKPGUF7zqZAneNCceFfBt6isgvCFAVwvK5VJyt9FkgF7FuHQS5Eavu3SHuwofzLwYE9Z8LLNkcdP8mo",
  "key31": "GPPD9U2JrAnebnFz5eN2gK2SmRWjDJw9ksEPoxRDTiPxDiUvnX3QBkFUmmMew7tsRhVubmBqyn4dT3WaTSxK2KE",
  "key32": "Kc4KrK8FzsNnqEijk8gNxZ9HazYtoja1fijxCwShpUYgNcjkUZGxs5jPiC591S4D8U2TrMQ4AAbjRevq4Js8C4Z",
  "key33": "3bNEXCWAoSZsWEf2tfXyK76JYd39hsXZxRUGcyH6JLax6mv7nvBe5JLWM48gkpYpC9dhgVhJyKn7MywmxRg2GyKH",
  "key34": "SspxoqPS7FPPaeCTcWs3rquCTAKcdyLT5jKu5M3Sy3CwzZhU2RqjmRaz8C9UD42o8EvzGE1FekYyPm7LRQZgp5G",
  "key35": "2Zf7mGH3beP3v3TUrQFrNwkVvohjdrRT7ANsphzrnzfMvEVCZkAJeiZFaSVhvQsGrTi5Azukbx6ruMH75NmSkHnx",
  "key36": "2tTfAuoyrrqA1KwPWaRv1N6U7GvHG13roAsLJNzRWtc75DvihNhP4rVsyYENPBuDgeGptppy9ReE3DVz2ct3LG7j",
  "key37": "4e8VX6LHMsYs1AQsDn7QExHGMCeMemcim68QFusUN8Sw2UwCgNXqRGw3jSLcUEbCdHHUfmbcYG52Wrr9MppfWWRj",
  "key38": "5zwipMGaYMa85C2g2FKMc1qj8mitgCykX9zysRJEQ6ZMNtEnUsp9oWzWA4iC6JUmc5DvkAoxzjwbbBv3wytEKV1V",
  "key39": "5J6TZZLcxcFcy72ZRy7XLBqsyVB9Knm48Y5wTxiFitTYNQ5dLaqvNsttMucZMKyMygkgssisKucF4jBNViXChViZ",
  "key40": "64oyemVVJy9BkCG9DgYbh41Xn5RHueZmKDqr3i7KF4udXChcP9AQUAe3pr46ZGVeDCytfr7UbHmMZnBi3Q9HiqKa",
  "key41": "2o5gopayhMqVRMnh6PA43m3v5ZRTyWGvs4h6BB3EByqQGc6onM2oBxiVNhwJ8dqaMJQQWUi2drizEmeLCFiY33As"
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
