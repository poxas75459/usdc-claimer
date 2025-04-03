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
    "47J2HAxuc9a7A5BJRogtKc8UU3iYAf22NRMWkb8N59jgcFmVKag6QiYLEuCm3G3Mn1Np4tnVdCyW8mdx3zaPto61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Db3boeswuB9wEHV9DemBxaK6sBjr7pQ67RF6y6tkP2dLXTvit5Bwt7njKm2XnBKThySqCqXATNpwT1qPghLH4AP",
  "key1": "GaVNmAHKgFJHBjggdCm4b752o1W1d7nWPeuT4edZWw6u53E4tgfKCnewVLi8b63VYXy6y4B6KpeR86PJwBM6JoB",
  "key2": "3ua2p418GaiP1r3uFgDuZtPdHwxvcVZG1TKC1foFK3BZr2aNVPhKHhf2cQxx4LKkovCv3mEd23hnenpCbFjx2Sya",
  "key3": "3fg64VeULRpkhDsoJfYqKWJrBKGe1r5QR3CqmrJP7g2kPju4HrawDQ2Hp4q752qYdbHrxJyQzHzky7o2mZLWZTwC",
  "key4": "5GEi5gRUb4QfEXeD1UiX88p8temDVWiXYSYPBFgLnkgLTf86ts68UG6mpgkTe7S23BpbrNp2KCpm8AfoW92sQMhW",
  "key5": "49EkxNLkKd9D7bVK8DmhB4fr8RbqmZR6U9gpp76wrjgwTBCva9WERmPYekirf7hUijSDfQcGn4XqwP5quPnoiTGA",
  "key6": "4AkaQxAgm1VJiRQXbs6uECn1SebzCtLbLSg9JboAyhex1j1kU2gUekrTKJHh3wJKThtY3cCXYSNtAXAvkf93W9Af",
  "key7": "51DhtEX2X23gqVtnPaqKhhsjhKhdQLnFYeYzY6F96fsLgdmMCaG6WPqCfTqrU8Hudc4PsmqnjzMWZ3tXgTCHuHHC",
  "key8": "4RwRXrEJUMcWt2qfM8FzwqrYxTtYny8H2BWPuDzXhHgGofmecQms4HhVM694YcrwqeGG7TeFgP2PSSZEBBWn7vig",
  "key9": "2nwNHvQ4XGSMFgJdYKT1cMopLMXQC62q7sLJwFR9YswZCifUSCPoViQ47P25tHSGh1RfCEHRx4e8aU22zcYQr6ct",
  "key10": "4uV557ktXFNQU6f1z3MZSPar5d5uEEy4w5GPuXYZJUYarMHz4eaFYWPmvM8ut1CsxviQJoV3PM9J9PnjjyB36mMh",
  "key11": "4feoKgcsva79aUkk8GyJBKJJbHZpuB1oSJprGFppTBV3zkn24FwMtYA7J2hEGo4uE7BTW5sB4sRenvWph4RjFQoi",
  "key12": "4XZ8vvaMS6wrJmqV1cfzYwAwFR2eQSeks684HfhKPM5aC8E2UpwJ4dWMQYhUEjNyiwFcCKQMGDPt7KfzroZuU3Vm",
  "key13": "UTZoR8oKzV5dDdfm8kqaP6rfhwpkGX1EhSJi9uDG8k1GBoZCHVgfn7SM5PNVGtFN6zhNkwytsRvSUbhc33dwGrP",
  "key14": "2znowPStbU5yjX311GkhhMfMRatofAKu3FSXw3LcnQbVbE8ez4ewN8GmXHuia7RdSRzf8vNRyfXFWDqKQh7BE3BB",
  "key15": "4Y8PbyPXWHszEs5zHeWMDYWFsb5yyCVREy4YkNiKBSm4sgd5nE5hRdLnKMk74yLfRBsJSYng5t9JZzDZ6hCyJVZM",
  "key16": "2MEsA9pkkXCcHgkDqfpXsW2pbAjH8yB3GWjtiiB8T7szWwSC9rSYvoQoRgX7fMMQSr4y3BXrAnrm8QKw5bQERGrg",
  "key17": "3dMtxQLsiMjQ3phGFqynwKfCY4F4jowFjbXmUqSmdhHLivUCscrJRHXznd9czQBFUWNU2aGxaBJURtELFYZwsHDD",
  "key18": "J4ct9YQjP8kZq5H1drbVDbwwrrxSmSJ6YXqiJDVuuqizh4fLn5fMAPaQKQBTMpohbeiHV1BQNHXJXHtkr2MVWMc",
  "key19": "3m3mswKZibGv6rK8cU3FQJzp1dG3Hag2wYD5CKERc2aUYkt6fE78cNtvKzLV17CZVtHKuzNS7drWSsStKedoQyGE",
  "key20": "5PqciqC6kRimZ845NEUy86nCSCMA6mtzuwfbS7oeLPa3depj2kRXQkYJtKkJ57mHggvv1s2EqP9oMTfyFnRSC9vJ",
  "key21": "42HFtMoeLUmMzhSfGWkVB7esGmFNnEiqiQmEV7AxjWaeQ8ahMYaYppqr6JdtArzgkGQ6Ju1cbw2s2W2pbFLe5yJZ",
  "key22": "Ykh45mNAz5n7TzthTFaffdCcEh6eWAeZVECTjoUrSZ4WsqJJbnCTS7oj3msKJijBFJAn45mus1mSHWuoSWG9qCM",
  "key23": "5jA6K89BZs25AVgou5oA9iRar7z8CSn2w1QvzLmKCkbJwBuygFw4VQFjWUihF9MTBipT8NVMNZzsN7wyVvvPytTJ",
  "key24": "2Kz3Uz6EqZDJLxXsARL2pdT6PZqemb4AZP2AiYZNMctaGFkNZ4xCb59AMrzfum9a48uL6UnrbVdbbuBwNahkRbLV",
  "key25": "2rGmABgweYfUpXav9oeTD5ZhMbDaMCmpcAcJC7ppWZwVKyoR6Jo2RbCvoTMNCc5k7wENvmjthFWqLJgg64oWTpcy",
  "key26": "4NxZYAZeAVPGzTMgProjLeFPQcD4B9TntXDBWsgbJtCHY3kxFTb1LcJ51NKKZRkRLUSBFKhzzDe2XE9quM3nBqYq",
  "key27": "3Rdquz7wjw4ESkkkrwzDgHxYb3eNzsWxwxdWdenJwc498hTD2b2UjwHbnNUuM98zrprJxgRCCMbDwj9fnUyP5Kpq",
  "key28": "F6cpsbLqpjeN2Jqev1EVB9txQKgAqUHUkMMZ2vZCXVFCyepr2M3o9gkTjvUYNyWosEt7ypBW26wrqCoMs3Qc6UB",
  "key29": "PhSpsJnbZu4fTUUSYXeMuE48dC9DCjZnj4BnP4w2Ly7Z8kPAqF4VrRCf9iPEYq81upjPxTALyvMpWGms8d3tj9F"
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
