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
    "2y8CC63CFrWe5qGN35z1aAq2HPYbMo47fuLu2bgfuiGxnXxw49EkpV6ZhXH14yAFSiapM24MuwHEJrDpY4EwPWmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asCfhJzRRLfzakpxoAyt1Y2UkYpGx62KCuH2TtnRn4wx8hZdpUgxbf5cD83v2ptGN9d39XYKceK1iTSRKy5TYRx",
  "key1": "bUvPVy1MzRYvQAFmNgUKZ8xKzN8eaqmFZ5epxAgbxvP2zSjPtq8ANrAx6tRT1RpYWtCVMuGcWvn8UgGoc1ebrYd",
  "key2": "2ypXmy5gPo14XCFDACxbpb4gRuhXnJzRNFbrjQjLWnqLJZMGmQuWUgb2KaeZ5kTVgjDNQcdKH1GXK2gkJnF9jb8n",
  "key3": "4FbHD8wGETuwFkrxLwhxQdakVybco5uRsw4WDHjyE4Rvh5twDrbrbJBeQw1Y8SnLLQ4gp6KoYt1RJgukVHU9kBiR",
  "key4": "4a2dDe7rLtzbiAFYADAr69Y4WAioCugZugLhXkWPe7PKu8DpNnLtEjh4ARWD1Ngi4xNb3m9rteU6f9i687fR5tGX",
  "key5": "jrqzd8hUYBvQYTh6GoEa169pdMYEybqRYwquDTVtQpeEUgm9hCBEXYWd8Ts2vLSrrbzqkhQzCWhiYcgmkWpkmnx",
  "key6": "2JpzxvLh4PfHrzk1p8eTuwFZJ1kZ1RFxxvyepP66VyHz1reXQxD56JT34vr1TgzaPGogi5h6MEpoFEWVaWRSsC23",
  "key7": "2LbkDhMxBrU5NFMEsPKPdNYvWggEandgJp14Wo7CJJjfMd5boQvunf1UEYVwb2VoF1pighJFeCuVmpAYeN88bdUC",
  "key8": "658QsVKVKFpiJwSzfyFn4uJLNVfMfq3UXSqdqxEJ9XLYKfWKF3PL1ASChRW4D4J1PasCQCmEXSM6UDyGvSNyHzyE",
  "key9": "5dpfcSsAzNNPAYg368YDa1Meru2ogqgRYx7qe9hnmeJa7W6WHaTtpEp4zT9Ek4HvLHrpDb1iGQRGqU1p8ceQZeJd",
  "key10": "4ranH41XkkXfGgxsWrSULxJNNF9btdhvykvBf1237NeccPw4YvoGRCdCwXGaVpfAQNbXpyLVzTraXRz1gzA5jKRf",
  "key11": "5FC4xN581e11PoSzpjwTvwXhQPHYeh9zwkDP7FxSHvyFSBrkL4XHwaQkcQthyCSX1ke6ZCgpKFpCNrbPotwzSwkv",
  "key12": "5tsfzKC5R9ohZ1u2KVqQkrQX3MeRStx5UDzBJpux1jJe7dBvkueBJnywUMxBSHGJiorcn326D2ayuV3sQ1zWbNi3",
  "key13": "3F7ZWgvnnkfj9kK1VBwDtQnAr5CPBG6jRQSopsnJ9KGZgQfyH23XmGxvwjK9YCygBvd4PHiTEf17CVNW4Dbd3kGp",
  "key14": "44qS2hMBkByTTVXSbuamCUd59LMHFb7eEmy5CEMGzqfUpV7ZLtMwcApvonGwCTqyuC9L9Aakj5xQDkDQPE1Bfr44",
  "key15": "3Mco4XauVZkUDkAYcwsz1yLFKG4ogyrher9YBATicD4xxfdMwsShqEiyk811Q34MgsGqokbsfJkuYMv9jf1pBdpt",
  "key16": "4sZHT7YXwWo4AeE9usrJSAzxfjffA7nBevnZjWPcwBV18E1DhjGtGtTXqCJEf4w4ZVjuJoYwHL2aSY2YBn3tYMUs",
  "key17": "47WbS1QLscvYy3bPiWUkBu6zHTqEWCVDb5vSH5eKauNfbazRny4rmsucE4ndFM3LFMEqxLQHCzFFJybgwSji9HvW",
  "key18": "2cofAu9q7EQpj4kYLhBpT2mpfMo5AeevN2hLFKmGBos2c2KTPDE7T1JwzEDbs656j8utgaPFaq3YdySEG1Z1oqed",
  "key19": "YekXBnMV8wXJRicCQACzwjLbjVuyUAgSoYQk75pXHuPAErtUj2o7x6ZG1A34eRWADG8yeE6CXvCbd4cbqzNU2J4",
  "key20": "5rparmf8xPyQkohsKXsE2nnGe5R3NYq6ZRVpRXkYUoQB9qEK64WhqNnpAJswaxFyxfuW9WbdkowR3oR9zRJ8sCs8",
  "key21": "3FcGtKegHXvNtEj8dgTD4EqRwRTznkUTM79Dcwp3Uq5kFWRqbzsYia3akJVDgtZboVENPYJG7kahWgsjRUUkf42Y",
  "key22": "5iJvBsYRCFMXxv6rG4NvMZterYJiysV5xchLPd2XD7s8FJhKkndvAM4ASFf59Mya2zraDPrWfHEnaFUdMMYePxsW",
  "key23": "3p56v4JbnQL2abzmG9wSGEj2yx2VbeYFCcfbrC5ofKW9SQUumqE3fye4jfkcCqnMsstPhLg6j7Bjf4y3omJMgJRe",
  "key24": "2o62qpAkmPF4R7Q1QNLrjLDLmjavjgmoCyJ6uLdZASkAUFEi3LJHvECM1ftiQJQicw3cSnGHrLazqRTcz53D2jVg",
  "key25": "2x3Tdj3ktHZ2g4mA3pQWDoEz4ugCFAzSKmM2mNEkAYHonrTjtULoSs9cYmXAZiwcMRcZHYJUfZmQDYUcEdn35DRy",
  "key26": "4JHM2GL49UvDBnx5htew5ewzEGoMsYNvK7J79xTyV2Z1gj7fcohSC22ZXuJPmYZtrmQJXybfSkM6xvHMrzoqnVZz",
  "key27": "5zGKr7aNf5ZC7F6eomksYsvNWEMk9oeGhJ8YpAh8q5nLGytoGKYBnfP2ehC4urn6GLUqjz4njWzqJTRkjnY5gLic",
  "key28": "3JuWVi5rPGTHppnF5BoeDhPAVYL7MrR3CUJuKh9Gk3JBc4xh5xAuzPF9hZSURfiW2LNT1ydEggtGGVhyUxTiMcxZ",
  "key29": "5PsWnK4Ksgs5aXfQuHABuSWnWibhZTjCxJWU1KazEXKkqcSQ1D2TqRn2usci8yKDW6cSQStnwJSitUsRRYA4LK6i",
  "key30": "2jHE8VQKmQB2mz5DyChaHoC999YbRLad53diPC9ietP2ByoMWdxJEpevsHiXHn1oHQj5dgL1AJsKSNE2dCm13tSj",
  "key31": "3BrJ2QywnT4YTGHAwosjdPW1apFu3Fe6MNc1teAJriSdY45vX1KGukAJvnvpxu3okp9DdudHxkJEMaB5u14cexXU",
  "key32": "2aAwu5rdnNhNq8EqZgt3qwG7r3nkDsuqPktHzZaPe5HSBE5vaNz6dEyG7FczomrgiR8RZKHirdn8VWZobb8oHTzB",
  "key33": "4FPaHmc9GDUeKgJGRRRdt28waYMYQQXQ8gBnnq7rNJuAzyMP3n7yWwsa3EieCmYteaXgwSvREvXi6bZw3yVt7SMv",
  "key34": "381UedCpBPPd8pBSAtrdRvJBdoNtXLizg77iLE2yQpeTCfJ4PGAtszpHR2BsQfwdYdb7NCAJYtCiogF5hG5ekrub",
  "key35": "2q1s5U7hzkV2dHLSiPQj3NsMb1yumWSmZuDmWD9zwe1iQ8rg9TwH8EfcfNKKfoczEXgCwz3B8pYRsjUsuMVfGsJ3",
  "key36": "2vm38e9TFwK6uwmRCgLnhWXL6jc45ps8EhCJ67GxePwkv55xTtf2A7LGG9eCdFRQv1haiNMwcqLKCXRcWH7t41UK",
  "key37": "4E62ae7sfhmfKiuFAf22FckvhbxPW3pd21xH3mabUxYqWLVauwhcE81ohwPooiFPELg24uS5X9CBcBiGiSxTBZuR",
  "key38": "4HTkgyQArDZsjRrMmuJgDFdR2zcSBXaTEa74P25v1Yutw4bz58H7MdQwsD8g9Jc4RBnzPYWpJQS58AazgoeDb8o2",
  "key39": "4k4JAwqyjYcTkaHkPiYpSRpNkSu4My74b7v64Kj1qDaSLHnVqdaRLJN3VsbLoWBT95bUXEoNEBhnenseWnrfsaSA",
  "key40": "669Sv1RcmiVpE6nr7gTBHjF3apPfti39Vhj6RPeaYBfUw2aP1dxTkz3dJqSuGpaS2YQoK1iVzrgU5RxgzX1NeDK",
  "key41": "nJ8P2bxXf9Eu2Khv25t9S7YzES8P3EM1nTwsbPYi8gx2SgPAVxFdRP2hSGzjZN73RpGxpi9AgCWtMvUHJj2PuWT",
  "key42": "2AdPMckKqvWhsUiGWAD9gBAomJEmriAAVstobjoQC7rDf4YWoNzVVDFRtJz82dXhP7CzhAd3hs14ssctLQLqrfiz",
  "key43": "4FoCJEyQ3DKSpuoyGFBkDk9EZXzorqcaKsQXn3wCRbvdQE99yiWhJDZibXRKUm7KP2DTtg7HVyWbxYHH2vTKogp",
  "key44": "5HZ26NzingqKzGKNznLgwYAc3kKXFjua4EAakM14mrx3wWFkao19A94VAHcWWpG4Hd9brStMtSnXLgmioWeLWxHX",
  "key45": "4e9iL7qn9N67qdz3sfzqnzjqABciGiyt9g435WEDcSXQRPDGVKbjQht2YXqcgbeNmUUQvh48E5FA4UWtJgfJeA9m",
  "key46": "2WnZRfjEwCccrSSZP2fD37BENgwhSR9exRyaj198y67c5vEgd5V96WfixBoJTytScJ81rmmCY77bBs8rxCbnBY35",
  "key47": "3eTgfoXwBEGn11A1x3haTAWVwXdU2wjTcJhNcAYymrtNw5VDEy4Dm4GA7JiFQBPyX1hnvFQ7bVPzkGJUCYyxDu7b",
  "key48": "kdnAW7xRhNYzVRALeQ7mFCK65Wvxtncw4Hv3eqkn8iHxuqacd7iVPNU58ww5CRNHADY7xsuH9ySPfhaH9gkUCUJ"
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
