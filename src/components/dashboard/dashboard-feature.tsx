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
    "5nARissEyexhkk5Wuz4YZ58Tn4Xtj3ZGXmYFwym73Fd2WEi4jX9cG7pWH73VsBN8XZi3MReMytHuUSzLkdRovJu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHmWH3H5XHFWEQv9oPrTMxNjq7Ynr4mCs37W63kRf3vddLYoMJgPrm6pDStvfASc5GWdaqpuu2Z21ZVSNub74VF",
  "key1": "4BrdhyRq9WzgXZ2KjXXrUgEsAdk2cJfpVk4qXdrMfnhAEodHYd69WSgFL2qcJ6CcnxaunUdUuy99DEeQYfVADESm",
  "key2": "43HksFCczjNMtzpW7M4LVJvxziJnRMGGa1dzZkMgj7eUWRMdiAfP5B9jCDsj9nmdiNL4qG2xz6oQEqQGK5vmWr7k",
  "key3": "5j28Pj6PPjxixxG2vospwWubU7mYNAUdJFzTgbYPxA5RSwjNsxEdYMTv6SJ6zCYaFYnpSkUJdg2ahxsFfc2qrzo3",
  "key4": "3qz75AWYdD6P6xD13Lh24U5vJ8CnxTwHHXDAC7Kd75zvdfQHo9H4NL8N5vN2qm8QpdyA8QJ9veKA4rgKyMH6jk85",
  "key5": "5Nzc64rr3Np1akTbH6qEzYe2gLLKPaQPhFYNCL1yAQfajLLezXSi7brDG5LHMsJ14RABCKMwmqbrziyzbZkYR4Yk",
  "key6": "8vziEstq3Ayhmb6VccNB9YU6CeEJHGu1AdBWXGrxm9ja1kNwCjPqT5CnrMYnpLYh99N3uABnxPhFNuZjqe4YxeN",
  "key7": "4h26YW6L6yxp9YZ5RP6YU7knazW78A9Lbwp5WQCzk9ziZHwBg8P5E71aqAzxQwZT5bQG1u75TN41s3ZQENhrk5sK",
  "key8": "2AERwXygCNXYUpivFfqJZsqz3yFUDmzpAeviwyxrxoqYMxS37881GRhES35cFBaiZW6ZTpCuspAvnUeF7DVJMsLk",
  "key9": "5uzMhpQCfdp1icmCaaJFhaq7K5i68SUYmuXysjstmcBGMihaXxFryCzh7jetMJu7MdG8kjQU1ppCnXGwMrmTewWc",
  "key10": "3HabjxumdH8d5B6AnuBcnW8nSWBFWmtXS1mF3PEmSw5MjLw2Q9XCSxwqvxZUbgS9Z4tYT9Yn36tGxSDuLceW3G27",
  "key11": "PZ9fEczsXDWQYwuBJJastyWZAvbATdTcAbLewxqcQn8hq5zY3g8bRqvzQaUfQ7BiUrzZ7bwdFaYuPhookRYaM4R",
  "key12": "t55xA1Cb4qLL6kWU6H8hpWXsLtRpqKpFr7E5r8yEjU7W1bKYzWNoqYNnM7B5SUqEPwPrh5SLRf8jeMbXqAAkziA",
  "key13": "5EoACnkjegcMoBgSyjwfZdriK53t3FVy3LoFNyvKavkNKFbiQhET6m1GF7vvrVF2hShcD8LND6xrJ6TXba5aG48w",
  "key14": "rGGWe5K7FP9dXWhSdc2P82t1zLARxbesNHLDA7PeiZqsQtxFy6JFtpE4Lwf2p1rGHwGe6BcK1xUoddczGQK5dEu",
  "key15": "64vLzVK3XtKKtMK2e22EqNByPJNk4qBN82iLfRh97DPfGBEJSiutsMZo4rwKBg9HYV8GsrJrGtWVLMox6ZBSVHnb",
  "key16": "5vQqJkk3J8mKYJGQFuK7bzxApRJaCdcoqfEATUL1umPDQiSfgZWySmh2MmBABge85soybfEmafCefnYRDR1XYB32",
  "key17": "4ySPeKkZLbTvUvnKKr39eMfgJTdFMaFeDsQdbJSaEPoasnjegvFLXApdtA6KwoRqXE72jnq9Npca2zM1KFuzsVB3",
  "key18": "3hWToWTfJ22JW21mgszJwH9dY8nD7YKer3ND6S3mVLskA4BrKpXBpTx1VHr4ojD49LFLyJt7KQ4fF8H9N9UyjAit",
  "key19": "CiA5gxYw7kSaujfSG8EP48mGP5EpGXWCgM47oxswDXiKjnY5kPTQvY8KPvT6tDMGVptQnwWn237ty5wYu6vVmRw",
  "key20": "3HkSj8qBwGQTzmT1Rx7woRJGiF2DMqdggrM7gJpqqYPANhL3Fofrf8GBKfRohP2xXbCAAXy4uT7FJPysrCGBngNf",
  "key21": "29ZNDP1CzHGAVeNF1GARBM2KVnB85BvPDjwKXaKVqrwwc4ZsfdnN7zbxbGosZE78YoH1Dm1sVHrSByFjWwNRj7gS",
  "key22": "5jjc656MZejsLch6CHYwvA1c4yX3UnaSGB4BNnviba8dz1NfFewkhtAM1usfEQtnJ4uovnJPgbiMvhfF9SBeWGYy",
  "key23": "42ftaJzMRUvowpt7UNrGAEWMQjDGRpHuDgGwF8u7uHbECvjdwPD1QZZGECnXGEMzAE13jdSKoKiufyNh7fYfVEUD",
  "key24": "2YhxmpaHDaAgj1z5QkAreoowE6ahEsqfAFULVNpnH13XqXLSfXpQ3nsm6jgi68LXV2xjYw7YYY8h4STRvTzCC3ob",
  "key25": "5qdeS7jCtj1vYgjhzLrKJ5J5F4mtC6jkuV6kznuPFGNKUhZcLaePmXPc485KPVrKGWNKYB69q2NsQsGFr914V621",
  "key26": "amm3aSkFcgkrFT9MztxDybm5s8xTv4Mm2w6UmWEwK7a9acFURWyZVk963PcMu1WBb1RDePjoTTacwg1ytPjZVsR",
  "key27": "4WmAhRKZ5SBmU9z2nkNW5uVN1iskxCzWwdhp5Tn4SWkDpXHayrJuL8HAvHPpu56UjffcnxrQh4BJugQ3bpp2NCqN",
  "key28": "2M3537U4y25sUTPZhesgAuTHbEiZBZXtywuoDDcHSZQxcoULmpH27XAHwwuM6xrB4GYKiViqZ35XkvKNMMXC5WmW",
  "key29": "2fNov6WdafT4WRNQcw2rx4DkcdVUBnYgdiY6HRUU37m15GDPFabKV4nfmAciBuKpkQHVGJ7CfvWxzBp8VnwasKii",
  "key30": "2QRtZ1CmokQ8B2j1P25awKm15dZpPYRba14aLLRzKKmKZ2btJbtUBqu6yfhvPsAFTGbh4adnt7PLmDmVEifAsr2D",
  "key31": "5TKf6d5T68htoma8r8UoNtEZFqbJ98MxZC5BbBegq6bVmPJ3tb2XXpZ61LsKJcHAhnrUsdA4QP6iTXwsBPF67eLt",
  "key32": "5vqAXBNLpy8fxh9kjogqVAC1bzdZY7NZpeYbVgbaPjvUhSjEuLeb6n5PCNbuhUhVC2LViokTEiAhEwWmJdc1sQZQ",
  "key33": "3ihvk9pgVqk6xy7zEYfCbQ846ua8bc1TBDRGiCn4yCzXfnLF4W5ptvmzSiyRjKBDzh72BMsxVL6WHMcqyRwPtubP"
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
