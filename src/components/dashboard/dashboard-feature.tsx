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
    "4SDkGc9HVG76qJKKvDgCty5PtEk1euhssLz37L4K7hxxjT6BML5WQX1HMrrmtCgXhuCTfnRcXy4UvTVgMnXZWaDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WuL1QDqnq7LWvDMeauJW4CmdfH5ezsNXwT4kJvwZ11cw23Ctyq5vEFqXSfjEviyVMZbY2ig7kLzdhr8JwDiB73a",
  "key1": "Bt1GXrKQb6zcGsbQEWwxvptf6kTGBJ153toEojVYNEKJKLESoXcpo9dvTVCjCENHenRSYEXCBfjEiohoG5sfuRB",
  "key2": "59LoWD1SXK68vHYbhkMpARLdhpdykKW9vpVT8pq4GSZ6Fmf3xtpnzAf3KxVohw9uNCHSybidELVxqVWdYrKNoMF9",
  "key3": "3iJkcknkxDFben86aeEKARfRv9TL7MkXRSUpSJoB6sqcdNXXknD8EbqzgVmfL7n26oFcgT4pJmM4qR1DMJbURpD1",
  "key4": "4GcTgP6C5Bzcmr2ACkLtjA5jwSTU4icYB4Bj8cGTs58nrRpqvyRWcwi4FhcF6ixHyFJvbknoyTUAe9KgqeDnbkrY",
  "key5": "3R7Xiq7pC7EWJY9nFGwppnkyZHGeaKVJHvcsjfbfSNuvPa8AfLskPuVNVjAG92MB53u16oDW6sqZeWUaqeXifY55",
  "key6": "4yWaRVhKK85bMfH4x4QBWchW3fxggEsqZBhwFEyFpSnqBtBPQbW6Qvz1qVoDgEuvJkfAHWJcSh6SM3TtHpj8yEiU",
  "key7": "HfzWhixEkK3kCUrCcCXwBvDNa1nxcEZWU14x9T85EGHJjFQuULCwGygBzrm41db7f1NsWRRsQnJVN1dtSnfmBPe",
  "key8": "4Qr4mZawSLm9KGLnEXesroU6SJox119uwUtT3yGyi91vuc9DD49J2ZHjxvdWzbDR4Wj1v31PjL7zyuh6nZi4W1F5",
  "key9": "4RPa8bpg82RmTQXVvQcJdKwFui8QBVcwz7MkrU3Xaditexnpz3QorMAmzAQmKxiB7UgEACxCvTXnmnMSzdTd7d3i",
  "key10": "nTQxzH53vmmb9UKpx4pXLCHYxkZZ9S3oSwWP3yvAEjKc6HggWZPds7aonmdW2UdSPwoZCzmkq8V7tBpCjon5N1o",
  "key11": "59gXKnD89Wcctco7VkDPQQtDemkmyBbxDGqu99CHTGBmHa4mP8YnSh8sZSzpXnxkVHgZEzDdB5px2M2d4EVts1cv",
  "key12": "5msh3cstLSBMSsVrL5EAoJNJK9ELxZLC1LGG1ciUipDfcfvT1bG1DfpzwNMryU4ae12noH3mVDRvP14JngXfdQ5s",
  "key13": "63oBMadtxzyfM339nZE9tLZMxbgHGJPZNHYf26FL6eBMwi3qxaYthmYgygHiXZETenx53Gp2RQ3QHMJ3MFmk9zQf",
  "key14": "5XM3s3PhWg9AJuiA1FQKX4jAWwEWxe5Hw8RbfhzT7Fhau1mtvkVjvzRhDXYCLKjo4R86x1NtC7FNe2FRBn5b6jJ3",
  "key15": "3zS1BPSNv3Pm1H18yQXwZymSaNEdHiig9MugfHTZWa2MJjbMFruN6yZd11HKv4oBdWafQ4LVsnGnBmmhM1qTzGHf",
  "key16": "5PHqK1JJnELbkYmxDXcSGNxsnRH9xCSpAgPjWnGsMTCKxxiJSmUPCS2F7EG82HMZ3nSMbTykQ5DXaC6YgyxZAUmU",
  "key17": "3tdK9ZTKzjXD1A7oHk2SPVUYAwMMtwgb5o9CC42v4AYi53wySwTWbjjhrvooEkzuirMkrjtL5pBmE7rg7UuxHjVa",
  "key18": "4Q2JyhoXg9KvZ7rGMJa7evXydbXPVAVNhFRXtqvtkZZEEA91xWPYTHtwf56hfcFHrRpD71E23qaRQecbdnhmy8Jp",
  "key19": "3rqtjUiK2XuJLz1ZGwzd4Hh7TdEk8pZzDnsN9aAABpH1xJMyV1DC6XZ4Rf6G8ebPxfkJgjfdqosLTZfbh2LD9pp4",
  "key20": "3Fe51ktd8af5r5u6yg26LMbfWc8h2B7EEwKRWvDvXaShnunYmnjYdxbdZk8PRJ8eEbLVs54o2YqwBSZWYS3C3mkw",
  "key21": "aB82SSmJpdbEU4zLfFCmrs3DNXnGyjXrZNcGVyiu3hsgPJbd4uummjHNNNq1tamkmE5kg329tNLWQvKydGLDxJd",
  "key22": "5e8YCBm2h7QCdLBy9vtf3mBTZUF7Nz96FyPMyX3GMhkPYcupNSS52CXDAQk4H1GHvkzwgjuadb4bb8Fd6qGYYvvP",
  "key23": "2zagD8hVPGfNPtwbaG24HP332iLhAaqfm5gKeNNCqUmqcXLUkLaM1HvkgRPcscmvkb6JtUi8ikvNYFXu27xcA1so",
  "key24": "C3Vvvqp3z8dgmYFBdiHgwhTVvNCyPxZiTDZpf4B2xdtdaoZgiT6E4waA7YykhZnRNgMrH6kabj1vUVEe2z6H7bM",
  "key25": "4PNWvJEbsjSk6BLxaBy7BbJk4CYNnCQs7yL5m81jLJkQmQBLJzGNu1NkAJnXxLvoK3FHbA9sUt8QXQM5DhnsxCqV",
  "key26": "bzks6A3GZHmDmxKYNvwxQHqVbzB28Z6Eg48pdhSFr46zahz5kN2Nw4sUxauLTxoLghyqKH7AjhHyW1gAfjykrSj",
  "key27": "fPC5RZs7zeQ1YyrcUcQAy7tjdE596BQgubiPFGGgmty3hJWnEw8kSPDHp9fe36RrUvTt2AmdbdcFuaCh7esuWkU",
  "key28": "3nShpok5sTCQpirqjhtF5TaCXrTrDG4sd7XKnj68jNDCS14juWrzrLAPsxMsabkq821z3jEypPQmMiooNSxfHgZy",
  "key29": "3w674ff6t1VY6FCEsaTeHjKAtpKDYtKdpHtX9SrgroSy4oZiWYAFHtL6rE26GCbjECVhrWirKwTCumvb7Xi7Bv8r",
  "key30": "CCZ7PwwwQcRHUF1yyrMMFvcGqMnS7YksL3CtGKsunagcKUA6TZYqaSf1qQshkVKdERBhLz8jeH7YXBPLJr8hz76",
  "key31": "8PPwBHqSU1reDqr1RCdemxdJZvUpYxLvCmnArdcVeky87KrhxQPgVkaBjyxhUxYbjBxXnPAxzP2sTmVg5ZR4tUF",
  "key32": "2X8CVnao8ChjPGzfpEU14SBdXZdpu362v26oH9zAo7qodebVrjREkRdAkyuB43dzSQyKdJJDZs34zP8HCsmS3KD4",
  "key33": "5kBYm5Vbj691PcCbGB6FosPdHSsXCesoucSJ4wbe5Lw8eFEwa4UtJciZB3Y7ApdMUef14vdgnLbjNggpT1QsiPU3",
  "key34": "fK47A7xadXSf81H2fvwmpniBti1gn62RfaPN7hBLwJ4G2AB3oDutxauckQVPWNwgcrGTAMDvndTndHUdy2ptUcz",
  "key35": "2Tojxb88F5MMQLEKdHuydSWA5EfF1AFjmhqzpNtqcGvVQ8DCBmFCKCaPZpEmNCH41MAUgY2vdHEqxhckMZ3Z2DEk",
  "key36": "2wgGqatS7CR9yYMuYap9wkxeLCh22TASWFUHWLZd53Rxek3CYU1oDDsGA3FUuwjw6VcWTcLm1sv9hp9Xv6PSQUnt"
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
