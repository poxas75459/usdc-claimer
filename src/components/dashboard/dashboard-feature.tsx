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
    "2P2DauAza4J2gDZsVjcKCjZ496qC4AdSjLJA2BD6KCu1KtDF6UoAMwmS956TeMzUzVnvginbgKnERvU3kUfiqQiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbWpAUQdzB3oRYXTbKW57yeTvzSZQMpPduuToXLRqDmC2NGAsN7vTLE7E1W52XdzhpmmqUmtQw1Bht3UXijSxKY",
  "key1": "4gU5ajaumRbckDGSeWeMvx6tdr1AJFbmjhDMpnbLnZKMXmJ7ZyHmC41ioyQVs58RvPhN9RoNgs1ZedyuMHC9dFbb",
  "key2": "5T9dCTnFUYPZZ5f5kbV4dxgjmvog2E67zfcLfgPTnUHhmVTEH8SNjCJwkTPHMsn77q2jPYTprqwgnisXvh4tQmQM",
  "key3": "UYgAbhwXCkmhhFaa8n9oRwdEjEmYxwwtL9EmwYgE8eMBTSpV12NwNrCzPPAGy6dSiK3oGs7psvWvfyDtR6UR48P",
  "key4": "4sSJJkBX7WR2bPY4Qyer4tCBcusKRxe4rHeibPvwrH4aDrtC2E61hSL28igaoeZ8XGaDRePYS2gCDyKh7DTRunoX",
  "key5": "5YnceXQTUTieFUSG2FQqRLFcAZcmwCKjNT4Hsp8j4LnfnVjBuT1LWwvBLi9K2pEDa4fz9c9w3cqzJ8qhnkaY7pci",
  "key6": "3npQTnafLLcNgEHJjsWgC2jiJqaQcmUqqbGmea2V7LgDVDxdwJcW1zmv785nmVcdC5oeh9E8a29rQ5tzs7eknKbS",
  "key7": "3hmvmYSJByyYzr1KpexBj1yzh6PCVATfsXi7DVtFwY4uxcqxYxLfTEsTYz2TxtxU8zXW8JsVbr6DaFFPycqaNByG",
  "key8": "czim51dAHdsUGqAGdjZpyVt9UFLciJxWwbppGmfmGuFtg8ZBn3SQZXjP5PPSMkKVqC8rvxM4L8o7CBP1ttCaH2U",
  "key9": "3KbewGyUxLHwwuAQq24RxKhtN1XW245H1oXpCP5TazHAgvmeBsspd7czKKDyeiKyDRaWq2Ssvbt1YQya5PNkA85c",
  "key10": "2CjF7oUNGWpcyUkws436moHVTS2WJCes82bq2BPhcgtDvSNPamWAkwQGX31f91pDrdotEegT7bvL8ZAc3toogfVk",
  "key11": "61uzmRiGZuPzs8A9YZ48r13yJKinXjv75aTtzthZXQH9FvQB9g2owa9nAb6AhkA8zMi4sBsgBqmsDi7MzTEaTvRV",
  "key12": "5SMYFAaeoo5PpnUcW9EpQMMwMjfuXoQuW5k7amfh6MbbGxhkP5YPtDYwjpAEJoaLCHy3W1dJj6rKJQMXWz3QEg4Y",
  "key13": "3tNvQX5UXU7esivXEQHJYVwutwwmrB2jAybF8jPGgH56RLGWUZC5ufqiLRMDvHwxnDRnANokzHcc8qeBVsRd2zz3",
  "key14": "4GxY2hEzQnPbPuqTDUb6enVgRV6Eo3Qp9nXv74ioix19zHAXMPj9dL8y78BqTjW9V1uRUrV8RtLrnWCaP8D5rrNL",
  "key15": "ekSkxutUxnJBkn15wqWA5iw4Sfhrd6Fq9XSY2prxKSeHeH7nK4cregoCpUduZJC1ZJbahzNqVseHtZPfHaypK5q",
  "key16": "4CwyKwjoLnaUvuRJ8FG8Lm2qfdDCAiYFt6pButiGGfaYG8k1acvi198p5NXt59GK3uRs7Z1bhiuxkVveZ1g7mmod",
  "key17": "3HY8FoRwGNdu7d1jRM3zeDqHzsi3ytT8bDN85XpvgYMTRFWZLFtyiRjm7kYubsqhFDtsuzGwfXHDYw2KmBx7wN5u",
  "key18": "F4mE7AEvqCZrNCwGCc4vZyAJr1ZaJeAktq8Xqqqa7TGoDHk8JbSJj9QZnk3NWxWcK8zTYvKGRdfSZ3FKQAS2DQ8",
  "key19": "i6tBp2RAE8mBPjHVVFYbuv2RfeX4MY7inoFBJE1QXH6w2kEWC38k6V4KSGPRHGhvo52ieMTTcdaiB4HRLtmt5Kt",
  "key20": "52X7jRKeTc56WCuuAK8YUJkuBsdWjGNKPFTuqBDH2FkVfZCNyfkK2ncHhkvzXhAJEin11coMDxQ7oXFQMBAiWBGd",
  "key21": "61kHARUuYJxw8bFGB4eBYWYFHX6L9wBDoxsB5fbWrAtriodN6MMXK7ryD3nCGCdvmbcDo252QFZDPaeHWw4Ducwn",
  "key22": "4ZqzPBeRNRsvKLYR8pMsM8QGN77Aa32Nh92H4Yg2xMUZGf61TqoyhTE7r138dauJ3U3wmc47LUumFmdk6SEL1M37",
  "key23": "3QbEQyATt88FWyisdm9jsavJE2TmFX72wjU3753y9GecuEt4YHcxWxPQnvYHuur6egnQP1b8oMtF9wJQ8wmMj2Ka",
  "key24": "2FmFFMUfaMJy7YjZe9ov1nyZgNq7psHswUiU4Upy61ZGEKTj964njaE6z2jEYrr9ZozJ69ByvDFZhtRhRXUAGGz7",
  "key25": "2ggwPTSMBQWo4kbkPjNNG6En9Rgqrt1tX9fwderJjyxMgTHqcd1tMhZ3Q3HADiWwECBz3nTtB54o61QAePbGDtmU",
  "key26": "RJf6xwk4ivepA8VGndsAa6SKdjXuLtTS3XrwgVHXRqiZgNM9ATSZgX4DsquTi6kAfsKp5kTjBDenWrHAfHDAuUY",
  "key27": "5FLoTRGHQbdLpCSVcRs8NEVfCD7TdTTxdgviXrvQXc7moxLymhHt5c49hPdznb1jbe51YMbKitV6VVZRqnjy1N14",
  "key28": "4Y8WM1BwcfiUSaMctJ9ofwNp3TCyEiZexTzo7nJRKnUs4vDhycnkJhS3CTx9HYd39zZVcFQ35Vj2Qj1Xq81vjHk5",
  "key29": "6574otxVRNFhhARE38hnWSpXeCFygg4BRgaNpmdXMoKTrAtgrnzEUNSqeXjAHZmisfMPtr7uFtCKVe7kCTAzqRWb",
  "key30": "3wFYC1DJNkaKdJ2qdex2hYm6Wtya554o5EfMy6CqBAK7SRFe9CoeNCkmyRn4D8barq4b6ccRc8jY2CL4JMPdx8jG",
  "key31": "2T5uTZ1RgBTKvFZkDiPXm1yZC2DdVBzCtUVeYsXdi2MbTQCmziV38CxpnTRh3PnyQpDiPAoJ1gstccMSzxAHiSh8",
  "key32": "3Vp7AMZKQjgbMQX3yk23junjHworcrszKYc1w9XU7AinLkm6XkP2m8k4uPdfiNmHDZ7CVqR1EmJTZbAizyMRitTD",
  "key33": "4PbU4xM4SVjGZR5N2S22GH1SxTbonWCuzVtn99hZAZpZVWo3fH3MKYSQf9Fs5Wqy8ratYi6ZqMiRNfVCvkfST2oy",
  "key34": "3pceW3enaf6up9JMRmLscLG8CqGQo1sbUmhac6VfDVFtKBRa3SigoCdz2q9RW4a2aDYgE5XKgGpxr57wbbPthS1R",
  "key35": "2ztdpFqvpd42Z37LLYswPoDULv1PE6kW4hQDoSFfomzVh2mhb8EoejbuxjDXsfBwYBVFHvZ69ucmd3tp4xgBE66x",
  "key36": "5fKzathgCqsmSvc3BZq6tHp5uLdpNHtLjgWznTFAuHTX7oWTgs51UuxvyqrapSZswMvUBNeUcoUXBwgSWNAiEqQx",
  "key37": "59xcuZ3Wg5saiWHxYzkaGHTQ1QYBhR24f4VFoLByjxqAoJu1fMPDYCi5zGAh1ZMx8UDSZXAinuvnveWykRkwYbae",
  "key38": "3qFDeLXrGPX9WmigwR9igzALUveS7nVA42q8mqKVfxtDUoTmyp7s5fCQrUfxUrQH4qXWVQ7WqzCjTvmqD3tEax68",
  "key39": "4RH8EbDZ9mA3JcYyF1FVsMbVTXCYh9YAy3NGJ6a7yrrkPzc3RLqDqRNmnfaFPp9pkcgBJDWeVexJ3AxX1QN8Z1mV",
  "key40": "34eTkhonCVz4RgeBiBZkrVkUVgFtGx6WB8poohX3jCk4hc4gYzyAc9Veg9AQuu1LvWneAWTbLB9ZcRKnQ5T7jGM2",
  "key41": "crheEzNZCf8EiKsUwZ2tbQne6qmomGwPgBS9mdaUjYeeRrSR7TvDRoHRPoAvkM2KoRCHPqXTLAye5TW7bdreTjq",
  "key42": "5c5beojrUTpXQfN48LMyFnfyQRtjPoYXNFa6N4BEGYebAjT8RdvPJWhhm2ZkMGLC812h4FvkdSf625dD9Q23QsQP",
  "key43": "29y646XMqbpd1LZVuuvsqPUYuCq3H5eqCLakkpS88e4G58wW3JdBqDXwUM7CNN9JoUiPjWi21vUhcKd389rT4eAr",
  "key44": "4ZJ6jSamwhPLnersTNHiNgCXgWi3CotiHYLQyDpk3SyzrkwNFiFhZFdkgFtFNwQS862gfUk4rVwDnRQ9dui1TSCL",
  "key45": "2qjwk2WibD8cfZt3YfxLxNhWr8nDBCADFBwRoxv17Cc2Gra1hDG4oS5X6iLBcD8kVSY186qJ3RdwpPYsjNGPY8jw",
  "key46": "35fozpAfyjprNpBzqY6qY5TjuCshECC1VALU4ZXobq5ePEQp2YaE6om1oGRU22g663BxqRGskdhKqMUaUUEebM7N",
  "key47": "3NDE7gFhwmy2UAhBCSuzAB2pKiQhrSv4AkqoNpQewdu6U5zEC1BQtjwaKMsLjLAZt4EPnEykmMKLD3s6u6EzFsQT",
  "key48": "ePeaBi6e76NmMt9YWYM9DtzLrxpKpY4rvQ8bupjqJQ6LnfogpvZbf6pZE2ZU8aTXUEk89hP4ytqimWiQ4CqZNpe",
  "key49": "4Y2C3bnNdcMAPGTZy3PdQ62Vpw4APJvuYYBV7uto7hmEPaTq4JgAvDo9XKBi1tmJ1yAUncU5HebqCtiUjuK5n1N6"
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
