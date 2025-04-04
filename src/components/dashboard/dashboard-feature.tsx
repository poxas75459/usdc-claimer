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
    "LJtuPnTAmLpehEKLnNif4ow8QZpNGFSgyBC5NmSVKjZ3hXC1BxdPfAAz2JeUhTV218wJfAszz3hGLuQPthMNf1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDZ5EU1ZLyVWGjPm8xsU6N4XMec8Q5uYwHQd2TeEium1kpX3jZYW9xP6emop8JFv8D537PVXvSAE1zy8WVSXnLo",
  "key1": "22Y7CiH6C2gvUxYmieM8zLTwdB2WS29xEhM7TSwgx1spMDAnt8aQkTkGtu5Jg18znZQWt9ohsmZj1scGp1hZyPow",
  "key2": "2Z17de71Dm5xdUsWkU8mSmip5Weq5JzGP3L6dFngp2yfMpkD5BnAgEXiaNXNUwyjJh25GEGsPb3qucsiRBFfx7xX",
  "key3": "4M8LpkKYhZ4iYTJLYWdmyV1PZyVDARDKyoupgmnD4XKZPSURvkJeFRtmwYgy7vTGPQ1nh3tUNHdHwFWrDBF1VJSH",
  "key4": "2USPob2cgacQtM7RkbTaVcgyMf1MXmkpSx7P3ofKCBz3ZyRjEk4uocMWgLMTYy26xv5WnGTaaXou6FsaVoczPrHm",
  "key5": "48rVeEU6qCUdFrkFxJ64NsETMgsfxZdG2BcDi1rtb5VhWsu7oSFGoy2G7RYBsrVxzJfjuRRFeFB6cizHj8kLem8V",
  "key6": "5zUh284N2VdM5KukhFxv4m3LCJyd11zhTRDSGbF1JZvgm8PzdoFpARQryfKPCfed2R6Pe2GemyDTSh7yj7cQtoCG",
  "key7": "vrc6Xf2wXKeWcSpxJozVJf1jRsRjXcc8cwgXe217n8JnJ36PvzkRF5BrsdL4cervMZ4yMBd3uJrZt8t9PCdErrf",
  "key8": "3yMegpgHHZjaZJ2MUPdxrHEz35o769udfqKXXT52fhxuaTZVG5eQT5w8KpUhcTMJU4nVavbvRm6A4PT1f217uf1S",
  "key9": "3F9xdthVfyQ6vimyFAejGFepvubJB2PAeaiETmMByZ1TTeyd5iwo9PVzmN4GpH1ArCa8rJzujmsUhwSaH5P4EEpA",
  "key10": "3pHLaRUzZ62MGhdGwr4mPE4bqJhdEK8VUF2nCB1nKy1zobMy83fQX5rgR5UvWGbgwRiy93QPaXULJu3BiqV3KZd1",
  "key11": "5wsfx7o24sTaQnkxVM3bHYbu7XFF7b5SwGPssmkVS9Tfx5HHzaAcbxHWqPhAaRor3hFtHdjVKSQd5PwHahi4ZRXU",
  "key12": "64ebroiAgiT9KBTDtKVYtUMuQoJQfRevSGnit1w1ZsvS2xonDtgJQdQCXMDQZtd123YPhYkTbtDr255z3rAkzJqx",
  "key13": "5rPCuUZYEihb4nkz2VaJuNdXuWcuAaacMGUQ7pPpKRspMVQuFqbet3wXPWtNrZgVCrbTrfNCBYuQDsV6s6G8Z3Yz",
  "key14": "5Ne7oEzi1DhpTYHKNFhtxSj9kDmVBZaNzMMzRQG2RYtMKCreKwnRVnU7zSbneFzDXczqAZmdkXadAkWA3PL4AXUW",
  "key15": "49DkijgusgofJgXBSCBYmwRkPhyz1H1twTZqTcfzVvmJFkYDsTYFFUC4rSCBPKrog6m3gdUURw2wJfeDkHn3iz78",
  "key16": "254yRFQPMS6GL5PWwjnX8J79VVgCEC12MsTvk26RzjVN5bja94B97dfL3M1A1geDpLLngRLZrtB8jV1GMc4q4SBr",
  "key17": "poatKTkzaScck2e4ingaLbcd5rYSP6pdmwBY3eJq4YnBUXaYAybuPrQDuCBPEUE2geoPpVm9HLmU5sDEnWTQgVp",
  "key18": "2VjqRUBgpyTjJD1DYuYckBhCUa1vAns1RsUGR4BTTJvVeY6Nn3aC6PETYbZiv9S13x1xCHP2hKajY1MkSviWKqGy",
  "key19": "ZxwXrk4vzispv7DJUDpEyQnzV87AMLAFMwqnqtQv5XdqfgggG7tKZTA41sTXbhAWk59cEiZQRCHCU133YSNWUKs",
  "key20": "5VEiRqw1fqtBJPd1FSHTtaQyqaD6vZsgH9NvcSroT48JqxevDSCSaPrkJnUdUcR2MUCyyy7KtEZKF7mxoQoJkC1Q",
  "key21": "4SwyqmRkU9QXcz7MSEa9K6m5pyk5oTzQxq4D7WWnbgVnDba1tiBhJmptQ2vp6i4NyMYJJHgmBXAuaQQM8Y8AH9Ap",
  "key22": "3k2YDLLdHogB7HLpBMyEAYSjA6nxqJ8kuBLkoXQK9jizT1EZyPcNwXBFoXrNGATv5gdFL3SiA5peZS25KMWTrS9i",
  "key23": "xKr4RvAgaCgDkNJXioTs67EEs66tttqAUowfJaaG4Tz7LKqPFfGWSPkPRzVwfJWTMhrtxJ1Cjytj4Ws8aRfbX1a",
  "key24": "v4aKPpNTFJvMW4umwWD1Q1SVDWvMT6sUsFCSjjyDrFUK371TeFWv16JRFH7y9Z5pGzpWQXrXZHY3Hrr54fmGgER",
  "key25": "MatPkCutQH8YfgvXKi5hvtHTcZj6btH3xVYMinY2QULDkVhRfTbn4bGihSuBHnHkUQwtHi2vaw3dJLiqd4wC3w7",
  "key26": "2nbVpt6PAc23TrLt98RyqKbHZe8H6WrqvKMdgwcsYM6RN1Z2GJxnK7pzChjj7yjpDm7nYtNWdtzakiByHEr1Qcpb",
  "key27": "2vpcrijhpF9p2V6JnwhnHWFJQ4qSXyUjfZuTiKKQYxg5kCMFSERqFjGdZ8qcrVJ955SbTCBPCL2mq8wqNSvT2zru",
  "key28": "dHc8URsJVscEBdQNNtaEuhY8YcSDudvXyJUWqs5sbA6nYV2yuZMRgUnmsaab8Uy8HqQh7VqZV7PZMhgiFnQd2iy",
  "key29": "2sedmT2WcUzJG2VF8jwJj9TpbmaKcdCx64UnmZkYx5cck8XE94QMXrxjYs6zuxbbLVqJ6HjvVtPEdGMBJKdX4BfF",
  "key30": "gD8WEHvo1aPWjFBzL9S8JVWJZR2z1NiKSMoC4mYcQ3TdgQymXrgxN8HDYicawsdbnasnEQjjG8myMoXVHrQ12MP",
  "key31": "4gtgiRZNDQ7RMPGffQYBBMarF7tWZxVpj5R9uhww3tNfY1VQ96Snvx7V87ao5AtQ85zwvNLGSfDgSVQP432V4AKX",
  "key32": "4mJyNsFGctHA5rd3fV6bzZWnw6rWKmUF5Tf4jD6mDCnGtri5C5TW3KFue5gr5QDNRds4ukE9jbMjxARxkxX2Lwmb",
  "key33": "55ARxKS7S9pXpoMzChkm1oEgnmDVwofuLaF4F3E66ZFVpppKuvVgxsqaX2wPE8TUr58c1sLaUAhxt1RLmH2KnVXC",
  "key34": "54y6uwQLkirEtCh9pf66A1eu9vXJ36NaSuzegc4QuDA6vatKYsGKdRbAy3JaGGao5GfZ3v85ZNg9BKGbgECKW3AM",
  "key35": "3fPY4EaGAhkwh58oK1udaNSYf9kRtkGyj9hf51AhHGBmuPFsZ7Q6G4KKYMo2MdHMj5VkaGzt1f4CyLhJt3P5WZ5m",
  "key36": "5ZQxFma6S4z6YVdGhEo5M9ybeHAjHuS3RLjUn5eYeHnCweHFFQKMh7EDwaq1Hg8Adj4dVUSBUfFXqqTmiHmqUZbY",
  "key37": "3ka12h7PjbYJZzFrnYPrhLTBG8bnPsFowwPWxph31nt2JvUuXtGwA3mfmVLhzbZ8UJr9sUTs2riJagDnnTLp4QRg",
  "key38": "2TBS9GRnck2SN4SBSkM4qEDhwf2be6YEmMQvHvFnjcqxiLjhHCTzk5roYszC19WmaAuZVm2BYqqFovGBeodguFBm",
  "key39": "4TGSARF8Lcu3CJDrMu12mieHxdTm2Kbp4iaSFT5ZxosjRa4hPHDAMTfQ86LBQ8Jji3nRasdE7Nq4RMmKyFdC7umZ",
  "key40": "5zBRdcXzcdqRNC4vw9iBcFbLSV1pUdNHpy99ErbPGigSswKxeRCabnC42GyDrehv4QMviJwv4cUYiULMmzL9YjfA",
  "key41": "fZ338HHPKoK2ttTnvXDzP6q9dhRbZcppvVPkZGTCDTY2HX1wALqjTjSWKR96U7B6iuULVKyu27XQondoCoRmKsm",
  "key42": "2iGAVTMN6fbHLZbhuUNco6aM9awcekVYUdrnwE7WdvjTGREcuXmE7nGUYrYsPdtHcC5WHewKSLC8R4E3agnffAhU",
  "key43": "5JsYqY6yQgAP27b38vXFVB6HVBMgzR8Rj3fjhfTvTcQGt6ukm48VSvzHKCSNVABkvq18DvRd6Dqd74Lyy1yVnvCe",
  "key44": "4d7ji6WxtQsDjy2Jj5jGPwShuNjz1ArH81uh1gAbrTsqEyrfcb6k3oCBnQmBCVzuotY6MfUS85h7tEBqg4D4SPMJ"
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
