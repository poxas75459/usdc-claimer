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
    "4GZV9ZJUsTsQEn66iEprNgKAVJV5AszrxngykPsvwrihonJufpooyVmtZnxHYQs6sff9WisVehb2x9mge78Nx5nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N47jVC3P9BJyGYYULeeDHRfRLPkx5VnNBPF8WE1GtVn8wrFV1fFAisJeGm6nnrHcgpD7gm51vKqjfT3h8PTGjyV",
  "key1": "3WtFJNX6HQALfJezZR4KN6RT6tW1DiFr3mnTvNUxB8Zb156m6Zo8ub6p4SnPSFHwHyB61o6gikaShapCNxz42i6p",
  "key2": "5NWPSaQQXT9FeThxHdReVTHefGADyyajW2Q49AmcGdohWJy9eh5UXyR6iBEVqKeMcRbadYgt9gTNXpGeQ7FH1T2f",
  "key3": "2WNW3KzL2PtBDp1fPzqDZ5GxRByc8SvMBAuVomCbvrZ8yGC1gqtyt76THFw1ZYVgypJkMUzXz58eii5JV5q3jnUG",
  "key4": "3xfnn4eJn9TptacYAEwN2pLKhRU4SgvjcwP7osW9ebdvnKnXTVxWj35Zqx1Vyk8bBUrpsX9f67V7wqnuj2jWJQ2z",
  "key5": "3FsQd1YV2hrrNn5e8qoP9HSnvbTaYBN77FbB3tFpTBdvQTdRXjrnzPonbPsWu7tstnvXNBf4JUH2yYihuBYxkLE2",
  "key6": "nZYpoX5iPhvxdzucEMwhgiGhGU4KDJcwFtMcmu81oiz86daDjZDPogqF1c6NFJqmXhqh6jayK6yeBmYnu19XEiE",
  "key7": "2Ekfkeh9xVPg2Qa7J5o5HtwRetsQxfkuvqr1gBaVGpWScd3x9PCjGHY4KyzkU94SUxq49Mq5CDgBd9wbtRUgAfGg",
  "key8": "2km6ttJYbsyN7AsexbETEVo39q8TtU1ZvRKGufdUguDuKagpweKYxaBpv4KtCYN3kAPXPpWwjX2Pf2Ti2Z9Rt7eR",
  "key9": "3aAWtNM2cKtm4FANRPTNzyxeStRNXziWLNVbYJfBjKrC82nmzTtjfZRPkmaUv9v6z2V8y4VWDQwdg5HQUdhZTW6h",
  "key10": "5bFNMErD8zpYXnuNPXSKNpyESYTuXF6d2KrSv2h7RiuKyLZUi1cJ3iHYkEYTrep33yDgNUDDBuwaX918zWtSqxKT",
  "key11": "6TDfnMocGGo2zQiaVon72FR4dy2RqFmb7pnEcwxStJxM7Gxqf6haZnKYvjgZGvDfxF5Z8qn9znfNET2ZLE556bF",
  "key12": "5Dvd27TZCCvfVHNdJz2RJSMRWSz8BAcYDu43qs5kXS8ZaWQeNJWmQFSM4kW3h2EL36bBoiTQbMrtRxz66cmNBKqM",
  "key13": "3b26ByTfFtfPmWfFLEgFgjUtzsx3z6Vwjiy5K6cAAC2YwjavQyvCsKxw6GmA9BeBBDkuYarMkfVSxQfzzgggqRkN",
  "key14": "5xT9bFBEqx1Ko2tFv7ZPPz3DXF2pkWAuDEtoMmmtiJ7mruFgV21Qr7g6jANg9zJZ613Z6q1DqqtwbVZEwEp7NYFj",
  "key15": "56ytDTZXAwTtD1rteMprfXUcQmM49Udg6mqry4dWLUUx8LY2BC1SaQwrXxY1CCT5SZ2o4Gbx7MBc2Zsq7MAFEvmX",
  "key16": "2xYJfg2vk2UYbKa17stzNoDnAbTsZRFrfbe26As9TCZgkxrFWs9291H1UpTX4VJLyV4AdUyaSrZMXtg4SUCXSwdQ",
  "key17": "5orTMbDyZzsWQxR1rjq6kogAmvZQqLaKcepv9dbaT3DdcNqgzMQscYqikdiu8ogJN79E22feSU3crYKQFhCVbBpF",
  "key18": "31kV4xFJZmxBcqapoowZGncGC5Sgh2SYeExxbMkf3qTDhpnLHHxDUL5wxFisc2gjgm3jk1C4b6RJJA7VQMqRjKou",
  "key19": "3Q9HyD99CGfzBrJD8zqWwd13o9hPstZXTb6mNpYwrLguGaZnABMnEGSJ68T8hUjRAxJbCi8VSsvKfgXj6WgpEUPj",
  "key20": "2k3jBztTNBmKJuFGKaP2BC5TwQpZ1Wv8hCYmS4w5by8PEvoZKJFXHsC7Eo9zUx7Ur9UEDjfdXveB6TcishqWoYGM",
  "key21": "5fFmLZZAez8DrBcr34DmquVmaVk241PgWoa9kNKKaAnocfy1LfkWYrWNEZxrNV4URTALGRH1fT1q4xzXqsr7u6e5",
  "key22": "4zxqAVv3SsCMDMskH1nyd5yvKvRmCx2ei8MHgD9fc7Pnqeena6rFZUTaUPLZudnRcuyTfsWBHSeNwvFfHrRkeaRj",
  "key23": "122gz1jY8UeKxMCyjLYAkmKH2zR4dprYdTUr3huTZrFRmPDn4Ns6sPQR9PNnZJaD64vRip7M81tTDfY3wVZBCmyL",
  "key24": "3Lye6Go1561G2SxG59dfPiG9Kt6vNdyNg7KUpXXBGKmW9dXEbYSxeWQtQMErzjRWGtB75cpkKgSZvu336YneNfWU",
  "key25": "2K18LoMRYSZZXe8n4G4vRE1vg4rxnvHrDpkxJV3g9bwgHNDEQRLf8NgZVSJnjnGpByzmu9dYyHq26JqcVRcWqqtV",
  "key26": "2x9KvMSFiJ3NPWum637ZrsYW2RfukcJGDugcjfeinNFCAMWqQtCURfryJREwJEe2nAE45sLM8nq2EzW54MLosFXD",
  "key27": "3vQFUYPtLUSWgy2XKSrJ1Hy9wFBDS5FazgZv5ZH6p3V9nBL7CkJdoX71v596JoSqj472cY7J6YrsHFwCgMgWMRUD",
  "key28": "5fREd3WKEjRQb2abG6w91y8x36gK5ysM742CNV68vuLos89pmcHtvNCNGNsiMxTfP7U1cgiseXqQ7MoiC8uVhY7e",
  "key29": "4h4K31E8TdApbRcjDwFyZ3j48Z4bTNiYtabaci2phhCaWCytx5ZNgh1hgv5ptFgqWfUoe4fLnXpntJ71Mgbp1YJo",
  "key30": "5hNQ9CEDRJJGbyE2esoXwcBWpUYBjxa7qSDa2J2RpFckXM2YfxFzrnFXmh18rtbBALMFSht6ibLpUpvRLABXpPc",
  "key31": "34ua1DjQZSVKKSczBBXRjcNbTrx879kQuzJoEo6MkX4AismGwuRTDYCRikqVJ2d18RrMwtL2Lt56uDK28eXKdBm",
  "key32": "Dqo2UrtSscVkh6ZNWWNaAa1hZuxdNkPqCCtatfhqGqEuftCjbd2UM6M2QUw7fkT4C3n2uaVqaPSRyE96JhQMJ4J",
  "key33": "55TiH8MovHfaEPwcP2SFWYUbfJHtvAAN52af68s9PzgDiR4n1D76gnHRM7XcKp8ZRbRBUD8kFMdwryiHMe4WXrfa",
  "key34": "4kHhM3H2nsqQWJgXZk9DLUP8uLhcHcNxwJDm7cLdXduEs9FgsCX1bZuxh2T222R2LLURgRw7HTSxmDaPHgTFMnGH",
  "key35": "59j1KtJtGGAJE5ESWMw6ZZ8tDvRVZj1h7y6rbdkBKjFM4nEoZ1jhcDaaUug1upd6eECXmbAsyhkBjogGwKxpKXim",
  "key36": "3HvN2ErToqY1ejzPgBMWKkyApR4pBZqBfgRcWQP4gTPNW8mikrZspKZdomfrn4EBfmK4AR3Qf82mLmuMa64vhJdz",
  "key37": "2ZhcDVMSjVv2ea4wfwpiZ1NeTe7mGJnUuuif85BGRd7UHcBYKMamk7DgQcJw9LSURRLsAA61qvrGu2o73iaXSbtS",
  "key38": "2F3rzAvUQatBdnhYBzsSqJpZ3mgxidKj5neNMhLSNpUZd7LwDLttQEadseLCzxJaC7PS6DqAwHQoEeAe2NNe3ZVb",
  "key39": "3xhQbfKrD4ybpGrLB3Trax8Szn9ARV66ZgjASfeLHL6Wkbnde7JXbKbgvnEvQSWXvQByMdMWU1kZRyA1xUvKzp1F",
  "key40": "2XFJsiNyVTw9Mz4DWYdc7mPHqjntSoLyz6KWD39RoeXgYxxbFTuh9TZD5GZ9gDsSEXwKhMc3iJZ6351tyi8JgYib",
  "key41": "2SVMigygNpQ2eCMY7xSSimaGztHC16QH9LrXs7xJNREF6LNA2ynxyTa6ZBNckTXbsadvxgfkPYFJJGVJCRwxGXqd",
  "key42": "5GqesKY6yPTnE9mZmNLAdTuoBUFH7UZCpQ3aWpViewBzSrw7aPprwXaBGk8ZtFSacCLrk5BpX9caU727qh11MDf1",
  "key43": "yseBYU6YEZp1x4fYe5VTC3m3fGq8BAiiXH8kybSvFFzy9trV9ikcTUQ128tgxuCsdm8szVJCKAi2DFQr66qr9UP",
  "key44": "5dgUxD6Np84GsRFfkn28zijv4LiHzN9ynMdX5F9RDySKNKeHeEcgDSxTeGv2zvD1HeU9fAJXm11qXknYQBx1xUHE"
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
