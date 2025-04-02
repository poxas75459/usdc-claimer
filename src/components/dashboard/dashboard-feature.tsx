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
    "5FrsBfKLW53iSDesv9zMCbFP64jDK8bAu3ZbCAXZhmogkbjt9H8JhhqcfKNrELYLpAmxPJvGXR13vBm4XDt7KHFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpfrxggUVHS1752o1nbRk9urwvDPMZhohTSrBmYjeh8Hg5FQ7EbCpJgVGQvUUpe1zFNJGN6FP9wtU9kpMyADBGv",
  "key1": "e6eQGEm6jdwAUctQo96Gyz21NX99FdfiC57oVSwu7sJvcTyUKnfg6MgnCgaHegn5E4UTgg8FGSTUVRjKzTvW3zJ",
  "key2": "4NWbZ899fpms7Gbfgt95QVb3amLsiQ1GXhUM1KWTMTgYxip1PK59QaKxQLYWwoQHX7bW7rtSS4gQJHDyRqyt11GE",
  "key3": "5SHpXyy1fG9pGJafBMGgjuFRpvMw1YHyytqpkDPbbJ53fMiGZa4GqKgzUQSjqdm7AqchZGNqTW3w3Zk4JFmx9fi5",
  "key4": "5a7cKmKqfBNkZruJ8qvzYY7cCSKMZW59GsMYJMvnTtBWsuKr5fgY2fph5tqkwZB8CosayqLnqffVnhwaCEuuXNM3",
  "key5": "28DP5Ettb91ToK3616L8vuPgrBW3zv1RiBiydb4YugPJFxKsGwzR1P8riCxLiZKphj7csTYdkBHNnS5zv6ST4nQa",
  "key6": "5EfCLeUCUf6h9vGhhQGxmS4Kq5mDPcBfmJRd8tjBXZrKWGup4urh4ubuZXtQHtwsLRfMS4QNi2UP3G4DwxUNk9Hm",
  "key7": "5uLLkwLtrXbEkMDQ4DVh6FMouUQ8myhaD7vQfqUtFDtWxhcYjiHEvaXPyjRQ2Vu7sh2aK6qhNfwfNFZL8T8gGzcR",
  "key8": "3ZYAUbnjyeaxJdEmap9mXHqULAdfteqE7fgvtmHkrFanCJTWCK6TPdE4Mybb9yiuDrbHeA6jkgXw1U1hMcass9Mk",
  "key9": "47ajLhvXGKhpLFXvNceQqY8WJdeL1acm5c4V3M5uKwzHbdtjyG1nowoS7Qwawf3eLkuJyhbozfArVcR9vK61NsFL",
  "key10": "3hqrYyyKMHge4YYLykn4977nnaDcBvLBqZ4xA5fXyqqdQcULztXjteCNB9fQN2w35Yd11ZCxhY4PY7AAhh7DRPrr",
  "key11": "2TnxuGy9UxNYc5PSMGYJ3hYgCijUaecCcLpgTJmoBVpkVGf1MLgBLzH7556UzM51aVzrEY9di3QNpMrZUsNqM7Qv",
  "key12": "5WDJBxCkNFu2d7xVsXsdmfjMQDiHaAfexRH1k3SVBK2Ph6GfBrTZEYaHdcWok84NNjmpvFyAvFpdqnuW5cJ4yWky",
  "key13": "r86fE121StJAHyPzUfNzSgN5wTJFSgv7TeSqBFPsqcuCiF1myiXHyxCnPvY38g9skaDyyceytKNQ8pBqrYncSps",
  "key14": "47pLJAUsM4V4T4T7MqSEEUTm1SNaDjbGhfyB4yXyF6xae5cHrZTBdT4vKyvQe7JDqL5CaWYyCuf5KFkzEFMLtdY3",
  "key15": "61GoLPGenybYWrasBr53RuXpN2FDikWGq3ChVUhTNVjXrXG2f1DpB35d6MrqdwdNYtgQPUa1kYWCpKzhxwa95EP1",
  "key16": "Mzf5f3dV3a9SqSm8bbNwZpEBBPaBxH95mWdRcZPQT5VJQk6STUoq6ch1NsWgPWnw8qP36jUFhPfAqYHDrWgQJit",
  "key17": "3qnqaqFUunQFPyVsfbwF9YKehTCorRyF1RdD8Jvgsx6vYvTYn1DkBHgsDUcy5S2wwe7PnrsXkmtx2Jon6WfFfb9J",
  "key18": "3G7uLxAsLH87wW85AyLkhU9bGikM6EmXPvPR4N8x36yJMB5DSBfijBQkQiDXQBsUncWkoHgbxzbGKhbJNYn2n2xT",
  "key19": "3zsbrQP3FNouUgzsVeMEykwn3QP1RqMYpCAepVojBRU1NjypwX2njT2bR92XmSdB8go7DNJLCaqJiomEv7KDQ4f9",
  "key20": "3K2MTGr7qCiqz3dd54qHdmzRVjF3wwBPnw1EpQaFR3RYaJywUNE7hX2HoY5XVfAafajZD5QavHExQ6oDZi7RgHCK",
  "key21": "2LtDLceVBAxR4JZtbq2SJp2Wsr3ogF26XZFc5JcMM4DAUvPExtsjEc3zoy1XmbrZAb1S254P4F3qMjbUSHdke9hb",
  "key22": "3vn9eQoRuVaKYHUGw3o6kuRgfyEdvopkneRH4mtnf1N6Y2dE4QR7c4vWfgJ9TUfKp4erqd5gcAQDwNgNCp9bLvW2",
  "key23": "2i8tXr7m47FkakN9qmJgtyQ4zH5edtWF5RYRittQEZ5WSKydXzmWG4vPeZZZ1jY2pzk34ZsDzi4HBTcForsDucg8",
  "key24": "66BiMjMCajpD2rYmwMnLEgnYXER3Rut8bwgvgBV8XTLY21kcEVJeoJ6h3NTxTpzXaUH1WpAGwZESNG6R1oYLqEXy",
  "key25": "2SMpc7oy9AKyxXYARNd5utjHFBkbFgpp3mG9fVNCN3Er1V26YYtqhry8jqsqCiGWs2JC91cJ5JmVKBSdENKD6BqJ",
  "key26": "4316D92h5SK3cS9vWWdz48XFNdeTgD5P9Y9zaTnwZEUrfnxAJTnucUgvXySpEtwETR94Nc3nj5o24HuX7YSUunL",
  "key27": "4xsctQtoH9XQjyYdQK77hSxgv2kUDCisJxuQV2o6FCjpH2nFnNY6njEYcdni5rtznqtVWBctvnkoe2vwsDcTeDUT",
  "key28": "Noa1TxEpufy3R5bxjDPyJPrJLMhrqtAgDodTQ5QEvdnxh9pdRgoFXZTmcdSNWQAXKgcQ8aBYr5Rrq5U9Jcj2qv8",
  "key29": "5AQvXMPZZN7A5ZXDqJWuZ96LWYXfuxpePLFs7CX9NtTCqVJ359ZKupzogZ36uNQtj6HvwUkGLfARPg1hZaBrUowA",
  "key30": "5cXk2YTpQjL1DGQVQHUkgFJxZbJ6HpkuvRJfFpekvmqR5DtoaSbVG1GBapGqGoZPmb16BdimmrtG5ek6pSi227mu",
  "key31": "4bU9PYVZpFm8YzwtKEy9VGwywnVN3SmDG8xp5PfxYsMRyWb5nzAPckW3kDUjZEYKYEGrXjcQLLmEpnbSmbwrhTMz"
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
