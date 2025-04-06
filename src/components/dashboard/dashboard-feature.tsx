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
    "4Xk5gJDkidAc1R8M5RPkY6SN4wxEexmzSKtSYfvYwUbEzUs7XEbajkCuysm4RggxEqCcT9ohryaUQFsSkh8NMkW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8KrZoH2pbo6QfoTGEziAjQ5bSXdJnyfiHjsnpYi71t7AZoeSq6MX7kqCffhBiv7tg2Zy7h6eRv9emViYzXgWiK",
  "key1": "3FVEx4otQ4W2MTKHZyV4PCPVjPJsM1iqFeWgS93EhE6vn6gxCAbFgMKhwyGg1urQE8z2FiyUs2X1498ogxxXknSn",
  "key2": "5tWqd3b7q23rF2oNemCUoKt4H3NVu3363GsZ2B2FgKcHRjYWSqwEjzcvxsoUKRjfu1jdXGCbsdXkWqw345RqtZfe",
  "key3": "4eLrmZM5B16maAmKVoLD3j767DacnYnLrhF1B5hozqG8QMy2vtZokmZ8QRE7fPgCh3AzhHduLTM92LjbDGoCKBCo",
  "key4": "3ahkt7pR5AJ3v26gD9nvxqpvTemjehhwUiXy7e1jFvjzkZMNxG5ddJ72QgvdeaS1mzSvNvnBeJjnqgGppv9K311M",
  "key5": "2MfJp3ifJgnYDA26bPHAKvGj3rhrR9CLq1nDcbh8KQoi4T2yvDL64sd8eXBywMHpF6TxQswQpuusDpYa4sVQrNmB",
  "key6": "4ug8MZWowmoXMfU1HyWqknPxefF8qDeVR7kNR7MJ4igazVarSjCAjWt7Ko6fr5uvCpZx29s922HWNBEBeCKwsoV3",
  "key7": "2pkbfWQN5wgNLUS1w2i6UecURwHwNPRVtK619rbusHXxXYbjKgq3EqiFFS6pQBM4EGKtsfDQL4tZsoH1hEVgwKAo",
  "key8": "42ys21ZKig1z7DxXLU3uz8ZqAkg7NteFjsWukUpehqkc3gGUJ5u7tvdp5yRKNGNwGXxBkGCHMfzVMcrnbcK6S89w",
  "key9": "5uMvnT5KEqfqXpQKucncxbdrrXrm3eDaBxqSYk9MLE7LrC9i74Q1GXq8rTXyFcJ3ZRXfjLaiaPidV85vYdnswKWx",
  "key10": "5CbzWLf2Zjqydy5j13zuBgNV2AtJ39URkembo3WpHxPfiQx7ngZmYcUM9r44sLRRqQr3pYCqz2UAdWVuhdHiXtTw",
  "key11": "5pCfm1CvkcTX17tB6QkAGN9eZNYPZooMc2hxVYzWc73SxTy5F59CizmrYkUvr1xGWwK18oF95FrqFucTndYuHQkG",
  "key12": "5qioyXLSWk6PLpiS9yFYCZcWXD6wD2ccMB12Eo7xD4Xqj1zK8WSjjKh5ybeTkZs9cGQhDcJiMQnqPovw4hsEsz3b",
  "key13": "WYdQzMHURV92anCoSAPKWQemUVaH7y1QADM5TrXSKZHWXoNCBwHHxvhrmYPVtDkgvHgbGiRduojh8EzE4zNxiau",
  "key14": "5SWr9wEM964wj8Roh5AWsVgQiAkvnK8vvCyFa71WcMkEqzePW9hQSxZsBdggxjiHxfJvQh2QZ29F4tciRuyPRL73",
  "key15": "433iiuDDLgoSEsctawFHMarKARJsVgwDMFySdrbWkCGhJtYY3RAys6U1E64JnySHNKPLAm5vHExPTkNdqGxxDCT5",
  "key16": "2zeMKhr88gkY8Qxc3skW5697cSPfc8N3oEhcZj6Z959yenop4WcgYw74BgsFDNWYEeAqo27RLEU4iRSMaV8hmeA7",
  "key17": "67ABMfTRzJLRueLL79aLWAbP9cKSBENumF5Fwvyig9wn4KHFYTcjPNHcX75coYFrHrJU3jRjkTfrW3HYsiWpbxB1",
  "key18": "35R79b9EGLwsh3PCDkXCH5WcbGbN1z1QqXhRDXQMNMGMVgj32A1szC4qKLJUjohHmZ6YEWNkResUyQ5sFLkKRhEx",
  "key19": "DMZL4jcyZiWtiKxAAfcESYpdWey9TvpVogjhXVVerC1xajudmVXFDuZX8mEoFj41t6z9fGsoForr4D1LYXCxxeX",
  "key20": "38NbujD9y2cVBx1xspMjw433DWFt7omUQBPBpceNKPzMpeVnZrtYkrJnm8v2VmudDy7nTEHRVhbbKNrxXDMEwoR8",
  "key21": "5ayMHd5t2BjNf77cbFGGzA4isiqRubWh9YvzqWwjeaXHZecTQo3REX48J99jJsRabVgHKCSfLrjee6jJhJmZ25Vr",
  "key22": "mmgJHJS1spdJwPENmpAtCe7DgAijA3YLsHn3MoNKQ4VJxbUo1dUZ8i6wZ25ySL6sdSH2gFdd7TQeekhWFp53CtC",
  "key23": "28wmvjfF89FBQSmeGLLhwQY3ECzaQPnkrbvwmgj4JTvLhPygLsUm1U5cpGtgNQb4GYeMYCZyS3LgwrkLSGdj9MvV",
  "key24": "55Gxo3ZFY8ZsatHkfQJvseHtH1GUyijgCzVME9XupNpGVRqz5kqkA3iJkiTbabXQD9zfPHbKs8Ek8EuSzvQ9dADt",
  "key25": "P2wEqu8zLav6v9M1bspTthtgYKtVR9ucJR8eE7igNKWZi8mzwowpoB3cqzdXzV9mDVYAQzK4338XBHZedma3oLW",
  "key26": "onn3JgnYd2dtgSZ3WqCXUFoQJ5ninij9Gd9m2Sf9NgFyR1mW6oQpyzHa84nT9oUhJNyyMKwKNLQiw6HXWQbr5e5",
  "key27": "22ndow1KDaPwoQqagb2K4kQcb8cLM2Ua7iKA7AKHwpS4fZB2YL4SVGDkGz22bQsmo76yiDUuDnEGv5dDUuFP8LW3",
  "key28": "63YJmLQg5iy9SathS5bsekCzPXwaoKFHsrXrJrMi7snzncTwHqs98H1UbEHyNwnLNK7bGX1DfNN3qbsreN9EbXaJ",
  "key29": "4mrkbqfqkXR855UBSzAL7BUEWPBAZaqgFENDFye9HGxbvjvzLMj6SJnNWKtRtFNsDPXRKCdZ1mKJQYy9G4AzWywv",
  "key30": "4oB12D75a9tGsf1gm2WWiQ3E7VfGgr1sGsaQF7PteBphSrRyQkgmUf7tCWsb3HZoqvcJdmKFurogrLcSpHkB8KZv",
  "key31": "4Tj6KQi4jCBkPkMAKL5os9idi1PX29Ruw3ppsgU7cvDTh623fg76qxdT9bXASpbjTVRhVnTaRUuRguk5XboSmdd9",
  "key32": "2uFitxk992fvPNyLuN3xy5iBkti2KbV1i9dEpx9aaw5tu6NTTvT9VY8VPzpxnBz89fKT37mRdCbBXuftuFh4Zugv",
  "key33": "3RXZ1uowBvrJco1gQBjQWQojmVRWDetyhi98iYE1G6xb2z2b522yKWYsabb5Y2b21bWQC6vaKAxcXBRKduLyPXMh",
  "key34": "3pdKLQ9Kp8XMaSHVGTDMvdWwBhZ3ZPUPeSwmT1wyq7H4NQd1BasyJwMVBdBjVYeTY75Uc9WtuS5DvSpBN9JFwQJi",
  "key35": "46CJyxCWJGaxqkQxASEw2bB27KEzT8AuAP6kuL2GCBzbULjXw4SAAzr7nMqZ5dUSzjb5pyaj9Cp6rHX1VrPmkBPt",
  "key36": "4TXoqPFh1cnwprr3s3jeLpj59U5Sk3rJeMHigd1sFY9pLc4sXkcSVCoKjzFyzysoRR6befqBdoatsAGV2Nndizah",
  "key37": "44NWMiyrTaTx7jMnjqNnh1AQWwdMxhkUZJTDCVVvfPsTEsQpJQZTJ2d3URs8NbiP34UjVVYXPQp8mTupPwwxkzyL",
  "key38": "5YwLtShVkPaLPk3NgxwQ7YJgPpEyLnWUp3Z4GB1bi4wVrrgAWUDmNMyScrUn6ti6igjfU17v2QQZg82b4vuWvaS5",
  "key39": "59mbahPcgdKgVFKun1kbZa7mDyxDnLiYSGE4BgpE41hXZej3mivrxjqFokdpHzVFzp7uhyYRh3ThMFwHBjhBMymo",
  "key40": "5qqqwi2rJ78EipbguPS435Uz5QiMcwJqzYWEmgkuto2QxxzpavanbHGzvLTQtqNPw9mJKtjgDV9CLMMrhzQMDCw9",
  "key41": "3CEGqgg4KAEGF7KZeX7v8vDXmMqDUzCryYhZReWfuEMKKZ78y4nJEo7pHJSKdps7tC8qL8SsJwf13aPVMyRg1N4o",
  "key42": "4ePjMT9HXrrS3MXVKFBm3tRs79h5qTQ1HSrDwQHcA3c1F7QCE7sq9DJvaGtH4KmWATFivV77ZMrTi9DhpcRLhd6V",
  "key43": "4fqxCA5tdZZ5Tog4aLwQW6hqPYvmBUt8B2gZvezhZ6vhQas9qEbPjUvkR3c92RM5gQ8RRGwerbJNnh8xn6cz8fEn",
  "key44": "5YKT61adRAaxf5h2GDcq2rYzySEkk8CShn4pya6UQ2PNtyR6jA63ygUZoA4q6joKK6ueVJ42a2d4AzhFiPsCMBpm",
  "key45": "2J26Xu2Hb3bBJSQRaLivZE3Cq1Datmt1u1fn8baBPgAezNo8PwphFTM71YSS9uPRuPteC5mFHqJ7sJQ9T8BYvDVv"
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
