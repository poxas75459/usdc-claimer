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
    "3hucpWpyJMoqQtR74b46w3mwzxSCCgs2xSyvJuA8cAHxB32wFF8ByqbovtiRX99r9v9En5gYWAPfHAFBinbwoh21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Np36acw5V5xf2DGcRMWaVhGU2vbeVQXMZA8akb8FRp6PMhmtme8FhYSsHtNCan82Sv9nyxTY5GSvR387EZFcB9C",
  "key1": "acouyoDKTxoAyjbN69GhC1XxcDQEa7vfQhvSm6UfATannF6BnyeN4i7sVPMYkNTyLtuiAjeTNZQu94XBmc14VGm",
  "key2": "4goP1oh5ZudrKzD6pMRHiK5es62EShkRickPDJ3c6uoVFsEGdcoCdkpXDoZVtsbDc12kC4oYptaiVTbAhYDhVZgn",
  "key3": "32gyy7NbvhufbcAvLbXTdBbtmFXdxAF3JaST7dftJghgNqWhoMwoMYQF9acv6np5aHqzyu8tp8GLhjTJbbTL8jMJ",
  "key4": "2XVRvfPugdP6MD1Wpup6NPW7rhJdXjzvgdJQrKomR6QMjuZn9NQCj9g7WFPCqQa1rk6y7oAEtcq1ACxV7M7Gkeso",
  "key5": "2HWHftMFyyVdjt4MQseRuyZos2wC2Zs4a3cCgGE3uczNvrMJHDtidrZvfnwGSpea1H4sjjGUwNHcLrJPjLAFvqqj",
  "key6": "4KdpqLAyCA85R8CfGXbkueCAs4kS6Vv3YPSmcGBADwQbsEZgTQHcSn2ayDBSfhikgPNWQW5JtA5qKRw7BaPUs7cY",
  "key7": "3QLNnrea2yFojCrV8daCAoeSBfQmYb84dfTCrsyLVuAFGUa4MEdwDR3f4ExjFX5SetZX1PKssfc5bHz1MKRMuDuZ",
  "key8": "5tiu8edQnNc6fGiXeZF19QUqFQGR6FDotf2qrYdt3YEZrRMESH6XNPB5XPN64r1ALmDNKL2wiDNDXNy3t6PYD2vN",
  "key9": "5egqFZYMa6EuXHVBgXgSKgepjpFMhiXmf4Q4ej5oLNi9iDn6vwLXGFGcpcdU3EvWWJBhgsBGuGgL8U6d6CFeApav",
  "key10": "2QX5wSWMb7YrD5hFj3A2rh9JekYDP11iXdaLCzSTkWySm7Zd1Uqp4z3sg7ZpXXBP88hrqMNxYkWQsNzX2WqvPwe",
  "key11": "5cMypkqsPJ83V5xjK1ET5Wx6KaiPN7mSzAVEVSZP3pAwGC67BMVsY7pZAMJyooJRJDWpezb1Pe7dn5W6SSYjnq2s",
  "key12": "3BG8CxGcYQbhVWaJNqo1UXYJAHb4CcxmFuNtff4wqiggPpxZc21rbXARFg7CiC1dejXhBT2sChQdLc5BeLTu3Zh",
  "key13": "2d2nz6mBPfoQtX7Bx4xjVH2gEtKhoqfXWXpDBSDipY5GPjyb3mNnrkszypbopZgNQazeEqoh3DULK78LkMS5uDsT",
  "key14": "3TdZLg9BD1ThZWTW91uLmn8n3cVyD3DQe6YabkGHbreTZXvybCCpWTRbNDZnF1mKHdtP7xBXNavKFeh8i1M2C7jc",
  "key15": "4UoPHRRuRiPUn358FNa1VFbcu3UHXtiU3TqFkzkb5JUXB623Z1iT49decpCKcv3LhiK6QAF27yZzVyYZXznEixYa",
  "key16": "2XzVBjmfKkS2iUw4Ty7hbdp6z4kNgBWnYt8XRacgdKkJVa3EMhk2zG7tnDySa2fbBLKTiQcpqDcyRkkMSQZeGgA6",
  "key17": "8ajjzL2YxzBFso6VQcGiu3Papdfhc1DEibPFnDJvELtN75GbQTk2eBRaSujxc9nTpqxR5gnrRCYF9roFnnyY8YW",
  "key18": "3kD5YK2czobg1JH7vqJPYnB1Nd6SJfobLewhsGP5KuDxABi6SXEP1KKWd38PqhaRdvHZW7pz4WGrUbr83iinC8oV",
  "key19": "4WidTKPX3ZiuJ2nmPQQztHVLVqY4oVrVWBQKN9BfwtXDugPP4WmrncWmcj3CNSfCaMVdjG3MdfPsbzNWi362kJvJ",
  "key20": "2gjFvYSQaswsLHrvbR4Dpr1Fc9HY3EwLDSqyYScdUiV5zUyEP85yr44DPZuvaLbLVtjBDnqudzxxHoaVfz21tdAD",
  "key21": "4GRnjRf3sK5dVeDdkaiiHmMWn19ztSPUWu6vgMvc43HkrerkKuM1wccnGdheXRBekxyj4ZAESEhPR6MGGdeTmSqz",
  "key22": "YXmX1uEALG451EthCX21PsLzcjLp1VuJKd5iVkYuq5n4Hb87kEHj7HsgT7MDJCyqqKrzxp15Xxxy6MQcGq76d9m",
  "key23": "3rMG8wBz8BWywDHSrSuRSWjJCAV3pL1Ks46FUvWLZmrcVNMxEfN6vmM5Yoz9JsFgiZsS55UYEiSvbnEbqA4DqAiH",
  "key24": "2v7WE3N1JPe3qsbvzP2GVRtt8GenhAkWXKRHSFYtEgJRwj4AkwPnsZJAFaGEQNdWYbjbqEkexo3su7igrnuCdyzK",
  "key25": "3ayieEGhQk3Lr3jf9jmseparxL2JKnE99kcBzRMarssnzm8WeB5SLj3cajgFTHYRWPS8LdD7cDeZNzpY2yMWnPjd",
  "key26": "DKr2iTF2LBa3AF81gw7116CN1x47AiDwyWbWAdTzfgcH7YstfqJoqS9Mb1rMYbix5KbqgZsmRTthAscNLmZqiHk",
  "key27": "4tZFpGaLvdTT1GPGG9iYtFGwAR57hFt6k1Yc4KbE8x872ZmbJwvEQSJFQjTKRsgTnoAJt83wexYgRSa5b4fy7R1S",
  "key28": "5b98ShAvaYD64iixYBKc1GThNF4RdD2NYwrNNqQYNBgzBC7eE9ixNhySkv9pFoD1LbYXZkmdm9DvHBSZrtmwHYcD",
  "key29": "3VfHR6eoRHPo4dC8zkScSJDpnXdmbpMpRfQuP9T245vXnxjv36Wq2c2TNkDUFvceeBkfb8Em281cQ6CdfxTZyGti",
  "key30": "2sPvc8hnHejoH3iWMYyRJizKegYzMUUrCcA1FcMcSjzfBNBnEvVdjQ32C7kRnRoJDvf1szB3PG2CgGWsQRuiE5FX",
  "key31": "Ban6ajr9QeZaPSUjxDkawhu3mtMDwfd3L7ByzY5HpGMg3f86eEihJLGK9nX8n4a8PxbJpZWD2tyWy5KJGKTVijB",
  "key32": "3yGy3Yr7X7d2qkWdhrniHV1sJsHs4JbBb3yXUSpKgUHkKRdUqxnqMRqdurAu7UMqvFMxonYdr3wEK7HjmuDXXJVN",
  "key33": "ERecy9iZ4mQSi9mpWZRRm25BjXbpRdxWwiQ4DvTaZjKNMtLwaNnD85pCVPmhHpFmt2cnBFhBvvMx4HqKHE2Qqkk",
  "key34": "5dRPcteBkHWzB2bLbLzZddDpnaoN5PNrkbE1V6mWikx9iziQAZxtKavgeCwVxQMmgxQhrZyjguYHtLgzGxjfVpm8",
  "key35": "2Vk8QKZ2iwx9cPi7rtE4J9Wr3oeCgw6kZGsvEmW87pwrTfZwio5MYgakBNykdiZAreyGUogrkZxsvhfSHMeFpBJr",
  "key36": "327gCT2b9RkqQ93TvgdujCGEkFTJBF7zxrwF3jXXEAGa8kXe7yQXZqmm9SzvjkZ1jxK6xjCVS6hjxBACw1LbAcVM",
  "key37": "3TtyG5fMTpFsCC7vnfVKd2wNZfQTvmWzuNak5Ga9kDUBpPrUnUZv4bkPeRYRFa3c8sCnPL4e5uTzETuYZKRy4BnG",
  "key38": "z3Pq5PejvBLuF94zDLAcNX4XGeyz2vWAcGpVTT8tC2aVjA5WcLFSYioAGnsHTJLMf2kBST9HriR8dKcc6xWpFWn",
  "key39": "3qHkoqUyJaRXWnfsdDRp9FJ2VfEGe3FmWFqeLWm7AqMBEhuuKM1qrnCqxLW59zqTe4piw5LwKxWVyhXGgjoEVSoj",
  "key40": "4iU4hp8ZM1rHtwQgLLrvV52ArA9YwG97a19rvtUmUN6G31Vw2Z5ZWbMgFEkmjNZGBLe3LXGLFyGd1zSH2MqESmQK"
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
