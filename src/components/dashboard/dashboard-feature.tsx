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
    "2Wu5jQbCNm8ZhbXYdWZfDWwa7CY8s2xM5nzi8ECBvCy4edCBCc3dreffJSC7hFSftiU1XeZco3sqjzTUrnF41abR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNa8a3CqCZHX4JT5jXbBNP9oYbd8dN7vzb1CCmmUk8d84xA27ZXQGGjcLRLdswgiiGLZqiEP1corQ4yjJYEVoMu",
  "key1": "282g5oJjDTs7xiVpu5XhivfVQbwDNAQDje2a9RjBFmR52gYi473Ve3L7JpPZRJRpYF3VjFn9MWnzLfwexySRaHPn",
  "key2": "2735jND8M6jw9KopyQvi4GsG2u2nat8f2XdhYQhwT7kzHUXiknNbKbkEfnSsu7mVubzAbJEHY6gFRxQFNWhZYBJ4",
  "key3": "4cERTvyxauuH53C2X52k9WmgEeoqq5KMdvvazYNWpGgRb29g4ajLjTYerRDCyikjBKkjruEE4BRijUr8JitPDYYu",
  "key4": "5sND4zyARPnDhzEPna67vDZny49djdY43XufeuXxCSDGqmKvCJMCRR7ZeM4MFdRaxHoZSZpKHR9xYkCwcRExRKRA",
  "key5": "3iqkKPEFZuYUNeyu97a2umhKSKex6kZvgPUrbW5bpoioAUuyu4cUsJ5n5ZZfkGiPk3Q2ndbaFkMfKMrzfEuSty5e",
  "key6": "5oc4oqTDUgarfAWn2xpS2eRzH4fMPUgbmF4tZo78XEatXxJoAr4uQWqAdnZvwZWahEbsUV7N8riWcuydoPhewmuZ",
  "key7": "5nXg9bprGwTGxbDmAnLDMf4exEq9AtUcnUbNvxYAXswHBz9KaWTRprV3jcyWhDNBWYvKDUAiNtEa4FTTNqHSVsDY",
  "key8": "3WPWRM5iX6vLfdi8mpoboiEqY4DAuUJS8c27Q1z4kBZAuTzZp4s85LktkZVZqu11U1nHzTYU5bt6YxLsoiBZ3gVF",
  "key9": "p7As7QiNzRnCYNP5NM93MbC9GbdmMpNLTFgHUwiM68Hs5tU1gya6Y2exUuWe7z2qsDMiew3psC5JtqXBPi6NenT",
  "key10": "3hcTsmq977rZy7KmfqtZwgg2hPj7N193iXuVMfoQrQnLaUG2BXaBJj76WJ9FjaMRepbD2Cj7aHgW6XLwKVEcY1av",
  "key11": "5cCyf244x3swc7CmBhhgiKvBeKdVgLsAtxvevwizPKW1oc6LkiEuX1QyFaeFmtFuqHcQXrTVvWTquikgj5MvFcUj",
  "key12": "8ivL1Lp875bC6MyCxbKxNk4BVCYdSQoKSaPi6twoTRYrRd98UGTyqwTzzejMmRWutb9yZM8RbKJKAYp4TuHJ7p9",
  "key13": "5qJvm2Y5yxZFxeiXNmT39hnoZPC2BsiKJbsbTeazRHzJVxhrTtTDZT776APEc65hUDg2PLwontXf6mbVHkyRuZAB",
  "key14": "2jJ1S2QKNSLoisFR5t5RZZtm4GKS3N8QuAk7pqv6MVGwxujiZTHADjy4s3V9fjr7vDHp73hC8MqX7BHTVwpkf2cf",
  "key15": "3x32S5JrcXERFFChaQFK32A8Mr2iH6oyv2GQn9YfesXTZxA2UKL4CWtcsojPyKVNZKpFzYeFvNx12mmQzhMUMPCk",
  "key16": "2W5gob3R4ye6Do2DMTAEUjeW1cty2iLeuRjMJFpx7nhTFGnRqQqhqkphRzUsD6Kw7cHETZMTmpRKXTdYPzENSZRe",
  "key17": "4rJC5dqsDLy14WCw8XpkVN3FdB9wBRXyHBaf67mjo1mpbxeGpV4VSj9WjAyrwHE7LLirYwyqC6wxhFN1bUbi2SA5",
  "key18": "3kLqw2DPKkqRjGrpb15BkASqDWRizYw4ZAA9tsQkh6jRkHkLrygnPfuuyNtSk86Veu3gdVfXGNJhMCqAyoADpD1d",
  "key19": "2TLfVADivSPUsGAjzdKGashy9PJmZcBaXpX4hAEHfJqmaQPoeuJWqts3AEUbmrY32RCHkcwHTCzVJ8S5dM6891dZ",
  "key20": "21AzpyW2GdfRLXpxXNGASGuKUkmiAGZoWkyEpmt2B2x1TVRu3gWDUb7rXGtrUGhtQV1isL6sUYz8LaE39v4BWKqT",
  "key21": "623XWCtvU2FG5Xcbg7cm8sTCaeX9jp6iR1DKmubwtEwQCZLoFjeopsZbymSx1N61z8fTsqfrpZGT74gMVwDdxWGm",
  "key22": "61x51JnDdS58e9AWkSgd6DuggTHVYd21EsUmwVTsDPx1GKaAUjWfnqNcHXFwTBes1N4SMRWc86uuAD8ngMjF5EiE",
  "key23": "4yyTtojqHDxgZr76s1KzLP3Vd1sNAVYEJDLvo3KtTcKp1QCGEEhUZsPEtmeJe51U9tPRP6X5URviE3Gc8A27r6Z3",
  "key24": "aJSb8qSXinyXJirteKxyTs2eCE7Ad83iytwwXBWqbmaxHqNCQtfFSbzDAb4vfUfgpzo53YJ9NGcgHjhLdVMFqti",
  "key25": "3zD9XAPUBsPgqR88PNeKoa1ESeMwg1aAeD7oiZe3S6ctFNWRyQTm5PyFwPNGnupedxmx4gLmLiHcoQtRKVTsK9g8",
  "key26": "4v8yhjFQ2devVKsACyq26L6Wkpz55bU1Q6X3Sp1zmtdi3regV7sfc42oK1zDCgFc9ZvE5ZRK31w5sfo6BMhEknTm",
  "key27": "TkCbYYCErnyex95XXQQVBN8bazUNhrCqKJPPezBUuVyVamMCp9qqUXioL2viVbriaroFohV4WRfPiZv4jvKfc1x",
  "key28": "38LnWu5Z73mnAdXoZ7BdrbkuDmMZThE31CsDQ919hcN238Rza8sarWPYnWBnTYkNWZBz1bwiLti6txybBgyrkEkT",
  "key29": "3tACEp1k1REYKTqCitVDnthYLnAcfZUWdxMo9XCwrjFzcaumTN6haPVyrbXsxSJFPbGN62HcYrJXnSxYHzL5gmSk",
  "key30": "CrcFhfS2yR1KJvbTddSUD1EeeGV6x1CSmpe6nHPtNcc5xbsPtgVLEQAbtsMBuX6voaRnkXM5FfV8BrF5H4XaqSX",
  "key31": "47gCKe6B2WFLygDvbMjht1coQK6DDNYAeLsfRqL3qyLPQvCsbEXJrTssgW7WA7htAadDu3HmL2Ff4aGuhLKotENk",
  "key32": "3BHAiED8uybYecTSwNCVEpQtiBPY2gu6VHK7FkBhRDWKxCb43EqaMB8sxEuTu5vEGEEVozqqL5TyqkYbvKuGBq9V",
  "key33": "5isHE86JVwGCFMQSr93RtkWKSoRsA3inKFH1dgzSXUdDjvEqGrzeiJdSyiEa9gUisWTPP22HjAEu2XJpc8KhQViL",
  "key34": "2BXukBswYgXZVtKPjgxsP6WGVzAp4cj79wrZnuXoe8mRq7JbtaMg91aHK96dTwQnaaHHron5ghPqFoHxARUrSGxA",
  "key35": "5RDvrcUndMb36aSzyMm3LLnt6bZzTBfLQfY5MLpbwg6rrQg6zYS9cAUtzHf3gW4FQSXi5Q6E5SMa53B3CAeehbXp",
  "key36": "4Wc4N91wfERsj7FBJ6KXYV7UXK569S8vWkuc4YqS797oCUEUGbkhvCgjjKsHFrNbgoRZjBpToXNakA93JD7ch7NU",
  "key37": "2AMGpKGAMEqFBaeMH5C3fsC2wh2Bw1gYZ1rZeEWjKtG69P9bF8BZAhCH6jzvHHtVJ9x2V7kwJXe2bY55ERK9gD1j",
  "key38": "Sd3fqijZpnFNQcXxGuiqsuL1Tupw83HnQwmitNtH1sq2o4YJACGq8Q1zYdDAHjHWgPtgxWakri6Wyd8SkJRNupQ",
  "key39": "2M8cPGxEtVghFgbtVDbsTkgsCgzE2KYQmPKjMm9poKdRKVCqLMugSDouWJ621SgCTyCJSfdvh3s1EVrpjjv8qhT3",
  "key40": "2KVNfRoP2x48sS6uB9UH2cVBKbaMdgFmPmmXpaV2rSGZ9LAH2WLfK2yRDvJgiP1u7tasfhKRTSLLNUGF1HM1qKmX",
  "key41": "3r6N9PLLLFdaWM8QzFYPePTbZfHaQnoK9B9RFBFV5iTpwXNquGwFDxndNm6LtrUQsbZhX2sEsg18Y73WzYSeczLB",
  "key42": "2yX41hE4oWZp7wcrwNHSXCUrDyNbeKA61cHuUM79eLEZHxzFvP3eXYbhgDpP6oBQnTPM3xpLwigjTHpj9Z4aS42G",
  "key43": "3h53y2PgfE6fveUaGNJLQPUZfi72PsdfFquhKarLhVKyDUuh5TeAC2FBQPso4HgP8YgeumXC1jzHA12S8ziarzMZ",
  "key44": "63cKJzVyshe78S1XB3NComqKHF1Bjrrj1gLXe9ENuNf22m2xNswXAPbYATwnARp2i8BqB4kFyh7UGzB1gcUnppNQ",
  "key45": "3X5sTrAULsTWb84zQEpvCzkZhZwjui9nsb3n36JS5sbHiaMfFtwJQqcnVzcS57uEFUsGSjm7WXuzkBceoJfyHxWk",
  "key46": "4Yg6okEqQQs4HaAruTSAmoioqvTKgQ27SQoV2v4ELed8nypPzkxzN2Qzto1VKNZKBTemyhbufTnxuJf3r1jvFM9i"
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
