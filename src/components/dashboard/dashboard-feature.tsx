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
    "4gYduQhJLRyKX2mrQ5d4JYJP1CeFyd7WUqHeqwmCKhzHnYzbjczC9QhcWv937S28Q65t38wpntnYeZ3TzPGPZGvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i5DRXkP4ex1fSQMqUWTxYodQMQG82QcqCrD7wfh5PkYcXshXL79NpKPdWZaWjG3njUGBpaSkigUDmzXmjmiXgEw",
  "key1": "5oqBVa9N642yX9KWsDpGdGW1TFBHmwgmm1t42mSS9aksXNMba4rT7iGkjZoRahYmeYRPiu8Zkk72ndwq1wfrosTR",
  "key2": "48JoPzkhbuxyKFGBAb3hKRQiopXnpqsx1gZt3EAo3wgMsyFYJiejx1SqpQdzwjscPifHcnaXQFg32X22rYXWxdpV",
  "key3": "H2kAQR3dwUGjXZ3dBUgUiMGrLTgLHaK5PiDvzN5XaL6jyUTHAhwZSMrPCUeHRpGYHgYQDER8PKx9f4cSW3qu9uS",
  "key4": "287rx9sRqtkzjz5Zb4xcjpy7UqWPrSqjdZZ4gYzgscGgm1nhzaU5LgLpbDYjrJLkyPeX61FDsefVS8inSmsQ6cGy",
  "key5": "49pTAsPCRhtWC4RymHsc634gTxS3zu9Jb4vF2w84cyvr7eb2gHPbYGDEQJuAsSFwPX12HKbmyTq76ugSA1WNjbce",
  "key6": "4g1WCnboeGuwKm8DJurJTfWJz79AfvXnJBAoGZEc8y2HShx7g8JZQfQNRN1AbPTs5AkTKYmDPWWMwPDMM5ecVtRT",
  "key7": "26kjUGKrDWDFRNy3WaeTFARujSS5nVqNuQLM7cLc9ZGvyDXXna2y677j1pbkTRwUGw7qzLabhccm1Ah25PJRKnik",
  "key8": "F5pZxgMfvY2rBT5zqJ7qKTq8gHvFC5kXGgY7T4dJFTKNqMEDwZ7pcZ6Dup7roGVQyt3P45qbv21tWa7HVtykmEk",
  "key9": "QFpAis1AR628mdK6iMqA5XyMEUVtCqSvj5PX8L494LDsMmmX5Jm5rPSNGXJbXpZoP1JaBUCec8optNr3RAC1rBq",
  "key10": "yCF5nRbENQPavud2rdREZxBkZAPMNbYtDDch6wcrUVvxQBTvt3ZqHTs9eW7tzyUnhLLWfdNvbFnYJTHSJPofky2",
  "key11": "TJcp6XdjX4hPDeJxrrSS8eN4Aa457Sk9mQYm83BwhWTDMGXrfFBFchEY6aYQnivUEascv4fqANPYsPB9H6jbhB4",
  "key12": "2F4o6ghgJ2mwWsBfQrAJBMCW5AF1uS3tFvsrTV9wMkYYebewotmguT2QEzyP3aW7kJfioWZEzqxL5TpEWkK9AuQb",
  "key13": "LQtpY9PiruXB8uFtNTuHFzUm26HHGQrAYNYPPi2bL1KdgJfdXggytFjFFc6f5J6YPZWCJa57sdqZucqYa3Rnnif",
  "key14": "2Z69ECESA116GcZRZD5EMCJffZp4J3cZGJCmi37mzo7VzSYM3uEeZaffmLR57NHqjW998arWi2ECcKiieLyUXiFo",
  "key15": "36Xcu62KjifMKfHbxLA8Wc2dpzNzcP4ABwHME6WuYmsCtYFhh77Wv5zv34KiayrunM8r944h9ZQXxycsET8vFceZ",
  "key16": "5tnTirZV7YwVDyKMGDoWKihvPDEr4TK1R8zdQkWx2X7KbTmemxWGPfaCNk1LPSZdw5TZB9GLpkeoqdv3K5cbVSHD",
  "key17": "Rff1B6tskjcbSrDT25pyvFyswLgmMvcBoYWffkSM8PhNVgQzTbcZMP6hKNtYRgpDu3ZHxDWf9R9aGM9ZWxkaL5F",
  "key18": "33YNajY1vt1fLpEmEu41iCwDvFNAJsv7GNEa6PNKcBd65wXJsyTvEv3AxCdYv9wFvFvgMyG25WMS47ncx4W2oGyC",
  "key19": "33Ur1pJzKQTUTLiAYqBE6kf6yBVCGDzHREHSwjwDF7rLA6ehtmmNrjsLP5QecBJqBWut99Xc8FLNZ7oADBD4rYCL",
  "key20": "65szH6F7X4uX1FTabNet8ExEvB7YweeWtdk73fCaKfoJKcdZAx8Nm6HfpMLnY3TEZVDHduTKDDnzSfTt8Rs14qDP",
  "key21": "51js5oDC1vFugqYHZ3js7uV5ZDTzCt42iSAdo8Kfmzjqm7APvyn7jcm2E8bqeJeriaCRrfem7wra5jJ2n2dbjThy",
  "key22": "4Wob4uqNP2pdUreriZ8jux3eEphAVkNuuRf2Y1PUxYaH8z87EnwWn57x2D4nMirxL6m2DZAqT9iA3pagofepXBpB",
  "key23": "3u4GsqmpaBBAedti6hYokLxJQEufH4Npc5W5Z7R4VEdjuFRkT6eNWHgTSoKNzCshwCr2Evyam4vUpHxNHqAcsd8K",
  "key24": "5BqFDjn5r2a32aFL8p5f5QgfCrZv8sf6NqzQLABXjnDL8bVY1PAcYdfVsrJYwTPcW9CAXkiV4FGhpuDVE2FyN3Ui",
  "key25": "7JTWy4ffoykjNAnYLQ92AX49qwAjtk8rH8Dzk1Fe17KLJkoWCe3zbDBp4Yp3FJdqXM2JLtjvtqU64Thj3RBTnDU",
  "key26": "4Rr5i7ko5zTHYopYHc7YjRD2wPWBHbPNPYjPmpd6XskDCui5XUWzTmRNzeQ6d6yTbVZHyGA86bQxpbKjqjvYJiy6",
  "key27": "367WcHMUe8XVFH3sX2st3ihW4fWD4dPn4nsNVpYc62DkHvfpcTCLS4SSCJJp9d1ZZy1n7BLTTFBCTuNrVcCCpL29",
  "key28": "5jidpWvZse3tgVmFSpvftXmre5QvUWVijeRwzxMwosS9FGkBSK5qHcbBKWCrFfbfbGQpnFGnS33qMBQDSK3bJCUn",
  "key29": "3fC54x9mWoYky6oF1KmHJaBGRZi7eeank5AStgYpverFf6BtKWeiS26Jp7TBZ6jXzRd4WwcgH1MqyumjE2yKvA8p",
  "key30": "4ekQguqkeuxHiL1GCkuShpfRv3WxRpnodnV2WGExXTUen9FW4na7GZLXsenDT1U7sBzGEEaHXafdoMtnPo9HknJu",
  "key31": "3Fe3sgkmKo26YdGe4SLUZL7uQ2wJQAX6EidBCti7zJvL7NfuCgSb6SpcSCD3hLWz6F9Krs5rPSUctb5fhPdvXQLT",
  "key32": "5ti4jkN6Z6uzUuRwEvQ8jKLzjQ18zsKaVm5Jd6f8hXCZi5MnNaQSRvMFJjKXoPcxcn9iQzRccBEDHdBstUc1r5vF",
  "key33": "4hxPPMyYRGdcegCmmv8gYUBE84mHMKti6BAHdAMRnoHjCBZtsBj4dSkMTthBBi6uv7HeRRJZCbY8uv3ujAWCnTs4",
  "key34": "i3ub38zWGqBddNjb4onsVskpxgi1N2GaUtHKFQkxKKqMNVSvbJSFLM84fzyLSpxygM11hcChLecJ4VLbZi1cXWK"
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
