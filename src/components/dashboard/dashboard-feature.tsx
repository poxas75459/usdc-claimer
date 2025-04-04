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
    "3Voi8H2hczucbcvMC4Y8xEEmv5wqBpCbCppS8jaEeXtsFf7YBnFbdzyjvR3vyE9xiXHySWyBjPwwoeGSjhT9yT2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PW8qvXakTsrsG7wDhaTPwNWx8BE2Rh7yxeos4u6bSNRKuAjtt65tfKJrHksHfEVsyuDhHtviBxJZz8rbssNUji1",
  "key1": "2yXgEXPWBPy4XXwTcNKkCuYDU45img4CfbXBQisb2QtJowaoRSkcdhcD83JLhbGFSFNexztqUTCbxDsgnbxbEYjc",
  "key2": "5fbqG3pjQ5o9KutP1r6igkrdhu7ZnGvffdJpaWUNL6HRdhgSnyeF268HugvJBUXHuFqYbbxGcs7EiJmv2BDu1Gpd",
  "key3": "4m9PWUpS5j3Cg84DMZsqFSSWznHbWLyNfvgKxrnxAZ5RZonPtj5z5qEc1LgCKNbDXyNqcfStJqJp9s84HXF52kxM",
  "key4": "5w95Uiw8DRimtyQCA732r4CbhVGVzsRL2Gi93w1i4XCFL8sbU9pR9JJ5vZfLQYetZf3YuRcx2H1kMeJbEo9BTZuY",
  "key5": "2a1jjRUuA5C2e7Q8YKqPiGWniAtSZyBYsqTSPoiWAxGfDKBVpV9MGfbNbX2zgEqhiQ18QDhcu2ToXzwniEZWW7eC",
  "key6": "5jXsBdreWAN852C3kCSjgAw6yKNQ3e7dLW4ZLgmJETABAigBCBvPmk3DjsEv96RN7TqTbbMY1D7pnhDZWP1HNQij",
  "key7": "2pWowK7SqH827T2YhRFBrsNFvYBLECQ8CyWCWmbDbDR8TZvpuHjRUsL3tk1xadGfCHW99qkKV9vyp7NeS7kjJpZn",
  "key8": "fwMgS9BWKoLmLXihcdk99zQw8Wgzuz8xLaZpN84dYXoSfeLhK63kkHThPgJNcXK3BaiLbq8F3DDmE45micbeaXB",
  "key9": "3zLupWHNb5QXunxucbkuU222zH8y28vnjViUkCvrzWGoxJQiRo1pKBYAav6snVZjP7m6cU7pq9yHSxFaJi6TgU8A",
  "key10": "5epK3ktUTcNsLn6XGVWnX9qHE7XQDbLJ1eF6CPGsgRSbNr7NvzmhqTGTu8zkbHcYkh7jpYmDzXRS4C3gg4E7HNTb",
  "key11": "4ZM82bMKuBYNBtc19ammR4FkmX4rQ7mNWVGhZbzDAYU6iyEnxVMveTQ2p1zK4gJEz7AsY2cxmDwDgcvjqeSg21ow",
  "key12": "5M4fcmanAXHmef1mhzs2yvUNJAXxzkfDezdU1wg1XSMH1sv9HqjZAknZ1k1nZErgdtBxmWkBiteCkn7NzQ6LbF9t",
  "key13": "5S8fb7dem8uqSJ1MXionE46wB4iG4B243TMA1kFxApHEFH3JgUyEhYZkenLiVPjubJW7gGT8SjKs7ZLxqP9cPhGS",
  "key14": "9GwQwmqP8z9dCMAeNtBLFF9jwG98pTVDDzZu9CSuzEcpY8ZH5tK4NoFjqK8uxzsezcSPvKfDGVvWTjc4cRPpjAw",
  "key15": "65XchuwdtiPqtd2EVyBfY5j3fB7JN7Avh8A3yFDdw8dmx8P3ggdg7uKdRJGZLkqhuZn5Kn6hJwv6xFCCzAZLxeVQ",
  "key16": "4F6TygaKfmybJVV9sPGkBjRSFx4gf5MQdi1GKhWVmKQ4r7VdfghdmtUDMTqGFjrmozbArGkHZY21XqNvv83LTjdV",
  "key17": "4yiQegS1D5bt2mAYPGzrmjndGgDPgqn5kKvn7n8saQPFoc1ud5w3Y9P8fFcom9LDnuBtxYme2urex6ZtWNkCH6qv",
  "key18": "2RgDSUC2GAFXuymXucEGnM5P1PaPqekXYu1vS5QX6SVLMiyVSf8KkbvhTXgR9FggEkPGpC8rYx9ZXH6FvpDewCFf",
  "key19": "4h5ZGmqXGvRuqZStx8oQcM2Mg5g7RMUEqv5skaxCtJYNVhCHejnsHu5RMJhiV1bnry7uTvMJXQRvdFU4JTokKrbH",
  "key20": "57dfo7GVt1Z37w9XhzvbBKzq1CDtd2QzBffaaHNFjfTtKKFWfKiGJRWY1S9RRuRFnhgP4B11bP8SwtEqRKPbPZYr",
  "key21": "325zX94LCR6RtVSh3YJM9FF6GoSX9Rqne4QZf2PD2t28BavvxC8vC83A6AY16ukcSWV3yJEkcgUEvjhyYB6UKE4",
  "key22": "21UVWAv5EvEGmzKFkuLXexH2BNMXYxNtc8YqRRmdtCzG57Wo7d1CF4YMhuvu32J4wVZY812uWJiBYBFmpfGGszFE",
  "key23": "4paG6Rx6FUzBhEHi95N6rycpWGyPmgGQ92mHn6WEneYEdP4pkVwayQS6NAiLjqdoQzxY7mJZ12bjYGnd72VnSRMG",
  "key24": "5MAbvnbCBbrQs3xQjHXLz5aY2esLBinYWmc73evcZv6rwsmT2mTaLfZM3Cv5a8zN7e1rakvQBbvN7r8nYMATESiM",
  "key25": "4MQ5E4NGy1RWGwB9aCLFBTPirsanFuSn8vXyAnA288tP7pzUS4bmkxEz5v3qTrpzAy5EB7wbttjSs51BWsnkHZX4",
  "key26": "3GN6L6jbRF37rbidnmZEqXRFTBPx7hN6tcxX55wpJCBbFc1MZGnrfaqyu7Tqs2RrC2PcvwGf81X4AF4PeipsugHY",
  "key27": "2xaVVyUmzWtsWmjZtKMk4nffz1B69zBWhh7R4WWiNxAHHQezQz4PsA4qvGN9V6D7KGovnwLgzUe8bcgr55eUX28E",
  "key28": "3BBoEAo3cHtZV8ehfg9hMuH4AHsHdUeRY7qVKNUziwcAqh7Tmj8zfMdvX5CAJ5qFMUcd91XwXV4DgZQH6ohSfKkE",
  "key29": "vMRywu8YCjitGtMJzM3kiNoKwPFPLLfbLysLES6xk14F9vnHomqPAArVyqzHKH7JU5Xe6bkGYeUZ7P4ExXYpzjs",
  "key30": "5zGEvuGmLUkUZbEmNxAS1kUnmmp78ZHMHbMDqgvvNSRTC689BZgcsLs6wZU8AeTBgz35kPjWfi2YMfFGVf2t4jac"
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
