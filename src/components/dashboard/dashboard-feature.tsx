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
    "3YYv5yeTrjQ32QhSpMmXFszzXKPAvZKngq9P1hNC2KTogBRZTWLUXi32V9T2dzMpMo9y4foRuPkWCKXAoiU9cA6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgfv33szkjkYcXptZvFuQ3wsJvdFhxyQRnsjh2XZNy1Pt85ew2Yxf4zRcrSppFSAv8J1MkiycaVhbo2xLKGz3aA",
  "key1": "4fnCUsD398HphMfSarSzyYHHXupWEK7jqtY5QqRy8ijhVSgQcR3i579RmHrCZot7ETzGw4ZcV4aGPanv7FbhDVcu",
  "key2": "3kAiqTjK1GWSCuxyaTDhhtYQmJQQeFg1Si4soNAuYGNgoXaeEhCk6cKjAJB88kXy1m4kv4NYLCvEhAoKyUN4XetY",
  "key3": "3FK9YQtD5VG4RCUcTVMFCtBKwnBSBtwCVgMURtkSw56A2MbNK4MpDa4DUCphBEiVuHp9b1JDjtyMwxJnApUqizE",
  "key4": "4xsUX5ntihEof1fa4qKDNtumi67AkJEsxLcbBAKdJMVA8zHZxkbuJdPfDw1dtcghU2VpDB1mQaA18xrqwicDyTwK",
  "key5": "2GkDeUqYgkgFMcQWgn5wJJ5HuqmatajJMyYhH2TuPUFmmQp5UAW7dUqWfVyYUhycyySNkNHrdRb7MNEk5Jmft9SD",
  "key6": "5BEL4vkUJ1YAtqS3jJJNeARb7x1cWYcecDopfXygV3QbfRrZLgafHnLSHgukKE5j3xA5x8KQTGN9D3NvFDwNy9SZ",
  "key7": "cYXPM9MQ2nP8vYxRBzTNPoE6mfXqdFKG1MnuwxDFT8Y57z4bZBiL9rXBG9dNmpdBQXcxTAV8wPKzz1zrVznv8Xc",
  "key8": "2ctdhqeGacLN4ykLyZvDbn1ZJY36RoDH3mwP9AYJDgjVkhxRN5qu93anfHqwhceDD4BbCTiWGU7DQvumGrVp5Rvc",
  "key9": "3wP4FrskE4Bmphs39FYfbk9XdK4TqmwEHVz6VxP5n7EdfqmHF95DTb75Tuub8kmRjX66e6iCzomCx7E9z2FUA4oA",
  "key10": "55kwr6Bwr4QhhkpwGXQaCphZQD9aqLw752rbpFAth6EcA83sCuejV9AaL6VL2DMPS9YKUiqWCUhHi7GcZpSueDdU",
  "key11": "5NALeTEFNNzCJrnHT5arFkTkL3Xtf1gFLwYb9R2iAkWYZrBDm34kA69Z3ZAk4oyC3SXqA7WT53VGftn2dT1hZSSP",
  "key12": "62UuEgt1PZbD7hRDUtwHW1tB8kN49E6Jb6yHr7dJYRG2UQ73Wd62fckTcXjgXVHQUZ8Vx8y9kW7KPtys3srseKDn",
  "key13": "2nLJp49W6zgcW7GAEaQZz9wVoreavuQW2cADGE44T8LP5yCN8hdwJV3Zna4xGVpVWK14F8LQu2QCK6z5YPo5q3iK",
  "key14": "3JDjwtBSsE75SeGK12vMQx1LWUGSx3xJpacktSRHGMH3JFGH8TF5co8uAoSh8pVgzgLk84YMKuwhTU6mKrR9y6sT",
  "key15": "2JbNmYMDXJNmQcBSQa8NzWUgfk25bGis1whgZTvyaQJou2iHN6CsgPwSCqESZj6kMBC68VuGzA8uYivB4pgWxRVG",
  "key16": "4nok1vChYoTT7rX7rgeR6qAtfN719dzGSp5CyjS7iDuhrnC59RrY6fCHSWmprmxY89ZFBgfuyYLgwFjZdnhPW1ZP",
  "key17": "23QX9qURjcpqS2kdrpkPCwCECSrbmmBqH3AJYsh1hvi69LkcfB8rVbPPAn6L4f5dsrceR5pt9n3Cdp9wyzoqkK9k",
  "key18": "w3uvKSz8NEyBHfo4N3F8Vdk28viBCEASVvm95uKmigjTyJvRkaVnS7DowcYugnrr9npJmNiSWAc1nqcW8qT6Pji",
  "key19": "67eMsAFegiV8DaV1NvNviT3zfQyAsfCjWcXK6r8V5eB8NLqxxcaaTbzKJh5NKi5FCERYySfQ1pA7Mi7dNdAVWCe9",
  "key20": "5YVC7bcoZnoeBr3fCoesTfgKijnQ38XE7YuXpeuoZcztMtKS6hfz4Z2owMjwZNWgQzHEELRREJkUDSrRJ8n31PSP",
  "key21": "5HW2QCrgbmYpZwhQTT43ST28djBTKeQs2cu4Le19DMTxYVb3n9LiLdEor6GSyaTzWockji8kpDBZhLueRJ1rYkVU",
  "key22": "2ZAYHCtXAaCiacew2YRTzTMkpQzcouLytAs3NnzeSAWqnakQ76dtSKG9jjHRMBtiLR1cpuWAR2osUNPfzkVozcSv",
  "key23": "63APFJ4cW8gQMwHWcAmevi3T83qXQznuNnHiCwpdwaLrUuu4TV9ZgcpDG7n1qAqUkJd2YdekBsBpUUip5LUJxyq8",
  "key24": "4jMNxF48b9RpW8mKufpH1ggHMr4hrcFoNi4kp4Zc6PJrezd5WGkpB1ixwzKGJpZprmEBQuhx8xk6nJHSd4zRCzmR",
  "key25": "4fY5PDCVXC6yXY4QVF6PkJZGd6CMdZYTymxuP1MXmTKv6QCy7N44eeJbmq6qtPFxd9MZAgNuv9cvZW3sB52fMNVd",
  "key26": "55Rv2rbDUhmzeqeGawn86DqMQD3ts7eMqCt9NCxkxLoKJEFe4fjZ2nbTyDdZcynj7aVAuWLEMJNSNytZWqQo9emK",
  "key27": "1LMPGdHwVfpMpyJe1KB7T4PfjRA5ZS4cfJXhD4CUxHGPFSEx5qQ99YC3XXas7nq1xTAb2MHXdew6JB1WV9z4gAY",
  "key28": "384akhgf9AcFNCYKudqnV2HXRLjHL6tJ5VDNQFPLRb6ThUajYwwBZVvMoeG9uNU8mPoxsXhADWt3RCxMBLguvLRn",
  "key29": "tJUJqhVpGDUARiqjVzm1n3LNYEhRCf38MUyAZKPK68Xo2KRFkAqM7L6DT2obrfXU7mcaLFtJDrdwugSNn2hSYFt",
  "key30": "2imCiJGTWLgbT3yUpe6JbXPKk9UbimtKSdabqJET6g9kvK5Hs5mcotA7RdMZchZGWjAQiy38m9D64ApffS3zJEnH",
  "key31": "2BEsDvgmX9DGLM3NCU8GCXgyWss8WbF2F1jLb5dyhictF5s6C7eUHE6sbQLcS341jb3MmH8abqAyK7QXAZ63ssHU",
  "key32": "4fxoLhYiE6rw7Nri6cZSxgxVy7E85Bpwtfbc5JaXbeoGGxcp9k8vConmCQDh5MPV1Jc19rJ1JCDuiXunAi6ajGhj",
  "key33": "5StEzAkCpwbdS25Tg5PzXEM2wSucac9gCdntJ4tTZxAz3Qdv4484kRPr7e398SsEQAbexwyBSF1qQeD9Vry9z7Ub",
  "key34": "4abGKwKSqMpLmyWh3aQjkMbEw1nBhrLEUS5ELBGVGgYDiLu2osT6TbxfHBsnmw9eajyRayaQJPeAuHLUuqgU9YVb",
  "key35": "4T623pyouk3bdVv6Sx8KQ6s5dH9UDYNghQGbidgbwF93zSzeRoNtxaifDCH67kDtJWp6ZehH9jtw5QP7CiQdZXZE",
  "key36": "3eSiL5mF3dGifNdHnvqnMDMpSqb39j7t7g3JUdUSGHsMRXq1SmYLDvBP8gt2t7Bad95kz7b8FbVjC9haAnHvzHEr",
  "key37": "2z2yodUSoBvBySngyRNox4MzZvwfW7iKkiarY5AS6HwZNDLAjkcTWuCLji96QQhpbrBcDvxjqC42AAjkK7dwFzVD",
  "key38": "MQARNrio9nycamB8CAVC8sCZsfs7rnbuzKbtaUe1L6iQjiaPwgBZDGCMg7qXEJqfGYRHLPi2eW4rQn8TcdEQj4F",
  "key39": "2gLSfC9zJNkWkTYtAHPr4uj9TVaHbmLYMAETd8gcFwvWtMhYwSGHUHSUZDcBhrSrYizUH3ezysK7MNZW8bjdR6DV",
  "key40": "4ZzpFX2bSD29rYKJTXC9u1jUc1ME1PfNHA4PmuPFBX7EVo2iNj5pHaDDQ9J5sY1fQtQMCAvZ4eVRGxo8mk2Wz5r5",
  "key41": "67biKLad2nTA4TrJ1W2jdwoV6A2DnBfzRDdhVkghdNfQx3EsAXKwXPvWvEm5uYg834BjjDDoAQMAY3iQm2AP5usR",
  "key42": "2Q2kJtbJ5zPVkr8fwnWcuYwPD8Nn1vEWFG7bicsdq1w6VgbzzaZpZaJMwNu6jpre3aEBiUQCeEdBom8CexeE3d8Y",
  "key43": "65tx8dgdyQEVgonJVcsBoKB1mKWasxpyH612SDhczNSk19BKAz1jYmBET4T7VUDHmdxhDywh2kDGbmGuW7uFKbo9",
  "key44": "4iBfKwNrtSbCCgp4GxWNXSiS8Qxg1z3zMQX2kgFXuLKfgsPxik7GEFem1iBzecdm2ghE4Rc8PnGngwFoBnJeVksX",
  "key45": "4DuiR16TiG1gd13jNJd7cuTtz3ArhT4UmuDffcu6nZmZocqC3puTtncYfq8rspdr6f5kSgbTBtQWesRoFnmxoC2t"
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
