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
    "2uhprUqzcL6B4N1XFnwsZ4MiSe98PxgvCfxnbRnJYRgyLwxvkWUzojmKG5PMWAqbBy1Eb2Ebc9ZhbqUTj4cCDw9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMDZXdfsgf1DBbeuNcR6jom5v53NwT2VV998t4gtc6XbeUyW7yzizakUjDKceroeMizePE2Ujnk6GJfyRLMYzfW",
  "key1": "3iCKZanFWN5maGghLssdZzmiryz2chQt3g2ubNVjdYRPEH5JyxUHtdcPoriWLuqtc3CAT19HTSBYQoWe2gC42uay",
  "key2": "4jpfz2x2dsRiEL4t8GGooBDx31bqxYFUCPy3tyGi4WoyHiL5EFqBDdLqKSKZZyju9v1ibKbgUGRRJby3U8Cooucm",
  "key3": "8PmRLTk5EHAzssYGKZJXQyZDWAp5EQQqh9Uj1k6pV3xEbcJhsaEWVghVohcZwaW6Z6iCW4ivA1wYQjNueq17otK",
  "key4": "26fg4mHgNUGcfwawNgbYS41nrWzttGQEepctLbgGsfonsVdzSSfkZmA3moGrP7UBbTJtNKMSLxYPqNihjBDHZjsF",
  "key5": "5WqtbZUavVZ9MAHLYWoJ28MCtAJ1Q9uFWDzrvkMDE5zkWwQQixYwg2fySmBqgARtCzfp9nRnjUhFtvo38uAsNZH6",
  "key6": "3zTXPeJqN8F88RA7eAXNPmitw5VsxsoMng5JhxJtbRYr2YgKvh8DyF7wL99WCDWbWMitr6UPxHdmZ1XL2CjUhih8",
  "key7": "56MK5L458kw5gkL1gJyruetUMTSo4EP1CwqHkRs5PCmnvyMQBRnuM8PHikjaPdv1qS3mFF8vniVkyvkePBVyJUq6",
  "key8": "4pDzFFEmEB6f1MfpYoNGt5QhcUZthBR2n8R9UD1nXAKcmtVGBiq1xnexQUH8s1w7hKCnQrie42MZEmNRzykX78rJ",
  "key9": "4hTn5YfEpGKctDpHuYLvK2Sjz34KvBmz8BEDZRiLsmU7h3YY4AU47TLhBecqAZNRNdBoxpxHNKwRDgH15h4dfVLv",
  "key10": "5GMZGMTqgtv6KE4qu3wZ8PSDRBoH83Tst7pJZb2EqeWEEpsbfrwXXiowYwTYSMMuZiFoabwKffBnpPoEgASfVRgf",
  "key11": "3t9aYCCrBy5hfjScPXjBakz8HK3vE5AAtKgdK3cYLw3CXB66JrfrgZHbx4LTGWpptuyAJcFghmoFKAb7ixsJDUV3",
  "key12": "21a8vLHGsQchtRKPSt7jmLnAiG2szhcdbBVPotd6t8cc3cqUUgP8XVZ7MnSKRZorvzd7eAMMy7Xur58EpchP1egK",
  "key13": "39zn2fhZn2sFZBCKZT7iod1BKxhUZ2ARbsNHGtAss4noFnk2wHqzWUAguUtQaQkVFnrrHgGQNaTmrS17QjQRt3jB",
  "key14": "4u5ZFVL6gLBowkG6BxzMAKTaAz2iKqF8VFs4q5NdgdF3ddfkLqXfXpWN7mpUwr1vcwd5aZqSYbLMkizN8XbGYiLf",
  "key15": "Ex9Ln1ygWYayT4nPqpkFjTExZY11rKTtZEXCF5Akx8YcesV5SaMzrqriXt67wmqf2P9bECxMpWVzCfWsLCCC6Vy",
  "key16": "5GtDLRHJ6PXwzEzjs1kh7k8dJH6hmdRERD8Tut2e8uG7bveuxVGKYRXQDhxMDBD129WjB2SFNebMuaMgytuLN6yq",
  "key17": "5kiu8zskuRF7bMt81hKCYDaQoovjnDiJVVVEwYtLMD5FbKfkaZK5HXHvNdRuNdPguSigtiZjUChY3oNvD7Qgaxjh",
  "key18": "4AgBwvhs9Gju2bohiM2rsfBJEvDG9Kx46XEAMJVSiVMpjxKipgdJnbFPzT6SbtzHjmfHwoSPHyWn29CsP6Df5mZh",
  "key19": "44uRKc9eahYTtAJMdXiV5Ledspqj4rNbzuJABvjsHjRuLvhTdGtUjLLM6m1USTPhqvEKNodcfFfpCsiS1p6auCCU",
  "key20": "zzLPymqLzQPEU1sLrhnECb2LzDmqHm7F2WCcFCkiBhmkjKwJ8kv6ysTQxUTPYhr2tUfMgQxUrJZ85DufgP4ksyu",
  "key21": "3JnAbuDDpbMRhWYLP175EmTEgyTphR4sQbLDWaeQuwAMKiXyG3vegk5d9UbCEQTmfFsVWzJ5cjxciU3EkLR2TSSX",
  "key22": "34MurwmaEmQixJetaUuPywfa9b6VeAQR4P4SqvYeBek1mZhs39W6zaMMj9JNuaZjX2nEhj8BMRDpdNNBw2aZgcmp",
  "key23": "3kHt4bVD39atHFewcXZZw2THQQkbcoWpx4E2NhhFpoEZgecRvevDupTfpXKKGo6skgX7ZDhRJ42VxJ6SmqypwW9X",
  "key24": "31SfCgt7inQx6BcKABMQgo9FB1g9baJBnP6y7QT1equWTA7PrEZV49UTXurtneigeMWBC4WnCPT7VfVsfquLYKz5",
  "key25": "5zgYBz4Fy7ShQLX7AhEp7cGBMAQrLjwrkXjQ1UDzseuLQSyWZKTX5cWQPtE7XN5fvjBd2nDZyyJt2e3NcePzZte3",
  "key26": "4BM9gTP7JjAsoUMC7DEMJnVAUdAyrcZPHvujzrvjoUbtCBJLVsd6bkSykvhK45EoU8Qg2KVdF3Ac5uLqP5Ebskas",
  "key27": "2rLz9DR5ZS2czAnhzBpgUbyVE9P2P8PvXVzw6d95vBQfEwgv5NfVTCBNp6A1n4qwMvm2TE5mFYEmaRrp5Vyffw3b",
  "key28": "sfskv6Zw9dhsNskzNVkLFXTBJKiMpQFVy5EXj1njiUTRKYj3NJQwT2ch9WZ8G7XyP84hHx8ae4zuR4yWJvrfU9R",
  "key29": "NpE7kqXdSrPzU5BWJi9w1C9FiPjq5Ci9B2yC1XGCinK9EfrSUV8AWWxgGqny4ahMB1SRL4AwUNo8JRnEmhW2jxa"
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
