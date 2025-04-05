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
    "QEouZUy6zGUaJCvZtQsEL7P9GnLQpaH7SQ1a1nXjXVDYHXcTdwD8xzSMoZ3Cv9YYNVXtKqy5mvPCxzkB6iFbwvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Quw2rfPWXacg7Hgpu5iXVSWSgFfMKMyVUyztTvNwUzgrLxF3YCis7ia9hBT7Vbke4TMDfJXZLBYBMsyDJ26GfUT",
  "key1": "58qPimqyqN8pNvF5enPu2QthJoy2e38VKxFZTvo6W4iTfL3aqSBX4ozR4BpXRtCstGeoWMd9C1ERpAXQUhtDRJyB",
  "key2": "418YVmg63SqdjrXiQ8w46dKaQ6NRnZQ12QhPsLQ7KJx1TrFBxHnBcitKd5UmdE5DwPiUGMQcjLd8MEFQvH2erMHm",
  "key3": "5P1qpjnp5kJKuidzeLgdXTbjmL63tqBPuHMmSGYVtV7rY4W4U7QHfWB6YFrs6yeJeryzJutZMzCNoVna27tbNikV",
  "key4": "TPBgAifsLWsikmzKBSM1jPSWKZd3ZkNudFdR7Uz7bHcaLjhahuPY41FHBhdy6qonHuXcuKzhh8hd58MeMKuB2iU",
  "key5": "38oGg9KDzPA3VkWnFr5GT246TdEg4BWGvL1wxjXLQC8aukfkfQdHFoy8L6h9h9qNRBYpT83BwRSWcYkwG891k9qf",
  "key6": "46Pq54FfemE31q1tJF68tpsDDpLeEQ8vzwFZqVKvuq2wmAS4Puy7f5qcd8MLBwsgsjSRJsiWaeRwi17h8NcwAYqA",
  "key7": "Tjvkx9n186ipwBqMGYuvNjaPwB4Y8tBJX1cr9sh7y9FZPoZq6p6RBTRNeFusjVz8y7w7i8gQYvwDz4P9qJd2noL",
  "key8": "49MU9nKAvHVswxuy4wdWQX6A89s9Yqw5Ab7ERryHGpZBYhkCFyvFbCJrBmcdxR6h4cdAGp4qu9cNx9ifAhyQEPUW",
  "key9": "5Edg3EFmiuS7FNdUwcBUaCUDtZGQ6bQQRHGkciyb6q8TKte2Tp4iAE4T5yo4ajmTdMvszfew5sTdApxxHkVAVZyo",
  "key10": "2vhKcP5AHsrMKP1o3sUavpueZJauMrScGsCBif1fvFRrCnGKRVyW6kJA1CWadysSg6k6je8YLg7iVztzeAyKHmKw",
  "key11": "5YqsacmjChkjL615j8DaV9DjHwgeYQKGJAHuPxdDZYhQSQpt5XR55FfRW4eFocKtg8xwXkGeG6MPSgiHwsZfjhJs",
  "key12": "5D4T4dHXQK9uhdfLdbRigrRHa1j51wz7d29M33EgVK2uifXbNJ5NVoikDLaJXJsK5Rk4CzQg9Qcbf7oGtNjGtm99",
  "key13": "4HNwArdTAmwhVF2mCB4La16mc4WhXwoBLY45FWJbDWnxSyRe7Dd9eqWBG5ypnzzFu8yeVUum9vpHHJup7X3PA7E2",
  "key14": "2SXJNHY4YcKpy1Z24X8VxALw22yjf5j6K6kWqmJ9cEnG44UqfQc6ZGFRtywpmd8ZBvUNYHWXMZaF7oPmcwkvDiF9",
  "key15": "NVi9KsRELAjEWBqSsvojB4L2v9vxrtUPyBNQREYVA8RrNYtpk1krMnYWxTeNZwAgSdsXKaJzEJZHTGZjRzPmwhK",
  "key16": "5qJXyzXzCsEjiHnmV8Me7M15NVM2UA7pJw8DfnxmbTRb7mQGce1AN8wGRRamTsfjbyw12ztyzDp6Ycr2wETGCuzr",
  "key17": "3vxJjKEUAh5Am8gHWbCTLAdQSKSRirzxdATjati58sdRdz2QP6fdU1u9txRMk7X81eUxdAzWN4H7Xi3B2q8K9Ykg",
  "key18": "4PQzGmN8T6Bm4FxYAzbascF2aR8uPBrDfQFXqP11jJwm7Z4kV1tBzELP15s2j35Md6Dzs2gu82BFE5b4C2WmbX7N",
  "key19": "3Ae7RdVM1by1CE95d6dx9rJtURtL1cWDyzKBfTmz8wDwYrsUPzKV7HtQ3QGg7hzgPLUNhtXaGQdsNCbKWRJKnL2X",
  "key20": "4qtVvv19iRMT99KzZWtyLaqGovQjhLoNkgT49uaops5mdjRa6TkeyBeHcc4AvijNQFfy7T341dMW3gwdnaSTdse5",
  "key21": "54jsP2LrTqS8uGDwQiCYZKTrC7LW4pGpWwUoevRUwaDwHrqNmapNuuYnDByGyiy4LpNcizBZrCnx88mX2hamULxB",
  "key22": "282bNz61eFkX98CavFyMWELHoTAC8UgzC6CmFr9KQ7pWyv93GdcWS54nZydyMBAWVRYwZReho3K3kjEvp5r1RSr4",
  "key23": "9pYRYg41v5G3QkbGbPpKmVguB8sV3SnN6t4gyLuPkwkUJRcQCrKMFb63413Sq8odJqJudUjWfEtRK8fxTaBpbtp",
  "key24": "49zpPz6uLjKkVgUsfq5FPuXjJiTi1qfs4fdeE8UTdL3p9sMCAQuqrGLMbwrnq75k1UsBiZLPEkir5UhDBGVNZiCX",
  "key25": "3wKThs1jwwKfVtNSQESbzV5kcG5aEpkRTZTe1SemMWrVPKhDZ3WFf7x67CLsb3y2j8sT3nH5sPNTUfNgoxCjx5XU",
  "key26": "3A6f4datfY1BDhq3Av1JVfzceaUtSyJH6xKjeBTwRRWaauqT7YWytZr6jwKhV9uQvodVshv9dYsT6QMM52AHuqX3",
  "key27": "5ZoAQF1rLZ7k4C2kxBY3uNL3dEXjo2NY8wccoKoTpStsxzXHKyyfiyuDPBj1qBrYhRSkye3DrEBhJ5rBQTYSCDmM",
  "key28": "58agwoGpGVcrM8JhktueVpY6vgg9TQ31dKVEK11zzGHMm3aTnyDDhos77GEQUynfYgu6wuAvWu7c8xtFUURbTb43",
  "key29": "5YfMa5tn3FJRDwqMF9sgxwb29mWr8rzHpGZmUy1coko8KG1e2imnta5ztTmyp5Qs5KdWbXEb6C6xtVMCBSt8i5Cp",
  "key30": "2Mncdvm2jFLc4tULF2bmsp6FpqWbXZrRv3aRUVe4QkrUiS1C1Ty3mm9dqU3bpMbBpUGtSEpgHT5m4FuacoHzx9i2",
  "key31": "5CwWQicmAQqQwXeN1DgLX75dabSRckZM58P9rqwbpbeUxD2oCygbQjF7BWWXFjYXaK22o3VLF6zVkwWjYgfQc2jX",
  "key32": "3yfvcFT4FZbGMxEchBRTashvUcXCYvUzjsTEtqooXNcNYj5Df9WMK1GMNr4DXFt7UE79k1qZXuxciQyrioRR7XzG",
  "key33": "5sGzPXmcqZQvJgDC42Ua8Cwu3Pz3zV67gPA5x5a5GS6ZJf59y2w8BonjzeJ9jwQHhUtJ2vXHRrLexjdYVJNanGtm",
  "key34": "518yavo2zDRosnfvNVd2CrvXHYPwaJVJtsgeYjt595zM4BVmZpMDRRJ88fXmjWv61zvjt2f3SAJVMRd6PFJTiMJC",
  "key35": "3SdAZETsxxq6X4MXRu2RRk5Rr6VkbgrsMFpCAaSmzBW5Mzm6WjmvXNkXLaTpZwRXadPLuEeesCF1YtUDxEDmmUYF",
  "key36": "423fU7ksFBiKyaVqzDeTvLanKPN6fPyEp1NSZ4GNnxdR6GVVYCAohz3sJhR6n1qPBqxHokMbPrBhAoRZ2qHuwoNv",
  "key37": "4njBheDDzHH3U53ddWmp7CvTDkLUjedQJhQrc2s2aXeFwsLLPG5RdsY5MJEb9kGEYb5gJMxxtumSDHJq58EuXggy",
  "key38": "3Q244nFW8KfRdg5PYrG9Gggb9N77tUQwP71DXkyaVqvaGtfNDjzYTZAGmGLLVEore7AZ1VweBkhHRxxTDp7eWWqX",
  "key39": "4NDVhvQWrRbB5NXiSzWSnLns8PBy97gYQxYSLXFmBnecnY9PBGwHjnxxdshBAe1GsuCApVSQnVeSKrot6XUxcVKc",
  "key40": "5AnSmqHqPY3GwwWKNjQvZE4vDah9BNgUgLdSbxDE3HXZfktj32b8LspGyEtZUaHcn5wV1rL56MgtWp7CAr1Xwa4n",
  "key41": "3GaZo1g56y2BWHzd9PpNBpNCU3ZaSfLGcrAHsqyrkqnN4Lr2SaTueGxH14eWaPt2LMD4x92PoaQZwmCgmQiZVfqJ",
  "key42": "4zDvSDiKeTE2NwArGxFZtNc211BYi9jh2gDGVcgxgQeiSFfSe2du9FUD3AVee67iRDcPCKGcv6qWtB7x9aMDH71Z",
  "key43": "4kzehdUmNQRtaU1qS7MWYa2wR9BoFrZGLknhCAmrXdKNYkV6xc5T2cWDb2U9VJgswScHub2yxrNYhLR1d9gbzkaL",
  "key44": "4HpgANXKq8ZbRmG4JVxqpuszHsZq6o1nDmWxmTtF4VGGX7L6mCUUvSMcFQPvfHTuwFD3o2nSj6ofb74ok1rM2iBZ",
  "key45": "5Xue9Q17dqPsKEPrD9eyuAZSFaeguEE9XKPUe5uWVGyPmyDS4RxuR3AVQwJaXycuDfR1i7jw4yACZCvKh7DPs5wS",
  "key46": "3huSwfApeuNPDLc2kFFQUiMwnbuaLdzB7S6k5GXFS6JqbpVUfM8sG73TbRcAaswBWS9MGTydCiJZ8irg1hq9V9Nq"
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
