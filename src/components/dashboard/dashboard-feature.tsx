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
    "3pam7qsWmK4WY1L1Zd371Cez68AD4icnwz1NwSqSK9QRoRDS4LzSwQZnXzG4aMseWSMS9Pg3aiQpfLKf1nB6NcNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUmPBdcaPvDFNtp71L63kEN1rSymF5KTUjibU8U7jYLhPXqGZT2iZap92ZzvCE6AkXff8zJkUBCrFrPsu6RwteX",
  "key1": "4Nf4UHY4ZhbBQfSqcDCrY8KZoaLPsujVw2oz26EujKQpcQY2VBSGBdxpzJttHBztumo3RFGD6CcqJw1wcY1uY8cg",
  "key2": "5xMvfiMoa6j6XBvwwDn9cqztRpLH52XgJadGUExtWN1KPPjcFeEtSFrTbR9xeD7veaKNf4mo44dLMiSdEDu72MPN",
  "key3": "5g59n23sisrXYkY5Fcmdz3eswBwGCvA71pmTH3Q1zXen4DBtbbR5h4x65PisnXc6H8AruyPUESWjecimPAz2dMjx",
  "key4": "3uWTkCWnJ47AEvqBhfw8jv97vbJx6EMudzFbb6Gr5dVB9jbLW93YMXHdxDgHe99Lpyz2CMxJJdsLAFWHaei6ExoQ",
  "key5": "2uCcwBvEduFmGrsKt5323D9jXqgK1AgvSNzN6kn9K4X9ZX3PJ2bqvkg9PCa45GNtmuwcoLKpFrEssVXAWpb3rRmH",
  "key6": "oGPHVh9HW6wxFBqxSmDqdauwgio2rXMuNariLzcHjNT9jN41c7iAJjyRjeWRdPgzUNFWap3hFSDwFp5bS7izp8c",
  "key7": "3LGzjnRjNzx6B1DkZTVw7FjuYVbcTNXdFsoBdS6htTRjK86PrtqvKsPWGzVfFHtcfXwsB7H4cZYNT9BY6C5Ms8nV",
  "key8": "JUNq7fXwPQA6j5zYNguxR6uq1xYFYRXghc84aQuVyPyPWeZ63SQDNg1fDadpBhgiUD4NzUizTbrQquLjuWrKJ6U",
  "key9": "3v8ZJdXNMJSx9LQ3nVmBnXvQnKMwdjRntj3sB7gJMQ37wQbJK7UCwrCoW5VfCx7irX9G4pX22kmmB5Uwb6ehYqTM",
  "key10": "2AckvBQ5evUcqeLpSnbNv1mUQbeWEoq1pMDNNbNteSFySYKJrXctzhoq9wFdW9bwXWEEGPnnnwU7xHRAqNeBmApy",
  "key11": "3tA9unfwZdAP8XNaFXkCpANgLpxeCdxmXpaAHSB4PTRCWpEg769u3f8UB2jHjGm2o4qB5yigqBpsSFtS4fjDUWr5",
  "key12": "3tRGW2pUv4rp3zyXqhVQwe8yUrKC2z7coza92XMR4USbmNFtHJZ5mkRGHdzBjHwbkgXG9EmcUWcDtV7qb17A97cn",
  "key13": "3RY7AVrhhpyhePexZPBEsek8tTNU19GauheXaiDFj9KunA5bqucb51cearBW2UHnkwHXXRnbV8W6F2yDEKE7y7rc",
  "key14": "2qVoFriC1uf4vgHSnuUADhiWrM9axYAbnQ2rhAmA2rY9qHcxV5H2ch4jABrhj3iKfos8UZV3uRb2iemjZbsDhrZV",
  "key15": "3RfckJrQbXxZJVULiixuE211BFWx8ZPWoyToudF8HeFaCvGioMNH56ayaTVB7Jtw3zspxEPx2tANhCbfaDT7ygfk",
  "key16": "2Tr4x7dKQebLXf8TPjZ8agn896dJT2sMPNX9cYpBkFxNDyxBdGck3JUbpCipoReQAT2cwBFnbXSfHCGf663TvNJW",
  "key17": "21KQTEantw81hzPNry99jVprfzAu9rE9YpAbwyC7CwvW1yKTKPE3Z4afsx3CeGSbXG6Gx96qXEq7JxjZ4W9F86bs",
  "key18": "5Sin8tTYfEmTWSCSV3Udqr3BJmMTLFZaQ2yb9MfDdBSywmH5GFmvqYxt2iPnSkqomMvUwnNR7V68NKNrzwjd5awh",
  "key19": "5TibQ7dhGxkoRubMHgJvhfxWPXYFqszC9hXLwNjrSmGALMmwT73wiQ7FK5A4Nh2SYXGvbA6L8zRcCi2GJeR1YPpo",
  "key20": "4Mc2P8DWRrXbSjkE78nkczXb2G6YFE7Y43yoPnTdCsqZNtkYyZTsETpYN3aawRRTNxKa3WNwFAwRtyiVhTvr8MUk",
  "key21": "3tShWvgizfkmSx9G8Whsxra5ZD9om8rjCEQfrsZbJQNVXA1dT8BafxoyF8mMwHy2s2sJ16gmSyZ3Tvyx94Bje6ui",
  "key22": "5fTq8YKvCrWxjFCLnbiDZYBLHDSVDU7W7v56bt475AJTcAP8rq1XYfPQ9EgoyPhJU1E9kirY4AUTNFVoM5o8MxBW",
  "key23": "4NSc9zAX2qotPMswY9ykayPZWqXHsiMhS6C9hzbJbSycqevpUBdeW5rueAdKtN5fNxntGuxPgGdZruiDGWZPfFCa",
  "key24": "44ojb4kza1ovWGWpHmsCutaPfufVoVnTK1XwAfXSAY3FKzYqnEeVqCUESMuFk2mriQvRaRLsAqqwZxEkCv32Mvtg",
  "key25": "3dJmMBAkk2964pyzLnDwNUEsJ8j8wRb8eVJHqGfDbNtwxnLS7E6bkP3CdnYkc9RUQuqeArhjfaCbPRXp5JVgDpXE",
  "key26": "5GHLxuWaYZyig9URLXGgCqcQnNnrmUGyJuf1LdCA4ME15cb7NDdqL873KSs1r9i4kNHVCT6vXhkevdzwjhCJWXkG",
  "key27": "5WyvwH9XeXURfm1GWeqjnQbRAeTMsE4Ef7djhcA4ua1RyXKovCjvq8UV9gs73DM3442rKtpaGDERAj6SMU8J75x3",
  "key28": "f1m9ex5Y8GSv6ekbPj73qvXbp9rBFCrZeBvUuH4mZsQDJWmuLYrejqs7HjH4hJoRmhbvz4dMnyQXcBgzy35a1Fc",
  "key29": "3LEjN1PjYXyx16dM4qG3CkLfzazK6R8esjU65bnXMPpgUE6h3P4juNPegq4fUY2ttVC2GaXRgFXN8dND4JdEfYpA",
  "key30": "2KMtJCnUPgqVne9a6maQoEj9CyeUjEonEUTYkQBxym17EBBfFtGsPfU88Fxq9HaDjEDRoRZfCyHCL9jSmdL7XQB4",
  "key31": "3txCGtPw7FYJJ8R1dBn2QCaJg6GmXsPR2DrCaYegd63WiZu1Za361T6G3yJ5SCUVxRgfnk7fRUq3BbyEiovQqf8g",
  "key32": "2zma2kh7NQAifeA5KiFYf9rFvCrvmEdwcVWSvwUTsAFDt5pV6povm8UmQn5fh7utq7drEnbi4dEYcr8LC2wfptR4",
  "key33": "84tRbQkiLuCV9WUxrLPv2NVQGo6gPkgEMMHH6PPvwcjMj5oLk6zRoRig7GPj2V7rSBWr6yEjPaDgPedS9jrA7Xn",
  "key34": "3Q43c6UcvbEH2unZnp8znbfKutKVmHxQzSojaFdSM5wxon2WcdD1BPp7wskBPDdSyqRZrfUHv2Dofvq4ssYoFxax",
  "key35": "2zPYg1EXE7brELXsPmr4ucNj5LTJij7ZFo1MTGrddSRFuj6Rcf43oMo3hWAHegt4w74ZDMTsYE3HBAWT9zxdWeKc",
  "key36": "54ME3MArYZidQz7y8JSrHDKo5ojQFgCRb8EKXSxkqpWJarobg6742cdY3KJGfw2JLRh9kT2eLZqNzrFZUg17YHrW",
  "key37": "3nH1MkrAdxpYHkMQx4WrpoSfqEQ4VGLL6hhMvcgfJLoeRki85UAX7Nig3tKGzeso82FJ7cPD9Yef3Z8jGLugUfjA",
  "key38": "377k2HWk5QG25eKjfrgEq8T5pmTqHfMAw8H9yokhCaFxxYE9S7uFRcHHFAouKWZ3xA8d7L8gAymoQYsWvhs19VWK",
  "key39": "2s8yVHfGtQ1VWaaj7NjiWw5utgEhyNaqZmxaouyq6SxfGghYjk3DmKEv4WuAqMSMa8MAat6CTjDvtmikx71sdJ6",
  "key40": "4uRWcyLw2enJHtWyU4SoCTqrX2Ny3wsiqepSuHuguzcmHm5LTScASj53a9THM77sFbUryn4L49yjorfnrHB8S8T3",
  "key41": "MVW6E49PfZgZh3WFnYT8mGzvAHTYtwhqKYAqCL8FprAwuPgFj489kjRGzLgKEV1wYtNg57HWLFbUFhyfQqEHdcW",
  "key42": "39xnNx1rKzkUW8k8jzWCvh1voHFgTx45ab3cSkTG9Q3oEu9VkureK5XkbMBDc7r2DNU86Aw1Rc2ugxPJnGx7dHC1",
  "key43": "BHhA6eZ1JGVQp8jnGPJB44arfoaj8v5gBf9TUqjUg2Av8PdStuZpKVLGZMZMSd4nP4MAsrbqPqVYTagLjUeviqm",
  "key44": "3XJ5K6adzvGAPYfhry3bZyVyFzZQh9S6efXAs3LXvCUWnDDeTWzZHXsdVNmDdxmbpbQ3q7CD1FSa1AK1WAZbRvZv",
  "key45": "4H9MQeHpUNCbuw4Vkgr4fDUShdVCZ1eZbg83PsizpaxXYGGMHj78JC9fiVipi8z1EbWtyHXnizPizDMggG2wqrv4"
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
