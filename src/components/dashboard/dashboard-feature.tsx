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
    "KyUkApyg4cMZZfHtUU7KB5m5brk2ywrfuiQJjdfFrdGViB3JyHdHWzutxpkf5pXd2WCYUrJxX1zAntGVgNEgMaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXb3zLXBesZ6GHJwcPBJ77HYWXivitrgz1cU8CA6zK2WrfrwoyLXsfJ2hKSZvvakBLTK5Y7AA1X6XWi5mEdFL32",
  "key1": "5xbjso1QzZ33ebrsoTZmEdw9nbgsGji2DRqFeWWHTwJqFn8qpwGyM5jS5ZkMd9vEihHaAqPazjgd6m45vNjgPQ8",
  "key2": "3mLjsZSQxwwQPFinGkXWW1NBq8g2SUquDGXxwPCAUguNbKqtgLfALiKxUACNks7eTDv3TJMgeQSXsbv42uhqs3en",
  "key3": "38vkCv7jbXeEMvk8pSBCAjHEdkpe1k4fNM9chjxUWsUNRdg7FrK8oxzJtVSegxvwW738pypUnyTgX5ukA16unsqK",
  "key4": "2sGQBg6g95h9FWHqfDr1yZLZXC6dNcexV9xE5JEo9CkZFwKn6pFw14qKRwkF4jnvpAo7AFa3tESUg3B22zhpgAk1",
  "key5": "3XFpe68PphwEWXY71nb4dvUsM7m8gcMGokxmYKhDVRCPoeBDecp1fmeVdvqHsCHDhbzSSgko6BA9PQSng52VJGvj",
  "key6": "3vctsGPtJRVXYh6cxxkhEsaU6o5f83EWKiNBLNjsHdUBMSa9kjZC5B8oRZryjnGWWdNY6ersQ5ptV2zpvShpBokn",
  "key7": "2te2gLuHoGQWG4gXXDdiUokBCzX6PUyNVxh84vtYWcDLwErng99nMxrGcpnBRgy5ypmmbU5PayDQ83hEwYmPjjW5",
  "key8": "65gBUvNmQxF89jZNAADF9XKqNnhTnwFzL6eAJdbbsr5Pvh7UE3tDFPCxLURz2vjwZGBfixbPK2q3pyvT1xeQ41oy",
  "key9": "54zt5e8ZpURJXiWhR3cAR6Vqs9Xo9DEoYN19uhesaGSytE9QcsGtHc13qveLjnKqACjLWrnpyXVv7a1BiL4E3HMv",
  "key10": "2UGbAgw4TF7zQTv3BokcrpJ5cDETdsjuM8MybE8oQgwBpcPhNANcRek9xjLqWr5HjtQFcyhfwQev8nVxX42NXLYd",
  "key11": "6RPbEom8Rx3aXF686ozYK917rAPEv7FascQxQA7UqRUGw3ZEBf8YncRBH3Rf7pmSQiKnz2j3EdTFG6FA9VVF6Nd",
  "key12": "jXHj2wYShuV9x9t9EoUzR4Tzrwk5jL9qggoZF5GJLFLq6Cb8JrczZ6XB48rhRQeFnXAsWrNtoYs6CpYu2r4qWtL",
  "key13": "2fik4oEY4ift29L1e8tnSCiJpAYtp8ZqZSSbL6Q2qL4FAiioMoZrMGqcpK23N2uU8ZZzQoYFvGEBGEovMshVceKJ",
  "key14": "3MRB1ASs8Ftgu8YgmkNbrbThAZMSa8ULJPgGv7xa4x7zFs3oDPpcq3QhEZNv4gjCAjSA7X8KrCh81TEd3sVN6QUs",
  "key15": "44FjgyT7JjMZTnYzJBAoKyiFr4BHTxNwn6BQYd9ZecHXSffH1JnFDuTGYV9LoRAAeA9aipFb1SaBuczTShxMtsF9",
  "key16": "3b3z6V2gV9jMmRHemmsdbnt5iP3HGpedxLsWfzNaZ2X5vreZZ3Ktp69KKxRt7L2MaL8PQLrmHfhjV3b4DHysxxm6",
  "key17": "3EMyYx31KWJtghbfhiBXU41ajpA1xfkF3xjD8rMiBuFsGqoCVyhGstL3HxGfM2MiUV2qLMaWCp44WjbX17Bd5uD3",
  "key18": "5mLiu99AUXz9Scxomkr2SqfdhGoxPGKLjceFxx3ExZR56oX8X85PJ9ShX6CBxbEjZK5HCcBnyQQeaajHczRMaQks",
  "key19": "Yh4tjtGJ5kSWfR2dqfnkXJyTG4M1uGDSPnNwmq5vE3AKuHhNRvBsGNg48mp2mLsZTnYqJFtZ2ipsDokTm2nXuGp",
  "key20": "2e2KZPeb7aJqEifs2XAfpccf5k8ppxDakJiHghRehtTMYSpCpy5YJ8icC6gBotcc4Egnx6gepMMGQ6R9pR9fdCKk",
  "key21": "5VpTfRueaKtt9m7ihxmUDnMAFnD6HJTYmR3b3ZE6umeX2foRcM7F6oqKCuSCpVGr7tykLtUuVGUBpBYt3FvJ6fkV",
  "key22": "44iM5UEjfssUfQMSjjgoVoB5tM2TnAAU2ziJzS1PP5mQoRyKgLoyT1bvaJPzfMy91Zw4jV5YfFBdHm2SeGD73t3E",
  "key23": "bNzmHrRiNPGh2mARUFfjL6z5k2t9FzB8dRy5QBkibHZyKEm5YpuWc7n8GnjjCx1MysKYJG5eDKxzHHroUjaAXGG",
  "key24": "4EAAjU9NTWQsQrYatuzKNSnkeiWbc3x3MAZymQfQJD4U36YRhsGcmtaWTQdSSfCEjUG1mVwByDXDoQFSK3Zu3Nyd",
  "key25": "2pkZbnvko92TWGrJFbKfUSjzS7U2rHEgUaAHxUbBXAbLTosM9sSUyL913bQwUJ3WYzoxU1WfXsRWuza9oYTpgQo5",
  "key26": "29iENAtgsUc6eJubm4gd3Fka2eHUv4RcxBxcBUabAoN6FCeyjYGfG7tgaSUe36hgJqt4W2ah9S8VZd4zLo94ik42",
  "key27": "5poHmtUfwAM72DphanzAhzcPBdwz2AaocKpErXhFUBuWmYUkX427wtbeGsgrWdbjtvwfXANepnjgwMF4VxmN8hJY",
  "key28": "yL2XZZxeuGzhheNdRcTEs7m5tMJ7bWYCn5MH4NdXtwevLbJMHgcQfre5NsoAnhh769gCeeHPC72KFpLP1do6YmE",
  "key29": "5xEvxTpUJTk3HGKUNB3bSWWKMRrFBTvTD8qG5W5RFHfdA6sQXV79bKWguZjDt6qxhzs9LhrruqP3trQyMwgSKFyw",
  "key30": "4BsxiByt9UpUQc9GFrmk1pAbzVQDhS8aZ5HrnQqFEnuFL1HZQZbh5QKHGpntYts9WtkwWotaRwyAG8SFcSvzbPjG",
  "key31": "5V7ZANRoQVxaWZk9anBJw3svAeMV9ERT1n4KntfaQu99BeRe9AsmgPHPHa3CDwPKL5aKexFo4zgWmqnqYKNJuYKW",
  "key32": "6ohnNgyJj8jm3vAJDvoWjDStMx6z94ovkiLreK1DV83e1q4nXfNE3C5NTVYUMqTdSTuqi7PMTdmw8ZFVEFnQNPw",
  "key33": "4QuCsMTba5WRSuXriN879nB5HwPuLWrZYmkcb4uwao9BoDXhtmH5TvW5kioRoixuppCRvQxAdyPSNFfvxZ4uErbb",
  "key34": "4nu5UHdk4n5iTGP43spHgcqQYmy5arHhmTQVtLBxh39kwGuXW8ZwtypdyQNys7sbBSPw4wbp6ZjgntVTrJQrSFsH",
  "key35": "3k9MFs2aJwbBfs6KPgyFNBfc3Un3VwuFkktTLkWKFGPuJBK1qXKLqGoQfHLspSiUxHYEr378aBmYbzqws4JcbxwJ",
  "key36": "3W73FffxntMn77pUvdh1Cmj5QN8vv2bw6nxXpBGzNjX5rUXLxhoNxbLwHiP6e75MEj7xYpEJwHng4pUb8GNFjenx",
  "key37": "59yyzNLTfBGthrzcn3SqCvLjHGJS7mxo4xBcMFWmx1dapMMsh1rdLJM7aHPvKEovCtRiwFpEcZQdxmuoEnjvohPK",
  "key38": "4j6VD5iME3KiXA2ua2VCE4znWwhpE6npHiokn7WYcCu2z11Mo33KjUtNf1gWYce82ycHeUTvstN2Ur3RmkzfhhCG",
  "key39": "5RVGF9KtFrEJpPBVmp4NY1p5XM8pWEZc7FBCAp8rtESykBrD2MK4f6Q6DUt4acGfh8Efzm7eitM5i2MAmAvCfdLg",
  "key40": "2emWRv4whgPWq7Mgb84h38XhMsNX1YU4a1DYZGiJnQpGS7mzuzUtFFh9siaty6GHc8J3QDvfqdmQ2AuuNNjPgAzP",
  "key41": "4vPjXM1CStGSmUC8iv6PUjHzseHHSwhQ2so1YTccgJytp7ZGPQTTGpqF2xE2enByj45zbGb2ruUJVTbdELXNTejx",
  "key42": "J9GBZbRCB4UrviwMmCbK2G7g7h3RTuRF2SW3AgKxuq7edUoaWqUXxSJFUuTufmtBcNt2MbvZg4LfR2YeNpomSMw",
  "key43": "59ZWm1hSixn52nTSC64AF7vQbAjraWD22yJhJ4gmxuAePYR7DDBkHREHroMvJmkVrYQQ6KV8cS7jyG1DP6jFA5nd",
  "key44": "3bYB9RVRU3ckx2Hvyy75FdQWQBbmR86bUMLjed5Fa7FHVQiUtYTx131Zff8PGcB54aH2npfrTWbTDEWSNGaDRSYG",
  "key45": "4sxMrgevnayxiskPiKPhvqwCF3oRZtsarmD4WLABdjCErqgCwfEGTYvHsbknF9iR5bu39qqLZPBnvybpJz5x6973",
  "key46": "4APnYVPm6KCo6TEbD89gZ5WszhDWLuwLSHb7hR9aNwR5qm2jEoAD7qqvoKpB11cSC68HFWpREAC91q46w87rEdjh",
  "key47": "4nTL2yo9pw8R5GRwdVQdHnof3zuy4SXV33Lnj1eyJXW2dRpCDhjges9fLTufsPN19gfPGvjoeMUccBnonjFKVT5b",
  "key48": "FKhVpA82H2NXb2CL5PbrSnzLUfykAQKrw79f4AkTrTRjBrrDmpgWJ97UWKgCf1b2WpWy2HR7dKy2sW11NFWT3Ln",
  "key49": "3baCDiXbLfuD2sj9w4UppyNK2Ac75AVPFQEMvUV1msPgmcQo1qsBLgrf2y3smJtVPz7jkkKhfTqqahcRdPRsyJ5A"
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
