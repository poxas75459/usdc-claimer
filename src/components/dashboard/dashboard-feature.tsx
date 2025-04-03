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
    "4HK9oZKuRbLLbkSHUBgyEQrh9Uem9YXGst9aewLFG133x2v2ZJgU8xQPzyyKow5LeNeedJA7ws7Xxjii92oNRfu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SU2FW31inn8ss449rgxG7xqB1fsS9HxGHKuCWeGBRTmbzkRn5JyoM6D7JQjMwfnuMs534h15CKMf1ZHsjRQan1m",
  "key1": "xMaiETy4D6vuMBcmuLNTEkwRDSswa3kZZmJqybhPiRx8WPgpsm5oYbT7WZMGS14cQ72Gi7Amu7SAonHSzVfM3yQ",
  "key2": "2vuMGEXRdU3FxzvP9BVAkSpJqjJnu3yX8yrAxupJsXTC9cHPE7KmykG9APu5PBrqsFijGBBhpgPYsi5PFuuXdj2T",
  "key3": "h7XpyaHy8GjXE7EDfJA8sed63kJWRo8mgxC5BsKnR92tXgEHk3n5QqnS4VhbkeAgGMLe7HxhGN5DtTxmeBEnuYb",
  "key4": "3vuFDqUQ4ChJMBUer3s5jC6DBog4Eq9AEDrYWQRu9kM1sLC2dEvSb6CRvkZmsqtvtPET6QYTBrL4eFt4L3GeQbPc",
  "key5": "5JGyqajBq6Dn38Rwz8hajJhCR4zrVTF61gNJDGhfbm358KDPnANyap9zXDiq2EVwYmbi97AYU2g5YyiWTFUTMNda",
  "key6": "4VXVLnhia5sRSqyc2AStBsQSYsRnriM3KU9BUMwXp7vNJoAsDsm4ixcsatbDhcscNqPwzMsqBb3PbKPB2L8AqvLQ",
  "key7": "2m5AN2dSnfGdXJcWxQ9xQycTa2mV2oMCpimzFDto4bm9RhoUv35hYeBwVZKqNBkwJq2F12CJJqkMMsss855J8hgH",
  "key8": "hVzqFne3Fdz9ByXc8GmFzvVCaWWPrjY6zc7k3LyXtCEUuitGp6dGdcujqTnU1jXDUY57bE43jiHaPzEWfBaW2Lo",
  "key9": "3daE4D382oS4AkUqpNXFkp6Sz1DhLt92BTvZEqtWpz3erabihYRqa8VZRrrby6ApPX13h6hSY2r9c6h8Um8hZURP",
  "key10": "4EtqUNqX2isjFQuTsmTJJtbRU4zMVEYVuMGLhPp8wkUzEs31aJFZUsjW9vuaRhXiTj3idv4Arnn6Tz6yG6EwxuQJ",
  "key11": "cz4dNBUgg2okUPMn1LqFRvSXAjybwTRPd31hxnfS8huW1KiTaz8FHb8R9DwR8122KjSPWZAG6TaufYLL8A73PNn",
  "key12": "52n8kmPKMwTGMtDfkCtvaZ9wnEFk6ZjDRcG3qdu8fmnVFzsZqCcZSuVtKtWjqswtxFUmjfAiQ6xgHSsYoZy19iE2",
  "key13": "2MmhnRMThAR33pxEmLbYxff2Qv7VKp8D9jjc5xKX4gELVTbSS5rrabmMqZSgexUDreeYTeeA9p8FmwbKYhVJs525",
  "key14": "5wqr9KApjzENohReLuE1ErwFgnSMmXZrHqPQAbZdAnf64ixhFmczf8iRbZTNf83Q31TiEbkbGkJcVPmKfvn94Bo8",
  "key15": "27AkfBoqDWJKuc9kCCRWdkTECZr6FvQaV6BhEXrUrnYDCrtRhhbdbwgeFRP1uzeHrwmHSBPL3RrPFVFJnvd2wztM",
  "key16": "2LHi36dazr6QYTKaGkcmnNjAeeW2PGbVkKA5aeZFJPZibmuaN7e8tLbeyqLd7eVMUScE4nbmi6w19rr7EBVFjWfN",
  "key17": "2CsNF2ox5RMQUAvNGywLPcryXvCcJZMdsfV9dyFbDXBicBh7s9UQwdkkowvXMcmcyd8x9ntMhqLh2WEZ6Z9ncgSN",
  "key18": "56cSUBcAsyoZtUrczKe4TojFn2ByesQ8bseS4LmqTuokJu9ZkR3xV2uqnpKHhSL9j632rRrUid39r1onc9DErVAg",
  "key19": "5rkJxayCq7u1BWLnpnA5t5yEDUHR3HSMpYktZjdAks5d9N9MpUGgAyieyPVXr8SuHgGZXWoStmhuofeNhMtDQtho",
  "key20": "3hAP52VNTRa51TzARo9FwD7h7MAnaeczXKTJUBxkcBygxLYDzzueW4FrhpgFBrLGphXbYfkbgkCNmF8SLowBbHAR",
  "key21": "2aGorKbAjZ46h3QkazPi2xWYoqjHNmFqwd8WMBAPZNE4bdeFAbr1AqfNiuE48yuRrUeHgduKEovBFdVv7Ep2G8h1",
  "key22": "KEeHD76RvUvWMJVRSAGcvBgcyRAg1gduo9qUtfxUuy6qDvLeQVNXWy2BptWM7JFEK4KXxBagQqQjDzbX1M3cVQQ",
  "key23": "eKeZ4zcxmYvDBqNojdRq9SY4fVVZKQfQZ4EcChCRCi81yJddLcKanTPw2SYyEKTPJvAzF5r1iRWpUh8zZCtAZpi",
  "key24": "pc5taeDwgffYKTTRxbgc1hxurx1oqd7P4SNYcP6aJrMcq449UBWLTs2t9cWnfgPLxZncyBw39Hm4t8pjghCTmBX",
  "key25": "2E37VvRzrrceoGhHkekjz9gJC5M14in87mToJkK4JGBC2MhmtrGWEi7yiSQJg5VVzP9W23td1XKANdd3UqfX6Xh8",
  "key26": "43ts2QwFeMWwcxYrCGQ2y8i6bbiy7drR9u6Jhmzajif1GwtNJq9Bu9tCRXaZPBoVdnkHirxu4r2cnZ2cyWEvbcL7",
  "key27": "34QzDYdhL3Z1AzraSojw9dqfGrGGTeNjaB3BwrNvz73d74hTZw9oWKLsc7ugJF4ugYeKgeBAqiAH9cBv5kdgRQ5Q",
  "key28": "448ssZQUG2LJ7Yth1JeqzPekdwSKGtpYnsvBjCnFpmyRpzwQD5EFyZb23iNUrZVUbsJqEK8RKk5SAX4DVzwqeP1B",
  "key29": "3EJd1rgVwhzgDHFdi3CuEsTNKofD6nMnSmv6q6zbMgsU8SCHSg4Vta423ohNga4hjByxV9ChtKs9HfGxRnm8dx7X",
  "key30": "67acQzkezdkcaq6bMeAbvpCmT9RfH7tz1CZdhTVWvXRsbVjnUbDYBjg96htyNUUnXNJrYZ1BPFaCbf3zmF2bZ73R",
  "key31": "4UBk4RnVVNJXpJtinwyuVFbrMSa5gYZMckbKUHMvKVQTGT1q78QT3n9i7RiCNnqqB2JydK58bsMqzk9G1D46633R",
  "key32": "2PRgXf2aVqDdPMP3VLcxuoKnwX99VViQZQCG3zct7qqAcimQQXieKckWAFtXhNTsiUX3q6fwk63yyieQRiwqtoXv",
  "key33": "2Mq4DgPrCSPEhHt5DZ4Qm38csoUbviHVgXrtRwccDPYhgXzd85Zsk3DPzChraapgv9GANSrZrHTQAMyfRiyWnnZN",
  "key34": "4SeNoLZRtkuT7QQRDVc3if2vH2KBkd2akP8VEqGRFG1WyRDkHLLaRPKqpLdPfbZUiLjCJVMpKfpnPw7obM6aZzjZ",
  "key35": "4Nt8euN7N7HafVeBtoVtdHwkgsTJzELwSQn1AYineRX5bdnNaAkYF22sZ3TUoAtxb3UAv1nSELiYQYxRWq26n2xe",
  "key36": "4BYU6HED7ZZdPfWYqF6TRptj1skv2t2bsPqxPRNLmbzwsYbRW8fRewBztYYna5FeSuUEgG5R37NBq87Vj7CJXxqS",
  "key37": "Qh8sP4zk5MTBpmMPZh4qkXtRUZBfwW5zKWK39a9i4CztqfMRpbSpkNZ2hEU2CQXszj7wKs1q5iyKthQz21uWv8W",
  "key38": "5gtnBZi5vurgLvd2TMyAWeL8pvj4pgqcsxvkcSKYX3YSBzvKvPNKibumH1ovo577XDH1izRNWc68i9MA5Le3HyYt",
  "key39": "632BYUA4JwRtgw8LrdtwD7UAZ5SKpbzU6VBecWeWpFgiZpLUCkPmAKm8nyctCeA32AJA2xLjrzfbcm9PbP6mnKMB",
  "key40": "3UQ8RZA7QrBHuxTfJoueuKhDn8ktCwkKLdY1d6q9vruvfJ11F86Cec6RJ3RNwU8Cm5g4H1TLdX2YrES4WZ3TpGy1",
  "key41": "3cGuMY1p8rVUBSZGeMDQYxGUahWNmjLetawhSoq83TMsFt6TzP3A5nV9gbXwz7uVk3mzbFNfreHdr7auiGJ3wVEr",
  "key42": "3czYiC5KUQvhyBBbVSpvCpmYumyCnLXj5W1ZP1RxcsSa9XR4KwEjtQxrkPizwGEsdnRJr1rt8DxwedhqzSdmksE6",
  "key43": "4wFzQYdpcWxDMv413RP5BgPfDMMU7cQ6LpEQUb8noc47QGhidfA5GAz5WUXvc2gWiNU5eYeFyDwGVsavS1SYJ242",
  "key44": "2Fnesj4KAHZERni4B4NfbKmihaNX2Mat1zSe5LM6L1jo7PXWQBGorQGrun5ruArBWDL3YWk6btrqCHw7Rwm4zTcU",
  "key45": "4knjMCWoLZBZdHLQj2xgJhCCYBB3qJeRqWy3Ra3VonwAsWxrUBwXGGsAdYDoMTQpCWnK6MYfjCz8x7bNGs2CQS6v",
  "key46": "5vTY3QytzpXXxHjHNdoK53adoiphQwywyJF8Vd8bGQ9wWC1NMCpZBJ3Mw5zG7RemkcD2QFVCC9g8C8RozUB3NYXZ",
  "key47": "58Vi3b1gbz1PztrgwXfWM1KNnYMpQSTtRqVyh8SjHMaBxy78QHkh8CBN3snSofgKZuw2GMCENi6b7zkWXRVLWCVH"
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
