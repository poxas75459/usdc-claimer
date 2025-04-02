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
    "rmg297mo85HUhnqEhqDQDTWSs24QMZzgQSL7TRHd7yibQcyTnTq1Un19us7uiks3ccea6t35KXnyUy4vjp6JTPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKM6ZynVYndETEGXybg8sMUEW2jMqQnQsXfLsksLyHPk5ctsqFR9hzENngvaQxUPTorT5MkWeNwdddqsw9Dx6xT",
  "key1": "5RUwAbnhtY1x3vmFC9CR8i47PqfmoH5uMJPP4S4JYpfoc17xSfQcdUnWQDEjKazPNWBnN8epD5vfp18GXGDyG4ag",
  "key2": "5aQnXMwrHDbF7DqjvdYgSCphRa9daqTLagofkn7KE6D2JBQyR9Mj8DNWRb6PabohbTr2nU2Jc6ymgXw4FeojXmgj",
  "key3": "39cMy3JSZyZ6BaaUD1qisxhFRcJmEsVucW873fySoCYud8ysyjUyhgxUDthH4Ghv4H2KczZdw2QkXoR3fJQqKeDm",
  "key4": "rc6heAnQ1Vaw9wzwz8vZK5wb1SVghaXi1L21BhkPkqEesmRrkZWZjCzuQyXa8gC7uWo7tkBFm6EhV5EZXEZxkZ7",
  "key5": "3ucFMGypu56pvsiWy3EXUuxEX98SqYTKNyvDwUAN315BJ2jzzYtNXmv7PNTkRZphB8WTCeFAdMSne4CKWPXQkS62",
  "key6": "55qYa9sqyi8WGgTfCbAK6WGgyC15MTj7Z5qN3DC6LfH2n3Du911PSdo7Dd3Qp6uFGczJu3JEJk8YSU2S9V188Sxw",
  "key7": "Q6wNV18og8aZPMmJxcXhAjC8y5eQnz9KzJTuft36CErc7Vsv5bijb8BXEj8No2RxW3iTh6WqTfSZjkvqy9VojnL",
  "key8": "446ZoW1oSuTDKmXCqXqGRURAZHhuFCHz8NTibRkiMRkfM4CX7ij6phFxj8hgzTci19p87is9E5b7Ua2qMXi2B2rx",
  "key9": "5yTdWRKNTKDQWVojr6X7TwGe5uj4zRG94nPCemnch8MAaUsqhPwdqdJbrUa77uiuDUkhbxwGmiZ5JJtKMPu764qV",
  "key10": "3ZWWbgNhVow3s99kZ3BxxL3xo19RzoHKYSbanswtFXnnc3aVLPSU6GVjyVqaEAcK1KSKXe3rcroW6vjycdLidYHj",
  "key11": "2FQYPy1adN7hGbFPe7rfTycSa8UBoUkamyknfj2HCD1XXx9kg1N6GXw63gMK7QULMyD32CpuoXsPKdJaTvicjcN7",
  "key12": "5ZRYyCGdQQrvMCHbAiyfaGPLy3CEgXhmcAYvxirYGskzPDQwJWtwvJgCaZXDBuajn9MZvhQ7kQnJduxtzQKjdN4z",
  "key13": "2nnx5vFQegLLgyD4xbhX92ndmSJsjpAXvMaonXUVW4nn2e4uJWzuo2DEkLuZXsyZgLX2hH35RL7gZETnrAGj2Qo1",
  "key14": "3nfmZChWWA3B7bHpvJMohK1QVVt3TCUQx2nqa4RruyLS2bWjovvEZRXuGzXeQEesbGVm3xHtsjgwMRmb6HpYtjTp",
  "key15": "3r3NseTb7fggHbFebCV95hb3JKT8TJVDBky6CYrvnikdpWmvdhmm8pPkXo2mV6xJzmjtsKdLRksobqqCAYT2f1ch",
  "key16": "NR9po2FgNMTJQZGwx3BfPXzB6oqMt5AaBic7obaCEGWjmyKcEbTDmjywbAgxHEiA6uQvwx2AAwNqMeHApEyKF4i",
  "key17": "5Qqia6bNcBoGMNmcNvqCsnzPqw4UgbfRGWWV52zL63suuBtbD6Y4i9X4gWPHeTNygYiYte3oLG7t2Zff3gn1bBPs",
  "key18": "hJZLRxyzvR8WTEFRuGwNaD7Tk8VmeUrrYQyU1AmUxpmNzduQGa4cKGpMNBBvpeUFGyk3QbyqE8Fc72nmjKp2Lp2",
  "key19": "2xkb7hamxBdGFy3UpriB5gABA9PRxasJ8y2ZyesefwJcsFNfn57EWm3CtPLVmfKtW4LbcQH5dgNxCxem3XQDUgTo",
  "key20": "7sT63bDJRayDTqXJHVbBnmRBftj5y4AMBFeC86w9RgTKKjERAW5uzgPrYnvi5pua2tb9LZxskWKsE7b4RbE8YMK",
  "key21": "4F3nmi8hUY8o9az6UFcWHHRPdza2M5amscTA3HbagDvPTdDxG6UYmNTR6ZEpbxh3gUyQrZcSv1BxEu9fSETqbtjJ",
  "key22": "yPkq8Lz51pt6kB6sXBUvU1T9SM5TSE34dB1dVLgurpepVejDfQCAcHZ9CRHCnzCZGqEvYichGDeB6dXZ6SUCLcX",
  "key23": "2CLGNJZYztHkW248ZkGKY5VjkL8GCEbVjMkUCxuQiXpJ4z5t6G52xyk5ZigMAu4rrBJr7YsrsSzYHuNkhBUqUtRS",
  "key24": "4j9QsjQdFasaPHN3mym3Dh62pxNTVyYPhWQtu832XjTdXpSQ58T98KPsZVue8uZCnUrkmk4kdJyJ6pLHEs97NDZi",
  "key25": "4gwE2zVbiBKJ5dqKv7CXmZhd8RKFBGR56uA3YjqsKmJb9ULgScPXzRCiytibyfaG2aPv41WwkA4ymp4HaHpRUY6p",
  "key26": "3Pc3nfuC3ASyG1QS28NJWLcUXrXdaZCPupwFybysBNg2Fi1bqUeC4QZVrmMJsmTrXW5HiUA7xzwfZ24YHGQgxWTn",
  "key27": "4Soy6sJRkj3o6fMDHQ7KrYBcute2jgWhGAKP9eS7Sjtr1tQUFeQvjdWukuDxw6UFTCVjWUM2v9M2oYFDagqBGuSF",
  "key28": "4xM26MBJhPALpT1ynGAe7bJmiCvWcNk2nVgmHCqKizW5a8WUS8MmWztiLcpA7eSBfrEMM53X3TJ76xUefDtKNvi9",
  "key29": "53T6H9Ngp2kMEzPyhd84b8LgxsXWHSy8cizqKbxEhKxwMfsRFyV7mx4p1esoYZkRw8ykj8XcWabhiYJGYGPS5WcD",
  "key30": "46cNaMZgQ1S25BFg2ipYUXRp28a73XZicjz3b9mkM2QfJVXpvWX1Rf4NVc1Pd14C4RcfGcfbF8PQEPcSQhod513Q",
  "key31": "2axRGd32LfUmap1Uzpx4PVWmXC8h5GPFhwWDETidnL5JT6KXAbdfeWbfRHr8ZAkA9mvjQfkAkSyStcu13rbNfzyh",
  "key32": "5QhCbP7KeZ2SNBMQnZ785h7Pvvazci6EpgQgVUw8gi2pFxXje1W84gwgmngJGCuQtbroLP3FrRgn4HBb1DseEM57",
  "key33": "5R53u4b4K6YQyC1ALthTgX7SphiwpRV297AebcVAqbc9Mz8Xhpz4GVYsPX8jFp7ecAUjdZAF2d5Dq1Ya4WmZG6Ey",
  "key34": "4YiEfnJ66cruNur6ipnRXF5VkH4puoqAHAgHv1Vf9u1Si2AHZmEheGDTFEef6phTaQx3zsmh1shfcyLmapdsqWLg",
  "key35": "5ucwYTTXZRgpwGWos1LMm3qkgL9tYRUXZKqZXGh8bWAYTMBELFVCLYEtBpffNwsaF7JxCr9GuiCANY6D3ijMRcgr"
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
