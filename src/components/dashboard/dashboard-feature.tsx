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
    "Y4khxgmp2ryBNH4njhFSpKT9wAaPdAJ96vUvG2WGeZGaSsAzsifaHW5XajcB2hPDVbSkrQWGc6xMzyJSeThC7JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKHHq3vYpMWeq2ChLqxdh5d51MTJaUedegXRUcCvJUJnXTD11Ze6bjnvkRjysx18xkyE3TF6SbYr1ryjxzCCLM2",
  "key1": "3W2QrC7iYLnV9bMBLvzAkL9f94wKMHBtPKtoMjFcTqsEJr5jbLG1FBL3R2Ncbttq69LuyXvjukXooxqCsgUq1FHi",
  "key2": "2yuZbcsePM2N532Nrbz8jFYoXd8WB6BPoqP4Fm66Q6eox9JEbxooEgUVH448RBqd33MSMyJoa4Qno8xf6Ti7j4Xk",
  "key3": "4eVo4jed5gF77MtftrxEXVNPxX3HAf4KQ9FHX9P7kykwNk2j6UBAQgS4h4uje2hJfLxJAYVf3qt1PfLo9rDh375R",
  "key4": "2yxKXsLrwcVovp4gd3nACCsGwKGef3hCYdB9LaDpP12kFs3m1aHarEgXttfgToDPzX9xCsBPP8T4DRNVYoVqeAcf",
  "key5": "2duBwmPjokCu3E9WfkkySiPgrRAvErpkNP7sKjTo3DSzwQ4K7AJGksVQpCVTP1VS7BhnWiHYpAD3aJhbwwWn2vnP",
  "key6": "4YCa6tb3EbS9KnvPg3B5AQdA3DGafJJrJQpmfUMn4poiE1qs7rYgBi98PZSgqPgV6xzro9qSyoBkeXosqsWrCbSM",
  "key7": "2uWPjxgQMSseJKHXhyo6gULDCJ7E9Sr4Kc89px1omoEhy7QjdHfyyq3d4EmGxtrfzUJ6ucnRJQ7uK5JPfc6qFNYz",
  "key8": "wrauoGU6PiqMmxjHL9V7JjgH4cKkD9G7cTTALsFnPXZBhxuf7rM1vHfY7pLsUravpHQ3duzWYay54mXtk9A9rCk",
  "key9": "crAbNvkuw8yohbcv3WAyEffVeAsjqHebwXm92V3S5dvPDwj5up6PehaWKGPHcnB4FAt9oCYGZ9Vg65raMmuUWfX",
  "key10": "4ZXUdDrcMDYzacpmfyMAj5KGLUHdvMo8i4idgL3XJVPYXMwvjBqZXej5HhV7y6krXfTv6MDDKW51kD2RkExs1xyr",
  "key11": "5CkXGeW5S2RrjJWH5K42BCzBsnc3tgn5U4SkRqzEcEVL9AT54dbrMNWdEzXDcVD4hWN5mKzL1aBtZXZa2NTGC2pw",
  "key12": "AsDjBByhHRGMAosbihko7kAhrFdVy7FyCY2fSEyC3bisiNnXc6ReBQBoPVjP8ehXY4KD9kNbXdRKYHQjR9sXwy1",
  "key13": "4zP1Az35rK95NVEtkfaZp27xZtrBdSdhU9K9sXV5K5L7mRNUTCwupjk6J4R8U333kv9Hj62M4EEwpjkuaziCwDHy",
  "key14": "t2no4VBkytjVbUFbUvmP5ZU1rYpZTxFE1MDC1CVn2umrM8h2nR9YiByXno32StSnFFQTUQ85wC9tkvQn1J8VHVK",
  "key15": "5XE98vY6SGPosYL5aYtLKWmXfPuoR9Dpvqyvkbyi2wdJ42vxpvFRhvGFQaTqaWWh8qrhBS2SRvwC4C1txMqJhuP1",
  "key16": "4pT6ctLp9Ej2VSqSNTAFpG2wp6sDDyAvpKjoWxoy9YKXC7ggTVXzyYFECd59PvimNBfbBTDdsAfRD5q5wCxrSxs4",
  "key17": "SWZfsahvmoAJCU77WRF42Vv23EiZDPNS6eNSy72S2NioKsAYoL9qp6uVrWRJRXDDRDSwhaAu2FRtZXfSfq8VDTn",
  "key18": "47En5HS4MmAAyCJGPR8NMR1cXth1qqeAyugZvDvVCcxyNXqYx5xVu6Be63tbBN1KmJ48nMFqVbCfHrH6n9sCNMqC",
  "key19": "2ZPE52w2FHr6bA1p8NxgjGyreASkA6AYcLsSfcHP16Hy8qp5Skt2zaM3gfxA9KdqwDzsQNSsDKY6U7BHh8jGsL4N",
  "key20": "MuwsvsyUsySXpc83885zvDdxZeqfpiwhrpoFgcaATDbbhGXHPxj3ZusnrBzGHbTJ9zT84QNNvqGFKR7dQRpe2cE",
  "key21": "2jQuCfXJ1p2nsdEb1PQEruMPmyGJ1wAgrVr2KNTMQv67riSAroERYRJYEJNrUczNZanvSTpVpAeUuq1HX7Zub56i",
  "key22": "4vzrkziDnq3jut6AhtY4DeiQjfd2zuKc8BUqfRypnBhw8Af2JCue2hYBNkbSPgJhFs9pe4ZY8x8aNcRvMBjsaD8e",
  "key23": "3erQ7W8WF2M6F1FpFYVQcGBFCXnz6UuToqVbtWqoHQXa9JzEzx9HQgGrL7nBLQt9o5bbsKhdZ4nz9VcfQiL6YUvG",
  "key24": "cTWPJf8YmZnPZjVyTh81XFRAafWUuXY9MwLuxR8vDt2uxRTesHQFrnsTpBJ29pAgatiKSinyjaWbJnJEgz5J8qz",
  "key25": "CkZQHqGbSVtp5DZARDd7xf3Q85RMDkh45SSzXu1Mdurw7Lq7VMpEgxyH1AYthF7g5urXg88GxHjrcnKhVizCLh5",
  "key26": "4TyVBWypPmNCkWUDPNEUnBrkQhom5Yjs5uy7PyBrZEbxZdi7UoVpdCkf9YsJLMQU3EqrALDRyegkxdhizyGf6E2E",
  "key27": "374UTkT1df71FCmbtUvTpLPwAX3QK5YS868HcEhHUK5yTPS3TCpG62hEqDdgirewyoottRGMJqXx6GvvieEAWVJ9",
  "key28": "5QuwDdYCujEZREbNPusyCP5F4XWmei96L54zXsfQGXmYLC4fLbteq297Wexxa7aASEYr9RUnAEDMeZPzwVPauPXm",
  "key29": "35X8bV5fCJKkYUKFmtN52Mo2b7pGWcgf3iDsSyPerDaiMV8dYHuLT6nqgQFEFkwFiiKaopXJmQHzg4HCESf715V3",
  "key30": "zbjb35mANfVifWWzA5nYLSaPirAxkSrYDSp8vriWaTWKdwH6J4A76DyVvHsBfAmCvTXuRTyge8sqAy8bTo7wkN5",
  "key31": "221Z58hx6jPTtxHdPdbUGqhbTbq8hKYn8VUf1E8dMssK67RzNcZXU8hJhbkP5df5mJn9FhN4ieYu4YcgMgtm9be5",
  "key32": "3BsK14QhaCKzZFszTJdh3b9MMNRZm4EsUUUQm2wsAQD3sqm4EGVxgxgStyZU2A1TBMoHKyJtfXGGe3XU3ZzfViM1",
  "key33": "4QKtUZWc4hLdw1DzJ6h7cFHx5S61Z4hZwkhEeZBCpb7jCVJBwhUjUu3Uq1H9sPAvsGrTDTSCekvT8E9HqZzfetwE",
  "key34": "rAVPXxVS4CCYyjVvasfXj6Cyzn3nMWdxsmj3Hy3zz9qhKtEkwHFmoTPYHBrmzqX9BDFAjGLnpj7nvR8D6ytJVty",
  "key35": "45dXtYgGaSVsf5FmC9DrmyQnAQeitT2zMcR9zNMTQKVqV8bQP9oWccLsr4HW7Gut6ac7nzTXbUGRbNFw78DudyAq",
  "key36": "3hi7DtEiVSAzkZ1rJK2Cv8FFHCCRefNPoK5iWKxCnWbFj14ckVPHLJDMTbDNaJ2hRsDQV3SSRq8eWmNga6h8nNhQ",
  "key37": "5bzRvnsaeeKbxWBemYygnLgAZ1JYQrJRBDym7hYmFjx3eT8FEbwS29XQLNpNzqUVMGySssXtdQyKLuKbb9JafzJ1",
  "key38": "2Sqvw7axFsyvXWjhKrHyLmaoPRPdRpAo4fSK4REKyNJDHDJPDQoiWJrMWDXX7ocEo3FjvgpV4QMJRDhkAwYzVXAG",
  "key39": "67NzHaF9FcmUPbbaAWFrgUZZDWbxHNJMRkerZbXEdhtkAAPnaAy1LRjjXKk1v7ENBgAzEXbAa54tmpc6t3DkZfp1",
  "key40": "4vgrc5bXMxSBvHMoaUBcP5MHmVLANNEAdqqT8wxrk4jpYZRribbnDviEn3BiYjZLEgMnkZ9okQEeWjMmEQ33ycda",
  "key41": "Z2k9XM6KMaznK71KgamgiCbjyc9U4A8eeFVQRmt5drbrvn1yHsnpex9VZ2k7SAq3jrVnXRRg1cKpMbb5WQpgP1R",
  "key42": "3fRrGKLoZgugc9qK5AtxnSoA1VfjxLP4GjXGkqYaQfPnReUAKLshGEwPX2H18JjSjwxxuRg8vNn1S3xkQGft7d5a",
  "key43": "5iRk6TwfYnNyCMSzwTRrm4LcGeaxUoiiRmuYaYkMfgRup9WW4bs2BXsAGFEyQxYeb2LTLndhreHtPFq6YKMLcKZP"
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
