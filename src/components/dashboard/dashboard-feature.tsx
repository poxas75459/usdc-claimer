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
    "3zHoiSbZ1Eyawpbgdrm58CWRU3u5m6A62t7icHcwVKamLaoN6kdu5NDh9rowJyX9L6ErLNDMCoCY6LM15kk6r1Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35aLgzfMMW5G2KN9xRGdVRLkiVMXP8HcVVbfMQoYJRKCfKMAh72xbpEUXTDccvchBQvFTd7tXWHUnGP34qaiSd15",
  "key1": "4Z5MRWMKYYdXXUEt94xUMPfenxqGSDUEuK324DMFvYhGwnJjkjPdrCG8CmTMLaYhkRFnRxJfAKKMn4bdgqSf8fdB",
  "key2": "4ZzR8Fu7HQL3DjaoNpX97vTjH6MTW16GtQTwU2TZMg31go9N6RegvcXDZxarxMWje29iFUvrJnDMt6VxPnQdd1Zj",
  "key3": "449Vn1xwLZgDo9XMbM6h2QXVK71B4UUik67cyhjKGAgz7uMMjAhBzn4e2Poz8nKLBBHjRQuYZmMSPdSKJLZRkiGD",
  "key4": "2hxQMWiyC3jtkAWNhdiZoj3CiriZGJBdLZ6doxNr4fAxzoXH1VqYa5xEbXcBbd7jQFqbS1pcu7wWgok7Rth22hhE",
  "key5": "3Pxz9iiaEzMwifuCrhoRHj4xxh7quQWj4VEtUSdtjNyJP3PpsAm21vGe5DTP4X4Y1bHC44aXp9WsweMN2ShuaQHw",
  "key6": "4sexJa81yu3QdEZLhVgAuoazMQhLEaMw3ai7DPuextGeXAovpf67eyhp23n42E4LgREjPvQJDBFpySoreEpQTbuX",
  "key7": "xt3RYLz5HxU496Zmk9zwrR7ocAiac5Y1NLWcYDE4WCyAxaoHddbxF511Hf3UNYBt7gVkZJApxUSB2BpTAu79cYr",
  "key8": "4g9ek1hd2F5nbPVGzUXcmj9Q99fj4a2JiLvG69KHn6bnVKZBkW6NHA7xkgorE6485J5XX2nHUPS47Fowdvqcbszw",
  "key9": "5ELg5PKPL1xLYFC433KwTnBU1yS716uBfR5pHqNKL6wi2P5V8wAmmJcXqR9qxuosUHtWmjTncMsCbm97VtJNq1MM",
  "key10": "53GiTrMss1x7X2krze7P32g4LgSj9frFnwyfuKqjMT7fU5KaC7YV5j2zRp5UJwuSmNQwK9R8nzGs8nG85YmGJrsw",
  "key11": "3xoUySX6QwyitiKq2drEJ49Lq7xbTnyzS7bQ9sX8BP5iBoqS2CMBkc1y5sbNXfYf47BuXs4bqXrBqh4SYndunUNB",
  "key12": "4CfkPVnqwNeTspsRcu9HWgNvkh7hQuxjgKEtDLzp9cdfLiAJD3AijjLfxPpvHPaC6D4hti15xkwGikFh7FosnaJX",
  "key13": "hewMsXQ4fFysbEuZzcNk9r9wXpBRDm2C7xEDVw3u226Hj4M9LYpP5GMHgavZUYjAtNhLryGWP6Fsnwi3oQmiUyP",
  "key14": "44qFweAPDBVA5nnAM2yvnGp9uNdyy8LrLuLuoaHAtSKFo6Yi7VK5WUZcSsDN68Ar5Vay541JGtycMtTT33TSsDLR",
  "key15": "52EwXX93c2mg8V8SiiKEwPCmYgqE1Z2yayg61fb2TXgYzuYg8P6T54Fozm9XWQrgezWTm5XWKgcEKujstNDhSKa2",
  "key16": "3vXZ8yfADrmwKLZwBhC8XRqeRGS3MEv5b79f1DP7WKsixJyA8HZxofCNZJyNUCQq1P8ZrUXiREQPpG1xisSn9d5S",
  "key17": "59khnTkz62EmLqdRyD1rrnofrSLU3P6viDRXQ3TiBo8oXEYAvCt7q3qrsUwVZTC4dmmFtgYn9YJWBzVVJUkjtFM6",
  "key18": "5FCrMvDfRaFnXUHN9TZ54WR1ERCcVw1abj8FzYGvDpH5oYgE3zcBBnnXH4pcByEtrC8PDXEeAVFtugve1rcKGpA2",
  "key19": "2ZmENnYo2Kbk6B1Z6VkN99VYN6ZGpkFQSZg1uPuoudDJv5ijKhW3iw5HYQBJfL6G8X2UDsTkgM2QHkVvKRVGuaZB",
  "key20": "3mbdcj5J7L6WNFBYfqkipzjWMVZdm9UjMK44BmTwwHjxUURA7a5WofzM8Vf4bWZwFT64tjxBarRZss3J1aa5pc2Q",
  "key21": "2HbtVw7VEsEddTVZpaWikZLMkdMkfY7cYBkmjZTTMBikgriNAhbARvJDfsnb2tme7ceLnx69fLRmC2ETHDAHmCNR",
  "key22": "3vGUiFJ6evhFHyqb6UMGxM6xPYtUhzqLDo1ox3xKCS66CkcpUzh47gDb7ans7SGfUvU4YZi2ZgM2jnG8GPMfdPjL",
  "key23": "3ekDNpPWsxfuWcTmD2ATxZTi1yhnQfyRaCkQzWDREHxgFEV3t7RYfWcLEnGyD4dwnSDYPm8NgtS9dCnEbG3WeYYX",
  "key24": "qHqMfSRMf1vmNiN66izxGAGGGAnBkxVpfJF3p6QSZVwQjqP1FoojJb93oge6eM6XhnZBFCtxBchaoA4dakYS2Ts",
  "key25": "4LzsckcASRH3xUVJ81RPctzRyHyTmxHZTsfvE8RX6fRaa4zmnfh2ouuXmWNBZafYgcbfFeqvP9ajpPRxrp4afgdZ",
  "key26": "2pZkzBSXrhQywZhnXpNnkQGsdvWZrB52dS2Smia6U2ZsVXP6uc1BaUYetQtWLoWU1Y6gyAPCeGucmQjEUZuE4JPG",
  "key27": "5oDt1yeNhyeGyKJdE4aY6oUnYeDDZ3ATKqCgFpAs2fSqanX2kHbzGnya4T4vmDYMxyosPDeMhdRCZkAQWvqrajbW",
  "key28": "2jo4gQBSn3es7AnTxYikQJLcsb5ahNaVxr2P9Zk68eyStZES8qWE3MTfPoYBKiSP2Tmus9vKGEXjYfxnhVn4iLvH",
  "key29": "2GdQgLcPpNxm8ZVeXaxT2zq6vY4nbRWDpzh6oaUn3a2zxsNudnF6e7Yny6h8ufVJ3eyYymbFRsheHXiMLSBAG1nu",
  "key30": "5YXpdLvHaiWUuUsvsAeaQrnTtryqFhNbkWktT6KMxcxUjxnQzDChX3d7Fo58RxNfCw24iPGE1mvz65ZYSFn6swW6",
  "key31": "5HyvBmtzCSVdB2FxddwF4mXS3QN77qhjhtHZ1YzFBhyYZNsPYZCDgwTxpvWkpSad9HzEU6TsB34Ta6KjAZ3uBpwc",
  "key32": "rXU3ThnuAA9yicd4jpzjUkUZ35y6g1uhqqPuCDTbGmbNVe7kjQ6EhSvczBNGDzSDRRqNdtFad7N4oUXGwxVJwn5",
  "key33": "3uCpWKNRnsLzPHZSH1em8KibzixCJpCEWkkhnttvpJ8wdg5Cm5Gzdfp1KiDsUiUUsYvizNAU141gmAtaBv1JS5uf",
  "key34": "1nqarn5iktiqiFpkASVqZCSUc6hjv2NSC111FVNa8yGnVMABD8cjTVzdStGUFUUb8vFAgNKxwLp13rJJ5Gcy344",
  "key35": "3G12rhsVmRyKDbpaotukpRmqr8GDqvATfMh4qjRwC7aSJTsYfXHpkUvuPawtGMSZdLvURN616xDXh5nBVH8ZKNYf",
  "key36": "pLv2B6Y69EUVn9w5anLXcPdRaAN327t5dDovdPQrVLPA97u6QPh1mwt538gsgrKx28ERnvapn1tBcH17fXW4YTy",
  "key37": "46sHAXZTHHgxLVChapSCd7V4CCRWZeTvCSD7A5aoYv9oR94SwjegLHnwvoMkjb8iz9cVaHkUqXbWtdDWukYQnC6e",
  "key38": "5NyuH8YtS3yCwq8TfNPjc64Fp267pbm7AP3NwoKFbJEEmtuAtZcWhHQ6fv12eohMRhmWH2tnDisbTCSec4zg12oR",
  "key39": "4unw1TjvV52raskxQ629YZwzcNSW3kEtLQ23Xc8gsR2rN1P1yVXh445HRmmAN3YhAWF8zdcJc4xfF6j9LTxmE1Rc",
  "key40": "RUDTKtCKz7vk6NRvwDwLPgWjsPoedvXSCACuznTwmJxSk4pQYwuySvbcs2ovE647ru5twyuqu1yL8PWUDGWzQJb",
  "key41": "6723VwZHdoCe5tizyZcsNLAVuWfgeJQnZi6No37Tvcmc9WXuEGuLB52MGQ7GUAFN6A9Zz7GRnBY5ro4RiAbjyn7n",
  "key42": "2douzTgeQyzWojgKmKRPxHwrooLvBH1KqXoR8KWi5XzzEdA37qDnXWqu3JpLPXP99QXbnLv4swu24tQH8GCTV92j",
  "key43": "4G2PsaZMPXk54kNYjudxhYTx9xphzDurSAsfK57mQwwiSjDfTrUbPxi9UthAHAgc4DzwWiVFeY8ibKXXjSRUuTmD",
  "key44": "4oSEeS1UkoLJ7kikFtexu68XyAMRv7dYWUJtGnHggvqyLhodJNwPJwQKUMiWRG235qdUyVVSEfWrkSR1BRAv2Zch"
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
