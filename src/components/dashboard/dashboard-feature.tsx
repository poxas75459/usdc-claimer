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
    "4LqC9sFZPwyz2G1Cggw8qpgAtMeuYchLYCwk5J2YYh5e7cZEVzskQYCCP1kBVkjXa2j7uAeuGPCuAhRWpE9ux3Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ux1oFkigWphbjVSjVXaXcMxJffufzAx7wR1UjjHKZN7MQFzXf5ecFmcyBcEt3LT3KCGxgmDuG4yYNh1YEejeA4x",
  "key1": "4frRHotu3v5m9VrsLgEo8JtjJn3JA5V3EcsRCSizBg3TRvkbUZU25GXDNgLa27HQXo7a3dzaXS7N8K2uTVxAQ6p5",
  "key2": "63qoZ9TnhSG6FMVHJLDcKz7eEkvV7FBXdVNcqsQWj58EYEHPXEd5LXdZqgUqNFXyaRjJWCLy89DgmPE8bGnAuux",
  "key3": "2JkEMMV6Bi9qrFCHoKfRLP6KTBXRNAH3cyXHookhQFiFnmc5e5MPmPv1j5h4qbWxNuiMTEUTQinmBuKTbCWQsgiY",
  "key4": "4EuCztC8GofaC37RVUePvh9p5Y6HY3H5tQmf3X4pVmSnn6pTh32DkPpuqfv9eUZt8FwSdpzXDCqmWowQnjkc8kUz",
  "key5": "5tfqMQJqFdPdKSKD3JJMyXBsKN3CZf6uQWeQTz2L3JvgFW6KNcmBviyxxUV1wUwNRDLiCkDmTiXhubdD3AWndCrk",
  "key6": "5TeKVanZYbY7eU4wzrHPGaHCqU3iWHEQDdoASFyz4nTmVpttPeFDETSbJASmZCqFFK6PvNTrj5bMGnUmGPR8X1X7",
  "key7": "EwHdM8N8Rvm4o31x4UFp68AfdWomWEUoXUmnULMG8k6rpfT4YZw1r1TNfh3b9dWmo6rdWf4c7PeSZui6quEcwmb",
  "key8": "66jnsmQSSpQ6hQ7cmQYo4TQRJGvEAAyqUQVt3MpeRSJ2dGCiRfUb1mZ8FEVm5cdJ9dDqechVMUXKfar911tUZ4Mf",
  "key9": "2skWSAWWLSeDUaJs9aYLqFThMY1BmsD1AooEuMBSNimKYhYXEtkUYr3T1VQxnGL34p7e7T9Mp4mX6QK8fxjDmjRU",
  "key10": "59A4M2bgGMvQjQdwFGFukZAtUdf3WQzeYXUMhy6gvMT4NyRyXQncfEVfLHVQEdjnX5NT8zGRUXzakYsuF1sf5P6P",
  "key11": "6533gF2biNQawk8vbQEXQ4yngcfDbBXEZtHcRWibMbhNMnwzbLJNzDYEuhHkJLTUZK3XWwR89HX79W6s9GyPM3d2",
  "key12": "53B9qmavQM4Jbtr7NLCFpoGsC5h8g6DTtVPo6mKmvRBFcTcUPkTeA1SrFFzhBtg8HLq2P97eyqDQcLEaeTbiYyWL",
  "key13": "9fSAnHveChCWbpxhcspbTDKLUJByuhzsDwZXNtp6ZFCzmgRv1oA6tnjUfN5kiSE9gv84mPJyrzkqThyo5gZioPm",
  "key14": "54ENDvdeftdzqUrKaSfRg9cANnZVuFQqKaH6WgkqcTJJ7RjsPbXuXMZvX65YbrcwsWu7Zc6LBt1PUL6w4PHPYTiU",
  "key15": "51Afkn2XGgrJy2rHTGJoeE2idqb2VLj7HFaqFfDgSF6BEDKgfsFXbQinszhaSm7qb2p9qbiSsshxVPDSMBLmRryk",
  "key16": "52PZ67U4xMibymqWuMuoEJ5YDSbTgxN4yTFm2N6hiQfkPh2kR52U8cA9uvpNJhxAXeZYoFab1DAvEgcPtMwPd8xS",
  "key17": "35ZERKAFn8mAiUpLUWLMvYwSXPBACKxDk4c4vVv2bmeRvTAW1QKthdmrkhyZmTvJu1pH9bCzCWA1g6BdSd9brk41",
  "key18": "jbE8aEgzW3i4Tk5efA1Jvj7rGyYs81EtcbBWropSnM8gb1RFmbTDewDTG8k1SaNiJtbJDz5Sc8QdC5iocAWDNFa",
  "key19": "3dJNsKfEsYBu7CxJdSmgeqUcB7Aca4tw25dtiVUchbmMTVkvYHbBYpt94HbtsB9UH2MeHah6hmJWUkCAoq7wkhzW",
  "key20": "h83YHP3QDG1ztmDsRi7C2SFvdjk663gQawiKXXczZuAMqB992TqUcxUH9FJxrT667xaNCegqn6tpn3pnW48qDuy",
  "key21": "3zPpsS4oVFKiGzeiVaT2zkricHCXpasafsUvWAGhrmMRoA4ZRPuPJbc1vxRGR4RZnsSsxZsSyzXe1h65fuP6RpNP",
  "key22": "5xXp7cZws8iygHJtno7XVtGPY3GcowJpufz5DeXxKq2wwXwGYVNfGr48JiMBnuWnmpJdr2gJ3RwvYcFzcA9BBnFk",
  "key23": "5nqLvzq6McjNwGQ59FXgaSWgRvoimScs9wqXNRHvkZomxnYmAGsQppBK1V3sixxU1uf5qqmeDFJR99hG7tYKYvyj",
  "key24": "4yTTAdqAfghf5tarYntT2WveuxyFxQRjEfBYk5xLvujthvDjb73Qv1wGjfBCGyB3LdxUQKEfcxFrkDocs9fwzxBH",
  "key25": "4PHnnxkgcC6aKEK29tRauSbEzkc4SGTbB3Jk1AdKi4Uujr2aQD4dfAPkezPXAkC5ZeL4TdV7kMAyQLEtgGkmuBYf"
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
