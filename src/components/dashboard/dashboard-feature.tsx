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
    "5qGtwPrBHrPFpiVHJL4cBbpfiZUduuHzdLL53PBKMicN2VtvNHeDQHd4XVSWasttWKyvUbghqptzHfqKdVtAQsBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyk4GHxUPUYkdHrDWcNxFM9XcxnQ1chs29pUuwNyt5Zsvynt5r8eq1rPVDakobtZ5De3EbfWW6tn9xLEsPWYkuf",
  "key1": "2XBkWDjaVj11omL5ZzpFizrtgtdUL8o9Zod6UjrkKF1gukYAoaiKpkD67GaWZuwMiMUKnPPkPtfjDFJo7F8hLzY",
  "key2": "5xa8snDzX74dgLNRo9tA7Ua8EZ79U6SsjrA4eDxA8xeggdRc3s411CKp5znjnrVgcfdyCx5xZ8SDhHfWKqmQWxJR",
  "key3": "4uTt5et9uaUxaZDQsHp2dh7WJ3i1TBCwWp9smqKLNGCg1U8vDxV1QBRdFejFEq2xBhQQ1p4kxNpFzndt9NFaJFDn",
  "key4": "wtkE7mbBtdD4cLfznpXbTG1NkULyV5WrKVgvuYbgSDSA2FNCYoM42UCYFRqHm6P7SPpSNQ63w5tNqv5BJaEUnN6",
  "key5": "3uUe21MzZ1sTCmxSqMsPPkJor4f37eTdp2xZnWygxuD34tBpXFWNHbzJFtGN7HPdiJeDAsGug6pPBuACTLQ5GeV1",
  "key6": "nHAMjEqyThRyYzpBYUh684NAKxGXcfxuPTPfary1WWfXdT8njord5B7N9vtSYVa2VyGsdtBK4D1iEdEa7AKtZgW",
  "key7": "4ByVenQpbZPhdNyrxusg5Pwp56PAzjPT7LWg1zadzZ46dCYneD1diPH2y7w3QVzcdBams1X3GGq3XQ9JEfF4uVQV",
  "key8": "2HHDwAh9D5RtrMbVA1WMTGT8GQoRG5M9vAQCCvSHZgcRVEs3xM7yozqJPh7b65bv3TRFCMSKfn8kn5cpx6nyuY8X",
  "key9": "C4QcDTxGTXvxTv5CNHcWhKJ5awQvUTdvsUkSDzqxqtGqpXn7skjQVwgkNsH2t7o7a7sMNmXkemmhYrncfFVpgrg",
  "key10": "565i8N7ofYJVw44wPcfE3jKeemXHgLKdtoXVYAZJhr7Yihqar15KNEQjw6V6qPDrxURRnjQBwBdAfRPFWhcHnauo",
  "key11": "3EXD8Er9HAskN2NzKdasMKTCR9vBEiyG1149wZvaeLTpDzorTeBPqADPDx3A67TTBqeNVxZMrUpwJL6skvDvZMnB",
  "key12": "3mfbFcxZxV5ZXpSN8J8BAbTKcoNmhPFRe5vvb6kuxf6AAwVQgNvNof8VYkXs3eMF8oRbybHbBm53kHLAv55mFk5a",
  "key13": "4knLpwUCGZhpUoWQAZWg1N99ThJsWbRwGCbdieiL5mNHpRPxTrumh7rkareBwyScr3g35BwWVHkrLhVQntudfgVZ",
  "key14": "CmKatVcrfxfZfYnZ8dQNSPjUUeLhS2BUEFvErtvER9ADfiDJsa413GdsnbPAa1hbBmbkaEn8CkjYi76E9vmqNXT",
  "key15": "4E1wLekWpJVFRVNCL9QLkATUxuvgG2bMGUWD8yFdtBTHBEXHB4AiiWYtLCq1pJcWEKr7QJdfgspmTChf6Jm8YTaX",
  "key16": "3jVAKo3B6cA24ia3dxYeJGbFVrqYLLNHTgKmPWY69Uen2r5iDT2T5SG3UefyeMPTQQupKXfw2KRmfgxw8bNYCty",
  "key17": "4t1ExfwZTbqjJvGuZ1yUmRcXS7WUBsef2uYygLq9MyBSJdQqUczZeZs17qCBebzD13MoAde2R2YKHyCmyrXSvm1s",
  "key18": "5EGV2pcZcDZib3y2tTF9xxq3Vtg6MKoJcCmAUhYXRVGMy5nC3RqAWMYBvFYBbGBpmeGKYnk2KhXASAQkr6hYGeP",
  "key19": "5HET1q13ZGqtKWNsrzp17GgNCcv5NnzjCYyt1A6WThEgo8CQJsiyVbgqgJ45uuuzgYtT2UGCS1oRp6DT9KWnzq54",
  "key20": "4MQfzWVK9Y2F3Jd4ENdq8m2FQXKcWpptkBrPwLBhKwLuocuZgGd9S42gYF5dbcKFZTu3vhqi2MeVpty3bzUvuidZ",
  "key21": "65f23mkJthHqSz7oqz2qBHroBJMBFCdGm4wrGnGnkHTEjrVwgiJueJKoQq7a1TSmWUeLMH8K9bPh27GZKCHdMJpu",
  "key22": "4TSektuE8GruH8axUFoSKqCaa5mmTCTqDaKfZcmaWWLHgeKrbj6gPTCqTknkY9KV7Niyq1tD5u7B6ZsQQGetqFJ1",
  "key23": "3KnJ2uVyjf18XgasGPgLwzTXaQYDU1a4aQaiMyM1B5pWjEa6vADH3VYEKsrBEBhAgUfgRWK6Rqqy7CH9WiEojnD2",
  "key24": "25sSuc8odEEDjTmv5kkvxwnYo9fiwgJeyuy98E1VSwYjyfzjZy1hfmACgnqjXZbUzW9vogGDpR7zLZrh2NEmqaai",
  "key25": "Ryz2tJpfLMqw3DzGC9y56qmeqv6UC6UVpyQRYsgUvq453hdJ9DyT2xRzJwhTh6MxE5QgeXjt1ySbkrV1QPuYdAm",
  "key26": "43UBqq2ZGpe552mrMTg1YambydPBt8H1guyBTHRVJKW7CaJ9iBekMqZD1x9pz1pDDo5TtarqmJnhKw2Lqio9mKEQ",
  "key27": "22WVSPBtdwVGqxFzV7APMPvfEt7RXrSVAwXoaS6LnuaZwhdVCX2XkLXiq6VSuiWSdRZnaTUgtoJXZ5CzZAUxBYiX",
  "key28": "5rqzhTEs7GDEneYcBczbWcnN59UaGCzT4oiS16J7BnQwuCiJwTKCsTAzA2tYG9EzTC7YgqQism3ApWr4DXkk7pte",
  "key29": "3eMbuR93Wu9VYT73gGUL9ZMTRLDJvUSdimzVpoDRuxYnDhXsqmetpmxzBG3gmYgSA76BeWsKmVGq9uqivhHhAtTm",
  "key30": "577QZsYNhEX493jkX2WeA5w6zH6D4mDNei2Bd7KCdUkcRTgggGwXZaHnxa73KNKWN39me6dorZv9ag6Vmhej91j7",
  "key31": "3ZdBQYQgq4Sed1CSYGnosip1uXc1KreEneXiR2EiTvyAGLThMnZCALpTPf1ywNPLmKp8hQTgDagiKyY5hku53tVg",
  "key32": "3Y18phFnHKZ8eRB924Nj2SRM4hyUg9AuoYVg5eymukKP1ud5AishkxG5JHMuu82QJ2i6PdLtmxKM3G5b92Hgxq8t",
  "key33": "3UktUDx16ibhZkMGrzvD2jqrcdRgFo246bpxyHjBZ4H2EsuNRkEyFVCJTVcMqGY1PFnAEC6YX8ZUB9r1TCVBCUN3",
  "key34": "yDsr2HbuANAfEKsRtDDWoougdnRZnPCqstT3S1HUS8KMfT31rM5cxsQ51Vfo9AM8YT4zbp3zDKWwYsHJBUG1hqp",
  "key35": "uC3CmNyFaopiwy9M7paBeuBKkw82pBoo2ipxKCx5LkbjYTqMzK4DcjhzxQHKuvUcRJG3JoMxp3TKZURCWQZ1tjW",
  "key36": "5ZtKRRh9R51hn7u8UtHFkMTYxgCcVL7BYP2DiiCkK5G4AkahoTzwA8cdRyDuDEFvTG9JgWed7wy8N4YLSF5yr3HW",
  "key37": "2G3yP5ykke19gs7EgqeY73pYF1xmEBK1FCJjWSFW4u1Xtqd1AfwDibUSC9ED7sR8yuVdrfwPHZV4w4P5rpp9Hbcd"
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
