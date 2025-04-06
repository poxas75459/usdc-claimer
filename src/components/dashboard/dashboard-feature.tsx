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
    "3s2HrNvaniggjzPtKKKqgFAyzCdU3sYFZqtKZZqxtLhnrpCV92tg9ZRarqaDhBw8QrqF4gSiPAbsCNTah6MS8vyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WFdmiroint6f8detgubmFENVmjFN7g9wveYrQuY2KPuD1xujTCZbF6mWJXj89b7RtHt91uvTzNqoMpTSWFPCsBt",
  "key1": "RwYmCUAJ9XbhbrxK9Md6pSeaptna9Na7X4kTcjFtUBDh2oqWqwZk7baYxxBQ5BHsQ2jMxh78EjonGxhtE6UYXbm",
  "key2": "2jzFYhYikzbi3R8zt4edcYpf3ohmodQEdBTuwt5wfu3YFLse7f762Tout74ufNZKDKZQQAhRjQeiFBc9vyG6z5CJ",
  "key3": "47xYDaA782oib5FX971wQtPu5ZftFrszNZRpnk4VzUE6qtcx7benRgY9zMEvi8YDVsR99TVi7eyUMBrdFCx6SPsC",
  "key4": "4Chhri7e1VKnYHbg7dCeQc9SS1zjChJQUi1DdPpZZ5CGnB7LZP7VR8UC9hHAUTtw4rerF8iXkfL2Kz6R9xK32nU5",
  "key5": "4gh6BmEbHrZ9J6m1E2a1SDxfgwZCFDJpC9epbaLj4MNfumNGV1bSBPhz6QkNrM2HeaUGBgcs6cHc4T5GFvBz7oUT",
  "key6": "5GxiQZgTjjAzuNSxYG1QDhRJxCcF4qFU18goMBWmq8zbT6brhLUJnWzF3TLg8dzkhkFf7386WEBPR64jvM4WZX3g",
  "key7": "3CQvsRpnKsxCpg662U686dZ87n6eosMDqvq3YAdryankGWAXn7KXZgHjdwZMQtunBguPUB1c4RU5MMFJ5RTyYay8",
  "key8": "21LyRznPmgCFMd4nQmrvH9ABizWhJrNUdhEVPyNvDkQnWhWc5SC98ALtJhUz4k5CoHkn2mkvVpHsE597WCnCX7d8",
  "key9": "isv6YKzHEZYoVDwLGouM3tMkKeuTkUBqoJsb3DLXV3X5qj1HQjvGX8Pvu6TshzHMmX3auGmfwp1PRWWUdMLhAoV",
  "key10": "2FqicJo9RhPT2MJ22n2K68Hj5tdM9ft7ZkRWpVdhAdzgq1cSWcj2jSRuRB9dQCzNYt2ZQzMmFn3KB4nKngVpZsS1",
  "key11": "4CA7tcfwdEdCPbGoxQynop7uXr34RLqUHGPzzp9dh1JgWFDgGURneYwPq5CTSiHDWnXw8s8D8LaSkpz5ZjEjCS7M",
  "key12": "23pevZxtsPKj8mUzTAftzahnDdL37g6nJNxvfWQKXvV62v1BEmb9NVwqaMDbT9ELL9iMSAvm3j7GhfECnrBfk6na",
  "key13": "4NR8tF8mDBSbBvowvsNtDXuQ5UAvV4tk4eZQdM2gyL3W6aoPrEUsWV6VrTQdWZhUyZ1vu7VZ6KfRhYQvcuAKjMKg",
  "key14": "2ut6azqELX3TFk5WjvzhaXeKSLdHbTJtnbbrbemqdnMpWtQBtKQZek6A89sPvHEvBATZVVNfJSss4KbqtQadpGdG",
  "key15": "w2RcFUdw8tb75D5Mj6nhFNkPv5xxjUi5NNbcRHreqGjpWD9hU5c61ReU86b85zjnzydp9kZ5FoAMc5WfBHgzTUW",
  "key16": "3Q89qwveLXrFvugrnzfh4nzZDE43xLdzRhECoDcK6wFa7KYaWtNdecCQi5ZP5cjPPhbJ23zMn8ngbQs1F2bTcmba",
  "key17": "GK7TWAVde8Et3x1zKULCteTJoEPhsrohdHaY77H7cpRrhAVWf9TbGKCfbN25EAWrCrRgySkNp8L61o38onbti2Z",
  "key18": "37wB5KqyL7J11AWeBDdReEsWYEtGWfFGGbFeAwHpf2A8W5soAVxbTguJte7o5jDEd6ycQA7xGdtBRkxu1oYSdqMP",
  "key19": "ArJqBScbFhKJWtphTrELY9bfBnhAZiTUnHVt3Fg4uhBAoUhHWHPGQjDdGLQ9B1qVt956ov9A3dB6Kt4iX87pncp",
  "key20": "BjLhs8kZqMpST7cymVr3GfnFwtZ2ZgN5GCmVNa3gdjAyeKuUFdZdmNgKW95qHzrZUhL1Xogjv2dfdo1Xw3JunYo",
  "key21": "EaE975egUmUR991qR27XG2XM77F6uJhtJhaNJLTjL9Qr4fFvLKPdi8hkcpD2W8iEiQfihkP8am8XTY48fTaJzWp",
  "key22": "2t4pz9CcVwdSnBu57CxDmENvjxEEGw9mszkKA2Gi7KdLAhXkj7kE4xMuqjE9YhFJPTskNX6jz7vUzTTDcZQThuN7",
  "key23": "67Ei6VZRbAGseSzz2mGkcXYRAKHrXfqmGXg6GjfCWfJ8suz29bYPtyfbcBfuXLe79YhY7wWxFtz1aBF7CaVcFLxw",
  "key24": "2QNdUV4FedWjhwvEiSMKSyeHiSyzDG2TT2NxZbVX6U9gLduATcTji2FQRTKiRGcGEhXqREMiZGtkLVXPRtWGdqzr",
  "key25": "5pWWDKDKStPVEPvajMWizzXxxaWQC54VBrsom5Vi7cGZi5HfDAFRysDyihxDdMFqFqXSCszx4UhmWrdWjQtVS8QN",
  "key26": "5NsRmczPe21aN5M6zAhB3DJ7FarkMT8br9NwqJY8uR14qtTKyjEqfGU1kxxoBDULvTphpNmzaQn9A3Rzr5v1zswi",
  "key27": "411umrRsu5wonK1i7KoqwpxNUcTnKruXaSJfSdXGGzRmnMkU8bEFNe4HQixmkcJc9qfFyBbs7DuXuLeFqAw37AdK",
  "key28": "5Pg5dZhFDqCCJffMrHD7N3aff26RGbSf6kCVRh5QA8h1oKRw4H8ZDLgH5DG2gsJNrqWqaMVxCmoVe4YJjMkjDQQU",
  "key29": "2XVvdgmyb15jNM23NpREQyXW5NQZuhiaLqHndeG8SB71hMPK82raZr7bkTtVN2HuBNcTVBPwKbWpotzMfEZuewQw",
  "key30": "4qMUCsYbWXiWevMp1pCKZ5vSsjpnLHnQxDtdgujNYrWN5DvZU6se9zu1rK6utUwx6B6363Tku9B7Dq8S6jzPz7WB"
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
