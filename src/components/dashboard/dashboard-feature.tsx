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
    "5huNpnCJRDyYCeAnnXxK6yrj3z6TxhSBDNMbwq3uEmjhGuyZ37TLRJjgt1TiBggfe8f1cKLc7tJMueymofipheT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvXEHaY8GoD1pSReKTbxBrc3MsqZP244isYzXwVbLfkrt5wnR53Gt8mfkeMjbQWhUvUwmw2pqW1tffFY4w7n884",
  "key1": "9TCKnmNtXPQrC1zUyHM2dU4t9Rod3hohxtPfXgjM4pekRcFehWAn3JajNzH8PhT2tsXjAJ3sHXCAJWpaWYUqCvc",
  "key2": "EDxJhtGwcCtVSXqiHJg2kadkt6nPB74D4mQTVHGZyqno4aDZ4beU1vn5ijYov5chuMy4KgNmkkD1axN58LHUn8X",
  "key3": "5trXo8YyUfmP3ykbWptDybDFzAwxxz8hLNP66WB4dkE7Qg9AuDTPjH78TC9Pe8yiwzF5JcyJYwV8YztUt4F6fbqY",
  "key4": "2rL43vGr2qSShc8QLxmXuuDuvGgdwSnwMd8hsTrmjdFVak4rBLkMaf6FsgCr3QVv87bRG619uSrFRUbaj1djUktU",
  "key5": "2dWH5kJ4KMwfTisYdQWmZbn6utVF8XZrMPvb2xDsgC6cVsMserJydYtVDegcB4C2Ex19KfPXmyKULuLo7R1o14Uo",
  "key6": "BUkKgXW8VDZNAxG3CnzSaYvu3g51kXydPbEZpfR18M2TXoPHv8uzUTzJZKSQrgxGWJidi4DJkXwUMqvmFYpdWXC",
  "key7": "RNtiHTtvWZbnsoEuTovtg9KMPq8mxXsvpxouA3VtWZZBh6Ph7rKrh3ycNG44riaVoZWZJfb9wLxiuf5Fjuub3jJ",
  "key8": "3kWpeBBfhrYe7otCicXor6MDxTmHYGVZwrEGBN6STzWR8nXPxCX5dFgi2j5cRTT7A5HwSxt3bgtoaNR5SDfRmdc1",
  "key9": "2zhzWDqsmyzTjiF8LM8ZAGAd9BV9yb7auTHjg9888gx8ZxFAw1MFVschjdq2gUiru5mmH9zAiHVsShoaqqMGceEA",
  "key10": "Nj55k6ouf9quwbDPHAJTMbA41jWDDcJR6D3VsDjtkqsw2N6QucDU6gw9KFargErmstuJgrfQ3URdRMSEc73qbrj",
  "key11": "4Ga3u62K3QnehjkmcVVYZGXhpcnpYn6HpDBLt3MkpYeV61ergS1k2WREBs7yryVmVDb4MXbZnZh9NYuqHrFo68fX",
  "key12": "3R8dbjLtqqhcm6K5f9gZc8dCnkk8s5MRjRoGQmJvZ1D4GVH1rxoq7zWAQep99Qxe56ST6y8Uknz65M68zcULNFDH",
  "key13": "4UzgvR4RQXz6nUiqWGzngheF34cBrZPxYHtuBxGXUWH7nQNDnTr774VLyGKoee8sqxBgpWr9XjPvdXrNYQY2zWyx",
  "key14": "yomTrNyoxg57VALxB9NXSRMZimvtZySgjBGGWa847w9NRFqpJXLbYoMo26wLNfu1gDX6UZwVgcS6UomtPeM4Adg",
  "key15": "2DtaxVSimFGfwCY3nKu9KsGh1ntDjcQbPZ1j6KYX6L2xivPZdUPG7ycrvgt6dyRxbc9GjkaCwm1X8ZdCvnREdEke",
  "key16": "475QFBRCGpZsPX8uAiwqpSo4LTP3fcyCj5X6jozRmMh2DkzntNbfr4gzJJn5yHp6qGAYpyEmWuMg6XEYDPqmnvpE",
  "key17": "5x8nREBwwun4fS35TDJJMuYckJLnjs6HAzRcUfBfF8UZDN4mhWqopYNkYMTgZU2Qj4BnDYhfPVLBR3NdEKFncEgJ",
  "key18": "gPZaFg3U9uooFgoTXSukXj9Vc5TvkJxbgbPpT3mZfMDnaTy8yKjzj5dMwuP9DkotcubGygq7ECKpmJFhvnheLJz",
  "key19": "5mdgwgH5RTPsMMTfWr3RcSyUhdE1a1xL1xDrLRLbgzm8qhpDR2fv3FK35nKA9umfZeSgK3PNAq1XvvQCL7KWrE9i",
  "key20": "42quUbcxyE8dq1p1nRrpbofGqoBxeMV6hUhpRk4dagPM1j92o4yQiXahQaK1RHUK55jh53x9gpsb7MKtQDcQHUrf",
  "key21": "3tQQ1tG7pVNjQrybizVmLsTTb3fopgwZiLsyAEnRsHtVqd2bo1siWEcqDLkKzirAyoaDMwH186ekieJeqYLcrJDw",
  "key22": "45LsMMDBzwbDQjxDzwVqpZF5WoTXw2iDFwcUBz5SGRd87QMR87FgmL8zmYeBJWfJBZwc3cA6qEZuFxWp9EAi6EAh",
  "key23": "2So77Zh5PNdcSf5fqdAq943Yttci2NpcoUF4ssuPh9foAtL8DkvPRjxsiToMJdU6Eg9fCjh2ZjeZ6txwttGTN5P8",
  "key24": "4mKGbxjHSCrPkKwA8YNG3B4rtQhzewizjE48VF1X6e9akHafrq35g7P5B9tmeEMpHHCxq9kLrqoJMRvJzzMMqVAe",
  "key25": "DrUQT2zCi9FX5bwJ2cDYaihnHTzudmSjH9Pb6Dc9Qa6Rch7qFQjQJrfLcVrB2Rhe1tyQrNuBo1QSzygZxGA6gQf",
  "key26": "3Cg1vT2zRZcUqZg8e3ZmvJzyeykoTuCUvBvcTw3nJwG2w55rxCnhQwgL5NKsHWNxBfpQmMnTwoH86cCb2cudeyPc",
  "key27": "4ZB1omZs24gGkS9JRmL8iBRWdgd5bwqvUxgtjPvsPx59Tob3gj1PincQDKNGHMtm49sJT3GsiBgWouv9f5m4f1vd",
  "key28": "vnUZWN76G7wSpy6PupMwUfchemygEXyhhVTyzdpmgqogKuRBii5bAdws9phHPyHe7HGjTw96Yk63mwWVikV4k3u",
  "key29": "3KYm26RpCc1LVjuFzkEyZfWHqcEYsvzB4Fsfw5w4h78pqcbTi14DZ3j3P9G6xTybTNgxPmnKphhujQCE8F3YTUEF",
  "key30": "4pFYKaWGFWRRGzV8JXMFWTzDhZsCsZ8nDtXBQS1CWUU19K8nAMT6G6PDhw8qeH1JQ2xL2pQZgkqZm5QUpYC2F1LX",
  "key31": "3B94oXGzAEvZ9DgCrsZWtQavga9od598RwKCwmvnMEU1msCrJSkjMLk7eMpgRKcMeQC9JVB358uxepPedve4VKD1",
  "key32": "mjBkPgsHatvCQFn88ACexR1BXkqKGTcf1S84hUES8QVzGTQngPR1kZ9wwARxABMdJEPeW516gayX3ifY4g6V3f5",
  "key33": "3GaZqzBp9PssaZtp2aX4bjdK3jBgcbsZNNxbywVbNPUsNNhCpgETN7QuiAC6MBKFQ7W6vfdaBLhK51kkXp2aM1Tt"
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
