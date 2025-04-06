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
    "36PrJ8kJs61f1bEi9xEnLSjMxBMMAz4c1mEsYrpoh7PC16mj7QwDDrMNQv9FsEYRkhKMgikMSu2aXkriG34bo9b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKN5WZXVEDYzNub8yDE6DoHFGdkph91c5vqC93BFnTcZ5FBHvwRtYNJHBSNsjy1eqJQ1hg44KWfMJqhHiUkJGRw",
  "key1": "42D9JXFS1gV7nYeP9mUWbjS775qbuuoiRdFqhZrXUsj13A2PuLCj9UKzSMorQQPcTR9NQK8kfLKQ3KQV82RbPAs9",
  "key2": "arumzqyAn9oXeZCwC82Xg6ju7KEZzMqYyPyJ3Kk5u1bPuWySsFEfmme3MeAqrYCaNAsdLfzDJqixWHRHs3NKMrd",
  "key3": "5mvZDGqnK5fzo82DVE362k5EUDo2LbLq7nw1rcmrZ18Vi2pr1XDNSEgtfZBCWv3xuu4Juoa94frWx7h54Ef48y8k",
  "key4": "65fukm2D8L6LQfJdFSKTnNhuqJzzXf1jtCBAaGhpx9FNpj2uHYcAdeKS7M4rSmq21U2EtXkXCSkkAkERT9xqBfAM",
  "key5": "3oGAFRLm4B9r492Fbjv17RVwKWnCbY9FPJP1NRa4AENUMZvBe3zvJMwReSbzkiQNRCD9WZ2j7N63tS6j9zXaqZXb",
  "key6": "536GqEhW6MjyPsvrNVxRJevVMDN35dQ8aVRRo9sNEdvo6hEV9vwNFLe3ACtQEUWzBE3PSLAJsapiyiRewLSs498A",
  "key7": "4TAT6osFsZz7v4i3KdMuhYjj3F7KXsERmbadTbzd8GkwKbLWVKSCE1kQHmXkUppqRuVVUnLzmUjqXRC1vnk2Cgu3",
  "key8": "4sN1aAmGuExcyrR4UNp8qabv7A2BHnrpPvB5epiCCSjJowhrr1vRR7DEk19WEQdmtBcobZN4hZgugMSGiUWWWJME",
  "key9": "Q1vKfoQ8KfRzxRdYSvr3fy5P9dxdKfKRy8mat9DWhNDdLrj5cqNQVvXDVsd8B2T5b1AKQ28SxAPEpDeXYEDHDNr",
  "key10": "49bekDBdVUTKnmd5GBs4rZeNfwcTdrT7VKYiAVqVPv76rYmwdNEtwW9aewV6XUSLpCEPU73QhTB6GZvjfVCg31FP",
  "key11": "5KHh1TVQBRoEYoxqbtoodhqgnCmmTdykZKGCq6Y3F9haeKUXhngWbprHz9GgLwfTXA2UNex7s5CFzsuzejcuBFEK",
  "key12": "2ZDkoraFrBoCFboR3C8HP9MBEY4iM8J4Et865AwTGARpcFHaZs6zgHvuEVBGPeNWANjHJ1QzwCie2wH62vM7NKbe",
  "key13": "PzSkv5r2ChQHBsahdUd8xuRJQFBdws9isqr7quBqdrMR7BMyZQg6c4hg2fi2HZW3NEE4dkV1uUqmrcD5mJjqpPy",
  "key14": "4hBLjYU16TMsSazi2cmyQ5HgFZThPFwcQ15uWb7jKVsUkeMYwkyKRQeRbrpj8r7tz1wR88uZxyzCPVYpCAgwMgKY",
  "key15": "4Fuvk6229hMTxLwYaNo9KF7sFeq3wDFtE13mXxJNAXC8ocbXRV3faRiWQESwj8bRa2FryPebaxZgAA7BZzjxwSvd",
  "key16": "4iYFRDg28mGr97RTtGHjCAG1n24abWkNTKfCqBcz8WHtiTUM8hprF655tx8AEahffKQGGraSmE9bY5HP2ngJkfeR",
  "key17": "4EGneW3ZLdez3iNZYQoeQG3qfNj73v5XeaueBwTKRdXoMxsdMgaHMjg95RVhz8niJpuASxehwP8nGT9X1QfkNZon",
  "key18": "VhGasiPKJ6LeZhLarjC8fCpeoS9R7hRRLARkApTwo8HmJHHuEAPvrnmQC1nJDwUACky8QzGmxuTTi4jkmZdgHBd",
  "key19": "2xLZ5woMwCsawGT6QZJxpqmYo3d736uUKBb5gi5WETqxf4zzYZieZUnkkFah4jTYxW84CsPtM2gvNyTZqzgh8y3X",
  "key20": "DofPLw7iM3EFK5HBWhYcuDd3z9qAhEBUM8UShHuBHPT1T8kPnWBQq4D76TayE2P93dZv7FEvXQTj3TZetbiEspa",
  "key21": "2L1tZVwivRytbsfM59ezFZYDxnjArSb76zNtaGD2JnAiEhghCgHSU5pxYaSHBDTBejhdPzcU5C6rNgeWSRUergCb",
  "key22": "H9faajA4nTxsS1Yn9SoBb1KNTPNFrZNTWeqWh1rKk6KPNk7BgH9XQN1Q9iU9opRN62fMn4nbw4wy5eB28mBFDtb",
  "key23": "yPTZdkS7g9cMnghwVbGph6a5MpbT4WeM68apLCvYZuJwXB92z1oMo9neEoCjdmJfLSYFJc7fLgEh3myHCnHxRRZ",
  "key24": "CMGyXSotiygbXXTveEyHuwfiD2r8VjwsB24MqZYQyvmEptbyzR8T7zwCHquqiycJUGmUnacUrUAzsrjiRReVKu4",
  "key25": "3BmH7YfkhCqV1RQfN2G2TmPFwn5CazXEPQj6A6KJGfTzsCEoNeAqVFCd4R3MxUmQKNkUidGnRs7PtsMYEtS41kjB",
  "key26": "5vQvzixoov5Jssfx2YosTKe3iaQvKPCRHqCBDiuHmEGd3CknTYPxXNpQ5xoeai1zwbAkrVW7euZZWYTcXdciVLsj",
  "key27": "3rmJMfKG4U4ytjv5AEa6WB6NrDxcd49bACqS1SXzWXZP7Gk58Mn1Jy2MQN3DJedWZWKmUraV52a4SEkJh8qKzEcM",
  "key28": "3oe3ebxikaxqrnow5JzXik51gVWCbpABkDBt4ADT14QWw2HX8rUxwXJVZrqYnFHnVCoEUZJXhDEFxbnkVJYeriYb",
  "key29": "4GKSrnynENeLjwEsZUqzE9X1vT7f9nE7fUNgjW2uEkoKNE4adwge5m77rEhdhgFF84vkvWmYRkTmRG7dUkdkZtBR",
  "key30": "2Mcq2RdC68WPCvDWNwHw2ALZZWe6wt2vYfYoD1bnL7TstSJ3jDNayCt3ab3HxmEvVRCuTcmpYea7pszhwTmMGBzF",
  "key31": "5etKUhYBai3bp9T9jBZmB6tguV8pbPWboQorRYjSyk8yb7hj6nVyBzpXqrcCh99pYuwHTz84oGbxAJ6vCX5eWEtT",
  "key32": "5vabuGZnkwN7KSzpTf3szEMmFWTR1QMM5prrkijibXuAtoThJDwxSRWx9j2dHCm6tV4R66qbJdFk8eczuSyUVfgJ",
  "key33": "42qV5BdiaXmxPqYedYiwLMnzqpxCWz361ZVSoLsGaYKSqHGPxT3gNm9MuRrHGPqHYjoaHRrwwyRVZHCJ3sXqY8HJ",
  "key34": "2pGRinYsczRhvZM38PTf1Nb99zYvkouih7rN5882xys3MLAtmHAWU1H3vB1pyMBEShoNEayRuS8Tyo8ifoLHRpZc",
  "key35": "57BGATi9jQV917TMm2hFhuHUx7xPdHAniPqzBpiz1NyjxVhVWsE2ZzfLwyeCQu8hfPvDpjhKr16y4kGzqVfBYSZT",
  "key36": "rf2YTqPpq7K93G7qA1o1PbXjHoCrDNuR4DegHpzRaTyuWC3dvBTjCPDYkfEUmWw4C7n1wVVCNFF3S3bonMbq6iH",
  "key37": "3pcSt3GFMpezpCMyP7mVYFwRDN48YrGwEk9CJF5Low5Np1MK4KwzvcTQsedLymjRjwHgM7cReQMaMwcCTm2mACNP",
  "key38": "dw67MHfLc6Lq7WHoDUGUy3k8JCUAaRTGJzT4A52oioD8yNS9GDKsk1tn6mAevyuKa1xvdTfF7hpjd6UEKfKudPJ",
  "key39": "2t1cKqnCH5CPWsZQrUjroVw5atJFhGBoMZmMbei9bVuyxjmaWzhgECNVa6tcVitfCwFxfXxYn6KQxmY6cTbE5QCt",
  "key40": "4V1xdXdAakw8tV73EtdTEvjpX7LvRps8XeAoHAFgj2SSTLfVz4BGsFWg8xZacDuWWZwJLCkGbGWU5UMTxx2NpPPE"
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
