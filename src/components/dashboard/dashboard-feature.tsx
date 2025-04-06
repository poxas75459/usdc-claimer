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
    "3F8kCyWMvDErByFZQJqUedFjSaW6YH6RULujdRP9DryZ5oo49SjTJLBhJFgzkEev773d9SDMJkeEfzgGRLBrMHVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fraExvyfV2g5rVxfsqeLUQoSpdkjDLWAUzgPc1FV6iRkQ5dqw9V2H8hZSCwaq6KuJekMseeu4zekrQKDC4kQ6nL",
  "key1": "dNyCnNpiPAytQWbehvnWSX3c11jwiVtWnYdGxrz73uHeUjmV4rpvsicLk9aZaeiaf9xjq3TbjGTeJwSe7fXLCwq",
  "key2": "4HmYc2AX8y93wbJD53ibQf6MUew2WG1WCSc3v4drcgJdmV2mTkpuv5bWpQ8dHo4mWNE5axviMxdky3mSLoYvGZbJ",
  "key3": "tmRg6A3Mnk9FJhd1Z8ccQzZK3xj7Cs2RWVhctccHv7zDvfbiFLrwN9DEt9drFRPWbs2ZXrzYf7b8FPX6FhEtnn4",
  "key4": "48hmxBxNpV7NHJrnvSyAsPabRx9twstHmwXMQMvcprZosFCBEuvcbBZw9ufcW3HzyT1NX48bxWbH8GKtAfhAknGd",
  "key5": "7YmCqCKv7ixuaUeQdhi2o2oRBw5X2RoCcjYgVGZyDsFvvikXHFmnaQcZpcVB3wKAaRq2AJDJbS9xTby9RfsWYH3",
  "key6": "3QnSnaKLeznmoEwnykAz3A15Qtj9g3YkTEdtVHKsWQUn9pKCHrm3GbkMADTRxk9Cat7zu8QQYKFDn1HzGyXp6QRe",
  "key7": "4bfdTRQdtEnBYoMHXARc5hN11ufNHDmwNiTiQbTkbzk1xWuyVaJzxNYA5PubTrXAnRxaKi2aCw8ye2TfRpvtKTwK",
  "key8": "4JCReEvcNVas6Ewz59fcrBZgocNjzDBWrMAFh2UvtkRYk9LVcyu2Ys8SzT7Ys5hWQFw4TYkGKG9GaNKgC2MgnLe5",
  "key9": "4muYKkz1NWKYTnJrSedm4SvkSQfWSAALU6tLUkJ9LoGgLfXeAm8v5dLdnDEhc3jfMDeZsLs1V6bdg5rCRQXndjqN",
  "key10": "4aRuoxee4b3LyuFHT3s6x1HiJrLYeQcvUUL8SKNZh4fNqDHTSCX1P49WAwLH6uGrWyz5uUpN3HswJV2aRv7daBbs",
  "key11": "qRGfoPHuFp9TS1uRttdGdFsQDhTKGQSfiPmFKk5RMfgEyXkk5aeQzwvzoSePm7gqQVLtAogkwZfjGn3h1g28uBW",
  "key12": "529WyzzqV5y6NcfbFG5qLTbdyP77u2946eKPgUennBYJzy71BvQ73MuLqA6Xo91qZrSfkSEfBwEfigtLQCL2moQL",
  "key13": "37knf8pUmt4fhrbkPUmDYP6YDmPvZPp5M9wK2no6oi74Y6W7GEPrkJym2HyuMmDovaHcyFK4QHYWxnRiHANz6Hby",
  "key14": "31q2a7EXPvZF6MUGiN6AQbSeXb8BRB5wtfqcBU2KGn4mEPy3ikTqWn3SkXuAQjgm1BUWgSiu2kfooNEuKZUxDSvd",
  "key15": "58J3hA1qVE9VhxoDhS678xLx7LXRR5Y37PJaSKcyPL45DrwTeK3Kboa832X6gueuaSFwK7FPzhkV9AUmFvrmpEQe",
  "key16": "BnoiUBe7HsvsRHGXNfMnjjRMCknH4AZkaX4BMMfyrRv5NkweZkJ3pj2taLr6KfJhQxgmMDqocqS8sKSBEHMRfq3",
  "key17": "38YHFYqr8E4Z2NZFxP9Lh5BqUDZaFNh7oqjBeoQWiTnyfDeVty2V9eMHyv5RGgDTT4VTvPs6frrY19zJapSwFFjB",
  "key18": "3t16uUoUnZaUpvGrgNY2Ed8puv3HX5pQnLJwtpHovDCXgWukGKAX5pq8LQDFLXyhbMQBeTvESUVf1748frcm3YTM",
  "key19": "5ZEvo1M1H5YdSyPwpdGoAsBq8wmDYusRLuVVn1RhcQPBd5xJrGpgngiomTaKzEwiHL9TMCPKerJaiQchVJa2Dnak",
  "key20": "21i3byMiKv8gP9ZokoQRcebD7tQzXkiSg84ZmcN9DMuBp8pt2NrAhSHXCJQu4YgniLNnUTpfEDw7naMFjZF8wTtq",
  "key21": "3PRWa682ZbUD9oCqdpxkKeUDpq29KTwYst6uJk84DbtFpr1Wq7msbZt9wjpoP3aJdLLfeM3swbJwmA18dwnMofjj",
  "key22": "41fMg17V5RgBfS5r8Pg2rq8NCbwYC6oSpdPTHbyvyhLSrh3DHX7gP6cVCwmJcqndjZk3AAZR4uSCG1FPpM6mp7G",
  "key23": "5cKsCcJnqF3iKfeUApr2vEtcrzYCtShu2RzdDkCu7LBjPrBvU6PRvSx8GLQZgPfJ3tZiHSUNP6L6Fs2xYTogCRBx",
  "key24": "44C8nim7Ux8TX41todFcfMnHMX5bn98x4X5FFhtriAPbuCU6z5JyMWQfMUGVhoHCtzdWDyhFBKAfF2jar6KfaEsZ",
  "key25": "2gnVQAeU5zd84Q1dfpVChf5n5boMM5xQS67ghHwjiQKRn3PYpByCVWEZAGwHmiRatKq22unXERPXGQ3qDFXJMfuU"
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
