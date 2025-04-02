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
    "4PNPBtLgnPZ7dY1uonq6qHRFL7CYLPSUes6bfpN31GTBSBSHPAfFqPMrssiLzezmnuPUAXFFsGHZh6rkboYYjv26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qASTkGB4prXLhpLoy191Z7xQbuzE7pmrFpBKLjorNHpSTKvtPz9hDLxP6oehQMmctRvwUbTcJEdms9xgWMgNv7b",
  "key1": "5Sh9hSnpxx2oivPanqP8WoreN5vVmES9e9wqC3h8T6wJPTq7aSqfLR8rQ9Zi2ACByCqLF4dBMe8MsUndceKPdt8A",
  "key2": "594dRuJATSEgavXFBnA8UZZfouEjL6Y9Eo6r6Gy7DprRDKcszk3ygYUDLyYSb8wADFfQiNp2rJtiWi4msw4ippF6",
  "key3": "4AJdDLQN42HXWRr8RmZ4xgnLAZWTFBW8X7Sh1M2Mdii8YSRrLDWj9d9WhSHySRipZKoeKmpXcXWGAmJXP7HNxo6N",
  "key4": "5rW1NVdyh3DLm3AXwwGJTUGCyZaB7LEQovGtTRDJiXcNP2gMn7k3yG8R4kRjP4u4stjJ2r1ohNjDwNpfu72pzsDA",
  "key5": "5TLYK6JSPUdTWS7RvM4VP9mPScN7U3Wjc8z6ZW6nfaJJHCjU5G1zpFuqPpu6FEFroPsEJp29irLC1Kdp8Z8Nm1Ve",
  "key6": "2zS8rpP68jrczyHhN9VrGrGTGWmLKtcqhtf5SFygpEGZePheufA9HonGzxSweRVt9Lr8w35zFdemEdZuQGgFzFvP",
  "key7": "rQKtkEhDhCiW4DoCFBiEL3vdoxQyeCKhg2kxvPvErm6ZSpuTKpccmznpbxMdKbo8rbDMeMbgq2xZrJZzSW4WgSU",
  "key8": "3zvmz35v6te16wTLLb3KZsnGYu2hHNfB7QpAkFddSUDNYhGD27gpCtLXegQbk9KpaFUp4FG9PGVr5avg8FPiM1HW",
  "key9": "ZRchnAVyhdqptyPD3iS5ZZkgANzkQmpWxBB9n14J1mdT2b2tu7wRgk91DHpoAq2mr9dUgez3hgigrBVetH8YpnP",
  "key10": "3pdDneZ1ZVSziuVG6vrPg5DiGB5hz5bESeDCGRiTeuj84mjekF1ApqHsGxXxzQaSTEQGLgxcyrDaYL2ykNcmve4J",
  "key11": "3nfbZ3nqAHW7Lft12zkNrJLJCHaT5JyEF1SGPFCX4cwJRg7gaih8Q2oiVCTr2jaeTWAmgZRkatCMTEJYiphXLU5C",
  "key12": "2vWCzYgFX57Kt86nARuTFqPYSjiznPoiJBZ67CmA8A2AYegpxYhGdneCRjChtNk6AtjzgFpcGu7JAN4hn5VEQ7Y4",
  "key13": "5okt6QRwFc3fkrmDiM4JGusib1avmQWGhPjc6Xz9UVsax4tUYDMc3pBPRPDtCnZQRjRzDQwo9W4TnNf8yH2zc3z8",
  "key14": "5UN1MeTKQShTdXPc9mcj9aQm2tJaYt6ajKnk4niw8XBD887KVgvQKziwhKD6NN6gTA6hz8vFEJzZaJXzUcLBAh7k",
  "key15": "5bGdZZNFUKkwjzu2hUzQWVfrPgCfkHEm5pJCZZ65Pw8dv5DEKiFd1hqZsp91oUbVXWkw9EdfXNLSTi6R8MCAuC2o",
  "key16": "2CCWCk5cGbyToUbf6bkryJ97nnQ4FoEr5s1AcxN7DMzPGEwPCkvJVppM3pw3pXbCCirg9LSzKJZiHF2mDab1AKHe",
  "key17": "4Kk7WAMCrp9UbvVJHMF8jr1dXEzeWDj2Cdygskj8rot2Ep9tZoWoukBJ63oqXfHrMemShzFDdai3gy2yw5THNMVH",
  "key18": "4MtcEFLg7RovyEnzYYM5t6ysN5iLpmzeTxypVwQWLBwhB4Y1CmVpPQHgXw2iqatgiCDWdTrWrBVi7Vi9gmEWsQuR",
  "key19": "3yNineRgwd3H7hyU4CNSo1VBs21WTq1Zh6aVNvBk4qD6TLGV4o42HCEZ2j1E1or8nDRP6pfKijLToRyt2A63RDmw",
  "key20": "4uBfZdqbf1b4kQh1qjvixACzd7GpzGJ1dfcN3sU8RWTwSFYGf3yTLcYU78ach9opr6KN42sjxHecM5WYBs7yg3L",
  "key21": "jsgbsVjZrDKS8ZeuGNJvrm2WAFa1gDmWNTtSNE685bT7kBUkUzSc1e5ioWReafif5QRxWt6f6ZKLZCKwjRDh4FN",
  "key22": "skkSwe9X9sTZn4Q4vDthA76dfg2EcW4igp3iRKoxUwE1VuGjsueQNzn87we4djZZWhR1SenihY1UDdMEoA3vR4k",
  "key23": "s96ySQ9svDp1XA7tWR2NdR9EgsYi3GNz9efQVpQDLyxYTeekVuCKmrHo6zDbemtzx58XFFYnFi1rdnCKz3P8ney",
  "key24": "5XHwSNLLRgAnhyQcSHoUyX3BjwUFbACj3158daHzEKhgmizLGAvdXfQQ9LEuge7KWM4cE5XowcCquBQLpjrG8D2E",
  "key25": "3cVvuXPQzK5beC5vJwjpkcjz6aZZp8r8thpd2SAUtY6BK5CkabB2iFmKyLTQRXQbaCbQE6mnoGb76KFg3hn45QgD",
  "key26": "3phPjiPLf3Kxvp685GuutcfReEiEA6c5MTn79LQtbyWVx1k1aPxhiaoJUXRFC5pfMJp8ZgNxBjdVXvAr5b9mxFXq",
  "key27": "HUqceW2Kss42E9qeZFipRL5q3oX8WoLUcg88StY6ECK46ejyBjn2fDUFtzRVC7NfWEQPaGxXnVXSwPwMX9mPHSL",
  "key28": "65NFnEKyxcDk8UJanx3peNZqVmfHHvmPmouASm6UvR2oZpPiMRN5NVPoTS4NCiMS3VQcwnEUmJVyFHnCoSdxQ2yv",
  "key29": "49sJaD5TQLN85nhumbxo3JA4JD6QNFoDcTLo41DSQjHa3c5o53dTEsSBWhGxmPg13LKVvBcESrQZc53V1Hi6xunM",
  "key30": "45ZZfbSjdsaRgrzh6jv4Pf25EfH2t8JBjsLUZSsakA12mTFJ7Mevcvig44ahn7ixCRypwFQwNHZnN3AgEQtaJX9v",
  "key31": "52h7aMCiUbRx99ErrkmWMx3JZaeF6P76iiCxFK7BKLujUarrUw1nPa4CLLWyzT5oQp9aZMMhedvqVx3i9F8Y5QGR",
  "key32": "qC1Pv2pt5UDL1rJrricL8h8AiuvCPsQ6Grj5BZi2zgQT9hQJBK8EZpxHd41qx2cbP1doA1EwdeyCqEtsq52EU5i",
  "key33": "255k8ZwWMAZ7LpPkUnJfsmgKZw4ry9Uaf2epiXKAiQDeefScXCA5LNnLy4PtdUmAWZKEAecat5yED75CBPozbHdm",
  "key34": "4rPpeC1EmvdiPSBRE4S9cjpqL5w6saGhbuZnchM4wfYpyAXiU6xZtpDLARSxaM9cpXMymhmHX8KM86Qawuj3BL2d",
  "key35": "2kUDT5dUKoy5WZYG8mdyQdZp52qpwQuvQkcQLwHD4ZXKJFep3mf1xVHDrHsvEqPdyZmJdwfM9kNsq2ntyKU4qSVG",
  "key36": "49DZeD9Kp4suhxuE7GpZHcMR138UPShdjS8UGKPqpwc4Mwq72PE2iuy3M1xYvpMtAWFWZ8qjm36YEU6sUWNXhpYG",
  "key37": "qNbagjXXXGRDM41qPrRQXDatPmTtppBqAZmjS7R6EMajcwC5SPfYrJJpNZFeV2KbQGUvvE4ezwp2GnUzJ23f8XV",
  "key38": "5Zp3e6wQ2b4hY7ZgoN9rHDhFE3FJbzhbFUiRQ23sXVVEhPP6C7CNgZhHpUViKBz1xAY8ZHtAPpQaJEngdVky4Ft8",
  "key39": "3BkVLdmP37UESjScE1XW5hJFbig3xrZUAHBuvW3RW5ZXFc6vQ4vN1KhzXgg5XuSkfG4rCKPGemp8fZvwyX8ff6XK",
  "key40": "39sAvryYfejTtTU7Hz9Av1d6oMJQXwoCXTXWNhjhaQUbesex46jAu8Y19HTHY7jWbTy71WtkhpD7uKnc5r5hXLNP",
  "key41": "3zxPL7nXagGQQcAXyeApFUHPb8WLYHSPikygME2NNDGPQgURLwGsGr9YRz97oQNdBbUkaTRyYwLuRf3NFYxf1yQo",
  "key42": "SbBqT5SEMEiREhXL7osZe1KNrVNxVUEh4CKvNAMH8sQASpc4GtxCrs5zAMXo8KSmhS82vrQgjmHdvBnoyhUveRt"
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
