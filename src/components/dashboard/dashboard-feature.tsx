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
    "LPFRMb5pYzeoWKbK7b3F8i5wScVTtgx3qdgjzgqiyt6qUnXB78u41Lkk7Z7tVeDGRZ6BCufrbw3RttprhZX6Mh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z47uCgjfUa4hsuDs53aRB4AkqwbXKsZwFwGiYQHoVsuvB3oSzesRRphdcV6QMyaVS2PGoWpZBwm5PAexUsTpALr",
  "key1": "4TAB4znjhjXJJ974ZPvBWAepuxXk8WgmUYYdRany5WNVvBPZUYprHU9ShVFzodRTuEphk2xUeiSRw9YHrigEXdeN",
  "key2": "58gQ8siBvdyR5AwvXD5esAaWACqjp3uaJUHi8dSJdpXR11Lo759ytcp2WsgXhWnPxMBieqQ8yMpDHk3CV5cdcbTT",
  "key3": "21813cf2TFGy9hUpJC4aCMCuc7Q1DnZ6kmZbDFcLouTKMbhG2tu2fSNUhsW2VxYacbovXb4vhuGFnMxYXxKp4o2g",
  "key4": "rwbRjP7c4j72kHdYzRYejXcVKPKXKvshh4wzv6kDekaVtUy6mxT673aZoFFe21hXU5MhNE4DZD5yVMvB4bGBpvZ",
  "key5": "5NkXGi89A8eRut8ZMbDbbNMCNuNK1HmrnfRowzr8uqkZS3RZ8Svr7MUJttBg8NaKvAkbnhMDkLokqbWQ9KHFMiT6",
  "key6": "5A8E62DjPZxDrpwyRihdvBZGFxnjtzPS2xb9GhdEvKFJRZ5A6TZim5FVqQuUMW7ihfVaA4Y6BmaEYDsktedQ8bCQ",
  "key7": "3shpa9s9MfgL7No4qjxnN97Ee2r5GjkgmSXK7VhmEXmHnQKwPsHT7LR72kbLDyFydUEcagCSQ5nTm9hwKu1Kj47q",
  "key8": "5MFuqEtuQLfXekxY6REY8WamWyixzVu8Ygqmr1iWAcUFWEhQ96HvCL9gYgxnqiSWHygAr8bNq9rEZQ4xCsjX1NAb",
  "key9": "5eEUGZpErBUNKF2G8q7ARnLa3eFWZRi9nVyiGfZ5uFTQGFxcToqcgkx6naSyDr69dxg54EgeFRJYZXYaGcULL4UC",
  "key10": "4yctEBduXJ6CNCSCw5X4pBRtvcnfdAppjDVybKccWd99KEDw4G3BoM36pEMCAGx8UBMH2nktVuCgh77hcFe2K5uQ",
  "key11": "4TvCRnb5N8vwkvEGfiRjVY5Zgq2hgqKTWmvDwtCG8TNSE1Z2S3osQxnwQzYRjGGXANGDMhwRT5Ait6Mk49TRYQVi",
  "key12": "4nBT9HZFdweTNkjAA3U1mnE4Q4LExPC1rubQcskTtPYqpGdbhwGgfzScBF6QbmyKtHkzmYYhvT9xPkpp4sJd7N5b",
  "key13": "58Xtdq16SzWE4kVpMQHn2sd8LZz8XqjVUdJPU1NxUyKNbG6TxWLVBqBHouh5mHCncUHidEjN4rF35zEspFUoqTKq",
  "key14": "2gdyA7ui2wKSnj34BeQTBdhXsgUAHDjnjVpfzqi4H2aLtcKAbeN15jyxr9TTwao8AJYdWEt7AU29RDQs4T1hk97i",
  "key15": "4G7Q9AF1y42zCov5q4cmvAexQomnq6cx1s62b2xyVQYqppGyRm5snWT4nJoNrZZsimJo9em51tGY8b6BvynW6sMG",
  "key16": "58DojUSWGAw1KpYErvbGaNcsqMC3MvDu7hXyDV4pM72FavSmktGsL8xpEiDZL2D1c7wPavdcVtXqPiRjkmdHzPET",
  "key17": "47k2zC1jDMU7LCT5sxifY4dWC98E9afjbWRHfUNY1qUapapUr1BehTVF2savHCvFuva756EpABmaE9oxPhaSMUqb",
  "key18": "kgUBBP2KG9JDVBYVbsGq8W2Sqxrdu4u97rqMXwnJZJvhnAHCyLcZouf31W4iLZMShYpayNjXoiYtMaqvEiFKq3x",
  "key19": "2g9NidynQPTrg5MoHqWDhrZDRnEK8DG2oD2fVEVTyynmqzFGfnkmVEfEXmEsBCeZWumbJQWDPCV6hurYbTN8Kvd5",
  "key20": "4FPYJeS1GDH7oQbwGWboTShPRsqeJUzfT718PM7Gp3GUZMX3ESfbxwXGcdo9XBvsZinzaCSaoGk7wWqRPdqyMFva",
  "key21": "39o9RW9K6Ti8xZ9yy3FsfJeuEsmxCGyzohLRfqmescsptGaENiuRdiwtZ13XfNKCCz99XQE5pTPfVUz7feg5s4fd",
  "key22": "DcaWcE1Qzu4TSV1tiC4zWULUkEC6WwVwRLpeejHWuQQXgAY1jajDXRPPruAnPntvnVYpHK9dpdCwW9w2zgHRzHh",
  "key23": "svznWntJreohCShY9r5cniZSDxQeCyh5iMLBTGyUt3VG472oiJM5hemiXfe2mjwexMof61NtSEAcZ2wP5kZ8pmG",
  "key24": "2m36FZwU8aMiMncoXCR1Swkp2YjJqGHcxBJo8K6wQcMZvuQQXoMqCyhwzzRXmHFCJPREDrMphgrzYtJ3VCfqu2H3",
  "key25": "3ZJh1nnNCR2vt9AbPswxTiBUWKR1LGuHr8cCweSiRRxTSVrECR1DcpH75AnRoM9HaFGq68FQQf34fRgRFMdJDfqM",
  "key26": "2uvqyHzSfgGijKQVhKZTM7vnANn7htfpMDt99HZ8EUJMk8P3ypbAXteE4LbG6emp3WWzq2Sx7HrYCfNTsegNJSW5",
  "key27": "z78hMZ5HEJwTXva82Dsi16nssVrNfSBRXdRohecCszYfRo5kxTBU7e3MFkeD15H7idNzWaVPPBmEP5YyWbFyLTU",
  "key28": "rhVoQvYm1Zs8NXp3GunGUJ224WiCcCPNaRJoVLGCZ4XkFTfnXyUETTxE9cZcirbx3ftsoZ2pXDdhbwTdBngjQAd",
  "key29": "UfNvTAyrtrE8dgnGhHeUuPycYXi6p3jPxwV9Szupr5TW6KnRGWYccmF4obqWFkYj6MmXB4qXYBfooiEon4ncBmB",
  "key30": "2XZ8C6MdX5emdcT7cxFXGaDBVuhAosWGAMEH3bs8KXPEwgY5Fy7rKuDPok4sRNceV39cp8JmQapr8sMs3e8qaY5S",
  "key31": "2sozwiU5NfWBCaTwGUswJj9EKgEtLRw4LUeFuhSXuGZ2rcCLcwFQvr1HotpX4UHMAa18Z7PVafWrfPbL1fXwbyB9",
  "key32": "5JAp1Ay9HYvJ1icAbcVYS6h4bfaeKphkzT3FJzPRTfKp23P3CRz4uhTCdZbLp54RD1MFRSTUGoZr2z2BbEwfnSXg",
  "key33": "4Mxcv76BSPCaa7ALicqgUog7Epa4MqR7VqE9HGE87G9eBcgPE3ncn3pkKafzDdEjACCQkxRopcZdfUaGRogigzpf",
  "key34": "i6rXeeLyjuBABf1AXYTFu1LXRmYjRNBRuza6PhhGSW87syMEFUvDq3brUXPmswnibesMwocMhmpBmYsG6UT9yf9",
  "key35": "2oR3bQBbe6eT5x6TX7EgHuzNLtMfRyYkksKRR4rkcyA5rkwdZkCPgTaQfStUXt6uCiBGPv2ZfpnSAFhvvu9bjHGw",
  "key36": "4iDu5zmq5ArwSeKLk17bS6fjfkQL95U3WiDcNkeoSi4hwMN5Za6jAZxiK4BFH3qvDypNyGwYWPuWbUH2N4wJ1Pqf"
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
