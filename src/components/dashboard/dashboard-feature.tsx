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
    "4Zku6CMjdtpbB5HXsBg1r8LH5t9pZ2wrs3H48LRL6WfMUk8jWa14MffneBrkCXKuHWqVUkxRgyvKwS5wn5HUo62W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vXcR7KpSFJR4aQ6ad9W225ijwGAMwKR41gQz2iBTA5jASxj91cnP7BLLJwTjYzZSPLkzKZSUKiBuNzhsQfrqvR",
  "key1": "2fyQXkxggtrCg4j7fH4x4JoZfmTUNeh5GEVdDQMnSVkCBXiJWiZobBU6xozEmFVCWwgm3Ci7qHf4f33jcVkLhJj4",
  "key2": "4xKegDHnQkyirpQGCVaj5jhHTPoy8bXEnL9GkCKEh7CipVWGn9rA442ry1zLj5xzFvQhhKbxYZYVsywYY1dPj9Q1",
  "key3": "3ihcRoBZngwbpRD965snVzKurbjZsMaKxJzpDcJjEQUX6SrzJGKb6U1FHetoHe1PFZvPrJbdqV5U9z76ckkcNDiu",
  "key4": "3CFXdJ7WKNdKfJ6PbKRxrJUnDyXpE1PQ3Pga3GtYGXqtrKE2wLzfRb9rqwsZ9vcYFeSmDFJPeg55TrSFryzqHTCS",
  "key5": "FnFyfqmdGDkUGn753zJQzVcfrQKuTjjdkKJt6UoL4iFBNCfgo4h5jeGShZ7ihrTNcLmmF4Hiq9s7HUuddcSALTP",
  "key6": "593TuMrcNfrf348voABipoEgZv5Un1sxyQxPJG15CtAc4VsLR4wc3s7C19Cb5iKfNcEq24LLuwohmp8x7isgYaz8",
  "key7": "2m5WtW2XEWkJw3RuBA3DGMM3zwNsua77gsNq3BGAFJN6YCDhDNnZRGeHD7BQPTXaNxEiFgnLxsWZEqBpQNE1ZdHt",
  "key8": "2f4pktWu6qejixJAXZdgEJxZbmLbC6wnALJxwR7fG9bHuobsanAXGY12YyBGQusYJRtTsoNYfXTri2UkasK4Uecq",
  "key9": "66RS7WvtE5rgyuRH7Pgg6269BeFzUWfky7Vi3AQejtfwyDBFxfwSPV7cbchvYD5UG31vsMEbcw9mKSaLxxxrzMj",
  "key10": "2ay5MEnwdjv1hMVEhsm8aVrrWEyPq2miFwzqAThZdAAY6bb4Lf9KXqFzvU6VseQamzHVjcRCTCEbowwPgrJiiTrm",
  "key11": "5CWdo87ie5konDyvrCZJonsPaG1ckfy86itCufN2aBztVYATwcM9Qkay4MSwxkJekaspiGYt8Gxtyy8cjL5kFqT",
  "key12": "4xof32m88fEP4ZNVv4sH2Vu1NX5a3fiSfTtJZg8qQXhDbgiUTJgsnugmMKLyGPZjK1e9mSow3Vj5WEvgXuT5SA1a",
  "key13": "2QSLiNwrDLfJ97ADh6icXxgHGa4BWMR6wScAT7VgwFeV5Hx9UR4WkakiQhjuEeeEvvJDB8FqMw2W7zzejCAfLHn8",
  "key14": "d2REfMiHCqMH2ibtbKxuZ8QDfRb8LexMYgEkjXBhwCpaFHKK1w3pGDDWrgmTyp3EiuDmvZFve1QBBuuFxJ6Kw4o",
  "key15": "63fm71mpjFaFgasZu4Leye7GNp3ehFVFZN1HaXLn7XDDbJdVEzK4QJE7ScfunpvudqygXErxnkqnfnmM1KBrUX73",
  "key16": "2L37srUedzQSZRRgczaKakrqoHQZ93VHhHNk8B6VidcEYX2EcwvK2vLRdnc5iXhGQfd47RzXJXPXgLFXawomwL6e",
  "key17": "5aiCFDdixWGqo33yKAYsaTWF9xvCKgtfn5SPdt6Xy89mEi9sZi6aTzsSfKSxbcYbp1jVQ9d1EGAmGfhbBvrJgTyK",
  "key18": "4WuQaKiE1Sd2i8oizNPx5sBwhu6LMqpwKRjhLPnF3ZTVDzMtUqaeRdjdWBP4xwLjDyPGazc1QQhFgvQXwtXB6Kpp",
  "key19": "54nsJZLzKhTxhVFakcAZocr6dsQLvNmrsWKFfeqicY8s2eaSiaU5zL8XcebCfiEAJydy43yikhtFnprq4nttjLYS",
  "key20": "YQhAZ3rVbmG4igsF8m67CVVREPT8fDrvmtWEEN2akS5u8cmkcjuNXejmvPYMJ82teM8BjSxd393QHpsQdWnqSzi",
  "key21": "4mxfF33EurF1bJPkB2yWuPsCRtV74wSNfM3xEWQCBre2PAbYVodmyrKvbUWkJhoWD3yLkLXMcZkFcJAmCLX9eoA5",
  "key22": "f1uQnsoooqRR3As4BTGmoDHYid2FfVt8UMHzktkDPpM1dp245iEXn6nrrUut7aGGVYTfKkSVkVQx89h8a1R9ACr",
  "key23": "2txDAWagRk8A7s1ELhrzAUUXheJocZpbom9Bd3G1nYCXDfcdMssBA4BvgAsqXCHWpTZMfnqVCZyRqnGekVGF5JRj",
  "key24": "2Cfv8vPMdDQrN3riyjM5Y1jWk8sh7WF7G7uL3xEXEikYYHtTU6pVX9p4VWiWbJTKi6nYfgeMExGooDHP62ZpbLin",
  "key25": "48nCuocPKbtV5mZBn9TQAKamWMaG8zxyE7S9YjBnE4uWApSTm2Qbhm9Xo2JfNYjxtfuTxWhhBmz4XvUKUHn2Hn4L",
  "key26": "2zEA2gvpKgAQGkaczDcXn48YAA7PsAUHbrEHCwchGx27na9DPUJteTv21uTaFoHCkLttE686r98nht9W6ukKnuJg",
  "key27": "4TroP7hafSpnd1dvmrmYwDXyVexFm8BddqsCou7VTKPgKXnyaMiyoMggVDt96srnj1qLW441e9xsLHCcjskfMd6W",
  "key28": "3jaiHw4bkirUb8GUwLTq2axJYuLdZwy1fMaPsnqiqkFBtRugAN9JxDcpGwsXihgc9SZ6jBBscYrGBJAmz5t5aP1H",
  "key29": "29QrKRbskRXSxfj9YZwNZKK77s7xLfu6ZoHjTQMS7bQo5YDvVo3wd5AEbJP7NBAjFhLJksgNXs7Lxw63JqqYnxmX",
  "key30": "5kB6xpvLDDDn8Y1e55NCqBHkBDv1Y5bzmZkiCTD9LNqH39NT7NSUpdDJTr5PXeEmNAYHk3DAEjtd4PqYZqjHtq3H",
  "key31": "3UXiUvf69pnSJ55VSZEBjLkqmN8EJH9Y6a4FxHi3WLRsqZ7PZ9b2bbjz4Yxg77tgyGBezJRC37vizeCgqpiYAzss",
  "key32": "FnhmhQRxJpiNMbSKnCFEvS3iaPZx4hYwUhJuB5FjWxU8PL7E44TPe25ac5VkkEpe4BfrRQ6NxesaBajyEsGXPrN",
  "key33": "26m5KXe66N8kj6juohijpXgN2R2saNUx286f6fAfR7UFrbvwZ8QgL8chUkH85zaYRH5CzdEFXBDLqsW1qGaEH8A1",
  "key34": "yQiPcN3vEc1dQ4LrvkHSw5pHLxXLFc2joikffQhif6GGBQZoxow4sAASGquNQFgWVhjFyGemSEur4pwJv4bhuiA",
  "key35": "45VfAX3HtDZPhohqhpDQBEFfBftdHm3EV7BEztKh81RKPQvqTKemoPRqqM1Y4GpB26qNMsKAsvfhMWacaC8D7tfw",
  "key36": "2FdeuRzE8YTAi77W4AvmVqwXcEp1FNp6BGwe5pLCyk3Ngqo4di6VvaAhiVfmPByndheNve1afMNcaDgh36dZNaRW",
  "key37": "28CAVpMsPogDDjpk9DvhajovMfyD4YSZ4QWGrtVCQs2okZtRdcove9ACPvTo6oLn2piwKyNarbFe7ypDdgMjaXAo",
  "key38": "3gjAKyjdh7jSfrYwzN16AuyKjCLp71QjB8LD8TpMXJywpEm3ur6MJ2qULGqouTZvgo9CPEAZBePfp2i7kiP4FRtS",
  "key39": "4E1pPwjzB386uMRCX2KyYag3kCzBujJih3wtoNULJJbrW9pEDGeBprz35u5JHLLU6CrYBKULNT8P252SASiiyntb",
  "key40": "41vSwUAUrYuZcfRuj2ydMTYgsESVWnAKaBddFAMoD4jB77EAziMtd9MmkxbtkevkzdnGZJVkkndWniGjotztRVuB",
  "key41": "2TYy7szjLVngE7xhjqsxk9WsPsyWyK3r9ZPwKHoG5dsaPq8yGHv2DTaSgEEtuZsFiPvJz3x3k7yotY6Btqc1TwjC"
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
