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
    "2S8o3UwjYMiTYPdiVvhyEtYfR9WfvGb98Jnk7Fo56GmjDU2mJkEbmFZtsM2HKnQCsw6twosm5uJMun48iuB5Ji3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wByMSj2YHYcDd4kzXfuf33TCauKhjDwXFTNusHxHj8qQPKaeFMtVnAtQw9SuyjUQw5aqAP1FyRGkYDijbDAE3zh",
  "key1": "29mcoWiF4d8gQLGUqs73W89Q6B37yaD4magqicMLU2A29fVNX2bnDZUgRxCtwJsRWrtyLaHBixuXFc7EMYALYpYW",
  "key2": "ZLnNTRaebQUNqBb6cFVm3qvPBdgjup6PN9rSXasKevLdpcvJWBbX3CY8ja25Fs1hf4WExEeF9TUmsBfcC5xQYRo",
  "key3": "DiLXrhTAoYXgXm7Agq9vS1Q5j4M2M5mK2jP7ZwCKwhTkYkycVGpwsSs8nxUfA1j3LB7rZ5tXmoaMG7szZFXxR3t",
  "key4": "4p8uANjDxmrEjx34P4K9J4j1c6NxSN68jhjFv3JsddQWyWvGPNVjHNEFGR2oQk4VAdYzykZUthHHdaKq9JFJ5d9z",
  "key5": "2gVx5dJTnsPy7aP9D64Foc4aRNgT6jKLfNeEjjA5sFyDmke9HfDF81eyQdDVRex2S2StbvnXfBhMArst6RuvFpw1",
  "key6": "vsdc7fe24VFrvDri7MJ4oxJbEG54eLif6jtwEdpcVuUcjvyA4CpuZJtDehfLueN7jEuwEmareo51sW2onhzYhWB",
  "key7": "31oU5YCcKuauqiobFxTygsN2NEkEaCeVDMegHTyexVRRt5m5vFoptJ8TmjCh2cEUPFssdUNVZ3LrRNzqaN5JrhLh",
  "key8": "3QF1Z5H23DC8m9xQV9fy9gdUws3PP5BaDZp23yWKyx1eDRBUjzvy4KCQs9TvkfdGntzcEgNvEV8thMgWyXCB3pH6",
  "key9": "8tyJF8z4fg1M8TWpb38493GJesc3tsTFDFMgcFdGDWBCPwjRVFgtiRHx6VkM7daaF5FDYBKYp8BL5r8tLA5oe2X",
  "key10": "2u4q6heC8VRDoQVWGfzJKd3YSS4KUc2sFZMytxT4jGcQTdNKuNJuG1ZArnRDHGW5E44TecQe3FbgDvPPZJgyuu3w",
  "key11": "2WcdpPhoncseLDAvVh7vQ3oitJfriFdYq1zo6R17cZtUqKPEaKUZTA5sfNPXKL6itVZ1W57wBBiUewwxhoptbBwC",
  "key12": "m91FiTTN9XRdoGc5JWv1Emyt2ApwMM5mQusjDSj3Sr8nEzMX4fzP33bR4AG51VJWEjHDHSmFmB3HtJT7uZ1crhK",
  "key13": "4QVFg1mF1YiTxQ7PX1mAP4kpzptptgE5z2s69qiiDv89FeHFMSZCSM2zCqieAQdsHkxrsx5JXQTLAtNFZRqfkQD7",
  "key14": "4BH1dEFS18LfXpiiGRS2nEFccAzU4Y89BvtHwCMEYAHPcsMyww6aVT2USVSDBVr78F9fTALP4F3iwpVeKXi6bvfJ",
  "key15": "4NnebzhuKiHmj5biEnWSq7xMjb9BwHjiNBnSr2BBZ8Q4khpZA83KxGZ9phKNLBVh2L8YBoLGeMFwM7CTerdhXx9U",
  "key16": "2Kz6CZcPMyRkd2vVHSn87PEtpNXvc1wuMRhhk4REoQe9UcXyGjFebZiBx4kFc7bxjdc4qegUg5ZQBL9CwjcjnQgA",
  "key17": "2uqzYZf1xDx2BdPUnXxngMWHD7s6jipt8QFyfdt7idnmeeYemE1qZWn16wBsfKngDq3sywWqCYbAHMjvpFo7KPU",
  "key18": "rb2Ck9Lvkhyzvpe5GUDUQQreguvnvt9SKAEUYoJZP9fuCCGn47j75GRe2qcgGzTxciFgB9nJEsTmeh56GhwcChC",
  "key19": "3NuePCbra8ZTkefu69kZzW15LGWTGt5Me3iNFhj1a19mAqxvPnw6pwdtCMiaeZSej6pzTxx2UShMCU9ARM4QSW5E",
  "key20": "2hiymPkgfQbbAXhez51fXPmXTmkdtQBMYbKYLd6cBwtMUos6rpxfwXcEpuzWUvqrShcB3Swn5gjBVCpGwiCT1NVh",
  "key21": "59FeuvhqhnsBH3tYsutDyF2ZhweszvBUPg6voTZwuoiQ6pQ2vN8pDEPFg3yZDCb2k8tPC7pqAZ8hjz687gYm8NTn",
  "key22": "4EtQ22mWunyWUgNycErYBszUevhYynjvF51REwWFgMWQVJF8cz5KUYGSkBoFCwBxWqpS2zR1WXYUbRE3oGpxngth",
  "key23": "2QnxLzMFr1GcyM2amGU59dsAmyhc9omgsLmG8UmDVZUn9L37xz4i2ijdLRiCcCnsTXYnSfhqFo9W8LUUjwSPqqtm",
  "key24": "4zCGNjXNfA3SYkUVKKgs8KqamvUC6uL81BHtiKLbGMuC3EvkniSdmrqyosyEfrovdFxwMYECBfkmTLt6CH5FnrwX",
  "key25": "5uzJbJJr87rSeKEtGam5AaQfZvmNpLJs9S1oeHLqHrGhUjUtiqcBLgD9q3RnvnirNqZsJoYkDS2GD5mSUYssVP9e",
  "key26": "R9uJmztXjen8fZoohPxhPbD64sbzoB4LzBNgCHwEgZEeoFsfqDU1bpVumR5H5vQHAaxjKKU5rfenp55msN3k4Pm",
  "key27": "3Lpv4GofyEkjYftzRrrtLdSjdpAsVhGKWimtjv4RYyfm1NXEAL5MJP6afXgZacD7L2nMdzZi9VHdR5Li2qMNDtJg",
  "key28": "28dBhgM7LmGB5VAMS2keUvWHNgsqEU6DMWHz65Cti2XwLETDsVYKRo2LTey53nRA4sFvEVEBVd4PLqYFKaRYFkhR",
  "key29": "4JGiTCeLTdE4uoCFWdCei7w9jQk1juQfaCnyo6KH5Jc6guCu3vJf21n7EsubTnij4snrAkFDaVDHfJnyq71bv2gu",
  "key30": "59w1bjb3kZ9a7THNsXBNwvhfkAnBwzEeFC8ithN721LjN5LFvZVytJXztU9abBh57qzjt5p5isoMY8MmzH9VS3sn",
  "key31": "5iT6XVuuxsJauFV18iKrFQXzRnz3voYt7SkAHjG7N3QPrWz2VVB1gm1etuKqxZKKEgSxwQ3ZRJZ4VkiwTcjP2xpG",
  "key32": "3dTbGRnGNBHphnGmPvHTzRDAVFMCCASdSJbgwjDm4pdMcC8agnNDpTQPsw3KZy6JnEATgPf9NokinFA2aSfpk6fW",
  "key33": "Ee8G3vb5VjjrxznvgSfuUTWpZiArhYYdXqBKKauQmHQ6dCAC3TjgH2NPuTqoVhjMdj1SVj6terg258QzHfLcy3U",
  "key34": "4T1i7eEDJtE5TizB416tirxvNhog2m9ncrhR82vRsNj8QqEJ59jNN4nUEYdAW5LwcYonDDZ2kUZM9HuJ7ac8XY1Y",
  "key35": "XMP1XSs4cFjFZhzo9PpZLKG8ScNQnhTnb3ySwDNb7ByxdzJX2UNLsXgyYLmULMXwFsUAQTdoD1XqJxjnQtwjoXF",
  "key36": "DVWftM9njFKmqdTieMRfXLx3fRpnfC5LsZtJjtK1V9FEPhuSLmHoV2nhEY2dKeTYmTH1ggi8RJY2SUvuEtsKh3z",
  "key37": "2NNZR9fMqcAgSEnZ5c3SHQ6dZSCNaDgjKstxpzko9EDmgJrw2PT97fEsyQC2LY8NcS1zDrU4u1vwBfMqJosbcyER",
  "key38": "3Ec6m3rvQmeF2rf5SqUAt54PMqST8vVfkmYFLyM5fBzhQkJdqm2SVetYsK3e6wAV5tNJqHcLFA96mL4UrEUSUw37",
  "key39": "3BWdk9db5QY5YyvQrpDAEgu9Tip9G2Cr56dNMTeoBidmqimHr2Tc76owgNhrCJPqEVfxdEyecf8dkEUgRr3dQuEL",
  "key40": "2gEyMzdmeAgoZHxf3h2fXshS1c127RXRFhc8HwLGLs7zkQenhXtCWiKrEpzkgSXuMvVxF5RzhDVRAcYmbxvxQQyk",
  "key41": "62uENkpKgJ63c9xycHkUQtKtDdTxGx8nuybVApt8BDqFHSRbpB5YzxkztRxRL3g4u2bDxDdKReTqTmDysEnJv5EC",
  "key42": "5b1P4437SxaKTBnRFs2mYpzShZF3KMrq4sQBR97Aiw4F35jj5i6uh4AnZwGEYVxyacURiCf8vbSBNatuNdMZjpjX",
  "key43": "2KPJfiufW7nihS6hyTncAXXPV12A2PEaoq5uQGJHHMsLPEYZ7wZyqBmgnv8SyMe5LhwhemdZ3nGjrMryiemRjGE6",
  "key44": "63C76F93mHsAy5kZ6eD6F3hsusqfx8pE5LcjwhigjZu4kJHAXBAU7jKZcRqTWojQUgybge321UziwvPhVgwoNKjh",
  "key45": "43B9M7wnwhg1igzPb2x88rmkLwq6dYn5LEu9PzenxzepNkvZsSetc26Q7pmjca8jsCeSdNSxBQq9qgarPcjXufw3",
  "key46": "3LmBnsJCHACc3sbd5pN7phk6DkjRTy7sDPc2yFoXSuRocd6phmNPEFFgAEfhGCibBmGjBnLi9GMnQP2NtWGbh1Fo",
  "key47": "44Likc2rhYPBD2g5JTHBWD9XtDTdQbUofqr4JkYrAMPy3bLwUx7MkbCwHvgjGTvvvcMV23mbj1D6xX4DzE6TZtWH",
  "key48": "57hM3AaqmyYrko2drrFTKSFEUvmDhQzELaJ2kp1ueP7frozphiWZqyjpu1uH7fpjQbYJp945ZoEfc9DFmjfsLaei",
  "key49": "2zgAnPqzqK8diVzkZi1P9DK5xmGrGDmHAjiigAhxQoLKXTUDWDun5qgTSaC4LGxXKNkD4pkursZop3VJ5k2Vq2cg"
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
