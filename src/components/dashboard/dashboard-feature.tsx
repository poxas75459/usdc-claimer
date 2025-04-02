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
    "3o7t7azsSHqqGF2xwsLe1uZQHX98CvBQqgmDcMz4GrEafHXoq3S18nPUT5EjiDnjo7oADSgbq3kzB8iAjAMVMBcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZJ8AsL1KNrmgRrnPsXxUXDgquWTZgb4psn6ip5QAQ2DrgDtUscCQqXwLSbKNCsD9t76bCtM5d1ZNZ8FuFMgjEi",
  "key1": "2dK5oT45imgy7kE5h79n5NaEfTtw49tuRZ3onRHyvQndQz4CZvMAy6M2XzxbShGBEbSyuf36vUMUMs6Suix44tEX",
  "key2": "41tooYr7CGoQm7DSYFta876KRS5DHnT2F14n1Qr9gZtQeaPNFQN7zsRNNk87KzATJEoPubPdwQ7MZV7E5UL2Cboe",
  "key3": "2i4fPA1Ri8uTSczy4nEVpnw4jY9QtLspadWSZGRS6VzXWemAtYavkFp4ji38KN4CNWFSPNwZTNU6bGHVYUwioLNV",
  "key4": "3kj4tdidkGVXEDesaSwx139oar2FhGfnXTFHiPgHR8Uwd9V7kqfi3mfEKnsw9qTtf5ouEfHo5sTG8DER7eZ1EPM8",
  "key5": "2ovAUX16GohFN3HJL8rGrHgkDdE7txoQQAymDqKEQaBzXoEuTHnkdFg3iJfK9PkcfVf4uNpRsP97uCwQ6NgR6B7",
  "key6": "2B21CJoAm5D5UTDBP4WDpiLG5gDZ6aZmsLMECEn9PoyJ9RscyBXPySTTdc7QongwaYYnnRTgrG6v3HeXahKsDsBq",
  "key7": "2Tmaa2DGDMKhcJKpdCJGv91TqmtD5dc1pXnowjwejnGq65RNh9MKEjxq3GqqZueriFGRWVn4D5i6nfZE2BesAbjH",
  "key8": "2gwdKngYx5WRQbK4Ey9ikPTB4rjBAhTjyeRvkUomxcRALaDHTTv1ovRrXripkgZp796dRG4J7Bqq3sjxRDjicbMo",
  "key9": "4hriim4m4VimTAMvMEWjSedhJgdijp4LjmGCMPCa5N7g4XwtMhJp9KNLgg3q42oPmh1yWuycTMXb6xfCwciJUTsq",
  "key10": "3tyH5oLgCo8WoZ8YEd1jHPAThNMKnnmTH84GaLum7XjJQ5PRJdHa5Lh3M2EPbe5cvFr3tEioK5oiLF4khEBY14R",
  "key11": "qmhWy9tXhBj7CHUDwHaNo1pzr116zq8q5jUjjQJwgBjDJqPb8C1mQ5B11Y8paKvrDk9izesabJ9fgLhC8ETy2dU",
  "key12": "2Dr7VT3LJEJnsC1hD1ydyGDz5HxHJMH7M5AmYwyxxnDpnfgrpYZVP6dwZxsbj9ovzBwLYYwKnWPQgczbrEQMasbQ",
  "key13": "3FgNwDmSxdS2sioZLzKhEQ8vGg28Wn1T24GUsNjAxFYDWiV8LZ59jGwoCWrYwiU7uPqsxx9i96So8tz1oihqkCmA",
  "key14": "k9eJzkuXUfdicVpNVpNtoKc7YFT8rUsQR8vPcGKkfcwGczYLHYj8WJUGC9HPYbK2Aw52LxvuS4ywds4Sy4ytjLj",
  "key15": "5puaTnowTBVV7EtvWaDLktTmWYJt4fZenLbSNB7cbJ8v2pYhPFVZMEsUfLCB6fjwk14A6VvpMRob33W8PN7W23E4",
  "key16": "2GBmHvwu6DrxzMuNZ4yaczvcvPzM5YPWx8YHosa9S4esN8G7qnpa7JEAeCQ3e3Rsg4S2zTbMaX7NBV1S6d28yBwM",
  "key17": "5ofTcVvSejbXm5X4TQWunDX8E8QFMX6E7qe2emRAmGiqi4pgfBT6kFMYw7uRJzRmutx4nxGa95yNrqya7btH9mK",
  "key18": "4tauSmg4NqTmwBwQM418QPgpnRaVCTwaYTDL4MV5NTb4u6vRwN5LXKmxm9Sb1yR3dU3EWuvGPVrqUqqxJfppnzEY",
  "key19": "5FEQmUWsgmnxN996movQJjNj94DPpuvQMhD2iYqr9uZjoMbzg37DG4D3P4L1x5EiLDeFLTrBWf16evcjp3dBc5UZ",
  "key20": "zAyKDmGY9Y84u6gJswCCk3qMziuzNBSM4avVRviqVKp333VRuc5wKXaHbJE9UmZ5jipVqfSaReNMkmhVycMyRGG",
  "key21": "2njK5tbSKK9kFQV2jpyBma9tDX14aMujG5P9vCuh4R2hzrLQEC7trjjKrBGT5qmcKXPuFTCL5ss1Tg9txSZKB75P",
  "key22": "kiXX6urruFVMbWPrc9phvoKq8VqrDg4TdFNzQjnyCRgeRg193wD1ixjBhPuUhYTasVrkVbdgTZ1fwuDUsZq44Vs",
  "key23": "nxh4ghAHHFbjDo3bcNq18s62hTqoR4MF6Zo3omj5M4SPpMZJHUamrzvfvVXMktHNzAKJ5335iVvircTrruTANdM",
  "key24": "cp7BpDhYKNq8jEoa7WvdALLo1t5h6HyZHZPFLE5AA98k4uHzcjwVTpuAbEkpjRyN5cRdagXy4aarqEvxzof5tRz",
  "key25": "B1Uh8LBMBuvvUbHYtAjGhctBx2GzdJFmAdJ7TpbuzemmyMinG7e7nWoM8yNGPgtQfLisBMcHddi1xASAVHHwMoU",
  "key26": "a2ysYeNQFVsMDyVWaLPC1qyGpeVw4Nv1jNpTvAF9oUAxghtnEKub3SU2vGJc8T2rCkkEjbCkXAgTAs3uNtMEtZj",
  "key27": "ourQzrAm27gJ52KkxmGVu1ohJck5q1VbWGnfMx6aAm7GXzfAJZbdj1w5ZuXvGxocXbVm1Eu8ZyRZnVnbuPkHd3v",
  "key28": "41VWmzR2wyeMuWGid3iCTsqjZkgu3gREZfJnhrBsHni4FRa2g3srrK8bBus5k8XT7qpNEBusYzLL9J44QohxzeaS",
  "key29": "28QAjXYzfFAejKnrSiUmbqkatKwKa6uxrnBubtAQi8CNe9eshSsdLa71fyaqfZUbn9d3G9vDi5dDP3W3REGq4he7",
  "key30": "4jWX7Q5XgSRnw5HPYXiXsRQdVJcJxWv3hNKjkVaPpvu2vcBCifZi4AEZB9Uitab6ATrepbGNhusPRYRGTUfZt9uh",
  "key31": "4X8t1hLdo99kvCErVrXVPsnqggQdgBfxoW5gxm1YVqZfrSRW9Bkhe1Y9RGYE2LYuM7ce127PDjiqFavZuwP68fJX",
  "key32": "X6jZQSgH36krryBUFR12eXC4mmyVtVqvBTfixZXJdZWoebksD5VoeExjj3YTeaJUAzRsY2MZXGqbQpM2YUpv2i5",
  "key33": "fcLdXJA7cJCrPEcWfcxwM3H2QP7oHjkVUaftPbcbHux8ek2MphjawtqMSBqHCeVSRcXyDyDEmzMi6qTfTFUJbgA",
  "key34": "2Ld9Vupm1WWqyLCu8cpwAiNCoVEP3KNHKqaVF2sRjKBrYnK5AFxASWv6YXbjFwd8d8dN6vxDsX1vjFC2MFp3hhra",
  "key35": "4CqUjF65GSKVo2Yj52CdpcHa8jEQSFtwxRaga88txbKoMWZDpBj1oNKaKgPzG5RBhvAMFdkmECT4Nez1rw64Fg6G",
  "key36": "2SDehtY11kVTxebpCQAVDR4Jn4rRtJdJ34fUh7J9VUnJqRvdsj9ENpaprAZ1zJqB3TFToiCsepKdv6dfJCT239Bu",
  "key37": "3CSbSyTaAzBNNbTL41oepzmnVnUTgraMaRWfwr4MoUPc1vzhGwj5Jn2pjfwHcwbB1GGzgFn9UmLCvGWFLzEaFdTs",
  "key38": "5ftfNhhdDyJy1Wd6ZYSHXXe3jnAVNv6XUpC41GRYw7a9juVW6z8NAbcnhvHrFS9dbm1wbGGDzNijaWvqriViyW87",
  "key39": "5sVPo8nuJ1iPDqTG81gNv3brBfhuEt2ue75hrKdXtGGsvyv9p8CiRitKQBprth6UvAbPt6zUb2oeMgQkUgktdJFa",
  "key40": "59DP8xdxey8Ys5x5CzjJfCu75cKkBhKaS8CZ3Fbjv61fzcBQ51uCeuGpXfVR4e5z6Y4feHEu63XyPTvjvS92ndr9",
  "key41": "eQ5EuJQABS4trBycqwz33eA6HhXk1FwZLojuuw68GHT7zUe3iEGGTsyr7cLdLR549E4d1cTbvn1ykm9F1zAgNsx",
  "key42": "2o3EHcPmYt84jCBtiGp4jf8TuJTxejgiioVR9ddNp13HCB2DD9qi4RfHoPxLSVdCEkzePSPCi2gGpNUzLUGSLmgJ",
  "key43": "4kCBKXtSFHWBn4W629cCqpBRfYVmagKPUu3trxE94s6uKuJr3UDpApEypgGQ3qFove1MAPdi4WfvGuber61FwPo5",
  "key44": "4dxedY8FpMfT29mJV9ed1nBVnnmJzuC5RE71dWj5VZGXkT6wuatKSD6oL5fKNCP4MAD4qWqEZxcqLUfLfxLGRUdD"
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
