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
    "4c7as62mvw8qAmLnsvjyQe1jgWR2j9ejtNZEBFxQJBEXR1isGx8oWJN8u4Tm28y3F4FcDbFgeTnf8zMzHGbKaGe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpE6yd6G5DCKZNXf2pN1z1T1CbaLLi5AGB5VNNWNQfTPaN6mRoRfppAGGt1TuLoyJj94yHsTqkSZRgk928tiErR",
  "key1": "5KMvAfmBiL7X1WgzNEQwSszHx9Fum4DEm9tABngXJpPFZB1DQ4kuzvYUVdAsi7AfWZCF8Fh6n1JKkknQVsVvo6Qr",
  "key2": "3YV7so3jfvgLCjR6UpV7jBn83AUkHqHrsfRSmddozxcSXhb2BSiYEfiXu1WdcdJPT7WsHGgUBNZM3D6yA7dRGLAb",
  "key3": "5basjMWBKLH3w8zvRG5Nf9Z9tuSdTZeXDwcJSFn1frTvHp42tDJcZCwaS82KA92Zdkoy9a3QfGj1w98QpLK69CaZ",
  "key4": "5PzQax2rxp54EgWyZzkcF4UWUCddhXf1aLbQHGttnKJLcRDGyRDDoQFbNKKgWGPnuzcrVgqzERBzyi2U56qsK6iy",
  "key5": "5ZfxQ2CubsDhHbkxcxk4LwCB9RZEKBKJfgZcVEjCaAfJTiNFr3HP8toh12FtkVZhSpXvwGANKv44QsrVh7WEEd8r",
  "key6": "LkMyNEr3zpzucc3Z9PyH4SiMrUYQHrrF46uR7Hy2jGS3cn8yCCrYnephUWq2mQowCGZkPVvVjJWDs31AHLBKbdX",
  "key7": "3VaFUkVcbExSh8AXLxRRHAoZS9XKBiTCMK4smErLqMBhJr7Ad4UdcxL7njb8Smq9tPkVgvc2JRb4sHi4tX7dz3iU",
  "key8": "3C7CjeCrh1qkK8ZZWzUdgBDrFB9MiJA4DvFWhdMPymZer5grEpPMb3Bz2bhi6HWVUcGeKQH1pJhNpWxvgKfQdN15",
  "key9": "3UAkmgvQk5RMsTsrBNLNTEFNdAGhr3LrnUpFAyDbUvUPBLBjAr52kifo6kKNKZfaGxKAsWSaB497TNEmmkyu8er1",
  "key10": "3rHpQ3jXx2cwmmPi5qpy71RiVBhFKbmAr2xDsEQtQw1ETQVjRAYNNt85oqdHgLXn1vnRfB6nSfjA7yQHmT6XvAxX",
  "key11": "5vGy7PUXzVDtwo5RAtNTHDT9G9sqnNbYrDzXmmr6R1wbTfkLRFrLKv8GPovckpYN47qTBRVtdRZLCqrTyA5FtH43",
  "key12": "qEZ6bHTkyQuA2UBWv56XokC2BfUtSyZ4P9NGG7A9H3xALkcceyPQh4RaRwdurQhyo7PEtrmqhFCWn2BPEiNk4wa",
  "key13": "4bvxnqsG6cLj75zRJyvpCA57BcsSWiNetDgzUNTWUJAWbWBgayFr69yMVpMZJxmT6FE5fH3TqcT2Gxu6dSX8Sb6t",
  "key14": "5RbRSnhZbu3MfEzr3Ty9Lx8eyrriV8LKvowtgGKgz1ntLuV8srGA8pPfxXeiw81MNKPtyPCHW1pTU6h1vtzNUeFu",
  "key15": "31FjKrkESApXPaKck3vFZthDqdoGQXvySNv6xDzaZaDKtMTjzC2z5eQKes3Cn7uHS3MJASZZVxVe5DksVgWY3G8J",
  "key16": "3KkRNYP1DwBFe65EpRo2EwBcfXjSqkgX2uJcvHp3HPZETcFCJrTHrtMD8zJvvh9sr3LFQTYCrk3mtTp7fjsaPAAw",
  "key17": "4iCSvcadc4treEht4UMiAKETXXEfbPWXocQ2cykEyntKn5WRoekpBA73XfpEYoyULtf5QJqHG27TBc6uZ2dTPBsJ",
  "key18": "4kJbxQegAXUQRkJM4ELnjDqzjLcFjV5BdbZm8F34mqZ2uQqP9VA73ubojxdfx1XzK9yPTg2mQ2nmzqK9qMqoK87G",
  "key19": "4dPLFPrJGBEb9cR1wuEpemfJ5qxiJ9Rt1eG4yq6aRjnuVjwREq82tPjn3MRxy2x7vrnNsMkQvB3PFsjJsZ3xHqba",
  "key20": "4RQDsHzZZnUtPjNwn8wZUBq6dnfcM4cfeAfPqkgNc1Rpmqsa4XeVq5ycXavzQGT6oHVVuMm1faLBRhNqvhaXVXnG",
  "key21": "5qCEK8ybmLtAq9P7iKBkb7Zy6kzggMAzunXSkrF9xKu2incDpqNC4qACxEUUuUxzzB5f3Mzc4jZDDtygzXuJXhRJ",
  "key22": "5RCbbEb3bvnQSniztCsubREUwfGBU32qeHvZqyxLEfQXePeFFtMn82qvShH2rzKrj3SGhpXhrEWEdZjdXGLZmrvm",
  "key23": "594TxyxZvvSbr7a1m6jJQVuPPAjjoD4ZKyi8TspgCftUaUqShvHawsyaZ41ubozi4f9PCAxBavuUTSVUDRPrPvt5",
  "key24": "56ddxrq6fyjrMvY8ECiLenXKnybb4tbVrkkPns2TM51nJVHytHPao8e2M6gxAzX62ajQsgb4k1uEhFEXMU5KQ9SF",
  "key25": "2JxK6ohe6r364UgUGDTCeVH8mzMZsapjynncMJNkxGutU1vgbs1mRjhQF3jriniGbb9osxhwwpc4ucP2KJYPLWZ",
  "key26": "36Xr2V77KWSPGguvLS8WsJEKigcwuL9TfuS2QrnKtakF8hqxBcgem1NJpiUyutCrJeBr2RFQhzG7svkW6VVaDJfb",
  "key27": "3wAHx7NwJ85G6SUQq3kJb6engctKvCTnC3akmRRaickdjA7jhgZrQPxVepScYCfy7riPJs78hiCLjPWNuqMuM2dC",
  "key28": "27ht8kXeGWs35NSCvP7JWU1XUDCoGSdhjQGiUzMsguR3WzhahparSUcHJD2yX2JYJsDzfSfAircU4y8VNECmkx6y",
  "key29": "2LT9yvxuyc82y2naiRwTZnbGczXZZ5dLodKWMVT5BLjyaen4t4FUDWXN67sjzaoxpz7JYA3Rdwnkgy2DtLfkBNU6",
  "key30": "6aDzChHwsj2KacJnRvcCF1TfT6aaKWRa6LvY4p3mHhZPmueNGgnJL8nQNdPGAJCCLa4ttofmQSSmuRHr851GkfU",
  "key31": "2Z3NEPaxnZ1X8iDLMWE31SrHoGtxpMZdeSkNjkF9B3vXFTBGshCD4HpuojssRAYPH1HBy1eLMh78q3ow2hjRZnrd",
  "key32": "n3uqsraxLW9J1oAGyD5SEPXzcUfYLm6pSNiFrr3bfdyu8P9aPXsso6JnKDCVyTTxxs8GFuUZGSbogm4bGDH6smF",
  "key33": "zTP8ZTkGRLxdM9EjWffWt9PjdEi5EggwU5iW7dMWFt1HLv6L2W64bC2Hqz84EESiUkNVcKZSmHzYy2A7z3w6xRG",
  "key34": "tc1XECsULnbehG3f3k49vYYiKXwVUkooh4jXVgNsYUdoDSuagXcB8XFN8NXQCmr8rL5jAA4ETjygr91CCSRHUrj",
  "key35": "yAJCcAvec5UyTJrr3rdaiLK1sH8boBqhFQQepC3Asww1ZsGfFkegz5TUW3hVDfLKXsg4dZcKPgtAnRHTJFE5c25",
  "key36": "41kyp1s4nAc91gVfJxRTFX9wbmBbuWenwhm6PYLT8Qjmt7KPZSJi55gCoAceBxYUDkXeHEAzeAxfst9VLxXZSyE1",
  "key37": "TqCjV2gG5mAgeZ3jB5wsmovRyBh5NawcRbfNsAGesxP7KDzJxHm32VjgNir3refiZsTcrNTGFYQCjpxj6QhJaF2",
  "key38": "3Uj8Rhv6p9oNejsHpUpJ1FegFVakv9u9bATHZDizzjjUXvQQRcG8kdbg7Yz6E1oAEbSoMrNwzpagT611rewUQSUw",
  "key39": "63vsgBupH7UCiuBuWv7S7EESUybuPeVMjNQizDBucD83cPg5arQprYymzu2hGr5RkbYA4YMwACgm6rRprNPUT9Kx",
  "key40": "57Qy1ESdz9W38ArFr9zqekaXCJM7YgyzMbqbfrSpPYiJb7Y5hYqBC3v5AWr9fLfmNtYu6AqXwBMgJsWhkueBrKSS",
  "key41": "5wRz2XGbF5vdHRhw9q63YZvkV5bGr6p2JYZF6S8seSBZjbVkXJXqvvx4SrE4ADVn3QbBAf5vMKSotXbUgPu6vYNh",
  "key42": "4X4umfm5eneWUAmowHZ9kYq3DBh7apF4yiy1HhSPecoqJ5Lu4YXD35b8Qo5yKUfDKT8PwUrjJhXaKh53sMXJqTbz",
  "key43": "4Vgz98YMiT3dfYSirHZteuD9W9io7RwY2t5FEqhQd54FXU9oCJNemxu75MuRjUezyDZZyptsSMxNVy6q2jrEijq3",
  "key44": "5GirFBJw8DDNgskEawrP1sur7K8tW7iNPQFFP6Adxoapr73EGkPSrtzS8Exb4ni8pys3j26tgxEimExwkGDB9hGx",
  "key45": "45HKaTJyVkjz8KkiJb4oUCsumAFJCe2FXFkV95jrXQ6DoFp1wpUjiJtuHWvNBtPdmBEJ1qSeHtNyA7fWVjHoE6aB",
  "key46": "5WkXfmsnzHXv7wGA7Y9m36fSxL4vHxsXWzCn8RoNr1o7ceq8uBEZ3ywe7s3b2KNSkHzfDTXwbEzEm6mWUZ9ow3GT"
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
