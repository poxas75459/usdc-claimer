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
    "5ZeCEW24xCVBNo2j9JB8ih33AV1Wn3vZMxwJJYDp7anrYa33yNWU5yycKzLXQfLRBqKa48Y451b683eSqsjSv4So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPNshSQiuKjzxP6UaXfxg1aTMydq9YBvE7fDD7XzUgd2mieYfS3BVXDtgEc5no3QHuq8rF98RB6X1RNaE9xFhyj",
  "key1": "FqfAzBMJ5mAv6JbXZnTNBjbLz8WPrF5wVNQvmJErHdoPZRpov8q1iYaRb6CoNAdw6hMuc8n2JjZ4PZohiDVXWhi",
  "key2": "2HWVNmm48GZmrtX1PasLD49Avp3se12JMnXKSF81tkN8KabFqDzo465r7f8ELrAo9wirKnAexm4qg3Vhcqa4eASF",
  "key3": "5Gwu3waxqycqsAEC2D4WZ6fUS7NyVsE7MbdB9FgWpgaHaL7XBL2mXwGjRsbkeKB6cQQmYneYThX5FqJzmmZwLKY",
  "key4": "35LQBWMHZAGr1XccpfoYXpBgHoWPsPcM767bp26sxQNcCXwvdiM5LJGeU5rzTmXnQKUchoLn5DNevE7386rHvhjn",
  "key5": "DCZBf1Q6J2kCXXvqeMJ2BaoosfuGtECWnK8M8Q24h3wZiM8yWTjqai6nunJSbRZuXzJGYgDiei7v45kKwS3QTUF",
  "key6": "4f5t7pe685P7JArZiSqfVpyu58SUPWhw7RPtagDcJP35ywV9tGhcMgbWEhnbq8rLoC7gBqiRbzJ9XfhdFMkP4UR1",
  "key7": "4Uw4fUjRJ7DQNVZnYgpqu8d14Pidqv2dtuqMeHH2L7DBfFPvUrkZL799xtVJxstrLNVYUkBpZ2WquRoV1fxgdZXo",
  "key8": "2tgU8yCSixkL6nuvcjngZb18w8PoKWRyrHUxguvd59E1eoqZ14u1nzNpDdoytzZ683Xq9YBZRnwYuATbF9vmRzxr",
  "key9": "AsiEG78CeuE8s4LNx7iSuA6kCKK9czwa5WYuQSMSvsCXidKQKzgXd9MjoT76RB7Bx5cWVEnhFuJEYibMdaxAfcm",
  "key10": "21JpxydXQ82tYBnKhUQS5teixfQck2pE5wFxY9mJgnBPu3kMjgPgqEnS1j1srnXDHyUGocVxtFqgvwa8jM8c27aA",
  "key11": "iap63UbBABpe1r3BgCmSvcfos4JFkg2BGxGHYDm3Miiemdr8WYUxkWafypkxVjqFwJpb61XxrMmZEeDj5xpv7pb",
  "key12": "3kXCD39Hws1Z5vkfC11Dut8hnkAW3BVX3zzQbVudN3ABLFoe7RvTx5eD2eHmGggQQ8fdxz9WSVd8w47a9SXv1m6Q",
  "key13": "5pYYnKki4CH7hRtxXunUE2UZs6jQsQF1FVujeRd5uASTdVMowDdw1kr6CRYPBUBQ56Uo4rc6wv6hUSXKFskmbgyU",
  "key14": "2XABptmCQk1FwLjZdykkmoKBrQC1k8SLugUVXShZwSogbZLJDPfLYLBiRdYJE1oydYMA9S39G86sK52uV38jfoej",
  "key15": "gAobDGJrxDtso9gDnzYxGEVtoaueq1m9yoKfsz4y5CE2MBCei51HERCpGt9ebFdcegLWhPHZ2JYTiYfLzYDXmAC",
  "key16": "33U4mDGKTDFWSdciMxYn8w96rPfpJ1nfGyAHzLA6MZ72PtbDZApCvZmVRvgPzaZk5g1JhaksRvqwLVqDm7Z5eFhp",
  "key17": "3GdDoQizhwCAG1bLkojNb7egxia2Z18nNKD3JcgNBmzqgn1w62soggFzfHe8LtDbR1537AjsdGvox5WWNyacyCQf",
  "key18": "4kbr6a6j4kNWXr71uHd96JPnKkboG3TCm7ExmMUn4tEqGLZJqLp7VnFHmxs638fgUQvNCqvP4BxAftGuBxwFULkL",
  "key19": "5iaeQ6cRR2ZntZkd9bHDUeh77MMhpwnp28F7XNsxj4oBaMSQgWNX4792xfwBaip8g6jS2bYa67PsmoNrKQWc7N48",
  "key20": "2hxzPPYsc9sa24HQhkwt5ChgTbGvoLNwth4WM44Bo8BgKETeotyU6ebAz44cgpNs3hPpExR8q7qVHtn1K4jYjASn",
  "key21": "3Wgh5ir9yoVDCCqnBt38qcSTTVPFLhnSsknxaah3dXySnNPzQETkTQVFzW7sPq7vGASyzJ2UrXHpLV73j4wnza9A",
  "key22": "2K6KxVD2vAsWGCha5dPbjuEd4dvkFcEzFdWQhwraD3LWaWkZ2Uc9WE3xEkhp5eX7DkjiCp4r1YzpM4r27fgteAvo",
  "key23": "2XDYjHnYy4fp7a4PYhQ46vAmWPm6bxLoVUWgB83kBHfUya488wos7BP3ppwQojLX6VrADHz9KejFz4S9NWNDfPdE",
  "key24": "3mvDg9iqbGqnhRyotYDbKZtBLe2D9PhjHHrCFf8KRqVKLyxZb8s6mwcLW4o3iekYtbPZVb6UyuC7sdeaayRQkahN",
  "key25": "3sgiBMx9FN5cp9tY48xw8E9oqj6Nrp5oNzwZogRPMcYmHFZce5rauNVmEqC5sdChzrGXmn9mqQCHYnBpfDHScWVV",
  "key26": "4Bg1GxNSQ4ovetDbadiu4UcP4dDDVBmvTqGe4o1Qo39XcY1qW9oPAVJMbuYetXwqyffZxzgWKXB8VXoeGkV8X3dM",
  "key27": "4PHaqikWfHJfbMmGLhodYmnsjSp4UyJjV1sML425qsveg1mKWv3v654GQpGfMxd41CyEEktRcZLh8oZuTCndBRLV",
  "key28": "5TxaE5fXQpbd824s3epCpFTcnEBwgViWbUTAT1XE6Dwe2erE8VkMi3S4HeqNBtHhyNSpi7nTeFa1vSPmJYxmX7Js",
  "key29": "3NBXyGYEyxebFCQ1ndi6E7mcrN8DQ5eKCdcQXereY89S98HsRtrVNMpBME6FAgu5UZnEL22mZXRgpxhH2H7v6kpm",
  "key30": "38wiyhzpiCQpw3iCUJQ8R27VxERnHkPSa73jx9JcQY9ZitVxrg76GrnuKgpLysRitwduTq5LUXYbyAjVhWsWXyb5",
  "key31": "5Sa6BV7XbXskSUx7xUtH9aDh8HEuYJhVSKLxfEoFg5RL3nXz2Z3FDtpApHuyAQTTtYuPh9B7Jc4FTp3GwPJk14Rk",
  "key32": "2y9xZMegCRq54Hf1gdmAu5nuXrD4rRdpw5swj4g4Vv7CuyTxfiUPG8adNfT3p2zNPFKiGJ7hgHHPE6jsXyY9SXdB",
  "key33": "2T7HuBtvtZaEX2gHAyWdx9Mp8VrGWUKMyedgmw5LsQWneZKkez9Jk6swWj5cHvLDbaoUnkcaBmwQTX7GWDqbBKZP",
  "key34": "3BCLhgzG3hffpp881CdnF6MZ28QjmBzqZcxXebS4AUYRL1kGJoFyAnreNC6gUMVfyWs5vzWwktHKzWS8sKSkTVPu",
  "key35": "okbzUDVm5mV7sCtX3adbxctuoSydGb6wdN9gNqHXZySYBo32q4XtcUJkG9orrvpj5ncQWk2cKkHxxtrMNrQ19ov",
  "key36": "4TcHiwj5T11thLuxXe6ZjQCqMKFMn2X8iKZmijUdnb77RgTte4cVPHqhkfR79cxhq58f4V1GaH63LFzBpe5y96vi",
  "key37": "UGPC2cecGRR7U9zVNvKsKSBNZ6nVaudLouXyxW61R8qJ8Nd9nPgRNu2f5gqwq9XPMBEm9sCY4o77ox5ou8s4nB9",
  "key38": "WgZfwZDAbqqu5aZ4VYc5egXjHK3hijBBrAkkkQ71SEvYoFGcHurE1BV6BohpB6kETzvNGwD4NvXgiiauQbwChNo",
  "key39": "rR2Vac6rvc7LJxF9zBo3DWfChnz4Twjd2asjijkboB2ohA1FQUcxWTjSg7UfNaa6NYroMAQwkJsuGDw8J24zsU3",
  "key40": "3x5VAKxsDZaNyjZdmFbzJkpBGEySfrAyCMSkCptxXo1tB1eouMbstSh765b1pTD3Qg1x9AAjsdRAGx2hbNN9ny2",
  "key41": "29XuDhgThYv9DyPsFPwLayT3p7JHWpfmNNMdLy7URMKq3CaiA5bkbzDsxFW4PZdGJsFK7hvkXwUTGdqNoPSRz7jp",
  "key42": "4dBo7QcY44N6UCRf6pXHWN1rZEUYTbZaYaZA81N91MYywxMv9hqFfKytndqJRGCPaPHUSnv3ZPQUuJs2Mpq7yBrC",
  "key43": "5JYRwqJVHprEK9fkqupKZBoAKDVBtCnKcNSSd8QDTsdNwxibuikTGyzZgxp2gNWQE5iADsQq4LgaUcmT6esD4Snw",
  "key44": "4CBKJG3ZdBn3tdsmXtUAAh5LoGvQwi1mKEQJsFBotz7xoWgeU7ngWkscBb2u6h9YCPxmiu88X8XWBtrm1GcjBSNt"
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
