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
    "2pAbW5d9cBjkyGez85BCweg6KTbGTnLbrK6koXkBxMaCzxpW6pphe2XHPWdzw8RsuFxYe3DsrP5TveDR5M8vyHfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55epFKGxJxNuAuSmL6PM6SPf6CJkUkHrnZqJsaiaJB775i6MQY3HxXQnPjSL3tVw1XrvgBqyFQpKcnBS7dstYPf7",
  "key1": "5EGNAn2Dgk8jke7gTw3SoLjF5hnfhJjKwuHtABTehMRt3NpeTYKwWiFWcBaHQuHTTRi7ADqpgnQ1sPV78fhumaX4",
  "key2": "CGfFroPxUnjarqDVohEv9ZVcLijgsWYyvBUwmzkdDKh86a7M5usyTyaJM3ScWrC5pe5Sk2W2J73HtKS8CiqFwhP",
  "key3": "3CpAV4HKgT32eW3hW4W6iKMeHVzSpLKfob4uhyV2FubaFi6UDhHmKXn3f44WewVHnWEwqxYUY64oBKmFBaDhYMAX",
  "key4": "3tNktP35vc1qjC8YHHTJU9Y3AjMLmdW94yuGK864XzBq2cYZke62i5oP9nQfqG2T31e4Fgt7fo3yWtzAf53ZQ1K2",
  "key5": "5CvM7k2VByF1KC3veMo1UvjxyyWndaDGyLvdZKAgjfp4NFzhPsWWWGi721X6ZGYY8GNi5CJhKvkMntALaBe6Fcyj",
  "key6": "27q4wFM9YsnFNhvzyDKPkLe7itrjZXNPnPdhHehEbwJXtSiXLamm9qYo8U3aV5c9KeR9iX8z2YpLgq9jbF3pyviU",
  "key7": "4JWjUZqaVmGsyYAYfiCQ7zUHs8ou8oZfMRS9tqVEDGs5QF58Rkg5RGUQdiuCmcb67uTA8uPrh8WDPrDgqAUhwL8W",
  "key8": "5SLjB3rhV5WGouCiWPjjb4GSDv52VrHT5vE9mQAsUTz8Mb4q3G52NMdXAF7BmkUNWYP4gzfEUnB42MJ3G8Tg4iyk",
  "key9": "2812SdC2oXuC5sfMPtTNih8wSx9fsDvcsiGwwWxS7DQA78quNv18JkMrmLnEFdkLSFpxF1h6qxTLWtRSBBXw8kgH",
  "key10": "2i3KtCLZ6ZY8pn6sYsaWjToZYRGL8WicmQ83TdGNQCzUmxqZ2GF61e2eooFq5kyw5fr5ZKK14zeLA2gPk9YGsZJr",
  "key11": "2QmFviMbHj7Xg9cSSCspVtvXramCYSskFqKEfuQXgPcR3mz3m56dfGw2YttZgGDbnDYMhVbGPoaCSkJ69m4x9dkw",
  "key12": "4J92FG2dAxZFm3UYR61aTMtjo2dc4cizueoz7Zx6oKsqh18ydonEGezLRv4k1xuuU1yD2poJQixSiGuoRSVJqc96",
  "key13": "qEgWYXvarfckQt35ECnvTVwnfYm6VSjsMq7QYRKcRYV2FM7BLKu8Sc7TuMHoxMqPNSEcBuVxcGNmGVQWLJqjLLB",
  "key14": "3AbytNKSwJRTVRf1WQWFkr2vqHBHuuPyGef1xWLztuF5hBW4jtzGrM69ZhXHB6vBFuqGHcessarFmoYA1LDBkCsK",
  "key15": "5YyCpKj9RBBhhiTYgkPRx5yQHqbzWnLRVP8srotNpymEXXHhthcdpbi4Fh49d6vqTZkcptPCXVBy3P9Eb56sAt51",
  "key16": "3Cs8b5ZMSzwoiuq4Gn2yRgHnbASTfv618QpoSmRzP9CzBoZAb89zQvd9x7zx6RTBqQU37tMu5xayRZAsHXot65Zu",
  "key17": "3LdUNVN4HvseU3NaW556MXpsKrNqHwH7F3dsLT1FedCg1aeXoeFfmQ8ut2gCTvMDSmUPzwAXMwx1cw6wprGUBJm3",
  "key18": "2qFg1zPtodM11czyJozWqJmizmySpjAdASWUWU1bcU2Jqco1Kb21nWitFfLeeMjHkJHHgnvwDhUz7J6pZJ7ZPpAc",
  "key19": "3aKCfUCPytBd86V7Tp86FkwS2SEHP7g4qAev2aKYvsZnFxEKCmF3GkijURs5cqsRm7BjZ2drgirkEgE6ELytKVeL",
  "key20": "x8jCSF25D683BjjWT7wabjBqpVwyHyXJpiyXVTc7gvGG3q49KHw1pUuXNDcEF5WHK7ZHNcnPVaDAjqSdZTVxkQu",
  "key21": "2FsKhu2f8sCA8h8K6XL6v7NGYVQy41fSpkimMoNPW3w6gPYu2Xg4E539pv7bUmTPjBqK9Py1eogMpDuBkKsVNUbx",
  "key22": "63y7SCeh8CDnsZkBVupKYQBtAQSGkMF9pJMLnpsWxiSpRYz7t5w6R13CnSpPidYAwpzaTWWGLxUSy3qustQ8yter",
  "key23": "caTBjNHai5YEPufB5LeAqM82LqiTTpGyhCHxe4ukxm9x6bqxDacuCPBY7mnSUP7ReiZTebX9YXA7kSu86ZDm4BP",
  "key24": "3k3g9x3xtLX5yWyKK5zenCC3Bm3nynqeWHLr1DJJRTquCTyY4Pz44FRKKrsgHB64cN9pbS1A6DKBi84ctbvpfkQC",
  "key25": "2oAGXf8KqGwEZYS4vu3xeE5RMwNbFpNPkYmzQHGXZUz2oNkEnWtAZfxCgpmHfksFFGQvAfcr12R1JZZNoyaSVHnE",
  "key26": "2SR7Vg8umCo86W9RqSHkZbXVv5MCatKcUmx2MhQp6SqpqznXJaipmsaihogjYhiTuJTxPAYLvRCktxvoQFHimA1H",
  "key27": "4YA67QvQjQtEVEyg8KWWTRcftUYeJz6YcPD2ssy4ogAGVXvotderoLirK8DRyiGxbSzQMEPpfUojmboVmxRiYCcZ",
  "key28": "4838RqfD849JnyoHgjJd3FyobyipxjmWGivymCea4TfQqvUhbFmV3NtdmYBxrTrQSyyz5jMJxE4QvvQ6nNt3zJyd",
  "key29": "QSkjWC8FFTJDxfVvqJebCgnnk4QAba8hEBwizyW8fjjA54yVupdjHr6LqMdL5KJk5RGarK6aKuohQVj1EZiydQR",
  "key30": "3pfpnxe8cGitLXDVAtgKzLmn9vtdteHDidrdRs3a28QXFvzPV5vU4m2MYq2xe1ojmPtLGFfwahBSgbRJLvatUQ3H",
  "key31": "2xRgW4QDNzfaF1cKx7YqXzjuj6YHmwUQ5EY29LifCfTvXjCAQn4j1LLcDWZe89B6yDd6TBfoaonzKKH2XG6Z8UUb",
  "key32": "5rYD33tqBQJyc7iyKFZojV9eDQMyvJMsf4YF16xvThjTVbijCHopuRceY7RGBMzN1agAhHXdtWnirdFbqcksc7Zj",
  "key33": "3L76y7PBhpQR4pC4xbu5UZLScHxYaNjxsNqeszWk5syRcK2pLcsuZz3qu54v4HDGffqiXKHQVhDXX628NzaMC5Bo",
  "key34": "4fMZXYtoZ4zJSSFFj16S9VKz5qMWnS9JCg4FfKf7Hg69yDUrwCbhkPTEWPNnMvqt9YgsRqRLKVygj2yX3ByfY2yA",
  "key35": "354iCfGxyNFG3cf7KjdtC3pKQZxWNDwQGdhPAhrQZQQezcbzxpyuKUqh8NvzNZGN4wL3cbrEJjCScXiPmb2dCdKd",
  "key36": "5HGmi1PnfvrDbfn6zFC3jHg6YWVWuZex3kC6aG2BFE465yh9Dp2Rhq2vhy9vZBarb16yrJ5tAAJ4UMCUKYAPBSwh",
  "key37": "4kQXZYpxzasKhXjzAaQ6yPfDLfP1fcC7BB8HcAViDgtCuW52iiPDEHQHSG1SEgZ2sTTrhq1b56gy57etkcnh3LcF",
  "key38": "5yRoZbBBvszmR4tYNTX2ExkLSiXdm4haiQ2Zr2vYsKatJNKtjcz5riaLknUvZs8eJu6ePfybEQAUjR8g25M5MEfY",
  "key39": "SzDwsWC29oRaBdNyFnCdGupn3Q76bYCXKNzj96Gh68r3Zq2kA2wSxdv54LCaWX5rzMsE4swxwCMjeGn9nhiF1Js",
  "key40": "2PGvQj5crYXjonVVEu9uq64UtURRKTzYrPqk76dnmuoRFy4oLNsZhAQEx72sxxYWayNmtwxYBKKxTUvf4nZzrqtf",
  "key41": "4RDqPpqF6bMSRZXaedJNpqkPAKiXE9UahkhYX5zwKuE1CQa147kBgJXUAWhWymGobiTpntBMJyjThDeuBbPifqrd",
  "key42": "3gtgt8wsQLgdeube4Er5sGjjfMCEd7mNNkSDJysSKv4Pwos9ujMuUXGM5c1YFVimWmQdPpz8QoyPoYBmJMwTgmmb",
  "key43": "Rii2EJ4rtN2Hd6jLgNWzs17MSPQbjht98v59KGLSHQPayXL3Xr6T1fykaippG3owPNAaaedvV8sVtgHQU83pYYz",
  "key44": "3YiXSYtHspYiRg7ajK68t8sxkqptX6azD2TspWjE9Y4RyGsQFZs7fxuDjWWjitEoyJK9xqnjCmDJoeXJjBD8T25i",
  "key45": "65BEcp4wSEJrkaDAZN9jxPJqWepz7G2DXkSQEoKBPvb3GMDAc5SnJKjJ67DnnEivZEQBS4iCVpsHrXAkZYzCnZ7x",
  "key46": "57sKpbc8m32K2xy7EZpoXMLEPSyJmEz5uhkNSAzPVUQtjFrn613sgr6tkasBW8rjCNEp3dMKyBRLcVkBKoBRpQtE",
  "key47": "dxe2tb8wvbV8iQPwXvZbGu8bpwFwPpYQr4exiEuVs9x42ZcYnZbkznQ4qji3U6HsbqNBd1GKHh7Er9QS1ZVD34U",
  "key48": "pYFFeJQGqQy3pq4yr8AtbAnrJaR2hESGtYBXX6qzY47pSKkbRRnf2YRegz82R5TJLKNtEui96rrdsU9m1MVmXt2",
  "key49": "KyAHkNtyWKWTk1S1cHiZny1tgZgSfqiserf7WYhAVf9sYSMdosojJa4w3aoTcSYmaywAfs9UJL7ZXWE5A4CXaXK"
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
