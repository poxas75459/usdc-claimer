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
    "5qkenCiyGCHNoaMCdb1aY9WbJAEQWXCLfwMmYhFrB4HEtsyjMt4uK27ehAFFUtxnZkVAqL8iSshAZYxcDdDRCxKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otyh29sdnPgP5J3KLmsHrfDGzQ3zmHyx94BhD1D1xqd8zMARwfR2vRKaZXpqTU1U9TGCz43ZddsfbFSsgtCnPW5",
  "key1": "58UqNGFbrh9wA1N3cbGpYniZVLvADGHPdvcN8TsnHDSDTadLAdUKNXcgP8TKcAywURxEMjENcLHARB3w5b68wRJc",
  "key2": "3YHwiNpixE7fjEcLW83HQGzybWDNCvExy7EQWvHxYGFUdoZ9jcvQSDQZsGNSqxAGd1dw3Zu9BrGjcc37jm5HtwJ2",
  "key3": "3cuD9VxiSQKGMj9zeJvY7fRKwDWqf6Syq5eLvMZ3EhdsrA51gCepm8eSeEEgkSgatrGbSN5af8dpmZ5zzyyAfc1W",
  "key4": "LUgCbYpvBRd3MrVNkB61XPdJPUUL17ymRX7XsP9dsRjqS83w41gRHAcP5CvhmmGws6fSKYzPoBFt2WvYwGs6HPA",
  "key5": "2hFZBt5FmBGPgg4nHPWfXNwm56RddYweNQeNqLCcxudxaDB6QQEYHBY4NZ8PJJ71XAsxhvpLZ5jhXNxcU1mdpMJA",
  "key6": "3m4HnX5jvNZrgGGx85s1izcJi1dDDdrUeJFq4SWA2h8nt7kk38VnPBDqMuo33eWcCcmANRNXrM3KNwfu9vKXSs4D",
  "key7": "2ZZxM2BZau1pHUYzkXAEYaGPniXiTa8KsqxtLvp7w6cwAnWuMHN445ShEBaebk1AbhUX7J4RpvjTkKSbF5NNJAYV",
  "key8": "VbLepyhvDhGJ7Pdxq3jkAsb9NMt1gdgoMWE888cFciNRMeo8DcyiJ6QYKwav45KANaPdDPdXfy4E3WGSVxyChg8",
  "key9": "2iSinEpT17XPwysgQYoBuZW2njGC1qJityCJfCTj56ELvgT5vLvS9hV3SFfaJx4R97qVnPTTTmfmrVS5RAuVJRAx",
  "key10": "LKCtAQgUna7xdh1ZBZ5YMfa4VyMXnTum9JjfQdckCUrQMCqZZ92if1j9Gv5SLRziLcmMUNrGxZTgqQWJjHfRWLG",
  "key11": "2Lse6bL9Mt8Cptcff7aBsGk5bmE3kBindw9tXidTSXByjd18nyCzHQPdHjXpRbWTfC2WBuSojq7pzQRUeGrE9QtJ",
  "key12": "3uPiofQPZB9Azeq4CBqncAT3tKvhsGxgTnSJu5h5RswrySNTZgLj3CUkNGcjY5uUBw5ZV6VJSgusMrNq8aQbyCQR",
  "key13": "61SgnvbzfD9uCorXVDkjwRmVEwJh15C9yaFaUgEnzbQximquSguvsgyiqKs5RGCeEhwdsH84ernzGRX1jCoqu7LZ",
  "key14": "57c5kFaqT5nRXs7pFcLRactERtsrqXRuy8GnmrYL56nKGuvqJRr8Tg7LgmTstHWXT23MWQDvUDrw7Me7Mc8xiR8Z",
  "key15": "L9eVVahWZJ5SYemCeXEZNN9DXTABhap5yw9WKMdcrZk4Ez2VyoAEWcotz8WZKRW7msQVGSrbSbSajrQiT5wh4Wf",
  "key16": "21DuEwdGGnqsj6DoY9Tybf6uyGCCzdanth1345WysVxZCteCKhHW1TZZhhZ5FbvdHieG7XKD9BPv688DRRoDoe9N",
  "key17": "3RM5NsfQygrvyT1nNNooxpWfvbGBHuQqQiZCyns5hS8V8Mi5THuFnWvXnUaSByL61o9UzpU2eHukzJqR6treu4um",
  "key18": "5NVjsceCGxznkWjTTMdwFSjkuuHnkitnUg5VsZjBvmmSygwj8h61ChzhxCyYpcFvBkGiacC3CvSjMk6du6DC7GXX",
  "key19": "2WnSGWRjAfXadMPDC4ziu3ouLPTAHvndD9ywPVAPuCRqkH3r646ogJz2WEJbS4ZkUhAnsq8SwzPSLuQUyzNwanWL",
  "key20": "2st1MSUqRfc4j5ANZqASNsw5wkKHxy6L5kr5gq6Npeg62nr8gAwxQRw7L5RMzg7o74RBBVtphQCfCayEsmbtLDLo",
  "key21": "kQaLUbPsNs9S7qHep7PhmSwfe9uN4soqyS7zNz1JyAConWpWLYtpvQjy27KVmTKuX9UqXBK5HdHUZPFWUMm2ba4",
  "key22": "42LrekfWTgp1VHfNYtDZFgMkWq717EiZsuwMggQLFJfYDsJG6qVSLdRvD718ZSEzoUhLQQY4UaEsax6MVskLviHy",
  "key23": "5vqby5Nm3LJNYhZaB9XHLgvnpRAqu8czG9yM3GUzBFYHQneP8CZWa1NgnPkWQrGo8D2RkbVkSnpUE8wjHQ3dmvC2",
  "key24": "iVQaBBuk8BT2KS7GGkRKvcicuGKuAYs5ugPufGowYG2QFVyvYxgYqxw2Z5WEyYTq85bpPEJnvUhJToh7vK1e7w1",
  "key25": "yWjeHRjGtuthNQm2fe3CJ2LtPvSEZyz5mJ7Niwkj4QSttNM48vusz3tsa7WPrguxHvdVTL8U8aiBC2NBDrLUJ5h",
  "key26": "XkSaLP4cskZ1TqPSFNEco46brcciw8sQpqxv9mpaM5MqR24E2qg5dXDtj2k8FUJgLsBU8VDyJmA9A76tDoN1eps",
  "key27": "5wSSm18ZJEzU2bhrKpkEJhaMnLMf4LXY73SMeKFBo42KrnY6q8azFNRxW9HRUeNwmWGdquWNzvboSgYzk9GnEXoH",
  "key28": "37eQ2ohjUgkzbhQsHzADNz5r6dh6MQxkRGMv2huzbwBQXfm2M8cNwEvPFBn463WraHg9ZwSB3w7TaqdXp61DCfKe",
  "key29": "2xyGLobeRFiJvDj2gxsqyvYs98rVJKf7F3Zm7LXiYsnKUCTT7awYxt83ZmfjHyaaH9Dnt3ua3dvBXocwfk4XQMxg",
  "key30": "5Zm5ctQ1PAbvLdtffoET7ejNQ2FQfX4GuSCRtboBSZ4S5NzATyoSXna15HZzjj3MarViVMYu75XLiRGucDtsUiHR",
  "key31": "22jVaiHK6aseaSKhBT5vRL2PQs3FgVshE4NkwAMZLiaJ3TjNGqzu2ssoDpZjKrfcpgNqYFGTbsC9xuX4jRnq7YL6",
  "key32": "NQAGdBXReEy8cWMTvBuNyHQFsRzWy3uMG9VYFjK6EKHzmPvQxHNCZokWcGr99kR8VMpsDmSpkNRKcgq9rQjMJ4F",
  "key33": "5Er5m7JyCv2sykBU5cfeQpqZYvZfMHycfQiyWrSW8H5BnXhJ7gewKu7iqe4mak4i9QDSeAebAcdHJsuvspP23BsW",
  "key34": "3QPkJbGoHyvwURyrcsKRm6sxG3mfuzV1bk2h5zbdDn4nnZZfLzjx46oWFUzdHWraaGAb2FuAhxi1QNVnWLD3sR2P",
  "key35": "gVSARaAQjbMzu9wZP5DvfeR5S7JvcKiMScnyAMqN85eXWvg59RxU146J35zrAAZ2brSisaqoGoyEbgiJB9VZA9R",
  "key36": "4uKx7qU8L9rqonw1ShvbTS9N11TuQrQ5WFzLZnb5DWfDyUZGYPut5ZzJHGgiT2jTZwu6WwrbKYU4m64rXfQdGRGH",
  "key37": "3N69z8sYJ1NRe852wdb9ShZWL75VSdun9vQpyT35rkDrfpjxohFfxqWM6fVGjKxhurRgE5WGfy7rUabohas4i8bY",
  "key38": "3tg1F2uNaLVY3MJhRKCG3gyEHozNDEcDmwwPak8kQqbZhWNd3aADpdtx6dSU8jyKsFBZbdESKguoEUW8TsWTqbxW",
  "key39": "3kQfLskdXatmjNJABw5QYq51CmTwjA6Rpcb55eSpSGVZHCntTZYDEtbnmZTJzd5hJ6zBCFwdkas14APmAcrQdywG",
  "key40": "2t4K3FLcnHB4pPrUHX21AqWfMY6cfczJjZeRKJpoHs8t3XB22ppZwReA73XgdF1Yt9xjWxGjbQfWsW3rKYVWPnDj",
  "key41": "8V9iXYcvTKxZL95RFGU7BzsAzAWoWQL6f7fHrc2R1SEEXkSy75UowtfR4Gni6PhR7BYVyjrtY1P6SoCwtTXF8sB",
  "key42": "5cnNMARQd5fMJJgYGrS1T54vgcF7SPsHFs8GJWwoezDdKQzj7T9x8FXo6oiHPz6sDPkPQnuBAaW69NqErtdMKWVZ",
  "key43": "3uQfzezFsrnFYCMhT2Z3mZ2Nxgm6kYgSUjAmBoaD8tuRghjPPKZU5t5aCXHsskXQAkTTX5SHV2oTh5ttwT4jz24r",
  "key44": "3dg6er1ta5YeYSevjNpinYE5mBR9kmShT2FP3FBfVjNWCjm3dnD3h3dgdKq4BqgQo9wn9SUKEXhfP7t3tkZzmtSY"
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
