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
    "51trCCsKNa86xczX28N5M3f4reFuLKhnmbbnQQzhXXagjntoAMMEBrGmKrhe4fsdQVHxPobb9teZvdEon6rkdHeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QudP13GU8HbNJmw85mkBnyc8GZYzAdfcrT695f8hF4cDZNEPbyVPEhAnk5BxyajdM1UwjJfQbnF7b3eNSAVCPHY",
  "key1": "2vimxX7wWjZGYsSUHzw5XE4Y68wrhr68WvE5E4zoGx2KPzUWkSm8r4dx6kD2d6Dk3Rct9SCQaFQ6w9jUA4LpAd8e",
  "key2": "3nH1XoVauyrYvXWLkn3fyPk8S1ByPqzMaoF3GRN2zoMuTpkKqTVwBcYQPxhhe6CDgaQbVy6HdrSkC5CzptLWSdq1",
  "key3": "41kGqKaX8cPUr7bJdLz7spwp8aLeubEUs3sVnQwfECGpx9bKABXxZTw1BQN7cU88C9Wq8vPXAb7bVcw5mPMkQsBw",
  "key4": "Mytg7mn8pLkVVJz4k31z755a8kTzQbAskkjxQdL69P4JPikdBvK4G4wxMYe2envCHHdzxamYNwurjQuHQ6LwdGF",
  "key5": "2v6qrUfnMz3UcHppxTFc6tuU1rFNhAjTUXWFgsHWUb2G8KeYRGiRNmVPDgDtsQmzpCY8me73z7WW6JrTFhQ5M941",
  "key6": "3VAoa5pNSMiJBccAdFeNVnH5KqDrBcJrxWvMq9C7v8QZEibX7GoLdM2WhkH3MzvT8s395Rk5Ss1gmmjbPdJV7vPt",
  "key7": "2fbmE6mdDVh3hNSY61r6daPoTTa3j5EJdogAoffpa6AsRFXA1KdBY6RnHfSDsGKpYy8dHMzv4xA6BaL53BCciVKs",
  "key8": "5oqJPggVrqCyPFuipHz1E91coPCKCn32vXg1JHeXzK9zJJCFibSmHMbhvLhtWmqJw17MHLYfkkFcqAtoANEZo6Sv",
  "key9": "3VYREUvSCtQqsTyHss938auyF9CBkqAE969weJPSkzjWNBkgqDjjcQuMbmmgFdxxKBpH1uWEvd7DijE5wwcCCBgp",
  "key10": "4riQWYyy6WZCpJi49KWioWmGkMogiNmqQGYVQcikTBv5YtiTt8BEN94VTsoFBngMJ5RRuCN253fQ5bbRTL9fFMyN",
  "key11": "2QNaXpd5FYdBbuvxEWencqCDU5wDgUYK2ky48FQJz2PTuT8W7ip6EmUN8knYefHUHUuZYDg3QBNnR7BR24WvwsXs",
  "key12": "5iFrTXJKdbjFtDHet8NQQ8p69g8aTXcqQ53geqqvfr491Atxq5DFAwvbpYnfP13K1EpEfK1yiccAcU517mdNCwUW",
  "key13": "4L9sZLUQhfCK5GGZr2dYE8YtHohSEnVUwA1Ss6a6xGvmwGDtiTzTY1y7cuPY1cQrExm9MgWnuix5v7PSfYzVfGaY",
  "key14": "5KhTN8VnigmhicFhyqv3mGAGsSvQ1XkgY74231XpQHJ9iN6CLmv8bb9Qa8vY83quoX1NC6WwHsv67gMH4tc4FQa6",
  "key15": "4QcfaFVoE4mamUrqPXBNLoX7gCvtJizqpdZftNBFY3FQFkGFcQfUiJCHkd569srLbiFZ2crcQ2dV5Wsn1SaS2Ju9",
  "key16": "4vnxNySPw7pjShboZdtzhgLVybfzKBpiWrmQV6zof2r6HtLHGZN3SCKEMqT2ooJEoHNQTdBU31MTW58ovhXLbAx7",
  "key17": "123jKMo6MzufayeCHDMYUjUiLMJK2SQct8erPXQh7GuN3aiwU6Aeh3fmpeCmkeWa7tnoMLUZK4h4b7C9AkexDcqF",
  "key18": "gHMcmeppB4D5eKj2VzhUTRvf5AKJdp8LJexojNfjD75szJjyu3NVvskz6rNstP8mvLmnH6Gr5LkKCMTKFTHANE2",
  "key19": "5eTt5AgGBkUirDg17HSbbzg5iQsDyhgffMCX7Ma5SEEABvxpWY44JrQzwHnmmt7AsbwMRdb7fKiWHGvsa4p2p5C3",
  "key20": "yoAzvDzoon97rWtf2dkJjtciK9BYsJC6ETyJ9CHXZqkiby7JtjeSusDPFi8oYbVxVpuGhDSxkZXdXYsHLQmd7ZV",
  "key21": "5GbJ3yY5vQskM3oRgSFoVnrk1ep7bMmLPtwMY7qcEmofUCMbP5d6PMyxw4KgDTkcAvNjkM33gu8ebMe4uR8FH35j",
  "key22": "5CHn1Gse2nH7anuQSBGEFTE6GN5uRACupWmorpZjSdJ31FwZNbW3QA1KN2MRvksYhZo3WDFy9DJoypaVDDgUZG27",
  "key23": "2AU6bAKPXrMfuUvVXrF5sSK39EkkXPJ3mqEHdmGXwnz5Z5jPvyR7vHbX5dmzrMtFzK8CjR8MpHZNfAt9GUAZnmj8",
  "key24": "4npHuWqJmAevdHjh6uC9BanjcaXtHoUsCpc7HzeWswaTst8SX9tYihkfh5qRhrwTNBZHwDrZayZaZ5FL5Q9kZpgf",
  "key25": "4FhZZt7CkJMa28PBvWdd7txcJUpbHdSLrzkiMrp5cAEiMcUUVszqtpEEKrJgsLtZrFT2LYsqniSXFuCcC4GcYPQw",
  "key26": "2JiLYUt9mcEuRHsyYm85XsP3KpxZ7QBSJZgvj4jvyHbbEbPor51YwyPuxRqAym8vcC63ypFyF4NKQwnpriebpjNS",
  "key27": "38hdrF9ZhaEssqnLd2z38kzrknf5bWHYMkPH6qN9tMNMqKze4ZCCVu72pvha9QvS39iPECqcXnsQrwdCDMgUQoEx",
  "key28": "ogxXLtL79w2wHFzx4rY8tUjUALNfAoWsT3kTPitHTh5MQ3VuRYfNKrPRfudafvYwzHTZ2FUdWbRpXKZ9dWf8xfa",
  "key29": "pDi1ZBeHnDfZUoBjj6B5uARDbbvJKUQ3Xq9byR2akj3rNH9xGpADE5n9SXBuAiFpf6HQ5opSsPyafr5aLuPSEWY",
  "key30": "4HhNNpmFLyr82TcrfEU85Y65KewgpsTHo5UXKWFbXmdtnGNL6XPMpAbBJ43q4szourFe7wSncULGPUCQABUyAHD",
  "key31": "5FxDCGKmWmai47RJ9JogpjfrAdNRjLSvVWsDHd8P9iLPLLFN5DcXTY3CnuEr2eZWcwpfw5J4CxeWhDcY1MmhxbAf",
  "key32": "491Htn85hFffG3GAkghSMDXDw76rzHcV8NiHtBgevqbFY4zz7Jf1n2yuFkd6tmmurnfLfeZkGQkALoJBnv71HMGD",
  "key33": "5we7Hp4vzMP5dW66iSJf11TtP5UN3qXqxQgf4PHFkSVPyWxt7t6BRd4d9uexavH5JUw3PsUFSvaJbsqvEkUeZh9V",
  "key34": "3Dfey33w1nuqZTw9xDv7ycqVsQpBxUHD2GcaF5qpnLc8SFHf68rjp98eyZtxLLgcvUXQy3SvA3xKbRfDDnuFViiD",
  "key35": "2y9HhN4YFtnfQ3qLoZqf9aPiBWBni2iHhBZBYgoCaWYY5Mmo45mo9gWbGeMwNz5gxK8tWGXEEJ8uwQ5vLekKAEC4"
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
