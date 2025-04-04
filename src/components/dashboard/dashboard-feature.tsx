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
    "2J3Z3nFsmrmTuGparaayTy73JBLZo5vqyavcd9dnfzbhNxer8KbVi35GZy6gMaLBT8YTMpVT5eDi997vJ9yGS5CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXENaF93hGt2YxdDV8iLq5WGErZtdg4yUfVWTynBwP74uk1JkXabF19Gc2X28rCDDUk8KakjuZxiJoHxGv3qUcF",
  "key1": "e6LTAig9jLeFy3CJ5QkX5BZ64mj16m6z1LiRBTvaGNhEMRMfw1EtUPZTTWL5X4SPzY3qpkGueVJQhAaGUfdFnqg",
  "key2": "wjDTkLRXX8aNLrYDESVv7jsGt9TorUcayij3rsK63uyvugQVFHtZCsbnvP6uDaWPussufFo2PjQa2G4tgyWyHWS",
  "key3": "4KXV6dBUN2SpPkknk8yYbsrkkh7rf48inDpgvxV3khSe4uMqCX2uSwrruUCNKbSn1QiBokY9oHPyWk12XxpycKHu",
  "key4": "5adtbDPztuSZnV2NTgLpsQNNFprU9y5KwFQw7adUa3mdXNfjFfmX6RyCUY7GnFMjChxWrzEwrDUmLritpb7datRK",
  "key5": "2KqEkgmLh58AJLJGXghanQjaUNJ1wbfWGXyx8zfSN7SfGPTAGBWCQCbGNZ8Ai8MeVX9b9oJf9qSthsiCM6xy9NZ8",
  "key6": "4WoAJJyp5MFHhZLTRgVAyjWvKDUrLu2Egwy13TbjWpE2FZSL4RH5oR6gCUouPVYjoviev5wZ5c2mQXSh7aoTPTbR",
  "key7": "45DmcrSuh1oj95mYjcDfa7i1Cs67Jsy84AbMWU4EmcUX9VNXXp2mqRYLfPn8apG9pKuKHgg85Dw5LbsVcyvDHj3b",
  "key8": "BrTEVyQPPyAQYYsZwi2W8Zn9hHpc4GYwJZpdH6bo9ueJFWVGSvVLRvhxVp39tqRDnbknRruTdo8wWYm1Xzga9sL",
  "key9": "joeEmpD2K4QdG2MrtHYH5B8qxQzRhbrsQ5vjBDhXf5bMsAkREZdAXiMFv9BXQtuLB9gaZoJZcY44g9zQzPfKWwT",
  "key10": "249ZGiasvxbzxQso8CLMUDEvZS4AnJ94tJ2VgPTkqUzuLKoyDNm5ycFXsMxuZ2KhEwxcZjp6e5ME5BNpP8xpVG6D",
  "key11": "ZygtqUXVZyCLspd5uyfhHhxPYXTz6SaqkNix7fn9kCjQvSEen1PQXpgtCz1g6K3XjQGUZocY82aPLEULpsPbbdG",
  "key12": "Dk2E7RdLd2zepuShTUBQbMx7XTEwWQ8fkEgP1X9wBt51oNtZTxxJFKmwRcQprTHSnCjEaLG8FzoGH3LoUAyFcv5",
  "key13": "3VuC5fXkrJ3UdgojG9ftB41rHUmzztwowurvQE1YwF3gGXoLjHpdACUQNnMivJ2iqya7WRwWHfgJaVsVG9Qprq2B",
  "key14": "3H1p2TmHqC5hVdhkc3e6iKcVVoGKAqLS6FGcWNTWfvHzux8X8ZtEpiBfN9SmgieimYvPTNRHJmJ24ZdXmfM1QsyZ",
  "key15": "4aH6NJW8owj8QriU2fmaju9DPmgJ4FqRVh6j5z7qbqZLfZYh9PZmh1tCvRv9Qroj1ZJEfRQ2AibwMMHDA7PHDMn6",
  "key16": "54u2EjifyTjBgWvKvQDAcVB5HsZiRw5vMHUkS1w86WUabApa7U96RcTRa4GKuCHb6rEYrcJmkWRzLJzqEHeggwtk",
  "key17": "5eXn7UPGr3XoxYZ1kWM9CpWZ9icd4vMgZ2SetWpbcoUUCSEwibz8eYnM4gVG5j4PMMp7egoHK8akGvjPHAQGeA8u",
  "key18": "2hx1YR8vNCGVteZgKvJKS1Vzei7JgmmPBPXFFp8nGy9on2FvBLesC484vWB8gLNk6gm82FnJb3hdZ4wg6JVmQEbh",
  "key19": "2fA7f3L8HEZbJ4vjCZTDiFkT3VymeDkPpwT3X8Mtm8AMRj4rXyUz22Q18T6z45GLyWc7REp4ToYmDfxuy28Ju8Un",
  "key20": "3oBPZrhNPU4uDEibEBz5qq7p2BkGW1PuRpDuFXPLJfCQX3RQQh8eyzruqFhfkVi7bT88e6R8VzDveQ9RRZeN8337",
  "key21": "26FJAQ4PVBHxPeHjGxsvd1LGvLdzctHDiCLVqf3c6CSKMzfgPR9Hxgg3m1W2KUXNKwQxsPnuyg7d4YYf4J1mFFEA",
  "key22": "3a4B7rVx8o22qU9b1Yxoh82tG1G8BLGkpFZtrCuPzbZ1BXXKgAyPyCnkezxQPrgnKCmRz4x2fmWVcXoSdhXS9ga6",
  "key23": "5LzJYDxABEnkNbUYfStR1hx7Kx8W72p6MpW9AxCQTa1EaHexeNV7AETf3QpjUxqVTAgNnor1mGPtpZ6h3mW8Mvo2",
  "key24": "58oZezcNJHhZB9EuktywPx7LQjpqvsxS428KvM1gVCh9bdaQNaxD6uzNuhEBMtJvwEDK1to9XCtNHFemMZpN47ND",
  "key25": "3xmMG2j7QP1s2bZHbiUNHjUoVAxbfyQ3sj8uSBikrsoC2cYu9dUx9tmFY3gGtTWJorbXgP8dhE112PHtgZYoNJnY"
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
