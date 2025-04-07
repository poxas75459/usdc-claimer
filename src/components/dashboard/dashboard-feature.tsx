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
    "44Vx3615C5ZWU46g52RsKzdFQAkoA3KPgYHUy8HjCwRaXw242L6uZHPuWN9oeV4FKj7PHUQg8YNYe4PShkXefZEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ke6T3SaxV3k5XyDdfm44XC6kJSXkJKUAhQY1zo3J5yr7fKWkVfEdnJe1HjMev7oEEndiWfUaL9GBntm5J6WNWcg",
  "key1": "4KVTRoN3VYZu3f33H75AtHw8VgsRdPNjvHHFKJWh85PLY8HumSfY5ShmH7g71JfkLWYBA2rMPsfAvRYAYvhU3NKQ",
  "key2": "EbDAhpsfpiLMiJWyJ5o5m1dSdWgBa4datPX1Q6gj3qGAptYoexndXf8ZcYFw7aUtTaCqTsbfAY8tPupi5Zp7qiS",
  "key3": "5EM3DiFEns2UZHHB2YXDkAUNWLqmTJbQhaaz3a8KQDdGZXPwEthu5daRvwY4zZKkoFjVsFhi8XRMzXcipJisqKaa",
  "key4": "36j6XtPNZ42jNkRTVDxgSF1F2Z9xSiiqZ2JRZSc9r1Uwd1xTwpCu8MrnSYMMC5tFKoXDntSVjp7UfPHwBLn4wqN8",
  "key5": "4QXpeqUZKhznYZnE1DT1gEYDMA2Qrxs5XJWMUR3WKAfg6KCnRFFXWSDUiL3sLGHjcceY6J9Z4aCSPmv6Fyh6jitM",
  "key6": "4ig3TMW62ZQjD7p88B5eoYk9f83jX6CgxbN1Sc4YCj46mJYwLhmkYr8D6KMWhUBhAvWwcWgGkTYLLiobEyfcCUBp",
  "key7": "3GLXWY8nWqSqByrz3k85Vah6VLZYLGt2DNLk18fqojxSvGEXRGm8RsiPHafFHxjxcxvUbdj6wpc6qGnZiHrcv6HR",
  "key8": "575wFHTbqs4dbFdC44Lz3oJjjQQvuFDDgDAD7xT7AKBVpC73f4bsxsuALF22morHiS4zGarakkswwmEL6L4jj4bd",
  "key9": "z54Ly8FFJar8eELXcy6GhNxM7NLVHNrWchAr3vj2BRT1xYnX7hEvrSPmqy6j8Z2xrTBpYZ6iENq8h8UtMSPaGqJ",
  "key10": "5UaEWexifcYv8zcrUjxaa1kjjNBxUyx5XdPKav7U3XErAEsqZvpEa85tcQaoBghKhTCqDTFZaY6c18arsjSSe7S1",
  "key11": "5RdWST55gwvLNujbiZ7ievrfxWjSPxmh11TbZ6oYyGHzyMpVTKEoGz1Gnz7TLYTpVbQttBJWq8ThXF2tEjcqbq8k",
  "key12": "4q7cLXsufhR4aVsBxtGdNm8Q1kgCyGFFfdLph4Ne2gLSSrsG6tUYZL8yF5cV3DhVjmhzRjaf5SBNcQfK761sixMi",
  "key13": "4LFyhFvbtt1QgX1Tr74Laykj4ZigVdqE8nkkZgczRHfFCEqGuDw9eXj1Di8AanXX29qoGV9kQTQ3huj2nguoxvon",
  "key14": "2CtZgkon2RMMYaiiM2Ta9onX3YuHyyeEdnrG17zTzjVRGGYBgUto7262yvhMYqNoP6nW7tdpoCMMu9DpRvRMBG9g",
  "key15": "Pp1VX9V2xkP7xDMzmuQZg9qQ7btE6DkYbYUEVcjXGGpHzUDUvxTJ1KX19fuxyiEEVa2NoAuzvs3VWD2ZULtoj6S",
  "key16": "5cy7ta7iBoLjYU9WrEg3wJ3DPruU9NDWpe2n32Zxc6hWSbHa29xy5prUtMSV3MkZcCUZZtbfsx5aBHvPbmZ3Ncac",
  "key17": "4NykCHVKgtgf81mtAZQfieEoQfVtK3sMTjT1d2ynf5S3Tb42TgTGC1v3WYY7tFLKmJ7UYvh2xowU8fr6PwvVGo9b",
  "key18": "2BmJ4z6b4VvAQfuTYgaSFdUqe81EdPFLj3NQmgXeg5mssgEu4aiT2jQyyGmRgqQnvgpjMGV43dvwjjSDSHX5hEdh",
  "key19": "4SY5GJkkarxhcZs4fSmkdVZ1Fm7Y38BDMYWMhW3Jr2my34HvFbpSjszdAohagSedsxGiErDQGqMesBqL4anctQyi",
  "key20": "3fYSdLvLeT9wju2Y3JWc9zxp7pJ2XE2RLWbCeubrTVb4koJoeYuPyfpzTPuPRkeHYwwqkCA65UyG1jhqCrci1K8w",
  "key21": "3KPjuBXbXc4FJrGreDeJ2arjikYoMma27mAmVFsC1pY5t71RdUDNnWhMQ4FFeYhzMRadhheHUVz4fs3fGUySB7or",
  "key22": "2vubKuJdiywxeN9adjTRehZiaHUqM4h9pKPrtTCpzk2VSwk7KmBBA2avA3kNPSF4crqtRfkRSFoKi3JvoY8xuuFT",
  "key23": "4GtWk9JKRwgvcQYeYVVNVDh1Fbha3bBjACfNZK7VJjrQamgefWZ2nXF5sWNQCLnB1GUaVkhZxpDosHgUDr2F9Zm1",
  "key24": "59bBA7nEwQQrUt3ZdbMomAhnFnjk5rjRdehGiaRnv6biXxgPhR4WHthxZnPGycqH64YqteUQXdGo9roMQrkiAzXo",
  "key25": "5PjeDeC2MLUtP191uNhrFFetA9PT9U2W77afUeoxFdZ4448YvS2tt5QjAoXEL6usJRJvod99szXPhyt8Hr2hUJfr",
  "key26": "iScT9eh7P96NGmKRyPAbLEacLHmxvvNFV93eHmxXLSeR5fcaghSW5piiqSas3TfP8CNnRLstSuGZXfAhcDnw3BF",
  "key27": "3iyb6bdZ49vYfmQoi9pdV1DQR1XTrmg1mAd2cagjuD9KnytqCfccgRy2FgyC9RFBpzPTcKNT4biWuJZiLDVQZbwV",
  "key28": "5zJn5xhdBg6izwTTbyuxnQTQFB8pp9gjEzjvLtLUeMtXJnYXfHT5SBAxEo7ZfTxksKQML6FGzE2WEAkFub29F8Fk",
  "key29": "3xzfyfskyPDYep5tbQfma93dHtntSsGp6qLrVRKAE9qkKce1HPjGmdnvFd8mAbd73RvwT4mVmD6ePotG7dxv82hr",
  "key30": "4KKt7eu5Li5YGoDsoDhBZqr7i4D8z9BtyPdRfM8h1cAc4KEyBjoLZjdU2vb79t51pq6gZr5o1mxqDvHTxcwetWni",
  "key31": "q9xykDuaAaJZgszQaHpUnxwZBRcLsNBGNkbPjhPMkev2rX5rsxsedTCxMjKv86ajZniYPcs9J1cMoCjZqP7RZY8",
  "key32": "56TCUd62aX8wVzEqciGtHay8vZCurGS8qALux6nioRWjTmKfAr1kjECqTStwtqAmrh9VJDkmKHZw9ihfCj35Tipo",
  "key33": "3fDAuSHG5LVkYsCgMbKMrBxiXKT9mXP9AfpVKPFSP7uR3ACfTca4oXhqDZEvvdZM6X62nKmcuYkDEPamtAnYM7rQ",
  "key34": "3rKnypqb9voFqSBkJhNwBiR3HiMvKUJtXX2h9kMfq8HRpu1dEVmEYQ1bV2kkXD49mFkunkFVSMjB8B73HpLQD7x1",
  "key35": "4u2jBA4TwmhvS3EejzcpkBMkS7zrhFwLCqmELGSiVJJemV157voqAUoQLPGyYCagEjrA7gNH2DwECjvCR4X25VSY",
  "key36": "2crASb5ZcdPGsRUmStfEBFY2niubQsvpehHYbDTeN7Rn2Mww8JdQpb5XtrSgjUwC9nnx1sPPs3rCyKuqVAZifHj6",
  "key37": "2LkZpaB6m6SK3ohpV2SSjiKcJqy6ZdVv5mbydcfFUu6RVfWyuemDS6N7CwMpXLuDJsGr83x6ys1cv8vme5RU6Xvq",
  "key38": "3J6cTdKZTSJEgTnGnjphjRCAwbUTFAoMkcdoRokFFAVEpYj9vQ8K75b4GTNjqzmBx4GrX5ex5weyyTUPfbWmsrhQ",
  "key39": "3B2VD5b5gLb7anCVd2Mm3XZjqwkrXPR5Zh14xgSzNWP8Joef72KTJUeRyQABPAfuAvNqeLaTKGTrhLKgKjqxFSc4",
  "key40": "2MF1xUQjcCWG7EFcrn5kMPAx94Ky4PoKhgdDL7qFz9GNhrHZWTYL3otfHF5AjeHwCtp591VbzPmoezfEFaSCq4cs",
  "key41": "55pWowSGtnEVChF81fPYhQx9d27eQ7mQaXbm2CSoLVaYafCnpVBzmsYjWuW28tCUKDJFSNuPg6PHeEbEbRJ9TCpr",
  "key42": "2W1z8xSDfLCdx6qfNwTkGqMwrfHg9vU3kezDMzJRdA61WZUPijPmMJNc1XaS1p7ZgpdZxRDuswiJVMR67RdQpTww",
  "key43": "4A8Db5bvGnBvsiQf3vGAah1b68aXaGiLd9rJRVNYKn6Wfe8zbfHr16KbSL6XNogsWiaVfoegSNY9iFgHMTCVXtJd",
  "key44": "4X5MdTrUkqUZCwW2KUK4mZmabbkHRdGBMvVeVQzDJ69sFN5XWgG44vJ83xsA4qB53yMG45222VCibpzkJXVosMNG",
  "key45": "4p9PGTxXgvKkrRMoRDDDnxfVSFxdSmgV671ygg3U5ShzeGXYHAUwFZBtkiPdHZGtktE7Drztszq23sFn6YQyqtbY"
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
