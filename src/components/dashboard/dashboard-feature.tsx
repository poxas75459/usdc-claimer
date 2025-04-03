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
    "avEQG1UjXv9NhoU2DvsEaGfxKSvFzxkNGaJxGivCLV1zNppE1xzchmtLURHzDgHYTUtqvpNM3Hos2BqLLodweAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37H3googALUykvHe3nWASNk2ppuB4KPzRstRksNWjCQr8ynpA5Rgch9puJ6Y6drDecuwgB1S1LevV5aAUNsa1JjT",
  "key1": "3HrsWHLwrtGAAYyn5fZJ8yDmaHS3QXC4pVAAVkcWcRkJH92PCwQRLtHDAVoGJtubPUjnX5S5MmykvpJKfPqL64cA",
  "key2": "4MPGyzhvXXZzcZ8E8FzqHtFJurHx2FgyfUhXuGZoqUYGfVXcdn3TsNdN68NiVnxrxt5wNnttu6NRh5YSGJaiWBdi",
  "key3": "2dykS3knzCdwPMQe9Nkke1PftxMcJrNU1XNuCaQWiAixbCKEmFqDqvvDKRwUEYAArQADczUYgHpofq5StPejaQAg",
  "key4": "5vZfLyjCHnGZBq6d66Dozgc29jxuK9YhFwhLLHeJXGYz6qaXnLE1LYR5GohBjx8vwZqP33XUM1e9R8qvuK29EpHG",
  "key5": "5ch16QCkiXfQn8xbuMuZsqd3NqJr8j2iEfTvg8P2SxcpjE4ZqxEsEjAc3qHSFLt43BwZ9K9VAp2KDBW43dpyWxso",
  "key6": "2tcwvgfQADGcgdVCEYjcjYentKYp8VP869ieS66LMyaz8vTs7LQtupG7pbdtRwdncVzxqQKGcuPW5EHn836St2Mo",
  "key7": "2hzVHZSQWbu3j53EVDRxQRSr8AiBfeNP6tDBDtiBh81uNUggUmNHLRSGS8oZeAvx89AyqasitfHMCXc2QqHSx3hW",
  "key8": "NaCPZurPcVjba7CxPyTNSUvn5wENq6VftczF6e2Ciu6LWVmh7dREV1wj34kdMAHZYixRwfZcz8r6UmNEoSBZ1x6",
  "key9": "2GJodZoui4VeHFQnXCdQYmjGX2vQD7VYb1r6NChwWH3yiDhxytYXh6qGm9ZQ5hDL8NXZzKf5VwXyyvfRFefnee31",
  "key10": "2vPARDBmFyk3xK3ZHstr94JoumrDcs6H7khtbueYwbLcJ9QvHReuAEXGA3VdK8WD3Kuj6HBK3jaKw3WZHXWxv3b",
  "key11": "4Va15pESY4sVZuNBiHrvFWrJX8jkc3GWGKZdkekJFWaeswBrAzn3Me6hjdkXLPyiB3fcfRzFMqQti76A3f9iQXgf",
  "key12": "5MZ7h959hiLsd2eUtxUQoz6cZ8Pm7fE5AYiQqeYxPH9v2YBmmX533uYyziHWSWM1jTJ8Gw6fDNNydFNVH22fXBQu",
  "key13": "62SVBx1WG3uaPggQgLRByaebQpYagG6WGiJfXxn6Hh7bBt5ooQgqcQXjEMxu4SgTog3Q8aYE4ZQDX2ikEMebcNe",
  "key14": "hCojBXPfZBNRV1cdRNKww7LDFNnr7PyELcV5NXr1vPmoyjscBnXq5G52LGiMW9QLePZQqofnzpoDB5mLfh7TESf",
  "key15": "26CsDSaaDv3bmwDZHTMSupvEarr271dXKDRrtQMEkSuDU1bAQ72Z83niyVNyt5aGVNwrF4qjGsXid5A4Veu5o6ZC",
  "key16": "4cexTUECSieimZCLC443Qmc7GaLqXMb8PMAEXHZLttx5najMRKShsdHdhjwvNm6CGCPCDRH29z26YNvBSgsvq5MB",
  "key17": "5gTseMQ1fXQ55yJWLqBq5fEqWknX9Kys5KxutoVpZhPbDictQJJo1rNQQ9Jcrkbg9bdx7CnEFMkPq6S7SHkPGtmr",
  "key18": "5aLbmittADXRbRYEoBeVSmbntGM7JaRc1uZCDw8gX5pNrrVcQWktT9sE4e1goAGGvFrVYv8n6eviV74i2a2SBF1f",
  "key19": "2BgZwneQM2fQ4vcL2n7RjvjcTd1AzKVU7dS8Sd9oA3WMako23pmoaFzYiD6Zt1pCxv5BXitJWTcTYHMTQuivqTW1",
  "key20": "5C3PRZfgvHSZnXYEcfQ5LiMf6GjY2neHE2RodC2aRjVnvf9jH3qWEzjZmbahNvvmUsp4bWUXreHMmDgxH2JmJh8m",
  "key21": "66dQETH1yQbzBqw73DSSGLfjDGe9gGrsPmo1Es4c68MFA7k44Rh7PZ1hgDhUSg3wBoddws1AqPtckNykXaCvywQx",
  "key22": "3qGu5MpNfibDKiMJc5eEAua68BBZuefs55gfF2WEngsvvfTSo1cGrk7DxedDjwFQc2FFTRBnCVCS2YfZS2a5G1xN",
  "key23": "3JAXnAxUkJ5BqNA4ah1tH7FVH3iGjrf2KyUeJfXV67rJMDRPU7PKq7RSMGtg8eEyRfcVbS425xcKv1BTpXKCmjEC",
  "key24": "K1Uap5MwrEmZ1HLrvVDi5mYHD1JAMSVKfa9x3YjGsuWaUbUeEhJUHi3fZQsSTxLvgmdLhxZfvQGKV11tSYmAiRy",
  "key25": "3W8JCQ6h253c7H4oFyuGYYQ8P9E8zAJ91bfEAb2yGL2o2u2q1Sf9BBmHAnCihoUdChtJjr4H3GQhegQ9kkruJSc9",
  "key26": "57dvhR2rt92XuGFbxVYRifGJHvDh12MPUWgDMobKH2VKFVAJ7vjQcTgKWQbGnGRKGPzr8MJvpMR2nX1FMPhiR5wS",
  "key27": "K6YqAyPMcayozVeVFNvNA166EXuQ7KuKStyCyrqEFMhREt1cCnuag2F6gc13iXH12ky2UacjTMMqtbUrGFTtgPE",
  "key28": "4caDJqxhpL2cVtafvid1gR6jYsFsy6xyDFAXpQuCxCc92d1CE22jC2Tzx6bUGeTuPPcJNVU33SSMX2SQ2xrpp2Fq",
  "key29": "3e52R251BUmX2dDHMZ4JFBLHW3iPbk7TWFzeRHgf2RM4JTYdW4F14XK7pvpLWUXMPkbeRYSKowYpkv5hcGcUXMtg",
  "key30": "1U8qJeEv9fwcQSMHay15gktFYFjA2FuwpqpjW4skdXyRHB9FykKyu9mELfq32CWFCQn2bQ8CFSTKRfRgMxuXAbm",
  "key31": "5mkNPYv3c3UP5M62ok3KhXFCZTZnjYtd1RXNRMVbb471i7kGqPtijhrjbBYSEyrj9dM7ZGurXrp8NvTesoVKeqvT",
  "key32": "v4LF2xW4cqyYxZBh8yM2LNjryMUDuAMbamwsZ1oiJCm9gULSnrU1VfVZBSBMU1qwLo6WrQtFgPYoPmgCphPhcHp",
  "key33": "3fKKcFachRYyNb8JwLEBfVGWMtXkapzmeobsEKAYZjfzneq9ZDxHqbzfz186yF1hap8n2jfJb1oJ7yYm6guywEDv",
  "key34": "3HgL7717SkbZitFRi5gU7Ai5NeibU4n83ZAy72ihHyJbbzXFuHQ1risdK7mWuQMWAhuQnu6EN6WdfxKAPU6RpKA8",
  "key35": "5Qa5X5VkLew69vN9DMUysz8eMyjFnHLaNNqouPXkmrCLvhGdVXCfDUFYWcnzqB4yeFW69bAVkDNd3CSdj31aFiJN",
  "key36": "2Sf32HZj3xCxbZPZH6ksZsmh4FaVGXKZXLa1GfL5tpoeQKh2p36pKBqhNr3skn21FDgRxVVnzY3fcShJ5bKNp24C",
  "key37": "4j4AMFdZF2VaxyaPRpdPzu6p1zrRnnmgs8humoXekoDJy8TnnZ9WZge6prz3wnbp6mrSqawM6Kd6Wyf1WJzJbkJt",
  "key38": "5PJxAJrxdommgmRPtEprVTAiuyfm6quXPu3ZwsSwgbYueVGxSPP6GVR8ytbixdzYjARzJGUchu5xDrozzYxtQxgF",
  "key39": "2icbmDwjir3mXCATpY3mjzKX2T2JhAmWQSzWHqq3vbwyHXEr6ioefumUJp3h2EKsNFcerpAoiqVMLg7FvqN4Nqo",
  "key40": "yGsiJkqevMCnKB8RVjdy5wKUY9KPmjYb7owDAZSYZ6rHxpmReUeiLZeoEnLCybw9iTijuB69nTi8YiBu5HHr5QV",
  "key41": "2MUREu9sCSiB47uxcupNgSpT424rB3aFYQjtsZsg3XwdNRzhau61dkAXxNsXzs14Dm2yvXEzvP8wEaQzbXM1Gkuc",
  "key42": "D98cETF6jCsaMLKQU2cNfZPqgeMPfvzEdZvRhwPE4dEUU3eWFHmH24WSXao7RbqQi6zKXAB48Lt5goBuwJRK3Qa",
  "key43": "2CmoCCpJwMxqMTycnY2UC5RDak9Y15XdzQgphU4p3pEHZ9kP64BfWAW2QT7ZiBBsJ7bbACUqKJ5z48VjcpA9HkMB",
  "key44": "24e87A6ULEfswEfR3qWQ3pBPBAZTiZpmsDaW2fFbmbeYHrjRCWo9n4fvz9MGBN2X2vt4muD7pPPai6KfgDFzdeGm",
  "key45": "57uFVbAUCtM2tk4guzFwwm8eYGwyWuPTSExnE3R6YQ2Cbj6Xh2YfC4vFiP83Kqxm41Ns8hL3TbbyyroBcrnPTBwB",
  "key46": "3Fq3An9Pykc9Vrd1JJGCaKP5QRKjTmE7pwaAV579PLUVziSqNgr1FYxfKd9jvfhStXqA6sy11N6EnoaoV3pAyQhv"
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
