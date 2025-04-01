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
    "4JinvVAz7YRXSZXr6mR12fZ2sDPxVsqBzRKTw51us9UK9qoqYDBeFooi9HSCZ5adXdcDZUrJjDMCucuVczafgWZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DpGNK6Mpf9wviwb2ZS1DQG7trx2uKMeCmiBqWBqD3UAhdBPwkeE4JBQWhYxKGhbMq6sV1YhfhCMVmHi3DgE6SPd",
  "key1": "4iWP3vUfdsWX212Rt1wC3zE1jhejj1Mx91mh3jKpJTSogNv8b454QcZ3zHsom6Uriu6xB4sYQBG5RjoveaWesM4t",
  "key2": "5xN4bPkgNgs5mBxfJyhjbyMpVjm9LEUkj9hNvwBPXbfeULRtkxZYHnBcFdUUA9s3S3nbaq3cB19TwRi3WkZEScZc",
  "key3": "4og5rsfX4UFkLe4rFJNaTjiCWmb6yLiCWS4eGQGEADYhvcP1eQuMHf83zX95ndTsYoBav2o9hNZ7mLWLoc3zNSCy",
  "key4": "4VWZxLyp6j5ofQe2BKoCtzue7Hawsnoy9eTEN8sTBgTU9sVi3h7gKY4MVMaKH3uAK7YcGkmoz9jvitgdJ8h49LKf",
  "key5": "5rGaPGP81L5BvgYCF2k425GoULhkbvHgr63Mc3mcsjoRR98Q4AsagAA3dJ9ufMtpMuTuNgVd6uL6sJUdPkdSaLom",
  "key6": "2GK1oMZ4UMVcAJWAThfYHUpcK44gXwLqMdtdJkWP81LHqc3jSARJ9jySPxeopsLj6cy1z7XGD2sTthtqvyHiLJ3w",
  "key7": "5Dm18LVYZuXfZ2QmviDnEp3jNbArsyfAHwcu4e7RJUXuAPVt1bdVhEcKm2wZPSvyzYXtcKrKRFHiacnDvjMxfRXt",
  "key8": "4aYui9VWEH2HLZndS3yT71VPga6F96fjwGkvZgdwGvY6mvnFvNgNpHX4QWdWFALzTejFk1AAZTGGkMC2tGb7yaJZ",
  "key9": "YhKWRBV3DnWEmeABGqTERd21imWnY4Frjg5n1G1JrpYdJpqhvEhdK4Bd3S1E4Ny7SmBuSRzAFTDiC9hHBkfgKfP",
  "key10": "Fe98UcE2b2byibXaa99wYVfehCcQUXaBcJzax7xukreFjbj1E7s13c4cuVPMkRYzpgSBQkdAqzPdVYjFnMXKicg",
  "key11": "5rHHjBjaJxJcMJWCRMUnBu5XqKMbYPLLAoRPzfxnKhPGF9R1soq7sedtnejuNF3dke4reRWVbnGYGrXk7s8hKKNq",
  "key12": "2iUNiw6jtNK4bxT6VY4GZXpYyDLe16PHbNgrkwqUbPnrVXEMEF4Vr1oHqwABfEfoMY3hcvvDXPiqB5qzz17R2Trg",
  "key13": "4KGocchMq5HGnkt2cbNo5vwiVu5jBoxrq65YK89DJ8XKsSVsUekhwS8Xfgs7oVqPxQLVJ5SCBqkZD9U2dDCjXqyr",
  "key14": "ZNKSvWjUvPNszqRYr7KpRkL8grFEYjm8LBPsLktWPe8sn442WhpZy5V3U45L79dZahmZ8vHbAMtN9gMcnWmcqZy",
  "key15": "5CUdeCnH7FNsmXmZfMjnYzAFY3tKBWdag1iKynxxCELNCu8Hxpm2C3EdEB5zex3ECoRMj2tvbJQwYkiew6nZGAwB",
  "key16": "5xuCWPMz79g8E23vYCtwjfKwRpsPBHGPkMwNAH94gLE7sRnr6rMH47gGXC2ajvsxLmduSeWqkeSkbno7trbSKMEU",
  "key17": "kYfAZRAvj1UXZAUfCUNuHhCpbC9hXcMo6FJAVsCd9HMPA1BvxyxW1jXWEF5uo3Zr9CkAC8CY5aXXvP1fFJ61ud4",
  "key18": "5miMJsK5nJtqu435vCALhw1k6798JYwT8ugHTaamgPeCFttPaGP4ZpG1JfG2yzqzkqpeVapTq695ePkMiSNpsAUS",
  "key19": "gnoeLED9yaeNofwpZoezN2Y7V5QE3sMReNSPkvUE8fNG3nsKJd2KzbRzHTugKTm2j8MydWWCg83DxMVTUcQKTXN",
  "key20": "3qiBH1p969jgfVLWioNbtmuBYKzBvV8KSj6ofQRL8PdRspzz4JtQSpYVtiiuKJRfYYDRxHcDyhuJy6UZpjT3dHUE",
  "key21": "6czHKqhZbaEAsSXy3fPLyx279RLGjUQVJf5MZQJ4XNyZTZRtmpQLGrUFxjZfZvfukhaDpN6Siu9Uh5De9LzazF8",
  "key22": "iRvLJvpZ1dE5NjM2RoyQnMYvbDQnVA2M7tjJ1ZgdmDwCaMwVxUwDppBmGKfnxbiBAjopfQ4nk2jrVhRm5ytfu6h",
  "key23": "5r3ZaVDLKzCzbkdBrjsLN11gg35yft7S4QrduDfkDXxxULei5tms36Yszxo9wixxTb2a3Cbio1CCHntHwy6GD2o8",
  "key24": "3YcmzAM7jNRti4MmUBr4rpMF7FyVEHwc41y8SgxrhtYi1F9LfaHhd5adtXR4tXqGamUaEMNznv7yUX4N86rvQiSo",
  "key25": "2wRpuFAHnV17qUg5Whc36MVw3GpQS8FpbLukBTpKyXr49ohc18QF6uhNupRsXqgzHpMVxeXCuA6LyFpvY3dm9zxm",
  "key26": "4G9KYXsEkW2KwuFziCJdBPcR7g95muqvABbwPYnnGBqJ8kpPrnVZqgyHsccon3Sga7ZQCTEHYfwRCh1GXoJ6RTYV",
  "key27": "4kLXa4AotjH1HYbeYcfWv3N27ofZMjEn9Tn5JqRo3Y9tnzT6SnvnTzV4HjiGFPqMzbiEGrT7zAJeED1J9anhha7o",
  "key28": "3aN2UxRmnRn2wBYwtGe5n1u8VbJjmMetuJZQ3p3uSHoFMSdhc4zYii6sMu6iXrQf9VxYmzRkYADDMAg2v27bVcwS",
  "key29": "5pE6QU2uTG94aV75AuyFtZjZL2D43bQv5PewEHxRxByD2vnLShtowAMPKR2K3Muqy2o5CAnHQpxshzKvMi6CCGXT",
  "key30": "3YUNjnzmBsKi6C2HXaurQNDf9ZUcvupBJ9kkgiyigZpXKANNhYNp1pNUcKziZnYDCZz3viBsEWSegVjEXgF8Lm95",
  "key31": "2wUJHAHAJtQgDMKydKJ26rqRKxF34wqyC5grB3TDNfkZAdvxLumGVPf5XU1fmRyT8ufwFfFa6Yd3YyQMrE8yg3xj",
  "key32": "4vgCugafjrGmDT4po3pebmx3JuU66guk6CWXNptdyPPcpMc7noASNnMirVEQHa1aeCJAYf8Uo3ReXZ6q79YZKhkb",
  "key33": "xhV12GbneQMSre23aWLM7Aj4SqfhGukNRNubmatHodN1boQdynRY8KGew6TKNnTMwovH7AQtY8NL9uddcazy8pe",
  "key34": "5o98wjBTYaS4ng5ax7kBTz2eA9FuBxAWuNH93WHkNwhTXMqJ7TjzULRKHH5vdNAkX1rzQwDvCGk7zeoZZe43Bdp4",
  "key35": "4PZc3jamjnmxJNpBHrRgJYuu67AvGkVHpNe648MYrxo9EU7ET3saWh6SbyQTmgYxP2SPAHRFD56GrW9REusadh9W",
  "key36": "qJ7a9DYmx1bpfDvstLYvDExG1z4euGtTniMMTTJGGtgemPU5eupJ4WMfpGjt4m3pCJcbXUNTkTDiRVvD6cPEBKC",
  "key37": "51PNx9iFTi6rGAQsELRHYUkpUAvqBGPiF5CidL9xUfnxP4wPf3VwU4QAhfe53o9nMoQZX8EPsGLrJMb6dbLn5NGD",
  "key38": "i6VFeHLUy3T71wLvZPoP8fdVkM2uTHHjmn6BxvnNJVaGEW7n85K6eG8U5WYnok4jq6M7JuHbeDHvndvzwMT4APH",
  "key39": "21259dU9SGuXTSYYzjjwkEUaXGnjT75JoPUsYxssaim4RsMyVkCRKxkEGrzGRALWARH6fR5LSebrrBXnMCuAUdDZ",
  "key40": "3P4pavsfLXmrAwYGLeiBeK9qQdqj8ZqNnVChxDQKvdsL8p2A5fs3iQn2UgoJVeukoVn6uHN89PsJxKisNLQ1pQJH",
  "key41": "29sXebhErAPcpKzrM4Git7KMyUdmPpfXJKryLSkeP3ruLt6xNV9TWhPfUP8QUrY6qphM2RhBaoEEDfpgGdAVVZke",
  "key42": "2jJqJkThxgK3JcNoV4q88uoLgRwqAoPU2gGhG2DevJXDA1HZqS4NoxFwuThac6ZeWJg433tmtKz2qMf6tm6MJ2hB",
  "key43": "5oZjyseVk1nwCL227sUAnekyJbVXTkRJC3joDk688GAiFEVeDMf4f6b2MQaNPHFcznGbsFCMMyGScRbATe6XCAv3",
  "key44": "5JDw3bQkCH5dDYC71xbcxwku2WpBugcimgLtCm5iaFbZtwj526ftG5H3HH5AQNMHsQM2LbMpymWXg7JnBruVKW2U",
  "key45": "3j8GkA6TMrxDX5czvzduubatHQR8eTeWPJqykkhtpwU68igyv5xZ19QuVsQ1ZJ2hqAWW9XNYKsi7Qpcmicyd1xJQ",
  "key46": "kgGP7zewqgR5yFHwtGddhEMLuQwpsoF2T6A5xq47uXsJeJfEEH3BNM72hEdRiTXsGUPeL8AtSmjpfbcmYsZbHM4"
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
