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
    "sdRuQR76oiTqH6gkofq3JayEj4d3X5SzBsMLSTRqKSZY9G91Ua3Nq4Aswg9cu226piE5ogn7PUNVefFBx8NXaJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ivCyjdRUPu7APS2NQrkL9daeh9vuSfoNg4i8v5BHufyKTvRxwSccV5TJsDBXTpduMdq7MyVzMCnCABCyrh159Mn",
  "key1": "3W8t24yPtv69SqaY7hfMSECBiqusE6K5RjqQPhkRDoaZpz8y4UP2nuWAAd99zViZyiT2WLAFQ1jKtFGqKpKi2jaY",
  "key2": "3oVPpcoqurkaCAPcZzJrs9MPE3TfHtv1W5c6cfUsKMgrFfmuqbY9D6r7iqVaL65fFnonovH26BNZu6vbkWxmkEVC",
  "key3": "mRa3twZRrw3jbfoW3RsLhtvANdnuqoBf65RwHsNNfKXUoenSKiamq2q2yTJmpwwzehH48GEe9Ub1w24vhUb12Zj",
  "key4": "5r2JcQzVyqg9xAg5NZ7bV1iS3JK9rPL6Pd7681waf7p1ucQN8SCWtF64PENZcvyzh8X2uxCJ2Ghi8Udhz1svKaoQ",
  "key5": "2HADpVFrddHunkCqR3WJQbbZxA5QKShcMNU1WmgkWhYM9HnQrFFYMX1Py1EhADN6LD94UAVHn5HVhB8TmriUoatv",
  "key6": "cmWwa2fb3mJ26SqhDwsBQgnaZeNYzyVED54PLuci8HvCgtyb3mj2paWob2BGWvFMDL3FS8PQswf3yQJSkXk2U1e",
  "key7": "2cgwMSoqfrCEBq2R8borr53T7bTG2kF4gRpsshc8FFHBNh9sEtGWTEQpxKfG2FWLu2wy3buqb7MCLeNkyWDQbuDC",
  "key8": "aKEhcMUor1zXmbKtJaiDhk1t9xCc7ac7sr87Dw6XqbxJtd8jxo76cbmrLLhbGP2iSueCvHLuovtuYFmUnC6Sib9",
  "key9": "44AAAUeaFEh6RKPWboiCAKb3eEY9ig4wMjG5F24xSXaomQHp76gyWKH5TRt64bYEASDhN3WNYrFtwENpUn2vqpEo",
  "key10": "VjgK61hV1AjrKmadbCUcggchZVW1f3zV8JF9XEjyDqPDEmmiFAbDZcefwdwZkggryyZ62PzDGHh3JiPKdEhQjZj",
  "key11": "4SNDshkvR4Nf8zJYdetqwRY3Q8gkcDkDNDSPMiYXSzpJKefTV7s39jeubvf4z2BZHGuytNjW2bKaiDDHnTPCqaHW",
  "key12": "5eV26yAdyjYRvGZ43QaW9VgjS98oQNasgdzMw1uZFEwQNm4XmMLUzHCPrK2YNBFVUmRTYZUtUnXpWddUzHnDWjBQ",
  "key13": "f3iihpuGSGS2HBKnyxxmwLhxET4hFQNCrdoNk31A7nr9tXnJxLm7LyT5FbtYEXUYYgvfeaCKMobnTkyqyCCauVg",
  "key14": "ZuZmSgYcVBeSzmC8xCt4wpP7eHXu7DLfLkHG5uxyoiWEtkRu3pCeNWETaiw99dFmEf2Ueh9FM3jcWr3au7YsPA2",
  "key15": "22P25zkL5P7H7RpZBNzXN1ZeLJQwwbYJcWq7tg3YXFKPnQq6jsyr4Z2UdN33z9XBaJngBVC2EezD4vcCAWKFgktp",
  "key16": "5US7c9GGisoAE6h3FYcWi1b7rTopG58ZrbCUWR8BLzjU4AXnFHJuaRdzLf16ndbD7QVQPdqsCJNi4vsDUpDGdg4R",
  "key17": "4yaYvzxgS3dxDY4hFAfpqhqkYBGkvyjQh1D4ZKFENw8gAodraXiX7AMT3UwaoxGRygxr7VSwVNuLqCEFMoZAtUFG",
  "key18": "4AwnsJSp3g6FoDEEMyHT1XivywwzYaBKg3kgG255MQAGd2zr9rRVU7jpM3mKsRmwD4rjSXKfZwtSD5yaHd4ZhMvP",
  "key19": "xmcdvnmLxwMbzT1SyARTyWHrvgvbJraQGX4jqz63iree8g66tm66u5BKtHcAPgw8bp96nx1uPSthos1AoxjTebx",
  "key20": "2GAG2Gc1UWpK8M8HHpFFfa5Wmr1V5cdQDMt3UhMF5HeaS11bUf3aWMJyV1jJgnAiDJgB9zRsSzKHh9oq4WijBebN",
  "key21": "EeQQWDoxrMVFVSSkeLJ7pordvkX7Vi3Z81QaCeEHtkENxTQv2ZSebMbULRmikeoNJuo3tGMhnW69KQHo7mTtHHC",
  "key22": "2GVwJHxVqNLAxCJMtBjtMpni4M5MZ3VJFr4xKYk81e9LZ7pvSt8pguYjnEAzARtbFvE3Zz1iayZkkK1DcbAYCtyr",
  "key23": "dcbm96WG5Aqwksn56WAjCsL3zjVVMkxRrXbsrYkzeJr3niryTeQHxHH1ob4Z6P25kPCuF24XtD5npjDi4twErbU",
  "key24": "2bUgjntQRdFUeib1iRB4XqeEV3MAyH6rTT2q5apwvueuc9JhUnmw9t1JuZd4FGYkTYi6M6sJe97t8cUYfJd6SqmP",
  "key25": "3uTYKUwCnsXxgRg6WDf2zsGeQkMhdjV9LZNsbQPz85LRJQTWRmr5ZGxv3VfjXqCy8DFRUvb9Q6qkvFyxdaHWpKjs",
  "key26": "219NAPH7m6cG1uHr3JoscKULD2E3JK7PaLNkN6g7NSCoqYW4WWFh4PdfKMyT82neVYLcgS1uECN4bAC2TniNmqtE",
  "key27": "4yq9FnR4scZzjCg1LAJXqqFVXqH2NJfC4VxP9K6rBE5VKWuYa8xftTpGUsF1n6n5zHqW3vNHfmo64PYqebVbBvkY",
  "key28": "5HBx2ZJF1cqEqUrXSDp2Aki3LkDYQ7pEE1ava8LZ1BzqdahwihmWaPwVT9uYgMToo4CN836jVVbVQoeU7mZN19TA",
  "key29": "2cVNBHPgtyUsRgPKHFWGfpZ9ejHwkyDpksb5Rshxuesv79J6Yvd3Wf4J7oJ8D1RTj4w6LLUvpyCmT1P6cQ9xN431",
  "key30": "3tFPaAN78iJ4RxKGLyrMjgsEpAtDJiDmWVqeZG5j6HgN8NB8ksWVmkvBhSWnaWXbyGEKdfomUqFR8Q2DHehdjaF9",
  "key31": "yp2tpTrUetakM1TQUMUfDFJQnkcyX5KB2ZCjyaEk3uodbWYjsmCEPKL8LQwDv7t3GWmihs8xgxiFoyaTxJn1SBD",
  "key32": "3ShZTNJpbgUPU8duF96sqE5hYmaiexuhBgrcrL2DonYo9QDBfy2Q4Ncwsido9mRJ3m69voVzaVYHMdytpaBQFjXx",
  "key33": "513rFKm4YPd46xJXtU4tRQbTcwDxXCFvXvzEQSgqzxJBUax1AhQ2JWwweettFEUkhU1Zyd5jsdt9e6CXM31a6D43",
  "key34": "EGv6ywfkRq3uJ3PxedWhUvfg2w5tNRF7TtGmk4rCPK4iZ9qerWf7TCcBJzieFZtAYQ7FuddASv7omfRMsJAWpvA",
  "key35": "4JARpJkSyy3vk9NLgZxQrpgniXudmRNXJEoPN8y9Saqums6d3XDPCtpTeLYpai2vVkxZ8hqmu5XQKRvCFXVB236z",
  "key36": "3tm15SPq8PQmV3AY8jJitAofdar8zKb2ZHdGuzuubeYRNA9ZPNonPku3FS2xNNC3RyxtMpoBwJkYj9qwaGqS3om3",
  "key37": "2iuALpJqSUxuwSZGtJmVG8Sqj2w87VYqZgy3G2UEjH1z6sNGrkBLzkSH6gzXonmUot75JXHwzCTotE1Z7VvYhFYh",
  "key38": "2UWUbBgvBe83n8p3b4YWWnLRtPadkEXpVfzKLRTvw5xP7bu9QsViCJM1Yy46zaNUxncf6MsM5hAfFmcifDh1Dnqq",
  "key39": "5aCYuqTV8Nsd2aQtPQnwMAyfrKjL3azvLScKTkVQiLQTYQH6okxUvfYse5f9zzJcuUwRbSq8KWHymWnReeWUShRB",
  "key40": "2uq82c8gndkcHRtjSnbVVSUhVCSDbzVDzLuNBanfb5Zq62z4nTaTpGhoyXJVVZHNv3AG66W5GVnQBAaMRqSTSmBE",
  "key41": "5ts6uwuVEruwmT6sSdie3Zoer3wYGDAB3Gh36EdRVeb8HE4PfBPfdU2q3KKH3jerDR9At27zzN4j1DZm3mmKYRxL",
  "key42": "2KZRpzAhdu3Sb29CQRnTBjuqWjkefZ1Qpk3SZvppHt324BkGDGT3ggwKTdxKNKR2zXwhzDtHtSHtHE35NyjutBG3",
  "key43": "4i7rzTnBTm8NFqiuKWNWw1hDnyqjpPem2szt5Vyfix296JEpJ68CBkFx5xcnFDNDeiumbMeAYVqwCYveJrAxpB1Q",
  "key44": "4RCBfYUoDSqyg75NkXRW3ucaqA7jrrkVjUXuJkNXFH1eCL3rQHq6GtGCES36urMCan8wG9EFmkRJYvn2oqD8QJ5Y",
  "key45": "3uHsEurbWvAraY7REHkosXT4G3Dr76JPH613RkBdMT3vqWXRwRRzUmYAhHTZtWhCoRTPdQMubGmNe4Eaf9ph97it",
  "key46": "4grXdb6iGq18j4WKoHovZvSNpEpERgVrLjNXbnUWWkAiBoRjMTna5EikTrYxyhncRFpNbv19q155Ujub91XUWu3k",
  "key47": "37YDberPSXZjpTTWqhPdyKde2WhBhXrrdJN8cmRu9caKtSybXv5qxcQy6VXR5HoFD68M1E36D478sPSCz1ww6neV",
  "key48": "2NwhUGMFrWbAGwqreDXowqDktJfubEXjnBmjRvHPPNMnRD4T9QBVLBW4mdtwyaVQsvacULRJ2zdFP3XzRBLeJnmd",
  "key49": "4gDMxihtXRiAgH7HPvAiSKQPUHykQnNru47iW1eLkV4J7HJrUx5vDzSiircz9mxvPB5pAFwCALjf5Z3uPCvCV1Mj"
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
