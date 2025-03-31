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
    "5FaAZFtkfFXihjZj9HJ9owHkj9YsbQbMg3LFpZYufCaGnT1fk7iK4kqhnbGNP4hat8TEo1vVMjMJgzqpTj2MaGt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SX3GVDTttYp3LYgp7xP364367A4vHoZSGLhAQFS4vBrAqgyhumx9V1ng5XKifqnnYCGgGJPz2UcvkRgLCpqvAgr",
  "key1": "4gt8oTq7LX4KzocdP9SPtPrPucrpg2cz6QTnhiToFVJBy6dRadB7yPgy4MmnzM4EehCyCGM1WASTfi6qXQLdu5Nn",
  "key2": "5Aa7evS11RmvNNcxp8a47qVdNayw8zEiTrQuVNLWnDCtn11SEGJ7XfsRxrH1ck22HsBJACndA1jmXMnUCrBzuHKS",
  "key3": "47bQrz6pGVou9zMUePzLdNM5ShTfmkqkjX88FpNH8R1hr62HQ918esjPGhFMG9iMUgVdeKV2WLwkrmZLXWCrAci1",
  "key4": "3HLhqqBRR8woJhGNgteCnM4nNbao7knPqoMw56NsGM3wHwNiDG4Nf31tnmLMnSAdan9CvQJyDjxGHdWJ1XbJp39s",
  "key5": "64jueDB55KHd8Wtk8iKWRMe1sL9xcwV4RHCUzQ6HuS5WxcX8HVBFHs39CDtaEVBXBjcSFF7qEmEtakeP1X6frFBG",
  "key6": "4PPG5TKgoYtUyKrwtFzzCG1t8xPu9qfizjfu2VHCt9CD1JJGWvvdYXKRQCCQzW8nsg6DtCg4ju1W9CcuSHpecgv1",
  "key7": "sy7vsPWas3L4n7UXyw43Ev4eiYpujhpPRbu2Yvju1ZUNJBsnHwryssNGTM2dSLPvn2g8dGXC8yRJyti6iAwEGKq",
  "key8": "4RNP42BSk67HUir1dVWDoWfoVYWPWVu6iM7mvaZqfMfgvanNaQPd46KGh64zs8rg7WrpqJaZ4MWDjjTnzfe77APH",
  "key9": "4nGSVJT5YLmBcJqd2nsXk2i3iYR6kUtGuLAE3GD69VgDi6NXboKZysyvypAbeNzzdhbsgUNqyBnkw9zYaT1W7RPV",
  "key10": "5yYpa3q3WiHBRPCsa6KkUAb2Ps1nhXBDFgq4tuuFFhnMiTeU1Ey71T4ubdW3SJmKjjusz7yghLbpeCQX3dotKpE4",
  "key11": "4zYJikidfqB1E7rJhNK3vVjpdauhhCifkvyynBBwWLwCRArByy8Tnx6wn3a8Gn4Z9Lyf1GGiEPbJysvZZTkf7Z2k",
  "key12": "3hb48kwxZuH3zpjZCqmD6c2kHJzYzSABcYhyeQtv9rv3s4my6izAs5zsck9R3ghLbUjLbAdr68VoFckQaBzhGUdn",
  "key13": "S9dMU3sUspbkJWYhRHi2N4MFsnvQZoNLvaSg2scW4XqjZ9QftaCKyiv5z3XL7wxP114o4xv3m3wifSmAP1Y84RB",
  "key14": "3YwsMUNbP2H48fgwjoKwUsN5sx7k4q9buaqL4r2ukyK3iNVWq5pHJuYxzcMAAJDg4apTzGXN6d4aTAxkJEQPQDRq",
  "key15": "2R2vvLFVF5J1QniSQ3kZ58y9jxxZFQ5XNThQqNiPDbTFCM5dc2QCgFuJrfEk8uVATansXQCDBACtTvHMi1gbL6Fu",
  "key16": "3VhGQEEhH3NL6tYqesDCmnN2UJhQAUCdxQJHmLpWMEBei5uhaTC2AQYrYGjComZNxDqJ78TMre3GoyBEhPtJ5ZrC",
  "key17": "npLXVxFqA8udscwhh6fJioVtRWj8p7NoepJ8MKP329PHAc4fQXXY5CXoHRoeGS5tf9tC4gae7waP6hvYpoDNtUc",
  "key18": "394j5xmyFpMxgcg2TtBBvK7sW7tg5PPqn83tktJZ2FsodPKkishb8rnMBwXp9cQmkE4RHFJBMwabwTg3kMLbHB2V",
  "key19": "3GysqgBKrRjbh4wp4o59NA7uQJhs2fJVxX39LSEDGhnzRMJygTGvy1WHHPqZLtTWQkJaMdaytgYDHRtDNmbfZHaL",
  "key20": "3dEWnHuAP6FQA7wJaKE7faEY6z8U1Vivwf1wi9tv7PT2BDFjsmZ7o7DuUbApVEkxCbS95aqAPcGorJhGsqiLqxKP",
  "key21": "2KgsVTuP2Lk9XsT7iHs2VZpRR12ezNsqmsrijVqTWSSARPWFhdtvMTxztNCzryFoVd9WHfgT5ZvtBMwGq6B18j2z",
  "key22": "3AC8TXNyYwN8oRKnCBacy9o2YuNifo7dDaEWQGrYsDqgbpWr7PFt2m74qffcfFzhnQ2dhoq2Nce3S2th8F9XX26u",
  "key23": "4WEECUnVaH1ySzEwnWC2p71dqp6VUAD7TmAeVT9W2J1jiZ1mvZvVtYcxiprsXVPZpsPvNu6LcZgnaDmesnyDZXGJ",
  "key24": "4G62i5tUuQeHGn86263phU2T389oDL6rQpoep4eaoH4TTK8kT19k7jJH95z98i7LMaKoz4VGVFH8uD57U8Jp1va3",
  "key25": "2bCfMVG6zPewPBTswLAfwFudptFLZbaDMm3uFLu6pPQ9eFVViXnUQkGQ8jBFAa1AcRqQxsXoDgYAEjvrq2UbNZYw",
  "key26": "57eKTRHbqpH35GWL6p1jP1YbPTdNTYcue6t7g28KmzCHrtA2HXPXzmotWqg18iRdimjsGs568yeCsRZxvQu7qKGJ",
  "key27": "43VPD3RbJRKh3Pc5rmw8V4AjXqgStrLxFzgRx8wVkBKHfqk1umATfjgjbADYqRXG4GhHLfQeWpcrq2pwgiBwPNzP",
  "key28": "2NHCRE1wutS8fVsLw9LLKcb8d3h5TiqTLfoQomvFm4T5F3Zcba5gJ5fkHyrFqxGiNbtCnFTUF8FVYYyX3xiLVzL6",
  "key29": "2wtw9wpjAu5kY3WgSVZRWaWYyk4UhbxjoVJ2wtqkNqyQvgnyHwmGui9Lrx2h7CiZQGdsDsfrSVGxmh1P1PPFZWUf",
  "key30": "3FDeEwop9FCpwsTHTvm4KLkKCCB9ezhz2ez62gA9c6H6KMaXmLtMWSCwyKhU9Qa6rtev1iuVgWV3ZzJGp9KoGeQN",
  "key31": "5g8cDXwRteX4xrHKn48vj2nQxm8vmNpDkH8QJF95X3tRevMAaRzFV7ipi9GLVzXBjvfnW5maBiKmRd1acwaoZnA2",
  "key32": "2xmzjLfSaYpmzcLLCUG3N2rCQ8Gqy24u8HGsPQqpmaiVuNHysh9zYxDD5nchiDdjvSZn3SVUiX7UR3xbvAqSPQC5",
  "key33": "4k5QtpRKvWscKdY5XnL1YxAiAFBuLP9WSkDerRgE7SjdHeopjuwgDa8r4zxYD48bb78ZcjeyykQCZuH28n4b8VrB",
  "key34": "3Eq2UxzG9WDHr8mjHJi2D7k8VnGAcWDo5rE6Bgq6DZvJyTVHWjLFrjfUy2AZpbi8T8CWxxCsMQ1MFxSgE7K3fGEs",
  "key35": "5XM7Qa1y6c951yJpH1VUna4cC2VDSS5o5dLqUNnM9kPoJzAMuexgF2tGEsDfavF21sBtYpsQafVNGxwW5cpVVia9",
  "key36": "qDW2mEn1dBuseU3k5GGbeNZMAyP2SVyzavUQMjsiPtzWnkLAXZ97YfewpmSAyUxTmg8ATo9wMsL6j4NtF9SokCb",
  "key37": "W6DZJCSUvZygT5edr7CroekcyHfb39g28KjhVC7S1j9BHHYjerW2Q6Ra6qXzMkmpjjDgFLdxCKuSxvfwNdNSBuF",
  "key38": "4V1W66TNakGcZzc98T8gqHnEKPM83WW9bFLZMYeqwkRKHCc7JTAS37rhQsy2FRyCkm6coGU92wGcF2aLQkQWuEKn",
  "key39": "325rdbDuoiTgTKMNQGeUNrxNRxEvWERuPtQwvVAm8UFCwT77udK9iyn2gdu2FnJXgaeeNPwCJxAXTiFxDVjpKEgn",
  "key40": "qN4TQQFyNDRAu5tnFHRJUJHRKqHg9CD5spNHh2EN5s3URTqyrjdeJhNuQNxE6Au1onBgMCPpjvTSPyHLGUUJijV",
  "key41": "48GcqQ2Rd5M21xEnjqGuG2zwfJLVqSEgNs6z4FXignB4JkRcTaBzSBswjyJy8gu9Jd4zZFtCNHJwGLR1dCsQ5B38",
  "key42": "2FxkRBD4dNMPRHpkseNs87JsC4TCKiqAncncV8nD1FyPdepuFwsotNzo8Rrne91d67ZYfjAZy7sBzusmLLmYreXm",
  "key43": "2DahixrUD3Egz9vBBfjpgrFjWqEVdkcNDFmLFuDTyzxocfuCXFDNrGigcf7dtUfqnCZLMP8UNs4bDRDfwgnPXHv7",
  "key44": "5xU4AZJY91hHWmKyRkVfzmDwhymR67BnABzn1NkmYVKHeZ6wXRb83x3JydmKufZyKC1sxJaiRLxqbaBjRK1bqSfD",
  "key45": "UMLHZFUTfguhkdwvZVQrky6awmHNxEYQmKx8AZVwCQW4N7hsHqdMwpAefUj9rV8LrK8srroNR7DgpMh4GWT7SRN",
  "key46": "4QYnq3y5tZiNeNjoouf7MiMqC5TeVKaEhCVoWMysjBrBGU9yhRCZnU28Lmw9tEzdpVZsnZyBDBx97f1beLeMu3hq",
  "key47": "2qa1q8tyrKSdGXmEbRvV2JZMJ8GJSXZEYnmCPeMnse2epPv6hyqiW1PiktYWn1fi7iyhZAuhyngAiybaqDCJTgyw",
  "key48": "2tsdQQJvUfnXhTFpgo1XCo1ScVHQpN5p3fJMyCG62ei1WA2MsxN2dq7Nb9k1EVM4v4PSGGTuKeAPD1Ky23eZpr8z",
  "key49": "L2YoHyYjFqhPxcroMkpWWSHMuj3v2tV6k3WMpHLa8iGz9m9faAYcfL5faVNmkTFyDDG21JavdjNS38ACJCMvcPW"
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
