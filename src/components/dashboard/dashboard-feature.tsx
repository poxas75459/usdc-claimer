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
    "33ZL9LEVfgyCQf3za6HCKB1xuU4V6yH48hsrGJe8KhPKJxLk6k32cZmZW6hneJtTh3CpNccoA2FnrphuTRbjCjK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yN1CGYULg9uZ45pMh7m7RpBANhWcyB7nEyCojqiTt3oafgZDSg93Ysx75XJmgo7FBftdJyPKENYdJJ5uPKmF7Nr",
  "key1": "54QxA5NggrYWwyWA9nUtaadCw4CFZZkoHE58EPxgjwPEXSXJVTbHJUd9tmJwdXbkiQGWNftiJfvy5JrUVqtnGQpF",
  "key2": "2QZPPnbrYvMJvjgZxnT3s591KMtqREK4A3UuHS2M1V8xS2X5jkiT25JHPixg9z52pKhTMZKEMo1Yftf7KNdoogND",
  "key3": "5Jah9orekosiyWnKbpLZ1SBpHBkHjRgGp7VDKv9mdeToyfav4bMLpg7ob5eNhtKUtusCjT3WbFmgukFoFiMtSqwo",
  "key4": "3MMiCp82E1P7H9N2JhxRQi6hpTUZjheJEfRFy7V3Ex5CKj6tt833kHSgZQa4Uris9G28B69TAqBUkG3mKHFYrmv9",
  "key5": "2gsYCNZsrvLYgtgcASxVB2itHPNosHWkJ4xRtfY7aWpicD4JLHqfN38tDr8w2nVbrBLExLPEorPYRSzamaKdCEDM",
  "key6": "2cZRMThZoYFaqt23aQLhepGEX8UmGK72LYySCbLFVoW5CrWdc6Gkr87VAkdARttjRteEsL7PE54TGGQsMFQirW4G",
  "key7": "5wGp9sne29C5AcDSto1kz2XYQX952gSFpvYfooWbxAD2ZFtXpxj5aNXfWf8MJpmYiWMnrDvzD2g8eZdjXUgFxiGL",
  "key8": "3JU1Fiq7kgWPzTPVaHHDLs5TPfBuu5tx7tDTaMnb65g283qgmQNd7eL7zwd4AN8gSZ2Ed38x7rJVyXKud32wjauH",
  "key9": "3VvCyteYqSeQAzYBN2DBWVqo9LUpC59aPz3xSWp6qPpCkwYdyafQ59Jk19KAhZJg4kHcfSyow6t1qJ3KQRXho4Aq",
  "key10": "4b7zsN3Bua6w6ivqHkUYnvdwd4MJYrpexPF4FyGbjwgxBDWaEzhc5cXKJKaqeusRLi6NeBJf3k3XuSVCQS64h5tU",
  "key11": "3D17sENLgpmwBhQFrB4F3A9KThSpoNzW37VUnQsHAFTwGh2ooEMTsnegA95sUa6U5yh3cqabbXEmmiJsELtNSrQM",
  "key12": "2yZan5VT2YjaXeTXdjWnw13iJJxxh4kp1JSv38cLM88VGChokSKYCa44MGBZxTpgsQHnhyqkTwq7TueZzCgRkPrs",
  "key13": "2ABn7ss4b1669e2wM23fr2UBpaaE8zDRWDqLWNabms9HjV6RTito6zzftzgEQxSzGk8oDDLAwurFp56GcPho5Mbr",
  "key14": "2HwzpNQhY3avXoSGCbnXMGJbAPyvyB4r4hDphaYWxC5sTDErm1dPNBgsUjgU2djnjWjjUtH2doMdrtTuvDas22s",
  "key15": "avZ1VpZqYow6Knc2GSh84cW3AyxPJWnvXb8HvgrrNsbVBTh1vWZYnGTBtW8dchvKHJasn5EABKDGwjUuMUaanKj",
  "key16": "2kuxPJYAKSsBGEaCY6pUsrPsyjmwS7qvZmB3CzWmHsrLHy3LP9vVXCAsW7jH1uDgbnZCvobafFsYNq4eUWiyYaFM",
  "key17": "4aUbY9ctQkKtbPP26zGgBvxCP692xmZ1MoiDnayHUrcRpwrKSSukXsFJnhBfsKS81djkSy5RByiMQyQG16raZ9ZQ",
  "key18": "5s4ufHwykJUkYQEEPV5kNDEt8vCx3ppFSort2HVUWHF3spgT9P9ueF12wg7xUCBr7WXfVfR7CaqbTUpW5XGHNTMi",
  "key19": "5pYs6jWLmNe5679R1DrNKrbrB1LasUsWKiSm9giz6iUrsiDk8VXvv4HysAp5ne4XeoQXw9STRTrLjEUMdqu52Vth",
  "key20": "3owcUtKcFAXVm8uRwgMS4aFjGbWAZz4q53gsZieScB2TJPRnHmLRdieaQ1tMTWYdkETeWN2gHGzARSczcVWi5B6z",
  "key21": "5wGzDafv558CVmmTqxmRJLpaJJ3RBd6uD2v8FvK1i5RiMmN4aJAGsN8YFSW3mTwSCW5jYGqhe5wQecsGwjbYgjw6",
  "key22": "57XSQXcwz3yEnaSGNphKVmyraKp7W4jmSCEYoFjwW4MZpG9gLyu9JfYUj6bV6vGABJD6JrFc8xyRscUDUZwoiiF3",
  "key23": "HnqneFfQ9w254zYfwsGPTdRynuLRxhJEVdgLRLDdPR9zPsneYTWhGM126kMeksHqxYPV6oZEVAjXMhEmkSsBbjm",
  "key24": "5V1MQuaoDd3aTAnqqnQ3Xw6mNhhztwRctUTCtpNpK2sG7MxU8W5QwL2BgLFpj8wcbDXXvbR7pMY3JDegZNW2M7LC",
  "key25": "3J1zahTgXAzHSTjQcHCJqr3JncD5fXJw9m1du3kmjwDw28DNEzx9CMLYCsMH3C3AGn5zrbwa6nLk5ydWVheGWBPT",
  "key26": "83f3v8kVbjTzeHAgRATwPmqornmG9B73ywhz9HhVEKDm8v5D3qmhNQi5BFULFLvvHsQ5EhaktrAwrFj54J8eLym",
  "key27": "3V8ASiELnjuYRSMdPn9hUdyFfaCQbiDQAUb1UhEogNg7SGguYqgKZpHWfMuPNcyBzY72qv7xY13F9fXxejKyeKzA",
  "key28": "2VsrmdPkq8DYFmrJW9JEZk7ZKTwSXZWCnsjQNjcNEEzW1YdAwmEzKqcyy6W75UFC4jfMCtNVaU6r7SrDqEjQzHq8",
  "key29": "3z93B7Yx6teMYWmijVi45zUEZ5ABPnBMXdGKgwGWFsN6gqUJwjnQAAGUGDV3JvKrawdxyiZcDTSPeFdeM6PisvR8",
  "key30": "3edPR62EqfgkQg5c9ZS7wfaRFKiqzDeP4B3uAwtCfT3HvKCdXETDbPYj29QeMbh8gVRR7HwpwcZRo4pozvMsVrLc",
  "key31": "2ynxtDt2BpMqA5eMKuYVchyTXWKR1xyeshHa14UzKfMg2LKBsUaZkKumqJnnsVfRLtSt5p9Uw1NZNUYMmnQWRQMk",
  "key32": "3Hv3aW3stPZDk1tPu8ttg1iSsR3x1UTDjfntiE4KVwnrH5khnRvAAZ8hvZiHH4UPnhNMfmvomztS1GPmijieMDVH",
  "key33": "2Hnx1k1oc5fCX8qbNjrKNGa9h9FhjgtpZCKpUjxPTVrqk6YmsqxZuJsj7eB1kCJUQ4bGYKFHPyapREB2LU6PT7iB",
  "key34": "2EfWYqPEbRZeZg4nPZ5X92UR7jFvZxP6Tr66535hAfmLincaq6jghL28Vk1KcsnNm5jjVAMtmnmBxFyNzQrv3Abe",
  "key35": "3qHidPqwjbVuNgfvGiaXyDU7D5CjrrxSH8D6tbTaUuggovHsCjDrGPvJEZmZHTobtjqE9Uq4UuVuj2TJPKkZJHNM",
  "key36": "DJdkr2HKmZviTRXSTAM5Lv94Ti9bhpWRUgQD484kpbebhtUiZhQf9ykD8TWeZb3A3Pdt9XpNYKpno4gNwcFDo4y",
  "key37": "534hS4wLWtY6HV9aojuHMSdLA6WxHJM5bHRfJXKGXJy6fYqW3XyvradYUQFy7ARhCPUs6cyQjoxha6p7Qwn1VBxg",
  "key38": "3HpHXBse8woa6mDkuQHQU99WwSBe512455aMRdzQSGTrQYB3JXKSXAzRP5XJGZvkQCu5Wz1anmirvg9snMkY4Wd",
  "key39": "5EB6UM5FDbAGiffhW7CRGgXq5vEfpNRsMTfoDRuiwjuHpxHte4MgEmcif8ZgzLDbCGgHK1x5PXGcByc9uzjEfvJM",
  "key40": "4Rqxpn6FSUBNdZ3FGwj98XuiEotxPWHDrTSrQ8bht2ZSVZU3YT8ZJX7sWwUPpZHBvYDsWdKaqtQRmYvWNU2hqPYF",
  "key41": "48tEdRi55AsA8aVAnjPZwJ1z3DmVXfCujt7kR4pjVxeB1yqiEBsr5bUyZqsH7fE48QVRVtXQEvBC94BnuxcvJ3mw",
  "key42": "5X5b3TyqKGPrUYfR2yCKsTkJ6uQkW11j51Y7nczH3pEYoRLeUdqXwqqCdRcx5HdLN5WqfTUmZbRdSnVmKfPdpAQc",
  "key43": "4n1hFJsyvSkxw3Hxjd1LMQNU2z23gcxSNFUGsQSKsqkTVkatmwBtCi7mKGm7hFCwBDSkz6Af2V38bqL51a4kmqS3",
  "key44": "2hFqGMxxVNkaz2LgnKi8sSHB3nNUgA35Y8j9n36RLX1Ud6ULvmreaqhMYxEAoDoifsCcpbmYB3aCY28FcXuMjX4V",
  "key45": "3V5wowdATMqPLRgGb4WoTBkYiGW8cWGuExS6sw2zaiVBPsVcNTDLFxTKz2zvtfaUtH2FZnqVUvEvsqr3igoi2pUA",
  "key46": "2tNWvc8Lpb5Az2EAFpxL5uMehzwGtGnyR3q7dLsbcHJgTRsHBPZu5g17PbSVeatvh8PZ5y2ZjxS6M5gx93zGQT9J",
  "key47": "ARWCqWhxcLeiMYprDa2QZ6aqyMYxJh2cVJpBDJMvKk49K7p8YktLiEB4GACKAtLBRNQtNNuRgVEQ8b3eVDSKeDL",
  "key48": "vdQXrvagLuvY9VwcbxipQLHan46YhjYjcsNhzBpyLSzehGccg56g47m76Z4eVaegQrQ4hRPxWa35BkkzF1g3vgS"
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
