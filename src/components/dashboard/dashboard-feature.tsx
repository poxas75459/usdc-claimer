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
    "4hyCByXPpk296TW7B718uVSUgXe98V9BvNkbkVStci3HR24gQLiUUgVdxBEFoy37hqUL3gxNiP7Ps79w7nQ4CPpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ato9GCJLE86mEpnBWVCbKgw7gtMpoNboDDK1sEywhHpvHFB524jLqiN8sfPnPXcaKdRNSoDQAdfcFH62WJJ8WN6",
  "key1": "2LiJJSiiUdsKmB3McVtCufYtD8XytnEfsWXVJCiTGzxEMBuUBNi8ZbKEHoE1pHFwZ8CXW9zwVFAq5rNbuzDgURgp",
  "key2": "hBBppJBySUaAw83SufqH3eUWYxVZnoYVS6cRpmp85Md8Kz6aJWGXgtxShbDKMfsxEgUP5WeSyJHyqQvaXoTEdvw",
  "key3": "29iCyKW9QgEYd1z6PA8dhSqLTeYc51UbXXPbqYn9mhEmrX8Kk9oHi8wc9XLQqYcVab4SaQonK5YPWUaNKBpto5Ns",
  "key4": "4E5T8FQq8y7T9SYWY4AaYxKUhZTD5Pn5qX6iRfMArooVhjddgANqh7k3HTksSyo88arBj9fDukqhtCuDuTE4cw9F",
  "key5": "5xkagcXmjKzAyUroBbXJHYm3hpDx7Pnt9UqK8fuKL9FWqUWkpUxQSWMcVLaBBxVNrXChLXbeJiMW1SWKgUUyGVHg",
  "key6": "4UBKquvaogSuXzxpmwa6DbYaESnQUdMj8xDTvUBFS2qaWg5VrGwYwdR3G7pWbSizz1Nk94Svazbkf9kbAfMqAyg5",
  "key7": "5sdYKFeEHv6gRt23KXFMH6jWezMtKghaSrvMs8avbeufJY4hcXHfpJxREL3jnhoxvkoFfT1PZT3jg7SCTAE9jM9f",
  "key8": "55aXK2fbuhuiynTBfSPSMTEqutvRLGhXSynSWSWTurUbvuFnxxaN5UbUyCSr82Bqu8V3S8Gj1JGFd844SetPLw5x",
  "key9": "4AcYo5HkpHeewF5YQij2QCkgN6vX5LwGxzmTGwM4pLueqYcxDhFZETW5XKRBHoNhfUkjKuwPzXkpHoHJbPVK7rDg",
  "key10": "3Xs8XbNmVy3uu2mBvX7z8tRhYjtpKABnzKqiro6A64JTByLBzsrpqCLiJWWTEnBLPTxxjvHsygohKXmJc4jE9thL",
  "key11": "47zaCxDhcaS9zsKns7QtWdViKfFcb4RmmBwtwpP7vV7QeatYPMNKYEZDa7UfQ3hN44GrngXhGv3czvPGzhz5PPhc",
  "key12": "zYuaLhHya3t1BHBTJHXNf3Xx1AZZv45UJZELtRTfubRTPQwsx2KZy9ac5tkowVqmgnnsM6pMCKimPxNDXq6wXm8",
  "key13": "5XAEy2m6vgEpru3jt7mQF5wbhi7gxHudsx8GnkAcYStE4GXRBfvvrqBY2ux1J341aZirqnhPoq4iGzAqPgkrAMs",
  "key14": "cptddw8ckbVTpwaRVyzbrULYvqXHTz954xBA2Pue5JdRMa1N6AT2uAaZbytbTrwhm5cXnsd7ZGCau5hfWcqrF7F",
  "key15": "3h25K3G7YnNGnuFgfZ3VhHW2283JGKD9UnShP7P2NHbw79FJQQkiGQ4wqfQmzEdyb9GTYaPFh6GKKVccqmVZin6T",
  "key16": "2AsJsWiP3qdwzeYrbmHzARsJqBEqyUe7UwExaWyHKBk7xFM1NCe7Yi9tLFo9qK9Hcftpike3sUezZxdjDs8Cw78p",
  "key17": "258tbFmGrqURCFXBo281jCtM9eBcqFKgKfHC5VD1FxM59soWcj3vf458dj364T9F3i63c4oiNC51ocQoHPFpiugr",
  "key18": "5QUCqknqnjGV1TaSLU4a7iVNXmsJLWXp598xTk8PqKpiajTJKsPsnhgoc4TeG5aBSL54JdYoiZbZt5fTD1veyZj3",
  "key19": "2S7R7pEHRLcu9aegwWaiUeth67yUsq7pGL5RQiHChW7amLBnrEqhFWBAacYuHWWo6nRnaXvoq3yzWPxEq8Y8TvW4",
  "key20": "4YXXuPjW2QadaEPhepDgeUR36dpeUkyCyw23WJ4SqwhHN5M9rbEiGj8zj7poBdJphk8wnVy17gtuTcPSTBhjgWoK",
  "key21": "5ppDLVNHMJphPJCL1ZMktQsb1AQ75MD3hwoPF8tudqwTLHkQdek2BUwn7rxBrtkTHcqzthSK86YUXuVyyJeHtsRV",
  "key22": "55biTiRxfuV1rWhX3muJJapbxSzzcuGkiqFcpbHjZTZUUohMSKv9eGMwgV2DA6KPQwSUH5LfkZPPgwMGxnP1DW1G",
  "key23": "46FAKKqVbPHwCCsB7KuCWK8wtX9m2j8Za2tDDXDHbuj6KivpiHvndTQAAFARB8HcdkwbuZUVxuuHJzDwqB57V4Tx",
  "key24": "K2DCKZxJ5ZgDmqfQ2RGteAxCJAHFcbELeTQXkQbQYyjo3a5f9RMVhhc56GM6Mm3MPnCHmpCDCZ2so1KHXtt7Rv4",
  "key25": "2ydJjLuKS87xEqFNYYHVReBzNVVzCkYJ9vggpKwpyNqEtJdQLmkhTEpvtZZxphdqPLWbGnoWbWfiKi9MduYY6AQu",
  "key26": "3aqs49j52HT2AdbqvE5ny4NUZVngDqu5cP3YpDPhF8sDneLnSgXCqqgtx8vTXZc6ED4aZ6DCb3BkVo5a496mvaoF",
  "key27": "2VKnEcqAQesQEZsUa4gWVJeCq11wqTuKrNXmTNPimvHFWyCASaiRqVhjK9jJN8LtaHBETEq1VMDoMufAaKpBYag4",
  "key28": "TcuSBoEqDnVjvBCdJuYNgPq9BA3qqgbbKvyuRdHmpYqFvosw4Ewzx494UF36cYHcr38eE2ZS5TkBNSVwudWg5jK",
  "key29": "36cXatyyCYHCbUi96rNnXyssw7T4nYv5ourHVTMTd4UPiJhyzRyvRDsPD4NFA63vRS35TemJWruFyJSGJP1A1jb8",
  "key30": "3y93D4UMThuBmo5aEFL49DnvS2sqFKkJf24T3x7yyfL38C9E7L9ToG7ALrrG1KzPpPDDJfMofUWNyeeCcwDgoB1E",
  "key31": "3Tm6fs1haNK4bbBZ5GRerrU8cdratQqEUL1Mx4crSL6KrxRCWYRP46szKKvbhw6gsmMWhwFdmQpkjcR7xc3n3F29",
  "key32": "36WfqNbMziMrK5RXYQjzYCZHz6QM6HgH9FL4nSLCzQve3H8cw1wxeZrbdXBN3VPnvcmwbrz2gESpD2vTfy8erACp",
  "key33": "5dzVpWBsPWWWcxqmiARWvkpnDH2UNUGqY6fPGozrBwbqjiHM2jUggx8GXvWAMD8BLD24PktvhsMni2i83DgxkFbv",
  "key34": "2WWAn1zepotTjWwbn9sAQW95zwD61sTcatuuQJu38v29TEmwjh2SZr4LJ7pfEthPqm65kTvic3QbZ9WKt4nuf8DU",
  "key35": "4e8hxSefKFD5HCAmG5LYxuseBp51wdBg5e41FWE4afE2yR7wWN9PCL314ywLvNweybPvDs9qJptfL6yxvrEMkFA9",
  "key36": "7q85NGNTxNEsLqkqzDPDvyGdyHPVWZDmaF6e7gKdG75mypmDba92Uz41bsGgnwdpj5vUioShP3YuLEv5S1WfVCh",
  "key37": "4vYkx24dATtW3YPHHWUL947dFxQ83tkhzgSYLLPU42oQhaFknyjEYykvW1r1154rJkxVAPiFy1UeDxtxjpDEAHX",
  "key38": "4gf8o3vKPBrSSJ3puPgsFKyRBS84XMGyV1srMU1YnxZDiukX7pNgq2Em2tym5R4Zf25VAe1nJcCo1K4QoUi2KjNL"
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
