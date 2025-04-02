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
    "3nGLoNppiPt1jMFgkKncw1crR6vyacnUMrtJD95H2Vh9zoi4cG1qyuhR2RiYerus7zdkeghYM1zVNkbCoCy1Fg69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W45An4SY8HVRW2FcLsPnAwfej611FanMKJK37Y54fvWaZaV7oVfDYZ53UyHtaapT4giEEkUbxmFBU9KH4EoKGA",
  "key1": "4NE6YgSRaKHQ7ubLKtVSAmf66D6LTE59x6J9QQ5tPMYPH8U6HzScF8zuRexVQmsz386XXnYRF7eHyvjLGd4nSuU",
  "key2": "Fd6omhEWczHHvJUwS1hmgDBqPZieiF3P1cvFNBhoMN7SavjLX5BPRHbHYeuy876uCUvi397cus3z4D8X73BYdpg",
  "key3": "3i4PdriV7bapZPziHpbkBurfiHY2qA97apzzi5Aet41AJukHXp3VBXgT45ZZAtCCjuu4NBSVn9et1nkiEuymrn3B",
  "key4": "43zjKgoExcPjFC51Tig3Mxt7EyudYzVnuk6AvqMAMKZJpzNzxugEkawFoa19AUB5dzDRBddqBsRdUjfk184u9ir4",
  "key5": "5SvwJDSEbN8XXD3GEkEWYUa6EQ8Dhg5qzdYXfgvyhHF4r3vDDUH2sukLbnUrkrFicZfosctiABAmwd7E6ZuSXLWW",
  "key6": "5Tw9tBpcqb97F16ZV1pdvP8SRghJiU2bCjGeAJj8YvoNGPYeQA65nE6ajS11YsVr48adJCoVaKX9JV3R7nfGbgpL",
  "key7": "26LKJduvVJqF6bfPTs6bHxqA4ZGca4Tvor8Fj4yyNXD4ssaVg7s3roF3vanyky7sMoeaZaHEh16m3Qir5CBJ32Jj",
  "key8": "jtCXE9BZ2j1Cgza8wNhFEvLf8sJ8mqLaCGjcczWDB2riz2nFrU5k1NGdKgt8GnGWSH1TxTqsWEg8XPsy2yotrXA",
  "key9": "4ZUA8V4QsSFbJY2H4jWae8kNUM1WgHdmBYAStaD72MVm9KnD2P87u4TuJ7etvZgkxdJDo8PFoLYwZo8B7hW2Nzsr",
  "key10": "5EMduZ4v29PVxMibj3nTzQRigdY1xPjbACJxEz82UNDDf1n8xY5aJEPQ2askTHwwgSmjSV8id8BzhNgdwvnfvFBr",
  "key11": "2ZWbp7hHW3bitiasS37VsBtNuvLwyJTWWHHEZoPudRK2EdKLmNJrtt8x9j1BCLPmanPXNU4RFFr1nGAxQKJ1eNSn",
  "key12": "Y6uTmhF1NBMxne15LVogPJjB7e4PFx7tZZnxFhPSpy6QpuMVvPt2MzWVpF6GyuNwpsxFwBjExu7kUmu7pygzLTk",
  "key13": "2VCsiVCrgRrTFbMj619wzzHVAMrXiwbS9kTAWfLUsebnVqs9p7W5kySYSu5S9YAuyevN6m2UntzntQm59mFTC7id",
  "key14": "5bv9ZbTXnZN1VignRohf8Tyee2KMWokqj59zVdebtUU7p7Mh33MnmaTWiCjoFv5ZgZuJg3FGkc2oV6h8EUTiSFZe",
  "key15": "67MrkRBGsDRMF9SmC9AihuXyARRJW3Btqu2BSv9ukCjAT9oiZZD7ThD3cVA4f9MSc4uv8tjwgfX2XABkxF7WbnxN",
  "key16": "2D2UbFgTTvVQ54DoCdqGszA7wHdGUgiyJgNr5KNDnwAkex9w62US5FFpRX59ewS1Y9awkKy4qcnAro2y7wncL3BK",
  "key17": "3vfubjbe4x16sVgHK7E9j8cWtzTYz8yCoHJSahaMdMRZQyi1vwrzCNKzSorgP6Tkh2K9gH4aJDk4Ls5R4WChy6ju",
  "key18": "4FJhko3v9X5Z3Xzy1x3Fr7gbfqYwJGGSukbAsnc3ddsJXcsML2GnqaNqLh2GgbY2eq2UBwbCkMCZeLkihmYTBhb",
  "key19": "4RrrGWMj1RUDvKi9B1cVUzjFRegC7At7UEYvVePfHe4RBibhuEaAako6Uyvs8FuTZHAgFn4hGNjx2EMfR4Cr7mPS",
  "key20": "5ZPMJdR9UqWhnt3iKAmJzWpuX9D3X8q2ud48jRgVKtW8ssjJBpJNQTrPdFf892mBqPVfteSdSWR2WBUJyXQA6uhm",
  "key21": "2queb4mDN41MtayW5VT1gyyJ1WsgUHMT7dch6YWfwGynEnYYUnhqadB6SUHKL96xi4wpnABuxTSbNYmzM56gTzNk",
  "key22": "YwVaXTuJJYN1yS5vhLAYaKy1LLxzTdaBRv1we6tA11D3EPwzxjxF71tSkkcWniGzPWPqFTEFyhZEjVU9hDUh55H",
  "key23": "2zemYBTpkGSxfU1dc69uMDeos3SLmZkarEUFZ9Vbvo451JoknZBybYoDPRNhC19owbua8EeuaNWsqi4LUYXnrjsm",
  "key24": "4vELcT6tM9FuY33CgkYoRUPjdGuz9Bcrt7ctvgrEd1NLKQoPqZSR9LyVrcK2vgT9hPgAuGvwkNLNmhESuswiUvsJ",
  "key25": "28j1TQPcGwGajDgjLiWfS8eLrCTKYATsJ6e5fWCH6CC7hSL3Mg7rkzriL5mp83A8bkn1JSsC1NZEnFBKFT1eBkji",
  "key26": "42u9TFkJ8gSHgCRy2HZkPJk5wh79mwVrahRyLqZ2GWdxFdf9xKQ6aqaxWUWUX14eXZyo7FsToFDu9xZg1wPNCzMp",
  "key27": "3mrxc9mG6SkHDhz1Hb8r3rZbUPvVG3z34Fs5JHD57jemMWA2qdaYSzaeDEr82prnHb2LVba36pCFBXBCKAsqqfUp",
  "key28": "5QMJWxe8tQa8Cmf47y1BJ5J35NoVZ7ZvEyyzuKh8fJ4VUuPghyxfgLMwPMNspkxwm4ekguaWokvpSYR3wunKdGrS",
  "key29": "2zTQHrk1uajjLpUpKfWUFVmJWB4bzU4R3a5snx12QZhiGk4Q8WowQ15df72mne3h9j2XzKvaK9zRaadjUKxL73bT"
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
