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
    "3hjL9ZgnKtyLmgG5LzzSmu7gijwEbPQaLso8XpsjcTpgJyp4pFpVwyYWUxEEyNWk6qQfcyQLp4LMyDy7TVKSFiQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kN9SSF44f45wEPjNkgycicuXuHLYGmykW4UJatKfRsJRSwGM7tXC1ks7W9t3gz6XQ5EwhjaJUCeChWgfnW73bMt",
  "key1": "3mPqYJ6vwcfqmNiBVH72HVauR56yGFiiD5moareB7NKFb4zTtkCcr2ypDwY4LBViUys73Lbimtyz4sk5LtAh24QV",
  "key2": "4pGshTrYC15ZBXAmEf7GF5KpRtk9JjGjs9hx8113Jx326zB5SHxQVZpRvAW36KW4WMntcBeM3LnYFHmdrDRyVSWX",
  "key3": "5FruELwYvGHgfx9dHVx78tjaFN9NQzQvH9WB3PHgCKZsZBFJqatHeDLiRFMJRTYU1Bxdsavz3EpFiRgGWbseRpEP",
  "key4": "gm1mKbQmUVx2TYDiTyKwT4Dcc4YAcvEo1mQMwCvKZYicfdfnakMS39yEQqhSKiZigcYCWWQ4CrsAwbzr7kv9Rzu",
  "key5": "2vhGuqgrSjLW6es44Zq3h9ptesiXW9k7P3LGamzk2dswNLbHKA5ySXXnCBk6K5UaKXPHY86PG5Cpocq8DyrBCd5b",
  "key6": "2tkB6J2o7eypP5eJPqw6yYM5SnSpN6TywqvwPHmBbd2yEYb6Stc1eg7Z3bYJKxpjDo7hroBaFrA4CsFQxuZMwuAJ",
  "key7": "3Qvf7ZDZJ941vzG3RhG2Qh4Vi9ywYMnYrNX7DcK4TJNjPkGMxCFmfcs744mifjK4eu8HLUYS5xT23HH5Ukhbvg13",
  "key8": "6453Ptiizb5QrN8pHqsf8qyerWDCsTpfJdnYsH2Go5WF74Ym2HQWfQBVydRTp1itpmBsYvA4V8ML9jEEbFMaYLC",
  "key9": "5Uw1exAJ9QpdwFtr3u6vwfpCPSidjrV4Lpvq7BUK9xNXCKj898uhRKrna3bfUW3p9s2SPCjpKv2TQ4cYExMRixiL",
  "key10": "27rw4HtyLGDuDzKgjTQPamfF7KQaBFep6HXT6Z38Dy2FE4f1CtGcvS7PXNnmx9LVB2Xm5pRK1JwcFufme7KhdgdM",
  "key11": "2hhptL6YWzkGrLYQmNau6m2W6DXPe2KJh7b1ZatE7U24XPXmRyYpYF8bpiTbVEDT72H3LQoGVr18e6BzWeQyrco2",
  "key12": "3ffEXXvDQVxNG9GXAKHvijdAhk5cCskQcW1EVffFVvWSvc2B3CbZSGZTkWTSMfSV2CBKaDukYPn2BcrfspJBDQYN",
  "key13": "JhRCMaPuJ72eALrjVqAWSLcxkcaAMbcmf6grmhmbbzRkZA1y9xyCF14LhivZxVmWrpb7yZL9AfmNjqBFy5DhHcP",
  "key14": "4C4jwHQJw5tTU8H6LeSMGC5gfDqoim8irw9KwCZZg37yZAjLfQwdJKrykwzig9jhKb3QijasU7onC3m9QPfQuBzp",
  "key15": "4dtLdAVt3BobBVZDDBmjGxPU7yTNrbVPNZt5mDesNTxe7j4VqseUdrdrnoj82xZe6xSF5a1cwsyabb7kgFS3jMpd",
  "key16": "4t7Q8sc6hUT34tBHtu6nSP8ENjwKGHGLQhMXFy91MEi6q9QmGKQYdGobSQL58fnHhfq43Wm6V7D1XGvKVH1NVpDV",
  "key17": "3z6o9j1E3DU32wBt85HmvmDTq7ojJLvtY9UaTDA9N8W7KYGxGXiQExXDuWWMeSykapK8EfiwJH4TdezyPPtGJXpb",
  "key18": "3roR7D9C8kiMR6LViFAs3GTP776U8FeMUTsGvx1qAAkWm1qRy7K779vnqKuESPF4CD3Cbm3i8kJbVyaC1yFiKy57",
  "key19": "5kVJK2TXRc6RkgRWn558AXmH6uwT3SWXa8tnnTZdMiC3tBYA9LAL2aWUtq45fxAuUoZcSdntFCcE91FvD35GH6Wy",
  "key20": "5SKVPhh6aNA3tqmJ8Bxf7V9je9pdVuRgkGRvzYMX3GMjLqbn2X7yA1Sr9GT4EumAT3sfNcVrdt8F6V8Son9DBmbd",
  "key21": "42His5rLEzbXHRLuvhkf7gudqPiYsuivo8G2uqZg9Tn2CY4CdpMc1qPCzvQVMKfEzzFXEfJVw4gugYyGuQyr8pBw",
  "key22": "3uENXZ3wqRuShs6B1K6A7f8xDNiuPWQdfpiGhBMsUNtN4Pa1jcmdgfNNBKguawKe9uPPRgNoQNZe4LPCy6korbEh",
  "key23": "3hUjYtDqjCAgyHqoWK3jmmE6x15MzVvW1PYUojxbMhdE1saNHyuF6tWHA5D8VkZENLPRPEJJYDFntNGAKba9YEPq",
  "key24": "54Gjf1vR6oqDyELjSPvfSuJbiptYwTb58RgcTf4qP4hJokhMAazcyt7k24hhbFzZS83TJJ7iPgfgp2aq5kbPERnh",
  "key25": "2HrUhC2vM8VgGJvRQAbWL2rRDSpeEEifQwHasZQuoX7cVNG5ePRgGzGvuXZSMDsXKXZC8FArjKX3yRGQTXx7eZgM",
  "key26": "2YnG9CPdyz6Ztr3xoKmjeWXCvMFLs3ssfCPGWQHinuFfx86FzCVrqkX3p2Jj7zaqZ5pjrxHBDcppCgnNKcvkD9JB",
  "key27": "2FsjVTmbAK5wNhQfh9d5iXjagca3AbkRpdXR6r47ETvWEZ1eEKHFh2cwYd1WxYo8DPWF7v6D7HBXct2aBPk9DUJm",
  "key28": "2e1zmXdmFJLqxKvNQ2RSnckXLDpeGdfk3FGzdm2hwKSNQAE3VTDqEZFuDvQJXLJvMk8YTKPbNJr52ZN9gfDCHgFT"
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
