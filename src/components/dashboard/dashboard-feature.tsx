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
    "2ErMBuG4SnByHBoyfPzBxzgDmpJfPZe4JxQ4wUVuRBxjEJiptXWszKVw7we9GYQna7oJdxqrTYRaMSPuVE7GMd4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsKqXVtWZn48TxmyoH1uuauCLddbiupt7RuociqK8cZUm1jzGbBVSnXv1rzA81SEZyq1snjjY1y1kzmjo3noZBC",
  "key1": "4E5ZwxzYuGfTpxQKYSC4JjHQmTT3SAsBsu8iSBQexZzgXCPURxnxEeWjnWMDqHhageJvG1XGzYRvt1qEfQyaHEm4",
  "key2": "5BRrQQQM9CjvLnkJ3cHArQz51BdD2gHjMrHFWbDQfTtxAFpeVjCiPXi2uAVXQjYWUpPDqZinUjvP8d8tLDjbDD7U",
  "key3": "3uTyKDE5rbg7cHZKAmjfypwpHNQHZBe53jasJxuRHZQM3nv4jctABnwpLCVW5C9WHaNXWw1snbzChfviikS2RQqn",
  "key4": "2Xx7Cdz5PzEMtKwctPDtSNojfNjmtQVEgZLTemZnSuQHgWqsaY8WGWdBESJbY49MvtesRyqFTPpfCNGfmHKqpSZJ",
  "key5": "2Sz9fR2qZWH8w7g7YF7AJVdU338RKsDe8XssYiP32TQGtEAmVf3bzEVQeHxUf3w6Q6VqFYdpectJ3xCTHbcQMTBW",
  "key6": "5KwBidnWzRtZPBsfuXGQuE8MwwgEr2AoGfCoVJba1mLT7bCvS7dqMWa9GHBM3N8CHgASfKMMW2zCTLgSTGNdSePP",
  "key7": "4gQrtcdR6ebUJun4vuLhpRykKLec7YSy69ryWxLkFKuZ156c1J4vu8RmkLpZ2VYMfxvMVGS4iwnh4Uotjjo4qMFy",
  "key8": "3QGnRh1BqF6GvHfCP72MRfzqnWxTprKutV3BnS1SssecBvQvKskUZsyjnX9AmUeJYxn5b6B7Ys8C4vha8r19LMkt",
  "key9": "21LM4vY16im8ADSHqPmDjE8bQKU9gtQJGqeqgoEyQSDmvJzCmc8ixRkisxvQnz567v7dQiLJmupmZmy1KopDhpZT",
  "key10": "4ByesWXDq8W11xuLKE4Xp3pAZuaUfHoFAMbhbshFbd8ZDiVM5Jt8Ay8iwZA45PEpVLvn8Zn4dLE6p9w2opbZwZVj",
  "key11": "3h2w9SKzYYagH9dZa6zWwChYXJxQ1g9mz7gYkLJ8kZ4WtiaCekpfLRtS2Z71L6zwvGnSEdKVecZatAREX3FtxcFg",
  "key12": "WKuQYLH9hJJd4wc7euvj2nRquGxpZpWsaYQuMaQCcv32w9zm1bBCuhhK34GKjwegjkY24He3Bz3Lu4ewcB2sQig",
  "key13": "5x6WU4FWYET8VHANKbRdnQVGqRB9WcREqyptgV9mWTo1i2Su4GxDwAnDp8MmukV7DFowqvMGm5dPfxntcsLmRXWP",
  "key14": "4t2iBguEJwJYW6dyVxhy6eESRZQ1MqJAyEn3zbA38mAtMBX2nuFtdvECzEwqa3wfTRTbJiW847GMxgHyLkTHd7WS",
  "key15": "4ufbfm7ZHDqtJ3EobYQTaQxYKYRuoPivK9r9CZEh72bSJpbsiLdVRE3BmH4Cd6X63tPykR3HnNkKbus9jaUWcVHg",
  "key16": "59UumNN4CK3a7gJSVnDnGKboC6q3JXwmvD5aEbATcvVNUxALaF64zXKUjG2vSF6AFtN9czU4sgXyK5xeR8T5AjMm",
  "key17": "2UvUenqoS5asjxQjquVVbjh6xHZJfVTXqxT2gGA36uanN5ta9nVxf5GcV1ZZ1PqcARSEkcP4y3o97CzUrTeFt2n1",
  "key18": "3HHh2hSawxf8Jf3KoxbohiBzJ9AXAfX6sQRC1CqWQjHFSH2y9VhXTrHDuVgowzypAKaYbL5SY2VL7Ee4LHkk5XR",
  "key19": "2FWtwz3vspW3rQyBNuLzMUCrcr2q1LtkNxm8WhBxgiN8jVaUZi6sxDMbhpXAxEb8XwdjuV8WHMdNk7BRST8atmNd",
  "key20": "3drQehaU2HdPfSE3Lt7bXCQqFeyKq3dv4Fup3Zv4jZsaerKdzu2a7PvSWVQLihCFB79iViWeGKt97VTvzBqH7zxU",
  "key21": "4TgH8Ng2fRda8ZTge1YN4emNgeGDW9BYjMt8jYzj6zUjFHi6pMVcvmNabF8uUQKawB2hCZS5gTbQEEVXpzjdzcuN",
  "key22": "5kFRMGEkw69D8as8YYvMKUHLtkdsRKUuwR7Y4dQ3neYVwcSxxxLUf1W8V56NkwtzVGuAs8TSQjyLg23Dim7m63B5",
  "key23": "53zirQL3whQnJHP9KUDe37jS4BNpBN6JMfZgNrg9f8gQT11L8aLF9YTbrMqoqtar9XyYtgGZkyAvVEs6FJFwwy1a",
  "key24": "4KSMSSFAD92dbGjMkxrWfkTxU2wv7oD6PpfGVEs9eBDH5zCJDs2nwRnMcYsKso1J7FebfME6GAXBn8mLT4ML6TgS",
  "key25": "5Jr5o5waG17grp4AiStrcjr5Yj4Q9Y1MBwZUWEf6StiAxR4GaGjbHFTZuLUm5mfGFr4w52qJSuncUoL3G5Dj1jLQ",
  "key26": "3dcxn8ETMAVjQ1LhcNGhWdMdL6vFasbkjwfs3ubbVUgpF5ZFfHbRbfNuKzNwrnfuyeqUMH4siH5BBac7nf7n56T7",
  "key27": "2ftmbL9geYQMZ7sQWNjys1TeeakbiqjGdD5jPA978vWXuyyvxMoKEne3yZVia1fgTWn4kisQGcWnPBoLyMya1USv",
  "key28": "66JJZ5J15hbgnNfngtU2NReA31fd2mR79ZmqEcYvAi7wdYJJhpX5yAMJf5j3Prb1AULoGegGHjEKzZVmsLNB7zRE",
  "key29": "637Uo77zTXBsB1JhFhTG6bML3p2yqM5kVsec3MHTQdDdub9cihzt71X6ci4NQ9PDHMDbzVsqXRTKJ6LsJH6GF7X6",
  "key30": "3isuZuRztfPxLCnjb6ugLjjGNWFGUnAqREcg8Mif41ihvwfmZCebkeJzFytswu91gkyWdnMJvQecVgNY357w8rUD",
  "key31": "561UDHe3zXYKwsLTuE8JtGuPzfRYTyj5EjZw8BkGh8BsTmVcky6wTLPYr17ripaQ3Q8igkaHAogetbX7eLFsMY9u",
  "key32": "3Y4twVTZEj6vae2j3XDaQP5cwLqLk7F8Pj2zVHVgu8mPZhkZw4CWRVArzjRHmBVhvFva5EyNUMn3Y49oAK9yVUPu"
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
