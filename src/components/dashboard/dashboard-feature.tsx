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
    "5W3KgDu43UWvkCQf8uRtvZDfaau9M8QcySoG1Yvffepdj4QzZHdxbqJG6c41b79iNkMAHfwKRWVwyegy9qBTewe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUccDSYfyqwki2YfUWtRaDUdbmaLwhZNgkLG1RGD54GeKSJaeZLDBeW9J9TVLoUKbUTrj2jQjJJpyveBUixAPfr",
  "key1": "StV7ox887eEA94iSVvnV3EPayB8ZnAsSgqQvSn1AeAqVByNvZvht4my4hC2VShryaEmmGAjY9mg8fT73fBfQ9Qr",
  "key2": "2S2tWuvSEVyDDeNgeThknuygq4wpYWowX5vHig8tGBx9yboiyGbc6cKsRgd7YzoRP2DxUXibDZhDxBuxLT1iVpup",
  "key3": "4JQizhYJVLh35qAah4pgkXKupDqCa7SYsti4jHW2zFdGpq915dcSg9LQTb1sEB2UXWghQXfYZyPeZYMLQtBzzrHD",
  "key4": "4YZHF2awPBsUxyLToo2yBnNEGCR5jPSVVzee9KoTCPtRBKgPPDi1K4NAiCr22zwKbjudFaY1eyAJqMmzyKNkJgjp",
  "key5": "PA75RsWHcs5hFqra8xtcukP9FzMVp2k6V5np624deCFxQUGJ4ZTuniLuQw7pFCxSidASAWFR7wp2vfd7ZGZVgaV",
  "key6": "5qFSFN8q8yBhKo7HAdSeNKkXAgAFQppUHb96U7FhbQP3VYA2TePQodT3ebP7M3NJ22tm7ou8RGUDt3sMRxtA6iiv",
  "key7": "3GWgkWxNUbpa5PgkjLHxXWKn1mYidi6UAPir7nMJbQJtk6xwv4zu5E7BxJEaVcUhKCwF9EtSkTowbs6EygxfDBEm",
  "key8": "2WGjcpWTxFCsuHWM9bDK7LnLR99AT6DXQNk7yPFVEsFxSZWdHd9YoNCHzVXAo28Qz1weVQYoWt5CcmrkJqvtuq7L",
  "key9": "3aUgBemozEKgDKg46jaUr5vr9rHbTqc4xtackwtPMRYcd8J5SodkCdkDUJekv9xA6HVkkbuff2EeK5AR42MAKyy9",
  "key10": "D3PgDVTEAZcBDVpG7CZJj3kV2dAKLFF9nGP3KTwwVyz6KDcEUnwHnM5deTkZ86nQBoqmb8Bkv5HdsBbGjdtyZFr",
  "key11": "3RcKiimQs2moGaJiL2LBsNdbPik7Yo8SYgAQTfAzRSrytmt9tEo7uimwooJeD9nciAHonpUKAk7Q7wb8DLNUGjD6",
  "key12": "2ARj5t4ibq4bhCMMMs4s6NH5c3fwZcZGFHT9J4VRBguTRESamTKSKog6h7WX87guRg4CmJWpmpLLvWhgGsceY81x",
  "key13": "2KB9dik5NqZaiQyDo8GwSEn5A6xf6hKUkzN2GJdx8D9PyVcHcujU5fzzcaqc2cZChFLzoLqEiKs7bFcvmepkdQMb",
  "key14": "5DXPQm6KUACy3tdLusvrcgQbRMmB4UX7qxxwmHy2xxUQ1w9UdqQF8yLRBeCQaAU9iHgxGJ7JY2UQX7oQmoiC27mQ",
  "key15": "2DZqmijc5n4pcHzhAJMi4t6up7L45GoAk48GbSqXnXoj2kfvkGPLksJ7Ji1uQb5HLVJiq1ECfXBoaxzXMBSA6s7h",
  "key16": "5yk6zN2WqJrf3cWRPLRzgfmqCWzDTsqEuxUh5qvr6SXanJS3C9K3dHkPtv91gw8Q5UZ9eEpC1D8UMThUwN4pPNMU",
  "key17": "2M6TvVUT49FgMrCCeEiKQ5C8j5BCze3RpMErGgSBtpp9MCjjxFbbLmZri2kdq6wnRPM69kPYEF6qZnWgEYPjcMNT",
  "key18": "F8QeBNnquZAGcwGwQwBsrqzSK19cVtqdPkYsL8po9juFvYDxnRDzPyEGCgBi5Cm2BMXUzSwDxA55v73a7dpMwP5",
  "key19": "2ikHF742bVkk6mp7gfJByFgveyWm5gH67qCQ5D5nSpKEsv4SeH6hvPbCfyAj2hjzV9wWRcYdqbsSAae2G54iAmNH",
  "key20": "3jydAiZiEiU47UbJyM3ziYfiMCzFiUqzpxAdnE9ixXQ9f5ghSX5VNbNa1BAzKFZewqeF7AhAWZkzBxYqKBmVJJKw",
  "key21": "5pTJqtr4D3vmydHHuTNwUUz4iWwH2wPKDBSgLiUAfYvNinRz7YatM6uUiip6jP9CG2tUCCA5pHHy5wRPpe5m2TVX",
  "key22": "oSfXu2hQFGBeCoyx48pc8nGVutnfdc96BxWgQyCxZvgC2DUCRyeKDgDjrqQD1ErNsvcdeE82shVrMKgbSK9ro28",
  "key23": "3zPB6vdQHQPtTY4SJqtjmXUqKx4t89SR6GmWobVHgUYoXzNrrz2bu3F5c4NZ5Fz4QeLbtzSHKpubyQxvKxfPBXBw",
  "key24": "iHjzSwyfBJiFMacrMWBFFC2FYCs2eddmbhA3jn9s65HTSyUphXMtomKWJNiKvMc7VaDRrx6wDd7G26mrUY5GKwU",
  "key25": "2xpGFrKNUmkwLD26rx3SaGPiBcVg3U6iJ4CMiaVVDHV5DB3Har78Heoik3s8y6oVsYpgxGntSd4eLX3imsrUA132",
  "key26": "33tQ6MVSz8QVc6w7Bq38gMmNjYK3WqKrjgfsQP84vUj37ThCyciKVK1oR9bWNNsTAgEdDoX85GDYqvUVVb3dAniH",
  "key27": "2xMdvRgMdkyg3Uw1iGTaaZNA9xQAAkJUvk74syDkL5qvhKvpaof15CHYGVEgXhELWjsKG1sfSBHKfLckWY7BkZa2",
  "key28": "3MsNkW59YDFEzH9ob1saenChFwrGdC3hfZyW5fxyBrQHCDx4LqQiJh8AExgtuJjX5pvBq5LsQjRfdKKoxNU4Mbqi"
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
