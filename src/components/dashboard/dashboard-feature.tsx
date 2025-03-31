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
    "4sCFGRJMvT1GaEb7S52ybpeWqTiwy9CGPbcujkNR3iuTii2g4xqy77WseN2MTLrAAuLMnDWCMjZQG1pY6hAM8Btd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8GVVpfoJPzsubMbSTUcjzBSCjHq9u9svr4KkvFqHeFtNZawkH7xVzNV43W91D3bqscTTsxTYsYHJ7aunWbWQYS",
  "key1": "5aZpinuvjFZe162jS7h4t1aqfFLdzLUiYxgxikHMCQrVqDMpjJCyTVKZJcMvBh3THq9cHtSTFKobmZQ7RKkQvcXc",
  "key2": "4Wdv6pTM9VNTTXBAoY4fYApCwvrvMWCnd9n39RMq4sVxF7jX5HUVM5bM6LiSjBs7qk2mXi6xwNp9Ctd7R1ZWj4LF",
  "key3": "BcDGi8STQ5jHvzTfytfFdxsPu57rxgXbnbvDJPSvn8yE5qpm2z54SNdFiAY9t2ozRci2CuM8C4ot6wp1TuPF6ab",
  "key4": "4KskD8La2N6ZM4fJncTFgmk9eqMDNLHZQh42dzRNhQQs8m6gLnu3dJWXDAm5UrHLDFKoAnvijccZgqczkAp9SNjx",
  "key5": "5bJEFhLFTpTic8hRPFMUB1UyS4T4Tkr9eF4C4P7ZhzkDX4SfSxfqw6m59VW7ufPjvKCY9DR3KdVMDbnwDuuf4mXr",
  "key6": "4itZyik3K9zHx9cv28uacBWAR4yyLVd9BVYXibpSNsWERHhamHwHTjsujYd5VqMMgrBdyBVHBLMShpVyZgibz1dA",
  "key7": "4PEUqupoGsp96SMQabhmfL5cxAHoxACBHm5pnrp2GgXywx79JnCBwnFN7Ujpg6eJeQy1Gd5Ybfqk1jSAS8Txy2DD",
  "key8": "4CtukLAfP7vjWe1Y794geh2cvzUHwPmWLLCNmsheh9us5H78kzAc99otqUoH6NtetwJcm7PXHbVfXUhSDj3Nn1er",
  "key9": "4mVZzXojnkysVn1LdnaaK3pTMSSzAMWoHg4BQ5SY2Y5wjmVo73DdHkPAWJ9itPER43tsbUe9vZSt8f7EuuidUjnh",
  "key10": "3pbBePnVxbze3uKjgGSUyCJrBHiwv7cd1Q34SWh6g3nAQoj4vSJ5qc4o5tXiNyiieJK9dDd671H6bewEwqZT5ZbB",
  "key11": "5nHtgrM6BAZCauea9CQxS8gKRGjzqf57aA323bYkQ5pYwJiQe7hMs5dWGQxLXiuEK9HLmw1DLSz7cmEsSUsvQncH",
  "key12": "3KNR9rg1bAJ5YfaSQgAAcMqjc3ExdpFJifzDNb7yoxRafrnqMzVT5Gse53o3PEMsipLfEV24ZLTdZtSgryqjF2YK",
  "key13": "3HDS5oDV7q1idCoKSEhnANvLkD34aoHzfSReNvvRn8fhb3N6Be5G2dmgUQuSaCL4SrfkvhHPNvchRJn444NWnMD5",
  "key14": "6dXt6yBv6o6DtnNVpFL9WgfZjfHiGGtjLdd2hnPYnKeU9cGVa8frBkHQkFvxsbzERmtHw5iKjEVVpcceQEPg5MR",
  "key15": "4VCA84L2avGRqiduFb5irRi1yQQdZHLaDNcyGXsAtZrvdJ9Nbuig8koZEFANvHRidWLbCNee6MzECfnrDQNBnmYt",
  "key16": "45c8KZoNvdEhNB5YqzgMFQMvb16kEkXLsoTB6Uth9QGT9eqvaaDLwm9hNnJfsNkLRFLmmb4jgzfeCpnARt6vGJL6",
  "key17": "3QFGqusBR9BaTi21LT6dYe1TVfPP7t2FLa2XBDLQ2YjVJc8J8cNMXKnbm1EPQQp7fXiwY6FdtgFvxaiKXVJYLWTg",
  "key18": "4mzVCoforfJ13Fj6KtPJeSrQR8kcnaVdwd4f8Kwk2T76s2bqiMLq2e6AZ6ztKryxpgEUXoq9ckd2HjNx13mfxgfA",
  "key19": "62x9zK1fn7C1MqgEJnMpz5LjxzVE6wSznMexiLoUojahiwRiRpwKx5HL5sSWWJ7Dgak9pJnMo5NYsFrvCQAXkQPZ",
  "key20": "5oMpZ5AEY7TY1ATWjbKBAN8sGHUXeVCTRNMs4Y2jt5Lp8K3YfDtpXG6KSDo8d8M4cH9gE98xAu1dcBY9FsjtLTUt",
  "key21": "2VoNBUKvwaYZreEVLLQCpxA7GF9YDbMK1BczqzGvmHDRcNgSXRRrGdL6KkWTps25XBuvK1LpmYot5abokhgPfo3Y",
  "key22": "66u4Xn9PmBqnQvZrZb4P3kHfpN6TeYFgu8c3h8JwfRGqt86YjVhijczmuCs1wyTpTpBCPZnB76tggBbTqyb284nQ",
  "key23": "67gUBjuX3sw2W6Jy5YKB1xPUWiWD3d6Lco2E87pEm12dCUmdUqQZ7KwVMuKePohTzBup46GqYM7ePfDFaVGiLxJt",
  "key24": "5j8xajUQFmUUi3AvyRxi8ZU8cQwrqrAC6joWyCZGLhRQtvcnrprQezB6gDBqssqwGk8YfPnxxbwC8q6JE8Y1tpTR",
  "key25": "3Bs3pS6icrZdjViNV6oexkv6MxMUYTAB91bvuFMsDBcjXMWsXP9JXxgCxFBDxdHfjuBBik5oY1Em1Tg8A5RyoKTi",
  "key26": "4asm3SsFEq3gxRwMn4tUYacLRX5FWjjUSFAnAY7D2wq6Hw812rrB4cXsk3t2BQXH58tvHA6hbJyDhaLxwbjJo47x",
  "key27": "36Av9EqghmQLNR1oaU8P1RNTBhS6oz2eGi8552ARPz22RSPA9zzEyq2TEat7SZZwocFbzuNTUyfp63mq6fGkqfne"
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
