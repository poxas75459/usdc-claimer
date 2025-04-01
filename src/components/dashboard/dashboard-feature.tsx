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
    "4d61FM8nQsioXfHzdXHe7J6gTLY18tJA4r59z47wjAAfSqXkrYqGVWi2gFDqzPX4moQ9XcVzd7QQoYusJntHA51M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7G42vGgQPsMeTCD61f9nsySmQoEKgYzvth8RzRuXSMpFMzwbPcu9oyU9JboAi2hD3PTYyYAmY9n7HZQSnV9r89",
  "key1": "5GUanVfXXoq8qkuTxCSoL1GYmSwnuyPjMeq9KCTD2Rfz86V4xGgiBoFjFZ9ADji48JFoqCTxpNCEoqrLZ5mX5NoC",
  "key2": "2JT5WH7Ba7vVJ5ZiooS7QHfqT99dhEuJYaho42DErnZo6KcSMvqLK2sbDbBWb12BNgkwEZjSq1etW9wQXYKxhAor",
  "key3": "5nsAL4HgSkGtwTBAeoZ1J1Xk7dbu1CtoQrDWVCrW1iNkwWemXXYx8Hq4FLstWMaBbfbvYyDnH6S2cazEiN8qrRYu",
  "key4": "276jWvXkJejZcCoy5XqDDGF9MGRVJac2ShEvBku9i1PmcvxJoheKkdtgBRrDsJHTeXNMcXcPJSmWDg1bSCd45be7",
  "key5": "4NRKHUMysZjN5892xnD7fWBrAWswNy32c4z7ie5mJcj8726UZGnrska34Ltc4tZth2CJfhGGsMm5DvivazJAoJwh",
  "key6": "4BPK1JhB2d6Xdo3B8NZMQTGCq5wwxsxBd2qvti5deop5uBTkpGs7BCCRuJCL6JHh6Di57WfccpJQxSBHPqWKLtmq",
  "key7": "mVTFAZjyn3vfNQrGfHC2FUhAyzUdz4r7EZ18PMiGJBCf7258xmSHGsbeLYpfqaxFYzAbu7TwRj1TMLGULbq3LkS",
  "key8": "5QAUPL5UDDNzDJ8tgV8mJxYMsXGvbuV8ud4Lkc8ZBm33NfK89ZY2rFoeg19MfP2FidGCCBQvqxvPEp9gey6xeu6n",
  "key9": "nvo7tH6djgAxJ4Vp1TySkJjbdFMPSjjRaSPHXbLKGpSYybBKiL59ZVUn87n1JJHSSSHu9H1m7fWVK9jjWBqocv6",
  "key10": "51kfkWyXtmuyhDBkk1sAYWQQU4amSjJbxXYNnemDWkRd1Bn971W6tLEQjSULPvQP3Gr3B2kckjAxb13rxzaMWUfm",
  "key11": "B2XaXBeexd3gHJqRThhhM6VoDna3Hb69ihMvmfWh3yWFmRKGLy6KaJFP2wK6P1Ct5QBaRc1Py2jurqXHPwBC6gk",
  "key12": "5EYMNLHVh3arwTiH4SrdTSfPVBUHAixA1CeF5MTpbmKQisuQ3s37oeS3yN6uZYUeQ6u683AsdwZqSymcwKE3Ped2",
  "key13": "5WBoUWdcimrwpm6Jd91RkGuydc3BeN4XBrY8mhLJ5QATWS67xY1Wv5ZVwQEraGQCNVBT5nkuFAsxG7ZtroCtm9eN",
  "key14": "67rk7x1vG2jkvqJd2uthcm6d49BUio6DudzrZzL44vaxwbKf1RuJXXVnUSqyAXK9FRkAY6jRoxi5EwwXD7ZUczhL",
  "key15": "3AaMsx9X2B3p3T95co7FRh8tkVBq6JDP2o6P1fPr63rudtRQ26GhBBVkupx3qo4sS5ENKCi1C9DT4h8qF9fkSn5d",
  "key16": "3nJc9ZiEH5rM1X7nYqNMu2LTRiEYXBiHDgVEHCCNJ1BXBQPiXqXCcsFTMXC3Lrrdzzfu4NxooYPYDicpYevq8LAZ",
  "key17": "JyvyhangbRKLYE5tTuDKmfHfrd9g5kJDigzpxstDoXaj6cWVNbVYH89fACCgwpNwHAcV4occTxmZwRaNWYZogKS",
  "key18": "28mMdhzGRxXxVzCUuuKpmiiP7nXix36upQf46h7rjiS3LwqLfiS29xJp7o33QHAeVdGjppQ7Zbym9MLT6WQ2FV8n",
  "key19": "4zVB6itDvtC5bSwUu5bzUM5eKP6kDuxNbZDBRCrmDNQ2ZWEE9CPj3Ehb2CrDmoZ25TDvs8e8tBBrAFfDok2AhMoz",
  "key20": "5L1S74P2LZp5KHXD6HtytZt7c8B9U71Fc5CB5Kc6sELNqg5QopDezKJeRJrWRHcG3sADvj1vURNvn8WE22pHikPM",
  "key21": "66nUsThgqnxXZ5C3WtRvywbGYz4JyTtse9x8HrzbruuiqaYUwPdNzojhAWd7ttMQbEzEkb4H2Fqb1feJiede2mR8",
  "key22": "2HpGyi2YFEiXk5EDtJSKKAbBJ4vuXGr7j6RkygDWCLYQDso7XeXpCrVE6oe5CxSgpsbvRinnp2JjiBUBqPsWjowX",
  "key23": "21AiL59d979iMBaodoHNghRYPfFmdKkpqWdruCm1bjhdhAoHQx2gsic3hmn6oJ5Znumxzg4ddUrWwjhPxGFthA72",
  "key24": "4HVnqEa1pLC87fw4JFsAdVWr1H2fxjLWxe3BJpZVcC1hvFYyUuQxwgP12izyFids4uC7V8CGhoiAdjNjcQafVrhL",
  "key25": "56dzbSwXEV7mqXiGwZbKZvyxJ9eR3SP4tuTBsDychyhaSj4gCv3XibeRN9dojcYgdmrg4g7PDnVCQpHvJFF3X5ot",
  "key26": "2AVu4AD25Mh1XrUGQMyLCP7mNUeFjtfAY5GEDtxmW1Qf9mxeQUu13KMdnGppJvGKCFmvyyhgYvUuPTS3Do1sZ5r3",
  "key27": "3352AFkavP3Uctxczu1QngBxoxRXTvcTTukw8TpBTwnLv9Jgdt388qe4CeFbJEknRxMgjdFC6WQTjq7wy42AWNMM",
  "key28": "3ufwWXhzHRmvPJNJky3QLc7WD4upG8usExynMoVbHpKjHn2GqRhvMsGcyyXNFgPXkgHVCajnmq812jXdVJh883Ry",
  "key29": "nkR3pzrCykmapRtK9Gegju2fUaetG1rxdRy4jitr32Xku4EeEqCft59krHstiwJXnHNmyGhCaoxJHhhWkxCuMGY",
  "key30": "3ro3H73TPRbdCKCWqXxPTAR9HVwc18YvypphXzKeuvCyCQtQ896rCFTpFMdmGpViw4EMs2yMBpD2ZBG5hXCgJVno",
  "key31": "xVopi9RdLuPWeANGSCTgh3pxoyB2QZFwDYPormeqUZofdEHCBXMVCWiQcdCoXzuhoamWXLbBm2ienHan2zpu85H",
  "key32": "52y7WDTSNvTzrvQiNVURgqQiW2TkQxhQPtRFUmLLujtwPyXdcMrBHbT5pULVP9Z5fAw7C1TZqwhno4q3me2ZVgR5",
  "key33": "46XSsbzKjbY5nAZSzSLGiaEyLXxtm7x58AJCSmdP1Vy8B7pDmrBZJdHeZNoJMNUqofWtxLhctSVNbKGerVrESPsg",
  "key34": "3Xv6m8i1S6tBjxsewMrzx1xBhmEKnJQwk6S65ya1Kh8nEt6SHcKkTjeozqTypAz6ATCc68GTgJm5mQC4jAWkm439",
  "key35": "3YeqLwHzuRM5GawJyiTthWyRNa8agxdcPdRe3AiF1GoZmRDprVzid7jSoD2mzFBCaVT4WYUKv7BjDJnJZv8kKvHY",
  "key36": "2A9qMTN7rn4qDYTDDq4JUSnFGnqouhr6hfv48XEax3669Cj4brda33RWsi6fdABBEsFC7zvLbSR1aYq591QU48GV",
  "key37": "NE7jiUEE4T5wBf4H3uCB9aPrLM61pj7NXQG6ttgupp8mAEdBSoDEGj2pE96QZ4bG19cpwXnEUd8cJCrxRSdg8kK",
  "key38": "WJzX34gsf5YnANf8UAGciJN9y546tW5xqNSi2bHiEkd25TRVEcqYXmFNsh9B86Js2AY8sfYPjgnjMkUJCxQQBba",
  "key39": "4iB9BQgXvig5dkFWVEJbmG26SUEACRZRXyb5Xf61FMCuXDj5Cm4SHbrVVDomJqBS9xuSdvJUNB1GLYZU3f2Nt1zM",
  "key40": "4P3ayP7qVK7vawWgcmQn5v58uacr1J1rQdEbt4awriP1VHxknmBQC48ayJhzeu2Az91cKZKJbJLfPRiJPwhQ25Gp",
  "key41": "8thPqaSZ1p1VoWEdQdsaecwms48RoGpA5FP7NKKpCeMB4UnG7e9o3WxvH6NHS8DHAip7eqcPLLBekTcwW8CQdhU",
  "key42": "5KjKagd2iWSGT6SPV2DgoFFY12AyunqUXz1A6uM4i28mt8SWWbsF791PfzHLARjVn8oKMTR9Na4LergzLCoo3E3v",
  "key43": "4BVHUChyFKtSzWBprnyjBYBetPgRi5Ws9Nvk6M4jWexGygbb214nkDHtdc73fdy8JK32p4EK5j9TqLM3RsNgCVw7",
  "key44": "4pcJWFaMbqSgBhgiCd6mSyGBGRJU4pbupqjRjSAX768UgWjYypu5hi5yVupoVTnZbJuPc3aphcJyBy8AjdA6bbhR",
  "key45": "RFHnfqaTT5KvjuDLHDts2SLyTQ1JzRCcp1ceEBcdG8sY5aVgVJWbuPhe3TxafE5MtWAYZzvzJBeufSYx3rJYdrz",
  "key46": "3DYqAuZFmpa17sSLF9qcEGJ5GGHmFGdZ8xB5VuKKVw454JDyPur3xmUWMvAyAd2bEXMeFCnLy4E9oNf4ca5oKKH2"
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
