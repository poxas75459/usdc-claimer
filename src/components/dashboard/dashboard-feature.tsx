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
    "55JcwKEDyrjwbHAcmRpGAVnfnW6JNroEPWJCEMB4S7gMzKAvWGWgJxtRtqj7bkKfKZjAqbtst4ZSpzuqzx45tq7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgHwEwehZTyXY5L6hVkoAL8qJHmoF6PJVHyv9p1kT7hmthC8dc4MqCKE4LzPZEf5crTWJJ84GC84pGRbzLBZpDK",
  "key1": "5t7omaMGdYrjx4DLBQGmpdQkGowU6Xyg7YtoyNr4JqW7WXSjbJmMUJxskbzCfuTv2S3zZfPwGmhiSonfuWb9mTLW",
  "key2": "4hTcx5eB2zyeYAAj9na2feMSNFv6RyiW8amtYVGhpPzS9eM5P4cFmSbjUrVV4rQCSKNhWdcFJL5Fezj9aGeUFkd5",
  "key3": "4DvY3Ch5Ug97a5WQGSeWzHKX8xzCRRaZfRwTeF47GvtTn8MEqPbQyDKmgev68kGrmi7G92DkR2QGBhi5LBX236P5",
  "key4": "zyXQPHv3FxgSSyikLXhNqc7m5bWJ5KrWVfFeJ3jLj6QhAcNWfP8Q38hyLBec5MDLeBiWXWBgoZwrDaYedSXiSQz",
  "key5": "2NpPkfugSFGEi1vkCQURNAoDhKzMbsosRtzBjSmWK7RZdYiocNxJdUysTuddeVkUXPyPvrcXqtgPQXUFJ4GhRog5",
  "key6": "VrmRTvVoEdTcVP7N414FdkF1SdbMF6YEQoE2Dgi6qiejk3nRVG7vvTiuuxs8SdfFGhkDSjLWKSADxwH51bov2JT",
  "key7": "5Jhe4Wr2S79469UjrgoSN1nGU3XFfHdpfzKGJYoqy9YjakNna5yxSUhcHrtTQ9vRRMijyfp6SaHVBDPpTUJx6Af4",
  "key8": "5cyJw8SQUjCUJnMAZ1G8R2hX28nW2WfKrXZG6vfruHy2AFdGeQtQaWYpsgPANupMZBv5xpRoyQBQzskuGgseKiqP",
  "key9": "HEv66ENnTGnYESUnXXbSfJ5E7KfAHgx7Sw7vZNiaCCjcBkccbr2aGGQSv6wLz9nsTPRYFA2nWBixujtzeT3uS4h",
  "key10": "ptJ3oiLhjAMcBpZvKZ8F5Qce9Thk3oHB6giGXcLzdbhiGN6BtwaJ8KMFvyi52kKN8KhCZJjnJggiK5urGfn6sVH",
  "key11": "4mvwwN16VxperttpqjpsSusMNjZ2vhvBsPqLmmmNUjnwYfuwFqtk3qyKRrNKckQbjAyRp1kYS3RJqoCkzg8fS56W",
  "key12": "4VDZw7ZbsTFjzyPDhr61ZPNwKGqTeRNP78kgVBisabKwKzRHvzaBDPGMhGwnAhLNJaZz3DaWQV7ih6hZ5bYSjCYX",
  "key13": "48QPAtC9WVX7k3mULD23ope1FPxkWDuKnHxxoSFAiFodDxEhXYuUjS3dGe47HEFy1heWhRGhfFpsiFfyc4ntyGYK",
  "key14": "2xtjQ1D8Sn5p9gV2SVYmWVcsUDaJhM6UGrCv43kM48MLNEW4PmrW4DoGD2rsWY5VaN2SWCdm7wBQbgryYUeq5fBz",
  "key15": "BFA8Rn38FXq94f71DN9u3wnZVmf1spdz7T7Y6u4pbKsTBz2b6CjKKfw9TULUPuGhEqnpUPcYdivTfMquGhD7guF",
  "key16": "xaoGJC1D56jvMmVbbBQTNqZg7ub7eDn4GtwKbgPqhRSJFYRdVyk3QJgoahS6KE2omVNDXhTiQc5yaZ8XXMVNegf",
  "key17": "4t1Fb75dQfnniE5szB73V5HPUNXLoJrTPqp96kpwmU96zo7XJDqjUzKdhjX1PypemzxPMkueG1pkeNKpKz8apK9f",
  "key18": "31HEG25hgE7hZb8bARt9tqLkT6dW46jofTXKscvs3EvSETqB8e9RHvdr7LJSuuCfNxF295aELgQDH6A1YCJt4G43",
  "key19": "3TA9GBZbvUQEV8jSBB55KWEFnXByXXAcmp9NyZ2Y44YVYWJRYXdvvQK9Q8Z2ccmD8aGFQ2iQi8ij6h3cdg3qT7Nv",
  "key20": "kCmv3cUskHVfXzB8p1Ebk1saxvt3Z48QwoQukUTFaCe7fVqxheerTUzHLsYYbq5vDzZSSvVF25hanbYzHUwWotA",
  "key21": "eW2KDtMfWrHhpv4YMfuFrRh3c5YNPyU1gMTqdfb4aHic7AS5fpLCqn3QUF1RjcY7tn6fgoe41mghQmrFV9vrbTw",
  "key22": "54WDukmLkBpmoXK2jUhkbL884LruYuSjKKaU42sxxKo7wq5qjJLxCQkBBG4fZiMrRdPsHSmA7jq3zxEbJ6BwAgLG",
  "key23": "62R3HZ9cj77V2ynYG66qXE92HMLsEL9J2ZZjW4LWtxUnYJQE7H87vzwZV5DEUhn15JFh9NfXUXqA5hD2vV26ay19",
  "key24": "2Gm4nRoQMxZK7grH36yrc1XVMsYW2EwgHY3Wjf3tdjPv7eiHi9gg1aKzUhk119zSttNETbj8iPUZbRmdc3WCMKTm",
  "key25": "2pVpDVYVjgoDjamxdWc7iUvVEpJjXty6MJ4241JHfJTNzjvtF87C94GATszbg1wqnndakEvVCNsntqgZMqzYHoST",
  "key26": "bvHKAkrEV9FxF2EKJdtytnYXgjZLXstzM1KXVVUBkY5yeueBV4FWR27EUAt9F7xFPFG4XLGgnowVxy8EadGiAXQ",
  "key27": "2Sh5U3tggMabV6ycFWLi7xcWpNQ7SXuMbivcHh6FaJ3XaiCMvGnSjZutexrWBuLQ2n4ZbttQrhPTWjEKPB17RScE",
  "key28": "2vUwxcVcS66xMBtzKkSKujCBc5Jg6N9UPKDeUgg4joA5aNs2qD1K9cNPeAPJpyhXo7FbK3Phqyr4DGhA9EZ4YZVC",
  "key29": "3bfczU35cNiSHTMW8wRJsGD8nh2ZuozWe8h3Hwfeyd4pj4D3m3VVYtpbcwsy88HddRVKqxDjRjt1HrEpNFYrBkPZ",
  "key30": "3PzwAe8tm6C1ZEKcXs7Dvo7tdtSvXoLzUydTLcv2VVgWAbtNE3umLEPjG1VB5R8rXNZ4J2TfxKp7Vo76vQLFXyV6",
  "key31": "2NCAFMcNcbH4jk5BtA4kPgYiiXuyC4kjPBnKJ7Sn9jRNGpPPftuAhJZGUWBdPbc48jY7skAftTW7nkU3Qb3JNXaM",
  "key32": "5jSk8XTwTAFqK6nAeDPWUPRB7eW1vZNZx9CQFZtF7gtr67MxFP628eCTsKka2SFXzjKxqdA9odmEYfduypQYvyZR",
  "key33": "2cASguShKJUJ1fg5mu31zMUJUCf17LDs1zvgX9NbgWtSpG1phs1VYYiAPC6E5PKLtv1tK6iECnqfg2ZMG4McNE4A",
  "key34": "4tq7DoXFKwoZkDwepfzSY4j4n3njhTPm5wUCV4XVr51A17TfdpbCHyPbyqHyNpgTCkAGvhV5Yx4rqe2CZeBZn7k5",
  "key35": "5oh2nYt1NMCAA5Ncbxfni1UEaSNe2VEgXQcV4aZCb6d9pW8DJHWcmLHn91EjsQbTHa167eNT6BaoQ5xtoyJ6Fwrg",
  "key36": "48H68yL6wsDEPwfgMumLEYRSTnYrZw4VpadZfuxA8UuQDLqcHFEu9rkeUNGSb5cRhGKDXYyDiXKgtQa96QwugTnd",
  "key37": "54QjnYsDvyGRvQ1bcLioYo4bebmBvZzyV8nwYjQRpa9EtYkVWn5nPXwCghn9AHErFGetbCtYLKGY9m2j9jUod5jw"
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
