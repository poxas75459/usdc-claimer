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
    "2TYtTJDfon7772HjK6WyLLGDX1oVaCE2eS7VFAtxNPrHQnQkbBrvyhoUQyjzvSJw1zbRfnnbytPjCVDr9o7WqUek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4jZ9TgaZ7zmrddb6UpQ8BnmoHEPqJW629MQJgU4Vsu4MRBgPjLTGXDXAedXEppvk6r5JP5kab19zjK2sh2VaUQ",
  "key1": "CyfhsvEgLkV9kS8D6tTF3QcofoA6uFp5FdefuEoM6x8SzidfLTDjy7CmApEwE1oyivpexpYDoSR12HboP1ALDF3",
  "key2": "5C2wt4TKL3puUuVy5XDUiEBaavGSDUug9Yev58f2kdwHhatFkZ7cxTQ6fdNcyPotq3YTtNcAAVas28t6VSN1r2jQ",
  "key3": "4RfaEhc4LHu2r6MM1xoRkFKAMXFhNahVX5Cp4i8qX9rPQ2UxB628MosPXswq2q1dLKBhz8siAQHkKEUJAHWEMxmh",
  "key4": "5EzywoEkgwjpSo1fKg9M5SJbP8Fo1pZwbNcvUpjgrD1s5jBTgFnHS8FVEH4Q46zWbpb4JEAWW2uHyxm6ySd6JkT5",
  "key5": "23QM9toV7P6xGWhprQQkYgEnCZYzDDuy8cpUmefvFbUPr15FDSUn4g8gQ5La9piUxmrFrsrrN9BK7WSmXSkS7met",
  "key6": "Z4UKb6TyN2XRPMQf58fcMbMQPMoNZyKeQvR3rVQvRrdCwybVMq9kWNw1JGqjWDptbEHFUoH7rdPReJvfdtp2Fcu",
  "key7": "5XL6PSt8EfoeRLTL4EntXDTqjA5XjPdEQbBLJFQzXYyMgWw4iSJTTvNNTovKcX6snvMWHDeV8fB2PAGijY6fp2dy",
  "key8": "2SH7TwKYxNks1XE5BJmJcM8Mo2RXFHZ4tBkvisLogZyGDmeDUUae24a9Nu5QTAJPumffFjVowxC1FjiWg9g4s6vF",
  "key9": "5jvzQwj5Rm2vi37MZYW1EX1TD7yyukLv8yGLknJ6mKQz8ewyNR8dKBMS91s2cMSvYxRksk27nu13jvFBTghjkzzo",
  "key10": "3dUgbnhA9RquY2Er6ULpKLWJtVBivEPwvN9smxAfCdwgQupSR8ubsePbFX2qNUTsQTqEGqdG7Y5ziXHoLGkmUN5i",
  "key11": "3MzdKwBTGZ2y8xYL3Nkpof2LW3vzdpprg5w3f5QSPSfLt1JNAiDziafhp8DrG8Np1WJZwz4KAQHMToZhpbVemLRP",
  "key12": "4MWaP5ag3csNHr4pN1wDY4gCJhM9upFbNqUMUEf5SVH4pGK32EnmnX9RPv4oXQD37MrFdGapp3GY8skuCPKtCL7v",
  "key13": "5Wpe7A7r2QXEsU7gnym6f39t4Z9zLsW1FgQVo5B3dx29hVZcUA6FENYw52pehhwSao2uqpMhh2nfvNNRPDCGvsGn",
  "key14": "4ywT1NB9KoQvJVNfVxCAUJFHajPh6vC95TqKemkaF5H45ezg2bfW3pCVb7KEhKDE3eUqsyEHVj4rQSbWGZXvvu6C",
  "key15": "32SgadyqgkxN3bZ5pbNx8TXyBRpzAp6eMKb9E7gRhyF6uU6tg9JdzSri1aESWBeyn7aosYQXtXqBUxjCZD95sLUH",
  "key16": "3VjHQiy8FhsJhrPxoBpC3N2idZMs9ZE4KqkaobNgp6XHu8WoLBuNSycFrnxsirddK4oZPchTk5CSNFhANq2njpf1",
  "key17": "4FviQcK75Wrh2qjzAXsBcESSKAzMiupCbqRAQyayYoTLqHu18yXrY6zdXtr4VjfwZVfEnRSrptUXQgQekoZERLa",
  "key18": "4TvKCTXEELkEtq2LKE5mV2a53Ybafjj9tCGbHWoU6hmvmyMWmzCZcEEyEKf5rT1hYhV12a2w93d67PNoWjDDp72z",
  "key19": "5ibKsv3hetWTvMDf24RbwXfAe63WPCco8i38g2gnQc4kkDRdMTvCLdN8aHq53EcL1K7xPC92hDRmYDt8k9uDK47u",
  "key20": "3SZKXYpKzDjpk7PfyYZhAfFnhtLXvS8wn9nevNk8ATaEERd89wLs36qjEX7JUZVuG5D6NG44mNYhxzPJB87WA4Vt",
  "key21": "2DSqz48CN1MYxG2srBBcsqppthtGbPunWZwMbmjBXSCCbY6JZynDihYZDE9LMW6MnXgSXFHqB2nf9rXoTXd2zG4e",
  "key22": "3QGrooWgWByCmib9Et8Ebdz5ZcqjNupvsn29AwuyP5p7geeFp2MVkaCq1yzRHeFy9pvqJUpDUPBKSbqxjNADacyW",
  "key23": "irfwLjigNxj1SWJxm8rxceY8fmmk2N5W9Y5y4PnKx9czCwprpSULHNYmmsT6MTem8ezjuZ3y7cf8XkBdALkSwKq",
  "key24": "23YXoJszvyZ6tv7HRZoVTuySwAma2ap3tVPLR1kCJfK3zvLdaeN8JfA5G1XBxxgDkWn46ydhhohyDSFLSrf9qQwV",
  "key25": "3Sp7CEpy1pj4b8BKjaVAtnKn5E2FvcJTvQ6BKeVNxmPcyYEWC4SmbM3PK8TtL1Q5z41XrPFXj67zMuS7ubjZNQp5",
  "key26": "4GbWCcVBzKvBRFkWgLJcvVketQmihRKiiLkJTYc1N1CUwVS35hotJ7m5bWG224gAAqeAm3PUtDcyvwypjU8qRdfQ",
  "key27": "4GCd3KXMozuepXjPAxRutfFAnXpActNKCy4eYFjkreex1f2cRAm1x9At3Rw6MLcHBjRiB74jpmPvmb8byGukgGLf",
  "key28": "3QA7EnrWjbcyZuXbSpyAe2bRvEq6eN7VeJsNaFf4qxTUYHHbaQLpeWfuW9u65p21T7NG3YMBeadTZKy5nhwK55Sq",
  "key29": "4u8St3cUZrB43so7dYn8RRUa3vdQzNwGMPejfKPs5vzBzJHr2rLQr1jwFyGUnTZ4rtrMYHmGVxuXSSNkL8wGc6AF",
  "key30": "3BLEymyBbrKN9VZWqgSqJSouSNXS3KbtJ3h6ydEoKinPob5UnzY6gRQHWNvvSgS1ukJWnUnfjgbL9EtWWbKZjMNY",
  "key31": "23rrXWGWY6LhjxUjfP3zvGVDnTos2MMA1y8EaiA4C4opK7F3twHYSDkzJwyayvqEUhmE46MyF2Xcqzq8vUV1GcAx",
  "key32": "5Wr5tVwzGekEKYYMp9V1TMqMx2EKTUU3B2obqe3WKgtmgFw13HtoPhqxGMRiMNPWSuEcHD6PJGmWiW8FMT59k8B3",
  "key33": "4e4ttxkXzjoXrGcyEAwNua1wba85xy6HF9aSznED8EPT4DVpYfjqcenNF1CXVWmPcCpgwUnhBUignrEs7B33Sgs2"
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
