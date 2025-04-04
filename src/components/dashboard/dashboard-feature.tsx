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
    "3QMuvDuuoeomciY6v28jUbrJuWKSTchFvEGN4K38uyW6AuMvz4AQLpmavDnpbaYH42ERTosAaMRDnqqEXvKd9GmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7rcKrfo8qgTjoB47aopYJKZzmhqhZ7g8Q8fruocFavaantj2y11px5Zvt2FxScCshzD83DgMgCbVaPyqipgqYKG",
  "key1": "3nFiZgJ5Fhc7AdULNrrpFvYACQevHNCsM3LVDvNnTF2pkcj85HUMp43qk821gUBESfMAgQva6L9aPMBeVh47LgQe",
  "key2": "3W9o1qK8ffqgZwFJPyuhjr87oNjktQ7EgsSvGaT4ndfxFYYWrZvFoFV5kYZv92KauBoWmyZPHywrWepmCdoZAxvV",
  "key3": "v6jAPQCywqpTp6oMzcEbaX4D1xS98RSY8inYSJLFn9YzJPwzSs8vM58WzGsWyEsY2qMKzEuw6f4WhkszHwBk41A",
  "key4": "2eK82gdgpTgzo9a2wywYGghCj2AzFf3QHLWwW1hwjTCRGgfuT9KzMzwmAdHH45Fkq7UzMg7cReE162cLHhuyRh9X",
  "key5": "14wUtWvHQgWNQDtQiUCda36GQVu4spW4b1pqwmk7d6zxRs16c5HrHFZqPaJj2jSca7Ry93KCnabAxZnB3EVXQxM",
  "key6": "4ck972TLirFCPwdMEa4uq9X8jCKwr4Du721kCJvPPQJViqnC3fuLiJ9hCNVWSaJacuwA7mUaTdKPoipxaCGzZVNr",
  "key7": "5xoaS3UVj9353D8ebMmj57HRmwkVQNpkZMu7r9xPggaqbEFQp8LNSBT3ma5Xhw3k8BAtWiyHXgTkEg8DFQjvTXUw",
  "key8": "4HRv5xiM3WESxAXf8gxZRcbXVgPNVDWXgdTADyisVs5Hy5184fDsMFVFE1Y5EMNwzkyHE6gJETZosqWv3wdzUL1V",
  "key9": "5qNwonTnxkQw6YyMUjYJDsxQqmyTh9t6Tf57TTeAWaVU2XWjYZehPnvc8tZiJGb2BgGPWeoj494gKeYkdBkSg8uX",
  "key10": "2oQx8qAAifX5FhgnD1fKYfzyTTjgAQCUJhf6MDJjP6ktPvy6iDn3UmGhHoJxar2BwuzSba1C3T5wmxBFbcMs8dLB",
  "key11": "3Qz1m6ynbaKuomLXn6gKy2TMVzd52rNZCaC9KXTm6PnGJ2n1W2HCccC6KinoMMtASSW4cR84Vt9u9duj2r9QUdrd",
  "key12": "62BmKURK5bszUuEwQgGfUQTAie7ab6WpF2ePD8Lzp5J5JfgsKRVM3MM8N8dSZWosPQHvHkwSPw8LWtJTn9Pmb4fB",
  "key13": "44gNYfbv6pVTETuFoaNmWzZLRqMTN2e6KDVw7kEnCzi1gZ6fmzwBExik7R6i6EW7XsLxDg3KaTD5ejkYuSUPVgWx",
  "key14": "5ds3HUP6DmqmNW4XvfX96gDzutBVb5C5hQpfaj9odyWT28EDcFBVGsnQfPADtHD1x2LTgfMhRQzyM6xny6CyPPJL",
  "key15": "T8ZdgUq8Xpa3vJ1jDd42gak51wbHbUjCWuHxWkvnj12anNtHLMnwHdcVMuX8rtEujn85HS1cdC1Kaz8X1dyJtfi",
  "key16": "25Yb6hXeuAQxSwj1qM96S91SmBAvEKv4C6LHiLzG9SKkYcx5ARdgP4PauLRG8zCA4TwoCHi8w9PksEhP532YnHz6",
  "key17": "3mvQoBxmm52PqyJARx55zZkT4JkGDwkRvPzuaUtQj4EsQAvcDF83Qw8vh3Cg5S5emRw8KFbwPwAtY3zVvfdjiA1V",
  "key18": "5MeEkun5Z6GoDthJkft9FCsY4oc9tpravSwkA4ikKLvxR2xQq3kkXFsrKCwBSxzbckYF5ir2Ws9ZX6J4W3u1N3kp",
  "key19": "2LVpRCgorgeqLKy37uuxrB7Zdx35xcpFUEojcP2WS2oPC19J9t1dELzex6Bc5nDwoxmUz5N4aL6RDg59y25KFRTu",
  "key20": "SGGiaXL3iao497LZWB1wB5LpUv4wLhEXxbERaUuio7oyupaWCDgnjG1mENuWXn1J7i5Gnie9WEWXvXhqG7nd9gD",
  "key21": "4VrjtTWHrLzovu2bUG5xG5ZF9DSA6HAQDNGAECRnFSW5KJhuy782PBg2TvXRy3yCwov1mAn3W825MjKPU5dj2rD7",
  "key22": "2Ndcczf2VRxQz4ihgNQBa6mXM5hwhjgvBEXHrsyeZ1RuvxWsJwdtdwatQiKmA1As8fA3uL14cMSXBtQX2X1J8E3d",
  "key23": "25yZu7VJr5Q4F8kqwtDnKc9f8hJefYvLYDjPwbPPE6yBmQR7nc2Qk5sU6Z2E6cf3vuxi7gSDhmMei2L9RLC7UGVm",
  "key24": "61zqG8Tf8jiABq4hdPbUHcWy92W5FaDBEp67ud3YBtWaR4EEg5TxZuQkqCR3KJjmq4rxzHBW7zhHJtDrsGdnGPHF",
  "key25": "38DMqnRx4qHh2juMeBEgjwU15RGJtoFuUsnQWqHy7Mh6wiC85uVKfXfP2P5iuH4WDHR5Ky4ajjMVcafZAi7Hw7Qr",
  "key26": "2NDcTsLR3XGqqLMH83eRyGqZ2ynqfDbT92tWhEm8GHMoAewMbTZ9xk2BhFiRzNQxwD6FKLX9PPvSFnx9Kk9f1k8J",
  "key27": "67J51oFGa1LkPLQy6Dgxm2TgE8x2DTvYa9rr2RDjHbs1n9Bn7zv64YfFkyjnKn1qEXoRb9qKKtDP5AXYfzo6aEfe",
  "key28": "61zPvFmj1T9TqLKmNYejEgTdPP5B6jU9ZDKvoPz1U4585H6sSp6nYqr4viiuXNnU49KpGoKVMbc1wjnDa8LKiDa8",
  "key29": "5aiXUGn7U21BAf9pfMR8c7rU1ucjbKQEhTKVCMkD4LzYMmZWdESXUSnFvQmF9NzASU7QRw2cSto4QjBpkJkWz5hW",
  "key30": "jqyRHCbLmae94VKeAcbfD5YEau2NyE7SnZbBuPnZchZnPxs5bpaCyqwbTHbuc655ZETTtEVW2QJpse4auC228xs",
  "key31": "2eHJm5t6eqpcEJBPWn7fucC85oPFrMMocu7djMVFVDideZEpGvZXXBv7eVy3vYu7tG1A3iaRCi1UHcdcJnYtZTaD",
  "key32": "5tbepSoSatX7JJ7aktCN8pXczBKc1xmMYzwhEadhR4VnxopxW13wyRfbiWLnBZWFsLdHkuSHmqbganAYjaZzy6g6",
  "key33": "43w35Rvp7Ju1KiUm9fgMoWNrgNf57eihS1Ck2jHYKw3FA4hZrVErpFb7t8ktEBcR7SAqGbkDa8vGrbLvDf14NNHL",
  "key34": "sCGxszXf93hfpEYGuTCdz1MKGfYPV3nmNcDkNGCdvD822h5rKmHxzFVShdGqujjiUni3dbrm6vwxEYaU48mwvfN",
  "key35": "4u6QuhTVhLJ7sa3j4tJPmN3jZ5sAyqtpKdbWymSLxLrpWxSP2A4tddMTXqoM2tGhCM9Pc78EgeSpRpQbAuVrnpSP",
  "key36": "aykw2FaqwUAwcS5gjXqnN3rxmW1wUvMgdojcvyciJXQYRNxwneF5GfmeT7TKTDs5LzLJNbpQX7j8YHJiowt5Nbp",
  "key37": "2HjPHUbh26Sz4ezHK6o1cL4ErdMpFLcNQPgd62wGMpCJuZjoetSyWV35d9kbDJHEVxsCx3W44Y28dhjf7d7RYvS3",
  "key38": "4wA5CAg75EaSX1pQeLzV3AbQNYmPW4FPttWavV7QqpXCjQfDMa7fFiMa9yTNJmWM37MoRP8LXQxNLokQWp518H3C",
  "key39": "34bvgkaDqRLZHF9QYivBy5PSEW2BL8ZZr47ccRLMhTGuhRksHZZ97Hg44gMx9hhFb5mqJrtWqjXDqfi4g1N1SqyT",
  "key40": "5Nm7pdGbKGHMc2iPtGUZ4dksRjJ2WsZbXEqaRd6rkpDRaAgoBYC2LX4bk6T2cM2yS4kTSR6djS4nec99WpRNR1Bx",
  "key41": "4zmTwcG6PUc3YkDcbxScDsoy8pjXrkJVprGMC8Aaq3epMsEUxmdPy2fhY6dhkGd4NcTMKqLVQ8J9RgnxMjQ5BUfz",
  "key42": "2AQchSBaANCFbKftzN5KKZrujkgsTramAiL3BR26ugxUj5AAW2PjpXq5X3kS3SEFLMGXDHERRR7YrfnGu97YBawq"
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
