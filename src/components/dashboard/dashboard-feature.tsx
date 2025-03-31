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
    "4MLweMcAZhNsPfJuQw9KxrXJU6s81s1vEq2gQVCpa8yhbDTugGMaz2tXNxk3r6SQ1jmLPddQ1YHEhw2Ug2kg4PsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNTkZHCAzmRD3gd93amQACv9fbxweMZqmn7Eok4PjXAv1S8JsuEdujcRNTDUuHTGYWU5a1ytGDXke6rXijQ4y1t",
  "key1": "rdEF2PkjCDpN98NoUNpANXVyh5i8oHKbSSP5ZPxwnKzh61AB8cPfxkY5nLFLWY9yGbfuKAEcDwh6pkR5XsCawta",
  "key2": "5KyjvKxr4brVdsSS84G88KyX3442HhQMcyLdVNsnzaHsneDAkWWAAbfCwtsZ8ZU9ZUoAdnUJ7ibym3R6fyq1etcY",
  "key3": "S466jvXTrB77w6BVpupXFdCwnqUDZnTgr1CPUbfyXaf3qDjvDsxvVtcxaf8wWCgvqdyzDqwApvWrF9sHfbKwK2D",
  "key4": "4NUAF5E8ENBtHqvwWriaRMbx8D9jWR2b2xgkmmq17Po662HQtFTA9WzZ5AHgor4DrPiV5wbdaTsjnu6oexdey1rQ",
  "key5": "5kAceUM98Hbq98Uvk7MMNMnHMaSWrvb723Tp7CNFeS29P5LANAmU8K4LCius2dLiACuoMT6o2eRBs5PEdfDb3ccj",
  "key6": "EoEZNd4MRLeN5xJMngGY8viLzDSH8QXabUP9LRZMu43iaVm6DLi3HDGALvieVTEdoE221E4d7uD6jg7bpSUJ8TY",
  "key7": "3NV4hNcgKCsoobSkcpZR1FC2dpvtjir9DpT2d41aKicnZKtRor4Jv8Qk2GVWmdfzdB91NmBkjze68grfiThsJ9eV",
  "key8": "5aBCNCX6GK9CjeKgrppC4TojXhSZKg3AuSzPJyRxQizcEnCzo1yq6AigHonK95iqHZvHDWWr4qmzJadd9Jwu4B9",
  "key9": "2s3dTXGJCY4J7LBNtkoZjYACeZH2hVvSvBXmWaxG52fF2NQUtJi8EHQxwKpBQcxFzsy558DySUtwjWZAdp58srqM",
  "key10": "4S7NN5c2KEBe8Cs9i2fX8y9o5qzcgAc8Eu2W6i71E2R9YdSxNjktoB95NzGHQC5RPQRSDxMvZP2WFSevk15ESW7c",
  "key11": "MLo4SSLni3so7FZ1kN3VEb8kdbht1U6qKAgo1cH6W5tYVADtnY4YA9hrBsrGYZC215o56qZn61Qj3XSNz6wr5J8",
  "key12": "5Eo4krZmbR9zCEQT3NyDiWn1DrGnWhntSmCKu8ZVMmDu8Sg7sakepjEZpQtQ65nGyPqaEbd9n7KX59TLo4dQ8A5P",
  "key13": "4jdgHkRuEvFy3WesBGu9bby6TYTYQCZKUt94pqBuqmTkK8fuG7YCUkMHeBrKzkaA6BvwbRAvujRSqpER1VjMPsQu",
  "key14": "3ZVjSUhmsthjxa9dzmw5pHPaCDUpmsB8BWz3omyJrhJJuEWtKsFdgp4NzJWVgQD8XkzQLrZamQhEyzmFtVAReWGk",
  "key15": "5ePFeAAQurLASXgCQXs8ZgtByBao4pwbKcWQ1kLzckqAQUQD6JWCsssovyA2c9zW6Qe7uSDrZ8Po95JgP58wh5NU",
  "key16": "5sSo4jphNa8YqUMb7eMKAhjcVqfGhQ6xzbmD2yVP69LFP4R7r9kxUdcF9VQspH7ESuEPP8mpz1CZNfig5Dr36sQ5",
  "key17": "VnyL7ZguDn59Pfu4zXbHxs9UMp9ZsGKFQRf8trSaeBrspNcNHNJSCscTM325LZ1uopofmZBBMcqx9bCVJXpgbN5",
  "key18": "PYUDgBvJRweMtp5bongQqLf7GuMmUsNer9GSghfTeM1AumqkcdsWy95GF4Lva9sGSh54xnz6c7NvZKuxbMpZ4yC",
  "key19": "R2BuzU87bwc3QYf5eWTNZsqM9ax2FTMveaVdHQjHhZ9zVkkoePHtS9n1hEabEpuDEvsj69kZajrKE2g3gaDXWWa",
  "key20": "2Hcz3rcYUqCmbUSGgjeoabZ3RofLupJKH7MkZ4cv3hCYF16bv7vGESVjBnS3wp29sWm9Crq46kAd4upUXo4JcCKj",
  "key21": "5BnoCyQzTK7huhxkDyJ1tPbAsfKRWaNKaLqAUkPLzuhaijY8NMaMQ6iZcmdx1EDizYKnR8APGuxHbdRqwnefnWzb",
  "key22": "2C8x2cUEgpha7QwhT6crZWiN5zSCwQYUzyVhn1tn3KxzaRnZ9Bze2Pk9EPyDANtkHN44bJA9JRpiKZionxfT7YAx",
  "key23": "45EDhETgsXreG7LUMnno6vgP4CdmchyySa3LLYgKBWjzL5FKAWqzm14F6JHv7sNUoTUgaMEngn3gPRMNi8yswq4r",
  "key24": "5rRVwRaQB8w49tFi31rnVK7NthsyjEj9PjAdQqwfVUJsfks1BcK6agLqaynQq88sBGheJXK3UJK91yw9x5Jb2eB8",
  "key25": "5GFfHTxyxwSPLXNS8N3Cf7MEkgQaKCgqEKGCVyCoa6vA2ypuMJWvVeTAicfKQNcLGkfvLo8FGDURyVvYdZnGZG77",
  "key26": "5US9Dqdn83kX6apaesXsfQwQTJCs6Cg3MmpNex6f7W9KdUX3dTXpagphJ3tqZgdmVk8fStJDWNqa4hDEGWYWr29y",
  "key27": "5iooEGNaK3tBrB9f4AjuCsXgBLoHCmVMG6czdgXwcB8TuBPnMZvMwBaYhbi8VkKXjBw1CfjKrzxHEfkq9SAeJQw8",
  "key28": "9J1XnyBhnScj38KoJuGrLPgAe8gtcLWf4L2crJgHcpXrNxC3ty3ExhTmigg3tSV7ns3q1wP3h8MznohCFkVqemc",
  "key29": "3HJVJeR7zRyQ1qRm5zn72JUv342Ac4qYbT9SufTJE6S3pLSF3DBfCd7YAdoWHMuFKxwC8ufRtVeJWRL5QK58Reaf",
  "key30": "2TZf9REgDzKbGzUSZfFCzhTP331foQuJ4WhwLFMt4jqqmiK8Lp6qTwKfidWKwR8Sdtg2RnSQSCWP1AT85Us3qnCV",
  "key31": "3i6GxE5chc74gSUqLUnGx535ewTuxGzkpfcVqFeyJhPthxCkaZTJmmX6cLtUW6DgTSN59U3yhjPj9w1fkSmHxcLZ",
  "key32": "NfA6KoGb9MQrUcvRE5qeEUymFNxaEmRRnBqfpURkhUTAHxEMwnbn43ju1K9qoJ3oBCjRtX9pFZLLndystfXq7db",
  "key33": "2PFKpi8rW3RiWPBxQ6VZG9TCP4vRPiQUj74TEafKXJRZGpst1kA2kKZcNPKZWLoBzTRxudKdwHGxtq1X2whiHNy5",
  "key34": "NiPMrhouLcVF5tgwQApEznNrpAmFVeyXGVPkq5aVcbw6KBnBJz1hpHaoJGAkYuFjpdx3GRsBB5yZiBCwLHv6MeV",
  "key35": "2bidj1GiZ7XJ9nM9REXRSS7rthpQWhV4D6NnXsDiDvUh363yT3rT3K19fxNmBXnvN8HMH1NAA79b1idQVhrkgMs1",
  "key36": "5N4jFpMvf9K5GaugZijkmisBug8pbaUvSv5AjRJFLD6XgE4wQ1JGc1TeExYL21H7TajuPEgZc7DUnCkvKpVaDNJy"
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
