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
    "3tNA74UGQyp5TLjoMdvEWYXxsXjdsotXhfcTC8bNa2E2vPUWsrUPFKxPX6Cjq7ESpF2m49KNVpoJDuB84AWdYNcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvhZUwD1hRLXuP7RiCdkCvEHEBW7n8q87SoC7ov4J34WQ3HGo71tg5KXLPfcrRbWhqYYQ8Y2jiEbjgkChy718Mk",
  "key1": "7WXwWEXzboUUG2z8KCskpvDFzkFUvTvh3o2yXPmkX3JQ1Af5SfxA49hJfhnxdCU7LcsV4rpkrDjbWCk7jKAkXDc",
  "key2": "3XgpdRkvSrDMG6YPMNDuGhXFGNcyu1opw8DhvygZRrp3Wk2hgpfRMzzFmSMpE7saodBLm8auHRck7rhXp1PjS2mh",
  "key3": "5eJkqrLeCm3kv92PGPLEavaFDit89HrjdieeowXF5gozfrWyM6zkyvP4TGUcWT8YWzztVHA2otEG6UXFv8dBEsiX",
  "key4": "2VmVXVnC9mKHG25xFFGBgWqTuqRWPRCMrzE5tZfzJhiZ1W76wxMJKyx5PeFPyYRJffiXErcmFgmt2mKCGGamk5zR",
  "key5": "JWv3dZFHTVzi5rf5K3a5FHM51yZeCig6kmSrcSo6xH5eegDBGTvpYuLkKJ2xxMiNT5fX5oChP3sV1LveUCEGaf8",
  "key6": "53RpaEvnzrY8k9PHRUymcWMBUw3m3KMY8d9JKzg9F5k86yCbS7tqtbvQ3iwR2rJCtbPtFidUep9abScvgFNWzzm6",
  "key7": "3gd7X6ir2E9MZp2pCX5QNZpW7YAApasbJ3BsqKY5Ga5yfxKFLJAn3u3cy5YYMSgkpT6buUtY7dxjHgg57SSibB4d",
  "key8": "57EpTBTJySDwzsM3mM6QUmUVeG9FeK9xjji3VLD7evdztawyovCCpZ2GakhwEYPTghqMbdVM1FvmkCr7sWBge8TP",
  "key9": "21ZoY1pWT6JVAkKTocZqdMFdV4du9UQhxZfACknmXYrByrSn7K2WgZkKMq8phRbWZvDBr7exRx7uhDhQFo2gwodX",
  "key10": "5nYLQbrUB8Kwv2wuWsaAaf6iMawKwwNJrTyZn6LiBXZ2N8tPMXkUeSBnsVQ2TKezukWWX5avaSQRCraHB3rQeAzo",
  "key11": "25su93shiERSHzfNvFqBb2ucsNmZbJsrfHW9Zb9zAsXFBEdQH6p49p1XV8tR7nZ2xnhD77X5zw51rYiMKbyD6svu",
  "key12": "5wr6sQmzdKFJn7WzysZr27gQLe4DTz63gboN3FMwjsNn5muUSUJrPtEe8sZo12uPZKS2tpdkGe7QSaCKNYuDftZi",
  "key13": "2kEvRujiLfYBAqzHTp4j3DYFQQuk2zrcF7cXtMcBPePXxxyjbopt3XwEzkyHR2yHadg5EtrwyVnyjF2rsvPthEbF",
  "key14": "3qtPdToxXwmZoeZ3SN4Ckx9EAGbvw7bKd8g8uqLxGXVhpmegY7dJMpX94Q5dxzhv8PDno1ftejKEkp9H5DWwpXFS",
  "key15": "2wkZgT5kERsYCRavK3vG3LjzCWtsoJcG75TTzEdxqFPxDNAqZCfZLLQ4JLLTfA2TXfUeiGDrWJcCzajaknSWj9Ge",
  "key16": "5ZmMFqnyHy1C6gZJdctSAwyRuzYisx46W45Ao26eEAgm6STMHKxDQgZWyxqMLR4Z6WsHgqbtFe1HuULC9GQLD6we",
  "key17": "3xiugKRMUv1kR3j3CQwr9nyhjcdaGB5w2JmF2U4Lv3sCZG7GNBhX1cLBzGaPSb3KacHtMRc5dp5t8rkPLg8qWJTf",
  "key18": "3SvAwkbpDJqwFkJRrTeCt33ySxT3iUKkoUVjyD2Xe6E138KVo71X3JWqAEAYc5XgcDxUZkxwEGXi9WebKoA2c12f",
  "key19": "4qSH1AWg4At3UpuNvMrte43d8yYm9GRpnUfUWiQwCQBYZWjFwkjMG8Fnf6Ekg2Pah4CCJeAdgyNeXzVErwxabEfq",
  "key20": "2qJS51A2wTGwUTCVsW2xKarKG9kf8bQtD542frgXrEPVH49XX7N8m6KWVtLBfbGJH9szaYkrUhuYE5drAPk4QofK",
  "key21": "32V9ooMTt6svcdAwQt3RBuRf4BoXNNvYFPzoYqjSEercFiFMj9hXxzHQ4K9mYKFtwfGc4Reoh346amqJHd2nimtM",
  "key22": "32pYDjnHXhuDghLx4DgEzvMQRhGAUTqN24msn36HnQNYNMehK2PZmXWDztDyrr5vnar3NSnxg4LsjRB8of2QidJ4",
  "key23": "2VR6YVQxJFCFiJ4BdnzxrsXPuQjBCXUknMj9sfEjJrZauoxhGj3Pv5jhRJqXEtS2D8bkaon8T3Wn89aoETaWgskL",
  "key24": "4Cz9AJh5LoVpGPDV4kvbGNUjUkxDSZj1pCpbJ6UvXr2ctVTHnRCdf4D7tYPciLP3xtk93QjmcYXyEP2bbrjU1GUE",
  "key25": "3SRuGojqPabqRXw6HXwvR2bMg8VhNNtiympexXBVLDdbNabATZda9zJvbr3oYtMoAUJnFGEbGNFTZ9Ai5BYW3Qqt",
  "key26": "Z6ZhdeJfD7LnVJsmEvHoHyHELVzDgZWmqmXp6RMsPSGujzmt37oH14Y6frNopbS3iW3LKj8b4QVeG5R2UfUQAAQ",
  "key27": "waqD5u98thZe3LW5g6e5HKvk1xAEC9bkit9SpvYpSGVpMBE8Yh1PgofSyWtRp5zqXD4Nkq1nFdnAaEgA2No7yWK",
  "key28": "5cTUrzQNUfeD36614ZMf1EZ89axbRPrGR3BsxVQpUFivPc1i6DAHfBhn3dSiqH2Xmm9tePrtAye9dgjjdrVv4uen",
  "key29": "3KpSQEN5LsX14knay6Erkp58wK8McoSVi5GUaWvZm9F93q4DQzo2T3NC1tkWc62gPvb2KU3jxbMC6jDrsqvapTTw",
  "key30": "3qYD3uTN4xv13emgTCVyViJpxbmg792oLtmYS9TkvZZmrLERAaDgRTTPFnFCxPf61j6xeTX5mBRbm3a7kg3pCjBf",
  "key31": "54oK1Mai8bLRR3YNo5r8LE8Fix6D68nxXNX2beS7oGX4vVcS7wQAA8u6nxjMyxdhV1BZE1e1Ejte42RnnZqDjvom",
  "key32": "2CXSW8iES4aRJ2j5YmxSBjFjeqPxd387rFEnh475QRWPj6WYuNSJnHJyCkPeZ2daqtu3J51XU91Hpj2uTX6YBALd"
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
