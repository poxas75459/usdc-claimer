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
    "2FPLbn7FBrg7xewkiqnLLzdqkwrXpWXzeni18WiRz2EyuHzYMdmnxQhQRHebEG9dbsRz39ufaFMXpkkct4peMFc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jkQmc28VhRYAKsmyPMer2HMD7kMxWqYz3HBLN34Yfpxk4y4fQXhWKkV2UZX1DY5QEAoRFP57MfhRLsL7k1SnX8N",
  "key1": "5NyTKCyG9C5DHHNMWVcqoaJXzravBMSxUmnpRPffCnZCmcZGUnuhbz9h1ACvhYKiBZvU5PS6PUtzUpFfCFQwUMbS",
  "key2": "3HuQP7kanmiCFqU82QNP76ZcZDB7CiqSuoVThYcdBcy796XewQQC4YawLYYH8N257nFLHXGsqzY9PaYZYKmhhfwb",
  "key3": "5LTp9mPudCbNve7BeQAagtP1F8kkP2nMSGPfkQyMoeP3RwDHPRUM6djkycuhSNk1zkSTv5SedXud7gyxHTkc7QXP",
  "key4": "2kxa76RackgA635YomFYLFSUmFSDA7ZYVX4dcetHjTZ5789BbJhcSkvhVeCreUpkcVAqCvBWXsaLMqB8ZywuFM4S",
  "key5": "2VSnYBsbgwEh1sJmdtaQMS43jfRFHTGLenpvKzQEH5NiJAvwGeV2GPitL3sDLLbrGVvXiw7tYcwavntNAXGDQQgc",
  "key6": "m5PDaUgXUweQEdL7qXm8cae6Ug8nbcXkRXBMjKURBkaqRxBEX6mG52cAiJPwLCkmk5WL3aKJ68R7fmemFoYsrG1",
  "key7": "2hr5jJVEeDnefuNYu19igFMd7t34omwGoya6bQrTKVwSMPtPkjm4AvC9e9TTHZRuD321Mh36JL9SQjtuD2fRbD4t",
  "key8": "3hgzDL82LEByuRu4guyCbY1mGQ1oMBk9WSNKP3YTWeEtwYD3LTCC1cVxNDuYeNakZwra5aNxUyRvTf4KxkiBvaKe",
  "key9": "5X2u7pcSPhRL5dpgZWY33dYYyR2rfiGRj7u9A4jcpp326C5cGbbcy9HTGMUM9RJjp1Jpe4xE7Jjuu6LvGLAixzwC",
  "key10": "2XoYA4A3C5hAUg2j2jj3kCP4uSs6xipum5M5NbDfrnH763CiqGBzwLM1FYedPBGibNmoXTSZu5jnGMCsutaRfL6e",
  "key11": "47wrP5ytKwrBgdjq7sKWxerZmjnyYVkjpSPcHRdw6hUL41LDtSdehwZUZJf2AVoGJ4YWst2XPy56C6TQehsfSH7S",
  "key12": "2rNfrckbiJ4Dn9wNd2W7aWr9wB4bk1sfF1gFDAF2VsvXwdkJRXfcPKhqJgDJnUiznVisBuW7Eq2wcZ3rv37scars",
  "key13": "4k8TP7yWXoH9uEto42ejr1c1DVPFRxf7wuDXSFbWbvufWYvZmxkr3JHsruWEU5M8qNVQbWRjrAK7K9Pkqf4zPLmh",
  "key14": "2jYc3yf6TDHvmfE9BDXhiw6xD8AbggKdwk4vt6752vDReFtfqRgk3fgwrP4594e7RZqXL5sF18S7PQxq8se4nE94",
  "key15": "VUwk7g7KTSAUq3XXZMPsuKqWMLfF1MdKQ2oaYZvciyFNWxuNeqPc4wW724d3QFTBLsyZk841w2Aah8Bkk1j5Hgt",
  "key16": "5Kg7WhJj1MT389e6pZ12C6ieLcZfDX7t3gtCNcBzmAsB2iMmE1nmNR7biSeybtCkCTRwo32yegqUUYkzebKb5KSc",
  "key17": "2fme55nFDxTevWttgC6VRXkRGrC9pXSRNaRazDsvQ5hH1gJc2W1GpA8jCRyWAyC7R67buCMWgGqfFqwmU33Y4dhu",
  "key18": "2xqRircbHLwhv5dbN9QW8MqquDUJ2U7rEqHYNxeBg4kCaKGCWtWxamiZGPfEf3vi6rc6WDHYAkT1wA1n6RW7o7dm",
  "key19": "5rtiCbKW97mZ19oR662YzugfJrwKRohTTxxoknb5T1GUhBhYD1q7sbUcsLBm1dk4sSsVFRxTjrmKtPG32UxaJgNu",
  "key20": "27PbGi8YTzX447ZALqYKZR393R2jVbaLAm7tVYEGHGwtzSebgzRSVygjKdRiqrcRjZMDXPD5MJLQrmQcPzgkBitm",
  "key21": "T8zP8voE5NV6JyQeQWGttto6JLxn8V2T6HeJPThp3QjG6f9xGDXh3pWNgnCbacykvjHcx3Rw6M9SD7n8gsiWKgg",
  "key22": "3XU5bUS98CTzU9tj3LwLPnaX9PahhLQ1H4N536sranfrv9R52rrGXrdLEe7SPaNYwBDoWwAhToSxJdPuoFe33GQR",
  "key23": "3QU2ETPL1gLmRmCajat2SA2Y83k9v6jNenTqEiDxHAQvd2dLwdkcgpxEtwFAw9292NyWyeFcgs2JiQTxyqxymeTZ",
  "key24": "3Q7yb15JzkR5rLoKQDn8HzGFvUZPqP38JsmpDGqwahgd61crwN6fj3L9CtEjXoUeTfhou3vQesQMzQnS3b5Rux5B",
  "key25": "38WmB5D1gVXagZhZeiLyCc4PmUTY2YRM12erMxhJoT91P8bnEX68x1AViMkcMAcySitL6WfLg4nGTGrwxm6K9DLG",
  "key26": "3jwYosjV1wcioDhSCNCKJCn2FssMUroxvrqXVFWctauuoYkkrUXn9Eh97pegDRMmk9nQcc1CFafGWR9NwY9NmSPu",
  "key27": "4KFNmqtTo1PbMFS9w88kqhP1aQazBX7AiqCtz9Z6q2DqYckuQxnwVSDipUUVWTxUCZY4Fgbqaow7UukLxcf2fAgt",
  "key28": "23MRrVyHFJiYMr2Y7xk3ko3LrwX5JNdSaTmG1S6TYoMfi2X5FXJcubfWzhhEiKah1raRukf4J2pHiWHtarKkdvjw",
  "key29": "54dDMtGPqr154aXNZpjqfrQGzPL8oVRZwPY66HuDP4b6HBgqqpRJK7ib7PZeD23Bq2s4Bbg8RPdLu1a563HrhK3D",
  "key30": "wmFDf6TCjR1JF4m1FRR8G4zGWns7Jvs9T3hWKQY1HruVZfPETMSxsD1cWF2yWZfh3KJFtQNGfHHQobxDLFmQyb6",
  "key31": "3zZZhfJuBxn5reZEhk2pNQ7LhHPiQD3B8SgSreoShuouv5MZb4BXXCL9LapnKLTihRp6uPToiDD7boivzS2wVjxy",
  "key32": "3PN78ZjaGeRKSq9YbzrJWmKhnsf4gjRUL2FbPwwszdS71kd9fkQYE1GgxBeUpNLThwxi7JLGiynmHp8YUYaDaJhU",
  "key33": "349s2aPopqY4teZowqSTUqC3ZVtcP99f7P97MGfWnQ4an46Sx5Hq4QJN3FcQg9tMz5rXsUUTZJX14RgfMY627uy2",
  "key34": "2DEzXuHdMrpZ2r7C7EW1iC7eSHW6YPMSMTJP4TDctGpoUnyo1ExEX3DnXLgvJYGdjoJLVvendiYb8zH62DsVuavx",
  "key35": "5hpbdHi7L4ijQnwAJkkfT2RAaASYjwPNAwEAqYBmzqaJCNn2Upvrs6PawPnVM5vcnVboguZoWTt5WNLrWWpg8JTk",
  "key36": "5q2Uk7Uf1iskzuwfrbq42rY6eqgEoEp6PXw29MGoDTDeE6REjDdnBauKAsfUr2UHSxQWKxtZ6VZJ9o2XCAFd1eMW",
  "key37": "5TprPJfKgpwnW8MqUvqeiQZ8mpdjHtgA2FS15DjPNMr9s7Vgv6wVi2qGVDZQwhw4NAGxXhzvj418sqx4NWWvw62v",
  "key38": "63v6HkTh7yF5CkZZ5B5coRc5HTRyXkZhESUoJR8isoEskCrJbF9TjMbHsutcUhxgyyzPuz19aUjHFv17x3ihPNVg",
  "key39": "4ruFCFcc38LkZ5z34qbo8TzR1xizkHZA773Y69WbP9r7paQ2B4kAniF3A9GNh2mguTXHLkzEUE1PnsBQ432754oq",
  "key40": "4NiEvry4Mys1yiiDXzg2wKbZxbw7CXPqJeWf5cT3UggaeeeJF6eXxFNpbHj1W27e1uJhjRYdEsQftohmyzpuyiWB",
  "key41": "3cZdxGEdL38ZQ56xXgHsb7CiuvBuPNki3ZuTtAmJdKYnsXXnzHnK9YtSGzub4hP2m8fuLAjS8TepLsuWji5abW4"
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
