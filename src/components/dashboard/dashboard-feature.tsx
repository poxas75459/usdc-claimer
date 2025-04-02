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
    "3WPapFciNsfC8vEPAVumc3fmYwESunHJxk5AHAJvmmcfnPRFMD5nYBCFdq8jAQjDExjWU9Df8cF7Aq7NXzWEdTf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edsXK2sgcrXxMm3hFDtXXwEb2uoDTkZXXA8SNQ5f2UyWmbQYQsdBr5yG4ZjREGmh3KgLbqYjFM5XsxE2ihpTo6V",
  "key1": "5ZCNTt6ZNvRmsH4xNVNwGgJeLnnogYKCoxJKSm3v5t9i8k1NBNYYVW3vB27MsBeNbKui1Yrx8UgiYpoS74MYYJCt",
  "key2": "pmrke4DRZxik2vquxJoeC2a44ZkLRvNfu7LyfAbYwPravFvciJSq852UXL5meVxBqd8RSJhJC7tty1eA6TizkUU",
  "key3": "4yuoyFJVd6EiVXnBLTLpZHEnQ3K2ht923yfLLfRzweyXQmHDRpx5Ef5HDz1Qw3eASCUvPCQuxT8FAshbfo1rHjAH",
  "key4": "23eiXmXS3AayJ1M9VbMNWoAHLg9fHRxZmVvfYNQeLjqEgrHMxz9HU3c8gsNS8mpGAA5qkhKBMp45AFdezkVvjcPc",
  "key5": "4fiUSvUE4pMCzkvUy7sgYeCxhMugg9S6G7SuXnbtzduS4TKrFHDEWCdpEast594zFGQSmfoAAGFkLTyqwxm8LtUt",
  "key6": "XRrRsx3Qg9EfQL7aG794ct2SM8PnQtje7fy5g6X1a6U4VXFDK6ztUP5VFrKXDDTzYtvYE3UzAAStheHTLbpMtxr",
  "key7": "2UJTkVgScw1VVvU3dsY97tHznZoo2svdKFT5tv8Qrq1Az6b6thGLU4w5cuziKGVWHdyDXgcHyhxAC7KsaqRN126M",
  "key8": "2aHup9tLSxA2cF56TFFMF2yU1HwpNEanyPijsJecC2zjfVdWgu816U7SzRhQx8vq7b6J1GyCLF2hV5mUreeMjA9B",
  "key9": "LPrwtCwQEWLxijsC5pGB4VWRfwFBtg3xpcd4Y9aCH9wJUa7p65ycpm3MnctgPdwEVz7nTod1CBBeB3mfuev7nH4",
  "key10": "EfPGWC5UWKqK9HoKR6kefaNzFSbRG6LE7e6vFqaoWUniEep6NUu1oP6W3u7BHDgmKXM3VYLuVcmKEnVxQMiEQQq",
  "key11": "4FFCJ24KE3mRM6x8s4vwnQhTsEZmxyTWczjHzZk2mS7es7Vr584ghb9KMB2SnyNzsHQMQXaA9g5eoZZTtkKuAjrJ",
  "key12": "nEv53dnP9jrWDH5r4APWdcvF7MZ6MX1HJ7JR7iSYNVijsk4ZYijM3chGHUTbqtKTnWFHZqp4zwwKakhn1ndKR1w",
  "key13": "2NhuSs5HrxeZAYDKZupvCzXN7J9rshCdqzKRJ1qnJs3ypvw7peDEdVYpPxSo6vAHJbLBtDaouBpKHr1Yx5Q4zAzo",
  "key14": "4zaSeGzepajWPm16dUTxN2ZgqoZGPyJiaDgKBRis9auu6LYiEdq2n3wvXdZ232Qzu7KbJCTL78tmdUPEQfLC24BA",
  "key15": "5CTuVRj5h54cfaM7EmdrsQXnmGLWerdDo4UdSdRQipWg5WZskJVzYJE95VERQbqnk64yQ4Bd3414T18atrgwfJcg",
  "key16": "4GPRsFHaEUk9p2TJ9hDEJGQi66fdYJFh1rvhCSMhWKYNnhjdng6QGSSSvE9D3dKUbWFj82iQMVKLQKVqKGNho6Rk",
  "key17": "5xejx9zR6MX5RLgxbk7fDtUdm9nQmGkRreEjruxE2U3X744KtwkBi6gzxyeXLUNcUyQtguGPEau1qk5Yo3C8NiLN",
  "key18": "57T8mdYQ8nbnc4VSRKfH8Fdf1XKNjLi5RzVHRKhHaxf6URiF1Vhgfqm37ghv9wSuFV3jPyqxUo3upDF9FT227DSd",
  "key19": "2JTefYRzNtfkrW4jeSL7eSG5Y9vRaxcMTZbXYm3Uc3ehahSnnEaJTjW938PQncaTU2QvX9VdH5cGW5X6oD7hMiMR",
  "key20": "xfMxiR68fM8yTW5o2jp2sj9GiqYvHiEkJgGtY3xCK5qnvgLURXndmh5sx59BQV7cn21vf5eEQkMtq9yWt3P2vr8",
  "key21": "29YqJGqA1Wic8kvdTr7ify5v3ozn5rq5LV4VV9bB5qvstjLheUpczv9pnet6UsonuTe6CHeUfHf24moVfo9gzTeT",
  "key22": "3nur7qYBxa43dAdta1fTqMkrHY4gH3JMMdPYuaG9sgMea2d9JPPAcGJBbVgutHwG1rrEjqqTxT4WfXwRijSG1ao9",
  "key23": "2abuayXW8ZHtWWdqTnLDcThwumkHhA5KtRK1wiFkpRk845Lmpm7uCeQZ399yoGdeKep2nP4xC3SESjMkzVf1vnrA",
  "key24": "2RTEHs9mT8m5sotdHeLAZSuUbLfKnAc2wdSG1dasQUMQLugJFK2qQDTSchazWdhkMQ9M3PRaVGHsJcTG3De63GEa",
  "key25": "2EqQdSuELuCh5zS1hW5K95yiJ9tfgSQoP8DwD3oqrrBvafE6e8SnJdJTXwCQQXtBg9DS6rc7VLcnXaWq8Xedq5iV",
  "key26": "wFhnDgMDdYwH7UfJwznAjZbjPiHoS2orQhTmPrHkT11RogTFLnzuBK2TktBNCbuwZrEfkp7wAMq24jyAB5odBnD"
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
