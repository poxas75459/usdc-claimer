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
    "5sfXXwDevCLJniHqV1RQonWhqw6M9T7XktKrkHNmTFRyiR36BYfjTdqFwaYKDWhSCz5mnpdbFNnTe3hyj8quw78F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tb8me89hrMrsHHL8kdqSQbrQQcvvHXAbcCMPxnVDGuQjPkmgC7XZmKVKG1vG2Bc6ei4AcuYfrHf4UCtPpmuLG1w",
  "key1": "5p3zxreqtLtLP1mFm1sHH69Uq4SRnH15nz6WoWvsV3KLuyvEtucxMt4xSXoJYhGLYo7ZSUcUnq5tJ3gyEgJ6wJfU",
  "key2": "4KiGPrCtodNnKbPtVjUC1jyUWjSKEt3fwR2qsarDH44qRMbckxhhhCdhbWAUo1X3DysajsfRd4Dixpx7NdxTr62F",
  "key3": "2EAL5y7VHsTopwQMoqCJ1zeZhmZSMDmfpYN4C4RzCGLLyL2m8KTcYGnxonevYwTYU1Uqs1wTy68ybN2mSTbKACst",
  "key4": "2ogGjFcb7VYUsUSCmjEgJD1i7kGqujYocv7dxWMahxzRzG5qPwJ1iiVmUotrzfWNMA3tJS6m8iwZGSPVWkunR7KN",
  "key5": "45t2RAYP5swLS93fjrHQg5S6eXg87wcAgVQ4S5nrCMFDA9QYxbwfh9McpzyzJCEZ2AqLk2wiBuJieqvwyaozN5so",
  "key6": "4m6P5nEWfyfsHGSppC2u94VANWKPmJZHbTb9HxmWxsRDMu51SpU9ChwiLSMohFfhdZns4ZtSLE4K53h1G8GdyqCw",
  "key7": "2DhkzocmQoTkYm4jq9UXbLM1bnMmrpwo7sjy87JHXEJZyim9nUR3H7K79XgAYvxhXcvpn3toh8UqCnzED1eqJPiJ",
  "key8": "bfB4jCweNHL7tY9o4kRxxBzMfJT3dighDsJYbjzJyogZp9USseyc5x7GiY95SviWEnexMn7NUY7c6aKkk2bfXsL",
  "key9": "4YANWbXooAouJhyX2pqViHnzVDk37u7hLLYxfYgHah8NLND1PyyBox65gnEfDwnrPfSsS2HWKrxtXVbAWzGtQZoe",
  "key10": "3UJHUsHyYwPdgMhUReQyZ7v2yJodxvb9csJq8tdiTu7mTRhaGs4RXYC8z6pCQJoovQhQHmKK4Na6oTQhvJseMnVe",
  "key11": "VGxQiNcx3EpWYfnybuBFqKR4wbBVLYevxrhV2QHewV76VGgC88BQdXPN4TSkWsuJwAz7X2CnRK3qS1zDTsirYS3",
  "key12": "5DJw8D2iJMSQEGPBLxzHt1qTHREwK3Q9BLGskF6Dp7pUpdK9b98rh1SV5CGwkGKrU3957cVE4N8PN4BhJTFKXSRR",
  "key13": "4n72QFH9zZfBFsTHETBwTqCtCCQWNpNiunHx7nyMfUc7XXZa8q5k3WBTCuycdMPzv1RmNDMNEEVsC8anehhhbNmP",
  "key14": "NFHSMjPrvcUsj1FahtoJp2PwTcguJDmbRpc7yMhvL6itPEr1QQooLLcisaE4unDE1vvipC7MNCfwstZ42H4cCDv",
  "key15": "58PWCNh5UvbzVDq6PxdkbDnWDE4PHGwXdCEeZEqbnGDVY96ettDLdNjJt6dtG6XeKuKDmVAnrRPQk1jEhp8abyAA",
  "key16": "5Prnmg6v4MavgBmRNWcD6PT9V9ZRmb9SUj4NHRC6Xnj4hkfMWYEtcFUwFGGYH7QLBufTcjTRdw2JsmmKnWQUZBYM",
  "key17": "4tkiNLY2kZjn1UfwdwQje3KbQGtTZe8aPKtLZRFFT4Qae6GnSaJ24nA6r4HTat2veWxyhV1z2p1vLwf3f5zVvcL3",
  "key18": "2u2znN1VaSqQBgRrCMMA2jhHZ5oAur3X92Aew3tfsAuxHnJGV3ks4a8GJm2bn3q3ZPfzqZesjReRv3jyFQaUBkNX",
  "key19": "2xriB2vGA41umv7SYkdNKEVucbbPXQTWyrvJKYusdz5pxzqq9dJFVDvUwEepynWCNVuS7jbSkm7BFjrdoxTZZtgK",
  "key20": "2WSUd33JEfsUgT3TjqV61is4poPtcGBuikboQZfwRVLKV83Nju9b5EW9vKQWDAEt8ikcZYyUk4xQ1zqNM8wyVqqs",
  "key21": "2UPZqaAsRpnesda8DXsT3chxXrpRdyKsDUZ5M1y1viMnZgvGvC5mLN8putwGyRqhZSpw5ndy2JS6oSSsG7aJbTYA",
  "key22": "2VNzmftq7ybSYwey45Qyd9CGX9LjDbuj8Q9FCkY8fBsmZARuZNdvDfK8BgyuoArRtdzhMp4DSK1DWY7PXAsxvY5T",
  "key23": "Hh6sCMMy66oieU5VbfC3GjaZQv5vRkJCzs3rtGRmsYgimW5ew92teh4nhuYhrsv2E4ker2CkDHNFhtPFLFsasHs",
  "key24": "2kFX6Tv6uBR9qX9SDnFcc5FPXPk1bx1ApNpY4Bf8LU8byMydWTEFQRgw3G2CPD8f1VLM6hczxAWtng334aYLF7aF",
  "key25": "3bMQX57fTevyzuYjpC3xGBUeCeYA9L7S9yBsUv6f4Vx86DbgQA1q1XHrT7H8xyG5QtqWf96psFcQa5PP1x38dwVR",
  "key26": "XKU6XPzyEMQZ4AeWQYkbgDxJYyJBmbji3ccNCFHZKdisaR32Yb26ruQDj9hcWsziwDCLDe2mLtef53956tJ94Kq",
  "key27": "3499GYcNqYFecBpiasbqNagHoLqWaNd385xwWKnfHdRhxkCfJ2C1Dy96SjW2Gq7kQ9e1ME5u3krsrh4Urh1LNHHb",
  "key28": "3bBdsUSD1aWr3gnsLpeqRKSQ5EXSbdKTQ5AjoREf8cKKDKaqGgim5DJ3euWDJP1ZcBoHRnAxDeJnzkkD9S9hoZ59",
  "key29": "tSMQqYFp5ebvMzdFoeFcrGpYDckh42oWqQRvW3wF6SJE8iYtTGL3NEK9Yr3hM6EZZsUnm6Lk7vg8Z94hJtSV15x",
  "key30": "4NDz8aiSDrzNoNhxe8NLTpuXYjQr48K5cUusDmfUtu3XTwb3my5vm3nMM42zq6BvajBQJygFQu1DpULmM16XDgPf",
  "key31": "2ckRSJgXFJxHjUygsA8uspyL2oit3qHrwZ3mmPqhN5o8qW6pdsvcRNbJVX1XfKzV4XhwGjnoJeetnHVhoiGMfd1Q",
  "key32": "e1QiR6aMShKZTHpC52GKnRRr6Jw6txeZ9zK3wPkLez175oRwaAzNBcJLUYrzXCKYTZtyznacVweqcUDGhFYcwzP",
  "key33": "FYXparaDy4ioEru8Bvsc8zY1x1Ei8eoUKnXw3LaXKH4UDi8MmZ4SEoNdsCJR2x21Pn76nQtEs8KiqTV8NRPvfMV",
  "key34": "35u23JfmcxagGbLCAdBfJDdaCbm19fYcyPcf5kAACdk3ZbHUCW9MuZRarTM9FL1qVHmdFFqtTbBQEbJL8ANTC6zw",
  "key35": "66WfH2NHBRzqkptEaPqAyiG6zuhbHNRPwM6R2BYjRMXJxzAW6sL2uqfRLSrb6QFduLbUrX4LvUhJhYuvFU8mDwM7",
  "key36": "5tg5Aw9Mxf5TxCvSW7Lw5K2ieJ19quAb3JxkNGitZKygZ9DfuQuv5XFRbQQbs7d3CGf73ReSQnwnceqpoQjygpy",
  "key37": "5DPjnSGLhErDJePHfcSUF96uy5vr239AuSrgpcCYYXXN48cpStcrcKvvy1pcxzUNn1D6w9qGhJzqdmBxkRBDjFxK",
  "key38": "iLGo87expkPuCqvwnwcJTUXUHfCL8xaeg2SEsxHmy7WSyu76ezHkv3MerjMLkGmeDD4JCDJLkNY31yLcrPhv1cs",
  "key39": "2HNa4NNUfeVovaBXHarmyS9hyzEFuCNEenP3BWnCNthLeunCircpkUzEmRqTDZy13ghXkTZxDCghG1SY1Cjq4Xs9",
  "key40": "2Acy449fyHgBPtQcse7MQBxL4WumbeVqBTSA96K16y14tjy4ZKapxYq1KaDgstypzE26Eu1z5ZkH8cNyag5BDS2j",
  "key41": "KvrA1fWwWZhziocGnvoM2qmXEbw4KTKbTaSwcSAsmMotzMXnHrEZBMMcD2ruFhD5hDprMLa9yksfk1LmfuLdipS",
  "key42": "5eSNGfP4aiPfqptrDfCtryhApZEB6VA63u1VBRh47Jagc11gAkHNoniSzhdBq847j2WWuZ3FHwXJwqSy6M5NdwMF",
  "key43": "o4ufXWnBsaWyZhZMnR6t4LUSf3UAtoMMFtNJhbH3jGT5sCqRSuFp78cK2yY3TqrK6rotZoMRBLLtyqMkm9sDbZr",
  "key44": "2w7Zc1o1QK6krgPsTWXdCeVBwWcD16Qt8hykyCzMUkheMXE3puWRGzxwFF4ksC2T16eNrtZzWufJzHbiomdXaUR6",
  "key45": "2h68QPJ9Bjw8RMAGfLFQwrteT8fLaoZpCfL5ppQeL6aYpnk5ZcmmBouKs3UWH9PSduVyeWyKHVby1A5RrzYMZn6J",
  "key46": "2Yg9aq6hwGKdWKkZ4Q2Xkj2AK3Z3h7AoMT7zFiM332HvM1YtHUg7Zyrj4J373zCNpZwHUirUj8uwZStWAyVyiqap",
  "key47": "3GBoc7ty9EFR8hmihNKcD3SXM13CDEvEDCxzfcaWGQSgSUAq5ix2pkJbrRcPM8pykmb4bhpQes7KHH837y8MtaTY",
  "key48": "PPywtrNShCWHTXYbiyWhHKE6GAkfGa5CHDPjaC13acn9pHPD9MiRFYCxZXTxMZz18BWqDtyzuxE8apufyQDKxba",
  "key49": "3Qqgs2vC13MJvUQ27ivAmo3KSgCETZn7B2pGiYeqNEGEw2SHJczkuEepV8CV1XKKpbLz1VJiUtpqUFcWWHKEj6dH"
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
