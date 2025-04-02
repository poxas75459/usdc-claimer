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
    "4QHHeWWgKG3ZHK6pHJEs9KZ8WaM9hVkbSsst7acnH94aJr6nneWDQMzTK3YDanseGHkNfcK3NVn8dqA7pz2uCZBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AxVCKTYYq8ncYguXJXDf1R9PA6D62R6iLBJBXtKyEM3BKPypb6CSadESqhqYHokCYGcAeRH85mAsrni9HXqFJhC",
  "key1": "4LNH1FoAnQpUhWicm6sVthyx4WR8j9dpwwV7N4dMj7JWgKsivfvH8E2FodZLQFmgP1czongQcvdWxw75Y4N29rRj",
  "key2": "4JW5c73npExFPPrhT2f44H2woRVzyPoDByUDUNfmG1g44Nkcrqfht2BwjVBViqk63m2pxMXJwaPTJD3ZjbSzsuJd",
  "key3": "5R8iTYAjQDuqMeT5RrMXZKuGsnRELWVmXZKf5YzNhHaYgzj2xZ3mwiyrVYB7R8hhQhdtayahqgaokqcPrmtcP4uw",
  "key4": "2SjFVZp3vQFbTmkWcFg7fbXzd28ZEcnrPxsS7o54tEfG6Tu7oEiGe7wZoi8P42KDGgkxGV2ggvKVLbPVK1gvKezk",
  "key5": "3AyhdkFFz4xguWhw2X3kwgrk9fB8ztVuYviWWmcvAW9JkjJnBjiSdnDgHdD7RiFFivn5m2BZcEK2jMniCbey1ivR",
  "key6": "4egdwU4az837jukNwBoHotduzMrrGNS77rYG1tkStJq9kinG1y17tKiEUxBW2c1sbT7JKMsZ9EDQsDKGDQxfSiTh",
  "key7": "wKEoWqi2fGXpQmm8qLeC4ZoA3u8y9D77rGuW83BMwDv8sDsFuwJ2SJnAcGJMMnMTkYcw6KMTP4sc3jcANGtamdB",
  "key8": "4BuzUt1BLK4bvAMsU827CBNmD3caUFZRmNbGrfUdopvAuwr9ePD69CkUb6pj9B4ix5JyZkq2ttRVSNcj75S7S8wk",
  "key9": "4Fcp9P87wnJqyhcPWraLZsiEAi5hC8xy1yvEsoPvR66cW6xxR6VHQUN72sfCFB39YAw2pGtNtmxaCzjxeXNTyDYi",
  "key10": "3bnAuaQDQtzCdagXw6GijWYHWkqC4nUmcxMcKcTFi4D6km829HmWyCQaM45EKSgPykK3fgGJpTHVQABKvgkqR399",
  "key11": "25cwXPeJBYs4TUgdKcMQC5395xRQFHsSbATUNTnTGBmL1MeTMc926RD39UK54UX2LbA7ik6Rp6ZBmJTGGEjWVaAs",
  "key12": "42efrFJxL3kiR4EyHe4BE5oo1siBRqRG4VjRthpMyCz63EAJiqjDhEfCzWs7ckXk7ifGStG4kTdavyDVDxpd4rAk",
  "key13": "j8TJRjyrYQ98tiRKEA48Sz9EnkXcLj2QdCpZA4XADTTwBCiDyfRG7s8kn7FPqDK2R5DKkArzp1LfreBfaNPPFB4",
  "key14": "32wzwZm7UNEjrM127ov4qG3RZrfnAsCCh5u6dcC5irTgqA9hw32qxtp7L4MRK7BY44iVBFrZ5txEyGip2QaUrk3L",
  "key15": "4VhQzNZiXsRxivVTpXua6hWdrnVTS5Woi7VEhPxXofh1TCrrFcuHJ1GufbuHD9Y7yBWLm9gGH5tRkrgM8aGvNh1E",
  "key16": "5xRWwXtUUjZmLFez1sLRidBy6Wuehe4mnWgSto7CKbW25kSQyLCLauxWQ5aofFpMbtGhHkC88zvMFU3fZxe8YZu1",
  "key17": "wNFPiumNjvbWX9Y2xFRfzA14pvc9NK1fePoFqsSfMZGDhfX7KcCNY69p9SrNhrP49XZouDpin1CXC1RzZuehJFM",
  "key18": "2TuGjiPM7bkpXutDBapWyFnyi5Fz3TWyzf9EVycmfN2rj4ZbQKzKzLCvMQ38jJkuzSvkpzE9Qj7sEof7AiNf4Ced",
  "key19": "4GBVb7ae6dnboinM1QYDe9gEFAWbXzsBGKoWQxhvgsS9wTcatyP7P26tSTQWgyiiwgVC9iBHYj2fBiv2KmkrkTZs",
  "key20": "2sqUiT7XiPids5Bs9ceeqUbyMJB3yeQoWFLCjk5qcmTnL1XLMmuw5i81pQCSUWX35wZNiKTE8opV8MxcZN4wu8jy",
  "key21": "5QnikuQQKYyMkUHwVNyftaiNskDARUBGhhrgz5MsY1E39TRBQRXRMSimGtJ7MHZmUimzkpzMKB6b37bGGkJ6s1zc",
  "key22": "2e5xs9BH2dymhX5Y9KQKcTnavYhk4vmr67jHHDhg82hMtQdn1C27h4CHQMkcsrPhfi4eWNpV2TZk5TGQVQMKhDxS",
  "key23": "55Ygcmz5PV68VrH2yefPuiHmNyx1nQwHgXVGt4hBE5SsStkYFFroEiVkgxLye3FR1d34wStVkxgGgxBv9bzM9amm",
  "key24": "2BSqTvNVApzTzVSQaAQWbMrDunznW1Wkj8M3Cy1bPuwx1FYwNE4GWMLqorZpLzUSKGqLPNDEDdmDviHzZrxNx5p",
  "key25": "3Y3rw3uHTGZZVVTbwrTBFJ8rCXkG6uxxnRyvV5JhozskvmJABSdRYmrLAgFYJuQGJPZoDttvzshiiJNYTRzxBgQr",
  "key26": "5jreXrZPGyXUeox7nGxpfwKDdT452joLnjUJ2UxNz3k8ZQVkspukxWm8YNHFkohu488PJvqcf5D4jZRpJMuT9ETs",
  "key27": "29tYn226hZx8SPZkfm49ms9fpR6EgUqfqMR2SxDdEjWvYEq76Rw9TXrno6LVYmY67AXbgeaYk94Q8V7xLX5Y65Mj",
  "key28": "3Yyi39yEzbDmdcbCzSvqj9rCffUzVvihFJ4TkDZgMmPHv2iN3AbH6RxGA6saUpXEejH8uMtmVoXrxnmX6bpPGd79",
  "key29": "5sdi7y6c4k88YqcmFzhUHw7RYtpfF1Uyaf8umB7wczCRx2ExTTTX93VJxVhoAHDFfgv2Egki3FoQf4ZAryLPQmmf",
  "key30": "2eab8W2iW4Ycrt3nHiL5bURKiVYwioxoKSFVoNSQQnCS2xDc6XSWX64GH1gkoM6SpgqCgnVaeD1292z5kh2VhgvQ"
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
