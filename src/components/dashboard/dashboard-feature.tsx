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
    "2wf5mCgRCZGM4WBSNZyzy5ox49NSsJaYxQmhyfGVHdBgtbzoYiXik6Fnek3JrbQ7WCmJihG4VoN84pRQKrgmkQ7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oeyJwSYzbTzbHMkFeQ3X5nFdzAJxdYQfhhW1UdguKKg1nFHJuf83vSyboqb47NHgnmcGr75J7U1sBTzigMeQHMh",
  "key1": "4FVZWnT7GgB6yKorMtaXx5xUywxUsp8dzsZjgeHAQFVyxv4PFS7Qy1TwYomJKCryeqqZSTAWRSyKDm4fS2Vfvk3X",
  "key2": "2F4iZS7voUXKtBoLiLUj3kzy77iCVVsr6Vbqv3xaZ7DWekkrEd67wmLj2w1UczPfPFp2jmxF6WPP8g4yyTpMGMvP",
  "key3": "3VaytgVWDwNBNmvi7AyaTr5oNEPZAwD2k5pBE9QWY1Nsk7eLVBswC6ZZnNZWjj59k56yd4Ff5jSa2PrT4pKivqSb",
  "key4": "4x7UdhhrBiB7PtgZmS2gxcGh5aidg8tZtj67HR4581mmMGR3Qiakc4JdaRdSomubFmD88TE7TowN8nu5JUqVvFSu",
  "key5": "56bgGynbizUdkXtW8Etw3QWm9N8tqG61gc4zFcaXmnpDbnVvUUWxau7j37dcK5RGve8SZ4gnHAqWmR52USV9H2CG",
  "key6": "nNCqTt3oYsApJhRUAJWVt9hfJWzi78wxDcS66LRX6KkeJxGQ8V6aHVWG8ZsCagcBJU4V4LcZtZT9jKhccvw5mwF",
  "key7": "5imRATc9oPXUjy2nGEFhJfRGRnM4rj9SX2F3rAwq4aFSYRi7JVS1qEuBAtZWAmouGWRANQ5UX4d6XoTqVMkmew1S",
  "key8": "3FnV4bdDafYVrhnhd5ti32He4deeSjqKhEZbh5v2ymxREA8VYMMp6AFoHz8Ks9UAzu89o1wDST3NPHw7mLjcyEKV",
  "key9": "3AF4DHtozkc4wthrnPs5DCKCkvAcxkCDokN8FH5eMxHRrDjBjwrfDgFr9e6PkpjEyN3NXuEjoLPXtALwY2HRb9BH",
  "key10": "3zE8sBTtLjBgUPM6gAhcZBVgMoMCoCfwnVK7VL8zvWYWdiSrrxernUkzTz17Rky6SVaUpVNdfeK7queZ45JPU2ES",
  "key11": "34TJpSNb7BJrwZzqg5UCPve4byVRPUZWTUbGrQiSjNuunc7DtBtTwuQ5jDQbyDkEBuibjmEUgyfeCb2g5JuTmVdg",
  "key12": "3ZeySow2ac8Xje8hzn5S5NqwerZrwVoF3pmnD6FXxphS2quXy7f5mUrbdisuxi4P73yoNbJYtv7MhRz8YukCrttu",
  "key13": "2V2hBJ4soxzmrje2RWYb7mmvv1g1D7vVw8hXtVQwx7ssQqP5SksNNC7vyX4ZNF5f3ZzFkhF8bYkZK6M6PJPotWw4",
  "key14": "2LHXmTYeuRUknvGxfP7fThsRaSUoqPST5HTeRa6iAS4cePCxMYeihYErY7zX7CLrgdKiNM478Qap1a6kpE9KEWHH",
  "key15": "2gx4jTJv2P6ZS76hpYnBp5LF8578UJCPK2ZakcQR2eYFKN1XMTn59V4N1UJJTM7Nz42Jx4MUyqbfJwSacgud8FxG",
  "key16": "5YxrYLMNvTrGsDpmBJtKpqqt1QFbQhk6Rq1mVnd5GkLN3heqYhzYbWEUSLowW6wt7qS7pzEpx6ZMBhg73a3Mra9M",
  "key17": "4ZBwRzmRicMSX8xMY7srp6wrZNnFS4XNi2XhPB7KQzhzyuYKUKqQK8zRWgSpFupYEwQvEPaJ487jW9G3Sy6oGBqr",
  "key18": "62mnCpJ8PHbH5FEpxU5BK2ZfuZgebPSSs9pC4ckyF9Y1fDzNXYKFJqSxjPbSePZA8282YKHmKqdpEKyYt8V5AVz2",
  "key19": "5x1AsFYGCisCmPBZfSw9iKSSQb8dFnea4BrD8uaPn6tFLTz76i1SeHbkEErzFcw8DewwpKTp5A9KS5d6MMBNTKWd",
  "key20": "4VMfuE3FmRR4AwuvbBFzFQWMf4EyPjgXvShVkYGbneUyE4YDGbGZAgUh3NXVSfKCom2mswv5phvNpt6HWQX4YcoY",
  "key21": "28PvRjsXgUR3mHLVZxjKBjXsN2PrbeMFW7ExMgrzC6EQjed4XuetUn7Mk2wDTnri59S26Y2f5gPHWEa1GHjv9DCi",
  "key22": "CMH9FkjmvYBiTwFQCY17xSFgiudEXsv7jHGZenDhEfEuVVJLRALjqRaautKbMP3WHCrrk6ZGrwYsjCDxQqA36uk",
  "key23": "3VE8R6DcSRfsrtGHEPtvGz8zD2CQkZe57Wesvo5hYRnJU4HbKPu4WGpJ7ZgnQ99NZoSEDxPGNXRwHpSoLgezbGP9",
  "key24": "5NpF4GtLLzz4bDRNaBfQq5YFvnKCNX3G5pd4Pt9FkYYKdhn9RzXKYsANoR1GtWsbeTKBw9CAuGKstWnFbUmQrT3G",
  "key25": "3tmkBRJ6Vk38rG4MtFoxPYwJrbHtbVyPKh9f4hjEofLQ5SCC4SAs2v2tmdKdQtzCye1X1qvCmgTjW2hL4fbKS9se",
  "key26": "2eR3poGh8pSaEbBTyHi9S6oKcBGhyDXvkh1eZ4sZQcU9caXCsY8B5yQEpLYELVz75nTaAdbVZwoLV1U18h8V9nGH",
  "key27": "byYW3gPeo6KgRcdaLaRBdPW7uhX4PRCQh6163bMEMkJ2CBaUZm5ScCNiM19qp1yinYZKvMs6w7A69T2QJ51nYEm",
  "key28": "5zhvPfKWHVYb1iP6xCpe58kRHjQ5eAzvsXU3eoqZjBLqzJLjRn1ktdoqNcUDQBAeFT1FNCGaPGKxmZpMYbcskwSZ",
  "key29": "24PnB3UtkpjVfsACRQNz7Erair5FLjvQFqAgd5JyS8Qoi8VbEAU3Zdd9fpngoZdG9NnzWocEDypcvCRgUW79AHHT",
  "key30": "3c4z9tvZCrjD4rBAh7SnbCoNe4gY8LaJSSjFRWyEM6PK7t7x2sySNKqJnCkXAzGqaejQveQ9HsU8dBetuFK7r1h7",
  "key31": "3Z5JhqTwRZCrpAq8wpBHPVE61BWBWjrqhAUztm9hJBtSfs78ctAo2Cd4MzTQD8E3CLgk5WUuzpRYemwqNJvqn91Q",
  "key32": "4pVUfNDetMXb2B8vrHMTo59HLvW6VX9ZMuGKsHSztBzx3HGFxuPFisHseXwRHcp9zcmkeiT9h46CAEwLaEZDi9WN"
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
