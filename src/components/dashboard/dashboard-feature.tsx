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
    "3P66o9U6oLMCKNQ5DZSfgxNfWKV2Ge5qnZv8quc6JQUM73mpXpEEZmdThi6Xqf9qewDt284rrfZBJEDuK9s74Wob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmdYtEi8cMxBcJDtGjXH8TAbTaWdB5CArkfj6cf2iUxDZqNKBDUxiDosrrBzTyCJZtDzRo7BJtTJe179HC3DsQP",
  "key1": "D5EhME7kHxYWCZXB1PVCCrrqiPqaJBLMTFMD8BJPb4d4DjH9zQNt3dh9tSnDur9hmHXJizwgpVVGiHLnwA5a4Ez",
  "key2": "272gLjMDrX6Mjv9xoxv5ToParLS45ExjWmN11isvM4Z6ydVrvxQdNb5S5nVerNYGm1hdezZaCSyeunQp1d4tP3aF",
  "key3": "4DeSVyvh7uAvUpKfHQtkwDxQqEs2NsDpxoTnUW8QRDZsAwgt8kmX4UQiGbysydoGhWmeqsGvAeHJqNDnuuCjQzvP",
  "key4": "3W6DCQLUwEjicawDz2GWbyrbUuqC6BbNYHkc3tJMtpBg2Wgj2ggAeZt32NRMjeX6frUnNgAYo2rM4s8AwxbcDPkv",
  "key5": "2q3JXofzGftpqzFJq2nnFqnUAuej2Bamt88JfRpwYdC4bkbpmB4UBPVa9kFzRaquZw2drPA9tEUtvxmX5orXiTXn",
  "key6": "4q4g6zJk4z8x9WHeehpq6axfpZQHp989SzEyKZR5pKaPAefdhzsKvc5CyP5puFX31c5i3WfA6GLHfrmVsZ9kdQje",
  "key7": "2qut4FFh6LSSWP3XWw9oMaAAddRG9aTyXc3oytDDfBsenJpyvJ7AYr2YfAJucH1ZgHTjrEuvBAU84hMaBjQ4fdLH",
  "key8": "Up2NndQruMRfSp5KW6FrugMLhZypXWp7W8pz1gwtZ11dsTbQNEec6KzPuvC7ByPGdT92i1jQf44FNh7t5KLCe3a",
  "key9": "mKMPpK6Gw5xCHGHidbmL8vSsa9CdgvjYVYRamw8ZykHuM9P9WUoFZ7GjG6PfQhWZiBRmN5mQq9xfKnS4iSGmYxf",
  "key10": "4PM3MpJwN7f6c6A4iq3DynvmeJnfJu3ypUYG2JEDvfXdkLAw4j2cxpce4k8Bwehb5d98BGBr6Dg3R1tjwP7ie5ZS",
  "key11": "4fFntvsnMt3kQnY2sPrsmwXgXyL3H2Up5LHzN9DkFiz1upV4RP4Cbc2e4aNBEVk7GxH8PnT6rWPrgy2WAnDQ4bvZ",
  "key12": "217s6XhkvTSqV8yoSqtyLewujhHVZHkMrS5JhdLjxRVmAfswY1BWa4TdwghcYM2UfHnYNBWpk268wfMUieyn6aBS",
  "key13": "3Pvq8PQQr7deVX61WqHTeCcQiPPK4vM7heJ3xg5QTnUM5RFmHsJDcHJkWkoiDMz5EyiuKFJfsUtqC9F9GQcqQx3Z",
  "key14": "5XnVKEhKCXAVvqGXDAAQcEtSgqmvZVZaLec5Nrw2Ld6f5ch1kiknqyJYr2DXSnyxajcknGbPbdt9FoYudaQvuv14",
  "key15": "5YyoeBoE4yxRR8GbRUYcfYGikayw8Ci4tpS5M5PWqL3xyJbuTz2e2LJ2ZUiBXnzWe4d12HfxQrWkjEvz7QYhKu4A",
  "key16": "44qKhyTnXVfkQwHNLLtrz9HzFME4h48ZTowQVLodFd2RhFmEFcPaYVYnsAiPMLBHb6giEddpMDCmpEvXFFVZDwJY",
  "key17": "4TTYeESK4HQ2jmv6N8QGtT4vg4ktuPrc3YbSxr2LTT3jgB1qsLv4QXiVJpkjwPQ5iopL8MSS5oUxdyCuf2SQcvfD",
  "key18": "5r2JMDnPJh7M5RaZ6FYnmpdELQ9t3Kv5v8sAKEH1SHrpgV1PZXQFMLfChwQDYryCVvReHLszP5ZE7FwmGzKY5Cot",
  "key19": "2zVes3qh8a793MxvR1VimMFHUQSke8XW5uuenVH9jDou5SPe7hUX3E8QRkVVCujy1KgAH7okx7MpfJjXqX3izRof",
  "key20": "2zNr6vYhqhBdY3Fd4Qwc8YB44iMFzrU4QEXmcNizLA3BCzoG8WWKY6YLFx7Dh1LtdSNk9FKba5hYY9diBMQedqrx",
  "key21": "ZCftWRqe8skh6z2x7prMyT9L3GKVi6sa8QrSxSXGceRJGMyxBNtbGTUtKZc4pyi6jNbJes6ygAMg8BxaycFDXaP",
  "key22": "nCAB8mWF2sgMyTLWcb8GusJYs8PYk8JUfv9GEEgSqqqiTTn4viBs2TYguUbxKijdiwLGsNkogqozD9ZxfeMJ9Fc",
  "key23": "4jbhn1UdzsW4Pej1o1P7VcVnSyaot8MH6hdmzRbP7atRQjwUPELsystc5aVPx8m54gLABbc2ZLBRthALK5a2YYwB",
  "key24": "2wg8j72z3BNVgmz8rGoxpGscMsHVcM3E4KDyxUA52cyBjRHbHWNK69axQkbbwFkkWfPS2f5SuXxvHEazrzXJU42W",
  "key25": "22pPAszi3kzNySoKQGdWNsSufFiHfN5wtsrHXRX9CXZQN4gUMsuAagVkd8V8GphBLgVYmXcFRa23dcw5LVnVnUSZ",
  "key26": "3A3THhsDAQkMmGVUnp3jtAYpjqKvTvfqMybyWd8a5EKccsnFWc3bjDnynzG1gGc1N3W94rqs51JeBsNTXRvDeRjb",
  "key27": "ndqoF9FUcx3sCEiHd5AF7pYXS9rHhghgjFuyuurQJo2kYgHeVojhyWqsaCa3jVJT6iXemq1f3rw13xDjXLc8Crm"
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
