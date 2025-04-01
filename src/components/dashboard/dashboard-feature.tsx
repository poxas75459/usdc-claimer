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
    "5TFNSzGSvDJD5ideai8bYuZnm2BzsMXxVm79Ksfns2UnRpbaMZ2QB7hpnyppdG2gqXqhWLAajZGdyhpC3kNLWAnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8j53huGYiKznyCb3L9kGYVCbQoiwEg2NVCGVhYHGRSUr1smzqQV6NSBLtotV4XtPrQYkG939eFLds9KF4yz7DT",
  "key1": "WckGmLouB7YABgxUJ1fspR6z3XeckGq9Ai1tvC7ijPLCJkbgZb6oZtAPFabpTaMUSsAdHqxDU7uBeG4QCsPHpyU",
  "key2": "32gL6mbjHRkJsGmdB26QwGbQXLLi2mB2VM7HwRpnjivoAeNVGzYMEVYQpGFaxJCyRM1FhfG6oWtEdvcSWwrD4sGn",
  "key3": "5uaib8efaGWNuoFoF3xmw2uVL56APz7QJmnwSRULLABJ4FmQCv11DsoKMCmoWvSPQorqgf5weNTs9LYpqfWM4QNf",
  "key4": "3sZgbdeXZZg8uprVy3L2C8GU6iN4F9JXJyBZs5Ze3WTANq5GhB9CDJgEv8TDGZqXDdqBsLYVm5F95hBk7tYusawu",
  "key5": "2j7Z2QkPjpQGMAGj3oHy7uTn8kMkKwyBcbszdXsj49ojNTFoCfHT7o1VgqQ4mUSWvRpeTeK8GHM1K2ce5uBHakXB",
  "key6": "3nB8BB6hvv1e73KEnCjQkZxkErTGZxme35CVZkXgeRkifkwMAXEuxvFkEJQ7agYKBjyiuVKs4xFdLD4ugj4CeYz6",
  "key7": "4czZnVQRxRwZQsXN9qJPp5rRsNW9FhsVt8x95Di7e9br1VXmFBHno9L9eRXJZR4XyRKR6ozTUS5UbBSmxR1bGMGr",
  "key8": "2bq8zP6GtbbVywvdJoVwLAh2Jj9j5xzdHGEgqBjNDQipp99Li7NTG2CHpaVxRXY9GLC2f7Hj4a9CeH7ZK5fFr1px",
  "key9": "rdhne7HrjTvNUBEYFnZAyNk7QvQBEh5mN44BDUbK7e7StrYw8rEHadwsLnyaqykbwxbaqw2b4N5YFE485vSormm",
  "key10": "2LiwV2Xxc7rhWuNE9GGA2SjrWv6jyNZJFm8C11KvTdTGWbMJdUQPdcV9zkvXkJtSGtqiYDvyFSg7GhSuqkp9ACMz",
  "key11": "7F99qiixueyXph4F1e8sBzswfJ23tD8vf6QgcbMU12b3T4iigz6GD423UW9Q5vGT2N1uuV9q1jikBJT2WzpmAdk",
  "key12": "4ouVEsBFUL6HEkLNhq12r4zJYC7SK3icTv2Nk4agcgPi4SrFzDeuAkCBKH9VYbVKXHMNgeQ6z4FuGjgA32a5nif8",
  "key13": "DE4nkGpGfw5jFmfTRN3erM1hxTh5o2YtZwJ37JEFvctKvSRjm1dRVpNXFneXaYzcLnRK7shMQmBi4GyiQv1XLs2",
  "key14": "3VCdrmQj49pEhfdnFwoFq15qSsZxTAYMdbU9NbuMkPbdSypCGEq4UEycnChZxCqkn9wWhfK5sh4CYx7XGnPtQVdz",
  "key15": "2XSWcy8a4e7wxBho4GpXWEwZfHTv8fBcp7TD6L15NSifC1YnsjzNubR3oQ2QAqsuJcQp5Nq4y1pakd6LiFjgkdsv",
  "key16": "68kJVkkvefBeK6SJxVTBZCAzP1BTK2HdGevaPer7swSMbQWQwPvuJAYqBp8Lph9d7MgauS27if4LL9GFN3mmiDY",
  "key17": "2VZGjNinyDxt1JBGFbTMAp6cZ4s6NKhNYBD2JbTFNaeE5c8hsADmvbqE5LfbRasEULXnAFA7PWSAswfttf8wvhH7",
  "key18": "5A5L86KKGoTEnoBauLx82Vxij8GbapZxEVguTDVCcx4tXddoqU34nixiyb87VtB9r12tW2jng5xk59tBW3i9HxWa",
  "key19": "4xEduxAgbQUXFpJEMNWp1jqKD4Tud1ocySRxrcEEFoa8Mmaeg7YY72WjKmYEnPxfwFLXUTmexVQ7tCpSE32ST5M",
  "key20": "2Fa6QbYpXqAPRQTGocK5NPcEVMbx9bM1CFThh1vAxFBTHbMcSt9Q7vLFSXywWSF6ao4hnnkwAxk3Dpf9JiH2fwph",
  "key21": "3qvUafRsMTT3TDPVkSVBxDgftzshrELSAaJzF2cANE29zVEUJ9mnf7EkNzfv2iC8iawvF6pjUqyGZhAbZtHSGo5f",
  "key22": "LyZc4g5MwKcMs3YyGbiZ2vjm3T68tJ8ye2VztRTP5iecY2bva2Q91AbE8676BYChKknPsLAo2i2T1vLB4zyoHq9",
  "key23": "56wPbtkcYErxf6oTew25V9njJ58274xc71ePAAxkmxXykeML2MBaXsAHAoYEbLMbh85iPXExzCimbdAGA2ZYUo14",
  "key24": "4d689fJbUa2HVxQPCnYxzDVRUstkkwGxMqgjET3D3rNcP828eSkGXUq1pmtMrWhWaotFnwKZXDPrbgD2TVMTEVyN",
  "key25": "63mPtTL29SJ19MkGwxNfDccuVw26HwbzUfaQzedvpksdNZHUkDgqXc5M1UxbDkj13qHf43Jkyr6cwfHE864Cd2zJ",
  "key26": "2m3xotpJ5KHbcuR6vuKx4SGbSDo2YXcJncoQs1XB4arfvGDny2qfPWZpnjiHgmQzGNjz98j1UYwALq5o2wzEbUhZ",
  "key27": "3sKFCrcbzaZmJ1mbnS5Hb13WmJvvJWmf1iaWxGKzZMaGsaR8s4TyyZwkyKKuREXtStuZqHqt7VVSjWz5kr2t5cya",
  "key28": "2D4YbF7tX51HVFoZR2LUxMDTwTvzJmyJ4NTShzedWRomUWpZqAGfg1iR8Dq6jdTq65kfhgLVzfNd3KpYWd8ZnbBr",
  "key29": "3GTMfRz4LEzb9ay4xq3ndov67TWwQujiehxneX4m4eX29vR3EMWb59nKTAaZB5iSQhG26qyT2SXYhP2amFo1veX5",
  "key30": "5UNc41J3kYzaWmufQZGxzm2qbaEy89v6SnTJ4Doy8LF2EdWJMxMJT6suK3KxbEhUk5cNMy3oDMZQTgdMme7AnAZ2",
  "key31": "3xDUfxe5cfsacVyUv3anAnFVLvu2zzBmZigvt1hBZQCvG4FPLLya5svf2eUp8wN5BLLFvNkSXfLhsjtD3qeGAhtq",
  "key32": "Y3nm2vEoxKDVsYvqybMzMc59mwddoULH4wX4RRkNWieAXme4jyse8Qi4MxwFEMvdVf2XZwW2i6z1kthcQy98DgF",
  "key33": "2yME4AhTjLEDwupj8EuRf566J9xhPMBeYReSZQvde2XnDVXjhPULqHrURHMWsUbmxmcztmGEVJyu29ocKJPihjF7",
  "key34": "2zP19csF4pgD4Ef3DC1kRoJKKCHHEkijqBEfjbDviH5j3uVVJrcYiSgHyPMjMYJK7yHYA3HomDgemiRj7gc7nszn",
  "key35": "58QuCNAk2zoMtDtjmwUNpnKQvazuSQbnoXuLV6bdmSri21UvVWk8dABa7RQTRjj18sH8iwzLTDqhowNzAR3Xvvgu",
  "key36": "3HDroePTsADV6bGXsEGmCAj9Wkfn3XKTMviVNEbPFovwgS58ktE1QWJLxHxNNmHoXA37pLETAtcgXEmpv6Nk8Jfs",
  "key37": "5cwvu8jfNdKvxd6Y6qaJfMciLwWHeYCbyJKaL1WhQXeoqVayyQnH3v8epv6ryxu9JoZssoEnt5R7aG575r4odYRa",
  "key38": "96twiWP12vLpMds7Vv7mReqT6vRsohknr64steVjtTLjQQ8gHNYsXeL18EQ6ZnarVaHrD8wtAKxooeN1pTygMJU"
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
