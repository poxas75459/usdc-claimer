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
    "5bjVwz8yHAgQntCo3DNVyn2oeDKkG6LYkHgXuRKuuUtmJQ713RSfQ4BPtCXgvxXTa2DpuUzQ8Piv6u3HF3unexx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zGQeHDr2c3haq3S5xQX6XA5RKBLz7HN31GNbJevvVFsWJfbj3Wzy4j9USQfMem8s6pQfV645qts5wKG85FeGHz",
  "key1": "2rnfwwPF8LfhBFwJ39PchFcJ9HhmgXqQWCvhrFhn8uXsasLndsDnCoALAcMi7VdNdXBmnW6ahHEsjkdyHmrasSTw",
  "key2": "3usQVoKMWbyBQ1eHFsGTG9egHZRfPL5pZnHenb5aD1LgKgo6QJVdaTa9wNaiyRuTfAXrRqi1fcx1bETKSStVB9GX",
  "key3": "5oR5cvQsCTSr5gPZSyDRzdXKNGgBJitPHiSEdwfS3tHLNJ1LYmTRQhUbEfRpRoLRNUiBndFHFtfGQPYSXvL3DiXt",
  "key4": "3BGTJqP5LVknZqBnegmv9yQAmben4RsudKKeNWo6PfuwRa7AeRSLkKo3DHw2yN2dPgANpNYJgM4xeEyicxzveXHf",
  "key5": "HwEYtoGF64bZ7TYNztj4rKX11N92tj57MTovdRTJCRCsRAfkGJMS3HkxWNe1bk16uR49eW1qTfvubkjo5GkqEDz",
  "key6": "52dvhCuTRkB8t22c3v1hMjusTMAZnjDzgbdK4UrTuF8pbV743aWNVaojqBW9oTJFxeqgSWQCAxRpUafVo48ivgv",
  "key7": "4LCpXWtk8wuLK8domASZRR7J8xeEoESYN2EwGRBup2fm9somS9ShpG3LXx5y13wu4DvauzRgiNhJwrjmDY3oBTUt",
  "key8": "33jUhS2WPxi6HiKvxCV2f7sVPtWzC8Lh7cfJYcwiLhXTVN3UEDuTxsZYqkRQeaTvdKrF94dmv9nnQjJVcx6gdfNC",
  "key9": "3k2cH3zsr3EyDgqiCpmQsEN6sCLW4oKcBtemMTZVv3dx9xb1emjzKKcJnxTrNbLfwuuygbKhxtYuoVzPMSPa96Kd",
  "key10": "3DcYujR5nK6BDaNgkk9PTrkepunZsbccYAKcjjzubJtzqFw1s6gQa7N5HdfGkf1QQRFWeE9ghhB7mPxrpTPYjaU",
  "key11": "3xPWBRLVyQRLsoYQCQJfUtwqShudWrhQ1SykaRmA3LSBVB8prunggXeUJzvdYM7SXT1btuKnuux3ZtZ36jqgyR9P",
  "key12": "5oYTk6bawW7R5cLDU6gYKb5HCUeHZyS1y2HAbS1yP3ymWVJpgqFkQn8keEJwmVcix2tiSe13gmtzh5SmzGGc5KCx",
  "key13": "4jYvi8s3se9HXGGpTngRgHRnv3QtLaLc3Y4BJYQmsztNL4bEZZ5BcXoPz4scipC3VQ1rz51XtbLxTzXDacPhWgFB",
  "key14": "v7q97ozWm9cdaYKXvNrFMfwq9fDnV1dbqBvGQLRYUFtStHCpdWogfTpPTRY8SKBAW9uXB4pHyw6yccxW5R33mVY",
  "key15": "TBgdVvFB7NQVe2MBnVs5q22xw7yJ8CtvGAhfdpcKDjQ66WDWDS8wUE2UVLJDKT4RCHLi9CD2AdEandhD6GUmiDY",
  "key16": "bdhbBjjLCVVWVNjBkdnMhogs4DD41kgmmh96eUswQiHJFDaX3EHnekKUGEwhzdEQugfvEG3JpkxzpyRFoct1VVv",
  "key17": "34366rLG4xeaZxtt1mYMbgbrGC5G2YTLQfcaNjePasZXUdADg8MT8MWUYm1MkDshMVvzF9cFUa5cEJCqnWfVBFAt",
  "key18": "4TK6iuCPNVzRCG91Uu18Etc2pPsJ9ZBfVauVYq5yvJ1vi84uRtWQpK2zH1Qr9Tvfi621xq8ogLuVpzB6c67VPi21",
  "key19": "3ARQzyD14pgydqorM7en9PW25sgUGSr72agVfZJxB6882BNiRMiGMgQUfp5PBnsjPdSLfxWggQPhRwSi9jjQJwx8",
  "key20": "MfF3EcEGvQzwy5rkVwWPUGeANp911oejAmfGBBNYY5he6AXNhWVfPUtJ1kTT2ExwbYhPAi569Lw32hfthogzuFk",
  "key21": "2e9WUk38jaCHSGCcxBSxrHLZsdwq4rVPFxDexUndjgGXD58vSb5KtNTbJRRn1J1MNLVbZ3fvndHFJ56vkiuJ5x5Z",
  "key22": "4BE62VdaVqYfmcoY6mHNHdi55EvPCoGDWvmAGegtUWtBuScgowoMcTkeqx1swo4C1AVs46FYhDzDnbUGALjLhF4W",
  "key23": "2WqEMLRCoHYqcifRTWGaWc1hZZgJhpH6PViobNZVUKTvn4UUbs5jmZcZRVtTLm6jBexukZ6orVU3ZoNUU8nuaVjc",
  "key24": "4pY28Wu7R3zgVxnxTcJr36CeJgRHkM9qKswf4RgrmqQJLdPKazpo7bWvxjA5uPBTRZoBANbjQvkgKGQELSzMMwAw",
  "key25": "5tBRPyXCkfsBP1P2NXavUnQ2iNEwc2H2ASh2mJCMC69NEu2x45KJjZd5AtZD7zN6An1xkCpDDCNq4pdL2xEXysFk",
  "key26": "3QfeABRCCNGnCxooRq265idwvJBD22rJ3yuseZrkq94RAuEK6S7ebeXHVkKjmKJxQfGDWuF5ND2zQw1QfLpkyMsH",
  "key27": "uKgmpxA9yVBijMLKTWhXYtwivXqC9qfH6KaTipUiEGLpQwySJeXbzep4qncfvrKjNP7wub1Y3bFXsCh3kNfyfhw",
  "key28": "RCkRQeSo8MePr4JWUFMqdfajFYsSP8CWMWEiunnvWHEy4xGRbBhHofRmw3wovjCMaCY99za1dT1Kf6KBbJ37b2F",
  "key29": "3WihpVj8p6ftTktw7e3eG6QKv6bJLmspCSYycYMhExXPim6NEfSR8J5jBX9UTJxt5Y7zQDvoQEh1NY8y1JmgwpFz",
  "key30": "E3yfW2AVuS5Ht8xra2akcQPMPkqCJXCrTvtZ1pnexrbSMXmy1d31FJT7nTA2iR6piQVr5pTEKNVDmHT9TdTbrqg",
  "key31": "5q6C183ScoW9UC5qYLrCreJP3dyw3aPApypTT2ud24PyQU18VKkUTw88UqheCbRgABPWthiN2RnovZZ45fU2wQnJ",
  "key32": "2oNxJPAT9K55L5E9szRbiyVTUFUYtukYb7eZY77c25cJRdXaboRTEx1T4yaxcNRnmU3Vum8jMKzQH8VjSSkBjynZ",
  "key33": "Pfx3uVM9mZwGmvzBoBGQiMUEH7jBfdWRjAuqNQGr24958SsfcsHJ1HVnCCmho7KLcx4sf8Xe7rRkTmrVrRKw8uE",
  "key34": "2ybJZ2hL4Sjb9cm6r2UQWdkhvMPdf4CS4d3My5icBmL1cKwUsi1dWXgVypRMpg3VrA34bNgQv2SL6uev2woaMxgQ",
  "key35": "41FH41njGpYt5jVgqBhWCvU14BceJ3nEZ7SUSsVQjpXRHqLQVZoMgPHHhNcYwsVNDkr4PZ6K7NkePPYotLbprDgC",
  "key36": "556yMQjoGAi8Ksq9vdc3kNgPZDqwA6M5nFS5mcK22nvB2LKLKYtx4WU9kN4ngBzsmcuitamfHDtvnEbZQ7ZX9hVn",
  "key37": "2ycUgynpVVnsRCLx1VLEzaVkLfH4UjqvjRb47THZw9h4Z31aXxqXiz5JctE94SbqgtyC7dXYQ1zU82fbHmb6KwfX",
  "key38": "53WfrYKtvdk31xzPNo94atVovMD1UkyhGgzmG9EsK5zMX7rZk98j3XyN186DMjKJxH29rBAQRvZCEXzgKbpzSYMv",
  "key39": "5TcCWLixvUpSQXAkk2EiDLZynTgGdUyrWcbfR69m6TxmA6Eca5xAtzH4edKL86dox33PreBmr8sQEr3btJny4aD6",
  "key40": "3k74TQy1APTj26CaxXQ38fFaEuZi5ZxTunYu7tecXDv336EEiHxbFqjiDab6yNrsmMeSB3g5yjoxNYTU9vNcF7d2"
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
