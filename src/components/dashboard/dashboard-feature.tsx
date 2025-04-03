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
    "49fHgwHQf9FTsg998HCSeTnoZLqcUdysVs3nSRWgYsN8im79xvVA1BvvEM2RETLJtDGPjVGJu24XfjMZQ9cNgYsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEuXQYdmN8no3nG7xuwzc6YzUBQP26QUtXjqvwhjgLJTXiUH91XVuVWRhowqm8PaK3bWq15GK6CBfaiDz1UPCaa",
  "key1": "sEMLWQJPbuYJt1RkMaKfvfdvQrVqwcph2wCWwoTydR4kEfdWCiXAxkqmM7DZVM6WZE8oN31PGpUWebtcBK3Jdx7",
  "key2": "4dFBisaaj2vps74qfzhgt7KovmbDy25vFCV19xzc2vvxBbkX4D8kZytsnMGT4pT37toc6PQcLVJxPG2akQmYxmiZ",
  "key3": "5jf3dWdqWHEP2SycTJSnojKPQyV2DsnKzazkvBuiT96ojCK5GhBNfwXFp2gsQVJ7WHvKWdaSjYAK4wR25PZR7di7",
  "key4": "2k3D9PMdsroTWx63PzXaYnN7C9ExgZyVLShNYGPvnkr2VFntFm94YJQeHtpUnSgGVgshspyYqsZmTwnfKr7wuouZ",
  "key5": "52CsCEqv6LsgwWxbz1bZ16QTvDGq6LwhuMU3aP3e3nx1VAzqdLmTFvRjJxvNa7vLmdrjcVu6rzQhVnVRWU1ZvQUb",
  "key6": "dUKznAdaA4hZ7M5W3YF8ZkbmRo7m7Zs2c5fCoyMC91ioMY9zDJca38NhKyod52j7bdzvrJt4oxS9KMGTidj17dR",
  "key7": "BRfdYWGmtFt4TJ4rZFvFLFD12eanC2hPgSeVErf4axXsbkgt5PAMTqZqu33aEAUjyaY19Wa9hnvku6gu3LbeypN",
  "key8": "2pZMHd6pLjbBTFD4ndxVSr8uTRuNAicFenSuQehgRvrSxWp4tmz9yAhfsXNCqABgy17pyzHmPBj2mQAzRBvxJziD",
  "key9": "5hik5Jx8p7haRwTixi1NLnbepk1Dw5P8upgvMjPE1DX7yDm5smr9pSajUkf15uYCtibRDoXyCjrsjaZePDxuw681",
  "key10": "5erSvQaXTeH5v5f2xLgYkzK7oXL4opKGkt3hKeb6h254r7rLhQbQhQTGkoRFyvvJHpCeN2WQ5kf3H1eD2TvVRe7w",
  "key11": "2zsEMekFcURDQUSuGWCFbRsyyKXrWjh2z86M3ojQbXQqWsrdWeEkNFPCcYhQgCv5MVGewhqPKUa5RbVoRN8sptUk",
  "key12": "55DupU3Ff2qKkj8EFkSvk94pi1WDr1RS6WuFwEcX7cgeBRioGHtcyj46GXjNFgS6nbVFmrSmBXdp8c9fTN2xTtyn",
  "key13": "5wt94uXmaXBLoSy9cNSza9czMghd2FhXTMLkRDRcsHiszkATHD9ic3BoHnCdVmgvcxJZqA7GUmYC4qvcm799scCh",
  "key14": "2B92jxLvBbSry89kqkRqvNSwUyKkxP1TdWwXTTGSfrqkwddEAmUTRf3jvBwCSiD33GHwky51S9w3kQSyZ7Asi7rM",
  "key15": "3ejzv2ABWdvBm6vUxgaW9zdrnavVDoWnvEEzZYkDKCPcdKcpPZtDjs13qzEfot7LvBcPcnYczpZNWPWx4jxvX6tr",
  "key16": "4UFaWXqAqadUCKtMogA7etBLkWaeovqiEnpEyyPaGfNrJjuAU6LDjAmsgeQTXodtav7g5PQzmdizySbiLC6JrVbA",
  "key17": "3nrnmJZynbrAYUj3AxRC5eAF9z1YyJ6sbXwXtGpKdyuWzmiT79TRQnuAdjmoFYkpyRpNtKTQDAktMjLCntxCZbd2",
  "key18": "2LhmMwZXuXvSmzvXvJjUoqtRLHcu1V6vA2qB1CGahdtXVaLHtepApn1NZk2chSeCfhTZDRtSqvNF77ySmV6rFWsr",
  "key19": "62MgMUdi9v7WGTNniL6pB5ipC9vmCiwdLch61ygADoS9jhUC6cUBmpiE9AJPf2U3XsczueQ8xmvc8EHrNL3K3dYS",
  "key20": "spXgyMPK7bwAmhMTpoa88DSN6XNS1Abhq4y61TvusFaac8irLDquFdU36NM5DhAffqfAZpfkkht2NpMjCjhojtk",
  "key21": "tGhiJbGQcRrRo9JVa1GP1XGfbNLAZBpLtBz4HtiRwVkKJhGvtcL7ZeDJVAo4U3jS9BJ3c9wyoUZVbLEezLsmCDB",
  "key22": "sK1S7PjM8pNXXhCT9Sj5QiXX4zYDbH7s8U3PZFRw7eZUZh4Dz9ydVLYT2X4LtQt3kc38P2MKnpLuSsbrpoDYM1P",
  "key23": "4R5xyky34YEZWcE5hxSoF7nG2eD19QJF55MCXwz2bJrhcvmXPDsaRYBhaRWLPva5qnKC6JiEsAieWkaMMCpWDumP",
  "key24": "5Bt6w7uyY6DT6wF7cfriZ7dGRG3SLtfBtAQT5i9kHok8wHJadQtKbZcQyb9oniu2qLbsAuSnyUQ23iyeqTXzkoRh",
  "key25": "3os8HBMG2RAxqDqpSb99kFMrZTx3dzwHJRKZnsfuJfucW96V9QqCu9Q6AdkGwHt548QsweykerVs7EAdWUaC4hgv",
  "key26": "2P1LKZCvJTk14GCZGXih5XtTGUcxAkUUp8Aa3ETqkiWTrm7yEWtad36oJ4fuCe6nu8zqSKAxeQ8bM54U7q1QcAtX",
  "key27": "3oLezE2AU3Sjt21PceksVPqip83fV4Fv78TVGn2BdnY9AoUGeFjsc95CXUSihCsb5b3ibP4SS4sVwC6BKUrGoMZF",
  "key28": "2NDmnXKkgUYt2RAbozEk8bTFDhj1H4zTaiq2YcNuSTgx2HQhEWhfdRAxxkxQVZopS9cewh6kczc2CPrdVKcVZmtb",
  "key29": "3wMeY7Xyp6do7iyNUTtsGjnZsjXU13f9EiwFUpAKeQ9ofxHqXiaGUxS5QDvmWRyJdWARTbW8nCyj7WRaZSD6tsfj",
  "key30": "4DXvpGTSHt4WqBNZu1WPz3VHwCm3UHQ38ppQPdey93y9bMvAk4vJ5PVRhmc3VtepizaKFuw3Dtify3kNBA4i2jPv",
  "key31": "3W7w5Wc1uNcKBB9iytCKuQb4mp3NZYRJzcP5fc3gzgpH4JcQzLf99yCyfKyMMZUcXDJCQELbqhn26GnE6Hw2mXRM",
  "key32": "eX8r6kYPNXKB9Ef9xuU8GzPTVQUdppyFcxDx3mbEuSJFmAYCqKWdXZBSugZAF78s2sGY41quLkSLCvSq94mTBWh",
  "key33": "27PfdhuwqZxTVNQjAPW3o9swCcQozvyAabwfVZfB1UE9LVS6jzecxGfrLvd6RwwR4tsPSFGykB6V8u4bMtvtkrxn",
  "key34": "36surUq5YL7iGrLrqoGBQ3kdqdewdshRyKC3EaB4TTTEn373ftzGeduQ6DoACuLtFP6ws33o5GsCFwxz2MaT4nTq"
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
