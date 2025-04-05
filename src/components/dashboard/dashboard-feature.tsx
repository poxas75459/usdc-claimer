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
    "5o4i23s6FLFBeuZkaze4xc6TrNxnYk4H7yTx5QJ9Yw2PTBmtVDHo8fQtewcVCm4WWdBJDtStrE2JBpu9ABJ7hrnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srh9ovKVateF1T6UXzFmmHQSfytRDrxcztGghizSMsBs9YtQpUHc78MXpH1ruB2Swc71eopHQju9SH7VfnHww8Z",
  "key1": "3mYExacX9aHRsSYN5hUoHQN48Dsmy5Wc3Y6Pb9K8P2DVyqKcLqCr5qMudFrMje8UEyoiUsqPY3JVY16E9uu7Fnyn",
  "key2": "3ML8M7RDGiPuR3YpQK2RrJen4HWeRN6cRAnqQdHBGEEcbqer7VDBGpBwRrDR5waLTp5f9Si1hPuNihaq5to2YP3y",
  "key3": "4bxhXwYgbu5EfeEUaYKUH713mJp6fLcB1EWFWmSVUjNdGgUpEy7mpx57QTQSqnzBB2Xq2SqBPTy8h5URZ3hGzbu7",
  "key4": "4rXqNeReorbkkTqX1VMqd4E2Q8D5r3ZfqckP8XXd7vYWF4u5tTkqnLQ9udMPSNzuby1a9unLi5BdCMzhTfs9o4Tm",
  "key5": "dD3yyFH1B3wzpZRe9xwnS7qudnn2T2F3Z9M546htozaBT92P5ygrz6LjgZ6HPf7T8z6AV9cmo651yjhDBwswjDJ",
  "key6": "22ckKpD3c8gs6oF7Lk4JrX1hPF6M5FDXJnLm7rpqNnVZd4QKqwGv67VDtsP81xvzQZDAVEqMxeHAeNbiBhWE5FbX",
  "key7": "32Qhun92KcuC12244W1S9wepcchDKNM2D3ei4v5ZjiPQ3rKL3ktssvn1111tJAnDeJHejDvK1CmaVXgzFhxeRggt",
  "key8": "63ywXBLWB313iw5Kijw1Uq6BcXV5N3Mt5hGgmxsvhmK5eVr4UCpNsG2g1jovQ8T9eR5cgz1x95SbrkLN2N1iyzzZ",
  "key9": "BhGQAyVyJMsDXxh6Qt4TaQiYLsqE6GiYxn9zmrLGpmqG9mh8VPKg4U4E9EwcByNiSjdctqGzeeuEVTbYeLDLGpa",
  "key10": "DYvihHAif6jAzK1S3x4rUd4VGsxAnZdcYKFfckCYyuWBqJgu5J8VcV2yXnXZFVTXeoAcoeprkGtFcFmzBdZPKSC",
  "key11": "SXm6xL3wwf1RsQyUgPFJk2LoLxs2A8r37G3jvsWYKJwex8J5KXAeAJK9DhLB1gg1kfaLPf4orkpRf5BWEeT8DaS",
  "key12": "3oxXzzFRLxMN8Whw9kGi4nS6oY1kZWVgjrzR5m5WNdcUgtwVckRxDp8Ysrzd4tCTsg3Js7Vmht3PvMz4tqC7xSyD",
  "key13": "bsoRwvHjGtLLHiREwrKEcLgNcrykWBuggbQirWQHeNwLR12z4RME5VGuqjJiNdpMVGWpjDNVWAcBfP9iQEC72ny",
  "key14": "2JjoisLNagRK6LcLCanKXcvL6Bwcjp5Y73AFBAxrPGYVejrjBRftATQZHCkchi2iGjMuzyQgJuANJSFftTyJE5vs",
  "key15": "4iDphRDTtDNk64rYj3PQdLD1g8UNTdv6vB84TKDQSvhy3Feki7M96CuKXnBrRNDSnTBT3sB9u9rRwjdUjHQF28mZ",
  "key16": "4nhQUQyteZoteFW6Ycg3iVSaW2JMNjvGnVkuLSMwLdoLsj4Q87Dg5WYc313SC4vzry3wd1ruXUoddcokkLoc3Lk7",
  "key17": "2ZhWAg42rCkJJd7zeXn5PcdKDG8kx6DDp9jnkqqJ9JrWFEw4rC6CAZRi2tapN97BpvBfZGRxZZbkHvzZg4n3XjsG",
  "key18": "4mgiawEGCTZUL5FXrc9sFLyePkbqKvCedYEwoA8xAEwERqrKhi1ubvGnfiZ8ed44qNKaBq1BZhhRof6QY4tdpWm6",
  "key19": "3r17Dydamo2qYvMuDWTzqByNfaXm5WHGEreWUMoV4xtaPFiCfQ4af1Doadu2W4qw8RHqMaHTEm6HhrJmaJDWmqNQ",
  "key20": "4Hhkshwbi9XAG75518eCTkwDNE8L6Tjub54J5ehqJi6iErqpe544r2zdzxVregd8bqu6bD7PSAAf4o5idvHPNfcE",
  "key21": "3udyemvnEfqCKSKhsW2uUNiWzxuXauvJF1WJkzBsGoC7Zw8HTpmuDxqzUvd4UyCoMLPQkX3qyvXRrLwaa837tikk",
  "key22": "CT5n9vPxRv6iuRzRCZKtqEtVQbxo6FoRCg2CskeSFEJppEoPmHNSXKG4deQ9n4oetpddAmQftsJWaZP6BXitK3b",
  "key23": "48S17moLo9iJyuV5pHTRs4K7Jhbbt2aL58soWUas4FbhqdtURLJKGR5H6EfKmzEJpmgPc9wHSGJdXfDjugiFfhFT",
  "key24": "27KC4XjeJPsF3iuQWYLR6WXWAYyZz1EFbvdShqrqSfjcWnw4Uxip9sbKJbDQYpEukHDJBhma6t8AFHASSSQTYnGV",
  "key25": "5xmeoUxdvcipoVMF9jGeYWiXqwNoS54CwmBXXGXpxEiytjKNTbAbn2ceDtY9ByW4oiMAhV3FwF2V1GEV1DuKZxGN",
  "key26": "33RDDFrX2ZDNDBQvi9Nkdjo1m327dX8TSN3EPnMmEs1JYQM2Wu5uB7ZWRKrbV8aji8fRshM13SSRWDR3ZSbDaC3U",
  "key27": "46KNWHC2ohpjWxG6mRTN4oyiqvmcQUzkedegre3ZqRQ1EVGBAW7Ceg8t7WjkjA6JFp7k4VNGCGwVRwM6Q33F2fJA",
  "key28": "2JTjx2F7dcS1WKYmMPBQWBeEcuFooqBjcxgKV6oza2nw54ZkGBhsjjCT7aiSLA87xLEasX8rwDVr117rq8rW34ux",
  "key29": "4XuNBUtqPW1ENXTt13W5nvyWsZuqaXkSNWNRqrPpX7FPoJqXuzRZFmC5xzaXrd7PQMs6JfzyquWkmS88JUEnJFFh",
  "key30": "66EPP5EJ8E2Wd3vgJEgjQV7sf52k44Thzvaji4H2YCpgrbs1knGp3PmKohDTn8MYhR9stACJvxmT3y2sC2RfCyjp",
  "key31": "zEyGgtFVq6UbGHvUy4XLaVnLxPPvFEFX61gYoViaq7nCUHqbuQeTafjYjgrSPM1TuBu6h44mZ3Dqf4pwP175X9i",
  "key32": "2EiAJmbBctZEknZ4vmYgbQ4Jitv7o8niQU9tLjNrzX4FzxCmTYfVM9ahyi3k88tbyJEufsnKjAZrBBXgUtHGuUqM",
  "key33": "3QBcwZto6BbEQ9KqR2kLUZBDQ58uHR8pJM2AeybZbS2WxEHhG8gt7SHL8mfNePbwmGXx49HzFJVGqwhJLVGzdEVU",
  "key34": "2MPNABxDeKvoXRzRZqapxvpXyvnbUBaHA8trWTm3pSHjZBfzHrBp5BwpgAHYmC7g9jFimeNEQDPsmgHmJyw8ULzx",
  "key35": "3whVCo9n1mQy1fM6Dgfhktyv8mRZ1GMQu9d2JFLqkavQoAEyAjWb2Rd9BqE7h3GpswdmFJ4pd7zTz8Q1NQVB2aab",
  "key36": "3A9AGzW1XJLGinHZBFSkgJnCN34AYYajGo9SsqYVms2sSXrvsN5LXmGXADDiY9VKUuyn1uRM8pHiqYk4PNwjqxdn",
  "key37": "5Ptf8o9mCLpZ6mzX235yjX3Avz6VvSrEjaJuB9sGBqLjqr68sWkBtR3WBT2LLFmtBuhiySQWwn8MdqXcny4dFpC9",
  "key38": "5Uszo5aXaNDEgnDCPhPVpgvpuf9zueuVAuCfnvZxyrEzM5r9Z1MvcKM4gBojDxFARkJHXSn456Qmh9xiqMtaMEsM",
  "key39": "2YLkmep4AnbAi68fACPPRvY2Ub6oixTf8ypnpxB1vkC4KrFVLRkZpngWNTPV7pQbRCEon8kvMN3DYDinKCx9Btrw",
  "key40": "2SszvUze4wKkQpCBHeTxn9hnGM7Ew1R5RtBJAvmj174v44gn8LbP87CG7LkCvFyDNBjBnSBAWearpx9giPQ96AzJ",
  "key41": "5iPHcnA5bgcKLk3wBMRWqQA6pv7Sg92jr55TUdGxUtRf6YKKma8DEeJsdY5jpj6KsvBQ1iLTEiniPwxaJssZEuDt"
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
