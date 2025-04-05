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
    "ahHin1ChY1BJyur393gdpUDshUHF9rMNLbTQyeDNMJiwb2ZkYBUoBWUvwrvAkLap1AADmYWkDNuFiWLFqfZ9c3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDi791oAP1apQti3YcUi4cxhpgS9U3DU3r7cBKuQ4pZmPd9UqWUgLRN4PmA2AJRWQgKpaFZALVRq3nP3j2kPA2n",
  "key1": "45zx579KiQ4qgdi3569jnjrAqvReTQubQbGscZLmh4NEX4Q2zVXmGSyHkM3LvxHcQgkAuhnK1zJbDvz3Gyubot9b",
  "key2": "2WzZo3BqExCmmiZeaCFXp64ngbLzPX2amsC8S1h5VkWtf8YheCGfVzG4DKdJF7izewLmJdB49dxGB4U42vkzyQf7",
  "key3": "41A1XqPWgp92xorwv9D4Rnr4tQtfF1syXj52ZG37Wt2wj2Sv7sAQJwirc1Z9VDsM5KgHZeJBQH7XecDYgJS9hsUX",
  "key4": "4u5pfHVCDCgESyWe52S4M9Cg6UwyPabhKZNjkRukupyLEaFU1r6j1mWpkK3TME1yT53VxdT2r6pMo6mAGfkHvnFm",
  "key5": "nuXByumt3UVkCRC6njGVptEjZQoQ2z4MDatUbWAKgry9eZXiqNsxUqxahDSxojSCVWTiG17L62Sc2iLwezyt9WC",
  "key6": "a6Q99y4Bqr2sH2Z2eJkzLkaWZ5AUQ7Xipys5bajpGGwKrKG5qGoLRXzYZJDt8SG5GbEBLWZAMUZ4X5xJ2zY1QWa",
  "key7": "2jUofrKQumZeCsbUpTnG7icauKL9SmeAqDeA2sinBnD28D6rucJpCcqZFgLpLLPqErCuFuYzqko37YNkKbNCDw9Q",
  "key8": "4bbwfJTnUJ8P9QEP3AcYaAHTiMreQTq84y6yAm7rC2hzJWQMU3UJqgr7tnc3qjWfXrg9KvuGzVKTeUmqcpZXwvp2",
  "key9": "4LtRzmkUPzFFTn1p9RRixvX3ggc4LdCDPvVScjBGHdhSntz1aPXJ2VbVdHrmpLv8DEjLb1HtQHdhrWL9H9KWKoKG",
  "key10": "4TmP7LvaBGPSrYkSGCqtASNqVh5EZ15RJBKYU1EkJbGPQKmyR8vXVGrEpZ6FZ3aayHu12tyqbmhMDwoPGzedk4Hn",
  "key11": "4owpPxfRFwBzLzRZGWQPoMd9FcSzTXkgaT5fWwwKuJA9pMPbV1yAWvRqvSFCGH67TD6Xhc4WhdkWmJ83hJToLvi5",
  "key12": "qpMEL7Jx3v3JJoJoCzusnPsMPPdrBNPKvjx4ioTLu2PGGTNccpyjabdvea5juzyH56YfRfgTNqFQ9oro9GkcWrG",
  "key13": "3vwbWbXa9M9dLtD6hmCbkzx2STnAfFZ7sEZR7kBqqWCsow3xYYEnyZ3Em3LZFFGUeWsUqu2AGBtZQNJScjodZwcL",
  "key14": "6rjoFwMeey63PjnUFcrqPFZGTymyGLeuYAkaQ9gpmypouWFALtxVDh5SrD28MQBKiSR2Av85YB2W35d3JV2weWZ",
  "key15": "5UMuGaTGMaw1LLLrNcYy4rkKHgbXfaSGWfzJcJdexiXr67SKD7cL1j1WHYVa2T19ew7h3bDezirGN5FghmdKVr3Q",
  "key16": "4yjtinMw4EwDxXFMx9XCfK6P9yXSmNNHKpYxdEzbcMzrY8y2gurRa2JTFXVKZNTth1w2vsrKRhiuguKd4dU12aCM",
  "key17": "iSU7VjgWpfjqfNMG8JsVVhjD8HmCN1i2dPVagwG25UYoufZwzRwoSo71ktA1gY75y8odBzdB2hSXtFAKZ4Y4K9C",
  "key18": "61GZwSEQMTNp5SLnNBSWUnbxu4A3EPkjJ9AoqH6osUB5tAWWhbk89k5M51y92AEmzL9MYgriV1yyKq7dzU8fqFuu",
  "key19": "2m6sR4KggduVAnv4JVHk7amAfQbpQ35Sp41T9HHkCh7J4cvvT74ELWLipHQd2UnzRbXPv74UtDpyAe9xLNitvAdH",
  "key20": "58kRMpg1gpu97ypqr3c3ouSVEqBAzoYJD4ChP6pMT2ghi1E1FnxEpiL1t4f3QRe22A6g3mdPsdfpnxkK4uwTf4Gr",
  "key21": "82LVG65SJqaAD9K2vopZJ6osyWn16Cor8Ts5vP8dSW2rZYMZtgY3ydTnNBRDj211HWc6BTDiWXH1Rw3CtbucddJ",
  "key22": "3YhRc7M8xTNSF9NusPYXDTKT32xBDMiAnoV3eYrvntYAVXuN7LYBxvbMkGeX6U6vMa3wDb4u4454Lj4xRY6B8bG1",
  "key23": "5hQzrGzskToBfvToGVPSGQHAeY6ayg1VqzmVyfDKcPYp9EMsU5oPh3UTFKSz8JYnYyVkQuHEdKjjtvLfA6g96sEp",
  "key24": "5GWT4thh5hu2QV3WH7WN9BxiJDhjUkvG5hbCB7hoZBVCRR1LaXcFHuPgTdkg7f57y1xs1jqzou1wAdHXpVfWLGKU",
  "key25": "2BNFevFB5pL5W4fNquQXJ3QgnwLUanph6MRVZ25qw4u1984HC3SNsx1idH46SZ2SsJLKFQZPrmDEA8MLxf9MAVkb",
  "key26": "KugsQfcJnHLGdp4onrFwvGVM8RR5jDQ8H1raS4f6zgMGJ3sEQgKLe8Lp26d1J13xPszxzzVGvfVcqtSeTMcT3Uz",
  "key27": "3VxAr4u63bzJsydgAA9m5Bi81mZXMb1s9Y9rQv2WzsUADN27RUYofcirn7oogu14LSXygRW7H4vG5Tsh7M1Tgbbk",
  "key28": "4np1YrgMzCJEojYqPB231UUKAYZEAuVyT3SuattJopvuJtj4az91TgKbXXtvyWD4gzyttZYCor76p1z75ux7DD5r",
  "key29": "4R1LkdWJcJ4xiByvt8cGVDMvfyMnms7EgXYAxZnStA36FAytvF3qDGH1qhYxbVyHtfoA12pHHK1qwBvdo47cGeNX",
  "key30": "3yG4dUkgpwE51qdP6pns6vLiUm4gDfAHMK4HFw6DyECEj9SfKFNjDDhc6GDJs3UwThYkKvkrWEiMRsfr4d7YTGvx",
  "key31": "2xoBP5fbei6eqQ241bPGBwXFbN3XPudAony7LjcSbKktAJjpiitYW2AEgmxwA9s8pN1YN2je64MaXge5a5dK7ekV",
  "key32": "2uNCzZxkqK3J6YdM5pMJCLYipepXGHR4ngUv8z1taJ3THtqVbs4gd6iBueFD6MRxpwNL5S2Kemb8wfCjeB9kN2vE",
  "key33": "5bMs7jjg2rShv7xZMS5bUq4hHbCroJo3ZsqcihK27wMY1HQdoXBeitYjcVN83q29dx9WLhUh77tVwwq6rJb3qNv9",
  "key34": "2CUBsXo8Ep56yFrQVZan54xogc9PS6AsfkYTtFrxBLcgGrmGT6gowq3FpBT8M4haDnW8T4KJgNb3mMHWoVuJwq1d",
  "key35": "3ubWYUL8SKuMszGf6S16S4isYZEBw54NphLzTx3qqCQmxgjYyFGBNGwzs4WA7G6SHEUmS57UnNe3GYhLyiz4Xo6x",
  "key36": "2TwwyfzjBEtge5pMLiKXTBDXXymdccuqn12h8zLV1VA6NdetMMSNHDFcUGyHt1xm7smbC7DoJAWYpQWuacTwedtL",
  "key37": "25qhZ6bbx9RgGxk5dNGWqVCxdycF2cyQCkMNCtApHCzNvLybLn214mUErLYwoHQfqtNreQ5KCCPrbXtvz6yQwy8n",
  "key38": "4Y7HpdqgdWHjMDtyyZnFtBzhVnqDtfzdHF9xmQyHUEC8373YJkjqSALhAwUBBPvJbEcupxv8d9WT6SWmWekF4BkS",
  "key39": "37aRgsNBdQhacQPeUoBrnbAT1EsDxYLAhXSvz32bsGMZxUJeaYQ1NbeksWyAKRFNk6xFK8ZkskJGkTBYfwLpAs8K",
  "key40": "38pr8x55kiHKiHt8jw1gnAESHSCcYz9obvrC2a8TmbpCzU65ykkUZ5aDaoVUjoaay4ziwvFaqaGhziiRsqnUXXEB",
  "key41": "5S7RDEhNnZeVviwwLX3stqJPAWPAUvTcv23FLo1WkXddz42Qqayn5rs8TFa62nBSAuar1E85B6tXB2RqnL9kgqsc",
  "key42": "22gggV3qt2J1dtVGcTRv4PAaJ2aPmcoMYB8wdWfVf7vGFnN5kCXwHuPh3Qf1NoZKEF2BVU6GNCZf3bKKRKHem31G",
  "key43": "4KcW8GajEiQMwduktTDvuzyXQ47cLpHGf1uZnZEHmci35Hq6i8rdgMe8inmws7TKpch6fdJLgD9h6v4cyiRNRViQ",
  "key44": "3e3na7p4GmvE8pfnL74drTJUWqGpcDfu53tWNxcA6mePS6CjRdnq5oAuCTMPEzxrtZCcv9bzHvai3n2CzGM5as99",
  "key45": "4jf7ungXpjeCBct8VjdG2vXkot4ptA6u1daoB4WQtWBVvViW7PCQsDrXKms6PSS44AR9x3VroMjuNV7n1M8G5U31"
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
