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
    "3LVqLeY2aRGt3xyVJ8GxjKJh64UhqL59SYU1oQ83vX36p2ZGjkPq8X34qvjbSMN8tFPSj4QnsGhRRVbJck9qndWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLN7LeSdGDPiWffZYiFXRUdBsAKmHDSmEqiwK1VJWMvMSDizCmYQwsH85oKNN7KGrN13Bhu7EnDAqGgkKDtuWfj",
  "key1": "4uULUywrU6DXbqcD6iSwJfZHBQxf1QqVoLeH84v68NP9Qu53nRPHptUmUahfKjzgiKq47C3tTtYhxd7ryQAtn9Bu",
  "key2": "4ar6hPvddVmFjmh27Ei1gEFeC4mJfY2WM8n5aSpeaztEwZRp2CJkDpwrK5z9LAZb2mhktjSJkwBRFSDnrR7X8cca",
  "key3": "2de4Dh1GSyzLo6wbt9SUjxiGiLFKWMjAkJBbuC9EnCDtTh5nYL5z454gfs1RoV86e5nMQ1QsLGFxfeWutSsomhnk",
  "key4": "4WCWFdzusGECjy6dS1fScKTcdFTPQVM8bDq4tGEVTreakd2myVN8WkoJAygbkqKbGSyzTXutV5bQLV8NY7Z6QyxS",
  "key5": "4qpNfHD8fn4rj6LiSFvqvSerVjiF9Jhvk6hb2A2zpfFp9UsBLsBJyZvj8JfxMeQNsHKSXpJQLFLi6V78NVacWw5f",
  "key6": "39HBGE2LoXs7ieYpbnRMAgqdGV6hEqCuvV1GAi3zuU6F4n6nmKowfWpYKhk4h98cPyX8ZG3f13SNfHNxXsjNfutV",
  "key7": "4vY4qpkLKBN3nuoUQwu65URdD6sicGhDUKktjnG1aWghWR612NJrRwhbiktUBatuVcBhzhRLkL8HAVGH543ov1Y4",
  "key8": "4ccnajUK931UYDsMAYdKHa5rVUe2h7S3GDacrU5xXyKS6mdr3ZtnzQjcMkQMCSWQjAP7fEUSfsPXrQzf4fxi8Tre",
  "key9": "4UUuwuUzJefmJWb2fo3GnssjHvo6aAMaKAcBfvrbSpKD4tyV3DnuP1mVD2XdYJoucxqZa91NQzYkyh22Bcvzgq2c",
  "key10": "42XtQT6weUhcAzoEgFQcxWtpUJ3eux5Ka8Qo1tJ8UVjwmH5FmyCGGrvZqQ9eqPDyigmnWVaULnFRdc8n22eWTpwB",
  "key11": "nspn5r1AsaagTxD9bgeMeF9edvSUo3aQ2zJ4gXAmJk98ePTHcewyXCCpY1q21vfYyDSy3jitsCtHKtmbWjWnXjK",
  "key12": "4ChizeF5Vtqg4uVbyWzS9uyPruy2yU3xJfv6aJu4yPw6hMzHQXCb81LESN8Y6n5W6vNyDLfxJsfkmBHkLS7mr8oq",
  "key13": "3FbLfXzRAaDpJ8DBQS93rGcVapzp7hHQvAuhZwK9nhPnBZ5GRzTJj2H1QQggHY6M1gJYkW8AQVGWy6LkfK1L1Vsp",
  "key14": "42LfiJebAuGdn89c7MuvDrePHnrHiiPJ6Y4TPCPRyJQM8D2s4NnC4mWkV7wkDEzDTsRPL9DZbMb4q2dsF64dbEfs",
  "key15": "5b8aZvSDJA4TBn92zFUXWYMDrFHqMr56pTQXQBvhaKLfoprro8JbaEnM8TTXpRGzc7Vf2uX53cmKNajJHf6iqY2Z",
  "key16": "5c1gM94Au74xJct9qmeV3DVGXDHoKqAk39HmGaUZC1VnWFdztvHfbzj8AF4Chhe6ABm5Wqhdnqp6bJRVC25oM3We",
  "key17": "4hB6DWk2g6uoYC2CRMhF3Le5bxt8q52ubVPrPivgefU4JkweESfqL7Wh1jGWDeWjmvYQP3Mtmh9u9iE6GqKKXnPn",
  "key18": "33GqDPthboy7EK8pNddFkDLQvxkU9R5a1fsTWNrvFfTunc4g8HjBrvQWuHwqqSQcHKNA2xJ3xe2BYVg45pnbTdpm",
  "key19": "5CJVM4syckM1gFZfmsNmZ7PTFcqNFytcGK2tJfrxUKrdSmyL3iFLxdinkqsCuBS7H8BwNMjwjHANChjJ8hYmTrdy",
  "key20": "tvVKHtfy3By8kwFiRhydfNQKmUn48nzeXWCEaJ5mzfRvFCPnJmHgyXuBEnVEswMQEfc1vUprpcX8nfK5452sgkz",
  "key21": "48Sg1iCMCM1HJpGERp9it4idQcGkoHhEYnu5eP58Am3KGQTcHHsb4p9iG52wVuAMTGH4gu6mXXWhamyUDtw4nkBH",
  "key22": "63MtXDG5GeL3ju9g3FCCWmFYpV56mGZGvyNt3wqQTUdV1CKuASpmMurh48Zyk3XoWjQj9fbwQhGH7kFfbgYmCcio",
  "key23": "2ZcSjUp6YPh2B3GBk6amhA6dkhsLGHj1kCvqXYDrRP3qW2oGDvVhtCYsMN9EqzeJnNUsVNjtiDYqPAdfoP5zkjV7",
  "key24": "3yTKEsNt2RDqsDvfp4p3vK6ySpwce3trXAq4uDtBnt6ZDoCHijMKAgHhJYwNFvW4m2jvTYABxVpDN8KH1CLPbRXY",
  "key25": "5USpFoWQPpYVw51Q28FkoqMM1fgFgtVVq6AUBMMtAiw7AUsMt6JfJsh8MRXu5dGGwn8DdQN5RkmhiDzEPvZr36eD",
  "key26": "4dpKkM8Yg88JeWtxRKvmBcG87P2KTJsvUowtJbbw7sam9Ha4U4sMk4CquxBMysBACb5Qv3S5NNGHpGJFiroXsET",
  "key27": "5GtvSoZjfEmSkomQADMLXtXdyr8YAW64Tq8ZukRFD5arU9kUxaAkNDNECrsHxASPfHwJrZbwAzj6Rh258u5wLfVg",
  "key28": "2znM7vF832FoTuezzsNoLrHAZpSL3m8NxRyHndkqVLEWLPLPmao1KfctrRMS9qh1rSWb3wdfQ4SfVMbWXHBUhUy5",
  "key29": "2KzsGnLcUg2G8oRFVNLUmETDRRVDrSGQdqemrcG8QoaWV8ECx3yknw6PapkNHNQketWw5ifbagNbzSwaD4Bq7Tr1",
  "key30": "2Mz8NDzBcbCcHtDCDJhUgCx4J3AHyd6x5JRo2XfscP3DjWGB3ro4zWeAYYw658k5xEq6JmwW98dmeYhiKdRNoPg4",
  "key31": "TzcaVbwDGGz7ztnsMKX13KHxx2YmxZETDexuJG3h4tDFTyHqqY11BcxgVz282a54VyBrudBEcXcGZ4wdtD5zd4j",
  "key32": "64qRcaeGQyWTKtTnN6HgzGsrpuxUq9AQYxRFDvDW5kTEzmgQVrWxAjUVjGdBkjWRjk4r15NXLRgR1vaztSD1ZQcD",
  "key33": "vNRWiA6wjsrzmUuBEg3SrkgYmnDr9hzx77hkcrC4UKm9Bodj6KEmvtoHi2siiGPPs4yaWYhXpAER13fAaFcJT1C",
  "key34": "5J25qz9NUA9jpQFkDufp1YGR9rVR5B4DKyJokmSNTLnt7CNpwVRFD2yR4sMMoYJnpTyNqaL72riD8v3LRubRZNVx",
  "key35": "5xdJug1m4PCE8Et7eHMiqfkryazzazUpe6hzZkmNMtUdkcgDvTporf8mMyRF7ED261Hw49roGDPcaLQBiP55bhBS",
  "key36": "5igBa8GLEbVbdJxkY2p1E4zoCRZMswwhQTQWxq3WUrAV5mb8hqYoG4UNAeFtJNt2K7Kw1TRakTyTfg1nfpL8Z6Ty",
  "key37": "29oQvhbsCopUUNpnybL2X4dAQigY4NmVvnqutW9qFgeHn3GuTTVP8ggiTv2Fe7QYHGd5qtDT3SaHntMss3mFtKaJ",
  "key38": "336Ty87Dh512V2Bau1huhx6fTDRZv155LPFJJQj2FsHkhfojPtshurH4qAxdcNggGWx9Qz2SdeKNCpbwqDTdRH7P",
  "key39": "ZYS7oNxgHmX8oDiswJ28kweeqgbNovvXVRng4xVcx21G8gPut7tFcnRYB5kyKr2S1Gtg2W8TG1PzwH33wLV1SX6",
  "key40": "Bbqrc4WRfVxLEuQLVUVVbYTsMvmG8pWk1teTMXv3a6KVcyYj88N4enCYZjt41m9VrRchFog1P3ya1RAKCaGXTDP",
  "key41": "2bdNXzx27NJRz1V7NP6s3vugVgBmorvtS1dhAezANNasLpBiWWFMSsPhvf5sgiCi5UDbCLvtEHsmTAV9zz8ThGaU",
  "key42": "3VyDcsL6JDmG24QJYmaTQBo2h5HXFhjifMJXB9M1Eo22iW8QGutCJQ21UPf7fDRoKv2unWcwH53p1TqYcrX2RA3j",
  "key43": "3oqMuBw3cMsdRzyyGKqxJvQXVSnK7NYypnqzWEYvSGY2b5v8cSjYoW3WCpL6kKe7ocXgC9gpXHNZnEbWNCqLv73K",
  "key44": "33J5FMbrtSnL6nscNSADtwGKgwtkFJ6GxpK5Ns7bBmAPVhCd5FdcSVeccfqP3e4S6YrCk3C3DGZPPUhixWCeAuhE",
  "key45": "4j4disBt7tuffpaXXNWNk66SKnHrDRiE9iRTkK6dHZkpjkoPmMeXA3mj3VXhrt2fDr69Wgy4FEaMwfcSHCeXe5Vs",
  "key46": "2XHXCWGfGL7dDZqd1z2moJ24Vq1VeF9DMcVAvTGAJXRaUxq54zTsfFecRBKYPztdRxuTYCRiEZevTkG56kh6HavS",
  "key47": "2aNwZJcuyQjPKVrfkK5HNZBMvc4Tuqaejo167DD192RqG5ySFLDAGHMKtU4TLDqhzL7Tt6ai7XPruoWeCK6svJhj",
  "key48": "2qquv6rCZU6G7XV1EtFG85kMCriSsKroFTLqdS2Lgs1HyQ5gmjgbcDea1ei3KTnE9PYDj8nFfwiKegCUqiVWbkCc",
  "key49": "UN3XapgfMfFSebs8RryK1iBFHSAvLiFssNLor9eHdn9exDzN5mkmZd1oyzfiJhCYGpxzVgkR5sShiaa39wSFN4z"
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
