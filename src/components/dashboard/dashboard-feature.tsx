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
    "zSXPNxqGaqv4NLRhv1aEBbfYJSW1Zrzwrikp7ZiCCRiDK5T6faV9dm9JSYVWJ3aR7goUKARe252FpF8qq7YZ64K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfxK6V7fzDdxK9aXZX6yV4jFrwhMpXpJB7aYCZJveVCFdy8rAysdJnJmPJ2Kz99e3WfPbtEuZz1LAejuCzYau2D",
  "key1": "2tvmj5ZcLn6irMAviEf4EVzfA8oePq6f8fSdsKaG5ayF2CH1WhRb7coQ3bxwLgky8MGSnH8BTULjUmr3ioQjt5DV",
  "key2": "38M9C8gSRMQF7rXHzxkikfrUWmykUDVWrtCXHTreEo4GMXRFv7c1MsXAPS7KQHtMVBVPYNL7wWLzRgPpPviBVLgk",
  "key3": "4et2aWameSARbbzmw73pFL4H64jdqrnqQZoKGfy1rwWzFcTbQ41evHpt4dYyF3UaBGXdSiwq2mLEJzKEMSyYzMr8",
  "key4": "4MTYtRjLpVik1qj3wbCGDRV3KMJ8oG3hgKTPmjthxf2JTE8YAZNXXyhDLvnrA1NGF6LPCrwbLK4jSh8nBcdTBV3V",
  "key5": "5sq1LmjyXGvvwmiEQ5J9kzHqAQCk29HugcACqnTC9dP77QrUrnm6X71QEwiU4CDrMDPhHAyQ3hC53KaZaWZGi13y",
  "key6": "56UHhmyhcX3Y65EH3iDLR4HksenSdc2UxHSzGQR41TfFbKSpEw2SiebJDTJ4U4UB3EMhHBWcYWUqYWcEuHNzCFbo",
  "key7": "5Xxo34T9N9L2bNpBxTjB5h3ZeSeo31fqs8HYpYkBNrs68QAnummj7Gu9ChmPY2DR5RiPCREUqJP9MYsvEPEQ2aqb",
  "key8": "52mRKNCALJTV8Yd9CKkyzjPBjoqsCKTkA4B87RCzTgvkdJ35SpFvXZzFgeo72dYR8LesDF9357LY1sjPcr2aeoGY",
  "key9": "4adpRUryBMqteDqLw57fpJzHroRN6f11r8BtipswguWkftmc7jJDywyn6c3zmbgC9fC5XsxVaynYY1U7zpS686f2",
  "key10": "4pNvoMVCRX7oLS94CKq99RaA5SZjgJq39uhm6UGbKih7J66gspFSwbc2VV9Yna7PgMV4go9sTVrAvsqbvVXfdoqU",
  "key11": "4ERLNR1xEssQtiKFvH7gqxbFtgwLzNHNcfEQvHvfw6ooUdNw1JvtSJwXomPBAyZ8aCdpUgFfK1cvbnnL1QTtdqAJ",
  "key12": "3HEqBeAsaV9Xpe2eMWdgBq3tgEyGDpA1vNxhdrNiuF7b8tMDmiorM6aE6mLfn3xc1WgwNvCz2ngWMpeiYvgRFNLo",
  "key13": "2meKfh44uphtsxgGJa64KD3XLZqR87Ca1dxWmeg8KwjtcZcEZATwu8MVLMpiECnvf7UaqLjWkQzr7XiLkV3Hjg1Q",
  "key14": "2PMqa8qCzjwHvmiubyBvguvtC15QYyZT1npndQguM9PKmxxFA4Zt87pshzEaF2Zta5KLKc8F7oC7zPU98otLQ6VV",
  "key15": "23x8CxSyKZq8cnWqY1kprYHfK5PcBEQHJuUbNFzQbrKnX5a5AVtCtEvW6R1puvKaijfdBZAyz3yhpH4qMHcFNJe4",
  "key16": "4vZquhL1jX4YueNCbK7w7c2no5emRThWgmVWyu9HTdFkHth7MLz537ZjA2ffJd8sxue5VcnSjEM6wi9hYrWjPnpf",
  "key17": "5xqKwQuyEbCVgGndHJQPgPrM8KZhnKo2VA39sjSvvEBEHLnj7eWpMwbhR6QgAmDAPTuWyeV8GVs9vhDRKZyaZK2o",
  "key18": "59tioXMmtte138a4Rj8vvJchdUdZThTG4kBW7xt1zxWSV64situapDJqrdNYVLLj6Ldtx6KYVbopCme8fgAhNpso",
  "key19": "2rKsD3BhtryKx8ybbBwBLC7JD7WuHiyGQKVy9WCAiFmKrGd35rwHtdY3gQDpDuYAR62CLxrx1d1FHFHkjfSaxPFW",
  "key20": "5bRWZgQ3JNy7r87Ta9bzPXJXZff1Gc2Ax7azWXuVCryEqFtdaJCxz3KRFesncExiAmywEpLB4qS2mHv4dMXaM33f",
  "key21": "58Ut5gyYVmaTLGp6wVExvtRfMFT5ZGbUJZFzn1tGwGQnUrdMqrPhy49UGPu8mzd8hbrZqT9FeoTH64KjbRvhM7R6",
  "key22": "44mkctXmAPyKTVHMYb9f6RgftjgcuLLLe5uF7dKnapzGYYowYuYKi9Fd6Muxs8FQbrW7iAn8ZizzVKaSdKBKoZcz",
  "key23": "2xXbSefGkEYDB8TiZmX4GkgV2Hme6JZimNPdufcMutvFhozAyZF85f6KaBCXHV3zVE2oR4YPDD6kzzoCmuAtjbAN",
  "key24": "2ehPAhPiy9VFycd3uTT6p7RvmedK52ozRGkn9jfe5CNpwixW9GAdoz4JWmrULz5kBypREEhpzsH3Ky4fxEcTxtRa",
  "key25": "owJ4oqSp2StcF5PkZDtrNSkhWa1GMcrunWtuG4vJHgmSvf2h1nTYf6GSUk5qTy3CsdRNoDzRTrdNzU7V6E52bZa",
  "key26": "4C6KtoZEAk4LpfBjmYcTah39PVE5ANGDU7w1CZFM8tewudohCipv7eamr1iFfCzQUb5qFFdZceFWLJdNkQFJJ1mC",
  "key27": "3CiVXs8a6EJRK8b4ZXj999ukg7q8vwv72k66sWcSMB4aCiJCP34u7BbQpGt6L6Q4DxRFacTaNuud95CoA8CBWgcj",
  "key28": "uzKYqZcjquoU1EgXePhnN9V2uXo2SDMywtxkQ5tQrT1wtL4ZLePc5EHtHMjb3qJErMkWwcgBd96z9EGj2V62G3v",
  "key29": "52vLTref4XdN7i78W3YhV2Czui1mD37Xi7yQRoizdfH3FvLoKSrJKFVQok37pHcRLo5aRjsBpLgJRAoMQcnNJuUg",
  "key30": "2qpZqqbBMxhjmx8jstQPsepuhC1Q1B6y6qRgv77Ao2Fddf3QvPd6QUBUTaei1KD5FigNFg2y95bTUuBexm5BCE1U",
  "key31": "3ovdiNUiNn7FKgf7raXqWtm98duwGKC1dDPKcr2fdA5CZSzDowWDrLCwPuewvW6cYWfNMitwBdtyDggpJg2bfgPx",
  "key32": "2mXpR6GGJspym6BNod5Vpw6BPzGueoWdhxPtfTnLnc2xAC8EozTRgzbqGx215C9egMw6kH9AQumxYyuwcE2aLgRk",
  "key33": "5LgXomkqtnyR1d2t43h5FjKXgYPxLA7UVAztuZi6XKh7vCTK8ZjAfJcY7Ds4Dchh2WKf489CYbnBXhvk6PdY4Rdm",
  "key34": "5mNnnpkvvyQY3FhuRiRXEGa5QexWCorUi682ixyvGyShi4g5AQcYKH4TmmXx42sgcU51dv87SXwfKH2ZFb9JZzQP",
  "key35": "KVbcHEr8pUTFahBgBotNRngd1ZSsnBsdCBwbxGL3QFBL7CmEtrZ16GgwVWy5hiNg1ww1yTCHKHfRnXGtLkJJepr",
  "key36": "5mZteKmKmj3ERTcBRyeMihcfNpGk8upi7qtdtBVG9y7Cb9E7ZosQeuih5Hph8n3YMRNdh7seRUDJ47e6RKAFA8L6",
  "key37": "jvu9F4W5FGT6TEchrm1cxoLZ4mbrY17hZ8zMyKffS1yUbQAo5fyonb7cCYhohiyN51xX8ugQ69HgpoQ5Qn3VFcA",
  "key38": "z21JX3CH5DucqqXan9KxV7qfvCWkDAdBntmdGJ74oSw9ht1C8hQWPcezVukXSvtc1ngwssMA28coyEHtmwo7gv6",
  "key39": "3y1E6ciEBS8eFzpSesa81ujRNhr3LYnafC5wxbYrLbZxwWDizGfUFTd96DbVgQhrXQnQs9t8RZsyKNXCeruqGZo9",
  "key40": "3SnGYz75TDymJokkkxBqrL2z1r2JStiaXZbUzkkZkmj5pGCF4b5wQBpgWoFvrxMdGmSAaiGzwWMpKAGBtb2YK7FM",
  "key41": "2ZCsLWeXqYhFb4zRnvFAEPE9p4GKnUMnjLe4rKoMfNAxqAP16Erx8EJQH55CGmXFAeGNJc313wN7hBeV3KdZkVoo",
  "key42": "2pLdX6Ev81bsw2hURc7UzL1uUhQ4kBvuZvCMGKBu6Aduus5QNFpbhogJUiF5yggthTn67DJivrYrz2DsMi21jcFJ",
  "key43": "2au6Djgtqsmu3sxtjNgfYwcXdTfxgWkQuGXotPHfBgBAtZD7xtT2BxUXuhQtoYRwXaKwc6TUmFnRu3gggcsbyj4q",
  "key44": "4AvjWtdVmy931NhysoDxphC3TwwpFifXWgo8sZJst4fZqFoogJkBUEU6pDwaP4kHtNZz81TZ4qshzM4p1ChK8UDJ",
  "key45": "2Ab7o2NLTNGifARFGd7Uvy9zHCnracUaGVJeK3xnn4UBUC1izJpFY3yvDLs7Xk5BoGcvJ9LRjdfZKmknSUatm7Ao",
  "key46": "5CRCyxTuPjkQHDXCD9SKTXejSBiDaaPxesnV1gJnrhqbmjVzuidqycEaxrXi56fZ7jFCj8jZ8b8Zs2eQwYZQJGxy",
  "key47": "38Yn6cLyDy4m9o2vk4ptmVAV1V5syCRgT2dUfbUoK2h4CHVh85ff4G4TANuJw4FzYZD2tNyAbGfEq15gAQkXNGT7",
  "key48": "5xMuEXDDA6kLFM4rqBuPQjS7XQbgxezccovSmJZ58d85oQEwM7wDPAAF3nVCpA93K8wZcTzxqUMSkF7Szv9uQcuY"
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
