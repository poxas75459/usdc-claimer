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
    "38M43RiFd8XJ2rvs87Ye6LoVmLA6Dvn6ME2P1ai3HTD4XzbTrogVn9iTXgGGbZ533qi24rA9XDwi7vVeAj9PrJZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDqsDQt3KnHucNBR7ykKEgP22HgsyC2WD9Bqx1K2KEvJzk52oopCnwUY4K8ZY4oVhvYdELmiN5bR3pWY3bfa6Eo",
  "key1": "5jin2gzpgXDrYDHuMgeTPN8APivEdVNYZp3oZkizqD2RZQriAnGvtzmZfobN5q7TYMDAGLUFQSiiqRGPmKxAW4s9",
  "key2": "4wrzLzBVi37zdqqjDEJSuue4urXcpYLR8JqYaycbSjtKYwdDpxv7wZZPjKGpvBhQNagmLrsVfS9kQqfnMBE7ku57",
  "key3": "TrWgXEFkX4LaQ7MifAPJzDZbRrFBddFq6mJwbZCpKWJne4S2k4Nmsz5dxXDpixzrBe4vtiuqz5YwGhMCmRMsFwc",
  "key4": "gPPzDPDf633A9RXvYNJ2AN2MFwE5ctrKV8e5LvN8BNBBypH8F1uK1vdP8XkbBs6FuP5fCU7YaQPqNmB3MRTjUWq",
  "key5": "WsfWMRVWKuNMAfGBAD1jvGpbbD2p1EimYwViLuJ1epr3SGg5hqsnLXyXJCLUxD32rPmYSkNW5nbTTmEg3TGGBtQ",
  "key6": "5MkLDSwJgwbqptyxTMpg4C92vP31xbd5P7Ag7iNkMkRz8CV3oy4tb5NoHtmad5DasWNFRvnCYqkwiKbDiEV6nB2f",
  "key7": "2ybt4HQ997oiyEdEHU6ZfJnsj2gN5BFLJ28R9FWPeYqghHxhGmdku8LU1t4dpQC2QpFX9QCPa9qnWcei3AcXBqQQ",
  "key8": "3KSaiBE2XerNdzb8xkoDYNpJHrRUmHPRZZaz455TRTjm95bACbM1MThBAZm33FxvSKnUvd1T3Kuux8PaXizcMen4",
  "key9": "4WqsEby1DHs5Q9NS5ZpQuyU3KEXHJBs6PmGUP6W8dmerHCTTzickdgg7sHs7NZ9NZjSb8xVhhGvSBH4DK1DfxFQq",
  "key10": "f4bVqcUdKnauocqHzAkXdCzEds5dETmyqXD3WMPvZcnstoBk496SwjjUgbqqvbdZhDU7yadyEsfj3f257pXyL3J",
  "key11": "46eauj9kLX7noQjXGze3g32stfdy8ycmFUQCn9yTBgwyXDDZ3HhkKxngvjKvP5JiSL9Jy1pnk6LaoK3gdRLeqRYE",
  "key12": "4nHvjw9ocNttbzPKi4T8WaUdbvqqWm9UcwdMuGn9GLZq29pgXJxRKr5zCo6vxD3oL5azdbRDKtZEgJgHKJ1hHiW9",
  "key13": "5MD4EwqxakAUCNuSTUVZh9HCGjrzg6EFxGffZmbrcP5TKAt8Q17VCYKoityGeVKiBCqKadrM3iQ6w4vpGfRsycML",
  "key14": "3wpDN2X5hQ111VyghaesGQm9dEb13Q6d6SXNBAAxj9PS8prFwAJzyePLBh42S1xt3EUfp1ZWVdpTeSjE51GSr6z6",
  "key15": "2RZGYVWWvWLeN5deQQFF4edCTbL9bATLriQgAfd7xnyVTatDbd3cWxH8Bj2751vmKvFsV9dwvKSsB1UxYQf1atni",
  "key16": "5u6y8dkof1QAvAc3ypsUhtZgdRibP5CBgSiXvJW8aqykb2NYueVhdRit7hVmTaZBcRAL4AEAXd2CN2QurwuM35Wk",
  "key17": "qmar6oqkkM4rLkhTBvZ5pMtBpNexzMwfAwzitELq4xjsNyDYcjAuARZqnS3KyB7GTaF599AitpAip9R7TeSpckV",
  "key18": "4URyHPxsVzayST25VxtnU9ymURKC8vXsGnh4SMrQKQbzuRgd3c8e6enUn38u5DgccqFwDsf3g68gJPsL6Q6gdgkp",
  "key19": "3Mryz8Dh7BTkhemAc6GtQKHBnxUJ9S9MC3wfn3euWPHJ1oa9yWKifEV1UGPz97xRAn7XRHVrqnJzhc4zMjBR56pg",
  "key20": "41g9cWuDFUJrxaSmgVWAnNXXAosoBQqR1k6Va7vZqQUNPpGjYePGrpP8ETy8YC5cJh7NTS4L3o1AV2fw1TjoosmB",
  "key21": "2Z8e1htvhyQoN6dtim6Rpnf8QbcuAAUKs8j9QXN6KEn7oGezrFY1Zad7HugHR4voS9qrmTssf9yPZ68jVkBFvEHj",
  "key22": "3EJnFFKyhybwur1SsxA2mEVsXEjYjz7k5Z8YqxL4G7Jqgyu3R79omyNadZrvqDztk4CW8s75Rm1AhY7pH9m3R1iL",
  "key23": "4ysP1K2zVxXjNpwVVSnaQ2r7mwKaNV3Mtqv74yG3p9JsncaFTWhBqThNxzh9QpWCEq7dzjo7kA1hRuYtRdgjMvCj",
  "key24": "27EZXqWqVaMQCQEkNiAnKvXz7vQMJiLfRCp6qZpEZ91AoJtkHNuULgT6Vp7DMv4TtpmVJ5y5xoNvFwRKNguGNp7R",
  "key25": "3p7cr7qxPon9q5Sn3HEX3QPWyRAKXqmSpHxjnGq7UJJc2hQcTxbvVPj6ExeCWwgPawZUmBunoyiVe24myYkCgRqg",
  "key26": "124zaNDoZYbbtnXcvxWeZEErCsCidTKeCeRcMuNppZtGRRyudWe3De2hvnd7pr4DRrSVhJnT8AZv6Baej2H49nh7",
  "key27": "3fAqGQxqCTEidUZXz2Arnb8DFC57zKbjfuNp6nKA23yP37fT49J9DHcUGumavyza81D2Fqsa2jovx3UTUCgNZZy5",
  "key28": "AnNyjNBTvRuXzWqbE49Xq2dRy5JbQMX3NU9mTwybTCvaDBzkSUtwkitthLqFXm279Vkx643YudXrkEw7xvzXHVU",
  "key29": "2H5tUXMGNakBf52oob68i8euk4f1s38wWLvJbsDJqRBpxKdsc8S5ZtFkNQyAeqBuLvfyzC5UTgDNV2dyiY7dvfri",
  "key30": "yLNTtkPBg6z8KPcxaH2acq1MrWJYDPaLc5FZV2JWYt1Fn2dMW3s9nRHvkyuEPSv586fFtDGVDHwRadd7t8TdzN1",
  "key31": "54YXDjWpAv3eKDbPNhJTskisH49V9hzS8iwFSFrs1PTkjwg69ijrrMmKAuxsyv2yaveowXWFgSenquLGhRjtgjWs",
  "key32": "3HrWpLuwdtQ6dnNhuiKQ2eNDDRLb6oqsXqw4DiWKPRAKw26Q4fxpvc4uGSC1sc6giXA7RTJFPCe8xjGVhiEA82aP",
  "key33": "5w1DDARJPXRcDhwGbickZQze4qXKVpM7xsE7UpFNCG7sV1mnvWfJuKJ4eFNhTqckFErU9JBEgkiadHvf9rXF3A2L",
  "key34": "46qF7aEseX7Cy5wiQvKEGoXUvsHjyeoQF2disEmK6R36hVaJxQssAXH5rJKWkTX9um1kdaE64LbbT78LDnUvvERW",
  "key35": "3mn4AZ1UB1xgJW4Bd5Y8nvcvXLazCrGRGzq9cK3Prac4QoPfV9yqdjdDLD6WXgwTwm76MUQRvBn5nTi3eaaRPYH8",
  "key36": "2M7nKXx1eZ5KfDUjN3w3dcjCjacTuRVa9WugdbPgK5YmZN87rNJJZusZ5Y6UhBtEbyMDiBahDmT3GCBhfyTjAQie",
  "key37": "5JG97hCQxCg8GEc7GwAxbBTXFjhSRoysjVuW1F7Pgmr1EaxGtQMpPZqCdyP1hC3c7Nh5ud8eJQE1uRSTTcEu3VGJ",
  "key38": "5BGZ6U4SbzLKEjtkDpfzz6bWA6DJmFN7SDaCUEb8Wg8nE2fH5op9Hip4hSCQspTkt96tgpU9CmawatGVk6e73H2M",
  "key39": "2FGgfVqKei4jzwqAck6vTNtpM7cc2FkjK1gJ7wD2vuiiVuAwBkELbkiLvh99BUd3QCvUj8LHQamiSnP1MF843PVv",
  "key40": "5uhsRiKWdAisKGZaDgthcTr8x127AmtMVTem9nTUHmameQMTXW1oLnPN7iurNsy3VDNBV6p5s1zGJ1sXy5ogKmeh",
  "key41": "4BWnYJ1uNyNbqb1UEkqjr4QTXBeNFbYpFdZqj4Jjdx7nsZh5CCfZFWav9FKJGoKRFUkSYXtmrT5UZNqmW42GEyTg",
  "key42": "BT5ZWVkyHfcQ3tyELXDsbzUbJhdro42f6AitVY8wZF3GL8jYou3FW8hLuhe2YiSXDrt7wnjYgJSAoUfUTRQNUH5",
  "key43": "4LYrAjDnHNGNJWDdzmr2WyEMtyhXB95ucxL1VWPiFGKwtWtrw8da8ifgibCLo4CLtBPwNZkcbRaa1Sy684k4eBU4",
  "key44": "2iXgxnubusC94CSAwpyf6AXd7jPaCmTehhMUJrNWHuijT5Xw3M2DQD7WmY4R9S4J5Fm5b1EzvpJN9BZY2vaz4qqf",
  "key45": "4UxxntVrFstHniFZhbeG6a9QsDjNHs6KTWnJpaKdEbMf694o4UVR2HxurEnLjwPNV4Ttr6QKfUsHpypsfBR6De9U",
  "key46": "jPcdG72iTcMEQoFAtQKq5CAxSu3q3fFbnPhTHig4gkq5bU3kciPiZvAykYiopqrGkm1Gc1DfZLBM5VpETVeYHsU",
  "key47": "3Vhtdnt1xmTSWTcY6FRhDJ1Ccgj2ta7cDLZHszyjAJPVa8skGyqidgERkz5musxbMUQ1GuiGooS2ohwpXPLXznPh"
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
