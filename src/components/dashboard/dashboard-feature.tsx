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
    "2vvCWpAy1fbWuTMXnqEZY1UFXLfZPmg5C18bZxg3ZXA5HPWsHReV7Q5zmgwzFmVh1Q9Lq51wEmBHpb8ybYso3mQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvK1KM4CRMy2mzVgye18PN7SPeTggAGp365ymLZaT5AyzwU1N8HHYatYAo5bqLvVWqntCUrGuXx3hj8Ages9D4C",
  "key1": "4J61nu1BRPEKHMf9p7ZJbKcQXdHXYjCfQAENC4mJ16JCiuZQoYD3gPTJt327UqWwWWtuV2hU6UvqBVvkgWrF5wiE",
  "key2": "4r7CzNnBJn1JQDV7Rxdxe78uTAER9qTc9srKZUFpGEMuZudm4ygoxiDrJE2xESD29waL476KvaYTEbT1oScMPdXG",
  "key3": "5v5K9WtZk4wwYSXhb3FZuu3wx2TbTDpU5gpWLq3pbqE1528XDMSm3gwLKGYPUoSSNdXDVPviPgJqatvh75LDixHB",
  "key4": "vrhxs249BN6shoRNX2frfSTtrHXwZ5V9kwiUGUR84LXRftFSkg6RBY7bBoG2tBB6ESneCA96VLxxkp9sCYs3qKc",
  "key5": "4HcXvRJGU2dfxfUic9c6PsUGeaZApezusyB6iftHZtD1P2w7cFD8LyQxEYesudJ29eHkzqtaxG3gWXLHowvJJZ4Z",
  "key6": "2cWZcJEEgNaDRFnEzZEpUTzf9NxV6ocEiiqYnCEFQGiVsLtf2c84haC1mCUSgjT6HnmjuUjCNe5WSPgBwppZt6ma",
  "key7": "5E9tDDdZyDwyjMhT2DVxfsTwcWvmLMNTLGizraZ6y2Pa5Naf1GyLGkqpgJf3HSnN9CVHeC3ZipqdJYHn3tpdCHnR",
  "key8": "3j88Lp3JUFhDVnVtQYNk4jfFri1qZE7AP5yp41fysgRCFmSjh2AhUTWyeCszfjy2nk6RsRkMYjWqV15uV1h2HGXD",
  "key9": "XcH9K9t2RwdE5EpMXSLCSCkXbhQ7x8ynr1v4Ga6cACXSbYNRRvvzy7qdxnkvwAju2LKuDYuVts1yEYfZFEp4N1p",
  "key10": "ain39otAmT5SHA9bsATUnEmM2RQTRhbWd9qiALTUx3VN8w8gwpns89q7mzQSnucsUYEVemkU53GNtYeU5YBgSQK",
  "key11": "4LVXUDXj8uT3RhoQkKJ44CbZNEcMAsHY6CemKUa9duEodmzjFi5Djfyt3Fhk61mUEydijTxG57inpczrK9QQMA8y",
  "key12": "5LXgFhLTZEVZHmJQmK6uyqSahPnCe5RgbgSgEaBJ7G6NUoKQvvvH4Q6LnmVpa5fb2LhVWHM7dNAuRnnHSxFvUfGd",
  "key13": "36rVsgjeKEaMsXRQ5h2t64evxczrg8RguTtzuf4vMXmcFVxa5PumMbsLHAAPGTGCYsh3u8L4poG63qsLNvm3pLqH",
  "key14": "4eToFhKc8BAfheuzQ8bM7GYybkuerJNj2uxBjUT6G3UALiTcCXgmsPYRPoC1PAFmmeUdg5T1X9E3MDtNqrLT7GMb",
  "key15": "5FQTgSeCRKCvWVBre2gmQxg7G3HxRkMaoxLWUnU9Rmv9f1nypSE5N7vu1RfttphhRCTdEwLxtHXpY8xbQe1G61dF",
  "key16": "425G1YQEAPXhZ7f3rR8Xj3rapcrTHbE6yqy7DNvGZt6fgvGhJLina78fRA3Ueax6nm9ehhKibQ8WsqBypa9Gj8Qq",
  "key17": "5XWzhoL2X5j72bpjuRL3BgLGWdFWzwthYsF6XhJqCNX4icFwJdFKKuAZitkBaUrZuvXJzZ5A2p8wmWwx4Agq5FD9",
  "key18": "526VchcBnR97iCM3FTzZQatjCfrhh8W1d5qgmuz4GfoGmc5DBFTMSHTKkfgi5XjnT6gD6vD9fBSD97JUNBNJ8hVg",
  "key19": "39aq4RZX5FsoD1eCHDZqY3xsf5cnjwttY7HXXCABgWVbmC8oKm5ZprVGGDKF5TKQaxQu74Mr5jvph8iwnpJuYB2s",
  "key20": "3RNnc46yxw7t3rV6oBGpBgxayPsz1Rtsd3s7t7pw6zraEQHkXGHK1QrdRXGH6pEuzWvKMotxg5tNiDVhoXqWmpTd",
  "key21": "pH77SxdhyECvGbvgxu4ca8gkCoZK1vYt1amHwz2zYWjjxBNmXZ5tyoWYtgoBeZYsktW2qci5gfwbDsPx4fpFdCm",
  "key22": "2XJJE9TEKhW91Z4JPihu1iupzq1cqXXpytf8EVfX98s1TssVjrdZbnVhpVL23o8ept9CjPjxP8J831apSCGidrUf",
  "key23": "4ekF4XdNw4iZj77TA366QTiuWJvhD1jxUSfbJt7WNUe5H28sayZK91u5J6LJ6i3rccGqk1KuPRkW6kWFmXNveMTB",
  "key24": "5Dmizf9qYqVpzND93gMasEwPAuwpaw3eMvHw8uAJ6Gsq7sV3fUaXNZDW5E1jWd5Qr7MceskUwDGxT5cbCDfzSHWz",
  "key25": "2cb6MjrvCNozSKYQwq1rx3NWTMQ1vWnH6N1ZPDmixVgHpibiBLt6TyxPqAQjtektLHWFDF5FiBxT36DNxMsCHPqa",
  "key26": "4uLsuGyUeGG9AKLfqgND9Jz4mAVYhdnTW4fd1rWGAqDQAp2vVjkcgMsYnTZag2BRvr8QLFT2YfQJW4JMTQjBF1Z3",
  "key27": "21Gwpa4em9L9PDYpTbTb86aVtSKBSFX4GTBFGr2hGvVwAxSnq8nKpe9WrC4Exh8hQxj37Z5kHJq5si8H5ZdRMjfR",
  "key28": "3NXzJN4P3D9vbzZ8VepKtAJzCcJZAhUh69C9gkh9Q7uDgjvF2BHd8r3XU7b7TSMAJAYdGL4rBvN27A5rW3zL86Ui",
  "key29": "JxRENUQC2b1ZH7aVdyJBpt8KQK857VwfBSFEJyN1G89WUADqG46oapY2BMw1vTz2BXyQnZAudCB6BUXTBaanLpP",
  "key30": "3zWn2pa4EGa4t7dSXTCJnPDyTNLDCjAPvJVMuGeW8tJarefjsYdJX9dpz4AUzySfkhfXfDVVU9t2HDFzAtsAz9Ub",
  "key31": "3N9BHzz8iEAyUAwWZsSzW7ii59G4DEtPcSWVjjXbDUf1URYinM3WqtLoxp8eadZ1RKKcT4Jpayna9F5dLexKr6Z2",
  "key32": "67VRDimkU3gBif7Yq3uaM8QJFtZYCiCtr7KbdvcHYjDeAQ4hvKEYshKAxovTqWX7U7erhsacsxfey25B7m1pdCsP",
  "key33": "5B8bgXFkjjoE3q7kYnySncGYP3UPbESRHwoTtcZEJXdVe99MWG8DnjFg8irXowkxXDzHqxQRWQB8TsgYR8HJKDj5",
  "key34": "2CEP5B7APhbpL3X2aK8isPv5SzKeuFspjAjHGCefK1s36kcaaMbtSEp7nCoXBUrJDo7B7gRHWNRrZ1YyVrTesC8i",
  "key35": "3G49uXWVKVQfmKcT1H9NxdPfjFYzumzQBWKqVULtoFpVM6BBei8PxvoVRiywZxsNEtQhRzYwAWXAvXRHXC79TQqx",
  "key36": "3NosE2PeuG3fVaLPSgDH1XgVMa1Vm3UsE5zkRGqKDaytyot8qSBHcAFx5fcDuAp2Y9gRQR4Y2SgVR6CYTSzg7Wjf",
  "key37": "44ooQQUTUyLqc9Nf3pr74R8gQBQVYDL2X899dSUq8isxz7UcDPhdK8hY7SNJcLfVvFP2vwnfByembCigWD2d9Wsf",
  "key38": "2WNecgKLQFsLEVYtAu7Kk5q3vHGNUGLTmxH1k8x7cFu7ZZNANPfSVm3QcbPRXChPhtQjqUQpFtoFZdgDRjH5TLik",
  "key39": "52g4e6B1UqCUEJJbiU2WsaBYVGXnTdZrWKMPsXPvQ56RLnrMxBqcNgkUyCD2CCcAPuhYQPAmmE9NWVdgEdtPuYHg",
  "key40": "4ktyNBYqHkwi8qp8Dgx86qyw2dkYm7c4VNcCAvc1ugMkKrZbgQ2Bs6DhTA6CLWM7AoRst4uu8pZ2UZ16LZFyLSDH",
  "key41": "5EmAgsjQr1NMXpHEj2yd7sbyDwtKrCSPr1Wv7szaMBTtYUi7FA3CyzKd13WtcjeXVSJjyrP43TTA8jjzxGo6Pei5",
  "key42": "534suhEcreqykDdXynPgx7tLJZ7JpSAo1g3LjvimeiB61N2kMybUJiCuK1eZXvmuzC74bvKbifqKShb4nsf9SFKe",
  "key43": "5LXrYdREwtsX2zVPAnkgQuoFE47crUPUbzJZzDf16bw3BVxnCda6Lm7PS2Q2DjU2ErmJvs52iZTthvX54qvPBM2r",
  "key44": "3ccvAVfESM7FBy9vdCmG5trtEEUVFZRpeRcWjyxBh9ps8CEL81kmp6rzek399SRDk4u4tpaCpWgCpGCrhYvRxJgC",
  "key45": "3dqurEZuX7UwHomfw1L1WQWuXLMyNfWsWcnF1iHj43kLkPkh9MrhEuBr4dyz9cxDnpi1ggbwKarQd54ARQNcMqFS",
  "key46": "72zTxSmT7exyG1QYnRYRmyWs8RwDCRPvMJdFMDW1WPjG1Ttvz4WQqqtvwzTNVUyNKQXBe71FJKrex5Fo2KTbYLQ",
  "key47": "2matEGXAkgYEzhJjKpWdpYh9KKm5huhsRftByjiBiLYPqda6exKUbsdqDzf8QqAubajxFUZqDNTa8n4ito4pcYJ"
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
