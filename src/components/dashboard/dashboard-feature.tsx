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
    "YLvW1zA9hYfHFkdxcdgzfqzLXmE6VRuhZTVRv2TXKjquzXMbiD9fhJZYZMCtcymX5spnnpvxUaKkbDqhrk2LNqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUoYSSz9SqxvpEpBk3SozDUgvdbXKuDoWpd9NqqpHBfJBvnXFgai8YMahhN6tgW3Du2yoKYGX6eWq7xikAx97FT",
  "key1": "57KxMSL3nuVRJTK8NJqEQTRb8DbmrKVBfhkyi4MbkEtGFjgKyD4n9Dz6xoRphftSGqdTbFZEivK6j7DJ6UyY7uN1",
  "key2": "4j8FhPwKsADceUuLDCGKcXnkr9LzM38G115NPqCHQxMKQk3rZdBAuSALbmJxkKCywosvqhzXJPMUVhQjz2e8Bt8y",
  "key3": "4AfWANpe3GMiS8v3YsXubbcXsELXVTXnU9M83Qie6vdsCnUwCHFCyHBLGvMXARL9hAAPbnEaQZradvDjTChqcYk",
  "key4": "23H9tAwzdTfmRUUujCaLugCG9cH9rzdZAvKosns7rxStcLTKR4pBVrnkZFxmqFYfBA1WTGngAsjvP42eNQrnoArD",
  "key5": "uS7QeiQnuK6TPkQQNS9gFjhV9ci9fdNNMUo9qf4VFbtFYEVpQenig78CuTVmKSLHC4CfTpdhpp1e8yiRtoFqcvP",
  "key6": "2TqUgJzqqZtBJkogAsaCc7ZopqeZK9h8MT4bfS5VJbXbajBrD8TFdVTWFZ3599faH9zFVn438zZYQpxspqjedcL3",
  "key7": "2VGw1MzYVjJ8VmxoJaN9Xo3iotev1PouNovi8fpPjDbDQ3VWhVafoS2BskzLHsD7hzWt7D5Eet5tEEgU3wcBC8Cd",
  "key8": "5cpEVUg6juh9xnfjZc1oZJMUrKhugyRmDfc2hyv7vVEBNtjE3SAMwqxtuviSwjT5QTdWya3q41nMWWhebM4effSk",
  "key9": "BuuHXySNF26QUc24AC49i8Jauz8RpZVywa4fvdnncsuuFTgpka4jQcbtnGUbhUTjDDK1okR9AtLovGXQz7miMCx",
  "key10": "2rm7DyT69m4nUqf9NWRzQcRxWKxycojMNYneeTsYebxnm5tLSg3CpGGmnHWLdtqjx73yfSGaC5ztLbcGRFxJz5pK",
  "key11": "2b2XTTTtBcwpQieUmsuRYYBjUUxFYVA92YCfyo86tB2HzSnNEmJgJuX5SxztKtTDLA3T7R3Db73gvEc649RX1r6M",
  "key12": "2ZSsxh5vmEjH1yBdWxeqSc8EC6h2reJWj5ipAy3SivA8RvEnbs8Qo2HfCBCw32uyS1ffgCusNufPXQX6TgUonz9N",
  "key13": "3PnKJnCF2L2tRtbJNzFAabT4jDdo694JTK4V8soifonKMaok8eKZuVaom9ExmAwD8BoEUqmTrr2eBAg84ouZyt5a",
  "key14": "2q7XDFTkwzEETA4VArTYpokxSe4fcpKVnyNvvM4iob3WXBSseerh7vozmPpgkZfPhXQgZ9D59cdkGcf53JzdxxTL",
  "key15": "62oyMBabH4srfrgRaRc2fbqrjSZScH9W78Nz9NFGSsuBwY6PKeiCXh1Q67ncEZgTcji7MQFUdCd95jVB6qJCpj4D",
  "key16": "4ZYnafDjgc1Gckrt7oXBtPZPRyw2rx7J97xVriM3hTGqR3VrrCrGvkf5TF1fAkc37hUZ9YX2UoZXDJPsRkCa1enh",
  "key17": "32dKSQ3Wsxjpo7nqU1ymW2yubKfmFVAS1rwKcLTwKDBY68As1H1a9oMHLtJ6qTREwYnqJLRPHkvVjduAhdjKv3Ur",
  "key18": "2YQvs7gt1coJcafR1jPkQ62AYSbCnoojhNCwrNx423FpYEwjca1Y1pKkSkQVpuggYoHnA5pmzBnkNNksR3Qc19f8",
  "key19": "PShkPWsRxvYvD68itC8LpTZpj5ebX2v9efvbVcVRuWikmRH9pnZVqueXcmsfXk83ncZHbUxukNXkMJGzMP1uHGf",
  "key20": "2M8xpf7KY3QtURNKGm3kFgQpHkjnf4nL73n7uR2JYWhQ9Hpof37befi6KwccJ5Jh4FvvZPeVrBGTbiCoZU6FuLXW",
  "key21": "2oZT4yDHyg1JvwKMvABTgmUbHex6UFFQ7aYMb2kGGcy4yfgPPd4t4QQn8H62BMBtpDMvvLhxwUBK3DzFvMVHciDn",
  "key22": "xVcSctTh3WNTdwxh7W5MrR8Bz6DRN4kngAuzN89qVzns2wT5ecAribo2qARmSU85txwQF1omNfugLJTcT7fxMA3",
  "key23": "3J6z9rXEsvxBiid9CWXgNcmED2igD8V3iwmNKnfeGZHPAQA51L2yEUeD3ywyM3KC3iyTX1DDkttAbv7m2jbbjF6M",
  "key24": "3RRf767ijsL97oBWe4TfQkiJoh4vbj6QQzF4411g51z6JeGGcjnsZTdocjvVbXqbQ7dSsZMwuRFFjweX3sJnFnJk",
  "key25": "397zDqoAfPy5Wfp3jXosXRowVBQqRxotSnAZZSxDK8ipDuLTMHVdGkMUQQBtwKYBcGqaBEKweJiduCoq8RzmnGDK",
  "key26": "4D1dRjvsMzjYfskqG4JXwfWBv8yRKXVotXcNjeD66Q7b6dT1dw7gkVydyK7iqbHE256Y57ApoHLdqFSis2GakwpM",
  "key27": "3G3xxUTGDzBVFJZBzGdUukNHNnQu2dYFnZc96fBWF99XdNjgLyDA1YJTQsGhB49WURpP8Gxapoao2CNDUHvQgxz4",
  "key28": "2QAyy2pWkBwVxqCXor97nBbjj8LjHcWQkq3bRB4mpbU5EpnV7pUCcvywieqD6NSSSoihXZHtHfciWBUnLJFDQbY5",
  "key29": "doQ4c3DmGNoqWjnvUHrFNWrWuMyP3KtVU54cbS1J3rkf3rnhJFhgJUHc3DGhRh6EmHko8cGvJw1JpSesUAoutCh",
  "key30": "3nBDUFTCJhcaEHyzvk9EWsag3Zknd2NP7U9ANqZDZxFimbxi7q5mthKgVZS65sr61rnCD7vNVqwrEaoFMRvgkPEP",
  "key31": "iKX7DMGeLS7vuaYQeJqSDgLaWAHFHN7oCJPLFmTGvJgXRB1K9ZLENxiEqXu3fuocwk2BNAjTjGPLE7KmcNdGUcR",
  "key32": "4aXpvXockcsTTwroBMPKsNKC3onrcU1MbWgwBhjXj1NBCdRtV4s9T3bMYGj2rLd5KUk1D1CdR2nojtLsaZ7T6Sra"
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
