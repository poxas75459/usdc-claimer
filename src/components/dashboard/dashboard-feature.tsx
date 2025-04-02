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
    "459bMmHTVpvzYjrckdgSyS1xfsVmyS86ccPpyCkLVSjtgRCbk4t34XEVe8yHMnkR5KGwwhvrp2TqVrrcitG4qqT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jFQtRA3pgNHaXDRMCsyHbXcRjGXwwP59q6etsGdihx9hckxS4SDrr5PBY4EagZVeYZaNWfAuQ4oWNi1tJpkV6d",
  "key1": "2KSpZvj3XJxZbX9Cihg3Rseux7YSpvMHQkQnpJqPz32F77k8D2pxWPXGnzbwam7SL2rHZFpBAHYwmkHQPeSAKcyT",
  "key2": "ZnkpNQwBmNkkJTDfLtVaT1eYEi8UdhYTk9yFT4j5SsCjj5ii8Pqwz9L6JWCNFASwAFFpW9tDRPWnUiuaFMfCg32",
  "key3": "46MZPJhZc44ijTkJfPmhxnpWzbMKmktkuGdoeQbGWGapQvWDdhrH7XR6K5g5dbXbV5E56Y76rUuu5vgf3zg68sLk",
  "key4": "3kVqZoMDbQoGBqCoTTFWS5ZjJP3dy8Dtq86MEuLMNAJqHWQGNZeZJHSAAcciCkuExexTadHr1dkcg4KYQuq888di",
  "key5": "2gwTPhQB5mnq6XyFtKGNkLxtj1E5o4aVFWYpnT1U6hiqUWuKwRFcX5KVDHQ7NAieGRtCBQiTrVqt5HsXaK8rbMXV",
  "key6": "uPPEAwffTzbnTqX256vq34YvuYnjK15fqtu6SqFna5afYW2oZ8skZJoeRgkxqnSWRTeKKPyBFaYzbZfBANFEY2e",
  "key7": "3jsdmT8GJ5JQQ4Pt6u5GduxcSJrR95dD2Lap6L8cDM2y9ddMECR2qGNJnDj7PqcFRNHY1u7kvsMCCU3W68xrZ2W2",
  "key8": "5aGbZPJqBeaSgs2e99HReNgP7v3jXL4rxQK2snGmkNHH9qMBMekFKVNLYFMaD1BH6c5Nggtpcpjar8EBePUWUYPK",
  "key9": "4b8TLU7AYtrN8iDUvbFAsE5BYSg6gR9VMLEi7sRvvSSAoTE87W1HuY1qNSQ8KFi6vBQeL6dyJiKMf2HcJAjVDGVv",
  "key10": "5q5AGLAZSaHaqNTCJViHaCdt72bB2ARobrfmfG1TLqsK6JD9b9HuW87vmEHYJrn7EZpoPM1TczJ7KnqH5zxfRoJm",
  "key11": "4bQuTZDFfWwz6LxDUyyjBgkaXXjVoF73jNnxTmTv8A24ZEG9dojg2f7LMyUnkR7UbYnZx9k4BREzJe7xmBNHpGJP",
  "key12": "4w7k23S4HV7S1XFmB9sYrcHpCodszVMH9D8MS6xzhXTBXtf6EZrz7FT4Mu1CrMm4oDTiJoS5mBRzbnU6PPujqCsX",
  "key13": "3X6EKqkzrrreUbvR2Cmg1Yr3auHxhs3G8D9At4BLwkaw9GkMeasR4TpzyK5vikm33myB6zphWrYagzS7bULRwzFh",
  "key14": "5oESMUsJs8YbVFGnvyiQtUjmXZZU8NLQKaZ2qQFKU2fuC5t2HtyBCJj3YgHcdHmko7venZvgdcz46nr8jaNvhknt",
  "key15": "fCJMnggSsfbCwUjzqHinLWem1tGZHpw62nt9J8q79US71TJhBpcjjmdEWmnQWmhvvNiW3bL8FhTh2r8SjGhRXHh",
  "key16": "5HvtixRCUN9xkGGKRencYvWRBwv9hdBaSDTHAEpntsZYQgouSrmxSAJSRY8N3kohxAFELaJm9d6zxdQmsP6gHnBv",
  "key17": "3tYrsozFCWX1TCfX34YPY58vvY5LExyQ7gFRg8kYpLZfBtREimEisf4aXbj4S7QdDRP7cspLLJMK3rvN9TsizhH5",
  "key18": "5inRG46ofV1D4Ydwr25RYrMssHbGdduBEa59y8Tku3GAcYJM9T9KPQwgfnYwWZUdp2638VXzKfXKcNjiFqMAZeAX",
  "key19": "4u9bNi7Do1pJ1NqDVKQWWKygajSPfZGre1t5deyRgoNHNqZEz4AJa3fcVqUTVzyjE3DBzvt2bdCZR771GWVF8f52",
  "key20": "27UHqmjGEG4UxGfpj1L7XYr8vuqSUMgQVWFJMp4M8hRJeUdaBR5muL9etiE5L6ioYF8ZomCGygjfGRc4wyLwoeqs",
  "key21": "3vShFatKCAK4i3UgvDAoLtVdXjHbVuwHWfDioMpJjd6TfEzh5cP5UY7rFJ4UHGVoBcW1G4e6yZe8UeBFsdT62UF1",
  "key22": "5j98NMBRpNhxpU389mbLENP5Jr4YLYQYM2hpPm2Zhx4vkthRQvoWE3hiJCFzmK22p2zuA4MXsNna93vJpB7yMofW",
  "key23": "2c3c6uk3HUWFGibpRuB3Trg2exSHA55ZFLVbArKfFQDnFbEZV3hkBAqMurX13dKE2HdquKaR9Hy1ywvGZvNvSQh6",
  "key24": "BccC27tmmGt4bTEJobHB27XSuaAnf4jTN1djJ3BmjCbjL7fLyKQy1Ap8JH9nnzc9BXJBmYN5zsq36kp6w78HZLw"
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
