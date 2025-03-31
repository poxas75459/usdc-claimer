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
    "4tCnNzn5yUNT7tL6dY1oWRGcfA8CKZZbEovMUZJMV87bqhety3Rk5WHDPq9vCLZzaNEPdvP9pkQjTANfA82hnWLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZgWFS1rQBys9uptj3AC25bJzrXoSUqRJuV6kyWaeBWaJ1dHXUvgmKQND2Pq3f5gBDKagpNpuyRBVRwHqdnbhjn",
  "key1": "996JUYM7h6mh2EazjmWHM8qSuAjx58ztzmGVhURqASo6xBcCwFWzUu3oG5oGNrLeBSj9bkjB1M1t5n2sQyjvyCx",
  "key2": "CaDEHh8mHSJjrZqmWpx49BG8aKboH9Eftw6J43QWo54qwT11mRXpBrMuYEMPCqmyasYHzWnfHpWo5GKaEHvBiKd",
  "key3": "2eyD5Zinzt7HpWFm25EkEtSMkTNZXa94aKtc5HWDuzNbDWptazD2Mk9c5mb8RezeWUPcbWsw7oxPymLzfdU7urmQ",
  "key4": "4qzAVo3EE7gDaRBZBubFJDH8j8bJCJNc5DMkKcCNsyKzejJeDP6EZnxJPDJCAoPhWjjDXTMKX79E8CyJBMoojUTn",
  "key5": "2rd1gpWS6kLVrbGQ1qCMREN5EqxTzF517qb9NmVquMPBvidohV5yMxa31tGpTEqDD4QcKGVeTY3dJiKyc27bBq46",
  "key6": "Fhq4AaGpY4yhh7osxQeYnpQw8kqpHnTWaKLxFeg1aDmaK8rs9uXdmx1Wh1A1ZAaxXBoJn4BTnpuL1ehUS2Sx1T1",
  "key7": "4k7DiZHNsSZxQKZYJjmUbwao5qeC99TMf3NiiNwja2qZainrGNpNiw2V2ta8DPthMJyvGPHTn6NQsiUiFfUE9twB",
  "key8": "3G6hAYFiYXtytkWQd8qu97ZZFjd5LTxVtiCgJePwkzHPQgFwVketnUGFhkdkpLntStnjMC3n7ArTjHhyxFH9zsfv",
  "key9": "2JQEpnsR6GqdgYUUCgPRuXnwwHzy6xPqvA3xSXPfHKmFVooguvca8pFgRqn6u3o3mzSp87keWdNeU6yGhbnG422E",
  "key10": "3LQJDbQLs76pymh6t5iYPXkWopD9DJABwTUeU47CAHyrJDLLXnUZ7TTbAPYu3fQdU73Lcph5V9ymGSGsQhP6H9oG",
  "key11": "38z9o8xhq1c17NWxE8R78bhvzQUQc32ait3GCQ5HYQFMEgLDU22uWVmRY7vfedny685SAeZ74WDHuGzgRFwnvQoq",
  "key12": "5D5Z1yu44XePmfJJUSfjHtKXbtTsnV65BDepfTLv1yyJJ6MGjFvgi5BsQJpp4yDzeM6ufdvhntDfkCyXos4AVqfP",
  "key13": "3FttSq1rRtzsRUEnUFXrgznMQ77gfUA3xXUJdmb8UMEAQ8xJYYSyg1BE42jNxRBVWiNDcXTr8fBp9JRweKu4j5vH",
  "key14": "3FFkJLPYaS7NhGinwzYxPEYt8UJ39VTQFCSHfA378bNYcY7NW1RB1C2PaKDG4vnwVqcRE2NR47TPq7aCqTgddvBB",
  "key15": "3Q7qGDaAptCge9xUAegDaZToCxbP5KZRGp8HJPciLDLDmc1cyHNs4zUv1emAYm7aeEQwuc6cL3DkHW9tsWBY9S5B",
  "key16": "5dBLDsHnYsBVSL43zrMTCcEh9L55Ecpt757eKrCmHT1MPffqzvbuDQ8G54M4anigmMkTEwVGBTR5WUFFnp9ye7QF",
  "key17": "3fbRrFtPGabGpHch95WHDKMoLLjqvgYBYWDBaraKKhAMTbR2P7wBp33oifmy5BYZoujVkNPk4sHztELCarq3SdHW",
  "key18": "51Yk17QpAyA54VaDcW1qKZSCBHbkg1fgu54zBGZ4erdjfaKM5p2NqHuaVdtqKYv37gtnJmmv1GBUq8ZvWUssr5u1",
  "key19": "4S7999p1jMhwz5kvZPeRroTmZVrUMXeNretMGjRLtDnthEuBUMyor9ntwz5y1jsjrcGrD5Tc3hWPwWegiAPKimPW",
  "key20": "44dLsXKJprYWvxMcwQrU4xYxGLkCXGKUaDGJUKPa9BZEkzKJjrY8XncoUTEpqGuhJPqMZ9wHbRheHXLgbzeePoin",
  "key21": "3QQn96BRbpjrwwbnQRFuvLoKL3je9tdYdvwpZv4GejzXbWfcrKxfXbZiXufJaCHJapepERzDXysDjLfT4tyuHwcE",
  "key22": "49PyappyGP5Ms6A5qm5qYCm24BJnEF13qoZBTXKQZ5eAgmdkwpsxCaix3ac3xh386P6toRnRGr6GTahfHwHLF42Q",
  "key23": "4rCbRYGRaJvWZZE1MeK6EEX6bAWHuw4misCFr7CJNAbCk9Va47wJB49dfPPVfbAWKzzkc6Qe82u8FFKA8KY8eHif",
  "key24": "3xsbspMETn9kRySE2UBBDiwM5J2uepvRRM6FaNFVgxXpNV7NdVgVgHJznFXYo8fvMSKEX3xUa4Giowicz2pjJLFC",
  "key25": "RbMsNZeydA4aRpEcyK57u5tt7Dpr9ndwuLkSirmVMyWr5Nakx8JFoNahLv8L3pNSW1W6rbuzKPXkCsEU6TtfaB9",
  "key26": "4WuDJfxAwvGbFdMNJ8dBNDZPmSSLFwE6WLVCpVswREtWp9kBW6DSJR5tyQu5gpn6YLAuEzF8PMBLV3YN3V1Q8vV5",
  "key27": "7J5VjndZBegVCVwmfSxij6uMLtiAmekgtkQ4jYUSWTNGLnTatVBAbEjyojVg3ijY9j1AhdJDqKcgJ6jZNmoe1XW",
  "key28": "3M1K5th5mddcpHF1bpqY39qQfMxEWPu1X8GELWUt4PRHK4XcErxLLFXWF4vjR8jMh337cJGJaxiJqXDmPdLt6BER",
  "key29": "3imxg66f6KDu2xX1cbs3QhWjuDvbyXpkohAjA9ZmgV9MkTZTkAisoKanMBsBm9tQojFAbSEQeEbzuhodk12fqGDV",
  "key30": "5GRdtgMMsNpShcQebV8TjbDhSnd6vpQVhNXVcoV8N9bdv3noB7YW6LwZgQUptGcgCxS7PmyLBgp8u6uva8gB1gJX",
  "key31": "5uCnEj15jrz3Pgvj5eJh8CZ6uCJuqHuhixVTzoxNPrDYXJi3xRTkcF2g9rLaocNtVMgRmGrDVomeVuTLJjoeSqBX",
  "key32": "3JTekNnmR8gG5akgH1FbQf3C7iaUxfDCBj4w5L51h6fschmWP95ZYAXF6Wpp8K8x6DskcF9nur5wv1nBUnS12kvV",
  "key33": "5AbDJcH2RWg3KjHKHVXwv7pbWNxc9bzbzcFoaYzxJJs63KLhe6Cp5rZ4ME7hYqc99GTwrA9mv2QnwaebXgoQgLYf",
  "key34": "3tN5S7BhuZvDh7efWxSYFYDqjzfPBdta669uMxcNGcR6eJyDNyAVhFkrriAtWDBHqCS2JP3HK2uiFBzUqcrsQEHF",
  "key35": "2KwwG3xRq25pwoDg9FgSCfeQomwNiVXR7as18q9mLASZWsz7UY8VZEzjdyeWk8rzAP4FRrPwwGu4pTH41dZTVP8Q",
  "key36": "5izfZfcvUCdP52vMV3BWvz9TemCNBVBbCEaFVLpHc1MZpG5mBo39BLyRU5Tb9ssMEeDDDptrYcVXqeLUMyDUCGCQ",
  "key37": "2daRysRR3yRECA4u1o9AbjBKSJTuhrq1oKpSJb6pxqFRxS1Cc2oD6juSPoFDuS9skAQSvB3dWXMKkjJLtooB5HRa",
  "key38": "34JdywaF3MzmoXWCCA58rDt5WY64Mz5HcDE6q6mzYSF4yMGTBrSpy9RQAuzWq4tsTdmyF9tqb2LwYH2QAcRcdeWd",
  "key39": "5YE3CVK8TYsXPFeMPPX3pvFTE161USB6GD2N4vPtYRKbV75uUntSwznRMV9kURZ72ss11gckFXHMJEc74WZktdQ3",
  "key40": "4n74XiiVDfGLSwmPg1Y3LmHxw8mouqpKHYpi1s7ZYv6TN8kZ5udBxTJiCwoaJVjeFYT8zZoBdf5JYy2MfBaMiv65",
  "key41": "5qhNr6qjQVz7AgSmgc2AR4fsYcRAbF3DrVEZUcMPQ1Eij8s4wu5YCYHeYBtXj8iczwT6yfMvEJ8xLe5gBKNALXkC",
  "key42": "3CJw1kifxo7EePRjB9pmTHZ1NoWgWGoMcfKPBrzvHFniziJdgCPT59pSxdzQRwf4cE87eL317S1n7wtieuCz3Vyj",
  "key43": "3gL7Lkb6ju9yR8YFofZbYC5UV1D3q91VoZCXiWM4o9eL7wEm85HGCF952F5yctv97qiW8LPk5J3qiFX3KiAVD1G1",
  "key44": "47TwFvjmif3dMHTURJDARYTBELmTqwjfKb8SPQJ91w9Lcwtegt3KSZ8h5hGEtZYqt4dnfNw9Y4KCDh4HzBLDhNVH",
  "key45": "LLVB9H3MZknrEHS9P11MhL7i4bNuWrB9rhFYCdMVBpi17XNGPZL2hyDXsSoJy9TNiyqz7yKU7Qb8vokrBba49qV",
  "key46": "2iqNBwkcLSg1FshX3txuvfja9KJnK9nWjFn755frvemXakdxwj2jE51Dki7UnBYB4hHApeLof5Mr8Y1Us1fnKgMR",
  "key47": "32s67Tk9qPqNBm5KeYzGiVyfPCDXn2RD7A2TUgo2Pnav8xp93HnABuECA2ZWYnMPf6bsdf9pBoixajSDrATBg3tw"
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
