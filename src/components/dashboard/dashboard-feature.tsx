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
    "4A6SWhRaGB5xbfWdWorzhtgRmVAuTd29BwPyRUCECsXfVqZBh6TVJ54NKjbwdZWa7b88fRmY73KpH8Ykj4YSTyiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XgdTYvrvBnmKyhk8bbvNSsfSxtPX1dQPbhqwA7DQa9aYHGXHibnhgkHb4DFyfLrehi19Aiyce26mQJQPjjeWLeU",
  "key1": "vXLbdPjUt3wxB4y2Z5xjfWa7tke5e5qhgKqmLD97Eqwk19yU4njXZ4qUe5bWsovAMFBveHUupHBRjE5sz8UwmyZ",
  "key2": "34o1hHKFhUYM27VzZ7hXJf9jZX5CvreSq1draVFZYJQuJMpbqonRkuuEL85NLGgrVSZcs5i1WuFsHoTxF1VDhuC5",
  "key3": "BvSXekVef2LbJzT7S7Zh8aSXmAJV7YZdwdrjmyTefuYi4L2rTbL5B3UQi1Xzf6kcM4xAbnA8h6MuHjdmykUN3Ki",
  "key4": "2DDmagQGL5zEe3xxKyVHrTVQhYCLMd7Awh7xhDEPYC2jPTv5fydbhPcxGRc5uQ5U6cY4jXiVBex6UhTZVR2RjTtu",
  "key5": "5tnAnrbW2BkzNtmfLKsY2EmMGK4D5yGuKFUELYtL6QRnkKwAPLMY5WUD5B2tUUgnXvsREubHqympng1VBQQtv9Ky",
  "key6": "59mNrwS2fb9mNVb9XJcswxpPJcJUXucxnBShxN9tTSbCq2NnvQz8w9ZX58dmEhQbb7eg5KhmdEZ6H1jiyDB23wfv",
  "key7": "4tEYWwSYvoTjDn2Up5c1D4GLkPc32MUUiGHwXALujcCYqThczpWxDVafXrwsbKa1BYhn4RTjtpizusrK8y6ubFcV",
  "key8": "5XfckV9QEWtvmqWyXdvK95TdyAbphreahBXHAN9kkne7wN4jyx5KwgC4wG9pA8JeoJ1CJHS2noA96mPqAxZ9VejZ",
  "key9": "5QVgs32C5QHJtVQcQSi5oHxUzHRbCjuBSL649SEMsKXVFPNDvstA82a3waEwbdVd6JWz5Ew55pyLKARsXHhCSKuN",
  "key10": "5z5Yu1qQ3euUvRyW1BRu4pKixUaELtzNGMdAHSvfgCNo8Nx35WWNHrABgGk7uZY37v6DGFtJHX4oiFWct4NpjHdH",
  "key11": "4hvccDnqdgdndyA2dws438mKn9jZDeNHux7qkAvm9YWuj7od6o5v76LKdQZ8PrVFaSK97DJDWBFAJ7bTdW1dHEPF",
  "key12": "4tvQ955mofTncFNiRZun6PKpNG2fWWcGRG2sYHTK5Mc7vFa9qfLFeu18xFuY3yxFa9RLZy95oUZtxSMUGeRw4CVU",
  "key13": "3B5hRxhvvirLG7tZPf5TeP9adDbtUm9gD9LegTWH1c7cYrsi4BVZEWcrPZ6Aqg7eKjv9a8FYaanicQnLAkc2wVis",
  "key14": "2hpj5AuUPuwyYUpoxNoeSdqdiHmB6WsLhF9aRbqYEpHwPCsBYZfYuMvMvotmFQn7XHjr5ougxcwyQ55vWrKFfmXQ",
  "key15": "3UosVbnFvkNVVvBg2UXbdNx9wEketecmhMRHyUmRh42diBJAMcMonaBLRcGFGexyrEhfajaqdedNU23VsxKqPcf5",
  "key16": "4tv4jtjAos2ULGEzh2oRk75xwQW8BoMfLyPCtsGJs86yK2CmKH2r2necA5WyysQPb1amkeBHqhnpmUYdwJC1Z8c8",
  "key17": "5b5YjGcNTWGxES4NcQXjAigEcSxRbiEFryEHxQYp2EQWE42phw8Rd9Ra3ZD4nbjBWSecVYkcZcJ3urToSJDGr6sp",
  "key18": "5ZPpZnNuxELwbfBfugNDD1twfLk5N6eHTFyZkuNgQtmJCB5mRkKhCRqmzcKLwG6Xr2D4Rc5HkbVHYZsy7ytLxwRf",
  "key19": "5KcQa5KtUhPutrptbsGC4fg36Pnt4Sid1DG1KxR7bNCbnSVnxcHVKuUjiMfK1Crpd4BYxsPvHauu8xSR32Rr1saq",
  "key20": "5ywk1AjjFbyRwhuVPYvaQApebsKzXCmNw6muXa4nCZfmqgLA2xQhsWDYZFczeaY9tB5chcDCT8AfjfQDZKciEB5R",
  "key21": "2p9nUNP6rFeLo4udoet75p3tx2BvCFicQ4YfFb5ETsnSyp1uaP4n2uZNsMJhYLY6reVkUpsoMnYZ4xXHMcfREFQu",
  "key22": "4ygJdwvuhLGvj4yNrh82Yjixbuwwu5Je3mQiy7Sk1JB9pjeFwPmpL8gqLBSuyj7Kucsk1YoLwTJSrMdc526yFGsD",
  "key23": "46RANsbp23au8Khz2dKRxD3Kn4VLY8pPS6s2GNxSZ1AanCVa4vbtS1VTazdW9SGTuHGP8MnvAFT1EuSS9FhewhZb",
  "key24": "5vvF23sVWMihFG9ucBFBLv1YQGehV6QT5kzAqhnUQZc1VEbE3yrdPJehzAgDHvfeSoR8m7YRrfUrrkyoEBEjmdGf",
  "key25": "i9fXDkMUdHxf7tonEJqi8uDxWukWP7PAau4VoYRuqxHZ6wHnHfQgx5g1JpgFnGreaa1jLFMwLo3dQefSCgkxaXG",
  "key26": "3wBDt19YUvdymSQBFLB9H8GMWBxkGQRGKZ8prcr6yjvRVgsVQjSvsurpr4GXw6SQL8RBUHsWkBnvYuiCPrRo6g4L",
  "key27": "4QDy9w1gjkZVHaw6qJuga5J8Zf2tMnyXKiiyHoTgQdHsaBWNLQcgHFcPczJipQU8NyRkGzNQaKKmnTUV1YLpVwjj",
  "key28": "457WVReAKvPyNPwPV31nr4dCcTrj5Lwk1yHkWoVQTaFhCYD4a1Jrt9vGmDQYyeD5EqCEztWRVgsA289CPeGA9N8X",
  "key29": "3zi7bjo2ibyezyL2huzt5NMESvZx7GLNrdN9NgQq8V52qJWVZ2sJf6orLBcDnsa9y58WgUkYVvZEMtmx6Zt9qXAA",
  "key30": "UPNocc6Wf4r1cVaYguhRywZThtfP8isA87Z9s3TCtoZ7TjdTD9QheiqXZxHSys5wyU2ME1H69CxA7oK5KEJJrDE",
  "key31": "2sxzfYazA4fC7RDpbFor6Q1Hzu4coc4XpvHb6u79n2cfekNEN3aLVecnekQfnUuTX9t5sEwZA5NeCe6FbUMqvADF",
  "key32": "38fjEXAAsVZA7GFsoZiP27pWKjW86NksfeaCmFcQ4CUjoMPBWyaughCFMcK3PCGaq9c24rANWE237uvUR7XJbiHd"
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
