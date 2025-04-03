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
    "5ZmWpZS6VLQAsGy92AWusZuppXr223KwF5L5Pw2hvxXnL9rZiVisLcz3mcojvT6UNUPBZ5w4UTgKytmQs4gLEW4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rjyk1zSUNsn2HinwU8sZnCc1j8axob7G3bmxo8rV7HGAdrTZBkQVHBW1asxeZpW21Hqafu2vXLYWAKk4M5Jrpzm",
  "key1": "jd8f8tphCvegL3RXmu4Kx5wKbXqK6t5j7VfLxqfVPdtYvHwrjGi4ZRVRtXPKEA9yJddHkbf938hrJDcdnm9LpNg",
  "key2": "23iHaVd7mj9t1y7uEe1NvuVn63LpDZ89VCevcifvFFDbRzoDaMDJpRpiqF5wf7JwXJ6s7rSuaSNin2qk1VdvGAE6",
  "key3": "Wh3V4AVDkUorbHomxxopHZp9ykBtU6gpuMf3h4owEzCzV2G8G6cDKCraw1ipkQHWpnDqJQcqhfH3cNU2aZCRTgb",
  "key4": "3NSFfaRuWvDLADDjtgPGwSiDoJwE6j6Lxe19mP8fQAbeEu2u7ri3g2tqfXQYs6a7QAgA5HiJ27yXMtYehCep1Z9K",
  "key5": "4GRqEj1XQYRaS6gKMReqS3UtijrznskBdGwa6291HMZevFtuoBAMVVhMpaKrAsGvdLexsXgQuiQJmUqGd3qar1XS",
  "key6": "4ZRKdYh1oCfyZcN4Zjb3D1RpXMMfpZE6PL8dcRG95jsjwW7BgwGgkxqgpoR85s9kFgyaqR5UiZ4FJWA1sKfumMM2",
  "key7": "2Q89ATN4MiQMey8hbBXuN6hZPacQNT9iULyqpTcPBzxBPUQuher8YQkrt5TaDDUwf8MaDdV6q5BqfenPGZGdvUKz",
  "key8": "Hu1j4UKS2Cs6fFAakoEprMR9g2gdoqhXJzdebCHL8vVxGbeud8Hi4Xw2MSJbFWC13WZr3VcnqxgUprYvXyPJ7qN",
  "key9": "47QhqjNSuUzc3qNc8v2LxfMUG5tKYdZcP2RPXK8LGxZoEJYMs8rxyGQEUsN73viLQe1tNqT6fDN93HqkB8SdN8gz",
  "key10": "3VqyiRMwaswj5G4wV2x1PGcLjZxMmWhTsVpzhns66b5UaBn23jdmdXdjZZWx3nBsFtifCTXbaawVEZZpsZPFuAbC",
  "key11": "4ow7jFit33S5rekZVdpwNd3gw7BVkg89k15yJv3ikAaEu5LwczwDbAxvUbsJgH8sZvjJbpWmFcnyUUk5KP48x1Kv",
  "key12": "2onhhUpTwqfczWuk3VeEeMCM1QRVDfBFiE6wBadgwWkmmx1LMTyAfqyq56pVUarBREduqo9oAyLmeaweCeabu8gT",
  "key13": "3nmNKqt72Ff8oNmsqNSaizcCrxZbyga1mesjjeHPgiHMQ9W7SZsEVpwFz4or5HYVTxEaQsvCnRyRaAwMWwGURDfN",
  "key14": "5skshG6FmeFPULFS6hAAU2F1nrwz1WruffGmbmbp76bu38wJHWUH7VwyEf1GfXY61KHHN87EwdAUeNpYuqSWKKEg",
  "key15": "5gJyt4hZmiw5e1GZF8214ExQnVhzfKD9D2MgkqLwy8i4o9SG5hFLV7ReiAaRZPLfMu1WLfnxS1xfUY8REqiYvRD3",
  "key16": "4YgQW85qwAzHXthaeGLXZXtAUmHubSbQvtHWoCqDva56Qta6Vw9ik56xofPCKoHqftCUket3GALATLYMMyBtLh4r",
  "key17": "2ebfxSAnPSySyTFvBMEF7h9wFyQY8rrtKfc7U7CHpmEgBQozvNwYoE4XNZMMuQBFbn65rfjpVXfS1gZvAYqxszns",
  "key18": "4eSWTBRXs2U3m3wtwCTUk2K5RiAfE1npjEnT53WyJ8DDqRnR78sv1SJ1rr14veUnUXBxJbs6MaMyv4iNAkWAS9cv",
  "key19": "5HBBW4E9SArcVgUwUbvrA1GGG5KTwsfiJpVmeRE1CDAz4wJzrmGUkqn1eQZbUsmbiR4UyEmGw32sh3UE6mZMRd6w",
  "key20": "2A8CMFcpkzYmzpCGLxFqMt6gRLEx9ZVqk1WNW1rp5KShuYNrZ6SzCjYFJtsYqTiKjmzELWPLEkuXNG2m6Y9w7q9n",
  "key21": "5fJSwpgGYnFyVQ2zrxsD9MNQ8qTX8JjpANCkBS2y3wHkbeh4iVsp79DkGPrnoTnxFMnYYoD15Eb9EhejtPdCAGjC",
  "key22": "3zz7Pbok5eShGtmoWG9Ly3xCkX2QBmjTyJY8WNyhwmDARqmxPXTNC7p1jK6vfF6EjX8FVNUZFNjSaxDAovdjKbpk",
  "key23": "4ArR1PqcrMSNdJ6uxJnibVuuXgpc919QRkrNva6bZ4z2osEVFV7cNwe9yDrLWisKEUWkRD5tempbFh3bvivReXfM",
  "key24": "2frAwqRgquXTVLeVoQxrWKhoMUzrDjKmwVmmodG2Jrx7DNZXCFue7uXJanfds6tMgL38S5mbWUazHgYcUdjYwjpm",
  "key25": "vp5pCA8p7TaGwhUjcpNFmViAZGkFAREF7kPZLdKR8if5ZAdYX63AuNq4MHWhE6DzQnsB8LqsKG14NdBUWBF8Kbc",
  "key26": "3pA2GKUwJdwpuk2Wi2vEorTKzeuQKX25C9aKFmrny64hvZHXtpPZz5LFhAZVMJbCYduneMRNzKRRmGzZkbcVdLRo",
  "key27": "4DDvCaDgCQ88754ieQnhUsV5AcdVqNWVbjDzTEjiNTBGbskE2Nqr8un3FphWGfhBni9go1hgaF1RdJFoVoxYh2JE",
  "key28": "4KdAMpo1CMDLXhFwzcSm3V2MLwtsm9QNoZD2jNtvXKwu5G9nJA6CqPMB7ijrmDCpfB7Dj1fYTvYrAVZsP6qKDmTL",
  "key29": "59MVRWoUim67GmA69AJmynTGUUB2C7zLmDiFUzzmYA5gLTsJFXtgaapdasABeqAxfe2NsE4cbW5BvcfK4ySJBG8L",
  "key30": "45PHXWi14QiBh4uPrPVBzSnzpuMkuVhB2YGMbsGwRzrBRt1VBc6qyvAkgpq2NfGb1SeFJEXeJ2QnGsQ97dUmq5Sz",
  "key31": "2CxJS4nt5pBSxRVWY4Q5CCP4XjMd91S81372iPK9Fw5CkRPrGzWBEP1DCQedy2VCg2VFQYt4XM64Vpgmt8WbYWL4",
  "key32": "4QFPMmtY2PiT26VzWdz3QZXvrjVW4fDsdnAVToo4jnzSHL4TpUcFy4QVZo7pWzm3AP6AYUxywExX6NiS5V1Y41Mo",
  "key33": "4P3MhTSfX9rMFWiRuDb4VDQuoqCBeJ8G2fmVBE7BK6mrEH1vyQkWdtU8zw9BSRVtYXpH3PuPVpjHwnjhTrPWoxbh",
  "key34": "RRW8ceTCNWAdBpNG4kcJuVvXSZ4UUBHxUh5CfhvYmfgN3AEnaKidmjYaJuxbyNFNdD2KUHCLQKSHmqK4wGVy8bF",
  "key35": "7QHRBBzU1xs6rsX9uaALb52AbVgW95rFQHDnDhtWiXo3Vzju82Qnaqrnzp2pGv3rekNobNhwYait8kn1RuDusUJ",
  "key36": "rMK9N54ApiBQRqcYsgVLAYKANpSgnqp7jgRKPG34EAgE1CDSBxLhyT59o2hvrZ544zP5rsBXRMLUzyjtLNYz9HK"
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
