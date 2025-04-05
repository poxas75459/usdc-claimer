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
    "sL5Mz5j8UNmVyhHBmdVF7nMQdENRtuLwA4fmZywDDqi7o9c56WocUijSTMn48jGNHcKvfwUfovepj6Qq96g2fc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JpRVNBi7vk9demtzHCGKtLNtJzHZ7EnLrfiJSFkU6buFmofX91SyVvKhkHcryMXUjUmqQfPXkcXdUfG52RCNKS",
  "key1": "3of3GJC5wixhTmFKrfQe6zcVaQHn8qG2pyb9BdWCreFvyBqbwqe15Fkvy9sxZGxoo1J6iUqbAYk7H8BBk4UQKzxG",
  "key2": "2MUpAYDR8w6CrAxkW5n6ok1RpXQF4Ewf3e6gG6ctmvWHwBiYeWeReVRyVb4oBHMMEDSX8vvKKC3WTnD9H9U1UXgG",
  "key3": "6AyLFpr8zcN79DEXwm5WZNXGMRCcew4XYnMjvPb51EYQwgo4AyMn4t1DpaJrojZ3srm3x455FDWi6a6dUUxUqZK",
  "key4": "QGCV3qprUardxmQKZtAZ53oHa8QwufGFbSEoPvZZrJ9cCMTWSFrrsoGx3TEyQp3pqtymnnANCdNmDvd3Y2XfoN2",
  "key5": "5w1ixXjaWFrReP4vo15p98HFQTrFLcdbiDGwnxDsAD5NoJ23ttcvBG4JbudPFmP2ET9qCvcJcFcCQWe4pPir9ehq",
  "key6": "UGCxTsSd2KvszTS6dujbEehLMrg5dvNCFFZ59FE5dsgVpVt9cemJEbe1vRtJ8itrRqhtWVaZ1c4vbvb1PTsGES4",
  "key7": "59ZmtZuVeN9tYWeXL8e5KH1HxySDJN7KdugmR63nPuS4HKxn1rTDNGA9HwnCdN6BAq114qQKJZj5AEDgiEDqU26e",
  "key8": "2XF9LCfhCVJHMPQf71idJuFuAobTR8GyLc5GLBqyHpdp7VS2pDAbNZp1rTiaLhq3Ch3JF5dDww8YjJrALkvoGHKv",
  "key9": "2YJsCcCgCDLzd5a5gnSMupUV3uqecG4VEM5FVJbPHCoV835RYFrXNMoZWGmioUemuGvExqMgi3dqzLJhPYH8jKGR",
  "key10": "3K9J4FEYtmj81BKFZfDt3tChCEJ4r2gRbKueBMzaAaw7zwbAJtH9cLzxWEzsuBRrVqoH4okgT21e1wEpGKP3M6AY",
  "key11": "5cfsT4mYkyMPutDJQvjpBHEdHitL9oHG4Rs14jDF686e57Rq94XTpW9bjNhKUWcbt3WroVAuk99KcLa3SXNiPYcR",
  "key12": "4hF2gvY3d5Rz6tc5yqc9CweK1XZXjNSV1Wakcm9momkGC8HfyYbdDP7kmMpQjyigcUSfyU8WLs5wWMNBqiDEnhD1",
  "key13": "Yf4yzt1m1BM3w7CaWSRGfiJb9B8v9CDoC9xxDATf22HywnMDE7FkZzjZu7ryv689iFC38dNHB87LLhuCkWy1nrS",
  "key14": "2Kjpptm87Sn4zZa9T1VStTxigqZoGuc3s7T4pvm3vE1uPn2Zm5HRogzseUyMZYyyXrA2vzZMZgeXWUvSJfN3rRZ8",
  "key15": "5KgPczYXqKE42JQaK537hhhChgqyrH2NRRBhxHfN5myzaBxPbH4DYkwRVTfk9ec5AXLHmdPSVUBrvABce9gJchTx",
  "key16": "2QYBTLZja58ERLPWm132KxdkLPJLwDegoe5B2hQTSwf8tbCjQFkgFgzfm4u7RxWTe7p7qWpRgLbWxn5HELqtoNR",
  "key17": "5n6UtRJ8yuBGuUrv3sQLC25te1whbaf9H2iJ43roWLjxBhFLZuKhR53o7N7sZHGVFwe35xfy6JGY1R72rvFV19iz",
  "key18": "3wavyiyDpfNFnURVEnmpNFKA3Ce45o8je7eYrk2chaxf77BRMfVy2cZhHCSzoJTd8THou2MYgFhag8KZYiVWKKve",
  "key19": "3QgXxoKt2viTHGPuZx7nvkwrc7fVao2wZQYxpMkEANR7TS5sWDggpPJxa6qc78oVWUsJ8PzT5DD28GPCY24pkUae",
  "key20": "44geVHe6VzPHZWns24afjMPM4wnRE2dafUyvqdoYpio1RReUVGjLaSG2g5a9n58qvoSrGF4xVbipALAWYQdeoVwb",
  "key21": "29onZGooJTRSPcKBd5cBNE889F2UxGCAGt9w259JsTNhg5paYFkaqqYip2CeHj6NUQ7dT3QMwrEcPevNSacUzMcs",
  "key22": "79GJWqnb2uKi2b3NawfiZbo1AqeRGPfrBCb8zCw8AbxrVqFo6YZBZyiQkBbnMMpBfiAvLdNeFMfJTbF5hMbPJiT",
  "key23": "3SW8G4XgZwjnvkTSxAUexBgwARzVjNmw5uNvSNjzmtorGtKhvnWSyx9De5WMKJs7yD5GrfC4qDYtssQhErJatNoU",
  "key24": "4QA6VrPVZXtKfTjh1AtBrbDjfxhrwZuBMVTUdZadjkK85Sm82CBtHxnn1DrZCcGVgPLu717Ja4kcsXqADgoXhbpP",
  "key25": "68TGbZAsSYmcJrnPvJ7gY9tuJKsY21gcte4GMEnHGxKCRswfmKjSc6o82bgR4ARqME3rL8mduHjTrwD8Njdyb6J",
  "key26": "3YWR6Ym97sQhJBU8gDxaA86UiTtk28Xif8zZvmeb48Efq6iy8FmNDrdmj3PCxi5Deh7ivLr8JDfLnzie3VFiWBLb",
  "key27": "666sHtUB4qigQk3u6PzGeBE5MEBT8KbVTx2SaXYFcQqq42fty5AhpXA16SbQheV63idfvuio7seo2G2q6P2ZVqDZ",
  "key28": "5btbd141nGFESmbuRGmpoM3eSyhE8sxYDbKpY3tbcUDc49P42NWpTjJ839xyVvVaeVMvXFFz4VrKSmgDopQHzQkH",
  "key29": "2nHugB9f83n48yaaF5fJ653J7w63JZFwZc4Z5azJrkfWtbYncUqgrLV1SSzZSchuA5prdhjsKC7HZSDd2brsMCv3",
  "key30": "4Wx2mjkd4xS2b68DKPcadvcLSVGjBjYuKqpYN15HhibZ1B6hSLWdHnxrfwwBynWYf1s85jJQ4fM8zRN1MoPBCn3c",
  "key31": "5w5Ab9KH8Mm4BGGzKWoaZn2QXMeKrm9x4zQDj3nhqgmJukpTtaQcVqKyaHswpgMui85xE5ZUk9RqAHnc9oLkSiV8",
  "key32": "trNDtRbBZLjtJrx8jofH1JgqKq2W9DHgzua7uzE4826zzxbecQs56JP4E9gYdDaARPiXGRKSeSG8RmwiDzLPcGy",
  "key33": "4VpPNeVqys1yuBASDkjeM79pL7QB6QLbivJYRRNYtRSAAmDjhsGPn5mucwimYQDQSodx3hBCBRzowEAVK6meLyyj",
  "key34": "4N1MX93LdsK3Exa39GE4APXgWWqK1E4FWwreN2x6XJUYXLY6bo434DMGQi5Ppz2u3QKcqd3wjgGMgqfgLK4R8uLN",
  "key35": "3oaHHWFbNv2o4q4pSV72Vgb9LmpfGcKerJZ9RrUdkDfgiuQeF38eF8fgVw3VvbmQUj8iTXaEz5uVcmbKWHnznwxj",
  "key36": "5o786iva15vcHMjnWn1gp59RuNHJeY8aR9nGnaPwp89Yqk8zH78uBdVHKp1JfbJZaoj4s3p8gC4eDwmAakwmdttq",
  "key37": "3r6oVoVCce4PtJ3kqF4DoZMW1Z2xTzd6Lz21nwuuA58WXiGpmKJvUMjb64vnpzg1eCN62GqCwABCjqcMNTaaPMAw",
  "key38": "66rzTkDaQbcKKCwMKhrY6JJAHH4cM3YkpPyYjxm2TQH7hnTXHwqcNxWXWJS9nVZZf1LRAxRohkPdzDMbQ8qesi3Z",
  "key39": "4WP9haP6nSx5HoBDKWMzz3r57TWNt6BvNfMHJxjYkrw6A8vZEKMtZWEf9PB5BVSq5MMAeN5AA8LSxYH27i6N36Hq",
  "key40": "qQnmNVkKojxuDGfMaeMBdVi96WyUdzP5nXiDrnMPQgzeRo2F1eBcjAvEQkfnB3Mx6vYELnfEcKmJsP2v4VayPhU",
  "key41": "2Hpyy3FiJbUsrJudUudcRq1Wj2tbKdR8jsMYzNdmDnc4QsTEpCzChEVyJLdZyUEUCTJmYN5s43KDyg2JBFnb7Y8q",
  "key42": "4NSvgZw83mLFYhPYR7KcbWjr7Vm4MRKx9VajQDjXPF45AGcuDWP3jiJjULNmw1zQz4eGhxugiyHnmTmjVhRv2G2R",
  "key43": "31P4TEJesL9qTXwDgWeYC2vEJda7g89w7Pw4rnxCAW3RoGPVN9AJB6YAtF4qfwn4TEuRLGch8VgxmcNEGhp8ryjH",
  "key44": "2edpRttwLbdN2v8vSm6nuPUNNfhUaCzvH8pMg2m4xbYWywxvXYdSGwpzM3ykLAGQPUYpF9KarsHdhzUjap2vgATG",
  "key45": "3x2FuNoTxKA1S7DqVuq2obrDAno2Uu6iygBH8gpPZDy3sg5375uR4UC3x1YnfiVdh7xABkYc1XcVuzR437FrNVq2",
  "key46": "2zqgPwEAq57MNFqU1WcFAiWhmwZCfAD2iEU4EMCLVvNjybfN9pppw6h1P7GBK6DwtWM5ywNVhET5XHcRojvk2WCU",
  "key47": "4t7Xropr5R7yosWMLaeDgnfgVMizN9zQs1jWeqhZTtHRDdMZRWHWjsP33S9atSkBQsriqHyzyxKv9a8qn69bycF6",
  "key48": "4wRSnEqdHtbKcaR6dAqoMBpLPaGtSgDb8wF2LYg8Ei9fQzHGH5KivS6YH4KL8c5p97rXQiBjksqMAEpd7hxYZV3v",
  "key49": "5vKoZm2u7PEvCFhW1geP6X9c5mUPYVu6bw6Ng9wZSmyVkXbKXUSLKbafTEX2rMHJidDGcZWKt378WetRkdZB8N8y"
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
