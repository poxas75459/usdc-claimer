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
    "3AtgfCbWfhqyCrD63HeAJhmF6sAiyD5Q2C7FMYniY6Sj2jL3o8R9TGcHpp3ZcRWedefBGxurraVwSkim2D4baL4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kgFTjrsr5Y2yXtqoHyc3QxM7wVUiLeaD48GCoURtrS8hskLoZH2QmHWuEGiYo23D5q1QuZq2f5LtM8EE24p6Sh",
  "key1": "5R84K58djYp63GkQjaJDxKMqFpcoMUsZoGgWKY3ZwGs8rKnoYRuA9GhLouC2d9oV7bKjDiPurAny5bRfFCqyf1TP",
  "key2": "5ULUXHEg9FPGS8RJ7JCGbvNU577WTEX8QAqxNzHL9TuvcsNDp8dLPj3zBsvYYo7j99g951aPbkDojKQrQ1NH56DW",
  "key3": "PxbhpU8VHoSjiFkiRTfqELTGk33LR83PiH5KKTMmMQ8u2LBbe8xXbnPqLo1h6dqrRaD5TWoQtALWamUJPu3uKxd",
  "key4": "zNrocLVsCyVwC3WXcENM2JCY9c5pQcxmR18KuFQWZAmaR9TdByHckgMiY6d2qQmpfjrwa94sEuBXmZzkMTPSz3z",
  "key5": "5poDPX7L2x9AeXMeBzkYqDh45yncu4oJ1LHeGwxWDSVA2PLAyy6wUsaHsB8Es6mQrhGoayHdXYbc2CHFBeNHYrxt",
  "key6": "57ikzX3ePkiZvNdg2vrDcU16htBE9fZe9W42j9UUPdZiXvsgz8itpatHYZfmWGKrqQyYp3MDkqEh3aRdeei9mNgZ",
  "key7": "4SE8Lxp3DQmGnxfD2aF9TM8YGLAb7eFKBjoWgQPuyy3ERkUe1pzqKXQs6qtw3mWH1PGKdXKETHMLp1fqBTkAQmkp",
  "key8": "5cSEEafatDhG2vJscr5jC1tVNiTigvWuDXNMyivA7YcicjHntAQTPVEmJfavcJmGCDGYToekBGXByQbUn2E4UD33",
  "key9": "dzfXXJZ8fgWNtwX8QDgu3v82FNjc587sAmdXP5jcpJss3TWK887LZF9M7wTnujMRJYMdUdUrPp4E15nKfdZRHP1",
  "key10": "4qrfSUD3xpdYHtkzrxtrmZLECkiRr8d6hZLmdceKeXCEUeqP4ShEY2ueantLkzJZt2DiMJhyFosagtuqm8ymx2bq",
  "key11": "uYfH2KfoLkLJ4XdyXdu9eMytxKjeTDR9aqa72Xt71qW2A1bdZBH6UaPJ8vt7B8pcv1kg2t5NHtMs1nAA7N5efGp",
  "key12": "3Vm4DWYdAsBCzpL3zYA94ytuX8vyTuB6TavWRreLZGzS8wA8YbF3avWFC5767bhbV7DXEBCMUuL9fR491UAwEhE4",
  "key13": "56VfViAezXq73EaQKxR7oj3JzrnZ43P2FVvtsMWxx3acvCJjoZ3yPE3LgSJpG3E3crdxnL1qHivGVVF4omKHQxzs",
  "key14": "5EnakQe1xbKyuJYBjxngfzgCTfTdBTpoJrefSemPGbHojG5NtYFwmFshFxu6pPsB8a24JYvSRnp5w49XysumGD8j",
  "key15": "3qQX3T87QV7fAe7GEB5C85Z2cfrg3fXUxMFp49hiM5dP5agtJhrJV46jcaWAvWk8ktPuhQqGYAn5sSyUSBwpBcD7",
  "key16": "64rMTYsr2Qv34u9EKD7Y9nbsS9VvTKWAJqMVCAnzoRvgEmXPusMcnMrgEMVEiVYYUUHUBKYrQD764tjQxjhk51US",
  "key17": "XYRtoNVjKuCVnENSHR7wox3aFT746Q2b9VVUFwbW1oLuWsLDXzgBCjDNHw19ypxtRZfQXwRad149LFVvZW3JpNb",
  "key18": "QJEcwqfopUhAcyFJ9Jq7eJUw1Yb9ewUHXfDXXW5zDp83gKCeZV6JmFhjaaZbGRG5ToD2Gmt1yMLSwygB7mXSjNe",
  "key19": "34svtYMCrTGLwLomHjX1dbQ6ux2HUKdA77Czy7pBXpiLopkRAgHe82a8PpDTxzEvHgkSC2UJt1LhRKYuCcdcwmzP",
  "key20": "5VcR4SdcVwtsH2XrzLyXU2UJZDazydYXPkx8A1abwZL5YoBTx4m2pzSfvASTCnq5Q8Ka9JNwj8UcEfsXyzVS3yjq",
  "key21": "3iEqBtTFNuPbZ4GDBWDwyBfhvtqrWAAoXfZU84gP2m8nXGbYQsJX4uoJHtrn3njVK5Jmm4gXmSDWynzC3Kp2F8fh",
  "key22": "3HiXvGeH2bqAioeTy1V1ZRDiUgZyDapTvTKf4k8Dm3uoemoeYJSe6pKeemThWMyshgKRvq9LsaVoJ3eRFmEJ2R6f",
  "key23": "3C2i9Gc4c6QPfzS4a4EaUVxTsNeiHVxFycz75Vt1jjsXJ1YiVq6Bf3BTa7GG3Dm5shW6VryPKGKxQ16g9mhEUpih",
  "key24": "5BNHmokrdNWdpj4kqmyNrxRb6nJRHPvu9wCWGay7bakXvjmgzdgSG8aqiFfDvqdHU4AHgBbvGXEnscpy9JkoCSMc",
  "key25": "469cg7cyrNMwqVUps5sv6Erome3auEQcQF9xNitvEmnDC1ZvyypZGmWb65KfMN1qLDPBqFMGzR491ZNqWfjoHZap",
  "key26": "B5ZTbzHRKuLDDqFUo623NwjsaUnQUuRZQngvXyr3o9NC2ZJUm2uiEjp189w1PtpcA6hbvijLyAFoi66VLQZXjjS",
  "key27": "33hh1hk3psxp1CzwYu2SfvbpBsyccofRnjYn8RdemJt1hUrhmS3JerJ2eJbsfQdyLgCPnxZiHhp6u8YEaYGA9tt4",
  "key28": "4SsWHk88uq6ae9Zqpv8PRzQt8iW5pKKGXytfZDusLLLUTcr5niFh17hi7azNVWC3avrvb2iHezgW14mRAtVMY1Un",
  "key29": "2Ps6u42JVjg8fRYu6mgqvkBukfzVQGkw3Rua1hkbFYgSEaySMisSfchu9JuUVSjSGQmxNhMjuwZoTvvAcsPe7fHW",
  "key30": "36YSMDRdakV6mDA5tNjvd1R2ci2UmSDWEnqaH9C1n2SZm36VDRTQAR7ZMNZvUk2ReAW3uUYJVVQByAWen1eFDrz5",
  "key31": "2n5kGe5h2NorjA8jdT3EjGMfQ8bsNZoQQ8KkkvGXxQXmW7wGTaQEEDQvuNna6nEczcGLLbkdYJytKP54n3bQwMWh",
  "key32": "2M6fqcUkf58or3ZnWFW2kKVwUqpmgA6xb6picnfdqwZs6aQU9WRnXEqBt2ZSgHoU4ARuuu8EopgtrjXWETS9dfxz",
  "key33": "2cKZ54B8tzYAazhtM9VuWZhVy3sG2zxBzkG6BYrdYCdrwWLKZgDgdZY5eGgq2n7MSWqBvw4fgED3uzWX8sGkT4z7",
  "key34": "2xMrrbMSW4DdK92cHAuQ86AXYU2rD5965zCNqRaiWhAetUdbkWawmvLQncJtv4tz4HXnTfnFoVXEf5awDUVUSwor",
  "key35": "4WUcSzjamJ3YRMh8zVxwenM1JVsWLw7Lxu9vNuAhfQPBDimYyu1JDrQui1VqAWLKEkz5s9XxURJsYeYYPgnGU5iH",
  "key36": "3rQTYiCTqUgqoQfLxXc8duYhLYqELeUzNCDArgBLdVMUYT9Dk6ohDdwq1LR59qoqMnBgPoSJ5daCsyJLSZ1VyATH",
  "key37": "5BLZyEUHsBVnCmRZHMyriX2grwbZAePM9DMxxDRy8axWMpfwKKABi3BGVVMTtx7m3M3KR7erq5LHgVuPV2Jn9DyE",
  "key38": "4zs85SRCiFXpUT1PyKXCuQTTVEZPYTWtE68DxtbDDH5ABvRDBQmVkRGbU7U9SFpjBoooHTkogFjYV6fLG3ELFnPG",
  "key39": "4c32UEgCeHDae7CLx5SGEqqnMezsY7fw4Tv22i4yKWmfqVK4TggqsishCe7AxYG9dUEvZ5BCxSHcQrGCC8DTb9mx",
  "key40": "4gwNH9HtPaRmCX8fyttHDZBWwwpyEP1xi5t9B5HMCukNhKPYmgAPJSqRsL5Hky5sA9eBpHeKzAWpY75qPBZVgpP5",
  "key41": "2idQccf4987Md9d2H2S9yp9jKE8HCeojhib8UsWMQbn9hYo9aymNkfHxJ8jjGhou75iPg7TWq27vBhSGvm7dnq63",
  "key42": "LZWZJLVLV9QaYahRdPkirZVbB54gxpBKeHmYcuZJuuX3uygyRqGA38xjjUovZyp8aJ4vjdaKvtfTKoZk2knPFRT",
  "key43": "3JvovW1bpHGcLzhJWUEBTz5hbnviBBEieDd9ZECWKXTZgAspCfyTrWfyyF75R4mPrUgnLMgkVrJ7g5Wqdt8Lxqcr",
  "key44": "3toYwn8jANfMNpjdxUWRKmK38Ygy6P2GGvFafmsaS48iiYSShz3BCxDAHnQJbpkXSXLkGdbaa9Xqndzu9Ch6bVMw",
  "key45": "4iRzR32MK46Q4anr8yqiuzpzh7hNBwCDopd2kYpKd9TMexjeamfmDsZKQ5xBDeueBNyTxjKwNrZK2Wh22gXHb9G9",
  "key46": "3HQJffE3W2cw5Wmdxz1RA79MeEwEafCD7CSbA9WZAkhXpg2gQUD3dmSMteR3Z9CjAXDD3CgUpLJ1WY1mvAzbwKJv",
  "key47": "3vdcp3AaYUb7cSgx8BbyRMhcFSvWLGCxuRdsLQEW26fdTBBmH775vaB9SvxoHxTkFo5wESZqNfkeEQmL6eL8PkVQ"
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
