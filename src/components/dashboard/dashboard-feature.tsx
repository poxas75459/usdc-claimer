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
    "38ufgWnmAmXK97ZmgyNPmCvVifV7cjC9F4JFnxNKHpVWhJoxfQ392JbhXT1F81kvMWXpM2f4UPteVV5KTecEMrpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hofxx5rjrzgXuRURwsHiUEjriF9gFm6Dee3T6BSceY8cnUUQXC6EiUS8qnQTHcMGqYFucE3vd6GeLcPTRT389re",
  "key1": "5M4Xo5yyzF8qnRnbbTs4dZywMpkuP6w9wPPdp7rMXYu571uonhyHLcpS6HAYq8ikKLWma3PQd9JXnVoPmSX4WkmA",
  "key2": "43DNAZj76oUa2DxypCaw4EdGpjaZ4BpMkrdVmShW9SYEwskuBXRWhcm6oMB2jFogp44s7Ts1FTnL61JbMbBvoNNS",
  "key3": "3EQyRhv9QpeNuga2ou8KWB8ZTeCfrGgEbttcAw1bQ2ug264qfuDD8vUaRciMuedpteBdQHBXbLgYwD4noz31pMjo",
  "key4": "3NdTMjWtUMrUb8GBpcR7cZ53HYW26WzqtWKBDnPUikWiJQfudCpCUxvZ4X9ZjwBvxW9WvdubQj87MS3Qepd22xrr",
  "key5": "D3Wq9yieJK5nty6SGWYvRW8RHGNSodkyARXa6z62hxYpnjiC7cUMxfiTb4JMU73Y9Q37DmtsPeHa2hDJJc1MyhU",
  "key6": "Nv6pKdaXh864p8tqcYfLBvDbtTqn83asF7rhFRK7eXnR7nYS5WHN6qK4wi4uftPxW7n6a71y8byrMouMwNku2WY",
  "key7": "2PLVSzVBQpAHDJfKaiAnS9a4dFe5rQwCfpyG77SgzbQXcuSqxeBxDCvUCdHGkneYXYkxvUvpnrDYSVD1ijTXxPgj",
  "key8": "2LZHfvEhWdJgngkKTMj8ZrbCYNqK6fgAEEzwAHAZjNJuwkuvCH5e9G9uri1vNruejmWR6bpBnv9aQFFcme8pedfN",
  "key9": "47ZGtE7FYYk8HUxd5debQvtfPs8rf8NiZkRFAfw2yyFx5PVKbJwUoqr9FVGkVA53aeVz5PDPyv1ET5X99eGNA64a",
  "key10": "3uMcbXQp831RK9C92GPWPEobpZZoTYSrWtsqu7qQrP6D6efAFRf4qa6UdB3N1ox5jbM59jLpHBvWT6oqyf5nCzLg",
  "key11": "3kNdDsPhjK2KpK2TZYfPw3AWz8k2SVmBHfELsYeQd7VXhEdQsMq6epF4psiGZ111jStFxoyNE3xKRKJVLFrXfHEC",
  "key12": "5ek5wc7gj86rqMpLHrhh2okNkJ5xX1vDsXnVrYyhFBkSVdyc1PoSRnFtseqZgzcJLvAaArFUvDqWiFyjjA3yTS3K",
  "key13": "5UyGhxsVxHi1mk3zYTraNDXyyzdLnSiwnMdQQXdPwZUnGPMyRCAhqqt2d9dHpcn6DqPWWaFBHrLEPoU6U2fvLLLF",
  "key14": "4MXMMVerjPniwqAPscRzoGaRM6ekn9cKM3NBbyRXUtHDH96zA4QQdjQxvo3WK7qPNZ4kAZrM1YrJ2KywmGzLhb7N",
  "key15": "2qcrGUWmbyMS5craL4apQXvRY4jJn9qetPNBbPjBgsfHZvP2HQtSAcGmyJXZCzVoDDBFfFZCcAjwYUFBepAXvJd9",
  "key16": "5geAh5E32bAgs87jnQNQD5kpeqNQMaupcB61XZvaAzUza1FN3fM97eRr4KZe7kyAGHrpmuuigEKTz7PnAW1PeR82",
  "key17": "5MzbtLpX9oE1szbZJ3wCqUEqyUCBFkk3t893fw7u29fVB9zpjsmELnLWx7gSPdWomkeT8zpK5zegffX78cm6MTko",
  "key18": "2pQN8ZoWEjG6qHXSAAieJAovzxcnumskbjgLjZMNkmHgsDbqemcLB9UxPBQq4cHfcdZcjjj3SKkoyQcj7C4RSPUb",
  "key19": "5LqBQPNqUhsZBPiudXwu1Q58TuHR3pWX75KdvnTwjzFcrfePRudSwHvtMa5SFieMnjqTdRCso8TSejSUN2tdD9Mo",
  "key20": "5d3zHXFKzhKksJFFZP6i8eK7QWH8BGpGQy7TAgERFVuLo2dbHwvB6MXRWfwHZHBrVRrfwmhVApfsEtu7gtkA1RMS",
  "key21": "4UXvXHq1JDyBByiLcWym1Q2g1Zkdh86Dq8dP1ppXHpm9dMV11Gwy3sby9MC5AYmVgaTPGry6sqfkwgug5eXgDcoR",
  "key22": "2y5occwEyUoX1b9jPxdyZaBWRV46ZPFkJ4EMuR7ypbkmxwgMd4L9Xjv1FT7BaZS7vG6EDR9n9VwSWAaf1nL9tjVP",
  "key23": "4AUkMHrK4yZhnxnY8smj5FvGz2cASDrgun93xpw3AouGFoh7Y7FEZPP9Bv7cerj6TK74XNJkv7gAEfji1manbUDD",
  "key24": "2HQG7VFUpuuxRidEUTKp7akQX51PHcdT5uT6CLTQtRtsbQnYtpifkg1qSbdPAjFWEDFum1PvgMYNm1Jbpdr9Tfrf",
  "key25": "5vCF3hRixsjFjbnk3Yo5mBvF6M2T7CpPXpK4BsiQZo8TVLe4H1xRT4Q9AJZTFTTBcb6dVGimEmxxiYA4mbAzeyFL",
  "key26": "hazGExNFY71ABqfruBMQ7zBAwX2nTne3L9hrs98tCspARfM5MFHDKiDHhkGUvcNFexiPYhYQomgQgvrLVMPfdtP",
  "key27": "kfv9yiVqWmyx3JPuMivjMgd6dA7mHSppHiLiE4URJxXtFaokBuDbdLC7zWFMJhrsv7PKmRDcPKwxVJCLaFDXSJz",
  "key28": "2azdXH15e8PLpxeuqeJdrfHP2MVHxCZd3FUkpkS5M1U4paSfYdK55zGqY18L8emMqUwjSSwbNPkiCdRjQaQM4juG",
  "key29": "4AyptHGWUduJoRvbnG7pCMASeZKTfH2gdKFHYREYPUd38JJQGbtvbZgVjAAoAm9dP2CpQuKsqeAZE8WtK2BU99fP",
  "key30": "4zwqxq5t1EVHjzyesvDptUzT3VzHN9pcUqxWMpqo1zB9edpYUZMufaNCxKCjXvaaA4p6qGLxkyWv218pc7t9Gwgi",
  "key31": "5E1eS4X7GdRvRXca1r79dseMq9QEYdkXz8AfHfk5yqDSAq3LDZoGgF21uwJNBqAAmCaswj3jrfFPqHwY3eEYRpR1",
  "key32": "5L8ooE6sXZhLad7P88PY6fkfuWawVEJ3mgVzpL9VLxnC543jvD7b6scS7QuQYcXTXsSKyadmczQsRUFjHKkanV38",
  "key33": "5BUEmeJKCU3sf5SkxxCiN11jsetLp6hjJqmaWWwCtcjJhfCgK9jmY4nprKXBq1tMGjAfFHnDQkH8BXcXwaNAzSiJ",
  "key34": "22EUnB3vUHZEqYRzgGGADHiiDg1maiGeK8D1AojLiMZM2sLHPTtrcGHpT9fcShz6Ea4NVUDM9BrkHSZMkM65K2ew",
  "key35": "4tFDAz4zXdKnWmtWYfXRdRhfWwNEcYwoqv6uzqriMkmXyTGCL3ybHnaTKzg2AZVWF1gXh2cC28XK9wv6pVb1VJLq",
  "key36": "2WNN63aBVjJ8y8h3MjGcaNEBrdEAKdneqmrkB6Hrf7jb7VmvFAyQedPuMNE5tbvUSeHnjJ93FCtrg1Mz5W3hPQ3A",
  "key37": "tBoSZQAvtgnJCVfSbGFNBtc2FoCoi6nn9ugiBfh5ZGqLWWjpC7Dg9ZmiRkZvJ8PU3KWUgqT7k1THdRrJQzvFUHF",
  "key38": "5JPRXEnXbSomMbVe9yVu8v8gbhUerP3KpWEE3FL9v8TgFpyHnG9QFEnZhmDm2d9CujCfPECa8GKF4prZg6aMNKmR",
  "key39": "5Tn7LQF8ZhMssGgL7zrzxeaSTGQQo6kQ8V9yQPoxpEa6v3CD2w9wEAJzaAY175xuxNp3BTzK2CihP4YmW1aLo9d7",
  "key40": "Wqs6TwmBSkhJT5FnkXUBsfXyLpDd3xpDAjTvVMqGAxuMu3eW2zxiPMx8JBRTeqQWAprEK6rdcwDVjh2t2hZTT94",
  "key41": "4TKpzYJQTR75fZoNBjYtLd5bKFcS5bGdF5xvtKk74wQty3d8us46iAS8zMAXA6FeZtPjEQLMtWPsNuAU2nRkQ2ek",
  "key42": "515WCpt3GRDXxs7N2HHw3jwAtAz7yKG3TLPf6AXC7CctTNvYGhSSckXmw75USTAMsq6sNrQoLPZYi8ooW8HBqZos",
  "key43": "63eabiWisXjMRiWQBHCyk8XBJLkF4i33APN1XfVP5viQGfAUqqmxLUpidpXuw1TYhnFWS83dYt6rF8PYbdSiNbDw",
  "key44": "66rDdXL73o4MR4hwMpuBFPk27Ah9GCrhr37yQ4K2snHcKyVxfPhn6UaYDVoiDURuhks3VzCug2QhM6nXp4s25ABQ",
  "key45": "3BQFLhjdQvS3LMqGbs32fSMtpg1xbVvqY98453wdJzgRctfWsWj8V4kcAYXqvgsieq4iqYErtYYQe2odioE9Fmch",
  "key46": "4SHWLUFZFjc12hq8tEPQDgngAZ1HBoYDABxNv1JNNW4bZoUzUiRQyzTRycKrrKxZzUZjgAGdscevTSNVWZso1eaD"
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
