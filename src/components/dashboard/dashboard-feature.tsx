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
    "3tCKitRsMsux2n8JTBvctsZc8Bw5utMDcKDMAXpqH8GzRxXzwPYaK4JDTJMxj21WB4pgz7kk2JkdHptgXUBQ3Uqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EszrZD11WNr3uKEsT2eyDSjaovB3Z6rFzHsyKqHVqUZBrbVD52UBgoZfwGjw3ddTNCseD3kdcGmdTQDwaKvbW3Z",
  "key1": "QoT7LsQmDB3Jj5ChjVHHPyKUNXszgKbN78FX4hZHDufFGNw3KrYbwDXidZMMmJV7mRWYTK7EPU2Fa8pV7uzPn66",
  "key2": "28K65A7AAQTt6y6mNQw7uww4bCcGnpnYiQ6ZwBx7vAt5D9SW2iSZBx1eDhp55osFkMAFLh7uoUnm45iMW6Kxhb5q",
  "key3": "4mTVyZsZMYSJrx8SWWVcpqbpneTvzLrBr7e6CqD4pPVznpy7vQZGoXqCDDURUN7oFHfZbxFpTrfMcDcDKRPoUAms",
  "key4": "5sDaJDEdJyvxndK8jEFWaBRn3MyxUk19GfehFwNuamPAMBsTfveY1dGurZCjtWQfWptq1sUATX8ABkhiX8RPD8kP",
  "key5": "661tHbWwJWcq7bTqgc9c6zGFeC1Xu6n8qfxuhqs15oZDVppTRkubXdJGAm35Ht7DnUcKnz7dLZakTngXQCiCGZ35",
  "key6": "4vBWFJEVyrNcg4ALzLLthm68o97oQkF47XsUdQd5uK7SXMUDhiZKvnvcsjCPjCQwHf5gFsxksd6P8JDpGbqdN77t",
  "key7": "5u3hbu3RVDjkRUop5Qi776CsaYTsGpJQbrhKzLgvYdzo9YPJ8siXqvkiQUa72gKeaFFGiazu9frfRDFNvW5EFH4N",
  "key8": "66nwTdZv6CnwFyvR54HHcGUSqeDpcacvVqr2baVym4Wtzpgf6CStBkjvAARRdHd93o32ibQXSfZ6vaVQkNQqJLhS",
  "key9": "5miA7pkvTL8yAeEjt5ct8N6RUsE3bTCNAvNDjeD56n4V2MXKWviKCnW5AqSiULyESHEayv54oyMLseD5HdajRHDQ",
  "key10": "49PkeDUtD3RKcV2YWpUThrSTyFL9Dj1oXtuKv2b6nVZkTj3t3RT6q5ZZiSCpu98KLCmqveBLGr1NAbfCAwy9cdLq",
  "key11": "5NzbCs5mvYApfQwRq7UU5oHngUPA2Yj2KTJTSZqz9YUFfSKtUcJXWxm5vm2wEHTTRLLhbcLM2JoC1D7PJdWJSXoB",
  "key12": "2wRsq34caFbHtuik1VxU7b7ih4jxddkzc5wzX1ivtMCPsAbxQ59pRWq9ErdnpmiWdGn6Lmv2tML6XRrzvViVWCSX",
  "key13": "2YHRaDETSK58VZEtaznyfyQ28t7hwDkJNz52F21asqM7bGdwYJUsGoQQhFYV1XWAfn7RhSwL2Bcj9uhSw7pqASTp",
  "key14": "15dGHRED68PP4wfq5fc6FUZdDRJER4Sb1ERsCPybB3KNwEX3BaqjLX1xy9KMur9aY8CgxhhH1LBG3u876c5LfTq",
  "key15": "2NjVjZPbEZGPoUq6uNbz8Nr9EVPnMz2MPTgCCVk4hg1Mh16SBvSS3T6a7JxMgHfoXNMAVmUxzzk6Ei5uvTvrN3N",
  "key16": "2gdAyxRk6YyYkHjF71pVUf2Lvs5aaT3h7yNfLfrUitahP4j8SbwqHdFC3qDH7xhxHFmbatDCx2rcWHX5AtM66HCg",
  "key17": "53SiCsviZtMupWnC7sBsdRsmMcukCxcVnjWVNE2T1q9WLtQ2UwarFxyF7damr4KSDE6LLzbwVQb9d2y5bvhbsNax",
  "key18": "53AcpTh7dqKV7Hmg1hP2vUZq4VRTTsph9TZpWH4GeRUcDzK87ZUe3ke8NVpxFTKZVCkwjagMVrj6v65PeFyUjZZv",
  "key19": "22enC7tJHph5mVu8iNWPRFnmLV3dAu2bkKXwFSrRyqBf2pyGsarVJpheKLkboEp1KTdSDLPbaQYXtu9PNemrBS4D",
  "key20": "4VCvy3LNE69c9AGbFeRupDXVXRT8b1QpfpsXmd8Ex9ELLAKMv4K1yqq7E5Ejyhb6ELw7ALP3X6nDjRgmtu9xZAhG",
  "key21": "44pmhyufYRCCvbfZwQX1EagjQM23P8bfdaR8MkvzwaLpJfUoz1hBieCN73is9RSFGuvsr7U7GCvCgsy69x3fBQ5Q",
  "key22": "5LpCiGNJ79XskG3fXno1Gdpp3jKQtsVeo6UVnt5CfU6ajHFNzBTnbuRZVKwUZrRdm3PfsUni7i5CbyhJQf9Pg2AR",
  "key23": "2XWv2Ry1EmbW8LGKyddnjVaZcTWfQHUqbDksxhF4mvecr3iMWjXVbV7BZSRokYRAcUGozLrvi4H7bY7CcmwP6mvN",
  "key24": "4Z2KaAm4vLj8Q6Hrhk36jHL1KDxsoPXFcXXz2eXz5bnFsMY6UNg2QmMy1YAJoTqFuA4ZpPkXD9h1ji1j59jGjxya",
  "key25": "2U3RgcA3K1nXcqNbPM9uVj5WmxTPSn9oko7vtx2aVxmHDSjSJ4Y5qWEFnoPKTVW5KDRL346dWPcDZFcDCaS4usUq",
  "key26": "3fSFNQXCkHUehg4AFpuHbhWzVYipiiQEXXFQVJ2ggJyYzitZ1P1LYgwsrGmfL61fhGWJ4n3bdQRbQprJ8C3bFY5X",
  "key27": "2QiYn9vU4XbWgh66oQMZEx7CEuHSdkmpwTjjNk55AEd4dbPGNRgtXhq1eJg2kPYuagCxoTVFPDY6h8KgQqGkbnxt",
  "key28": "5K9JwYpMKAu1qE9GJEmQD9bzD9dKjSQH2VfRic7B4oUU4i9oJk5hyQqv9Fs257RX3jpgVaEWtUvCFUQczdoeLkTn",
  "key29": "5RC38sivf8yBXBhh28RghhhSyogJA8fbJyjjAPo3WswzYYX9ArgjLwSvKG7hantHm5arWsm2qdhKQnBy1gkeN8rR",
  "key30": "38PPAB5huz7YXJSEe3eX5DxArybr23AosSP4nZo9Ac1Whep6VbLJWtD7NEoqjuRAzPSXBeQSzozP1cnao9dQbp3J",
  "key31": "3YrAq69wmLVjce7vwdnRH9rxAukrwWkcH9LeYMKp3k2v1S5zWTNPYf68v61WEQgfTEjniG8TLdzobGTcbvzKEMfr",
  "key32": "4UhATZMFA43jcbGMEeS9y3qez4j1xnm5MP3VypxD1ZctQLaPnLgNtbuGQ8oyzZQj89azb72R8njwfMo69MdW1ehb",
  "key33": "4GttxA1bVjUgtqGXFSbT4dHtn1LW6Qyd5Tcg9rbUkpggn1knMYAsGeyBJpQChEyQbKGVoyH2aoyU7ER71q3AsPkk",
  "key34": "4PKxAErKjmsCGAYVfUFofBrssaiYAkB8h31pxc3XQ4TaxmQrBiVxQRtm2fbbEzKDjQwR2vjfbj7TxgDvUdRaadnf",
  "key35": "L8hyFxzQZmbV3RDHhGfnE674T8aHFFwdMgirj8NPYim6HV5eQLTrjJMB7irdAkfQUiuiRiMBLuFaWkvtuTcmHtk",
  "key36": "5cSHR3QjeoYJLHW86vb1NUgYtWRkBmHBRX2f2w7w2KgGgD2kcP7MXUmUdDiJV9ewcufCFdeZgPHN6NYm6NZGiwHi",
  "key37": "56ERwzYe2EH9H56Yp3aMbRZVxAEnEtXLyGXdtSbBo799VDXP8Jzn5LfZftHSrEoLwEFGiMcoGxqxhddK6sbBSCp2",
  "key38": "22SWVmQPz7sxHzQa3i4uNtCTcPBLFpQcVYMHcEGeutV4h2Zd8feQsSvxw1Yomeq4Ve3JnBrptHse7Y9FcKVtdgU8",
  "key39": "xJGqTEeUepqdoa5DZkCMfYhmdD3bQUjLUFJQd7uuTCPs7uZixTayeCEiQ48uzJo1sDiRbnSyGHXytFMKLnuYQk1",
  "key40": "2hX5m7AGQhCLKWwxFdi7VLnx5QKm72x4bBkQNf3zVMEkMsPZY2AZUdbJ8ydg6WUjnZ5MQy5TbA1ALdhLXbrqpyuz",
  "key41": "4pcGoQ1ndU5xGjf5LxqyZZ5GdBiMU6pfoHmrPH9QUpfKRTb56cQykVZCkaM7ZtQRaPVvZMe8iRyspJSqxbRW7odZ",
  "key42": "WbRebwxCCNZvE3KRfkNKHK8YbnQXTKwuLTW3TMR7ysQNbkuS2btxTRz93smukoKSy7b51zjezN9E5J5thgopWfB",
  "key43": "2PoHxLyKbdCytCsC8n71MiM6FpouYwFUC4wPQ6dtKpM8MotJfz8LvqZSq8kfYape75Azzkmc1MFMAXzJbySTQcC6",
  "key44": "5g6KTcfGcwCY3zPEXj8hPhB9NCiC6A7Ff8Lx5QVMaxSqfDFTXWT9RDaaLdsBQiDjcqzWNgqm2BEiYXcXcMqNB9n1",
  "key45": "5JPrKnP9dEYB9eF9LqNpQGbBchHazH55M8TQ49W1Rc52538XZwBpg5F72qXDt1iYxyk6xddERjYK3g9LJGLCuqdz",
  "key46": "4sGr8MTHExyos4y48CPMfqtQE91WnAStRd75fmHUhWFpAVBcrVJjigKx8pMwnaBVyd5p98gU3nLjVGvHwLkT5XgN",
  "key47": "5bBB3KeAa6K8kdR76ARxznfvP6an8i1LXvkybHmf9K3KMCKuQTA5vgC3Rfwt1qmZfivyfdUyjEUEvN8EQigGRtWE",
  "key48": "3xgxFvHRn5hon2zohVHp7y5mhSSjagfYt8wmAEJJBm1mhTFojyDDwEZHWgxNr77beDEDPy1c9upHRq7m9o468bmB"
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
