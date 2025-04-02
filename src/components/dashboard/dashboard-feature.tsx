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
    "44JFWsmGngN589ACb6gXnxhQJu32w6enLfcWbXFfKRy4LwMiZqXh8pajM2XyHQHuyWKW5i613CHXmKbFx75dQ1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Me8QrB9Nq1SsTrp6XMw9VZiXCkGjAVm1gk777zZ8xLubV8pKSNDg3PvheAvxPWvzxZ7PWHsh8TG4LpJ9xgEwLzF",
  "key1": "3o2D7DYtbxYbUggwb4KBVcYQMh21guXGcHDrjb9ZcaRdeKpbxonpkx6Z7cjBoCtwH4pEZbNGTRzg4BZ2H4hwaw84",
  "key2": "3FCsDqSi6weMr6AgBG3ngDzkguDAeDoB9xAFHrP1NG92nHQQiVa6Brsyo9zsaDAPVKmn6z3dVPAFJ6VSAqSeA4MB",
  "key3": "rCds5qpQ8FA6u6e7gNpF1Wb5RZpHeuHtLN11mqF2MgcmwJCT4JibEUzbwRaszmQte2Puu5Pj9mpNKmBrdxdeTt1",
  "key4": "4nbgrNCR4TqKxPLp1rJFg4iPEn8LsjuR6rAhKKPtjkArMumKBJt9B5oY4nmppuAqiKMkXfTX1ovSaVbv1XiPTj8b",
  "key5": "279G4Y9Gp4mzP5Z9NwZbfozsoQMH5sYg1ZRP5oYD5FSu2PTMWMjm5smsSHVw2Z5VVm7jWJSWoqPMMJGqUPzhQr47",
  "key6": "4BSgSWc34dugcy68axKZGfRX9a6Z3a1Rauvg9tkt7CshYmfmG9eRtHRpjT1uzVEcc1tr7JEemMW1Q1QY2DjkQ55e",
  "key7": "QJo8ZLzhUt1pti8mwPypvXLvo4qo3jGf9LJJqavU5tvo3ZWGEZXbqSkSMi1zWJToKEXg6d94TAfb7UERcwngBSP",
  "key8": "4aARJWa5DJXUebnz9jbSC4dozUnArVi4ff8ZaKaQhwTxLsJgP3H8DYEdCf42uNPxfPpYgffByxE59niv2AS9anBS",
  "key9": "44vzhmdUcBGdnrjtZAFiAGb9p8wTqDMDsxrtHrX4t1mfzjQjKAzXNRzchjQDqWxmxjsfmr2a2LfZXTZg2G6g6n1B",
  "key10": "2JMq6QHR4ajEZTyMRmMwkF1c75xR8KoCd2U9YLLnZtxaaVfq5HVcQhhAVjEi7p952vzfFBFJJM2besqkPNePS9Ya",
  "key11": "YRGG6BJFb8VDFteKHtGATL5bQL8PQmu6SHqQTz5dJFKQvwXbrw1u9bUQ3HHznGFsckntRNme8Hi6k8YZVoAp3Ee",
  "key12": "4mEkkBLEaZqkF1VABYtbpy1X6rQnXM5YSHGkhFyhGQgUizMFjvc75Y22s1TEJ5N9bBA1jMizN5z2pqEYMN5WciGb",
  "key13": "3ZvLeAqL23ETPtKNaaBzTcTg9jBvfqDFgUNbYKXdXBXb4Pad97bYsWsWoHAxfBQeG3Co4fUVJfFcuNYa6PieisJw",
  "key14": "LwwaUTiZBCSoQQbXDpMeWQbPtP1ZJ6dzVq5sJrMay15MH4PmJMiEyV2vXZ7xNGZdmuy1aWcizw3aRLcPVAq8hhP",
  "key15": "5uAKKb4Fu9rRqFs9jZCanUcQG5WCUwfiktZwhf2ntybv17tkxcmxvy8Mm8UCekVUdmM8jpNrbG4abAZSSGDj8kEc",
  "key16": "PU39fwSYDwPoFuZe1pSaJ3gMtZrMMr64zqCY4wkj7sZYCaVUtQXw8z4WNV9MpJ5X1UzhGhzTgNAMZ1WTcDaaxW6",
  "key17": "3ESGZYvWNXwzx2BqkMH15qqYBhmhAbBWKH86CvFSdTVqenu64Ys9zRb6eybBevqEVzkdwemqAB64ZdNete1f1Er8",
  "key18": "5FrxVso38XJzm8vm3i4jYuPBT5qemS28z7EpXkmXc5GBu8k7zuZfLjCAEgd2rcQu3tp24teBNEcHvwwnH87r8M3m",
  "key19": "46T9QMbbUQ95XNLSKdfmfNGVnsBpPSAXtk99c5WtGZ6wFpQUHETZCFPNnspUFNgkkLqmbqGJoNWPXLKeweA32KSG",
  "key20": "5dHX1kLEv5UgcVMBdS8jf4EEzEBTcYsBpFZk6K2rTParsijzso4f8FFg3eaqkYV3HuhXnRz5qBPyAwKiztQRmrrp",
  "key21": "yMXgQqLTuAtGYuGvNaN18cseStrW9RDEWQfRN5f414oabJsXD5kCgcvVXcVePfcN9kehw6q88QfcmJYDxYjNekU",
  "key22": "YLUJVaQeqYEiM7DpGzAHow25xByQJiBYhyXqXpf4jM4rbDs9vafdBjdNUSP9n2UbgQjG66exVoLxpStWKDFSfAH",
  "key23": "dfCfyDkHXgPJd5KdGNs9n6brJ7YBQNPNKTr1wXFbsQNnuGFJfPN26JFbxyu6Zmm6C7NN9LqjVQUdM8ArxWucAWb",
  "key24": "4vgKwu4NmEmiPQ3fcVdsmbPVMYr8TM5tArvYb7WbdcxEqdbs1B6nspFebtMEKeTFzLAsvKHxVmLeUfFiG2aN6CoV",
  "key25": "4jLQebKHhc4EeMrM4Bk8Tt6a4ybipwEEy7LeeegZTgvHQ1tPp1nVXvoyjXveW7yzs9b9YhJb5e84vYbsqjHCCg3V",
  "key26": "2F6zTvFVV2HCdAR6ohVsrgr9SwH9vETMa7d1fXkTqpUtpov3WtpKwASFqbEqoFLKZpeqoEXGKR5r1PDRw4CvmrVz",
  "key27": "521rHiz9HY2qmTQYmF3MwWCYjzWArLtnUosRqZyeq1cXXAfg9EFZ8ahNMqZZqvCVyKJ8fLbVQBaWsu2hFvEX4zSk",
  "key28": "3iHznWw48v1xRaN5uEoZg45BHqqVW5eF8asArUuRivfqbqPcRL7j74ixSGzDysLQH333CyCnCtwqdSsnP4aMAoEy",
  "key29": "46uBZtVKDrsYCAahhndtzWH7uyyNdPFwRkYB8M1Bf2pM2JLYt7Re6MZVBeo4ZQcEPCAQvgPhfJBGoWbXqHTay3qg",
  "key30": "3ALQGP47msFJs1W4gnMg85GFvawbbgnYcpEK8maVMCDLSQtQfmPPGffH2afcNfPsZjyuxHH1x4XZMtdcYz136s7X",
  "key31": "nPizEE5ZpXuK7zaFac8BWkKLd1rwa5sjUS62Wv7ZBzdBEASVhiV9ZLSxJwsdiy8ksRPjcULwd42iyX8yXD2na8K",
  "key32": "4quj5aJ7rPH4EbzWoo47NByULGa3YvxE6q8mtQ4xzx5sQfKF6qi4p2uNvUuniPLFP4gQHMC69ezd7mwtDoCkoqJa",
  "key33": "2qzH8htP3NuXJGUNDxUEC8Vm3qxa9fvEW12zd3RiAUJ3rFofR3Aqng5srEcyUfj7XhrmXjHaECdpmcpgKxKitUeq",
  "key34": "5xxec8ZSYCZUjddoUnbEcsHM1ABzRAKNXUvwXUgQS7EvfQcfUqtZ346HhXuBLn2jd7A6gvQrGaxHXDTvAHZmaYuR",
  "key35": "2NV7T3v4PsSY6z4LYzKg44AZwivHKwVoxL8T46CBQZntCZjWkRq9pJ8MwLvqZF3c6s1SqvEMu53LJFQoryPyR5WU",
  "key36": "43616cxGRJfstXAM1W2B4LaZkYYRJ6b9DhpCDhV1mMapJcHGKRQJzDZnSeTEeGkSEz3xxdu8pb7SjDDevP33SiEf",
  "key37": "2oatA1NoememDauy29MLmoeGzehujFAhaAoZzncik4ZRYZia3nvzaxGJr5vigd3bw9ArtqtmNLzLDt6rcW7LVXVN",
  "key38": "39N7zwjyjpreCckMh8F2TnijbJiRfpJcK9BwJe4kS73y4S6C95pW6a3SXqPBUj5qjQDhFfShAoWdPGYzgEvXdJWN",
  "key39": "XDnzSEHsnRC5V2CuxpjFtYL5uzTGKhe8CuV5RpYtaAi6TwyJDkkRFpB6CPMFXsmTCebnyp7B9K6mquymEyvXmWy"
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
