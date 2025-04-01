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
    "5dgfNheeNVhc7Z7qm47bjW79CbXuJ3Ahdz3c6R1nM9YRue2pVmHG4qqQdKPbuy5HFq4XK3LF94VkEX97bpRKF2vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLE2tMMduHBzhw6LF6wgdZVs2GRuuKtdLMd3w57iU1qdpJZCojEkYLUrqNzdDxnvy91Wg9MqzBr8c2B7rQozZEQ",
  "key1": "2J7d2GJKWmESke3Q1FUvMojBF5fCQVh3Gt1foPnfpmNd7xKAtx48mABUBj4nDFNB1Zup6zvoGgHnA9B6SEeUvXoR",
  "key2": "2mTpnPWZFG1pgsYeZ2NFxJYa2NyqeNwkcnn3rYmQCdvajd1KERrEcobdaXbJmXLg8fuRkoqj9cG4vhdvtobpDiZA",
  "key3": "pgHpYiskV1dT3yi7EEG6uA7smMtdjabhkpmUvbRGg522PEsY7Zn2hS1NBUaaZP9EeKukD2ppH2E8MQC95E8Peot",
  "key4": "WmDTWPFNSdhbatmhQY7r39HkhmXsWgi9PFb6pi4UoMDrrGr7K784CRqqiJWQhMfVwar8DqMaec9gB9FMAVtbEB9",
  "key5": "3kDhnqXoXHkVQiRWE1y67rAq4vck845Lmd8ZHu3ZLyY8rLA6L3dry3JWMKuDobnooJC7j5V9rGtt3AERYhjGmnGz",
  "key6": "2bTVurK3efXv253ZnNbrfRsvwjkKMH9kuL9wKzA3BjvZcXaMTBs5NeqaJj9yv5VF6YQREMAzqVeALsUyNUGcULWB",
  "key7": "uAWAH42JHpmWB1tTDjBDmBTYbUf1N48XorQjkHSFUsPtJtvtLbNxYS5WPGosCUnRjy4vwvKhPLxykNokCk6nHXd",
  "key8": "4CwqAHyeSECDcFPgSPWcPjpo7cZvWkXLQwzK8JPxmiDUXK7NoBFuHAUonQNPQ3c2yVimtAt31Qdw4BegM96ynZty",
  "key9": "4FnrENH55kwF3CkD2V7uqNS3xVzjMwUAMogtrkuFYFyKJJoxaYMYKc2iGFoRAwK2WroaYheTdK76fZnCHaDeDi2g",
  "key10": "2ow952MbMHvkcZfAuSbMe8BKGmcmaRGxYNjkxDK55skinvooij99eTYShQrrX24gp23taMc6MXZyfVkEEQ1eCN41",
  "key11": "4e8bwsBUzGcn5LbjiSSUifU9DvPxZpqb4Wy4swfH85PDbdkDGxZEnxg3f5rHVWypJdo3nGxy5214Ddhotd62KERt",
  "key12": "5kJZfQv4oAq4qEf2AiqguRYsqgKU9x4BhksFjim4A25SyC4mx61rVBGHjzw4nhLANz8Uzkn2uZLYrxUEwhAvMv8e",
  "key13": "21cVUoYMHEwEMsQNSppHBYiW4sThA2wjkk6993nqLjHxMe6Ry2r7viELyQUnb3NdhLGcBEzaRkAR9nUQjg5pAGeJ",
  "key14": "4BnqJEYag73Fuxd6AoMSuuvzVM7DpJJBcR3wq1cRyBF7TykQejqwsqABMkzRVC4YmM1PnAngeWDFSrx5eUQmAohw",
  "key15": "5jXWQTXghzDpYkvKH6T64WyuVk7qvrS1NVPabLdPQNRywDr6Y1KGfPfATu1tWmhoHPoYHMryPGqgKovQaPX3yGwE",
  "key16": "7vzBJ2BGAvs6c7eCN6X7Fx6S53BaMfmaQejHy6okQrQmroAKT6zYDJintxkt3Xt9XSykz2TYzdw4z44qDjitZ48",
  "key17": "42vozJWe9iUC8rKvdWDdgNiK1q5qfRLGLJtNEYfYrqTvbcgoEMdY3t7r3nJkejYKvTdVQsfzycPbeXoXgfonp6ej",
  "key18": "4FCsuLFESsZLxBncYxfhdwLXsBCtYknjD4a3r8e2uBJ8Ab71Z5DYuczgHkM8JyavMESUF94u4ptUa2QR8GTjk9qe",
  "key19": "2g3Tr9WfaqmXLkSWX8m75LfcxbvUHE4rxPygcC4VXjPtPtR66sAbDafWFP1r88vLp3QbJKYas52gDzP1JD3YBp7e",
  "key20": "5eLGbHaieEn2fLeV55PkwZr1aJAQoTU2LGV2jCFnWtRM6Ucd8VTomjhGwMSa6yqqzNcmBVbpW4p263WywwPFA8g8",
  "key21": "643pP8pADwJRebLtiPx1EoaCzjQecbmhoTLdxwKmAbYxXXdPdxiF6KA5JfPfStxH3czhwfoHwxR6qPqp3eKqZwWP",
  "key22": "3yzWvy85JPN8uKAi7ob2JYnEhSdoWUdyrxX4fCnBLnYFGK6ne3Gt4ykyFEsJi8qE3NKw7vYbohRUwDW8CSNqkpnU",
  "key23": "57xAFwrAUdQXTMkN6op9ufUUfVsR3EoiLtvqWGnHQ2WKhLxCzJtWVRripS2Cyo2j8zTcgwf9me3EPYeratPRinDa",
  "key24": "3V2ds5MYUpt2WnQgvGb432kFJ4DvLEJYKUBrHndohk5TCNbjQuSHTPb69Jznea92pxeNwcs2Rgs6yghoPFGNn1FL",
  "key25": "4gehBg5MdErfZMB5sw7sepTjLhJd3pKDv65K7nSB3j3pgv8SmA6ZELnadem3Bx9tcsfYp5v3vY3HdsTojBpUujSM",
  "key26": "2x1SjrTvEbaNySXbAmPgfEeiXmu36roDys47k1h3ccu7Tn2DfWg627B1btZvcYQyna9PAhdDZ6ZyZ49GEnMjYnTw"
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
