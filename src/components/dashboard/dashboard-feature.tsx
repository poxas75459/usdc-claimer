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
    "KhZENbH3FWeb4zqPQgQWN7473P1ydDdim536zJuEgx8o8DnUxckQUCAsQR2VDne93ShamFBfWZDA6TcTKQtZkLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGVYZVtqgUjuSWT5rZaiubS23bgE9gd28xa9Vz4DuVU1VELuTyUUon1moWMCLGzv1RURcvcfACRj8LM4Fc2g9rx",
  "key1": "2HWywEMeWqKorjAGCkq8wzU7oSmvFaPqnudPdXs298NoxGoWuwHCH9ZMPSKZhVq7aetensxJitN6XHQdUasVA3Kb",
  "key2": "DuajGJ8megBL3e5Nt35K2Wm5FMQAGwGvKnCj7wEeELGxZfuqSWv14rH9WqLZT7jpUvmGAamW2BuerUogPsTPD1G",
  "key3": "6ikAAivwaLmUrkkhkgycUdw7nkkSq9Ta5an6AFPWawAp9hco22FcLsJWijcVVCpi9A9Qc67fQTV5xYyJpFPBZxd",
  "key4": "37gacUmfDX2RFA5QzDZdoAU1nDCVKtRqMzx2MX3XSk4dg46BEaJ3rEhNubzfwitdWoDbohiteNb8qv6KfHAKXh5i",
  "key5": "4DDfpm8JJ8Bg8FwsCXU6zBsaC24tG1hqVs1dJouCb4kN5iaV2tnWz8mGqoi56jGVXbq8vrTiM6ot99tHa2UMp8un",
  "key6": "fHhRPt6rksaTwXGgZHQFnM3MEgdBLjCNR78otLQ13HBBzTmZH88GbvsBdMx1jchGKqZHHZ9Trokky4bSK7Dg644",
  "key7": "476hK3Rz7DainrcDq97chKe4YZp9rnX3EqwZePLxkmZPQFucnDL9uUWHvY1XQGU3UxWX53aG6juzycDMGxhG7wfg",
  "key8": "m8UqQCxsWmqqL9itvpcURrhQim5JZTHm7H4DV91Jfo1wC8xCL67oEXX2ryajKvroQSxUpq9mjcvCTjfuUsDRsFb",
  "key9": "y9cc5ZAzMBNPtKP4pGnEpyC9xcd5uVee6PPw3tCFHDkkRqQYhuSHvppTf5qo479tHL8QPs5kJbZa22mC4iY1nKQ",
  "key10": "NGvVYC5mXcEUkzKvStBAxU91czXokqZfSdkMbFgRqRDpj69DTr9yPkEFtbXYk8RnQVByf6Gw2KoR8gkQms67RGD",
  "key11": "4NundoJMXF1qbuD8xemZAcNMDadmeUHwFEJJeWpGoNqNgptmwuzHGvY4RL5QKbG52k4ufg6N5WmtAabtNuARnTiT",
  "key12": "5WwetxcMPKQSR23hVK63mkPaso9ktcw85U3BXGwu8Ucb6dstuf3QSDDtbHkeY8HGfHBzGXvWTKxNXzuzN49vrXQu",
  "key13": "2xzeUdgzQm8dcj1Ew5E4NvqKUyzABEfnbVJE5SBhg4vXBtkjiddsgP8GaCgCYutdMuCEkrrK6jCwBoPorEKnvhpn",
  "key14": "Rbsaaf4k9o16snZquciPyBKTx1eKTaKJfxsbHLXZcW46zT3a63rP5P2MbFtaZ2apaSEQkdsVB1ByNzHouNE4mmP",
  "key15": "3xcHzKoHt9Vjz54UKBLn51rRBaNPujCqjHun5wacXZa6tNGZVZeiaejmUhh1EW1RYDdNaZJBq6JSKA4pvZbhg3Kz",
  "key16": "s6wKTF4wN6CJZ3kMpjvhscyVXDJEkm23f3yM8j1CBTBbecghfc8k62V7FqaQj81peCdi5jtBePJdNRPYH3eWAfY",
  "key17": "44zohnn25JXiEwCkNAoiWZXW14tQmxPd6Jd2hottfzsdKKVqwrF1wh6AowxfnibF1cqcyMMB43H3XfszdMBTu3Qi",
  "key18": "5vcnXUhxmfCRV9ssU7UDDipZsZEf4THAfUj88JJFmaPb92JTwAcmpMGmtHEdYotF8BXEaZpQvUoJ6b3fSKJkB3oM",
  "key19": "4MKx8HUXiMFzGxgdkyTiCM2MsRWYvzyTSPPtrfsmP6gCqWHp3WeNZuTcerskafhsCWxfKdHkXj8bRTffKtj6k9pt",
  "key20": "5LotwcWmrZjYmFTWzkZAJyCyix8ihpqgddYeNgAYTKVEktBNUJ3fvHH1CJbHduNNbhYU7CiuV1gWpShpkhKXtLtV",
  "key21": "4swWf3TJRqRkFwnYFxbMAks8G6Hvik9MUizFRF38FrCsUb8NKa1byDEFKZHqQJepREMhyJGhyQrst6uYor3Uzbpk",
  "key22": "4PFT2trhryQDPkGjX1HJ4fc9D3raFfhGh7sjCVuHQVbP7cyZ1LYL44xf7P9rpaqmB6AEEMzc66k2ed7a7BqTD2Fa",
  "key23": "4hKCqKvYPhNZJAv93QQ15W6kFtFesaVDX2ptsFoac4jJyxKXoj2W1vRXsLs5gKjQg7bRaFNmrBeRqn83gGuRQzaQ",
  "key24": "5jNHJvGjmnYMMsL1GtAZHdSK5TzVofF2XGB8cHrHjiLk66MKP6xmazMB6Kz4vm2ao7MCxL3oyQuTyAcsx8sePLjb",
  "key25": "3quofBBkFodM9n2zVvyDmrPuz7BaE4Ln5eH2gs83rN4qXNfuhEKDh6z88xZf6t5CmyhytZLKwzN8AUHFVQKKEs5a",
  "key26": "FJcRQcVSQKsiZzXytmxR5QLzoe1hg1uekuWeC8wVmmMwRbC5tZX9x55agQHmwsqZgWVyEShQU7SE3NkqpAByPME",
  "key27": "2MFCEzUrPcw7zxQRNuyv2bay8Q5mvf5xy1DQphoUJG1Pz99w3nRzwKRWCGG85mSuVtVkwmGTq1rZfYvp9vTp26QH",
  "key28": "5sLSGjWqkNQJ1feRRJ2ga8JY2QuTb1nHK4YTsWQXhJd6fKDiA4ZFh617mm9AjBWNXQMaPi6ejzUwAsRoWKoSgKc6",
  "key29": "28GEtKgouD9NVVxCKyrBeDgMACx34v7yS1C97MFmMYQanyWmyRjGeHvzC4b4bEDQ2C6eVT9k4saXe47cXDMidSzv",
  "key30": "TRCD7Y4396bpQd6Hs6buwzuckgSRiY3M6jL4JsxbGGin2ffwdfqhCYrx6yvG2xhZVzDN28HS5dbLLwhtiTEpyGe",
  "key31": "5sJaxWQvUAe6ksYtVu5tDeLd6PVdfyQDsW68aS6jWX8c3H8pY7Zv2hHcBFnktiEMcd3Xru2ULCeySsWy7fYrHfAd",
  "key32": "24WXiy2iKiAeWLPRCVpjQt7zMMaSDqARoKaGSoooGsbNrfVo7L5MrQGRZeA3hEHr7RikaDqqsBzC5pNZH7uPS8q8",
  "key33": "42TBoib4MPrq3JgXjJUYxeNsSEspbxQ8qY6GojHTHgVkyQyDq97AXMyPmuTKacktm3MbLAGXaAR6aGNmdJQ2E7Qr",
  "key34": "vj9macRBdBSmojXULg5uxseQMBkvRUWUtVtkxVTNGqQCpqmvb8vZUGpZSSthAPV3F72yULCDsddJzJrSc2tF1Dz",
  "key35": "5PWyuYQYXfGPWscbc12AybH2oBh92MSHU1AuP2NLvtBxqjXio7bSHzKQr1AgFghArGHr81QHsbWKi6e3RNznktYS",
  "key36": "4op3tKBNswt2AG35bJr1kuShWp6pQq42Dgbbwfz33vgYmnPeTqVz5rAQcxv6bsFtLTRYXEHpWdKajGuQo1bt6YNP",
  "key37": "3mYch8YQrMibvvaZFfmygeb9CStxHiu5phYbWkXKmi5VTG6KiKx6ZVqKSfYfFottamd2b7iveQZhXneDhtyap9r3",
  "key38": "upXtA6ge2U4RuSXZETJHMMUBqkZ1yh27o4bk1WwEzWzENarn8MVJwBbPa6ugdVr4TN1YnLsJwPMErPu7k3CYSe1",
  "key39": "2sGw3UNG1e91bvbu54vBUrrhp4aPXF27U57zQvAkLm6BVWmEfPU3yD2BYoc6C1bs9J2wGHTwabBjMxN9mqFrNQHF",
  "key40": "4cR3uwsTaQiHh5Yj5cjVM3BnKqyQuexKYEY2qPVLAggEFFSVrt67xLRcUvaDNboX59Ws35Sg5EQ4ZUXRRXrk3p3a",
  "key41": "3StjG2EwFAmgrDmWoco1BNH6euQTzBJaQe8Pfi8kjtQHonid57dcA8N4F1GvSnGij9MsfsSLyC3AiTVoDmtVnWd8",
  "key42": "2uTZYCuD2sGQ3P4joaKYKYE5AfjZFWzKbR86F1StxozHxFixQVEdfno26ScPUe3AoioKX16DXTUD13NjU6NXFfw5",
  "key43": "5v5ryUH1B88RYg9DF9UFvVc7AH8nBAtwpyiBu17TazMqGLRAacRngUTBiiaMAT8sMv7RGxhUJJfwcgBbiDuGos4Z",
  "key44": "25ABhF83jQsUeUGDrCxjt5hnfBBqygdbXAHLKovvb2LDTEwXYHX2Q6vGxcrVggKrKGPezGzJ2UdjjK6s2ummvoUH",
  "key45": "59sSC28vWufsQoiZdhnmADBqndnf7NriCnSeqGCzTM3wyzHfcUfecYB9rd3F8araHTo4xywoLqSjZFY1SM7DiRQ1",
  "key46": "5kXAMjVe1k8CiUyJAQycfufGmuwivkjQKaepTYpht2nv9WypZgBoyTU1DXcALgQRuJ9Hg691Vw9mY86gq5MaBmRf"
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
