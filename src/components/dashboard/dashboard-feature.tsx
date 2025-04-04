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
    "2VSpS4MWjN6iPwjdURcMfVmndELWHjLtKCTTmD3KfApBiwvPyCuttSNzgw9Y9HDTou1TQ8SZemg44jR9WGKGSPE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnoMXCRvQGGqHFnVSEehJ3bvPamBLZgZNvpu8nJNi2hEYCaAWnqZb2S8kuwdgq9NgE7srWG2cw5nbVASfXbUTTo",
  "key1": "2WnFy6JYpzdEQGpv3UpQQJMfQruYw9Re5ZVE2EKKy6v2ZcLbt23yd1K71Yre18X529pnjYx2QuGx5pzkvj5bHFga",
  "key2": "fdiJA147RzCUQwEShQQZqSEk3xcCJ9nbUzTR8zUyjURTX4idgumWT3BXxp3xMuV4sofCYhTcyZm1YJZzCu8aCWE",
  "key3": "3ugdjbyvnGf2ph2b5RK93cdq3qYfgBNDyV9tnA79iDWakS6dGASkZrXmdu3UPt9ai6riP1QroGfgD2pnix42rdtX",
  "key4": "4dwvgTvCxe8oL4oJv52iBzSVagombbmzRqnrqsbhqXQNwTqJrNScx5pfPqtDWWPq7xxqDcSUcESNANWsyJyfNHUE",
  "key5": "3qHS6eToup7fbnjx4ZU2uuzhXufMdPnFidqjB58KXkNaoVjsMpCGByBhUNb7BWbzzqYsMxx1q1Txc5p14h4phCT",
  "key6": "44HHUp6HyAREYrz7teSvnMEqM4BxPmupg9bZEQg7WfPSgVMMZ1PCYzhHEN6Xsw6pDUHveWb9UmFp3S3rKMdzZM23",
  "key7": "38jR3vEn5f4sTkSZxZ8xAmWXTvtTrDkmRxw7s3GgfVb7G9AUgx3t1pznmsuh3aDZxcoWZotijPJhkzkB1yU6xm9k",
  "key8": "46SUrvPbEssTqdR9GDDey97bzpw7uzzCW8iAGMRtr3dTbkBrUJq2VFFkooJmdFTinNAFF9hfEbYTC4zC4vALzkdV",
  "key9": "3m9TSiQetqcUqdDSXaTp6PYgTrhm1obnjJ1DGXbKqNeRoRD6x3yw4WdH2oHy7jEhKFT77QyZKJStdRbmGyxBpxN6",
  "key10": "4q9iwdj2TG8fYBDnV3uWt4tMRczMgkAZpHNdb2iZhNpdhNRpb2jDL7JQ5hg2FywdTmGxNUn6tCRLkyKpsDtLs4mr",
  "key11": "5Ni8NTCMCK5NxfFeDPRr7hiUq9W485XAXfdf6rYYjnZtWNEs9Qp6fWsUH7ivumTWTLcQaywVTQ9NToTbF1mT9Nyp",
  "key12": "D7vUZm5Kh6aVy2yM3eY4B9RaPDKLrNgVgfFhx61ggF5P5NBaH65ZxPwgeKQF9do5pBL88J1cedXmdbNnCf7Bgsr",
  "key13": "3mFioVFRXdMBpyqvEFY2JNthC3ojnJ9eZGCwWSdY8suxipyXaCjBNGQksGhz3n98pcFTejfBnNHdVt6r6BrPoGGJ",
  "key14": "296PfaD7SvS7QhqxqGhhw5uvSkCj2Z7vWWCqCws4zduUTx3cXDZKyyzaquA4eYdwxjEevM4joASzwCUYXjVbHdMt",
  "key15": "3xhMPKQy3qazonWiDQQQuVp5ZWjftSrDGAfrRRxGtk7DfufqXYzdAy4FLYy5qhEaH1T6Uft2jjoQyTZ2ZwGzh2yb",
  "key16": "4ZURaLb9D4nsdNpXeKYNjvRPKcJVaRmnSKsq4y6qm3tXyUMrFj7TzmVJhGLn1B4YLZaZQL2PhEyNxcAbmrQnoPPn",
  "key17": "2Unx36JdPFdCKPkX33GkscbZ9ugjUN1qtRgaCn5imC7KB5ZHmivEhkSEHSDj9pGwFh54meaHPVmsn1dconaHRwZ5",
  "key18": "4PhyuzobhnbrfBX2sUJ7dgf4czPY8K59MFerZz9ceoXmtfrVFEjPzjUNzN8uUhtTofnkprSmm3b52HWwGpZdVWKX",
  "key19": "3Emkgn369W3jf84xxdoEvnr4wTJt2x21XJT7cPYbBYNd4uHVaPdYc5cVFFswLvpXZs4MozdCoBGExNHGUAEZA9ez",
  "key20": "5qBecqahTgfE3HEddDRQ1u5LQ7GSFibYjDM2JijzwCqfyWfmxC2nEzkJ2jYsqTrWcejsA2ExvqCqkbUFCKpSuPnr",
  "key21": "3SsBe2MbVmcmm8wYLujqK2Fragkek9WaocPC9a5XxBqjEeDo29HQDkW2we6TQP9exrtY4cV5rCvAKGv8rsdnWCbi",
  "key22": "2MErL2uJRazeh2g1Gzg79KTAMS4xL8fiHGuL87di6scWsbfQfzVkVpg1LC564pK1mjxg1UNjr1UfamvnXaRKSiRe",
  "key23": "4k3dymC31mnuZC6F17cyLfGa1uyzm7CFJMRjALKZdPNJKJwDigEWjCGihL3v3XFJW1cd6Hno7A3UizKqHAHQvsRw",
  "key24": "E2b3QAg7g5e16bAMg2Jx9xMQhmJEpCGcnfsTRvEfidWb12TavLc1DzyeUZpuGeCPWdHHQDVe2otkGBFwyTjsxbr",
  "key25": "4he5Lxxx6oT8bciuN2WC3HQ2MVgu7EPKoygtzCQTddYPqxCqevgBrFgX4u469hbuqYR9QBmrTknTMDgvt3tNbrh1",
  "key26": "4tmxfhSmpKD9UUnkpRNjErTZ4VMN3CJA1ptbFoTJYYEL1wMDjEq1YzJDKCh7nyXcKPL64WcGcmopD4NsSKL57t6d",
  "key27": "3GgBsP36JZ5gVpRmM7jmNmNa5uf7DuSZkLBAJcpA7SUDHxM7YEnDnE4PMcG6S45ZrVj479JyWn8RmWdKTNPTA3nS",
  "key28": "NqW7GpCphy1NfV1ZfpWRZfqDH8u68CNfCM1QcEwy5uRA9M2B2p3yAYTsMEeoquwFyVpfJLeyKy2evpS3FRNsomt",
  "key29": "52vU4CgUKPGcLhizfwWGBf3TBcH7uHLnv31W4vqXSazooRevLE8pipfEjWi54VkiX2cSEKiNh3TWd2Ga5xUXiwEG",
  "key30": "QfuKasCxLsfqHKYGPPZdDAXBiC8arrafFqLNz3aN12HtgRyoLC8ZaBpiyfkdsQWSDk7z247uuvPQzjGbyS6AqK4",
  "key31": "2rYyCmoAbUtA36qQTKUJj4W8GVNfbxATh7dwLmL5cPPSdkCExXhdR3QxXyc2tMUtj8BS9s4pa2RJPYgZRGeGmbbB",
  "key32": "4hnSnMVU13eTT1wC2tYPU5G3VvwKz5RbC3uJHwcbuKX3aqthJa4YUBbVCW5d22PTPScwfcHDmTL17XAwx7kK6bnm",
  "key33": "5fmUFFcPxYmk3nutU1RuGBPszPqeQU9LamQ9ZN4mrjn6gU65k25SJnf1DYL9aLgpwaTARDCbbsDbaeVTn1Thu2wc",
  "key34": "7aZCcb8W4e7cGccVUqBf7fukoPn8NCEyhnpRs5bK1U7KvDr4jPz2fB8ZW3vFhqH1RVzeqdbAaAViUD75HNXJgFW",
  "key35": "3vuF7dPXmD1zdn6QRqnvMRw5nBtQAcpiqU7XoraZqpbXoPNxR2xzGuh7am1fQER8pEsX7XGsryz2UF3pyQsnWkb4",
  "key36": "2XvFs5yNE2KQHoeJqkVcA8PsKrmT8aLSiJ3VRjeVsP3eXeXY7MgPvcYUcLtX6Na2BSXbDYa6BK6VdJ3yyVJKBBbU",
  "key37": "42y4cU3CkCTTmpJk2MX4225gzH21RWbeY74A5y8JKoTCrzbG8hKCztwa9T48ZodHcDT6V8MikJgRjyhn19zxcm2V",
  "key38": "2rboy6kXFSmW7dxxNwXRHKe4KipDxHPkC9wrTYyZxt1Hx5PsCi25cB677NSd3w3AvR5pfM4Mc3syUU7shKmWZJ55",
  "key39": "2H2R5VY34fLm8YTnRHLPZbdXpDe3H9wy7iM5kTTaFwqKh1NyCeAurbMqmpsvEnyrvjNJNTdxQ9pef82QzkPbp2T2",
  "key40": "2MU9K8cbttMGTDBzpn78n6Yu2wmW7nBAc7bTEvCBYYwwdJSVyBiNocapWuSWJ7eFT8pX7qYeUSpsVxzTH8QRRDey",
  "key41": "YUMa5KEnUUiYNvRra5p4XLawxppn9D82czL4YZqtZUtUaRpuU2QLiRPCuEcDVtyzsQdPhifdwqE7igBKBwYSned",
  "key42": "K4QHf7FWRPc8ePPJ5bHo9iNfFTdaAejAN9uE1c4bnev84gYqciF2eDSHLPVpAHX4By5octttwBnDvBNMfsYyQzy"
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
