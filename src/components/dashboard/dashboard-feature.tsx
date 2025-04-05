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
    "3WrvsMgd1RG7WK32aQwXZ5P9YHGrpaHbptn9t1RAsi995gU5jNUWdedfQgHi7wxFvKF6zzNpoAXRiMnwztQuF4PC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NULg19LyRgYyegefamiw12aSHneV4kWwCYuJ1dEneoe6upKAMERXF1mbujLLVwqAYx4kQCm9QBtMnAbw4a9dRyX",
  "key1": "2rV8tuwF8777WZ9GWobbhDch4NHUCiiQQJhmejhopmL7rM3AShvhfH4AuJyXnVu4uYgbzdsdJd65xa9kXFr568ao",
  "key2": "45TEDwYCssA5kYsZ4SVuUtf6BLVU4L8XgTqYYPgWG6cdvH1BYfzGeJbJM9WWXsgMg8c7Wvkut85kdX87pMTnQ9pa",
  "key3": "63sr8cDGMFhpAdMcXSWWaXMMfSvYTHuZWH1TkQvdruAUYdBaD2wJgVcbYERRvq3s9P4kz95mGp5PCakkyh8qgoft",
  "key4": "3Phhrn26X5J1RahrYJV9KQexGM2RsWs7j22gr1XiYAobkKXnQZGHwPRArsx4EAmYKdFs8sa2KoHTA8QJKNgqjcPG",
  "key5": "BFinQnw1zcoYQ4ruTwB5xAxrbDvSqd7bAMUHN2HD8poHFbJpJwrmJq8UbuXEQzR7ZLBGNE4Jq8P6gWfF92pWdBz",
  "key6": "tixqvMKmSuZZ6XWsSaERaC6m3JUgf4gYQdUs9t9wMfiffRREvsqqhV66yLE1vtJPq4VZGHtbdz4xHiLu3Ws4JUL",
  "key7": "5RWwr1QetRyceG1SVGSjyqJVxGBuRSjF1qdFYkt96VtqbRSAB5vhTeNjQpHd8RaFv3z2jWX1fbHqaifmCtm3m9BW",
  "key8": "5Lz5rwAERdwcv31sSz5w1gXJrXChWCDMy1VqKfEc4NupquyM5XY8ikCMVLsmovPbxp7zNJzQ3ZRGKq2axv6EtqWe",
  "key9": "KqQghwZZMmasMHC4kMRp2PPntupyC1sxNW2cfgcCb4rop8e8bWCkjt2zZkioBWVsX9ScJgr1bHudcpYB7ruaNYF",
  "key10": "VFYkUE3Nza5h7pYKXTxEFi3BQ1tSSZJ6RGQyhJ8kwDUMubswUrJrQpG2SBKUdveJFzT2TwNTqGzLUv5n9NnEHY3",
  "key11": "hdqEHp41kkUEGVSn4RFJeHyTyYhx6EZNremkCJBuGWAtPMj4enAbP1XmrJxSFCZMQpssVMmrtXWEsRuKnDtTZ9U",
  "key12": "2Auag2FT5H3W6L2Pj56toTYSfnCeB75UqcXUmsPVVrZY4zfojbv8H9CvNxbBwJ9zmQ7XWdD7T8qsuCLp3DE3gLx7",
  "key13": "5MowNBCnUJqhiMty6vsSVH766wXFz36ksYvae4ZiRWvnVnBCKC4twmEZyottTyij6uZ7tsTamtXJf6DSJF2zQLAP",
  "key14": "3jPBiqehTQ3o5Qav2z8BRtDzUfSCxYTQLB2He6wGDg4Gp6TivGrR95uhXCihp1Hh9e69brDSWvT9WHc3U7592KSH",
  "key15": "85hoP5FRbALr6P4JGL2PSxUJcnMomhCkr8Sx4qz4bGFUSHYmiFEaHKbyd911ThLR2dyGNyFaKCyhD2KiGPks9Aj",
  "key16": "35DfCXVLyuhQ5pwpL5jrXqEd1R2MxvWP2jdHVvE5tNjYShWD2aTdTJHGsHByfPzwMwgpPfxanAM4ownvpCkPVfBR",
  "key17": "37XG2HAG9rpK6SkacvuGm8s1PrVW2ihMwYqk1TMQeMacKx7LEoPUhACPuPMogJYPxL8x5CaofUnqjT7UUgYy7K7",
  "key18": "56i4K1jsHv7x7q9vNe3FuRVEX8ZZiQDNiiFjHkPkhN9uSLSbHt8AwUbz7b9P5RxFYxUYGqc4Grtqo7ctVp7Jd12M",
  "key19": "2Xucd1LnG8Xsgwpa7YGxbR5hJQPHD3vjHJjkJXvqmxSo6Zmscu6dvZc7uPECfc8yHynCHc9KmXr7HAGNkkVSyxJw",
  "key20": "2Jj1cA4aNmX2XZeTCyDBb6xmVUANBfowwLWBd6Y9HnuhDX6AbuSnHKQuTrLSsmnAAf1eDigDcnKs4g1DKoawK3Vw",
  "key21": "61grzkDXEUvGLckBcDehRCKB1J3yJVEmveNSGXba9hD2kBMf9cm8VudvZuSxSLZer5bzgpcAunBcSpFgo7RQXJXF",
  "key22": "idPv1oskVUosCm8WsvYE7BXrJkTZq9q1SMXTys3sdArcrxF2oe8wdr6oqyTbs3HaLEzgr5XYF33VrWaicwoja7u",
  "key23": "JACuFsrYavzRreYPQcezLCaZRgwwBDDLBucUYTpfZRnj6ZFdXqP3r7b24xSs9CozVC6Uj97wWsKay3KTnRaSnH5",
  "key24": "4puuFxwqzqtbqimq4qYbBGWjPvrNvm3StRt1b22NzpZGZqm6Kb9cW5wwz3H5BfGw3eSngDErxuTGNzsGsRr9rNqA",
  "key25": "44YUC56QwxGCgFE3HSFhmmL7yF5V91W8sT3ZUQftETH5xbB18oeN6CUpjx13DGEo3Fi5HddRfy4JTjLm61reQMUJ",
  "key26": "8uJTjUfRiPpQcHm5vQZgwy3qun2i67L1qJ3EgWhCdMYRyft9rgsFAGCA53SQkoTWk69jFpUrkiCbELiACUC9uzt",
  "key27": "3UQFFnGrhU9jHWXv7nWLoRhNBhBMk6WrbezrC1QgHy8P3wPHMq4hmAUu7KdjMKViu6vj9n6ssNkYybN4MuUU3uKt",
  "key28": "4y9kpHrDMgacT9j6DiZcvqmhCZxyYfvZ1BYs99t34zmABxJpY11Xuofz7Lx7ChFUSoR3t1h7JEzrGhAfv2una1rW",
  "key29": "5xbXKD75UwHen9XTmuaNpCmPXnfY6kJ5uX3y28WHsE3kwCM54MrNNGmiq41xJv8LS44mdqgK7RDbnEJcHiCu5tsS",
  "key30": "4v58Wm8u34H4cUmka1cPdKW6TKEoQqwMAM7WPyG6APn5bAFZAiBy8tiwLttK2XVLCRrLp5wBSmSYwosY76RgvLmt",
  "key31": "4jnduRCMdvKzy8Qt6Ws9C7gbfdjKFw2rckFCJaaApni38kzjTBuockZjNg9dRZiJE3yBHWDJ3VKP1q8E9igS1JWT",
  "key32": "3BqK35fvqDJkTd5Hce31jJRtD54RV28MBuT3mJfzSHThet2FiKbPKcdFVMdxPx8XzfGYw59ZEfPkVBRZVqxN6yM1",
  "key33": "4QVrzomYiDzbbbMiQ2pdqZqhwwkBc9AmRQ8hkBFboEecXaDt6KERArjsGP5W6bnfbXHefQtT2My5fZpkGMPFQmK2",
  "key34": "eLpiVuh63vEBXMqFJwtbYZ3LWNRiW4SWJqqWJo6UXKTDchZhoFJs5tYUBXfAbHrVHYNEbtNG6DG2EYkVdRZn6h6",
  "key35": "5FeYoRHUFcyPSp9anqa4GayKNxpaGFYpGvhcUr22iFyUnMbGhM7krnMjMrQ1ECK64TtjJRCGXq4AAB1KnmL8FbQM",
  "key36": "5wLR5T9C4s3jB1sRdvuULC8wc4oX1LLkaX3DDBZ7zY7oHqD8T78MqH3RiYzCU6jHuemG9U1Na3BnnbzuQetsjuyW",
  "key37": "32axtgn8N3mGteH3C7AWYZuxp6upsoD1guscde8PkxBBbivAXYYruPyVhmaGqYYh2yvQuzTxJdH7zzByLjgyUuiJ",
  "key38": "2RcmNNiFofBHXQpzX8oDKd2E7ibtuBQeQ1F2NTQpJcHr6KtPrtmbVDvHSDHypv6RsoNh35P5qUYWA6JbuUgZ5DNC",
  "key39": "3iHdfDTnk1qMFGjX3UKfWBR6DtqhxLMqNwv2qZkeLS2gGRvfDNqEMpXKDbstUHrYnmKr4ChCo5RfVRNcyUXMniHK",
  "key40": "4HL92MV3suyPmBdSzU5D1BgtVhWefXKDMxmhre82YNoEafii6Cxw5CcYygkuTB5iTkv4gBEnLHDJxmAPkqz3FXKL",
  "key41": "esLRZ1469ehQ2ZUBCLrCih4USkg9EVZKVexxcMARB6e429UdbpANsJ5UsQs7P3TgNWvLYgCQoQT8QiRJx8knYUK",
  "key42": "2NAnGg7C28gVVt6hbnc7moZ2tR5A2zrBkeVUKPD4XBZTPn5x6x9mmrtTEfRViV2DyVV5CRipUhWrGHzJHimknFLX",
  "key43": "5Cf1ysMMJ6WJ6SyJjDiqGAC9ozwB9dRu8oCzkHb5WrAD4ZV3QBaM8AqH1uFubitnGAeYFdGukeUKJvxPSqq1CZna",
  "key44": "2KmHKPbafGNXYP9dnFbZCsW2jGnpe39JyRhp8N4f5PzYLvLK59bQcpUWs6c8kSEMjv7p1Mc1Mgp1XCd46QkovqG1",
  "key45": "sAP8nT54ewrvR3BGGH9yagYNhhXPqtZeYR4Um39TFTbkA1ona33pmX3yX7fwR43FherggxCGBA1va7MRo5Zkd2N",
  "key46": "4d3tdzSkan86wTNhSn1gCHUgWcr3SZhDNEwrLGhMkVNoZTmrjVoo5HrgqzRbbyeMDQgizL7PK2AzKHnEc9U6hDVV",
  "key47": "3tLddMxzUt1LVMyAjkiZsX7hM9gXHyDX5pLaYpWm7Co5ETScL1AWPnPT2pMuqTRons8nE6Z7MReTdV42MASzQKuV",
  "key48": "8kzUfy5mgotH1PiGrTsj7uvsKZEFrC442Q3ND3JCorWAMMRn6eNBBvAJT81vqgnqJZeh8qQ67s3F1MxfvbdLEFz"
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
