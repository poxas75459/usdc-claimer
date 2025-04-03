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
    "3E7vJDZ9WFesAqc8C3sJsZgWvjiynD66uUccFLpkzao9SnBCsrf3E7ALBoYwbH5wJFQK6ZXaJhytdufv6weEhJnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNDpJUVFbH9YyxFa5vp19oLFndfVY9MmmJvpSwTKrD3m9ZnYFxb3fs61UiLJDnGBcxF15xqXibPu6QLnQCbSf9z",
  "key1": "2hyuxqWBcsHiky3uJmo1gM24MaSYXxdHdrSJDEYLfL1YQxDHJPfBtXnb5bQEHJ1SRHEg8jUMcysfr9Am4JiSbxWf",
  "key2": "22qkTQGgirF3RQYjS9EccWaTNiaTtmjtpaBWZDxSJsKEcyzSCKG9r87QfWmjfeutvSnQ6nM6AQWb2tXot7hRvsXa",
  "key3": "VYzGk68PdxhDFPBm196mt4C74ipCufSp6ZqNwWDavBqt9wA3NJZLtrMsq7xKqfgzZAdNHgVpHTWyvNdkpC9ueYY",
  "key4": "4SEk6uxwuU2PU827mBjg6A65ewpdGoBinvrHHgc99MkqeDz8gQKYeLqzNvstmTzZeCyfXZbcC3neZHGVV9CUzmQj",
  "key5": "3oN2AeoWGhTZbYMA6ioQbcqQSjQkVymCDF9tSyCmTpG4aYaCnWcHd56fucyxA2xYWDZi8WB5j33MNdyReDp35dkW",
  "key6": "4eunDMET5xHGK3SUp7D6SydVhjCJkH88NSqf3n9ZU9GXaacQWBuMAx65BRr9YzgFbVALNNWbxbaw1KtAqHfYNcfM",
  "key7": "1UNsXhyQqdXhne9oSupxAyjUiBetNoqHxdx1Pqq8sUPJQ6GUwPztomo4mJP1cn8gtKShrdKJ8DG6rAkLpPu79vH",
  "key8": "5TQQRuPWq7kZBrkWg2q7pv6xJQJaUNZqhe7uzU1jUpFKjFk2wA6TPLxdGiZc4dup5dPUW4miq67GpUNxYZimqv5h",
  "key9": "5GQJ9ozujxPMp4n6m25fmSKS2pcTmvAX7sZPWehGELeyJUZqT11pRi2MeZouN5mkfQK2pWJXhDeirv6nXx6AZVVn",
  "key10": "HQRjMVARKiwfS7U7iQck4Pt87QQjfaAHNXruDuBQ4zaUgtKrjAmE6x4STKHoKaFBoSLhB7m4WXehvY43ZJ3TPLg",
  "key11": "2bKasZ3wTUeVxWhDJJAAbGKchFdGX8boJ67voME8N6hMJdmFAtmnZBdEtimuijqu2XA1vQDJMxor3PzjpjGw3h2m",
  "key12": "3NkgWrM2XAGC44tnMAFkaBnu5c4bYuv16K8ydK6bALokwZsdwbBK3YZPyabRcUr1XbLNLe5L2EAEjRJ1LmA54XUS",
  "key13": "2PiAxq1x5Kjo4HzKoRLLWtshx1jFxHUDoKFyAcpxvjEeTKAMkrT6C787goak8vcMTrLb8PWiutwJaUKz1sw1tJmX",
  "key14": "ZjJoD1BoLWH7cVq8247KtKRBWJhAgGt98c2CNBjgcLexhrpHLHmbPMuth2c4CbbyXuy78K2cJ2VERRRXTg5FVeH",
  "key15": "3oLxSwkFzqKW369qtk9HDstKGbqFyKz6purLia7U3GvcCAp4CndXdDYvqhq2NxL8coqPhGRG8qKQKx9XxGZXn65v",
  "key16": "3tEfvGBB65HD8UCi54q18uBvkwRnej3VF2fb6D12P3MJnxYBv1Dt2TiR6wTX7uM4QsCdgvjEDJfQXm6SgoKafeYY",
  "key17": "2BeXtTP66srJ94oUHhMr9iJg2A8wb2FAdQx9iJ7dnEiHEpzy68hs2TC1nPSVGy75yqMm6KtskPrXCzLXixXQUKuu",
  "key18": "5L7rQVcwDDzxDF3mzgAT2vS4tyJaut2BciUkjPngW1MPMVQwfFk9Ed6cKhT9JCB97evoHt1hWhJzzySwf17QQhDZ",
  "key19": "5ddBksScZZhaHcndsRSc4Xh2op6XTEujVEAEgvfiUqmkMUJsqrZy1XGTeZaZBffZ8qpsDcW6ncttUBYG8tbLbrA3",
  "key20": "fbuHKoR8oCBn3E2sWhL4sdaCSA6z9Qig7BN9S365Gm8QQD1CXCvKmRxPFQoxE9Vtf49LmZeGgtqD2DLs1jizmnn",
  "key21": "3gkvRfCi5EWU4CwkKdZun2X2SChnhDCDiKdXBgjVDxt6pvKeU5QYvUMzpeRKneUPvxv7vjtZac9iVmW8gT4d8TvN",
  "key22": "4oKJSiFXjnVEyhxTmzkTt4K76V3vEZ6g676CxQj3jBDzPeQ1rGp3ambs2kPk7FwdkxNX223ftvN4vyZX39PvUTWr",
  "key23": "a9NKpz2bQmEV4UpuzfZSxso8XqRu6cvvKdSuPp65PwCndxqfFab3CaazvdGRjJDf7bYdmGdCZYcrEUBHJ6qPt4S",
  "key24": "5kMb5wV9JPmRCm8UhWFsyh3mw1FbvN3qF1NcEhQ4jpZ2vT1hsF5w9L66Q6L9a51LroDKuyQnYiCevsPJnEvC4MMV",
  "key25": "sVuYhXV7Zsdt925baKyLTcxzbHUBhBHTJ4UZoW5XzXSGCGp7AC64JRiWfVSY7dNT9e97pcoDooxFK5wL4eta1RD",
  "key26": "5fZvc2Sydv99sFei7F1ynfPmLS6ZxhNyHMpzBUga9jf42dD4MAxkEtL667cFRNbNWpYpuonw9NEU4KvQmktFnj5z",
  "key27": "37WuRNWyhUF6BinpxYTfWpRktLP44xP1tQJYMoYjg4BwhVo7uiktRFEzRKFpEmHVGL1bm5o5jQuxgee5CeaMsaQ7",
  "key28": "4smhTXFGFL4CerL5y9a68jm1pYWgu7aZx4sV6xztR6wYZSFLxiD7QBZq1wFXFkUY4UszHAQKyo8KhYqmBp8imvbV",
  "key29": "446kSD7RSBV3qnFwfr641u4uLdNNsT8A1EYTG8McH14XptYNKJtrMNH6BMkSpPN4tGdtn4iKWndemnQPGP8S7kFn",
  "key30": "3ZZk14pkDcmFk2tQMwJZeVkk6kSYsVcC6dcEeKZYudUaXwcCoacqeB4iZ9CG3g3q9Q4ELJszxgJ15oRPGNbbKWTN",
  "key31": "4mcVseVk1avkt6HMUC16M3H7UYUnyJvXo8orb617KtnKmh1d9DyqxqhH66qEFnmDXhJgE8zvPEXjMrSZkpifWYxU",
  "key32": "4eTeuaFw4aX49g5dqcjQ1bHUrsaKn6ddWGfJ2RJGgotWCrc93XGkJhx1upsKhYw5yWRf8yX9CxaW12rqYDpFJ8CB",
  "key33": "2xhWrBmQ5e83R2pvHJHZPenLuFzCt74EF1sWXmHFHAPx4Gese1cCXxjUMK9ExTfJyBuR5TLRpSKD2553yc5D7hqX",
  "key34": "5B17donNg19ohETexH2VaDie7deroC1gdopT3UNaNFM7h6fCiWPCawUJUAW3diQqcV13T4WNQgz9MhhAbB9HJ4XB",
  "key35": "5uKm3dn8LxcRfp9pLsLnHFHndVKUHAWXKydeBPrJ6TdRjB4zk7RgbUyKPXHPW2wFafeZpVBCEv5AfmhYH3zMYniY",
  "key36": "2cuCgqsYNBuiMPcubec4QJUKjjyVLWewDwk5PP6Pf2Ca44hwduFoCqv2X3PsibohjmqkFNgEqDNKf9noHYCAhkz",
  "key37": "2YL1pscJVMLXoPTL1HPkQXVcVyqUgoonx5ZHxFrQZ2D8mZeJdinZSUtRGqYvJbYba9HrLTbp24LNP9q7EeKB4U7h",
  "key38": "2D5z3RPnvZdFHLVCiUu7kxusZwfS3YdZzFvapVmBUubfQ3iSgZmZa4xrPRzJvycxBb1QR1dUgJaEfTR8raMLs2fJ"
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
