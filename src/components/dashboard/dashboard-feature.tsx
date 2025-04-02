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
    "57pKCfV6PqnrSxgCoMowZmmkAZeuDrzSMwjJR45ew245s6LWwhqjnoiC5v4jNTzJLcpgThhwLp7foUUzwEELVWuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqfMv93jmActboFApZX1X7cfFAMhtTmK5xGpsMjGBMnYiejAXeRJ5n2xj1fBuC1QtCpKLczpJypsWEpHEBVuyPs",
  "key1": "4T5GjtbZVmB6EdaZknPgxn4xCzssr1ozHwhBkhKgFRid1zzsq3uAgD7RxNzS1ysnQjCJfEHY2Z9Vgo1k1gxcemey",
  "key2": "36NHEFXMrP72voixpjuR7kt5eUAoiL2bXzQjrceEWm8ZrqJmQ1sP4Q1LocpgtCZnN4noQdWYAj36N1t7FV7iUoFp",
  "key3": "26eYVbez8L3XhUHsb2tWWpjvx5u19eJikkb9rbsqjtmsoQThCVMEpciJYduzvFdsBpuDdbkfvWeuEFKmD8cHt3iw",
  "key4": "4fteLpE5tGBeSEvfDtveQ9pW6uDr88NDgVaYFXpjYW7HAtcj2xXpfYPeDKAPVHuxehD5DdUG1DAbdXj3kzyH3SBL",
  "key5": "5JQSAj1bsVrjMTffZRzFCoNpZ3ckF4GTx5G6hrRDZDLiqUVFQ39mXeZu22hKck6YPium7juUxr7n9YxGJPVpUH9T",
  "key6": "22WfgSQTuJGXP16oAzNPF7PK87YjBqhLsjTbQZf8JtG4U6Pzw3pJrUVoB7GyyudfnUSKtGf3UfNXJC35b3Ts7Lad",
  "key7": "5m37qVuRpm7uJ8EV4icnU8mogoYnSvdW2QgfpqnXLFiH189QqfQM4FSpU3EDdNsMhsVkT14RvqgG4earAjFjZAWu",
  "key8": "2y7M67jrfCDsZtmJevsfZwuoNNt7KiNoYt79QuwpzMgDJZbf8TviCEQUcDS7qDcxnEFkGnhZ8MYGoMZDwdmVryk2",
  "key9": "4nMS1VZA1fRGhCMhHsHTPunff3D6Y6gMGeCc2oT5CtR7DmYFWPANJd61HQvb5dMdo5pijjUGiNUPqxeQe5V7Rx1c",
  "key10": "2kur6wPsqmrhuFJevjQbCwBcDJptBXVMFC6qwVnfPKjftCsSS2hkngY5WnvB3p1j6TNBzRXxMKvfvkrJV4aJwAyu",
  "key11": "29kBRtd2aJ7GeMGahHuJkXMcNTYfXcShFoiV7fqzo6dScqUEGcY54GuuWFeW3nbT5sCXim41gWeFyXNGXcaj4yBf",
  "key12": "3L74DcFjAmAAqKgzMiMfFqGZpoeJ8rT9CiNtVE3mscoxfkeBhBDcHow7LiRMGacetEGNkHGvGWqtXEqiCbks4gRL",
  "key13": "3w1rHqfRmjPPaj984yifTBdN9pjYCeGes3nbcofXggaPz9PnP1yY28KZKtfhbEPgDGHJcku6vdQrucaVvFsxPi4E",
  "key14": "3F1ivvdPdDi2P4ZkpoUj6HZLcPUBAfM9zediU7UCxouvgzbgF59R6T6ZWSpEgK6BhWC1sRRKxp1eWfbxE25p1L7C",
  "key15": "2DRigDdqUSmTfz4rEUDx31LdnRcNsWo7ArJCcwSN8LRYja2zBNushVF77wbGq2HgaftLxxgUeboyQjqPuxrmUpph",
  "key16": "5Tg3EX8i7rJKVCZBR1QvvAoGnBjFSEXMTG1apcSYsRE2b3JMJMkuo3E66udSjfpEFZbEqsVhi952uP5LWKzKBHsr",
  "key17": "5tJ5cNv8soZm3124RLVu9FA4fAGFoc4UXWPMAnB9bmgkyWcwvV98vWMWQdF3hAF3FRWBMRHQZPsAZwj7dW3dP1nY",
  "key18": "jiAsgirdieHbP5527Bbvi6PNjy2K1Q6KDcj7oF4UUS8x9BvZgGkhJCnMMg1MQVsxskN43kvyHGZGDuCEsrN4FUL",
  "key19": "1BYtty3qcbXUoyofxhuvoLXt8bTM2zjG4GyTndYwNYWceGtoDbBhc6tNJUp2o5LthxMCvGBjn2hBbsMpbxCt3ER",
  "key20": "2EV3ikvLwhh41syXHktGTchmRZHAjmKe7PCoRAFSwQwqVaoJHvwBMP27Ra53enqchbeGvMRzkW86utRVY6u1CLsj",
  "key21": "GJa56nirKTCgBsnRs5pnP9TzM284bKfXTGmeqp6ZM1eddjEpCoDEMpbP3mQk73eaDDnHLQgpTLM9LhHUrNJrJLV",
  "key22": "5ZgGd9Sah8UyPSgQhT6a1jQ8hgvdhxzA6UXvTe1qMNaHEfG1LoV8MdJe8k2MW4GkoXnNDGwbUtPSyZw1aCEZbyDh",
  "key23": "576wbrZDSdKXY4XA8UyBhQifG41rVfawv76XAcyAsyHpcuf8fdpuPsbP1LY9pQzzMcRA2huf68prDn5o3RZYgpfY",
  "key24": "4hi5hgghXtRjrweA2C3mTewTRMEKVdVQpwpkiLxsXbB3Zgxsms7cguYdj5nBCmvPERaBJ3i9cAi5B2tTNrLX19Xy",
  "key25": "2gK8aRUCCVueHRMjXNnGVfs7swWhNCmdYhaVPw4K2dZNpV3FUfwC5gGQuADHGqpoqZxkWDGE75zkuSqw2s6HMGxo",
  "key26": "5ni6Mju8YhG5fEukZhiwPxqSRNNVn4z3eeGpTjUsroVFmocRKXCuNSiGWe2fbbCM6H7dkMYaRhcm41EhyAKkC788",
  "key27": "4TA1h1sHeyJH7qfh5hqjPK1tnCSptQ128TTan23rGB3uyxpVhKy4YERteAmTNcfAwsjxe3ErXtoTP4wxvvTW92a9",
  "key28": "4VixodNxLUtndR35ifH2U5pYDAznynh8Xn6JFfWdj1S3Jn3z8LZGcWnU9JiLBLadVa5fQuojPBGUAg2gwZL7981x",
  "key29": "4NZF6jYv2gaT8qpvbLTnNARxJ31NbM5CPweiEPriRXmwKmqPmYNavzdDZdAehQLPGC44Q6P4D2D3DNNfEKZxtYbU",
  "key30": "rPoWMWEGpTm7AqE1iscsCDhMyCuKhtvdW9yrq9gsWJtQcowmNYsfwfzMLaHsnkYgqfLYaWMsyAeZmizMnmCWvXY",
  "key31": "5HziBbLzWnGsEAZKZBZrquYGXs97Ra27vg85tvdiJEJsDxScMDK4ASiteqfBQpYRqGbTNzQ51RLBpUuJMHg6pjiM",
  "key32": "5EefirQGu4oqBZqdUrK6Sm5QNRp3CTWEVXJHy6RyR45XnGL9JcNkqHzsLf1sve86b9aNig87xtyT4acncvpnWMZn",
  "key33": "4n58ZQjyULwAS73CZBYeyFCxVFRqmSvroLukGjV6hsioKg4sqC49cLbpa5pDbVKxramEXYt6NB54gUsh4HCxNqLc",
  "key34": "5vcfwWYAgGLHnyKiRjnTQs5LHRDwyK6DoxN34XiXxxCcwCmRi2pmhrZMim2ocomHzz7E88FK4NVCAvgC8dK4EoZC",
  "key35": "26TvQGinQsaaVi6hDzZp1TQPgd8VTMMDnapT5GNWaRU5DS9R55toTz4ayENbzzneSngtawtwnPhJQBxqDefvxgVz",
  "key36": "p1usfYSVutxu1dGpv1NR1VVPTYYiqPJWwJaMBAUPL8CC6usvaxujTwp6xQ6CRWpA6MVTBXY8WgdxXK6nicWv2kc"
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
