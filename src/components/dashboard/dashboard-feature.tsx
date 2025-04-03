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
    "1qHYS85Uy98dbue5AgEoP472QLzh7NdsyJaZNCk7JBtNvzHJoFDQfXUP5AyRKGBBwBpm6aTTqaC8UfWsnAChE7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPkY6FhnjxTpDgmACBWGMbKLdS8NS5VaedRM6BbVaoUyMbuvxURpaHd9sEQVAduf5LobubybKFN8jry7t7bkPoW",
  "key1": "2ewbbygdM1wk8PoV548WVDT3qD58y7usXfm7jvqb61evjAP9U3tYRnfB2Yr2bK2fH74imGTiv97WnDbNZ8G863ze",
  "key2": "6PgmdUxAvHLdzeiBfjHFfSP6S6buDQ4MbHiiWEDrpvCWt6do9wSx465vTxJJAJguXUJ71x6yKTd8SZHZUohPWYy",
  "key3": "4trGkqwjPPgEqaHGTXrb6hhEqCuExc8URsJZqYrZQTkiqTJYaSyY1byne32RU8mV3xvUaKohT3Wc5zdsfnGFGiAS",
  "key4": "3MfRpYDZGzn7CUS74n5tkn7aM6GcfqgcYzPk9CQwL1ZKDbCkNuJw9PwJzZryaKnHi26N8zpJyJkeiJeZHQ5tZJPi",
  "key5": "4tr7SDSt3AbnZZei97gYeGfBHKb16GvaGQXV5nTgaEQHg379GqrfXKRxtJXZexvWTY2W4Guwd9o2jA55cbkiDnmk",
  "key6": "5bXrgwb4Jj34WTHjuRhyazy2dwgL538MUw3vqTNKDvpjrNRmnFCAX9rY1YUcXqEHTH38fgM66T3MhVmX6DEPKLtq",
  "key7": "YV2YZv8uKbDWmEYUop96HPFZyjC8jX4As4QCtMtED6mkThf1K5wqGjfHE54i3PBYbRu2JQUgy54yVoJo42Bnh78",
  "key8": "5HQNBgCQwETWuoFHFqzPKEGwefJsMLm2E5Uafjytr9CuMzq19RkocNtKnbSBRLpKD92ndVz6wqRC9aZwCzZgm29",
  "key9": "3kgxKykR6pAcCqFwhSMg4F8gkdMBDSz5R6CYinLuQyBYW7QsXkKQaJpu8B32uJ82qTfGmWJTSQhyZ9p2hpWPW2rx",
  "key10": "2Er7mqedNzXZTr1wNszUZNTZFbZBrFx4SpHzG2ynT9LA1CUDsaRz7e2maRPHQDzP3RMtPELrhfNoxpBc4DY3jmWz",
  "key11": "63xfe7hCEyv4P7vU8447GxQRCTT32tNaEjMR4iSsbmNvAhFcjRUGsFSzZCw3gCUwMRn6kHhAvya8MrZMJvTMBfJN",
  "key12": "64YvUvDHEWJoqs1spSRCrAsbwtPmzjmkJyWzijYvaMxpczBnsR1hNSGC2jk4bnN3utA7denCiMUR5h4sHEMm2g2H",
  "key13": "1RjHSz8YFNXmXL24WunuRV8TESjgiyCwKci8axeza6WRjr4aEKXgUp3tAWJxaKAtPUzexL67fY6QAyLTKdE7cgL",
  "key14": "JCczTN4716dhuUnK1Y14PLz9zbd7T61WnTTVWKFdovGpsXzd3pzCeGwixZW8YCcFLFkaVxbo8uJfayPUMvgaYmY",
  "key15": "2SGSopS64MMJKhAffFhtwNSEsa4oxJRU3HsrhCFgTNGeQEnJMnqynu4xdyTBczvcjHmgFSXMD1oVadkzji1zgiEa",
  "key16": "3sDvY4KeovZB71sNSTrYMz5xffRmEhbSThjukAooYSqtU3f5WB2yMX26zcqqFq4xz6srScwEkPPiMHXma4z8EPb3",
  "key17": "4qS6A5hEmrH27a8LsyederQ8xpqmsQYKXHo4128BUhsAPACZYFsENeXbJi3e7JfDY6VGnED7JMQTWo6t6DazEVVb",
  "key18": "4iyF67aKciLarvrUMo3vLuMT5cw8xiYyYciNaShckhJBULeuS1HgUPGVoVQDA2fQAwJhw5vQrj3XSUf4MDTwRKjy",
  "key19": "5b7cpm88L719agQwokSngurApF1kBhmzv52RiSSRvHLb2vNJTXx9bAXqQYiDoBvbKpbBXgWWLEXHx7sbMi3F6Wah",
  "key20": "3Wo4tjZff8uZFrSYmA1C1c5jDdJK16UPRYqiRriij6HipWEFrGsoWf8uXVaKyxKV4tLhGAFMDfJXyk8ThP4PAzJh",
  "key21": "5f4HLgCkrpRo3BS9qv7KfKinrEvvq9KnvSSbqpUuofqSJq51pLDKW9VWFhTDuEYUQPuAkAoc2m4hGfzF9BW5fkZX",
  "key22": "3J6n6cnruTcmbLeDZhDVEv8uyYEYuHp2gQBCbbyQQqiypfbCXQgZivfCK4wxad5LGo8jX6WLFnzkeiW7dXYzfD7L",
  "key23": "RDY7JSmcpc3EgLMn8mcYSfsD8xHrPU5Ny98bPh1iqRtCWiDQrGxYoiumggDh4JeaTdhZdPmrQBQot5s3EN69Skw",
  "key24": "kZqBEypma2ypNmiX8XHGy4otrS5NE8gQv6L5A3EPbV6pftg5QrNwaUBKpwoCDCsntZBCdZsevgfQAU9k2dHWtdN",
  "key25": "Tmw9rzEJrum2G3DPQDZDwKhr8CzqZpuKfQYahQzyoN5LuJAFHYGvYFsRWhafwnZYxohB5VnYeGDrSCZMzmrR33M",
  "key26": "xT1MH1dVWbzYw3LRqzXwZ8hGkFtLtUA6E6H9EkJ5C7CQfvxXYnM9F2zJfuhMFkyP7wJBEkNunWGAmqZGjNWYi1J",
  "key27": "cDdEPFZkbtdCA97YpTE1CCYS22A7cNv8jHR4VqK5rHfhcgZcGvtARviGD3LihmUxN6enYhe5kmmnTCuoKcEVzrH",
  "key28": "62iZzw4rv2eYpkDQznxFCbtoSB6B2eVAVFxptEXhnU3t66yQbS4shtB8oiSXv2soSDfdt1swhTDAY3r9u2U8rg9x",
  "key29": "54bdCh3byyARDi8GgUt3pcuMFdGdCVaoSYBAiHJL1esnKLThs3Zxjktj6baVSvKAafscLBjBwPL8UBJwEkD221GN",
  "key30": "2b4S3SjYbcBQx9DxCKL7vmS5ddQqAt9KeMP5e4jKHN3MewathRiAGfPeALzeuzuChHHLTxGsi9xyR2bx3zRttjMk",
  "key31": "4Qaaa8jNeVj8AM4YUmV3URiijqFJpX1F5seNSnkrtQvo57KVTkGjiWg9HLpLjiPmricWqL9KZJqY77pXVj8skc7A",
  "key32": "3xq3Pz5K6gQV8UJSMYfRsGFn4pxQV1H4YhGptveWYVSXRgdNL8ULnvNy89tz32cumDNJEDVqjWUvmf3TtZfkyxZ",
  "key33": "4GUjDRacatYxBrtJzuivbAKyijii8HTGJ461gFfjPsgWwEZ9jxmeJfV7zC7wPDwdVQvi7mmH44G46i2jVTwBwZKg",
  "key34": "qdgYuaKKFMHdmza5eoTr6JaN243cGALbyepp6BdE5W6wNkJAb3qvhUbTwZLXyfguv99SSTHXx9K32MNs2DvbJiG",
  "key35": "2fBAd5pAouCYUhPH8hX3d3jbzfPVzyj4aQqYTW6vVDzo1s2PgWBkPoBQwzTi9NWb18pPbgp9qySHJcxyXyqbx1Rb",
  "key36": "4qeuM8DPjWcucXBQC6QHx4NcJVof25W35ecxfS272NbbVSLnbYVf5EkHkt85SyK4hir6Y5m7QFQyjupiPrCmyUWm",
  "key37": "BMPgZLnxXfP261wCkYo5yGHVuFQ8iSVBVRP9HukzDAER64ursoSKj8eawPVRPyLdUYGUjF3w742vySmgJqkMFxx",
  "key38": "2CiH7aSZPC3pVmXAX2qg5iBXgwx7NB2u7Q81cTYj9ixYwpiWdVDz6eZWrUwHo5hwBihg9KdFCvZmASCACSxdNkgi",
  "key39": "2Qt3hKvXMsY7XTePcmqua1ciko5bUjzF1L9yUMnMYhJWDpqzmpqJbR4nD8epLo2iipqU3gBLxynkKHf18w9V4CA5",
  "key40": "5afLHFMBFxNSYjG6STD1Qx6f6eYB59c9SxZN28Ztn2Vv7vrAFdThcuZQjKcc8aY9qjn78AGM43PWGfjvPBQJAEyN",
  "key41": "5ndbH9LXUCzhadXiufNDLNVCLYSv6wQwFHga1rrVy4AJ24tHHzC8m7KbR4Zw4wYcaFe6RkdYsHewUwLnZLytCpmf",
  "key42": "4u1KCdymkpA6QEQBHcVQQcqXamEZPYWcqxn16zSSiYkfnP7LrUwEcD8qQBoKB1jg9nKxzrnYGtjz4dvHB796SrJp",
  "key43": "oPqwDFvEcD9S6tWat8zv5oX14mBeydtBEBSREMg3sHQdXmgJWnptUyeDp7nDmxtaHLZyMRg2F3jinGZbBLrbC2Z",
  "key44": "2uNUT4eYwBfyVaLcg9gvg7hwYTjywZueUDHsbAw2JvjGoKsSio8dYGdiK1x4H3nbFTzW6MFR2WHTTU8r2h2dEyZw",
  "key45": "5bVXFXQjKSm657iN6EV73zdiCcan1NPAqppwbb9biVsb7adjwbGev3S8xH7PchCKwmJ4Z3EEKGeNUasib1tdbnCa"
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
