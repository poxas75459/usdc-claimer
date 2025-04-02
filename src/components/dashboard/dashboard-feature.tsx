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
    "4K4K9pchus7QnKPryW8bLWkkJZdNQoYQoj3X8qvD1d45MCJKwKTR4Q9W53MZsEqrVkp5tuTZLYKTes5f5TL56NLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xD8YA41DWn1yYBFjS5tAhbA7fefTNbaVX7dVPn4XmeXfegzE5NzjuTU8QLLrSXZ9JJEPyuK3RcFnWfpaKMavjdD",
  "key1": "5d5wp9CDBwsA586VrRjR64Njb1XEj1uv4VyfYHJrqmHVjaRdsKq43HcvyQMk6MzbyvStU6LEcopcBKxVQGbGrSJD",
  "key2": "2yfg1e794J67b8SZWZ7WqauFwBS1ZugWYeRTyJGxymFfbzH5YLm9P6bW2QrgMuP5ijzJbeftAmeVhzkh6A3xRiEC",
  "key3": "3R4V8XvHdxykYcK1umsC4pgvzZyTCWcEhK6AQDYE9Y8FtaTXUeA76PqeVMfhtF3HQYPsxoH3hCMRsoaNxY1si61S",
  "key4": "5F9z1rwy6bAQEUUA9UuzeKJ2qktE7REHzH7nev321EYnuiHxHbPeg1jJXbSZbDYy7W8feigeeQeg3Vw7o1jjbUNV",
  "key5": "31tArT8JfknjHZy5zZbf8mvCmzTEoj2o2hUhYwmZBx7YbN6BgZ3RjZgJ49LzqeAWwP58bz9psCWW7J4XKyXfGC4X",
  "key6": "3rNaLHhSbg8bqoGi3ptXzYux2sFb6JhZyxnbhYr1mWEDd7v6cdWA6DTtyFLYKptcZzFz1SMhaLpHA9k4HYmojRrH",
  "key7": "2qBPUfZJ1fCPpeoDazhkPJTewtNVB5g5TpSGUJZKqTn1rCXVyJzLKkZKkFhom862NQXmjyt3Qimt71icaGzVdTXZ",
  "key8": "5qyYrwbCaMAma4VLPgdDsnyBrtnKLkXYb4Kc1tMLqQ1aQ1jHZaTpXRHVm3SEPFcJcUrqbyUS1L1qjaYZHUuu82FV",
  "key9": "3V9tBP79a42XsD1BBjM5GndjpKZv6AacwsMmtE7x4VtNcVtcyBntgV4jxF9tjakuHhrDsNqssUqFsedZRiu7Q4Te",
  "key10": "3LrYWMqMpySafGtovGN7VcFFo4srrUB4Vou6UoanwLDPGE8VSRDH92qWrXBziaaownCapY3hHTqLeFhj5EN8i9kj",
  "key11": "4F7oaNS4oNLMRbwrKBvhg9fM8CNkn6434optL5Agxv6rYFC2Q8APAhQkdBd9Qm8KpspAjVo7NaAqhWyzhmkFyu5j",
  "key12": "5ygHBcnbNWqXvVPUmvGg2j292jfwuUwnbKu9SAHK1YL1LEEmh2ZyUebYuruDMSPpikjToxymKBLPHvD1fktQLFHm",
  "key13": "4scJBPSLDBb9dnprdjxX6KTpVroWs8LQNLDnCV9BUziQtjkxwrcLSPyTbTFCkFm98e5L4vNnSpNXHLEPdf4uz5yQ",
  "key14": "8idVW14u9TaRkADux29jchXEsNznyHWF7rpbdn4BGd17tn63YSxx3Lf7FA34YW6kiGQ1djELDLnoNn77dt5QfJ6",
  "key15": "2GM2ZQa5ru1c48QPxyV2dJxj9RxT4bTzCMfmjk1BxoPtrddaWYtVJV4PeXXpH6wAFGuYRKrFkjSzrj5kjTBLgeYm",
  "key16": "32zwunhbnYABEkzoDu5pvLnzj9vSp5uygCkJWYNZwN72oAJ2ovtAAvjqC6MxrYZUL7BfBPrMGqwtXryM9ZcK6wA5",
  "key17": "62QJsBDYX7HzdfR9VTqubRUGYpaimsq4qDqyn285HLzXBTwbWdRqyTfM6XMd9fRG9og2RgS9ZUuGcJQzEy4f5Cxx",
  "key18": "4wqcq8yG8XZ3nhZ2uRsNffyQgmMJMQ6TgwqLcPbKD9ibfBxwuTXKPFnAb2WRdhknU5zhis6xGzSWvk5gip77JYxe",
  "key19": "MBD5eyVnRnHSgHMZbMoUc4vpn7bZ8bXhv2FGhMPBQXLz39goUnxwhy3KpSaD8suq1NVqiMAy3DQjohhhweNP2mH",
  "key20": "31rW8bUXKMU3MaXzGTWsHteLYs1ZzwzGEJEnjpE7osBH76kTDkjSF4jYGy36mbfXRfA2igPAC456qR4E7PFpocBZ",
  "key21": "4HRVdKxSzzYAhq9RP1pgLvGGadxtLd7wc41yXBN2tUpGD89fYwdn4dMxqMVj6QPkYnAjKzBABf44uKLyGRopnGPX",
  "key22": "2X5ERAzoPfbZFZGjMdYzY7jEQhqNQse9xsAe7TsirjHWNSceeDgwbk98nopV3p1g3EMCukBjijePTTcBUEX94Rvm",
  "key23": "n6ycZEVdMV1qCtPdjZfPUSxbiL8SLwb9WJSr2aLv97YuPkzWnR8hG1sSD5HVS4ZyAyYSSckoFyep5eEE8VMefh7",
  "key24": "5ygAn4eAzMHQZ1nowoao4FyYi6dNa2qGsvCXK6QG6YCtmb2LePgnfrBajRkSgSixgfxkwF3SBM7ysjL6h9vLU1xD",
  "key25": "3rRswJeX5vtvG81yLKoZWvHSas4dgszPaxUyHKDsd5Bm7AAY7viXuW86jjbvavQV8XHt5vpRQQPjgjU2vCjWV9Rw",
  "key26": "NZrDDWeddqPazh9tmBYSTfWWP94xY2NPURpSJY988waRMuS1Gf24wHaVi8oVkpVQcfqN5Bp3wGce7pWt4wHxhK2",
  "key27": "4xkx2yh2yKTAUBJzbMJmivGSLH2mkAwwvgENbRWb4D8yazXFJsGzrDfsUdxmQEz9tmSXxvsBmVzbo9HAfh5hWVcF",
  "key28": "EYiwvfi6dGLs65aAx8jsTya571N5uJTz7YzpTp44sqbD1C3JExRjBtQNTwV6jUiHpQb7iaEEbQvtrbLp4ZY9VZo",
  "key29": "3LRA1gpDGmekTxq1PBGihjxKVC7FiYqkA6gxaYwMmCUg1W3gW7wC9bGLLngAQxyVBweRrokBLmNbGR7qaHFZW4Ku",
  "key30": "3fdvNMUAyQWPbR1DC4yvaRGoBDz9Ecv1yTQwFsQABQCZHtBm2NMzbaGonpF5koLhDmdZ4hdUX1wcchoDKiaxRoCm",
  "key31": "2RJ1VxTNNASnVDXYVbzAjd2FstmFK44Abpy4Q9j1iQzsJk9adS6ZYaqwbaxCWNE3BNPk8G64U2xiPtrrTKjSx43P",
  "key32": "3LL3sUzdwhw6Ah6FLy54K9F1ja4mVhwfQMyvAWKzntKrmg7KVied9X4SZkwowpY6p6fnNwLu3ZHC2pDs7p7a1Wbv",
  "key33": "5aLSudcYYjwtFjQMK92pTmLeJTKgUXxhkuWnZ23x2Xmqz29Q33zwq9CnWw3TeHt7RoCYoK9RmUTtcMbbdLBaxHLt",
  "key34": "2iZzRak1o3FZMDRRXccApkgiQQmf6YCqCqnabyj1m3EqnHLYc2WGyj4yPuxQ54ha7gqe4pWGyPAK99tuzk5LmtDR",
  "key35": "JZ5T4errtQRhHV89wUpKBg8DpViJwgSQKR5sLKVpJ72ynkFmq1mJtNowEdTAbr3sQYores5t56tQ9yLBbV1jzhe",
  "key36": "cVqYWpDULSQFCsjKJdvqqqa7AwUNgBgwjmXLezxCGmaRcV3zJCTQaETNDsDZchn8BRsKjQQnNJcHT2LsKMmeUWa",
  "key37": "2euouV94FDNnfDi4WHLxS5R8rZY9XhG3zT6rqhhXqkcX8wYHBtYzsU2dtkmhVCWKMsdYktXGwBp329VppqPCcZwG",
  "key38": "4A49nZvgYQuVqTBWNDesYNpw8Mdwbmym42bgaxef4hcf5RiEJcwsT31CpxsveiGXHkPQvg5cea2PebYBEu47RKXC",
  "key39": "41g5vuwitbQs9ichURrz2EeDo5DTwtdUZ3yjYexe9MoAPbTKQGvFd2uEiEeazzzcLe7GoZ8FcHoPGEzHRjhSdt9y"
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
