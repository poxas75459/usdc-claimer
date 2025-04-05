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
    "f529X2scPyB5ZYE2pijTDjCroJaGDDcB4RMu7xqmpxMsRh39KGtnvG4v5CqRfYJRcV8ZNxjA1M7LM5Ze3dsNV4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBaoeSnGdqrDFyXYRtaippYEVH4dh9BdpFqtaFZJZS8Q6xKpm34agJdKhrQDbgNNqQJ9YiWAw91172dL6vM3Tuj",
  "key1": "5T7UA5qGbQvVBfTfaWMTRaojg4YNZhjz8jYRA7xZxJRZVwm58bXsh8JmwPRqTsxZH7ZQwALqoCMZQY583YD8zLM3",
  "key2": "4RJJA2fhhhNbLkrhbWj1UEuuB3s4nEJQMMKwheUw8dKHPcZgrEDKEm9Xh8Ko5GQjVBWtmzppV77YmWPxepYBAXJY",
  "key3": "67p3do85yAnv7p4QGqQBf7UNVhL79bSkAJiYEPgoCEak9Xh7hENWKS26BFBGrJ5bBJm45LtMPLmxADS8zmRhmY7L",
  "key4": "irB5pVNf62Knu3fzy83kP2BdMnmmTyA6R2Nwrd7ytkDy1YJRgaQhJcA1qr9gu1MfUYT8nS9tpvdHRuFjA4PDqYv",
  "key5": "2X1MK7ZNzVonC1gwsVF5AHS59L2shakVUiaXcLxWjCEP96Lyn88CZ8EZHmmPLVmTeNL8WGALLfttRbTxjbdQ6Ku2",
  "key6": "QPdn2VgyWoktNUswP1K5n9o7ZsMfghNv7GmitHYGybj8kCKdib8TdtbVRjxguAyoUPbgTt3cxzC3hSLoLrrJNTz",
  "key7": "5HRzdCGKrpmgN8bV62Xzimx1pqp8R5ENkAGXCpnXAnjN53R7SgnTEZ5P2yBwLBQGaKXHs5EwyAnEhJwEhMP3FTEw",
  "key8": "4NwJjVxDyN9MmAq6FFHhUSojSbdG7VDnfYsREFt76yvtJqKYo9Ao2hDHhyLm2pKSxe3EeaaRX2JU3cEiPrxQUvoZ",
  "key9": "3SPayRzDwpfoCUvK6jMRuB2BVUfNSviTSaJouDMUDKPED25J5h13dEMxgdVa43QMEzBLySN9ZQZhetRZ78bFgTYY",
  "key10": "2DY7dXHyqrTUwYYdv25REzz2X1uiXvLWRmmysSjy5DBxqvAHVPzcXX5PPkeP4cmQTszFATahfaGTCwU9iwbXCVbx",
  "key11": "62LQZdxihQkBiVeCJo3mEktUSp5tmZoioi1ozn7csSKwyfZmJhNb1Zgj19mTaX5gc4BrQnz7wfSuC2SVM9uxradC",
  "key12": "3DzrkWsnBKx5MEM7B6xPchzsK11mSDsfLJNcmAT8A2mxpy3SLLqZBZxJ1VkTWnf2HYcRhHiuwDG1K5r1CguBY9PK",
  "key13": "4LGVwsd1rhhFrnnukPbzbr8sHKsxS9u6NnRpHNpBdVoLrrmxd9dm5eWfv8rdTnThqnm7Mre55QqupVp4dWiDEBYB",
  "key14": "5Q6vf1N7PJ65To1dobwgK2gcXMTdLn1NjDnfw4u6r5bAFDstxhx6FkxMr3A8LxHVmqDSHoYN43dE1w9vNEyBHfZ2",
  "key15": "DbDTTPYUPKbF5Up5RowuzNSPiWjxMPiu6pZFd1QutAW6o8dpfF6CscJ16cgjGMKXX9fYhJB42HcnGaphYZNhSNz",
  "key16": "2NqP9tHHRB3WJmMjo3xpmCoVZ3Zzz2GPjmtVF3Gw594MnAurdhFPfk9b3Xj4cttyaFd84YbWa8eGxztFjof2fUVm",
  "key17": "o3tmJ2DcsyWzZxrEiz48oHjhRgzrRzsoMEWn9GKfGoe7gX8Q3rSthbvoPzxpb22HwxURLKQ3KMfGER3wWMC8GZe",
  "key18": "hSY58hi2zMzLSvPWHfBcYqHMF9d71aZMiGXJSFbtkG5Pxj3PBnQPhQkatMMasNUZpn5yF1tL9PxG1GWaPdDyEQh",
  "key19": "HxWU31QPPmzFCM1Q7X18TmpNLFNHJVWBPydhxq4gz5f9XrQk2zvTwVSL3V479PupUBci2zy3RCaH1f3URE1kBUL",
  "key20": "3JZr758WhkdDqRHDfG1BVNJMHbn3YbGKaVM5aNCvRSu45LTrkpyuoKWeEpwKmAB1NazycpwzJALubj7188JodDrU",
  "key21": "3567LvE2fzSxYWuerNmHELVhTvqPSBT3P9zRxt9GsweguUcVehUmTm4ogAWUbKubgX9QKtPVXvuVoCB9NhWuKCPs",
  "key22": "2PWa6Zu7HLCuA8G33FQKtiyNmPUX4eRPxVzvkWbtPEhuLug9tDibXLPTbjPhofS5Yp2c8oQE71tSsDQsaTx1V6Us",
  "key23": "39sfPsSDRLUfYa6jCxTz3Wui3AFmY1VR198VXsPMAAFmJYDxXH52awKDfzDo5aejojEx7Bw9i3cb7q1nvTgcwYVm",
  "key24": "ZHCgETTZUU781wNBwHy6EmDgCzqDACmxnQsMvHuS8NDmT8q9PnFusDZqqQSkD2wRbop2isrBycekS5KtM4gnhae",
  "key25": "4ndCi9rt8JZkkzKLwi4A1N8TbHMYmNpzJUzaUvWLExz79cj5SNguDaGhfws3cWcwrosA1ECr3ujDPj7RcCt2b7TB",
  "key26": "2QFmqMq2qJkBwrWUxKBVp4pCCtW8BBiRi6FGwEyG93gjmGLouGgix6TSc3aUE57rPW9JsGjsQ4k2jpKrvNj3xeXx",
  "key27": "3NQguUhh25FfpAg1gikD8GDu9WSLkJ1TdmSn1mg7cowMGjRNy3s6VqewXcy7eWMDhhVRsDXem7mB4umH7TkCo9V",
  "key28": "4fpKRoTWKtJXjS3Wetzqb6WnfPZNhLPd2AJ5nUbsUbr5sASyGUrAdty8BY9qJs6WB8p1C7c4dntz8Hs9c3oZz7c5",
  "key29": "2GvMCqGw2yev43Ue9uKVJJBeUH2PSohsAbRcu2R7oDkfd8AyHSrSPXQUNhj3HKpxpQZXjpqXr4Fzm8G9j3CtuHWX",
  "key30": "5kLHAVTnTtPop7z31A1hEDRrYziqYyomVPatxmsymkP66S5HrFfRvaUTN1aNrTpcnF9tT2d6GQaXPfdf9oqR5Q2J",
  "key31": "2fCFrQ2swgKyhwtdDPSJvNfbGVVNafwnLtSrAospoFmCoy39Fm6j2PETc6sQQeGFe1phzR4Mhg6NxjsCjmSyAVHZ",
  "key32": "3yNzctSPh9aYbdxima6iCQU4REvkYwM3E2y75Te2vwkt4v79t4Nt3EMS7aK6hpSMkCWZCAe5Xg2zmcXu2uGyrU9T",
  "key33": "5y2UpY922jgfRtfgUDn97P4iKCP7KpKRPbF93xpJhSrxzusr31ZrSdNBfia4NgKup7KJkFdFvHjDRs8WX9KwEc3r",
  "key34": "4jpa7MiBTki6mjuEhLUrbSCz9yZgsX6rYUG3HbmzYjqKxBk6MJBCK6nXX7Rq5FktZggqQSC8WbetvMP3P6L7kQwR",
  "key35": "DBJmZqVRZMfVHqVRDcYGhgxM5wt2BrHCXnStg3t43bNu8eaFVBnE4YdHGRW3aZmT9wnfreXyPtysBJnz5rUyjUL",
  "key36": "33e8R1YqHyXWVS6FkPS63fCRyBvYfGFPs4nfAAT2BNz3d3zSovHusZtoZaPgN97UTtLKEaBJg45TeGwDgLtBFD4S",
  "key37": "5nPUnWNL6mt91jRkVhUjHJGqYTi51xKcTHqi8yKkh2xEktjE3WLYojC76Un93XGfroHErzs1MX8gijhgntDfVUYd",
  "key38": "2zujbt4tLuhQWtr8KxuQ8NjKC1q7jjMaJgPqf1KF5CABgKBsnDXgTbnLz2EC8f9GzZZowWdLgKXCvuRHaRCdgvUx",
  "key39": "4D89as1arw4uEJkNhed1QiabLtss6CDyk9c43KfW79HTMX2kYbNntuBQw7JFGf2gVFxtcQ3r9W3ZhLEvN7hWMmcb",
  "key40": "5tfPb4aw5n7y5KymFzpty6hKp8mfe81TxMeihKshQmLtULus4y3MFixnZ5BAubrn2Q62x7by7gfWZ1c6Twv6VNRe",
  "key41": "465UXp56K8PCDAP6C4hwQM4NsVRnSm7rCz2sJaZZpnPhftGQrrN8eTdQYi8Tf9Z951qf8X2ji1fz64p15cCJPr7g",
  "key42": "2vA336PwtqRqishkgF9g1q6xJwH9cvG1D7V2gvP6WFWHf8dHA3NBWS7nmmXMgzpvqfTLuTSaKeVXy3z73VJ4TwH8",
  "key43": "4vpq4H4s1ir5Qscf592zXzDgnX6Y3KdXhtMv7FEBD9wjjSyiSpvFWPgNiisr8Lt41bQMnkcuq6xFN2L67vEkQDZF",
  "key44": "4sWjhX9Lpx4uaSASoE8j6vNB1B1QDb7LPpoRR2YmMXVjbj7HLKakY47UgemePTfbQXkpudiSrtZRQGHCd1RNTPrY"
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
