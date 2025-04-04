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
    "2Sea7AWTvFjeWD8ZSaQu6bsaCTCQSGhGRiyYUDVAccXFvdgPXiFox6nANbmazwp23NAibQ5dFnhVfe2Q7NqwMUZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWsYFUzV5VthgYDNvxfkNzKpxCKz4zA5wroDdQb7917uwKL8rvwYjUqqNcgNDbg3BAhmkQGmRC4Snr5kQcyvM9U",
  "key1": "2KXH2L2J8FsHsgBKpEf85g7CedSpDCMVGAVRWMruL1jUdpxWKTjurt8xzxNH9PqfJH3q69aszZBwK54KyLvgRxEJ",
  "key2": "atQFDQmmK8qHjUzMELN8nu48Na9tAQ5GPPrf2EJS4Zi9D5C6SbcF5Mm62ZCPwbpTvdbiQu3moWJdRLu5newA8qx",
  "key3": "5ewr6LXGm5ZxbamyX9VWZ37HrrEouLdJYgauFfmGCcXd8pLbJv9RJKn5LNMvP3bLZUPLngStVjrcMYWcgq7kuQAT",
  "key4": "49uiPV3WzsrYSG3AzMuv6Syxrxn3v7uLWaFJVbzjPrqtEb93chh1KSwCxXHK5chwBS3yryomoufpUuC2yypKeBWJ",
  "key5": "uALHAH8XCBBfGMGhwQEpdsWyaESj9AcTiccmPVeiwhxUjQnrXGG26Mbj7sRAwZQXbuR2PxpKvEob1ZPH2KdYMjV",
  "key6": "4ZaxeM8FFMiJ5R4RSk7e2R4rGjVUxDkSULr6vwG44ntigKWC4SPpHbfXwQWf9t4ui9GbcxGbPQBb1qs4jPw5pq6W",
  "key7": "4e7R9XH8zcSE9aqWNDXwwCXhcfNKTDyDYikmKjT6AKs7bgvNgdhEvAEe3YpYbGjXKn9UbPEmEyaGLKc7YVHVS3WK",
  "key8": "2wNHoSxrEzXPaUzrvQHqvVrirYqD7c5XaFavKVi3NZBipCDddYK3m2SK3eUBhQaLMMKKPyBWo3WiicsFMETdA34C",
  "key9": "3H8wcoL6SABhP3GkRntpQ3ocgvDQtutZhNNJWWaBFAAFoD2v93zMegQTup1FqYubenXfXqbGMsLJZDJmaqdMxYvj",
  "key10": "LQqkJsZKTYvMxZU1A2QXK3h1Pt73XsPhzSeGLGrWWjxKVE1Nn8xiH2pRLw6mhcRpzWhtpF1UutqbxJiPWjZz3BE",
  "key11": "32NGqWtYFyLP4pjD8QArqqN1wiah1gXZWQ3Bdm5eQB3tbFwmeZoEQaXkbBZ3WXkMDtAgi52hDY7nubxRmfpzRW2B",
  "key12": "5Lj62cWqFFmcWaxrqknxbeH95FU3SQGgZN1QTCVLEkhtV9KWXkJeXCSqP2GAvq5EesbiCsKp9LmdjgvWC7xqSt5z",
  "key13": "5ZsfaeCcdPndXpTnh491bfyQ21YmPdhS9vnmQNdzei2RcCPoQ4yG2DSnDgngt9DyKD26NQ4zt8kRSzbWE5djRiuC",
  "key14": "5fhHNaopewRxN1RNM5o5r7f3cNbTntjUgppHoAyHY6xUm13JhV8cwELWa97cepFEzMdnHM1QR9piGjzPP4pZt9Bi",
  "key15": "3KcryTvaDqohFZTjnZvWREU4m9TsYXvioHiSBYpvU73G4Zs4ZiDsRqoyUKHJTPQHyGijf1p7idB6KkSUU6BgkQNq",
  "key16": "65tiefhoEGJt2JTzuavPkqMXNJfiKb71UCUVWVywT6EcgWDWiemN9hZjT7DLwsJwZHUNa15GLHsJ9YigYF1z547H",
  "key17": "41Ps14XSewFoohKHmbm7XqPuKHuFaTmxe1UscfC3be8JDpEZuvXXWMKajqBhC4J8ozCC3A8xRo9ANy4bJZtXLhyz",
  "key18": "3MpMr3G29cdaxYa2vs9C4Dy3En5spazcquj8yFW6emGQEf5jvNQ4jw2aaGWyCf1Fo8m1Z4zazi1QBzSXSn7FRueq",
  "key19": "8ni4dWWnTs8atyAM5AXhKq6Ftp9TEoRCvQyzDUyvxzWhhyC4XxHdHq21uqsQicEojHS7CYYcUMBuX37XF3gKnGD",
  "key20": "7m1u9XcPLyotYfbZ9za1oSpnSW5MMShJoBMK5JMuKAQxS6uTJwKUTji36XQLnVpLQYoNJALrHmhCWSdUKQt2TmY",
  "key21": "F3xbo8NiJLguycgNaJAeM4udUD876xwZtU2tRxvGuwxnTFN8q3W9px2xXViS9782q9pwEbQUae4GdFvQRkKXMXf",
  "key22": "GH32rW7uTdhVgPwLkTjTyXqMQfqUXB1yivAbx34UFT7Ea2XGhQU9gp5b4BWLbFJhk7rM7iuhYhU5vv6ce92yxy5",
  "key23": "3A7FKP446Fiwbq58R1x1CRzPaduKrhAtSxGDLNKBsdy3GGgZpNYebYje8axZz8kDYdb2oz1tR8dMytzV1gnetCr3",
  "key24": "3eWqGpGxssrwiVJNhLeBJtZ8vVNoNXEvEsmBxnBGfj9wYnrzDjjqpackSxhzLkBUo1HyuLYGsGKa8ZN1iHJjcJJq",
  "key25": "2pLwQgds2oh9DvsrTVjc1pt9xKUojxJezGxUokGpVWTG1n61fTCsEqdPrfxebmxQ2nhwrGzTKk5vnFDdZ1UzB2Jv",
  "key26": "5BCXDpaG15m3A1TxERJehbjULgd1sS4o1FUgvRs1wPUFzacyEZBqEQixZSxawAMQ44vvnfkvPa1KxhjjS25wjT38",
  "key27": "hkjkq2ALHLR2CoqiZUfmZHtDtFS56LqtVzdNj9xVVpzbogNdYxLgMZpaNWn4igffhM1Sqv8KrbcCskbq5iq93mL",
  "key28": "5BxKskHAKuHjymChiMajRboWCPSWnr2gscWfejWf2bVP5SLht3JqqbB3GxLcWYR6XmREze7irMbrkksAEd1EywRh",
  "key29": "pHvHNP868igwADsJyyoTAaTueWNnf1AigEaduw6TAyc2d3p2Gv43RoSgNnCEkpd9Bz7WansNhtxTqxTmMGMdmm4",
  "key30": "5SnWojmmNS9hbi4ZG7TYFiJxs3bCA1JFGaqcQ3vTSQsd8Vnun4HdhuKzXG3k7WqWmxc7i1PvMhXkrmaMNZ5sAoEH",
  "key31": "4pra4Qqv4bwzsXit6usauX8P6xs9G3JvhdQpHWNADQ5GqF1DvPaW3VP1MyQ488n3VfdJhdV2tBxYV6bYninKw7UY",
  "key32": "4jB2raow18MvEG3TQ7kron1E69LDq7w4VmXEJUz9WVrL4415W2Hf82t7XgkS5XKNDkcQaZnzLytkiBBmm9BcRaJh",
  "key33": "2Cz6nE95kHBZEs6oojQWaMkgyhV4DgvR1h7ndFYKeDYPYR8jYtapgi2r2HrrHWroLWUuB7PsPncr6oVr96p39kJ7",
  "key34": "WpghdPc8bzGYLFwXhU5vVDmS6jNHsKNfGtK5sYbjqcma3xMyo8Ek5TwVB2Yr5qtMnmRWpvQ7Kn1mzuJJKMaDsLr",
  "key35": "fEw9Yt198YgH65nDEGoyR4LRvzQBPDJWo4zvhVnDLbP73MmnhdGYuyUt9NTqHaigrQk3QM9Wz2TwbVBEXNhHjjR",
  "key36": "2pfGBvDPTaRzD5wz1r9eFYqFU9VJGWEh3PyhS2iLdRTWRxsFbpiw1cup5sGJR1AnbpBLR1cB32pdpp3hFTJSrsSW",
  "key37": "2Pj2sZhEBahpBGzj4JYmHycdJL6FZMfmEkGEdosnGF4y2PD9WP8y2hTvHvPQBkRRU3W6Pxy3j75PKyG94tzB6W31",
  "key38": "4J2DQReb1twE8x1srXCHd49eUsJC5m3CikXM8Egox6VebnGXRwCA76YUdRp3EJbds6oe1V3N3XKsz6YjkzWX58rN",
  "key39": "2CoY2rxFjW3t1sm4rnwv1aoHhBD9dj7FkMDo7X5mNoEccBxpARbk1TZeke3s9kbg4oA7JLirfbhm8pqjifbzxasZ",
  "key40": "3tMzDTmK5ZRpLgJMZEhDUPefc4yyQXFbUtYVgS8kUYKvGGZBcHvoj177MLFVenfZxC3o4h9qiBMgHfvWoHVF3jzb",
  "key41": "Y63PVb29t5YGJUNkoL7PXw5cb6CM5NwyUsc21Srz6Sv3V6FmcXgy6RoVbNPVxuFrBRzA2XsQWMhDuza77R6T7Co",
  "key42": "4zUmV4QPPkFc1Zrjkow3HepzfnF4sCD5DwkddgVJm2kXKTHynmums2TRraiCjaoeDNiQVAPN6UgFewDCURMDwDso",
  "key43": "4wA2c9kW9KzsjuEJnPDgz5i7rnP8H1M3sAAXv8xSsbzAkrNRWPyFfZD8VghSrjrYBWGTk9obi7oURw1Sr5kFMBTf",
  "key44": "4QLXKXUNiVgtojiB77f3wbdUzcj9jkp9uLLpgr9TVQWVSZSwSPXnXVvdABbsMG8M9qEh3LYGwX7GhuR1CfjPRQnw",
  "key45": "qrSDzQG8dCsdjLCUWUMHw5M9Ka5ZkZ1v6v7vs6TgipaQtbTM34mFQ1M4nCuzu3ujJc1n5pgvZtTuHWE1ZiZ55DQ",
  "key46": "4goZzovgrHSZddCEnGQruwMuEQowdERBnBkSftMX5cWDHQP9PvLezGYZVcVJAMacoCfMtnoyRMifibKoF5KqhVJa",
  "key47": "614vDGFL1SYPzhNW3ncBQFUyViQUkdfZHydW6ezfSMv9V2mdafXUzkXZN1wj7pTdxZJ8uKM3tzcffWVYhZ94jf1P",
  "key48": "pmKrMiyXTvoqsDhpD27Ls9KvQCXyKdZnVE6DxVPYqJRKnCJzmAY6h2y3fNXrTwkRpAh8fmp6GbQg2EZVALurubq"
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
