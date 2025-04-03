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
    "4zPxqT5qkyqFqBgwC1NY5omLpQfgYNhVjv9CSmzXzUDLQNyhv8SCvwPgjK3PsRi2ZU6R5AyivHdzDgzQa67UzpmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvaa6gadeF6ALy78u98B6U5sqNV11Z1P14D7bLfLG8AmjiJKjkK5aGg9SsLQaBGZrS5B4gcMusj587Ng9B5eKju",
  "key1": "2kRprhQqzZ9CPBvgxsPGMiprtAHLrPSDEsGgKwpF1bGZ3w12F98oDkJMvvaDuuy3U6SwNCLN8yuMCNoa1tLEPmtq",
  "key2": "5VEPNAKTNLdpFsTcKA3aTjFi99XGJk7HSQQS7pxVxT6nr2aHM3AYvPT3g9kYMsPhz7VRWsuMYRNCp4iEPD19huhj",
  "key3": "65Vf3nkVbwZK4UqP7XwJFARgSvAweZSzK31wxtDtCxNoRer54oeHNTK4K4hBjWTK8pQWeZy7cqNFrCDS5eKLxcxu",
  "key4": "2rXJWif9erh7DXrnhmkBLnFuCnww7xY5XtGeiDghxSLGbZYL45898V51AXqkGsaEpHQuUhAgcXMyydpA64qDwJUi",
  "key5": "4PVvxSwX2faQSTnUk33aVnY1VjJ1VoVJnWP36MoZAzJKx2Bk7NjygrpTeRbwZPf3qGQsjEnF3tEkFFartvBUpamP",
  "key6": "5cQST7vj8suZwzT4vPN9SBoG6MdfXRokPckgDdL1iRj3AXvoHDKjx1wWgdGhiAiSZz19VtWjFKjDRKuYa1yceyKq",
  "key7": "FoK6u1H6MipAYx17gGBdACv3WjyNnEYS6345tX6iRUsETWYQXePkmSE4DzvJUM19ZoNgec7cijVWhYVpQomw3tm",
  "key8": "2yQEBJTsWMyjFxCSSry2h5fLS21if51ut3nG9X2xqm5KRaK7WYopiPZe6yJujEufm6osggd49WGFp3SaPtwutGjc",
  "key9": "3G6fom4uE69BhpS5jL9Lrgd48ubPgNLyfdR8hYkJEtKjcZNftVV6deHUGKjfL4pckW2dFyDmb8Tgqu1cWDMJdN8H",
  "key10": "4LYLm38GHcHdE2bLwvs8TXpG4yavzKQWNi2GFuzP2TD4mN2ubsiT8odK3ReVMXjzWa552c9gKUbwTBoUGTNFCa8U",
  "key11": "ZhvRg5dAMskrvNuh6sgX8YaidRVehqU1sTJ3Tr8Gzpw45Ey3EbL8PMpL4ur62SSgKdQitaHkUNr1daq9YbFfH7G",
  "key12": "633bgpYdVD2Gvx37g5ttgM9SqzisEfV4asuCUSLYV4HqHbyBBfEWAm7Qiqo23boEZ4N8rSM1Mg13MjMae1JrpXZF",
  "key13": "3BxdCSGqNZqfXrXrg1qyTMREABjFqcZRjRdrfgmsP733GErTZe9Ne3i7gjdgAjmmCYkn4G4boTSiqmEkdvYeSaNf",
  "key14": "3kqBBPUhXdsfJ1s6cYaXMMu5HkdRiFAqrKyzrc2LbKeGiqxFVUHzY1SdGxgd1ocfYLeskqaD635hSBxEJEkXT5G7",
  "key15": "2d6H4GHdvPodM1VVGs7KcbyQ4pRWu6VJo8NPM6pLsLjmhqsxoJgaghzi3LBh6euLCQUnhdaKi1QDXVu3dZhbx4WZ",
  "key16": "3Z2fgDrVkWxUhTj7nkzZqQ1Y5q9CSBjoSUEv2a1mnEBh1JgUyXAGrPVGstY9gjV1PL3hoGy9n8eifyhatLF2zRAa",
  "key17": "6353EnsfBemaemYWBLTWMsLF9mxERnWZ4HTyLybgqXxZqwZ6ZaqHaMeeWu494HSkoqDUuNxMGD8cHV1LCXPBR5Y",
  "key18": "ix5qJFtKmfpsvStoniDSVrLe9NufZKCMASaP6VGzjF4xcfhqJa3En45GUSP7Qm6xsxdVTuJxmML7vyXWYz5PmB7",
  "key19": "5fjoCgsT4xAEVQWpv11KEbQstD1gMXeEq2KCLFrpvc3jtSXgw8Md8996m5q27dTAe8Eof6gzuLbLPQpZJop9oWiM",
  "key20": "4cQxKgths6PvRVNENkafeZxTGEbAvEaKP5DrcCDyskMJK4p2UGbpCtcnDee19U7NgNxKwmbzJPjNr7eeX33XQVkv",
  "key21": "zWwjJzt5aGb3Bx4HBoUeczxzAPvfcehQLrbsK4ihhHEFnGdvnn6yUWwieKM1xcTvGRsHty7KkQXYRhpMsUZjZQ5",
  "key22": "3BYsCKHdvd8vEYuLQqyafJdMSFQKLeC6aD375A1L4rMyxcSVJ8E5tBpTNBgXgb2PfbVtWdKQr57FdDmxnv3kU7D9",
  "key23": "2PhDfFo5pLmtvN769UyumDQrnwEzNyhbtkWHjQsnhtKH2u6Vna1gnunDL1cj2nZ2wX1eViacQQ14WdjFWEsZqJrA",
  "key24": "vDb87ibZ2vykBAU1EbZQjZk417qjuqjAv88nFGdEyiShomXq9ugUcwmvzjguNCs2pnduxjXT5dftksG1AxXi95S",
  "key25": "4TEaDUEU3jZMMkoxvcWFJjTotRqvnAyeyi6gdpvxi7RhnH3U7yYJ4oxBQnGMU51MvZ8rmKLcB4eRMagKmoaLpkJB",
  "key26": "3LqnNig5NoLRtSr6DzNhF5BNaTUywSGXn37oMqs45v8aX6uuSVeZciR7K9kDqUJeiubWtd9TSb3qufFLh42jvF7n",
  "key27": "PCnYZSfiLTd7UNnBojGKZj8ZvqQ3xzXM5zf8rqPSnbeV7hNMX1xC2aRadXFSzJTykhmDDEztCekdBdd7spW8gaX",
  "key28": "5YPf9c2im6x26C1x42XX3PjXb9qTRCyLjyHutbuaABZtxFZdMrSDW57sceX25aDWTA3JpN6AcQxUPPktk9CpZzTF",
  "key29": "2rdKfXg1nA6bKZawVHt2PWojdXAQdxE8NzHLU9i4nkA2RQ1f5xmqfDxERFJrYJFxGVZbiQqAcXzsykKn7ofv6DWG",
  "key30": "5cmKC9mjmwvz82dfgUKf47hm4LYvWQytwgH4TtqRf76twN21utFx6jC52AYBdSzJS9Fqi66o8MCcDYwkGcK49pzf",
  "key31": "RipAAN48wvgK6Uy95eGeVqxZAvQU13L5j5mZnFoSLwsKmkjt95mZLGJZDyMCew32v6NWEoiwt4LRkujmmRK7wFY",
  "key32": "4qy7hf8qC2p52E6TsvZzRKFgHH9sEwYpYrNyHqRiTQzdsaH7CSRH49KwYBgusWtZiuQTS14x2TLsKwz8A1gEGU7K",
  "key33": "547hF4q2aeo3DARTRTaygBL8PBnw5GEvkm8cSVadCpXDzHDYDWhFdNs6TFzkzLfMDzLdRB69aPH6HmQLobQa5nPQ",
  "key34": "2yMPRkDQJ715yt2d7covhi3WPzXscetUbS7j4dSofYk8u69MwfU3KP4FJnhNiLbMEivTBbTLt3Szj5MJTbEjXNtR",
  "key35": "su3vRqk6QDv4R9L2C4zdkHkLfr4uaAb4JUidyfijC6kXydFdRraVoEKzC36YFF1moJxa2uCbWFnVDVBZqpUzzUe",
  "key36": "ekQh6GeARtmTGwd3f9VU5bCRFa68oUkNHQa9RYz3YRrFrWuXq2indTF9NyiRtGMTDajKUky186KUwdKnE8UHxBk",
  "key37": "4hyjiEntsPCYs7Ayg67ReiizaZrgUMJXtgwm9JudCn38bZED9hD87bkmsKyEY5MeT6TYJhGRjRjctUmVxV1dCagy",
  "key38": "5LekxiVrw8qdTTZdNhR6N7cvkr7Rt8aQxYeBWi1qBasUqZbyiAgEKgcdzu2mU1WXdk8jeyfJXysZ9KnrjPYNdPgQ",
  "key39": "66KciYxDp2FDGoAhV7cBVqTfh2pbDXZWRhQHePZ9UfkCmeBEXYBD13zmG7drsw147vvu1CMoDgedopuXkQ2kT385",
  "key40": "3SUGKKorNaURXY1xfnYbEsnMQz5xu1E5k6YvyEXkZeP7aiHGveAvEQv91cedXgKbvjU4d6vqL4NLuDiw4ru2waGB",
  "key41": "QWos2fFvmqRx6E8X5MnSppHUzfK2Woz126kjVxdg4QfPaombhj2KYy9DPszUVN7Ube9mHQWNvRwkyFxwsxXZW7S",
  "key42": "5a8ZQoVSkTXdCdujjE8LhNExgMSJEUxx75UfBiWh8KWhpBdvKFU4mmKWwWY6PiPwFpmmdiK8owscLgXaNgHvnQFh",
  "key43": "4435BufzyfiriKFCuMqLdLGAKAd6ezEcMvmbiXxKNjcGwX7MhkxH67vAXQ6Qkhb8ZWWeTQvpu7WNZYRqU4AzyNMx",
  "key44": "4NQvqwx6KmyAK4sFvdLWQKSF1EDNA8eKFVQmnnydGcjij2W4N3WBemPzBrdYGvfhsiEL4BVHGA7r2o395xVbkS15",
  "key45": "2s5dgHzXfcevhj7srrATBaQYnvWWe56EvRq7dyq86MmhyJoeg9JkMGhggZ6Tw8vLUixoSzPev8VD92Mj1KGdhLUT",
  "key46": "5jTtpdHUw1snYpYdZmHXKvx3Sotdy4UNGdy1Fyys3Dn349SFXJhfFmqrvG36LCtwz27DP2cfkm6HWSwycQLfuKN7",
  "key47": "2aSTD7PAtJaUkHAnHiHrQBGfME7JkaTJPvr9XQ6McGKWReegazpYskjiKmb6Q9pM6iyAvbGT8uTwTG9J9sdjwW2E",
  "key48": "4mQQopNtgQu8zSm69uVpLMZddm5aqAESjpx22MnTgDrj81o9t1LmQdeS8P7FfYCekHCVojN2TBvktbCvV8UxMQvt",
  "key49": "4J3jfedZKrCwnHtLiiD3DUsMjywxaA2Rxbd2mTR4oEyN6u5fXosiiVj9USN8rVVyJSBMAAXbCMvFvjgTBP4me9wj"
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
