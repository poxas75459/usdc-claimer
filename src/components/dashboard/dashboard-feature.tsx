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
    "5bw9xiRyLEuvEb6LJdEGEgXx24dk18ttNoygCw2AFNrBYb4Aktewv9AmapPBxtpajQ5g3dX8LaHRoqugRwf7sZZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VABmpwQyxjpymJiDJeX7hbSe6G3ZrNQywdBTLbPh5dwDLcKSFcZT9ugT9vMEnSsRykzqYeRe7QzGQCGBFZLPLXY",
  "key1": "4mJq53zutqunSbsGRoCCnRVY3ui3aMP7Ry55rQvM9aGPpnnw8ZQHpbDHLFD3Tm2VA35RXWSbJrKsRu2LxE9UjoCt",
  "key2": "2Gu84f3FepQRaxcLQwnBUXK3TQqnx1fMzczQy8jd26tiAi6VVkHNj6Cg8unVTXPddCDaeJgZRmMubrH6AKxX5mjh",
  "key3": "E96nY7earT4ZFE6HqLX6zWSx3TpmArnFSkgt62bCMtHMUADokgMKvDoTvCDAX3C6zudjVJr6RHjj6nCb7FMxaqm",
  "key4": "c1HynVArzkjN9NPQrLq7ZpupMAPXvUejyWkkYKhRVM64MoCGHYMoiSuxgMeuB6EKneUU9Jnz4izTfKv4BjeWbDK",
  "key5": "4FbmJUZTyjkdn66DdQXLdTTT2qBSyaNFhFxbe3FKhn8emYqBia4HNGE1Usfk8tUe24Rm6qTQxAWTyngsfaHgJetR",
  "key6": "4fXqtYk6PZYqBFePsMEqJp8rQn4SeEatbYmhFCUSG9vZgCByRpXyC89XdKzNJcPWvNGFnzJ2pP5L6iw1QQn1MpTK",
  "key7": "3CFcUA5jUgRgj8fPTBYgiRGGWrYWPZjSvq4bAaHUmfnZ1uA1mJgz13DXdQpmhSQGUzrxWDbJisozsvshb8YxA9xH",
  "key8": "51s7scEpypUjXYCh4EG7mwvdkBtpmtSuwV21JoJeTPGwaJRU6BWsfUgznccqtt16N98KJtfdg4f2iZy9BLvkjDws",
  "key9": "2hQoQ49AWHUiFWVrLMmHkdt6c4q6W4HG1am6fa2kbC8behwDMfShysqDPbdYrwJ2Gv8eLpMr9bey9wTne32wg9g9",
  "key10": "5cPU29k2vrxqsryTapYFNKjTQPqu56m2ARcrk51wMkUytZMeWpQEyJk6WcJcTzfr6zYa18Unb9uXzuwrfv6HBtQx",
  "key11": "4inxqx6Ra16TrF14ntkxKDnjMXR1LmWuZvwrPZvyE2iVSeXFxA1jGjR6RkBawjp6QuhrocXSnS5MEpeNcCcXnT6J",
  "key12": "55BFKoDRDZEzbj9NMn9JFNXEayhdPq4gSQLqLh5i9WjWy1aneoMrPHGn6isFepCajfgnDcyziAYtL4gBUqtZQ1oj",
  "key13": "5uUr1afzfgu5hD7qSt5Qn9ycAioJeWftyEurYcGSpZhtoLAtCVSs9gsBj3dYzqFQkhpb1fmhF4vN3SZkYceLHXam",
  "key14": "2fe7NKyNzBJHPYm1cj3oC7iaT9v5yGyuMqks62biALXodZGEJjCC2faKJH3vcLWzz51TLNTerXGZwkQ2zvHAMYYj",
  "key15": "5uwHmowMHod3849nBFA8syk8McMWw8Uc59LLKXpbBiGtWcQ2NvWk3vStDBnEveXPGmEoTnioX3Y3FLDLfGL4d4Xz",
  "key16": "2rshdFdmAHXfirRD3XWG86coVsraPFoPcXEEJattBRmtMzAVNecimcxCkqLnF7LxxnBzjDgQ5aMgqWrAZQ6pwcHy",
  "key17": "2J4QouCnvZomjmZhAce3EHnhitHAW5J2TAYDtW35LNVsWz3EzRc4B26ay2ezGKZX8gMj39BQrwD3VP26Wq1G1tgN",
  "key18": "4dNW1oVQ5cAawDQ7eK4jYq2wsaDxDvTfw2KaHjHKtnBMEyb1AUTFMKJt4BagwkVPRTFyQdwrFtkVSt2tZ4qPnAtr",
  "key19": "5Z4agf84LEPFq6yfLshmwYSzojuMe6LnYEy2BrgpU5avnw82xhmygbHoj2GJ17KURmUyyfinFPwKnKgphU3hzNsW",
  "key20": "3xT9acom2pwTe1PyaXqKML1GDgjCWUh8SzLAQFr3L9AJrPjnAoS12aiw9tzeZdEuHfmtYSLFj5FsP5169TKYJ8xb",
  "key21": "3gZBBHW4FHHYx3KzigvcqNnrdwVHPigdDmQPZE44gczP2dZn2ZSux3M9fcbawQkRPgEtzU2hRAVsJQWF3CqRAQkn",
  "key22": "4uvp3QVsjpcEJJs6K1sobD5wp4RaMnsF5hNF8AHEV9np3qpBdZANLFSAgqFMtegpj1RTuM6Hj4kykV64W9KrS72X",
  "key23": "5MwrDdFr5V7n47H5ipW3SzH8T98nAa8JeCsaVVavX9vdVC7JDeiNwGzTf6GZ7BFVaLKQhFTDpHAeQfDedcuXgH8r",
  "key24": "3Y6EAkYqERDZrqiGipFsQ79bUNs1VZTTkAviBnATvqhnHpPNgoEvAaE76BDACjjtx6wAcgqJEyVvgatZNkHBzQeZ",
  "key25": "4ydueewDUihw9JBwP8SsVPa7ksTyHc6rT4NwsnyyN1jExMEckrt2rsPc46BNUezUkxcuH4JoAjyuCj7yoZtSxHET",
  "key26": "ynfEVS8jEVG45JU2cTa6XhGSZvu3GtFfQEAiZQitJMQV1SPfc9rmKTdVQuhsbvscfvLzJWNv3HTX66mg8cMSHyw",
  "key27": "5Viicnk8zkEViYzfhbDC5rxj37t7Fqa6Gzb7FuG3jEWyFS2vQssmyuStSSVSBXyaYkppjtRsKHyXCCKm44uc2KpA",
  "key28": "3tN8jgJsAqgTSCYtybqrWpYFiYPYQmwceMP4P9ZPYouG143bvz9SHoknqPjtGLWtLCjvRHfBxgxej6gKJbY842BQ",
  "key29": "3Rdjr3gu6gvxnBNKSVypYLcUEVwSCALzPsee3R1D9V5B2o8XdfKAur6wYHePSEXtBMqfMw4RaGthXYU1EwAeMBwX",
  "key30": "5eiXQCXJGdPsYSr2QAEtpe4VothdF7zfoQej3fVpWLXmynWEWWYu96Cg8UUa27noqc8iE4vzE7mMhg9PoZbYof5",
  "key31": "SmfQf4axPZuXmAG6N9TYJWqZAT8NctmVafvpLhs6RmxYpiQYQt16b3aChtpmb4MKdNCiEYsQ8zG6hbqz9i2YVSG",
  "key32": "3WxpEdWGLeQGATLReZXRTA8kNYEw5AzA2NQLPVJc46URXoJBuNfAf3rdPQYkPRrs1zoH6fedeSXowHpxJ5ksBc4J",
  "key33": "4H1xsKkyWSfuPnM5FfHhncwTLFGZ51GBjfiMNwCE4kCkzukdAsKYsmMbUeiFPDcoLs6X3PCzdXW4mRYV9vKQeNz1",
  "key34": "3w8xwoBVH5q4ZSpREpvyqYKkyojz5YTZLucbY17QWkwzu3Ac2LSN9YyteFXWzVRiczUGcq3GXdgNdtD78QnRzAYS",
  "key35": "1H7gUkiG1xGptx45aZZmX3mDpyW3y6aNW189UkVdR3MEiGeNhz7eMfkNctPtTK8yznMprSyq5RhwvyDAoAUzg1T",
  "key36": "3xgy4K8mkwWwSfz8bc8Ex4ghvhj7AvE4jDApBxVX7h8bHSTnAYk2V81Vf8rTKJNmoBHWAxHCS9wCvwccfhQBuTaK",
  "key37": "2aMGwdosaAAyVPKknbANtroLX8Poo4F19kj77oi4hvvv5W8TsG4D2As8SP8uFSV2MpAuDgoj2WUWU3KQkNV1hGdK",
  "key38": "27SHNH5fe2XRfZR3MoVF3Vb7EaR7xPwNoWo29SnCCw51hU4Se6aV6jAsdMBhixrggTSE2Mp29mDTrqL3G66ULAYQ",
  "key39": "4jCJw6ZBwfNnjJnwoLgXYmcg3hGjtaBWmSA7D58JWNMSrTRFZ5iigbvMHL3re5Meeaq1Mk9czYoTT98ARNjdCgiT",
  "key40": "ffCbN7z934gsyTjZs1VeGt3UtP7towxMuaKoA3QbvuMVzRgkX42fPGHfshfVpAyfh3fFH7DNYqdu84WJ35VLTvs",
  "key41": "2vUPaXonSYGNc2EwLWMnzrHwSkrpENU9cvbSmF7xTxHwiVJnjkVLe9PPFhqoH78eMFmBarZC2k2A8Hd5EoUhLfdY",
  "key42": "3YHBXmHzyM2HwcaD7BjCdy7iEf52qjZuKMpGzqxy44RzZzTeNvmw4btVkE3ZUyGURJuz964duniHXkPjSk2n11zF",
  "key43": "SVdx1AYWWQJ22sMz5WK6dUr8MeREqePm7e5tD7nrtRM4UFwa8czMshAyov8UwsEBYzgSpHXfEcwMf5CoREjwJ4u",
  "key44": "3a967ogbLW1PMa17Cy89HqzJiLFUgRDjtD2nNStnWaZ6dipwMZt3dqAPg9mwnLL32VAujC22T2L22UZRmts8iSLT",
  "key45": "3sTiqVpd1z3MVTKMiP1xWk2D5B4rvfUBhx4JNpmQDpuQ4aVurM2Y7Sru1BSpaxNjqnDf3Rh48iDomKYrTq2vk7we",
  "key46": "2njpUBuk98kuyeLhPLgezXypMBxM4SEkw6Gm7czY4juYrNU2FYp7wM5bqP3vX5p2HQ3xTNApUJmqkWgpGNeTA1SG"
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
