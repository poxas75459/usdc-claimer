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
    "7A4V4vSGRBnpFCdEY459tKk8mAQGVdKAdwh7fGPVJXywDL4vnyiY1mxCexJv69fKQQpFg3kiCU52n8nKYtAaiHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuW3MAikb1eDQzkFoomyRXHRv1ZGG8kMFVnJCMDiXAr9buqqKLrBHqsRjSYEEp2AiLBEqwuPxxgPnCKYfmVvjfa",
  "key1": "3RDSP2aw8hk57vTwGguKsSfd6ExcGLm4heA5E6dtHpXYFZTyRwUJQrkL9Jm4YkDk35KBo43336Meh8pomheJtkhX",
  "key2": "5ZnztwavuSU2rQwkahNytT9SVv5xD6QumbNdcW3djdCuiL6ogRgkPP6aGW4JMPDGr8zyMeZqLBvTaFEyuKUsdeY1",
  "key3": "2XZj5HGknAttCGnHwEZgGdjdcMzmbHYa2sAV45tatvcXH3J9thGNwhWAxcu8Cs2LjYodAdu16ePCNtnNvEZyMWjP",
  "key4": "5yQoatdtD9yhvstbz7fh3Lncu5w4WGfnehYA6rHWoiWLFYBWJopRRH2xka4ULL84oAnPAEThsXAJb9q3GpcY771G",
  "key5": "3h2HArDz4YZvHw3gWcAPXk7vkvfecchAsJE49DKRKNvpsspNQ9appjgmQB1meHpvRbJWAjdEG7Ugsn52RQguuihf",
  "key6": "3LSF2itxyD6WCoxp2zQoESxGzvLjequ1ix93jmp6waE5WwU6dV4DUvTtuSoKo19YaFPMDqhX36HfbcSyy5rZxhGs",
  "key7": "5mpnutPbbAYP65D2ruzVWv99BYuWkxCworPRnHrmKD9rPnsjN1G8czR3J4bs93YLVWg1AZNRg9SrcA24ii4sADrr",
  "key8": "oXXG4WYtVLL5oNgGph9nnDCB9oDKDczaD65cvHnnm7wQC2dc46pguvMB2rqnFLnMpFAK7u5ggx39YbxBNfwANfC",
  "key9": "5jd7p9afeMzWDXsgep3QyWNimoTi9qwAnUZ5oCDD9Tc8kE6GPkqc8F8TRDS45zHVLNJCSmqHd889Fi5AE8f9z8TY",
  "key10": "5R2iuaLuGSxhZunzEPZ2huXbVGXbtRmVK8FjDikWHWhNANo6rfwMHZoRZPtdic8QHeusZtT1PBX8EeCg2dvCJJq5",
  "key11": "5qrRrvWb3firZnb5fDDGzqaDMkSuLfGoCYsFQ8wL4MR18dvHb4zvsfu7iW4m3PPeX3WawGATU5Tcm9vVkzKDT61U",
  "key12": "5PTiSYB29xyaSJwJmpEFoA9hPtrMZxGyCszo5YyyqabGRK9vBCJnXvumABQi7gQbHhtff4RNsczmR8LSdXuezW27",
  "key13": "4dsqXgaUd7ozFk4CSAhUukbRnBHzJz5daEw2V7Rzigcy4RNRdKPWRYjjTAuHykemse4Vk17yGiPQtSyvwfnMqL11",
  "key14": "2QKvaKteLDvwPw7LMtaFVjiQE9wsWKgYcaEeUsW4fYjf1BZ6YGoqG2qDLghA4hjbrm71Ndzd4HSNfmUNXcbgodML",
  "key15": "5YgSrb9iSkWkeRvTP1UWh1eLBdt8ubwbPSbkWrKp7Zp6hSrHrquNM8fjTyryZEuFxgFBkrWXWmYZ9ijBAoKzcysP",
  "key16": "64LDffN7MPcGFQZWGsXzxRWpbDuFZrzuXJur6shPn2cAjKLcs8inRgrPKCifijvGKRMCK8Jeww4Wt3ZevQNp7qR2",
  "key17": "59F6WV9tGvpDCvaXgcgExuUkRQJzMLhngMLoV3qFnir84dQrV3u5ciPF9RExLucLFTuJAtYjuLpPXN6uVcEuzKsu",
  "key18": "i6CnJdh8umWhRTZqnzkt2RQUCoXeZmX4etDN4yemUVppuR7puwpqg1XcnXv4AU2JezASvNJR8BrNsNpjLUye41b",
  "key19": "vjxJSTG53neXyhb1Dui5XzuzAe1tjW374z3UxNmwBxRiQs6mRxY8ucVAm8tKpaNJ2kPXuj5q3f6Cgn47YN9P41y",
  "key20": "4P7UX867MVdqPBseC3YZ8ipw24LFvJRUvAJV22WBhKaZZAJqPWVjekKNUrAtcBiFCZDEsUz3aofmqEDe98FiS4L9",
  "key21": "NxTNRGVy98AdzcsJowYmmdLWbHRVakQvd2eKV1dxbN3voi6FfU6Q6Ej7SmKE6EAkmGVMZWAy5QGr6Fr51YmhHUU",
  "key22": "2AMjJTAkpw8CEW1qVGPoLVhbXycmfvzpfRzd6e7sh2mf8kceKPFr47vym188ZmNjg3HFvYymvZt55pdWSQSCrcfg",
  "key23": "azmtzXrEKAJS1DXAzr1HB9rvXS2GNeAk9ccxrmBXYAuNjDdUwENNKmBx2C7QeVi6aF2FPM3Fnsv34qzsbvMUFQJ",
  "key24": "1LG2ZQsfBmhF5aY6FuCB395LHMGAhAdACBnaK6fpRVesKzraiE3zS2CDhFV4xSEmyJa3jqKkCWB9PGeS4jKFJv1",
  "key25": "7hnyJSnJbKQ6yMswJRbMFQ3frqBm1dYHeALA1TogQjPfZ9avuiCT2Pw1S8Njp53iqDWZ9XByTDMczzWpXbxiJVY",
  "key26": "49QdJuuiyXGKBNAsnmFevJrFFk3eD5X4YYbYoGEnE5dZoxFVQmPKv2VjZTbgNZ3hABwNZ1n1XhacneEnHFT862fr",
  "key27": "41oFXE1Po1pJHXncb78Nrmtov4eYhEffnyDixrSvU5cFxvnQff52kLofLCubRfvAV4MhAzZ8w5iqf7RYEePK6VYS",
  "key28": "3R992ejU3DJqTQXxqc1N4V6HCqd89zA1aoc76gMRh6UgwLnxFHM7f88iw9oBwBa8xvHsKvnF1MffKnH9WYgN2ZqQ",
  "key29": "3zd5BpXQjnfL7hy3eySjdvagq7kSZndrGoiRr3qVtyhb5BvsncVbx6xpKCoX13ueDf9aoTndWhEsWSqJvMfGYMLN",
  "key30": "3RZtNMYsspBpJ131rwq3ibULwZSnvDgUNxm5VZVTPkhzwH1GWGJMcKSRhs5T9D27CivEVYrdEVUirfGth3joUSi9",
  "key31": "2VkZhKpxQhxpQNvMX6wqRbkH8J8XBCVVK6nqEg7GX9J576aRUkHFHzPzDW9ZJkH9YrWnjtA8vP42gThprKHqJ5xW",
  "key32": "pEr8nTXwjnbm5jMotdLKfoGY66CT2XNtHmt8tTmu5rRfo7bfLndxQ1dhACNjaZnhmfeVddjjaB8C1dFbUeoZXJo",
  "key33": "WWbVBLEpAiPqWdtwy4LzkrKmx2SkcbmqKvxpmzEUbEicbZGasjwVZ1di6R3Lw7d5PYqpzYc2jmqf3QF9W6h3ap7",
  "key34": "525szdVmY5UczLkmnrPATfCpJH8fjcN6wLUxb1ogJ8oh32feaiJdPEqZd1QKyUTDYYv79SDtDwzbGQGo8p6wgLmD",
  "key35": "46jUrRPDmMbZkAVjUJNnGsEjLVpRPiwy9Qa23pL44rGX4NWTFfqzkdy21tDXEXsgtsj1DYXk8WABoz8zktrTd4KE",
  "key36": "3a8jPtcytr6uSjZAGeJJuteJvB26hLm5Dg6xfyAZXURaXqumd52RKJZXg3XQCbNrznmu1xQjDHWDy9xrtc51dQRK",
  "key37": "33ypFzJZJurvSaHph8ijH26ouBM7jQCDiLfdw5WmxChkSvrPdSF6cxSdtqMAC4TBnPhMF7rK25VoCeYPwHWJVy3r",
  "key38": "2LXCXbj7sKSNMQKVtdjrnLZg2UpW1pfhqYFoxcedhzbzUhz7oeVpSiyoH1HEZh6MDTm8bybNZttkRUZCkfpSsmPM",
  "key39": "DQfD2TTz1MLUc1XwX3VZf3Tu2xAgeETrTRVkhyRoHshk8eQDXFtqt4UChgR9u3x9fRv16XmvRwqmJYhiLgytNdG",
  "key40": "4nvprDDJ4bDdgkKRE8szLAhZ5NuCXafB7gAxVQwS6kUxndtGX9DTq8YoMzHdZ6ZTzA3JWN1Gav6WCKA1ma4pttQV",
  "key41": "36Q3cabNxw8Q9ycH2DATM37bj6nvCty5qgxyWyLYRt2hrpUHxFmcRK66L1o8PBgVSxHs4cDjNRzQpDYAgeCX38BF",
  "key42": "AqagCKvUg8pm1AvWER2h39JyQfU5JPAZY9spha7x2Y6VC3QpDvqjNdfN4MmZL4QGTCendmpCPoVdP2AsHeHH12H",
  "key43": "3y2uQc627A4kdYaJebdEHEWHbqeVFfA9nRLRye6Zjd8Xqk9jNzyYPdQpVyqmuZNaUrbHbjqtm397FpmYAToK2njd",
  "key44": "2D8wFrJXie2uUmPz9vRuk2tcz3vZgwVJGRexyPfXLbWq97E9wbUEXrNVudKDcoRnwFLfLbMsci4PNnuh8ypnugFP",
  "key45": "4bVTaUyu4UGF4zUCbgDot9EMoetn8BvXxc5MJLMoMijjDzAMXGh8QMB1KMWZuvDJorzgAsSkTR9HDKCxukHYD5fc",
  "key46": "2nwpK9KsxVT6SKNK6X25CvEYem99kXe57TS9AbtcMjo8v9WZPVHwc3siPx4w7X4LnSX8EqdPdHfZvje9zrAzKoon",
  "key47": "2f3eAf4tMv5oTcohNx8UNbKaA3G9P4JtJtRfGpmLA4CXbkPEeJxonMK6HXyvp2aRUq7NJJASEp41CMafigM17Gs9"
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
