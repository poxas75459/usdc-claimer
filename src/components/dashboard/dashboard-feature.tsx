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
    "5qzTL4C3GJsmzwp5My3AwFAxyJdQ5mM6vScGCFMzU3tDsrpiWpG74tVZ5A9LHvDQ5uGQBVLf5koDZVdmeyHFcBsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjTx2E5nNa9VHByQy4tRxU6xtbe9avotx3wyJnCNw9ftgSPvXisaDmiMGVtzVUnnR2LYVAg75nF2wsWpnoV6U5c",
  "key1": "3UoZDWSPosCZpy6DVdnukbRAUBA9VqzUu4JNjWBMbh63UGwrbUjfFFeuhzU64PmuNSwKx1bQ95apKriok7KUfMBP",
  "key2": "gueuUP6uZf4meibaVnDCqDQ8CXxCPHuockdC8bC9KhTLj3A3sHcz3VTwHES23TgKbWxHgtUyX9mKYf4hKkLjKEk",
  "key3": "3UC7HztwCzQLypTaHvTjtNUmGnyaJ1pBDu34Togv9xmQQouKfCqCm14NYXJ7aWcornEAMPfmKUDeP9YPiz4GZVBc",
  "key4": "uYKt4xYPEj7cbfUGeS82DS3VEiusJtpD4CjcqYmsduJKV2A4Pn7C7KTawLUyDQFQGMmh8R9KiqKUPdLgKupTZqs",
  "key5": "3BTdroN2nLLbb4vmZHN8GUWUTD9x62hVqbJH7mN7a5XUHGPe5DUFnksVPmSqnXXHHZLmE5RpVP9Enov75SHtEPDt",
  "key6": "5tADP7shJtD6wLJg5bWHvyTwvYHGjKcdfChRoU1pN8rz4P3BZDRg2aGcApNtNQAH8vVNBGAGSidUdsXSXtnrmJcC",
  "key7": "2TVokjGtnrNkfH1zjqGMXmVynF5jAagxFEP1D5dVFpNhs3pstxw17Kvhfszhzxe3Fw5hmKUKqvnbrXcMsZHbNpTc",
  "key8": "4im87cj1FEcUYoH2FLAQJixwikJY1fkYNrUfXX1MRavoF1RLMkgvKiV64qpFhUyR39Pcsk8gSYck5mgZkUyPkjcC",
  "key9": "63ULFJ3zcWPKuWfiwrwtJqjycWomwC54HFgBLPAXEkCNkKn9Rfna38hpyc33y3Qhd3AvmdpvapbTwmGXCT4J6BFN",
  "key10": "5NFcn5sYBggwC1zQTFWhbV4zH8hj1BTXtx2cSeB7FiMmfTkW5RScXYiqkn4UEdfP2UCXcBknT9dJUtVx7hSeFBjw",
  "key11": "3hBadpdpoL3aUD897eDdhCAcqeZnM6mbL2hFeeKyuWh37XJGEMzd7yFMtpccq5dicHtiemjVtDh3qpVDNpuQ7gQF",
  "key12": "2Y5D8JXNgvXYqkSqGsQ1yGMH85nKpqXBDUSm2yLuNBYPAhKHDccw51yJXBcfw4hLSdeLUW1w9WFjUGMpU3M2SrUg",
  "key13": "YybAyLk1uBqAdg3pq1vSoeeHDERRrHTMemHNPBxV9e9gGken2h5s6Rqwvh58ueE3G8j4TuR6p5jnAS2Vs1JDtYr",
  "key14": "4vVHTVYkD7Rm44CRjts8n7k8qupGFZDrUqyGsKxmNZgphQToneQfeNdPcpZqUD8Ac6AD65uHESpPyiPFmih2TDcy",
  "key15": "3SDhhRHX4LVoknfPUGDZiJZnUMGChFPxqCwWH1M5es1rvEWJ7NHZ4SHRhBUayaKVDKW5rsdwxALQ7s77CgjfvRkw",
  "key16": "2242PptCSEBdZd6cYQGpS1m3W2fWgdxbSHWhuesR8vRs7GZFrd7t8yQcgm8H9qb2eHRmfJJBYy4GRPxuDdR83uVb",
  "key17": "36NCN7SuDppYRAQRPiJ8mkPz8kkHukyVcxhhJWRhhPMgi6sqGLLAoNtZwMYD8D9fBCP53zjWdS5qmZW6MdbfwVx",
  "key18": "4jdseBi8kHETTCfCtbUrots3U6rv9QmPDZpkaQRL4bWUbC64F1UYSY5Q1dLUFnpDGgW8nojdZBUkX4Z1H6CuCNrK",
  "key19": "2UZ12gxun5VhtQfEChYzvXcBgksBGALg2krW2tSYT5yPqPxyuAbTapxcnNPnstLCuFptFXFfaq3c4Td797J235Hw",
  "key20": "5KiWZcJn9EdJ1G6BgJvG566azg6z8arBU9MBn6JxXZYUV13623jBjJYH2ktZCtpowyXx6t5UNqTHhzuCtFBE8WcS",
  "key21": "5QqTsFW2Grer4om9pxkgmSAabKJY6w7vNu2cvFAc83JKw3KWuNAhoRGejgqdG8bcFfdaz2bkiLECRHLBZuxy89Vp",
  "key22": "3stmy1My75B3NueN7qBekrwEnhUJdDPUn522d7GaEGpsx51aLSpqFqA75eKN88pbTKGL4dBQTqnHXvPSzkGUezeR",
  "key23": "4V51awThkyWtVLZpeT7amNNnBd46SXj93b2HtgkhLM7kZm5veduQC7r6YNR8xHc3V8HyEeoarmPr6dYcrTdSNbs8",
  "key24": "hqqzz8kWjCm7ZV3ySWFxZpvpT2aqWPHJVekdhsR8JoPdSiZzv3c2LxEm9M98DAcgQBsPBmzfrPmq9JJ2qKa6NAF",
  "key25": "2LEQn5tJhHwnQLGxdshqHvQb7R74XowBeLXcSoS2qNpAp3vTgAC1vmSXCZtw8wBTpANfFHpcuKizHXA2MShr7pSZ",
  "key26": "4aKqT8Ej5hm7wXFKZfXuAfMhpZXEYYkXDGPjrZkfimKokHQ2xZuP9iP28a3Bm6ahatgW7LXmPEw3mXVyR7PMCXva",
  "key27": "CAFqsfU7nBNAez2kGKB9ztNfvEVCUdmqyjuvG1wjasCRTufcEceevuudzwArEonspfE7ac1Hgk4yBweD4PygVRb",
  "key28": "5T8G6qcJ6fbzw464yZDRsFMVUCKwjzAgZpU76t5JFtuGUNW3dNYXzPAn1xVLsFX9oRjktrJ1Srz1xHYkFTgmiLE1",
  "key29": "2QVNVs4ppWxYVkx31aE7R4TU7sA8H9ziaweM5PsNkbtN9oTwQgF6g566m62BJiVBHS6UKtaoE31iJJ3bX6XDLHiX",
  "key30": "4y8otDqEbgwUwbFqziHPYj6pgvPGUBDgYNuPgdPtFDxYHd5Ek3KNcz3ZR9ZdH2pdoPGqApgcxxWeAKbv34v1YNax",
  "key31": "29ApmGheSMpMF4u44N8jVL89FCydZ5ym8q6M4Q7J2nb4RBJBuWuh64xcKteNUqYwbuGFHGUnLWH1QT3AwaKTbJTx",
  "key32": "3hwZ6eioYNifV6ZZ7htFyeUgcwEEVgEdijwbUvVMmxTdZzjVHL7gBdcGveCZgxSkoLXmDLrjrPJdKSeaUuExfZeR",
  "key33": "4hNZk12UZuCznKMbL8B1CW88FDY2zq3JpuY9fo2vx9Ejs53JhbTc2h4sTuhHSxAYd6DZrvnYEhR6qUg4GZDuC2o4"
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
