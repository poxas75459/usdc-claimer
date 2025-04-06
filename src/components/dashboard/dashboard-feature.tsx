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
    "RzioZepodhYkztKNVuqFWtbGTRHVRLeCqS8h9vANsDDGTXTMx1MDppD21UsmCmLuHJbtbQ9vkWFvH85kwyEdSwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zoHpJXQPX3RBtP8nfXV3C69vPpasEVRc7wR2jhMX7E9D3n99AfLtAhTdF1DdQAhmGivGQ9ob2qxveHNyinxo287",
  "key1": "97UvaPsC3Ea2K6JgXzJPZyotJk9aumFkUKKH4LmU653SYTLRrDi3DGgXsJ4cDv4X93sQhdE8ESo3GoBTLjDsVn8",
  "key2": "2pnE1QVTvVs6UZz1hfDsk7y7KH9UGvvc7zyevzfUBGkLnRpAMkrJ3Yp9yozatx85oBxPBjQSEB1W6UQFzfWtgzyL",
  "key3": "5rKkRbJ9TbN3yic3SgAioHhBKLhEFFtA9SSvX2GdFjZBqC6N1QQA4WbphfaQfZBkrZ39DZ393EKf2BcBjxYWpwc8",
  "key4": "T9UYizrkLFEohTPLE8imyHJ1jF4WNf9tcDxrLhkbC6YBFDTvgdhPRAN95ruqtmziyNyQ2aCCU15nssu1WEcAm66",
  "key5": "27jFP7mFmefYz2345LYmXiYE2rugUDzZDECkJ5Wc6Kfs7mgkRUsQNa9QCY2GanDWR1pDsqZ1V6SNJPGA1Koju6Kr",
  "key6": "4tdbjnd6V7KZM4eX2tbk6sdjC3Sx22znKAgyXg78WfaoY8yM9AE7qoX3BoCXat8Fcz2jcTz5i59psdoisW4vAbef",
  "key7": "3tvwh5xnNszMiPiNoMoJZ6brr7dMHKRcg7FVQ7F5v5MPLuPt6atrE4mhCpBphDaNpMDHXc5uzaQnnbbj4k9dhcHz",
  "key8": "5jgDTAbRXCqXFchcLfwiFtD7juKr3X889XHnkoQGoQSD57AfcW1NT3hKd2M7wBGwW2KTVV9M1aFgTMTT4oEoNGFK",
  "key9": "24TidQq2rGzGMVrjo5gD65MNX2XfyQsrK95NP9uur7Nmkv9KQmBdq6K4Y9y3VG3QzEddvVJGw2EJbLpd98or7bA4",
  "key10": "6RFZZi1Ye6EGFqrzBLpSbGyqvUagz2oPgibM95j51j1xq6fDj9SKAj6j31LEqR7kwWAeCneHNCAfkSJMMx9b1Wk",
  "key11": "3Za9GukzkZSdtbVAsYeH84wxkWQh4J5nW62pm8FJK3VW4nT13MeP3SYu9dcSWtKsxevgXqDmwAdSyr8xegKHUteD",
  "key12": "2GmLDSAecx7i6Tg9YMsF7JMcfJbMK2SqqWAr21zgbEKh5UT63ycZyHaLspDGfENKQVCX58G76K5rFpyeBYhNGkbt",
  "key13": "vT6Ly9tvevGZCBXgBDiKKvPUkPtUvSh4fMuv22qu35DCyQqzj4UcRGzR7HVMTAKJBKFMc718kWA9TqrHZhqaEvL",
  "key14": "4dSuLHKjrti1rSsQxthMnmFevm1MbVYiz21AA4au6FmtCLorydq4PnqSsirfJVw31QhsFUmejb8Qz3m5rKTNqPn1",
  "key15": "CyH2jbKoZaW2T7XU8mtj4QgCTk6pnKUuTKTCD7YCombn3eHjRWE9bXrx2EVw44wtfadDNqrFyBKk5Pp89G6JdAH",
  "key16": "4SK3GeMYvh7oAoaQtn2G2ph3TeRrm4zJ7sQMpfAwUqctUdBUyDmFxi2PukLtYxim5TZXNWUT9dXAnjiJUqKXoGRA",
  "key17": "4iKr76aXgj94fpXxz7vwexgb42jkybdzPQpxrfS3U2fRh7YJ1PDvnZEoYBt9rixuP6rWRsF2hQo4baGkmK8JsdKn",
  "key18": "3UV6pZ7qz1tH9u9Z5jUJadXjU8HsYmvsvpFvQyRM8bR8tyaDzBz1RQTHxQ73aSkL99akEmrpGvY3ZyXdVVB4Wox6",
  "key19": "4YDu16LgjKkexY1RRVR4Zcx1u8YxpZ8HrwEfdrPyzVJjsp8bVDLKZ51zUp9YJNSgbLRHutbnxaUhYS6q1sNEmc1m",
  "key20": "2bdpGbWUTrquwZ7fAjdmVckV4XRqvAaSQdXxotC79mq9FTUF2uYhwn3MufptMosUVGVXVrKPbWRtda2nnejeY3YT",
  "key21": "5m2BJpQtJfVuA8DwV5H8WcRRpyEzJCKU6JFKRoWS7271vdKgKvqAEHr4JSiZ4MaJWESBNY8AgAnh93tBBwsnXhuo",
  "key22": "4CME5AqkrdQuqVwGNcUSD5fSp89aUkjPt2Yg59rVHGrEVQwd4RcBDEqCriJESawD11TSqRB27xvt7GteamC8Wrbv",
  "key23": "4opLdvehicvzpiti1QMrPGAfbZSpNC8co7i3bdqwzNcYzHAiFdKmK49oQvLqiroqpCChM7HJUgao6LraAwPoHGQs",
  "key24": "3T5au2f7522k6PhEGZocu4oWDKT8ueL2BSdNxrTbKMrBcqT3u6rYn6ojMc3zdWTbLhYD6DWAfg5DMWE8TtPrJDkn",
  "key25": "RhA4pnvoUEF3DGj2bTLRdzcc17crPk4MLU4U7Mb2k5VQ6Be7yHnrSaQCRMxB2b64T1rqBWzzfnrvSSdphq77UuW",
  "key26": "4BYL3kPVRaTd9Ey1RYKnk5Z2XD8HQEe53qJrUDhuA68gi1CZrWMi871J1RZ6n5CL2pQsSVNzRzUuqajneawEZtiu",
  "key27": "3AJPNar5sSaDLnwYTbydZ3knoU3J7HAW79822huCdoZFbXXAmPrrV96Qk3YNoqC31vBJnKFC5bXFUFcjUcLR9rxM",
  "key28": "uCwK7kpPf3UCCkZ5RCh9ikbdd4X5avEQd59FFHd9aVEAZFGQaUq9AjmbvebuZDMwqgYJdpcLi8qSQwAkF41ui7a",
  "key29": "3zXLrAvuhkSbzQCRzvsu5q3E5mhvCHx2f2FG8kg64HmBKjE5zeY7vEKKe3hC8HCspw1XtJxvVtKnqH36nhhrkovs",
  "key30": "439DPDjabG9z8Aq1NyA7VRFbcLtqFCJoEzai17PEXzesEZoh5ZCNEBUFZA3n4sUxgD3twTj5NJk5mth6Qn6iLNqQ",
  "key31": "5kmDok4GLLBxy2QamBwm3LRQ1EmLDHDV3Kc82kE5fEzaX9qiY3AsmQGBC9mvLiniqjjYtytg4GoZJWDEuFhsqW25",
  "key32": "3iwtTvy6HVjxEiY4ChBdF5JVXeTZkCx8p2kxFyhfkqW9UY9hfHdz7pU4Vn5hFATGouyW9AYEQUrMAZGjR914Tsu2",
  "key33": "3JPgjeMvdMTdjjBwrWTzP6xJEjfDhfqcytuft7e2yoZPJTYVcWPUQ2hb6x51jC7Xd5GfZ1DeHddTSryHaCA4vYFc",
  "key34": "5NWWpr3bfQkF4fcBtckUTumjPPbEss3V4rfgfs4Uxkusjdvb5Y75beKXNnTDXeoGQ4zTHfXRbAm9SHd5A5wR9AW1",
  "key35": "dErYsLz5t9uo2sYPZtopTbupUUAry4n86QHJLuf1ebast9GUEkoUj7dyuw125gSAs469st7Nn5TUBN9HziG3iCJ",
  "key36": "42euo49461m4muePSiwrBSfb7aUidC7KTPXZGXGKJQc7P4HqyQDF62upr2GrzkpeuAbgTEDpD85CpPuwbKhuRTRH"
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
