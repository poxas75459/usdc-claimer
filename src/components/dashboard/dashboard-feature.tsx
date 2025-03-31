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
    "57Gc2kF7wW5eMfAfsSpjuGH5VnBfoy7twcwi2mikYM36VTeT7Hzx8cAtZBUnrcF7gnesYA3LDEsggdp78nra7rnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQvPT8CXoybQPkQeN7SRMJbKcUMiq9oXnBZNedoThLpyzfH4D89LG7GfCzniqw4J9GHQhHp9dTMCy5FZzoi8XYW",
  "key1": "5kEG4rZA2Yvh2rpBBeLMKhWkMKiJmXkbqnK5p66XRUcFPy7TbvXWte2ZwakYzGve2y8XuD9F6o2nGyTE95PqZivt",
  "key2": "52auDW5GMHZReUWWcurvbEntBzUGuxvDMPTJtYHy1JvwXZijv74t5skTrchZE4HSvZJT7LitQ3AMmDojd2VZq2So",
  "key3": "fR3RZpyKDFEt95aVYGYMdaF53mvaj6SxZf4iWDMZLKngY3x5ffJ1xxPJL8xPCx76EL5iofKdwCiyNvUtNM2p6VE",
  "key4": "39a45crx9bskv7qDuq3KQAbDXnTVBGEw2ytX3QvS4Djq1Dnx4JD6Eu2bvyP1TRzp7HozhxYwgUQbz5da6iXmXJ3E",
  "key5": "3qAW2cKx19hjXoVDiNZ25BdTC8UCzVitd3rkifXUbb5LGP7LyRLiH3aTjxzfqdmdy5uAMwdGPqtEYLjPkLgfawfE",
  "key6": "5ouwizkrw1WyMGV4Av9aXms3NizYiJx29HA7LaPpFg4zJpb9Y5HcnTXoNTPNyANQTKL2SFttZL3ER9rvPefe8nWZ",
  "key7": "5qp5Vjc2hoJAtzMSNa8RCVVy6fSfFJzHJseouca9LEbywWVmNC5C6bKNwMLfcmmMZywi92kYRi7w5MaUJ5inPPkR",
  "key8": "3SpLeq97iop91uh3bCojuUPphSyhzogQn8hJRyLSYE2i7xyhGpHjxjnEfVMyXCG5u5iDcnYTZ9b8oCEBmR9CqWhe",
  "key9": "4ghSDx8kHeDUt5K4zcXKhHgqJVWqGiTVxo1dVLVqBucbXfBcVdt9tSk1yqmeCdD57VCL1Lo7wrQ9r7NnDcXVzBPr",
  "key10": "4qyjeYrefirFFQ48HT2pxtgcVNWxZqG3dteCfqSHw4BqNqtwP2a4HMcUJHgaSSduTdSX9XmmEuRRwxDcXHbjxMfG",
  "key11": "4zv8AzTaxvGD4NHnTLdEb7JFCExvKoVSUZupyk91WXfGhCNopmDehC2TGBG4iNBgqUzzRFpQa78a4FdqVskSNy42",
  "key12": "3Y3ZJyfvSmSzTepE79u94eVzExqdTgJ7PTg4qnLJ9uG89PJnsAwHWcLYbhAkXShKBXduEw2MYsnfYRs24zAK2xuJ",
  "key13": "4EZwdB14GGm5J5MuLTsm3gcX8VqEmWCQT7kKoB2xhb1bCJLbVguTVaKiqw7fgKcUFChwN5ugz6szYueQbi9YEkdi",
  "key14": "u7X5JRJo9h1PJyE6E9JxerYpUcZV4n2wjZjj6ZJtxLdwMPDLic9D7CoFL2pw4T2jbg4XcGJrwcJTyQLmPodgTXJ",
  "key15": "uozd3auohnpxvxvbxF3ZREvLVmjaV9yMtCLn77BjTugXH1JPgBD8RjnckoeFAGd6dYEMvUqcFmX9LLfRhVLFxjW",
  "key16": "67XA7ugmpg586tgmYs1D9yWBucJoi8x5uQCU9eemmXw6udb7N67TdTQKQ6c5GfTsKbppTkENb8YYpTwUV26Pg8HH",
  "key17": "5KGwzXYMVNNVSJizyqW5PyGeJdLJ1h9Q5nVRT3Mgv2qyzzxkLYaw43CBcXZDFshzqwDRvnDC6W5ckRijL9QVZnag",
  "key18": "RNpQpMRvwXgJhAmrtxXWtdDojKT2YovpgW6uJpDKDifvd8bcV5ikykYbz45M7N3ysLrVpFo7ZkCHuxavMmZXMGn",
  "key19": "3a9W5irBgHh1ZfEUpp9fJKg1J1qJ6ipP7USA4QY1Pmv7QNXGDktB2HFsbpuzyiVQsZEiCLrSJYPU4e58MzBM1S4R",
  "key20": "51uVrYXZriYThyCzkaq1RhLwAYw1FfRi9Few93X45RWNqx8EsSboyrTWVfYDjd2QHU8EBh3gzoZGytu8YAqjvJWo",
  "key21": "5xix8AStYYD7CGH9xu7s38ARBVg5r37p3Ryksi5H3nki3sAW3i6AbQsvQAy47VHvxEC5C7dCPXKkyx8msohfANh1",
  "key22": "2QbeJwxNoXvdZDkSB7sY8nGwgAJ7dXSYzrbZTLVS7ApfCbZqnJUqNicxfBkM3rSPWWyniVX7t5tFh892GbLbjta9",
  "key23": "5ajFRzgyHoLGaCWq8TDaYc8kuqyjVkgnUPyjMkWssrsBKgjwvirxdTbFXVm641ShaZ8M2ry4s5fJJ65autkj52DN",
  "key24": "BYbSEgwDMhuaGHHq6PKRNF3tJcBrHHP4abftwWAyxb4SuRun4k4LVFSxkfYCZtyxWdt67EAHjdWTZHyDfXXeB1d"
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
