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
    "2awZHgcpVvY8igqEvoEujxsSVVo8kgRaUqbckAmrstFur13t4rGAxhr1AfDgcWBVWGsk2Kd1kkSZUHM1Gii8g74A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sa3zb77DN3Ap9X3qqqwt2FyLACU6Hu5SnF774j8bCkcmkx3oUpodsVMFypBvfX7in95Xm4MuRUZqsSZhbNKEd6M",
  "key1": "2Hr8kZrD6PtSJRp9zWqYaY1yeZNW2vmuDXz9xpu3skXmBRE8N6HCY3aZ1Vb485153MTfU3W1sTTw9mEPcQbPmB7j",
  "key2": "ZYWunvSxDoAZoABNwPL2pNFuUeLMMhgyZNhSk3MGFBjMiz6agEmMQyJvPTgz8ipoV9Avax1A9RBqT6J4pfmaQ3W",
  "key3": "3eFgV7yJbt6qKSqGYRGWHGuw6xSqvWiYaxp9QDnBgVp1xQdfcf4sYRtjAGrxzcFJbbZFRzkLcti1CyPjFDmnKZpv",
  "key4": "3ibFvCxcsHbTvwH8MdJZatcoPELnrigP8EZhqNQotX7fJWqPWd8s8FJNJzBqgAyZLVHCCRoFgcXdbwwX1QpiJKFW",
  "key5": "5HRNwMu7VBbpHve8SLjzybEoDhjyLaJaLwW4YS82gwYQf6gsZBmD2bCBDQmb5VsFS77jPzZEpSM8gZifNfNGtXZA",
  "key6": "yWVr3P2ZgsmGH3od3Akf7ykrFczgzD94HyygdfCtRVFP8Y2Ejtn5UnMTsQwxXSatjCHQ85Ck7bvv1WiSc4zaB3G",
  "key7": "2TdqWqHgH7WmD8btwV7NDodWgPYRQKmMAECRSCq6gaMipAav9rK6eDWU5SrtbToMSbTfHdzXxY4oqVx4omNWnnvi",
  "key8": "3237mBy15QYY3Bz4KPdkn7bfGZmUBQuyWD9pK3ZUBCpFq5UvF7WnESsjECeGzFGziH9fsgW8W3WQ6HHZHmvTB9iy",
  "key9": "4Z8s3dWSPzT19aWUiz6sK3GaEFtcCKvCkHTrHSqNkGnYaADjhqRMNATz9Rq97FiWmEPrcrmwMrULSZt66mQrurq2",
  "key10": "3zhPQJmnapghz1JTGS8NXxZw8ns4SUpJLYWvG2xtsHvf8DpL3CNKQ8tETMDUBiC8nPv56MhvYqFoeesZYfWVBDPM",
  "key11": "5GZgZ9umytRSGfzt1XAr4j89Ve3BRoyLCKPjGzpPaRcKWoKhQ22xw6bb82xRZuCoUaUB3tgA6Rverb75TTzFa5Vh",
  "key12": "3Ss7bNPcpsezV5LA2EiFXJDGwiTNuiwLzQRLF2UpxpguMomQgAWZy8fSJsRD3iU8fFVnGotmqPvQBPLQi2WSdZVj",
  "key13": "2tTEyuPekGDW6xzmCyKzQwXto5Tg9BP2RYtyPff4ehqNo4cZSsue6eXz3WJ8V2WX9k8xUMdNgHtkWKB7vEiZySTY",
  "key14": "4qXAdALT1grWYXvs4L6wrWJFs53WZg3LNzkHWKyTnVg8WmtZm14rWUAEqmTv6eKhRBKAkehhZdPgidfba8kfGs5",
  "key15": "2aDGA3LDs3iE8oDztY6kJC24uaPyXTxmoCDkB6ZMaq4sEwP14j4RYyUX93j4MjDPCk5XMhbpw84FvhpoYQogmmke",
  "key16": "274qAnocnT1tDrNqaUeAqESGW1F2TUYsL6bvLmQBCoitEKAxUHtDgzPbTnS4KCRGzZUi5YujhfqQF1c2JiY1kzVW",
  "key17": "2Q76hganwrzyisCu8ctKEX63LhpPikUzwFDwyiwPUc2i1ALARjDeXcSPTx5Y3oATVGeDG4tNQgxj8cvfdV22kpaU",
  "key18": "4Dm3FrN7GH942AfD7kkwLsZRwDzTR9fuP3DYPYiZkhxMNVLNWpUffVXNHEoDW6TippbWnZpEwxwaokdgF4JvLAM3",
  "key19": "2tAbZR35YxK4nCGbEP56y5A5WrLvpxea5PcnyS6dN2kVfJ11HemSQTePa5GBzCZyN4A9HZVkhs4udhDDsugHvjN7",
  "key20": "2UFPEWvMnqCuWNi19wuqFZzJjzdZfprEb6Rf5Skx9UcGieu7MPCx3k8Cm32M8DHn8CVf3eGkeAoXiHQ3L5Bf4xDR",
  "key21": "5WX5ibXbntLzhh5cScDXeEg5rSCDAP1soBv3CDtFnGDNFeuzPTPy4Ni5ni2p9i9xamZWJVAAEcg5PxVQNEkDFb69",
  "key22": "4wdLSqx3bKjrzEnXZHe8E1BHeQrdogTD73nLm1e6wmhZ2NrDiwSDcBUY4Aho5aQcnLTy1pqarxCgemLJyKFkzbeW",
  "key23": "3AZNupCLVD7jHRW4U5JwWPHcjERp4suJmF1ffPLkWrHC1ZRZKo7iMgWnkVaP253QvCr9atGaeTNrtsCiRkQicqbo",
  "key24": "48sUFS7csxzfsrd5vzKFxMJQWr8pV4YNCZeyxCP3aHQNxVadbrvs8vT66RynvmCBWfkPeBcQYs9gnDaVL77BWqxY",
  "key25": "2BGgcAeRGsaXPdct8995j3SRuLb2M6z7V8HSBcerET9PQdMXQbJy26TK9JnJdCGGJrLRyY6yPTTQr8iftkyVo8oi",
  "key26": "6LMLDJYaFQBfCGp4Q4VHsYgeEZTCzcPrME4aWMEdJxVSjeMnBuKyLsN61JrPEygpDs382ipDaaeVJGHQVNofv4u",
  "key27": "4jT5qnAVZ8y779XanpUcJgm18j2QXVEXLqXCz3sVTrTZ9ReasjSsLCXfKZruD44wnpRb7sjBAquGVJCUdcBwbHPc",
  "key28": "2YdPrx5rot4ER7Q7sobgVNiyNeHu4RzqGsSp49LRdbw7AyUFJvJjLLw3jBtcipqiU9ozDXad59nCBXDbuvHYWUmJ",
  "key29": "4MRkdqZbrHCwxFKmdQN3ueEWcagx2tRNR8xY4iJosHDkr39FS1m25qSeCdEotyP3hiD4KTRpf9p3NEpTNrrXbsZm",
  "key30": "57J1rRkvkygb59GC85UqGhMVg7yY9SNjBWwFzQJxvxt4xgV4iKw8cp6NzxXY3RVcoQubHNxmw2AnozECsxg8LCzK",
  "key31": "4bbQDfrB1KQpexSvgB9CEYwUwbPFaur5CXjHT46vyaxSC3Lr2hPSHjsWZoydktbqwwEp1UoDzQRofebxA2SUfgkA",
  "key32": "21GhbDJGzLZJnkN1z2QYxcBxPNud3xMtUthmCAtqhVfKCzAcuHeACZFPmMWLojmBtczbEkanuLiUjZpYLzEN6r9w",
  "key33": "4SHFqEyrkNv3prghXStRn8YLxWxqEKWFVN29oC14FPWGNpQemGjzLdvetTDpL7xTWz51UCaMnJF3BdrANmE9oChp",
  "key34": "2gqXQojqsdhzs7vSjmBrfqYtJy1uVqhQHfjPVTpH4EzzdVk3p6ssfYrmcXqAsRonAPpHyLyoihHtCaAdzJs39bCM",
  "key35": "nuzTj8h6Dhzj29qM3eTDi6hqKSsdVF8HjVinWQPsoxYRDbuTzu6FiW6d1TS3YT2ypig6k3myHr7GMeNsNRaH2St",
  "key36": "JPzoz7inqJ6LnU1M3nK98x41Lrfua8c97S5PMJcMzEF3d93rKtonKKmtg7XwQuMiKejNGKEKFkYvTw9NYEtej41",
  "key37": "4Wxh2pK2ENxEELu5sWMcNidCFePAE73zgYziwD4Ap2oVeBFBZcTG8eW7aDj9Vbdaw7VKvwefNzrDHWBoTRXAk7VP",
  "key38": "2EtCNzCWH9UmSae58JMNnUqMeDkd717SURyj7b3WsYT6QJyfjwXqVrQuyjo5HW4nhmZVMYpq7Mnfzw6notaQexHT",
  "key39": "67PkHZUYBgRhcoUwoGqdcvjwZDiebLKqHNmfE3dzBKmPnTdMUPARXwFHGXMCsBcwENgncvaQTo57x7KACqyhRohs",
  "key40": "5gXtkWnPwmVUV8b7GQ8Y9vZtbMJ24tergbCoXowViCr8TuPLTk5ZXosGmPdQFGXVfZYNPc98r73x9apihAnLCcuj",
  "key41": "2nTkELpxf9o3a4evG6LwQdJKhi3XKtmCCsvkVdWLz7fLZZpZqVBH3MUJpAExFqfw362CctMa8eHAcr2Rwrn6UyTM"
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
