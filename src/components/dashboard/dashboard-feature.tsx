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
    "2rXAEN5quEmmvzUvoPkyxw3zHa91NK4385MWRUpwWojn47cXWTFsR2qrpPh1xDTBzpcfxibavq1Pt7wQ1fz18hQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MSjwW13sa2MfSG6jFcuFyML6Lup5BxSpUdha8d6ucxLGy1GEFfCDMaCTEjkUuRpBiDRG9t1AcboJvaMZy2cMpWq",
  "key1": "3SG7HQffFiiP5rQzbGpr9cxhjfxhuXUNCixc3gjiGyvv9Fn2zEA4V2hogM28QiKAe6u3psWe2wWDixY6o7HGXk8p",
  "key2": "HM7cYVB9RB7s7Z4UuKvEpd5xSrKbrXfkKi23ohGf8xSmcWobYECQvPziAEFUqc3cHqqWz6JSeEGXnGPiVi6kRX4",
  "key3": "4nok9DqNB5DkiFAmFSKHJZQp7EqDS83Sr84phmPUqdShxmJv59X8bJarVGT4txJE8SfGag8zFogvmcfvfoXQhnU7",
  "key4": "2ihkhWytcnkwNCb7gNjWHFr7CPX1yS8z65vSDRHMHQVPgErGkFFrRerVp6WBc1MabbpuSL5joZS5iovg6wk2LCcB",
  "key5": "4aeunj7Ce9eHFEm9SkFe1bTEKJYxdPzyHZZ6ju7bVXbY3vAC2WCYg6RjbtLvU2oYmDV648bZ6yyWrbgkg8WYpuQw",
  "key6": "bEnTMoDCRRKhoZQBb8UyxoCmWsK2rWBr6EK5NQeBCmHQGKk6sTBwAEPK17SVmKN63tS2r65MrSga1USNXa8n1PY",
  "key7": "kFRujz36QtLKTcsnbbqi1HvXnfpyweKqr9g5Gv8UHUpox2S48esjYKYArb288xKxy9J3mt4WZtuAmhkKNcZKsEz",
  "key8": "56vRsGBYEDi5V5ytfpNVBu9fuYc6nVX3gXzqBc3uwnq5tgm6SeFNeSEjiQQvyCinwt5imsgr6QuGUtmsaz9Xy1Jf",
  "key9": "4AyiLryV9VMD7jkPkjnPxfUq1Sj85s237aueVqNXfdn22HLtX5QLGrDinXNC18MGCffAM8S9GGGNNGpUEJRfqEjM",
  "key10": "fhP2fxrzymGnCY5jG6iTTBPQ7m2Zgt88yUgn4suHWyKo7G2Ls7D2YtaL4qz9p6rui1LzRjFoTZhu2Uq1RQg9xPX",
  "key11": "vweNwhrRfUsbpqwxPjPXEUaPKt2hyLuB6KA3b86dy4LYt2g9Bb3baX591HncsobnpfoDQE3cN3VnhtXxrL7gSnT",
  "key12": "36DKsz1VJZZLn23AXFvkUEw9UJzQZ4ShDZP2adSfCXcym9ny83BorBVvJzpNweNYayfnLASNYZg87yiGxfMSz513",
  "key13": "2213v4JJdNtDk5E6bymrPDfUX2StEGErHZXfM5hCDbKF38TrViFcHY7BvRyX9WKL2jE67wkTyZ3Xauhs8RnWFH2y",
  "key14": "4LAX5sEZ6hVtDaXyFmADf4wYXvamnM1X57T9pcWKqPH4rzSrKJLfgg9Jj7HwN6N6cWR3ou3urQsVFMj68qdTgBKL",
  "key15": "41yyNubVNYZx7ZgqgMtLfochawpNY7TbWm5JmgsnFQX4uQxbCFZoFNQaVNeV6CnjA6hMqdKgKsWB7K3XgVRivpUq",
  "key16": "3BmuiqnLKTmPGiCGwNceigAagVB7DDYUswnxJ8hDP21yCKgM9SDeyvxhAzkuSg1LKwvWJx33VPWFfrPcMSxXZn6t",
  "key17": "3sMUPiqKigRGkvDSME4xjprDDnMqszQ8NtiQjJKV5vsKMfj61dG7ScVM8dCSeJLc4G96zRuyPzE8NZDFBZ1dERoi",
  "key18": "5rzdbZrPKrJ7eJNct16tTBd4wZh6XnY7xDGs6KAkyXsQFtRFTHuWHgTqRsA9rY9qN6Xp5au7ZXuiVKgeQwJTGnby",
  "key19": "26mm7854Yc7U1sPvi3QhsnBzEe1ZWJgWcZTfSqHr5qDRjRqTNEhfDpoYT9z6sQGgMC1j7NesD2yTCsTUsV8y9Qe4",
  "key20": "2Zf7rk9odoaPH56r2MRf3EPRR6iPNSKzAm8dAACnP8myeAgTK6H5wFr3veQTZnpm8kiG1TbJd2anhj2f6wC2zESK",
  "key21": "5ZAhdrxLM64VHsNxYN7mZ9gZR7iWxuvz45gNtZkvj5rpuG88uRc4RQZPk5Akq7eXyLWgepjMYYXZ8WXiBvLSzMv5",
  "key22": "5z9Tdqmb8wwBM7rnJT8VaMhAm8BSjoHUeMe9NDozVNbXt2jkeD1FrzDsYwhipS4bFFF66NFCoka7xZxNrFzZyn6r",
  "key23": "jhJrULpQhTSJcQFgSp42VHVKiFnc8LCwLNmu4gVASBx6CvseexKgmgnzJHi27LSbWmQBUwMmNW1V4T8QCgh1LTg",
  "key24": "c3wf9oJ85xFXFmjWHShHtwuVmKCsRHHVnWAEzo2avvEK4UzGbAQyyg9sFvTedzmt7D7Lm4VT196yXkuMd63epEs",
  "key25": "4N4VRgKPid78jJ2BhwiWMJEzwz4xjWhfFbi6beYspEoZZprRCNDPKMiHMbuE6U6JrVP3B57SfuJAVwJUuzumPxKH",
  "key26": "427vmUiFQxjEPAZAwNmtZpZzZCNgWFJx2ohPmQByEyPvNT1K7s6StMXyj5AnTYCGWU945YLzKX7kbUZy6WcDgZ5w",
  "key27": "49qY8WFoAzqX72puNo3KXevHVTmRfd5i8UjB8fRgsaYmT4eVZfC46tE6gX3uQ5GdC5ArbNeUqvbBBkG6uV2NGBrq",
  "key28": "5ECs6BEBPpveG8FMkzHLqPs32QcfPw4mYjnddRdnMDsrKX2xT5Hf9QQQNmCGqow4ZF7YZWcG1WbB55pBN3WAAC7H",
  "key29": "pbXXHomBhivv2Eauc7dsee9Zu6C1NwGDguVFEJ8qd7mhQH2NfP3FzPH5EfhTDwZp7WQc9xEU1MdohNcmDi9sZTx",
  "key30": "5cWe4tS5h7kX91X4a1J8T14gY5JAyGEwLy45d4kyzvxZZLHKicXuG4kCMYVcDDPgUYRZXRD57QuNta4qsq6bmdYY",
  "key31": "5zborfVsCocqkr9XxTiFJjBav1fWWzNsnFPK3hBbh8ExcbAzBYWYjAWJgKexAU9jDM1bXk573VsZ4fnbFvDeLQXm",
  "key32": "5jmCCfGHgPRyyiN4FwDz98ogFP5oTqy1dLVYsXQpjPKUPMpM7vo1Ub8Sx6t9TYnjTGYUQu65dQZ6MmGDxJHnTBQE",
  "key33": "3Qs2FFnrHQ4UQzCUH7XnwH5mFxP7iGFcDJL8wbV8nzMAnwDhfFhxYLZYfTer3GrqpF2V7UyRpJQXuU1jUqGuAtbc",
  "key34": "5kt9tTeuf9g5tgKKW2n1v2RSXfsM2idXmvtUEi2bm7Qhz65dGuno9fB7v3ZWk6bcec4cCtyEcP6YwW1n5ZuDWSg5",
  "key35": "3vdQkcHWzvbv5h6tEVqASR4LdszBvt5RCB9nabu8pCoBvqyCSxvVkUdxeCWKinna51CkDpk87U9bM87AwkdvRj7b",
  "key36": "4jUzQFDvVTjrRYF6kWTbHSTgoryvq6yE5tr2WYX3BasUTcA6SB58KVc19h6BC7iAcWdAC1xpzinQobrBbwKN68cd",
  "key37": "5j9ByyTEXDNLQ6k6F1jNf8uBUhKgrSw2N1oU26SyCmJ2qq2rHt3hNiM2nLETdKFuR1jYfdjxXT9TnYdxQM3zZoKw",
  "key38": "4i9wt1vtNXGwDDtPS4pknhfPi9xBZ5iE8hn9v7C88SGpoLJzcsEJjREn2Dng3FM5hT2o9ZmoMfNY3zzNJyJCSxZK",
  "key39": "4hk5amotgDnK8MEiYcL5reJEvVDs4SvnwFJkfTcJhTT6GkdG9KdJSFVDa4ffcRNha1UjQ3qKqdZTJmsTb5rqPz9G",
  "key40": "57xR3bQjBdrnJG5hvmv7hNoMDALqqbH2dgdWbPMBQrdfY4eiEdqaejGs4CmQbVtLSq6ZniQinobuSZVWCrixFGib",
  "key41": "4wzjJnEcE3zBhkAcU1sSNwfydWtd8pwhvujRz8YQaS3a5PoHmTRpvUdtt1ZipjrmGfPX2tJK4UseEJmPGFFaW2ky",
  "key42": "65bny42HyG83ihEMZBqJ6ZGJECN2G5QppXNTb8igCNFzAQa67XqWNCq8SwiDMPkZxgeiVdAA1irHWtTEksNvmPd5",
  "key43": "5ErMSxr3EHMg1p1m2zZYRJJpkEAekSgHYSfgBPZtbTd9zT9rSbNrzY7M5Gv3Yq6guLrSPjn6ArVLBXsL4fXsD4Lc",
  "key44": "5VfYzgZQWZScSSor48yKea1tXMYEnK1EeRBhfcMRQt1Db8PP6dMiMQJZwRnkay6z6zvCN1MAeSZBkZ8jew78j251",
  "key45": "3ZRENhHJjqPf5SBnJVTCuqBZrWjzs5gGFfeJVZ2Pp3qRmNerkLmi9KnuQWtwVmBTpT4B7T4VNEkLfBEv4N9S7Er4"
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
