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
    "4pzAkeesqWXqjNbBZmR4ibM8JngCtn5MeWN6HCdNPRjqJViEdvLd7Kb7awjohtB5caAEx3Ssvr2UHTeLpyNc13Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBXLe33LZuUHoQRjiv8V41Rzw7J3ZUnkbPv3oeKY9UwgKAdFwD3AFRzpJjC88Eh5HDS17jyJmqgboqtgJ5eq8uq",
  "key1": "2Hfz2md9wWSarypjPK49dcjtfpiANsPz68txsZ33xz674XDENGjFQvfhrxuYRP6sKPSMBBZcKGMBswHtnXfirC1S",
  "key2": "5aUx89BtpwfkGdL6o43R29kWQGphRc7HJovaFsbhAo2xX1TDzz81eVaHLwdQCsKafzKzMffRASaStfuj2KPZUcAw",
  "key3": "65wwqp5XWbGvZNCeDiuvGve2KhUiVnzUusakXDAhYHsvRM87YopmRd6pHe2jgSubBmAeuUUYRaPryLa8QEdYDXNy",
  "key4": "4ukmPDzQU5GC2HjV3YjFRebYZJNKpDancbmVU9Uji7mtHRkerffSWc8qcyton3gZjoVcxVfkAQfxthAZk2PsHUmS",
  "key5": "5D6VrMbXGzr3J5qsvLeiPiV7gdDZMb8bExE8T3X4HsUYTYFaHjxkywWqVQGTc6EWpJ1eq6Po83RpTSqmtPEQapjN",
  "key6": "3aiNRNJ95DJZLRXUo5FH3SMUaWmyQrFiYT2FUywz9oqu8x9sN1fzdD3xz3XjAhjvQvzfEJwxzJo1fbX9C7WmP9oH",
  "key7": "38tUPm8xLpGt4Uw53D3rwcErp9x6DgHipFdyXoptuFHJBo6zYAJvZ3Pk7X7nbXFyfj985zi4oWPojeA1FjK1m2Pw",
  "key8": "5UsCdadZmgWPZHVtSnfaho2EvNYMceGtuspSyWsJXgPa2R2R93yT1M4Dd34jMgJXWKqiXcGGDACgN3ASEbXQZKDq",
  "key9": "4MF2iLksH9VFnbJX3Y5yVYTwvbhrx2HfkWJHem1T2ErFej5HkJxzQmQWc2fjjZy4Zs9gHrPssGdc4vM1irCj9Djv",
  "key10": "xcKQZaZrGREhARQuLyNwRrKASHWYeEjCHtwDtke8C7BYNWsbDBYi1tUjU6v7sgaZxpDyCFFC4qaXGjkuguEgMnn",
  "key11": "5iKh23bDUyTE2RQgDhgWnbRwbzDm7gEoJttdcSxb68bkW14tGFAixLdsWNfC96odYFhfDofwVidvF2aaEEVWJkVc",
  "key12": "3ee156ND7XZfNr7ATZWLwwEofMjLVjwGYbC5h5CkovqoWSBg9p9LpF8Aa4eVN4ZzpnWcEdBb27MrFzpj8UGv7BbY",
  "key13": "2gZGJoGLgfJhk3TnSJ42Vf8QqQur6GpdybGgPtdwUiBnBr9X8zZXBwnMWDxWZ3Uf7CZdecf2o8PtD2vxhRGim5oZ",
  "key14": "5deGsCqqjKWMgAAoc2TaZdwDXuH6PeaqXJwab2Wp3jsKH88M12NjvcpUgiFr8iza6ThRz6XYAy9yaTxGCnHY3PCT",
  "key15": "4rZDvpUVW5oeivjYxYXmJsYh1iMLZhvejENhcESVQ72Jd7X5aBzNA8A9nXE4UYGB9TBDXsEhRd312KoZmSsQMcLN",
  "key16": "5cFV2RpSHwE4ZBDHaFLCwnSHHDCSxuDYVQsStfPfa1ZN1hcswh4eDiUbsWrmVTKvuMmgMpLu2SogXWNgPzZ9mTvx",
  "key17": "3vaqDrz1k2i57jAAGpAstSmEeQnMWxF4ivu74KGgGJ784A4YE9LSuvvuLdRiEjCTL8HL3X8bDJdRNTCX4udBGcw2",
  "key18": "2am9GFJyo7BVznoYcB3BLD6zdL85nX44jP8AWGCZm344Bm5WYuCpxc43KetSdwXYbiERRrETrSZZuWt1G2U3XmTH",
  "key19": "2yA29f7jk6QyEyKq6yL5fKLbxnjESMWmGcks1ZMJoKP854oA54p9SJrneY9fcMKQU6kq8AWXoPx1JRG3WJtLZSBX",
  "key20": "G3Hci9R53WWfmFZwMN93Wm7UW756JeTu7y8dvTwFE9EEe2z8q5UH9s1xqH5RmjZNewuaw3fonDznVijgWNozh3T",
  "key21": "3WuAc2f8VjCsjx3863fJGzicnUqXtSFyYyVBRRgv6N7zEwJDeKgPCb23HNYWiNFCXUy5HnE2cfqJ4TFCEEdv8mG6",
  "key22": "5zZLmy9Q2UvaTH43VTVjXXFzerEh6BCmpteX5r1wxdWzX3RGyp32gEnQanW5iZD4p1WifQxd4ennXZ24jtHi5ohR",
  "key23": "eDRKXQUtemii8omK8Hjx5QXDw6pmJvqmrvt6vdrLizZ8EAq4xvC8dH4iWfGmLXDN4kzh3GqXnB21SsPsfUR7ffU",
  "key24": "5BHVgZBSaqp4ix9awrvdMVZ7NJSw6wAxvU4UfdCTRDgC8d9JNwK2vy9y7r8yoRHsU9uMyE4rkp4B5Rs8fCdsj63x",
  "key25": "35gsUFtRHHiH4kFkrhDbEfJaZu2gQeXnuyHdDP5noLn18fgaAvEfE7kkexffRDNhXd3gvPa8axunvmvTFQZvwALC",
  "key26": "5qyhju68VrgAJjNRe8Yx3Vfu3BggZtbm7KW3pNfs2yAva3RyRhHBnubU2JVo65iUSPxvzvUA2J6iS8YTSG2D29Kf",
  "key27": "4XdpNPPkZWHazHCZZAJUpdssZSfywYnVXk2zUwdbhrXPh6u5iQwXxsR5wWAkArZMGeDjRv3hFcTFHdPFD8TRv5z1",
  "key28": "cmWQjjAkAWhHDpmGuxBeZ2Ukapcby3uo4uuxuH97VsXMNFnymi1Fr5pzvtwkachzFtGUA3KaALzA69dApqAvDGg",
  "key29": "LcemUVgNhjqXVfewWtatHgbsgigqQyYnZQMpCQiw9QKGNkQd9kfnDGGsVi9FkcdJBecW9kDZJQN2kJsbQ9UZmgL",
  "key30": "dc8mX75B9K5vKmaJ67cSKLteSNgD5raGM7ymJWWbWMH3wU2oyhc3FwWSzApXqP9WNymZijBpBxkEgW3DMJmCVYB",
  "key31": "57une8N81tztnsgDjk5jLFnFxtx6JLmoH4gG1RzYk8cdi3QAf8udTidoPz6R25ZJMEpK1RXQEDcNVHp8jmbTRsEL",
  "key32": "2yAQ6gQ8szBxshrBmxao6XtQXTXSQ6tKw6ZfSU4Sp3jJbRez9ahoF5h5GTx8zwnwcjCpVZ2X4xqLEDRbdy2U2nxt"
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
