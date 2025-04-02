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
    "yHhAvWmVJ1ktBkuWd4sFEr77shL7uyq88616FtSUKSEwrFbQLoTz14JtsBhF522up1tKsWFCg1bex4f7T4ubNm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrnL1LkcmPsgz2ibfekrgjfFf64PzYHSbu7NXPwESXqLf3rg2wUjSgZFkwaH1miPvMnpT6qhkaNgEDARusthqR3",
  "key1": "3TVxeW8FeaqBMMCqx4Q5gd3VMcZHEjzYjad4USDo75ZNcNKkr473HpjSyDSAoaQb6pMdkE5A9Bas1UXm78Ygv8pX",
  "key2": "5qzDkkexiaBQpsFGy95L8m3hKeRtqhzxX35T3UsHFvzJLgWrmo5SR53tJqLH5RpkkBe4H6yG3UySQRYqNARFLvtp",
  "key3": "5V4ivCx18yns1v795sVBteE9YkCYdAqEn7qmNWsNu6m99Cjgv1Mym2magQ78f4JqpSxPgJ8T6os3v7z9inxqvWaw",
  "key4": "5MrtpmNdW7qpEjL3bnuEWRQH7UQc8h5ChKMDh3FCzAZfjR2pLfWRCumNSSDML9hvaJiaJwxYhuh7Atsvh5WdZBrs",
  "key5": "3CdsqeFzJKta8zE9CxPA6dYrdNJpvtKP3jHyEZwfC2ZoCsuhKMGu1RxVUHenVnvCVZNUQeL3PgzqYf1tX6W8bwSn",
  "key6": "E9DGuXFncaXUyE2NZg4JVQPEJNktLFKkfmqFh7UmXFfJozbyUwjE2XkoLKzoAg1G8tp4JTQZiy1QxRAjnQmsmVt",
  "key7": "3cP5xqz6d8ozv8pAmavkrA7bpsUVCKZV25pi4SNtLHQoCJVPr1PNLa3UJNoMA7qZCRhYVC7HjzJq76kFz1rQcM5z",
  "key8": "53LKXevg1LPa1hcmoFJThWFDYVGihTD6KpB5JBevALHwj5G34ePHRNsHaLQUckMyHF4jeKtKJz1iE1jDHgTfd9Rf",
  "key9": "3FAJWzFBJvGaqHDvHXXBpQ4fX6gdMco5ConpKFxwxHhV8fyspirtJnrF85u2xoXaah6Vy6Jd9qYxXJM6YUDt8kZM",
  "key10": "4AvmfyzVzaJQurBeEES9PsqrvZaRonmHZ6sBt7MY1AHZYB1GtBReeemcoEtVQ54SCAN22BNj5DKLYk3kNz9pc5Xb",
  "key11": "2qEeenpM6HLABtyqtgEnsNgvZNYF5q2447VeUpEyU6YXnYkatwYeFrKzMdojTuiSb2Sx89ktCySSTjtmBgCE9mC3",
  "key12": "3puLwzcs9ZuETSCYDPsdiVCamCXzEBV84hxnvqvbsgevEpPTTx46sXndBoGrvyjsQyiozpNzYke3MbC7sZwqMjra",
  "key13": "4KAAx6Y9Gy7YVTJHTxxcL8yoezgjYQ6rbDAJwRa4B1M3fxvWt9efuJdnBDxm1UkureEDqkK9JQQ2xcwYLMV2CNG2",
  "key14": "5GMsYH1F4PLKJWDWgP3Bhw7Bbcp5HzmBcwxWN7xubeGPXKJnuvz44hqYx9wBCj2igmjE8zMQNwhLSjMWcKq7jxgT",
  "key15": "2zew4uYfhnecLtwsPeLdLk5Sfd4ezAsfDsXeQp8ZJ1LoTZ6pCBUSVxnxnE9Pcbu7iMQHwsszj2pxRaebHhxYP7NG",
  "key16": "q7tHeqiyxUGbp5BicvZPWY97VtdwMVUDAVsymVn49ra2obH2r6eJwKNfDSfTrNNHyynecu66MkPtD6QbyxsxRfW",
  "key17": "3qTXUh7sS8fFfyzpWvZiTgL1iMewrVa1DQ7WsU9pfwn5cP2w9kQUf1rNnYfQD6pX9nb42pnPhKhyTsKQrGyzLMCv",
  "key18": "QNEizGqm8ZRMXp3iYZ2uKE5PqwuTk1vwTcxwb6gqxwRSQt7qgzkQ2TGtfKcUvtS7yziAS7LLpHEkPbAC7rUG9Un",
  "key19": "4Jzfhr2QByjrL6dqWQSqrdhi293k3N9jawTL5xi9UuUjBrvf2iw4FF5Wb8xaa4bMgcT25xgLhxohvCQrB6D8iWuM",
  "key20": "4HDmb5MwVsvnjeU9XpwxDh8aca7494Ws4L3zxE9X6UJh7fBpVzki22jC2U7yHLjuYjhqWHXiNdmjVpmjHN6zWufJ",
  "key21": "Y8YBvme7Q8AmzkaK5pvLeomdiqM7Tf3dChCQrTmucquwVT2GdXwfjsob342xMjnuwnhsKMrZADREJkMTQe54hWS",
  "key22": "5RhTSPYHpSDinZNJZDrWVbKXSABcafkf8dj3JqDibHwNmKKAcG8y4QGA1JcUijDD1VU4NY1C2xcSuGtknazXfbNZ",
  "key23": "5DxVjhTDpD4Zg9nE1tF6t4vrYVA6tXrMQ11mBgNt1Z2PBw7bfp9s2BnNmZkMqbhmzXDpihTC4bNkD8QNS8hZdodM",
  "key24": "4n5simfNjeZftiedeH2GTqNfQ4yKB2wmgbicT7KbtxHdmzJhzVKusBKiGA64yhAMMy8pHa8STGnXUbxtD2mMSR6b",
  "key25": "4FSfYQPyZjkpsrbXtERsBUy5SYRfC5bkikpLFYKSs8G2VaXFx2brDYvB9Aw21nATJUsCkarUjvbmfTMcvSmqrYep",
  "key26": "2movfCb5mS817n5yQAjckHXsEVYUQ7WyKZxbiZ8aEEaE5uKYtZ7q5jo9wjUCkG1wj7ZPNAyFXESpvCNRhpuBawCH",
  "key27": "YabnBN3g4dxNYn2CWzaXxgZVp1trDopqQpv19K521tBACFNayS9k6xDZzwdBuZ8Np3BsvCKdpiTDzTGm1i1mBpy",
  "key28": "5g5ckmF6PUD2VJm5aFoHD4o5daB59UzzztW4sw77S2nkx1eCLXab2X3JBChCtQBR3YNfoMDU221GiAh61u2EUr2f",
  "key29": "29gxE8rotvPsi7PPZg9pzBorTf7j8Apqgzf6yuukpJsChmYpC9Sf7bJuDBeAffYutGcDKhzoLuQdXe6G4BYNhc6K",
  "key30": "5gQnpcyX4mqM3VhPTZjxyC2Rz46WvTyEFvzJUY8bjLnPu6DkM7zedvdpgMRERPXJV9xUjeyd3EeRfky6w8ELHUwa",
  "key31": "74xWoNmS7kUfEPPzooBjzmrbYeeU5X8ggY8RB3ozUjkDjp9bn6hpnwABQtfGzUBeMRjodFhKLUXhj5AGhRUomJs",
  "key32": "23VbSx424u8X3rpTwcTBGe2reL7H7LL2KKq9SBwHaVWwUh8NmHh5oHcEid3a8uxnzMbZ5pqbLjzYk1yHLpKmgipk",
  "key33": "5gmSUK5ukSa1BA9zCrczxdhhGZqn9VmX2Gy7s9cuozmHzf1qsSh8kP6Lb6PDZKRKHroGRJAJU5JgNsNiMV9TeKCB",
  "key34": "4PHvLyNj5Ddx7W6fznsMT42tYNCJwCcQS7UzFxp68jBQc2JjFWc8wGebEzV1BAZ2spAzwCQSLwBeMEeNHwzRBJJU",
  "key35": "4BrsmpB3PC5XQoeJoKsU4edUYpGWh45QHrT5cLLsT1HKkLaqq77gBqEumJ7VNixdBiiSQ9rVYxegEcwghXdQptYr",
  "key36": "3PUupB7xdxcCVVThEBgEzXM97K46ney5aTeLQVBga6jLnBSoPdEkzdprvSbt5vrDj8Q7Cz1zkCzteqAqD2oR2Jyr"
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
