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
    "5DgMsRcMCyVh8kdXHyWGrYAk56XERqSV55FgJZo8w2K2j5Za6obu75ibdhvTqSLQViCYzvQcMQLjh5GrGbBRLVWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ich9R7K4BWR3BPB6XjynvRwAXfubRRC3NDRoKoKiZzar9DDuQ14GPuFSvSuyfmxQuBsqKqPLB6dQ1Y1ViVb5G7p",
  "key1": "FUcwWHr4UweZkgZVehTJWNnPS2scM2iDZPBaLC6hJFacn5DgmfhpAR4m7SFTGkYi4y4De8Q3r9GYYc7VBpPurpx",
  "key2": "4psx7PaKYj72LzshYqpTtWFZT2hK1Nrz78VZ6UUzfH5MX5EZ9wevk3yo9JHQxr5VHr8A8qvKxk9mrz4NAbku8fC1",
  "key3": "5gaufCWp3ApcGM3PEJptKJccVPEMCnZ4LNFbHWerLroAk4BkjKfss4AnmmQTExHw8AaLNCQZHMzieZUZvQxk5UAT",
  "key4": "hMJdTicEK3Qzz5jkfbVyCAL8QcLARP42B5oP7FATkodqDYevQLhzDgPxrbTMn1P3i6sTFKGhNotizqwApt8RD15",
  "key5": "5Gz7t2Nhykv56xPQj2SyAeE3vHfjEHA8HnYCCzBD4hvCV3HhfNXFf3jJwZ8jkXjBpGutGbbo6oBf6U3XH2E2De9D",
  "key6": "5k2P5MkUDHjtvbJUirBDDEXNpus8nfSMLui3477VSyPFLtGjCbqQEf4DNz4pLdgHcA6m4qw2oRyRbkZmQ2wiW8LH",
  "key7": "23bKanuNvGesGbnRhPsSiWTTeXxxKKbqZ4iGADHRrEV22thLXYsCx3gQ5RyMvDgwGTPkakhEEU4jSJvVp33sQqwW",
  "key8": "5oxpgKXwPZkgjqB5H6mUgZFRDbGk3pXUxV5jzz1MHHmJ4AnVXMTMhYfx46Me4DpxgCH5fLEf4etemWyhRnha374A",
  "key9": "3GvvDx9L1guH6st12Xs73bZ7hwiUatfHuKQz5mE3AjoEjMuveosVZ71gG9ZUd38o89Vcn3bdtXwTiGjrtidSex9J",
  "key10": "3g5tdKkSbsjVxb4mpBBYPf8c95DpjeE1KkYrHNTfsu69tTRVosm35ndNR96wHeFmBCimZGGqouMXx3qqpw8dZjEt",
  "key11": "RTRZyrrFFwvfe9ZZ1qX5qynpYYPZhhY4w7XfkyRhTrVbPDVmki1fjnmPEuTYx6LHX27cYaisoytBHBfkVW7s4td",
  "key12": "4y3Gpr9npn2ZgECryGGqw9XML25ieR6LU55caQgnzk2ARdaJzrAiR51oV62burEFddCTW5VpyauE4AkYwRXj82rR",
  "key13": "5ZBHjvaZwnEDrWWWRFQNmLEZ1BH3f5ZYRritRqvgjq9z57mNxdrk5UKLfKyLt7MBLv6H93ntPmrCLDDStwiBTKFW",
  "key14": "4Cb9fBDAnfJsTGozgVBzvQcSa2VjpgEfZKHpaXAZ3ZgtHmxPAmBg6bsAZ7UCR659v4K4sTnzQSRGyTYmco6Ad9g1",
  "key15": "qR7zcPjTg3aFSNcTBprqGcK5HgubK9ai8X1Bqo6QEHRKKBfZCZwh5cAsN3hhjfVUH2sytNAxNgysW6LJvz7A8Pu",
  "key16": "3u68xge7qe216BA52WzcK6VDCD78qVwbiMfRqCRaQ5JPQ54F4VjqXwLV4taXtWdorsNNXCRTeNNFeXrTKnnx2rQ8",
  "key17": "6oiunKa9SNxpRfSg1Qw5MMkNdqUpjPMLXmag4EKLzZX55ERWFjwK84eWgEjDrnrrcnaCJgqseGfc8SuMMp1btKV",
  "key18": "3MEYVm8KjNgb9RVZfEcrdWv2uHb31BzHiUXftaHrzYmeVXYxhDX9cFtg8NitDXdQtGgcmSEAm9i8eXWktXd4UGGn",
  "key19": "3Ppyp9PMPNMnpEa8JREXZnX2j3vx2zwtoMxEvhRBVANyZHZPh5FhoherQk1REpsVjdZpzH23Q1XfLLLzLAZ9qxMw",
  "key20": "38YWufyyVsWNwnsZ5B8GkSEfL3sdUeugjrtX7YkT6X3P1xnSFiRpVebwq4zXxTGmWcvmbYg8DtepKkuZMNPAgueu",
  "key21": "5ppN9ZykMwcgNYvaaHBjpNtTexq1HGA8dG8feAKZhkkikyJQq9fQoCi5ynUKVsKHu1VSfTxnncSaMPo6sehD5oxR",
  "key22": "Nxb5wBV9encgArcWy8JJNBC95GUnnqrUkDEhBCMUqhweXgBPSa33MsXFWpq2w1XU5iDPED2hZpmKiuLPmq7vC4H",
  "key23": "9j74iuLai52yHeXQoeTiAQQYnboeMVAWnSeeWJAJ4RHawDKgHbcZsfMdJADavssJY5JR97LKHtbYUHCacbU9L9r",
  "key24": "2Peyi6Y2Cj9ayjsJxDoTjqbatzUAb6zWtTudm4FZtBDp41sxMV5aFDUN83rUqQqaiegaTMHAdzAWaCfptT1QmXCG",
  "key25": "36ZvxFvhX68iWjt5bj5cAyvoTbK1TVJxLBa9rea4Wcv6MgCFGi9R988pUbxp6qTii1hkQBsriXBjU6ZBoGNrnZr"
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
