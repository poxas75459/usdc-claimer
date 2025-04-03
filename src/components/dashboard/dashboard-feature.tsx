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
    "dBBU5YGS9tTpsfXVrsNViProk6qB9LPRMszQ1LVVQP8GPrcU2iHGX5QtBK6y6mrt4PZV9u6cNHzVxwYquQYvw2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kd7BJBm6rCQEMUpabbLz1EcuxhMuxWtKGreCqQvqtR7xqTqsPeg2wketiz8XQtVVMP52afKfAhG2yYy5H3gPR8r",
  "key1": "5QaeYCCGmvTGudk3Fk5vokGXTd21WauzQKZPyAk88KpSyWZNgtco7w9nVXswP69ba1KXEanLnNr69HraH9HQZDtK",
  "key2": "4LxeSmJJASnv3nD9asncSAv79kH4QvsX6xDYfc8QbsTqiGdn9UbhzkYfzqm3J5QMpgKvZYspPG9FXCGV1TEFqiFk",
  "key3": "56uvwnSRX2svfjCRDT2icTH5h7XVTNo7DhPh6Qne4jehphrV5wEjFB6tww6PneAJXu3GVqKQm5iLe4ZvX6dXoFrE",
  "key4": "3KPwYhRCj6CKPemvwSv4jDJVpAt6DrKiqaXqje4wD1YxnPz7mTMnLqCxynMkoBJEe5N7vLwonyheBtXfhbvTzHfy",
  "key5": "2HDSZHdo5rUw5LsaRMp8BvhAisfDu8xCHPhUmAjr29Wur29S2ZggDRQqqQwtbyLpPov6own2CnwYKNZ4PNNWcrNt",
  "key6": "PSwokaWYqrexvdurgaEBnXgNM6WXKX188GXzoCNZrSZKHh6ftaKDgDUrxi7UJNi3VcFXSENDBxMKHdDJAg4tsaS",
  "key7": "2MY2o5jk1zgSSk6iWEjtum95rRfZCych4c3W388EzaVXVM9RjgTXo2BGwvtkBe94RNS5JNaHoBrfBGQYquDCB3GA",
  "key8": "5fQWBkwHL6xgmx2vNUfkogLNoaE8VDtETY8g5qVDwd5ywFDsdaPn1qPNRoiZJF5yRZG3M5CFsmhTENPcRT1vXzW7",
  "key9": "qbvEHdWvzEhpTRdrwJsM167VQLCQaeznqgQ7wjnRSHnhchBNQtG1Sr8vux387ArJFbVhsH6PVhuPx62z1o6jpwf",
  "key10": "44D3nMyRNnUC9f9mh8buBHxnsqM3h9jh3VPPgeWkiRwahVbKMwjJjZuqgcQVy1ABsrAwrfSyfJXcSRnNtktPWnGd",
  "key11": "4UQz3NBVGnei1CL9mneaxF8aFX86yfrkcrrMCzSvsFw2qSMtZQm6CHAyhQqtURz9M7tBK8xbuGC5CQcKabhnahAT",
  "key12": "3SJ1R9NHAYuxY6Lyun2ikdGTMfC6Kzju7HKjku1drhNeVvJEeW9yiiXjHL8DfxEJ7G8nG8RXPe9mTshNoDo789Gr",
  "key13": "PvpGN3Xngig13Vja33WcRJC9mweUVFrMw6XQxJFN7f1Vk5UDi8JnJ3wJkkGpa3wNeFHx6bNswdggxSi4mLHxDMW",
  "key14": "41pTKYfuvxLJs2uy4pzb2vHFLu3h2dstmVWtGzmLkWnLq4n7FE2j6mX4ELSMXm9d5oYJptHjTH82VsddD7sVQpVU",
  "key15": "2WsCKtqdLsE2JMNQfVSVHJkQ25CiKFXhmJe8ikZ1ecBU29Mmm4a1rfQL79BD4AwfyAyAFY7KmfDW7uGTXmZEN3ni",
  "key16": "5edoqo1GfKA4fBQwxSjbSFfiaZiwd539rcjbHUaiEndLqaARV7xAJwqTcjYAk9EU4YKGU1K96EsgBYL1Vf8j4x9i",
  "key17": "3z9hMLsq4f4SUtPkdqxvxpeQtZoVkZBTUYfZttks7qjYxPDB5APf3WeYxYS5XWdkYXc4MjZMFbiESaMz6v3jPvR7",
  "key18": "xpFRfs8uqQhXtykrPwABQSQPTdwyBYVjXZAYQWvRnkoNueJnNDFzAoA2SsNbx6tZtKEMNCPnrGPtkcE7YAxWm8y",
  "key19": "2kGAYxmJzEG19Zv7aBJBuKioHRFnfdwj6Lw1a4rrsEXuBpqNGFnk8XHiNHzfp9Z6K4nguRg6ExE6d9XqrXwUr3f7",
  "key20": "LTAfi8PkwLxVYX46oRTvGdrdxxFrRsD5UeHXex3aWkT7fMWT27fyTBqehNVUnkz9YGtFABdSorq1ZRiLNP29N7a",
  "key21": "4RCa3LBrkZjsEfwRqKtQy59EqVDoLG6qApFQCsbDeUiNBZB3HerZSeaCzYjWG9gp7zNSJKYeSumt6JLDSSjSngCK",
  "key22": "2rP65drczMp7YDGrvPKjcVgTzNseLnApVteakZpPXbiyScpG3bhs3urCArn1AwDY2ypQDugGAKUCi4GxivysNoYf",
  "key23": "4bywqPJoKVVDi1JLpnMCtcXQvYMx36GdPYrnbhNEo9PBd13cM6VjZQ3CNAZegcQjtdpJZK7WfqErMkzAGk6TQBmw",
  "key24": "4x7wKseivEuHGYzs7fBKoVMsWpjNDTriAMj4PYpsHdGJnsge7dKkcSpZgXYBWCDx4WeiK9miUMLn5kGn4cHsKyzx",
  "key25": "3KrNZ3jP1e3e4oZ2LySMhEsSfPmstRn8gqCz7fXxx4V7vC3eCrzriHxuUMEcSVxdE2qdUQoJJz16kt5vsT9AwcKV",
  "key26": "8nB1qK9JFRawTV51RQnxBysUQwNK8ymJQC5DPcDKgn9wN6VkMJEyZ93y9qCrHY9oQmKDxH5aHgBbovTcjBnwhsm",
  "key27": "22QDPQZaBBDHGRVETHjCAfzwofiFBg1eePiQpcVC8SgJzAj31eAwTTNuBgn6WWu1GhvqmyECKeisMKiWNTrhMub5",
  "key28": "wQ5HqnQ5wVUhYYztHajP8FNWB6Ug27z2uFKaoRvfqbPaFQ3NvyjdpL47Sxy3pqHAmv95KHhbwYg3mXkN8qEoJyh"
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
