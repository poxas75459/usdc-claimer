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
    "GzU4ZiRWMiUqnyjD8RsovFAzn49XDwr3TcRLtvGQ7FqhzFPq6maMwNygptdYXxVSx8UH6qk7KYARWrMZYWSPyog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M7KzWunbUcyGV2Auy5BC5Hwiu5xC2ynodkXL1hjaRjaGbCzyXr7kWpWaHuyr4ELyt3cWWbtboSz4V5UwHo6BWvb",
  "key1": "2tbT5SjEePJm1x5y9jTjyGrFqK5tx1oNDKya9EK4j6nJcwkEHW5MJrZwmpvZLr3WrPNLBn4w1m2ovt1MrDYjGJBa",
  "key2": "5JviQdbinx8s7xeu9s8f2Esb4nYUMrCK5h7PNKqT7uyta3ZgMphZhZoPKwsUsJgEgBoubJHYFyz76W3qvZ5ezLuA",
  "key3": "4tJeVisPkkNfEkSamX4zKMoPc44b623ZJdSU2vC27kw2Nuz2rBjsH1njHXj4ZikgUQJ1xxHpQmb4xZ5dVxoo8xSr",
  "key4": "5pQw7KyjW3gLZrvZ5ybnECKVtstr3SHPLuEQ7JZhdkXevFfo4REqgS53s23afs9gsTnEoJzkd3oZJLK1VhjndauH",
  "key5": "3JacyEVRo2TyxQempkP7TRABo5Wyxau9CxoHpRTgJqF4SenbDkmaJRuFpU8wp35XdXpoRZfCKdGcgn3R5jMeJ4L",
  "key6": "5a7141cqypY3CwH8LcZLcYFFdqW4W8x6N9uxooxeHZPvWM69aGvdmQLx4vzPekeZmNqd3iVQ56a3UWJ3g3aUUc1p",
  "key7": "3H61aj3Ux2QmW8oHsF3y1z8tEdWsCCPPY88zRHbmqnq5kvznnRMqPJqY9Vdx5yRon9CtcsWuoSd25znUmEzcDBrz",
  "key8": "257oD4BPDLT6SAmFnRdEuUhkGr97E8scJgjg5RAMMqAs5anmfa6gR8wRtZKt8iwpcKXc1GKREZBcXFTr2wmR83FR",
  "key9": "xZLpKL71NCCuskytS1UV7Z1wV6DugZTfTAgG89NnHoMCm6gRXy18AtcjRGs8n1dm9HcqQruBnzZHVntm5x91SPk",
  "key10": "4a2BA5FZV16MwPqg9wR8E7bTeJnRcm63KaVDyKDXiJPjpmwJFmoJVB3bQrAi5s1ttEfxQgvGuBJ3ZFPEFEbUhFbk",
  "key11": "3kh2eJzHiHPLsw5FYaRYo6S7Ad4azdeyKiSTx3yg8s8v2VnCHHoCijZjUaNBSPrL5x7dmNRYFi9dzWmU7gx8BEoc",
  "key12": "55P8VKsSzD42yj1DHc8RjRJsSyBdfFFBJoyXpL1MKEk7QV1fRQMLqFuqTxRm1N8qVoZ1Tuutqoh36s1ngvoBCrqd",
  "key13": "dKvQ4uNCZDDMUAy74F6Kxgsr9zLArz9zfBwiEomA6EqLnAc41pMveMpfUg7SqssG9qKBec4nPDwA2JDXZfsXorT",
  "key14": "2KrQgpMPygZy9xZD8bDyn3tBSzywcqLuXHvBKUhYtrwzHe4PDzsXGSncoyuJHEx6bz5CcjdJxPSbXuwbV1ZHT9d",
  "key15": "3QsyaXGLrgP8mKPaiTgk95BCf7jeig2BVz314ew3yd65RC3zQnL6RMFaZKgWb9MUNbTNUhgaBKENTSMZaZUykdWx",
  "key16": "48EJngXVBQ6XafSY5p6oeMD5zdk481VmeSeBjg9w5VdpdWGKDALCkc3mQ8Fg8D2RJ6DUe84C3ECpX554ZxUxwRfs",
  "key17": "5ATxqM1p9Nc9qaiBrj1nukPP1DwccdNVE189K52tx6LfP8XNSWz7mcnvs4J2i3R7H4hAJNMAcie1WKfcXAzdeNiz",
  "key18": "3ELfBk7pTmR3WKnke55uJ2NCNFfqPkduVzti4EEmsEH7Q1K8kPfiCew9gWrpZt4itdB6pjQSbwTJwAioEpM288qZ",
  "key19": "4TeEPip4wzuMW9vyL2qJp9KhjAE957bwbiFFrJkqV58su4xH2aB32ERP9TN9pC67gRegafuFPWnyTWD7kgBLdoY7",
  "key20": "31qDrLKj2ZPSXZTDjrJVKwQ94PsMQPeiKi7egwgMa9AP34dqJgiUUiyeQSY6VJSE568bVJDab3NRov3n6mXpkuHS",
  "key21": "5AJnp9iCW8LrbEWWg6YBzsBRmyFGhTVByZEmC9u474PqpWNUaZwVTeisG37gxVsPi6UaXdpoJqxrC33sxot7jsMB",
  "key22": "5Jci1KBYuTQRdLEXKkxNa3MCc9sD3CjzEdnzGa6CxzEyh9tuD531Vwur1Q3LX9GiUrSdMAnEEnsq3hPQGTPXu2Ph",
  "key23": "63hsSVqihy7sGqGZdZ8GwbejF15qFJRFNiWgh7apvGEDkKNzWg4njkCbPbY4g355DbEPUgfaotr7NB1EwVMoAsdG",
  "key24": "2j2wYTiZWpn1v741PQE91GBejuc3a7ymjhd6CporAWFDcxf51eeXFoogrruNHHwG671PukkPQWVk5hdNQr71LxBt",
  "key25": "2Dg17ZCz2zdJ7u5xPQpCXo49n6EWzuYzTSvFt7SvjH9CmXhcivwqrU4nkufBoczJncL7Df9ah3tY4LGAFhsm3DHp",
  "key26": "5FAeKhXiGoGC269KPd9A7JxqsBB61UgBUtv3F8hkeDfmvF8izxXRVtKo53RGES2Ddb9yCzygS3bkqxQvzok2peGa",
  "key27": "2eWbWaLfhW1Mpzf83VxT5L71CECdfAsCdcgKtxNdFnScFiQDbpCPZtw8AHj58EzhhR8RWyhXMJTxJcheXJjjEeDz",
  "key28": "4ESHAagED2QBJd8X9zucehqgB9cku4BqixV7J71CBHKGjXJ6zDoKVffFTz8YQTP9yF9XdpMKw9osaHyvBS4ESwhe",
  "key29": "5i55YsX1SPN34qTHp6bzHt627BQ5t2mJUW9ttSmWqtgNpCEpEGNcN5YK6Fi5YYURWLZUcvcGtC5Y9aBUMUkPq1ya",
  "key30": "akpwzQYUhTafdv16pCzgHxVbxq2NJozLGqu9e4Sa7MKvANkCdsyoPbig9Kpfy6CeWwjSfiDXzZRgmX1Mf8ptFQC",
  "key31": "2w1Hjb9dyBTJXds68K9eXGqZa3WG9P5k1pDAeTjSoCQhBXmX9d6geGZXc74CpYUuVCifiMLATu5ec4aGGXeMdxE8",
  "key32": "3Qa3KvB6u7PYBFqS8S8uPB3MDvHdjXgUmdyUk35FBRmDV8yqaxAi26fbvFV47vkT7yUAe63dMgkqv84vnwt8XBai",
  "key33": "3p5L1wewCmT1XhbkCpBfKHaJMwv8waZiVumoZj1tEvmgMi45ArAyWtLTE11EHeMHYHnVQotPuobhxhNHt3NFrQUD",
  "key34": "563xv9hd14a2hhSKMh3DoEP3kY2RvhH1t931BcF73JgCKSJLeD1doTDnNrBEJYCpM4hjCzDr1gmNuK7DjCw8xe8s",
  "key35": "24JhqvPuZJCscpYWkaFGw675Yhsdw8kXaK9Ku8Bo9sReGTptf2yLUkhZKcp4uKYUssnGUuSgQdx3V21xZ5mnWHRL",
  "key36": "3YM4roBaHBp3ewFHdzzBbx2i4JDK71Agf332ZDk4HuzpPY6UcMAYP3uXdWeKbo7bQJbycWZJi8kXjABxAy28a9Ap",
  "key37": "2oXufG6mGAsFTYYYafn3rnuurpnSsJQCaUvATg53GAJV83rn3atoBqwn3mkCt83SRxf2C2g57BPEiVeK2nv6GKiV",
  "key38": "G1XRJ5QFwNkw1AmWGb14zXgJwf9r5vSkyc1BDwA8mE1sKP6DGi1wZf5eGCGDkut3imyQp4acMUYxGxFTt3EqnKS",
  "key39": "31nBntG4Y9DEeuzce9tkWkAGsrnCP6CnT7AosQU81MvxreUBoV9v4NxguGUh1N771Y2hFzd3UmbZBhMZ1mz2W7gn",
  "key40": "3646vgZKSBbijvtP2ZwaWoczPWC3msWZcAX9gVnX8KMTmqqLLVcTAffJjwTq5xLvTBncEJ68uv1mMMquKFE5TT4D",
  "key41": "3n5CYbTLULe8ydzAEAEhCgPfqxQK5RgPnfC3YpNfDnTcpFaHWsRyTiSv4sXvoidp5WvPneFVZteRprEvYu8VLEKt",
  "key42": "2jmfCF2UYtJeBidaVjgehoi8bYAvY6f83pq2SX4vMAdnC5Ea3v9Sd9K9keK2ewGJuvy1fJ8muDTVGYjCA4CCSg5g",
  "key43": "2LURgYBw327mio81QAMDkzPZvhY71o5Pe6y7V1UGT9di5uPzgABTF1qcbRpnT2Uj8QPtCoGTcEZFqJb4g77J2uTN",
  "key44": "3p1obGLQrU7VLhxEJm2L6sumJJVwE2KhyDheVCW85tAgqtdzvpczepNEXzPsdfyrFrPr1UV2ayvvts8Ztixw9rmF",
  "key45": "5rrkdKLVSdfUgV6tUyGSyJJTwWuPsEaramJGUQ3sPs687iLuE4AgP4w6S6NQMrxTk5eLBXEkUG26ajBd22Lm8jNn",
  "key46": "3eCuZr7FMa5mkygKkAmdga448cVh4sWpdCWwEJvZ5GDoccCjLyq6jEjCaAYT23Jw27RMqarspZ7x9DfJ1q4vmtMd",
  "key47": "4oASe9sdUirRrqCzF9vu9GJmzqMnquCzdwjCrjtzxUwtNZhZUTA9iZzw7W9hwpoWMQAzDNj16Pspisgn2Jtga8Ra"
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
