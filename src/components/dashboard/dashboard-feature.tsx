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
    "dPc5XbQAAekNs5trNvdE1VXLXSpeDstHh3zzWnRyV7dvwzGTDCsVrnecev6HmHdoSeEyS2PJQ1SxwGwb9gk8xho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjCJCVC3LC4agoKLea7yyU5BpiLH8gSamkSFgQnq3uA6zSxwy5qHmAS5rVgwq4Cay1myXPiYLxL6GHQA83GAYtD",
  "key1": "2p8cepHkjYtcGfqu3HHsuW9z71jNUb3BJ9iVfgagUR8fWAFxzPeUj1fhN1ZDoiFYDexj69zn12YVCJm8KAKZ3yhW",
  "key2": "BDfh9miSQzdXHBueiosWpQWnwxAy7W29dZLT8axPSGD2ks6FkhviJJnsXTzkESXEoKx5w5abH54yJ1Tvjum73Mi",
  "key3": "28N2RJnKDkSmpCSphATD4mnBKa2ZoBWXNbwN828QFGNbNxoYL9ii9ph6U5XVm7aAQyHPWPWVkjzM8ZLKpkXwmC5R",
  "key4": "VZ7NyQ6qDJwXLZmaMtnypsmKLL15GnKzxwpojWvpQkjUspKceydoi7t1zdwiwX65SB2imh1YgDy11hXWgyEkiR8",
  "key5": "4afQxis3XhbEBW9o43LsLAcG1Kk3MdCnzDujVDgUE1z9z1BcwSRQKKHGSMNvnAin1g1yLszyB9irjBQnyMEyKwJm",
  "key6": "4Xxc67qWF9XyiCTCFJUQLhxb5FQZdCA833XJTZrkV29ro29ayWtNdFSnpjsQ8Ddt69rx7BTKyr281Bo3oXQX3u68",
  "key7": "4yVaqAGp76smUuXpVuSt9SQ5CAJtTcvPRzuULhhtGpS11yyRvVaxdLVy23B3Cf9dDw7VbjFh1nBkq3Xx95bLMrAG",
  "key8": "2XJSGJuMt3FhXZQCRPbqHHtj7FNRA5BtkzFehxGb4JLw9SHL6SFATTT3JVHnY6fxWk2BRRA6YJc6iqP5UFAk7G8i",
  "key9": "2uWpHD2XTtBn7PbFAkGrQWMWPS4wfiGeS22hcZuPe7Ny39eT6HNBMHbLZGrwqpEz4HhaoZVZGPjSQB1Jvw5mkzuC",
  "key10": "4KKcZGQGFZQgXubxVDU5XteW12LJTEoML3wVNZ5p6GmDxCv1q1pHWN1aJ8vwVWfZnJhqUa33V41vaa1FV2CAtJyF",
  "key11": "5FCaCbA2H5LTxVdJqN5fNz5MRmza65wGZjvgwiq4HRvpEZs4kLGFw2D9Rpn3oGADGpJ2WUg89c1SRBBSbnMU5CXW",
  "key12": "2VQvmemW9MwF2wQtVncmk7BWdQjaKgstt6Bp5DjTqc5fvoe8KX2WzCmBnPYALY8wQSNppdv36piu8EsrLoBnxhvz",
  "key13": "2NExGqRni7C5vMs8s2vsX85pQtyc1FWNN39xefz4bnJge6jHA88diA2yUL9Dg1nqBSuJHbYGVtDoXs8Kt7QBFNgb",
  "key14": "3uGz6WLa7q5Kip4G9h4NEcTXZV38BuB2SnVJYXNwMX9XogxU3QY3qd2fDyYjbdXiCBTmyAetrbRdAWtLXrPtC7Vk",
  "key15": "5EJnX6XoCkezcMuFYEPSubbe4p44XQ2eSSGmJxQhVQm4skdYDRssJE3Lmiutt5erFnrUo5EK3r7ePamQsFJaqUEx",
  "key16": "2K7m9MJQqHVVqE6AeTaF8vftVJjMvWPcmQX8reysFGgyfT62EX3SX9eSPSB6iWFay5JSxQR5M8GwiW6CSR96q3UH",
  "key17": "56m1PArp4DH4jG8k4N1eWszuiPKRjDUEgVHEf47B92tGTDuRmRjkUnTAzHAeN5BZM92c9RHAEA6XUfyTXU7s6wa8",
  "key18": "NRntjiNzdCUktCzmNMFZH2NyD3gzCfrWzZQY9ZSRkBF9FvkjiHDLMxNUcdmLNE6mmPdSs43yT31tAPex1g76hT1",
  "key19": "vruSWuTBUY6LY1p38LeNvH1n9fBKWdLzLrgCjwJsLViXGc3LLiXgVshQDJBKNxVnGWrcGGrr5jmh4gs8kvXArFG",
  "key20": "2YLmGaox5pmWjTLNEHvN3DxtLqjaVKFbS83mnL3kpWdHyrsSUZL2HaEHhCVcARGwLEXsWdVvp2TryrDCsFzXsbHt",
  "key21": "2fytQVadUFSyafFvw7iFzgF1tG3CBKjf448KAiMhSvjtbA6m3pMsnzarp9vL2dnXnp7gQv9YUvrSkmpmqfD5WXg2",
  "key22": "2BMhzeujHNWnsorGyk8xFxCnbgWaNaZ7NSqGv2wLpiMrAMf3Ggm6aUEC1ryWjNw3kPgqEWBraq3A99V22LeDGTN8",
  "key23": "5Cjvuwuvoqq7Tw1UquiS2XTkv1MMRW5aPTZCmqfYp89rUruU38B8EtQaX7iP6K5D3Ka9HnWqP4SP26Nyt7AmJpyQ",
  "key24": "51NSiXNMCwUoESTPhgzziczoJVx9fnZp67ZeXYpYcbHrTGoAKsVB2zhZ5WheaBUQCtWQrRpd6HUtdhZMLs1EqJ7v",
  "key25": "4MCqoiZK6QRDTJro3HKhmKMsgm7NZdwAGCTKvpRbJHwyav7KGqBNPxpFnDZ5pXq42zHdJPeA6KFLsT6guvMYAnwQ",
  "key26": "4tsEuLd8nxbzcxkTSNdUyLB9aAJVtAMtAGfyDJGyu1azWhUsBRTCMiEjqQk2NC2ojH69NisPiL5B8xNPBXveptuZ",
  "key27": "3CXpKbDqSxqg6At3HMctHxaeiqwXJKv8PUTkm2ZWgL7kXf7WFMREQiTvsyHz8Sdt6WPbCe7zGksfzLBkpq2fUdVL",
  "key28": "5HzmStXwvahxCnZZBTHkDSQWTAwk74NYCbdxWJDgqAos6wExFfJmid2KJ7JuVTSaYSszfdzyEa35vLZnKsEYzoWq",
  "key29": "4CuXvXeT4CAGzfTCyv7w6GVa634H6FLjrmxwXX8MuM88tSJEzpRe2eh3aJ55ejiDB9cD5q1DAUP9EqGGJvS821Cq",
  "key30": "fbBjS1dXiTEnVqEgc5PM3CzEmFHofemFzsjM7wDA3PRGQmajd97nCLdw7XdZSHGMATCyFvyr99McwYRm7izNfV4",
  "key31": "3FpCyRsA74fXX5uAYk9Rq1Sg8MtXS8B5NpyUVqHnDaotvc6QiJndHzUfGqBhTcy8PJDxVdWr4qsQ3yaEsudAir4e",
  "key32": "23Mqj9g5HiNmpmJtJzfTnmf2RN9g9rpYHbtzUpwRqX1sZds6EJmmTM6wVHugB6fbSfv3jUGNoiRKPdidzMRmDwwx",
  "key33": "uiuqYNWQmAn7mkxvzMaS8SFkxDnkRYgWLMpxykH9Zrd2cBDcTYzxi9RXbXLaiYWfEwSjhfCxMWeEqG36jFX2vaW",
  "key34": "3t1szE1z4xTvJUQmpo3mpRjSfdCMbgeFxFMJbzUFonK8i7QHvmpNtkMdnMDy78TUWQR4Li8sZ6DVLxYGCa77RrZ2",
  "key35": "2tP3SZBFKjrpgkr6GEP7zrEVDWnsHxTN7xHZRpTgjhdo66qSB72doMZ4RZVHhQAUuqi6X2hY1N1cfEy2eUM8mKdB",
  "key36": "rbJ6NqizoQtzHA1MVYVGayX1a84Sg4GGoSPV9o2ACzbgVzviMABPad9CtLJDztC6vocrZ1hX9u3cBmFLHnPzP2p",
  "key37": "2a6bJmKEDUoRy51pcnuJLuiADBb5BwGf9TsuDwdXTs1FHHCfPRF2r94AQ9ZvK7YXmmAZJcm2HoVqpVCumLkdYz4X",
  "key38": "5nocc1QWmHFpZeGJkBCcM35uviWhiWaRGcDX5jmAQMPaYAuyqgxtpc1N7tQiKLKkgKmpgz8hQQSRyUon9j71YbNC",
  "key39": "4k7G1WAZa7eNkN4XsUAQxqxtLSpEhCUMSYmH1BCgjk31tEJ1ihnA1p6K6uc63b7Lq8Nym2mxYYSi7XjhGSRVuzfF",
  "key40": "3XTtLA4evWi75yQAp1ibzXFkX5WeGUuXhSw7S4wEuxXsWCn9oiDekywLjGaPcmfcZacGZe1pGqdNAjPEt1bHBJBo",
  "key41": "2BotkCNp4MRP8vCqejv6342LdAA9CpkZu9W6ydydgg5G2tLKjpAxmgjmJV2dA486G4QaYQQhrcknuA6fu9zYYbVo",
  "key42": "64RUVC6kNo3CdVkZUMPak3Nj7iPBTTy3CjAzPLztDDSu6jU1NtWEeiY34iTTG88Df3QMBSNDb931u6V1b5rJ7ykC",
  "key43": "2VUTRah7pmM7wL8nmRjnnwP8qZcqgYaX2axdxpChtWeEU1HEaHZt4ktPN76Jr58hpwygfcDb82agjsQEwpnUYExU",
  "key44": "2bqga37HcKESnQHaa5ip7W6n6YDcNyBDJNpwc9WUq1vvxzbwjy11mtG7RRr4MEHcrdcmpxxfhVvG8oxuS9D9sZQs",
  "key45": "4gZ3FXrbvkYjgBGCynW1nG3ReJvCv8ksD6feDubLbwd6aoXjFc8kfRB26rseXc55B9v1fhqtf568NWdXXcEmNtA5",
  "key46": "3Punm6rB8AipnUGWFYh6V5tNAyZ1mgPLQJU2i55bicKo3JZjJgcqrVgP6ZWMGhhqLeqPoa75bTYkhTzMeWdFiZe1",
  "key47": "3uVxU7xTYUam8MdZqdv8eKRxN14HwMN3PNCpKtZmoZ4D3aGWg9qyXz2MWYRNPsNEYoyCrTTcn1ZLViw7BqzYUjs7",
  "key48": "2HUoU3uFrMqUxkgKS3junvT9JdvuYFyRWggvzKg2bTo4rbc6T2JhHwGBQpNPsbkGKZoooB5iYLrv82nF6Ad3iNqB",
  "key49": "4Zdwb6n6pQuQi7vubj5ts7VJ8UpypwB7o9qNcEYwo8h6RGBiEzUAFuDdNvWKonWZNufhh7282fxuy14PDow5ZFnk"
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
