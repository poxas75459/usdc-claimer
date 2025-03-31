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
    "1bks2DVjue1eizNiM3qpkSpc644HDD8i9oNW56gevSZRmwo1t7QgLBeD16VCvM5rWX8kwM3k4eFRWrN6TayEijP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJUc5KkPoA6jgV2Lo4SQ4nyzqyumVKFsZPXKSmpY5BKLoLfxTjep6aGAiXsyvRXeLnsqQQmHKouS7ucfxzZmLFE",
  "key1": "4xKaKJxP4HBVovkpQs5SWwHEsAJ7CZvruaM4JYpvmEqN47WRhY2iMnoGLnci3AeeCphRBB13XExiZkBtBFJbwQyu",
  "key2": "2B46b83u7mF3ALV2WahnG4BCqvU2PDWVgPji9VHZL4sRkWsTD33XccB5hzHbeRA3hNqqLgiGZTCRNxnPXtNt4FDz",
  "key3": "5tbZMsVxvjLvUyPYEYA1k9dmc9mJmw7bdfMjnf4YDQ8NS8ajGVKFRhAoUtsXbTTLo3xG3FEiNb4GQuNjqhyveQ9h",
  "key4": "4McbtyKHmyX3szmaWNPD9QQ6GjJSbdHbUtGSDAoL8exnHQ5Yk49AzvZMi4U3i6PKmAughkPW8h72bVLH2s9tYavB",
  "key5": "5a8JX28eJSrmhBpNrwRRS7VeJs9g2jfQavhua5DDXpnxXxB68nu7DDEANK5p2jMHzZZReEdjt9qPaNpTwnCaVGsh",
  "key6": "kLmNgBBgEZFPq6Jqiuvzxkz1yTphCYkQKFGgWTeexBk3XLUT1cQEpQSGZKnqHYHLxRNPtTrYJWwKsgAKByyf3oH",
  "key7": "2aAWDbykJMbEqUTUeHbsEtZ5odtiS3BzWCR4Hj8KXX2Qpw481UVCoMH27GRdt73hTJsoGG2orLuLoXWLSzrqLs1n",
  "key8": "5KtiHPyPQqKK1H16j13PkStdNiahDSBho4X14FDR9Aw2XTvFr3yYpjvqcWffhMEaPAERQGQ6vYPZ9PaZY8eh9jHE",
  "key9": "5pMXfyChms6w1bcdHE599XUqVvJpaGchJHVZBjNgUfgKHuaC8NiJ6jFQF1R1KUroaH4b1yyndCH8KMgNPkA6r69Y",
  "key10": "64zE75iDTPsi5Rw7v2XCvNd78WQQk8YCcgR4i8LMweiYYDPEVxXL7a1nqrvyPGogvtg7vcynEDP2Kv1ndhw39vMc",
  "key11": "5phyrgd5jJ6iH31BC3VcpzYBo8kpE76zbZjxazc2hNVpVA1bce7MYuZTo1ZZDvPszTAFtCiCFzNw6HL6wjSAJdj8",
  "key12": "3LtoHMWq5PSsDyAaDbUbsW3zxtDSzLxTVV3xV797xesAg5TeYzZKjruUYte2nMmUFogYLyrMb6ufnuUHBBdreiGg",
  "key13": "2dArqQzAMFujH3BYafJHn7D8Nnh9vgWdnz61P3VS67iztWvbqznQ7YsGCzqJm2PgNMYvHPGMdQ3y6NY1rdhHpvXw",
  "key14": "QtEEfqJqhRkHrkmGrbpqU1F9y3QhaNsyhs7sa3SnkhQhQXHHwqERDb4aKiqKPCY6wULEHNvApKdMrDsXbjS9opX",
  "key15": "2o69RFw3FhUg4HwWK4c1rueZy5NMAe5ro8QqH6hewSNx8MuujRAqxnAQZ8X8Y1W3UZBAjGvcRbq4fiNMW969Z9pE",
  "key16": "5NpK3yLrmRp6dfBiDf47evPFrnEhophtBH5RaLBFJR7vSUJDGntSYF2cQTje5AEUuJ8F7yByU1jJbH8XNbavAMJ4",
  "key17": "47ECXeftW44Z7CP7FFNeSn545fdDuhJkdiXmGv5ghiRjXBeDm3CxwjupY2yMHnHcUMfezXJrkEL53HPmzsm4xC65",
  "key18": "3fwQwAaomgVbEM2eS2PakuDFU938Ve9KnBiFReBCgYz7h8tYWVtaN7vjFENsExMYQ9gKM47d2r6PgTg5FayghCe7",
  "key19": "5wPPUyen4oQMw7iN4Bg9khdG9Zmef23SLToPoRygMP4pih4Y8w41o8aX5ZAPJpi9TXuhcREA92cyQNZuNoWSqkHs",
  "key20": "2MYqtCtCJH2hqT89XFdt1Xcna9wY2yjNndsXKzMZmVuPz2LySxnBnKM2nXWeDpWcojs1fvPDy49RbvL3orwbZQhV",
  "key21": "d2riEZXw7sCRayMbAXmaRBbxZnEkcQSWWjks5FAZZF5qjV9msqiRHia5CwjYPsmWxK7FfwvjjFceQkWPo6KoW26",
  "key22": "3uKutvuHZ9wRJhPuX6yfJCxFcT3yeMG4Bk7pZM1meAT6ywzk4MGWYWYSnb5Mjg95oMCChqmRFtDWsixqneTWWERA",
  "key23": "5VM6Y6dzH1BAw9kNHs7UzXBbcJL7yrExJHbx2yVi4iCbx5qLgv1nQo843A7HLzUquV4ocZqSMPzwN69GmfJQqohR",
  "key24": "2kwJUuwtQAALEfLHaguxEdzR94eBtUp3WMv3QcKeNcFDgXPWdr3gUGi6mEPJwWGGpvYcYyNaUvUSkJhRXuUEXjfy",
  "key25": "yEKP9mpUKNUbt6VfW7FCmZsbjsAn2AJ9M7jxUCgh5Vu68ZqyEPe2Rrv4z9TnHfWNjPYn5P8pgkwMc6SJA1df7Nk",
  "key26": "zohf5SAVL4jRHxahbfyhUZoMmB9dna5RMVNt6cBQrncVTAKt5v9peY2ERuBGgjmBuvvNSk9D1SZEfcxm5boRAhT",
  "key27": "3ERzvPBHqUktKtoBiGVLerCsSrtdm2A1rxYGZxZMYnjLonnYFKZcdvAurhZid9xRshTTicu5bx5GCgP9J65tgChm",
  "key28": "4uZWprevqS28oW7H3KQ6jd1wvMtC5SzV4zN3bptkN8335hxdkVKHtfTqb64q2goEwQCdXpso5xpZRHDXyjx4LH99",
  "key29": "5vhLjS3tERja2FmymwfMigoqJBtfkRLgVmArHCSxM63nLJsCtYyRD9oPUeumPFrSpm4nGN4ZGwskcSjnp12ARziq",
  "key30": "2iPTRzibXFvTKSH1YbYrgpYFAh65dRf5rYEqkTYYMKsMKYNsgubeZ4BkXYYPQcrC1srNBU9RHyH8HAF7cE8mntox",
  "key31": "xdrRyCoyVYfZC2xCbaxWCXeGJ4Ffc4d2QGcJytQaGspuPLRVVmv2PgS7JAi7tedE6tKWNdGXahcsKbJsWT898yC",
  "key32": "4w1f5EpLnSFdzrPhnxchNiRqtei9PhkD2eynWyYnKiosFoy48qcaU3z88MLeBFB6oGtAxjLBpPKUAoYw2kneaHMC",
  "key33": "5WUUZQGVJ7iij7s7Roq71WYK3W2At4SCbEiEfiC56U11FuFqiJtjVk4BKA3Lu8sroPbXoV7gHdYhhuYsU8EVcDxs",
  "key34": "66FdR2yfDLDjM2SZ6shzuG8Hd2BsjK4Xk28Ho6kKjVfHFp1dDz75N1UdGXRiUvTNQeQtxLdc6tEu14X67ZfDJRsA",
  "key35": "3TYG2BGr3zFWNYWUE8LHA1jvWLEzDv8RyFL7RBwEMxPgqari2tiQUQEBAfQS7jAMNKM1NhhcCRXALBWMxaW5F5Bn",
  "key36": "4EawDrgAZ8eeC5zFGKFbeJRHx9WUKxpXhaQ7R9xAsjLn8rXeTbUwGKuUKcfU7iSAd9XBQzQgZQYVHdeNaoZjnxoZ",
  "key37": "Gq6E5xH9LVUw1TMmvrL46zGtgWLAz3LoHu7nA85n5PtJT1wiENe3wbdT2aAQ5pYoMKtKMFtgZPouF9B1BfqRqgR"
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
