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
    "ekNhKKr9BZRP6YQTzeGbBMctVRy5AY5yREnb87gbn27azAVvGXBBQZngV8RDtjpHQpPSRuQvHjvNh2AX18xSqtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhQ43ZggqpP4UGgA8kjtCc5PxKsSJWKwmiEu3EvcSrqf1eVVF4biASodb6nj7jN94ks6AfcbkEqa6n5mSrTWuUn",
  "key1": "21MeDd2LuD19GGmjW6e87A8RZ5bccoKefuabd9iUVEg1WGJtUA9ThxjyxMQvphx18kXMngfKMxqwDx9R25KF3Wef",
  "key2": "4kpCeW71n3qrifLZxUqBDwEh1oLhM81AWfm9GMdkeEnwqHvxw73VnDi4RKdrabvojwq3hQpU8JubR8x1kCUub3k3",
  "key3": "4qQ5zCjmqvymLGsJSQ2QuJmR3A5imxZS2XK6yB3bFgrCCjPFmV89a5FKPfCCoGdFkvZ6amyFQPtiPoy8MqDBktj8",
  "key4": "2WhnbytL5GW2AvcobFQFvoE9swKVSN9WhMddQT8aPFQXJ8RTJvuY8EWkkJ7Ez3xiSVjRHptogUm2o99qr4yYsVmW",
  "key5": "2TXDNFdF5ocy46k8qsyxHeSHxg1fZF1gzshH6rqNUTVWsf3Kya7P3j8HBaYMKK1WJgM4LLhovvsPoQgR4W1N4cEm",
  "key6": "2TWvNd3jCF8Jy9t3bnE1nrS2YsrrbnBdQiCFNPg7pehUVL5JjNzspH69bdRv8S8gehdKuNYdv9q7M1PBvoicmnje",
  "key7": "2Xpyo13zQdthTHjNVtHcUtpwsCxbt7DRW7to4LvcLUcBLPwuKTYsieeZT2trrAKFQRhmCByu9S6kYXYkJExrUoeH",
  "key8": "2UQ9Cb3sXtBo5UcuLwaUQSCN7ub2nbtyCNT1J4GXVMonQPFwWsGmfUrAJhnBMLWmQxWT7bw7tWPjXD6KE31jM9zJ",
  "key9": "5mwdT2AF92qxfiDULHbrxwV2DZmW91mjK3TJRv91Gd9tnfDhGnwdjwfABzaVAGqjD2fRiJBx9wZmFTnqVLZbMeQN",
  "key10": "63TXaEoV1ERdLZgSqhAWqhJJF5FW6ZgUVXNinX19JiTzYUpshhxTfhd1nFBMim8fr8fJWpfjEa4EBN3f11TwQFVP",
  "key11": "4KCez3Zn1yLGTkQw7XAk9UpcQJfN5wxeVzukkzUrbhpw3pLTbMPZ9fCHAdjgWpCWGVojmHC4AtvrqnstjE4ADyDE",
  "key12": "2yupoFH44uHVQKmxoMRdggeYrGPWspvz6Uvi2yoKYjBxT8PnDbRK3GK3nCVo79FGV1YnEikwr5xz2Vg4gvsn5Gte",
  "key13": "3C1gsgJQVbPLvBgzScJ74x2w9oJNMe7Kf6m71ZjzXMZtrQDAV7BFeDED1Fa1wf6yQUVS4CgTXysybCdmWm7jrpEk",
  "key14": "28Nadwqn5wvHVMaeYLuS6nVsPVT5nKcbtnbPdE3fvfa8jkjCUGddJ6bbbxWgk3YoQ145MxJgaKRW9Aokaw6wcuWr",
  "key15": "3mnriz4N1yDtgkeoRkqZoaFxsQrXVgWh6iHi39CHHnACzF3GtesMYfjvZG7KuGsUZuGkvz87n6ZEtawtzKptmohL",
  "key16": "3JcTYhhzLBePtgbEWcncPDGtbM66gBiySZFQZgGDmLt2hhKQiMwadoGYUkd5mANUPdEbVV8YMqQ4ESoMagoH6FRh",
  "key17": "5J2TQD4vPGn5Pr3nt2x4hkrPVp9PJkvgu6svTw1jheqGjtQNyUPKhEVs7TR99XipnU3tviCG6g32WvXVdj8h1Hu5",
  "key18": "2pAMMCwEz9cQYPx7p11CWd6rGYj9uC45AeGpMo1JZfwNPnxcStfsfXvcxSMCkisBLmHuBQqCnEhjwrMYjWpB3ut3",
  "key19": "2hSJ3D291SXaqGcbxKhY8QePq9VvsSv4ncba8gUXGnvUFptUt554QzLv5KyYN3eyyfq5N1iwHWwfTGKNct3tfDoc",
  "key20": "iuLc1VHQcAvo5dGyQSQRai9v4XzmJ5ZjTdonbqkzTkxj11bwuTosjfJZrgvFDRsjPCdAbZ7vRaHrUPStrYo3m7j",
  "key21": "4kCqJZgma8zVhz3c5GWmZRoLiGUBsM7zWcWs5Wbk319LoerXMcUS2a7YbS9dYfx2iTtFqNepao9xYmfybsJQ6Ju4",
  "key22": "5KgMZRgg6mzeK8bbTe67Bq4EkXpivh8cG491hZTWYpWucmhMnBFwgQgULRwZHL4meXELgzZ6kDZk16YD7rAu9bLi",
  "key23": "28NPtLSRru2QbbcwbnY6PvyhrBiM32Y56eptGKTDWQXj5XzSCNhSuLRZWWnfUwJG8MZfYw1XsPUvR5MFUmJtX9BV",
  "key24": "2zMQJnLPcososbJfhpQt6PHo5YcmvxjtX8qXZWU5wPYykeE5oxf3SVbsSB7sQsP2RdhNFquStctjkLTCNWibKe6f",
  "key25": "4BRo1Xzd6rMP3nE6WnjNQc1DuJffHzkq5nn85yqySt6z5puWpCrchMJHQowqCiGH8XeJcvJkcNJYu8AbEMtq87ea",
  "key26": "4bLyBVAbZAxTbSa3VpNfwXapBhB4DHGC9ahYSyGh7VS5nEqXex1K7HoH3iLeBMAmaQnjTBbSAmmfG3bR9zmLYkNx",
  "key27": "61VcnQzt9oqaocfZvJkX6KVBk8qgbf61FgkQuJK8xXshPJTP6rQxPEa6TzpbbCvgMNfLw3AZ4JEuDBFUSH74iAB",
  "key28": "62RmHdPFaCS41nnLsGha6gYRHKkwY86pg4UTuzS1TG8hdsoZdHiWoxX6XGW6haN7h6cnj4KcVMx8967GHhvQexKd",
  "key29": "2kg8crjyjytMPgUsJUSucwnfHBNUkdHqYU9nhjFdrw6kciwVm6TuoZFC6RuZCqhPfu7ok33bxP1U3LnX1i3phsUW",
  "key30": "3FeC7E7RLJjNraTsGRnJC2Zhr1JvefK4P7rR9KpCdQkrD9psPnbu2kfDmJdDhsobLCzYc44nBGjeB61PjcNw4nPk",
  "key31": "4cUMHCAoDovCSFgwAcctsWb145LrGQcpCDK9oyigWAKJ2njjJApUhiP3JWqx9EhBNMtoGpnZvri57gq71Eg8Lv8J",
  "key32": "2SMXdkPzYxaRLAnu2fevmRmyc2UkpyP3qPtqsUU8wEK7qiPgf1eRoCd7tUQ4Ub3SkHJTUw6kKLTLQhLsnFiZH53V",
  "key33": "K6UhnFKUwJ8jA6DjVdyku2k6wymYbbEo82RqGC5nFr57GA9AjiyXXEKZ5m4vt7JZqoLHLnYmEhYJXedv2ektSQw",
  "key34": "2qyBpedXJocDEsaLSatg38NTi3Mbz3UdRi86CsdWC7X3PrukokyophChkvWDok4W2rs9Gc6oMooSg2RPMyNz8Koa",
  "key35": "5oCf8rj9jqfeH7EgEE374iyTN737sN2GzuMWopT389gLa5vXQJU1h2qB9oGobcXUNmnJY2a1LxWnyQpBSG2Z2iW",
  "key36": "32sGaAHVT9gn9GzwPSeB9Gr8EnwEA35wQaDym22FdEZvB6UrhWqvNiJqFnkgTh4RMhb8XDYP1zx3V2NLNEqtnq8F",
  "key37": "3mqgtqwprR12obhDNmkWB4NffAui2Vo5CERZkfYmjCPqeJv5N4G7GtPbGS5gjcN6jD2WF6RJu3RFHVy4ewbLQows",
  "key38": "2kuPG34Wutz1omFWd3xe14oZsj2R4dBZDEZPr9BKrVzHGiHLQVFhp6PwZYn6GpL6n9aZaE8hukvB7dQKcHo34XBU"
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
