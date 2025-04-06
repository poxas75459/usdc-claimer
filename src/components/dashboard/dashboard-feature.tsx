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
    "4FikQAe51izjK45422QLSWP7TAqDqSutdq2kowz2aDfEjtAYyWSCprioLntCQUHsS6NUm8RNAyv8ebuYBZ1fmBwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZN85yRV7YPRjuPXHPLxRa71yfV5Gonhco1zpQxFsg111XMvFsGXV2ssXmZ2JfwJ7P5yoc55tuh6K2AzXy6RymN",
  "key1": "3n4NQsbovNpHKigBjFtRQ9TKzS4kJ6Yq2WzPiiQkuNJUSLmsK8o1nGPZ8Y7pxreG6bMnVQDsdPGguSbFEWedqjgX",
  "key2": "3f4MCm9VCiTvrDDxU6vMbrTy11pQ839cBkz19j8XsLYSx6Pk1UzToN1FUb619JMZCiDo5PVh48qDjE88PPCwEBJK",
  "key3": "4pr3UNivqqWXgLM5FNPkqGEHdktReeBf4H8WNvHne81aYjdCRpJkJRMEHAosKoxoWxfFcuX7oTyetMKGWngCDVNV",
  "key4": "5VMzJy34itTu3vV1FZewa3UYWgUs1EfJ6VmfaRtd5K5MGb6sqzDf74gYxEk3H9a5DGStx41AtRW8kSm322YULaDm",
  "key5": "4zshzbnraLjkq3yYdWnZKo6YYBtoanBm4J2p6ZNAnXomCbQSTJ3iyoZBjYxwPBTxrfMLWFbrh3ZZ79nWfHtnaKur",
  "key6": "5wdGZwQPibanhYVVPLvLK2rR8DKkhpbYYS1SyhQHdd7SZcKbyRHhPLVTDFXGUmJcTsLe3SbUtd89PmD98H1DG5Mz",
  "key7": "36mk3qbXKLHs8qgjXzBXKW7PYQvrmAKd2frexV5G7uHrDRjrLwm2sYWnbfj5ot8yvmaE1aczoEAoyrGsDabXzDej",
  "key8": "25AjfyqVkniAF5DT6YEhmWRtaZzxU3z4X2ZQEqgUNG1ScaKDQgf7aLHz8E2RUhyhdS1AZPZrewnsQ1mY4n72Gt1R",
  "key9": "5xQNWNvobRMijkwvDqUYFTwHXtJpjsBLmSHN7iJnsSkv4avWbC3McrZ5GLeewirpDLpETDpG4MVFyPwJpLMmLxmS",
  "key10": "gPRRZREn2yeGTFXm1ecGhgytXs5HaL1qkwd8WmnpDguiWj1nyiEzYCjY7VaiPWoFLLwyEbXeazjS26MyinGJoHW",
  "key11": "5bDQ3pJvgwMxkjb76PDPR1inYtxFwCz9FdXXncdW2GXiYMJbG2atrbCRDqVcYL9KW25Lyi3p7YFhEDy86FHJFzUe",
  "key12": "KFBXM5EsXDdTMHVQ6NPfNAmLo4fqQ2jhF8zgunASwBBYC16zJn1WZyUzaR9zYCXiwz7efkaVgNY7QRRNfCf618k",
  "key13": "s46mcJrMnnWiAiEAsZUXvoVmjfy1NUpjDxPbmeGoucrExE3C8UyCaFAR4sqznRaNr8abJiWVZJehGz9TsK23W4p",
  "key14": "2wiqp1GUK9A53CntbTniugxAgbzJXdEudTGvQhfsEDTTsDPR3wqofu8gub3hNeycdLsXDr9DV72YeHDiKNWSB3HY",
  "key15": "4qYj3NGUtxVc4QMKJcHXrhKHwCtMmpL7PgTEQLy3wQYZVAi2dQnAprJftcRexE3iSsnUs63Kfq4s4CZ3CsrKN1Fn",
  "key16": "5iTMXtJwACWvCGmCokvZKAonS7pzB3V6YCXdk5raoc1EhyTVVErK5XR5wYfXEqhdKmjgiqtYyDoZPmXbTqCia5dD",
  "key17": "3Uuw17ks9R5QzTQ9oY83Py7UcqHb7NvQy5ocX9Jp6zLzSUckd8znywaQ1qx77XJo8Mff3FNsCTvEyDLoJU4C8aJ2",
  "key18": "3cREdbHX1Eaq91VGfJnoRdWeB4sZ5jFPP145KLhpfrucTH8X5UkZ7QC9ryUkZnTegWur818omkgbxAVi1ivLLHoQ",
  "key19": "3ceM4jL99Yp4tZBvrtePmsHFJXJ3RnCwbZ9sCe3tnuAQMpASsPBo5mUphH5i9PffKaYa3DNhjdLsSuA2jX6oF1yy",
  "key20": "4hdHEm4zyfLbXS23MPkiCqLyfQFZUPKZEKLXtgcYUj5FNALp3GLgo4ZepVzxEiTj3jnQF7sVd76UWTEDHdHhkL2r",
  "key21": "54xN6haKKiv4wzy5k9fxebJ61oDWQJWAa4TMU5DbCY2szQuzN2vwQCFAigQxHW1TSWPSasVQQdZpRGhRjnAhR8yH",
  "key22": "5G2BhS561DiNjn4eq7pxELzQtyNjeNdwbnAdW24iEcqamhsa422KDBNjZXtLfW1pffYvGU1MJDzFWNJAWDK7nm2o",
  "key23": "3yMLLwyaGt3JZUL5Qr65PskTbu2sXwwNRrQgnU7xaHpb11PBNE1xY5pH86gNof8wXFVXnvfm9TstZyFw8hZ5t3BR",
  "key24": "3CDByAwM47oZG4fJB2YVzDqMwMqAYo8L4iG6A2JCuLpd3pHN9xKRbiVoh63sP9ggJgkEyNnLhiSuyTVgapLR2JXu",
  "key25": "5KqBqn6EKmVfS4WVhFjJxMkwJvShDQp7Pf7FHDCmLCdowqaUBv6zbCpazpE6sD47dcLPa2Ks2gb4VJ5KcPyoweD",
  "key26": "4wTh2tjBWeiciEm4eA5tNe18uWbRHcD3EyTU35Ae9hpe2VwMfwjFWp5mgcJqKzcMmsRjxeV6zyiobgwfQfics9Eh",
  "key27": "2qgawQFU1HX35WBcntD2czm5FxMuunMqMuciBxCBKdLc2ptbXt1649taN8ehR2sL1U42ajG7St2aD9wMq9cy9iEN",
  "key28": "2xHc7m4AGbBB7DXayKChtseKYgqqtwQhWxysRDDh8TLijKDYfpFwjs356xPWiwVSU79hJpLDRzRbVYCD5ayKn6T5",
  "key29": "3kYqvyfjd1uVmqFt6nNcZdV8c79ARw3RuuV4X9xaQ6C9SYMyJAM7utAXpRcP7JvNee1cVME3MFn1QY58D4sMZqdn",
  "key30": "72ZavKU2We8KtnC8YRrpDBsqEHP2qhPbDkZJrVJ8ZZBPafDNkLnjMns8Cx2QdpkExc2G6krQngUDHfT5xfsXXx3",
  "key31": "4B4XrPBJn8HWv9uuRnaDfJfJt11BGZTPSNxf4gXVPR7LAmTaNnviukHA5TegoYGZqYVB5AwdkEJUZEKGfJzzFwf5",
  "key32": "34GxRYyxrP2GJexLogXg6ZSmpjuo1x1BGhq4jybakP1GtxrsfSUAdVWb4Fm12ysgg94o7JPTwXcGfmW9BiWa4uvV",
  "key33": "4hqjQa7vdWzCDuhh1NKMgSkxQpHbrpjYfYDQYegif2QmgEfW66KoAWdJXukP682qbupNm2WtfibazWtCVJb5jQi8",
  "key34": "2yGGxcymsurNQbZpQ8VEuHEMEkVdmgRzaMsfqpPQSJ5fsjUnbLQZUvncZkLfEs2VYPUzNm1bAzjdyKuQuTjs1MWA",
  "key35": "dQ3kwhyE7RoisS5D6S3PxZhFi3pHpMHho2RpvsWNhdSmTNX9kb3RP4GKPqpm7XQBhQxj3YR2WnCYdN8YA7m1F53"
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
