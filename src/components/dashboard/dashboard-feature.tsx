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
    "62w5ngyWt4DMHnRaB5DCnYiNUeSkXwGx1SYbYWgr9ib5qyx6RzRKYXKZcGimHamUq4K8DDFwqGTrdZFswV2QEFV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVpkbJRrZ2mSh3FRZgebTKycMcqQ8uHfmswRrVe4KEkojuqKaMzcxKiJtzhfQ2bpL9rQoeqxKfVk2WBv3nCDX5W",
  "key1": "2433tHopvZ2FDRatuRDdJZZ38eQWf6shmE6zVvsfJb24sWNGsziMJyYquqbLwLkf7j5ZqwJJb8CJMQXjhaUNRzvi",
  "key2": "QnHA13r5Lc8FVrjae9ttnswhvgMz2DgsR3wgLfdsnmRQmU6Hk9rJWnrnZFFJNhMbWnRRebyqWYwiu5iwMm6eMBK",
  "key3": "4jjkqfXcJ4uXyjgokhdVhNKoxmuWmbagT7Cr5FdhLFWVf2df57LjHWo9XTNNoiftCr6XuAFjg2kW9ek8Fsq5Q11J",
  "key4": "5fFceQxuuS5uGwfSLv8DkRryRXB9Tfh5zeqaNgpGNksXBP9VcoGkqd7t4kNL1AZaCgwrKppcJ7M7ZJ1vEXt9d85K",
  "key5": "pFogjmsMuUtyfxUdGm5PoxvXpvy3FQmm3CWBZQGQ4eVQ65dtjjWUfhjrYNQHr4NDya7bewnk3CyzFFRzympTk14",
  "key6": "49SdAx1KgmNakKEGFMFuj52N6bgLJiTcd5YSdRmCVhc5G686ZrNUgo8nXCEL81duPYq7fBv2rU82PBrincATrRdU",
  "key7": "2h1yNE8qEGhd1i7j5DF5qwuhpVdivknPxCYLzUgkAuhYD4qXfq3NWk44GqRbJXFSCynhUV1bsNvPTSNuWAMRGjR8",
  "key8": "57ZvpPgminrVBeQi8N2RtCDorgKsXZ3FB3aQCPXNrhY37jXo2p4DL4krwUoBmo6PqzeXkyevt24xFfisnGG2N2zT",
  "key9": "2bKh25jWo6VbWEhYco2KS3QXsRyBzLM1Gn2YDY27yvK5bEL6HMh2LbRBYStfrpf1YXxp7eRGuryt2cF413r7mcsJ",
  "key10": "5nU55tADbVPo2kedBhRd9iLHr52S5K39cbov71uYyHBg8SU324V7HfpQqHFkCWBhsxLwafL8NLF8yLkAeqyLJowC",
  "key11": "nFjiaUoBCVrWDz13TvjA2as9wP12MjgeHMj95MxZab5psAxmEbSsR7sKbFAfy7ZapEc9xYPdBvuyCtfvwqXRjUJ",
  "key12": "YKs2orb6C3YoCTW6j3vQe9x3pv2AS3u59yLuhigJxV2yqLYuCAsJWpDSKDXuCBLbYGPn89Lz3xJ6iziRYah14Bw",
  "key13": "2ZT4zaWDuHjZ44sQBsuPSwoTsJA69KQgq5uRwhumqWW2bj8de6RThgsdoJPp9j1JM3m79dcG7mQRw8X5JUmFrkmC",
  "key14": "65diqq4KffjpU5Wcq2LjjahLVrqZgkFE4nuvjv1sEWwNiLnZktQTH5m243L6iY5xp1LPqgYxqzsRJ5Xu9tajDahA",
  "key15": "dG3i2thUdkKVWDWc7F5DMQEU2bmzVC7ogLbdprAp59vm84CDTxMAngf2v6CXRZPigXMPWGzogHX9mzCWddERSvU",
  "key16": "KJAnUDeAHQgTubSaRhc4hkLW3myqUtQjr2Jgq3b5UVwHcEzoSxsFg2X7KirKBRt77GgtZApk8R3ELvTs8zK14nS",
  "key17": "635XPHnrFYzcaAxdC6unG221DwmavnH3TDCxhFPeYUEe8ijpjkhGzT1bMd9UfcQfCPKk4GoRChbXJzzHzhveq6Gx",
  "key18": "53CD7mhx4eUn8bCURMDLUdcJoN7spxLSLkB1UZEXkGHkXVxAcXoiEhmBC7fDRMGMwQUGqaBchZkg8NVNJ2WRwNCN",
  "key19": "3YXUYBXEqxcdSW1VbtFRVQXPWdAG11cGgu14B4QnJB3LdMJ1uSD5JJtJjTSfiXkWhTJcW1ArxDKLxeXimV774syk",
  "key20": "2X5cD6AC14w7h9CD1chsuUxG6eixHWhUFyjW9nyCFUbAfLGMsk4u8gtLdAJnTrYJUVZBzmhsFRnTTN75zB6qprzP",
  "key21": "7KK1cFSZE1hHRpofTbPs35rvu6ZDwAaeEqx8SeWWcNDi9uS7SYGhxEqtVG35fKbWVzxwQst17KdScobpiZUGj9q",
  "key22": "3Xc8Anzrk1TAZL1ZNvtjrznyHA8X4EeRKZ58vbuXAENHxTUjPnBsRB9wpUHepLqWubeeRiNWLj4yce2uPeRfS98d",
  "key23": "2aachSC3mjs57cAsVyvmejTMWn635QU1fhvB4WEvpvwyKhjDXFxTcoyNKt8jLgHwyrKxFgRnZtzRznkwFL5zoRRh",
  "key24": "3FqRsnooB2QAGq1rJetmm61uzGXgXLD94LT7M9NDErfr9Y56f3kDgc6iPvfFA9jERXyea393vQzdUR8nsbz7TPWP",
  "key25": "4cuGCs5qHRMMKrCsEdaPa9miJsSHtxH76BdPtS6esPpzqujNjcoSdQn3djqiFXueF97JvWEGKCZtVS4v9iVhTJ87",
  "key26": "2EwGNJZScChM5gzkBHPrx5K9n7sKa9SxSkwuk2axm84q6NQtD2Bqcz8nNnu3tQAGnZDJhUwUgfqe8F2KwdbKzGo9",
  "key27": "P1eMXrRk12LWEMG9HJJtfZaNhS54AyCVZzreoscLM7k3xxzDkh4aEsrKfEWBFarJmsoLhb8BM3WPcT7Lhwyw2bb",
  "key28": "39QRg5Cvp8HWRQb1A7zioTBZPAs1HE5FhKKHuqVy4tSoUuJwqTcQu42YWEGgfz5VD1ZNWoA47xZdyKW7YyZhTNFS",
  "key29": "2gJfPP3kAfCa8WZE5tycTRfSzLumCpZoHvasjyyTj4jA9YJctXRsjjsSzd1otZjCtPuXskMdM2bg5UjqW3LBAAEN",
  "key30": "3bNoo2TM1PyT1Ygp8hE6Cde6HGwYpD17wAZCPszzL7ExjDfAzvsqs4cAdWzhr72BGqQYpGEzKxjZcmFyc5xPXYCG",
  "key31": "4pvqCbJEXKXfi9tnD9RZAhSmUQaaA8LeHa4tMtYABcCbgo4ogTtRuywMqZm6SkYezYLKX8SHDXSzHLdLJR7MKTtf",
  "key32": "4weCxsvNSw6b2k7QcMgGF6TEwDeapvFzkwaSi3DKYQznyaghmrsQZcSxRwHn82bxydevuZddcjHPMGSsQrPty8SH"
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
