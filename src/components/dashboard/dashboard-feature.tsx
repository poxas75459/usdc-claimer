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
    "58CxxJmKPhiA8o1gYAyg2ipMydxBpUeZAFuCSovFFNXRMzETeTubdf5PJ8xPERj93oxT2mfGaghBj2W6SSxSdCqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXdV5Z77ZfNzNezJmDtREs6zsNN73n8gUwpdkCYLEcJdH8xd4jXDfUfizsSjAFV6DnLDMEYpfwEgBAjQkwSSox8",
  "key1": "JuyUHwk6Cfx9bTzh3YEeyK8dnMaxnkduKbbz9HuLjGSqobi9mhP27DrCsvuEvFGTsUm7aN94AEkR4z8GNWnvqNQ",
  "key2": "E9618NUSy544pqF6SMGhYaAusrKhj7rQSPbUKVePoqJxT1yijB2rHaD2zLZnYiUwqfMnnYQNJbQnv2aYHgnBWAV",
  "key3": "5bW6rJZCQm6pbPU3kwyQaVc1FmKcsMGziKyWA5GjgQy6qfJe7gCz5xd5VbenwEy5eeqhV2zCXRdzfPeeDWWPrXcj",
  "key4": "47i66xywGB115pR59737yEdqyseDWYWoakbVVw2NdCJHYB86k53FHF2pcFA8XtCb59nYQr9fKwszcevEsfeXFJYA",
  "key5": "5iR6DizmFtakxeG51cP5jy8TfPPPEb7CvD2Axgdpb65GqjfTY8su4VhEabhukeEyRt1n62mVYm4kuXt6kDcULfNv",
  "key6": "3E9HSa9ZMBKztcrXfigQECRKnBpzto9Hqjrhkmwtg34SbV9ytK7MGpdaGXxUA5K8Feooc7Hdq5pdUbbydY5asn7Q",
  "key7": "3WscYYNYPismDCd7PNoL6jtn6hqQpH9soVT9G2cXbEcjCMCLbWt2D22yRfMdWxr9g1LeycqPLZYVzTmnsW5VZTQx",
  "key8": "22FTSht9Te48KpabFw5iMhmc7xjZSz9ULR92E3t37duzx8vs7Spg6T7a44nMYoUYLZZBGiXYr8BrwZbYbbUNBhfy",
  "key9": "22LHX9QCXRz7RnjBFdkPZcvkWNdiKwUEy3zYkWjRLs7WCFHKHLhkTMvaPgqETswpPJXZjh9yjztnEY3BMLeGShYz",
  "key10": "2pVkXZxnytDiqefvPTFHj6xncp62tHpmUna29Yjo5Fo5dBC24DAbg3qBYbgyBWipqUXvUPjfHvd8QrySnDd3KJH7",
  "key11": "5YoPFyDR5axZdGAYq3QtzYPerP3GfoECZ4MbdW7rtG53WuzXkwtCRqepzD11f7MjJLQiSfbGHMSUXqomY3qT6aMv",
  "key12": "3jFHeYS9j6dT4JvrUXygLjTxEgirhzhYD8MW6DDC8LMgMkPN6wDL2J5Ry3oPJC7XLM3AWLbazq4WAZ2ozQxtNLDX",
  "key13": "Pi1hnspzqaL1oxMyPTZxS3uje3gfrGq7nhuq8nQKYrpg94SFvtjoV9o9AS42JHFg2bxGfqs7SoGCnr5dYSKQPGn",
  "key14": "5HjqB6SaXkjHRCqZpS4JtFwgw6om8khdCR8ioqZa9xzE2bCvaq1tR3VWYDMvyQHrvfHaBZKYvQsjgNG36gYi6b2A",
  "key15": "56be9XTj8sG2wCfHpWatXi6zotsxzgSuswT6aFGpSTWhaEAwLVjmALjaAG7xACWcG1EUou5gTseV5BxxCd8bcKdg",
  "key16": "2bJEmWV89LTay4pGYSeHT4fhXdpMSutReK1DJjAmj9LFKWQQgANPt2UPjPcYiYC4B8iFQ4Zomd7y6evMM7nqJQqJ",
  "key17": "2pUk9Tgg2KcYqpLrdFyyfdDMhUEshPWB372eU9TFnZd4TWj3ocUr5sEBjZjNkanCZgZEMC5wiW6k4kKsAsBeXnYi",
  "key18": "2MtNKDiQtgMbod6amv9rs3YzcxjQ6t6yxFgKan8EKNCmEXXyX6fm2i6zqw5FqN2HbBh4ZgXvF3hDjT4jy5WVcbWi",
  "key19": "3djB6nzxFQaYUbV8Hg2fEkjV8e11GnvT93pdBpJNy4NvY8ZsngtCFfMe4yStUysoKBgDEWBoPng5dGrs6hZcrUoh",
  "key20": "2pYau1Y51eNeSBZ1HjBE9Wr6VpaMUjUAhtbo94zDbTiaT3ZAJVK2Ej6xQDb7Au19Fwrq5gx6r2kfTSj41i2WwWhh",
  "key21": "KkuMYS8LdSEr5yxgZoxsQ3PtBsGsWJA6tQewA1sBAZjZ4ea6c8HwYuobKXbfktx3RPHake8DFYZ8wpJT943Jn3o",
  "key22": "2ymvJdaYMaZKvutLWJRyfEytRCHSTfHh47dEdovVgd7HAxJKAZ1cLb6a6pvFaSvbLitke8jxFQou1dirYToBRWeo",
  "key23": "24E4NqEg9UJYtedpzJRNke6HZyagfZfVF9v85RmpLvQtpEX2k3cYmbEDFyubBWbXZvp9A6LmNFogqpvLpQTFW397",
  "key24": "25d88pJyeQZVQYn32QSNrzQtE2vpHYy5tCKrZpHTQZx5HR9jZbvhvs6UKWn5wPTZ8AeX76ELyk2dbDZgPBLugRvT",
  "key25": "3Wg8TSG3kb1BxMHXciQA1UCCuvZh2MrYPfanTNn9mcb2izy79c6Xwsyfzk7yL3pejWqDD5CW6hdoryFaQmc8BoAp",
  "key26": "3DnPPfq81oaGqEUtvx3BZgmHfLdH79d3yN9o95UBAwmgRvx5iqHB7J1Y8QGLLtDTiesJbXL9K75FTkrGpWxrieEM",
  "key27": "66g9o66JJksJu5PzGx65DXJv2K7hNCyxxnhkw9WcsCDdP73vULnPQijQJ5FHMLsdWPUoAPKnTPzEWoCRVgaEPn3Z"
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
