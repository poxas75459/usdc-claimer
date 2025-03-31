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
    "3JZvyPzbrWrPp6FGqu4yHaNu5paV1iF6gcaEV7cCscVNHLjcx1gkA9ZfyqSE9u4Gnnq11LAxMcb6su6dGhbr22Zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G89vLKyNuv22jPAN7sY1dvkp6kA3J5sHSt6Muzzi2AnmPDnhXnVcb2PUhJeDnY54EPefdWatUQBPmNFeJhngFcA",
  "key1": "2SCjuTkwqYKwy1KdJHUKiTAafKDrP52VPwdfeHrNp64eimkhEUtQY55s2DvhL8fziokRG2m842rPYEFSkyQPSHto",
  "key2": "L9MfBWx48PQbJuoGVCsNfoJqKh7bTmWSi611iM7ig9BJ7TLsTCGMZrEnKUiBzyfukQj1CKJKbanjNzpTE8K9pYr",
  "key3": "3CqjFmF2YH4pUczwgNSMyAgcDcQNLwNtS4yvtNZkSub2PGphHZqbC3kzbRWZKvDpufiCznvas7jFKS1yjVCteyqE",
  "key4": "66z28SfBcPjP64qpozvX3uswCwsng3TUGNwgbGrmRhrDy6BtEmccB8EnvTtSNFnRucbRC5Ygc76JWUYC6tUtdPLS",
  "key5": "dPLWAjiuoY39hetrQdWU59uYwkcVTFF3YPWUjzKmjxrfiWfW4iwYV15K4kukCyagq7sFUSWsAapCdumy1HMvhHc",
  "key6": "5KocEAAb36u79po5jgN5Kv4RVDR2GZAYa2724Yc8ZBbihqx8naxAo5tFf3jAs5fs6ZYMJPi1RXiJYxuVu2Jigy69",
  "key7": "4bFnm2eVoWwqNW2kRYzpjjzA7gVvkkcy1rTt2nQ92sXmWAph5F5f3UC6Ezk8FVFEmswYGwYJ5sk8zdiRrQ94yQwu",
  "key8": "4iW2JzPLnnH7PpVYN9DiUw4yqXwMxayQuvexuU4ysyB44RCfhzSZr6T3bRL89R3XRzvrjNYjkjT87Zhuc9CHj8Fi",
  "key9": "43oyokE3ttN5wQzBGnuJ6nz36qSghJwuGjKmuuEb7QwH4Nmts7ZnwqoFi1KKFdkUKHKjhm7uAz9NfCc3QcGLK4Hx",
  "key10": "3UPvSUx4TNwS2BW79skjsz1tx9xgq6CSf6jsZHXzunmR9a2WdmgqrcFknF5tQ4wpgrHPvxSFiNDYS78t4a2xea6m",
  "key11": "ub9dEgugEDgCdknRt32xHgouXjCyQ43Y8jKpVGnXCvoxXncRH12GbathMLHDpbWdx8v8XrFT12wu5R7mBSstGWG",
  "key12": "2H4gZ7C1HrcvUYLVZkeodSB1pJ8yVhHWH4FKxvWMp9DhZBewdbHM6UWCMJ8ctUgbwgyypKbQgvSzwyVGGaaPnqvB",
  "key13": "58RfatLUmY1DeQy8XJiZGcy3yjykDSP8hDV9KxkorrC4RWSvMAEBYAnCpPz9FapGe3CAXwAKymeYXX7g7SrnLS8L",
  "key14": "23h6an1Z3JD5M6WGi7oU5g9dp2AakQ8YVw4hXemHA6eGrvxn9PibTia9eFDooSmxXVRpWiyQDTPBSvd1FeEonjXL",
  "key15": "4p4N1C2nz7GLjACbE1hmXsQP4DwwHZb5Te8FysCFjxJrXJZ57N8qxi6GtBdrzD4yrC2Z48rzJLBsFB6Qr4rfjMtG",
  "key16": "4oJPshgEjRuboR4CWEwVJru3btFDFkkXi7RLjCEFN5CqcfNUUrks318jVFh7XyVGU1d8Qo933b2vbDAYfFJV65dX",
  "key17": "4ebQR3mMSgLTaBSyHb4WkcZiuPiuaL6FGUTBhnJhWLQMfCHEKweBuc4VAfBjNK9MKytumBC8yFCF7eevYEbTgpQs",
  "key18": "5XY3ucXF8JbgmKBjftkHmYUy7uQm2HSrPyrKTjWMbRmpaM1AYVbdUd7jxZQdLXdqM5YeoxF6Ya95oXMmuJDVHNQV",
  "key19": "5pmVR6HpgaiKxijnc6MRhQpA16KsGbPgVcnfwCZFosU1mfN22PMVfDkiD7KKnnTMHcDPh5y6nbCYgDJoS7zb3ugX",
  "key20": "8VszwAb8WvdjNkPSv6w9AiaohH2SUjZby4bmTkgaopXEhv2t9P5QfkGBw1deQB3agbP2TsEe42D5AbPeXVbrSWf",
  "key21": "5X4oL5M91AqBmQTAAdw2CDtPdWq7AxwJdKD46REwd7Ld3jv9CRicwRUNXkARfSG6b4888xcv2ewhS4mWXxncCeLy",
  "key22": "2gh7AsaaEBYoaKmC4Gog3ohfro38Tp21dac2m2GvCNJAGric3H675CmzzAXvuWToyUTJdJRzaXzVy8Ci7fTbLXgp",
  "key23": "bRH2nXrgWcp1VLdVHbAF37bPMmvdj97MZboWoiCPtD7aezW25sUYxFwjqrTAGZsXZyzriPgzmSQN5epZbaQozsd",
  "key24": "2hh66MwmUuNSGimveDCLhDEsvYHv7FQjsvbNTWbsxhPmyYo17z4irxU7p5jbuXEwriKeC2hVXwMKy7xPDK1iuwv7",
  "key25": "FNfNhCVWVTBb9JqX1ZS4f4fur8M7KgusgD5KNfVuwDNRpu58X1Tq5v8WtnUXYKLJwL6fFXXHjRaqKodc1RAC8kq",
  "key26": "3SYURLs6VipU7wuGDv2M7q4yLanvFmtYCDNi8FbSCnt2Db1d1gtBvQUhw8QjxNRiWnAXt3SaRRvFZ9pHYf4Y3j9V",
  "key27": "3FQyMZ7yMLWRvNwKYSEHxVZAr47V4G7svWrnzqGmDReghdpeetGtUWXP52yGsd8wc1pdQKrBDtoH4kzj3bcTz9RV",
  "key28": "48gwCFfM74ZnE16q4baLVQZG6XyYcyitDryLTxMhRtnEWNbNcEmBu3pUfCmecesuRhxa7UCb4UjKLm1QHSGRcD6S",
  "key29": "3QeqYzAaMxFkhxyjHnqnr8LFbX8WTuZ33W6SEbpdXZTfSFr3EpEUdz5vX8jHqpbwke7Rc3zcPDZu1ZVfzJBXopHL",
  "key30": "2UC3eg9A6SswmDJEbUfNiZhnnGLBn1ySUPQ2VcLD6TqcgzZjXx93iTbbinibybdQc6eALkrEQigS6L4MeoxuKHEb",
  "key31": "4azpfTkXVk2PZZc6nWeSu9UqRd879bE4C2ziVKXjxobxriraFh9ATqBC7mQNQNumPmsm4GxtNuw3NXCCPqGv1fte",
  "key32": "4C4PBxPMajz2Hk4UnUnyRUW73LdkjErZnc2YAR91Kojd7cBCkLDp6J47XGziaEhgPCjnuRKPXakpxyr27ErP5jb9",
  "key33": "oQD5uemHEmDuxkMV3dLzoQdLzYy3M86Ak6Pggy6pKMZp2cjGmk2ZqCBY8zefpSGTV5vhDZTAoFwDLCUWnpX69zS",
  "key34": "akAkhrbEmnhYpoR6hEQFCVa18vFQrL4h9zuUc94GMCUscXerMB5rcoR7kZ1eQbh4zdXsqjQR5qDc5hyw1yi9LnS",
  "key35": "3A5zd7G7czhrTBe6jPzyyfhH5gB7hqsrMW5sppS2Z3LZitypCVg6VqWQE2JHy6jgSYTo7BaHJPXEbaD1uc9ryExs",
  "key36": "4AJmyoDcKqPD6JHbeoqhCtEABMBwXZG82hauf7pBQCqMugD7Ut9xyXPaa7qBAtnvbwQhShMyKMqjMFsZvmHcdsCn",
  "key37": "38FTcMwsjrjQZj2XfwqdqnzMgbjQiFHA5hjX7KqfjLVc7jX9WpdzyH8rJMZsB8VijgFci7cmc8bH44ytPAJMYJz1",
  "key38": "2XuU8x73Ur2xhhn8RGYKtspWAm7EhktpQsHLMtFBn5karHsXfoY9oU4hTY2yxkqKZutkSBB14ohP7CVaaNFXicHi",
  "key39": "zArXm3vSvaYRwVB75RNto1W38eSwtdiEiZcfZo6YLERRaoYvYVCt5aTUnHrWdFgd9fwUswb8Dn7pGtJTXZAyLNa",
  "key40": "2vH5tf4Tk9s2oRENJr7MnkAntCwm9sMgVGQraJhV4UwHZFKBYf6RwLhSEriP8VWQNKwxJsJPD81xkAYaM2vXkNeM",
  "key41": "4HYbTvkUtKib8EXUzGVdaUGJ5DNN8nmxusBZSp8i3NKfewBKkHz6zVMYnYzpeaS2oeMbP6MT5zcxaFdq9Fqa8TGM",
  "key42": "4KUQ2Hd8BhGNF2quzgjvWeSSnYwkEcQof4C54tFEaJ8irdZqEMkwFoSEoQrfJvkoNcxpASRerEB7WrTw53R674NF",
  "key43": "3oNqjWCRncufdU49tfnvzHjCvMWZ6ZVx3daibNsv5NBiXTQ8TCcSPthj753ZJUYiY9sxpWGHwmU9KrdC6mLhY7pJ",
  "key44": "4Xkyx2MWtb85X43h7zmYDzkxuPTTSityXeRt48ka32aguegvfjCVxXGwRZHJmcKpCs6nNVRmQJwZtW8xUvVRzoeo",
  "key45": "4uTETfBkvW9zM2PXxKpYFSXqnnk5wphWR8MQB5qJ6AwCz4yHovtRvdxaMZahd3zN2DDK4WVd3CAEJEJS9FdFU1nd",
  "key46": "2BfxymngpS5huhYmBAtJujFPccjDz8ahCUgkwzjmXxmPcVqnxjWCNS5NZNfi44y6Yk89oq2ZWuo1EGJPgNgq73YU"
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
