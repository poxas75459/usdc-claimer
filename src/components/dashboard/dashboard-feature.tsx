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
    "5Ss264mAkyoRqVqmDfZXGYK46XKVamHmSYsbc7Z4HUN4pMqruaNkCi7GzFaFKRCAmuYYMie5gwNKUAoMkQSWTmxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBfZwP5xeJDaGZz5J8sRHR2GUkNVk5QMXFYDdUtQ8DSQxDZcPaatKNvoTscPkiVgrrhevNWQBDDp8iZLk3r9won",
  "key1": "3FWtohm9FT6A2r1UKu3YE9JYGA3z7jqtxfYZybYHXsErEw7ux2R7584N13Bj8nKKxbisApySCUbVyq6Dt1AGsRYh",
  "key2": "4vD3S7V3nxnU3fANiRkXV6gCe9Q319WV561jb4EmFXRxRwLQMMhheVtWoUz3s5H7J9G7HSx5k4L5hjREmJq7uo6R",
  "key3": "5rhY8Z6guo3WsvcsVSKw2St7jF3HCJJHRxxV4DLjmBCQMETQgnx3KT2V7Hrsaj7Ex43dHjnyJ8caLvcMrYoepTcJ",
  "key4": "61Vyz7XSEBHDMF5ovTRkfzwrR6zxypuPpXiKTr9qRCabUQzb6FqaWG8GxSUNPBrcRKEsutuhweYSR3CHkZvpsxws",
  "key5": "266jcjPtvk1JY3LPfgj2n2XauiEi5Um5p5EPaYrmZpY4GxtDP3TRfAcGdSj8b34c98uWBPEz4ZC97cQzQyxmmmSQ",
  "key6": "5zPmWehWg31XTNWvSQiHkfU2A9tu9C6qsa3RhnNEEtqKX8xA2h2kNpzvXrMB9yKnfgMnvS29sg3jouRMRQXmyEpZ",
  "key7": "2YrYHngwzxF6xWet5R2S2ttxdqdzP2Y6EcDa1h7Kjs4ekmq9Zt15MB16nUheY2VeFWDqeZoa1jWsz4K2Ek3mVwPM",
  "key8": "32Gxb1nBpKAUTxB52Vqykz2eaCZBtaTL5Qcg7PiPG4pWdJSphivDuXMg3Vy8QFD6cB3HfHfsYR5tC57GPEJCMLca",
  "key9": "2gxgJPcSRakHpb59ERH1fP1oB3wScQxbPUjwXwfUrEKv1SCTL9CtmFQFXXmViXbcGnvnazZdqSBneoHmLgDh1RXh",
  "key10": "4p1Hf7cRGt7rgEg7ShEmsdQ3bux2Jjjv9mWJgBASYjaqVFN86bENsteZBoiC34bDkVVsHgPnhzJqK4Y8z3EmR4c1",
  "key11": "2jijCK7rh62M6JdspnAY2pcgYYFCCFfjWQBLG7nZy3ScooX2BVGgbxWcS6rgrS51BAH14YgUtvdhkpCrszFUsSGa",
  "key12": "2vPw5VsdzHM3DesoJkWHiLkCvt1QgteHqMXt6AeDcmtXQ9BFgHFDZN1ZFL6My5G3D9EQKoVsTazskp2moVm98y9o",
  "key13": "UT8cCGFBATrJ8KzRcXg2muxstgmHn4XiL2u5iH7VChhQ1RdLrKbqkyC3RymutGRXSFe2AfadLSfHq5XWoFFzvAE",
  "key14": "pQ4jJH1SdhVhc7cHnHA9vanNNRzfuVdFDRawcDZBFnqZXRXr2Uii8AVab2NKxMMAJKVsex8v7PgjvVPJnNCSRzG",
  "key15": "5YhEqEt7XTxoBfuDphGAFDJbq9ZPTjF3URpvPeZqRLqQGRZeqSDRD3AgZFQYQRMpJG6shx6bFSkwuvDAamiU5x7V",
  "key16": "gKirVBhwddW6sUKY5yK5Rj4B1hheQdgL1QgvYM5g3XiF2z2aeFYey7itDQaoUNonvvLdghko3tnPfHpqLjVrUNx",
  "key17": "5L7oZcWCN5jJCkJsu6vDSHpFN12MCwH5dBqVovhocd2qmNMQgJ7kCpqWsaZ4Jof587jDxpYBVVavzEJkD4swcJUg",
  "key18": "45e6BVkS8e8KkVj9zjX825WQdFbtdGPr86nTUczvVQgz86JxvijttUyJtWSjDmvVu4KTgLMQu1B9ni8snDEveu2A",
  "key19": "2rAb37zDs7tr7SXuBmhX7UNkS67AooNdcyvkFTCtwyeFosWr4YbtHza3rzUuBFNXqinPGPvmbBa287Pj983Hk2Hs",
  "key20": "4K4VJZVxoUxjywNHbVuW2jECCqGgr99eLggUNnpraug3M6gNTdycPWMnq8CeFFvuCb78pEeaxMkomtD382xRBhWG",
  "key21": "3cXK3igZwGW2kmDMGNgBH6o9orbUNK1aqVqzDBUMmRwVqMgFWeQp3HJ1QDjrji95EbKDSuKnGE5dXno73xT3i9hN",
  "key22": "54U6ZtRuv3co23dCHm41AuMjPgnbE32HoYNuzoeViwN6zQUVjBvZhw3NpuQugUNjg6N2hxmTM2vZL7rYRFXXT4z9",
  "key23": "BxAYTYZZ41rfs3ZQm97G6nXDQwvra4YsKvjoL9RfvzBH8CNbdk1zJRFxv5eh7g8E24MptMLXU3oSD5qEs5c1H3F",
  "key24": "31gEV3C35KTJRqj5LeAjTpu8huedPhySSfuP7oACBjD1zD4syuTsaxSTN5gQPeJZtmCCSyc65SSd884N4twFwoyh",
  "key25": "dzvhqkTYGN6cJoRkNvVkwz47rhZ7JETfjB928MJa5whTrGqYUPgfiurYcRZSEAnfQ8ihkXsfgPq7q6YnFvfkWvc",
  "key26": "2fFjC9UKJ4knbv2Sao1djiWPnxCuSibHFeFBNsX2wCLJjywTCeY4nkRao6P4Zf5cLKcmDpbphFuzaHgvd9rzTGQ",
  "key27": "34UvRNixSFwT3LCzjy1WXgbPp7FjbU86fPxstmRfp6BKP7TWJgSVnyXWCez3n5A7QsMGeQ9h4phV81DTFWkhxPvq"
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
