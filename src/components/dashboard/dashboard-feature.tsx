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
    "52e5G41nGSzFMPQw1d9dqbJdT5JJqzYe9AybDskWk3iJWozzUhLxkyoXLRXeBuoKzcxBhEepDvqVMLpkUjDYrLmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G41AJoVtrxpomZ4UbPmks29Dabu3nLhau3Z8iM8ifDQbJwzG68xErefpzmoTVjHeyQCHTm6mZ3djhFXonYmEcV7",
  "key1": "3K731xb5VBTSzR42b618vBH3Z3qHE27j93Y3nEKgLW5L6rKmqwRUwYgimXqfyJ4iGHcMQJNAnPPZD8oFXBafrinC",
  "key2": "nK6pEa766NxyNPixPXbjBBSnC9i9MNedUdoX63PgSKt4NcgDyJig2qmZ6LYXM7vPMfECHSqJsRzSkCoLHwhcHTY",
  "key3": "QinNwGv442aY5t7odD7iLKMth9jk2fQ6yp2rZUxAGGfa29QUgD37bwFkUzrfGNa3Kk9ayz21YNPYBGGLmmVVDao",
  "key4": "Nv6ueVjdYArBjsJbzbGhqsiWdEhhRS7SSPBRmZ6G7f3Ge8Vq8jM5BBGGYerCr71c9EgDUdeoZ4p8fACGzHRG1P4",
  "key5": "hVsfLK2ACqNr7MPcUPnsHGAWLpUk2fB517oH7uVpNnirkGuD6Xinb2yecU4t53HeP5fKB56Sy1p8wRHEpHiuzff",
  "key6": "5HeTQSRdcxKd8m584JkixejkA8rUGoA545f9S5oiodYanYziizovC9vaxu6dpLygZ8g9os24WLEAVTPnFwgVD9NR",
  "key7": "2hEWzjk2ybMXsPLUcFwT3TbKdsMcA6Nd6CTDtutaTWrpWL7voLyRuBJfTH8iSGaSXCQkVse8RZizbT3sSJ2vA55S",
  "key8": "3o6vNsP8wNgCvRRjbt2ZX4x4hVLsCvkfBhGcNicPbxigw8PN6ey7vSc2YEQtsvaoVZZd6cQdjJgeJ5N99dxr4Kc1",
  "key9": "2Zd6iK7yk8ovh6AG4RFtNjDgZ5cHNtcFzUMf1LTFVQEYUn1JiSE9RaBaN2ug6XU71sxrhMHwdmgzRbx52EJJCwYV",
  "key10": "5BCYuudWDkQ7DrfThhfB93jia457xQgJrzsLLE25yc2kzJUbsLYhCrvVKnayfFWdT9fJKvbPyhYbVY5w96ngMKz2",
  "key11": "2xkHC3c7ioz2abKBDM5eii9CPD4hamEfHbK6Lx6WstJxza5rzRxR7HXhkUSMijCKZHDNn8ewFHMBs8uMXAfqwEBt",
  "key12": "dkavzZE2fQeNaiTfdVF8VyKzjNyHsEAkLWXGT3mxgyUV9o4CumtHCLj8YvKNPtS3z1cXUeDRBgWUnU5Jb4yMJJP",
  "key13": "5rU83c6zXhFgedPR9W1i58e6qZRwLHYJe52FemXbCLhDRRG5aDfbEB3Ge3ZbgPv5MRQJJcPdmnJ5i7sj4BMipM42",
  "key14": "4N4VBYNaC3qw661w5UhG3M1y65vS7Bxq7hYoT3tDX5dQwPysQWipUJ5bCYcftbLKQCxSAm1TsQPkZ4Mw5pSgvL5D",
  "key15": "4jbEB3vAvqev5YzFve4uoakx4iMVSaX3qJk5QASNNeFrYvtviGfc7sehfrjWagrYPVExPRYvmrVXTGCYUtx1dFYm",
  "key16": "4uzr5NeRECmyJdKpEFuTK62tRy1tsn5SEJ53tNAQDfRWFvj3PXNDpvR8KsXjnJdmahiXLYKmnQb5qRsHEhMrnxM4",
  "key17": "5NLZW578BHQouxoeqyaHyC4o5vLh84ZQgNcqwKVFp2PNTgovGUazEFWXw5J4d7vT6N7jt6Nrih57Wc1L8CKq676f",
  "key18": "4z5XRY7uknbxmzg4ofGigkoEsnV9YnLvfyu5NLjkBJZKrHvvGgG2BxiUj1QUQFta8N4UYa45cVJcdMZaTxfQbiYt",
  "key19": "4X9BkR5TgTLjAr1YkfrrPUutbNbKCGb64wmhrR2kv9eAhnpJdBjd168Y9QWsixBpJKTHtGJEh8QQeVjHK5Smwa4Y",
  "key20": "5vQZBSbpGv2uTbNPYaRcL1qxCSL1igoNu8shcoMqcrAEMajJru6aKQu8JHjZrUEfd6xDHFTyS7pEZrALvDULavon",
  "key21": "63FJFaxGqm1tdNbZ3sDFNDF3xCdkh89vVYquSxVHFHCm8v8os7iHmeu7kzVnsnUoF34dgkATJ3Vn7pDvPT9vvBsH",
  "key22": "4a1BG16rQ6MLQZu1pu4VvER53rv5KWfYN73XScqVsoCitjTgeuXCa8SKvTkaCBJUXJEK1X2xvJxPw6j6PGGVVJLA",
  "key23": "P2LUx7BDBWzK6dvXwXgxN9UYkbaAF2NBYqR4Nb6rNBPBs8XXmYpPYBtnCHh52mstUH54Mho8nNHdVcuEy9fcAG5",
  "key24": "4ym7mu7cvcxqr1w7Br7ByPQoH2RHREuRzZ8XhcrrDEn18H1xZfkpyaDvD1xd2zwNwucbSPkDPFidr7pkkCH6gPC2",
  "key25": "2tqzG1Dicqng9SskxbhKt2XTThMwHMtJuKEHAwhiTrV1oeoF26Yq9vEh1pu48MhrpHZEhdvKsq4hxhSSsTh5Mz6d",
  "key26": "58mEvXxVL2ekopgarfGZSgsrVrTUZyAFCjy9XczzJ4fsMFcgjL2nvaBGF8LYsfTdThYKVuNoSMCBbAVGwDWpoCYb",
  "key27": "61w46vhJRUMdHepscMDEpvU9itQKyQANq8PWSGJUHHs39ybSQ2wJmjyNsHs2Lv1uPmsiNEc4NodWifcXKHNMYCtX",
  "key28": "2hvjv4jnLXMksvvHN9RhFEut726HQUKsQKhT7PT15QGmHW9EnnDrdghqPiQ9iSLnKp1Yuw2sn38Z2kNA5Lp44Lma",
  "key29": "4pdANHAJPRSx9WppNoNraZaHCzzMEVTACse9ddQ9dV2bMajCMZqsHrzhwyB84tFmY4jJqVJepx6LpS1v3oVVB3j2",
  "key30": "64zUhCBfYah7wcbAZiByfCLnPAaWFY4j8egP3v96duC3zje7BUKxhwPxjzkeTJ1Jg2WdxpX6Lw2LnU8P7ADS3sjd"
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
