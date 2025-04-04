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
    "457c4tXqLVDEBchfpnTeG6bk9WXxTRSJKf8CASJxJwKniWFfRobQZhvcipHrZ8ZgqZYzzNRohoYNqqqWtkFFQ6bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2sEunFB95PjAn3bDY2rJEH6HxMivtNJKgYRfpiWmeAdsBtuQJA6WR2fwCXQ26Uihhxb9vjtHkVCSkwgXSLbxRS",
  "key1": "JwqtTPx44uUcwnBXdJpCCU9drueAd8woP73MmBtSazjjUS9bawHFz4uS9srXW1tKvwTrttVS2PT4bAvxjs2a26k",
  "key2": "232cyKZR19LPNHPnKdBFDPjCDB2Pyom6wurPEjLiuVVEtvjsd65Xpq3t3aNHqKj1856Yw9JTVrabigbsiKXhpNsU",
  "key3": "3kq65CMr8cUsgqYhYp9HJPpDV12gNQcFHnBv7KmWTtdxaMwjFbRqB91vQQrjYZYL7NfKDAqNyA5xJnMHyXyJ4Dgn",
  "key4": "x5Lw143fBqu5RYGcdbcVi8T17tmizxCyJDoJdJAu6igjpCHYMbg7G82FcAhDqDKkLGXSXh36KRUSiqRu4uRcV8J",
  "key5": "4Lyc8h6hQ4DuVHXWci2JBVaywQ6UZ8RTKJQD44hfiXpU222hGjkCJsn7FNSAJJ9ZRB3oobGk8BgreNMhGPnbRPbv",
  "key6": "3Pq3krP9VKyV4eyGYnCARLRAKW9cUVDYppx6Z4Zo7bgdrVM7wkvgJtNfH7JVqAjaBfP561NPHemwS1qHzPzzNQmc",
  "key7": "4JiJaiWvg2ThGY3kzu7kwqEcMMtkEa4V8ursV9iJ8SfX4xQt4dCMfWzzJkHrSVWDci3M1QF2W3FCP2itTdaiEKzD",
  "key8": "5Y4cFAuH1FzULSotvBK6k8YtMVKRQLhD2qJdidnuScUoaKWYmUYvNMmvdmHZF7b3PtJtZxB9GpXwLgvsTrWBPhpg",
  "key9": "4uHwzRhmUM7sH9QQoDuZ4b7Hm8AdM53ChsDJLdwmARDYaASZ8PBXEqQJmB1X4eW1CDfwSPXfasEhSuxUqirkLijn",
  "key10": "2PAoZY2dHh9uNHhy6xCVG94FQRBCmQaFptR69qRxnvhmAijjRS51NiEcYAfjjw4HNSjpNyuCKSKrAdn98amWzPGD",
  "key11": "29wiPqtvKWNetU7d2HJDs8byGgcJkQMk9YwmmYapTbkDAQ3NUjhNLzSVzXSidvC3177KRbzjhKXhcXRYgzXqiuiH",
  "key12": "XYtU3bZbChmxNhsjuRCDY4ArpC67nY2WxyBWxmtsCmvWW7NGL8tfb1QpSTbGWfpqPFAAXKU1gM3DmPPVwRRQD2i",
  "key13": "3yapzxzY7zkt2KgJi4sfsssGfnWdTQ8cZWpFJ2KbEAbmAJk5FcwqHtCYcvhw2932pUMMEmxQPxUuZqmGyVtpZzPb",
  "key14": "3eAkdSjjDGeqNEAqd6cvAkUw5GwmuJQYSxvCmv2kJEsq68EiUmuh3HS4SzeGcRVXq4ZJpt2G1kozZwQUvpfxMXiA",
  "key15": "5RKd1nX84ZBVi9g2TasdwbVFtmwRZAPizDQkd8rmeajnM17Nx2u7XWZQtX2zhTzhDvCgNgxtxoD4xRGM2LMhYCi2",
  "key16": "4B5iukSe5oXiZ7zAyYTeQGZ9DXgzztGzxCLenisFGj57fyNu8Z7d5mEXAT51avVLp85PPeFYe331GCjYUS8CN73F",
  "key17": "5rBvJF3rKZYrLFB5Pkxv8Gc7WVV9hXBU3Xb1HknkD1m9WJVpL7jyNgZk6E7DZauV8Ct92cVTX6sfrXXV7aVmoPP6",
  "key18": "5eK3vncHbo8DNzWEtZTGuGVJUsDej8j67zt5bkm4v6KyJTdaZEc3DnsHij8nsF5qDVtAQvJqWHQJF1MrtGmHUfUq",
  "key19": "DcKbgYPxZ8TKPJxoSj8zvBmhAy4qduhzW8g2xa5ZxD9mGSTDvuTGzPeoaNLBwdqr4SP5jmPUythfmm7Vpf7GMWu",
  "key20": "4BF3xTR81DFbBJFDxfYqTvbidrRw7yrsz4dWC4KWeG8KDy8RCcDYibrmYaMxAYaVEiYMVP5CbQJYwW9bcphqPNXp",
  "key21": "2BTVkS1oudviRTDeiQTucRQvCkoff8Ynq2ojjr9kgHtCaGwPsJeudNoBBuWyeTD76bXY26Yt9dUPpnd8EvFHc5zq",
  "key22": "66aJ1kwyvQNNzNvSCX38aV1QoF2FC77kaJyeKRbxry9Wd2jSNSDsLD6sUDnoqAeBGT2GBLuLNVUWsKrzhim6uggC",
  "key23": "3Fq3eYKgRBYSYutiWvZkr8L5JoEzya8TfgTCv5Cc7EruZAdd1ewvuZXbzsGuKCcDPkr44FrLDG6aJcuXMV3TP8FF",
  "key24": "3qmRR3hZvnCJBK2a9SNhgnNxRpAHJLC77A9AuFEBqrWn4smWKM4BE4Lv6eW1NnWpUk7EKLhYtSZtG9M7bSFdydxx",
  "key25": "3nx24Vo9GyVxgEwrBkwz1vq5NyTNBDEQsrfV3RFLMMZYdwoGEQrxHEAk617NcDXv59UnsojWUEYWSxT6PBHmRU8k",
  "key26": "29q6pn9dpV1TejSoDfhdnoGJUjgsyTuLB2B4wsorLYBiJwpUJjvgHkhzEtkiJyVZVtVV27uEHaG4HzSyYajVnsYC",
  "key27": "5QvjgXSLadXVw7d4zpVfqRwdHj4Ui7CmHBG1EqxUN5jSUAKUZt72oFNMDqAbQjrxJnJbsKBRWcTRWAwGaJxT3tAJ",
  "key28": "3G4SeJsE926W8vb9h22pVz7nAdH3D1xPNmvYWEU6Fji4XfvHsNPHS2Y8mWvQSoHo5qampKDi1ZbajQYQyWqrepmh",
  "key29": "3gEnJ5r4cowBDzDo8y6kJ798v7qojr9ZmK5pa2jCMgGQGrR9dMqXq1Ks6diSjtoTQfxC2KmsFPbkf5886PzWKPgs",
  "key30": "WwgfeoxUdXoMS7JLqVRbWLAbgMjcxZxszqpgYHu2Kpfj69zkQg6t3WhK7ZBvFnVibhcUxJvYvzKDqRRbQQgHA81"
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
