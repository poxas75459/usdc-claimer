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
    "5NLHjw6ju2QkoMGM2hAHhxNStNAQXUTgYZ5k41FTeZSfrZfGVpHuTtYX8ykrug47YXcsKasztGpGLMfFGEvZytBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5Z5i8ig93GNrsdfXs6DUP6rYjEwqz5Vy6CRAb4twAwBQWXiciKTwaHC8x9SoXngCKvhLH2SgnZtYMHNaryhs5i",
  "key1": "21yfz61qS2khTyFr3J9X5TWV8UC83b6mDAyUDWrvKdQp8PsYXxSoqZpEszikGikfTenvezhSrLcRiPaQjyMnEgrm",
  "key2": "4GZ1dAEcdZbuCWnGJFv1mpxaHbnnqsxUtRwLzwKQQ6Z56x6eg8eKi4ULqb9wER5aiUMh4hqLwxztsazWEH74RKPw",
  "key3": "28LZasCKSS7WBijdsmPvN6YxCQjnwH3x7DhZh91sBsY3zCZZSLsWnJcGTv9MBpKnVKVNEQK5GgGzsUveCSm7mdkQ",
  "key4": "29qwL5wSJJbPnaX1NLfyDm3arE9QfynAnW8UfPbiHgFyf64H87XzrHXNah59rrm9qjYGVmuzSiYHQnPjjQUWYWiX",
  "key5": "53HbWCyhmnGPfQQoTtYw6om7UPmkogLrPtXNAPzS5by56qLxmW1kx6TA9Hpq6vPWCnGTGvZNQBhKkAUyvYvgjLgv",
  "key6": "4MRLVrs8vH3NoLZzyP9eUQ7prUwWfqyVbh1o1qvfHWmNUSAAbpk5YZLMfRM179iByrCpem986UAEzpscJr45VTBr",
  "key7": "5Mn3THkbTGSwaazhGdr6e2sPP9BTfUpPUgJodESPc1ZuvxSrMtM9J5CPtWqDxdt2yusgVu53nLu4zsf7wQi6tV2p",
  "key8": "RkSdSvNh2SriGoKVzUVGUsT25jjRwQcHAPZ6iFBmdPnY88avs9Jjzi7CFdk28PdWLWSLpyK3TfNDpVA5p1snkb3",
  "key9": "5HsK5B5QhgARJrVQVDvPFDjLvMUsvx7zukkm2VpexykV99vtbQBNWZcppMWMTwBuzKFX9PqkzkDAanj1QszVyLLD",
  "key10": "4czL1nD7KPmTrorJRjsA94xdHAaniSYKPgFjBSVr8Swtds6QXj9PuabyYXq42U9885shec6EMoUYpxb5ex8PfrgD",
  "key11": "3J8XwphrzrsN9k9cjSsgDppByhQoeFjZMv3VpYmL1xsAWtcDpDJRKqpWFxD4bwSon9jsK6XefkBDNfb4KYYvzvwo",
  "key12": "3b1yAJ18UHX6VjyJujLGF88HnHwCTN5GhUNw8PB7Yei9rjNfnU83PL5qwqxyuhXywAggTYvqD85ykqnDHpUMuuBR",
  "key13": "3eZidgoVQLHBBd9Q9XaHeBvzveey1e2jGScWiYrAssBNkqYgdtgEwmMypXqRKsF9kKJE9bbUTbPkU3zhqfehaZLx",
  "key14": "3CE4Dd3MbaWf9ivWAAKNqUAoGsZHXMVKz4Srb9Fqx2DhqvAk8VjqA1pQCiTYy8JV5MfDgyqx6jbmUq7w4AZsVzTr",
  "key15": "eFp75nx21ubpecBR3gY7EHJ9ab2gciphBK3WWsfXuVbprA4d1UhbC1goWkYVP7FqiHKUXFYj4L1cK5noMc2ygSP",
  "key16": "5To4heB8ULGiyrB6eRy9RAYewyE2c48cZb5PifXCQrCAP49nwP5eGDxUurEziYnDQWzTP2kmfZYN9sQg1ZoWawE2",
  "key17": "4SvUcJv4q834xuhfdJ8x9A2Y28Yv7WrSBp9QkFtFtVQLdTyy2xCQVnxNT3thhbXdVp8ZsbBVpFe7bb8UL7HGR7t",
  "key18": "3MeLZg7wWkZcBiNdeUSckV6faxdSYU8Us2oKdoGSJBhYyXkj6cHwVAEuj3d3dSpozLUGceD3WaKHeFgFN5E3qoJf",
  "key19": "3hmo7WBvs1BoWcRvi15WGQdmLKmCWgJdwhoJraB2Xyaxx4TdFn5aVCD78aNdC5m5ngjZ6UJegbjAfmSXjaZFXTZL",
  "key20": "4RkVUKCSjkKvbZ2HTnxuWHYzX1Lvrx7zTnaVhkP676YVsYq9gcXBQBbEyLdq3dbDr2zyZ3yDytZtMhVGRTdM38Fy",
  "key21": "4XvFdFmTcUQLEn9emb4aw79BGWFmfENHqsKwvUaPzb61uHAYSzgRAjBzcY9LcFyurK4m2yQqAsRNwMxNDww1QgLH",
  "key22": "2gswmeoUQFo9cW9U7VNYcyPJB6u5x7xyrA8ZviEaZf5bhChYiaMvCaEJtrdzssmy3aSE73JLACbV6Rk73RBPdgio",
  "key23": "66Bxe7j2rTWzgUoqGzPCivgH4fys1ka9LJy8cFWEq9FSpgNNDULXawvKmKx2EJazBRFG2QoY4fkwViM4reTbRh8Y",
  "key24": "3qwW6iSmdGcGp4aVriRqaX2fvqQs7VDNiawqp4jJsPrvv9qy1ytF3P2Zqa8KwdAnojzYNkXNuYQyZgBTLkhsK8rj",
  "key25": "2hgiEEa5dBgkfniKCFmYm1jwWM9KJ3ToTX3iYCfpr9twePEDrvXU75sFpK8a7NRgpbWT2pVzrpH1b8HYWntWc8uf",
  "key26": "57SP16GGc6FsvQn6uYhY7tn41A6FZmTtcCUF2F9NfqkGUD96NvZAsqKqB4ZyYdoSduMCQW45j3Rj99NUyHTCo11j",
  "key27": "4YMRR4HMdQ9FdCTWree4TZiTn9QFPRj3QccJjwjfUH8aM7KgAKGKRNTHK9Vj7wan6oN62Xruts18MgayDbp6n7sw",
  "key28": "3XtAzBneFsAeVTeisMB9i7Dy6YPRRirdgnv9R4JKEFTE4QLZpTJwPntMJ8ieaa5jPLzJp2nttnQUAaabaWtMBU2z",
  "key29": "5yrhWqZne4CAGU3zsJuxtwb4m1ziiaLbqF9BXpmm73XNVdTwPYbeahc543KZfthT8tYZVNFBWYwAfpconJ1fQknr",
  "key30": "65SLyRr9ZBGgqDhT5eShpamDCxgvLXjNx7nEbZVagojx7wQMwXJKpbTbqNozYJCexU4qQ8smdrU8ETgPRkpqMtDq",
  "key31": "5sHCC3FSC2fRBrqSxo71bGr9ocswQneFfsYiYQ6E3u4HVXnS7o2djTRkRYM5G9J6KHTLNMK3gFQZpbDsQMbRGcBN",
  "key32": "2YCJRWEf8Ljc5TzMgQKY82jWpxUqncPnXHnAwvxFStsc1TzwaHBQpNcwHZuDkXqDU4hBK2o1uHBu2DD6nauKX275",
  "key33": "4KHarusQmHhrEatPSumpVyCGRhX2T3kCG5MP2e3dNuHLXK1KNRXcCLffKzLubrWwHTjfkvT9ddgL8WiYiXWuhrzN",
  "key34": "5JNmDcz6rC7a6BUjkV88vJ7w7s3EmbrZsnYxjfXT6ftku9tpsmzFZCvcKKtTA459xdnvxuMp5RdgqE9YgWMscvSE",
  "key35": "RLTKcQeBXqeyv5sFruVnWV9BLnSwiXVogUUoPHxyZfVCnSsPY9gEo9VQKZJzBrqvaPhHMqLR4UxWBNPCjfh6Fo6",
  "key36": "2rsuTUHro6z2RJF2FFUkoBnwJZsKu6SzexJYiJXWMfWAz28m9MRzXuzDg6HH93qvTxFq9hfgPnVA2oR4E3VkNd7S"
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
