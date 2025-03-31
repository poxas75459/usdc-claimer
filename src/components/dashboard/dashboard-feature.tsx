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
    "57mKfiGxHTE2QZm6TRataWtBpuryB3sxsNTwbT9RvZedBPjunkR2n3QfHB1s1cpHXL5AHwdToAhu2QjkEi2QREau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URHHY59Dw5G7UicbYWwyo4pNAd7cEU9pWo1dsbdGW2QM9f4gWkyrTLVhgoXZEJyfaK27dYhh2UceWtAUhLAtqRF",
  "key1": "5UoiHT9iJAyYUZmRwmRMbbijVMLxMD7K2Df3YrPss2qTLFzqPLuLvZNaFeT1x6XX3gqTv6qo57fGyg4PZnUxP3GS",
  "key2": "5rQhbLSHPxjPmMNe4ZA35TBF7oDEcHCFUgaiHFBiiR7hAGYiTNaGRxRhyaaGWAQv1WKPT1ZyDndfEhoLbV3fsBEv",
  "key3": "ceA4ZzajxumsEzCkA9n2oG8hCkXczU577pYR5Aj43mkJUr38YuLR4Y8JEQ2YhvvvRMxSZ8feRMdEN4DKhekzk4N",
  "key4": "3oHKcfeVgyavz46tLtZ3NsEA1q5nw2WAktKFWtViQtN3hU2xE3v3LJzabhvXB9EXeNRhxuWi7vhqWJrqAkvyHRkJ",
  "key5": "2q2JZq5geFteNZyB46CPxDVkVYfWzEYWDA3UTQ67DFukxZVN2hFJc5Xv41nmNkYc87jfvuA9wZ4KX2GJhuWpG1eL",
  "key6": "4vDeQeaCWzTkBbHxKHkbJ5AGGZ7XiRbjnaoUejEFqPkBaNgXPaZe9yNJsh1HRfNLS4Qcvj6pvJHizYekJMzQpX9y",
  "key7": "2EYQBxHsyVR3BsAv2RFDngJrLBWtva2ZEhpJSB6DDEt6eJEm6NmvpVN9nyn2fnBvECtYZagGuBzHNePwbpR3zjfy",
  "key8": "3Ptq8YTs7jDS7RVGRpJkw3ZTm61DKfAVvrLLZuatFzqqz6JdFPmRbcZeL2fdjVYYXfC8u9nEq3UuUWAPCu74SvDS",
  "key9": "4oKsTLiWGypQP9bjVxjWoex43opBvdMiBu1N3o83oMhR58r9J3uaoL4mH2ZXrwjDdfUQamH2ymXCDSNuqojixwQ3",
  "key10": "52z34sHuEMjLCN2qdpChys6HCbS5hCKq6uaB6LC9vm6rSDYtR51qvHXXhbQpbrXS1ttDgUMqYRvd4WmnmWXaViMQ",
  "key11": "5AW1h8PidgmuUpELngdMsiHnaiiGY2YYdTG6BmF2dJJKSd4MSAP24h6F8fPZKJ4YP3ZpgdA3prZFm8epcutCr1bz",
  "key12": "5T19GEQRK5KFJVc1YXGrMMx4NUc7gmqAR8xPTzYKYv28hnLLfB5XAsQYuQPdvHcvse5cbRG672eorFGLHJV2S3dz",
  "key13": "4sKjK8vd5tVCGaYWsc3Ha7JLS5ysyxUQdT8SDYfDsiq9BXUwW8NuBvxs7Kfy3kLhjxzgSBUaRMWLPJc2HWxiJ48D",
  "key14": "fvkQgykJirtdJy8DaG48JrspW6qYVjiZFgPiy18dAbyAYmxzRR7nwnbpwaMCHk2d7oGHPPsU7xzBKaoKSgnK67S",
  "key15": "MngNP11PUqmVb9QmisPTD8VKqM3JWChZt7HD6Kriea8iBPksdZMSxQfeFr2qnxdhvNqYEWSR93pqZFu7ChKhWDZ",
  "key16": "5Mg2A5WQ8xP7BwtGMDXsS8eaqB9aoL4znyK9FKZ4vYhmw2E7LQ4qaYXXFCqVcBtC8M5G2gAGPcenW2YQeNuRb9iA",
  "key17": "4S2rg5sp5u1tk4aM8Rq4vsTstiLabSSetLQP6gNKeEz6LA9xvpL3SJq7U61R8tmzGQpZXtkt3tr7DuQ4Knqo7q2q",
  "key18": "37859DXp9mtTZczcy5sPhJ7jFP8MpYzENdnbDRXKVn9puNZnkSUbStFX7zohRvGpv1PNHFZU9KVg9DnTE733X9va",
  "key19": "3DYZ15XNvwdAPe4pSg3muvUVzyrmqTWZfjBAn3qF88BK7b8h67asm91iiKFwFqF1ouENio4DBrpWWRAfvF7zVKKT",
  "key20": "3t5otH1QFMee3KN4M9tPhmxe2dcsEy3srhvFVVnHJmVRssArz4iHFX7YrkWzHRQnUDqtzrv8B1Ny4z71EouenTxm",
  "key21": "4MzhU9jYaSSagBTzkzLcnt9zRoek5svvyE3L2hBHbyqTTZg1RgCZe9ePZeTnqxmQgenaKq55nvgdoXCDryaQGB93",
  "key22": "3qUoxV8rUPoMcvDHNVR5qjZY6yMaMYhMbez6twpYBbtbMnHqxrbiDZihanuNRxQ1vRNZvKxojo1AUGA9NSAL5ikq",
  "key23": "tCiziW7LWjd5RVFUAsvH4utf3EmqMtiJ9pTrSc9afE41zgmVWG5qDVN7gaVzo5EQJr6VYrybt5CFWiMi7FJU2P3",
  "key24": "5MnFGiK8zaF1exhwDHPiJWYipZPQgKjG2uPLHkWiCc2YokxhRsjFV767QUAVcRprAUp9fHZRe8ojGReAKi6zEbjS",
  "key25": "bFuB55Xs2wCVyWvQsrgcsYw2YaLV1robkxfLp4g4nvvgK1tcbBhsLTvDZGBgAsgxBDSHaQWsevy1XxemhWx2xkr",
  "key26": "63YtrpTCzpQXwjJusFUhVrTqkLUkBvnC3cJexaR3kUNp4Hd876DRs2r4LrjHGx3G1kGoCCVZgHkXWkEkKNbecvmx",
  "key27": "5sdEb2cxGcdJhBsLD13CE4YxzsswbmqH6ye29LJMQur1fj5rjwNxzGYVpBHQEmMGNrgXBSBhSYrxk99nrHyG4GRg"
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
