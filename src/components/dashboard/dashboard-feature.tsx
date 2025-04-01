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
    "3nuuD1ymh7XjbzqR3qrZ71eWsG8RjK3dN8gA6SUESwrWhepCjaZQABByVNmA511Hd4sUQwywX3hJViFkdEbcN7ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYgUiqU3AKfzmcwjcb9TT8EYXzrCiizKPSuEmerU13nr3mTewgFvNnKn4NNvTyGGfSeioydrrAdnEVvEPvtCDuQ",
  "key1": "2Fu9ToiccYKoomh4ojTuWkfcx4H3MrLXzsAHvxjEWhhvQDna2NjiJWjao6p62xYEiR4zB9QeeEBdoAtjH3DN7kJx",
  "key2": "3tFcsmfKAyFkrEHqWvSsEe88VFsJBEBQTpDsyKt35uaZX76ZXBbQ59JGPY3ev4FyhV8eaj3kV25Ebe7XgrHM58jJ",
  "key3": "2qkY9hpGDfbke3gxNX6mu87fxTkRuDEfr5n8utHS4t8ooBGDtNzr6y7Dt75Jkv5ZwWsRjWCRgrVStEVHHU6842Hu",
  "key4": "3fq3xjLE3PYJVRWHsaRjmdvApCJJ21W2ahsfi3ZDq3efGXy7gZzDSAS7gdtKPJKEfeGByJ4r4LgBLFhb7fXdvQbh",
  "key5": "2WH41x72ZZvP3yatEchafHDAZi3TmyxbZZAyV4YShveiKS4dHnoyyXWvM9apstBf8KpukgTiF9JaRSMm6Abahe2H",
  "key6": "2Z3wEQtEnCNcXhLggE1VHko1joXHCoJDFrXdNXwXH9jtZwPE2RAVDCGZNRsLWavM4rTQqLDjPWiDXnFg8Wj4VRUc",
  "key7": "48WPnRRkEZjtfftuUbuLxTSX6qvBRwPiDwtzq7bUY6itvuAfg9hWXZTX7RGQYAuDC6Wb1PXwhmjKzHRm4JE1G5gt",
  "key8": "3ruRyzviw31VusCPPVoDGdQ2kJZZicacxrbjZiqPGfBz2nwuQ38zzt5EqL5sTSzo348xuXnEBYvGeSfCLDY6ZBC2",
  "key9": "5dwTVFvY3ghQxnqSYe8Ft1vhAjHRw5cQ1ttB35QPVJzuzwi6mCCYguaMdgDMbeeug6EsWrv5ETLcE9ZDUK547CHQ",
  "key10": "g8ZBxaBzk2TTXJFjGMKxwkVL7E2sRdk1vAcL5E4ejTXiqqfFFHmkX4BqbynGRjmnQnqNA3ZsNyGyZvu7LWxFysQ",
  "key11": "5pbpmxUKvS1JpveYtrbf36szqSESqv99M1vZPxbLCqZPrkLF6e1g68wh4LYpG7arNV8qtzfUHLwKuHLAXzk4BoVM",
  "key12": "V79628VQX21W7gyg6e7A4nuXxm5hetjVCBqCG8NdTPGpK6j7Cqy195HPDZqN5NyXyCCNzhFepfEc5mTUDJ63xvj",
  "key13": "4emPNXjWpCGmrfYTbzZ6eBnzifmy4RfuL2hthuYQxs8brdRVvWimUnDS5Euri8fqnCCqedRqrRpJpWS8JUCj5TX7",
  "key14": "3N2n2D9rBNDGGct1vPQVk5C9zVzVvZQgbJGEBVvLpS7iyvLYHyAYptWJiLmeBzWp1XAHteBPEzJXYCwhj79mNn2F",
  "key15": "5aV9j6rUipgbrAJTAdTw4tihLvRLPsxk9B4J8zxh8Ji19q4U2hfQMpur1ewSJXAVb5Pm8nfzMnGGbRrLJRjuoRSg",
  "key16": "3MDRbcHzmE8Fs75qjURkWaXzfM3JPnMt9Rweiq9uHj1juKg5zRAfvet5AZGJbVJMmDaCNrLgfNGcFmKjSAHE13b1",
  "key17": "3agZzKFJnVVsag13njqUTDLZx4rMsSu2WvRf1E52zq82DNuHYqX9esQbmLV5fuUdGJhzKrXGZc9t5tHXgDeJdxec",
  "key18": "25A28b8UpQ5X8fVgrceULksRXzoPTn438it7qMDQ8XYacfwqMaVzMTrM9dqb5ZfCTWEBXFvrhztYZt2pED6Ayktq",
  "key19": "21x1xuiRiVVbNpML7jXGxLd8anPxzwySTtTbFDiCN7MwabwYnMKJjKXLd8jXcpfgvHqtL9ADcCK8JbKLMrUzpixD",
  "key20": "55ouSxoEFA9ZXmLh7VDELqM7GXASvuaw5Cpv63MXf1eoapfM8yFGMLLXCKpy2jecjP8zoRnto4wnfCbFprDNvHEY",
  "key21": "3e3DxiJVM41GVcWHWugZStjbSDUCEFBX9sFV66jTK5a48eJd7FJT8ScgcSBJxSbdzVZYtRJqtZpmgGyUk6WsQ32g",
  "key22": "2PYMEFE8exrqf3EzoGYPLEwkEogp95gwbshefNniye6tfSVDvgSqcUGxbkBo1thhaGu5gPnTXnBtyBu88W73m2no",
  "key23": "2gCzy2qYxjaeysUbeWioyWhR2Ndg4KNZfRsFVDjLoGBEC5RJgxKztEseKUnwau3goj5GNGx8nV8nsAQzDcxTmXPu",
  "key24": "3GWGKa8EHvuDCv63CZKaAx8QUTzKJeVY4pJeHsw2235c2bgQbLoHmU88GugGbxMxQp9hHhaJt32dP7vbqVdf3Eiq",
  "key25": "4v1KVFEbF3CUJoTomJ5zWYkSYr7RPvC3QEF4Bpc6ECBy9pRUCqEedHpmRRYJcPGe98yVxbr6EwBZFu19MaeTjSaw",
  "key26": "4PRNvh78B91NjhbSSkCsoaRTHDi4V6JLW4PvzdoBtDxNumNWXbyEV3HPqqfdrvcjSeZpgbLAdqdv2q7P7A6NtHNk",
  "key27": "4uBSTvdyEQH7bKL28hiwYwZRQbEKZP8xbUUVnm8kJLKZSrhLpUaq2n3XNu7YLNfSjg59HknSuBQj2hK15DeAbLs1",
  "key28": "qu6vR9UaHdLFimfzxzwATfAH8dgjvEydq4m7NVNnZxbockybaBBteveYUV9f3fHXdjQ4PiTVavQgX8b2VGpGcsS",
  "key29": "4rbvDVJTkFymJMoQ8j99TR5gq8zXPe2FaEkyoaJaXkT34BdYSkuscpoH77JZbqKmjpnoiz9ZHdXVhEKn2zLtWTwJ",
  "key30": "o7Q3Gh8wDJc19yWYay8Qwp5uis64YA277NuM78zmqGPx4EKB67uVgFLhoMcyDRi1us7Vjx48GdqysL9LAzr67P7",
  "key31": "5GdRSyhFx29wKFpJDqShQhakMZ7Z7ZyGa9mbMowFfEC4GDzQAPen2bcT4cd35xxMvoL8QBuk6mj9nBy8tEgeCYhA",
  "key32": "2noZwhv9ReP3kjQ2b73Q3UjF8W1s9sBdbTkB5fQH7EP8Ny6Kq1MR2fRQ8X1f9SCuXHbzu3pwz8JgtYdpe8G7trJU",
  "key33": "3SB5JaFCKZbCzj8LxDcid7cGAx1KQDWDXGaNSAc4621i3iuzBL3vDxnJ98eiY9U1s4jh757kvwp1B3z9e1UMdsS4",
  "key34": "4eM8pnGaWD1KpdJvSAjtRobMbEttxzRiMPY4PPT21cVRT6WcpQ42r498hWY5mY5JtsUgVqW2eMPqtoTEKo1ToX7s",
  "key35": "ykQUNV7Wd5UaKzHX6i3CbtYdVvLrnyrp5CMtV4PE7XoccMrteJK6aJ9xDW2KDTPFRMSWqnxjufBNB5U8Y3gTtWG",
  "key36": "5Fave9dVKXKKJYpnFLcXKpTuMzvU62xVdR2TadwzYdBQwkjK6TmDp6LzBrFeFMj15xML4g8FzbpX83aC9pe4XuRb",
  "key37": "4U3dt4zXVmBUzfys3ttzM55PhqxZkVie4ePyACzsiQCGhgqpYYKQxofHTTGYus6cAdgHTrB2cjnLcwBtiayPjUVK",
  "key38": "9RxiroiWdDphfsNGAj7maw9fXidf8DXjdqmYbs8Cm5d631fQc5KU1QxW1nXbUGxfEEjKG3cWby48hNZwV6cMtmz",
  "key39": "5K7jrVJxQMowBeSYYzJpd33oA2GdAwSPFBTnsokq9dnMLfB13kW5BvwngTRoBVkXT7e8iat9Chgb8Qw4wPNLB3WZ",
  "key40": "2QxVqxYUp4pYYe2aNF8jnZq5Pvz4FjDN2gcx11WoR58kWPL8RzE9ZoCsqXotY7BT7vN7Hoj9rS2ufuUdfPbZHtq1",
  "key41": "4czqkehq2jRA98RrmYhc58A47yweHZv9NfZUj3MkRtzpZUN2ZPJhDDkiyGouQWvCsbzch9dNpoFCDCi9TyApxgmt",
  "key42": "2xEE3cbcKZPDhbs9vRg3RvUhvsCRR1YwmULfBQErF2TvWvutcCXYYPZvwvU7KgtrRNVJXouexyz91fAvsBgyMfyy",
  "key43": "kpxLe2zJcoJaUPV5UJ9sGhXbDK1JnqBkoEHMyeCsFAiFw693s8nj72BR5SnCoaHAW1XV47eAjPBG6N9d6oS213k",
  "key44": "7kTuuNit46ZXZnEZNKuddgDqYDFxN434LaYwE79mAnaq6Wfi9ZD7hZSn5uSsziyAEDAwFuiXmEsXZYTpdP8niWA",
  "key45": "PrS4osewgjaCRjE8h4hgs7rPQVMAge3nevggX5kS2z297wyXipsYwkk1x9b2pCuEmNfFuSYCiki8q26Mm2RgZ1z",
  "key46": "4mRpjq8K2vnT28LZJSLmd1pjS4kgB9HaE5YqD8JdTpQejKGammBdVLRfZCwoYhfDyygxrEB9MNiZaf8EjQBszgmm",
  "key47": "FLGAy95UoV3NwQnp48uSCpUY5E76YudQCQgz2New4PN4kn4VZ1rpkJS6s8sigDNNd8FZm7qki4nnv2y2N1QQqfH",
  "key48": "rp1qdHCWFGvjwemwP7zRtsRDFUET5ixk11Bbj8WkvyAPsH8cP6VQ49Anp1tcR65fmb5vFy7hQPpgEDkw1TFh6V8"
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
