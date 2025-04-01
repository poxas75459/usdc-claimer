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
    "H2RUc6qMceJZRSCmTErEjRvdQeMjsfRywBjALuwyw1iiQTZH835SkfrYdvzyTZZeFPRcTa4HfJbx4xPeuX2gHUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wn6j6TFbAb38monRqb5Jh6Zq5LRgnebNaPfuykXAjZMnULA32zPGhzLaQcCEWtyQR5Jfb98t2yjbsYLSxb7qGci",
  "key1": "2qo1FrqGHZwxbkJfiawaQNP1Qahr2jPSTrmWYS1sc7RiRN8ViSpigyMpaows6f3YPF9v7UHLGzMY7P8pHxM2ntgr",
  "key2": "3nPR1W7XrYgogrkCAHEio1FZk8ch4kie8Thr4Ythkt2KVBYgokHS8ZP8oJxWcXzYuhnD6zDcfuxp3n9ZVxtUpNCZ",
  "key3": "53yy7QpYihUxy2zGGBnnVXMRs2gByQgqb9UDpF216aidcgf8ahprCzyudgNKK9nHxJLyaFNUodBPbuXvLrhb6ZY8",
  "key4": "3T87eXyj2uGZw2YgWCDyotoT8gMbNSYd3Jwn2fC8tVy1ikZmAezuY7LUKERWuADCuWCSGhnrsZwp4wyZNjfaGm2F",
  "key5": "2ywmXeWHh13VqaoB5hy89LMqX7vBwzqCsESqSBMLUEHRgDoC7DRoA8sDAspBV7DuzZHPsyBG49szyxptxRxmRFmg",
  "key6": "2Quf7RdjKxi14mdwdfXtsnF6bewosuQ5sEF7eocCcGjLVJLFpP2Vm5CzPvKiGpSqf8MEdjHXZFHgq6aqQGNnGgCb",
  "key7": "5hiNSt93Ykq2Y4VPq5sdgXvf3aKR2SrpCuQ8UyBy2HjWaDBpWh7bsDXepib5fnxQ7bzX9SNja736KFJHsH3SAvqw",
  "key8": "2LSYpYxxHdXrTHsa9Zhf63LZnixjMZoQUJf44f5JRrYeE8MCgL237vfZSdfNYAwU6a7dyf19rK3RPmeqFW1LMLRw",
  "key9": "wRxAZaG5Jyw9aF5Wgbwhxih7ckVQiWQibcyucbXBjJeUsFi4y8ytmH2WD2bjx4dUv8wU9xmL2VR4McNBTVHY791",
  "key10": "227T753JLCo5FCCWuaYJPqVuHA3PgKfj9hd8JvJMPxU4bPm4PHzTYxYFSJLuh5GH5YvT7ewBR3yc4wRYTyhoBnaB",
  "key11": "3b8nsm4HqX44SQ1qU22XwUhVybMkQuzqj8CzRrgUD1i8oKjCNVE5hKbWtpQVR1NdWk1A7CbyWWjKVCB5KMEDztYC",
  "key12": "3K5B8F8iU4HLtgfzCSdTpk1rp3YkUAAqrGD78rStCC1gfuFauct3usYa63EuRFjgCo51NwH9TeB997Kxa2YUpKM6",
  "key13": "4yprDM98bHZs8HSq9ramj583dmYtpfifs5CugbCagr2LNRyp6HuGYJw2sowoyw4KFa5MPeTxspCa25mJKsLMJ9sQ",
  "key14": "2r7594H4b9vMgAQ2kChrTSwq6CsMZY9gEsBBCUepfibxERuS6R1tYkuBiy6hwLKA1qjqWTAJpzvn2b4Es49zpRRf",
  "key15": "2YQb2ci5ZAepvCACTdge7p8fqNVSzuPBxALY8HsEHHe7RSRYMQfYXgEKMYFVuhz2ytk1CNUEvKmNpwsgbPs3K5Sg",
  "key16": "4b2XynFjy6XVKoxKDm7oLxax8UpteGX9p3ZZQZ5MorXQfwCDyNeW7h11r12zBmCYNKXdgtHtue5F1FNpX9NPGnAJ",
  "key17": "rXdAkWLm2D8VC4VD4DEWnj1aWx9S8GB5KtPRXJ7zts5SpYB657myVLV34dXEqUBqbHcnNo8LvJr2Y5FqPG8TFL9",
  "key18": "4aYkvgp53DCF2Mx7yuYpR6LZJ23xipG9Q3hkxJ3TpjzD8Qhg4E5dReYfP1WY5VRxXweT53ZhE5WxU1oscWwzjGyQ",
  "key19": "JhqQutDYNnFnKRp6u1oAoFNqDbKzbcKAYhBEnD5EcC9Gs8uyEWa3hvj8TBWWabodLnNMSsNnwBRsbZmQwFTsPDU",
  "key20": "c6nqX8nCJaySc47wHhuCaztMdeL8uE9VuEB7LuF2FK1jsnaJZRFKbEENvdrK4G48WMaxw43xjdB5YjG9boiQqGw",
  "key21": "664bUtdcbh2bnjEKaGocWAwoRNXkVFK2soKNBvnPF1vfLGe7h6QLzRtyyWuZ1PYyDqyYYkeHKu9iGBSZu23nKrW2",
  "key22": "2moALBPcEJt87aJ34nuT9eezcE2TUw23ggWSY53FDGXqro9d7nYE8vv74pAcdf4zBu4wqrqXrezGsQeMyr2vWf7C",
  "key23": "4D7nzwr6EnrxUWJUWpVpWqnJZwv4sBusiJjA2UDLM8hCty6K1TXvWTsDs7e7f5cKmHgRxtKrq8LXKgYuGNdGswbp",
  "key24": "58qPGqPK3ZWCmbtsyxbGrSLHY34uF1zBBGwgG3PychN1ByLh8WexQGYRsNjmbtXcuVjzjdhFhtFzTjnw4uPaDYp7",
  "key25": "5MwA8ZvkVAbGJJiWdDtoZoapo5F14XMqV89EejfPjfCpTCJ2aviQ1BacndkoqwQPQPtRmcb4rKX5tKwBpPmPQNRu",
  "key26": "2MxXnYfua8mr8g9DkbTNBZsNCjDksRBgxNitFNnAz2u2pLBCHbBzeaXPkxDArqzmNVKqzVTcMkq4aNGP87bj26nV"
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
