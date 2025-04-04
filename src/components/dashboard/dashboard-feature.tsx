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
    "2CNwoNPQ27SpxBCJUNrZA8NBDuH3rH27158LfKsGHFJWtXBEYWWWg4HLrog3x85G2h5nxtiZMFhj5N1vStKhk1bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqtHqPkBUREj3ZKCBSWCHy1i4GJoRkXLZMSZqLXmGaQRWAtDkBnW3Cc7VytBRhpw4r3SBP8bsBLPk1zTKssvJBM",
  "key1": "4agCE77YcRCtyZed7CcbnwuYb8w84yeWxEqJmTAXFmh5RZPfJn6NvRiREYTVUf6UQhhUMoH9wxxttxwamGEDyAKZ",
  "key2": "5dJ4ULzP4VwoPoFRNmJyqLXPJjBJxPib9um3i536UAiKswmNZwf5ixNzEQYPwAkNTdjdiQceL6ULoafjCvvR84xV",
  "key3": "3va4DskzKxBxcndpQ4upvCbXxFcM3XwvcjLEgkataYAEDgzxDvoLHWkAfNzHeJKC7BrQahkTgAjoEbFtLWM6sYvH",
  "key4": "4njASJRXr76eetG6mr7KdSMtdJudmDeQLhsHEWQZ9yzvDWwVmZbFC6644DHDtrpPKVQg6ucw6jVTWdU6rYJMAfeC",
  "key5": "3MV4GzpPjwsU9LhM65NNToxYV6hC7AuK3y7aheKkjGj21LF1LGYED9kBapNZeimH2ZfkkDmemSspcejj1gpgCosd",
  "key6": "2LNgAwZ6htY3Yk6QSXQUKks1gyoB4Emyu91cgifG4idZUbpGDkmkeSuVfeEmPsGipnVa44XcTPkgYY7NNwdgsstq",
  "key7": "3X8NLjxJ1rmWVAsVRvM8Ugsw9fkJ7RuzQk4yFkfmRnWaDhYkL7W1DPDDNUPCmBQQ3emLERDEqQvkcWGU4B3Xmg7y",
  "key8": "5DFmSU7KypxWSq7uWN4Q6zFei4VsL2cGDAzv4bGYL5oqjE7PhpKqEUkPMsubXqCtEcNBe3dLmoYbQ5s1RWubjDqS",
  "key9": "53Fv5Hm9jxyduWA62ktjXTfs6GJmQEqPJu9VG4sjF1YSHFX4QnbLdbx1ZkRnTaxc3PBRr7KqbuueJSAkKNs6JZRo",
  "key10": "2GXthZgxAT8t8VudwqXQcyRWrQ4nvUXiGjVQaRuJ3kCNMhm5dRjLJbGVSpzBKsgV3t9WpUnkV4LMLXWoRVaodZxP",
  "key11": "3ARNm6ZYVomZd1sWA5BL2PctWXufbns7wbxvxxqcP7TccphpLJNoRQBEH4MkkKCdtSTGVbM4adSU5vS4Pw8CMhbm",
  "key12": "653HSYw6Dj7D5njotu6ShjVCj8e95TQ9CPDPkGwGJW1pmScEBQTF5mwDg4s4oLNof4uxAjFqyGiNNDwbCqPepGh6",
  "key13": "4gCEhB8WuJ1FZxAb8XNzTsgkdoetutdjm4jnzvM3LMd3jv7VM9SDPH7jxLMwJ4GEHWJXD8qDP9oST8dNhZuPct7q",
  "key14": "R6YB18bo1YvtQY8MPhDnScyUj4KCHc6jADcoW4eP9sj4bMfsSMbi5Ko92MNYXr3pysXF3yc3Ze7uCgoqYWt1hAF",
  "key15": "v6h9T3phbQKHsYJRhRtaB1jW4mHQjBwntD28FkUtZv74Q99mP6eX6N4bTnSv4c7SaZXEzidro9unhdgxKT9MfCT",
  "key16": "2ZSA6Qxt6togb6c9qhWH68ZKoTWC4gcpWN6Q6ogWWvZhzV5vy4ym5oxc1hT1r87Tde7EMBG8gL563steq67u1N7Z",
  "key17": "zWLmSv6kBqZJxNNzLMyPeUAzzRyT5cNmDgjGwmuyzew7xsHfaG59rahpu4Y2Y1ipcQtbFTW8xkzBiKjTV7Tkr9x",
  "key18": "ycXsm9Kwhxwm94T8ZKCZkaFy9JMJr59BJGWnWwdsQfh6nVVNYZTrzu5rEZchTsGc4rKjYEkF8mCievUuHDDAmfi",
  "key19": "fr8jFL4DoJZrgp93rPfQP4uTftZh58rwqSopmkfWL9irwKPTwY8tREte75W77iPYwaJHoTt6BVwCdJuRQNtHZAq",
  "key20": "45u6mEp7Ja3J6g8tKH77hL51ZXjKB2k8vpCLzorizkgHi55K1i8hjz52ySvsUpd6etJ645gSeXf5dyjSWifoqSyy",
  "key21": "5Z45KfJtF4gUtrJQr3aL7K7H3YbLxs2W5Wb9SebRyKonHB36PKD81Fxxhso6hVcVVw4RjwZaek1HFSJLRKqmGpuD",
  "key22": "2qTnPZJ8tidHn36qaa9wcTWC3srgGF3xL7m2LUueMK8f3prdAnH2mmQVLpVZm4MqzN3erYDNoUUM8nuEN6ttCqbz",
  "key23": "4ACHvBTfdbxNY2ye7awd6F5Wpo46EFpiLYNVQ2LMZeVpcAG6DmzPqMFPSKLcNkmRNoFVYSQWKALLp4Z6PTAFEAYq",
  "key24": "5KVDs4mXu8KmQGDtAsNYCSAwBuLDFbJ9LLwRvduiAcWm3x1zxqZRyJMMZMUX9AFcdGTGsbW6RYuwuAzyvge49NCB",
  "key25": "4dMiymjZLSH98fbBWak43rbXiVRA2zivQ1fqJBP4RyXKcnGGcjF1cqp2u5bwqjz8Umxn7jnXuhoRaNKLyFhbiQfQ",
  "key26": "4eFR71ciyKiDFfoyW5dVK1DjJP1pBoxAAc8rcTykbpXw2omhg95yJ21j8P32QNFyqysvAQ6cgaupmAcU5bJ8EW74",
  "key27": "5babuKTuxu1M79GmNoHND3q9FoYsbaPtGUGXaT4KjxqktdF2qTsCbftS8AxE8oG2UuQyX9UQLyWKUzmpcomVasUY",
  "key28": "3hAPzEdxGA67nQcxuBiuWRwXevnguF96qKtv9CPRMKQgCDjHrqE85GRnxeme9ShE9DsK5QQX8eTCEdVZTRKgz5tY",
  "key29": "2RnFDWYHscQiQoFq6wPLpJegEXGXmVXwEuabwGn4ug2EG3GHPwKDm67sgzU2GoJMgG39mb9C2cd8vfRA5Tf2XDQ2",
  "key30": "XxaXAEbMhYpLmKnxkdqTU8hM3am9qaieSLcbkbrEcoSv74kVE5E3t1jfEZypD7BCB2eq2GDsHaJ2NQttWaRDnux",
  "key31": "4uomix2zzx9BWfZaqzdsjVGKf5d7tqkwRqRQBvnH6quqQZ1pwdsx953scksrmBySrFugyLBhvLkyehKrSa5sDTa7",
  "key32": "3qwjjBjTxrphti3AMap5ZVhMCprEMeDY7TTyrVPihGgqCuT4hJ9Rtp78K7Pfd34JYAHGoGcLJDUfMxJoVLT3Dtfh",
  "key33": "63giVLQaFW3QL7SAXVarWRFUNzfJNXzxXZZnrzB9ksTZgSw4wMGTLHEGdhrAR9qb4Ca36ZYED3iuuLhPhNsyCWuB",
  "key34": "5fdtdEkToZG2DPjjPe4cn5fVZaMjTAhL8k4MgAGEUTUBP6j9m3nGTb73sxDgu2Wd5fr3Ub9PeLHveu6SJw6YieXb",
  "key35": "619KrcdShTfmZE6oibABuFgPKJzx2sTHU3UE2EHYsMyg6AFZy6ZD1oPp3VTZJ8AwDgxhebPne8pSYEVaJrKCjC3V",
  "key36": "zdqpi12j2h9rPyPXdyvMxyy4xcoV8ZbVcDyWVPWqnabtkuUQGsrijCGXfvB3wtpnZ8vQwnxYRuJYXYu8z2aNGzU",
  "key37": "4tBt3FedbYwJtY59TyyYeChEneJfJEPph49YLrMKVZKYTE19LGpKLSv37bHCZVNGqxEWwMb9KQW4ehmaSFbg4tWX",
  "key38": "3g8ggzwJ5eQ8G4TLM2v5dE918MnYvYynUtbUbqoWDD9E5BuZ1ChGZGf28A7B8KwEtpvaLdH2qzS66LGTauPSP9Zd",
  "key39": "54X4mL4JMyQK8ofd6Tr2yzuQN32UNGVMQrpRQDshSMZEQ4QmRdVcnnUf9G4BccnLitKgNeDtUAS6SE8R2xkGpi7F",
  "key40": "5HYcWDoEyt9dJCRza735pUGdRtY1QPyNgyhMaktzvhyBALRHqKHvYwv3nMBrCoxHjgks2r2iSz7LgxXXddk3vH5G",
  "key41": "4vsLG65WXMcBauy4YLzgGa55ufhUNxUa8VUzFesSiFsjqCqb6ndA8zxkdKMryFZLtiR9JmGJD9VnsBQ4uiN9zSc6",
  "key42": "2XoPbFNksbaBsDNeCQpBjaAFjTitiB5kXtXNkdQUFWuLNUSohemXEWjKF8NJsNqgoywYB5a44Yr3iJvri8XNLdXn",
  "key43": "5EWbuBezF9Fmy74eVbBxxnQPRPmfVbuuJWtpLLzQbBPZLL8N14XXRGRVoo1HD3Q5NiG2Y2eiFt7CiLWBij3WooZL",
  "key44": "395RUJxvQWGViCdsD1MKtZq9XcDwAL2ERjnoPLn7M6MYNPFfsexRipfPWbWkac9LCV88wWWvcsw1ijZZvECQb8dZ",
  "key45": "3Jtjpom9BMPLvbKd9E4RyhFzRNZvqsqn1LbnJTyHrFtEnK3W5vbXNKxDNzXt3ghpD6mPeun6E6H8ZRV6dyoTsA7B",
  "key46": "3JHWhdFqWbyyZWZfdPphyDjq4mQtehhDr8yWx6ZtLSmUSxmqV3JQ7bX6feSBp2N7usxKKzXRy1i9xDaq2PquzLYJ",
  "key47": "5KCxuACD4qAcQSfvMiJ1v77CFdngSCXemveu6B5TM25sTP4Cu88MSBXL3fT8Qz8tWexxckCCtn23B18gG1cNdsDp",
  "key48": "4eaRQJJW8PTrSgRMYcYoS7mYiTPLXAszBHrmniykmRsYGjEGojLPmXbTVgHP3s4de1RdivfE2GzhdG3vKevN9X1K"
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
