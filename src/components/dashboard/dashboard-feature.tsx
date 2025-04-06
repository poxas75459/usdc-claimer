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
    "fy5AJkRztwpXgdEqv8Qpowf8RZtHCTVWUpAAHist228CEooh8KXmVunnkS78gyA4vWYPUaZHmEHZppXgcP77Qu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTjMaRJYMzGfhZubRaKqL9ZVCBCqgPfJHMZYkYSZ9jL4rbqz5Vw13bVb8zh73bn4Q6SP6Jt4TsNdwpLVXEpvECJ",
  "key1": "61ay3ZJYULa6Kjv2tmdy5NqzQFXRCPhbgraz2XPQKV9SB2hvwoph6u3xBhEEsZZ5SFHp7fpJfatNB4XrSVkCYTaz",
  "key2": "5dZofuPhxrvTBxhit4rsr1jupfVmAydhRho17614yGqxqsXvARuxVw4CrmASAwwZjUApzUDqwxjqUf69jQnhouYy",
  "key3": "5jufaQt1KHcp7hfuffDLdRShs9V5V1cqTDZjwCjKKG5x6oppVCi3azMzskTf3X3LpyQC6fSZC8wzYyCqu7VSUmw8",
  "key4": "4tn6TPCKz8HpFEtUiqdHQEyCcWX9GdctJE5KyTf4jJ2qhE6cUc2qYwFmsuqtB6QzgWteVuXfY4NQgXeLas7XHw3K",
  "key5": "5eQwHdaf4j7wukbuCqFNZJ4JPrV39x7qhu6ffaN6RNavckgkr8Nhn46Lm4op5hBXhHewg54LWe3Su7mDSSPoWkCG",
  "key6": "4CUcWwdiG8Xny16E57csRk7Qck9x5PqGEjZm763fmynNJykM8Mr7wnEVDpW2XHSWB2caGyFTEuHN8jHBCvBpUoCJ",
  "key7": "3GUXvS11V3cL4QxCHeAyforYtYBRBamgYgYvBo1KWjQfCTaAQTPexr6axLv7kEtfmy1ZNHhEscPvjP1JvpK6ke5G",
  "key8": "4Euo45SkNrUY6wduSS6CCWEBTzzUhE5QNUb8ZmMdUUFNzgdi9fUwwWQJU7dNcVYpo4M3dAuzfCnkiCAC4K76FMx2",
  "key9": "4Arj8JdkPg3A9JUp3rZqNwX1PU7tYBKCuzKEx6dp4sayZmR6iPRbkCryWSLkFBBTAbNeeCaNV1puAbnsgeTUjyPj",
  "key10": "PaQNJQUcNv6cYiE6tdjmjNzdzjKEQk8jjb2DVjp8CuERJWUsYzCxiafMKcbhvCXkEMdNiaYxciRw6mt6xzu9dta",
  "key11": "59uP78hD4mZA9UNLWZrC1hXAgL6GFndJa8iKEKCeHJBcBGu8eyKQxZ7jDjmCXWKE8apsLNf5979yV82DLNKAQbsr",
  "key12": "48bWJMwhqfvi7u3XQ5DkgcbjjA4Moqw5SvqA8iyG1PrrvUgydjpL6HdYivsdyMVnKc69zd1bjR5PhnFco4izGeDm",
  "key13": "3VNUqPGkSgvR2ST9mUKSHpHp72cgmptUDesHK7iNtzNvmG7kMNfFw5q4bDkZxESPt6L2WzLU9UhnzgMdJxr32JL2",
  "key14": "3D1GD9qMsZD8M8bSxDRxFhqTxY1Cy5TiruHKDgD52QmKDJtqjhd3p2tWFfCd8tEcr37zwtVb19gGgiW2AWYCzyr4",
  "key15": "TTKiVoFwvb3jCEh4xQWYPhuqj31pmSPec2rQw3HU7i4dtKwZgqnUW9XnVnQjgvD5xqnJMhiJ1D39LoDuRC5WGDL",
  "key16": "2SRXwEH9B2KTpcuAwK8Zr6HZ1Gbbpyt48bDeAqtDoSpPLZ8Ftkr2oP5cV7c5u81v5qrazNndJjVrGZRZKiEPhL2f",
  "key17": "3HSYycXExACTDNF2FQfngRR1zxnN7513b9ac4VDchA8bUhGC4porJbFvvcJUzus6XsvMfHZSGhz4SjZkWfurTMf5",
  "key18": "4wwHenVKgS1NEPTpGsXEeq4Xy3b4ohjEL8JRUssXPyuP98TH1vMhzemGxF5FjNS1ob7PtqfZvneUiq82DXQTFHAX",
  "key19": "4KFL1cQYNNmwBjW1pFuAvCYE5rac865naoc2627F6y1BvYLoevfbGJo66btQxkY2NeMpAszVBZgn2pqirevuHDW6",
  "key20": "52QbmtFqdu63wUQFrctmBSMDgH9rLUSgVSRyxF3JfLVmo27hAkLxXEh6FWkVyE6K3iWAjXVxEXod7RzRzgikH11N",
  "key21": "2bcC4hCcquWrvP61cbdgXStm3ewf1EKyNAUkPMQkeWwoiLqu8tpFprWcicFRkFwpJvgcXfSDbJfn7QRLgF3vbUvF",
  "key22": "2DzGPAChhPdRM3EKMmXTwqHwbwM9pDs8wNiBv1imuWF3yjYeHnF9TrHXvHaXDBeAhQ3feuBWPUYwpa1kNsP2jqA7",
  "key23": "2638z59e4dqZiB4m9faMsHY57R1HGE1CrZ4mBnmYXWwYFwqHT2LhpZJhQZSk5vCDvjqYwq9sXQ8vPHm7HVPsd8zT",
  "key24": "Vhju32suYouyEVARzZEQ6vR9dud5wsofZ7c49EwqavJZYmGWJiBQgzrAoSSuh8623koqPkyMoLsCQ33Ud2MC1ZA",
  "key25": "5NSxbzwiCjyf2cFcNi8AnYqBbETtu3FGQMm5KX8gH7bg9DH2DEwyF7tQdKWxGjGcPFsM63xbuHsSsc5C34mW4RLt",
  "key26": "xDQFfbNVZUqabMw5UynP2z1u9Xn3bXLLYVfzgrDvk9Gq541Bwq1eNcHjhZhSyDiyHEgDArwRnz7V7oSUCtRQt5q",
  "key27": "pchjN9pJeXrijShsCJMDaFw8zk2jmFQP27hC6uqCcaN8BaKoEdoouVsNxFhN445SLkghtGjonQV138e1aErjEnN",
  "key28": "4uShyV3JARMM3tXQNyQVMg2V3MQkdLKzE2AfKQJA5x9YYejeji6FoSdZkK4qMpC2DahTp78oPdFikk8i3y2eqfXb",
  "key29": "3wYgwHmmL92NZJtjWYZdg6LcgdCcgAbHkmk8UzqvmhvYciKwbYU1bjrMngdnb1RZ7gBxADbfV6UA5VABCF3caHSV",
  "key30": "4kVgZFrzYKMn449qYTP1FRKt4V2tanvMd7UbRVvVR2rrHBoVsxfFm41HFxWZDj8To5rNevggPs7W5ozR7qBgaiVA",
  "key31": "2UzPm9tSz9v6SE5zWFFgKnEbbRibUEGG6z7WAK39KDThTsBsL1cxURk8iGNwiCwCPLozqekuGA4ZmgBtXTQ19TNr",
  "key32": "LvvzphNw1N33G4Lz5D8TQy3mKgd1bcanUnoQjnKyoW1YXZj2Gwno24VzvGwezZUP9Vbc445o3SEdwkmMXErGZsk",
  "key33": "4vDrd8D9anHEGm5vmUoUrp4K2j8hPWCtcPvyb63J6x44LEvciUASyQKHeseYtHvzc9wxyKBqjcfKVUgGRep7Rnnb",
  "key34": "2BRspsFjafKsup1wFzq3ujbh6rxrR1nJSxuZXTCX3WpSYTUbW1pAd21UjA8LXxxUM441MwmQTowmrBcqNLYQDPPu",
  "key35": "2EX1j2RTJ5HWaYqmBX2sb97zVVuMz8YAp9rSFYysdiPmQ8X8jWwRrR8fUddMxfyWvqPeBFyzTzfpqWzWXkmDiDgY",
  "key36": "5X8bJq5HZfNCDhaHrFmLwRoBAbgkBvbKLTbo1ergsexpSmssCGZjxZ2dX9CmArn9PNd3Etz4QnuY54GQzd7qsxKj"
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
