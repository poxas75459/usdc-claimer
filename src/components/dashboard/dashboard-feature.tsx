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
    "5y7SbMz9qjZYbRuCiFoDUtdDSLqTdNjnr5hovoYtpgMiDFDJ2JWYag9Hnv6E3kGeRfrT8VZWEnKWDCH8bTmc6Y3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNpM9PMoZNwnXBbxCYA8o8b3duYAbx5dsuoJU388muJ14QEigdbMyJmPjJXr7NZARifeuXw1HtGsWLYnajDSD25",
  "key1": "9RX4xQ1XcXFQFBpV88J7WqCiSLxNKN2quDbdAaog42Lv8sR8hoe5nHQxcUMMudXgtiTsFp7vap7Uizk2BATg5Vk",
  "key2": "rZFCREGSHrbthgVrRGUxj6SPaatYigghocbgaPtnN95XZYP9mKuYxWjLNgx1sJSYU7xLAqbngtdaWSowjrA5soq",
  "key3": "5YNEMAVyD2BowaxDivmcoL3fwYUAubsPgtYmSQNMeM3rHu5NxMwpgLae9KtQxMk21uLcc3jmSS9Xvnp9r1yvGcNn",
  "key4": "5MQ5y27Hj4XFcYy6teRzd3hrZPAXF4WwdKwuiZhGSdDQ6pKdj4fYZML9qrhU8U6JrqYEB6jja5VUurci4p9uXjXg",
  "key5": "4ab5AwU2ykFeujhcb3LSUdbQ1X2LLTQdHQAnksNHwcXcm7WWKcczP7audFb12wtMfsuaR4uGuZ5cnD3NfkmRDo7U",
  "key6": "4xYixLmk5vHCYA1RZVoG7LMyD3bCvFvNi9KraTnccazue1wAnnCK1xQ1cinXCr3dzNnLCctq4gTx2EngjoECZN9M",
  "key7": "3ptVWmGgVLY8TSekrdiTc2JCQKWFv6zs3oUaguFh2LzSVKnAUKk6Ca2dAPVdepb77i8hdj4rS1KhXWPg1UWcfGGo",
  "key8": "oM8P1AZ9oXQk4NN2TuH7BxmC6e1FqX6QHYRJ4vKFirxKdTxsfokoQenxt2agcZaQtWWHu7CfcXzqJEHN8q3KPRm",
  "key9": "5wqmFDdsTNt7SUGbM4shmkXsYL8TmXeaTshMd5vzC3cZmVcLreF6LAVA2ssMDY9kyj6o7z9ng9mUQUZSPaV83DD8",
  "key10": "4SsWkd1MfrntGkxsan1jf9z58LYA46H12if9AUXzjz4x1gzN7s3az4y5Zkeyi77ferCpTGEyGeKKxKvHpKrssWUz",
  "key11": "Pi3GnceQgFCbmLzhqYZ7N2HMmXRgvr7k1AjXAd84FjBgKcpCLb7YxZw7DT2LjGJP4PHWCK5521SWNz7FQvTSRxa",
  "key12": "4McXdgmNsCRUktpdKK8q7VawRx1jp2Sx9MtDsAqzAwEKpysndzUm9y4pjC3U5akjmLUP8pDkhtk9ZySGisnBqyAa",
  "key13": "3mXjB2YPLKAPmb7iYriQtRbyT2hkYRCK9y97jQAM6D45K27acxbWDTxZ3jN1CecMdS7ATqNs5RJifF9EghvTfurg",
  "key14": "g1t2Tx9xJ55RoVGSokhdZKvpSys4ogVdRCzXxyHhLDh3TXx7sxnaXXmdaEd6YzhG7iQs3XuuP4uV1r2vwAc1JNN",
  "key15": "4tdD6PVEdAwM9WS74ueh3gSHDNMzCk2cHf8cjM46YondHJrgoxVzJTuJo1Y7s5ZKUkznoQETUhiz2GkmC7t4nFUQ",
  "key16": "2z35exAkozLLY8NLeyE1thz2UxJdtQGhXGJvepf8A8YBPtbprm7fpjyGh6ewsY94vkqAnE9MMAvEgeY8VDmdi6Fg",
  "key17": "35uYcj76jB7WtVq5cnH8mphpqqxFGM3MwEgfX38aEy3oxzy25EQne2YCFAf34JkJSpRfy7sf7rczWhhdQaCjmHGD",
  "key18": "2WBF1HmJkTFCPAPeWcxyJ74xSTM8dRnTxQHCErUiuhN8i81XTEYEdaTM9GYir14pq6brVuQwbW6PciHgNLESsX2H",
  "key19": "Sw5rh1GLQAYAnqGiV3bEVJVp3LBD9qfmF8S2u2bqE8HCBN6U2t9Q2B2fAy42Lhxv8SG9o7mDUrcKkvpfCvgwAbz",
  "key20": "PGt7fP29cFeXgXR9A96UzQK43c5iuf1fpJtCXmtzNZow4NWp5qwAugtd1uQfpQSADJuEYe3TxFLen8aMMzSEYfe",
  "key21": "3uRGLsKYx7h1FVxEVN1kyxCBZ1tvQrPfR5tTqSJchrK578i1PEzNZgW6BrE5M25k4vSmS5US4S8eG7hnhYBbQja2",
  "key22": "CBupTCdmYCore7paqXHwQhiyZxteSfW2WZMZnNDhv5aaaVA3aA4HV9o3N232K6bQLcwxHouLMUhPHkEqVE7qabD",
  "key23": "5vXVLp9YqaHPuDG5rWHFAGW8SBzLjWnUd2kyAgeXk5mTi1CCojNKYJjvxg9zPAQeSasXwfgP6GFdpwdVJu7AZztw",
  "key24": "4aCLuAKLH49SkX1pNkzkWAZuBTKxtT6RmiGc63HZkyLfBT4KtarQncssQHyCHfwtWg3qmxN6i5RHvgJfH6BtHQhd",
  "key25": "6vZtEnNPkD867TMkGL9copZMQptTowXw9u5PrsdzbCnw29xsVbXcggdDJX8BjWtyyvqBhvndcNnoYrP8AKR5agy",
  "key26": "5kUkfP7awP9NePSSCbhuFZxY5Ar2oEDbMvrch94E78Nuwy59drM6rxWtMAEr1ATqG1a82m6MMSuedj3SPnqX3Q2X",
  "key27": "54GyYyXcPtu8rzbowYBer4UWVz3W92xpEnMUWC3TaD1yzCtsa32vk4s9cdLeGtQwLXGSwsD4541qUnTNGwNKwv6f",
  "key28": "4D6CXc5JnUArhUrQraSbbLjnp1K7yv2dQ6ZLwq5XuPgU6oFcw5qvMDUQSMTt59p3JDGyCWqhJeg7n3Ps3mutbTG6",
  "key29": "eWvvxwdX7nPYHFrpLMvHzURC1hfpWHrsyYFhACSPwTd4TZitCGTBu14Yndv6t9piqEwdbcMyhALN4U6PaFHY32u",
  "key30": "2tpidt1LippfdayLe4WH7NM8VnvDqhPrfLnG85iiR2Bvnyyj9K9vjZmQeXbcX6q2htP5TPVnDBQJ2U2MVuG7T87c",
  "key31": "5Lox8ANHVqhXnCrdWCKELFY86RCvaW3TsMzTZX9J52dYVZrdNvRBkpcnc5oXfjvaybCqKQ8146MdiDtGw6Q4nyaK"
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
