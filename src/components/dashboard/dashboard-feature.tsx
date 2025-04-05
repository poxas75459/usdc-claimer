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
    "4chMwe7sKNbY1N9JfgBd8ErVxbsLyv39CW7sKWW1g7igWJ9voap2xJuadZVEkyvbtPPo74fPgWw17JD51hhpWPsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jR6SLZ8tjX9ogog3YUaqwU1BVbSBgp4yAsJd8mhxdRPsoKdvzYtvSuTQyvVa9qgPJdEjpkyhK7dBPYYYKtCXsw5",
  "key1": "5F96miHmcwQkpbPaqekupoYg2iGustzo9c2UvXtRAYjGQpAr1ExqPfYZibtNbJVLNYHztMTvsjBmKWC2oFFcSKok",
  "key2": "3nGT8Md1phExMjTsYfwqcs7vq4dzcJU73gXas57UZjB9tPZBWYVneCUYTeWGey1sbrDRFLNwVnejAP4d9Swfik7f",
  "key3": "51G7tUx8VgAApSzGcvDrDV16tje7117B1zVAAbqY7Wjfupg4Ek5nEpsBdRsTrdapnUMXv2iRhi9h1yMReBHR3Cy",
  "key4": "4ZWg7LNNtL5iXdHFHAo3SJUhLmxN8zKG54x75SRdVjCd3xt6Zejwz9MJQghqpr84JNo4ZfmuiuwdACkJbuMojYvq",
  "key5": "5VPk8SrPv9DVCBHjRdmcbv4GC3XWQfYG573Db1jfk4DoP6ozoQiZH9zrWLZXRy1Fk53SSRi9TqTuCKVWPm5xpq9F",
  "key6": "4GTeYnuN5VXmBgusjiiSGbcsnLQUaAbD74K2isvhJqZCrHbAVtf12ydw457TEcY5BVFAntKZfJ58VFQH3JG4z25u",
  "key7": "4rUMQtzA9ebPCGg4PTFezipFenTsApwJz4djYx2nBYYJdYGFr1r6RqoJNMNzMGST8W4WqcPdSLvdNoRMzhp2gyop",
  "key8": "2hvhYPnxtBLkMHvoRpHsEFw1kiDdrjBtGuD6atMzA95WxeDKrUTKTbLdWqACp5a4GQQngwfo9bA8TZ96H5DaphGw",
  "key9": "3AjQnajf5DrWukCrtTsT2meK5w4BS5uRgPqWjqh1LoWdAAmdXqgUPtWEhbXLesoRz2ixzytHF5s9oAqHk4g67mWs",
  "key10": "34yKtpypiTYdWLQuDm6sVUfHmtjtKM9jhw5XUo3NJupgnDagLd4xVp9XKpgUgTeE9v1zpj7krGQPQ1hAQXTePN1U",
  "key11": "rYR9zLLfFFk4yPFUUadUYRNTL2kMi8MLx753deeA29Uj4G55hVp1DgLjqeYn92aVwoZsKYVEx9njjgpBtxHNLKr",
  "key12": "2JY2sJTsZJQ2QCRoVL3Gs5bEYDDBvSX6PQXXatrTRnZZjBM3DDZbFoifadUaWeyoUL4yvhr6ipZjXzE17jaAswwy",
  "key13": "67TNrgm4USsb4KbHHvY7fATXnyf87StsPvB82fcvUX7QEMrokkPeNsXnWZ2k5SaEDcJCG4QiuCcMTNj5aL4b5naW",
  "key14": "57n6L56SNhur5qcDvaoMRy32dXsLt1Mb6jpjQ3Vw4nMhGwY4bpRxJ9KAVN24DqAJJpmRhJqYcfxhTWRb8t74N7Vj",
  "key15": "3oisF3rYvJAjqqSxqFHt52459i1WggKsTkVxWgNh4HGxtAw2pjHpE24QKfMWamtoVqnEV7jbkzLN2rS5xLk4pQkD",
  "key16": "4kkaUEziQv7QTxNmfogxufkZ4XTkASoi5EXiTHcqhSS4VfU2yieszQbitsWjrZWygpJ86rdPsG88DWEG2d7WQQMK",
  "key17": "2BpmKW5TKCA64c7ghx5Ahug8jBF9Ph9FKE5h2xfiLFLpz4VeUus4TtQcUBTQ1Xp2pwK5p2tFE7FmDAD1gR1nZhy1",
  "key18": "5gUDTHp9iEr2CtLEgm2bz9z3ZUeP44Y9scFqmVstiMDWsYtDHZkUa45hXCAViUuruJe4hRdruUa5HpcAGDcTaeRX",
  "key19": "w6SZd2Uh2WimcNApfqgtLXq24AEycFi2tYrXSop5v3PwY7iu4x5mjYYC426KEpgQCByUbienkbjnwebzEh3RpEB",
  "key20": "4yANEmz9ycALAL84VoY6yc9kJk2oLiG6hc8JcdB8rKxAPnha4afRoKAm89rLLKqeZphKihJQEiaDGJgFGM6GqH5y",
  "key21": "DuE5Ta8N9Zm2gGuLCKPDd9u2yS4w1CgvYxh9rzsGMEaw8YTj7sbjJCPuFoznbsHSpBajAMdx7TKSWUCUk2LxsgS",
  "key22": "5fDSXfJi48hz4PYvAgwUEzpe6etrMu5VQ7zExhWexRTjHjruz39nocoqHwnfELKdZBWdStCTFbhUQQdkgMAh52MD",
  "key23": "4toqtVPpPS9aTayYLgAxWry2X22k4SyrnQnzz4uUygvRqBsj454m4shdHKzq9jURrqqxQqo6DVC3KjqiR3AarM1H",
  "key24": "yE8gF4pAjWWReaTyipHR5Ni7mna1ZXFRLqj8wu6kN4tVHC6CSosAoZT28f4cKm8BS8WMMYWfw3J2thtL96CeydN",
  "key25": "5tisBv6oFrgYEKW2jinWMmQJ4t6SdY5Lm2yDUYao9mBwPAo4rC51rs4CMunEaf8hKodoSDLw5eqp2hHq2zmZaT86",
  "key26": "3s9vPpPrBufXR3wA8geT9XLtJe2CykvJtV81gnwFk8RhyXfGPe6efHPR6qL8q9HZ93VQdJ79ttT2qcLH5Gczkwtz",
  "key27": "5Pqdt46BpZuRtGqpYG32EYKishQwYdbSj7dUtGgwmnTSMhQiiprHZ1JRyGJxNPVdhgX7gKAxGxXFjafN4WzrQ18W",
  "key28": "21YvyUPdUw3YQN3BKnysAibxydNR53v68gDznJQzRpSVcwHYnWKCp6DaSErCWsd9E618z1DiWJioTCt7c6vTEpAs",
  "key29": "5eZs1PJKx6LTmkJFo6xXDE2oC7qXUs6CjjK7MDtQzVNqRiy35M4c66PNy36P7Zg8BcadPBs6TDnzps7ybvxDMK5n",
  "key30": "2LfRq8GadSW2jU9TY32U5xWBfHTUJNa1S3sfEH7tCa4MVk8uLQdvuouTMZmcs2o918ff3XGDRNbR64Su3zN5aSiV",
  "key31": "5YJCsozuKPqCWPJ3bJh3XVN28WEhaWFyGzTeq8HF1anxJMRHZLMti7no91ZUdNUt2zdizQ2qowbiXRLVQ724MzWa",
  "key32": "52ASA5DwUtDgpNLy5gJ8EcDttwXY62n3jdD2PhJwkwyuYtrg39veeLYyYwKBGJeZLBwPRjXSSkQcCTZqFjWF5vs5",
  "key33": "3pA7zuTytk6UTbwAsmDDaH8hncxY3QhXCrrMbhXE3bpj1fy7kjMNdmuPPp5uX3hkyoUCn8VPMpknCnpkv62F5Kqi",
  "key34": "3HWqeGMK8Z39kQJzRgSTzFrxcKw2ZnttQFBsvM188pbXRmTCtGA8Mkpe3QaGCFbx6BahRSeR1U2YWS8Qg5tax9yC",
  "key35": "oBRnQeut6zwfpss7vWekyXQMUjMF9d7CqnnJS5YgKQvLnX1bU64ExACZjfWwhndL8v2wH5634ot6EqTBaMQypZa",
  "key36": "FKYiT17XQLqStYpnwH5ofCSGdXt5444qSJjturpXmjk7wLKBvwjLLiyQadTuBYs6BoHZWPhP4yu1XDLnjoKb6JE",
  "key37": "4c7xEmKRGUQoPQCxxf8odV8DLo3gcvbwQ6foLZxrjHmZX8QcM714DXRTTm9v8LQtdU792BPed94JBZbqtFGWCUfv",
  "key38": "4j52AtoiReG8ZrLE3LYWPBU7QmJBN8Au2Sn9t2qpGUeSpd3ZFVZi9uSHGeHTgZWNuSmkzeBuQTYKEMMrKdmw12AC",
  "key39": "2P9b4PmokxK9Js6zwLQ8Tuf9D7GLFH9oSm7EGf6RaA93k1xb6Qr1N6Y1NouLPjehbTXGZDbZjeF221eHRpyRDgHY",
  "key40": "5iNHc5ziBuaWp9MufFMF7hPveFRrAUGrcGBQ38PFndNXVCpU9V6jsWJgWrU4xxBgDSjkJ8caEMj6WWSotziWsaga",
  "key41": "3a8dWp3QTYn4B6bepfT7WE8p4RpjyWJyPNw3YiBce8DyeeKC19ccmghdodbokcuGwnNhqDh8asAdRwnaXSvcE7V7",
  "key42": "5kQuGNzJgGgHWY2tG1TXEDDJwPVYj5uK9v1HoKKQBxv85NQYLwqJ57Uvu7tKZCvVtBhWH9cXE9t3XRr2NwZkZdRR",
  "key43": "4wHhw6tGSpfv1pqbiSENQeP27KPVycCB3iZkVKrwnrmBi6A9PsMgDG26nV7N7Eu5VjBvBQ6kZokngRizCEURFtdv"
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
