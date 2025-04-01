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
    "24jYAZEiH6qrzLkhxugzLwgKqyxYGY7d1W53CLqBcwdFEr4FbxyfSKfjHhkHuTWHQBEMSkvXckNpKEpYHiNuALSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMYCVuZZywW5skmtc6TXrKP5oUTrSWJRWBSV2b4DnWoKPQQmn6yxmFTjfVEA6XAuak5aQ3dNmd86Qi5qTnt5BCF",
  "key1": "56wHtXY9Ha7yXsJvWTvEkKbP7CfYRBgoiuYu3EuaoPLMTJUzt9jDn3UPR2xDWVUMaxrok71TxexgayZioxhK1ByY",
  "key2": "49t7LpAjTGLoU93xxTeyBa1Qs4MyYKtfTxXzAanKHk7b5w2ZCtHEQoSf3odbDCHURw4kUX8XvHvFn4f673FJTLYD",
  "key3": "5zVA3PagmuWvoToCnLkAhjMgNhoLmqC2AcpjWuYi8wT1pCB4oy86r1H9WvFdvgUb6z3o2uYnSmp3feGrtENjFPse",
  "key4": "4dsTkeFfy3tsLYyzEEnSx8SpBCJL4U1217Trw4Eu1N8CaQ61FEmeufX8YwdanJbGJuYAewWEysRmgx9XZxj8MyYX",
  "key5": "3mJQ4ZmKvcTJxeo8iw5Z4LAKvK3JXhw2qnqz7Cwirn3RmJayEENXbrzYkVeV6JnA4sdf1GsQZrDFGFn4t5HUpZJ8",
  "key6": "5mZMnud5W3A5Fgejz8eoo5sD8zbJXWU3Ze7MAj1uk6b9dZj1smfMZJVB837WhM3379HyBmpkFisRNLgNRJC1842j",
  "key7": "3Npy54CyTV6RsCSo5Frtg7RWBUeUkEKF1tSFRPw4TmM5ekqd2fUhKyCdF9xuJZ4iHtH753R8fQ4En35Yge4NyzsG",
  "key8": "eD1R1xeSrvRGKEZdrXKuWc5eWeSFQC1zzg7a9p3ZN4R9rWBLVRYJSWhFQgRRxJfPKGM5UXhTiH5KM2ToorSKGFe",
  "key9": "4xfxy2A12hqZh27vq41s99cCRwtDHjadW9FEAcdXA66We75VqXDDbvJstA2uq7B2SPkcTR5p89GDhGpqxrnBUWQ",
  "key10": "2XdcBpWXsVMB7sj9w3NXRTrjcfmdbKWV5aJxV4Sqbe6YdCjFEy5qFvsKwUMCoHLe7Uoo3EkSZ16h1gGhir2JgCch",
  "key11": "4bNbixUR9coxbHZGf2oPA4SwEHTpoXxwsDFyQCTtGt7LyiUhh3Cpc7hPjzv7DfJXcU7kHe6Kh6HoonM6DrEgA69o",
  "key12": "4oPLxxhwJCQgfK3XDGVnvKCpAKqBms5FEmtuG5GNtFywu86AJNL9Jv7gfggFfd9jovJMBdtPARBz1djusKtLpYHc",
  "key13": "sdDguZ1pTqUiHLXLZZYvuVjLyNfqcJRg9tvgM6UciEjcZN8jMY9BAuGJXXvAnRrZjRNWGqRAAv9BDUnu6HDB3Wn",
  "key14": "3pCUUMgNb2Y7mx5JZ2MB7QZdARzKqdxKDK16D31wGjk6RVYxuLhx3SvnUx65VtPD52mVcDwiEKMqUvCJ3annBupM",
  "key15": "4JqCAAwmQAZ5ChTq7vNWu9Qbqat44eNWCLwDqhMas4VbhSYmSFVAFVafQGsGTBBw3GhuEBjPUWRBsWBXZqC1vKSW",
  "key16": "5JNRCSELRF1X5h5rbzsnqJ4twAfbFZqJiB9WCmAQoYxebL3zh8tfV3XHtgKXF1eNCSq3pMZts1jPbRTTyHRa8gzT",
  "key17": "2zjjHUsmuQZfEA47qucWq5hfnDzbfvrAzSmAW76tS1FLB9gXpGXf9pBfudNW1ZZos8qsnQ24WPHLWiH6V28bffpj",
  "key18": "UCmNiyegL4iDsP7FBEPqpArXNTzLBXy9AVfseB7XoopCVMcjoWa38yM4D5yKGPTy3d1kzeS6Q8ueVhLThEpTbVf",
  "key19": "DaA1ogYHLV2W5NW9uTMrKy62mjbR6JJ6z6bNWVC7A7QFaCSL2NviEuAhf1jUMp9P3LwxCgcJ2znTZK3QoKfKB47",
  "key20": "3nHADxLYRkMpBamvPcWVusFnX8wTmydXZeJXVrn6Arrfy4fPGcFqpnvbZmmSh8eYS293G6qxphGELF965kshCb24",
  "key21": "2LXoUS13FLWwE7yfQmSJGxHfj32SeeahKMhLekCahSsc7qYooapAKf7qzWMB5TGZZR4mfBMyTNnWxZCXh1PH95aR",
  "key22": "3onmqhMVa63rUo1epkZwgVxS8hx4abgrx3tBuL3emmatwjk5jEtmk51vKQ18P8idxhNKLDrARrfwwiSKj24MQVkM",
  "key23": "dpPahHQLKxcZmt7yrnd1MCLjZpoQimmz5zrVapKhDwr2xULmSa8gRsdgpgDoGFrzpGBSiuEp5wAhbhogzE26rmS",
  "key24": "5q8vzBD9mWcVuNWa6rDb91qbm9BkUWi9JVB8cEtWcG2VhaUvjqiFZvnzAUyxAg8WcMyCv36q2Wcpfs1W4dsvFDsG",
  "key25": "3D98zwrHCwP6Qy7aPCK2eroqaDScw8gwTKr922xyF6a2FGPpePrJJgDQZmygvAgCeJMoph4ZR1oUsZTjuGoCS8CC",
  "key26": "F9fM1cW54Jo1979hjv5vmJE7gcirmXyamA9brCpXARF9ny9ifzGywZEyxj7sqWyUAKomY1jBDBzvCMLh5rhQ8Gd",
  "key27": "4SxwZH7L8pnndLtSycjG3UeEdRs6ZRDrp46nQ1PYKHtgxcVTA4Mm4aQeKvnJHAcnGwqDvGjjSrdbmw7HL3HSLNST",
  "key28": "zfrasvY7caQrnAqJwY38LVsLn16wmu72TjCwJXoP7JSgYfPFgKGz1YwRmFGxcfGF7EXzvv2qQX1j9EXgvj2Hq2X",
  "key29": "5AcxACfiL26cMdV4B586pTifZcfJoHHF6y8aM3GC2t5ohibqekRDRSWGkvNXhV29WFaiZMusX5J8aW7LDv2SEWFf",
  "key30": "s1y6EShRKVJToFEPRPfK1u92FGjuNyWSu6Ud9Rk1scakxbHyDTgutTR9GNe42x2uwDgy5qUyep2QDGCvvvfSAxA",
  "key31": "2qZynuZqqJr3sG4pYBTsJTzbSDNP79ZE7yj67oPvSG1HFS4dJzdQL6wUHW3DMhWd5yJUJiMLPykKA54RxATfffCu",
  "key32": "8NbuanmVD7x3WZdqxAR5XLHFivVuotwSyTQng546moQoMMwbMk8coMqSfMTx8ByGf2oyw3Wd6KnLxcrx8SG1Kj4",
  "key33": "4VRaSg1k3jBmLLBZ5MzGphWJn7nrrwP52RoBSB65bcqJevNifMd7igoya95W4mcX6qEM6HNdZMuFVSGzduiqQAnZ",
  "key34": "3LuGbmBUA9eKoh8XHWSnbwm7G5wN4MimhirHkE5e8AGEDxAiCU38pregVXivLf7kocSpeNZaZYLgsGcDVxGCRpNW",
  "key35": "26MTwAZFWJPMjBnaFYfkwUYmoUHnwPioytUgxi9dwwwUcAmQLZiC1msXdjzbF52EjG1SbNXfv87HAQcNrtQ4Xogx",
  "key36": "2t7AB2bsynJ6eMdrFZPWEYWVuWKpnU3SHWKLNCtnu2xxcFpWebCD8FkUBDAfHwWG58CQuX9q9TzxNaPZkXgQKeaj",
  "key37": "3QKZ5i1ZsNEL23GiL3Bk6HppDD3LesLCUeB9bNSC3qmgc8eNB7YEj891d4Z9zPGMCaDjT6XvA3nEw5DeWR15ijbm",
  "key38": "39kE1T2z7HirDqxt8GFTNS79tUVzEgZwotLX4ZsALcoQV3PsBZZkcBUSvSYiLWAiJ5k4pd6ZJW2QQmAr77SN1BQH",
  "key39": "4MPUcuks3foeWVMn3G9HAhwKvZr3HbWki1ZhJdFHn5mYu5nqTdk6DsjYQ95QZSL2o3fuqjDhT5LUbiVweoer3FFE",
  "key40": "2anq5ae8Mq4gHwn75dLqxTwRfGhX1278xzGfKGFyb7ycUV1key9sd6TXRTENzTzYitBSRMMVRXvcnuZ2DTSkN3LX",
  "key41": "2vJFBh6SzULoHK6Fng5h69T3qB8ianeqGnKkhKhF3tz6Bw9DP39EFQagKfFXJY3m7ohYxumtqtWCqXKQrqi6oq1c",
  "key42": "4QuVY1SgWEX7HMwJ2WternJah5BCQekGxFFH3nz5yppkCJtpLTRf49spp8x1wqQEreMSDFRD7JYBReu7EtGnmVTh",
  "key43": "2WfRT2p9oqWFPMQ7Gyd1Mgaxa4zdjpahfHSKHEwgC8fVihswsCbb1JHQpdTXnuXquY21y17EAkZKX5z5fQy25j6V",
  "key44": "58TQvPLGs8buQStprfobxQfJxVEvTwBBVKfDZiNP3CZxwTtA48ow3BuWvaASYvygmm5TQW3hK6v98oYWzAftzCit",
  "key45": "4pDcU2eKeBPE6GcRJDamqVHUreZX8fYxVjpaZveF6zLaLyKpHuygKBETTHmLohUJ4T5wteRaaW4yaKgQCfqmP5RE"
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
