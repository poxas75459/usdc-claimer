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
    "4Nki5LmygAQ1PdDYzgVTwxGDCj3GcmWKVkLuz6dYY5AcemPtY1NkrkxdLSKhr2PR1vLWmHqxJnRibSAXaa62CRwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqsFWnjusVPbzA4cf4rkjSNSKWorKp8nfXNgkknf4k44yqyAEiaNmguSxUaHDqJ83xWskQzP41LX6B7UbSp6oeM",
  "key1": "52BoMRH6R7GqbQPjkHCmvaLd7StTTqHcMtzcYsEPYDkVLUJCg9mGR3Ry7cemUEy2RVxsMrs2cKRGpxX9JPXwJise",
  "key2": "5is433Q9DBaGaUXV5kAHdgdxsMuv2muoU9muXKfj4RtKFxKBATWGdXkzrCAnkCzn3N7S7tx4mz64CnAq9hXT9NiS",
  "key3": "4abGdctp85VMHamv8maqzSRNmigAfJ7AZ4K7aoaLMoy9wEbdfChN9mLXvpHtcDejTAaL2yDnbRnkaoxQPRWbhENp",
  "key4": "3HRydd6RYQFaHQpfLhoTzyA8anziyE7ppxmqTfQE381i1iFy48DFDM94TsBQgUrQnjh3Zu2xaxRWbj6NEtstZqgx",
  "key5": "4uztXJERFyKCEpZnwZiAK1239PHqVdj7jsJcadaXCB94t8s8332sN7irGJMbSwueUw3VFc3wbV87zv7masoNKQfc",
  "key6": "4vB8A8QxxkrwRB81XwmZkjhT4pGfyjAeSdJoiDTo1qxnCbeVmPkMDkk9MrsBDdGXt8Q5rGu9mjnYQwMZYeqz7ef9",
  "key7": "55bcscshTAYYhj5qfrdpo56AB3cJPZ3VXHgRbBHzZAb7cY99brND8cSgpmfvJ1YrEZKZy2u5LtxNuhaAFPWDiepX",
  "key8": "QV7fZrcENbyP2g7jNZX6TvzaBvpffwspmR3FcNTHjv5ZWzjhVwjBbDtFQqkkntj2RpwBSriGo32GQ2nqsytUoBk",
  "key9": "43j1jrAi7qgTqoxPdENM4nEByU8hWX1tKpd44urjuH14zFi2b9FdWEjrrMbbA1b53xCsd7g44G174t5HKeC3SXb1",
  "key10": "3fs8uxwPDgPd54DtgHXi12PtNLRXDkRXEfAm1RqiuNGLeE12d1ZqE412pmiCBQymNtY83kwg1xEskB7F5YXjKMCc",
  "key11": "5runbQrZRqMkoU1isnD8gbQVuErB2xxn95Zi988V3Wk43y2ckaPfDAFvTu37MRyV5YYaRV3ZpyLyniV1rAXYR7Xv",
  "key12": "45U6UgmFFJjGqmNX2SWHUoNjB8bHjUeRcXjeGjzQdHQjx8cDNvurouTmJyAV72grsyf8XxcLScvXKHfCW6MWudPB",
  "key13": "3vxF44fmkij2iwQ3QxoPS6MdoTddmhccVsnYovEMoX4gFGccoissPmb4Ru2xWVnCtppWjxUntaCLCqBAN1iBEF1T",
  "key14": "2Pw3ayGVvSUn7BLV5484Mf1ZEBkJyFZ5T5KCuAHh6hivn8W6FBXc5Nk4Yb35gGsKdijtp9e2nZznsPa2umNYsYgR",
  "key15": "32UKWYW4Qu3n6SZLMhjcLnpaotpiXK9abBsjQ6JAcUtrtcZA6gEX98EGNZQnTpT5UqAXd48gFa4er8EPhbx3EuRd",
  "key16": "4UCfPZX47qeQwGKYj2PjMSM7W9Y4mcHu3bBrSDwhvboTragjgwrbokt3tFkjCGPRUPmCsM2EXMTx3CRP6pzJM41B",
  "key17": "543bhjAK2xzxEi2pGYUpBXig2YRSKzwrLtxnQczjb8EvPJ8Pd7i2g9Cdg4EsNFp5bbJqBcbckYP4Qa5XyFVp8HVE",
  "key18": "4SRwu4Ru5v5RH4TFNB51UnUSJR8xyK5NyPezqLfLZYunBQJAoojgqYtDtmXFcVjpDFr4crh8kaim7kWR8iWDixSY",
  "key19": "5GoKsJ7jDhVvTYgYmqbows5k3CSNdHNTV7NvXgXvVXVd6S7yNhNQPZXDjvFCGJ2XhGRhwr2pL4cY4yS7VCB41bh9",
  "key20": "2eeqRQrmL4tgmPgMhQQhx9t7LmwywKWnVWKbLXaWuoY6LaVwX1squWUtcWewxez1r3HEZtEvyHocsPbUqmJkhfXS",
  "key21": "7g3cW2L3UWwbkxYAXCxTX1X5cWLFKtMLSUgDDwiTE4NWddsUim31oS62k1SQjjBKQKYpRZc53WaRaTRtHmd2a1M",
  "key22": "4MkGgMLSaBinXRQCBVn15gLLG6CEkSnJUnwyDTZd7Wbvv1z2yrno9vYRjgdvgXPfXYryXaLnd8g1XK6DwtnAMDi3",
  "key23": "54kgiPN226cFrQoxV29JbCtWiAiDRjNq3pDk3irygaSXh6F9N7vA4y22Z2db6AwvAaxZX6MRQe1LXkkp4VuLNmyV",
  "key24": "25jfshdPXZcHrRR4DpgqWqgfPq5VEKgnjAmzrEqoRQfyaU7euu8msqn3syoye9imxCdXzCLCUfrTegpp2fvJRRMH",
  "key25": "wsznztcXkTpLVPEjLc4xkcEExqLmwRzb9hHNEHFfg1KoNLnisK6UKJMLh6d6VCVUbxGHuXTDfUvjVun1EzfULzR",
  "key26": "2a8ha8bBN6LG2cRU82qLTBQ3GSbEk77mHVDT1FjfZDHwAcj4kXyXR4cvD2vthcdDZ8jbHVowK2qhrfEWpiUqEMkB",
  "key27": "rLJTttqqGfNWJKUaNYaG49wzSyWkJXF2ZJontFkf8Kb6uxycy9hGEavoqUrz5qfpcpE71qz4P2jxqFstbMbns1Q",
  "key28": "54TYLmK36oFAZsEUzUrq1qnic6XZTaDTCX5egsXwUxYa8pcaWVcfe3Lnxykd66EeZMPbk7GSFWoo3GDopj2fiRA8"
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
