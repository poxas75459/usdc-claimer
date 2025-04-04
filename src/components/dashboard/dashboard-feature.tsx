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
    "3DXxh75mPALfEVcEmJPHv9LtBA7CM6XnFvgmcdGT2VfURGge1KeouqMUovQ42KSAn7gdnAwPeee26TroqxhHaNLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgWW8q9VE29Kcn3RakSdkjsJjbWMfweuvFB5uy612DdmmU3uF8VXhsXhiqL3wMyMaFei7pEsya3rqnsjj7hrRaq",
  "key1": "3ogzdZbpjFbzKUH3n3aeXT5NDoUuURHQQQ8wGkppUKLsw2C17KKxEzCssZy7zjco2fbxkGkStQW78kttbmtrTBAX",
  "key2": "vKJcJcrn1SDjx2v8V1aMisrkSVUx5GtBWCEVPUVr3jcozCpjmgtCCamgTVJnzXHJcXrKgeYyJErDxRhEcUgQoLC",
  "key3": "34wpVzxPhSPxuXiVWEmHoXMHES3iA5eYhE8G9FgB7xwR6hSXPGuS1xc9qLvwCsuaZ2Tqd3CqNBjeGb4XsC2w74bK",
  "key4": "3He9tep62tzBUCX77MqbEQYTVe4Prbd6N1h2v5eJrpfFpAtG6eJgsQun2Mmo6i31NhnCYcccaz4JLFxE1VhUCqR",
  "key5": "7hH77cjhnHuRSowodxP7BoAftuo4qsrUo6FCcMc8Kr1GfuSbQncARSVUhaFeoRv59Eg1nnRUJWLcDPXooXD2R8G",
  "key6": "5fVzQakFHQWCpVtKQ7hKPvnmDeC1DgFmjPYGqrifQeFotHq4bLrMMpTcsRb9yEAav4HGGLyTWsXqS3mVDj5YFarK",
  "key7": "LXvvqSSP3q3UJjWaenVGYJUkJR92sfU1k78anLEiFiQiu5mhcZWaxrmeeLZDERydLyoQgTgUxgnYZysZFk3ZpYA",
  "key8": "32dHdGTn99cKKS45D63b8Q71abdoW8RZjcxX11c4VRjioGuR8JFryMWiHKsPG6oYYaTioo75tnNz1tuwUTN7N88i",
  "key9": "n2VcjivmVM7XKpjehZBYT2KLkXgVBBbU1XYsEQUeRzh5MAKGJjXFwUv6N1gCQu1jW7LYpadAiRBFDgNXhczB6V6",
  "key10": "2N9EfJx82X2nuQcreQPQWQxrBm5ZDqNmkSG7cjaJSk2rPWaYUMj2craoZBUgvsp4HMF8JYvCqwBaZdf6QTgQexkR",
  "key11": "4QxW6X9x6JtXRYcm6GSy3kEd2kUfrVN6vfvJniBYpoKcspdN3xgm7Wg5uYZwsPoVYNaXNko4w7MAU5rCBx9cKXQS",
  "key12": "3CgfJJCfWM5QtRoV2ixPMB5rT4hZ9RPLPjaAuc6jzKy7xiQUxZ5vTWr2opTmwKueeraCfDkNvFsDqR6yXjaze4Ks",
  "key13": "4sbqKU4Hyy5yNZJvbZwJJsrGEk5bzSKc24MbqN274fkrwd6Tpvf3esPHbv1wcLSzHXXVKk9JukFuuWDLZsWRkkxD",
  "key14": "5MiAQKgdsYmRm4Wu38iNcaZ5Vtf98BqMTWdvrMg3Lr5AMjgUFyArrozQQcb63djbYDeD4aHpdDLBKaHzYnRW3AoY",
  "key15": "4CSAN7Hv6P3CtSyxqSMYDe1ofJsQMA4BdbBfy6ZUkfEsd1g3TJFnQfKyULC4DQQnPvisNJw1rytjVsckSDMnp46L",
  "key16": "McgVy2M2qQQY1qb7nfLKjkBxE9Y1SQi1dMUcjEMuxcwMwGgn2gm9oRAxKidHxYNYB3Rfzkrns8c6VwiYZ2oQJJE",
  "key17": "5z1kZgVm6T4Lqk46fdfQTz3N66pSkDmbRXWnnb5MP86zXh9zL7y2RQsC2xcx5VTss4Gh885GhyoyJqrTSCsrh9a6",
  "key18": "5pRbDVyoxAujVHZfF9tCByUTqnKgbbAY9bobJ6WbrujJtgVsXhyAXiQwfTwjD1YbdyCF3MSvWZSSGiMpr94kHtk1",
  "key19": "5giRvE2CC1UfQViwBUUNJh1YrXuTQfXou6dgM9J2m1Z3WQ273Lg3o3Woetz68Nx15dhfdeQ1aJrD9G2hK971LsA5",
  "key20": "359rQJvcyRNTCJDHvHxrcHXy9VaWqMd3qamGpoiDt9Bnovxkorj5Kw2bwbmvR7oQ58Dqt2H9kLkoXC3Z5dwGDJFA",
  "key21": "3pDd6LEifkz3s1GEUDAWuYvTUhVnD9RKRqybGP2rzzoofn2z7jBhskGCGLNo6tCH2JxewWV7sB2yY13EEpH85hye",
  "key22": "2CNxqgb1EGThqzTTzV6sbRXYYr25pcxCMrAj87pPiNfXtXkTNuryb7LupRwqe2LTrmFLYwoKmuLpskaE4J7Jsbpc",
  "key23": "31aRpvEnYxV8e3doUuaYK1aevbcGxCxEp3EzdF1P8AVCYsn28ZqKQKQXXY1nh9fdQHWsEs7sF4SeJxLnUqV2Gwg5",
  "key24": "PnQBmBCV7jWazLbXfiAciohBzK9vyAx3PnndUjXZXuR3rkTjxpe1zDRSQ7qSDQfLTDcTPxBhpWroyT7Fo1MR8St",
  "key25": "514BBqib49yf5CsPPCHF4AUaFAJZjyTvxSAynYDo6doXfFx4aspCtCGa88b85KULHJkugG53jypjmcDGWFg34CbM",
  "key26": "qHR53TeGfBrNu9xuBdFr73rmGn5psVfjjz1vea4A5XcD3GzDHhFCXYm696GwqdqMEjzJGrkwtuwmBhBe2Tmpvrj",
  "key27": "5aJAw2oBcMv4zJpCE9t2SujvfkNhP8jir5JhKCqQ5EuRSQuMMXfNUpVFSSZN4SpDTGMpXBipUd5nnoT9U7xNGLdy"
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
