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
    "61q8H2aNoJ28PHmyVW7i8gdsKo41yLGr4DXbD4vESsC2QoMz9a3gnvf7JfXqCfZ62LeekKGfQChq1UkwFgUmZnp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RbACBp6TU7BE3AuDMyDb8FZMAxX1C4uMhTTsJRqJu6nwH9v2h4RXYaiPJa876t29oaYhyw8wmKGq2AYSA2MmJu7",
  "key1": "5urmGGnQ7oRDtgvatRhpF3GnQmzHB9Pds2TJdb7QuU2nWZRBdDAm7PUKxu7s7ESp5uVZN5bLJ6EoD4qZkZ4GKYJs",
  "key2": "3KyyBudd93bFnp6DrXviVB3gAgPoiD2nLDdxBiuLM7qju5ynYKSWLHhXqBmAJor7gkX46tgbGueHyEzuSxeTpAji",
  "key3": "KNCw9ZBseoZexv3sP2URkbPEU8KLbVKobb85biiq4xmUspKCANARPv853tjYuCboTpnASxSiTE3NvKN2oyVcWEE",
  "key4": "5wAPd5aH1johFmbtRGPBSkA9Wki1Ae3An9Hnsx1z1vLvTS62mA1VhzXDdMwQHZWTr1o4ewir4wu2hQB2fKvnFjH7",
  "key5": "4GLkTDTvcUxDyCYvWxm1oykeMwvKzQHivvgDAeVQArmgVx4Qg19ojjRQjUubPsXKMBAMksRrmEHES9V3CrhUFYkp",
  "key6": "3A4NRzTXskWyyNehS3ebGCGByTRct88M2WU9bwde43DdqW7MmyqECWkdq1WRTupC67EYFSKLzCPEDK2cB2VpYsXx",
  "key7": "4cBUoq3XXjYH8f84dhuzm26iGtakHUrrANUvKBFocrHxXdyoFChQfHYQg7Sf3mNsEBEDWrHsoHhdirVsHzSqwgB1",
  "key8": "3Zr3fc1fTPxkQBz24tTgE9ckdnNsGmXroN1k5zpb6aUYth8aSV9QzuM7qbSzEJS4pNubLBic2ET7N94dXcNfAfbY",
  "key9": "nC4ybFb1aMy6ScqgYaGzwq1N2Twe81anpxU9i9eN5zytWevYyQWEvrgVCpNvRjn8KN2xLVS2RN6ghgX191x3MW1",
  "key10": "g1BgQk8iqyvigbQyoVAugYwLY9zToaZ3oXWjyAmioFEHmWhSWQRbD9jNiH7d5Vh83znW1havKYjNsqQDNLPEUzj",
  "key11": "5s3ZMLeZhYnS4Xb71kyvD9hxLKmhikGpFznaJzUEzjwGvw8G5PEvL39hYSszU9pDM511W4tWPxPeozfkMiuvHUi3",
  "key12": "SUvt2SXaBJRDNSf8JbXAH7F5dQXuLqCy7ZmWqLH8Qf6ou6xDWpjX6amBaUp7XkcgsuAEiBVNM32w6ag6Uvrz5cT",
  "key13": "4t3zFfAn9DzsWDmoaTCgbn1fBQjTEM18gRnVwgrePNPRLPphxemitUXvwZzw5h5bA1946GxH9u9JQsXK6yeAo9H6",
  "key14": "4EZZjHrBB6xix6BnAiYZo89CAbFp8k3V74ZZnDTr7UzsMmk8gKBRDjRQzpwEQPQbv1SXw8HThLA3K7PD6BzAsDZi",
  "key15": "5TEEZaWm4sQPb9nZpeCtpPTQkgUWT13sPPqE6tA97hMy6KDVYjRJEHK8Mp2BhbtfDU9mewLEgchrDCCeH1SWVuXQ",
  "key16": "3EHYeVAgyAZnkvTtXYJ9ZcYZts9E99gEMPtNuXhntQrefA9MGWoAo3PnnYwtAvxTiUSSxeyGv1zHZ7EBpSZhxJEu",
  "key17": "5i4urHGq9uA21eFqTHNxrt3ed2sAVFjXhdGbbgKXtMHNAvM3X5HyA3bK8gocnZqK5nknQBBEKsDTkTjHiP8PF7UX",
  "key18": "5DoUpcqyvSNfksuZXbNXC3F6dKDn8UAAggojz5mWx2XudaetMr2dfhKZXHxc6vexjb2THhtTmU6XNT9sGsu325kt",
  "key19": "54hEDkCtgNV8NhQ8t5mHVe8KPf2Jzo8pZGSnkoGbSZrWi2kQedPP5v3axYYtphFvBFbsXUxdmDSAjBkAwoKTYeHA",
  "key20": "GfZHXHrvaJzpAnGymDLLTycwtNq3YzcGBumSR64AkFZKpZ8TSah6oMcB6hyKj5wB2aDs6gUx1dyd8U3Fy8vrSys",
  "key21": "nbySqvSSNtpUUTgUQr9TrScAxpKW3M6SRgdkauREGZNR1iZJwZsxX8W37yrHToUk3KpYmpxfV2htt9bnE6JyhNf",
  "key22": "kBJBwGuMxGwk8eHwtdnaivqH94Z9aR68s138HA84uG4ULGSTo7wevmpmUb7AmDYcys9rPC2GZXTeY4rN29n969o",
  "key23": "MjLAsncVBt8i2UGrfYsAx7cc2dcVk6SFc7NcDZFSTqomkr9Bed44ohnftTCNcfoUZLGZtyFkDPqWPpRLiko45t3",
  "key24": "2yUnEyBsTpPtqiaVpiiWejDf5XdatfWoKH6pqav9t9by65F9A37zQ4KdcbbUzyYzuQ4diDrA4B4aXkVmvitgA8KK",
  "key25": "56ewbgRYzL5wtNzDiCRiG3sLLRPm5Ag4mMQrsb6vLg1CGTRSy8pFnd3oYYkgiF5yvycM7NTFM6UpUs9486DsqPJF",
  "key26": "35fYMWjaTzpiijuTm46fyu5FniQMkob6WULo9PMCQUEprtVA5B8p9sbY5TJGYjHtx1itxXGtwzh8kvo5emHfcBcV",
  "key27": "SYSdWze62newXghqvxgghmcwwF42hFdutNGU5et7wV2un2pyU9oibHkwbyNWjYo6AoiUqpc62yhC4PiGdAa5fdC",
  "key28": "bVLLVNeco73J3dTkCqFq489Yw6Mkib3zme1Cr9zFbyoWYTjWdUwHwoydGakqtgBLygPRA9FevNhQgdtaTq8tCTh",
  "key29": "kbgKaf4qmbwLY9r1RNc2MSpCkiT7FqKTxftEnuwCfSsnTxiaTbGy53MxDLsQy6TkbhzbDjVVgG8P7PY74hVxFjP",
  "key30": "4XwjTgQDd1S2C1XahLxHYBc3WNEEASVMva1XGqyKGn2jz5G6RQ9VY86wKDY4XsqaZJyYA9k4juaMiC5N2vpXmRgU",
  "key31": "yZyxHQDyURNaHPMFiye7GmiW9fmuikkMwQBYJy7z3kC9Mjpyp8NYnghAHVzoW5QbKJ78af6Xun1UXq6gZrAchMS",
  "key32": "3kQA3Spg8sXt3XmfMX6kYDxGVwxf7k1b6aHu61EspZufnFbDEJgWGuxdHLfoKTWbHbLshonmd37WGyASHVW38cRk"
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
