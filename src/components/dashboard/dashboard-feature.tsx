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
    "5bu7jjkms61XFASwD8V5n1apbVb5wVckje1FKDEBCdeXz3peipJSKLBkTcS2vMoxh29BVKmobC98UTJt3uwPtySk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6b27wLFcAJZwjzF2H5RbWUzcopbhZzTaC2A6gmddDuWmTHMXBxe6BTg4EsVpntPD2ahQR4EGPMRbEd4wYX7em1",
  "key1": "2wZFTU8g5NWbNHEZwc559xFuF61pWzZZqEiofhC9jdm34yfwNg5v2UPB9fXNbYd6ApnGDkSdm9SXYZTs2AN5yrCM",
  "key2": "5nJahRfojPWgh6PkeVpjMUhSLiQvmziCManYbn5yp5FVE1aurg9cVRyCXxuSLyVyVqQP9B5gCBaQ21P1NqCmBcYC",
  "key3": "z1eFJMK8jGxh3tiu2f3VxGyfwADFmd6yGhtkzc2qNCrQdGEXdHfJHi3tW7dDYzQGnnzohyoGFJbwYumnpvQ14Ue",
  "key4": "3ifxwMpNQ1EtjpJ5yC2j7RPDueYyC5XswxgrRDFezPL6muirLresBndCHvykCwSP9EZp78npewqRH8nJGo2RKtaV",
  "key5": "2KDLiJrUx1Vaeqfy7Htm9BDYgb5LtsJ3AhiZUEoKki3XpUiDUi5JvhaJAS3AKs4ZbobUnehFoj3aFY74ihMg6ASL",
  "key6": "4qomgweVUq8rrJtyFSfJJqcjv2cpaAU35NFt3SJSzEin7bDeLYKcQu9BHX2ckHxS1hxoFWFCdbBtYAVj33METYqS",
  "key7": "39L1wAwPF7KR69dYdY4gv2rcCAZaTH2s74XYZAEtnz8ufU96hUnQeEyR39hze2EZ6QS1FgVU51Q4tYJ6Fx1cEuTU",
  "key8": "21rbH8P4sQjAy5tRyfcyar17gR9vv3QeZARS9znwXVywXEtrPKaCGuxG3v8qzkiEaEzs586qtrKeh5tN1tF7cVcu",
  "key9": "2UpS62JhfMXwW3X79JVuxyA76cv9x5jfpL9ePfsQG2jZh9xE51uz5jXwSDDnHavTVxtvAUFgdoNFrBhbDygbk3CB",
  "key10": "37BCUkCsVtnZpADuXdb7antGW6gN9ke127JBXXkokEoBRVyGXz3d1Y2qXcftUDAJJh68TsXVdDHbvVSF8arWUjFF",
  "key11": "3BJWVXMKPXcH21KLZSUwVnpeYh3kn52p85nSkgJryc8Dxgeiwivs42TGW7itrhTkEfwSyk76RGdnJ3vcvi5KYePe",
  "key12": "n5Cd53hgqFxiSKUBa7XbFXzJe8XmeCTJSb64wVLUTPPfpwhFkoHAbxVRYD6urHLUaURAHRMuqPM7yhu9gQ1pvCd",
  "key13": "5rUxzRkwFczUAZFguCYetFcBdfjwqWuMu54jsqAc5ucjPcEFaMoGLLmxW9ZSuuexsCFHP4bzjryGKE2XPiGtYmWG",
  "key14": "5mxN3Qpmrrxf5S7jBmL29kiw2NattFudNA6ZCtBLMh9rTsUVkh5HEZr9N599zH2vTkViDCyrMViaxJVfnrFqucdj",
  "key15": "2AMouYP2DxEJR3wsGyyz85F83TJnimZsCL26WuqkCaAC5bGQGfUVvBqddcokDeHJ7RzHh5JHfDuCUyjD61PEaxxQ",
  "key16": "2bAhYgpFmjtcfpXCobqHgSoyYZWLHfpDVEucGW4Z8p8WjVynWkH5rCjKWpfosJto2vrZYZ2Bf6QyRznVsjt1Ce1h",
  "key17": "3c3TYj1QYp7sarGSSjt9xXvTS4sJWUK7f8Gd18jt6uZ429X6NeBezgWS6WGdKTnTTnAt4jEV9p3UXVrkaifWieaB",
  "key18": "xN7LMqocZ21QoaJkww2yrmqy4wc2um5JNmz8syadNYLjXX64Tz1wnCUkrp8XztmEn2pzxmUkMHmsxBgSqr8X2Qm",
  "key19": "42SQTjAGxH7rfPvAabPUXdQ3LfbbCfJ3cdgq9nqnLKdNz95xDNZ39Kje6EGdPhuMpyKLWsfTXGvxg5wXArnt1sJ2",
  "key20": "R2qYeq7kSaDavo7seDyPho8FadQd6paFHGFLThvqVtdJMk5oRA5Dtys8gK77Hjfjm7qqctKBLdvQJNB5penChui",
  "key21": "XexLCqSJvycybHatjMaoDUENupyAs3Bu7vjJi2xzSFsPDQYbBn2uV5ghRt1G92pA5XDYvaaFDZe9Aa5dhwNKC2q",
  "key22": "3QhwfxpoY5YevCzsXSEhiUye7wHCKgsWvnQbwKY2tyix1uUnjH8SixNJsrC9oS3hCaamgUaRv64an3yusxujEqdV",
  "key23": "4ZdhTjBoBHEbXLHzvTnkDomQYePVAyPvKVhSm2yDzjzGK5njraHTpGqM165dkRSU1hgyJF5b4p6PNtaCPViPbqDK",
  "key24": "JudWAjyHxg7KoyUP1nqCA2cJ7NT5aBZMktpRpjKjSSvLcMGqhQf6PaGNNRCQXnCVurxivmEZf1DTS6nhBHi7TCv",
  "key25": "hjaLgzwdNmo6vrgo8pp47BLGyESZkyufadJDPGJjYE8MSNEBFJ5ei9GfkQFzWsDfiABTRzoR7QyZfLM3MUhD8tb",
  "key26": "SgikLydPqhth5pfiFmaSXKpaU8m69BKHWBsFybxC1T7YoZKXMFByxZru5qXyjUsFTy97cajygxbfgvXCJU11tuK",
  "key27": "3s2q1ryXaUHxh8k54Msid9CGf6SwRyaMX3v6NoybkrkZRYPtHZYGzwwuzNnWboDyfGMfoJ9ZJXGtnBBTEf9FSgvK",
  "key28": "47mvRsVC4siwgz5ruPd9JXjBpVKpiJUwYpb7G8PadLmax45YUdayB3qRtraKwjHKAqpVPrueG234UBNcBCUcMYUE",
  "key29": "5z91EKavA42PKshtFyyYRssAb8hjotfVMdP7c4dhFGxfREuEoUkEvLUFpva5SUwpfUTPxh9hU7bTAxGX4wiVScSX",
  "key30": "mh5CZv33YxQmAcagJoVWXth7DB4CQawQwHZxZ5eUi1ji4waBN5EyoKAsDXC93bMM3aENZHaQGyQc5EJUbWrv6gE",
  "key31": "4L55gvazkBMKAGdq51hoxnrqLzT9qU8Xua5hiRQNSzcnGBuDEqR7aP7vdhaaSt5h16QtbsBY7QRR2NeHwgDHkEiN",
  "key32": "2ZTxSPjVV2aykvLwU4xSTp6hqszQEAY8Pk6s16dEhsEqUVdxNssBD71698BM9Phfav1E7TFzwajRM11DRbM4t8jL",
  "key33": "8SDMCakBAH1eyXDfz9uPbi3Dg5Kt4g2YT6RqNVjwich3rCFy9XUvpfNMRjpnM4vDhGwHcyx5gethP6GmFuyhvbw",
  "key34": "4VNGbZcB6ScS3uEBDN46NaJELbJZm6yFRVPaYQ7zbHYzVFRaLpRUD7DJe45jDhFvQLPEiBMbaRBsFuPTtGQ3Y9Q9",
  "key35": "2dnQp3eRo5K46WWmRRGRAfNeoqwLip36f4UgcfSeXQvk2sVZn75RJ62uZj4PdaDUDgmTQXLrjsb2JZ3f8fXBTRxg",
  "key36": "5FL9Sw6TK4pXPN4mmBpdyQuimYgnfpGuGqwdjHmRHiexKYEc9SB7VdYgAGs3Pp6FjoJLvvVvnzT53vuTfgjf3y5D",
  "key37": "4sdegUyUajYfFmUGtDcMkq3dw2CHK63grNbpYqz5J8ZZtLr3erb8Qum7m5G82BEFuAE2gN9o2NauUkqaZfWntiQB",
  "key38": "3WQTeNtHdVsskck5onYTUMWQ9ZSgQz1MRXn2aEYhjFmScKsKCAnLSRqRvvjgQ8JGNsYXHcTnxzphDNaqzg8dNiaK",
  "key39": "3ogLbyxUhojyDHUgnfL9yw4vwypsTmANAPFUYaZjQWyumnDmbiQ7tp881jCVAkyRYR1GHP2NXdNiV3Bb2KU69aKi",
  "key40": "4vaxU5q6aSvfaKgZ6agBoTpVPwfcDzt2MuPi3hhrc6KDmrLxwAQdDiNScfj6s6MQB9F2Hwyfx4quSUonUPmbvr4h",
  "key41": "5SD3p54UTSEdnMKxfmYoG6zz6pa4D2YxeLDbU6wTdsVpK5crBE1wU2yEde6aCq28nGXajRbkPJrxKqEbjvW5woAG",
  "key42": "LNzcpvVecT3GyJa1MHDi5TSfGye79ASa94inrF2akvszZeHBNiRLXNjucnXmENcbvkznzAzrYyNV4YyNtMDmaN9",
  "key43": "4w21LG6tqLRodPiYSWEoZEix5wxrtoM1wsoEXRm5EpkagVEK6FR8ujmSx9GBDSM2xspkX6JEJo9yY759iX8b4fsW"
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
