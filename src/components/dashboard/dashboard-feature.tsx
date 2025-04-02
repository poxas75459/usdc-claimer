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
    "3DH5iRYBgzZU4H1Hh1iE2faaVFcmYckv58cLx5ZWBTYFsySZJyUqsZUb3yfR3YFsDqjavmk1SRk9FXgC2JAxJRf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ikszLUjZy9xHatVHd6ABdZqz3wYSTUPGgzD8mca6XVRrZYRGNxoLpMx8w4ZMWtnm9EqQk3A9AF1fRfgCWCdhhV",
  "key1": "2CuXaoDJyYuo9USPPAm9q1iuRqWY9ynNuMWdab5tL5vXtWW6hG8yJsFvjvYxBW8sijo21t1XxiogwzMpxmuhnwsQ",
  "key2": "4d51QiHKqdbBLGhbYmPMB1g1TuF4D3p31jscNoiyyvJZt4Qg7G8cFqDR16D9pQoPYZp1A8otiCZfLGkYFhS7pq2i",
  "key3": "3htMPw17K6aYXEpFL76qejGJxaBbto8Z4i2dc6g5oBrEb2TtjcTb9sMbyBtf3AJgKkdvqw3rMiM3MKFumuivqks5",
  "key4": "3ZteVFUpGfERU9d6FyFZh9sFDsWdJa25buZ5mSeYkzHXwMidqaKbQHFStttQZFpjixNReNXEZJrSGQFyh8884ptj",
  "key5": "3gDhebqfhEb3JjftWgRRkuk5WL2cycb3Ux2Rv7xAgbPvTwemMxnAkW9rnTj2R6oSnVWzf8zoN7YagSzJHRqdFe1r",
  "key6": "3nb3v4S2kXsZUyVgD4c7fyzeHb1uWzVYoGd3JbeJoqrvMKpY2FwmYdphBYSYu3bS3QDr9ooMVQE6hsRVWx9uwZaK",
  "key7": "3q76BYRRh2ezFALSFdVrWJGCKmAaSFMBbRwrDryYVK6pKUEFMgaDnV7jJtCGQEMei5Gt7cpJ1SfyrEjXZ8jniSmS",
  "key8": "anvxLDiBUeiyqnGDumxd224WwJaBgrQFwwr3r2xzUoG9hHy7hA8Gr46vTN1yGQ6jpKpkkfh3pvtZ3VVBpAxzK6z",
  "key9": "fNejBUvUktJpuuVp9qLvcUito7V8xrzRz1oCySP4RonzSKuKLRYLP7RGNYeXc49cZDswvoP97QcARwJ4XEnrFLt",
  "key10": "2Qndy4ryjFuWWYEFvfoai66J4nzmBBPUX4BubU2TzKQSMAvoLwvGwkkMC7Q9Q5nVrgpa6wggdf5joXD67THRSW6r",
  "key11": "4U79hWsipSXKmVuQAXeFA6Rjp26UrkQX96YB9T5cVbc2jApU3s6cYadwyDuEv98qYKuMGvotME7qoSjx22omWAos",
  "key12": "2AKtcN6znKRdzWEM7p7zMybrCVmAwUu3t1vV85inMKL411D7ARBbscchHmVSh82uNftxBn1wY9Vddq8F7uDBwcjB",
  "key13": "5cqb6mhB6rqPLkyqXs3uuFzT9ZByDcVXTyzsWCtUE4hrd4deTHAnswYUUMHsFdfSwaGheBSLpCXQ4JnWuSsiKX8i",
  "key14": "p934fLUBag8fDLZ9zneS1VW3TzaBay8ksVwP4pZKd63KaUXzkSsALEBJSVDqaGKU3FEJkhLhqHA8En7PMtweSJV",
  "key15": "5B1tQKQELTypdK3GMqu5qQSJWQM2YGXvqG6oZmoQZF2WoUt9HUe6ZwXmkhRjvrXNnfjtsQja9ZLboyYmeisgCubP",
  "key16": "33fDPuuPFv1cTChbFzoogFxwbkeEK685jptU9xjnhBxUHnwe3RZmkgwKGF2R1YcYSD8rCpKB4s7qixAUXf7rVcc4",
  "key17": "2Te5aQSbQcHrFBFNaU8FPMRFm5CbtEsqaGP5BSCerZcqeyz7zZfJvCXoLmoKEKRZ1oEmRR6xJBWMiWpGkQD5T25V",
  "key18": "345NNWK2HjaGtzw8umjYJMNStR2r7RiD6M2FmeKRCRubhpvEavB8uHoFwTShtvKogdB5opyviKfabJzpqymAsToz",
  "key19": "4dSNbZ21ENMv5umtpXTJnCY9Qh5HEZHdoGc5K7eM3jCgBKJoHRbeVjMUZE17doHKMUniJPT2KAjz2oBt79KSShFu",
  "key20": "4Cw2cGPkowPp3DVFyx1Z1pu7z7xBtMj52XRdo4gZiFUx7eyh5SUuTqKvGZQh1T6y9XoB5LvV3m5QLj6nK42J7FX8",
  "key21": "3Vw8vSfBsYHsV3vPPgisos8fQH9op9JVVmFyqLfsZFxiyqCMDSDRuexJxJg9nfYjHiYZGKzW8kL9D73XSLP2FZwU",
  "key22": "4jykRi2qpq9aW3r6ori7jMW6QKFY1F8uimY4NAkE343T5udQq54mkhT7MXF94DU9XDhRg3PGH6ySps3DkYo1yq3C",
  "key23": "4btsBD2HYusuWJ3DDS2ZFY66r43NfqiTej2PAbk24x1M24GKSG18v6NoFyPXkofzXbWQuo6wQNnUDXeY3SbSuNQ3",
  "key24": "578g4rSUMEtUzdwe3uTxo9Q7hnkVRucA461uzAQPYGYsqcpNunDfYoRXz7YVJUdh9GGNMwygJPCe3Sis6SFAwAkC",
  "key25": "3y9Hiv4TQL4XPfHT6dRYjyGqQSjbidPyRtAZGNEdoVgWw2ZYp8hy4ztAu3k1qGdYctqiTJi1K59xfnUhFBmcdMqb",
  "key26": "4Tx9k6mhXu65kSAJE5EMJih9pS1WwHNc9sETuekz4Qms1TasXxjLc8t6oebZaEzjQQZoYcWR2nLm9iWVkGUqbFaW"
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
