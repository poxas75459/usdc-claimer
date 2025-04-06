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
    "G5iVEDT6Yah6vq3NvvchtjXVQbLVVNJEKu7t2ZGtsEN2knrUCYGwhnb9mtmAFREQqoCQiTGwG2dJaa6ktNSTcwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WnDKpsDHXBUkRPcX843CbBeHkMC2QSSyUXx2BbfmuCPEnKknhEUG8McSvnvHc79srEitbhqPY73hyAkyaQcsiDw",
  "key1": "duwGgS1Cthprmoj8ypCTaH2dwQKdFkULhtqW7KTjA1719GsqKnxybhjzAJNNYgsjSB6SJtV3B3VYxiGybXfaP44",
  "key2": "5VahNqEujEmvXAtnm6zaaa156XgN3WXCRCoTC3G4TkMFqPQXahny8HmUtVfhVJoijq8FXkNucnWxsWRHojhnk5Dv",
  "key3": "3Aqfd7aZ5LU6nerSpQ9betERGCXzpVcziPUrnVf5AUstgrJJvXnDtcPJVsyodJZbQYgvYcuT2ryYtkFWkbtsQZto",
  "key4": "2sSFV8jMcuGGtD3WABGLjBNftqEM23MFYieATYX77XXNELDn84E2mYfwHTY3MjkAU2KDJDsT1oJeWFReWhEDVuUN",
  "key5": "31pKLEWfUr4hhT1jSSysHN8u9kihNTSqoZYsrZNuLHBs8orZ1jZZJov9UhjmYoAGs223gPeGNH3yjjtTM2eHxT8i",
  "key6": "4NVag5LEGDgisj7UXXUoAXW2J9a7omahmNkufu89DwLuFJYUZSSixe9hqhZEpo8jFWXRZCsQRmUNGNEy24EPfpSE",
  "key7": "ctAJSYSovPTFQzcPxvVbUbUnCwp1F9k67hVb57PPEaS5DGGUNoA5F8jiVcgDaLLKJ6PjY3hvdpSWDskGqgUF9GY",
  "key8": "5nY4tiMuzGFx1ds3SMqfsMz1MfCaW32euMZU9B9x5X5d22db2z7PHfEQYtwx14KSRNQp3fnwdfEESrzjDisd8QW7",
  "key9": "3xAMfBJfRhEUd6Yp51Czmvbq3ExUwmV1kEgFzdHD1jFFoR5CuBqUccXSduwYjFJ2j4gQvht6Fs5Lb8jcao9Q9Ub9",
  "key10": "3mkxfsGT4TYGChmxZ5XjBREwgcjW1twoii2SNUZWHoUAz8F3qE2B1PZq5Gsgb8sfKq5tV9NuYmQXYuCv1qkZTR3i",
  "key11": "2A16S2d9KHtxumXDdm9u7mCsVAYgV1XfjiNBeLTd4HhHqgs729LsLnAL2oX1fDS3S4RebqycSr4ddR8114qSLWgp",
  "key12": "5JyVytUoRnEUuFpm2MsWPV7psHa7LRLczD2GgPUA3QCDJceKTHzPDCoLnyxbMdifNV5iXuRW49n5HQx4zDoEnd73",
  "key13": "22wwSGqG3GyccaenURmKff1yA7VPLJMRTwAJ9Et6g6t5Wh6Ce5LfhBhpWCmcM8TubGwuqzQ1SQwh7NmYNXyXbZkR",
  "key14": "5xJTpVZ1kPV9wbeSEYV3iDGX7tKPkHvZaqGZzCbdVWN3UQE7LPCA7Nm4XkE8zNk8fWXUDySZu7HCo5ryu9oPagPY",
  "key15": "5zaat7evxny5FGeMBHS1y3NoQiv25onCbrJ2yH4MtQSt5smyNfc1uAeaQ6Ar6Pa1GF3KKRSENk8m6gXCQ6EELjWF",
  "key16": "2ZUGcBdhfPaDgcpSVHkYJrCnRobLnfvUce4JHDNMedeP75mnAk7dFWyqi2BxfQfLjBsrwy6nydB87GUNdf6HVGXW",
  "key17": "2tUBmqTEewDQDWBxiM4DMs2RqKsP5acJ3gcUUnZ89wWNfmvSm7TCcEJHUPNV4Cux6nY6qN2G73CrD4yqzRuYcH5m",
  "key18": "2AMGPSvPRZgi41hNBrVDaJB4PNpAFKzEEdoQFwZRfV8ieaduf3AdiGmfD1PVnCmbtSJ9TTCnHVSDjLbAQkXpCreK",
  "key19": "2hhyCJP38bTtCitzfVqArm93raTPdQNLcPjyXFidqj9uQgesUJXoxJqt63fseAGmt3xFEKQ2q9jeuvqJeePCshr",
  "key20": "4scqvvny2RDeUwhUe9TTFuuV3eAirjVhEnfSkDXRUKScc2owCJBv9NEWMUQYAuSLXUE3B7GqFKvb5efFh5DDjZgj",
  "key21": "2LSMcedc86zG4A63sG718MYohN13eXU9ZpQcz9iXeNqZte6BT4J4oFZPcMDUGYejLVatb92uZc8AiHNfJg8PbYu4",
  "key22": "64D3MVvUJ4fzfrQwBo5TdpusdKroU8XH2E8qN7jrXCrB5VbPsoHpazDxyP43KjfPyyQqc7z8qwpt4rnQdbgmRWV8",
  "key23": "3FCb4ke5AA5a8X65pdDwnYRsQDXni8HCgUQh7zPHkBxspJFy2rdA8gkpPWGqP4cS77tsSDDXQYnF5tPUUwU4uWmW",
  "key24": "XT3RAcUJcBh4JYKBBSQseeGNicAfyvMSyzv8zBxq2vTfSnSbhwLgK6LNvEfk8WAVhT3Gqevee7JTkkJGTMDc1Qn",
  "key25": "5nz9nMok4qhYG5S8PYc4kUH8dwgYqdzsrhBzM3RQmhtGXVFgiDJMmbFSDG6wAM86bkpPNtqwSR5jbuDBC2dxS3Gy",
  "key26": "62DKFgCu4CkxwyaTNKQuZA89L7TXJLMFMr8Vmnye1N7cmFveUZ4KGRcjG3CNFG7FtptdihHgGwasNonMiemfGBZ7",
  "key27": "5x7wTgQCafYyiDBm8p2rYfyUEEGssTdEksgtxJgArrDceDhJeoE1Zwb7QU7MXTWbxWMmEAw6VX8ZuV29vzrrADn9",
  "key28": "2vY2SKrCeUoUtbT5yQsr5LkLSbu4asMgCmXuPgWzYii6aQvyJ8YvdDXoY8oXypUMoqF2VEEbvXM5Bbp1R61je3bP",
  "key29": "y6hBQa4HQLXsdKeFSE1xJbimWDpGuyg8PQe6mNjGgm2t7xSwdp4YMhTXHH7pdbd7CBxTUQ3pzGnysQJ2AzxRd9s",
  "key30": "2BCaCJKo9dcVwaGqvtz2X8ZuE6BKT1ZNbCHHZQ9cgqG5HtaCJ6mJHTmFyHGR3uWyRaTvqeLvof6XQ2QZEN14GMSd",
  "key31": "4XZNGVqsm1Kknc4zVWKbue1XDwXGaZhue8fAWU3YK1ahyDDL9jqLENV7QVMu5LJxCzDHaUoX6QRCwbhZX3du18yr",
  "key32": "2jZc6CKqpWhZtjCLVwsmv7cNc6kqYzQxtaqLWpBDAkA1FkpukBucGy6NvS1Mmt3nqPsDCwJ3bcGVLcBz1HZXq96P",
  "key33": "4nvLefo4VXNi9PA16VXeEXgyoQMryuKD9p1Fd8Liqt6wtrkzcv23hokYqYWZstPA4nvEMto8jTkUg3nBUQSbtghx",
  "key34": "54aDiPk1LsQDszs4bTG8msfffNnKLQzW2qvekGMFoEsbZfNDJKhbrYcPYfupynUN1noSC3BiWEauqpSHTvqPQ58q",
  "key35": "45N5CwKWieCZNujEQAbm2Ce6rSoqNTtWpqhN6d9ppg6sbn264fysKQMab1xwEUcNvGAbv3z8V4591RKXCAy9j4CC",
  "key36": "3PFvjb8KX6y71ed6TLyZMhMFRoX5mv2uWZpGcrTmDKEDA2HtqieXVrAE8EinfKGtPcQ8UyPZ2DhHmzyvrW4R4xRn",
  "key37": "qL4dyWPyaA8cYSh8J4VsrqaHYNjSgnTZxSM63wfzmEJ1bxUybv35LKHJ1wV8jhP8mZL3PhE3U7fPauqvU2fj1gp",
  "key38": "4Hk6cbjXWZE3sLzdA7JNiCMaQsAmXbgogn4msKTycGTJGsrM9mR4B57cnV4KGucsyGaRAMwEo8ob19wpgjvXTzhx",
  "key39": "3X7fbUbFWkan9sTQCfNAh8MHaQZDSwHMD8Wx54JkEJmaTe9k91TMKYoqsuuHwgRBnmX59NxVJkx7o26hi99LxsUW",
  "key40": "3ZjnuwPMV1rzFKyQKe5FtPfcqqT4jJbSiC6sFUZcYxNxFeB4KfV1HAragQa4WFdF7jpJLa2yQJkue1z18rswbeDS",
  "key41": "3SzZApX6XQA36UFJ9SpMV9ScicqcyrrvqW9Vw3eopZNdpNH7kc5FRedzCNmsv4fLcTDEAn2WqtsZPGuvteSBSS48",
  "key42": "3Z3Dkd7k76ewS6Q4HnY4AennA1uTUJXqVi8ZwdAzoxU81UUjmF7CFFeEohgx2tZhxK2HA54d7DFVMvLMmTVAtfPB",
  "key43": "2qBRVCiERqqiCyBB1jrLKBGqK3QTQWhhXKHJvx1wKMnJSUopqdnupeZ9hjfJS82PQxgdYxKGLJsLESsNBcdqFUTt",
  "key44": "5XdUkygqdZeCk5QT89c12KRHCB5Kh1xfRBRydrkZuoY1S2aKDuvrYe6jHQ3w4pfpo2Mjqvnr3NSupHkHpmt75ptB",
  "key45": "2vyTDUhXzmEmREY12rYvdEwFUckEzGf3ttSi3ZcSgno9nyH9Mgzires3ayHYpoMFwCGEuFHyKqsmuotPtWuUZSep",
  "key46": "5c3NozFQR154SW6FQbzGdp29SjVRyZc6bgo2ZdRofmYMggZiuSk6uTcnEbL1tYgEegka1g9ugbZ7atbBLFdcN5fX",
  "key47": "2oqGb7NU1vp6i6VmjMq9YLLoNWKD5AZhmyy9sEN2rvufSX4yqgaGXzyD3MQaXVBaRQAXHZUXonuaqYj2XapkN64D"
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
