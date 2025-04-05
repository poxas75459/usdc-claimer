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
    "4h8NULvLJTo159Du3HjaYHyyJ6QHDUB5Xjrzcaoqffp562o9vkVMpF3BVeyC9M7XZGLE8YsD5SVJJScunXPsZnYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V93Kd7Qje735wbxRyGEEXBCkNBFuE35szjW72re5w9rWaypCV9DD7zpRTvk3pfvgDr2AotCZDFmbMtPDkU5SW7M",
  "key1": "21yrtPP6AQ6bdWuw3EaLvHGQ2DDHXA1x9dM66GT5CtqKtgRJHsSajRNuBesFqiBttpBKQ5YVaWTWgzzMzgNvodSQ",
  "key2": "4ysY3Hb5eLqTznZ5pf6WfPLtvDncqThQ2JVYUpCod5yAH6SE3KZvrBNfaizE7Ni4EHyw1Lc4ZLj7CrC93QuHWBse",
  "key3": "5VBvWN9gx5dKDJggnvQBRUQxRfUo56fGmUPLo9w8obqbmDPY4Hg8KKs2vdHdhkiG3v9WSjidCDRVb54ADmHGwkxG",
  "key4": "4fnR7uquRJKDDRNp9t6kxxKoKTPTmXAWiuTgSRjd9gzo59nB5VfqgvkjTUxoemspBEGeqk7mYx2sGsMC6dsbkXwu",
  "key5": "y1Y1puDLaPNyuRVa8Y1yfmtVohE1qvAnUULjgKQRcEJ1Dx9bXJD5xfE6HxPZfDtBJ7zBzjdExvL5Mhxfn6XAxFC",
  "key6": "47vscvGnx2rixFBPJHbMCLXH4aTH3kgRMnqFsbuKX7GcPE7D7yttTFCZzN7ZWT2Aimi8JwEQEQ2dvUHqHqcvJ5gU",
  "key7": "5P79k4JQqwJ1W7CaW3uYubbm3YcSK9S1WZ3XjmjaHK4WLyiAv9Zpnm47HurvYqQj4hXn4iRenA3GM456NBM3BZy",
  "key8": "3T2xdPoS3dhpDtFzLeEHqWCqUADVaJV1bnnfmhsgLbPtd1fc9edyHbkVwT8YTBmCaYRoes1mHLExnJEHbzCcQ9uz",
  "key9": "2J5oyYPCSgj7rr5jhqruaTL8SwZeejynAQGviLtjPeHTu1q4aWskENgvyvDTqfdeUnhBEsPWddhFdtZmW52w1Gxt",
  "key10": "2G1t7x3Vf77MnfgQ2vLu3KNGJv9RjF12AtFG1xuQvH5fyDF4GNMG3GCwGsGyjhoZtGDwcDKtNv6idZuY6HJ88D86",
  "key11": "343XokWZWAxTQrvuhbjMwpywMbadKg4FixVEon71SAPwMZ9cXhk2waZCUHr1RXb4TJGWbmdurqyvS3uCszC5r5Vu",
  "key12": "GV1ietbFhjba5bK6XCF91hcckhRwPbHjPxJpW1y9oMWgfmYgaKWK25RvLseaRgZhWvfXc3653ePZWosMm95sTZ2",
  "key13": "3hc6VhoACxPw2VR7vwJdnXzvV5byZk2Z8esMaXFc16T4nznc5TZMUy5G6n9jgoTPHUp7cJG5Y1bcCmbhxMeVWet1",
  "key14": "2YB7Ntvn77Dfe1n98xooiita2NsjyyDXRao9DoGXKzA4SULgxTs4gVWz7ioNwU8Br7jYWzNM1pQ8CS8rvCX8nwDx",
  "key15": "5BdJtaijks4GFmkfZtfjCDMJWBdq84N5X9c1wqkqqv5QbncAzPXcuLCGP8rxTRhK5k6JypDM8G5rsYX4tgszFZDe",
  "key16": "2Wnhqe875hNo7iRwBjZ9Q5LzXQYpahPUhaWTC7nJVmho5rfY2soWP18MfANQHG1eR2JADXT39VmorX7Dh4LTaWZY",
  "key17": "2SCebjKLQhQHpHP4EhQKHrbL9Ydgvzm55ppiGqHxwKU28gQzLtv3WCu2wLhbAMg9DPxHJrtGppKRFDttFaQX57kv",
  "key18": "4nojpHANEZmQ6JHdAxzgPZHzhEeLKncTP2MZ3RbKBZh3DNk44q2qRSY4dFUERp6AWD4kAFasw3BpqKhevk4wAqVx",
  "key19": "4SCbLuJNBEBiZin1SUNjaiBMnezZncAme6pRGPM8dVvqXmzej9gkCT4Qh5BSTJ4r2s7fSnfBUi99ipp7TMoC2kUr",
  "key20": "2XJsR3hVLbH8xGkxwqLcYMVXJCFaS4WCf34njP5eTrvRejZ3AdaegrGwJ3K6Cg3YKXADCJ9dCSmSx34eUGymTTaq",
  "key21": "4VresrKwq2sCuazFmSnuGJeEZzdazbMnZaYUK1R8cgE34bDVVcHYcNfLtW4RPhjkF21Db7LnYRqXGqkkk3XUVUC6",
  "key22": "4QPAwxh211unz4aB2ZM3qQa6w1jhoGiJK695prwpAvjvotyV32KSwjUhvnVB6e9pTYrLMZuwoVAZ5bRyeqRYsnva",
  "key23": "2q8GKUm6w8ZqW5ySWAYwCyftuXsXuedYAXgxX2owspqz2974UM6rP3hV5emXR6cE6oc9q1Zyz3Ps15eRZvjDQADE",
  "key24": "3gdLdZGNj4pqswCUWYjVrR5hboJ5yT5GPQnhWAvqssKvcHm2C5rci3eA4TsV8NT7WxSKaJDBTq9UFF2sGGa9pDs1",
  "key25": "2s858hBV61c2XqgfLPYasLAabo8BbM7vpbRujvm9hfeSmjFB29LUE3xscEN7ff9LkJJ83bVGwWoshZYWGRfscZsx",
  "key26": "62G8NXNVUed5owYsczB4FGPcjAh5KEHgAxANfZoUwJ9FhzHbJ27LjNyr1MsWmtu6JFzGyJUNnco9daJfRxT1susJ",
  "key27": "255Z4yGPReC9mpmeF6vxFoEhGUnGqBv1SqYLCqCT3mCT6atLYXFsiNhkGhD164cmSvQ5Vqq4aN9PgFqucZJUPDj4",
  "key28": "th84n3e1agVqZ6CHU13b2gS3ToY7g2MTMiiEqANPFnRoMuKZUaz4nwF7qMUxCKzKn1BG4yJFYn6j8JjYUm6qXUX",
  "key29": "4UiCMgXAxnhNNrWFKLRjG9d6zdwvWkSXTYYF87QpYfFUBp2Hmg1s87zMhhEFVYDAfsAQ2t1R4ZKjcM76VQRDpcaj",
  "key30": "458vuFHBn1JNvxKE2fPRpA77UfG34FDTYs1XQKQBq56Mm1fif94cMTSmJe1CHLdNNioHVPs1BnCoFx4kaVZAX3Ft",
  "key31": "5hnHgnFg4ASfp1AvenYxEyPsJVegiLd1EUtSnfDf1oGaeBjw4XkvM8uthryM3jwTSU3YPKy5mAZUBQMnMjykmwxL",
  "key32": "28wwh6bQW1vUnQMCKeLx1pTjyzeLoCPRqLqNDyt6gHC1RkXqjxTBHnRi6hpGKAMKHYK2ZKDng1YSEsN6AfGidxQi",
  "key33": "4uCsNM46FVo9aitSVZ8VK5ud2G7sf9meRnTycXjj179y88pfHgKbRqRnvkTzCLSUKvsKnem4HHUb9bV8LAFzh65s",
  "key34": "54wjEXykgBQkvpHep2dUbXX33RvjAuQ9gSyHePJPmZ468dimVtYa7j9cYN9amzp1USzuu6GKSkHiDGcYSU7feUUT",
  "key35": "3Xpf6UWFoBWWQVtdJh9q99g5hrEsNwZW7MBBd6ozdciGRAgqmN1GcXLjaUFgTaYszNJKDcN6WMmr3UmMe9so3jTL",
  "key36": "5vGscDykKosd4qm1kC78fnERHUvRRfqn3iSGfKbwo1b6tAkK5q3z5TcRd1TAfU4dYRqDVTiQUSeiAJ3G5nAKZgT5",
  "key37": "4qaHnTWucZoGJbhMPxC8BkJXt1NMCje4QWUPZGEuvbCaH4QcFL2QsSfZsjdCxns3J45baJmcERERuJVayYGXweuS",
  "key38": "2uMDMhxG8H4GTNKSmCdwES557nMhweat87dPeRwkgSsTfFwGQvHfoEsyKWooG3tfJC2zibG9RmnRVUG3wJP1sJQr",
  "key39": "3VqpXkMfEjdSbpxCjuv2qYF747whTSQzsLPmz2z1RfXAPdEm6ARy8YJG6mNf6UFJFUTEFDUdkAix9peatAc7PLhv",
  "key40": "TstSqJHL8QBrbivQ2A6eJ5hrr4bLz7F4pLVo9fbK4R8tJqgfUSvRhddv6GPuQ4rKRM52wHEQLPiELbMmzfrGxDp",
  "key41": "52wTktW8sy1pFm36XrUEEqZmnda54pMq3zC7hcadw375K6BNsf14xZzxV9GVMZhDN3HPNqKZAE4PU9aVNAt916nB",
  "key42": "38MgEfES6Bz3h5pTjqWp1KcbhuuqFvq8HePptPBTbHjHoUGk62caU3zqcjpkkU85nYqu4P96tvL6Wv2wysVpFHt5",
  "key43": "5Surz1nAk93vvDLXeotAx9PL7ttKQfhan4k9iphmHrfEZjURKbYK9ZR22VE6zp69t3uV4qRnAKm3h12E3MkAtMy7",
  "key44": "5sdmwZdFWjSnB7jaR1Sfgz4qvxV1DjJ9wK4H5KpWYbF2JoRHwgmYPsgcUetgnhqLe67DTBdHk8hC9FZ2VDY9RDip",
  "key45": "5P8iC6jqwiWCi1WhAmqVsg712wta144TEbZYQitgqB9t7Eawj9z3tbm7hwQjZbVcF6chMRrRJqUQPycfr2m9tVqV",
  "key46": "3g6VVzkc8vWMnwEeY5QcRGvbyKcVSx8QXDu6raWzjSaoL9hcs1sfPqS1nqYqnXRGpX4cw1wmormkKFUQP6rJnAto",
  "key47": "4TLWf81s4DdQhhNbUYUnUU1ziNBTYhDwPHRfhY6FLTLA8FoMTobLnf8mc8QxkAy7BpTa6CYY9GN8duKKmDf5kj1a",
  "key48": "2iPFSFezyXsAGrUu9nqKSjDxXcX6Y8hQ7hVxar6fVwTiMxEG6Z5noMK5UdEiaQ2QhnEu633pDWiUFcFHJUV8bkTG"
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
