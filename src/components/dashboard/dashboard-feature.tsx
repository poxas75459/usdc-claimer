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
    "3NhyfsVjQ9rRPKAgEL5VCgJ2BcF5ubK3KcwJ6rRiYUYwPrSZF2Zhny3foi1f8HUgUuuM2r41xDwu6qHc5Gt4piuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ManHeGAjiHbi9L1fGsmCW6VmFCyCkuJTLPQVX1i5MiG8ACuxy4pg14H3we8yCxFQNvreCvh62U3P8icYi4mJWT",
  "key1": "4Ez95jjCnSNxJ6r5ZTxcZH8TZr9oFZUk9jg1KAczBQr5dmeRm3phxNvQTV51PWfc1Vqqk1GxadPBRkDffvcr9H8H",
  "key2": "5vBnj3iZwoVfGMX2c3JCFTbFAdu7xAS4CZKNF46WppPxSLwi51nb5xeFvSHttyGyXPD2gmscZWSfQvrNaqf48xBk",
  "key3": "4tDazAWA1YZEU7LopqEbFJe3GBHwrsMkSoBgYB9ZkNhaDTecPPrYEdh5qRdktYVw6sWQSp8ioX27yZJNxD9dQfU9",
  "key4": "2s2WCvSFpTGW3usbiYtLeVc4fMJxF8UY2Kjp3fKrc1gGpN4cTCyKT5wviZcPeCAKsLqz6zi9tUdcLPwsmjpy15yA",
  "key5": "26dpkeHCY6VUJXCR4Qk9bCTL3P8EzGv7ZTipSFK9ozVNy88dft8eZFzQyiZzwA4tuqoWHb64ehxAumbsNxRZHpmY",
  "key6": "2rx7k41zY1SmFeXdwxBT1Z8JBsiUKDRyooKKvooRWbi7Ue9chDzfjiFgD59QqwZhV91wnxSfLKaUKzRBXaxLxeL5",
  "key7": "QoRxvAF2vnTPMDnWGgchNCtuizbtofUYRPTKp1iWjq48JdfgLfqYwwEivyBX3in2Eyoc9VtY7SoxPYDryyp6xAB",
  "key8": "28Q9NBsAc9EeMJkQKVqy9SNVf65bjwx4Ptvt4bQmEj2NFhwEhujgs7fKZjzLRSS1tko6bHfW2NScG65MwEiAC7JB",
  "key9": "2Q89M64B6y3KEq8co9P2MC44T8AV23TiRJCLWVWa5A5FT8mkBKhhwaeEXuSGLB1ZfTDEZGiQmgoGLj859dDh5QU6",
  "key10": "EGVAENMD6nWAWpW1kzMsmnXmCfSUH9oaFGqvYGXLp3RCw4JUFjUHvab9BPtJVFHUMYeuRMXUFkCnTYMb69bLZMA",
  "key11": "5osyT8BawoXAuextxC92WN1y287rkVzXKs3vPUKuncHP8WKVb4gACoNYmL1KLz2w4fdLEM8QboS9tCmTedagUD2q",
  "key12": "4W2CR3NXLVE2SPsqJHvvaNjxSEMFPXQJwGthYtkHRHF7PfBfjGZxEQmkbBUqAsE39UFdK7QvVF3VMGYyNYxSwS86",
  "key13": "3f28hFkHj75iKoYvYnUA3zLkofLaUMz9cgX1ZqXmxgYbcnexo8fKsKRc5r7JtAzEam77Z1uxZPSbheEpjgjdiAKi",
  "key14": "5dYNo1BR6N4W2F3JEJSuFjNz522bFe2951hg36isSpDbWuYPTHr9Darg7vsgk1rSGZZCLyvu6ag2djk8Nu7UJBsD",
  "key15": "5nYzipPGbv6Zrgi7cLaU47xvo5G1mXAUWsDZaMmQLEkG6xmbTHshhDfBE5m9gSKcqrRZZiMpxseWVEEYsjyNvf4k",
  "key16": "3eK3iSfXHFEsdbR2GqzGujEz3MLWkX6uvHSpvo1DejDtc3rqoepxUDsWbT3ZsYpS1o7vpsFBqVJJ5woP324Xdt6D",
  "key17": "XnVeoNnRPBvAQkwyLnXxJZ5JKBdbSBySDGjgHCLysM9D8qt2BMsunzfEhM6fNXXASLdZoqHpALHYSXVx2y3tAnX",
  "key18": "42q5vvDjSTNJYUXGufNVWHVN8Eiz2Cw4vVxTSeRoA4spT7NRVYq7kidXxKKFriCYgUyaYbpYdS3DbiXQG1RBbdjD",
  "key19": "2DG1d71SRZK3oRUu3SSE28SjA2gyDV4LTSJg2JmXBASK9zyyf2pemvKEUYBLMATMq4Puv4CxUhuDKx5qgbBQysgZ",
  "key20": "3PLpjkUHPE8dJQKJhZm8thedq6StBgrpmXu3vCA1255A18TqL8B9Qu21cCAZgJUF6NhpP9R4GBRd2L3b2aEUwccE",
  "key21": "63oqiSqriAYCVcxcBTguzgeYcW4KN3THsbo4FJgxiT2yvMjyFAr55Fw5v3tej1DYK47DEvqypUgYhNtH2rNNZfGb",
  "key22": "2g1skSHw8f9pvvsaNrc2t3L4SSQcZhNFvc5YbvwUyqcB3Vt3ZeLyXkoD2ig3Rb5yi6gnja7MRzjFmL8qCV4Lo6hr",
  "key23": "3FPMwoWsVSHctbvJQsncLHeGEDtaV7M8Th1pHjnyVisNoeumxBEujuhtApG4cYYC97fXAmH4dE43x42vgDTLcPVu",
  "key24": "29uUbNbpvsHsquuEhmVyAh69uWRr3TCZPKUrcFF99dBfQBQfAk4MHb9Pni2ArEoFcnncZKqK3TaMNG3JDA8ya6yE",
  "key25": "5MXAAhc5x8V6FuM8zk87JKQyd81wXv1d42RKLtWGhLatu1R3CLN242VB2QmLKfeVqAcb4ubrxLhbkxtBNoFtGTCT",
  "key26": "54HyWroaejh2uUTtop1jwHqNqT5Jz1ZXWQfABwcWuxbyHtXw8PsWy5jqRBtcSijGKmA9seUVYzULLgzSNxLvtVAd",
  "key27": "3wrZkW8nDqiPL2aMiZr44hRVTyg9CuX1ZPRv8rdTjx765fg8Bk9xomxyV9iH6doPtw5MNWGhbHMyjJ2uYJnf2f9V",
  "key28": "2iRbDsqJLf5Kzj6a5JLeBoQv14zegnPv4FVdkC9Bm5hcR6VeP8rvNBQauoLUxPRXPEVndyfz5SmgX2PicLshEQnJ",
  "key29": "4w8X4Vrphpy8H1DwjyPGXKUZmn9M5c81BSBsF7j8tS6djGTNT8t2hfjGNEWmWUiKbas6BGSZSUrmopjDS57WSi1h",
  "key30": "4XmkPhUUtBzuh7ZxHkWHq9ajRX17vFVjgR8LsayUvJpYMkT5n9sL3BCehnENSNSN2DgJvUYuVJ52JVtfcvDREaKZ",
  "key31": "mwMUZ1bdYhxGiX9A1r8rSkh9v4Auwm7J29Do4MZPJsKgTiq4eJKtReHFfeuKXKavVkKxzWxSmUkaaa6YzC8D8Gw",
  "key32": "712GeYkf7sYqG2ptDZr2m3bqVqPAPzPRcaGoWD4qcy7mXpMtKBuD7Z57JmyQ5W81pL4i3rjmLW2dbSBBa8KBiM8",
  "key33": "2AqzB4kngZR5rtQB48MTNake4KKx7AxzMgy5qYa7TLMQbrAqpu69qUYV16KzmJTX6XPVF56FLNgdJXgWADekdVfN"
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
