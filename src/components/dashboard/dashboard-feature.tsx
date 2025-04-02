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
    "4uJ2fF9uFoJBsZgV8e7u1DzX8UuHLXToL1C5ZyewG6bmiBAZgfaWBRDCr8SzFJSKU2bbFPhXsPVu4FvXaj4WWPgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57S2wm3PLyEqavHJKG6BiBaaCkPbbuosvDC9rkR6KDAcekGk8Jkq35sjRQB5Z6wG29vWXD4vnYnidmhLixSzFLpp",
  "key1": "3E7hZzH559YYhQ449LGtMRb3ARjRKDRJN4k4iAKPyMtKYjQxhuR8jt23onikjJnwLdGkXgdAFbnxErzhc6NxiG2G",
  "key2": "5nLGfYnDy629dFF7gLPjjnApxK7Z9QYjDFwVwYcQgmePt3yMU3pN7KKFZREgKP88fT1kSoqMPEj69zTHuMyuTMm1",
  "key3": "2iWw1iHv5FMV9TpzBeFZ47JCsKg2jGMB5M4B7KRiJzBeCdzetVDmnQXxkPCvRkGYSowNvMEhnMGsFJZiafS2Z6wN",
  "key4": "2783nVGpQnT6AGpCmLhn2w6Baa3gTEGtWuJs5uBed61pXoneHuUnaSDt82XwcuoECKfQfDutKs4NrkdfrD7yxoyR",
  "key5": "2w65G1XBgDgTcEWxB61nUygtUjdPqSQcB2hg3cPRcvneAYy3h4sNW2UiBU6gXNRAhP31ocKYXJVzWo2pidtvBaUF",
  "key6": "eN3vR23BRtCNmGxvuSCSEKZTabLwpdiBKc3DWXKTqvmLLQpCE62yTp5LHnKg7Yah9cxXrLZACJXRwGgSzSoYwzM",
  "key7": "3a3vw1ZM1HACJgAqiBTge8mJiBUtQyCv94YjCC8ozf6i2w31FV1TiEo7E7UoEZcf4SWmd655oytQxpyPx7bPYz7c",
  "key8": "3CdNZMvBJvLEbZStE2PvFZaYHGJ45sC9gyCnsJYrAUzfGZtH5xo5YQga2JNn2NbtCtd363qHrCVnFATfvB41haAb",
  "key9": "GLE5dxHACXBF5QqcQHouW4rwQHyMDLdLhUbLBVJ8rkkpb7NKvkbvkcEyeccQTSGUDrMpBXHj1MiW2YYNhsXD4dK",
  "key10": "59jBqPbjwZCfiSYsUPVPFdAiRMB8FuMsT7VzhiPUnyJqmgUqWfJzRq4Pm3DwdF5JoV3FichKexJQHtHQjPKCJmTc",
  "key11": "3f6Pvzn3AACWdFaiXM6ZaWXyKSBJJk7qCZq61AbkKSAHCwVzpRdWdict6YqxjgDqj2bL4i4pnqcnqdzFEdavZ729",
  "key12": "4nLiabvAzWJGHmr6SWWAMjWrfLDPWHpw8sZFYAS3GKsEVgc2TRdadGZWEG5fPiLeLsktY1Toeuky6mM71oXNa6Je",
  "key13": "4Vf9aCuhzTxxw2J7KugWaPagogiHE8WPuU7njwhLesExcfbxaNRxC4tnhQaXumZ7KrCPWL75dkErN2TQencxRSY7",
  "key14": "66GCxQDgznm6iSZThtdCyXDiYWMgRid2WQDYLKPfw9xnkRJtcUQr4Cn3TFmYGWFFgUDTEXBJ34hv1vZg3L8V5aMj",
  "key15": "34NB6Ln7saigFmTEniwoedYtd1eM5Taxo5a8nZLaqJXnuWYob3QkQShujA83FdFUQtcHLbyzJZ1yvUq1WVgqcSfU",
  "key16": "43qbxXYRV3Ko7P9q2dX7C2vSn6tHkDtGTqn4KcupQpDRv9V2iddmcxWZDYeDUGPpewNiEt25P9uBK4eXuUSZu4Ju",
  "key17": "4zRjFmF3dEr7KfCALnpQzDuPjzXN9JQMuSeSvVA4c4svBZMKjSui2ZQyx4GiertwJ6jBz5qSDGL9AGJCrEmRa7qh",
  "key18": "2771wzLXYp5DPcTXYLyLraDzNZBEXDrBRePDpKtM3udGzcdGYiEmjfLSsYKW4m9zYXNodVPGpAbxPT27uH5Pd1hQ",
  "key19": "2mccq8igDQfKqvM3ooi9fL935mpv41wGN5zmZwHCMXBjsHLkxPdKXZBrKf5W3BPLKSAWizr9Qni2KVh7tmde8vVQ",
  "key20": "5AFTwCf4XrJs8VxcvHWeRNwT8KP89jvPuvvdUPSus83W25odT3c2d2AqDRe7KdG57TLHTFsFS7jny138AB24r3JD",
  "key21": "3TsGiPtTyyqwjHczTimHurQihUZxZL7gHehXLqPAANxZyYUc17j6LegdeYMWq1j76xGerDWcNKLZ6dAMPeHJDKT",
  "key22": "2LtJSAgiQmEPsis8bb9XBV69hyUF1yAVfJtn5yzR9g6s5EY18mVsUhuyCoZU6aCu7UYx16vqqGrMsdoFhfg1vFex",
  "key23": "3j9U7WjA7BMJjDFULaYdnmsQTVw4Japmr6GNQcG8q4S6MuNMKwKUxx5Ehpn6RoxveBPo1DnWhPSvNmqAUf1MNQTx",
  "key24": "3X1RGRk9vNi9sGCUaHa9hWBTFTTaQPkLMuTQfsx9RW5tULLwT8TiAEtb3QeoruQd6wHEngJXBcMenxz4az1MpBuZ",
  "key25": "3GXWu8hHTH7mWdZ4X7Lr8B4THnGqRk2Td9CqjFEog8GQEknFLN4y3vNcJq3SAjZgzm8hu8qJF8V4RKoBf3nPjeMP",
  "key26": "575duhBNVmF1uwXCJpWd87me8onX72WsEsSHr6oRxT4H2q71zD5GxCtvNjrkVgX2Kkz1zHi538kxMraPp17Sa8QE",
  "key27": "eR3Ebe3xxP5GgEezMEBsuv28CGEns3ZAFKutabEKQh5XiWe88i9PJ4DjZDvA2VvCpNTTnENskiZm1H8YC3HkdDk",
  "key28": "3DSE7kGcc6HGKMTbzySe34LNpBrEUuMTSNFaPgDtcxezU6J1Ugtpvn5bihp1jaSdYwGH5H7rYGfSwXBA8yspHwwS",
  "key29": "3NGNPBtHLVKZBeMbLBfCyjQsSZKMnnS2AkhRQWC3yJgvoQPbfPndhYZESW8HzmXkPL8asc13F4WuRfwNnChZroN1",
  "key30": "2WVPVbCN8FzZkD42d6kKVQACWQpvH2YhZ7oi87FC6aibCMcu56ySFHe1vjktzdR71gBM9oBPkKC9nNAsNyW5N4Ds"
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
