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
    "5q7LyQ4uEfa6tuq4aRy1oheSqazMiAhE8gTrNqZFKZprfRQxTZZ4N9hqGnfXtvLWWis9hfRRnUfLn8gCu65Uq4jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQeSfK4imZ3Uq833LPuv5SxZkzohrDTEHKGypDMVMQuUJMRV5cYQpakjqcb14Me16AnHgVzxfhLpoud8NrFboGx",
  "key1": "44haKT78HXNnn9G2yKS9ZVpmpCCP2KyEJZPD1omhpqSQtif2q6gezxz8u1QzCKZSXRCPBScmH11M2PNaCHM7ikJ7",
  "key2": "2DVQzG76bYCEPZywG58ZSvbpaJfeEmkJviRupMqq3ugsyLwMKGUbkKCejSWuZyVgauFqAodZHLRHekr8AXPHxFrr",
  "key3": "2JYdg3ZzjGLDLssQ681zXLSvNXFyHdKPqbPUAhdX3YfL2yZnvfLMLjvMEEfB183RZGhe5HHs5Ncyk4o2NQ4tmw6J",
  "key4": "7vEDtMWiY2k7mMPKVmZq2vSesSvfbYxFxPFTf1ZbSU2N7NqUMRmczLR7ejDEkNmSpKfR6nTerzUDVTk7VyW1MVm",
  "key5": "5DhpSZ5LE4AmqMpg4fZTKCSyTdjw7de5vQvS336ABxLZTnkUhosU4jzLUjJa2XLjTwmcpXVCsHNdGeQRYj87nNvU",
  "key6": "51gF9ikNGfXGYe5tk8hYeoTV8se6NnApq18fSroA8qPHsQvyJXmMrzJ1ss94pVf5RdSGz45MTLL2CwDbL7wTZu82",
  "key7": "4VaQvZFF1Y3XW2qXx1Q9vNtuiEqA9KBsEP3n7Txrm3o94Wx6GRB6k7MTjgFSz3kDfSyVoubLJTCuz5supqsJVCSf",
  "key8": "z3kts3ihZ43grJFnbamgE1NwJfNNZzJwWbWNkjLS1X1Q28RALMZbL9YoTkusB7woTpAnGUQfQBCYceJEz95WEqr",
  "key9": "4V6gQ7dqjTA5aMsq9Qg74JU8R81Kk73sBJ9P6hM54uTQXJrZowBFeunbDpMzGkL94GB3S23LiHPhe6uygL2kKDRd",
  "key10": "hPmSL57tTofo99YE5cR3qwKG4AV2GLG7CAMTqsuauibHFNN9zpPJZfnLw9eBLfWZ34hJSxDhdJePrXSjoM1ohYK",
  "key11": "5ZUFDNh1HAi1k5QLe5g7ZZsUDVzGBCCxRShgxzkLFVHu2iynaVQYdKSFhB7ZPNGmbPQr96SAnTULeowWS6ihgjeK",
  "key12": "5ejcLqC1jywe4nean9setnmyt2zbxrEvZ5kfq8ngfTb2ZAjdtsw3J2VrPz8n7ETw1NcXRsgdEgArd1ruU156P3eP",
  "key13": "4PSSGDABmQeVNNwAF7xh9qfXKXtsjsLAA95p3BS6kF75HExXp2aRurawPbJ8rYAyJ46omwgADxvJcMQ4WTLHg6Jz",
  "key14": "KP3ToVC6vswN2uDQ3EEWinsWYfFTS2SvYVmre22WrCeghiP73c14dz219EH11Eegf2dKSaBrTqeB6Q2ZpuKXohx",
  "key15": "2Q1EDDtwSDyLuh42iAGB6LJ7hsqLJHuNiGiwjgTTcc6WT5xiGDkCBt58iQJgGnLDafhXUtp1QJzYFdXV3k8H4KGx",
  "key16": "5KaoNng6ktEywwAGZXeqZza8paUdXssExXHNmSYhEcpBJD3xQ2DoVTg9pxCizdQLXvf9xg3B4xXQVZFLmi1t9Mk9",
  "key17": "26ELs1u7BimmWQNYhQfj1GnU4TKbk3o2oS7Z9yQSzWRLpW1mLkpcysvjZjNThQvzam2xPpgVrZ2YoGpdknaPXokL",
  "key18": "3NqpVnwEb8U4WEMKG3UeiSaeN2SvUqkAyEbv2qy6Q4f8MWZv7UNKYqQrTo3wEmM4aSoujkrkU7WC3ATX538zToGM",
  "key19": "5kjoQZQsr6ByFyoBRxrSJdg6kxv45yBHGs3BCjTyEhnmJbQywMmfFVss1EvpEnYfJ457GxUtEHSyg7akVKMUrCE4",
  "key20": "koFuqwmjF5ys8FExqu2QgPDbAUBy7mn5U9cJswXqnbfcw2xBwKfpmwkir55NXRwMHSiZm7oM42FRZDFryRcNKu6",
  "key21": "4BRtAnGZbhpnwFvp4cgY8bbVq3KkS1ydmMg7LnTMNQsLUuEeq1x57wdSK7YRFqtVVDbBYFoohbWQGcBDE4VN8BQZ",
  "key22": "5CbAnMQ1FTbvgnLR8rsXgeB1UutRmBqhc3WY8rQgHm7C6oJCqRhNBrcVkuAkBWPPMGQSPPpSF3ukaJGcBWb8zJk1",
  "key23": "2DSqtYnN1t4XUweUFXYNnFaMrQgzgGSJuz3epTBWYPQVxVWw7Gcdcjr3CED1SUfjkxDiX8DqEfVDtwp9wggi3bYJ",
  "key24": "5pLMPgnjtFcw2zgrsL86tJWKuWBHMMUPe6UaYBxacaEsNdEhexKt31LKDZzrjG8cGygu2mLPdVAatvnhf1kgoZj1",
  "key25": "2zWeSdKBuu8t6WL3anvtE6j3myjcdZ5GyJ9Y5Jsp6EhjGxVUwJERTQu48bpemnohjv8FXp4Ssy2KZRgmn1DZ22mn",
  "key26": "fcXJLQqWjqt8sSaZDHb2UdPNLunCWwMzC9Fjo8zuFsQ4SHrAQFK314WmsMooS3HjoSaHGioSp9PsbHtUvXnmUzV"
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
