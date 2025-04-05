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
    "5AnZU7FrZVj4PEZes7Gs23SYbsFFE74rrMFVU6LtGTQY2rmxmozkTNP5LUZQx6DadNcKQtmLJMKfXgXKfnpQk8rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68PpeaNYTeig9skbZ6q4Rqitu9rjyNuu7XscohHE3UZ1wuwb8PXypDF92bLVtGd2J5Kx7yM9EBeNyDPLou4hGgz",
  "key1": "4NngwJVtXjMWdYPP7Xr6r7ymR3g3ubS8oJvajZWReLMe7ZifyvBb2GBo9FWXWL9gxjMwJSWKCpRJLgJTm3GVJQom",
  "key2": "5V5cZAxttWvWmPqcyoU4u3BcMZejqc75JLJoYZawoa4YMJE1BYcBGT6cCrjCwKZnujRZ6KLP3NVdDN94z1Snxf1",
  "key3": "5AbUTpibj9MzG6GaziAzvc6dYeNJtjyMjTfZTfX3rjfrAX55JqAzq2xyynqJkKWCKYLbAUQeVWaR2EJEpjecCsbL",
  "key4": "4khtfNyCp5tFjMJh24pNoRPu4snBL1SPdTBhbykjz6HdRPWNaiVjdTJ9x1VXubu9YZLhAeh9WY4t4FYzCw3ZhGou",
  "key5": "2VAfdwDSVoSiP1N6iCkS2rTYFv75jBdX911N4FFKtbSmYWN5BCTpLeF1SZMgKw77xYP6PN4xtHyBUnbfGnRSnSjD",
  "key6": "3LJ1MxqTFNhcxAQPotab22v18uirNqX2J8Rf7hHvKyjya59KWgkw23ZXxdfo8WgARFsRneDfxHWV9TUiPmRFExQZ",
  "key7": "ibR8twS6UKYXZJAKmLfxSrnjucYXMgiLH6XFrqCsF1gCCHAfchxB1XvzkfaLHibdic339ZRMbYXTQmmwqXtgWeu",
  "key8": "38tejmshXKDdv9n8y5HBhLKuSsk1YYCtCmQLZ79roBu24SJ8deAjqNLt4n3e3cZnmAvXCn389W22fQxWKtLPAdKs",
  "key9": "UenQ1afbqTvs9KV8JECtCz7jLKK2X7DtWnLx9AywGFa46AScHk4UBD3TmUwDuqWtAjy183HDYUziG9o1tAK1fQ8",
  "key10": "a6aASpyxH5Qo5trv2AiBepiUiHjrpKU3gYq7pogCNKEJ3VAzbYcuKiToF8FPAqtb2yLJYBuakHvi7cdZH6DFcWG",
  "key11": "2NPb6y1Ttvta1cF5riYxMCG9DFB22EX3ogj4z4KvNcQk6RL1C2Li2g83vrULdxtSMe3gFLJbHRFKpbEuwhoJ8TYJ",
  "key12": "4Gq96AVzBxsXXce9PBgbUHv9zEmhuz29e21EEXutSk9VNRk5KeMrfuheivyvqNmJztwbpU6ai9xSBSwB7vGASoAi",
  "key13": "5UjiUETH3JDQExct8MDwncVrZLhUAV6Argm9EgVjf6ZgCNYsVR5e647a3ad64C4hQTMQLCJAjoyiWoLmCTzEdbov",
  "key14": "2PUae7v524JJdCaXTNwhSaK1XMWCCmsL81PyxvGBhnk1dSzYaT2ZZKTcqNwsPrYaSonDE4qsgFWJVy2PY6bqiRCe",
  "key15": "291tQrgktrjDn9EAnWn4QWjc87P5eTLC7HMtV64otM94oKXAWPTfZf1kgjHVbrAVBSMHRnCuXjJt9poCM2hiZtMx",
  "key16": "2ZcN6SJUBZN4arhNwWmCvW5Ctaq8ekKJSB3zPKow51pCDFxdf1YGbkaQj8rDNo6RPcpm1AdB34gpKYwGxDY6D74M",
  "key17": "bfvqy9vyLNiLECLNXd5YSN23Q2xkpBfCUe7gd9yioN4pad2uEUKitwgzyY2jVncpzUpSArUrHrJiXctwEwA3vVX",
  "key18": "5cq9DgfJTpJRLJHTn1ZMPwdXFhs54fgeCTZ8zvQvvAzZ5LGps7RWETzs9HtQYoCwDD2STR3hDnPnm45NLxVCQeiP",
  "key19": "3JiE1HaqnupAPgmWxuKmPthfU2H8ufQVQzeWxgBsAQBtzjWWdy3mrneNvJDomAFEM4ofFP1ZfZd8wWUbp9zxauL9",
  "key20": "5QyQcyC1XxpUaykhBNzyngeM4iJRGmk79GVD2uhVXqCAoSj8GmSsivoKbpZkQZBYvTbTZVX46Ysqug2wR6USHNeu",
  "key21": "5aWm7su1ZwFGsbK5i4vApBmhbvsiT2abAzUBDbPNPSwenUm7PnE34oQWp8N3KTUt9ZLFzpR6MLQyyz21UJdG73bZ",
  "key22": "5YYpDuAwWKej7MxhN63FcSWoMfHQHy6y7vaX3qnfNiEYQWbdGoYCer77s34YmKdG6YNURrFHntiaDzqzJtXPFCSF",
  "key23": "66f1CKqM7s4CEAoCzhNecEi7oZ4F7x9iPGUAw3S5uZwimbQF1NdzDCV9WgpSJXz9aDQm8i82y5xoBbywZqo6BpzT",
  "key24": "3yhSZLrHnA9HocCLv93ShFrNWNjDkYLKLDmrmRN7aMkvnbE8wJPU4whGgvGgKjgsSN9fvAfJyucm6pif8Drkca6E",
  "key25": "2d62qK7sKqwRK2H8JrzCh8wTTy9QP547NSo1RYs6RVePQ5bATgsyY8BUNEfvQ8nb3CrL17drbAno3XAex7UX7GfK",
  "key26": "2Mt57qapYinVgoZiopUcQ2ScBJz499rZDkKbUVqVM2SScXrgSwnBJNuuwaucEJt3ftXtBSLMPmR4kwXuEHzsjsXg",
  "key27": "3XrLaywECfQFPm7m1hy13yQovWA3VtaMHkrtWqheyoqjdLkURYPgyvNZgM9zGVXKmvfAFyubYS43RW3pPD1A7tCt",
  "key28": "XNuXfTHZPo7YJmKDbuoiAe8fnG3waQ66sfktxCNGH9sEhUrQZbqSthYhNGRZfsJk8YypRqYVvrQrBfKsqK6jvWv",
  "key29": "4Z8vAgtuCjgdu2emiw9ZoyLzebEGxm1HcMrxHwxR5pox4cMnGpwxGV326uj1rbDDTbR8hN6pDyhkUm2yZXb5h5Q9",
  "key30": "31kCeeSZJbicteeMQt41tepGK5m3DceQs8jBwusAYqQE9Rxeauttg6N5WvY94yGif4bMReseBBGrroEb6o4U4US9",
  "key31": "FeFRFQRr38LTWzM85jYqataqTHtNu2k9WiXufn2yXK9Nv8d5Ujw8DvzfXb6FxiUqk2uds93UCCrcRHahBHWYcE7",
  "key32": "2o1yvzQYK4ps6RB2rJ3e1b1TLvUDtXYSv2HXLk2GH9PxKiD3MPxHnAG6DBwpecHNPjFuE23VArbKHREek5jQKLbd",
  "key33": "45is9D7NWf19Q1mQY6jxiU7Ak5hnNXCgfEjv34zeZhCffBcQU1WBABrjfC34suDgxPQ6yxYozSuRZXGKRAH6vML8",
  "key34": "4tUEfA16FmZx3gUb8tN8aochS1hgcm4aGDyfivqW3j4aPhQT1wT8VfQehL34muWgun5rryeTArPbGWCDzUzetvJe",
  "key35": "wqs31ovakZYHdBbRziyXre2HMq3AxBDBhAREFDCX81TTRuJ2ZaMsbU5CXZ1D3BjRUxDEhQJPjMQJDA3V8d5pFHU",
  "key36": "452Mg71oXptT5aHR1Upz4YR229FHTp6Yek7rxsjGc3sagt5FLFbyUqH92GY8iDSD8AAnMs9ojwjSUebsqypmUJ78",
  "key37": "3ziUg7CQtPPydWjD9QwisxP2ERZyEpCDPhWxLu7CkCoCFvdWJapHNCWZ6fJ2FB9PM7hHkPduY2Jfzat6XgJHsYPK",
  "key38": "44cxP89XovgY4UGZpXx1ys2qy6WhreLzmES77XVBKmEC8J5aiyPFy9jL1Gz6BoTsRGtwD1fU22iJzvSKgNtcgLny",
  "key39": "MqehiPvb62D2vRgWvqjM6HXHvBGEAawzwssJ7czpateLC4YkUVCRkt8EpizrX5AqteMrLcpELCGe8By1QJav3Mx",
  "key40": "5rdwdnycHPMAENRLZMvQtschGNM5is16Nz1BoadzemQ35fQBa8j6RHQBr1eqxS7Qrbx8RKZBS2b6kHoE9CCab6cM",
  "key41": "348kGxMknEaqs8DGMFtmVKPJnGgHLbgHcMvUQuymcSa6D8qxfMxt2RnWHQ2pQjbw34YVk9ezQM6SrT1UXrZfmHnH",
  "key42": "4JReh2fy5MetjAQmd7BizCBXiEuB2soXv1A1HC14boA6mfrZtqwqCtX9PJdfSYxdw1xpDrBkyJu1CnnpiU8ZQZm3",
  "key43": "5JGwGTyNEfzeM8a3ErKfKbrJiKM9szmBh5oBSonHUQWZqBG9fgma1ZpowbiH9D6jLptyKXibuoAADQBvUPuh9rDW",
  "key44": "E3ERLd3DtPM4mxctrb4a795b7q4psrbtTJMjdX5f8RJjiWWMzfCtgGjSWkUnLY48Ukd3j32Zb73e5vxcBVA3ifE",
  "key45": "4NJV7TCHGLMb2nAhSvtLLbBfV1YBA998zJ3ED3bVYVpQCnFC48FkMwATSWzxAbFtdD2x14fgmRntqjQbuCBKvUug",
  "key46": "2NX5Pn6ZvckFjyjQqvabG4qchMPRzGHtRzx4revBqXvJL2XSS5vuw1PDG6fnWWasSXf1apD4cArhbh8aK1t7agDM",
  "key47": "5pzAVTTJHE6gSueS5HdsXHUgihbHWj3bcyBJ9rHMKi5oYML8UbuMJhm9NoqJLxqhQUnFrd813euLhxssnmvpDaY9",
  "key48": "3i89NxrzYRBmXvPPey3VcMSqvymF17Be8iA9kDysikBYLG4yt7SJ931Jr439ezLJAfGBQqytJPaQ6rcgXjR7LntV"
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
