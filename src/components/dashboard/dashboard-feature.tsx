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
    "4ncnFfUKUCjoPRGjQLM3vTuRhHYmxBDm7EgQjU57jH3PNuKT1Do83BQDdHBb43L57mHAY8NzK5xgKNjGTodbWVVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocnc1VLd5C5ifzXchyf8YPAGHA1EZumYHCCiJqLcWEo9hqwwptRwafDEdW32EsYCH4nVrSpMDqQNaJ2qiXDYY2f",
  "key1": "2YgNjCW2P3mBi48VXpBmr2sJ1hh4zy56yZZt9Hxc479GfRWdPZffn2kUC1Uj7ceNXAtCq6sbXYmMmH9HtCcHQhHR",
  "key2": "65A8SjVxpAJVk7kkadSuhfXRytpiVgpx6YACtfKp6r3ig4h71Uwfxs7H3wQcN2QHXKMFLPKF537RBR52nUeD8FUX",
  "key3": "2gGCfwm22u1YQpTbEqMZhpQsmnUw4BWW4pJFeWYeeYEeXXgAXnVT4r6ceCAJXRrP1N28xLRp1xT4YR4tkCvaDVsB",
  "key4": "3f4cytSSC65gX7p5JaH1BoDLYKReTgJMXzZPnAcA4YNotqNwakdMyZenTosTEw8Vrd1mtDyxjaniNKV5jj575RMy",
  "key5": "3VDVknnR8UCQcFht81Fsihdrgay5Cy9584uqjSMz3wKA98sPpNuTNRxnB47DUHTF9SmayYHiHFNpbvC9nh2p7428",
  "key6": "5FNRWEVNQ7M5ifpXnPM2oinonhoJECfRBnS5n2qCEuEFT3ZV7XZzYZAoxpyYaS1eF8Shwu6byZa68mqbFweDwqFQ",
  "key7": "2LqJd9VtvX2U4oEpt4HoSfeGdkWQroAw382eCiw1hFj8UhporoJS3JvfWFcKZiDt8YNe7wqNDKmAb3qZu8dz9bux",
  "key8": "59p9Q6QKTQymWg8PW8zwsgLu5hizpLkLAqnK9QmuvnLq6SuEufMZaGeVoqSHavWmkoV4Msvz1fEXb7hhiTaTHk4v",
  "key9": "2bga7fwamJnFsm5GWB4Zr448ZurtapTyB61SCoiUCpwf5VeBk4ySGTbRBC7sv2yt3D27QLYBDyUHThp3JAs7328",
  "key10": "2KXSGoe5thK59VS73F3y6DS2d3vZ3CisFxUhuYe8NxVKonYqcNMutHGKFFGopYwLtE51hHUm6MRGTKFvcdR5YMd5",
  "key11": "3qUBfK5F1p6fBbeqW6rBHxxAFCgN6j9aeBSBpnYvjgDw2Frv1sPzuHkBKpxAf4Bf3JBwU6qdvX3ytkfwRDFEdFuz",
  "key12": "3GDhW2tvPDhhpjtn6eg16kDuNJo5BGqV9XmcvKtZZuxpn4jL2722YTS3wpvkU5bxWXaWy4UDwdcsiwCjpZRdL6he",
  "key13": "5LDkcm6H3ahNh5fM8YHPbGV3qFMm8y3jW3RRePtxwQWdavWH3DQhiyccNcN2nMaP9TAH41W4HnrgrPsoEEkRSRcn",
  "key14": "3zfXPsNm966ZcFiaX2MohCMK24HkxibHB2SXYbxsQYtCnigMivUHJJZjyacSmrCoa48AzwxK8SPRNsvVcX7T3M2X",
  "key15": "5eYm3A8bvwomsZUyzGWULe8AKgkNhqJKWeeEZMh84ZJGZsRXZsMLiaccCWQfK8dNYh1FQ3Ewi9vZs9RAEBX8MMrg",
  "key16": "66cwAmoFgsVq7JFP5U2PV1o9AXKgpgNxtn21czmxKMuWKFVxoabJ6WX1fGsZLVG6bqWY1nb1DZjniExp3Px8kdRf",
  "key17": "2oGFbv38tczn6WwhKA9DVHxCpnCGgKMn9sYQJNmNYgnDY2JHMoptYy7rACx9h9ePx4VFWhDfTJLL73fNunp2V1CM",
  "key18": "V6oNDZiuS3LkiWQVu6wPufZQiXTVA52e5xEa9a8n8USFjqGua9y9cdehQS3qW13T9YyJx6jomcZ4QEXSnxkAQ9P",
  "key19": "Wn61HjoK4MS7nWLBYqF7W75rwk7C6j22h5uQfif4aitXmU6FhDAK7nwN7LepqLboY7wUyFLdP1wuHdykzmnLvw2",
  "key20": "T2n18grCWJQWpr68DvS8KFtXPqM9GYtowp4cQUq2TgaVnkLGLeZsJGRV7zPDMmDdLN1RVLnbAK5u3LZAfJVnt4U",
  "key21": "2YhdH2Wtepcw1wAvFWgo2BeZ3z9g3gVM5SN6njmbCuQbsdW3JYuheZWVBPENrAyK3ok4tMRCwtHnd1YNqohxYJFZ",
  "key22": "2Kt3D8HChxFg3PJsjMVQ6TfggcTQCEdMVLpuF8JsjMywcCQnuHdaH47r2u5jHqkMurfY7E2tMHMLbyGmtEFd8f4R",
  "key23": "4n8qQYj3ufnfoQYwNEpDURtVoSSEEg2U8xAaVHZDxVnDgNSnaB5VWqW4W3nM3svRAebUyr7jrL1mWN44r7jSd6vT",
  "key24": "3oZXL9wxAqX19AjJMLjGZn1JKQr7GQd24SrmBsUjeTtyDCsY2frrfMyqHQ4ipCC2n1FL8YprWhPrLJmPA49P6zTX",
  "key25": "5cNknumq3Lxe2UjQfaavYVb6WtRjWxeKF479qMNSsTYhGF1ycpWBkmN3fuP2QKejEofqjaBNQviQYB54f3uzfDZn",
  "key26": "VR8XvBbnwbMXshSfry6yHsLqt2vjL4cBra76NR72Pkgnm9Pc19CYamnxwdgfXJRUSXnBaPvcrqJEfF4rYMSWhhJ",
  "key27": "3PGyP6QDxX2GkEvg1aUUmqLewuG74p4nxBaAfjmHkoRWmc9EFynoKLemfft51pzXFtXaHBfMjoHH5EL3BhxAj8Xv",
  "key28": "4Y119bCHJJd7HMxQQG3WGvhhGxFZ1HrH5i1r9Gem1bPXqwWwYCZjZ722MPChGLUe3nLX5RgXRPUwwKL8NVhi9mKH",
  "key29": "4Doeg5w1dFUyqoC8dsFN6n9BgoFHAVXQ5yw5VBLVTtVeikxR1vDFhE5kdPvrixYuJoJCjd3FuooHeMNwdAy2WwDz",
  "key30": "3iKtAQQivgBwNJGkBfMzxLj2iUvojxyT5k6MJwNnH1W3XvqULR3tUadmn3dmNhXK7eFG4VVuMJBbguZ18fTDUH2h",
  "key31": "3yTEUdfYHmXerLiTrS4bZKBdDzK95EQBhegDpFzMagnDzDkAMXRyAhaAA4f9RbUhy5fc7TeyLnpMGnqeZimnEUy",
  "key32": "3HfQgXnzZxwbZQNsTMG6XMMEmewX9N9A1ZWGD9CLPNHh7S2gRysFNqv6qkDQxozz9bw5jzHombieL1bQ4VSvwmKS",
  "key33": "27w2HKy7uFBb6dxYWWvZFy98xPWVUBsfaRTDH3MeLHiJWqKhAkZ9uqZvxYJFwezt5TWeXAjomA3W63CzcEHEDEgK",
  "key34": "65TaUHdCdeN6oVzAfmWs3sbHweqMYV2iuDh4RDiLsdFCQxY44ZrTwcjoMgPvczqKksBEenv72yeiwQDzkK8vyzBk",
  "key35": "2Y2HRmePbBoZBGyDra1VR6LVFVJzpumyYnXUMZsrjf2aYW8VZsMAa6Hc1TjTQKtSLey5TDRkehcQfF7JbM3cirU8",
  "key36": "3qDYVtxdnEnsDyWZDP2qgejzvUckwjp5AXX9SKGjstJM2dA5Yc3RgVTgdmKR85q9QUqeHhpXvnvv31SDTjsF1tUy",
  "key37": "5Z5mnNXb3T8yvjuEDiTAqCXuZB7wDmcU815gHkoDqbDyAsyJHJPjUR3ie8i5mLnx3GA2YArJZAvNzWDf1Lmon1om",
  "key38": "GMD3nubexKax8cz6iRbMaxCt5TMigQ6Bi3Jr11zPCdoYJUQdBfUumVDsg4nFxrc4muN5JbZqH8SdqMjRx2tuYzq",
  "key39": "42rb1eG8hvWva6NtTq2Pnthe1DaBQiKtrZ2hFPneKrKVNdP6RP8bJ3jJHkXy7yXLndZBMYErbxBgvB9C56EkVbMS",
  "key40": "3RwGmxBkWd8uu5Q9sj23u7bhFZ7HceccL8Pk85dHWjScgPjD5NsGdtdNP5qtiCHGWpMQzgAFKja41txtka3T6gKM",
  "key41": "4dtiok4z3vDZS5w2ZeFf3pMpUURQo3NRyb4PVHCvkQRmGSwDYAUfniYe5SJFfxV9xQZZkj1JMBFJ3Ww8QMbFyRdw",
  "key42": "duTCXUWoYb43o27KokGUZTicPsHUhGzGUgPQdpTFgksLLqpQbTzwDVPWwbdopaB3R8ep5iZvetjouMNpteyhqCv",
  "key43": "2wzUjjhRhLbS9BxPomUREEeQEY2rqrxsAQ4ubGZLYZPKu4QbNGHfVHbTVRxd4zcik5un1J7cH2jYBnCgrxKWgYeS",
  "key44": "47HE2HiuVRyYMHz7cX46qyi4BotgRNDseGK5aLsj3i2r4YCW6xFBpQ4JjeP4uPN1fMBbRamkGr4D6HvcuaPKcBV7",
  "key45": "421cjnA2ZEq3Pin3p1Z2dm9ih9RYpchjBDGvCBUTNJqvwybpRfLeXREiErsMHKMMmoasFaGWqN9ifMuXVKUNRpJt",
  "key46": "4VbzupWiLJC9PueeezVmvDzYLCmp4UG2ve3EJjqq52NfcCh3jKTPYNFjGrLXVGXKS9F9p9mZbpk5udnk2Bs477uG",
  "key47": "2g4zifVRjmWBfZD2qoHLzhJqTjeAcEcpkwfhGaWRa81g4dfYuLRUZpZk8RNrjs7z5Vs9gcTjXpYGAsAzztAkPGsC",
  "key48": "3aC3FGXZ6vv6ALVZvmvAMZFkYif8XdR38fHvmF4mTiJgeXMui2bppyDqWDTjda7W5DQpyV26tB1yx938pEsZxBs4",
  "key49": "3bnMicnFwssNeEK7uRVWsNZq5Ddv2b1DSw8UQMH6mMJu1qWyhEsZWirUP5LD833LSkWjYxVwojBxkqMuv3m5bo35"
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
