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
    "2hDwTLELpZv1aGnjiTk6gSz5WBBHRtoFs86184Po137pTbk68wL2CnxEpYgP9wianYpMrXuBNHtWc6yXc8ccHHkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRfFNu3aQzc4TnJxiBrSFpYZFtmjX2YKarKf6cKATh2SDTDYGvoC4ifWPE3URpUQebuLM2qCJfnZVe4PcBkk2rH",
  "key1": "3HJbZwQk1AFwkncDRYLzqxE6cJ2eUoCv8Kjw71W6m8uDh7VDf2bPhrTBW5JJmpUkMwCkgZds97bzMgQHB9Adcqqq",
  "key2": "2LaTLHkFvwByCekMHk6aE6XFqHY3C1rioqwobF1SatcGd12q9GFYcSPNpcQ2uYGEcA6CS6feTscUpkVnS8nWu64j",
  "key3": "5waQUjJjPXDQWKMJTMYPAWgFyLiAdXthjaeJCM6V6Ni2W8waiX4JgLUVYh4Y68LWcFA4KywEYVKkfgE29xJ89Ndo",
  "key4": "2QLWciUSoP3o7dAP3z4jhwSDbNfWfvmN7mNayTb64gV2XWdeyCWtSe8NzAuwjEdAq6MtDkf9isTLo59juXFSgHU",
  "key5": "3RjFNHiPLMxYmFdu5uZswnfX9HGzoHvhymTNjJMpSeNvLjiKs6wme67tqMntjWJouZNawH7NwvQa2i3pmeSfC6KA",
  "key6": "4Eqgx5hhUiDT5udykXTVyxKsdkydjCFy6xGnsSibSmjcxjkzXGsgqocxCw2MuJXwecUKn5529NSJEopi6eggPfvY",
  "key7": "Nq894qyneh7joB8gSrHYbsfpYKjrCuuoWZKLUwWBDsoNQajwwvD6R25Vyfk26ffY3Q16XKQpNZPNTjTB2oevQyr",
  "key8": "3FAN97Qi2LPeAt3m8JVjXhAuo9R4PtdEiJzerhrafCm6sRH8bUZd7dvSPCzKJQM4EG6dmjYsVGzeo4YXr9PnNH7C",
  "key9": "3rd2V4RSJWbhruhuPKiEAfr68Ckh1rd77hU36rmSeThBSffRC9dNyUYDRQk6qGj4yC8vWRJVAH4XwgGtKVbB1RKR",
  "key10": "5875eSuX9guEk4KN8iDWrGgK4rHRLiTJBR9CkuYLJWKwUNbdmTSsBcRjZXhvgghkUhNo5GVjiUY5LJLchpGPpRyR",
  "key11": "3eyYeq6bR6JrhaULfBaBum7QYGqvaZxVv6ZR4N6rmBng18mV9Zqeog3dtfniQmE93b1d227nWADeAZzWaHrn1SFv",
  "key12": "5FScCU8nzjyu9h5o6w1zrZvji39pApUtej6kJwXSvXgibhEo2MBCiZodNsC5rh6J1RpHQkNXxtERenCNTe7xUtf1",
  "key13": "4bao9BwkszemX7YYs9C4tKLyjMda99YbUuBSnC5WoMpYUGXUCT4PbNaxqADv94cghuYz4k5heuDShqRut6knHSMM",
  "key14": "2VZAzVDJtTmhZgf6jsqEorDuHaZZM4cTR5ExSBc9xDH9kuz8Y7TFgsfQ8rwsSmcSJLQnNBmbDgEaQPtARYHY91mU",
  "key15": "5kgsz9Bf7cNEBF11YUZg6KtHvMZEoPLGBsP8p2mkYBFkCmo8c54zHM73sjriZDS5JZPuzCzFGGdKA2ERRJGBDLHL",
  "key16": "5YH3LDQDYo1iE9LiHLaPSckxnJNbvpaaubeRTRAArZpqkVRMxrskK7SHWRXJThsFBtAnMefuraM7KBfiwPB1xutd",
  "key17": "61x7ZHQrkdrt8CMnJjoa7dPAyhDhiaYx7dyoNS29rHg81U2uCcXMvwj4xUriD2b1opDT1BcfSq79MZSJqtBhQUMR",
  "key18": "5dZJETULVZyZMoW4Z5njC2Z1NsMeQJ1Y247bKLj8RnBxYstzrknU3Ae7mndZbuiyLmtdBN7rHNeoS82WVEdzwpmh",
  "key19": "2xUG7zHNa8rM5dPDj9J1px3auPMbJpGkWWHsErjUCdj3fmZcGh3KkQ7YvmLbEE5cz5m8NoGkaqtSpXvuQdSLUYAP",
  "key20": "4BzKx28qLoSsALGxuyHXGhxdVsdXWKAGagSkPjSTsCjnYRyjfjSdjdL19b4tjfNXZ3kEYQADfnYYn6jh2JNcsdDx",
  "key21": "2pQAPRDJgTmX1AqhWUJMY8zWrmrmExcqGa2VaEVeoYrzSvDUhPbqYy55tBRBneozr4cKZBLQdTPjLc9UGJ8wUZn5",
  "key22": "4mzpTp6F878z3Qz46acibSnuXe8Mv6kBudBUy5jszdBzxDSJsDUo7KWXrKqrfxpPNkMbKCg4jw5d31nmZSgH87pa",
  "key23": "iB8ujfta9xjwmD2UEn53HWnKFkiDPkRNk56Mm1vMXyzJVANvmG9aF3rj62A9uJiHQXoP1HpvkyttFcjGY5mR6nh",
  "key24": "3oooYDkdaAKwbx6XJEbWdeBaw1pV69QrjfhYZAk4mdPixjcBiKyb8ZDzZmhxstsZeuqmZC2cgCBU8UBpiBUNGee5",
  "key25": "4YNZZrwfHNJ6KrQSNSrUFnFwoEhaxeKqfCxYs7Q4UAt7zJeRsBAHcfYn55xibPFWBNPuVGySKr6HVY31CC8Tpfgi",
  "key26": "5D9sENFFi6YfpqTahQkvkconBMkQwidPEewDSKHSmgYNc3TGHG3Re8kJvbByEUxZvMcTyRKwKzddR6GrD1GKkrv4",
  "key27": "igNbRn61d8beVDhMCLkWuBKtuELjt6dyosUpnVo9iMJhM48B8djaV9QX1SHgH3hQkDvfbvZFLmKAyoHbKRq1sPE",
  "key28": "34ytgKcbk5JLpKbQiptgNiLPGXQYJxu6VThpUoQhbzgBoHgSzrGBPvV1uTydV6Dq7h77ysUnqpePMaG3mBvqdWeL",
  "key29": "5tjNjsmd5hC8L5mvdKGZi2j4XzG3gBubMFHrh6up7jA8RKAULTkMmcfkUbdKNheEaeoA2xdzagSEdQZtL2NkpDnR",
  "key30": "59E2ccU2Anu5YVXHyBh7r2JuJaFtyk7KY4wFuRn8PAkJ74DfFwStiiG6FN9kN2fgJY5JZSb1uH5gsFD27hUvNUkW",
  "key31": "5JPsPpWFSk2aMpG7uZ42Lehmza9n16wPBrw9YwGwc1sVZyWDJekY8wdeMsjtiuPqtf7sqcWfnrZXBqttwzhAemTs",
  "key32": "3awq1SmKTubd4GLPGetmbBLk3adFR51zWx6yNZJzvwEerp9VDWjyGWvv9s4v6vgGFG31wUGVXe9PnNnk4QmyYyWm",
  "key33": "3842mc1s5xPmWYmEPB6VcdTWM41pbjsJTcK738zbAvVGQEjhWNk96PAzzSkSPdx3mnGPBRN2AWnEJ82xshHyLJG2",
  "key34": "3hYCCJ9nZUo3ZWYPsEym3HHCpwZppg7kTQ9Jgk9LRaBbWa257Pow4khJm89bmSvGKaqHBZBR5YsEgzSc7VMhf7fT",
  "key35": "4v9Bjm9Q8Cwu2PN3nbwrzGkw7jtmHn7hTVPzY1v2eECvSG6kKHJxSuznhm2EJbZh8EKFFiMRGaE6hEcjU4DP6zft",
  "key36": "4FDTVuC4d4wF7BNx6UihQ7DHZRzmYL2gBWNsvweVmEWxGQBdPN2QVbP4pSAyFVMuapCXxDZBJ2upV45g5g3eHHWE"
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
