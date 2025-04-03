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
    "5e4cifPpDCdnhZqTB7tf3WNRDzFh2NrwmgXpy9e8hEdtgnyqVrTRZgnbqSXWdFVMeRpB9mRaZyjyAkqVmMCKn8C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qa1cXFZweZg6oJZRpcdFccy4TR6km81V12LSofU1osMgQEEbbiQkPJsPoLtUwwNB1Vyb56feNmynQApUvgo75br",
  "key1": "4g2aFBAC4SbKNhbU5J2SfJTPDNnfBDzJqUicGhSYpnTXdJo7Ww3jXPtbdbMDNbv3rDDo9Q9TQMT5rmbDLPMdGw2g",
  "key2": "2zFsjKvnJvtt7XXqHnUkyDXSonz7hYwNVE6VMMSdqwQVqDEHVns6ZF3jpEwR2a6RHzchHkYxzCxR4AnBbP2pUL6h",
  "key3": "57q3edBm2mDVaNiQMLW3vrWdXKzrfP7B3kXpE5A3NSFcYTSLJTnEMwBdGFGwQNALM5JxvFh7VUbzw1tPC6cSRLBE",
  "key4": "4tw73uA5c6YatLWfQg1ixzpP1TBZngyf8XzBgVpJ1YwxWF1voJeDBzLLCC8M8HmeUHo2ZKbAhtz3XMnZtdf4K6Jd",
  "key5": "2ShanJUC5t16bQTWNaaLKNyDyDQh1iKHwNMoJRzomexsi6L8FDw7PfHPf34yMaTkKTEfSyAGn4iQm66TuKQye28S",
  "key6": "52eHFfjZUcH38bBWMaPuUcs2nXFL4GBS4kWqieX6KmhnLQ5vL4jK8NkrEfbsNrkB1sJLkTAL9eyP8PJTvAKca6Hw",
  "key7": "4f7eymikcwzu5udyQeLwyzbzs77bJ29hTFbRvisS6b8uTtYfLLcziy4SgK5GyWjDddmfePsPiYUVuZu1GdJr2zSL",
  "key8": "3SRXvJZaD4Jb4kZX2pDxb2CYdXrPSkPAhpiur1pvUm73Fk9YWfBq17zDjsYwx2QoX8hikfkzMAekFkFWzoL9GsFg",
  "key9": "3becV5sg5ropbpCyCmFtwZAj17CauPw7WZVjerberuKqrK58HJDgHUWLi8b4yxvdSUu6CLymXoe62VqmzPPgbrta",
  "key10": "ZCaex4avXuatmWi5kLwT2iY61iiyXjcaND9oM5WCoxYJgwfPUP6gj95RvP86uV9XYt7fkp1VqFq6zTvUsYURKvS",
  "key11": "6175Lv2GMRFGxeakLkNKWSH3RSXYKQ1L2Z4Xx66Y7DXJxJQM4UDyXitHCTRRcswz3hhXFdgnr8Kgh47sRgEtTzK1",
  "key12": "3M1tNKM8AY1N5pK7PCLfkVoj7sZdKuTayBsbSMKtUFCWmQRiwhwqXEY2phSzKTMdXwDPWzcp5EDHqC5RoTGChEoq",
  "key13": "2qhPCTQgi2JGgLK6978jqeywc4qGoQ3wtL8QtU88RK1F6jvye6srQUg87PKwAmEgKG36sz6YdRZuGJaS23MSo2ux",
  "key14": "2ZuyqhCC6k1ZEjjczEfDr52dRKfL8iVgkDzmUjHV4ncZvUtXPzhVbXHkaczTis9L42Xp9stVrh8iWqzuX7oMX4sH",
  "key15": "2nXn5DZ1Bn4UkTRz8zeFFesdJNBEnP7aLPiapAXT1wvc4wm4PDW2UFjPvLpQKqv1wZ33qhBjTKEg1BbGArzxgviK",
  "key16": "26kTk48rHPyc4i1TpKhEjzF4T9V6EbmSMD43QRqN5nKKHw9jLXZFfxc5TNtEkHC2e8djcZNKXVbSyWWGFNkWYNoq",
  "key17": "3QR1rfQryjuzNqLfMryC9hDEMrvuz23aeCLxgKXDVn1UDzaUW5ZX5y4BEGtqDWFdZweSYcU2E1wMEgiAVi1KfESt",
  "key18": "291BkHFtrSrM864iUrmE3u2aEgaQWMYuQSYX1g3Xgqr3gswBxPDeHnjZXepVjGsqHwW2orkBHyFKyfoAvRLFKW1J",
  "key19": "AGgZSgJYWUVt9HkanKWtTBAjkJCxUxjaoGLjUcWFJCf8wcyxA7wWiDuPjRketEVg8U7ZUNqxHuSiJh37nkyt6p3",
  "key20": "3WfCzCzfaxnE16n4t2vSUqeQvx7wzj1Q6g15SG4rGZGyXXUqfrmcfXGhaSjLoT95FxVip4UHiQhz5zYYzYyfXETU",
  "key21": "ciUGmJAcNy5P8B5mzzV7GSPU2zciHRWGnjnAjf41Hetw7Vfu7YQbQs2x1m4tPuShdoPHFnhRm5RiuWe8Nzg43q9",
  "key22": "2QCjYmGQCQUhqeV4LzT6Uxaq1sxe7SWsotZ31EeCbQjSy9P9prdrxrBzcdWdA4f53RF241BVTfmEiF7G5APwXLhy",
  "key23": "52KDu9g5wCkNXhMDLY1M1WHXKCuHBpA9o6KUAzDxBbD8u88NhVJniLEcsbDqTbmniTitYLHkjEyu8UhfJzn7eWF7",
  "key24": "kyXzQL5hZKzXLhRt3V2yM82pPLWCbmccsWP8Xsv3kGTmEoh7sngvCbJXPsE4daCTQFR76rgStaskv94YFP2PNxB",
  "key25": "3wN4YbiuoWP5qMmD45HCr66dQWbD5BT3LXgK2wrFtumgZcJ8oLsnf3R87tYqPDP64feMoqUZm8UXyavpT4Ek7iqA",
  "key26": "3qpYfqynYz9Ch8EriRqniPNZNA2bVftBMBdfLEjAw8as1mHBY6bpTxNjxJ78zeQtnexnjGpLQya5swuAiNhERDeW",
  "key27": "RNc9CHGS4v5RdxZPxw16rJ9iRrZgipGY9wNL8mXPopQ1oVMRLXBNQm6E16sPBYkgx6YQudYQrKoSqgfDcMkQjno",
  "key28": "3jKtDagdwgC28oUoUmsrAHzv7s2xzazjdDi5tdz3nFBT1rZK1TqW1mycnLZXcq9co3MiB3CTFfAwKk2pkQ3tCzV",
  "key29": "4td5iRmuLZu6fwD4rfUjdLY9eteiaBjnDGre2scPMtnJH2dyMQocCqWQxm3jjuCNNpgsHEJ3zQ1Y1r7QU7JkpN1h",
  "key30": "wTXHsoGVbH7Z7VTk62CV574mzcRg2jwRDx9KZ71GVee6PV8LfqQmAoxfvSXUCusUJgvkYqq8bHfbGecy2WKXXFF",
  "key31": "iWf3Xcag5BYUY1rmamYm3o9ikjrSy3QP6CmYSzy97Fp8s1Qx1LTdRSutduUq7jWDtFwFFYx9CPRFYaeYzhqU1KR"
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
