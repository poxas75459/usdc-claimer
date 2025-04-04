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
    "3TvCC1CWiLodmtjTF9UT8CYWyBg98o7TJcViJq2rt58d4FQaU4F1P4aq3GAJzQ8UoY3dmwkS4DAA6FwC1BmrcFg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pt2wHEBXDJi92VwHcFtBdtbaJnyGEgSSs6WNrD26sQGczMxF7qSMH6ERbsFsR6Gf1QQXT7xCEankGdnB9nournt",
  "key1": "3hBmJiNXYLKPXUFsFiLDYshaZD1Kpj6fEPqwQw8S1z52o69ZyFDW76czTQFP28q3DcYGZZSWULjuvyQp13EXGRbe",
  "key2": "5oXGwaTpmSyZcMX1RNg6MFWi8nYCbdpCorjooTHJ8kRkhTkEKJnr7CuYpxzFk49meRE3RFKPFeHzJidrck3mUyST",
  "key3": "3jMdSKZkvLNMjby7ebuQVyrvCn2yxhGsLNKWyKgTxSUXX73GTkZGKNQGmvs6Rvqa71AKFBy6ZA7hgXXEDTpTGv3u",
  "key4": "5duQWnsceyBoQWR7DCRFQQb5DMpKbfJAUF7pXQgGKHbiwPEcXTT3vXqSccRNJyQiwUQp4kbdWpAqdTXbK5QaZ2LP",
  "key5": "XHrCes8maKFnuXTA297v8FXVEmksphPifYTex87ZEHy6cMCMaPftqDgHU8hHFye2sw541KdLamwRGBpfS3KQma2",
  "key6": "5wzE5aU4mzqv1PUYbzQSfAJsr9RUPPDijwohCT9hCQo9pDeUdZUHjy1DdRGQR7cq5eCRX4mmwR3wrehvqrgRfYtN",
  "key7": "2AGha1UTNT723N1WLhuMoC3y3PzKLXxsqpmPAAAt1AYJ8ErjPe3Dty5xgfn9Bn3ed8t2iF6XeBH1PPmRjcpDt3bi",
  "key8": "4JcWRvapTv3RgmuVstHsVuWYP1g7wyQfZTm5sZUECBh5JwcrdtkYwr3vLby2UE39DMmzRNSfKcgqM6XJ2NTWNrA",
  "key9": "2pWttxD9UX5LPtnzCiBswTr1FZsM8phe6a7GHxD1YEv12KdNYkyehQAzjtoaW2AgGwYorj1UJ4urqMnXLqsNR4o5",
  "key10": "SVm1rmuWDLHqPWiTwJfc48L7PzRkchQasksDMfpK2CUyvq59MhXhttUy8CtPorNiGxuUJz2KU6p3AaqkNPwyfFr",
  "key11": "5WC8QgDCSuc3fUpHUZiBwkSrtsB6DScLcpHRJxsnQLz46B5jAWnKvQSuqJhuMoDgvgSY1Ck7pGCmEd9d8JFKohzQ",
  "key12": "67TSoHX5bBtEjC1UcfsyJDuJaKN9ue94zTDme3d2LzhN2MrYK299CFmkMHuHMdbGMSU5PcFV2G4DaULaDqnHnMgS",
  "key13": "4ifuLzwwf5tGcBGH4TxkmbmF6xbM3CtRK7ukmXtBSqH3bFcT8G5fhxpw4jwfvJ8LTeE4ThaWBSMGo3TiQuk5P2mu",
  "key14": "PHz2w2Xf3in39mjUzvwkJz6T7Gp2erCxoiHAe7BkJxrMfpjs58Q4NECACVwJF9xLmLHePp4xqj17wvcjGLcQNvQ",
  "key15": "3LWrhW6u6FVYhZPZrbsQxumgawwhgH6qf993LzL4As2yTKmkqkB3JwNC8jDZ5NGwDyXTptqsMm9AYQVJDrBPrcWS",
  "key16": "4nt1hovF7fsGtkeguGMmyBnagzzjrkj6WEb5MYnD1sXi8XyWEv8fXMCHEyxViuPMLBdpD8aGNwoS7iczfantSJih",
  "key17": "5dAtZ6a8ibmHhyEkKwMoQhM7wBDFhXPVAvF66gsqNJR3UaVJfob5nUVAM9FebNb6zrxvQwPU7WU6PoFdcfRZdQHh",
  "key18": "3VgtCMfZ7cxkonzLyRxexqjbPse1r3QH3KnPZiPMkP7KW2qXcy5nfNdXeTr8QDJ9KGhnEQnhe2bAZ7xo4VAPv6tx",
  "key19": "4jQi6ywJouKuXhVev6qj8aknP2vVkj4ZAe7fkXC53Gu4ZQX7sRr4FsMjxw4cbf3n22qAFoDwXjw1su5NtY6vnKzE",
  "key20": "2imHvtwZj9TDC53RbPRJDE7QXcagH9mL9TThsYxa7PwJhDvA1UeZssjCu5sLU6PT2KipHo1iWjfjtMrMUZsvBh1d",
  "key21": "3faJnPtnU7vcPLDaUireYgQQUuatFXLCCwZAqbPwx4dJepFCxcRTHYQcuLA19jG3bjeHbM3Fg24nKKXxJrZS4Tw7",
  "key22": "65pzdzxfkNkrg3JSYb9RtWFvwWWyeyrwtdBUYWRP7XUSg3tUEYkZyqQT5TahL3RS52iyPdMLSX4Jbuw7Vq8hHyP",
  "key23": "5CtBJV9bA1xvGZjPsxj3Ku4tLxpNii2eBCHWxzk5WWcpvsLDJr87igCrX9dHsp4S4dVLb1X4QZLa1ZqeZXKEtWG4",
  "key24": "3tebqzjLqSxSqwSpkq85Eh5sCrFMSWBdj2ye5Q1YjCfcAT55sFpGoT6kTKUNfMEe7fagQdkPUJYvXgfq3xedhrdj",
  "key25": "2PqscFdT2m1fcJbokSD4oPXpLck2hi8a5ZT1wRhwejU6TdCYsKQnxKiSRfEhAKqaBSaRsTjPwJAMCS5sYZeFrKWt",
  "key26": "2jHhBBkqLiCgFJhaKJFkoia9FtKHwReZ5FRj5SjjtnS3XmiQdAnWJ7JNt3U3nXnwYbYdsCDpQmppBV8Q18C9xVF2",
  "key27": "2Nf25y54SspxXXzWFffoGJNX2KN4hQkPNFLi5KTkutJMD2eMqwYdnwWp5FtRtBFMVwwf1utY8Eqsi6m4Abo9nK3H",
  "key28": "4WxRQdSwrhPSrSNaX61TeK95NoJVizaa6WSkABrWFkonD2pipwbrU8SL5L7CMyotEdCu4cfX5jFNBdBN6vsGwfwj",
  "key29": "3Us81r5pi453T1XzaH7vmmb7VNgr2gAaB5uVeiUgQkwpNePUoj3rpvZkuDf6K6Ki2hq63hv2TvDV7WNqBjDKXjo7",
  "key30": "5v3qTnAW6MEwXNbKBdiuNkSSZnvvFRo5r1jY1FHwErJuePHxijJuqNAA97zEpaVZ5aU9rFmmQ51rCd9G8oFridhp",
  "key31": "hbXsEwsM4KQStZy68G54q8m63YWUjFjHhuRVRxMz8o421X8K5oiUrbCE9XyGnruNnDrtzkR6Jh31gu3QxB5SDQ2",
  "key32": "35FJCYx53oYJxo69bwuyJyqFdK8jPsaWia6fwqwXQFiP5PakCa9zrCSxyYh3myGAXDzdXDj6dyx4AgwhPnVCqTPm",
  "key33": "7suMbjwFvweC2nJgoG3xWXfRBrLRZvLpzaigw8q3tTx7zcNWGmiQqG5YQi5MjsVTFdBnrXsLgmNEdxGZ3fsUiJE",
  "key34": "458qR6P9biUzhnezu3CP5sYEuZu2Js4ze2UNAgGPVLK2iaz4gdVVn4TGHFytPumRYnVJSjb9c1q2w7TL6PBzmPPu",
  "key35": "4i7uCym9LLws9uoHhAESrjUvp87jdKZygxWapbLKyzAFhsMdR1LGFvV5RisPgHXUppvmYee6UXy54vGyHEEo1rob",
  "key36": "3hFUTiJ83UcFJdtCmUaiqU1yFJyKQV5NXFcWHaiwfPdVQ31oRV32bvH4GSp9wXZ3aJAfXLfyQaj9wbhjDowEPYQz",
  "key37": "3YCCqdL7vv2fBdCvuVResX9DExPGuCJV5S7Vps7PQTdSEf5L9hJqBS8J29DEPS8cB7tw8tnMBXPVQy3X4KWinynN",
  "key38": "3wV6RKQzxmuTCFKwEBME5MamUxgQJkvpvygSqBVu515Pi2TagPdLYFDqp1vAL5eV24rDFAw36YqiWSM2r4TQ4x8w",
  "key39": "4Z5wDSoHBVmiVV7Y2rKZaqKd7UJXuzCmUJE14khjWvFuPhGMCzmi72jHuYASMuz7BQdqqBMV6H5ZoxJdmGnmQFn3",
  "key40": "37nfFZ8iR3JymvptgAcit2cbgJm6Y4B8yYHRBmPEeWjjCgry4MDPpnseoQubHErEFnkXUZfehFduaVNQjQFvwcwz",
  "key41": "3SCFjmjStNwKshU3eYrguBa7LkHT6TuRjegFMhHDCWh5rj867fsgpofUNk9aSpfxN2BzUUzUT1WkjT7d69rCuKPB",
  "key42": "2txTGdJfxvfARouCxYgEXgki9TJQd31zfUNLn45QPuPxsoFozALyD8MjMi6WJ8TYN614FMxV8FRjoPBkjFrzzi31",
  "key43": "4ac8EyaZULtDV9TewHrhSAdd6HgxptDcUKkfkn86uNrMuEmqKp4dWjwc9NXkrKX3jGAqxj1ZKELeSvy7rrzW35w6",
  "key44": "3UBEyPwprWGbYMWEyi2Cj64hb96QLSKAQVmBpUvYqUEDsntqDj9bjVrzW6yj47w8ZdpcEVrRgz7CUnDVRKNhAQgB",
  "key45": "2rGEbZ9XMNm2Ndsxbe136qjSQH825Xpg9pLjTLFhNzsd17Jszq598S9cLqkCYvPh4DZREcSZnUxctxg8grc7jRcB",
  "key46": "2WYJKHMUE4kvN9An8ZWbxuJa4egHTFVtUE78LsU1Kn5gQbEkGX6b81TNVLYGVWTrb26Ngir7ZuFhU1uzWKYXrJjk",
  "key47": "4uiANLLLKgJa1sAXA2cAxchqKJ2H9QdoYZ4bmtY5JoPxuUugwdm7wUexC22dJTu5XQYnUwaapiPJyo2wPZxj1DA3",
  "key48": "5Ycm3TTx7mJgEMmaPr9dMVFkz2sf2tsj8b3BZzY5L5kqzEHawN7cKvm5RZgZHFgThQ7zPDenJJFYDAUUURheVcN9"
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
