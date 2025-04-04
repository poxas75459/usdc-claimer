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
    "51ooxJDTxgdPAbHEN3ZTNifzn51U5X58NPLNP41DY8VzqFpCroCzmcaQTDfQt5XKkjCBts9XMjcU7uftbeBb9vfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Q5XPtUs96A28vSrfoqf4oB5PMLkAo2stuSWAZsUqnS56jFNt2EFgT4BDtTozYLWQQgvdfgDyT57uqpffBgAkco",
  "key1": "4Wct7ezmihZYy5JwLemJfewQhdTHer4yAUD2p7PUBJo4ztJo3nWiHqbPjGkvQyv4L9WKiReXMEJYGYtFM6y7NGfh",
  "key2": "59DZH6dhgCrRiYjp9c27AK2Scsp6tnp1RJbGr7ZaKP3uNKazry2uAWpACE9ZBh7QHNf1U6765tqHM3a9FrnyRcU4",
  "key3": "3Mofo1ZCXoCjK9uh2Vy8R8cMdVTQV6vuixEbGM6iuQRsukWgSWSVzaSJmUBGCCTA7X8GdC5CDN2YfWitQGAaBYtj",
  "key4": "dYuFcp3RBi5jmk8QYXaFyJd2iLjj2ozGqZ44fHp2HF5ge6DrqHsn5UGPEoUYmCWUuejFYiCrSKi1s34Pssdriy3",
  "key5": "5bYzUP5WDvN6r5VPww2XyGcEDHx9mmtXjsjyxGU7q2s3FJwdiuUq9GeW1pR4HJ5nttsbmacp3pqqFbadKXdHXkfE",
  "key6": "UBkuEvKAH7NqggbyP3V3ZnXfgtZVuefPbT19p28HEjKW12eERh8mCdPzhu1oXzMUykEFhiL6KAQu8GHak71gwvV",
  "key7": "2u6MSYyMTUcXGMc2Sjjdj1dRH5ZNKCKHG1jFeowhEf9c5kkLiPT9iWP8R4smb6ArF8pvtptY3sCofznC2tugPFYb",
  "key8": "5zhin8wSaHo9nJreyRe4GQkoZHxoy2hoNVoE2kRbxtPCZYvnrWNiWVojsSZNLAgoxgZ34rfpFjYu6ysTBPsXewtT",
  "key9": "2cq5LjMbxC4SWcaMFuwcdMLfFeVSAjyFEUoCjNyD4cE7vekKCeibxDW8gktnPnxxfisqqzH67JQXb4RKc6g41KBT",
  "key10": "4ARVd4fyj3Vpgz899TxTXbqsTegBSfQW4Duf3xJYpzce6jxcyNYd782JCfKFt2qFfGhNpJeieJr1PHcGCZPpJ3wg",
  "key11": "5otnmH9fvdTPD1xnj5EPAjcBSryusUre1pW4yJuyDRvzvqnPaxJmTV4PDnm5241fP9ViHXbKmofon4yYa89NPB79",
  "key12": "3ZsHRVxLuikpGGrLA8EcMsDLXHsxiTdX9HAPs8i7sfLB4qpE3pQ9iKEa7WEbark67v46qadRE7sFdk3QF6LGQQiY",
  "key13": "54Nx2y4kCxzAnweAm3BWpCbUZq9zxJqhtS67NTSs8FnWDkYuaoZEsjwzuWUWjq1QqXoenmpC7fHxbCyzhVhNJhse",
  "key14": "tSPcuhKYYm8jsa5PqYYMAgv6B1ijbdQrcURM7SmoLGm97USnuE9Sn2TcxJD5Xq9c1QJSGi2nhaU7xBMVVtkYb7W",
  "key15": "4HrJR7PYRecQ5fw2wAkv45FRNEzMGVjDRe1LAUK6Y94t5KJk4RAje7CSXxuzTKNwPb4bNNCirjUoJ9A93bd5JJN7",
  "key16": "5ALEYm8BwSziWGngutkqcMXcviLZzPx7nNw1kUofQDDUafAJu5yTbDsHyGWxR2tQ7CewzRJFq7iZLNC8VUM6QMy3",
  "key17": "4mtyLuc3Ks77tB1QTmjtaWeuyfjhk288epps5xDPUnuQiE5GGBmXqqkn7JhTAvxJ4cp171pDSf681xQEfR5Trgdt",
  "key18": "4pb1Rx4sbL5XEQvFSPRDbsZHKjagXk2ER8L3EU2WaS4uzJPxh2FiLv3AmSPMa1nyAxaewEQF2xR2abFnv4FLyXZR",
  "key19": "5MwgNeeajAQeifxyxrMvjTVoCY1dbVKz2gqeFVawPww7anD19gx6fUT25ZgyW4Y4YCzaBTPaSfoYQZt3WsQ7rRCg",
  "key20": "4DT4QgQX6ufsDNUpWqSjn8ZEu8SkYPcyPfN6DCpf2Pg9AFcaqtc9KLK9beQSFm3FUjvtw5AR69bNvd8xvHWL29Ef",
  "key21": "3rWzL2QqBn7Usi4c7SkQjX7rb24nMnCgCKH63q8nb9HL6FEymrqaHEV2ZGFuwB61yhqPEJnBuKJ7BitUtFYqxheB",
  "key22": "UMoRF4JPnMUiqbmVtsWbt8mt1Kv5pqwc3sZrLd8fz1MBRf4VW5rXAuAxoEc9Mq3LU8RRBgyJGAhtdPWbhrEd8dU",
  "key23": "67K7bB39diUNvencYiZ4HZ2LpCwB47X9cBqTtywMm8em7tHfwji2aXz8CBfaSKQruqgp6krJ7HKb1ToeZCJzJaNm",
  "key24": "29jwLjTMuUstst8heKa1YXhsRTjabah1p9wrGtKEqGpEkjeaZpXccHmekvswj9psXgJN8mhX8AjpDERNrpfThUic",
  "key25": "XF6c1PcnD6DwosEKRtpxn9R79cEt2ZtQUg7B3AhMXjdt47jv3AXmGdkZ5X3ep3e35BbTgs5Kk6H5BgFpYzB2Eyh",
  "key26": "2WNkBkEaSaU7ohzx9sdtWRgWHRidWEeCW1o6MBgTdk6Y3mifa3Yi8GqLiRPTqCXxzhdxEL6MDxQL8Pm2CMjM55jw",
  "key27": "2etxTDajue3CLiSfhWaKy1fHZWLQDyviPCN74n2o29LhLMDmn46tkKKiYvTzMQiE5MzLELtfipQwYp37hTxim1bs"
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
