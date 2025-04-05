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
    "4CneY5rcLZHNK3ktsD3qKRdnVP4mbDit1HnHeBtANzGL2ZQnS8EyVdxSNoVzuNUYTiyfLuEfZgbiDL82c7ExqcXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JVQbkncCDoeECo1Li47y9XT8dpET2CRJntbrbv5YZaj2tsBATX2BcDiXNs7Q8D3bgBFgy6zK72rWCo4kMWVKbP",
  "key1": "29TM2HFzLWWGP9CA96UVz2oAN6SJgyxZeGv9caVWMUj62gSPibXWWt94RmpGqny8i3NyXzEJWGehWAa8zvvLmnoS",
  "key2": "656eKwphK4uvg4WvrxURZgV9heGpdowydbcfqMV5sirRhUuQZ7AbMm5HSRky59hHPPNKnmFetGJwfbouUfxUL4fM",
  "key3": "42VprTzuEUKyf1FK21uS69xesf1Zm9bsWmyiH75X9su5vzgpqNfwaEcRvJwwFqP6QpxSssbHkDgfLWpL86p4FCwh",
  "key4": "5F6PStHV1kz7CgN6XUFzJjiVYdMs2AYmNTHYADuwMfuiK21FkxYdS5qRjYRNsVMoVTUKneYaCPzb4vXBgcv3E25Z",
  "key5": "2xKnLVxLsdahDTHeMgoxotntogP4QaenNg5n71nZnvaVtG4mUcn9XHQgMHKTEXCoEFU9BUH6uNohFn3fzC11rtaX",
  "key6": "3KAuwH3MYSq4WGfCXbbxGEZzRoxSQywZY4vQefFAbZ1BS4W2GRtTGT42s3WNEMs21RNQRo5GJZTp2rSJL5JoMHHd",
  "key7": "5t2sQmWL2PaRt2hCG4izW4fNYL4C1gtrhdRkqeXeChdX6RUVPswYVBJbuXnQM4d5P2SdpnrAmgkAVRn38NYU4HNK",
  "key8": "61Mqo2dPKoDJ2tNzSTsg5LVSMSzBUc4CT1iV25HNPpu4oh3wjEf8atfumLSSMTS4rkWSHc4gLe4x5Sqv3csrUB4q",
  "key9": "24yPNvXFpuM5QdYtrWqV5gcLu8Jw6vFn6THsQomqopvEMvmTqJagUXiB55pvwyAYSSgyTzw29R4XBm5DwVBfemDT",
  "key10": "3XHq4amiU6NrxBrzJwDSwb29Js71uyV5ieZdbataYEVdVVjXsT9bEAEj5JnP4BzXoU831Re16nxyhRvFF9YkYU2W",
  "key11": "CwZUMP9g9C5DkE9kNMJj8ikdBTWxtBse1xMrqx2KgJS8epAT5DFK2RZsbYSBcfX3mboTtCzQt1ef3dphaLFDVBo",
  "key12": "2TPEP6gC6EjHAVN8VfMWmfEfdgsvKjo6gP8ui8BVchoSMgff2g8RudLB6ZWcRfB75Jrb4nhE4jfsXupvvMLhAjfk",
  "key13": "4zSjJr2NcPNAR4nzwXMQqC8r81BkGNPBx6hJjYj2s8xZiiXUUYZD5oAZFieD6YVm9Biv6zitj4uHZCG1XDQgkYSz",
  "key14": "1a9CFbwvYB8Va5HdUDYicWGxorrtiw6UJ96Gv8F1qi3moV8crTRBpNtHvuu7gJNwgsFMDGepKzrzHzGeDVugk4a",
  "key15": "YHzPngwAGsuWf5hYYDwzWokMggNK913zjoL428oBK2jYt78gaFdDugTa97eyst5VW7Nj9utTGQ2tP1fqtnm8tH7",
  "key16": "2c9eYKgg7TNcWN6piL8s27dDKovCaJK3yFi1yrev9YZiSZNfzPDyH36rA1xf2jdEy62rSDb9BXJtVFejeuMj4awR",
  "key17": "5Uzyz9f7bdE3bFmAxcavFRaTBAxciT5EE1qP7DwyukwACVj8hfpZJncXCW79PYeHWnBFzx9SHpthXHk1uetuQFmU",
  "key18": "CGMHFY12JJzF8aZUsvHZJN8zEMZhHAiFg1i2H9DYkuxay1BaX1JzPesPa6FL9t4SPBDSfxp23C6eQCBs4cevYoj",
  "key19": "34rmU9848KKK7at1XSeGL7oejm4BADBhZh5H1FyxWCJ2JuNApRT1muc6NdE8PpEsund8DbbWUR4fGnvpyP1bie6z",
  "key20": "23b7KA6cu1erQmSVDjaiqnSgAg1YB7bSAYDe2Paq34H3P74s3sVnomYdHZBhqN6Ehmdogv2XD48G2ZjJomsip8om",
  "key21": "2iEzbcig485vtJi5uWqG6zGJZtSCZvFWMoP87SEqJBFY2heaRcu4izyXTSAyGrjVYv5By9139DyUKvNLNbxSCVjv",
  "key22": "2rMe7x3vie2Ker5rP6BTgf9fXYNmb1QXwSFXuEzx4aNovPD5ugiG5g364UFMindctgYPPe9RBL4kCJYYWUJcPHss",
  "key23": "2BTun6LRcE1U6K9zYKj3yHUR7NX5uLcYBVLJRKnj2g5CXzdbuPuSXmbmpfrwQZPyLSNdkFyMzqgnnYS8VZCEEW9j",
  "key24": "2rNLPNaxKEK6q8y6qpbYA9r1mjCS4dQD1szViyXGrxcs8KJTmR4VNSPN6MpgnxZ3C3Snwr4cnCCa8uQCJLFMcCmy",
  "key25": "64MTqfDae9cWRUfvLyg7x7mQYzjBP1E9EisksJqwizdmhAAgkVWTpvrPPPNMcx8Vm4FpqfDaqUcj5rGFGm81GFdd",
  "key26": "3uF7FpbLDzTr9dckSTPLVVCWsUgzCwbHWwBkVa7aHxEA29uD6KfaodXt1rbSvLG9yCeA5A2oFzfjw4bEnG9nzPam",
  "key27": "5LC6sgJY4iNde7BvXi4rUnbkAunien3Mp1hAieLi4dtqqJrrRnimAVwKkEz5CZ5XnFcra4abN72Hv74EBzhfLe6q",
  "key28": "31x4i3Hes2zQ9gGoS8Jn5cmxRKFmwXaZjSUCqgeo7n26mtwBQXBR4AX9h7Q8twQQ9nB5xY154x7qYKjmmCWKuEEb",
  "key29": "3HwcX2zuR3AC8F9MB4wxWnbx7uv5haXcyqpDh2fMfqpyXq7RNDmxYuRA47e4uoXg94UU9Xz8v3FJQJjPTdpQm3XD",
  "key30": "3WSyYmEVhsqprNgFwzRP9TrARfHfzS6cn4enT2fsdXALR6HsorGos4XNeTD1ibafXmhovNGLSSnnDfyx19iXzYxR",
  "key31": "3J3w5AXGV5QSZHg9WRY6kTdHSUN9rVuuuDzuvwPCZVRGZQBNkvVpGdEw9k3fxRP6PmSaUAv3rCQoerfq2UAhnoWS",
  "key32": "4F4UJDdFrPkcFNWDMxXiH5dVBGAVz15u3esdpgVuuZ8tuvSxaBFLeeQbRh6ocyzP78h89ebaoCb7CwmsczxyeX97",
  "key33": "b3uDNqQoFCrzA5F8vabwS5Z1zCgCmZTpNChFqi1156huntqu8X6oBstgXGrfXXouieVABEp2hn4BKjaA2d77jQ5",
  "key34": "2jVFpqFXsAHEMQM6d6CM1dnb5CXgjQKJoXCemwKBN7Zarqvkh7DERYL8eMmkbFFLzrouQk2t1P26DZj4NeA8kWdg",
  "key35": "41gomctc9c8duwp5KjguHeqYJED9z2VEfZDdMrDSMLGQ9xFTHjiDj6MWk9yACANFR3s9k9YKGnq7DuJsxLBDqYvY",
  "key36": "2Rj42JWRRzNs1CtYTQhhPhCaRdbv9L9BUyuH4egMTDyumLyZSA5rvK2N74XBF31RwutyETAyY7qe9U7QLFkAwcEy",
  "key37": "428Buwvox5iNmM4EsEmVPNenYcFsXtr8EvYzKQsayhwRpKCp6BwRsoecMXvZmg65UeQz4Lc6SUepvRMKB3sX5pGD",
  "key38": "29zcQ5S7CN4LUDAUQZvD3BCLnsAM2JJT3mh6Wdb1BzugPuV7YaWB4J7KdHHfh151qX4PkPHhiWzMXY6RNXfuZw8B",
  "key39": "5A8LfXu2TVuWhFq4ECB2pgxpMJRN22GanSAXEodrWWrnpEtrgL2CQ87R5cqLP7PZfEfk9SrZnJracVYzhgsuqm3",
  "key40": "qUHfqE21wvvTRvwkbbY1tpzEGfsFuV1881n88KvATa5ZRKXrDoJQNAiRmKjZPdJhTCzd4dXDAU9xTsnWj2vQ1Qv"
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
