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
    "3KYEBs3NTpruhWu9ZcfMB4pit9Z3DPXgSX89a5uLBruP6UxxxVncoyJc9wpQ5YnBekc8XJXR3mGKBjYtbV7VCNVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCmRwyxzEvboz3ByiNir8dVAaLRz53YGDDT4HpsoSraeD4u5vuAnTYeNVcrRdtLL5v91seNEcFQVWi2RyU2QK2L",
  "key1": "28HoZYqFSCyDVDfKjiVityAq8JVXrj4AcqfWpj7b8t1kpnySRWDGe98U8R8HbEojCFgJYteQcfYq6PBDGWFU2LMH",
  "key2": "4sUxSRMm5uQHbhsW8XuN4UY89auf8afJD4wgL1vptRCQwDiPJTGpn2fAMAo3SP6YAooGC5Ekhx3K85Q9uMjtQAqF",
  "key3": "2WUnCuotmHGm1yxbQVLBWdtd5xk9MqHVeubVr3kUv8MJnbnHjiKyEvmxG7XcimyfTGe7V1GLnBTxjtsSoDgETLys",
  "key4": "2bhZDf3Hk1TWcJx4b5FkH8TT6NZnBo9z4hWP15FknzHUHjRCHiDgTVPB7CUVUK3wF6y5xStABsuF6Y3sp4zNZ4ou",
  "key5": "3PK278n8sUeYepmX1DLfGuDcwcX63LBff9pVCJQwfDEAtVjcrVQcKd9WLAGrDnDEmXbPy44dBNejd9g7C8H6S8kx",
  "key6": "3rp9TQjmt6mRmTcCyhTHNw6fmpP65iFDkAw4bbMBt6qUPg5ynorYoWYDoMsWqN2XBqFst5uwQL9sAkNxrThgHyLn",
  "key7": "QmoZ41UNkKELBkszFsFpxrJkFcC5Wasm2Kkmpt2Gso5JHDastcyVXvLP12ePh2nr9RZEpGmjXeWahC79VVxabck",
  "key8": "3jRuNK2ZwbKBkZfuSgGUcpBQEtnN3vhH1M3N2e7az1uCdHgVjreKR3p3w5dG9HEa2BRtKhbbJ8hGP5iZXHZXTzi7",
  "key9": "7wGf5X1emreH9VP31Soqc1nLfrY5wS85DcZTtgY2omNGyf6dwspN91Fg1Wbb6o6GzPQKwonfdg8xWAUWDdKUwJ2",
  "key10": "3xShcqWSw3Kbcjynhpg6VeMXRiDq5SKcJNrVT7E2vqriW7wemyARUYSmsefoKGw3JbD16FEBZvqrKS5s6VapGxgh",
  "key11": "3w3QJP7TynaMwWJhTNZautfBsQqwHymmTjXwrCgBMjWEpSyeBeCurw5c8SkLShDXnBtrgACy9xiRdqm8ipvXakq8",
  "key12": "tTfJ3pKxb6D6YgvK9iC3WnAZiEzgKQr1reh1exunyaUpked5iFLWdSaaWfmCBtsog5GRdwkzCJbayFvh3S6eDvz",
  "key13": "w52ntqjrKWsbjJPXRWVi5ZPZxP8ta8c1FaiZ2MDNs8C6RYugZeQK9kbUQngmnVxrbtDMQtMmgqY1SrxsYb7sYqK",
  "key14": "41JHjsLUEGvW76utnfccm7rntX1XGcpVfMDWmwZAgAiqNb9pX9s5NLGckBetZXGyRDBd7mJwwmSpsAGuGmho9XWt",
  "key15": "2hbCCjULUEh9LsV7QNWnQzBXY45VZhm2gvXGpfTT4uAEpNtBTx89ccpHfUMvknSsrDamDUmctsLsGTU8778qF4SM",
  "key16": "2tKrtdi2YaQr7HcHhB9itnrmLzpjkoPHFE3vvyK6KtUTSGXqoWRXx87b9gZE8yZDGh6eRGe2g7R51GPAaCc7iAeL",
  "key17": "5Yeb2Z6wYGW3zR42t9SF1m4TkNxCiTkMBJMzqTd7Eiz1hWLaM4mZ4rkTDZXk1CD5CTiX6qSffEfmup8ZdsT2fyvT",
  "key18": "55VLMTa6xSDN5XFYm5SuVheC5CNmkmNxcxHEuCZfV89ZTF8NcrH3x7NFsBp72FKhCEgzp6DxejyZ7as77HwjGd9k",
  "key19": "5Fxzg9A2kfKa4uK6pGQV2h9yZjzrHSn13Ra1vWWgHFp9UmDzVch2oGmKrgbjMFpvXG2y9b1X6ervjvMSRZ3x3D2p",
  "key20": "2wDASBsUNojqsMUJm4vxWetSqPNmNXdxeeSgBhPwjNZvwqjoNuLaYkk91dzbuHsFmHsJJCgZpLiLPUcQkmuhFqjT",
  "key21": "WRj48g88VitebRMAagKxZw75t5xNTZ5ehpdpRqFQNZoUSHcSUqCzU5uDbAwF2hHP87Zt5mDXhSzwGhtHUVEKN6V",
  "key22": "2b9TtCYyeDjZBUYEspNJvHeUihBsqaC95nFwKwspjP1tfiDuoygK3YL9Nqyjmhmt1AWJKXPs6CEiWkjB7kvhdfyf",
  "key23": "3FPCpHT7vPQHnn5bJtFhjxrs2aoKNetS1NsmxY9bYYEWEQFN8RksWzNasuGv7NKqPmsVjY24Rq11K2VaiSKrJvsP",
  "key24": "4Eevdsc7vmtg7rWkUZzwiDRSq5a1nUcL1ZwPDhCrQrtziDeuzpxEDCezMAJKxpgGhHHQNUq7CairvDoz7U8LoB5G",
  "key25": "4ogEKcRGyrmHoPuVjeWHjWeops5ECXc78ui1fnPFwsuGpREgRyAkb1HSqLsYJhuq8pTCx2gLjT1oJx9Mn7mLaPSJ",
  "key26": "23125w9qowzcFGwiifaowfpN1h171hdYKmqcVNXpBowwNeAG9RedAjp6bi7UcoSqEgtsUccMQvnheMUoqXkAYty9",
  "key27": "t6FL4szrngrGpkgvCQyuiXQkR5VMwikqRWVJD7ArRaNCn4q89PnzsSsxyh69EwTJQ5HzEdougsS5zECHYcbmBaQ",
  "key28": "5NniFrPFBe4WU3f7xT2xo57XcEaGdATeKX1ykTyAiZX8s1TRApVUh5kTKuVg1WN1FYwA7RGGazm2pV4Dn4LY4EKd",
  "key29": "5qbhcENrbCbNEz4yoXLMWSKgCz73m9g2bimNsSpaUjdRncdxSh7XGDYbwAFBr92FErnGdrNVL9uGaqWWiZ3EwNxD",
  "key30": "FTg5T3FVWCmxMNia1XdSVFmMotDyM5brNjoMZKvFpPVRU4c55YP6gvhXpqSUF6g6prL3jNd7pvJ2hwa1kegSW1m",
  "key31": "XXE25rMCq7CrWZHSAcDZLTJk5xYwhjUtjiLLkeDgZv4A45dcTaEwESMV28dXLYWvcz8xVLj4oVXChrvgoQzRyiD",
  "key32": "NLgNTRTQXCMXUZ3NSP8uPmosknHB9E78zfHGxDNzGVnZJ8TwrTkFW3zvmyB2NcuHV2AqZfMUXBTKiPWKZMB5LRx",
  "key33": "2ZCUUtV2ZzKcdML9MU7YK1aCCRNsAsLAMvqvkY9Rvv8npfAijpLfiQNxKvM2cicNQAFEt4sNFGt3bjUqxbdYce3h",
  "key34": "3L3DDNsqR9vMec672ZkNzX8DLzeE3xNxZ1MAajsNx6rDRi4fwxFASHvC2fiaiaHhpxBG55t9xwYFgNcUeeUA4p5K",
  "key35": "62RtJS7EVg7RFqma9DNSdcU4PqMbt1hgtfQa4pjKm1yXwMUN6o1WaS5876v5GPUGVtRa2Wgnp9cncCW3SQpDb7Ve",
  "key36": "2k8WEE5Tz5WxdnZ9uTUFgD6fxGS7KSq6pLV5iz4S9xYvH9VYm5FwCVsKznaqvAhNrJnKeurznCgjhJTp7gyGKDj6",
  "key37": "5dQtBMauvK2mD8K75GAdJMXUTmwp2tBEVYJ9YJV6qrgFWoxG4LgJGSQSCa6hoJDdqT5H6atpU8nmmTdAdQniwkSq",
  "key38": "4X3h7wvKaj8mNezRDfZ7iRovXjXUTPHybLbiaj3Um8aD6VbYpXmNobfUboNSkkN9r3HK8UYYKrZ3CCjnZufbR7Yg",
  "key39": "2v44cHXnvAnbZwNhZ7nuTxKP5UH7kc7xSbmCstXXwY6Vv9dP6cDUbmWJb9hzY1ZGB6g2RNBs7dJF4hQfkiTTv1YR",
  "key40": "3m5y7gau2pnL2pAkr8DAZHnKCre4u22Q98CsmKNZCLSBvNQbWD2xMyNsxHqAwEK7UAaCWtir1UvqSYkFXjEGTJK5",
  "key41": "2X4zL3nomyZEoUJukacXoPKAgib5tTCpLVmVxJvQ8Kt1gEkqcUNZRRsBUE5sZfsexquEhSA3vhDE3YCgBqbeHvj8",
  "key42": "JfBhswMotV41ptqXm9ohxDgDVNZYrhBJudPwyEZoneXZ5tbj4KUSWkd8b6BE4CbuAfQvbPMpQXd3QpV8nUsBDnu",
  "key43": "MNk8vvJAmztSTSTBDWabp8nhiGeqqU25wUqjpFVGN6bBYDgZSySbT4NEW2oWqA7VBRJEh1HuxLBvgXCJZqQvtwR",
  "key44": "5CiH67w7bvVgrXLjACwJGVLYERXQLvGqe3Rbjw4yTmK3iJBt2PZA3XqshAie5HPuXenc8R6KkK2npHKBDufeKdo2",
  "key45": "MXpF68oRfpSe5jt72UQxdr3fsepnjasUzDG2ZFh85BHAaLRiNm6Go2jfeHPuCiqHRKdAAD47YMMXM2AtvrdrBEu",
  "key46": "4X4sDACwV6UJuGjF9yxBZRWCYBMdB3DZhApiVxZkVCVaPGpyds2JJjsNK8fAXT3xsKCikKp2WwPgUEGQZE2Fmtcx",
  "key47": "tgqbkcZYPQiSYhYm5CPdhBK6Wo74uEJsiRKqzH8jBuVBbzv8pTVBfderRSq9PXCTrwqQ52GnZWoAAK9nnjxpis9"
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
