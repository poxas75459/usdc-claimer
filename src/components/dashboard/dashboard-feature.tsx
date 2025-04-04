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
    "2heZR2j9R7RgTFsRyksxpxRW1JAMLTjC3zGHFWPv2MWBwfTmDGkyFCMZMF9wVwdnoS4ykB5tpGWtXiSAvN1AuRr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UySB75zwz6vhbJ3ieCm2Ti1mjNkBZj4SuNtaDcHxugVGYqYjqjLZCALR18RwRJxg2JnF6UXRPbLArN2UH3p11WU",
  "key1": "3iLuGgW2ktGYdamMVwWAEUBFybDbTVDbUYa2tgWGYhF2dxNfjJE63bZf22ZCcvCq799JvEz4yUBSPrQFYmPxczzG",
  "key2": "2jEZLHaX17t7NTr53hTwtPZGgnmaieFRd4GAxMkDmJjL24kvssCHSpbXe9tPYsg8W6ayo6obfcmxJe9XNWm4QKUX",
  "key3": "2d3Duv1y6FTcFqXLBhzZDhRQJL6cRzPHnrZiK1aozD791pvWtSqc5vRp9LSc4CPx66NTTxDMrFPFefwJ2E9AYvwD",
  "key4": "UVaRQBcp2JUq5Nhzc6jbqof3LUQGqiRkzWCM2uPkDiu6hZpWLoXejgRoKwebm4UDXGre6hbCRw9LqSJzzi1EViT",
  "key5": "47r527sTDCDTCjWVxTjNNVQgMFmZht3uDMPvB7APSDMfjXLEtZKJLNrMbjCW8eGvyGsxgWUwfXbKfsAGqCatxkk7",
  "key6": "3zux9CpSg43PcYoDCHocu5nisx7Aor86ni76DXFm9VMZcKQyjDiQftAYSDxFPYnrXcrKYWaQ8CHm4hThfpNP5Qw3",
  "key7": "2rZb5riTDFQ6mzRGjG3RmS5EEnVhySF2EbAG7bM9kg9n6hSxa2qUYTN9BcMtoaPratxJsFh9hHgA44XSrw7evqwd",
  "key8": "5UcS9NUPJeBibpjVpWSCgoV2wuptAxArD5sNm5SMxMMfCFhnuJv3KaFq3vXACqXvoFZgSSfLrFxfWr6o3787JgmW",
  "key9": "2NPVxjotYz2z6YX4Ji8piN4B3N3R6mBjRbMUwrgTrC8zF1QGiUomNZuuQMqPVgAoUEZ5irwNTvnHwQxuZbBTPC4p",
  "key10": "3P4YsKWg8o21oWCqYKN7GH93p84thwGsvMCwrFY4JHwcQMRRBqQGS8V4iTVVZvz3T56sBkpyZeAmcbbULMZ9CWPj",
  "key11": "3TLfnThPWXMqb8p3aAgNozUvFhYVPiRoxR8XAULkHz7X2rzPXWrrw4mdyMfXWK4V6N5mstjQ4CwvFQe72eziiQ8x",
  "key12": "5KjM2nd9vqGH6P9HqZ5vS8CQPqyxFgd6eSF54mzz3Lo5U9qeEh2uQEZuthcbrhWc36inTKBMpZnvici13o6AgRis",
  "key13": "4zfzi8y7GnfogsF1RWePQnm5rqzGW5UHVmso14oQWUyHwDL4WtSsLuhuLrE2mtbXos84atLndFksrA696mNZaBjF",
  "key14": "4CUJiHYyQuXnsUpchKjjSC3E11anvqBWijKNCZ13cjHoW5JbzmaT9caKy8rCfyTJ8VRqQp6obs7fCuE98gomhsjp",
  "key15": "2LYHXKmsvYMvutqzz7xNwjMC8HFWAAWTHB9Uz59pjeUf2ouZphD8fPaGLHGvaS1jYju5PgkmuqKiZzojkwY4y9uk",
  "key16": "3ttGgj2nph3Z6y3n2uqaDhFPQjN24L8PuokyhQK3BkZ51PbcieP9DDK9Ly4PCnpA9QeLa4KF3mAgb6gtZ9M522Uo",
  "key17": "9bFJCc9WBtaPrhchSPyNb9VXHJqC682nTnmz3tt88q5chSBv6uxEg3rS5Akk9zQX7N3mKiRRYdPqbVnkq2Boz6d",
  "key18": "4Mc5yfUWnc4k6mnNUkNPA9muFPAFeoRd6G7sCnPParhyqqM837z3gTEkeXKF6jBo7fsUv7Vc8c6hmbN5z7yAN7DZ",
  "key19": "2HqsGwuf7WhkA5pjBUJHPd8Md5CNyDjLLaPD87e5BMUzm68BamKHfKiQeiza8ijxBbyzLSUhZbwu6TrLhf1ieUSr",
  "key20": "3Qp3KJPyEBhLMaz7Yq6caXkk9nmKvVYHu8pzamcdyzaDWrZKiE9qpkmYzPDcVfXqpQDP2awmt4sJTyfpSRzvA9nA",
  "key21": "4BfBxPWwxJJr4X8TMxE4tbVxSaY2NntwozkU8mF291GBdM9SQKangfcmTctKVa4wsruXfGejmMp8scNWW86DgXaM",
  "key22": "DUHm9U62kAfeMsEjC1PTtFbiM9fFAnZcjS3JzNTRndZkg3h8VJEnAyvp2WjBPEUHoGwyG62QX9grL3SHLaYjFGU",
  "key23": "5nZ81TFUeyC9V9AAnj6CswLVEz4cT2QzYZD1YcHo2r4zcYoJgtQs9uU4KDrXtMG3fSka6qmCWUgb9PyoFXyb769D",
  "key24": "3zwmFDyY3da6vMYFVGKkUZbeaZroiYYiqynTZvLV2CVbbu4JXonh8Lqg5CvUgucySa4DztTSw69rWxMvjwwz1NG7",
  "key25": "2kJ17sRLyXxRfWAjsTdrYhr9eo6oPjk1VLco8Tijwx63R2UnQ1DpBwTEKPh4uaWEuW5bj3euh5Fj8YGs15rKFhAQ",
  "key26": "2o6B6QYCWdQVUKPBER4RdJqJvbhZJ1hpnnoy4gYgnQnATqK7wZ8s8jnZgxBK3PLkKLshSLs7xHra6gyanbxFgGxT",
  "key27": "4rFTBEUkkDY7PDadYKQuRXkzXqEx9ewbc13hxna8u2grsypw1bPaMbxz6Rv6gHZziHvYZz3CDQ5jFjCtBfLgaMdb",
  "key28": "5wU5q73RVefpt6Uko5BmyxPXLo6XRZgXnA5FaHUdUAA8NbdGNTe1cMjmh9HmBsCYWr2Cg5gUgR1yuVQE5WUvWQ2d",
  "key29": "4ViZAHrNifXozw8EbnZGE6q7dP9YYfBYezRtzZE3R4TvcYiqh1HzbLAHphXeNHLCZLdJx6BzrRqmB7faDNDhn5Pb",
  "key30": "58Cwb3HSztEiTMBvFCWdzqLmUg1twYzgbuQasE6W6CAjiLanJ3qVN7YZrzRYFd54HsNRc1t8UgSbE5M48cHPCAv1",
  "key31": "5A4Q8pDW84CaGnjRGTv2z7SjNqnskiudhgRS7j93bHGPMG6oxDuwd11SgqMoUFDbkSWwWyYAMAFesYGmCvrujYqL",
  "key32": "2ZhKWDJyByhpTytm3Z6nSS4PXYmpvKz3MB7dBqwG9W4oNmfo3XoLZ8HdejHhjWxdnmENupmETdD86njQUJ6UqkmK",
  "key33": "356oi7911ZPsMcUqFSfB2tbmUHhEXV3y2DSnNqSfBcXovcw94UiVsF5kEgUTBZcW4rZJnEQ75Fyyj26uD9e45ztG",
  "key34": "4JMxWff4ZxoGb6izDk2NVuPWnkhZwabfJ8xiwiKfRysSd3m84xsKydGt9qXv24Wz9dffBdWKzXNedmuNmQ2Urgye",
  "key35": "2bMxWZfGtXwpg6qMcXaxiY6c64K8d5EBEsDYazmRSDwoSnNyxa22hYvSfM6bkb9hi2s5kNC4rkYNWyp5pBMxy2kt",
  "key36": "2NYCbbbZhKH7Kyi5qPm5yzvLR7QU3yxncTAsujX23tTze34rkksmFW4414yJmbQYMFAFTDWyzgtFUvMv4rTMeSXB",
  "key37": "41uedy52ccyvaGAJLvjECTk6J9hnxF81J9BYpNB4j2V5r9vjkf95NB3JpyHj7adr7KhF9d6tvaUkwAjhEifVhYqj",
  "key38": "5G3j32utBkesifmNCXpf5MeN4xzF5G9M89LXNeo8N5j92jUdjHD2qekQZZ6AvwoUtH8cJ9dtAZe33RAf7RauP2dd",
  "key39": "HXhjXTLt2mzXhMSoM9Qk5u29fDDBQvnuChq7yiDPunj2m2oXp1Wut6Yzx4oeBCtpqLHwk8zuimUJD58UE9MDWyz",
  "key40": "3kPrpF5eW8bMtdzRX7CFxyg1kisJj7Ba5bYwTPBAXqkGQQi8motPrjernfJbFgwn8hzEnnkeJioz5MD4ZMqFBWG8"
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
