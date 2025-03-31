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
    "KQevrVuNreHtBPucbJY3JJdUqd3DLWjnERvTkcMMEKbAXM2saWbjCEL6xa8nKZTTFEtNRYirBomDuptTdFUyHX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvMMvG7fksidVaPXCAvLE9MS7UUCPGTBFwvisqvEKPRKkgEfUbaqSTQgGpxFDuEcAFUkaCDKnasi8KBj88mLGmx",
  "key1": "3WD9ZAtJd7RwbCb4GQpzGKvqGtS9MyqCP1JY9FEC5hLGGyYWk6iws8WychUTQvK8VyQbvGNjBm5swPfNg1NAfhk9",
  "key2": "1251p8A5xv26S39xjRxXaijV1CeRoWPbV2TfKXzPFi5MRHyWSzU6X4mE7ZtGE9GbgBpme42oVB7dPipgswWSAYnW",
  "key3": "2HdKZmr8tBFgBtuiiP9XS1t8TXFrr8Z2dPTDMy7nrgnVshmzqDa1NH3nTaveqbL79rEiHwhfgqJUzcyYBjfBzbZw",
  "key4": "2BVvq16Cj1fD514L5y29h9VFmbwFzEz3oVfppSbAbBufbeFfeYzCXmwaujXuWf6ZfquUjMrz2XKxbugna1QmWnZS",
  "key5": "2NKm3s4XspvrZ98cisRAdHSa5tp1BZ7zxM1ttPa6C9Dv8ytQqYQjmK3pQ8Sv8kiB1sAcz7qJRDsv1c7bZU85XYu9",
  "key6": "2CvfWALWNHZpiXGhAsMw9EoAW54MdJnEYMjufqNoXds8GupsM7UgFPfmoeHeapbKQ9NjPs22vCzw8iD7AsqMB4uZ",
  "key7": "5Xd1CoLuknqV5icKPekURPv35AJBFNkUQH4d8dmuQXyf1jiW4NZfhDnMFkvbtDh9A7tpYfhDNgZ4PNwNE3N2jGTe",
  "key8": "4BQ5o95pHQtLLXy8YmJEqrJovS2ss1WiykdrFSb2zHkFGfLR1h5Tg7cpEQurFaFHxNg3jrErC1VhBEHu2gmD6uPx",
  "key9": "4pm7xVrukQ14us1TAWETa98RBymLwEKPR3SbcGAif9Sbb6TF8x91QaG81vTR9u7RC26hJ7NzzwRhoCLUL3YbZt3x",
  "key10": "joXdpsunHtZMSNZJALNiywZobSuqCriL8ifurPHaxU216H9yfBGasjqaj7Ner3zSF7XC31Y64GgjabktgvKTqST",
  "key11": "4rpAKZAe6oQaEweyNqzX8CiTjsoaJbTNb6ktT7gqXqpsFhDcPA3cQNBuz92756PjX5iaabeXwr6Rtm5aUeH6r2ms",
  "key12": "4KVA8Bxq6RXBC3f1VTMiLG1udyaaoVy1UqtnfocvWZFVmA28DXEwrSeSYScyi2rsEi2SVDGvnEU1VxXq28mD3tcR",
  "key13": "2g5A2nRkfnih3vzptAr8BbyEc1XTs8eivtVQixqK2mHT3ug6tiLoge4nZkJ3hFwygrVfCStTC57LLsZXRMGDtW7y",
  "key14": "dhh9NxzDfuCBeATszfD8XCebiiGMzmkcLd2YEtxUnwL27xrgof2n5yk17mKCHudLKrqBd8heiDPEanKsTC9Fbov",
  "key15": "5rkByCKwR82DdTxPbZ7vWcsWbebyTp2G2HAzhRSEWKig3KXEQFtCr5Sa5Ygx5v6XkeYWomCeGhFKSBVkVQ4esYM9",
  "key16": "2T62QxpSigMxhG5WMR9bS8e52etU2xkQJVvo3f2JKmhUS6tb853sknRafgMNj1rtvrjJ5SSz6HVUrnCddnefBkji",
  "key17": "384PZpLeEbMuzn4CfmvgLHPdoTAvgHrYFoih5Urr1paubqUW7UGhN9sioVEkcvpEnjx7Vh1T8iMu58YbkATJUsBM",
  "key18": "RbkVMA5RgE9YnURx7xAxjD4DuwrG77XZ8urvyTEUP8vsWVzQHrPyPXk4JMwWNscfZoXfEpNyeKqyzcwZxXQ34f6",
  "key19": "32s8j24F5TmG5soPUuY9Rp57Y9seCgvCnjDSMfzkQ2vjbaneBosUBATc9b6HrrnJca9ZHhiYxf9498cC8MTjEUuu",
  "key20": "4YYbbZJCw1iyifEJdaHrmnp9TqKb7TxDnQ9gD5P7s2reTzwk6Ab6zqRWXuqdKm7J1892EiwFcsU8yAdVTnuZSM8c",
  "key21": "MxJbitM6oy43cs9xMLtQefvSZ5eFVMREoskXg998nsrGFwtFFJWPegTqaunbCzcQGnPhahhPN9HubCviYZk6jc6",
  "key22": "2g2kDQctX6jBWwoBtfF8XR1vpCdiFdhHDEmzmX5tmtKmrXEuTjyWKSfV2UTi6wtmSULy8sVfMTTn8N37GB6WcfSP",
  "key23": "5JFSWs65SsZ9eRmZhNW27gXCaX5ANViAF5F7eaBb7Huf3g2G9MuXSCzDYJF42kGtmj7yiGP79y2dqJp1zWskHRxU",
  "key24": "4mEP6ZrBhSHqnDRSZE3nWBmjpkVSbfzG1xAfW765zC7kKeokpyad4K3zFycCvEMq2RvP5eZ4SADfXkV86qjRHPGV",
  "key25": "2uj8tzHE4bF3P9L2gG4iQDN8DyHxp9j7WwXxN6VEGRru4zWbh6hi9ZoidDgsW5u8i4YgXw2YMPLsv5oBMiEKFaLP",
  "key26": "5K9t6fXQFS2dmsgG7xeJbxLPPnWCdc7WRA3wEuijTK8yCKkUNmbdoeoUaFQF7GAMYxk6CQ23GNECZSM1W7VcJ5kD",
  "key27": "5Z7Fz5qfb8mdMFz84kvUZ6p7PUDrUgmBs8k2vpr7ceU2xjY3MAsbrYULsWUkQb5XGghFvNXiVW89JL54AttDeVM7",
  "key28": "2Y85veHtCzjUZ2U7RF4FcE4LppY24GzupDuYBy7PvgfRRY88og6QzLr3E8YuoJadzQpYHFhd3SgNYY93V2zomSgu",
  "key29": "4mDR8LB5abNXgnCi431arqqGZwCnBTJWuiE3mX1Mv7Qbk9sfUAsjQpbJbgHj7yQoyKAqKaxDKEpFnv6p7mw7bgkp",
  "key30": "4h9p8pe9Q6boE2MmaGLQvEjL5unyim7QpMunWu6XCekFCaTtqFwxsvxyesWTonTcMoPAiYqycuM3USnXPqr2xC6h",
  "key31": "59taeY7pLErT8CKKbt1yrjqMo3ZcTQ4jCV8bFHkCErJ5TvcKitRGLo7dwpfHHXZGLSU1LMguewbWezEywzr4hg6E",
  "key32": "2Busb5aPdZjSWNBfkDWyZiTUbgwCEPJsmbKj86pLT8iaemssJ5VsScsSRTAEatAksBVv7pSKV9eRFTvgMDzsdjy7",
  "key33": "seGxB3PzhbsMmfBmsV1dpApNPrP7NJ3LMbWp7jywtuYpwCD2yVazMFDqJ8smJeGMF33hVfxMrffTaG24jnYxgUv",
  "key34": "2FAoRKXVHB8v7Mjcn7Nt4kdpVjZ3paZwfupFsuqJBCuW5893vUgaCgXnrQuzz8tmCfn6Ua4rp4o8NEV5PHAG3nXA",
  "key35": "27sLMKsXShqvKoJd3FdmWA1DJwydE29Vqyub2BreSn655tjcu6v4cJNXvYPiMkK9K7ANSnnbNpDMCFKFjGozaYGT",
  "key36": "3ybrT1a61eBn1uAkSNysAya6cXXq38vBTxRT6Vkiqkxb9oCGEqUppggmj7pXzR5YiDcGQmBmJ1MANj5oPgFyoxDQ",
  "key37": "2zmcMLbdx5z1DaQ1Mz9TQfEazgYYR5DmyqdwGhevrMyyq4XwhofSNNibynoFcfEHxTV6RrZA4ShERyYFr36rw9yV",
  "key38": "svwmpvHLhGKBchmMZX7hwKrxLvshUSuFtp9k8G3yLcfeHypg9ED5UwedBgenhrx2aFLCBcFogKXn1avUpxBG2LZ",
  "key39": "2e1vwJ3yeBJVZdCDMtq948XqsGYepr6QnCDHHzVB84XLCAqn2yMR9bwBg1dPkrUjWWbQivrnE7QYRPNy4DGE2tFh",
  "key40": "48HjyGkqaQtWUqGmJWGF3y1qWHLMq2KSYLjHjRnGffTnd9cvN1oiZznC8Hdu2ByeQ5ReB73Xw8BKV6GqdcYhSUQ3",
  "key41": "5bVEujrQp8yaTExDbsbRxcwHp7K4GLwdpnjJJn47dh7aTTd2CoD2hWHBvG8ptNoV4BMY9oCVnMCntQPoMvMEPYvQ",
  "key42": "3zXkSNvzhBmC6wJA8cyJszN343KNK3ZieP4ucsoecR2TnH8as6i2yat7Q59GJqVzMhT9iWj7741vxmsWyDh1P9hj",
  "key43": "66ccpqA4yxPEWptL786gYfswFvbLuRJ17iFffap637md67qfdpwRfgyEdfGP4wpxVGFkEdQDpad61Lb87Hk7WGnp",
  "key44": "oVza9YsxXb8zyQQkofcEboPrevkmpPjHN1CWC3e172kZLW5brYcFU2gd3z7X8aiTazrE7Ar7kSTzqXd6maKKT9v",
  "key45": "5QZ5d8DK6iEEXBa2qkz4PtuS8TznJEZaD8QFHfZtRAaenL7LzyGhUofVDVsXi66AkZRj92WeUGK91vzUws5reqfN",
  "key46": "4jzeNwKp428SXgFQNqv5RdG9RH4af3Nh9yPEjaYecfUj9Q9V3oVEVpBcpZWFh33ef3iehc8x9ruT3PvLpm1TZZXe"
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
