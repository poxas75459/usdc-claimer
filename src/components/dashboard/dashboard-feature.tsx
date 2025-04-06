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
    "3Y6nV83mhXdt6MdsE8z4hdfFRsNS52GEPXyTArMCmmeMJTCvQ1AJwyM3qiPfeutppN7oUSk77cGrNiM2ioi8eHmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pt3K4yRiuWZjdhPW3WYa9uw85EtzQHVNKVMzFCQCvTDh8hrma7U8fCLYTzDWYsvd8dGucxyZqe6rpcLvBsB56zd",
  "key1": "fcvTZxV1brEtKDc9MKWk5wJfWPxwfzenJAjRDb5c7cwdTNBotEswnrnoveYc8giZcQmGnCkEyRKYu4N7MpRhCGH",
  "key2": "BdVAmeDGP3ttAS1CiYqDdeq6yGVZtmPTDDpXcJ3Ynhm85NvizqrHmACKig5PQ7LMDNsLJ1w2KhA1jEHjrbdKj7C",
  "key3": "2NQUwXUgmfgHA6CantHdbcDkuZKaTQLJPrj38CJRWnkpVEqPwSfWzYr9b6wJcKeoPQpUPvC1bk3p3NSB4SQHAA4r",
  "key4": "4D6aoknKhZ73SfW4SRp3Z6vEkBQreuMirVuXcVr3BMNniHUoVoYJURT4JA39J14hWzZZsJV73F46hovxbPaBgH2Q",
  "key5": "3VzHXHQRDQTRGPR9EpY3n2vZsrujRbTYUeNZLdEyxoshJaoMfo5kKk9yGqfRAuaXodQEYQcW1CHQFTtJksc6kG54",
  "key6": "4LNLyhCEV1pfnT9LiVMn2DxCDdCi3hgtmtM4267maHm5s2zBbfQuUCohNhcWz4XstBSQJjdk7GZ1NTFfxCuMycau",
  "key7": "3QZz7TPkwoCuPBBavdv9SUncjbboRPo8f7xj3kMDRCsiFEfPaTdUgfX9eZERwwaYTgjQFZzmSWx3uzLETXCXJjmo",
  "key8": "3R8U3ThBMpGt19w6UmkmAbaaK5TMqBuwf1amwkzVmYWbEDc3xRdV5JH99xQAixuPNTc2PaQnyTAMDKykU4wAt3g",
  "key9": "43ebuiEMoZ8FxNw8ZEe2BnLr7ipASs13AzpL7FaMKZCYpvheHcavMffpA78BiP1bPHoZcFYPfyWJHTnmCrCjnK7s",
  "key10": "5dUPHziRcjmtdrZ1KsAQk7xX9A55wgMnXDQSQUACyHVUCm9rqx15hyZm4ZExbdNMHtDoxfjU4CsgjLTzA5CixRTm",
  "key11": "YxgcxAhqw4FvjqVmikX9r9dPh4MwiZ132TTJQBVty5vzwbtrfzpFizwQ1bBKUrS2RTNyUTw4Zj8Zf237oZkSnCR",
  "key12": "5j9TWkdqQa15ynTguv3rU6FKHtJVbsM6FKvkhjD5iXAaHJrAbFTTFZt9bvskQRTXgNgXsZZwY8tCiM4intbDbcnn",
  "key13": "8rPZLc74w6PB3arfVaHB5MjDfYiSVjJjbFVFboAufe1zKSLr4PrdpNNREWwxrcFUTzy99v7VwZqtBbubiqsBsto",
  "key14": "3sFC8PHdVJvYrE5ZfXkY81tZSWjtMbJ6TcJh13cA15zySraDERs2RyesPjVuihdUeQ4g4hfiwLvEGxK13oivZdXy",
  "key15": "YACuVfhQ1EPRrej6dYTTY67w6G9wsyVtLPFRyexa4bbbAR5V2fQSWyB3w4amYBPFLxJ8tvkURGSMFeRFeAFzzQT",
  "key16": "DEG1tJrXqqVdvDaSr49eHhEhsAb84UPrvaUE28uifaSJETUVupnCxe1jcj2dtaRDfvo5an5e4zYjsxn2jMVeVbw",
  "key17": "2yh58aN9QhaeNCAJbiis8hWAcLxKuez1a5d2j91YcH7mkvwQ9n8b2WEfXvzBRYKpVro1gN33qE55YEUzMhx3PgW",
  "key18": "5HPnGX5k2yjUrd1R5vrR1JiTJNpGabmYyn5EYrB6ZsrbAFAiFLEtNsnTuJrFfGjvardUZWhLH5bt8LMmiaWP2Fr7",
  "key19": "3wgoECWGVtC8J3gwGZVcGQEi618gBhS9FCmzg7f5WFMG4MSZq8q2njDgRjULG2KeFDbQ2aPdnLbxXbJ7LbBeUpp3",
  "key20": "2bCqnVV67UdP7yFAf93NUrRE8wU8zzwNFx5Roa3mgYUZYrnP9juxoCer5mdNh53hsi4ApdZ9nXfKaDAq2kNxThHi",
  "key21": "3TBzwWotYhUgSvdQ3FBqsXSkRsrpFLvLE1BWNstssELzGdtj3kw5xMrrXo8nw1EJokPVi6QshDsS1MuXBbCLdW7h",
  "key22": "VvzbtQ81qhfPmQ6GjhpFY6BR32zZZhuqsXFHcWevSHH8syFVwee5Ws7B9FBSLPSUxiGnKQpJLwVpM7N2DCKvtuY",
  "key23": "nWAvGL3dzkKjMZyWqutRPYMEbfgFaxKLaFvdsCyL4VDZgF1pST5zzosEQvbHpNcFB49CkHbTaW7wqp1vWoJq4uL",
  "key24": "49t2FpVxgZft9om2awhTKozqdfWF1hBnmeWwZ4ubqAeaQiym2MFA5AEdA2RmDBYakyS1MvCcukdbau6tnrXDjFLw",
  "key25": "4kh96Tqg2MuX2iFRuspq7VGuXwYRGMUr7jhHRE6cKctBFWZjJ5apsKS3MBC1M8ySDT9k2dnuYfbnNUxzHF9tThgr",
  "key26": "52PfhDJsv8Q3ofbtYYjEH2AFktDpmmhPv6BNGYmHD9gT2MaBxgXWYaLmKpKmHQXqHgy8mQdfjTSqXJ41BBuJCP8R",
  "key27": "C82Uuupwy8L1BNjswsFvD42RbJ7Kn5XbTWoHKjRMj7WftLoiZ8Lb4MQxKKrrwxd89gohzk6DpnwG5kJ3wCQeMwL",
  "key28": "5kbcZHmJfLPScmdx9JTfoaMvsxf1G9PuaqcWwb6YqCriSEjsb1Ub6vd3DWvHj9bhH3aZMC16H9eY1wEWBcn5jDd5",
  "key29": "2PNzsv3y7eE7k5oMe1pvrqThmLm9UTsSQ64WKzxkxpfLHbwUtgEZopWz5FhauyP8kbvzy8PHps2SfVimyaAbVWGq",
  "key30": "5fVTAny2ifGEqzEs3Xzm5i88HMgtVZfC9sG72HUi6Q1xiLQpZAKPPAXJucjtgMNFBSqsUpyKBGqCeQ6A6KFVSitW",
  "key31": "2B78HT5kF7qmrUKU33JYLe5GpEH1HRqf2upPsJhrieCM85kaWyzrwxqJ88LQGpftbRpNKXCYqZJJnXJCTpDqtB14",
  "key32": "5X51znT3zHXLbz6orfJ22UFHY3QLV1xzMGCVQJH6HXg9sK5EJedKNzFjpe7EC8cq7kWmoTpk9udaNDr2dnPiYcVt",
  "key33": "2VMJhp3QQskG5AUtj9V3kCVxwMqY2J2TCMMM2nK4zfwHMXgyFLqSSasNCfTZvAH1yGVorJjB2H9ZSxB3CgqN3ghM",
  "key34": "4fsNKEWUQaWxKfbhp4aNpcaKDj651a7EowGKiiYpsv9zdEi3d5MU2K76TjmtBWnPip9kxo6WeH6zXidGk8QERrpQ",
  "key35": "25QorfYCUq3tMTZqSF6q7iGHBXrsPRnfrupUYRdoiQ4qYao4SKLbm8fs6Qdx2s7VZDGRGQtbZtBMDenRaD6i3TCd",
  "key36": "5TZHQraQzhjwfp1yw4RNXd445choNWHmWQvvZQnALHmjZgfhe9tsRwBj8Mspi5aX7r4hoWLCcbbRcowEYxFEWziD",
  "key37": "5UsW6R6YY1YuB2FtwvUSuFHXZQaTQRYjSdsRtngjQJCYDPFd4nn7haYxobHwn2kk33H6LnuV7tTXuHyoPk5nZ86B",
  "key38": "3BYjQvSksvPUKt1eFHZ3pho1MjSJqGnHRV8qt2kar3FiSL3fQwd5m1MeHJM2hc6dYrgY7YrJnxG8Fkrk6anjBTBG",
  "key39": "wRgYBwuw4dnrznLr83dZTbMvLnDKUtEKJGbP9eBacJdCq9vg7pyTg49kgrYGzHUKtbGdN4qein7uvoxqvxGCR52",
  "key40": "33wqV26aGgoRf4U1sdW8GAuFbHww9LMFaFAr7qSSfYpByFoAtaRPdqg5BT3AUFD6z57U8ognNSeNxwabNtgNnbnZ",
  "key41": "2wZVbTrFAT5TADuioaxxsHrsH8hWmtTGn73RZQdSXEEwMkMmhMsaMJsT6cFMEEqPQ11vyDax7xFv7jnEh2KPkcsN"
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
