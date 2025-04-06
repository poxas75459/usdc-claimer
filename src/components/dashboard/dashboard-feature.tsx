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
    "3jg272HWkX8kLPncCLhejnvzTKeduRsYqthJXMK3votHPLnmpW4RwAeiXLnLKek1x7PUXtEZuhbsjWBRqoKgD6eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxyZDzHJKirUfkgCLtnrKnjhqyeZztY4E8mbwL47oJXdENewcrXc2qU2ZMV8uP7vQJGvbXd2dqiijDtRUWseU4Z",
  "key1": "5bS99iukifofASSkL6wocbB1uKAKTBhWhAGma4RfDBsTzPXj1HRnPmDC4GfjryMQCAzDV6vHs6S67uBAxUAM9zUw",
  "key2": "2QG43rF11EvMzXJz8PQbrXx2b55XrZUJ8Qi55z3jNHx5M5Zqvei1Mg2TimsPcAjMByc5PKrk2myJ24c9EEfg7BQN",
  "key3": "268jU7nny9qGpe1XfCFQeMio8v56ta9RtzgRiJDdTEk9CCmSDGmfQ5gDP4sZCFA6yrSndmds4x3FBUY1ZtYRypH4",
  "key4": "5v5sky5BwCPCQ3fWC8xDBhhqmKVumgEfWbA5CAVZu17pLoaR8866urDQ4Z9rGi2VxfpK6EDhif8F2mqHmE33xDuK",
  "key5": "5LpHg9nqFAcqLPznMiKwEmZNLKWnCEoH7miMHLYZkxSga2K8wcwrmEasXyFuLEu5ZDtujW86RwkuBQ8Whkgk4CM9",
  "key6": "2cwBsoEsTy6JLQJHKpo2bz3ffWkguNuXMFVjBb5SwaBPgCjuqinU4JXLRRMrB7hm7p6RpKVtYFcjZjQJnPdzS1yz",
  "key7": "5QGTyj2pmCgi6C81uC5GLFwjLK6QEEWngvCrqMV7F1jfiULxPrqL6fNX2HSSRaMeKUgCcMwyC3FJ6Z5XBZPUrMsz",
  "key8": "4kN5pAwcqhvuskWFqhvA4yL4Z24GKvwTtx6MVWP6WUhXZ85hz88zPeCvEcDLGaEwuophEM9Lkg2Smoh2RP27Wj2A",
  "key9": "4XMPnucwQpFKWxycxHEfzvHDjBRKhZT5p4JbzGPCiXc8zU4oq7vS7WMsMzX1NZgpmTm6g1nbrw9qnvPdFdU92R3g",
  "key10": "63fvfSWVZFcBbGchtZ2j6aqtstfuer1J3C6rbfxWeLgZcB7kAfXWVmq3U3xcK522T2xY7WwdcX5KJc4MJrCMwDA5",
  "key11": "esggDmQ32skFbM8Bwc26BpePercgjWQt576EeP66iCpH2wHfFLE8KhPXdp5MP4Hpp5ozs7aSBQi6reLZvHWZEBj",
  "key12": "4LWpsbAse69zApmCgknNVc4F4iNgt4DDkws1DMWjA7EyZxsAwh2FWCcqpeub1xZYeFU9feM8iDSYR6GhLEjsYjUf",
  "key13": "2zqnjuHa9BdxCb16LdphyGV5rdHYxPHhN3zPBzeEnCfs33fQY9FqJmYnhVYk3mTPDmc5GyyDNZoRKaw766jJFZQs",
  "key14": "5bVJMm3h9dsMBCZs95gzwqcLpWw7ETEAejeYWn4K79oeWKyapBKnHtRENRxDYigLdSigfdGsgc9w7Kta8v3BsUPX",
  "key15": "NRkCrsVwRFuuBqPb1Lh2bNCxNnYWwThk3n14cmRRyEeSjeD88yUfrj9tTZT6jm7LVRgjt7t1AZtZC1FHvKEfBme",
  "key16": "5rDBC7Gi19q8MWX6RQfDhE5cYdN45x4fGZg9WMt2LD14W9Pcd6CzRcK8nDPDhfzTp6YxYZLFfquj5JHtRuR1JrDE",
  "key17": "4WqQgRPomosRaB3NrR79wGsaBXCYKj5QrV6ghEAjf9b6tvyQjnQYerxg5WV6LGqz6yP2A3xH6381NGEuydBSCNyL",
  "key18": "mp9mbpTtiKvMagZNtSxUPMP8Aj3gCDk47poGbhwHNUXhV1iJTUspUwVAXWhckTr1u4gvdkMZsjS7xDeZc1TUvFx",
  "key19": "3CJFgxyozogKm992Qak6GMMtRurqMeSMHGUNauoALbKAVYUnfmV4w2JZ74dQLwZkYtT7z5megbAHr6tAVtoNTmst",
  "key20": "WtJxwCA3RLQDRwYL5u5HoxHZPxPAdZTxTbVfjuHogdTWViiibF2cRffJnLBU8NQuiYoDLTxdM4xCmMSef8higo8",
  "key21": "5Pydc34VHpxuocM13hcGUgpmLDWr8dWXPKNS5hstNa8GDPUv1nyGN32zze992gJMs3EoxdGqS4XZnSwArpc5NNcj",
  "key22": "288A8YxWyZNAD7JGovCo3aeMadoh1e34xwmc2cFhbhzDwbcQmWyTYtYQoi2EpGWyXvmGVwaXycjND1n4uUwDVeBt",
  "key23": "3CjVhBwuk95qwvJo9t74UpSV8JLLpF7dPVdNPhYg5TQqHTZNX62h7h1hL7xUTzuwE782F5oMuboerhPi3cdFJ7D4",
  "key24": "5zShM7TmgFiH5HQWzCDFQkrdts5XwERzVNrTs1wfKjVNMR7Ur8UGHnNjHs8j6X2ZdGYPU4jLxwPuepiUSNR35unE",
  "key25": "3nSYhtX2JQavEMq2Sv33BGGiUcEgJe7dyFfmNpovTXHuJCsJNybkCgTXhsnfpuAsEAXCKRTypQeijXM7Cc2i2CeT",
  "key26": "24Qo2BPtpKkPT5xXt5qDRfank6HqFebaxDH8VjajddgBgYAbEUHWmgeAPvoyR4eMZt6AkFJ7MhbcuR8rV557Tp4x",
  "key27": "5cxbZSrumUcqs1TTkStAPmbKZ6wRHZthKxzKRVkzHhoeK5F4ucNpLD4giu5Nx9ezMSnG8x667goy7Ti3quVBiNob",
  "key28": "2ZnY2iYPQL7L68rSL3jC5cqWfU7SGugTU2NLPR9MjQAFyf3RdWm75Bw4nhuqX6iCG1miQZpkMRbg8ezgs8YXe6YZ",
  "key29": "2A7dVB5FJGSrapGTrB7ypzWhkywML6Uq5k4xyenw3VA2VNPiJjKnRkCXxZcuRt9y4izxr9nRZavvbe9VuPvRUKay",
  "key30": "5nAJGrUekDzQKdR9RHKAv2LibwrvJUfDkbHieGA5E6Yteke4Wx8kXKtkjw9fiFqK5eBx67gu9qyQto9fpUmEnwcp",
  "key31": "3reDnAZYUUYmDDw28ysgUpBJMFR9h2ewJJexyc5zPAxTBxQR1m9k2Kxk5ije6UW52Uta24gaKZhPHqRgrnsherNq",
  "key32": "29bVT6VELh6sJBMfgppdwAg2N55q5kUVX53gWfnwxCGMHiWqheuGT7tbXciGFtHECoGrSppjYGsmyC2JUXdaEnZT",
  "key33": "pQPcgmUkJccFf5j6YpHrcsfnD2EjeFo3k6N1NSFDPECpySze13pizYzvfrrVNdmrURNA1GtcQvAdiVptpYd2S8p",
  "key34": "3yZ2Gwuvvvq4WNwARRDtHQbs4U5HnJ5nZDTU7fGqrBwZcTtToD2dK4fEjdWsWWBCaWMUz925DCS3foxqnDtcUxNZ",
  "key35": "Cq8s7QkpVkizAVu4u8e58KqjXNXeMGtYcBbh3q5tyRAQcPPDZ7oduTnwoq291ZWCcvKTvZqDxctNM3oK9q5omo4"
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
