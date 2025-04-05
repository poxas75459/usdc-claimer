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
    "tHgh77vE9sZNeN18rUTH9rP5zvfxmvVhcpXzF8kMfikSRzXVpoMY1k3TuuERxRHztVPm3atvxHC6vb9cbonui1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zik1hHvgwUo77zvCuin8XCSu7RyojpUgRjx7Wc1Z1pE7n25hejAHq4qXeSaBBfZcF5nACTrXBzkzQC1ZvXbyc6m",
  "key1": "41ezDwMgb1ff8Y42MbGQjqAM4WGz2WcZsaW1huo6SqMnzKMgSd3Tmz7pCxfYU4Eo9k4Jo7swJ2TitNpNovNd7Ng1",
  "key2": "3xtBvsTpyDXJh9dF9kVgzZdpHXuVByv1fs8rdqruRtHfuA48axgateFb8oWXjMK8GrQJboP6oQSYZKjz4V72TjBH",
  "key3": "3KsGNvAScEAoHuwZhXBtTctVJPomsUtpuU2gTmqsdL2nugzuuwNMzULVsyRbCoMVPvDpYLBtNe71Bpmer5mBDWzs",
  "key4": "4ukWhnWA1r3Wo48VR4VKnBDrPE8CTbkMwdfcdonhg5Nnfrj8PkEAbTgBiqSD4kJpioLNMRLvvx1DDmbKiMDiKmoB",
  "key5": "Xgw7uKGsLNfgAWBZMAgM3DghTWEWJ689NeCRvL7WmLog1CDBzeRxBjiFF9CgnKu4ZPVFLi8BYVWJyGpGdH5cPSk",
  "key6": "4CaqkxMfYYDciGHpgS1erSDgmQJ81Dk3ApayLaHKyLPk6Mg44cn9Laro9Y8CuWz1ZBQekaosVszMW1gwrvtVgWon",
  "key7": "51NeJwRzTHD8jqwbr2DpX8P6FNGqT4YNDtngy7MjT9LqrVeTqAXmNyNen8mrUtLNK5WHycvCwhkpbuNanYo2DdHu",
  "key8": "2RWNtDsiisp9fYbPiWdXYvHQ6huLZZ9Tz9QGi7D9upNSN7ytnBypGH3vzikFfKjZvmWw87zTcnBsrKUShXogyfAF",
  "key9": "63ALMW7J52YmR8NrYBBWWowc6zfke4qTyYC1t7KVKgw49GqHkxNkVGdwcmAkeua5SUka2rob9Lx8nTLsFFmH2BaZ",
  "key10": "LkWG2ZwgVTWrXmudsvo5p9JAxij9mzmnm3VmNbVXsBherCYpY1bKkBazQAJXDfK8Dt9uBAvXpyp2Qph93eqbZyB",
  "key11": "4wFHG22Jeb4zmUXRs7MdDBDa8AdwCrr6qyn3Zd9D74Mv8NQpUdKGcBEmWBPwpy2BQyWZynwtt8MUBoXjvdNRPFsv",
  "key12": "3ov3u4ZyXz9jKdW7DbCLEnmkGZasv3L4bqVFhi291H6Lcm1pMthDgsFfJAv43GUwExKkFnYizHvzwr9LAqwP2kR9",
  "key13": "3BxXhVoqWwnQs298TTdGNxiUiVQNhYd8wxDWREpXLrWh72XMogGWkHiLRvAN2Q3mZyXBUYdZqk1cEjXW7sD5fNuJ",
  "key14": "2Y7o17CNDjLFTysFkbcSowJXG3XRJKKgzjjPSKFhDFXbm6jfn8LfXTZzRAmwQZcaBLVC9WYA3GPiScK3dQU1Bexy",
  "key15": "5KVMy4gQkdmbfFZa6bbAFjSSKgAywRa2GbphuLA759ymzsZG2FVfBFVYzWWs1cwvb79iqhu1z1494suHD2cfrGn9",
  "key16": "5U4v9oqWLTnN5zCaFV3koxX4pXMY2KNDprTeAPGvLTSbsjVSrvDAfdXufnuVtNaECPy9QHLEK54tARzmprHV9j1B",
  "key17": "5QQCv1wM5MMLkMEEncwMnw6kFwHecBA9KNdRQQFCdocNqZgucaKD2f4TVcNPKp32gKAYWppB5FFwRm3NbTrqijuA",
  "key18": "5zbdnxkmffzqTz7oMzXL7BocihpmR4eBoiUmj2XbAbwHSpfowxHuaCESYU8EUvTKFS5nKsA7wQxmYXt7mHg9g2fi",
  "key19": "32wHvd4zEaAt9eT2e8d87YpckAFFhoRhPafnKjfXqt4bUUBFKNbeWcQaa577UHy63Kzt27XsYrRAYgcxbKaKxRVx",
  "key20": "245jq3tLsNE1uquCLxcKLq1MsibSyMGMQhmSi89Q7TFBnEN3NwgK1ieMeWE9Hp6g5mJrBY7YAH2oishPrD8MnvhT",
  "key21": "2QQ5TTh1WfAxNnSoj6SPxRH6ayyjxcJBHDcMFX4a1Eejrp19YPYSZhmsTFvnJpgYHWRVo9BWZzUvxcVz4tESPs2G",
  "key22": "HVF113u8B88BysvYBUyN1UxB9FttNEqLYEd2F84KE7t4ZJXWngJ6mCuVj4cuvd97yRhJ6mJZXTCkWFL99psRBK4",
  "key23": "5Ak34LFKEvTk8iivqGWDC7gyGYHkUinZDQq2GatWETkLye3TvHj4hRTVR4ABufZA94NCi72YNkrKywPmsbQ9RM31",
  "key24": "3RUwNZS33mX1ivq2YnifF7dun2AuVVvrcvZ6hiFgkYWBqKRMzYTV8PH34su6troPZFDkuFmKpqfWbRwcTb2baPbd",
  "key25": "3y1UskTpEC88YWcgx12nqHUWnMk5GGYocP4HzJzxA1e1dp1tXUdgjS3JQsHQvdCS4zNtKLojzk392Yz77ZKSukey",
  "key26": "3cRVmX8dyHhLF2VJRZG9aCSRyUHdrrWtfkMtFU2i4z4aKVpWVxWLqSiw7wDcp6DtPZuXvURtArnmBGEdNzLxVSRz",
  "key27": "62umiAFw5YkMzL2Gaff11YatvrxGwfkxfSUdW5EZi8ZFyb2a7zVjnFZ3T3rUMJwPA86X4YiDhpAvPV1euPMTRVPz",
  "key28": "i2rFJKxqQdSpxgTxXodK8EaEPb86YgK5ojXzU1ynVCLTT4ZT2sDEgZmJkCSesCKBvgBvKNg51f3ngSUVgRKdTGA",
  "key29": "nQ9G9MkojNgLwizeSYWkBRq1qEysEALXdoztcee2ZZeqs9fVfAq2sAwqwEXKeXKzmVQB2T8mPwkhF4BawqaG2iY",
  "key30": "5N36ZyZpU1UZMfQDBUU57itPEMwZQbSgKL7U6yQ9mS4gEYqBtrjmTDNKDh6Sci5QPJF5vSr1UiFNGnhZ13YNA5RU",
  "key31": "2qsYfjSFkfGdoP5kxX18T4vwZ2xprog5vYZW7Gz4JVYzoY74fRAgCdUbTs9b9JGQpuUzrnAuvbmmtfoTTxzqpPT",
  "key32": "49t4rFA2E9okbjxwrPnzPuDdPDbCq75tChq43vLhfqEAeC9cVqKtqyBkZgAXBpreiDjWr2e4s4K4Bbz2mPW4L6Hx",
  "key33": "Xrqy8KtqXAogHVkeFnb85pKHV1w8W8sD9hSw9UpW3eaN5KshzUDfswRDr9TBLyC1cjVtEkQJYUkzc3MXMvJgfqv",
  "key34": "53BKU1LC9tuejWT5XooqqG4mxb2vAfMHzFgzU4UtGhQkENbPaA2sPTKcZVKehDyAJvCXUyGAo6kmNR5gkNasaQC1",
  "key35": "4PyoNmtGKrZew5tCYaKBwKsmq4buRLCGoZH1UPa6tAvwGNMXo4YaRvh356Ft8ZnkMXvtFKizz5TSffQADUnBWJaA",
  "key36": "2FS47mAzwAbqRVT2SVGtnxcKFh8tt62oT6k5KdVvWdjGZa8ZjDT9Lkk4cgXgp4geD2nEUVPQH3hvLsnNCZtssv2k",
  "key37": "3YjGfqxyyWc1PWHDPXeMTprJUCutMNTWrtvHek9vBvAcm5JJHGafz6KK2nVfWcSsyRZtSqLW4pvuwJYj92Vfh4FW",
  "key38": "4iuVjB67FqHqXgXQzExFNSw2gRjXYTCXcjfyXXLBQ9cuhxByAHCbf9fEUxV6JEipRHHBMzpNgQSEeX5h7U4iNCQ5",
  "key39": "4knhp2N1tY2vUTMiexTMXeC3K2MoVYekJvbr65MsbZpR5tjWQVSm4ik2kaUQykeBPaP3bbCZe1Vhmj8Chtt4D8pU",
  "key40": "4yVRLt4M1rj6hSgsVUFPjA5AgbPnEPQLE9tBh98juCvWT1NTUPFSibAiw6NNevPUdChsEoD27jLMs9Yt9mCNRbMA",
  "key41": "PnkbA4rE4rqC8qM4bw3xsBFCB4otn4JS7seHeT79WyZji6tAv4QYMAqsBy6NP96kA7cJbsTpDapZn3LEggSjWyM",
  "key42": "5vvoTyLE2PbmEozBjRJdxfbWNGrywTas7j82aB2pWLZDBJ8tLHC6d64G8Q5FPwidMuYRGLqKRNXcxLHrXaDG72Gw"
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
