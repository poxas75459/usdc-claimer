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
    "2PgYzUUBirEESkxwLwaKktNjsyE5iu8tmfKtt5qwFVnT7PefF1HLyRTQ6ks4C1hGGVji7JTrrrmcRuHMnPUMacKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMgbyfu7EQqexFFbGGstdACVs7LapYiKEB8JYsfWVJFz6HWKW2yCnM9ASnH2MknHTY7X85xtNK63snigfCpTJAA",
  "key1": "5MmnJtpYka1vTKp6iD7t5KLqStiZQru5xjgi5C9Ba74DAWq9h67175eWAcpbTpHB5LfPUbA6ToJkWP6S5Xk4qjyM",
  "key2": "Tozv9LRDDcF1zvMa7xudRsUr5LrNW9XAxQsZ8QTNXihH7CH4D1oRGUsqvsmF14mbBLBhnFJ5LSmJ6dDSfDGqa8g",
  "key3": "45rngFxVuzRkVAxZpKKpBX5QJyLARz2c2HQVuj5JLitJ4yRtmB9HDdyuWJp7cnqPbWqVTofSXTX5xvucNs1EgF9n",
  "key4": "3ETRb7a8M2VQnJ63JTB4NGC6bSmx5zoqK9gK3sieyqjefvQ694XQ737XkP6RoApEKWuyWPUWLbbNq5jJDfMTU5S4",
  "key5": "3VkGVnAGyFVJm81mYZmVqWaRyA8DpE9JwCn47tqvQePMfd3xhLahsVkC7Jc9RqY1D6TMmdyqSXYtfRnvYewP93ny",
  "key6": "5uD8eJZMxgfuebJhD3APuuX3cDAMakUD8bgWg7jnJ6khh2uqth17qYt4ZgXcgXSunMzFEV1MkaiWcd8K3gezhjWf",
  "key7": "3X1GhZ6cVMEKtfQ2ctUJnaUCv5C7y1msYWSRd4FNryqo7FbSu8BVn76VYwDm5VJSRLAewMtUsmauyVX3oAK1GzFU",
  "key8": "2PhojNHj9jzaDAuEhKEUzv8xqqK6juDj6NP1w9CGHZvGiskaXp47L6gKZ7RYrCZNb33bwJhy567XBLrrnVgv7BmL",
  "key9": "34VTKqE1xMmzvdgnNuK1daFy2n1fK1wfdMKutGQzBn9g39eMRum9fczbgKp4JJnX4pT67CfJeQCh3h1fbGR4T6Lx",
  "key10": "4EjtQaf9SYw5pyBqv4tK1bjSctiXxhNEALMmPPHHnbhqRvxJAyJqpXZxek5uV2jW9Eav7Jrq2w6JRgX8XGkXxhRM",
  "key11": "4qr1APSXmxjSvv4FHp1nzWANfF6pCafLridXxSNtKFS9oJRrvwCgHWGvTo2oVgC5ywuRYTZ7zKtcfA7V51LDvUcQ",
  "key12": "3aRSLGykiMZhjRvNr8jLxBbWRi5aKKJbcRLPZ9qHWU49jmnTHUDWWoMHLvJBkkx5aAGxmjBepjP3VgsZDBRESVzE",
  "key13": "41T6PHwThRUDFgpmLfQbCmGeVBJKtpc7sVyNEQQqJWLPZ9nktdGm4kYGNjaMg4Le7HpeDtv1daJanatSgW4pVKfA",
  "key14": "VwBNRyUFmvDDhXTtGRvkhzFbGi4415bsnPfHCwhBKskt9FHtkUhVxAtFwzBnT9goxap8zLMPD7yEhixBQBQZETw",
  "key15": "65iDxEMqVLhMum6ypM9FKdQgvpVTnTfEywViDo8pE6GJat2gHQrwu4tn5cXsgELNE57688jXF5dLQ341YiLfcBqr",
  "key16": "4JbJJ3H98UuM6zFfxN9EsTenmE3osyp6Zpuq4neHnCVwPLGQ14UAgRj6TRddjCR4Qk7hBqGrJxKfMEWTBjiKv5jJ",
  "key17": "n1qbeejis2qugjQDFfw5jv9EjD1UHXVr6u9TqiHgMXeoerLfLUTBjHGZiV6Sz2PPv2kM7q8SVPCuMLjgHXiS3Hn",
  "key18": "5fXY1adtk15JM4dnzCaS24sTA2eAmtu9akVBkNi2Pxb88HtNxStiiWFjtXCWoKq8Y6vcKSZxcpajpkfL77Yd2jTU",
  "key19": "2qEzoKPJpBBgvkirEQMcevKQ1LP9Hp8VM2V9rWkuaCKece2bY2YfCdKesURCz1HrfeSpZNUbaAVxHKMLHRcgtqSM",
  "key20": "3vGn7NFt8gu2WEZb6zZhhtT653PsX8csq1ZMHhMcPAuq9LxWE4Qw1qEBatosmiERxoV3h41dULkvGXKsgLsT4Hxr",
  "key21": "4kw2s1yBdBRnJAjxWttpj1cQPd5bn5Kn8iHfATFBZEQsaCczVQYnCQ3N54f58d6Xn2tEjeeqzY2X3C18wwKDsDM2",
  "key22": "9ZQmETtwzQfE8JRvXdjCyLgTZtZh4AqDN5Pa1Ncpjvqf2whaJjTbuyxCXtAnr2ykQ8kL93hobxGVfGiSZTGpFeR",
  "key23": "674XFvwVjBpdRqP1vByu5fnQRLWLZXZcWKAqqhEHqAzABxPajwp7mGq6z3GPECC9DD56ec2AtS2FKX4SbbA2cRgb",
  "key24": "4AJGufWzBMqkn7Tgcy9JAyJcx21q2huLRadp3UUgKhXoe2TdPVWuXZ3KsK36f542jqpEw4nhabezrKvhwk4r2BTX",
  "key25": "44ooemY4zdeB7QRdQCRv6UviZhDYwQK6SPUZBqKBmZBEEhKzMTA8bNUFZocREnnftvYBjQAFmpGnrQCA7QzAZhxK",
  "key26": "3JLLYXs1LR1eMYX4ZcB7rfzoKCsbH692gnL1wBdH18TzBXXbX9rVDzgMqtKSQ6SWTyGzAaB9MUxoSvCXNG67zj6P",
  "key27": "4bVxcfaFAGCjNDQAk9FGidzLDd7WmFNbJrY5am5Mv576hnprVpQ2sRdpkcjREYFznDSgbSy8hj4P8TRj6fy9EtWV",
  "key28": "65xLGGEafwk1pBucTyiznaJ3jp76muC8X8273quTcBFGbXUiTkJZQVeWxGiq9hy8W6Ze4dgPdZeYaQe9ejswfKdz",
  "key29": "2yfm2ZKT9JoeuQ2SPR8BwUAyU4N5SNX65xre4BtzQRDT6khfv8UwMSiH22onUEHupimbCetsRWfKPYAArbz6Ftk2",
  "key30": "7vaHe5r2TQpS1gkwELWamtX7VHzi5PcGmB9J4xQquHTXkgR4snTCVL6hXNmHQu4BunZoyy29QkP66H8yjV2rYW7",
  "key31": "2W2MsL1jixLaDU1FmzKUyyF5YA3rGbX36QEjsb9ogCQkHfkKjAsaaQvTi81Y2BdwbQZPMEvpdJhzGFtqoFSJykE3",
  "key32": "3vbHUcLN9VPwRiNFZqa2S3U7rUPtu3ZGjA58ToLg9FKDi1EBTiVf5b1jdT336fKaE7wgQtuKzuLjb2ikFoWwdf1F",
  "key33": "3FcoN3sXMcTj6Tih6Udvo8Ed8UH3Vf2YSAswFxQFEqFXTLNMvh5RG9hHyRYzX1NdtQVseb9S6G9kYQmysKjgFWyJ",
  "key34": "361cm26E8ghxeZb1AkWRaa2sGRzhCcfPCAVMeNEHBehQzzfvRMZ3Crgv2oWdsS7LvXZ2B8cvSkRJsWfCqLKj46sV",
  "key35": "29Ko8cWUPy23u6g8SKzy2qqqK5uRjBwESU2NsntwdXKGeybeVEkSZUcChDKJk22MjW6HXEGhagxgf77bL2uTHp3h",
  "key36": "3T3nLi9SbdesACoSP41s4zpUXuwyFwREE4jo4VBG9ohWcd7hzommBNfbWZpocyNTuAVBU2iSPScKEJjk3FxnsEGi",
  "key37": "4RjzvgAzEsWmDx6tpxQdNL4hivZXG5QRrqsSwq47MjTr6FBk5HdxxENg7gEXBz9DbVkbkN5JWd1PBr4e1PdYTF3T",
  "key38": "3P1honzf1RzwE3i5fopKzYoiX5vGq2pRrjzaoU6F462aD4zDX7eJoaRogPMQTUcBXMgV6xrBPQkNuj3QmTFfffTF",
  "key39": "5i39PuagBkyiY548cofk6tjUzbqHgGkfmh2vfkE1BfgG32GHc32hygzge5Rm9prAsewdvUGeiYhN6Da9ogCn9BEN",
  "key40": "2PzY7j9amvDQjVnFopfcHhh4EEGrxXDUrahazerMZJm2AL6NUcjn7wD4yXYJc4A5ZmSVpZrcYwSZeNQsueQeG9z7",
  "key41": "2UmnURKfhuPbsqzSvfvMoYeLvyfVSSZtsb7NjeF1AnvP8JLRHCkiAdh1gstuJeNqANcJmacPJp6swk3UTmiUqo7Q",
  "key42": "3QHkkyfj2rJr34vkhS8x4CAshqEzsTgERLhT3tiBZfpr3sVsHD9dxYFp2gxUgbPVD17d7jnvTjjBwFuAfwoD2VNL",
  "key43": "3rRX4oe6EuCX5Egnuwv3fVejmjUoR29NoTSaA3EUax6CkpUaqaoWa5dyVNBL34MHxzDCbrjLQS9xxx6zzm82BDFk",
  "key44": "2PspgZuacvx7dj9iEmbXCCcKPgG15UtF893rateQ9vJ9xxBnum7tADJknKrnJDJHBTwbAwtZ5Hsev1KnEq4sTAJU"
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
