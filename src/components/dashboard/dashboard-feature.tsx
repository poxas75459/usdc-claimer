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
    "5fFNzd6Z5dtYufVPbqDcnJwd4w1vZTovKoE85hXuSS4mMKQ4Mn72yMeHnaQLbsBaN1MwjjiEmJ2D7n4b8JD5HJ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYYPqqbWg8rVGzN5hryax3bmhBxmRUna1AJ5d65RoXirkSxRxHEGRK5GhZhBRAA45QeDF2J62xk9BvPkkPFHfcF",
  "key1": "2kNuqXESiFp4iTerntbcMJNKfiEhLxfk9TLzEVf1vvi4ayJRhF6egyWLGGPb8XfFckmFEWDVUwA9RmHvmLdT9jZ1",
  "key2": "CymnGaEHFQmaLFA2k5gmRE2onVes4tvzZS5gczq8AdHKECEUVXk3MiyGs4qgd1mo6zqLm6yQ1NVnZp8ovecg4XW",
  "key3": "5FsmbZxyhQ2mYpeh65XVsPsDoV3cn3NTzPdC2X8GJUNYPbm3mvFkioSuTMKDdnv7LYTh1cRt22XXzeBrJxtnm4zJ",
  "key4": "2yvRdbbbYWdohrsHWZrKv76Fn7qwxbxZv8hCzXCd3jCxs5U5sR5X2XgaUCisjoPq6HPN4XD9MJBdfsZ4MNnTJ9nw",
  "key5": "4n8wE9X34FFvXExMwivmLz7XvLaPBJ8vKYvboyG5wVfVBAwEmiFW9dvq5uMnF7HFaXTFnqHnqMuVsBpdS3sd6cdW",
  "key6": "yT8CNMiZgqY5JaxMRtkQ3tArq8m5Z3E5RPfeLew2FtYs8pLWweCyAqAebej3TdrXCpBRf39u8qzCHAU8mLAtQ1M",
  "key7": "Zf2NeoEqZuThCUZ6bkB61ZLC4cvj1PPgt6ErhG4bfPMa2tVyCGTyUFpGZCScbBdhbtUr1ZkvZc2irbUrpmmQ893",
  "key8": "5jvfd3tc3RMUJrRXEs7WA1SEJGE3QRDY2Yj3Fr2Lbb7DxBC3CtfkbfGji8nMM2HztFyvcBHEMMkT6xUgCqCTwCdS",
  "key9": "21kDATi19uwy4M5ijjcSzJMDjcaAGmtiey8m3nKJfqRRqXSWdV11AAmZ5Y2kBCgBsXV4e3KHdtCLCRH5hBWGNv1V",
  "key10": "25FZH8VFHX2WAZBJmxgUj5XgePdDvWF2Xgj1cyZgaktDRjswbpcP7EJrhaZFJwfj4EygpXpxkF5R1AwbxjvGtDQn",
  "key11": "3b8YqeLR2BYuLNBEzvKTtjcFvvv3wpeR92qkXgJdBeCSgcJKaP2sxpSnyvu8AxQjMcD8qGLuvn3xfi3DaSNHfH3w",
  "key12": "yBQmd3Jf3pfAXTSakc6VVgZCLu9vjs9Ak9vQRdpHn3tZ9FhV5FyTg5XvRf7Nih8XTkXHEXJPcpTZbhZKqmP31nH",
  "key13": "5kr9eeTLuCpV74wyHXPK8j1cuBSZNpL1zLjy2eTThwmeLgZVnJjDqfM7sFDQ31E316Vd3M4zuszuj5WXdsnAaWmB",
  "key14": "5jP4oPUoHfVvYG9UhQECAp6HXiYQrgZxHQ1VdVGNPgvsUFJKGE3fAUytuDKkkbkven7JtBYnXKViKU27aaKEaD1a",
  "key15": "4EGTEHKrx3VB5dpJsdwF2rfQbwtZ1yCkR9a92K2zoWKN8Q67o1nNH44t4ih2geewVPomjqNC9nj7w8wa2bmr429Y",
  "key16": "3GoSCPM3FG8X4HxeNg5uRuR4gYh9reaKbrQSP6ZxM33e8hBgTS5VoqKMNX9WGKDSzPEdTGyg5knFk1rfCqTYpWms",
  "key17": "4UfwSMrQrRb1nt3oCp4iud3PxB1vQWaoP7py8125ubZWdbZqWu6jDeaff9jzo66R2NdYvM77kBZEYVEu3MnFsmnY",
  "key18": "3wgB8R2yRXu9csUwELqjB55JfiDQf58FS3y425v9qDwwt5dhENn1p13cAH2DHbYBmFGxZyU4df8UguT7u3MbHTKR",
  "key19": "38vbWmTGTE4euPi4vqxM9PfAwmTmWpawVzvdno6oGEijfEJHabd3bHSRa7XANUjvEqFuriUyfVXpKgg9jvSMF1RL",
  "key20": "5CMUBXDx4SbYJAh36Agdrq5tiZ2b1EMZHPAjw3bhrEReYURUoix7vWavFgWduPbfYtzVUhM7RkJjxtzjHw9XL73b",
  "key21": "4PMzxejUKrPwkTgk1uFnhbVCMKuRwU8zTyKA56ofuU6EV3cZeWBmnBR84K3XCyYciLp9NY2BVh3Zsv6YM3qoey6W",
  "key22": "3GU2TCdoFVb3SUu2GyX225JULrCZiRKMx1rqdZ8bUBLYTdcx5HL7c9Dx5VKHFCqo5pRAygwLasC8vnwF2xsj3Ps8",
  "key23": "5uH6oGF4aTFx5vRTPjie9BAv4dHgxgJBDVWVxHNyQvJj3uxDboCQZBjtDpaCmgCZ2zpcgCwzegsaGM3wRNetASWm",
  "key24": "2cdHNsxpShaazHatUzMXLA7tQgadhppbwQyjgV5v3UGB81RM3aqBPb4CizxTJfKFstjwfviL2Ygw7BXzna43eViH",
  "key25": "44yKa7jsfKtmcL8FM74DAn9oRiPcWE923VH1XuaVfSx5veKMCey2Ji9FCnGof4pyb3xdZ2v9Uuv6hGtLQtXoyoYz",
  "key26": "4sjYWvquwVvoTU783tPH8NhbkASGH3vXYbSp8k8jeDmdCduyw7TdNhDhDEWxxmeCCGgSPWpBNreg5F2oVmp3VZvM",
  "key27": "3FKxadu3CzTp6gRkV1G2ahCPoEooMtKoiWyVDLZGrRkGjDrNjM1fnhkRzfNXbJHQbzX5u2V3ZZnBDMv8GJgXxCPN"
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
