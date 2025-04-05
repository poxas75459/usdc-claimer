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
    "5H1mypgMor14PeJpqHNJf6npmuUnXRcud8yNksdAfuzyDKGjc1DdddAd7RJeYWBwoPus6TJkWfXndfWhwWVEDPEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7fWuKGRCXmyAaw4XBFmWDyXDALV8EMvUPtLkgCsYCU4FBu4teuAEH19KPJ5ByjbY7iMceWhurHZq3sdbdRZZt4",
  "key1": "UrXSPbxM1XnhzW3fxrfqPBxMeRzddUYBB4Qoy2SsoNMSd7itnKAtPkBJAw7SeB7EALCNE2YkW9xoCUdTJyyvySD",
  "key2": "5QyjJi3GL1LVwfeBJRr3T5etxkepK3XvpezrkwfvfYV8YwehEmeq7oUNDGJ6iA2QQgJRrDj1vF9YYpizxRz8gFzS",
  "key3": "PbFLyyhWJ8yJfTu6ZqvJR384ccuFUfUoULZoh3LVnrhGSg3kNtHRomBFLZKGeRfJRWRFLQjjauULkhRUoFkuVUc",
  "key4": "3TXpju7js5qJEALt8aoFc9MgjsKb6rJh5VeDoPH6U2mBwaJZpEakWqFReiQ1XLAxusfAnCXWwv8Lk6apPgKwDAZN",
  "key5": "5SbdKwjxYUPRUTN7141kkGKdSakoPcDPQpMRQ11gdAdqrJDYtcz6ENGStRZg9nBQS8BxE112UMyyEvmjDf8iVQSS",
  "key6": "5G84ATZ49Ss5Lk9zL9P7mdFWQuGHsqXgzJ39Q7Jicz94XuEYABhKBqArntoYuiar8GFMTZDjApQUGA1GsCLGWS8Z",
  "key7": "3NMxQFd5m6W4ELNmbcpoB4C2H4NwQ3yQiq8Q51A3i6DxWDExArJiVDSqrcapXwySsUi2Eiuki47bqnDPUmJSMzJX",
  "key8": "3PnjNpvoLKNxfPksePBrbQPqZrC82ibZTHeL9fKerVYtXEZwCqdGtTFZRUWKuhcmJhLryKfsDF2TLyUNC1SPwdwp",
  "key9": "3mNw8WAjxedfhHyaHiCJcshjB7jbdyvroE6KsaGBBCUChugmYRe358NgwgLHV2NNGCRT6zC9Kmzp4xVqYCxT8n4P",
  "key10": "33ALPbuqc9gEuKHLSXK1kEaEVVQvPaU7wUcSnuQof4jLL1UzXq5U6HoMc6pZFC6q6PW1msSsSGHVmeEdq9Se2hxB",
  "key11": "3Vyez1MEbEGcds5bKUGkgPRLhLY4Z7RCZ9xz6NPFY3G7KzuXQcdwiEKbzBkb19gNQqwLFPjKddxQv33WZrK3W2H7",
  "key12": "2ooh2Tcrzys5ynuES7Y2fAFjnQ6P5vqUm74rXLWNLoe7xKn7eu6Q6UJuYpfrALaoXE4oVfcwLdBBmCGtgWqdfhbE",
  "key13": "3hQQauepdSQtZLBGKXfSK5EUyhhznbFShA4ecBXN6MUbUQGdbu4E8Wtj5MiZNxGMxxcJacqVnqrhS3YwjYtBx6pP",
  "key14": "4Zie9ureQv8T3UeRKEJdFYHz86zHkp7FTrfKe3uSYy8UyV5oba2djytTK7U9Rn1FhVqVhib9ukYtQX5KouYgidif",
  "key15": "jhUuTkQUUTxXY87AGvjxJJrN521XhUp9juwMN9kAZf6vEcDM2wYt5zUpFUUukBQHkTNmQNSBwWBTgxmvjF8qBir",
  "key16": "22HjmMCmFETBUNrFdjLsULZ2uSNmbb3cbaN82VsW56TNF4TE1e35GyGE7sfivd311Ddno5whC49yzBr2iiHBGGww",
  "key17": "5kJYt9fEDiReSMTZ5qjNLNXniyGMaFBNTEyyBi3WGdNmAGbHRwBrF7EvqsPhfg9DQJQREBZNkaTvN8MeizaKA5k1",
  "key18": "5zBcWXE2NDoJjitS4myQQno7SEvErTDdVbmXbvaWTJjvSpeCWhWGoC3ELw18dGKuWK5u8rmQ6mmcCRbYSgSDWuMr",
  "key19": "3JfQzM19pJm626PWYK7vgTKANypuDNF7X9r3DHDAFMdDZPsHwwiCfMr8VzLVLsazxLXYuH1ddgpQtB4Uwed9W2Mq",
  "key20": "5Nob3LqipeLVxW4W6GpwB6tzaqX6C2c3BVFv6WzQGT78YY4tLwEoPquii8zgq49vnTkNKiuYacQhptxqjXP5Pten",
  "key21": "5Y6qB3dPsEqFq9dr4EQ3LVhgMUCTf3unfj2eS5JLM2MLkzCht82NeFLjqyAkmxBEpkoUTQTmkQLyYhADJmG39zMd",
  "key22": "2FzX3T56DRRC3dU5M743sktYAbaChibubgCPvYWHaJ4KH2U1EwMhchgPWSNdfGPYSnoLH3hD6EkzfZZfLUykh9Ge",
  "key23": "4BgVEz7FgydRokTUMhjPu7NqKpTvXS9SzaRc8QAkZLJSwE8ucGPKTeNRP8j35avCgRaGJFM8ttKGYQQte4XMNW2o",
  "key24": "5EPGGtp7YbTLc6svU3evBGK8dCy1FhWpYL9AaQS7zct25wiCzcVANYTQgUddcR3EfBTPGCxhjJJMHAN2sgjP8fGR",
  "key25": "ocAV8cZs2FvTJUsyaQkfqMEuZeyD5xF8jZSbW2gxUCUMPxZVgoQdDiS7Ye1S2eg5Dzigp7oqtdUC87i71U9cZDH",
  "key26": "3P3GH21Khg4PgmZfXtjH4CMqkJ1sQW8psx4iACpQ29Azgddq1dz5MTw4pytpx7ipDbQfgpiDYiZ5MenMK7iYxe5g",
  "key27": "4zMgo7mrkccMY5fsdnCL9qCshUJrdindFQiS8Kf9RUrRthjxsgfLweRHNxGg378SJMUrqyaWeDUrbKCHjGF7PNsy",
  "key28": "4UTHs5eaeyYeQhk8EDz6tSDJ7SuvifQDKzyvjY9UNnY29oY2HdTXGuPK2SCYxtbda5xe3nQPibA5AMNvuMwAU9mk",
  "key29": "3CbWstTmvPSFpkEkvUgZgV6qNMLt3FWodgx4Uc1XxL6M2Pw66sKEayDcuaK5QfN9TVztRNgoR8XwyqrKFz2sCnfE",
  "key30": "5sJLcxvzFBAHHa5EFtR1Ut2ABR9N873vhxcvB5JSiL4oJhxLZeE9Cfc6dfVrJKi5278t8p8N2eFUvJxQmF6hTfeV",
  "key31": "3vrKUN4E4YKbkZTtgSHisvps4onpk1TiLLyLQPLMi9Bv16qdMVipKTFVFjW1budxuQ9cevrs1p7yF3CAjvZynv84",
  "key32": "4PjTKvt3oX62KUVUqMnosW1pZpshB7x8yG31dRE8CMX3geKHgaYwo8RFHdtuMWRvKaBcVhKfwFTsqWNpwaBoU5aM",
  "key33": "4MJ1GQACFhjHU8YozsNNDa25tBbCKmvUh4gRQZUaTNV2qqZUFaVhewU6qF2YTfey3JBJFbavMHBAiq6X2WozDHLs",
  "key34": "4aK6mqMX5XvQC5DfhdLdj9zUw5FFtKWHHYnTVes8sZwtHHEM9ARH9uFbbqYFu5QSCeuK6Tthz6RYP1Yx44LidYvZ",
  "key35": "4TVntyLmunVwM47g3iT4Ns2FAkfBqpgDfvG2DfK9RmCKjQnsSaX9bpLf1bUZSscENH6Rb78Z2UCSFgVksD848cmp",
  "key36": "56Z8PSAyMi3aVYVSpV4vJkVVYzmSiKLgQWSEhg7D88rwJ1VNjmLXSdhaV4sNspeqhMDSf7MfzERWk1jdgPjmupeb",
  "key37": "4QdyqoNHtTGcWABswTiBHbfJCRvdSJ7MXPpwGG2eDbbEb3v3y4KzXYov1bBVmjt2Zm6HeKWSQdkE8y94s8UsQws4",
  "key38": "YS5zCTUn7FDSxrETrAjy3BmWEC7anaM3yCgtHmpjR3MBgvVCZL3fd9y6TDKeV1NeECBvY2DsAPR8pfHp2vYsGCv",
  "key39": "5y7Hh6fzR64gzxaATuHg8kA6BiQLYrYDBCzeGTSLV7DB8cTtTb2UwoE8rkEc7PyTcu5THhDnf1YV8PNwYDRVZLG",
  "key40": "4PpQxZBTF8A3bnHqjHuPJnqxfeu57ZeScmEuQhXnQaXxH4my3tz7sp6M3XVkULXY6fV5xvbVPxuoMu6VVUwH1uFR"
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
