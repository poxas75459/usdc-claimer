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
    "2sd4E7nuGFzQgmRjawTtK7APGQ7fsuaA4Aaxd1xdZY3Fn2ykMFe5fShoJaQqtDLEqvNLoQSJjHQuRzgB4Ycemy2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzRoA7YWgSgrmKStJbGEj9UFih8Z88VvXLeTuQt7HA59Yn3PqFc8xgQ6SCnwL8JBuf9noqw17CZcwC8Y5VngYTq",
  "key1": "67E8eRjWckxoQJ5FpqnDstzQErdggwAj2WTPNtBTLHGeeK1ZVdBYmxJpHHKhDSDSNrZVHuvtqJJzN6crvdpNPfsx",
  "key2": "4Nahc7orxAz4dnDmxjdnFVjShmdTJ65cJJYpLwLpJ8YKGM1aeRKRdKwXkAVwaqFFRG4Xars8yMEBks3QBU3bDoxB",
  "key3": "3gMib2D1sxMfbthvPWEuS5mmEPFiS7k8cYghNRmUxceJYA4F4RAjZKjgzH3oYVwpW4rxh7eUMjDBqwrzPQBTbY91",
  "key4": "2qqXuAMtxNMA3eMJhFXY3NSaiyD9qfEpf7dLHhBX81dbzttBfbL2XLStN9bPYqfvSsbcW3jbGSEVkf1e3n8yPSAL",
  "key5": "4iqatXoD2ZVEBVRAfNXtLhYVZmioNw9pGMEXzL6pBf6serCMT3NeAW3QaCD7GrY5r9PBzAVj1CzTK5wJE5MbtR4i",
  "key6": "5o3Bq4bkM6hUuGU3cbnBcZqZbS6XBsmRGeLPn5iXMkDajmZEBRhSqshSJ4CjcxPFukYkKqAd18DGndfN4o3FZjmY",
  "key7": "2jgx3X51Uw271vr4NUb6f1jLAtNEqi8wbLSfvHqEQsrBug595fUJ1pT5T9DqQnSEetLUbhqcwTBqFeY1ABDqP68y",
  "key8": "4P8rCQMdv7ZuDsyAStRLnz143VGSvKabRMHerCdsZMjUNRGtcMX9XXcNdW2HUwifePd4iMhX6VxZKZ7u5DeAiAYS",
  "key9": "3uzDNb2ddiuhryUpYmLsV8vyEZhybBZXEhVVJYkGWKTN8ovgtPHFLGveQsxuLcgddB2yhm127sDUTwT9chmSuhe2",
  "key10": "2g2yshSzGpFGmMga8cDLcSDwyAiYXYYD8Ho3mFwHPJ6wJbuZi1ZTyHyfNKWsBAob44ArdtpVrPTxBNqxFSQfJf2Y",
  "key11": "2RjGo5ycosZKhwahs9dSEDpbSCroXyoqBEYz7KtWR3EcdTb9357dqX9VoFqMZZnrfvrc79VL6AZgYqbt7d12aT4N",
  "key12": "5UKow3XGJfqbQsmbWznain8yyjFuD3oit36aa58NE5nXpvw5BS5EVhnBHcjmQoLakrPbMztH3QeC7YVMAqcq7QUN",
  "key13": "4UEQ2W3LHTNEAHWJWYkRxPVjiA5X1nD2hbZ44VPrvwEeWGzZPPS3Kx3ydB5kVXf7GQGN3BPdp9VcuqyfgjJNX5U4",
  "key14": "Kwoq8QuoxMVBiSXS6Us63RpbxtbuzXX3bmvivmiqpMR873kWvMN94u7ffQxmkpBmDzJjUkpQmx8ZNpDdYhgZdEs",
  "key15": "2UCJ8hjzVGoJV5anMxG2Qa4rvvCqmqQqA7guK1qbFUaJCjAeKzsKtkLJ8zxwY3KZfCJSgmf5fTWhyibhuYPHuS5Z",
  "key16": "4QJ6qfMGCLSdtHHUWAX4HaAxyMqdaiUs4Zsc4DKY1SG8Rs3U2pGZeZ9aXHWmVz9nKUVsyQg4bA5bsZhBCacZxXHo",
  "key17": "3MZMA2WaHhXin6ya55Q6WW5uf4ta2zha5SrS3Rv1BPCgDESDcWTxy6CtK3HqAPBRkKeqbxS9oEuADJQjatxQbZ1n",
  "key18": "5E2qRUQTBZ7agxwWFdbQyFgNdCarB57mNaSWWqiE8CBmrUGiqg3i8TJfMC5aQyaATHRgprY2nnmHrWBVNrdd345e",
  "key19": "NqJVgpnHMdcaYJym5GB3EAKztTYLkQ18cKQVzPkrcTEMvcmakgg6Fj45bqdQjTiyNpAqp2pNQ6Q9ZyhgtV9MCV1",
  "key20": "fQkx7tpkzWxFY14DhD68nhHp7VpxuJu4yigoXD3FkBfiwrcSFMHGXdoW8AyQRi1dPQLLxu7fhBzqrQncPUGVEzW",
  "key21": "4wLbS4znmch3G7oGuCVi7xrYi5BhYB7Qx5X1tVgZTdYKGcZCpa4pGYAvar8wiU9zW8xEjdtEcre1yehvtseUiWbB",
  "key22": "4NrcxeWxzajaHReSfzf8cH5Em6ftWnP5rKub3Mhr7BBttTSoMqzFcRrR8Y47DiRFEW1Kvn85dJ6L92CE7LBALbvD",
  "key23": "23p7HDCRgLfFDAKoJJ9PbcYxHubpwTrS3BZppFfNc5WibY8qfA4foMPsHgUtXDBVZb7BQqC2rYTJRZUkBWjw3cqD",
  "key24": "5eGjw53mxN8ECiVBUD2EtdtSvmKxvxn4ybJUEtwtXwYNzjZQcx21Hm4cR8nXqd8U7gAYbGsumjPdoDpo3xQMihMx",
  "key25": "5JGRNeq3F76FLB3DgqgvVgJBJWHUhfbLeTJUB8Z1ivmVc8Z3tLmnFSznNkkQB92Uo1xEkyLpZn8vmcfDe7BWrj6n",
  "key26": "47sKfitNdj7LqFDpKwPhVS5AXtwx6729ByRBHY6N8Wg3mm9UxXiqSVbWGn55ofHHUH9bFuNzc47fHuKsWnKdGcbv",
  "key27": "2FdCWYvbH8t1eTKmfC1CnAPCt6TdHoPyVhHsnUcLPNwTpURJ49MwYtzbrSsdK5w4f4M4eDZZBS3NdHnY9mtapjWk",
  "key28": "4aHAA8drrCpCp3nJvQQB8S5rET2V65tJbUrx5KuZMLdeSd1ePX9WriWDustrTTWV9CMoGTMj8G6HDG8Yjo3MJm4s",
  "key29": "2zoaZ3piiH4PxS5yCKt1UZiLc8dRwH5YZHPNpvKvK1E9XzZt2MVH1wuN31YK1d2Xb3pe8YqiM3oJB6VowuS9ihJ6",
  "key30": "2nMq5WG56ysJtaTbKwCCR8x458Vv8MxR7rUQwL2ucxgbBSckAwxVZVeSBQD84Bya8PcxrMRBbUQMK2tgBi9JrTCz",
  "key31": "3qXPGkNSeNxpQxeZXQ6maXDfMpAbX5HmXGN6wqMD9ExwmJVM4qaqug3ZyjfJgxn7HdU3PsTEWMb8vf3VcWLCgcj8",
  "key32": "5v3NwZ9KWfHZ1phmTUV98JphBzqySMLN1ir392J1oQxd3x78gcD9MP3tNZ9sadjt3mL35QoPS9HnWp4m3CbqsWxa",
  "key33": "4ShMwx9mJrYpQAQzWntKoJmuhmbQdrTrCYhVwk6WwYXJ1v9cjkh2yjnVS496gcEkbmNFhu2ab2iYnhxm45rytizx"
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
