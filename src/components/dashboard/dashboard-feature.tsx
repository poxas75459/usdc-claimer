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
    "5NNrTmWsByoxArbTHNyNrPX46fmafiNLqQxGffhkLLeUW4zasdY9cB3ByMir9q4ZWdi21TTciMAwrvvuNrVLhybu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVXa7RtswQSdUtVZjVuMqiSgReCciy35TftM5eYFZS94dpTkdAJsYk5RyH6xmzXPSf5HTPZeLnHhhTbhXkuaBiC",
  "key1": "585qVJiv2VvZzuHNp7VsFXbfnJDcSRReupN12UdXKrgUx5HiUPFRPLcxfPPGbFZ6gsLRNg3Tw5BSHkowDbA87bWn",
  "key2": "5DYKHNA69yUsdXhZRfXoymvX7yH8cbTVCfaffh8koL5ZZe8iEnqoNP2PZrV2w7ofBSWrMvXkYQEzMeqYWjUU3Bsy",
  "key3": "2TEXifFC68REQfHJ2nzBwdFHJjm5MQfzX3JLY3zKVijy5o2ak41X7oztKewRQ2KpRxEsUSGkrJWY4fzknPDJSJHU",
  "key4": "4HWwZmmrKeib68XKSdG5ib2WCMMgmWJUxe9kH6aB8eRab8Cm2p6d5noKosbPBM3YSn5iXvyxRGAa9TeYmAdzGccT",
  "key5": "2wxgofyR38yhrRx62FPgM2Lpr2ow2S9wy7notSqdVa2VgyBzY6YNRf36LRpgmZgYxGZ1jXBzJrJ6a43W5jynDx9w",
  "key6": "4K7prJyCWcAM5TSMVLhQBgJtDLjPmB3aTyX1QSYy8fmsZ1RPfmfFynznKB3T7vF2srpZhxDRfSssceEju5S6XsNB",
  "key7": "4bh1F2UYegxv6t2DyFZvA8NFcXTUCRZXofSD3AYH9DffUCCDizCLqWRwgwH8jqmW37kgt5Y2LDpzZBuAGkzu253V",
  "key8": "4ayixfPm51rBvVJPj7RHWJE2aDF7jDrk62Dfo7ewoPijkoXf8ncM8k6X9N4dpmzP8qF5jbrmbZe3Ky3Xs91oSwBK",
  "key9": "2nS2zoKZG9yj4NWA9i31g8mq8EqthipAQPdDZBWLHj5Hf7c1ZQ7rMEhNNw6GdQ73ZbQ3t4PejttqLYLAESbZDzDu",
  "key10": "5t9dQgebQn9ZZiSsgTP2Lx4QJhx5rUiJ8UPLZkpCz1RE9VdZ1WbY7cZHx5RMbowBKkAvjBiCVbpQMQU1unDRRgUi",
  "key11": "4P244yXB72Gn5BVUStDvyMEQZSCrC3NAKqS7vvdVsRK3o7WhYF2awdW7VCdP68mvw4UJNcf9gtYPffqTCHzz4mVy",
  "key12": "4Yeij3AYYmrVBgjMz5ZhHu7UjTL5zVFoCh98uuAHhT5a1kpmxM4nTHwvxRPzxsgwLHk61kGzv5snzyEHmHAsxZvZ",
  "key13": "GLh9E4HBkZ2kKkwZ8mwdRGtvaepGUcMbec88WtzHx8SDC69w1WKEajahcRYrudhs8ic6e4JXKYtgc4bc8NqBYDG",
  "key14": "5dbRe8qY9gmTgLzokwT67N532FTwXGxjjuRMtMq66pqDS1jEAQDxMteUaRALgbAJKaTxFX4fiCbXyD6a2R91kfY5",
  "key15": "39jo9f8u8saj56FZKBWUrow1Q7q7eXVamnMRgL84xiVH53znR8z8pz8eAL6ZFrcFGR7Gz5fCWaURTHNHMpZocV75",
  "key16": "52Vk9NGubG356fXkUGiAzAPKiP9vS9Kq4wbHr3DBd28vHY4SQhf691yFexqfiKWdSH2NcSs1WM4G4668RE2y4st4",
  "key17": "2X4krRDF8riR2reYXfcGEc6pQfc1wq3QXrdhQQschjsoRLBuucLGAghpfiLqe8hssPuBQHG1yTStSRvW3YashXsv",
  "key18": "2je3DLfNm8vWiUwbHLHxPHNT6TjxKmK95Ld7AkpYZtTNHz4xiGMn6YnWfFwu2vFkx8d5R6sNRX67CKp8XQJ66YzN",
  "key19": "2pNV4M3QFrf1L5LtNuqBFGw4TKaSdDLwitgY59voPU6rLTv1i5CGSwvXdnPBGS9F88UhSTsTuKyKbdFo6RTnrUy6",
  "key20": "4zgcwfnUSwMy3tEzbVgkbCdY5H23qiB9qs1xjK3va9Cik2W3PY4wWx6rBGiDkhXb6E2Ssw9U1nftk9Yb2e93uDot",
  "key21": "52XJbxGpTmuCGifEFr1yhJTdY3yoX78TLscTV8vZqSM3KkUa1KgG4LgVaamMDqtY9DAoipGcJQeThoev7pGJfAW7",
  "key22": "3STnG6DzU7bETjkGSKtqyupNYnosptLAeqCZ9D8EPXu6yZJTce3mPr9uid7QcFYQV2mfxjdcLaxHWGhkaWR6yZvE",
  "key23": "2mDJfjpT9wZr9q7Xjyp1hrVpdofEwChyRTeyM1x8XBqA6QZsr7Daa7Ww789njdRETwzjsUxkD8sK3BEvqcbWFgNr",
  "key24": "58TAteKSJFTjhHEAGzLKA6dnJ8AoCeqUZTZPF7ZvCpmibPvTLX4a6g2pHngkJkHW1ypEDV4SiD9k3Xz2GKAm9gBp",
  "key25": "5SyaU8Y8iCFdGmkJwLbw2kVVuiAEV6JERaFrcZAKDtResyiiaATk4pPxekwxFQtuHM5gGfmsY9z4hc2BUXWLpTjB",
  "key26": "36DBLq2GEAJZHfmTwcwVxHyswA9ffDuCsihCH17neVuyDbHqxTKxG2FWmGgLD8mtvzXveYzjbsbnKfKu1NmdJLNE",
  "key27": "44HrHe7WTYcz7KZjeCfQnaqRx5mB8PUhVwCdgWxCnJZuhUnApMykxSNkc5nNYYqWcX1mQpWt9y72pTFtGojT4fQC",
  "key28": "45cHa5GjuqDnwRSs5FV8DdjMYwGfoXzkMNo8E8eGFCqwot2QDcQS4un5rGP35qMfKLG3yHsTVCNJEWUHAt2emUqo",
  "key29": "2KQLbkUs1KEMjnPBuCrmgwDkmvEHHgAcWJqXjmQtCmpe3QAKAArSxfybj996VtVaYvvBkZ8LjyniR7H3HQBQ2QJe",
  "key30": "4M1cC15nzUB9Xdd64svocFEFU4jXD9gfvNWg741FZWvggXKWspQrpNZ3rmWxG3NHKtUzjjgdoyn9zNxB8PPeWGx1"
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
