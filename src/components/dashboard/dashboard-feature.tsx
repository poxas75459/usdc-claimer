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
    "2MZUQnj9UrQ9PDrou9PKyfanShUhihX4AsbUAJVvC4ZCGZzT5NgwhCzHCdFk2n92xLZGj6ddpZU1BNjPcUnxn9nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZGrgm6FkFKoZowbEWa3g71ACNHt7VNJi5cUj4YfHX4FXtM1qvaii3g8hVmDkfLYeQVHCLpFswBjj5anicE4BpT",
  "key1": "2SLPG6ZJXjsr4eDSHV87njfTYC3HG9xQATMgqKX4EoK8cKVBsgFv4LLFjaSkQNayuH4PHk6vHtb9UvFteoeNnzDd",
  "key2": "4vfd12GPfVez5MMVMVRXbpKrdrAuWdG563hvTGb4R2HAwi5K3FVKcv3chnCdHDeKGeBX5DrmFw2jMoDwNppTqLk1",
  "key3": "4brs1xkY3vCxJr2c47DWYBTLcXLi1c96TuEXC458gBULhqEwT4gzqShYhqJBgth1RZprir7Axw62DCUUiDMCNNyg",
  "key4": "5w7zSKiuKjru7YZ3C7tj3ZxvsL63X82c6W919TDP74FoMUaY6KPrCoUVNYzdErdryTSYNtmn2BEfdmN3G2juG1Fu",
  "key5": "3T362hc1ghV6CfjjKMjS3m5nVCqMezNo7YGfBq2dVUZRmhV9jakRB8fA2WEEV8eNgjGFNNtUyRLg1Dk1A8QKd1Sb",
  "key6": "4FvS6pm14DiFzLy8WgTrJBjjVpmMP9HqWrkF7GAgm7ESSPAQoCG9VKF4WhU2T8zPAVgY8kJ76NJ8cp847GaNVC5",
  "key7": "Hrig7rjKZspk5BSkKtrm5drhetbbuJXmf5gAbUPezdBbz1dAuHrjxDSJu8Dq4dnY3BEypowK2DbRPP3mcnMbQkb",
  "key8": "2XWVZf9tfWptpfmcatHiXK8cwYtfL46a38rwMawnzD5qYfPrMEuGbt6J4hktv192k6tdksgma7CNZ6T7GShVgBij",
  "key9": "3FYuPHBJ6sdT7nyrghMVjU8rs3immZk6DGCckfKKjbWguUSXWbhFWBBm5oVtK8UfLKXGQwNbFa7thT5KBtMVUE4i",
  "key10": "GAuJLqjEJrhpvC9UTmUq4zCVShFJ6LdWvgcppGTpnV1YkWydTkThic37rGtxqzZPwbkxfLhPgPWfQcTpse2nkJ4",
  "key11": "4gy8KmeUxWEGaNZPNxpktW71DS44rJLpbQPxwBQxaud9KKg79s3HopVmjzWGrqAxD2tQCFkTtfuFVT6a3gWKhKRi",
  "key12": "4RG21EDbtAv4QMjjuoeLygLKfWMN71d5DDkqLiJmhUghCAE6N1Yc7YTjSkwZYp5W21x1RPePe98vJgckGP911onf",
  "key13": "62KL7U87kYDAYJjMhTjchqjzJL9PMePB2DtxWPFh1d1jvH9qW3GApExJarMxQh5wFoJkBN76B3Q2ueRfNrRnFGGy",
  "key14": "378cREACDFqaqja62XW5SKW4JoPoGsjWUR49h6PAsK4EX4gXKyTnUYjgMC1ibuyo4VwwCFMLMqPEU66psZUg7dke",
  "key15": "2fpVcH2LQvAKKPnphtXd4bCtQYm1jAYhgaMA49fSMphy8VkquxAVN1kh8ZtFmWaZvazFZi96ptR8HEPbdb3HbRyP",
  "key16": "2E44BK19A8bxss8X5P8RQhgZrgUarDD2hKyAfeWKgYy72WMLq62MB3KGzCegkTKJfz9MMXrvXk343z6grCoD6Rj1",
  "key17": "3qtsiXdJSanUiZiGMCCrgU4By3UxfzVy5orv44SkSfw3F3fxhLHsrxuohD4myLd4ypQiddV4DNBbupqiL4SsfFiS",
  "key18": "66aJzdnXRnafgk8AkSGWmUaRF4AbzyZzikzW4ZwN7CVRJTiexPkXfqgAeo2qQ7pzzhAYTMm9pwH81EQXJZ6e37aL",
  "key19": "2BFRi6N1WYPjH5XTKs3zqS492FBkLZsisKAPmyWMb8A4WkPiTQjiF224uAkkUrNBkf4eBQKBmtkJs4ygmxWhRJMe",
  "key20": "5zjHNyfmE4NtnvzZjUKzGjo61srzRxm3ryMrJQsZ7iUtDapckkzTfpAZ9pzk8S3FnCLXN1a4DvWMVmZpy1wXVfaw",
  "key21": "5GxgMRJjSeicg27bYSWP94gCzcFwNRnNRkGCcsmqesKXFcqL3Q4PUEoVigA3d4ocXSEUX3RETbhmPGordp3NZUX9",
  "key22": "2y8w4JxjK5GPRkSwjBdJ1DXHMwcf9T1Qfpf8JhaxUj4vT587n4gj8Xufk5XLaFKiwYmsGarREAVyhjGKLsidXrDQ",
  "key23": "2sQQQ6SNCX2jM4iVz72rb7p8itCjLUGyzxF6Sz925ChKs3TKtxoL1NaxMjR7693BzquAvCYPPrfhwLrgMT7nQk9r",
  "key24": "4npsF7o3AW2jtZNbmSCE2sM7BgUydmN7feje6btStJhT4X5MadVjdV9C1TpVs4DYBFCV7uouUTuobZJ8UjeQbrux",
  "key25": "4fefqvV1xM1FA3yNrScd2G6sBKzijdBcZxycxPqS3LQRh7i5roU8A6o5Ak4s87E1cKpLnPEcJPTs8MvcaCVwMDz6",
  "key26": "4ZV1x6V5N2j12beUDpUm4H8K29yLbDuv86jgdSEDHStt8vaPGB7SX7NQspJJUeJAPbcaKbi6cZhVSrWLfPyoKnQs",
  "key27": "3CPTjavBfRakd6nEAZqAnqqUDFqibMD3p8ZX5R8X7xM4zFqmJSrYEbJBvRSVQe55HX38PzG9ZGxC4kL2oTuL7Goo",
  "key28": "5EBHzn9kGft6hhC37in8Ywapf7mxhvvQzv8F83H6Z4gFAyjPbpYq7om6LBB68MCRw5aaRa3Tixr6wHYU1urTgyhY",
  "key29": "4QWgTZHZFwUNRV68hHJi2pUo3s4aL5FpdcX1T7gPx52Ju9EenpqN6QS98S35qfV2DBZy9oU5yqrjebpdabJscbKu",
  "key30": "U1PNPcDhPornkD5nXyNJo2wHmak3nduh6UootaGjAtRCPFV6UCQt8S5gWRzvM8YTBWcCXGf3v7LUinY2FR4uatK",
  "key31": "27KmKJncaiqrpdhvhdYtaKWqpzFk28DGsDUNQqX9dHZvJTXgfvecKQFRD52q5e66KbVNYKxTGHBbisYK6tzFM1mH",
  "key32": "2aPVE2vuoPcgz2mzpxAxvhcWZEMhjsUNKXbXtQFh6cw28vNaqW7V2WQhN3H4knKbwHVmYgeYPA52jMz8k6SdbFHD",
  "key33": "4nsDNHPD14VciCfTuW91LpLXxJBoyQ15aCHeM8yNJAXbWDWrSSSbZe61vifCnQducv1UsRQ9gMBcc54PqDFf3Djo",
  "key34": "npwWo3ifaj7kPeEpzS4jH5AxqYk8AqgMvS1LaQaB9NiKV3r7krnM7eoMWePo4Kf7VyAzUGfKbS9JQUJBB8XkdAb",
  "key35": "KRi9t31abWNR4uBfYZqs4x4YFGetQd8xbq6VAQGWhTQWXrQaGAEuCfxixBtFCT5T4VgjyHMhDoJzneRy7WaWrda",
  "key36": "5oefXMgzRU9twe7mkdDZXU3rf3qoeAdBDSsVFc5eYkV14vyioZQN4bfRwKUsCzqzoa5yKnd7VuiUth7mDbGa5xpo",
  "key37": "34ZTjMhF7mX7KzyJcXh3yy3jj8sGArkmtt5zyMH9sKCeYzSphrdRE4XxMiybDrnKzWoMjyKWZwU96n5CzPGbc8tJ",
  "key38": "3Qf94KwKuevAHxujR6EAr9HuQX6eJW3Am8dFgxV2BVM4z2qRuhYecror5VjjBTS1xCFtMGh5SvUqGVC8DDKZ9Nmg",
  "key39": "2DPWmnkxiHCFh3N3qogx8wtEpsyp3771nwuG83Ben1DFH7sK1Z9YAfwUEepgF8yrarsaUSk6LAPWUwfQgyG3tA3m",
  "key40": "2NrLkiQXviBuNLzatM3HfTmcFBkFQrT7tG6Jnzc2f5xjbqadD5AfLDnTZqp83qrXwadRc8Yrszma2ZUBS7fW8Nec",
  "key41": "ByWqLoAhEfGgdSzVwuTgSxdENv4zzfXHFmYjjDih6jAYSrdJ9z6uncBxHndLUm56FXgFvC3b31abCwLdpN2dskm",
  "key42": "2tZm6FLFdyZrb3Q9SxgAdRR5m5YiBdcfGUyGgcDG86zykcmffW6jnMMBmwpgtJKknJwynoGh9pxEb4AZFwVrhxte",
  "key43": "2hUzDo8GB2mcUsbaaC9pCdakvDvc9chrQETZ8q2ZpdaXJuWyoL2TC3yyPLP9zkRJkh9pcpPSq18osddQ5ctmdFUW",
  "key44": "3WxtC8pNctMe6xJcZs7ndcphUJc4YmQeTLGaw9KNd1gnbj7fJRc2VYx26nrGJeUob6watm7tEG8wYEv5niSFoNxV",
  "key45": "FZZgyMWo6pZCenw8riEUfnrFyVMHo6ERzEcZUbqpyPPC91rSmk9d5HnPYCJZUfm9Dx4WiqMjrCTJKseTANdqfXx",
  "key46": "2EnZBqDwngzeCtoYDTCELoJwFb5E3fy7PnpGGuHDZ7CNjE6T9xz9BvHmGsoWKhjuhXDnwSGsoVFezxvKQRtZ81w2",
  "key47": "5uFc6fEgi1hsY2GprakN4jtdMsY8vQGTzcKUrBgkr42NjB8sGLtpgTYRNBw6mK2gUq8k12q7r9giLvZRsAwmiRTU",
  "key48": "3PbyRH5tMnLnQm9vTyHqb2kmA71jUD26Vsa4QwMUTwBRTjp6idddBG3TUY8YWd9qq28Sh6UngxAqozftE56ULbCC",
  "key49": "5tVX9wkTqfdx8P1t9C3kEWiWKaBsrVtc2fVivKtb1T6g9yqTpzVCmrFGVoPrm69K7oEkqqj445T4mwj9uyKBe8Yg"
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
