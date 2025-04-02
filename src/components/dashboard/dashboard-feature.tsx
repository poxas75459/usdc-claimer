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
    "QoaRcPp4zGHu6ypkNL4JsZf1kvhS4gVwCoYtChbCefB6p3TpuaJAJoZBumMUMNFYejqCF4HDr36dRqba8z8ZhkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v58PgVTVddyShx6XYG53U8MjTPGMBa9eExkJgBMmKDbTwohAkcAKDWjvAWYtU4E2RGMR2nQU1fTkcy3HttqyLrF",
  "key1": "4K8BvdAwzDCeqiuUEo4nbt5pBbTKQYfCHEZUK7CagNKbkA44or5TtQCZTDj7Vk4iKfso79wYFxoZUpvFbhbxWgsr",
  "key2": "5q4qiprgHnqGiWyq8ub8TuhTu8tHXyVydr4xF4JoFQASFG8Xz8q2x74z15w815WQMxxvvZz1eM46u6PEJkU1s6zY",
  "key3": "5fv85Wd4pYKX5D665Bmv7nfAdjgmh79YAUsdZDc7jSrJDUz6BwPdTo426QqRHtRf5KYeoPwQi9MbNWrz8KgSbNiS",
  "key4": "2CqMermbHJ4jP7hMTmajCm4ukAGYwN9FE4pfPfgm2AEVNVyquFCSGY2u1GMZCyaGrPrE4n4UT56NzrAcYtvstTwD",
  "key5": "YMSjrw2FrEDbFPXmm2LNzNP7CEV5v5p1W7afo528xpEQHC4WVqZcD4WUp2MLrkD9MteY7p9mykRJXWcmo3o4wh9",
  "key6": "o5ndi6EryEAwXUiRAZ2XLVHLAZ3N8bwLinr6XNgy7re2EUj3dGbax1VLzUcAPRiLDJJsFiTXvMNRFnq9vGeMfDH",
  "key7": "2vFT1DHN451EGH39zaLnBPmKBqyZE8V3dXng1ChAfF7938fihVdzujAWLuBT6Ts2GekP2KaMwH32b8oMA6gyGmEz",
  "key8": "5b7X9PtLC3Jr9YL18jBdqaiRuiRrGNjT6xNP6vK1euUhmV1WFneRUBvwZRqU5pCPEwRH115EWXpXPhhe4CiDUHom",
  "key9": "2JpF9G2FWcLqE5cniJh6dGjeFczwfMsmcVNozZG1QYzQefY9KfaBuvbRhiEhxModaNmBUntWcdex4YaynjKJvTDh",
  "key10": "5i987HuJzjsh3tdq1SADHsQ4UBTbqnp8Ysi16tKcyiA2WnG8smJdu35fbLaw9YZZH618JGutVoceQTVQgvwUR3zq",
  "key11": "2HD9xbdLqoDon2xRfBgDvP8m3A8MSfWbz7vT4eeYjXReCDQyu4seznUV7dedRtCg9ughN5Ri1ZnHQR7i5Y1o3E1r",
  "key12": "4GB357Tqj7exjVMknuXG6tC95pKsEvizaxjzj2k5dnUSv9SLijbA6PtFsu2w8ecVfB8X3J3E17oP65q2C4WQt3Fs",
  "key13": "cc5HVNkr2nF7gDoRvrnxopPxmb2PCoXamWD36qXBMXH428WP5WSzGUzEjg79CN3PVeDqkgNfi9iwK9QGm3mLhM2",
  "key14": "2gAoNnKT9LQB7jeYmwDMeVNZS6yN39zvF4V4x5cAQA116Kv8j22u7y14J8z6u3wJaYFQu8iSvoe1BvbbUrVL6Tj3",
  "key15": "3ZsKkUyU7VKbPkMbKJudzamMpM788zXv3FzZTf5xdvv8vZH2zGUe8Lcr7AYyGKBbr1U5KbtgreYW9UUSXzncbRsW",
  "key16": "443uDXS2xMe6DeqUfZQmBubQy425DbCZ4Wk86iBX9WibKqpQymyeejj3A1XV7HXiwMrnVDp5JQx2vd5m1bQB85i8",
  "key17": "sDdVgQvLyEFULZf6egT8X49cwM7ajuSsPP84TkicDGc2FGnCh3MaHYG44fJz8TMUBE1V47UpogmGmJ1MYorBA1w",
  "key18": "mJPUfgL6JczA5GUqDNnFJUi1kXJPQsWQKuF8wMpADNNXCaUqBANLxvn7K1z9t4B4XV8N4igQN152pYjmKdtKWKa",
  "key19": "27ES5vo3ALbkgXBvUKMtNcbh8JHtvo3BJBe2Lbuu3FQiR9ukh9KJRMwhp2nufYP5x3vGjXFs5B1ii7g2pZXQ561U",
  "key20": "maDRzV1b343XJuAx7LiRncZo6uA5q2V4KHpHufy7zpEXX8kmbRBenj4b5fAMsWA7QrhLf8bsi7jJkphnVLwBsKN",
  "key21": "4b5RsY4YrzHszmKBKtLWx5mYtKqXhAmrYf7YNT6n8S34ErXCE8QsH5j8GgkSr641Y49czRJ1mKowbqdihzhmggs4",
  "key22": "3bERVVaN7oUMMaRVphLsyqBmTsxBfFi9x4rmmtoBoKwDApuJ6JvdPN2L6afog1iumHZErSTjobMUCC2PRdToXt5p",
  "key23": "5uHfSvZrTfmGNk8s58iTiyqnVx2vTAfEAZErjweq9Cqr8on8zZmudTAX3atmxqzd7Ew8v6TsgZp68grbAW2GfjxD",
  "key24": "5icJB2zQ1ShyCy1dhUB8ZfrZLgD3MptPqFzWkMQibmxJDk5yXJA38GkncLx8fWVW27j4rMpzJtifaJENPEpHcK8Q",
  "key25": "5KHH5dgFQJb2kNB5ws4CYRMyS3fyh4i7f43Bwv4R3gLghGHpga6vJvYt8RG99hNdyiBRxhQRzFSP2DyaNnSMVpUp",
  "key26": "3gSjfkiQPjMmfRGAwv1PMLFzxKyhmViWGyqh1CCtfTSXA3Lep2MkjU2KnKqQiid9bnqSDDsRpyDEFbvyRgy51PL7",
  "key27": "4mWCbcEXoAZKKXYztcEzYrwYPrTzNKXULCJHnikcBq9SrAkHgLr8ehbf7A3Epnz7JbUQFXPgiSnQUQ14KBiRHu6",
  "key28": "4dmRdwgxBzisFTYNnehfV1au2eeiMZZEVpmCQgDaiyWm7KMkPbHiKuYNDrt6U9btfHbr7Ahe4Qeh1d4RPcHtGQbf",
  "key29": "vYVmHksYdXv4ETzgfHTaDHe889W4V8veK3NdRQVVFsHdL6WcjsmXhy6Q7rbHsed1fgXrmvFZHZ7aftVKc53TAmZ",
  "key30": "BQLLWmAgDHdBqXU3yW8SV7vJvquKv1b8xG88e3koY7Fj4GanNKTeELZDKSZ1j8LAiLfcgF1JueUBXpNUcKBxsWS",
  "key31": "128b44Sc55D2ACAYLcK1zfDEFkwzkZj4VnZRZqquVFb3Ye93KEBx9t23nUuW3ukrMq2DqjXQnPGGNTEk18XFafEf",
  "key32": "m8VZ4Hg1RTgy3xfCdZzSVGvwqbEDp1LMuoAfE2Bpd8KEsY74R7ePA2ERF5ArdNLFajytfHdzDZ3Z83XRBVqUNd5",
  "key33": "2MrLcs5fU8TvdipvQHHDC6rZPkXMKak1sEYpdmBDU7bxUyC4MpEEGY1XiqtsQ52vbY7jGBknoh6zSF7Ld5R4jKdY",
  "key34": "5bAWS1ozKWF2sESyt4sQZFtYyfZmExMpBxZp7BoBqAZVuTmn9rVHT3bbB3FwjgnhdtUPt2qXxodiZUKqTc5HtmhF"
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
