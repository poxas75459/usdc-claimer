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
    "3knfyVDgqk1eAG6VKkCRqbaiXK89UbDRr5ch2nzR7EX9T6EiFqXutJVCngeuaGagawjDBZTBkiMivirh4wkPPpCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnCEAPBfu5aiLqidihAQPNarwTmrFFbsmt7dk97iWhWCxcxxtYt5NU9DqeAtnL9fPi7eQ9CaunxTQaCp4Rq4e2T",
  "key1": "ptvto3gwyjkmatWGjqKJZyb5r4rg1ka64wWn2oK1s6oNc7sEnhmCDCMQAPTFvojNpmZVT4We5SLp6iikmEE54FN",
  "key2": "1iHihtLMDE1i2nuBCJU4WFwfWfXJiouPMfpAwP1jruEP1Ra1AUhDLeE928unMsxdemmzMDC7T66oSCK35WDkaTj",
  "key3": "2YN8mGScF5HyRkz944Q4kbhiEd8egADLJsLHejbo4dDgNon73MjNw1cBocttSnrcsuSaeTrWkkqyQB3JFiRGC6Zu",
  "key4": "31zyWyhkYMxLiqrsNdw1HtJhRffT8QKSTdGysf15nVhj2M135dGTTt6awUJsQe5sgLm2NtnmoDUpu6hf6o5FfVuM",
  "key5": "2cMYJ7W9hrvPiYePVRejDMrrWGkao7keNRULJyviLT9tmsM6iKcm23vnJg3wcGbovuU3F7g7ZRFLEXFpaf4ikpiw",
  "key6": "5NAmdGDJNxKrKRoEKmbPQPKdYm1RKaKgfMnPUPo7JQY2eKKLos2Yx4gznpzn6ci4N9qNGZFdmYJCZXmTLWHgFWa2",
  "key7": "42dVrJMPRAC7dnyLy8EbqNv96TVuCpoabbJK8gP5LMHKWYE71XcFh2HjhBPWuyPq5UB6FTfbAGQYmFkXPPJ4rRep",
  "key8": "23qaFo9ixyEerh8WgdmXNh3JnEvTXEMW8FFbMsBcG5XotmK4bP13ikJPcwCmN66Sn7Dn9GNAUvNf4yFB8AktxJrw",
  "key9": "5cTSspsVGTHHpAjnoqaZL6njh2psABcnFtuszQrk2x1LxFDQ7e3LwsR2LNMCijnFLffoKYDz9gEnThN3hypdFUaf",
  "key10": "4FFTCcSXbktUyHEb5qZK2U917pknE3bzJZPsmk8ys8xs98TBX96VRtfc5ah65DGWy5U6CSdLJCaBfYL4BBPjN1j1",
  "key11": "ER7EcHVEdMdYouejU65pFuLP5zPK33quGAgmze97fDbUaHXkb17Vx5Cr6mdeLF3cw3q1CqBWgBEyPkVM6EnUT6g",
  "key12": "4v2HMKT7tRLt1AmQS9dpGVZSLqJDyWWrygSWXJUsGUt3nGNCT9VEu9bVJBRikCq8KPezfPeNeJ981hYiE2BdCSXv",
  "key13": "24MSiKzAdvkyxY8stg8jqiZgbKBGS9tw2uQFKwEapMDyd4KGTnCVGaJW5mwvsJZoDJSqmbsFmsxVAARud7qVxAcX",
  "key14": "5kscdmVceWmVrgGsEM5AbJrBZWmfbaYTfoc8SqS5A8rxFod3f4rc7agbcZZz9tmE6nSWBAEyPstvyJ6cVDeS6eqz",
  "key15": "2heNuLdTX3RAvb9M8HFJZ9RPkaLgCmbgtL9ijRFpURh3w7JWRxRkT4iJEbbgHEXKmiTZbphC7fmH8RivzkLpueWd",
  "key16": "2NH8gsjMSvUSb6kHXKBUQKSTMdKTA66nSGtWDiBHRsTJvNiHuXZ7ubk7dJb12HxuhFxTGcD5yKgqEh65tJsA9ZZw",
  "key17": "zrdTdESkjT6JATDXdfbNgdz4vTpnYeZTdbVZE9gRudK8ChHczZ9zAAUnVfby5uhMXGZbrLktbHWDFz7vd2ryeVq",
  "key18": "y62KRJ3aVPf8HWNUC1yWNFo2KKS81SxStfAtXPQgfbugnaQAtVeMAsPsCffdX3zg7Lbfap65zzPsLHKBQcfTu3j",
  "key19": "tovNTAzcjA3kPx6LJ7wi6dFy8WEQG782eG8xvYCxoAV5fYUezazSLYTC9WJo33vhNbPqmVM3htLGBaQUnVY1Jqe",
  "key20": "21Nzr8gTDxBNv39ogwfEksCLe9KwJEW1g8hZkeHs4Gi7kY8MSzMLCkuxF7FokntD1E61ARzEtWzg7os4fq9ERksi",
  "key21": "3hQaQQrzwUnsVUvw13qDjSk9BbC7ptVFwNY2UayjatZB4au6T81V584Ezf3FCmjHprMF4f3x3gSWzBt2HJDVoeAV",
  "key22": "2WpAVzptaJfKKm5uh1Pr9rLdJrPx77nYByLFNx1v3tMESaXcwAgdfEr3q51LsxnoNmvBaJ2M3NE3ihuXf5Nk21qK",
  "key23": "B7Z1ESSPrnbY97wFa88qxu46Tzyog3gS7RQ9UVm9rt2Pg8CCssgtu2SUBg3dR9i99SW9rGGtB84w87QtVigLT6D",
  "key24": "3Q7JAerDDBTP3pEh4MneJhTZgCMxdSpFqJSmJXWYizWmtpfVBV8k8ize9EAK9sPqWvWbLfX6e9Bb8wpV6Bv9NNfW",
  "key25": "4EtSujQFcpq8s8Ki9j9KuQYWzpM3Y3TJhMd2UycM6EUEYShf2HteNXKqcaYES6PGLDokeSwmzU1FDxNaxxhbHi7x",
  "key26": "4fLJ1rfSeN5Y2TCGXEaj4n82PzZ9awztmmQwnNBmya6Be4q3xBs3XeJ83m8dJ6ZwCw77dotF2gQgxMe5m7PNt5tx",
  "key27": "4Lthp85kUruPeQ2MJrpwZd8eqWkqwpfmUFwbGm1zk8mCFm38PEDvjJdifTNnniDBL6RjEmbdbhQxAeHh33WEQpo",
  "key28": "Gi5kRirGuu3FqzoHY8HFRtFZwX4XCwURQynWCqcUkJkC4h6WmoTfDXMR8WTD8cfypmDQ3CnebXitPHKrDHDMahx",
  "key29": "4QXpWCUEFvqTSMgob55E7vG71zrpJeEWVHTDdhjAg5Ujomf2z9ayct4qcKK9mTV5vaFqCvetCH7ZW5UqyGVV9aQG"
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
