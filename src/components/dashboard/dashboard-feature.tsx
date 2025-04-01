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
    "2ma2KDFKRaU1fJjVzTdkEzWGLYHahBP6zE8FCBfHSPrLsyXGkQ87daUZkBnEsCjBgdSKXpYudzk75cQRu78vLXWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPERgXRzu5taY4otaNU2GKKfZyBgR2wqBavbRTiNaLJdZdBnXGNFfg7gHrUBP1pz4VcPDA35fDmaDuuSwDyxyEN",
  "key1": "4AFisXpRHYdnMxALStjG9bBEc9npFTJXrsTShdYVT85zg4KRPKXPPnkHCZ95gqHWdrwKJJbMyZR6JXrCGvmTUDH3",
  "key2": "4e9wadQkNro6M2orhEjDDmT6SMeDBJUSUrspa5tvmUCM2obbRYcgLYAabrA9BxUzfH5Ssbi5aDyCWHzkvhUKxXxK",
  "key3": "662MrZctGqY5LaCyQngYkpi78htpqFeUBVKS8pjisbHCb7TmNJUBZ4zJsmdgnKHUi1giH3bWbBuvKqsRRA8A2pjq",
  "key4": "3wgGjzfVCmFXmkoJJkres1N3gkmjHxhbCwtTz3JCKb81zBJE96hLMdxxqo6uE1MbU3stxab4n88e8bpmhmMp2BXW",
  "key5": "5C9fLt4kSN6S3RRNKQ43EPqmgAgnorqoMFs982n3VCot1CSrdZe6EzQhXBEU6jz32UXUJQubHCpGkcsDZ9yd9bj1",
  "key6": "22SQ6FXRfssYXoHj1LnXVGZrCiTRygEwRHrm5SYdccM84Ad5tajJAi5WxFaXkdD311Q6kYQ6Z9VpkHeude7e8HNa",
  "key7": "3EvJttQh9znDVPb1tYckyoYt9JTbbVuJFJ2yPyugW2SwPiHmuTFG8rV4pon3CpokzBSAAbbDgwix7MNx4eu8xtVT",
  "key8": "25VTLYX2NRFLfKGqyRqD2J3V3W2UNWKoCFCJ1c9jAZk2m3FW7Bxzsg5BpebWscu9VMErs3b71Hr8yaQWoNTd6UJc",
  "key9": "gDBgg8bQekmN9JBDbpT4ybCA3SgYoASKU7hZFTpAN4sETvNVHqfNbYxeoiFx9D5gC4Tnk3by62ZKBEeAvBjVt79",
  "key10": "532rtWLt8xEnXHdca8UFMKxiDFTEqdgYdnT1tk84KSRZ6usU4MfjD2D4EKe6aSr7anjousRbiorhQFbWyHu2wz6",
  "key11": "2eWqX8RZtf8wRyje4Rdb8UCBXi9n8AUuUBCD5AuE3HEpf9s6qPbMfMB4smPaUZZ6j7hnVbpLFTLCvAsWWn1FPm9U",
  "key12": "3byqfKvSAUYR6BkAboHy8sVRQHnKzwSwp8X62dVzySHbRCoXJZfTNs4qop37daLvHNvwZS7cvxFAiXHNy6UTZ4Pb",
  "key13": "5aGgGF4mhKh4gJydjqnvq9YkpxuqmFdaT5C54pbqpxhNW3f8W8KaP7drBv9RZsmfuGr8B2eVbUURWLhWAnkqFhL3",
  "key14": "38LkmFb4gacx2pxKBNg9825Nqq19d7z6YfPkgJxMBXkMo7LdpPnBvx31kw6ocywkNfAvgtrCdh2QmtRUe92AERpT",
  "key15": "5ZoH19CT3BZpUoAF6MYt3K1jBrQ5YpTS67xVw8GN5rSj8iCfTRdRh3n6ZPeZQjxGeEDYbP91eEuB3ifZddvMGgha",
  "key16": "4EoBdwrxdsSYe5MTGsJrv7NLAzW7CvVpRcZ9RgGFgaUPT4pqr4PXcPJVw3EhB541tx1SHV6TvKPcJTCxZzqHQHaG",
  "key17": "5oC7vHxfEcu4YEphYkTCMkyM5swXtY1mLkGac6P8EHX675cXtELxq5d6jpBpehnLKzpiTMWCGb7xEjAPkq59A2xS",
  "key18": "9efb94TeG5SUdE8F4wjwySnNGLKxtdPvvPvbSwytmBdi1e2at8wohwWPZpcvnZ4WJVkQcHZ8k5Fes5Jf8qE8Gaa",
  "key19": "2Rj28ZtmgK46ZQyWwLRAWDCktheknLZj548krRK5V9xgQcat2dE3TXzinqKUWPprpSFog33DEtzUuNs6N6HCQ32g",
  "key20": "4dVvk6aA1dhk91Y9HXLeD1Pu3DVmsBtFj5FaBbWkCFt92LKejxhn6Lnq36iunWTS4t7MBSFaKvy78ECmSDsBv4i4",
  "key21": "47vrrtzDHXP2PGX3s8K6JDhNZytFZoXmXLz3ZiskTZCi2ix6xTcAwRTcxJTLSk3jWX89P4n4tC5ck41stRDcN9T5",
  "key22": "3tf9tM921iz9DG42a8D5z6XV47QwfAWBfF1dLokuqR289TZm5xBBt1KjEzFfCz7NAzvTQLWKLCKe5d4aAahp2ZTS",
  "key23": "2nGqVi7WfTZKHrFyGF84FYtnvVK1xWR2x74ZofpK8NdhEfM7ruwV9TPeYgjiUyNKA1NzyZam1RXtRB7prRMabpK6",
  "key24": "4H87Hae8Kmkj6DnS1AZWUBNRn46M2AehcCoHUC6sArh2LpvEszap1kVBXMpXAUFZeFvywi86Wj9KHGqGBgg8Z3zE",
  "key25": "5jLob54YPPhXgnkcvkhMGLCH15iwMjFosoG86E3UpKTwU3kpoeGsNySJFsUCMadesBdotnQ1GP9J3XRqPTdSTx3u",
  "key26": "4zrueV79UD4oM4mmxnxNEVGVG1pu1EHMUPAx4P6nBpFMiAArYwPTk1iaZvGS791SnEhu4AWD2AW21Hs1f4CYyR9b",
  "key27": "5o6nVTie3FqCw1NyLMsF726wWCE697zLwuZgxLfzwdfXfapXP2K6Egzn6bWi1fxZraJDbYKfJRa6UPoodUyVs3pQ",
  "key28": "oZZaLnw8EahD5c2grv58U8qhNqcKnXki9sfuoE4KgkfFV1fuuC2xkXaLnUEAeTS2rBQ4sJxu1P3xhrBMcbb5mqF",
  "key29": "3yQuYCFkzqjy6ciPUsu4TRav15zukVoyAqj1Jht9Mr4G2tJHj5QM4m6N3zbsAYgFCc8v7YcWgteGRRLw2UFuBNj9",
  "key30": "5WRUhwoVo4bjDD49edXd7z4aHrNUFKQ9qAF1S36UmAcG2aXmHjCsMGv8rE6bS4tQYfwbwCG7PX4r3WQPRtiVN4MC",
  "key31": "4A3J8MfJme5FmLcaDtcRBUmuS1UBGJfBDbg5cyK7GznumQuTcQx3bda61cQRgfUFSoMz5npK2Voc23DGzryvCabY",
  "key32": "3gQnve9xx8QbAyQcsJiyZzDtrqUXCcfKwC86JB3iKGq6zyAFqbyQe8BpoZrbBUjQFZkVp9cLaK2rY3bR5tkiXkf3"
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
