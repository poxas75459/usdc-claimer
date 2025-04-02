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
    "4NE4yG4oM3QDXacTm3gTWiMy4XPmznxTsNARLP5JZPNvLwEpt8wbE9hMXMJzq45UQ6bsSk8p8kSijEvgdzM9GY3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKoakG6JFh2H7F8picA1NQCfsvEUV3Kh7txZXkMsus16iiAtefkp1M14C8mz9YqATfNrimRn3JsCCBsebSVQcSn",
  "key1": "1AUxJqEiXZfMMQBxwDxyhTR5YSkx5eu7rHAZS9qfSLxYxMESbBdyjLZWvPfWE5TfXF5aoQ8HhsD8AqXAWtRcs7s",
  "key2": "5tDiHeL24EVfujZSRpVo1QtFXq48vCAHTcfLrgtGtK9KxyqKV81D2xbigpNnMHoX7wbm45KKMdLMaQukjBQnxqXs",
  "key3": "3FthpsiWXsLri1NsocpCw3UQawKZyAg1R6DmcUJcYkrhMQjTM4A5yWhXZPjhYmj9N8f3rVYZyESsnUJPcGvGDtsg",
  "key4": "dBJCuxmuFKEKvUHVh2ZiTKw9qbUTfKXnwyYXLdd6jpw4n37tZQh3brF5s6VSmkoSBWtTKv5LXcaQAZXxt2fN1YD",
  "key5": "5asKw6oPLKv8sFU7L2sgrky4naQiVmfdVhqugcpzFoKaNcXppucALJtQXong27iTo1WuYE8K6zdwbgDbMFgiapcJ",
  "key6": "3cN9efMS1tJaUmjubEAx9ZYxmdPNYH2UoK6DWjsZ3ghxGR2xcQizhy2EuLQTGZ2onUCuZGJQtvhrkWYGdp9pTq2n",
  "key7": "fdZdMMwQrwmpkz27Vt1f69nHGJi2ooHEa1RVadbj8sZV3T2n2m6wfRZJKbyapFHf4PAN1v92v1TumZJHvxyXoVP",
  "key8": "5fCCFgoT7WPfJ1uyvzird4UTemtzpBtqVtUVi6xN6cmAxzojri5xAE7rSt9RXyVQ3Pcy1wrB8MxLkzcDvzxMBsCm",
  "key9": "2TT7stEnwkdNGJ6tZ2i1s8XLv5JF8K7gRjEaNWER1HZhjiQdUPv1DQw3DCj9cZhyS4HyKtVYzqxELZyvwqgerUPQ",
  "key10": "3HdRJ89Hy8aRpiFDy3Y5yhF5BYWabtoV3uK1JCUEbCUmoEanjSwV9rdVgW2qhvrnhKNDy95oxEkGTGFu6ngc9Dbv",
  "key11": "3uSeoXvwXRzuDA1GpdKCsNQo9F3crTczxoUArEbd7GjtybMyYzP1grczGmZ2Xk5TgyhCZHB7Jo9j7qvfN3zzszEP",
  "key12": "4LHU4nS5ZshwQx7xisKodrtgKDC5V54YowGkwr54iu6w6uXpyobFHYviPde23NKG9nDsaYMYyehEKcsjzH5kzET5",
  "key13": "3DoWZXb8Hjk76X1pgEYvawB2TQ8yRnKLE9qB22SxFb3tXrNvSgbuFhYdQCLRdieCG2ctKvpPLVodJuG9cVse23Wu",
  "key14": "4uAXgcihgoDBhnMzFHqgHfB9m8JXta7fPidnv3ZDBnp1jaV3isFRdzpXvZsX51dMgFzQHx7KRHWxgqKPUaKPAUea",
  "key15": "5MjnBU3YjvmttuYxBL9WkgRVqkULc6Z2AvgXaDa5bVjANR84XShP9GtpordTNCP5tbEUYSmA9VyjcdU7a4cghoRZ",
  "key16": "26tN3DoMxiRnCPwKqKpVDcgVDnJXCZHtYxFkfqrqNAmpQVAkzV7LWXLWRaY7VEUH7nq1aybF7jXEbsy5oom1Np4f",
  "key17": "Dog8vwjB3JxUKxgZZR5nRFRyuZhQoceBuniVMdJKjARF5hYsv4Xtffm8YGUyiDYfA94CdrT4q3vhkPcKncqM9Wg",
  "key18": "3bAUSjw4D7B8BWpNH3kKxbXk5ZfVVGmZhy4nFWfXaL4k38h7jSfgz3kfw8PKVCqEBeYrs9BiqAJa4QLinkZc31LV",
  "key19": "HQ5TQYfDPsZtXh3as7EYRWPwoqkHHCBMUAu5NXyn59zq2iCWtf7v43bPCqmiGLR2GwFPEmpUh3k84dXN3autS9X",
  "key20": "3RR2ZgjV7r1x8yUHNmXirxDBYe5ZK6MM4GRbTArYxFPB5DXk7gp5G2nJy3cvuqMmZA6TdgY8LXhaCWdUj3V1ud2k",
  "key21": "4xAdVzoz9dxa3VzU2yzCdbN22SNtBcJaqFr39qn4CR71EFibVGZgvaUC5Kj3S11MT19BHmFq3og95ytu3fsvS3eC",
  "key22": "41FJkkDop1o8ycuhd4rrwzEnPAdk3h4jsvzuLGGqAMENUALFzHcgrMBfb75Lefm92aqdtXy77jLJhxJZufuT2ThH",
  "key23": "5kRnQQ93Xp8Fa5cnykr9XKvrbNBxn9VZ2g3TujzXo3xnzCS6DoN9rF9K7wshExMVQNYpptY2WhsKoxD9kjUQRw5F",
  "key24": "2g8ADxzoLaQvpdkxFqn1WepqBLWfRpp4mK8EJBxYTtrNmZ8632PkMA9NHYJpozKVPRP9HFa8b537FFB3q1D4kjhn",
  "key25": "4R8MVnofa9utzpETYx1me29UC6oJ8NTZEBmq28DRvmCqFWjLmoKBCUfAGa1EnqPScmJJrbkBuRrThYmDEVPUf3ox",
  "key26": "3pEwXWAeuexQrMN4MmRDQ5gWq8seSJ3yCXHaW6bC9eWDRok88ELU3196iAyrSoFT78zA4iXV8Ei9knDxPBwJLXAC",
  "key27": "3h1M58kZTYAVi5BzkaMoowaPaKzpQgnspj6bLbi9yEF3F1W21DuuMyo3phL76ELWMmbijPRbJ5g7DXoXeh2BcuY4",
  "key28": "2DSNPHHPVX9rc7mG8m9sKrXJvRh9cqrMr75hDaiQBAKYHUKyK4thJ3fQYB5aZbcv5XqPYcwME2USnsSZLASU5HWW",
  "key29": "3BbXJZwJmst5e8uQ7w7VN8nmHP8T8Jg2ennJQ3KvAmYxapLT5qUV6trTDiWrxadYKc8Hzi1G9K8Ju7UuMM7wrNXN",
  "key30": "5NZ7dE5ucw2CUri2JDg8VuTri8b1m2FrA8QNMa293P1L69G8Z8QK4SNmFNWEfn7Fc68KaMqjqQFRipWcwyfC1fCQ",
  "key31": "DBXn5C7ZzVZaemnvaVAaXJ74A1BC2PhSqe25nYJ9xkPBdVEfN3k2d3eFn6fEZzQAAAjHCpfAvNJvsKXzrdPihNg"
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
