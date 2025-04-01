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
    "xKpGVaKKJ3mVR8kLVt4BDSLQPYKJeriAZz9bF3aKYgj8qFyfigq3nZoedkkTcFYE24Av9Umti7Mbv4LoNqwxqsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oAbNoL15tbiKpUcD7vXTFjzzi3Je8n5ydZQuvMp3USv3HEECfDWcCXWRbbL4Kxgq4WoQyGW3Ds7hzZ1juB5wgqz",
  "key1": "2GAaLYMpa5pnkes6tGyLmwi8x6YpjxGS4TV3T7nGSKB7TLjeVDpMfe3aZzYtpKsXKaDuwn44gsDi2qXfqYVW969d",
  "key2": "4UcVbosjoz7N533vGxaub3GS5Lf1DXHkbqKJdLY4DutmbF6wXY4oh4JhkTSqQWBTrJrR3qeRntkMWxwmDYcprbX8",
  "key3": "3Fhi3UYNYtFzcLHQwArHoccMuGn6opArTrVySXU8eFDEdnE3gMk44JjNfsu2zzA53G422DfXMGwpRtwbL7SE7oUD",
  "key4": "3fX1mUpmrb2vzYQFCZkxbEayZEgz8A3feHRNn9ZkmBpJcr1Va32WEeYJgFfL6bjN6r9SttzJSoa6548PbkSoh8Nf",
  "key5": "XDfLxMQevebzwFvnpTXdYZhHZq8etg5oe6QpQP2aSZASx46oqhmG4r2bgWqdFwduF4LSAMdUtXgMN95GGEvycLz",
  "key6": "5ahhfdhUbSTmX3HjtgVSFLpdSXddZgPNR6rUkn3HKDpEXcVXevyJG1re7tQqha1RdnjZ4xxkZthFjFg7jbvU8Q8Z",
  "key7": "5wpiWGQ8CXz3iW4zwrxVxPu47fyF6vyEHH6EebRJbU9JhAcFyJoPCBoAzy39yjvk9CbjRxE837cCAPuH7Vy9jxWc",
  "key8": "4fYV6R9ueUqQn47oGC19QmQASNtBUs3masrWvqxBXtaPe3encm8K8iwP9F1zRQ6cxD3FSS3MFki42tdUxBVRLDgV",
  "key9": "3zgf6aLhPe5avDhXoFem9GzPMuMgddhU4m8rbp3TB2Attwi1LfCgeXQA2WfcCjv8oury6XzEstfpmbXUBXVrMGHo",
  "key10": "5K7wFB1yXnXyM8cA3eioT6W26QkL99tk9TmK78BVmEz7wXoufbLwQeQan9EWXhNHH5xDoGmwpjK79wgwGuHLwnmU",
  "key11": "2bMMtmUewqNhs3J75CoQPSi1GrFVNpuS6kSVLpfQx1K8WyLXUjqi9HddMSWxVRrQDYPiKS8FsdfhtApUDDfSgYVh",
  "key12": "bff4ruzgAMvjEt2GapcSFhJvoXBoF92Gi15m87Cuner3kMj9t75h7pQ1t91DzZMGJG2Jeodn9QF1D4TWUw54119",
  "key13": "5KaJgAV2Nb5kP2jf1N49irraZHC9fUXxiScgp4VsMxHGsvQUNo4AEM9MXmV6WismcoKV3VGJQ8chDxJyncirfwZG",
  "key14": "4kX8N7c7S47uQ5ni1DckiqmAz5M1upM5z6eqy1GeKxnCsfY6GXKd9povQEAyHg7PWQbpTwfdqiCkrhn8jWF6AqBV",
  "key15": "3rzSddZpfxWQN23BVVqEQGAWgBgbLT93KePo4VhH2hzXHj6gDbkzd9918nsHdGGVy4rBzYuSGPb4gtcpF9ssi74",
  "key16": "2uZLHScopBCKjmPggNNaYPqT2h1TSVyM4ryhxP38xe16NsgtPh3CH8HXeggUxEmJ8NHZJ9B5yHka6CJkCTeJVqsD",
  "key17": "2emUZoWbopvxfs51MdYvAoJf5WXEj2uaXN7JhBfwpR4XVwaAqenSfNtZAynfwLxpYQ5RdFcd8xc5esFeHtB8pccS",
  "key18": "2TRj4P5JgvahdrpzUEhJefQUpkTjBcA9oqY4ZaycdMvXApzrXWj649QoqypGJob1XAaT7HPSNHxvFBxTCRsqGxJ",
  "key19": "4Wvre5HfdpcYoPfqmfEEeLxKSN8LtCtphbrUhRd7TGZmH1VEdwGv8dUpJsEWoKSLdWr1ctebQW9mbS3C4aDqQEmw",
  "key20": "2fsp8hiziV7GiDCo2mFTNrFF9qVPS8hwk6m2jUjsXAeTD1MSZsGAPWHowWzrNfDuYBytoPm6D47RHrQHN54VM2PG",
  "key21": "mfMCNR2dua3iPgjnFMRcu5g1r18iYNoMe5HxVW8qoLqgVxQcRfQxgdL5UfJt2bzPFmGEWTRtMT4HYvubZ4bYAqd",
  "key22": "4NTMZsq7tYJ37r3D94xf8Sj5RNYwvgJrEbDnmzDKhPN5WvviYmkEZAFevSUCmiKfuRV9NKnvh1HzbzLEobjpTaft",
  "key23": "tR3yxX9fnanqAGpq2mXNniSMcUTYGnWwZWa2hbXxA3CWN8DnckpWdS72AH7ysCEFnHzLbhS5XG3XnV2pizhdUkn",
  "key24": "5gZC95iaMPW7e2EtMukngmSnkc2sAVuJYGe9ZyQCZfdknpCoNRBpBvJKuSjv6iZMx746ddh5s6gnqUkfhVafetbe",
  "key25": "3XPzJLjGJrHgx3DXJXVXhVFWQpWFHVyQ9h53LeMgumetqV1592EoQJkosM4CkLVH8natwtGuJwpLk6F3phgn42Ja",
  "key26": "4NQqvQhiGKf1mHZoTHK1RZKAnrujQJM8sdbviZcsUSk89zaT4S1RZxU7CAHMZfM2GUmcwmk8SmqxRfdC4zXYio65",
  "key27": "4RSiowScqCTEfgfiprHNM5PBHfeV971KbojqeER9dzCT9qcvZdsAEuMwpNQfNi3gw2dVcpF69hgb67RDHW4v4T1J",
  "key28": "5vapDmUfohohaSRhaCPiG79LpdsPeYd8hK6noqmbQbL3Qmig8YamPFLXYRmmLrPr363AjXzCdNLw2qFNVJZANXAJ",
  "key29": "5FMtTLdYATeebs19u1MbWso4ute4qLGDctRvM7Vx4tHTXHndRT3bEhM26hNGQYJ46R9sr5KEz9o3KHg9aUiWkyt3",
  "key30": "4P3NhihYY2EjggchudUPoYGnP5BpruZWBKw8Pah6ZaYPqxhV6evvQbeLPsJDw48v8CPpeecgSva3gPirfTj9fz5q",
  "key31": "5v3DmLpSLmrifMWUeWuKKgDCY38nbGJWmAyCoWNHFFhTZCRrkscm12WQpELsuKiD36FMLSTgcYw1Lq7sk2sgELBA",
  "key32": "5jP6k1ABPdwaYTTGspCT1SBwdzm33cs2YGuqa8Hk4CfxWj2TFJYMbuggo1ZRNKh9xoBvDpjdxQR7myfcPiSRjSSp",
  "key33": "w4t4FvuhfYKjg4tnBDjjJ3aHrbb4qVfYSWUDQ9PtLpdrKC4oxPP39z4sdY8Qi2pWhtmSn5cfPHcu6K6c9bHBPuz",
  "key34": "2AFLFdjZk4NzVgJSxfkyDgtFb6xs2yxkeT8saFCihG9AHKCoFSHRH33ciMg1iLTtTiu4gbneyyU1R4BsTHFBt5r6",
  "key35": "2ZsdzzwqFAX7cXDE6NP23PXTRSxafM9nBcEN63SLPdiQpXZPzHdxYwVyEGUUxX8eEPJMoCgFeaAWU3B4yt3J3XNU",
  "key36": "31PHAtU7F8otvnUGfkt4hWkPqv3QvF9pTUntgo4V6eRyKec9aMqoozb1jkwKLdDFFixCykrxanCf3A5tkwB95SGg",
  "key37": "5yuCRmxmpv1jbnPSfqUEaDD4ukQeTgd2SDzRn4ivLEfwFuNh3RxdBva7XUXctWN2EBabzbMbt6pmwQpwSMMvs3zm",
  "key38": "5jfAhofbEJfHSgmheGRn4sSmAiiR1Nn5RZG39VkMA1jroesdhphBc2ALdjR4BTcBNCciSt6c7CfH8AFnca2meGkP",
  "key39": "3f1zgREoho5Bd6WzcfR8hdtzyifMHdoF8zZa36NeusnPrQovkpaHJrR6STgZ37w2gkam24fxv8gKjdKgCwZos74h",
  "key40": "nAAY9rY9VBjKdy2e7UWEWcJ3TZLmSn1PHtPpkciKdRDr4xiQCPHDcFJGg9Cd5mjXqrbnFLR39NBqKgCQAJb2pqQ",
  "key41": "2KBDqgVFLYZbqSsPx7NxtNDdDArbQNsu8bLcNtzbBbDZS7hoXYcvECLg3Sc7T1uZrAFfjC2jZALYiX8yntdPx7bf"
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
