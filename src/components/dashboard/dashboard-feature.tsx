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
    "5XT7gSbBQSaKFCEDidvDiWn1dV3sJptCVYJEyfpi44xhXkGHUqgG9WLXTBdpuQcJ2R6FyLJQdQGwndcg8Bg36Zwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W73g8aaXoT7hmRETX9eKjzT1F8C1n8ADnqHQKBYEFq9ZLZ1MDotCizmBwp3ki7cHfq55GXGVxVPhnueABMaTnRT",
  "key1": "4LJxcCarYHC552A6b96fvD22S6tRTkeb1Xfz37bdvXXqPt4qZTVQwqtK4p12XbA2PyUkTF5Febek2frbMK18y2sn",
  "key2": "rTruwtucNhgEbVkVNFtt9b8gj3JTE7gZzDeZ2X3nB7Lq3Wpa75FBNTXVaj63EQCFQfKtWrkYRkqtCF1pGkhJkCx",
  "key3": "2aLbpL874fe1mLiKN7GxhBJ767E77G9rPzxw3CdMTyMd4HHecyPFYCGgjk3XmRugcf4nbt59jcfqEyLjL2Qom2uD",
  "key4": "2J92EinSF4JUkSheqrNDtx9DKG5bqVMws7UywjyXpaQasxn47wovB7ZRTTYaytq4JXrRuy5vTQwNEnyfPTy9hxSR",
  "key5": "3wQfoRo11wJxdGUfc8pYLWr3478jREa61GLhPXkQ5RK1EbyNK1uCkGZyfUS7wU6qLB5QP3ochqQcdHWS5mj8qVQ6",
  "key6": "2GuYp22JZVY2GSEq81QbaMhijZaS6mpXzmAcrwqxeqhVUWEds73pzmN7wpoHpSiNrPBemXEPVkLP6gnQyo9fYSpA",
  "key7": "36Mzyt1PcwVkYRYsr9wxeLhFMQyQ8ssL6VURGNLHiEoBErfn39JipD5nmCzSp49fjg2WDxH9afYGjYY1iXVrKdSR",
  "key8": "3pSwSP2Fj1FMSJb7snQYWGUfYfUTmvWK9S73yoWYWZiQTk6C3apyZEFRSPLgtwWitdgYaDLSfcFHapFsfPqXyZDc",
  "key9": "2FE5rH3fmcpFTNtR6RDHG8rpCesqjw5NXgLUaYt2u9aK8Gw8KfWGUV9eyS1LeNcALbyEzUECzmGmWgT4RQFtmDHg",
  "key10": "53BwbXPDC3KwLnuyVz28J5VansbRqcQBQYKBYXopmdcJZ8KKyuY9Vi9tcbvkQEFrQqEZEh4dEBm9sKzd8jd1j9JC",
  "key11": "5xDD98PMohAJsWEU6Qb7qFgXceQ9GLjrhYjadupNz8dUXTnj9zh57zG9aEPHzh3PCLRk16YofbY9n7xeb7s2zBEi",
  "key12": "5q1F8XJ4uL8K6aJVukayRujb2ExB5jDGFEfhXNegNQhhai91r2727BVjbSrabqfw2zsnWgomSKtPpeZT7N9DP8v9",
  "key13": "5iJuR3kDfbbqJ2nsyNq99WdG1jvZygiUeu3w71Nhpy43EU6ujgTX7PrEj9Qf31vq51HLv1UPQsPCzvstb3rua44Z",
  "key14": "4uxQucSAe8pDVSwL1jVTz3tw2Jny4cXcVPEWMmE1EGuV3wG3gscFYEUTxCc7xhw7zj6FoonHZUVzVQdpeGWngnUp",
  "key15": "aJUiCrdT7RR67cQ4opj69d2DKSd5RBvXYKTWQvRqWebK1GtZqxvF8YWdoTN3Fj3CBxsnQMCTTKVQ39aS59FfC7w",
  "key16": "wkjL7mTW7yAqZDxHvbnGV4EKSWtH3YYrVcMLkhHpobgfUheXk7vhev8MqW68Z9oftvUTDJkpjQw4eKLZSgzwHwo",
  "key17": "3GN17vGJmhKpZKCNt37QkqmoMzkjXaSxBQ6p3b9PYo1S5C6CyhEm2xaRe9VfXcLVMFXFKa8VpFnPdfeU5DV4mTPx",
  "key18": "Ye5qj1ERvtp5ithhQ2wy6t4pJCRKjC31oHgtAbBc8MKFdCaZ15mLy8DizekwLh6UNgxWXCoGw6CnNYQpEy1Xqpo",
  "key19": "sLjtagjoxvJkSupGChUaMWbEUJ9hfVWkMAnb7BttqvA6115a5Zfsi2dRirxmzm1w2nnygXrMiWvpbvTMd4WtTY1",
  "key20": "5s7Cr3NtMaG9kJEDhjA9kAZYza2WKJ6gLcmmV26WChmQs38X6dhjAdPNE3bDfza5WDm68JLNskqEturooAYydFhS",
  "key21": "2PKE1W8vVvX9eTG48cc8xJa4BCD7bAgMxQtBDcdPv8WB2Urz2LcT9RgbGj19zCs4wtr9yrWD3LEXqN2FXWKA5ZKm",
  "key22": "2FXRA2HiqXN62REZh36DfundpazRuAQz9JLbNMzSi6HowTyf7QWpvkYjcmSLJEtvpgs9jm86xiNmyK4SveqaDmkL",
  "key23": "2rf76tup4XFDKNP4BAWwJG8Fs77DbNSK3tsLd97yZBbkyGBk8KgJ9AFpVm3ceZnYQ4DRaLr2tHQtFJ55RAxyT85f",
  "key24": "4UvvUJdqmPZnwgbr79WzW1Tg9hVo4Zj2y1yFX1xQFbRBFTLWGuKFpcda1B2dNiSpp8giiywbRMQ7gp3D9vFRsbXF",
  "key25": "5FKTPEyWYehxCWgzhWGQ3xPxjq9tFSgCem8q2jA9rtqF1UzG73vXmyghFm7t7ZFtiM4fJt5P5xDdCDe8zV4vfp6c",
  "key26": "3F1qr96h1UsjPMUCpXc4zD7X8gNL7GvQMaCMpYSUgYLFAC2mSN4D6Yn6ZMpDxyBPJiv7ox62xtuRwkJ7ruhKyUpV",
  "key27": "4aDP4KPadWJFps5QPsFhSw1FJgUQYvnhZzTZFAi6oxqAzZzboS4MKct3fDZU5QzHA8TRLnxaPVDK5GkSYpyC9T7R",
  "key28": "f8qSqH9v16guiBcjf78TXJLCa5RKACnjcnHdrmo1oKkmrGCvxkLtmULCbAG9tihmxmkd6WTAbdC3Go4vuqyeePP",
  "key29": "4WekGqrAzNnb82zsr7EwxrcQDUPeJYH1pJfUi6mkAm67QaVvbvGtWxYwRn2bmmAyVH97xZGMbVYo5ZpKhk16ovpn",
  "key30": "63oM626MoDjXurKZ3aYE4x6BaK6u5vcU4f6guYB1LZqmgfKeM6xpxr5MLuE1CQcC5ML9Nzv5S5uH8LBd9t2ubg9q",
  "key31": "5Bmj1LjCY2GqkM92DZB5ESwyCU1pGXb2rVq4An9TC3Na5ASV1nCYwiKnCYcsxdSg4d1YHAeAnR8yMENEh4PFpoci",
  "key32": "3ZXdBSc78CWz8JVgFm5cr2Q57JUpVEE32rzd7GFqKq9Qc2sV4mmeQkZhcUE4De82rPuwkb2j5XJXZVw7WgXRYtCM",
  "key33": "rx2pt6RPUz6RQu6gRMrtQxjE95RxRkABDNpjwXzE7fomBhwUPyxY3g6kFM2LDrGYXbg4yHE5mK5BQLnr6Rbj2Qf",
  "key34": "2wX3Zso19M2zyTfEJWMVMijUdqKJSFKxYqF4Jm7zgPxFC3oX2uJvMNFrPVsZyChGCjreGD7zM63wLo6muwgrypRx",
  "key35": "5mcRGvsBgSqYMpyv15DNvbfYAtR4XWkRx3kgpRPcLWXeGStMp9hmEJDKr1uK8X9XoSyacqiE2aarRqMQQDc1GHqW",
  "key36": "3bvAo27PDSyP1Kg9APKntQL2D4ZRBY2tUG5CsDNqcpGa9usPVYF8K21QbLFCdaXVkGL2GRax3kWovE7jt6M67VDC",
  "key37": "2jzW2RR7jtaqawyjC5ctMAZmsVPKeeQqtA3YYY9dfKgK9UyaKec629up2bq2H5dHKHDGEKECyZsy9oqopiqCouvn",
  "key38": "29m2sJy8BiA8sR78mweJ3d1dhqTQxAbQPJ6XpAYfR1YSJBxDoxyRoR6qtsiDbHvtRQSSM2ktWjAdvmysgMgYjnf2",
  "key39": "5dy2P9eVdAbF63KVkLDFSaxM4LGhZN5K9qKSFJdXReC85dETwFomhM2UzE4KMhTbGRTyAeZxyhUUZvmQt1Zx4k6s",
  "key40": "62xavFSxnPze9LAJXL7vfSpptAzU7YpHwGuUs3YnQ4EYouqhQzC7BvQmi7ze4jXiuDNuHhHy3SCZdLRQNJewfCNT",
  "key41": "2xL8k6B8NnWYL4ic4YE2KDys1p1DacuKPhcYNcMv85Wx6PFM56tEauLxwBMPVnGKfQ3CZ2skVEc3kAukQwoDptET",
  "key42": "3oj9pSduP9iyZ3PLcY6te4JFZt7oP2myQFcBaDRwAXk6PcJ9pAFXimK3ZvXyETWfzMCqGJSpPdTzNT7RTNbzp4iv",
  "key43": "4jH6AcspHW7MUTEsmFAnyYiRyqV33uUajpdhtb3qx3UdbvpY3ZWBGwTuZNQTAZKauT39AyFjsEHEvWVVXhW6W6Ee",
  "key44": "3vYsPYPdeFPmqKmMqQWdmmGuv54iXayUNwKmH81wCo2ny1S3CMr9nDE94sKiy35P3cKxXn41LbNGnKddiz8aYJb1",
  "key45": "2ATtWE4F98v6rGxH8kJrviTqYonRsKmwMmgSJWWNcriGZqYKUDy43286FWT58VtKU3UMkSpVNvdHdkpSjTkBVYT8",
  "key46": "674wQwgqkdDiCgkJK1ksnpaHGq3qtUpTotNHypWGBswedk78dLMvgNbLhktckCVUsiUU4vzF3vBrhuULQYwPHPFz",
  "key47": "4sJjakT4Mp6EimFKzyB8aorRcsqrTuA58k7efDFwMSvbA5LuKduH7X7dXcfRQNnMEK7U3TWQ8fMSzk5ngLEBt6tm",
  "key48": "5HBrJhb38H7iouBs8HNzNdmuvmuTPSFukRNAhJ4a8gAAwsiWyWEpKe7vzJvDTo9c9dBzUy7DWnhirHRUXs2nAJGH"
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
