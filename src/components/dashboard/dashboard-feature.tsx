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
    "479Xqx8nbwJwwrajWQCSg8mVfDJZ1NzS2FR7KxXzsyJ3A3cBffici4z1SxNpzMEWBuQw1p1rAtojN4ZfPsYoLKdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mobcVF4nNudC3TbgT85buJD97PCfPeT7UyZv7PBhngE3rX3UPSJeahJuNogA93xqb8yiACU7kh5exUe2wpw4YWz",
  "key1": "orpKsPXeypkTDGPFTqtxNAQCtsVWcTvQzovf4X84HUC8jbkWsjHb9rTg1iLUHSjHbn3uqj66gLyxXjKKvwFYqiH",
  "key2": "5DNPiVViYx5esiaVtN1utVf4v2PJkLrtTiubJcrTh9PhTQqozD85Wewb3wX5wwRNygnewYZR5i4sF8WhbnvZHboh",
  "key3": "4Aja6MxZvipf6JmNLATyMx9A18NjJ8YJEvYneUgY3QccjDiubF4T9HtLb84xdTymV4kru72QE53Y7tuex74VZRTm",
  "key4": "2cbr5WgDHM4ZB3CDmHYg2okLtXADwiCwQ7J3PWKYed3Ly3FEvG7ZiKtyusNgHojeEqCjKBeCh4xPqoH1sD7v2yVC",
  "key5": "5hiJEQAvmsRHaRZZ4tS7gA27TxP2GZXFiJibLuaw1qmoNR7Nn4oSANcjzUF2ZQn5j5ZHv5SL811kZCMqzQ4BK95P",
  "key6": "3bX8Ku5EBmZhZZP5dC7XeXofCfstGDpZQaqvf3vqt1QietBztEs67pE7Dtj3nJCQzUuzEVoM635Ug7zxz6WhEY7J",
  "key7": "2Qc9eY6GRxY51t3tbngk8YM9RDDa3WDBa1zDz2yi8AftWWxxBuBtiwh3znszc7QrMkuToGwT3y7qTpyB76qbwbst",
  "key8": "2KSt6ntYGLWmvAZ4Ln54gnLE4dCEZDM2KhRTurZq6N5g3gKx2NGYVw6cjJg441xhRZLpzDbvEY8bKBNoceqqZHGa",
  "key9": "2v489Zg3RYGKtEchDxJa29rEskrznekAewSc4eqKpTJhuatZkr3UuDCrTJS3dSzZ3ZQyKbstdQDy2kQkeE2K7XjU",
  "key10": "Ga9syCLfszP7Gx3N3Br3fP5NdMrGPZKrQ8gckRsTHo5jgN2TDAZ7WgGFmWZDtpKRk1Rqu8Dv1AtfzXS49tTxCuL",
  "key11": "xrWJ5PL8L3H5oHnJ3erimaJgkj5Le5mcaf823DUG6Trtv3ou2XJNy9p3iuyiYmWnUrfvsKc25ETox1H7DcW1dW1",
  "key12": "QTAvW4URnAAVWyqFg513QJHdL6UNAFK6cusHoVhrMyt1P5Ux3KEBcc7RoUPf4U2DxjzkehVj8dU5cJDMpVdTHJQ",
  "key13": "3r19nhSiLN9sDr2XZ3BdEhWrMMSNxR9SNQ6rQqVW55kxzYJecioq1XAfBGuuCMgqPofDxLvXkwWx55EYBFWcDBLK",
  "key14": "3CW3eXjDpiRnL7wu2b9ueE6sWF6oHoCFKgyvWpdZfdCkvHjbeJGfA2VJu2fsNak79WXceeHuPW6w1mxywvMoCyG4",
  "key15": "4bnzKm5SZbQd1M5jc5C43mYZj9LFnJpfo9nBNSZsX1avqR5hM585qBG36Ja1jyQrGEQBAJ31pfmH3CoJ41uSfyBy",
  "key16": "3JaQiBdq5PRoryYqYYzPYLTa9RgFuz3sJ44xdWjD6YDDBTcdH3BWLBP8PNQ4WPLZVTTbzKKhsonuDZpSiLW5Biy5",
  "key17": "5Rn3r1eARjfkR1QL1EfG4B6zaSY7N1gpMEQyeJgyqBK7a1EScfb5x9dZM7nuv9meNpqGjQptV8EDDt1ja8nXzg4u",
  "key18": "wqYpMA2ZYngzwft18ZVXWzgM1xRYTSPBe7NV6z8cGBLwBmjyX4zmKDau8V4FV31ar7waq4zEeLEdJqz2oL4koaR",
  "key19": "611f5amawSemRKR7Wv6e7ijQdMWLUDfkFgKXeSk971Jw3qF7a2AZGDUqHS2Rg7JiWKxxRGkyQYnDwK8HyeBQmRdj",
  "key20": "3D4K6pwpxFXrLkvRT46sQJ8wcLZtVGUy6peSoFCoRGRQHMrzjXNwrcjXHXUQ7SjbTVCXyMbDfwQ9AAMJWtHNpMdz",
  "key21": "5B2qpW2tjspoxovQ2MWsD9iLPLd5UBDvu4hKei4WP6ARcdfwPdjr1hLXn6svYFrkQZVHJ8hWoneT6AwMJUDoksL2",
  "key22": "2fYrw4AhnsvnfP9658YExaiYQEpjGjjqfUnxKpQxLqg2isCThzJ3cc7npKabnyGxLbn2HohjyrzZaSbRpTHLrr2h",
  "key23": "3ntTCeu87DmpFo1eujPxSv9gSd6ZTboS8giiNtD1Y8CYBQaDScBo6ZijzvZBDXXR9E1jiY9opiknANDUjY2Bb88m",
  "key24": "4qjqAycZGCi2F3UmmVuJ394xqo9YCvkcYMnKQED5BGgJ3yjPcThSaDbg1nqnrrQohtj7G6ewh2xHDKrnE4DiTfqF",
  "key25": "41AA5AcUuxJrkS1LKuePrYMBnBQQiFfqaqdeQMhd5jqLhBUBjNzwTZD3VeJSWcU9Hy6STWEcaY28QFjmaQaNUphh",
  "key26": "4TR5pRLx5ukSCZ4FMwa9y1cCUM3Pc5TKpQU1dkij4W8diDXp423QvQDt1LGKrf7vLw2XD94iHUtFhx1XC5HubwLy",
  "key27": "4jDHViSveWAnBAs73aJccZbFoCYMERAWj7Pa1Y6sTdcswmCFZmVcLCKsqvvqJD8YYfhvikfdeQekeeohn1cw4C5G",
  "key28": "5nzssdTcJVBBohXKpNgGwgTzA9jRgFJ3wbVfn4M7RNnp7A8ehanfP4VktB9U7Lfmy5dXdXyZTXd18WGiBfhHftVL",
  "key29": "PEECVeajgQakkq5qKxXVQwVNYwE8QxE9ovw5TJ9ChiFEaKZtRgixEftANGbQq3tJdA4h76svd3KvsrxR5EH8nXG",
  "key30": "436BmKD5fdaaEayGYochL7cTzar7gvSkFKWJwX96Esy6Rb2jc3gGLbiGCwzWbkwLWeQ4FSNPPU8QjW6cMSpkFaSQ",
  "key31": "321QsxDn3PAL7L5xvDdzh7qFjb4Dp2bQwTJ3o79VCrQU2FwWhCGTiM5fjpzvkQ7ozwnqMs9CKLGPRxscpnCgQ2ew",
  "key32": "4oBpcp6FMNgaTmHc2i1WLMHeobZMPpzE9K6wNNZGawsAUN5hoBz3K15kV6w1Ebz8F1LFeMGdUzu8MGTYkWgJ7x1X",
  "key33": "3M5mmFpFuxrHsVAsSdHia7Nz4fgeuDiVQYEhjRq8THPKZAKjifMS1mMM8Lw7qfVtW7D2uXaQLFmQXg2G9e85PMJj",
  "key34": "4FdpksvZeaaB9qydMSWMz1GfHcoWr6rGnvVeXVy2XnkLjnvArvyUyRBbh82nUqwQzyzceUminsuukwpuoshr9XZz",
  "key35": "63FnaDAAS3aF9jcgLzSEd4DHnkwDGRwawSaux44LNoqUovM96xUwEdzxiYNtkDKiebqynd8VpyQh3b16xPpTMHYc",
  "key36": "5FzrNbXiMQGh6Yhr2vVKqMFaba9ypXZ9kXMr9iCDDh8C3YXK6ct6gUmBgTaGYj4WNHRF45mFPLtGn4QBK9ad2FEV",
  "key37": "2zkPAPgkUQUZEbSyasninxi19RgowbqzJ6s97vPcDkR6QxgLmVrub6a9noKkSd5mPh2cKV2uh8yvVsccHecm9btq",
  "key38": "4ozAe73HwnGtoiFjcFg9YWJrkJYtMqhj5nZVkuirrujCGgLUhgzW6AFVCzXzsXSBE4mwUKkSFfstsYMuwCagePkS",
  "key39": "5Qgg7XrhxXJXQWbkpLpJEFxe1fGTYqM2jRFyzi7o8hX4Hsuiyadv3oCa8jsLXQeYfhwwLWu5VR8XpfYJCY1429S9",
  "key40": "5Upae4Ji6ANxxXW9YkCeRqWK4SrX812mxwPnfsq6paug4jRzXsiGhnbX7TjxDNMzb6Pv5sYSFKsphzAaued7jxXj",
  "key41": "2jKBgnExssJVS2wBfEeYgT1hM9fhQRAoQpTx3T9qNEgMAN6guHTrTEVnJAiuNHCYhkCNa2LU2Fci4JzvnWNAyRCy",
  "key42": "4hCBn4PPza7zk1zq4pN6HsKL1s2moUa1eQo3GTizTHbYNA8CjnUbp6ZWYqtrRPQATcWSCKW7wHwuUgTgVsyEUWea",
  "key43": "JUk2wYRC3bs4kLidVZeNEjUcs6f79ZHAtCquqyAY6gyCKq6rxHL6kuzsBjHiJZMEfdvY1HDc7EPJVYxp2RnG7KD",
  "key44": "Jnx6jjuDzsMNvUwK6QD53McozoSipoMB2PYV86R21mqnWfYR43FrUZq6DkJF3mSoUCx6PC4QqRGaXY1Xvn6MMNK",
  "key45": "2A2PjnkTf2rSRswoSAmoc6VRQN7TT9RscGRoMCss46q7gpX7qQvVtN1b2w6mkhgUwwKTxbVwp59tj5yc7T3kobEi",
  "key46": "Ea5pVSU4hGsCi8y6pfp9AuAvC7DXUirFWJ4yhZE3HpJ5JSzYqDwNvJuGJDCUoKkPDu2aQMwos4AkdxKMRbXn1ZH"
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
