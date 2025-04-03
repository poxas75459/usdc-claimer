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
    "pW5GaFPGBXsRgUUjNQRj8dU8NciyQ5Pvwv9jQHLxncU1yt9qcjgGQ8o8XnRQrh4K5PcdB69w3edensAHDHadL8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qt8hsZBX3YWVJrpa9apPBzpWX1bbNU3qpyEV6RpE5bvMzADfrKgD4VjuwZKW7kuhTbdfUBNAMRu37wLb9joRHXm",
  "key1": "4smUee5ycgMtF9c2xCWcNhijQcYJNqLp5jaBTTJEdg884VaTiq2q6VcRKYDWszw7c3R8gWWiCBn4uKYCdqhvyPah",
  "key2": "5T32MepxfG7LGeRLET3An5tzDRqa4iVi1bDZRqgTMrF45t8FK977Vukywb6woHCVuFVncaQW4f33e1T5PQwBKXWT",
  "key3": "4HesydzRHY3TYx8jB2heUfGEZhETXu8pWcJtn2mC4SqYUQY1ZRzBg3mJDZeMBZeZ4kvbyeFc54iCtbZG22HPagkC",
  "key4": "2HSLXpPeTWQGpH5UAUMfeEUdniyZrPPUVf8E5euFk4b294PAkXHvjAeoZdQPcPHfVcPTCfdR7FiBGFiiCZYVTFbS",
  "key5": "4o4NX48mZfT2mLEcGu6n2tqTvoc4bgpZeLmfPg9opjDUm6W4Ysf11YVtpfC1c9gMm1iMkTy7GjirpNDgL5K4Ffzf",
  "key6": "4Xr3aCSnGqDRoBvbLCgW2hittF2wcM6zx8eCNUiZTu1Wha7TCQs8idJEyH4m12TwdqVTYqCG9ximfsgRYy3nsKv7",
  "key7": "5wdQg2NxFrHPXFNwTdAVnUYGBTK3p661QB313KW2kLvyrQyDfLWPWZd6xXBK7uvdZRDc6Zrb2yEW1thPzEnPX8XF",
  "key8": "35uQ52THFuFtGhM33epcAVUjKfwvFsZ8Y3VfpYeZTPxk9JtHdYGi5Y628bjzhpj1322wVitHfXkyNyfv3dF7ayZF",
  "key9": "4iq3Vita891FvXWwV65nkFNUTNV5U4rUGNPYYutvgTC2bpM2ZMzVMoqLj9NuqzEqS1Ebn2jyUsZ3insEh4yUHZXi",
  "key10": "UkfsF84zWPNY4TUtZ4gLiF1xfMXVRPEX189NNV9jnfZkiFHEUVEAcP8hBkz6kfnhm6CtVZHtGmdQA7vN3C8SPAe",
  "key11": "2G2gvu1kcqCJpUGa7X8B48zLcFGDi2KhZCr7kuJdxLkr2PsiJMUDwLy2k92DQpWwpHY8UUKLL5usKJKE3reuwJN3",
  "key12": "4YCZXfHg6EjfRG7Y7C2cfbpbb5y9PiWRxibVZgskXRFFX6QAUPbiAZyXw98JvQWXhYmvcZCi49r9MVacje5tHtPy",
  "key13": "3Z4D5Ty5rFvfUJgb73gdt1bkT5VrqT7pUGVdPmSGmELrwwxVTcq5BmsqxtyRX3nW7AdhShNxAZahnAAmNMpU8iSJ",
  "key14": "5NmKo82kzmAeovrjX5z5YudFKpkESGo3voKqFxsL35PEdUVZgySJ8ZZQxGDhLLiRDkaxMgxAmKSrHMNMRoRCSHy4",
  "key15": "3hsT8mx7DbhquN9GhaT37U1Xo73o4uVByDVTNAHkay5ak7QiJjZNusqggpyhf26PHezv9s9qMjFcX4Uvqy3aJCnC",
  "key16": "514b2pBKp28uXZrraEEgEb6XbL361D3HyFzKpvn4sAcccopGVvFQdsvz59Dc3YG54vCTt3KLpX1aWdwCwuuBvQPK",
  "key17": "LfprXvVpq76BFtzbnMMHf8ts3au3G6kXgmiPFnTUkz4Dg1hAfyeNGfZ5SktTp22JryJezaZN7MEHjwcusZnTU5Q",
  "key18": "fLpKgU978Q9eKyjuqE2am7AJr7P66DjSpsZDa5zebRiPupE6g51XZciNuMhDYVy6ApUaBxRHGbpsxAVZLA5wYQB",
  "key19": "67TRLBqZ8wqCdrHVttZrUZ7SxKzvwvEJ7aG7aSa2ynf12PakCVuVqcAcmgaSwxM3ocKuJczB5sT6x7eGMc6poJ7E",
  "key20": "2f1KB7358bvSdQ1K1A8Gt3hoJoTfLxMiQpAeJ5g5jp8xJ3B6YH1fZHTcMN6bNFXdCNQfci5ivBH2HWyJVYN4hBb1",
  "key21": "4WJtS9ow9JQKzpnBGnDFCZwDo9EZrzARLcy5K7P1Gwf2B244QrWWrJDg9D6rJEE6KNWnTrDkdsC9xwmJEVa36Aiy",
  "key22": "4qHiw4xt83jWHDPiEpMrLfjQjckE51Se5cpibc7RFKycp9zeZMfSqnimx8v63j2gWyXi1zDYwSzaYydYyfMHaZ5u",
  "key23": "59mAsmxSqixYfGoRGvuKqG9roZkcXWuYX1LWqr3SvtMQf989uZvJRFshuYj9TQeM1wR44kf5hpQEvpM1ewy8a2Nv",
  "key24": "5eS8saAuDGrn5dDSNdfUcFTmWvkMmdAX3gqKasEyTQ4vA4WnMfMQ1SDa56rZwhiwxZNwXxFzUqS4jKgyf25bQuVW",
  "key25": "22KZRsxz1ZuQ9Braa1n9rq14rtbk8C6ArWBHb9QocqBq65ZQ8vvLE8wGt9QC1FzFe1p84nyKtKUJeCMfKhuFBeyp",
  "key26": "5ddQRLePj5ThVqf4KfZySbGr3XKZvqSALhg48wPwBNeG2ggFxsQ91qW7qwL1Xrj44UKNLvriAPWpVStVQPDX8PVR",
  "key27": "2rSWz6vjZWWwXYJj4izHjwY4oTu8Gx5c5rcPVJgbVdGuNShtrsEa8Y749dJFvVTzoi258ujDbGp4vPycD21r13SB",
  "key28": "5qnr53gXRsvtj3PrcEdxcb8gZ8wEZQiVrAW2TgHjVHWkEaqCgcXLQVB3Zn9rdVeV2af9pjM5vrMc8tQoqDyYzTMk",
  "key29": "2WbnySLz3SbhkYCst1NATZH2yB5EGctATWRV1Qp8JLx4QWSrU6YNt45fMRJnNkYVf4b8nH5t28yP4dSCRW4Dm2wq",
  "key30": "5BxeqJQQe8sy1a5QjT1HVWdZ8qu3mjoLe1nasiaMBdN61gnWcUoSLPEg4k4jFiM8qcfZsGK1GqoTDumNqdVXpB5n",
  "key31": "4EDcXwV2X21wfZDFCnXrDs19bJVYyEJKXvZtA66qgUiSoyegjCNxZF9Tp3ocyEUiLkStEHhsnfAR6yMkudZBSNYz",
  "key32": "r5deX6uV3mjfMsUtEo7HZ6z8HmZ6C8KUDZdL3e6Q31Mjoyr2mMzxA4m5hxdKxpZc5zGpciMk73EDN5n6ed69e8R",
  "key33": "4dAjedJNA43MkrHbuv9F9gedsG7BhHAasEHdqEPac1ZhqGbUH8mtcEMDJDRxv98V8bKjMEDdLizN1VYDDAofNQ6K",
  "key34": "4BCWEBZv2iQfJTZjDiwYpRaU1LaMGB3JWJrqcWCn2cGfvBtvFGdzMcpg53rcsGi9T69WNdkVvQhkjZJYbnuTztfM",
  "key35": "3fnrYRiFSkQs5v8Xu5urUhuTNXBjFRxe1QohMJA95rdpCKJ47yc7PTZ7fpzb9KMWrySXQDd9tyqHRijPntdEjQJj",
  "key36": "wkFvyJgrJrg5zoJNhoy8T91PfLNZXBXYAgBPxTumsRhWhQqNU1jagGGuauWMqg8k1FYtYXgdr52wZgjq5NF33RU",
  "key37": "2Hm76eV4uPJ7sZAJQnevgLHCcyu8kcmr6rDXRAqMy3rWmDMkmhASbVsZ27AVw46HKD1uXssGThL9wEUoF4opaWif",
  "key38": "5UJD5Jauy4dne8YXqCAtN4RLE2H3vhmB4WS3Y6pvgvXdXtqeUb7C2erJi6gDjFw6Yso6TiAn5k8VwPeAwfb97TpT",
  "key39": "2rijWyjCSAVUxPbg7NPXn8GAJoo1UtjhGPT3kDrgGWASGhx4U4fn7gMSwGdiuKPjN4c2mEgCHjnkBaGZnNZmTc5x",
  "key40": "2LHbVuQ78d87dZTCWKCWcQtDNRsAd7xZ6zdKAEBokhwPgTvqL5cNiAvvYoxzM7ua35wWkAUA5DGZwThNvKHSwPpj",
  "key41": "3GvT7mufQDVf2VHUL99TwTvyjvwDGugDF1zt3cTMPixmroyunXWTXhoG99KkiM13zQNZ9MGZbmQ6b3ScLuCjGuJ5",
  "key42": "5Yd1Xd1vHG3hhnC4Soi9EUPm2GWfxZyvkLGKstmvsmoYbN8zfcMuNBVUW9yBPjnqrZ7YVt22cjM9PHkkzvM8wLtM",
  "key43": "3qNvguRfGy2vYyJC8zGv5RHgmTxU4189iUaoCurCihQB4WCdDGRcckQrvQjDLomUtJjFvPYxPM5eNK94TViiWwKU",
  "key44": "4DeUHvoCqA9JeTSEYscATb4MuLNozZ6YDD16jmXVrPhRSW3Vag4FqH8Gcv5HcNbXoMDwYPeXL2kdjJ68TiYni3jL",
  "key45": "25CCw5MwkVdBK5bozJWdDnHfiqRJX4PNPNucW46veBsN9eZqqKkm1FiY2n9qwpE6X87aqVqokHjUAuCMjTCb4VPn",
  "key46": "4eaJ5YGoSWGg8n8DoMkzkvDazunT4c7jLRRjrVFsEne5gCgvFrBgPaXk7KyapcxowbkLNqirkZgaTuxKYjT6HLy2"
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
