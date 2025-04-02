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
    "665EPPFxjsBRpCKukKAffyhjmZnicbK4oxV6Si1cZon5dvYRJaL7KWYW7cKDeSMKTQrVrTd5XzNXbq7uB2X1bVKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3orrB5nMfzq4qNHk135kMfTrXe9xhdcE8TKDsNxR9Mrh4GETAmxeyJ41h7iP2rAHqzirWZDtCepY5X12pJuxDa",
  "key1": "5Y1sRJVDwFGvhGcAoEQdhRQxkxXnJcpfPebEVvdyKp4hHCW7Wf5Vx85aKJrsh6h7s3gqDCGhtXM3WjZ3v3s7aPSs",
  "key2": "eb5AP6ht8SSdCDtf4ACGhPNF16MsXNpupQ4ShG6JBYsC5Si66ZF7jeNLwqHL6h8cPzJvGURnxq4ebKf3By5DjEs",
  "key3": "5aSCtQxE2sDLU5p8Fc19xq9zzdGErE53bUo6c7smvajanov2GAiA7771Z9qWn1FTZFUoMK7Hu9JAwveHGYqCED11",
  "key4": "QpNog1UZVxJ5uM4qppyXTuU6pnAfEZvSSwZaWAhwnbYw9DWHNBaUiXWBekKqqWZ43f8T4VoKfn1Su5kNDossTJF",
  "key5": "3RLzbqFGjZn5diqXVBg2hAhHAbGRTWYydabiaHi5cwSmx4h75ULjoWrE9SUQB5cr5Y6sjE22PDMBVfaP9cJyRq9d",
  "key6": "2yVwaVZw1icpEwpqLFe4mLcpnCRzHpKmrEiDVFTdiqykpZsGZFEekBpBHeAb3T4FNyVXDCv7amHpLZdWK9Czd2UV",
  "key7": "46PfTXWuucqddiW9945YSPUMaDp9cxWcz8FYSsC8rk3TJbx7VRKJH4fGTeyPCGY4w1SUHCHojsgrvKfkQ7YPXSio",
  "key8": "4DvRzJgmaNNWd8cvqg5WKWr1khGJDThe6RYPnMxKe9kJhdtPNTCGe6NA5DiyZEPGdxWcEE7H4qUkYLQhzbv7ZFiT",
  "key9": "XRXauV3fWTPs9RG9mf6LgN1cFxjFaA5MgcLzkDrN1kmdYmqVKNyhN57gnyF2kJRiYsdQa2LK7RyjC7FNCjTKb5o",
  "key10": "4bMuFYAHimxzLAE9EYdkniSSiDrPWyFEhq78BiqX5mF36JT8Rdgp6Wd1hSwMRiyJnsNDusg5xYkthdf6VLe1ST7B",
  "key11": "5TzyfyTaZdTkTrJzFF3nRaLs9xcNv93xKTZNzY4cLPuiZUV5V2mSMRYUzgkUVbdfuj2q2UWBahZD2tCe7smScgRS",
  "key12": "tTBNxBqxcDEiSyHYemxx2D34cRZid36ouTC3oHgqhKNe42wjQq2N6do1Le6TWWwjpWf8NhvnvG6VVfPsS4HCUC1",
  "key13": "23TGtBVYb1S6mnxiSNEo8msn4aNtLANWnP7KiJqk4Kbqq3Xx1mGkmXkk8m2aRFsYdiqy5KcD4rtLMcCeyi8WTkow",
  "key14": "5Tu2Ji8mvGCT3GaV9J9GGJaPBm2hhtGeb23r8QWTiKvCyPXFAp3VsPKE1KafbgXuDhBgg6iVHrtzKcGNJeG18rgV",
  "key15": "4pZe4mheYNDRPGNDPEEE2p62kisw1zgTUUQ9Jdar55o8K2XhrU9igHMF3v2ZBkCLBFaBeogThjVZskLqy964hENp",
  "key16": "UuL1BiJdqbuQk8xLmX8ogfSqyZTpjzFtSdaitWYsmbMCydGp3sXP76MzAxSPvq7qGE7jgxqCVL5LmnafbjEyr3B",
  "key17": "CyfRPoZk4FXsRDiiYmi9AHX8c5yMdKmUugfYuuVXioVwjnsorKjq5LUS83iMYr2goA3AhCoeiMZqYYzsKiji6ob",
  "key18": "2G3iaiwhSEALtyHtwgb7aBcnTk8Uw1tN1UCP7UQRbn8UGpVsM2A8mep8BXD133YRtK51tqXDkTVAvuzB4qf21emk",
  "key19": "3eHLxAEBiSFWr7LspzAcvDLRea1mBMvvtr4ENBJf3Q2SapXCPhXhnT6kVaaPNFe9CPt6P6ew3aDjKzmTmjohvJPz",
  "key20": "wmhMuXzP6XHEF2mB7HWwrBbmr86xzDfnMjSiRtvmy6At9LLt741f43iqerrjYRjBAphesUwRX8mL7247mbLrvjS",
  "key21": "P48bWQhA9RrTB7vhiVEzSKjxu9Se8u9vM9GurPPiuko6arRwzSfVuFqGXkbcrfJpAMgN3MUnbgHkrN4VUGW5Ff8",
  "key22": "4oi4wPUoi5kwTD99N3EzhBVZGTpVhdb52ZR1HzhmJtHxbY18MWXx6mjC7DYecYjuieqrVqGLkcPVFvVizUaSwsZm",
  "key23": "5HeQYfQrknEXVxsEYDsgyutuYY1aa9FxmqYJaFF2SsVRsbTgn7yU5r28bFCeGZ9LcgHDkKfAjEJpzLvkCn9cbcEZ",
  "key24": "hZcTSz22EVjnrrdDw5o6ABGFXXy1Qjpa98ayrnNKUjkrEQUYBjMr1zC9euF2QwHCyi5K9mKrkL28ZzUyTmLqzom",
  "key25": "PGNQ17wfTsoUYDRCLMCvF9bhzQR9MbWEu23YVqMYqUdfYEWj7XCpPJkE2QxAkAZTKhPUYdFGoBfjkhSipzs58KR",
  "key26": "5mnL5AgxQuMp4eK5Sc57JfK8K1f7RigEatMWKdEMc7Q34Vqwuth4wSLw1FLP7m92jmLVTmKbBR9A4cM2FCDuL4Lz",
  "key27": "DVmTVFLADAxKP2qjGpaftBoYjdAuZZiRV8hwBJQcRVxVxiQvBQjfCug1FNkUjUHuirFRYE8s5Y7vp5m2BXKYuKK",
  "key28": "3qduVu1Bkv5jn49cyTRa88hviMPnJ5gj2hQBaWd4Y7ZL6mZYCp88LzT7cejHmcuza4D23j6L9mdAnnfWDBj6D7BV",
  "key29": "4bokLEdzr7TSvjGERKdXWNauk96BK6QLZ1xDsMpZgJhW15aQdn8Pw9XmZ3yYQkX2kFmPgrXQ3p5LghgsbaUXzoPK",
  "key30": "3YxxP1R4nzJdEZDTjojEQNYxQgAZSPUgL7DqXyS4sJaoy7mdH2L25xhdRZrCV28DHiVPt3Q5Y4HBpj3DqXbBQ8eU",
  "key31": "3RbnWL2UZney5oKwTEand624GVSY9HUKihUt2q452LvQiQJa3zP736ha1aqRXJ9v6rA14QEu7HA87f5Js51GUsuy",
  "key32": "JUuVz4YE6qSs676q1AdYP9FNBrsUNwJwWKz3hiYz2VMSeM6TSC8ngjB7NeW3DCaZszKpM44bmFv8po4ziqQwPzk",
  "key33": "2HCmyQPo98iKmyqmmgB2jBE3Ad4DWgAAH8FTdj6fu8S41cMPmQJpkzaLHM7rzJmiDPovhv5W5j81UdbtVPNJTdXT",
  "key34": "3CVAV5HwNcAJaiiEmzfe9QGuh1zhWuBw2bVRVzd6V9vVYs7Yb6XeKFCgg4axfp14YnQ36wEssG5BfPAxYSdU3gk1",
  "key35": "2deBbZxYyaJe6Hp37jgJXk25d955duX8JSC98nDsT2UNjAjooNK65WVE563aMiX3oXNDwxt7uHojW4gHxeuRs58A",
  "key36": "3B64gC5myRcXsyTYk7zpX4Ci7PKF1JuF7PsdE8fuGW2hMGWQdmZEepEstUzLBn1q7ddcvPJrmYDxvgmHz9wt1Sqb",
  "key37": "26Eh9XbNKtpN4QKpYd6DrQJLPHbetFNfFTkWTKuLy4oUkXn2xsK1j6qufM9Qstp79LhzNNBF2CzNuBmNPsymagYq",
  "key38": "5fW5FCbtSyXgHxWDqcQAceGzs6o8x6R71wNVT8RCikb1GKci6HU32HXA5tS2YEc6zSGxR7sMo6epGNSXizmVF9CW",
  "key39": "2RmuzySyPUgqZzjGVyKY4aUNEHyntGGEeoyHN8DeXRcnUYsWEnwsjjqUizVawymhRjWeUK1SkeXEvRzqgdJNXPXz",
  "key40": "AZTzBsRZDTU9jjy3TETZtAiwafan9HzXKMQ9S75F5LTvfkwpuf6NUUMQG7ECMp48XA1d4vDmKDS7YxwZFSv2kGG",
  "key41": "gfSErr8H9JZQ31i6rXjA9ujNZypFJzSBVhPsKDGvYmjdPGKgv94qW5QMk7pyjxdDhmvV88tLVRH25UPX1eD8opq",
  "key42": "3oVfKbiVErpZ2pP9xb8r4xBGJWfKUNXezzjKkcmPe3JGbJFR51mDjA74aDCPRkBsVJegPJud5hHt835Mt34oqmTA",
  "key43": "5d5Z5N6GRLwnNR2ghoHwYf5UEBciKDtnQzHSCBrhkH8p1X8qsDwnAGaiY3r9ofkqMZ8C41j98y7dBDcsD4yRVkV4",
  "key44": "2V5kBpZDopPpQQwCi2gYA1q9KtvYUvct5o9xudDnrbDzTRqvtg1zkqhLyYwRBuYAtKrd6aRoCQAmwbAdBPAnkaZm",
  "key45": "3P2PEGBCTBQRDx1DRnpAZz3fLAgST1ZY2hQvdCRWCrwZRw2rEXvd65W51jk6PvdKfVVWqsSRVZNkprCXeLJQV6zv",
  "key46": "nREXdm2pe832vRqAZiexkRbdQqTLGGzj6P91jVyBS6S4p93RczMwTh8MdiaWsB2gChws3UuVMoYBvrXo8cskVv7"
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
