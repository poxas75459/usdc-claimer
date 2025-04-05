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
    "HJJExFCww5yTbufAxXT2825ceKhjc18o5efexW6jTksGAadHp9eX8CQvUPshNV9y3Ngf98QdDVbjbJDYkhteqaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxqc4JwPyqJvVDALWhLJuQ6bNNjsV6s1cDmjnJxjDrve2mtuvxYxQEBoguoJ3pFjZf9rMkh2ADEsJHSJgM435wf",
  "key1": "47gD1mBvGRFgpTuCTHNQ1pPRrvjUHCUQ8rqk1eXAfxWbT6DiQqmK5LjHC7YARVwjwwd7iRZi89zi6fQ3Lqc82uES",
  "key2": "d2228rBHCxrBPCRPXs8APqLDARCzfcWK3rHErZWUNWRKqAcecB6CeaqJZ1HUdZSiuEiT8Cdb8SJdA7Fyon4nsXS",
  "key3": "43bUmLQSE1xo2sCUezw6nxT4rx3jHmAwHr8gsNqrymeV3G5zadbmDKarxcSCwmyYojRU7fsDzcdZ6BxmRrg5tpUc",
  "key4": "2kM4fonWL2i4wTAhyjxYrZvB3tDvz6har57VkmyzL6ts7EjLGywuXXL4o29tqEuaZL7XhvL6p7oN3Po3ANDWJUK5",
  "key5": "5PUAfnyUS4nLeXeRXEBsbXcaNKry1tFm6BY2MTVdyNe44UwYNWRfrZR5fUWm9b5LXyutDipAkXL2DhE9xrX7hVSY",
  "key6": "3gMSLYMbCS2itHeiCCnqFbZ7RGLZy7g99DddNPcbRPsfxbqTR6fNMeWfkG2QJGX83sQGTrPC2Gj8SR9QCv4BNDDt",
  "key7": "5a6pXnCizenvk9jg6BJFjBZiogbrw8fQgSAw5jHWarmbqJaMAGMibaiVL6hsirFpuMmtJLCuTVfZhtwJidrXgMtR",
  "key8": "5xNrWTq6j5DrCqsiQ8VFRg6BoWM5rA2y11ooqshu82AuEv4NAFf5JoXz9YVzJnKfV4jD3MXukhbwywrQ8vq38VuS",
  "key9": "2aENjgAoWA6vcmS6c5EuAqT7duaDXNC3grFFvFy9RDC1LG85EhvppBhakhtMqcYqM3RrSQ227bf9UetDyfJ1V87K",
  "key10": "4tPcsNKgg3jzrH1CoWPBQ3d7uegRE1t793kteYsjsH8jnmaWGzCV55i9JtAj3xeMZX7k6ii2C5vBQtTwb9c1RFWA",
  "key11": "2AWpHHpeJ7V1moX7hkh5z7G2j9EZosz5v7VFu2K4G6pgfsQmhMSxs2r5b18yUM3Gc4fU8ZAMDcjpJdnvnvFmBYHt",
  "key12": "hoUd8DDpMMNHWxmh1ri8PNeLDkWTKshtYrF83yJ4QYvFxBhZYr3byF4noPPRaNXtJayArL51XdQgEHLSCZqf8iP",
  "key13": "4UzsTcBKFnYoHCapx1vj34GUfDhvXSWDyp2RNygaTgwsou3yvTmm7djse518YoPEAp8aWWo1r2ADgh6bR5RZ5XeT",
  "key14": "51q9TVfx8dRH5YXVvKHiiPZNS6QV8T7w6tPsF9Wh7sefWDfDzKhnDHjYMUKvxzYGwLsGsVFy3yr8TmhatWN75uqB",
  "key15": "3CLQkQE6kQHi2M7TntCRxdsX7xVcYt1hXmmTa7ccuiemPRT29FL1AVimYYk1VmF5TBXNdd9tLQEd5UCe9Yqyw2qr",
  "key16": "2yh7FxCpMz6EE6PXK9XHFzazGfXobw2uSZAETvVv7VLJhkUbUjT3bXLw9zDyLce1bposwQKrnE1X2GQ9pg6sXwJm",
  "key17": "35txgE1XYLL3bWS8Hp31UDCA9cgbzWiQfLJdNNDxegFMFcqVn2XVVEQRfD7iMFupC9QzqURUMVVwjAFN5KUeMnGF",
  "key18": "5h2gVppJdiHG3hGcsZgCQBWt8wRedP7Xj96cmtMN2TLg2smBhYRfz3YauWtwbGk8rnS5CxEWQX2F3pmLpGys7YXo",
  "key19": "39buQrzvgxZxueGkaThKdxoNMYidTrFW4odzqo9duENvWbtj3TsVUgA6oAD3oGsHqr28jBqZdXCXTCGP1cgApxLz",
  "key20": "4TgUQBPj5XrkMh3BBpTripyRVGoSzPHvw5NqsuK1uXuigAxKKXruZZdm2kZUgami8KRLJETNkLFpqSwAQYByrZ2s",
  "key21": "4YErQ7DqzFUK3Gr1FKG7z1jBo5oqiCJvDtnGgw2jNkj8SipPumhGYtVGaAgDwjrMGS9NctM1LkkWATD592BbMxi4",
  "key22": "5RnfpFy9xseM51K3yDiWNsawu8aD9xvJrLgpeStK8HeCKiqe25Jg534AKjYQwybNsg6G8aAsr5CKP8qx3bsnZhrw",
  "key23": "2LrpAfiKE72D6uSiqAjAQPXVFfCvyCaSLVdktjnT4amh3PKh2obqzWDQ9Y3bBVXUN2Vqvb5JZTEZ4ywWRZM2AboW",
  "key24": "UnTSYQ3Mb3vnBaL3UWE9CKeM8vd7EgqnDe8JhrcgnPdq4V5j7TYXE9yEqFcqaAMi6PNZGJDVNJ3yHE1qS6iNjXU",
  "key25": "am3L86EDJBokyMJq6ZvDZLYQWJjGDjQLGCZFvPYs8KdCVhJSW2ykA49MksUAmxJRdmpjjodc2WPUU1VECYCmJYi",
  "key26": "RApZBgyx3VHcJniW9n35uiJ5zy731gVFEbt3fTEL2kicxgE3SDUWdTnHSKDX8cskpE26VTitkabVBE9QQMPE9Pd",
  "key27": "3P6hcN5n8pfC9up3Hyo6tZFN7F3eySXKpvEp5qUZfWY9jbzFsCS9hHzXrhUe8qmindPwYHKE5eomPsCxeoHShkFs",
  "key28": "4YsCMaaWs4YmCZL3kQ7YbkpkHEkeSi7tx8TL3aJnzeQnwgKuQsvSV4LWYhctw5pZdV6sRiZDQ24foBuosupksfpE",
  "key29": "m7QDaxdybmfkGK1694BQ1tQxhJv9zpF1yQYFiyje8i3RDbY5rmX2z8TLyK2ytmZ4X2dJd2Yp13HBm1NFSQDtBAi",
  "key30": "3tt86pZE3SAvW4dkVy4rXJqbQXZtJ3x5vZm3rVR1rnUh176va3JDKD7AW9DZLJPES2JbkAe8KPEDQrwy8tBzhvKk",
  "key31": "iy8mLaXeBgggU98VMhZT6opT5sRVj7p6EnbMk7qJZujsspUv6m8WSiyos8WCa4755vihsgcAy2wKayZ9F15VrT6",
  "key32": "5UPYbiPHHsfVwGi2Pr5h8oXQVKhib8w6CVx9SCRTmhPdGjvPKhisK1CsSsJC4SeFfEgsWamiRyLVZujuQuGRy6EJ",
  "key33": "3TmHBeUDW2FJ5y3tNm8xQMwiP6ujuSPVrf4YheJasCcYmDf4SPgP6M8zKU5QcKyEwvBHrYZEWbSFADCbFuaAa7W",
  "key34": "2noYDg1FhFF4suyiUsKy1mhMm1K4VFDXNZRjyppqLcvjCimKHA13vY3pjFi287dbNRbSSdoZJNFXjaWwfbYiwUdA",
  "key35": "26oEKuFRARDPWbxuVVMDKVtyM5RE4WExTcwqjwWaGyG5EBM32x1rwNvy4MEaaTTYKvkTDbMS9g4NTXpuAmxSRWmw",
  "key36": "4XkFcAz75XtVwYfF3xsi9zqkMxmY1MReYPnn2iwTmUViLcgMABYDdCverEN14Quh499ZJRtPjziUBtSYV2sH9Tsi",
  "key37": "2zdarZjDuC342WP32tfrwZgQxvcUAptunS2sGf34N7ehN8zWp1hav2Mw2fiqMvbtKvgUKaW5vkgAEgXBnXM6hP7M",
  "key38": "3L4qt4nMXn1ML5R5m9Eb7ArrM8GvFbBxMKXw3ar1WCp3V1pPtLCkHj9c2YGgr4smFtS3QF8cu4Ph7ANFUgbDUFFa",
  "key39": "3izm3hYH8VoRqTnjLYFBuUkY4EEgqpdSBeGMs5HGZLt1aLZExxYXeqZbvE8VvP7VpbzEMv7YRpkmyGMnJzef17zy",
  "key40": "2XL991GjkQtCAGo4r7hNecz3sCC49do4527h9jfGG3CWraKhYpzdfsLNZangtdb4rR8Wbm8RiN7ZJ1MpQnRKLnqs",
  "key41": "4cnKLswJ1DYgY878G5bA8NZqSj17dLjghszHhHhQwFnJK81eTAqHgwAk7bK5opKW9RsjnKHtYsJw7D3RDwbh1yxL",
  "key42": "46242WGYX1z7xiKHpuLP3brvGTK82xMonx7Zb3k1cEH7jUsWUrWbRvbzBxZ2HBMjmHobN8P4jha17eoiJJiNwayc",
  "key43": "5CVyiJtihYmpwrfNqdf9wLs13SmpLN2vePpWwJ9siJZmS4NtRR2mf1a14diG341YM2aVPqSNykTXGASZ6FGhYRuE",
  "key44": "49xoUWUYbQWV2CDcq6SxB3XhCptqYvnDBW2WJCtJNk4qTavR5FXk97jd3upWdMN5wWE2FbY1Bi14NDWDsr33UZvk",
  "key45": "2GJKEjF9JgXnRLpeYSoXDWkzEKNnKPtvHogJQLD1yDwPP6K5nFCDWgU39SdPh3gHUMdAbr4kFvz3Motv17NpV7qm",
  "key46": "2apEEfqFKxhYWWx5MEzjRJKMVybPPXkVjWDNPAm2rPbSa7CWs6EraLRQrDn4k7N8k5R3N9qNwWvBLM2S7DUbtGv6",
  "key47": "ca2RFhh33BdvqSTG8qg6SXszkaDpM5eo9JNjV5iuJA5E3tLPbgnbe6BN8qHSyxFWaPVQxbuicTwyTq2axMBXPJR"
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
