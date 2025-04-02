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
    "2E7uMJ84Mbp6PLMnKjptpRmwrtrufP4KEVRr9qJVq46C43bJLk77MdDkRDpENbwYmM8yDvrDikh2Q72NSQKYdZdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPnb2jfgnZ6CWXHry1B6SH4NhXZAwTsBGGyXcY2jvmSGEtRw3TjftgsAW1AfNVVpFbU6Ym55g95H7FWM8KqdzGj",
  "key1": "2dWUandvfV8t8aCrBzdA7G2iZ3WzsC3fLCZzq7koiUuAcoC5BJJBFEHyghhyNAnhVw1WuxowsyZFjmhsxuk8DgwN",
  "key2": "8cnBeaix8JFv1gGMaGWQXrKrMHjkd7y1KQFVS9z5ukFLaxGDzukQrthL3wLWSKd1m85ZCKCkTQvdjxbUHmeiXxt",
  "key3": "516fHjq5PKbwnD7LEsMNKTSj1nwF6e3JYvioDWNsx2d6uGwDXzwYVSjdCdJjZczqJmUFeTak9yXc3QiCqnDQ5jDp",
  "key4": "4qmWV9mgDn5GKxck4gFYqw2ttRYAmA75xPdyboDy3tK5RfaEwMY4nYi4h1gxtf8SRLp6KwCyg6Uc5774ghqSaAt5",
  "key5": "59oA5dZdar62bHH6m9Ky4M2fhD682D9WqVpP6akyroBHTLKmU6dcDr9avn13bNn25X6F6ruwaf1GrEyeAmuKvVeb",
  "key6": "5Q9trAZHECwTV6jzevGUvgwhpPLFhEbNbQh1TmtuMHQaTFa7fBUScNv59A9i1T7iUhgDhVm6YMCLbw8Gnj8k3gDM",
  "key7": "3YTBV3qBq5SDy6K9fmAXg76hYNpKp7wjtt8Pg68CAcmGAXfduWHYmMwwMjV75zAh6at2TYJrt2iNdoez3wMAEepW",
  "key8": "4RNbXB3FvvkVkSA5iMjVHAqvdJCfk1sZiyq9tv2BfVCb1HNd36BMZyveWBPsxSqfYLtfGEXbRRtbsdTKt2wDCFzL",
  "key9": "xgZ2qfzVcZpyq5egQTUvM1et8DbMqaXoWA1ZopRmJcBKkTRKTpd38iLkTMZLwW52LaMsoCGMjRB7PRdnbUfPEgD",
  "key10": "3Dm6zaeqRakAy5BEkGBHjQgxCtAzhF2JrLpBxh893DKRn5BG6TpNy2ZN3fBQRnjmAbwKpFe7FmuQC8HZzUtyRBTY",
  "key11": "5w2jLzAGJAbdnPvFJM1SKZzRKePTFHY6tDQ4wM6u7Uqt2XtVhQ45r9XFUqnjuwPDTrEJLuZgdpxYdRzetTFyaXMa",
  "key12": "h3LecoCvrEbV6WA3HdyB7MwRyZyi9tteaB22UKUaDrMiMHc9CuyqpvDLHxwmiN9FStwMoWxpFF7V2cobe3jVBaA",
  "key13": "3yT9dycKqUnSxY6QVa6S6ZbLEfkPtLnfJ93quhPJt1XfPE82NTxWgkYgEWNjqnL3SYi6JgjcWmnhNVE4aSd5cJQq",
  "key14": "4dpnzKp3k5YanktwRymZV9UKRxHiNPCo7Hr3P8Pv7nSE4kmXuF7T2uFDdDstnaMbZ1ZX2rYBFaZc52ci9wu6d7Xz",
  "key15": "4gJiUFKJXjyhpcK46381xytCQJb8P2H2zeiA6jRJJeosW7gDpjQUJCgLHwrHt7e377B6Q56ccEBkEMSd2KyHKEg6",
  "key16": "2qgnKx2E1Ssb3xt51covi76GfthmmpUvodbQVajqpFHKmmcSa1EL5pCb97vKMX5Kd3aW3Pn1KNj3BpHQnoePvHgZ",
  "key17": "5MzyvK5i4eHamKkcRvyRGzMksj5R6PBaaf4KmgqssgmuQHymeUdfKGqtYm8LKsJMoAZiNjaUrsVGdvqeST1c1xjK",
  "key18": "3vWSC2BbK3nwz4gv1wt9D26Upkc7RPVXQJKQ4ojnWAWzhmgGQvEDE2xhTcbno8fgKwZRLRRvUhjGxhJsVrdaEjGF",
  "key19": "2Mnyg9XLJZxURgcJB8CLWxJ5xvNoRoZtysKhcqRe6g7XNXC1TnoPcTHZEwMM2c5SXhXuCnHTK8Nn3BFdmvHs6USj",
  "key20": "4fCp8e5L3e7spdWEqRXd7LJh2peBQQP84LRaJZ6vGebRogZrH94efCheszNqexorCka2McfSmyPJpQt3e2MXSfYq",
  "key21": "4p1QrWtGEWDsTNEJagiNGKLL1kWw3jHmHTo7CAy5w3oPBrZYE6i9xLaUnGGhMKqi5CKjhDb1NE6uJ9fHV9knKkzu",
  "key22": "3qwWPF7H5Sxmoevifp3N1tKMddJPFxHX7fwshyiYhYvWYCHWLNxizEkG64yRK8c5BcuL5QUPeaZwxhVdd6DzyAW6",
  "key23": "ZH4seV4edxSFU7cf7uJJeyjuC5GF8e4Y2y14xfU4DAXgFoXLBtagwM1nWpf53dhZMZbjRaJNEsuBPLKUstxkNN7",
  "key24": "cEgjMFVsvyTGyov2LzGrRTWfe49pi9EpHP2Z9bGUoi1D4gbqu85orH5f9YcLrLH8LP1x3ziQZYb7PtdWaqgMFfe",
  "key25": "4jE6N6uPBbHPcqHzKSKXV4Vth5YNPGEi233WZdasWNryiepC1vh6KuCVFrJR8L8FXvzrm9DRCmu2Ac7y3RBEUKqj",
  "key26": "4eML5FYPmdGw8LTWw2GbuMetrKUt5iboFYZsKinC8V43RSkYtzfZKSBTS3ngngXU4sGaiS8A9cvg96BZtAnQZBXv",
  "key27": "5VPXnhCCiT1idwqSsfrfRZeqy5QSXv7GqNGLkGN9YRaBgN97YhVq13vZtFfNADrJ6mFZkPzuQiwGubDBo955d2tR",
  "key28": "3RXEp8zpuNthsAnLcanfr8AP8vnNCKqFta8dh9z8YxatBvfW7XNun93mLiu6B4zeL1v2d4nyVLRhwrcXWQbyYG5c",
  "key29": "4rSHPmMj7uG26Wx1GzWt7vwwH5S6N7cuT9Diz5RCnZrcZuPozJkxWd9Q6L7iC2JiAEegfhEgCp2JjkrtYoa1Cqne",
  "key30": "26T26xRg4TsBovjwaqDAho2cqE5iLdc2cDZLuZUGYfWfEozBfqwsaE39t2iAWdCqC4GjN1cAbmsp4bezmPpbVJ5q",
  "key31": "5gDe4uN7Gux7kxMNJmrWNDfC7dzCQhaZpGXEDWNYarTZuHamrstTMRok625Zn6QvmLDQ2AW1R4C3dWEbK8RPcdju",
  "key32": "3ccXkEVNKRtyu5X8bStcaramUrL2iq1TSbPV4qj2VcbBjgn3hHDurHdkUa1XwCgQcLbHzLFHN2nJyDXwBs7KFXUv",
  "key33": "4Dko5ckhxsPpGWvQgkarQtsx5DrFnysbrwCVgsyVzKb6EZmW3xeg7xeWzRn8B35cFY5TNqfvj3Tq4BxUpeBna187",
  "key34": "GiJSu8dzZUXgTn8Ep9AdRZqrzovVKkGzbZ8Sbv2dkWVn7RfvRzMSXgdRTD3QqG32953GKMudfudzdsq8Z7xU4zK",
  "key35": "5cSPbssSvBe1HtqvXboEiyvCHiFq9KLQ8zBT3tSvF41uT54J19U6JvpHQeUdDDv9hAEku6QNRzVtnqZMxLpoJy3Z",
  "key36": "5m9iMReCxQmiq2f6UqAxmcNMgDe9buBH2z1qYzZyUE4FyKev1M9iZjKDeayWLg9MFfmME5FrP6VFccbN5ViUYsaD",
  "key37": "3tdGzZkwWdc6nVRmtwqFaaArVZCrPqKcP1yKSk11X59Umxq67PB2GfHSWJEGNRotHYdgch4M4Dxk5vGvn3gqK4ze",
  "key38": "358CuPwNJFEn7hEESAELAeLC8fdvfpERYcnLBqiX4PRWnM2oe6V1FiNpUb7h1k8YWpcRCWWGstfvC4EKrPTQR1Ek",
  "key39": "5J2Pw1QP8UvraLCJVWmYLhrXxGNbqTjS9d1NLz9j4LJB2fmWJkiVmDzzUQ8ZQMJjj3wsi8o6oya9pzx3m6gQun3N",
  "key40": "44TcbHotWHAcqTS9XoxtTmgXmWHgmo125bfQSL35fxyPCZz2uUEa9HgNwfk72cPz6bieCFvbZoEjj4itVmJ2qHsk",
  "key41": "63EMicShwLDkhaHgnjHuUphq43dMXWCfv7ppyo7CSkjJrko15JkfZ6yXC82AThLVfeXCXEoNDfz4a3Eb73n4jTts",
  "key42": "31AiQy63xzpFUdyDCMR73XesUoSk5hDZVgAn7nA12npN4mBhHdvpLwLQMz4Lfvra7qHhLydq4Bv1v8bJFhxV6xTf",
  "key43": "5wKKtcrQgoDqx1DZguqDSULKxvy7BT3hMJsd6YoGxKD5a8dMepTnxVLZwSP1sE6W76qYc27o7GhbYiwQg7eDzjfc",
  "key44": "2mG2dXyekE2sKmEije8YmAbo63Xenmr9c5gqJ1P4oeRouGuhSBE4i4yUBjGMihesJ3KGhcRM45pWr9mgt4KV1dtB",
  "key45": "5fowW4Cp6RvCKd7cxstQA6virui9DXVU7D3hyrtbVfwbvG8t2hCaGLW3jqU9dmZPfMLUHsxja5PQzXAPFsshRXsJ",
  "key46": "FY8QZAhKir1VEKM2WLwQvikNRCBL7CppwQS5QKQJ8JuzvK1KAuj14XwEmnYCg4oCX3bq2Y1Gks2m5wPnbSUTEam"
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
