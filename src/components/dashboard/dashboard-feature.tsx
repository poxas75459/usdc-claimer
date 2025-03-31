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
    "42bBJXxjeqnNVDyFgnqB4GSvNraJJusV6KaZ4sqajCkauJZXvoFU6rSZmWwuzMY7v9DgEJNAdG9eMeqHM6P9RS2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5bYeUBmmr6iTBHhpCLS8ns4tMYc1VH71E2m6k5soSMWJRxjWdsYz4hoC9ureRuNkEZQpeNLfpF7Lh1rLtYNiJi",
  "key1": "24HcSypZMw5f1UFR7bKGZyXT7DgW91LG2jHuwH1bwHn7H7XHsLfbBw9zfPqKbf9NhA4E4v4N8C2Kn2HYZgntgCmE",
  "key2": "3PGBXnCwxWtp95xvtXjrfw11u6EHNfP1CJnyW1pvHFJEJ6tj6Lf4z6L67TKMWANshotT1Ac755pvXNyQVt5ZZ4Gf",
  "key3": "4Fxy3quBXn6Rk9aQzZqPtUGKMnppw8tanKzzg2g5RRfJ3nXjUMjozVkSxCcADhBJ3Nj91tbSsQsT6tC8tJGuCUWb",
  "key4": "457BMXYcZTCLkarqjD9JYbJiJcNesPY3fQhw1cF5KE45Tkg6uYnYmM7wBTv9BtzsvAkxAF6bAUTBYYwwREs2FBZK",
  "key5": "4GeSjRy2Pyhksxa1nJpYugvXN8bc8GR5SeHVnySj4PMK4PBeq5zkY25EtJH3mUTdWVXyowykDjQMUK82ZPv3H3a6",
  "key6": "3oRLjLCtvRXLKTXYvUZruHckDDKZiMdSEpXuMPfdHaAFQxeh1RY7brJ4Akn9iHQxjMM3m9BkgRNPF9v6UASxT2Ad",
  "key7": "24N9jrbBfdVmTdjiFdzPLE94KZwgyjN2gaAT4YKTDLqe1SxjKKBGmziRR55x6nvmiX9it7eNUc8NKnFrtpWA44c8",
  "key8": "he33MwauWD4xRhKLzeQSqmM7tM4JEXXHYyprswzyumRcrTJbcLX5kB65h2kDASsCDrp9eN4sstDZwJGHnyXeMhb",
  "key9": "4YVHFEzyuVkXuAK1TTYcH132RdteCx66UenJKApaaG8tzijpiKDhhD9wfZfwog79kuqYEZd8a7T1xfESiNMp1AaB",
  "key10": "4cXLRJ7N6cu4ddaFjnA6CYWVKvJH3hkKHsPTzR9sTgz82TyuKkivrV8BDsNEoxPoV7dhjGpsUjzC1i99V4Jkcxyy",
  "key11": "2gRyWrNvVTj9M1HvMcXQMANnbFvaErbiXmDokaLdCpD5tSadDjgAAAAZUyZz3U1Rze5hZoU5RtFDvTesjDeD2TMq",
  "key12": "NjNqqrTRF2XVDah52EZfxdfDafPfd4PhqZjK51Du9gBUQBGxeEJRc8ZRFHvJcLyrKCwJuN6NskTTQJw6C6Y2nkb",
  "key13": "43e3MHrHYAe3bokkXbecA6NwyKj3XhH1sPCeiXyyy2BFSNzR4cFsks3hnd8CLATV6gEvU3USKUjyEoSo6FcNTfCc",
  "key14": "3Vb99j6DEsCV55dAHHysUKhiuZeUa6C2dZmU6qL2emPkJfEyUjz9rRRyEig4tzSXQ3EEgCLa6WGzjL6hiMBF9u52",
  "key15": "5quQmNA14gLkLFPWQp778ZXTkZyg4BXTDrWputxM2FDd11oHj8gWPYNStqCbXUT34XhX34aC5dEhEQACH2NZRrcK",
  "key16": "4kSwYdA5P6SV8sFkxY6Z1PaB3NuqErvrUd2qbp1sqtSnUCQiR6c219CJsRe2dJVxMDxjLh2PfMHsf9JbJqyyBhTy",
  "key17": "5T2PXqgMLB7jmvntXcMLizMiYCmNuWjUb7httWXCi97upPSNtkiENnxUNqayDVQfJMabznNHQm2Zyr2KVP3MU5fp",
  "key18": "PyNEUjHExyVKTsoAEVMvRtbVh8z3KJS5xNa9gi55r8PX58ZyVNHTqCrCW5ZvbkHrNiVCynAK6eLmiwbPkjcosma",
  "key19": "31G5Jc2xGTUbciq6qTs2aEeHPsuqG46rmETzkuu6PSmBn8YD5x5c6zQyg2hsZvHqfFvXSbAJrVUu7o8mqjnYmtvZ",
  "key20": "435NsCT2MfZ8tZL3gZBqVETUMWWU2UgQ8NDatMa18v5hbPfvGEiSZbbjgCt3VD7M4BiGgiWDzc5cnCPVkDVjZkdd",
  "key21": "5NFwwxAsJYRGfV7kvRUUSkyvakfbTx7nYuD2n35yezorypXEY8Po5J1SZn4tNupcKiPBa6dz6ifQ2PPDS5U5Cnz",
  "key22": "38pdBsxgSB5wrLRzgqgbLHS6uiz5SJX4ERLFh2nyFGkvVcapFiFczwxFgHuCC5qYeU9tyt9qN2zV41nKwx5tivvs",
  "key23": "2DigP69qUA4WfDmwx945LM8MmDQF9RsvAn2fDuiaLsYzxLvd8KczQTqKrTMh36Q7aWq1XkicdF83jMnQv7YdNAT3",
  "key24": "4FPYMGEhPBSszygUHm5EWF4N9cHoqm5xKH7L9e33kjf8wDR2vYqS8UG1PiePpEKH6qwoiPtdp4Ux95Mrx1CjA8Qm",
  "key25": "4S2WGE3wLZCsT7Mq5GAgY27YDrWB4GajURHTCSTjMWy6cuPkqkAiAZpLa4HQ8ZjVbLMHASgeH59XMBrZsJYNcHSV",
  "key26": "24PotQaSRsKTQpfFwige12e3aytPrtyaCB43Zjg2HrwemJrzHFgRUPBeL5Cvpfb91FXQkav8rsoMEEFtymdRJMip",
  "key27": "3qY9Kaeyrhdipvd7xLNNfZyaYJjZvSKYS9PrGaZta72fGs2KqiVed8oymzebMPiBwe7U9DqgE13zNWJSXXqTDF4m",
  "key28": "2B1w8ue82jfEJxirYdyRNN4umpfbvT5JACLcUs5LRnpjUsi7kuQQfDmGgGYgEqUb7EDivn9ZsvW5is5Xm1fVaw9D",
  "key29": "4gM7Z288EAD6su2E9EoTpc3JRBKaGK6PwYrN23TizZfqHNUawfMGsANf2mjwPHHp1GD2dgeRvKsR9MWDveE5YnAH",
  "key30": "22GmHtaUNt6d7jswjkSfTfAF8qrqaiJLBzAb8YGs6jQUuFpBjtFPsrYHSG2nihd4z75ovzu1i7HbT3ueT9vhgSGY",
  "key31": "2v3ydnKg4MtjxsaSHEbvP8vDSrfVUqdkne4FpWP13s52oY7D54gMf98yN1oQLBAzv6i1Uv2sJvGyy2ZoRJojv1US",
  "key32": "5ZEAq4xCTSM88JdwcrXSdCahFKGm7z39SkCNmjnkRSpX2AEKK3iKKZ1igFYUBsD1mR8A5p7N4xriDAN1dSj1E62E",
  "key33": "2xo6jsfKXVKff7JgnF6FuQDvKp9fdtcnswwVF8Wi2LTD7fjiMjYZtMwGsBPaFd45SnjnrYQG1kx5hvSMCF18vdZ2",
  "key34": "3LeudSaXi4rSxRdEKsXXsnYzPqqxrsPxi1huFXXvQ1pGF6tfdiVYvg6guFj1BgistGSoAGUa3C1ugmG7RE8X6q7t",
  "key35": "5exzWbQhmbn24gWz768jUS6FhdbesiBeJUicQQgyocgcC9rhPeVcHPu5BJS8t3CLP3tWGnyLpBKeTKxTwTGVzije",
  "key36": "4edHRg6mVFbaRzuHamz7TWcFzCwv68ec2fQYiJsRrZ9KyPWgiYbp65t3RznaBp9R4uHtN5YGR1uBq1nGucPGFTXP",
  "key37": "Tph4Nad8ZctSFQ7ds3eomyeneTL5RRoAxy2jtSTBnkAg8e3bHcaTUk8uhZByH9v31kBZxCgMpTFus8FDiEsZ2BU",
  "key38": "3C1BFCuhwDbJUu2mrTvsUtSKyVMbCPzQSNE8p1PLrJwnp7v3rNiQnyrWXdcWgtqpDstZDqVMJwSJ9cGzYai73poh",
  "key39": "125tbU1h7snwrQEwxunwTcTPYSGpyLUjywfkgC3ZENNpmzJ1fbv9CmfSiypGcDSE3UzNDFUC44dMV6k1pXpuBeXh",
  "key40": "26nGNcg8PrvWXx5S7SRbvBbSJj9pBKojQRj4ibpQk2QZuAfwQsM7ATQhrofZWk9xhYycLg6zYBNnP7MEnKkLfZez",
  "key41": "57yvTfGif6LgJZeKmxAXFZ8tqRir2FEsmfihxExJNaKLXw5E4fgoH2k21JQxBGBDBATcEEQK5iEFwmWztWz1m6wh",
  "key42": "5JNLo42eULWkGu8ZvNsD9nZUhTYScqH2UMTT2sVQ3pmXamvVxGiw4enFf5qfJucFNBbxJTDkaxSteopFuNSo4CNw"
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
