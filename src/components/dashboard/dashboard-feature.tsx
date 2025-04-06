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
    "4BTF5CrodkgitmZ7SH8KUmD3a2XNkzMs1qtk2mZSKeLDsPLokMM5iwen4c9yLGu1JBSUtWCd8tXJAcoxBx16XiPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgPvjYsNduYECj2cyYWii9diozC2ZWrCDcsf6wSTQTyWBHtCQvfuZ9hPAhmkDpikFE6PjQudNDDSToDqirkcTEG",
  "key1": "2of9nVEnqaBKhJKgxQGWNK7oCq4JXZSesRR8AipdEo4tzFHERFSEEYmQg71yi7rNC3TW8t8PnMVTwKmDqiajxg9W",
  "key2": "gjCTSFPwMwvBbPt3ABiw1mJ3MEU6ZPFfCDh3V6F3MrEZmyu3ffg9Tkv7xS3cUBMpmDnRu8XFuAFBSVo4NDMQZR9",
  "key3": "5XWUHwnZoTDJWuYU53aNsxYFX1Zhf8sHCncGr9roosumek1ytTBan6onL7nAYeTMNKs3nvpYvaAatrUm1yYD2zwW",
  "key4": "4sJQ758bdfCj9ABvvMmV6v1mWRBh8p5rAuWenEqTabXe1jUrd5KukQTsDRGqCVcsnLipLC3ofwXtw3qLsRr63Gdt",
  "key5": "4h7dnTLb4oRfW3JRZFaCUEEhFhsErdTzbhmBpkVXeQuKL7wd6KnLpqac7gZD8UxnLU8wGSg2fuQ7bzNNiwNpJqn7",
  "key6": "5PQmpDL2CfQDRQaksPNBKKSDQ7tmCXr2qdoiuAXr2HwkNTT37Zd8sp5us4Tohm1gbbRqetqh5DnS3C3sdkT8TsvS",
  "key7": "2T59pzykuZGVHGFQRpvdBz39PVHW5G5jFSL6bTJzu9YiVGTXVvmraGrCUJuedn63UZdi9juAcpPJveypMXViKa2M",
  "key8": "4ULmSDj4ChuZc9DLy9TYeqW1HPVV21NZccuXy9ujhrbfUM6xXEVCjLNnHorKX57pq9sDg8bgwLaqrYP9tJrT4oEK",
  "key9": "5oZg192K2NPzbsxuDFUZmbx1npTFaTMCwKnxvPnvevZYFDEGQiCEYXu8x1pbVKEwMQZzPvp5RLiRGc9L9QudyCfG",
  "key10": "51ZisUiRKJeLJertGLSTaYPAVfjhahEzW3W1aB6gyvPkToMjniVjfJG7NNLVJpzwCc5jztrdzjPYUXrYMEKg24Cd",
  "key11": "5qsyww4bpUqMEV6YvVgkuRGxVaJYu4TrLqKC2i9TBsDcMHjnVr7LSNP9HeEiNMdKf9J3FZiGwj2baZ52Va7pbx3E",
  "key12": "4ugWqcUnPwneJShS4fmSidZXzuFKpjF83kQPhMjWsCQgZcBAXup1LaXdzVXNDYGobuSZaFPNG8Y8onhs1m213n82",
  "key13": "3vWFXZVbpk1QkNARekQswc1QB3ioEW3JCjjFFmW9zYdGzQgp1jPhs8rwJkK43mmsmrxXo62sr75AfGgp4bx9hV1c",
  "key14": "3u7iiv9YrZLpSJxFvS5iCCqz8iyuCRVN8QsK2Mu8p9TfMkCR9D2WwHNdx5GnkGz4XUc3YiUUTaTaBbx6oK1LyKaM",
  "key15": "271kUMT5W79ZuPqc3dq5Fw6v5zVWSRFVBn4usWN8XAsM7pdMF2r8BB5Qf7cG3yDgSX7Sk9SHa8sotD1vwAsbwnSB",
  "key16": "zYbB8cVznpP4g6efDJruPn1gMegyysJxnYDca6KgJY1WqTrNbNCiNGf2qeGdrvtYjDGmPNqSejrbzxgEivzK73H",
  "key17": "4yzsp8XPkpfUYHjhpYQfEckc8JL5WAhqDptKMUwjMwjmXh9TBg82uiMTHSdNZ9MGQsHMVcj2HmqYqkKkbYGSjbw",
  "key18": "2kxnezutrgMtNkFXEvNEAfsCEsUuKetNR2WgmgLY1HhMvHS9FSuni8hqTB6qiYPAxafvx3egeFtJvftM1BNqQLSH",
  "key19": "4cdSv1co2rcDMchoSm5E5MJMjfZDyMMqD2YFV3NjNXokUnvt3L2vnZVwJhN3tNwEumDb7haQU6BXLdFNveD8KKef",
  "key20": "3winJfWLVmWDzZzAiLcWk5oDg88mSTb8hEo3va4PXCD8waT47bfKkBX8Zdz2Hx8wEhkjfv8DV6JK8SxXLj8fPncL",
  "key21": "3HMcQJrrF8AHAQmXFbhErg7rSkaU8o1FwMYvvucjNefLKBkLkbebAAWv88AC3i8DysvZKVeaE3GQncaRqHHTKgxz",
  "key22": "3uZVDix5hN5ise3NA7C3NjxBHV9TQwQsDchd8g5NQfUZiaRpo9LUQDxsiiDkXd7Zb6D9UPjB8tHtNauvsjjL4H7T",
  "key23": "4QFoM6mYkMTABTXQaZ5oYu59gcBZZLDv4VHueyqVqYqQqc3GU3x5wHs5aFEZJBZnetn3KkS64FP4bxq8JQPfx7Vi",
  "key24": "4e1mbbuE2c4otzkCa74xs5xNbWgAPrLZMAMtBgEYPZYmVuZupj9rYAAezoCfWugzMH5z2KnznbQkbGTGA6ZcB9pT",
  "key25": "2cJBrbgoB4D7fvmG5tnYed38mDd3E9KvzFWyxQLTyzzSPmw3M4c1H8Luj1ayHX6Ay4boqqAqi4andkRUpZU8o6sV",
  "key26": "3zTKUg9rpJvYYYWrR3KoQE8LUs23CSWKAZ6Ftm1d2QmkcV4x44PuQqqB35F9rMTnujc8hwyTTe8KQa3zgtWvv2Zf",
  "key27": "55rZNcesfMrA34EzDVGRUUi2KRESA13EQSREkDGPzYu4tNkCJu7ZiTfDTe7oyki7WLDykGjJALn9uvGppepEWuJK",
  "key28": "2bjyab88GLemuPaNiciVg4Y982haGQRyapZe6wiQtK7w219J92nNy7Bp8oqMB8kVjkXsAbNJcJpuEX5JhL1Eg65P",
  "key29": "4qYLCggZYRhW9JgWsrVLb8kY6L247wPySinoymqF1gejyVvuQyEn4GLn4aQAiEgAoSAg9eNhogRGAoU45DbuF4Xf",
  "key30": "2kTYGdAgbZYyR1j3LiG3wxzULQjwWFE7dCqsNbGJZ9BQZkJim1cunfMd6wSfexQyDK41UjwkvKUgq5fVyc2e5Xuf",
  "key31": "42XvH4FLBm6gWMNDq81tN4mokATD5GJQGUrLHFd4HJoUHpbobJCeWrrv3QmbhGPDq6Pu6U4VFYARjgFAdCr38g4K",
  "key32": "5A2azHS7Chzed4kqXpZkKpyZCr958sMb48YaCUeZEZ2m1M8X4Mayhtfd3cDUzEAZokNn5DVsacZXNnCVeApLAzBb",
  "key33": "xHrejw9eKmi8yerPNjbbwYUtL56ZXJJw4hbsdXPUuAaNNwcK98oTjU17k6YAsjECrX7NHmM7oLZAztZFtyAwUfG",
  "key34": "472Q1VSeZX9XkxjLMzCbGAwhP3qj3cVyGfLUmYZ9N6hCeyWhKi99iXYgWnNyryXmCyjRLUCLN3GEaUCTXnWrLPP4",
  "key35": "31qBxygqN2QhCirse2o4HwJdTke7rRoMwQUXQfnLXLTDwcQyPE4TXK2HEDwgQJjWiwto7vNNBTaByHC7aAnb3uGH"
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
