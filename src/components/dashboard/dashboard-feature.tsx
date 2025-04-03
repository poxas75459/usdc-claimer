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
    "3jCs8ZiQP82amyWoykrv1UJPwcU51K3pcgXhpfEnEBQsjsn6TTU8ngty2J6YRn6yePntiHPzqocGZEdgTicTTgmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rbQePfh3sNBwJ5RcEVgSrLDaH9XhTKxwCVpwHK9VYgcgxCsmshABn6DkcxhLzQsn7GPUwrVDWQezmaVkX2hEQE",
  "key1": "4UCSx8AjSfkgarPsjzswnRCpJXsHcw5iQwmjQYAku76Tq9j3yaEp5uC9CyMcBbVS8EjGqi8iQRdy5cjanZ1HAvqa",
  "key2": "2BewBHxSCacM4uV8ufaBe9YVN7PHqnzTz9FT7thdpLxS2Uw1qeftKmE9iPW5CVFsTkvu4HxFbvdVDH2rjcxHEjhh",
  "key3": "53Vaw1KaQZgvf6GvNpkf5oh1GcD49FnUZzPXYsDu3wueqDMQHNADXDA1pJG6u8pR87EZnvGnvXAJWEboRQ8mKcRi",
  "key4": "5aU9pCNdC22xufG6KSLRrD43J5uBaAHnRasxEem7GHAq5ZhXmi7AvT4MXHbe6ze1zHrs9nN4Qex1LTxcVjUm2z1A",
  "key5": "3jJDmXHG7U292NVhQQcHn7dtCxkqgYNxpM5W9zXxb66GFUDaBgs9ot8iMXW7ump4dn5NEajJzQ4BejqA3LnE7RXz",
  "key6": "3YozyDHksFt6QDGjX4o4D7UDXnLToyR9pCn97BDMxsozFDzDK2RjemiaxVqfKbPzJaL35foHH7CHVWfJHzpiLPz",
  "key7": "5Cj13xNEmY6AY1YyLPXiRCtmc53ifb6jkRyTqNznMWmeCptCMeu6rTN8j2yH6JnrxMPGqV9wGW5QMpo8s9tJmnoj",
  "key8": "6vDsZJQvXrAHyWKh8xpYHutxQyeLnKGoXsJ1CVDWWqoTJp3v2kxFMrvFLcgatiQcDGkwyK2b5vzCHtCiVcYGSdb",
  "key9": "4kGW638Qby6WAak3wgc2AFyzqDyuNDxjJC4dZYbjVfr4Zbh9Kpri2Haqa8hDHpW5piK13CAC6RVjaptDxZkmtpbk",
  "key10": "2akQdMyh7sJUgGvPMvcJim3aXc5gFxjqpkptTHiYXfrnHkCUvWweSWJqiV17AezSypGVCX7vLzmLM86abKPJ6qdY",
  "key11": "5T4y7JDpMPCQC5GNze5iiiPtpVRdF6qDTjN2cp6DRnp5ELLRa96e7vSkcTDckMSYhzA8Yxf9GZB16AbEgprnL4C7",
  "key12": "2wBr3N45vgQAB513ukRyb8fbC8L178zYLdnKoj6EQmtWdZmrZ4B8UfAoZCeKxGkFr6zeXEUwrGk2FF4TyqviWvAR",
  "key13": "Cr9mW8BMfKYs11kDEMAqo4fGbGC6z2RpuSnT7t1B14T67D1vXJdzcx1HYih9Jp4cGk7ahSXeqCnU1gHckH7dK8d",
  "key14": "47BoAHZuqPp2Ws8MufXK4YAhw24DXPbiJkcphejAnffcwNJRePheNNaY9xsLrGu2q7p5LW45mgyND2xaFgtTyHRD",
  "key15": "4LB7zAimxLbFG8iNu3LZDQzQmJ2tVBzqt7GgFUWyYtcwPX7V9kgDAUFHkscvBE1pw43bvCmLrpexGNLFszxorydk",
  "key16": "5fZe7FfLNqDuSHENyYzywGKVjmp2cpEKXgEbLnGm5UPgijEijfSz17tLfb69qAEaoQJMsPGE4fVdKoyGBd92Rmht",
  "key17": "2MzZDcY8sKP1Nr3dZN8eN37W4PGHP7WqiFjiu4A7QQ2YuB7UotkNumJuFeQJKvpC7Ma1DKry9BMW1CnnSE647t7i",
  "key18": "64bhHA5s9genHX1YLKhuG3LmufQUmQCfaUaJAkiqW8i9igByV7ZcWqHce5dmo6542qJa4UFgeAwMdK3FZJX8fEsU",
  "key19": "435jhF1CFBu3EUU4M3856ybmLAP7EKYUHXYzx2Tq71kENZWGfEndxaysbNkjvPPAe96yvKSHcxjTd2aG1WFgR1UK",
  "key20": "3dXEYtasTh4RprRknAtpavtiZVJckdTTgA6V8GJT2EH52jyonwJVFwgi36avoKQXtVwK94GYfsPUiZTCZY5c8jWr",
  "key21": "3sbyRFBQE9W222JyaPLfXanDmmVgdH5SgwUTi2vpbHugFEXScV1G5MnSKjkMTjv7K95zZg44caSNfUbq4oDe3P87",
  "key22": "2mpr5w8vviT1HHe4tP52qFt1uxuNALSgB2fMZrrTzpJdYmNoKBnFnExMZpbgjJv7VYBaXCWPYexaKaFVbi1YLWN4",
  "key23": "Ym2m2H8QN5H3c9QFgGEV3k1UiuKgwX9rQuQWq5hw6Gwzt7D1P3behzXN5gsfJLsLCMGhaFT5biRSUS7ZewPiaec",
  "key24": "5yeoVHgC9ZmXPuVtjks4MtJ1FKKjnKJfuJu4acDZT2YRnux48pNueBs3bPTzHqoWjnSoJLQoiH9hGzR9WRYRBA4q",
  "key25": "48pCJVHj283xTWr8FUfimYvTiGgSh9cHeLHH5HBbEqqXJYnhkogQ9kLLEk5ziCyaCXcqVGDraJ8pVEQecNheBWCC",
  "key26": "3HhndPSacn84LJY2rEtkTRiQPhP2etwt7X7Jho9Sgrhw6vZ5bhzfRmHFK8iHLUHpq5vt58GHoZ2Wnf41ZPb8fXaR",
  "key27": "4AKAhqLn5FrJ5TuM2AuK65mzpYyx4L27tZ1bfVTbZA36HgnjDhNYkVtAdCbsCrtkb6scWR8ukRYxXKeNphv6aAJA",
  "key28": "336t2vRtakNn3KyYtV7sh6HcWXQ6HFcPwFCSFhkmHh79XSJtoQBbyHmrG6oMpGaczE7cTwPyHzsu81wLHRRV3HRr",
  "key29": "2iRTTVndDEKGnviCww4sByz7XouqhyQRPgvpy17HTw3JkijtWa32cfu5Yp4RZQu5YjfSmq3mtVqg2smbwQqLCtpz",
  "key30": "67YkfzqRGpoGZzn75itA1NJnZoYcxBxWKo8caDgpFZEmFBKWpdFMHJHVhPtn1wKXAxJNfzj5tUM8Son8aA6Wi8EP",
  "key31": "4NwsbHPkj2PB1XxGUWSeGutc6VBZDpZcG9M4U4dy1QvYXdsL2ijeDVSvsuGVGpQ5zJ85oMAFWoRsit83cvPwaLjf",
  "key32": "3mvjRQEBLyzHTUafXDFgMWuYQZ3BKzJg3yLLJJKvKwqoJhVc8AMRFbVkSmMd87eawMbCLe11gDta5rgnm4kfF2bd",
  "key33": "2Y8hxcvNxgW1V25LQ9npkzso1VpbkQuaVMAmUqPSS5MM9ra7bUygfwQG6aNnwRf4Qxx5omS5h4gzdzdy68KaLNTV",
  "key34": "3UobCZtVCjF16zce9Fgza3AYj6A3ZgaCWVrsXiNPZkcvTWEQPtjDYieq9AAv8ccrgHcCWy5egv7N6GSuXa8w2DKN",
  "key35": "4M9nq73dC5oEGWXQf1EmguS78MAPb66dymjn8zZZ3zwwo94xrnMUSqiWLPUVsnrbkSTMKLK3rcJdHj8qGHWfcVKc",
  "key36": "622RtnrAbup66953NTSMvwCcQDfyhVCca6Dvci5TutxeXqk63NaVThGBRsnMNoHM7UpmhEpqUBuiTu8VfAsLk3Qg",
  "key37": "49pcvMn7m4eHPp7wp8oYqAJvkKhy9y5iu5Tm7KR3qFYcekDEXxA8ncSMxLjha3VThXZve79bJ1GMpCbN7TyJnUC5",
  "key38": "2UH35HJqvfxM1HM9uZaRW26g4wFrxqLWJimQiACFrmnP66y1nC1jAb155Cv79dJebHpttjw4HgFyK8oPEcM2BLJr",
  "key39": "2wCuB4cABRAe8KLUNzidahquL5Mew6ECD8q18jQxwcf3zzeb8AeWdz4D6nehgkJnSSAPAJeZWqDYfADA28pKof84",
  "key40": "3gKjJ5ZDryGLRFpuUST1L9uGNQqvdoh2KPcuyq9QbX1RKssAACvwLmL8c9PcwqXuueKXvUbtHmxkbSxePZoDVnNh",
  "key41": "5wY4BANBBqqTR8FB3vfKPvvhv5PrrFXNLKwELb6LKmoJYPhz7Hbz1gdjP2gdMjxBJnpX4zLz2kfB5y99jaKtGr8w"
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
