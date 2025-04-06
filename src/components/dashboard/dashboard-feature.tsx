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
    "2rdJTnT26fUKVLuzbRGkUAL2957SrZudikdgZzaGiUDfzgwpfD9ShVHmfZEPB8ugCJtWVaP1xs2nDTnCykyqdXgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cwo3X4x22xEinfkfgyrSXcJydNmwys5LAxUnRYzsygF25iqCJ9xy2Y5nA8BubcdrFT1PSD4YR1DBf1sCe41Rvi",
  "key1": "kK6UWoC7acHP1CmiXMQrG6qEbuDPywjxYumN4Rz7FfDmcLnuMxpXya2jbnGMrKmzwwMENjuxX8okENdB9vhqNKw",
  "key2": "2McLzkcntmSMPzTLHkPvWHdopLupMmztsSgz1M59oXWzeGmunFHRYRMtmvNA7MzTTFSAamx4cSDvPPkiQA3rTLzg",
  "key3": "3YaabjfB6AiJ9fp7FvESuX8edMevws1QRaLDafprgKknLUpDScg1Uz67SjpWaV682zEHsnkTucMG3eC4BC33YgC1",
  "key4": "Z96DRaLpmnaHxxRuRPRxehub9Fuy5VxAmPyQsUyv4WtHq4Lazcj6DF4KsH8ZCqHEqgNJhaGxQMmXithX2aGTUUg",
  "key5": "1mRRC2jkmZ4TjWmGa3gHiq9F7yjb7BwT2RpgQjn5uA8XfEsrQoSGiwKuRyJRKSrJxdQauapvrUfBgEtjqoomUBf",
  "key6": "3efG8Ct9d8T8ngnw3BTEQgMtuRmZNJyv1yZiPLbS9VisipuLYFQDRRMGUeGMNS5BLe3P54YjR9MD68DTrJXCfdBH",
  "key7": "22fgU3LavktvVtKDXoJu2amfNKV9wZyByoiQUmVrmSi9SDczUS7iDxGsUaZJ8QpE3SunUpBvVEc4rtpro6k5an4o",
  "key8": "47zQgTSThSrXCxYUNZimJsTMTUUbvoAi8VXdvjWcyTzQdLUYfyB7YDZNE9QovoJ2AmdL8ZdAotJWXtfFwwU2H8w2",
  "key9": "2wUCjQMz2XyTDn1Z2nWP1gnSBfc3TAwyJ7DTYwCJVeC8ZW1fsdN89mtesJTpoKYyYbimhjFn94J5uVgWJZ3rdJXo",
  "key10": "8YME11Uvcf6aBLCGhW1kcUTyhww7DqTP81CYC4Hi7SeUYRsj5NJD1AFpoAah5c2EESrDNmXkJDkZeNkecdMAeaZ",
  "key11": "2reiuyhYS3xJyHYRzM3rMXMVSz2oKb84k6BXJao65mbWxHQxmxPr6EXFAMvrM4sPpSvEiubaFDSbe4Xe3xXHcMDv",
  "key12": "4d7e6NEwAzG7nVEy4x15FNrXgPXwkMJ1tqRxCbgs1LobYNWhVdbazPK31yZwSLD3anAPGevg4dqnH4WjSc2qB9XK",
  "key13": "4RUaPef1aZ7c1aFirT5S7r67mjQxcYqq4hAMnA7GyrUEmJAdJ3NnNv6RyTtzM7Z11Lg6jR4wPfPgjpqUeEhmuRB3",
  "key14": "4UBYaARik3gPA5SV8YDq59Sk4ytioE1TibX7bW5u2HJShN13YNzCXLh147c8KRHz89U6sVvvxFEeVjV4WYMefdhB",
  "key15": "3Hr5UsfXeDchd4WJWUBFk7NT6dgXUsutT7amXBcxoUPqZnJnVGpqdY1Ny566bxmyzztDFCHVs4Lf9e81rLrzkwZG",
  "key16": "4hLyGoF8NAFZk6feuv9Eq9SaVgbL8U5GZ2UT6ZSjZyjiezjPP8XvH5Vgko91P3MT6aGD9PMW6ztDrXLQNKw13U8",
  "key17": "zvbW7QyecbfGvMLKUERC1fdVDN38i3Su6cwuqny2cxsTpbxfG5ML6T1vXCpb29J644sh5ovsuUAC6rUNLZFX29X",
  "key18": "5QdidKaJad1ki9AVWzC7CxwTExqZUUJFhnLbbTpBQBtZBmUcKxUEvfQPDiuSN36vPkK1H2gBZo9EWg4u5GksRjXn",
  "key19": "4Jd1W5xAitunk4hkApgGF7Ng7ngUKFRHrx2Y7KV6sdYH3Ra1Qp3yoGNcJCUaqHUftmAfNpraTF5vdH3sBsGFpg8S",
  "key20": "45i2iocCKBGxZcmdeHwG6m2iyF4mq7fe1Vwb9adWzkgzeo5ixoq6DAqpsasE4S9YFjCVHSCHCcARvcUbJTqax6HC",
  "key21": "3QxhWef9xRpekmfTFy4uNZ9AKhLLF8JZuhSQE8mapPaUSwQfEQ2izzrLsK3GbD611vFdmWc3ZC96pdMgus9GoiFj",
  "key22": "2yeCX6iJTvdJotFMMXsz75jRhoxpG9UEc7YuJQSiWehGuJfUqfJhf7dK87ej9q8dXbJfA2ynLYyc621dqdnbKbDr",
  "key23": "2ixVuRHd3Qockjv9NL8u9d2uXQtAyXt1AiYEPdVvcngAmL4GJsGMkLXeKUHggfsjj3HM8CKs8P2fCBhEx9MQsdYt",
  "key24": "2Vog6djQmuYjjWahX3TPWgL7LYUBQNwdaY9UH1gfdsU6spdn91m3PdwUA5RvtPiDL9dnkG6fjiRfstanft3DjUcW",
  "key25": "3QaeXF6XQN3zUpPmadb59XHq67oA8EbNK58YccLpSW4FCniN6pk8uHwaRQqKtxnHdg1dDQs1GPqVnkw7GYinhxHt",
  "key26": "3PYx83G424AhmUitPDHf9UdsxGH6EB9BCn9N4aMNkevCCAmXkkgEKnLQwAmHu7NjCfp4HAsAG9tcueoa36ghvDvC",
  "key27": "5R2wk1VmnMmiSrnhe5fpMvyHqD8hFtiwgotxL7pRzTFK6xtkYqFahtbtiQySMZqt2C6xHDUhxfvzS3uQy4DniR73",
  "key28": "4dsYC1im98ZuesE2xRfkRvt6p2YnuAmyoX5c8KtZALitCWjjYyTHF4tEJ8YNiVUwKdaY6LsEQ2bepS6rd4n4qz3e",
  "key29": "4uBx42Qw32rfdktKUBEsFe6UN4S7ZTL2VM9qutkVpi5cY9bGgJAEBBJEXaxvrmNYiAPDHkLvswUgtK75vBhArVSh",
  "key30": "3FQ92ccstTDux1RLx5ZoUwRWAGL9BotdR6iae8nqsRDGK6Pv4CDDVrJ8MTNCtFmrCAMmpuT2ogvn5xsBtQuppbpo",
  "key31": "2c8PZDipwuxVVBSoRR1zPkEc6iDjdw7HXYbUL6z851mwPUafDR2GJMcxjXRJeo6bQ8XYw56PtuU2grMstMX5uAUS",
  "key32": "2s5pfd7yzxkZh8RcYTCf9vkxbsdxKmXZEJDoNFvAceY8gCVnWxTiUW6LNWxiGVs7JYMiBaNB9xTc2sWyHh9twHvK",
  "key33": "LDBofULNixZzgyzdzu9kYnHLLENGMkvRc7iu2vCAqPVScawEdHtR6VNGYwJxi8RigHxFoPVNaXw5whXbAbJN2zv",
  "key34": "G9nXuPZBnkUjChkTDzdQWsZ8m8X1JA5KD96uZKb5bsz9iYgrGNpwM6pDR6xvZnXpsqgnyksm7j6uhSBArEUCiRF",
  "key35": "2YXrN7xNDBhLsUuBuBENEZfr9svXnTZZiyG4sdax3gVfKjCVGwJmnfq8Msm1bQZ3ysotxYb27V9aiha3EkmWR37f",
  "key36": "3WsxE8ctb4tZZeE6eTSAHQthbSSXYgfwH7euBmhCRFJsrMboMYKq37Uj4UcygqQ4GN3QmWphH8i3RvUczhgdx6ZT",
  "key37": "38aqkYFWbDFF9qoR1zbEpL2kkK792ErX8xFr21aoEkTSYJuYhko4ARm8AgL2nPRSN3oEF69pWJayje39yzPV8x69",
  "key38": "8tAGaaqNQTq7iME66GKV35S76sTejgoKE9mPTR9mrtr91qFum7HGdH4Z3qJdbg8mrQBMMAfUE6dZe92oanXVJZG",
  "key39": "4VDGZNxaDJV8KPzoginHGpxHpuP5GS7XaBaKhqEPVTJzsS3bCLnx9cmr8gR2heRv5vd37jhLUYKxk4t4TpJkKR2T",
  "key40": "F469GMfyDNcjLtd3YZ7gpfS4jRYzi9D8Nat1sFzpkeC43J3FMxzhUoUs84ySJuN7ajv7GxHdpWkHLhoEBQo2Gv5",
  "key41": "3jFTWdrq5DExrmSwLxhMBpMEBy9C5hmGnt1wRd4M87oBt87snAVed2xwpDuK97uGy5Rd1DJTJdhXzKbqxbaCNE4C",
  "key42": "5kofeMFbZaqfrrafTh8nkZnB4tpEMYRSLQv1UiKxU5rRWGn3AQ8TjuSar1aiMYVcmzhwRh7FRzcXpQeosFiRD8kk",
  "key43": "4gGxvqSXmCiPs1yNp2UGFeLxwK2rbrSGA9FM2eDNg7CeNGh5BGYwdVhVKcXdcbtsv8Guyt9aEh9ftRdDpsTkZupX",
  "key44": "4R6rrANfo7RD2Sj6z1u9zywGz2hP3XK4hpRAA7TsaCnUTKXUTiNkRYPMB1MtiFb6ZjCqkjcig5aKGGCACz2mRJLu",
  "key45": "61YhoJrmNmVNe1Mp1jnGWfSyoBDMwL2EgsvobLnFVi3qjeGgLMQCgv4eD31A3eaxvvZ5o6ThUp6mvZdJdyuKSChE",
  "key46": "3h6j4zASPzrRrc6eLQiL2c6HXD7fRLdDD2YtrREFj7TWDcc9r78fVvHtZTzdBeL1Ei37zHEJxKaf5j8CF7MhgyS",
  "key47": "3DakmGmYP7MC5rkkZ4DdZLVsv2AabEiD36TRfwHmfS4fXkAQwTBGUwJjQCawPkbXht7MMCvsF2sfkCKNQBw8H3bS",
  "key48": "5qVBCrzRMtVQKWNvbWWN9LjpHpDFfUACW6gZJytxGcXnoSkQbmzQ2bug1JSRT4A4KweqDgjhwCU9HfNB2LzcHDJJ",
  "key49": "5ibB3mmvDp8GFnYyFEgsXtxJjkxpWdsd8dEAA6wY3rtvboJqzJ4U3BSynGEo8WXVsBmtk54MvPybFWxEjqKUfAHq"
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
