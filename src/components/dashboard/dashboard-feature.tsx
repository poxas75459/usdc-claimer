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
    "4zfhA7pMD2qVZ7tQoSRGRHngkjMiaN4jksPgxAdoBQ9d2j94GLbdxyd4GJHFFzrPYt9SDFgfq37S8jHwuDoFRJps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ab6pFigiPYjCTj8ts8yQCSKdQ2zAaNj9enCZK5ZmEm6qLeCZMTfZoja3oPgdCKEbcJBrKmBdBTW3ne8rLQCF65",
  "key1": "5KrrTQDBy7G2yvEJJc3pbxGFBNCQZZpXNpjmmMG3TW1pqtbTW73swEV7tWUFsqoqEHXdfUT3wkioaMgDAdiQzCZf",
  "key2": "FBLe3uZNm3bKiBZCEZENfWirUkVxGUHrSX7HF8qzcZX5K4wB6mtHmUB3LHoV4R2dGWaGG1VJbNW8dSoZfrJ8akb",
  "key3": "21HdEJ6RupwUPjhHjBuvUeu7BBdoGasNCqywAi4gUd4xmhYpBWsgArbtaX3KVfVZ8gFKbw4M1RQUWEyd6Xm8KDbw",
  "key4": "3ZLZHttgpYJXJdNJRR7UmrQZZ7crBo29dr4NwND9xL8MaPVBokRFeawwWamcCicGM5GpmvckRg6KuNVt7TYrUF79",
  "key5": "2DCJVY1PF2tjviBpvGgBwCUH6c81A62YjgsC3ostA5Bp9aGYqxttJ76QjQNLQHWvHNP2SKdkHDBktAwNZXCZLJNk",
  "key6": "45wsYEtXJA6VVYTWVofVuCn7pfgiNGJ1SP2MuHYWA9ADFpzqBsJjL8WbN6A6i9g9VgDoKnnWAvzxpuLKEtZ1FwCx",
  "key7": "3rQuxE9Esk1w1QkUczPopw8YnSWztd9CoKNkL89KEoXgnir7xjkUbcGLWSAy38EKqxuwz6oSiAGYmumXjE3TGYH5",
  "key8": "3U1j533sFsDwu1GCshgaWPkS4KHTSYncE2kzfWDVqAMtqP8B1Ubkvf6ohAoc5zBFKTbgUFjXDxPVohyVW5752aoN",
  "key9": "3cPoz5GoqWekbdLA57ENCNeLfaSQmqwHxm4dx3hxt9VURYRpc962GB8yWjLt4ZupL89AXzNPGaAhzhZoK2SFiFb9",
  "key10": "5TW6VYNjPstgtUhoDSwHVW2WuHZekJdzdyoJhvSmg4q6tGhUqGgei4xSYNNV8zHCoC5QBJJbpAe6DzfFwPiEcA9s",
  "key11": "Jq1usSX8LqdPqgw5zV4j4fLB289xzfpAn2Bi8CYh8oifcjLBRurBZgua58NKpLLBxoLAxw3n5ynW9TFpMfkvzd8",
  "key12": "4QGWT5ZaRPS6e5adB6F7jXmmMCTQ8DV9SD5MnpYwb6Vp8uxRjytf5hgugv838qV1fR3NSrCcjrfWHG8NQGotBFES",
  "key13": "2iNP3FWHjEV3AmgpdXAZtuJPAPBuuKsCDRHsqtxcdQrUJ4S3BwddUsZ7ts8VYxLfizLetfyxVbAajrr6WsYvZjjJ",
  "key14": "2Q2rXpHj14pnngg9Deq7u52E7wzgdz1jYSWQronotpD6dMayKM2M2YiofWygQbmuv2fvCDqnRSUjVDXufGAYdUZx",
  "key15": "5QcA2YeRpnM1hr1ZBQ7GCv5CJD4SvNnZaZjGj5KpXzqG2ThWj2d5cgi5DYwHhUMajPmp8pbfLTyXoCrNBLUQhP7L",
  "key16": "44F3XMTzMf2NsN1vPoycM32m5Sdu5mZ5ZzP4UGuv7DuAWyX5wMVEGKXqdAsmqZPDV79NFNwtEh86jEHqWsjwZt9Z",
  "key17": "Ati5AiTWLvJnC4iwUiFMUoS8Ne13CX2N5V8tYxgs4zze5BmfGXkBSUsnC66RFdBwr36QMUm2WKsVTSTep64Q77X",
  "key18": "3tYaKCP8VQTdJ5L4ZDXsByDGmzE5epg5Au94wFbceVi3CNBtjGfHdzH2UkMcr58SEuYGDG4xy8PXs8miXu9ETedD",
  "key19": "jrwuA9QTB6TryvPKosac1igZBoM9zpW5XMPnsqyeXuwkyCUtstM7BWMC85ALpPbBaAaEuZf6VJfXUPYZMwCWhbu",
  "key20": "3zPFMGF7jXkhr99xGz4AF9kw4fQVMhnUP9crVACbMLomN1tXR2FxSe41YUTDG8sg1ADVuWg8PCD4Xz3A82dHpNts",
  "key21": "5Gc3JKpfEypHX3TVqHAr2EBYF56T9qJjaXyJwCqMA4WjU3V1LXvpz95QPyKe9jpHJbsvs8zrHoJRP6mpqspa4SpL",
  "key22": "3WZX5cEEnxEUcJrFthb66gWT5RM1GDrxnnACkF6rGJZeXDYA3ddF5sBJCWfgcQbPi7YMF5TKUQkABhLR7qz6PEC5",
  "key23": "5U1h243VMK1DmfxAYgHy6nUYeReFTxgdThrrmE31zJSYfpwZ2GVp4AdThN6Q22mA3bWnyxsJ7rULcKswE3Jqf5ss",
  "key24": "2EFjLTFZzA29M1xbLpNZW4J5HtaYAcWybgdwR7rm4T7U1vqJ9Ue48M11pR926kqr37P1xqxxUs6PhdvMKSiCKGoH",
  "key25": "2B81BfvNYvtRVKKKHkxECrfLAe1gCPRNoc9Y8FRScvnMXi9X3ZhyHSgJZTS5dccAbG3gEVa9t7D4xSbKcPkcZSyj",
  "key26": "3yTpadyoqEBeirZCfoGmzWmpsLHwcJWV91BKU9WGRYdGrnaGjeHw6LmZSZ4PQ9UtgsYzgMiYB2t7ekEmp61y3Eh3",
  "key27": "5kAAH3aMGe3ijb8Y4CEPRu5vG5kvGhWHKw79frqur3sdBNFiRupvFQX9bEvJfKTGaJRWHmC7iyPndk8zSonmcRt5",
  "key28": "pZsBjdgZhrHMRojxAfCuUfxQCHWBhPs2MkwKsDpDwpYhbd2iAyhy5gqMSwtReChBfreTRhmnPBmg9PvJiJsLKeE",
  "key29": "2QxS8Bergqw7uqKADLtnderRqVbxssEDeN6Lbav4qKgWHHhQ1jLyyDcNRTokc3KcE4D66cBd7rDzv5EyUc3p6PTm",
  "key30": "3BsnmCg5G2fxXDm9VM7uwFGubwmiXPkPXEgQzahZqKERAkXG5fnh3WmPBVDJHSc2q2nDHTw8ZACxRJzCoq1p8YJZ",
  "key31": "5okbXRCTcwSUfc3t5BrudhVca87XRtqwbiv8dgYg4LVuL79ZVgizttnZ7KnsB3TQacBj7iRiauDAkWCo9L7pNEa8",
  "key32": "3H7BppNFVTLyLKkJa9eJhWc7voV7sxjBnwvqEF4sgenqDwq39rudkhFZJQVVWcxERwNC9NgD2TwVRM2jjBwyoNiX",
  "key33": "4mDtznEy15xyRDR8RTAprZtPgXxQNeZ8GeZBtwoUxa2yCS1wJpbuusW2zRcDvVG3oBqpVPfLFHFzqrUSNSJUBEkY"
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
