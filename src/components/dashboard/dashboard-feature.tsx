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
    "VDHQoferDxNkQUGNPbqdeZvTt3j5Lkm2tcdjhKbZ9ytSfR1APTt7zg6vuKuz7tAis9Kj4vEFTs2tqKw9zV7tFB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AWfYonXbYdm21QQ5tdTNzTkk5WovtfaaH1snVzgMDsSExG1D1jnvkbw17x7bDdHMtKuNpJaV1kfXgqcUAiHfYsZ",
  "key1": "3xCwFwzNe6A5651dtcygVHytA9JZTsB5TVjq82z59arrpJ75C7KKWzc76JW1Mpd5apfcFdt8CDU8vrTVb6Q6upZn",
  "key2": "397bHmXSkuAV873TWBpVmaTyjmuxCZhaeuNH2rUwJxkGwezTyLe5xHSAsnEwNAE3Nr4ZWT9Za26MPWkEoZcc5gED",
  "key3": "yA2zUvNreZ4JPPDduH3bnWViXyTPSAD2vUrw68bCNTC1YXULBL1Q4nB4apiz47CWqRKBwdw9SDPSY1qmicYjbhG",
  "key4": "2ubX54QYudiT3qdFxGtkGnyU1nC5cyPVsVz55SZTv8yC9c3cZheeJa4Vi6GupztrACqjTCpmdzRSPJ3pSxJuJJvn",
  "key5": "4pgaZGbEbz1dkorUp5MpinAy2e11ve3vnkZu8UeR1psMHV61JzgfVr8jA8oFiWszXSctw3osJA21SyuYEz3WG7uW",
  "key6": "2MdoFhoT9EDRbvyRAjDFR92z4zXAAdPvkN8UGrzjeWYzewGXHZMQnySMigynxwND81TXoBJdCcs8k7NnqMAqTNPj",
  "key7": "3s8iWnATdZJxT3psbbrsHazRV5gJDhrL6tdaavU9oLUcWVzvKLrHyceBVDh7f3bHcAJ4G7Rmjd4mfJkRvGvK9zyB",
  "key8": "62QNcbkMqRP4gyYwv6iUv31wu3F8mY6VBgv2aEEAUph2dNoyrnDc8uBg9ovdfhqa3rFsYUwKhGsLuwSGzmw6RY9J",
  "key9": "3f8vLeZNHRwd9M3WHc95kuAL1D1enTc2qnLuNiQMDVV4rvjZPcTorMyBkKoQDuDTD4AjmNRe2BaRnnhiQgdXoKxw",
  "key10": "sHL8pr9cPa4n6QgrxBu5pgCFJaKippEPvwTX7e9Rv3qLk5zZhnTGukXsGqfAC1EWS5QMhobpJiWnVvaEWYCDe6n",
  "key11": "4sFpPwDWVVWS139mY7EbwdC7WdHbAAyKr9SaGwuM9TyQGhge8sBEJgMYAYe3VgzCRRE6axxftJ6QQf4o9bDema6j",
  "key12": "2vKQNJecWfn9ve8QL1rWr5oRmwHtD5geZp8MkVcow6NUURurmRwyZd2DK71QrbSEkBAJoLShWgjjvb9jc4rBUSQh",
  "key13": "3GpVZvNXA2P4EhLqY7ZxLWsqsADA7L6R9hUMysqimuMYfpJn5EVcuevpeEj66Bt9QFSbBPMpEDueUAarZFPSoCFQ",
  "key14": "5wznmh3MqqyuVvDFK2eQRGd8nzxrucFc5XvAMVFczgGFtfFHy5VmA6TjPx3scVHw5xkbPGk72tjZ99UZW42j7PKv",
  "key15": "3usF9RpUML6fCS5KYfyCyErH5Rzir1uYpc7HuiR6pDMqm9bcFw8FzmYuwuwxbsv1kQqW4v8Cig2G7Yn7H8cdnV7R",
  "key16": "391EeE7kSJ5Ecc57uznQVTmyK16pN69xeg6PQP4wgTyeYtjyXcoEygLByRWW4BjtYsZ7T1SPMC4BGT7DYQMNxCnV",
  "key17": "5D5MVq2fV3HuKH2uUigci813yp8UNY5QPrYy4Q9HRStN4Ks3c85bkniGuj9XaAwLEjiaEXSh1tnxuCUDo2YGs1WX",
  "key18": "36KvHBj1CNNbXFRKULCAeUAnhtUo9e32Dt2pq9F9Dtq7KoCLvpfrJRMCoRKbJtoJ8XWPMQGZ3VpVBUMfULnXoXAj",
  "key19": "4zT9kW7Mj2ps46V4rZhc5WRVHDuNnYyEfFctJYDYteVewg97m8By7mifKtSabALGUSGtAdjbpWcDEAoKKKwU4xjw",
  "key20": "5D1t7bwfhXLXyD74WsoYCkjfEstwUjSuB71NfEwfwgjCJwkbcWDMYLHwgkUZRYytFXRzkC46Zo8Bxt3E39b5oWpm",
  "key21": "bce61mgsH7LDjPGae97FizSiZQdbvnxSWaZdw8q8pbsVLHyN8VsBdxnfyCx32jLDtoUUeHzHr4MN2c21EWvhsdK",
  "key22": "3Tg12Sf9w1fs4U1KADj3jxHhPb8Ngih3mBK5CSCUgYy8etASBwqNqXDEiFUU1zqZzKaFaSRJ3A9DAfpUxscu7fv3",
  "key23": "3X1gkSYU6hzr9ZxK2WshUfMQR4GBtBH7swDzMksLJZf6jKTYyi1DuQJShyrS53WwYPx56onfZUTJnD1dW4QoeVSk",
  "key24": "4Ef5RmDDXcMrahhuNSVGtPLnyZ21B7agcGu31AXREDoaR2UULEyi199xgsjaoiAu7U24q4Xcn58Qi2ehKuU8rrpz",
  "key25": "5XSYpnsB6awKANKe26KesYebrNjtEmKRWJ94NV1BDUtZmcYw4WZ7uYhiYPuJmVBVfvY11PBxoTn8cKnxiYQhRJkN",
  "key26": "22NGVmuMqmKxfsfvyTHosADf2CMKEb2Mav4nV73vP4unvTf4FYjkBAPEXjhXtoVDC2tXk2JLzmo1C34HgttVJt7R",
  "key27": "4shgLhjMsJDHHRy2dBKCanNFCEq7iRWLEkwkFySNXgsuXsT1W2VPvghgtRWKJUtBZpq2abc6mWpSxM9J6imytmjj",
  "key28": "56LPkkK2nhNsxKuXcST9zimKLjLRrSQTEqKCLopXrmQFo9sxFYmhDgRHDoN5gAt1Qmnnf5oLjsowvvEXjmcdFgK9",
  "key29": "5qtNfGnXXmACVUMaHaPdqNThMcsZmxymnNbFBpE46XCBkovJTD3J1MPJVM3cAWi4uJb5vAbznEvDXb1U3eNfi7Tn",
  "key30": "2GrtvqZED4qNLwEDZd3xeLmC9RVWsYJvYGRkMPnejEmeAFKwh2JBe8CwtTADfxcDVgTkc5pyWthaZ2CvjFDz34UX",
  "key31": "3vq1SNqNRnvPifu6tSXJ5dDGcPypnSgkEVUTTjMKXz5bBZvAk6LDRhHb7qLSPN8rShWvuM3ahn3D9TUQLaqcVWeq",
  "key32": "4uS4EuuEiLVYu33R7FtSF42JdxZv5kSpdJowTQPou7NR6XjzM8AtQDZ82Fnmd6qSWBZhHsLz7jqRsXuTEuFyJKX6",
  "key33": "33VUuzMSp5Krrkr9xL5mbDR9Rh8vWS8cQ7FUHn5PGJUWTeWGpfXg6k8YTJPXchgWab1b7ELxc4rjNj4wRvpAJ2dP",
  "key34": "3MzvQqYKwda3oFsdMbBwLZ3gFQo9BKCirHJCFQKiw8gErLfnHZmjaykJ7p8txDA8ay9Ch4R45fFPxMDkNjqiJxW1",
  "key35": "3VpaGNji6edsYaHYyVAZv1wypt7j6GfEKmkgBCcvEenVcGmF8MAcgXvhR69Nz3tYRgyFW7nNHv5r3dT9zdvhw7c",
  "key36": "37xrGbB56cz4M1TeXjHqAMYNKLmi6B6KpCbTAUaFp6bCG2Gy2j6RYj7jbxf6NY9fHYpctdtDq2JUdx5E8noWzJ2q",
  "key37": "4ieN4HVXKgpnTqbpXK1g2zxNo5APeWi4FmRCqn1hD8nKLqAPP5KVg5cyBPbVtVMYEcBR1qiwswJWrqsBmw6b5Ybi",
  "key38": "GWgnmsLwpyCSbo7iUFUbMqTcuywFsJAQ8xCBFdx3ygPazaSXFfYZXUnjJX951vioHjR7qJAhWZwz2xUR3zDgzKk",
  "key39": "5mKegT4Bx6yPh66QSFYwxtDabSPFCyEjTLeuLYGcpsUthburkZ19JGcU9S6j9phNudvsN1M7TgwPKjCDsgEUud4U",
  "key40": "WVeVXTxc5c7E8BZouKv2jHAe3f114hmEd8FrVVr6okvvLVvV9t4NKdZFok3jksTjxUTyye5ECNUkev6a9a2dHP7",
  "key41": "wVDK8N6oriDxdkHua4W2tqoo3vJM1xZmPwVmQhiTtpoZNJMjMQT8HgsfPQZPsPTGAdPqAFFne93X5E1e3ngBfHG",
  "key42": "5DnV6f4qqfU8SBnbsdUhnoTtWuLM9BQEqkz751sjxK5eqT5Bc2yGvrHpsTxGSM1SRSGUJefzgBfm8wvCVhPrd7JJ",
  "key43": "5ehfwaBRU9PFvmLq7fkUKbuazVsAFD6g9spwFWK913mRPPKBS6CNcxSHdihWAVYoVe8h1CBGxY4iGRGfERAVMHhJ",
  "key44": "bg7GeS9kq298Xxbgo5Y91WmxsUtSdBWVNKc8NuSrHsQginpqQrVQoV9pyKEGwFzn68fgq92hnczktm6MTRpb2tG"
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
