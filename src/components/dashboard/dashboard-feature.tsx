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
    "3B4obMi7gbjMQTbzjK3gU716n65Vsgq96r7a3GFgSNUsHZii2vVDD58637AdYbrhQ3xEafvLubazyXhnUeRemHTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22VA3DxPpKG93qqrPm6yDikY7KaJiACjsXmC9m9mrVBjU1RRN2frqp1Fa1jCz7LBF8h8EVwdJ73Xo6b47fS3J4F2",
  "key1": "5f8BFkToJGeD4oeTL3yyHrz7vzVx25xG7BavCKrb8o1JwmJXoe3a4HbUv7oZCoYYaaiXV3BkDRzahAZwXfLEPCqG",
  "key2": "5h9g4U5NJHx24iq2KvxNx5mpEkfvvRxGyzCH5yzwwisPVRCwS1uGDxLMThFfbEPb8YsmPTEjx6QaddAELuAfCo6z",
  "key3": "57Ae1Wt1XT3NNmsGhi7HLeb5wUFGfoUGGzWi62Z8hVLAFFTjD3yNPaDsMRGUkQMEt4RU96cGjbUdGkju1GzfhsEw",
  "key4": "EkrsSm99idRkD6Fu8dH6qkGGofcyACG87dQnewNXvpZsCHVHeeobDKWTW43XWC9vtV62JPKZQ8j3HcHwVtJ5cAz",
  "key5": "3P7dWwsGYTSGKqDgRYSzt9ssivMHUjmxixH73c7xrJnV74kdPKSdmGMJNb5NKw81Zzwefrw4qUm2dVNHRk9mK16o",
  "key6": "24fbXmWyxozpCy85TcfovwyB7HFem1cYSWpDAfcgpEomuUfBBp8cQ4cWJEjJPRth2sZ9E57NLBZxRp8CHidBSz2K",
  "key7": "4VkVHJZ2qFQsqzU9ydom6HnSBQoixsP1CTKGQ4nHg9KqFREQjmUTuqyErNRGd68jSbXAZZgif8WFDRTbGJKEbzz4",
  "key8": "4jYus2NjXtQmjcTkWhV8nQNKWnN9AaoDwJgJPu2qzK4DfPgECc4sGfRkcvwrVn65Xkr1xRGKxmLXbyY1etPXrEnE",
  "key9": "44fv8PTpvfnocmg2U7fyiT4gWupaL66qGuVDkb43xSowUpnA8pAo1inM98XUP7xUECgq93GXH1tx5DHvPkFRaWoy",
  "key10": "5e77DiJN5oFbJMZJ5nAN77ipj7nWAujBj7Jr4jFyHaQm25BJXL3JGHpJYFcP9CuQDPrbnLk8TDfR4Nv9ZLJaDKgL",
  "key11": "3SykUkPCdnXPCV6fd8LnhXcPY3pjscz7rYb38KvmBNdYAfCpcTtTXS9MmskGPqTV39UQWnNhKSLn2dgD5h4zuXZw",
  "key12": "2t5TqNsBNE94B9EyDTYhCYYbn2UmzodrvC7UutmrYeNqcVnE41GKSuTXpeCLgLd1Rp6eELSEj6voBa97iNnp12Dm",
  "key13": "396ByiRiRwysJQHR4NWXDPVUR2yK6Wp9iMyD2sPmBQtc2YzkfvcPQmSydaKBXqp3hMKzaZsk2aDKjpetmL2Qcx3R",
  "key14": "5gYzjuJPLdjKcFWKYwDpSh8yqMtJBVJqJLDeSrhMNS5p1fX2XabVmDU1nzRWzrhF1p8UMG3AkMnnesdHfbdUzXT6",
  "key15": "4gqh11yvPJy9JXJZXgADhCQvFJsaXAEqRMcud8H9GsPHKYFqE6p5CcAUAbbtcYDyDVuUseY5AEz23USgfxP8s5Tx",
  "key16": "5uSt2XWoabGXiQXrFBhtSb2ipYzPuMG19UsTFDGaKR81Y6HWRuRjRzHsUNC6XZAjpbAgFKFu9KVnLiZD31tgTdxj",
  "key17": "xMGmkqCbz6wxZKB5T3tyLN1jaGiSNwwnJ3ahk96WZPjGZFKb58hU6RkMgLZwZEHYgZjVRLczfddqzEDNG6fnQks",
  "key18": "4XNPWK8rpqcqPsk65aCV5zbwRSvuCJWCE2TZDkQ1umJUJQKRPnJuEmmuX9n1Adv9vKE9wA3C38psM2sS2PNnDU7x",
  "key19": "2LpGFncCsbQbSJbGqS5vDoN1XMJpRWmbhc9siUJidQAHY7yWX6fR9g6BVccQA5skLJNGJGH3H6bBCVnWsXUBZxUR",
  "key20": "3hxZLK7GyhTv2WGVZZE2sJ9KnzJxXgVFGLDNpyxG3qkRR6tXxQLjnUnnsQLXKi6uF74Vj6RUXmCG8epyUiRNaGGP",
  "key21": "5GNvEgYpUsj5pdhBtPckx3P6VDbQMUG7rviS9x79bcZyuS9PAXc2XrzgcSCF5B4b1ZsqCPDP7UE93ub8ZA8EBLAF",
  "key22": "2ngsB5SfrjAhijFs5Ax3pXFzSoD5pUi8WbFDkXmH8hBAifmVLqEsfDKKoxaVZZyUZeR6a87PderwXfg8n5kSckfd",
  "key23": "MvKx5DAxchtXYkQ7nD3xgUvBWSrQdx5oqRJUpgNoYppwBhoNe7bMMm4mMQ2rdshzdUHo4wZvT1hBfNvpdz2JPEP",
  "key24": "5Dxkgnmqcf27W1bakF2Cwd3tru2rVzuu4RR5sankV1uatUAjQNZcTmFKXNb3UDtA5JqsKDWEL4vBdA4U7pmQinvp",
  "key25": "5gJ88GSmuvxhM7A1ZAi2zR7aoUisRTBtQaihnuPmpjn3wvpXmPaxxhiQS7LxeQqxfdvfHJUfbUkEHvSqBzTp6ZpT",
  "key26": "535jkpwvC6iR4d8gNt4mXKFnNngd8uGfxEKAJXDNSHPNHHSkZMYHSGgQwSTKEvMJuH6XpAogkK8y7wVtA2g813HV",
  "key27": "4BoL3y1EJv77qBUKXPxf9f3qSWHQRoVTJnbRsfnxgagQezM6Er5f87xZvyH8Xtu2DC385XyPJyPoEBfBBZTvLkjW",
  "key28": "2CDNHbhStCiPTuSFzEyrSmehRg76fiSboQGmggB1MZWGzivqxGveVh29gC2c1NMZ9fGq3FjPXz9uirHiHxznKjAz",
  "key29": "58XftsiWYLY2nxMmiKnarWBQwKtFbaCsb9zGRgkvuKB1ztLUn38WeBh7k74rTbk8PYmY9o4U1sp3BxQ7UbR2Pd8p",
  "key30": "2eY6ECN9hjPA5veXmFjNtpiDz9MpwG22JXjB4CMkJbFdrtgKZ2Jf9Y1USrS2ynyUqtfGh7QrWbkCpT966TXUbKoQ",
  "key31": "5ucwrBzpH194BK6RSHGTv1HUkk2wreqVtFYqmVhrPXxy3crjzmA48jat4mMWMhFimnqJ7uCDCZRZrUfeLhVXnfoT",
  "key32": "476AnVgaP1kWanNqU2Y9J3LVSHDEqNt6eZ6VauFHiMos1tVbjq7XhKnr35dncevUW57inXsrQyXL1YGUYp5byTwv",
  "key33": "LWuuLZ9Eomd48VNQvNJhXfTHQUHR4J67b1LtRttjjpXXQ6h3SYmHYagDVRivEJZ55aLBAk1BMxadanVY3wHyYv8",
  "key34": "ge1jGax9XaL7a9ww7EDTU8WnSBWUYMiEmXvUd5TVQSejGTAYu5XL9bpxa41YkidPpfceVDomyRtjiKHVBCcGjkT",
  "key35": "5fKFz513YakYVQKG8QEJtg8kouSN6gfesE2KS8VfWT1FB2ccU4VX96B64CAjSX5txvJXiUciEDR3ARmLxMZppDpa",
  "key36": "h3hjvD8MAHCbPuNaY5saWxHCuQQQdJoCnFYG6jwtk8goTFTKRn374gtixjaAKkF74fuPMwYiV4ecNjjYXsnhvZS",
  "key37": "3xfgneXVorZHS85Agm1HPjwv4UXjsjaVu6Zed6gEwfSLVFbwmmanMKFAWEtfNFvzZvKMTq2ERert7f2jc45ishTK",
  "key38": "5mRYsg2itftzAvZA1pXugH1TrQMa7dyucpJNrCLqKtBpGLi5VCD1a2FttpV1TFQBTZS6MQjkhXsAevCrfSspkPyz",
  "key39": "2gxFFVnj31YEqx3jnTtN56KDagCPdCNqAYBtvEVhiuwPj7z9jAMXgegLqzM3tnYdnnyzn6kf3X5Kc65hHP6r64V",
  "key40": "5ThqKEoCfZN9dAZxpKs1aDU1W38PhtC8EykVRVkXEd1kpHUsAKgHge5Vz34rtY7BryUHKFJetV2Qkpqxstag126N",
  "key41": "2uqyZUZtssaXXsmokPorQxPK1UnWMRje34Kq1NhLvpqEhdQxd1GJgcfQA4DZ1VgyTWxrpTQzqsrYf5J6An5CgTDW",
  "key42": "2TcTEhKazSXBnQ4HcwF7bPj6LT6KkFNsFzKsWC3xAPXza6GQsK6vkCAseRYSHG5uTEDuPQUrgxXyN3dq3y3Mkq1e",
  "key43": "y2jxtY3t6ScTbjj7HNxwU9iKdhkC3mwM787XC4Lfea2Y1sF6MJn2ZgPbBxkyrbuhajswTxrALZ23ia9Vo5oX2Xq",
  "key44": "2GiEYXDiq1e5wUqvqjqZXzxgDv31GSDaLb6yBSc1a5Var8ggqPKuKDSrYtRAjQr1PjKYPnuJkDWCyU6njN8ZGoro",
  "key45": "2pihmoPRhP8PZ8ATTweTbwe2hd9JSLGT2VvNYwmkZAniejwJAxT4AqPSsFK4ebx71mMUJx2QGKGr3TqZW96ZFkN1",
  "key46": "3urazUia1Y2trLzPS1WtVWgrY5uvLBJB3G6bFD4VdEszxG2AafzokZsJsoZU8jajHGM9iXFwcjJxzAv3CniSDA7b",
  "key47": "32cXewD3UongWR6nQYWdeEq8w1dCmDw6cDBFJDLL9HyqM1HbtJpbUzrLbAfmmnAaXz7dj9W3XyaqJbvbzP7VUgvT",
  "key48": "2k6vJhFrkVLhRL2km4MjuvYCN2S4P3SxGbZiJdjA1bCciPKuDPpWZ6FhhA19NM8Cw5wV89c8GnACZRPoLnrqzKGd"
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
