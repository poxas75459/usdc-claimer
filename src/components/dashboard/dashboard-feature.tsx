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
    "4F2hTbPvJwCdFihA9UMbTpBHDQ7T8ABrgNAXXV4NLsdbyKGYvjc3WdZWQLnhSDqH6CdBWW6mpyqWKmZ34syyE24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mivvb4iNZVsVSaoYYCTNSeyacKpAW8hd9sB8rBpYvxaH2NbMukNCjwyBg3Zein66ZpVxAUEydsPKacsaocoY3rL",
  "key1": "4rAD3X3SXJgmsGFjXxMs5YvRAfBCbHXPjs1WxshP6vJya3qPDbv8KJ1vstkzBb5hivTKkkvwYE5umMfATHcpQVNM",
  "key2": "4tTRo6jSvfeB6JDSot7bVVgiKh4PeTwTT73GyLXwFZpSDXAoetdExNzYXCubgUEWomxeueD4JBc2KQrDRYStexrw",
  "key3": "dsXaMru649LuyAK4jYdE1T69Kzhx7D1mjfb4RV8fuNp3mYkEEdttbvoe8fFuU2bTvJVs6bJjATCzSC8VgBk1tei",
  "key4": "6Npd4vbHQFYGJogdECf8THgkxNbwRpTHkQ1qLU3Z2D15i7kEVBenGpjLg8PQ2GJBJm2Sx2VghTW18brHfzGpAWL",
  "key5": "5SMZjJXbmgcwSHb7gfTFmSUYyMK7HYcW57iPr1DmRiH9xDkWwHeU1GRwoi3RxjLt27r25Lk3g4qS5EsUk8qKyfDU",
  "key6": "4McPeS4kPVsaQgyXwQcyUAWN8R45Tz5XSraSLf3yq5BBVi66G9njAGTNeWjYWkCRdEgAddL5m3g8PZraRsGLyKQo",
  "key7": "4ELJUxWJTczzp1TEA1zaVKbdpjCan7PsEydH6gSHvYtAtbcFqitgQ7HtNz8Tcqm36navqtcchjSYZVDc85vojrHP",
  "key8": "3kdML3Di1eyfwoRvQjZkU4GGQZEtCbce8d7jTFNKPUYkCaNMHrEVipbHZ7Mbz41uxEotUvVPVWw9tfA143w9oXc6",
  "key9": "5196Nz5u4UrhgWe6PG1RV5739XeiKXTZ4ugT9odZhhgCSH3U8BoCc2PvT3ND2yUK7cSzJN7hZeNXXYdgZKxcxCVv",
  "key10": "4i8kJYRSPwePHM883QGDUR6fCrZRxMRkUQsfvq21wkyrsPTWNaTA3FFFa14qjDt5NUVEF7ydwvoexNw3wK5g2px4",
  "key11": "473ZPDG773FCSP9DuBVd4nAcFFcVw79Xenqo2FVcJbX79v925xL2MAWwNWejixEwWpKf8Uy5o9Kqjm6tDyEXahBd",
  "key12": "63ZJtpLux1DzdtBv2prdH6pAg2SBxYffeUa7rjyQYL824nuHzyZubVc5FEKcNm5PrNSGd6R37YnekAnDp1V2o5o3",
  "key13": "5JGnckkPYWYYoG7SeWpYXfEMXd8T55Q7NTikzMVwYjwz38mdAcWyiG4yBwBxJr4bdJ7iW9RTR9DzyyV4BbFAnEfy",
  "key14": "46mDgBHPr4YGbmfLTc7ui9iEt3sJZzq6ENt157QWen8s5stVeeVff17W7cbq5VXC3LojRDZJfcyNnAvJ4NCbmRvQ",
  "key15": "5oNELh35HX3WuEoutS9fs9b2VqT9k4pSryM7Eqwee9J65NZa9SwPDC9XPHVVMwxU4NafNE9qHUdWJz68Bkv9ScCc",
  "key16": "33A5zMCUbLA51MY3y3BTACTs94NXSf8LUqVvrybYQHYMdFn1AnXav2L28dL45apB7GVtmM4uBcKC6t4JzDBkqVLp",
  "key17": "2M95aH2rb2mLcJPrjVEDFuC8mmuPm2bXoES2i7Q1Sf34Aaahm5e3QZ2drHiLtwN6bWiL5FvwD7ExfEBF8sSZtpMQ",
  "key18": "5mft2dn7oo9ck8qgYjSKUiEUrKJfmiukdHa9R9cNkm5kYSSyFRBdkQAwZLXbaiwC1csRTjbawxeLpn2utBwMLQQk",
  "key19": "3XDwi9zvUWw6PvVUgVNB45KF9k1tiS2ojsX9BUztbJZih4iYvTiQCYfcwuXdBsksNDKzN5v1SjM9bGVwpakqfd11",
  "key20": "2mbDHT4BYLQRzNofjzDgpKSPH6GTLsSeV2XYcid27Pe3duLg4HqnmjWiFQgyu778ZKVKBp4beqygHgSU1pbekeg5",
  "key21": "5Adbq7xoYMh1pcRHfzxxY21Yzg2P1eT1HCujji8vP4S3bdErUB4pisBNd9MQZWaTn6aK2nmFPNs2JYmQw5A7adP5",
  "key22": "dbGTcwti1vEgTXS3YVLjbHwMtRgSTWTv7522KYCbiJQUDFi1U4ywZZS3uSke6oVDybwtswwB4JKJhM1rJ8bE7Uq",
  "key23": "4eFePpzXrcVL7eVSwvHvzfodZ7d5s3C9A5JZWyJwFiRyJcycRt2KDXXk1B9dY7RDYDwoG3bkGQHbRdta4VC6XrDi",
  "key24": "2orLCuXYf1oVTcdgARWLNeJt4EPuYpjQjgQbit4mCVgg2jVw2piXZinQx9mTPzp3UvCAQS2gYxGBgpRu3c7dNf7t",
  "key25": "xMMCx4X6TYXM7AnevfJDFRVT8KkeWKtqE17r4ejXvpJqcgEe3omung5ezutM9YWpLQk8vy87WtUBmUwAVuZ3zeQ",
  "key26": "4u8VDJLr7k1k2xAfSfiJAntih8J3jBNGXXrCfJNVUCFt4Jg711k8zFWm9XZx81R6z814WEuC3j6VKm8NxxHG6Evu",
  "key27": "5QihzdAKdi9heRbogeQqEsswfjrNDXhrJTnVg7KwbCNsxBWWqEECiYhtizwEH59h3epDsdUPWRxwa1SsEn6DMAuj",
  "key28": "37MY6osZQvBqzeqHhsQnMEgr3wmdQy3tPbvjaUY1KysrNqD8FMmMnQoaEy3pFXYnaEp5ZCgb8Q7wJ7Zrkaap5ZcJ",
  "key29": "4s6stKn5Xm8Ja1K8QPTEAmvXafhwMp7ZHanwvBP892Xiv4ijnvp6c3brkpd44u3PXGXA6ESv7rLwuYNA9HENT5Sd",
  "key30": "5XMpifQEyR52YD1mJoubvYJLLD3jz7qH2L768ZrbxUnidYUteB9acAU7Mk6R4Gu8morwTbYZrEGhNesYmAhpHeWk",
  "key31": "2ohER43aDfMhra8kMEzUNYrWF4Lcnd7y9yU2A6N3iqS3PhBcruaHSdBaTvEQoKDb8Bt3Egc3kaJSKYxuh5VSDmk9",
  "key32": "2mxQ8Wwu4UxxBQ8CdoV3a9xKto1ynAum1fy31XUc3VqrdrBmGycQvJ2zap7t7AAAU3USRTxvgfPFymAkgAyZyh5F",
  "key33": "44Ujj1Lh73iiZajkPLTxqdpkFMgK86A8YhdG2RNCCAbJSANZ4Cx1WyBTjtjShJETbX5GASwHEKXpeN7Umx2RXp1G",
  "key34": "33PH92CUJpxHCCucLyU1sHbsyFETDKdPUe9UXczeehxS5zZKGh3q6vy2XRitHJTRXSZPPgyh1NUgfGDuASAYQV7j",
  "key35": "3J2YhnxyZbmsyMeisoZdW3iCDpeuVUwKZQTz8wV6ZKzojML8PxHuK661MSdGqMj24gz5VjNR7xNxmo5rs8uGXZg",
  "key36": "3SPZxEijzPzUTnRosa8mMNhhMgbnSEpbdhgh8bXvTdPhX7r86Wrq7vAREhuLdkzeK78t2dmqt7d5RaCsvMGhcK9g",
  "key37": "5nyiZeSUnfhNP7LpEAecTYBCG6p9tS6MdfZicjMEQgWF8ahH9UYS39T7DmPGY5oZAytvLKwR6yfAxzbRGvnJdjA9",
  "key38": "2QDxxH6d3AwvfKNty9x8iirUKAxXSXCJ4LMKkSZbcVecuCUGW8GXXfmpHWJnSiFHy3rsahHSdxjwHsFmLvnX7Sne",
  "key39": "38oBDPMws6PksNp14chTUsK8SvMABRprWFBrfR3WcSvTGP34sSy8fjGQgR4LwnkVWkvQZkZHPkLUmjZr8pHMbUHW"
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
