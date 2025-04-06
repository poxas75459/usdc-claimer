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
    "5xn9dM8tQhtr1FnuZCQrkXb5By6YRJgTaE7zNPNyzUDKus5fqTahvQqCmdVffXmgqZcPcYTZAEmjzgNqhrMjnH1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lifd8F1kCr2xygWQxigc7kcjPru9QTPHi92HhraqjtyCRXQLUxd16xZPpxf35efHAUwzB1zNLEQXSBP3D3PwjtL",
  "key1": "38rSspAFjkoeftSUGtDZSjGehKACR5cxJHYUhHTkCCkw3KpZ5j7i5UZvmgXhMq84niN86jYasi9tNQHbKbTckWfV",
  "key2": "3TwUieLjAVRG59KNSoLTXaWTgiXmgQnPVxwyhqLm6gqKcmEe3nmAgpNGHJ7UvXdsGs4gi9KMJDWYnNikuQS4eUey",
  "key3": "4b8NvgCXaKCVqUfavhygxFnitGaagF6VQDjcVRh5x29K1XbgmX6nk52uCxqAJd6KpyBjtooyqf27ax2CAAW2p6YD",
  "key4": "5xgZKDPfWuGNsXL3D4Aa1XMQVPnn1Mmm1VLXYnfWTA5QsLRS3QPcSNoEPkGPkKUoSLfjsmwczWD3k1fwAnxtuZ94",
  "key5": "2VNLU5hCfAGSK82sz8U7a5EPxMEbFQeNmu5u9Z7jN6JJNrdRGeWk1ufJVThPLYMDDB1m6wvNgGEL9YsFdocJ6EDJ",
  "key6": "4pALVcAFDrpPFZvYwZ5jBMr7PmZahJEGYwLumzJtdjLCejpcfMME6gxQwDQFJ2BxtHVGDgYAsBNd5VKQxjnUrdqq",
  "key7": "4FhX5CTeeciy64UHkyAiHCESiJiMzJeSmgAg1hJZnAXZZj6jpbSFV1RGPJ54rKGn88KHP5DpuT4dzS275xEvkqPT",
  "key8": "5FD6mkoux47MvqCoYKbhp9JFUkQo9QhMvcgLPhbjUFtN6v3eLbfRNvnVwxtD1AZExptWe283X2X9THeGURnDBRkq",
  "key9": "FnFruhz3afK22z9koXwr4MHoziwELt4JUMPxEqci55Eyn8CKn6HhQ4tkc8xmhj4g9Em2XQ54xrucoz3qeMoMBxY",
  "key10": "3G3anjhgWx5kVgNktziDhG5HxefaT6GEqWw1Jjme7U1BwzYWBWTF5rzmmpgSRtufE8QVBUbhQ33dTACkbQ6hfURC",
  "key11": "4x5XjJrbk33qFccoNW8LedamSbuHY3jNsosm8PtpFeEtDwwnggVnDHwzdk1UoQwevPviMupMA2NmwxwxrTLJJKEX",
  "key12": "Z7kXGVE2VipYUULLr5g1DR4xSTZSS1KuYdHSnteZFGKbCT1dUAyUnqayCmDfSw2s1KiBZpod1tCtzLe4kHYS44Y",
  "key13": "56GTgm7GWtV2esj9cwpiTgwHyYhaAfKLwi4TBJPZUzxxvXFCPxsyEG24xVvDeGiU29aW56nsdUHCbc96yRR1gSu5",
  "key14": "4zosM4MDd6PA3qHgHPuyUQ1pQueFrXJfiwSFHS3Dc2s9vKZcpTEFfAEyg5A1FiWBHJxozvWLxmd82MA81A3Bs4Un",
  "key15": "3pyEoCMgQhuWRCcRZDsfiFiCh5uYqwLz7Jz78wjRgQAR9ZgmJbfN7PHWyb7uUCaxFBoBTRbozUHTqAfgoqtVU7mU",
  "key16": "2HeXtiVzpm7tev3o2P41w79o2BwKttUcJzFJhcc69m8VZH2xw1987oiNodL3YC1wmLV2FARFtGNrVFMwfQ9fmDr3",
  "key17": "3g7MExw3MXPuEX8zx1y6SaSt7xotEVyceSbJF9WoHohrC1AH2sTuYE8dcjjnApgAJ43eStgXF8MG9AQErJhmugAy",
  "key18": "5ZKuopAmTMGfY4FxToRDudyWmaaRkmGGJV2qJPKKruC8BasWmzEMbqswc4qrzvuDpR98iy46BvwTG39MECjCz9Jn",
  "key19": "r8qBQvoYqiZw1D9ERFzzBRDV6eeHTXsozcR2xga1uGPvBgrC8vNw9BYYgfPgq91sjnJv2XpaXZEuM8wi1EasVPK",
  "key20": "3C1zFaLmAHqtYV6D7igsitdVZbFGzkreWqxBxR4AxuxPn86gpu51F4iYKmhKRgb3v1qpE8egF33ghw8kTjFu44Ni",
  "key21": "3Frzis5UYKwHVoRAqd64vs9dBn63pKqkcbCLAkpZjg1AU8zbdtojgMAgtS1p7pXx22KK99k41YtrDHCKM7FsGWP6",
  "key22": "2U53zui5A85aKm4RNLa6m21C4XymRcfuwQ5NiuwfvBH7cUyJLwGWUydgY6e7LZXHupDyBTJNcmizR5wAzV5w4LKs",
  "key23": "5E6E6m7ZPBkyaTPuj8GffBuhyHiQ45S4kQtR8oauR8ki8nmousSWhG2hMj79jnorVqra4AZfyETB1fX6juALgE1D",
  "key24": "3aUvRwtiKAX5bTkjHf77j2Xgm1S3274ccbvokqLTvNtwR8XJDV3AFQoDHajPT12cDRp481shkVbd5kiCiqcvqi8n",
  "key25": "4AgpiMGBF3U6VLPLDLXXD9XnSygqoDE1DAxPAjJfzH5svYfgQoEQEpFqa3WbyqZT6TSyq4xhwYYPSu1bBJtufDiN",
  "key26": "3SBVstQ1VCQtfxA8kJV8PFbrb1WEtrW72fJMqMkByUyceYmCzKRrnDgDitcfggKAuutbmrTKvy3qs32DEjg3ET6i",
  "key27": "5k9zKso1n6qibaUF5bTsUcY2aECRr7pAgYq57UoxcqzcfjQ3YTu39oxsiKFvoCbY6dQBvkDK5SNFPiE4b6ohd2Sk"
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
