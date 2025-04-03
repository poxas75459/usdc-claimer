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
    "4K3H46n333ANeRcCBtNBFRF95xtNdvJvmRmXCn52VQ42xFLEohLnWJ8f4xLHTgaiha99NbHrd7Fir5ABNTLX4dYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hmgxq94QYLZfRJ58YjH2WuJ2sFLYDqSxdA1Ri2apgbFdTT5Z9YqroUyFHRj25hrUMqDmrh3R8FxzBU9G17g2Pjt",
  "key1": "YGscycNJhzvbJdqw81zRWJZ8kXETXaCvwi9K6YEFhDLqUBmPGn8en11zBFsNAjTq85R37oq6kCvbaw62NvF3Rg6",
  "key2": "4eGNsp56pZMse61CUV1LkULY7sy2oHGRBmcMHbKTSB9JBLbf6c9a1j6aMuq98NXKh45ChxbeWn6tpqefssJX7rpu",
  "key3": "61D3Y2RQaLzqG9TuPvVRRengcDjadqTaiLRrAeDk2JVno7hHqe6j2fLvUZE48Key94WHPXB9ufiAB4pH4LT3s9hh",
  "key4": "3LufDEvszufFQCD9cGogyzdsKFNa1Mqet7siiTLeb3qYPR2r2hef8w1GvQeucxEPDQ46JZpxLu9aN6us6g17kAFb",
  "key5": "2GJYd2iqp8YhYSLiTd8ivBsn4DRgvsDBE6Qmf5m8dsBUmypeD75B2CcC1jZvsNBUsQCdvm2JBm8vzgfX3GthyQhX",
  "key6": "3xFWUWSZRm9T943XcqYMGSKZN8YTAcdAiuK4w9GHfPE8YLqf8U1ZRjzXXmTDDKUhwRc9tJe8dtr1P7prweqqu1uq",
  "key7": "3W64cvcHtnYeHBDKjJSCoTEk1KojLAXVQxb5xg96JUjUTEXdgSvnThRhbVVfs3HjxQihSb97toT3hBQzqFXLxgQk",
  "key8": "3vwSqzHSk7L5wgKHqUknkSKaCnyWSYpWdc48TRdFTkJu6SXR64Fknr8Wf4vvMpih5iT2DjsyzLv6sXiv913h7RV3",
  "key9": "3V6746WbBDPwmgHNHPii3PsCATSxDU4CXdd4wSFvYM96oRbk7bJQfhSiNT2zJFLRbm8erDQHAYNhNk5DtpGZT5ct",
  "key10": "4gk3P3vcGoMjXGz9QyxDYpqEhuYZF5QwFEAm92gXMj3Qdp1ybvFdjsf2MWeVd2B2Lt9eYKSekViV9iP73x1pRDmR",
  "key11": "4eWuNApkDHmLM1NAFNqn1ENZUBtThYpNNwW4UU7qCmnqkQZV4ZkVqsmfbQmwMR67d3UkkCQoX7fKy7zFerubaLxw",
  "key12": "257Q7pPA8vsJfD7AkXW1VEsCrWgJRRdYGV5yzw6fTdob42gW72x5nAML7m29WdnftEE1DtM1AMv3P7F4uCP7GvjE",
  "key13": "JgddLSRhMFZ73n5QDRFz5mP9EgjyRmJfFmYVsq9iYQPNsfBJ1jF1TBpgD7CvvoeRdG8P7bMvqKkHtFLw7osm85u",
  "key14": "2E9UhXnP1XvNEAf1JQ4dQkyGYqisGCEj6gU9wnVsF6FL3mqLdc8zZXEmzhVotGa1qbemsbPH2CcQ7XAmKgup9wCy",
  "key15": "3AonPDJNKRzz2bHpGisQt3TapdpgrQKoB3U7HfDRB4mg8iHbA7jVkYrGZ6cMHtaQBi1ZtLPcqV5Zv37u5f2ZyyQ7",
  "key16": "4isWJuePtwZaMak47oqGRh3trJh7AQxNw6onPhEGD1PgcWZ7yT44kbQYRpnkvb65BypEMY7ZUMTyDRxeXdXZ6uez",
  "key17": "22SrYqef3UtjgjFxphqtEHo16ogdpGyXPr4z78nuCAfk4cgEtuoQDHXWjT2J8Z8Azmfxi5FZUL7Hy8CPKXnrQq1j",
  "key18": "5zkMQzshYMfoQiY8HAQprkX8oecrb6Zf8HSiHNuA2bG6FR5yNrrA1TqnUu2CQLo7do77bUFT1uvtkKFuQrEXtsoq",
  "key19": "3SPuvhu2XLyTcnznH65JgYppPM5QGaU2XKctq3CUH11iP257KKB4YzoMC5zAEL8wNeDDHNNhffywtXnth2381vvD",
  "key20": "26bY62LxpfP4K9ciWMVE6sGysPkM5KEW9oYpkDrCU5n8jXZ3deP8g2DAZcMnPZ4KGahad8aB2Z2ACmWkjKBjnrMM",
  "key21": "5UVWqCjhvCBr1QZZ1HTKUBvQv2kbuto9oTSziDULrgtiYbSfx6pKLjdmKoD9mgpNBAZmBwHdxiekH83Psm9xXgMa",
  "key22": "3bo97gRX76cry2fasv4MrAF1JDqaPRFyTP7vEZJN1U4Dddz23mbQNkMeY525PuvjJZPu4kPrq8wcnEB8d5WjPu8j",
  "key23": "iuGk9SV1Cboh2w3hyudmGmYVn6xYQfG5bGHMt5fwMcNrkCA7Y7e5rKq2dh5nVbJ2gogakSS6uu4tBJxkPCH4frY",
  "key24": "yPzJeYAfDG9gTwQGfZ6RBxh31bRhY2Z6DjADXdAgcZhQGiwwKAEEhUkCASeUNAoGj9SZ4DKch4rXy2S8yVnrYZ8",
  "key25": "4vZ4RPx53Ho9qP1qocydoCH8bGtJnJy9TgsBmkKE435wm8ijPoKh5YP1bB3Wqm165XeYwHHTeXUtv8abZyYgweJ3",
  "key26": "5K52vhADaAZgZmg8W2S9TAmmXZK8A8tEwo4StmZvjWED8r5X89NBawZYXNcxh3TWwrJwqFHFvh8bg2LZnWdqoCvF",
  "key27": "41M1xLKCtUNdKCiCQGr3rPMut1iRALDDr8WUuVW4YQWVem5bWhosNekx1yS4Qz3iL7nydR953Mxp5BtjinDz5Upa",
  "key28": "2zdaizwT5YrsnaBBP71zwSuoTKMSybSy9MB3XjbStcYWfnVta5Mf4cVYmjN8F2FKAJsiynkBUL7EzFr92owSqGsd",
  "key29": "X4t43MJK5bLrA6Cx47N5xELpose6tdF3ebAFDxresaJpzVztGmsWG5ewAfxxtRsoM36vuQsTMqdsnZ7pcuz29ZP",
  "key30": "2uTeKAaJ5Ko6qu8YFAeHkSc51UgjMUNWkFmrstU3wRAJVapaoE1o8LThUGcXpg6E6884xeRzFhLSoaSF3v2np2WU"
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
