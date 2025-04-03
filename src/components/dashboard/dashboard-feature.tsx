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
    "2RP7F2yHy8NwrPdcSddhrVecQAyanoBrHWWVpVjkUXsJD3RxxppeRSTrS6RWBXi2AKYhabRCwgLywwhHiKjCvs3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sg3kCq2cXH6qE5GyuC7sV9YSw3L45RKTvSgSsXgqyje3vu6VyLZ49VUVBZEpEpeLMaYpr9VQVENRX2XTkCJe38Y",
  "key1": "F76bd9KgD9zJoAhrCKNum5d5BU2QCfUkYa1yUx3HzdPiMPaMrQucDhKNwCHRFMsjMoBYFpyynhRmmSFZ73f3uSS",
  "key2": "3YH5PNNVZTLsVWC9w7XKrKrPYBAiLWB44EQikSkhaSkynSvFrWm3YuxyYLhErKJWuK3nvUfmAqSDD5gXxw1GdBiX",
  "key3": "3FFikkK9wWBBuwjqwQnW2BWUrGJKf3evMCou4Hss3mfyd8rUf2KtWqmGhKpbdL6i1oVZDQ9gcD4okBPuocnbUDVP",
  "key4": "3pQtm2uwjXuhsy2DMQ2Xh4keqDqXbPxdAovZKBMxFkVpQiXWRLJPUiNp9SvHpnqr1Q6M6t2rX3Av1bxnnqY9eBGz",
  "key5": "2okhsywSYGhhBGyKBx5GbkzoENJpjeQcW7mMwKn4zqPbwNMeviHM9kZhdtnHYqaaLiG4sfvzmbBQAtP76ZbADQHe",
  "key6": "5p37ogcYTHk6hfGb7ei61paDapF6FZeDnu2yvYMEokKpJBHCFQodCSG7juKU5s25KuA6DYowWvGsvrhbmwpwa2dF",
  "key7": "3dkpQQdhLL6VoTzqCh6h8UyGVkLWLka9XTYtdfUke84kxE6UETiCPZMFHYQ4ynT76HDqoJ7f6Y2sQH3oS3M8Frkv",
  "key8": "3sWFiF9W6rDrZPrS8U8gNc8K187aPKgJLR8sZubm1JnTefXSpmgvjPMaiXNoY8qH64VSpLx37deXyaCgkjzdC92u",
  "key9": "66uw6cNuFU466XNUCyG18ZGJWDmY7WxZhgXmD3B7WezjqT3WWL31oUGP5asHyMeNbkoJWBQKHVyg23LtfDzjsdeL",
  "key10": "3vrrg73edkXAchghdKHCke2HgFa87EQWGQ7aSgkdb872mr5AVZmN3gxcWjJpX62i5RtFEC2jGQVjmeLgQXGRmgqT",
  "key11": "62REQpxB7B9VbU9kv5NZJVz9es1iMqpKdUanSSZDfV87RZu6BeB4q5gSyJab8HiLYDjt46F5DaUoc9GGviNV3cur",
  "key12": "4NKL5ykwP4hysw6sFyQqgRLxGZKptieeQsnEhaA9esN3q2aSgyudgE8rZ14a8N9nbfuy6p4MEaA8AyaBhNeVwhJh",
  "key13": "22wcFfVhZd3vNZghJFGaiHcko7mKFg5EmPQRwZiMXei1Vsu7tqseuLPoY8cRGPpoSWXRv3f81JJpEJNML9vyZ69D",
  "key14": "2c2nXWxtMYakuNFbDVP5whgShcF2rzbPBJwwBTZRUBcw95WS69Wp2rx4UJGGpQKbXQiDxqJRoHEvE2DbH85pjLm",
  "key15": "1qGEDdE7QxYRgRWKdwufgJ5NsLFU56oTgFwPynDnFAQv6tfK1uEoGoZD6cW8ptZ9JJo34VySb6MWWNb9iK6WJdf",
  "key16": "2ACnA1KMrqAJ99sqWHemvFo1endUXkQGxC8URquyE2xHN613k92B5KVFMRhwrkqxBvGpXqQa5s1ZUyuGf9FpPYJu",
  "key17": "TdqmRHj4VdPXe1krk1QUJhS4HUus3fR4hptRVt3whtWcoSsF3EXyLF7tPSvSAh7DGha25jYBmYtKD6HNCqq5sVZ",
  "key18": "Ln5RZB9RJbjPFXcwAyYfJXpBYNE72zBrSY9ouUJTvShgfQLoTrma1VrqDMt4TsA98fqDmPsPtWHtZUGf8CvfFFA",
  "key19": "2P2NXS1Rnjwp1hNem8vj6zZC3F1TWJXYKgKYTwzE9daNxSgkqbuRM5T845frekZwxJiQRtV1B4JDMEn9AwM4gMe6",
  "key20": "5dAazbGW4nA5XkhNEZwwkeNhMbqtvZTt4k1iHhgAwg1LPkt5YyVJunUyqswt3BMDtQqXsB5NMZy1QLjjm2r4WbAJ",
  "key21": "3MTet3FBrtK6Nqj4bH3kNHngJfRmyP366J1fLhJtvdZ1eSYg9mGDcbGTwsyjiHF9BQxxfeZYCYfpaK3mzcd8z31b",
  "key22": "zNiuxYnEQHTGwaXTpUngGjK6oxgXV7FBkGrTEFvbUsN1SRWXApKG3DiSh4nTX4G6KvQVGUYq1F1xf3AuZCg5hJh",
  "key23": "2zWtH7i1iWyDahXGevyjJKP78xVq76UfAmvqQ1q5zYpjd1pMym3atfXXCsMrpXdX377V1Bpj1njNjhtCNRmmSB1m",
  "key24": "2eoPPa5VnxXTca2djKRmFKqN4Cam9LD4xQfU2PpZLTGtBmTrQbWXG9LUT3mU9R3u7drHy5BwsRbTzPdiFj49DyBD",
  "key25": "29ond7ymNs2QrbuUJWhn2TSomhfxDrJZUGSGZfptyoexdPJaGS2NLzY1PFuj9qRRQ3CAqqE2qhzxoFdLTMEVaiGr",
  "key26": "365hFYonRp61VNrLEQRar2RQUty5kqfvaBkLaKh8meu9Sywj9W8CDD4AQHvQ829g9EbbcfRhjsvbXeeDjXweXmjh",
  "key27": "4XLetP5kAbyHL39sF6D5XqcEUgVf8aKrP3WtbSzqRtd4REDd1iEF6hydf23eoK8VDeNkvpradzaDStNrTGKRVyWe",
  "key28": "5HFpswdL2rBPV18k15BH34GX8hgeq39U9ByjuTBMqATyvpZtyC6NJRMK1Gbt6fPkcWGV1bJ6YhAtxLAobvnAD1Tw",
  "key29": "oB8spE72kKv8Vu9daS5MeGrbGhsFhyuzX5YAt5px22wwmZv8P5bJ5Tji4S3A5HJftrwLuKjHY1NshS7oiS9efJZ"
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
