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
    "4jPC23aMbChWgATS2tw5P453nJ2PYK5g8ZqaidrmqDi8heApU2bgpF9M5RFiC7DotmxNWU76pn3kRS4ATiDvgFYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Rk5wy2WjjUyvB9ki9aS5qeuw2opuK5sjhxUdZxdeDBoygnsh5ZUyhfJvcaE5DEeav8UDRuEyZdrBj8tCcoX3Yv",
  "key1": "5bauvkkku2jfpRuCWj3UJYHm5po3BxrfXoQfuVWZCN6NPGcqH6cUWkX7ym7nGQoc8vKkPwgpYFg7psA5hSLfehmi",
  "key2": "3qUUekpx9VfH2a35e7L5hEu5bEcSeVajNYz4RmTeKPRmxmfbRNe68VFhr3kXhAjsDiBgKUPLVgusVaprvgcaKU4Z",
  "key3": "4YBfjJYt2B8bqQQGmTPaNjgEF6X5Wc7ib16jeFnSamM1dT3MJQurPVPKL6JjUZ3jyqcxchcgQksPkKfAWKDFw4hr",
  "key4": "3yJxgHcLZxbhZzous1KWJTLZ6i5Uf3rHfNgvMjhojQdfmAMZo691nYWyWgpA1dgiue1bMTsp4NHG7K9cNA4M2V7V",
  "key5": "4d4wRo9awBGCszAHJBWandhfKx4MAFSmy5AotJoirj1QtfuP1YNK5GeTWML1T7DuzXJXN7DompLhmkSyyogqZAHq",
  "key6": "5jgjGzPMVkqi2UnewzxgRtWoBgypQzuvkYpk2XczFfNsa1d7jXLmRj1w65HyMqdU5aayVCBGD3XqZVzdf38Xnjfh",
  "key7": "66h6kugSmy8EodVyar8aiDis7Xy6NVXSK2pAU65TX69nrG5XkaKRKfD2NVqqjtUmQK7oTTA9eTuPysJARdWGNcpD",
  "key8": "Q6AXMgCLaFPaofH4dk1jS2x6NTBuv2dHinVQRENMuezFJfgk3FMFqSHRAmZsQcKU64HGPznmwwB2pgbRM3HoSaU",
  "key9": "2RFsVTv13GLyuQHVjw6hrVxbxaLnw5Ro4EbFE8foRxQ9UeT1t6LHa6PHjdtd1Sk1kSX9YD9FHdTUJsFrPNdgRVhC",
  "key10": "4x8hZ8NsUUANGL2HefK6wQYZ8SAwjHHjJ3QfvYEdqLEuriQcBji1W8kop7DsrLj5tsVuUaFnMuXM7ySha7yimgpy",
  "key11": "3R1aye2oRfM1Px4yHpzY3DF3yG1MntadXy7NNQhAvggnzd2iPgCQaHLT4Aj8qMnw2CT17Xz3DqKhkvTA74y9xFBP",
  "key12": "fAsFC3GBpnQmPEY8MTYnfcq93tkJtf3YaeWKCT3M5bnKMAuMADq5hm74FCBHm3pjF1wqLV4w9bnkveEYKjij6fs",
  "key13": "4owJASbvKtpDJmCfEALkzn7nvGvBvRezYZXVoEAf3M2jZfzcew8iJ1yW5p4bMSDsPtxGh8MgjDVaebPhnjhuF8je",
  "key14": "3nNmmbGR4vEoTerFtqDM4KWwEFQdtUdCSvf9ZmVfRhvV8Q48cfDyLJR9CUqDgRKq35BPhQP4VCTaHPtt27nYsQbq",
  "key15": "4APseMbYkPyHHTj9zVLzXwuTZm3yXtv3P9qtNisNV7aDW6i1Qhj7RsN9zRW5YfSfCMucAUbT4pqCpdbt5YRos2EJ",
  "key16": "4B7uckk85vCBYHq22YRa3SgQNdHZ87Yx57ZrEBc9UWexK42Q5iwB7EukVMryezjNMxHmNfwkRXe9YjWLTjgRLSeG",
  "key17": "44VPvkA3gxzpNb2JmBBFUjihmmQawQZeT8JHNJK4nHmY7JfEsoKxajprUD3YH6xgzBQgS2fZBnJn8GoAqzdvtPnN",
  "key18": "5FX5KKaN5hDfcPHhcjsXVVmczikyqsWwtqy2BoCDAg9krV7cKYxeQdQ86VuVoo4xq56qRH38Ae6jxLNPb47FvC8o",
  "key19": "5SNBbir392BoMUJ5sAh5VY6ZzPPxevA5b6MKR5EChJ8zAAxo17E5srRm7dF8tk25HXayRQS4ujmhz7NpGhUrEieq",
  "key20": "3r8eC3HrZhRFR4qFYN63PWpcs2k1LeXHNPgxL5f9zZXJanJVVBMBSRjVaCNVehP5od4mAY61wEmTLy5kcVxTuq2T",
  "key21": "5mKDDmRes3u563H7yGn7HogRzhhH7hK7mfgedqnoaVcKqWufVBh41cwqizAb2TyoYxNC8EMECzgchpEgqgdnq5af",
  "key22": "4JshcCgAyVYwVTCEaN81yxc8xdcPBdiAu6kT8sUd6Bxc9DqjyX7HFq6HzqP3TFZoxNEJ8swCMkq2t1i73K8r6F7o",
  "key23": "673HtyFiprcqkFNXD4VeyaZuVDHXiyTjgKFs1SMZFCLnBPmMPQXYMEnqdSyu7UE3795Suc1aFvNf8xcTNF4RaV9F",
  "key24": "5zCZhA24Am6vcQtw5Ra9J3K88LtWKio6vJeCTwmMqK1U3NMKdQ6pohhWAabBCVMgFY96gtzuZdXn4zqfd1U9ipJe",
  "key25": "2DY9vpcPuishdJ8zn9foaVdKvakcWxfKdT4suk8E5CJcS8tjLNRoPAaGfAzyuXEKZCG16o36Pk1UmrvcXbCTNEgz",
  "key26": "4rhyhQa6ZGkxrsAi8LYjQP9VWbMMD1Tdy3JgvvivE5AeCQ1E8KSEBFMd1guqBnVZnr2uZLvddCDRCpVRukxjKxQh",
  "key27": "2smUvRVjrFvo6UjqCrukva22QQu3dDgT9TfmJo7Hm2odk6P4o65SQir4dsEdSY1ApHtmW3Hh3jwpx6mpXg4v4H5R",
  "key28": "2PHeyfG8DpmSkf1fDCnhBJPjs94F25CqBKFVhfiChscHL6hcceqoL3KDTdww5NRMS7iJrSw7aehmg9endv9bQJBp",
  "key29": "5RYMgYXMfmAAGysTYMbCChGRMSormHUubsAMHeUfAWqguZnXswdtvJQrV8ropte8qYFNBqEX31QCPykyWYGkhM7y",
  "key30": "4zRJ2u9teFsfq4pzRZQrp9GyEiL7pMJPqngDFmP3mHKnojRBTadQpuRqgschiRsBMJycEtv6exRSFhdFPopN5XFH",
  "key31": "42n53PTA9bFGnWsawhQT6nuaTSna6vswFapZw5sHQMy8Lxv9EziGfvaUrnsFmzYjYbCoixoRRDtVwhB7qKXzAW1Z",
  "key32": "5wW3HLi5yLwpVtn3SZwMcMjxS8dvyf36PoC6qdfrL7izE2fsTazDyFKbDUht7E5HXt6e5cYySQWmt6Gg5mFcBYuB",
  "key33": "3D7K2fScnCvxmtfLqLZoPAKTKcPKCiZszUnTiLR58TKjMNcgxLzEdk7AoG99y2FqEjapktiK1Y6EXoLanTXZ52iV"
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
