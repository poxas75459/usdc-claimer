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
    "4FnVQuPhGeTCj8bDrwEM5YQbwWxmDmYQ69thovFKRiuL2L9craLL4YjCMvnbgmFZ5h7YPMj5g7CqD8Vjxv6iEBHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YDABAZeFjmiwajmK1gvdwkjQfFByDCMAkvtxbtXAgB9pmzHMRGqEzy98U3xGNJzTdvUezEzE46SqWW2eGTkgYF",
  "key1": "5yMfFTEyDr6XSNzpbh2JQTanxeL9ZsaUfkQCBMvJZA3ay6tSjVCC2cCh61m26xvLGHGm8pAEUvn8SEXV2vhj8Qf1",
  "key2": "5MzeKBNv6XCvcUo9J9iEazLpwYZqRMfnmJUPDtaC3n9oKq4iojWuzVKMgUpjdqdc8ZsyTSTPQEuvBLSJESEfCAiU",
  "key3": "4vQj7xsPmoDwz8QWixFwcjSNEbrMajNBizwbANZraHSBuiB81im6En8J1qTCrReac5RQMC9GZCpGrM7EpzTgDpqo",
  "key4": "46RHp86Ndrn2GN9euJ61hxSrNEwtn9LLupXmXMwrgMNZszi6hxLTweEoxh9LT7xqSWkfQYnYRG5utNgJJn1as9sA",
  "key5": "3iD126gqMTfepnKXirsJLJaz2jQnye46SXJmyBvYtnL5Pa1JgiqvgJnMZGw3wjX5BWnv6M3F57NMPouUpeNzWw5d",
  "key6": "5xG5HeDqLpwMmbaCKLAZ2BaPZRgjDPUq8r8jUBvJfJSzL54S2cuTxMxLDfvSL7qk6psrfJYc6QKdDrgq3H7r1xx1",
  "key7": "g51bxLpN3NY168Rw3c23rmHPEQc2mHPHsmfCy1VXTZxFQDAdmDSHgrDNcfskMcYiymQoiip82sbE8QumHZfkLVU",
  "key8": "aogn8uv3FXG643BPgAryqGuWbFgVkwr7jpW68Ej9o85QYGpxhK6wLk2jtyxq1rPRZ47oqCZdXCBzDpT9rs6gzQF",
  "key9": "2FV45k4wKPRy9E3YFnmyTvLLfpkyf534fkNQohZh5ZM3FfQC6MZCFsPwXxtUoxRB7RFdbV9JSbbTGq8q2LD3GdYh",
  "key10": "4fDJSxvzsbbMcPWYHF3FJTvx4jM6N3EwDzugpH2iUiaWFSto8EGRnFPCh16QDpNG6GxAQQskVDxKdWCc9pvoLGYc",
  "key11": "65v7m3RpRiPPpvhehhA9H8MFs5bKMd4AczEtRdyaK4j81Wh8ZW7k7gb7J3cNcxmS3L2Bpp9frxAtYpvLnBpmJFS4",
  "key12": "2bHn2yKkNRF8Fx2riztUKj5U96Uhz57baz5k9HennEDpdcY9qoBdZVYQwSFRyxGVKFumgCx6iNr49XP6J7pFDRAv",
  "key13": "3vgz2GQFMWEtmYvmbszG2v7TCkp1EY42rDaW2DuvTTJEu77AL1fsMw5KfCtYVWrjZTu2x7ETtEJc9TDjWMuP1ji4",
  "key14": "4BPvJ1J9uTT1aTo6Xuvut2CUTN1Uhfc6DjS8xwcCrTUXzskEebcdaVz9SsZJpNcsrjUeJpZXKFoVp1VKoL8cZ6bt",
  "key15": "5wBqwBMtRN7ZLWby3Cik7SVhZNQ6VKuYxg5Ke1MdJfaUEZx2gb4NqWu3kdkwMTm41YPVLQJXw3ogjyN2NKjoKbeW",
  "key16": "4DULCRojuU1pdMJfyS5V6Jj2bXMQoYeHpskYHBrShbSJ6FZDU6uetN4Tm4EmHFSHWZ5oTcdKAVeLjw2Jd6F1VoUT",
  "key17": "33e6Ukfx23EBCUwj7EXJs6KRWaHCEL7csYG83VmTgkLk5WQZ6yY3a1Z9eKi6oYLMctdj5XHrLtcRu8Ui2EVWALts",
  "key18": "468GeNjJae6Fn54eccjGCyALGfcwjQ9VdPCxBMWZCBHJMshZ5c8AFXhRbew2Db4aTnLdC2zs57usEecfSWaKE3mH",
  "key19": "31BD3YUMdtgKfkSi6P2idugT188UafTVj4b59xh7Kp4zzKDSwsgWPfYJbVMRSs76HitXojR9jLrNZWkD71Cpo1r8",
  "key20": "39gZgKNq5BVY8gSyVpHed2ZsFCniiABjjXTqXJo3mJADGYY9jL2sZTkpyQn1PeSDJQygDtTTn33dGAMLFFt1JFHE",
  "key21": "2GDxxbTWtRqbM2RnDLDaiiGRNEJSqmaADan1oQiv6dEGvAKVLTWXonuem7abzzyTBbffHU6yRYC1iickruWeAHPF",
  "key22": "4v4fRnH3pFeQXgASK5RGHCZjPbtwQ8FndqUwPGVaKvPwFr2tLiWokxgRWgzzcoK5dzhqU3VTpvnXSQV4KAMMnQd3",
  "key23": "5pqzCdqYQh1rWhcYrg4gi2bxgCssqnStTz8rw1F9Qeopt4m7hhi3iJgWjtDgZmvHMwZY7ajn4egqT8hnuaq4a5mZ",
  "key24": "AnzxDbenev9SvYvY1nF8MAu7pZhvvycQiEagCS7xypZfWZvBMZrnHLUkjo89JnuNYgSkHzpkSmgBr5JRWR4f5Cz",
  "key25": "odbsWN4cdDt1bTHyQRnFtYifHMb7TT882SuyMg3zRPPGVN79apembJGRgvFVxtis6McdV78ebKT7cR5RbUJAfFq",
  "key26": "5j9m9YKzkaG4sKTfXBsZnxLpQF3AurjUp9bxYwnhQz8sX5CCPPDVn1P6WmczAQiEuDSCgiGvngDpcc1eZPjWSEmU",
  "key27": "2RQw6rvpijr4XCZWHfMyLvsqrVXLmtpWptVeyNfVVepDc2gNk2yut5bpFQDMiSrDzVss7sE2iCCwiNSsJRJH1wcw",
  "key28": "4JY2HQ31miDw4CdZ8cui4jBuFBkPPYsmyc7MHF2zbNnHUui9z1vVwCMw8LYYqGpcgNp1xt3ujk5jBstBi6EjwKZm",
  "key29": "44gPpwLMqtBgmHBnL9ww4umMKAVH1wzWMk6xSnukzd6g97XJy3kBHRG4nE2yzNEQNCKAdQvukejPtRz1n7a51NNY",
  "key30": "29u5DrpQ5siuZm2c8GD3Wn2w3HJ1zjVAhmKod79KgBqJGZeiqPsR976VTuq7Z13g9XoYHeUTNoU8nmtmcNoMLNry",
  "key31": "w3MrsDysyo4DykqKNyHcszTgsVb8rEPymooWHcZoHM3xE8NZogk5o36cLz6xKk7gnHXd6w9684vRk4p2sYGzv7B",
  "key32": "58JNwii8JK2icLZZdy8deKP726E4XRpPQksvWe83xg9fh2nkjDvDCmkJ2QRJwXRSuJhuXJu78uFeeGphcJzGWsUK",
  "key33": "4wKzHb7Avjf28FVSGbsmwZJ41FyT9dnt31CAraM1ApfhBJWaVzes3DFNsX8dw5Q6NSSxYFUG93H7yYQTD8aKeKJd",
  "key34": "2odwvt5q8eL8waDJfxh4BSsr4eMXr3zskhiCKTmjANqzoSwsVesZcxQJYhbSo1jk7kst8zmbgeb9ugMqtD9WPgjN",
  "key35": "2d8XV9DNSRLLnYxn9XMDo8xZGwRx4kno16mcfumhCZAqkgzcom4ZAYsruMhbhFb9w3amAGH2ZELoeQKnpbtPEQHT",
  "key36": "5TXKMMtUkpx3t6kEmEHuFgZZP5Su2u2n3PUx576rNKvJJU8Y6eHTNsHgW7VnehJHtxyMbhCbeNhYnvb7Mdrxh9zF",
  "key37": "2oM18wQ7YPde3JTWLfR7AHMfnSAccGMX5mQHxAz5zFAAwqB2VELmUGsUnw5ao1zExjkdJrXCr3VimtJYTwaMaV5Z",
  "key38": "4y4FADiGkPgTMzMnib44xZ8po6nL1Wpbb7vAjiTdYSKciD72krMXs6mokpemBaRiLX71NzWZxUTU4kkHus7kR4ep",
  "key39": "31fVArUwEBQsGXDp8qcYBLyk8C2wauAdXXRGhCxAeHYiaiqahRBLmx6ryLyVEWNkiMAkekRqTpUVgLdKzWYatc4U"
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
