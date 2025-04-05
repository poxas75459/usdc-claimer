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
    "3xit6Y2SaeJ8LaLYVEWP1pLRyWa2bPexyp8GafYqPmNdyBp2yanZ5n27wzNnBsEnNjSSH4DvDeQXUqqkzgX6SngT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FB8m4LYsou7z6knv2wnEnjAYSwNGBmRanNUpTjeN1yRGoZp7xQkm5dRcqUkUYdnTB4WB8N9RyADRLwF13fx7rfQ",
  "key1": "GKqoqBfXNLE22GTbjwnNHpZw7yrPrFw6iZWRHt6xihubkwyYuzK9KHj1adhYoHoQnvjqYQc8A2cUQTYKakTydxR",
  "key2": "66MQiY77GhPrn73FGB2JiajEPAcxTxCpNt1gMx9XM38thVMcuebyqRxnp3tuRCoe5Tyj3Zzd7mgiJP7yMRbyB697",
  "key3": "52LGoyQpiXNUkqeDKbKh2i4XCfq2Pqk4xMqCdXqpwDDQq112SkZuNrjhkGTJRvzHF5bk7DVVrmLJh3XBzmQ5gxs5",
  "key4": "2zvVj9sMmhUrt8XS1CtHLdXrw4yvq54QjrYfb4wznRMnzJFmFjEmjW1qd9r45AKzkgz17G3J4nonp9hfHA7gN5R6",
  "key5": "TmmnjX1KK8HDgBUtVBkLxeqXC2X1RRQVGVCt6FdCLLUUHSuYUUKXgKAtA4nDSSi2KZ8UTxQy1vxhCcbndY2d4ng",
  "key6": "mbDYgr7GhM9GCg8bZhEgzZeAHrR5f7CpZegeJtgNG2b1tcVpcMxPWcp8f5KvKUkM7MbKTqcPp2by9tiDZoFrMJP",
  "key7": "3nbgeCQDM3oKoshYAsQFWVS3uE6eNxmqxNBrNZvFpgz3BxvhPa76uWn9RayGBYebmwzcQ559aRP6u95ZJGyZxd63",
  "key8": "33EdSXkfrArs3fk6NpiT6mSgG1vs5DEaed6Z3b3UVgGMYMbB1Ydp9TexuwjY7VXtuxV44nFn5BiTHfQvPnoa2iEv",
  "key9": "4SuRELuK6KVHMSLoyc6AHBw6mS9HA3S2d2jaAZAvFnEXa4yC9rxri5DBfBMkE7tXZ6GNoS4tfDzmUP7kNYp5YNKt",
  "key10": "4jPdcZTWKd2XpmtZ5fUqZmbUGSuKKqVMPSLtPmhZD9vPRkNmJ82fnPkD4RXfLYUZyJwfHBHdyEuHokKhk8VVAhAe",
  "key11": "cs77fKFsyWQxX4SvAZFWNnSXAp1tU7G1aF5JbLNVoenhBKUT2fega935J9jpqAnPFFgwKX1rY4NmhkUhcSiVSXr",
  "key12": "2t3xpbCc1V9A5oizFuFX1cjPZBZj1zRvLgWrCEUkcyggtP9L5pA7XbT68r3MaAJJjCxZi7SsbUPpcG1Q75AM3JbL",
  "key13": "5xUTYMfe7oZFtewFnfZ3Gx1Zu9PpE6eknkzG6uyJQgkd7qXrqxR9d3LE9aUZHxzemYsaTiH4Lqf39s5PTfjYEDx8",
  "key14": "4WAu7Ht5yHXzscB4W3TFKrn4XK7ZHcU2Dg3zErFr4J8hyFLPikiFQCeRSNEW5UQaVn1m79fdRnGQwR6eiTfdpFQh",
  "key15": "632cU9U7brQfj7gDDGekw3xnybmKyVqRwfr5pzmrBwGxSE26wXyrQCPsy1d6Po43CKUzja94uj1J8qczj1gCcd7G",
  "key16": "3axYZKScEEyvAMhi59cuV7iH17DthKLkn4BxGN6kKSEN2ouPQQVnJVgkQ43bvnWcxQ3Rr2WvFkJBsGdeDF7oEo8T",
  "key17": "3FvheiLRwF5TnWC2ztyosiixELDjQ4615sFSz9A9xUX8aRXrfYAPNXtxDH1RZbD92SiMJE9qXmUHaLYyStLEudzs",
  "key18": "49KCL8sB3EphVBvaPSzks4DfgC3bktA7CEeapLrNPvReKi3YR96pn5zSiqcpdjAkda2JppJN7d3WcjSrzoSCeVMU",
  "key19": "EivrJXZimFc1xEuhURjKPZG39U4bsr6oL1sCESudvVZLd9uRiD1bq2AH9UBkyMrenbB3ku77KNvKZPMhwVvnza5",
  "key20": "4FUAy9uzR352JELjg8VNYbTgSPSiZzgSVLfxTErMUD5XFrTUf1CA6FzvYc7oYVtmHt2bGiJ3ERP3LVGpgiF9HEge",
  "key21": "2rcCwSfb3RzMmTGRvyP3ocpjfHRRD7fjsqsdJv1cxdkxVoUJErZi6DxBKmJdT6g7cwtDSpQjxeS8ktY6Ua3cz3Z9",
  "key22": "397h4PVVpeAd2SmfkS4FGV2UC1fR5T6BnoHpgGhn8qg8F1HuvKrKK2hT6FW1PbNAMyiD5aG3mGq6LmSjqRYEtNdi",
  "key23": "CGTVzzqRgSNUDdDjuB5ekyfCWkyRNLkHNrX9zK7kds6xSMAAPoKzg8pLffQJU5EFs9jYsAkHAzQWCnNEEw4ktKG",
  "key24": "tcL5xVJ3Eg4swdBaSP3pUGdXFN2y1iEM51AQzK6ZVEiZ7PTudUxwSQqzBtLuTmLV6kPTezQuQNQjYADMW5etocn",
  "key25": "22RZG1mF7TKqURwx3gpjUN64MknbnXQe84eGuJkNc9zuyRue4K1SmpjT77mbvqzvM5Wp5Dt98mzqd46DQnRojick",
  "key26": "57mPj4FGb7dkLuVbbe2Mshu9z2BFjvSvHYfBLUPxNn7fJHJkWBiLpxMcgxx2Xgj3VWh3keKLC4ofgye6jZgt3RU2",
  "key27": "uKajVtWpo3qcipUN2mEXuzSDppQuqBBbJR3Q1Zg8dRPSfAkAnABkZUsc7uj1GYV25cMj4TD3ifjQVvVWYRmLasM",
  "key28": "3X8Na6VsGiPKiEKuyP3YB1QB5v1Q3ZiJXMBTdjULXom2kwAGykk9ZecC4S1WXhENkG2ukBqJZxDBS5gYtTr2Nzzd",
  "key29": "5fKV4wL5sv3kdFC5NppLV8PZrGesJdj9ax61f2FQ4GMKkaVJVZCqhviejZWEJuHFB5gR8NZuDjG6MHYzF2jMoqFt",
  "key30": "2bYbwkP9L4KCb686WcbSiXXBN5TdWQLtCEedAeH4wy2xpEjWfr4tRRk6DESXefo8sRdqoxF5wUnfYANfoYfvwE1K",
  "key31": "RwuzaEr8b3u3yAtLRqP5DPTU9HTgEgBDpSDNQ1EfCw7zPZauJZJfH7uBW3eDLJCTmMM1nLfvsjWjjf8pFUiERQP",
  "key32": "4QNr17xd935fybkeTeeApaK4JuxN3E3rHaHjr7P4bZmTJK3TEa7uGQwKKyYhRjhHfuGU86tEjtmiFR7szbX9v7v"
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
