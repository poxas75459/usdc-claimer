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
    "7jJExNouNT8ZtRPkqPoEEocWtzX5khSsUTb6UNJS6DQNnTTE4R5s5KTFo3k5uNfpDxuKmyXnGoww6ezXbx9FYF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dE5sdLzAHEkrvcC2tmh5EF4tALaLXv4HJsP4oo6E3TWSeo71GT2o37mVchTLowYLpZLksdZJAiVUweNX8Q5jXQ",
  "key1": "5HXzwWJqxQGtcsZMC1ME3NvrvUq59MBo5jnXfTnRQjyfN9f3XpujRhddnM1mAyRwBCDC4JwACVpDE9Ai48WMR1HF",
  "key2": "RX5H86cx6asGeRPXTatUgi1qZSX3aGmiPSREQyRC4aDNhqpdCez34v2usenTK9eazui7NqDf4rW7kPZZZTkGwiP",
  "key3": "3cwAydz3B2yHetFLjW3DhEG2ojQSYgzEL7pbNMNHBM9cZKmHgyW3fKD1MUbFNFEzjz9RVUNb9DGq5k35DP7UXr7B",
  "key4": "3GHqdcfUZy9bSe4fbGB4Wjhth8kDr9rBFyrKcjP1ZQm5f9Sqzf3E4PZAqgVmcjD44gZz5j4vgbdwu7E2GjaDwqiy",
  "key5": "3Btm7BBStLmW1VCnZ8MHCBoeoKYR4YgyhCqGnGv9eDXVZXsDj7YKRNxgHKPZ7hdMhVTcLkEt8aprzA3iqPunxMq6",
  "key6": "5ACCT6hDRAFJNu93wbFCja3q4Vj4i5YUSRyvKMYGn2JTvZoy6WV1KYs4TE41bm9CVEWGacThR8pjpw2MC9qr5SWr",
  "key7": "3nkiozGiA6pJYZLFjvsTsC14vUhnTaKjobV3BRBffZKstzUpZEjswj53b9G99F6wdSdx7nbfMCs9rZDFbfWve6wo",
  "key8": "36WDa1C3aQREMynTWKtyn7sGi4pfJncin5mxaKK6e9sKXjfGY9K3XmiyTCgY8NuQXxRBNkX9A2pPQfUmRsacUxr9",
  "key9": "4tsfrAHc3Ruqxq4b6ninRtqGNKiRh46oqtNs6THmPAYFqYouD6kMiccbiW5zxGCBt6W1hyeSf7TiSNYUorQAgNuY",
  "key10": "48MksnwrzV2rQAujjMdKaBqRvZARSeRZ5go3KmaKXTvAQHbSnXiuCgWXCARwiQH3hrs9NaW5FWHc43xtZT9up2ej",
  "key11": "6MbuQqf9YjrTGwR5FPDppu9eQNythZNqiJQ7CSBJV42KdqgKX8nwcaVktfVGnNxcRZKmFr6sPxuutZK9vYxbnPh",
  "key12": "2XDrJd7pcfEhsdPwHbA6RgHVgQcHvXGjHKpGqVspVCaBaLRqVrWQhYkxchgBpZwhehy3Zdamcm94a1fyMMfAtPgW",
  "key13": "43uUMkKRGQhwGq7KsskGyxTB9wwQPM1B5QAemYVQfyYisVbMAEyUP61DDrSVpDp8vBv2WTX3oV8gFdvdQNuXmc2U",
  "key14": "5TiuGoyhr5beGUQVgwDM7w16zT3mCJZagRSxyyhF8vEqysRzGdHmVKkDzLWhKX9H3X61KYfYt9nuhZ9RQs6tCkjQ",
  "key15": "4JNhKahdQahg6Au7qjxTXStjjx4P2JDUaSYeNU1XoA9qGhx1vX5d5jSCxvhc1EEcjg7WKjLaVgKiEG6N5FQP8oTn",
  "key16": "4RHk5JXjzCbybuuRXb6VQZHyEhhUpeogwxroPeq7N2GNTjpqRnZ3y1oL1r1QUWUews2qD6bYdTKzNgSUrP3gcgs3",
  "key17": "23qmZTCdt8tz92RV8fSU7vgdb1eAJMAVZeeckoTakakTZnRJePLmk3MdcUYndBzDfenaJMyYb9pKaiBpepKniaBz",
  "key18": "nYFMxqPa5axHfzU8D6FupxyBAiHciMDbmmjWKbGPxnaJkn19o9exNKvoMaTvz2MVy8AE4mU43AyLmFxUDhUiYFC",
  "key19": "4D7zX4nkj8aqETCB9bjPdtkuSXGPhyTiPPC3ApaMJ4yaagSnpi2CzouYdnS3ZnZTDZXf4MrYNva59oF38PGCimcf",
  "key20": "4pRDox7TNKZbq42gVTvHEDDLgBD6sxBTqTuNoknvixrb8xPR241Rj5Z3D4Kyr9x1F6dQS4BAmPpF88VvJ3c48MUy",
  "key21": "2q5DNz6AWkHv4BNZab6GLCwtodi1stJyLHK7f8E8AhDgnUzeNSApubfF1XfX2umeRrRXxSJLFTFsD56jmb5fwsc8",
  "key22": "4kvBzdFB8NFbTgvwaS9eHuXx5L8o78BmUiWvKbLuGtJ2cswiUAnxVVvxaGS4ui6hzLqt7fdbHHsk6F3jaDdEZ1LV",
  "key23": "3oEsVxzLySXN9EQc868aM6eR1xB5JS4D7JcqCZsd6nCSmtteWNeFDKMjokxghBcGWsVd73njYrzjM8sfAhrxS8zX",
  "key24": "35hKshSpkx1yNagLuskZ3Vk4tdYWzbZgSTevP7LSeYs6HF86ToQCM75uPZBBaL86PudJTqHuNFvD5ogtDzFNxUJX",
  "key25": "5HhbQzTgsNpf97QtuKWHcqtdCdBfkz6XLHwvmvwD1UZQ8UYkob89Pre8cEeLLU9HMQe1r3UGpknnoUMXSw1Wo5v2",
  "key26": "2cM2gaKBU2jypTNY5o6EWZybngzkp6X9dNmckYrXtZCQxRLDuVdfpLnPbozAcJAj3XwJwuMwqd9xS3XfqkjFQBLe",
  "key27": "3dzYGmACSAevCbvomqFKFCb4RpYRadvwL1DmfMNs4nNakRdEQwvtU3qxzgQ3szJmpuaQxB95wXJ5vFoJsn7cdQ1C",
  "key28": "5XKrPVTEGAA2PjP7NxtGuQdRNY9ZT9hBbdsiE1fAUgATNDdWofYcUGJCuqN5Lq5JaHg69GPnMr9JR449VkS5tTHj",
  "key29": "2WzXLFoNRqvUbkRp629Twf2aDqA9Fw9Ui2ZrzH3RoX3snkQxuhsjT86kBqpSgau3EuFAL5atK8ArGjurYFkaYHvZ"
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
