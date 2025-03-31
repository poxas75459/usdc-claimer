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
    "4pPoj21rcxvrC2xz7xZ1P3CokqtXoLF2Df8CDsLSoQn1tArf7N72t3wwqwhoGp5rCc4ipkBYzd3KgrSLotkLHFGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJSqirxK6cAzn2KttGGADjQVPuykBjsL4GHWj3yzRevFuMoszN964omvg22ZFcLDaMQWY7ctSrFh8kNvqk31vrU",
  "key1": "3uYXqaHAFRGVZk63rDcQojLHVwhm51ViBN2vsUM2nJEYtuiNmvvPNDtJPfQojoVRPYxKV78AUMJgmAvUcnc2G9UJ",
  "key2": "oJQUDzQi37KtWiZPfEeKyCSg9dh4v9fEr12jJockdn8qgP9tCrs7QWTr8CTW1rP4tRcBGwyrSsme19XBTc5gZ4c",
  "key3": "27NXEp7ogKrJVcbZehrCpMeehcvhdNZGP9C41agk5m88sPMkkKAxUw324nnteSqgczjKe17GrakXxgnR9oBdBHqk",
  "key4": "3csXUK8f18xi4jB3VwQeRtHFXyS88juLMvVqrn5b1Vq4bre8STqsSx27xXmEGX2epwwHmN4twZwzbFdJqQ9Zyf2f",
  "key5": "2Waj8zok6wTpthhZTUhQnPXqhx7huVZh6hNcjTBfZrd5VHXBeu3hZCZQtx5hPw8j36AdPJdqkCzMsWkoGEDkpxmv",
  "key6": "5vzew7ekWTAxZEFqRuGofL7zRbBRtSwQbZQiGwWqeYabMbpmEVZGeTq9h2u9x732DJvWakH6T8mNo48iateGviDX",
  "key7": "4RMMUj6wkV3C9Y3XG6iACnL7oSS7FKFnHPiwfQtUzBoXfQgnXCz11PzMprpoY1RmS7Q5Rrwh2kPdQk2Df4rCttsV",
  "key8": "52hQeSqeWgPmXdo7oojGYiKporkUE6NG3N6T5RrQbQZGHPKxsRVo6Ma3fdqtsS7gzQ6L8BKVgeyYms79ACHSyHr6",
  "key9": "5m6357PExoD7oPTs1udFjkLaeyCjnWjJrmBW6sZ6PJDe2mg3iyXH8R9cZRdKXD6FCiH6oFyHyGGR12YEDruyo183",
  "key10": "5rmwEV6ew518MkUUsM3hvrAb4mqkA12DWTZaQaSY9wmXDmFdgbEdFwyHCqfYkUG2uWrNjsYc16DhprpccwYgBeM6",
  "key11": "5oYNpi9StK4S7CF6F32nT5Hd3aHjM9VDR2nSmnzc5XHGvN6HnD32u5iwd56BttP45hfYsaVJyvUZqDS3Z8FBU3Rb",
  "key12": "5pon4KDGmqmx7fPgG4oxWiEcigQH4fJeWFCBDwyxR1NqGXhkD5d6bXtnZD5eQpSXom9yPHfUa2XnJB9DCPfcu3Cd",
  "key13": "4TS3NJ4WpTsVL3aXBDtbYdKSCBod9wF5oaWFg1HcJUekEnv465tXRBe67JcsNAfBybHg1WzzAyGwyLWrozA7f2Cp",
  "key14": "5QyNVFdtFyMNyL2coqr9A4TYeRbcL7YWhbARk7LhiFZcKVWWxibRrWEXkW6JL86BDUE3ypxHTRUR7nqDwiHxuYBS",
  "key15": "3SXEcTMLgbE7kBWLt2ce3n9cSQ7DdhFPaXjA8J9DpsywGjbrvMF4GSKCLJd7bfFU2CNr7m7Te2PwwQ1noU97kb4R",
  "key16": "34GLrVJNLJMAwaeQMF1ed7kkupAtZyzVfKjX9fsPybL7Nu5LCzY9KxpvcKTz3EV15nJuq61bC8rFnWmTqtyZAbpo",
  "key17": "2fsRcgQ4VyNqKWpKYLw8pgi99eouXBJey8tSt6X3egr1TWEMXsCs4WDZ6z9iSrMcU7oMWXnXjeUeDB61cUqDxM4b",
  "key18": "3DzBCjR2bpUsVK1G6xQ5y1nsDSLdqy1bNs9rCRM7gw48d8RANTgK5rp8kdeaDySQwZAV8fy3KTWcLD4mjNqNDN8d",
  "key19": "4j3G1Ad8WBqgnoejGe1ADVVS2DNZt54VPTq2MuZZ36bnwR9FEGCQZmMsAtRxYr2Xp8h4SusAKg72YB5Ybo3FiZAc",
  "key20": "5hGnuYBeqZ7mjW3fAHKnDktko2xLLQ4cMstMaqUBZGyUEqX5owMZMyPTLDURLZQHTgfNL5DK8czJucCEcbkybPi7",
  "key21": "3hg1V5szU4Kdv7hKQkjHZDgfy2JPTGmYhfApF2p9FuWcUQa3DxZrQXBmfeLx9Tnvy6pvMYFEenPPgpX2dubx3Uza",
  "key22": "26571G7HZTWYzGHvBHHQ5A35UbWucyBR6ruPjBzQWSZKpqq15ewJVpv6wGRup1jKDk4JM7DpVB2Nx8vz8hooUFaU",
  "key23": "5E1GCaNW57hEwsUfnt8WhhcroZ2jVHSuZ5uXn7yAgdUe2jvPEQPuAjHjnLt9q1rwLFsGXxwCVn2Cs2U4U7eawBRo",
  "key24": "3VvLm49oVAXiFUoYMf6jHtEzY1qdrzavRSJEvVV6q9feF9XogWFMDU8HiPRBb43wceuBaHBD9qULkaixFXt26BEH",
  "key25": "375cJV5zrPJZEf352mLQpQkhybdgo1czEQCo3Ygzk6YKaNs3dz1EqPYwGHyWsVxLtihdC9EqfsrgWYTuyDX81K6D"
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
