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
    "5XJMozGiFdVmMFRUMU8Gka49AV5rSaZYSt9NajWong7nP4Q1iTP3QffvZq85UdRsWg2hvokTid44zqcvFPDPcNfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VtTjHtm8NkFZzscYwJc49zhBHAYGHmNsKyBA6ej84aQq1KDuW24xaWkC821qqVxvSyP4jAjhQsc3kcAYjwVn8r",
  "key1": "299nsfCS5pEFZK6h9SzcuW4LvAGdGri6LzzSTeL1eN6WDxcCf7d1yJJgSEmv3mDx8sdvzynF5VjWHBEo5BF9CtPb",
  "key2": "2mnN4YjRHP6q8iLUPHjJ7YUsy3YxoMYWAKC3AhCYdqQFVss9H7dirt369ekQqXdArkkMa53UJDoD3aGeT2khA38J",
  "key3": "b1gKQ6ycMoyJzURNBbkbtTdBGdmLwh55HircCRym69CiC8iTacXxTeaiViwdqPqRAdiNcCprpspHcAKE25H9Ghc",
  "key4": "49NcjJ6owtUdW2HUvT728zTWd5iKHBQSksQ5DW8FbxABzCPogwdQeK8jvgfjLRpzViX4snNKfM3xWfGeTegepF9t",
  "key5": "2wPGtoAQsqKJCzdoqVNTbqE7yDWZxBoFLmwb4gup7vrAguMnnujqrTj5rKv8WFw4KfAPT2zgmYJN1QCrWFLEbAdQ",
  "key6": "3WSssjYM99M3J9EUsczJhf1XxUu7BzqsErtYcq6MfphxKW9ZJRAgikmhLzEi8c9sztrkLnm4JoywkgmAw17pQH8D",
  "key7": "4y21aCtQ6hcgwtyGfRmpRqCT9KPErFTqEy83w8syLkdCdUrxckPE6kAMJzLeLUV4J7tDSCcTxr5G4b34iYMZve9n",
  "key8": "4AUHMHA8TAQ4ZpLr2KXYvzkrjDCE9jLvXsBZo3vv4tuuPghh1HjsK3gfjXigygZRhMzvmUsVHJmffRhRZRsj22Ns",
  "key9": "3PLG4mGt8gAFHQDyiGA37gx1qCJ9dcLcb7bvB4CKYPiRqsGwr39p54pZ47JwAUr4F2wSgGFhvrTSV4Pz7mBGXdXS",
  "key10": "2raU9WepSU7HzETa8D1bEoFJ9r9ze2Lb3WpJ8dPBUyco1kYc7nQRgUm96iERvK342vZPvKA8iVE5qf4tm4j8riWx",
  "key11": "U9SPWVaENLjni3onP44VfRVbzCsyPpfrDebHVgFdQrRcFr4rDmyYugwx4hKa8ZKVsui3cav55Nh6EmoAb115RJa",
  "key12": "57nEBYGP9YsF1uEFGcttbFQM55GfhBEDRk3BEumc7jwruzrYZtkPRnbSSBBfgZcbQexkVcbQzyUJMadgRKQEurGS",
  "key13": "5ZvUE7s7yDD5zr1UScUnuAVnzZ18UmeesPpvfMpiKdDuqHfpQZek59PtcyCmLsfoiSzaqHYpZN4djvviQsyA3YPJ",
  "key14": "5xiFuhBizpcc4SMR7MYympruLsJ3PqfFwYw3UkeQThpwwzyo8uDGuupHcYHViRNRPvVGcALoHPKaH9zKTe9z7SmN",
  "key15": "DcqgM44AvgEVexikQ73nmLWrxQHBQCiYj7B4UQCboJyiduqg6qz3hUZvMgR5s8C6hGWvTajfsHcPKnqZHsnsJa8",
  "key16": "Mocu2S9AJy5QD7TUteTHsrM9vVBhYtXgkttxRn7Gce2n63bKH8zUFrL7Ls9RpLdxEJXRUbJtJ6HndEDZkwNJUis",
  "key17": "3YCS5b41DAyUaRsznwYxCdUJ2wrdSDhazBcrDNLdVW9EpeezmJHEiEQ2NX8vgucLZiiCjuw2tsYa6sJmNjpFYjZx",
  "key18": "3kq7gMfhLiFW1cXs3mFxpzgWoSy9m5dRnPn8zafxhcnhkKFYJ9L7HU2MS5USeft8hEPrv8ZnoRGNKzDKdRV9QwKn",
  "key19": "3Yn6qk99AwEyyunPjLKN3aGLwyp5NnMWVGnRhtvLYU8uempZP3sduHD2seEAZJ2wFZ9gS8K9XYXHov1G7znRq3vf",
  "key20": "34DBodJYvTDW3vaWE49Wm84pwyeZLXBDsKnPYQkv4fTPjpvoSNU2PwUpesu1r4jRug6vwtixh1V4dBfh1x2xQFA6",
  "key21": "6or96vM3De8etsSnDqw8198FEi8gEdpDKmCrvcezWyA6HJMxQ9dW1VVzArRG3R92DFZxE2jeEeSe5iSPdGhje1x",
  "key22": "4jNBoWA6RovAM64aJN8HRZJN4XwoaB43vnLSpHpsjib8YmxLN7HzewGadMCGUwWccyCnnNYywepmks9u4MEKZzCD",
  "key23": "5VCtoPrnNP3VKTXXjjYntzmzF6A2i9e6X6XKBiS25PkLmu9PZtFYbnQZ7SuKaguVtoCEiUogMfaPW8dAjaWbRtUf",
  "key24": "5JW55JymZuPvPbLGKcm1m32PKXaKNrgCfxuWTpxEAgMb13DyhjLaWhVjzzwfeaWQADge6pxkEFTe8z5ChnEwdv2E",
  "key25": "2K7ucmdUanF3S3iJesfFkQxSdu9zFYuZA4SYUWeziW35pcm85oCcW5LNmTyeVaPh73zVKPmCWtAFUSu8cQQTumLV",
  "key26": "LddC2dXCM9CP86yuDFSh27hnGtJzJW65MRUGJDSy4z4DXfbQXNhK9jTRdbvUfn63YjnJs7hV1BCnFGmeEQvo6fa",
  "key27": "2j6N6smc7J7YNJpD9eh7HKSkB1kMh8jE4BNznFKSz2utDwgZDsydRoTkD3uZSawdTdhoy9Kfv8qcUjortavSTXEk",
  "key28": "4mEBAvEDfoxSZEqQL4F71q8gpvZypXjYmUBe1EnxFamPqzLUFFm46fV6D63H3PiiEYaXr9PXxGouSpqetHug9hzd",
  "key29": "62RUHW7ak3PSnpAQumaRR5PYnvpbVDXwsQ9AZYw4mFLKpLn7bFpruuAzQocMwpDFQuMKjaGFawYowU4QAC7xeFiE",
  "key30": "52o9hLmzDkKWS6gvfxoJ12D6JFKA2D99qTBPTj52HPenVbUYDcq7EpSM13uQkvXPTPd3uyhUHiE7rszTThGSDQn2",
  "key31": "61v3NwLeqMtRzD5R6gTitUQTQuD7v4tVcjq6CbtDC3KWsAQAWZib4o6PCSM37oKMYGDsWAitkZEmoFPJFnKcq7kf",
  "key32": "2dD6PqwNPTLj8FihR3BNyrKTtHntztjqV777aFPMSFCJTYtxDYvhpuuuX88HamjKzQagSHAfNdpGJptKfvTHSnju",
  "key33": "55Gs8img2GwcuPA5Hv5gxaFK8q4rM8yBcsWLiYwxwtUubcRcEjJLa47nqZGsyCwk32hnQ6cJDE2FAkSE9EzEF2J2",
  "key34": "2QAkhc9f4ZV4d6n7KRf2eKaB4BwxS7dwjPuYNhNbX9SGSmX6A3GgiJcGYMhCLngK2tPMTajTbw8X9ycW774xycHM",
  "key35": "2ZqBhXc3vtFm4bercQY8iPFqDfZ7yDUMEdVXFXWf1vHA9uMjtkmcEuAkrTz6k9T4DseQ6SFRvA2YHZ8LE9bmPTht",
  "key36": "51T95FaksYBMpeP4DoQ54ZWosuzwbF2vRdJi68vupbghj5N7yNCUm89yCPekEeWzD36kSZgBJQZoCW98fK7nT47L",
  "key37": "3UvkjZRtG2w1rut6oMCnxcxPcBkgkxLoPXQAh9F68vy2ddVqQF65SYN9q9YJcCahngQJ58HoaDAHwYAAWYMfBmH9",
  "key38": "5J1Bz6DHTmR9893LPqx2da9L1MKuV9mRLMj9Lb2rWRLvzx1K3Pr92gXNFKjWhVV6yfZT3qW1X4Po651MoeyfuqAK",
  "key39": "5V73SPCmDdyYe89otyP8yegP2dpSLXUWxAAVZYRUM1kqtX6Yi1JW6ype9w9W2AJrmcFWwFd1jfBjznvqTxh1SYZ3",
  "key40": "29Mn1newHRHrxpLfJwo2jE91DyqDf3b38UWjcnyVRc5GATp7u2p4Tyr9b1iQgMycqeom9ipti4FtaaNknuUuNpVP",
  "key41": "2GeCUkRLmQUckCzp6HZ7YZjZdYviZc7Nny5PmjX8cMaHrJfgfKhkfxT4tNpXcFdbnasYLFtWNAfRYamYGYY4CP92",
  "key42": "5vpeJ33QzypJBb2Jcd4XbuDiS56fxgcFad82hVWcVRuoZdH19vQ2wWuN7YVdCGto93RBkteZwLkHxQBCHzwhUe6a",
  "key43": "XojcgrMcfAaKvDpXR4P8voZkys8ZwqmGxuAP6ULBoKNSFubZdipQE8TL514VE3VAm49Nh1NzbWStpchuw6hwHVx",
  "key44": "3ajMFZY517JBkZkCyKvR1p8iEGykQSUoekyS2vmrPvfVzDbc1PJE2m24Vf4jufc12f7PmS9A4vKtAWhrCtYr6S8E",
  "key45": "2fuyLXDbje4MfnYGz3cs15mLSMrQNscUsx1TvcaP7fTRCirb2Kf8e1zrhn8UedxsdQNbjJTXEViqo4iezzVUBQ6k",
  "key46": "2yCpq1gFAMGPZ6RT6KyQ4Ruv5a2Vz35jbspURpHvhdS5S5onZqMVpvVrRWGhL5Lvmt6D4tN2RjPY5qRtKx1exa41",
  "key47": "4rafU5QxbZvqE7NekjvZGe6AGFAws9RcamnS7LbLSpUc9XNz15r6k6jwmpNX3hdxNHDRTbpuWu7CtAA6SLThb9Xz",
  "key48": "Eifyp4rXB7bCyKVCuJUkxhipB4HABiYrCAnuHa4WxFVU1Fw5sMgb8YSC9Z3n1N2zwgvNefvc82RQ8cz8sY6Xqub"
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
