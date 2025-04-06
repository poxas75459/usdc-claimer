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
    "3R1H9CRSD8W1H7879fN4pWwueoUemuadYUiAp8tAvP5ehrYUY4tFyy51zkbdJuHbF1qHTRbs6Z3wMeVoHwQvQyRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2az75ETwggsxAbUAzPP5wARV388fbpSALDXHhWKMQjKJADH7yFquBogJa6tEuogRe2wuXbCg4ZxmifbJQZNivxpe",
  "key1": "3J6PwQkhnBbHuuyBKpNncseEdXKtN1jWRm9kGuAK56GNtrQwwMXZncjjvVczhPnZYETjm4wd1k1EgQS52FFSvDWh",
  "key2": "4j6uohDWNWwdvDBu3G3iofb81UGUE544CYA2mi9LMq37PAS2yyZpcAjfNbEeEU2oaMXyY31iuSkmMRX7tLaQ5DPm",
  "key3": "zfQj5Hr2dk8Ur4BUbD7LskHN8c2C7wcf9izThhGFmUZWDXrx9uDykB85YVGieeLZpjjwj6uwY5iSL1CfGbQD3Xk",
  "key4": "2CqraJJr5m1ENtFpCzs4Xanka3ymBjuPw3TtUcFgMLVWURkEirthRS79e21j5hxPxQtwvCux2a3AryoTR1y7kbgR",
  "key5": "2jQRKAHJxMbbMTyhwSpdgREN7XDpyMxzvH6pZ13T4TrszA7QctLD5RybC5Rd5SNCyCgdbzT8ZBJLwd3Q9tyifaE5",
  "key6": "3AVZe7Gca5nr4txyg6ioEoMgLe5jvVLM38F6vnnRpPS93LqJr6gtTGcwSyHpuGKt8HaYyzdjaVvctjNiqAXD5mg7",
  "key7": "5Yz7N1DS25vw6U9vroMAungM6EyBKPzrTjKBzApbf5LeWEPgzNTwwcYNHnJgYxQcE1hezRTgfnJ1MCVTApbyHa8C",
  "key8": "5m5tqjvZzDXm2hGKTEDHvGMafPkgfiRau6q5ucVyVJpdi8uMw6zkGHHKcXbZcX8PUGA4bH9rdjAdwqfoE226LLG9",
  "key9": "2KmmscK7rZweLQir8Xh7qp4gLzkJUkXQYcGVVcH1MnvHzBm9Uhs2Ryg2xNYRMtGdgoj5JnyugQmZT5Tz21QYHsP6",
  "key10": "4wXkWs9vHrDGvnEoYgupn89oJniKL34Dd2bFF2rxHfoWBtqEARCnvJaVkJvk9BSteFqxZ3C3irRzRQYyk17TSsNR",
  "key11": "22ut7MjdGg6dLh6eKJvR9kA3X67avwXVZdoFqxS15GhxCvMWxDhGCoCoNjUJweMaHsJiSWkLQeWFEKVea4SECK1Q",
  "key12": "5oGQAjgMUvP1HRm1UrKbJEuuQerMiNprCdrDKhmLhnMPH2nEhm9L86zyLWdk6qSw2spYCFSQn9vDQzXSDgeqFroe",
  "key13": "35BQbWeVpeoM3pDas3UNzNscqoXj36my8bnDwHjDj78Fu9V8iHk9P2rDwvDMN3EYN3iBKG97kEWcVAY9jCo42F8R",
  "key14": "3io28kdtE9gxXctLF7Ed5Spkd2FxSK7Fv8gmyjCUKZA659XW4M5VcKypFF4RetZefZMW13sHbHWLSVU6PYAvD3yF",
  "key15": "TbziiAZsnTN4P2bMA5jYbnuWKyv3Da9w1SgvLTG7vWccAKu4kYsiD2NMytoHKD3ng1Fupe9XJyoUC3FDrQ51viC",
  "key16": "3dTqeTKbrtPG8ZMyMTCZiw1ibhV72yMdAuxdLuYu9hHUuZYYuWA8ACMcPTM3NeQbYiYgmKcNmmnjgE2jzuqQEv79",
  "key17": "2t93cg5fQL6BDGDrk7D7GRm7FuLh125eyEht2SRKHdGjeH6KwNgGqJ8S7XXjD9tneFoddwK5PPEVwmxyyzmm4eRm",
  "key18": "3qHa6AFT8FNoSvDDKYqmocovLyeWNKZDVTKzfRFQ3ii8uhUnuvqTdP4yCPjeDVSU1Hn7TgfXaRErjAEKHHoBxHEF",
  "key19": "HhPy2kU1MU7KiSmTHSU6E1QrXq6xDtd2URULg5qJFwgUGBZuHZeQKmJeDxs9ea7hCsBwqeMs8mJmXf3McDFA1Kt",
  "key20": "5oyZL19R3QwQQgmfvAj5yEMVi8XDhipCEgA1SJbkZNQvWhpHyLWdwnx73Y2ow1AcMtLoqqZ3saKQ83yCbL89EtfQ",
  "key21": "7GvgbxAaYDxLPaKqcBY3MTode93jbiSbpvd7uMza4HTgZDNtTWN1UYPqLEaeWHnH5SYddHWAZTr9EAvymbyexzW",
  "key22": "65JbsWbsheYteehY97gszV1Yvigtt2bw4ofZ74dgYn81KJowCcaf8QBWEcrv7QkUMbCfZjWam7NFiM9ki7rHMo8N",
  "key23": "4KbBan31eJZSsAWetDfSjsEE8j7VkoLkqXSoKt1HLjg1h64FzbeW7shKJpEkWHhayTXCwDbX7FDaj6BDv6CmJ6LK",
  "key24": "htXhw6bKuz5nbw1YdFkpkrDWRF9dLigt8LQYMVnFjsjdgB1vjp6LDQJ4tTVtvyrzZb6HzBf7mw37soJsA6mLa6y",
  "key25": "5zK25VTpocLFqpj1LvJF5y7MaCdNKctTu1AWJaYhG6j71nW3FsyWTpboXQNbaZTdeEhWoAEmdW5fRFutuDPgkZdY",
  "key26": "2sQC5CLJ45TBXrE2oYCRuUmAvyD24BhFkiiVpMhoEVGUWjAmtsEQkG3cCfdZUt8xWVp5uFyZwY4JaYSDvNtojhb9",
  "key27": "4Jt7MYxDVXAbrdjEGkixWFYy8Kw5qEgoAzVUP85dPUNd5TxFKBAUjVncP5qCxdhpW4WRVLyexWpkVJbhgt2fNxX2"
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
