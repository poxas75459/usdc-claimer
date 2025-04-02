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
    "2onJzzHeep5AF2GkW58P8MYAMMtf9ETdwaXUg9muVeCx5nWhgmwQMAdWj4j9sjpjZb5J5VoH5mrpcGN4idxAf7VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27CuB533rCvCPuDz4vZf3uwxp9A9jQxRdjBAWMs2N1ySJGeAvDwumqsnfiz7XzjvZCqXhgyrAtwtzjQzn5MSB8pB",
  "key1": "3dFXBoWA3hZ1AK6dQSppqZo2fjMKmGwAvrB3LXhvHVXjnDWVv7XN6eedooQZQ3YEF8fDEavKQTa5WicScNFUmANP",
  "key2": "2vBCw6hLkESATk5nUAjek98KgcQM4jiSFPoZs6JLSFSxzpUKFhcTdjMYsX2HWw7Me675j4nyXeU5vvXqiZK3hzx7",
  "key3": "UGNYYjLJ5cUasx9ayTnKNanZ4yX9p3fF7nCMdazieTP65vodfpeddg3H1N2SgJkNPS21wW2jP4GwpjhpSNPsdza",
  "key4": "3rRzuzSZmSpxq5HZWt2XqVCHosSL55ow55GmLxwZDwek6VLMrFjrZhZ3uPRM9eiJTj9Vr3xRKRLjHSjZEXhVZoz1",
  "key5": "2hUpa7a1kYhv3P63ZybEgbi8uCmra4CgDwJLdtqDfqpQCoCVhAyD3Ee1D5npavkdn3HevYXkVe5KQFJKAfrRz8eR",
  "key6": "LmSjy5NyXwsXiTkY7bJMYbKU2haTcme8Ys43SkRa3p1y6cZ4So2PB1otG83NZw6kfmXfL6kAKJLn2TVF3vPqKQD",
  "key7": "5y2dwbUHGb8HYM5aS7ERCYuumA4avDSGAHET8cByGZLW5GQn2YHjXjd6DZEKADpCMXtsdgkiVvBvJQdUNXrnkds3",
  "key8": "5JUS7aA99Zj9EfzuH1Uw1EAUAjNi7HZfD15X8gjtojcmPfEAvcsq9rD8jnTAmtbHXRoqyKCCr7PkDEcpkBBbZy42",
  "key9": "5ts6qEaLSnc8B9m6rLNYZmkctHf2ho1UWnM2jBsFFkYYEbTGnuyQ17RTUciHCrngjmsymsVudU4BfWEwCG6Jr2Vb",
  "key10": "3YkhDxSKxanxdSMqTjKXnAQcAdFRqJ7LHGmBvLVLKjb534UEB6UuCgdnxTAuiWZvtfhypx2SvjAVgiewtjwfCw37",
  "key11": "344nGNyU4s2SYUqVDoGX58g58Tv5ujerCG5FfEwEdegq3ezAm25PGZFtixtjPKdTc9Fn31R2NXq4gWdLUX1HYas8",
  "key12": "YWwWJWn6uVjX75CnTqnuABMy5WgLiFZHt3UAWQzkfQ9Mb3AZYAaoPEigQ3rs3ZxydaCz4kjEmoTnw51L4GV17EF",
  "key13": "xaSwFjJUxywkrG3tTgumd4McGhZdaSmA65Tq1g77oxNSi656ftTh8CzuH88kF7DuQzJJYq7boupZcyaM6bdthxu",
  "key14": "3b774ipW1gsfW3FcgcpRaiVaCaYWSjdU6Akuk2PWFVw5H7fNdyoZEhSmCxLPMVc1QTzfnoce8j4E1cbhk89bC1DF",
  "key15": "qpHQPR5zomtUNn1RnQbgmHeTikqELaaToWge2UAtPbZegSUR8WJZWcyoadnMLopijE5K7cEDjhLB6YKUNeQZw99",
  "key16": "3rnJ61baR572YMPj883bBEBqQGHVQVNMcdof91iHTQCnPhYKFEtB7Lq2heRWJpvk55cjtg9YJcgqAm8vVMmodtd7",
  "key17": "4xVyctKiQULxRmgJ9wujmzzKpxJznRJ8kR6PWCV1m8uTBRtJ2GAJnHQqMkdh2N2ShdubZwvyRyNTQ2Cf14PQHJdC",
  "key18": "3wC84BAd71DJ9eoUMftSo8s8k6tQMRSPCJ21gKRBVKHRLGrXsbfjXVSqqJGAXWAY9jH65mGiuSXKPJHb2SrUiWrv",
  "key19": "46CaYZ1ckKEZ11m5fQGY1bsr32WpVP8iBTg3fMUMNue2GrBamxgD8BJyeBPPPZFwtREayDi148F2Ghm7y9PrGXCw",
  "key20": "3TCgpZ96hN3e4AhBrhSNrYfrLgzaUjbwSH4qnM2kqeVT9969F458YGnkMyFFttXP5BB9ViALP8j7ndYSWfe5p8SD",
  "key21": "4b6wge3Vcq4n7YMMsf8cfosTbE1WYFqaRCY5cP4jqseLgEt29y6mMBAHaXVu37U7n4PKLXdYLUGQ63cAqZJsB2P6",
  "key22": "2yFBfEPttU5BSiN9XU5UZL4KxiJmj5vpwpqMaTuz5sUcvVzox2JjiVFiFexrELbMC9LDzN29gBQvZhFqqBQL45ZY",
  "key23": "5XKht78viAPZWWTcwcvTwqfyycCtqk45NJ5ZvxVzyrqyt1Uc2beDET5XLoC4JVcaYicxr6an2CsxS5KwPUVEM695",
  "key24": "2zN7vSqA1UauNJa6EKLgHzNwCqfXcTYownjuXu1pwtawDCHyba1BnvZVQEeybLg82zTMgpFJcZxasXDQTUe2HcQY",
  "key25": "4xECEFfxqjfMAccZe8F3rGHWdAthagfsShYNEuKtezbfWf5opFV5U82nUQEVqgyMmRGqAfdo1gEM9KYQWX3KGLCn",
  "key26": "2nVNVeALQXTz6d2hhYkHnJcZ5FnU2cp1wQDzQj5ysTuL62dSp7Xt8SYVm6hzSQD2ZkWb3CmaVo4AUEi1EFgG3iZQ",
  "key27": "xYWQarWxWRJMy2swmySLXMwwzfg3J8AJzzQ3UdXXk5iCw7UtCxoDswCzmDHT6ejaGZu1VfwVsi6ZVyAoGnRa2zQ",
  "key28": "5PGvJ6WUNN4qoBpbFQBLB6vrQPSPPhfAsFPbUDWh7pr4y3NQuKki4XAaNDH2a814c8e3JWdXVYoQK5eNLyrf2a4H",
  "key29": "nDi5ubhtRxgccQft9VukrbbZivMAUmQWJLGjij1ECNqsU4Psjc6duahNPHroRvu2CuoWdJWvt2vBCLCFcXkNr8w",
  "key30": "5cZRX2bP7JtqyW8YAwPMgNcjnB8kEobMvwzx3KkHGehdcPDsHWjKtehixYzuNQPqRdMzm6qxX77jJwT8yBLihcMs",
  "key31": "2Tg48MJz2jKmZmXPU1Ew77wWY8eBvYBSwVAjKwc7LbnkR2XtLp319Gv8nW3tNt7rAevEF2pam2yemhFtDXgXf87R",
  "key32": "5HiaQ6VekiJUa2vwRHa5m4Uay5RDSe9sZBYPLV7xcsjLxuDbizbfM8R4a6B1Z2XxA95bEu9K6BF8uZTdKQNHoHq6",
  "key33": "2kJTq5nzH8p9JxJGQppVNTeak7ytbEiiASCj3yBY3c5Jamv71f3FDNDdpEohGZj64uVcd6TTDKrV3ThiDNhiGqG2",
  "key34": "3AyehDEpLg9Qm2vUsdA6JEZ5Vd1wLuRH1EMHwTDNUS6fVzHsjsPcc5k3LErZHxwa6ndyucc3YzokphaMKUYkRNXw",
  "key35": "2Bd66Uy8RmvykdzFDSogZ6byJTCTuuerc5dyb8r6w7FizS3dDwfHCkZUAmENzrdLodQdqx4hbRhdjd5jWSm9aCLw",
  "key36": "36jZRrA4C5zewWK74QT6dfUiJ5KZs7wjHszyxhSV7oxt71cF6NYQuuhmrgFY5q4gyUSq1CwS5eo4U9D5qJwBZbsd",
  "key37": "4ba9SJwuGWsUuHdcaMGQhAbiPzY793YrN25Hh4etXH4f21epAbzoNRFN9m7NDWGYKp7x7umvKbtVMmtb6dGYCNwe",
  "key38": "a7brHrjeqoV6HB8ntN1GGpLiQ7MibXD1X4qsTTi8PwUqn9baNXakDUiMQ6CicpiCEJDfdarGLRTAnaMKoSLT1FN",
  "key39": "42WxjWZ6YRhTimvvJTuCu4umYKrkwn8q3oYH2Ke964QZ1basnNKbDCgCYzzwbVNVDFzyvfp5Kc3WjjgGuL51x2pa",
  "key40": "2dEwCfh1CnmU7TLh1KHB1ZBSfM232gF8eUjvbMcJP5NjnS6UAUPuNidXfvsB8RayvpZqJRYnq5SASKktYR9byvNS",
  "key41": "4Q69s4SxypAjvMziea8EuPQ5bLVPRGmGoxFfRxZLTXUzLYN6XSkPTgRQ3ZcorW4vAdJ94e2heXU9ivrTRwmvNkCp",
  "key42": "4jjuJjhzrRa8wxai3gHjpBEHLrWfuAoyNN2Rgr1mRuvnWtz2wRxgoeNCoLLqcbZny4t1xaU3BRJWNW3rGfeiXN2J",
  "key43": "3XxavpWyMALcQpQQF4edZFTTGUwNxfmVn28S6kGHz1TNka5a2nmhj6YDEBsNnhTPswJpRN55jhBff8mNFGSgpKQR"
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
