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
    "5rkj8tJDmRuh6njZn2218ChtsEWf6dZ8NzQkBg4NyfPTYYXG8CU4eHKwSg8TpMWn2DhFhAYHWGSQuHUUdzi1t9VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roUYmeLqz9NCDVoseZfcqsFKEco9FiGa1DeELCicDefBVdecSKa3qpGaZDCcDqA7Fm7zQSjwxk7fapzjYybHk9R",
  "key1": "296kRWE8n79LtzvMW6ih78VXfNoHisfZvyPk414KjBoFjGL1yXUYUPgTediWu845SrMJgmSmLEDnDYMxA4mYdQFa",
  "key2": "2F2uHCzZiTwBCt1f3ZRbFr16Yiy9ZRkdcmVZ6T1EGoj6xn9yMy2wsRCzrHoGR9XGajdam6LMfcp1VFnJLy29zrsj",
  "key3": "4myH786XqJw3Nfq3hdC3jbHr7LrPrN7NAP4uqn1VPGGJxmKPLTvAZ81TtMiEfHyAnjofE5QXPqFCguDaBrgYDYQa",
  "key4": "5zrh3ujG6ufwoeiyQB2uW1hKMVmnpfkxismWp2ewWcpjqUaAdubwK2RqeexmwMAYJ5MxHM6op6BtmS65xueAX9bW",
  "key5": "2hTBJUmAQPRHEqimmBTVWssUMSBPXtRcu87cNeX3APDjPewsyKvVojNDXsPJFDyGAazrhY7n4K2KCM8tVuHBecHx",
  "key6": "382CApnawiDj7MSUeDZBR7asz6J7yLEnxkHCa797rZVFiUnuSbdPL7Fo9cnc6gPwVD54seyRMmcDcHeJ4diJJY6G",
  "key7": "Q1BxieDPCW5pjXBAz58SoMBTbDSgnfsZ3Pa9akaVcYqLprjgqrSaQWaCnQcKmJCpDAffqW8tYdtQr8BCF5ssrXj",
  "key8": "46vm812Q4nsWC4iAGmK1CieThMAXbohDyYaCdKYunWGkQXnyTw38GFJEFdMarmt7G9JWfrT8SZxrzweqL4U6S9is",
  "key9": "3Yv9QTz6Mas7TvWfdqwqqLdfMGonLL5hZazrKDnNZ7sCNZ816HC8NCDhhqFnA2xpeY59WnSP9m2yFprf6NBTj8XR",
  "key10": "3KmUhWNEARVkFyCBW3WU2gQ9N86u9AWRFzMimNqnifQy7aabY8enydkHvVmDjkkwfhXwWL3hiJGLjhCr3JpZJKD9",
  "key11": "YspLbhwxxzv1QWkLiLH6pHFGP3FfZfffzRvUoNPCRdk3k1NtJ9CdXoicXoctoHHx9Q9ESuAgDuJyaAqUhQa8YT4",
  "key12": "3ghnBvjRFatsrTF3knPxAMtgfRg377QpzRtSkTmxShcpAMzPevtEuAy1fNhk2zDAebYQsGZ5Xi9QTMifK5ATbo7p",
  "key13": "3PyoNu4o5whMYfE7BN8dcC55i9enxa65TFuzf1KzTUz1qe45n4svVUxk24gTnMwjYZq4t5AnTZvJsVE2Jrg3jTAk",
  "key14": "54SbmXmBhiPbdiPkR4FXGTdMK3sZr6jeqpj6rP3TBdFT3xLZzRP455Re2Vrux1w47Q2aM4FwsVssVbFvyRsjieoA",
  "key15": "2TfKs9gbTGVWbVq2Pg6yKwFSgLAnNa4PLTVyGvba5XzjDSWHpTGouWDEACvvAU3uYyzxYP6C1U7dH6Y9FgVVJMbT",
  "key16": "4dyDFxdh5xKvawUZRJtZWZsvTzw54Jz3cCsAvkfKVeDB9aAWmmsr6MG3wfS8ricvEbPPutgUrLQiQVFPSUwZ5p8v",
  "key17": "WQYapMVKHNmnaP7u9NEtXWUuGimRVGZirTZiXpYJYgUmWUq9cJTQjY7kckUZDh38xF9hYWpnHQJzedc9DrTFeQK",
  "key18": "5GBcYn9djUJduk95SG9B6mGsiR7NdKnMTdzP32YEqZoeEMsrjM3nuR3BjVaNN9RdwKj5JzJXNHtAfRcGQ5939dLk",
  "key19": "htbj5bdd1xoxNgJHPFiuxXSNn16iDfcJH1LM7nEvHegHBpzX7RfbkA1ZgCF6rvio2oLjHkwsiSghSTSJuj8Ew7X",
  "key20": "5Hh9LYsrb1qs5tTBBtokLuUbdtE4eJ9Ditf1iiL9nyuwQv71NanGeqWUNaoZEodApT5VuVCVcxnrpf32rzrgc6Wk",
  "key21": "3T46FHSFPZWCZTfFdew2mwXJgvAspoQef9TZHngKoSUkA9zbcVYc8hGwDVExkAKw5ZeEirRjGq7V8Y4mWSnse8Q3",
  "key22": "5Z37qK8mYRZUxffSQ1iXgD8mFyaftcVCRpu5wZNP9ejyRHyxoTTR9sxGdo49xfrzhZNF5QGEy9Wsict2tCbevSdU",
  "key23": "KCitcDj6b3dtisZai7vDjc1VLogyYzWtk6Ho8yyLwwpVDbwgHr1iLRJsztyttKWs3aPsnst43gUVt8JChBfdLKz",
  "key24": "55rWYadGaYXAkjkEhP5VnhGzvo153ny8Lj5cZ6pLWnEacQeNw67rnWMZU6pYEZA5TgnCFdrxxJYX9YRZKsX6csES",
  "key25": "3pk8njdLMW6w3qKTDRPgcC3wdPzFvgvd3KWzUB88q5Gbpp8dszNqQRz8m1Zuntg6jMLWQymZ4UbeTX7v5n8KzuVB",
  "key26": "5qHV8YT6vcn9fvYVA7Bkmc7GU93gr1XYgs5J59m4Q28QQrigNTxPKWTZXTdzsYVb5Z8CypEZqbeG7hyWVH3jGd5h",
  "key27": "35UJufXFgXCuomeTfrm8X2Ji9kvBhB5SihCbn52P8RnsYrgHsWPciDKgJ7qSAUoNnb7aDBW31KEnsA8iscnUhMnK",
  "key28": "3ELotxgFQVti6KRMW4XiMrHFNg44Box9eBDDawzzGZDaQaFTuTsoDeqRjJCjDoMkcBRJnuE5d2dgAt1F2U54kwGr",
  "key29": "2fvyAfjmZEgcCehA89iADGgo5JzUtxLfLgGVcVbxyyFihVbKK9KBxQTSxqYquk3Mev89uHM2i23mVveE1GWMv3ae",
  "key30": "GKZ31Fa8zWNmSdS1tssQFcYYvhUGCixqsY7sGzskehbN42VodyUQhpmiBAXeB4uJQi4vGDVsgYrZYmCQvsrzhgu",
  "key31": "5XFRMpbUNvFY1FAojKpALeGMG12KUybjJLh5rrgmP6DLAaUQbXQs6ADnt1NpgqnUu1vztjDkg8xTaK1sNiWbBrdP",
  "key32": "26sWtxKELqnZmEKUy6uSQ3QzdUD8VcJ9nufiUyJo8Heo41KgHgMWFeMXp67rgBbkSrvTatQmHuUyu5J8bZcn6DET",
  "key33": "4VH5xUuAQnhKAg5nXgqM4FJA3m2FNmLNDpocgprV4wn89PNbsqhuoBf4i39giqratkaDegL3gToV4357HsxjWhck",
  "key34": "4L5U9VrQMaB5r9QVxQAnY6qyRpyndSwafzqR2G6ULXCfmzSJsZncq5LJ9dJwvb2HsuyGEPVjXdwQjP2fVibHfufN",
  "key35": "33DxD7WJuct6QbdKWnHYcZbWsLgpz4Abrrja2qi45EUHYs3Q59dBE5vc9XbB1YqtNzZbdS98xvDA4Nkq91BEKtEk",
  "key36": "4pbV9e5UjQLt8G3YpQfzZaPpcb28Wvh7TAFKLebRLsNwLeAzoS6CdznjpVqk2TheivgL4LWcydFX1c5vBXF9t3pb",
  "key37": "3VyEUkcHVVr8KiN3HEfxUVKwKnS9Ljt24p5f97HSKZD2hK4KW1ysV8Tt3LLjjR8jEzSukkaiCB11MauFPteiN4kJ",
  "key38": "5FHaMTf6R521dY8vu4StNxZNLtpf1QswcbM7Fiski8SyngohiV47a3Qut5p1YAh3mrwyus3rvif93Hx8KApxf1XB",
  "key39": "4cgBBsk6VyBQGpevucNfSt7hVL9ojfCzTjJ6hKcptpYpUbGwWBubGJuyriGUJFHg7K7dr6zV9nXLb7PKfQSQQc5",
  "key40": "4wLSUt2FZM9g6a1yS7MCmrseRcFLCyc2n76EcK3Qmn7fhVQbEfveFMcjsHffTiPQuUkH9RoGydfKjp2VrNZ7kHSe",
  "key41": "44osfuyQziZcbFpdAAD3pSbMSPgit7L3brUzjzLbP1XamuouDCsGZHHkNsavvUbzw6Q1PxCVzccRHszdxoUEsurv",
  "key42": "5SMdY9Zwhj5GzfoZYDw13hFfAepozTpMzgbhvXCjzftbSUCJYHggKAHXztRDzcKhixVDjkmRYEYeYCQ6eY25QgAT",
  "key43": "4cwn3XsuQoQMASUJ7hmUyFXbd91pyNM4NK6w52q6uwa7KBu5ueHp8MSMWzywRdvZ1XpKsyHyAN9cmmMR9rimM9sX",
  "key44": "5ZDtP85LcFNkq19h73zMMndczkYfLdwwDJr6NkaBCg63eN6j7mVismuYXV64CNAstyan5mwvYEooUqe3HKtMR54W",
  "key45": "2biQfMJ18QM4keKaAxmZosg9f8ZzgJ8n7U9spV8t4ZE97NbeBvKxJzAudYqxP6gzNDw4JYcvsZ2EgLq7WEM2Vs9T",
  "key46": "43eDKAtRVPKJ9G4sQVCXRu7fSuwoX2gFVqteuWfuZxpVVMcCAhnaBk7xfMGwKLSYUDneFUSRX9uJ1kCHW4cqnXxo",
  "key47": "32em389vjrEsSjYrG5nHRC84dDvTdDQcPA4VgodRFJHWA7SqSWTeELsAQ3njS6cCKZaaqrfX296Ds4b9uV5UszGf",
  "key48": "33oWdg1Vg1xJ7S75Lt9k5JrdhCT7GQzGdQsBx8cSWaud5RUZnW7rBT3tHkESit5UqkoUy4f6KEoQzsupXmRxjfec",
  "key49": "2r66xWsd7n5iLDy1V3tqvqrfnHK6Eh5GL3NgnXTWSzL36AMpxccdNazQNuJuru9ddYdzAdNSdmqBRqWjuKY69FM"
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
