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
    "5nQHn9MEHz8LC3p7DPo831PCqA4MUQS33MzsibmncJqW6tzdrM4c6CBBVgMQG8UZS7Twov3woeCwhbPJtZ2mpocR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkD6RmbsBwzyk4kbAg7dfSp5RVZYPZSdeBf2LKrF53ShBCyf42RKJRXaBbQmHUi1xVH98is7Nnew1MTovNbyhB4",
  "key1": "3RNRk8hCtjuBFLeqkjLvVDntdqvnmB6xTbB5TKpskAvsjqw6QyuVYY9t7Qb3zAE4Ve41sxVVUyRLhBC1bE54Ev7V",
  "key2": "ukxHowbPWsLmtabV13yATnPE1459euZZ8VTwaqng1NrRRyec5ryGr5KPC9x6FkcyG44mmEcBBXb6hZ3AtRKYf8t",
  "key3": "5i39EBSMnq5QWtYr8vrbNz8VWw7wwgcGtFMq76SpEKgKDX2EqSTb7rkPH36tAGeKkSdHQrp14eXpm2DTxrPNhaKA",
  "key4": "D4tJ8wYtMmdkT17jKbyVDhbn8s3TDVXi1CdLHMSpGpoexNtmPLfkGZV7YEf2oiUVHBWcHAz4L2QoMQYKXU4Lrcm",
  "key5": "2uDWhYNsiw2zG3gAthjysgUmrSziYpXcqhNJj3PYeHScuRmmAQjHRqSiL4QDyunGxUQZ8Nok5XXWsCqsxViyEu9H",
  "key6": "MtFdEWAfYifg1LpqCWY2XkEAerjrudKxr1U4SL2TpRVXiiVR1A9nKtStpH2Zg8hg8odSV41f5a7FLe4jf7mtw2U",
  "key7": "4eM1XekhHPeyeNXvxgNbtNzGVeMcEeASR2KpDfKyLEM8PnSkXA9tk7GYgQTkdr75wZoddBLVY7ffdEH1WMt67c69",
  "key8": "7CJcFwvaNSSuh2pPy5Vh86VCh7JsajXvtEHa4RG6TY5yVmYiewqKr1JoAec4WaP67M8q6uJKqzetjoXEiLW6zn4",
  "key9": "bddJj8d4tGZfh6szhAAP4pg29AaZBLhDeqZUHyPCWHop1jBT9HGfEjpVDp7ezGnDN3RFikm8L5d8XebAGJ4apmr",
  "key10": "igGt15ACf5RmmvT6Ytyj8P7G7Sm1pBCcqSEVW3P14YctB2i37yzG94fYuQBfYSDr9pZFELHpD1qrgKSWQaNxDiH",
  "key11": "5xWvUurPHswAVHFwfpVQa67aK1JRdRS9m1FP8ivvCnozyDKAtebu26z22BN6wJpky7fcPiaMxvXvMSfFG4B5v3Ke",
  "key12": "5F1pg2iJZtvDvjRcqWHbCw8y4G8NTeYX6NbUZGauWAFm1vnvFt7siWgPVWxqj5NjowGVSKv6mFWcQCMeMPjpvLiU",
  "key13": "2VbE8KfrU4btCcikRkCLcDjS78iY9jzJkyE5viPPhYX8oMCg9L5JqcqNYafUo8XWotymusc6FuLRQW9BpwMKDEGd",
  "key14": "UnXLvBr8aMCDVAWKUzWEMYAWMEmbCaJjM8TSLyWayA4nuKCtyn3WLkvVYCcm5N4ZYXaeZSkUmPYqrtBZ9HozY9M",
  "key15": "43EDtsgR2ZiV2R3Kf4wDW85ubPB7PuRc4EqrfPoMKk6zMAGspQrhEE7nELKuVrMYtum7s7ck4v6bBx6HJESx1DnH",
  "key16": "2h6aSVAhgue2TPhFXZMADU4eatJG7frAJcQtKPpBFgkGCUmk9krMxwTLu3jwjDs8VKycDETFhxBJehUyZ3js23yP",
  "key17": "4ec9aoPrYRp8Rd8K9dGEoo976Tkr1Tx8C8HUp2eRmJvVwQh75E4HGDkQHq5yRbzaMxRLCN5JLXRKA2wqoMLKH69q",
  "key18": "3tJihuc2JrwevPLyXUvueM4k4aXTxAf3ykx9CbDH45rSLcLiLnoZeqMB4VHCsb2v2eGphpHohCGBFCcsA7RMfWPw",
  "key19": "3Lwx1CM4YQL4tvGo9ucqbQ9HnN2kZciNvbgGqYHGeoL6bEarDWaFVgzc4e6JwtsusVa56F8QopkoggeTThyd1E64",
  "key20": "4QJQMpMB9gzjATH46zwNKXRie7xsco7qNhYSBtq5yF2YKjRz57RRnukvqthTkknXUgxGCESo4DztPJfHs9ow7eqa",
  "key21": "2s9vAJhqB8kAQx4wzB2XpqLa3KNZeNvuEnHJWGN8AbtutuHKPMXUWDJA2xWn36K7zBEBq3e3eE7CEVcKB5psf8q2",
  "key22": "3VRwbTcEFAXWq2QYQjycpwbgZb675eQnMFYmZwjRBtmcW67uuN7b1m594xmtNfD9TX5xmTK4v8YfSM5jX7i4Cx66",
  "key23": "YgEUqmsyYzsM2Cin6ZGD4biqDKP1TGY43dQj2Rb4F7BSdi75bDjjDxgzJF7Qh94XoGBPcSSFn23pBGPnBEjKBpE",
  "key24": "5m2QiEzEqCFHYMJ4pZ8bVJyWvsR442uyJbp5x1RjKyWGyV7UgRUbXdrEgFWvybERrtonjMWNgdY8R5hWvoNaVWDM",
  "key25": "2Lv6k2sdnL83ReJwJeYF6xHEWWtBXD2guZviDTNSvDxAHBfJmfEwv3Y4H6dYnc26BQSvzjRETMsKTtEhtEe12LQB",
  "key26": "3ozfzenZz38HvYtimAq3X2C3xPixoYMw5aCX5ryMjbhdET5PVUQ9oMWkE5kZMd6ffsJTxL7Eu5kNzY1oDN1BGY9N",
  "key27": "2d1jbXGsBPgiwT2qRfLhusRp6iWeGxQcAegNqcpfZ7Z4KBmzBBZMgcmVTbFKcybwKGJEWkdDE41M9wBDUeQ9Y3Uw",
  "key28": "4J1CnUqeR2oeVzvyCj3b5uAZyvXc9MvSjTzmdttCWGnygUCZ7oRGRovCCKJd26hXarwKpzYZ2MnsjY4nvCdinocQ",
  "key29": "4mPkeg9LpXrEq1rzk48L9kwZAhNQTn67rFmbrjKRAbkbi4QKLGA1KhATBRJi5z8DXpsqewc3XCyXfgUYLQFrLPLb",
  "key30": "38SqRYGQRaMGe4X83aDoU3nUFoEduno9ZiqYVZ5zdJ49FAg489sGqhFsiqCJd6obtY7rDMvikK1P1nnwWm6yzcTu",
  "key31": "4FaEHfDJMwRsh2Gx8HE1ZYH4PYWZEe4u2qT4YmoMnVRHF1er8SQAg6QZ3gk3uz5B8YXi1ouGGZhPczk13co4E6k9",
  "key32": "2WpcRiJxUFTqmQW4xiW2wkdKS7Bi5pxEnJyKTA95rpdQ5YXp4bAXN4ju18qHyjYMXWgXLUYCihgGKxMv8gJAYmcP",
  "key33": "2eqwbTCwQd1PfKevJSc3NNLq1ocmDtkWWnXSYAeKZUHQiWuHsyCuMSXv6tqcQQM9mde6erNCfj194p6wReuVtT9a",
  "key34": "aaHnvLETgjvdgXNaiYaZx4DXipfybVoFAoiYXbbBjhZF5yxfUuarbqZmXpipZWqXbKjfR96yqoZyLbptt76cWRK",
  "key35": "25qKzK1hXkhRpq3swC4UciEdUmgfqaALuCsjK6yqA6JSiRhx6b3DjsxYWqGiWsvTvRnxjarUqk9SNWz11ZDVgbCN",
  "key36": "4JnUUy94RMF6CTDuLBJVMWym4niacfuUAd2T8Kt2VVAc9smDG7LQjmb5EEhESegcBLgBrCpExPihR8EF7S7ik3oq",
  "key37": "2ajrxZ8KMatXEaWVT2mFrg2FbqLvYh1BumrM2RoEwUcs1yLTPq8NCszvZ9aHeWZ1LCsS5iDw1nahk3et64Reo3XX",
  "key38": "2iAXSpbsywErQEXHX7jV5LQRs4tDA2sEkbZqyiQN9ZSPXzy99kk6jjUhdsHDAiJcksTSNJ1hMAoShtWMTJ49srn1",
  "key39": "28gJCGUyEaFvoaQGXAMZTmHitupMft486rrJsvXSwTkbmX773DDTU9yoSKzNNnKFpDVdG33SYumobHC4tbYUCHET",
  "key40": "5X6BtuEwzeRJF5XGujdEoEBQY5UCWv7v3NVXopbDQSW4RwTpKkKRhbiZs7Y7zowwin11F2mhYy8GH893vh7qavC5",
  "key41": "5NSumAk6yCSZxZsQXGPtXXDAWZuWr4hWnxzNZrqH5w4QiSRJyQtELM9JkSHJw1RDv51y8YLXHryvYgK2WDkRg43H",
  "key42": "2EJrabdxqEpCmDJt9oj3vJBPDn16JzYq4DcX41Uyj83FzSpd3P2rkfPeU5FoTuY1CM2R4v4DyYkMjX9EFB25FHJF",
  "key43": "23wF4KAx1agKTJhi3tPZSNx2F1CcD369GzcDDqK2zkiP9cWidhyEUaLVok7ptSwc5JdhHPrs7NDHnt94Nvpb4gSQ",
  "key44": "4saYGn8kguBnAdoVSCSEHQXYrogo8QTzqCTyJB9mVVCGUK96529Z9VxCGUBg1u3VnCxFPj3LJT3NWYFps5deUM3p",
  "key45": "xU3npZYY9JyzU2LvnuWP6BcH8wV5LkEpKyQBd6yhCB6FbN3Qfebj7bLBkPboF5SeUvvREvpjgqd15mjrJDGruWG",
  "key46": "2YbqCDJDn7xYNBNkFcXjKUMdjeuVHNgzGTiCepsHQZi3eZSvkJURZm26Sj9f1qwqtTpqiq71hcq7CRTT7AHRsDaK",
  "key47": "3SLszLoNk6WcYTfhYWVzyzZQdCLDsswo24qpf3WuV1y4SoqAwyn16t4CK17grTWLE57mriy7Mg5i8bKtpz1UqtUH"
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
