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
    "4zM6AQxpn6XuqKtDK5BihNGRQpb6eyCV5rBfEVo7JQaTcTCVY7ML2XpHVssYfzsRn9DvS85kzkEuHtEQzRqCDjSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tb8iWTVgZ137aUeieHgtZwjcTJoHS8p2PgpPFrNc7NEwfMdr9MSKiaXPFGv6ZrXSnHQR7UUUA4te1wxkfN5g4k4",
  "key1": "44rTZZHLhdB93KtutpfRut3dp8Mtqwub2dZRywmtbXFXcvfBj2CHKES6ZNmahro5retaEueqmZpGEKRn8Q3K4mPr",
  "key2": "3mVJ3VkhixcDaCmgfA3HubYP7q6ZyHy7Pe2tgfmRYFar9qhmqSvWknVQ2EEC3LAhbasVjC47E4BqXo5PELykxnr4",
  "key3": "3wCAHAaL6STCNRhfDjfDs4U2iTDC3Qhd2T41mi1t22jiDss8RxfPjiatF2YQEeouTXxLdwocFsKVjuvCkFU1Q1P6",
  "key4": "3fAafK5j17GqWCd5putTRZwjgBeTMtUubcDFGcpkFg2sd35aQ9FEwzSg8Q6FbJ3P8isJbedBuxh7QW2VGuRbcCfE",
  "key5": "2kQ6dikNGftmRSQbjuTxWsfXejYGFKuRpRjt53mGRir5anbWXJ8gRs1DdJMi4jbuSpVUsnjjDTSkFRhquyPU19uB",
  "key6": "2yG1ziYwEWjYQgXja1hCgmcNsT8bgaXJSXpVcu49vbnpckCfdmjaSjddb2SjbXg5TDmsTqJDSQi8rH8AcMUWYiRV",
  "key7": "5ifZP4WpSrcuj6gpm7sAvv9rSRSzTYR9HcKfCfqDEFw9h1PbJvKepjHwY76oCFqNsMp6wPEvGW5oMzeLneW1uEMM",
  "key8": "4fjRKjH6468wDjBxJF6KMUMZGm7xroyvUaPpYk8x7UVzBWdznMP4DH74PiWnz9iTuAj7LtcrSfVffTXGvbkVGPJV",
  "key9": "2kbT4pE8uAYGvMtnfdiniz1jebsj6qPmoMLkS7vCR2HqTkBZczryY97NcBxDMt3LwB2wykKSYJ1kNUPqdFBeEY8M",
  "key10": "3iRGpU5ab3Z6sZJsyC4Ta4nEjmiKYoMC2qQzbBVkbHxzNwhjjbnNB2MpgXUa3nbrx9bnv6YEudpa2TJrwTb1pHQ",
  "key11": "2CZQK2AptwKxLeAkuCvAC96DfL29taHUh7n4LYngSvN1NnkD5r2QD4ecFEzLXr8wtFnpWd3CuEo6MQ81KjBCY6Hz",
  "key12": "VTt2EquGk4EB13qamigWoR7uZrdU6qq8QjfEwLiahXCKuEqViTvdeWCD12Hpa4axpn7EesNjExMsFNYrLg6wNyT",
  "key13": "GH8T2nYDhCcumrnoVGPqdxd6PYq2ZoCeeu5HxVfdLvnpAZ6zcHYSYGtjAdfyTxVH6jCPBEEH6tYRcnS93bWXqYi",
  "key14": "3rLnMwNMQcsm1gXJFPdNf8tc111H6ecbyxKbp82ZLWC8rgUv1NbEBGyTUuJUuqjkg6h5xZbMmVoEsqrVw6vLCrFv",
  "key15": "4rSoAne4xyytqHg9W5g3WHcwTX7WRRXNv2GJnqa4xHACQahWZQKKqUf3GXq6AufZ7oCC2yJ5UzSR8UMbHzY2x7Sg",
  "key16": "kNuGReuFB92tpXg7JpSWNg6pKXuXkAQCtQUPNfrM2iq21BDJo3WXiGMyucMMeNZcikSoj5metY7Ft7Qb6sPX1GT",
  "key17": "3SQoLnXotBiy95qw9aXx37t9PvS5GnNCqA36khsqi9PrkoDxX3V9aVo3HPWGRaUW8R2srqZDrYFFB8JigL8CfN1R",
  "key18": "3dLr68bzNDjvvnZV8tmXPMyvBinXWuGyQQHNtZUPfVqvtzL7YNjoyovSKWi7dA2usj14otGAqi6wXh6i63snHKxF",
  "key19": "4c3SkBvzS3yetVTvFtQuMWioUJWMSXLn8pEq1pquhJuAT8HbCBNGzMvQR4ZBM8QB2Xgv2mVbji2s9jQntE1fW2xc",
  "key20": "4Rbzpdeembr91TDMQBVSh21bmyAFS9cnBUihTJo3FSsASJnXoPKbAWcVfmcWRGrmr9aA3KmBsiN1Ys6dKznC8CdJ",
  "key21": "CJKWWoPZfbcbza5RPb5YaWDddVGnD1CiePU3wNnCdGTAPGVhyTHb8Yn45EPGc4qA59NRyN5sAnP3JB94x1xCHfD",
  "key22": "2v6A1xDD7PsVo4L7TRSyxgshyN4FNYRjAFAHX7htQJFvcqWWkhoxWfcQnLbgADTZhYVmveoiUhEfda3nPbMKrPQx",
  "key23": "5UKeymiQM5Q5iWtAQw1HMsScYMAZxMEJZu8NnLAUyMk7DLUy6YDuZznzBWm7iRTxtTDyWpLgtuDrUJ3vVoqgr4VP",
  "key24": "4Eq4VY1ZicM6AxuY3rVMbJuNGuppX66vD59FAcyfKbf59DjVQGQE9P5vvbcX7JKRWiAfEFsz7wKSdgMNBEyD62Tn"
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
