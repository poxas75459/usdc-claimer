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
    "4ASRRoxyEJQ3X7CNavwuivw1R7r5M9XtvEMVjNtoPnJ41zdtLCxUHEFgrg8MMdM8j5fQwsWA1AxosnMmKi89d2aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26brs7UaDdtJP1DwFGNtFZBqLTiSiVSTWr4gmeh7MqdGLqyJuKJyQg42BQB6X8BmBhskSGBHFxmJJD2yvdp5DXjA",
  "key1": "2HkrAUJtMiGkMjxTiVzYZ8LDoqokCa63MCkX1o7sU6G1qwjCoFZdqWhYNem9TQp1jnYRYJojYn2KjUcA1UCNRo1F",
  "key2": "2TRqT96TdnQraCkA3qbceQb5WrpMV8NzsKWi3vUXGQZvfDVsRCaZMvPT5SwZZGLtLX29CV46Hr6hBXxrCr9j9iJz",
  "key3": "2SpTGnZLZmvEePgp3dddGSV3bca7MmgTC9wuRKdJnCBEZ4GQJK9DpTLBhzQ372coAPRwsTqcZ7vozYSGKvj6ha5Q",
  "key4": "4JCnG8GCMRGGg67MPT7sL93kTYLeyEDFE88nFKdbxuiqaEg8qRpeNMaw18itUxwr3Gt9kiH22Wn7bGxrMbKRCQUH",
  "key5": "5eM9DQ8oMtktfKovdPgiEXcKfgkKcvrzq4yHkk7zjZuvi6jffVeh6Um5efTem2ESdfq6AmYpTsrm82k25jtRFyqV",
  "key6": "2Fjn69HqZCBoU2XdVFghKD4hrZAaZcfknSbUofKq3BL2FSFaWaAqZps11CRBFSbYCAhrmVQqcCnhwk4TuTMtofG8",
  "key7": "2pcNm2zig1k1nybC1n1ehmoGRdyYF7qbbnff8puuZhBjSstNemd89MNi2gkGP8GLpsb23uHWwWKHGgudf8dB9MwT",
  "key8": "3HqGQvosxDu7Dr6sNMRVJV962xAScFaYStMvy3oyDCRiC7DmR4CY99T2U9dQ2RwaSsswBanWJXu5jpYdCgs7t6TG",
  "key9": "WaxgcL8BEsZ5teTgtfV6rXknYw1rLz4xnJQDUnf7Twtns6oVQEHDZERZfg9wbX96erL4woGeWtCvwGJeCnChV21",
  "key10": "2Wnvt6jkBj7uz92TqdoHGB23PnGiqRpfaQG6AmAEM2G6rD1Up54NwpXvWq3n4HGCM4fqXCz8ydm5zbi8YXFipxRA",
  "key11": "23sbTnazS8qwgpguepoHR21BL7u6DqoHQSmrPArFhyNJAmU6VwGdT3M5GixgNHjUKQwnmjKQUXUBPUmb9E8WKinz",
  "key12": "5PtYe44LbKXC8d9rQXMHFKRWHyxDhBHU81AGeHdQDPBeoV4Y64Ax6ggMMAAFbRbMhXWxdw1sqFauSyHaaaf91Ssc",
  "key13": "3Fi28RkUHdBLLpo4QsUPtXNN8zj15gfX2JQqGrHL21oPL8G92kLRWXokNxwzjcRANWjXyV79h3JykapeqQqoJ2np",
  "key14": "2pzm778comfjJVi1Kgp7FMQS7ciNmrbJccKePGcuju8LrtKDtTjmk9Lczwr1zgJynXY1y9T7YA9DBcjYQBaSHybz",
  "key15": "43fFERaixgd3iBTrN3GbCARAm1wQJJ3yzP2wp9vQAnyEm1yAp81cwMVJjCJngnnAJUbafB3WEj5gQRYNCiE9XZEx",
  "key16": "iBRhEZTD27yoGhAtEwccybudTNWoJwemCW5VheX2yFFkG7SiKVDquimH99bdwsUoJGiTrGAQZHH72Mrm68sQ5aD",
  "key17": "aDd6mvcZPqY3D9Gkk2SqtR9NPi6mq3YYJ7bpfWMU94Q5ivXZycLTdWm2a3Yi67wMPM8XWibyHYk5MvELmEL77zb",
  "key18": "4cimgtwyR9pocT3TawqaxGWFLbHoehZA7pF6zndm3YGb2NxjPEymLUg8dXrm4BAJsqN56DsgU6TJ4Uu7jqiYwuJn",
  "key19": "5FVNeVkcGDcvmmrfUGRwtDHPnitafvU1zWKmsiZKWyYtnxDGvAYMN8W9V7VsN4an78mfiCNQPsy9WoGYjAawudkV",
  "key20": "3xx8vSnfFiuDmQVX3QHjhniCZmr7BWcL4shQxgar3oiADq9DB7U5Bndm14K4t2s6Ls3bHi1vPteJWeLN9E7eJxQS",
  "key21": "2cFAjK1Zk6t1k56Kk4h9xM7X3ZHzxW1zzdTKqaEbj9Xb15HC3GEy6e73M5aZuxeMGBGCbwEGbv913Sfoqef8a6TD",
  "key22": "x6wSFAuT96WTu3RUcaLzSvgZwUjPHvMsHVmJ6C7zh7STAJ6uKR7Y2M4vowvRUM5kNwDSvrwvnHcDvRh3CSA57bt",
  "key23": "2x9MaNA8BqegEgGCBKwGRWTEBka4vMV2zbTP1f3wZ16eax32wUnxLrEnKaPJdnm9V6feKRsVwGFC1vibw4zZkM7X",
  "key24": "4WgwDbLJ6Z9P26AYhHyCX73aK7uNqnuGC7g1Nn6bHNArSh3dRs5u4j2KuQ62w5MvBTtoJH5BooczhCqHiuVaQkTX",
  "key25": "7MhKgcG6ASuxEGBGrGqvE25zx3Q1sJoQYcQ9DHNFHCQ3iHnrsGhQ6XBeZZM3pvM14aqawqjjkypAHALM4PqZFYr",
  "key26": "2mhizvcVaDtZaMKN3crBgxqRM54FoVMACEY5hC1N9k6djh2Y1zqRgBJh3jDYcNKbBtXDDfB4Xjy8BDz7c3B49ohv",
  "key27": "3xPcw5UJqKBBxnwBf52E8vWijpRzJsmiBkT9K1HnxcMs7C9bkz6NNUpvoFq3S4qEFGcgRhvUN1JvSHTjHhP1Hj6V",
  "key28": "2iN3X8PAa6zSNsfkhanXC4Dyfq2soQt261nMaV15zHfDvE9XhxY7Gqty36NuyRgF6qW6fHo3y4Wvg7Hj8e5Evajx",
  "key29": "4TWdbwAySQdjYX35dYYh4Aoiq4n87fgdJBtN1V9hkBLBanMEF4QC3v7S5FAgFnv5Sj6njRF81sUoTrkhAM54YyqQ",
  "key30": "5GNaexCByYx2a2Fy9ij67fs8pagPR1XPJLTWG4Kk3fY7cAbbgkyWGYqasvusAGJ9QrvKfxtqj7X5TBrumbPiF6yJ",
  "key31": "3YV4bYvieVr29Bskk83eJVBjgubEZY1hx19oWkaod1QzzyFex2oxCuf9XCkWZPnSZMtKgJm61W2igtE27s6HVk6e",
  "key32": "4ssEFQNGnadJi3PmaM2D6g2smQAtXA4N7acEXCVo7aVDNfzDtHMpZESFeiFTSpLcp9wuUhr7fu8A9V7qxiTgmWWj",
  "key33": "2uDt57TEeLRTs1Dm7cprxjbjpa2VTmbXUjDZUHoiDhmdCQgc1u7JUuQQtkp24p4H7GcxfvdJ6xfcMXyzw38ZwoyG",
  "key34": "7vE1m7L8KBt1G93zr96WZj1v2QSe2GinTVjorMsNzL6vqCShyB5D3etDtNwSq5XCBy5Y2HmpPoTc7LyLtqXTXxP",
  "key35": "2G9YGqDFGAD2iRQWCBVHmSZAzg83WL7SFB95NMB1iUDi8jWos8PtNL3QgxJ8gW2T5tfxBgsVfpTRrEEfnFKCxfTb",
  "key36": "gt9yhb9wowYcWKEUHyjjULEzLocEvt2VQrwAGExL9bLeMyRYhogKuWyQQdrdDz2XhFoAyoBCSZ6PAwnwcaApejs",
  "key37": "etGrLuPgHA9DjEEhoaLyxN1hiedU1B9QqweSQb1rwuPo6VQJ7wCzvVgLBYysoPrNsbhDzZZFp5x4Ga9VHBvYZay",
  "key38": "44pCj15YfoJRohH6K9vsMTa9cQL834D7yS5HZkK1g7cT1B3aSK6vrM6Y5bv37vniFsskjZRrNrbrHkENgJPr2pnK",
  "key39": "MrCd2976Ezxc6y5PMGz2b3oNSVLjuy2MpQ9PNqtQpv288biTDHWi8og5FDGqyfXnGWD5enthSjqhZ99oE41djbw",
  "key40": "32gs6tGW8GnnBNYotHUt4Csrzyj5hqcVMmHm6tn4MgZYALe2KUXqWTqyecv9UTWG2o3zptd6nkQqzww2GeNgGLPN",
  "key41": "2A2TKB716cJDEDqRiyANUeUCQPHDSRhKvD6uaPetktCaGcCzyrouaNupeu6o7WjDVhPxTTQrnALRdZHdzKehpPQM",
  "key42": "2E2AvrmiVFxi58mWED1rRqxJzu7qPTiPquTgzGixcvVN98B6gQp5EqqRKuXDN787Fhh33THebhjk3nYqngy1rAsp",
  "key43": "Y4KVvwN5LeDDhdm1CukL7j7YbyubsMdcK53iW9C6P3YouSshTrTrej4uUqyjsGUbgDuisvvhDEQNqnawiB1qSbu",
  "key44": "2ygwmkig1UH1FzVivH3CbvLUDYWM6bUtCPCY5r2BiUELy1bPUUyUhXCs49x6L4y2QXFERCx8BUfhoxrF9i9yfYVP",
  "key45": "4QWYRQgUnneDughFNVMaJ59Dnwb7fc9zVMyym8EZHr9hpMnZ9YpxpNZZjW1FX3Ab8CdbzoGynUnNkDemY74UdvjD",
  "key46": "5ViScyi9ndb4LgPEAGcrcY3Pk3FFtrhxRZ8AbR4jX5HFjdhY5E6hffHdj7c1zRBVAvmkCkb7GvE6uMocp5YZfsuM"
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
