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
    "BjfnS5CooCdeYHhzAa27k1SBxiovSBXWVMabmRx53mFPveXCguGT2sRCrBbXX8Jdfc9CGAC3iiaZcUTsMHaYJND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qb22LKmm7fB3LWHHXSoR8TnstgfkdQdyJFbqHMUZXYpxu9dxPRKEfN4CCkdHu7y8DtsMAWLCEG41za58FX4qd1E",
  "key1": "3VZE7XuW6SSZwy4sAX7dC4sXJG7jLDJLb7HsLYi8VnYgDCkKpJscFqfoBn7BphCQo6czHhPD5tPYZjrREhcKmeR8",
  "key2": "3TTprQQQfJYRvgmh1qLnnGeHNiDDe6jNegPqspNkYLPipbRuGGCWx2ZtgRs4m3ZDRzSaArZJjfRcTv65ZXUSvz34",
  "key3": "8fij7uqocxiLpBbVbrJwfjXQR4jKtH8RZ3o6HH2Z6z7X21hBDSLmsQjJZoGDqXH3oe8ecYqjJxDddctKjKsGfAm",
  "key4": "49wRvP2CGcFkbbLgQGFSY6h6KatfBXNS5iuu5jXf9bNEaEvk4HbXLk8UmiH5gmQK1A1o6VVLBML5n7xAUwWJhVUp",
  "key5": "42P2AjWieTYTfVHgjddbPapQRhkEBnqngGTpDYhV6VyeasjeXP3AmDhH32Gya87byREqwXvT4cdcXnS9j5gF5JoN",
  "key6": "4NBp7Q7H21mcRptDC8K6DEq2PhuKhebvdeMqVhvdoUt1ikogjG79qYcLiksgA7HjekLpN2eoEZkLR5VpKDg8U2Np",
  "key7": "58NfQKBTwf74mAfsusNEFNX3HsmiE2cuvD3dQeuadhbjLDmjh4ze2FK5x37P6YLMAdgtXEnuwJNBMwGvjn7L5qfo",
  "key8": "5hyLekKgKkypQEYaFpYxkADBP3DedpAADbKeE9QhyoFoTJKindULcM5mUhzddiBQXtG18iHVvRQCb3RsTGPiszBF",
  "key9": "3DC8tGowXAxqVHcTA3dvqDyHKeDJbVZsZaAWAn3CxccnHVUkGm2pbEzn9oaDcBmQB81AhKreamPAL9UPbp1PAw4a",
  "key10": "3mBQzWrj7GAr6s5n59D9i1i7GjbTCQ7oMpx7g19AnC9cmvcug51WTpKTkQ1GW8XYLwcTkqX5CPSWgm6uh3JfH4Xo",
  "key11": "4cuS1Wt3PxXSnT936iRFE9pKmtNt2oxDGPXbnWi6f5bp26Z8nQBiAio1F828mnEL4iH39wSA5fnkSgR72JFBHYzs",
  "key12": "3mfSQVvapPas5LcPRPsoYUn7hhSHeh5xeYNgEJg2KgnZokYV4cPxGYvqGA5RfHu57JM5ith5LAei5xPjFTaJMpJh",
  "key13": "5bstZYps2vAscgDRVimbTtt2HHTVVfkHzRdsM3btzTLbMzvLrNArzwDYKd5Kam758R8ANWcg3i8zbQGVES9FRBVg",
  "key14": "5rK7Mm2NBr4N8tsk5JVsnJfcYRrvCWYFH1LdJWEd7fGWkakr5Donxtx7fMpgQePd91vzRR9YxpMwCZ5fbUkPmeKw",
  "key15": "MCPjyhGTVJf4PMVbbtKPcazkrhKWPHisTUK3LXABXEe82jENW8SzFxhJRWC3Gc2kwNasuCP85vPg5mdqUUYsmXX",
  "key16": "2UZvMkpHhvsEnSWxkrD8Mhd5jXQ34pBLN5XMo1zosvByyrYNgn68AiekcBF6ohCH7jC7Z1hSt31UAqQEzovfJCjq",
  "key17": "62oVjm3A6Y77eL4cv18yzkXU7YEsFy6XTXHbbxfLLejQRjtvzLAZ1MkgMxpMfaSEAKJ7zkBNm8qKEtpgSug9s7Kf",
  "key18": "33PfhmJqq5Jzquc73SpomvsduiSDPikapftmgKHsMKXzBmapSUuhyKS8tUghKgeAfR8iU3qZksijQYg5meAKWohc",
  "key19": "55ntm2aDqkc7D5Gm8dYgNbUoVF5XAnBFLWRQmg9V2vtMYBSUZAwxcS33EBsKinugHaGMbZpP5TuRLC3i8E3vLNYs",
  "key20": "415aWGW4K8gWVVhPGkGJaQQTEYFuso2X4HVnziGw4oZturuqwrey5qSim4aB4feQiHTCDwS4AX7Jrdy8MmbqpuYV",
  "key21": "4XS1vkoXuSzd4st8ephfFZgpLYVb4NRZBzgkva2o88Hj4bSvX4ZNK9qW2kBesmmWJE5DWznWNSu851jpB1PUi9Po",
  "key22": "4rocn8fjU37tcSKjHWPqTVyvq57RCnvHL6jZBZDE61YfAeszkqZzVNPf8xrrBtqNrMq7ywsTYTYCXtLbGSTGRSs7",
  "key23": "48TTLQRT87jVtGtmnas2KHybWikLF4X9B2GScGVKGUUM7q2QSAUh7oA6vuUF6ZxA98ngCRaEQDUjrdSZG5w45Fnb",
  "key24": "5uEcRgyJD3goDTFQkUtSrkbwQUKK95kA7WEa9rJknjUEvCEhGsXbtKxasZpkDqQnoseySG4aTvVdUpRduUUgpBZC",
  "key25": "5Eg2Z3YUpK8G35dvVKA4PX1GFPUiCXLtLTCxdqZuaR8HT9daiGjHGxXBEY6GDs4i6kWnR2ahJs1CB9AfjfBpfLYN",
  "key26": "41am9cp5AB2zYyV7TnHb7sRzAKDV1UutUobztNwHjLfGArJPwAFmncmNDzAMcXbaR3hRLqH1AnnKzXCJk3ttGPVa",
  "key27": "5hKY83fRgwHKC3U7RmqcpnTekt159rQYpkpNZEssFG4YpD52wE6jdkg7wet7rCbGy7tFHAGiMfnruSoLSVNyBzKh",
  "key28": "yZjHNri2EdaoNuf1dq1w55RXEnYCHYTN2XHV7z7fRoA8DdiB9FCFaqbMVkD6VkgUkqYbSMmWg5D75kvYv2qpMZr",
  "key29": "2yaLDDMxDRtaS15CyXA3mTpHzpV3t3K55wKWs74qkXvVZWPKijVkg87jiKvmUKWrxkC3jUeqKfwMv3xzfQ6bbRwm",
  "key30": "62uHnowRWe55HRmTqGw4eGcD7Z9RWTdch3aiHBFkZNvcQEdMinGfhRGgsEVQwLduk8zZiw73gPFHK6gAR6wRiBns",
  "key31": "4iFctC88m5Bhzn8N3QRYyUHN4jDuG8rgTzyubbca1q5M8MtymytX8wxR7hrnhKjprrMXBCnqt6sGAR5FV9Jf5iCM",
  "key32": "5ZR3zB1F6S6jVTWoRKEXBn98x16MBHMng9FtuuQm39mc6yZDP7UL9TjrQNszrfFa9EcJjRGhVrWzjB4LNWdLjzb3",
  "key33": "52vjo71Ls8ar3ScTxwqGHRPgHJ5NRhmqiWLzC8gK2fdpEYziNrkfwTicCQ2qqL5BhwTyTfQ9XopLnPtdbkapDvra",
  "key34": "3gPH8ZkwiAu1TiL2pFdzUgBiuimVgf6KCZa2dHNpYARfsaHJMdw8WWgaHdCkBLTctyVdRUaumPSHt2GJGpjGMyGJ",
  "key35": "2e4tuKxdd1RPBRjbzZ3SvNJRnxdZ5W7LfaJh5fNEzgW3QprtwntJkZw2Za4Whg4NWwekesg76qPHGJsMkdhMjhyw",
  "key36": "2Umsnq3BVwPQ9rmPB1Gv5pQMmBJrkuwHfRwZofFPecFGPw8weGhpYMoSdne31hunZ395qJupLKUGRDF1agC7KVDV",
  "key37": "5K7Z1LebBUyvXSSzfH7Nx8gB44ntKUhRoJ4RwECFMGVC6Zae15Gy5bYR9qowTAWBPcb4CGq1z2rHUUhRChJvCN51",
  "key38": "2Y9P71GRoGn5CxXBPpcrksnnMCPX2bk8PprtnwqCeZ1CP7m2fLQR85hz518omaCuyHrVXVihAivqdgHbpLW8aNS5",
  "key39": "5ze1ETwgsAxvYnqSWmdKZGMT8D1P4ZdYprkGbqnVertMhCSDLVfKB7dLa32pbhdVswXXZTVqqRvGVfBpzeSFwEum",
  "key40": "3H2BaHuFN2g4JUAcFbYspsCAbpRxDnwvSKLoRRSHTEamNNYVctayebEmCGWYc9JaoppsM3HpvL4kL4SAUW7w3LAY",
  "key41": "5zWs1a3bRRDP84Fp3MgPKsBcrjjdMJABspt44X2FHgDFXZoZ5Z4aJuK6dQY6TVeUpTrYmeQGFCVMatEztnhVLjWj",
  "key42": "S1KSf996iFerToGhNacAz4qLFysGgfujJRMXponXWbUhie4vx7qptZvjqyCBb9f3xYitZaqrimXBsCKNmciHi3M",
  "key43": "5YpN4tAUG8N9Jy2YKzrAq99WR5Dez8uX9vtBWmbSc4EEsW75PNwEHe6CMhsY37Q1JtPn49CcN2uw9rsGtWt5DeCn",
  "key44": "54RgKpgkUsnNmoMqffiaDsHvs2LEHuG9Ss4psGy8JMYttnyJMntVQ4xtasKhfjwVbcbyyX8p4NVGnRkJBy37HuaJ",
  "key45": "5AYqG3NsKDU2FzGTYsL15U29AchcHeYyCi2DvaGbHDCEiKJ5mwxFCkdcopPKDCE9ev2nxjGpepmeWjU6c7jJAyQ",
  "key46": "4JcjgX79qYAs1XgotDpysGicvDyZLt1jwLCFue2SRv1FwWCXoGq5pbFPPK8kPxZ8Q9VAcVphftvACW49iwyeNaMf",
  "key47": "24y3WYBc7ZFYTmZpbGkdsLBp4vbNAvn6gku9kMPAyug4RgmJzXbmXVbtsC7NJyBrextuDfcRfh1NPrNF2FTSs5XR",
  "key48": "2ttPsjTpBtotEKdCGajmdVmMRKip1TyPBrhTdjEQXw5icqPWgZ3mzHnU4vAK2yEug2FGG27Qse49CDcHXzbZPepc",
  "key49": "2H3Tg64smeZ8ZbJynqktz2UAFsYsYEakiH7xN3gZyFvcfTu64TzToEaRM6iZQkxYn2EkiVc58nwQ6XsrECqVkAE"
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
