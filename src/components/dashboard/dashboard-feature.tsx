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
    "21R31LjkuBTJjs96r854gn8qZn3d4JiLeGce7A99bFcgrhunbA4YFXCmf8z9uvcTvkWVw9gvCaMexfgLNEM18AZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKRnC3fVh3aa6YM1KAN3SRaqH8diNGvAEQMwdk6Lsg5u4gUSCsxGmdmVPzrmZW3hboMKbmDyMUEWF14MSTJWYSg",
  "key1": "39iW8Kk8Ypj7ncTHB9L2qBfkrZDW64h3CvVeHJBgFgcTc7uLkEaHL5c8epWhuPYVcxD9P8Dj5piTeT5GHVMJ1UvS",
  "key2": "5Qbnx9hRfbX5dcfitdLFrTs1tkpWU7ZUBFgwZvHog5cb597yzpS9zA7K6kKEtA2bSfcawybCwvBLavvbAULoFV2R",
  "key3": "262AyL6uhnwdDKrVF1Y8V8hWc1ztyU3pwXkYmQMZdj6aSuQ9tFYcE5jJrqoCTEJgrwKFhiH3HCG8kpWBXNxp5fzX",
  "key4": "Kdpg3FJUSZ6wZtA6izLdhMtfsSq59wwVB7dWkwx9R6gwz54gHwZNW4gnzKqrGFS8T3uvC27qGzw6GncLP9CaAqB",
  "key5": "shkcfQcvYeoJChm2n59bXiVYfX3Fr2RgckBtDhmAycKeZdEr7U3wb7eumsvqPvacS8ZLr9aKjMKdtsSasyXxK3q",
  "key6": "2D5JqBTuUF1c7HHN1NihcGopfq4iKTPm8CkgYwhMCXWF7h4X5k1B8Sk6EemCepDypXDNdPUMaJZCsALeReipYLVN",
  "key7": "4ZPbfVGk9ZoDUk77NTw6J8mzsqKgYXgccesL8PXqgQ58bwA7VtPLGnceKFNT4poUnzvzm7szLFEebHmswLMAaMg",
  "key8": "HurpvpPpgVgVBcZwhZSfRRrihjDJnnAacR6UzBKE98A1Ka2jvZgtfWMZnwDW2Gb2bLzxBANGe6UfYofQyNCqL5d",
  "key9": "5tSM27nw8zhXWt8xckNVd3gj17arm8JFJTZXFqmPEZU4zrrpjbx4593z4HYWpyTBzRCUcArMyPJXKyAZF89e3pF6",
  "key10": "2ab2zutpVe8WnbihKjzCj7njfqFUfnjgkwomMsX3YMkfi7UmoiJjvTgTRxfDqWcXmTFUkakc9gurcJDQbEiUR1hm",
  "key11": "3y4J6y26Af7yBd8VSfjpuyxVNco5iZCgbP3sC2PpHNMbYQhzreL2BaxkJGje6y5FxvR9qQECjuQwb34jjvXQcnYg",
  "key12": "38tj7RSnQAhQ1V5V3UXPNZ1CZDmMHjm8sR776h4PiwEwXGJRQ4Aoe1rJtjEFd9vEueuJUWUris8oAWCq3Vo8FNtN",
  "key13": "fqjorL1x9SoMUJZ9aCQvMwJZKhttvz2DKxRXT2YbPhrVR2R5jkB33uvfveBuCgmyZRAVLYq3UT1HDpEEgXtaGPi",
  "key14": "5ggCKaadNZPUYACPofmzCHSrUxcKAkC1dJnNWoHhzftaje53w1kjvYYDkGS1pvL9MmC4xR9Gewsrw8mC6oq1y8zt",
  "key15": "4vrt5mdpzWHngQ4psrNSddZ7VtAh948SceRsZ3QhP19tpUFaP1qKQEoa8bfU8oZa6DetbGvr7CGc7MqsRnzSw5oH",
  "key16": "5WxuZW9SUnVy2vhAXNnCLDLG4KVq2hX8aNWpJ62rECeRFy8Vq5stLsnFGBf9Xn3LEb1BWHp5x5YPebCihCD1dD5k",
  "key17": "4dmgqDhwkguAFvMPGpbnFNf1UCBJqM2kH9nvEq1X1yDQXbxVqNLd45QztauZyainWSCRraFrBhanqWi4SNxfLgWM",
  "key18": "G8fTUYcoK3yho5Z34nxoP8hEDWAw3Y3Qrq3v2xfxuBLpmp5CNao3FCfyjBUbWFmD5JN9ug2ho7xkqhRsDQwhgKM",
  "key19": "47M13j5afpa2Qk59mrG8UjYiy6VNFjmRM2L7h3wEFhKF72wgenDc93dYQRFuJmmL1k7zWUjfhxir6LYvyzSyZg4j",
  "key20": "4rE4nE435pTazMuxFeT9YfPGQdPMMvD49oBKWuFNFQsjLXKcXD35kKYP8yP2bmXgFtnai8U2JJKNX2oxznUMijZZ",
  "key21": "4GmMwbNZcP8Giw6tATELEZCRhBfVwG1v1NewnbNAaW14M7AjyhX1nJT4KmBA5Ex2DvY7KwDqiNVxxK2y8HF3cShe",
  "key22": "52aYArG1S9gWjECrWicU2N8JNCPRDbJyRm8pK4XXcWnPX8X3HB5Py1anDCm9voWkCmLRxvKrCJSXvH56hnfsLJYo",
  "key23": "2Jh814h73KAJjCWeG8xecheq1p4ZFRhAaHPk9Lcfu5oNjZvr3E3g8iqYqxrVwJu1Q9v51CvteCTvDaKAcobHd4rn",
  "key24": "3tXKjHos78c4XvySqBhJKSJRz8gcJPNAC2CrwFcZX5usbRVZ8kEHjQpq6onpK2KqbfLouaQ4CTig8gYuPkCRqjYE",
  "key25": "4f98BgVx9TBzGL9y3asrUw6ocGXYbTos4MS4c8mCyTXdJwuKmXGwM4RxBhXdoi6dvHK13gDTbT7MqsZwrQo7E94M",
  "key26": "2SZmGmnyDB8v9h622CD4MquBRZ9fdGxeS6k7NiGrj8rAF4aGYg4bEYkxvLXtF2opwXFARLXYNbedNVdscFDVFnWQ",
  "key27": "5wqp2CGgpdqxqxMCrF2S2zhL1nPfL8DLJVyGzLDHry3iJ3nq1AFrJjhZzfCYHTEPGn4Dvq9wsqFvfBSmJZMmznrD",
  "key28": "7yMC9GAMsnEHc8iWL3WTay9CbxnYoZv4HbsJ5DDktuGJWFFUTFE2zMqr95kZyvXipYpv2XpgReT8qPxauSQw6c2",
  "key29": "jZdbofp9D1amv29U5NVPq2bLZEqmzYnYF8duuyxWqqYuSaTLBtecmhrXeenJpKge8iTRtaYgXNQRkJo3aU1bscr",
  "key30": "QxDpjVx3gTnPiCxU6ozSujGTbgUKbfpnUQvBzh8X8axJc4chcgPH93oKYSYJrXZBZHoAZpPEKiZxCV9WuRkmY4y",
  "key31": "hAysRXdAovEpJDvuXXHNNjHddYLqMaBJ2eeRamsRVxTUqjAJ6pUQ2rKwrSqJ8xWAG52LyP9ghkpgtDeD8TAZpom",
  "key32": "4xgCtBJ8eYZh1GnHuGSUJziCeMug1JqTyqR6UaeyC1tCbGc6NsZRTg3QzDCpimNqXghgC2nB5jTGjBbkq2FdxeTZ",
  "key33": "79fF1hHA2mCfaZnCs9yrCA7vhN4b3mvpi8PvPUfyiDkeEmHr6Mio8V8ZUaMfhvEsUCYTpxhfM8mDcFcfRN247JB",
  "key34": "2sdJszJkgsRmnYgMPN6nf4bWbd4z6RPVZdWrCXAf7fFVgbPH74zLiNUB7XNtjJVPH55P2toAjFBRbEhEuwKVsWDg",
  "key35": "2pZabSpZxUZa4cmkR5wP1vr3ZACr1nUVQn9NRFrfhSSMMd5spK3wquzni3TXHxTPQPsmDSJNEoJjuQBs9WDoxmWs",
  "key36": "J8wh3JW72LD7tN6hRexA1HqvGJ8y2HwYQrGV4P6AytPgNizjJfYkya9PM3nXrJfxZTYJpuLafLxqdLERURo6sdM",
  "key37": "5FLga74cctoKaSfeHukYLRiVAoMtroCa3ZKs5BfmdbH3ZvAQKHcYiteTQY3FGWMuWDq21uSYt8A928pHP5cyWcMC",
  "key38": "5dsGxfw6MXxAyCma5oeBkN7K9w3wUEwupk1T2TFrZG3wPTpS4tCGwJ3674uuFFuN9LRrUhF5Snejpik33ZSnzHda"
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
