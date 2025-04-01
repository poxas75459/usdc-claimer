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
    "3Sfe5R3R1NyDR739mxKVjUnxEsDaLKscD8VyaXb6dho7T51AfExmMx3kAAkistbCViEBcT5WUTkeaheEKpRaxSJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9UoXFzLvR3MZxpYShbV4RXLHLLAaKuzxDP6dmvWMAeZ7HqGp8HiPJVSdoK5JNuBdg7EX15wQt2mrmJPVVCCNdH",
  "key1": "5HPuYktq4eyPSbAgsLDsDhdrsJ4tMgnbenkyGBroNNmoUe69hkrB3UQpL4HZTV7hzHUrF3JQK91LqCYQb6fVgyeY",
  "key2": "2UhFwyMkgB6EyUatMPA6LWQ2BWwxkFGu9bYZYDcSbzYpN7QbSoego9qMAxsVFMxSRuotFpvDybDFzVUirycgjkLd",
  "key3": "3B92yTXKCHtKerME9ZvUfHseTwoasdjmeJMLRenFxUocTtXKLkNb84KjDrdtchKza31PDcjDXLjLSASGTMybvrPJ",
  "key4": "4uxbU5BP9bHnU7AspVQDxZC4SV4fZtvViJxykoD5YsYj8tuw8DKmXpbyBSdrncHSJiA5ejvfWVVV5PFcyj5B9gjE",
  "key5": "uxjpcAz1REs1kF9J1421QmJxzTUPpsQ3iTuYDimwYjPD38TFr62k4BaDWn6vaeS2cJoiZYS7c3sVrCaK8eG9xE6",
  "key6": "o7NRTWSpxbguny83ZTX9uLND3SFc3cWF6mZkKVByDTGnYcP1m92LwAmAheBuhqqy7nLqkVdyD9hGhJwLSEqzCvp",
  "key7": "3P4UUMtQJ1NLmtvUMX1v5CMVhXg3EsXQAwRVJQ9Vc2URYwg2tnyk5eMAEeRrHFyRywqxeZ9KAKzQMboTfZv1f2dS",
  "key8": "67RjHHyrJFeuQ6fP1TrWbY1DYPt5XkmMZt61Nj5rkQ3n7KvMQX4ZzYVVaJiftJVhKwK1bEqg9wn6ZxVCuMwsSy5X",
  "key9": "4KyJ4iGP8md4kHsAaWea2RRMFH9QXYCqvxyxMUNUeh1a5Gkxvpyrsrg8MUTsPwumfgxoVF7hYySjRz5E8eF6TCKh",
  "key10": "54yEcHGeJ45iijcZ58EjLkQCEp3tTxjNxDcQFoUKPKyxbKGw7HdCxYi6taeTWeVfRx4VAarqE1qZ4FJPLp5i2RgM",
  "key11": "3k7mihq4uuitRHy4DZyZuSw6URqkexcnaNjuqLhRW7Y2MamhEeSktqACenyYBaojg6VJA98tLXUXpZMWAKS2sLwx",
  "key12": "4kirwDCtrcsNkqnaMNAmTCVyAKWMcc8PC9nFmR7cST25PDjp1smT5wXBf9kwuNkJvVveJteriL8XNVyrRan1PiMj",
  "key13": "gYrgq6myUKmtNfjx7wgF4sftLBPiM5UPm6XtfgvyayFPxSFkwf4zhQAEyrMrkeuQjT7FPv5ntFNv7J3BrFfHkLh",
  "key14": "23Q4ZwSnsg8tSjTTpUkeqikG3YJ5XjHMdfQUgGvGNWYkNPa2g8bg2qegJ3Sbrcz6kfJqmJdnDFV4yzabH61DiNou",
  "key15": "4BDfnj9Eee7pQW2te7d4BdoYvCY2RAAkD2pZbfEGNJ3snq1DEw3nf3Lq2q39sp1sBboGNnAULZF5AyPCsSUPSC1t",
  "key16": "3nXWGBse847pC3W6uGuzSqfnwuWBHhr3bidKYgQFMxt2CEBid23cvjYFejpzsvfbbMgM1WiYJ51RYE2CemuCfN4n",
  "key17": "4f3dY2MihduXmxRLYfRZ7nTXB6Go4RdQay4ibpXpbVvqe5cMDz2LRbkd8GAM4GUyeaiV897stp5Cs5sVGVNthuau",
  "key18": "5umw9UoNCvXBDhNAPqJcT6DPhHWLYFw2gUam695t6huJ6Efw6tv8QWtTJBTy5b1kFH8f2JcRjYxBrvLK6rcZgyFp",
  "key19": "3bBjEDAvsZZbJchfDHT3twrKrytgGGrsCDTWNWt35DzmTs6v22v5FjpAEuSa18dm5JD3XkLye7aQAeNZbYPmMayD",
  "key20": "4a4uRqNuertLYAFVJBc1HNbJBxPbtinDDkhteBbPCSyCUw93GX6yrH8fKeqcTTukLEaTFBsbT5j5nmJC7SXRi7e2",
  "key21": "AXF1iRwbYB5LH7QPo3TM7acNHFYcpEqhq1m9cmSXftBcUWubo3kPJo17HbyFPzsSmBKuQawFupvDK8DDu7GSfPS",
  "key22": "37mJ5nxZdBHaQ3R4pH53iZcfJRKEBEGYwxDkv8Hu9eaocQqocPuMBaCXRFi2FFcTF3odS9fe8kpdXvvBYYtUrphe",
  "key23": "4SQ9DMJ6CRDNJH3nQGHLGXYMartFhqU7APVUy4huG9g7g1vmyY3PBpBPjQiwsTCtnmCsgevqB6H4CZy1yiJFEXys",
  "key24": "59kvTQH99Zygk2baECdMMtHWaCNnUrYqDi6ACS7oRtwYGDMc5Ti71nV2nJ31GdzAP2V49RP5nKXNgcjcRR9ZCY34",
  "key25": "5iSR47TSxbK2dK5H9yzX6fYY5n5hj5a3F9g4tmGSNdmpAMBURjWVUNhuLGjSm6ucTehSvUP6ofSSGUe7JqWUoTqL",
  "key26": "28W9AnsRRhytv4vseew5NDmu1XrB2dHb2o6HsjdKNb3ZdU3SSye3Pdsh63kDEZKauQ7ZydyhSEkRZpACtZrJkh6m",
  "key27": "35PmwrL1stEnVZJ1kY3LzStMhHA25Gb9kyxGeexGDBXhnxG5k4GCQsKHGzwv6ErWiKNn193rqFqanKbp7f5JeNPm",
  "key28": "426749hxMrPDCgD3wLZqjGioSMTBtGm2yEw6MvPXFxvSA9RZP1d4TL1EdVwbg5AX3s977LiSdm6Ti5rvL4eEZnHN",
  "key29": "31n3hDSXh8znzPCm7zev3uBZMFvGD7k8s1JbuQVc4PkMoZhY9i2f3XyDEkbKm1CQcFXT8J4AB9XUjiVpxXhmCuGE",
  "key30": "5GmdmwQnzURM35jLoH9jzKvsWNKQS4k8EbBZb1nC79YNUe9PUfKQKrSfJB8j1DD4UCJT6HHsPEMMcPvLoFJ1LS7s",
  "key31": "2YEPmodw9QLD3YLh9wg3GKEbXuG8QxEv9T7FpJQVJVmYZKx4TDK19n1BwasJo1hg7MGpEEPhPNXBvwaySM49czqq",
  "key32": "21yPAebhPKH1TyJ7237wQGopycqV229TmdTJpYzqVu14shCKRMH2mjpi6E7V2FntghFcp9Wn6zD3k2HViT9r81bm",
  "key33": "5uLAovYWsATrZbM82LDUyZwH5JqMeZxZCKCpTGyuWYwCGQQpSCrMeQ4uf3LbEmHHoR1Tc9YnSsegF4M5Tn7aMHzM",
  "key34": "4JRk2kGvDFJ1y4cZAToJbFcr4ZuGci17gnykGBX3fjsVoSiJxef9fmSKjWsZVj3KDN8besMSjhjFe77kJo8qeekm",
  "key35": "3BQTbiXEpaMSdAoWF1wjAvuHx7H6dENav3r8FPHMxfHFmg8aS7CMFpYeRPh3EcvYF3NLVpd1EUZEM9xkBsM2DsN",
  "key36": "3wNNVKAb4roUwqwMcMnWZ6n1v7fzq1BaGAJ4D1Skixepz4QKobGN5QeFgo6x33EX4UiprX6cPTjD8FXzL3YoGxuR",
  "key37": "4QE2HoA9xzWTM9k7ywrtpoeaJACrbZsxGRX1Po4PnaMjSVtxDxu9zMqgVj2foEwyhfjv64MXo73TjggfZHi6TcDH",
  "key38": "4FohVRqpLhusExoZFAC7FFYKouDA1e4nD33EEM4aeRpz7CFNnhiJCcpwL6e8Me3s7RjXcfnaDsyUJo9g8o9qv6XK",
  "key39": "4YpKmb35XHK6sc4JXEZNwXwZNDBpUXy8GPDpFDU5nyLwBxzPbCTYJXf56W5SNJGo3gUfoz4Q3BxRx55M9mF99Ka6",
  "key40": "3Su1Crs1UVFre42v9XB2kwUD5E4stq5TcrEHUrrjc6hmRgkgHFK7EPnaHLo5xSKUPQJk3qMCDfE1rsxBm4GisosU"
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
