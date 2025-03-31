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
    "9qeN7AUMeACL5AdY7hHLY1HZkSz6ypvmfizz6c8tPKQK8z3LF7kJcEqyvstcepWNDDZhSQNWNZZ7a6gruB5b9k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e87gK7jW4pVodYmG7SrVEPALQnWr6m4RJByGFdTmm1mFQhsn6wdYcszDu3JTKUpvLtCc3NaEWsxbnq78jfvMgcU",
  "key1": "2fHWScSmSKTFjfqM3bJTMeh4Fd6VfgHVBAAWkReup3Cs1J4mkU6YfEta3QVLaM3rQQG4mSDLKvynE3LCrWNMUeXU",
  "key2": "qfyxQVsJCBiQ9LEREhmMnvtNdUjqm9ruKZZx5ne5tJYG7NZeQ2pZZFaeGRQxhF5UxQVZh4ih8TgtCYVqAStxUQg",
  "key3": "2Jv7c59mZd3556kY6sHGbZc8KnU8nm8FPRwFCr5GZLWNxAAk6Fz1qjyZ9SFfb9v8hHaB1Q7ahZ2NxwexQkG3pNaQ",
  "key4": "8ZHQzTzcyVNFZDPeoS5hdQXsZZmY4upxvNoFUYG2aERFegLLGn3qfakzA4VfsrE92yVNbyiqcJA6NY9cpKPZ91F",
  "key5": "4JKftZunrBHTdgv28pCNtwX5W69FtxfNLK1kqvCHdoDajgUxQ3MoTpfuBFLs5faXN4UrnpNTD3y7BNfXSye9v7xM",
  "key6": "457V8mdocjJgVTSGvenK71gidt4i4dciTHySyt1phQkJRdAb2K9EChEaDqrkTgBePcMBwTEYDy8K4bC5bkLt59E9",
  "key7": "2TWVBHAbLM9hArSHABLXFuJhJTDwiiwvzPqFhFPRqk9x3Ri6BCzmfDXjJWjvTTTxFjthE7HFvMfKZzxJtTfdvXY9",
  "key8": "4uqTDy71sU4cEDYG7fK6HRcKqU8LK7VK9S7utQELGGRsvC6j9thmJaoMvdhKhYLsr8sytA6LH8HXwJBhUW9kBCMi",
  "key9": "5JxEWdcHVTg8nBxLmKAhhT1mKF2zpwJHk8mAAiEsi6sw32nLgvb1zt9MTgvazGjtxQGNkxk7Gf49eBTtJEmnCBMJ",
  "key10": "4Gy3bFibBbGMivi6eKwgCMA9o7hHeCSVLUwMPjFwubFbkffHDf9K9dW8QfUDTvo413VBtYpLw8YMMnBjJXJXsRXQ",
  "key11": "1qBBZMsYj1ohBzUKjEFbgVKU5WVB63fnBMqggcwujbf2mGBRq6pu3XU8ypJBatgMRfrcjYrj6ePFHx7BpxJ5aFY",
  "key12": "5ZUEWYHKpJ1DBnuCbB1TzghoyrAyD6hFFHHX5FhhmDMX7JMKzXwurK7hWq11b8RxbPXs2jXCTqgD1813M4hPxdqU",
  "key13": "2jEnWKogpidnvAFPvfKCzJFyvncwoVoyAqinwt1JUnuNyC5ChdZkKM2xrTrLyAuBnST4v5JbMnzR3jkaEmi43NbW",
  "key14": "2L1J28ouHdZAxJ7PvbGffHLUH2yYBpu3z8s4AASyfL8BJxAq71f7c9484qA4TxdfMBkvrk5DAsRmbRtR2fiamfC6",
  "key15": "QLbiXKWLpgGxhhxUaKsoCzoQ2sAeCCxsBsj4gB4rLogyAVzfoYtzGns5ZDQekz5xomv22jTSiNMdm53BwFsPWnM",
  "key16": "5nMFSCZiZBgLNsyDE9Z3dGr5QT6SvDVmLAdmkmFtuFeKF5qeCNGWctDLcLcch36XQCmQnnAMaAsboKfaMqrUY14c",
  "key17": "4aeA9xf5kUjHq3XygCHzJVbiJbFtKeuiEpURHo3P6DBqgkp9uzHVGkKPbdjxcMZJ6cBDx2tLVeQBZEA49Lp6XsJR",
  "key18": "4AwMZ4ABXu5ctcQpGqzyyjbRBNDYmPpJPQMMVHaHpCsMFCLLoiFpSfy4GRid4hrdZpJagU5ouKt8ACQV9SKS8efN",
  "key19": "4Fx126HmtFbs9aq4G4yNwwGLLazzj7TNo4aUqbqB9qCQX9L1GWJPQg6r8k1LVb72xzXyEZeVG9BMAcJCCY7ULGHb",
  "key20": "2XBTiEW91uAZzQuNAfqaiEtKBBrJaWkWUrmJjEFCkPAt7FSLJm6JP6KU9qwQEuHYeFkZvVSMjRJZjRk4NxfCKupM",
  "key21": "5i5Bmnf1baokGTYpXx2qagFFE1tE2VQ9BL3Ut5B9qwcGJNRLGQcuZCFsHwgNXfAoryiSgktRhWFS3p757muo9eB9",
  "key22": "46k2yPDzoWATqphvt6W5gepNBNEJq39V8Yu24MKTnxDjYUmvLFaz8kqkkTk62aMKxtfu5YQ7mqqV4YrVa3Rfg5uZ",
  "key23": "4rWGRMtiRM2xYGcHbMjQ3bY1SVcdH9o8dCjuBDHupHA1UhLn6uhd7dydCFJK2LYJMtQcPD49MprxW2uswiufaFCR",
  "key24": "stQ1FufmHAncjNgRpTFYU2DY316YsLEvm3w6UFYPTWviJpygUVcmxxv8S87aP9jwuWJsuGJh1jVnSTRRJDyXQL2",
  "key25": "pvfbwuM7hN6zzy5ArxqXefN8t7kaoYL8F79uzZpjhPNQs6gQCrY4UJi5VQKttsZDwspDfxjjoaw9MoGbeazspEs",
  "key26": "33wjLGTq1XZ917QSk3aF5e7qfNeL2JWksP8W6bLUKMZ1XT4nXxBPw7FCtMmzw9Hh9U5aFpxc58Av3m1UhPDQZVHA",
  "key27": "3dW8Ry4FdojG8X2zhQKuAmy4UXECuhZsGFfaVHnExNDdMK8V6PiCbDhog1PDhRa21feFQiwJRx8tNgHyWcoAkViv",
  "key28": "2hg143u3z3YFntx9fftKsDz2hcqPTxmKABNdMy7tmfRqTAQDhX4XjGg2QTZGipiWi4827hNBZuZHp4NBoGWjFqyp",
  "key29": "NyyneE3tzZtESukob1CUAGp4DyhgXdPHNYLwVvc7PWUJWEwxzCxK34NqMeVeanx4r9fQwjmUZauHxzFP1tLt2nD",
  "key30": "AB3ZrDMbFYp5Q64FjxycFideUceqMrydbZnvNUrx5Y1pkFRsMD6kCea47Cm5uXTVWLAznPYapVKwaJr9W9J6ch1",
  "key31": "4AKLwyXqwUJ9CtGCT9wChmq6bt72jiYfc3D2xpXrf8GsY8v3gEJ5Yxs7cWb8x1Yinc5CWjhxDgLB8boRCUidLRZh",
  "key32": "3JnCfiV5q6gfjv6uzDTpTm4at9z6MTH95zux9S9LhEjvBDZNghUSRaNDDigWTC4SdFYp5GmWoWxz1w8fa7ntFXV7",
  "key33": "54rmfVoUNk8XEj7rFLy2Fa6c9B2yUfhpsuPP9bpw9qwSnJxqEYbPorK9GhLC7u4cYSTHVMjQ6ZY5HoZ947oQP1ie",
  "key34": "22wizAqHrzZysH7EDFgXe1nWG6cYq4ScXvwrBoPYWHpAbGb9gCRdsYwNWgDTUmyoAteysjSdePcavPt1rF6AuVrG",
  "key35": "61ZevmcM3TQ7pgcCMY1KQ5E5qKCsUNxVDnw5Mo2dYzMKP9rhchoY4wpUcSSC475gmrBaiE8CXjTvPBEQMcsJWMBe",
  "key36": "2eBdi7EFynWhW5R3izkZa9GR1XXmoJtdfMACkvm7qjxfFQU2qCkSypLFKTBjcw7CQeu2tHQrc9MudYtGTixqLtma",
  "key37": "4tNM2baYKZk4CT2qEaUN55sFyzVReLvjFS9X5X6j4BxSJPYG7BiznCDEUrp2Vsa7XDSqHxuqKPn6qEQia1LkGakm",
  "key38": "4PoZrxBgS75XmS9tQVtgYBJRhiNFFMCwXY9oJw2EfPr4zGKizYERxc6YAFhCWNz7mpyfU6yVtTGbcCr84CE5ZLcM",
  "key39": "Mi3zGTNvREoCTgUiTaDFkRrgMsMgmwA5qmVHHy2CKrBUsgMUFbi3FnWFx1KBDUfrddUjPYAep2U1cXHAdi6ypMr",
  "key40": "4N42nqVnQkeUDwM16b5QKmYoP4DfsWeKwp7Ht9n95hfGuCHB5u9Jj4mdSRE8zaAtfsRJMVTpRJou3psAU8Gtd32T",
  "key41": "2et5guTKJ7Wacm3BKXtWwdcfT2bxgyB7Sham8T4Q4VUrviRfeyrB9739HTkKP6CM2TF8fcD5LmZVVB2et73Ub5ts",
  "key42": "4MEiWpjstHY7YpHtcNFP96ABCd4a7rQXGRzgiMbCx17F9TD5x53egMvqKLmfD1C6nR6dL7DE9nhSocZS3AnkuvuP",
  "key43": "3ka3VfhRFsse5r9cPMZLBxC2XYhx3Mz9Edsq2JvftVJ9fUSDA6bT1E8rVucR7R4xVxfJaDE8JKkhQRyK3n6ohkm3",
  "key44": "4TqNPahBmuQEzzZ1A5uhPAzgr6FyqLb5LMrAh3Teu3agQznmo4ryYeSn193sUcKzoA2PjWXUBTnPf1c3UbwJWEWc",
  "key45": "2oBwDJHCN9un9xWzG5dfyRv7au1TbrPnj4C4VVXBDPzY5SosL6iYq6Kh8iutyDSU9egXT1J6aYNov3YL1PAW9f6g",
  "key46": "2sMozEhAnZquiNxLMQk3rpvskcMMdzZgxtsyzx4qkYi4TTAh8NaFzN6gbS49FFWaht3HjuRnordms9qYGSdjfYz5",
  "key47": "38coN3EEeDaE6cFR9Pc3ztPmnCp282xfW4cjLTT9fjLBFUdh6Nxoxix5wkp7uRwb6ko7Y9zTcKMd5rVNifdU8eVM",
  "key48": "vtgQqZm4Uicpo8wufKC4DZcibWAPcPDb4yi7aJYQqotJ9TSNy5Srv4g1m8JnykrtkMWdFDpnJ4WLZyVzCevBLJw"
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
