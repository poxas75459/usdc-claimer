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
    "48qxJ6tZdTUmy7jJm9ZXbLrjYpUmjntrAu1pEL9FFBXK8TZuL91N7C4HEkDEdWFwveEzRZEXT6rdb5FC2xqCmWUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFaxxEoqdpiRKKF816PiLiuz3wfG5wFUpSWoL3RWPnQZY5N91CPdwRAqgggDW2FvAmT38YPBNAXdmZ8wvwXzGs9",
  "key1": "5sAvhaif1stHxZxfUxWF6fyB5wHVqUVbPzJVMydGGX73boFUCjcxnuU3fSkUaxVbzxvAbaeRz8yYgVdGApGEcAmx",
  "key2": "3STzT3Ea643cupXsXLhxcbgMFcu14ZFk4UzRntpzfvAo45Rv2a4tLhavMAcEZZzMqz4ZkrYuL28gTNAqY3wK8QqJ",
  "key3": "3vPWDoNt5RfMRy2RBHzcpZ7kVbkRgz4jB66Jvxxh3Ajs7Zx1jcp348bzYzEb1Y1chreKsthxpBDpCsTroXL5MJrt",
  "key4": "4vqF4CkEneXhT6vWC4gdA3EkG4cigMuqiSd8D11Nbx64Ch6Je1HetXVccLQ9EYdoM21zx7m8GmXRyH5WSD8pJYQH",
  "key5": "3qoKRGc8t4euTJXBQRqn6fmaRFCuQqyM6Vw5VAvfMVQZ5RVBJ6CfyHJyQFSGEnasP7aVK8g3Qx6Fsy1uYXAg3W35",
  "key6": "riLuyASu7TBL9x5dZFEzkByATTWyYEBLMJxZh123KY1z3VH3UZ2ZPooPXVrGfWSBFXj71yZQqfWnXXNtiTVk1aH",
  "key7": "2AwU665CXaj8uMabrQUM7mjmXseGnEaFhzW3QkSpCJYpRony6ETfQd5u8ieMTzk9e39Yv6URgpxNuFTEWaaMkpfo",
  "key8": "3D3q6SdR7XUKou9YiAAUw3GJqqNKLKDGHe3x8KZYSAL2knUjsefLVDdNfozML6F9AqqjWf8JLVFWs9L1AsZmPhX4",
  "key9": "5nLcegsqViEq3PfUcs9DqoFRTHk7wXasd4K7QknK5RE6JhU7GgMNU2j5DAobXxVeUxPLiADAh1zmsB5PdEkALjHe",
  "key10": "3Lhcg3fQHcNoo9bdXUSzmwUVw13hr82KN3X4cYJfXe9HvkrRkAGcjBZnEVaXUWgGLmemRnSJScf6ECVVLVHv2HRa",
  "key11": "1JV7UsL9qVYSHaPXtNg39gpCFporLWMK34veSkVtk8xGff9RBtwaDrvZHqL2eWcMj9VMhCZpV3twmUZoku8xYwq",
  "key12": "4sXdZqiZrVc7Vi8S7cx8U6Dznz9bzKT8YzViCo4dGHzwLq6xa3r2xZSswjhM9zKR2NA8j2NsCzgKAwnN46ktdaBs",
  "key13": "53s4HVZgeray1yZqBezFRpsfchcq5bJ513nkgrEQzWPu8xHgVGpkgAFwXx365YQ21ipnBCfBmvqTxPLht3f3fzYm",
  "key14": "3ymLwcD51Z5iS5LK5zKL1SwmJT791ZPVmMZfi54jH9ea3EFct2ECaZvaF87P7qL96aYqTp1bXRp4bFuzNgiwEd4N",
  "key15": "5HYAbaTu7C4qrqrAoiTShH5HNkJn6bCyGRYankKQw4NFASeEtP89MCP8A3oEDgjiHCMEmmEwXvdkwKTxJGrq8xWc",
  "key16": "4j7tUicn3pHxtuVyG8dKaBgw5sQUZ1Gk13gnjqQc8YhqSZ8RUyKC7fqsB8d3HnX3bdi6TvukRQmak6GUtEvwPugC",
  "key17": "5bKGQCHNqhX4kGYc8HrCJ4TFrbiwq1Y6rMVQB23BVCMF7ZRnpTNATqM7VLsq7mcZW6LgqJKWLp5oQsccQVbqHcnU",
  "key18": "2LBGAeTTPW4zNozDNww58fMJUwa9yZpYuv7mjKYLeFw7YG4gz6AH1iNkbmouoHT9rx3EyJ5Xss3oV6p99jXPXhvP",
  "key19": "3seu5DdaGSgZWBJDk4pr4PDbP7kDBbZvjhWy81ch1qMaTuDWS46nUF5hJhzkUtpifmHdVg5dnDPdaJEYVEaKd9kY",
  "key20": "4yAef8hNuZnPrnPPaWZFJQ7xQ6jhEN2G1fHFbn8ak1E1xtohXNirKwo2bDkhZBR7nMziM8V9BWX71VgMbUWT6MtB",
  "key21": "4aRoBqTdiKSFDaAFgim9m5DYzntcjadzRJxue6cPKNXAUwB5jctpWRqDXVFsAxDXMHQBn8RUoV3BhAs9Mqx7W8mm",
  "key22": "3ZTgdiAFF4cdRUc2kSeSt2UumxELXUJcYS78rEw3Ax5r6LpQK9ZZHUdKJ36bg5hk2hPggftogkJ9z8ZE7MmbAaiq",
  "key23": "5UFwyKR7ra7NK2gH7w3x6g7uNzmP7Rw9hVVhUNH2jSqEJZTt2QBJd3zAXeXLfVZ1hQWYVte4Q3QQqXgsP61uGLtX",
  "key24": "3JUdMmNqrRjwCaJT9CaSGLAL8hquuXfwvQMJA33U62CM5WXmfmksc9VE9FUBVimWNsyKzHwxCxe3ZWskVTTpwQTm",
  "key25": "49usWJmuPaGcHo83w7Q4e97x11KEZvxv2YXiA6pLSduGhi2TAEnnQ1z2EvfNZf2yXutPYiPWZr5JhraiwTL1n3Tb",
  "key26": "3EL1PwD2K24Fbwhqrof4ohQtSZyoRGSRJFJXonMhTQQrhGTF71a8GS1AsBtpZMHnnJnnBmMuCS4g7a4TEL7HPdpa",
  "key27": "5vqTttzotaymZ5YAEULckzUhV6AdxNCMbvmnuh3yhLfKV9afRAJGUd7NKSTfvhzxkVQVVyMD6UGgSVF3JPBPg3jr",
  "key28": "4DBkMC8jyHzMXwpAvkc86KLR3iWXGZWRhNvo8zMiqNSAYD2gE1RzjGcnPGBoUfYYnmA8xig9D7SGhjKmmHLo3i4m",
  "key29": "4xkgvzNBXv2ypW9dv824WC49qz2knAFeZaod36L5FyvKoHEAzpYSFRU5qy3HSWdjiFuBLfJ9gY4kXWLPudGhVv9Q",
  "key30": "2byWEx6h2fRsJzSjZQgWUkNsvzNfwVDA5e8tVgbYZvnsFoDNeZMLDMH5rmV7KiPCDB8GQduZ2m5PrTNNj2apZtqV",
  "key31": "23PhtcyLvrmwuqUJipttkCt8vhTmSK5vnDBDwrtrsbdzsWQcSNZ5NJsndc8KvsESrPUDgebvTgou8pKeV9t6qbgm",
  "key32": "3BFDtpbrjDwhQiNuDkEPTwSZgZ5WpL8LSkyuipz8n3NAcc4RREQ1fq1MhwJSQaHQALDczZTthnroz5x4FhsDQhQs",
  "key33": "4XQBpQJ8sx8UczeRPPUZUPZ2GzBCDVYjgaVWeA4MvrK2qUwGqxFakS8sh1mnysGZrwHiyr2rTn5RectWNyQtfvTE",
  "key34": "4enggihfo3pvT8XbjLCNwwGrh5CPJ94w1dwYHsiu1FUx4jox86a7Z3nS1iK4Bga5q9jrvvJCqPsieV3yqrfiPJA6",
  "key35": "2nvyu9nAscyugJqJz1cHUgqrvf6S2ij41kwN9CqYyudfDh6f9pkaY2NjP3Hm2GRhtHnqthyEkJK4JQSZ24pTJymE",
  "key36": "63oHCdTC361Xd1PcFycEe49oVnHvuVqzsQ35v9ywTRuK2dTtkGLAgeidKhM1b7smsZbAY26FHfLVhtLgUqaVd1QB",
  "key37": "5qWZBMafkzvnfBKumftqbcsr8bm3UBTiPJ9UXsrKt2yk3AaZAB2QundZY31zedmbfXGkmg7RK5vcc9sGmmCXyxc9",
  "key38": "3tzvARoZmWhsmYzErfxgfwcT3LNwi2apaA2cgXjypSDQvThgYjTY8r2KWTE9jgBjbh8eyhFM7SFuyajg32ZgYves",
  "key39": "2k3q1gNcNV5regQ3Nu4hRvVoK6iC4EuRmZwZJmWEjUeqn4VsazqiKYtpWrBWNneDYq8aPhAUCMK6HNGS6PTUB9N4",
  "key40": "54h8xvsJDGsSvGdB1hw49nQuAzUSE3uZzX2u25VUtFByoXthkKwYK5A77pC4xrfrVkdQAyLyaws2g9dLd2Fz7Nne",
  "key41": "251ZJDq4316gk1hAaMN632Z2jAxygLqdwYdN1C6kNbPGqBQB95u6dpwHEprVK5dVLA4z8GB3bB9XW8V8aCy1jEne",
  "key42": "23jKe9oySvJzccMRyNJBvvb7D6vxZLpyHnfyNLoLwyVEwMoBfnnGKWMj4FpXETGQGExEQX6ryrqr9bsD5HAKjrjp",
  "key43": "n47L18z8SdWcKq5EPDpE1hmocAWuckyeSHJ5swgkaeT5u3r2ymVgHbh41ksdUqTQAyor1aDQHFG2g9ECW92Qk1k",
  "key44": "5hu61tZi4X9Eakhc48ZG9u8aP5UvLNwaZs4679FRLefRszFoUwfSpr3XSVARXuWmr2uRmBCaC6rSHDBGLzcHV7Kx"
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
