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
    "3dpBQyeYWPHsxGRhXmUJPsMUSTt86dQNqKP4nZfUGzQHviLGkn94YskZPzxMhbdmnCz4dZ8cGHttjSHucw9BfYuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZosBVC2ghsonwKkvEiQexCYFskzaLhakF2Foi7TD7s3TSqVdRSpgrDS59TqtE3LmfPCdaFCHv3QgEv1CTRTc9S",
  "key1": "57PBMuPRyGQmANFGfbJAf17M9ooePP74V17uZGDTULVzNnNrvbL7ZvSBFYmCPcK1jdfCwt6mN3UqTfqx6MBWy7nn",
  "key2": "4ffFtYFhTvbhbrutDmA3oPDr1X4fdBdQxdTMYGFbM6u1JhcSS28QPRj92R2YwD6GFkrFytq1H7q38rHuiuaJ3RLp",
  "key3": "2Zzu4B4LC2drMc6v4jKU9q9Jv632RpVuizKkxgXuBjiyDgNPmrJHnwc1NScLAHWC7tfatKRTJLCiWswLsKXBtftV",
  "key4": "2GPiXp4v16jspVKVDrwimHvuEZFmK5mAWinmhYQF5f9kMZL37QJhwgZU2nYUp8FXatynDenpt3XRXL8y3d8s8uDR",
  "key5": "2j1Nydx5e6s1nPEauaVqh95Rz6YLxuMeLWbQGew73VzvQbDPt2G8MGkWNbRtC3g5ySx598T52GmcbfsNFgwGxDvb",
  "key6": "5d6dRPwtq3reuoyUZWBdSu8FznwvqECXKNk6DDqjLF4SXaMVLG78bYAQyiUMuVjUNVjmS779DBWA7d7jsmYm4XV7",
  "key7": "3caUdkvpcFoZ8z6Pbvg3QqaQipTMg1qpQZxuNJvaKrpXYprr21o43VLKtmp5nv62csucqK88wno6QyT2T7jvJQwe",
  "key8": "teMitaq6AwthTgfjQ4ZyUQDDNpQWqx5WNTCnsTJk5XEYkVkWxhRgfHh6Z7FdeW6jVUM3AZPwuKmEmRWaau8FXC4",
  "key9": "3a6dmPb6eQVmF6JLj54pEFmZr92xs3djo8WMEewJ4MRDd8a69GqYqTpnCpWFj6jJbTbD9D7FUonamcKWXZ7Knhk4",
  "key10": "5jiiUrhJKRWVN8tNCqAa3QPXR5BumHkbiQqbwq4KyLrXFABYtfzk8ZJpAe7cJSkSq4GuRc2YtZ8faLfm9VTfueCm",
  "key11": "1HAnPa7dgrAj5J7aGKCBVWNte4L1VrBWBJnYHVFJnwXX82LFmsjVVCnuCvyhk5EdMMnnbo8mGoY7dWxvBWMnYEf",
  "key12": "3RJdKszVrrZyFP8RKZdgYQ8jL7QbXbDW7M7YuSkvXQoZiZk6LRdGavfnV1M7bPZ9Y7BB5oLGh3hriYV8wFkyRV7y",
  "key13": "5MqQHiKoarpLksHNQhxfcqzY7sDwUT1HyGnq3dwmHEJKYA5n5gzg1Em5LaxUFVvESYNzbApc5ft8qrSDhTv9Kikc",
  "key14": "4eTymyJsmAAqFLvLo8gkQwduCRkfSZrt5U9MbfSrHebFU4cCSstnKmjKtUabYt5Zg9cQL3SGob9zDSqn9SbntuAV",
  "key15": "5E4Rmd7UNmnS2Q5rmFWfoqQqx1KwXugCaRf6faNd2UoS7vguZURu1ZGco8EXJczAsbzzXQDAwyu7iNQobUsVzK28",
  "key16": "25SgHfz9XeozyoG7LV3qtQZ6ppESunkq7AgsG8RnMuSRAuPCEpbvjddwKfdDnVmVRRH8dUGsuopKi3f7G7LfZdCs",
  "key17": "1T1sJjWwBVRCqL9CNpHTnkgdNSRCWcDpcsrKwvmiTQxY6QFdsRQ1AqgYj9uRK2VymNJv9VcPZXh2XAYkAP83Ur4",
  "key18": "2yYm2ZaUX9Upk25jd8kKJANPeSK29Q5PbMTWjrpzmMfCBRHXgw1pmCsimCWGWmCK6NXHZzsRJEtQ7Y753TDR3nqt",
  "key19": "3qGXoCpYDcvCBHCYJebZDvLtrSaydSXhVCSYTWYorpTQyaVE6uHujezoKcpVz6yNv5c99Ud5ES2g6yB7DVsC3tU3",
  "key20": "5u1PSU6dowvtxQ9wbTrywtbkrarA4AaGJimchigzVyeLPUm897rqQjb1skGiUELRJQevntUQ7gVxNQQYf43pEUZd",
  "key21": "3LyZ5JBJ6XWTgpmHN5g6WyRvRhCZqdTHfP7Vg4YNTj6F5y6utdoDok2Ts3E5Z87zKXBCXEQgcDJCTtEvvh2HCCHV",
  "key22": "28vfFddY6FuQDG6cQuTpqxuXEahnqiHV2YBqLHUZgjRabmZTfCFC4e9pVh17pmyMcbJPD6vxspnTzptPXdz1y8hN",
  "key23": "3TRkwtyoRFWon9dFR9WBy8fXtU1czYQa1tBrpoV3NdgCFNbq49M9WCMNqYzDh4JhhbDsCWBenpPFz3iZPtrNYh5b",
  "key24": "gYqkpBPezAVRaMBtnsJw95nLCGWKmRceVUKHB5mS99fGo1GVTpWJaoDqWu9K1pBhpebAjpb7US5QsCCXg5kurzy",
  "key25": "3SnQKZUyvYsj3Boa3Brd7xwRr9NGs2xUm6iBAec1HW7TMJ4V8yPJmDYbh3pHGoZ7k1otxHCRNWc8AT8dmSRLUafK",
  "key26": "YmeeTcnoHvMwKJW9FAXCoyNHuGdbMEn7nwiBrTZo4MsBesCNUm49uEYzeBmwuJEmBsS35U51uui6jn5tkmiSkQU",
  "key27": "4CGkshSMZVxDxiQrjUivQzf8yg2uHw9FdyMb5SBquhw8UTq2rCs5MrWCDBGQNdkhnRhWfJ1PY5ftUVAnbZ3Yvucs",
  "key28": "7Hvw2fV8bV4DyP1iyxPvstzUSYAETXjPvZt6HfuScGuMdvcr9YWxdB42DrkEqjt8L5mSvCU3zqw7FHBbNFeMAqN"
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
