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
    "3mbnt8m4ZmyZHXcfdGzrPUrwYk9vKR5oEyRdSVXcmeMD93L1D4MRawLgvXHKHWsabvjxQzby3dM2yycanBCnbtng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fxPmqYCqeFaZXW1LVQFvA4fNmxQvhfnpSTtMos1dt1PAKRDcnMVwmk4fYkTLS7FoAp4BNnZY2FrpkXgZubQyZTo",
  "key1": "6GbQ4UHXmMuhN1vQp55wb6tqrRrBhiVAUBkKuCiMj1KCh9YQTgfGPGeWWKN2qkHY8rWz7pm8Covh878BNUkQUP9",
  "key2": "5YK5iVX3pDJbkosEbMSAScknRhRbVE1ciC7ZkRmeRneV4ffGgCUkfzTP76mWHEoJQcD84trAohPPGUN7YNdYvMNp",
  "key3": "66cu85pLiKuytViVg9VyzfkPHCmkA1BvC6aMe6nnU86NZZfU2BMTZEoG4JzAU8Thw8ATw9H768kjP2Vwt2mN9jsj",
  "key4": "5Cz4tSdNexQPdLKojfwBdncuYZU7rMmaHyJVn3HJfp7SnGg9QF8oZcmRopVDNxhzcZbBPfzPi9Pc6VRcamou5aRu",
  "key5": "3NQdyVjEM9M7z9VAZhGKgWcYoKU24YEdKE2b29rzgqrv41bLaScFF8qoeduTxJhz8xowMgvvBWXTzBXTH6fCymcQ",
  "key6": "C74PdGHokr7GycgkTdMAytpDqTNTsNDqrP5KXRiF1XTqrfFBpikWaQGUm8FLEK5A913ZX9Z7URRhCJHDCk1D4pF",
  "key7": "3KLKyKaWNSJYttHX5T8VgKgtCBiYsVyRapngPjVk1EmJtUBGMTsRFArNxFvV5geBkEHJzr5t2t1yGNeJywBfrG3o",
  "key8": "3idvD81cgYJSGcEWB9ZCgXhUEosJh7U5ky2uHKDVuXGaqzwXhXPmtXCG4oMCd9i3jo2kxDJZaNkxWnegKqhGhnCn",
  "key9": "2oGD5UkzWDnLSSxAu1tGUR5zfKw8athBJ1QWKuHuzsghjG4gHUW13PJSCtUigPx9a2nNh6o1ZnBzBQUVBnWt4Ae5",
  "key10": "4pvMRvi9XGWkbUud1bqARmjBxSueXEZV8JqZsLPGcqc1JTFRcBGyeGui4bCkduBoZcXJpFLjYoroDZXsETuQhUDJ",
  "key11": "5EVJC6q6Cs9GRMYZVQNWymyFEffij76NjQ49Ua92BW7QZ3Yum2e5zxPv4y3WfKF6wpBPrTceiDjVmt4wG7YWipwS",
  "key12": "5rq1wGeus8q6meP3Pz7WQiFJRFHh5o5nkgUd4JoEU1X6tfiyDvxQZYjzzcGHa332AQxbfPNzvgf9mizo1pECHCLj",
  "key13": "358YspUXrARrKYnZNriM9BC1Jvt3zzsMw6FMRk372K8dZMkrWe6jPc4yAri2B1kkZe7T6skvmXcJyGahR5SZWeA5",
  "key14": "YtLmw1k4ZRn5V7J39DGf7YCticyUcgKLLJm8oJHApDavcJVeFhPQyhtsjzsweUenbbw5jLG8DiyKp7nmh5kp6XQ",
  "key15": "4T3LxwQPZSWswut8C1Qx6eJRGLh6FDQM5tavnxq928DdKHwWhmm7uxBRSLs5F4oKt3ZTjv831GyvR6oraPrft4Pd",
  "key16": "3bbzf54tUZJG6cBhDem9EeToBoRmbuLXHHn9Kp5ZsMmrCq9T9DAK4MTkWa1CXT6HotzfM4mW4pPbmnYivxrNqEHj",
  "key17": "4nyj5SUQcBHeuZgoKMtdyQVwhghMK7SoGoaGPtidLa48vr69My3ZbKG1WFqxZDwPMerSdr6xZR3pzZDGdMWMBNgy",
  "key18": "2sskuqffv2AQWX59K63Y5ajuWTcwdUf8pc6gL3uqj7dtPgFxdMPKmKnU63DsJsDUS1czM97ViCEXCxUUg8ewVAdB",
  "key19": "66PZoN7Lm8JnSuSuJczFcwAoDKXpNNnX3UWiaDCkVP7CA7sKLMtxv4jEspxxg5MWtjFtBKHpcnhzyHNqXe3f5oWy",
  "key20": "4PxX7AAdyWiSqnJZMSMLXp3zMoS8FoxKRkznYmVaFGr4b7AhC7vzgCvXzi1UcixBjPK5PfRV6FAcfgtfTPzDn63s",
  "key21": "3zMwmxs2h16VXXpzLuzRRSQceMRk4MURAResecBuaRrNnJZULJPU2ha2znDaD53GbVos9dYLSeGcgynUzzMZLgEK",
  "key22": "3vGuZqCmpmWvSEk58fPyA1caBtpEJ2qSLK2tXdPPbiB6F27zWEfpviMhCcMdfadQvd65rZfk7tCNe7KPL4BKuERq",
  "key23": "2qDjEpXJ64in1CfXP7qCtTKxPFqJCJt8w8tzQ1AWKZxJd3d5mpHeTTKifNP9j9z8WhBqYf6cVbLJfU4aaq8SnFTS",
  "key24": "3zTVdtpAQGGFhEoaV51YLS3R178wRd3uh24aL8zs6SuP1gK6K6awMHYNvmqnt57MX5c8FAYDCDvqj2FRyTGkzP21",
  "key25": "44BvpwG346embUDWJKjTYbZWmd4wHDdTKanaztY3ERsL2z6nowRyerddZV5UdbQH39CsDcmJjCQtTKVhoNNXMXBL",
  "key26": "3u1zuxXnxtHX6mBZDT6CTtdtuJ5k4BM3Zd7QyoJUJxjfEwpscCGnQ2eHuyD9avW6NDpPpTzSZoQbmzN56HU6CjkX",
  "key27": "322tckJ5Y6q6StLsVaqWfH6uMCExLM6oAb2TH99LHRDca1wgdnydMSrJaGxnEUPV32Po3kWAWFu2tkEeuLdYsTiD",
  "key28": "ok1StSf4TdtHMSLf195dGSmr1pqt8c5VVTBkU12ysdoJqs2aigQ2U7T12WPpVv5np58ibozgM4dJ3TSSQjo8kgW",
  "key29": "3xh57VBdadMbbk4qYRMfo1WNU3TDE5Q6GEhG4SPM4NoCbJULpq8ngG8ziLMqpLu2suvrgaSzEXPc86oTtq88X5pn",
  "key30": "3sNieoyBgz6JSvUWivMWBU9nsuqJdvqnnKALpAvjkQ64CFNJTcduxB2zwiBpdcrB7kBypxzuCAh6x6W2iDcGnymJ",
  "key31": "2PNa9V2ZxN3b4TxoijK1puL117TRPPF3P1imf1GzS11icsgitMGUHjzQFvEMbKhiZaMzcS34SJf7yYrqRsxVSLr3",
  "key32": "5NrLsFbpD3UdaNCfRsn6hR1JYYwGZDeVKY886D884evtB6xKXnHtyLieVo83t9gREAV8Ln5tLzfRTGFpXtVRaHXs",
  "key33": "4dBTWzAwqFjLEgjERALrjZwWdUneeChbj72xm8QEg2zMbKHjDvKZuV5EwkTNP1nseQL4HgdhRUMuZMoNhVDY57Sj",
  "key34": "HVkyp8Mi9fSxCZMg2PJ2HgHcber1oYVNVbwZQr27gybVvLq3tddD1UkZarqPFLwpvSAiZyB16nGcKLGVMU1et1C",
  "key35": "5oz65zb2jh6YjgfMfrtNCz8aT2iyHYmn42b6LLke5kweoYEwBA1fSwaYHiLuU2dzkYzPXgbdb2ggngEJ5Hg2FEEA",
  "key36": "3fDwAQkthm61MMvm4X9WZoJTk48UkuURAZqhT4uVbWMtGn3DdpiDUo8U5Zs9AQfEVvt3Hi6sg4ZjwQCcvYimDy3i",
  "key37": "2khYuGFCPLWLj5qXq7hpdQfszp6NCd22pXeYwpzcjz8AutmPfPUrC7jW4F5jCQPFKt2TwkysAjCC9fRhHDiytRTW",
  "key38": "4H7qxAHVq8jPCFyFWEBmkMuszWpfFQGJccUe3yZLo7TZFATt4VLS91bA7rkTcP7rJChi2eaVz78KZcnaABHbuzZ3",
  "key39": "2YsTXRpBZCx1e8gqzVxgKKhwTDe6PNfco9ophVNG7kuiAP6mjdtFKCaqGHAmXr1gXrDiQzr2XtsrPBGz61wcHWwS",
  "key40": "2XS9a6jtWxsKb7HzAkBjfizi15pzv8VVNmym8imvVht4CN4BnbDaaUtwzaJ1XpKWCRV5ofv5jHevUSuA29rrdKiT"
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
