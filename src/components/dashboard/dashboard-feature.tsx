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
    "2AEgb2eA29tjZd82pyPGxJSKfSsyPtuD9FZNxTFZjXbL6kTLxWJQdsQnpN3VzynmsjioD5jY1oCRahyr9p8hBeeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfBvF1BhLK1Ep9LgkF1WcCnfAp8j8Y7xps8giqsX5Lnb44b3KbYQUrKJEDoyuqHPXPK88wY3NNJcWXcqHJf7vJy",
  "key1": "2brdvUkqFRrvkhZjnjsoFwyWYogR21ia6ucWqz9z8nmX6QVSKuzMnieCsoVH7vYVmeHwsAYihNdyW1XoUnV3gyQR",
  "key2": "52PegVuy8ExMpBnBDzBwYBPbuuBHrgWQdYPyzqmk6LNNEFA7bHDQGmaJYZhW1EgS95ULkA7CUtL2AeY4qbGgSXbS",
  "key3": "BgFp718K2p6SzVwSytY57MMuYnBzj3rF34Pg9KEJq8ZooTk2Q8kqvrJkf1vDNG3LmFfHvnneapsCw17APMc1KLW",
  "key4": "2usxvJpX3jobposWZpY25pZtF6JHGwxnXFTo6a4tPztMMsZTGs5kFpMRvzzgn4kEPH1fkY8AJKA9t1SB4PgwvSfb",
  "key5": "4hdijQ5XJPnhCMq4jGiV7dpGXpfLabVm8VoPMCFP5zNpdDbpFY5M6dEs27yiYUJQ5ysTRvYtuLn3rnguKcY4tX25",
  "key6": "z7Yt3grDKzrkXnrtBjUxjNMK7V3R8Uf7LDrqGyF9Q5UmLMkdXvqSPD1YmC1egRMNNpQFvx1Q7jrN6UCr5VXV3hD",
  "key7": "5LLJLz383fSRHcynxXBZDUnGdRDs3d49myR7z1FWUXa3qGqBVpPGzSXW5w5bm5dUY24UaZhvPD4cyJ6zTe4EnNwZ",
  "key8": "63dByprRDTbcoKnJbdjrm7kauApivVLGs7RhBnY45b4mjMExEKS3zSrv5oMdTcCpwPAuXAn7WpaKCPqYCmFANLP4",
  "key9": "6heFPGkaLX24X7bp4Ywmn9k2JNnPLkjqB9nq69RhfbdMjjJ5mQpwRfNyhtRbo8bWqGZrWeNhmrAj7KPzATa6gwS",
  "key10": "5iJTTCQaEkUjdyoAVNNvGxme3M13RsqokZ89DtqrgM5gnxNaTbf4Myxfz5ngAHg7LQ82CUSStpEuXPtH1rKdKeGm",
  "key11": "vsqvfxEdhyq5qn6TtgDZJ7zB1epby5Z2ez5sR6Tf8UGHTkQckifov1zpmWrfS5zcf6fwX1cfkT2P9Jk4qQ4Yrqz",
  "key12": "3PyjBDcSjcPrquMwW9piwmb2twRZawbEWNLSmRsdRUw1PaL1nv1hJMNme2v4XGkYVaWtdscNFhxZyJiAWWLgeaL6",
  "key13": "P7ZgLi96oePgzyHPHNuubsttgpBxCcs3ztdUrKQJwnh8mcYDtnmawwFozwDmH2bBwfPobK2GnGixkgqeLZBGuLf",
  "key14": "5iD2HMuCXCkEMVdjRPJDg13fUSPSnTtSJBLXFA1wi7qwTzusL7VDPdvvwBpNTHhYiaRA7ACktaDorvgFoVwdGKyT",
  "key15": "2AVcPWZyUFPnsBW8kdnj9X4HDpuTEwULZ9NUnFHpkxhc2Ek9L99cpG9VWbPVLncQfVUCPeCSsfqP9myb9pKi5XZB",
  "key16": "3iHNcRJt1k7HGReGpX7uz6bqwqTEs8jFuFh5nR5CATZs3Y3WYUvLFYTyWePXmLJ8nRFTSEJSmjuHxF5Uk5ww5agR",
  "key17": "2xKDeyBKjvEWw2Q2x2oJP8w17w6y9ZWpA13peWQAtk77oeuwf4NF72FLPGjWeZwZFcsQTEnYMEApHdbskQkWzA3E",
  "key18": "4aCLndF6J7GMj5nTF7XXd1UCjJt2ji5eLtQGfQ3SBtesMyHfiar3VWqpxgN9JWYU3q7HA8Roq9CsxeDSZ8yQcDjm",
  "key19": "4yjFsMGLdP3TtXbtD15SyJXYLpGpVc5CTn99N6ZtavHDfzjSUQN5yDTnnzqoaytWQd6Bo9kd3ZzPi3m7ysX8u8Y5",
  "key20": "4fmXJhfB7fSebecoguHUt1AfvHqHaateQFpHUvtHL3jqT9cxnXHU4ytZ6nyXYXbHVYVN8gyp7cKKYY6xFtTTjgJj",
  "key21": "19uGrJUXF56o6tRzmb5xB4tAvdzWvXKJuRuryNf1KLHoVdd2UYebM5rZHyg8DRN9nYCJPHamhv1NDXpwptHpKMg",
  "key22": "uBf5H77VWfEqUpPvwhdHKqDAmvuMSHeSVpmrgc4XHsWcqrbBLcYv8iSxidX2uDwEzG7ZkZ1jAPsFU2sMxRNPweZ",
  "key23": "KX8KTJVuBmTuapUPXydCxVpMtRRPXnWqdeXc3CMRcdtzJLTumZDi1CdRQLZup2S9yX6hRed8Wsjft2hmfY2aNng",
  "key24": "5gVUgScb9uAfDr8qTZGQZn1rarXsxLzaMCXXP2H982zb9c9d9TfUCiat9T4WdzXobcJNZr8afUmmQv27PoyFH8cq",
  "key25": "3YFTMEDq2Psx5K3dFbhUP2S3fpvAWNK5Yui5G4AC8vBUha2rpDXrhLYxvL3kD3d7oZkLWQFMRCzLjuYmyTkoLdBs",
  "key26": "4q3mNNfMBwM4mBqAqmK9WuDqfWYSVcovMwEUb6VideKbD3QFHXKAmqLoVFWJg5WZtfVGF3mHHFWgejGjbGUemBmV",
  "key27": "3SF6T9wqVw8mxrWgfceWoTNVPmAe99CKZoooqu3ajrQhUa49SXtfh9YenAfa3f4rPzdBWAcAH9gVyufzbuMA56Q2",
  "key28": "YK3msHDRFVXhA15Np3TTthEbJEa1BFpxQb6Fn2GcEXegV5fV5B6hgMoXk9s3sEo7hjGJ5PDTEGhsi4AGyufoG8q",
  "key29": "4XkyoVZ6uQCkEuisBdBtnx3hFp2MTTdzCjaLFntnD1difYEGQA6P2ZDEFEw4zcKT2hfp6aYHL1SbicSVLPUfMA5",
  "key30": "3zPm3gYGeSV8NYEsRg8H39iy4VobwZUnkvJY33gs4XStkbriAVCju3bqhoYZke6TRrVFKzHmCjUjy2wJrERohvXH",
  "key31": "3MBNfxqE7me843fV48hGw1PBXUc6SyTrw4g6y23DfM7xMB2KQura81NGTfF5yKTKS1NCK2vYdrSiNc5KtzkrCqV",
  "key32": "4kJebVVXo5PXsemtB5WmyxZBWq3tZmvSDgTawHm9uspsdLeL8itprgBadejpBWju661n2yDgnZ319p2g9ZuwXvG4",
  "key33": "3j93TDvnNgzGiTfbWDKkxWM9g3R4jnCnwh8UFnTzpZjgC7yFW4CEEFvmiZLN8ojXBPomrpjZSKZEN17AojyQGWT3",
  "key34": "4mpcK9PZUYy1oZiMpT4u6Jn5kPCiTvYajbyQ8G9dEDCvugqux27moybEQAJDm4E3oK2k2MTh6SDBMtBBWdfjdJC",
  "key35": "eYvgzFxToqBGxUh7hQBVZbDWoLXDz6xdWr3QpWvpq2S5nnKFQDid2tezPKrvhpjVLusGgxxZm1bUYBDFTkmHqDM",
  "key36": "2MDvhg8fdBPNiivPihRoBf1395tzVQ6PD5V7djeS62BMWyf9UcEmbabHhsznkph3mm4sFUK91WXysLz54d4bFnN1",
  "key37": "66P6SwGNKhU42trudNu5eii2RzAy5ySdy9LUEBJT1HN4quqqFmSWRmogUQ7JSJkx6gTMdwDhZv1izfck7cqn5YDw",
  "key38": "3gxFfcaBw6bJP1rYwTe3eTRxz76mCxpkgUy8sMux5DkisvL7ZyGTCZKdLgocRXoWQqcNg7Zi1saMHd5qHtehNKsi",
  "key39": "4LKweyzvfyTuCGmbETUDLzHV7qULQmZ4CpDAPDbRkd5EgwRgJ5JF4gzsUTSPYasSV4g23WpuEirRphrcY7LD4Z9C",
  "key40": "N9pkSMDMYUaTjmUyhkuYL6cvmfDv6T7ECjWSSsyMgLV8AHdveY4Wkm8NVQW1cR9sTXDa12Qt8hyzvXZeKv1UbNw",
  "key41": "5McDZNdbmBLFPHgRpRUmjBcodqjnjtP8oRkwZrQuxESAxESRRt8M1G3L7YGdvtE7hAqoRoqHZGdc1DvoC8K9wDrV",
  "key42": "4EryaYiwiQKs4ukhbXkFVYbW5EtCCQuDpvXsjLzMSmLFLjpmqspmuJcojDmGtM9dGPkCkywG5fS7TJzu2fJZd33C"
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
