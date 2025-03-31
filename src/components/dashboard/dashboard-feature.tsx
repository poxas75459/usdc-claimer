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
    "bdCbM3G92yHXhaEXCjMgfEwAqTPUNRWdENN5txuEVp8kEp35YuTqcbXGoHsLeyU5RuLpH3ToBVM7ay4CGs2aLHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2soDxChNQLcrWR7y2EVR35PKDxrpavhAyF8Qdx41JFayu34qohVxErKnH2bNfgEcHTnthNRNePPLQbwzetZaWSsa",
  "key1": "5EW83H2x9iZ3A3Q2ciy8wL7td4Fk4FagNJGMYpPA8w4J5sDFbACD56fPqtNBYgwkziXZf5T4cKDmNCvzgCkQejEZ",
  "key2": "9A6dR7EHjFxFKGxNpUPTRkG1tKdR6cvgEemjKxiMLixd4uprBtKx8KfEwWRhCvpUL82CmV7x6EYuXWtsnZ7tTwD",
  "key3": "4xbKStdw7xbtTsuDFFvqWKtF5eAxee3wCrX9XmRUyoQnduuyZ9WYkdhB1XXWLCLDigtd2ZWZLgrNGvy6PmEjQ4dC",
  "key4": "21RdGtJ8qqDCiW7qjMBd6Pxw8sYiiidMix1HHAiAxy7zEYTxoAPssKi14YLvuSa2q6C3h5z2n9UDfJSRNAGeG8WU",
  "key5": "4vazXjZDsNC4fqC3y3j74y5LExfxPTLQrvCsyhT38sY8FWwv1r5Vcqqvhe1SLR23nCGudV9j7AZdeuf7ZJMhXwgq",
  "key6": "39k1erB4oXg9EGfgaY12ZFH768W466YGJiJYxHxZK8JRyUeNCbJ4Xm4NGsSRmGwrCToaFPeEtLDM4SDa6z4yAXpU",
  "key7": "27ze5ugQWV5Aori8esZE2tKgN75fYqXi1dRg1x24euV4EecV7GPpxRRcmRpSfchE1xEXhmXkRASqSPqxXetmiPcF",
  "key8": "2cXHeQJBru3m57ezNLcRNuk4gcwTobLFb6hZdZVvRcKmZHHMBmHb44mJdw2F1zwcrhvGJmzy564JXmAd9Dv3kWMv",
  "key9": "57mmX6yNayXri2h99Tq2EVMjNsuEcCncvBQ6o3Eozvps4A4xSL8tKqbm8voZ7TdVpVjXDpBPkfsStnWW3yamQeQC",
  "key10": "65bjy6fdYArUuaWCMZCz7PHNyGx8ehzmjRY3qoRS8PD4uu87euaWBhRKfSrWMB8AXuvb5WDC4924QV4FguBe9D1X",
  "key11": "2bDCJ5KBkQ7ReAf8DREJ7V2NJcXH9kvbAQfUZPgjohhP2WBzoh8WKjxUPXoNyMSFFuzwJrThMvnqDNFXk83uKTHn",
  "key12": "2WMkAUEXDmwADTZLXAA55pFNXvPyMz8p5NxxszAPj9ptACqHDBdnQRwwXjDEDLAWzYxRFdsCrbLTPyKmSLnvWjnc",
  "key13": "4jyMNbZUs4ZUkAedxwvMcj1vmdgfcjrNHduuKsetKLCTVDozrtKs5JNGxMC26HSe6YQX2gDuaEspctG4w2Y9JCrY",
  "key14": "2NSethYLTU5SYc5MbRY7AtG4ysawdFfPDGKp9TQrVrEy9H5QEc6G8e3o3XgWYdGifthZMptYSjhNtiM2ZxhJU6MW",
  "key15": "36k9XcPbkEigt6n8KP9BaUbUdganWH2iNzFpfMgRPJQzhbQg4HmpcLVyB6RQCxodV2QBAVvD4pjqibs4eMHFT4De",
  "key16": "5euychtMBSg3boawjMWmNQgVKJ7fp1pcpoyRsGmeGUoo7dSBAnFXE2UeJQRzcVr5ayugrU1xtW4tGru5tWwn9xgs",
  "key17": "3h6X47p4VYY8qVsdyH5Bqyy7625hJD3hgjWpyYXUta1zns5s58hwwfULMygsiLT9gJh4VqAwPtwbYLVWbLBMsrLK",
  "key18": "2cCN5h6qVDXLJSXxPkL3GmiHa2xjiXEkM3szut6G9kFxpfofQLHjWi2WvZSCB74LNG7JMJu7X4LinYeUuRYPhsET",
  "key19": "39ZP2u3osYwRgrmTRyCraQ8ZB57yVEkSPURv695Q77dKisfuNbLtxSHWbYyLqzeMBhKcvwH4eb8UKHH6R5dTAihS",
  "key20": "52NLXoBxSHhFDoxjJAf1H2vJ7JUYTT5heGWEvc4VzorD33KnP394r7KvKCJQhR1of4g2irG5mT5E1mL1y5iemnK1",
  "key21": "5s5mACZid54PpNvGd9PXtZQr7a11Mx5zhVCfUBfJC2Bqm81PCMEswnkCLrppLfr3NcmSAwEcgSuCHmYEJBtw57bt",
  "key22": "3bXVGWvb8MWNq4UAddUKkfTvGCGrVMRVyKJ2GcoQaYD7fcXkd2QdTnEFTt4HEjTqSAeHXwEUw4ttGs186hRJ8dz3",
  "key23": "5kG96LV1M2XKYyxP7KhxSKpumWJTf1jG69qhXRmF7hgLyTczeihPEFTQL23n4FrjkknmL1ig6Bxt3Bq1894f5JSN",
  "key24": "RAUXgn3jmQG9dZpMbf6KZiNk7MAmUxjynLG5KFjcPEwmWjb2jdGg7bmrfusndyC9Adhyh97mAYjyEFV2vVQQ4wU"
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
