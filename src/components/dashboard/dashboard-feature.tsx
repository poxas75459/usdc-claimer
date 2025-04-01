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
    "2qccEzHrDzb4R8jreMdSXoQTdGH7c8AB4P8nPL2jmmkVvDmsSwf4zaQc7QM4gBcqEXjGVCnUXRUvY9d8zDfJTntK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28k5uxVz8qMB7BHhKpx6V2WxPSGRNyE6qZW4ZJFYYLTWsTBVJfioXDyyy3K6RkuESMwzdJKz3n5feFDSgvi4BWSg",
  "key1": "YEaaNpmVTWsRKoyT88nEBhqLChKNv1RNyixNnHK2mx5q5UtZtAXQJ6JhuvbqnTkwKUbTF7gZiWvetsQuJpesv2j",
  "key2": "4aQjN2SvUoXDwVHTAQxZsF3oC5akK58mhi7ixYUtvPjqPUcww7aribZfV7AaztDyb2BZz5XcdqBX6YEYzyFGhLhe",
  "key3": "2rUNcqjKNB1sFSsGDoceeSJD9H2MdD7jiRCDQ87Wcdf8EwGFfAxzTh38CYjBZQx74bMGZ4sgwUovAPGVAw5FwVpw",
  "key4": "5kHJBhV4ui82CzEbqR5Xmvtgu4iCZF3EVfm3haq6AAj3yDQDKm4XDcxes768zgNkb3CgJGg3RkNDGRtiXRAUDJej",
  "key5": "2ErJNfMzKbrQwcdQFoWQxAbV6m2gLY8gTiCE7Qvc7SUNXz5ND7RbFDjiPMfS62Akn3Nk6jCAk1JBR7zNK7uVc6Ei",
  "key6": "4c913uizJgRAD48WcqqeF8mHUNtTMa3UG1y85mYKbsHnEN6oq9w5F23J5ovqoGj3qriHUsXSybhkZMX1FXXoKCWd",
  "key7": "3iPnSkVN64hAdkGnaNurdTBeFeFi5Nf5xpihKnSEJhBaCkq6oxTLT2YzDc2KjWf9JQGzUZ2MqEZX2boYWsCVDEmo",
  "key8": "25FVhSVPyX8KnqVYkJYRq2Vnar7RzrDPqLT2MEUdrN21D1DqFGGMgK8SRLbRwCNZHCtdqv5PgYL6Sh9sUCohPW7K",
  "key9": "2jLJPNtkgHEnY9GCHhUkE9XFty4ie1QmYUw3XvyQmztCN5SE54uNLTcZt3v1yAARALP5yijdHjDZAwNYyMycrxcM",
  "key10": "662emxSWTkf94shWmTfvWtA9Y4j3WQjcZ1NRKBmNSRqMm1Q7BKjshunuccTP2FhQiTWZR6fuTaZmGvePZFSCYa2Z",
  "key11": "6zJHj2rGFVvRjspGE9SgPjdxKhVPD9cc9yxtfwfvFuWZe1cnjScUb5baUnBRbMgmwBm8xdwB3Rh5FHkAttSn5dz",
  "key12": "5dMUWNWh4mXH3ykyueJsKafKvoeS5VrKJmYvXk81V5CCYSrW3yhsjRScUYTwP4HfXkX8jgx2XKVx6mvAB73i3fzZ",
  "key13": "4HKAkgAQQu1EezyXeprbaq31cZ199D5RYHKPMjtHaZsxjyMhsd7N8tqahBMMAPY3V2yoBaTWaqkhDExiQWXX4DRi",
  "key14": "35fvSsqnVTuzGQAAf2ABwrkFLmgULR4RzPoJepT5Y5FbxTDfX9gYFgUwqPRcyA4fmUdLrjRMUkSyDnwiwEajCqfP",
  "key15": "2qEk7S3cmjhgWBAfeDBBVqken6SMbpu7XLPLPMBeJJfyqgNJv5m2mPt4SH6ku2554vkYqUVmRP9H4pRHC4j2bfmm",
  "key16": "2yZ9UPJxULAVwYVY1FaS1Bzzh7xmyotBJdH4rF1zn21W87VF1NLyRouA5N5te2rLUzD9D63ZHrCfFWuH3dmfMhWg",
  "key17": "3bR3JHE7KGki2tNMH84M5Cxc1C7AkUTQTTnVccgs6D5FbRdmRGMer3C4VTvrbuY5htbP9z4PMDeh8Uxf8XRxrvNK",
  "key18": "uYmHDGY5eP5SvrUig31WBDKmjzvyK9NdNPT5c2DN1kitibVUsDmZRcegJBBUdiqQJZXxX4qehSWf2y6Nkrez9w8",
  "key19": "35QdRPqEWwHsnmpLXoKkkZtpggDXNBRVJbG5yQfbGbRat3Jhb6gMQVdFi3vwDgr6iLJhpcaVc1Ydj9RKJN9zHgqL",
  "key20": "46XM6tns64n2xeFfMdyQDZp4TYGSbzvD4W2fiCyn5PaFaMvrnWtGcN4HgnsKWXpQ9AezkgonZE2nDQW2YF4yKr6H",
  "key21": "27r9JXA2AwDsHmEQ1YDEsXTLNnD3r3Ev4vSeuxMt9GueXPVmcpC2CcMSJLZfBYZt14yBy1s78zCV5AwC4qMNbogx",
  "key22": "7taNG3LMBhiGKkdyzRCUQx4YsDV6S7x8vy4ER1wY4PfzTfugrBSwLB21RK3p3EHFGZeMQ2ENJ4FoXm5uw7bd8BG",
  "key23": "xhvLRaiJDnJx15ys3gSR1KhonZhu9QPmEmCjzo4Vnmspn7PBS9i2QZBqEtC6L15fHeWsukP2Byk8MigJ8fGJEV7",
  "key24": "2dfkpxXziDo8JhAUPy4zooawK2tLDo9dd7Q2CtWTpyXLc8xQvgJBjjdBP53DhQam7zAYNZCiFSmGkUMJ9iMG7tjn",
  "key25": "KTBnu7QZNABF8vQurTJ5XDMjhoLKKbxkih5cAZddDhuzf1Xo1UHjHm1E1yzMKWkrm3MTqYXmFSzL7sBc9FnwvWf",
  "key26": "4DjUgVMwkwaaaxrrz4pRvkey9cTTHXzTWdeC81z2P7XhPyah5VRuR8dEQUs4JyWyUKGVevJDJ49MxckZdJs2qjzG",
  "key27": "5WFxmxkykq8r2bhFCxSGwrVhPiFU1UVonRHLFxZ8QDncuPu3iWJgdAo1WhbzaGCjzLyhAr5KkViVyA9NhgeKqV99",
  "key28": "VfWzW3J6rHmajmkBmYxyPnJF28CyTi4QuJNatBLdHJBEF23KXfULT1KBQrN4KKiQJfXkqYPJctjtVdi72NJweaP",
  "key29": "2dm1AZokv3VFNSSMmhFN1HyAGhHjvoJietgwqze9TxFJfbe7GPRcs76yqbYPNXYPEeuWR8owiYZQL9XpqowpAxgX",
  "key30": "3cBux2TDfHf45kePjJ3Cr8uKo34LS94h4TWn7Fs5DaJpav5QXP9ehWNN64QzuUBnsPRhCveUeN55N3w2XWsxhHey",
  "key31": "UiaBwvak2wgMyfdcf8JTTHLKETrqBuxGAkbDHvi6qsxRG9aTFMhSvBm7WoJM9h5F74Jn5mX4Uj4GgPwexyfoWvR",
  "key32": "3YveHh37SyreBwh3busXFcp5rQWPHnzo3oarHE9xeUVxjUmMADdT4YCjN1PuE5yZCvDQTT2F9UNbS3dSkEMTWZ8J",
  "key33": "2qrfyXiFLed9myfFKHU7ERHivvA6Dr95Q3ADgsgEDNGieQ2NNjawZBbQN9YKcoQAUjAyiwfmzBR1oii2fB4e2gGY",
  "key34": "4q82iQztyPXhjtSjfKJyQk2aweVkpKkwgTCWdzTrvbZd8BZPVN1W5nrJfY4ogvTwoymzLnj6Bnqqosv6RZykqnua",
  "key35": "2stRTs7Sgq2FveUQHpM87ZakRYQhVEKejVA8rAds1RHzTCSiq89CMXBPVvPREjxJYt5umYUP7MrEzqDaQvfMUFzo",
  "key36": "2EYgb8R7V5u3X3qyicdj72RN86D59hT5ueUawzWX2idC6HU57nYfXz6caFGiu8Ttuhs6m36U54ZCHCfV5kt2b9Px",
  "key37": "5HeTnb3eCqaKEzbapkKrVMez1AULWmXFt1aBBAs3hhvRo4KoxMCt272kCbVRvQywhMaXCq7oK46wg9Lz2gotKcxw",
  "key38": "2JPXkrsgHfEkq33jUR48pefxTx6ycoGuUHmPa4T3n6fbikrHadkq3sY6LqfxQySp41qkEg9gqSnR42CPr3WGP14K",
  "key39": "3NxAXMAF4J6n8LPqB321fthsFE16HoF1BZYL3NPrSM7nRe12qWW1JSvz1N7bDGDYgz5WPFUqMbJfv9Ch9ZuhJBS8",
  "key40": "aaBzUACRG97kJ9Buk8yx7NurfrQdrV9BjLyX6QmUmAayrynGkwEfvcV2eLGTAAQ7A3Hq7x1a46a4MQVUPNZHZqP",
  "key41": "5qt8P35rtkiaWU8sSpoPB7HHcJ8FDp9Q21Lx6zJhoTyefpFbQ5BFsbdPyRCMZ8XmP9Qa5vz2towdzs87qhDECfSX",
  "key42": "5nLiDJ193we4HPt1y8zbd38LFh24TrtCTA3dkFqCm1vazakBvgPk3wyTQxswCLe9y24wBRx8NKisuj6AENSVvgN9",
  "key43": "2uRHmkrvuH6rooqvGXbuyACpDvvwNY5mFDDJjpnNLYUXSL2NhSbGdsRbX2Z7x8V5L2VJ6vArMCDtAadMJqk6XWXA",
  "key44": "25aoSkApDJ982m1sP5sXb8pGMydsVrhZRaRJ9v3JcoL5FC9UAFVVTpVzHp62oUdyhNFwDakYBk3HDUAwt84zfLpv",
  "key45": "5SToBUphMgQ8oKbvX5gr5EpqipDmU94gdSicaBFdG238sZDhcf8UQNt7VmpFaCDFFenmvJZ6WQbCHKmVgdf8bt4s",
  "key46": "4PoEg4NzRUmtMB5ZXshTstXhPETonB7mLfGJc3B5kamwQuTAxji7YEKMXjtZM7HfGS4uSiccfv6zL8zr56KoAd1L",
  "key47": "4DQiSNyCFBeZNYLiWiaoihdTuzaL3WKxWt7JZEme9YXVamHnw6vqK74xiznQpTUi2oGzQiFB2anC78DoZfnnnga6",
  "key48": "5adL93ob5q1enLzs62aXNTHKD9ay5MjyjkjK8Fzan6hmU6CEknv1kXtCu55PZZMJmD4chYUgJMbJE4bZrqgmiD4h"
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
