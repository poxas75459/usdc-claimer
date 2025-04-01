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
    "39A24ADq3f8BXM6KrWxi4HEuiBEVBKUtP4yu4W2wkhkvSSRW46e62sVYQ4iKY4fndZ6DPoE3Z7Dx5Vh1mNJhZJQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zazi4LYEeSSNDou1mLZq3QSwNtPFMcLXF4rKjfCo4wS6crWTjzvceZr5jbttigkD8xKoMbEe6Bo27kmNfv4rpt",
  "key1": "3Z463Q8QpyB1PSwKhfjUuAFe3iK9cR3jVMhVJgmtv2A6eE5xXoTU3emeXdK9FFsh71zm2XtNK2559e8qNcZBgtfL",
  "key2": "4bjoET1CJtCZ3HC41wtKjQTSm4f8Fazavu1fo3XurcxxNekZTnVAV52zfHagFbCUADXubSMQN5QUsQqfvhLu1yps",
  "key3": "5R6HxYYXCc8WLbh2yr2aHVZrNLB1KD1Rhshv7WggrDxwgYNcafdiFMfhna3EjYDPmyNx7U9Q9eABVKKmC2wASZpZ",
  "key4": "5Z7zHSQWZbvxq96y67ZdUPKFqcqQvu1n7xsP7cCJsh9rvGwnrdG3CTqLjQtboMmw612sUW7QG1ufMFSCzcZ41Zqj",
  "key5": "4yRx7d8ZmMMkTVA58fY9io7qmjAPJvVehnHv8Nc8qZnS8ahdE4ZinowRgHe7BHMovu8UNvQA9Uc6y92BGt7S6SF6",
  "key6": "5i8z8BMAgT24HNoB6E9VFavMBRG3FBzakyaWZ454ET6hi5DZPnmAyUghHQrPacSiq58q5GrgXcKvRXoHtdzcd56n",
  "key7": "4GJHGiJZkRBiNg3KRW3MN3HVrajB8C6RfTrEXvzcC14Xj4kNp7jMMLqRTG9MWrF5XwCrKUri26JNtWBerVyf2Lfz",
  "key8": "4aV7opwdZoSTVZnsyVxDBiaLBiSoWUfMZ4FtPBYwfJLx9GbitTePvTfEbJ9nUsoEV5V9g3KgGBhfMv2ejsMsUimX",
  "key9": "4iDLjrct7GEbXTuUcwa1x4QPFC2m62h8mT5Fnqung19ik1WmFSSKE8UY4feWtGKPmdhU1kfq6YmikC2ApzMh4yK6",
  "key10": "5SZKQ9tDW1Bon753YfcNNGE67yD1MbmR7u1aUmnztEmcLvscahPm4VvgNs6RLcvTH1b7qwVyizB8YUQaZxPTev2q",
  "key11": "3e5v9vU3U7WBFENFKGV3FZvEzn5tU28mReaTBANC8Dw2yhNnc7PXbHCeVV4NG6u2ZHAi5ADc9161KSU4rENQkd5H",
  "key12": "5LcWaTKyYybo7JKjzaZWx2VcsUx1Si81hkCUE8mEZa7baBBgw4ocfXY5eipEwBq4fkKFLtmCFPTJPGPxt4UCmp1z",
  "key13": "48EekkAPxRYykC9siZiLpSaKK2PKxcqbgSKsY8yXmixwLZweE6JuuskFCt2Hhn8ktTcMEhod82th3HzxUkv5hi33",
  "key14": "3TFvpD2USp93QKavdqVfRbhPWu8x67Hh3WaKU89WhSPij9HmD6o9sAYKWXF3oBsZTxZCXFH35pxAkDkhVeiPZhgC",
  "key15": "51H4VfdY8idDiGUwirTFfn6QNBCg9bVxfoQMpW6YVM6AVvrsEwL1BBACBivmCfJhUMTQhWeSH8sUUWKLDigCx2kK",
  "key16": "41gAeDGhzS4CK7jwKKkPAxqLH3BBhyNYDy9eAzGKjGPc83bxvWyizcPgaaSsPdZ1kqB2mmPhXwMq3nEuBD3z7YkE",
  "key17": "3Xf5KWQEsTnATRi9TRrywiBXxNeJFQbz7migNCvdoN12GP1AqkU4bhwfbZkMKBGd4qvLBDbS5tSnbSSKZ1K1tjfQ",
  "key18": "55osUjQrHL2qS3UL64PxXuNimCQ1tXeBzAvwLWme1FHr3YQ8EQWa5FKHqqjikqRJ5uVkKteLkaBTje9sEtQWkUhy",
  "key19": "4xJCM8Wp6opzPSH1hNgQuLhJhX6twjKHDVb2g3qhr9aL31E6KS1z3hq3B42yRQJ3t8qWrregybLX6XPchkh7KhsV",
  "key20": "4myG1UYKjbNpCrKWpiQyQmPpAVWM53C3S2bVABEv6kyPJeR77LXKQ88aYE2xeRy34u1K2KxuegpQEtqq1WkcipWL",
  "key21": "3GBVGQo4jdWPDtTC8nCBnvoB1H9dqqm75rJgk35ZYx7XkDwK4mncDFApo89YV2kVHP2ec8SB8WfX3Ge4Hce8kX1f",
  "key22": "2id9DzivWMytcQTJHfJxaCnZuqN2i1FW4WGeVvG9h5dhKWvvBzeFpSUgkJj2QpzikGfhgv6UpAZLBLTkS6h7DnFb",
  "key23": "3DgMaZTV8kyKC1pt3YNqmHedAfzUQN9vyjTHW77eWuv8sidU6jiCZmX578GXtyU8uHbUPBwnQ4GQxDY22y352MkU",
  "key24": "5MBYhSWAASm1xmgZ4MGMUTuJ3Tdx2KpU2ZZaLhLYz2wsuHJK1AoxUrMFEDWfasQ8pihWbmK4yb4gwakYQP5KxY9v",
  "key25": "2teYqDuv3R2EpRELbms6c9dVgdYEmo3oNzkZFEK45NzJsj2w3jXYdQBYLWsnEWDihW6xJsmsbuCLntJNVbmsj64V",
  "key26": "2cQ8KjDoaiTXW5zAcnLTgGSX1PsQo11288hP3VKbdkJJNZ1gpaAGugsLioCbFM2PQD1epksQikSRjvzUz1ftPoPs",
  "key27": "qay6GZj8RHGqoqevfsEctXYKNQK6mRqP7zimq3C6Wr9KvuUFFH9G6vd3Nnsg6gUg9mA3MWbb58KPqGrqARv49iU",
  "key28": "3yHeKXTPPAjC22p3nzVhCT7U97KEDXdny8tjdJE3y7n4pg1LztDqEET7c4m1fN9uX6Mbc6iTXbrbvUqAvHgC85k6",
  "key29": "5ymViSKk6JscFPPYZh4f6wYQoHGuwzAzSnh2TA1pFPTYHMWRRzMqGtEVASFXFhhYj8bmzwzqsSgaKuh9nMMUREPL",
  "key30": "2jzwkWDTsXtPzSVD6zoqM44jpCQyzQnnWRSnc2dKLuSZ1LPBVHLGuhnxvN76xDMBP5seYyXc7HGf9L5cXzYdop6a",
  "key31": "3nYpXUHXFB5xypCyW9rEY5FEdsuEzXH59XhkSnacmcbDEpyw2AJRojStEPCzHHVY3ztDr4wZjWDxuWkDLKjrjCep",
  "key32": "5M38328UKrmrYGHFuywadcTyGRRzRQrFp7dsDEaQ9booVKpgqqKijSW4w6S38HdpBmwrfS6sbE4Pv91ai1DtyxEA",
  "key33": "1PytPzAfQDDngUKFJc8BFi4e3sxc8XVhLSJVqYiTHRkiETVNahWi2ywxZt1jcNQ1XKwrBXVSv55Q7jaX8dhfop1",
  "key34": "mk33gCTsqrAbMWUHhvE1rGcSVxRDYGxoMpRTz3kTpNzv7oC4oWZNWERvggDU5LVAbN4XVTxyErXpLUzmwtQLeFT",
  "key35": "2UpHGBgjpNhhV6moEdp2C4TCV8txhuN475Pa4Xp2Kyy5dfJg6v5xDDqUZqxLaDMVCRer11WdvYHgDKt8rMCpASUz",
  "key36": "4D64B1UPjhLPWhWWvnB6owjyHYiqXpqk2mvreNrjQ1UZgoUZxuTrZszU52qvh9RYUYaGjnq9CeQ7rtXcNt3j74m2",
  "key37": "3wmsQqr7uR5Lf8dMrrBVxfpWwMHkKLDpjv7ffEF3aYjYEwMuxcxh88nFfuQQSWya8Sk87BW8fVCk7ME78kyt5dYn",
  "key38": "5h25g5ErJBZuGL7wXTXtKzx7Y48CkUdi18ymbik8b5vFrVgSGvh3AHSd63K6NZrGmSccuyGrz6jYp5dLCSoGBY1r",
  "key39": "4MmTfnNoWpj8zPgmCsP52QB6JfQRJzqe1QRwkrbxYqwt8vxsWnFBpc9rE2wpam6Tz9qvWUoWei35ca1UcNtPqvFY",
  "key40": "4bdqVDYaQd6XRN6bwSvqxRGq5uq1t2NUVndtAyeStBekShEiNTC5y3ZTcoZX1X28ChsTSWRKBeFmuTspzHGmaMC7",
  "key41": "33o8AjwXr6FWTe9XA4aQcSK7rx6d5YLuGuauxNraCV1e78g3KipNucLMLFgUM9ZEj9iicDYjKcXMpBAMqPUUGhef",
  "key42": "3hsraSAVmqAAEimrFcDitBchUdk2z4XWDMr5PUS8bKaxrXMJEQSMgprXkh3wCxGG6QyzxFWmk7u9YVKGisxHH8jY"
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
