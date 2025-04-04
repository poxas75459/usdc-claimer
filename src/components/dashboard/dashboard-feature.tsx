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
    "TxRMzmd59oncPXdLPfKNy5hN51RaavoJZEUX1mwwzP5Jg1BWNKAUVdssJ1ftEJZYnHiQsG7no37RuupyCeRXL6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N9LAAsu858xojhQjBMduHGrVuEpS94QdDGmFf7jcUBCJn2A9rd2ChhHVz2xpcdp8oKAwCAV5A8R8Vf5kq6xGgVk",
  "key1": "5wWe4Ad52agDfPSPzQxLTcD7frZHTN88gBAciiNbLGFeUxfaz2wMtkmRV84sqeH3Fcjkvdgdg7WBdUVRGcuVFSiZ",
  "key2": "rVaZ4M1attw4GXgshBoUH3nMEFKyiyi2xu36mHRWinNrhxHCeyv5AHLQo3GmsHWCWPUavugfUSkCbLGtZNUGLgv",
  "key3": "5uWpVYPT3SNjUZ1sfqKZPf2Q8RbviriE252tNPHCCWWBivPL4f6oGRJGsRUfc8pDUSMkJnSTdMvVgYGKv8FCwaZy",
  "key4": "31uRynmE1LQfswQA2ma3QwjTpjavj4onw2Adg8Pmf4shEDC2frae4qfs9C2WE69kfPJB5WqNMgxgEsLAQjRUMxrv",
  "key5": "kRyBBXuSPeB7SeZk7cvog3acVEF9fmFfVM1jv8oGNfbHyzaoesiKxK9qcp7BcYS55cuweCSJkGo1atNureY45cu",
  "key6": "DBgDxPtB4cyhLW9acSmYxvU3hcT3qB2YFhdhX4KMk1Zf5quJKA7T2mwpJkG9QraQBDHBa4yPLBsTp2a3QSqucot",
  "key7": "tikHaxJkrpos57aQwPgRkkyjEWjXQC9wDUneKKumNZdgyLvrHVRki3aJ9Zn2g7EmFVFzbLHEvsQJpLax6gm9ANx",
  "key8": "2ZTyuWpt4JbvN14wk597xo2QL3p1JbFrxyqHC3VX7QQJMehwxbFyU1Nshc5iDWu5cZrwmoz41vBZaTHH2j3QHdts",
  "key9": "bXqMNwaAB3TVdLLNmWgeHRy1NVNkHTWHKS2mxKjUhzpFCCxKYHvQWC5JsGLcJ6fJDDkjx7K39PFnuekwCV4Jjxa",
  "key10": "5drdSzUT4RLXYvcW5PCuRprA239wvWYJQbfca7axWfbVx6cb9apLLMkerY9XUQn93drMLjo6HWn7wjWvcjYwSFFT",
  "key11": "3d9xZsFKojae5AyVUbg1yF2ADdppYt5VBXvKxvkMMm9cMEZ2XoCxbecXzonVu75w6v8ZcRVpCJ8qNLgKojKTZinV",
  "key12": "sxnvqdnr5ddRj1AZjLacKDna7ZiQ3NM6HJNHuJuJivp5iundbc753hvJWieG4DUcxwsuTv39scfrwJdoaZSUGTE",
  "key13": "QcKX6RfKzBNX34Lf5DMNkDaq9ioCiicetUdJ77N5Lxr7dR6udXNUq8rqojsNTss36si41k8DFR8NeAJQhTW88hn",
  "key14": "2nRrmMctpEn3WoLk41EKXVNYzPPykWyHHnx1UgEJTZimQVMKaZS32AQSZNiFQkcNfASYSG8SMth9unhqbEdz3THr",
  "key15": "BBvmZqiXT9sui9afupVBQAcDvL8edRCtzEqEPPiroqFaLKHZXKAz1KUzqyLqQivXDMPsmuio8TrjAdiNCvRat3b",
  "key16": "3VqST2AYcSLZPWdVegWcsTwHXkprPTAsiYauRBcrhde9Gcep6xJTpAks7TXvLkqMqaY5hdYfZwrY8Tb4zhzVoSBM",
  "key17": "5eBp7qGpZwQi3jHgsTHPjN7d6cSLEcuE2MNCHwbn8wV7RKhaExuKzHZzcPJyUtUZTqn8qqm4chnqZo5sz8XY1vkr",
  "key18": "3jKDfwJWDu7Cf36h12hdwSG1MnvjxNJKUkZTJm4LF8io8dBPqGFT4Tggpn1ANn6DigKscYBEJBvAg2PtvJQGqY7X",
  "key19": "4xM8JEHdhyTAEPZ5d18fUppPV1xevjMbREJNMBSiugVYnsu79FyY6TdNWVBfb7UCkNJhMLkocaS6He2uFS7GU6HX",
  "key20": "usTC7hXwxaY8weoiPvstLi2mjKBBwCG3GedH5r7VDajpSCgGk8KRKBUJsHViGSq6tSnoF5X9RsLXsm61XHwUVZ6",
  "key21": "3EnFsWVELAhjNUFhsvinPJQUpWd8ZkKvCg9BnsPGGNYN8m54mCakteeAgnuqQ7sgsTaMRB8JGi4fhkiWooiGajGF",
  "key22": "4UQvwT7zbQ7yd4MpFskLp8KdpxK8t6cdJWQAheCWkTvM9UAHXQKf8mNvodqm3ZjUeuQTLhDtFKGUHzyu9YVZwCSD",
  "key23": "5cdG4Q1LA1RxuXWCMSYpFXN3WpmRMsG5Qn35Nu1G8crgxgYLS3cr8fkcbNvQ9s58BM8mUV6H8KPvvPBH2CztAKPQ",
  "key24": "3nSQCRBCveJPDf4Vgd9ch9Jsgrk27cSPmtL3dFXdUUScRJBt6SVfiEKQyXGhqxfdXXs1TN545StoCsKk67EK5KBV",
  "key25": "fkM8iB4a1GVYcGqNYoYC6yLMYYFct8AYmuVWnVHAEP7qriZ2hjhRLLFzhzD1LTVVbWyq86yc9iopwxuLimUvxRX",
  "key26": "5235hJqY8PaHzLUK8DYgaMHYLAhP3tjE4H6H93D9kCwtaFxp7H89EXbhr6HvGdfuFn2yPwC6bkHxi2dAfr6iRyKd",
  "key27": "2mSyCcwH8JJPTJsfPM1okn5ZE23LKM6iHvMCswkJVpPh3NdjLRQuFQjfuc8fwZmVoxQebDo8yJtPhGwSJQczUdJu",
  "key28": "3JE2zxbTpbtbaTH7cfy3Y8uFP8tgnJcRwEz7pnhmLL8ARKYwZBf46PamsYPBW49UrtCjhMf5NLmfK5mTjUKcdukv",
  "key29": "64hpxQp94CqneHEpeYx9QNTZSFfE1ELFQ7UE3PkdeXaWuyWpPWgRSJS7eEvHszXzrzAY2Wq1rZK9eL7cwQo54vZB",
  "key30": "4zUr5s6fjP39i1AstTNaQj2cSo2G1tQhNJaoGTAGTSREjjJ8UnZWR3DGfkq4Zj2bEgZ3kTYEDmCtJv1SdZ9ytr3A",
  "key31": "51tR5c7FUyU4DQqzehuFp55eyrueMoTeLA77vbYkeczXzcGD6FH7YpX93BBKyJn5vmciu9TLP2ChkKAbeEu14iMC",
  "key32": "4mHRTJPzhVQQw5E6TT61y918KaSAGLnRHTzDFSpFPBK4B743EmZHtRMMBGV8RQAfrzKq1Zb9SvtNNZqW9sVuqL2v",
  "key33": "3WVxx2L4yXRLMULFm3hpvhcVxLhAam8dAkvBrmgjG9BeEt1cmhahmYXuhGezhKLVMAms9C1LbhRc3cgkd7LoxGYk",
  "key34": "u84iagynfYr5NpNPRYqDKPCb4NaEd58LJSUq8gnerkz7EHnvWdd9pRZ8YCvbX7vgPJyP2Yw7Ta4SoEUBPQ3DEHg",
  "key35": "3A2rrv1iGec9uFkzaE6houxmhxv5havPDyoPn2MCjXYrBscUKYLZ4BMXWgwUwUcM2zxj6uq1u7nDB7ZDCJBBRxrf",
  "key36": "4ggYnVVqtuaXc9DZ2eNRoEQRhuSn43CRUFLr9omk575cfV1i9k2cxjdEhCgx81X1vX16jY9go7kTk4sWmeU5PTLa"
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
