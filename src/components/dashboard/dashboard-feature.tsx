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
    "5mssPiharqtDhkahNFuyPqiUJ79tAEdSC86Kg2AbzY2191dAsiG9JLAg7dHdg7xuMcxBkRE5Y5Gex77qEXzFVz2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264s7krcV1BV6pzeZYuRUyYjLfVHv2MxyXi39DkkFFDAMeYUWdgyFHYHyojwUwJipvV2SeJMSnDA2rAkcteBpwrZ",
  "key1": "4yT6P1d1amFaNMDz98oDCwcXeMHueMtjh3qAHx1tA1sTZrLQZ12jJJaNZZEGY62gTrsFK2jQ8uXZwqGfpf2JpsAL",
  "key2": "5x79jF9ewkydZ3NmqZsL2BiZN5kTuUTpbCi3nJEk6TpSNVA8xsfKCHCGrfpKa9fbdJh7DsubsYYQCtTH5XVDDLA7",
  "key3": "2FYNm4hSR4jdWkduXn2YBSoe4zQaEnYxyBtPWhJX5pdSYqvR6vzsGFVZ3N12U2dmU1LX1qTP5gkHNg4ACGRfLnaL",
  "key4": "43Qw8zKybbQBGRHy9LsQV3XtU6ETzaFQ9ZnqqmKi3D7povxBp6K3froH3uYWjr2up59sTfRLqVnkVnCnhoE6YeEg",
  "key5": "5R5RMzm2CdUp5EiV7x3zSc8fLtqXtSqzJNkpNNTfURbYkVtqvL1JY4E7BEkMSCvd5ZWM4dZsscoeRrKmjrzMKRHz",
  "key6": "5kFL8eD6bAby7ve2ddMGBuq7SFWgxGuU7szLpz3pxtDJ8ANW4tYRdwgF3vEix1pFpmJeJ6sUNi8JkiNtqRSPEdpA",
  "key7": "4yvKKptNuJRnLA3TDkeM7eZ19hLmgnPuL3uoukpS1hMyBZX9mQvkqHzWdwxRnTKZGp1ykWYpXnGCLrzKtjHo1S2q",
  "key8": "B8LjkcecdGY1PV68uFyevtEwHBUFWcNhLJyMW8zZwMC6B59qtPPrm9mqdG4EpgWRJDmn5iecRgfb6JrP4HECF3j",
  "key9": "3MrE3mEFnNbdEUHWows2EHsUTPzbTPary7eYWJKbzmrorxPmnErZghftZnKWt1Lcq6zuwLvNYtUwDooLiLXgwSDo",
  "key10": "4J3upVxdMTKRaAX9n82fuEg6FFmGAhvD6uP6XigWvyncXtxUsCJQBE1SQ2jfiCDxfozfkpLhi43LfP7enqrYPRUo",
  "key11": "2LQvrnq8JSRGpG8RYvjZTKXcFo4t28XhNEAMZVHjsienbXHaDZAfnQQDg2oshWXrLKP5JysKXMX99v5DQPJ7x6YP",
  "key12": "5FxVa53C94fr6hAaGDgSGvWhA14esmXmsnWGp8rEKnvALUePWDeE3LK4LsDKMf2kNYAVWpydiFXy5PdDPCRZGFkX",
  "key13": "5F2syAMA9GtLGEUTFKdUWRCQiyMGCaqZ7UGtwrhjWfxNpvA3mcSqSM7zXu2T1eA3TiTjYLLYYrzrXLjTEz9WkN5G",
  "key14": "5Cu9PfMdX6ouebi9iEgyuHbHfdCbiAvZCNRN3m2Nr8j2q9TZxmDasHPAXVE3xcKm6z8Z1hWYVcHUnkJGySVbedUB",
  "key15": "5mLyAWiYwXFCqDEVU4ps9V6sbdeRq2AS17Drymy2tAFPiWUzfpFsJCoEMeT88tF1Ky5Q7886c8AX8AgiDr1WdNbj",
  "key16": "22AJUUmKfrD1LziTdG1wA11SSGzwXexCHzYbZ8oVxbrig6E7GiA6eP8wGJbhzxkCdagE65CxKfCd4gzCkuFDJ1dc",
  "key17": "4Ce6PaAdjnmRacMUTnKHUgK61KesmPEEdaK15v9HiKLQ3AFyXAaEzfh8wvFjfdc2mEF5RCTcEnJCo2UyRaQ5gMKH",
  "key18": "5LpTsKo44hhwkvavexCkMgiCQDiThobbH5jx2w2kySZ8D2HjtJFBNkgV9hVvi6JoDiuo2gMBbWu5HUVr6vX2gEhW",
  "key19": "2BVeP525u7p7mc6CQLiXA4bRZ1ke4HsB64RKw5rfR7iHKdWvYw9CpdEa8ibHMjA2gyZGESURAG3mCxtfY8xqEDh8",
  "key20": "2mUkU1UBN96MoiZgu7ThsnKNBYt9us2mhdjk6yxrCr2enRgRXo5CHYXdmYWyZFfnczutfsK2yV46DqFQtiCqdpLp",
  "key21": "37S8QUfXfiBXmFw7Qaynp9a59weaeqfv9ibj55sZ6JjpfdhtixCrQFH2tUscwfu5D4yfwr2urVDTQuDSiN8A3g8C",
  "key22": "2aAmG6fWrCJKxANbr4f7q1cpbvVPH42bGbXKfFzc2bFR56Kc59CSQ4dvgPddUebxChh6yWaUxJ8WUsUniLzsBmBg",
  "key23": "3cHXaV7ZGLBH7F1uQooQgNp6ZaybhCDiehD26mobFDPL1PjPSqKAZfnn4UqsDoAEow9pD1LWuAf9Ebp6pgwMCfFe",
  "key24": "2kcsPqCGVhiEd4Wnvzq4YqyRh1ADngL2KZGQ74DUtutGJkc6KDut4qnGjCwDVSFJFWcPLkrWY6wL4FRe29GxBGos",
  "key25": "eKRJ1VYDD9nx6rWCyJqwiY7Qr3KmerEjrNyPbCKfVGKW7zX1cMbHBGXXCyqDXNGt7DWnvdVBcyF9tw86RvZ9L4k",
  "key26": "4cXmRnUj5tUMJtPBBtQ4736zRaJyfJ3qFeyg4qBGXyBZmXkCupKvrP2u4sasRctag3vaXrcVVXHzjS8tSyXKTPxj",
  "key27": "53LqNRBccBHnogu1HpmzERQrw138GjoQejjoychWMBMAx1aZqeBMvyYSNW6c79BQ8giFVBhxHM17XkcK2DTB2Bn8",
  "key28": "2JefdXjCmErjUfbony36NCRvus74MEhcoxcJnFQdgXWFksxDjtK9CdDRnCJBnJXvAKSVRSpQ83ATpbgjcBAZG6kq",
  "key29": "4eUviHz5qcyufGcT9Fo6Wm1DjLvC2FnA4C6754wHRnt9RR2JKbHUP5UZ8RzxrHMA6vovA8S9y75mpuDbgiYNAaM",
  "key30": "CLe8TAvwm1KDm2ks9ugKuUsTkSzdwozEwYwDEvHFM8b9kUB8pi92DcNUVEPuZr2bW1yBo27JhyW6koFf4XnkyKT",
  "key31": "5cjEDVYJ59yAZbUr2BLw2o2V2hsaFcj8BAzmC3ZvGx5hfcgdL4TegvxddgmRnWUDFpvRFeh94kFgF5GELujyF8gA",
  "key32": "67VCHhsEEPr7ygAd1XGMWLioL76iiFskdSVNZnrfAYQec6kKgmCcHnYxUesc4BjuurxoVRoKubXYch9BFvoGFD76",
  "key33": "5C26sJFs3yYGa1amgQyK5AqmK2QHitLFbPSQ52iVePF5Km1eRGEJUFHF4gPvZ1hhrrzHtVcaxkFfEyDmLp2oCnqK",
  "key34": "2w35VQ3yPFHZinevHPWHyFuW2tN3tMgUuZjXhfDsx9DFvKHUqdb5JABHuW9WAqeMGU5Sk9vxtGxFdUKCib2RAJiu",
  "key35": "5CH8dQLGYfUsZL5tjrdND9AWTKubxRQn7VzwRTbfGpQcTvkCZvGSQ5gFtE9VdDS2jPr42pC9ipPaK9BntabcFkLA",
  "key36": "4Xty9EEF7tP1qKPbhmQhoTAEEUJQiC8vADHZ7eWZw699NuZkNTf6pEBBDmkfiq3oNExZH9PXizufEV2SZ28DzWiH",
  "key37": "2qYZ2ebjwak2CamPuzdeJGAxomtnHsm7eKNoETN4xsghBiMQNXAMBKB6R6498myyujZmNeyMZeBE1iWZmVq8TiEE",
  "key38": "4Uw5jAmjDugviwXYBAcBRkHzEEKY8yJQPh649Vsx8JNcUKSYdsCKE6b7hBatSEMgBzr9TVREjX4MhreXEJuLKcBh",
  "key39": "Y2z91bfxELbUWSYR3dQhNtuzn6zFFdDVFkZYSjt6t91TayfVopPSbgb5RHDDzUC9fBZjtEs1ZQcV1QJcVyv6Hom",
  "key40": "3Tga2s4f33azQqHrxNo8P55mfv7xaitYzY3ddrMB45PXD78tBc8aNb6e7wP4ynZ5qQaAfkJuPxyNkstCvZghkY2C",
  "key41": "4jc48RFwmQQFBVKu2sCN81nu7vaVWfHSWnzZt5J4gCwxwCLqiKqRAB6HLMk1EiWRjPizYwmWpCQ4Nhk1PBm6vBJd",
  "key42": "ND4fLpyfLrgcGww4jMcb8FP852kXQXDAvf8FgCe6PyLoEMGq4kCXBGMMyw5Ao5bc2U2C9Dhd9gSkpNMee1iaYSS",
  "key43": "3iG1Wu1NuW2VjLd6nyPMa7sKPXZfdSGSmYw8UBLCs3hJNmDgsGze13pTcSWmY6wgnafb73DxxuCcopphySyvPDaZ",
  "key44": "3c7g2HKjuoGrAzFMbz7C9eMG895rZzoByi8tQufk7KybTonmbkcjwAUfkfkywiVASaVQWRmcB7gSx9hVUPD6NcJH",
  "key45": "3WirSYtCTzUJRxzLUemWWeHQ3jho8t27zzgLxLsFBGgeQk42WnGUj1famRTSBjraLniGMu6kA7yfK6tpGrKQnQR7",
  "key46": "53bzGGFyhBbXNNRHAfne8V16uKDpRsypNv9B7YDYRNYndZv1DwLytQDsdrxn1jPAfqumXAVe386sZEDrqGjR3o9W",
  "key47": "3P4CCnfGV8My5f7T4t5mB9YArVA5Lm2m6Yz3RjiVQhPRvEuLxXwQ3tfJBTn4NV3PU8QR9qC8fiwjCL8ztwiAejq2",
  "key48": "5tJvedtV4e5x9GraA36Xo7cdLFq6d7KQXdySUYE9baeFWTPSZyC5KTKXeumKWAf7fUdMYSJhTASfRb9K1KK9v1gH",
  "key49": "4h7mEAw7VNzxG3d944jpBcAYh69qyaV6TJVQZVoLvL5tj8RfAt1QnayTTunUgkfjWRFeDXasG8k9Nn7N6MYgxeV1"
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
