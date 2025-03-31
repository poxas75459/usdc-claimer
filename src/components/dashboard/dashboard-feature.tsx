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
    "65YSpBnpjD7T8CebDGQAQJo9sChUtqC2HxzqQkq7wEsnUS9G3foDQiea1pbJSw7DDZGpq1rELupwfuGatJkL6onb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQp4epiczQwW6p7Bs6BP8WaQghmHMbcfTJKFW1cEKLeVvAANCRaHn8XH19WxEe3qrvhuFTv7HdyZGKDEG3C5qF7",
  "key1": "4sqcyNug7ibJmCbGjcBKWutV55caaPMbA17A8JhS3giNFE9CL8DVmyQsUGn4ww3JwMJUzdErXtgyspJwVtrh5HhJ",
  "key2": "2hrVdh7f2oneqqaGszfASJXt55LEVyiDGNbP2ExhCt1Eqk51rtFsbMBLSiK8PrSsQmHbW9VYciTyvu9pSi4KFSjT",
  "key3": "3mgvgsLgyg63VAvJf99cXC5PhVD3k9QHnXytGjPFUZ1mzDiaCQkWagDa35haqc9iibkwv8zPAmocdXTBb9Nkepz8",
  "key4": "KSNx7JZGDhj5z5HhdVjrcMUHCV2341NP9rSPfqDkd4hkA537fJ2Ej54p8VUuhEjVkY99g4hL73MWJcDdtdG8asj",
  "key5": "5UL7FYmqGMkNWP3yfhtX76aLBzuNt1gjmgnpMWnTYrr1rcTyjuy8XXZrXabVkCeFeRCKdJxigdpKzx9LrvUT2hb1",
  "key6": "5qnP2p9CFXg847kiw1byn6yMxhbWnswZuMvimmnnFAd96TCLmqkY7QqKsTdTc56u42P3ovGLwJ3JKoq1APvZYQCW",
  "key7": "5MYxWDxVKqmDbyrHNGVw9MZ3n7ZjbBxJPBqt1Scu4GLavizXUT8vTBBwM8FSwG6pZ8zwyJxBvzdzimoMQ5UnEziq",
  "key8": "5Xo4XTpoamko3swbV1zxLhzo1yhtURA32EdXChRzH141NMj1PWx7UiNNN69jWCQvncSV2J7nk5JAQrYhQXCxJhXY",
  "key9": "38yc9XFyhjU9teN3XE3XPdpTFFn39H4d124jzTVYmh6noYYyfenaTvRJMz2KVv4nAMt6gXfcg9NgiNdRWqft5cWL",
  "key10": "47rxs1ZxGa6StgoCqu6QpjWhnTruzmWnuLf5eNAFU3yp52UTbQhady3peU2Yn2LMGjhN7wQJJYtuwV1FWGZMoLP7",
  "key11": "4PZn6vigYyYGF48dX9u79uAkXeWxrCtG6NMipW2DnTGJDGZCy2HrA5hy3nuqc5v3h8Z7mCmiiq9L6zQhB6zBSuSw",
  "key12": "3MEGgfCtSYnD7Ri4qCPUzPRazcqP1dq7VSeiAp3wzgt4HmD1Mwyhdf8Q2VR5EpFTxJHAJwKWvodAYWX3bavXeMjG",
  "key13": "pR6C3CUBCLXoWfUSR75cHDj3qV9ccFWFgEma2gYtXoRc3FpKMAfXs5ybR33v7CF7UsK2Z82qUn3iKXW53r12zbr",
  "key14": "5yVxDSXoA8mBvq8kJYd9dJAzpVKTeZYMRmr4LJ9iBG1G3nTcennRtcSqsHaUUgU3TWca3qcDj9nA5vkLKZzHZg3p",
  "key15": "33BuSthur7MFTpVRocL5UfYvAiegHWLhAjHwKEkLSKnp8yS9q6Lh49Vpth8Db9VGjzwjQ63Tf8N9nnCFEV6cBdsc",
  "key16": "4fak3MTUbZbsAsXw3m84w8YZJzcrQmw5Ayo5mJBW6Ws2Z5SGL6bHvSFR1vmbVrcwmRVjYEusJ4gczYSvWMZMG7hd",
  "key17": "3XxMZ2kL355qBvZYbEvyH8hDBwnDWUJatx31HFRj6TXa7zcQEcpUpyzwJRMBFjTYVFbXVKxQACxGK93CaGok67FC",
  "key18": "5QVbh4GfDieUHdjPTYWMGou6ALR3eyAdqsCzsetA6V91hXfUQnpwXsYNhW7hsFg1w4GXjvXn2pGrXf6E9PUifJBw",
  "key19": "2L2kJnZ8wfwCgzH4dkSFZ1ru3BoQKnxCavBg2Lc3wm62qQaF56y1YVFFXRBPSzujxd7gUAHSQbVYx7xMWSsxnVVF",
  "key20": "4p94rpjrkQf9zGM7oiyQkaeYrtnsbQN3PV4JFcZs4msXhWT36YQbbVYw5nYwhp1fjUUsQ8ZnmDK16JCVAHKfGDYw",
  "key21": "4pQtgNx8zBMwCzogmQHJgFBeV4cTXyPyY6pkR7Ms4cC2FsMb7S78hM5QrwvAQh4AuMM8D8GHViFsdzZm5eVnPZcJ",
  "key22": "cWuQUC5gEvM3yT47Fkk6zVgqvHFRTE4Hv8P5fAFAnUNFY5WWNA8JKcSgENPwVegEwvcmKzeePwnTNuMWc6yc7Ss",
  "key23": "39dP3Q2Aeqh8oHWLQ7ph1Ty1qAY3FSKXdiy9sa61KwkicgYbeogn56jGPeHsb2YQnKy1QkWeMk6pQTvk3kTKcdxK",
  "key24": "5MrJzUUVhBt8f2A6wXzh3LxDw6TjYD3yX9fjNTDmxAJzdhSdLmcteUDpqNGhyfErJmFoM4AwnKLk4Q8e9PACEZJ5",
  "key25": "429uRB5Jo9noVF593Y6pVzkBKkCVujbuxWXx28itAZmUYhyLv1EjiewLoi6jrjT4J43rvcmQVyNvULqPY6yvs6iV",
  "key26": "3zM1mCkwiBWbEZEQvymex8ZbjrB2v9fG7kNACJGt1dn1QtnRyADVUxmm2uZE7pgWT9QCEiYCkekR6TzeHcwoF7fJ",
  "key27": "3ikTgnt19xMHhZDBYG5qnNYvBbiVMfomXKRzLGNHKtZPksppdaKojSQiC2xcEfAnCouYLkZiz8FLXvopM5MLXtYU",
  "key28": "4bqf9vn48YLn8fhMEn5mx1r67CcBWn2K7eudRTnnpsh3cP1SzzTidms5jffgdRYHXtgq2oB7GQ37TDo84hN4Lzid"
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
