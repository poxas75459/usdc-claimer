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
    "xKMpxZwKesUsbuoejtZf8PenoQftw9Q5zith17tFsLVdV8tgpzRUbXKWo87J7wzwm1xEqRSAyiVXR3xDHCAMacz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595wtFyxV1ywVm2cVLPUVKQ7bu7SFQzjioUvDSzBYMZTkkPgBWYWoYwW9WnUmjNgQepjG2a1owtVxbCA1mFQYQyS",
  "key1": "4frvw4Ecphhz6nxbiBmNf7rDmDuzDzZbguPhr1DbtTeigcvzG4V6CkMjwguZdRtv7y5dHFZubwSnP7r7tDnntWca",
  "key2": "2scRJrRBHdmawk1WfbHLdVKpZ1huKQEF1PRZ6FGZGx14Vt45s3drgMgGw7JGXLzAjsqCz18s9ThYzoxhEbMZg5RH",
  "key3": "5ZaPbaDds26yzcEEZ4yXvFVYKqrPVq12qzGMrumtH7C5wAnubx4fshwtQXdL3raHJSbRHMgssb3UetNxboXZNEVD",
  "key4": "3xERvTafSPKRskBdueeKKSq5nrX5uR82XhYSg8HTt4v2CXaBpnEfFrRgcKAeKQHasoE6uoLgVMeQxNWvc2Qi2act",
  "key5": "2NDXDJdMje7pPFgdar2D8671XMTE45PQhAvRgzj3ntji6vv35vSgDiJLvtHEFqroEN4iyxLE3JPsqYXZA2AydAfX",
  "key6": "MV2epMDEkAWZ6JnF82GPirkK3K7ipt8MYEUYTbMiYZ2aVyEtUuMNnd8qJttZNiS27JUdmqVb87hH4DausdMVuga",
  "key7": "3Mib5uwdoTTuweWtR9TAhQepdiUk69gcQqanvMBXiCdSdCAcYMGguyRjUxBt1KiX9qWqdgzdJ9FxesFz8uu4mc6B",
  "key8": "Th7ggxQFKeXhVnew8G16CxtLo5yE3FK66oN4aZTWyEPeEwzF5Z1J4eKqUfjUsFHBZqyJv1u2ccEMqEmutDLYdHx",
  "key9": "3taAs617HexmrXAnXmq4jFr91PvqSuyfgMhWjCWZAhHgF7pMRtSYpTQpUz7souhMt96r854w4fUYrTyNu4CcBgWt",
  "key10": "61mti6EmKs7SgLP5qCGxN2VzGNcFE7tFY6JxKD2YoLbbVN22dCbr9osptPNdvK3UqxLZWG23dmsz2rNZoFPRYwa4",
  "key11": "gYdL17nyNRi5Ue2u8GM3ts4Ft5EmmzcctUwa2rDMcJMAqMMPqv7jpLqTxNT8oiYoSQE4c264HAYRZ2LuX1qimaE",
  "key12": "4734FQ3feu3FWJKcr5DpRoXkMp9qSnRht2nVrFBdbycEm1Jzz5ZjwuDCUGikd98efJ8u5WjBwAhNzAJpdhN9sobQ",
  "key13": "4LUpfWQqJ7n8PmCy79LQiE8gsnemwTG1jz3U25tVCmAEGNGMUaTEjaq828bKcy671t347BsDQTjiHtTYm9i4VnYq",
  "key14": "5poRpjyb1Ek87hyCzpdL5MfkYcsrRWaD3yEsZupJVXiVsLsZPHpB6N7rZku5zgtDFVD4FR7JQfUmeH6z8EJgUJnD",
  "key15": "PRFJDjuiSdJBVwixNvBoxbybpWhh8VgznJ5ZuiMRiGNHD5sVM4vgd3gcubgou5VFnUGYpekSMJcADuRbGZhws6a",
  "key16": "5jDKJsjHoSx5PUvG21vqJKVzBNBkatRVYVHK9xJHBXjua9uTQtpgKEHNmwEE54kUFJ1ACrfmxtrLZEM6wjUqZhMu",
  "key17": "4QyVXd19GZTb6eTyF6BA2exFBH4vGpAR1WBzyNJjV8b7gPLjWqARY7fcurGWKKoBYkFFQMe9mCZFxKS9Bb1i3bJD",
  "key18": "49JStZsqGq8oE1WBgL8a5cyqSnf3rH111khEPQ3r8McYTPFWntAsQ7Zp4BT1HwP6k7jkJHSQSWTxy9FuX1ddgZkL",
  "key19": "4Gb9QyShpNvg2LRUH75dquyyXgefxgEyrTRYVurLoAPtZs12g53yu67MWhAXg9KTQKTEAiQQD4iTUfMazamqqZu",
  "key20": "YZ4BFQVZJym7Rt5HzTtLWZusdBcT4DTNnqhnkDKLMNhAUKsjGLjpxy3YJpRyMbk32mWx4jRpwBHkwPuDFoHpWcN",
  "key21": "3RCosVj9kLgH5svv3PKWVKLDt6sxYYNW3Du6aifwGCxADJZQCbeGXKvFy9nPBCsxJ15WcsZQyk1VV2ntNjL5SGCn",
  "key22": "ZYViVVhhG7vuib9zyPhbvt1wYZpGkifumRiT81qznRJzYV5oChPxo5J96DMmGeeG8GeC2GDaGGYS9RbLdYWzxSG",
  "key23": "41ZdKVXtWNTuCVMDfU37u9gMZXUu8Ygq2dE71zU3hwnQ7wBQpvmqzwWu6VWPt3Rx9yUdLp9jya9Q98UckQDESnRE",
  "key24": "5fSSt6ESA45NuEsDnKfa2GWttnVyrQdP91FJE1aXKeD5NN2KQh1Ae4fUXcwrMytJiYQy4UgPJmzdPmRyoPrrXg5q",
  "key25": "4cRBQoPz5j2J3Pe4sMcfp7oJoBijyFZzfHpFTU4scqNZ5tpwgn1L8UYw9GNGkLm8zutWcXanv8t9GM4CBKm22E8Y",
  "key26": "3S54xvUmbxL77jvhx54CbC41JqpTBEDCaENbXwjh8qLUdgM21x1pWFTQdojArb3eanWsRQ92BHAH3hC13dTdJH9d",
  "key27": "AU9eExJG5BAnrSLGdPp1bsmqTtonj9SdmHnZdXJSUVuVnePfgx5NGHggqB9sFuAnVuK7vfCyKNDrBTcmiUB31RT",
  "key28": "4KwUbdgDiyAtEWTRCa1nHWpUmxqbn1eAr9hMJThdYtoSEkjAfXyaTdjWq4wqHYB842LGcFvB3UDiYQkQFCNPDdCR",
  "key29": "2CBcFeC7pKZNLonLLMhVXo67R64v3DN651hy5jCBT2gSPtEUSL3d3xq7N7zcV2Ekj9vho5C2JcjTEx6sxWF7ynt8",
  "key30": "2zohLskSjWvDoLMjhXL5JpQAd68N25rJanjMP1xJz7ivSnnxnWwTTJ1TDfyzrcpuSrNH2X8epNcd3hLWTBJVszyZ",
  "key31": "2oexAuJd7tv5YGvxRwV5droHpHiqV5X1Y5kevajG9YDQWZenjbee45E91gSFXziTqLrorGR5LAi1VZhYx51Rm3KV",
  "key32": "5TcdnFb9XA3t5CkkZWM47k3of6AhT8Z1eZhNBb8QVhQfnPuEFvVaJNkoRu6MGFWEGnKvYw19Gxsh7VFsVBU45stb",
  "key33": "NnHgdS4hTMpcojvDSeRsMrdXXcoz1Wy5ct1cvjT5tUtpELAj8jPseY7Sn6ZsSxTqXTHqqJVpCSBuVCeLvNcaTMr",
  "key34": "5cJGAWPhvzBELwWAJv2cDSzZYEuDrQV59smwovuj6niauLfF53fRgxCG9TSqYiV4h1Ga5j59eYcyYLK26K255n3B",
  "key35": "5tDTcf9PLfmQyNeKs35Z2jFmfvX3JVxTf86cpBnCHZLmP5Sq9HVSrC2m1JBwamKJLj3xqqi4JVfumX8Pz3sfkRix",
  "key36": "2V4JStBgYdNonGEHHjTjm52DYoRbN2k84C5KMTnJCoTTEkDnugGKvv87XFvwsqzxZK1XoLN8hPecrqR2sv88ZiBq",
  "key37": "3Mv47CpsQ6RghXSSSRqTX3A5QxFZ6x7n2sGCGpH1CF2hbJGmE1s725CSbxFAsHP9PSQjL6U4AmnvUPMvRem9vaDL",
  "key38": "41mrcsXx8M6QDhYHXxL7iwWNLmZdKrdp4umK1nowCxsnHb47dpXRgEtnE7XEupCtT3wmpk9jnmRCWCBhaHR5icDj"
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
