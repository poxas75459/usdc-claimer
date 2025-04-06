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
    "4uUTmPuEGAGz1wNYFX6qWM6ZnsLkPgXrJvxyMUhR1Kom7N2fgY2jFexaYN7MeHvoZFL3GXcvg3wWp24GyQEqZY1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEPJJum8FBAvc2ja4cLGXzxXt3gwh1oHSLZtyfyo82REeWE4NY68dBRWthhFGZ7zMDDUx6JBUsbyCT1i4AJBRHq",
  "key1": "3Cyd94xPfrkii2SMg9L9SVTisFArftdnYNHEFkVMSbk5Pi781REUYEZZKQSd1HEBsdBCBYim4hvMsynz4oEXr2We",
  "key2": "4puPoRDyqxHMUaC4j3sazHaRvreVq2WhmmYdWVQEQ5gXYwSC6BsVnQCPhrdshaf7x49P4uE6WCWeeCrRYvhkYArC",
  "key3": "5yaQzv4BrxWiJJWqRb884JWzkGXR5PhU3ZjX41nMSgiw88ds8EjH9rFxKjD6RtEWgDVDrX3fAa6AeGwuH8n2yw8e",
  "key4": "5Sx7DqkwgrTWbGZYVZFLD9MwQr5HyutZYK7LMva8a2zhM999ed6u6CqtSFfAwHtks9gU4HLmSNeiYZtbQbKTY7gY",
  "key5": "62SNDct1WprRvY69puiuQ5dk42JvXaDGjhEF9JZHcbmfSbDLktcUtNypPe493Cg2hZVCyRmKbUd9vPL9Cdu5bdo3",
  "key6": "596TuSwb2ei9jAgouhzC228dJHgoZ1qSrxbZLMm59CFPEFYYvnWutghncEssNEAEVurMabvUPd42DzVJwpf5Fxdk",
  "key7": "4JrLbANqKqLfUB5ubVeC21ncYNKtTA2jZwAoS38U1zgmSruU5fcKCYwN1eskek9h3ZUsGXZtqr4BYV1ehcAMJz3X",
  "key8": "2GDm7YTLFbJKwtz7J5oZzenGLD9ycXemJ1EAWskjQcw3ST8aVSrvNbKHuMuPHidQ6N8yPNLHbAzXuDW7fjcdYS5Y",
  "key9": "1bjC8UvMfrnsN2u2kcmap2Yub1KRDKpupmC85pJZZhT3XTkznuPRzB16pzqVNerfqCBfSJqmw39ZRuMK2nf1vpo",
  "key10": "2tcgoRcSdWKJK48BSLcxwUg6XfGHAFjSB56DydJesw8uFPvvNUCZZNTN624BqmjMvUXZAKssky79QfnYU8kpYQMe",
  "key11": "5z8JPsJoYgLHLW21LiffzeHSY1HVbULVPiQR7rj4YoqVj3mZ9rMP4AeN3PsK2r7WaU2Np8SJkK4wRFnB1XRYgePf",
  "key12": "23oLpdgx5MF7eFMvtq2T1rPqUhPwM28kKeQmwjsUcngKfTZp8594mkJYzdm8c2FNGr3bE9mWcfnsPmq4Z4GTxhGn",
  "key13": "TtnYEHYosfQAzex2qQvLYaU5kP5BJgqppbgknDHyariToRDoUxB8myPJAAy6iLeSXBbS9MzPoJpuxLmEp9H9o1w",
  "key14": "3xzSjNsk1yUtDqHuBG6RyoJVTZRKKLfQW5HX9o1Yarxr3mvVYfyRiRxKNn1Lqwypaj2aq5dYWzDMgt6BJQcPKVVv",
  "key15": "2ZMysHCv5qgZuHyXdgU84trqqEJHJSEbzTMvHwepEaHV6mZLXQgKSCNt1q9dPexjBDvwWrANJivD4W5B5zLLAxQm",
  "key16": "3RLTSektTH8kdZG8nBNmC1cCviGxuoDUKGHoVNqy7rPWussJBVFCo3nuXWyKsLURiHpraSccfEro436guVW4n1ZB",
  "key17": "3vVmEeED7qBJ8nwkNRGhzWDvY3AnGDUUJoXKcba4yckkPQ8LrGQ7kWfB9zdxhmkwv3bgcLd9yJ2vLpgWo1izE5JW",
  "key18": "4jK4k4qhxY3YdTnZBRtbCFz8zm5YpiWLKVJkYnaUoHsNCD6Ry2Uv9f2Gz39Lq5Lmxp3Lx9o1keKn7D7DQMVfWpN1",
  "key19": "4Bap9vv1bURXEje7wqQVMZoB8NhmCzUXRe9tWoeT4T2vbQqUxVDEHi27secrUymsaDUnr3stc1d3C7jm5k4oMpDR",
  "key20": "2JDYzWpJNEg2cpn6Cs9TTgWU2r2o3BSNSAJKk1iEzaT7ghmfkUFNG7za3RWLyxqNHTpf2vZySFqaq8fyFGfT7J4e",
  "key21": "3fa8xmFNstS9qqVAppDddKAoouftwnWQmu5QSbaxF3iDAewmAY5GPh8ZNsgLCMFM6DxAZSt9hF69zwsGNWNDSzqG",
  "key22": "J74z3QFYAnwPHsSuDnAovZfEAWVHPGcNSxGryThJ8Jx3X9wtY65uKDkdA3i5Dv8hKDeS4vgFLUBwN7cky2Tv7EF",
  "key23": "uZtQej93jQ4eNgP95HKk8LB593QGoLXat7VZk8vQmpGgGhkzmshA59NyxQUp6myZwAMcQh4VgcjFRi9yKGhv5fk",
  "key24": "5YzLqCwJL2gWjnXZjrD8r4YEWaEZiSiVckugBSCTN5wnpFTJPGjjV8jKvGa1d4FsEN4oZjDHibqQ7JyrsBagLE92",
  "key25": "2yJQiFrsZ28xKPvY611wJBh7hPNPH3cDgWhM3FRWGD3vfyW6ariDupZjFP1r5X1vARLddC4qnH6Z89AyFmZmxBBq",
  "key26": "26iLkihAZLtim6TgJkaL2NcGNGDUN6yh5Mkaj6ciXGQbTF3HyhvRDJHuWfe6L6y7M5DTK5422rm2jQ7jAbdXvbMR",
  "key27": "5ycdAAVZT9vz9LbNhRrx4zjP6FCX7LBJb7SXo6ZyLmHngHXrg7j6vG8NfXWbdveFaquDFSfkWWXmpqejQG2M9xXf",
  "key28": "462ZrzKSnYzw2e5RBJJxfmJG1iuL8dfMNUFefBWqrJ742dKTttPPpMxVLRr6LRJP96nUAuAj7ejWZKQHRACDWco5",
  "key29": "5q77jDUZ96a333xc4ToDfDuXu4A6CjDeu93v6cn4XK9qLYk4kN6ct24sEnGiJJbavy2KobkK5fH5r3ABE1jucV9T",
  "key30": "4jShYBU9HUx3SpMU923nHGY49fzqMN82EYuuiXJCcmkQrkKowetAaJAADvBs75GVbv11PKj4n9zGLQP3ZZLmZgGT",
  "key31": "3g6WGb9S6hpFXAMJQnk1TGnRZMeQPEMrg5pE8kjwoGQ1XDWVTW3rKmx8Ydztq1JKza18pdk96ej3iUTUpKQNHgWz",
  "key32": "8T9XPEHDVZvcQw35bWVSxhuDRqNNneLpoUE2jjossLP5E4LtbymkGV2LhLsPvBaUTxrgYWWRUPDLTds3oZScJBZ",
  "key33": "3eBfFLV8ZYQq8XTiDY3mfoGWxVpp6NTpDJF6UQj6HsYvYYt88qCMZhZ2ewN3z1bZkRf3DrsySKatvtbHPEwCvMSj",
  "key34": "HHe8dnJYXTLzt27m7ziGbEJJcdMURCv69pb8wPGkHqAtoYfUqMsFqSz1PLgZVajGGNrsXLLqqNwR7nXmLBNhS2P",
  "key35": "57qtbyYcFZJgB1uWdJyBe7seu7Fhoh7R9HQbeAdRDVTTRquwK3L6iZe1kTDreAN57vwRF9PT37kce6NEq7wG8xUs",
  "key36": "64LNrqWF6f4AYC43Wzhwp8ftYoxAA2dujrhvCFUgmYGEL7JxvofRNePhHxa6ccCYUBMscv4b3v3b4RcsQkb9GTYQ",
  "key37": "4613bQmEhFSQvok4ozaM3dA1wAgxt2ydDEwZxd2SLrJUEiRd9KCpcecqZcRDoEWmyXygy4AK69Ay7W53WrP4754A",
  "key38": "2ErPDTd8Qmym9SFMfjNkw62CeDnwwJjsLNXpgz6s9fMou87unBCEjG2U81FWd6Du5AoTCH78XYZDu1rr9RE7qWc1",
  "key39": "3vkGAyDf9NEX2HTMeYz63dEnT5wRZSwCkn9bZFju39Prg2qwKQqZDKVLta24oaCqK5yt5Tz1E9L9Ni8JqyMEZb41",
  "key40": "4c5F5VNvK7cbuiSyFfaiJDxHPjJubCfkFxqsjCayyLpKSw1YPDwdWyUAHS9ih9BvDgS6QA1cEEYR5v8iDM7Lxi8L",
  "key41": "2kfXfVrAFWNmWWEihjkn774gvivDwvbfssgHFvZceCoVtb5vtwnNwS2jP6dYQTpD83Zfs62kdBbe52nYXFA7Dh2n",
  "key42": "3XHaFvoZjWNEkDSz8UkdpL7xAahteUA6oWEsjgYp8rLesWDZ54TkLerHKJKUw4Tpvbyy6YvzP4e8kTe9w2LtnRm8"
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
