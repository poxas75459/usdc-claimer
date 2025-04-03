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
    "5PMs6oFxqdohVLc1d71iNTGfHFxaAfCQ3Ev35tWacd5D7D1i6QYJjMs4ScjeouUkYKeWkreEoVE86pxBU4vc9X8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVbyumLKqhRcR57B3B2LgbTkC22xQxkM1oDMG2YftwLcawZrrLSx78eX6km6nRDLRxuQ962uTUd33g4mMsNEQv2",
  "key1": "hLvXEA9YkWyz1rj2aa8CRSdnYFTQoHvW7Y1oT8pwYqeksa7PdJtDWGZkyh4AZ8iiHS4t2zbKJgFfLNVRAWEV9xc",
  "key2": "3NeLRrN3wz77k7wgEyRjc8bLZBiRtkUGEGop9ZB43f3SdRM1UMyGFG54eKZcWwan7neKraeLdKJUsF9HrwFg9mo7",
  "key3": "4pG1GiDpkisPMRVzwN1Xb1vxwy6MkSgzB1y28bpb7wzAMuGABiTnSxPVdqkru79TTY4hDwCtKSVDjsQ5B6yX9gvg",
  "key4": "qfaJeSdMQBMgiJUVxnsi9TZBcZzLrd5N17hZ2GFWqzhvR9kXbCjdiw6qt6QR9NdizvUtD7gcXSuDQbWffSArxRm",
  "key5": "4iugEDuPFuSVvmRYdfm9kJAUKaqueCPP4xrVHhQVnpY9tSSygYa6LM1UaK4oZQG49kyRQdWAZChMuydrKMeBr2FG",
  "key6": "2RewLoNsCgcvypKQUfCFz1MiY9jsugvgdXKexwb9nkierNXEdpdp1PHsrTnvrMEzXwc7zi2WiabvcSxvjqDzLA8r",
  "key7": "4JFfCVMn5jmu3Mo9G3MJGA7W55c2N8xQosmEDRzijrK2CnZYcGdpVE7dV5GTTHhLLp7wXxjwUVUVktnjjEaQvyWT",
  "key8": "5REkySeyDYesRjRxbTdAHmFJNwxxmEtejFYwjLeXKrvW8tUZvNi7b8i3xxgaFZoEtRjgLf7aeFHiPTGFWty5URkT",
  "key9": "5b6B5GECE6S82TLmSgKf3N64Ygki2cy9uWVJShhcddcjde24yj6RkLN31qmuM1EUWxPDhZxviJXzXwejVWCe6wk2",
  "key10": "27k5ngAzAkHXkoVE6zdJqiBZb7mqVYYKUJFSCzaA7AQNgdG1i2WCgV4H6NAi6otMNFoZGtiTPJoGUEzu7wYMYhfq",
  "key11": "3EePVJWpv7aNfwnB244pwGBMi42cm4T2vFeeW44699vfNQjmmEQgeYHFQhUAJx6hXwebLyKy5X6NYMHdH5q4XLEM",
  "key12": "3doodeJvt5tUNh1Lj89gGrfknfUgKZVdru9zr6wbfC2emJ1Ajk1TgsjG532PbQwXo4XVE2TwqqkKChyw2uP9gras",
  "key13": "33pua9bSqPK2bL5WpSruRenmaZw2J7F6VVMAMVtaZNKE1CUy3cX2iqtQaDKmgKASBRb51axR1bZ6TWg6nVUq7ctS",
  "key14": "3ASggWBavEXY6Di997nXWUsnYdXqjfAfP2TxNAvVvrrFkohxv1JrZFKkWcvuWgYoXPsbrUdHyTSH9RNpoYt7MGay",
  "key15": "fsr1QgUqxAkxyUYN9MHmTkBGWPMyLfM1AQcAGpwu3mGFCyUw16Z3DBZ94EnqAGxuFmxHMbBtnSJCYPritzztiJB",
  "key16": "5PWBjvSQt32QK7vi1XLsHmGgNctUPVF6oRu3oiwtW1DFSvfqkaaW4SgU9VETdjSHeGY7g8T1bNBEjes7VQwsFXqM",
  "key17": "5sk6vJTRCbX4Lx3kogPzHPRQYkXW3Tc4QGPT7za3wqsynnAcJ5fG96vXxWarX2TMn3pd7aCib6mL51BM6xUaWotp",
  "key18": "zCSkpWciAvyxZwWUiMs5evmCbHQTGJg82Sbtr9xshUs4VsLwRitTt4WPrXmyfRsSv1TRWbnHs4GQRNJrMUXTmup",
  "key19": "5LRkw68hedjxyBuqnRfvLZ8Kw2aMbk29Pr153KbmjMB3ukzdNb9GLDdFU5cNhBNXKShivNo64AqEq1Zw4Hvyepqy",
  "key20": "4A72AqWLL5sfGWVC7QMHVzxe5ynFBcdKFq6ASGtWX9kYmxUyGSZH8faEjgK6XUMb3QDWd4aMfPgA4Fnsy7Xfvmx6",
  "key21": "4JytgQPXi19EqAQXjWtjgRSRYxeYFnQqkFdSsDozjVWVfNBw7cG5kwms6Kgj5HPHjCxYia1kbF9HZWpt1LkasEU2",
  "key22": "5szhJt2ir75Gkjcb2czquksYCTESYptC3AyQiRXMVK6wTsdxCvL6rGrumZ89zVBaggrvK7m2rAFfcMiSrb3dXZHQ",
  "key23": "5UQsoG2eTpAAErjCZ5C4XsprYFZkv1us8BVgQ2jh875a82JZaRj3UASR7GnAp68s3X5bDEwDHDizo84VTdWQQAnF",
  "key24": "4iFjLK1SH4WunRnGzr52V9SsjKiGBaDyJd6PMVFzTANpY1rcC5faC4KKnGGYPydU3wbT4fkqxAKtvtpydYJ8CfyN",
  "key25": "Hw7TLrotn4CewZ2G7cfh9QMVj1nrqQJcfZnrTxsfEo3FdoW28drVZL97V1GieaxwdrAPa2gF5hG4AX3i27x41sk",
  "key26": "519yg1enEryP3Sj6FSXuFTJk91kgUw3gvJtwU3q6neC9qsZBYg6SUWMDRXn7Y3YQi1AN4qEqY3ppBobyApBqcgY1",
  "key27": "2s2o5bj4xkaLb2ZZ1ugk8SzJbwRYUt77H3iHJgKzYCMHgGp3DsGCAHcV4tLi1jdyscyAG7kemWt95wDAf7oQhu5R"
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
