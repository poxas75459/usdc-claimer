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
    "3NcK1r28vr4ReRtCXKnxU4UhgVqvaDcymm8eCcLkERtpc97rW4dWctE3YhwTWRN2jFPib83334MZymSUJzAHD2av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhQuqBBWgU7zx7BHrGi8YjQf7DdX2RsLeAzEeXPTx5Mqny6xRhiaVgttZE7tBi2oehyAmjVgaLjAjmH7nQZ3Nd8",
  "key1": "2B6FwoZcFgWL4Zwm2yhrKWaXZkY6E5m2iKZnckh5ENv791w6vEgw6VsZf3YgqYzNPQWy9mJ3jRGkNxAkpBRSphk6",
  "key2": "2DFKPE12e95bxx2M1nn7ktSwE6KAa6u7bRJaRCtjFSTL8P9PhsUgmZJ2EUBAfcvbK1H2xeHmipTU6XhF113eA8af",
  "key3": "4PSn2vFW5TJ97KLTtmXWpVM5eFkEYmYhDDmttXpZNFsY76eLpyLH4mrCg4eSdDxUEUWeSchmyGnKUQQT3z5vvdNf",
  "key4": "2QEHkZtJ23k1UYLe2Dos8FnoPSXFwJGEFMLJ5BQAYvForDh2daX7p9ETX1X3KppfwxpZA7fTk1k9mEp3vzUqGAcV",
  "key5": "35fj7nP3c89qBihdzNktx9UdKTyCovb8zwBVCzMquMUWYBPk19217YMPZrvPAi7wL7XPEdYq6vvZFyUaMU1Mezec",
  "key6": "4MydYe4Lh6UjQJTfRBNUGPxAf6vtwmbGxZmUPv1iypXXuXLZzbDmcuek3C9wf17YemTFLbiY5TjJwHgUVRbJPCto",
  "key7": "3QxiEA1TyWQcMm2pUFVDwsc7yNy3ijTiacshtbvzvvVVbsoGg6dpH5H46MFw5K1WcdH3u1GNaSUnakG22boZNddm",
  "key8": "RkLZcbbJyatpiXYUZFzGqAUQJHHQMxCBY6Ry4pdQXjr7Du4AmBy9TaZy32p5tfKyUpf2Y5RhQ5eo8Bt1ppWUDsB",
  "key9": "2qtBzQeSVVok9gHvGxMuWYA5TBtCjNbYieMPEvB4mfrneBhveGXEtue1n3oongVmtJdmrJe8LwhpzYNwuud1YGGS",
  "key10": "X3a4mJVWrT4Utby7pxM3vWH3fgXGrnJyjY9gUxeQDCJiJfqf3V5YUaj7XTgzZqP55ECa2RrtKD6kvhCQ9rxnsNW",
  "key11": "5RXEEkwj5mfgU7dayhAgWxqVHo8Vg8fPisJTmuWotRaSkBvQ9CfqkJSvp6yQgQ3VTkn4GsTzsm1eDoB7tivnkXCL",
  "key12": "52GGEJej25BcHs9mq92UD72ejsjHvqSAVsFSZpuJa9WaL7KiX7qS8WnMzwBjEHBbKHLiniyorgP9KWrPojQx2Uam",
  "key13": "2pXtfRcw7s4n87iGbfWhYArdDqXvJDHrFgcp7qrhNiqjk1F625a4PovQfPxFSgsiCnn1aPq8JP9UqpjeYcvxrh9K",
  "key14": "4zN5dL2cr47vHY87VF3xrbGCSjbcRL9aqwUHNG4eSdMhdSVjHz8Q8CpxJWKMjSAqEeEdCvqrjNVWa3egvvVkFH99",
  "key15": "jFEh6bMGKq2r9HvgXU77GkiqM6QQrv4WMm3QxM3LBkadVjWut9Pc4Q79JQysRLVtMEpRKWTq675aGL86aCKLgPY",
  "key16": "YfpEYWxSNty2LzjXctM4C4BcfYNFSwJCD2iVg9XjmHSaxnqekRcGk6rocdHgJqQ2gTK2yem6JCtEqK6jqYhs6nU",
  "key17": "2DRBYkDGzBRLUikEtsankMDavJyanTxZHPtY5xXCnKhK2878n7UGc6SdybppBcZQoLYbqpvHkgUn1rGcvsh4KWCi",
  "key18": "xWVmpbnxebs2tVzGsJm61B7rFPNHb7rrNuNCLchA6X6Hmnfe83SYFjP49XiTckLWWXqRCws22BUW4EZtrviLp8n",
  "key19": "41NmRdRAR4t7HMoMxLfNSbHwBcLeLvQMKgszTs9WauZ483yfBLE9ie7dP96sNZ1RcuAnckCUSdR6WHUF7qGf3xAy",
  "key20": "SAvziJthpNiK58S4aB5B7w4ruP8NBKYu1EJgRHhAjbWb2seQy4enDgmWCJU1wtJog1QT15Gr7pNsW8M64XoHSpq",
  "key21": "Tf3b2ezTj3KwRieeQbfZHBxt3mrKoQztF3TLWQ82fteWNHVrcwkycoupGx1WSx4FJbfMGpiLptPBFhggsHVLNe7",
  "key22": "2anEwihUMdtkCJuh2nvu2og92MYxmroNq82P1Aasp1epS2TL8kDiwyw8nJMdTycAGfJnxTfqiqTvD4JqKfzyefFh",
  "key23": "5shV2ZbwkexmcU384cSSk1RpPQnT9hM1HHJkBVcTi14wdL5L86oAcFC6BjSdVSJnc5guiRTr9LZd82YpTN321E5W",
  "key24": "o89PNjPibzJHGSRAL7soS6FtX68qYW4sVQMmzQCHybNRo48Ca7ycY4HmBM7MinfxDSui2oBe6hTjQQNeJHb9Frw",
  "key25": "2o4mRUPt1N8Y7itFRszinWJEQu776B8GvEFzwxMnuq5WdfgweUExt6UcvZpEq3MYkH6HhQmUye8ot9W95XrjgWXp",
  "key26": "4vvSxCnCLh1d1kdeKDvtzyeFcDL1bzT4Q8gcNr6Pup7FpC466bsJZYiKo7Z89gYxRVBr4fVS8sKkkQLonwfb518w",
  "key27": "3VmHp2RQHJMswLLdAhvqstDAZoVs46Yp5tDQ2JwdSHhBgKR2gU6u9YvEV7UEk7SWaYootXuRuGxhqboFdQRdHc6Y",
  "key28": "4uoWUebhASvQjdyQ7uXECkWJpmdLVUjNhvmXj8gKSqNcDfVAsjdZ1fo2EddrqQjJ36PmzTABvYaHcib8A8A7zsWG",
  "key29": "3HLQVjox7v6EnbbmWsWtTxwLY1HvUWZJwv19CXjwd2zFwr9quA2s3vEF2fWRFZ1WKDbTvZMNn27ZcCn2dJSmfhjk"
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
