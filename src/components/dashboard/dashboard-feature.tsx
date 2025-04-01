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
    "4aQCQCMoV6DRfZceqpECMUjnjsytGssMVFcpZCUnwMbWNvNXD5JtynqRKmUbfeoasckdkJy3igncz71kZA2xuW5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvuPVzW6zZ4WxK6UT19R5TnBQ7yKfJb1E96kPwBytov3xJs6iDF5VCkrS5AwqdHq6NtKGdikFp5WbJY7c63bZ4z",
  "key1": "F3PrtWuL4aJupNeMC7T2g16P5k75ndRDrcAqtwDrJX1aPgnErazmZZN9a3JnBWdPonNPKTiHoJmagM7FFibizuN",
  "key2": "5KWeYHcam8wUQ8vhi2sf6pcGmejWV5HefyWqJkGc6han52pgDuGwRqJo6fFcEcCpg3iR9aML8vMEJ2E7uCKN4Zgc",
  "key3": "2cPYDGjE2Hpwzmqwzctbch51s7PMijYuUBCAvKZVxejfHv5juwudJup9CkWP2q4BrFMGMKC2Df5F6uC3gKiM8phd",
  "key4": "Kp493JMFXRTFddv5a5hKKZbd6Z79zZsBgQ2VQqKuXrp5eKWrTvrCPRRZTHPek3wNA1yFdkXRxDFiQVqKY5PZJ16",
  "key5": "3MQmC2qBJQRXVGYdbBqSgNZkgKbp45YJEdHqXjGxMukdABdXkWrhoeNPdVgH7cqECvPApSGeiPTECwMaTpFGdNLM",
  "key6": "tuSSxtPS4hStPnjrdDd98h1xHhZprbqe8qy8VR9y9KCcSXti5BMhYsvfpaecTQzv7FF9Kyj3ghfd6vhiU1nDuZx",
  "key7": "3ZDVkbEJewtfCa91G3GEmsGAVsiiQk7SkKxUDHQTSxHNZRwQ85dV1AMND2rssQeX8RH2Ft6RXNj9RYZhMqSqmXxd",
  "key8": "639Cjy3JQ1Ca6cscaPcWciAdZhsNWUsqj1q56H5xH6RThRK1jf97Wco1rYXBS9BFzX2Q9zPZ1UxS31oiMD1hH83L",
  "key9": "8rAVoDDK5EkqP89jiH1j7f8VBHnFVc8bghRR37xd3vhATszEn9CHCkqdet7Z8keUbvppp4ggocKKXZAZgXBZupx",
  "key10": "PYy5g4xSbq3HSAoBjSVzkaNBx5fjSrp7uUXVXDkMmRAtyMjkg11YhYsiZEy2cs8hPoT5QFSj2gP3HGPCXB88epc",
  "key11": "5okfxTX6DshvY97vaYGoJS2kCyAizmuKuzXQS9Z6VCLHeNcxz5xqYMMkL46uHKr7CdVmvc6VRJRJhUkT5GKS48yS",
  "key12": "5ozXpz5r7ouPieadBEq2jwTXtVLLt6JYgDRqQVQgmurMApEBBFw8d1CGDSv4ZPemMW7RzzGdRsWgVLMYbZb9htfM",
  "key13": "5FMkj89ESQiKRLACygNDpyWUyjLwqWTbaX4BdBRLf6P3GEpmaUB1M63aPZZh6ioe4JYyBFDJ5gXAJZZxQpgzPnNQ",
  "key14": "2mUMv4vFiq9gEbY5M2MEACsKYZrJSpsx7hmTi8NzDLaC8Sv7dcFV7CCXyvtkqGig9kVYMqh1USJLb9RWXSuwY6uX",
  "key15": "3rDDEJFdQU8bpBQ3RSNKFAJAGE1VXf6RFtUbXRcsoM8QJQewNTnkzjck3PUM5m2SNjQx6dL77SLhL8SPVwnGaAon",
  "key16": "5kowg19bs56e5pVxB6eGE4zCf5k2zvD9CPM1MD2SsujnAckCYXkWxBmMM3RUWBcKaBPpASV24qSdsZ8UdBbBkuxq",
  "key17": "2fV4JpFAELqCgZ6hWjh9ZVt7KY4oDnWUMWksgRz6LC6Hi6mLhYBC9ikwqrqLsmn65mHW2b2NWvYVt8zkSwEyD43L",
  "key18": "53HkYSjN4yKBU6FyVYnR94aQkdS8hPy62QhNjW2ZzS5wZkR1g3X8Zg4sYEjtLJFvSTtEY76wnKtr3n7kGKi7PyXh",
  "key19": "2UrkmS9h8h99EcWMVhSoyXUiwQbZfeyf5uZLWeA9TJGynQY5ArbA9f7deC9P6jDHs6SBFbhpKSwRLq6SM5NVuhGZ",
  "key20": "yczHzFTKkbAjwRiCUTDcwSy66oY2jY87jeQSWqcKVmtDAVdy72VkHFeCEyNAN2teFTAtvM6xe7Yd64zS7UaCPmh",
  "key21": "5JU1sapaaDEvhR4LMMv7gK7f6hXGpgi3ZpgRwcysjUdArVk476VpukGVJumJd6u2bYUds5K6cqzW4XwYybzQdZKN",
  "key22": "3vVuSLD1YFKsiVnhZRuLAujtKcbp6dPg8eom6eLfXgkCqWoExZV3WizEBpxAmpSNjkM6T3oAkW3We31X1cxusgjb",
  "key23": "3zQbceW186w5gmY595xG2Hh91yg5wECUaHzbFoqPAcZEnFXG1ozxuVjCyxaU1DiZD94FxwmuMdvsEPcS9He6MEZ6",
  "key24": "AQAcz7kjqT4gYWjGo7297jbcJB9GnJiBeQrTv4wXtPW4omp7ibjrzt3h968U4ZcPuGEgJuTW32sCZuvMaRJpaS9",
  "key25": "65X6LTYejirMn9NwnUhN7fLCpNbAB4dmjW43P8GGn6Xqr8iL9y1DQdDTK3Z2xQnaQZWiZENGqMJNT3BebWq6o8z2",
  "key26": "2F2mCWfvgGy126s24NjaHS4YrxrpWUhGshrfN1p8NNP9dqm1WCAhQUHCoKWJq4DRXBLT1LNuMyUbHNtrTcpiT3Jn"
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
