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
    "4cGGXay3YdrQr4NfwPJKbHKJCzhstFj1AxexMyJy3LdxoXLzFGUghPrctwmjcTJWzZUNeomD2T2r28cYM7wmD7hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hc4MXkpDcZoKGFfnZDtufyMdjjUN9tgsA19QUcbu82RgFYSfGHdjihXMAXSzRHRYNBfB8NZPMZmsvgLvR5cpNN1",
  "key1": "3vd5yVMd6P4qjefkeyRj6KyYeQAx3gF12cuP265BLQ4SCm7tNo5frXV8E7o5862Un19XpenMdovcajgipo3tXeSK",
  "key2": "4zaugj5WuUwDzwZjWb4G6rRnSDs1zUoxpuubtYSE4yVrsduCiYxb6RnViPirPXxCzH3M4yPtvXa2cGaSLiriPjNF",
  "key3": "t8rjXLfFDesvzugs4KeUJyx4RzKDCWwmYLFcNVWLDrKyJxxBwYo8AFysyvciVJ8SQwD5ExF2dfMM2F5BysJSgdY",
  "key4": "27mfAaKaeLtqtqukCDoYrRDKgiYLRPZgeNSA31yVD1oGLaWDRLc7FFbBCbpVDnCtZjeVeEbJYzfiqDi5u8QHByL3",
  "key5": "4fWvBDcEfY9P1thYs7JBRgV4ufDqf8UEmRcHLfwZXnkjiQcNmLymmMqEBHgsCEPWxjbwCkxvRiiKsaoLcD8CJz25",
  "key6": "2qqWJMdvphDz2FjcktdTFDYcqypEr5SVNteCG3jS2UPhCZ1gbvyatTrUSvrw8WAyCjiDytU1LRdrGbRiDNn2Hyp5",
  "key7": "4mPU9cFWBpWAoPQhqgie2kpcYii18zXP1TorGVThdSmdHFuycL72445a6Y7XkKgf5T7vqAD9PrhqYoTYkaUHvPbq",
  "key8": "2aqxip1wgmqyaKQTVkfBzkXkhobe8VSv7UN6bpwe1wy5XBYkyD1n9GvHD2BHqn8gJxsQzLr4tvdCEqMgTpvcmVny",
  "key9": "539Wy1FwL1bLrBXZWAt8V7ScjbFtfXM22VfgR25zeVUKGqRJfSgqct5Sm7nfQza7iRs4EMex1rCLWPeu56rMPj6A",
  "key10": "KercznbjJsdeSVhKTsCgHqkkAVbuk1JXkL38v4Q1Lg2WCtkkSZKGGnv6EC2bwG4xrQivE2qdAGthmBu3mm3DxaY",
  "key11": "58HwoAPTzy7wnkEr2sk5PfW3e1vZV5b2qgZSKyFMXxVHvQ8r7hfBJavPTC98KYczrGwqDx2KV8x3BK2GfraY15bg",
  "key12": "3Qw1wt9G7KQVzPqcE8PpGqZ3cwuq5knxkc8RRFkDrskLnZGcC98wgQ2fgkr7XN8wgXtrzF12trugsmWmkk6jRAeY",
  "key13": "2pPmURX794E1sBjvLh4m2wwVpseDW3ULxo7PAPRRKsV3DBmEsJT3SAaVSLVEwHn2rW3rFKKCM1yt1kg8cYCw5fy4",
  "key14": "5yuRNaBFpV6amVfCQz8W2DSDjoSKFcohTQdKzAHPs7apcDZ2W7i2S7aQfTHqstodC3EWuJVBqiCVZzch7JMfj6oB",
  "key15": "YHhNs41i9MotKpfTsQ2aw87njXFBaJ2dreLq1PD7VfMoLTGEaFqNStYYq9QYM2rAE1gnP81DE2HMS1HvkSXpTRN",
  "key16": "M1WkHfBnVKB6C6T2sxMTJBs4oQJfV3AdPP2hdBTQiGBQqgE4We4x2kmWZJgQoc7v5PNXjMtKJYrFkmcavsTZtny",
  "key17": "4QSS9MzVEeULHdjy8bnKTZ9n2iCBaReLhW5oLXbrAVuJ1zpt6nHUR7VGjxW3AEdpZW1ZqzDDx85m85N9DYhnDtY7",
  "key18": "4mTfj3w1eshLejvP89oYgBNJSRaWBAWxuFuS32wGtiX6quJS6rwb5uWZBv2VUXsqhjoEFgtF8vfppA1iUwvUjfgp",
  "key19": "2nBZbBg7R3xDXXGKCcBw78cxmUikYNHRGz8qMrMbZrRKou6GwWCtP3jUwTdxyysQ8ZSCyVaWtMgc1WFfEVTV8bqJ",
  "key20": "4dYog3V5TxHYnmAHQ184o6HRPbM1Dqk1X1Sfuir8Z65AXG62sMMqmdeyJM2QQtpcZvknoXxZgSGvUrR4F7Tcdjtv",
  "key21": "3fz8x58VQjgTKjJTb5XvQLuRKeKPZsWwRURhe6kjqegiBeBiUzVz1DDxMbgMqE52CyscYbHfa7cAZoNr7a3Ruryv",
  "key22": "5Wd9F81otDjSbDb9GKnJCnqnhaweTdZ2RsTANGXpnWeouEVBsnYeenEKYxGbnQxTL74hj2HAeQwRCvGkHHMh8pUU",
  "key23": "3iZhMnUbAKtoD5iA2i1cpHzhKYtS5onij2EvTon2suxNvg5RSKdvnM6jkrBGk5cevAACcaQsY4T6B71pzLZtWQs8",
  "key24": "25FAvBfQQGhDKL1d8knYEVxUfrfyT8fo9QWqcZxVWsknS5BQjUmRUU1jCbyYwNXyUkhv21mvJ7UyFTom14Xg6KhM",
  "key25": "qJSsF6CHBWWssVgY56eA3PHsoZgVHkboDkiRJkh3r1KzRrwS7CkGZFiWBhtcyzkPex7wYw7mQrdZxzd9bFugvbd",
  "key26": "oeAwTcckcKi9DYWNfv8rkz2zyyFDBEjELQpsbLTgE9fwrR8uKQrqoiVFnemAiVgUyt24qVBtjXQBz8Rh1NMc9W8",
  "key27": "5dshF4jz9EZUe6QnWHrpiYsjvHZ5N9Cje81H486iUf9Y4bw8GvXEHHgy55hcwqshqVCZr57kkmoNgjHCq8iVvjFT",
  "key28": "3abHdj687ne6hVBKuRR3ygABi9VgaEBFmrCmqi7g5hsrom3Yvi9a5VcqQdCb5e5kpkvyymRLbqgWkRyu8b9LR9LY",
  "key29": "m5hNednaJWGArMY2dAGJAyfzVAwuSeaFjSyso2PuhQMsPz3QNoDfMGpSBE7aJRr7kCGzVyLATdSSMF23d34myXF",
  "key30": "5WtBKqGR6rbDT4bGfRzwdXyxfXhkoQdh3j4zTfJEWKfj7on7rUN2YqLdrnGJ1wD4Rz9eNgbtD9Xo8CURcEkSpdms",
  "key31": "3gUTkAnpbeNqWMmAei2H67juAM1xtTCKxwqdoCWZ2xjYVEjNwxYuULdHRJQL6VjgcbkjHvdYeHsVWmtL21H7ZGcM",
  "key32": "3ALNefpTuFUZ9GwcGrHE2Ax2iu2nh11Eue81qvCectYRZVq63U2L3tq1R4p7aJJ27ufAvHCLH9mGqXzHhEvcRcYs",
  "key33": "KzQ5tqmERQNTYUGfnF7Cbu1demsu1D8uBngGh7debCsqdMdvqWipP5wntfJFnJPGuKm7DBPYg5XSA5YAxgZ7vbc",
  "key34": "3Ldn2gDZzfzTe38JQrjid4YSgCYDkut8ykDBUbYPr5zxiy6dEiBTrQHCve3bzfAw5gsSdu25h3f2umLN7MYaxpB8",
  "key35": "5gGX9scBGQso4N7L9WFCfRAHRoR4L8MVrQSq1RyA7AfwwDUzvx3jYvLq4Ej69sFwftL74st6Kp5yzuqbkcyz2iU4",
  "key36": "3haEimzkDryCdrnzN2pub5G6dy2nXjsMSxnPbyQ8udxrwPMZengRkLJ9o7TXuRsmuqY2Gy594787yUi4eDayqR1C",
  "key37": "4AhCmmXUuf41wPdFYQev37Q9HehAYFE4it2akUnbw2QPv8n3uYxoxgpm23eEfSEnMJtB78vjVaZTzgqGkigGvWCW",
  "key38": "4MRPKUvYPYrbcAyzo4fN3GR2fieWbdd4xbSDpchRt7RXe7gjpHephBd8o5tXq3DhjFjE8FRxQMKahLXE7FJSySCA"
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
