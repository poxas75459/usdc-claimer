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
    "cjYfmoAJCEtTWbHLFzqFZt8FZLQrT9QtXB1NLweaqvBKsQLVmYLYv1Y8ZqSVyh9fWJT5wJAyB84FcFZ9g2hS8CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438vzXYv42njAZVYn3UJ9crQuUPXKBgS2WHa6QC7E2igWfeNBq2qrzFd9st1sGcMF7R5HzcDYDHNGSxf9EB19heH",
  "key1": "DaG1nDxGgJ1TtSugFcjSJCC7CkgYj7j2aHVL3WeYLeN5wseVdDytL44ePjyFXfCo29bSTCyCRLbLUQdNz21JU3M",
  "key2": "4EBoAejGZXBtSU7SjkVRuMw46Q3gcKXnyb9mdoNUzitkDAbGZe6bcwVyHkRhfS2fV3quRyAKV2DSJyAoTEHZxnks",
  "key3": "2mVfWu3pwf6bCUPRzwP1xxaiM3shLmSYzszTXGqfLPFwaThoY3csq42mdanUUPKDS3ejrNPii143nse9cLE1AtJT",
  "key4": "4X7BZ3iMFEdwGauTz7LJedHuBZCtQepwzskJRGjsiK2BP1CFdk4oExBra642FTxLHXpy3rZ8zLpyrU9Z8xuWfcru",
  "key5": "4VtppBejTezeWWwRppxs8iTR2RoJbJdvUMx8ec1gUmina2JJwxuhaLt5kaVRxvSsPCcdSLkCV1FnrTm3R2jR4bR3",
  "key6": "2yn9cHLnScunTgsz2quo7DuGsaMdkDAoqUup7nMgtDDMdwaRrSikjK45bxheRwQbqmwfXWw2rCPDBYxZnsy89KX8",
  "key7": "25qRBxzEGjP9WrAs5iL3CK4mq3xH7hyT4frCCjsTFrZVGnAKpozyohZniyUvkQpKgg1trihQMfN7jiWTQ4txsjMf",
  "key8": "2YutZiDYT4DkwxgGBCT2VAGMDmDM3azZQcfmtJAW2fC2qRxq6yrRu9DPYUGvWdc1osFmyQ2dqK9gRFkLbygp14VY",
  "key9": "58MDAKFtu9ckDtRLhjFUvNhLhaiDF8JX1D8RfSuMPgBjgVVT389QWgxaWDcUH7UoxJMRNVFSd4ZtdU5Cdg7ZtsZ7",
  "key10": "5kSV2uymu4RAh3e4d2kMAPvdNvsSJxWyxqestb4iA85pHePK2ASuPe6G6vAbFxQCGC42hZSuSkajhfCYyvT3D3HX",
  "key11": "5bLURizgm8VquP8DCU9D672LSvpT7mr3ULDEmHGyErq5KL136NA8zGXcbftwzSNwfhbwfu9YWYZ4vqTVAuJrw4jF",
  "key12": "3sj2sso8M8AkK6uXhb6tQewCeYyAnqHj45fTKr1QjkMxQYH6WKKLZB2aDFhjR1L7vivWqr4Hdj7zc5tB1fenpECK",
  "key13": "3XQ657UqBUitEiSGSXrvpntZVNeKeo6b4Rr4LhjR9qAY1N4vdkEqLDUkLpLE3LJ8sgH7regLwo7T5Q8bb4x2B7Nj",
  "key14": "2ZEYer1uotijuPnjfm43LzbbnhHmZy3Yjz5nZKAgqeYtQ9Ex69JDEV3CBe76vFu6ehjCewtyLcbKSfzzGb2ejsoM",
  "key15": "2zuqyWQ5P7NXGEhxUzVm1VsY1wuFTsJnxYsBXJWbj3qNDBLnUHaeUKUUVvqXy5iYTtYXbezMe3imjuD65LmLdhaw",
  "key16": "2hr6whiYRnpxWYzFqecbWt5uj2roZWN9kH6B6eb4LaVEPBkeX5GxMP1FrHqG8mVK2XDGkxiR5gyFXMDQtjqDq3nu",
  "key17": "3nF1FouTNNQAJhuk8a17B5BcSHdrNcUGEgRxEaq6Q9jCtB1o1bCrf8DX2KBpc1yrBt9bn6phQTarxHYzbWvGNqQz",
  "key18": "4haCSUwGUaNpqUW45HGEVHkmEtUenz36odbQjQLJm45TkzPrqG914iGZAFbg4p6AkPiCt2ocGpdZqxQku51CrFcR",
  "key19": "2qxb8zkwsvRUcveECrXAyVLReUs8JZyZ9pVgAQMutr6t6PkmU4U2ZCqeJ4duRAJiToNskNypvruVtsksPstrBWZd",
  "key20": "2GmE2fAZwDTQCeoKVqwcX7CazMvYD6fo5r9zhaAiicorZT9kReWdiPWJP8eWhfzhT1sWPCSiMzNshvCdrjm9b5mR",
  "key21": "dH4ZWJng65THA18j8yUAKwJe9LfR1tL1P1ugz1QCH1pyaDiKsXPQTYUS4UE8EsU6F95RySxjjEWMMHQwnLZSFip",
  "key22": "31RD55tGqVZSgwQFRWr9yrXu7MXij25U4ZtQqMmPGbXtoQzxpHS91KFo2QdQxUzn8ftcJKXezh5StnCwaA91buPk",
  "key23": "Z8wsU5pDQNeTR8XYD1LUoNuq3Kna6NbgsEJX3jc8qKiMPcYBBHVZwhQd7p2QHQqHtQvHSsgA7QFf9HTMUMiGYw7",
  "key24": "3p8N98qLBitdn85DEEs3QLFfRAEMUrc5SXXADQjsqkg3SHNyZaBAZvoJDBMAoFBwoq9vdJk1HVMUN89trhxjX9VL",
  "key25": "4BBLbxzDDoHgxaVHpGM6zprMFUUFgbV7EcfKxRvfcmryrVRn6pRDrT7zod54nuZ8Q6MWvgHS2V41xyTwyg33q5nr",
  "key26": "16Ci3f6Uj8FsuNccTJfQcj8FHr1z33aGTtq7gbDqtdosZpZGjwAnKLSdcRrwzcFX9eCzWw3kCLsfPF1fndUuD8s",
  "key27": "TctpNpNqbwYcSpE269ntPZv6XTuaUG1PkvbX4sQM3zwTouwpNGKRR6QLoWtUZfvacdkSyU1rWf8viALXGtHy9DS",
  "key28": "4z2nJWY5JRiUZu8Knc7ttSFAd3TKBEZtvHNEAtUPtQkLAznBKwS9deVW82NWgxrCrpmbjLwdZRrFc8ip6TnkgNyE",
  "key29": "5uo5orJkueKwA1Nf5ty1gNv4iVxya3dAido2dM76XipdW61giLKbKPbk6rBzTaPLgGPmeVQxR1aPiBvpMwPSXRtq",
  "key30": "3rs9pmBdGyh8w9nRh4TxEwFdHySwekG5aEWWZjK97iZXd4wdBv6Asz55YGa3cYxsRqW6BHAYMymBYkPVL5ZsT5Vp",
  "key31": "dQcL19KvL498BCXCC8cSHGzg5wFYKtPqaMQAFsAsWnUZuB3kitiXtUst5cT28zGjoH65q21vEoMrspY1LSY81TM",
  "key32": "2CfwEZ8dDJF5WnDnvK6GYmyjP2vJbTc3iFtptEghJ9DhTYRzdrdPrVKsP5MDcPAPPgjKizHNXT9YaRQL1p13Pcdf",
  "key33": "55hyuYyAvEb1SeNjDNqJoMMqy98c2fyofY6AMWY8eYD3bodep5BmE5fMuXB4WDDdH3yY5ot2oBiSaUf6bm4jiUW4",
  "key34": "3YmTsTAXUTHqdndeU8N7JRi2DPajFY8k1JSc58yXesZoRZCDmQ8akB1Y7ds4szEtGBMRhHQW1SMKjYaryQT9sEm7",
  "key35": "24eBpEN4MnomoRxtDshc6s87Eq2KKnE5SFfRqm9gQULAZE95pb7qn9Qa17WizGeYmaAbyCC4UHgXTeCLiViDCzFo",
  "key36": "44pj9vtjttSy6SUYZfqumLZVp8z97Bx6Cz9Mp6AmSZm1DsKdiUdUsvQwBhko7YSRnS8FpMSzZovmucPtNy7Tcz4k",
  "key37": "35BwJpb3PXm67HiZWDuqLjBxaihv4xToUVswimevJp5bEuub5fH8JEPcj7YDirk9VhD4nKHcXABAxotBnjbRJtAn",
  "key38": "4s9d8gWyS32BJQDp7QRe3nFov5UCeqH6rb1HTwmxjbiP85ZeqV93yNY9iL4iMbiGbUcbMj9APxQoxfNdqLEtaBxd",
  "key39": "Za4xmUzaRqLnpxNUuKGuuvQ2jaHoPcsGjwL4jW3d4cEWHh9sM4NmqwMxE1fYj4sfN6mt3m6UZNtU6U7T9xe4e7B",
  "key40": "2rhJ7HNiG49aW2h5Gy59B7SZwJt7KPzSvBxe3GWR3qfxNyazsA6y567xjWN9vhwy24TJvVY4JtbKxNm9KvND49Sk"
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
