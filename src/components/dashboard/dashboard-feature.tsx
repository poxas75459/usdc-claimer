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
    "4yxJfXHZXaArkvo4JZdtKrQt7JwyRZQimK5GwpHgQBNk7gtm6eokJDaGMEPgzwcwvgatZX29GWv1mTaX41kJT4ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8Q2zYg9z1SCvfjqX6HKwSpa7tv5BHce5Zz3LqiMVYdX9ZWnumMBnLnVxtxv2cwshWr96ChLVWtxDEfvMuDYnzN",
  "key1": "5d48AyEJLakB8d74wyK6g8geKMjHcao9PdRy7HagxpGrqnUjyh9jmBFbcD1eDUZhz2i1cmfatG2s9QaNwgKYF36r",
  "key2": "VscdhGextyttz9rVWz3W7HgkR9TXLXstXYNDAX18zxDVVYHiDBqJKJW1cyFkg7R7VEs9MXQUC5aPN4j1SDQc7zn",
  "key3": "3rzJaZRFR65xvTrKSZjoRNZ5NwX6y9csRySd3j6jeu63yu2qraQhrSNqAUQg5cGZYJ44TdRmecdWwqe55KuaCEgs",
  "key4": "musZMERuoXNryj87aYXGWyhvPzWk6TTR8FKuT9qJeeah7Cu1qAY2xkqjBbfjJoe3JCBRzfSwG2e2aF1f6C6v5SC",
  "key5": "2CssEi5Z3nE6UkBWmj5NS11FJ3Ux8xfRRR427UKMrnMSNwLPuAxS3EBHieKYtd7SfiqfgEquCUzyFGgMYuHfvgPo",
  "key6": "sJiKn6p6uAjes3rVEjvVoDaYYrTdoBYe471C6LeBKAGjhfU1aSGJiaF7LKkCRZQDXrfC8Fqc8sY8QV2Fz5upNsS",
  "key7": "23hWaXduts3RJjemXBJfJnhwhUBUcNC2cf7vuEur2GVqMDjsCoSnhbtKuFsydEyRjtwbSVpjjYpWWzJJC8Jjvvfv",
  "key8": "xe7Bd9PahxrHRcngVp9TiXFAYRJ4hwtko1BtW5EvvSqf46zPN4aBfz4JCqZcdxUZFuq5rHKoYccsfYRSmarhL7s",
  "key9": "4NahDG2gFqxnrEdWGrH5MfAzpJ5ZQNVewbP2ER3EYEWf1ozoHmh6qNyULPv6Cq1RT5yapcydBXtJJb77U7HCaiik",
  "key10": "3gFVk6nKmMScwFBqPqFy484YdosNUcGHUsKTvANfNGtDYwoe4fFWa1wF5YN83kTjMLrXAnRUrgCqESttq3rrEzTd",
  "key11": "3iS75dMMrg8SBbbpGYwGh1S8XrpGwSpYTDjadiSe84dmhkNGvXoUidBf9meGCZkxtkd8nZr3nLTabvwN6eeYyUGB",
  "key12": "2Wq95BXMkoqNZQCCg78wUgex8F5tW6VA6WvBuqTSWcyVSWYbDiT9Xsm6ZrqMDhVffys2xCg5vwE2Yo1whbwjhvCF",
  "key13": "4c3Du5BRydm7xkmi3KKR1XvvEUwL9NrqRvkzKrRcG2Ja8Uf2oKstaWiJv7BextQpveP6uQ19nZNLwx7Fxyhw78RK",
  "key14": "3m9SXq38DncV42BLvcWa65MWhG34DPpSDBTKbzcbdAgjQ7hLsNtbiPrBSALNCYdb2wfSmKZcMr8F9c876Q8zTdDf",
  "key15": "4s9fBvgHa5xrJk1Wap83p5Aok5jaeKnBgz9vXrNR7EsTFZuDoWWb68V3ogxJNqxkvu7vTcCaxURzJA16DfvhR2pa",
  "key16": "3UHXjSGiBeaX6s8KBgKUP6kprkqRmPQYtxxU8JKnqNQij8po2VCrVEqAQFw2pG449oCouXzBByEWqeNTiY23Ev1n",
  "key17": "5HPaT9JAYS1Q5y4XAFHXS1Nn44mWyDafwVAtNMVpyHRcBLT8jtSabPsVmVv8DbxQ8jZUrqJEfXmMcTiXSapEXEBe",
  "key18": "46EWJtRZ2Rpx6JS1MM4A3XTEYiKnRkaZcUh1RF2QGkshPk6eu6Jt4tFiP65FBieLum6Tgg4TJbDRoiHYUYCPGHvK",
  "key19": "5G5oVzay9L3sJvLePPjCprRMNJpamuE6RGDyu8Rjz4bazJ2NsYUnL14o93SV6xaWusg6tUXVTupFooyaP31rGSox",
  "key20": "5TzL9CnEUGhyJ8ukkKSMdkxFjXieYS58q9EBX8XykVgyutMxPLwx7vJ3Jpi5hTBH8YfQb3fMpUuho4BsGuskRS2Y",
  "key21": "3ehFkMsEEiqbadCRhEbyWXzFtoKpeYT13cTzB7XM2kHKGUSwPRgzZGJgHPts9AN1LZKxaE39sydKt6b3U3NgGgCc",
  "key22": "5FLzm7FSxtWDSLhsDRD9iffNb1zyAXwEyNYy1cbVRFc17c2LCurUXMrdMq7BYDDhPFzNCtx9NcqazxNEcY1rjJFJ",
  "key23": "3vuXCsroFUZ6q4ZnJ9BiGhgZSjoSBuKaDfBsmV6EkZzvk3ajjDjWVf7q2vpU5Cb63stjd37ssKdD2g7J3tgteGnM",
  "key24": "3bE1VAViFwyiKwHj9WmXgyePbBcdCbQ5XSrCaFgohBJgR3VTuECMmGzXKzTb8SCz91d46tSzMTQGwVX8iscaumtR",
  "key25": "5vWU58MVKFFMQTRMoWY9RfyZDmZYXLE68DfifvQoucpZH1XCorLSVL7QBVvRd2jF386AhHR15TW1EVV5WUz5GsNs",
  "key26": "5HBimrmtXRusSTRyMjn5hwNPHLqWid31yaJee9MiRydysUWF7JvtZWeYdSpZ8wKHKNRSLMFEVddD4y3JWvR5J7dm",
  "key27": "2K54YxnCjqQVnUHe6jkDEjnp2gRZgY3r6r1HG1Q6o5LeHZEwF9ShpmSJkgUzLPwuxehTU9GuJD2TGs4PWhxwKVCu",
  "key28": "5Mdnyw7br6HB9m5smwkmzD53btcqovt5JehmLuSHxhif47NsqnqYeh5PmCGRmu5NSUYwCUC3g95Es7jSyVbHyn8H",
  "key29": "2DcSU71KupUdTj3B9ohdtE9Bvbk3XRkdG7M221ic7CaHViQjeGAxc8bKHChm3gN7rb7xXhkkkJNf818NSptVaoHR",
  "key30": "3D5wvygKNQRor3LZSH5LqD71XHH7M5Jrte3Sw1NWfAoqTvbsWM9EeFfxWZQSXLxvb3UqVsHRdDnv4U3E5C4iTVif",
  "key31": "zTU5rSJnx1BTs8wMQ99EExbCg25jNbCZjRM8FhWvt7FxjKQMSfHYxYFQ7neiUkjGtKq6sXDVsxca3NJoZ1fr3Zs",
  "key32": "3N2QwQZRp5hujYwPdEK1dPpAdD4GLaZpFLaUP6vCmDafRk5bCiKLYNFk5cd8jFu17TUAbsS6VehrxvFhncUEZAgy",
  "key33": "5e4oGqNiScxup3srHodZEDzGNewNedaFg8CRESYwbtqHx9JLMwK6XfY5tGd4sWYwSKdq3aBgRVJh5j2ybH4eBW7",
  "key34": "3muU2jJBTkM98J1Kcz3p8sveCBuNPxkgkTwH7dkeCN5j6w1iaCMP8UF35Qb51vKQqLTXShy3C7jEDJvnEVUdB37q",
  "key35": "3gbQDeCvxUhosRaKrcS4RgRQXtp9USb57vnJfwJ2N4Vmpu6yD5Kvj8uc9xXg4g8RgbGbkfihPtLp6A5orjEeJNdu",
  "key36": "3iF9wduEXq9o4n4AMq6XJzPJ1e73W4TrXY4E3XytiP9KSv39DgShBmoPBMMuzWUaGNX79443ZjCT16w1bfVpLCin",
  "key37": "3yQRXRSxDqkiT4tHePyk5sCDjyE8pav344UQef76a1KLjfqXwSrX7akpnzcBBCjz2abbC5CSEETGQLC4ZRmVpoe9"
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
