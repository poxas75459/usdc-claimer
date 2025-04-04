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
    "3zMNzqqbABZw4bPhPHBUk4d1Bc5ta8iByFDoaksScwhnfNpvaP1jcBNNEXSiLpen7j4Wpoy3jbb4iVSCWPFsLto1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253qMgcA52qAS6zCf2Y9GNsQJyL3zbF8y51XGKzWXkzNZYe7PufeAKrWYnE2s3eAUSvDETAg3r4KJCaBqS6viWNT",
  "key1": "2g5sDa3ZUjhLgggqUEUThJzAcxM8D81dHkk7gtck7pPYwvuhwxoMM2PTcna6Yu2edazSAxpsx9M1JSrzWoDeTBkC",
  "key2": "xREJaNJabbyrQ2vV9vSpMRoi4oTMLSmgCWVaN5SivDfZSC12sLrfZ7Sq5oGHAXBSN9ojLsqxh5TXWc697gL3KaT",
  "key3": "5jtNF15s63GVpY5DEDb2VXeU4ou78ttXfNYrWncC8Dkhr2h4k1L8mhSBqm5tpPqeXSyKWNQkycexo33DJoEsMAzk",
  "key4": "5oouf8hw5MkbTXbygwDxEna7EEo7nNwGo3mksuRSHxbqBiUvq3hC5PP2oYQ17ie5BTpoE4u8QrYJcSK6Wu7GF2qA",
  "key5": "NMjKApxNDVtiAN8ibTwRR6vtWo43VGnmxNyQcXatwKHpc9ybWV62qXmEz8oTnzo95rQ6VRt5bWUpEwqEDBgqMyH",
  "key6": "5aqbyL1r4ErxgMb6EGDKkJcjeWBxQa9Gf4oRpuF3MgWCcobXKFyqy4AK8Q9PuQx1pkpqtPfX4L8ofFxk6kYx5bUQ",
  "key7": "5KocuqxjM2K1vkaZpLsoVunzXSZi4sYRSWRDMbKyUS791SumePASWTnffLD5xTby6ppF6JBrYKq1AAYfVpFxujew",
  "key8": "3yyrnhRtSTaKktFEWSi2KcRh7fC28KRPrNvtDQ4PfYdQtAvC5pEJUi9bJcNYKfpNTvirS9UEiBi9AJmwwSDuFnx3",
  "key9": "3ysbgFxEmdKooReK8LmujEW4HFiHYnqiXpHzimcUr7eVyfPAW4wC8zVxvdtTGRPQfUQbSy88Ao7P9bE7s97CGG3L",
  "key10": "35tAtsqCKTwqCWt7DRjKDsiGG7aBzSPN6DKYS2XdNL61V3SGpPVMfbi4FsYb4quB36qS1ctA4NogBfjcGP8JcqKS",
  "key11": "QpjhuWfdKrvQs7wKXmbM3wPQRBgaPLbWDEnnrd26tuxADrHLzgZdvdo1KivvZmrfLsuH8CwPM2QyzVhvRmpqigs",
  "key12": "4DY7Wo6VFtTEZrz5nfN2UZiLuZD9w3XijCefU8XXnv2TP22aDex3BXjpH9Efas1HX6YLRLa23BQ4q4JzR5LwMU5L",
  "key13": "2RTphoGMsSLUY7skNxrVy2GqtHV3HRRAQ35X88JcwHnuCskW5phEDLjwocPSuSPYUzRPjSqDxdnYNzW6Gt3KPnaR",
  "key14": "3GJ6Kk4pfPBi3ZFgnTF1YCUgWg3d6VtLiPpSJJGLY42BWA5zBVSnc2Pk8YqTddx3R5FvLgtcEVjjTbqrEMEtyPjk",
  "key15": "2iHDPzcaMEcFCjD4P9qYvfk62B3x74f4pBYeZQMycXuAZwm69bAW8gZUdWKdYUpQeFiJpRHr2rfa27tfCzEb3e73",
  "key16": "2Fk7MPGYFD2YnW9Ty44xQrPdQozG5KLMrcuq4WKTJNP5fA1UKXBqLK7HR7pUHDfDZ3NjgP96c5cT4xGwqBEnnnAb",
  "key17": "661BMYhLpp7n7kyoLH3ohypW49Qd4H5iAFSUifxQJnXtU2PuaKYVzd6LMCTpHjBhz5edZHPMhpq9ta74qJ5Wbtm6",
  "key18": "3pMk7UAWNui9vnHvvNrHie3dvWa679VkmsHT4JE3xCZovRH2P3iEqqdgu4f1DXv9KDDRYYatD3s1PrDShTFVhbzF",
  "key19": "2nAKPysETTVeRdooGx5NXQR4sjUB8bXrDtb2bW95ciwhY7bBVv3c7392FeNbvKfQWVWBT48EUvpKrQVJH7GcDbZN",
  "key20": "4EPzYDbJnq8UT1sQGKtEh2n8aSAPavBJtemjZZtT9jVipCXZ5YmFhUqi7opeWeqosFqNau6TQstCFLEx53L8WTYY",
  "key21": "2qQferhvmGaPnDGzkMFXpQ3jMaz1q7uhh948Jtr3nozzrdLUsjMSAF6o1bJiGQ25xcg9hzeQgBReY5tvkowcpTVV",
  "key22": "45Xecno1PEiHLkTA9csmEakmzQ4twRFLjzKdYu517hgCbjYwPptho93kBrnaPJ6fe9AiJv5bX4g4Dr3WbTZKWQBM",
  "key23": "2KBGR4ukEqKYKXRhsa5JvvrBJLxgEb9m2iJmz75gugJcZCjwBdczuab6odDnbFwtqKCxM6a1myZzXm2wLc4XyGD6",
  "key24": "3Th5dTryqiqbFUS3LQ5gSv9D4tMzw6uaV9DdA5KN8LYtR5qKsrFeS6WqggEYpxeNcqjFeDQgMsQdbXiBiMZfoo5L",
  "key25": "5opHXP5vtvhiiPKKQGYDvkhuo1Z9Qte4i2UWc29Vh4hVVSaYRJNhzCvroi6J9PAW5LGwqeDo92zXBQnrCoFCQJtz",
  "key26": "4c2LXN2mhw4dvQ7yovst1bLkf44MpztcRwdYAWae5Pjx6bMsvfm58RsngDjjqGCsTH5pWiE8dvgnWaMrkhgZMAUM",
  "key27": "4WQh5YxapDRYM74m9Spe1qW9NyDh96huUBWApHWnfk3Qb4ASve4qKepxnGEVEd6eGTD2LYzmDgQZt4Q1suKV9iDQ",
  "key28": "3C9CEuT9gSMjXsdJ9Dq2Z1Fg9RtEBQSsXF7WwKX8sVtDsuwYVJe27oRQSJYbSuACtBqgz4XDMr2YHgUwhh9S59JT"
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
