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
    "2mzvxHUDZCtSUMa674mEngH67HfFkMvs2Ltz4ie7jWiWqyz4vN5QkyXYoEU8b15fUYGjeveSAT3vigZLBiEfxA1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLwrc8nxjRotd4zLFP6Mn5za5LRNGYZA6YGkrpp5JKEiWRN6g5fVXTVyEJg4rNV8H97ea34wor4QK8ovebb7sTj",
  "key1": "4hdam9ubnBqPGQw1GAsX41FXBRXqQA2jy9uwWpjL2fiXc1jo2qkJDNTKkuArQJHNU7xubiDGKyDrRroJmM39U2Mi",
  "key2": "23bwUPAdSeiQXbKKrpNmYtbXAWsXGk79kzAJiAHtwuTyvQqt5TMQryabEnwCkwgxgPExn7m5cPvkUHKK6PczV5aP",
  "key3": "5dUnWnHzs397QpwXsXdq7S4nWxKRHiNsAP532oVJew4B8U6dgBthKzF1aNdWHYgdQJDu9go3t5UBqEk947deZvyN",
  "key4": "4KMCeHyDo81Vdd9qNfmYFm7QoZ1F6bNtHUN99D32LVaQqdjpcF54YqUUGaQmnrXN1f7CLsFRTZ7sFP5DNZntyiw5",
  "key5": "51P6ZmNongcYiyBttykPv25dbRXDi9MXAueUFw19zxBNa6LvqA9qRGFtV3Q6hqhLsmPnmKgTahmCo8PAo7XYNSPi",
  "key6": "5Pg8gDvBcVkZUqU8w48d4MowqdqWeQybY3qH3bsR5EYMZdQqckH5TvGZZ3V9NhXGZay4PdpUDhx7p93tBsJV8kt5",
  "key7": "4j1jtVDjY9by97kZv6YT1BykstZzLxbEcBe1H1Xp6Dh1oZzTcGQbjbNc78qKcSDSxEqtpTypVtCVtgq1EnDn1M14",
  "key8": "4JqMjSigEf8g8Wk9H1aKD15jHCbQ76eAPMdK5m5VTfDcANGm43845aQCt2V9YYXRMvhwFzoTetseghVG9hhQYiJH",
  "key9": "3rayu82K1ba1Uqv6rpQJANop31PsL7tMhJ8z8nZHSotcQLsDQRsGbpbjQyS9Rw7PGEfVnEvoTGn9Huv73hJT82wk",
  "key10": "4xYFGKf9kwf9R6Yx6eWggodEfSQjPVUGPSYo1MtenaP1cU28u24n672msSfnCfH6eMk2SM6UxMSQzXJ1wzLVx1VJ",
  "key11": "GqMRvrfRQtQs8wcPELq8XfTAaijiAN9CCTTCTtMdx1GVeKWQ1iNHg5DKBjm5P6T1yHgcu4nKu7AwQjatqmvpZ87",
  "key12": "4ZGBA497qnuEKaW38sVz2kVfrmDzeuYT8aa3XqoeehoBQfcFxncAkdTXUuUG7gYeLkDYTyMbpCyqvbQ5o1GkqwwQ",
  "key13": "5V9srgbPRq1wHMKYA2kaDCDfD6quu8pQfGDmZb1BbkJzCz4herbWkYHv7rYH5zBn3q6VcmTF6f5c5kW8nDtuiAN6",
  "key14": "5d8UW8Q7oGFEoj7YJRrDYBY1iPCwxR7QWNziVXHwi8bZBK7fmXuXtKmBFL5Y5VmxUALCBC3X6Z7KfS4CuKe8RHSy",
  "key15": "2z2LTDk3kDqdvszxn3Sa1TRgX7QpWEMgEU6hQXAkyXtfqJzSTsYSkRhJFPaaucKBVx8Bxcs4vB8rPEPJWVZ1aNcu",
  "key16": "3dc4a9tFCKmeQgnfUg1XtgaVmBVr9H5yKZGpTdZtgcgxxS89eKwdFG5JCE2aktDHU2K5VQ4XuMdtbkdTAhnEPzps",
  "key17": "2h1ZJfrbcmGqQSWSRkiCCzQ3bXkZRkTZt1vbHYqoKKjkY45Dk9Zk1WZQuzC96pZP5ApX4b8c3gdckYGdbaE2e5dL",
  "key18": "2Fo3LwGXDk18NyppNZgELyKcGivoEohxwGQxvRaSUtDiShcnRHw6AGPpgFRqGBAYPLnkUfdnCN4Wrbyo8Jrjfde",
  "key19": "2zNfw4v5RFYfVSyZ2e97WXnGfeEcoG1JwENt8TsNvT8yJDvZ3GTUJBSzqprLdBzDGiKWDsazRQfHtZBiEPDyqfYG",
  "key20": "5LQ5zLb7dt9Q8W3mtLuRB9hPWu9WgppNhSr3934H283cYyKWaX4hLzKXewKmTrjn77TtKbCJB2ox5gshQgKBniGP",
  "key21": "51tnsbQyZpXcFkJL79wmbapxqFq17cKMqnQ1p7YFsckzkQc39orUCZsgRQXmG5SYgco6FuEmQLfHz6c6r2msJzZA",
  "key22": "53MLzZ1Wynea12akLCs8NfeUhZMU5fexYtuhYModHsHqu5waWS6j41QEQ3xbs1UraVoockRpQrZGfe7xGqFTJ5qr",
  "key23": "4cnXVsJNk3VSsWgSckJWRt8hJ7EjN2mHREPz4j2zsELwzGAWx1moYg4cqrJ2zKGHqs7zSNM6qMn7t3UPvFG46o7T",
  "key24": "T7sbWi8Kwo1oFUuxJVuKyXwovdLy9B18XuFSGNoc5EB2r9DaxKRAqW5Xu9KkDrTByEP1A8wTv2JXLJv7NUHtt7V",
  "key25": "fN9nHRrGAogNb4pqs9y9wnvUbJNPwK6VhGEnoRy4P25Jsk82nMEMnWMnEV81FGTSWYXt8aYMPkKd9Zg7n1mBQQR",
  "key26": "z3CN5agTfenyh5WxuWAanjAznBdH6e3ChCUSSELqt12bWG5ERKkjqfc4HGKQpzWhHcpZXoTs4Fq1TZDmeWytLtB",
  "key27": "4LLKypnahM94a7C14Kj74Dg9F7WTwtkTUmxrKK3rUDnKoT6VQC3mCrZFnj573BeU25dYE2eRt7nVBs1f2tL8bAx4",
  "key28": "M4JpkRn7CFt5rzkRs4kE2RuvFUgqxgmSEWzgfZpKv5sFAbWrwdmuHJWpJzZgHaSpphyvs7WYvQrYqLFuMCvf8H1",
  "key29": "4NcDXsjBtUys5Z5eheUqJ6qiTvHw2xG5kdDAuWd16iY1UH8t6bLNA5jK1Cfyq9SyTzjZxsUf8fZfwtm9GtcTNAZg",
  "key30": "4ZTDVCSqEoq9jeH7wVLUnh9iLhUra7TmWrGWGDzexcGXAN35mX4hNUFLvnJSMZa51Y7Qzs7NEVDFzYcGwjaF4iNd",
  "key31": "fh871EjUbND56vf2wxxi2AfZmPEoZ7km8AHpHWxKKNLpCApU5HoTJ5uVwcSBTsvFJon3BbAXKN6YwYq1NfqBa6t",
  "key32": "5Az44XWjE19354Hm6QjbwL67m2qWTCbDZtb7SV9qCznQq9fbGNW4sKYf2NSiUVrrvsWgcMyY55ygxsCgYJQFsrv7",
  "key33": "DbtRm3MtX4feUkBFmyCukFJtmEkE8LCS5JVvDzZABWGbKdLB3jqzKWVA2Aa4t2iH7Fxa5WyxKWWKefwtC5rDudW"
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
