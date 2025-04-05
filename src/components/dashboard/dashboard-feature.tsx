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
    "5eWSTbhyrKiGdstBwgkpTonC7Xi9eMeKiEJnyrWfCDRV7rUqNJabw9DYsdtb4CF9CvXxR74s382WZsTCHP8pMUcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "361ps2ttFQBdCQL4wkac7mTGMjwC85sDaAdM8Vnp8GTfEpBoMygPuP5YAkSJoYBjFCNNxprcp3MakKFBNFKSriua",
  "key1": "55y67JBcARgQ6b8uNLMe4nK88Hi6xCCyTG1gkMPzf5MEHMyF5oJP49zjvTY5xvueySBaM6VcAyTNWUiiG9yUfTr9",
  "key2": "XgkzTxWJJ2NW92Swy75TptdCSiS17WaFk78rfzu1PCQGQ25ovGaQMA3pvvAms9UhPJGKGa2kDWZ5rCcNCExypBW",
  "key3": "5btnXBfcDEpCihJEyrRqM4Qx92ae1NBCFNo79Xtk1LAr4dwm5fBwx15P5oHYhMaRW5xvapa2DZfVBEe4YEXvTxFj",
  "key4": "52tU2zrCbrozvncZFc7nGRf6wGmvW3c6tpTjkGj41eyVq8mJWpeXLbEsUyxN3jE2smqmukg6Wc3Y7YR5HUoz6dUn",
  "key5": "24oggbM5wFNmsQqfUtrcN9fiyWRQLmjGvRfv2v28e2bnXfn5iJN46fZrFEGCDcmjbQ22rfEwkispqwfbMuJxtBEr",
  "key6": "43siUYPotUxUeq7ozHeK7c9JfdUEmyB9Tc16AaWxwm4GTV23o8Z5LEGHtXt3ReXnLFKRG6Yc5pHxTL2WBGdfgZNb",
  "key7": "2UFwfpUvUnTMGjEcT1SKcL6VaxzAVDPqP3oaDFR1GntWeJdSaU2UzEdD9L2DhNuyuvHTi7FqMW5M1w6hKGu6jU2i",
  "key8": "3AjA8xvf4LvDezNDq2m79Rw1ewR4A4NxZKbJrScpauzxQ5YpB6KdJdX4m7AGbXLnf9gP4BrRnSraRvFeBrppK8Qh",
  "key9": "3shaUPhr2qzogUvSgz5F2bgJChb3TTpSGVasLUX56fK93Wr3wdJ6JJgzZDDcTgysfGgZHBXsjxSDvQJo4Wt7SM36",
  "key10": "4ZAdRgG3DdNhAmHUQeDcyGcjWHoD1A5RABM7qswPCJjCLb6XhQPWrdq4kH824qxffnVGpChjMmv6v2UAtNYaqq2P",
  "key11": "bfN2zyucBnvWf5kFSqi9HqbcvMefb4tJjqKYfr8QuSGYnQ1kdocU4kLyHv5gRrLgKjicWa529KRjT6H8B3PALU3",
  "key12": "3BwheosPqNyi23Bixk1vYUuGCqTfMbRvgGei45fwFr9eXpEPCQXmGdhMdKyVXgStkWjDgnsgcFrUDo1m4BjvFWN1",
  "key13": "5G182t45wxLGLYyUHPzuDzyrAcW5xDgjGQYJh95k5Q7Ee7PWRZoz8V2SSxwYzUoNEpeJ4Ek4m8zyniQuEEPxt1Bu",
  "key14": "2gbXYoDKYsKC2f4iFQi7oNCqWC5RxRSaEt5aYvyoJ1qg329kEEmfzV5QKr73WLYNMqABDCKaRehstNAhTHZP4EQL",
  "key15": "2A3nxevFeAqRdD4r15ZHyYAQXd53BNRjZhnMbZZFyBmUvnbLVzFBN5wTH7RyoqbgHjHstaEJeAZFvDYVnWMwcGGZ",
  "key16": "3DuQRHo35Q7iuex7GfdhFKSJTEaCd93pe5yRbRfo99v5UjWbJ8JahdrBGBxufH3xjgs656B1Zc5mnvRb4Fee4FxA",
  "key17": "2XJgXq5Nd135hVANcwHgoUCjSSuRxXhov3v9tssvxbK45d8ovNNQGXwnUEFdz5dviaX2DP2JoYmxnJZLEGpFn2VK",
  "key18": "2aPomJ5vx6xh2f1XoeeJN6s6iimvB3b3ceGwVBbDJU4QprF5vUHh9oNmNvsyfgJAwgnBAzz5aPjHaSU42nM5Ygfk",
  "key19": "3Vt4n88AbzTRBdteJ3pFHj2gRwdCkkiEFYwPWwdXuQaCaFEkMjDzv3oBD4YdACSpSiPJHWJ1T9QhzHBHrGMq3RqH",
  "key20": "2ssYK2fDshfJXLCwbvT38M1yEZbA2EFjWfMACs3GVBaVKjuFik4ry1orfEaM2N4s6ZC7Q1DtxZosvTLEw87kG9Ly",
  "key21": "35GF5vpsHyDYWMhfbqCJANsn7Ykn8fEKAF4idAwcnXBL3noL5yHYcR7HmuHZrJi2Lrnk2QxcMhdFtMM2Xfq2Rq1G",
  "key22": "5qMUGm3qBuwxdAWxFerc42wY4UkC66UhEW66zXywCXZyAsYdDYYBzUmjnp4JLC4LzkZ2M4y1EF1k4bpmyfxK67Pj",
  "key23": "2vysvNjQ3pnvbUAQ1iMkAi3XBk3wywwLuWKqyJzmTAkpbHAcUuciDmVWGs45H8isFppEtXE6Fk67q8zX2dAVdcvX",
  "key24": "2rJgAT1C6YKSWTtfHTeDdg1kh1aFkWUuTuPsQaMT3UeNFsXuXQmmypzeJTKTrmuHK8DSEaKB5ASRxm157BTvVFZD",
  "key25": "5qPUgGge7n1z7FxMcfwTytRCKuo2UTGkFjcwCYLArbHmY81eqvG7CNUqGYCcBugDNHa8yMKtyoENLi8bZpUQYirU",
  "key26": "X9cSthr23fR4bS32n9bX1posmqbtBQ7nZdvUjRQ91UVtKoxQLHmQ3uPNkiUD9N6fzDHZoAjX5xcHuoebqWHb3J1",
  "key27": "336sD4hxwAWqsXYipm7YTKMGVgKiiYkj6cnaX7dNzGZ1QLV8dwQqeHYNqByN8gwdfp68iTJP52L7q9b4qTEwwvzB",
  "key28": "23m5txkXNk761Y2gq6uk35WK5cUSwRuZfBpUJKB8p4A4y1oEQttyVVq1diXq9PXQcbT9bwTFubziAk7EtRXcBNQK",
  "key29": "5DK6cxRRqxe9Jq1jMRmoxvKe8noQXwLmsm22utx651k6SXi1RPV9aD1J44PHyYVkWXgPtZRZ6CHvYDFuaZkeu4CX",
  "key30": "sfaSE693RcAD4krNxGdA2JcJtaQttPDrbX6z6msRyE1UXmAktmEx1RsKcNu6bFwD47qBqV7soUkGJdPuoxJYKJ4",
  "key31": "4LJpPhmwoz2Y5dZ7u2NHx5CG5ftxaLokZFL5ycMRnwZRJ21BiEMBWNBdmizozRpVKq8rPdicpu25pgp1CsSbWjwj",
  "key32": "2HDWFjioFku6AmpmpGW3btLgUKf4WKxv3wn7U1gAyicJSqtqEuYysyxN8WDGymL4FpVfs8eZU3pPjpo3QmvDQP9z",
  "key33": "59DRgqyZMytvFDi1a3b1wQGUQfHSgaBQv6CbCcERU3hGZXD2ubxPTiDCxd1XKczJtzgvMxPK8dHqXEQUoSvpbErB"
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
