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
    "2A34KsdBWqTqhchqoLRczGUd9f1R697MXC3ew5C2CHvG6Ewp2YqyryyJFskgcrR1VNFDVm96YXnkZgC5cQ7dFGic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PX7TkT4CpRkCaSYLqkG6N6dWjESKGw3ZsTSw3iypNCgx3M3t1aka8ziYjLvJSorsYRFfgZjYHYyMaT6aHDRyat2",
  "key1": "5ZbQCTYPf6bPChhBHfd8yq9guF1UUxchK4uAtqusNC4B9h2dsqzD22hzdaejnqXCDpmTuwE7ovBeMrS3KQVj2Jzm",
  "key2": "55W1G5Akyd6Jfh6VuJYqk4g3jQVsGegRYsrN37P3LSL3WJnAkqvARC6sK6cy73boNAK3UZEiTMQq74u3Hp3SxUvu",
  "key3": "Ud52od6ytryDamU6thJdKLkDaFdCDTf63VxzE7fQiMEJyvUGQHsafxKj36zfdkr2Y2MuN2FETiwsy7HCEvcLKRT",
  "key4": "oo7RUFvDEukx9u3KsLBvjwVWtPhqd52T5VmSw73fzfVFvq6KKAx1Lwx5xAJAh8g1BLAL56A9tkUzJW479cTbgdf",
  "key5": "36ZevknJPxJgH6qUEaeTkEnKmcTsgTxPRq8D8buBWQuYRjqjSPGTNiqRurMByKvnHpQJyz9ZfAEtzJDt9B9ms6sA",
  "key6": "4w1a5qxdB4eCNEpYMUDCik3FJQJm3kCse5wnaNDdo29Pyrb6KCpUvXADRxYv4ScHzzLSFqyrSoJSjSgJhMKNeZQr",
  "key7": "4ZWDE4eTqRWecyRb9JemkfT5R23ggpxLHmkMX69ueXMa4Y6C1GdGBQtCNQBy1GqPnAhUExdar8tqq1akQwVdEc6c",
  "key8": "5cZatvrTRxyDLoSxL5CMtK3ut66TthTePQGt8uHuaXgevqBsyhi3kevdLoddxPrawULjHi7svRhbRw49ES1txT4y",
  "key9": "2ucBKniV51LtzQ4ZrGPds11ZtXCsZJBrPQSB8CfA6MUJpEpTgbBBvpqwzDJkuKaPrDBzZsQ1emfarcRUyfHRAqCf",
  "key10": "4HTNuaBt3bXnEifQdPdC7KLxDXxvdeYRA7AiTLnRTwFR9Ma2BUboYvkbYxYF9122qVUYkhRWrjC7YTwW7SAarhWz",
  "key11": "5cKQaGVPkUpvsPBQJPKMpCFggxaQuidPAMbcGRgSUaXXJW9zS3PDXBNgjbi8qgH9DQYC6tz96brRXWntTKdqx4T8",
  "key12": "w5duDbuA5YsCxRWgNC8e2823YSo73usqFYy5myxP7uhotZQfpkZ9nNatwdYnPQab89jJZ9Q8bYcgDeNwxb3Negu",
  "key13": "4CM7eXMg1PWkAmFRANg2oqFGUWxLBRCshKjQbU86dWDRfTkW5Ae2U7qeFDi6UhfxKKipWQZM3k7ev2Rmf8tSgDL1",
  "key14": "Uts6qbF61xYB4fbcsKzDd2AWvuQKuhJPpYCZ7bKR32dUet5MTzR63JeA3FDYnWC7FMKB7rvp5jTStmAKG96LbZ9",
  "key15": "3Xopj2ME6rCeyaotFmvzWgFNccnHGWEemwnpgQydPPhbpj675xA1BMvz9h2orD8TrLNskJsFeZh54c8haJ1kyQE",
  "key16": "5PVvpbdkVgYag3SEDALfnJckzi76KNou6EA1iQoA1p5rNU8en8mkchFjPpv6tzUrzotvrrzcUzq7iWg2Aha3rXua",
  "key17": "guB8ookiCw5mFUFZLDv4Kk2eYSZ9m89NhtHXv9Lh48XYfJfqmLt4MtJf6X5rEyUfEszDakaXq4JuHPQdcVn3zmp",
  "key18": "5okou5UuqNU9bLaWMQrbGxHgGgAA1sUTZ9iEJ1NkibpU9VQY9KjjVETb25xPHcrokcu2XZWUD1G7XsiLYfzAso1S",
  "key19": "eLeVBJ1MskQRgTjKT8fiJT3foovcqqgkQEBpmxNu9W3MSNqCr4LqbHC9EW9t4qLkPocwTnJAXB29zfcreCkfhPp",
  "key20": "3Qnbgs8F9kJo4WXc27ANqRr6Efxsb7CFuYgu78P81hStfxpBMVEfVWyGqwTC2EsDmfSDyXW7GEviATBLegjnujzJ",
  "key21": "62qTvT7fDc618swYdw9Qh9Ga9nPBdUU6xaDwKSUm7n7HZCSnrp1sQeLmwgbrtv7Qe6JMhi3XyE3M4DARZGQ9Mws1",
  "key22": "5E5XigMCua2jLxf1ye9npjgwB9vVB3erbTx1GTLck8hrmLjdXtUhgYwWDBYg7kF9RBwGnC5W2TYcQfaZEdmq7FX",
  "key23": "3zSkTqnTqqfyqHmnxbWW1cFbiWcACs3V2HGZLC9bEYEpzVarnK5d3C6B6KHPf2fL5hAhxMRLJ3N5tNDAzcwhxQec",
  "key24": "rmQtYZWFR5kLVe8vHQFeHSC7zgyXJLs6Q9rJFnUBgtoQZKZPxeV2bZsE8asXBFUnvZXMXviWayWcwdCC8cydEdy",
  "key25": "KJeVXtZNCfszuAgE84i6Egbmhp16UN3C7BM2VGN8pAWXcceu2wzjcpGtCtPd1Stjy1Y2ipV3Tv9WsdR1ie22Bqr",
  "key26": "2ZChNfbrLJi3W2NJ8sKQmQoWQoss69wEmfb6qHxsHMBxi3Q6Qvzmc3cFe724WVLqpGSzMYojsxsV8PA9bwxKrWiG",
  "key27": "5DyiJ9nGXHBeQmgar3hYsjktosNu89GcHTc5M2T6RW4bL1SjELMi4Gk8iyBZfRxnKcs5kNoNiPmio6E2dgUJndhs",
  "key28": "gJcYn1mF3Dk5EWUBsqoRwheJT156fx718bS6qvBbY29e6Lk5XyavoihxcMsa4v6BPi8z9idjdRFaPNBE9amghD5",
  "key29": "5hmKxUKk1soYQc9yzsYUv5br1eJniU2wPr19P7NKFo9vmywcer9LRNPp2Hpz7rmRpdrbuvFvDxNAjxVfq2k9QBf2",
  "key30": "5F1PQB9iF8CwrXQuiFSZRwN2Wy2ipSY1uNWQcQm7iY2qhQVic9HFbT1jEv6n36R7Q7Ni2DgswuVcqShvizSbqYup",
  "key31": "2HKwGHyPob84Yukn7JBP9QYgoMQTXvw9zuPsNaaEcuXngJcDVygbzq4C7KoBE8rM6mcBBkSnsj2zfpfRTeTfgZUf",
  "key32": "4UcVHHX9onEKpAB7ZkBqiSEkB7r5kYDXno9fp96aoGF34TUiVCBx2Xjacuvhav3fcSExz34wi3GxCcwdpmd6QmD1",
  "key33": "BKvYM54UajPAffWkk9Y5Worbuq5UXgCVD83FKxFPG7111D9PbdATRCpfYSVog8uTmUjnYAcjAyGwL98i65Rj56h",
  "key34": "YGk5Y7dJAAi5C25Yqk8FrYJGo5VsQ2Lqu8tGW5h3M5L5HfAp5MYQZm8rvsi4Ko93YR26svELvDo3AydcCAGEQMS",
  "key35": "5RsQj6joqipiNagPSPnpT2o6ReDUknNJcCdqZk6bVFgPAhZ8VwoyEHqgv5LTrNeDPWAUTjgfw2akRi2vT23qhDsa",
  "key36": "5LzSbcoN64rQb2jEwj4W8XHeCQaT7EgTRc4tCfHKKAeS3modHqqGbZ3tLMgd77q5mwGcsvfvA27LvWZzT3VkqjDR"
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
