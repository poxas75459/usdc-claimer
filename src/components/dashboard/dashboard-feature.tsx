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
    "5eV9PStJZCQcPv2k6b6ekLCSjEk9XtrjMcFak4PWFUHWSUgCxnE6Br8ZCnmEpZzF3QAYn2StRkKfLazU9eckADFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGeNbKnTH7TuKYfx8HjSwdayvgGoZyoL5pWAvi1W93ECJ7j5BkicxYkTiGfKdAexzrwYQbWdXsk9Hc7WgMBynod",
  "key1": "uvYx2xLH5BhNUzr5JDgaH4SszAvPhuNN5Uug84zi4wr16csrKnNyaB2uwnoVBUnXKvuxcDNkoDweLnr6rUVgXDR",
  "key2": "48bYepY8WLUYnTXiz6k31DmtS2faKQFNNqXPxbghiSLBzd2wyVaXhpjGyf6YUaNn8kNbZPhpNmTrhnYm53twHXSo",
  "key3": "4bad6zczuoXEatZCmRGxD4u2X2FnUCre5rDVUuwgubcbpmYzF3vbEkhqSvEcf9XX5XKf7fX6pFxLWVbtyD4isNBR",
  "key4": "5shvsqfTBtUZTwExXHhgf9CP3GiQYd1a4ZhE3EsysBgoQ98NhaTQvD6mtpvPiszetNLcgRPicQks5u5rYBwV7fQe",
  "key5": "ZzmJhu7tb9ngnPH1Dje8wZsQtBhYtXAopZFATyu7muNvxcfKkGCaPzmdfKbZba3ZLUzDtEoS8tdLwbN71cbkQjX",
  "key6": "5HxpfQtNJtbjSobWrCPzAA5nJwCeSuyro6QUnmoqbKnTA337tPVwbT9JG4TfZy7TNS2sCKSSJziDyKvpbJPJi887",
  "key7": "3zwemxvZKwpE8183rSmzxEbJdS9XerhqP5weDe9Y4qs9SzVTnvrmNvyzab9zsuRxUuNV9ceRKpTvbiuhdS9h2so1",
  "key8": "3yjhhBPsZpYFrDMeNxJuWeeQcUfVc1mrcJHfmnVm6y5aZjGJSzGc2GsHfijWcJxK3HumHSwrWHMGjuYr8LHhViJw",
  "key9": "2qK4FwEkvZqceDG4WpFcEUYTFFGW8xwdRxDFD8yiqG4nuA7JeebkzxpACHyzXRpW6sishePA2g38cZGEgjrECFaK",
  "key10": "5f792wmsrWeK4sEw8NSzt5EtzyVCdWpFHKu2hSGwNNj8qriCgE9f476s3EAx4F5uzVhDEpgWvshvMARGG2F7FnVB",
  "key11": "4q3BRewVBfRWhhszwyxVLnS1EQCWzLyRSuuMPLVrFn5TpHiRiuS93ECy2DmwoTALeTkHwVopqSMmcxfsjM92FPDq",
  "key12": "4L5NB6VFMBdBcwPTZXMEEXFTn5hcbzodzNJudAReAME9Cndpkufw7judVgDjrfx6GRZqNzLFjdWftHNQW1vWQB7F",
  "key13": "3SSergTXowcsCJubWVEtgCRyhKGmBzJQy4FMTTeoXTffoLtmWSJKah4ZhMSnHsK3szfrJ1bwCkgEcArMnPzCZ5NC",
  "key14": "5C7XizUeWwip3yXutiTv5eKGZ7Bxy8jrUBdM4qXKhtc8BeuLpjzuVKQ7pEWT9BjeNxwaw74YppPY6A9VqgpCYtDd",
  "key15": "59YnGp2kNpTDtHVg43AqFiLHa3EGHLZv6qJv5qqwrLXdYNKu2r5DGjXxJdDVPhLnkXUfjg8oMy2TfJJEiRtW2Pv8",
  "key16": "2J4CQA1iwRbcdcrKYSFQTSLQUWNYAnHKND8MR7XuANtNxmtV7YDupUiab5TgSsZYLkd3pbKzow7sjLVpzdkBMgKz",
  "key17": "5rtMHgtBGTePQMCG6CGC8Hut8Z2XcE6mJVwncakQqZWbTKmjeD63JiARJAvN2F6fMyfhSkufVtafnoh7FoCFdH5q",
  "key18": "5QVFLoitWBKTgHFp3qUGjV4zYEzasQxUkgiMBTPqfixqwQefne3xi88Gj9Nnniag78zE9z9uCGZfndbo51S6Pgwv",
  "key19": "4wafH7gZH2U3xX9WzBRTiwp2mFBj5P4JoYbtJHPJqc8v5NhimSHh9DJhJyvQaFGprtHRKpW2fDy9egngvZBXP4pU",
  "key20": "5tTaXch6Dbj8dT2PJpnnSNhJnJvnfmZiPbLyniyubnLQys4y9DKRZBgkjHcCHNHKYbPbgGKFczhXSbM8cSXqd2LU",
  "key21": "2QfEAK4zfxV9PJYw7ZcRYne7PSbGmyAsBKGEUunxXiLpBVxBXVigth3fHz4VVnAmrJWK37i8ZkdTqqYvkg8SLcsb",
  "key22": "3v3D57jZmUG1uFrjWUhPEdpPsC4pdVoQcCsUExnX4BQ7ZisxwMQmGeE49eMcEemTwaP7sWhA8TcgPa5pppiJZQFV",
  "key23": "4bcLJgNQHJWeqjcRpx6PKoh4AZx72ZZb3KTNKqJucPeJDscx6ugvTFHhzq8RN18kfWaxokZJRTskd4c4pA4dTvTm",
  "key24": "42tevY7KbYqn3ww8SyBZudHjpmCs9co46bnTFGfEGUYgSioD5TJEM51g98Q2b4v7HuHy5SMgceXD2FsvHMMkTpJr",
  "key25": "1jBbx5nh91BAqQUeg76q66TBVoLgYjzd7EBm1x3E8vpMA6iy9fyqBg6vdHHfsU79sNXoSCFPp7sCBJpHzGKSx1A",
  "key26": "4m9o2D3k8tuhCN2c2wXuPiboqbEttTdyCSVo4JxCT7rio64K3WDkKZEaCTM8xjxEEj2PskrvZVb17ftxYGcjUcLf",
  "key27": "57sibgAVj41faXHiT19rmzm3i82VdkZHVk1EQnD8nAt8VeUadRNdKCTVGkSZcg1sM6fcWtvaKhGPR3fj7RWYsGSa",
  "key28": "2W2iJ2i8hgEJM2Hg9JVxrRme2Wpivhzkj96pmcPzpv3dVS5rCqjPuP19ug8j6T4R1Qbk4cfMfVyLYRf8gg7EHtGh",
  "key29": "5jYQd1Cry3MLvW5jjMBywkLjZdxDxR3xgVD7TjwkWCSK3hrc7D4SwXGse1aqvKgGDDcM718ebbjJokUV6trK2Ub9",
  "key30": "26uayd4xrwM2j8dZH1B7kE91rGUSWYd9Y5u9W6JPXKtE6HcifGFdcnB75o47vHJQR2YBwk76YyScJh3YsqJxEGKG"
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
