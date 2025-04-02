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
    "8xwWu8S4ppGEwXYghCWd3KE9rtecZto1unTG7gCPvnn4iirc9yLT7rfKTHdMNZubZsARhtVMW9xsG4By5HTJHdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VcPzqrEfN58AQvxRHCACaMu3CCwxwqm5ECbzS8jsfpwPT1mkH69GTrSWfJjrorK5QgEMFNeCSUSLwNKV6ezWyP",
  "key1": "4xnFfMbAzPjAnUi5EyXpYUXgf6SUpoh88j7CeANwWLhp3Ew6enwUAsVsUNY49yvanJuxy9NY8RpmxaMHKihxzN1r",
  "key2": "3dAiavbRWz1J2PaMucFkZbjsdWHoe4KtS9A9Nj8x1HrMjqbRk2VC6hhj5Yp8vWFnFnLgnrxwZAqkZHwhQTjvqV4Z",
  "key3": "ujHVBMQoEF46mpH8T6EhxgbLCLawaUaBMreMYtMEs71BY8go3eCc3axcX7EpQcDGxYaHpjJpnEjJsxK523NrykV",
  "key4": "4WvsYnEeNEw7rUyN6GfrjayzKkZtu6iHdFk6mCFNoxWMkG8wXhUxmC9262XgAqjq2kxgPZDFxAJz8JnJztSZHXwz",
  "key5": "5ckzEYKagGDicHo96DQp2rtbB2idYtNvnaRCrtuU7cZCPqtMLEyP2zH9LcRcVUGdj6HJmUn5oqNwGhxs8ynJ2SLC",
  "key6": "3iVUho9gLhHN3Eg5q3HvwuQGoWXWB6AG8usqjy8Wu9PnoHM8MUMigSfS7p9YZgUWjphCUcb64CGnpr6Zt3R1LP6i",
  "key7": "2HkKgmZZBE6a81GbaYZtHgTUf5tJZWDcybmMDUxNbzJspNS1QcbEfPyN7WJ7p4fnYsERDFTrYs3wmvtoVbJ4bmUW",
  "key8": "3vYcvsAv9tP458UDNSRNrfPouxFv6kpN6txBmZaUDUNqXNh6wHenDL84tXMfwdm5NGuw7zS1MYuiqzadbHC1MYE4",
  "key9": "5DmPH8HwECLRW4Boaidx2kXLCabHEJ7kNz1vQfmysJKVdyKYDx7xmo9Ny1MBtPYMQxNQPoFYx7Jx1egKitxkv9rx",
  "key10": "5FyiJTQc6ujWq41fKazHQZ1Muaa8HJH1uroBzeaaPDMfAfZTAA2e5EgCZUEDcjbdcCeC9vBb3MtH1Gis1Yru4CxN",
  "key11": "t9M57QM5iieYL5uMrheASSRrFHiMNcGVzLt1iV298kZrUC5mgoXL3Pez9kcik5bU1guiVtRb8nSoEAX67rnguhF",
  "key12": "4mZaH5xtLH1fkF5o6mduhbdKUKtrw69NW7i7vvSZWqVidoyD5RmzELyUCeiFeGNMSYT41J6qgSqzxXx5BunTCfKT",
  "key13": "2vannUgw4zTXW2gjxXUuFfocYXLBkYJSZrFNsMUH7V7aG9odE5FXKR3Rrew8ZjUssXyfkJJknKNUu84Mxm5PwxHV",
  "key14": "KWPvZCqNLPLntw5ahh4jjd5iE8zVvTq9imnv65253u76X5JJqvb4RwzNvXC1CsDYHittbrHdwXEsLbDdGnKMbKL",
  "key15": "5r7Seor7vqeoAziHB9wR4QUFdCuvpZcJ4E8dJZGcWYr2WhcNuvbtf82ofQ2tbk4rrjVuGP2FD524Eawbwr2ApESA",
  "key16": "e7gmHxmHEGZ5Z3Z49rWKmxY4yfqNpKV1dsSmryGf9CM5DMxuXKR2bwvthyjxjq41ex31RjaUxwPeQNGzcXsoLPj",
  "key17": "4TRC4HqThadF1JaLKtfmsJnm7ThmH3DazXXSbMuMnTr9eY5tHA4b17upptvyQTWrN5FrwubS6P4hYgX4rgfFFu4b",
  "key18": "G5Dt4axfL9Et137DufvpmR5in9r6E7cmjk2gAzsZfYi5a9NWJQ1oWJn14ecSWS1LRcebynghyrZENRgHF5ekPyN",
  "key19": "52bUEDAizezjtPV5BJwAXcAswKJK4ZnmzEHDF835kH3hPL8ou9WK6qPTgXygnSVwBikxdNJWvKoRK3RURx3BRUDR",
  "key20": "2zwVrAR96RrZUJCT5pcKm3rH2NhKxihVVCLx8oz2AUduYSAkvE3oCgXXNAAntzwucHz5hkPWWMpPUDWBKDyaG2St",
  "key21": "mRW7YnKc7ee9WiHnUKKpRRKVMNAjLabrDJjtyo5bJ3vsB1ANnvsMTN7s5F9GWFbnxsBHYxLxjDZgaGhcYS8QXhp",
  "key22": "3nHKzSATfMEZzo1a9yXCzkiuQvYVbkuPVTqdMH9KTLpmnqpmcVwKCiWUNMf2YzHrVGtYWVvHZcsNQYbWZmHeUjwU",
  "key23": "3bw8xMn7DjHdYYrTWD3UVdEvWabM1ZgQ3uCfq1pJCAfTrc2pyKCFjEM8y1EYh12V9bE1xgutWgiecNdY1WGGbZmK",
  "key24": "7NBcUyCaawRCq42vyhMDi3kHUh9pm89iZpaGx12KQq5558hmXUtLcnVyZXVqsWaK3tLpoAj2VueNs7H2zc42bQD",
  "key25": "2teSHo3LV1f5diqHo69s3XE5msC5tQVmPR32sU9Xe1Dq4aD1qto2n6Bo4U3MunxGLmGA6qYZJuigYKxbdcHfJAi4",
  "key26": "3H1TCDJVPnbSPrsw16j3DphGt693etWMMNT3ebg17ndXFcanfjfPatKPVXdts5yDQMtcHLCmBBuCCyRKYS4iUP6z",
  "key27": "2Wi56KUcETLn618qVPW1iXxMPLrY5PdyYZknoTycYYA9aeRwTNd4JqKeLgguStgMuzg4rXEWsX76qQFimvSB9ra5",
  "key28": "5fZJWkp1wFx2bzkXMGSbpkhVfABe4g133hk8YBbNvJyQmtTVTATGw7zXJt2aPug5Tmq9wcYTN24xPGwCekmCJJoG",
  "key29": "3EJvbs1iHbwqA4XeK1S9LwD2MBDKxpkjCGRA7zBKxwEgjJGa4kzn1F1pkgw53kVHUaHbAaic8hx172QgatcqbSgm",
  "key30": "5Cna6rKC52Qjg9eU5ie6QahE7jJvJToBgCFyfai2shxLqXHxP3XdbZXG9YRUD8x17Nae35zVmXjmxD16rwa7BFBy",
  "key31": "5WoCCNaZvX19aHxGdP7Mjv4PmiodDcx2YUJ1QVhEnpYQXxqjz9KUg1jQeCYxHTQ1Pysu4HeWraxHeapfSjw7KZhp",
  "key32": "2JmEf8EZrhEyBeDuxbLB73mX39uSowmj4FspuKzgj2d569Wd7BFHAQZSywvCUwRnBRxQwq1TP8oRezZCc6YLXoge",
  "key33": "3sZxGJt5UZUG62aaQ77fqfWNjzAgMY4cipMzcxyQTwfndGe6yu337qqVByir4CXHsrqFatHqDsiMLf5JHW8wRpNM",
  "key34": "2XRtgfA6q6HTYNLVDtLVeW8ta7gZ3B2gLZkbNwTmHW6ExiazTsPq5piAGfzKmzbwT6QeZ9HQurz1ih9fxKmkHrNA",
  "key35": "3zwbix1upnK2HTBqM9pzvZGVcLMrmrMe6fRpvE5TN6W4WczQ5CHjaSFKpdJgBdNuf5s3BK5S62SdNggTnFMuoi9F",
  "key36": "2E7rwJuw1o3mGfoMymrawh73fCJwT9jbX8kpPLsDMgTVzQZL8GLhxZuoyYQhxdpVh3ARVmGwA4BcwmXEAjSGG1np",
  "key37": "pVvpyxjsEwuztMypaAhym6eN2xwQdP6U4tM4i2MpVPLNoCnLjKXvDxKCcSVZCwkpxakDp4m1u4JnK5ap6v5m2d8",
  "key38": "3pqYZBXBS1Hz7AkmLKvUPNzMta9YtYhrxBhfjDsN9haHL3aQzUMLGTx9nPYrMjWcu1Unrh9Jtdz6Z6dtgmmkFnfB",
  "key39": "4dvvJQAYeaLrJ6g2b5XiwQH9BWbdUJFS226qaqMncoLedxpqKWfLWcTnD5rQRXoAKBjRiTKgHff3vGLAFBEgZ7jQ",
  "key40": "3oAbohpVHG4F4VGQpRiuB2rpekn2KR537ezhvoccbZxDgV8ozKJDhogjvA2WARyddwB29V6yMbhAKQsAGkZdUFua",
  "key41": "3oUAqQEiwCCgLoLEuUnTp6AxoyU4BFfSZ6AfTJ6pLmUXnoQkwM2GDWwwEBK5ym22hBG9aPuS2sXaevYFCq9CxiES",
  "key42": "3L1rCe6t4K8Vym2uac7FUCDm17SWyqsfBDdhjZmegxo1JxKq4TvWfo4SKqoT1JSj9DuzMBnu1SQPRxNh6NZdY2Rd",
  "key43": "3RBhxmGUUpm6y2tGV3YdpwuikMrQTBJTaEFXL38zWQmUZBehTAbLbJNG2D57R8yd8RS3PdB4FXmh65RBc8PBpwjH",
  "key44": "GBjejrjBze5QqG3PHydGMGRgVHu3NjiSEj1hfLW3xh3Kg8T4jihSeJ1s6tZkYuTveh8ujS5JqwFUq2GbDH4NHkD"
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
