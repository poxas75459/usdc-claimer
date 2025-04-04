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
    "23bCpwx84ih1gnDDG31BdJcq1zyTJMssDCRMWmf9JQe2218QWazmEzYKVRDb7eMQ9kHb2AQdD3xL243RJ1mA8fnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2gaYbzLderZK3UkdrjuLAdwUR91vnQPvkSqueAUHUVfsX4qqBsdAo7HBAo2ugFRpm5pHKc6F1sTuaryTByVmxL",
  "key1": "48YNNcoYYcMm7FsRupnfbhLTrYHAGGdV7Y6hmqupU5ZHvbebqPogYXiyRPDLJJkNda5uRLFLNpLX9DWMShyNCEqK",
  "key2": "5Ni6jYsanL8BPNc2A4HzNYZGjrT7MpDpvt3vPwKfuGhnjvjvCiL1nKEMfMGTTBsN7eMJikDHRJf34KG7TL5mj9m7",
  "key3": "X4GcDZ8eEj2Gwbq68bT5vCWbVFyUyFwXnxbBmhvpAWEvTyK6Ze8kvbSJntrPmGKYSfZkkoEQsH7LkP3k4heMRUj",
  "key4": "5V3fVc9U1HUsm7e2FQd5vQom7uXkXguRoeqWJQRGYS7HSU2YtbFAkDJVW5xVzacDZoyaDAheHbt1DQBebndMjkQ2",
  "key5": "4vNA6xCpdsgZrcjpQtspesjQnPxnvUYJMttLRs5rphwAEucFCC2DYX1iSGXwHu7iS5ZnbYwoFZim6e31vBR1mu94",
  "key6": "2nJQMuRDJTytXZXuDrhJxRoXmcpGU9Fkhs2WYJarZoHr7hBDDuhgkm3EjqrCLntgaG8uQiebnsfBvkkRMyWnbkfQ",
  "key7": "27tXaC95ZfDmtvm21goh7nSc63xZT3bmXw1GggBVhbGdmg4tuJjDmgoYkgqjrE4vm8TDDi3K7PPRGVE4rzDFTBcN",
  "key8": "5JfzUKKYRe9nS68EXSWJEm3kRhNavHxsBeaXKqgaT9iHpt9gu8YiRa2yXPtYwJGyraUcNmhP6BKjphz7YwjdeiBs",
  "key9": "FLhLzg2ktn23UN4RhP9LmkCe2ZEFhQ8EsR2nYnq1sDemgnwghgAjj5R6Q3gD6z4HQk9FHAqHUCLMzTDqjUo4bnR",
  "key10": "2muy1eM6Mss2utTxFkkrrajXCj18NJSqa3RJSRz7rSdZV7iQLDnrRev1exyEBVKvgD4pgxibBorDEh9unDfEYMmQ",
  "key11": "cKL4EiEGydNPhjFdCAeRCCwBHm77ViqV3qr2y4EjppjezwQzAhYBBvXQXfNr4ZF9sgrGPwMNRD3NmPcgGzmpBYB",
  "key12": "fcmF4dhb7Jj1Ds4WG6TPBdw5ZKg8Y7Y7X84m85yPE1GiRDZdVgiPRP1m3kBF2JbwQkZqZwYYATLeovj5ByghysY",
  "key13": "KzFEY7MfuiMEMYcGaYW1AweqcnK86wL3sid88nM5zQA3dzMDEryzRBeUdk7XGbPiB7YCR2Vk4YYXkrDe7sv6orV",
  "key14": "5fi9Db3sKD5RCWHKUfEQY34HJZ1wKcdQFTc8WkDvF6eeKmrY4Nr17JrZAidmgvKgvdsujq3xzR8bM2YhpwEpQnBR",
  "key15": "5M31MRgYsWnrTk7qGWHHzSVjBE7Ps32GtgufGHbKA4J23WEzcARTMmRoPCdfCrpPUmr44y4LmZE9Y7nVPzpYk1kS",
  "key16": "4e7A7sSGGwtyzgYuADYq774jVpPd3oDahaGy3wGVpK3WAqxXQ5pRGuDcmc2P6eaoEkPW96AfkD33sErFaZo4SRWf",
  "key17": "2bfxv8kCDvaSfU98hKetZVD4eRwhKR7nVQU5AhQYpbM9D3Ux9nTsrssZNNBJxmVMVzMb1iGHKeWnvroGFpd7SyMb",
  "key18": "4rctPmvyc22JLpazp4ZQunSM6EFDA1vaqAsfLqKTpdBotEjmENe7shmaChdT6G5imQ4554mrJ9hCDmDqXyB5rC7X",
  "key19": "58LvkTu2xqKtmdbANfZComVfwgonGBZup9gCcRiBKJjnrDf9zqgDRnZPbdBMVDvyGwqo4YR2jwK8KdgrUxGprxFS",
  "key20": "Y2NCFqU75yS6RLiGgxM3N1V8Dvyeyc48tAMsfwKitdtnwAB8LFxwBMDKEVurrTijpeJtr1iQNitHyaYkBjsXQYJ",
  "key21": "pqnZi75pBVgpqcQLWNBuvigrz8CadyrvpUsWiLgJU5EJ5xzrWAN3ZpZ7xzJsqQxNiofX8knyqswAv3ScvmeNtUn",
  "key22": "49s1ydcquMbaPdidJnNK8ZNQm8ygQ5LqgfifL6245MWA4TM3JYUqVoZ9wQjHcMoA4ctUfcjRD1t9h98xYSJi1cHn",
  "key23": "268NwG6E6JvpeigovhFutTPpRXHzsYFXXcziEGNbPvvDR5qeAkXfVYSuzMAqSDUqLE2L2DKBNKxXvPGs1ooZzeXy",
  "key24": "GeBXYMj4qHpQtCii7NSCUz6au1Yogc5kkzBGhQ4DoVz4uwa7VtikjWixMzc6Fq112gQnoiv8hV5CsTNx9oVPtot",
  "key25": "56xxoRqXhkXJ7rVHM9eWND1estcWYQug2A7f1jY8PkZqZ6Gn3V1EYSxVpuafuVxYvLMVpSoFQXP8MabVFA3nNGvi",
  "key26": "2aL2ELSixzAffRV81b9rhjP4RkwvbrcrNBDL9Bz2SkMSV3dUDz1ESokpbSnST66poNw3YvkRG96xMsbR57FCpKQY",
  "key27": "Nj5an4pR2fcNKnMp8VmCdP8SQCEUzpytMykLizdnUL9nQahVMLVQ642vGy513qbYrq59HJSP1mPfKwGpk5LNjF9",
  "key28": "2ddnstAAf4Nzr2c8a5ExotfJgxyrfQPkD9rXrPk4q5expGgifzkPipNFpHwFc17SQeohKC7NXsAvexdMyVsoA4wB",
  "key29": "3U13dJ3J8qSWw3dLZfw6Jrzyb7aZE8sXpPFg2ATGLSzVdM2ACHDp5oiYRiM86UetJvz5jbA9NospHBwSBckn9x7r",
  "key30": "4q2up8NzDV5oLGgfNaBLJ4pMZmwrywkGNDzJwhKpixdfiE9hBEpTjjP6v6MEuaSvHzWoMuwLwE4SeTSrrs34UdSk",
  "key31": "4coft3C7asE8NNmhFsFjw7KpxFhGTEwEpT8acNjscNz8YKYLHACowdy8FVinDSpQhB6XC3vSUmu2JRoC1sB6SYxa",
  "key32": "5QAijiYPat57TrWKrjjcKSgBNNFp6NPZY55fPRYVf7Kty1pB6WJvmoxahLMPe2N3dWdphYfaLAFPAonYH1kgXHV4",
  "key33": "2T5GmHAktiZ9jyQW4QC9CaSnFJJarkAUuWeH3PV44Gm5qmZXmUxUoxjhthLQGjW5Zy8Lg2soAtAeifWiRCorTxEG",
  "key34": "3GvsZ8eR2ZbLw3feEYbtq9EBB1LGjjyVWPHTJKohtXQEKTx5kxSXUKDwxGjD1xTnBTGc1fEBoahA74Nd5xVGUnAT",
  "key35": "APm9qsqBqzyFWRFAq4QtcJYhRKJXhcbA644ThVHPTfX9Ffiv6oE9Z4TCGJgXCiTA6Hwk2cjctCMBgCZPBXcA66a",
  "key36": "2rQPRzkppM26jyw5BBj1whxbT3uaBzLEH9E3ouCMWVjmDDt9Q8xrE6RadDxYrnpjHLeydc5QniAsrpw4RtD5Jef9",
  "key37": "hr6DBzufheFrPVU33AJDieK6KW4vNB1EXKArwW92yQZjj2CGr52eAE4CsJFTTiDThKj9oS1tfKDABjE74c95YGw",
  "key38": "5z8eNi6CvJYevs9zUQynY7DMvk6mjqsScMAjeB6mVfzcoipNjBLRfhqUSp4Z2rmLfUfJuT4t1SVGcBgn3jm7C8P3",
  "key39": "2ZwkH5UZLLDKbSPc7mpFUMWH2i1Z1ukCMZwg4PnbDgeRHZZhQQEtKTg5X85K2goeEHiMJyijamdeZ6NvjNWHCtcn",
  "key40": "8dfJbHUGkSZVYgFusU4HxAt8wB73NHJqZrUA18LUZ3VXzvoibmMk9MEHbC3UExZ8KJrftRSQVu9VmYjVzRVYAJ9",
  "key41": "2sc1emBU2B3t5ohikfrjer2TY5AbvUYBLS8LhpxS4uhLTkXxF2Zj2TZik5VasqpFjhMmht4GVu4uMuXtLwLWV913",
  "key42": "2gGuXKQ8A92UqGJrMDDMcMv3s9ywaCwMBpHMD9wjivZa6VPwa7QPNWR8JTGjX55H5DxPY68VT7PdqdeNk4GqBrSA",
  "key43": "2x3XYxTegreq2tZKnvAoncLfvMA8tpJEfqCA5H2oFWvn92Z5QYTHJGjAx2jL1mDCGtYG72yngeu17HMyC8eurpaM",
  "key44": "3Qmc92JwdhuqoRhLBamSSAbGZqCFT3Jv1M5mMyAnMat2UsoWu5LAhBn2WFYiJTQwWL4PMajwgGi7191E1538qt56",
  "key45": "2cHserzMtZvF9dx1SMxF1hDNAnByMvsKeV3fbaR1MFvMz93vv3LcY7kQwEmTptRRm6vkAXZ1yzTtYmFY5MAn7X5j"
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
