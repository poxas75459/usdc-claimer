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
    "3m4u1QyPHGNmeKusdY4iETXHxaKPmQ1LtDHfRmhq5zzKkDVewGChBQgQJnPbmcHMq8Ldzc3q1pH8cYzA1VR3ttkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PW5ZMkxmGYZvMHEZRNWYRXS15BuYoRQMqq52tC997ECDWGiW9dxm7DmzFQMGGHdxfq3zHvHcf3197xbg4VepYLE",
  "key1": "3NwSWVhvsSsecGG1P15YZGFLq6WYV5JbAZ43eazrWuau8FvVxVhzFCDvBxTBfHKiT9Cawe3AupGV4TEqazAS1FhK",
  "key2": "2F5117vjDNHZBxw4eCEa1YPPCcwYn7siaxLUByrigJwKpCWUJAhf7W3C4r5dxnk1XdaF9S71zJZzFQ7JceXVoG1g",
  "key3": "2mSCgQ3CZKigFdS11t1ucNu3LZd8J3zAsQrmN7ULAah9vzgeiSrCqF1LTEVB5pYTeYCEFQ9bnnKeovymRvr37EsW",
  "key4": "2QgLkkrJj684Hm89TkW9ActJYsZ7bLDHzyKyB7LzWrphcDJ8YUmJ1kUvCnjD8PKNdQMoWRyzERqjjjZqMWHDYED8",
  "key5": "5hjciZ4me33j7nRWdTisjLHkDfu6JochRj9hf7Hd4rhN3gYUnNFZrTUgtwiipJzRoXRwZhRzGZoBrpeP1X16hhrP",
  "key6": "62wsxWjeLecdpowcdY854RGZvFd3VT2dAu9tKKqMY41hYnSuJ2cJVLR9VBHbmBUUxqC7qQ3bu7stqY3RScj1bLwd",
  "key7": "2NYhXUd3Vc7aYxPdKk3Cfyfu1y2GzGBUEr9xeas15ckcGwX6un9vff1SeDKtUKnwCUzw8jti9WXnSurXbVRoBvNg",
  "key8": "4Rp9aU6WgLkJsDEzukJDre14t3g7hMgB53tuebA7y4bNZKuvxWfpkeXCuxxne7nXV1RZqsNah2LQkmGJgu2yUGRF",
  "key9": "5rVRZjH8Y45CbFVmH5Q6QPStiYsvm3zgPtxaFyPXjgQixBcHwA9TEohjaSe2o7L8xUfc4N4KyjtsGswiKKvYekCM",
  "key10": "3DgJk3LuNV4wDuborpqA9YtBiCLasao7memC2u1pRpMKmH1xi8Kzp8GcLg1D79NVgeNeo8XWUz4v29FirMvuQExU",
  "key11": "5B1tAj6tfi8iU5h6Cnmgixq8MT2nMaNZGcAXt23RtzmLYn6PtEqtr17LLL581T8QYWtxZBkMudGSPDpwoQEALaEH",
  "key12": "R1y7Yho5C6ndVoVAmtBb7i9R7WCJW1YTqskB94UVSBLeheEh4h5MJLxoVw2gGp1cypU4UQMdomJUzm2Mn72ptAR",
  "key13": "5R1nwxujbBYTXVAAmkmBcXMvsfpdCtzKqEFu1WH5dtXA9Lkx9Cu1CMvBeCxr4LqQMjv9hdqEXp5Qa9NQ3ViKJxA1",
  "key14": "5MsoqMsm36GKn3PbV6uGKx8WPSQdULpGSzw38isrt58xQYJKhGJDwbi49jywYHBr4soui52YjXLgFtDySuet2aja",
  "key15": "3Fhxg33QRQtCfCnPi94pidLYJRDQgLHg89N918EyFtX3xKKGP2ajNRqzYBdnWiWdLcgf1UPg1Pp7ZL4Laide4HZ3",
  "key16": "3boZDyk2fE9NoHdCCebGBeqFZtXvzAgysyKF5xb95NcUry1RWrg6J8urvRUppuJeLQEHFHoigRNuQPCKu9GYf7hB",
  "key17": "4AbojTaR5siuTwbm3SRqNJnyMc1A6WQL8WnQfFTifoEcCEgbPs7VFnCnm1sp7hFEnXwyuKJokAh6LYeBB9Qc1ece",
  "key18": "4pFjdtqq2yrVDDN5fVAsTVAkYVL1eGnR9QguVHP37j2PdxPshGytEfB8WYmJeFXiPKKAsmnedR97LGzg6pCdL7oa",
  "key19": "2jDcjKrjoJ1uU9qu7qLyLuUHT6En3z5syYj6dMgTJdLo57KCBZr2iKLC56QaBDnmD9JoeN6LwS1hELdKzCnydKJB",
  "key20": "2PapKBDuePwprn9XXWfKLaSBDmuhALGy2piQR4UKpxWBeygL9Zyf5eHD8qKghvxCEFkFhaUcfReQAcwewfRxNUyv",
  "key21": "5YHaZJCbHbCCVhy5wbteu9CjG864Cg4FhLfXc7yocet1q7WHu4u7cNoBb2wSjNPdsemmTNmxvWVN9FQLB4v8uith",
  "key22": "4EpGWXv1XEzCVJLxT3AVYg3NRs3YsZN41yqu9JfXjnmUTXWAXeiHPu4JHawUNBgRt4RLYn3YpWAzUmgCCZDPkZzM",
  "key23": "4UvXmKw36ivmDhhnGQao6jXvHXGybwGuBJG7JhZ9Ua7Xouqg9wVbQey8zyExkk5YJQbHteAxanit3mqy8hj5qVHd",
  "key24": "2A1xoVes1UDBpf9w1aqyWbmWNM3RWqWJsHzG12StdpVvtNQvMLxwDbc5z2bG2e3Fh2tn5aVeiwmmTkWWAeUu924h",
  "key25": "4VbERQmNboie9b27Pm5eqEmYf7CSg93b83cqLbozAzUCJzRWoJuQREoZpwS6BtQZ1bjEmNkLesXSUuB4UEx8z3Lm",
  "key26": "2p2N1rSev6yws3c3GYwbWXw4vbLH6N3rA4jaVajJMTxp1mHbpmRqwVgK2YLP8TjgowSziAZrkMHqo5gj8a7GAyX8",
  "key27": "3gkcnYeasCeMShMNx2nnYo9XKYCSQaAhXKH7tDTbVMZbMrrWtAncMCpPBr9fJDL1TBxafwwVdGAaM5GBMjcZBJS9",
  "key28": "54nRsszHpUwSjYcBKG43zcbXdk9bWEz4kdeQbrEnKmxD9RsaTn3MUAhp58AH5TDnhQcwadoU26jL6oP5fr28fmor",
  "key29": "3HSfmxcpkmrgeSeyuoWa7itY2kTtecGgf4JTWCQBVS9QREBSVGQ6KGweBEL9hLxXLQqtiJzSdWrvFJUrJdrPWCk",
  "key30": "GsfuMoeYNsQmMV7jKyqY3f6dJKb81BZq3jS1Uykbz83ZyH2EfenVhuAmfKqbvqcVfbsf4qk5qwqHBPydrtM4UQT",
  "key31": "432JTMJ1kjB95efGsUXiehZSwC24Mp2AKrmsyK3CRFoQfwyyKG192L5jJxAw1m39drPn3bXLXRjhxq3JNVUipCBR",
  "key32": "buffF6BWWB5DUWxsXLhveX7wFEuXdc6igVhugEKmucvCF8SFvTbTyrSmAERvT4vpvbodi9iEq8rGZtaTmHqhMuv",
  "key33": "3zqNpqVkemVXHqX53tEzMovQw5y6fd2vMyHwPvSYKCRWpDqWmkEQ1wb1RGWeq6tFuk1n2SPfhk49dV9KQAvzGbsG",
  "key34": "4DJBr6pftrgMX5tZT558Td7JM7QLUK14GAQF8ed8DB2Phb44scbZBEhzA7CdThpDTAh4tWpLej6RmRLiJcQGtGWT",
  "key35": "2MBR8Qs7KiNLvsbJk9UJjaM29rWEFW7y4A514pCt2xmtXaMM2iTjNhe8XpTZpkRi4atc5t4eoe9pfBDbDtTgZKhT",
  "key36": "4uC8gs2WakyQGNnh2FtvNj5jZKnSpQE4hyShfjXEZHhdNTEJGq7sM6zwXFegUVbkZzAs2k9wTCVxwPVVtqRjTy4m",
  "key37": "38EtKZFdqiKdvdunKS2ibPk6k9HuTMffFkyiLwtbEEZMcVFbG4L82XjJ9wZTcFXfis3J2okfnxKG7yyi51cbxXdM",
  "key38": "4183yGWEty5emAZWtQCgmAVdAgq1WrSDAeYTo22FiRhzkBpnRmDRTjc52cEJhdVxDxYDg6S8Yr91qUz7srPWV88L",
  "key39": "2Zo1ETu22L8Hp67S53ho5nFNnkBpAjnQT54FLHKb1E6tzhmDKDrQW8NuuDhehh4i1ymkfnZNYwouwyFDzomXBvbE",
  "key40": "3TJMsaKfzYMA3T1GBrjn4nBxRMSsUfwaGdvcdDwufoK1PzCtxsR7u4hK8gQWZE8uaaA3ayxNLV51HkZcTS4nQCKh",
  "key41": "5P6ucY2pJu8NtjeuEmwwHY6VX9cA2Pf3Ky9pSVBYX971cyCT7WYC37HNakVMjWErZK6QgUNyUqTrQ2HBDEyeg9yM",
  "key42": "SLosuicT95uNkx5XJBiiKK5qBPg8znZGVzi31rEZNFx186fbozmDrjznSMCNW9MoydS2juRNWUhzqZuAUy3D9dn",
  "key43": "5CJpsheFCkmpV9LaxJ1SAztZA2jj6FTv7MnHbrGyb77wGWruWscVxwaRNPJAJEKMFbPk6q115guwPa2TyT9hR3ES",
  "key44": "4gMEiYhE2Ya59jyks7kxtMbhAzXUc4frXwHk47m9VMrB1SAiKMoTnXAATUxagfcRCCaHBNNbxi2PM8cRBQBJULaw",
  "key45": "3rMt8gMMuieKzwyMNitxK7Nac14ekDu8sU6ZoVwGR89to1MPDunXNBxQHQGaPH1t15B5YDtYPzbDh7rPb1yocRP2",
  "key46": "55rjZMBySzKkaPm7Py719KyknHW9zqkpRLt5WmwQESLUxYfio7PbspQdEShDwW7jkkpZ64mi5Vfb6LWpg8Zu4iTH"
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
