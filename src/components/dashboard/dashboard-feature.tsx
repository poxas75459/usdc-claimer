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
    "8hbwjCnm4RT9bZJFSKFrL6MPA29VXhshUwGfY4hYSTsmy59rjfe1GWqRdPnNeybqCbjGbLQ5rMbbhQ2i9egMkQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDmtx63kvzWtj3hAGLswQCeFeKg5WGxVAHvJ8SSPSuXmW767zSK8tyTWFNNd3TUAsmFizS4ZzRGULFS3KUXvH4J",
  "key1": "4mrY3uQLz5rEUioaPCT6BngRLRoMxuCgbVxjJ8nbs9aanCmfAZN91cX8knKDvMZukk8GWyiod4Gi2P2Mxubv5LtM",
  "key2": "3TraAyXXSVKUX7s5BRkMmd1DiL169N4QxeDMmFZwCeiyWjREVzYVoERKPhmnmzkdBMYKfXPqTUMHQ9mytMQ8CsXM",
  "key3": "4XjpgceZFweCJKzryLw5phcmKmnHYMdAQCRoiKp7sZYey9To9nagfaGzhLgDHNr3cLUf2FBcM589mhcqRqa9cbjA",
  "key4": "xvn1WS8JSaTBg1pGzAghyXow9LdCxz9rbamiSCoiHLMmne37A2jCCzW1RuQiGtPD7VA5ZZP1aQDF8QdB6QV48xm",
  "key5": "7asNg7TQbsUGTGuzVWaz1sa15DisWn1c7YA1bJ7WFcwF7PL7bvbGf1kfuYRGrdNUzoaUEmwe8hqvsHSGNiRRiy6",
  "key6": "pTR7UDdghGawJrsgM3wo2pi2xauzVRFabvc3MBPCGU5YM2aqDzjTMc3XgdYccr8n781zXw7Fs8SJQczZZiSwY7n",
  "key7": "3u4yxZMgbgrcV6G3hkuTckyWtiFUJhFxgynsvJJbuPzHY36AV8HHJiy9WaZ3kx9QTQEJT1sbiJVR5yij71RQkHNU",
  "key8": "e3XcmiAWZcbhwLLK6C8jdxFJjkZRqatvDVh5fXcFXVX8WxLTPuCefiQzYxBeXmNXnAatYMwf16X9vuD4ZMMZ8uv",
  "key9": "r8dg7GpWwLoaV6P1pjBKgQvQSPzoX8uq3ic2v9m9xE9xrrWTnU4MJaZB7tePmEbWLVY7khF5x7kEc9drWfxeeoF",
  "key10": "AmwPx9VuhJnA2rKH1qm2pWoyHr3EbgcbcWtsiCb3f4YgSXF4QsAvNBiQcTZGj2MAPVjGuuMZsbj64Cvjvz5U6LK",
  "key11": "57HmNVTSeGg8omZ3nCFjx3P5VEDAWq5vvd5fJJJNk4vLE9gpe1JZ6Vmf2nX5ZgmhfyxtQwAjVFdmseHkCpr2TTtd",
  "key12": "5DM9NjZkys2q21zuhkQQ1mb5YeVT2eaTcFHr131LZfpDiscQKFWHSVWyBoQfJVLWJn6oFeLwc54o4Ku5y81RYdgn",
  "key13": "42Ywv72t2Tp8zQ7bcDs6BKXmNNQ33VYgNw9Zq1ujHpQe1XUn749pAaXjXkvz2Czy1YUTgDgEx5HPY5W3k4mFiM22",
  "key14": "4Bg31wDCXoL31FrK9qrKqK3pKqsh58NqyFMeUgT5VdqHwCHMt9rXEv76sCD4Fd3VcPNMgvHK9xzXmLGo1jL4j63c",
  "key15": "5fuc9FVo5eC7C6j8WbSLXtFX6WtwB6aFkALhermBEt7BuS4EtejkiDqMs4tZYaQLwz5hnibiFH2bshvVx9YaAeUk",
  "key16": "2tHmTHSEXti3ESzbKHDBAf35em6DBsJSeF3Uptfq9DPebEBLFgxYaq2M71TCupjKBCAZULDosZjvLydyS7qnKDtX",
  "key17": "5G2tzDBLLfT4ZRdGWC79c4i7157QEPxX22uh6RVHQrFt4skDg3dUfETQCVcN7jLxCvHJV6fQ3xTWrDYQ91VvmZn2",
  "key18": "4V9m7BeTsSwpECsJuu1aLximPeEU5YYR6chsASpKXhiUQPGW1WsGAyFUGEvHPVWzX23skzouya9pMvZdTuFGJVky",
  "key19": "3L9xwLtUF7A3S6wF7TNNS9RNZ6mA7JFkeNSy86LF7TMEgbTWXTH2Wktr4YAqiFgdd4LP2h7UH7ojoM9v9qDv5eE8",
  "key20": "wiA9EwP67NnDx9azt5iYDKQzrJWNdXFEb3c1WFKMHWRb2zFCp5wXnpa19sJ5QbRK7D3vdMMWqKZ6scsTdu1HZdL",
  "key21": "4qvZtnf8VXMvETFk6quAjm9enXXvsCNqRM6i69UAcmDVGNpZiwGAukHRwnYRektr2KsGNMV55q9huvE7Q9KAmxmc",
  "key22": "26JMFp4S7DswvXmq7K3X3EfA3erW9M22DrLLSCAEGDh7YVwu8QXzvjHVt7CPn3SYsAv21T8f8ueFYtihW6CsNCmK",
  "key23": "2vb7Ay8JD3GhFKkZv9FMQUkHZV4L9Av4ZzBy9kmg1G5Ghgp4Xj4MccVJMQXUiHdtyHUZUUsoPEDB6cGEz5mBWGPm",
  "key24": "4mSU6GBkJvNuT6ZiyyFtPnoDSbgGSndRq92bvV6xZY4WANHNEaLTzdeuv4mxUaK9xCWW9sfg9XNppz3GFp2pS5AX",
  "key25": "3LfJojkTdBXfMJnEec8RcTYZNodq2CbZPodLecDd37SjDfTcGY8hWnkJg4nM9FHTaJAmRKkK4UC8dwUruCLuxMxa",
  "key26": "4E5KPoEz7BG5ZbwwJgqdtQ8iWaHgrzMHMVFNVY1PQBsz9enAS2jBYzpEqDVaWjL4Nh92baShnE5Lg61q7X3ZiBs2",
  "key27": "29kEH8edxpDpD1XLDS7zWavYJLruZ8zD4d7BVA5BM7zimVUhgwJ4S5vnJ1QGnwHzu7iJ15KRyTAtPpxAfJeXHgJJ",
  "key28": "5iMEYbTvbA4h2q3Q8xhD7hiVsd8m7jaKKLTVKcxQzQE2BiPJbrKzLCDoWBX33wwL7RRii6AsA2qCY77sokaT62op",
  "key29": "4pBnGKQngJyG7DikeXrGXPeg9pks44MfCNy7pugZ34S4VPApfMpgrrDEyAzwM4SDYatTztwEQoYhegpPVjUkgpu4"
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
