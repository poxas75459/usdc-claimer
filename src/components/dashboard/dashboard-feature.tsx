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
    "58W5fwFZfp2WJY9jasDkY3yx2SoA9wWZaF2sRb1pCT6e7GB2BTRqzDS3k4gLZ3qLi65dJvHP6EQjaZS6QN7UxyEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpyqD2hsTtDzMViZtX5nNdrztsLH1msCcqstfXHd8xb3p9GThn35BAKpthCwiLkwbKTGBfwWA4evYomT9rDjJKN",
  "key1": "3V94zXB1sGWwGQkuRVDvB9jNzP69u26BfJLC46uBv5XK61jzLcEE3sPnUML2Bfced6mXzoX4s17cj8yyrvCu52Kt",
  "key2": "23fMuMJbCB3Pg6RnnMtBNhbeF1HxDoUie3CAcM5NtWhxoGWroEYCoPUGz8rSVua4oYtLikoScgUmENidWvqac9T7",
  "key3": "52wZJYg2NSTTg2FTFr7YkNSrkToifSWEUCMWqyToxpK6Lr92zFCW6ipKRvngsFz245XGDjGRkLh2HebXHn3jF5d9",
  "key4": "xgXLVoaeETrDKZfLtZzknwqn2awfxwJZwmwJbap5AkwjQVj6XRjtBB9yDBAjZ32Kver7KuTPmnRBbY1Rr4U9AuP",
  "key5": "4uByGd1ZXmtcbcRhEzHipJBs8ew46sDiZGFsv954TWWQAjgMBypzgbhMaRorFbor6freSsukkoDbMjgLrGtssqG3",
  "key6": "3AKEffXaAQKUmcq2gfE3prQi9VJf6Nr4GjcJmPcjixJWAuBWbT8EwvhejrQAppFaW9TnWpyihb5pjWrKLPz1kAJv",
  "key7": "391LmXWjN3Yy3xs1Mx3Sjbsfd3NA7SBLZMjjCmLuncGb1D1qrXUe4RXrv4TkBc5eUWPrN9nD8qENHSTUurfQuCfN",
  "key8": "3LZz3ZN2QZbx8HWZyKG1YDTs519v8GN1nRYPtJjiZgw77anm7SgyvaSRevw3sz5AcQm6jDTQqeX74zT1G2fF3YGf",
  "key9": "5VTchCHDbsYMd1kYkqevXeBLXp1VbEgwNkK4SJnEgp8FCZZ9AfhphWVu4969H1GQ2f9RUy8RJy9yfxWyBJTs1i8x",
  "key10": "3BMftVz23BURRgT8EApyK6ab42WZdZF4m9ijcaHpw84uvYMRNESfBoqGF8zYQrgLh2ydjHqgFf2CkeSqBoLfw6v6",
  "key11": "2f7aqjPBBttnKYHyuhtUc2SsXfnTqYQZhgbWULSut6yMoL46rH22TVGZwp67BqK3ofqwVN2WMXJBS56yVXzKNvG",
  "key12": "2yT8SymKJDBwufDXprHZCV3HCGqyRTparxzpdW47M1znghtqHQeVso9a5ciBdy6xuUVnkjGGbTMCdi9ofeoU8UQP",
  "key13": "4ER3pZKMKe6YUaH3YTbh29nYCgGbb9uha9YiEoAsfaJQuwcZZzw6ahPgTghZQKoiu8XTY3JjmwDtpz3kCdCMJxJ4",
  "key14": "2ECViDYF4Ho9du8a9Q2sqHZC9ZogxxAcJeb56c91N5BE6gvCAQseMZgezEf4Aos4iArpqX2Z3spC8MBEUzwuAWYA",
  "key15": "3Rr7ycdMgQqw7ogX1btBHF5SyCeFtEwdNHQyGWfifkb5jKjqNpbaxA4VMeipV6nWfrzsWQuMshyNPBf7WEHRCWJD",
  "key16": "4wqbj3jWs2wGsJPp9kvrRTjpmkCJYnWJRxG9fKsqtuzUFxogSxpPuCAxy2FTihwna9JuAPkyAJMThChu7ue6cJQP",
  "key17": "5L6kYU5pdtFL18uyL3vcLhzRWNkKcRVWecEhKxApp5JCZHfkqR1bZuK6x9vvZTqzUhW5qBpzXEV3BYL5zdDPEQrj",
  "key18": "3wW8TtpyxNc7woTkfNNxGYf6F9TrdUFysAfydgeztECd2EuNuUCW9kMwHRkLgHcH9kFptVp5kARajuCRU8LNyHD7",
  "key19": "679VNTPZhLAU4dPvmVMNEa64wy3MdiYxqsu95mwPcuwSsmLSsYb7Jh6zPG7KWJ6TuRHGGm7Y9gfJQwFqjAZzDgAF",
  "key20": "67255YpRmUBZC4Mx6Waxs3kiiyKXGashD1NNhckvYGAaicVsVHkvATFMJ7jZaWEjGGdFuCWkZMw11HUMr3qJw6MX",
  "key21": "25dZMNvp4Mtkek6dAnmwJgH7g4X6M8TuoMn5BmcpzRm1iq9ZEKG9VKrAaD2EvFapaPGkt8j15KDVoNS5AReWEd94",
  "key22": "5wf8ZouLNvrfL9zKjCKPUo5vbGsa59Bmn2K4gFYAY6DUobbHrhcURTsEW7R7wRteQsfcYxSKvfTTHZstHNvefXgm",
  "key23": "mGMf4KGXdvAefBHkUSRJgEm48EpDeJwgSCusMELvWUPnLZgAboazisJ3ns6EFaz9RgrvKRjVdT4Gg3pS4ijHQwf",
  "key24": "23m6AHq1phkDqmx7K781favEbQY4ca64KNUTMgWUMpmmcMatgeCtBDnPiExPSqBuWaZ5XkS1jiK9u8Pxob7T4u7y",
  "key25": "LFvE1PnYsgcnf5xpuX5rJ23ab1Lihe7YRWYSN4LBss6KGBXcN1UiiFnMZxo18ktH9ff8S3wyoYeJJ6on7WkBadZ",
  "key26": "3PFTxnhrJJbJUNDgDw3qaSE4cvjP9AKbimZHeY8pLbphVc9QFTDAnMG3ofrC9xKsK2AcAeT3wYunwB9NPQL4ykUp",
  "key27": "4Z28SPsvja5x3D77RENLbqxJqUWD6LtipwWGWC1nNx286yiecrHYaVTvF9WKgPv4ctZY31uzjDiLux7X6bA6SAe1",
  "key28": "2rim4bPH5Yz2WdrAJDKWnX2Caj7XZK2RP2xhd159KY6dyw7igjGuSyGWDzvacjvqikTvggiXs6u19F57zwAyw4dw",
  "key29": "4LziQnsrTxWSqkpJKrFSDN3uVgQbHJbi11hKJgmUURZPAwWufKMocUVPFsroqucZHE3mjZr5EqJQysGvBWXsLcdr",
  "key30": "34KU52QREho22ToBQ5zGRXsQ3xXkXwWuqXLXWSA5HtP2dd7MSUDLFnJ7yEwUMM8JdeDsdjnz2HK3KUu87UnXU9wE",
  "key31": "459ZpP2uJQrAyE63dUYwgLJGmciRX7dqwTH4VQfc2iSKaYHHM26eTbZyF9XLLYyHpEJsDWPUf5FSQvmj389WxBEY",
  "key32": "kYo7oJ1xCBQrUamGDmkSyUNaaE45ACugGN3aKNzaSka3q4QVRmpNVN5MxUUTjpBwaHhmUyVb3qRHdm9NR5Ctcxr"
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
