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
    "2GZifaonkK78dmafMpxGybCY5NjVi2zyN2wzpktxj97kwbEwANs3KLJr7k3nYGEegYxr2bJdBNdV2iESo4mqFHtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmKGcZ6L5YFBPBXrokZZRoxZrD25SKvjqST735aBzyRHwhMy9VoBTKC6eCjCiT89AyVaUhKuChNiSjF3to8Ezcz",
  "key1": "2pZmGsGCicAT5Asr7mtHQSsgWJQZQpDjDTh1QtktbdRmWNWmTwsPtmg9AC75qRjSfFDnCY5BqnjQr3DoRcN9SbqX",
  "key2": "3ewuEhrB79KwLSVjrxF9yVumXhBpcLdVNfC8JpEQiZ37cZaYH5hUsnfkLpALPfYSM3btvo7hQuqBFHCCCB5jgFbS",
  "key3": "bWLGs3itDXeNnxPFGFsS8V8a4dyh2rt69NjFkWeDGuwAkf6cjxF5ub34gcpivW2YkSfHjLDR6i3PAwxkGwrUDSL",
  "key4": "57CdzDbb8GiYDhPcQJkyVaZngV6F68CM9C1nQhyoHvYMgPknwYS9GtEuntMoFwz6viNDdvuDUKmxdrB3tSk3tS5V",
  "key5": "C7RjGR6D5ifcfqn9FbBmrdQVraFx13WKkM5jCXimYLv3FmLM9MtEKi7t2xxuWhPyNqij29S7kneXxZTBScHFAQu",
  "key6": "4WfVKg7ujJLc7gB5yyhm7mQq7Nt2yjbDdeWnQhmPLUuU1QtvJVNRPVBwX8JjiKsk53qcbfC1fGc73kEyKt4QxaQz",
  "key7": "2xgfTxpQSbzSMp7NzwBso98iza4k91TYHT39SwmZfEJkZ9qTcZmSWNz1rsn8tzQEetUeeTyzhL1LsJoszrRukBHf",
  "key8": "2TsHxy3sjPsj1Sft2mqo9F9W9QU3sJceYBLwjrgZhi2ccpWpBphAzL6BLNTCTP2DgieMKtLgRApJAsiFEiv3vsjo",
  "key9": "44FbrF3FetXmKwNoUnfarNSfnG4NYfjra8uZd2Lynfb1zLcgRMrR55QEFs9EPWaVnEWkuXMMx6AHAg2v5ftpzkJV",
  "key10": "2Axd6QCBH3nnGNbKJuEXcx5mxJwbYFYQhyxwFCNB3BPE27Q3x2sK7emyNiw6GUpTm4zsXp3PzeiyqBfvNW64uxNo",
  "key11": "49Eu2oku86omMADoDCXVPmxRYqF6Z8j68Xz23R6Trdur1K8m3fi5n5Vh7r4c8B2bUkkiFM2PLXBxi1xTmRVNeGnZ",
  "key12": "4ktmqmEZqU2UGgYHFDjSVR91cuygwBcjJKTA2TUVfxqEMaDo5byuCiQLmRtP7cPNk4uuQPtbbGHz2JbZhPJZCUw2",
  "key13": "2ugU5ddpgEFDyqdU35CnTSWQ4jdT8iKTiYh6LMrBtVe2fDHGLGnN5MArUL5tN9vwe1NQjn4oqfJVvqT3qSrV7KoY",
  "key14": "26VMTMC8MEUTmdw1M668jVxeAoTj8CNrj1vzjNAkARwcNNV8VmdeF1WvKG37Gdc5kaRj7WmUopVJM1wT6oJDCzS3",
  "key15": "4LXs9Y5H6E7Zfumc6FaEcs5CDxQPJySvEi6jXoEm5RSkMsdiY7qkdzbzwCSMVLr1a2MAA6EYurjy8TD7dffpb2dS",
  "key16": "5EGoBHocdWnEJ8AfSbEEU92fULAvvVjg761ADCrD2Pg7PQugioRGbqDwgZnR9JNj8DYShzFU22qj6XTNw8FhmhTn",
  "key17": "2BagypkJWRAHHjDnNWq69WU26fr6JAnuHgDh4eUqo5PjEyv3avwdtXZgoLWNvU4PjruHru6T8on4ZgMsDnYLPs8f",
  "key18": "3juqvfYUnueg52kPPZjuNDv8JiS9JHwT3PxVKe7ofEsbC1HpkbrKq39cqmeLR6NhMhTsAhWSPxj5LRN2ccza3Z3g",
  "key19": "cSzEi9wpxP5yf6n35KFE9a3hbFN3LVQ7MY6g9KHBZzyqz9CrZmaz2gDPtDPisPne1NpDUC8B9b3PTnaX83Lbr5m",
  "key20": "58eXCi8B6o6gVwtoSh4Yi3RZURqxT7FVn4d16pBKkUwqcAPGL2GKyuPE7zRoH6UYhCPbCKJU8PFCaSFkLBXTAWqf",
  "key21": "2ga2aCgNi222fgK3EWCQxnHWuphugC4Ptrzg1oQBQfpf92iiMWtpFxVRfedbeWrgKn7YJAFtjVzoqKAj1tKY4TED",
  "key22": "29KHzETHrcCEJxhrLKKWN7TiKUMvdTR2iUXFVas2kpoonGR3MT44oQUY8W3dc3s4N2stTyvNot78xKXj8dgnNwxU",
  "key23": "4zjvB9Y1pAKCn3R2JPfcecVH4Mtq3UTueGmWnQuHPtFNFwk3xLfmxnb7yyaigJii5sCA2PzE7yFQBcXzFrwtz4XK",
  "key24": "2DtB43YXBJ2ANYvgS39JyW5jsaJy4U14jQywnvKRuFUdpVQPe2E98VNnjJBsfaTCbTffEJssmiTkDohorBpoVs9u",
  "key25": "5cTYsZEY2663UgbbL6QQgQk8c9uRahAY3WmP6VrMEUY2CY4zB97T1T6zi4uzYDgwopScP8J87KbkHFVjvPBgAqqn",
  "key26": "jN8s7mjbE7J4jQkeHjhv2cT2udhWuH6X8vWZ8C94CN9hMJspXvLivTret5zrGA2RyM5a2GPkEEoSsUdhS9UL1ex",
  "key27": "5GTNhf2CyKZWpedoqn99U9bCo6pG6WEmPPLKHaqHuRDma54mhY5jjUTqmd2yeqDTV4H297CJAcedEjmKtATJHbY2",
  "key28": "3gi1Li1pUmvu2mSeueN1VpM6nysK461qxdQDDwjFi43QBGXpeo8vA6kHcscJnhwRhbNJPb3YmhM8QpMJjbqh6Den",
  "key29": "3GPHfZkPH3ZFkQZxkrh6oT2frxwDRuHMhrzD1ZQoxZCd9Aw5jkoeB26tEoaDu2v4Rky5YEEMqJzbFBdSyAijStEs",
  "key30": "2fACnWNrJMyNn22VThv671wV2TNdfptFpBpmRSJgRELYEcicJrTpHj6XZqN8qwnUMgy94z5MrLa9u7G6VtSzvDQ7",
  "key31": "5af8v52sMAHBVxybzDqHgWVmQuK9pwgGzy73nLigY3oecMn8TCwTV7qpGrKJKbh8c8YFZXYoSF7po8ymLkus9XDF",
  "key32": "3zA6cJGDNpYJz1A3n8K9adGjLgVirRDaKB1th7RS7hNaR8PGR1fThMNhTp8Zr12nfFKL7aojBzvRXf2YsjBzyuZP",
  "key33": "5iBS2qBkhiY5xGp9XnK393ocVAFVZNdX7RQgiC7noYpUU56VKwkvUC46rmfWj5PDK3aGDwFzSE9RXwXBMpdmiKA5",
  "key34": "4BssyZ9KcevN5XgwR4PnHX7hJEnUJ9Yjxqm8NDPYqqHYTXZRXJVrfJCC1bkU3KU37buRfX9tNdZXZZ4cxdXg6br",
  "key35": "2j7JSdSPR6sCs3bB3WEVkBtHm7KMw3Uzyjr3j3mJKDu2kPomqSyTNbaSk789SKMywgAHnTJS7Km26QFZyVRyKD5v",
  "key36": "5uhE9Xa49PMCt8f5s8kv7HSLi8V56ymqNGZ3P3rTmxafqnA87VDnVpWnPv22xZrrdz6WySAXCG4rC2XxtxtinALa",
  "key37": "4BY4KiBXpZHD46wCXZtBgkysrjazyTJ2VB7SQfncMtrUCg56CoiAPcZTQy3P7DrMMp1tjqVjh9fgptjDAxjuQkaz",
  "key38": "3VotEnaDa1MrUshUtJqJCC61buFYH2RXvv5jxeqB4RAzJiBBewVZ1XUTEYW9B4eACcqSfefce9m9bgCYq8EcxRs3"
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
