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
    "5qJ2qoSSki9gimXZWeFHENgTnonZuLNZTEnDU64EPHo31DVTSmfgHUnGwNHKvL9G8nbt7MvPdLpMc3UpHDoRFRcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDCTS31P3f9w7qgvehNSjp12rsD2s5H73iaYWpLkxdqocYmwG6oLvnUSDawBYB6X2vG96pAQMz4pq3TeRtSFhtA",
  "key1": "5M7Dn3NednTXqLoD8CoABK1zrRF4s8fm9WYnC2bQ2vVsJquvmfQs1bXqmGMC35rVUMUF6kcbeukSBwwEchyCpPJY",
  "key2": "2omf9zz6F3o5mAysivr69ebWfGLX4WncJCzv2Jwbdb2iPHpuk3amHjumcQJd4SPMa7PCBn87MZZkdECzGhjpegzj",
  "key3": "PgaHwcd1VzR7mzDzFM221sxGXMz7BeVdHEMTbXNHKdobGpwqoLzgPSmfXJ6qdWrCppVv3g8BZz1ZGDr1rf92taC",
  "key4": "2us3MGCnJVuG5E6ayLKJCbQL6VjNhBH3BMGPhZYo4pbaDeTi7ux7rzqh6pqsya2ooXz3Ginv1uHXVmP523UJuoQS",
  "key5": "miFJP3BNhP2bqwZiiUzUGZvs1H4BXANaRR1PSfo694VtduSZ49jN95ezakn7JWwejRzqfGGM324RVjhThbL3UHf",
  "key6": "UDo8m6b7Avxu9jwbRrgxj6n8XAxhNthGurQt6C4vn34hmuvQPSGKBoQawCZDmQxZBuUtfkeiWV84madidpDhW6A",
  "key7": "9K7B4a4gHFK6M2VbK4qPU7ysQuHnZt9NoKRvrsgoxZ3c7j9ULkvYrh47WCEkAzpZBLQVB8JuWKLnd4Xy8Hed8ER",
  "key8": "3oq7Bj2UcJBKwcwrkVhbAWEKmWZQxErS2gyvJSRDhsksj7fur9fnNSLkdSnHakXn4yqDNChRuaXrevAGcrFVKDhf",
  "key9": "43LHJjwaKrJSL1cEVwjWXtVPjGFBUyCnnMLGR73hGoVAAEGkGvfnD5HpioCCTWATXRPUCoX6NHKoRw1BgxgEoWEB",
  "key10": "3AuBQapV6uFxv5j18GghQY11Y93WHhgTK5LU9hsQXhNoM8h1nzwqKiUzpYSTDCmqBtoSZYRwB7KPvGHoXCCDCsQR",
  "key11": "3zJb3Au9Erq2A9Cg4ckhGECr2MtwVyaketQ56SCGv3vUbxrUNgMBTGdkZrx6WqserL2ZUfPC27jVqJbafjV4j6bx",
  "key12": "5z16yMQh8ZhB6CQFZJesYhyhGG1BzYdPik8TMUkTQ1GrT1SgX51Aa8M9nua7B8SSh4XsuWG6TVPpxEsTWzSBjnMR",
  "key13": "WKytawBNgGY2NU9V7h3RQBRntBuYNCn1qC6obnRPgaVjpZkDr8x9s6t5akSJupQrFCc5AaUxnNuXH9JATPMo5vA",
  "key14": "wwgiWKS8RoSaX19xWf3SRxSn83e76t58EPtya7ZmQtyp5yNYb9evz9ccw1yeUUTXoEawMCqF3T1cf2hCB9QTTBo",
  "key15": "J5u6JejRBajWHRynmARrrLfeTpG1g7u94GZMdJx8WdAyjodSnBPb7vM6Mk3KQWoEaQujPDaEb5mm2yZfqFnLmgE",
  "key16": "3vgMBaC6yoCheAsj92Y8kr1m7foaNWbysy8gUhbnkH6KffUHPNf8PKeZu1ZPZHmmqZdvH9tqKRQEhMXcA7WFvGUS",
  "key17": "2GcqRhXXW421acxKSxu737EKhfi2DivcmLJ7yb8BZJdqVirMYdGeGfj38mNyrit7gWid5zTePmtgz8ffoZXNqTkj",
  "key18": "5BVtMRFdYqz2nkDTUM9HHBxCWptxD8KT4rWFLFjkqMcm33faFCa7d8hGugV3UZhjZRBT7eoi1MZSMNKDA6YGCQvp",
  "key19": "3S2jvLrDZivX1bamvLKdNZBDWg2hLBPTmNHQh7koujJx8nMnjAfvYS5jZLoPVn7JyXDpExNCLnH9wzW5RXzXNYyv",
  "key20": "wvVk5TxxJ8YKH991eT4sDUR6DSzUZxGE1UkYrX9c8BLYT3UJFrq16EXNb4SyRtLVSvnZvfkBUf6yd7RcLyDM3Yg",
  "key21": "uSqqMyc2fsfeiTbhNKTdgRbHr7NZzhv273yKaN8EmwKapmnTeiQx7TVmKB3q6qWvfnwpsHiCZtYX7ZC7MNiASiw",
  "key22": "fyUSfus1gSWfj2UFKPFY9bsUHE48Vj3B5LZns1zhWht3KPjj7iqGznAjC9pVe9fZMgdoJHAwHP85Djpp3B4iBSS",
  "key23": "4ZTiW7mRNbznjgj5pHxvnshVhRRdUdDvH4RjpDXfzVuTnvCNd86H2j2Uq4tVc93DYruVoiv9CgMk9nHJ1QddLg9V",
  "key24": "2rMq4VuRCSC4vuoShKYvRL8puEfz9JadCjC86E6WK94SCXzKj4pxhZmfMW4zcGHBoYACgJNYF78vCHY6qJMDrDRU",
  "key25": "H6KhChbxjvarzG7LXYDmRtwRQvRF4RdJ6oTRrExfaz1hTGXsH6jvtnqJSW7DfVxcqDDsESWERfd9mCcW4JxX4tx",
  "key26": "5uJw8vLYknPe8bm5iHEZTXhVShy81ixjeBZkndkZk72bCHYu8LxCLSbWzroB8bM7Lr8Hbr1EDK531ua6DiRBTUNa",
  "key27": "2FURfNtVEovPBDK5dHJpJoq6PKMYGDEN3RFNmMG44ybBb4NS4ZguE7d3HfHqM4ys29pRWiyD7HeiANvgp6TV5nfc",
  "key28": "3zR3TNPZPfBbmKCJLkvu8nJiZbKeFTUHXATiASkPW6Vmo9vFXUJM1LNmREpAKQjGY5XPUFEh6Dagay9p8W4PsShW",
  "key29": "4a4v6EKRWfg2WyqqJE7yGb7a9ZiqZMqSt4JyrHqWj6BVL8cXn173PA5p1EejJp7b4Qv1oTsu4FcRCE9hVZi4adaY",
  "key30": "5C2zNYBYfNTJj6Q2H6shSB5VoaV9i6QJvmsHYJweocCLUWb1hYNyZ6NcKVLfcRuTpSoukSfKdUbUoyoC6DJ5Fwz4",
  "key31": "wngtKXgu9FhM517T4iEAVygaX5tz6zDUa8wu2CkkhwCnURrHqTcGNEvT9nc2BXK2c4ssSddPK1iKjnguUyUAzQj",
  "key32": "4xXMcZidScqrXYgRfM2rcVdjm6ji5cuwRFa8ZUHC7AGRkeHriYRJdofsT8ifMwJDZxrkLd5R7S5aGuF6RsNeWxKj"
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
