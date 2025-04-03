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
    "4adWPau68veMMGuhjaqQhDEcUKyfEdMP6EsJCQKZxDU9gTH73qo6YhpyReFmiExwf6JfC4AYhPB7toS7tGMso4Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTQAMBy9mHoSgKBL4NhdDgKDUycDKm4oNDUArsMvTTFrjViVf2WWrmkiYCjqJva7xKt6JAXC5Pt6Ad1aa1qtht5",
  "key1": "5qdpyFKAuCnp25YUc4c5SPYazqV4cGiwHhFUrh12idHKJKWz5yoND6sihn1BRmZCktq5v86Lg9U8XwVhqXxyXvdo",
  "key2": "4KnZ8hpzN4dbeDxw13gj5MqAtiDb7DyebMh42GNcNjuCaovS7rXNCmVnmW5hkeHciTipSWaGUEecNnhekQhbku9k",
  "key3": "47KDHSbAuyw7nTfMmw2E9VBvBDz8PGYRcTTqRBxd3QN6octUrMjFjYJUztZhdERi3gXRotnP5jqzGn8cM9i6E4fA",
  "key4": "2hQ6ytJmQ98PquJoS24ioPYxmnBQveHoALus6BANJkPuUVoanzMCkgCKwfKN7iqUhuLMGzrrzYmD6m4kfz6ZwLg2",
  "key5": "48CwCQLCCdgK3nDcLMzoFXiwoo8H69zU8CcXFYdGpunVB3nofSBa4gozESDS6wWEH1hkzJXED86ByE31hCPwZuyv",
  "key6": "ApmW5CCz2NhzoqAg7Ba9pHSw2fQbvnvF2heXVLeqQoaurnV57q59D4Lxd6rjf9vZ9u9qgcpPHid1Rt4hTFuc9rt",
  "key7": "126Qz4vPDFJ17VGM71mZAPLaNYe6vdbsenp9jc2uWtUizsCF1xkGdFwBHmTZ31ds6JebhgiEXe5x1yBwDq2pViaC",
  "key8": "3tq83enY38PmunAd8eZYh9DxAqNdZfVQ8Jv7NqVkaWSSSbbW1G8iWpTFEQMAZhyg4fBWDBg5dsQQPZz882naGpoB",
  "key9": "32Ne4T6RDbzoApQtSQNF6GajKP7zoKwtz3ci7QTsBFEdmy1srhzL7nFzsmZfh7Dk1LaA22cxKdyxFWKv8h2j5weB",
  "key10": "3sNfESMy6gxhv4QwNUtDD8ffvsXyB9GWXJKVJmWAXuGCe9FLfMwEdJnqW34yAMpDMmsMGwvt1Jbhrtw8zRvTRFca",
  "key11": "SZFeK9QQddZwiHu3MV3fndpYNTGbRwUjmxFYVLgE5kc8u9iWL2kfRMDTParZ9Yo2N5tAMZjucUx2ZsDmWtWUELC",
  "key12": "3aCjZEKv8DQHeexiVUW9xDhMh3S4sgNzuW3MjvwSpviuKksCLWFWMkBytT7gqsr6gPWVQx6awJV8DT1mjmNuTaGT",
  "key13": "FNu36Rtf28Vg8ymz7PxaPz4VGNgQZrkP3iqZTa1zC7SJacarQYpejkMQiiGxjuTscMqdz1i4AyJCdkwzZsBvppB",
  "key14": "2RSF9a9JX42VQyYAruXf5eAvAydU2RintcEQYW9hCUwiBfmFmYCSSWLXLFicDaQqot7hQvq32DwSC29BMKHFefs6",
  "key15": "2dY6vagTFJEx2vV9AsLpczW2MBC2wzYHV5CMt6AnMRiVEuC55crxNdwrPnrDErYQ9ykr8zS21wfcyGmJnxn64Hw8",
  "key16": "3tL9sRuANgC2gmKcSeVkQZPYQDum1Ny9Xjj1Cy9c5x8UWmjvMcsX6RDUgkLDZiRePGThXpVutnW8GZmSDto5v5Fc",
  "key17": "5USzZJ8NxJiXNBvNwwwRxZwB5HxkGZhX8Tg6XJ2d4Ef4yYTjq3NSLPHqVvyuGuqfQsXAyWdR3SmhW4ErJF4Xye78",
  "key18": "5F69SenAYpFtC3AJxJPwwrXKiGWW5hPRjSAJeHrvYv5kAvTvSyib7Ep1kLvyTTGGXmVBCazob96mR5zGtXUxETmb",
  "key19": "3uWcCNc1x3eYPk8aeqo3KC4UcqguCikQ9UXBXZqgL8fdG9XpyKFqqW7pYrXfXLigr5xTjrZGJYX4u2bBfrW2pLVR",
  "key20": "4kDSVvHS46xAUs6NPZrPYXFzJLUySWPpVLJ6Cd8mRXEn37iFgPaqZcHsio2moUr6eS6rdkyALnVws4jaQaV2Ke6E",
  "key21": "53FzYzVyEqyvhEZHvw25b1bvXrpeQYrQMhf19dxYyhopf5uT5iMbzhQwqcVJrMd4X44Cm77yTKVNfAEjgHpUoxFu",
  "key22": "7oqHozAngjqJ5DTQSWDWCYQS2gpaL1AfzVLo9opYVHCVE6d8Uzf8k7WCDRdfVu63sZdQ6XXraH5yopqu9cAgMVe",
  "key23": "56EnLnPyvp8GbZM7thB1nydp8v2M9qXz2z6pEZQd9ZPXRyYo4QWn76itxJRQ4WgevpPgqRoG45VeKgSMRoWJebSP",
  "key24": "2yVvfGqngCsNFT89mVHJEW5dutkiWyzECPvrhisU64AkafkkdDcWYPMSia2UxqZgKrm91fnhgLaTzth9hV9LqbBj",
  "key25": "3amK4sWRmXBXgpvR79P17byLF7ewUaUnvkTNf1fzsDDN7biNPzx1U3XMSdVQ8j5fUDiSuA58ZgV5tiTyo4xfwuXt",
  "key26": "2XFJ2DkqADFbmbcTyb7PxfpMdtZrWr81C76QGYJh833ah4mKaQn9sakjut7eBsFEEQz5YipsTFeLxFGPUXmHTXTb",
  "key27": "4DLRoKpLc2pT2yboE7rT49wHPai7PmA2LHFY2o5sMMjfx9B3UvRNFdpjb4WDGpSNZ64EbyGDMgkxLm54V7jZkAkq",
  "key28": "4LLpf2FzfHdbhuCyNFzkw2WLabPSvXtjpiTbfUQUvY3RCRYFF8ajZVC1jjAw5jEjVSxvPKXmuRgXtyrzhYiM5DZR",
  "key29": "4HrwckHNN6ZHpQUSvYxuiTiu1SgKqdzEYXsqv7Z1QUS2GHCv5CVLWpELAv8LL6oV7zKjv5ibqWg4EVbtQurZrGAh",
  "key30": "41py9p48n8P5MEoYj9WQCfjvJooaJ7KzZcDtPxzgaE6jvt452AJhzY25E2pAXVjUij4cn6Lzntn24cqmqDrsE6T8",
  "key31": "5kBAEzbUzQJd1BQGHGUDsLHrVAgKnHtUJquQ9MRB1ojzfKdKkXHiyKGyqF4SXn1Py9PqSzYLJj7y8r1ND93srUyQ"
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
