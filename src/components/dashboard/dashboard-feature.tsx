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
    "3v45b2hiRMxAwb84MwjxHnabHaFb6BDqKGHwVpMGwCPJbKQv47mqpsfkrwrJvFLwxySB6587F9e1dhFMKXgRcoRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zHZ3qBhe32Twxb9xQGsYbzoUQzFkoMrPBP7114K1uUxfRfVkEACy2c3wbgE3Fde7QFrVJbHSCX2CEhL6mbiYix",
  "key1": "28eKsJhHDioks3q8vVBeVLi5QYqU1RVPnH5vfrd9yUzZv3HiTAJHraddRdL8SkUWji6PkSjnPygQevD1QXLSN9vN",
  "key2": "gfY9xspvvnfcevsFgsNsyZh5uj9HsHUvTDXpPeXLZLcBcP7ogvoNrfhHB4Jt7RJMM9XjLwag71odLZDSg43NXVa",
  "key3": "V3tMgS61GdteZRTJ86Jb3ThMWAC2wUGn61yL8Xao5rdk3bddrYeZbtUEjt1a3w8wXTbAoy886cRVBfoa5axtQDS",
  "key4": "5Jf6stwCGXBha6ZEsSpHtBKAFqj6SJHka9ycZRdVEGQp53syPMr6Bk9eZLGZKucnj19mUa55v9QQetyTMyFMLYcm",
  "key5": "36f1qZ8gCgdmKxbvcVZkH2rhC5H9azPWzXjH2GcmzAmYBVcu9JaLirmHDJSjXgU6uMM4BaukYu6PGa3LKT8n1rE5",
  "key6": "5XHmeHVyrnDbFxuJMqiHB2yZ9juHcWSBy25XNL7i9ZivMQxoabrMGQS8TGMMUcens2TgZJPFD7654jio3MJ999VG",
  "key7": "LbGMXiAX6Z4si2RKVpryby4LmXEAMc5h79c6REyJEA7Hp1P1QpaGvoWujKUa8tH4ow5gUGr64uSBAQtXmSTEE5k",
  "key8": "4GKwkHnmGasV6SXZxAu5CwyTYvqmj3qDrcbW4dC5LLbs1E2VN2THoQTcAfPvzgtissNK5ydqNreGjjqWYqnGQHxa",
  "key9": "5t6M6xN1f557vLJ4PtbgDAknK41CbSwQAfcq1kF4grp6Kw5AcfMjonBJmtUByat15TXWWCkZiE4Pi6NhGpQSFXjr",
  "key10": "4y1432fvNKeyRGGCVG7dNo99697ZRdpRgh3wQfmxo9ZZFZAHCp3MaE3rg4DZBZBrUocAZuYEBWdRbFzWZTiP8FpM",
  "key11": "5g2jLKTqodxox8ArpPdHTVuQdXWfs1A3UhguZ2gjDQrtTAxt4L8ufwU51UMMcB2UeBM1rfmUJo36ZhFCt8HkLsu2",
  "key12": "2TaFimzqUh4NWzjdoetyg4VcMmzbKMHnnERpqYsDXr9LwGq4q69if6nLvTdVnbZ9rhVrhhzTBfUdcK27gjnJqstz",
  "key13": "5YynKEnmoPX9Tv43ZWHBiiufExzpHapHG8CngZH827B7e7AniWZXy3HaZ4WfKQQakhQfrDJc8qoYhSo9wd3B1z1n",
  "key14": "3vXWRQAn34BJf54MPniepCGJ3svXMBGmPgzTfrjKanXRx6DCYCRfx8dMGhE6onAWy6bkXPpjfvPv4vvjWeZ3bdQS",
  "key15": "32C7C1Dy77tEj9T612ZmTGeEPHW2aSd9kDdiHTCxcYFHVpnMkYEA1cjqgNhk9sCs11jGtip3TRPVTotTzaAfmhKE",
  "key16": "5fXPWwXY1tjasUAChdmtRYZDpiVHddxCRMbFG5xwTFmJRCDXvmfg1kuurzHPRvmDpDAuhV8SwwhWKGUKGTb3XfSC",
  "key17": "o1iYYGZ9j94ybJsu9cTMTJrPumYSkax27aZ3YKHLpYAAQh9CPQcrMHxUgqa3bfkCQLLTaU6KMZsY8S6GjUKMvud",
  "key18": "2mny18nNtf96WnGLrT8rx4jMgibmVtCXMvHp7EXmMKwypK97Jjbaroh8gwgL7ZfmrX3336CmXHqpa3gxDJZtL5sp",
  "key19": "4XyZTYo9Qc1hRWuWKRwdqBD97mrnKiB5APa2LXxk3JUNuE2wLJYkngu3jEUrJo5kg48NvwfUmEfsFd5VBqcdBS3s",
  "key20": "R9qRyQqGKkRG9ydLfWGjLvcqzk8JFAcGAYhDy9AQy1GQQ5mfwNHQAgRNwP8cp5sTYnc7FAeKZLCod3Y5YUUF5yQ",
  "key21": "5yNiDaKrPj7PveiZXPDzidbrUQGaj75Vic9K5PhjUtLP1xRfsiMv37uTtcDfAJVQrZp9B6JNdigjL6iMkL8YGRaZ",
  "key22": "ebMrSCcwDotWEULLcsMfqCMTGLi4oXNxnth6QdaBE7T3vZeoXeiiDhwCE6kFm5NNmCkxjbRiAhPV9W7TwaHXoWH",
  "key23": "Cr6h6enT5Z2bYCAW8kMgAHcpgUDSGLKXquSNAA1jCPY9tcLSM9XX9yD1SbDxXFR8pQoMeqvQ8sieEtJtaXto9KT",
  "key24": "2rZuvbTJJTnQKtXxmLVXwbwuSKH7w1NkaZ87a3Tw98T4fKxxZAzV1DQddAqyEbSyRvQwRkvFHwoSnbtmL95jz44L",
  "key25": "ozqoEjZf5SKMUTx64fNvuEKC1QABCLw4XG4eamCUq4iZ8kTX9udacuTnzD7pSZ8KoEJ64bK6zyZzGh9XbPmtRuy",
  "key26": "3fQ5VatRKEPKCMPghCoZs4kzfvHn7LpvXqd5kkFg4HrABLQ9zUS1LJWtQNkneyTq3yoEsTQYXN72HkNTt6hKSooW",
  "key27": "C7AxZv9kJCQ3BeDwgWuVwRPB7FBYjbZBgvKxjaPZ5Xqrzm6tBNKz1CaRgSSCarFTyF8ZAFK8WmHCzYAwAcz798A",
  "key28": "58YJ7pUTQ7dCTMGDKrhQRu7uYYCV4HhEW6xg3NCHzdQSGtQFLQ2KnVTnAcqz5Wutu7Pua1Dj6kW8eiTsg3Wxc4v",
  "key29": "4x6AhC3dUfC9Dn9cuRvF8yjWs56jF4oL6uMqz7DXtRggXizBR3aGjoTDtxYs8wKxb66o3ySbXUjMQQ6NDX3Mvv3z",
  "key30": "5xHM9VuW5iDaVn8FZfpzdmSzp1cKb3j36ex2tykGHX1CSphRNbePMfTNJJSzrQifGHHZsUPP8CqQMecBKGNjRUfZ",
  "key31": "5Ji1g5xhYeDP8oPJb5Uiq9gMFCE1HRxgZsvCJTisL2utSvZDt8njVuVoVEcJqKPoStDCvMW9Es5rEwnpVJUEPjDj",
  "key32": "3vqAiehVKWwV13LQU1WCtJiTJgzUVGygocma1w66i5hne1soXnA7GtLaPa8FC5X5D4fx329wi4ikYNpGZHHCabxo",
  "key33": "4sBAhywMJ6Gun97NKgCuxtJvtBzzTezWkxbVa3ALu5ZzV1GvweGCwWM7nvDQwttXKFi4SgAmqfrkHmVJba7fV42i",
  "key34": "4coktMoeN2MgtBkymCpLacDJ1Vp3H27V9K5cgfnu8A5TSX3kfWei2Eus2tB3gv5JXVTMPomA251R6itLTDaYCzyF",
  "key35": "3XTdNUSCPuFMu2fKTDS11hyoqD5aASUVqjEaZDV9DtT7iQFHtTiYPix8PkmVvmF6ZsYyjx3yYMZJudbmfmt2X4f8",
  "key36": "USxi4nUcuqw4vyKNnBySHh4HQPy9xbXGk2drVC11ZXfxybxt6G8fiqhS4BrwsGnr2irw1EAhyEdT9Njf1ukWwvA"
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
