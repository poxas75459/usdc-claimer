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
    "2QEtxthnaCBKspKuh8AMF58GkQ4wN1P8XR2zLByCsnGUQYS8vursWJo2qG4JwLdXuRCs3DkxjqzJwr2b3mBQUYud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vj837KHawXMSsLtmuhcWMEi7THhbHn7gf1v9yrDumhZioXCv194xVExaCUSW3Pq1LJtXLaoZuDA2acqvvqMAjCi",
  "key1": "2AB4eBWmkMyMssSgKNU4GqTNKTscXhC4minPcgP5SpoPwN4zUFnFpZ9cRTpy7AcYyhGCReEE1GL6YwbApgm9uetZ",
  "key2": "d1JoDw1ssFoEDqRu6SFcCivMqrBzioka7vXr8yzo47FzijSCjhRQMEqoj53Q4B9JURxy1BV48kLFww7Coc7YfeB",
  "key3": "5ngBZzK6kDpfJHJpZuNcqb6c4av4gX4jg2C4FuT1uXo7a94yLSRfZa2oqZhyW2q8MGcrHyeAoqfMAtqvnp3GBbwJ",
  "key4": "VQQuqWN2VrVKLEwno1bn4a55nD8HWeQKgN7KQXn12WgHG3xxrenudQCK27ZGHBKU3xncLCntTc4N5G3e98GSdmq",
  "key5": "P9eSvKmyVXwWvQBCtdU9qMdUrrkYK6ja7cbBnhMz6yJJh7FCjdZCBM5GKR9tordqGFpFcqumyDQGUQuxuZGQg7e",
  "key6": "3JWuPgay9TnxgZJG21g4eSyRwFeV2No7PdNW3gc8AEtu48bvH9KmHgXut6pG7Nth5nrcouu1VbU2aEG1NfLAEAD8",
  "key7": "36HKAWAcuH94TQXtea4fA8aij6yyJ7xCsy9GV1nwEfiesS5iDnTQota61myF3QjEpCDfG4feJFbiM24NjqLXdPuV",
  "key8": "4FjkFYvwrnHaQkzGgHZGBsc7BhWcjoVAS9kRcZ66Nr3m58tMAn887xP1AP6eft8y3fygRGPurx3E7JL1YWXvcPSs",
  "key9": "3xvVmXHRw6woki2eVjdN1Mp1e4i2facUDQ5pABk3QPs9P1ihPPTZcqxhRJn8NWYWJNhPoFX3UybhEe5xMpBGD96J",
  "key10": "4gZzHNn6qKL9cuSPkTyd8iwy6fNDXRxg8HRYHrv7tAw6ZxRyryihgcgXnLZzWt2YRUrFPSp6HWAb9EpysQ7SHFGd",
  "key11": "47fNpytWSJhEtgxQ7qMfXjjGNCMbAxHhFXAkKCutihrvt3cymSokU3VES6oPtMacKL5d6CpiMPHVaF4dC1Qd7Lic",
  "key12": "4pvqKGsCoaogxWiFFsVEx6cL4JE6EBKcp1jhY1McmZtfNm3uu49n29VqNwvS4s3YrCjo4aq3jtN6Mcc1vqLqxtSj",
  "key13": "5hnLA2Xaq1f6XSrJa94LXnRztjMs5bvb8J4ZqHnSs1Buz4dNwULnFgGimEfUeNhtuSqaqHawgaVAc1w7KZauJ5nQ",
  "key14": "4aJvB5p1huepPwayB9jnG7FRX4VFCsLMMXVXZfT7awpZvaw7tFi5LWcHU9t9rPY4Vb9vP6vF17iKTf7oiZCBCeDL",
  "key15": "CThGVqJZjNRWZz6Cyo9oqw6PpjtdttVbsvNzhG2x2wZsdCpvpuQXssKWV5P9s4Td854rLHuj8Dq1m3rxNiwpdsM",
  "key16": "4jZfR2NKtiWpJSP2HN4PsC9p9MmDh1F3uNEhN2sWKpVmmcietgNao2HfsN8w63G2XG2GPUDfPwz8AticzYXGo8NQ",
  "key17": "2BxJzBwC6JN1MQaugPAqbJf4efYdxWXECiFFST8XVmDMZfvtFp6ZZbV73oVyHyJGRbKTCy6icFH7XsLMC2EE1eWE",
  "key18": "e8zqLDJBapGypthkf2ceh175V8b7Ur7CY5cZyma2NGyYw3Md76aDfH4PziLTQkaPdBZ8yz7LiQw9z9zSuMmtw9S",
  "key19": "4Wbb7qYFurLJtq1cU4J5RaeeaUo9Bf6hZeZdfS36kJSkdBu9odLW5cRfcMJotjrk6vLnPZurqMNFUwYYyidZoGcK",
  "key20": "MT6NUe4k1i4DUcLxT44DcVf1EvxTAWq8DXEyzDkKzR7tkR3RjRgJs8qkVZrRXEENqr8mHf5D87Zc9uCG29mn6Ea",
  "key21": "jYb6HFwjMijABDqVAT9vWQ8n8fcrX24gnSfSZksQygSqCLhrVJ7SUymaFsN6XHY7cPNsYGepQmvSs9XNcC817FP",
  "key22": "ZBhL1fMA7Vu9FjhDZoPyYrXUhkehQeGTyWgjEEBXCTKwTkyhWBc4RkamwoY5v9myHYzAaL9JvdtMpPJH1pXzqQW",
  "key23": "3o83CAP35LSWA2hUHpgxo6JwdEgNQ1JeYUSQqiDjFc6R36bmaKx6nCcY2SRd9zSpnkhvniArk37usA8p5ZrZbx5k",
  "key24": "5XwY8hzMB1UutmekVNpHsidskbvphJSJPQpvLkJEHRuBjEEQT8qJwEDbL3ybC13bcRHYyfoECHDQF8zx4xq4Uew2",
  "key25": "4yT1pkXGhT92aszMpUstsWWgfUYv2KuKg9qRuZJSSQRt4XyDJPCXTTkf5WFp2ckkbZmTPVd7PopuKUFWzY9yFbMK",
  "key26": "5KMRMEmG1wELmQs1hQrdRXEP78b191biDYbEYPppQKPLXqUiZ26USgLH68bZnoa1qGD9S4a3CWwxUFGeDuF4eLWi",
  "key27": "32hYfh9hRB89ByefMjYSMX4CRoDdCU88az7RoR1QyQr7Bxk5CVBf94whWhXLBk7xsopzFp92DeEYe92zhSL59at8",
  "key28": "7JvCHdTPjhdjysAiknxF3cGbCcyBSQszncKiqgWiBpu41DgtEJmekmvLDuwfhYTAjXnKLxTkcuPyRRvbaPFyqaS",
  "key29": "597wgJLe1XvLM4eFeJ8nC8EkwNSsFLRDLBJGbnAXEWo7z1bNyRZre9ndkr2WjiuhTLyqWpqS2qmudaGGKVaTctxJ",
  "key30": "cYCY6KjAV7CdX5amL3KwMnx3rp7yagd3b3ZuV146Fax3nY74RrCaMS7TkhMxJqQF2AAxHKpHu9M4ChZXBEb67Hh",
  "key31": "3mCGXukSwyKeUwhueqi6AoAQw38cGcFUJrkZmmTmuRN5kMFr2keQK8B6hmssBUNuZarKRRMn3sB4GEDPGh4xGW4w"
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
