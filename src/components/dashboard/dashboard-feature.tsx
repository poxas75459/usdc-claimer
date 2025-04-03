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
    "4x3puo2ENrgQpUUA359QuwmMvnf5SfUWfbiU9q26DLYDXjSSYLyiEz9gCWurdcMWh6yChLgkSKybmXbm1ZR2t8f9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hq4tRt1cQsKcB8EGQikLtrJ2RequJSQpG9vFovDoBaMe43qFKYXj1JcGSCNsMGsNo1VQHZWJpwQ3XchrcKYaSNj",
  "key1": "3wisNyUofEQKMP2woQXsGg8rjuV96etVGvwK4NU1y8HrM3h3QrcQ5CuvjwdoUkW46Ap6YhL2CHoTAg9BYkGrvudZ",
  "key2": "3acPugZ1eUrzMarh3KiCt8zBvM8dRfDcrhXFiyhCRSwEwJBnBQcBiRs2iFA3KR3oMGJHvdhoLmbasDM9XSKTknnj",
  "key3": "5wntKE2YTt4XjqCJ4QKSum6W1HVaAe7DFNsqhuCMKtK5oseeuxgkNmbrEDLK216gfjpCw3XJVRS64jGtdHhWojkQ",
  "key4": "31hiBnj7voKK4jpRoLCjPmjsjLjnocvvKXzNNSTN3JK9fzkDT1QtMDLkeAriXwSy6QaJ8AXhenKz8fN84SHfJRJJ",
  "key5": "5hBee5MJ5Hd4Afufnm1BfTKjUzrSRoVgPHRxkc8PDRFy5wHekaRxDmaNPqRddabLX6rfX36nisZJfc1NhhHeoEPR",
  "key6": "5BNqHKzUiCrptGGKGuEboELCDcvCuGA3xPegsnPtrFmeCVWuYtXPR8xpBNT9p7wpqVTSWtYcHvDRgtYjgTFzGWdt",
  "key7": "XAeCfNPy4Y2WVzJLwr3RzjjMy8eJ4C2BhWFfXUXnDeoLA2GG2zor7LMQ5bxdCxoMtRfBiK9f3rbRA4TVbbRwobf",
  "key8": "Uq2KmErSj9oyRX1ghqnW1DhD2yi9JaxGJ9p79yYkhns1bHZNr5Ge1Ff9SBrbxqh1P8mipsTRYf28TYem6zAEV8P",
  "key9": "asd4Vht8LLoD7R8ywCUrFHoc674n7CrSQhepd3P4tpN98iJMh8x24qbBEuLLtE9uPEPbQm7hhimXR19udKCq1Wa",
  "key10": "KnvrgSLJWU86Mz9gpbc1qvrxtT2tzAcERirNe5AFNiJEaMjKXM926mN2EMy5qqF2KSjTk4LYCxxYKgg6323KPrr",
  "key11": "3iGBumYhs3A1Qb7P8Wf51oMsoH6Tbp9qFhfDsuDokxguy7MWzmtVKTN8sfTKtZJqFUff5fGMzsWePfAMLGbvKXWP",
  "key12": "Mwe3qDoSFD1UMZnvPghG2XHXQLmqmxd8DawbMDfFw9WubmAXE3RvVZuDa9X1n3dgPtZNDLASg8SGSvfGCDZyPFb",
  "key13": "bkxqD93XSqNnZUdiyjTcLL4wr6XJFtRZX7RdzsbkvXtZqP3PLmGm2SmCyRVvEtSHbgZFa9gZXFUeNbMzBhYqsAv",
  "key14": "4vepmWiGsKzXT4rURz1kvHm9f35Zew4UoY5JAioAXjRniqZgUgcgGpnnzFDWSK8PyaMwxdv9PbMmwHscJr6FPsVE",
  "key15": "22ukEsUWJi2ADfXnXeSGrwsKyw5nGJ7SM6MmcY32Tcvkqo6tATtN5jGS5SsAEnfqFTTfVqphKk411urpV4GtfCFZ",
  "key16": "44pwzbVGFb3X5QKLkGZxDoVujhV4kYNqk2pR9co6RHaXQPL9aPBDjZPhKY9ovJQbUesbkxJ6qPnqT8dP6wzvTxRJ",
  "key17": "p52qWkc44Lu4zyLN4KEM2m4UYtpifqRw6HvHnvarX1dm5Lf2PFgF96rPppb72FwXF1WhGPfG4mfWqhSQqsfC3Ja",
  "key18": "2zRPdZ2etTt1TLiuPtGQQFuedfdzStQQhU3NXQS9CK74PQuAQcnwYrzFHj8oY695beqCnphz3zepwFueEJQzBoDG",
  "key19": "UPZuvDTyETAD7v9UUahEdL24HHVCA4phkCryU3Z751QoPy2qZGJwUuEePxBVfFN8zkYAc9CbtLME49vqnzzzLQb",
  "key20": "5qerPw8zUWgoKo4sR8BbpnQ21PCYbhGV5hMGDwyuMPNN6nUCSA42a8z9xq6JZrXdH2NWayAGj4RQPsm2B99Nd25F",
  "key21": "3mrpAaKTRHZmkzo1k7fhHnkHfnubJL8oyVSRd32jn58hAKY8aRXTuDh5m1AKwrJ4YB9sfk565kbbUqB6wrxtjFXn",
  "key22": "5Lf5dYKJ81YvZMTS6CgZHMHVqCmJC8qsADHXiTxtHcjSCW93eNqvFDbzBxrfEUXStMbgFKmtzhHpUpbrrNvFFKGh",
  "key23": "4DAEkemyH6bV1Q1uLotgZmBXyQWo8ESZ46wEwf9yve38tUnTXcr2myq8HTxu1n4Kqh8cptDxvzXcE8LPc13CX5Zt",
  "key24": "5jnntjPLtAjYseHJKp5AVKu3grYwP4BnmY9FfEaXTRNBpKoZqNT8sjBs1RCC5YyXvGDMTkwgfpVPamQVfpvRzuF6",
  "key25": "4DcMnoEcEidJEMVjE93Kz3QCLCASJzeeg2WQfikGwYddXD8amvQbarp5umn8np4GJGxHLENghsYL3SsWR7HG5tpH",
  "key26": "4fy2vn12rwLGW8kPrb6dZ4mH83UqQ7VoYaNpg4YyNKYADcoQRsRbDnCL9eKAjo4c8268wSJJDe91boiV1hHidBUt",
  "key27": "5fbU3t8AbQk4bt1R3j2wFdsjpWetnpSzNzDXuDPAzMMj6MzpB1Bvo2WSG31WAN774XMw9JBimR7DwzkFXZmEwbPm",
  "key28": "WPskHKiT3T19sK8rusaFL9HeLsWVHqq2zu6yxEkiDdXrSi2jNDW7GPYD8EfGaea5BQLrGbAc5a2oHw615qCqsDX",
  "key29": "3Bj3uspr9wcVYGfQ5ojiJZttr5d68HCHxKdM5MHTfcTDEo99ZDCir7RhCVdu8qkCr7H5Kx23htRkTC8M5V1dcQp3",
  "key30": "2F2zbqWi1kCgzVGSZ7gPcCdAxRkny8AHCkygVHG6eHfGDP3GEBRY3sFmxAW5hyJiiG7ZJzZikmLt8wWPN4xU5uj",
  "key31": "2F3fTpX3JAV87BJ7fgTuqrWqj77xzE8A3rN11PP5Vs5AQf59ExpZSCGqUWkipvzbq3DfBK1iRYQwscd5kWbmHPRG",
  "key32": "5j5jmXJ9fZVt3U4wFCWT9hQtKw2E5mJAzLXKov8zjNL9PSjFw3AF8JT6eRzCFtpV4oAKdJVtibou2WkvRLY9wjuu",
  "key33": "3WHcjMKgL7iv6GEiFJMc7cr8W2oir2Yh26YnhEbbWcaFnUofwSJDbqcvZBZp7cMe7CacWU8UPwiJxdvHw2nqLYzj",
  "key34": "sbrtMKDCqK4nB3PC7wZALXRj9KeKS5uzMzzzMBrGq9ZRRFKdinDPvVyCWuYgJPPvjRXL3HDGLPMsojKmQdJHf2Q",
  "key35": "53wgqhnQXYyv2u3KjRkV2X1uc98Jh4heVhhM4hCNGCLVzsRr6iPDBrQFaPZYFwe8drKjSYaJZgnhYhiY3DyiyxVv",
  "key36": "5vESgenxM9FQodW6itfyfmMCwqNLfzDqWMDM34KiEZ5B6ZouezCWweWEYLiBpT1WZNNZFnsnrnTPA7kKswt9ZfkX"
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
