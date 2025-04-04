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
    "27AeqBjuFAK2V9CkWVvSg6UhZAsFj94QK1ktT7z52fTsJtVACmW5jGbTa8JWvd6KsmcnpYJu8UUfjyr1HnkhmkY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EpUr4HPWFceRHtxAexAFT4HjF5xnHqGPVVgZvYzEkevGmN3GfgnX4Qx9EWNsbn1BEh4J9BrQxHgC9P38qJJ3eDm",
  "key1": "5ThLftvDwiJL4rWbRQ7Tk2Vna1XVVdx73CaJB1jarmrqMzwsZ4RTApRNvEw3WFxWGbJRreUaH4a5H2348ZrBEzH2",
  "key2": "25khBzepW9R3TKjrYQ4tSXHjTHyWaXf82TtkSQY4WWgXgBieqdBGqGdnCxAJCTdTi2KyzqnMkG9MLKsCSKbC81U6",
  "key3": "3mC42Vx1jYfLgDNMG7MHJA77CkN2vELcGEhqTVQ8Dx1GS1L73WfGsAW36S8wvAkazrjNrqoFH89T51z5qv7QrXGx",
  "key4": "47E1shK6igMbYg4Dgfbnjzy9KaMv9mYnHWFvf6o9ou9jC76u3etijMxypws2XRffWGNiJwbnTtg21oqmogBuiNyH",
  "key5": "3SJDg28aakkv4RtoTHXuxPW5zi1K8pWZkbbceTcDdaZS5mNF2fXV1VdhELkQKL8EVFu3hGs2Vq5rbfUxxsSZZtrx",
  "key6": "3RUXGMbZ1PWRcrLVxgbgccBBRSoJPjDYmS8S5oE6UbyNLVx8A7FnmxWuZ2LkaAkL57WaTp52qFxgSyNMZMKYjPpS",
  "key7": "2zMvqYwFGNG9HCds3hFS1jVRhhPxx62hktNFTFjcZVd96qJvQQuqsUxhiTXWeiQY58e7drcHTrJFhdR8CXyQ29z1",
  "key8": "5qJXpShtJvtjgjb7L8umm82GtEyLbASAbVPn5wYGZEAeo7hxsnRreXeoK3RdyeyBBYRfm3RCrZHhTG9WoUneBevM",
  "key9": "2GUGGWKu8aFQ5H4Cm3XZzj4LHEZpjpJa6gX6q1AX4TyjZgmUsaZj2xErBcxqSXTZQQoNUhfxy7FjexvTwrDfo9X5",
  "key10": "3vnbnbE7dQsb5YRxDf1cJrXwnWr3gkJrB1hWRzuC43pZRvcxfVxzEXuhxE4tCywnwofFPkGQVP1oWcXzM5fSJoev",
  "key11": "5QZ5XFAPfH9BRe1N6cF4DxFuyRV7KKB2qCTvFTPBWFzsbiAXt6BzteanhKMsALWRkjsw7X2dvb84BeUVWP8rxgBf",
  "key12": "4qEbMMk3JGumkuBxHM7kPyUPVSLyp2FTcoqpsAvw4TgVN7ReA9eegJDCsW9KjUNBqqPKNYqnPTi8DYqKeS8S9hV8",
  "key13": "yLiYMRbZPv3gYBF2VBii8iDK1q94xYxFe68xYarz35RMPvCTwKzGKVttNcn9Bd6YPBDUjvZwcbsMAnFSLpgK9G2",
  "key14": "3abkWm2Lvp4AJauH11YYYBcLH8XpdyZKLYwJqexxFXdzNXZ8eJ166kiqngTFPwDDk5xcy2UbwzzeMxK8pxiA87hg",
  "key15": "5LrRizABpkFYYcT6Gy5JmuZ2xrr9mef8LJ1cww6VopXKG6RvTp7QS7cVTm95u5nE31JT8gbXdwXG9zDQnoFzMt5C",
  "key16": "5Tq225afSujf1Xv3NLqLHhq9kddibe9SNEFdPwRbSyHVWWbPFN9p1CWLya9Q9MYMYGEAnhoj5uT1RmEbtK4VLCvc",
  "key17": "5RPK9fffy3cC7qmGtf5Mq3rgGiHz9J81U5qMUwFPrJDe4mwQnhYdtyMAboWx8fagjXsDunrmL5NWXeEPfpqvWBLM",
  "key18": "36snu9gyTAVjPc5e27e67kPnepMcgNd7rjr4dJXS45hZZJjw8A9GKor158oQsVubAGu9GqYZA9L2EuYP8tHJ4THA",
  "key19": "BaXSq1bnjAggwRifxme2qvP65JKPi8WsKBf8h6grngv4npMzQq5SqvgJP3EB6gfqpB6sgR9SewMaDMetWJx9tpU",
  "key20": "3UxzPiaTKVs1RwyiJ8cWnVMJER4B3BKzbnfJsXYj9cUv3rKp6weY7jHp5wYLUfRTvDFf4FHc2MLM3Yg2dYAmc3jk",
  "key21": "668oyRzfNgMJhz9GroJ3smwhewSj3bcGVQLkA5VBskDbVmrYmNYLMUiZPfrYNkKh83mqzkFZmTzygyUSTq3TbSdX",
  "key22": "5TmRv7YzcMhZ8htbK6rzB3k4AFKMyLeCTV19PBQqTuXN9SKi4GVVh6Kn5Vky17zKx29CWh56Yz3Tw4fdJFmmj8Bf",
  "key23": "3pZgxow2FSPAh5uN6fvmyQjsGcRzvwc5DV2Ud1ZnLjq5FrHzh8V2Roiziy3xaTtCK2m5A4mQBo9KuHHtDK5g8UTE",
  "key24": "5EnGMZ2y47RHEsEcMqYQ85hXkyTa5jrc5jhWMBJzEbC64BvQG9Wr5hppqKaZ6Kv6R3Pj1RukExoo32mrbvk6LhU4",
  "key25": "5vDGH1eTC6oumum2mcCXRinKiErvZ1ozyWTGzJJj5ioaqe1WyfJnMExH5sNs3i3JWe3cerDMc1nwD9zHW27P8diF"
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
