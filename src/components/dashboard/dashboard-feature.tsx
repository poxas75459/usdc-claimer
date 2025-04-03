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
    "xoJcYQ1oCkd12SuWhzRSYyaZhz4rqDbVT5ssA8TyPgNhJdc4fokWDUwSSk48oHcSDURcznAGRJ6rt9PnqrwUsYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chSrmSbXWnwCHcwp9Ehxm7YvzHGLZ5yApWmamPQfUA4akMZXXvRT7UXzaxhXyftEqMjyoLM1hTL6PPRxduCnq4e",
  "key1": "3z5oUNCJVfCo22gWGUsUgGxLB3U7Ake4z7DSbR9WR6rBiKkM4eQ5zGdWALJXCaoegnvzDtrzDZUZuh7jj4uCGvCt",
  "key2": "3jq4y5LHSMPCwtniukudg7uK1gCRXEAMkbkpGwWhZZ2LDpdDR5NCPqpSsiMcF5MyaSo7KfLrJaKyBhKPL9JXd8e1",
  "key3": "3Pc8cM3tndbYVx3kZAnE5yjGxGk2TXS8oDVeLFGvC3Dwvbzgr5SuAxXKV92NSox3Mwd2PL6RVuQz68T18BDSn86r",
  "key4": "3KZt5tzgmeFhuwnV3SbkiX62f8tKr3Aw43GD4JMKizC4zbfqm8YXUKj22PFg9x6AGs1YLRLVLPVj5xMqmkDcDeNr",
  "key5": "5bBV1qH1FgYT1GkAeEWzXUyVRxvK1o3xUu8hpSHMtbPPbr1gGWkkzCiHo7FxXAhqo89gPfYub8HoMrMEubc6Z7kb",
  "key6": "469dHA376ZZfUFMzoPMxaT5iZphHByq8RnenvEu713EtDguJ19bTRBv4gSvndN23HkLrqp9wvmfEjtifNgtoR3BV",
  "key7": "E9Ff9dQWbt7t9mpoj5FgqNv6aGwATjF5keesN8SpAa1K4bQfa6YTsb2K9EhnfBWamu2QAp7fhmqXs4a75hbLMKE",
  "key8": "5pxbq6x4kcfxy7Vhh2HFAQvyyKtEnsSSUrhjQofZw9te4n9PjGu3CweCot16bAH9vHFMkxNQ5h8x8rqFXEVTPqHz",
  "key9": "4bFAnUuFxeD8H6SD2XaWosbPNE7Di1o8v3gKVej4ggV9dwN1wySqtTYCyFDMA9EpWK86drAPyxgN97PjMKXNKcLC",
  "key10": "31VdVf7wJ1S2wcs9wxQCp3ARPTugFkZ7PYYcGWNcZYJXtGYKnh53bswAM7iuCyXCyYR9rSpU3fTkGWGzS79tpBnq",
  "key11": "5t7gxJvaR9Pczwgjkozurb8pdk9PXLudLb5khXHJEU4NxLH9o1cbEoy1seSyosTi8ofAFaqGXsnEC5AqMnRtSdH1",
  "key12": "kkiJhQptzMnGXYL3HfCG3QjjnLPhLpxaohRtRWh1kDcgFwAGGuWKSzMhL5HDjt5P6tjVLmC7EY3tkDw2qqqzfX7",
  "key13": "4B4EQQVgA2nKxmyS9RjeWMTySAjFHNG9vTkMXpbXjTqGqU16aAGjc5cR1S16WiCqYxLDjCnQ26gWoop8DcVvfLea",
  "key14": "2ZQNfMh66qUt8LhxLS9eGrGLLPBR4iTGPf24KzLk8hrV5ByNqCad1CaoqtGPBYfDq6Fq2KLQx1ud4j7NoZUXwuxT",
  "key15": "5eN97X5Rwe3vBLmE3AsfWkGqgrWcPacpEcCGkzjGxkJMov3PdyousQgkbrjXXfJTt2fSmFxrMJJNxGaMJ8ZEcPhx",
  "key16": "5vgwpV3xoyGSmPzSSnVwx2rkdKPZWE7ro9TZsYCoAh4uvqbaeLPGet5ZJq9At9aihbqFMGZTo3PyNy84FiQ33XMc",
  "key17": "N4ozKDuDdPLSnpwnL2YCJviaf2zytmSacFEnJqWs2gtVCogsw9DnepXioQ2sahoQZjs83Ach9wDkabo7YNUSFEf",
  "key18": "2JQk4uavpbLeNxtgbqVNYahEKQ3L2H55U9nm5zjr3zBXiMKKAARDqErc7KBGbN8ymMdmfy6MC97YfTqhZXVAJfDq",
  "key19": "stsZBpTAK4huo7PxBCUbXLePtRiHeXoAqUAJh4hKXvf4tvEt6YvzspGVPdQHY1mDeKuijYhtAKKS11Z4sKtXgKs",
  "key20": "uhrAs1qTqEfaBMKTcjUdd6t1dRdAByDKg1TyracAwTpShVeV5dLDUQYzXySkBWXWCSS6QdoMxwBPzGgZf4L8nhF",
  "key21": "4Eg3aS9JoMQBCbuYUejCL5r5N2fHB1aNvjYef4PX4CMJPxEFd51FpbU36PhzZmmxkVT2ixR3J6c472vE83DqtVi",
  "key22": "RRSKnkBPawDJumQU6S1jLfV12o9wq1xTaap17Mg9vtejf5PHXg9Vkp3RJT7gVJgEFZ8vAxKhtcZdzi2BRDeZedT",
  "key23": "2HNgFFz7TSqS6JDmr3uGDAHMNUWVWakJHqKVfJTkSFe1zvHeCaubbiqZFkuYMVgmHkE9yU2E611gt3yt956cQk59",
  "key24": "5SS7iPzus8NorFgMsXroYCk6hyDG2vkmd6VWoLvbQ54irufxEkedTiyUvLSEwNNXmKkxnZ2n3tF8icuYsnykGJdS",
  "key25": "2uX8w3Xfhfe9E1S29U3mDYEa94XTFdGAtuK3XN6Ykc66hsjqjukcte1jo946v2TSLMuHPX8vNnv9hB7dsvVeZHaR",
  "key26": "dKneLNZ4eCds3b2HSok8zQ6qH8MieRNSsAjgy5AgG6ZWTW5qPSKv79W3RLZaeqFeLAqwAJuAiABSFi8weo3e2q2",
  "key27": "3DC2XsbyS3HwyroFZ1KUp8h7UpALrnRrfDfrynzfAweaaMTS8WmN4tBxovRJn8buYnWaX28DvgH1wGycvdrrdjym",
  "key28": "37zvswSJMYYhCUo2msvDgBFei7cZmogNyK48sZ4AMZ18kXCsn3otHpT9KshJLtJ5ANuCUJ7oYc1ZKQgNgHb2JM2G",
  "key29": "QiwtNsJ9gzVCvSdFUtT6wjCXRbk8u6cpk6ZVatuaDaLtG2ThokVehtiaExkxtBx2XBwKZKtJzDg8eWccoGTwgU1"
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
