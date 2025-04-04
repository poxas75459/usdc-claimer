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
    "5MQp8JN8AP9cvvPsKpV8K8XD8My26YxzBoVbGkGz82gnynJFYrQBp4z9SqEZKuENf9bkorrfwoFNQjN3ZTuQzRPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3zjUfV5WoRdKFoxNxamVJvBHEpirbVPDU6bvv6rWvPMkD3yGzCPX3YnkEJtLGHVmFLgxnuxohTjKUGHprs9FZu",
  "key1": "3hH9zg1B3swV9A5AgAeq29j9LubytVeH4RwJngQEDF97FzezS8BpKQDgpANHE1aT9EKi8A6bniWPC2VjY68qyzcU",
  "key2": "4nHjWB46SEYXUMzKG63pn9Zf4f5zzF1xNy5BRwEYc5kk5urB3N7Y75QaxzCdChpJ1wh2mAyjSxZKTWnKx8hcpbsT",
  "key3": "3r9yTySxTUmtt61q53MQgvgZeyirjAMmWw3MJZKXfX3gt34yN2VFxVqUE2vTz7SuqiWvPgAAh3mbjYhxJuu4YiiA",
  "key4": "iMUPGfsWnWCf3N743naqxBGrRWcL6doenEmPqgA9MAnxGNUMsPyCXYEcvEAmPTfqpZWrqMfM1dQwvgDAjAKgw7D",
  "key5": "63Y4yuZVyCzD3pmoVfjtcC7eVXQNBG4hRxYk7oKrierJYqKUMtaVpnyv525gGHfB9RpntVJHvjXJ3Jnrf2nCke7w",
  "key6": "3Ycs5PJYEjiKDdqAihYdQcuPt2x2xQ7wE1eSNc7m4GX9DxjvuXK9mgvrTT1EhBLG4gGAGmpzAaaQ7krwsXZYX85J",
  "key7": "557ePcfpLPmGfAZ7rz5Lwmiy2K998ZvjxwQREeqgS7X1xhbV7Da47iSpoKPcoNzXYbLuU6Lpmpsf5uorGafwXbK2",
  "key8": "3CjF7c3enruaPTxpmqWjpzdaxLPjs6thRwW45djDCiBeXzWvuNKgQ24VGBpmdxijffLfGmhBR9BPXuyUohStMEtm",
  "key9": "2MVCCU35EU4uBW1eekK8JbCyAQjVsqPJEQtzSCJJBodawYMwc2fFz1e475Rn74aAhNYFcg7FKzPMiUyHKW3gk7Zs",
  "key10": "34J6zzYncfPfMyqLyiBuKV86zrbe222DE5oY3oHUtgG3Qsogh4ZjwzcFGeFR2vqxHCS8VFY14hQsEfV6QAtyKWBH",
  "key11": "5u6ty9vxCbp18Tubv3hhLQLBc6r6NvXWdookxK7sm5LotM5xxzT2c3xPM12mvXnWkWbYFa4Ab6RjChygT7ys82xs",
  "key12": "4RzkrriczSGjDGy7FLKqnp7dp9qKR72sqwHQrZp9t8n2u5vAjieMLvhpGnjn6TpReHzc6UQaNmisoaynJiAB6aio",
  "key13": "63iRXxCUTtMkN4rgv9aNMgCxdCGwJvTDYtfvffw5aewmY36FDopPtM9R1GFvfpLfch94kSAKtK28suoguWTQu714",
  "key14": "uj6iAaKsxeT658ZqajXDWrtRgsGNek5azgFQvw3ZFh19KmK9UHb4mvfrGzdESgTJnAiDPi4nDiCAxrmsLmwtRa4",
  "key15": "29DnuygBC47d8ifMhAhtDFaSV8H4sxbuvjQUdkc14wYV4ouiAFbbP7yJikznww5VjwK6WUu3Wj9fQA53QgNC1xCt",
  "key16": "3tzog6VNxoTvHR2g1NVgadCqo8psTpbbQFAY9VX2Ctfm52uRjGibHZyCujm9yXozmDJ7Nikgt99viLwTLnWXqB3T",
  "key17": "HsWuFoztyS29rUVB92FpwZSV8xaR99dDeQMC41daGMiAARvD5Bz8FdgnbLmVg3drJzcwmnTJruiYqjBqTkcKuwJ",
  "key18": "2WRGkZ7R4cdswu8mQfjzd5XAdLBoWLAfYhDi47ghk5UoocZZbvhTLNFNT3FWTNMHoLCNtKMte4u158fWRYevAdYd",
  "key19": "Bve9tc4ebobueBN1Y3hGYVBtiRdKXVGG1qnfhU7fJf8cDyNAiuHWCKZnsq9AtUmzQ18WQGZoLaY1iUjzztEQVMs",
  "key20": "3YdAk85fjmWb7vjc9Vm2bYHpcejLmcfdF3AFWWgBbdz2Sf3YY1UpMAcdb6ZyTYtzKdwT7ytTXhBcXT2axHgZAxKa",
  "key21": "3wqkEWLXsNNXC4tY7qWPcrLW7qnE6fEqkxgsn5SvVW9Yg7rqQoaTckhs6VSqSkzobjXoU4rYLVe6Ju49CsBA7VZr",
  "key22": "4AcEcEc3cvj65MEREnE7VhqXfrkakaTZz1NHx2tCuzjgJZdPZaHLxM8hzbR5g4on78t6WUPaR3Wg4ZtSFE2atvG3",
  "key23": "5LR793ChH2YUDzQaJFnvSjdYwuBfgNNi6nzriH5jiL47KBCtDUWMZV7saxeeBvmouLRHy8EtdNNTyiHEtBKgrjGb",
  "key24": "2Mb9MQSk8vHXKeZFZZov1KXjNyiLT87F9kfSnjXyFur8zYPoTqK3QRR7MTCvbve2pqYQYi278rbLdHxvDM8XLTNx",
  "key25": "4vGyyQ6UPYLPPBhhPQwWAfwhoA36WAh499dG4vA32kDTnfQibEVZrFDGpF7ai74AQm13YqQEvjZTBBHiakYeomZY",
  "key26": "2B3vNTN1fUUXdXyTqY313PsLLn7sAfiwM7j955UjZicFDwT4KkrmB8nEbNTSD7vKBLDp1y6fRC3RSykpTyU53cE4",
  "key27": "5DxZyAehffdmZrtWHtzVrJ9odpLuDsQFzq9JdN2CnE4tUBy1hPgUkPKJRBiF8FBSoRP2JLMt7odTxxxwRzofnKGq",
  "key28": "3n6XTTvoDgXvxoonuoX3FH9KXfgRVZusYA8y2Sv1MbidssBjai2PQNj8LrXzippLyb8A5SmN6Ls55dwsPARGh7Q5"
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
