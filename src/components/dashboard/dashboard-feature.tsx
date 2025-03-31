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
    "3CoxXxrRBTgirzQRZQVcv4f6LSE4BUY6gJf1GJtDV5rE7ZtixfJwunN7xfyHAdxwnB951F1tr81E2Dy3Ri569uak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwmyawSyAw7bqShLFahT7WsZq8Cy7bwWF6hhedLTDWDGAwWb4nwnQZQamY2LXwWYoFZ8aW8bxPCqM9AAbomqj98",
  "key1": "5GmpEiEvRCDgCmCx4fBqreBQgRzkd7CxPMzusxwaE95UAmos9TteATRfttVVga8i9ZPqVqDtgC3QUSe9MU6PGj8G",
  "key2": "3SE8vC9fm6J62fNo1jrH72PnrYgaYUaqHKunrvBtnZnfPXgWJURzPb3LXLVS373tuL8Xf7WALV8KGGRT3VffTeuH",
  "key3": "5E8kinMz9aqrNCW9WdgaXy9n4wSMbtjWuQaH61uMDEBGsic8DtMisD6cWarx7d6yfduuWAwXwDr3NqYsoMeGg2Zg",
  "key4": "5oykgjXtLk6dGURxT6K3QL8Z8aMuarx4qWmatsp93DkrJFDPg8k4T9nza69VyEpoYG5mGaNH1fBvwJKWPWmXs4hu",
  "key5": "fkj5B3gtnGASoRp15VHcCsrpixHeY1XEjevo3Ci14RC9Y8X7To2crEP8ueZnx5kgWnd9ZSHAjPuH2Do72pHyoiT",
  "key6": "51TsgoQ9grXJZ3CgjW2kEYVdF5mAP6vNgTs1qy77DdZQieKSP6wENktqbJ2sAUBKYxioApnQJXTfnyAXcBkaDcEv",
  "key7": "2uxhZaePPSSRhb4HGZKAYtGJz3dkhDZd6ZRJJGLK7sfr3XuZAsvKHi2wXVBhtoP3JXeafGWcqBbxxXmuaJefTvyR",
  "key8": "2k9nAJPXaRP8jRnPeGPy5uLcra2MFMA5LvhVEQUDjKHkBotA8YigdJzLwKTizk7Cmiurj5dxhjrH5BCyYQuWoAtQ",
  "key9": "5ypsaLQUqrXFELdVhan7pjss1P9t7PGv1vhV4iKeb1fGsf1vbrCcVTZjexd4kGU2xDjpHJ18kkCe8iVjpzD7KqZf",
  "key10": "35EugmjhoupFvaLgQsmXSgF2EeMxKL8Xe9TDjQsRMN46C2Rzjee9XYvJzppRpG3xGqGFkbuX7NKAHcQJ69K6U12o",
  "key11": "g1sfmbrzdeDPdsqGKZcyU8nf4WkibKbgzi8uj9ir8TzFyqm1vJrfw27yjxtK74rhrqByu7r7jwMZ7fADHRRgSyv",
  "key12": "2i8HwfSW4mFX44RQTKAyHvSWtL2x3YqzBxHTSZzfDQGHXV67ayLcU1K9jikcPjUVNqW5EMpHXJhZmMZHzi6yU4wD",
  "key13": "64c8uJZb1qyZAnYu52g34fHarigQCs7Vgcc1NL9ev27rNxZ8W78Y6hvcZMa5iodCQB9AF54QyZWPyepqsdmrEEm2",
  "key14": "3qRimuxKF81Lk7YnBBYDXJaT5u92qsFsV9TM5e5NJbftBze7fQWHryebnfJcD5snf6asZPRyE2g56nnVWfS4HD4V",
  "key15": "2pxg3RJVwri1qXGYm3nttpqbAeP27AgqjPZxuszJWTSo8LskqwbGdZkr29yEHJRxYhzdKj1GqNHPt9YahLJZvtAM",
  "key16": "4fcuaqPVZWheJPSnnLnxoswuBfGhzS8ezdvbFpHUaGMhc1BcPGdgPFeyCFN62pkMeEh9xCT7mKmkzBBLB4b638kv",
  "key17": "7B7NbGv7k3sQiHsD6QnoLPN5KRvDofoAUMZAnvHbVVCTd8D263dTL2mf86uD95RFpSDmtxaxS6MyRxaSBTtxJpD",
  "key18": "4w2Y3SZzS2oHokXPAVDfowmfd2Rf2DJQyswMaQyQt8qtuMJwGNP8VbbQnrcZMBspP31jAhP1JWdwGopkGTEM6sar",
  "key19": "34Ku5vBvc9B4vupQuRE3TGhLzNyrmnCN7WVaZFZYLgBMWu8Mx83y7um3npDC1RHff34z6ttFPypHZPD1LVfC8zK9",
  "key20": "3qgM2jdVvkbq8V3CKJCQYhe4b33hjVXZh3FD4NDv4bioXzcnosPQvqZpzCt8tXzzKMUKWEuNKV4xWQdRn8GJEKXm",
  "key21": "r7Anr84Lbsbx7tYpqTQy15GxVEvvb221MMc2bgRfLGsXcrN3PTkTXsQbV4BhWg5YxwepQgJyQQrFN38MALppDvs",
  "key22": "2w5X52yvEsySMZAuVcFNR4uZyJYiuq1rcbZtL3ACHhQ3mpHNGBUkQr4xTEEJN65mNvrnKVidNvucBVZsUusEHDfQ",
  "key23": "62GgNw1TViwT6cZt1smChjdhuLfWmJHgXzfLmuFwapFpE9GbBBMJPezuvaPppYHYUcrnqZYZzppgXwqq28GXKJPy",
  "key24": "2wcndXkG44bf2jks9wj3sXvuVxBHnS22qqezSSA3J2bMhaj9bh3DBXtmiKtoe6ffbjb5YorL3a1fhKwvG54rSy3c"
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
