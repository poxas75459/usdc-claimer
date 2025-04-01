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
    "5CcTubD6SSMEnm8ZLHjjKFE5zsTMzdw1d7wjXteWGtcr7JdMKNa2XyBtTzsckxeAihNE1Dt7ysqFgGTSVttHYPYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lg2TJk7a51Y7SG2ELQFxv8pxsrKUZWg32PXSBCFbosCV6NxKdHj2K6yjbcR2vV7Yfi1aqcSe7oKFyxiAPjVvfeB",
  "key1": "4Bw2B5EMUGxTAbGBJCT7eqEFw3Wh2v2VAPrG8uNCXoDyFiDyjUccWiTN1Zw7kPTJ1KjEds5sGvKJvEywtkdXBZrB",
  "key2": "3dwCjKktafbe5aQXCBCqG3Ah3mTFDmtfxaZTuZe8DyR3ZZJKqc6makKhtn3UNpq1XVTfxiNErJWghxERvwzZU84j",
  "key3": "2qrhuHzm1pkCc8KrAicEimKb4Cyc3t7RiYpS2bJy4EddmFf8Wj8LHihKHQXTgWkAdErHic1ywzUVuCBjT1qf4i8J",
  "key4": "64YGVZvzpCMRfWZ4hRxzVztCNQ7R6xFYsRcmwiy5jqaLbUFiojTk4EU9XM5dfjabN12XJ6cgMLC5xbBAhha2Tzza",
  "key5": "23PLWJGGBiaCtW1a5MWyhdr5mLeH5kUbimPn4DAxaXJkC1wZw8mp4ZDVQLrnU1oL5ofSBqzHd8kSCmfSCbnAMGzH",
  "key6": "NKawc95q366k7akS3eVqGXKFYTaMVG9Dvzwk87CVQDpToRSbshtJcxCfc8k5aGtJswdSAbF2geeohoLhVLfACoJ",
  "key7": "SpY62csLKUcVukMYeWQhiJP5wuLqwfT6dg17jSSh8NpGZgWco7eLkuNdGeFFvVcjwgUFDi4ChbUVXT2tmtvwkVN",
  "key8": "5paaw4g6rHsQaaPhqkvEx7HvBYBCqBywdizTXCBjhoibB4FgWkfRhYBwpmFHSoniMstqPTRNNVtQzcu8EnXfDHxV",
  "key9": "3JytcYJeXnk48zbSqU9UsLqgSiu8DemWCWT746xErTph9pjoj4sz6gb43KMWeS4Fvzcw2Z3SAVPz9mg2B1U6hQur",
  "key10": "5tYfm921gVHF4Vk3CDVjk1Dz8pQR6seBsY4uhqU4bpU7GtALFWKfHggYUt9otMppVdQhawzR2MhhZ6K9wyLpUczD",
  "key11": "3ve8wh7BA3bXfbhtnjbZgxRKsRYF4Ri3LfF8pfTzHLijNi9W37TEqHwQ3R6EBT6QEg8XzmfpMZx6zmuU7YMczs32",
  "key12": "789RcB1Ete7Mze3AzoySuV14wtFAEe7zG3DzpaNSMGHkHATBq2wei4EEEWuya12JH2WV2258ZQBCUQ7QxsC5jzQ",
  "key13": "VNaVD1eSpipXZbuLWv7MyNz18VBLY7BJgHNyMLKdBGFX5q57ewGJAHuksnXsaYKmigBNzvsDhGgVagHtoUQg6Ez",
  "key14": "46qM1kL2exUmrZsAt7uCMH1q6KqHgvTyuJjshQWYH7njgVTSDh4gee1Xphjoqbwa6ajW1k4XrqAziunTUHyxrZvh",
  "key15": "roJ5j5DXhzuCveiJVRpwkgLRiurMVf26smhsCxdrd65Th3uEMqKh4f9swastmYU7aZxihPVeWoYhEKZPP54K9Yt",
  "key16": "4W5DEYescC4xA3yqvhCfuGdw17GXPSx16hpnzBZpaBMtHvZqnVvQGVspeDpkLCkGKJYEP2TBAUubzddt4ue41wwW",
  "key17": "xQSkPiV6fkWbGLiXHccAbmiMMVPgYJMCdEcSNooWjXGGHDBHxNVh95Wt5zcwEo9dDP4JNL9yxVE3nhMdqukiFeH",
  "key18": "5xYDTeHE4ULbfyXWWGB86uuiVZNyNUxpccuBECSR4suoZNuyVo1SoMwYbHZLBvJhAuNQJhifMGqwprs2mLU4SNsx",
  "key19": "3ZQ2jAiKqZ6vp2vu3AQuQE1jgF23zeebtVYGAa9yUfsDL1Kv3zeT28N8469w5k5xGeauYHZwpWpQETTgbZyh5CDN",
  "key20": "2DTwuBJCXx1sxkWeZccMobtyiQKuKaHh6WrPT3t1ymDVmTE4PxA4WKA1VmHBMX53Fx967YHd6Kh4VVPBySUapSux",
  "key21": "cNhLcF9RHMnBnwstdTxm7BKc2AMjTDe9njSuc9mHCwaCHiNEtWKNnMeqTcUfgQCd5D8GuprVwEhPbwcpL1XJTkY",
  "key22": "3sS8HDU82KcfBSgXYUvzo1NCXZVens3PnuP7z7kjPHMmkqhS4kAnqapcTntixYjPEwkZKNtftEQeLhEYev8xx5kg",
  "key23": "29CCBQPJDfkzupZP6NDP7fcNxwbnyavzjcMdYWPVSUHGi6NxMW6YWamJKrW8XtJL1L4Y8zwFfDfGiokRC8scZNp6",
  "key24": "4hnh8CBHnAJWAw7trFHSkHoBWrbAaFKBMKoxiWn7popdEmdRjgGenc387ebey7zBhzi32VvFpsgYKw2xudGztPeB",
  "key25": "2dZHGaE3WTf8iy1RJJMAQx3j93qBMwE3mCAx9TxboLGUUZ42XjfpRkVPqwjZosF2sTzBqKupFgkGCa72R1rwrgmA",
  "key26": "56v9Fky8yvagKFBynzLuBhm7JqhUNnccQmktNBGqifuFmPfU7fqTErUfD9vxze6PeaE5D5pHWhRqRBJYt7h6y4hh",
  "key27": "441ciPdexk14h6E3HRi3K1FXNcfoVGfoemKScfwAyBLQAERf5uNCYRCRcvpJLS9rNMFjDqhY8iXXoKpBSL1UxzV6",
  "key28": "4DGdMbk3ReCJhiKa4qkxHEgcSnjBZBN4T3pwitSByY39hkpw6mzd7kSm2nzKwDGyowVbjT8mX81iEGFgvhV2QAW1",
  "key29": "32byPdB2XfUh5eCsMKsZ1rnR6yTwyUyJew64jj8bzr3nuLJsws3Vv2mtDYKfCkk2fNZkgaKfmYMptzdWB9yKQcLv",
  "key30": "57iBa1C6BMXXdhYoWmWEEtTG4dZ1GBeGu3KoFjYpCBduSyRjiJSFF86o5okrRWFukUdX7AENU8ujcT16vWZnYKQ5",
  "key31": "4MsgnHaZEj7ribMdSESXB3r4pfX8dX3CuDfKLCSEYFJJGqMQaFXVAMYHnjgh6HDHZRrSXudYEEYR6vBPX3uZ2to8",
  "key32": "5hhUPJu88nZvna9viiFUjYHt7WscXMefwM6EeBGYbmj2PkzxRUVnMmqQsVpCiQMhZ8oTPk7AAwr6LkKTBdMq4YSM",
  "key33": "4zekfijfMc448YiJAYiFwRDABmApbdFJUQ8gPUG4toKHkNfyvYnNY8xNEAoyG9VqqsYCcQEh9KADZnRsy5fpK2LX",
  "key34": "2MZ6B9CFVWy8u7QH3EXaLbnw1v7tmy4Zpn2HVt9J4i7DgsrnA9zkk6PGyUAiSBhkiAXriVAhCjMuYjK7es1LZjft",
  "key35": "aNPKNuzzXwpeBctWJ59b7RiqLsHt8dH71FhcBDapM58n2Tub9Vab3y1QSN5Km7schaPhXgTqndgB5qdbsAEqD5k",
  "key36": "2ertKJWU92mjMfXA5H8Jt3gDMPT2Hx636CxxbtfQAaTVenYoyQ3D4QVLp2jCiYVkPr7BZi6Jnxqy2iZVyxQaggqn",
  "key37": "axYvQeJi7wnaFNmP4ed48F537feGFyoqZ8uyMor45WPAwc7wNETcLoxQjFEPF8ZrTpVmgougPNhr1PyZFxYAGnD",
  "key38": "5gzdXUqnXNyPNMRKKx3jj8DhjNaoF2cBuE2mtCnfth4vKNpExxVrePrSrQjqUw8pG2wJWECS9A1xx3miUd8vLLJZ",
  "key39": "4YzKYkRL3yZ18qeyXhNSYUJ8N9szBo5vWvCzG7U4nvPHJjwePqYA3EqNiCdwy8C7ZDSrcHv4wZnuchJA1EjYP7TP",
  "key40": "5UmFAgRUdhfdaS6FtxdfYK1AfH5Fwj2UBmQwP4nyu4Fq78pr1aHtUUuCwq8WXjmGbvDdNi2D3WYgB17PxLXr83kC",
  "key41": "2Ln5gLMPYDwUdwPS6UeF8HbwUfvC3uBzE2RZd9iNR24AJRRGRLc5HCx37dSKHLjJcxaCQGNmrNnqryUdL7gNLDB5",
  "key42": "JHXmSRLUXoGDPPnfwiDrSWSWypsG8LEpuBWx6MS9Q8SebKESYxoQGZRiLumv1eJw5tTwoTMVG3dxcdcobQ38RG3",
  "key43": "Do2Ykag8nMLqkuzxVJWNWK996q8AoEGRGvyC1RRYYEjBS5YsW7f9R1YWyNsAFoirHoR9ew7oq6VTcrDzLKhjZhH",
  "key44": "2nuttSRVauBAFiJA4Mb8oL5Z8yrc8D9SXZR1VaXm2LkThBRWytF6ghTReS5wFYYRJV5zrbyVb1NGtzx5dNZZX25Y",
  "key45": "JnRScbyqP19xu8a7cVkX4B85CDzPxojgj2qfvGaCMSe5VLy28YPdiWwPJy5hLq6W69LPtFgchHCo1x2HMt346DG",
  "key46": "dQQUTDajKK2jRAx4p8ZJ1qPDGuAsh6GFSUMf9zdLpYttdctUZMqy524b2n8QT7k3TKVkJ2AtC5HoYeYCp6psyig",
  "key47": "2BzZLGR8eNraW6HpapGUZ2e5QX6sh8oHM3DQEBHfbNhVGhhQs5AdU7beS4aSf8eifWmPNf1UtXikGSF8zny58mZR"
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
