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
    "5xPoAJFQWjvc7K2ojj4zpicdJkRTDS7MzMMmaaa8NPJkJw6mUF9Y4kRUnoNH9fZ924eyvjhPRauPDbbcpywxiBxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UYcu2VR8V16tDBJwBrhW6PanKccypZbuV73pqFe9pGEVatfjBdXDJnEfpiggrfqWPH8F33LyuRLGSNRih89VZaa",
  "key1": "2BsicTzAh3Qdhcyxh9HHy7fLmxLXgxucgqZMw3RwMubTSvRb3GvLATV9aAjPXaaMrPk4GFmCAFCGopVoUFMQV2MW",
  "key2": "5CygCyUFU2dbStQgFFo7nrTGQ1yEhLSb7iCapVXfvTcQv5XFreWxcM3afhHnRSnZv8pmtwAyGpmoQSreKqwyZHtK",
  "key3": "3sL1XnM9jJP58nVqjzxzVPgDCtptj4wbtbz9USoDLbuA27Cf1wbFCpp1edDWYctb3pTNmiw443XVe9cnEM8VotsH",
  "key4": "nyhNWfMDNCDpz2fuSqJYr3jQTWDuLPNEyxXVms7Ubir1LoW3rt9f9Vzx64gr7DqtajSNGtGEpBtVvio4eV3rzTC",
  "key5": "264fAGtNrN7hNZbKeuGj6psHRQprN39dBqQxAxHLszyZM4wN2jmdgfJvwns13oHkWEKYwwrN1jy7PtFMwuqmUhpL",
  "key6": "595Sfs3z2LdWq3HvNYC3AJn1Zz1hJ5VzRU1LiwxBUPhkeSb7cHCP3UE7Ep9Knb77L62hginYcALucJrNxLEbsV98",
  "key7": "2URRqCPXipgsaHmR97WGk4vnP8zkbBCxX4YVG7tGTRyjFYb8K29zjsSpCdCnf8eMCxdXC8LBULaJhKepp5A8K8P7",
  "key8": "2uDgDDLHEUWi3SUDavNrrwS6yQramauVyPKerZBZYfEU1waJVVZNnMuM5vn6yg4Wg3ZTXfUxcFhfvm8sQsNU5Y7H",
  "key9": "3eZbJgL2yd1AbhAU5c27YaCoE61ncVbbMg5bmzNnFapBU9WNbwUM6pZYutDDzyRrQbwA5zD3m7bZZo9xt7qmomhq",
  "key10": "23rKQ9Vt6QFxLfjADta8kRSTQpzBGkqTrY9KUsgBuJHwfbBQYQeJVrYRfKHjTaEGDU3yTsPjz4Z6FqUcfrEDYCRJ",
  "key11": "2tFXVocS3KcfMB4fa7axgBgqekS2NvSACRAsBGXCUSDHvDmVEAwmzKGJJ9gV8umNoGaHVhnP1rVv8qhD8PSQu8xL",
  "key12": "3gyJXJAHapK5onrFLzwqJrNzv9FF9TmTfTAi62x8Koyt1fVTSeLueG7Nff6AiJ52SXgqgG4LmSpLS1dN6EMVKxaR",
  "key13": "PYEjCvfupUUC5jz7mv3uFPT8R5a2ggQgbUgJJTrgdr9q5uWk4sywXirdz6REVgDzt7kpUpjNZrCQXJPsakQrQLa",
  "key14": "5VYXgpXrpFH87A1H7WyTrYHdp3uJdUNjBqeHGzcnFxPq8FZHtKirdvcyrTnyPBT6sjKg4wvB1b5xLrkGg4fxWvYH",
  "key15": "2HE9DfUqr2iWzT6cKyFgkeRwy5FAcWe2btwptwpqxSfBRsE9Edp5F4R2YuTCru6eS18gtm6P1Anu8PeYsARjzc1n",
  "key16": "54SoFkDggqwCJP1Cs7d8a8wZJXqWWp24j2rEuZkhztYS7eDqGgo8PuKZJq6NxcCyNFPFFsiXZBqJdJhGnJWKa8bE",
  "key17": "5rfq1FiEJUjooj4ovbwk7Xtu2CsVPbADcxq1JJMUZCC1SX3B1Zc5SukgMXKTWjrXspxfY2QaNatV99xpgMtzeCN8",
  "key18": "3HKMk8ZNZYxoD5rgnfRcRmd7TJZu5MZdXu8A55UUBAN91bydWS7Qc2LBnWtAPDES8fFDUotAJfb9ZMG1L6oxNaFw",
  "key19": "1b6S4KZu9FHRQPqXGBbwtx34zzAU2HA2cxFPPVV4nZczk3KG7RQFKdQAAL1YZPNLa2L1dgsrAEqNdBqsahrv3H3",
  "key20": "5ZGN8kuyb3wvfiRnt9yJ2hSbBrt2JpUQZRiBQ5yoFfPNJurSngdoV8P5nXHGpk3Qd4RQ3BZemumptKYhsGZodShh",
  "key21": "Jz5Ez75TD2GKCF72HMFKC2SqEHWqVHhTqQHPsxFoEfKWcY7VNBqSoGQn7gKtbaVv4qAmN8oU7o8ut2NxY4c9Djx",
  "key22": "3K3Vy9Sd52Z6HQv89Wsez6PNbtaTa2U7W11LXyDmKVNBsVFketfaKwrGQkn5aSMfESQ9FAVm7rMnqsz9rKRZLkki",
  "key23": "4nNPKryzrduQbA9uJz7T84RBY1raemmPT6G2duTM194QcTpzBPcc5gE6w7sCr8feRqZWskZfqCLLhMTub6ZztRbs",
  "key24": "2GJCLA8Uy4rUL5FYi9NXZBGm15dtDwYLpNJZo7oNA5VLJtCS5UEFvzVRGTGRgWBtZM3VTQC64oFHyUMDRVJsEkFH",
  "key25": "67cuL41LYPTFqtrKY7eebUAPbuWVYu8zki3yip5a3k9C8X5bnkFviHmTcxUZzoX2tTKRRfjMAHY3tcdo2vJmh7uK",
  "key26": "34xyjGkPR1kCPLLdnYCRhED3NnjCt2P6EHjygNPABpKorSPiwjxKQavXviE6G8hSR5W8J4TGHBEP7JXJ519pdVk7",
  "key27": "63iEvAMuKmG8eW9NARr7dZyawhGpC5vz8ZsMErHQMvoFWP1MYN6vRKnfv2F3AR8GYFTemEpMvYPS1anSkBnHSW5X",
  "key28": "2oFKg81UZzbepYt1U3BoutXQtGj97e7Dqg5o7sgZ9doFPkkdgsnwm6iPjN53nnDd1J2udCmH8rXPTh6X3G7qAuNp",
  "key29": "5eP9CYXJJEs2N6MBkyTTb7izyvWnW7dCRWEF6c3mAnrMkMrD7oJo5NnVM4HQZBixMyxjY9nJtPEQTeugi3dq9crk",
  "key30": "59VXF268ziF3fZdynoAgPAzgiqgntzvM7S3gKPC6NBpUJ4wxJUP5vYR35HHNyDyakeTzYWVXf4mnJNdov8fncPpo",
  "key31": "3EqsqFspcwqPtKFMVvo9WCM7Cj2ZLZJnPKMhYq3oLMtih3pEzyrp66ESN95SVWMApgSVN5c6zUCJUcQRXq2DxfFS",
  "key32": "44GRkgZ5cZfLTgqC1StvTRYYW2KuvkaEDhGiH6jKLiDoqT4BiyqvzD4LVeGSMTGnLengouw69tuD6RM2XcWhS4F3",
  "key33": "5hr1oUuHjfKG2KDKG3bvJLe1kha51ndeRu9K2gDbKguWEpPPr6qLcw5YTBKEBqgSpjAcVajviPYQDXJFyyNhrKaL",
  "key34": "2cFXsjWQiUusMfvXBzFZ56YXyr23nKKhy7cHTto9juJaQQK1BE9DPj7Mj7Cw6y6UZuNs8CJ8JNfdaXtGNNL3ToFz",
  "key35": "5mxcpzKVzboxVYoCLGyFR58dF9ZZdpocY2no94pf47xzEWf2ku6U1oWVRdTmeW1wAQoYPuhTLCwDs1MFLrERcsVU",
  "key36": "69CeJN6F3KhZdSGpwEhSAt1DkKAU58RiH1No2UB68MjcN1mRMXLATxBmdTSbpt5oGB5CamvxkpPupPocr4zCV6h",
  "key37": "2eEkrWHv33ZJquYfwJFwMFvrWqXUcazKYZJ1nKH1GALSW85eELN5ByWhw6hnaSoWUm2dNNoGEoGAJfPR7thpaAXf",
  "key38": "3iifiZnHEvCapRwuEHfR8Fz1sh5nQ1bdkqfoQTxWaod4w64EZoRQKg2EiLtMB3f31pEnEXu7yiQQfbXDmk5UsWGy",
  "key39": "2RddL17uMGg3K6p1zr7Fi4WnausAEuKTtgt3LNpvwAUym9BjAuPe1pRzz7ReYB27AKQJkGJQCutXZ3Mda6DezB3y",
  "key40": "4CAmDmgu8pVES7oGpqzaF6E3fPJJthqHRMZVMU1yQAzBFu9KWZzQqf4Ca6xktegUHJcGNH1wrx8t8nrg4DX8NLf4",
  "key41": "G5FSgMdpqStmceffK1ZQWFqVhPg4nNYTDGRRgF4nNw8NHc2HgnNfZX46krELcxHFjPzMBVrSDoQub5QyPtSwXto",
  "key42": "21nK492XscyaZux7AY7fEGz592Sjihna6G8QKNpuC4DzZSBCd7LAEuGX12Y8NH18DRB3rcP94d38wjJEmpuDrkqT",
  "key43": "2cPE5nAmmrrqb9jj7U4FQxtiPBxQyCisbVZEKNMp7fUMpFXPgtyFvJDGYhDb5A8qeGaqJzGQ8kS4bE4Rvs3dM9eX",
  "key44": "3GvKNUWvYBXCXfhGwJXNCbrWmxJPJzfrQsGRLkqxuD83n4fakim6JiH1QSoai7YgYnxDkSbZkPqPRJBacQygBV45",
  "key45": "4cEEEVZ5cLz72NNnxiMuUgwZy5CiKmczxRZQM6a8CrnboMBAi4WZTttLnbTNBu151oTipxTueZnUECdPFbkBnx4b",
  "key46": "4qfSHp67qGWYmXRquBYCt6D8b8qn8ZUnK2JsFkUuqourBtmGQ8XRD7m2mcNZj7Vvc3aPugC7QyQF99BKeEgPswzF",
  "key47": "7fVSC4gGZrSoTLB896kh4b1dkJze9HuqyyS3PpmAR9HQJWn7R9eE4H7Cctb2xuDXdQB8mthkFa8jewAL3kSWL8b",
  "key48": "4HThN8fkEqgAmXYiGXRdRRxUXRZ78rkUpAevgZWoGhZWdWoy7mG9rQecjUybmgupGUei2vtgFWMrP6joZ5XVcwyc"
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
