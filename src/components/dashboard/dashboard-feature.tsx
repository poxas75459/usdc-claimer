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
    "t1UUcbmXooy9eUWfp1i1Swcf9t9qJzYbYnHTTorpFoc84WD8pu2SToJ5qzBFGrccVJ37kALyQbWhGH1Nm79KTas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdC5FehCHLBrMruU8DS6yRAx8Eb6zNpmLKNUY3V7wEPq8BdheCSwCgw5oWaYf61GnY1pvNaPfXNu4ezAAK1bgAt",
  "key1": "4LWqed7CR3QbwppZLwjx2fbc1TZQZJhq1iSeBT7EXZ5aQAp2UFKWUbviTvtC7ECFQnq8t8NTdmFZsyL3yK1J8FKG",
  "key2": "3s22m8TzvfUZ6rEpEz31P991TzdaWBEgmnAL7EPDvUWEcWX8EVjRDNymd6Z6UciuRRqgYoYTFtGhisJERrFmazke",
  "key3": "vQWVybKVZ142ZDozCGmssuw6x5UAXQFoxYwTUucSVFAWFxBbe9Snn3m6r9QPaJVfLVBRtkWQaNKn2Th36ZoMxVG",
  "key4": "W3XWkeeyE8NqZTUZNQRzqwYLcsGK2ARFQMU5Z34fZpTPGgjtWc8GPEwweridWt4bku5NwwqC64fL2b1GyTy98fK",
  "key5": "5fMYJyBa6cUcAN8E2R6DTW9W1rNhiW7NQ9om5EcBB89sMDV7hgbvoWLEShXhkyRZBBT9c9ckLkDC9YcnFuUzPsGB",
  "key6": "xXFXfUE9Be96XS1MSQLqdBRLctvuudPQQSxhxwK8WKGYJZuzvq2YXdnGfbs8MBWyurDej5UDUtH4vxd33jLKao8",
  "key7": "2KLqNqb2THsw1Z6eEfLDn4atiA1mZeHybonsDUcxneBnGXBu1vU5sjKw1LQVa3qkN69x2ZoPARn62kpw9uxKBo12",
  "key8": "4WReX7rHuepyAw5k233qJeDKhxT4N7VJ8nUi7QWdKayfntf1crnUKAqsU7Ap4xkuRA1TTutkrcHHm7544EiZuAmt",
  "key9": "2rRFkeBvFPN3b5F8iwZiEeB2ioEKC7RwFwBJVLLiHLUy57tQWEf231aKDhMP9xsr8Pkk9nqYnhUnq5RrNEukmLix",
  "key10": "3F2w43GSvWEU4TLenxnAxQQDFNs4TgYBwZP11VcmF8MXmfB5V9y74cK3m2fiinZ21Ayv5ahT1ASqa2sjMvBuLctR",
  "key11": "4wLzToWPRiL3WFs1Fa1Jq8vJwn3AHL72KTuftsCVzuvK7xhXnHSuygSBvHiSL74eXfVnA2FeZUQdWscgDvkne9Z2",
  "key12": "5XDWwmjvQKzvSiGkz1qd7s7Li6ubUnCRxmqSQEmpVi364WrN3TTRx1VRHF8M5wSMuS1D8nkPU6eNcSm4Bz7QxTpC",
  "key13": "5m2cfiMjaYVvpv1hHHASNtpyjfVtpqaDBZfAogdYo1wtsn56MYvqhJBibcG9j6az99MT8qddNLaRoupi4P2FnWwn",
  "key14": "3izkkYi1VGrZV3PBu7eTyy9RgeG4sAzpETb676HgUtxWHnNZTDjHXrwKPUUFrJKXQCq8dpfWHvUqu72DG6TPjPqc",
  "key15": "5e3xAhkvWHdBG8y8SRaK5NrkBEUYEN3JuQczT1CsDcJxxYFUNaWhh83C4GThmsMkbhHHrcK4dT7Ddf9ncjW6nJZq",
  "key16": "5w638u4qxwCcHZooskJ5KNCEJ5akKEWDNxyMXTmmpfuwRk7b6h1yuN1hdjSQTpMbLp3YHQQwPU2E7FtgdLycXVD6",
  "key17": "5Yh8dvmakumuvAuqNjC7Bo1UV68umGnaxKePK4FLMWGk2UeomthEurT2qPg1zUX5shahcs48Cv7qLUL4z6GtKjsK",
  "key18": "54KKgcz6WaTSKQcn8NNg19fqXAFZYkv7enrfE7EZSeXCU5GYsoPGTavGphDact7o6tLMH1zSGmdALkHQaYJb8MPi",
  "key19": "5wZ4PKPGK4yzCeNLWztn47HFQKcVpg54oak7zo1eU11Yzn8KfeViu3yE1A9goQ8RMuwZzNk6P68cGJLyyPEMVnR4",
  "key20": "SpEHxN6GPAVb6vuT3oL4G3zr6CRH2oFzoRTc4FkVAwoub3GsLBH3YuYSiTjyyCax6URGBfi6nDiNxXwrL6KLRyx",
  "key21": "52Y9HkuTdtjYLbtJZvpKZexF4CEuydPZsddkhKsxpY8925PPJfKHWBMDCyUNtJeZLgqkguMbLct9kQPBdec5hrKw",
  "key22": "3auXUqtEgg5u9cKKi9dWdUzxYNTV7WbxyzKXV6akJGmw1dzKgNqCbTNjjwHYJ7A8RzMca32MWjjPnD3sPa7E8FxT",
  "key23": "3T1NhAH4oGhuyY6QfDjbg6Ys17aKmk46E2CpdoZHJ3jPBE8uz2zYg3APWVBQqa6nx7baeMdHFgbF8dHgt4yK7piw",
  "key24": "g1mj9Su7QHaqSyYsBw8nTjYm23g1TZyLQsAi9tp2TkuhHYrbSworYwQvyE9rBdNbH7xGPqV9DpkyeForDAQxLa5",
  "key25": "3eSKdLuoqQWtyfdgaCpDXztGNU9a1dYCSwFVyALAEWCXLtgt1D6CaQ9GQ8xLNjAqQ8ctLiCrvZZWNm54urSiregK",
  "key26": "2Eyi33zhBiTFB7YTdbnvcE6U11EnCetJ4UB68BprdxszkTwBoFphggZZ4D7e5uWUw8DNPetoDTSxUzyZGE5rEpr2",
  "key27": "4xTehyPjTNsb5eNCiyt3mwED5mLLkzrbZFFRQonBN6s1Bb4TEeDc9xjqWmUGBUzZ18oH6AFpsBTNt6m6xjk8KgrC",
  "key28": "4LFoHmjePG5ubjoZAb8XwrpGC97LWEQmyJXyx9P63e5jWcu2NdfNVJW25yBHdSVxJS1J2iksaKFypiLEKok7cpjj",
  "key29": "9jnfssGpGmtQMBmUTsNQe2V29DbtWxaBAyS9p9ZHXJAKu4fhZaT14rc1M9AtwvozRCQGi7EruRYDYPXHMPu3Qs1",
  "key30": "skqH3YUg5R6LwiqsZqwXGqCxMQ3GZsNcxrQ9BCVKmkj9V3u3DEi8tMf2yKuE4xtuCwjaEws9cmwVmAi6m22uSr6",
  "key31": "4YkLtxENR5uoVdzRiaEKN6K6DW4R6GWq9ABnuLwiHh2mHYMisUxZFtXjw1c4e9b5eJjt3tfbp1Zv6dMmvABMsWd7",
  "key32": "5FvQhX9SvnN7iRFdgimZ8P1A94jswZ7RtzLfvXKeqbS6sXAcVpgTCW4dCew29f4nY697kzduKTwfKxPUDNpj7Heb",
  "key33": "WPGCZ6Ci1mvctTDaWpHxgBcHWNe6MSBZ8Q8Sfbq86CPv6RtYqS6KGPNW8T7Vw9eWFBfmBGh6LeYRCKD2rPCHEy9",
  "key34": "2AWtkqFs4UrEraaECkgRSP8ZJV2scWFEeTh7AgnLD3S3kG5yQzQamaFoYKsgghMpwWSJxV9hQDMLq9GMBJv85ZbD",
  "key35": "4DqJJc6d8dwgggdg6qmUaarr242b4kreSYEaB2xKVwej36yXrQwJwU2pQaeW3D6L5C4qk4aYRCsiy6aF1Ey669Bv",
  "key36": "31VCfuDsDooxKBzU3d1E8WvSeyR8DKQH6yVETYUgtYb2xeJCPsCE1o6yJUwmgypaAG1GyPbuHiNUy7QVT2gRLhHW",
  "key37": "3QxQMjvfijDpABHHqDAKpRXdHZioyo5feZEZ2F26pkApkvrmC6e5DcNAbUadBrLZXnzzKiozvdqEzWKrLsNF4zpD",
  "key38": "5vxKnjHaFVYtGZAbZ5iCFF2FNjW49dJVpCgKc4UJcZ1N1R5hGVjH5FhvJQZEA8WYz9GXeopA7GoFc2kRWyzGCeQj",
  "key39": "4S3RXe4xXfQEpN98qDh9LrdCFPfE3h3NXLxT8H7GDsq8bJsGvS7GPmd1zLpdh5zmBZeQZfZntmkyaZkntEsFeAMu",
  "key40": "3MZr3yT6RK5HQSsj3P1MQNGaYzuGcpUu3qYcsySWRAcw5XaYNTRXzvKnKpqBz2LV8jvGKQcmWeoDvDrArkeiRNci",
  "key41": "2GTF6MdTyYQeVdqg47cD1w9LWgxhusSm8cn9CobFenoo4NM1JyYs9VoWsyZbF5RC3wYJNMC1ZTH6We3ZUYCiBGZK",
  "key42": "3kq1q5Dj9NcT4j72nYEsYAzXkWKjCfm8mKJ9hmZ78C1ftC7LdK8rAfc1ktPFvvHmccNuqK53r9Aa9zpyqYqfSLYC",
  "key43": "5fMaxtb8bFkJPD4myQq8iRPpDW5QNJT5mzgQgXG4QiK8gep66ZWu7yjN1gPeeCURVLZUewV69nhJ4ar76asJTgAN",
  "key44": "4rDQ6ixek3YdTaeQeEzfXVv6TXvMpp27PFn6fybsy1rCApF4vNpe1o7Lx1sEj4C79t5YjWfYsdutBRGiHEWx9caP",
  "key45": "2xUoKFTbDKmMC9nVCTdUzqJMHvhbGcWPcejn3HH8xYtLhX6jPuSy4ANpZEukg4DHJ5aXvyPmaMWzF8zrcHLAiPuw"
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
