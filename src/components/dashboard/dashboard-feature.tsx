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
    "2J97XxeQdTxLX8Z9NxMS2yEPq3SUcFR143pom3WpYLVC8oemyvweGp5juscXcFHWvHW3757hGmEMJHmoARsMSmLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43W83SzUmRYEJNahnoBkRdZgWw4VtAp992PoCGdbwrDxapQQ8NB6LGsc1ftmfrugwhG7yWpEomem3GprbjLi7iSt",
  "key1": "3qrhSjYQ3qe3jvkTNjwgxzDBssaNW3BdD783igBaogZzju9HAnFGHrjzXXZS7mpiQLxiT4Giv7rRnYg89Zs33Qyk",
  "key2": "2QDLRFsHmwbT3SY2bpyR8CV4JWqs81G4XXAADKshZaFE3LQDSE8sWpkoAPKNhyxXEsKU312z11EBBRX7Cy1Q9Bgi",
  "key3": "2MvwJ9KfY3zogBqrs1vrdnDVZ8CeeFausRi3zyYycVUaTMB1aQmHS9gDgnzd8RsRpNm6oux9D3MBnMnvuX9R8N4V",
  "key4": "5JsYBR9nGZR3HgXfsMXfnPAyvr4n5hYYghH8zkTtRJPH7QoafcQ4FikMJc3zaQWjjCYM1c1XDL7RxMw9f6JpyjAB",
  "key5": "4tt5iVDavUA6gVAzQm2gdzftiC5DhCAPN73nh4zYhd8LCvkj2mcwFFcBEQDdNcF6p5bWi1cDZCJ18hWYWKvHmYP4",
  "key6": "5HHh5V5TiFAMfiz2ihTsRMzufza8H2vihuecEMEmyQRTWnTzYG3LYX2rmfLmCAd5QyCbfxdrDouBBXtA1FLD5E5W",
  "key7": "wVQDKFFt8zybYSdY35mJ6kmo7WiQTPqvkrPnHx3Zufnt1Mpn8Hpte2e4DAA1xNzKXcGJabcr6SAjBD22ZL9NZu8",
  "key8": "qafxhBKSG2riotyX8QqzWUYyjkuRdExcJWYaPYHfj3S6mnuyYYrSUxNMkeNdsvFqzPrV68bgeaMZttXYrWJbQVN",
  "key9": "5zg9mamJHzQH1NwT8KFL6VEQ8WDP6FSEZRtHUHVwjJovTjWkke7Zkfup54HNtWrP9MkJJvdLLnMW97wrr3csH6dw",
  "key10": "awW5qjEpZoCyzDUGiQz6ZTy4Q5BcAj8ztLuZFtnhZbzRzpcEm92f1Hq8Gd3iVLTM2qkbNApDgiibmyvyJTrwZSR",
  "key11": "C9cNtjtJ2adyrNcTavouVFzCh6XEbnUcdP24kUNeccb3CBAcvZqSuTj5wySHw6ozV73aEP8HevP2j98PgULyQY4",
  "key12": "kubU9f8V89AnL9GTcNVwx5db9L533YhVn5KBCGyLeu9LvcmXpbVhSHcmWH1VZBd9goYgjp6AZkNTdRsPNUptD2M",
  "key13": "2iEeQpJFfgf2DM6ux8GzYgHrkajNqdogukTUAYCYw9Z7jiL7Ko8vGUcv5nCPc5Wm4FxHzymAPqgmCoGxFWgHK32U",
  "key14": "3ezd3QQYW8V9UuXpqtJyiLv4tHBXoCHvYdoJsuyvtnJX4U9fMoHuw4JsstPb8PGJYo5CmMcdEtsvfZcTq3jcc7F1",
  "key15": "3YRQGVq4KoQJuxd2gZR6mqQpJuWXsXrC8vKhMPXpxwKWsTkjvwhySPfov2vueuhziD5CcSWe2yKbrDcEKG3rsGbs",
  "key16": "44RkeLYgJs9vDJxgb5CHnmr1AV5QfLg1GxEsTYsTxxVX7UPYT48jFuU8ek3Yyc3hpLxQcQDFkchgyHSM7uatscKv",
  "key17": "2ozhdFPvB5wciY7rkG1V1MJDPJCb5eerGRXUiZC6ihUvqrvM55KB4tJ2Pu5wuJvJKPLx5CfSigJ5mCmNu2drzimk",
  "key18": "3ThXqzKeP4n1ngqBVJxKFDPXQjabb4ZHvdj9FJEua83nqakgiy3xaCp78xy1WGEnctXba6vheRZFzjjmUsjySR7K",
  "key19": "5CKuKwLmA4uW13SpwUdFNBmkoWhbcRszzm54bfnZDx6CreFwoDirR52AuWGp1TJ5gF5w6W8UbZj47MGtbbZL36HY",
  "key20": "2QdzG6F72Ed2QAfcX7LFe1hs2tNh5X3oR7MCfivEDvkc1jjAqaFNq3KpohgXNTeep5hCC3SEKGCWMSeviJVugops",
  "key21": "fAoH4fUw6EhLcUZzY9CV1XrpwZVdkaHVzhjsypbahMjCQdj1saYBDAUzn9BB2kGWJtByJHbeeCyKpmVBXcPMHDS",
  "key22": "4qZEicE5LwTjA78oYv1pWGThzeAYtUJ3VgKrGN1kx8xGUmrjVneLuERyEZJ5oAYyCje3n9p3B3KttExyCZRtru9",
  "key23": "5WLFAD8KDFRFk7D73W78uhAFd1fSmKPH1MsKCL4sTNchLcXfMzgwrEey1F7Fs5upk5ANAZSo4mvafQNSYUGshHZn",
  "key24": "2rNL2wruCdeAHkyj4Z3EKyESXJqiMNvpgKcZbVS19w8YD6ndEo1Sqze6mWTwbsyX5zJgrT9NPYxTUQ212TdSSAVT",
  "key25": "5dkpmoVjYC7RCtQduwnykQTc3t9i4mFszGCm1xghincZc8bPuVAo5pP48M93NgaDbA3MhTRjtJiUaM1M11yUVKJ5",
  "key26": "4UzDBcVVbnq97HVvYasFrC46TWd1HiDwWH9v19mjogEt6fzu178U6ers69xYRqUR5yfYYHbfqgqoMTpP17jWk3zr",
  "key27": "4E7beMTr9XkNHAxgiooTYMhTG1mGhuTM3y1nqXoW6WyeFTzChEAUF1ca2VvPcppJdGwjaJrKTyQiYR9692aiJxxB",
  "key28": "B3jRwVKKJtxbbt5TLVw8fMRLp9s5HYUa2pPHdm7TL5Nyw6wiH6Etj9iTVBHRzxEqNfrGskSRHQqDVj8j1tuq59R",
  "key29": "46us8Hvo2wspHHTZNzURe9ZTqZZrhEzMpQyXYyrRBBgkuCkr2pq3LgdEaw324jSa3V5QoUSUR5mRCzXFR626Cc4Y",
  "key30": "4CtNSn155g1H1T2x6aiJLR9bDSauE1xW4h1Z7XzTp2znWL6fPJdHH6zFGq52JCrHu22Zh2DoZfdZFxaQG36CkmTW",
  "key31": "2V8AuUY85GLYL2BMau1y6atdUfMxSpsMN185Jkc6R8jDtx7fSCd2vW1RnvJzdiWuXuRzLKB6anqK4N1GxzEwkS4v",
  "key32": "2ZVnXtCnb7ENmrEtiFJHkm3qDVNxKkLqTmSmUNkbFY9uYwU5YhniC1Sav8wvtGYYHEYUKwZ5pfBcPFtDRnj2fKS2",
  "key33": "imNyxTSTMoqMaJmih9NpPrxG2jNVHsY7T6sHtj3M5rjMxZ3EEdB2R7jJk8Fe9wEbR4NRLkMdZtrkVriz8KW9h5D",
  "key34": "4butAbjmY3drgL2uKjt3qZzUKZZjSiknFJvm9P2BUMvLju7UgrxY8aVdv7UKQnAXRK19j1fNceNEoQByGgNNEewm",
  "key35": "5x7aohkKL4KShwCs9JC1SGRnDRDLeEA7jiNFJMozdasFZB8s7LBjvU3emyJrbF9WdsU5HmqF8Kx5E7qsv3bqUNv9",
  "key36": "5DVSBsymDQSppmZYGNgq2kpK29s5aM6HHweZAXqdhzipdGigdX74AEaZED3Ctk4eNnwdZrn65Dv3XHj35XT5zPcq"
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
