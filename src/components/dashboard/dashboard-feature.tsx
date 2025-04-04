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
    "L4ck161wLaUSDQtozmSG3sniaSvg48hYxX8PPfgFAo8WsQ5AekXRZDQy8Hyua2txtEoSJJx65bxKru7ziFZaCMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MFRemCUkrcsUVBgks4GdRqnnBC2WzcThofCcyyhUzEGBbDK2cQmBDHFQakeZWVGYiCPJn3WSGCATxxtPHv7AqCx",
  "key1": "AanmyB9RzEicfmaPUhrzsgNRRpJgohkghXKQYja7UY7Nvayc3xkcpPJmNxEe7tW53HK3uxUmNoanWxHSs24Kuj6",
  "key2": "4Wm7RfDozAWmBLHGFckzQy3yFSzigyvKpbLqdbdWcwtieFGas8e7mVDDq1bELhytftwdunxYjUhTncGcQ4c2dqaD",
  "key3": "5BbETWNDKEmNivHKpSnxHqpQiboEFudsDqU2TRRzQM6JNHXjmztrBT85sAEw64JVG43ysETQa8StBibcoGxVbayx",
  "key4": "2m6DCZNKJs6SwkgH9ZDhtc3YC2sQEvH9UTK9o2T9x7PmErUhJFx3jYx5new7ALkRJ56kMBDrvJTa27uU1Jnj5X9h",
  "key5": "212LnHeDHnZ59F4DmYddWaJ3jccnJQ3Fc4pPDBYAMcEnbxhMEYTpcDaoz1rQmNvhUqLSNos1HXvxv4s8P6c2r6Qp",
  "key6": "5KGMLscfonbDMHBC151nV5id2pbXebDkX43WP97DDg7F6KPc1xpvUjaRuJQr36LeFj7h5opnTT8AoydWxLSJtHho",
  "key7": "NoQR3GkEdttxTXwmAziWBDYeRtmXmTyMiq8oKXRLiPRY385hhtCTaReDWC8ZRPwdWzVr7BcUi1zH2njBSQCpUDp",
  "key8": "3nNdc8gbbhGCBAYDzW85JDZgga5WtxB3Dh9ZwPfMtgVZePopffDS8Jis6dHT6o3cJgRyEbWEhHihBMdqjsLLyE5u",
  "key9": "2mQhmsq7PWu2nng7aCDDasV6nd4h49GY86ve6nJ3F5HKvdCi8vVHxHC27ZRjGkwacKNdyHYPwHmqU9wFZQGc15hw",
  "key10": "2qbzwvAUJboqcKEbAz5bD1qo9mGZjtEjWvGokU7YzgrPtZ4sLCVgDsCVUmE94Xip32GQYPpffcpzRJoVtjbsgR83",
  "key11": "5B6LyXYoDiEhLJjcL6X3Xx5RtjwxWBPjWKnMdphnGtt5Z1D29SXhiytDkkm8fvcVzsKt8prkGCgSBDs2Px49TZhv",
  "key12": "4Q3BAinYG8anTrNaUHwcAQbaaZsthwRJen8AB1ouX6RWvGPXGuLUvXDpzeRMqu1EKJvPWnE7LRik4aETUMNyRiBP",
  "key13": "25dF2gTa554TK5vZAMaoi44uKY7BRCGMMb87x3NV1REF7v7qQpAQxjViCGNY4xQtDALBqXwx4tWyLk7mwfUFWTdY",
  "key14": "3JwLSHA6zQpKhukiN9ak6X4B3hRkv3XXFZwXNBMKhtGuLhebXf8PsPxGW3DvddFnwU7QXaY8bC2X4EnPHUuNi3Hn",
  "key15": "2tNHmDVybzrZPrgEgnW6gd9cBKC6it9zZ83z6nYUm3Aq1NWbPNjdRe7hQwhNL6hXYYctnLzdvoXgBuQCpfgewg3U",
  "key16": "5SirYYwJrYBDggXZqn7kRk6xJXGuGye7rW4X8fj9RQGrLQPCtBJLDp1mNqymYADG8R1tMCYnUzKCKYUqJRaN8HVy",
  "key17": "4KsUToqrkw6BwJvftnZnQKEv17iBfJNaRLyxxN1XTVJc149m5WxW5LVMgxCcv1uDG31cmKcSP4UWukCEJvRKUQZ5",
  "key18": "3Qhhte8cfTjq1R4SusBNnDjYhsn7436x5BrAceAvSBJ4nEUdid3x1Y86XFVd2gYLPg2g2RYzpsTEBhQoVohoXkwA",
  "key19": "3SfxjKuoJg95q9QYeZmxtoe2ryCAnRWd9MVxJDS2XH9f2cyZsgJF6eKd34o84bYCNiKhPvgVn4vh7KicnK9z8EPS",
  "key20": "25ndngJKzqsRzy1citrCFh9wzqYBD6Vzbo6Fz9dNsyoa387MFe5bB8opkMmy1NiPvN9RgtFi98j6bhoXnHWThFuh",
  "key21": "4kkAp7UpdhLyDjeRdF3hLEc2pvGk6SpPLdGvF3Wvu6sXLFpXdoz16HV2QWpay2HQu7tGTaf2J4hCeyqoWYgPynpd",
  "key22": "5cCaPSu4y9NRXuwTNyfGXAUeSoSSL9ZowN32XeMU1MvVNUpVtR2XTigLF3MoWgScVemrzMn94rfcHC9KcoVX1XcT",
  "key23": "4yV4imNxPJVor3fQHCgTPPjTUpfB8Dyho6b5gjREQuVMT9ozPWz1jGgTFBjdCcsFxMmTAViVAGKd5ty2F4eRtefh",
  "key24": "4KEmRpPz1mkGnKrYhLyhd4PvHRRrLxn4LH4DhiaYHu2xjX1ubisMd4WuN7heECWoaFahUuNJZcXNBKtMRezWogwg",
  "key25": "5XVg45C1mMzdMg3XRYyYVbyTxrmVvju9npuCgfjEhzF4WXi9RsavWV47vwSbbpsjYwCuVk8Ew1jvNAKhUe9L8t9r",
  "key26": "63kkQkgZS7G4o22ASPZZHLp6ecLbCmLo9RuegBm7MEkdUUYCg8UMbNn36gVMJr3Qn2BjWEr8HJm1DbLNKnpNqbrn",
  "key27": "4PEEqU88tdFGuDAmfUcShnwB6BrKQGVtcvLw8V2PtMJrggFMRZv6vpq4ewdB65u8E8waCSBWbEPPTwsSPW6zwjki",
  "key28": "45aDyEU7dmAwH8HmXD6D9weQyyxCZhM9PUNFFawFc4XTD3KDSH71fUGsFY4doUToMPihgPS1aemdtjMyJ5iYvL6k",
  "key29": "3Zk5ZXwDiuicUCPqSPbLkYJCfVvcdkmTBr32MSax8oqejBC7yVKJxEFQjPXvT5TwN7vfCpCxdzAHWMMqYbUH59j8",
  "key30": "3PCatxTTnYMXk6Bb9BwBfQP96uvTsySkMLJsWN1R3o5iLZLUSPiVxK1ZoY8e1UfAMySesGZqPFhpMS1x5ZsgcTgn",
  "key31": "3ejp8mkstg9f7LmPqcJWb8daeDvRjoLsuiK8eXQtufyrs8pmSEobG35JueyzZe7ms4e7uBifx842ANt6mYNp1gyq",
  "key32": "EdEr6eBo3FMqZn2cYf6q5W7jWyWCsZMCT2WUQQ9xAmRffSaHxq98KUyHYPHyw3aa8Mvb1dSMESUMeGWQdqvznSv",
  "key33": "ijiyqgNUervDQexCsU5VgRUJmGUUT6b2W4tYmn8zbMc8k52SjC2Km1WLTxPrfxSiUmzv5pWXv3NVhGT2WGAzPNZ",
  "key34": "2ZpjJ8nqE9qC1hqXGvsjQgt2aCikDUGiLjPVTTGJZaajAFVMTAwDicyscdTUhxEkpghjZDAJud4d1x7Dym9cTXvp",
  "key35": "5FE3A8gYMxRfkC9Th1R62fAJXrszefsod2eG4ZbqmQCQreVuZupEzLMunZbheRs36x9UxhxwSwXtR4NqS9TA4fu",
  "key36": "4NqRJtvPiyHpEkKZLPv3am9rrAX22hYJ3otCF3BrwgVtYQoKZr5iLhM6hQTnYAZQBxrt15JkhkHgydom336ffTeq",
  "key37": "4pFsSKczLXUKAihCGty79diaQ5Kvd6RG3U6LKXNJDQSbm5hyxGnQk18KNzKjMTbDkGuCLsKxaaWvdSYhsZaPkkfb",
  "key38": "2EczftQ3rpc29Jmgs6Hs2KpniQ5StGxp2SRzr7VH7RJt3QCd5ojdKEcAswBvza3ckb92TrJ5v4QXAGwtWFZwtEGZ"
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
