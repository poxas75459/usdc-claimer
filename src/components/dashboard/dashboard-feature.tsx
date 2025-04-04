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
    "3vEJX8ATNPXf2EiaQ3RTrpyjdgdYriQpoQfPEgCLcnSyYQSo8o1St6BTHwUaNcK2492S3mjtd2JrkHQGQhBqAFDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjH8DLCX9VvXuUcoYauKoJBf2hWGNHxKVsrsCdaJcBkaaJqdLWmYHodoSMHxgtK2cAN4LbHbq4ckqeiXj7Tc2gF",
  "key1": "2VrBFsRmzegwT8JxfxKB8P5gWzV94wuddAFXWiGDzR4n6AY9pNaJxcf8fiKKWkak4ZmjTbHiRRpi8ZcRyu6jBV2S",
  "key2": "2CPkRCzEPqL1UE49EJ3KiKbuuS3bfFbgEezxRMAPJTzfGzyt9KGSkZmjuUN2n7ECWyp8cGXdbQ9bypNrG8jVA14v",
  "key3": "36CKMXQh2PBgJ5BoFFSifEK9MUJf9DGZuomRN39WFjdRithxfa5mM8pj2v6CjiPX3LTt5cdePcpAvgXpNBPjnjwG",
  "key4": "3Z2a3RJZeuMVzyjfV43acSgd7YAe41wgS3iGSQ8yJpbcPu5jkRL4yDXoUt3Za1fX274ZdGmgMb2fdcxt6GjhX4JQ",
  "key5": "8fJJqRL4fNk4V7Q1pcZt3fAicw2WmnprX6KLgqwjNBKMDUtugknaDfKH6UwZ88Pap3JpvJ47XxchUg3BkMXnaFZ",
  "key6": "4FRuR6HVzGshaktCY75TmeFW6DkQwLuu4fo28tNNWW9y7myswWj7TqqJjD98mvSLeTFbD4jqyiPspzaYoriBas8D",
  "key7": "kTh51sDiHbWGWi63R3aYPypyvmttvXGeFvC2yymBTj6NGkLhkt3SMM9oM3eNrVc7XVqiaoC3K3HhMpEQCtbEzAn",
  "key8": "E7gefqT5LqmriZjvRNdQM2iNXCNVS5eSwYfebcfrABQxLefbyEtFkCEwhsGgtBbERVewGbG2Pbm6UQvxvJepfvk",
  "key9": "4U75m7SchyHCPzsMtP8inVBHW5iNtvagj1rASRbzuviowZktmuH3SPB98WZXSRxDBBvqnYS9d4bQzaqkXJZFnqT6",
  "key10": "27G3w35xYb6mKZVLxBRpGviqMtw97PfcMUHgk9UtZMcoeU6P7tZ73cTkz7neazob5111a8PyGQTBCG2x2sGrgNLZ",
  "key11": "2fFX5qjNYH9cYQTMzGLWDCLaew631VXPuWyBY8maRvYf8pF149AboEJrEfuGZQJFZ8kcLLwBmHtSCQ57oYu4N6De",
  "key12": "xi4FD3ZL6BMMwr1HtNcE2wgedfP5ZxcUrRMfFRGHSwWsb8k7ndgPY7bi9LRRKhoKWVdnqc7tDt6hEBjpcyvhCmi",
  "key13": "5NZxfjjv3UogjKseo5c1EJNQYezV5282VYfGDivNWpqfKM6eVNF21fHJ2XjukPxdiUfwH6QMmmAmDoRBTFrsNoJ3",
  "key14": "3AoCiyf2BgdXvMBSkyegBNHeaUNTjy4KCPHUsDt4viSiTJG6PX4GNSE27GQfbS3ztrEaMAjxxeFzoPs3tChSjXro",
  "key15": "3vEAUGse88AntF1tpGCFtP2t7xWuP6X5M3gSxPXAFDWuEVvfMo5u8wiEyMqBSFTDegvHpQaqL56UN3qLCvnynztA",
  "key16": "4UtvLPpk9VcKfq7AsBzo52RmwEeG3NacM66ZLWB6QooHopaBN9AUh8tUfwzFsva8quqcKCm2mgV8PsLaUAfCqJyg",
  "key17": "4RTNH7LeRzcNZamao3xmDsheSJVJpsKDcgQ4za5shTokeeBQJ1w8icPA3tsNGfJ2KbiEKgE5HY4EkXJ5ZE9U9fZm",
  "key18": "3xzsnRDqJqjxRUoVRwLxnLhpLeAf95nCf7dW66QaouugNmPMBvxfwkXQ9tKniUaWUnFvJ6segutQEyYvZC7ktFJn",
  "key19": "2TCrfpjTJFr5egt4KAAy6QgCsPmwFfaPi5PE75oPDVQ74MeWwW6PNbVJ83ZpMXoX3NwRrzYGjoaBFGQDZFMXzbmJ",
  "key20": "YyDjwNfRXFbyUwe3WEHWpAUcnJ3qQVgFR5fCz7GvogZBm6fmLhm938CdMu4ATaFNdGrW3UCAPSoRQNsr9HMveyQ",
  "key21": "4HxPGSUoNDfSXFddGp4AGxWmMLNxjQZLTXfQYC3Ek5KU8Dk7UV1BLPeHWCbpEChBhk8J89NcZuVTiwVx1SU3X7xE",
  "key22": "RFHxTnmRssK78Ef6JQZJpr5Xuv7ob6U35j2NQphFRGUcfGe3gNg6LcYvAHhqHznpcrmYLUZCChAJfnCRiFcG8Ba",
  "key23": "58qQdRwDHGUZznXqBmZgmUbdhDtWTHZwQxfB3AifD8wXtq6CCYLNv5F9kRp2WkRss5KuAPtb1V4hiBpdiWqR32oQ",
  "key24": "4P7oyrVMTGthv2XX6R1RHKnUL3JDrdR1Q1B9QUeWTCPNiVJJesNC7VpcXNMpFRgTqj8uxRdoPSnCuXy9CicJ78tu",
  "key25": "2Kt2D8xYfoVTotRhyCw5DQg6cuWGwmThZEaUBGArm1ifKnBoAZwg4uHFXFnX1FLcrqj2yAy2TWowPo3vPijg7Sye",
  "key26": "5nK8ZETijKLMZPnJ7tgumTvS8jyWrTmavi3t6FSNwEKhyQiXbCKVzmrgSFeveb9cKxiKKKEQw5NjC7ZbY4AS9Wcc",
  "key27": "4haZLqtyVPBjLxgFto7tbgVUjF85ANrFEkwGvrUsfQYrUVz3Upz86cUENFTZA3dAkKwJjHZUT5Tj8MHNemKiUbWT",
  "key28": "HwZC4wUDRng7i5UgjXv4Het6oRcyibZRZVrSSvCZDpfMSRgr6LQ9g4mjnp9nCpVfEiDqs3Xmo5jFS4Whd3x8Dni",
  "key29": "61VPgF6PaMpGXbGFXFMk6fELn2hXxVqu73oz3F8zXNsbDfVHmMghNHB8gELunVNTnDdmRGT6dVZHHD6wsKRkQwku",
  "key30": "5HwFJHkQWrDuu4Vb4MRasHR6NFe8BbvgR52vKnbPz6hr3MsJF7wZ2bxcQndaRKU9E661y2o675PRNnMC7UP8MPyV",
  "key31": "26HRHQrFQ5t8RUqXw4A7WWPJemH7tjNn1C7wm8ecg7AayqMfuBNSk6F4M9Ngeq6qiZbCeB47XGLgvU81BmJMt679",
  "key32": "2RcqsKA391M64gzJcsPLL4nJBZRJN9dnuV5S5Twh1yUdCNQf3TDYHsvCFautm4edKNFkQwubyiht4Tvqh2e89KrC"
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
