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
    "5P16H7yzYQHchjMqyyfrhGpjrqtyVEGGEWdYrcPMfhmAG1kErVZsHSL7rMbUUXKaAraJ5WS2X3tUJhb7i17AgH8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDzm7MAwjtqS2sxfh7kBLmudu9GkKRoQFBgxSNBGRznxXLishNwLZdgBXbUoAHjnCRh18y3V4cEyN2nvnMxbs9n",
  "key1": "3NK8qzxpt4noBWbqJZnkFw67bGUe8zRs7wxQpLHuvuM6V97rEQUinr3HDRXsS8DZd9nLFepzPgbAUeVfNsyysBjn",
  "key2": "3TDfPdiLPigNcDptX74gKmZQxsMiE3u86DSC2UMNtGQ6zV9e929FXNtaNDM3yLXYSqJ8UMiTzogvUTSVojTDh9eP",
  "key3": "36WjHLLPxNdXT998qoMNGYtzvE4GPHBitAU1erqyhE7X7Nd3EuxuM5HJVYtqscxjpYRTj6t8K7v8GoboGKrbAqbf",
  "key4": "2r8LxPXMGimhnL8ziQ2FESWxa86UrS22gGw8eP4kB6naF2BxtoR1gKfZHh6QTB5S4VXufsvwet7Apqd8ojfmDBMe",
  "key5": "SDL3coyaY6JAb7PaS2WobWwgWE1u697GyyCdp6M2mGERTYJ9vMTJkaYPu5ebvb3cw7MMZ2BJzjaqsyYMcQPCPCk",
  "key6": "669Ru4ApQZB87jm3DaGHXStBMZtTtCM5Ycf4NoWCZppPv8ohkm81jVqgj8RfbPjiyY4VNKT9SK9zfYNVTrdggJHt",
  "key7": "KoVvaUAbxmR3acdrgEYPZjz3GH7KNeFdr1dqGTjr9JcCfTez76JUKEJdoy8YtLAyE42SaKM45L5PWcLAHRTz244",
  "key8": "36jtXY8PeCkscz2smyu34gYPt2yJGZmPTM8LPGLvN5zrUYGpGdrHFFAVC7CmVwFD2aQC5vBNCqf1qhM7i2gZVtaK",
  "key9": "4oyHNSBnCwqw2BXEPNr3xsTitZ2wJEq7am4L45xFcuYGvDwkWjzcMMoUigpvAX7kGFC68KLDvAzXgmL8eGJKEf9i",
  "key10": "2enK89qLZS2qnvHQbrB8sTsUic2gVKZbvGpsFKjqvzChNGVq8Zt5aQTQuGqo4z9A5GtAutbGqgUCDEhf1aDozaKT",
  "key11": "3SfzX4NTdX49maBSumoZ4YeJvN4LJKDMiUV47nVRx1KcbpQShTJn3TK7ZwvmixTCUB4QwAay6g15VqUeHFyhyYr",
  "key12": "5pNdaRva5hus1zbSSFF8qSDhC8Qfn1fmpFkq6dxgapENXGRe6UAJhr93nd79FC3J4UiDALBquqkLQfiGRuShMiNw",
  "key13": "CJayEZqhDBFppEXLjAeNGSpWEEGKtGSt1YQJD1nRUotV6rFzu5zrDZhEyKeZPWSGP25kQRC7uuTqCoBfKnNuFQG",
  "key14": "37YYxWL6gc72gi3LFMVg7yXXCZHfj6y8MJgGSghD94kjABD3GLW3QZwSJ6PS6WnztQqdPPieawEfv6kcpuHsRr84",
  "key15": "4X4tRGKVUKkbJZipaDp1ZSk7duywB6Nh5FM1fY5Ewpzp9zA89tiEvc2fZGfNrmJ1rn273MoUWiGBNNZHhixi9E5E",
  "key16": "64EkjkDdmKWrt4qFUDrqX3RegmdPcvSfjwAGuMEZMYhb9MmqKJ4pPYWYCoxDL41o7aAhtMPS8KkF1zQyZV5cYuF2",
  "key17": "4A5CcMyzBFU6MmznRmtMj9Ry1AWLbUXLeZaxGPR1ueYDHRMQatukpKUaswzPWhR1us8kPFMe84u9z28vVoa6ax8D",
  "key18": "3tvf9wNhc3SJmjrkfDK2EgHcfzqtxbZ3Zyd9MBBMULcvYsMLso7dVSPshtBqUYipwN38BVrbMHaGgJKJtGM218i2",
  "key19": "31fCGFcKNh6fDPGTQaK9w4f9tb8MkQk9mtznxzfMDWmrQGSnAvM7wAq9LASA3Suw27XQXPPvoXUNc5LUPo83BG7N",
  "key20": "43fccMcd455Yj7h1DD4tQCo2D7jMb6hsndvktnia7NSVCVLVJwA25SfPQ4BZgKjvdMg9iaCzvWVQVk6UNi5i2bM9",
  "key21": "3XGPE2hxepmY29RdRDFFbNNvK47jME1Qk932UG7rx9iFyeNzVLXMiQjJCUXbBogxDwNfsyrk8JYykPdTWWUY1zDW",
  "key22": "4H3t1YGJb1PXVAFgu7eCoeXg9xdEAjxAyeGMvZkexV2xX4sAXGz5uzxqARzStwURFj9qWW2gArBRMgHSX7EeQyAA",
  "key23": "2FkUxQaNTdSB2aQRFybvC8LGKMCYniP2k15meTydD82Y6j2BhGyFgUSn4xHuEv1t1Xnv8iRnjuU9NaLapDE7zxK4",
  "key24": "58yF9yj3VF3oZ7xKVochsN1aTzTzdakRbwC9ZTGoTR2aifJ5Gik5h78Q6od77yGZv5qSxaXyZr3Xb3sYMjoWHVpM",
  "key25": "3g9D9qmHh6LCRQMvdz9ji1WLRa6rjwyTVypjR6LGianMoj7QdzvHS89x6EnEiCTgSDYcccRZzaVo2HP8cMY8Kksr",
  "key26": "3GdEVeyqdRs5kGwFsgonhrCqmesn7fhvVLyxY4SFcGYhksJmtvVRDf4gk7cPBVXycaVoLEx7VW1thR8Z4bmRJx8C",
  "key27": "5kDxUnupgLvAuogmuVDkozCcifaYwHgdzwJQisfFHt687fpSUZwnwLJaF1yX6HWi6v8DdGRe7AhFsFGivGR1jGKe",
  "key28": "4byEjheZ3dR85jxhk99WtEXzkXNUrGDdbhZ4yUb3ZnPAefQzUyyaYYY2n68Tw9eSwmhG2vPLQjdDRFkk2meEAeJU",
  "key29": "4LiDWd7T6RJox1fJftxwy2V1sdkaEGHRHBmem7ZvYv3ze8vnHTDQT5NiiJRnhq8MNqdxrqyi47mSdzfxMoZRT1Fs",
  "key30": "2NG9u5KyPS8gT8RMZ63eWFHZPbVZSTnXPmuk6hdWdZafNQRpJy49sFByyNsMTfYkFE7inDU1VTBpE9J5c97Yd3LX",
  "key31": "3SA2R6kGb3ZZ4YLGWT7WXKRtPfd8ScgSYvRqjyg9Hqu6HQAY5ZWAiUoaDq7R9oMnCy2MNDY8uyApydrX8gVqiYSn",
  "key32": "23aTnD33vjVweZxbDcADM7dmVs5mmzVduhEDegRTR2AJb4TVGraFG89TJdzE2VkdmWVncuqE6cD2hydcijCF3GKd",
  "key33": "4Mqcq92EKtBASAygWT8eXQF1j4Dz6otD9jTUz8ZfjCE7HkXBsxZt2TpUKxooaMdqQrrMR14GLxB76j5UMMWMAcye",
  "key34": "RNqrKaJX7oqnmEsfjiZZ6kckX5e1hquDRkeLhZ6eRY1yHRdsTMCchH2bMo26AaghJR7seUcMPuDQyp4Tsgzfgak",
  "key35": "5Z1w3KHkdzX27msjpGyFUTTN9SLcqAy5cswQwQKcCaHFG4oyCPMkMrFWxHj86YjctT2B6EkfM4vyRG1ZqXtZehQS",
  "key36": "4EoBdJfnQnUDmtR2j5qoVN7RqzXcDmeyvY7EwhNfRCSGq91p6qqWRAe3giZTPYsd124m692aCLRu3Kai25kGHyLK",
  "key37": "WR7YRSAPnLAedryXodaqdijn8DZuV6s3sZDXxoaN6poYiWxz2b983jsSpoC4DjssFchcc4odpAHYN2ama5ocLGi",
  "key38": "4eKSzptGRGYJSXF7ABN5481eoKqh8stBykQu5kjgBPM3AuuRAHj9mLsLm6RTyVdLMhkDVqSDRm5xLBC4BGozvGbH",
  "key39": "2FRS5rcVRMh6JekeHJg69kXhdKpkHKLrzV8zWzeq9QVffXtgfqKWmPQBuEEwwFNo5WnzeWVLr49QywpDcpnqrpPr",
  "key40": "3JTKyqybL7EJjXh3CHg3LgX8vJtPXWigUVhf8N6HZoZwUd1Nz6tLKN61TwkEqWfAC7i3uGWUQ68cJu5gH9q6MCtP",
  "key41": "64NTCR1pYDNEoP7Cy6jdiw9L2iVZo7TXmRGxWrB8k84wEfi8bVhm7BLomd1k3YW4EWpo9RNKFVuRAD2zVWAm4HbL",
  "key42": "r6TTnG1259wpM4nWG13qbRqXiubChwbJjjJc7HgADpKCek9QWdX6NuRMaNAZF8cruLwvKThzMEQVz8iSukCQ5qx",
  "key43": "36utKbFvsYvSeWdm9W5kCdGf9rrPkejTXSRiqaaRNZxcLFTTDF2PMvbNTcsezEGseyQKkiauDmhAA2BYXvQJXUD1",
  "key44": "3ToBB8sdA8pYEM4grc8CNATHATJnZ2LhxfmAU236dS6swppXS12rdoK9fHL94RVz2Eia9wgexLJZjMFZqRGSKQcS",
  "key45": "63wu2ntHecNSQoFX2erExD9aoMM4LL63Pgs3xjFedw4k78W5tPT6azGWtnSfUj3m7bJncdVJBeW1hdyKh2DxgNgo",
  "key46": "5AoSAk1UqZTWrSAKZiZemq1cXPo1QuB6mVAGUWuadfUqi8PXfnNk9F6YXP2n4bEF81dh4FvEhRS7ZRaJR3UgAgza",
  "key47": "2FUB4WpUwdKM2ArAJWRK6LvmsDVbFpgbF7RjxAsF8uM2K2LUofQuEjnGgQsuLkYWyeKzXs7Dt6mMh8TE7LiM9895",
  "key48": "2Tfd1SJJHCybn8hJGuPAq2RHyRRKGpCj7maNCp3uFV39gWbn21K2MDCgEbkWpgZjQnvrUhQvWV4hziKNp9t9z5td"
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
