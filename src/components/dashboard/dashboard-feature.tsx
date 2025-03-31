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
    "3gw7NNhHBbAneVJ5tKCCvnbTAfELEDC3N9PMqt7EN8xjn94toboxdMtr14k7SsAMXZKk7R4LqTNogD8N5dpFCTDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENb2bWV8thASVhmuPGqZtoUCRTetZPiPG3fTRxcYdCEfJcZncmzQURSLfSXbam6F1oQHnBW8Sv7fe8W7sPpjvsL",
  "key1": "H6uaGNzEk7SBpZcEju3kVGsM72nvTeDpMx2rUg9gjrBVEAzdojDxQdj26UoC8veiZu5L2wf9NKajSvpN8n618Zs",
  "key2": "JMvoZJXp8qheKTy3UpNL3Md1LoDBeqSRN42LEaTr8xcZXRgZzii8p8PRrVpcRuBP5MnBUjAGe4aCGZnESMUmXHd",
  "key3": "5jdAFhZfDqowazyHNZTt5NjKyoGfLhpVUrjXKyc4xXpgVUDAkUbfUZ7UqUcLtMUs2GHuqLDmNZSEnhZdDRbYrkKM",
  "key4": "3yEmWL3E4shug1hQrAG1RszSTEsxeEaNEy5zqK1ydHqgf7LzYoENUQtXUy2yZxycNpkL7SYJSZzNjgAqD3uvATTv",
  "key5": "3gQqvrthxxBZULZ9i4wvfuTyrprYDbgcAwJT14BugsUq6k9JKEr4Jn3dGVd5FjJ79hteT3CnDi8UYtPrBugRvReF",
  "key6": "4vtSD3U1o14dErJgnt4QCt5VNBTZDJrZxpu4uX5diNUzwpt1jY6jHNP6jvriURSJDfJMWjR2WQ4QHD6wnwo17wPN",
  "key7": "3jBoN9NyyTaLXTnuAvFjzsJRuUWcwMPnq6kuDHi2Kq5mbjLKLpAQMvaqjxE86tdhLs11JFEcTHU99y4DVgvsN2yJ",
  "key8": "4PAfvJn9hxCDPTKL5NhErJw7Vr66cc3smXkGdNDR79qSag31VThGAWBHC9PgTLdDBXhuYm26qZ8fHxF8msBLmfcQ",
  "key9": "5iKzabwRZCELyaDAtLBtp1bBKZMjkd5uujToneVQ4GxX3YuPirhhTL11FVZ7nCTs52p31krJAzknosnFLNP4TpPS",
  "key10": "4xp6gUvUsJkCJ26venrp1HimQDxS9QStWT7ELsFYGddMFSF7ERgh1ujQEt2Txuky6WA3frEpGCuFbXMiBMVYWxQJ",
  "key11": "4biYKiW2gcFwpSk79DsNY2btVnNmhVZxS2N7EBGPGvhwrg8GTtVfpkS9DewYTMUHqB5kn9F8HoHxdphtRZj29CWB",
  "key12": "3Xx3uETPR3HiBCgJPoy2Z3wK8rqCj7Uzadta2GCuTRvYViq3o3jLTfGQ51Ng7Kp9uHbnq7Bo8wzVcCY6aiPrE4P2",
  "key13": "eTQdn9HURA8krPJz8PqLUfQC41bCLrFeSXAUsQzXUoJzJoteTHKi7UqwRxAsMjkRHXxWaPmZokc22QkXwkYPZBB",
  "key14": "5HVJNUbkytMnR5SCC9UZ3AHtMrVW459beXWkcjzgRjzgr3eLp7JA9phHefXFw2JrKkneJiJ9Y4gTEQYKwuwoYBhU",
  "key15": "n4J45XeskrbWYiMdLfrE8n4KW4um7xxd211JuDHYrCyRjBHSDeS8ceSMuwnEC48i1ZP1EyBCe9aN2nFiSpXcpoW",
  "key16": "4RxctXV6u82zHMyyGZnjbSrygUY7813Xi2k68PY8kvWRFqHcKNeDHhsrQrUVcmssiLsyPNomiSGrQAXjfzBnsfT",
  "key17": "6qjjTkRnTioyugLwP35zjSNbKfS74uikZ11HhaEaimBHZXszQHjQjf7jo9eGfZFsQHTyCqdLYeVKUz3myTv4DiU",
  "key18": "fd1MvTWJUPCwLdTymww97k1MZ6jiD7kEimhBDnA3kscjtXRvUL1dxCjdDEzp4tTjj4ToLL8WYFEw2HBAPYzm3de",
  "key19": "3jFqgNt12PYV953rVo2zMA5J1fy8UPVbT2LUdj1dKgfs4NN9q6ib9tPpJ6asWaQqwHXsHzKd3cW1sQgQB2P2VMc1",
  "key20": "x8J75AiEgYaUhQy35eywSSEyppSJt256aPXKKDksD8j9VtX4c4TVB2nKbQvvio8rgmT4uk1xx6vmdMr36e4MWHz",
  "key21": "2jhqEzi13jJ6Y5bp7JLsQkXUM9ma8qsgwxa8h3HWgDqcBoGooeR819orJFJjp8YBTYSC8g2v4BSfTfiBqiQWYGzv",
  "key22": "4dQrgWyfy25TdT6rKL1pV6irMdNSqViXxHoAEC2JZyzYj96VfMV5eTpDeV1VgMW4WVHUxk2FJ6TE182itR6TPaxg",
  "key23": "4kfg1jHNQKtxxj3WYh4cq15hr4iScgNiw2y3z7jCGSr2WnBGYf97aSbJRMb7KzT7KjKEQ12bJwR2KtsJpkRAsrT6",
  "key24": "mdeoWBcfnDdLxU8kaFf7FqA7Zv7cKAsCD1ao4b81Dasuv5L4M67ipnnXyMq38qA2gS6kQG5X88zd4JrxL7x8hLY",
  "key25": "62qCLkmKsGkQoLgSkpDrUM74PdmTjw3P9LZcFHBemXs9jDbKRCX3C3wNm23TRz9q3zHmqb4jErTHg6UuM3A52Un2",
  "key26": "5yvKETNRXkuc2Y3gzWAHQkY2WqBTsbZQHRbwWNGpuGYnkCgrqT6oWPXKkGjZBJqc81Azdu7uD9zXfNEDg36rcAHi",
  "key27": "2W3VPguTzFdasmBaMP2g56Sp2wndJWfMAotiQAd6mUYDvihD24Rm9zsMMLp6ziQwGPsqFTUJowFDDhJq8MZfEV5e",
  "key28": "53HSAMVHZBpnS5miLy7FhGcasFpkWKK82KqZdWnDKGJZy6wuorq4yPUYQ1aUmxaebV5mWtfWVmzdNYTCK8yAKVWo",
  "key29": "PYJVCPbrHFn1ZEqpBDghce1R1FxFQsUHLfWdaWyxExFh5hHQ1UM6139YnvNoXMC4yu4yDjJQ215GmWRjdEKcxpD",
  "key30": "4yUNh29XxGRjtsYLiuMLkMLbKBvJZdiAEEXcwwmT3riRsmJgogJpe5Lf4AnSdAsqqzEBjZ91X7C113e9o4L5SB8K",
  "key31": "4VgqutL73DYmae5gpCi8CVUHHLTrqn1NqYhERkCbAJSVn33mYCqK7aNy4uJ4j4397SGndgRoZPSWvTzgWoZPiTrb",
  "key32": "2mWUjtZAfxYnqtP4Un6VX6bzHmwzQcpw1uN59WtS1MhSuXEs547z5RZLqPozwC3QsdTUbdYiwFe2Er9V5gXzMzee",
  "key33": "5drcJkbPvBHH3G4Rxu9k5GZ7RDQJokM538X9yCqx9u7VHbtLuoRBQYhki5p7tMDVv9mqmgUd1euFshjsSsv2BwDR",
  "key34": "2NuY3msYejGLNxLfGdJVA6uJnNv5EkviWnXHSGzwS1BsYq1F8QYYhmVFkzTDS7htnrRZA1nfKy4FgBqWYz7iv4ZF",
  "key35": "dAGRLPcFT2j3m2wfhQ3bZQRLAD39cVU8nTsdUXaeTFubAxEHTK1tx3g7RooKNXom3iNAFcFePnyAiQ2yNPc5ctB",
  "key36": "5QCK6ykq8vEcUHrZczQLh1zDhpMfFGgQ71GSafZ7NVgSyWnsWPPB7qVrW3iQLE8fVXxNbPt9ridoxZkgPqimgSfH",
  "key37": "2REdCYHoHDzEFiEXyVMYsCF4ZiTQGycEy8CQriWgER8bjbjVNKxvdKHTZjCVQVwSp8u5KsQUTpp5hPbWRy5qkLmW",
  "key38": "4vgQfFK4MjPHYp6QQwWk4njaZA7xn2L1n4PsJP2GXizaAUHyW4TMo89Npd8EzUuQgARuW6UrG84oc9MLubmeVhDG",
  "key39": "2bVqRFXjbNVee1WtFvi34DK9c5piYi9ipfwCQNnSxTGxBmpUHdgZ1Dj1eWM9qwV5MftZptr3ScXSiABEbaB5WEnc",
  "key40": "2izhcNbk4ithgp9MiiyfET23TC1q71yhSNqQbwgZW6ftwF2ea3JBiCeRaxWxWR5dNbFvJQoniH4ZLHFq2LqArisj",
  "key41": "4fphjRF4khp69YpjGZRpykYFKnRsn4ThNed8ymkaviYsypDhymZzKCXnXFREiK3Bd29iS8rnYYNDNobUAhSRamiZ"
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
