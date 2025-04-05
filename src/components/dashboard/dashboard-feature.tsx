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
    "62pL43eAwPNwHHKYHyPL3jfdTcEuyEN4zrWYEiH6Zk5EzCb8CirUHfF2j8sQVEMUwx4VM6jxJT2qvcmNGfSyDjh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PXzG3HCp7LRsK3i3HJ9KW9xo7Ahv9rVdHbHDSeRboMpAyMmVhxTQMuUhq1fAfXDv7noZd5QSp5H8SqKbUWStXM4",
  "key1": "UH8rqw2skwA3iQoW1KAFevYyVL1AsNP5j7Ypkjn4JZzvUpnJAs6Wjrhzcsc14WUTaHzaPCQy8CzPSNV1Dst7amv",
  "key2": "SDLNm3GQyKqc61WafuUm77L1PXMeWGn6uDd1ZLTHqUf1S4BY62Xs2vZehvMEAgxcUCRqDvhhgLgMcuu8sZyJwNG",
  "key3": "2G9Kj1kPUpAtZCrrQp4ZmhVdMSjDmdXCpFGLZUmzKdPsgX3Bvn9CWmTschzkr7A8TW9Eijy7qTZz9MF4qjJFHMzA",
  "key4": "4fGkd7thMBZLKfAgNHcxgTz5QPHXMwMRECTSa987fwchoGfRgbgDzbYXGNvCXEX6j58zVo1Q7kyyqVRYMohjGrjW",
  "key5": "31GeSGmZbmyrCCB4VJ8X2QTdRQZL5sxF7GnywXteYHWcLuFpHrxXsWqNuCixwhP2GvFu9YW9QASAArq1QfRZ4Ysw",
  "key6": "4yUxdKpKn6iE9FR1KtbuehUcbMckk4b5ss9bgpMju3UZxaASet5Vkg1MvXmFezjNWqsdiq4RdYd5yGe95Mqn9ojL",
  "key7": "5CjrqWS29DiDC8Tv14kb6mG47jz1Lhq7PPT86o13rbEuNRHm8rNTes6gbXy5JqjydoVbeXw5brRNXnGUbXsshuGC",
  "key8": "3roA8wFCpXtwgx6iWdwB8hbwwZZWNSpdyfeYK1Hn7KmZx6nYjet8EfiAVMthGXPUafRBmZg6gvdPTUVKWJBj7XhF",
  "key9": "22bD8e6Cq2UviZ5ZibymAX1FLE3gKKUkcNZNPh4ShwHwSqLjbmWnSubeyaFeJmp28Gts6pJRo6nsxZDw87JKCL6x",
  "key10": "3xzkex9rSnBUBDTvNAC3s5HgAyaHs3etY6YocS4LXE5YsZ6HPFunRx8HoonNmBeA42PAmjaYXJrdJAPGKHwFqQPs",
  "key11": "4sQ6cPkxUnH1FrVMKBTfWggSeYq2yBmq2U7bzonQnrvkLCB2BRSEfKQgveLeDRkXjc1CJUm4MwuV8SjQmgogPr6q",
  "key12": "KcAZ9hYNrfP9fkwkrwikgXaBqZ88rY6FTWBVMBeSzx44qbuPqTnuuoHBixR8CkHNgPVp44KBxCz4htEhwYUFALU",
  "key13": "Vanq68AFR5ejWSu2wXpMYMV1MbcJ5YFVJ4YSa4tBVvipcFW2NjFqGzBL2MY81gxTgwRfNPA5A3ZmzkRBJ3Vs6VL",
  "key14": "4dfpFPLuRwCjjZfp73ud76JQh3Ds4nB6UCwgJ3LaG9NGX6mhWGjj1UskxJciAgWm6w2c7qvP3Ad1YmEKHBNrM4MB",
  "key15": "8uaZxgkNjJZgRJnNNZVBaXnpr8dPcXqzLcCi7JTCmRw6ZdQNpm3q5i6M5yPWHxCnqH7f41tU27WkKjuZkKfvsJb",
  "key16": "3CtRWcTzRwKDA74rPDG7Ra2KmguxBFaMYs9qkrpJKJgNGNVTxq6DozDtdPeop9hL1MzSWyauTN5g4zjkBgt9iToi",
  "key17": "42QjBvjzC56arDESrvcSXGRqGwvdVYrjc9FWf3qdEFPj5TZp9t6STPmi1hhw8bCMACVWiDLc2CSTp4JucJaJdKSN",
  "key18": "4EWYDaLsKTf3jwjJ8MKNW9yKpf2DdTA9Nn95YcUAruJ8AF9ViJdj5caqsVmMLWi6Vgkr9f9Y8awjwWDUCz4wH6KD",
  "key19": "61i7vZsz9ju4dTrfY9HGMgdH4mFyR5cjokycE8NKMui6y5RuuZVzxPNs5xCpyexozQLVNvoh7vSVfyhnJrayxsdT",
  "key20": "2EbbWCKwZ9JNKeqnEVWJSBRJXV2X39F3dbHXTv4ixu7zBc8GG27mRZz1s6zwfzbNpSx7j3xCb4dyZdPiRK28zGTY",
  "key21": "2QCuxp4ztCoFT9W5ssGC3NMNR6ydCXSQAgqrgGcKX2U7wJqqdjyQx82rqNiMfxiVNtc1k8txuUm3rmNGpeve9wfW",
  "key22": "UoDxwkaytQkZGciyjeJ9TCx6wiZtB82U5nrQbFuCnEQbCYTbSrMs9SBxdW292hBFnzWe7b26cTyA6FwXpupSBqM",
  "key23": "UPrBgEnJkZAcgR36ty4XMyqsFz8rAKy9y5jn24kf4YCzsbNFpENPTHkiRtVkftDSWTvArum3fQ4zGwSGcx6N8cG",
  "key24": "3dX3tXnLBouJDqMFpiSQwR186gcZ8RKmYaRsEUKue6SJKWzWe1sQPTjewuHVcAaNDEyXZS9zMkxdV4XZLYBC1VUy",
  "key25": "5XTxt25XDBzLmszfUj6A3rW3cF66SCvW39Gu6U3mesHesV2n2eK87uQtccyKmMutTigHfN15EEKDurfeNjPK2ZwA",
  "key26": "21umVkZaQfLkV6AhtNvLAMsjN5E9c4FmXJKUZUwUmTsSpiLb3QY4seiSu1a4zhy4BBvYFzTmDiU9hjdU1F1TAQL4",
  "key27": "55a2FiEagQSG3iVzyzSx3dSj4ab1bkcUgeJEkATc4yuQEWj1GdixZh9D9CK8EsbMn27V1CGhd7zRnLKFSp5pLrAX",
  "key28": "63ZinXdu6S61YdbvwjXyiwQenMNvNygwZzmLe6NkY7ZoxaxrMKpW3HoHUiUgHR6LEr4TMp29ZMt5Tuem2hMiYwC8",
  "key29": "65rxgthGvWBjwTNftqt7zpa8gf3zGakDFW6S3HunPCDHzujKfEvVYohEQuvLMH68ojVijGr3csk5HrGZGXMVkgMM",
  "key30": "2fExuMXEDpPAiQMQd8PehxPi85eM5ipa4jDM84Wzv2dS9FcXhRtCSsPBM1gcJQndJqgFay2TdcgZd3UDr5LV7XBJ",
  "key31": "3U5VUP4obFdRwo2BTwvdUVcQ7BBEpv6ZQmCHbNCwnvrT6CtJ3RZu1zkwGPqHiygmoVjFMjBQ9RoH6xq6CLwtH4VD",
  "key32": "56vci4w5N3UbmtufW61LG7HKXDCb51dsXtZDMoUiDFScx4pfDewzViy4FgYtswwxnFL1LofZ3A6iUDHgMhEjDFg3"
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
