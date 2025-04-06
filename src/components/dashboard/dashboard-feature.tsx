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
    "3YGQu15e5Y2NA4vTY3DoVSD1mJ5CbLQQ8Fbf84qQ786AYD9X5Ges1pcfzKLdbwymf8Qtr9TBLHQJ3REXQLN1wi8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xpvm1S6SUJtKQFpnyRGQNuVVTuLLmzj6cGvLgDbfwdzSqEUAdC4bvSAYRpQZbMXVz81haS8de72T1M1qy3XD8YA",
  "key1": "4NeGyuHd9wz8NNa93mFLkSyrWzDop67cQioHztakoaBh6AUxqDMBvXqYZpqUE7x1vj68jsEfsR7QrRyj1jwoFABD",
  "key2": "s8Q751PUBFuSvA2JHhH6vhzsSTysFxuGLv3PjZKRB3PSDw5Lz7vLZYn7ZNmfUxtHEH4c9GbKxh2eK4cFeLqXuxk",
  "key3": "aaBoXLsELeLr5kKzBkDfUzod575EvGKtu91NGtRRmBi63pqSHpQC7xfVYTY6CDpu3YMxfK36zMeE54jx8ZWSKu9",
  "key4": "5BgeHgdEiGJqh9zdi2qNwH1dB7QGer64pJy7yJctSekK5oWcgy4vb57kc8isehQy1RcMq2smG6LfTRSyZDTQHpfB",
  "key5": "DhRMwpWFhS1r8eVrdVoLAETKpdRJAU4rLNA79EG4YPpqf3URtJ4U6bZcAusNDWqqdp9CRMutYnM9k7NeKu3cHxa",
  "key6": "44ZhXS1uDBNeTHBdkUcyqgtuyppojeNPQExKZi2uJywruGHAnzBLuLxL9ijVjBUGzz9Zvqmt4Wz8CXGcKKpWZzz5",
  "key7": "2DXge5vZrUjhbVG8MjyoFrRYapt7Yx9VphNXm1ze8YGqWQmYwoX6DJTGHpXJR1nRhPbg5Dmwd3bznd4oCczNHj43",
  "key8": "sZHUZwby4Aw2gPehSiYkAVd48CREKPCtmCApPX7JsB5p3pKLxJhMrQi3AVzEN1iE9o3QKEFaCRCNwvkjJkPocVh",
  "key9": "5JSZjHM8CBgXZUuiLharrpLd8CGHEUPfM8tjyYAJsaE6Szu3TcY7cmvDWcDG52bn7zXviJhTAp2t13JXu3iTwnJq",
  "key10": "5psBQbNKestDeBqBa38dFEvcKcNih6vKQzWTEgGnck76cZGm3geCsGbMecfSufKPD4KDVqNSkttxhbSaJN3jcmMa",
  "key11": "6D53AwZMxjBLvUF6rxYrVnEM32Fx2ufW9yjTHXbLXQEsvJLjck9joeuch143dxHEDgyiBmxESpXuXKw1xepXoxC",
  "key12": "4uniGDnJc5wE4GqiZLdqiuexDDjUFZzjMs8rj7iH3jtKhxLBKvx1Mo7yySkm2ZSAf9mhkN6RxzgVgeXYLTKaVqbJ",
  "key13": "3c91DJcn3vXjumwbxwaKUh9Xc89EhBTyYzPX9KEZ2eBJcaLt1oatbVqozfbjEh5RjihUHEpZfcPy6fcpGeT86hS3",
  "key14": "3VZJbySTqyiPt9vkjckruuZUgu6HMDh3YJ4i9eEsbxNRVhddeS18zosmNgxbYUSfCqxZaQKDA1UuCBZHB7DE6FTY",
  "key15": "4iKYpJAsKNSQynpM4i6UMtbBTCXzYRqjmhjtkQUqpHMRMT5uSMh3JUmZkMzMMq9DbepyhESjPDQ5xDyULVhvUUtq",
  "key16": "5eSJazE3ZfjSDSyoc8cVEkR64Lj5kKyAbbD4pVTvF92jmvZJrDpoxFRRszSGHH9KRwwFxaQsn6czJsmaM86t3qkg",
  "key17": "4TRZ2hm81Z1rxUvZJnWLJFDyZW2ppfeaSWDPHkCQYLtSAyP7NRRkVDUhDAL98mX4aT1WXdRzML9b19aLUuDhZr8o",
  "key18": "XApRfKzEkEmFSjbXYEW558SFFzb55qDSGeKx8d35Gqa4XDfzNVXfTanUkR5hSokMKkegtpH1A8UBDrd5ydFwFwX",
  "key19": "3V22ArraGQcGfiQoH3ePSCsY9A7iSWBDpP3A75FJHkEbck3jMocXCcUa4K7y49KuQkALYpPAcWfMqXufiKkLineu",
  "key20": "4ND8gxTY4QsBDqwZ6ivJvqkGcnK1cQA4tK82PUbdiFw4nbUy5Um48f1k96HceyZGjfn8axNd5JNG7B1PCk1FqmtT",
  "key21": "4hzesmVRiABCmDqr3hHVPHyvpN5fNhtxn3Lmv1NaVVjkbtpPeAg9ttnbj2L12QZvAbiVAKD9ThT8M7gsps7SpZiT",
  "key22": "3XyKdUmGf7Xm63Cbxd6ntk5XedAyPXWxw3LNq2exaekUdXKeQ1kpULh4q9eyBeECAVWojEWiypnwygJU862FvAXt",
  "key23": "5ujRihgJA5xCMRBmqzgGqCWSTsDJ7oMWvex5thRrsfgYr71Yk3fZCab3JpKnNPSk4jfRtctpMQmrRsQ12mSKFdnC",
  "key24": "2T6US1MvsYunSUxg9fMtqezDPXDjA8WfSKqXdETXEV6WzcqbmfX2Vm519m8HcqF8SaGqYjz9VZcsd6anWGbLRvDd",
  "key25": "C2kE3d5TYxHn74qHhrFokrZ42aEBSeUHA2JfBDbDqFq9X1V5QsdrmcAcUo2FsuGChUdM8DqhGFZchmLx3Ghta5u",
  "key26": "4gtsyUrMrFG6ZyJgRvnVh1qd5LJcCZZcgDCixXyRepJMje6DA7hnqNrJfB7tFgfFCorqkrPd6WRsihwWUdCshJAy",
  "key27": "27ouqvXaC59HywdyYpPmPV246J4J1kyuyXgybyCbRqyom3WPPBuzY5kbmWceydq4XvYcvvoW56bDWzrfMHn1rnwd",
  "key28": "2eYrX9AxUoB7ynWt2D9CxNC77v9tfxcudAKLy6yEqCQG7ww3hQ24mzysjQsDLKMpvAapK5BaQUv3pcGN6bFRgbcu",
  "key29": "bSPLWTKsmd42TaxcG8pfFMkg1ZKnGmwSyqGkB5qrRcp775aFAvWWcgzP8HsZK3nfqiXLmUaCrTmSTHr3BMuzAL3",
  "key30": "3ftVu8zr5uTAMxVpcNJFKYXQv3rzmqwA1tyKbpzJEcxPiPduWvbZ33KddGJc6z1ChCQQH9RwttYfmFtpkDrpBmAk",
  "key31": "3sN9v38cqvgocNyhnkUmPc3tfNCRKLdpjL7LVd7vbk5f2X8NQnEUHoECp4dhCH3m7DKJ9ayqyTYEE72LWx9AYTs",
  "key32": "2n5y7ronrqpSZvxoXx3ibzWj2Zqnqm1RqRLJATB99wQ7jPPBpBA6MWozStw59QgGiZRxZj1q6XnuYDaTjh2Ssz4w",
  "key33": "2Ked4RTN8FpWbgRUcx3CH93GFbUJZSnAk6VGxY4nmUpz2jFx2YKBuSdPvuQV8vXzN7Lvzq7cvkhdwjqfDp6niZnX",
  "key34": "3uCqJa3dRByqiqoqTispmLSugsWKEfXqrqz1cbNrtm2sZFAqtqR44TT3ePPrwv18dBWto5NwSD3cB3ThinQragTr",
  "key35": "voHenPv5jQfjTdHby8fHAzW84c8dKUikTZt4M3SF4VAAJB8jeejdQUsPTeN2g3RmorZDzzUq4We4pwfiumN7N7w",
  "key36": "3x9vmyp4N8ZE24Yb62LjMtb5HvaX7WZpi8SHe64yCdEXSqNK2EuPsn3ZNmrunZg34k5LbPzfoj7NMaX7amGvBHLq",
  "key37": "467ZtNeBtiwNKwCQMnvhvVvWr4wjRc9tJN3csecwsaNKQgEZKqCD4QgZvztmRjuynP7B8k9J37m2oPQXYYqQFgcT",
  "key38": "3R6VASMjaiS23FJdXg44ar4srLu8nc3YSaDgsLKYdbpdgE93VN7XLaNpczVEjLnPY6s1vFXuJK1KVc9TVm9GPv2w",
  "key39": "2p6EUyceSWyiTCww8bfaY57AQegqBVMQPUQj9gCT4DuzGJSYVc6ghs9ippMTRCi7cZ29tSYDqtqA3ynhTJGNoEnM",
  "key40": "3s43GxUhLGJgMD9AbK8DF9qXc1GzNWpoDN6c5yuFkE5awveijpNLW7MZNqb8Z9n6w8EYkgCTQ1hqDjgDtTUkmks3"
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
