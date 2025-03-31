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
    "2gunV2j1EFRVnCeeBx21JEYU2L5vc3VUadDUhBpkCeENnJxUZG2t6EPT1Dxy5cBXmfacRLHHCQUf8h4zRK1hX75Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwUbDc3r3KgXiYouS183ZfQTEqUjvXtHMHMxU83xEhtj2RQdxZ8TirZtHQ3fQnJN3bzyzh7aLrkuLaNFXbpiyBZ",
  "key1": "4BZEaecZQwgUnf4vFi57xvtwQK9yyUDgFBymnZEN99dz6W1sTfAYgrqiQTL7xt3nZmdeLojUbA1t51x7XcK5i7Tq",
  "key2": "2yFLKgT7Lr1J27XQPkxyAYTL2tHMqsYquL5J9eyfYV2FHiuTZaQuUqKWfJJWyJzrWfm6S5NnVjnoKvfYXqLZNkyx",
  "key3": "4LBrSyfwhgMBdnsu4XYrrihwhi3G1nPQRYR57zvkyoQnB5wYi2JbFX85kzDGk3TTqXRpWdpBTV9x7NVAGnWbw8Wa",
  "key4": "2tt4KUHtDWgJVRF2jfKX2GnYT2piB7uwMXbgnVGNs3Kc7swuGmhqyHTKkG14xuBCYUMDyh6Egmkpup89SKATWs8K",
  "key5": "CZ8iLkYRmj2MCFueZug54pAQ1ysWaNUNrLhzqHTL29DA1MdMN1v2HigUTEv6Agij5RmjgwkWdEd7Rx8NV7uBwMm",
  "key6": "SgjpYH4rGL5MigKYLFNye7SJdKogL5grmYeJETnjg8CfDAEcgf1vqK4jmsggfR3i6z1yLhE2Z7kqu7KKG42ZVe9",
  "key7": "66TCbH3K5P8UdarYTZj5c1Y9t37iisCwdFKUKn7b7R4YamRuvUQxM6t2BWKL6S8gjGFrZ5qX6S9wMCitZus1YU6s",
  "key8": "5JAyoKS9APx9YYKcRafrmLnCQMwC5qLKYvnc2FdHX3ENYffLcRRbxxoEveN8mDc2Z14eiHK4tmmY59aTXhz8uLe4",
  "key9": "5VRgmsbLbsTrMqr9AFV3Py5anFrwh8NJURAWdhe3r6erxjcqRQSbHo5eu1wApTA4shzU3DsPQFDZNqwRudtgSH44",
  "key10": "4YyGcMpcWAyz4BJihdjBR79XMe5nHZbJsbMgqNTuH3Qgq79DhmLPguaD8BMYVcanNoJaZuvd41po83UQUKHxewmD",
  "key11": "4Dv5LpWCexTyTj6rUNPaCbzj7wiy4L1QTdiwjDJx1g3RqdbUbPJ99bZa6doogmJ34f4t7py8tsSBf3bbqfiD8pSN",
  "key12": "zu79Ey4uP11iZvNRfeVZMTTjaHANx5smMsu3bg4zLD6zXt7KVdLEqjgSaTrJbMyBTUKeQ5zQz1GdyrnekEFkW1h",
  "key13": "2PhYovYoxK6jXrPuPAgyjkgcjfRHoRp7DtSmpuXMuYZV5r4PAqB5AGRfF6RjjSsTnAGtGc4QYdmP63Np8eiGjVTC",
  "key14": "2LybhpUov8Ttj9RoSPcS8hca6pgHGu479HmJg1PV8o5BaJkY9GLJNWnvDUYm5Pbcz5VjFEVxr1YpFZ8ytvMLobhX",
  "key15": "26CnEd5yBEx35UtFLjGvMuEvHkdpi83MMnsgYADjocVjo2Se1KztssveSMtoNPnavhJ6gVPvp1hBpwFU2oQnnERr",
  "key16": "52gxhQPp9hTg5Y4D8tgHsnGtZ49nybnEcRjU7EJgA3hACwuaUfxz9z5tGPD4SyfQP9kA7Te6Liq7ZbpTxwKPaRLu",
  "key17": "4hMyhJ1KSmmZUvFKgKLjwok1azmYtcz7LBnyNSGta2iVXWA6ZmaPuaNeKwwLyevikjYWbxA2BbC4Wb9dBHMv5A8",
  "key18": "4m71rhF6XqYDqVt4B6jUNQdJZPqhGTMcGd7TmTBf1Xm6eES4WVZSXb9k974EFXZnhUHArpC6hAscEchS2GT3fhCy",
  "key19": "4AquUjssMc5fRipsrPV3Bj3Vwe8rawepMPtwy8nzz7udKtURbTvQbp4i6bkxM4M85v83z5bZxhV2uNeR58ZbcP2Z",
  "key20": "2YEdvDmf6Nx4NmC8o4evph4hdHTJ91UCQ81ac3LWi5DpMPvVBG578TYBA1YCdjzCFAKiV1MP4WugrNW2bt8Vza9V",
  "key21": "in2qgVcLT9K71Jsgme5JSuWzDvzK1kit5gK1tFJ3bLg7qsSt88HvhjsvSZmkf6av5FVDgS6PHsKUqzRUPnAWcfg",
  "key22": "4m3AeYCVFuXiBoQSc6BLNTWQG2szBavKkXRWi5VHtd5QMuWu8uAxAnTPyR3PCDoXXSi2h112W1Pwq96jZ56gkhHc",
  "key23": "63V3SEE2vXFCTaAdYxDdh6MMNvSYDjRPPVXnD3gYchhd3CqNgdbNcHayAqNArihkcPfKcniod1xnS7Cnjmye8sfK",
  "key24": "fSxxD2UwQAN4Raz6GiKii2asashishASJbvysFBQ5WZr39Q1dLRoqkKpktrwMLVVyzw9TyrPrnFPPjAf248jbz8",
  "key25": "5xoFMUs1HogJYnZzKuzVLmHmqeDY1mymFnXdWxgVXkquvYQyYihqbYWfnp8dFTrJhgtNF7Ya1t9QNxfv5nVg1Jp1",
  "key26": "3bMhZDzr8M7ed7mtq9JNzi2P5vEoAbPravFZwj9wJSGuRLypdwNhDnfLcGPEwEAZEHQK3hZHJVzXH4tfKneUhvZG",
  "key27": "4grED6sn7rZVeGxAXPkeqwZ2khKSm9948ZwSkNvhFrbXdQ5wJ5ifGdXkMiKQXcgMqSG5nC6KGBSXmMd3PiK2CbgL",
  "key28": "618sDM2QVhvUmnBu3y3JsGXQZAKg2KwS3pfnKrJ6iQAZvjqGrffHQyiaPf4mrNWHwEzvmRbua6N8u8KyiKDyvhyW",
  "key29": "3h8SPtGCMFFkt2oW3CWRYAuVjUFGR2hStNUaV6bcXVaTxPddTqPatCj7LJ4TRxmcNheWHuaVn6PADRQs85zLSuVu",
  "key30": "5eKjjabFQqYLAmmies7yox5xLkueiN84jDrh1JFCrAnzYrhhBaozG5zNcjtayyLR8a7m6dQHzCFPyL5KGzcm6kX2",
  "key31": "5K5oGygvESaiUyinUSS1qdTAyK1CUwrnLW6V1eNoAmf5BA9CM2PJ85FtAk5YEk6Fw4XF1xkVB4UEQw9WvGdPs3qa",
  "key32": "4x1DQNR7X5Bvoo5LB59RMPhrA6BnozJLLA2TUJo9mFNEUnUmJvzdh743mDGQ3JXyo1WVBDhCRDkw4Ta1zoDMPEmw",
  "key33": "ze51qt1842gYh3YEFkStxCGJZCYFFPQvGf14z3z6MRvH81XoD2PZk1rDZ3YRfYCZ1KDCRs5SxNbZE5UQHLTzVoL",
  "key34": "3fXGVi6NSTxvvcEa2CEavJj2ejrJYcr3YcxdWpb262KPoSweLXEfNQxZZMoQx8A2TgkHdXux5gLfGc7y6EEXPMnD",
  "key35": "5s82xJTRj9YdJqfst78e6AgFopzoHs5Td2EBjEGtKkXrMBNBAXNfpYNKHL3iRjySZVEF1A7hDc9dYsSx4cw745fy",
  "key36": "k3gc4rvUELTKVqtVEnjk1veRAgjhDWCdCdAhhorL9Hn5GvRy9SigfcqAzAoouBgjyBiqqBa9i8FXx8SzahkeCxH",
  "key37": "4fGJq4SfgjjcE4d5umoUZJ2ck2paQ1zZBUZzvtcqL2YCvNHw9rNjMxXRNGRVcCs5Tsy4bXDDYV114QHZqQrnvYgi"
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
