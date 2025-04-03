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
    "2KHLcy9QE2httnutuqY1yDzmV7hUur8UqnE1W9b1J29qUtQiQiqCkr9Lsn9ByhJTaYBtbKMsAWwCB45PNEPwXmbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1zNhDzus8FkhLw3QGtXHW99LtCjfPKwRsN1TpuVW758mTuPXYbPZHgqyAUCQ31emKndJu9hGdFb7eLyMVUgmGT",
  "key1": "5exavFvYNCBfxFgpYMNKkfP9K5R9WRT4DtZWFQ9yU1XDwQbwWgTjD84B486pdnTWVwcNkftqpoZiJCrV1VsogECW",
  "key2": "ZraP5FRMj2fFeV4FZQSG1v2Cf4Q3qzLenpGwu7BJUPge5A621MzKEVuXxNHbgdivyXpPNCDSA7svFFVvmMoqEZz",
  "key3": "5E3zkVoBU9WFF4NxisX2W1TBMvnfqACeUygprdsQmbEA3qMs2AwFa3HH6qKcgCnZGHWxPho8h6YvcSQzHfcv8gdG",
  "key4": "by4Gaxq6HXJJqX1ftNGvqPbR9n1SscQ4thSaZJL5hgTE5v9xJkM9RtqozYPGC6Urt2A6j7LPfv854YJonYuADWV",
  "key5": "4BFCE7MRbTRfs2oVuoHKaPtgpisJtvam1n7Jr1X5KF1V5rg46By4nkL2Ni5LP3tYLbgUgMTTEND9GxmdZYW6R3ng",
  "key6": "3UbUftjVDTX1hgbbhKYx1oeg6ybtRkoimszvVxZbqVMPxc2CMQfoHuTnDTdnHyFRHnKGHdBSBAMv8jhB6pe9sCPX",
  "key7": "3fCMu2paMtW6NWLvPMKTn8WkscsALV9tKj3gTxzcwnFkpHRtnc2yAvEJeEawTVEtCZiTqSvC1a7xmtUrjz3JP7gK",
  "key8": "29mhtgxUUJQf4EqfAa8RbgnZfWmDfdF8H5s3x3AfiqdiQZrUh42GUKoZEH8r1LsYZefJRyRkvii4nJXdDReUnfgw",
  "key9": "5zHL3kWaWkvqanUh4ya8JThWXMsAYN23XYLRMLoxyUi1vk7xNnff9Ht5KGAhT3Tmy3FroyJ7e7Uz1mvDgyQ4xbv1",
  "key10": "go46nNYWoo5s4EthQoQFFSC2en86ymvhnpAJ8ZHQ2n2rbERoHHUxbJqKUH8Cd4qSAo7QkdP7cS1LqgBC5pgr5et",
  "key11": "3QnSd2w9aNUxmeMEq6nEoytDFf8CQzDQzcjAKoxAtf3Gj1rVEgyw8Z35MrqrmCukvFFVxiqDgNBz4UibbbcJszoh",
  "key12": "2qo3jVfPogo6qsvmPpfdt4kratwo79VyxM28vu5szQZdeuTX2w7sv6Jury5WceMY8T7f9sm1SsVwdwrkByhUUoXu",
  "key13": "4K4ioDGQ3TkMzRXopNcf6aAuWae2SGowaJa1zFNRzJ4q2W1H2UGyy4DCBm2kLQ5c3CF9y61yS6HEm4Vwt5ok56KM",
  "key14": "2sJNrqd7gEtdFFpeXq241fo92GZ8H6vmrayk7yG4jmAUqWoduFEUR3UaDBbTephmuP55wZpJYHv4x6d7cPm13NPh",
  "key15": "3aRHcd7qLaT6wM6ybZDhb2NoaDd4YDDvccybGv9XMXzqtkTvUBY5jTyr9xUnBKC9Zjsrv5YSKr3z6P84qoFtRcjH",
  "key16": "2zSLogEWsh2LtWeRySYts4Vrz1VKpekmrAYjMa18ZvKKUnw1gbcx3WNLuWLarbuLfvs7SiXWvhCZz4iinKe6y6VJ",
  "key17": "4FXczFJnwuJtknyTXbXWFdaYpCXZToTRxdT9cfpENv72UdBREqT5KigSEwzyMWtVKbnr1hWJ7mxcrzKKrsbFkBTS",
  "key18": "2zy2Kvv7Qvy94p6t9QdYYPhViMXU4MucwMcxCjRueeqwHPAtSkKwmMdJ1AXvD2KG2ZvMUhjbK5B3dwPH4G5RVwjX",
  "key19": "4C8mKvTknMr5o7vHjTVNL6CfxDqHZDBvdW45T5BY3Yr7ofGBL3jwDfLNhmwV2oPSGWTQRuYYg871JWrMEyyFGL8p",
  "key20": "b25Ce4wyWP1mEqywp7V3ZmenDbnW7B7EQS8VYo9MdKziFXrucEYs8p18ZR1AQkrBGA3v57J3giQ9qRPH6Ha6GMF",
  "key21": "5AnEmipUxJ112K22tJs78WZS4hhiWzycFVzjARxSu31s9JeUHukETn9pwMrta1R2qszmr5P4XsHhAQCpEM5mcpxf",
  "key22": "2h3ac7Gr2D99wmABG7UcEn4fKWwv6w4c6WCmzytHxjMDV1TazzWgE22DurtftbRiQXKTm2QwDQVxsRGj4EXU1Lgh",
  "key23": "5ohy9GL8mRRCU4AAM3HNNo2nq8oZT1Gc7h1kot2hY6vFQjZKt4Bk8RRmurwqJQRNdtJLDEUDHCLjqDrfMmJJtjqu",
  "key24": "2UC61obZj46SiZGhumhNtcaQ4Rz1QH3om1gLEZVwHa5WFCbWGixxxYDi3tKfKk5TXym2fMjsWCtbcaFoG6k9kdjF",
  "key25": "4EH5ECE3N3gydKzWR4pXQm4V1cAPMEvYDPN5sG93vJ4LEMhnzJE3cuTnE9dvGeCcmipFSK3bcYBhDVo4DLWkx1Ew",
  "key26": "fLEnEUViSinGAJS23euKEBRzCxS4pYKQQVQ4T3zGwpSH8k9mfu2fvMbYEkw9pDGZN4FoZ1HvJEBNcjLj4Fryk4W",
  "key27": "4vxNQxqYsB12a295eFXafhboiLNZ3imMcuzhus9JMTt4qQ7gGkrUQwZoujT5rMEcUkXjYeojDGrEu4obkkxhr84e",
  "key28": "8veemDSEEUQdzFzVbe8dc2bKotuvGry3ywxNHXNDk1j8xcScwYdMvveyytqHfufhzjz4UZ3oqhnJA3cfc2HtZUd",
  "key29": "kGKZhkSWaSzFyHLp9tRtooCLGrcan1qhGC3ejzQpHDFAWR8X85zdGbh6EvwyPuu3pfzhiUQc6vfEXZBuechu49Q",
  "key30": "wYa3MEtPZPzXLA5wTgw4PPzwHXQwSEp2QVGiwqYnUxiwY7BdUvtsxQHwN5hyDZfWR99qnHLjc4xJfpqgumMGgLU",
  "key31": "2G7srSxSiWbxuAqc4qWshiaYCm2hiMc8iNWNVDvK94dtTgXkNR4y4U9L8UZGmbvu5dqZLLL2y52Q6aCTQ8xyXMhn",
  "key32": "3ryAiUWvVhfzVLw8wVHQcMtSbUaGpm7eub3WRz2GHWnr7rkrnQSVW9dMRfb3bzvj8psd73stbE6c9WsZHpZda2WB",
  "key33": "36pQGVEui9bWQLfxkomM3YeUspUYKCD6cnUosNTEfK4UqmkRKGvysJiZGQJBxZvNjNpM4L6DDTpEk5XCBc9jGKfY",
  "key34": "5tHvWxdsrpxEhiMGPZFzS4VFyJg4yZX8RMXLm4iRUseL3LfHZTJ5eAMGw9FqnRYRa7WwZBGxwogj1TxrxD9BmenJ",
  "key35": "5NUgHxxMEuCz7reg7V6FoAcY7fn1uXTpAUGwuzpyUXhN9k8Z1wiDJkLLmUofyRUXSSbrFa9vnMoQwvBPW41PHn3N",
  "key36": "5FUgNjhXPnCMidEcE7KWiWfAiF7LdmgNDa2v9GTv4jq9tTMcJUNLaKzVaE4ko8hdC9uXZ56J1TkgsJADZZ9NmQfB",
  "key37": "3iKrczF5m6ugt3b3qp1Dkmguq2XAAR1gHnSSnVpYH5DXibBWBU7VdK8FmprpjfvvdqvFXRLkWUmW5efQLuHqiXJ",
  "key38": "5Sa9d8gXACCCw8rT5FTPwoy4Fn4u88GNQH7dJExtbQGwddxL99VZAKhv7bJoA1tMM5tS2RFT7FJSDT3vFETNwx2Q",
  "key39": "2UEUtEAoDVAHo8LChxZc59TiHkEMKWrEVJCgPM3CE7SAvDgs6fPKNncGFG4ro64ysUCbtFF8nN4AQfWMRTyzq7nd",
  "key40": "2jZ4f9bVP8hTiQb1yxpCXVWvyrY6MkZkJXHNrKbwLTxEj6z11fM2HUuCWKtk1Uwo9LnJ4rHmf9f4PAy5ECd7RVXe",
  "key41": "2Bz1CKX55fBt59YZssFP1zGsN3UjQRL8d2dbbz8BWrn2VmPoYRWYQ57fQrUzDKZWi6ehQY9uzYjzzJP3gUAHm1by",
  "key42": "4iHm9RappykaAU1fQ8gt19sUynDLEtvZuBs7xTWPkbtnpyAqCUzT6GjU5uYUGvgZGkySwTxRHb4u6RHxBwLzw8QF",
  "key43": "3ZXfjXgJF6rAh73aCS4k43p1np3zhKKxVAM8hWMVDRcFkN2EzwnTG2yMHWmcZU5yoyyCG1pTGt2NjSakf8JBUDzn",
  "key44": "3S7MDu32uqgJeMzAsYQ24yjZoi1qXxPcTMRoXnpUrWyhLmczE7vub9tBTgFLp4n1P4PJVX7f7vVdggSWJ71h6ruE",
  "key45": "4wDAmH6QJ21x6csP7xBFfKuDXqTSQXHrpBZcUgUPkLVwy3haoDf5qn1aGNkR9cd5uBE1Vgmg8PWJq36FWn7vCtg2",
  "key46": "3wVdCQKPCs5TGZr6bv1cERXQydawoxTEb9YZNpAQgKDwUsJWLm5t6pk2Caib7Pgw29GwC3kKdHU7Wot6iwndC7KR",
  "key47": "2YUdCvGKusxMK1LghwSExJasS8pjPDRTvGcGLCUGkWKWgTbgBa3JL2r93HoVC4a5q94uygf5sjQTZy1wVFz3z46i",
  "key48": "2kStjeSwipWozCP1KNR4fU1Pq9YiCeW8j7gxgWGdUzioQXaC12xBBt6uTw7pnHUYAY4TCtxfrocC7uvRiuSJYURN",
  "key49": "2S6n3zq8J6fBNMKZHJmmUKirb9WDmYA4DN27U8NxcxLDj7buprS65uro6Z9TbZDg82bSuhCVabxh4KnfnsQF2VGW"
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
