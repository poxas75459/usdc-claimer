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
    "2bTkW76JvUfaFoXoULa1xwfkEvikTcT43qnWhoSoxLFJQgAe6X5wLxCPebXXjqMW6bEaoACs2TrP41QZNWsSyX2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjHFZKzYspc9zwWnPKJLhEtBoHundUh1HzAZfMxgVBRGr28dRKaCqEZiRrawjBTk5Fesn3WGch8BNJUXHp6EVbL",
  "key1": "4sZc2aVXTYtSvE6QeDyW8ZYxkNR1P5yYnp61ZntLJFYH664x5e3NYU66VtSfgfZMtWHJktjUL9TKyQNM8jbrjMRA",
  "key2": "4FEtuwzXoFt6TgHsJFW9cmP3eZ7e2BEQcqerUva77XHg1Je6wJuKwj5AdX1djqMKc69YypR4KWnar591RwAQYGQr",
  "key3": "4DiZgqjFsWQ4zKXt6ntZorPa7XNgnb3zGjdac5nKkqiDFzgG7FRvXnpo9tTvhfQAWtv76VamU4pDXgAZisTTHEfx",
  "key4": "4L1Rj5fH3JRoevyaHfiR4auJULC9g85j7S9hicY1dw2XwdPWJEB3Z2zhyroaKt3VqhYPt4wFEYLD1aHzTeebSC6S",
  "key5": "532acAECKE7jg3a96ALjDZdaZyUNY3ubjDEsLqQRUXGHXwzkTP4KYkcLygPtjJBgbcWLwsCFnh7pr3DGoDVRzznd",
  "key6": "DmLirv2b5XVAaVfYW3MXwjJaE34LF45yqCdTxmnm2EUqjWCF8ypxfeVq1pRBPsjTM9fLgm7fU7he9J8Nm1AHqM2",
  "key7": "CZEgY1nQFnRtH8fxo2HqAvstdcTmDUvwuVPuiWxmSRuAEKaLF1jXHcSVwxUAdy61bMo7nedqx8oA66VgPaMwRby",
  "key8": "3cSXFVzLzcijLosYTxfpJ6r62yNHYcjrHzBzh5W4qqVzc75trrEWY3RJdjTAB5PupuKBt4hySAkcQ43U7sEpERCS",
  "key9": "zZGKi8GoPrY3nqqYX4SYEuD2nez9K3nbpeUgrQgSoA9Er2i6ZrCLqLJ2SWDckHTuuGvNRofjTCyuDrQ5U3Y5HWD",
  "key10": "5B1o4hbqDWnU29Ew1bVNHD8h41nNuj1asJF1d3KNCVyuwiSG82KoAgwXPBL34fDVoHXhdkVEtiNW7JdSWccQP3ub",
  "key11": "3Fy1oieHR43k3kgwyPDm3SK8KhCZMtvA5gBqqzVv68NBDwh483mHo8KUTt3eNve2bvq2TQK8cLtE67HaLnRae6AQ",
  "key12": "3VVeQPja2GDerttYe77pb3WnM4nMsKbD4oVnjHyfLK1j5JkD5bu2ykoiEsTJvHvAPJeBQDySSNtuXY8Q2Mv5t8pJ",
  "key13": "5vhhcZsjhdyQ4v2MvN9KeBbGtFhG2Hr3jzyJcG66Ujm41pezKnE96g36HKroBF4KJTHy2Fw5spDhiJ7uoGPZnsbN",
  "key14": "gnfYBjP2hNpCJKiTbdZPrrx1EnieJo2Tf3GZitDRRzBr1KReax2bsyUrFq6DCfnNUcXbVVXYprwfiU1yKkjHDLG",
  "key15": "3Vt1btP5y1Z8W5npqdf2cG5PQrFWmjjDWsp9ytqynKgbazzRhoGSC9uXcMRLYtjt7opmGJyWW1K5b9uF2WTHDC8m",
  "key16": "518RhpeB7HEqNNV2kiiSmiMYiyS3k25ABAxjhej3g7UZ3983mWfzcBszMaQktVhjdYFLtvUQZRtmsffbj3TkFS5R",
  "key17": "5NxLicvdxrrE9SKmRVRdhQoMNZVvXMGs4v9C3yjB86X9H5sUimmYWNpR5GaXNDC37yMXXpwTdNptUBmbhbKxFrtP",
  "key18": "2EjobUve13GUUsx5XY29pmyysbB6QcCNWePrtJrpX8GxV9Xyoz6E3XXzvA1J7qUT8Syj3qvFGdtQyfMaxbP9byQE",
  "key19": "2QqbgSqdzLoj5xvRgU3PQethTrB6cQ9fjhhDW8oQxgGcPf4QTxhXRcHHGPFKnwqBMGuPVMNRWYCUZi5FagQMkt4G",
  "key20": "2k9w73gt46nygi8kSuRefUEoeasJDk7q85KbuwACGy3e22KtUkCj9hpqg7Q2iDchheVvozhrHPrG78fchvLiAsg3",
  "key21": "5Vt8zJ5V4cwwdKn5pTgmftTELyFArdhZytwQjNuPZm9sJNuMzGpCPnzRYc5HbbuDS2QfYs14S8d3FXzXZywkVsxy",
  "key22": "3X7yZjbdVgijg9UnHTPLaApCdFG5r76gwsM1VGzHmTjj2TQHPzU7bRp1dwMxakHUonAviF28ZokW5N99jFrzxVCv",
  "key23": "3nJhuHgoLyY87wBPZL3ooXMaCSPsqLJ7p2RxY8ztug6EtJL4q12AQx2DtjJi4fN6VA4iwbWv7aK31GvL7PNUSmco",
  "key24": "3rd24TU3fRMUjoJ92yz3Pz8HFenkK82XjxwXhdgeWU6NMJVe2bHUN7aVzTEhRHG6ksTFM1h7F1dB1qxLDakgJKXE",
  "key25": "3HqWARYh5zXEAkoMJVB3Jw17rY4Tb5QS79XHRGMrjhbXW13BjmwMsfm1ezJZGT1SdYk5xNLJ3ET8uJbXMQCQrTw6",
  "key26": "5HEiCuTNF4RYEneECA7EKyj3W3LknbS7fiePTgtCrVyTp4fif7m51L37F655UG4pe5PQQHo6TgwMhQvcu1T7scTB",
  "key27": "4WLPWynE5bYmoWaVreWuJH6sVkzaH298PjoMDrTKsd1zNYRG3kP4nhEdVnhgpBmuLkJNUAyKTvdtMnG9GZ3GdQEa",
  "key28": "HPwZEXkXNXz6drsMERRBD5YF5dUJMk2qHhxnXHyMgXAqeCV7Jgg67mfqY12LBUFuaMv8piUPwpL4QMaM4CHU6zn",
  "key29": "4v3RGJ33ZLkf8i918RBpB9gsxLb23KPooGc9if5g3oqXDiaY9bQJaEN9vnhtwSm35xWijgUrehHxZeF667rQDBaU",
  "key30": "36tYAwdBCxSbZP2nmWXVMJSZN9jkyt5MDwP6NMgQqm8a975NqwhLCucdpZp7yHmTWHmd7T3v16xJ72vHnLRgYwkc",
  "key31": "3SWfaY75cSnhmeP9KmErvS2weW1kZ8UJVyJqxHkkUoExA2EPxSyHAEWubPhfuZM9tB7nYvi5VQ1VJHEmaPTzpy83",
  "key32": "4HT9TAL5B3i2zEpmFNYLig2hqeekTMc1FkBdWnr94r7WNZnqwf9MBf6R49anRxE7zaSFaTWaoAuH5NdvxcVwKEb5",
  "key33": "335yBzvQ6P9DVfXeDfzyN5mcJBLnb8gK8jPX1sXU5YeKnj1WK6d64PEpZP8AUiR2eRq6a91aZsbLbyLFht6ZPyAv",
  "key34": "3ajN6BAo8MftEJakAYBDPe6qDoatM6Lzr7fCGpTFJWPaG8QECtTo1BPUZgV6Nn25AVmJRSEbBGQWMbzy1JjkSWAh"
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
