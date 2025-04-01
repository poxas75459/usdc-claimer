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
    "2dpMdqaNnZq1eVpRpoQ3Z6QBGkvGdfgn3qRi9Q4AonSDch2tP5uok3yxg7CNuGQGqKwQe6xjuzxjxu3hP6tE23AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDV5UXHMzFmZD68tkqmkPYcTqVXjdwr7QPt5ekAwC8MiMaociVJEc9awbkC1mfJUmSJBwjNif5an1wMx2haBRXp",
  "key1": "3MEqaGsDcSp3xtvhFGS3WXJPMpNKMYKgCinoudrkaUC8s5exL9dUDbndt3KjBSgVgatLZkRcyEFoZM2XDtzHUnpv",
  "key2": "2fAVD9kucGA6dks4FvQYN17wq5FZyrtWf8vWRWEP1dE1qM2vw9PaVw66wRhDofCe2riwpmB8HfxnHSgacbtFwa8u",
  "key3": "4Wg7P4mvSYXctprNHeqnUdQYSTytiPGc5ASEAArw4gxm1kz2B7kFJ8sBuyDhJEsFC2PCJCpwBiZu41FyTBGLSDx5",
  "key4": "3GAHFbqvzRcvRiGLZwo7LDAjNw2H8AJyxiiY7WbhF3JApJC6K5xQjwsadWecz7gnivxvaXTfdDJfK8ygQcD4TF3S",
  "key5": "4kb3qPUWZNs52qShmzy3ejDNAYt9Zehyw85YnDQjyrpudMfKNUuUJq5pBH6J7TDWsm5qesDd2g2bPzFJdPhyfBYC",
  "key6": "32fii5oyAYgc9kosaVx7X3THJmH5Ld6eKrhxkmQP33gBFAzEKp3WN7ukHbxbxBsqSCTgFzgipK52ffevpQyQnkSF",
  "key7": "5TfZKd4n8dgwLB6dFvhoTXPZ7ZCowyoP8kYCSKDcQffhDUjjzVQWNRJ4pLAF39YuqsU89Ftgbo4ZpuK2zHUTxVpR",
  "key8": "3SDrSjg7nTJWGmKCNf8A1GVaAtRSxLgxorb62qhDX1h2fDP4uBpoS7n4KrATnjSwBmfJxTsMFQ5VfNUn8zfNExzp",
  "key9": "34YTvsWn3AccUfncTTn5V9PaMTqXC3emnAP9573dJJ5ZDFvdJwqRckeX3KXqa8JeAcUNptP5FG1xVXcACCjd8Xr9",
  "key10": "3zLxzLCEJhCLQaR6RNYiLLBY27guuVs7YkhNzNWJhWCAirCTm2PAxWn8PvphYPMTM9gYuMdXiJNyATP85rQ34pWb",
  "key11": "5a4u8crRE4VxuokjvJk3QU3bsxbgCdn3HDNW8psKsi5ohYeMR238qB7szA9tUaf14hGoezhagPzpUK3poTFea8M5",
  "key12": "3RxTaEQKttcZz5aNt9JCb6mHLkUETUaBK58s8Dn4xaMWz3btsu4vE2qUUesbc9hfv1kvgeuWYBfnNHiUS4cQRiP6",
  "key13": "3GwKSCVWBXC5FtiPoXCGP2abLDtJYU76yWuyocxTpqkpcez5VpADRcSEsMsTrgSR756tHC2cnigZNvcVrU83Xk92",
  "key14": "2qkmgzfGQPvoNcuCsDSzjuUXBx4Ca1zUAky4ABekHoRyH114bGvrQpG75t1CZm7gyXJYUEApaW8ksTxTiA2Wrjg2",
  "key15": "3gBgbxRv2nGevWHkcjDnm8BNv9cVULkzqE9mUfCx4WRre5cVCXsi7TtyH9Hs4pd6eJc7o2pC8Ek5pwJb7zJ6s5FU",
  "key16": "5ozjAtnLNcd9ucHqAZ1oqQMeDikbSbVZbNFBNYQ5svoN2th7DmmLZAUfQxA6NE9oD9UcjVSPHFEUTn3xsRYUogPW",
  "key17": "BSK2drfwyDZyUzyEdke33X3MYeBDPLjx4cYMxWhzEBBwsbfbACAyhniuEZiU1Ux4NYK5C2EtBuvTrQH34dXuMZU",
  "key18": "3xEjufAAoB9od4LEH7iDhtxrhCDpMBYQ4s6g1bHK8Fds8B3a3xkSvcALA8rx3ccqmjXg2YwJS2BgwPuuzYDahu3M",
  "key19": "3hWNH3GhHbNDpdEKozLTcREEFuPAwSyzf2sVfeGfvxVDrCisFjxrqFCoksFisbJVa234SFAKqSuaZmXvGiCDRAxH",
  "key20": "5sgRfQX9f85Wh445As6hPryokP3oiycHzVPBfeoyCVux8Zo9xkU4PKogNbzeUYKZih1DYwc6fFT7xADYtauVpyiu",
  "key21": "mXVESFpJvwAHHixgtKQBaMVPP31hFcGTdhRgghuTLPV1r2QkYBg4eaVAWfg7KzGcfsZi95tam3KpdNstSrzMTMK",
  "key22": "4WA7zWqc2sqJ8TrP6NHQUb4Q73JgFbjMAs6ahSXnWAr79Uq4iXERLW4RqQ2vZ9APRU7myZQwWnS1fVTh1TbXYZxe",
  "key23": "gXu5ovxpjp2VxchuxECMSSEbpiABwMaaJXoY7VVPP4PiWWMFXtFDbGwmFPCaL9eEq9AXVFNZdPHEZZaFNrAjASD",
  "key24": "3A4exZzXcLfs5BgBhGrhMd2doTVpePzpomshVS8EZQ73wY4HsqYvPJxJWqrSiKSodxz62XK1tYP1vR7kdJUYVqUA",
  "key25": "3haVFXxrJ3YzX3eSHkwJ6SxuRJuvW7K4LYDSQCiPMCssP91rqJMzssdJc1dCvrML6VsZZFzk5JgAhfdd4ZGr4JdN",
  "key26": "3PL2rW95zGzsCv9vcxW8PUejQvsL1SFrcq7g9h2bnWVu3YmAghpd8Hzzua52PgjCU3VzuusAJnuFChJLgeHKDczK",
  "key27": "64iNm9QQScAcYeHe79aZnKP9upzAnzJ6baHLYME8ADd1NM77BkyS43rhgrvKx2qJpwGyS73W4GNG33RFBMgCdG2a",
  "key28": "5uJRECTFGGPnoUQSW1eKZqeCWNh4yhKHY4eHn88cXeWLLqtJvEKwJy4n3cPBjyPjMtbj4Dgs8GDdZKdYBwDYK33q",
  "key29": "3m1uifPVCgPwmwEqNf4jQau9dbBvzcK7N42HHZgq8CUZo1nnXcHRi8NNnbk9TLmXzoMx3eebKsTvTDMt1xAUMzrt",
  "key30": "6HCbEwjAWPczGNHqfYMU9wyQFrYKpFJ1n3iGBADGNJXtYjd9UYDqRo7s3hwgmeZRzRch7S6PqBK4vWj2DNcJumF",
  "key31": "3x8ewBjW6VW8uDXQBAh3C9c21P87Eftu3EhWdunK1ar3ga5mpNgvXSCT24bWKefx4dXHvEh6jcfPtXobP8KyU66j",
  "key32": "27GxZvo88mWeVEdCtzHokygripgggxpqSm5vuogr6abVurcP9aB5m2oRfZT6GdQoJuRGApZ9fBpCHdYmQmzn5oyU",
  "key33": "2jZmPbahe3wfrAmm8ZTNWhkQBDUzZ3PTe751WSzEjeJwEK277VsEAA1Rm7wvZqihcEh8bi8mxU9aa4P47Hn9Fosp",
  "key34": "4EBwxdLLVzviu6YytfZs2JKSXJ8TfwxKMBxHAapFr8s1zEBbJMdnRqMePogh16TcGQHTPSEQr1Nkwn65Q965HKeo",
  "key35": "3UTJX9p82jQexuUd9stbX4eMob1RxB4b4gTktwNFnFM518Bhyq4dyaToVfa6Hz9Ddjd5ZQuTXNLak7hj27ieyGoi",
  "key36": "3nu4Ed6ARrezPkbC5ZLaCdfPHUq5k6dsehhpTH6SwQqbXo87UAtz8EiEzBpwKPr1SW7iV66jKtYFpBmfynfot8Jq",
  "key37": "2SNePQF6pYFrXTLfBMb1KDHVkRwYiH6ptW4tSMSh68tenctG5zPys6LXE9UUGM74qqcRiNEUF5vjGKKxuWzCkLME",
  "key38": "3UuL4u9rQmbrHh9t48X9LcqTi2uhXxpa56vqwJtmBz8TRBR87CmLDJDLdxLBbEJKfYvact6mY1gUZSkG47VzKQfr",
  "key39": "6RV6ivPQYiMfuL1GCcbUXktek5zNfZQpZ9tVSHwaaGxVEsHzvJrWjrb4cfx4HxtPWLsiMAqfBeTMCES9tTpe98i",
  "key40": "DkBqtd2HrHJcUTaJk4JJ9y3NUocMvHofCjmQUssGTRouuAWN3FLqUhneeM7Unb8DbDtwmwZZt9dFDEExybZvqLg",
  "key41": "3PmXWJHzqa9u2L662UYVgdxB54mLS8Y9D3yM5ivZX8PfJMM46N1wYkhfCm5aScmJtqXXdbSAaoftCoSMtyZ13j66",
  "key42": "61YG667GTtWcGqaL1z58ki4XWrF36rcrrYgu2FkJC8aQFG2WQA2ng5FR83WXm4tEJN4nYqydp9sjs9v2xE7gxKCm",
  "key43": "5zqTSW5smetqyMhLxWHhTH58Gbh7prxcox8gTDiL8nDjQgy7wF4iRji2fUo3ggvUPYT3F589SsTEZo6p6Ew7DhPx",
  "key44": "3YtasQA4RougAESr8F4GTKTRtGZhxMRtTcpEz8sxcgi1LXUzBhb98YgKDaAmjFmVkDoUjUHVvy84yPMAyRfABAAU",
  "key45": "4t8iPRdsse9s4GPQ9gM43kbXyeFrs7Nvw2yssQDftTo1KaWUXeybDMppqdHgyhDLv39UWXoZCD68nDyBv6BdEHro",
  "key46": "w776Xhxu9FykTz1FYYrhscMksj1mab5r5TwpnT2a6Quh4zm8NQchqgWxaEjXCbp1deEYG8ncjyVcdvSnCUVo3yQ",
  "key47": "2Q2bd4qttkHMxTvK1WU1NjFdtT7t4pRo4q6hqkEBdyh9A1f5KvzYyz6mtDKvNYuhXBLhLSZvz32ZiC2xYTdptC5p"
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
