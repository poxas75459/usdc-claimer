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
    "CV5TAH3ZtyXZk7U4jro1qgXRM84m62hYQearQN7qMXuM1iJ7SLs64Mom1JvNyWvT1H717w4hQvgdzyGYgsamkQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HcTJGJVAjw8drMDKibF2GYeo6ts11eSXKLNDV4oMLjExS5vAw4eL9mubsETsTiBXZxX1EnVaWbqcDTbi4bPwnd",
  "key1": "2yZnCpg3aSzmC4XNX9i558EsuuboKZtwpaQEPJztw6cNSdXMcRfnE5pjiRBFCDwhq3xxxiMFSUrB1Lo7Gqkf8fCq",
  "key2": "59TimaBgWb6JUoBkV5DGUhy5cUpySAUNESttvx7NCiQ3ZWVdpFgzXCvZG1gn6qp3LRr2UJyXvgTRwo1r5qDwPB21",
  "key3": "4cPyuoNLHB3FCsuFaXKresegFDb4Fh91uEkC3J6yx74rJ5UnyH68nDzgb4Mu1W2sg15osmZsiJD7Yv4PqyLwwg1v",
  "key4": "Lv7VJA6cw7GeWGpWpaGcN9T8HRwtEHt3etwKDyFndZV4UamCBfCYz4EPijgQGR5gBgBNwxgGY36kcLw7xEa9CS3",
  "key5": "f52jBQKGBKD2Fi1h5BRBpiAeXcou2ugonGD5C36DyA1kTSmeo93Nit2nagXd2mLXqYY3CT1yA96h87A8hUk9xg2",
  "key6": "2ADC3zcBNYf1TR8JQQxGQxyf9pj34712hhAscshqoi38XyFEtpRYUwW9LPoqQWh3nSL6Uu9BPgJQhA7tZRL5qFuZ",
  "key7": "2jqQopjGEaetjZS3cTt7TDrnRNZ7wUbxBewQ3eQkGG7vYLTTFoLhqe6bU3Z8zm8g12mTPyXFRcEtxyRFZoPWrWts",
  "key8": "2FydDcyMfBP36VrzQEvJVgCzrFSBapzhsaRKn3Ry3D5kztjEcMxYd46s5xXV2c918C17bsqrg97oEL3BH8N8Q27U",
  "key9": "YLjPnuCUx8Nc3tJB18uBvUapGg2f4C5oGcCMh3PixLWqSAvx78GeFhV19C5gV3BCqKEncV19wcfoFHn77tuMn9A",
  "key10": "2br9ULE9VscU4urtPKAbxQiW2bLFo4uswVsdK6ZHGz76KNZn9SK95MZggcrv6dTkY5tz9Af5WqwsTTwC9vnQrUSb",
  "key11": "32ihfonAeH2kFtKbVvy1wm43zb7S9XcgKu7EM5fmX22mAmWzK6WtngsaKhvhNznzx1PiiaixPwyLPJU6ntFCdCZ2",
  "key12": "53Q2J7uYJdTPbo1joraHS71bC9toVXfwv5gmeczipkXEhqpDzrR56N6YWGkQsiTQgPv7hUqeQjCajwTPMUMVYfXz",
  "key13": "4GAev6FGeBdZDhYSPy3rnSzktdUEyCY5ARq9abT4fkwWsf1My2Rs5GEpFTAZbeYqBrW8Ui3g83uh9byyeCD9WPNj",
  "key14": "4v7JpRxpE7Y3V9a2zMddiqMtTrjXXVst1y1QhFhM2K1V16SsszF6X6k4fZ4qvFodsaBEkbXhySTf5Wb3YPGqGTTn",
  "key15": "3w7tcxYxM1iXHvxphnnThHFWVbk1b7C8x3Hd69jWg5yw85NpqjgDaVAKFdTocjCBGeKv141oPQPwTMeuxuspDsbC",
  "key16": "5jGiUzS4xdr3PX5oUcSmmHSWJkhdUh3ajUQdNBhsxM7EpEKdJvoi5PdjVnhcEAzGmrXpzGvvAKwmZdBtXjuWLXLm",
  "key17": "3eZqptY14T1CpAKc5ssrV1jM4EB9BPjBVpTKVfefUA4q5xSbZMAWEgVX9Lv4eFEZHJGqgye5qHPHHhZvmLpKdrn3",
  "key18": "217XVy7vx5GgjZVLDE1hS2Mqicu2uN7TKcqVZLctjV4rATPQH68ArZNDvwFHhUGBM4iHQnSh43GBSXe1inXYP8gB",
  "key19": "2wUujhggRy72L5WMEp43gkh3hb9XJqBQZnkAnnUpxkc5vVyw4dftDLYcQQpcjiwGf2VnJZufJE67wAoxHZD2kyvz",
  "key20": "41AcqpE2XuLyfjVUknybqDJHrm9AGL2WFED7ePBzKSWm8kQX5bDccszLfiSAiak677hawSwhkwF7SxEqEM42fz8q",
  "key21": "4wBNrmUVHhF9khZkA1yBY1hQSeaZsBnY1Y86UN5jbCQ6ZQLRCkJN2bfnVMcrAqPQudW4GEcSjX7zrg3JzSUYRuno",
  "key22": "5gAYxtabvwjKM87bwUvgDxPWHkQFJHfymSpiLPoD2NbRMX2VnkWmJj6KNJ7R96Jwror1CGbrP2eB43MbSKYZVgUQ",
  "key23": "3wfMjs6i9xz9LXBJdpywxfJB6ZzAEkMKVZPE37dYGCSCzxoovfC4apWcLjagHJMuYVcYApZsySZAn2Ar9MGXRtMh",
  "key24": "5LVvPE9RmjHWedQ1zPaAQQ8m5HBoz2gjRcokyFmJARzaDVY8vZF2LcuNmh7PHCwkeDBCcWYNECUKauohiv3tsiVy",
  "key25": "4Jab99Br8a654jKtoeCCsZ4KCftuHA2smBBD5M1T9heYamoY459kshAVYRz4MbxNt8nepAtZcBSY2WMYnXwt1fqp",
  "key26": "62nvWhAp4mtsrbX4LDPgFo1qhXWN4NU5hcZyYnp6ud8mgU9onc5p8JhdP8cvtn2NjvMvGjxWxYkA9wd2Fj4EDmd9",
  "key27": "4xDom7X9FJ4mkUc3yjL3oSbmtkyhx94ULto6FX6vpLsmo7zJxBGrkjm9xpQYHyZ8mjznnGb6r9vdp46nS4Vwd7J1",
  "key28": "2Z3nJ6v3hpB3Dxxt57Khi1YqdMuvtQCBFNtx4XGy4rCci5ueJFkGFBgkAisJJq8wAcXbW1Xto27MXrv7UheKqf5i",
  "key29": "31VkBj7sNDH921aVSSDRXgAweAb6YTHkamCmWzZJDMqgsu73VH2rDctZC7YKA5MMzpR41VY7stXzGzZSJX9qSRUw",
  "key30": "nbxDR7CkLB9UDF9rNGJsrgLau4Rb5hFgR8LVbqoZA6N6QJqZd8PjUGmNfXXYzyYdPJuR31w9cZsHYQ4AWC82bk1",
  "key31": "5wU6JqgcbpxAwKPjD4EpwKnauPAwCs5HiDoBcjqzCiwbx6mqyVH9NMsxekv1mYaWoNYZeXpjWN7U2ExUFbX6gsmf",
  "key32": "5xGTcXw5HifFSyFbjcP5xLXvgHZm4Miw2ixRJvtCAMKHaVerDzFRHEygYkPEzt6SV2Aez8mfbpVgJLEGgjZgt4Sk",
  "key33": "2mxbg9HkzcjD5ToqdA4BZNu6jF6tKPAUiPkPc11R21zH7aRVBiACnhmDSCztktWmKW9Wq8fh4twAPYLkAbLYjSEw"
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
