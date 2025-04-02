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
    "5Js8BDzYJAEWJs9yv3avyFgJ34d9ayQt7dqd3DCSeZTcpv6Y7w2EgcrKDYf7xiPJsFDmh3UBCqPbcu81a1vU7p9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TMJPcyxhqF6DoKQSYScxvsLJQUA3AjnWDaFQjAunNkqoYk3nVxYB4vrUzGZxixQxsBS6uvyGxTmNhBARfiAi24L",
  "key1": "UXSxmRPwo6C4KiLnkFesKGMmxeYGV9YnG6JnHagF45iSBf3EM6dZopzwbvv9jG3LtCAXWTQnX6cbqHZbK1iGTZX",
  "key2": "4UAyU1B3J3hNR2Sv7KbpdMP7YfuiCMj1Ax7ziLEQWzRENdh6ZCU7qem2wf6v4SJ1qMqYoZjzDSmpyTogWm5Cq17Q",
  "key3": "2pm7jhdVJkAfiaV5LtTnjKEGsfy4iPYmet6WU5D2Eyr8bVxMqWpA6G7nUEwYQw7uWd3sgLXY71Hn2ViCyexq7rJV",
  "key4": "2BiJrXWsK7HJaAjCPRfeax1RgciLqHxTZsoJc2KCrJodzNpUXusVo8YTspCHZMc75yvzC2S5PkRmrtvT6f68CDJG",
  "key5": "2BRqzp49CSSHd97ybpUb9rzrhxmL1TdzcXHQU18hSFJfT5sMMRMDkcUHZ8nFgeXPrFkjs5jm2TvnkEHTKw8hRkip",
  "key6": "oLLPtsgYviV6eCy6kr64Eh7enJcY9bupNGAhMSoSdRxGd5Uq57e9SsLXyK4AA1RN82SLLEFpsgQjVVjb6JuRBqm",
  "key7": "5toyKJrn4k1bKsAGxUXv5AffHNQk3NLcv6As88XDACPM8b9k31Es7aAogRSnyjQU7YMo6iAkFeYbCQWRXED5dTLG",
  "key8": "49NB5Gz8juk4Uaofjz6MNtf2iquGGgroEKN4e4HbNAcB6KKrsDCQAQVSCsnDASSJHwskWygqxuWKYFQknWL7kyP3",
  "key9": "4fP68QaZUK8fp4F6yawgS1mG1MtzDBiGdrUkA3T3kJCYgNCD8HimMugczgeVphrxC1TQe2ykpH5ygFZeQws7b94",
  "key10": "26oBSLmq9n4rWioEkMJWazcfiG8PXuktN8T1F1UHCy35g4TkaMt6uxPQi5MBAWasKopAqiysYqcbvpUcB31mG7Ko",
  "key11": "615rQwZWfDqU6knKLwGgwDHr54Vvra12FoXv3ai9JCsrLGqdwiTxUAEkH41S2uHwNBxP2HtmmaWGvgPpLBxet5zh",
  "key12": "3HoAm8FFTmbLKbfB8gAKMeoTA6xfNs1KdtUeo5EeFtuKYJXhSMvvziVwx7bY4pz2B4tYt9A9PEzPVo6UQXYonQMS",
  "key13": "3eEJnYUKacusAUzrbKAQiERpStgYF3ikghdd5bMDFBYobz8wqieCrjgJjbmeSid3o4PT52W4PE6LRPY3vAxJQeZm",
  "key14": "5HZp4oNVuVfS3SCvzspfgbXdVQWuwgFRs8W9uPifTibNrNgeAsrHHT4HP63N7HYXvEf3ENKBc3tZFkL9oiCr7a8D",
  "key15": "1nEfcikGfn2P2RQKHtWPMgBNK5dB4MipaG7g3BaBVHmizfc8fod3XDsUmysjpwr1KTth892SjLnuFm8rM7s1mVa",
  "key16": "2fvibCEW6D5FXm6qvy3hMyECVwG33fmz7W5umXEN7n9k7QX5hxQ8u6p2zisevxsAaAQsV1SkVDsG4LyTpcGj1f6m",
  "key17": "D9t7SPuMJXDjWtgyHu3FsFJq4WThdXA7dqJBiqps9dvGjc3GRWcQabNeJFxHLJus2vF1WcWTdHL2GYWJuqnFUcY",
  "key18": "5hEBF26tn2ntJ8kU8pbRtTW46W2sNoeK3kmZQqQwqbJEFipsdCeRN4quEDM14e5ezsrGJDranZxFKDbrqptX8jX3",
  "key19": "8rze6QbpP2sAppo2AF2UF8WA5BsmwM6egWgKKCdsLsaGFjwMgByuATvxs4AxsYBpNB6mM2tZZ3Xmd44Azjkp5hP",
  "key20": "5umyhdfk2pLwFrQqhyZSE1WrdqyFCRhjfd9BWeVhmfrrBj6VR7D7S56LoM82JdWJP9rUNWU23ocghjUg25ZFXw4V",
  "key21": "2Fue89deiSzvkSAYVZXEAz4sBQcocV8gHS2nHFzMEc2TJFwtCXpFA9UwKJaxW4qRpNweEDKZc3Lvauz2MBzH2Rxp",
  "key22": "2SyYmZqe6hfAxD8xMgiotYsx4vV7rXGGCfbUN7MJjBaJfC3QsWd81mrEDzV8CnMhiUZQPRu4n5VxK7N1pVDspU2h",
  "key23": "g7EmRsNbnzQYb75ixcz1jcNVhS33rW3v41bY8TRCkT7GDFiNTHWeMkKa4v3ukEeiCnXjuJ5o4WNmU4BX7PVNKx5",
  "key24": "3KTK1XktrMri7MAcyeyus216KzzsFJgsGGk4FuBgYxzoWVG3JP95kavhPCVtg1ZXtcVZhtHne1YtMG1YxTMX9w2T",
  "key25": "zDymrDg8BkCVjfF5hvR2RGfpwD5mBh2YqyCu5usnXJeJjtEbZeWL4LiDn85VxkVRAgEGhgFQt8rCrDYNGQmaaMU",
  "key26": "fntsHymJfrnbh7KXNeh4jUrHVQhehmoQaq3U2vxBgBfJMeXx4ETmvDH2DBBsKacSm1ehcR2pwPVi3NcGftQsujA",
  "key27": "3xbfsZP7JoZCMzzZPjnghJGXGCgxV4qBNdk31xFAGSCF2yjnBLM2v7fMErRUpdYDR2ekAtXCw3ftzChf9xZjJB6m",
  "key28": "3yAtnjT3Vg93GpdfddyUZiBZP3sxrdn68chURpPp4cMkh7GBJaSrZbRJ6tNC9EszGyUAXmkNMwecJWLsekb3Yp42",
  "key29": "DdLMD3JKNYuz6PmW2a3GiwKMA8Wp9qvcQsHNeeZvGU1kTunMgSA199Hk11GWm6SrwEUrEPSwhEMv8LjW4k6MDRh",
  "key30": "4TkNCq3xDyo2vdgvvEc29D8BVqqFdfpoC5imJiUH4ovAS7Pw3FpVjaaTdbdWUyrxFUgCywWZHADDsDWSjxFJjK4m",
  "key31": "2JjzJ6eHd1HUTVhdE1bED2aHmwyNt1W34hzPtcMkyAKEy7Raz2uskKTQ9jjq2t2xKZ1VDtm4iPXhQEN4tJYNBMkR",
  "key32": "2fJBs5cxR5UaqoWrywGfrZFE5t6KgvZu45nnC4vjWWQ3oEyKiGnVzs48Jep3AwLjsYk2SxLcqiYGzNE9YuGfwSVP",
  "key33": "5DwZq88XXVesjkRv6dDc2icPxmFH4NpiEHEmt4XLbtBmskPB6iQK3eEGzX6hFwTXopb8B9UZ36STHTYQryUc7nJY",
  "key34": "2qtEb4rF6toibFKdHsh1hVL1QqwLSG52R2TLEZT8KRbE1tf5ZGAD9XEC5g9Kk9xzF49ptZ2BTGWQhgcpUa9gX99b",
  "key35": "6534h5LVP8oqkVdq4BCc7qhYD9QqqDg9vNwdjEqGyspqexXJUJ3vj3gREaxey4zgFaDqL9DLLWbkMUXvoVxXzsWU",
  "key36": "oDBq9Mkrp4jQmHSAUu9ACiFUFZiqdxgw6sm4mtwch7MpBkqwMXPCfqRKtzdKfoyzCAvMrnJ2K7zLbcDpaB3eaEB",
  "key37": "26A4qBDSBCu3hbxHbA7YWNRNTvAhBRV39dgdBe59AWDT1q4GRKNWTWQE2QAFwZ1eZjfNFTCJoaPYAodzxyfKE5NK",
  "key38": "3roM2jQm9aKoomogyMctVSfw55sWjsY87LTqGQ3ocZCms44ueD6VQgZRDW9RE2iSzYWyhTasjUwoL626y4ogXuFF",
  "key39": "2wVJ5tyNko2AMtg1KyxgYbu9LyAaonf1ghmvhJnqcwxQTDDnYv3LXqdx5PU8boWX5ggJ3nK1uNQuhZf6Naix7fPk",
  "key40": "36q4yYquQFi71rmswNS69KHCPoDNZNUqeRKWaW3qyzMdcc7zcsj2HUsfxsMYoh9pBdnBTH8aHtWjBnbCWk6dC4p9",
  "key41": "uvhCdywGptXETAC2XGL2DEuGBMLWRZ3pgQZE4JjafHYPWR3cww4CAkAX4Bx2Eq14YH6w4AjjGXNJJLZvPjraB6e",
  "key42": "gd1PDUiELxujG7Jk9mbisTvWRxX28T3TAeE6jbBy5KX87bB4aNrtqmH9VG9sArjwQazPqFJRbZt46rYLUcPGPMm",
  "key43": "4WpzSodJc4XgLTRhZpCvPNRbCd9LXtDbt1aMnfsDfyMo4M2tMAP7zQ93DPAJ8M9GYUzDX5aC2DcNX34VbnPczGVm",
  "key44": "21edcgmuv771Jbp2CASn2dJv8h1Aptb2F8ZKe6oFGVReGb1cXo3PEJ7XjYxbd1K1Eqbn9MeasDqfDxysea8aX9NJ",
  "key45": "3Fq8bQfQKxUDtUPCv98qPRRNjBUCtCyzrrKBK1ebc9nZfUvZ6Zj7jvJndyi7xW1Am1AY3HaNvgD6YZUAYze3ibQc"
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
