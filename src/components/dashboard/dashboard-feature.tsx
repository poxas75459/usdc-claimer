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
    "2tzndmGGsYEmLzC1ZSKk3ByYKydeECTeBpZpXD8oihYxa4LnMfUKBxptDD8xezQxXrUECh114NHB7D7y24c85hTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBvQsqQvS46Yki5jotCReUECm8doQXqavxrQPeX8Wj7vLt61sedU27fk8VJJPatsnb46mw3CcVm62LTwaS8aHeq",
  "key1": "499aTGeJNHPJKDWnb9489fqYVQZ9ZxrHSh2PabqSfZykwSPmGuftRXy6hBuYnxhhgnxVmpKSnMZ9ny331oWvMSGw",
  "key2": "4Hh6fmyfgJMNs3fDkKLAmLjPSnmKbHvGoS9abjeeDAZookvKHeMQvknGWFyDXMVhGD2t62Tc4s9cWxN3JQoKP9fs",
  "key3": "2q1SxiimVWVCk6QPQv4MeZohdXv17y2SrKBbt54c6TiED7WboHzVY6FyKwAGdRUAzkFq7tGTS9c5XgUtBtNRbprP",
  "key4": "5cQBsyzQgGj4q5ZJhjHmuuNagVDPgP1XxxKZa2j82XUvYDoyDvN1p5za2v5yPxAsYAVqmwMHN4cxc2q3z9zH2yLH",
  "key5": "38XWJkaXA23ekUCpHiJNRcJBHwr2F2gygEfmdqsU6V1atKubBbAHaCVAuqABHPE9CRRD1TyfVWHoKpU8NYzeKkXY",
  "key6": "5mUJ2eiGJT1PPZRTt1CgnDnQ4NQsZ5nWFV5dZzZpyMjVisussxkvkm5q1SFcQAFvQqJwLv9raxmiD7H5Kq7eLHnH",
  "key7": "35Gcs2KzRwYJ8v6YQhQptHYUCMvCSeurAtvjucAqwTaiCyWzXRqtvPYwM6PzuGbGeWESy31jGJa3LdbntQCNmqpH",
  "key8": "3LULoZvDcPLPXiqASbSCS442XupsENnpnSn4Y3gBGoJQ2fHM1b3USKfsLpVz9AKFqumxZbzghkPTsKKgahvoRfx8",
  "key9": "2mZZopeQefMDsUVqsoANnwcQKaLYcj7X36QxQjCEmzFmpXzexj12UYfmS8Z5Rc6gNUuZhTWodi9rQu5HFkEkR6z5",
  "key10": "4NtdQDeQcAvHsmPVg1duAxMr7gz9LETec8f44LjRL1cjcie8Sdmy77Bg1DsUSBx9d5kMN452qDumHSJfhFrn7YHX",
  "key11": "3X1F7sQKuZS5j12nKCjRq1nG79KpEBQLhiuo4dWPwKKeyxz6yK6Vg6CSLMyig2PdxjsYrqwTAkymcfS4w4debSHu",
  "key12": "wr51T8hVTDzbTCEc2zqKAGhyS9pazJzoXk7AxFe5P6iw1H7axdoZiMGWHBKnfmGAxmmGyahqU2TqzJsAbKY2LpY",
  "key13": "4dW9Km44iVfRawHYS4QZBtqnveHfGFv5gn6oAFC35S4vLKUoLszqexf5s6HvaJRSoAoxnQuBuQbR8mdUa57pB8eV",
  "key14": "323M2rNCpjtuxJ32dmLkhX5S8o48jvQorPQEE8FVNnd7yKwaD22mFeezYiCaHQ9E7AM9W9XsFnxdox8adY3Ac6w",
  "key15": "1fDpmxZpa2Gsy8SbPcKQMB93ejrU3aoxzYr5fNsme74vgHBHjccBSL8PkUuPDGZDfSpM7PtSbJrRKNY3JP9BjmQ",
  "key16": "4pXCLSRzcSQ41jWB9xikeiWCncVWnksk2xKB2jDWTvefik4YRoJ367RdD3khjG9K8psBnC11VQsCzyoo69zYgUys",
  "key17": "5WLHkmvy1vTHnBgY9cUoTz1navDi7iyCgkAcpGRWef9Zrdgeridv7seCVpY9bgjvxezMssExbpomUPedVNFQwqqw",
  "key18": "23P7obxU62d7A9ESLtKzttRuaSzCKsCQzjWQGtSCFywaSLfHR6wxHd7rrr5bSQ4wEf4feeQJeL7TpWQzT2Spxf5s",
  "key19": "424TWr3RKgsqThpSXjZmm4PcdPAWLhXCkMY8DzBopSqYTbSD4pzCQGSYr2w69zpcuQJM3jqmvAdmKGCAaXMnaych",
  "key20": "5oYKBC2BqhKU5nh2uASYkffZuFdxjGSFf4XHYFbQbFoCJhEydwwfbVJP64zTwNcYX8kBUAbkceERj41trgrxBNsc",
  "key21": "jnPjKeAwZZbqvzmonkdrJEMSsqWdMTx9uXPbEAAfiGzVUopoH11oae9vy2ZFLKyzrQxekAq7ie2eA3aLMp2LVUs",
  "key22": "2FLAf4HBtbxFaBBJQQ3vjDrNmYfq56YaEd7aURM4VepeaoYsVZ6Ff4SeExiDmfXxFuhj9qWi2znpnqVqnf7z45oX",
  "key23": "5hyubFRaFyN7hLQBGY65B6Q33S2fZwbQ53d9tvXVGpm3baGc7vp2RabqftvTaq4Ax9y4JER5q3P7urQ976nQkoNQ",
  "key24": "usLBnsivT1Z7JARr6Kt6DEH3teNNPXF6aXZvnjrP6ww2GnsWb9guRUBzh3fPqo9wBNhA6t9QK3giy79gRmwaaXc",
  "key25": "4MJhmCv7MZMxynvaWajKMDayGmvoJApFCmq3zTf4htdnmeVfsEEkFNdoenSsuj4MeqKkMqTzh77LjKZaNUJ1o3yE",
  "key26": "2ibrxABWUXjtSZiLvWhBMT4ky4qXjfWs2KJHvRreUU2E1QGjsGFxneMC76aCNFs3RAehLu8dZMuzB28yWWVCoT3W",
  "key27": "5ZfdYUskA64aiAvZfuun6ea6xgnyYmZGYRAFVXbHdoUrd5MSJ9Dz1pdxAg7LzcaSysRgrZ3E4EAx1Br6X6iWY8Lt",
  "key28": "2urvWJi3avEA196eRkpGqxdDuTQPUEBJdULWpDSDCsKxf7g4PgwnU13N1YhSb9E3XRe4Nm9V17DtRkVuoaemcsm6",
  "key29": "QNnCqhnKVKPSqeD2YsknKTpkb8jMh3scdreBnvUyxLaxDzLSJien1cGBtUKVkMfqCZU8CmDVUs8X2nZCGzvG93t",
  "key30": "2KB3i3CBh1qaUYt1WiHZzxzqZnbsergZbjwmLW28EX9ecw3mZnPsbj2XvRbr5RotmDpDvsjFMUeb14DCHD3gr9SU",
  "key31": "2vabw2dNEBny148SxvD5QyKRSZa7BArZoRTuvc9u8rPjsT9t5AW7KPVmm3NaWii9uEJPzgA8YDZsLMMGDNcTYEz4",
  "key32": "5E7rhXMhJyxBJgHng1hebMYjXFxdpteTgNr2hf3nPDu5aEHEswEWXuXcJiYumTubnzZiSZNFDE1KtbKp1zrGsXHE",
  "key33": "5Vj85wtKpB9rq8dNiqKKHg8zbSnNAFXKQt7DhMJPyvJrMs4v3WEc6Mbu83j1Y9tuYmtSNFGF4ajut3CX93qjB1Pz",
  "key34": "2rHYT76ADdP9z5kVwCcm2rfpRgKXroQz8DLLVoX3cUH88TxhgiY7ao2uSoYZZpp7rgCmUj4VP3Dw9TDcwtFn8We5",
  "key35": "5cxDYdtsHurkVofVBcJt9vutFrKUf4awZtwopJ187Efp9QqH1tVsTGDCmVnytnDba64WsZ1ZUt2t1v9unxpFLQjG",
  "key36": "5sKWFCRV85xsoV1KJp5eoBDq96RcbtZgZcK2kyDsfEyLyK8dHJPksPeWgZ5osmuTyo3iwRmBHGyuh45Dk7rW2BH2",
  "key37": "4zSn5Pb7ZuYaeTYfWvxD99wqQiQsoQZk1Sx5mZEu6dTb2oLp3Lmrrg8FEcGLm2E7wskfNCfbii15dsTv578SVRtW",
  "key38": "3BkLvDTHMUaYwd16XSNb9XaRAK3CXMX55VK9Mpi88qTNkTv7LBMtY9fmG4AprSVvXeNZQzAofqu78UKbjQDYudn1",
  "key39": "47Nf9n5QptnrXrwwzL3nRdKdAoKeEMHyJ3sXnxB4W21b2JatY2tTcNuBHmspge78iU7ynLAkmdiG6F9jnBKVoW5f",
  "key40": "KcFF2LaAqKWY4k5csbADR7DB3CqprExtYML5FtiwdUqbtRCY6PPzK7u9QYMWnEzF7suCoT7GMue1ZE4yMQD8F88",
  "key41": "2v7k19xhPgEuTCE6LVk6utpiPzwXUTEJHjoXKWncqqdACNjPF8HbMUQRobaSsbzRmGvySNc6nR7iQTN31EDss4qC",
  "key42": "4obfhPceYB4eioCEUb8rZGv3mMrKTS7SBDKgKiYcaxQFztvwjfXk4UMJJQLk7NArBPDognuEWrCWJUgxSMhnK73f",
  "key43": "54y9w8VdQbRwwBhgQhka2PTokTng3dhTG4ymRNDkRzmBp4HV6wNCdu7jkRWsUdkJfXHPuVPYajkaphyafnrfG26X"
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
