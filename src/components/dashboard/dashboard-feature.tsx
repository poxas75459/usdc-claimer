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
    "4syU36Rpe6YPsRUS5UhK9RCPZUyNmMwDV4NDj1fAcBNpwpuFEXHdUEeYXKyxfvqL6gPwqSDqzgZAhpncYS1BN31a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FaUQFXJSL2EDDZp8nkoYzudW2VgddqKxNuMgJL198GYEdN2AKbLbvMpKM8m7wLkpuhoDNsWWZTm2gHU1tE3qdEo",
  "key1": "3MMX5PtvmjidEXNrSwdUr9efPQU7GT6TTuLAvGzzte7XKMi44dvwQLNP1fBF1dtoqCnkx86RbGN9zx8DYowNhWKN",
  "key2": "3chr4D54xD25vmCc73YDSo5DPVFGMThsSM9nkZrEzxthsz8tyqvR3iKaa2gwQ6p8foZd2kc68to55E8pEqbxC3Ty",
  "key3": "35VuwPudTMh8pg3NG1UmrC7FsJGCKG2WgQA361RZjQpwErNo7KGvz1ALvNqihEi7ZaWAz2oFYANVTvv2Px86YCV7",
  "key4": "FAVxg8ywedeontFypyhTeWTaNK6CApjh24eTBDWE73kgiydfKksZxLPBNKfCosaaUVkwnwZjR8gtSLic8Se2gQ2",
  "key5": "4DK8e7WrhhPq2r92GgxEsxV6HaPJsTj44JcSKyuBpmvAUf6s4V6MRDkd778iGtCvxMvP6ZDczriRxdaRRirxSeWW",
  "key6": "3iMNyj6drQry7VxeEQk7NRyvXT95CddT4T6nVHmMTeYpEjdbH1CC9TxUrqxEwmCMpEEDq6CbmQ5Zm9Yv3f1u9d9S",
  "key7": "5b585JGJ6nwtSFKpwDZSZ7Hf8oPmwBpc7mLcnYpLx9B83TxMUWJt116hUD8cYx6bPX6peyRZEcKJt1RGqrXLdx3Z",
  "key8": "3aWNptbuwzN8FVxdf27P8XMyzHQccV9g5i93MVPG8FS8bU3XxW1SUZZWZVjqE27jWqiaQNTdX2cU2xzgGjJVGteb",
  "key9": "7CRdLRGUSZuzE1tq49KC1UsFcym1vX4nno8YRueMDhU7EkKxv8aUv2xYkH2vbnZZfJ3qYQ2tkZwnBL5mhqe86By",
  "key10": "4Gf7VD1uUV86uxe6mfcKhvuNwQwuyd5McftQoUacsjTwAJnGMA6qQZeRNwJjkhAdxxTDA8foesB79kkRtRa7jRwM",
  "key11": "3gCYavFggM8N75ckyfmiCbYKKw5BK6vJieCfsD5Q7eVNGj2F67M6ktKVAuq4FBQrXt4Vnes4xNZBKoCvc87juGka",
  "key12": "5sHxnxK16BMVNeMsAnGMjohKvJgxr1h2Gq42xhKHxf5oG8GJqJGNNij78uey9oNPvtNh6FbjSpYfSvKFFcj9z7cU",
  "key13": "3uCqVjNRZA2omPmtGkpk6PFASwzMJFEYz3FetRX4chQAzhobpQLrf1ovqK9aH9AgFBV2p3HZmoZ9xAYzrXGUgHpt",
  "key14": "5FinyEwqAUJEPKf4f4wun1fuWJKnwyiWB8ukPJ23tfVtjYUQVFtXGJTijrQhysz4yGC2ZXhUk5TDQSd6nHMA7zXW",
  "key15": "2pRBES3JpHMtaMhixoQhe8bWzWY7Yki2RYjibHFkrpFbMxSYL2vcjHsRTAsMQJC1o8idRPe8B1civytZo3pdGZdJ",
  "key16": "5u4rxW9cmx4AABAF9UP5QGhfxT4DjUudQ6Z1N6CCyZ3crqRhNTaWPfQMa2aM38EkfSJnMvu7x9dkm3yvC8VmT8Md",
  "key17": "3yTBE6EYeHgWN258fowWTqQZQfXGqkL8qUSDHynSNCTtHSxGzWLid2p7fGFkq3rSLF6kZqC78noNU12yn18tN2SK",
  "key18": "2LVbTAREJyTaUrLhcLHAKbdWZtL7f4MJNe695cZYGswhGZaTULQmN2rZWeyuYmrg1qsAj97Xg6Mjqu3yq95ReJtK",
  "key19": "j9SSsft5Jn9RzofqWAvzgAQUdnvnYSBReWPcY6CSD1WzQATAN9Edq4j7qz6HZzw6VqoNq4Bay5XYZwcWXjXEWQa",
  "key20": "4BurA2rduB3qSMkrWScYB4QDoYVMWsmmMb4631avcsbLjynLt2t7Ewk3rKcLFecNd4LfBQvKftwbqfTfZDGakqCi",
  "key21": "2WnBDZxD6ixWQJMt6JGQY5wYEkh2EQN4ABCwrJusbi9Tyc5XBEYb8UmXLLWakudPEzFBVV3H5nr22mjy74XWqUjX",
  "key22": "5DXadLqYUov7UTLu1FjT2y7NzM2AKvfou2Qv9WVkAiNVzExNNAERrB8uoA7o7jRA5FMrdCnHHBujJFJSa1u3NCYy",
  "key23": "YV1AKQqJE6YkwjJcH1RUcCaMRZXVLSoEUNjmmLUK35iyKUue79rP9xfeN5nhBK1RMK82U7JqFBDEqqGjaEZY9Bb",
  "key24": "5TYVx5Fhyr7znEzMeNoyT7dFSWwJ7gzLTq5bCJ7aXt9GdyYAEt5FGR5dcBGLzKvoTtTFxqYHn7DDEH3yuprUc9jv",
  "key25": "4fykNCDQrtj6rwbeis2WMGvVrwA1D6tgW4dvXNWtgFAbHvFz5Lwgbey2BBXefFDZPDqBU75xHKac9HcfSvMz8eaT",
  "key26": "5c4x4wo3q5dtFJGvFvwrMjPXEjiM6WCLU5GiocxAmY69qcE9pPGeauGD9KidZexsFN7EftP4xD5KjbiFQ9caBhw8",
  "key27": "5uRdArx1ViRvubGTJwLC9cjbop6oxBWGrAsxTDsZycUbwoVZ41swgvuiNMPsQSBNB2UAoyYKwYRkotbSHhGofUUj",
  "key28": "zVXbcyxEJisUF3YGLKZ3r6ZqGzD3fvwxLMScbDf3t8wrSXQcmJSN3894k5vdLVUjRRMVHAduzVvTSnfosafGLdJ",
  "key29": "2tuZLxYnCpq7tMgtZRzMib8SzGZ5iDKZrkwenCoq3mHWRR2WnernWpmzQvVnBSbN9zKWVDsZUDdttAWXsJYt1z4L",
  "key30": "KJp4QmAoziLwVbccQfoqMbePBYiYStXDZLYhj7twHYgteg7ZyWtvv69MjzMCeZJ8zQGPxf6eVgY4DLDPFjVJTXA"
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
