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
    "2zrBYj3vKTjf43kps4ZwL3T5eE31c7HqgnpJsXMWSzyPwX16K68FVzwejMZXCZUSbe3ztWiwBrkAvTSrTDCVMku8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49F64TZ8ARUdRLFc88tpptSJdzhewtbA7kCdR3iEK9nNbakTAGDvBBFFDfkoWVcwHMJK6t95dWhqpKMCbaQZb3iL",
  "key1": "4KhWoBQzijJjP9NTngGYp9heRnjFiBVf85mUfwdAwKxpNLnBnNqsx4xVj7miFNzgUuPxUzcFcjZEXBCYQmTCy7cF",
  "key2": "NnLnsfnLSrCDSar4AqLcmadQjwzEuKUe8pzjAiBR6knHThVfdqVX52Vd9swPCXtdQgAtxA3A5d4Q97aYR7zUveK",
  "key3": "4LSRYaBDx63D6453PNFr4qmwaD3ZEUKABRmGA8vcJmfDChhm5fj49fGGt2SDgqecdUVCUSvRiAYzfsm9CVc8tBbj",
  "key4": "UYfu37AfZ5y8yNUxp5VNdhk6xPztjrs86XVAQ83jtKmAC4XSuZZCwqRojjVCUqx1ZQ41FVZmrxMJprQYJvnbWpP",
  "key5": "5Kbg25nvZwZMoceZT3tcEhBnUrvzyrFn5GPP4aM61GzZSKTfBwFqp7x7hjzeBvkRi7Mm2zC4EDKDAQTfL6ySSDMD",
  "key6": "2TBf9roJzx7T9fK8DecUrr3d5BBRkJLGSx42LPqMjcxxYUTmAD3icvkXi6j8cqBJAMCSdCp1gaErdmQbvazQRDaY",
  "key7": "5XBaqPxMdgLjnRqEp6LTeVUzwLbsF7iC6PjbvEsUtNKGB3XUn7aUx7kdeVjQuGZ6MULFMZ23Ue5d44rffwxNYfNY",
  "key8": "qMfnKLzSrYsSM61mBnDiCPKj6GxKdn3opvmU4yaxAZKtd13ESDxhoTYiWTUemhD4HAWCSReW3QL85jnPzQHSbWu",
  "key9": "5Sh6DM2B94wxtSL6pAWrYg7N8ou6ovp5VvbJmie8NjTygMqr4LXLMS2J1HMPSh5W9TVzQkF88p311rSeSzgMXFmd",
  "key10": "2MTm6BCjARV8S6sM5rENN5jrGqpSddbeaXMfD8Uj1ut9uvVwywuuVG12o6iLAhsWiY2xNhEgQp9DbBzH12aGJAun",
  "key11": "5m98pQRVZDVZ3ZwJyiV8Upk1P8MvRk3t6V8hJ8ShKQncCxurHreAZmnzngSWQEMN6oXbvPYPDB9EjizUWuEzdKX7",
  "key12": "sBuWbdNtwo2YXPwZFd8nPMBzkwY6dhCJw11xvH1GnuCyezuZyuAKrHxqJqapgkGC2mUBZLLeZNCmhHmzKQu6fR7",
  "key13": "3XRam3DGBpT555yFTodHw27hcTKj3tsTbdE4v6dWhnEPpfDiphmvAsw9nUHKsL7FeFBgNLPb9UmDuNN2nU2Gqibn",
  "key14": "2iHtPzSzBKKoRgay8mABBoWV1RneRpeZuaj7GCTVezsWPxRA69PNnhRZdPTU6HAjNTC4z4damjZ75LX7rzt4nEZS",
  "key15": "64nZqvzzLgpdCmSEcZcH8xL1cLbuHxTMdhKfFMramHEtDCbNQAED33cYbwxZNXHS5LLXG62dX2Va74kStK7CcQ9y",
  "key16": "3H47RaLtNWN1hMXtXTyLFJjxZMwfJfFeSjx6mzwqiuhywBocg9q1yCdsWPsaMLm3dRw8sYyvgyVwrpV6A6QPnJFk",
  "key17": "2m11ZPa6N2KRuEbEARiwggntTzL666QfgFK88oDyMfBd41AuqkorWAhFN4wcXZSFCdrLQLQbhdaGkYpdkL6W5uca",
  "key18": "4kKVzuMYaEP69cVfzLrYfDfFs2X1tWnouxDW3vJbJgbgHgziVUVxwgDKFogWVJbFnUfdtx8LrE6FU7tcR1MyX4c3",
  "key19": "4tXjKgBWPh1xFX7MscsQcnvDfhitfkSHSez5dgFeZz19R9eMfAFTf1UKfkk3CetKdADNCHQU8HTo2xJNwhw97Hy",
  "key20": "5Ta4jWt35MHdJYpmJhJb5nFwoncSA4f6NwAyiTMGwfjsjS8c5va9PNLaacmUXNVgpiX5QEiuLPuJLR7Z9RwPc9UC",
  "key21": "2xyv6LA7fkU82FGY5Au63RR1wrL74Aag2iY6jZ9w1oiEYdgpUZiBdJnsECMtUYJmbXM9YXBMF2jB37qb9tZz9RA5",
  "key22": "oBi3afZsXKc6qmfKCHvGrN9uHueWf7CCQHqabqNesECucjii1qbqjnngckGWtQdv3cBZQug2tbQEcM2y6JTW7JE",
  "key23": "4T6vUHkARrG1sAiQs9jAWpeXRzF2Qha789fMaiBHBVhVh68TYcnCtkwmPAeYRMGJmVj5sLVj94kLNvUbcnFUgkzG",
  "key24": "zJCetW2oDgR7sKcodnVMHxcCRChLwzEWxdWH3qj3dE1iKbY1gjhzujMERGGCNVSkcJGpXTYVq8B3nFXf86e3RdJ",
  "key25": "QYcRNgsRTS3eoUPv3gjGFuYEyXX5esLqQuQYh7PTz8CQJWmM3ZpYyLUE5tYHsCnBhoWWDFL5tSmG5KHSYeT1jJ7",
  "key26": "g71mCnuxWJSYkL2ND4MtfUi6ciKgWJKAfjgkpoJbUtzXHs4yR88rxSXJ8aFghzBC7jtddaZuDfascEQUrvkwQmj",
  "key27": "4YN38MXXv55HWdPqrWyWFQv6KdUVzCgvmXeXuRPmoM41m6gxPMDXAHbAtDbKQKfHNWmwjNjsV2EACn1syVnC3XGa",
  "key28": "64hd43vRAFYSftFx7h71fpQQQrPYxsTqQBJC7gpWNxy6QQvhsxvdtQyR9pjRwQC8hUTqBknvFnqcrpDxX61vjae2",
  "key29": "42futyQEChuvrVt5Ss26hXceXXSvdcf1jTHTVvVoqp1ayZ2RHghSgH3xn7KrT1xK6wNkEhiyfUiNHPLj8KwAMmBr",
  "key30": "3nKxFRc2zcdf2wyUHoCoDJfyZRLhprTexqpFy3ZCZ6zUY8b4j35NTEnycewuNXW1RQi4n9b2HKJE52pjDiGjqdqZ",
  "key31": "2Hoq3PeTY1mv1bfSojpDzgNhWRHaoYQ6THhgxWvWZXXwvNJuM6wuMzyRE5jqmECJJgoxERjiYNrN4nAGKCVZdrXj",
  "key32": "49kQg8ysaj4rSu3NnU4vUdWsJwhKTgCuDi7wUSatCneNpgbpjErzquUN6d2fGaoHu7K4ihz7P1kcJjCrmKzTTUU8",
  "key33": "5qHicqHAksBxVduzU2bRv2t2R8nEFYkeU5oJYXY2DVXkFL3iofnazfrVfaNMzPv6vpvuuf6xJCELGmrcqftPUntK",
  "key34": "2yf8bLB9BavuwZ5gk4Q3YALSMii3CQFJW6onhDkkziyPmPAmKPiFcE8yW1Ey135H2SLHBeypddn7uw9D95SSnxwt",
  "key35": "2mwhhXTKgDYgNzrLeh1FESpGNQU6rKYn61s2jxx5FBEPXpNcJZegRPddmk24StQUBYCK7htCuyYTGWN4jFj85XGk",
  "key36": "4bNLPmQFrz7JQgvQJyvzBqDadzUzRQT29gA8yHSEmZ1doGwQuRhsRfWYovrKUSd5wDM7XE2NNhpqh9kS5Ks16728",
  "key37": "5tX5pxZqCCnEWgLHNv2TiB5WVnpoaNjyv7ezgxRUtEvXyXtjmCVT1ZCWCnVmZ7EWpbvtPfZmNatBmxcb2nUUTp3t",
  "key38": "yDXsWAcb16WeYvsjDx1oZ3enotDJGUVbuKt9zaxbAYg1EFCAAsa2aUcL6xugEDzh2sfRoXGzXJBmYjXbRNy3oKZ",
  "key39": "5iGKaKNyd2BXwkFPQp4wMbgJFoju3y2mWQi3T1ivkQ62TNLe2zoBV2LfpZ1wqNmVpLuz1CsJvnRU7zb5hmVR6LDW",
  "key40": "3UqFgcaKLPK7khDX2grP4LGN2EjjGdHJAdXpjusWPNoWeGGWcyPJzYrnFxWMtc4Uwj2TBic3x3zmkD2idPRL5XuX",
  "key41": "2NLM863GeA7GZiLuAkCxihjHMcpsFiXz45Qj8gNNn4WQpqhbba6vjQXzRLGBvP91qBHzUKREEqtBUh9LKabAqtD2",
  "key42": "3LjZA5MrGd6pzRvBDdDaqB6q5oTccxNbWYHUUZbM4w7wMK734brnCmmgd4ZSwX4Lqc3zQMbj82zFosSXuiAwEz2g",
  "key43": "5Wgi26Vok5Q4SG6jTt8M8wuAdNaZQGRr7gY6nB3czFDVhKk5LpKi9ozqpJUbm9Xv4BSrJgvt8DdcjzJZbKRAcis9",
  "key44": "4iXWSnzwLgFYBLDwBRQQhHGzkmKNSckxXnNhxtehR5yFpyZeM1jvcCp5x97EE4cSwVnqYD2gsPLFdV3mzANwhdKB",
  "key45": "451VfErb4kww9UU6F3kJUyp5yK1NyH9QNTkTVD73XHBwbTDvzLpU1kxDqs8HDbhdUFWeLbT8C9NpBABZ2kjDY684",
  "key46": "3bzMcTaBNhENpdKMnLdnpLjiges4D3niPGVrbkBipiLGhaXoyC11LY7ZveRAEB8NxkMAnyFc6D2pBUBNPdSQv1Sd",
  "key47": "33SWrsSqBvx5nHBdWA12PB8wJwrB8ANBee3JMr7ZFFxdNKoVWrLw3V7TxEw3jn59SpQspskbLfawqRvvruxCVTBF",
  "key48": "3c3YqrgYui9dmp1PnSpu6gfbjADgqpH5758QwDfxcMmR3QDhsJbm6MEAkP9BzSRtz3JHyME3G3dtC2F9W3iiERYR"
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
