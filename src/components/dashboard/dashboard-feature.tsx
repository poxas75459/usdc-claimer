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
    "K4VwizXHf2TKesfqKfqgPRV6M9SNJDpq3jKBFEHPKnuUkhCQvDYZ3J48FQzUNuRma5AGUTsTti2R1nHJ2QvFz69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DuoRef37yytZELWxQNvYzoFGm83tMh9aWZWxoCtXwEutYoRfEmggtibv3JUyzAWyDSprekaNH8BkX6T8S15n8g",
  "key1": "5GYrUEDd5xAi5wxteqArVFbK2CFCyFiLsBz7wjc8aD6FZ4XZNnHFVVmFiyUWRM5ianC8vPNTV5Ut4MpmVw3cm4Sz",
  "key2": "39sZ3PvGGqVG15zuMJX9o8YnMe93S4mCHdViBmyVvgGuQVbBj9EQ4m5dC6zddC7y2aU98E8iyZRSM5at89N8Cu7y",
  "key3": "5orRtp9sSW5LbEAXBxUKVdrbU3NakaXHbhE5EYpXaHAhQwAEKEDZFMsMME5jkQoEn65kyo6AMqXh43EjqtV4ogyq",
  "key4": "9CRsGBaejbLSzEXvfyLQmwdfXRNQwJWWvdpcEkU4k977mtw8pNwhTqRRJc9TzaSQtn492RpYQcTmo2epxGZQVqX",
  "key5": "2yMHhvyyUiwEKUGxK9wStHKCCiuo8YuGpvxPW5Jvo5jQamHnfdUoz3W1xZsb4arpRVgFVbcP6KSETq5gnVWPpWY5",
  "key6": "5oVKqhYcCMubqbhcFna57aiQeGKbEHhkTNTnZhhy8wzpxEGuJ9XiuN2u3GjWz53LCNQggeQ61Ne5KpdPexrPwizH",
  "key7": "3UpEiTSFQCNqPri3qT1jNJKzdHaG8ruFw8RM9ZswRFVvxHL2V68HUxMYuRCQDg7GBLLKmj6b1mMiNGdPaqtXYuCe",
  "key8": "4oWQh5FFBdMEJm9xJ3GxHjMLp8orczBRDEQFgLsf5mg9TCPPKrzFpHdmRDem7FknD76weUzEMsDvgtgTu8mJLns8",
  "key9": "5vqsTH3NPS8DEitDR4d8C1viSDXPmDyGTCcupe4LXUDQbCv7ffSXZzVBQr1jh8iEUacofPRrAmcaR57WCV5CuLPX",
  "key10": "3EYTqDMiHAvsUbMwLJwtjqJPDLtUCMbidUG9oEB47cocrubZrVWc6iUWvGFcH6zatZx2iSSkw8rng7GyM4VHQcse",
  "key11": "4Xj9gRxTDTXKqVRfuEGtsb5g3bGrS4wBPXkdpXNxQD3qweySNXJUm9Nur9rkvcKhjtcF8UcnLTvmrAWjfdLZpwTy",
  "key12": "5Ui44qn6qGgyfQch3bLEvwGDERqZNYEvkGqUW1eSe29TLqv1Ly63NuxJ3DhHUD9cJKGfbydzHWhi2Evt1E9dS2hB",
  "key13": "3qiPdEzcFbmJ3Z5VDAxhzCqfrpTbB1d7HGmDrSxQdanU2UHSPJ8HED4s1Uqfn9bd1cQVSnof1FJ3n6jGq2oDBnwp",
  "key14": "4hsyBcSfT73mbSMkdhQMsu9mvjdiyDoWWkVzbDrTRJ3cyUWwRxe2diSigS3CGrf3RJRqW3uUU3Yb8CMw738W3FtC",
  "key15": "hTjXKgEs58ndFkrRHc4v2kHZkMJi7ULAvjRt6s7TdyxG2ttAAUwRVXa29RuzSAxN2Vyjr3su9AVZHpctUAEXS7d",
  "key16": "32mtC5ccF8wVLCjdKqLNTtMjokDpyq6LGUkpwTRMajo2fqAAYB2xmbVa1k7X8xN477B3DgmZ22KHGnjKUCBD9R11",
  "key17": "2MppJQEu32MqcHGsYanxiq261TJrT3U2crgUqkoYqfK14wK3asoBuoPzd2m2FYAS1btyrkxEfPqWaZ6Lrb5e6rtc",
  "key18": "36f9ZWyZKJX3f6zcsc1WUKxnvmznqRcW8A87mvN4BQ2HADxX2AiekSoGDYYQ8ukbjbuGkrvkx6ku38f8mXwKhERu",
  "key19": "z2R9uc2xM6FXbvGfT1PJyRiu6Ld58GYrJQAVFt271XjTNbpWtJvRzkX9MKhevZfZmcQD1QdJd9Fgp5KHwfhoq9K",
  "key20": "TP1oAdZbbe3u5AkMrdGszJwM3gtgWXF8fmZPHYHaeKrScPcuWPJuzzWxtfAUYnqj7KEKHZtCdGBp8YsmGsd8roo",
  "key21": "38eE5x7TQ7wyT88hDLfJdCL9SnaxmHH2icW5RBYdbyoK71kE5csDtpNwcJ4EzERV5q2GbxBRRFhsxHCdjjLVPUKm",
  "key22": "3bs4fe78JCNKwRBc8jJkbQMuHAXQnC94bnW6y92X8TcU7Cj2c8hNLiAq2gsCKSfMJGYxATviQyL8LaoddhFqMQcn",
  "key23": "3vegmNNCnteerqreQGUmtRhyCSepDvNu5Apui3DddrWYSieTLSLJLNZ2TFudcFuZdBtYsbDSTrz2DcWgVCY4RKMa",
  "key24": "YHFd2E6gE2Xare3WjT8caVVMZpANCmn7ZRHtc3fdAsnkZ1vn1Djy51xNxjCReGCzWVxgzR4J8axHTGyLr3BQBnW",
  "key25": "45gTpjprLXnK4b17ahbQQ7MnnBSwktZQTJVowyaszq9RakQk59F1JLM2ryqEPF55V1ozRnZTV25Lr9ocYutTp6HT",
  "key26": "31vCMq5jC6khTr4dZLotfeg1YHGf8TfxJ7WtUSP23wVkjp8RMT4PycZHDKodMth19n7Yr63bSbV1kPynCYu2zM4o",
  "key27": "5BfAyLNT9hLTqRZNQffdeASzaP1ztKHQposi1jeQEYATbqoSCnaobqsv8kbtobRwMHhD9h3Gj4UWhzEYnUU49885",
  "key28": "gYX8a3JhdmtmvmZ9e3wps6ToebjYjg8ag7wdDbZXmmcyWD5dzGkKhRGuRkGexoby4FL23ANEButFdM2oyXx5qjB",
  "key29": "XBF5F29768au9GPm1reKdHJNHWrbQCGrje1pCob5ZWcLwdB3bBo4pNgbtVLL3LpVWYHHqsDXLLkS1aqmxfaUShd",
  "key30": "25AbxEfNu9yM7wemeZ4gwKmcKwpoKiSskNDprdGSZg4zLWHYNr4qay8h1ZSGNq2pTfurkm6ggx4fGRGsp8RxZzFt",
  "key31": "5aDBHsEWTWRLnErGKhB99U5AQ4E7DqmA1nn7UXcikomagscVKRMkFBe8dNimFgv8SnRHfpnPuuJERnZ8LPnBBy7m",
  "key32": "3qpoDa2N8Ye2AdAamFRYKTR9MeqPjQ5TAEBNQ6TZpJAEtBoxQsKL5J5LwTYfyirfDRqjwDJ5jJ85LYErECPqURoo",
  "key33": "3Eev85KKrzpXpqwtYAUGd3aEKd8DTg2YWQ7w2FFbGjo9fz8HPcaC53foqcm1CmJYpmVxVboRYbGixR1Upyvb4P19",
  "key34": "57b2ADYMDQKx9ddXEkGTTwj3kHt4DHpcQrW1mThUCFCEcq6KbGKbE1KPj94SFNvC9vLoWXNakm4qubRjpt64WW61",
  "key35": "2g2TdUHJb5hH2VTRnxJTgDyLJSQT2npWHT4sjyFDBPWR7SFwUQq9B7wQXtXiSvXh5i1izX581QL2pf9o9Lw3BGCr",
  "key36": "2wNS1FNTV9trM46m98iDCwUsC1kijML25pgCcZG47saaXYqoqLqEds9VpXKqyq8cPLmtpsQqKoea4iVMYmymZ1Y1",
  "key37": "3MXV5UM7sk8v6F3KD59mFhFGLNudi7etKd8suHooVJdK73XZ93jDhDzPPyy3x7FvZPS8uvJSWQwbpEBEj5fmBV2B"
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
