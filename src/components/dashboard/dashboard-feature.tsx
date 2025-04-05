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
    "RdmH8TFMFFRW1Pr4NYDTsTR4hr2hGb5RxDtfPiemEdckKawUrivnWM9oQcoSaPgxsETVyD4UsFnme3uc2WPB517"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebLswc3bRSF1QXMatEfL959ujaStkvBnSWk4ZmRxLyE3b7whm3YJgixhJA18kusrNq6FhdU7czJvhtv6NxQfdQF",
  "key1": "GWt7aRHDrtg6UUPN68bvH2HMFPvaHjh4ydyss5AQ9rDwi3EUzdC2ZkLecbsRFDBYbqk9Hp68wAKLNqarDvTWcwQ",
  "key2": "3CJiPLRH5GeRqkDgH7uGvDvyFBGVNZv6HiReSgojDidFFQzKSteR9t5efaNWVRRDLxweMhvraMiA7y4SDpfQymHQ",
  "key3": "5jwhcaXhBtomhZEBvQfNLs6ZdvtGXRME9jM7ZqNh4ryovJc1VhBMKG8GrUjV1F29UGpoeys1u6j5Gd4yrHw8zppX",
  "key4": "4idXPTa8XHc75KuhkFUS9AkQRzupAtgtNv2crszRXE8jyKoZ6RTw5X1ZyG63Hhsakqoufs6CNBKUkn5dTSjEC2BX",
  "key5": "2WT4k79NeUUhpMRQk3MLAZExtwWoibPSmPvsBeQworeTk9ohLof5mdEHQtPua6dBvtpqKpuLeUqmEB1S4NhpQvYt",
  "key6": "4iGHLzBxoJSqMftysgTJLeafsLyxhgB3zWYVFam3ewb5ZZXYzJ6zTBN5MWnbfMYLyJnmDXUBDVe192oAECYp57hV",
  "key7": "5N3abXzPoNJCNoN8adTY2fc9R21B65RPpQSDyJxoafi684kLXVmKtf3K1Yt12oWA6EwPRc6j5jCS5M9tWjHKiQF8",
  "key8": "4bKSvTLkW4hHF84RrsSrb5vbq5w8HcbnhKPwNRx8EGmM5LS46wHCGvLAYFJPJez59wEJSwHRYjxyd8biyQDetMP1",
  "key9": "4MTJAa6kBuTNh8ZxS3ba4V8RQa123XfJF5X1C3E4Pmgjea3FeneubDkUEywUGKrw51kWpxo8HFW7cfY5cb1LWn7v",
  "key10": "5PLWWJupeKZpQ5aXM79i1QPUx4iwwNMgLAM4AuyjQJidEAFL6bjRsUzoMHcr3obEuUvFGSLzFhj3e5i665jkCk37",
  "key11": "3LMongWf8fvCS1tabc6hqMadZuEQeDAnWfFJhGXKUb27HqJfVz2E33Q3vHfSv8pMLPRrXBYJFVEq1WpJpeqk68x9",
  "key12": "4EAMsra2f625eBxxm4oWGWKa2ZFLXBD8PPewJiN2XMEjH21fWsMPkWqcePEoTPfdwM6t5gdJz4vx8ToqvLvqw4MT",
  "key13": "yFR316vVPeDfrykzHbrn1Uex2LBNoCq7K5S8igDxFeonZtS6NuhPo43C7CyT9XYapgewHQa6DyS7TXBvCkU3XGh",
  "key14": "46CRMJzA7TZqcdMcv8a33SWy5fvmzR8VboRvjQtDRipzpQMD4kCNXF6tb1s9RpJ56dxD3vNiZPnFPCnaHAMN76WT",
  "key15": "5ihH2kLw3g1K16NuGKkETBJ1y9DjVMNnkXdLLT2voxSJPdGFRZWV17WJhG5YaLjTEdUgmeZqgGs87T12t5FEipR3",
  "key16": "5zAEZsRH8iTvm8a2w8oHP5vrJMXn8ebwJbqLgiPzp1rrfXXUyR2NzwstDoVECjfJJDF9DtFU8kaNY1FaBhVNhk2q",
  "key17": "5Tks5XXvpiVxWtKQKucJLiiNy5YGH71qQhBJX2UgS5KTWF1F9h9D4sYLTVPGRvxqifekvRQjvWNVgBy7ZhqXts9W",
  "key18": "4MHP82uBRi9SomqrwirnsoF6Z62uD7s7kfNXgJXcUhjYP9bfETyCW3BpbMxQHdMm4iMLpwoK51g1PEg9GZAP5zdr",
  "key19": "5uBqerqu45y7KyTAi4DD2KuJ5NG4jDRrhnZUc5bVsuwhL2rJ7NeiiAPTxsFdpWd74vhET5Z3jF39etkcidwWGygB",
  "key20": "2PjaYcz3JdwEVUFaB6fKuwU3GXm7xJs4uZLh37QVF7QrAFZLhy8jJk9sjTavS1KtiYAZtEM5j7ZnimWTdbQW54hy",
  "key21": "JzU8njEX9iWsgHfhrkof4is1k6S3zu3QTAHDEj9tPr8v7GcW7YbRUJvE58ErR9gJEZQZfqC2499V6ANZTJe996y",
  "key22": "5FGmDR94gkVgW6Ewnu3HjYBKnvPTg1Mq5DkaC3ERh5ioPNv5NiTMi7sRzVhPuBJS9FECVEU6uHerqC1B3rEnhbb1",
  "key23": "3NNZzCsqLh6eXTfNFFsKzyWkGtKQcNkyoUkqvCkoJCFqN3wvdDR3LBsbbjxrYJ9jyaBmxWvDEDCid24Ro4YqFUJF",
  "key24": "5c9ZrRs1deeux2wMiNQgqueRNWyK6rwLfaftz3SQ5LxYGRyCPuexRvFjZFNYY5JQDSkDy8X3QjUdELD1JpKvvmd8",
  "key25": "2fJSXZhiku1GAsBRCn3zWbvuTtfcowkzWdTednD3dcjLuXkMpEbPQg1kSYZj3aaRpRtjM8CFKncgcz5SP1YzaDzw",
  "key26": "2Dqo7nMdZD2ctCqS65chLdqSvsMJbNYkYGFwgX2ikSpDEFMPGaCSf24y5vquSVEevVSeRfiza86usiy5En74Yc7i",
  "key27": "5ZUjHBRN6EjRcTLYJ3Rt581LdCqEL99uD1SfpkyawqWRo3MvG7tzE6hNUYoadvpitS2B9xk9HDGBjAV7QyF2QnX4",
  "key28": "487SE4RChBGdZKAU9SdDFqxQMy3zMSraDPojTige4tWKZ3ZKWHNsGFxNF1gKoECKMincGnFqBJbpSfoLRTzbXCem",
  "key29": "2EKHai9vFSQkWfK3bQMdDGuPuzewRbHrBzGnb9d7PBLXaKMU8ZpVrwZQ7bbu4b4LdAnAj8B4X5qyTwBNyC5udJgx",
  "key30": "2s9dBdUR4njhF8hbFjn1xxWhErDbW8NeBRhfQ4cstcDzWnuqrjMawB8hY3ga3xr6YZyYc2ff89jKNLybrx8z5rKG",
  "key31": "3y3ukxQWKnFpZuxvJwjf95RPec6vCVrucEnS57yiP3vPXyeL2VYUDnZNuho8EH32rbGfyQ6h6FYLKMFjDKTmJWq6"
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
