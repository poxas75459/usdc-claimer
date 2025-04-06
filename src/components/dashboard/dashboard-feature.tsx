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
    "2GCjLxUgAgwkwW1pp99viUbHkn71a1rLyYihfmnptxizxtyvVkxbDrZVRxdDwDPXGJjYG412NoDHRDNsdYSPPbdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQA7bPRYgrG1G1kZ9rQ7dqwgDFXgBgNvCm4m16GPv5soyRCxg1nHFPnN3c2Yp5hgPY59VF2zcXfG64suewAndeX",
  "key1": "C4xu5VYWu5a6WiTw1UNbZm8Jjb8Uy91AFWvkwjiXNdn8RgYp56nzjJPLWqzN9eiLowMBMCq8jrN1VmhCevJB6Qr",
  "key2": "4eywJeNiyMEsYeoW4XMwNTMC9KNWH7FPnxpUJhMEXn7tjPATbQviEXnBC2Ke9nWHVpfyZthD3u2JELgtaLrqWcsf",
  "key3": "5DDeuYeCtunbVPoDYjKRWGmZy8XkdTZfa2GqXv8QEWUVuEWE8G6v8qFQdAQUgm126JLDmtttzoJfvqvRxtNy5F6H",
  "key4": "47ovxnaqK38kj4UqDuQUPNUP8tvrBtgKSiYypSWgEwv4koCqNZMpL1SZR7kepfUsrAit8WUjBuBeW4ecMPGND17j",
  "key5": "WycJyeQBrNZvh4hCdDf1dNMw74177SocmGe7wARRNhES8aydzgnNEFocqkuKMaxLDbFzP1sMs2bc5k5f93Gh4ki",
  "key6": "3fC9RnSZoE3TzWQQ3bh6nxoGBj7HXBBBTXNFp9b12jHbgLnjnXa3er4ccZCchVXchUwzMpMpdu39twi9tSJNzN4b",
  "key7": "2hA9Qh49tWAydM6HXMoTSqAJ3AA1bN8cqfKxNkzte6wB3KMf6JTrqnsnV5Rk5LJMMPm95YMMroRh2CgZDGkeNV9t",
  "key8": "35nNMNSNKTFCuDmCRpUA2ktm7X1YsNmm8DuB8akmqLJZdvUJaUWAk22ZRwrrizMzbD5AAkYeRFygSt1kPtFGZ8Mo",
  "key9": "2SSYE9FYH7AkAsajbaZnVNPubzp9H591JMfg24nXAsEKnV3aku14gfkhP9V8oxXMPMgozsGDLmEGy9edtvwUMqjU",
  "key10": "5kAH1pJYJr6hZ8gsVDTt616J9Bz85KqgZYRTqvPnP4oqg6xR239B2W9nVWuEB5Fu5hgBmDLiTbhT6kC5Ud9CfszZ",
  "key11": "4ju3THKDhheSxnXkMBAkB6dyKGzMebaiP7AaKp26czNTrPPJVdhaHSUEskKeNBQdNJFfUwq4ApxV3FViEgP8APVR",
  "key12": "3QfckqBYR395yqed7tnFqsJV3pELmAtCUWY6TwjLGtmY4L7huopAjA7D37ZbA9LoPfPVPTyWbaLjnK2te5Wn5X1H",
  "key13": "3r9ETxuY2LWdGAaxQj6gVj19CEJRTGjso4vwivDvkC6KPrvXFNh4KGPNBuz5YpLaCkUMuN5JwJj3iAagLVKeBCzi",
  "key14": "2KyGtNdt4UBEqPgbDMHmXvxqwfSMMuN6qbRYtNtbXqUJ9Z1wCHbpVbSwzrUeGxEbTMtkxti1e8Ln3QzMz39LQZQm",
  "key15": "5ekZA1ekXL7qoUTwCEC6qr1Lj7L7HMG7hfrMKXTcmg6khVWp123T3nexRs7a37VDZjheV5G5ZjDCchQcTGEpSyCD",
  "key16": "3Hqzh3oihGVZnjvag1dtGEJPossc3CJzRjH5qDaUop2FH5DPrxgLzvRNcRzfXbFMhC8tuJLJ1KbhPDt4uu9S9Hsm",
  "key17": "63nrL8HVwMrjwobYYaziJUy135Pfe7iZxLnA7665PyC39ZNj9jqqzKpHxDi9Y1jSGvG8YveVCHPd86b9mPR5xnx4",
  "key18": "9PHSZyZ8iSnHUEFUBArJkBzePpXQ2xnGrsurt3przY3xS56L1iaq8dhJp89myrdQhduZ1uPNkiLQfVAG7BiaafU",
  "key19": "2vQrrB7z1TydLskJacXNUer77UreBUemwVvGQatnTz4S5J96E3KKbcL354jR9Umyc1Fhjik6jFh4pd8zdLwvtjro",
  "key20": "37DRA7L6E48EVRbWT3ynUt71mjB7tUDcHJdkBqYevrnYVWqu1BaNq3qGXwAzqCqEX6muhVKzbUwRbeGAtVrTExdg",
  "key21": "sorCGkkt462wE5ya5RV2wC1iRW7oaQniz4cEcNHdiVo97LNozTAxNQc3bkzBbbPgBVWETBRwBuLa5YcEt7xVG47",
  "key22": "3VXFNsA1HjDdSZwSdkhFdc9do1RcpQLLy1SC8oK68cYcQU8351rVu39N3cr8fMd5getT9us8exKjTE8B8ErL9Jkm",
  "key23": "5ho1Sont9Jgu4ZDtHKMYtsEWk3gBJYwqjXk5fN3Hov4ffbECdyKvNoevyVdkpYZwbAKoWAQ43J1aP5F91ZAbN4cc",
  "key24": "EB1TfrUwXote2JE9QydLppcKCm5axhLwdEp8FDKU3DhUequ966epmW1eFMopbUdWPKnLQu8vqA6MCqGRwZdhEbM",
  "key25": "388MzrgrLSaR6VhKTVYfMm4NfJuC4pcD1UWuLZx3n1DFpfBknJ2FKYYLnN7vMY6KXMQpMvmhHWAod5KJj3QNTcsb",
  "key26": "2gGzYmEX3G83vcWofgEbh8mDcTyquQUMv4gQgyZX7hHA5q78D1xiVsGPvd5UcxZmqPrQKuXzVRUsT9WmYWQSur47",
  "key27": "btrWrkvhzPbh7s5pYEyhMb848Q75C1LZggeAbanHYS4bdiPyWYpQdXaG5sLmshvUyMoPcFjPSwNx815zvg61Dub",
  "key28": "3xqsAmQpfciU8T8G27Cr6MWahaG4rsUMtVFFQzzi8PvsmdxrAkYmXzvX6QjM6UHX7ubzDmuEZcVjDp3wxKepPk4U",
  "key29": "2o3T2JwVo4X6YxkSornBs4SMMxFL3WxQcYBb4Sm7UGBMAqgqMYubfT3JEAZXxmb4T2PiKtmEAoSKZqod45SSZbQt",
  "key30": "4Up9Edr5gAZVMhfsfxqtYqKCZ4igsALzQMnsts8mEGSPe8rRAG2Pn6V4KkUuz42giAEteuto4iuMkccPBfptuxKz",
  "key31": "1oZGCbpRGLQSSa5cYqfFqTsUUyEtHdMgP5gsWYDysx4xfc4G2cwWKK5NPqmzBkLuCiTxS4BAvsTRpDYG74hWacF",
  "key32": "2PUa9BThmoPVGcsv32RLtPygQ7gEv8ohWVEcz61X8ChaZoPEMt2Mp1Rf9qZyZJYseWgTWPj2ocsuemSHhJcwWSD9",
  "key33": "3U13nxtbPPFHMqSg3ciT4eNBWT5swoLN8rou4q1VmkVfrknbW7mkBGLJrAoe55uNyJsFMnTTdUgSdTdxnvha4TJ4",
  "key34": "4BRmz588ixzjviqHpjQP3vAPgJg7BDzrBQNDT48LDiYVNvEz8fNW82XoCz2sZVtD1dGpesywz3K8nSta6PCoCafW",
  "key35": "6c1y96CTpuZp2FqjWQXYQB11UcMLowa8fDUg3xeBZa8FtG1rJ3NcxgnuB5Ygr91NoGNsAd7aRip2B4XaUUTnFYc",
  "key36": "8Q5WhJyEi1RPvCnkth1NS1cERnZtzoGz2LcHDNpDHwBKwy228wLW8jhnQonqq9WBBVKpF3iLHNABE4bPZxNSBHc",
  "key37": "5higdaGEfrHhxj9qBPTJVCLMAxQwFpibNR3hHwEa178kjmN2V1FYmC6Cs3tdzENLg7V5skiCAZtgcde9CMvPfab",
  "key38": "YZ3mQ7eB9tNiuEjU2TR54ssB35eKefJHX9MSJWk22W8mcwha295cdaWAenXNxNsC13XiVRqupwAPCVNNKPkP61w",
  "key39": "3YLqLQTAuYnLHCChYuGMUPQRLmQcuPmdnDA9JVPLaDFALMA4fHBkhQbRGrPi8jVnfGg7xszbrSbF1CihDraYpmSq"
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
