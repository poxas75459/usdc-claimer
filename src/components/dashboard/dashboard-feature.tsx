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
    "3SmzK18mvbU6M28wjaRJybaZxEVd1LNd6DgHLosMic8174YBj45JkeVrKvy9muSFyAtZvcxfbig1cF3EzuR7KLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvbWhwbWt41w8GrCzGGSHtvNG6WqaiHZVMkUCTTBbXLwVLpZUThypoUma35bgZFLq44kFP1kcYAZYCFZoioopHJ",
  "key1": "2ACbZXwt6XumQX2BxFEUqmxYhADTcRXrQJR6xeqJFoZUopdtMPz6z4VyK5CWKWFriUGL5Yhc73ymVvtqjNF8DUMR",
  "key2": "7zZamju7D6NWVZwFX6YLBRkfXFbmX39zkA8K6Ydk4fJ1VZnApJEeksuinUcWq215rbVZ5obimo9vizJr5xmHwGm",
  "key3": "3SUp9r4eKrR8oMiHvv3vY9Zfu7cE7QoQLGUhj7NcXeTLiGDtjfvX3D7bAu5fCLpRxJMANjwRuUYQ3zcuBNtqTRz8",
  "key4": "3EEXv4YYnNbDLuuzx4ADqHKFH2iEKbuqsLLWvCQW7A1o9Ts9TuCvPv8wDGxtnvNZH2U9FC4hw5dKPr73yZZvdyXu",
  "key5": "3QSf4rTbVZXoKziYk7kNRhMN2JM9ob55VhyUUkDpC2JFNaWas3uFJbVVagVLK8qqwumSnxuQFP8Vbqy9iffhdUqY",
  "key6": "3qnNLbMZeb3K4FMboRnES7SZqCNiUdK8dXZizpmCT2AJMoK8kGAW3kAmTSHvbmngdPeA8kzYFt9EgwkaNKoJk19U",
  "key7": "412HbdH697R5DBSZxgUqM1rALk7phF3FGJWCfZtA98zBtbHAs6V92rbg526w7BkDHvAdMGdJWgUiHXH5s3LgTFWH",
  "key8": "4rgb6mUWhngPpehMYK4cgWMvbHHHgGmfEpVHoE1wpKzxRDwuhT7VQhUWnxVFihKNyUXYoHj57pf1chj1qUj4P4rH",
  "key9": "yQRcadZjx9FARayFHDo2D38YpAppSTxbbS9H3qmYtvGR6VoTUxUnAXeY4fm7yJhciQsTms458TN4n4xo4XuvLLP",
  "key10": "61ne4SSXNzeMGu1avJFD4hCMZrkJq9hcT2CFeSsuWofAin4xhDL1LXx1XwqJBnP35qsgG3ZMzuPDYQPQmSTGnVy8",
  "key11": "2yrYm3k8o5XBSYCwYR4PEduiG39VowFX9rj7YtFBvYUNAhzZbJ649LrJBFZGcz2cNozyVMiT7gFdDP9CCdzGweVD",
  "key12": "xx8HMNhCmVdsqGoKi7uY6V7J2ZgeU3j8na912Q21hQwfzegJscof1z86YAPWESyueVLtZeEPb9nvhyEWhqWxBS7",
  "key13": "5gVeDBb1btFLpHxa6hrXhgU5eW6oVrtCM32t9KG4knj4qkAF8wAyg5b9v3MB4S2cPtnB8rjZN3GF6zSbVFtK1RKv",
  "key14": "5uEAbx6jgsQtsDDe2xQL7sQz96YJTBnVKvUmsaquTwEF41aHCLHwto58msKdMVMRhKhU1LWc2kdDDrjt7hJhJacj",
  "key15": "4i7S9NkpCu55ptsdDbHDPPtRVMS6VbjUQ2AxwbxqTXQwEGtc45G2c1Fb7WHgJvHyxxyYDbt2RAyBBcqBQaQgUR2E",
  "key16": "3hcQcXKjEmADLH22tcQctiMDTuwtT6YzByA1Gd1Gu6NnQz24zUxVNkAnNtLxrzGvzoTzpCCb95LhAaqcubSaxKj8",
  "key17": "3RjQsGrmJTnRrgFAXFbQa9XD5gJSxLD2haRa2LTCthsYeR3Cadw1ZzypGqFRT3nA5Dn8oqB1HMq2tJjJKhxmY8Tf",
  "key18": "3kBvYDYhwondhq8mMfnRQTdCrc1oyk5FAtRd7tV7sfdsrRY96dW7bVF4xTrf2usemqwrnZ4op8a4pLUxHJ2Agytc",
  "key19": "353LN5N2Rgjwik5R68hgZRaUDfbKWzYVdegLkeymddMrGABSfetqaY4vrtHuJtxuGtDCVP3QZNAR6XyvQ6z9K2m6",
  "key20": "5fCUuA17fQLEL4ZQCKXvBK1nGRjGP5PCughWnhiN3w4WHRTFEHFRs2RVJfktJhrX5eZsQ3RPgUb1eTqDnwwiK2mB",
  "key21": "5vgj7z7CdXxuwemYaXUGyY7MVs2AzjmAdHXHApKzfRAUoWMPitzxY32N2CNPUbghCndXF36iNhpK3oBBBxqANXct",
  "key22": "4oDdBJtGc2NXyuJWDLEdXFwqCY8UgNNHozsQJGANYFUjhLEDfX4xSABR3Y1N1EBtXWB6wb1ysn9CPc9zTRYdhDe9",
  "key23": "65HroFWqjF2atxMkxzFAz5sB2fgfAnEZ85ovDGAsCfZ9gaSc1Fcv8TQSGNYozwxLDhtHknzf5nJN8eTT2GrthRPc",
  "key24": "4JfeZks8rUWXtWPhn9RDCHL82KfvAwyMCTWinitqXdSV7cn7tKYDE61rh3VqyqWDuT2twgPF61xwDuKBHu2RejaK",
  "key25": "s8pBQRXbfJdxmCXtbjPKsML4m1gW6qspf7bVrvScQeJHybWiPvXwzhfkBQYWqD1FNifVY4gDa7MnxjXKKuxEvsy",
  "key26": "5D5P8LVfyQHmV1mSyXqrZJpE8MNJsafr5JZ9dvLkptnNzmqq7VRSi6L7f5rncTUrowksKmvKfBuwo3pb1Kit85Kw",
  "key27": "2gLNZoDwGivqMwMtU2Y1BZJTj9qmNdTSpcKiUeH6mqRgpcC5J9UxKRLTAVe9hTygrzJubExhtwpxTYZteMvbrPGu",
  "key28": "4u6WVmC53dCpB3uQGSi1YCcDgPLWL6j1mryrZNkqLo55T7a6Wrt34Gk2MXtgB8zTx46AYYegmuVSQ6gdy4LLhgBr",
  "key29": "63fJLgu1HLbHQotrEKoAR7oLspKQXdhYK5k3eYuPkzWtpKdx7rh8j9hNiycYbhUASgJdRpWR4PQSxdma5xnrg1f1",
  "key30": "5mvYTigmKVPBBBdhL5MmjWzuM2txDjPwjrGuwqYmvfg2DvnBbDxVJKnKXzDSX9h8ViKroJukZn1rqKgzK5ANvcRA",
  "key31": "3gZ4fLkyFjzVMB4Z1eN5YkbkKTCjQUVLSGjDRzF9owtsFHQwJmK76NVGRAdtFEjByegsKXxhThZc8xAUSzGNuLxQ",
  "key32": "4aWcZ92HJ3vRfqdvuANA4UDvZHG7FHiWdMa3fkHVbddUvRouy7BFtoA3gmgni5L3dZ5M2MpBUJygtWFTY7drtdDY",
  "key33": "4TSWHoHmh3rzmPP1c9SFE5S9psC1VAwn2AVtPoFzNFRnWuoGB9VQerXzX9FR8ztkLedBS4ftpyPuzKNEbReH149p",
  "key34": "EPFc76nM8YRvzv6D53DY4ZJ46oC9e8W4vcjD14HekRRrxoavZwmL9tKQKzfvuYELFU8xf1ie4CArZhW1dx2M4H2",
  "key35": "vpUWuypYqvVgmcTRbNU8WaNzQxvfTSvxjN4fJA1LrPg3Fzy91kLfKzqGyjit9xCCN1M6Z8etB8KtfvvLFYjKk3B",
  "key36": "2porMsA6a5o1cQeu2WdW2adrbheCJ3r9vooKdukYN5fLMZrqXaqoBSLZwwUfSKQsgTX5jkiLFMmrS3DeB7YNhCEb",
  "key37": "5G7XsPirwVmEeKVnBzMxjPjE7rzcvvnVawdEUAYg1Mz56MNEEtqrxjEAQbcWXcM57KmhYhqevCcY3LFtzKJ1KS2h",
  "key38": "wRgu4R6A9Wd51JxyN1GzSo7o8sSfCPDLwAnx6vyKjyWABsgpYV97sVa3qKFHYio5E1HYUUTRAr53JDwPzoHfud6",
  "key39": "2RFQSLMYPENsY7UajXMkp5GTUL1uQLxoZwjVDzWMub1Tj2YxXtj5UzoHaVcfjp2xMeqeCtgXVtCruq4HyprZgnLU",
  "key40": "2ZDimknnnrjrcDNLvxmWPaaejuMXi4anxERHhNnxbXYFFhcxYdeHmJ13aJrsnAqFj6D8R11E1izKQQj4kQjBfgL3",
  "key41": "juGfQWsy43hWMTX5RArh4NEmVWSPFWTQza9B7Yqe72aYhuMs8vCF4G9nUhM2j8oZuYX2W2dxpTzPqL6eRSvDEBS",
  "key42": "3PwA3ezPNHuxvRSUHNVL856YqFr2Gp9WfFwbwHGsSJoUyrfLKj8g4zThk3L4itsqnLjrozPA1i5yKyk2mkPkBZCR",
  "key43": "3jCYjVWhYvdkCQUQdCJ8VEcEAb9AnvDHy3JdzTW7Jz5hMf1cvbkXqg2nEAW9h56YuTHybiJz3Ta5abcBDtXBWyEq",
  "key44": "4mwpwVvRDvGfz8nAaz7PhZYQqxXyN6m3yiWXJDpHCmggpFzFDPkmntS33BrVbtGuVZWKYedNQKEBUKQNWVvoVmYD",
  "key45": "5hq7VkMNDbgkrLRV2J5agAqW5mdgWSmNdqJg8xX8ANmjHafcQujm99zDieHetDwf8S1yg6KSEGx6nm2L3ktooxfF",
  "key46": "7fb68No8rjSuYuWyMt2DRqfjSW23dmPPxTJhWyHHF53ZzaQiQgN28UYSmcNJrUrPWvVpRJ5LEuJekUKqPTnGAFf",
  "key47": "3yzUGiB8VRSZnh17kfTnx1KLV1vPHN8dQVmVLPwqQZwAF8oZjTBpLt2aQNDjs837eU3f9KepY3pNXBWRrCRoX9iW"
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
