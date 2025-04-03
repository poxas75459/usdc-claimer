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
    "2Xr8zHZWT416MwC5DGdMxprnMFUCdc2gwnGWhxUCUEKTGoR2MnRZ5cYNM6NA876soyqN4sqW9zLM7Mk2AtMXPhcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KW1s15rkCKfhZRxoMYwkJsE1f5sqL7ABqe8maWp5WnWcV2DGeAMm6V1U5MSVoW4n9KMGQAj8pjDDZXJj3eBCh8R",
  "key1": "Xcy7npe9619QnGSXKZbJV8p5z59dXG87pX8p9Qmj8dNPWpCB7MxyqVAu7B6U4LGJ1rN5V5bGHtokWfP879YSKUb",
  "key2": "3w3ECkPBavtpmU8AQhnEhHzMbrZF5NDC2hfcbQgLYgnFGDj7vp5BjVHA1oszuSBiCwY2J8YMxXncMfXyjR6b6N9u",
  "key3": "4aiK1rUbHUU2Rnf8Nn8zXp4NtbEUP1aSJ24j6ozfdUeUYFTgCw8nXkAYQWrydvRUEdZPjcQb9FGFBTVXwbfJG8F2",
  "key4": "2Fimmm3jZNYHmMYoNLu3WX3MjCfRvXG9XhjZd2bmAjQMDfTPqJ2GSDaobL81pGMhukD6N35BWNAuaDL4ysQ7vrmp",
  "key5": "s4zCn7mqEHEWQRLHQDSKHDsPYZV2MFbnj9KseWomZMtqSqowm75XF6kBBCmM6wZnafFf7VH2JSe56kunVbRqsUc",
  "key6": "VWYpvxqJ1YMq3QAxZmFtqUjYtyE83i2ERGyTa9x7iPvVmzYmP2TKpdMdreTfbLUzHu4bZRuoMF4BaSEiC8uXPJp",
  "key7": "5Kh7mMyamzRtapACUA8HyZzr1hHvYw2Bf7R9gzuvZSQB2moj3TwgWZx7iof3p5Bxc7TEfwsaFd23mT5oSP8tjRkR",
  "key8": "pfMAQBxkydrHBs1hZ7JWJRAkhq7tiK8N8Z9v1TqMqezEjnZxnhhGNLbrUHSYHLkhwChtUzspv6NwoU1Cu8DNHUP",
  "key9": "4W9uQ8KKpAsQBsqdo5pT6D5SAf569FrQn7JcWfyUpkBjmk7cBy3Sm4uUo1vzKgnDWC5xc8nrPzWhcnBa6uHmTPQW",
  "key10": "4xAqzUwp8Tntg4wJ8Gry9uSfqHaD2NM2AM8171vnSh7UJE6xf1Mpa4ST6Z9cAbrtJyDiZDkd6niwpcSEp9e4GFHS",
  "key11": "C3cYgsEiG2i99oYy6tRo97r9y5KTeGGn7vDttZiLFScuj7DPVSg3nMjtqtKtok533Wuxkzzigx8BwSoZ5veVyYe",
  "key12": "5chrHk9xeQFWpAQA7VPcQMAoYRquDKGNrWPLjHenqxFnk3ihAYzznq5BhbUu2oTjh9a5Yp3irDLdUQ1KKDxi8AiR",
  "key13": "5vnw7JMjEEDzKPz12MPbafLUt88zTXarbNe7AHsy3s7EfmL9z62y3eEyoHViiUs6J8zPU2cn8Ryrtr4WTKTUbeVJ",
  "key14": "2YR6rSLg5oL7mUs3Hzegd2mHovEpKfhvxBxyM63gtN4PmzgzAkX4QwD7ewqv5SqiFb5frRhy1fTsCbKu3VSUF1Mq",
  "key15": "3HmoqHctgYAgLXnPZayL9NASemmrCa8JkSjYpAHBibbxfkjMPuUiLd8iF6vczRQRAsHfHsYMqEhCaevz6D1XCs6U",
  "key16": "4sgwcFV5gPtLKbLmLkVWN5qR8CGG6uU7ni4BHeGfkzp9Cwf7Yob2tSF1d6hNft9mHhTVpaMxF2jgS7Hzfs5cRJqE",
  "key17": "3dmaZeAdjLpAacDyqaPJ244LUWLecwg8Sv274M2fwv3H2tjLCENYWa6pFKeoJ6JnFoysM8TugEEvVb4bZGxJk1Gh",
  "key18": "5bhnDpqAdut4YuEUrw7MHKgnPoK7NAVPCnWrJvQdkU8tU3GJSf3nxpcFKQMHXVAptKEj7DL5ntwCvGBy4fwe3U5q",
  "key19": "4TTcugCyN6WZginD8gM5LEQWkmouQxzPkgfGBeiu7izTyo46adMn3TGgnJEcwqiwfPAKKn9FZaVLuNAJZCNKV942",
  "key20": "3bijHM2KVSw5uZGATCXC2oxfrbTSZmFrD6HtemBTB2gDkA9R5T4TZeVLZiVejD7BEknVwae1ui37KuaNnoM8MEaU",
  "key21": "m4WTLo2eFKBStfX9BH4c6yBHvjSRHSUgrYVJ55Cfex62nbc98mHLgDWfZzkPDb2u8NhJhL3ADmzhw6DqstKsQS2",
  "key22": "5E1NSAiLSqa1K9kaVGgBab6VGb2JRxzqF4z17PsRf2rtTFmPGSekpzaFu1GH8mT9t6aDGFEQMvUGtHazrdiA4qEG",
  "key23": "2CB6gqDyE9WKKQAxqhZKqvmRJYSRoKJeMFYL6HmUTzetq1JMr5L1rBdMbQTMjm15DhJLajykoaK2mk2J2ufjMzHt",
  "key24": "2yx16UJDatVFh46ksmJG97qhdXfZK2mL9QNCChxa4G3xtkbSDUGjP3vN2stSdcHyMyGteie7niSReH1ng8LkeNsr",
  "key25": "3tdiBbj6Wiw2eGfZVdHUNXLLMeEYL1QNFNkKhv7gmejxxjWZWGNDmaPUZY71r7Tfw2UMGHkSfBAsCb1YTc7dfg2y",
  "key26": "2jtALyxkRngdzmpvaWGRwRhVpVzShUt64njTG4K2m6WFkiN4mFWzo5wnSZFYgGAXAHhXWkrz4LzhSCzSywTmTgXp",
  "key27": "5kVyg2S6xzVeSGfr5FCxH1ZJPEJWMmbdBRBVwtGo1E7QpBDoVhPM6KJeFdnTBQXenkFzhSmjdWc9AdSxRAhwDSba",
  "key28": "DvV6oyUXHbSVYzueVRcWTCJESCC1nFJjkUcWRgKKtKNE4Pr2CUFUrbjFXGeuoyJ2LniD2Xz4cC9k5cSizpGWtzC",
  "key29": "4dQf3Lt4qeMHzqmi4PHRU9Fk7AZ4B4NwmJ6LqWnLcgjmwd4asCxkofSg9fv23wJXFKy8CQZ1qMQZ7yRGUUk2HBDB",
  "key30": "5R1JEDipEREqiPosoCvWyTN1p1eJjrkwgn5qfa8ML35aD6DMV4oj1FgD5gg1EjPe5MHztGSR59WFQ5rQQY5RSUEm",
  "key31": "5Uc2BdqDAYsWm9jxJetBqA5S8uMnbX1B2dfRJ1YJ5dt9M1zK33mLBktAMYcg6uzMv1jBP9t4T2a5BkGUmeWmFMHY",
  "key32": "3rK1kBZso8MxgNFUhyxxB3jEpMCc9DUhXaRTCQ4X6aK8yK2Dbov483DcUWbp7e5ksM3GtziAx27F7WDup3t6yjFZ",
  "key33": "yNcZYew2fMCMmGQc9KQn7ipje2ZmwBFzZw5mn4MGR1JnUnAipTiR167xY2VdUphUvti4tknmcQ7kdqqUvkz7ysK",
  "key34": "4u7JFHEwWBdiHoK8rakQ4RcAUh6PJrnqxRf72R9o1MyUUiueLnBwNwb4KimWjYZhtooqx7k1uV7XWJX6TitddeCk",
  "key35": "nmpfmUDpfQtg8DvrLfrfQLWpwmcGv55PEi11ct9MXXYwVAPiY4H8vDfCDq1RSpXkqJFQBUVgaQvHspm3UgCPCon",
  "key36": "4xFcEiMxCGv41rCk6UySsmccG2AhxcttEJfEFR9Wo3pPfA231wYhi7VhCN49dsDCeBAtLavV9eMGo75w64ovrGjH",
  "key37": "4CdXxZXRSMJvdbXvZkPoXAeuH7J5wexG5Mrw3wJz4zEpK6XpoG6r3GuapaFVEMjNBca6BGyx1xJJ6DXEpxpiM7u7",
  "key38": "4r9owbtGUXuT6B5j2fWCJ6WZtTMwrQPNbT2hKXv6uTKmSSAmdJzkjLAHSE1srRnSQrCa71vC88G3jMMFSqW9zpUL",
  "key39": "4USjEUBn5RvQQjhum6pez4hrjX5nQVkqbbCM1fyUbpXvEYPpTwLKsoacxAX3eZUFSijKb8YskhTPwMs9yFAbMNAu",
  "key40": "3tnt7tSv6CXFcCVb1Y5CByLPL34RVDtcXCZLzZs4Bm9kAJz6qgdjLwbRd4waQFt5SNoTyfwXhudaF4mgA7xrDfH9",
  "key41": "24wKo9JnsP6YzzH9EVifMREaeAAQsMG2MhveaVCk5QbjY3nX45PThsokcZ32NwZCVj24jcfMK1CEcxMUu4kDsyhy",
  "key42": "3B9BawrUMT5rhr6PNs6XrX4waMzsv3VKLLNTMb8rFNkbboaufS7L2qoKeFBGniPbi9cMNSgGiZUVtubuQBoQNSRN"
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
