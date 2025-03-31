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
    "2DVGPq5FyfVdtsk97ZBagYheyiF3QjhHqJJuxkLt62csunjR7SdGDGz5oFUKQtDJ5EcwQxxJTWrES5SsfthKpajJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6VzicK3GZTE6dvH43qatQjXZth91U96LcFDGR9M1NQYNUVoCfAP4ep9yrrnMinRmKYQQA4uZ3WMJeR4xHBq5Qw",
  "key1": "4LQiwyEiwMVuYGJea6i7qj5oFCfVtTRy2dsVA8Hep6xpHosHH8mSVNYm61sy9cD8yZj8x2jvW7LHJYHSiM7oiS4k",
  "key2": "2a1Qv2jHU6F3ADNcwN8H1DwaisPb669bJoyNzigDsqyPHn46sorTaCxQKwDXKf1iHEn1iZhGrDNLyP6zcD1JwgUE",
  "key3": "PxbguwsB63PfKJ2yKcSzWxitCp8SMUNpriTDf77kf9W7dNWzU6CQSxqmr5AgUvH2cKaQuwMb2ZVc6qRscHvHZKz",
  "key4": "2bqSSoF2iut7v39D3dJN1norj5YWYcjkD5USw85G5M5Nfd8bA4tQhQk4489Ry3onHt2QC14b2RCGvfVKNdQgNSYz",
  "key5": "2oUSvUbKVMd8MKUFtvt8FMzaEmvWtAATvDw5muNcWh4frvxBjfBowYQb7Tyc3ZUMQSKy7uZKfdBtXzzLrpgFv7c6",
  "key6": "8HAhAJM6KKCFbyH1m49EFCxg6gjVjFbT6GohbVaSZsPEPKWZ2bB7q5YkzCzpG2xPCHm2XpP94AYqNpeZXB8wk8J",
  "key7": "5MZzQnHVwmGJkbYd5bCFgRzwSJDPQGWfNvQHaVdvmmewtCKrVZFSZVJPmLzMxs4wzC87EWSgAsyQyn4akoG3ZC1i",
  "key8": "5wSpAFt3iD6aMYnYBNCByvhCPRZtq5zUrrPDDvwtnb9qwLWHnRTRNfjVT29y9onGpzkscA2YSZdqR7M5VE7bcNW9",
  "key9": "5dU7Hckufn7GYLzWhaztYeXg8VbePuPvdcMbWJzxUu7ch7JkB6SpKoUekNsaTxyxmpobRTcSZUBrdWUiKrcmNrwM",
  "key10": "3mJRAYnoTqpcdd4PTEzKnLZ5p5fa2U7VTb56Sn8YMsooTje4KqpVFuD2mG1coCQXNxdKSsCT35aUZA863tokgTJH",
  "key11": "4UPkivy3xNFnc5im6vXc5kE5WLSgBhvPreLDsG8g8sJa3MpdkjYufVAEKZeXrBNar1oTkCV1Zd2XS2wbJioG4754",
  "key12": "sKcQFMnX6Q8QziddHTLw7LYfkghSWUMm6c28PyWLo2am96umPW6RBJcwnzgKdufthLhg4HrU3R9qTMxcRNbFCs8",
  "key13": "4FSJHTpdfCaBthqJpqi1FeppB9TtocEz9XCUhnncDYbf83QpetbVwnN69WoW2anJrCnRGEW2BS85pqBgsD9UgNDP",
  "key14": "4wemJnVsJS32T9J4kMkSUQzwtwDAH6P14C1fyGCyYquQLjxd95Poe9fGJKn7GZZBr44B3wUxyQG3rqj55f1UvBav",
  "key15": "2ENWHmJBbZKYry6kDBF9tEruyAcF5VwQUVE8o2iKoHM6TjvpvwkT827T3xpiCim6fZCHLp3vQC3Uw7cLgjpswaxm",
  "key16": "63PGNee2aXuHhSBcoBCJ25ZUsZ63VRZSb28udB39sAYTejnab5KopiSTHyP9UhRVhvurhRipYh4so5z1Cht3h2vo",
  "key17": "3FfD4fBoQMt7PJYH1hC78qnxHQUzPDfgNVLUXkNni54fVxr94ik1LqiAszziYiKvU2XAXtfBC7qRFDBfrDCECTdu",
  "key18": "5SbBzpdN6FqszV3qXgJWrnLKKqr4iHBt2umHE3Zdxz2wuwTatgHx7KvzqzaYUqf2Lu4P9kT3kQHTuvrju5DG9xNf",
  "key19": "2GBeEFZP4CTQcPqZy2Eg6bt3WrhWbELAY2wLt9WErSeVVhZUDtamyw6kkK2WKX6PnTmdkXtTokTPyg7W6opgwzo6",
  "key20": "5nZ3gTF2VnNRdvLyNcxBWGpZ1MEeYDoSHCHJgU9BXpzMgU9GQ3XA3msQ8T4Zg2vnhNK4RisJjPwjoaMH6txfZMX1",
  "key21": "5sUnnhF9FsYz9aFrsaLnNfFeD8ZrudWhNQ3mdRrf5MyAsNEjbHJxEoZ361DHqZdNov91LdRbz2vrGJPU1YjQJHjf",
  "key22": "674oed6dbPRhZmWmq8LvKcJ1i9S3USfUkYmaVkYWoNGxCzC1PBC5rB5XL7qqJnK88rTQHL5KUj5Kki7a5WpNz5WX",
  "key23": "4dgv21osxgiQh9i4RnCbd9o54QPuQyxiD2SwgVa8xhZNRo4ExPuuLSqTkrdLzDgjDW1UNa1ENeWtQQTVxiRq76av",
  "key24": "28edYypeaU5kwSPzf7rxmVdKLdrLQTns5iMhT969vXnKqVhdcoYUbLX2LAqpXpH6v6vvK2TS3LZzW8FVwFsLdHFY",
  "key25": "5TKgfbjxu2q92QbPvVQYznawYVooMJZnd15Enf8u9Q5s3kZZP8jsMEsrfoFMoapHL4N4fqLdWRpgqD3y6t5fnmyw",
  "key26": "4u2Y13YzrS5iCqC1W4xqtZUwtN2WU58KYyKmzq6i1KfJL7HgXeAjSduDUZxop9C6noxJ33XFRP7t8QxpUBxy9GDw",
  "key27": "KyfZ9xr5XmbW7GJxabsoq8RMiknBh4vzit3XPNoL53AesRZAqMoSCZck8736J3JkEnKXLDidpZGLFQ1z2vno9AU",
  "key28": "4ZapR6weLD4kWFvBA9rhVXYB2x3SVGgioAm3HkJjXMDPCc34Agx6MGutpM3g4s3jXEHj8PNvSvZRjwUxZyRvubyy",
  "key29": "3pqnooJo6PErnzLiBhfZ3gxhgKmqcpG3kmSpZTGVLogmrJr79sRPtLz2VVQrnvXongG119C32YCX41eyQ8kSM3XP",
  "key30": "4U3F4udRGbsQLPhtNtbXkqjzbGBR6f1n9CGDhNWRcGo2aZhhhrCyKMSwDdVg7DTGH2wP11AJimTcPsxvyt7vjhzd"
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
