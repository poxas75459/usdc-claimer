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
    "63SVpM7ERLERnReTXrmqGKdHgZJuwzjS5Tn6DdztQuXhG34tQwoDevbforpKDVbJWwMb1eApZdWrP6Zx354PVys5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CrYKYuUWEwrjjXGWGJqBUh3Ys96oX3LDvBqiiqZX7kdxCHZi41nYgvrkeFsPLZXezZLK1iarFYbdCSZpEYzM5K",
  "key1": "2Susk8YnN6t7nV5gyNzrQ7mZ8psqkUHcYPDfJbK3Pskw5zExhWfo8jCkfevp2GeMgfpLdSaAUtM1tuusrUYVRKCH",
  "key2": "4ujtKn2NKsNqhoDmG9WyrtwQWVQam2veDkDQyjZirEWpUzEjxD3AdPmhf45spGfzAAt5zzLsRcZsY88sy8RB3YT4",
  "key3": "3Vx94TTt6SMjQTNmgPz9x7MZV7QxR6yShhJ6oqB13VUeV5xx4cWfFDv51JSpSou8JmxJUJwf4q4XHyZJqXffEH99",
  "key4": "3xuBhzjm5paqmiNjxHMcYK7UeiNUDHkRsn3WS3vGhgq1uaLAAiYHihEJLPRXygWHFLwf8WqhKkrSrwNQJVoxCPxP",
  "key5": "5AXA2Y4jWkekkAAFVYh8zyNqFUjvm88cD8hRD2SmnNnsoPt75No5fyh1vGdkJ6WpFS31V5hbwAS1TaQ6vy1UcPta",
  "key6": "5L5YCPTvNWxekYNxfWCDRpAmb15tjuDeXvipem9LJPAJpmCzyiNxgvWY5oPtoYKE5n1bBdBnPhemcnkvKE9mL58P",
  "key7": "3xnViEAATsP4bJwouDNozpz3dS83X8Bjd3q4ypdesGCtG2MtxfHBgTQeSJ5E8teTVTP28cUiRDnhX5hdJcNFfX5s",
  "key8": "453oy1rPm9Hw4mpuez6UESa72nDP5w8RQjnsMGXr6mZymFR29dzfg3uurccSpeKWbcQmbS3sbnh38JUMovRi5qLq",
  "key9": "3WAFAUgSMWjDJof8x2gzKBH9tC3ZU8p2yYKNiq2uAcFaCLupj1Xpa52hjKWZHxF6UTWAcJ5RG6LmVdzURKMEmk3K",
  "key10": "5BH1LswceBvDYVMkPBenHFR28rvSJqAYwg2xY9QRDfBHyMqmNFQav3aNWx2zFsZnqCDa7r98JoR98b4bS2s4tcKK",
  "key11": "5LSkZsRppfVBqFfPRa3p1tn5CbzJYHZ9HNfzZCAYr7swpJg3cq2E7Vk5h1cXJ7LrfECdCcSkS59StRs7CYDLZVp8",
  "key12": "4Vt48tGqxEErecZUYwgE6c8t2bSs7pUbPiNZ3sWBaT4K9qNfvtftFfBkEX6F7KFhWgRF9NNSCFcTp1eee3BA8AMv",
  "key13": "51X6hP73nSdRrUnwfcFHHR1honS1AUREjY3KSZvqUwTfLLievLoZJ2TrQ8mw7vNXFrn1dfjNYKXzbqxVnwTaYKNJ",
  "key14": "34PdjxbxXxd2cwatR42ffauFyAKxjcXuSPMzZUKLUvUh5janeu23Rpr7daoooEqnpj1Zvm9gVBSZs74w8kqhwm6k",
  "key15": "4XZ42kUUW1zR3DHShrbFNesuUYQd1W9Wz558Cu5jEwPkUKa1CKFBTuZRknV73eDaTVJayXcXeHbuioqJM64cTs15",
  "key16": "5VJZ9W91g3BhrzHrxS2jhYr6AYffN3QHd4qv6UBFuPx1EummPYLKQHrZZMwyT2chAButWUsiKf5STxRiWfNxPRNq",
  "key17": "3jLgmsQY3ZXd5ScR3nJc53RNstY5QY4cvM4hyVQE24BD8BP5MRyEGa4uv39oBjXQnHJDmZFa5kZf1HMnyYasxhF7",
  "key18": "5w6Q2kUWHY99rhd71aMaRFQJprbneEDEVBB54oYAgRv4RNDgVFuqktN7RukoF6gVi2WaiifijzS6tqFQ7NfKWBgE",
  "key19": "5g7hSaata9w9NKNNFBHBvkTkRDRosw4rvUp53WjpydoQvB3wmWWyqs5DMqhKbTHQzJWAQHJv8SmJxDaJz1JiDzQW",
  "key20": "2791kmNjFihk1EdENque9aVwCaHYZv3cxFGbVN6HNibnFwhWemFGYwZqD6g2Gbk5mRbXdBjkr1gc8ZeaHRZcp7hU",
  "key21": "5jsWy9hhYvP4Jntz5YxDouN1rCTPPwZvGe7H1hXA7mCBicQW2ognAK6xspE15hStELQF38B796o7NEkzA5oFkzEG",
  "key22": "UL6kmy62M6EAfUpNeLFFJFUn9mfVDcfofiw14cFpNdub5NagFAEx4TmTEYiAAQsoSPhpo1HarH6ztbM9xnBHZQn",
  "key23": "2TZib3DPP8XWGgRy6ZUjV7FTxi7dUjYfx2etCQ1ELfcZjEpC6vrh6B4fRfcN5HHFanVksm3tYmZmnbY8VQ1pn2ij",
  "key24": "4hbZvLRSAEv1qcwfJcrPVm4qQahU281HQXsbePNDujrwHDHx8hJCAe5F7reirnchjDfY3kmYHDZeKb39wk9VUS6G",
  "key25": "3SaoJ5zsqGMq4NLeTwSDxY7nmtCs3E2JqBJST47eTViY7eegGP6RPfHQsKnQjETP733xKh2Myq67nvJ7CNY4gPMK",
  "key26": "25Wz4RpUeUTjngni8AaBDLyo9kypEz9fLqe8hKCTN8ej3TnvdJR5QpvcD3MpJbiwyesvr45BSc5Gq2NbmpWKaxCW",
  "key27": "45qSzkZfpUtc4AbBMUiZP1dBPfkjnQ6WUhjVi8pqosRTnCNstZ1yjqTpopQdHbiYEamfdG4mKWAyuWaNwVEbmc5K",
  "key28": "5mTjsvEJGCvjYfEfuoH2DWTm2GM1eSRfKurkd29MXkFqomuBCmcDBHFSChfCDZGvFRnrkpp6borLWKWqAxVATHCL",
  "key29": "5Kr32UhZbPvoa2HBLzMFJ3KH6ozDg2owviUjxhxF7uPwNgJYHCjkNC8fzQTimMEh3cEyuMz71QjnnvgFAHBRk4vf",
  "key30": "XtGMJoqg8HVPdqET3Jb1o4NDyWhGTa88ogsKJQbsSxKErpwkKmGwFphHjd1MhMhysNYuZUcdQnGm7oenWv9s5Qj",
  "key31": "51q64xLq7cMPDxgiARF43mR1pJYKke6XbpfxepS3y7Q3nRG2rZtHEKDQE5Dgu2rnH79kSjL9qgUiCJeiETSBNBeC",
  "key32": "5i2hHMCBhwcMZ8uu5otaAyVkRPbRzCLJQiwFHnHeaXHbKN3u5iPcd5pFdqVf4UFvZ3uQvDFAzFshRzNZj27Tqt6Q",
  "key33": "3syMDZu1nA8tfMu2QLhLecwvMfPpqE1gAtp2jXuLb2wMFxgJ5NHMdPwQGu6hTmS9XxTp8eirtAx8bMTneNmtzpS",
  "key34": "44CLfqrakkEP91UqpX2bjbsfhW2oxrihw77N2sw3wacmPViyTCg7dBijJoZB4sqHbqW5izYWwFe4TtfBFBWShCH6",
  "key35": "56Fzi3UBj5r4pw4kbwVaEDJ6C8TgosBGjDYFQvuwtVwSmmFeFrqfXNG9b5QVctrjW19faaoiT1po4bbXJJ8WxawT",
  "key36": "3irN7HkkCsRA3rDB9EPvv5bj66Fg8MY2nGftpvmED5iaPqvYkdzK8sLQotfk4jn8zcWNYBWgpQuSBX3JDji9hnrj",
  "key37": "4fvXrvP7w8BHUnvbjfsL9N4dpd8heW4cAtjcuEYjDAEBDvfz9VYS1k1yoGiNjHsmnjs59yCd3D31faDQtX9t2Au7",
  "key38": "4hhekjofXR87eCzjTaDVgjVM8eqVeiH39KNTAd7bnN9VumJYydMa78Xu1vTFzAEXyRBPxC8UqYreSRTgagnqNXDv"
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
