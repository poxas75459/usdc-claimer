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
    "5WKULUnptLwV6wQKXZe1auHiFr2vTvFViDWrs4Dj4VP9o5whHVogGtrkdNVDbMXfJkgpY1isNy1kir1w38PjgL3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ch7wpGZwgJynQySALzVenBF12dYCYPAJ3WJHmVtEo1PY3dfCY4rMpQzidky7K5TkpXnizvau8JhG62tyajTkomb",
  "key1": "3pLvYetrzD6MRXLNokiA3rPWrR75Yg2Nt1AXEwB1eKqbNN53wgqTgmg1SPhFdxbjCrupwqoWwMn3pkSwm8wTrKuK",
  "key2": "3MTPHsokhiLwbWfvk6U9t89HdKWNzJCiENATkvmPWhLbxJzrLS1FPMm7qH6SLHckWmGueVMH6bvHe1PxbBgS457r",
  "key3": "2yG4K2PkhHRVW7GNGPKiVQ8ULzfMtR1pbq9ifwV4iBwewThReFiWk7HgfF8bEiHudNBnVrnf9TYKvYQf5GAVowSH",
  "key4": "5YsjQjXp85Nb1EkQRTqnrspTgvKzYTAVxeea2FKZkfDtX6WZak7v9BNd4F1sKgvE3GXe51zJ6z8TK3Uakx82Wf7E",
  "key5": "3rupFAYoWJjnYDxjf9rB3i9ucw7xiCmZrsPJocCZ5agZcqDt1T6yuYqq8PxMbPucxgWirQ8H5ntmNxqRvykr4voE",
  "key6": "2HgHu6EWyfiARMnAzXby8saGamu7kmcxMCVFSriPa9yu6qK1gFu1NZWA7fskuqZMUb4nwpEccYha89ZRY7WCC3Ke",
  "key7": "2TY373nAkyGhpyCG8rZewH8buGchRoNvBtqDKqGTm6sc21bpsfD7QqG2V7cgBjmbywGqpFgogKnhHLFugykMMjh2",
  "key8": "4ghknpKQ4FQZpZQgcpVSqTTrFoRsGKVyUdyqEfsbunm9Fzpf7YomXzMxe1NH9MhuCokTT2oynsBzFYPVd2GeAtfB",
  "key9": "T46VBMSUAarjJSdHCXDGtBwwqqcQvKXzj3dWD68CHFYg9Crn12TwLnvPw6a7KUhFdkfPDJ1EGPVYnZX74LgqH7C",
  "key10": "436DNGRVVX5vTTyEyFScBwgyBJaAVHhWVyW72V1cMs2uAbZbK3My4nv2mwg57dTn2Wae9drJCMWDvWYHddeGm1Q6",
  "key11": "2eqLy6CQvtH94uSjEFuE28aoxVzZEz11mMpQq2zAnRp3oWVYz2uY1TsCmDgpqyGCWJpto3Z6uU8U4q8cPy8WRCHG",
  "key12": "3oXe8pGXcFaTwSicur4CSNkMHK2uFwArf34pgvTtwBGdPHuQYjSSHHsyjmriBqfevPV4Ee4V2cD3wgrD3cEjE69S",
  "key13": "3T7hdDQieLAMkzyx772dpQ6C7Qz1xTpEEKiBh2YDMH3dbgDZ6wwyzYPsEZWD3ySL1zCfzS4ZNjifkgoDpPqtPd1a",
  "key14": "nTw3qQuij2t7NbVs9PLaX5mrkygyVvV3ePzd9ARokUmXQ9QnoGFSkkpVAvaLc1cxnf9Q2Nu2EFjTPMPRM8wjaTr",
  "key15": "4mAq7pkYCadhvQoVMLSSaBgF4ycTRo1w4Pttzwb7NU7BJwvVtx1kwdcBzMUJqxVaFDrKxrKuR7x9gBRiqSsfQwN7",
  "key16": "Hp6AyHkLHWKF8gra82dVKBUCCrCrH4ry9n7kJrMTii1a4vQa4orDRRm7nBtga9tNCjZbLc55nNJp7MCQUukb6m4",
  "key17": "2Sivmfjah2ykXmYaXbRDzQB8dW3QPoYNu5aYwat6YTo3ELEYW8cpsmqmZuRQjmTTBi2x6zj71zyFrGSsi8mBooSh",
  "key18": "32z3soRsezri5pfhrnLsgALRbnZGbhSkYxGgepv76n7kMmVHpZN4Ny8C5pgbFgg4T3TRVs1XCmd3eDa9zNt3PfMv",
  "key19": "3WdnM5x3Do1b2bE2QC5d6Nf7ty5u3WimYvARy7RoCfzGkpxy8LsY94PnozBV8AmiDQgRatHPEmb2uZ4bQNZsN8BV",
  "key20": "48C2qJxMCaAu2juHurXAfgB8YdyCju8Mqz57RZXKp7Sm8ho4eqcqaGT1Uvq14wpmxZzmjLT1uTRSWH57U4D2iM8Y",
  "key21": "4RRLGiiUFX33oA4Th1McNkTyrCFx7M3gXygiS1NNY47bmDrjhZYKvLCy1jnX5Peii4ZMQygLzPYRv9Du6CdUZqAP",
  "key22": "pVmHRTkQxGPnmXr6VW64EnFmGUdpJwErvEgdejPDHL2ymmmKRqPspqaVx1W8Lc8REv7woQ2ZCyidr9LjydsCeKZ",
  "key23": "5mwUXhy5PqV2j4akUXPu96BVBqfDntzZe7v2jiH6xj4D7YLTZSyqwG8fM42PNuDF9WdyCdgsHUga2DZFmQGPTq3r",
  "key24": "4hBhm6DFGJqaTSQqohVSi84TvqCBC4hqqy8hjSQema4BcbNAd65xfByQEBcNjtSsivxJQtQ7PyrvDPkhgePVY6z9",
  "key25": "3zaa4fQWM5i9EqDxCAwQwRXK8ysiaqfbZrZ3TwZRCMviWACfxiJhv8Vs4zJ6Gz5zue7SqCzYhzAQHdJBoeezmsGK",
  "key26": "5djNmnhzdSFWtdJVjkD2ixKrRignnqcv8ABqb3pCamhQZxowh6E6Kc7pwvu2hYa1jsEMu9joYPoHVb4zXe15uqtu",
  "key27": "2bhW8nTasoRvyRxFzLpAcaJ5sLEhKYNUFzmPctWPDX6gHFFgKNSzuBnUaLzrUzFgxGACeqDo9733W4xLWrdWK5sB",
  "key28": "4vPWdGC5WLC1uG2sk6m61W96sc6nTCatucsWwPV8Hhi6rWnuvmwzZR2GCWHHVE5dnEwnwdmnzhiUWyCa9hwmM7Tv",
  "key29": "6hEoJQvpVCkHV8kd3tW8V2GWDwtySyJx6uByoHjGXyfAg8FppNqW4J6CShyhoBnHV3B4znscxCpauUv6YoK5E8i"
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
