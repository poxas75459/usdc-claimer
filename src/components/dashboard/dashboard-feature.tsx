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
    "6792e4z6tHDbrQgFACDb78K7sfAeMRTLLumipfK6K88GZCyYZPMojsh3rQjfq2nKacjzzTJUfGAAuqYxinG4w8tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oURQq2KNZR5dfmtzVara8bXnfmaD5DYDHJczLpU7JT3MhSLAs9vPCYmaEaw6CV85QTb6HV5bWxZkaAtHedX8PzY",
  "key1": "PpTquK2vKLgVANrURTpMtKV9aotWmAJzQMebUXVFYfTJQ3zr1TL3Vz6t9kqNtwEztWHnqDCPAp9UkawfUGJYoFT",
  "key2": "3eyBHP2MmyQheqygWLizK6kyoTTgmAQpNKN8SVmvoZF8povGYEhF7UmrGXKZmLeaRhFMtNkLNsVL6vPr78JGSuZr",
  "key3": "1wNWYfqR2Bv8MKtR7P8j8YKv787zocSeW9AN3JJGk1jscc54fvLkvKiE7KHaZcW2Gi9CfqQfwAqUNb9rkEc7vgS",
  "key4": "Ea8jhyHYreaDjKkEccvZfSUscD2U8oBuUNQahwQ2dgVBV8GTcP8XQCWXnigJc1vkRn35ByZyyBRgNkQT1uY8zWB",
  "key5": "3TvAJVEXDb14dUvJ5nd98ZW78TZ8DXgFAUUwqGS8bNHF5mmKjNDAH7MfjTdsWxochv67UMndTN1UWEtFJHWGhggP",
  "key6": "5F1caUXhUzg4Gx4waBefT79LmN4ecfcNSQXoj3eZbTYbMfzYXPL5mVAgJHKFzsUNmdLetbWLa1AwgxYX3fQD9SzE",
  "key7": "4zpzTHp4JpEYGck3aLkc37RPN8i7U5xzgcGsV1ajrxCF5PtQ8PjuxnXPftnkVaXUf2tdZ5edThufDirLR2c5fz8v",
  "key8": "oCo3TNXyr1PwTJibqcCgpzfDwKp38qqb3YHKDFskGJrqnU8tp6sAGW54DahDEbHmv6k3EWDQJG6mHNJ7HhzBMfE",
  "key9": "tXFrsdWRFAdqtUuy2ogCU1XB7EzP6aN4nMdXEAPfq9SLB9siHqAfPjkfd2Y5VvTuLv1Q27apoYBkwSuRZ38eVKr",
  "key10": "3RxqtrWwmNSMHyJ935XdsJxhNz2ggbR9ofGZsRNsyhgfQZxv1Upo7hhURCBAYGibkVZnkMbm1GcGbAKa6RDRFXLM",
  "key11": "3ZrBufD79ySewn1hLtSM6MdeFPhGNLuZBufk778UqSG6ncpExsrB41JnRT6Pke2Kp83UKA9YVay2qLbEUoGZmKpV",
  "key12": "2Z4BMVuABsJDsKVbR5K5o7ZeQJWFkkjxZihdBNFWGNH2njuq4AHTZR9uB56FiA9VBvVKnR48msE8C4i6gyJTCZvb",
  "key13": "3x8FdmANEZUifvCNcUakA72CT3N6nEuRqhSPum8hVo2b1JF7ZuiU1Z8jrgGeDQwtHu4zeUF2TtxikSj7PhXfr9Th",
  "key14": "4y8WYy4uc7BHWzHgweb4gzLqsU7hNpjqEYjm4jRg697CdpGjtoB7RLdHwDvu1rVV7pUWNtXFzhGwTG4rXcaPEDmm",
  "key15": "5BnfDUatz6PsH93STBBUa4RpPdAyKmTLjgb4fsbBnCop9WsUKPc52msZDyWrY57zK5wLN6ftdTmWzjwVpgjj9Mqg",
  "key16": "3FfezW8KMLAhGkVrvT1SExuzQ2mJdQSHumqYKXDFDTguuzpBhnBpdvQFf17LD7G59V5zGDG9ZVYmhdBnAARsCQpT",
  "key17": "2YAJRr3FFjkBkxuskfP5NbaFVPh7RkgFBfjjyPCbtQTA8sLu8ZxRSyz4fhrjuwFf9yQF5STVB9USdsAxNLKdtbZn",
  "key18": "7Rhz1BxFsVqDpGaqgE9idpinVgzemmpJkh2Ztjheyyy8gzEcYzFuXNBj2kyHxRiZyABwQAavQSGQ4Z8BibCuU8G",
  "key19": "4geBoUCaU6BrdLsNWY4ypEo9d6unH33Y198H5u7xUK4RLFB7M5CtiHWigtNTV3yaQhKDqyhujhGfuqRvnn4QLNYd",
  "key20": "2VdeJCHfEmJ4271Zq35ajtxYh6LBqeSFMNQfkgPEr76iznfYa8KaW7rQMdXWP71a9gSKDd1gjDAK9SDEheDo379y",
  "key21": "W9L53t1TkHh8wWXyjyspdmYfsbyyUEFnNBFD2MyodKVnr8fXhsaX1DKfFuR9SM4gdWWPC1fPLSxWL8aPnNUnhKd",
  "key22": "3V1bgJZZgB4BTPp8A6XGertdFUhewtU9LvFhFjCXMJxdTupjehQdp1yFduNG1igp1sKEe9VUeQ2cxbojkUFHXr2E",
  "key23": "4G4FmtbPEcefYRF9WUaGecB9ZaQxJwmL9rLMtZtfGFBMr7S84hkrH9w1aaR9bKNLByCs7c5dN8G8LPMNKD1Rt5UG",
  "key24": "3sXmGKsXfpkS9e2DGXezT3HCgffA6eBt8jPWyiGXfwyn2Zw9w4Bu3hvQQkhQGpecd241ovKFHt8dM28dJzcuKdRA",
  "key25": "2rX9btSV3JXStY4ciGaNDhKwPZMho3PvAJVQZfYkgEtnkR2NbpVroRvkzLdezbQdpXzAcAd2bVJ1oggP7JXnks2V",
  "key26": "5GQQikAU6tFsghgFeuLbYu1Jb94fd2TTKw52b8YBuNpEByf4699EakgureuKTHJghJPRszFeLWco7nPPuyFthh54",
  "key27": "5KTkJRt5gBNXUHVkXEfVQDLBYdhJAu836YNKdfpZLDMWV63rJWLYzZD9juCauySwCBFjWeKCB4kKDGWQMfzZc9ua",
  "key28": "5VgCQQc9hUntEHjrL7iSEHY7D7SdXSwR1xDoPiBM63eYjpdyD2hjFduSBkgEpHaXaeA4to4r2u6YzHc8eDBy9reG",
  "key29": "Nx18J4tA4CFGWTMwUzLBe8ycMgqzA9ruhygs4vhsss5q8LmdJfXqwYPszQSfYZEKGjdB1tc2p74fMD1cqZdwkz6",
  "key30": "2T8gsHVYhSa4SqG5R8wjtcXHuhAtVQ3XDw2dnxaYn4DUtQUUwKajAdHT4dYfRx5dboJVu5im382LHtZ72nDtqEfX",
  "key31": "o4WzzSdCbB82y1WtqvaTNT8iyGWZnj7HeGkVmDHpYsdLsRwV2LYKypVzARmXqcbKnpQQUB7W4TVrX7vaXARCJpk",
  "key32": "seDFraeNvdM1qnQQoRrFXkdto1zHCheNBYg8Wsq2Fa1b3XLv8iyv8k7nDxqb2hGDQcL7YqpUWd6Fds6hmrRUg1M",
  "key33": "2xZPKBzd3WpUMp2Mc8JCqaFtab87BRApi4LcpyMUtUJSGTxPy8HEZYDBzJsfhu4ZhE5EHWKQ2QZaqhPDzwzz1aA9",
  "key34": "HdKUCJfwkUpCMYG2NNvVkZjnrNQk6rPB1RSxxdiJ2mAL1W7jEs6U5Gd8PbJdBF7DmgrYMxjNZQeRTviKVwCDFkC",
  "key35": "CU4d8D8en1CzkxPrT5rN6NwSaKgo7LAGa6GBeedzTSPvYGVDjubmGLskmK1Kcf2LhX1vYXiUxgggkoq9nkMSMgX",
  "key36": "3tcfU91i34kPQskbQoU5uNAmK5yo4XEK7unMVxs99rk2x85hFp1BtR7regmrkoVUXVdgh5QZSkMvzpc2xLNQrj43",
  "key37": "4HuyjKcTRwWtyiGj8wNzUUWxFFMMvDfqvuCmXmndoq8q83rA4sXiRDhhXFFxcgdKehPsJq8bLnq8YkuSWi5RKgHc",
  "key38": "4qFjmSkK6PsgC5fvs73iLQczJmHhw44HB7hoUvYgiFdd3pcejGqhLL5pwsmwQU2M4ioEMyBuWFiB3UeMpM2Zzyrm",
  "key39": "5A5yrsLk4ynwi7eKnVB3kPAPABQqg99AGzq2ozEXdzRhDt3ctDMsDoZ8DXh6yogYFvrhjvKNE6N8FyEfBfXSZsYP",
  "key40": "2B4SvYSysVGwcuaDfeGaH7c6PjHH9yffGgxzwu6Nw6Bvgkd8VVqGyW8yZhpTXL7K6ykCQiMvszrgQpKhLAn3TpG2",
  "key41": "5X1wPrjvj7jzjby6oePYKXSmAN78Yuv2yxTWtSaHPEDbgxsZTUdwSVHvZEhVG3irQkxQgac2VRhh8gQDeTYkoPEV",
  "key42": "3RzXNso5X4bfvNC4CMxtrP9UbQFMT4FME557zK1PeJE5LYH49oHeaARMtQdt34SgDNsAYX9JtME5xdZjZaUEVtT",
  "key43": "631gaXDWxqAgnCm99RM2UEU6KZnW9HVoYjjqRjNjjzmM5ouf1uwGyLiUJFLCgNZvvDyRra8grLHPn9HPUdsBovtw"
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
