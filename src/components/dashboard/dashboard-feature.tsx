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
    "yaTCiW8gt68xU9PWCAHhSyMBMiMRb7ZDmywGwE4FxctPJHKkKQPVUHzbFmzAeLXRT2nJNNV3yLymzAjeEB2aoqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeFYCHC3gjmPw64u944RahcA2ykySjTTsSusX3mmGSr91cSQ6zwzuQ4CegRCDsnL6CT8AfEcSeEpVTaJ4UodHUH",
  "key1": "4mCYHQUyq3FoSFFwJuDDdFLemLmUAFw2ENzQwwQfuHaJxMW1c79KpGtxUioo3P42UXhJgGE2wgyNepWrTFUUKu4j",
  "key2": "3KLkE8aMM6yyrtcuAnayP723KJgLxRmEXtndhRyvpyjMzvySXM7mqMLesCQvyY6aaqiHvA976PRDK29JyBNZgYX1",
  "key3": "NR63bFF1mJt9CnBJovVdqBRemGPPeLKV6ZuGZMmfZ8vkqvMCFwuXV6zmDPbHkK6a2rJsL8T6gHUz8TxRYHJHSK8",
  "key4": "5LhagKqsDnzSwc3ab9kQ1aa9sZTEsnFPVw6aQXLwQXmV6P25318NTSYeBRv1juAL7QSx5Dv5cgtwBRc1NC7BacRq",
  "key5": "4V4QWnq2P5xQqdW5HRyKCtCFJwRbWN4UM55pakirWc59iyFh8NTa9DkbH7DyVjyBKVHaLgRBYYQtjg4h5vXQjR63",
  "key6": "CYXVAwxbzU51qC5QsLjVF1tGGpNavFsUu2efyWiJ3i2GSATDzsHs9Byouh4fGq2Riiwne8GBS6oka6vFzST738q",
  "key7": "64dscH1QtDGTNtfzS7jnMXck954kNeJDGRHHoQhXVFZ9qQFvxdkrQcThdad7jsXwprw5nHr9pcKAtKdtnSbwUjma",
  "key8": "sMKBtzctC5kNZ7WfMraqP32Car7EuKVQk5M2U7XeZ6CmoykUeqPzobpXjr5RygWJwdByUfA1XEBKSpV1hVTUFqT",
  "key9": "5vbsRdxfL5GH7jT3eaGYHYqEAiRwFa4bKwFp6GF5zuCHNTY2XRJeLWLWE99ev2KzFBEkp3VfFT2zwUFuPKBxsFdN",
  "key10": "2Nz1xAcGCNvcTGUgsenn1id1vMzFmv8bVyh5vPyrFgkDa65LeJbmu6SRcFMiy34xnmyNAh3HHnbcC3BTmHaJNZhP",
  "key11": "28cV61VfNbH7JEV1LLay8DgwQ5YAy7dnwxYF47toQWebCenDPdjqDvEtrVzSzJLmdYXUfVXJmU5xyCeFTkw21EzJ",
  "key12": "M3zs5KRj6XNpk5HXtDp6ey1j7AL3PEH1rKyQhLRat5nUkyHeMfSpW9sZUZiZSJCN3thgCv3YT3X7Xf1zG1XF47v",
  "key13": "2FYndjURjgEF6a9sPnFW9d12GmRwDZrok58T6n5F72wjahb939xZdX5uXCrRVHvXwde1kDihJjmndFuXKZ6KKgK7",
  "key14": "335vhz2JgrbSv7K69ifBXnhzUZ8Veaw3QSEUQYbDHqpErs7N2bK8qwF5qCS3JCrvNrsDW9xqLXePC1YJTHcthGTj",
  "key15": "65A7sEPLzUBE9kLi31sZLhF9ygMQunuUXFq5FomBUj5CLh8gmonuqovyqiy6fd47uquLgp6XGNrhSEEMvRvL9tRW",
  "key16": "43XFXQgBCGTsTkz7uXLJ2pTwXbztHywcVwrrXVgYKShF2eNqDBcuTSsG3RRiZMdHvTHiXjTwujmaBbwQnDahQLu2",
  "key17": "4RJDTEdRHy8268mS2R74jNyqXC6M5ouoM6M4b2DrYSTMUqmAqThMPU3UPfwb2jiZsYnXN8FmseE9neWUYjCUrBex",
  "key18": "5y2jdFHidNtFo4j9vbRwdNHgkh3bXnaYg6P8jrsU6FXZhYvb6BZYMhZLrmggfFvVLMvyL4weEsepPQqZcp9rXzem",
  "key19": "4eGeQuvdNGTNoAp6YYSrsyuQq6EQ6jbg3KFtgdrDtDFeMMshASWpWq7SDgVaAWVXDV3pKwNVw9mcNQ9CSHTuPj42",
  "key20": "2pZNXwDdsFz64KQKHKHpLerq5x7nTed4YBSCvAwKNFxtYVB6ruabAmgXVJNW3zDQqHRKdSNxCEoBdPJ9ZvVGYe4E",
  "key21": "5CS8snpH91bDbcdWA5SdJo3n3QMBsok4BbpvBYtcoQ3WLwz2G1zWAi57oFiTuCVFrox265Qd1EzwNj1qapz7Np2s",
  "key22": "mK6Y8wP4FstyTyWFETHt4QwDnk3UByfWgeUW3yUFiVd4W71GNjH8XTwKzvAhNezv68hAWEwVzdaUAtLvMUrVjmA",
  "key23": "ZhbHqcew2sarcAV3BpKt2Vp8Dah9Mwepowyr2nCB3X6EMGJ15YBQZsPMEdQRp5AYEv6tnsxsVUZJC5ZVUKfmhzV",
  "key24": "2g1dRZZdogZXsTMBRm84JUR6SzkjuaQf3qp9qH43StMQY3ofdJHWAWR9LUuPFUgF72jcg8xWSrE3yHJbaq4YyKQ3",
  "key25": "3cWyn1gyowgP6qaUPPcW7UpKCmwFqRpDeDhgWsU1vLXmAf7CgnjMmTuzxNm38TEtM5hKwskXyrQwxpGgX8neLkiz"
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
