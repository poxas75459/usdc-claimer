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
    "4zNuvDgmUCXv5sKW4bNvqErsuZWp12cUypQxm8UdoFve1PXEcq1rLFt6L7inogZ6MbC5x3u72PatPGuYiTZgny34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8tdxSDLpbPbNtfQjm92cKp8xN3XgNxikydH7h7fnSzwyVAW8PxXbZqaZa12gTL93Xgpx6WnABs3pfxsWoYgt4v",
  "key1": "4AbtJAqp5ReewAttaQ9Wemoar7dDxqk3D5rd5pj6v8YfdDPHrg2YzL7Zy9cMbQsLxA3Qi4unrx3PXvNcbqqVLero",
  "key2": "4mcWcZZn4Xqd2MZABBB48JnUWy1wgsKPZifejRiTUYqVtM1LogU37ha31kXMsTztkcYwk1wLsXqD43hdoRfoGehS",
  "key3": "3PcvV3E4d72boKuHjcqugmBshi9fxfLv2Yd4e2goGn9wT1YJwwdamLfhLBbiyK91De7xqHHmfygs7wKKD1Hf2mQw",
  "key4": "3Zq12u1BUaW7b1BvQtCuFJxwCKCr4MeHoVTg5MZC2RjbvgvJQERmVUJWKxbKmEuWvLaFFbm86RLRyPBddjYcdd8p",
  "key5": "3z1fUPKPJuy1pD22ZVBCz7oV79P9G6cBptcTktWN5J88bE7bZATmLHZWXX2dkTJjjYguEsv5L8YLtLnsEwJR6KRv",
  "key6": "NxzJq58NyE3Df8hBN19fCHhrFJ5kpFpzaBtVcfBdZno6xvheZn95vYq195tuoLLLDaD9aLDZVjXyvTkEgffFgbL",
  "key7": "sF9Sa6UAUpYHZQQVYzuyWvgbkrRTpMwkLn4zBGpeUprpwsPpNF2fZzLUguCutM2oSGfUysoUvnAM5TonBsgtNkR",
  "key8": "22g3rGPV1HBmww8LE3XBaxqCAXURzpzYiZFF14fAxF8tfDaWZkCR3yXZ8MfsU9oUzgSZXaPqMj9SVRdYmxbSbZxh",
  "key9": "kCBSTxdHvioRRF2tt6n8iKSxj4cjYFaDeFiyGiDMVeYZ1XQ13m4ayPErW2T2JZbPFoooEaXGrTWQ4ufqvAEjYxr",
  "key10": "2o8mcw7eLDkP63xUnJ2DQyiXqXycf5CnAa9w5bV2PTD5q2d9NX12yhvpL4bqEppeZAEaaPravZdQFnQ8K613eJjT",
  "key11": "4W5qY6zUhYmzBnVShn98cFr9wqyFFFtVzHZNNWvJcCkcZMyrL1TUW2WwDZKeSis1JSdRjRH1BE47YyCVj4v6aHK3",
  "key12": "2EUkS7eHaNDgXFHUA3xbvJcJvWQyDY6EpUTs4qRYiNW4cjJcdQBL3M7kX4X4ZEndxQoHJYPYZh3DpFZ9MVjKXEc3",
  "key13": "54nLFRzqFeBSjxnAhxmW5yCPqVNe5TTtx72yofKTtjGx3u33Pw92wNyT4smTRa22wFEwAjiPaGKb1yrdncsQnPNG",
  "key14": "3h85J3KwjLi1kMAoC4XRAEiXKG1fSEUMAFQxS2st1dp4vuNhUtcJiEVfCFXvFU1s6rfGpYt29Fpfa1iDMfxuaPmd",
  "key15": "2xFZSGygWa8pQUTPdtgjwfX3cXo3ytmFuTNbCfXkGnhYJ4HtGdGBxDgiXsbFRPUSUcHAh4SKJB5hoxXSY92BXnvt",
  "key16": "kyCoxi9vUB7XtZug78a8tR45RFMyaZFtPk8HbNWwLpMHYMhnAPx9sRkSQsZ2UiKVq4CX3tietRiCCHw3uMNgD8w",
  "key17": "4hr3BkCeViyndR85brGfgA5DbVV7AMn2EPQJoZ2sr92HgjSVDdtXwJBjrs8T6MNgjyKDs683X52qi6zLDbm7GwqZ",
  "key18": "3Kz15YNZ8o2E5Yios4KrdgaXT91kYtEemSgL3fu2MvFtwFcKabJConrehsXw1cWXun7iuzPve6qch8i1x9UkjnAS",
  "key19": "37zsZnQNb6AMSV6PR8JCEHLYEARqDFhQqxLbv6Ya9eAwR1Xx1NNA1Qsc1aiR87rmg83hydy8YZdZKewxih8sBPLF",
  "key20": "2k3H9Zosx4PzwUN29R6Fy4CWp4dEjGVQCnGeW8zJ4sbjF9m811YaJS3NpDqrPy3gQ8Lwp7U3VPVADMiZ6f3BBGr1",
  "key21": "b1fyoQ6XPEwdUkNSf6hzPVfxHR58Kdjyt7bvWcQ5CbLtK4E15k9d7FhgejSdGsV5y62Akcm7PZ8jCgLy9xyqQrD",
  "key22": "4sBwQzpL2hwzG68NKqoHTARFmhhyEfnZNd9EUtZLJNjBhtcveYpgxKtdNZiZJ3BGX74BR3EbFDFAayXFRVYfoK5w",
  "key23": "ZUdX4vKYbGqVo5VKzFtJ9LfpikwpUoWDxewkpMgUNKA9jTMG3fFHugZ2xJ4viC1T3iK66sDKnAwxcpUwv7VoQxZ",
  "key24": "2rDDJ2nnY95M88pSbg8LdakQHvphQ3m7tTfzUhz4htytJ6uTa15B4TfuM7qsC6aeih5xTLTssJXHDENtBEHiVrKM",
  "key25": "4S49LtkiAzQZYdURZqmGazGAziVKHhfn3j5v3DMFaDhrXU3JQaj3SqwdYj5w5ZD3XbxQUyQNmpyVGZNYXJGfwHgy",
  "key26": "2RkdvuksCDB9qFx56XgaE14KoAkhD4sHjHYACvdb5ZaRR5LsmRQbGaPXPUVTwZ1mEGkQ5yw8rAgu2fwfkZJdTPYJ",
  "key27": "3HrNq2gsARUSfxk2uYCYebrUxHBdaLH82S7nfWBhnnLp7FTbDjJ5rXSywSezJJvYcGcedZQHmx6HNkouW3GrBLBK",
  "key28": "5pefyVXoguVsMcvX1PjYy5XnKt5Mx8apEiA57PUZE66qw9gRcaTbEAd27YoZqm3aH3vrWW5ZfmZ6CPHuvuoTBb7C",
  "key29": "bv4AKxM7zb7N5uSo8pbt9n6vj2bYCgpNvdS3VX87Ufy8LwTL8sTRJgoJM6w4CJtbatCKFJiYX2gNFVaJq1vau4c"
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
