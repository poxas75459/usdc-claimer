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
    "5mZ9w1DSamYNNFvzHfweurgNJCPyahZfeSebrKpHbxwjULTte1aKszXHypuEnGnmwoXTXdHdhfCCXNsQpAt2htHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLB6Ng91PAbbEF8EKxQejpFGT4kvFQ5ewQxkPud4jLngC31vPSAD25QZCzF21iJfs46M2hb62T4yhhfJWQFvkkF",
  "key1": "29pPvYZ6nqY2kpT11Aad6rVCFA67mzfqrj8cK8Q7PYm8x6r1mRb7d2fRF5yVntJoNiBgzjZWRkEJF3EbcgLUUu9C",
  "key2": "65bmwGiMNThSV7rweWhTBEvMCmkH1sSd2CiNbQT93g7NX4Q6L3Bh7FC8vkVhY6TFhFNtpcSZ8HCYKurRG41jmTpF",
  "key3": "tw6ijSmpZ7aLW1nc8rqZXbLbF9ezaZpykaTmqRPxePXdsm7z872gHwyH3WRde7Lr7N1ARgyy5fP9x8fobnraZjx",
  "key4": "672oLJjyZAbbe4369FXH18yqXfVgTMZSTBKwCeM26yJ3RKyUJWqPV4PfETwEFHc7aosmP9kp2CJCLtseAfSj9wbU",
  "key5": "3Dir2DfqAXgBrkM7jmNnwo8qVZRwghXKPkskgvGyphxc1BJ98GQrMPeM9tGGKNnKVoAHz7YcvEgxrutyvTrCC2kY",
  "key6": "4HtDCcC1T5uajCnVudZpZ4vjVqGkYD8s6XJjxQCFtLDqzxYXFqnakx9oQL4TiwQ5V1ETpmBaJHh8siYnhLpZikrt",
  "key7": "2JvEFCMS6UKMvNAmapJ7cnYyguDMfbFBL2udBPNFwNT8phi65ZPPUzbn3teZpJSt6KBkmZprEU8YGjDqAox31fvZ",
  "key8": "4etqGseXc7PA5G56GPWaXq1rzagwxyr371tjxeGqj922Yu2dCmYPBvCT1Tzx2bSCwCm7ER1JN86nMhJSaGgV119h",
  "key9": "3FR1LTRt1h75LghAUqAyzB38RtXtCfEptSyLa4FFZTLMxynbnfSHLT3t368oAgkJUTsoMjDp9mUpRsVjZmYCGLae",
  "key10": "WdEKnQagLpioTqYo8zJAyAGHFM7rkxmFRCQjdd2woujwp5C2HFpTH3SU5nHX4LbGb2hQTdMGA8tr7Es5KbkiMoG",
  "key11": "5RJUDseG8hneSikiTSrhKgfT7sSqB6jwChBDWkoPec4P2dyRXTXMSaVBsKsjiHBQaAcRGAjv8s5MdM9qpBJ5wh6U",
  "key12": "2y5hFuAmqNqK389aumZeE4pVe12rBbbAKqbFV2pgQxtaQS9fV3BRUdHmgcx4eDEaTarF824KeYtrLvbiNA7BFxJo",
  "key13": "4tgoa6a24hsgw3h6vPRuNAGQfeGJa35furharQuEX93MuUjAujGAsGWroknRquvwsE82eLNnYAt27AVWdAr5dm1L",
  "key14": "4Xh6KWiiC6Qgos48Rp7aweuuvo9hB94S3XxbAFeNf5FnTrqS8qNLg72GY8aPTzUPREgtEG7TeLFcYnEPdxrXMg26",
  "key15": "3cgb6SjJ7LugyVvapkMwqyh9vJzabhNCdJwWVcRyqc79xZc86QrR3TRkZ2aECCP5ZHqivgTLTEyhYpsjTyc9qo3d",
  "key16": "4bCFqxn2fJb1P9zXbG4PjcdnFokjA1FXk41945feEWCjqcsvHrcdKpwZcchGqwXbJBGd98toiqZUcHwPhoLvx3Ce",
  "key17": "5BvckWNbCrdTfadj8e6qubn13UBvSdUxKYxyrCgn2xXbLj4sXiTEdRS7HkbE8VpRgvqTx18zcrt9xfz2HQiudN8h",
  "key18": "P8pyq5uNe4hVyRvrmw2Yb9M9wrCNRzKpykCpsm1r1nnNgTaSr3WoAHW3rqzBsWd1QpXyqVDF2vHdFrx9J6xs4Pm",
  "key19": "22qTdypnMEesk7SPSQxCV1uZyJSUQGwAMZn7c6itk9iQf13SuJptQvSgxjFiFPzqudc1xmRDjpFYHrzUCyqVfYoH",
  "key20": "3EHsWrif95EeRwdNxwp9MeHREFnV7ZwvCTzY5XhSEL8VgbYwfnDsYXM7kcfpDgtseWRDZYCkUJzcEMcRMhzLiEH2",
  "key21": "5qvDBck6Zm5Hd7kzi64j5RTcRzzRqinEU17SJ2W64vaDGXs1sfixFvPge2BJW8upFyEoEcWZzKQdhNmbeeEX3LVk",
  "key22": "4BhkxE9PTpGjZt5SoZCoK1oSoBtWGQniUhGqX1Nyhe1avudPGAwnBAwMWW4N3rUn1sC6XFrpcx2xaLVsdXoRra77",
  "key23": "5AiCddoZzYczB2ibLmhTA3PXWhHLg2TB1FV78UvJHivg3EvHmh1fhtGey2wvoaNSLnLpe7MCL12y3CP57xjkfqpo",
  "key24": "5ussFC57ZAjqYJ3aN1WswYtfbUiQKHYG4EMs4Upt37sx3YwHBa4xjJmWaBrbXg4ZyiG3d93vMMXkx3coputCGKGK",
  "key25": "4etbTp31jQrn7KcyMDzZiuAJ3fF6Zzs54jxSHcF7pdKqpEoniChahLgqJMFUGZgd8tW3g56q1un3sv2xNGQgz4Tb",
  "key26": "4sAN9i69wKGEr6daduJGRVWaxpQXVwQa724YWfdDz7ys92m789yc4zFJjYHvrARbbXJiv2Ynq9jFeRNeWCpGM5vY",
  "key27": "2qbAsSDgxWkxoNbpcSyF5zHaJ8MgD3J1rEyvixLMz2YbMqivMi5EBSXVUoAZxE9WrUphqUaQVGoRdkv59jzTfnX3"
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
