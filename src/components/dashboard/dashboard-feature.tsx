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
    "568YH9XXKcKrVUaQT7xoR46bLLGnbWRnyAyTbJJg2AujkT85FBGHxKeNuCKm5aq3yRM8WaMqpuzG38obZ92JCxbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aj8NrBurwBDa4AkitzoGuFuUBiXndDS8Cqobf62EL5cyLkNDNJvokzVea3hFaHBDuxksn7K3g7hZyfnWeEesAKC",
  "key1": "37Up6hLHTZzRK6jD7Uit7cdmYMFFBQdgRNdAonUEWexytAfrSAHLktP8cAk6mV9BTpnGPbqomPPsntrf7W9kmBYp",
  "key2": "2jsefXUJ2eHH1zxbmNHgYSrrjuDQFi88Br6m5s3mWAi1q9fszofZeSYny3apuh9y6vcQa4tB7FYsNLKGs3MxEPJn",
  "key3": "2svCKvHdsAX5LSY3kFjgfbFTXiK1LVtynZ7mdDNafzBnXn86UhxMFFhYV3saz9Qd254DH9vZ2fYTDS23gA4JEsVe",
  "key4": "3j1yRdFToe5dEqgANgwAFrvpoLemoVywPh2e2YCv9dxvLNURpwK87j7w9Yt7AgfJsL6eJH6WBWnAqkRkcnKtTX5g",
  "key5": "2XMQDNheNy9f4fWrNTRLTsddDswqKmvz2t3LwWTKiv4axBbsZbPvjNbnWudUQo9Zt99aHAoGwU8ipTBFjXs45kM5",
  "key6": "4b95kP3vqRMZwzyW5kbvRf34fS3vYeynZgJEcJSRbhuxuCDNbQJCbardq9vZeuU2PmT4kovV9tNHPz1hfFYedCzs",
  "key7": "3HkvodeEMHarqBJFXjKV5f1hVu86bACP5SHHvWddsewh3f7qsayETjNGq5ozrfHHdsYddTShW4RQ9apsXBXk542x",
  "key8": "3ganQw8fBM9WVQfNnhfoKiphMPjGVjyAGvadBPT2MsRUQuH388F3pvoWV96jU7Jytis9ykNrcYwC5Uw26GKq586H",
  "key9": "LT98pK4P2b3vAnekbYE4aY1af2z4SBcvXGHbESRimQ6TsgBN54USqfzrw4ddNPpnmTcESieYnevnohzkjN7Lnid",
  "key10": "4xdJUwtDNNMtbuaEKnY2ouGLH31HWSN6gkwgmvXVFR6SEneFt8KbH6k4gS4GAtFnDWST3XF1jsJVrZHYsByA4pxh",
  "key11": "na6xXbEHQyUmNpgaa8iJ8BHFUqfJRcyJ57zHcdt3cKG275r3GSmfYc4d7n324Z1iPHEioSLsA8JDJ6rzKKkNJE2",
  "key12": "2qhnxsb7FJvy3EY5LBDmYM7Zr1sAg2Vf6ZihtRkCK1513LUChin7ChoZXEZL2Je175vpBHyL2g4FYKszDACdpy28",
  "key13": "rThojH2K5UT6hsTjTaWgMUvbVQaZNxjcnN9UAUtTBrKyLAHYWDjfm6YQ24m7jWSJ3uJPY1YcSVGEn2oPvNBGUCU",
  "key14": "4vZ7y4CoRBmW7gDnyDPTEFJZvNr8az4QGTpFW3kSBSDbAnjdbtMLsy4hW8DoDHdvLfwBoKQRFMp9ck3UJ6R4ahHD",
  "key15": "31PkYcme7Tvy3ShSWuoiQpHCy6UgDqDvznqWpDgH6TbdsdRvxx1QWENgeXuQ9FpMEahmHhSHSbQTNhDEno3pTM4B",
  "key16": "asFtUULFWBBxcrxfj5oNjzbttgudFHhBbNtxpaMvgx267VExUUt66ug6tiRv2aw6FjEZUcGhuVNnGFns2Yv17M8",
  "key17": "5vgczV7nwkuvjYsPgpNfu6eUAZiNvuRkH7KkRGkdLxfHDPYqteBqFxmKT3TwexdDKa98aHNHu9umQFVqiwFRQ6hW",
  "key18": "gEQQ1Ztn9VrNrX1HMERVtgGtZYptVrKfRwQVUezh443SXyx4i92To4gAinU5YZLKZjoFAtAWaMuU9NMwSmXCBio",
  "key19": "21sB7ZrNcCdcvofshJiaovz9vHNc1mub8HY6EdFSUkBhsnig7ty4eZy23WUoefD64voLWxuJwq2SYUtDeA7PsJiH",
  "key20": "4hZtB5gz5KSKMZXFBqgxUiFj21bAQp6qonm9FiR2X5ENqNLUy4DqQAAY3VSbeDrixvfVXuskuJj9P1Y4wNmXz4MM",
  "key21": "3VLjyDdKGKTvQ7hCBLUdjGS1a8rrtEWsLpMYes5EGDNX822EsiSVAdzBAW2i4EXiAdtne7R3TNpW9XuVpJuXPBGJ",
  "key22": "4inffZnPgsEQFe3yfJr4H3fQRXDETd8zpQXB5j6Vag6SShoBrSNF6QBvM73TRFYTzwSdCdws33ZVbJLa2a4WXQA",
  "key23": "3gLdiDWgqTRU5EPunDbjq3queExkLaZZPxwFjBFE84QkqjYXaQdbU2Gd7D4NmraH8LtE2PB4dAZZHp23H7gTkovH",
  "key24": "5KWCk9dCNCaiVnJ3t9TbVVimcxe5cendaQ74JsT4kGNWzGMM5JLiZ2se7Btg4GyonRejYhqmiTB4wb6rwfZ7LRaX",
  "key25": "27HkzB87aahjukv67ozphdDQs72gWLQ67vYY1opusPCyqFmMvibjzSFA5p3PZ8fkpcVp6qaHijJEkbdridSzHSVy",
  "key26": "3H5CTknifE9kSLThiHTC3ASBmLHhgUXiHgKpSm2kcQxtyNtxULUTuNhU4LYwNpSGmXHDgnptSfmZ8BBgQuPPTyRt",
  "key27": "5iEfuXHpArYGAvhzY1DK6FEJNBXPQNbRQeMJvHJn4MbGmzi72zCovaJA1JxZXHoZrAa74QLz3QNYFoJnuJdowVjv",
  "key28": "4y9MXpn59MPKPkq8jX2mX8QT99E9vCCVN1LgSsa5ApiG3rXyeryacKSnjoxmLTNYR8PYJfzpKYGHM39LeuSC6Pso",
  "key29": "3LWzVamN8L5ERDG4XjdgPRexuJPvQprgc2iBnwJFZ7NMbcxhbDEw8DaeJ4NPcL7BhMX2TXVnwKADPf6U7H6qvcuX",
  "key30": "uxbYnb5Qf6mZC8hbApvAoseygP1o8GFAFt86ammSGqapdYPVZFjpCEvHJKAvMM7DZc1yQEFFkay1wENmsngeNRh",
  "key31": "5g4FnYZjJbHfirY7Bgd4DP35AQiuXg3GWU714AER4X9DPDCcJmEHBb64F3Qrs48n1k9XHdx88HfroVao4aXFSaKr",
  "key32": "5YMBcuVJQFVAh3Vv6gACwNEDJP5JBqqVJHkdikRrQJC2FkpGSYnUvs216TEVZ6Zu8TQS7asDRhnxwnfkV7PJ7eLh",
  "key33": "2xa466vhTN4yDdcVSxVh9R3MRV9NqoBAXAzVPFUZ6roFzYBQN7tLjsY4KN39GdbkPtYt42ZhLw9YntstGCPXqkeA",
  "key34": "5sRoq7VkRdyd7MonDyA9rwHLZjScvQ8rUuXxBzFsg3Cq9ys4vBLgR51ywMq9ZSdyeSjeihpF59FZQeLA4ehL5pri",
  "key35": "5ViVDhqV9JhoZ9bNSkPBZczHHZsMSCDT7ydjQ6ZPXUrtJwdUL7s7ybV4sga2ac8ZF8RnRwrSiJKmRfYQpob5iQ8f",
  "key36": "2uSTe5wPH1LJAP1hqqXwu4LsQjNWNm9t4E8YcqNFRR9TovzMrd4EvvXsVspYR6ppXfgRwUAYnAJ6gj1xhJv3oDtc",
  "key37": "5nPjC6w7SpjxadjJro1zdPuj3y3Ph5TU8WYYr9TLQPDGbPkvuWmZzJpLVFM5sApGDoNSpBrdH6tnMNy8tKCFkJ4o",
  "key38": "4pv2GTNN5qRuScYTvbuG6FHBXx6UkGAnfXQ6Wx2jHo7jWnLYCFJavaC45QXKLhuwBUnbDaMsNDAA7J9yBCcWtzhi",
  "key39": "2pM3xBPTuxNsbmNe1grypb9v9b3oYJhBBM9eroYtjdU9Mn32kkdemr8UGt331AUH5XyDprBm7r27DB41Edx1DhVb",
  "key40": "3QzVJSkxmWTsTNfKEGjTWZNWe6KmFcb62GnRYNqdkDTCkBECdHWnrijgcoM7R11KNaytQed56MTN4sZEFHGbQpj6",
  "key41": "4qXoBfvuXyKjFC5DA1SZMRutKjRydSei2jsuambp7MDUWW6XuaEgpTVjKJMCQyh3M3YT2bB21GMmBNZZfMtJ3M5R",
  "key42": "4twB8nQirmTHpRmBRCHxxU1iBGLGJYEKTBv9YHuvEnDAB7a55CTjFmMmKT6puWe5HF2gWm6rkEWovXfA6zmuhfzD",
  "key43": "SZAoEcUhRqjJS3zT3r9E6jEPLw33ATAuEH28Q6T2cfq377AEdi8XGpT1oVZg8FPq5a1NWCA8PxStbvxs2iWC5sd",
  "key44": "2E35KHPYzk7GbVmrscrtUp5mggAbpEPFdErRuXjnK4oRQDdvsQMnWFDsJRQaGKrEkm8xPDBWcFy3EVourYRrD5Cf",
  "key45": "2RS3cuFzSPmCgNcX1pjt2RghySmnakQKfhkBskHTAeJdeu3taXp92b8EBe3jg6ZhATvLcNmz57KpQvgeJykjopbY",
  "key46": "3HXR8MF5ogWKMohjZLbEg4YqsYcCvGYSusbkAwsWYMBipLC6zpq1ZY5TVKcb1NFM5LwUosexp11zfoHWP1BVinwp",
  "key47": "5ho2efvRwLxTt3Rs1BdNEeoT1jq7MS9Sj15638NFdFAfqAiGtF6RFVU585FSyV7Udxfmo9dCdejwVj6VYHvzau3b"
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
