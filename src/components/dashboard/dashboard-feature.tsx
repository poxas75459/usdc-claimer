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
    "4rbQn2vHERHysYZhUZeLZxkS7neXmtYeApB3KAkrYth7NvFBmNna2u6BsTYsspHnxBP8uoSyEqafN9ifsp1Ck5QN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44rHobRr5iwG6vwoaVPEvGbDREsHtnz7rmPpHfRcz4krm3e97wZSqp4fuSgRyV97PKYXuspfy4VcznEbufWLwmpH",
  "key1": "4AnBeQSRcqwMPhP611k12khN1Wptp2zXu7xkz1428xGqjy5inPeQJeegUpBnfyN1cppgAs7hPbxyXbsecQc1iGSw",
  "key2": "4CJZqTCYZ281tHy4QysobmSj5sEedLrk2NWP2jgUgDTiF9g2GaHnoqgHU6cuf2dZZcv6A6NYgGnGA8ZFg6CirVgo",
  "key3": "4q2EWJXvgmEDTumHEJU3UkPrcArKhLWAM8NQxZCkcvy2EsPbyReFmUJetjzQcG7yebwp4fAK7rT6b4ZmkQzK48ET",
  "key4": "VKmt2vKLqEMKyG3ywcBbo1m9uywBpq7roeZhqq8VifWDGg2iz2J2CcqB6e1tRuEfkts8gTe8SyypkfmUk1SSo8Q",
  "key5": "5A34n6gsd5iGT5jwiJRDCmqWMbADidgEY2NuPAbPLypiJtmbAUXwgx8bkG7Uv9VhonZ2eYHgtKpuwbnuUMbidG7n",
  "key6": "62yoMatWPZhyT6Qaik5ztny4Zah9gT8qxtEob9gb2sudrwBcEAsJGHHvnx4LKbz35tS9pWF45kJLYCcjuXxyGWsD",
  "key7": "65HWjnUqGKUW7iJ9ujsKHL7ny1PNQHBKqv333wyLgmBzWciPUJrBheE6K6skWAosHVB6fT4ayZE3goXnZ5oR5Ba2",
  "key8": "5GEwd2u3GJ4L32WYUSSvLuLtD7zLGaoehSNzcopNnDLbSSUcKkG5N9AQ34uSgnWq2niBtKMVetRNbYM5fY9Wfmfj",
  "key9": "JuKVoP9nxFyDGpkmTdaeeHjvr9yTRLQUHzcBgVNPZYzzR9uGR3E7RpaKkVBHFBdQpNpgjKx184WXGMNe8PTF3ya",
  "key10": "66KEjCt3MNXhR7VLjaPUM57ngcLLik8c12cJ4DDE5yND3TjwAt5rrQPJRsTvdPQhkWQ8E9UQqWhyQy9Ua7Uteffe",
  "key11": "hQPt3noUDGrSVSR9rMPRdq42XwThtPdgRzLpqeD3DAV5fQvTWb9yBzUq4Hd1ShMmYi1hAo8p8S6wZAKVwMr8hTp",
  "key12": "2DqTiTsbtzPsvJpuxLk385ucQfRu5gFXxBWZBLNhykMHYtGrAbB1WXZVfuZ8PoEeovAd6a7hAodCCcPnQDVXfweL",
  "key13": "4onEewmJmnQcfPvBNxGYSwMLRa4Lv72v4so6P9AsjokJwWmBNXEuLwaKf9sbUS9K1KyzdYZjyb2PNP1a9JjyMmxy",
  "key14": "5oLnsEqk9uBJNXohAv7NXdthxsbU7x9jgDrEJnJTQKKxrR3Fxn5U7qpFcKmZHtYKzSXgJhTNj391RK74arfD9kPG",
  "key15": "5x4zndGGdDLmyEk3yj8WUWB9WtGg3R2RvZWQVTou53CfBpFKRqpLBABBMa8GJdWvBBGzhc429MEPAcUrYXm58SXQ",
  "key16": "JM88q8vJxhNbTo7vT23Ykef1L2V6tJqy3nmen97czwz81bc55AqJbTkDtAM5VxJR9nUZ9MbcoFPmhjhbk2Lkou1",
  "key17": "2dWLLyfqDaf7SMNWidBugQdunNxVqfZvo3W5bbSqTWa7RP78Fh5caJkYcDUHXv7GchLQVtXye3qKFmmm1zoR22Lb",
  "key18": "2xKEEF9djKVsA3JzwptD1NnZ46itUQv9ZjMfdfWjwKJ9wxCTk4stkSfpRa63JDZVtBxH6CZK4CmZMhTyyQMxv9yg",
  "key19": "5HLQUggbq8FSgHwkUWspK9r3UJM3yw5GgMxKALqM3M2NKdLV6h55Kxzso6cXWGHUpTpWZ1tZG6QMzxWhfqw6D3R3",
  "key20": "2DAtcCQKuGF8XVjtPgZD6CgnUyWToheiAYudK4nBTWzCdEy5s2qNWeUST9KpvXnTEJNLeP8nUqwUDC1ybKxwZ2eT",
  "key21": "5YVPpnPjvXNGJ7KNfvXiTMfGTA1VaJrDAne6nAACjizCchYM6Y4N9mLg5qr5p23E4prGSEtKTdCkYbyLJrorg3Cs",
  "key22": "3D6zuhq14LTUF5Azy5KMVzuVt4ryEX6YgyafvXycezydu1XpdKmbvXA8GZnnCstAqmoMJjjJ1ukPiDmGRhp6P1ea",
  "key23": "2YU1ZdUCaf4FDNJac4hy7yvZK7whLxd3wLPJSV5vWHqFaXoFFt8DZhwbDwCC8cjcBcijaZ6K257nfxNLbJbMneu1",
  "key24": "2dPQPs15z4ZvAybHfKkZYk8aqLHUAGKmCN2AzHsPkHKi84eSzECfPVCbdEekUvcLcN8YZ6j9LSs99fzUq5N4cyoh",
  "key25": "2H6jeZZYJNWFby4G3dk3Nqisn8nBgjc5ntNiUwnoF5iK56T6TJ6FY6kUNVexQTEQytZn7vQ6gAnv6VneMG1ZwDyp"
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
