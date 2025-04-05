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
    "34GjQfH8e4xAtjCThhxYdwkUXrUZ26PrjpTRTMz2aEbYjH4SfPgQEJhQjm51PfbYPfopnu9q7tqgrqBTcXPZRMKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9irKVRgvSUXDaQDqLc8UGdTxjsCC2Mr9QBVHcgrd68woxFSWW3wZANVR7WYY5yv316ftqfS7Rm6WfeDSvZPvd1F",
  "key1": "4FUj7Mk5qadeY1kmGz8hCMmj1EPEfoghJZU5mzNNyFvPoZdnRR8WNP8Dz89SNCPDvgUcdyUD5Ve6MabsYbssgS2K",
  "key2": "TNW6fkC1juF2UnJMBGgDiK8oNwcUSxjccwEqTLcGAtug62s4dLDqLp6SLJkY53WL8RC3SfmMGzz7wnM66gc6XUa",
  "key3": "2jxjAaaoBASvt7MzFygH4ydTHLWPXUPZM6vr2k3gu8aaonMomdSK5FL16fLahhYBVQHeKk7qo4v7k6Z1U3Nm3iew",
  "key4": "TrUdmRE8EvNZHEZ7Q2nScZdZAvVwoQ2ybwKchVRr9DFfdocyssn8dQcT7A5JPDjChDk7oZWxf3ty3GjACNBpxUP",
  "key5": "5Mx52kTYgUXHCqTnvDdjgy8TKVFoAj9bCnEEcsjfTEqZSX4A8riHUcnuAzTquChmH9R6Kx1sptJAB83csiowUo7Q",
  "key6": "5r7SrEvBQ6w3ZZtXD5FokG2LRYu5Ffy6TBvnsxbvzxETXAvg2FHCYr9FWcJsMSFcyzXBjWpdZAiijqh8AKGjnB1z",
  "key7": "3LwXUAoUn4w13b9AKvL9dCoqenk7t5UVirmqKoW9bDoPDYzeKRoP1cQ8mrwz3STxzxYUakLPCDpBN1e3cQiYhHt7",
  "key8": "4ZULmywYdMwrgEVXF1bu9ohVxTxxFXXPgJ19BF7XmqpVQs58X5tADLA8pgh32geyHWH3Ld7KkZhEEG1ATNGRpkyA",
  "key9": "3qABXrHnKzSFcQ2PqVgo1MjD9X7H1YTJt3XZ8AXFDFpQ7dxe4fBHbE6aJxvXCqursoe2eesztu4rmwT2Nsk2sxvy",
  "key10": "3Tbm35Ah4WuQNCtfs5qtMs3zsnqQxKUWZNB7Sy3TPRgrRmf95QGZP4BFPbsmmWvnPapUmQB7yz7bkp7iguYWhEMB",
  "key11": "238h7xP5FygbcM6sdMh9ZAZjND4WjsuEmpK2c1yqs9teqidpUUwU9xH6zJySCqNAKyp2EYvG8mmGYdZFnoFwBug2",
  "key12": "3q77rh5Zo2FkD4YJVrU5NPhTXB4hv395qbKHR3cDAZwRZd2t5AGDLmBHE28iHdmZKHgdUiC5fp4RPyQWsJjkkyks",
  "key13": "5UxKjRx8MZTemCFBjzwH1Z4WWc1RkBwxrZeu8VNDvryr3ZTk7UPYwF8KeuCApwtb6nFcXKgop9U8DfJHBDap3qEQ",
  "key14": "qqSdYihYSnD9EvocL2PFwWgUj6H3AT8NhZktkYo5CZpqxetdsoB3ME1XbQHscHUYu7Tub3NHoFvvsuwYV1eD7RU",
  "key15": "5nhJVUzERwqZVmPVveTSRpZnFrz4fTYkcD8JRcuys7iAWMxuaQE9SUJJf2Hio65MtCFnrkdPLT6igEc8tLG6qS7c",
  "key16": "2uJ6pnsVzen8qBZpTbqxwwey5sUiAZfxCReBALdH3UumjW4m8zouQuVLWr4sDpRfGxB8Te3nbWMU4mHVziFkCtFt",
  "key17": "3vVdgJknw7Mucj1eg39Ei1N1DXQUP3VrQuf1ugsdpKPfNQrUf8YM6VrHjFjRypcr3hQ231LgT7VSaf19Drv6xozL",
  "key18": "3wLZVEhQXWferZggCPRCv3Nmx717mVwz42GByMVvcUvMH1ArQwTZWTuPNiLVjAAhAhhB3Tqy2F45FjzcNJtKhkan",
  "key19": "42L6QNqFAEtA7drdoDArGEyXiXS5PnBq2AQsFvZ8TSH4wfTcUq3oL3R4WBNJxb83Q2KN3RFiVzzNyZQkrvmar78o",
  "key20": "5H2g5NWc6nqUjtDnxNkgzaZVFAd7tDgtwvsYcELVS93aEPR6aR3dHmM5VpMQP2tQoekAjX5kfk43kq7uBnsgjcP",
  "key21": "3UFMSkwcwf1oLToMUTt1qZcAox9skGyMQsMx5M2nXzahkXvtW88kuPTjiqUYt1X79HdGEkMTnSbVGnvMVAnd9G7D",
  "key22": "49Jmfuz58M7fxLcHomQtXqxEBVX3RnVBaFZLtPZLQWgopUHtJCx5vfDN95TuXMzaFWVzXTvcBLwxSPs7QHPw77ki",
  "key23": "54AmH2PtvaYpjXtgjh84Kx6h6jVCs6Vi2x51f4LR5jSV4wWJwyYwpDd8J6ZwyVXtxZ4V7MpQjymcAWLdEiF1XcNF",
  "key24": "5uGcWiqQV1hiXrQhsMRTW7AfpFw1tnBpBGcdb1qZNCNPAKDnM8Ym7hv2iqmdPpJSEYsnwEBTsg4sfnzJcKyzP9um",
  "key25": "3mxiKbzb5FxYptS4rQ2maxme6fw6yRRi6DL2YybEoaBHjNmvkCnbXJuNYez5C4PLhKC5UGzJdpFTKSmQrBnvYwL7",
  "key26": "HsUZwCYgHiXW5PhnpQ2SVXAZGc5zMgmtQRAMPkf5VEBBAAWFx1eFp8rmLWfHXZApy6aSqg3mbn8JUnZmkcTaRu1",
  "key27": "vKNC2NrF34erA4kJGaLA4Qm3szCZkXbg5AvJbP6XthZfpNLutji6VpYW3rJwDJWbShWbZBfidvJqB65b5RuARWp",
  "key28": "5uQq7LxmRVuYXG5PwHFeNobHo994GU981MYbQWVarLJfkcJYipUz7GaxmnxGDhRkev4RAqHQEvXJAfBCfzp9GPxH",
  "key29": "5KZrvSHC8XPQSSw2k3GTGXbwqtMkkbshphz7TYpHANfArUW1YMDQnypfWYpfYkQyNLfsvDvzsV3cqoaEcB39jCkV",
  "key30": "4wmkLoCRK5yFUxBAU1zWfzucp8meBthEdFCHTTUPvMhTTjr1Z814a86Zp3Vhkyf3hscoMmHVEHPGgz69MvWPH6wW",
  "key31": "5B5mx8VfayAyBvYnmLXfcEjLGnDSc59BM8gCr4aTAV4iSP29z4bnzji2EKzajNqFngkJfX1ybKX65tZSNBe3iqvU",
  "key32": "3NackszjwxsFBW29DCmqopBKCbJHJYxBzRXnBHxkUCkkCn6Kf6LYqYiuVsuvKc3zj8WVxfH4d64aTToVNzBhzY7n",
  "key33": "TCU9Apktg8GLz2PqkNwCZZZjDuj9q8UK2A8G5JCVwcAQjktbtLsAMLm4rPNWcSAeGQHZ5NkRscgwwSXBXRE5zWm",
  "key34": "36zwmFKXYU1jtdddjoUbRoirz4VW7mtj5ggWuN2KZCnyHuFBjujZLk4KUPdoHyn3SdKnuEV3V77pDKngPUbnrLiL",
  "key35": "4667PnvmDM3ySqhi2wKKYufq8dgjyLg2Grb2QtL6mgYi3Ci7eiUNsBdBWjRVQME26DPuEEySxp4gwMdDm7X2HQXr",
  "key36": "3nVGmWrbkcZCQz1P35REXVnPiU7zSZJva92CqRG1nK6hHi7pgfZRK9dJBuhFhnf2qGYqjr8f4w3Pbw3bgaewGpeC",
  "key37": "6nzUFwnMibrn6dbmvHC8EWABKGSt3YtWjmxctg42XpHKgfhW1kADQAnFBQLsKVmxw9E28AMddar5oMWvoB4rXDn",
  "key38": "4dt7z2sigLPM5F6BGpEEP4juu4SLsGYbRP2dyBkCUYvH5jRc8BMcRj1J61fHXdVARfz6nQmU5DDrES7wUfoCzT51",
  "key39": "3TYLeHcxREKuE4nB4fExQMRscCDcZFmz5CmbYXfhTAgBFKJFpTkB3r38d2BUkQ3vTNZfHSZMVe5MxD7Cpmz7GNp8",
  "key40": "dZDdzvD9vq2kYAc4Hb24Nddjwe24xiP4tPhd84B9p7rRwxCxypAhJ3VVyFMXzQhWEaJyHG6d3sx6eaFPBCd4ikC",
  "key41": "NDakKN1sgQsnhxz5DMfUWm3qs1atwg3Df1hyoBMHZuVrZmYRuTMHHTUatZaPQNzySGcUyzfqUyrQW3BCNS6n5eK",
  "key42": "j6uLiv48VvUyCgBZvbVYo1v3xHHPAA4FU2cnq3FF6xT9LgWnVmtQmYkgAwiZEDsfbqMfwbhsgtH7ZmyJsmEVvQ8",
  "key43": "28bJCx7YfpTNWBGsRz5eyfioYdBnC8356cGQExnr4vRKV9vj7QmRqQpX7oUtHMw1rc6hY8YWN2qcDtEG342wox6K",
  "key44": "3SmecopjrGJtMA2J3CWtSoVe1iN1juPpc63kZ1SjDCGTE69ikDpaKGkJdRcBgrgMPkZoGsrLVHf4PSkNfnZvA6dw"
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
