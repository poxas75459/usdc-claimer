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
    "DVzNVthLAS1TecPNAFztA2GWXismD7Y5HTEoJAaGe4921JLGyzz8UzNvGWZhrtc2kaKWMEwfk3Nyf2ZF4eLFNwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3npgB9orZNWWWYazi5mtRUQbs57JqwCxw4Gp4FA92ERZt4wwdGnU6bfkSKHydFQ5E24NrbjDiZDmygPBh6J8tL33",
  "key1": "3qc9ECD492bR1X3EZAYjQgDLFpjHFbbstAeYTh48RpiTEEq8DAZ1iDuRafEuvupZ83KgyedU4dUM3b5CAisSJfV1",
  "key2": "3ABdVttUxToFG4NHhk8i3iHXHLmGMAc9fNos85bYSS7TKjfwX2JFXHVxseT9DeXwGPbboyZGbiYhZVzCtmwrqqSN",
  "key3": "5fBrfpUCQgjUP4SuRHLRc2t6jSM9Ub9bSGxonWLvkkiR2h1uqLDHWKjHYVkFJU6JP3BT32wdih5tg19VD54tfW12",
  "key4": "xvehLqjEhXKP5xwpWBTRE3meksCjCToQ8V5N2m9VBsyWgb36DiFdxwCVs7xQ6tebkYBRADtYtnsYPXcLUqAjEAY",
  "key5": "2DAj6j98MReLS3hVLRcDbCVZHS4ZrtcyG7KsWjZ1Xivq9NUZ5bbU3WiW6VzabFvT1U6PS8tCSkB5N2oWyKdYHvCT",
  "key6": "3rQrLPRy62wV4LZCF6ZKnKCVqyK1YDSp7sShF2drZsKrGBhTjgiNpfKjsggUM5eHmG9JkejgbZf1eaRHs6HYMsfJ",
  "key7": "47skmajgCW4cumFuz59WdSpGPT9wKWR2HhXHprA3HfoFxS2QW5gEZd6EQu57agekM3esZUi79xBaYA979zqvdpAP",
  "key8": "4PpzRz6rynV3TNFeUMwM4ZGV5DZeiHJXusVQFRGkcT1UBeGZSf3JCVthPKzbg3FPkyAZFjvR3sg2Pk9nQEiEFRUh",
  "key9": "3TFRN99NkVJPEV6KRZK4mkj38ZjkQWHepekF5dovnLTYXCHaDWpksnwFksuwqfHCoU17vFL91mwGKRpN3TCsG9bx",
  "key10": "3r8nUnqJSKb2MjN3UM3R6GdqJT6SQ27MpfhUR9ty3RwwAeCAn4BrTXdS21Q2KPEsDEJ3523scPG4jPxdiQiezkx",
  "key11": "39dDjTXJ4YSnDQkxW98HqxMdXcco9FBamQYnA2rbZzri6HikpFw3xnKU7r8z1nW69X1h15BDSZJRYQAFHyVz2TPK",
  "key12": "2aq51NTiNuFXMA4hTPusNA3zJnCwEDuWMFcUNZjwoQEFjDY9wJfgafNN5vaNNKB5rkgMtgfanzqbbKYdkngJsmZX",
  "key13": "55goW1YsZYZhNbecjfPsivhsFvbFBCwo3WrHp9HozvUeGUhQAA7HkPbVfJizoJ67qkXwiuhb1Q2EsfQxKmiGZRDk",
  "key14": "2shRxb4MvwB4JuaGZ4vURZfdrR3ZcC3t4uk3ii1GJePCTAFxMsCoME62dkSrN8DtPSy5ffgpa4MYWVdwF6ASffVt",
  "key15": "5NDTXbXdkrkEL5DLLJKpv1GhphUvH25DYYawqGshEAKPNkjrLrg6BKVUgtDCx4zs93Ld9LqwgE1BtxQfi1K4g4p",
  "key16": "57W4VHwJWEdnKx8PGK8oSxAnuGYN1cknxoSdXxw8jYB8QhiD12B3cwGWUPLtXqHZh1Yrk838WCJo8rpmnBrzsaWB",
  "key17": "2DXDLZC6v9xRHTEcrEUvJATrg2KdN4UMgR5WaHoZwtimTP8ahF1qwU8K8EQGwxGJjzSdo892zsXwxsCBranyzBdn",
  "key18": "5P26hLUh7qeTbd7UZ63ub7jHY9zeD8Sz72ec5RphCUNTuX8T5GFbeccLZ3P7CbmEYcUguDygvJYcWHEx3cFsCyma",
  "key19": "25xSVhAajsGZQBdFKUtcGTN4DEmi9ihMUwAaVHXdpKdeRxos8byAK27G6Fd9aCn9oNqUHkHj1Lg4fzUjhu1uP689",
  "key20": "i1hYez9Kxj5VoyzYHCVkXP8cwvTjrVryXgzEXXfxVUtDLQUzHeFihWdSyH8xALaBBKBfvDTfjGg2xsvuZZj5U3N",
  "key21": "4UiRLSNTFQuuFbx84JHaW8TMcxN7tdxPoKyodhkVtRav1RVrGKHMivQ4dFGTjHSdSwFvryx8FGFpNdoRN1SqWboh",
  "key22": "534B6gPzSYpSvA8QyqNVdfDXS4rBkD55c2jD9TR3SHStua8Dfwi2s69GEDrYr2whNBve3cFLeuph9NwqzWd4vc3g",
  "key23": "3snasrtBv7q6ornwzRYb9cgjkGrBdRmcEXA8QEeHUeUw9RaaPyA58H9LHCxf12c7YcCqSWx1aCRhwNiMQJZ3ZZHM",
  "key24": "yf1wqJYUCnBgS6rq1zCE3yTNriomv5JEHasvEVHojWcDRt7rRyci7TpEe3ne7tEeA7tVnRw7g5DZYsvUMNogeoT",
  "key25": "8oTPK6jFe78fu9QzxwqVtpLS3zVGxAfgT125MDq4LpSJdAGxFPHJk1Yc3AyZnu8ASEy6dWVJWTfPUDc7Q7HXUuK",
  "key26": "3UrzvWByKgkvaMs4jTzjAm9y1k5dj9SdPr4n65YSda5vbXeYobKscWkc4jSa8BUrjiP4jVvqETPRbTR5n54QzDn9",
  "key27": "56DsZkeiLSJyeH4MN3v1FVwUgLo2mpj88G1goDQ7FhBdEANuMAWmCwNHwGnaxveHxMJYM546CrrswH6GYt3nEXvR",
  "key28": "4cdA8shpLbNejvKurxtfuyvhvBFX157jumq5umkwfmDZhMtJf7YK4jdE59Gnru9RShNqnSp3X9xNhfx9wSu6DBNT",
  "key29": "QkBWqpRzeSKWRBaWRvEvv2LqRA6M2h3Jm4hFgCxgC6o113AiZRjbn2z5mFKVi8VyvqWuPVGSqB6uNpPok5y5pmP",
  "key30": "4aDyaTjYPorD75Kg9mh8iBKxg9useJsPjvkv3VS6QSzgt5Hn7J7c47qQmwEMV8qsWrKKqVCT9n43sjTnvebR49D",
  "key31": "eSbdqgZX26W6PMAXxmboFfZwRrW9mrW5gLqG9XFr5SXVatSHmo6QfUDEwWvLu31uX2rzQwCFrzqqVhcFfxUajcS",
  "key32": "59LuDXERDMGDywucELKndrR66Db5TE53wzyabfU3m61yG9gTkmBLrQ8kn17jMHTAWMtK3FpLchQ78rhEt7EFvdbz"
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
