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
    "2BEGofArAV7KQq2UzEK8Nu71kD8q8PDAFrWaFR3qq3zx68NhrsQdhd7P4oHVusy9zGouE9cAD4bxeJif4RA4GTQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWGRHi4k45pzEkf21c6BBA3MbYtEVD8qUxftKT75i95jLqW4EtQyEZHC2C9GJWtazysywGGncAvjMBkYjFxKRk8",
  "key1": "4SwtSsZqtq5uFyrAsnbrYdv1UzpTEDiyZYmywfaPgkLnSvsznHpEYaKHuwnxvdX8XiLntryLLYbnwnVo1yDjXzjg",
  "key2": "4rTLEx7GpZdDEPTMYiJ7trsHnbE1nyUtYhMqDBoxPb3Zey5fMrBY2rCqxR2WDVgcaHXVZVP26t61rTja42jaNzfs",
  "key3": "gmzDJmRqWCJ67Kb2AzeYUPN3Jz7z3jLW5ZN5dUpcdkxi8wavgX3xDHhjZMTsmSAhm2ifGYNeFHKddfaf4N9do9w",
  "key4": "3TRWpZkpzscJdvcvtVvE1bvWnhkj1XLmgyAo3ru48YGMXqYUrwCpaNcauaLaTk4h56DUKixity6YwXaf6MZ5amhd",
  "key5": "3Zo4HAc3GM5GvUXyix8w6SkYsAJRnPhjCCtjQwG7vtXQT9fHU2fnyXgZHdFL6UaU7iZjGpjwsy4qsHL2FcDviTFs",
  "key6": "3BDaoHrpmrPGKFDjZkVAfJKuc691Trucj2rE61QRwv8SuP1zNyeEUCkZYLAwTck2vx2JPrVTLXrWBEtj9ozQyNwX",
  "key7": "3mnmpAXtENCsF3qPRWwgKNFvcFKSmkHyPPTczcB4HygUy6e6c5R9cHQqJfcrg4MFikLWAnxwgUUADB692ALZsBYX",
  "key8": "2RRAHSRitFP3K3DmXGYFzZDmDFRtyb6ZEcw5Bou8pctMTjvUqhdqzEgJRSKrkYSdBu42sfCzjdbMXWfboK9ZReLA",
  "key9": "oAvHbk47a7JVCobPo1YMc5TB2Urm3QErWzZ5gwN3HoNtKGc3tGu2m2FVhzjb1ZEqdkrnuF1rsyVu3QtfRkWvY4C",
  "key10": "36xc2Akw3K64JpniTETxdLeYsUVyuiKXKDZ5kdjaFxJBHLaReXT3ymMFVqHznPTu7v35fo7mrt4q6YAZ9q3b4WWf",
  "key11": "2SemnVXje2uznLB5jkCa1qZznR6jzM8UTh8jeRKtFhwjYwfgCKFoz7ffxg4qnbJqWh1m62bqgtn4soYp5bWmPmUr",
  "key12": "qg6H7P2zHHRux4M4hM9FiDuejSDKyNp3FmtpNdWh9mkxPZLDpnEaRzSdvWoNzqUdDxB5EG8R6cw2NA2pzNEpQDU",
  "key13": "LDA22NjhVFsis7hD75tqo5FFrnLzZX18efZTS4MMwFz231dhBNTyFNzHD338VvGkSkyYSbCRMTSkcCFcv5Yqicg",
  "key14": "3EPtGDZaM7DQELEvE4t1QTJc5D5uogkTDBcaHSaRXWFweJvqMQx8VkTwTBZwwQQxb5sh5Gf6HhTfcWvCHGZ3H9vV",
  "key15": "3TyCQkh5g5eHGuWuwgNQKGF3ezw2TjUpr9azwPpTJoZqouHBqWvp1HUc16VN8ee8vEWiHtyd1NaFzXdwi98vXZdK",
  "key16": "3HaaZEZ5FJnhSyuzgVoCyCmh6VReR6yCoVGmL2tHTijBwQErj6DrMQEB2ZCZvKzyhvvHirACpsYquS179HUis4ts",
  "key17": "3bbwKUjPaYZmT3MAVneMRKTEoy1H93Uj4BH1UZzUdYdvxNWK39CbLdXFfuASFgzY3ymr4BMcaE7z265tCCcQZtSw",
  "key18": "xQWebr66dHsxPqvoop7JHDvXuvR6gmwSJLacKeXG9CTUu35LNf2fVXWaCrQvfWULaf7njtrcYwwWJ3KBV6mVbXW",
  "key19": "3z3z7d5UXteqBGeEDfhHrW3udHUAiTmdEfGNBPuRDH9J2Y86ZyP8HLYawJ9U94eH5SNQdvFXKAbUdSPd3uDF61qa",
  "key20": "31DbmC74C9HSXxnRpB81Mh4q9MAzt4hX8hzcu8UurHDMT513MghvpStVG96nF8DHxJVzmqmGcxnjnSahL7HtKESu",
  "key21": "2fTpBCXaMoLejQ3jEbbRVvdLU2eNpEXnhwqrm8ybWndfc5W8aeQDxdCTgRveJVgAc6k6wpwYCXpisCcURNvrjDKP",
  "key22": "2Etts3TwsBVpqzTo5ocwH2uwZfB3EYnPEUUi1fygk9xWmTJDSpwShkM8uo41VUNMoq8Rk252ub8G7RPpNYmLMqTy",
  "key23": "2pCX7AGBYQjK9JvzaPwZpXb1ihnCi7tjkXw5t821DJ1NKCA9BFhcyyKZ7kv1Uvg8pL5ALLod7CeM61F7tbfDUkrN",
  "key24": "3vCXMJykQ6Rs9JsFs8L8pckN8e3boaeNmAWp7B7bcWyobsRdNjGaRYYoZGASJqS7HkE3vKNK8S2no5URnWpBhdw7",
  "key25": "5bvFaPK8sXrdHwxzKkcKDbXHti3NsvbgxroFcTTqCJh5vgM3iTeFTmayT3trWCY5BLEPCnhDqyN1AN9dDGMxZZzB",
  "key26": "AednmaPMsHazakikHJQw96UshsSpxHxwiyFjkz9K6wTa2QUTbJdFdMRH6Gc222JbCFZJfPiJrXK8AeZ6j5JjQe4",
  "key27": "5g4ZMB9SnybsBi4Cgc6nKb6zAAMJoMXNMFrNDdTEdH6bvLPQyALmEZx142Eznx6AedZVQmBsuvLquZLNVmUQziWZ",
  "key28": "3oy9428T9Xq9d5vrZsvQ8T8YtMJ5wLeUZn5W3xsjkVzfXVA3YvsmJGreBziHUzL55aHbLod1baRQpajJKwys7WMN",
  "key29": "2Gx1HaFyb58Xio3VVJ1pVTPjNdQZBcT4W8QvoVgT5211GPEdd4WQPNijMpSt7zEmpwkneDwtwu4mb1dm6WBsdVXr",
  "key30": "66WgkuzaSGhmyQTqGkRhKZNtMNvpyM3nSqeuxrcx7fpZ2pqnN8sQ7RfvKGn6PcxJGqesWY9hFBTobkG3dR5aZqWz",
  "key31": "2eCHRqQ7shh3bwbE8ybC2sqTdLEhNUAjTovihHJmn549iT6kVXpyacAtCCmb2CBq45VyxxoUw2xEx9kD6j2w52gx",
  "key32": "2cHwa6HtvehFq1ANLoNFLqwNg6qYBTx28KBH7WrJvmz8tv2XXU1MHMqeBi7GP5Xavf5RCAVYhNUnmrzcTym2rtxn",
  "key33": "4ACnPbz7MVV2TnYfQm2Epbqu7RnHzhnHZsWF7tKY6V1vzXj5bJa9ZkFK47ymsR12UzQ2oDs26P9BxP5obfnSV1ti",
  "key34": "3KdaowCzAkEUKDGe54UbqUoAn6xMWqW66iLoKspwEvR2epcn5UvxM7v3v3PPzB5NXDHitxyAHNtAZECVTKrmQQ32",
  "key35": "2YCKKqJs1rr4z4hhChPRAF3ak4fHXPM5dZUeGET2fU9PkrESftZHD6xmwGuVti5RAmTd5o6izfbShKuF2CBLioVj",
  "key36": "5yQYeWtAN9QNWfHytQb3o1LdNvkNS2DRP5xNsydqdGat3kZjoPQiWaAiSQbf2VM9VsDGfnyXW69ZMsTRYthHhMxP",
  "key37": "2kuxX3MkRDLHcP8aVkFzitA7okcLRxD89UE3KwaWkjyneGqrvg8x7Kd4HQSufTSziBVQVNB9EUttvzosD3jA7xy5",
  "key38": "5Y6RTyRAinA6mtfFcc3Py7TBY2q9qCChZvFuBWHFncjJ3yMc1Gao9s7mhzsbguf7aWwyin6jn6m4vzj7nxNXkEut",
  "key39": "4cqhJnuXXaPLYUZbyAb7LyPYenVM6fuSzsXnZDLqM78tLzogtEu3cAjjC8pfJn6zvCqiju41YjAC2Zwq4tfsjWd1",
  "key40": "cv1cdDdhijE28LgRMba2WuopemKwr9NRnSGMEDws5hiJv8BXjs8dZ2rwignRuV7p169HGnSW1VVFTwuXzm3KEbx",
  "key41": "5Mn1aG8imjKrxWn3AkownUqbVVMYbqPmvH1mHVjb4EbVwbgWXQwzcMwpTnU9SdukFwHXF46YDyDJuYHZ8pg9hVTe",
  "key42": "4ek7NVD5968cGqBj7yy18DwdPSYqRboTzFugCs6gDZf14t33heyTtWXz5yV7j2By9JpxJJNayehtq5Pxf71cGNr1"
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
