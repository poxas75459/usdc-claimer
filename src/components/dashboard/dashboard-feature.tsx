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
    "EwvaeidVKbPZt7MHuKqkfM8rVRbAHkiYPENyESpHMCNJL88PC33Wka9Te8jnAyoNxzFGArNF11kaxSufn12J54Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfYdC74VzUwEidJsgtqXPEzgFvP43bcbrHm2hH7QTZwpQ6qTR4vSaDmWGXNvhzVGY1Joco8XxZi8y47TyjJdrcE",
  "key1": "2W6aotXSWe5Frc4VVcd5j6AKrXkL36wD5GwADS7ssWsYrJii692SgmqwpgU15owPiVrnVhUnhZnAYvUiaVSuESk3",
  "key2": "3bDUz61V8bHKfFofMCtNArGTTQVS7S5J6N6mn3sGQwAyy4td15GUNcTF6QgXXTTZyssK1yYU3UqSMP91w6fnxibu",
  "key3": "4vrcK9TPm9246xF4M2ZHVV8fMcx23g3ZndfG4LqxRKF4xjyZcJFmnEwQugT27g7CBRPdG1dDVAsSw3XwTewigeL3",
  "key4": "2Unj8v4zqmtZGd5yeYrPAyQyY1dEU5rGAub5ACR4oVj4SE5EqUdWAwV4DoyXTGyeY9QgK59QVhERe4LhsSQcbXNB",
  "key5": "3V5sNo6qcfDwGD7i1uVtbfNYrZMmQf1NA1mn4Sg8uE3Hxyy8t85r47PwFXFLWmo57BJLLffxeCAZj26nXbZDEkre",
  "key6": "4ENDG4xFX5pcMwFXdXwBXDkEeVmCnisW9naLNm6AAuLb4XazTWqpuRfiDXoxyUFB4sEDKC1yXM6thPA1nXTFKcpu",
  "key7": "352DXhGZxouoN2NQTecTfzcGvHMgPdXyeNtuVPvvUJzDs7AUzSD15y4UsuD6sxjftVMLejsdTDDERtZr4wB3aQke",
  "key8": "uVHphVYq2iLcKJB1EnGN7KpHvXpXBJzGFyhJciapSvDC6BEoNQrRnVzw8d9p54XfjKvFtGBDpeaSiRY9EjhsSGv",
  "key9": "4jQq3zc8VcU1MtgGPSkQDhgyduNuU4Y7jHLNs7SicEwMaftgqNEBEjrPdxc1gXb3Wsjuco9Fn4Tm1ShoGDGbvmtN",
  "key10": "2Yy2zi1pgD71wLMjBfo6CeynczbCyyjtCYdJgjmDwjghM3rTpupLpfGoYqFrx1zxdBeNDiakUsWTC9pKti43PF12",
  "key11": "2sueHN3nLV5384amEKdmgqueyPRSvrqDbBM228qzDTebaxmyc6u9ogX5DctaBcHWzkDZgFrNZNwjZDTHrR2crBEW",
  "key12": "4f88aHDBH2gtJ8QvXHY6yokUjmtcrNDeKNmgKVLgsneHfThsvSqdzb6p5hikR3B7PmcN8p5fuSgCsqa7M2gZWhyC",
  "key13": "3g8eEA5ATmPk6A1VGaNdyYnoGwKwvxHXtq6NGCcmVXRG8nfAfksAAAamcYPPqz7CZ7Uwysacbc8iG2VjdUFEz8aD",
  "key14": "mGvUbYtRMSCa1HzfHPNgM7CWJ9BwnNK23EY9PgnF1rdu8pvjBydtAxCWEmjRLBt2jfXvDWZu8EBUhBGhKEbAYcq",
  "key15": "5xM7h4Ev1noYXHCSwx68mHNN1E4NmuQsLFzLfySiBiD8WvzYNGmM9Q4mAqYB6eXsDMwxg8w4k9sGYjUV6Uvj4wcc",
  "key16": "2Gnd4Zbc8JVd8WR3ptFJYcJoCMLi6xeYPgSDLeSdGv5KSN1NXknA6kcGbzrS6oM7r64qq4pa4P9vDT64h5X5XqZf",
  "key17": "5HCaHQopnWxNJw6RjvKqZHgR9SqztAB2qdM7xcKPvzoYVBvC1HH6a2dZBmCySLNvwCi2KF1XfHmnv9XuWABbo7Ue",
  "key18": "CzEDeyDKLJRDkGKG8FDz7rq9j1ZxiVZVT3qqKoMVKmaXTA5q6eaa9QGLZN42aBXqPiCpGEEEeiNBogdP9AvEJCw",
  "key19": "3ZAwqEGH6BTZNk6wUf8rw3QPUWf7s9MskXkRS9GJvG13yDKHKD5TSwTq3rebNhhYTzod8uuVNYbAWzdy6JknNAYv",
  "key20": "3YUChW3LgJcNqvCPnYdrwKBRqTP4ctgENp8FSv9L4yvm53Lbh94AAM2yKWJHNweesvNx26vDZdAh8bN5TB1gr2gg",
  "key21": "3msgoJ1dZ9aoWDHFMBLaTP35A5nMKxUxDtJ9t4Gzz6irBpj1x9jgB4YfYgu6CtoyD5LvL3HWBL1o3cn8LFztyZzH",
  "key22": "3xyrxWzuVy5qTRUndKz9VDJwQVw7fB8YC5xkz5Q2ditNfAF3WWZw9r18Dce3uyzQQyzRh82TgXVS2mmqCkYe6QYi",
  "key23": "4ysoPfefW6npkthxg5N3ybvQ8n37zNWXC1fHtSwTK15AiFrct5zaJvm9Cj939eeZ2Jr84G2F1UZ9G5nKmVVtXGsW",
  "key24": "3HDjrXzPNkXNXLeiPJBUACmHpGzmWWRBBsmEoELfhLie47LcygUYGuxrVihBmG8QQr7CECLTToS9f9DGymVmq6sg",
  "key25": "4hRW2pPC2hn2r1fCgnBqLnEJw5ZWQ2bbuWHDZgt523SbznZRKXEQTAy7DNx6rZFuG98jknMgUvtF9brpf1LuVaEx",
  "key26": "2RoRCYwWHVrPHxUpn4QuqQHw5vxCqomvuphLT4wLtdyk3LjgXBd8QodzBe1iLg7yozY6mL51iUHoNzpMz2UfZ4WK",
  "key27": "2HGFi6CXauTcTmFuxEG4zKyCPzTPaWJLWpbypFdhRQKyo3uTxQF9dRFbidWXa8uppwj2mEu98gmkojiZQRgsfDB6",
  "key28": "M1mMNjW4b6q82MWLhW4z7NHcCbqYAEssaKtRzKMX1Emu7gBLUmBnpGn8XHQdcRkayKNXVcW8y2xdJMohqDGMoKY",
  "key29": "3xyE3Bhf3Bf6Qpe4KuUAjzehFiaru3w9NH7oZxXSstDHtzR7v5mb7T5y94je297y1E4QVhcvWvu4ugASYsm5NMqM",
  "key30": "5G7UmP1KKQiKEKMDUNDf1deYNFs9uHozADZMS9fGeVYLFdPQcjTU3wSatq5pw1um9rFw4VezaHUnBBWoAp2PuJvb",
  "key31": "31oEFGEsy6n1oB7q6LHQE5vSSiZbkVR91ghi77woMEDSwHLo2FQdLv3QK6r4JQycUU4JjuT2Bp4qPxCwBhdDfEk3",
  "key32": "2tjaYxDEGPf1JiJgMoXgGQvR7JP326cfC9ypsJW6G4v8Hu1KSfBvDbeLMDvKibRrYJv4V4ZvffFenATiXLkkzKVg",
  "key33": "32vwMd8PqoXMLehsdd1duZHvpPcFEjGLaemWrzna5zv3j67i2K7qrv9tWrgBeNDcW2bZa8DcoC1zH6Ts15g51C5S",
  "key34": "2riMqpCfb2S1xRgaP7W5UETTcRUbPdFNQDkTdNsJNHmg2HnM4S9Utc3yEaMiHFBGKALdHKuDFWNHK9XPfKEznhD9",
  "key35": "5tSLr27LfXDioU6zsAq3qP4khPtVxVx25u9rp4vTyqDq4TfgphFoytjnWDfpXWuHdtXLzMKQMdZYK5mMpFxFfK6Z",
  "key36": "9Lmgugi4Qh9U2xa4YJ6dERUmiQ9tbaffKKJpZTdrVVbSHCvCFX68uvAJNMup27htMGL8BXxdPp8fosj7P83Kb6t",
  "key37": "5X5YehBpgAyVDmbFgVbebjPJ74JWTiX1pWYxojT8LfumQgAFHfhbatwTX3iMaJeTxB3TLVQw1UuUVvBBprhw2n8J",
  "key38": "5Hjw3V7HLsBJGZ276LWmzyre91ibfrtEqHz9y9zrceZpCfRd3DnG6KgieEEMHijHWK8VH9wwH5HYD7LHpsNp6dNa",
  "key39": "3J1NQbDmjxcs2dEvddgktDT7MyUr7vwrio4kr6wP6syNBXVk4fgdDmHGAvA2bBL8nAJU7fEhrFSTSoTnySVuFGG4",
  "key40": "qBNSUPiobo5KgoNTsPVSNfarj9HAGXKug9ZuUVaJmBJhZZcm81NGQyiR6CkDLfYrN3nArZs4H9W7zLNT4GMzsn1",
  "key41": "5n6BTic9jtgtWwiRVAnfXpwn6ckWD7JqN2R7ohP5V1FXoB6JoWSJTkTjni9ZzsLd7ptDbuqkWg642KAaKBs8zmhN",
  "key42": "5XKhipgBuRBwwc4pDVypfVMbtQ4ZpxGkU3a4ZQYwHdtxYXHb1pGDihUS9igHeaNm556eeNkFhboRXc9XKb2BQ6ri",
  "key43": "5eoWc1xkXn29btiXTyCs6eCkpVbXo75g6yZGsggaSzZ3GycCw7ySYaCbjhp1xcvEdLUWmHZJ12DRtsiLb8DjqrVr",
  "key44": "488Z4KgPmzv6qxbjSAgfWJuScghs7zcx5c5BXjJNu3S23MPHhZNq3wQW9KSVkAUAZd2TxxbV4JTvdufd5dFohaPE",
  "key45": "LLkBVYkuTx2h4RKPuutRWrriHPiyfB6BFfLu4K8WFMfzhaRSdZBJmV8pLoCNjvJ7t1uZbKuNK8X8VV5vk4KoK1o",
  "key46": "4wGzBaHcXUtycckaF99ccEB7uSd1QbLfY8YNBxNhzA3tfjFiNBpBdiFriyXGenQ4q7GGX1aDTjztPKZ2MK2jjt7w",
  "key47": "2ZYFzAcEeJNZYyuMvf9m7j1ZkvzqwwDVLgUpCr23Qoo2mxRXBVmcEUm4diJkYVfk72qT3iwRfz38jKt6RKjRSDmt",
  "key48": "4Uott4MeDDNnM4nmque15FDMwYCCzV878bydrC1JDgwGUuooWum4uTZmkkNizE75h3G3Lk9C7krpHHAUpLZH7cmj",
  "key49": "28BUAL34aBhzdEtm7ZcwTXF7GEgrHTYcG6sYYutsh7ywmrWVPQj7MfzWn4rd5cCWpNCwF4BDwxWbNiZyt2XRENNy"
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
