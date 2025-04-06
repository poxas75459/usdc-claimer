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
    "LbXF5F7J2Y1Ym4cfXu1r9TyGLhsCB7hMT4QkwNheMgmdr7cjwnxWqdTr4RvCPyg9dena3W4Bpk76TuGpWURFUBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24k2kTNvEN27p9Gw6kbHe4Mtxm9s8n35Jkhm3rZadEqPcTvfrVcgU5DJ44joXHYpZjvkhoKRY1YwL6N9MeXC4u48",
  "key1": "51xqhrihtHBmHgkfj5oDyRp2ujxhK8WTWpXKGfkYN4Tcir8uTuJqRjH9L347TTVR3aQ6aa7Rw1HA1gEuHjFeekX4",
  "key2": "rcUPzZSiTfdTBHHet9ewynx8hYJqeo8Gv7mpkHoZKE5CWgM4vjXznT2MzE6Frxffz3h4hPfrVgZHryuupmDx6SC",
  "key3": "35zM2o7NaR3v7udJEiMFRJMkaJKF9AWGPqW6Z9hcpQ2y1B9gG1JRGMF5mj42crcEjKHzNFgcpUb5geW5pP4Jzzqr",
  "key4": "yhN1CZmFXFkf256m3VxSmGABKY4AxracHcbeRbf5oWCicVHrp1aZ4o88o3dCCCYJfpovR9Xd8c2ccDBLiG1CdKo",
  "key5": "35HKPsuq9YEgNt1o6URmTqF91ngDBkU62aNm9W3DRMBiLccJXYQ6UpYjFFLebmNgvUCosHLBb1EHf6X3TFNPCTrQ",
  "key6": "3doXM9cmNLbY36EKUrRv6q9ZaTohcNsQDv6PVomzQm6AoznYGxvzU1MgnFT9fpQPSUT78WG8QhetxG7RDx1GoLBw",
  "key7": "4NGWxBtL5LZJUzQAeeyqpuptEm2nvJB7vNHVHae462LC5xw7uHdDrCmu3GL7yZV9RoJyWLD7DfqkWDNev3JmvwDA",
  "key8": "3dihnrLmxUMLBUq8FuYnv8NFVHXqudBmRAe4XGMtFfU4nNojreg5yVKY8kT5j8QZrMLWNdKC3AGdsUN4kkTWdm8c",
  "key9": "5pbD7yYuheq7yfH4izdKYieDJSP6DGmmEYc7HFZgismmbxfnNgc1k6aYnL3myG1KRHyAbTi244dw3RKnYqn8Z53m",
  "key10": "4T64h6fpWhH2SPMikSrsU5ULdsxVhCwaDpCdd3tSe9FTxmiFaNThduhRp1EDDbP86HTH3Vi4feA6nH3B4JtaxEh8",
  "key11": "3CtWopMAifjUGnHtpsDE7m5YCYXr8naPZB9nvPWJU74axu4brYynxzeHQmnYGjWR2wfm1BhWJopHwvJTVYM5G87B",
  "key12": "2gajVyDRo4AcHNU7W2XAaDy5b8oNMdamgHdKBu67Rot8q1bUH7CdPjv7ZJLruu5ttEtjwRVoEZpQV364yJzigwMH",
  "key13": "4QktoRYh7oSDdX2EiDY88Bmc4EbsmUjtJspyixYF4sN6GV6e96oSsdujv6cHXuxAoVrNL8ZqGJrnSZ3MfU92aK39",
  "key14": "4eo8i9iScvygUnh2naSrTjCM6MGczki6c7iys5M4DUbw3PN5rf9bFsemp1p4c4KJfcixmwXKz5P228NwZBRVDguv",
  "key15": "4AUiUvzA2aQYfi8XhzPDWwkza1QyK4oWz2SbzCeLmq94y5HbEyuoQk2FU7k8ahpnsmBK6cwkvFjvy7NskcseYv5o",
  "key16": "5uVLUZcrnu9vKChpoaCH4zvDQVzBvUkrgWaU9MNWjrf9vDehLSEqdfeATv72DnKma4madLXrnQhimoXm1gecFCju",
  "key17": "xUzmYXm2JHgfLYADuuhx3vJrNnWSB4ARZyPESBhStC1VQcweRmbxD22UT9ZN2wHapSMDx7urY22jsWqc6v4VYPN",
  "key18": "3P6mziMQqNXsoiJ1DendptVX7oPV6QUpJ6qU6zbhXmPpjJn8a947W3nYgoRV4jKw5PmQGGE6aJKRUAo71ede3M4p",
  "key19": "3uahjwKt1f3h2hTdnGhSsQBJupsTVhnKiXxpm1yy14xMCNk1vXuVHkNhyb21uwyiXVEFCfMD1aVCPvPwnpeNbGGq",
  "key20": "3pkP7GSXzmBNqeJLo1zChV4Q83NZiLHunDnZWE1LpaNgXURwC7awxRLpy2u2myiAXLFUU8tnYRgQoPFSQnSB34Jx",
  "key21": "25FKxyUcr4YT8wcFb73UXpfTaU64K93BWN1urr5VpvvQyku6TYBx18BYxCHDH8Bb4Tzbjxfo4uWKpDmgfj31w5cC",
  "key22": "5EfZbE8muasQgq7JfGZca5NafgWCzv8sAKTFUMzkyyV8CRRxJAdBKMdLwgbi5mc9s6xWHp4w3NzAXLe2S74fFnDU",
  "key23": "3R9bGAW8VWPRBUF9oLUqLPo8tEERjF7fAGcSdpnXD9pSDYKSQc7FHYdbXwTAmMFoMPWA9KWT3rZFNdSDReSvwuqa",
  "key24": "58DDR5v2x4Xe6WWgQQcxkPnxpGjdQS4zDQ7rfdx2pwvEhWUfhu72EoUAEfR8sFeP9RgCsDvUDhtBM4iYSPSss67N",
  "key25": "5KugMYy4g7ux3sXsfFG67xGXfUvaJoocrNbzrBq8YWLZxm1EFDoSqCN1y6Lgx6S8qARoesyG4CLbPhYFzTu65Ykc",
  "key26": "3zP2eMt5GRcV6pwbUtjVRXtJEATbVcW3esoEzST2cND9XgrpWBQy55gWeBxhJoNTEgm2wHvqSd59Hth7gHGXxuRD",
  "key27": "K4SnX976ygnErmUaFjEVhWhe5hjR6iJuw3XsPYEZ4wkvkRRyn1NkkHCHq7CStpPVXzLPqFcZ6VXLQLd4TrdH5Y5",
  "key28": "5t5ho4Q9vVN8FUDC4x4uN3c9mjw1cXiCYA2G6JJqqnRKukDpQBTit7uFwcA4tk6zw11gyqvp6ZynQEekpif2PtZk",
  "key29": "5ykbg1hUWDPR5V84QT3t8PG1fVhjhPJ8hnJbzEo2KW98TDf3WCaH2RKKg9bCTs646hJQkUbcAQLkLdQaACGKtGJv",
  "key30": "4Ls8f8v3U3xuePJgVJkK46EPxy7KkCJQYG5MHbKLHHECPVgBq4mEsAS89a8DkDG4LPAcMyy2C3ric5XTJveAtkbe",
  "key31": "iki7LjXx898K9qX9vLMwb1D5ByQTjmhzjoTKkjxupQsvL1359TiQJq6HxU2n943Juo2Hbj1yJDm4QVQYZGDGVfq"
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
