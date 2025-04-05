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
    "64vyMsSRPYJFwgHwwYeq2yKaa1tegEst4eySwe7wT8Txbg25K3peQYATogK5Aa1dFn6HsTBjEwu7AW4gjs4p17gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27n8KGDzuS9Sjs3rqmpfSovpaU4v2ZnBVMVqJRjEhRD7KU9zJjNy9YV9JgrUoYsTUpzR1YmG5W38kaPK87cdB57E",
  "key1": "5RsDJ8eYXAQdZcuygftwpeZhJV4qS1Z4peDyTzYwsXkEC6eoGHVAB5mCwwo6JAdDJcpfvJvvdJpGefZYfupaBaro",
  "key2": "2v3syLbMay6hBY9uHF7NyuJuY8jxyrqECvYWvE2hq3y3h8N7d2PFHwJju4JhPybH6Q4GVkuhnQr5ubrbPMgL5XGq",
  "key3": "5LyS2k34HMP9fn4uvtbZU6ismcTcboQtUZ4B92TPZPEUUEuDE6ZMD2bjLfeBtjmGAAahFgg4zNnwjvVLVKsPvFed",
  "key4": "5fLCDXAGPPQLe4ZGEW7rHe8h2TrRNkpHmh1HhbEhYqkXtoPZVGqyA5u5cPRG6GehnnV4rSw683Q4Rf6jPG8uPrys",
  "key5": "RJSfL2XXG6isFPyhcQAKsB1gKn7kedehqENCewXrsJvsVruLnh1gKzyUDWw8P1TuMudPsMNHhjQuAuEqrhXiC8f",
  "key6": "jpzpjGi6QnNZzbVz9m5Tne4sWknU76111yp3ZNds3c1BvWGie7MrLV5NJBXCzpQMAL9JaE9y5KjxWtpbg5JJTcp",
  "key7": "3i2QUegEouki2jC5beJrDvhDfY1YEEYhdYsmXdi1rXvaxf9Xah9BFiFvMsYmtNQSKhZuw5XTZMyK3zuQSP32mjxq",
  "key8": "4xF6JFi4azNKRRmx3A1usYYdp7gMbBA7xu3aKS9LDK2BHfwsuMEqhPDRRqChidbQy697rnRUSi5cUhfo9b236RGu",
  "key9": "3PJbruJG8MX7HHpQeKQkz25bWCDBkJQT4DjpBoRCR6yY7LXUqishYk4wpNZahrZ9aiBVUfGuZzHBfp2VVWriLhov",
  "key10": "2pMNmo3ZBdqbLt1rcy9ScypVzA9k93o8JLdd34m3quX7crKnKbRsR9U5SAnEmEAdWNN5jZF58S19WzuB3U2y9Fm",
  "key11": "b42iTbBAxAHssNaWZQsW4E2G8BG3JCcMSB6UinU7SdaML6ZvVmWwm8ywGoiK1vgC8TMM5h7FgdD4LsNgjgCPBGm",
  "key12": "1ipiJfxnHgAaMTwarXGTcuKVJbe2REgGcG7KQJcNp7pfV2Xf5vEAZwstuBBx1HMpg1Fgkrwvs5aUcehioBqxrf6",
  "key13": "4V2B6vBnKnzkWTk7FdwT21ys6zP7ZzRBDe2k2Bdh3EwFAaYfZHpztvJVLR8TYM8B8VrB4qDmgU2ZF3h7ctSAoD6Q",
  "key14": "32VAXSZPvv4XxN5CYFzsb1Z5m44kah4rxyNpQgtLPpAdXnbgp46hLHsCRWvMR66rV5Cm3NeoFabBZGGhSUvaQzu8",
  "key15": "46vB2nqXZabrzvnbjjg1Stp11itN87RWJzTaeJbADzy8zR3D3SXTiEJs2Thrh9GRWaQtDu3L7axLoh46D2uXNLY9",
  "key16": "27yxrHV8PYFnxPGtQ6ac71oCSTvBRpYM4dFctkRJQoSDDCLbusCqybcwD9D6BDy1iysCQs9EnKWqoXEGA7uQf2aP",
  "key17": "2qWkqgzDP5ZjT63pYw72N4hjJBjcKsshUZdiDz1UFFboBFqwhYLKYiTQD7T4bXz6HkareX53vH4wuui4HQ6xgDQi",
  "key18": "qTr5GetGZBmR45S9nBBywRiHKSZsfDivkL2FGdnxq4eyKQ7JLSogrWLCcdNJHzHsDfc9CecDxznyeKXAg4mXdxK",
  "key19": "u6Vt8mnnJ6ZBzpMHGEtgUQKK1hvfP1FkMAXZpU4K26KsVehopbTcX431q9rxEy1wt13ZcoQm6bpumhu8QmWThPc",
  "key20": "pYybzcA7N7zfrUhq6a5gL3nhTwMjdWKgDxLVRbrDcpVTsW9YFCVsFjuAnHgusuVGAAEhvqYgTohrxZR7ZQTwpPy",
  "key21": "wS8iMkyhjk1wP6aGq8FcG9PhMyN3p9WSqgX69vKpaSwUma7uQ4xYuXaY9RzdHTbGG7TJbAmsYzF2Y4Wgoak71un",
  "key22": "66nSbeUuGVU5PDpMkXaGKidExxjkX7M71uZiXsafQpDBg7M22dTtHBWbc2kUQdsh3bTFkgMNbF3khTsQRCDnLgNe",
  "key23": "NbQCHpf8ZPwCsEsb8588TEecq4CjJefSMTZzqD3LXAg62N3DSwPeYmMzGg1pKarx2UfQp98TsjjEsYRSkYGqagy",
  "key24": "4NVndqyYbR7n3ofBvbAL7YH6weDiooYJFiSNMTDq7qDgV3dkasT3tsbsY7p8Y9MmazY9h4FzasWV6xMUyzGZDWpD",
  "key25": "3C1fxXxahSLMhcfNgLMBmEqrA9JGAP55yGdVcgNTRdmkzaezni2VwJxMgVKE2j8xxBxFx9vy5UCiv2N9Jd3LKT9K",
  "key26": "3Ndya8NH26aVkFDzWUTPcgeVpRzQSi9q7hGBMWDU375tbQxZB4zE8cFRcT7Sf9xodLLpAwGt62vja7qTJGvvXsFu",
  "key27": "2nFgUj5v9iBov3ZyqLHpbdntd9sEgb1HZTDqbv2ESk2uRKuLqXDRDfSJ2CeQCXQ78KTC3ubUWiWQpCQakQRbTssW",
  "key28": "5PXqwTAy27fFvRyV51fbbzEmJK7zMnzQ4hMpJWZDrTgrBH32rrhdUh3FhKBMDhARCpXEZBiqjYudJEjU1M7NSS7V",
  "key29": "2XiJZu3XqaJ6yzhxhF1PwYRwNf9rEQMuiKEBfs2YLUPhQ2vgdPFqxbCMk9doktNBvUJumM838bqJ24CNZxL6C6xX",
  "key30": "2J1uJXqW8QZKafyv9YcMqatwjBM3SNzEbyFq6UN72khBYBrbME7N5RtY6PxEcerxEDs3UwDLsZAZXw8CtDFQF66k"
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
