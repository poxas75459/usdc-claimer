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
    "5z9jgJCFFf65dUyb7N6YVraZcAaD8wcTsBHAbhBVvfmHrZYJWVCtUehETVB8TtbyuAuBJXvmN562rycxGXFdFk8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1BR5FSPjUU28nsQbWUoDEvcNqZkuAkWBBcpiTQnU1pDYpr1mf68qgYZaLRDWNikuor1BY4VfTbN7kzoK8z1wsr",
  "key1": "3DBf39ywNq63qeKThg6fMNpvoHAsTLT9wUx6TQCSWBJrTJLzNA5h1aZymvFjdXAtWgFsNtis4Ek11n1bA17jCKGo",
  "key2": "5MpfrnaVzDjh5puvVs2NN5xpsf2gCuY4uc4KnugoTUoo42s5sXa8h3oB4FcE2ywi93Mfs5x777sDxa39U83tvz6y",
  "key3": "2N3ZZ9CLYobvg8jPHN96jrrzroQnfmQsovN8USc6Wu2zogDLB1PpvPJP5ZRPRVthBct5YJQWdALKGdAqav4qMWwa",
  "key4": "4vhzGsZTbeL4Mczg3BNb6e34UNPTKwFd6fiKfh6gwPL47PDsVEzbRErRrdqQkAkKmP3cQ4GKMKibz8XryUZ2xGQV",
  "key5": "L1Ahgk49v9XvzyAj9JjYZ7xtqBWgy8FYboLu8wo3NAPNprDetr34mY9VH6T6B3UgoC2fdwFoj1zcxaP9c8o8pmG",
  "key6": "aQ6FDKKJ1fsJxU8ha9B5gXq2y3hczd6jVXWqATDeniF8sF473Y2vmmcww2hi3fGyLuZV4GWBKras7v7pzyTTTmm",
  "key7": "595k52oiuTZHYsJyGckLk5K5CbbVGUjDkEgFHs5xR8eCTpyTy6hKkyRyp1owgoMMf1JGTxvk1XUzKWV9CzGEkbyq",
  "key8": "3w5VncLwkHA3XjyXM28JciSjRnb2Cdryd9WLKUECDvYzbDDiH8VbqVcUmawsm86xrWzwBYSSjVT9rtsgxyG2ECFa",
  "key9": "2NJDNLEuvK2oPbRtSznJ59eYD32VMVBEfBGDjMQjgN2nWE7hrNGynb2eMytAjuomEHaiURacfbDrmf3KWFuHn9as",
  "key10": "2BKkhiUtW4RC8bzfUW41GuVZ5CwMfzQawqD57WvKb83dcoASq13GZQ6WsACmcJSU2i1cys3WsxsMUPCMFJYTs7zV",
  "key11": "46jcWpj6uouGm7Y71ryqwMFP8VuZLNh2nH4vShXorvfEkG2HUzCCN5L8EFEYRkayJK7UePtDkZSa7YVkeHKxdtNG",
  "key12": "2v6X4vsNrBadXs58dZfynWKbSx7ytebgxo3en9iJKJ6cTcbZAoTjvkQ8tv4GFCdXZD6qyxaDjvHV29U7d9KVmBo9",
  "key13": "4sEY3sYxebHcgR7zLqFj493p8hsR3967rhUz3iP6iMcuSbGw5RUXL9bmRAoUdkzHdkkAfb63mywyG5Zp388z7vM",
  "key14": "5kcTHeTMP8P2V6D3h9KkEN4rhTnFRBuegmQuWXdv9qQfgUHhLeiGpo22sQYm97MvxhNHieqosikUhYQhejfnmDQZ",
  "key15": "2UnpWTG8J38ePN9w49hTngvufUv9L3jcYLRQuopCDrLZkfqNbYGUJdWdr21Y5pEq5TxRQVFu5BF8rdcpH78NvV4r",
  "key16": "531TD9n1FtapGjR5qyJwCt1DCxDJJk1tS8aeFfQ94hftBwrp9cp7PQzobEQXoEm48VpQsQsTh5e74vBfdryEbGQH",
  "key17": "2vjUrSnHHibbzvvZSFn4a5YDzRpSoyBKXwNhLx6bdjNrELwGM31c5qJnxEEdSiq1jgagQfCz3HkpAWJYdRUUpQ7u",
  "key18": "2n4BP1QdRDgs19xv22uq2nyu2FmpGALcxKt4pm5VQpLr7Nmszjd34QrVgzd92pDD3MwH1imAFhiNirW5ps6Z93Yx",
  "key19": "3RyeVnGDH2Q2QKSJMS9GY66k68C2t1Ub7y8U5LkU7MwSvuFKV9c5Z2aS1jeeSAhQ8KPGMWgjMCiseHn9j429c8Q5",
  "key20": "4iaRnWzWGQpkiCLvuBBiQ46m39rKKEZ6ZcFzAbpFWWzmshN8bbsHLMWgSqqjDi4Va715eipU86uMgUHGLSXnngot",
  "key21": "6Zxcds9iF9HS3VU2mpEjQKf8GCgMadtGJ2FvtUumFCvVkALu1A559nVJQCDtUo3gvATrDiE9reuAb26N9JgHxDS",
  "key22": "2rGMfZ2mi3Dx17htFdUT7h7FCeDNXN1nGiZ29n5oxDifCnRvQf9u5ixQhmo3gt7Lct2WiduvGsxBvZ8NurWxCQ9V",
  "key23": "67AMeD9hGuSTvxjaWTJ8vvoUo3uu3414PXzSAcj5GZVzKy15BYeGXDCEnG8AneL9pywLaU1UVp24N9AN3kM3F9dY",
  "key24": "2FBwwvy2gofzCexicAR2iYJD3bqdFpfovsyZZMqPM1mnbY9McHR4TkUA3PVNrMDuWrznBHrc7DsGEhkdwnV2ZSAb",
  "key25": "PJMsSfnqMca8HYxyKvpjw9wN8wNbdbEyE8htkJv5SFDkt6xa2ToZwEeLmbRKoQHv2UesDNZWK8pNA1thuACzj2X",
  "key26": "2jCJ97ZVUwNyFXzVspuyucmpvdEUjrEzphK8kbf1hxLgf7gLpjpseKWZyzQVwRRm76ZJcMVwfazRbAKEkmTaUFae",
  "key27": "4dHY7gsQyAS88duyZF5v92wFtzQVQvkMRfYUhkTm4izgGTAzhKHvo58UfbAveomgcfqDRxTj8CQKVjBduH8vC1Fq",
  "key28": "3vuPxXXgEzNwaFB9VRUdn56LMzA6iWC6FfKJ9D58xDqVoF31xFk1dmnKGqT8S58TCUhm3fPaGJezQrYToEzdfWrD",
  "key29": "6N5zWnv89VD28RMS1tFQpoL8jv8y4dKXabhyfDCnWWQjFB5VvPhAe6525mtkeuYq9HXs7opVaCHvTG5d7qxDEQY",
  "key30": "XNrAh2ygwGrh4PHjVWH4ZLezwxWhGrfTWQoC9SopdSLCJsCBrpBdP6HTSnpNsS5RYAYBd75wV7AHgJAxpBG1KgD",
  "key31": "QacrbMFfjDs33nJ8i4Nn5PCsx4NCY4XggTcwfr7ZDhdSTzNuru69t8Af4P3PiiwiLMFEPT7WBM9r1TZtNCSESnH",
  "key32": "5E3wLdqvEgd9c1kipgB8fkrwEf7kB8JCvpx6XDUDk7JYJK8KhsBNUpg1HgVxQvUWNaRrrgUhvfJm5gjodSVpsnAf",
  "key33": "4HoRJT6CDYGBoPEm5ZEfXQ9cUxC3XmwBxS6BQY32Vi76wS23iDLq1WxBvKyNvgUhaTC588m74Ybjyys9n7X8Kqjo",
  "key34": "3SRQZBtdT1wojnisBgtt41YMNZSLWtob3F8XLc8tJ2oAgS3KaZjCnWG8Ddk8e67qWKt2TqePuguRNGbjQUSRdszf",
  "key35": "4BktMeDiBfXWoUi5GX6Gjai9y7JSPMpeuTfMYgicquthMbad3znsi8pnX7omzGZRxmM5BSEVUqt9tPqLaojn246g",
  "key36": "2WmDmZAAWZ5dRuovtvTTJK7vW8RGELKS7zPJUgKLEeW1FV5tjsAQ1TuxGzDP2B6YstbcFZiWF9Afrv9M8K4ZKYmP",
  "key37": "4nKsVpVULGq3m2E6MijaZmm411ppyrWKHiSaYFQCKu4HL7MjeU1A6zLupWbar9SrZ4VCfpyHq4hunCVofazwwEEa",
  "key38": "34dXKww27iAJVV1PWGJEpMPgVKC42heVTfV4PWPN2jy9SCCkc36JhnDfAXWEpkxxHY9pZU75AfSVGttZr7UdiuwW",
  "key39": "35vPojmDTHkeAo6SFMztnNZWkN1CRUYZcX4Yih3wMAhoAqBcZFV5nhgjxvgTdvHKSQ1d3UF4JG3CezuxWCQSsrVW",
  "key40": "4237aBnbEeBCGsLiRzcJyxSdbkHhcMm75S9LjkcBYLDD45uvYJ6rSTqe56onuwrYYLPpEBdX4nkTwPfT8ZKBQzrn",
  "key41": "oFhbWUPnPEP7Ph6uv4TGscMcoFtcrSkDD1u5SbUSc9XoTLKLWyZFWGsA25ruf9KAg9Fe7SfhgKDRqPQWwN1z8iY",
  "key42": "uHqyjEtEw1bS7AYBbVpJrGUHfAzzhsQa1czJMKYKJJysFWxjxC4YCLdUpnmwKzepHtL4EradaAfu47s9vVvwp1K",
  "key43": "3mKWvvKoTBYYJ3dy2Czbr8SevhgXWhzazobQ4VyoqYezkUL1kG6WXfSG3TAqZUnm6oCJwkjHGv9G7iFAotiT42ip"
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
