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
    "4guDumMx8Qvph7qrwQNCdmfhM7fVpbwebrzmqQC853mGwhHwqopJhm53FYAzaoJAdxAUAZ1fUvGTkdy2T9iNGmwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CgFZKgZ8BZUNvSLPRGJSa5wFNAwEnEoP5JdX2242hm4vKNCoxjoCkeqfBTBZBgm9D5LYZGXuELkkeGrP42GXMn",
  "key1": "4XF3QtyRq4ak8rw2xU4AuR4JcWxRPSbiC6Asqbiynt5h2cH9LkjzHqewv6DkXkFei33dYetkH7cB5BJmFbuDYjhT",
  "key2": "6136ikiCgxs6HEWDAP5SToEjcPNf2bZoUDyxBEnaCAGv9pwd8FaTjLFCnmiQ4b8z1s9t31DSysFByHWdmcw5jFgF",
  "key3": "W3kR4ZiPy6fZbnvFDGrEfqdX5HXMfhd39N2rzVr2PEmRm1BMytfXKRKHJjf9teK92PDFzcjZNsfJVhhGNzQCgUs",
  "key4": "2cRDCvnVUKZ4bwVeyZz7bk47ibyzqkn3C7WvhxSAnBq3qvEgd13GfXqk3AyQ1XMZdyLayksCq7vyCrFS4aFTTHh",
  "key5": "2d5DeYnsnyp4xZxF4JJfAYyQ5tF1Nvy2QnboMrKSAKTAr8MtoQhTX92YnaTCQCewAqjYeshwYBRzHvjLg54vRQSP",
  "key6": "2sXocTwGekR2cLu52KdNYXwkStJ2mkDRtGiyD4ZcmTfkj59jkaobS8yX2uiqecFG84Q6pRx6zvnf4xqCCcYRKAp2",
  "key7": "2tqCkziHkpzobSQRVX5XMRLTmEXyiGYhVemFTVqbQNDQy5otN3ouQG61qPm5CLs3aRBgWSe4CaNAecVgzQvpbrnV",
  "key8": "5bXG3BdWGYN15N9SHBE7L4TqASHzx75zJMNnis9TkXx4VX4zyfGyXKRyo6mjmPvrm2ofQvu6xSTpmqFzFR3cJ1uM",
  "key9": "NiDt9ifF5HY8Z6bV9Psm1qhR2HaA6zEFwLSiV9vtH6NBJ9vLE7ZV5ZedbbAB5XteknfpyiZiFQr6RuhgSusZVS5",
  "key10": "36WJ2TkExHiS1ao76FH7W18e3pRC1nbfHMU34hxBwxajut6WzpwTRzWhmbUQKS5ZQaFmE3MJpMSVNEKvpvjfV3fA",
  "key11": "3eUiTHJcp3jfB1YFAS7FrosfJTN4uTZs8DtYYZk3nCgcvidCGpTZtTZprPuCufWMVB11ViwzeZfxBnrA3nU8z1BZ",
  "key12": "5Nk8gsjfeciWv9452eXdnrYDU3tiMMLgz1sAgrfnPNibocCZud7hcd1VQT3vfJ3Pi8MnKWFdSmqbpDMWy4XLTcbY",
  "key13": "cE76MNJk6Ewn85aJiuxskgxF7rjoeGgGMaxE86J5oWbrP26FVP4bKcEgSH9vq1UwCqwKTJwzLeCjJNGNspy4zrN",
  "key14": "ARAT8SKGVicAhYpkAHanqhqsGkHHp4gtiVRwzr8EA5K5prEnepDZyiWfegiaDnnZaqn46Ch5tD4maem9m7bqysw",
  "key15": "57Re73tGbCs5f9MWYB3WpTUypg7BhqeHY651er2np2UzJeJrHgQQs2p2esjShWMFiVuaJ5JDL6BVBDqwng21j2A",
  "key16": "46Lcj3NBfe6SgWZwJrB6hXLeHThyy9yoqkDStEHGTVqyAJBaddr2pjstRNyEZR3p91QRn4Y1kDEVssZmmWoY8QUW",
  "key17": "5V4gX3krbWBY36EVsniixj1GfUwRSfu3HynKC8BCkr6ZreoHjZtXtBvVFAYxpeyFXFGiEpSbTeYkmMeegtxGwajp",
  "key18": "62iLCJu81gTrdjQLSWMr9XxNTxsjY6jWur61VvprDac3tAsg6Dvb8ofddVLM4mcHFu3qSQEq8mhDoFErWXUy3NeM",
  "key19": "52Jd7FNwRYcuXnaz11kCsNFPVz2xNeNKXkze3gxu3AB13zEdCknTQBftPDw1Hz9LtJ1ftDx6gUTtt27FuxALsjw4",
  "key20": "5LM2jLZT6dxnyxST5CTwJtPvFXYaZmqz2a9jPpbh4kaU634VfSEKdb9fYFkemWdwneMb5iyGbgmxib6xZWVbpFw9",
  "key21": "42xYmwjrizCefJJwLE8d7acdC5BCstFa1R377N6knPCdeiejMx4rA7eSnJvRFhsi27suevqgh5tfo4MX6nRmwZSU",
  "key22": "2mwYLDrvtK7HA3tCFgCpY6qLRUZeLsDLHWQY6kWQi1so6bukyUvWnGaE8GuYwefYLSnyMadYuALa8Fj5MEyoHQWc",
  "key23": "3ncRSamR9fJ3BKFVJnSZxTmWoz3F1EFgH56iMbUQUbiHuZCumnNYVdYg7m5yyeJm1XSzDcsXEZHQbPyBaNMcYq1C",
  "key24": "5EbNRHNNpn2Qnq1PpvPq6UVcdGqMWAAT9kQ48oGW5G2UXR2eJSf1Uc8RKNGWGLbE3L623tVrrFz8KPSbwT8KqZSW",
  "key25": "2LW4USwiSiVbhUtnmH3JPNsShKJ8ewm3MmsvE5bM5KwxoDAjK83Q5Yfoq7MdHphCFmXHyQFEULCvxvLTMuHk2T14",
  "key26": "2zSLZznJy83eKgMBpu63YuLiAjkiBPyxYm2C32A8e48eNVzZxq6iZa9ZKFuyNsfxPpRWEFCs67RVKFTSHoMkWi65",
  "key27": "oUSnq9nZumdJqViwwrErLq5rnd5CyGx2foWoKTKUnHrP4kKKJcoyBTsrvUup5EbGZ2hse1EAbuhtJ9Ufr1A9BrH",
  "key28": "66p1n6cMQv9LCBBeVfxvRgZnQ53RZBH6K9R9LSovZoMwGg8ZA54f74fevp8x3rZi3mNQt9VjBWBx3mcqHj9et5Ta",
  "key29": "2GqywbWiXQnbsP4sQGGDAHL66akDXgNX3zXKmwZy6AUyGtzirKwDhSY27QxjSqjQQaheQcSQmKCq6XwXHMraDKDg",
  "key30": "28RKQwUdcjZxxkNf1QgUNADXjMog5D9kPxyirBkJGoPwcTyMDffpeQxNydPishFD891ovbAnABJcwpiUFB4zhoDy",
  "key31": "3ByAbJnEUUNwnzfxgrhbSEu6swvLoJU1EAofiaDA9hHspfV3pVPKUi9YZEHXzGXKsgQi37E2JPQxNUpzxm5dvFSn",
  "key32": "4y3xsZL6nivLs15mA3uXyL8Ygh9mwmj4zZKhrE3N7o4gUwJtXqUHoiu8hXpbEjvt8NhYPNsdWgnTmecUx8pZttuR",
  "key33": "4Cy6yf2ZXuBS2TeGoCr2MtpH9ZS4LamhensL3cJrCHaWz9cYWbva8uiDKukNKnZ2BkhLPKXGwEkyybbZhokF3XZ1",
  "key34": "3W9uY5vW5af9rKJdosJexPkQSfRETeJmWYkDsunY8YfnybSUEtbhQ2zWnVuMDxgMk2CrZbZ4LDKenvhNpvKqnCJr",
  "key35": "4Wg1U23dstMfWeLAfqem8eYLwdVZve9FPF6LhdShgDXuWJi3bVQKndSDuXgo4U3LqCQTiDWx1VfqayE9A7P6eqKG",
  "key36": "3bmC1hDoseoxm9FscGpWhPTPehtxAZMYQD7dZavHLvpkwb9uG8cstqMqrZ2wcA41dMd4MjvbPpTE5yJXEbnYbzzq",
  "key37": "2v3ztDiuEoyzKWvsyD32XmTRndnXscp6GnjgE1Dr1wrG6ud7UexSiTM9Tje735qht6y4Mz4s9y8T4AXGt1TsrfHE",
  "key38": "FwY99sCaGVcg5fjH92y4evKnsnvpdoHTgjDDkTtSgAf3PchpLagWZkCUPm9Hd1UY2bb8qXeHUqcFviSctEuJdAQ",
  "key39": "4R2DkvJNaV7j599vWQh8w9Rsgv5xoPxSmHSz8urWU88sKnBnuXfWdzVZGWTcT41vRiiaqcHQVDRpEucCE93Zi9BF",
  "key40": "4PoUn6khkjz9K3RRgP2L3gDTp1DDr3J1PnBswRecLanbvqnva2iYpzp1RrtAm2mPiu1yUqyAQKGsJ3jhAhFetwPh",
  "key41": "5btu8srxgeKJGKovmUFVpGizxHtyjY4XU5Nqz1QaiCxGqvCj2gEVXhyrWmRsZVvhmhmzmRHmYz2G1eW3QXbXtSQ3",
  "key42": "3KZCs8hKLXr9i9E6nw5KN9mr1xNxd3e8GdrYiJ6DyYFKXMCa8q5664xtVecnUqtF6NyJPWPkShMt8xUqGZNn8ov1",
  "key43": "5v4aKUh1mcTpa3WQ5r3QrHuYkymyj2XiWUfPPYh4upicfgZogaYgty6JzafPgSsfYH2292n7uXzQcwt7hXU1Zvgi"
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
