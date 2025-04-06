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
    "2VZJowWxau5GujUnLRCyk1HsPKA94jbiYtBFyd3HbzTK4zepaqsSsXGFGKMfEcTHQXJqufR47y5Seq8mztHjWQwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBXHvNFniEB9bu8SyhNu7TwLmqgVVEnKjyBSyTkWRXRAgLKxnoDgE9dGngNME3mYcoCYjknL2ADvZ4kjCwYiPzc",
  "key1": "4VF4Bv3rM2JakYHCVeizqL4UY9MsyHZunwTFf8asviDdhHhzbaqAQ2UUfeEqaHRwSro6CZPQG6Fb31puorazFD39",
  "key2": "3brd5fUXKe8tProSLMKweUhDZz1xrZhpmK6nvq8YzGTvsaLu6h3EyHJ5GmLzZNY9SX67rYfcqjTcUgMvujDwFFzK",
  "key3": "49oXKLnMKrrmi8Usrr6F6KsoSS4KutNLyugTpVyq9qXAdgKwyokrVZb2HwZfiwwi6XESoVPXj8D8CsqEghY8KT1o",
  "key4": "3e5ocBkdL65eqEmKjDREsjo2R5zVcfDUifK8cZuZ3dZULhk8s9g3iK1XErAuxWZeDekeioJ18edYDVWfphEpATtK",
  "key5": "5moPBPWgiU2p4BbhrJFWf1hhMjVR41aih46zL2atAty8BbA4PFHfaj2f97rHALjXtQtNkwx62cvPQCjkEAwQejd5",
  "key6": "2kd4zpbHKQXrNsxAJvmZGVuUQ572rWYyNh9PEE2GhUBpH4rVSk8cHQkA41SUdWGc9fuxZjo9m518YznbwmazQCj5",
  "key7": "3UhJeVGzcJTFkGPV3u2rsyeFTmeHbmtrn1MezRc84WxUHgXb1wqWPrGS75gmKKFL6RwaXbqw9PjiLf7Gf2HuNwxH",
  "key8": "3nrZs4yAJAJFok95C2fE4UFvuHvpmcLSHjZSD19xSt4gvCVA9vTizM5QxMdWWUfTFTnhRwUE5GeCQHhj3rSKxYAo",
  "key9": "5i7nTS93NCWKLqbrdEJm8QqFbKicppMNpqTMRLy9UPjE7pmAJFPicdihmnL6nVb8r83T4gFapP1tdiYinMFTo3dz",
  "key10": "2ymeU1UjkiqrJZNAgqRVj7xN8PuixwF4NKXRrwHr3E1LD37Yk3Z2TjvPLshfNTSqBicuvMMCqyd5QfNrEKUXzcpB",
  "key11": "2SQKMRT7R1Zjw1QBbGB8oSrQFQVCoi2biJgn6oLeiRP74hJyR84LK49nC5mg9xZM9biLnBL3JiYv92EbzMTfC4oY",
  "key12": "2ZCUEsNsDDVwRN8FqrZymbUy3EpDJcfoat5jewmRF5zDqteGv9qUBbSEJoBWix7vcgMc9FQtTP87krFDDrDKZ2dW",
  "key13": "2ojCmsasXFZwGNo4mu47vz9Uc8t9UTXmdeDu2hC1MCaLSLzVCWF48iadRgt1NHgbbAu3dUqnXLvnSs1of8j7Rrjx",
  "key14": "2dQN9pPiWbyWHs2NU8JF6jgUBEsn4Gy8wHuPMbZkYbCtTWigHnLp4VeUM3JZZBToAC2AgvanViC6CghQYzpSSfwr",
  "key15": "2uyk6Bd39P8c4D3W4MK6xajMGMKkpBA4oJ4pMkW4PGVBjpHdscusJWBGVZJS9QgLqm4P8yjs3vk4Vw73mohxGLAY",
  "key16": "mDFiDV5BAUakiTVvvXxN6gdSESJdicWvhiEKHfKa5ieLsYbzhkwuLppiHfXea4Rn4FqZgkT3BUnhprzqPvYNm9Y",
  "key17": "3KtT2Rz2fKLMUjVpdtnd2cwVDTNayWfZ5RY7QZHov8fP6oYyvqBt2mGZ6ZwaKk41Xxrp7CxLyX23uXt28WE9TGcn",
  "key18": "btEfv6G1YZWHhDndB5akDdvJiygiBAS4hdSvjXpB9ysX8SukUrf6fYwQ18dANyLrWMU8JWLr7N71ZgmamQgXWRp",
  "key19": "3pjnyEx4jeUSZk7Epktdbr7UxrCABUXkKGjLv3cvBMcHT7x4jSNfpgnhxkGdh8k6UkehNzEfbXG1H6b6Y6FtyY8o",
  "key20": "4NJ2yGLgJ6HGR6npmUzLQoFPNh99DFtx9vkQv7Ltsj2aJvfiXGGdLS3VMEJShC1G3oChnywM8iMocm4Hjz1mnTc2",
  "key21": "rD6KxJWwfb7GtUFM74KfJtpD56wPk886eQ45fCR8qU4AZRW2619rhNtVVM8Fm4qHB89eKkNmxfVn5nAVaTD7d4s",
  "key22": "nbNBMQXyJE4yDFKJ8V3DS7dHaHLxwCrmPUzAJdfLBk544EypPgrtsi6MrxiNfzhkYZYA557rQJMY7FUVsDNt5jJ",
  "key23": "4MPmAFP7E9T1SrHeafrP63oSUEEHKNy8LjMQmjSMQ9ZqmsrFDfjhZhLhY9yoZwgJVQANJ4dEQMxFfttQDqUK9iTQ",
  "key24": "3BJHm2pgo3gLnFv2xC9ZZQMftQa3k4WbUAdhF5JADw8iLabqSmpJWjEuEftP3FGNnsLFt1QCrSnNoe3YH6YcP3AP",
  "key25": "51Yhp9HoJmMLJPgmxLk6u5RHYNvifhAQCkZJiNHPwjCBfrUdsqmi5c4RGAuEEwfEspUpoooG3AGiWWRMf8FRE5RU",
  "key26": "3aXfA1dwQkN61e4tL7fH4ZJcXM6MeU2CFYTup83dxoCVz77DUjKwnBX4Vowac4wicHtgB6xBEHLJhdzLFgEUmF5J",
  "key27": "4jrqEtCyeE46DAcgwhpXdLmoJffiyUEoKAuaFXA4ma5PUPD5Km35ZMrZeqZkx1HVxq7uYY7qtmNSJWJdVdVLichj",
  "key28": "jQnLyz5YoVRkoHmgi5AMkUR5pc8E43Pw25PAEkuXn4dQeGW4dgviBmpC86BsV3vNsJuxR6tYvLDkdWq3a847W2P",
  "key29": "tLnUqm6zsAE1CUDGC7LZAY7DqyL3FngFL4MmCKxHT9dNfz5ufSz4Uro7prEhu9XDKkuzow3GtESXZUWNh2po6gF",
  "key30": "66d4X9fqz19agLgjX8vsKPPfynvz9Mun7Uh5b6K4iAs1Sdpo9LkywH9i6f4xBrovfzBCuECL3DYTPvbTDLBHPjnd",
  "key31": "23gVMGxhsDae6rTdFZHEnALa3LRSWNTwco9D6Q9xHg218yMUpEcfc2m4qo6nDQA7B1CitxrNjuh26d7pYcY4fZQX",
  "key32": "2wMW1hNyYCdTNfUhZTQ9PMMqi2U5cjmFaLZwV3qmNxFFZEU1AFBMFjSFYvwtQwtNvRAoDdBwcg8jHi1dT9QjLqYh",
  "key33": "42d6j8hYLk68kfyHQqFSzhXK5ckKCNKrthqZmz71xf2jWzvYoNFVeV3g1m63heDQ4N2Uam5uTWqGy799DHTfdAYz",
  "key34": "rVdBpxmpRTX7FWJqEM7Ypxfd3bQMJF2wwPD8mWjcfEXAL4iWAEQm573Q1MV8DoW8aBeaweAqZaDzKcTYh3G3hnf",
  "key35": "wUiGHvmiKqTL6cGDdKWcXwV5XRPZx41fejGG5hLiKKZaAqy88Fac9w2GF8EL4RcFJFhg1LDbMe28iem8tiBxSXX",
  "key36": "yVM4MtBmivLuQVTaSfg8StVTcU6Em5VVdXASVXGEc3QZjaPjtPKkkHVJjuUz8xH3bmtXN7zxz55iqgabZfxDnwp",
  "key37": "gd6vVqdkVo2zamvvK8bAiD6arVikRmK2kiaLUNEsoKpYseQiDPfLf9inqwp56SXMMYV4Kq5cp1rzubQeQCJgrxD",
  "key38": "3Uv5J7Mm7eQHYmTq1HY4pSokfxjHwnSsVRmvNsFPK5Tn1bpCHQhNZxt1ChGcJbfKh3E6Xi9FQfH72gJGbRd7VRd8",
  "key39": "WELD9KeGKNYV26PvQrJ7GLAZJbde1SFFnwH1WPQQWSVyCGBVG2mypWCggao3cDCBaXmSwrme2jdkvMMUkRZuuDk",
  "key40": "nFySX6vYRpDVufJZjBGdkUMi7VhygAV6LXPviJ37yPEDBpz2F2nvYGXyFDeEXvJZz953diEiwbXPUzsj9NQ4Ldt",
  "key41": "5RraXx8hwbZ4dAZ5PXEZHHokKhymHo7C6pMsJXLBAFwKQMuDjTFQSe5YuLYaGZjJ9M1xqv5BNb9t5LEvqmxV5nW",
  "key42": "2F8GxiAqqVtkvBphuxu31ePwyKdAUPBghpXxfWWue8VVfz2NjFYPnHRUSqVRQhwg53G3SvrJGFzfJpxUwegcYd18",
  "key43": "5edWw4VaRsb4k4GRVX6uBqJwJoDsuyJ7dJRfxFct4T7oQP5M3YgrA8gjsSG8TXPFQAu2WbjL6uSgbbrEJTY3o6F4",
  "key44": "4xHq6FRZs5MvjQfTkL75PP68mKwNBdZn2ZCarncpKbWvjdGwPTZNHjbgYdw6HKLeqBzuSj4JVkh9Ku9YA9S6N4TL",
  "key45": "3YvuKNmwr536Y5xQTnvTLUTaFoXMKhTeiwX7h2koM8jccRCzpU6CBdzCBtcGu5gx2fDN5CZih7HUAaFvAZViH4xE",
  "key46": "285qhoSkuciVqh8h8Q7fWiBe29nRCdnN1HRxYGyMSLhiZfPGyRrZTAPnSef4KvKE3JFWv171zTosseHBb2ddDRu1",
  "key47": "3Xh8aRPi5TXaCj5grpNS2Xapkyk2cfqSgtKqDkRgEwgD1vux13kmFSJq4GdsfrbpHs9TzCMevdGmoSG5D4Xx9jAM",
  "key48": "5WPD3RKsg4KQpugqJxsDCtDngQ5swX4Ak3786KvEidrEKSZyKHPFx6BJBpXWVynBD29yMzdmGu5gzqH6Vj9fhY2i"
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
