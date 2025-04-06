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
    "5aDEtrxpT7suirVph8wJMsas1iRtNqbZU8tLwDZN7m2Q5e3oeSHLyq3KYph6neoAJ2WzsGNgyxDsDs4HbZnG9pSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVRMKsxxw6XoyrV8L3gv8eoEL1ibtyuGsnSjP4zWeBFdLjC3YNdN7rEtS9LkPB6Wyjrk1CvKfYj26c5ykHKFq6j",
  "key1": "CZrRTkeu4NrZyudNPSiKNvLd3HNpBeA11y2QSJXLZqXKD532ytycJbBqZbdPDox4TJTF1skDk1j7uQoYKNw3tgg",
  "key2": "57aNwkwCmriHJkwHt9HgDJnuhTmVMJpVVGG4QX3G4BwQa3zERv8Bi5Pf9kUbMMTyXWWarR8zhsfot7yWLhsD7kXV",
  "key3": "38P17N1RQQ714nsGgxNSLHLwa7yjRchg61MUJgUJiPdiqdRoK1GFferSWg74tVFzgcXiQr1DPT79WHhk56sJ3ezM",
  "key4": "5hQLHqNhrYhXMjugs3nSoHNEQjPJFE8rn6qEA1cubUxo77mKwjXTXA1Je37dAdoNqKkqakRwF4f8EE7Y7sHjYMTX",
  "key5": "2TWZgvarjKh7S6H9JDXvgWRqCMfMYnX6SK8kgU8GdmP5HCM38JxVVpzL1U4vobxHCrFzDsU2N9yM58w4iXSfe57o",
  "key6": "7s3tfwCG1DBJD2RpRfABRAD7bRvbHyCCDqc542A4u3UENNqJEXNFuaC97n9rpoYB8wuVJCyW7GyrX23a9qCS8BZ",
  "key7": "vTN295BtjrCym6NoDiRf9K4GvzgMtqC7zapvZwite5oSB9YCp7yR7fsAT7yrtCBUa1HNWMWyxe7oiGnFGEymHNu",
  "key8": "5AKV8QUkqHvHRUszG2t9omobWZE9Thq8urzEtD1a8iHVRBKCQCErcRPvRhh86NKfm4iUBLM3qKh9s6XWwFpDHmU4",
  "key9": "4nYW41XQHY6xZUgy2pL21bUBbSwhHy5kh95iF9rBZnqKmivAgNNoqxctdjVVmkhgaDwWCTivAD6iswRwXTHu6G3M",
  "key10": "64HYui3DVuGEsuviwzjPbFy7VJEgFamyYj6PFu3oxWVazR4YYJbbRiWB8yAVTbJu3eUscTBciM6uSBso2VQUoFi7",
  "key11": "5pD5Soat8yhgYK2kReSbHyM4YpwjggJ8zLEevnK9TizWiqiFiremRWXCXYSr5BaynS6ByRYSAZEiKpfUMv2s9Hgq",
  "key12": "5xHW8xrDnyjMndkXwzWabGKXWJ3PgMTNPhdATcM82vkRdmp88qmg74PtgR5wmZ19TH1FzFCGr35s84nBG5EYnk5F",
  "key13": "2Xv5c5iZSBBLKKdL3kvrsVAfDQF3eU1YvUfDutsB4kcEkm5Za3KJaLYZ2REZJ3rpYjcxhjC65pbn7p2AYY6V9k3T",
  "key14": "3BWy8wQ68695fPkbkizZRHR3SKyEaUDowdK8VqE36Y9JMACbE3UCEbAfq5U93ouSoZZEpm827grmq913fryD74W1",
  "key15": "2BrLL1HZiKtyNzdq5oVc2QUYdVfXXAinoUJ7GeqUjRNn6UMULeJQTAmS8rdKmAuzwkFfYUEYcQmMXD23au5r3RSZ",
  "key16": "2kgdfVhDFBMYHvTUvo3eXe42TwLTyxdc6hjXXoXysPNsxWykjuQJV4ntr8CRRijZtsraZqN2fzqZUAiXZj7CDbMs",
  "key17": "49qjYiJN722CTjYgwLvbVNurnK8UcixiZda3q519PrqaJHJg4jiBEXAUZgE96bXM82LLk8HC9s3uS1D7pgYR6UAz",
  "key18": "UXTsvVRCZCNAyozyXbnr3s3Q8f9HA156bSwnNcUoRgRfbtHpU7rPotWhzVrKhVbdZBqrqpmoLyWPBd5M4XAt6Wb",
  "key19": "5A8Yu3UUpCFmYQsVsk3wrm7eE1fYBz33hXcptyQaosdXWdwrsHbarByuqicjWbJfWGrgwonFtArofS1WfNjwVqTk",
  "key20": "2df8jHs3Ph6GH4BGUexucAq1BcYbdHjanP4EeQAYxLj225JSqZjuv5UkdJGeVg9jUrjoTNfxBEJiKRnTM2ZpdAGM",
  "key21": "66RaHKcFhu4YsXGpc9fv3dkZfAv96NzmXqKHUsrEAa9fuAWdjZUE7a33e4sfkjDBcCpR6RNNobEuPobgcHk1Xqtj",
  "key22": "4dxS4bauGZhRm5q26NYjtzPKi1HCHnbXM2AcctycdpaN2FHsRnVZAdK8fnXaNRKEUKqQE4MugxvULRVa39HBcFVi",
  "key23": "3mAvFeAQU7Z4KmRS6j3N6QANbpK49LLw7yzorZCoz89yHvvqoHoB2HNHkVNv9enCbV13UvAS15ZELA16FdU32sgy",
  "key24": "3xio8qtkG4qCzqru7P1FgS4rDWBGkS8s9umheZ1v4uoqPj1uukAQCQBVXXYLjU28cHLKsK3LVyXWSitJzjRkmrHZ",
  "key25": "2Y1DnFduvpxSSq1PbPJZHSnW1xQXh72UnMUK6CYk6MwHRYtiA4pEZehK1Vy1cPp4R6Zr28EoMuiVrDKMC1Q1ajT1",
  "key26": "5nMd2CoeQAhben9maxhrvwg8iZzzDc4VhzWDPFU7cHsYFVy6yhgbjDbayHxwQZKUiDF2F9Ncyp545EGNjzKnMHcV",
  "key27": "vvqPiXmCjdfRFbH2Q847RgdZyURGdWPD8xfXNcDe4PrQRwpg1P8PzAHJCJ25J4RszuQunLTfrgn5nAVsLNMBDav",
  "key28": "3Um3iT8AnU82AUhQSQbere5Vqeyb4VBshfjxwakQzBRwYwLWHMH2jqkFMPjBdJgQbzTGQ2CbELT58YhMx22c7xgx",
  "key29": "nbvTVuFhvP8rm6dQ1p46xeiv4df4iCzufTguaakmRCrwfS7gpWfdHXSqKHBRCq8yZgBrXEiHcnHa7R1HQcDKQbs",
  "key30": "61EEuxj4pNKa3ixh4Jwe7QzaReSqRjSnaChcZHnE2g3FikjvMYvuFuT5WnqWF4VEVLiKFyqgg4eGCmRUv4TwWnPn",
  "key31": "5YVdbbYtPGAB4uHxk6GDSK9e5W6sgRYdu52uXhes2SxtLxdvNe4twFteUfX6ZUrrNiPvpjyTa4Bm7cECyQhxgAwS",
  "key32": "4ss7KuSnMHu3joep9HczWph9nTvEf6FAu292SAJXi1sgikAZX2KcW8m7LEVNqg67pJ6RntNaiTqdDBcLcJ89Q6z6",
  "key33": "3xLBkswxJTdxr2n6hASramXCZrG5TMcxgB9kBnPAsZ2MiCyyTFAMmhP1GZGtdMT7WNTxsDHE8bQ3Rj6kdgU7RrGo",
  "key34": "2UuuVL8RCC8gVcfVgjb9nLsqPNvszXzYAzbtz8ZWzUjZF3KGEjXR5pvaiXppPuzC5b7v2eNdAAThZownaEh3pBmZ",
  "key35": "5AFStZ2QExncKJnyzGBbk1T5JQz4dSdQAHmBx4HbHPvEfYQefeNAfCQgUp1Re1caRUt3oX8YnakYAhfiGb3G933n",
  "key36": "58Rnm59f4a7T3BLvqF2aEzn1amW5v4KmvqnQTHq93A1oA83PboTkedq4egGwetmZqycAyKJX2ifDnFRvrpoJtgSM",
  "key37": "iSjcq4aWEgKkdm8pv6N4VsS1WVTiUp6sL97YPbusdWd15odZBUT32tLJpdLxx2MGxw2hg8FK5CCkwNiLsDVCNyV",
  "key38": "3Njhs9DjZnrEQY75r1uwTZDk6KLoem4wWrv94nRWf4r7hJZQrBg2EE9WJTKN4fLbuonsdamYubjVMFdnSqeZ58Uh",
  "key39": "2cGWgyUcrtoSGVxHVBQZQxWE16rR5YSW83bpCbt35nMHo6UjRSiQtjHpbnWScPysdVdDAc5drbJMXeGwSXwT1bxb",
  "key40": "Epgjnx6FCro4YxDhXfH8YUL65BhyZb62TaoVYe4FLtTVY9caAHcevxPuzzzAS11pWKtdjmswHGRfY1TqrqbmJSG",
  "key41": "5KFUfn4Acv2CB6iyc5LvdUhQE1T66hQuFYDH3MpXStYdPAcJSdVdVsFM2nYYV2a29wTfagEDM82K73ad6oYsuL6Z",
  "key42": "DbRUQVE6uoFz7mv89XAgNvUsSqNnEAxk4TCVDhZSPSCDktXVMVN8mTohLxpyiD93gxksAqA6ZwnLyzwBrMVsaWE",
  "key43": "213iBbWuLZbjirSBQ5PFX2NUiWvvEbS9V46PKF1p6QUmtJZR5R22eFcr5VT3iajfyDK9hCZ6iTnDDSQiNSTv558D",
  "key44": "3NVcnYyCRT4XiCgq9BptNCDTAho8AbzVGDdGkoEGTYfM16FF1ihfcjZAmqjkVZAF62PRQwTMF6YRich1yMNkzx1P",
  "key45": "4r7tycJuf6U55bx1rVVKvSJoGHPY9BopC6vHHynTSM4EbU5aijjgRK4jNN1cX8YrxnEisRNLqwgRV8BknAmiTqAB",
  "key46": "2yoSARFHkr8T1xfXKrtSVyPCtDfiuT8CiZ3rTvChaqgR1YdRPq9Ke6YPJbAZhX8n5iCkCjPTpgVSU9Fmz3BX6nin",
  "key47": "5bFv5o3pNbiUy9faBbLk19n3PYV8vJN9WJKPSmKWu3ZTzzxivyY5QgNXMxk8jtDjJoTdyE15wMmq2vHyqjPcpRhS",
  "key48": "2sHeeC9Drbr6hGEaupBXYKckVCbn11BbNxhjZJkxGLmnxnnBjfMHKCS8zjPTZGD3edU2mtD1xWcKXgrPdPaTAcH9"
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
