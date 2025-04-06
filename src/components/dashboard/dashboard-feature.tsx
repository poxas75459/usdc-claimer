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
    "5CCC7LtFdiVKMAnMqKBtFCsorwix2HqXuSQuMXt8ApEEP98bn32P4kNLXDFS3dZuJSzDj79DpjmbX7QNQUm9FLuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZthZmz2sxkkF92xhNsrH4XFiUo5fdLPoxxnuXTLyqQaELVvKSYUPVnoirAJ88p52Zz1yR1f4vQTrWZ8kEmikLCX",
  "key1": "3W9hDjP8mZruM5SAcmgmbJaKXNzcU6ahjUgQQVcS6YxuuWbXSKKabf8Bx1fZs8Dy9TD25Sx48CWAXkTwmti4H3Qt",
  "key2": "2Rik7nEVksEBUmxsv4yMafKLgVvG9EWJEw4YjZNyR4ieYHmrJ4KCg2PsdsHdMXSBXKcN7RXNqkAtFUpQdN96hwsh",
  "key3": "32Ziiq28R3XsnxRgdGxPMYMtV58s5izKV6c8Upn9WCYJEeCbLNMjBT27x6fbmjkt5ek7AnRn3ffzshH1ErTcpGMj",
  "key4": "4CSC9RRGNzYQLHJy6GY2ajj9NFJU3NbMNg8AeXD8dUgFGVhUrHH8TTnet79DmwWHQyYJ6Ug99NJTLZGkV1CLbkA2",
  "key5": "T7cmGJ2JDnUZS8CWbZZiAKMpNuzoY932frGP7iGjQEfZ3ow4nNCsrcv3LfLh2uKUgBmxgFvLy9EovoNE1vmj2su",
  "key6": "4vg21FAGNgsDf5mewRLmE5d5wMMSYyw2cyUeWFKeST7ExGubZcjuHFAzEygKzCjje8QDLJQboQ1hRmHKMdNbMV98",
  "key7": "2wZPyZ8yYoL3EUM4XxKHQGWp2JzEcXnJP5eut9nAa3UEAcqEEW8uVemj2xSWD7uhy2mGyxXz1eG6LqR8h6kSnMR1",
  "key8": "2wDEDmR1tTkQir7UN68X9DruZk3mu5rdhUqt5NRw3HSS3aSZbFf1STxuijDWFF8AYeAX5hV2uRRiZRHstrYoUJqv",
  "key9": "AiBYUopVkGK3vjFfJ7kQU9D6rh5wXQgeLndp5URCtCuB6ZFFcgemJyyYQ3oRxZtbJf6FFUVtTTrfEVCENLoV8j1",
  "key10": "5ugkERzwxsdAjdyXqaVLdSc9GEvxcqBsDfBm1c6LQXpnGjfRjv42JQcWNoKc9iEJTciSZSgvfwWyoaXiadCibAjb",
  "key11": "5m4EQA3bBwW6tZcUhZrTh2nWth3XFx1fbohBJUABCCKSJKDNxMw9gudU14nNZf59spQMYAuiyFTkdyMXPC7e2PTs",
  "key12": "5ecvYAAzyZRBed7rzGYXJGGj6Kt5bhMQqy2xMYXsuDsZkGF5oL3is8zrnhgcvwdyZcSUZ9sebtPrki51Nf3jHFpa",
  "key13": "63KWcdygeXyJor91ueQfuKCc7d8mim272us2NGQsr7eZ86G1PLJ54cqoLVc97kBMTmWP5kBrp8GYgd8kJscTQrio",
  "key14": "43nkNTBRgYt9KCNdhcFTDZrNS3gfL7Vo75gN4uahLbmwxc7aDAvHwrmYu7SdjDadrCuEQ8YFpsfuUT41ZR4xyA2o",
  "key15": "8dFGbVA5js1K1rpqQ4gnEsyJxrJAu3JxrBDXqJG7jZ159Ta6LNRYTTFJ2d8Sr7i2haKudiuN41dNz98Nur37Unn",
  "key16": "2zLXyzFqCJWEbxJnoVrfc8fiQjXrJtLnTtcHLYSrmkKd4Ajih1nqXftw8ApGvAew4CEjGv2EiQC3SCDyptPKQGw7",
  "key17": "67FaxPYisx7QywdU7NksKKVACPWKVa76tHyxZz1E7SNhDcHcUsnAmPSo6PbgLt4hrr9Mvvex8Nde6wM1HjZ6eFga",
  "key18": "4nnSRiXESUx1pg88qyytdcJearWAU4iwJ5iJ8gZPBCeb7pGJtsj3RiGrsPCdC9eNUpD7AeKLkWCr7UqWySD9LNXC",
  "key19": "2e7XE97mBRUTntHQQ5cHEDBUcPFTdQn423Vfz5URYfbMPV2Ns4Ch9ASBSo7SH3jmMAX7awMgrvem7DESZNQy8vBQ",
  "key20": "3ghbvqVS6DBkaPWJkiuhaJn885v4jHQgcaZ5jJxcQ9sAEJq7v5GzRm7ZtMXczubez8hW7C8FgXEdAW1NYm4rrr6h",
  "key21": "3UZ1EMxLwDFT2zSSTnahotzJdF929jTV8yRFvNt5aTEMD6zMk4J3aPJSHVgjr8C1EPXKtfo5YYULRVKu1dTDZZAi",
  "key22": "BSA3GZbuNE2k1L6PoyASjpr3z16ABaFto6qyPtLPGuwx2o15bfrzKvUJXu3YCyft3pKjT2CF3DcB77X1TzxDEap",
  "key23": "21hADCp5PVyiYTEGMwWEUQCjvg2gyBvXK9dJGagZitQjNi6M56AoPyDzEMMNv2XiWVpMAaKnCyKvEv5s6ikQ4bjk",
  "key24": "21NNsq1kLCkR37eSHXuUSu2NjPm3rVNBDY9iBAYBRTWexaerAgcWez9oLYYwZifhjhTFctCYsKkgvb7ZweoffWmy",
  "key25": "2MoS17Gju8crpgtwbKuXjvpYB9BkAFyFeu7x7zCq7fiGWheGJyHPeajTpC6wHiBmmzdBSR8ju7QXGyN21TQ2tu8a",
  "key26": "4XBYz3jzkgGSE1iSd6ZcE7VHYNE4f3ygPwoSPjAPMqbeMkod8T5d7bDmxGoyRHrPoUzZVagxkdZCT9J7NxBfwDfC",
  "key27": "37cNEp2qKrtzTEuPd3DEsEx35jj1hDtvrw323up3uLUevkwqkvihuT91VERoi6ToNEku9GkMDEr3v9sQfeghqbUx",
  "key28": "3hDu76nbi7vzCr6gqZHmXXB6kt4vHr4E11LCAhrL1hFmwUCD2S1dthFnZopisEH634gybf7JQbewJoJw76FMgwes",
  "key29": "4N4KH4JHqEKZyRzKPAoQAo12yi3bZTxh6SSXVvksA8dmGMSz72uCz8Yaj2MY2KmEfyvHVuKM48PMP1CHJQc86Bth",
  "key30": "AUQKeqE3zWrnJCFYteDXiY8Uh5LZgJhTKvvfQE1R99UAhrETixuL6U9FBgWy2BM3dnnBkMgtqThcDnbwin3TxCe"
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
