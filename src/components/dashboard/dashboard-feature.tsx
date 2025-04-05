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
    "5m5xBmCPgrKMXJsa5usXmzV1kFYN5BZcBKALEu9naNpL5QEvWcWzy4WpAW7zJDiZjU8XL9jzLKuktN4c8rJh78vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeXa9W3NSAWKR8RixKdvU76fweuaMczAmBvWgNjadaKVJKwUkWhHHknginJKwCbPn3MG1enR8BnxZGhTAiwVzEM",
  "key1": "eW2799PvAqzVUf4x2q2NxsMioCEhqJ9ChRVrfCHQgmLLiyALxuSHh7Cr6FjfMXS5Dfx9gqzj6PB3jE3Cj4RBML7",
  "key2": "Poh3Yu3b6TqurnHuvSGL1sTHwnMkuRq3hGWog5xfN7iHhYyGFc9cnL4GuGj8w5qozZps31Eq6FhJWm4iQqu2n6g",
  "key3": "4Hb1UL2edQVEsuFTejJR6Gfz9LdZN8ZdX2ERUg9icS9s2ZfQjsa8Qbx6xbwCv3ryeKAnSAzGsWrfn91GUqcnCHbQ",
  "key4": "5tdFETbCfoWXjGnvamVqa14aDMGvaNQEFuDHuU4hN6sYmVyXy2WDa3rpmJRnfbdKpAWs1SR9Naxvm3UmgYHYXu9C",
  "key5": "56EWwm4KzP7SZFaSFQjqNp56a63w8Y9ECY5uefDaXqM88H9W6kWURSATwgim1XUpiW9feS6qrLmHFAMatUXcuemj",
  "key6": "2Cc9K66QHA9miSNmgm3ES347wdCtEG7NgCZeznVpfpbzwmPtbUuAsa4PY6aFUCwn1b1S8cZnVPpr8mXtsh2Svsz3",
  "key7": "3yH5eBB7QtmxkphqenxKfDvrRbpc5AULEMo2BMYvQUUb5Rqmn7fSXeL57zCxnE5nYCESPGhm1twhjyLtpk2pf944",
  "key8": "3MPwM8wyoitxzWwzqsgi11wc2pgKUJJ2RtNtp6UmWn1FYDCPCriHwPcdC8atRP6pw2Ss1rKFAsbtd15bETGL7HM9",
  "key9": "3DBwkpt36HH4YEHfM9pMQAf2uR9urLu1WoZNunNDYYsns1tK55Qd2v2yzX97teum5mMPAGrLK8PGbvPBYvkaWE1z",
  "key10": "3YR2NqtkjqrQbQVp5bUEWga4muUE83N6LZGmyAgRsPKzaRuQXTcL47U8kPkHJK1kgsm86hGUwEJh4NY16GE3XeJh",
  "key11": "3FiPeuLGAzqh1AzuRDUg9Rp5rXr44W4Z5pV4DTFZoXpZSWRe4w5q2uL5gj3QXxjKDtpYgHJXzvZGdjaBqKhMfpNU",
  "key12": "3cKc1B7zZDWVoz7bWgLFR9AgK1PxsFBufrPb1tDocV7f3z3py4ht1ExCgNkU8L7wy5PgkdiuXsv3fSF2SZ9ZAaMZ",
  "key13": "4Zej55EJv7k5CHiLetukMJMSgoAvK1qvBkrSo6QCGnxwGzeyWXs89Rr98SFG7HRZDvAJCg8RFX1cM7qFXvipiaYQ",
  "key14": "49MRdTajbkdDTkebpuceUM2Y7ZG9eoDLGPfxF1eKFqRLWekXPScukKQHYE8fgKu2K1z2WsrH2qoLqQdGFPC2wUVV",
  "key15": "48uH6b48pSuvTMUGnSU7xqXtQGpmFccXKuQuwSBk3YqikoJ5kdC2Gfen6VpFw4t7EsQShcDXD79uVTeZawm5T5Qe",
  "key16": "3AN6UxebUwFe9BNssCJCYvVjCU6ambjuCew97G2MpdMG59ZBZa5ee31hvfvbEFCLLJTshepYBaEgXYEcFtkRdZbX",
  "key17": "5A2TtqCsAvy3H5Je5pKCxD4o4oVfbnhWcF2gKypuJWnbKtMoUGubRnQH3JvfcmGSEY82ZeRySxCfrzHuN63j1RnL",
  "key18": "5pUiVb3WL83AzLDjMyyte3Vcb2iqXdxeZFdgTUVgcDVx56ZoeHP3NDJpu9mqKnQhEwE9ZgaPoUaWLUEVsyrXLtg",
  "key19": "2Bo98U22fNCsq7GgAgqaFFHLDwPxpvMWyPyZYkkf8JEwakdeupoBvjSQzxEiXN1XmLLfbbj2PViW4m6nZ3xpP1N9",
  "key20": "2TMuTdtq5R5vwf85f1XCzxAkPUqDfj39Aq8M2NWUAtXzes6QRonkQcNVEEH5crNnhpQwCVMQ5HFsLvxveekGy8ev",
  "key21": "mAkDA1yTSvdV1iupoouFiY4HozJXgEM7ERqigoPmbfJv7rbthKBjqdTJvYDeAK3jmsxDugqAFoHooepLwxKpory",
  "key22": "2WsLVQ4UNQU41p1zw2uS6G8q1Bk8s7nnh3tB73A53MzP8ekHniVwN15mmwN1uUjZdXchquMbnc8v2iTZRqdNpG2K",
  "key23": "49JLte8MUDYtRvjRzMyPAx23MUuccy9Yi6gvLVy2zopb5yNzYcNQQvKxYt2yKjp96HHgp3FFFkwjEJxwSwNPGEnt",
  "key24": "38vHwkBQGZxUeVzQJqeCtWRCN9jCTrU5rT5dFutiQTj17iwBWRETGdxxeE5xKhCV1pEXzyGDEszFURxfq6Up4dDu",
  "key25": "4ZD14My98p7kPjKti14qtdUk1igvcryK2C88jR8yXj3xDqzxzvQiKoto1tuhN1KuNC8wEWZbSzCYx2o63t1WuyvT",
  "key26": "2pgua4qqkdyJD2WmEmFMCwDgrPq1XoEG5EvDNkzgZmMj6MckAkruoDm8hbVG2mv1sQXqfYcMMLkAHH5RvnR2FPcF",
  "key27": "UWyZ6mQg9kDcyUPLyCdUSm5QeGxHJmemPW88KmxipTp1wM4BgvovddVibvvBmZkp22MzPe2yVFedCkqhxwnnLdQ",
  "key28": "Cc3djTwwJVAgx2PJbPF5hHUsPSMSpDyHUk62uVoamdDPjKRYkkLEyaPiQWY5hMUZAeRdDo3of9V3qQpmp7PPbTB",
  "key29": "KegR5UFF2ewxvXzEAqGohkDQ9efhawoKBdRdAca5H6WPiDMcPd3818epzAhNhBEmbNrhSVUtuZ5B6MAfQVNgV7L",
  "key30": "5zzRw8E2kpACVoLkr3kHaPvQTbQ6yWb7V8RUXELmMS8byx7BHsjXYtntzS4JnXTkqqYH8TZr9d5oc6DVfgSTo9qj",
  "key31": "2N14fJa6knFAGu7fqipczcCXMu779sr5Qvdopn5MM7B5CDVwenL1qsRMmgMKQ9urGg6SV2fNWVxHyBWptMs848GM",
  "key32": "4xpuDFTcAmFANxkHb1KkAXPX8sovrynf5vCWVzNGdEAVddHJFZ1DyHTbrEi5LNgTLkb7qbPeBEnmCdacCHTRpe8A",
  "key33": "5TfvDA89wunyPpTXYC4uscPsJpmFSWhM5sf7h4o9tcMqKMAq9KgB14PzdPxGUpTv9ZW4PK8y2avybKf4zoEwdS1a",
  "key34": "45CEmekHwXii9VfUXLtK6erFYzdiXaMu6DrSMGbELq84qW96L2KUSHYNz6ZxPsafSP7pSiRCHDcdyxQ6rvBvHLh6",
  "key35": "2py2fHXuNPEnzMcHHArbnLEg1VVr6Xx9KpSSwadFJbZFNNp7h3aoUfGr9vGUfxQ5CnE1M8TbuZiPq7yWnrMk4s9B",
  "key36": "2KBCepYNFaPcDACN7EFP82JeqCygPCwzV43gbmGaGMYB6EYET2VoVZEG5ATUsuewoQpj7bj9kqgWpLVG9BofHFV3",
  "key37": "2UvktDwMPaiintsF4chZmQzoqZyy55En2cQiz1P6J3hw3PrjieVgTmRv5E6jA4onLZdrSnHWXBrfoGoXKfBb4kz2",
  "key38": "4V9Ptx1tuNS29bzpBmsVywxefrmPcyuZJRhf8i51C2ftcxXNb1wDcr81nDdnEDCPGySmkUy6xVAXPm4SpEs7vbWr",
  "key39": "5MJr17A6JrDrSsrLK5G1hniHUkhjCyNauN1tcTxETpHwAKih2kW2vu2ayn3Z3aQboVA6u7uqPfFHPzY4Fu7GFkAv",
  "key40": "rQcBgpuxa7tnYY94DYSKqMuZkzfi6J5RhNQf9ahoFjm3DP7DfhiCZJ13HW3qYSKG8RpjUjkkoPJbzFsdZmaXKTG",
  "key41": "tpJmgQ1EUM9xqQhNtiUjsSFGsXjMNhq3PNVPqTkGZ7Sqs6s9fgPkuwD6yrNDE6WpKm2p82C2tRj1NbYB7WKM1MV",
  "key42": "5AATAPGJ7poKCmw2Lq3H2RNWeGCLLgoXimAc5aq3bGiK4LnFusK9bvmbgQTSviLfDXmjZvarQzHLTWjUViNd1hR9",
  "key43": "2rfMe7aHoZ7qGi71evb76iS5yr5yp8gkk8bNC2hat6mUNEHRty1jNWcf8FtKoaTm2PUEDAQUMutMeWTCs93G1tMU",
  "key44": "481VqnFJpM25PexAbHB3Mg7Y5kbiik4LD9xqSr42RwfNgdgoWw4KcabT1vQfxFijAphA9ybwuaWuUmyJDjvox9VX",
  "key45": "3CQ68rhc1barbNzw1TekYYEHrhBXKcnB6L8TVfixfosCQYCkAf1kYG3awMsmVKjG5TuGHVnFXCTXjMsDj8LkpJRK",
  "key46": "4DGpX2a5pAwaDQdpXBVuyBgGyWG3kAvSRotd2q9e7KF3fwqKjEDeDMqkWp6Fkhh6Au81kR8ideos2ykdhS938agZ",
  "key47": "3djL5q4nWKQA99HtZ57UEuo2fhuAZArPkVSiykkEwA9EdBnsPcBYwNWLpKn7d7MphDNLpHU8fRoTPDNAMJxA8dGQ"
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
