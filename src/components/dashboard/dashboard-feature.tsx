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
    "344B3GKLvEoBUDNd8goNCtZzfwuCPyCp8AdNDYRins5i9pRSYZCuJTP3xmKeLqx77pH9hnu5VmNwDUyuuYENybQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRTMC4359sYZNo574FSBS2c7Nw5shjzNfiJi7N5htJyoxzuL4nSKm4JzTMpr1hRvGEQw5jCsmNrgjUtu7mCKZSU",
  "key1": "5VDX3YnTzcamrTR4tgvyP9CdSios7WzYrqcHLEcaHf5TGdyxZ6YQoBGhozcnRV6xinoeaqqtst6F2rfErY9CcQnk",
  "key2": "jeDaY9v7QHwP8bKqn51gFwfdwnf875oH3TFLe6TZRHCuqLBvdRkRkTc8a9n2NyC2Bcxmgv4hskkmMx4A3BzsvDj",
  "key3": "NJ27GanA5tu5hmfXX4dtvKs5kPwC5noKvqGrEi9YhUSZ5YxVSJ66RsXDzYXeheM2Ca2B7VeKZbEVU78A979tZQc",
  "key4": "5ufmm8YkMyniNANL2KCcVjKA8vJo5gNsSicHXYY4NxRPuD3fHjszU4H71tGXoEgH9MY8XSy8AE9zg1AVZuEHu6ms",
  "key5": "23UYM8kv3TPG5cTF3bTYjv52zdAQ3Vt2PD8NPFVhvD9bC92AH69u2JJZxSQh4WvBtPrU9oxBvHDxc2aPgPFdLWo3",
  "key6": "34nxPxBvmmyaoezEyQ5cFs7bNxZBnrh9e77AiXK9v7xcyCjDyPW9psJz8kZUTczhoARR1d9V683TgSzNMChSuWh6",
  "key7": "4T34eQJBBE8wRTHagAX4ZygDZTmUErN2v2C8TGh8LeAqa6dkumimoE25zMm4td1fxQ6WdcPTJTNJd9sJKUAFP2hj",
  "key8": "4NGz4QZrmDgMGjeH7yT3kuSz76KPdogBT9kEZjJbV8Paf3vy8HEAaCQAEPAYdButxH4zBZkAE7WR7J9HZDrnx1Tp",
  "key9": "YpTr8obUBMk3cRzCvbZDt3bjTjQJpebbGpHspjjeDK23XTJfqbsS7GFaA1YZuS9CYAKMxgfjQJZvYt1N9nfDLqH",
  "key10": "5A4fJm8XtnQHC21RDoUoFDVXVs8X3oEBpUeLLQfU43xnGnUJBJ6K3JfakQ8cm81p8GE311huASrukMnzt96c2SaC",
  "key11": "5tWSh9RZeD1hcwmYAVQq4k7JFNH9hStYAuAERx7WLFk7uC2RLeDe9P5ZhwamTYacxAm6VXJLSduBYAHfAxS26bdd",
  "key12": "5PSNA6y73191agGDFWUgKRkRt1cetNPohuHm1Zpd8KfeJudn3u9P3pyCD4yySWfM2mqWXQLNp5J9ZNEh6J39EdYX",
  "key13": "3bzifncLpLFZUNjqiRmUnSba42XS6tehuGGmfGqoagrHMiNonjjnsG6b715sYCNSJ9R7FFC9vuSr2paaNME6Sydz",
  "key14": "5bLpcj5UBT7xWHTNGF2SMneLR6qZdsGtpsUduF9uqU8mzHXciGiz2prrXwWPSvG193b2vgCmnkcMNvo1yCCZCK8S",
  "key15": "5w8oTi5wcnQ3AxnmsgfrLhYox6JAe4iWSD2G53jn7wnF7rhqppkCevfGE1yZoU15PDpFkcbmtQW6F3b9XANykH1p",
  "key16": "5HNp5E2Q1Uhs6K4G2ui4t65ovdcZqWJMvRH649amwUJqNWZy67YktXbKzBvqab7vY9aERhNiHnimUnhkEREfTaXw",
  "key17": "4ixg2pmVDpSSicb5DQ84ho9tLUMhekFjBBpNW9spiSCu8B6m5zifzv6WmWWZk5cBPNrhmt5P4wP7jWWL7DvPuZHv",
  "key18": "2CqWYqzXxUDJR9M5QrcJjVSWnrkSW2f6mDM74qmCPmLpLzf99o8GxDMUbCoZGSY6wZdRYGhDfK6AUVPcggekf8Ng",
  "key19": "bqr7VezESdkL8PFUAM44GwquriRWYaGyVHJ7SvkMfLMHiWiR3cNHT8zkRqjeQqZwnHzAmT6gACgrmwQjESk4tFg",
  "key20": "3fURvz3rxdpnkXUDxFubk6BfpgNqk2nfWjXaaE5YhRC5QQvBD18wDKoFhtD6f3Lak4XKpwKcpXHnPjev1Pfpry6j",
  "key21": "3oAWYGDWbu3ELuZyBZiD781rcMbcGPnYwoXLNUiNhpUPTTFr15Q7vt4S5mEvAzdZgdwLyFs8TRQuC4Ssukw4mLgs",
  "key22": "3MPRdyDEWL4hyVKtqFe7QJyFtbVyZcUkQfGdMQ8xWvSQfUnvCuKZr3jrXHehFWLqQLgjR9eytzGrTQCgFu7rciQE",
  "key23": "5L8HaG1Rw7HVWkfojDir3aQphxvMRZAY81cHejKbmknpX8d6pNq6vod6zWhJTghVwMczZe6ENpSEuUAotxUiaLdb",
  "key24": "5D9wgmiou9XgQ39kJ21gJxX7wxr93BQ1PvH57EpmsrkQBiXvvuQybS2MFtBmxNKHBiKsysCFdDJFZSLCpgk4vHFM",
  "key25": "4NGwP7ohgyxkn1tt7zoBRnKzAcCdgRR74iJiofzzFUwLjP3dtGwDzsZEEhLuzRE8LwzxwBCzeXczULknVNGvuqPm",
  "key26": "NNaVwm43VGwLB4zBreUTwFNfKiAWkDSmLoyBkHabctky2TCfzyduzeZkNzY5o9PSYHYscf2tVm1v9Fv7iotjpw7",
  "key27": "3Qk2PL2iqTMFYroWyNAMnQ9vbzVmp7b2nxpAgTixjFLMtZsZGJY3E6G52VGMAqGtX1mk2H9sLuu5PBQj1ERMSHEa",
  "key28": "5rzzyKr3w7An7WwREBLBPC6muJWFZeMccbYxRohyCEf2sGvhWkZDaqJtpUZy5vmZUMHaHL6P9RoHmkUz1QF7iekj",
  "key29": "3ADrMHYrLNwkprLrBXU4gydyEgF4jbGXk6YMpn4jaX6DsTuGYtSqWbLcuV1xR4ztPkEm6PcU3AZHig6JAseF2pVk",
  "key30": "4kG1bQRbY9US7vYg4MwF9a9YmGksEdzCG2Nn8q4j2V3tazraUyXbt4WqLqpxrWup7wDkLXn7bfzWtFc4xPCBENNX",
  "key31": "4Ahv1b9kX9RG2fKHL2ECZykLBnayiHuQNhRacAQ2oZxMmXP6BdcS2pbSUz8E9iardLJLrukiHG7TatCqRvQpvv9V",
  "key32": "5pYq432SP5A5XkENRrmHaf1kukHkUqH6spLftZgYQKEZ3cJAJcC2nr8bNKpXHyQpAnVgYMFvTW1AJNeVdQ6wKszq"
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
