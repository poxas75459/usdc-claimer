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
    "5fmz3fEFQNou4CdPcG5ERLUbAVPRk7WSTXgNFqQKJaeGgJmQo9yXG2dJjrGe9d26VMsmcfijtDnmsG4GLgEtqdUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDewBHJyNwP3Z2a8hJzy47zcNfNxryqcVbtNxR1KCm4rySsc6ugWJon4UDvJSzLac4z3VKH3K2wPahGNFUhKrvS",
  "key1": "3rirnmZscjEBMTDvTUss3B8HB5NTGE79wUoBRqZ1tCQwqw9m1nxHoAUa9JoeEhoxNapo78X5FX2EiWnqtR6F5gXh",
  "key2": "3mif232YpA6hXbnAVthjDcH4z69mWc7c2oyEjGgzKLdLukiCqS8MT6AssqaNtnXqpDktPbVhLJB27wwNPVjYE2x9",
  "key3": "26c7eNMdD6QfyFhytw965EqLCxAZBDdt4rqJKUeKo37TNePiuE9sjqYQCt1nzmezCczkHwANR8RksVQwP7fFR6bz",
  "key4": "n6SBGB3qFaVrYcZDCZZ4XRuLTiGRSEdmcwYMnKZNp5wzEiPB8BG1X71yG3k7BwZaD1qLvXtS1XrjJ586kC1i73W",
  "key5": "3xvdzJVbZzY1Dpd2rpZBNeLSALigxBhnSAHAGyeyvaaResmEQvQEFpwFKoSPYXeftha8MjByHu8YYiofNfpiC1cZ",
  "key6": "5g7PQ2KCQQTKsWidJ8RVRUdAiHrUbVbGTeLqdj8qByvSCZhcgEsnrwYmF3SDCvbrALn9yYTub95G1dpQHBUEDEng",
  "key7": "65m4GWvyxYigfRWNU5YY9nb6wXmSwinB8dLv23By6dgwARakVLe6Tf7sU4R3fJvdFeSJqM4zeaZ1cPuqsZnUCKvR",
  "key8": "4E2VGs6f4DDyLebRkL2awn7qUtVQfze435XnhHd2Bb8DJDvJK25PKKpzJd2mcnWkoawmztF8tSsm2gNbcxzhU68i",
  "key9": "5CzmWA67m7rATBkjq2UeMGLoCSbWL2ZEFm53HHDw79jJuuGQVYVGnhx2DYKntZy1kuK6CT3dCenycqFuQs7e4fqD",
  "key10": "5W1ryMsh4rFa5Jc6e2sd8UKBCoon5iHgKmeGb14eDVryeLPNDeiqft2y9QXxmBEArboGAaBnrdBTxjxaMrimRhE",
  "key11": "3s5y3m3JRxLX8FdJPg98AH9ECDs4EatwiwBaVqE84VcNLqsjGKBVq4soCppYYNLmv6T3xhqX7LX3NHKDqJFrpr7R",
  "key12": "bFGYH2H4dTkFAS4TVaMJrviwcCURMwGDPowKFbrtKyKusdveVyPgv9HJXXaDc5G2XiH7dn3EuuW7XZvVQh4BEi9",
  "key13": "5ZAjEnRrEotYEj2g2yWk5aU9N6KgHhpUsEAQB3YVg3tiYiHfVv28aKS6ddqLVhDmKsWYJCmzgwG86v2TcJQ9DGfc",
  "key14": "pJRRn3JEZTjJPT27srydhNSRJH8NP3cmgTXuRS52aQBGK8MX58Dkevi7hEPdXpE32HX2WTiepYcoqc72CMfpWQ8",
  "key15": "5h1MD4vtoboicG5ruHRfsmDXheRwAvURUds3KbiHVDJtEBKp22bLYRVjf5Gmh2e2MatUKAzJDMrffWu3T2ikL6Vk",
  "key16": "3i4aXiXnXG7MvtjKdUYdcuq775mxxWVeWzrVU1kBeNY1TmQKnTvZaKTj9t3hTvzQT6mPn8dJiYqJ4Yph6wEkDNoS",
  "key17": "2shM72XiYQfBbb1QuSJcnRyvCX2e5E9HL21u4euxxnebYtf8YR8JrEy7pVqHMeeRQ3qKKvPHRiQzEuS2oKGhzpzQ",
  "key18": "RbWYt7re8Pkfa4aGjPi2QGp18okLQcyFDFZBJpYfVoJG85UeYrax2zGtx5pCZtVFXfspSmtEM1kmapgGn68J7Lg",
  "key19": "2FFfBhMYqTJygcSLEMuEwn1i8r5Xgb84SPPcaeXTmM5pzAmpZvhCfQ1rR6cETKTExocjeXu1fDTkVU2tKZnbmN7d",
  "key20": "4J1LstSmGjQPEXWiutwUEqNz5VYn9Fb9jSFmVFcZQteDibEynFN8R6xvFQ356E2apusasJ4KY465b8oHSYzjVE6z",
  "key21": "3UjiHRQrKJj5baRZNi9XYH6PC4fSAUmRmYf4CmMqYzkauZHt7hHU4SL2m68dGo3TaaKhZL4FBYtCeN1h4xTdzYD6",
  "key22": "3N4Tk9rBDQCtHn4vMHyTJy6mPdQh16XPEwZ3sfZA7zk2RNMfUKaFYf46vmRfmCHbd45xjCx6grjtZcqi55Za9EqR",
  "key23": "5egfxzkjqMmJ99fwFNTHx9ib1ENsaHckA2kEYjDBZ96YmmBLmQX55chptu3tLYLWLC6K4qaLFNjoZ7xhvDmrAsDC",
  "key24": "2uhCqwMmJ2QAC6YmppY4PnQxg8BdtxKReqxG3NDWUYH4VarYXQPNhNBBqp7wi4NYwJZHyYhxrxjoWm6U96xSFXcF",
  "key25": "XS8uK7yof7qEKB2oADT14qSna1oAeapX9er4h9hgPCnSN8zhTzho1FcNjkcGs7errdAb2VugtpcZ6meQWy7NbLb",
  "key26": "5hbZgaPg8YCBQqut1kaznEzBTZa5eE65VhF2LyEES9reKK2F847dgDChubhrfhXAZxG8K5Mj4MZmxdNrXwiVcqxe",
  "key27": "5e1A6dzJPYECSRts4xjT5trQ8L3fG8fSLewwnNgCy6WjdYTjkd5AGFMHa5ayN4UJJiJfeRMaS7XLZHewz9VtFb6P",
  "key28": "2GRciab9r6wonKBGGMqh5ktM9RmEdM8VjYCVPYRYtwPBfK6Rf6fCtndCqEBWn4VGa3CXPEwwR4BmcPtdcdpk7PoA",
  "key29": "2i8B25xGVCgZRuEwvtg4kSrgmTRmNQ67RwdxKKEKYPzfTW1SvYJbXgfnsYHkkqLsQjBUmbm33kjMnv2fwHNdjGxp",
  "key30": "3TzApQQroGeWFzvBeR2UbPPNKx2EoQLux3EYvbjYLZWaMkXVwbRYpPpdysu6gwFcfLSTNqd2udvyXELdSdKrm6b9",
  "key31": "vbzC5yTi675RegA8MUSrXYSpmv6FU644QB5f8t3jeFYz3f6JYLaJqrqqBdyPNzcYUqKTZdF5aBzrm8DV5nY8vED",
  "key32": "3kE66ur29sT2sQ46m2y2xDoikcHynwNRfJjvbeqR1ZdTGjwDtnKQxsN3dcsq2BSfSAM5ssMUZNbQXZkLokbLdqJo",
  "key33": "2EWJqtTfkLbTudr6rPxFTiVbyjuJtoD7SEnvjmtmuBKMaGeBUYypqtUMZZ89hYjDfonFCT4LH813qfTVwT1Z32Eh",
  "key34": "5ha53ZPN9UVvyoP6xcFZjBYKDG4t7Y5daBrf3gpj74zF4FdQfxYmm6aaFwukzNtzkkkrWMEjd4hH9mrRSSagS3Xa",
  "key35": "a79siVs2B8hSwN1pKQKu42HbkXSq6UAW3sdvnSWVikTjo2ec83WuGpLTB9aj6QzyBz8Rhkzq3TMw4CX2iwPsUCL",
  "key36": "4XvaFtaF3PmdNJtgme3Qii7pu2zHdwmivMAJqUJUbub7oP3B7saEw1MNTcw3DvgYngE9GFgdbyw6HJMYsU4dpGDK",
  "key37": "3jN4VZzdQ2cPqfGJFeWeDTNQUtmwJsPkmxKwSwkfLwg6CWQQdFcsvSTJYn5gaZigBB15TDbgEadvNQqpQ7nrjasL",
  "key38": "3gCqEJx7RDKTQ5smMjaazNBzJ7ovL2e6Q1EXW855zh453hPy5r5YSFdXt2M3pPTD368FqfG3pKp1Zir32kwUqPkQ",
  "key39": "s98Vzai1qqWPZDuTjeDcfcwhgksMyZr3x26tQH8w2LPYEziLkc2LBDNDBhKndfQ2pC43hphYd4kXs9VdouWp7KS",
  "key40": "34ubytDGbMeHmVrX8mZWP2m5nPsPCK2nRwZCCgoz1T5iHqy9KQk9jEKDarHKNM12U8YdQN2892MdQzNY7GZbaW7A",
  "key41": "3yc9fH8FRNHxRk2RzosB9cw1o35YRRprRZrQJkmWJSYWe5zzrF2mEJZUkbdw2VNNCG9V9mTUpk3AxZEDgVKnCQB8",
  "key42": "S2MHmoFoiZBsy3rULC2QcnSDyMpdkogNzbe2QGtfNfy2Ws6QizGHQ569Sify4S8wCVm4CLo8dUNGCYVzx2qxJcg",
  "key43": "4PZXAfCRo5fkEavHCnN25dPqyw1do9KxkJDKfF339QJM7bLJcZFSjMfieSNky18YHBnzFvqXmCQwdEq2ej6SZAPL",
  "key44": "3wkaCrrAwxYKuWCZnxGLJZe2p3JSYHiMNhd4CwsHo3dWXg7S6TTTGCbtQwRxGBNvRY4z4yoWHMKrAhymkKpmbAVL",
  "key45": "2siXu8Q7pctEGmNFENxXQGDLydtnKEZvSjQvB2Q6QPG6KTJ9vJBHMffjQqF7yU9csfu2U8PAHBx19V6UMwRQB8WF",
  "key46": "ZRQ5qfhgqzd1bKQowd6bbC5c1144frdp6jtq362N4adkNh62ydj68JCHsvSpgpwsthia2VY3ZhvA6jfs45KRojR",
  "key47": "1795cV3Uyj3cUfBe6NXvDgsDUoNbLUbkq7nute1XbYJMEwYrTinG6V2bLzcDQaDSFiDkWd5r1sGryiM7jnFCpxr",
  "key48": "6Eg5vRB9uKoHz6vUqxeeC5uJJF9Bsx4zUHU6f4XjH1EFZZ9xuTHAmHsGUEzkd557benA3vVxm4bCgR1gAtaXuja"
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
