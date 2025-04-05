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
    "37wwKTzi5arpGtuHZvNddAK9578vSFCeqBfTUGgdTAmTNbzafbbviwFyBVyRSjwHCZG5vRMqD5wooUPjB8TUsKpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47knt2436wSCawhAamm1PumWxvn8nbegxdHDkKLunaGmXANQMXvbuZEGXPTQN2LPkHKRHFLcBzVwsStMATDJBiKk",
  "key1": "8TTthJcUHSrUpP6xsqS98PVAoorSdicsdwJ6EFPD8yQgpLbqCu6BueBSrVSznFyTWB2TjUWGqWhFDSzN5F7PppF",
  "key2": "vLSN6xqQBxsN5fi1XsWTw3UFXdV7ygvkA1UkZXP6XQqZSYrcTvHSofnKQiqrKy2qTad51kcAHbnrmp2C3dp49rW",
  "key3": "3oDJKoVqBDgh77BVayEoVJmsbePeFYwq1X5h2uMuq9rqhRbCAw85Dy6vrHBigVQqpitC9MBY2kd5XPFE3KVKmcF4",
  "key4": "56iUPbNHRNvvyvHhAYLd4TXU2pfFMxpUNzVWtk8E5XmD5fuMqWLku6ToV8BxmPM6zHKerCZfx1qa87TFT6DjYggH",
  "key5": "5TzCwWYfrykPL2UtiXTZpuRv1j2hqyHisB1RVUrecJYvmGtdVdG5ieMSvqmWNWKAUtM7vh4tL3jVR7ybisjscKU9",
  "key6": "EKB52AhidPXQh5CbCCSozeKBks626n8m2xW2DEkAGDbUViZvtKcz4MR1nu9YS2zhHHo1NT7EXnt2ZJRpTWbeN5m",
  "key7": "3irvzB723QaVEsYSHyF9G3wwnSnSeugExjGkyrZnZsPiaLSdxPYi8vNnT2aY4UDNiyGVbf4qtgSxUeaDC1Aa91gH",
  "key8": "29j4iSWrDPR5QVgknwXGCAB8RMZVGjYQGZncrzVXMXBxJ8gg93uVNLdr7eb2MmiS8VMj5asuQr1NiCGtpMEvJjev",
  "key9": "oKPJGvzJJdF3rvEfDbN29LXtH7y1bpQFneKWxdhY21a85jqviktuPTwyiZ4zCjHh9G5xReM7jria2Z6xN5khm2h",
  "key10": "4M88XwEkoXtYuPnJ5kyJ6PvgFz867zR6meAKCfH9aGDRJLv6keTktiE31YbmahKNtStodB7EUyK4fZ4YYHhddmzf",
  "key11": "rDQDY8DFsuPC7Wm7yDS961KpgwmaV6FzF4WPJ8LD7KGj776v8tFjRR5ntUmmqunhcBcGxgP2HzKfUUha3oH2cu3",
  "key12": "A2teCeZnXHm4cZDCyH5s4Vos7YGwVGpvY5cyf8QKb49JjdHbfatqLEzEhdcVt2vWrKbtCwN8KHSw8g3CX1dY5Uh",
  "key13": "4QW1REk6FNC8LwXfqEPCr1YwsUZWFiRbcoijUvvvQMvaEHshHZaoNNXpKoKSvGqR8zsd36if5WPoSiCFG2MaEBGB",
  "key14": "4FDc84HNrjvAgp7LaT54Du2dCkoRVPJ7ryPCg2bNME93aWX3oWbb4APQ7o4cY4tTVXPN13E5x9t6hymaeN2YL1TG",
  "key15": "5TLZGYZqLw3ft8gCea9zfq33RX8oK7MoHp8LiY65cLTo4mWyivSC22fPAHAsFeBW94by1mj4aXyo3GEQ4hGnuYtE",
  "key16": "S39R48gL44K5S5WPHQBcfABv2h818ENdhcehNsAURCkkU7BQSvgSmEcvSaefp1oiQ1Y1npNTpaif9KSQYBS8KQ2",
  "key17": "2UjXZFMtwHooi1vBJHzNE6XeP6W5q7qysSsTKA72aqUXrqMyZMU8wwpRGnE1tC1t2mN1e6Loux7TvCBu1oFSzET8",
  "key18": "5ewzgd32bDjeM8hv4cWoqwffrBHiz1JtM8SQPGax7GSGkFTrEWfmv6V49pmLPbD4CvxKzvsFgYiAQyEkKxaYQM9u",
  "key19": "3VAY9UzB4LERoke7irZnCxpiacds8RVag3dWLdoHi7W6kuLYKg8LokDBi8rZwDP5PHmp4htEqH3JYje3bL3yfNp",
  "key20": "3PGhgwGxNuB5cqmb2QfW7PJ7XDWbhFHKdCQZiejzkKQxmuAvqGaMFefPGMAYkksduZqt6gvX3n8vUR1puhzv1D9r",
  "key21": "5vVv47xBy1sGmpydddvkXbNhFMXRNXap3SjjTkfMMJXExmcaoL18MUamzxAwZMSBKDWYkXAi4gRvxhBnkh1TqGbP",
  "key22": "66Q6fBkWCMsacgmo3HG9MUH4j58ns2Mq2EXCQtHZxwbuMuhANbpu9d5wnynN1FYjJzC8Y2rBg8JXH71tJ5bnaTvE",
  "key23": "43z6jGFQdeVJg5Eouy1GezM9mpksySmcLWxB7NqTniuMvNL7oz4khA6nimyWch2g8m44114bQeVaHTGy8wt3fESE",
  "key24": "5WHzA7MdioVkXioXL1MJKcxWKjTF7xwijHQs6iQro8ipvq8NrTHUqAbtXEmDhGcL5T2WrqeknVt57EcGz9yFWCq8",
  "key25": "5Gr5p9xPTXZ8TKrA7rws23mujpwN25UQAW8DXYH6N8Q3j4n7Nfj18rBd46AG68PvLYaETB1ihB5fpDqHxVyMR5iK",
  "key26": "ZX3Fb9Q5zHmvgNpEvnq9At6tr2hRuAeva3YNKgsErYauaC3UwymCysdV4Sw4Q6Qi3Yk6U1Jx1DiiQRJZ99DAyCf",
  "key27": "4imR1m97ZYLi6AWSbxstJJYeWj4CMH9MKSNdt9jQ5a2GeEoxmLCdsBg5yTjZGtpzcnADPv6bMWDRdxJTZVQzG4RB",
  "key28": "3NhnFt1hDpLP97G3i1BjLNaF1AcG9nJMSL3ker45oNgQ83UA1CUu3fBKBN4Q8B5k7y3mrEv51BjF4CbycsLUYNoV",
  "key29": "5sRShRXdkEXQWN9pEToNXpvetZ9ftGBo9dQkTW9VU8etvAdhzmTAt7BtHSMKZM91p3ejsTAfWUSAMATTwEnnYeNp",
  "key30": "34qYQDQFwaKnExJTXirTKBwNUTSyKoTi17wacUBhyddTvmtQ3MSCad71PViSKatuykABPAQyKnepc2qSGz41RSEU",
  "key31": "5XfV2Pczi27QXGwPebxaEjkMSgdbPbYMNaEmUc63cicSMc6iyG9JmZgrFdCVedT1atHBemrtWFGSXx3qm4ZfQGJQ",
  "key32": "VE1VTj9cna35QkBAPLQsLo4GfCfmhdmJCK39g8rAEdSDMTsNutKua7afkKyWQ6co3iqywkcxCp7ggWYp3zQGB1i",
  "key33": "4mX7K5rTNEs7i8HmxHQb6FwU5toYNXky1QoeYLqgeJW8Z5PWQdWXqnLHsotS2FPPezzTrE5TJqaUZfEF9oBjproz"
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
