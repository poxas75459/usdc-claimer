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
    "5cXvG6DXW2ER13UPkHEhBkAnfBwCbGdKR6aBVqrLrbhiZnJ2cDoTr7dwvLKkqSaC9eD3KqrpJ4ihzu5ZdVCXwo78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcY5yj46B7rB1tdArVouC2GTsF5LMYYDm7RNdRStHFsM4mhb7xgbSx3iRggFAUtnkBEXmC8XnVNd81gZRrg7TRz",
  "key1": "5F2GfxHgCzZvoJ9tg2M8LFRanBPr1gQyRUd53GG2aH2Aespk2oc6ZfdPhwEiAqHp4WHDHzWDKAPTfX46TfRWCmvb",
  "key2": "6XCW3u8snVkTL9iwAMvnELq1ZfMXSFDujK45PXDe5eAJnXfXwCjfTZGE9RH8rjZqrvdU5K6F2giVTbpRiswSscQ",
  "key3": "2C4ULvi8NEUezM284P3tYoPWrfQFVR878tn1KeBcystLE33SAasrK3iKkE5owaRCUhQ1SDZeUdH4XiB4NNVACgL5",
  "key4": "3xuNydqbSAhutAEcpTph8REaAv7zUD3t4LurVLLrALsHDBd3WtQ7LDQM3qD2nAfzg5zHLaScW4DGk2FHpjwioPg5",
  "key5": "4jjVGJE77wPqMJanyYwLXTodTNuDsLJNxNhYEoyGDoQQNmUDTo2SGwstnwwF96CJz2P4P2GQTyvpTUhEfUg3n7YG",
  "key6": "gYtBoEaeKrHZ2TSVuDDsnhawkbnvKNEdc8EUWXrzYfcdXhYEvs4VFmS8KMvyHfkeWMmBYMCsFgyJJscCxoyHfwD",
  "key7": "29mycDrDQqxYEYWA25DChTX6h92KYAfvqJC4MyyXbpPUQDFexUbvWArsTU4CjrvVTDMGQf2YZcWQRDVrBXfzvg3v",
  "key8": "5xXzkvELfuro9H3tZWzCKMPAUBGbLsjTH7W5TRV2MkzSeo9mu8brvyobgfFe22MCJchyW2brjBDFUUhRsQDojx4N",
  "key9": "2FfxTTNiN4iLEkPi51HrKkwmHZzmfvCKZjNgb256huotiPiv4WC1hMVoSm71KYGTFEkUjNkRhYwE9Jmook6oMytQ",
  "key10": "3pSMWnjDYhYGeqSAtsfxeidzKkvk1Pk4eMhbnNQGNNzfdjfr188zZaMDyLy8aWvKouQgFWC8iyhpKmxXeSEwwLsC",
  "key11": "2CwGuzsAqbcotYsc3AiSWYKkPvbCPG1jfZ7v2mqGebGNQouCxZ75VA82w9x8cRuqzcED3hHuKccByEZ8L8GbeprH",
  "key12": "4v8KgXW1aHX1Q4ZYP2FAKv2cQG3BhQRbqeuboMS7j6CKGVzP4TDgwG5hhzh3KESHxq328hvHxa7yfmz8y7Xs2E11",
  "key13": "RZRHcmcnCn5i3Xggk8AC8jrqNx9q8LHPrqsiyxxJWszb7iS6G8st8EMNEmRi2FZQ3frbrvkUKYpzjU7dmqo9PaC",
  "key14": "49CZ9kVrZReNQC5rfxgTdYh5ia8NjUW7ds8BNX6wYDmCqQb6tEfS87R7JFzNoDyuLdBL2M3ZCrPyPfpp36KStc8Q",
  "key15": "5KNs8D9eaCfJoc2Py2iPkivzAkCiXA1WhBSvarMadttcLrWzqvLZBMrPDaNZtDQzHRNLh1vdwFyiPtCmHyoB8bsQ",
  "key16": "3eUEZC5qNiciF39jSKvkS5CKSGTuWhoZ2mBEiX6961kmnCcaN1mi9MRvRZkJPpHzP7HCg8aUSnUjyohWdkKPkQK2",
  "key17": "2L7JSnHnZSjwEddor1DYZjY5vwY3C5LTq3jysr8rBSYUn87uFhjDzdmYxRpwBLr1XgQGbzw7h4XMddV76vBaD9WM",
  "key18": "2G2EwspRszcciyMugjwbpkeKfDgMoDSPaBp8mVfPCFgtA2dCaYPx1UmFNwMHk3g4Ji6EPoG6hiAMaSoogZrdXBbZ",
  "key19": "61HZBS1q4RA7R47Vt4bSfrS9FXWCVAEvTPX4sRgS6ZBf6yZTRhGR9SgCWysWuqiPfXhV6p9QhB3uHq8LK1BL4SwA",
  "key20": "61jXdwgxF1eMLndvzUXxpYumexVSfbWPLqKyNnazkqzdpTfXjnyR8RtMpitnzwPfF5uiSFg5dbkSjUJAXCgVM84j",
  "key21": "5ZaEwQQkmua49Sk728YWJVexYan9JaV4JNxwLiYbzj9ipsYupZXk3wS1R7iLLbnHo21rVG2et3BJFpLMAgYp8nfR",
  "key22": "5esYy5vvx8U55DDWVjB925wN3XMjf52Wh7Qv89R2z2WpC39Ha5qxMa2thPkrxsPDBEZqAuGagB2errneMuttBa8u",
  "key23": "2Pu7H8wR8C72nVN3mtBnCLvTXH8tmGN8zUAhvLQSAWPYkr5HWCfriZmLeAEvup4wDuxG2yDP692kehVnHsLJiTX9",
  "key24": "5Zg3qVkRcEbUy5GdAgDu6JCCSpHSPWrZND3TN1TQEGj6zTEfDhr2fnyb3qaVLevnTL4LhZ4axr2sitMQE8z5Ag5a",
  "key25": "3ugsSm72Rpq2RNfFUDMc4L47t1CuyZ8v5NwaFftUPeJVG2tZhN92wKZsNSRmcutwhtJtjoSyw8gTQ6HprivS3LLx",
  "key26": "2K79FvbPftQcSZbQccpL9sxPzeLnQ2hFr3u1esXoauC7EM2KBsJ4bfRhfJxRBTSP4WqCxVVcXA2neUFJ7dNrUf5T",
  "key27": "6fQVWUVekW5uFzfqVvuag1C1xLASvqKtRC5Rtydu3NEgYphkPcQgfSJGBzK3fLpz6ZCxGkHvW2zBB4DUSKitU5m",
  "key28": "44xMEdAzQCC1zQLJoWxbht2F9myhYNzxP5LXfHR12Rri537yYqv83jL4B5RUh9yALj2L2T6aS6rHCa53J5Y1z17n",
  "key29": "3DtoL45CeUfgGfb1tUmCHcvB55ozUydAnLBowggx1xWqbDo7XvWKyJwxcPyPJcvRE1kT6B3gjtgjsQaRcyk7dHof",
  "key30": "5bLRSeUsyr6PkDNZfXHwkb9oUZp11Wp51iTRPsFi1nSyPMzi5JPMRVpy44cMUF5NiykPyJrmcF258NtU12W15DT8",
  "key31": "2GVbKLjCvQpv1PupzqtB8kTzZ4j3JVe2ubgL2tK2m57oLcH7R27Z6mhQxKNwjVY5hJoQR79gmwn5xfq3cHFPdzxB",
  "key32": "54J8o24JyWqB6s3wSwvNSahGDTfNW3ho55JPQjJZsciaKXQEnVWwP1Ft38pcxjp9sjqj47EVKudiGNqXHrQdNJdm",
  "key33": "5kAsVB9hSLQKq3u29To1JXqxGQZe3xRLzYRGnzJBJeq99jBcjpVVJCxh5f2dUtTu7aDfMRciiYFi58zTNXUDeJsF",
  "key34": "2aH1sZvB7tRh6RhNDNHTdBcWCXqcj3CD3AE4DyLrJWFPzF9BovBh8pgckd6okBW3tijVWhZm23QB4wGEHhiYVg3R",
  "key35": "2WWmWPQgftKbU9WPBNPJyuqC4RGQQpSuQ46kYMt4YxwvaJkYPLCTPNU4YfEqiSfwrFkPJJwEw1ECpCmtzyjdM4EX",
  "key36": "4poynomDNoW2y5LZn1oJwzuzX6fip88Jd9iDjzK74s4SSHxCtk4kzZm8pMnWHQNcqD5pEWsgy8dHVYwoyfC8dgiM",
  "key37": "4TbvgrAw4AbFLoCCWhBC8vUCa5ARAf2jFyv13kD69X7oXvwc7mWZjtodKhX5cvn41pEAaFeXQE8QDTUTKBU1dUSM",
  "key38": "5YEKFNtoFdyMXtykHoxAgn5ANrXJoNAmFL3y2aAJspt9T9EP3mLjc2dAKLamFWubrvY1MGSLyMRUMfNoTfFdM8aw",
  "key39": "4ARkwqWqoNA6Vq9TQwvF5Q6D8c8UNNQVM7L6EePw5EAkE6ahHr62DGq3EAu7BTghFWiArcfZFPgeSyz4w15XUPsg",
  "key40": "2dFVcCvY8tCrnezb1ym4Jo9DJUvp4AnkrjRXqCzGp1jeNo45hpYKtHW6dnm6oZJ4Gnv6q4H98Wo8J1JVjY6SYuS2",
  "key41": "Un2R2MHjiWYcdjZhZFqgCngVvmsfkKANbxv8qggS3n1endcDhzV3uw4UeT9owTFhmkEobDaNRkMYR8RC5a16enC",
  "key42": "2og9DPH55YCRSngfvS6ocAVwLX1nbBHqdVhqYtJnc4evxmt5kQGmRoYVQz6SZzQCtMKU1uJtqGWtRJsqRAkfiSc4",
  "key43": "297JcY4WKmrGaFqU8PxoacUnETjSyip9wDcFbDZ8YJj2fpNH4yCNXLMTnYLYedsc9CHGcaTSEgqfArJkqqDN6cKD",
  "key44": "5ZETcaxokP1yu3ANNvXDXmPpLvcEkTYFZ9g5P3rFV6reBMfHjZZxBPRW39ifQE3esiM3N6MYtRg9Eot2hbMeqxM5",
  "key45": "3BSH89FuY9ZUGEbsFhLaHum5ifEHo3Xm4zhnWkFgdrhE91ofZQRzjjBsMK9rkPnkrGiaU7uHFbsJ9Jkb2jJB1cT4",
  "key46": "3rd111vo1FHLAqUoixhKocGWgEoGEu7LBTcP7XK94KnoC7dYQftLiq7G8NCW2tFyvdwifn862iwzSz1mnuxAtRLd",
  "key47": "3haFPZE5q4TAd76Ggmv9koNYYud4mJy3DzdarvZ9PP7xxQjVB18Q81FvFap24dGLMUjzPM3afztfBpQ6m9AS2DHh"
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
