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
    "4Aiq44PvGA6JiizyoQP8wDE9FcWRcnQKmZxnjpRnGJb8Htvf4bKvWd6BBgkZXpktCva7zMqj1X5dPkzGPYxSMWTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5MgXdSsESQGPJY7sihyHWUBbAyJ9wgRZaoqPdcQmACkcefVkoybK3WgDVZ3ZXFh6X7JYDPxJPsuhzTyftAvSeU",
  "key1": "5PXhcr8DUQkQpK1AsM4psfwZXrsrSrukjGb13TrDkL7Q2wCZMbBY79KcvqVYmFeGqh43mMYcxMRKBn5WYhwfbL83",
  "key2": "35ddvV4EAai2Ln7PKHk8rPiehErezFFQMjJzXZpU85LZTkCvGXDM3NXn9EkoswGNJSDhsShSxMVkWTUkRCJfbpws",
  "key3": "3Nn3F3XeNcrMJ6kDDtfLnV8kN6K74UkxzpjcHQVLGd4YsEz9tB6kGNArtK6wnwn76k9gqRQTZAUwvSJTjivmNm3",
  "key4": "nTkemCzZzFrZ2H1EQ9Y1AsbezknGgh4XfKSUDcQa3dSwxeErDaZV8DrvbvtAAA9VbRkg5CoCFV3uxtaaHSuSU6f",
  "key5": "3wsHyGyLMhCkTeRtgKdveLuhpB69GBqCwqy6DYTC2HmqLLezux3e9fNMeNiMS8kyu95TasBbQT4vbKYx5vNQEzuP",
  "key6": "2ZsiZg7DeDtRsNAGbPAe5deXMNjDEgEws68hunQjzFmoT4tKWfXRyYcyPdBjkzSsjU5f8pXhoE39xyWfo6fGJ9d7",
  "key7": "4stcGePX6nqeoWhpuEUNemTaQqMTMkf7Dg2s7LZbAjt5eSrAd4vnfCHy3Ea85tdnRB3vZPyZpoLyGF7Q8boiEpcU",
  "key8": "2NjzA9WuvVrTerZKZicfkNV9EihjLvteo28br3cwGibFckj26JtQokQsVNbkWKskR388aMREdoW2DryzQxCxYSaB",
  "key9": "5sGFPhfLT8dpTc3oEjZRz5cqiTCNGWFpByeyLTjs4TGk8kZt5DEWRH2bLktDWaFZvN9eHmEdbj5WTKiXfvsXjvaz",
  "key10": "4u5hH45dSa777doPHGVAtsiGAhc7jCa35r41UCDVZMmxptxSMxXJV4hAb9Fr9dBrgZyPw3U3itFKWqj4FxY1jxsM",
  "key11": "5QUdACfD515gXYZE3S84iE6a9E4dTLZBZLRxsxW3oBmxQVkyCBcxdPuh2o24AcyTFV9qQ1pBNHX6W2e2zps76JxM",
  "key12": "CKEEsqCNXaL938vuazbGaFW1xBLbp2iyJqWZLvsvKs3PEvM5jX9zYug3b7Hobaoxi1KSVseCFibVYts8Wc28CqF",
  "key13": "2kGfrstnUaDqtFDxdzwtbVoXxoGzVBbmKEqCw3hfUPLxESmVoVbMNaFfiGKkKnRUWuvddM3KjRE7jeLJy7sEcbLX",
  "key14": "26J4ZkemW6TsCZvvDFdBR1VPfxxoba1HJGSE1LcFFL3Z9vp3FsDQ5uF9Cuq71qrKzi1fgzPbDZgUMvLhimjs3Ugw",
  "key15": "4kzpyX3iN1SYEGqv5sq6E7mkwfqDMdPn42CfarPDEKvhL5MaSE6fn3BTAjiMGbut4674aQqygzu1i9pwxd7LPiEk",
  "key16": "SuhWxUeS5SME2V81rhV6rsX1qtFJ6EqtbV6XAtBxrvYK88s7QVT8V4262YLn7XW6UyAt4QuZEXz6JgvDmrShjaz",
  "key17": "ooaJuC9V1W1dd8GJbEvZ9BgMVrdqfbJCn2uQnqN3CtrpQMm4tb3tKkshHGbMo9zTwvSUsoAPePp3kJn3nHA4UMg",
  "key18": "3WNA47Vd2NmiF8Kb2UZYZFG1nmeJJSQZRuebaRm9zi4ahi3ZBkgbDNnXuCdkC7nonar769KhhJG8j99eZvUBbAU8",
  "key19": "48PXuT6dDYydgDDgKccb7gUSJctb6Gy2EWWS3gzxjvicTQshWZQAzde3HSz9mjHQGn3xhyqEAUayqsG84tKTEKBc",
  "key20": "2Q7oathynG2LCQvXCae94D1X4whTXLt6EB9xVzGroJckd4MGaxqZmxnJS2a7kn2ddZ4dUBjv3RQ1X1KUciUPf3Qx",
  "key21": "4AZYGggc7BzJniavP6zL5KbdudhViuSkFneaDcY16J4kCr72rzyp9pf7STZN5xs6tekjNqvss5cFTan41ksruVTU",
  "key22": "2AKdguEEYYQ4ZUWVt2uziLFxEc8mnC9YKfGFJjsxWxBeXLFXPjrERbKNkF3XodeM7gTfG3iD73TX23JYQaf8RkM6",
  "key23": "StS83q1nXMtS1jQ6Tv6qsSY4zccMRc3ZZ4ncAiEnwRtJnyktwqoQA72NnmZjfC9uL7dtgp5KSPN6pvz8F8PeprZ",
  "key24": "3iNfwwS126Rpp7KakYtdNF9MzhF9cYE955oUxEtbSgam2uABzEuHLUoQpEkaBaQ4RG9d4JykdvFbLE838Lv2nJke",
  "key25": "3yBrvDPtHvWQ9uvTtenEuPN6rXz9VnLjSZ6ys2xkB8xaq37Soq4nnoMT51djkgF3SLxdQ9jGX53o9DtdBqAQeuQE",
  "key26": "4d3B7YQakAWXQEKn7jVNHas3Rg2rdFxZWUjGuKrvnQDUSnWyj3LBwa5Yk4wgppYceYZXpef1im8DUDmw7cRbLBGj",
  "key27": "5RJJPjcjTa2cTVeTDqWkkkp1tkLYogLN58ST1gPQ2QMdPnfJZRgX4PpC86KkGNmaaiQ2UhLKHXpMepDnYHUDpy7K",
  "key28": "5eVQkTtpZ6JSsnUftkFLcaW6Nqd2kHfJdBp3WDANA3Hc3VMXL4ev3TJd2LVaoRzQcEM5C3Py3UaykBPF5P1qJJEC",
  "key29": "4Hv9BpnzAUfKSkQELMJNxV2sKthycCuNGqF8n2bnZkx177qi51vDoh1tHBMfqCP7Mf6s3ckk5pX5tMHeUrWngASJ",
  "key30": "4ur1UGdEFkauPxAYoBqrRb5LofikEFWk47e3fRe24r4XtgKXzccYUuUnh2wtJ3pBscRyq5Npq5j3avqZ8oFNSfYv"
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
