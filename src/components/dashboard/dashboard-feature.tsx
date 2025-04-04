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
    "48jqEfByM4sVhSK3rux4A2kgHFqjWmZQJWkT5JSio9fThXwsLv6x3xJJWKN7JEM6A5zNbgS7h9Lx8oYtgZdW8kpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyyYhY5f435eEQxPJPkTu3ygdETLoR5qj9aRQ8SLuiAxzZSsHBBeQ1g83wA46Fq3wBS4KEhewPwwAyzicyQQz6v",
  "key1": "346Zgff6G5v2kLJzsAoYtdenEkSeUjhEmV4kZdVvd8iM9Tap9UFr32AUD9TTRrQgYjQKY9AwjDRxJ1xYuuJ1UwF7",
  "key2": "54UHoskAyuSpWjyk4CzGHTJwkWFwYvGUoBG5i2hXktKDTHKWHUXPSvbri9wCZTgKnvKwcHTbqdQsj8UdUgVWHtqM",
  "key3": "3Bd8yHn5Mub4XDD9bE5dH4QedtUwMF2AnAYeyEF6x1kG5U7Z6QU618ioFcsrmP5HSCnqHdHTxJ7G7fgWmuCjfdgM",
  "key4": "4vRB6Dtd5bvvfXKtktPAZArXCN2Pzb2GxLbJUnDYKriT6Mtuo7kkx15GTanNXDJt6CkbfrVUY4d6EcSjYhVwHDnW",
  "key5": "22vLNo3uYRgBSFV7AT9ZKNvUrQi9Uh2vZkAa5xMC63VcpHw6UP68qaAahi7hdxGyrCThGZELT22pZ1apAY1gdRRT",
  "key6": "42tFFk1M4eBZHR2U2HC9JJcVzbHRsnrkwnG6rxXh1my3NeyzhhsHyubksRWToampV1xKHNHu9PjrzHjHwFARG6jG",
  "key7": "5RR3HYHSLRCPun6tD9bVn4CZJnsz4uNEzQy2L8eMqUnxrHBLwARDh196FAjnsDTi7eBe4j6QA9wrQgSVy5X4PKow",
  "key8": "412bix4g46d1CWM5Q1N1aN466TGntKgHeWLyWvtYhzshxsG36Rtu7z3yNaqa3YohaJvoYaBPSPmdjS1SiiwrrAsE",
  "key9": "4pUC41uNbQd81ecXE7875sDESHnUm5z4PuervUWu14QkYSe1tJKLZUWpqWKWWuWF6jzcifKkZQcSS4w84DwWKGXk",
  "key10": "KJzes2K99AjRnvXZbj8AarrwRvxXoTz4pXH2Lfc5LSytHjEC9pg33BCBDrNWqUsSqFYwGEnhRzXc4986GLMUvUJ",
  "key11": "4aYaVMHJsLzEi8C7V6UsvbZsR98uUwm1CbP6zAar9DCc5UJebL1kb3F2WQCgndAwFd5c5P8E2tR6RpT3EJBqMMWx",
  "key12": "pGEuxZCxRUwcBqowUKbrTjQwFhEyrEHwUFjWByLoLoHZND8wXTZF8C9S591i5g3HcYrYJvoSV7KdUgQfz7Kbpkw",
  "key13": "4viG5YfdLjpLYWbqmSjATt7dNQzyq3W71vrygVqcVgBZCVZUPVEw24T93wHo2DhbtMGHbDHMH7Tdt53fnnigWiAv",
  "key14": "3VQ11ZLewNykpfoCrA8dWgDBYCoYPitCF7qpZRVbZF1VrFAYBqVWcx36i6wUhLd4k2ZMs8gPiiWGnCap8Z9HLtMU",
  "key15": "5dc1PGMuBeKs2s4TawVbeN3kF7LFUS6QEBRfb6RwjwKvi55W8oRFjjkCADo4UqCwbcgtVP1iRv7mSa5gvZkrMkRH",
  "key16": "5qWvYHPsgsELR4nK2mavjEyt6Xw8pPDuyUK8eRnFJ26gQYbH4NUYm4zRWeVCJ6rfWVdSjoezrMTHS4CQZ5qFyhkB",
  "key17": "5VakJsUjvYeBUXsuHxZEYF7vqE8YCkQY8NpNJWreTJkp6BXguzFSSuhiaqktG9mNfr3QRPi69ihGYXafH1Wyr4Gb",
  "key18": "3sSUssSJBhyoLjqhDLJ5NWUnNyf3W81oDANH5mM14vkPCjJtBGjLFzDLYHnXSnyUeuiiEHsx4n24Dw5mJ4wyiTNy",
  "key19": "3XfkAxz1nNQ31tspPMzqKCqvJJAPX1mzy1dpbR6mkB98Nnu9UunXjnDPD5RYkV8R2j57FmPieEBP9mC2atPGdszW",
  "key20": "4bBPhkMeSJXpajgtPsyL54ekAogi75nHR6JoagFi1FjfSCSDPVzyUvmaU6cTLNZvsiQQFZx3QvSCzkKbz3gG6Fs",
  "key21": "sWuMyoxELNbSbwbh9fiG4jDPcZGJvBNR9gh26pN4TKPmWb6U3aUEKhm8cYkADaHqb84aqcU1YCjiHBhb6g9GmGH",
  "key22": "27TJNZAAZvJ9jpFLsN2xkGvpk9cvL6qFY3JgPbejvzwPFwGMrYp3bfR9MD1Meeox3UWpRrL7szgpzUo1vHHrGkYV",
  "key23": "45Vuws5zjgdp5UG2fwJpVFmAvZqmsrgYX2498aSiTpxu9j2NxVLedBREq7SwDHBeLazA5gqcSvwJVcnQ7bcGH4Ws",
  "key24": "2VYxneu6QAdC8CiUGXBujxzSKwmqapM2x2UrVSHpty7JgNnMWYRsNMdjzQ83K7XgTTXrjknB61BcrtW8hsepGvqi",
  "key25": "p6GuMW1PpkseikVNQnmjdCdHxzBbKjzfB1RszkKt2W5aZntoa5jyRpGjdaEwXcufTDvPCciFDnxCx9cri3vskV5",
  "key26": "DupVycjQLqDJ1bb9C2PhMeAiFYjegFyHyPdZbTdbPYPkobWv6cYFhRMjTPxChzfXGUEC9w8XkETz7dDAwZncvTP",
  "key27": "5zxzxuXFRHgWsiTauG8c94y95LfrKfVb95kyjN9EYgXaG4gxNAto8NtiHamvjXwibF6myrZKX46D4GjNYreJnYXG",
  "key28": "2zs9zmiJuFMHuBSs4fhmSpLsNiYwfBtkYZqYKXVMg4DAxkbQWYmRaa13grz5auodZszV7dXuBY94d5g7JTi5JCLJ",
  "key29": "Gye56W9u3zNMx2uhQiZ1dfe1akkNM255XbmjSnV3uvEkC9E4ap2AXWKfgftbdrDAzbAAfK3bNLSxMDnkEVNeaZF",
  "key30": "5zTiCN6xZq2sMPUHsM3rjCNh81GpbCxrjLeRXuz2ghV34jwMa2xyQLmFDXS3vhZB1ZJPcAtdMe73z59RiJjqocV6",
  "key31": "ktHmGzJfNnPZddXakxrrW1HLAtvQH8fzihHXHEb68yNAyVx823sc4UQ1QY93x9N89fo7veS4GfMwbpPBfskioMq",
  "key32": "3vekz48FgBWwWENR9hv89esRQhGDbdN14fD8i38Phn6GJ1CW3U1bMfYrknjfjBAdTPmqUXq155JRod9ouMGLkVsb",
  "key33": "5yTHanJ5DufzKA9ftbEfqBjN932E5UnnmR5Ehamwq2maW1FNsYktsunHEr2eRG1mWeWd8x4fPxjGnkZtzzurYWVa",
  "key34": "ac65ZppwGBHkyGaDUzZbo1BpzzPj8kEh5BEUdi7nqvSveNScifEGNp4TZQdd892wbZyMahZHFjGdojjFKoagFak",
  "key35": "rwunoNeisGhF81irJgrpK9j8jj9Zwovt4r4gmhi8TbE5exPxCZXewFbxBLqk8TFCW4QaEKZeUsoJ7fV35EJg3wv",
  "key36": "3b4ZDv74wyU8Xic2njcRHGcZptp57H7NuTksuDxKashoJ5sXkQWqHcaxcRnudSa76gHnYmgNtHCqMiELj4N4KMus",
  "key37": "2ieh2vPkzJvgGGTLhTwGM6yJ1xjnbVasK1nVNsBbkHyVEr6fJXpYnpGmq5HiDcE2q3VRymg3p2wUzNUiQbsL3fvg",
  "key38": "5H68ds724aUJ1HxTBQfZp29Wy7K7tZVRyZ198u9YwQwTioSLsK7boSyrNv22BcsfE2TmqowcBXcViduiarc5Awib",
  "key39": "ycYYcRvkBUzugSWvUzhkuy2ysmkcenxoEDciZmmQuJ8aVrabnAXzy1pSVANypBbP2tiPzJFXYPTAJZFWSjwoXvb",
  "key40": "64jF1a5ddRSEZdZxb2FrqFh1j7K8VavcMA3gh6rRFsiaiQdbHKEfeMNsvtJAFLAk6Znb1b5bcf2SD89UnTAnma7y",
  "key41": "yYPvive25FXCKCbeaLdUZtv9z6skQ2QkNExkwkiykxodSYBe8AZQfw94Ne8iYicqxuF85oMKm4awBV1X6vtoMEB",
  "key42": "5QPS5JKEzebmtLUgj2kUeyzw8uJREioQgfNbqhG2wrNWNhW7zmUNS8tfMfYJ2w683KCkRRPpTWCZt4tQHqaokiFs",
  "key43": "4LMPmLvnSd5bjnhMdDSnHVf1xKtHaRYUMS5jwrpLrpBp25DTowVRpFzVZAGYBf2yr8tb6kveEnzszdats8ZYDdt9",
  "key44": "5yQPXDwsPJCPRmfsbjupV8n8mvxr65YjC81nftpvKbkrgAKKfBPZgu8zv4fxxKxAXeJZewVUQGDQ3r6RtTn3Y9fe",
  "key45": "VoxbJjArY5xmpEnHLynitkedWg9CLNFx5nVRxhvJZiQeWnkKQmv19KMn2PonWPNYNwZ4Zr6DQpR1UbYMt1gAjXa",
  "key46": "L5KAK5DfsdNMTNJVSabRyZMFwG5PzPTokv34jKgJE52qrbPcY2KcrszZyqshzuPG7hnnXhQwfsKFcUGdQgCf5VV"
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
