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
    "4x6wm2LufDxPebwNZt3uSMAWR6z9ZeG3iXZ1cjGkNrunsDaHvtGoKVxh5pBzbtmsCGc2btixPjfMW22ESCRqSaBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kazudfCHNCHKcWc311F74eCxYpLjRTpjrTDhr7Uadq1hbfrsLY7xGRcvXvMuRTD5i6jF7pDyJfLko1BGTH16pgR",
  "key1": "3y7SiJFUdTVAMkA775E7y3rDf1nhoW4JCwTet2wrEsNAyPWVLJi2bQevtC4hhh6ua8AF3KnNC9K8BKVa84FdUJ6f",
  "key2": "41QrnzwFeG3iBy6fXkmq7KyV8pkmdbj3ruxSTEkG3uDroXtimkJgfRAkk8YUX2vnaqiGW94JCDLzW6MMKRVvJd6E",
  "key3": "DgA4x9cp6EAHCuLeRTkYHzvwietEsqyiATZ35BVEYQibRpPMnSLXCTff5cWcUHBjjHK14g1iBWRPZ2AbwRAy2mQ",
  "key4": "5jYanbaCV1kJS7mffMmvuCZTqGV3bMZDC4vTg2tuHu4uDRJere6pfnHkqhMESeNWbAPbaPQYg7NH5FcqrRMDC71F",
  "key5": "3BgHVjSGeGknLd5mbrZjKtzjbQtdp3r6QLysumNQE6Bay8EP6K3NNLd5okKixqMXwn83tpqetAnN8yu4x254ck3z",
  "key6": "5bWVmV6XbyNw59KwRYyWYHfVETgxRCgeaH3x7mMKm8e8h1JUhnfE6JKW3TzQy1EnYaA1ZFLC9MtvYgAQQdqWuQb8",
  "key7": "YqvV3ry2FRN4tULrYq9WB7hz31LrGhQNJDASnchoVFHpiEQyTu1sd4ziLmrhwR9AWJcBqBYQMErCkFMqbaQjR2S",
  "key8": "2eFG9HC63VnFFCtHiqqGiNc8Mj8R85r4gSchKwaSRfYQ5ojiAVvwJvphakJGRXT1UWcR7wghJsQThycUfvvrT7AE",
  "key9": "4BrrABZ3Ng5iVACFmKWWZ8hbhHff7XtyPA7QVDgPicNLLyWbiff4EP4vDHUH1t1PyNxwTpS6atJXUerdESWm93CS",
  "key10": "2wb9AcYVkqm57CAVM8spMtk82X6TRVL4cn2uF1nV49peuurEyNZbbpX68er5PH87aWzcgsw6gbpyZE7JZiN1voC1",
  "key11": "4hdmSen6AMCXu2xcz2nWAKrUhAe9wYLJVpm9edCoyp1VjWh6Z9DjiN5x4t5VCmAgngrf7aAF7ZQhyzLjxZcvJqqG",
  "key12": "4LfzZNRACLWdumsWh7ouaYDXP7Lgfrb2YEyz4XFwumQYR1zA7Ep5zw1ioUdeWyC66uQXDBrhnWJJ7XuvAaaS4f2x",
  "key13": "35P1Rvd8MrNtKri7pVCiPvaMZ6wziWQCTjTSTGzHihD1TTgb3D5nAkhyVRXvKnSswFn15v2tRQsP3UkG2kxYYfhM",
  "key14": "qfikN7yjdxyrPLB5TDTnYVFmhAS5RoU7DYaaroDBjJ3z9v6bQzXo7UsjLYuMEqGMqtBZASboQMfDA8xLhRZgGS3",
  "key15": "3bxxfpHX7ZT3S996ZS5ZhjAh2jj3rCwcCHsHg1PHEdDBrCJr1CTNWGrwZ3WVSpTFhWt1prgRBqJkGgZEvzfGzcgM",
  "key16": "Bhmjxx1wFMfyqZfPbHsFhQuEt1AiD2tp1UcNFgJ8ouhuL81EfrbTpsuGUd1nKhNvJJpZsKXMJdWqLxzFb8ECs3T",
  "key17": "4abcQk1UVmb28hAyS438YwPmNpbVy18CN1UvZwGZFGXpYGvHZVANqT4T2skNXutbdejkMQufW6S6fwTiVTSveMHk",
  "key18": "rnhopyxydGZkB6nRT89ZwjkK77nMduVby1QEoEXyyp7EsvgE8j5Qm1e2aTEhtuv9P4DDQ1iGWeJnCg1er5StKd3",
  "key19": "3FHuaM7b3uDgc4RAJ6ecHj2FZyBmMTcN64r6d9pcnMRtKtA4rK2BukLqfNsFD2FyuWrX6eTaJurj7PWrfaLAVpLC",
  "key20": "3c9HZxTtL5rGurjWMzKxKnkU19cerdKV8Beyk8MP6SHWp4wTvebak85EnsYFmRbHfMKeNjWNsvUmMvHjWadmbK6k",
  "key21": "oTmVKgMhYLgyX53JuxARWRbLnrufSH9141EDxpsH8raAvbbv8MtebtfxQ9ToftnDZ9t2TebP4uV2fZ21YGNQq2D",
  "key22": "49fHCZPZcuGMqKwZMDVjY6wiedv8NHWyaVGCJkknR8vEEkFcMThTcdtC7Pd5CVp5Cn5eqNeVdg1k7drFHUkngVTn",
  "key23": "5mnJP8pWuFXt3fbiYQ9fj8L8hpVQbVAZ3FeEbsAcBjjHdCjSzt7e7uxmasfz9i3LDXd8WzJE2K9qPoCxdFyM6zKR",
  "key24": "2wH1j7NzDh1FUVB7sta8dQMcNUcHU7udkanBbNTfca1GqXacHe99bKkS6U4Ehnorgs43Js6x61MTWvb8hPmn4UEy",
  "key25": "4ZMWVCRXpt6L2ZdY92gE8skxdLvzHrFVzWiZJYjxLJd2bbEG5AWvPFu8xksDKcZmkRRTB18p3JqCdfg182dbyUor",
  "key26": "4oTCRrz3TMXZX4ZYsFEdyQxuLMAhAL6vQzquEeGd5s3ULf8TvyxBStpjqoHNkbM6hmeRgCyShYymy8YF3qwp3aSv",
  "key27": "419jZLbMpedd6fR5m9KusSvBTv9Fa5zkbNJqj3vHvG9LMmeRK1X5oL4JdgHLyxhgWgdhQEHbwGU71Q6UDzTRwvVQ",
  "key28": "5G4j8TYgqWeNnXB9hNXzsrF3mB1XH2xmpcJoLhBLu4yVwp8idsAPD5bYXnnGaNdT9cBvdzVhxNeWc5dLuMd3rBo1",
  "key29": "3vQhy3ZmSS7ZDz7kNHda7DYe6vWsRt6pCrYUEJfYukMCMo4ixAjKNoWypUebHobgztM7DdK8wnGBzEUjP2fHNdwu",
  "key30": "5LKYTwDPwk6yc59ord6t9vZVvr8hH3fwNqsW9naMDxAfPFEMJ3fhho3KXaNnEEBiSYDLHtpeDSVaqcNTN2ovNSvx",
  "key31": "2jjzPWYGejBpZTWpdh1uJmfS9Li8P9o9c261ro2yqcvf3qZ3MB8d8pnpmUnvZXoMtv3xFnBoBVmCSoduXLu4vFqe",
  "key32": "H589HXaC6xjFXPq5FVcCUr6L7HNKhVoo4HnL7v2mtetWDT9nApcDoQUKkcu7nU4isHjByD4DBryX1szBR7Wd4cM",
  "key33": "2MRYhNmN5nZue9CpLeM5JTtkiRhpzVLSBPBmergBJX9pju1E9yxBEKtZaZLX5HzyLY68QYV6LiAuVtb2djmbX4ca",
  "key34": "4TbzVMdKyHysX7rrqujKRNwtpcdPTc7LnPunmwfrrHWnV1LyFWtNvQeKqmuZHNNUPY6GE7CAvvuNqeTkzsS5SoNB",
  "key35": "4jK12tSHi8tZR1PYrngZk8N1UoBRnWSruZ6z4kCYBFzeT118J1fUV2ENfLYK8vzRmYUX4zeQiHMkStE9ySumsqud",
  "key36": "3CPghxeqRMQvUcfmifRUPJqXRpVy3p2rnDjM2zFBWPXzyR2Kp3xWneZ6A3htiQ43ysnRJaCTij65QqTobSmTRTYn",
  "key37": "5N2Hoz58ZpJjypagFy9cusBP6B4UN8vYix5NGHmReaV3hzAtveCneLcbsN15CvtzyfLY2KDsLRV8cHdqmUCUCzfG",
  "key38": "2uncME2HXS5vzeT1VKKmqwotcoCGNcNMWXDy6k7aYzJJ3W8UPX4E3xzHk4CsfH9gtp8PV6vpb3eHEofyGDoWyQNS",
  "key39": "4hJ9L9KwLdgdDuewkj4k4eCXzySTwsKLcZLQ4HmQLCG2EY7YJfRaVL6wSsX2wFejRvsziH87mVVQqzVxrRkbygLB",
  "key40": "32xWbdHuaHZg1zg4sTNWLRz17PfTB1kcf4dLYWgi9u8jaJxaByGNH2KBJHcNmQiSiHMCvhZ6eWFJ8DwMTmYa3Mj3",
  "key41": "3wwinAEhsCyhbCaTxriEXSDc5NJvnRJ3mAfT8ebCVbtftWaRRNWYce6T9hBdiw7tWLbdQp4mCj5VzWww9y9ce9F7"
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
