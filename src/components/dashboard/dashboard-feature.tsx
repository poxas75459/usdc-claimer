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
    "4nyUw2Kiy7okDwJkPGJ3fajPyqYLBuj4RRhfPtmNDh6iwUngRid7JdtkWnpUhes2DFFTzSyksV5vGJB5mFRrkJQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQ9y3R7efKJ7w9ZR8zhLtXzo6WMJxqaowXZTo47yrASARm2pjPhWkhzC3AXvXbBRUuevEnnfG5kZV13tDGri72D",
  "key1": "4V8ixFWWau47P1jFF9H2j7J2QWwkwdhmxFUaihEt4ZAa84DP84xXtqMQjsDsVFc7LoA8sstN6M3MiR4SKg22D2N6",
  "key2": "4PRRnSpeqESHEhKcVC4u6x6uqsnsjyJ5UugDg2q1ciKZgzjquTZ2pWFLZK1ECSFA3cVig4842AHbX8zJe1wTjUPh",
  "key3": "cirfr53pjQGpmg31yyh1pduBZT3wvubaSDaxofCARH7jQ5SNXsa9BRZ3Q9x2E5w3bidGvSjugxgpBmkJaTakyKU",
  "key4": "4o24Ug6gw3B3vN9cuzoCGVP1k6CJYxLnwVF6j2EGpfSF5qwnkqhmCrqK4AX5MAhPGowVSTBXt1axCqsTBVrRRRtZ",
  "key5": "3LQ5y4cd9AwCnKgPvnJGewcEdcLVy25J5f624ytu97WWFfxXCsvFvUbCJQBwHtqaUbUHCd7e1P2VW63PoCoGW2CJ",
  "key6": "2UDbfu5dNhfCMFDdncJdQTnK1oibPhVDUxMykxVD8pDysBKgxPqHaphNR14SMNt9hTgsdTGbfXhW8A3ATeAE3Bct",
  "key7": "3EGetF5QVPxWm9QuTFJCdp2GdmfGoiaV6TgUFD5grtzDxGeD28AUhx1VYQEqL1mzP9J659HJc1x7kALgsfZ5jdz8",
  "key8": "9KHoh5kd2hJwimBK6cxPuMRXcahLgN96oiufMrb4fzg6yPNAAUGrrZk7FJGR5Nh9jh6ggF4oDsKi2Lgy3S7BJh3",
  "key9": "3hWnn6c3HsNcSspQ7XniNwGijZmxVzaHLywFoUoF6MSTTA6qmdgkppf6G9p1gmCa1hDoWUUDHLySAZwBr8i6sSWu",
  "key10": "2UKbsr1TVkjGfq53upixmbQnpkjkc726aQ3GcuDnNoE578DmVyePXTmJassjRNZyG6T1pqwRLM1peBTKQGyJQ7M4",
  "key11": "gMEaP4MroBbgYSrbZdvho5CKPwz4DLF5t6neJtQeq72273tr52M87hp2uwYBrXAiWoTfDG3bjdkgDAn6tPetgqg",
  "key12": "3cj8owBn3RiW9JHdku3pCAnHHXtypKe9cjQpVG1CRPaP8u5K8xSAJPLz2efHSyygJNkuY3pySxDeroEq8AEyzxqQ",
  "key13": "5eBRwy5wpB7a7hEGJkYggWLNKu8iHwZK6vkrom8LCvAF4aiEThdmp21SqWEgd3Ss86vbDKe4zTUR58AjkMifHF62",
  "key14": "2bs3XbjETuM6hefB7fCbqRX8CqsytJe1nuVLDh7hmoyiWvv5TAAdLPNtoYf9BsSfMwM2TBqprGSzjveZzukykiyt",
  "key15": "YpvcWR3xxmNSwKkg4qMKKb279QBhZkB4ZUbzvM1zywWNeESah54EVEcVXTakW1imajTwYsKHtgfM15ZiXhkPTGx",
  "key16": "34M22ojcH27WoRA3tfLbtP8FHskvgW5X15UaUTrU6AtPNxKtKFQbDBkFakSssB5W6tFPtNL6Poew4i1Za9SqTBTs",
  "key17": "xiXk5CL7b6JHZJFkq3E3DedF6yiJhsfbrznUYaquRdcKwBt3pe6qr7STYWrNmWj2z54xHVpsLDHDutG77VHsfdp",
  "key18": "3WGFEEDK8n3q6uam3Spi4avU2Y7Tp8HGXfaX1Yc5PrXdE7ZgYvAoVSK1WxHfZSnBGAWJnxiesqqaviDQBMmQZKBh",
  "key19": "LsHZBPRy5j1XqazQtETtmWzPxrqDSi5ZHdugDSzuXrvtJVGrvYeRpA1HWBPgqd41B6AF7TN1tf5zavMwPGAL6fd",
  "key20": "2urtuNgfEgR4bpFeGLHXQr17SEiSNiNPzLcLaHn74hKemJEunmwp6Hge2pXNdaeytw89Ca8LCjXayz1wPoXcNCcg",
  "key21": "3ghgvmQMFi2frefeXHte33TUaVhAYEDmUM3AFEyQ47hWHNgBjECqEcoKQkFxGCq5xcz3ATRJMUo4RSyfALVht7yN",
  "key22": "5TTD6vX4wk3mTnztkyds66yidyxa2GFH3ConCoGJAnRhYggXcG9QS7fRefJCNu1vaGnRfJAne7VWiCBhEX4zseQL",
  "key23": "4Mv2WJFDvmAsciR8Y4XkCM4xhp9habsnSzJbJz9fzBevFR8Tu1Gn1JRkeUjY6eXh9YrGvJpHFDjhLrVrzBBMqCya",
  "key24": "37aX1Gt59oXsFjWMYFuFNoewE6FbFNuGzDxAtTgVjrGE6DLsbZdp6P6yWPA8cQevYE7wLWFHYQQTDeRtbtB84EPx",
  "key25": "4y2EL2LTSrvDbwefVWh2Rv1u2uLmwJFoyfZ3d4oR2woUb8fuRCFZoQnHPgXPa6qKXJFjpab7xdJTd4jbpM8M1MKz",
  "key26": "39YtFWcqfBfVnmGANicES2KLyzuSLbwtfqiLwWe1VAx6G984ZWMvMPoZuSUEyk3y4e9EVAV91Z2zNNKXM1rvFfLR",
  "key27": "5aDZhTz6WcdudXQfWKchdGSGi4XqFNv5LLPLvys1N4tL8PiK2BeS5JBFGnXye6dja3hdE8iahcb3QYcY3S4HabbN",
  "key28": "PQrGWDXqt2BDiv8ccPPRQcELHaanvypTaXWZUsKm4wSbNv2DdcUG53qAdVFosiUTNBTEvcL2yLebB9xnUh1HrL2",
  "key29": "5Ut4itMBpevpTHpMaK8QB98NyDUMyZqBWDjC4EyggmAKLPR9N9pTyUFYNYnWuo6Eq5z6Qad89q1YqWPiekkxWGUu",
  "key30": "3SVwSJzfvTDW49wwWj8pCjWmDBEVYou22rdQBNydfbkJfw3b8dGbHFLbnxViVe6F44pChhJeSCwgyYCbKJcSPbZq",
  "key31": "5ypuBMuvCY6tvvCMjgy9ePbwTdbDMeJG4NjfX1VLTH5pZpUNA5CP3bLxYRSrMZCkKazBWdRngV397VTBYFoFGREJ",
  "key32": "62GCcKRaA4cohJMVZmdnbe7iRLvMRQAK6TtSxJifzDq5orqCJ4etQfbkajLNmQqw5YWuXK7iJ1K21Guffuiv6Gpt",
  "key33": "51QSvKjLG3XdwoEyi5tqxJoucQGcsJGURaA5WnMAQjGvb43VD3uC2pu1RH9W7EguccU25nzRF9MLKaEbp3XaZ5WR",
  "key34": "fMUp2fmgpDn8qNoZ8KzEtfERxBH56TAxEVDvbU6qQQ3ohrj1xGq57W2Kyu2qd92KnPeSNQfNgvnXhCRqtQ8HLy5",
  "key35": "2nu6SM7QfW1bM39hQAW4XrDb9uNc6fXR1nXwnJt1UHRNgbBeRYbXLV2u4SFQv8cYRCaBBDEUJ7V7aiJEZhciNwcz",
  "key36": "32iexahYkaESoMuwdF2SCs4dv3XZn2Ne385qj31BKF4rsBDn5AhgYXMMWvHyvC1fitZKaDL1vYk3nS5JJNSJJwyu",
  "key37": "w2HRoxZ9WUbhJrGN8DsadJ45zLEUVFHUzvURZKS84qw9iHnqNqVAoT5yn3qRXaAwsck3jP1NhX9obr15ZDgr4gp",
  "key38": "2G8HrM4msgusBa76VobwBGU4t3LBbYSjKotdWkt319n7Y5c1NDdjxuqQEBsjg5xZ9r6AMWjiQ26U2B7diRhNurr8",
  "key39": "4eq7Jz23nr2AsLGnJuXd3j6DVYoXGKEW9gQ8PmqP1g5Ks4Venn5AcqJ1Sd2ipAHFQGaxpmADTfVeNZeSBmFnVD4w",
  "key40": "45oPh3G149vM3mS3PkUG9awPJaRVV8xTMZSyQcLSLqEnjzNR3H4ju3MVgLbA6RGUwg18sfv5yj2fZimNXKWFuiz5",
  "key41": "3hDzK3TxfUPb4u5MDzjdWWiCYL3B5JvHPb9LQk9zqAzZQpXFvWLuQg2d5t2Dn4Qzbsupq6RMPDd8UR4j5LnczzNV",
  "key42": "3GUB7QL2WMSLEiZVxvhBCo2g4dkAab1Rim2uvLufckGVdzxfnWEgFmreCGvPwrse1yszYSUseYAtpMsf9X8kaRKW",
  "key43": "4NyPs9HQxSXzg9BnNw2jvA8VYSA8sjSiSn7q8kwAPNnAgde7sCoAy4J1VsUDwvap4th2tFK9KtiWYVpt5kryjDHD",
  "key44": "5L874RrfH347xDhKDf6aHukgBmFJuBZiW6eDhzySbcZEQzCbJKj1zW7inJ6YpK5EtoPD6Jy1Jj5ECn1r1jYjp5VD",
  "key45": "2fnu1BRWE3H7fowuuwJhesWAgVoDoPWU6vr8mNBfhf9jd4WkXMEB6A8qPEMcwG31mLYVprneuqnWvkkpL9A2xCN9",
  "key46": "8vL29M6cDSw5ZKbQpD5x2qUkt2a4R8dtgQMMNn3baEoZSupLjz1e5yn3QUfssZXL2kS5DfAiBm3XE59BtxftUKx",
  "key47": "5HwarqVjXuzZ5eQCi6qHEoj8iN34TSAtZbtapCAgTuooU41teYN8mKdMjpgr5PuWdLt6LWcKMcq8iknovf8gESCt",
  "key48": "5hzjtEykief4q5y8XDLA2nJsvc27LFrhHitAhFdHdunSsMHYuGjE7SivxFBxxtLipdrMDbJa4CHTzvF6H9ADPxzP"
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
