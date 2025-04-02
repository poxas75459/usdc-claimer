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
    "QmyGPs1N18652MnWufchgBBaKR9QMbyUy2YvHfS9qDvRHYZahHZ49UYCLtmZKDwMFTTDX93waDtt1Wi9LdJvuHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B14ix1maCezYAFoixEkrTX6rjwEwb8u9HU3cbpjrH5fuGrRYL2MEthszj8qPwu3fzbEAzBm7Dz1AP9xjrTYCqb2",
  "key1": "2RXRJAkkkvP1LCTBLTX7e72krMjPajHHpeiM75XopU2YdXKXzVPq1HtaT5SYNv7W26z8nuDqGSiVziDfLux5rFGW",
  "key2": "5QAbjnSJBh9LsySYx3yUYffpmvW4dwLJLtARFyr3KwWp9BTWg8imS9ZUG1yGV6Wgy8ZK8G9KLM4hovxCNtYpZGQN",
  "key3": "2fDsZEk5V7efJZgQphpVv1meFNCZLvG2t4ktD8h7zeFTo42mMNKTajPJJ4injpQR8yxHoEF2rjrZk7Linn8YUrAJ",
  "key4": "5EuF442LZhQ3J2k4pxGKpHhEXoaAQdaLy2iyydfAbpZXpp3CVHWTuTtAU6hFoNjj88tKXFQZciAaDULSiAUTgUNf",
  "key5": "22MN3prYbkcCoPtWMVp6psR9qYziXYgMRLPyFEPDCYtH7AgiUC8gQGmnQx4NkFNVYBRwWtHe6tz5NkfD2kKhjNB8",
  "key6": "5ct2XDe7ZNd3DvuMwif3NPVrnxie937HdB8dLG4CGWaz1n3Avd18bXgiLDi6nED8MDSMV8bejPFwRFeSheo3NS28",
  "key7": "3t79pYVNK4gcxGWY3tpLLXfrkR5TEof8kj4U6aeFsN27hee2Gbq6RWyu7zz8fwpz949pBaioWmzcogywFkrDkiM7",
  "key8": "45AZX2BMdmHWCCBxu5BXiuBjDpopEza3x2D1DVXCQZ2YfjFySvaR11dMxkm5RSTsFu4WiAitSnCUNAP8S7MkHsDx",
  "key9": "x9UfAJ9YFbvRSuUc7q6bo4AjNxPfx4zjtWQEVgM53ANgoQjjEbq2Npi9ZTqHT1b4m8p6TmcZS3BQcnoDnNzukK9",
  "key10": "5eP4EyjAJ5LvTCoABWyzxJdjBshcDXHkjP53Se2jihfGPwTK5KXFTZJSRMFJdvfyGbzKe3Qms3kDqjesy5eE75eA",
  "key11": "EovhcgD1gbQ2prwD282AUy7wnbjSA9kumRRgxDibV3f5LWrU6Zzh8AU3TKZ6MdAdkUoFEXkZi9DPyVHSjdNhVYn",
  "key12": "U4d4wyc9tFmxxxyKboW2wVwBBUPyNr1eutigFp8mN5pX2mwyXfQ83yQZgspB2nkjuTs39MYknKc8QGGMLge4ddp",
  "key13": "2KZmwyGhywmfMp49sYTzs1P9kmuj7Mx4E7RPgpiJHr4BDMSLPBXEc4rg6o2PPVU7YHgVHZwJqmdcjHem7E7F2piC",
  "key14": "3Kem9KbwSrVtqAWEWyT2HSppJhs4xNdECYzCMzQgqePWcf2BqGftHB1bbKi6b3H2NGANaFqcKQ2QMo42uSu4kiVb",
  "key15": "R7AwepL6i5XCXcUVLoaaswCxCuG4y4g4XjACvezzubUS1SHQ36VGz7DvnWAfdPyfCGviHsSYoBpZVuWjpSthBdK",
  "key16": "5zXrrNA7m7zHbfZtJ2tjuFYGaodLgU9Ytohjz6WV5davzZ8ab5oSS8zo3E9rBQTJky4Ws9Yg8vcCKKpe4Qrh1Asg",
  "key17": "3h8Bo8o8UFoix2kizCPu7L2GiLuQdYM5K3tdEwE51vPexKjDUPSTogbnAMddWEeQbLamVh6mRm3gh6iHC1kPdx3q",
  "key18": "4GtPvVKJVwXr5Bdc5i3iR5545CnsvMcmXSLDqtQFT1JnJZPicVUmRq5rQHWj9EM5cMUTuZv62Xbb8DyHsEuAABF6",
  "key19": "48hpB552KN2kCzBDueEmDhMwSD2ZuBiz9aztECperWGJ1NyzREDzBt6rLCHc54ag1ajbbrHw2pq4kmmFmWTkQRfG",
  "key20": "3cyJxu7Gk8d3LEkYWopGAFNKMvJTtbao4RSPtAfAjjV1PxW1G7GGGc1iC5Tsxdrrwh9fJ7twWYAedxM4e6GN83ST",
  "key21": "2p4GfZpUdzw9qJ88k5vJJWPZS6icgTKN1QyQBz8aCPDrLQHCGNyxtwRZ2r9TGjJqA3xV7GCfEbwWasVUAT6RPD8",
  "key22": "3Seh1X1bysaLiTaq8auRHd6oPPD2Yu25HESXnMQnL5x6ZEx4h5kYw19LaVHcmY39fhMCjYRvQEXdTCdr35YCzeaf",
  "key23": "KjqZ53HxQfawEcqBx6qggZ66XoerqNsF8HxnsVF2NaWfzv5ycVtCnnwtidDn9giLqAYRkhgQMRWNW6pPgacTXgD",
  "key24": "4yh5oL9KThYNan5vcTz8yQqqnQBziTUKQhr1KQY2kVFVLeKdyuXmkxmJCK85Ri4ZfJpJCmy3etY98LzoR4FsVJhy",
  "key25": "4qeVJu8yHW257LwGYE34nz77dFpw9trxm7CfXjRy5iKkLSoxJfAdWwy6aq2ajVpJvpemxebcr3PzKpGWrq2w45W9",
  "key26": "2bbLiwaTeuunt9jHWsMjdnE4zZLjCVMeNwpMwAHHxgS9vqVDhDSfqgV2zNgpMRRu9z5H7VcH7hqQYpSKkZb8JA6D",
  "key27": "w5ZvjZ4MA6GeoF3iTRMAqzDu5P5DQaJzohH2KBLUhjQYYnZVxfJyrHYxUnkK3oaHMmrQEZw8Da8SKTUFq9EtMvx",
  "key28": "3AZK2yQnZKWBrYm7Tz8rvuAcS8KB7xsG2eTiZ5sgzWFS3MXZgMbu1XjhN4wqgfEeKtommaeCkrwJcuhB3Da1H3W3",
  "key29": "D32EGC1SGqzyqXWtLdGwHbyuTc1a1G9759y6JRmvYUPGQrA7EYZ5aQHshzjL5T5wXCKUsibQT7VrNPD6BfAqSWF",
  "key30": "5K3FzUWQHShnNEF5jNdo4vsGyc1mUwxWog8RX7mNuWCUiPnqKd1kpSmkmF5QC4yTvcYk6egWUodBoNkrYfgjWZzL",
  "key31": "4r4zYC3EELRikVkwrrCfAn21ZZQjrHsFVWm2fvG7zBhzeRcvnruJs6AjuTZ7nwK3VR8MN8Ht19RqUFux8ARwNa43",
  "key32": "3q2QpReKzKbCjf4623ooFCxJRwHpPcZfwtASLp2TXhnXXpxg4y2rAueTtunamqiGGD3LUnfHWgrAdVRFdwhZCHhv",
  "key33": "4Ms8X3Pk5WSKHyvaLvCiA7j4MJAPRtmz2Vf6BFwY66AsmHQVWgyoFYqaKKGN8UyDLLqJgYvJTgJJNCHE5FiwX7yx",
  "key34": "5WVz9Ps8c3Ycp6e72d8GceTEH8acRmKosHDJSkgoExjDEm1Dqtw5DufMj9EU1YoSsH6D1XRSHsx81prMzbucSkpu",
  "key35": "HXZfqCa8tAne4UJJbLHvcs7t2odMcTazGcsjUUASD58S4hCWd4pPjDGrAysz7S6PuHeRJFgR45xSDLMGd9F84Ui",
  "key36": "SF6gCw6T77zJ7atAMHQ4huAgJ3fppq1TkN7qnHqp35RkZUiiJwsXt7QTptSXJFuEbsCYA8myfWopD7bgR9FrdKr",
  "key37": "5K6XbqZUbR3EzfDqANva5Q5yGNGmuBp9qG1CmekA77Bpqj1kUQqSgJaToPBaQUj8HnwNdUxqnR3MQ1Nvo4wkoSFH",
  "key38": "3nBQakVWoVS1V1BZmgbEchXSWSkHHiTcYqYGy3LQRDNDxzWmdN7Wq1vSZ2sjkUmAoz2H4odf9Ui8xSbDtrzy5JWB",
  "key39": "3Sc61Q9zUhd8ZAHenL1pTsK4CsdQtM7QpmtgJNSjwT88w8SLMtbXZ5xK5prAZpLiygHkPZSDvqR8Mn9MRfSaqJ8p",
  "key40": "39PXqqCxGQrq4npVW6xb4qqXHW8PyNVzoiA3MA2o4pLinAFn49swovKkdimWZCR2XirDmumQAdPZyNdMZLhbDyYC"
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
