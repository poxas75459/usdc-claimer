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
    "4ExEfH4MH6Saota3bNv9qhLuP3woq1JiPjvE1W9ehodmq7GKsAdxqHcUe7GmbSohgvLpoKUiUgBN3KRWoKfk8iXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UANzQ6Yq4pVc86p1pkLdhh47nyqQdakvaoQFFt1i75pCd3CjaSnfB332T4hJzrWLZsVa5P6cSAn9XWft3aKVM2H",
  "key1": "2mgbjgnMnMPQ7hjLjR9vRcvpixqwZuVx8Yx19y8BZUu4iZynm3RB23W8Uc3nSwCVamLF2FSHXwEu1eyg7j8gbkLx",
  "key2": "8cFoWKH1i9pwS3d59ZRdb3vbQGHrKwqYgCzhtGfFxgKUsRxf7HmPKkxrDsvdJTDp14FF9MdqHnMDJrc7WkwiRpf",
  "key3": "2V2vExKJjXzL3e1rYvaaX48E9NMYnukf8fV6MnJEH8c7UdMcADd7ptuxNdivZM5d14J1bfh7cQZgtRJwqPLix5st",
  "key4": "4GbfagqAkhjG2MHAQsQYZ3ReB3s87NTczCpRoimm2FpzhnPLemXukGvdiiPMC6HRSDK968TzuYqhc1nDMjPK51jh",
  "key5": "4n5xY9afEX4jpFb7JJgox6iLKi5dA7bY1WHD3zZXVN4n61eyzjUytwL1yS45ya8utiPNCQ9RKM4M2W2uqjtxFGXX",
  "key6": "2RDRihT48Yxty5AJCcEzho7Lt18zGsEWYVR22YtZcr3XAysak9AYc8VtWXZu9dDaVLtUA42iHPgiH7fXnY6582vh",
  "key7": "3aR3Qjji2aqCzxEMpdtMAVQUZEXvUByF6YjdZjaCVydbYYs7knX7PgWYe7kRj6MTfy4GYHQJQLp5jfgX7hsVYh8M",
  "key8": "3Yc9cfc26mwitbPLG4gwJeqwdRqt96wroKpx66kHKTwoGGzGLjkjdzNCXAobYmNBDijP5UdbEGk8d4CMJzyH2odL",
  "key9": "5U1PgargcgxYoX8REkbTXapmMmmyxXKdDA4fw2PLDSdtMSooDXnDSVCnNjXfUa7m3i1qVEKKKpQwC5YxLEY7CHPo",
  "key10": "3uGb8rmvtD6h7kWENRDosDPNg6tpAPvqzWDGwQQWujtw9FCMej7av7JVpXXo3WkNZDLD1gNxqjb1VUN6xTttdcxB",
  "key11": "5MShG5km4ACgkRU8Ek7ufrS5MbPkxEmFW77ymMaBCbWGwVwYXy7TmWXBR2u23wfH5erfQUEiy4EXshmnVM3z6BD4",
  "key12": "4QA2f98gWhFDVPU9oKjq4BDyCw7zsCLDz7C6MEj2Zy5L68Df9iJFcWJmoAYB7bF4TDv1ozbT3eLQM6y8bLN1kQB8",
  "key13": "vPjgfnAjfxAm8eeWBNmmHbuJ3S4sjLpttg7aikAjGVBNpfuGPf4fqjzDwLYTvKLJba3Vrn76ymPprXnm87Zamdh",
  "key14": "49FifJiajEHmRc5Shw2RAEuceq2EEMmeMjwF79GU7PfNmekmU1B6FmtxFgkTcVdAH66KqAodhWxXVowMJ1biiv48",
  "key15": "5dTdqTMcVCPWZxgusHnBv487hUxYbSKg11JQJ6fneneigzmDe8yGkhuhRXU79XdrqAnRBnqQNw2dS4LzAX7DYrhh",
  "key16": "2pdUS2XTwE1sgPNx8z4Lzbbn8mgPfPagsK5eu4aS95hYB6iM53335eEY7fvDMaVnM46rM2ZyAQWq1YKtvLUbVhmT",
  "key17": "5CvEx8JCLW4FB2mPaj5NUPN7P3844bt6dRodHoqycRZ82GPpsMAB8i5qVdqw7ibBtWduXjsJwkBtfJpHn2Ui5zJm",
  "key18": "6Ep5YARykhUceRZRhqf185Pc3MWdThjkhmpSCo3xn8eH2Ch9ryHp7g4qPLegYzCsgMTW7YWdJ47yvgZuTsYL7Hh",
  "key19": "4bYnkiWgAV8wLBN1WUJPsv6oyM721WFLanJZJibpKpiRL4TMj4PSYhrZqqY4njwWtFPEf4Wm1JsjoLSCL3Ff1GVU",
  "key20": "4uVc8cWWG4AdWGJ6MBboetSXgt4GynUtLx131asLFqj7S8F5CQhUBGiBXdDe3jGoLCCdpFZ8cNcSdqLC1StEDGA6",
  "key21": "2oHo2f26jxnYU5qdCvi6w8NrUTDCeHpvTMkDiYXkPV8hyNyzYcPStSrYXNbMevadtg2KkLpAvcUzmtNftENbFkTE",
  "key22": "5XcuFZKgrKkGMTUYiCakv8fL1nWD5oJoUyRd1WDrhh3zMWTHSoLcEmNkViDupduUE6zRCqa3fGaSQ8EAFSuugAjQ",
  "key23": "21EpcnWcSYZyzgsD1ovcPECkL2p6kJxYwzXeVGLJgiZoULeE3qUHfNMf68MUJb34FtzACwunyyYkzZ69LCpLsyhp",
  "key24": "2uTmrLvcscXWvbab2Bcyhs3ayw4fwT7nqDE5h3WFddkeitZ2jZxRgVNcfALbC1XMudQv61PtXLQuWDPfrEFVkcjA",
  "key25": "31o4aV1Q649Ly3fsYM3f7qwCvho83XRNKjp6aovy2MYPjtHr1raEMsQsVKwpx5daEUwaAzpEqgpB6ySufGDLk2eK",
  "key26": "4sSpKTaYjJCc5wKPNEXvX1r9F8ZuQYQf3tVyCNcQVw76Vi5MgWzjX1tko7sB7HTYeEZV7hBv4CrtPZoRVX6XaQyU",
  "key27": "uSYRP72gtJ6KxJwQgxRizGaBdrKr6ene3wBn1A1tb4psynnHcYPQRBBkdiSGYh1mgxXWehPALB3YB9zFtFuXUoT",
  "key28": "BDX7tJd3ormtoRb1gKtJEgr1TUQjTTVxmKZ3uevoDZMr1gShQT6gUjqTwLoHbiT7eWC7LfoifJ3oopE2jvBejmY",
  "key29": "4NarxKAy86bZ6ibGesVC4jY9JzJysrZB1UM94m63apBLcxckQyrauMRtk6NyJeJGkiMe1wi6Vs78cBb2B9UfWUsc",
  "key30": "2qx5v62n2Lt4L7Z3t4Q4KnSqSo44aNJFq4mxm4w3WcESV3VCt29iVCcsv8iubh1Vb38uMbNLfVa9iBbHhMBiTZ67",
  "key31": "2R3T6Wagv1Kak2AE1c8chDazrmL6RC2HBXzSoZdsvzRbwvVMwoJGxiFGCGjGX1krv5eus3t5d6agRtxVdDaK14AN",
  "key32": "26bxfNNwVSn3bHEDNtev8bGHaVjAbHWC6byQpuYTk31k2JKgQzT1Nk1zQ2L1WmfVWESTGhn38jPveTg153RihxNy",
  "key33": "3VAXoDAMvSEZDK6W61QquqSdF9qfroNKGLhJfyJWr7ozudSuerAsj9nQ8tH7uRdLYpDDcdJETfsxvgbsEx6DuBqf",
  "key34": "4ajnkXrTZt9D1BASPkBsv5yw7rgVk3JTzCBQAyzGETRt7YjshmshUooqKs1SxgKJMaR5egAQqa1EvErvDqcTvfZ5",
  "key35": "2Bh46wHBikNtWKXci5sPsiBEAAmifb9UjTSBxJgKZNR2paNTNfTjfPyPK9MsouQuRc9o6X7pX8aV6G8kNdYgTpd7",
  "key36": "2eyZZ54QyHrQBBnmrN26XEpfPjQta6cqHb98DNRzSjusrDBsjFyEJ9U1AozPXbe59Cg5SsTPxbPxTd29YfbttC18",
  "key37": "1TjBaYDdhtdYFrMDe1vCCazYQev3rvjPpinEaCs1dy8ovS3nDNSUucaKkfbXSDhAChfYvcSiUWb1GKA6Qxjy7C3",
  "key38": "5tcnGc8LVegtJ9GZaeT5k79kGPXsmjw5XSqAhjjCRF8wgrtK72DVv516EreAwHLpYiSxsxifCWkrUFn4xvtb6gYf",
  "key39": "44HKqD9XFz9rgGEvusXJiToa6W4cenTwjUBAVGefdDpgTSU3TYf9fUM1gK1S6Pwsxz6XFDnwjNUZWAvDWhXyszUM",
  "key40": "4TU8rXtGPQEiymSSzo3frFB2z1KBcUMKdZyJ6a1SekseGhtwQJ4jafu9U7coYUUjhxeLCUeS2vbYGpKRUuu92g8j",
  "key41": "5Hjp4UUG7aGZh2fvsZh2gCsB74KeiEug6QaNZnNSkchMTzorCKj34hiCg2kJ4jBft1z6q3zu5oro6N3wAo1iJwFr",
  "key42": "P4PYDC2PxUtAcFS83pa43HzYufkNCA4CPcCp8Agnk7FNeLfhrZAiMtAzmgezGiauc7A6n58mJ1c7y1DLLh3MpAf",
  "key43": "2vYnLhoCQyF5CxsWUnsnvfWeAxrvXVwQqSi6THLZEhb8L4MzqLNc8w8Cjy9TdjpzyceNtXJUhGbw7o59hpWwbtxH"
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
