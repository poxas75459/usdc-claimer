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
    "2veeEjVYEEV8Fvysms1bPbCpcNpJUBBUVMLYy18QcYNhAFbozC66cY6DeniG7CvSUYtdsMXWnxTJdKmWnSmmpYGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3tfZYsQYUxSbbuPP7TWeDefBMRmh61dzHWb91UmL2kC7PiY3v9HX4Xhec6y5siqiZKwe8ViukLTSww93vodYMf",
  "key1": "FtczBGSqd9CTeMx7Z6nC5uyKj5vNTpkWLirXPJeXX1h1WyVtZC3D2zwyAxyiuYW6s439faYvkK4GJgivZSZH9oT",
  "key2": "3a1SSmERai44U6RQw2kgJYkhEPEGosPGVTmH8GyJXYj1V3ub6UVwmhgrnwNYn31gtZJsGZF9QSPYzCwnw4PeE25k",
  "key3": "2bSdJvywgxgXFLsSf52QMWyk8bpAva9zKEYH3VwJBaZrgE8BX6giuyhDWSquwBhYNFfYvBcyh52VjnMkQYLftApg",
  "key4": "3LEatDP42PdvstPGDWQerznHWFaTQ91tSFzixPEwQdEjKdTHg7Fiyiad4S9DW7xZQerkrmp9UiVSSeBwWTzbvAv4",
  "key5": "4iRbdak29vEbjLZ44PBWoz6se2SdLswp4Ne9itDgUJRAMJGxyzVjpTrCnJSmhp8WsvY6dHhd6e6LVjDXcJiTbc6k",
  "key6": "5qcrQDadxmoCij7MH8KCYt6Zp3K5SHkW6V4pFGgmKVzAcsDpA8D3AChvsQdibDw4YmkJ9b1uC1mRJ61Q8STRcjND",
  "key7": "44gdRhasDMxLPzmXcGak31ZakyNjUd7YEv7hbXEGPhBqBn7hrqfHDLvsM72rwBVA52Dd9HpwJrnJciLAGNT3Rb3r",
  "key8": "25jmhbfBBj3LefSQXK8MAKiyuqojHZ5jbuYy6YtgfGcGD6cCCq4ZtQvinwqLjxkabLYoe67drCGm3sd1LCxnxAjD",
  "key9": "3GBa7Y82EtJCXQNc862j27yTyGTwTRrYGLEg4AphHQJLShbnbe86dj4DtmvRMs4CsQyHdqDG478exCg2DuMNS16b",
  "key10": "3PZ9PBD5zrgdEVCeFEXMN9uhLAxJ9Kwcg24kaGHupH19STjcSwrk1gW7qxMy9TaVjSTWGTM899tcgnhp5KG9s2eV",
  "key11": "4W17knD729TjFZFq4QtJgJ7PgZ5DvSYMVmW1mBq2qTvj9sQSfcyDtSDPvxtEwpcxr9fGFjmAvHB7Uwqyn7BxtZwY",
  "key12": "29gBG3zk4zKZF3G4PnYhcSqjHyuCNuTZYjzQEvgK4LEGvxDxxwXnpVk98WY8ujXUXozoycMpQNMQ3ZvDesSzAYEw",
  "key13": "5Jv9un5846Ar2zVVQiVqj5dWoFYitYYPDsC2nVR6oiDvaQhJfYTDGgC68mMwxQ6LYQ14fPXShPV7yAeskJPaC4Z",
  "key14": "3vuKzCt6eWcB4jgeUYPuVAzhHSuh4NiNeCZ6iUe6ox7ypToJirZcjCgD8XXvNkdN88cz7u4M7mQRVxLFR9jwLB37",
  "key15": "5Sd1Pgokbh9ye6bPXFXugjDc674oGDAhTSb485jVHyNd1E8hymip5qSWXkxkoKrs6T7dLaSvUKeSSEvMRHDKDkgG",
  "key16": "2rs8fpvPJytUvh1AncEsp1QkaQbKyECUFyoyjTdvFouabfZweKc7r6DML8a5RJSvR8UHGft3CyCWdNMEYFck7G7G",
  "key17": "5vLMFHUqq4JFRfvveZ8ky1vPQMZBEx3ECTpxqYWGpNqc93AhuLrZ75yqbC5EPo1b73NsBagf9rbpT4VAsiEv18jC",
  "key18": "2cmiKope7cFr6rkchbxS1VZvNvy3CuqSuRfzyFojhHWLWppnboQVauLdwJU6HgDPesVsbJd8iwpgPapRNtnmj2VL",
  "key19": "4hn7LuNzuakavT2x2Xz8qHKWXvTyBUgrPjCBgoRX6pzL5UxDgGqCJJRuWiNP9u4Tnahd3Vc9oAyitahGxeHmkHY6",
  "key20": "3TtwEwNDThrcF4m4jZBFiPnX35BLfNJL6y9Rcuk8cGx2nFob64RYuPR6Sutw1X3cFCKEci5T7K4twoZsCBDLmzVy",
  "key21": "3BRTe41V7bqAviyfmTqMYFKjutbEJKkXBBcJ5vfxefYTzmufy3AoY75gzEHcqu6cu3zf8qbEaGZzQ4RJfvMKaeaP",
  "key22": "3AsRRxQE8hSWJNxmFwoigc1EyPbfKrMr3LY5TwX1L8TkpNRSvmwxT6RttVMrSvgmkuxyryyUzNsKGMNJaa6iydKD",
  "key23": "xadnZCm3vheZy2QuJCH5pGPcZDDGGjFu7D7XsnzNRb8XCuRijWszUFqFY4Ya1tKjdS6yVG7Bw38rfFdYQvau74v",
  "key24": "5AYWeXvkCc72pHc9LY3cH1ccUHEs5jZ9eY95NYTBRN3qx5jzdrvvipD7AuH8j5FQsKoSe4MyJqpB6dMNpDfvPEUm",
  "key25": "4D75YRWq3j1syZoCici92bx6PuRS4Sbsrik3uTtHKtuaNq2XGG8gKDddTJG8aQtPLh55htQMLZeyjeAMMRcVMisd",
  "key26": "2UK2hMtZGDb2pC3hxXomYehjUi6XTsfiNXSyG9V9oy4mqNenvdDZ2sHVQbik2G2HCrqvVHZuM6HqHNbWaXvEMpc3",
  "key27": "3wVdxoZ9zNyP5eRii4aSYc5xwEmfwZs2admdGgjtJMt4jCdyKHKidV8YHJFZWob9yPuRas1Ss18d5NgkuUCTuE4z",
  "key28": "5KNZ4TgAN2zTK1KFvos384dhLEB62urPKj2KL1DeDMECLGAt4Yp1kT1Xj8X4rD41zBNcZDUyQzc6f1pkboFKiTmF",
  "key29": "KDEvum7qLR49zLkAZREb7TXYEiQZBqMoWZRkq6vzXQmP6ngxMz2V2jEvVN4edPN9msP15WLVt9GrF5MS4uGb8RJ",
  "key30": "7DBakW3hhhQdf3XQREDTmWtSzAoKy938A1mX7h3mUL9kusBoT11xbNnBfzjfWCcXSiasLmYzUbXS3PwSZVxWrLQ",
  "key31": "3CN6cYKKV88w6y2wAje96RiEdF8c7Yw7ZapjyWF1iDn9N3Rx1BozNvftLUrNxLwJ19t3YHF3QzyJPdjAcHbJePWC",
  "key32": "2qTRaYHiJ3U2Zpj1WpruqShCY3HK9Qn1E7i2rcYtsQrB8go6sVUF4kj4KD7jmBZBsPBkuMBDg5DL35dAwmtrA6mR",
  "key33": "mVLgqs9q2aCSPGJJhmAWTA3z3o4xKw2xGirwoqoXXaefFK8fiCYbc7npv7z7oemCGePHouNZ8iUjLY79YVSEiFV",
  "key34": "122coXAku6L9iRQ1jYKszujmaC2goFpKV7GWwKBtP4FSnNwrqqsiHagZHUtYrBAQozexzUAaouB7FyibsmNpzdBH",
  "key35": "sKEdSs8pxgutsfGBU5sEnSd5LCmp8LmbxJdfe2GNzJECCdgM55tUJsSeBqx3U1MdYbHzen4T25pPXLUB3y7zQGW",
  "key36": "2GRgqCAYVzLefVK98HBsyQhrwML6BjQeUyFz2XBu4rT3njeuYRisPsFKrtU8PTnqUB6vqfky44HUo5ajA2L5S9Ps",
  "key37": "4ZT5gKeds7wUMxUA1KwwwWFrfmM1e35d29jw1ezY47nk6JFigJZuKaKzKFykamyuMn1FMeKecWGojmcqeE8SWCZH",
  "key38": "5wRkVKs2qHX17sCLojaVKPoJwW7ZF3HAFb6YzJy2aSJW6sx8nNUtTDUuY9k9krj9EVeiUqTaJegYZw9UbYFeybDT"
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
