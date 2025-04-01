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
    "5XDFNRFmq5jt7vMrxkCEJ2LxHJjk7m4a4W8ZeuxZ6CqMgoQJDqNB5fSSFWKQjc8BuX11W95bXDH29WqMgbKdAUHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9irPUzxixWKXf1PqmkyETsvAgp7CjaQDdk6KZuAXi7AMrK1V83PvZUKYhEGgknJ72kH4FX9TYzpwQvCbYeFFCN",
  "key1": "3w82Jw1raF7LfwUVEWJKkqtJKXNDef7Mti8mxHxcdKrmPzVgw2yXfyiUSFNPy2kv4qjzSPxUJJbi7ZHUGvEK5Jf9",
  "key2": "UAWf6bnmgxsAQ5BykDrNLyw1dMkeUXGNGKdq1q59jyh3nZZLPuH4sE5zLjww2wv4ynBgJqcYSCjr1SvaCnARfDV",
  "key3": "5abE8GsRE6PJmBQG9FrsYSHhAKKPU4BQP6f4aGSYb2vbYbTDkDYhLSqqna2iSSQJoZ7dFuYJzSatrp823jDG7JtM",
  "key4": "5dyi9BP9AqdaLLRkUpgRyHH4MmWtHcSiieRsrhgvZmQUC4aEH8pSUCs6yfb9FELdb8nLrzcPCJLC6X6dgLxuWEHV",
  "key5": "5TZQpwU3RWrYek29Dc9DLt59CAgmYBnNKBpRXZc4mPAru93JE8KGJ2168Sb9rbTAqCnDr9kghW7aNAXmSmcnc1ds",
  "key6": "4ZwdZ3ezH6Jt9yzzjD5jjGYBLmzsBpjwgZPbMF8YgP9WpqFvbVhQwvqCS7UDzdJsY5gS971i3KxnhqNejWeFUFQy",
  "key7": "WhMkSWKELVVteLt6HdanKM1TY6qYARYmRKYCxdfrrfUwZEsDYxhfhm2xD9hEEg4siiLLZQx2JDWJhBVmby2wwoL",
  "key8": "2n1eGBVJXjw2Us4zSQYS7rhgauq4WesieVv8ZzyUooc6fiqpb8Ry7c4ejqirbRr5Sa8hzxiaCRinf3WMfcQ8raop",
  "key9": "5TGoKbqHoGBVoDj5FnzLLJdpvZMjYHh9SgNW121pnutapVAqNBo14dC8UXzpNPhNu2b3zNd1Kge4BjT4QjSp8JZR",
  "key10": "2C6MRKx7KugTHQ1BQKXPsToVCNzTAKMwYRWxqtV4bbs6RBsDENRa3Ui413QapiaG52QS3fAUSZDYRrQtxj7CDbat",
  "key11": "2xLMUKUP3MUFovwf7T1ZSe2D5b3kEGbhg2xCvCEDVpWY8NJBkNz9T31UrmsXrSgYgShy5ua4kdeU1DxTSsqyNPHY",
  "key12": "5BUgZLXtRRrpatDjf5UdnkFfBmftyAFkmAfgMmHrXVdrcr7wVLjX2o92EWquQfQGaN7DFxgZWFyWcf1RFebtNtCh",
  "key13": "4jW1Ld35MLvoKtAQpi4b8vYJZAFhgz4hn3BDEkw23YNqaay25Dw1XdnjwMWRWwhyZPaFju1warU7xKktgsijovCG",
  "key14": "33oBRAwEeMzC9hMBewGwDzm4G44JeP3GoToBanQFpugimYby1E7YUGuoWa4HCefpoi3CHYcZT9g4eKd2RWZZ5Fri",
  "key15": "5wtvW9tZAq45D43GcjVnizMWPnKKjAe3EFb2ftqqjvxucEWwPWc1TzUhQjCLq4KN9LHkctAXtRWbjpdBzzwco7hS",
  "key16": "chEeorhuxBwNVUcPFUJXAqGaAue8SwmzNpQsCzh1wqGA692St1Rz25aDhhesJHwzwsML9za3i1sVyYZtccPGHXF",
  "key17": "36171kBjVGLYrgJ9mAag3oAo6V1rHFLqw74C72L1ReYcJtcX9YHMK1SrSXvsjQZYfRhLPLJhUGi8R2R6ZrkTbfDv",
  "key18": "4QRmkxF9HrmffseQqSLtZqLBoiFFtgaH1GnThDHvvtK37UaCAiRnZNjCzrhofUSju1XcZYPqztpDeWT4TRMtQzs6",
  "key19": "35pMvjxLvpF3KvQwvYzgmuQra2PQBoyEHc9eTTFG96Rf4Z7mj4PSqdRPLvFcyQJ6MdTq4Z5xhPTJK9u4BUQhVVKJ",
  "key20": "Z8GAJG4pwG7Q6sUqsZzi7FJZnBcezhW8W37xfKjXMkaKUJtSu3XPpMetkZh2QfsYZmQAEtFtC3e2uWxMNcHoEFE",
  "key21": "3ZTA2DUPWaBUkiw45sCFL3L6fv2NzRvNeCLXdpgxJ8Y1xwfpxvjqv7Pz8SpDtBLYvASb3gewa4mtUL5o9czTrLfG",
  "key22": "2dbccfmLuQnSZre9A6U8AtUpzre9MYXm1APUSL5ktP25FkCNdwGjDo89BUWdhRiJEdKoUcSQXG4TrCgv8gM3Vjnx",
  "key23": "4USQoq4SYSdh6JUUpN7R29FWy3xc3FywxmZz91XmBkDRbtHgHjA23qxHcTjaePhMYCKErBq6wkEzYL3vWL12CyKk",
  "key24": "3C9cc1GpfJHG4ukYyGbTkAWGk82Rz6fVyNVxrdA6U6Lr82Cj93sZD4vy4yzkEd8cScWsYuE59evMZVQtRteiQkJq",
  "key25": "5HL4LkvRxmkKkBYRuSqhRyJ6HDd92HpvwEj9vvPwAUvCkB3dEeixusrqVjxgCjWGTTEPFowFVNHiDJpGFggE6irD",
  "key26": "5bHGJod7cghtHtvM56Venp6fRG3ZiXsqxWkGnUH238xmGHDmqM5GV7av45soVFQBqigTQvimNGgL8c5Sx5Z7Jvim",
  "key27": "4FsnnNJF7HXXA8pygseYBgcarsbJK981sevy5taEdPS2vPsByxUCDSkTtaxV1pwiW1eKEYNPh2ZTRUezaqCbSKts",
  "key28": "WsH5iG4nSDcMGDc5qrKqHDY8NcavbBJuaxAyuA9atReWDSJ5ghpskxXm1Bu254Z8hn1DnPwb22JkDLufVX1MMVt",
  "key29": "2xM9MQB5VQ3CsR2NLx7nY5gM6z3wDHttCpwwttSGqufiHR6xwA63nyXnk4UkU6K1GoQ5VuXZACbfqfwNA9hJUu2b"
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
