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
    "4CkVvyxyMkA2BoJcx5zqtJ3AZMbUqQuywCffvmzHkjgie7VDb2wsyGha818C5GHhNq8zrV6anMSKVELNhp8KtoMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMTHBzLnS7GCi886U4jNr8HfrBSpSjNrCHomRwB2w5hKWa2ZM7cN4XSJywRJKd9jEWURsNSbycAjm8MaeAQgXrx",
  "key1": "ep8V1jCfeYZEqRifrbkEA7uVmc12v3ysXGKnydWeQdg7PESyv6M49dVeBoLnt76tQyGmWyBXZ15frDjKqT1DyAE",
  "key2": "2MP4uKPFg8MEHDBTpovkEZf7qMr7WFMqjDxSeEPkqSkJ8k69czHS7rtdNaAJiBAvfLVuLWN7Y5t3MzHnpr5wV7Zc",
  "key3": "58MEhj3gEj1G7Bjgd85r19DxUkJf2f6c7fmuGjbdqvsWkAMNoYTyVx3XY495NA2BfZ6TzFjrCHN6sjGCk1RQN2vY",
  "key4": "5rbxfKFqHnYfShf7Z4AZzQqNHggNm8xFyC9R87ivGE1JmdL4742KL4JM5d87RisywQNNEoDHd7m85owRr7xf9PHw",
  "key5": "2U2e4Nej9yYPidZLn1ikMjBkCDAUV52spUXGfjhBTDXuEhQKKH8R8GQtSCAwfRLg8njKwP5QQ9hLExpPVtp6LJsy",
  "key6": "5Ps5ryEwTsQyWQRWJw6SJw9iJQAgdiJ9EpnMQtG3ieZmnPjsrURRfacy8fqQHHy1Ata2p19FwpmfCDohE8rAJgFq",
  "key7": "4GWsiN38XrbHCWEzbf9EbbKSYSo7Pjgx8yEcxW5UsSfwXTiMmuxhpXDFDXNdgWKz2fdAuvimc2o4Npa5W612vvTe",
  "key8": "3wLYdh71RqDMyJDu2y1XvrCfAFA9fBj3L4cE3mLXgEEfrreo7ud2Qm9Gzc5JLsg2Dr9ycLQEF7FFaMdNPzixTTs8",
  "key9": "4qPnJ35PFY3hgdPaoYLMGGCB4KgdLcYCDNYasD9fpk8MGQRjvmnMYc2c5fdqCPWGAGFESr4j6xSawQY9K9cBDKDv",
  "key10": "2v23E6VJrNDG3hNKs95x2uRKSWzNmxzmpcQ1oAsGeFxRPoLA2kiojtmxncN2sxyLHfzZekK9rbZTyYCjeGvYA5Vc",
  "key11": "3C3tnUd5R2JY41R6dpf7X3UF4NXLFyvxXGXojuzVemYSh2mPwuek5amBDb5Ae4tNRyyf6LEBJ4hURXq1dCtLSBiS",
  "key12": "2TT6L4ouuR84HnN8Liy4HAVUCNoZTgsNZ43FAxCyYSxZsbPtMop1T8iAtjDoNe8fwNiGSfp6XeQRzrJvFWHrusa8",
  "key13": "2Kp9DtjbCUTiNpsjmMwGi3FVtuZ9X1zVe9S1ji46Ax81XBA1wXwrbVoEi9HTmov69aiEw3DxUKcjxydT9JHifKRb",
  "key14": "3j2Jv14jgNnDF2eGh3hoFFTNfJZs1pUYeZYsPdxbZo2m2JEAUZGwe5ekS9yETwM8E3NbHJePq12pTXG5tcvnBtUA",
  "key15": "4qqqYpSkVX2haTnz5L9keLy4Qp7hGrjjJSvvwYXaY78vCY3Y6PPdHeDdiLRvnkvkSjjt6GNBaraKSiYrVp9gdFP3",
  "key16": "hQR3GgrrXfJynQ2qdizj2YCqZ5N7i6C8EjzeXJA6SSDmoTvdfXq11MswiqqY8jh4vVJXWzG4oiibxrsMKwEnxjF",
  "key17": "TWSqo8FG7VqSEqiiuotMpP92qkJP1FgPzNE91dLhDu8a2NvB19sjrojtdJexY6LcmFtwGGanZsY2233qFp9NMxr",
  "key18": "2KdgCjZXKnagCMW2eFJx5MoeoJP2cesFLfT4TYJeecEZGvxr1SQ2qSVZwSan3GFxNZ3KdKo3GtQLeiRN3PKkEagK",
  "key19": "4S6wW9HZEkkkttSb2VbtmG51xuRSnkgwYvwgf5u6ibZdakKciizYAqjn9DY8HeKnMHKeijfvoWncuJVh5qh68GqQ",
  "key20": "Bcey4aCzedHT29vpDSL9GNMxigEAkkVMmK8tbdbGbXeR6BZq5iFX8aSoJHNDsYUpWtRdk2BsutXsuY8H1QXXiVM",
  "key21": "3nksb18pYy2fkahnxm6qDFK39HUmKcpRSNCpnmaeoCNTGbZZuE72HUPu5Jwufi8TpwoFTJA5NtEqKA91q7Yqk29F",
  "key22": "GQzt9cMdrQh1ogwBSyzDcSN8sxJCe8NSAc8X2x31Bj2mmDyfAe5ejMed2GPi7Z6JdV44VW3GbTkfbnMgpurtCoG",
  "key23": "24sLGQZYkCoDqjG7NEjTMbd1mSUDi4iKNCooxvDMm3HNh8xZkuhsjyfMxYeLZkbphyawKVsG1LHTLmGPv75q4XUK",
  "key24": "49zsQp2FmMpHVhDZhuSsfP2k34oBHwvAPjYLYA5prhvdeVch26whYg8D5q2SzFWEKrauBS73Y4kmeN3amuRNBDRP",
  "key25": "2yxH3GJVVMByuBKZSnTGgb2sptYgvogN4uKACPNgwCCpKU2Pzev61AoBo8Rb98UqujGKZ62hbGSGfwm5HiDpo6yV",
  "key26": "3hqs9TRYakBbYcscxZF817jJY9zw8KJWQefdcJpytz29vNH8bv5rgS7cfe5Bym6yL4pYK9kwWjT5wmfg1kz62BBr",
  "key27": "3vGuJUEJXKnzY8FMnZS932xiVmA2UU4uBnB5GZjsyex2BJxTXHWtKbM6JEpjLKdR1bbB1d29toAavb7ByMqWbwPB",
  "key28": "8rjmaFxVxR2Yr4pTRAggvY7WYa38x1qV5TuQGsHSwrgmXfjGbhvMZ4hb8TSVcqTN3H2kt1YomozA6SM3YYJVYrj",
  "key29": "4YQw2CukGtKk8szVucy8BMgEMBH7JwCLUytuANNifx4P6wh9Dhn6814Nke2va4bks83QPPV5JgGK71nRPq2Dw5PA",
  "key30": "5YyqeV6DqmJKbXoghcBczPrwNssbY3qtVQVfxgseCw5VWbxkzncMZU8c9fNurreUHiZcw4tEsPVM8jWSvadetKbv",
  "key31": "32tUZDVaUZKfWTMrgYxUXQWmCH7HxfdJcvXkXh1GNMEpF9thfwZhQEfSNeNrtXvv9uVSfHZUUFEvtiaZwf6eJcY4",
  "key32": "3C2WVtHqvsiooaPnW2A54cGrVHcknqZs55LS83jPoWQMNhuojFuArULUqVSpDoGkNDaGDufhUNjHiXHv2Y8FhHij"
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
