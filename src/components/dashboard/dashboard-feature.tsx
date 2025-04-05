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
    "4aKq7NH2YZsz3whpWwZL1eHZEPNyQXXf8CFjgQKJokCBMeHQdFtKHFz9i9Rxcj9VmA5npLiBz7LMQwr62Fimk5HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDPSpzKu9XLPbZKFT2WPTomZQJTdQiL9vSKzDbBTZ5qCdB3Ed4ryDfYxgxD9JU7TUaAatqTjojgTWLoZwMbismt",
  "key1": "YookUD9wMH9JZig3crUYmcHjDRo6HXp4oYzvaah5CYy7gP7SQTATaot8uoPWmDZ8wJFVMiRwuUXHaGFgdqQ9dpD",
  "key2": "4tpi3cfD5sT6zq2CxQ5Yr2Npr7knDRpEmVUBaSC6V6t4sTPUvriKa5xxEu2E41xgZvTnWD1DybM9suneRsWgb9Dq",
  "key3": "2BAxJKqtFPuynNnvJ4qdYpiBxHkZxLsPVSrhHEeyrRYa5tPwPsxGu6bT5xKLan56ChYVGvF6sG2GWBmxhu8bRhK3",
  "key4": "4VSVD5PLMWDvyRpMTgWkVNTkPuJokyk69zMVPWbHnvC629BmhdWwok4irfqN6RiArhfprC5bwgzqs5Xx2rHBn3at",
  "key5": "3UXEGYTPuyRzj1YZTrMG75V4XSZb9rRZx7keVoSUUoUnheu3dW99jrRsKgCTWh9vVxSxww7sxcxpVBhV6rjCMPoc",
  "key6": "QyMZhCR4aqF6zLsqzUfUgmZJKUXeRawPJpvZXbrNYLonpqdQF2k9uQrT4SjFkTc2au4pMnfqgwDnouDLxzeNH7L",
  "key7": "4ru43ay8GhzPifQUosjsgjbAMdVB7V2M236Ly17qhxvmjsBJ2b48nLPdez99iMb4f9hKiPvjZnddWNKXU5Fzx6kc",
  "key8": "3RnHqrZHm3D5Yo3hLbhZKdUKmb5N3XGqDBeZzSH42rn7ohiBAwiT2EK7Up7U4gVCNtokjWWjdZnTTMLwdAj3SgE4",
  "key9": "52JrZ88TnfCa8LTdPSuLL9PfamhuEiXFCYNbHxg3X8RGb3gtPYx9AnmUGbWM3RABNfUxRLaEB2Hdx2ZSiK9U68aH",
  "key10": "5m76pQkrjCGwy1gwR2e6vHR6h7vMWtXL639MVS9zXbxUg5mdkDGY3cJ5c2opSqRqpMxTfT5oNDG6tXP8bt8t3h9D",
  "key11": "5oyC6XT74kxwRKxoJkmUnuuVLFumLt2ji4jv1yNtq4EaX5x5wWHtRUbu37Q8kNm3ibqHzYBywnDMTN4jMfm2bMtG",
  "key12": "562QRRnA4p7Vkpbx687vsvxJMGZhHuDHtX8EacG24FrhjnFjR5idPuxu2NiJWV59nQNeLAXuTzr5MMDKYaSxiaFx",
  "key13": "5Jdxnxrm2A3s9Xh1dv7dLMcLdnxdTdi9jFMQ43bwAzf9KYTsiU86Lxvuy77vVSUU7UWMZP3grbZxXZzsRUMQsRDj",
  "key14": "5dZg6BYcDvSHp5Fx8cqE52tMUR4KUqor29KKkb9wR74wtbW1GFxVmXWyNvPMZoF5Estsea5udpbUEN3G33kM9gpC",
  "key15": "FygABPJ2iJ49ZJobqQjHrjdMe11b7U8hXQarTtdBdkYVVBoSwRL7L3rgQNYVJLZSJPq81N3LjjS7vsjrCCr9DKb",
  "key16": "3K8Ff1u1WT7EtkhcTcn9goFat7uh2kiJfJhMrxUrWaeSwnfkRc674VXrzyCXnf35GPnfQuRvNCAAAkQ47fCDA7jH",
  "key17": "45hNo6kjb8SS6gHeHpiQ3Dh4UXUNUdFsCLJDh5v5eDAtYaLgRg2g3snDSJu22T1xo9ZZtGUpn1ui2X1RrtPcrCH6",
  "key18": "5EUPxzzRqHLtTzFujK4S6btb8qtVszmDEwypLh1AiQU8WAt5GrAXEMm2nds7geJMf6tKXnTbQfwmxjsWEo7GeT4q",
  "key19": "3EmAc8UXrciwc7vJoqQF5Vsr8RUSopEHspVWtqHxHhni9c2uAnXmYnJqKjgmbya5VJUFEUjJStPgnWkpnRMphAy4",
  "key20": "2pEDYrdc5r2TxNicxcDtMXHcjKHM6sVQ88T8hAKJbwpJTW95hGBUiaAkYbkECivXUzAH6YgnvQXAQRyu1KMgWyX4",
  "key21": "5zqDjb6e2B7s8YKjpsQ8vGAcu2afar8uvPyVpxRDfboudXBe9ArRxCTQEge8RCC3p9asKsecDoy9kSz5gN4MzMJZ",
  "key22": "28KcXdvscymAprvaf7ZwbKGJL9QGGeKZb4a1PxtcKjN7E56BRzb86WD6d6EWBEqV7J6B1sy5qdH26vhg7cdiDJib",
  "key23": "5sNdJ46bdW5mdYuVUQ68kWMuDKk5McHXLg3o1KWPu7CKABzAGAGtZVQXDYok6mu8TU1JVZpkGnN9BoMqQcjB6rKJ",
  "key24": "2QovqDBYhoUtfPz15zdaxhfYQn4r5JV3J4K8ZeNxS6QhJmoPoiZLNen53w5GRU5cFTmjG7Xke5d29xUdgxozPM5C",
  "key25": "5qoFKwk3GccQhyY9w948KATWmFAAG4adumfNhguzhu2bYdzXFSnUTQnFGM48AwZkgt4BK18sa8pJsdrBtgbTEv2v",
  "key26": "Daru3q8eToiQLvorFLuC7FGag1fKiRpCweu1PC2oE4pf2kUq8nq5dR7tE1BL2cQMRhKDgKHGDVydkVmecCzFNB6",
  "key27": "5katBDqPen3yYVDi3Y9tVNduH8rKqqDTnKnCwQ3pj21yXRCVabjiQ35TMmdRur7eReKVskMuwwUuuZgnXeZdc7mX",
  "key28": "21m2t6bNrbvB9u5aFyf2marxCMpkLYGKiMgMrxJu1t3Fxd5HyTfE65iCkat2iD4mrqDeLbR14CnWTd9jBcT5pnzM",
  "key29": "3Yhg2xdfraqBKGQtWA8DMVzeaHmAi8qJZqFnXo4wT53s326CLcApZCxXrWn9xNTqirLgGpQGDNTDfRos6dHRYVW2",
  "key30": "5ppje1ZaZZ3zYG7jx7QKvBR4ffr9A5KmR3hhS8tqH6X5UtupxGdZVmsfLNZbx2j2qipt3qyut7M8Lpc6NW19s5Te",
  "key31": "4GW1cvkPd5m3YB8vagWLYg5ivarVYoRz7igNsH5NC5HfMwY3sDb4FzwXtG24oaCY1Nbpx3hTFZRBvfF5TXo7MP1y"
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
